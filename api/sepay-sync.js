/**
 * api/sepay-sync.js
 * Đồng bộ giao dịch ngân hàng Vietcombank trực tiếp từ SePay API (sepay.vn)
 * Tự động quét và gạch nợ học phí cho học sinh
 */

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://kbowwwbmyrwmxmjnopsm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Q9nAR2kWvrOh7ySG7R4iDA_1QOKtB5T';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function removeTones(str) {
  return (str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đ]/g, 'd')
    .replace(/[Đ]/g, 'D')
    .toUpperCase()
    .trim();
}

export default async function handler(req, res) {
  const apiToken = req.body?.api_token || req.query?.api_token || process.env.SEPAY_API_TOKEN;

  if (!apiToken) {
    return res.status(400).json({
      ok: false,
      error: 'Thiếu SePay API Token. Vui lòng lấy API Token từ my.sepay.vn'
    });
  }

  try {
    const sepayRes = await fetch('https://my.sepay.vn/userapi/transactions/list?limit=50', {
      headers: {
        'Authorization': `Apikey ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!sepayRes.ok) {
      const errText = await sepayRes.text();
      return res.status(sepayRes.status).json({
        ok: false,
        error: `Lỗi kết nối SePay: ${errText || sepayRes.statusText}`
      });
    }

    const data = await sepayRes.json();
    const transactions = data?.data?.transactions || data?.transactions || [];

    const { data: allStudents } = await supabase.from('students')
      .select('id, full_name, email, parent_phone, zalo, student_code')
      .eq('status', 'active');

    let matchedCount = 0;
    const matchedList = [];

    for (const tx of transactions) {
      const amount = parseFloat(tx.amount_in || tx.transferAmount || 0);
      if (amount <= 0) continue;

      const desc = tx.transaction_content || tx.content || tx.description || '';
      const refCode = tx.reference_number || tx.referenceCode || tx.id?.toString();
      const date = tx.transaction_date || tx.transactionDate || new Date().toISOString();

      const cleanDesc = removeTones(desc);

      let student = null;
      for (const st of (allStudents || [])) {
        if (st.student_code && cleanDesc.includes(st.student_code.toUpperCase())) {
          student = st;
          break;
        }
        const cleanName = removeTones(st.full_name);
        const parts = cleanName.split(/\s+/).filter(Boolean);
        const shortName = parts.length > 2 ? `${parts[0]} ${parts[parts.length - 1]}` : cleanName;

        if (cleanName.length >= 4 && cleanDesc.includes(cleanName)) {
          student = st;
          break;
        }
        if (shortName.length >= 6 && cleanDesc.includes(shortName)) {
          student = st;
          break;
        }
      }

      if (student) {
        const noteTarget = `[sepay] ${desc}`.slice(0, 200);
        const { data: existing } = await supabase.from('payments').select('id')
          .eq('note', noteTarget)
          .eq('amount', amount)
          .maybeSingle();

        if (!existing) {
          await supabase.from('payments').insert({
            student_id: student.id,
            amount,
            method: 'transfer',
            date: date.slice(0, 10),
            note: noteTarget,
          });

          await supabase.from('tuition_notifications')
            .update({ is_paid: true, updated_at: new Date().toISOString() })
            .eq('student_id', student.id)
            .eq('is_paid', false);

          try {
            const { data: storeRow } = await supabase.from('exams').select('id, data').eq('title', '__TUITION_NOTIFICATIONS_STORE__').maybeSingle();
            if (storeRow?.data?.items) {
              const updatedItems = storeRow.data.items.map(item => {
                if (item.student_id === student.id && !item.is_paid) {
                  return { ...item, is_paid: true, updated_at: new Date().toISOString() };
                }
                return item;
              });
              await supabase.from('exams').update({ data: { items: updatedItems } }).eq('id', storeRow.id);
            }
          } catch {}

          matchedCount++;
          matchedList.push({
            student_id: student.id,
            student_name: student.full_name,
            amount,
            ref_code: refCode,
            desc
          });
        }
      }
    }

    return res.status(200).json({
      ok: true,
      total_transactions: transactions.length,
      matched_count: matchedCount,
      matched_students: matchedList,
      message: matchedCount > 0
        ? `Đã đồng bộ SePay: Tự động gạch nợ thành công cho ${matchedCount} học sinh!`
        : `Đã kiểm tra ${transactions.length} giao dịch gần nhất từ SePay. Chưa có giao dịch học phí mới.`
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
