// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Trophy, Flame, Sparkles, CheckCircle2, XCircle, Lock, Unlock,
  Clock, BookOpen, ChevronRight, Award, Zap, Play, RotateCcw,
  Check, ArrowRight, ShieldCheck, HelpCircle, Eye, AlertCircle,
  TrendingUp, Star, Filter, Share2, Volume2, VolumeX, Shuffle,
  Layers, Compass, Atom, Beaker, Maximize2, Minimize2, ChevronDown,
  Calculator, CheckSquare, Edit3, ArrowLeft
} from 'lucide-react';
import toast from 'react-hot-toast';
import {
  HOA12_CHUONG1_LESSONS,
  HOA12_CHUONG1_7_EXAMS,
  HOA12_CHUONG1_HANDBOOK,
  calculateChuong1ExamScore,
  getChuong1UserProgress,
  saveChuong1ExamResult,
  getRankTitle,
  Chuong1Exam,
  Chuong1Question,
  Chuong1Lesson
} from '../services/hoa12Chuong1Service';

interface Hoa12Chuong1ViewProps {
  studentName?: string;
  studentGrade?: string;
  onClose?: () => void;
}

// Bộ tạo âm thanh sống động bằng Web Audio API
class ChemistrySoundFX {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(m: boolean) { this.isMuted = m; }
  getMuted() { return this.isMuted; }

  click() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  celebration() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.12, this.ctx!.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + idx * 0.1 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(this.ctx!.currentTime + idx * 0.1);
        osc.stop(this.ctx!.currentTime + idx * 0.1 + 0.25);
      });
    } catch (e) {}
  }
}

const sfx = new ChemistrySoundFX();

