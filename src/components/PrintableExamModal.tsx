import React, { useState } from 'react';
import { 
  Printer, X, Sparkles, Info
} from 'lucide-react';
import MathText from '@/components/MathText';
import { LayGocQuestion } from '@/services/layGocExamService';
import { LayGocHoaQuestion } from '@/services/layGocHoaExamService';

interface PrintableExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: 'toan' | 'hoa';
  topicTitle: string;
  topicGrade?: string;
  examNo: number;
  questions: (LayGocQuestion | LayGocHoaQuestion)[];
}

export default function PrintableExamModal({
  isOpen,
  onClose,
  subject,
  topicTitle,
  topicGrade,
  examNo,
  questions
}: PrintableExamModalProps) {
  // Tùy chọn in ấn dành cho phụ huynh
  const [includeAnswerSheet, setIncludeAnswerSheet] = useState<boolean>(true);
  const [includeScratchLines, setIncludeScratchLines] = useState<boolean>(false);
  const [includeSolutions, setIncludeSolutions] = useState<boolean>(true);
  const [examDuration] = useState<number>(40); // 40 phút chuẩn đề kiểm tra

  const examCode = `${subject === 'toan' ? 'TOÁN' : 'HÓA'}-${examNo < 10 ? '0' + examNo : examNo}`;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const subjectLabel = subject === 'toan' ? 'MÔN: TOÁN HỌC' : 'MÔN: HÓA HỌC';
  const gradeLabel = topicGrade || (subject === 'toan' ? 'TRUNG HỌC CƠ SỞ' : 'TRỌNG TÂM CỐT LÕI');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fade-in">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh]">
        
        {/* MODAL HEADER - KHÔNG IN (no-print) */}
        <div className="no-print bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-teal-400 text-slate-950">
                  Chuẩn Đề Thi A4
                </span>
                <span className="text-xs text-teal-200">
                  {subject === 'toan' ? '📐 Toán Học' : '🧪 Hóa Học'} - Đề số {examNo}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1 mt-0.5">
                Bản In Đề Kiểm Tra: {topicTitle}
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL TOOLBAR TÙY CHỌN - KHÔNG IN (no-print) */}
        <div className="no-print bg-slate-100 border-b border-slate-200 px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Tùy chọn bản in:
            </span>

            <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 select-none">
              <input 
                type="checkbox" 
                checked={includeAnswerSheet} 
                onChange={e => setIncludeAnswerSheet(e.target.checked)}
                className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
              />
              <span>Phiếu tô trắc nghiệm (A B C D)</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 select-none">
              <input 
                type="checkbox" 
                checked={includeScratchLines} 
                onChange={e => setIncludeScratchLines(e.target.checked)}
                className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
              />
              <span>Dòng kẻ nháp dưới câu hỏi</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 select-none">
              <input 
                type="checkbox" 
                checked={includeSolutions} 
                onChange={e => setIncludeSolutions(e.target.checked)}
                className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
              />
              <span>Trang đáp án & lời giải (cho PH chấm)</span>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold flex items-center gap-2 shadow-sm transition cursor-pointer text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>In Ngay / Lưu PDF (Ctrl + P)</span>
            </button>
          </div>
        </div>

        {/* HƯỚNG DẪN DÀNH CHO PHỤ HUYNH - KHÔNG IN */}
        <div className="no-print bg-amber-50/90 border-b border-amber-200/80 px-5 py-2 text-xs text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Mẹo cho Phụ huynh:</strong> Khi cửa sổ in mở ra, tại mục <strong>Máy in (Destination)</strong>, chọn <strong>"Lưu dưới dạng PDF" (Save as PDF)</strong> để lưu file đề thi gửi qua Zalo hoặc in ra giấy A4 cho con làm bất cứ lúc nào!
          </span>
        </div>

        {/* ========================================================================= */}
        {/* BẢN IN A4 THỰC TẾ (#printable-exam-sheet)                                  */}
        {/* Áp dụng font Times New Roman, cỡ chữ chuẩn mực 14px, cân đối tuyệt đối    */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-300/60 flex justify-center">
          <div 
            id="printable-exam-sheet" 
            className="w-full max-w-[210mm] bg-white p-8 sm:p-12 shadow-xl text-black leading-relaxed"
            style={{ 
              fontFamily: '"Times New Roman", Times, "Liberation Serif", serif',
              fontSize: '14px',
              minHeight: '297mm',
              boxSizing: 'border-box'
            }}
          >
            {/* 1. HEADER CHUẨN ĐỀ THI QUỐC GIA CÂN ĐỐI 2 BÊN */}
            <div className="border-b-2 border-black pb-3 mb-4">
              <div className="grid grid-cols-2 gap-4 items-start">
                {/* Cột trái */}
                <div className="text-center">
                  <div className="font-bold uppercase text-[13px] tracking-wide text-black">
                    LỚP HỌC TOÁN & HÓA HỌC THẦY THỌ
                  </div>
                  <div className="text-[12px] italic text-slate-800">
                    Bồi Dưỡng Lấy Gốc & Luyện Thi Chuyên Sâu
                  </div>
                  <div className="w-28 h-[1px] bg-black mx-auto my-1.5"></div>
                  <div className="text-[12px] font-bold text-slate-900">
                    MÃ ĐỀ THI: <span className="font-mono text-[13px] font-black">{examCode}</span>
                  </div>
                </div>

                {/* Cột phải */}
                <div className="text-center">
                  <div className="font-black uppercase text-[13px] tracking-wide text-black">
                    ĐỀ KIỂM TRA ĐÁNH GIÁ NĂNG LỰC
                  </div>
                  <div className="font-bold text-[12px] uppercase text-black">
                    {subjectLabel} — {gradeLabel}
                  </div>
                  <div className="text-[12px] italic text-slate-800">
                    Thời gian làm bài: {examDuration} phút (không kể thời gian phát đề)
                  </div>
                  <div className="w-28 h-[1px] bg-black mx-auto my-1.5"></div>
                  <div className="text-[11px] italic text-slate-700">
                    (Đề thi gồm 20 câu hỏi trắc nghiệm khách quan)
                  </div>
                </div>
              </div>

              {/* Tên Chuyên Đề Nổi Bật Ở Giữa */}
              <div className="text-center mt-3 pt-2 border-t border-slate-300">
                <div className="text-[15px] font-black uppercase text-black tracking-wide">
                  CHUYÊN ĐỀ: {topicTitle}
                </div>
                <div className="text-[12px] font-bold text-slate-800 italic">
                  ĐỀ SỐ: {examNo} (HỆ THỐNG 20 CÂU RÈN LUYỆN TOÀN DIỆN)
                </div>
              </div>
            </div>

            {/* 2. KHUNG THÔNG TIN HỌC SINH + KHUNG ĐIỂM SỐ & LỜI PHÊ */}
            <div className="grid grid-cols-12 gap-3 mb-5 border border-black p-3 bg-slate-50/30 text-[13px]">
              {/* Thông tin học sinh */}
              <div className="col-span-7 flex flex-col justify-between space-y-2 pr-3 border-r border-slate-400">
                <div className="flex items-center">
                  <span className="font-bold whitespace-nowrap">Họ và tên học sinh:</span>
                  <span className="flex-1 border-b border-dotted border-black ml-2 h-4"></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center w-28">
                    <span className="font-bold whitespace-nowrap">Lớp:</span>
                    <span className="flex-1 border-b border-dotted border-black ml-2 h-4"></span>
                  </div>
                  <div className="flex-1 flex items-center">
                    <span className="font-bold whitespace-nowrap">Trường:</span>
                    <span className="flex-1 border-b border-dotted border-black ml-2 h-4"></span>
                  </div>
                </div>
                <div className="text-slate-800">
                  <span className="font-bold">Ngày kiểm tra:</span> Ngày ..... tháng ..... năm 202...
                </div>
              </div>

              {/* Khung Điểm & Lời phê của Thầy Thọ / Phụ Huynh */}
              <div className="col-span-5 grid grid-cols-2 gap-2 text-center">
                <div className="border border-black flex flex-col justify-between p-1 bg-white">
                  <div className="font-black text-[12px] border-b border-black pb-0.5">
                    ĐIỂM SỐ
                  </div>
                  <div className="py-2.5 text-slate-300 text-xl font-bold font-sans">
                    /10
                  </div>
                  <div className="text-[10px] text-slate-500 italic">
                    Chữ ký chấm bài
                  </div>
                </div>

                <div className="border border-black flex flex-col justify-between p-1.5 text-left bg-white">
                  <div className="font-bold text-[11px] text-center border-b border-black pb-0.5">
                    LỜI NHẬN XÉT
                  </div>
                  <div className="space-y-1.5 py-1">
                    <div className="border-b border-dotted border-slate-400 h-3"></div>
                    <div className="border-b border-dotted border-slate-400 h-3"></div>
                    <div className="border-b border-dotted border-slate-400 h-3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. PHIẾU TRẢ LỜI TRẮC NGHIỆM TÔ NHANH (NẾU BẬT) */}
            {includeAnswerSheet && (
              <div className="page-break-inside-avoid mb-6 border-2 border-black p-3 bg-white">
                <div className="flex items-center justify-between mb-2 pb-1 border-b border-black text-[12px]">
                  <span className="font-black uppercase tracking-wide">
                    PHIẾU TRẢ LỜI TRẮC NGHIỆM (Học sinh khoanh tròn hoặc tô đen vào phương án chọn)
                  </span>
                  <span className="font-sans text-slate-600 italic">
                    Mỗi câu đúng: 0.5 điểm
                  </span>
                </div>

                {/* 4 Cột x 5 Câu = 20 Câu Cân Đối Tuyệt Đối */}
                <div className="grid grid-cols-4 gap-2 text-[12px] font-sans">
                  {[0, 1, 2, 3].map(colIdx => (
                    <div key={colIdx} className="border border-slate-300 rounded p-1 space-y-1 bg-slate-50/50">
                      {[1, 2, 3, 4, 5].map(rowIdx => {
                        const qNum = colIdx * 5 + rowIdx;
                        return (
                          <div key={qNum} className="flex items-center justify-between py-0.5 px-1.5 bg-white border border-slate-200 rounded">
                            <span className="font-bold text-slate-800 w-6">
                              {qNum < 10 ? `0${qNum}` : qNum}:
                            </span>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                              <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px]">A</span>
                              <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px]">B</span>
                              <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px]">C</span>
                              <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px]">D</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. NỘI DUNG 20 CÂU HỎI TRẮC NGHIỆM CHÍNH THỨC */}
            <div className="mb-4">
              <div className="text-[13px] font-bold uppercase tracking-wider text-black mb-4 pb-1 border-b border-black flex items-center justify-between">
                <span>PHẦN CÂU HỎI TRẮC NGHIỆM (20 Câu — 10,0 Điểm)</span>
                <span className="text-[11px] italic font-normal text-slate-600">Thí sinh chọn 01 đáp án đúng nhất</span>
              </div>

              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const qNum = idx + 1;
                  const questionText = (q.question || '').replace(/^Câu \d+:\s*/, '');

                  // Tự động tính toán số cột để dàn 4 đáp án A B C D cân đối đẹp mắt nhất
                  const maxOptionLength = Math.max(...q.options.map(o => (o || '').length));
                  let gridLayout = 'grid-cols-4'; // Dàn 4 cột nếu đáp án ngắn
                  if (maxOptionLength > 40) {
                    gridLayout = 'grid-cols-1'; // 1 cột nếu đáp án rất dài
                  } else if (maxOptionLength > 18) {
                    gridLayout = 'grid-cols-2'; // 2 cột nếu đáp án trung bình
                  }

                  return (
                    <div 
                      key={q.id || idx} 
                      className="page-break-inside-avoid pb-3 border-b border-slate-200"
                      style={{ fontSize: '14px', lineHeight: '1.6' }}
                    >
                      {/* Tiêu đề & nội dung câu hỏi */}
                      <div className="mb-2 text-black text-justify">
                        <span className="font-bold text-black mr-1.5">
                          Câu {qNum}:
                        </span>
                        <span className="text-black">
                          <MathText html={questionText} />
                        </span>
                      </div>

                      {/* 4 Phương án A, B, C, D cân chỉnh thẳng tắp */}
                      <div className={`grid ${gridLayout} gap-x-4 gap-y-1.5 pl-4`}>
                        {q.options.map((opt, optIdx) => {
                          const letter = ['A', 'B', 'C', 'D'][optIdx];
                          return (
                            <div key={optIdx} className="flex items-start gap-1.5">
                              <span className="font-bold text-black shrink-0">
                                {letter}.
                              </span>
                              <div className="text-black">
                                <MathText html={opt || ''} />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Khoảng trống nháp dưới mỗi câu (nếu bật) */}
                      {includeScratchLines && (
                        <div className="pl-4 pt-2">
                          <div className="border-b border-dotted border-slate-300 h-4"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Lời dặn dò kết thúc đề thi */}
              <div className="page-break-inside-avoid text-center mt-6 pt-3 border-t-2 border-black">
                <div className="font-bold text-[12px] uppercase tracking-widest text-black">
                  ---------- HẾT ----------
                </div>
                <div className="text-[11px] italic text-slate-700 mt-1">
                  (Cán bộ coi thi và Phụ huynh không giải thích gì thêm. Học sinh không được sử dụng tài liệu)
                </div>
              </div>
            </div>

            {/* 5. TRANG ĐÁP ÁN & LỜI GIẢI CHI TIẾT (TÁCH TRANG A4 ĐỘC LẬP) */}
            {includeSolutions && (
              <div className="page-break-before pt-6" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                {/* Header trang giải */}
                <div className="text-center border-b-2 border-black pb-3 mb-5">
                  <div className="font-bold text-[12px] uppercase tracking-wider text-slate-700">
                    LỚP HỌC TOÁN & HÓA HỌC THẦY THỌ
                  </div>
                  <h2 className="text-[15px] font-black uppercase text-black mt-1">
                    BẢNG ĐÁP ÁN & HƯỚNG DẪN GIẢI CHI TIẾT
                  </h2>
                  <div className="text-[12px] font-bold text-slate-800 italic">
                    Dành cho Phụ Huynh và Thầy Cô Chấm Điểm & Hướng Dẫn Con
                  </div>
                  <div className="text-[12px] font-bold text-black mt-1">
                    Chuyên đề: {topicTitle} — Đề số {examNo} (Mã đề: {examCode})
                  </div>
                </div>

                {/* BẢNG ĐÁP ÁN NHANH 20 CÂU */}
                <div className="page-break-inside-avoid mb-6 border-2 border-black p-3 bg-slate-50">
                  <div className="font-black text-[12px] uppercase tracking-wide text-slate-900 mb-2 text-center">
                    BẢNG TRA CỨU ĐÁP ÁN NHANH (Mỗi câu đúng: 0.5 điểm)
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse border border-black text-[12px] font-sans">
                      <thead>
                        <tr className="bg-slate-200 font-bold">
                          {questions.slice(0, 10).map((_, i) => (
                            <th key={i} className="border border-black py-1 px-1">
                              {i + 1}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white font-black text-rose-700">
                          {questions.slice(0, 10).map((q, i) => (
                            <td key={i} className="border border-black py-1 px-1">
                              {q.correctAnswer}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>

                    <table className="w-full text-center border-collapse border border-black text-[12px] font-sans mt-2">
                      <thead>
                        <tr className="bg-slate-200 font-bold">
                          {questions.slice(10, 20).map((_, i) => (
                            <th key={i} className="border border-black py-1 px-1">
                              {i + 11}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white font-black text-rose-700">
                          {questions.slice(10, 20).map((q, i) => (
                            <td key={i} className="border border-black py-1 px-1">
                              {q.correctAnswer}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* LỜI GIẢI CHI TIẾT TỪNG CÂU */}
                <div className="space-y-4">
                  <div className="text-[13px] font-bold uppercase tracking-wider text-black pb-1 border-b border-black">
                    HƯỚNG DẪN GIẢI CHI TIẾT TỪNG BƯỚC
                  </div>

                  {questions.map((q, idx) => {
                    const qNum = idx + 1;
                    return (
                      <div 
                        key={q.id || idx} 
                        className="page-break-inside-avoid border border-slate-300 rounded p-3 bg-white"
                        style={{ fontSize: '13.5px', lineHeight: '1.6' }}
                      >
                        <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-200">
                          <span className="font-bold text-black">
                            Câu {qNum}: Chọn đáp án {q.correctAnswer}
                          </span>
                          <span className="text-[11px] font-sans font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            ✓ Đúng: {q.correctAnswer}
                          </span>
                        </div>

                        <div className="text-slate-900 pt-1 text-justify">
                          <span className="font-bold text-black">Phương pháp & Lời giải: </span>
                          <MathText html={q.explanation || ''} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MODAL FOOTER - KHÔNG IN */}
        <div className="no-print bg-white border-t border-slate-200 px-5 py-3 flex items-center justify-between text-xs">
          <div className="text-slate-600 font-sans">
            Đề thi được định dạng chuẩn A4 (Times New Roman 14px) sẵn sàng cho phụ huynh in ấn hoặc làm trực tuyến.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg font-bold transition cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>In Đề / Tải File PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
