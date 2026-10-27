// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Trophy, Flame, Sparkles, CheckCircle2, XCircle, Lock, Unlock,
  Clock, BookOpen, ChevronRight, Award, Zap, Play, RotateCcw,
  Check, ArrowRight, ShieldCheck, HelpCircle, Eye, AlertCircle,
  TrendingUp, Star, Filter, Share2, Volume2, VolumeX, Shuffle
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
    setTimeLeft(exam.timeLimit * 60);
    setIsExamSubmitted(false);
    setExamResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    sfx.click();
    toast.success(`Đã vào phòng thi: ${exam.title}`, { icon: '⏱️' });
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
                        <span className="w-7 h-7 rounded-xl bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                          {q.number}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm sm:text-base font-semibold text-white whitespace-pre-line leading-relaxed">
                            {q.text}
                          </p>

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
                                  className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-2.5 ${optStyle}`}
                                >
                                  <span className={`w-5 h-5 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                                    isSelected && !isExamSubmitted ? 'bg-white text-blue-700' : 'bg-slate-700/60 text-slate-200'
                                  }`}>
                                    {opt.letter}
                                  </span>
                                  <span className="leading-snug">{opt.text}</span>
                                </button>
                              );
                            })}
                          </div>
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
                        <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                          {q.displayNumber || (q.number - 18)}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm sm:text-base font-semibold text-white whitespace-pre-line leading-relaxed">
                            {q.text}
                          </p>

                          <div className="mt-4 space-y-3">
                            {q.options?.map(opt => {
                              const choice = currentSubAns[opt.letter];
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
                                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                                    <span className="font-black text-indigo-400">{opt.letter})</span>
                                    <span>{opt.text}</span>
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

                          {isExamSubmitted && q.solution && (
                            <div className="mt-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 whitespace-pre-line">
                              <span className="font-bold text-cyan-300">💡 Hướng dẫn giải chi tiết:</span>
                              <div className="mt-1">{q.solution}</div>
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
                        <span className="w-7 h-7 rounded-xl bg-amber-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                          {q.displayNumber || (q.number - 22)}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm sm:text-base font-semibold text-white whitespace-pre-line leading-relaxed">
                            {q.text}
                          </p>

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

                          {isExamSubmitted && q.solution && (
                            <div className="mt-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 whitespace-pre-line">
                              <span className="font-bold text-cyan-300">💡 Hướng dẫn giải chi tiết:</span>
                              <div className="mt-1">{q.solution}</div>
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

          {!isExamSubmitted && (
            <div className="mt-10 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Hãy kiểm tra kỹ cả 3 phần trước khi bấm Nộp bài.
              </span>
              <button
                onClick={submitExam}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black px-8 py-3 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all text-sm flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" /> Nộp Bài Chấm Điểm
              </button>
            </div>
          )}
        </div>
      )}

      {/* CHUYÊN ĐỀ THEO CẤP ĐỘ */}
      {activeTopic && activeLevel && (
        <div className="relative z-10 mt-6 bg-slate-950/80 rounded-3xl p-5 sm:p-8 border border-indigo-500/30 shadow-2xl animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                {activeTopic.title} · {activeLevel.title}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-2">
                Bộ câu hỏi rèn luyện ({activeLevel.questions.length} câu)
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => { setActiveTopic(null); setActiveLevel(null); }}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-4 py-2 rounded-xl border border-slate-700 text-xs flex items-center gap-1"
              >
                <ArrowRight className="w-4 h-4" /> Quay Về Chuyên Đề
              </button>
            </div>
          </div>

          {isTopicSubmitted && (
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-blue-950/40 border border-indigo-500/40">
              <div className="flex items-center justify-between">
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

              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    isTopicSubmitted 
                      ? (isUserCorrect ? 'bg-emerald-950/20 border-emerald-500/40' : 'bg-rose-950/20 border-rose-500/40')
                      : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <p className="text-sm sm:text-base font-semibold text-white">
                    <span className="text-indigo-400 font-black mr-2">Câu {idx + 1}.</span>
                    {q.text}
                  </p>

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
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-2.5 transition-all ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-lg bg-slate-700/60 flex items-center justify-center font-black text-xs shrink-0">
                            {opt.letter}
                          </span>
                          <span>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {isTopicSubmitted && q.explanation && (
                    <div className="mt-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 whitespace-pre-line">
                      <span className="font-bold text-cyan-300">💡 Lời giải:</span> {q.explanation}
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

          {/* TAB 1 */}
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

          {/* TAB 2 */}
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

          {/* TAB 3 */}
          {activeTab === 'handbook' && (
            <div className="space-y-6">
              {HOA12_CHUONG1_HANDBOOK.sections.map((sec, sIdx) => (
                <div key={sIdx} className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80">
                  <h4 className="text-base font-black text-cyan-300 flex items-center gap-2 mb-3">
                    <span>{sec.icon}</span> {sec.title}
                  </h4>
                  <ul className="space-y-2">
                    {sec.content.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
