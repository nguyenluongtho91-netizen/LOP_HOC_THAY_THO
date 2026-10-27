// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Trophy, Flame, Sparkles, CheckCircle2, XCircle, Lock, Unlock,
  Clock, BookOpen, ChevronRight, Award, Zap, Play, RotateCcw,
  Check, ArrowRight, ShieldCheck, HelpCircle, Eye, AlertCircle,
  TrendingUp, Star, Filter, Share2, Volume2, VolumeX, Shuffle,
  Layers, Compass, Atom, Beaker, Maximize2, Minimize2, ChevronDown,
  Calculator, CheckSquare, Edit3, ArrowLeft, Tag, BarChart3,
  CheckCheck, ListFilter, SlidersHorizontal
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

// Bộ tạo âm thanh Web Audio API
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

  playCorrect() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  playWrong() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(190, now + 0.25);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {}
  }

  playComplete() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const now = this.ctx!.currentTime + idx * 0.12;
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      });
    } catch (e) {}
  }
}

const sfx = new ChemistrySoundFX();

export const Hoa12Chuong1View: React.FC<Hoa12Chuong1ViewProps> = ({
  studentName = 'Học sinh',
  studentGrade = 'Lớp 12',
  onClose
}) => {
  // Navigation
  const [activeTab, setActiveTab] = useState<'overview' | 'handbook' | 'practice' | 'exam' | 'results'>('overview');
  const [selectedLessonId, setSelectedLessonId] = useState<'bai1' | 'bai2' | 'bai3'>('bai1');
  const [practicePart, setPracticePart] = useState<1 | 2 | 3>(1);

  // Sub-topic & Level filtering
  const [selectedSubTopic, setSelectedSubTopic] = useState<'all' | 'ester' | 'lipid' | 'soap'>('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'NB' | 'TH' | 'VD' | 'VDC'>('all');

  // Exam
  const [selectedExamId, setSelectedExamId] = useState<string>('de1');
  const [examTimeLeft, setExamTimeLeft] = useState<number>(50 * 60);
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [examAnswers, setExamAnswers] = useState<Record<string, any>>({});
  const [lastExamResult, setLastExamResult] = useState<any>(null);

  // Practice state
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, any>>({});
  const [practiceRevealed, setPracticeRevealed] = useState<Record<string, boolean>>({});

  // User Stats & Audio
  const [progress, setProgress] = useState<any>(() => getChuong1UserProgress());
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [fullscreenMode, setFullscreenMode] = useState<boolean>(true);

  // Active Lesson
  const activeLesson: Chuong1Lesson = useMemo(() => {
    return HOA12_CHUONG1_LESSONS.find(l => l.id === selectedLessonId) || HOA12_CHUONG1_LESSONS[0];
  }, [selectedLessonId]);

  // Active Exam
  const activeExam: Chuong1Exam = useMemo(() => {
    return HOA12_CHUONG1_7_EXAMS.find(e => e.id === selectedExamId) || HOA12_CHUONG1_7_EXAMS[0];
  }, [selectedExamId]);

  // Timer for Exam
  useEffect(() => {
    let timer: any = null;
    if (isExamActive && examTimeLeft > 0) {
      timer = setInterval(() => {
        setExamTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAutoSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isExamActive, examTimeLeft]);

  const handleAutoSubmitExam = () => {
    toast('Đã hết 50 phút! Hệ thống đang chấm bài...', { icon: '⏰' });
    handleSubmitExam();
  };

  const handleStartExam = (examId: string) => {
    setSelectedExamId(examId);
    setExamAnswers({});
    setExamTimeLeft(50 * 60);
    setIsExamActive(true);
    setActiveTab('exam');
    toast.success('Bắt đầu làm đề kiểm tra 50 phút. Chúc em làm bài thật tốt!');
  };

  const handleSubmitExam = () => {
    setIsExamActive(false);
    const scoreResult = calculateChuong1ExamScore(activeExam, examAnswers);
    const record = saveChuong1ExamResult(activeExam.id, scoreResult.totalScore, activeExam.duration * 60 - examTimeLeft);
    setLastExamResult({
      exam: activeExam,
      score: scoreResult,
      answers: { ...examAnswers },
      completedAt: new Date().toLocaleTimeString('vi-VN')
    });
    setProgress(getChuong1UserProgress());
    sfx.playComplete();
    setActiveTab('results');
    toast.success(`Nộp bài thành công! Điểm số: ${scoreResult.totalScore}/10 điểm`);
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Practice Questions with Sub-topic & Level filtering
  const allPracticeQuestions: Chuong1Question[] = useMemo(() => {
    if (!activeLesson.practiceBank) return [];
    if (practicePart === 1) return activeLesson.practiceBank.part1 || [];
    if (practicePart === 2) return activeLesson.practiceBank.part2 || [];
    return activeLesson.practiceBank.part3 || [];
  }, [activeLesson, practicePart]);

  // Filtered practice questions
  const filteredPracticeQuestions = useMemo(() => {
    return allPracticeQuestions.filter(q => {
      // Sub-topic filter
      if (selectedSubTopic !== 'all' && q.topic && q.topic !== selectedSubTopic) {
        return false;
      }
      // Level filter
      if (selectedLevel !== 'all' && q.level && q.level !== selectedLevel) {
        return false;
      }
      return true;
    });
  }, [allPracticeQuestions, selectedSubTopic, selectedLevel]);

  // Level statistics for the current part
  const levelStats = useMemo(() => {
    const stats = { all: allPracticeQuestions.length, NB: 0, TH: 0, VD: 0, VDC: 0 };
    allPracticeQuestions.forEach(q => {
      const lvl = q.level || 'TH';
      if (lvl in stats) (stats as any)[lvl]++;
    });
    return stats;
  }, [allPracticeQuestions]);

  // Answer handler for practice
  const handleAnswerPractice = (qId: string, answer: any) => {
    setPracticeAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const handleToggleReveal = (qId: string) => {
    setPracticeRevealed(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Level Badge Helper
  const renderLevelBadge = (level?: string, levelName?: string) => {
    const lvl = level || 'TH';
    const name = levelName || (lvl === 'NB' ? 'Nhận biết' : lvl === 'TH' ? 'Thông hiểu' : lvl === 'VD' ? 'Vận dụng' : 'Vận dụng cao');
    if (lvl === 'NB') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          {name}
        </span>
      );
    }
    if (lvl === 'TH') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-300">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
          {name}
        </span>
      );
    }
    if (lvl === 'VD') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          {name}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
        {name}
      </span>
    );
  };

  // Render edge-to-edge UI
  const content = (
    <div className="fixed inset-0 z-[999999] bg-slate-100 text-slate-900 flex flex-col font-sans overflow-hidden antialiased">
      {/* HEADER BAR - Premium Light Mode */}
      <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 text-sm font-medium mr-2"
              title="Quay lại khóa học"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Quay lại</span>
            </button>
          )}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md">
            <Atom className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                Hóa Học 12: Chương 1 – Ester, Lipid & Xà Phòng
              </h1>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200 uppercase tracking-wide">
                CT 2025 MỚI
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Chuẩn cấu trúc Bộ GD&ĐT 2025 • Đầy đủ lý thuyết, 4 dạng toán, 495 câu hỏi & 7 đề kiểm tra
            </p>
          </div>
        </div>

        {/* Global Controls & Tabs */}
        <div className="flex items-center gap-2">
          {/* Main Navigation Tabs */}
          <div className="hidden lg:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-sm font-semibold">
            <button
              onClick={() => { setActiveTab('overview'); setIsExamActive(false); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'overview' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tổng quan
            </button>
            <button
              onClick={() => { setActiveTab('handbook'); setIsExamActive(false); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'handbook' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Cẩm nang & Dạng toán
            </button>
            <button
              onClick={() => { setActiveTab('practice'); setIsExamActive(false); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'practice' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Luyện tập 3 Phần
            </button>
            <button
              onClick={() => { setActiveTab('exam'); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'exam' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              7 Đề thi chuẩn Bộ
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              const nm = !isMuted;
              setIsMuted(nm);
              sfx.setMuted(nm);
            }}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-indigo-600" />}
          </button>

          {/* Exit / Close */}
          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-sm font-semibold transition-colors"
            >
              Đóng
            </button>
          )}
        </div>
      </header>

      {/* MOBILE NAV BAR */}
      <div className="lg:hidden bg-white border-b border-slate-200 px-2 py-2 flex items-center justify-around text-xs font-semibold shrink-0">
        <button
          onClick={() => { setActiveTab('overview'); setIsExamActive(false); }}
          className={`px-2.5 py-1 rounded-md ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
        >
          Tổng quan
        </button>
        <button
          onClick={() => { setActiveTab('handbook'); setIsExamActive(false); }}
          className={`px-2.5 py-1 rounded-md ${activeTab === 'handbook' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
        >
          Lý thuyết & Dạng toán
        </button>
        <button
          onClick={() => { setActiveTab('practice'); setIsExamActive(false); }}
          className={`px-2.5 py-1 rounded-md ${activeTab === 'practice' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
        >
          Luyện tập
        </button>
        <button
          onClick={() => { setActiveTab('exam'); }}
          className={`px-2.5 py-1 rounded-md ${activeTab === 'exam' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
        >
          7 Đề thi
        </button>
      </div>

      {/* BODY CONTENT AREA */}
      <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
        <div className="max-w-[1400px] mx-auto">
          {/* ================= TAB 1: OVERVIEW ================= */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Hero Banner */}
              <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 rounded-3xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 transform skew-x-12 pointer-events-none"></div>
                <div className="relative z-10 max-w-3xl">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md uppercase tracking-wider mb-4 inline-block">
                    HỆ THỐNG HỌC TẬP TOÀN DIỆN CHƯƠNG 1
                  </span>
                  <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight">
                    Chương 1: Ester – Lipid. Xà Phòng & Chất Giặt Rửa
                  </h2>
                  <p className="text-indigo-100 text-sm md:text-base leading-relaxed mb-6">
                    Hệ thống hóa toàn bộ kiến thức theo chuẩn chương trình GDPT 2018 mới (áp dụng kỳ thi Tốt nghiệp THPT 2025). Khám phá lý thuyết bản chất, 4 chuyên đề dạng toán thực chiến, 495 câu hỏi rà soát kỹ lưỡng và 7 đề thi mẫu phân loại rõ mức độ từ Nhận biết đến Vận dụng cao.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => { setSelectedLessonId('bai1'); setActiveTab('practice'); }}
                      className="px-5 py-2.5 bg-white text-indigo-700 hover:bg-indigo-50 font-bold rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
                    >
                      <Play className="w-4 h-4 fill-indigo-700" />
                      Luyện tập Bài 1 ngay
                    </button>
                    <button
                      onClick={() => { handleStartExam('de1'); }}
                      className="px-5 py-2.5 bg-indigo-900/60 hover:bg-indigo-900/80 text-white font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
                    >
                      <Trophy className="w-4 h-4 text-amber-300" />
                      Thử sức Đề thi số 1
                    </button>
                    <button
                      onClick={() => setActiveTab('handbook')}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all flex items-center gap-2 text-sm"
                    >
                      <BookOpen className="w-4 h-4" />
                      Xem cẩm nang lý thuyết
                    </button>
                  </div>
                </div>
              </div>

              {/* 3 Main Lessons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {HOA12_CHUONG1_LESSONS.map((l) => (
                  <div
                    key={l.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                          {l.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {l.lessonNumber === 3 ? '7 Đề chuẩn Bộ' : 'Lý thuyết + Dạng toán + BT'}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {l.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {l.description}
                      </p>

                      {/* Content summary badges */}
                      <div className="space-y-2 mb-6">
                        {l.mathForms && l.mathForms.length > 0 && (
                          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                            <Calculator className="w-4 h-4 text-indigo-600 shrink-0" />
                            <span>{l.mathForms.length} dạng toán trọng tâm có bài giải</span>
                          </div>
                        )}
                        {l.practiceBank && (
                          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>
                              {(l.practiceBank.part1?.length || 0) + (l.practiceBank.part2?.length || 0) + (l.practiceBank.part3?.length || 0)} câu hỏi chia 4 mức độ (NB, TH, VD)
                            </span>
                          </div>
                        )}
                        {l.exams && (
                          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                            <Award className="w-4 h-4 text-amber-600 shrink-0" />
                            <span>7 đề kiểm tra định kỳ 50 phút ma trận 2025</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setSelectedLessonId(l.id);
                          if (l.id === 'bai3') setActiveTab('exam');
                          else setActiveTab('practice');
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all text-center"
                      >
                        {l.id === 'bai3' ? 'Vào phòng thi 7 Đề' : 'Vào luyện tập câu hỏi'}
                      </button>
                      <button
                        onClick={() => {
                          setSelectedLessonId(l.id);
                          setActiveTab('handbook');
                        }}
                        className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                        title="Xem lý thuyết"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB 2: HANDBOOK & MATH FORMS ================= */}
          {activeTab === 'handbook' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    Cẩm Nang Trọng Tâm & Dạng Toán Thực Chiến
                  </h2>
                  <p className="text-xs text-slate-500">
                    Chọn bài học để xem toàn bộ bản chất hóa học, phương pháp giải và các bài toán mẫu có lời giải chi tiết.
                  </p>
                </div>
                {/* Lesson Picker */}
                <div className="flex items-center gap-2">
                  {HOA12_CHUONG1_LESSONS.slice(0, 2).map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setSelectedLessonId(l.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedLessonId === l.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                      {l.badge}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theory Sections */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    Lý thuyết trọng tâm & Bản chất hóa học: {activeLesson.title}
                  </h3>
                  <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
                    {selectedLessonId === 'bai1' ? (
                      <>
                        <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                          <h4 className="font-bold text-indigo-900 mb-1">1. Bản chất phản ứng Ester hóa</h4>
                          <p>
                            Khi đun nóng carboxylic acid với alcohol có xúc tác H<sub>2</sub>SO<sub>4</sub> đặc, xảy ra phản ứng ester hóa tạo ester và nước.
                            Đây là phản ứng <b>thuận nghịch (2 chiều)</b>. H<sub>2</sub>SO<sub>4</sub> đặc đóng vai trò xúc tác và hút nước để cân bằng chuyển dịch theo chiều thuận.
                          </p>
                          <div className="bg-white p-3 rounded-lg border border-indigo-200 font-mono text-xs text-indigo-950 my-2">
                            RCOOH + R&apos;OH &hArr; [H<sub>2</sub>SO<sub>4</sub> đặc, t&deg;] RCOOR&apos; + H<sub>2</sub>O
                          </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                          <h4 className="font-bold text-slate-900 mb-1">2. Tính chất vật lý & So sánh nhiệt độ sôi</h4>
                          <p>
                            Do không có liên kết hydrogen liên phân tử như alcohol và carboxylic acid, nên các ester có nhiệt độ sôi <b>thấp hơn nhiều</b> so với alcohol và acid có cùng phân tử khối hoặc cùng số nguyên tử carbon.
                          </p>
                          <p className="font-medium text-slate-800 mt-2">
                            Thứ tự nhiệt độ sôi: <b>Ester &lt; Alcohol &lt; Carboxylic acid</b>
                          </p>
                        </div>

                        <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                          <h4 className="font-bold text-amber-900 mb-1">3. Lipid, Triglyceride & Acid béo Omega</h4>
                          <p>
                            Chất béo là triester của glycerol với các acid béo (gọi chung là triacylglycerol).
                            <br />• Acid béo no (palmitic acid C<sub>15</sub>H<sub>31</sub>COOH, stearic acid C<sub>17</sub>H<sub>35</sub>COOH) tạo chất béo rắn (mỡ động vật).
                            <br />• Acid béo không no (oleic acid C<sub>17</sub>H<sub>33</sub>COOH, linoleic acid C<sub>17</sub>H<sub>31</sub>COOH) tạo chất béo lỏng (dầu thực vật).
                            <br />• Acid béo <b>Omega-3</b> và <b>Omega-6</b> có nối đôi đầu tiên tính từ đầu methyl (&minus;CH<sub>3</sub>) lần lượt ở vị trí C số 3 và C số 6.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                          <h4 className="font-bold text-indigo-900 mb-1">1. Khái niệm Xà phòng & Chất giặt rửa tổng hợp</h4>
                          <p>
                            • <b>Xà phòng</b>: Là hỗn hợp muối sodium hoặc potassium của các acid béo (thường là C<sub>15</sub>H<sub>31</sub>COONa, C<sub>17</sub>H<sub>35</sub>COONa).
                            <br />• <b>Chất giặt rửa tổng hợp</b>: Thường là muối sodium alkylsulfate hoặc sodium alkylbenzenesulfonate (ví dụ: CH<sub>3</sub>[CH<sub>2</sub>]<sub>11</sub>&minus;C<sub>6</sub>H<sub>4</sub>&minus;SO<sub>3</sub>Na).
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                          <h4 className="font-bold text-slate-900 mb-1">2. Cơ chế tẩy rửa của phân tử lưỡng cực (Micelle)</h4>
                          <p>
                            Phân tử xà phòng và chất giặt rửa gồm 2 phần:
                            <br />• <b>Đầu ưa nước</b> (nhóm &minus;COO<sup>&minus;</sup>Na<sup>+</sup> hoặc &minus;SO<sub>3</sub><sup>&minus;</sup>Na<sup>+</sup>): Hướng ra ngoài dung dịch nước.
                            <br />• <b>Đuôi kị nước (ưa dầu)</b> (mạch hydrocarbon dài): Cắm sâu vào vết bẩn dầu mỡ.
                            <br />Khi vò giặt, các phân tử bao bọc hạt dầu mỡ tạo thành các hạt keo <b>micelle</b> phân tán vào nước và bị rửa trôi.
                          </p>
                        </div>

                        <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                          <h4 className="font-bold text-amber-900 mb-1">3. So sánh trong nước cứng</h4>
                          <p>
                            • Xà phòng tạo kết tủa với ion Ca<sup>2+</sup>, Mg<sup>2+</sup> trong nước cứng làm giảm tác dụng giặt rửa và bám hỏng sợi vải.
                            <br />• Chất giặt rửa tổng hợp không bị kết tủa trong nước cứng, dùng được cho mọi nguồn nước. Mạch hydrocarbon không phân nhánh thân thiện với môi trường hơn mạch phân nhánh.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Math Forms & Solved Examples */}
                {activeLesson.mathForms && activeLesson.mathForms.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-indigo-600" />
                      Các dạng toán trọng tâm có ví dụ & lời giải chi tiết
                    </h3>
                    <div className="space-y-6">
                      {activeLesson.mathForms.map((mf, idx) => (
                        <div key={mf.id} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                              D{idx + 1}
                            </span>
                            <h4 className="text-base font-bold text-slate-900">
                              {mf.title}
                            </h4>
                          </div>

                          {/* Method */}
                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 text-xs text-slate-700 leading-relaxed font-mono">
                            <div className="font-bold text-slate-900 mb-1">Phương pháp giải:</div>
                            <div dangerouslySetInnerHTML={{ __html: mf.method }} />
                          </div>

                          {/* Examples */}
                          <div className="space-y-4">
                            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Bài toán mẫu ({mf.examples.length} ví dụ thực chiến)
                            </h5>
                            {mf.examples.map((ex) => (
                              <div key={ex.number} className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
                                <div className="text-xs font-bold text-indigo-700">
                                  Ví dụ {ex.number}:
                                </div>
                                <div className="text-sm text-slate-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: ex.text }} />

                                {ex.images && ex.images.length > 0 && (
                                  <div className="flex flex-wrap gap-2 my-2">
                                    {ex.images.map((img, i) => (
                                      <img key={i} src={img} alt="Hình minh họa" className="max-h-48 rounded-lg border border-slate-200 shadow-sm" />
                                    ))}
                                  </div>
                                )}

                                {ex.solution && (
                                  <div className="bg-emerald-50/60 p-3.5 rounded-lg border border-emerald-200 text-xs text-slate-700 leading-relaxed space-y-1">
                                    <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                                      <Check className="w-4 h-4 text-emerald-600" />
                                      Lời giải chi tiết:
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: ex.solution }} />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= TAB 3: PRACTICE BANK (3 PARTS & LEVEL FILTER) ================= */}
          {activeTab === 'practice' && (
            <div className="space-y-6">
              {/* Filter Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {activeLesson.badge}
                      </span>
                      <h2 className="text-xl font-bold text-slate-900">
                        {activeLesson.title}
                      </h2>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Tổng số câu trong phần này: <b>{filteredPracticeQuestions.length}</b> / {allPracticeQuestions.length} câu hỏi
                    </p>
                  </div>

                  {/* Lesson Switcher */}
                  <div className="flex items-center gap-2">
                    {HOA12_CHUONG1_LESSONS.slice(0, 2).map((l) => (
                      <button
                        key={l.id}
                        onClick={() => {
                          setSelectedLessonId(l.id);
                          setSelectedSubTopic('all');
                          setSelectedLevel('all');
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedLessonId === l.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                      >
                        {l.badge}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sub-Topic Filtering (Phân chia chuyên đề nhỏ) */}
                {selectedLessonId === 'bai1' && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 mr-2">
                      <Tag className="w-3.5 h-3.5 text-indigo-600" />
                      Chuyên đề:
                    </span>
                    <button
                      onClick={() => setSelectedSubTopic('all')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${selectedSubTopic === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                      Tất cả chuyên đề
                    </button>
                    <button
                      onClick={() => setSelectedSubTopic('ester')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${selectedSubTopic === 'ester' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                      🔬 Chuyên đề 1: Ester
                    </button>
                    <button
                      onClick={() => setSelectedSubTopic('lipid')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${selectedSubTopic === 'lipid' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                      🥑 Chuyên đề 2: Lipid & Chất béo
                    </button>
                  </div>
                )}

                {/* 3 Formats (Part 1, Part 2, Part 3) */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 mr-1">Định dạng:</span>
                    <button
                      onClick={() => setPracticePart(1)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${practicePart === 1 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Phần I: 4 Lựa chọn ({activeLesson.practiceBank?.part1?.length || 0})
                    </button>
                    <button
                      onClick={() => setPracticePart(2)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${practicePart === 2 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                      <CheckSquare className="w-3.5 h-3.5" />
                      Phần II: Đúng / Sai ({activeLesson.practiceBank?.part2?.length || 0})
                    </button>
                    <button
                      onClick={() => setPracticePart(3)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${practicePart === 3 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      Phần III: Trả lời ngắn ({activeLesson.practiceBank?.part3?.length || 0})
                    </button>
                  </div>

                  {/* Level Filter (Mức độ nhận thức) */}
                  <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 px-2 flex items-center gap-1">
                      <ListFilter className="w-3.5 h-3.5 text-slate-400" />
                      Mức độ:
                    </span>
                    <button
                      onClick={() => setSelectedLevel('all')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${selectedLevel === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      Tất cả ({levelStats.all})
                    </button>
                    <button
                      onClick={() => setSelectedLevel('NB')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${selectedLevel === 'NB' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-50'}`}
                    >
                      🟢 Nhận biết ({levelStats.NB})
                    </button>
                    <button
                      onClick={() => setSelectedLevel('TH')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${selectedLevel === 'TH' ? 'bg-sky-600 text-white shadow-sm' : 'text-sky-700 hover:bg-sky-50'}`}
                    >
                      🔵 Thông hiểu ({levelStats.TH})
                    </button>
                    <button
                      onClick={() => setSelectedLevel('VD')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${selectedLevel === 'VD' ? 'bg-amber-600 text-white shadow-sm' : 'text-amber-700 hover:bg-amber-50'}`}
                    >
                      🟡 Vận dụng ({levelStats.VD})
                    </button>
                  </div>
                </div>
              </div>

              {/* Questions List */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Questions Column */}
                <div className="lg:col-span-3 space-y-6">
                  {filteredPracticeQuestions.length === 0 ? (
                    <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-500">
                      <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                      <p className="font-semibold text-sm">Không có câu hỏi nào khớp với bộ lọc chuyên đề và mức độ đã chọn.</p>
                      <button
                        onClick={() => { setSelectedSubTopic('all'); setSelectedLevel('all'); }}
                        className="mt-3 px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-lg hover:bg-indigo-100"
                      >
                        Xóa bộ lọc để xem tất cả
                      </button>
                    </div>
                  ) : (
                    filteredPracticeQuestions.map((q, idx) => {
                      const qId = q.id;
                      const userAnswer = practiceAnswers[qId];
                      const isRevealed = practiceRevealed[qId];

                      return (
                        <div
                          key={qId}
                          id={`question-${qId}`}
                          className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4 hover:border-slate-300 transition-colors"
                        >
                          {/* Card Header */}
                          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 font-extrabold flex items-center justify-center text-sm border border-indigo-100">
                                {idx + 1}
                              </span>
                              <span className="font-bold text-slate-900 text-sm">
                                Câu {q.number || idx + 1}
                              </span>
                              {q.topicTitle && (
                                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                                  {q.topicTitle}
                                </span>
                              )}
                              {renderLevelBadge(q.level, q.levelName)}
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-slate-500">
                                {q.part === 1 ? '0,25 điểm' : q.part === 2 ? '1,0 điểm' : '0,25 điểm'}
                              </span>
                              <button
                                onClick={() => handleToggleReveal(qId)}
                                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${isRevealed ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                              >
                                <Eye className="w-3.5 h-3.5" />
                                {isRevealed ? 'Ẩn giải thích' : 'Xem đáp án'}
                              </button>
                            </div>
                          </div>

                          {/* Question Stem Text */}
                          <div
                            className="text-base text-slate-900 leading-relaxed font-normal"
                            dangerouslySetInnerHTML={{ __html: q.text }}
                          />

                          {/* Images if any */}
                          {q.images && q.images.length > 0 && (
                            <div className="flex flex-wrap gap-3 my-3">
                              {q.images.map((img, i) => (
                                <img
                                  key={i}
                                  src={img}
                                  alt="Hình câu hỏi"
                                  className="max-h-56 max-w-full rounded-xl border border-slate-200 shadow-sm object-contain bg-white p-1"
                                />
                              ))}
                            </div>
                          )}

                          {/* PART 1: Multiple Choice Options */}
                          {q.part === 1 && q.options && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                              {q.options.map((opt) => {
                                const isSelected = userAnswer === opt.letter;
                                const isCorrectChoice = opt.isCorrect || q.correctAnswer === opt.letter;
                                let btnStyle = 'border-slate-200 hover:border-indigo-400 hover:bg-slate-50/80 text-slate-800';

                                if (isRevealed) {
                                  if (isCorrectChoice) {
                                    btnStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                                  } else if (isSelected && !isCorrectChoice) {
                                    btnStyle = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                                  }
                                } else if (isSelected) {
                                  btnStyle = 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold ring-1 ring-indigo-500';
                                }

                                return (
                                  <button
                                    key={opt.letter}
                                    onClick={() => {
                                      handleAnswerPractice(qId, opt.letter);
                                      if (isCorrectChoice) sfx.playCorrect();
                                      else sfx.playWrong();
                                    }}
                                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${btnStyle}`}
                                  >
                                    <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                      {opt.letter}
                                    </span>
                                    <div className="flex-1 text-sm leading-relaxed pt-0.5">
                                      {opt.text && <span dangerouslySetInnerHTML={{ __html: opt.text }} />}
                                      {opt.image && (
                                        <img src={opt.image} alt={opt.letter} className="max-h-28 mt-2 rounded border border-slate-200 bg-white" />
                                      )}
                                    </div>
                                    {isRevealed && isCorrectChoice && (
                                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {/* PART 2: True / False 4 Sub-items */}
                          {q.part === 2 && q.options && (
                            <div className="space-y-3 pt-2">
                              {q.options.map((opt) => {
                                const currentOptVal = userAnswer?.[opt.letter]; // true | false
                                const correctVal = opt.isCorrect;

                                return (
                                  <div
                                    key={opt.letter}
                                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                                  >
                                    <div className="flex items-start gap-2.5 flex-1">
                                      <span className="w-6 h-6 rounded-md bg-white border border-slate-300 text-xs font-bold flex items-center justify-center shrink-0 text-slate-700">
                                        {opt.letter.toLowerCase()}
                                      </span>
                                      <div className="text-sm text-slate-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: opt.text }} />
                                    </div>

                                    {/* True/False Buttons */}
                                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                                      <button
                                        onClick={() => {
                                          const next = { ...(userAnswer || {}), [opt.letter]: true };
                                          handleAnswerPractice(qId, next);
                                        }}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${currentOptVal === true ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                                      >
                                        Đúng
                                      </button>
                                      <button
                                        onClick={() => {
                                          const next = { ...(userAnswer || {}), [opt.letter]: false };
                                          handleAnswerPractice(qId, next);
                                        }}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${currentOptVal === false ? 'bg-rose-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                                      >
                                        Sai
                                      </button>

                                      {isRevealed && (
                                        <span className={`text-xs font-extrabold px-2 py-1 rounded ml-1 ${correctVal ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                          Đáp án: {correctVal ? 'Đúng' : 'Sai'}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* PART 3: Short Answer Calculation */}
                          {q.part === 3 && (
                            <div className="pt-2 space-y-3">
                              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <div className="relative flex-1 max-w-xs">
                                  <input
                                    type="text"
                                    value={userAnswer || ''}
                                    onChange={(e) => handleAnswerPractice(qId, e.target.value)}
                                    placeholder="Nhập đáp số (ví dụ: 2 hoặc 107)..."
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                                  />
                                </div>
                                <button
                                  onClick={() => handleToggleReveal(qId)}
                                  className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs transition-colors"
                                >
                                  Kiểm tra kết quả
                                </button>
                              </div>

                              {isRevealed && (
                                <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl text-xs font-bold text-indigo-900 flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span>Đáp số chính xác: <b>{q.correctAnswer}</b></span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Explanation Accordion */}
                          {isRevealed && q.explanation && (
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2 mt-4 animate-fade-in">
                              <div className="font-bold text-indigo-800 flex items-center gap-1.5">
                                <HelpCircle className="w-4 h-4 text-indigo-600" />
                                Hướng dẫn giải chi tiết:
                              </div>
                              <div dangerouslySetInnerHTML={{ __html: q.explanation }} />
                              {q.explanationImages && q.explanationImages.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {q.explanationImages.map((img, i) => (
                                    <img key={i} src={img} alt="Giải thích" className="max-h-40 rounded border border-slate-200" />
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Right Quick Nav Sidebar */}
                <div className="hidden lg:block lg:col-span-1">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm sticky top-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Danh sách câu hỏi
                      </h4>
                      <span className="text-xs font-semibold text-slate-500">
                        {filteredPracticeQuestions.length} câu
                      </span>
                    </div>

                    {/* Level Legend */}
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] font-medium text-slate-600 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Nhận biết</div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-sky-500"></span>Thông hiểu</div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"></span>Vận dụng</div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500"></span>VDC</div>
                    </div>

                    {/* Question Bubbles Grid */}
                    <div className="grid grid-cols-5 gap-2 max-h-[460px] overflow-y-auto pr-1">
                      {filteredPracticeQuestions.map((q, idx) => {
                        const isAnswered = practiceAnswers[q.id] !== undefined;
                        const lvl = q.level || 'TH';
                        let dotColor = 'border-slate-200 text-slate-700 hover:border-indigo-400';

                        if (isAnswered) {
                          dotColor = 'bg-indigo-600 text-white border-indigo-600 font-bold';
                        } else if (lvl === 'NB') {
                          dotColor = 'border-emerald-300 text-emerald-800 bg-emerald-50/40';
                        } else if (lvl === 'TH') {
                          dotColor = 'border-sky-300 text-sky-800 bg-sky-50/40';
                        } else if (lvl === 'VD') {
                          dotColor = 'border-amber-300 text-amber-800 bg-amber-50/40';
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => {
                              const el = document.getElementById(`question-${q.id}`);
                              el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            className={`h-9 rounded-lg border text-xs font-semibold flex items-center justify-center transition-all ${dotColor}`}
                            title={`Câu ${idx + 1} (${q.levelName || 'Thông hiểu'})`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 4: 7 STANDARDIZED EXAMS ================= */}
          {activeTab === 'exam' && (
            <div className="space-y-6">
              {/* Exam Header Banner */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                      7 ĐỀ KIỂM TRA CHUẨN BỘ 2025
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      {activeExam.title}
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Thời gian làm bài: 50 phút • 28 câu (18 câu P1 + 4 câu P2 + 6 câu P3) • Thang điểm 10 chuẩn
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Timer display */}
                  {isExamActive && (
                    <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-4 py-2 rounded-xl text-indigo-900 font-mono font-bold text-lg">
                      <Clock className="w-5 h-5 text-indigo-600 animate-pulse" />
                      {formatTimer(examTimeLeft)}
                    </div>
                  )}

                  {!isExamActive ? (
                    <button
                      onClick={() => handleStartExam(selectedExamId)}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm text-xs flex items-center gap-2 transition-all"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      Bắt đầu tính giờ thi (50 phút)
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitExam}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm text-xs flex items-center gap-2 transition-all"
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                      Nộp bài & Chấm điểm ngay
                    </button>
                  )}
                </div>
              </div>

              {/* Exam Tabs (Đề 1 -> Đề 7) */}
              <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-slate-500 px-2">Chọn đề thi:</span>
                {HOA12_CHUONG1_7_EXAMS.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => {
                      if (isExamActive && !window.confirm('Bạn đang trong thời gian làm bài, bạn có chắc muốn đổi sang đề khác?')) {
                        return;
                      }
                      setSelectedExamId(e.id);
                      setIsExamActive(false);
                      setExamAnswers({});
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedExamId === e.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    {e.badge}
                  </button>
                ))}
              </div>

              {/* Exam Questions Container */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-6">
                  {activeExam.questions.map((q, idx) => {
                    const qId = q.id;
                    const userAnswer = examAnswers[qId];

                    return (
                      <div
                        key={qId}
                        id={`exam-q-${qId}`}
                        className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4"
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-extrabold flex items-center justify-center text-xs border border-indigo-100">
                              {idx + 1}
                            </span>
                            <span className="font-bold text-slate-900 text-sm">
                              Câu {idx + 1}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                              Phần {q.part}
                            </span>
                            {renderLevelBadge(q.level, q.levelName)}
                          </div>
                          <span className="text-xs font-semibold text-slate-500">
                            {q.part === 1 ? '0,25 đ' : q.part === 2 ? '1,0 đ' : '0,25 đ'}
                          </span>
                        </div>

                        {/* Stem */}
                        <div className="text-base text-slate-900 leading-relaxed font-normal" dangerouslySetInnerHTML={{ __html: q.text }} />

                        {/* Image */}
                        {q.images && q.images.length > 0 && (
                          <div className="flex flex-wrap gap-2 my-2">
                            {q.images.map((img, i) => (
                              <img key={i} src={img} alt="Đề thi" className="max-h-56 rounded-xl border border-slate-200 object-contain p-1 bg-white" />
                            ))}
                          </div>
                        )}

                        {/* Part 1 Options */}
                        {q.part === 1 && q.options && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                            {q.options.map((opt) => {
                              const isSelected = userAnswer === opt.letter;
                              return (
                                <button
                                  key={opt.letter}
                                  onClick={() => setExamAnswers(prev => ({ ...prev, [qId]: opt.letter }))}
                                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${isSelected ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-semibold ring-1 ring-indigo-500' : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'}`}
                                >
                                  <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                    {opt.letter}
                                  </span>
                                  <div className="flex-1 text-sm pt-0.5" dangerouslySetInnerHTML={{ __html: opt.text }} />
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Part 2 True / False */}
                        {q.part === 2 && q.options && (
                          <div className="space-y-3 pt-2">
                            {q.options.map((opt) => {
                              const curVal = userAnswer?.[opt.letter];
                              return (
                                <div key={opt.letter} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div className="flex items-start gap-2.5 flex-1">
                                    <span className="w-6 h-6 rounded-md bg-white border border-slate-300 text-xs font-bold flex items-center justify-center shrink-0 text-slate-700">
                                      {opt.letter.toLowerCase()}
                                    </span>
                                    <div className="text-sm text-slate-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: opt.text }} />
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <button
                                      onClick={() => {
                                        const next = { ...(userAnswer || {}), [opt.letter]: true };
                                        setExamAnswers(prev => ({ ...prev, [qId]: next }));
                                      }}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${curVal === true ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                                    >
                                      Đúng
                                    </button>
                                    <button
                                      onClick={() => {
                                        const next = { ...(userAnswer || {}), [opt.letter]: false };
                                        setExamAnswers(prev => ({ ...prev, [qId]: next }));
                                      }}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${curVal === false ? 'bg-rose-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                                    >
                                      Sai
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Part 3 Short Answer */}
                        {q.part === 3 && (
                          <div className="pt-2">
                            <input
                              type="text"
                              value={userAnswer || ''}
                              onChange={(e) => setExamAnswers(prev => ({ ...prev, [qId]: e.target.value }))}
                              placeholder="Nhập đáp số vào đây (ví dụ: 4 hoặc 80)..."
                              className="w-full max-w-sm px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Exam Quick Nav */}
                <div className="hidden lg:block lg:col-span-1">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm sticky top-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Phiếu bài làm
                      </h4>
                      <span className="text-xs font-semibold text-slate-500">
                        {Object.keys(examAnswers).length} / {activeExam.questions.length} câu
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {activeExam.questions.map((q, idx) => {
                        const isDone = examAnswers[q.id] !== undefined;
                        return (
                          <button
                            key={q.id}
                            onClick={() => {
                              const el = document.getElementById(`exam-q-${q.id}`);
                              el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            className={`h-9 rounded-lg border text-xs font-bold flex items-center justify-center transition-all ${isDone ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'}`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={handleSubmitExam}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm text-xs flex items-center justify-center gap-2 transition-all mt-4"
                    >
                      <Check className="w-4 h-4" />
                      Nộp bài & Chấm điểm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 5: EXAM SCORE REPORT ================= */}
          {activeTab === 'results' && lastExamResult && (
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-md text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
                  <Trophy className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Kết Quả Đề Kiểm Tra: {lastExamResult.exam.title}
                </h2>
                <div className="text-5xl font-black text-indigo-600 my-2">
                  {lastExamResult.score.totalScore} <span className="text-2xl text-slate-400 font-bold">/ 10</span>
                </div>
                <p className="text-sm font-semibold text-slate-600">
                  Đánh giá năng lực: <span className="text-indigo-600 font-bold">{getRankTitle(lastExamResult.score.totalScore)}</span>
                </p>

                {/* Score breakdown across 3 parts */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-2xl mx-auto border-t border-slate-100 text-left">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Phần I (4 lựa chọn)</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">
                      {lastExamResult.score.part1Score.toFixed(2)} <span className="text-xs text-slate-400">/ 4,50 đ</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Phần II (Đúng/Sai)</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">
                      {lastExamResult.score.part2Score.toFixed(2)} <span className="text-xs text-slate-400">/ 4,00 đ</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Phần III (Trả lời ngắn)</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">
                      {lastExamResult.score.part3Score.toFixed(2)} <span className="text-xs text-slate-400">/ 1,50 đ</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-6">
                  <button
                    onClick={() => handleStartExam(lastExamResult.exam.id)}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Làm lại đề này
                  </button>
                  <button
                    onClick={() => setActiveTab('exam')}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs flex items-center gap-2"
                  >
                    Chọn đề khác
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );

  return createPortal(content, document.body);
};

export default Hoa12Chuong1View;
