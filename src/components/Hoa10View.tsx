// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Target, Trophy, Flame, Sparkles, CheckCircle2, XCircle, Lock, Unlock,
  Clock, BookOpen, ChevronRight, Award, Zap, Play, RotateCcw,
  Check, ArrowRight, ShieldCheck, HelpCircle, Eye, AlertCircle,
  TrendingUp, Star, Filter, Share2, Volume2, VolumeX, Shuffle,
  Layers, Compass, Atom, Beaker, Maximize2, Minimize2, ChevronDown,
  Calculator, CheckSquare, Edit3, ArrowLeft, Tag, BarChart3,
  CheckCheck, ListFilter, SlidersHorizontal, Sun, Moon, Type,
  ArrowUpRight, Coffee
} from 'lucide-react';
import toast from 'react-hot-toast';
import { MotivationModal } from './MotivationModal';
import {
  HOA10_LESSONS,
  HOA10_EXAMS,
  HOA10_HANDBOOK,
  calculateHoa10ExamScore,
  getHoa10UserProgress,
  saveHoa10ExamAttempt,
  getHoa10ExamHistory,
  shuffleHoa10Exam,
  getHoa10RankTitle,
  Hoa10Exam,
  Hoa10Question,
  Hoa10Lesson,
  Hoa10ExamAttempt
} from '../services/hoa10Service';

interface Hoa10ViewProps {
  studentName?: string;
  studentGrade?: string;
  onClose?: () => void;
  isTeacher?: boolean;
  initialChapter?: number;
}

class ChemistrySoundFX {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private init() {
    try {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    } catch (e) {}
  }

  setMuted(m: boolean) { this.isMuted = m; }
  getMuted() { return this.isMuted; }

  playCorrect() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(659.25, this.ctx.currentTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(783.99, this.ctx.currentTime + 0.16);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {}
  }

  playWrong() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.setValueAtTime(196, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }
}

const sfx = new ChemistrySoundFX();

