// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Sparkles, Award, Clock, ArrowRight, RotateCcw, 
  CheckCircle2, XCircle, AlertCircle, Printer, ChevronRight, 
  GraduationCap, Flame, FlaskConical, Calculator, Atom, 
  BookOpen, Share2, Check, Copy, ArrowLeft, Trophy, Zap, ShieldCheck
} from 'lucide-react';
import MathText from '@/components/MathText';
import { 
  KHOA_HOC_HOA_META, 
  KHOA_HOC_HOA_EXAMS, 
  getKhoaHocHoaQuestions,
  convertKhoaHocHoaToExamFormat,
  type KhoaHocHoaExam,
  type KhoaHocHoaQuestion
} from '@/services/khoaHocLayGocHoaService';
import toast from 'react-hot-toast';
import { supabase } from '@/lib/supabase';

function formatChemicalFormula(raw: string): string {
  if (!raw) return '';
  let s = raw.replace(/\\mathbf\{([^}]+)\}/g, '$1')
             .replace(/\\mathrm\{([^}]+)\}/g, '$1')
             .replace(/\\text\{([^}]+)\}/g, '$1')
             .replace(/\\downarrow/g, ' ↓')
             .replace(/\\uparrow/g, ' ↑')
             .replace(/\\,/g, ' ')
             .replace(/\\\s/g, ' ');
  s = s.replace(/_\{([0-9a-zA-Z+-]+)\}/g, '<sub>$1</sub>');
  s = s.replace(/_([0-9a-zA-Z+-])/g, '<sub>$1</sub>');
  s = s.replace(/\^\{([0-9a-zA-Z+-]+)\}/g, '<sup>$1</sup>');
  s = s.replace(/\^([0-9a-zA-Z+-])/g, '<sup>$1</sup>');
  return s;
}

export default function KhoaHocLayGocHoaPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Nhận diện đề đang chọn qua URL param 'de' (1..9), mặc định đề 1
  const initialExamNo = parseInt(searchParams.get('de') || '1', 10);
  const [currentExamNo, setCurrentExamNo] = useState<number>(
    isNaN(initialExamNo) ? 1 : Math.min(9, Math.max(1, initialExamNo))
  );

  // Học sinh / người dùng hiện tại
  const [student, setStudent] = useState<any>(() => {
    try {
      const s = localStorage.getItem('active_student') || localStorage.getItem('current_student');
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  });

  // Kiểm tra quyền Thầy giáo / Quản trị viên
  const isTeacher = useMemo(() => {
    if (student) {
      const code = String(student.student_code || '').toUpperCase().trim();
      const role = String(student.role || '').toUpperCase();
      const name = String(student.full_name || '').toLowerCase();
      return code === 'THAYTHO' || role === 'ADMIN' || role === 'TEACHER' || name.includes('thọ');
    }
    if (typeof window !== 'undefined') {
      return localStorage.getItem('is_teacher_mode') === 'true' || 
             localStorage.getItem('role') === 'teacher' || 
             localStorage.getItem('role') === 'admin';
    }
    return false;
  }, [student]);

  // Trạng thái kiểm tra quyền truy cập khóa học
  const [isCheckingAccess, setIsCheckingAccess] = useState<boolean>(true);
  const [hasAccess, setHasAccess] = useState<boolean>(false);

  useEffect(() => {
    const verifyAccess = async () => {
      // 1. Nếu là Thầy giáo -> Toàn quyền truy cập 100%
      if (isTeacher) {
        setHasAccess(true);
        setIsCheckingAccess(false);
        return;
      }

      // 2. Nếu chưa đăng nhập tài khoản học sinh
      if (!student) {
        setIsCheckingAccess(false);
        setHasAccess(false);
        return;
      }

      try {
        // Query khóa học từ Supabase để kiểm tra danh sách cấp quyền assigned_class_ids
        const { data: courseData, error } = await supabase
          .from('courses')
          .select('id, title, assigned_class_ids, is_published')
          .eq('id', 'f925edc9-0a65-48a9-8f74-1793c75beff9')
          .single();

        let course = courseData;
        if (error || !course) {
          const { data: coursesByTitle } = await supabase
            .from('courses')
            .select('id, title, assigned_class_ids, is_published')
            .ilike('title', '%lấy gốc hóa%');
          course = coursesByTitle?.[0];
        }

        if (!course || course.is_published === false) {
          setHasAccess(false);
          setIsCheckingAccess(false);
          return;
        }

        const assigned: string[] = Array.isArray(course.assigned_class_ids) ? course.assigned_class_ids : [];

        // Nếu Thầy đã bấm mở cho Toàn trường
        if (assigned.includes('ALL')) {
          setHasAccess(true);
          setIsCheckingAccess(false);
          return;
        }

        const sId = student.id;
        const sCode = String(student.student_code || '').toUpperCase().trim();
        const gradeNum = (student.grade || '').match(/\d+/)?.[0];

        // Cấp quyền đích danh học sinh
        if (assigned.includes(sId) || assigned.includes(sCode)) {
          setHasAccess(true);
          setIsCheckingAccess(false);
          return;
        }

        // Cấp quyền theo khối
        if (gradeNum && assigned.includes(`GRADE_${gradeNum}`)) {
          setHasAccess(true);
          setIsCheckingAccess(false);
          return;
        }

        // Cấp quyền theo lớp học
        const studentClasses: string[] = Array.isArray(student.class_ids) ? student.class_ids : [];
        if (student.class_id) studentClasses.push(student.class_id);
        if (studentClasses.some(cid => assigned.includes(cid))) {
          setHasAccess(true);
          setIsCheckingAccess(false);
          return;
        }

        // Mặc định chưa cấp quyền
        setHasAccess(false);
      } catch (err) {
        console.warn('Lỗi kiểm tra quyền khóa học:', err);
        setHasAccess(false);
      } finally {
        setIsCheckingAccess(false);
      }
    };

    verifyAccess();
  }, [student, isTeacher]);

  // Trạng thái bài làm của đề hiện tại
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(40 * 60); // 30 phút
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [violations, setViolations] = useState<number>(0);

  // Lịch sử điểm số 9 đề lưu local để học sinh theo dõi tiến độ
  const [scoreHistory, setScoreHistory] = useState<Record<number, { score10: number; correctCount: number; date: string }>>(() => {
    try {
      const saved = localStorage.getItem('khoa_hoc_hoa_history');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const activeExam = useMemo<KhoaHocHoaExam>(() => {
    return KHOA_HOC_HOA_EXAMS.find(e => e.examNo === currentExamNo) || KHOA_HOC_HOA_EXAMS[0];
  }, [currentExamNo]);

  // Đổi đề thi
  const handleSelectExam = (examNo: number) => {
    setCurrentExamNo(examNo);
    setSearchParams({ de: examNo.toString() });
    setAnswers({});
    setIsSubmitted(false);
    setTimeLeft(40 * 60);
    setIsTimerActive(true);
    setViolations(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Thông báo cảnh báo quy chế khi bắt đầu làm bài theo yêu cầu của Thầy Thọ
  useEffect(() => {
    toast('🛡️ Quy chế phòng thi: Khi làm bài nếu thoát toàn màn hình hoặc chuyển tab quá 3 lần, hệ thống sẽ tự động thu bài và chấm điểm!', {
      duration: 6000,
      icon: '⚠️',
      style: {
        background: '#1e293b',
        color: '#f8fafc',
        fontWeight: 700,
        borderRadius: '16px',
        border: '1px solid #f59e0b',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
      }
    });
  }, []);

  // Bắt đầu bấm giờ
  useEffect(() => {
    setIsTimerActive(true);
    setTimeLeft(40 * 60);
    setAnswers({});
    setIsSubmitted(false);
  }, [currentExamNo]);

  // Bộ đếm thời gian
  useEffect(() => {
    if (!isTimerActive || isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isTimerActive, isSubmitted, timeLeft]);

  // Giám sát chuyển tab (quy chế quá 3 lần thu bài)
  useEffect(() => {
    if (isSubmitted) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setViolations(prev => {
          const next = prev + 1;
          if (next >= 3) {
            toast.error('⚠️ Bạn đã chuyển màn hình quá 3 lần! Hệ thống tự động thu bài.', { duration: 5000 });
            handleSubmitExam();
          } else {
            toast.error(`⚠️ Cảnh báo (${next}/3): Vui lòng không rời màn hình thi! Thoát 3 lần sẽ bị thu bài.`, { duration: 4000 });
          }
          return next;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isSubmitted]);

  // Format thời gian phút:giây
  const formattedTime = useMemo(() => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, [timeLeft]);

  // Chọn đáp án
  const handleSelectOption = (questionId: number, optionText: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionText
    }));
  };

  // Nộp bài và tính điểm
  const handleSubmitExam = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    setIsTimerActive(false);

    let correct = 0;
    activeExam.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct += 1;
      }
    });

    const score10 = Math.round((correct / activeExam.questions.length) * 100) / 10;

    // Lưu vào lịch sử điểm số
    setScoreHistory(prev => {
      const updated = {
        ...prev,
        [currentExamNo]: {
          score10,
          correctCount: correct,
          date: new Date().toLocaleDateString('vi-VN')
        }
      };
      try {
        localStorage.setItem('khoa_hoc_hoa_history', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    if (score10 >= 8) {
      toast.success(`🎉 Xuất sắc! Em đạt ${score10}/10 điểm (${correct}/${activeExam.questions.length} câu đúng)!`, { duration: 5000, icon: '🌟' });
    } else {
      toast(`Em đạt ${score10}/10 điểm (${correct}/${activeExam.questions.length} câu đúng). Hãy xem kĩ lời giải chi tiết bên dưới nhé!`, { icon: '📝' });
    }

    // Cuộn xuống bảng kết quả
    setTimeout(() => {
      const el = document.getElementById('result-summary-box');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  // Kết quả tính toán
  const examResult = useMemo(() => {
    if (!isSubmitted) return null;
    let correct = 0;
    activeExam.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct += 1;
      }
    });
    const score10 = Math.round((correct / activeExam.questions.length) * 100) / 10;
    return {
      correct,
      total: activeExam.questions.length,
      score10,
      percentage: Math.round((correct / activeExam.questions.length) * 100)
    };
  }, [isSubmitted, answers, activeExam]);

  // Số lượng câu đã trả lời
  const answeredCount = Object.keys(answers).length;

  // MÀN HÌNH KHÓA NẾU HỌC SINH CHƯA ĐƯỢC THẦY THỌ CẤP QUYỀN
  if (!isCheckingAccess && !hasAccess && !isTeacher) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-sky-50/20 to-slate-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl text-center space-y-4 animate-fade-in">
          <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center text-4xl mx-auto shadow-inner">
            🔒
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
            Khóa Học Chưa Được Cấp Quyền
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            Chào em <strong className="text-blue-900 font-bold">{student?.full_name || 'Học sinh'}</strong> {student?.student_code ? `(Mã: ${student.student_code})` : ''}!<br />
            Khóa học <strong>Lấy Gốc Hóa Học Nền Tảng (9 Đề Toàn Diện)</strong> hiện chưa được Thầy Thọ cấp quyền truy cập cho tài khoản của em.
          </p>
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-sm text-amber-900 font-semibold space-y-1 text-left">
            <p className="flex items-center gap-1.5 font-bold text-amber-950">
              <span>💡 Cách mở khóa:</span>
            </p>
            <p className="font-normal text-amber-800">
              Vui lòng liên hệ trực tiếp <strong>Thầy Thọ</strong> để được kích hoạt khóa học vào tài khoản. Khi Thầy cấp quyền, khóa học sẽ xuất hiện ngay trong trang Cổng Thi của em!
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => navigate('/thi')}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-sm rounded-2xl shadow-md transition cursor-pointer"
            >
              Về Trang Cổng Thi Của Em
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-sky-50/20 to-slate-50 text-slate-800 flex flex-col relative overflow-x-hidden">
      {/* HỌA TIẾT PHÔNG NỀN CHÌM: KÝ HIỆU TOÁN & HÓA HỌC (ĐỒNG BỘ 100% CỔNG HỌC SINH) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.035] text-blue-900">
        {/* Phía trên bên phải: Vòng benzen */}
        <div className="absolute -top-10 -right-10 w-96 h-96">
          <svg viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 20 L160 55 L160 125 L100 160 L40 125 L40 55 Z" stroke="currentColor" strokeWidth="6" fill="none"/>
            <circle cx="100" cy="90" r="38" stroke="currentColor" strokeWidth="5" fill="none"/>
          </svg>
        </div>
        {/* Phía trên bên trái: Tích phân & Sigma */}
        <div className="absolute top-24 -left-6 text-9xl font-serif">
          ∫
        </div>
        <div className="absolute top-80 left-12 text-7xl font-serif">
          ∑
        </div>
        {/* Giữa trang bên phải: Căn bậc hai & Pi */}
        <div className="absolute top-1/2 -right-8 text-8xl font-serif">
          √x
        </div>
        <div className="absolute top-[60%] right-24 text-7xl font-serif">
          π
        </div>
        {/* Phía dưới bên trái: Quỹ đạo electron nguyên tử */}
        <div className="absolute bottom-20 left-8 w-48 h-48">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <ellipse cx="50" cy="50" rx="45" ry="16" transform="rotate(30 50 50)"/>
            <ellipse cx="50" cy="50" rx="45" ry="16" transform="rotate(-30 50 50)"/>
            <circle cx="50" cy="50" r="8" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* HEADER ĐẦU TRANG */}
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/thi')}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Về Cổng Thi</span>
            </button>
            <div className="h-6 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                🧪
              </div>
              <div>
                <h1 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight line-clamp-1">
                  LỚP HỌC THẦY THỌ
                </h1>
                <p className="text-[10px] text-amber-700 font-bold uppercase tracking-wider">
                  Khóa Học: Lấy Gốc Hóa Học (9 Đề)
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs"
              title="In đề thi và đáp án"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">In Đề PDF</span>
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast.success('Đã copy đường link khóa học! 📋');
              }}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Chia Sẻ</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 space-y-6 z-10 animate-fade-in">
        {/* BANNER KHÓA HỌC TƯƠI SÁNG (CAM HỔ PHÁCH & XANH COBAN - 1991) */}
        <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-amber-600 rounded-3xl p-5 sm:p-8 text-white border-2 border-amber-300/40 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-amber-400/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-400/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400/25 border border-amber-300/40 text-amber-100 text-[11px] sm:text-xs font-black uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-300" />
                <span>Toán & Hóa Thầy Thọ</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                🎓 9 Chuyên Đề Toàn Diện (360 Câu Chuẩn 10, 11, 12 & ĐH)
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              KHÓA HỌC: LẤY GỐC HÓA HỌC NỀN TẢNG (9 ĐỀ TOÀN DIỆN)
            </h2>

            <p className="text-amber-100/90 text-xs sm:text-sm font-medium leading-relaxed max-w-3xl">
              Thầy Thọ thiết kế bộ 9 đề toàn diện bao quát 100% các nguyên tố và hợp chất hay thi trong các kì thi lớp 10, 11, 12 và THPT Quốc Gia / Đại học: Kí hiệu hóa học, Kim loại - Phi kim - Khí hiếm, Nguyên tử khối, Phân tử khối, Hóa trị, Lập CTHH, Phân loại vô cơ, Đặc trị chất lưỡng tính (Al₂O₃, ZnO, Cr₂O₃, Al(OH)₃, Zn(OH)₂, Cr(OH)₃) và Bảng tính tan.
            </p>
          </div>
        </div>

        {/* BỘ CHỌN 9 ĐỀ THI (NAVIGATION TABS) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>DANH SÁCH 9 ĐỀ THI LẤY GỐC:</span>
            </h3>
            <span className="text-xs font-bold text-slate-500">
              Đang làm: <strong className="text-amber-600">Đề số {currentExamNo}</strong>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
            {KHOA_HOC_HOA_EXAMS.map(exam => {
              const isSelected = exam.examNo === currentExamNo;
              const hist = scoreHistory[exam.examNo];

              return (
                <button
                  key={exam.id}
                  onClick={() => handleSelectExam(exam.examNo)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-br from-blue-700 to-indigo-800 text-white border-blue-800 shadow-md ring-2 ring-amber-400'
                      : 'bg-white hover:bg-amber-50/50 text-slate-700 border-slate-200/90 hover:border-amber-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-base">{exam.icon}</span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isSelected 
                        ? 'bg-amber-400 text-slate-900' 
                        : hist ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {hist ? `${hist.score10}đ` : `Đề ${exam.examNo}`}
                    </span>
                  </div>
                  <div>
                    <h4 className={`text-xs font-black line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                      {exam.shortTitle}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* KHUNG THÔNG TIN ĐỀ THI & THANH CÔNG CỤ (THỜI GIAN, TIẾN ĐỘ, NỘP BÀI) */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-black uppercase tracking-wider mb-1.5">
              <span>{activeExam.icon}</span>
              <span>{activeExam.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {activeExam.desc}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            {/* Đồng hồ đếm ngược */}
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-2 rounded-2xl">
              <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
              <span className="text-xs font-bold text-amber-900">Thời gian:</span>
              <span className="text-sm font-black text-amber-700 font-mono tracking-wider">{formattedTime}</span>
            </div>

            {/* Tiến độ đã làm */}
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-slate-700">Đã chọn:</span>
              <span className="text-sm font-black text-teal-700 font-mono">
                {answeredCount}/{activeExam.questions.length}
              </span>
            </div>

            {/* Nút nộp bài */}
            {!isSubmitted ? (
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Nộp Bài Chấm Điểm 🚀</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setAnswers({});
                  setIsSubmitted(false);
                  setTimeLeft(40 * 60);
                  setIsTimerActive(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-2xl shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4 text-amber-400" />
                <span>Làm Lại Đề Này 🔄</span>
              </button>
            )}
          </div>
        </div>

        {/* BẢNG TỔNG KẾT KẾT QUẢ SAU KHI NỘP */}
        {isSubmitted && examResult && (
          <div id="result-summary-box" className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border-2 border-emerald-300 shadow-lg animate-fade-in space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-3xl shadow-md shrink-0">
                  {examResult.score10 >= 8 ? '🏆' : '📊'}
                </div>
                <div>
                  <span className="text-[11px] font-black text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    KẾT QUẢ BÀI THI CỦA EM
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                    ĐIỂM SỐ: <span className="text-emerald-700">{examResult.score10} / 10 ĐIỂM</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Số câu đúng: <strong className="text-emerald-700">{examResult.correct}</strong>/{examResult.total} câu (Đạt {examResult.percentage}%)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {currentExamNo < 9 && (
                  <button
                    onClick={() => handleSelectExam(currentExamNo + 1)}
                    className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>Làm Đề {currentExamNo + 1} Tiếp Theo ➔</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

                        {/* DANH SÁCH CÂU HỎI TRẮC NGHIỆM - GIAO DIỆN TO, RÕ, ĐẸP, SANG TRỌNG & HIỆN ĐẠI (KHÔNG LỘ ĐÁP ÁN, KHÔNG SỐ Ở NGOÀI) */}
        <div className="space-y-6 sm:space-y-8">
          {activeExam.questions.map((q, idx) => {
            const selectedOpt = answers[q.id];
            const isAnswered = !!selectedOpt;
            const isCorrect = isSubmitted && selectedOpt === q.correctAnswer;
            const isWrong = isSubmitted && isAnswered && selectedOpt !== q.correctAnswer;

            const letters = ['A', 'B', 'C', 'D'];
            const selectedIndex = q.options.indexOf(selectedOpt);
            const selectedLetter = selectedIndex !== -1 ? letters[selectedIndex] : null;

            const correctIndex = q.options.indexOf(q.correctAnswer);
            const correctLetter = correctIndex !== -1 ? letters[correctIndex] : null;

            // Loại bỏ tiền tố 'Câu 1:' nếu có trong text
            const questionBody = q.question.replace(/^Câu \d+:\s*/i, '');

            // Chỉ hiển thị biểu thức ở Đề 1, 4, 5 (nơi biểu thức là đề bài toán/kí hiệu, TUYỆT ĐỐI không lộ đáp án ở Đề 2, 3, 6, 7, 8, 9)
            const shouldShowExpression = (currentExamNo === 1 || currentExamNo === 4 || currentExamNo === 5) && !!q.mathExpression;

            return (
              <div
                key={q.id}
                className={`p-6 sm:p-8 rounded-3xl bg-white transition-all duration-300 shadow-sm hover:shadow-md ${
                  isSubmitted
                    ? isCorrect
                      ? 'border-2 border-emerald-400 bg-emerald-50/15'
                      : 'border-2 border-rose-300 bg-rose-50/15'
                    : isAnswered
                    ? 'border-2 border-blue-400/80 ring-2 ring-blue-100'
                    : 'border border-slate-200/90'
                }`}
              >
                {/* TIÊU ĐỀ CÂU HỎI TO, RÕ, SANG TRỌNG - BẮT ĐẦU NGAY ĐẦU DÒNG (KHÔNG CÓ BẤT KỲ SỐ NÀO Ở NGOÀI) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3.5 py-1 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xs">
                      CÂU {idx + 1}
                    </span>
                    {isSubmitted && (
                      <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-2xs ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}>
                        {isCorrect ? '✔ ĐÚNG CHÍNH XÁC' : '✖ CHƯA CHÍNH XÁC'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed tracking-tight pt-1">
                    {questionBody}
                  </h3>
                </div>

                {/* BIỂU THỨC DỮ KIỆN CỦA ĐỀ BÀI (CHỈ HIỆN Ở ĐỀ 1, 4, 5 - CĂN GIỮA, KHÔNG LỘ ĐÁP ÁN) */}
                {shouldShowExpression && (
                  <div className="my-4 py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-50/60 via-amber-50/40 to-indigo-50/60 border border-blue-200/80 text-center font-serif text-xl sm:text-2xl text-blue-950 font-semibold tracking-wider select-none shadow-2xs">
                    <span dangerouslySetInnerHTML={{ __html: formatChemicalFormula(q.mathExpression) }} />
                  </div>
                )}

                {/* 4 LỰA CHỌN TRẮC NGHIỆM TO, RÕ, BẤM ÊM, ĐẸP MẮT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4.5 mt-5">
                  {q.options.map((opt, oIdx) => {
                    const letter = letters[oIdx] || 'A';
                    const isOptionSelected = selectedOpt === opt;
                    const isOptionCorrect = isSubmitted && opt === q.correctAnswer;
                    const isOptionWrongSelected = isSubmitted && isOptionSelected && opt !== q.correctAnswer;

                    let btnClasses = 'bg-slate-50/70 hover:bg-white border-2 border-slate-200 hover:border-blue-400 text-slate-800 hover:shadow-sm';
                    let letterBadgeClasses = 'bg-white border border-slate-300 text-slate-700 shadow-2xs';

                    if (!isSubmitted) {
                      if (isOptionSelected) {
                        btnClasses = 'bg-blue-50/80 border-2 border-blue-600 text-blue-950 font-bold shadow-md ring-4 ring-blue-500/20 scale-[1.01]';
                        letterBadgeClasses = 'bg-blue-600 text-white font-black shadow-xs';
                      }
                    } else {
                      if (isOptionCorrect) {
                        btnClasses = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-black shadow-sm ring-2 ring-emerald-300/40';
                        letterBadgeClasses = 'bg-emerald-500 text-white font-black shadow-xs';
                      } else if (isOptionWrongSelected) {
                        btnClasses = 'bg-rose-50 border-2 border-rose-400 text-rose-950 font-black shadow-sm';
                        letterBadgeClasses = 'bg-rose-500 text-white font-black shadow-xs';
                      } else {
                        btnClasses = 'bg-white border border-slate-200 text-slate-500 opacity-75';
                        letterBadgeClasses = 'bg-slate-100 text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isSubmitted}
                        onClick={() => handleSelectOption(q.id, opt)}
                        className={`p-4 sm:p-5 rounded-2xl transition-all flex items-center gap-4 cursor-pointer text-left ${btnClasses}`}
                      >
                        <span className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-black text-sm sm:text-base shrink-0 ${letterBadgeClasses}`}>
                          {letter}
                        </span>
                        <span className="flex-1 text-base sm:text-lg leading-snug tracking-tight font-medium">
                          {opt}
                        </span>
                        {/* Biểu tượng trạng thái bên phải */}
                        {!isSubmitted && isOptionSelected && (
                          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs shrink-0 shadow-2xs">
                            ✓
                          </div>
                        )}
                        {isSubmitted && isOptionCorrect && (
                          <span className="text-emerald-600 font-black text-xl shrink-0 pr-1">✔</span>
                        )}
                        {isSubmitted && isOptionWrongSelected && (
                          <span className="text-rose-500 font-black text-xl shrink-0 pr-1">✖</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* DÒNG TRẠNG THÁI KẾT QUẢ KHI ĐÃ NỘP BÀI */}
                {isSubmitted && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                    <span className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold ${
                      selectedOpt ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      Em chọn: {selectedLetter ? `${selectedLetter} (${selectedOpt})` : '(Chưa chọn)'}
                    </span>
                    {selectedOpt && (
                      <span className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? '✅ Chính xác tuyệt đối!' : '❌ Chưa chính xác!'}
                      </span>
                    )}
                    {!isCorrect && (
                      <span className="px-4 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-xl text-xs sm:text-sm font-bold">
                        Đáp án đúng là: {correctLetter} ({q.correctAnswer})
                      </span>
                    )}
                  </div>
                )}

                {/* KHỐI LỜI GIẢI CHI TIẾT SƯ PHẠM CỦA THẦY THỌ */}
                {isSubmitted && q.explanation && (
                  <div className="mt-4 p-5 sm:p-6 bg-gradient-to-br from-blue-50/90 via-indigo-50/40 to-white border-2 border-blue-200/90 rounded-2xl space-y-2 animate-fade-in shadow-xs">
                    <div className="text-blue-700 font-black text-sm sm:text-base flex items-center gap-2">
                      <span className="text-lg">💡</span>
                      <span>Lời giải & Đáp án chi tiết của Thầy Thọ:</span>
                    </div>
                    <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal">
                      {q.explanation.startsWith('👉') ? q.explanation : `👉 ${q.explanation}`}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* NÚT NỘP BÀI DƯỚI CÙNG TRANG */}
        {!isSubmitted && (
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md text-center space-y-3">
            <h4 className="text-sm font-black text-slate-800 uppercase">
              Em đã hoàn thành {answeredCount}/{activeExam.questions.length} câu hỏi
            </h4>
            <button
              onClick={handleSubmitExam}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg transition cursor-pointer active:scale-95 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>NỘP BÀI CHẤM ĐIỂM NGAY 🚀</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
