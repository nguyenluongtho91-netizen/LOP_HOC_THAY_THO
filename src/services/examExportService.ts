// src/services/examExportService.ts
// Dịch vụ xuất bảng điểm Excel chuyên nghiệp, chuẩn hóa in ấn A4 thẩm mỹ cao cho Thầy Thọ

import ExcelJS from 'exceljs';
import { supabase } from '@/lib/supabase';

const formatDuration = (seconds?: number) => {
  if (!seconds || seconds <= 0) return '0 giây';
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s} giây`;
  return `${m} phút ${s.toString().padStart(2, '0')} giây`;
};

const formatDate = (dateObj: Date | string) => {
  const d = typeof dateObj === 'string' ? new Date(dateObj) : dateObj;
  if (isNaN(d.getTime())) return '—';
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())} ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
};

const getRankClassification = (score: number | null | undefined): { label: string; color: string; bg: string } => {
  if (score === null || score === undefined) {
    return { label: 'Chưa làm', color: '64748B', bg: 'F1F5F9' };
  }
  if (score >= 10) {
    return { label: 'Xuất Sắc (10.0)', color: 'B45309', bg: 'FEF3C7' }; // Gold amber
  }
  if (score >= 8.0) {
    return { label: 'Giỏi', color: '047857', bg: 'ECFDF5' }; // Emerald green
  }
  if (score >= 6.5) {
    return { label: 'Khá', color: '1D4ED8', bg: 'EFF6FF' }; // Blue
  }
  if (score >= 5.0) {
    return { label: 'Trung Bình', color: 'C2410C', bg: 'FFF7ED' }; // Orange
  }
  return { label: 'Cần Cố Gắng', color: 'BE123C', bg: 'FFF1F2' }; // Rose
};

export interface ExportRoomOptions {
  roomId: string;
  room?: any;
  exam?: any;
  submissions?: any[];
  notSubmittedStudents?: any[];
}

export async function exportExamRoomToExcel(options: ExportRoomOptions | string) {
  let roomId = typeof options === 'string' ? options : options.roomId;
  let room = typeof options === 'object' ? options.room : null;
  let exam = typeof options === 'object' ? options.exam : null;
  let submissions = typeof options === 'object' ? options.submissions : null;
  let notSubmittedStudents = typeof options === 'object' ? options.notSubmittedStudents : null;

  // 1. Tải thông tin phòng thi và đề nếu chưa có
  if (!room || !exam || !exam.data) {
    const { data: roomData, error: roomErr } = await supabase
      .from('exam_rooms')
      .select('*, exams(id, title, data), classes(*)')
      .eq('id', roomId)
      .single();

    if (roomErr || !roomData) {
      throw new Error(roomErr?.message || 'Không tìm thấy thông tin phòng thi');
    }
    room = roomData;
    exam = roomData.exams;
  }

  // 2. Tải danh sách bài làm
  if (!submissions) {
    const { data: subsData, error: subsErr } = await supabase
      .from('exam_submissions')
      .select('*, students(id, full_name, student_code)')
      .eq('room_id', roomId)
      .order('submitted_at', { ascending: false });

    if (subsErr) {
      throw new Error(subsErr?.message || 'Không thể tải danh sách bài làm');
    }
    const rawSubs = subsData || [];
    submissions = rawSubs.filter((s: any) => s.score !== 0);
  }

  // 3. Tải danh sách học sinh chưa làm
  if (!notSubmittedStudents && room.class_id) {
    const { data: enrolledData } = await supabase
      .from('enrollments')
      .select('student_id, students(id, full_name, student_code)')
      .eq('class_id', room.class_id)
      .eq('status', 'active');

    if (enrolledData) {
      const activeStudentIds = new Set((submissions || []).map((s: any) => s.student_id));
      notSubmittedStudents = enrolledData
        .filter((e: any) => !activeStudentIds.has(e.student_id))
        .map((e: any) => e.students)
        .filter(Boolean);
    } else {
      notSubmittedStudents = [];
    }
  } else if (!notSubmittedStudents) {
    notSubmittedStudents = [];
  }

  const examQuestions = exam?.data?.questions || [];
  const className = room.classes?.class_name || room.classes?.name || 'Tất cả học sinh';
  const examTitle = exam?.title || 'Đề kiểm tra';
  const timeLimit = room.time_limit || 45;
  const roomCode = room.code || '—';

  // Sắp xếp học sinh đã nộp bài theo điểm giảm dần (hạng cao nhất lên đầu)
  const sortedSubs = [...submissions].sort((a, b) => {
    const scoreA = a.score ?? -1;
    const scoreB = b.score ?? -1;
    return scoreB - scoreA;
  });

  // Sắp xếp học sinh chưa làm theo bảng chữ cái tiếng Việt
  const sortedNotSubmitted = [...notSubmittedStudents].sort((a, b) =>
    (a.full_name || '').localeCompare(b.full_name || '', 'vi')
  );

  const totalEnrolled = sortedSubs.length + sortedNotSubmitted.length;
  const submittedCount = sortedSubs.length;
  const notSubmittedCount = sortedNotSubmitted.length;

  // 4. Khởi tạo Workbook ExcelJS chuẩn mực
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Lớp Học Thầy Thọ';
  wb.lastModifiedBy = 'Thầy Nguyễn Lương Thọ';
  wb.created = new Date();
  wb.modified = new Date();

  const ws = wb.addWorksheet('Bảng Điểm Chi Tiết', {
    pageSetup: {
      paperSize: 9, // A4
      orientation: 'landscape', // Khổ ngang vừa khít mọi cột
      fitToPage: true,
      fitToWidth: 1,
      fitToHeight: 0,
      margins: {
        left: 0.4,
        right: 0.4,
        top: 0.5,
        bottom: 0.5,
        header: 0.3,
        footer: 0.3
      }
    },
    views: [{ showGridLines: true }]
  });

  // Thiết lập độ rộng cột chuẩn mực (không bao giờ bị cụt chữ hay lỗi ###)
  ws.columns = [
    { key: 'stt', width: 8 },         // A: STT
    { key: 'code', width: 14 },        // B: Mã HS
    { key: 'name', width: 28 },        // C: Họ và Tên
    { key: 'class', width: 14 },       // D: Lớp Học
    { key: 'score', width: 13 },       // E: Điểm Số
    { key: 'rank', width: 17 },        // F: Xếp Loại
    { key: 'correct', width: 14 },     // G: Số Câu Đúng
    { key: 'percent', width: 13 },     // H: Tỷ Lệ (%)
    { key: 'attempts', width: 11 },    // I: Lần Thi
    { key: 'violations', width: 16 },  // J: Rời Tab
    { key: 'duration', width: 18 },    // K: Thời Gian Làm
    { key: 'time', width: 20 }         // L: Thời Gian Nộp
  ];

  const thinBorder: Partial<ExcelJS.Borders> = {
    top: { style: 'thin', color: { argb: 'CBD5E1' } },
    left: { style: 'thin', color: { argb: 'CBD5E1' } },
    bottom: { style: 'thin', color: { argb: 'CBD5E1' } },
    right: { style: 'thin', color: { argb: 'CBD5E1' } }
  };

  const headerBorder: Partial<ExcelJS.Borders> = {
    top: { style: 'medium', color: { argb: '0F766E' } },
    left: { style: 'thin', color: { argb: '14B8A6' } },
    bottom: { style: 'medium', color: { argb: '0F766E' } },
    right: { style: 'thin', color: { argb: '14B8A6' } }
  };

  // ── DÒNG 1: TIÊU ĐỀ TRƯỜNG/TRUNG TÂM ──────────────────────────────────
  ws.mergeCells('A1:L1');
  const row1 = ws.getCell('A1');
  row1.value = 'LỚP HỌC THẦY THỌ – HỆ THỐNG LUYỆN THI & LẤY GỐC TOÁN & HÓA HỌC';
  row1.font = { name: 'Arial', size: 14, bold: true, color: { argb: '0F172A' } };
  row1.alignment = { vertical: 'middle', horizontal: 'center' };
  ws.getRow(1).height = 32;

  // ── DÒNG 2: TIÊU ĐỀ BẢNG ĐIỂM ──────────────────────────────────────────
  ws.mergeCells('A2:L2');
  const row2 = ws.getCell('A2');
  row2.value = 'BẢNG ĐIỂM VÀ ĐÁNH GIÁ KẾT QUẢ THI CHI TIẾT';
  row2.font = { name: 'Arial', size: 16, bold: true, color: { argb: 'B91C1C' } };
  row2.alignment = { vertical: 'middle', horizontal: 'center' };
  ws.getRow(2).height = 30;

  // ── DÒNG 3: TÊN ĐỀ THI ────────────────────────────────────────────────
  ws.mergeCells('A3:L3');
  const row3 = ws.getCell('A3');
  row3.value = `Tên Đề Thi: ${examTitle.toUpperCase()}`;
  row3.font = { name: 'Arial', size: 11, bold: true, color: { argb: '1E40AF' } };
  row3.alignment = { vertical: 'middle', horizontal: 'center' };
  ws.getRow(3).height = 24;

  // ── DÒNG 4: THÔNG TIN PHÒNG & THỜI GIAN ───────────────────────────────
  ws.mergeCells('A4:L4');
  const row4 = ws.getCell('A4');
  const nowFormatted = formatDate(new Date());
  row4.value = `Lớp: ${className}   |   Mã phòng: ${roomCode}   |   Thời gian: ${timeLimit} phút   |   Ngày xuất bảng điểm: ${nowFormatted}`;
  row4.font = { name: 'Arial', size: 10, italic: true, color: { argb: '475569' } };
  row4.alignment = { vertical: 'middle', horizontal: 'center' };
  ws.getRow(4).height = 22;

  // ── DÒNG 5: TÓM TẮT SĨ SỐ ──────────────────────────────────────────────
  ws.mergeCells('A5:L5');
  const row5 = ws.getCell('A5');
  row5.value = `Sĩ số danh sách: ${totalEnrolled} học sinh   •   Đã nộp bài: ${submittedCount} em   •   Chưa làm bài: ${notSubmittedCount} em`;
  row5.font = { name: 'Arial', size: 10, bold: true, color: { argb: '047857' } };
  row5.alignment = { vertical: 'middle', horizontal: 'center' };
  ws.getRow(5).height = 22;

  // Dòng 6: Khoảng trắng
  ws.getRow(6).height = 10;

  // ── DÒNG 7: TIÊU ĐỀ CÁC CỘT (HEADER TABLE) ─────────────────────────────
  const headerTitles = [
    'STT (Hạng)',
    'Mã Học Sinh',
    'Họ và Tên Học Sinh',
    'Lớp Học',
    'Điểm Số (/10)',
    'Xếp Loại',
    'Số Câu Đúng',
    'Tỷ Lệ (%)',
    'Lần Thi',
    'Rời Tab (Vi Phạm)',
    'Thời Gian Làm',
    'Thời Gian Nộp'
  ];

  const headerRow = ws.getRow(7);
  headerRow.height = 34;

  headerTitles.forEach((title, idx) => {
    const cell = headerRow.getCell(idx + 1);
    cell.value = title;
    cell.font = { name: 'Arial', size: 10, bold: true, color: { argb: 'FFFFFF' } };
    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '0F766E' } // Xanh ngọc Teal sư phạm sang trọng
    };
    cell.border = headerBorder;
  });

  // ── CHÈN DỮ LIỆU HỌC SINH ĐÃ NỘP BÀI ───────────────────────────────────
  let currentRowIndex = 8;
  const validScores: number[] = [];

  sortedSubs.forEach((sub, idx) => {
    const sb = sub.score_breakdown || {};
    const historyTabSwitches = (sb.history || []).reduce((sum: number, att: any) => sum + (att.tab_switches || 0), 0);
    const totalTabSwitches = (sub.tab_switches || 0) + historyTabSwitches;

    const mcCorrect = sb.multipleChoice?.correct || 0;
    const tfCorrect = sb.trueFalse?.correct || 0;
    const saCorrect = sb.shortAnswer?.correct || 0;
    const computedCorrectCount = mcCorrect + tfCorrect + saCorrect;

    const totalQCount = examQuestions.length ||
      ((sb.multipleChoice?.total || 0) + (sb.trueFalse?.total || 0) + (sb.shortAnswer?.total || 0)) || 20;

    const scoreVal = sub.score != null ? Number(Number(sub.score).toFixed(2)) : 0;
    validScores.push(scoreVal);

    const percentVal = totalQCount > 0 ? Math.round((computedCorrectCount / totalQCount) * 100) : 0;
    const rankInfo = getRankClassification(scoreVal);
    const durationStr = formatDuration(sub.duration);
    const submittedTimeStr = sub.submitted_at ? formatDate(sub.submitted_at) : '—';

    const row = ws.getRow(currentRowIndex);
    row.height = 24;

    // Nền xen kẽ: Dòng chẵn trắng, dòng lẻ xám xanh nhẹ
    const zebraBg = idx % 2 === 1 ? 'F8FAFC' : 'FFFFFF';

    // 1. STT
    const c1 = row.getCell(1);
    c1.value = idx + 1;
    c1.alignment = { vertical: 'middle', horizontal: 'center' };
    c1.font = { name: 'Arial', size: 10, bold: idx < 3, color: { argb: idx === 0 ? 'B45309' : '0F172A' } };

    // 2. Mã học sinh
    const c2 = row.getCell(2);
    c2.value = sub.students?.student_code || '—';
    c2.alignment = { vertical: 'middle', horizontal: 'center' };
    c2.font = { name: 'Arial', size: 10, bold: true, color: { argb: '334155' } };

    // 3. Họ và tên
    const c3 = row.getCell(3);
    c3.value = `  ${sub.students?.full_name || 'Học sinh'}`;
    c3.alignment = { vertical: 'middle', horizontal: 'left' };
    c3.font = { name: 'Arial', size: 10, bold: true, color: { argb: '0F172A' } };

    // 4. Lớp học
    const c4 = row.getCell(4);
    c4.value = className;
    c4.alignment = { vertical: 'middle', horizontal: 'center' };
    c4.font = { name: 'Arial', size: 10, color: { argb: '475569' } };

    // 5. Điểm số (Nổi bật theo mốc điểm)
    const c5 = row.getCell(5);
    c5.value = scoreVal;
    c5.numFmt = '0.00';
    c5.alignment = { vertical: 'middle', horizontal: 'center' };
    c5.font = { name: 'Arial', size: 11, bold: true, color: { argb: rankInfo.color } };
    c5.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: rankInfo.bg } };

    // 6. Xếp loại
    const c6 = row.getCell(6);
    c6.value = rankInfo.label;
    c6.alignment = { vertical: 'middle', horizontal: 'center' };
    c6.font = { name: 'Arial', size: 9.5, bold: true, color: { argb: rankInfo.color } };

    // 7. Số câu đúng
    const c7 = row.getCell(7);
    c7.value = `${computedCorrectCount} / ${totalQCount}`;
    c7.alignment = { vertical: 'middle', horizontal: 'center' };
    c7.font = { name: 'Arial', size: 10, bold: true, color: { argb: '047857' } };

    // 8. Tỷ lệ %
    const c8 = row.getCell(8);
    c8.value = `${percentVal}%`;
    c8.alignment = { vertical: 'middle', horizontal: 'center' };
    c8.font = { name: 'Arial', size: 10, color: { argb: '334155' } };

    // 9. Số lần thi
    const c9 = row.getCell(9);
    c9.value = sb.attempt_count || 1;
    c9.alignment = { vertical: 'middle', horizontal: 'center' };
    c9.font = { name: 'Arial', size: 10, color: { argb: '64748B' } };

    // 10. Chuyển tab / Vi phạm
    const c10 = row.getCell(10);
    if (totalTabSwitches > 0) {
      c10.value = `${totalTabSwitches} lần ⚠️`;
      c10.font = { name: 'Arial', size: 9.5, bold: true, color: { argb: 'DC2626' } };
      c10.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FEE2E2' } };
    } else {
      c10.value = '0 (Nghiêm túc)';
      c10.font = { name: 'Arial', size: 9.5, color: { argb: '16A34A' } };
    }
    c10.alignment = { vertical: 'middle', horizontal: 'center' };

    // 11. Thời gian làm
    const c11 = row.getCell(11);
    c11.value = durationStr;
    c11.alignment = { vertical: 'middle', horizontal: 'center' };
    c11.font = { name: 'Arial', size: 9.5, color: { argb: '475569' } };

    // 12. Thời gian nộp
    const c12 = row.getCell(12);
    c12.value = submittedTimeStr;
    c12.alignment = { vertical: 'middle', horizontal: 'center' };
    c12.font = { name: 'Arial', size: 9, color: { argb: '64748B' } };

    // Áp dụng border & nền cho các ô còn lại trong dòng
    for (let c = 1; c <= 12; c++) {
      const cell = row.getCell(c);
      cell.border = thinBorder;
      if (c !== 5 && c !== 10) {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: zebraBg } };
      }
    }

    currentRowIndex++;
  });

  // ── CHÈN HỌC SINH CHƯA NỘP BÀI ─────────────────────────────────────────
  sortedNotSubmitted.forEach((student) => {
    const row = ws.getRow(currentRowIndex);
    row.height = 23;

    row.getCell(1).value = '—';
    row.getCell(2).value = student.student_code || '—';
    row.getCell(3).value = `  ${student.full_name || 'Học sinh'}`;
    row.getCell(4).value = className;
    row.getCell(5).value = 'Chưa làm';
    row.getCell(6).value = 'Chưa tham gia';
    row.getCell(7).value = '—';
    row.getCell(8).value = '0%';
    row.getCell(9).value = 0;
    row.getCell(10).value = '—';
    row.getCell(11).value = '—';
    row.getCell(12).value = 'Chưa nộp';

    for (let c = 1; c <= 12; c++) {
      const cell = row.getCell(c);
      cell.border = thinBorder;
      cell.alignment = { vertical: 'middle', horizontal: c === 3 ? 'left' : 'center' };
      cell.font = { name: 'Arial', size: 9.5, italic: true, color: { argb: '94A3B8' } };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F8FAFC' } };
    }

    currentRowIndex++;
  });

  // ── KHỐI BẢNG THỐNG KÊ KẾT QUẢ ĐÓNG KHUNG CHUYÊN NGHIỆP ──────────────
  currentRowIndex += 2; // Cách 1 hàng trống

  ws.mergeCells(`A${currentRowIndex}:L${currentRowIndex}`);
  const statHeader = ws.getCell(`A${currentRowIndex}`);
  statHeader.value = '📊 THỐNG KÊ TỔNG HỢP KẾT QUẢ THI TOÀN LỚP';
  statHeader.font = { name: 'Arial', size: 11, bold: true, color: { argb: '0F172A' } };
  statHeader.alignment = { vertical: 'middle', horizontal: 'center' };
  statHeader.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E2E8F0' } };
  statHeader.border = thinBorder;
  ws.getRow(currentRowIndex).height = 28;

  currentRowIndex++;

  const maxScore = validScores.length > 0 ? Math.max(...validScores) : 0;
  const minScore = validScores.length > 0 ? Math.min(...validScores) : 0;
  const avgScore = validScores.length > 0 ? (validScores.reduce((sum, s) => sum + s, 0) / validScores.length) : 0;
  const perfect10Count = validScores.filter(s => s >= 10).length;
  const goodCount = validScores.filter(s => s >= 8.0).length;
  const passedCount = validScores.filter(s => s >= 5.0).length;

  const statItems = [
    { label: 'Tổng sĩ số học sinh:', value: `${totalEnrolled} học sinh` },
    { label: 'Số học sinh đã hoàn thành:', value: `${submittedCount} em (${totalEnrolled > 0 ? ((submittedCount / totalEnrolled) * 100).toFixed(1) : 0}%)` },
    { label: 'Số học sinh chưa làm bài:', value: `${notSubmittedCount} em` },
    { label: 'Điểm trung bình toàn lớp:', value: `${avgScore.toFixed(2)} / 10.0` },
    { label: 'Điểm cao nhất:', value: `${maxScore.toFixed(2)} đ` },
    { label: 'Điểm thấp nhất:', value: `${minScore.toFixed(2)} đ` },
    { label: 'Số học sinh đạt ĐIỂM 10 TUYỆT ĐỐI:', value: `${perfect10Count} em 🏆` },
    { label: 'Số học sinh đạt loại Giỏi & Xuất sắc (≥ 8.0đ):', value: `${goodCount} em (${validScores.length > 0 ? ((goodCount / validScores.length) * 100).toFixed(1) : 0}%)` },
    { label: 'Tỷ lệ đạt yêu cầu (Điểm ≥ 5.0đ):', value: `${passedCount} em (${validScores.length > 0 ? ((passedCount / validScores.length) * 100).toFixed(1) : 0}%)` }
  ];

  statItems.forEach((st) => {
    ws.mergeCells(`A${currentRowIndex}:E${currentRowIndex}`);
    ws.mergeCells(`F${currentRowIndex}:L${currentRowIndex}`);

    const labelCell = ws.getCell(`A${currentRowIndex}`);
    labelCell.value = `  ${st.label}`;
    labelCell.font = { name: 'Arial', size: 10, bold: true, color: { argb: '334155' } };
    labelCell.alignment = { vertical: 'middle', horizontal: 'left' };
    labelCell.border = thinBorder;
    labelCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F8FAFC' } };

    const valCell = ws.getCell(`F${currentRowIndex}`);
    valCell.value = st.value;
    valCell.font = { name: 'Arial', size: 10, bold: true, color: { argb: '0F766E' } };
    valCell.alignment = { vertical: 'middle', horizontal: 'center' };
    valCell.border = thinBorder;
    valCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFF' } };

    ws.getRow(currentRowIndex).height = 22;
    currentRowIndex++;
  });

  // ── PHẦN CHỮ KÝ XÁC NHẬN CUỐI TRANG ───────────────────────────────────
  currentRowIndex += 2;
  ws.mergeCells(`A${currentRowIndex}:E${currentRowIndex}`);
  ws.mergeCells(`H${currentRowIndex}:L${currentRowIndex}`);

  const signTitleLeft = ws.getCell(`A${currentRowIndex}`);
  signTitleLeft.value = 'BAN PHỤ HUYNH HỌC SINH';
  signTitleLeft.font = { name: 'Arial', size: 10, bold: true, color: { argb: '475569' } };
  signTitleLeft.alignment = { vertical: 'middle', horizontal: 'center' };

  const signTitleRight = ws.getCell(`H${currentRowIndex}`);
  signTitleRight.value = 'GIÁO VIÊN BỘ MÔN';
  signTitleRight.font = { name: 'Arial', size: 10, bold: true, color: { argb: '475569' } };
  signTitleRight.alignment = { vertical: 'middle', horizontal: 'center' };

  currentRowIndex += 4;
  ws.mergeCells(`H${currentRowIndex}:L${currentRowIndex}`);
  const signName = ws.getCell(`H${currentRowIndex}`);
  signName.value = 'THẦY NGUYỄN LƯƠNG THỌ';
  signName.font = { name: 'Arial', size: 11, bold: true, color: { argb: '0F172A' } };
  signName.alignment = { vertical: 'middle', horizontal: 'center' };

  // ── TẠO FILE VÀ TẢI VỀ TRÌNH DUYỆT ─────────────────────────────────────
  const buffer = await wb.xlsx.writeBuffer();
  const safeCode = (roomCode || 'ROOM').replace(/[^a-zA-Z0-9_-]/g, '_');
  const safeExam = (examTitle || 'De_Thi').replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9 -]/g, '_').trim().slice(0, 40);
  const fileName = `Bang_Diem_Chuan_${safeCode}_${safeExam}.xlsx`;

  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
