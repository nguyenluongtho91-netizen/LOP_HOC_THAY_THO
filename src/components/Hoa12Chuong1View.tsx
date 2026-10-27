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
  CheckCheck, ListFilter, SlidersHorizontal, Sun, Moon, Type,
  ArrowUpRight, Coffee
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

  // Mini-set pagination (Chia nhỏ đề thành 10-15 câu để học sinh không mỏi mắt)
  const [selectedSetIndex, setSelectedSetIndex] = useState<number>(0); // 0 = Set 1, -1 = Tất cả
  const [submittedSets, setSubmittedSets] = useState<Record<string, boolean>>({});

  // Eye comfort & Accessibility controls (Bảo vệ mắt & Chống mỏi mắt)
  const [eyeComfortMode, setEyeComfortMode] = useState<boolean>(true); // Nền kem ấm dịu mắt
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Exam
  const [selectedExamId, setSelectedExamId] = useState<string>('de1');
  const [examTimeLeft, setExamTimeLeft] = useState<number>(50 * 60);
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [examAnswers, setExamAnswers] = useState<Record<string, any>>({});
  const [lastExamResult, setLastExamResult] = useState<any>(null);

  // Practice answers state
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, any>>({});
  const [practiceRevealed, setPracticeRevealed] = useState<Record<string, boolean>>({});

  // Audio state
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Reset set index when filters change
  useEffect(() => {
    setSelectedSetIndex(0);
  }, [selectedLessonId, practicePart, selectedSubTopic, selectedLevel]);

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
    saveChuong1ExamResult(activeExam.id, scoreResult.totalScore, activeExam.duration * 60 - examTimeLeft);
    setLastExamResult({
      exam: activeExam,
      score: scoreResult,
      answers: { ...examAnswers },
      completedAt: new Date().toLocaleTimeString('vi-VN')
    });
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
  const practiceData = activeLesson.practice || (activeLesson as any).practiceBank || {};
  const allPracticeQuestions: Chuong1Question[] = useMemo(() => {
    if (practicePart === 1) return practiceData.part1 || [];
    if (practicePart === 2) return practiceData.part2 || [];
    return practiceData.part3 || [];
  }, [practiceData, practicePart]);

  // Filtered practice questions
  const filteredQuestions = useMemo(() => {
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

  // SỐ LƯỢNG CÂU PHÙ HỢP CHO MỖI BỘ ĐỀ NHỎ (Tránh mỏi mắt):
  // Phần 1 (4 lựa chọn): 12 - 15 câu/bộ (~15 phút)
  // Phần 2 (Đúng/Sai 4 ý): 4 - 5 câu/bộ (~15-20 phút, tương đương 16-20 ý)
  // Phần 3 (Trả lời ngắn): 5 - 6 câu/bộ (~15 phút)
  const setSize = useMemo(() => {
    if (practicePart === 1) return 15;
    if (practicePart === 2) return 5;
    return 6;
  }, [practicePart]);

  // Chia danh sách câu hỏi thành các Bộ đề nhỏ (Mini Sets)
  const questionSets: Chuong1Question[][] = useMemo(() => {
    const sets: Chuong1Question[][] = [];
    for (let i = 0; i < filteredQuestions.length; i += setSize) {
      sets.push(filteredQuestions.slice(i, i + setSize));
    }
    return sets;
  }, [filteredQuestions, setSize]);

  // Câu hỏi hiển thị hiện tại (theo bộ đề nhỏ đã chọn)
  const currentSetQuestions: Chuong1Question[] = useMemo(() => {
    if (selectedSetIndex === -1) return filteredQuestions; // Xem tất cả
    if (!questionSets[selectedSetIndex]) return questionSets[0] || [];
    return questionSets[selectedSetIndex];
  }, [questionSets, selectedSetIndex, filteredQuestions]);

  // Current mini set key
  const currentSetKey = `${selectedLessonId}_p${practicePart}_sub${selectedSubTopic}_lvl${selectedLevel}_set${selectedSetIndex}`;
  const isCurrentSetSubmitted = submittedSets[currentSetKey] || false;

  // Level statistics for the current part
  const levelStats = useMemo(() => {
    const stats = { all: allPracticeQuestions.length, NB: 0, TH: 0, VD: 0, VDC: 0 };
    allPracticeQuestions.forEach(q => {
      const lvl = q.level || 'TH';
      if (lvl in stats) (stats as any)[lvl]++;
    });
    return stats;
  }, [allPracticeQuestions]);

  // Practice Answer Handlers
  const handleAnswerPractice = (qId: string, answer: any) => {
    setPracticeAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const handleToggleReveal = (qId: string) => {
    setPracticeRevealed(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Submit Mini Set
  const handleSubmitCurrentSet = () => {
    setSubmittedSets(prev => ({ ...prev, [currentSetKey]: true }));
    // Tự động mở lời giải cho các câu trong bộ
    const newRevealed = { ...practiceRevealed };
    currentSetQuestions.forEach(q => {
      newRevealed[q.id] = true;
    });
    setPracticeRevealed(newRevealed);

    // Tính điểm của bộ đề này
    let correctCount = 0;
    currentSetQuestions.forEach(q => {
      const userAns = practiceAnswers[q.id];
      if (q.part === 1) {
        if (userAns && userAns === q.correctAnswer) correctCount++;
      } else if (q.part === 2) {
        // Full 4 ý
        let all4Correct = true;
        q.options?.forEach(opt => {
          if (userAns?.[opt.letter] !== opt.isCorrect) all4Correct = false;
        });
        if (all4Correct) correctCount++;
      } else if (q.part === 3) {
        if (userAns && userAns.toString().trim() === q.correctAnswer?.toString().trim()) correctCount++;
      }
    });

    sfx.playComplete();
    toast.success(`Đã nộp Bộ đề số ${selectedSetIndex + 1}! Đúng ${correctCount}/${currentSetQuestions.length} câu.`, {
      icon: '🎉',
      duration: 5000
    });
  };

  // Level Badge Helper
  const renderLevelBadge = (level?: string, levelName?: string) => {
    const lvl = level || 'TH';
    const name = levelName || (lvl === 'NB' ? 'Nhận biết' : lvl === 'TH' ? 'Thông hiểu' : lvl === 'VD' ? 'Vận dụng' : 'Vận dụng cao');
    if (lvl === 'NB') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {name}
        </span>
      );
    }
    if (lvl === 'TH') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-300">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
          {name}
        </span>
      );
    }
    if (lvl === 'VD') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          {name}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
        {name}
      </span>
    );
  };

  // Font Size Classes
  const fontClasses = useMemo(() => {
    if (fontSizeLevel === 'large') return { stem: 'text-lg', opt: 'text-base', lead: 'leading-relaxed' };
    if (fontSizeLevel === 'xlarge') return { stem: 'text-xl', opt: 'text-lg', lead: 'leading-loose' };
    return { stem: 'text-base', opt: 'text-sm', lead: 'leading-relaxed' };
  }, [fontSizeLevel]);

  // Main Background based on Eye Comfort Mode
  const bgTheme = eyeComfortMode 
    ? 'bg-[#FAF7EE] text-stone-900' // Kem ấm dịu mắt chống ánh sáng xanh
    : 'bg-slate-100 text-slate-900';

  const cardTheme = eyeComfortMode
    ? 'bg-[#FFFDF9] border-[#E8E2D5] text-stone-900 shadow-sm'
    : 'bg-white border-slate-200 text-slate-900 shadow-sm';

  const content = (
    <div className={`fixed inset-0 z-[999999] ${bgTheme} flex flex-col font-sans overflow-hidden antialiased transition-colors duration-200`}>
      {/* HEADER BAR */}
      <header className={`h-16 ${eyeComfortMode ? 'bg-[#FFFDF9] border-[#E8E2D5]' : 'bg-white border-slate-200'} border-b px-4 md:px-8 flex items-center justify-between shadow-xs shrink-0`}>
        <div className="flex items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-200/60 hover:bg-slate-300/60 text-slate-700 transition-colors flex items-center gap-1 text-sm font-bold mr-1"
              title="Quay lại"
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
              <h1 className="text-base md:text-xl font-extrabold tracking-tight leading-tight">
                Hóa Học 12: Chương 1 – Ester, Lipid & Xà Phòng
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-black bg-indigo-100 text-indigo-700 border border-indigo-200 uppercase">
                BỘ ĐỀ CHỐNG MỎI MẮT
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Chia nhỏ mỗi đề 12–15 câu • Tùy chỉnh mức độ • Chế độ tông màu dịu mắt & chỉnh cỡ chữ
            </p>
          </div>
        </div>

        {/* Global Controls & Tabs */}
        <div className="flex items-center gap-2">
          {/* Main Navigation Tabs */}
          <div className="hidden lg:flex items-center bg-slate-200/50 p-1 rounded-xl border border-slate-200 text-sm font-semibold">
            <button
              onClick={() => { setActiveTab('overview'); setIsExamActive(false); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'overview' ? 'bg-white text-indigo-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tổng quan
            </button>
            <button
              onClick={() => { setActiveTab('handbook'); setIsExamActive(false); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'handbook' ? 'bg-white text-indigo-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Cẩm nang & Dạng toán
            </button>
            <button
              onClick={() => { setActiveTab('practice'); setIsExamActive(false); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'practice' ? 'bg-white text-indigo-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Bộ Đề Luyện Nhỏ (15 câu)
            </button>
            <button
              onClick={() => { setActiveTab('exam'); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'exam' ? 'bg-white text-indigo-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              7 Đề thi 50 phút
            </button>
          </div>

          {/* Eye Comfort Toggle */}
          <button
            onClick={() => {
              const next = !eyeComfortMode;
              setEyeComfortMode(next);
              toast(next ? 'Đã bật chế độ kem ấm dịu mắt ☕' : 'Đã chuyển về tông sáng tiêu chuẩn ☀️', { icon: '👁️' });
            }}
            className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${eyeComfortMode ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-slate-200/70 text-slate-700 hover:bg-slate-300'}`}
            title="Chế độ tông màu dịu mắt (chống mỏi mắt)"
          >
            <Coffee className="w-4 h-4 text-amber-700" />
            <span className="hidden xl:inline">Dịu mắt</span>
          </button>

          {/* Font Size Toggle */}
          <button
            onClick={() => {
              if (fontSizeLevel === 'normal') setFontSizeLevel('large');
              else if (fontSizeLevel === 'large') setFontSizeLevel('xlarge');
              else setFontSizeLevel('normal');
            }}
            className="p-2 rounded-xl bg-slate-200/70 hover:bg-slate-300 text-slate-700 transition-colors flex items-center gap-1 text-xs font-bold"
            title="Thay đổi cỡ chữ (Bình thường / To / Rất to)"
          >
            <Type className="w-4 h-4" />
            <span className="hidden xl:inline">{fontSizeLevel === 'normal' ? 'Cỡ chữ chuẩn' : fontSizeLevel === 'large' ? 'Chữ to' : 'Chữ rất to'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              const nm = !isMuted;
              setIsMuted(nm);
              sfx.setMuted(nm);
            }}
            className="p-2 rounded-xl bg-slate-200/70 hover:bg-slate-300 text-slate-700 transition-colors"
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Exit / Close */}
          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-colors"
            >
              Thoát
            </button>
          )}
        </div>
      </header>

      {/* MOBILE NAV BAR */}
      <div className={`lg:hidden ${eyeComfortMode ? 'bg-[#FFFDF9] border-[#E8E2D5]' : 'bg-white border-slate-200'} border-b px-2 py-2 flex items-center justify-around text-xs font-bold shrink-0`}>
        <button
          onClick={() => { setActiveTab('overview'); setIsExamActive(false); }}
          className={`px-2.5 py-1 rounded-lg ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
        >
          Tổng quan
        </button>
        <button
          onClick={() => { setActiveTab('handbook'); setIsExamActive(false); }}
          className={`px-2.5 py-1 rounded-lg ${activeTab === 'handbook' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
        >
          Lý thuyết
        </button>
        <button
          onClick={() => { setActiveTab('practice'); setIsExamActive(false); }}
          className={`px-2.5 py-1 rounded-lg ${activeTab === 'practice' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
        >
          Bộ đề nhỏ
        </button>
        <button
          onClick={() => { setActiveTab('exam'); }}
          className={`px-2.5 py-1 rounded-lg ${activeTab === 'exam' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
        >
          7 Đề thi
        </button>
      </div>

      {/* BODY CONTENT AREA */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-[1400px] mx-auto">
          {/* ================= TAB 1: OVERVIEW ================= */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Hero Banner */}
              <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 rounded-3xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 max-w-3xl">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md uppercase tracking-wider mb-4 inline-block">
                    HỆ THỐNG HỌC TẬP TOÀN DIỆN CHƯƠNG 1 (THI 2025)
                  </span>
                  <h2 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
                    Chương 1: Ester – Lipid. Xà Phòng & Chất Giặt Rửa
                  </h2>
                  <p className="text-indigo-100 text-sm md:text-base leading-relaxed mb-6">
                    Hệ thống hóa toàn bộ kiến thức theo chuẩn chương trình mới. 
                    <b> Đặc biệt:</b> Toàn bộ câu hỏi được chia nhỏ thành các bộ đề <b>12–15 câu vừa sức</b>, giúp học sinh làm bài tập trung 15 phút, nộp bài nhận điểm ngay và <b>hoàn toàn không bị mỏi mắt</b>.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => { setSelectedLessonId('bai1'); setActiveTab('practice'); }}
                      className="px-5 py-2.5 bg-white text-indigo-700 hover:bg-indigo-50 font-bold rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
                    >
                      <Play className="w-4 h-4 fill-indigo-700" />
                      Luyện Bộ Đề Nhỏ (15 câu)
                    </button>
                    <button
                      onClick={() => { handleStartExam('de1'); }}
                      className="px-5 py-2.5 bg-indigo-900/60 hover:bg-indigo-900/80 text-white font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
                    >
                      <Trophy className="w-4 h-4 text-amber-300" />
                      Thi thử 7 Đề chuẩn Bộ
                    </button>
                    <button
                      onClick={() => setActiveTab('handbook')}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all flex items-center gap-2 text-sm"
                    >
                      <BookOpen className="w-4 h-4" />
                      Cẩm nang lý thuyết & dạng toán
                    </button>
                  </div>
                </div>
              </div>

              {/* 3 Main Lessons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {HOA12_CHUONG1_LESSONS.map((l) => {
                  const pData = l.practice || (l as any).practiceBank || {};
                  const qCount = (pData.part1?.length || 0) + (pData.part2?.length || 0) + (pData.part3?.length || 0);
                  const setCount = Math.ceil((pData.part1?.length || 0) / 15) + Math.ceil((pData.part2?.length || 0) / 5) + Math.ceil((pData.part3?.length || 0) / 6);

                  return (
                    <div
                      key={l.id}
                      className={`${cardTheme} rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                            {l.badge}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {l.lessonNumber === 3 ? '7 Đề thi 50 phút' : `${setCount} Bộ đề nhỏ vừa sức`}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                          {l.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {l.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {l.mathForms && l.mathForms.length > 0 && (
                            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <Calculator className="w-4 h-4 text-indigo-600 shrink-0" />
                              <span>{l.mathForms.length} dạng toán trọng tâm có bài giải mẫu</span>
                            </div>
                          )}
                          {qCount > 0 && (
                            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>
                                {qCount} câu hỏi chia thành <b>{setCount} bộ đề nhỏ</b> (10–15 câu/bộ)
                              </span>
                            </div>
                          )}
                          {l.exams && (
                            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <Award className="w-4 h-4 text-amber-600 shrink-0" />
                              <span>7 đề kiểm tra định kỳ 50 phút chuẩn ma trận Bộ</span>
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
                          {l.id === 'bai3' ? 'Vào phòng thi 7 Đề' : 'Vào luyện bộ đề nhỏ'}
                        </button>
                        <button
                          onClick={() => {
                            setSelectedLessonId(l.id);
                            setActiveTab('handbook');
                          }}
                          className="p-2.5 rounded-xl bg-slate-200/60 hover:bg-slate-300 text-slate-700 transition-colors"
                          title="Xem lý thuyết"
                        >
                          <BookOpen className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= TAB 2: HANDBOOK & MATH FORMS ================= */}
          {activeTab === 'handbook' && (
            <div className="space-y-6">
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${cardTheme} p-6 rounded-3xl`}>
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    Cẩm Nang Trọng Tâm & Dạng Toán Thực Chiến
                  </h2>
                  <p className="text-xs text-slate-500">
                    Bản chất hóa học, phương pháp giải và các bài toán mẫu có lời giải chi tiết.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {HOA12_CHUONG1_LESSONS.slice(0, 2).map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setSelectedLessonId(l.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedLessonId === l.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-200/60 text-slate-700 hover:bg-slate-300'}`}
                    >
                      {l.badge}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theory Sections */}
              <div className="space-y-6">
                <div className={`${cardTheme} rounded-3xl p-6 md:p-8 space-y-4`}>
                  <h3 className="text-lg font-bold pb-2 border-b border-slate-100 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    Lý thuyết trọng tâm: {activeLesson.title}
                  </h3>
                  <div className="text-sm leading-relaxed space-y-4">
                    {selectedLessonId === 'bai1' ? (
                      <>
                        <div className="bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100">
                          <h4 className="font-bold text-indigo-900 mb-1">1. Phản ứng Ester hóa (Thuận nghịch 2 chiều)</h4>
                          <p className="text-slate-700">
                            RCOOH + R&apos;OH &hArr; [H<sub>2</sub>SO<sub>4</sub> đặc, t&deg;] RCOOR&apos; + H<sub>2</sub>O
                            <br />H<sub>2</sub>SO<sub>4</sub> đặc vừa làm xúc tác vừa hút nước để cân bằng chuyển dịch theo chiều thuận tạo nhiều ester hơn.
                          </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                          <h4 className="font-bold text-slate-900 mb-1">2. So sánh nhiệt độ sôi & độ tan</h4>
                          <p className="text-slate-700">
                            Ester không có liên kết hydrogen liên phân tử như alcohol và acid nên nhiệt độ sôi thấp hơn nhiều:
                            <br /><b>Nhiệt độ sôi: Ester &lt; Alcohol &lt; Carboxylic acid</b>
                          </p>
                        </div>
                        <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200">
                          <h4 className="font-bold text-amber-900 mb-1">3. Chất béo & Acid béo Omega</h4>
                          <p className="text-slate-700">
                            • Triacylglycerol là triester của glycerol với các acid béo.
                            <br />• Acid béo no (palmitic C<sub>15</sub>H<sub>31</sub>COOH, stearic C<sub>17</sub>H<sub>35</sub>COOH) tạo chất béo rắn (mỡ động vật).
                            <br />• Acid béo không no (oleic C<sub>17</sub>H<sub>33</sub>COOH) tạo chất béo lỏng (dầu thực vật).
                            <br />• <b>Omega-3 và Omega-6</b> có nối đôi đầu tiên ở C số 3 và C số 6 tính từ đầu methyl &minus;CH<sub>3</sub>.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100">
                          <h4 className="font-bold text-indigo-900 mb-1">1. Phân tử lưỡng cực & Hạt Micelle</h4>
                          <p className="text-slate-700">
                            Xà phòng và chất giặt rửa gồm đầu ưa nước (&minus;COONa hoặc &minus;SO<sub>3</sub>Na) và đuôi kị nước (mạch alkyl dài). Khi vò giặt, các phân tử bao bọc hạt dầu mỡ tạo hạt keo <b>micelle</b> phân tán vào nước để rửa trôi.
                          </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                          <h4 className="font-bold text-slate-900 mb-1">2. Hoạt động trong nước cứng</h4>
                          <p className="text-slate-700">
                            • Xà phòng tạo kết tủa với Ca<sup>2+</sup>, Mg<sup>2+</sup> trong nước cứng làm giảm tác dụng giặt rửa.
                            <br />• Chất giặt rửa tổng hợp không bị kết tủa trong nước cứng. Mạch hydrocarbon không phân nhánh dễ bị vi sinh vật phân hủy hơn mạch phân nhánh.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Math Forms */}
                {activeLesson.mathForms && activeLesson.mathForms.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-indigo-600" />
                      Các dạng toán trọng tâm có bài giải chi tiết
                    </h3>
                    {activeLesson.mathForms.map((mf, idx) => (
                      <div key={mf.id} className={`${cardTheme} rounded-3xl p-6 md:p-8 space-y-4`}>
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 font-extrabold flex items-center justify-center text-xs">
                            D{idx + 1}
                          </span>
                          <h4 className="text-base font-bold">
                            {mf.title}
                          </h4>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs font-mono" dangerouslySetInnerHTML={{ __html: mf.method }} />

                        <div className="space-y-3 pt-2">
                          {mf.examples.map((ex) => (
                            <div key={ex.number} className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
                              <div className="text-xs font-bold text-indigo-700">Ví dụ {ex.number}:</div>
                              <div className="text-sm" dangerouslySetInnerHTML={{ __html: ex.text }} />
                              {ex.images && ex.images.length > 0 && (
                                <div className="flex flex-wrap gap-2 my-2">
                                  {ex.images.map((img, i) => (
                                    <img key={i} src={img} alt="Hình minh họa" className="max-h-48 rounded border border-slate-200" />
                                  ))}
                                </div>
                              )}
                              {ex.solution && (
                                <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 text-xs text-slate-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: ex.solution }} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= TAB 3: PRACTICE BANK (BỘ ĐỀ NHỎ 15 CÂU - CHỐNG MỎI MẮT) ================= */}
          {activeTab === 'practice' && (
            <div className="space-y-6">
              {/* Filter & Mini-set Control Card */}
              <div className={`${cardTheme} p-6 rounded-3xl space-y-5`}>
                {/* Row 1: Lesson & Topic */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200/70">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {activeLesson.badge}
                      </span>
                      <h2 className="text-xl font-extrabold tracking-tight">
                        {activeLesson.title}
                      </h2>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Tổng số câu trong phần này: <b>{filteredQuestions.length}</b> câu • Đã chia thành <b>{questionSets.length} bộ đề nhỏ</b> (mỗi bộ {setSize} câu)
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
                          setSelectedSetIndex(0);
                        }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${selectedLessonId === l.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-200/60 text-slate-700 hover:bg-slate-300'}`}
                      >
                        {l.badge}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 2: Sub-topics & Format Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Format tabs */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => { setPracticePart(1); setSelectedSetIndex(0); }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${practicePart === 1 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-200/60 text-slate-700 hover:bg-slate-300'}`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Phần I: 4 Lựa chọn ({practiceData.part1?.length || 0})
                    </button>
                    <button
                      onClick={() => { setPracticePart(2); setSelectedSetIndex(0); }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${practicePart === 2 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-200/60 text-slate-700 hover:bg-slate-300'}`}
                    >
                      <CheckSquare className="w-3.5 h-3.5" />
                      Phần II: Đúng / Sai ({practiceData.part2?.length || 0})
                    </button>
                    <button
                      onClick={() => { setPracticePart(3); setSelectedSetIndex(0); }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${practicePart === 3 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-200/60 text-slate-700 hover:bg-slate-300'}`}
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      Phần III: Trả lời ngắn ({practiceData.part3?.length || 0})
                    </button>
                  </div>

                  {/* Sub-topics for Bai 1 */}
                  {selectedLessonId === 'bai1' && (
                    <div className="flex items-center gap-1.5 bg-slate-200/50 p-1 rounded-xl">
                      <button
                        onClick={() => { setSelectedSubTopic('all'); setSelectedSetIndex(0); }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${selectedSubTopic === 'all' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                      >
                        Tất cả
                      </button>
                      <button
                        onClick={() => { setSelectedSubTopic('ester'); setSelectedSetIndex(0); }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${selectedSubTopic === 'ester' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                      >
                        🔬 Ester
                      </button>
                      <button
                        onClick={() => { setSelectedSubTopic('lipid'); setSelectedSetIndex(0); }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${selectedSubTopic === 'lipid' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                      >
                        🥑 Lipid & Chất béo
                      </button>
                    </div>
                  )}

                  {/* Level Filter */}
                  <div className="flex items-center gap-1 bg-slate-200/50 p-1 rounded-xl">
                    <button
                      onClick={() => { setSelectedLevel('all'); setSelectedSetIndex(0); }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${selectedLevel === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
                    >
                      Tất cả
                    </button>
                    <button
                      onClick={() => { setSelectedLevel('NB'); setSelectedSetIndex(0); }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${selectedLevel === 'NB' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-800'}`}
                    >
                      🟢 NB ({levelStats.NB})
                    </button>
                    <button
                      onClick={() => { setSelectedLevel('TH'); setSelectedSetIndex(0); }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${selectedLevel === 'TH' ? 'bg-sky-600 text-white shadow-sm' : 'text-sky-800'}`}
                    >
                      🔵 TH ({levelStats.TH})
                    </button>
                    <button
                      onClick={() => { setSelectedLevel('VD'); setSelectedSetIndex(0); }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${selectedLevel === 'VD' ? 'bg-amber-600 text-white shadow-sm' : 'text-amber-800'}`}
                    >
                      🟡 VD ({levelStats.VD})
                    </button>
                  </div>
                </div>

                {/* Row 3: BỘ ĐỀ NHỎ (MINI-SETS) SELECTOR - CHỐNG MỎI MẮT */}
                <div className="pt-3 border-t border-slate-200/70">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-indigo-700 flex items-center gap-1.5 uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Chọn bộ đề nhỏ vừa sức (Mỗi bộ {setSize} câu ~ 15 phút làm bài):
                    </span>
                    <button
                      onClick={() => setSelectedSetIndex(selectedSetIndex === -1 ? 0 : -1)}
                      className="text-xs font-bold text-slate-500 hover:text-indigo-600 underline"
                    >
                      {selectedSetIndex === -1 ? 'Thu gọn thành từng bộ 15 câu' : 'Xem danh sách toàn bộ'}
                    </button>
                  </div>

                  {/* Mini-set Buttons Grid */}
                  <div className="flex flex-wrap items-center gap-2">
                    {questionSets.map((s, idx) => {
                      const isSelected = selectedSetIndex === idx;
                      const startQ = idx * setSize + 1;
                      const endQ = idx * setSize + s.length;
                      const sKey = `${selectedLessonId}_p${practicePart}_sub${selectedSubTopic}_lvl${selectedLevel}_set${idx}`;
                      const isDone = submittedSets[sKey];

                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedSetIndex(idx);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 border ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-md transform -translate-y-0.5'
                              : isDone
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                              : 'bg-white border-slate-300 text-slate-700 hover:border-indigo-400'
                          }`}
                        >
                          <span>Bộ {idx + 1}</span>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                            Câu {startQ}–{endQ}
                          </span>
                          {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                        </button>
                      );
                    })}

                    {selectedSetIndex === -1 && (
                      <span className="px-3 py-1.5 rounded-xl text-xs font-black bg-indigo-100 text-indigo-800 border border-indigo-200">
                        Đang xem toàn bộ {filteredQuestions.length} câu
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Questions Area */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Questions Column */}
                <div className="lg:col-span-3 space-y-6">
                  {currentSetQuestions.length === 0 ? (
                    <div className={`${cardTheme} p-12 text-center rounded-3xl text-slate-500`}>
                      <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                      <p className="font-bold text-sm">Không có câu hỏi nào khớp với bộ lọc đã chọn.</p>
                      <button
                        onClick={() => { setSelectedSubTopic('all'); setSelectedLevel('all'); setSelectedSetIndex(0); }}
                        className="mt-3 px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-xl hover:bg-indigo-100"
                      >
                        Đặt lại bộ lọc
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Active Set Banner */}
                      {selectedSetIndex !== -1 && (
                        <div className="flex items-center justify-between bg-indigo-50/70 border border-indigo-200 p-4 rounded-2xl">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-black flex items-center justify-center text-xs">
                              {selectedSetIndex + 1}
                            </span>
                            <span className="font-extrabold text-sm text-indigo-950">
                              Đang làm: Bộ đề số {selectedSetIndex + 1} ({currentSetQuestions.length} câu • Khoảng 15 phút)
                            </span>
                          </div>
                          {isCurrentSetSubmitted ? (
                            <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              Đã nộp bài
                            </span>
                          ) : (
                            <button
                              onClick={handleSubmitCurrentSet}
                              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
                            >
                              <Check className="w-4 h-4" />
                              Nộp bài bộ đề này
                            </button>
                          )}
                        </div>
                      )}

                      {/* Question Cards */}
                      {currentSetQuestions.map((q, idx) => {
                        const qId = q.id;
                        const userAnswer = practiceAnswers[qId];
                        const isRevealed = isCurrentSetSubmitted || !!practiceRevealed[qId];
                        const displayIndex = selectedSetIndex === -1 ? idx + 1 : selectedSetIndex * setSize + idx + 1;

                        return (
                          <div
                            key={qId}
                            id={`question-${qId}`}
                            className={`${cardTheme} rounded-3xl p-6 md:p-8 space-y-4`}
                          >
                            {/* Question Stem inline with Câu X */}
                            <div className="flex items-start justify-between gap-4">
                              <div className={`${fontClasses.stem} ${fontClasses.lead} font-normal flex-1`}>
                                <span className="font-extrabold text-indigo-600 dark:text-indigo-400 mr-2 inline">
                                  Câu {q.number || displayIndex}:
                                </span>
                                <span className="inline" dangerouslySetInnerHTML={{ __html: q.text }} />
                                {isCurrentSetSubmitted && (
                                  <span className="ml-2 inline-block align-middle">
                                    {renderLevelBadge(q.level, q.levelName)}
                                  </span>
                                )}
                              </div>

                              <div className="shrink-0 pt-0.5">
                                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200">
                                  {q.part === 1 ? '0,25 đ' : q.part === 2 ? '1,0 đ' : '0,25 đ'}
                                </span>
                              </div>
                            </div>

                            {/* Images if any */}
                            {q.images && q.images.length > 0 && (
                              <div className="flex flex-wrap gap-3 my-3">
                                {q.images.map((img, i) => (
                                  <img
                                    key={i}
                                    src={img}
                                    alt="Hình câu hỏi"
                                    className="max-h-56 max-w-full rounded-2xl border border-slate-200 shadow-xs object-contain bg-white p-2"
                                  />
                                ))}
                              </div>
                            )}

                            {/* PART 1: 4 Options */}
                            {q.part === 1 && q.options && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                {q.options.map((opt) => {
                                  const isSelected = userAnswer === opt.letter;
                                  const isCorrectChoice = opt.isCorrect || q.correctAnswer === opt.letter;
                                  let btnStyle = 'border-slate-300 hover:border-indigo-400 hover:bg-slate-50/80 text-slate-800 bg-white';

                                  if (isRevealed) {
                                    if (isCorrectChoice) {
                                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400';
                                    } else if (isSelected && !isCorrectChoice) {
                                      btnStyle = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                                    }
                                  } else if (isSelected) {
                                    btnStyle = 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold ring-2 ring-indigo-500';
                                  }

                                  return (
                                    <button
                                      key={opt.letter}
                                      onClick={() => {
                                        handleAnswerPractice(qId, opt.letter);
                                      }}
                                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 ${btnStyle}`}
                                    >
                                      <span className={`w-8 h-8 rounded-xl text-xs font-black flex items-center justify-center shrink-0 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>
                                        {opt.letter}
                                      </span>
                                      <div className={`flex-1 ${fontClasses.opt} ${fontClasses.lead} pt-1`}>
                                        {opt.text && <span dangerouslySetInnerHTML={{ __html: opt.text }} />}
                                        {opt.image && (
                                          <img src={opt.image} alt={opt.letter} className="max-h-28 mt-2 rounded-lg border border-slate-200 bg-white" />
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

                            {/* PART 2: True/False */}
                            {q.part === 2 && q.options && (
                              <div className="space-y-3 pt-2">
                                {q.options.map((opt) => {
                                  const currentOptVal = userAnswer?.[opt.letter];
                                  const correctVal = opt.isCorrect;

                                  return (
                                    <div
                                      key={opt.letter}
                                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                                    >
                                      <div className="flex items-start gap-3 flex-1">
                                        <span className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-xs font-black flex items-center justify-center shrink-0 text-slate-700">
                                          {opt.letter.toLowerCase()}
                                        </span>
                                        <div className={`${fontClasses.opt} leading-relaxed`} dangerouslySetInnerHTML={{ __html: opt.text }} />
                                      </div>

                                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                                        <button
                                          onClick={() => {
                                            const next = { ...(userAnswer || {}), [opt.letter]: true };
                                            handleAnswerPractice(qId, next);
                                          }}
                                          className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${currentOptVal === true ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                                        >
                                          Đúng
                                        </button>
                                        <button
                                          onClick={() => {
                                            const next = { ...(userAnswer || {}), [opt.letter]: false };
                                            handleAnswerPractice(qId, next);
                                          }}
                                          className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${currentOptVal === false ? 'bg-rose-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                                        >
                                          Sai
                                        </button>

                                        {isRevealed && (
                                          <span className={`text-xs font-black px-2.5 py-1 rounded-lg ml-1 ${correctVal ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                            Đáp án: {correctVal ? 'Đúng' : 'Sai'}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* PART 3: Short Answer */}
                            {q.part === 3 && (
                              <div className="pt-2 space-y-3">
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                  <input
                                    type="text"
                                    disabled={isCurrentSetSubmitted}
                                    value={userAnswer || ''}
                                    onChange={(e) => handleAnswerPractice(qId, e.target.value)}
                                    placeholder="Nhập đáp số (ví dụ: 2 hoặc 107)..."
                                    className="w-full max-w-xs px-4 py-3 rounded-2xl border-2 border-slate-300 text-base font-bold focus:outline-none focus:border-indigo-500 bg-white disabled:bg-slate-100"
                                  />
                                </div>

                                {isRevealed && (
                                  <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-2xl text-xs font-bold text-indigo-900 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span>Đáp số chính xác: <b className="text-sm font-black">{q.correctAnswer}</b></span>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Explanation Accordion */}
                            {isRevealed && q.explanation && (
                              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2 mt-4 animate-fade-in">
                                <div className="font-extrabold text-indigo-900 flex flex-wrap items-center gap-2">
                                  <div className="flex items-center gap-1.5">
                                    <HelpCircle className="w-4 h-4 text-indigo-600" />
                                    <span>Hướng dẫn giải chi tiết:</span>
                                  </div>
                                  {renderLevelBadge(q.level, q.levelName)}
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: q.explanation }} />
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {/* Bottom Set Navigation */}
                      {selectedSetIndex !== -1 && (
                        <div className="flex items-center justify-between p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                          <button
                            disabled={selectedSetIndex <= 0}
                            onClick={() => {
                              setSelectedSetIndex(prev => Math.max(0, prev - 1));
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                              selectedSetIndex <= 0 ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                            }`}
                          >
                            <ArrowLeft className="w-4 h-4" />
                            Bộ trước (Bộ {selectedSetIndex})
                          </button>

                          <button
                            onClick={handleSubmitCurrentSet}
                            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md transition-all flex items-center gap-2"
                          >
                            <Check className="w-4 h-4 stroke-[3]" />
                            {isCurrentSetSubmitted ? 'Chấm điểm lại bộ này' : 'Nộp bài & Chấm điểm bộ này'}
                          </button>

                          <button
                            disabled={selectedSetIndex >= questionSets.length - 1}
                            onClick={() => {
                              setSelectedSetIndex(prev => Math.min(questionSets.length - 1, prev + 1));
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                              selectedSetIndex >= questionSets.length - 1 ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md'
                            }`}
                          >
                            Bộ tiếp theo (Bộ {selectedSetIndex + 2})
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Right Quick Nav Sidebar */}
                <div className="hidden lg:block lg:col-span-1">
                  <div className={`${cardTheme} rounded-3xl p-5 sticky top-6 space-y-4`}>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider">
                        Phiếu bài làm
                      </h4>
                      <span className="text-xs font-bold text-slate-500">
                        {currentSetQuestions.length} câu
                      </span>
                    </div>

                    {/* Question Bubbles Grid */}
                    <div className="grid grid-cols-5 gap-2 max-h-[460px] overflow-y-auto pr-1">
                      {currentSetQuestions.map((q, idx) => {
                        const isAnswered = practiceAnswers[q.id] !== undefined;
                        const displayIndex = selectedSetIndex === -1 ? idx + 1 : selectedSetIndex * setSize + idx + 1;
                        let dotColor = 'border-slate-300 text-slate-700 bg-white hover:border-indigo-400';

                        if (isAnswered) {
                          dotColor = 'bg-indigo-600 text-white border-indigo-600 font-black shadow-xs';
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => {
                              const el = document.getElementById(`question-${q.id}`);
                              el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            className={`h-9 rounded-xl border text-xs font-bold flex items-center justify-center transition-all ${dotColor}`}
                            title={`Câu ${displayIndex} (${q.levelName || 'Thông hiểu'})`}
                          >
                            {displayIndex}
                          </button>
                        );
                      })}
                    </div>

                    {selectedSetIndex !== -1 && (
                      <button
                        onClick={handleSubmitCurrentSet}
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md transition-all mt-3"
                      >
                        <Check className="w-4 h-4" />
                        Nộp bài Bộ số {selectedSetIndex + 1}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 4: 7 STANDARDIZED EXAMS ================= */}
          {activeTab === 'exam' && (
            <div className="space-y-6">
              {/* Exam Header */}
              <div className={`${cardTheme} p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300">
                      7 ĐỀ KIỂM TRA CHUẨN BỘ 2025
                    </span>
                    <h2 className="text-xl font-extrabold tracking-tight">
                      {activeExam.title}
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    50 phút • 28 câu (18 câu P1 + 4 câu P2 + 6 câu P3) • Ma trận phân loại học sinh chuẩn Bộ
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {isExamActive && (
                    <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-4 py-2 rounded-2xl text-indigo-900 font-mono font-black text-lg">
                      <Clock className="w-5 h-5 text-indigo-600 animate-pulse" />
                      {formatTimer(examTimeLeft)}
                    </div>
                  )}

                  {!isExamActive ? (
                    <button
                      onClick={() => handleStartExam(selectedExamId)}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl shadow-md text-xs flex items-center gap-2 transition-all"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      Bắt đầu tính giờ thi (50 phút)
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitExam}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-md text-xs flex items-center gap-2 transition-all"
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                      Nộp bài & Chấm điểm
                    </button>
                  )}
                </div>
              </div>

              {/* Exam Picker */}
              <div className={`flex flex-wrap items-center gap-2 ${cardTheme} p-3 rounded-2xl`}>
                <span className="text-xs font-bold text-slate-500 px-2">Chọn đề thi:</span>
                {HOA12_CHUONG1_7_EXAMS.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => {
                      if (isExamActive && !window.confirm('Bạn đang làm bài, bạn có chắc muốn đổi sang đề khác?')) {
                        return;
                      }
                      setSelectedExamId(e.id);
                      setIsExamActive(false);
                      setExamAnswers({});
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedExamId === e.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-200/60 text-slate-700 hover:bg-slate-300'}`}
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
                        className={`${cardTheme} rounded-3xl p-6 md:p-8 space-y-4`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className={`${fontClasses.stem} ${fontClasses.lead} font-normal flex-1`}>
                            <span className="font-extrabold text-base text-indigo-600 dark:text-indigo-400 mr-2 inline">
                              Câu {idx + 1}:
                            </span>
                            <span className="inline" dangerouslySetInnerHTML={{ __html: q.text }} />
                            <span className="ml-2 inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-200/70 text-slate-700 align-middle">
                              Phần {q.part}
                            </span>
                          </div>
                          <div className="shrink-0 pt-0.5">
                            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200">
                              {q.part === 1 ? '0,25 đ' : q.part === 2 ? '1,0 đ' : '0,25 đ'}
                            </span>
                          </div>
                        </div>

                        {q.images && q.images.length > 0 && (
                          <div className="flex flex-wrap gap-2 my-2">
                            {q.images.map((img, i) => (
                              <img key={i} src={img} alt="Đề thi" className="max-h-56 rounded-2xl border border-slate-200 object-contain p-2 bg-white" />
                            ))}
                          </div>
                        )}

                        {/* Part 1 */}
                        {q.part === 1 && q.options && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                            {q.options.map((opt) => {
                              const isSelected = userAnswer === opt.letter;
                              return (
                                <button
                                  key={opt.letter}
                                  onClick={() => setExamAnswers(prev => ({ ...prev, [qId]: opt.letter }))}
                                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 ${isSelected ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold ring-2 ring-indigo-500' : 'border-slate-300 hover:border-slate-400 bg-white text-slate-800'}`}
                                >
                                  <span className={`w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center shrink-0 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                    {opt.letter}
                                  </span>
                                  <div className="flex-1 text-sm pt-0.5" dangerouslySetInnerHTML={{ __html: opt.text }} />
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Part 2 */}
                        {q.part === 2 && q.options && (
                          <div className="space-y-3 pt-2">
                            {q.options.map((opt) => {
                              const curVal = userAnswer?.[opt.letter];
                              return (
                                <div key={opt.letter} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div className="flex items-start gap-2.5 flex-1">
                                    <span className="w-6 h-6 rounded-md bg-white border border-slate-300 text-xs font-black flex items-center justify-center shrink-0 text-slate-700">
                                      {opt.letter.toLowerCase()}
                                    </span>
                                    <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: opt.text }} />
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <button
                                      onClick={() => {
                                        const next = { ...(userAnswer || {}), [opt.letter]: true };
                                        setExamAnswers(prev => ({ ...prev, [qId]: next }));
                                      }}
                                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${curVal === true ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                                    >
                                      Đúng
                                    </button>
                                    <button
                                      onClick={() => {
                                        const next = { ...(userAnswer || {}), [opt.letter]: false };
                                        setExamAnswers(prev => ({ ...prev, [qId]: next }));
                                      }}
                                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${curVal === false ? 'bg-rose-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                                    >
                                      Sai
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Part 3 */}
                        {q.part === 3 && (
                          <div className="pt-2">
                            <input
                              type="text"
                              value={userAnswer || ''}
                              onChange={(e) => setExamAnswers(prev => ({ ...prev, [qId]: e.target.value }))}
                              placeholder="Nhập đáp số vào đây (ví dụ: 4 hoặc 80)..."
                              className="w-full max-w-sm px-4 py-3 rounded-2xl border-2 border-slate-300 text-base font-bold focus:outline-none focus:border-indigo-500 bg-white"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Exam Quick Nav */}
                <div className="hidden lg:block lg:col-span-1">
                  <div className={`${cardTheme} rounded-3xl p-5 sticky top-6 space-y-4`}>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                      <h4 className="text-xs font-black uppercase tracking-wider">
                        Phiếu bài làm
                      </h4>
                      <span className="text-xs font-bold text-slate-500">
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
                            className={`h-9 rounded-xl border text-xs font-black flex items-center justify-center transition-all ${isDone ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'}`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={handleSubmitExam}
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md transition-all mt-4"
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
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
              <div className={`${cardTheme} rounded-3xl p-8 text-center space-y-4 shadow-md`}>
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
                  <Trophy className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black">
                  Kết Quả Đề Kiểm Tra: {lastExamResult.exam.title}
                </h2>
                <div className="text-5xl font-black text-indigo-600 my-2">
                  {lastExamResult.score.totalScore} <span className="text-2xl text-slate-400 font-bold">/ 10</span>
                </div>
                <p className="text-sm font-bold text-slate-600">
                  Xếp loại năng lực: <span className="text-indigo-600 font-extrabold">{getRankTitle(lastExamResult.score.totalScore)}</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-2xl mx-auto border-t border-slate-200/70 text-left">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Phần I (4 lựa chọn)</div>
                    <div className="text-xl font-black text-slate-900 mt-1">
                      {lastExamResult.score.part1Score.toFixed(2)} <span className="text-xs text-slate-400">/ 4,50 đ</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Phần II (Đúng/Sai)</div>
                    <div className="text-xl font-black text-slate-900 mt-1">
                      {lastExamResult.score.part2Score.toFixed(2)} <span className="text-xs text-slate-400">/ 4,00 đ</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Phần III (Trả lời ngắn)</div>
                    <div className="text-xl font-black text-slate-900 mt-1">
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
                    className="px-5 py-2.5 bg-slate-200/60 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs flex items-center gap-2"
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
