// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Trophy, Flame, Sparkles, CheckCircle2, XCircle, Lock, Unlock,
  Clock, BookOpen, ChevronRight, Award, Zap, Play, RotateCcw,
  Check, ArrowRight, ShieldCheck, HelpCircle, Eye, AlertCircle,
  TrendingUp, Star, Filter, Share2, Volume2, VolumeX, Shuffle,
  Layers, Compass, Atom, Beaker, Maximize2, Minimize2, ChevronUp
} from 'lucide-react';
import toast from 'react-hot-toast';
import {
  HOA12_CHUONG1_LESSONS,
  HOA12_CHUONG1_7_EXAMS,
  HOA12_CHUONG1_TOPICS,
  HOA12_CHUONG1_HANDBOOK,
  calculateChuong1ExamScore,
  getChuong1UserProgress,
  saveChuong1ExamResult,
  saveChuong1TopicLevelSuccess,
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
    <div className="my-3.5 flex flex-wrap gap-3 items-center justify-start">
      {images.map((src, idx) => (
        <div
          key={idx}
          onClick={() => onPreview(src)}
          className="relative group cursor-zoom-in bg-white rounded-2xl p-2.5 border-2 border-slate-200 hover:border-blue-500 shadow-sm transition-all max-w-full"
          title="Nhấn để xem ảnh phóng to từ đề gốc"
        >
          <img
            src={src}
            alt={`Hình ảnh đề gốc ${idx + 1}`}
            className="max-h-56 sm:max-h-72 object-contain rounded-xl mx-auto"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-[1px]">
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
  
  // Tab con trong từng bài: 'practice' (Luyện tập / Vượt ải / Đề thi) | 'theory' (Lý thuyết trọng tâm)
  const [lessonSubTab, setLessonSubTab] = useState<'practice' | 'theory'>('practice');

  const [progress, setProgress] = useState(getChuong1UserProgress());
  const [isMuted, setIsMuted] = useState(false);

  // Chế độ Toàn màn hình (Full Screen)
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Trạng thái Phòng thi
  const [currentExam, setCurrentExam] = useState<Chuong1Exam | null>(null);
  const [examAnswers, setExamAnswers] = useState<Record<string | number, any>>({});
  const [timeLeft, setTimeLeft] = useState<number>(50 * 60);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [examResult, setExamResult] = useState<any>(null);

  // Trạng thái Phòng rèn luyện chuyên đề
  const [activeTopic, setActiveTopic] = useState<any>(null);
  const [activeLevel, setActiveLevel] = useState<any>(null);
  const [topicAnswers, setTopicAnswers] = useState<Record<number, string>>({});
  const [isTopicSubmitted, setIsTopicSubmitted] = useState<boolean>(false);
  const [topicScore, setTopicScore] = useState<number>(0);

  // Modal phóng to ảnh gốc
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Lấy dữ liệu bài học hiện tại
  const currentLesson = useMemo(() => {
    return HOA12_CHUONG1_LESSONS.find(l => l.id === selectedLessonId) || HOA12_CHUONG1_LESSONS[0];
  }, [selectedLessonId]);

  // Lắng nghe sự kiện fullscreenchange
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {
        setIsFullscreen(true);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  // Đóng modal khi bấm ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && previewImage) {
        setPreviewImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage]);

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
    sfx.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectP1 = (qKey: string | number, optLetter: string) => {
    if (isExamSubmitted) return;
    sfx.click();
    setExamAnswers(prev => ({ ...prev, [qKey]: optLetter }));
  };

  const handleSelectP2 = (qKey: string | number, subLetter: string, val: boolean) => {
    if (isExamSubmitted) return;
    sfx.click();
    setExamAnswers(prev => {
      const currentSub = prev[qKey] || {};
      return {
        ...prev,
        [qKey]: { ...currentSub, [subLetter]: val }
      };
    });
  };

  const handleInputP3 = (qKey: string | number, val: string) => {
    if (isExamSubmitted) return;
    setExamAnswers(prev => ({ ...prev, [qKey]: val }));
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

  const startTopicLevel = (topic: any, level: any) => {
    const highestUnlocked = progress.unlockedLevels[topic.id] || 1;
    if (level.level > highestUnlocked) {
      toast.error(`Mức độ ${level.level} đang bị khóa 🔒! Em hãy hoàn thành Mức độ ${level.level - 1} để mở khóa nhé!`);
      return;
    }
    setActiveTopic(topic);
    setActiveLevel(level);
    setTopicAnswers({});
    setIsTopicSubmitted(false);
    setTopicScore(0);
    sfx.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitTopicPractice = () => {
    if (!activeLevel || isTopicSubmitted) return;
    let correct = 0;
    activeLevel.questions.forEach((q: any, idx: number) => {
      const userAns = topicAnswers[idx];
      const correctOpt = q.options?.find((o: any) => o.isCorrect)?.letter || q.correctAnswer;
      if (userAns && userAns === correctOpt) correct++;
    });

    const score10 = Math.round((correct / activeLevel.questions.length) * 100) / 10;
    setTopicScore(score10);
    setIsTopicSubmitted(true);

    if (score10 >= 7.0) {
      saveChuong1TopicLevelSuccess(activeTopic.id, activeLevel.level);
      reloadProgress();
      sfx.celebration();
      toast.success(`🎉 Xuất sắc! Em đạt ${score10}/10 điểm và đã mở khóa cấp độ tiếp theo!`, { duration: 5000 });
    } else {
      toast('Em đạt ' + score10 + '/10 điểm. Hãy ôn lại lý thuyết và làm lại để đạt >= 7.0 điểm mở khóa nhé!', { icon: '💪' });
    }
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isExamMode = !!currentExam;
  const isPracticeMode = !!(activeTopic && activeLevel);

  return (
    <div className={`w-full bg-slate-50 text-slate-900 transition-all ${
      (isFullscreen && (isExamMode || isPracticeMode))
        ? 'fixed inset-0 z-50 overflow-y-auto bg-slate-100 p-3 sm:p-6'
        : 'rounded-3xl p-4 sm:p-7 border-2 border-slate-200 shadow-xl'
    }`}>
      {/* CSS tùy biến cho chỉ số Hóa học và hiển thị đề thi: Phông sáng - Chữ đen rõ nét */}
      <style>{`
        .chem-content {
          font-family: inherit;
          color: #0f172a !important; /* slate-900 */
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
        .chem-equation {
          display: block;
          margin: 8px 0;
          padding: 8px 12px;
          background-color: #f1f5f9;
          border-radius: 8px;
          text-align: center;
          font-weight: 700;
          border: 1px solid #cbd5e1;
        }
      `}</style>

      {/* HEADER & GAMIFICATION BAR (Chỉ hiển thị khi KHÔNG trong phòng thi / phòng rèn luyện) */}
      {!currentExam && !activeTopic && (
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
              Học tập theo lộ trình 3 Bài học riêng biệt · Rèn luyện bậc thang vượt ải · Bộ 7 Đề kiểm tra chuẩn Bộ 2025
            </p>
          </div>

          {/* Thanh Gamification: Chuỗi Lửa, XP, Rank */}
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
      )}

      {/* THANH ĐIỀU HƯỚNG 3 BÀI HỌC RIÊNG BIỆT (3 DISTINCT LESSONS) */}
      {!currentExam && !activeTopic && (
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
                    <Award className="w-4 h-4" /> CÁC CHUYÊN ĐỀ RÈN LUYỆN VƯỢT ẢI
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
                {selectedLessonId === 'bai3' ? 'TỔNG KẾT CỐT LÕI CHƯƠNG 1' : `LÝ THUYẾT TRỌNG TÂM ${currentLesson.shortTitle.toUpperCase()}`}
              </button>
            </div>

            <div className="text-xs text-slate-600 font-bold">
              Đang xem: <strong className="text-slate-900">{currentLesson.title}</strong>
            </div>
          </div>

          {/* NỘI DUNG 1: LUYỆN TẬP (PRACTICE / EXAMS) */}
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
                /* Nếu là Bài 1 hoặc Bài 2: Hiển thị các Chuyên đề rèn luyện */
                <div className="space-y-6">
                  {currentLesson.topics?.map((topic) => {
                    const highestUnlocked = progress.unlockedLevels[topic.id] || 1;

                    return (
                      <div key={topic.id} className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-2xl shrink-0">
                            {topic.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-black text-slate-900">{topic.title}</h4>
                            <p className="text-xs text-slate-600 mt-0.5 font-medium">{topic.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4">
                              {topic.levels.map((lvl) => {
                                const isUnlocked = lvl.level <= highestUnlocked;

                                return (
                                  <div
                                    key={lvl.level}
                                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                                      isUnlocked 
                                        ? 'bg-slate-50 border-slate-200 hover:border-blue-500 hover:bg-white shadow-sm' 
                                        : 'bg-slate-100 border-slate-200 opacity-60'
                                    }`}
                                  >
                                    <div>
                                      <div className="flex items-center justify-between text-xs mb-1">
                                        <span className="font-bold text-slate-600">Cấp độ {lvl.level}</span>
                                        {isUnlocked ? (
                                          <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                            <Unlock className="w-3 h-3" /> Đã mở
                                          </span>
                                        ) : (
                                          <span className="text-slate-500 font-bold flex items-center gap-1 text-[11px] bg-slate-200 px-2 py-0.5 rounded-full">
                                            <Lock className="w-3 h-3" /> Khóa
                                          </span>
                                        )}
                                      </div>
                                      <div className="font-black text-sm text-slate-900">{lvl.title}</div>
                                      <div className="text-[11px] text-blue-700 font-bold mt-1">Mục tiêu: {lvl.target}</div>
                                    </div>

                                    <button
                                      onClick={() => startTopicLevel(topic, lvl)}
                                      disabled={!isUnlocked}
                                      className={`mt-4 w-full py-2.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                                        isUnlocked 
                                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
                                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                      }`}
                                    >
                                      {isUnlocked ? <Play className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                                      {isUnlocked ? 'Luyện Tập Ngay' : 'Cần Mở Khóa'}
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* NỘI DUNG 2: LÝ THUYẾT TRỌNG TÂM TỪNG BÀI (THEORY) */}
          {lessonSubTab === 'theory' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {currentLesson.theory.sections.map((sec, sIdx) => (
                <div key={sIdx} className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
                  <h4 className="text-base font-black text-blue-800 flex items-center gap-2 mb-3.5">
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
          )}
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════ */}
      {/* 🌟 PHÒNG THI 7 ĐỀ KIỂM TRA (EXAM ROOM) - PHÔNG SÁNG CHỮ ĐEN - FULL MÀN HÌNH */}
      {/* ═════════════════════════════════════════════════════════════════════ */}
      {currentExam && (
        <div className="w-full max-w-6xl mx-auto py-2 animate-in fade-in duration-300">
          {/* STICKY TOP BAR */}
          <div className="sticky top-2 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border-2 border-slate-300 shadow-md mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  BÀI 3 · MÃ ĐỀ: {currentExam.code}
                </span>
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                  50 PHÚT · THANG ĐIỂM 10
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                {currentExam.title}
              </h3>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* NÚT TOÀN MÀN HÌNH */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border-2 border-slate-300 text-slate-800 font-bold text-xs shadow-sm transition-all"
                title={isFullscreen ? 'Thu nhỏ giao diện' : 'Phóng to toàn màn hình'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4 text-blue-600" /> : <Maximize2 className="w-4 h-4 text-blue-600" />}
                <span>{isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}</span>
              </button>

              {/* ĐỒNG HỒ ĐẾM NGƯỢC */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-lg font-black border-2 ${
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
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5" /> Nộp Bài Thi
                </button>
              ) : (
                <button
                  onClick={() => setCurrentExam(null)}
                  className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 text-sm shadow-md"
                >
                  <ArrowRight className="w-4 h-4" /> Quay Về Bài 3
                </button>
              )}
            </div>
          </div>

          {/* BẢNG CHỌN CÂU HỎI NHANH (PALETTE) */}
          <div className="bg-white rounded-2xl p-4 border-2 border-slate-200 shadow-sm mb-6">
            <div className="text-xs font-bold text-slate-600 uppercase mb-2">Bảng câu hỏi (Nhấn để cuộn đến câu):</div>
            <div className="flex flex-wrap gap-1.5">
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
                    className={`w-8 h-8 rounded-lg text-xs font-black transition-all flex items-center justify-center border ${
                      isAnswered 
                        ? 'bg-blue-600 text-white border-blue-700 shadow-sm' 
                        : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* KẾT QUẢ BÀI LÀM */}
          {isExamSubmitted && examResult && (
            <div className="mb-6 p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-300 shadow-md">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">Kết Quả Bài Làm Của Em</div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                    {examResult.score10} <span className="text-lg text-emerald-700 font-bold">/ 10.0 Điểm</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1 font-medium">
                    Phần I: <strong>{examResult.part1Score}/4.5đ</strong> · Phần II: <strong>{examResult.part2Score}/4.0đ</strong> · Phần III: <strong>{examResult.part3Score}/1.5đ</strong>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => startExam(currentExam)}
                    className="bg-white hover:bg-slate-100 text-blue-700 font-bold px-4 py-2.5 rounded-xl border-2 border-slate-300 flex items-center gap-1.5 text-xs shadow-sm"
                  >
                    <RotateCcw className="w-4 h-4" /> Làm Lại Đề Này
                  </button>
                  <button
                    onClick={() => setCurrentExam(null)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md"
                  >
                    Hoàn Tất & Xem Đề Khác
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 28 CÂU HỎI THI */}
          <div className="space-y-8">
            {/* PHẦN I */}
            <div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-5">
                <h4 className="text-sm font-black text-blue-900 uppercase tracking-wide">
                  PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn (Câu 1 đến Câu 18)
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">
                  Thí sinh chọn 1 phương án đúng duy nhất (A, B, C hoặc D). Mỗi câu trả lời đúng được 0,25 điểm.
                </p>
              </div>

              <div className="space-y-6">
                {currentExam.questions.filter(q => q.part === 1).map((q) => {
                  const qKey = q.id || q.number;
                  const selectedOpt = examAnswers[qKey];
                  const resDetail = examResult?.detail?.[qKey];
                  const qImgs = (q.images && q.images.length > 0) ? q.images : (q.image ? [q.image] : []);

                  return (
                    <div 
                      id={`exam-q-${qKey}`}
                      key={qKey} 
                      className={`p-6 rounded-2xl border-2 transition-all bg-white shadow-sm ${
                        isExamSubmitted
                          ? resDetail?.isCorrect 
                            ? 'border-emerald-400 bg-emerald-50/30' 
                            : 'border-rose-300 bg-rose-50/30'
                          : 'border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="w-8 h-8 rounded-xl bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          {q.number}
                        </span>
                        <div className="flex-1">
                          <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                            <ChemistryText html={q.text} />
                          </div>

                          {/* Hình ảnh minh họa câu hỏi đề gốc */}
                          <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
                            {q.options?.map(opt => {
                              const isSelected = selectedOpt === opt.letter;
                              const isCorrectOpt = opt.isCorrect;

                              let optStyle = 'bg-white text-slate-800 border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/40';
                              if (isExamSubmitted) {
                                if (isCorrectOpt) optStyle = 'bg-emerald-50 text-emerald-950 border-2 border-emerald-500 font-bold';
                                else if (isSelected && !isCorrectOpt) optStyle = 'bg-rose-50 text-rose-900 border-2 border-rose-400 line-through';
                              } else if (isSelected) {
                                optStyle = 'bg-blue-50 text-blue-950 border-2 border-blue-600 font-bold shadow-sm';
                              }

                              return (
                                <button
                                  key={opt.letter}
                                  type="button"
                                  onClick={() => handleSelectP1(qKey, opt.letter)}
                                  disabled={isExamSubmitted}
                                  className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex flex-col gap-2 ${optStyle}`}
                                >
                                  <div className="flex items-start gap-2.5 w-full">
                                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                                      isSelected && !isExamSubmitted 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-slate-100 text-slate-700 border border-slate-300'
                                    }`}>
                                      {opt.letter}
                                    </span>
                                    <ChemistryText html={opt.text} className="leading-relaxed flex-1 font-semibold" />
                                  </div>

                                  {/* Ảnh đáp án trắc nghiệm đề gốc */}
                                  {opt.image && (
                                    <div 
                                      onClick={(e) => { e.stopPropagation(); setPreviewImage(opt.image!); }}
                                      className="ml-8 bg-white rounded-lg p-1.5 border border-slate-300 inline-block cursor-zoom-in hover:border-blue-500 max-w-xs transition-colors"
                                      title="Nhấn để phóng to hình đáp án"
                                    >
                                      <img src={opt.image} alt={opt.letter} className="max-h-24 object-contain rounded" />
                                    </div>
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Lời giải chi tiết sau khi nộp bài */}
                          {isExamSubmitted && (q.solution || q.explanation) && (
                            <div className="mt-4 p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-xs sm:text-sm text-slate-900 leading-relaxed">
                              <div className="font-bold text-amber-800 flex items-center gap-1.5 mb-1.5">
                                <Sparkles className="w-4 h-4 text-amber-600" /> Lời giải chi tiết:
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

            {/* PHẦN II */}
            <div>
              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-4 mb-5">
                <h4 className="text-sm font-black text-indigo-900 uppercase tracking-wide">
                  PHẦN II. Câu trắc nghiệm Đúng / Sai (Câu 19 đến Câu 22 - Gồm 4 ý a, b, c, d)
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">
                  Thí sinh chọn Đúng hoặc Sai cho mỗi ý. Điểm: Đúng 1 ý = 0.1đ · Đúng 2 ý = 0.25đ · Đúng 3 ý = 0.5đ · Đúng cả 4 ý = 1.0đ.
                </p>
              </div>

              <div className="space-y-6">
                {currentExam.questions.filter(q => q.part === 2).map((q) => {
                  const qKey = q.id || q.number;
                  const currentSubAns = examAnswers[qKey] || {};
                  const qImgs = (q.images && q.images.length > 0) ? q.images : (q.image ? [q.image] : []);

                  return (
                    <div 
                      id={`exam-q-${qKey}`}
                      key={qKey} 
                      className="p-6 rounded-2xl border-2 border-slate-200 bg-white shadow-sm"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          {q.displayNumber || (q.number - 18)}
                        </span>
                        <div className="flex-1">
                          <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                            <ChemistryText html={q.text} />
                          </div>

                          {/* Hình ảnh minh họa đề gốc */}
                          <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                          <div className="mt-4 space-y-3">
                            {q.options?.map(opt => {
                              const subKey = opt.letter;
                              const choice = currentSubAns[subKey] !== undefined ? currentSubAns[subKey] : (currentSubAns[subKey.toLowerCase()] !== undefined ? currentSubAns[subKey.toLowerCase()] : currentSubAns[subKey.toUpperCase()]);
                              const isCorrectAnswer = opt.isCorrect;

                              return (
                                <div 
                                  key={opt.letter} 
                                  className={`p-3.5 rounded-xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                                    isExamSubmitted 
                                      ? (choice === isCorrectAnswer ? 'bg-emerald-50/60 border-emerald-300' : 'bg-rose-50/60 border-rose-300')
                                      : 'bg-slate-50 border-slate-200'
                                  }`}
                                >
                                  <div className="flex flex-col gap-1.5 flex-1">
                                    <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-900">
                                      <span className="font-black text-indigo-700 uppercase">{opt.letter})</span>
                                      <ChemistryText html={opt.text} className="flex-1 font-semibold" />
                                    </div>
                                    {opt.image && (
                                      <div 
                                        onClick={() => setPreviewImage(opt.image!)}
                                        className="ml-6 bg-white rounded-lg p-1.5 border border-slate-300 inline-block cursor-zoom-in hover:border-indigo-400 max-w-xs"
                                        title="Nhấn để phóng to hình ảnh"
                                      >
                                        <img src={opt.image} alt={opt.letter} className="max-h-24 object-contain rounded" />
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-2 shrink-0">
                                    <button
                                      type="button"
                                      disabled={isExamSubmitted}
                                      onClick={() => handleSelectP2(qKey, opt.letter, true)}
                                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                                        choice === true 
                                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm' 
                                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                                      }`}
                                    >
                                      Đúng
                                    </button>
                                    <button
                                      type="button"
                                      disabled={isExamSubmitted}
                                      onClick={() => handleSelectP2(qKey, opt.letter, false)}
                                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                                        choice === false 
                                          ? 'bg-rose-600 text-white border-rose-700 shadow-sm' 
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

                          {isExamSubmitted && (q.solution || q.explanation) && (
                            <div className="mt-4 p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-xs sm:text-sm text-slate-900 leading-relaxed">
                              <div className="font-bold text-amber-800 flex items-center gap-1.5 mb-1.5">
                                <Sparkles className="w-4 h-4 text-amber-600" /> Lời giải chi tiết từng ý:
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

            {/* PHẦN III */}
            <div>
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 mb-5">
                <h4 className="text-sm font-black text-amber-900 uppercase tracking-wide">
                  PHẦN III. Câu trắc nghiệm yêu cầu trả lời ngắn (Câu 23 đến Câu 28)
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">
                  Thí sinh tự tính toán và nhập đáp số vào ô trống. Mỗi câu trả lời đúng được 0,25 điểm.
                </p>
              </div>

              <div className="space-y-6">
                {currentExam.questions.filter(q => q.part === 3).map((q) => {
                  const qKey = q.id || q.number;
                  const userVal = examAnswers[qKey] || '';
                  const resDetail = examResult?.detail?.[qKey];
                  const qImgs = (q.images && q.images.length > 0) ? q.images : (q.image ? [q.image] : []);

                  return (
                    <div 
                      id={`exam-q-${qKey}`}
                      key={qKey} 
                      className={`p-6 rounded-2xl border-2 transition-all bg-white shadow-sm ${
                        isExamSubmitted
                          ? resDetail?.isCorrect 
                            ? 'border-emerald-400 bg-emerald-50/30' 
                            : 'border-rose-300 bg-rose-50/30'
                          : 'border-slate-200 hover:border-amber-400'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="w-8 h-8 rounded-xl bg-amber-500 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          {q.displayNumber || (q.number - 22)}
                        </span>
                        <div className="flex-1">
                          <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                            <ChemistryText html={q.text} />
                          </div>

                          {/* Hình ảnh minh họa đề gốc */}
                          <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                            <label className="text-xs font-bold text-slate-700">
                              Đáp số của em:
                            </label>
                            <input
                              type="text"
                              disabled={isExamSubmitted}
                              value={userVal}
                              onChange={(e) => handleInputP3(qKey, e.target.value)}
                              placeholder="Nhập số kết quả (VD: 4 hoặc 82,3)..."
                              className="w-full sm:w-72 bg-white border-2 border-slate-300 rounded-xl px-4 py-2 text-slate-900 font-mono font-bold text-sm focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
                            />
                            {isExamSubmitted && (
                              <div className="text-xs text-slate-700 flex items-center gap-2">
                                <span>Đáp án chuẩn: <strong className="text-emerald-700 font-mono text-sm bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">{q.correctAnswer}</strong></span>
                              </div>
                            )}
                          </div>

                          {isExamSubmitted && (q.solution || q.explanation) && (
                            <div className="mt-4 p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-xs sm:text-sm text-slate-900 leading-relaxed">
                              <div className="font-bold text-amber-800 flex items-center gap-1.5 mb-1.5">
                                <Sparkles className="w-4 h-4 text-amber-600" /> Hướng dẫn giải chi tiết:
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
          </div>

          <div className="mt-8 pt-6 border-t-2 border-slate-200 flex items-center justify-between">
            <button
              onClick={() => setCurrentExam(null)}
              className="bg-white hover:bg-slate-100 text-slate-700 border-2 border-slate-300 px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm"
            >
              ← Thoát Về Bài 3
            </button>
            {!isExamSubmitted && (
              <button
                onClick={submitExam}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 py-3 rounded-2xl shadow-md text-sm flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" /> Nộp Bài & Chấm Điểm
              </button>
            )}
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════ */}
      {/* 🌟 PHÒNG RÈN LUYỆN CHUYÊN ĐỀ THEO BẬC THANG (TOPIC PRACTICE) */}
      {/* ═════════════════════════════════════════════════════════════════════ */}
      {activeTopic && activeLevel && (
        <div className="w-full max-w-6xl mx-auto py-2 animate-in fade-in duration-300">
          <div className="sticky top-2 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border-2 border-slate-300 shadow-md mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                {currentLesson.shortTitle} · {activeTopic.title} · CẤP ĐỘ {activeLevel.level}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-2">
                {activeLevel.title}
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">Mục tiêu chuẩn: {activeLevel.target} (Đạt từ 7.0 điểm trở lên để mở cấp độ tiếp theo)</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border-2 border-slate-300 text-slate-800 font-bold text-xs shadow-sm"
                title={isFullscreen ? 'Thu nhỏ giao diện' : 'Phóng to toàn màn hình'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4 text-blue-600" /> : <Maximize2 className="w-4 h-4 text-blue-600" />}
                <span>{isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}</span>
              </button>

              <button
                onClick={() => { setActiveTopic(null); setActiveLevel(null); }}
                className="bg-white hover:bg-slate-100 text-slate-700 font-bold px-4 py-2 rounded-xl text-xs border-2 border-slate-300 shadow-sm"
              >
                Quay Về Danh Sách Chuyên Đề
              </button>
            </div>
          </div>

          {isTopicSubmitted && (
            <div className="mb-6 p-6 rounded-3xl bg-blue-50 border-2 border-blue-200 shadow-md">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-blue-800 font-bold uppercase">Điểm Rèn Luyện Của Em</div>
                  <div className="text-3xl font-black text-slate-900">{topicScore} / 10 Điểm</div>
                </div>
                {topicScore >= 7.0 && (
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm bg-emerald-100 px-4 py-2 rounded-xl border border-emerald-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Đã mở khóa Mức độ tiếp theo!
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="space-y-6">
            {activeLevel.questions.map((q: any, idx: number) => {
              const selectedOpt = topicAnswers[idx];
              const isCorrectOpt = q.options?.find((o: any) => o.isCorrect)?.letter || q.correctAnswer;
              const isUserCorrect = isTopicSubmitted && selectedOpt === isCorrectOpt;
              const qImgs = (q.images && q.images.length > 0) ? q.images : (q.image ? [q.image] : []);

              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border-2 transition-all bg-white shadow-sm ${
                    isTopicSubmitted 
                      ? (isUserCorrect ? 'bg-emerald-50/40 border-emerald-400' : 'bg-rose-50/40 border-rose-300')
                      : 'border-slate-200 hover:border-blue-400'
                  }`}
                >
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                    <span className="text-blue-600 font-black mr-2">Câu {idx + 1}.</span>
                    <ChemistryText html={q.text} />
                  </div>

                  <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
                    {q.options?.map((opt: any) => {
                      const isSelected = selectedOpt === opt.letter;
                      let btnStyle = 'bg-white text-slate-800 border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/40';
                      if (isTopicSubmitted) {
                        if (opt.letter === isCorrectOpt) btnStyle = 'bg-emerald-50 text-emerald-950 border-2 border-emerald-500 font-bold';
                        else if (isSelected && opt.letter !== isCorrectOpt) btnStyle = 'bg-rose-50 text-rose-900 border-2 border-rose-400 line-through';
                      } else if (isSelected) {
                        btnStyle = 'bg-blue-50 text-blue-950 border-2 border-blue-600 font-bold shadow-sm';
                      }

                      return (
                        <button
                          key={opt.letter}
                          type="button"
                          disabled={isTopicSubmitted}
                          onClick={() => {
                            sfx.click();
                            setTopicAnswers(prev => ({ ...prev, [idx]: opt.letter }));
                          }}
                          className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm flex flex-col gap-2 transition-all ${btnStyle}`}
                        >
                          <div className="flex items-start gap-2.5 w-full">
                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                              isSelected && !isTopicSubmitted 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-slate-100 text-slate-700 border border-slate-300'
                            }`}>
                              {opt.letter}
                            </span>
                            <ChemistryText html={opt.text} className="flex-1 font-semibold leading-relaxed" />
                          </div>
                          {opt.image && (
                            <div 
                              onClick={(e) => { e.stopPropagation(); setPreviewImage(opt.image); }}
                              className="ml-8 bg-white rounded-lg p-1.5 border border-slate-300 inline-block cursor-zoom-in hover:border-blue-500 max-w-xs"
                            >
                              <img src={opt.image} alt={opt.letter} className="max-h-24 object-contain rounded" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isTopicSubmitted && (q.explanation || q.solution) && (
                    <div className="mt-4 p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-xs sm:text-sm text-slate-900 leading-relaxed">
                      <span className="font-bold text-amber-800 mr-1.5">💡 Lời giải:</span>
                      <ChemistryText html={q.explanation || q.solution} />
                      <QuestionImages images={q.explanationImages} onPreview={setPreviewImage} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!isTopicSubmitted && (
            <div className="mt-8 text-right">
              <button
                onClick={submitTopicPractice}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-3 rounded-2xl shadow-md text-sm"
              >
                Nộp Bài Rèn Luyện
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODAL PHÓNG TO HÌNH ẢNH GỐC */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] bg-white border-2 border-slate-200 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-slate-200">
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-bold">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Hình ảnh trích xuất từ đề kiểm tra gốc</span>
              </div>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-rose-600 transition-colors flex items-center justify-center text-sm font-bold"
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
      )}
    </div>
  );
};

export default Hoa12Chuong1View;