export const Hoa10View: React.FC<Hoa10ViewProps> = ({
  studentName = 'Học sinh',
  studentGrade = 'Khối 10',
  onClose,
  isTeacher = false,
  initialChapter = 1
}) => {
  const [activeChapter, setActiveChapter] = useState<number>(initialChapter);
  const [activeTab, setActiveTab] = useState<'practice' | 'exams' | 'theory' | 'handbook'>('exams');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('');
  const c1ExamsCount = useMemo(() => HOA10_EXAMS.filter(e => e.chapter === 1).length, []);
  const c2ExamsCount = useMemo(() => HOA10_EXAMS.filter(e => e.chapter === 2).length, []);

  const currentLessons = useMemo(() => {
    return HOA10_LESSONS.filter(l => l.chapter === activeChapter);
  }, [activeChapter]);

  const currentExams = useMemo(() => {
    return HOA10_EXAMS.filter(e => e.chapter === activeChapter);
  }, [activeChapter]);

  useEffect(() => {
    if (currentLessons.length > 0 && !currentLessons.some(l => l.id === selectedLessonId)) {
      setSelectedLessonId(currentLessons[0].id);
    }
  }, [activeChapter, currentLessons]);

  const activeLesson = useMemo(() => {
    return currentLessons.find(l => l.id === selectedLessonId) || currentLessons[0] || null;
  }, [currentLessons, selectedLessonId]);

  const [activeExam, setActiveExam] = useState<Hoa10Exam | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string | number, any>>({});
  const [timeLeft, setTimeLeft] = useState<number>(50 * 60);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [examResult, setExamResult] = useState<any>(null);
  const [motivationModalOpen, setMotivationModalOpen] = useState(false);
  const [progress, setProgress] = useState(getHoa10UserProgress());
  const [activePartFilter, setActivePartFilter] = useState<number>(1);

  useEffect(() => {
    if (!activeExam || isExamSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeExam, isExamSubmitted]);

  const handleStartExam = (exam: Hoa10Exam) => {
    const shuffled = shuffleHoa10Exam(exam);
    setActiveExam(shuffled);
    setUserAnswers({});
    setTimeLeft(exam.duration * 60);
    setIsExamSubmitted(false);
    setExamResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishExam = () => {
    if (!activeExam) return;
    const res = calculateHoa10ExamScore(activeExam, userAnswers);
    setExamResult(res);
    setIsExamSubmitted(true);
    saveHoa10ExamAttempt({
      examId: activeExam.id,
      score: res.score,
      totalQuestions: activeExam.questions.length,
      correctCount: res.correctCount,
      durationSeconds: activeExam.duration * 60 - timeLeft,
      userAnswers,
      submittedAt: new Date().toISOString()
    });
    setProgress(getHoa10UserProgress());
    if (res.score >= 5) sfx.playCorrect();
    else sfx.playWrong();
    setMotivationModalOpen(true);
  };

  const formatTimer = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* Header Bar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Quay lại"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <h1 className="font-extrabold text-base sm:text-lg text-white tracking-wide">
                  Hóa Học 10 – Chuẩn Đề Thi Bộ GD&ĐT
                </h1>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Học viên: <span className="text-amber-400 font-bold">{studentName}</span> • Lớp: <span className="text-indigo-400 font-bold">{studentGrade}</span>
              </p>
            </div>
          </div>

          {/* Chapter Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800">
            <button
              type="button"
              onClick={() => { setActiveChapter(1); setActiveExam(null); }}
              className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all flex items-center gap-1.5 ${
                activeChapter === 1
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>🧪</span>
              <span>Chương 1: Nguyên Tử ({c1ExamsCount} Đề)</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveChapter(2); setActiveExam(null); }}
              className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all flex items-center gap-1.5 ${
                activeChapter === 2
                  ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>⚡</span>
              <span>Chương 2: Bảng Tuần Hoàn ({c2ExamsCount} Đề)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chương trình giáo dục phổ thông mới – Bứt phá 9+</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {activeChapter === 1 ? 'Chương 1: Cấu Tạo Nguyên Tử' : 'Chương 2: Bảng Tuần Hoàn Các Nguyên Tố Hóa Học'}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Trọn bộ lý thuyết cô đọng, bài tập tự luyện 3 phần và phòng thi bấm giờ mô phỏng đề thi chính thức chuẩn cấu trúc ma trận của Bộ GD&ĐT.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center text-xl font-black">
              🏆
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Thành tích tích lũy</div>
              <div className="font-extrabold text-amber-400 text-sm">
                {getHoa10RankTitle(progress.totalXp)}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                ⚡ <span className="font-bold text-white">{progress.totalXp} XP</span> • {Object.keys(progress.examAttempts).length} lượt thi
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-2 border-b border-slate-800 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('exams')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'exams'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Phòng Thi Chuẩn Bộ ({currentExams.length} Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('practice')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'practice'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Luyện Tập Theo Bài ({currentLessons.length} Bài)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('theory')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'theory'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Atom className="w-4 h-4" />
            <span>Lý Thuyết Trọng Tâm</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('handbook')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'handbook'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Sổ Tay Ghi Nhớ Nhanh</span>
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        {activeTab === 'exams' && !activeExam && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-white">Danh Sách Đề Kiểm Tra Chuẩn Ma Trận</h3>
                <p className="text-xs text-slate-400 mt-0.5">Thi trực tuyến 50 phút • Chấm điểm tự động • Lời giải chi tiết</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentExams.map((exam) => {
                const attempt = progress.examAttempts[exam.id];
                return (
                  <div
                    key={exam.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-all flex flex-col justify-between gap-4 shadow-xl relative overflow-hidden group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-400 font-black text-xs rounded-lg border border-indigo-400/30 font-mono">
                          {exam.code}
                        </span>
                        <span className="text-xs font-bold text-slate-400">{exam.badge}</span>
                      </div>
                      {attempt?.passed && (
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-black rounded-full border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Đã hoàn thành ({attempt.bestScore}đ)
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {exam.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {exam.topic}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-400" /> {exam.duration} phút
                        </span>
                        <span className="flex items-center gap-1">
                          <HelpCircle className="w-3.5 h-3.5 text-indigo-400" /> {exam.totalQuestions} câu hỏi
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleStartExam(exam)}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{attempt ? 'Thi lại ngay' : 'Bắt đầu làm bài'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Active Exam Taking Room */}
        {activeExam && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 sticky top-18 z-20 shadow-xl">
              <div>
                <span className="text-[11px] font-bold text-indigo-400 uppercase font-mono">{activeExam.code}</span>
                <h3 className="text-base font-black text-white">{activeExam.title}</h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 font-mono text-sm font-bold text-amber-400">
                  <Clock className="w-4 h-4 animate-spin text-amber-400" />
                  <span>{formatTimer(timeLeft)}</span>
                </div>

                {!isExamSubmitted ? (
                  <button
                    type="button"
                    onClick={handleFinishExam}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow-md cursor-pointer transition-all active:scale-95 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Nộp bài & Chấm điểm</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveExam(null)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Thoát phòng thi
                  </button>
                )}
              </div>
            </div>

            {isExamSubmitted && examResult && (
              <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border-2 border-indigo-500/50 p-6 rounded-3xl text-center space-y-3 shadow-2xl">
                <div className="text-4xl font-black text-amber-400 font-mono">
                  {examResult.score} <span className="text-xl text-slate-300">/ 10 điểm</span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">
                  Đúng <span className="text-emerald-400 font-bold">{examResult.correctCount}</span> / {activeExam.questions.length} câu hỏi
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleStartExam(activeExam)}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow-md cursor-pointer"
                  >
                    🔄 Làm lại đề này
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveExam(null)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Quay lại danh sách đề
                  </button>
                </div>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-4">
              {activeExam.questions.map((q, idx) => {
                const userAns = userAnswers[q.id] ?? userAnswers[q.number];
                return (
                  <div
                    key={q.id || idx}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-black text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-indigo-400 uppercase">
                          {q.part === 1 ? 'Phần I: Trắc nghiệm' : q.part === 2 ? 'Phần II: Đúng/Sai' : 'Phần III: Trả lời ngắn'}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-bold font-mono">{q.points} điểm</span>
                    </div>

                    <div
                      className="text-sm font-medium text-slate-200 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: q.text }}
                    />

                    {/* Part 1: Multiple choice */}
                    {q.part === 1 && q.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {q.options.map((opt) => {
                          const isSelected = String(userAns || '').toUpperCase() === opt.letter.toUpperCase();
                          const isCorrect = opt.isCorrect || String(q.correctAnswer || '').toUpperCase() === opt.letter.toUpperCase();
                          let optStyle = 'border-slate-800 bg-slate-950/70 hover:border-slate-700 text-slate-300';
                          if (isExamSubmitted) {
                            if (isCorrect) optStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-300 font-bold';
                            else if (isSelected && !isCorrect) optStyle = 'border-red-500 bg-red-950/40 text-red-300';
                          } else if (isSelected) {
                            optStyle = 'border-indigo-500 bg-indigo-950/50 text-white font-bold ring-2 ring-indigo-500/30';
                          }

                          return (
                            <button
                              key={opt.id || opt.letter}
                              type="button"
                              disabled={isExamSubmitted}
                              onClick={() => {
                                setUserAnswers(prev => ({ ...prev, [q.id || q.number]: opt.letter }));
                              }}
                              className={`p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 cursor-pointer disabled:cursor-default ${optStyle}`}
                            >
                              <span className="w-5 h-5 rounded-md bg-slate-800 font-mono font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                                {opt.letter}
                              </span>
                              <span dangerouslySetInnerHTML={{ __html: opt.text }} />
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Part 2: True/False */}
                    {q.part === 2 && q.options && (
                      <div className="space-y-2 pt-2">
                        {q.options.map((opt) => {
                          const val = userAns?.[opt.letter];
                          return (
                            <div
                              key={opt.id || opt.letter}
                              className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl flex items-center justify-between gap-3 text-xs"
                            >
                              <div className="flex items-start gap-2">
                                <span className="font-bold font-mono text-indigo-400 mt-0.5">{opt.letter})</span>
                                <span dangerouslySetInnerHTML={{ __html: opt.text }} />
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                  type="button"
                                  disabled={isExamSubmitted}
                                  onClick={() => {
                                    setUserAnswers(prev => ({
                                      ...prev,
                                      [q.id || q.number]: { ...(prev[q.id || q.number] || {}), [opt.letter]: true }
                                    }));
                                  }}
                                  className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                                    val === true ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                                  }`}
                                >
                                  Đúng
                                </button>
                                <button
                                  type="button"
                                  disabled={isExamSubmitted}
                                  onClick={() => {
                                    setUserAnswers(prev => ({
                                      ...prev,
                                      [q.id || q.number]: { ...(prev[q.id || q.number] || {}), [opt.letter]: false }
                                    }));
                                  }}
                                  className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                                    val === false ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                                  }`}
                                >
                                  Sai
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Part 3: Short answer */}
                    {q.part === 3 && (
                      <div className="pt-2">
                        <label className="text-[11px] font-bold text-slate-400 block mb-1">Nhập kết quả hoặc đáp án:</label>
                        <input
                          type="text"
                          disabled={isExamSubmitted}
                          value={userAns || ''}
                          onChange={e => {
                            setUserAnswers(prev => ({ ...prev, [q.id || q.number]: e.target.value }));
                          }}
                          placeholder="Nhập giá trị số hoặc từ khóa..."
                          className="w-full sm:w-64 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm font-bold text-white focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                    )}

                    {/* Explanation */}
                    {isExamSubmitted && (q.explanation || q.correctAnswer) && (
                      <div className="mt-3 p-3.5 bg-slate-950 border border-indigo-500/30 rounded-xl text-xs space-y-1">
                        <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5" />
                          <span>Đáp án chuẩn: {q.correctAnswer || 'Xem chi tiết bên dưới'}</span>
                        </div>
                        {q.explanation && (
                          <div
                            className="text-slate-300 leading-relaxed pt-1"
                            dangerouslySetInnerHTML={{ __html: q.explanation }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. TAB LUYỆN TẬP THEO BÀI */}
        {activeTab === 'practice' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Danh Sách Bài Học</h4>
              {currentLessons.map(l => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setSelectedLessonId(l.id)}
                  className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between gap-2 border ${
                    selectedLessonId === l.id
                      ? 'bg-indigo-600/20 border-indigo-500 text-white font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-800 text-[10px] font-mono font-bold flex items-center justify-center text-indigo-400">
                      {l.number}
                    </span>
                    <span className="text-xs line-clamp-1">{l.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 shrink-0 text-slate-500" />
                </button>
              ))}
            </div>

            <div className="lg:col-span-3 space-y-4">
              {activeLesson && (
                <>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <span className="text-xs font-mono font-black text-indigo-400">Hóa Học 10 – Bài {activeLesson.number}</span>
                    <h3 className="text-lg font-black text-white mt-0.5">{activeLesson.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{activeLesson.description}</p>

                    <div className="flex gap-2 mt-4">
                      <button
                        type="button"
                        onClick={() => setActivePartFilter(1)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          activePartFilter === 1 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Phần I: Trắc nghiệm ({activeLesson.practiceQuestions.part1.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePartFilter(2)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          activePartFilter === 2 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Phần II: Đúng/Sai ({activeLesson.practiceQuestions.part2.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePartFilter(3)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          activePartFilter === 3 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Phần III: Tự luận ngắn ({activeLesson.practiceQuestions.part3.length})
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {(activePartFilter === 1
                      ? activeLesson.practiceQuestions.part1
                      : activePartFilter === 2
                      ? activeLesson.practiceQuestions.part2
                      : activeLesson.practiceQuestions.part3
                    ).map((q, idx) => (
                      <div key={q.id || idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-amber-400">Câu {idx + 1}</span>
                          {q.correctAnswer && (
                            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                              Đáp án: {q.correctAnswer}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: q.text }} />

                        {q.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {q.options.map(opt => (
                              <div
                                key={opt.id || opt.letter}
                                className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                                  opt.isCorrect
                                    ? 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300 font-bold'
                                    : 'border-slate-800 bg-slate-950/50 text-slate-300'
                                }`}
                              >
                                <span className="font-mono font-bold text-[10px] w-4">{opt.letter}.</span>
                                <span dangerouslySetInnerHTML={{ __html: opt.text }} />
                              </div>
                            ))}
                          </div>
                        )}

                        {q.explanation && (
                          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
                            <span className="font-bold text-slate-300 block mb-0.5">Lời giải chi tiết:</span>
                            <div dangerouslySetInnerHTML={{ __html: q.explanation }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* 3. TAB LÝ THUYẾT TRỌNG TÂM */}
        {activeTab === 'theory' && activeLesson && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono font-black text-indigo-400">Hóa Học 10 – Bài {activeLesson.number}</span>
              <h3 className="text-xl font-black text-white mt-1">{activeLesson.title}</h3>
            </div>
            <div
              className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3"
              dangerouslySetInnerHTML={{ __html: activeLesson.theory }}
            />
          </div>
        )}

        {/* 4. TAB SỔ TAY GHI NHỚ NHANH */}
        {activeTab === 'handbook' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HOA10_HANDBOOK.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="text-sm font-black text-white">{item.title}</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {item.content.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                      <span dangerouslySetInnerHTML={{ __html: c }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </main>

      <MotivationModal
        isOpen={motivationModalOpen}
        onClose={() => setMotivationModalOpen(false)}
        score={examResult?.score || 0}
        duration={timeLeft}
        examTitle={activeExam?.title || ''}
      />
    </div>
  );
};

export default Hoa10View;
