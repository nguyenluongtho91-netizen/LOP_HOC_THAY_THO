// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Trophy, Flame, Sparkles, CheckCircle2, XCircle, Lock, Unlock,
  Clock, BookOpen, ChevronRight, Award, Zap, Play, RotateCcw,
  Check, ArrowRight, ShieldCheck, HelpCircle, Eye, AlertCircle,
  TrendingUp, Star, Filter, Share2, Volume2, VolumeX, Shuffle,
  Maximize2, X
} from 'lucide-react';
import toast from 'react-hot-toast';
import {
  HOA12_CHUONG1_7_EXAMS,
  HOA12_CHUONG1_TOPICS,
  HOA12_CHUONG1_HANDBOOK,
  calculateChuong1ExamScore,
  getChuong1UserProgress,
  saveChuong1ExamResult,
  saveChuong1TopicLevelSuccess,
  getRankTitle,
  Chuong1Exam,
  Chuong1Question
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

// Hiển thị công thức hóa học với chỉ số dưới (sub) & chỉ số trên (sup) chuẩn xác
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
          className="relative group cursor-zoom-in bg-white rounded-2xl p-2 sm:p-2.5 border border-slate-700/80 hover:border-cyan-400 shadow-lg transition-all max-w-full"
          title="Nhấn để xem ảnh phóng to từ đề gốc"
        >
          <img
            src={src}
            alt={`Hình ảnh đề gốc ${idx + 1}`}
            className="max-h-56 sm:max-h-72 object-contain rounded-xl mx-auto"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-[1px]">
            <Eye className="w-4 h-4 text-cyan-300" /> Phóng to hình ảnh
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
  const [activeTab, setActiveTab] = useState<'exams' | 'topics' | 'handbook'>('exams');
  const [progress, setProgress] = useState(getChuong1UserProgress());
  const [isMuted, setIsMuted] = useState(false);

  const [currentExam, setCurrentExam] = useState<Chuong1Exam | null>(null);
  const [examAnswers, setExamAnswers] = useState<Record<string | number, any>>({});
  const [timeLeft, setTimeLeft] = useState<number>(50 * 60);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [examResult, setExamResult] = useState<any>(null);

  const [activeTopic, setActiveTopic] = useState<any>(null);
  const [activeLevel, setActiveLevel] = useState<any>(null);
  const [topicAnswers, setTopicAnswers] = useState<Record<number, string>>({});
  const [isTopicSubmitted, setIsTopicSubmitted] = useState<boolean>(false);
  const [topicScore, setTopicScore] = useState<number>(0);

  // Modal xem ảnh phóng to chất lượng gốc
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-7 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* CSS tùy biến cho chỉ số Hóa học và ảnh */}
      <style>{`
        .chem-content sub {
          font-size: 0.72em !important;
          vertical-align: sub !important;
          line-height: 0 !important;
          position: relative !important;
          bottom: -0.22em !important;
          font-weight: 700 !important;
        }
        .chem-content sup {
          font-size: 0.72em !important;
          vertical-align: super !important;
          line-height: 0 !important;
          position: relative !important;
          top: -0.38em !important;
          font-weight: 700 !important;
        }
        .chem-content br {
          display: block;
          margin: 4px 0;
          content: "";
        }
      `}</style>

      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent rounded-full pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-600/10 via-emerald-600/5 to-transparent rounded-full pointer-events-none blur-3xl" />

      {/* HEADER & GAMIFICATION BAR */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> CTGDPT 2018 MỚI · THI 2025
            </span>
            <span className="bg-slate-800 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-slate-700">
              🧪 KHỐI 12 HOÁ HỌC
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            CHƯƠNG 1: ESTER – LIPID & CHẤT GIẶT RỬA
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Trọn bộ 7 Đề kiểm tra chuẩn Bộ GD&ĐT 2025 · 5 Chuyên đề rèn luyện vượt ải · Sổ tay lý thuyết cốt lõi
          </p>
        </div>

        {/* Thanh Gamification: Chuỗi Lửa, XP, Rank */}
        <div className="flex items-center gap-3 bg-slate-800/90 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-slate-700/80 shadow-inner flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 rounded-xl">
            <Flame className="w-5 h-5 text-amber-400 animate-bounce" />
            <div>
              <div className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Chuỗi Lửa</div>
              <div className="text-sm font-black text-white">{progress.streakDays} ngày</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/15 border border-indigo-500/30 rounded-xl">
            <Trophy className="w-5 h-5 text-indigo-400" />
            <div>
              <div className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider">{progress.rankTitle}</div>
              <div className="text-sm font-black text-white">{progress.totalXP.toLocaleString()} XP</div>
            </div>
          </div>

          <button
            onClick={() => {
              const next = !isMuted;
              setIsMuted(next);
              sfx.setMuted(next);
            }}
            className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* PHÒNG THI 7 ĐỀ KIỂM TRA (EXAM ROOM) */}
      {currentExam && (
        <div className="relative z-10 mt-6 bg-slate-950/80 rounded-3xl p-5 sm:p-8 border border-blue-500/30 shadow-2xl animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                MÃ ĐỀ: {currentExam.code} · THỜI GIAN: 50 PHÚT · THANG ĐIỂM 10
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-2">
                {currentExam.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-mono text-lg font-black border ${
                timeLeft < 300 
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse' 
                  : 'bg-slate-800 text-cyan-300 border-slate-700'
              }`}>
                <Clock className="w-5 h-5" />
                <span>{formatTimer(timeLeft)}</span>
              </div>

              {!isExamSubmitted ? (
                <button
                  onClick={submitExam}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black px-6 py-2.5 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" /> Nộp Bài Thi
                </button>
              ) : (
                <button
                  onClick={() => setCurrentExam(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-2.5 rounded-2xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Quay Về Danh Sách Đề
                </button>
              )}
            </div>
          </div>

          {/* KẾT QUẢ BÀI LÀM */}
          {isExamSubmitted && examResult && (
            <div className="mt-6 p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 to-teal-950/40 border-2 border-emerald-500/40 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Kết Quả Bài Làm</div>
                  <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                    {examResult.score10} <span className="text-lg text-emerald-300 font-bold">/ 10.0 Điểm</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Phần I: <strong>{examResult.part1Score}/4.5đ</strong> · Phần II: <strong>{examResult.part2Score}/4.0đ</strong> · Phần III: <strong>{examResult.part3Score}/1.5đ</strong>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => startExam(currentExam)}
                    className="bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-1.5 text-xs"
                  >
                    <RotateCcw className="w-4 h-4" /> Làm Lại Đề Này
                  </button>
                  <button
                    onClick={() => setCurrentExam(null)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2 rounded-xl text-xs"
                  >
                    Hoàn Tất & Chọn Đề Khác
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 28 CÂU HỎI THI */}
          <div className="mt-8 space-y-8">
            {/* PHẦN I */}
            <div>
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-2xl p-4 mb-5">
                <h4 className="text-sm font-black text-blue-300 uppercase tracking-wide">
                  PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn (Câu 1 đến Câu 18)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Mỗi câu trả lời đúng được 0,25 điểm. Thí sinh chỉ chọn một phương án A, B, C hoặc D.
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
                      key={qKey} 
                      className={`p-5 rounded-2xl border transition-all ${
                        isExamSubmitted
                          ? resDetail?.isCorrect 
                            ? 'bg-emerald-950/20 border-emerald-500/40' 
                            : 'bg-rose-950/20 border-rose-500/40'
                          : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-xl bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {q.number}
                        </span>
                        <div className="flex-1">
                          <div className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                            <ChemistryText html={q.text} />
                          </div>

                          {/* Hình ảnh minh họa câu hỏi đề gốc */}
                          <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            {q.options?.map(opt => {
                              const isSelected = selectedOpt === opt.letter;
                              const isCorrectOpt = opt.isCorrect;

                              let optStyle = 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:border-blue-500/50';
                              if (isExamSubmitted) {
                                if (isCorrectOpt) optStyle = 'bg-emerald-600/20 text-emerald-200 border-emerald-500 font-bold';
                                else if (isSelected && !isCorrectOpt) optStyle = 'bg-rose-600/20 text-rose-300 border-rose-500 line-through';
                              } else if (isSelected) {
                                optStyle = 'bg-blue-600 text-white border-blue-400 font-bold shadow-md shadow-blue-600/30';
                              }

                              return (
                                <button
                                  key={opt.letter}
                                  type="button"
                                  onClick={() => handleSelectP1(qKey, opt.letter)}
                                  disabled={isExamSubmitted}
                                  className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex flex-col gap-2 ${optStyle}`}
                                >
                                  <div className="flex items-start gap-2.5 w-full">
                                    <span className={`w-5 h-5 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                                      isSelected && !isExamSubmitted ? 'bg-white text-blue-700' : 'bg-slate-700/60 text-slate-200'
                                    }`}>
                                      {opt.letter}
                                    </span>
                                    <ChemistryText html={opt.text} className="leading-snug flex-1" />
                                  </div>

                                  {/* Ảnh đáp án trắc nghiệm đề gốc */}
                                  {opt.image && (
                                    <div 
                                      onClick={(e) => { e.stopPropagation(); setPreviewImage(opt.image!); }}
                                      className="ml-7 bg-white rounded-lg p-1.5 border border-slate-600 inline-block cursor-zoom-in hover:border-cyan-400 max-w-xs transition-colors"
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
                            <div className="mt-4 p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                              <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1.5">
                                <Sparkles className="w-4 h-4 text-amber-400" /> Lời giải chi tiết:
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
              <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-2xl p-4 mb-5">
                <h4 className="text-sm font-black text-indigo-300 uppercase tracking-wide">
                  PHẦN II. Câu trắc nghiệm Đúng / Sai (Câu 19 đến Câu 22 - Gồm 4 ý a, b, c, d)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Thí sinh chọn Đúng hoặc Sai cho mỗi ý. Điểm lũy tiến: Đúng 1 ý = 0.1đ · Đúng 2 ý = 0.25đ · Đúng 3 ý = 0.5đ · Đúng cả 4 ý = 1.0đ.
                </p>
              </div>

              <div className="space-y-6">
                {currentExam.questions.filter(q => q.part === 2).map((q) => {
                  const qKey = q.id || q.number;
                  const currentSubAns = examAnswers[qKey] || {};
                  const qImgs = (q.images && q.images.length > 0) ? q.images : (q.image ? [q.image] : []);

                  return (
                    <div 
                      key={qKey} 
                      className={`p-5 rounded-2xl border transition-all ${
                        isExamSubmitted
                          ? 'bg-slate-900/90 border-slate-700'
                          : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {q.displayNumber || (q.number - 18)}
                        </span>
                        <div className="flex-1">
                          <div className="text-sm sm:text-base font-semibold text-white leading-relaxed">
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
                                  className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                                    isExamSubmitted 
                                      ? (choice === isCorrectAnswer ? 'bg-emerald-950/20 border-emerald-500/40' : 'bg-rose-950/20 border-rose-500/40')
                                      : 'bg-slate-800/60 border-slate-700/60'
                                  }`}
                                >
                                  <div className="flex flex-col gap-1.5 flex-1">
                                    <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                                      <span className="font-black text-indigo-400 uppercase">{opt.letter})</span>
                                      <ChemistryText html={opt.text} className="flex-1" />
                                    </div>
                                    {opt.image && (
                                      <div 
                                        onClick={() => setPreviewImage(opt.image!)}
                                        className="ml-6 bg-white rounded-lg p-1.5 border border-slate-600 inline-block cursor-zoom-in hover:border-indigo-400 max-w-xs"
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
                                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                        choice === true 
                                          ? 'bg-emerald-600 text-white shadow-sm' 
                                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                      }`}
                                    >
                                      Đúng
                                    </button>
                                    <button
                                      type="button"
                                      disabled={isExamSubmitted}
                                      onClick={() => handleSelectP2(qKey, opt.letter, false)}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                        choice === false 
                                          ? 'bg-rose-600 text-white shadow-sm' 
                                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
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
                            <div className="mt-4 p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                              <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1.5">
                                <Sparkles className="w-4 h-4 text-amber-400" /> Lời giải chi tiết từng ý:
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
              <div className="bg-amber-900/30 border border-amber-500/30 rounded-2xl p-4 mb-5">
                <h4 className="text-sm font-black text-amber-300 uppercase tracking-wide">
                  PHẦN III. Câu trắc nghiệm yêu cầu trả lời ngắn (Câu 23 đến Câu 28)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
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
                      key={qKey} 
                      className={`p-5 rounded-2xl border transition-all ${
                        isExamSubmitted
                          ? resDetail?.isCorrect 
                            ? 'bg-emerald-950/20 border-emerald-500/40' 
                            : 'bg-rose-950/20 border-rose-500/40'
                          : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-xl bg-amber-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {q.displayNumber || (q.number - 22)}
                        </span>
                        <div className="flex-1">
                          <div className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                            <ChemistryText html={q.text} />
                          </div>

                          {/* Hình ảnh minh họa đề gốc */}
                          <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                            <label className="text-xs font-bold text-slate-300">
                              Đáp số của em:
                            </label>
                            <input
                              type="text"
                              disabled={isExamSubmitted}
                              value={userVal}
                              onChange={(e) => handleInputP3(qKey, e.target.value)}
                              placeholder="Nhập số kết quả (VD: 4 hoặc 82,3)..."
                              className="w-full sm:w-64 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-white font-mono font-bold text-sm focus:outline-none focus:border-amber-400 transition-colors"
                            />
                            {isExamSubmitted && (
                              <div className="text-xs text-slate-300 flex items-center gap-2">
                                <span>Đáp án chuẩn: <strong className="text-emerald-400 font-mono text-sm">{q.correctAnswer}</strong></span>
                              </div>
                            )}
                          </div>

                          {isExamSubmitted && (q.solution || q.explanation) && (
                            <div className="mt-4 p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                              <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1.5">
                                <Sparkles className="w-4 h-4 text-amber-400" /> Hướng dẫn giải chi tiết:
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

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => setCurrentExam(null)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl font-bold text-xs"
            >
              ← Thoát Về Danh Sách Đề
            </button>
            {!isExamSubmitted && (
              <button
                onClick={submitExam}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black px-8 py-3 rounded-2xl shadow-lg shadow-emerald-500/25 text-sm flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" /> Nộp Bài & Chấm Điểm
              </button>
            )}
          </div>
        </div>
      )}

      {/* PHÒNG RÈN LUYỆN CHUYÊN ĐỀ THEO BẬC THANG (TOPIC PRACTICE) */}
      {activeTopic && activeLevel && (
        <div className="relative z-10 mt-6 bg-slate-950/80 rounded-3xl p-5 sm:p-8 border border-indigo-500/30 shadow-2xl animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                {activeTopic.title} · CẤP ĐỘ {activeLevel.level}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-2">
                {activeLevel.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Mục tiêu chuẩn: {activeLevel.target} (Đạt từ 7.0 điểm trở lên để mở cấp độ tiếp theo)</p>
            </div>

            <button
              onClick={() => { setActiveTopic(null); setActiveLevel(null); }}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl text-xs border border-slate-700"
            >
              Quay Về Danh Sách Chuyên Đề
            </button>
          </div>

          {isTopicSubmitted && (
            <div className="mt-6 p-6 rounded-3xl bg-slate-800/80 border-2 border-indigo-500/40 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-indigo-300 font-bold uppercase">Điểm Rèn Luyện</div>
                  <div className="text-3xl font-black text-white">{topicScore} / 10 Điểm</div>
                </div>
                {topicScore >= 7.0 && (
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm bg-emerald-950/50 px-4 py-2 rounded-xl border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5" /> Đã mở khóa Mức độ tiếp theo!
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-6 space-y-6">
            {activeLevel.questions.map((q: any, idx: number) => {
              const selectedOpt = topicAnswers[idx];
              const isCorrectOpt = q.options?.find((o: any) => o.isCorrect)?.letter || q.correctAnswer;
              const isUserCorrect = isTopicSubmitted && selectedOpt === isCorrectOpt;
              const qImgs = (q.images && q.images.length > 0) ? q.images : (q.image ? [q.image] : []);

              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    isTopicSubmitted 
                      ? (isUserCorrect ? 'bg-emerald-950/20 border-emerald-500/40' : 'bg-rose-950/20 border-rose-500/40')
                      : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <div className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                    <span className="text-indigo-400 font-black mr-2">Câu {idx + 1}.</span>
                    <ChemistryText html={q.text} />
                  </div>

                  <QuestionImages images={qImgs} onPreview={setPreviewImage} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {q.options?.map((opt: any) => {
                      const isSelected = selectedOpt === opt.letter;
                      let btnStyle = 'bg-slate-800 text-slate-300 border-slate-700 hover:border-indigo-500/50';
                      if (isTopicSubmitted) {
                        if (opt.letter === isCorrectOpt) btnStyle = 'bg-emerald-600/20 text-emerald-300 border-emerald-500 font-bold';
                        else if (isSelected && opt.letter !== isCorrectOpt) btnStyle = 'bg-rose-600/20 text-rose-300 border-rose-500 line-through';
                      } else if (isSelected) {
                        btnStyle = 'bg-indigo-600 text-white border-indigo-400 font-bold';
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
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm flex flex-col gap-2 transition-all ${btnStyle}`}
                        >
                          <div className="flex items-start gap-2.5 w-full">
                            <span className="w-5 h-5 rounded-lg bg-slate-700/60 flex items-center justify-center font-black text-xs shrink-0">
                              {opt.letter}
                            </span>
                            <ChemistryText html={opt.text} className="flex-1" />
                          </div>
                          {opt.image && (
                            <div 
                              onClick={(e) => { e.stopPropagation(); setPreviewImage(opt.image); }}
                              className="ml-7 bg-white rounded-lg p-1.5 border border-slate-600 inline-block cursor-zoom-in hover:border-cyan-400 max-w-xs"
                            >
                              <img src={opt.image} alt={opt.letter} className="max-h-24 object-contain rounded" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isTopicSubmitted && (q.explanation || q.solution) && (
                    <div className="mt-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                      <span className="font-bold text-cyan-300 mr-1.5">💡 Lời giải:</span>
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
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-black px-8 py-3 rounded-2xl shadow-lg shadow-indigo-500/25 text-sm"
              >
                Nộp Bài Rèn Luyện
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3 TABS CHỌN ĐỀ / CHUYÊN ĐỀ / SỔ TAY */}
      {!currentExam && !activeTopic && (
        <div className="relative z-10 mt-6">
          <div className="flex items-center gap-2 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-800 mb-6 max-w-xl">
            <button
              onClick={() => { setActiveTab('exams'); sfx.click(); }}
              className={`flex-1 py-2.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
                activeTab === 'exams'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4" /> 7 ĐỀ KIỂM TRA (50P)
            </button>
            <button
              onClick={() => { setActiveTab('topics'); sfx.click(); }}
              className={`flex-1 py-2.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
                activeTab === 'topics'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" /> 5 CHUYÊN ĐỀ VƯỢT ẢI
            </button>
            <button
              onClick={() => { setActiveTab('handbook'); sfx.click(); }}
              className={`flex-1 py-2.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
                activeTab === 'handbook'
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" /> SỔ TAY LÝ THUYẾT
            </button>
          </div>

          {/* TAB 1: 7 ĐỀ KIỂM TRA */}
          {activeTab === 'exams' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {HOA12_CHUONG1_7_EXAMS.map((exam) => {
                const prevResult = progress.examScores[exam.id];
                const hasScore = prevResult && prevResult.score !== undefined;

                return (
                  <div
                    key={exam.id}
                    className="bg-slate-800/80 hover:bg-slate-800 rounded-3xl p-6 border border-slate-700/80 hover:border-blue-500/50 transition-all flex flex-col justify-between group shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-black text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                          MÃ ĐỀ: {exam.code}
                        </span>
                        {hasScore ? (
                          <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Điểm cao nhất: {prevResult.score}/10
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-slate-400 bg-slate-700/50 px-2.5 py-0.5 rounded-full">
                            Chưa làm bài
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-black text-white group-hover:text-blue-300 transition-colors">
                        {exam.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 flex items-center gap-4">
                        <span>⏱️ 50 Phút</span>
                        <span>📝 28 Câu (18 P1 + 4 P2 + 6 P3)</span>
                        <span>🎯 Thang điểm 10</span>
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {hasScore ? `Đã làm ${prevResult.attempts} lần` : 'Chuẩn cấu trúc Bộ 2025'}
                      </span>
                      <button
                        onClick={() => startExam(exam)}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black px-5 py-2 rounded-xl text-xs shadow-md shadow-blue-600/30 transition-all flex items-center gap-1.5"
                      >
                        <Play className="w-4 h-4" /> {hasScore ? 'Làm Lại Đề' : 'Vào Thi Ngay'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: 5 CHUYÊN ĐỀ RÈN LUYỆN */}
          {activeTab === 'topics' && (
            <div className="space-y-6">
              {HOA12_CHUONG1_TOPICS.map((topic) => {
                const highestUnlocked = progress.unlockedLevels[topic.id] || 1;

                return (
                  <div key={topic.id} className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl shrink-0">
                        {topic.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-black text-white">{topic.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{topic.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                          {topic.levels.map((lvl) => {
                            const isUnlocked = lvl.level <= highestUnlocked;

                            return (
                              <div
                                key={lvl.level}
                                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                                  isUnlocked 
                                    ? 'bg-slate-900 border-slate-700 hover:border-indigo-500' 
                                    : 'bg-slate-950/60 border-slate-800/80 opacity-60'
                                }`}
                              >
                                <div>
                                  <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="font-bold text-slate-400">Cấp độ {lvl.level}</span>
                                    {isUnlocked ? (
                                      <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                                        <Unlock className="w-3 h-3" /> Đã mở
                                      </span>
                                    ) : (
                                      <span className="text-rose-400 font-bold flex items-center gap-1 text-[11px]">
                                        <Lock className="w-3 h-3" /> Khóa
                                      </span>
                                    )}
                                  </div>
                                  <div className="font-black text-sm text-white">{lvl.title}</div>
                                  <div className="text-[11px] text-cyan-400 font-bold mt-1">Mục tiêu: {lvl.target}</div>
                                </div>

                                <button
                                  onClick={() => startTopicLevel(topic, lvl)}
                                  disabled={!isUnlocked}
                                  className={`mt-4 w-full py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                                    isUnlocked 
                                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30' 
                                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
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

          {/* TAB 3: SỔ TAY KIẾN THỨC */}
          {activeTab === 'handbook' && (
            <div className="space-y-6">
              {HOA12_CHUONG1_HANDBOOK.sections.map((sec, sIdx) => (
                <div key={sIdx} className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80">
                  <h4 className="text-base font-black text-cyan-300 flex items-center gap-2 mb-3">
                    <span>{sec.icon}</span> {sec.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {sec.content.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
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

      {/* MODAL PHÓNG TO HÌNH ẢNH GỐC */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-3xl p-4 sm:p-5 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
              <div className="flex items-center gap-2 text-cyan-300 text-xs sm:text-sm font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Hình ảnh trích xuất từ đề kiểm tra gốc</span>
              </div>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-rose-600 transition-colors flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="bg-white rounded-2xl p-2 sm:p-4 max-h-[75vh] max-w-full overflow-auto flex items-center justify-center shadow-inner">
              <img
                src={previewImage}
                alt="Xem phóng to đề gốc"
                className="max-w-full max-h-[70vh] object-contain rounded"
              />
            </div>

            <div className="mt-3 text-[11px] text-slate-400">
              Nhấn phím ESC hoặc nhấn ra ngoài màn hình để đóng
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
