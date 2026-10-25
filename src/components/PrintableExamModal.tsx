import React, { useState } from 'react';
import { 
  Printer, FileDown, X, CheckSquare, Eye, Sparkles, BookOpen, 
  HelpCircle, Award, CheckCircle2, AlertCircle, Info, ChevronRight
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
  const [includeScratchLines, setIncludeScratchLines] = useState<boolean>(true);
  const [includeSolutions, setIncludeSolutions] = useState<boolean>(true);
  const [examDuration, setExamDuration] = useState<number>(40); // 40 phút chuẩn đề kiểm tra
  const [examCode, setExamCode] = useState<string>(() => {
    const prefix = subject === 'toan' ? 'TOAN' : 'HOA';
    return `${prefix}-${examNo < 10 ? '0' + examNo : examNo}`;
  });

  if (!isOpen) return null;

  const handlePrint = () => {
    // Kích hoạt cửa sổ in native của trình duyệt
    window.print();
  };

  const subjectLabel = subject === 'toan' ? 'MÔN TOÁN HỌC' : 'MÔN HÓA HỌC';
  const subtitle = subject === 'toan' 
    ? 'CHUYÊN ĐỀ TOÁN TRỌNG TÂM LỚP 6 - 9' 
    : 'CHUYÊN ĐỀ HÓA HỌC CỐT LÕI LỚP 6 - 12';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fade-in">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh]">
        
        {/* MODAL HEADER - KHÔNG IN (no-print) */}
        <div className="no-print bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-teal-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                  Chuẩn Đề Kiểm Tra A4
                </span>
                <span className="text-xs text-teal-200">
                  {subject === 'toan' ? '📐 Môn Toán' : '🧪 Môn Hóa Học'}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white line-clamp-1">
                Xem Trước & Xuất Bản Đề Thi A4: {topicTitle} - Đề số {examNo}
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
        <div className="no-print bg-teal-50/70 border-b border-teal-100 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-teal-950 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Tùy chọn in cho Phụ Huynh:
            </span>

            <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 select-none">
              <input 
                type="checkbox" 
                checked={includeAnswerSheet} 
                onChange={e => setIncludeAnswerSheet(e.target.checked)}
                className="rounded border-teal-300 text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
              />
              <span>Phiếu tô trắc nghiệm (A B C D)</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 select-none">
              <input 
                type="checkbox" 
                checked={includeScratchLines} 
                onChange={e => setIncludeScratchLines(e.target.checked)}
                className="rounded border-teal-300 text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
              />
              <span>Dòng kẻ nháp dưới mỗi câu</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 select-none">
              <input 
                type="checkbox" 
                checked={includeSolutions} 
                onChange={e => setIncludeSolutions(e.target.checked)}
                className="rounded border-teal-300 text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
              />
              <span>Trang Đáp án & Lời giải (cho PH chấm)</span>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition cursor-pointer text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>In Ngay / Lưu PDF (Ctrl + P)</span>
            </button>
          </div>
        </div>

        {/* HƯỚNG DẪN NHANH DÀNH CHO PHỤ HUYNH - KHÔNG IN */}
        <div className="no-print bg-amber-50 border-b border-amber-200 px-5 py-2.5 text-xs text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Mẹo cho Phụ huynh:</strong> Khi cửa sổ in bật lên, tại mục <strong>Máy in đích (Destination)</strong>, Phụ huynh chọn <strong>"Lưu dưới dạng PDF" (Save as PDF)</strong> để lưu file đề thi về máy hoặc gửi qua Zalo cho con làm!
          </span>
        </div>

        {/* BẢN XEM TRƯỚC VÀ NỘI DUNG SẼ IN (#printable-exam-sheet) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-200/60 flex justify-center">
          <div 
            id="printable-exam-sheet" 
            className="w-full max-w-[210mm] bg-white p-6 sm:p-10 shadow-lg font-serif text-black leading-relaxed"
            style={{ minHeight: '297mm' }}
          >
            {/* ========================================================================= */}
            {/* PHẦN 1: HEADER QUY CHUẨN ĐỀ THI QUỐC GIA                                */}
            {/* ========================================================================= */}
            <div className="border-b-2 border-black pb-3 mb-4">
              <div className="grid grid-cols-2 gap-4 text-center items-start">
                {/* Cột trái: Đơn vị tổ chức */}
                <div>
                  <p className="font-bold uppercase tracking-wider text-xs sm:text-sm">
                    LỚP HỌC TOÁN & HÓA HỌC THẦY THỌ
                  </p>
                  <p className="text-[11px] font-semibold text-slate-700 italic">
                    Chuyên Bồi Dưỡng Lấy Gốc & Ôn Thi Chuyên Sâu
                  </p>
                  <div className="w-24 h-[1px] bg-black mx-auto my-1"></div>
                  <p className="text-[11px] font-bold text-slate-800">
                    MÃ ĐỀ THI: <span className="font-mono text-xs">{examCode}</span>
                  </p>
                </div>

                {/* Cột phải: Thông tin kỳ thi */}
                <div>
                  <p className="font-black uppercase tracking-wider text-xs sm:text-sm">
                    ĐỀ KIỂM TRA ĐÁNH GIÁ NĂNG LỰC
                  </p>
                  <p className="font-bold text-xs uppercase text-slate-900">
                    {subjectLabel} - {topicGrade || 'CHƯƠNG TRÌNH CHUẨN'}
                  </p>
                  <p className="text-[11px] italic font-medium text-slate-700">
                    Thời gian làm bài: {examDuration} phút (không kể thời gian phát đề)
                  </p>
                  <div className="w-24 h-[1px] bg-black mx-auto my-1"></div>
                  <p className="text-[10px] text-slate-600 italic">
                    (Đề thi gồm 20 câu trắc nghiệm - 100% không trùng lặp)
                  </p>
                </div>
              </div>

              {/* Tên Chuyên Đề Nổi Bật Ở Giữa */}
              <div className="text-center mt-3 pt-2 border-t border-slate-300">
                <h1 className="text-sm sm:text-base font-black uppercase text-slate-900 tracking-wide">
                  CHUYÊN ĐỀ: {topicTitle}
                </h1>
                <p className="text-xs font-bold text-slate-800 italic">
                  ĐỀ SỐ: {examNo} - HỆ ĐÁNH GIÁ NĂNG LỰC TOÀN DIỆN
                </p>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* PHẦN 2: KHUNG THÔNG TIN HỌC SINH + KHUNG ĐIỂM SỐ & LỜI PHÊ                 */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-12 gap-3 mb-5 border border-black p-2.5 rounded-sm bg-slate-50/40 text-xs">
              {/* Cột 1: Thông tin học sinh */}
              <div className="col-span-7 flex flex-col justify-between space-y-2 pr-2 border-r border-slate-400">
                <div>
                  <span className="font-bold">Họ và tên học sinh:</span>
                  <span className="inline-block border-b border-dotted border-black w-48 ml-1"></span>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="font-bold">Lớp:</span>
                    <span className="inline-block border-b border-dotted border-black w-16 ml-1"></span>
                  </div>
                  <div className="flex-1">
                    <span className="font-bold">Trường:</span>
                    <span className="inline-block border-b border-dotted border-black w-32 ml-1"></span>
                  </div>
                </div>
                <div>
                  <span className="font-bold">Ngày làm bài:</span>
                  <span className="italic text-slate-600 ml-1">
                    Ngày ..... tháng ..... năm 202...
                  </span>
                </div>
              </div>

              {/* Cột 2: Khung Điểm & Lời phê của Thầy Thọ / Phụ Huynh */}
              <div className="col-span-5 grid grid-cols-2 gap-2 text-center">
                <div className="border border-black rounded flex flex-col justify-between p-1 bg-white">
                  <div className="font-black text-[11px] border-b border-black pb-0.5">
                    ĐIỂM SỐ
                  </div>
                  <div className="py-2 text-slate-300 text-lg font-black font-sans">
                    /10
                  </div>
                  <div className="text-[9px] text-slate-500 italic">
                    Chữ ký chấm bài
                  </div>
                </div>

                <div className="border border-black rounded flex flex-col justify-between p-1 text-left bg-white">
                  <div className="font-bold text-[10px] text-center border-b border-black pb-0.5">
                    LỜI NHẬN XÉT
                  </div>
                  <div className="space-y-1 py-1">
                    <div className="border-b border-dotted border-slate-400 h-3"></div>
                    <div className="border-b border-dotted border-slate-400 h-3"></div>
                    <div className="border-b border-dotted border-slate-400 h-3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* PHẦN 3: PHIẾU TRẢ LỜI TRẮC NGHIỆM TÔ NHANH (NẾU BẬT)                      */}
            {/* ========================================================================= */}
            {includeAnswerSheet && (
              <div className="page-break-inside-avoid mb-6 border-2 border-black p-3 bg-white">
                <div className="flex items-center justify-between mb-2 pb-1 border-b border-black">
                  <span className="font-black uppercase text-[11px] tracking-wide">
                    PHIẾU TRẢ LỜI TRẮC NGHIỆM (Học sinh khoanh tròn hoặc tô đen vào đáp án đúng)
                  </span>
                  <span className="text-[10px] font-sans text-slate-600 italic">
                    Mỗi câu đúng đạt 0.5 điểm
                  </span>
                </div>

                {/* 4 Cột x 5 Câu = 20 Câu */}
                <div className="grid grid-cols-4 gap-2 text-[11px] font-sans">
                  {[0, 1, 2, 3].map(colIdx => (
                    <div key={colIdx} className="border border-slate-300 rounded p-1.5 space-y-1 bg-slate-50/50">
                      {[1, 2, 3, 4, 5].map(rowIdx => {
                        const qNum = colIdx * 5 + rowIdx;
                        return (
                          <div key={qNum} className="flex items-center justify-between py-0.5 px-1 bg-white border border-slate-200 rounded">
                            <span className="font-bold text-slate-800 w-6">
                              {qNum < 10 ? `0${qNum}` : qNum}:
                            </span>
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
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

            {/* ========================================================================= */}
            {/* PHẦN 4: NỘI DUNG 20 CÂU HỎI TRẮC NGHIỆM CHÍNH THỨC                         */}
            {/* ========================================================================= */}
            <div className="mb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 pb-1 border-b border-black">
                PHẦN TRẮC NGHIỆM KHÁCH QUAN (20 Câu - 10,0 Điểm)
              </div>

              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const qNum = idx + 1;
                  return (
                    <div 
                      key={q.id || idx} 
                      className="page-break-inside-avoid text-xs sm:text-[13px] border-b border-slate-200 pb-3"
                    >
                      {/* Tiêu đề & nội dung câu hỏi */}
                      <div className="font-normal text-black mb-2">
                        <div className="flex items-start gap-1 font-serif text-sm sm:text-base leading-relaxed">
                          <span className="font-bold shrink-0 text-slate-950">
                            Câu {qNum}:
                          </span>
                          <div className="flex-1 text-slate-950">
                            <MathText html={(q.question || '').replace(/^Câu \d+:\s*/, '')} />
                          </div>
                        </div>

                        {/* Biểu thức toán học nếu có */}
                        {(q as any).mathExpression && (
                          <div className="my-2.5 py-2 px-3 bg-slate-50 border border-slate-200 rounded text-center text-base sm:text-lg font-bold text-slate-950">
                            <MathText html={`$$${(q as any).mathExpression}$$`} block />
                          </div>
                        )}
                      </div>

                      {/* 4 Phương án A, B, C, D */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-4 mb-2 text-xs sm:text-sm">
                        {q.options.map((opt, optIdx) => {
                          const letter = ['A', 'B', 'C', 'D'][optIdx];
                          return (
                            <div key={optIdx} className="flex items-start gap-1.5 font-serif">
                              <span className="font-bold font-sans text-slate-900 shrink-0">
                                {letter}.
                              </span>
                              <div className="text-slate-950 font-medium">
                                <MathText html={opt || ''} />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Khoảng trống nháp dưới mỗi câu (nếu bật) */}
                      {includeScratchLines && (
                        <div className="pl-4 pt-1">
                          <div className="border-b border-dotted border-slate-300 h-3"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Lời dặn dò cuối đề thi */}
              <div className="page-break-inside-avoid text-center mt-6 pt-3 border-t-2 border-black">
                <p className="font-bold text-xs uppercase tracking-widest">
                  ---------- HẾT ----------
                </p>
                <p className="text-[11px] italic text-slate-600 mt-1">
                  (Cán bộ coi thi và Phụ huynh không giải thích gì thêm. Học sinh không được sử dụng tài liệu)
                </p>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* PHẦN 5: TRANG ĐÁP ÁN & LỜI GIẢI CHI TIẾT (TÁCH TRANG A4 ĐỘC LẬP)          */}
            {/* ========================================================================= */}
            {includeSolutions && (
              <div className="page-break-before pt-6 font-serif">
                {/* Header trang giải */}
                <div className="text-center border-b-2 border-black pb-3 mb-5">
                  <p className="font-bold text-xs uppercase tracking-wider text-slate-700">
                    LỚP HỌC TOÁN & HÓA HỌC THẦY THỌ
                  </p>
                  <h2 className="text-sm sm:text-base font-black uppercase text-black mt-1">
                    BẢNG ĐÁP ÁN & HƯỚNG DẪN GIẢI CHI TIẾT
                  </h2>
                  <p className="text-xs font-semibold text-slate-800 italic">
                    Dành cho Phụ Huynh và Thầy Cô Chấm Điểm & Hướng Dẫn Con
                  </p>
                  <p className="text-[11px] font-bold text-slate-900 mt-1">
                    Chuyên đề: {topicTitle} - Đề số {examNo} (Mã đề: {examCode})
                  </p>
                </div>

                {/* BẢNG ĐÁP ÁN NHANH 20 CÂU */}
                <div className="page-break-inside-avoid mb-6 border-2 border-black p-3 bg-slate-50">
                  <div className="font-black text-xs uppercase tracking-wide text-slate-900 mb-2 text-center">
                    BẢNG TRA CỨU ĐÁP ÁN NHANH (Mỗi câu đúng: 0.5 điểm)
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse border border-black text-xs font-sans">
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

                    <table className="w-full text-center border-collapse border border-black text-xs font-sans mt-2">
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
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-black">
                    HƯỚNG DẪN GIẢI CHI TIẾT TỪNG BƯỚC
                  </div>

                  {questions.map((q, idx) => {
                    const qNum = idx + 1;
                    return (
                      <div 
                        key={q.id || idx} 
                        className="page-break-inside-avoid text-xs sm:text-[13px] border border-slate-300 rounded p-3 bg-white"
                      >
                        <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-200">
                          <span className="font-bold text-slate-900">
                            Câu {qNum}: Chọn đáp án {q.correctAnswer}
                          </span>
                          <span className="text-[11px] font-sans font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            ✓ Đúng: {q.correctAnswer}
                          </span>
                        </div>

                        <div className="text-slate-800 leading-relaxed font-serif pt-1 text-xs sm:text-sm">
                          <span className="font-semibold text-slate-900">Phương pháp & Lời giải: </span>
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
          <div className="text-slate-500 font-sans">
            Học sinh có thể làm trực tiếp trên máy hoặc in ra giấy A4 làm bài.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl font-bold transition cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
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
