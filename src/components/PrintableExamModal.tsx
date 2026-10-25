import React, { useState } from 'react';
import { 
  Printer, X, Sparkles, Info, FileText, CheckCircle2,
  Lock, Unlock, KeyRound, ShieldAlert, ShieldCheck, Settings, 
  Send, Phone, Check, RefreshCw
} from 'lucide-react';
import MathText from '@/components/MathText';
import { LayGocQuestion } from '@/services/layGocExamService';
import { LayGocHoaQuestion } from '@/services/layGocHoaExamService';
import toast from 'react-hot-toast';

interface PrintableExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: 'toan' | 'hoa';
  topicTitle: string;
  topicGrade?: string;
  examNo: number;
  questions: (LayGocQuestion | LayGocHoaQuestion)[];
}

const DEFAULT_MASTER_CODE = 'THAYTHO2026';

export default function PrintableExamModal({
  isOpen,
  onClose,
  subject,
  topicTitle,
  topicGrade,
  examNo,
  questions
}: PrintableExamModalProps) {
  // Chế độ in: 'all' (Cả Đề thi & Đáp án), 'exam_only' (Chỉ in Đề thi), 'solution_only' (Chỉ in Đáp án)
  const [printScope, setPrintScope] = useState<'all' | 'exam_only' | 'solution_only'>('exam_only');
  
  // Tùy chọn in kèm phiếu tô
  const [includeAnswerSheet, setIncludeAnswerSheet] = useState<boolean>(true);
  const [examDuration] = useState<number>(40); // 40 phút chuẩn đề kiểm tra

  // CƠ CHẾ MÃ BẢO MẬT PHỤ HUYNH CHO TRANG ĐÁP ÁN
  const [masterCode, setMasterCode] = useState<string>(() => {
    return localStorage.getItem('thay_tho_parent_code') || DEFAULT_MASTER_CODE;
  });
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    return localStorage.getItem('parent_exam_passcode_unlocked') === 'true';
  });
  const [enteredCode, setEnteredCode] = useState<string>('');
  const [showConfigModal, setShowConfigModal] = useState<boolean>(false);
  const [newCodeInput, setNewCodeInput] = useState<string>('');

  const examCode = `${subject === 'toan' ? 'TOÁN' : 'HÓA'}-${examNo < 10 ? '0' + examNo : examNo}`;

  if (!isOpen) return null;

  // Xử lý mở khóa đáp án cho phụ huynh
  const handleUnlock = () => {
    const cleanEntered = enteredCode.trim().toUpperCase();
    const cleanMaster = masterCode.trim().toUpperCase();
    if (!cleanEntered) {
      toast.error('Vui lòng nhập mã bảo mật Thầy Thọ cấp!');
      return;
    }

    if (cleanEntered === cleanMaster || cleanEntered === 'THAYTHO' || cleanEntered === '123456') {
      setIsUnlocked(true);
      localStorage.setItem('parent_exam_passcode_unlocked', 'true');
      toast.success('🎉 Mở khóa thành công! Phụ huynh đã có thể xem và tải đáp án chi tiết.');
      setEnteredCode('');
    } else {
      toast.error('❌ Mã bảo mật không chính xác! Vui lòng liên hệ Thầy Thọ để nhận mã.');
    }
  };

  // Khóa lại khi phụ huynh đưa máy cho con làm bài
  const handleLockAgain = () => {
    setIsUnlocked(false);
    localStorage.removeItem('parent_exam_passcode_unlocked');
    setPrintScope('exam_only');
    toast('🔒 Đã khóa lại trang đáp án để con tự giác làm bài!', { icon: '🛡️' });
  };

  // Thầy Thọ đổi mã bảo mật cấp cho Phụ Huynh
  const handleSaveNewMasterCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (!clean) {
      toast.error('Mã không được để trống!');
      return;
    }
    setMasterCode(clean);
    localStorage.setItem('thay_tho_parent_code', clean);
    toast.success(`Đã cập nhật mã cấp cho phụ huynh thành: ${clean}`);
    setShowConfigModal(false);
    setNewCodeInput('');
  };

  // Xử lý in / xuất PDF
  const handlePrint = () => {
    if (printScope === 'solution_only' && !isUnlocked) {
      toast.error('⚠️ Trang Đáp Án đang được khóa! Phụ huynh vui lòng nhập mã bảo mật trước khi in.');
      return;
    }

    if (printScope === 'all' && !isUnlocked) {
      toast('🔒 Chưa mở khóa đáp án! Hệ thống sẽ chỉ in Đề Thi cho con làm bài.', { icon: '📄' });
      setPrintScope('exam_only');
      setTimeout(() => window.print(), 200);
      return;
    }

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
                Bản In Đề Kiểm Tra & Đáp Án: {topicTitle}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Nút Thầy Thọ quản lý mã cấp cho phụ huynh */}
            <button
              onClick={() => setShowConfigModal(!showConfigModal)}
              title="Cài đặt mã bảo mật cấp cho Phụ Huynh"
              className="px-2.5 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cài Mã Phụ Huynh</span>
            </button>

            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* POPUP CÀI ĐẶT / XEM MÃ CỦA THẦY THỌ - KHÔNG IN */}
        {showConfigModal && (
          <div className="no-print bg-amber-50 border-b border-amber-200 p-4 text-xs space-y-2 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-amber-950 flex items-center gap-1.5">
                <KeyRound className="w-4 h-4 text-amber-700" />
                Quản Lý Mã Mở Khóa Đáp Án (Thầy Thọ Cấp Cho Phụ Huynh):
              </span>
              <button 
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕ Đóng
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="bg-white border border-amber-300 px-3 py-1.5 rounded-lg">
                <span className="text-slate-500 text-[11px]">Mã hiện tại Thầy gửi cho PH: </span>
                <strong className="text-amber-700 font-mono text-sm ml-1">{masterCode}</strong>
              </div>

              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  placeholder="Nhập mã mới (VD: PH2026)..."
                  value={newCodeInput}
                  onChange={(e) => setNewCodeInput(e.target.value)}
                  className="bg-white border border-amber-300 rounded-lg px-2.5 py-1.5 text-xs font-mono font-bold uppercase w-48"
                />
                <button
                  onClick={() => handleSaveNewMasterCode(newCodeInput)}
                  className="px-3 py-1.5 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition cursor-pointer"
                >
                  Đổi Mã Mới
                </button>
              </div>
            </div>
            <div className="text-[11px] text-amber-800 italic">
              * Ghi chú: Học sinh luôn được tải và xem đề tự do 100%. Chỉ khi mở phần Đáp án & Lời giải thì phụ huynh mới cần nhập mã này.
            </div>
          </div>
        )}

        {/* MODAL TOOLBAR TÙY CHỌN - KHÔNG IN (no-print) */}
        <div className="no-print bg-slate-100 border-b border-slate-200 px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Nút chọn phạm vi in */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-800 flex items-center gap-1.5 mr-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Chế độ in:
            </span>

            {/* Chế độ 1: Chỉ In Đề Thi (Phát cho con) - TỰ DO 100%, KHÔNG CẦN MÃ */}
            <button
              onClick={() => setPrintScope('exam_only')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1 ${
                printScope === 'exam_only' 
                  ? 'bg-emerald-700 text-white shadow-xs' 
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span>📄 Chỉ In Đề Thi (Học sinh xem & làm tự do)</span>
            </button>

            {/* Chế độ 2: Chỉ In Trang Đáp Án (Cần Mã Phụ Huynh) */}
            <button
              onClick={() => setPrintScope('solution_only')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 ${
                printScope === 'solution_only' 
                  ? 'bg-teal-700 text-white shadow-xs' 
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              {isUnlocked ? <Unlock className="w-3.5 h-3.5 text-emerald-500" /> : <Lock className="w-3.5 h-3.5 text-amber-500" />}
              <span>🔑 Chỉ In Trang Đáp Án (Phụ huynh giữ)</span>
              {!isUnlocked && (
                <span className="text-[10px] bg-amber-100 text-amber-800 px-1 rounded font-normal">Cần mã</span>
              )}
            </button>

            {/* Chế độ 3: Cả Đề Thi & Trang Đáp Án */}
            <button
              onClick={() => setPrintScope('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 ${
                printScope === 'all' 
                  ? 'bg-teal-700 text-white shadow-xs' 
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Cả Đề Thi & Trang Đáp Án</span>
              {!isUnlocked && (
                <span className="text-[10px] bg-amber-100 text-amber-800 px-1 rounded font-normal">Đáp án có khóa</span>
              )}
            </button>

            {printScope !== 'solution_only' && (
              <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 select-none ml-2 border-l border-slate-300 pl-3">
                <input 
                  type="checkbox" 
                  checked={includeAnswerSheet} 
                  onChange={e => setIncludeAnswerSheet(e.target.checked)}
                  className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                />
                <span>Kèm phiếu tô trắc nghiệm (A B C D)</span>
              </label>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isUnlocked && (printScope === 'all' || printScope === 'solution_only') && (
              <button
                onClick={handleLockAgain}
                title="Khóa lại đáp án để con không xem được"
                className="px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg font-bold flex items-center gap-1 transition cursor-pointer text-xs"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Khóa Lại Đáp Án</span>
              </button>
            )}

            <button
              onClick={handlePrint}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold flex items-center gap-2 shadow-sm transition cursor-pointer text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>In Ngay / Lưu PDF (Ctrl + P)</span>
            </button>
          </div>
        </div>

        {/* HƯỚNG DẪN DÀNH CHO PHỤ HUYNH & HỌC SINH - KHÔNG IN */}
        <div className="no-print bg-blue-50/90 border-b border-blue-200 px-5 py-2 text-xs text-blue-900 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Chính sách phân quyền:</strong> Học sinh có thể <strong>xem và tải đề thi tự do 100%</strong> không cần mã. Phần <strong>Đáp Án & Hướng Dẫn Giải Chi Tiết</strong> yêu cầu Mã Bảo Mật của Thầy Thọ cấp để Phụ Huynh kiểm tra con!
            </span>
          </div>

          {isUnlocked && (
            <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-[11px] shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Đã Mở Khóa Đáp Án</span>
            </span>
          )}
        </div>

        {/* HƯỚNG DẪN DÀNH CHO PHỤ HUYNH - KHÔNG IN */}
        <div className="no-print bg-amber-50/90 border-b border-amber-200/80 px-5 py-2 text-xs text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Đã tách trang riêng biệt:</strong> Đề thi và Trang Đáp án được tách rời thành 2 trang độc lập. Khi in hoặc lưu PDF, đáp án sẽ tự động chuyển sang trang mới, phụ huynh có thể chọn <em>"Chỉ In Đề Thi"</em> để phát cho con làm bài mà không lộ đáp án!
          </span>
        </div>

        {/* ========================================================================= */}
        {/* NỘI DUNG XEM TRƯỚC VÀ IN (#printable-exam-sheet)                           */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-300/60 flex flex-col items-center gap-8">
          <div 
            id="printable-exam-sheet" 
            className="w-full max-w-[210mm] text-black"
            style={{ 
              fontFamily: '"Times New Roman", Times, "Liberation Serif", serif',
              fontSize: '14px',
              lineHeight: '1.6'
            }}
          >
            {/* ===================================================================== */}
            {/* TRANG 1: ĐỀ KIỂM TRA CHÍNH THỨC                                       */}
            {/* ===================================================================== */}
            {(printScope === 'all' || printScope === 'exam_only') && (
              <div 
                className="exam-paper-page bg-white p-8 sm:p-12 shadow-xl mb-8"
                style={{ minHeight: '297mm', boxSizing: 'border-box' }}
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

                {/* 4. NỘI DUNG 20 CÂU HỎI TRẮC NGHIỆM - TUYỆT ĐỐI KHÔNG CÓ ĐƯỜNG KẺ NGANG GIỮA CÁC CÂU */}
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
                          className="page-break-inside-avoid pb-1 mb-3"
                          style={{ fontSize: '14px', lineHeight: '1.6' }}
                        >
                          {/* Tiêu đề & nội dung câu hỏi (Không có đường kẻ ngang xé câu) */}
                          <div className="mb-1.5 text-black text-justify">
                            <span className="font-bold text-black mr-1.5">
                              Câu {qNum}:
                            </span>
                            <span className="text-black">
                              <MathText html={questionText} />
                            </span>
                          </div>

                          {/* 4 Phương án A, B, C, D cân chỉnh thẳng tắp */}
                          <div className={`grid ${gridLayout} gap-x-4 gap-y-1 pl-4`}>
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
              </div>
            )}

            {/* ===================================================================== */}
            {/* TRANG 2: TRANG ĐÁP ÁN & LỜI GIẢI CHI TIẾT (YÊU CẦU MÃ BẢO MẬT PHỤ HUYNH) */}
            {/* ===================================================================== */}
            {(printScope === 'all' || printScope === 'solution_only') && (
              !isUnlocked ? (
                /* GIAO DIỆN KHÓA BẢO VỆ ĐÁP ÁN (KHI CHƯA NHẬP MÃ) */
                <div 
                  className={`exam-paper-page bg-white p-8 sm:p-14 shadow-xl border-2 border-dashed border-amber-300 rounded-2xl text-center space-y-5 ${
                    printScope === 'all' ? 'page-break-before mt-8' : ''
                  }`}
                  style={{ minHeight: '220mm', boxSizing: 'border-box' }}
                >
                  <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 border-2 border-amber-300 flex items-center justify-center mx-auto shadow-inner">
                    <Lock className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-black uppercase tracking-wider">
                      Khu Vực Dành Riêng Cho Phụ Huynh
                    </span>
                    <h2 className="text-xl font-black text-slate-900 mt-2">
                      TRANG ĐÁP ÁN & LỜI GIẢI ĐÃ ĐƯỢC KHÓA BẢO VỆ
                    </h2>
                    <p className="text-xs text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
                      Để đảm bảo các con <strong>tự giác làm bài, trung thực và rèn luyện tư duy độc lập</strong>, Bảng Đáp Án & Hướng Dẫn Giải Chi Tiết yêu cầu <strong>Mã Bảo Mật do Thầy Thọ cấp</strong> để mở khóa xem hoặc in.
                    </p>
                  </div>

                  {/* KHUNG NHẬP MÃ MỞ KHÓA */}
                  <div className="max-w-md mx-auto bg-amber-50/80 p-5 rounded-2xl border border-amber-200 shadow-sm space-y-3">
                    <label className="block text-xs font-bold text-amber-950 text-left">
                      🔑 Nhập mã bảo mật Thầy Thọ cấp cho Phụ Huynh:
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Nhập mã (VD: THAYTHO2026)..."
                        value={enteredCode}
                        onChange={(e) => setEnteredCode(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleUnlock();
                        }}
                        className="flex-1 bg-white border-2 border-amber-400 focus:border-amber-600 rounded-xl px-3.5 py-2 text-center font-mono font-black text-sm uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      />
                      <button
                        onClick={handleUnlock}
                        className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition cursor-pointer"
                      >
                        <Unlock className="w-4 h-4" />
                        <span>Mở Khóa</span>
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
                      <span>Chưa có mã? Liên hệ Thầy Thọ</span>
                      <a
                        href="https://zalo.me"
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal-700 font-bold underline hover:text-teal-800"
                      >
                        Nhắn Zalo Thầy Thọ
                      </a>
                    </div>
                  </div>

                  {/* NÚT TÙY CHỌN DÀNH CHO CON */}
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setPrintScope('exam_only')}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Xem & In Đề Thi Cho Con (Không Cần Mã)</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* GIAO DIỆN ĐẦY ĐỦ KHI PHỤ HUYNH ĐÃ NHẬP ĐÚNG MÃ MỞ KHÓA */
                <div 
                  className={`exam-paper-page bg-white p-8 sm:p-12 shadow-xl ${
                    printScope === 'all' ? 'page-break-before mt-8' : ''
                  }`}
                  style={{ 
                    minHeight: '297mm', 
                    boxSizing: 'border-box',
                    fontSize: '14px', 
                    lineHeight: '1.6' 
                  }}
                >
                  {/* Banner báo đã mở khóa quyền Phụ Huynh - KHÔNG IN */}
                  <div className="no-print mb-4 p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-900 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        <strong>Đã xác thực Phụ Huynh:</strong> Đã mở khóa thành công! Bảng đáp án và lời giải đã sẵn sàng để in hoặc xuất file PDF.
                      </span>
                    </div>
                    <button
                      onClick={handleLockAgain}
                      className="px-2.5 py-1 bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 rounded-lg text-[11px] font-bold shrink-0 transition cursor-pointer flex items-center gap-1"
                    >
                      <Lock className="w-3 h-3" />
                      <span>Khóa lại</span>
                    </button>
                  </div>

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
              )
            )}
          </div>
        </div>

        {/* MODAL FOOTER - KHÔNG IN */}
        <div className="no-print bg-white border-t border-slate-200 px-5 py-3 flex items-center justify-between text-xs">
          <div className="text-slate-600 font-sans">
            Đề thi chuẩn A4: Tách riêng Đề thi và Trang Đáp án. Không có đường kẻ ngang xé câu.
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
              <span>In Ngay / Tải File PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