// Hiển thị công thức hóa học với chỉ số dưới (sub) & chỉ số trên (sup) chuẩn xác, phông sáng chữ đen
export const ChemistryText = React.memo(({ html, className = '' }: { html?: string; className?: string }) => {
  if (!html) return null;
  if (!/<[a-z][\s\S]*>/i.test(html)) {
    return <span className={className}>{html}</span>;
  }
  return (
    <span
      className={`chem-content ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
});

// Hiển thị thư viện hình ảnh từ đề gốc kèm nút phóng to
export const QuestionImages = React.memo(({ 
  images, 
  onPreview 
}: { 
  images?: string[]; 
  onPreview: (src: string) => void 
}) => {
  if (!images || images.length === 0) return null;
  return (
    <div className="my-4 flex flex-wrap gap-4 items-center justify-start">
      {images.map((src, idx) => (
        <div
          key={idx}
          onClick={() => onPreview(src)}
          className="relative group cursor-zoom-in bg-white rounded-2xl p-3 border-2 border-slate-300 hover:border-blue-500 shadow-sm transition-all max-w-full"
          title="Nhấn để xem ảnh phóng to từ đề gốc"
        >
          <img
            src={src}
            alt={`Hình ảnh minh họa ${idx + 1}`}
            className="max-h-64 sm:max-h-80 object-contain rounded-xl mx-auto"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center text-white text-sm font-bold gap-1.5 backdrop-blur-[1px]">
            <Eye className="w-4 h-4 text-white" /> Phóng to hình ảnh
          </div>
        </div>
      ))}
    </div>
  );
});

export const Hoa12Chuong1View: React.FC<Hoa12Chuong1ViewProps> = ({
  studentName = 'Học sinh Lớp 12',
  studentGrade = '12',
  onClose
}) => {
  // Quản lý chọn Bài học: Bài 1, Bài 2 hoặc Bài 3
  const [selectedLessonId, setSelectedLessonId] = useState<'bai1' | 'bai2' | 'bai3'>('bai1');
  
  // Tab con trong Bài: 'practice' (Luyện tập 3 phần / 7 Đề) | 'theory' (Lý thuyết & Dạng toán)
  const [lessonSubTab, setLessonSubTab] = useState<'practice' | 'theory'>('practice');

  // Phân chia phần luyện tập tự luyện: 'all' | 'part1' | 'part2' | 'part3'
  const [practicePartFilter, setPracticePartFilter] = useState<'all' | 'part1' | 'part2' | 'part3'>('all');

  const [progress, setProgress] = useState(getChuong1UserProgress());
  const [isMuted, setIsMuted] = useState(false);

  // Chế độ Toàn màn hình cả chiều ngang và chiều dọc (Full Screen & Full Width)
  const [isFullscreen, setIsFullscreen] = useState(true);

  // Trạng thái Phòng thi 7 Đề
  const [currentExam, setCurrentExam] = useState<Chuong1Exam | null>(null);
  const [examAnswers, setExamAnswers] = useState<Record<string | number, any>>({});
  const [timeLeft, setTimeLeft] = useState<number>(50 * 60);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [examResult, setExamResult] = useState<any>(null);

  // Trạng thái Phòng rèn luyện theo Bài (3 phần)
  const [activePracticeSession, setActivePracticeSession] = useState<{
    lessonId: 'bai1' | 'bai2';
    partFilter: 'all' | 'part1' | 'part2' | 'part3';
    title: string;
    questions: Chuong1Question[];
  } | null>(null);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string | number, any>>({});
  const [isPracticeSubmitted, setIsPracticeSubmitted] = useState<boolean>(false);
  const [practiceResult, setPracticeResult] = useState<any>(null);

  // Dạng toán đang mở lời giải
  const [expandedMathForm, setExpandedMathForm] = useState<string | null>(null);

  // Modal phóng to ảnh gốc
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Lấy dữ liệu bài học hiện tại
  const currentLesson = useMemo(() => {
    return HOA12_CHUONG1_LESSONS.find(l => l.id === selectedLessonId) || HOA12_CHUONG1_LESSONS[0];
  }, [selectedLessonId]);

  // Khóa cuộn trang nền khi đang ở chế độ toàn màn hình
  useEffect(() => {
    if (isFullscreen && (currentExam || activePracticeSession)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen, currentExam, activePracticeSession]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      setIsFullscreen(false);
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  // Đóng modal ảnh khi bấm ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (previewImage) setPreviewImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage]);

  // Bộ đếm thời gian cho đề thi 50 phút
  useEffect(() => {
    let timer: any = null;
    if (currentExam && !isExamSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAutoSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [currentExam, isExamSubmitted, timeLeft]);

  const reloadProgress = () => {
    setProgress(getChuong1UserProgress());
  };

  const startExam = (exam: Chuong1Exam) => {
    setCurrentExam(exam);
    setExamAnswers({});
    setTimeLeft(50 * 60);
    setIsExamSubmitted(false);
    setExamResult(null);
    setIsFullscreen(true);
    sfx.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectP1 = (qKey: string | number, optLetter: string, isExam = true) => {
    if (isExam && isExamSubmitted) return;
    if (!isExam && isPracticeSubmitted) return;
    sfx.click();
    if (isExam) {
      setExamAnswers(prev => ({ ...prev, [qKey]: optLetter }));
    } else {
      setPracticeAnswers(prev => ({ ...prev, [qKey]: optLetter }));
    }
  };

  const handleSelectP2 = (qKey: string | number, subLetter: string, val: boolean, isExam = true) => {
    if (isExam && isExamSubmitted) return;
    if (!isExam && isPracticeSubmitted) return;
    sfx.click();
    const updater = (prev: any) => {
      const currentSub = prev[qKey] || {};
      return {
        ...prev,
        [qKey]: { ...currentSub, [subLetter]: val }
      };
    };
    if (isExam) setExamAnswers(updater);
    else setPracticeAnswers(updater);
  };

  const handleInputP3 = (qKey: string | number, val: string, isExam = true) => {
    if (isExam && isExamSubmitted) return;
    if (!isExam && isPracticeSubmitted) return;
    if (isExam) setExamAnswers(prev => ({ ...prev, [qKey]: val }));
    else setPracticeAnswers(prev => ({ ...prev, [qKey]: val }));
  };

  const handleAutoSubmitExam = () => {
    if (isExamSubmitted) return;
    toast.error('Đã hết 50 phút làm bài! Hệ thống tự động thu bài.', { icon: '⏰' });
    submitExam();
  };

  const submitExam = () => {
    if (!currentExam || isExamSubmitted) return;
    const result = calculateChuong1ExamScore(currentExam.questions, examAnswers);
    setExamResult(result);
    setIsExamSubmitted(true);
    saveChuong1ExamResult(currentExam.id, result.score10);
    reloadProgress();
    sfx.celebration();
    toast.success(`Nộp bài thành công! Điểm của em: ${result.score10}/10 Điểm`, {
      icon: '🎉',
      duration: 6000
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startPractice = (lesson: Chuong1Lesson, filter: 'all' | 'part1' | 'part2' | 'part3' = 'all') => {
    if (!lesson.practice) return;
    let qs: Chuong1Question[] = [];
    if (filter === 'part1') qs = lesson.practice.part1;
    else if (filter === 'part2') qs = lesson.practice.part2;
    else if (filter === 'part3') qs = lesson.practice.part3;
    else qs = [...lesson.practice.part1.slice(0, 18), ...lesson.practice.part2.slice(0, 4), ...lesson.practice.part3.slice(0, 6)];

    const partNames = {
      'all': 'Đề Tổng Hợp Tự Luyện (18 P1 + 4 P2 + 6 P3)',
      'part1': 'Phần I: Trắc Nghiệm 4 Lựa Chọn',
      'part2': 'Phần II: Trắc Nghiệm Đúng / Sai',
      'part3': 'Phần III: Trắc Nghiệm Trả Lời Ngắn (Điền Số)'
    };

    setActivePracticeSession({
      lessonId: lesson.id as any,
      partFilter: filter,
      title: `${lesson.shortTitle} · ${partNames[filter]}`,
      questions: qs
    });
    setPracticeAnswers({});
    setIsPracticeSubmitted(false);
    setPracticeResult(null);
    setIsFullscreen(true);
    sfx.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitPractice = () => {
    if (!activePracticeSession || isPracticeSubmitted) return;
    const result = calculateChuong1ExamScore(activePracticeSession.questions, practiceAnswers);
    setPracticeResult(result);
    setIsPracticeSubmitted(true);
    sfx.celebration();
    toast.success(`Hoàn thành tự luyện! Điểm của em: ${result.score10}/10 Điểm`, {
      icon: '🎉',
      duration: 6000
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // MODAL PHÓNG TO ẢNH GỐC
  // ─────────────────────────────────────────────────────────────────────────────
  const renderPreviewModal = () => {
    if (!previewImage) return null;
    return (
      <div
        className="fixed inset-0 z-[100000] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
        onClick={() => setPreviewImage(null)}
      >
        <div
          className="relative max-w-5xl max-h-[92vh] bg-white border-2 border-slate-200 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-800 text-sm font-bold">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Hình ảnh minh họa trích xuất từ tài liệu gốc</span>
            </div>
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-rose-600 transition-colors flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>
          </div>

          <div className="overflow-auto max-h-[80vh] flex items-center justify-center p-2 w-full">
            <img
              src={previewImage}
              alt="Hình ảnh đề kiểm tra"
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-lg border border-slate-200"
            />
          </div>
        </div>
      </div>
    );
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER DANH SÁCH CÂU HỎI (DÙNG CHUNG CHO CẢ THI THỬ & TỰ LUYỆN)
  // ─────────────────────────────────────────────────────────────────────────────
  const renderQuestionsList = (
    questions: Chuong1Question[], 
    answers: Record<string | number, any>, 
    isSubmitted: boolean, 
    resultDetail: any,
    isExam = true
  ) => {
    return (
      <div className="space-y-8">
        {/* PHẦN I */}
        {questions.some(q => q.part === 1) && (
          <div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-5 mb-5">
              <h3 className="text-base sm:text-lg font-black text-blue-900 uppercase tracking-wide flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-blue-600" /> PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                Thí sinh chọn 1 phương án đúng duy nhất (A, B, C hoặc D). Mỗi câu trả lời đúng được 0,25 điểm.
              </p>
            </div>

            <div className="space-y-6">
              {questions.filter(q => q.part === 1).map((q, idx) => {
                const qKey = q.id || q.number;
                const selectedOpt = answers[qKey];
                const resDetail = resultDetail?.detail?.[qKey];
                const qImgs = (q.images && q.images.length > 0) ? q.images : (q.image ? [q.image] : []);

                const isShortOptions = q.options?.every(o => (o.text || '').replace(/<[^>]+>/g, '').length < 35);
                const gridClass = isShortOptions 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4' 
                  : 'grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4';

                return (
                  <div 
                    id={`exam-q-${qKey}`}
                    key={qKey} 
                    className={`p-6 sm:p-8 rounded-3xl border-2 transition-all bg-white shadow-sm ${
                      isSubmitted
                        ? resDetail?.isCorrect 
                          ? 'border-emerald-400 bg-emerald-50/30' 
                          : 'border-rose-300 bg-rose-50/30'
                        : 'border-slate-200 hover:border-blue-400'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-blue-600 text-white text-sm font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {q.number || idx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                          <ChemistryText html={q.text} />
                        </div>

                        <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                        <div className={gridClass}>
                          {q.options?.map(opt => {
                            const isSelected = selectedOpt === opt.letter;
                            const isCorrectOpt = opt.isCorrect;

                            let optStyle = 'bg-white text-slate-800 border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/40';
                            if (isSubmitted) {
                              if (isCorrectOpt) optStyle = 'bg-emerald-50 text-emerald-950 border-2 border-emerald-500 font-bold';
                              else if (isSelected && !isCorrectOpt) optStyle = 'bg-rose-50 text-rose-900 border-2 border-rose-400 line-through';
                            } else if (isSelected) {
                              optStyle = 'bg-blue-50 text-blue-950 border-2 border-blue-600 font-bold shadow-md';
                            }

                            return (
                              <button
                                key={opt.letter}
                                type="button"
                                onClick={() => handleSelectP1(qKey, opt.letter, isExam)}
                                disabled={isSubmitted}
                                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col gap-2 ${optStyle}`}
                              >
                                <div className="flex items-start gap-3 w-full">
                                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 ${
                                    isSelected && !isSubmitted 
                                      ? 'bg-blue-600 text-white shadow-sm' 
                                      : 'bg-slate-100 text-slate-700 border border-slate-300'
                                  }`}>
                                    {opt.letter}
                                  </span>
                                  <ChemistryText html={opt.text} className="text-base sm:text-lg font-semibold leading-relaxed flex-1" />
                                </div>

                                {opt.image && (
                                  <div 
                                    onClick={(e) => { e.stopPropagation(); setPreviewImage(opt.image!); }}
                                    className="ml-10 bg-white rounded-xl p-2 border border-slate-300 inline-block cursor-zoom-in hover:border-blue-500 max-w-xs transition-colors"
                                    title="Nhấn để phóng to hình đáp án"
                                  >
                                    <img src={opt.image} alt={opt.letter} className="max-h-28 object-contain rounded" />
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {isSubmitted && (q.solution || q.explanation) && (
                          <div className="mt-5 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-sm sm:text-base text-slate-900 leading-relaxed shadow-sm">
                            <div className="font-bold text-amber-800 flex items-center gap-1.5 mb-2">
                              <Sparkles className="w-5 h-5 text-amber-600" /> Lời giải chi tiết:
                            </div>
                            <ChemistryText html={q.solution || q.explanation} />
                            <QuestionImages images={q.explanationImages} onPreview={setPreviewImage} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PHẦN II */}
        {questions.some(q => q.part === 2) && (
          <div>
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-4 sm:p-5 mb-5">
              <h3 className="text-base sm:text-lg font-black text-indigo-900 uppercase tracking-wide flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" /> PHẦN II. Câu trắc nghiệm Đúng / Sai
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                Thí sinh chọn Đúng hoặc Sai cho mỗi ý a, b, c, d. Điểm: Đúng 1 ý = 0.1đ · Đúng 2 ý = 0.25đ · Đúng 3 ý = 0.5đ · Đúng cả 4 ý = 1.0đ.
              </p>
            </div>

            <div className="space-y-6">
              {questions.filter(q => q.part === 2).map((q, idx) => {
                const qKey = q.id || q.number;
                const currentSubAns = answers[qKey] || {};
                const qImgs = (q.images && q.images.length > 0) ? q.images : (q.image ? [q.image] : []);

                return (
                  <div 
                    id={`exam-q-${qKey}`}
                    key={qKey} 
                    className="p-6 sm:p-8 rounded-3xl border-2 border-slate-200 bg-white shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-indigo-600 text-white text-sm font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {q.displayNumber || q.number || idx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                          <ChemistryText html={q.text} />
                        </div>

                        <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                        <div className="mt-5 space-y-3.5">
                          {q.options?.map(opt => {
                            const subKey = opt.letter;
                            const choice = currentSubAns[subKey] !== undefined ? currentSubAns[subKey] : (currentSubAns[subKey.toLowerCase()] !== undefined ? currentSubAns[subKey.toLowerCase()] : currentSubAns[subKey.toUpperCase()]);
                            const isCorrectAnswer = opt.isCorrect;

                            return (
                              <div 
                                key={opt.letter} 
                                className={`p-4 sm:p-5 rounded-2xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                                  isSubmitted 
                                    ? (choice === isCorrectAnswer ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/70 border-rose-300')
                                    : 'bg-slate-50 border-slate-200'
                                }`}
                              >
                                <div className="flex flex-col gap-2 flex-1">
                                  <div className="flex items-start gap-3 text-base sm:text-lg text-slate-900">
                                    <span className="font-black text-indigo-700 uppercase">{opt.letter})</span>
                                    <ChemistryText html={opt.text} className="flex-1 font-semibold leading-relaxed" />
                                  </div>
                                  {opt.image && (
                                    <div 
                                      onClick={() => setPreviewImage(opt.image!)}
                                      className="ml-8 bg-white rounded-xl p-2 border border-slate-300 inline-block cursor-zoom-in hover:border-indigo-400 max-w-xs"
                                      title="Nhấn để phóng to hình ảnh"
                                    >
                                      <img src={opt.image} alt={opt.letter} className="max-h-28 object-contain rounded" />
                                    </div>
                                  )}
                                </div>

                                <div className="flex items-center gap-3 shrink-0">
                                  <button
                                    type="button"
                                    disabled={isSubmitted}
                                    onClick={() => handleSelectP2(qKey, opt.letter, true, isExam)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-black transition-all border-2 ${
                                      choice === true 
                                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-md' 
                                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                                    }`}
                                  >
                                    Đúng
                                  </button>
                                  <button
                                    type="button"
                                    disabled={isSubmitted}
                                    onClick={() => handleSelectP2(qKey, opt.letter, false, isExam)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-black transition-all border-2 ${
                                      choice === false 
                                        ? 'bg-rose-600 text-white border-rose-700 shadow-md' 
                                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                                    }`}
                                  >
                                    Sai
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {isSubmitted && (q.solution || q.explanation) && (
                          <div className="mt-5 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-sm sm:text-base text-slate-900 leading-relaxed">
                            <div className="font-bold text-amber-800 flex items-center gap-1.5 mb-2">
                              <Sparkles className="w-5 h-5 text-amber-600" /> Lời giải chi tiết từng ý:
                            </div>
                            <ChemistryText html={q.solution || q.explanation} />
                            <QuestionImages images={q.explanationImages} onPreview={setPreviewImage} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PHẦN III */}
        {questions.some(q => q.part === 3) && (
          <div>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 sm:p-5 mb-5">
              <h3 className="text-base sm:text-lg font-black text-amber-900 uppercase tracking-wide flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-amber-600" /> PHẦN III. Câu trắc nghiệm yêu cầu trả lời ngắn
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                Thí sinh tự tính toán và nhập đáp số vào ô trống. Mỗi câu trả lời đúng được 0,25 điểm.
              </p>
            </div>

            <div className="space-y-6">
              {questions.filter(q => q.part === 3).map((q, idx) => {
                const qKey = q.id || q.number;
                const userVal = answers[qKey] || '';
                const resDetail = resultDetail?.detail?.[qKey];
                const qImgs = (q.images && q.images.length > 0) ? q.images : (q.image ? [q.image] : []);

                return (
                  <div 
                    id={`exam-q-${qKey}`}
                    key={qKey} 
                    className={`p-6 sm:p-8 rounded-3xl border-2 transition-all bg-white shadow-sm ${
                      isSubmitted
                        ? resDetail?.isCorrect 
                          ? 'border-emerald-400 bg-emerald-50/30' 
                          : 'border-rose-300 bg-rose-50/30'
                        : 'border-slate-200 hover:border-amber-400'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-500 text-white text-sm font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {q.displayNumber || q.number || idx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                          <ChemistryText html={q.text} />
                        </div>

                        <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                        <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
                          <label className="text-sm font-bold text-slate-700">
                            Đáp số của em:
                          </label>
                          <input
                            type="text"
                            disabled={isSubmitted}
                            value={userVal}
                            onChange={(e) => handleInputP3(qKey, e.target.value, isExam)}
                            placeholder="Nhập số kết quả (VD: 4 hoặc 82,3)..."
                            className="w-full sm:w-80 bg-white border-2 border-slate-300 rounded-xl px-5 py-3 text-slate-900 font-mono font-bold text-base focus:outline-none focus:border-amber-500 shadow-inner"
                          />
                          {isSubmitted && (
                            <div className="text-sm text-slate-700 flex items-center gap-2">
                              <span>Đáp án chuẩn: <strong className="text-emerald-700 font-mono text-base bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-300">{q.correctAnswer}</strong></span>
                            </div>
                          )}
                        </div>

                        {isSubmitted && (q.solution || q.explanation) && (
                          <div className="mt-5 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-sm sm:text-base text-slate-900 leading-relaxed">
                            <div className="font-bold text-amber-800 flex items-center gap-1.5 mb-2">
                              <Sparkles className="w-5 h-5 text-amber-600" /> Hướng dẫn giải chi tiết:
                            </div>
                            <ChemistryText html={q.solution || q.explanation} />
                            <QuestionImages images={q.explanationImages} onPreview={setPreviewImage} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 🌟 NỘI DUNG PHÒNG THI 7 ĐỀ (EXAM ROOM) - FULL CHIỀU NGANG & TOÀN MÀN HÌNH
  // ─────────────────────────────────────────────────────────────────────────────
  const renderExamRoom = () => {
    if (!currentExam) return null;

    return (
      <div className={`w-full bg-slate-100 text-slate-900 ${
        isFullscreen 
          ? 'fixed inset-0 z-[99999] w-screen h-screen overflow-y-auto p-3 sm:p-6 lg:p-8' 
          : 'rounded-3xl p-4 sm:p-8 border-2 border-slate-200 shadow-xl'
      }`}>
        <div className="w-full max-w-[1750px] mx-auto space-y-6 animate-in fade-in duration-200">
          {/* STICKY TOP BAR */}
          <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-slate-300 shadow-md flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs sm:text-sm font-black text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
                  BÀI 3 · MÃ ĐỀ: {currentExam.code}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
                  50 PHÚT · 28 CÂU HỎI · THANG ĐIỂM 10
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mt-1.5">
                {currentExam.title}
              </h2>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border-2 border-blue-300 text-blue-900 font-black text-xs sm:text-sm shadow-sm transition-all"
                title={isFullscreen ? 'Thu nhỏ giao diện' : 'Toàn màn hình cả chiều ngang'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4 text-blue-700" /> : <Maximize2 className="w-4 h-4 text-blue-700" />}
                <span>{isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình rộng'}</span>
              </button>

              <div className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xl lg:text-2xl font-black border-2 ${
                timeLeft < 300 
                  ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse' 
                  : 'bg-blue-50 text-blue-800 border-blue-300'
              }`}>
                <Clock className="w-5 h-5" />
                <span>{formatTimer(timeLeft)}</span>
              </div>

              {!isExamSubmitted ? (
                <button
                  onClick={submitExam}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-7 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-5 h-5" /> Nộp Bài Thi
                </button>
              ) : (
                <button
                  onClick={() => setCurrentExam(null)}
                  className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 text-sm sm:text-base shadow-md"
                >
                  <ArrowRight className="w-4 h-4" /> Quay Về Bài 3
                </button>
              )}
            </div>
          </div>

          {/* BẢNG CHỌN CÂU HỎI NHANH */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 shadow-sm">
            <div className="text-xs sm:text-sm font-black text-slate-700 uppercase mb-2.5 flex items-center justify-between">
              <span>Bảng chuyển nhanh câu hỏi:</span>
              <span className="text-xs font-semibold text-slate-500">Đã làm: {Object.keys(examAnswers).length}/28 câu</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentExam.questions.map((q, idx) => {
                const qKey = q.id || q.number;
                const isAnswered = q.part === 1 ? !!examAnswers[qKey] : (q.part === 2 ? Object.keys(examAnswers[qKey] || {}).length > 0 : !!examAnswers[qKey]);
                
                return (
                  <button
                    key={qKey}
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(`exam-q-${qKey}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center border-2 ${
                      isAnswered 
                        ? 'bg-blue-600 text-white border-blue-700 shadow-sm' 
                        : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* KẾT QUẢ BÀI LÀM NẾU ĐÃ NỘP */}
          {isExamSubmitted && examResult && (
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 shadow-md">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-800">Kết Quả Bài Làm Của Em</div>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 mt-1">
                    {examResult.score10} <span className="text-2xl text-emerald-700 font-bold">/ 10.0 Điểm</span>
                  </div>
                  <p className="text-sm text-slate-700 mt-2 font-medium">
                    Phần I: <strong>{examResult.part1Score}/4.5đ</strong> · Phần II: <strong>{examResult.part2Score}/4.0đ</strong> · Phần III: <strong>{examResult.part3Score}/1.5đ</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => startExam(currentExam)}
                    className="bg-white hover:bg-slate-100 text-blue-700 font-black px-5 py-3 rounded-xl border-2 border-slate-300 flex items-center gap-2 text-sm shadow-sm"
                  >
                    <RotateCcw className="w-4 h-4" /> Làm Lại Đề Này
                  </button>
                  <button
                    onClick={() => setCurrentExam(null)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-6 py-3 rounded-xl text-sm shadow-md"
                  >
                    Hoàn Tất & Xem Đề Khác
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* RENDER CÂU HỎI THI */}
          {renderQuestionsList(currentExam.questions, examAnswers, isExamSubmitted, examResult, true)}

          <div className="mt-10 pt-6 border-t-2 border-slate-300 flex items-center justify-between">
            <button
              onClick={() => setCurrentExam(null)}
              className="bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm"
            >
              ← Thoát Về Bài 3
            </button>
            {!isExamSubmitted && (
              <button
                onClick={submitExam}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-10 py-3.5 rounded-2xl shadow-lg text-base flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" /> Nộp Bài & Chấm Điểm
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 🌟 NỘI DUNG PHÒNG RÈN LUYỆN TỰ LUYỆN (BÀI 1 & BÀI 2)
  // ─────────────────────────────────────────────────────────────────────────────
  const renderPracticeRoom = () => {
    if (!activePracticeSession) return null;

    return (
      <div className={`w-full bg-slate-100 text-slate-900 ${
        isFullscreen 
          ? 'fixed inset-0 z-[99999] w-screen h-screen overflow-y-auto p-3 sm:p-6 lg:p-8' 
          : 'rounded-3xl p-4 sm:p-8 border-2 border-slate-200 shadow-xl'
      }`}>
        <div className="w-full max-w-[1750px] mx-auto space-y-6 animate-in fade-in duration-200">
          <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-slate-300 shadow-md flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm font-black text-blue-800 bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200">
                LUYỆN TẬP CHUẨN CẤU TRÚC BỘ GD&ĐT 2025
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mt-1.5">
                {activePracticeSession.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Gồm {activePracticeSession.questions.length} câu hỏi tự luyện có chấm điểm và lời giải chi tiết.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border-2 border-blue-300 text-blue-900 font-black text-xs sm:text-sm shadow-sm"
                title={isFullscreen ? 'Thu nhỏ giao diện' : 'Toàn màn hình cả chiều ngang'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4 text-blue-700" /> : <Maximize2 className="w-4 h-4 text-blue-700" />}
                <span>{isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình rộng'}</span>
              </button>

              <button
                onClick={() => setActivePracticeSession(null)}
                className="bg-white hover:bg-slate-100 text-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm border-2 border-slate-300 shadow-sm"
              >
                Quay Về Bài Học
              </button>
            </div>
          </div>

          {isPracticeSubmitted && practiceResult && (
            <div className="p-6 sm:p-8 rounded-3xl bg-blue-50 border-2 border-blue-300 shadow-md">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs sm:text-sm text-blue-800 font-black uppercase">Điểm Rèn Luyện Của Em</div>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 mt-1">{practiceResult.score10} / 10 Điểm</div>
                </div>
                {practiceResult.score10 >= 7.0 && (
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base bg-emerald-100 px-5 py-2.5 rounded-2xl border border-emerald-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" /> Xuất sắc! Nắm vững kiến thức trọng tâm!
                  </div>
                )}
              </div>
            </div>
          )}

          {renderQuestionsList(activePracticeSession.questions, practiceAnswers, isPracticeSubmitted, practiceResult, false)}

          {!isPracticeSubmitted && (
            <div className="mt-10 text-right">
              <button
                onClick={submitPractice}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-3.5 rounded-2xl shadow-lg text-base"
              >
                Nộp Bài Rèn Luyện
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // NẾU ĐANG TRONG PHÒNG THI: RENDER BẰNG CREATEPORTAL VÀO BODY NẾU FULLSCREEN
  if (currentExam) {
    const examElement = renderExamRoom();
    return (
      <>
        {isFullscreen && typeof document !== 'undefined'
          ? createPortal(examElement, document.body)
          : examElement}
        {renderPreviewModal()}
      </>
    );
  }

  // NẾU ĐANG TRONG PHÒNG RÈN LUYỆN: RENDER BẰNG CREATEPORTAL VÀO BODY NẾU FULLSCREEN
  if (activePracticeSession) {
    const practiceElement = renderPracticeRoom();
    return (
      <>
        {isFullscreen && typeof document !== 'undefined'
          ? createPortal(practiceElement, document.body)
          : practiceElement}
        {renderPreviewModal()}
      </>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // GIAO DIỆN CHÍNH (CHỌN BÀI HỌC, DẠNG TOÁN, BÀI TẬP 3 PHẦN, 7 ĐỀ THI)
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div className="w-full bg-slate-50 text-slate-900 rounded-3xl p-4 sm:p-7 border-2 border-slate-200 shadow-xl">
      <style>{`
        .chem-content {
          font-family: inherit;
          color: #0f172a !important;
        }
        .chem-content sub {
          font-size: 0.72em !important;
          vertical-align: sub !important;
          line-height: 0 !important;
          position: relative !important;
          bottom: -0.22em !important;
          font-weight: 700 !important;
          color: #0f172a !important;
        }
        .chem-content sup {
          font-size: 0.72em !important;
          vertical-align: super !important;
          line-height: 0 !important;
          position: relative !important;
          top: -0.32em !important;
          font-weight: 700 !important;
          color: #0f172a !important;
        }
        .chem-content br {
          display: block;
          margin: 6px 0;
          content: "";
        }
      `}</style>

      {/* HEADER & GAMIFICATION BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b-2 border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="bg-blue-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> CTGDPT 2018 MỚI · THI 2025
            </span>
            <span className="bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1 rounded-full border border-slate-300">
              🧪 KHỐI 12 HOÁ HỌC · CHƯƠNG 1
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            ESTER – LIPID & CHẤT GIẶT RỬA
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Giáo trình toàn diện: Lý thuyết chuẩn SGK · Phương pháp giải các dạng toán · Bài tập tự luyện 3 phần · Bộ 7 Đề kiểm tra chuẩn Bộ 2025
          </p>
        </div>

        {/* Gamification Bar */}
        <div className="flex items-center gap-3 bg-white p-2.5 sm:p-3 rounded-2xl border-2 border-slate-200 shadow-sm flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-xl">
            <Flame className="w-5 h-5 text-amber-500 animate-bounce" />
            <div>
              <div className="text-[10px] text-amber-700 font-bold uppercase tracking-wider">Chuỗi Lửa</div>
              <div className="text-sm font-black text-slate-900">{progress.streakDays} ngày</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-xl">
            <Trophy className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">{progress.rankTitle}</div>
              <div className="text-sm font-black text-slate-900">{progress.totalXP.toLocaleString()} XP</div>
            </div>
          </div>

          <button
            onClick={() => {
              const next = !isMuted;
              setIsMuted(next);
              sfx.setMuted(next);
            }}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
          </button>
        </div>
      </div>

      {/* THANH ĐIỀU HƯỚNG 3 BÀI HỌC RIÊNG BIỆT */}
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
          {HOA12_CHUONG1_LESSONS.map((les) => {
            const isSelected = selectedLessonId === les.id;
            
            return (
              <button
                key={les.id}
                onClick={() => {
                  setSelectedLessonId(les.id);
                  setLessonSubTab('practice');
                  sfx.click();
                }}
                className={`p-4 rounded-3xl border-2 text-left transition-all relative overflow-hidden group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-600 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between gap-3 w-full mb-2">
                  <span className="w-10 h-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    {les.icon}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 font-black'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {les.badge}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    BÀI HỌC SỐ {les.lessonNumber}
                  </div>
                  <h3 className={`text-base font-black transition-colors ${
                    isSelected ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-700'
                  }`}>
                    {les.shortTitle}
                  </h3>
                  <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed font-medium">
                    {les.description}
                  </p>
                </div>

                <div className={`mt-3 pt-2.5 border-t w-full flex items-center justify-between text-xs font-bold ${
                  isSelected ? 'border-blue-200 text-blue-700' : 'border-slate-200 text-slate-500'
                }`}>
                  <span>{isSelected ? 'Đang mở bài học này' : 'Bấm để mở bài học'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-blue-600' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* THANH CHUYỂN ĐỔI CHẾ ĐỘ TRONG BÀI (SUB-TABS) */}
        <div className="flex items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-slate-200 flex-wrap">
          <div className="flex items-center gap-2 p-1.5 bg-slate-200 rounded-2xl">
            <button
              onClick={() => { setLessonSubTab('practice'); sfx.click(); }}
              className={`px-5 py-2.5 rounded-xl font-black text-xs transition-all flex items-center gap-2 ${
                lessonSubTab === 'practice'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {selectedLessonId === 'bai3' ? (
                <>
                  <Trophy className="w-4 h-4" /> BỘ 7 ĐỀ KIỂM TRA ĐỊNH KỲ (50P)
                </>
              ) : (
                <>
                  <Award className="w-4 h-4" /> BÀI TẬP TỰ LUYỆN 3 PHẦN
                </>
              )}
            </button>

            <button
              onClick={() => { setLessonSubTab('theory'); sfx.click(); }}
              className={`px-5 py-2.5 rounded-xl font-black text-xs transition-all flex items-center gap-2 ${
                lessonSubTab === 'theory'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" /> 
              {selectedLessonId === 'bai3' ? 'SỔ TAY TỔNG KẾT CỐT LÕI CHƯƠNG 1' : 'LÝ THUYẾT & CÁC DẠNG TOÁN'}
            </button>
          </div>

          <div className="text-xs text-slate-600 font-bold">
            Đang xem: <strong className="text-slate-900">{currentLesson.title}</strong>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB 1: LUYỆN TẬP / THI THỬ (PRACTICE) */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {lessonSubTab === 'practice' && (
          <div>
            {/* Nếu là Bài 3: Hiển thị 7 Đề kiểm tra định kỳ */}
            {selectedLessonId === 'bai3' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {HOA12_CHUONG1_7_EXAMS.map((exam) => {
                  const prevResult = progress.examScores[exam.id];
                  const hasScore = prevResult && prevResult.score !== undefined;

                  return (
                    <div
                      key={exam.id}
                      className="bg-white hover:bg-slate-50/80 rounded-3xl p-6 border-2 border-slate-200 hover:border-amber-400 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                            MÃ ĐỀ: {exam.code}
                          </span>
                          {hasScore ? (
                            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Điểm cao nhất: {prevResult.score}/10
                            </span>
                          ) : (
                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                              Chưa làm bài
                            </span>
                          )}
                        </div>

                        <h4 className="text-base font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                          {exam.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-2 flex items-center gap-4 font-medium">
                          <span>⏱️ 50 Phút</span>
                          <span>📝 28 Câu (18 P1 + 4 P2 + 6 P3)</span>
                          <span>🎯 Thang điểm 10</span>
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-medium">
                          {hasScore ? `Đã làm ${prevResult.attempts} lần` : 'Chuẩn cấu trúc Bộ 2025'}
                        </span>
                        <button
                          onClick={() => startExam(exam)}
                          className="bg-amber-500 hover:bg-amber-600 text-white font-black px-5 py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5"
                        >
                          <Play className="w-4 h-4" /> {hasScore ? 'Làm Lại Đề' : 'Vào Thi Ngay'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Nếu là Bài 1 hoặc Bài 2: Hiển thị bộ luyện tập tự luyện chuẩn cấu trúc 3 phần */
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" /> Ngân Hàng Câu Hỏi Tự Luyện Chuẩn Cấu Trúc 2025
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5 font-medium">
                        Em hãy chọn luyện tập theo từng phần cụ thể hoặc làm đề tổng hợp 3 phần:
                      </p>
                    </div>

                    <button
                      onClick={() => startPractice(currentLesson, 'all')}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black px-6 py-2.5 rounded-2xl text-xs sm:text-sm shadow-md flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" /> Làm Đề Tổng Hợp 3 Phần (28 Câu)
                    </button>
                  </div>

                  {/* 3 Khối Luyện Tập Riêng Biệt */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {/* PHẦN 1 */}
                    <div className="bg-slate-50 hover:bg-white rounded-2xl p-5 border-2 border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-black text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-full">
                            PHẦN I (0,25đ/câu)
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {currentLesson.practice?.part1.length || 0} câu
                          </span>
                        </div>
                        <h4 className="text-base font-black text-slate-900">
                          Trắc Nghiệm 4 Lựa Chọn
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                          Chọn 1 phương án đúng duy nhất (A, B, C hoặc D). Bao gồm cả câu hỏi lý thuyết và nhận biết hình ảnh phổ, đồ thị.
                        </p>
                      </div>

                      <button
                        onClick={() => startPractice(currentLesson, 'part1')}
                        className="mt-4 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5" /> Luyện Tập Phần I
                      </button>
                    </div>

                    {/* PHẦN 2 */}
                    <div className="bg-slate-50 hover:bg-white rounded-2xl p-5 border-2 border-slate-200 hover:border-indigo-400 transition-all flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-black text-indigo-800 bg-indigo-100 px-2.5 py-0.5 rounded-full">
                            PHẦN II (1,0đ/câu)
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {currentLesson.practice?.part2.length || 0} câu
                          </span>
                        </div>
                        <h4 className="text-base font-black text-slate-900">
                          Trắc Nghiệm Đúng / Sai
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                          Mỗi câu gồm 4 nhận định a, b, c, d. Điểm lũy tiến: 1 ý = 0.1đ, 2 ý = 0.25đ, 3 ý = 0.5đ, 4 ý = 1.0đ.
                        </p>
                      </div>

                      <button
                        onClick={() => startPractice(currentLesson, 'part2')}
                        className="mt-4 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5" /> Luyện Tập Phần II
                      </button>
                    </div>

                    {/* PHẦN 3 */}
                    <div className="bg-slate-50 hover:bg-white rounded-2xl p-5 border-2 border-slate-200 hover:border-amber-400 transition-all flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-black text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                            PHẦN III (0,25đ/câu)
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {currentLesson.practice?.part3.length || 0} câu
                          </span>
                        </div>
                        <h4 className="text-base font-black text-slate-900">
                          Trả Lời Ngắn (Điền Số)
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                          Tự tính toán số mol, khối lượng, nhiệt độ, hiệu suất và điền đáp số vào ô trống. Rèn luyện tư duy tự luận.
                        </p>
                      </div>

                      <button
                        onClick={() => startPractice(currentLesson, 'part3')}
                        className="mt-4 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5" /> Luyện Tập Phần III
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB 2: LÝ THUYẾT & CÁC DẠNG TOÁN (THEORY & MATH FORMS) */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {lessonSubTab === 'theory' && (
          <div className="space-y-6">
            {/* Nếu là Bài 3: Hiển thị Sổ tay tổng kết toàn diện */}
            {selectedLessonId === 'bai3' ? (
              <div className="space-y-5">
                {HOA12_CHUONG1_HANDBOOK.map((sec, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
                    <h4 className="text-base font-black text-blue-900 flex items-center gap-2 mb-3.5">
                      <span className="text-xl">{sec.icon}</span> {sec.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {sec.content.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs sm:text-sm text-slate-800 flex items-start gap-2.5 leading-relaxed font-medium">
                          <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                          <ChemistryText html={item} className="flex-1" />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              /* Nếu là Bài 1 hoặc Bài 2: Hiển thị các Dạng toán tính toán kèm phương pháp & ví dụ */
              <div className="space-y-6">
                {/* KHỐI 1: CÁC DẠNG TOÁN TÍNH TOÁN TRỌNG TÂM */}
                {currentLesson.mathForms && currentLesson.mathForms.length > 0 && (
                  <div className="space-y-5">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-5">
                      <h3 className="text-lg font-black text-blue-900 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-blue-600" /> Các Dạng Bài Toán Trọng Tâm (Phương Pháp & Ví Dụ Mẫu)
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5 font-medium">
                        Nắm vững phương pháp giải, công thức tính toán và các bài tập mẫu có lời giải chi tiết từng bước.
                      </p>
                    </div>

                    {currentLesson.mathForms.map((mf, mfIdx) => {
                      const isExpanded = expandedMathForm === mf.id || expandedMathForm === null; // default open first

                      return (
                        <div key={mf.id} className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm overflow-hidden">
                          <div 
                            onClick={() => setExpandedMathForm(expandedMathForm === mf.id ? '' : mf.id)}
                            className="p-5 sm:p-6 bg-slate-50 hover:bg-slate-100/80 cursor-pointer flex items-center justify-between border-b border-slate-200 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                                {mfIdx + 1}
                              </span>
                              <div>
                                <h4 className="text-base sm:text-lg font-black text-slate-900">
                                  {mf.title}
                                </h4>
                                <span className="text-xs font-semibold text-slate-500">
                                  Gồm {mf.examples.length} ví dụ tự luận mẫu có lời giải chi tiết
                                </span>
                              </div>
                            </div>

                            <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </div>

                          {isExpanded && (
                            <div className="p-6 space-y-6 animate-in fade-in duration-150">
                              {/* Phương pháp giải */}
                              {mf.method && (
                                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
                                  <h5 className="text-sm font-black text-blue-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                                    <Sparkles className="w-4 h-4 text-blue-600" /> Phương pháp & Công thức giải nhanh:
                                  </h5>
                                  <div className="text-sm text-slate-800 leading-relaxed font-medium">
                                    <ChemistryText html={mf.method} />
                                  </div>
                                </div>
                              )}

                              {/* Danh sách bài tập mẫu */}
                              <div className="space-y-5">
                                <h5 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                                  Các ví dụ minh họa có giải chi tiết:
                                </h5>

                                {mf.examples.map((ex, eIdx) => (
                                  <div key={eIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                                    <div className="text-base font-bold text-slate-900">
                                      <span className="text-blue-700 font-black mr-2">Ví dụ {ex.number || eIdx + 1}.</span>
                                      <ChemistryText html={ex.text} />
                                    </div>

                                    <QuestionImages images={ex.images} onPreview={setPreviewImage} />

                                    {ex.solution && (
                                      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-slate-900 leading-relaxed font-medium">
                                        <div className="font-bold text-amber-800 mb-1 flex items-center gap-1">
                                          💡 Hướng dẫn giải chi tiết:
                                        </div>
                                        <ChemistryText html={ex.solution} />
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {renderPreviewModal()}
    </div>
  );
};

export default Hoa12Chuong1View;
