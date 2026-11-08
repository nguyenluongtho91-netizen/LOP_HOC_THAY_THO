// scripts/sync_hoa7_exams.js
// Đồng bộ 40 đề thi Hóa Học 7 (Lấy Gốc Hóa Học THCS chuẩn GDPT 2018) lên Supabase
import { getLayGocHoaStandardExamsForGrade } from '../src/services/layGocHoaExamService.ts';

const SUPABASE_URL = 'https://kbowwwbmyrwmxmjnopsm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Q9nAR2kWvrOh7ySG7R4iDA_1QOKtB5T';

const headers = {
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

async function main() {
  console.log('🚀 Bắt đầu quá trình đồng bộ 40 Đề Thi Môn Hóa 7 lên Supabase...');
  const exams7 = getLayGocHoaStandardExamsForGrade('7');
  console.log(`📋 Tổng số đề Hóa 7 cần đồng bộ: ${exams7.length} đề`);

  let successCount = 0;
  let updateCount = 0;

  for (const stdExam of exams7) {
    const title = stdExam.title;
    const examPayload = {
      title: title,
      data: {
        title: title,
        grade: 7,
        subject: 'Hóa học',
        chapter: stdExam.chapter,
        duration: stdExam.duration || 30,
        total_questions: stdExam.questions.length,
        standard_id: stdExam.id,
        questions: stdExam.questions
      }
    };

    // Kiểm tra xem đề đã tồn tại chưa
    const encodedTitle = encodeURIComponent(title);
    const checkUrl = `${SUPABASE_URL}/rest/v1/exams?select=id,title&title=eq.${encodedTitle}`;

    try {
      const checkRes = await fetch(checkUrl, { headers });
      const existing = await checkRes.json();

      if (existing && existing.length > 0) {
        const examId = existing[0].id;
        const updateUrl = `${SUPABASE_URL}/rest/v1/exams?id=eq.${examId}`;
        await fetch(updateUrl, {
          method: 'PATCH',
          headers,
          body: JSON.stringify(examPayload)
        });
        updateCount++;
        console.log(`  [CẬP NHẬT] [${updateCount}] ${title}`);
      } else {
        const insertUrl = `${SUPABASE_URL}/rest/v1/exams`;
        const insertRes = await fetch(insertUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify(examPayload)
        });
        if (insertRes.ok) {
          successCount++;
          console.log(`  [TẠO MỚI] [${successCount}] ${title}`);
        } else {
          const errText = await insertRes.text();
          console.error(`  [!] Lỗi khi chèn '${title}': ${errText}`);
        }
      }
    } catch (err) {
      console.error(`  [!] Lỗi kết nối khi đồng bộ '${title}':`, err.message);
    }
  }

  // Cập nhật 10 đề cũ "[LẤY GỐC HÓA HỌC] - Phần 1A" để bổ sung grade = 7 vào data
  console.log('\n🔄 Đang cập nhật grade cho 10 đề [LẤY GỐC HÓA HỌC] cũ trên Supabase...');
  try {
    const oldExamsUrl = `${SUPABASE_URL}/rest/v1/exams?select=id,title,data&title=like.*L%E1%BA%A4Y%20G%E1%BB%90C%20H%C3%93A*`;
    const oldRes = await fetch(oldExamsUrl, { headers });
    const oldList = await oldRes.json();

    for (const oldEx of oldList) {
      const curData = oldEx.data || {};
      curData.grade = 7;
      curData.subject = 'Hóa học';
      curData.chapter = 'Phần 1A: TN Nguyên Tử Khối';

      const updateOldUrl = `${SUPABASE_URL}/rest/v1/exams?id=eq.${oldEx.id}`;
      await fetch(updateOldUrl, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ data: curData })
      });
      console.log(`  [ĐÃ GẮN KHỐI 7] ${oldEx.title}`);
    }
  } catch (err) {
    console.error('Lỗi khi cập nhật đề cũ:', err.message);
  }

  console.log(`\n🎉 HOÀN THÀNH ĐỒNG BỘ: ${successCount} đề tạo mới, ${updateCount} đề cập nhật!`);
}

main().catch(console.error);
