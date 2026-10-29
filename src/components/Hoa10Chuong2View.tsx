import { formatChemicalText } from '../utils/chemicalFormulaFormatter';
// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef } from 'react';
// import { createPortal } from 'react-dom';
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
  HOA10_CHUONG2_LESSONS,
  HOA10_CHUONG2_EXAMS,
  HOA10_CHUONG2_HANDBOOK,
  calculateChuong2ExamScore,
  getChuong2UserProgress,
  saveChuong2ExamResult,
  saveChuong2ExamAttempt,
  getChuong2ExamHistory,
  shuffleChuong2Exam,
  getRankTitle,
  Chuong2Exam,
  Chuong2Question,
  Chuong2Lesson,
  Chuong2ExamAttempt
} from '../services/hoa10Chuong2Service';

interface Hoa12Chuong2ViewProps {
  studentName?: string;
  studentGrade?: string;
  onClose?: () => void;
  isTeacher?: boolean;
}

// Bộ tạo âm thanh Web Audio API
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

import {
  getHoa12AccessConfigSync,
  fetchHoa12AccessConfig,
  saveHoa12AccessConfig,
  revokeAllStudentsAccess,
  isChapterLocked, isExamLocked, toggleExamAccess, checkIsStudentAuthorized,
  tryAuthorizeStudentWithPasscode,
  verifyTeacherAdminPin,
  Hoa12AccessConfig
} from '../services/hoa12AccessControlService';

export const Hoa12Chuong2View: React.FC<Hoa12Chuong2ViewProps> = ({
  studentName = 'Học sinh',
  studentGrade = 'Lớp 10',
  onClose,
  isTeacher = false }) => {
  // Xác thực quyền Giáo viên / Quản trị viên đa tầng:
  const isEffectiveTeacher = isTeacher || (typeof window !== 'undefined' && (
    window.location.search.includes('teacher=1') ||
    window.location.search.includes('admin=1') ||
    localStorage.getItem('is_teacher_mode') === 'true' ||
    localStorage.getItem('role') === 'teacher' ||
    localStorage.getItem('role') === 'admin'
  ));
  // ── Access Control & Security Lock (Đồng bộ Cloud & LocalStorage) ──
  const [accessConfig, setAccessConfig] = useState<Hoa12AccessConfig>(() => getHoa12AccessConfigSync());
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => !isChapterLocked("h10_c2", isEffectiveTeacher, getHoa12AccessConfigSync()));
  const [passcodeInput, setPasscodeInput] = useState('');
  const [showTeacherPinModal, setShowTeacherPinModal] = useState(false);
  const [teacherPinInput, setTeacherPinInput] = useState('');
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [newPasscodeForm, setNewPasscodeForm] = useState(() => getHoa12AccessConfigSync().passcode || 'THAYTHO2026');
  const [tempLockEnabled, setTempLockEnabled] = useState(() => getHoa12AccessConfigSync().is_locked);
  const [isRevoking, setIsRevoking] = useState(false);

  // Tự động kiểm tra và đồng bộ trạng thái khóa từ Supabase Cloud
  useEffect(() => {
    let isMounted = true;
    fetchHoa12AccessConfig().then((cfg) => {
      if (!isMounted) return;
      setAccessConfig(cfg);
      setNewPasscodeForm(cfg.passcode || 'THAYTHO2026');
      setTempLockEnabled(cfg.is_locked);
      const auth = !isChapterLocked("h10_c2", isEffectiveTeacher, cfg);
      setIsUnlocked(auth);
    });
    return () => { isMounted = false; };
  }, [isTeacher, isEffectiveTeacher]);

  // ── Phân lập khối lớp: Chỉ Khối 10 hoặc Thầy giáo mới được truy cập ─────────
  const isTargetGrade = useMemo(() => {
    if (isEffectiveTeacher) return true; // Thầy giáo xem được mọi khối
    const g = String(studentGrade || '').toLowerCase().trim();
    return /\b12\b/.test(g) || g.includes('12') || g.includes('khối 12') || g.includes('lớp 12');
  }, [studentGrade, isTeacher]);
  // Navigation
  const [activeTab, setActiveTab] = useState<'overview' | 'handbook' | 'practice' | 'exam' | 'results'>('overview');
  
  // ── GIÁM SÁT THI & CHỐNG GIAN LẬN (CHUYỂN TAB / RỜI MÀN HÌNH) ──────────
  const [tabSwitchViolations, setTabSwitchViolations] = useState<number>(0);
  const [showViolationModal, setShowViolationModal] = useState<boolean>(false);
  const [violationReason, setViolationReason] = useState<string>('');

  // ── ĐẢO CÂU, ĐẢO ĐÁP ÁN, ĐẢO Ý KHI LÀM LẠI ────────────────────────────
  const [isShuffleEnabled, setIsShuffleEnabled] = useState<boolean>(true);
  const [examSessionExam, setExamSessionExam] = useState<Chuong2Exam | null>(null);

  // ── LỊCH SỬ TẤT CẢ CÁC LẦN LÀM BÀI ─────────────────────────────────────
  const [examHistory, setExamHistory] = useState<Chuong2ExamAttempt[]>([]);
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  const [filterResultType, setFilterResultType] = useState<'all' | 'wrong' | 'correct'>('all');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('bai5');
  const [practicePart, setPracticePart] = useState<1 | 2 | 3>(1);

  // Sub-topic & Level filtering
  const [selectedSubTopic, setSelectedSubTopic] = useState<'all' | 'ester' | 'lipid' | 'soap'>('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'NB' | 'TH' | 'VD' | 'VDC'>('all');

  // Mini-set pagination (Chia nhỏ đề thành 10-15 câu để học sinh không mỏi mắt)
  // Mini-set pagination (Chia nhỏ đề thành 10-15 câu để học sinh không mỏi mắt)
  const [selectedSetIndex, setSelectedSetIndex] = useState<number>(0); // 0 = Set 1, -1 = Tất cả
  const STORAGE_KEY_SETS = 'hoa10_c2_set_results';
  const [submittedSets, setSubmittedSets] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('hoa10_c2_submitted_sets');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [setResults, setSetResults] = useState<Record<string, { correct: number; total: number; score: number; completedAt: string }>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SETS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Completed exams state for persistence & sequential unlocking
  const [completedExams, setCompletedExams] = useState<Record<string, { score: number; passed: boolean }>>(() => {
    try {
      const saved = localStorage.getItem('hoa10_c2_completed_exams');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Teacher unlock bypass toggle
  const [teacherBypassLock, setTeacherBypassLock] = useState<boolean>(true);

  // Motivational emotional feedback modal state
  const [motivationModal, setMotivationModal] = useState<{
    isOpen: boolean;
    setName: string;
    correctCount: number;
    totalQuestions: number;
    score: number;
    timeSpent?: string;
    hasNextSet?: boolean;
    onNextSet?: () => void;
    onRetry?: () => void;
    onReviewSolutions?: () => void;
    onOpenHandbook?: () => void;
  }>({
    isOpen: false,
    setName: '',
    correctCount: 0,
    totalQuestions: 0,
    score: 0,
  });

  // Sequential Unlocking Logic: Bộ đề 1 luôn mở. Bộ N chỉ mở khi Bộ N-1 đã hoàn thành (hoặc Thầy mở)
  const isMiniSetUnlocked = (idx: number) => {
    if (idx === 0) return true;
    if (isTeacher && teacherBypassLock) return true;
    const prevKey = `${selectedLessonId}_p${practicePart}_sub${selectedSubTopic}_lvl${selectedLevel}_set${idx - 1}`;
    return Boolean(submittedSets[prevKey] || setResults[prevKey]);
  };

  // Sequential Unlocking Logic: Đề kiểm tra 1 luôn mở. Đề N mở khi Đề N-1 đã hoàn thành
  const isExamUnlocked = (idx: number, examId?: string) => {
    if (isEffectiveTeacher) return true; // QUẢN TRỊ VIÊN LUÔN VÀO ĐƯỢC TẤT CẢ CÁC ĐỀ
    // Bỏ khóa tuần tự cứng nhắc: Tất cả các đề đều mở tự do trừ khi Thầy giáo bấm Khóa với HS
    if (examId && Boolean(accessConfig?.exams?.[examId])) return false;
    return true;
  };

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

  // Practice Lessons (Chỉ những bài có ngân hàng câu hỏi)
  const practiceLessons = useMemo(() => {
    return HOA10_CHUONG2_LESSONS.filter(l => {
      const p = l.practice || (l as any).practiceBank;
      return Boolean(p && ((p.part1?.length || 0) + (p.part2?.length || 0) + (p.part3?.length || 0) > 0));
    });
  }, []);

  const totalPracticeQuestionsCount = useMemo(() => {
    return HOA10_CHUONG2_LESSONS.reduce((acc, l) => {
      const p = l.practice || (l as any).practiceBank || {};
      return acc + (p.part1?.length || 0) + (p.part2?.length || 0) + (p.part3?.length || 0);
    }, 0);
  }, []);

  // Active Lesson (Tự động fallback về bài học có câu hỏi hợp lệ)
  const activeLesson: Chuong2Lesson = useMemo(() => {
    const found = HOA10_CHUONG2_LESSONS.find(l => l.id === selectedLessonId);
    const p = found?.practice || (found as any)?.practiceBank;
    const hasP = Boolean(p && ((p.part1?.length || 0) + (p.part2?.length || 0) + (p.part3?.length || 0) > 0));
    if (found && hasP) return found;

    const firstWithP = HOA10_CHUONG2_LESSONS.find(l => {
      const p2 = l.practice || (l as any).practiceBank;
      return Boolean(p2 && ((p2.part1?.length || 0) + (p2.part2?.length || 0) + (p2.part3?.length || 0) > 0));
    });
    return firstWithP || HOA10_CHUONG2_LESSONS[0];
  }, [selectedLessonId]);

  useEffect(() => {
    if (activeLesson && activeLesson.id !== selectedLessonId) {
      setSelectedLessonId(activeLesson.id);
    }
  }, [activeLesson]);

  // Active Exam
  const activeExam: Chuong2Exam = useMemo(() => {
    if (examSessionExam && examSessionExam.id === selectedExamId) {
      return examSessionExam;
    }
    return HOA10_CHUONG2_EXAMS.find(e => e.id === selectedExamId) || HOA10_CHUONG2_EXAMS[0];
  }, [selectedExamId, examSessionExam]);

  // Timer for Exam (Tối ưu: chỉ chạy khi isExamActive, không re-bind mỗi giây)
  useEffect(() => {
    let timer: any = null;
    if (isExamActive) {
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
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isExamActive]);

  const handleAutoSubmitExam = () => {
    toast('Đã hết 50 phút! Hệ thống đang chấm bài...', { icon: '⏰' });
    handleSubmitExam(false);
  };

  const handleStartExam = (examId: string, shouldShuffle: boolean = isShuffleEnabled) => {
    setSelectedExamId(examId);
    const baseExam = HOA10_CHUONG2_EXAMS.find(e => e.id === examId) || HOA10_CHUONG2_EXAMS[0];
    const sessionExam = shouldShuffle ? shuffleChuong2Exam(baseExam) : baseExam;

    setExamSessionExam(sessionExam);
    setExamAnswers({});
    setExamTimeLeft(50 * 60);
    setTabSwitchViolations(0);
    setShowViolationModal(false);
    setIsExamActive(true);
    setActiveTab('exam');
    
    // Nạp lịch sử các lần làm của đề này
    setExamHistory(getChuong2ExamHistory(examId));

    if (shouldShuffle) {
      toast.success('Bắt đầu làm đề 50 phút (ĐÃ ĐẢO CÂU & ĐẢO ĐÁP ÁN). Chúc em làm bài thật tốt!', { duration: 4000 });
    } else {
      toast.success('Bắt đầu làm đề kiểm tra 50 phút. Chúc em làm bài thật tốt!', { duration: 4000 });
    }
  };

  const handleSubmitExam = (forcedByViolation: boolean = false) => {
    setIsExamActive(false);
    const currentExam = activeExam;
    const scoreResult = calculateChuong2ExamScore(currentExam, examAnswers);
    const durationSec = currentExam.duration * 60 - examTimeLeft;

    // Lưu bản ghi lịch sử lần làm này
    const attempt: Chuong2ExamAttempt = {
      id: `att_${Date.now()}`,
      examId: currentExam.id,
      examTitle: currentExam.title,
      score: scoreResult.totalScore,
      part1Score: scoreResult.part1Score,
      part2Score: scoreResult.part2Score,
      part3Score: scoreResult.part3Score,
      correctCount: scoreResult.totalCorrect,
      totalQuestions: currentExam.questions.length,
      durationSeconds: durationSec,
      tabSwitchCount: tabSwitchViolations,
      autoSubmittedDueToViolation: forcedByViolation,
      date: new Date().toISOString(),
      formattedDate: new Date().toLocaleString('vi-VN', {
        hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric'
      }),
      answers: { ...examAnswers }
    };

    saveChuong2ExamAttempt(attempt);

    setLastExamResult({
      exam: currentExam,
      score: scoreResult,
      answers: { ...examAnswers },
      durationSeconds: durationSec,
      tabSwitchCount: tabSwitchViolations,
      autoSubmittedDueToViolation: forcedByViolation,
      completedAt: new Date().toLocaleTimeString('vi-VN')
    });

    setExamHistory(getChuong2ExamHistory(currentExam.id));

    try { sfx.playComplete(); } catch (e) {}
    setActiveTab('results');

    // Lưu vào completedExams cho lộ trình mở khóa bậc thang
    const newCompleted = {
      ...completedExams,
      [currentExam.id]: {
        score: scoreResult.totalScore,
        passed: scoreResult.totalScore >= 5.0
      }
    };
    setCompletedExams(newCompleted);
    try {
      localStorage.setItem('hoa10_c2_completed_exams', JSON.stringify(newCompleted));
    } catch (e) {}

    // Bật Modal Động viên & Vinh danh cho Đề thi
    const currentExamIndex = HOA10_CHUONG2_EXAMS.findIndex(e => e.id === currentExam.id);
    const hasNextExam = currentExamIndex < HOA10_CHUONG2_EXAMS.length - 1;

    setMotivationModal({
      isOpen: true,
      setName: currentExam.title,
      correctCount: scoreResult.totalCorrect,
      totalQuestions: currentExam.questions.length,
      score: scoreResult.totalScore,
      timeSpent: `${Math.floor(durationSec / 60)} phút ${durationSec % 60} giây`,
      hasNextSet: hasNextExam,
      onNextSet: () => {
        if (hasNextExam) {
          handleStartExam(HOA10_CHUONG2_EXAMS[currentExamIndex + 1].id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      },
      onRetry: () => {
        handleStartExam(currentExam.id, true);
      },
      onReviewSolutions: () => {
        setActiveTab('results');
        window.scrollTo({ top: 500, behavior: 'smooth' });
      },
      onOpenHandbook: () => {
        setActiveTab('handbook');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    if (forcedByViolation) {
      toast.error(`Bài thi bị thu do vi phạm rời màn hình quá 3 lần! Điểm số: ${scoreResult.totalScore}/10 điểm`, { duration: 6000 });
    } else {
      toast.success(`Nộp bài thành công! Điểm số: ${scoreResult.totalScore}/10 điểm`, { duration: 5000 });
    }
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Active Lesson Practice Bank
  const activePractice = useMemo(() => {
    return activeLesson?.practice || (activeLesson as any)?.practiceBank || {};
  }, [activeLesson]);

  // Practice Questions with Sub-topic & Level filtering (Tối ưu memoization)
  const allPracticeQuestions: Chuong2Question[] = useMemo(() => {
    const practice = activeLesson?.practice || (activeLesson as any)?.practiceBank || {};
    if (practicePart === 1) return practice.part1 || [];
    if (practicePart === 2) return practice.part2 || [];
    return practice.part3 || [];
  }, [activeLesson, practicePart]);

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
  const questionSets: Chuong2Question[][] = useMemo(() => {
    const sets: Chuong2Question[][] = [];
    for (let i = 0; i < filteredQuestions.length; i += setSize) {
      sets.push(filteredQuestions.slice(i, i + setSize));
    }
    return sets;
  }, [filteredQuestions, setSize]);

  // Câu hỏi hiển thị hiện tại (theo bộ đề nhỏ đã chọn)
  const currentSetQuestions: Chuong2Question[] = useMemo(() => {
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
    const newSubmitted = { ...submittedSets, [currentSetKey]: true };
    setSubmittedSets(newSubmitted);
    try {
      localStorage.setItem('hoa10_c2_submitted_sets', JSON.stringify(newSubmitted));
    } catch (e) {}

    // Tự động mở lời giải cho các câu trong bộ
    const newRevealed = { ...practiceRevealed };
    currentSetQuestions.forEach(q => {
      newRevealed[q.id] = true;
    });
    setPracticeRevealed(newRevealed);

    // Tính điểm của bộ đề này (quy đổi theo thang điểm 10 chuẩn xác)
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

    const calculatedScore = currentSetQuestions.length > 0
      ? Math.round((correctCount / currentSetQuestions.length) * 10 * 10) / 10
      : 0;

    const newResults = {
      ...setResults,
      [currentSetKey]: {
        correct: correctCount,
        total: currentSetQuestions.length,
        score: calculatedScore,
        completedAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      }
    };
    setSetResults(newResults);
    try {
      localStorage.setItem(STORAGE_KEY_SETS, JSON.stringify(newResults));
    } catch (e) {}

    sfx.playComplete();

    // Mở Modal Động viên & Vinh danh Cảm xúc
    const hasNext = selectedSetIndex < questionSets.length - 1;
    setMotivationModal({
      isOpen: true,
      setName: `Bộ đề số ${selectedSetIndex + 1} (${currentSetQuestions.length} câu)`,
      correctCount,
      totalQuestions: currentSetQuestions.length,
      score: calculatedScore,
      hasNextSet: hasNext,
      onNextSet: () => {
        if (hasNext) {
          setSelectedSetIndex(selectedSetIndex + 1);
          window.scrollTo({ top: 350, behavior: 'smooth' });
        }
      },
      onRetry: () => {
        const resetAns = { ...practiceAnswers };
        const resetRev = { ...practiceRevealed };
        currentSetQuestions.forEach(q => {
          delete resetAns[q.id];
          delete resetRev[q.id];
        });
        setPracticeAnswers(resetAns);
        setPracticeRevealed(resetRev);
        toast('Đã làm mới bộ đề! Chúc em làm bài thật tốt nhé.', { icon: '🔄' });
      },
      onReviewSolutions: () => {
        window.scrollTo({ top: 550, behavior: 'smooth' });
      },
      onOpenHandbook: () => {
        setActiveTab('handbook');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
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

  // Lọc danh sách đề thi hiển thị: Khóa nghĩa là bên học sinh ẨN HẲN
  const visibleExams = useMemo(() => {
    return HOA10_CHUONG2_EXAMS.filter(e => isEffectiveTeacher || !Boolean(accessConfig.exams?.[e.id]));
  }, [isEffectiveTeacher, accessConfig.exams]);

  const availableExams = visibleExams;

  // Main Background based on Eye Comfort Mode
  const bgTheme = eyeComfortMode 
    ? 'bg-[#FAF7EE] text-stone-900' // Kem ấm dịu mắt chống ánh sáng xanh
    : 'bg-slate-100 text-slate-900';

  const cardTheme = eyeComfortMode
    ? 'bg-[#FFFDF9] border-[#E8E2D5] text-stone-900 shadow-sm'
    : 'bg-white border-slate-200 text-slate-900 shadow-sm';

  // Phân lập khối lớp đã được xử lý tối ưu tại Cổng học sinh (StudentPortal)

  // ── MÀN HÌNH KHÓA NẾU CHƯA ĐƯỢC CẤP QUYỀN ──────────────────────────
  if (!isUnlocked && !isEffectiveTeacher) {
    const lockContent = (
      <div className={`min-h-screen ${bgTheme} flex flex-col font-sans antialiased`}>
        <header className={`h-16 ${eyeComfortMode ? 'bg-[#FFFDF9] border-[#E8E2D5]' : 'bg-white border-slate-200'} border-b px-4 md:px-8 flex items-center justify-between shadow-xs shrink-0`}>
          <div className="flex items-center gap-3">
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-200/60 hover:bg-slate-300/60 text-slate-700 transition-colors flex items-center gap-1 text-sm font-bold"
                title="Quay lại"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Quay lại</span>
              </button>
            )}
            <div className="flex items-center gap-2">
              <span className="text-xl">🧪</span>
              <span className="font-extrabold text-base tracking-tight">HÓA HỌC 10 - CHƯƠNG 2</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <Lock className="w-3.5 h-3.5" />
            Đang Khóa Bảo Mật
          </span>
        </header>

        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 my-auto">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-3xl bg-amber-50 border-2 border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
              <Lock className="w-10 h-10" />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                KHO HỌC LIỆU ĐANG TẠM KHÓA
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                Nội dung ôn luyện và đề kiểm tra Chương 2 Hóa 10 đang trong chế độ bảo mật nội bộ. Chỉ Thầy giáo hoặc học sinh được Thầy cấp quyền mới có thể truy cập.
              </p>
            </div>

            {/* Thông báo bảo vệ: Chỉ Trang Chủ mới được cấp quyền */}
            <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-4 sm:p-5 text-left space-y-2.5">
              <div className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>CHẾ ĐỘ BẢO VỆ · CHỈ TRANG CHỦ MỚI CẤP QUYỀN</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed font-medium">
                Theo quy định của Thầy Thọ, học sinh <strong>không thể tự mở khóa hoặc nhập mã tại trang này</strong>. Quyền vào học và làm bài thi chỉ được cấp tập trung bởi Thầy Thọ từ <strong>Trang Chủ Quản Trị Hệ Thống</strong>.
              </p>
              <p className="text-xs text-slate-700 font-bold">
                👉 Em vui lòng liên hệ <strong>Thầy Thọ</strong> để Thầy kích hoạt cấp quyền từ Trang chủ nhé!
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={onClose || (() => window.history.back())}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 hover:from-slate-800 hover:to-indigo-900 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>QUAY VỀ CỔNG THI HỌC SINH</span>
              </button>

              <button
                type="button"
                onClick={() => setShowTeacherPinModal(true)}
                className="w-full py-2.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>👑 Tôi là Thầy Thọ (Đăng nhập Quản Trị)</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Dành cho Thầy giáo:</span>
              <a
                href="/login"
                className="text-indigo-600 hover:text-indigo-800 underline flex items-center gap-1"
              >
                Đăng nhập tài khoản Thầy <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
    return lockContent;
  }

  return (
    <div className={`h-screen ${bgTheme} flex flex-col font-sans overflow-hidden antialiased transition-colors duration-200`}>
      {/* HEADER BAR (TWO-TIER PREMIUM DESIGN) */}
      <header className={`${eyeComfortMode ? 'bg-[#FFFDF9]/95 border-[#E8E2D5]' : 'bg-white/95 border-slate-200'} backdrop-blur-md border-b sticky top-0 z-30 shadow-xs shrink-0 transition-colors`}>
        {/* Tier 1: Branding, Badges & Quick Tools */}
        <div className="px-4 lg:px-8 py-2.5 flex items-center justify-between gap-3 border-b border-slate-100/80">
          <div className="flex items-center gap-3 min-w-0">
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-bold shrink-0"
                title="Quay lại"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Quay lại</span>
              </button>
            )}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-indigo-200 shrink-0">
              <Atom className="w-5 h-5 animate-spin-slow" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 truncate">
                  Hóa Học 10: Chương 2 – Bảng Tuần Hoàn Các Nguyên Tố Hóa Học
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-indigo-500 to-blue-600 text-white uppercase tracking-wider shadow-2xs">
                  BỘ ĐỀ 2025
                </span>
              </div>
              <p className="text-xs text-slate-500 truncate hidden sm:block">
                Hệ thống ôn luyện chuyên sâu: {totalPracticeQuestionsCount} câu hỏi phân loại • {availableExams.length} đề chuẩn Bộ GD&ĐT • Cẩm nang dạng toán
              </p>
            </div>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {isEffectiveTeacher && (
              <div className="flex items-center gap-1.5">
                <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  👑 Thầy giáo
                </span>
                <button
                  onClick={() => {
                    setNewPasscodeForm(currentPasscode);
                    setTempLockEnabled(isLockEnabled);
                    setIsTeacherModalOpen(true);
                  }}
                  className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  title="Quản lý quyền truy cập của học sinh"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Cấp quyền</span>
                </button>
              </div>
            )}

            {/* Eye Comfort Toggle */}
            <button
              onClick={() => {
                const next = !eyeComfortMode;
                setEyeComfortMode(next);
                toast(next ? 'Đã bật chế độ kem ấm dịu mắt ☕' : 'Đã chuyển về tông sáng tiêu chuẩn ☀️', { icon: '👁️' });
              }}
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${eyeComfortMode ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80'}`}
              title="Chế độ tông màu dịu mắt (chống mỏi mắt)"
            >
              <Coffee className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden md:inline">Dịu mắt</span>
            </button>

            {/* Font Size Toggle */}
            <button
              onClick={() => {
                if (fontSizeLevel === 'normal') setFontSizeLevel('large');
                else if (fontSizeLevel === 'large') setFontSizeLevel('xlarge');
                else setFontSizeLevel('normal');
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="Thay đổi cỡ chữ (Chuẩn / To / Rất to)"
            >
              <Type className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{fontSizeLevel === 'normal' ? 'Cỡ chữ' : fontSizeLevel === 'large' ? 'Chữ to' : 'Chữ cực to'}</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                const nm = !isMuted;
                setIsMuted(nm);
                sfx.setMuted(nm);
              }}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 transition-colors"
              title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Exit / Close */}
            {onClose && (
              <button
                onClick={onClose}
                className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-colors"
              >
                Thoát
              </button>
            )}
          </div>
        </div>

        {/* Tier 2: Navigation Segmented Pill Tabs */}
        <div className="px-4 lg:px-8 py-2 overflow-x-auto flex items-center gap-2 scrollbar-none bg-slate-50/50">
          <button
            onClick={() => { setActiveTab('overview'); setIsExamActive(false); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'}`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Tổng quan</span>
          </button>
          <button
            onClick={() => { setActiveTab('handbook'); setIsExamActive(false); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${activeTab === 'handbook' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'}`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Cẩm nang & Dạng toán</span>
          </button>
          <button
            onClick={() => { setActiveTab('practice'); setIsExamActive(false); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${activeTab === 'practice' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'}`}
          >
            <Target className="w-4 h-4" />
            <span>Luyện Đề Nhanh (15 câu)</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${activeTab === 'practice' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
              Lộ trình chặng
            </span>
          </button>
          <button
            onClick={() => { setActiveTab('exam'); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${activeTab === 'exam' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'}`}
          >
            <Clock className="w-4 h-4" />
            <span>{availableExams.length} Đề Thi Chuẩn (50 phút)</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${activeTab === 'exam' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'}`}>
              HOT
            </span>
          </button>
        </div>
      </header>


      {/* BODY CONTENT AREA */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-[1400px] mx-auto">
          {/* ================= TAB 1: OVERVIEW ================= */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Hero Banner */}
              <div 
                className="rounded-3xl p-6 md:p-10 text-white shadow-2xl relative overflow-hidden border border-amber-500/30 group transition-all"
                style={{
                  backgroundImage: `url("/assets/banners/hoa10_chuong2_banner.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center right",
                }}
              >
                {/* Lớp phủ chuyển màu mượt mà: Bên phải sáng tươi rực rỡ, bên trái mờ dịu để chữ đọc sắc nét */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent z-0" />

                <div className="relative z-10 max-w-3xl">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-400/30 backdrop-blur-md uppercase tracking-wider mb-3 inline-flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    ✨ CHƯƠNG TRÌNH MỚI 2025 · LỘ TRÌNH ĐỘT PHÁ CÙNG THẦY THỌ
                  </span>
                  <h2 className="text-2xl md:text-4xl font-black mb-2 leading-tight tracking-tight text-white drop-shadow-md">
                    Chương 2: Bảng Tuần Hoàn Các Nguyên Tố Hóa Học
                  </h2>
                  <p className="text-amber-200/95 text-xs sm:text-sm md:text-base font-semibold italic mb-3 drop-shadow-sm flex items-center gap-2">
                    <span>💡</span> “Nhìn vào Bảng tuần hoàn là thấy ngay tính chất của mọi nguyên tố.”
                  </p>
                  <p className="text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal drop-shadow-sm max-w-2xl">
                    Mỗi ngày rèn luyện <b className="text-amber-300 font-bold">15 phút</b> với bộ đề <b className="text-amber-300 font-bold">12–15 câu ngắn gọn</b>. Nắm vững quy luật biến đổi bán kính, độ âm điện và tính kim loại – phi kim, nhìn vào vị trí là biết ngay tính chất mà không cần học vẹt.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => { setSelectedLessonId('bai5'); setActiveTab('practice'); }}
                      className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 text-sm hover:scale-[1.02] cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-slate-950" />
                      Luyện Bộ Đề Nhỏ (15 câu)
                    </button>
                    <button
                      onClick={() => { if (visibleExams && visibleExams.length > 0) handleStartExam(visibleExams[0].id); else setActiveTab("exam"); }}
                      className="px-5 py-2.5 bg-slate-900/80 hover:bg-slate-900 text-white font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      <Trophy className="w-4 h-4 text-amber-300" />
                      Thi thử {visibleExams.length} Đề chuẩn Bộ
                    </button>
                    <button
                      onClick={() => setActiveTab('handbook')}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/15 backdrop-blur-md transition-all flex items-center gap-2 text-sm hover:scale-[1.02] cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      Cẩm nang lý thuyết & dạng toán
                    </button>
                  </div>
                </div>
              </div>

              
              {/* ================= PHẦN ĐƯA ĐỀ THI LÊN TRANG TỔNG QUAN ================= */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                      <span className="text-amber-500">🏆</span>
                      <span>Bộ Đề Thi Chuẩn Định Kỳ ({visibleExams.length} Đề · 50 Phút)</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-amber-500 to-orange-500 text-white uppercase tracking-wider">
                        CHUẨN MA TRẬN BỘ 2025
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Cấu trúc chuẩn 3 phần: 18 Trắc nghiệm 4 lựa chọn • 4 Đúng/Sai • 6 Trả lời ngắn. Bấm nút vào thi ngay!
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('exam')}
                    className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <span>Xem phòng thi & Lịch sử</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {visibleExams.map((e, idx) => {
                    const isUnlocked = isExamUnlocked(idx);
                    const history = getChuong2ExamHistory(e.id);
                    const bestScore = history && history.length > 0
                      ? Math.max(...history.map(h => h.score))
                      : (completedExams[e.id]?.score);
                    const isCompleted = bestScore !== undefined;

                    return (
                      <div
                        key={`overview_exam_${e.id}`}
                        className={`${cardTheme} rounded-2xl p-5 border transition-all flex flex-col justify-between gap-3 relative overflow-hidden ${
                          !isUnlocked
                            ? 'border-dashed border-slate-300 bg-slate-50/70 opacity-80'
                            : 'border-slate-200/90 hover:border-indigo-400 hover:shadow-lg shadow-xs'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase">
                              {e.badge || `Đề ${idx + 1}`}
                            </span>
                            {isCompleted ? (
                              <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 flex items-center gap-1">
                                <Trophy className="w-3 h-3 text-emerald-600" />
                                {bestScore.toFixed(1)}đ
                              </span>
                            ) : (
                              <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                                <Clock className="w-3 h-3 text-indigo-500" /> 50p
                              </span>
                            )}
                          </div>

                          <h4 className="text-sm font-extrabold text-slate-900 leading-snug line-clamp-2 mb-1">
                            {e.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mb-2">
                            🎯 {e.topic}
                          </p>

                          <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-xl flex items-center justify-between">
                            <span>Quy mô:</span>
                            <span className="font-bold text-slate-700">28 câu (40 ý)</span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            if (isUnlocked) {
                              handleStartExam(e.id);
                            } else {
                              toast.error('Đề này đang khóa theo lộ trình!');
                            }
                          }}
                          className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer ${
                            !isUnlocked
                              ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                              : isCompleted
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                          }`}
                        >
                          {!isUnlocked ? (
                            <>
                              <Lock className="w-3.5 h-3.5" />
                              <span>Khóa</span>
                            </>
                          ) : isCompleted ? (
                            <>
                              <RotateCcw className="w-3.5 h-3.5" />
                              <span>Thi lại ({bestScore.toFixed(1)}đ)</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>Vào thi ngay</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>


              {/* Main Lessons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {HOA10_CHUONG2_LESSONS.map((l) => {
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
                            const p = l.practice || (l as any).practiceBank || {};
                            const hasP = Boolean((p.part1?.length || 0) + (p.part2?.length || 0) + (p.part3?.length || 0) > 0);
                            if (!hasP) {
                              setActiveTab('exam');
                            } else {
                              setSelectedLessonId(l.id);
                              setActiveTab('practice');
                            }
                          }}
                          className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all text-center cursor-pointer"
                        >
                          {(l.practice?.part1?.length || 0) === 0 ? `Vào phòng thi ${availableExams.length} Đề` : 'Vào luyện bộ đề nhỏ'}
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
                  {HOA10_CHUONG2_LESSONS.map((l) => (
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
                  <div className={`${fontClasses.opt} ${fontClasses.lead} space-y-4`}>
                    <div 
  className="prose max-w-none text-slate-700 leading-relaxed space-y-4"
  dangerouslySetInnerHTML={{ __html: formatChemicalText(activeLesson.theory || `<p>${activeLesson.description || activeLesson.title}</p>`) }}
/>
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
                          <h4 className="text-base font-bold text-indigo-950">
                            {mf.title}
                          </h4>
                        </div>
                        <div className={`bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 ${fontClasses.opt} ${fontClasses.lead} text-slate-800 overflow-x-auto`} dangerouslySetInnerHTML={{ __html: formatChemicalText(mf.method) }} />

                        <div className="space-y-4 pt-2">
                          {mf.examples.map((ex) => (
                            <div key={ex.number} className="p-5 md:p-6 rounded-3xl border border-slate-200/90 bg-white space-y-4 shadow-sm hover:shadow-md transition-all">
                              <div className="flex items-start gap-3">
                                <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-black text-xs sm:text-sm shadow-sm tracking-wide shrink-0 select-none">
                                  Câu {ex.number}
                                </span>
                                <div 
                                  className={`${fontClasses.stem} ${fontClasses.lead} font-medium text-slate-900 flex-1 pt-0.5`} 
                                  dangerouslySetInnerHTML={{ 
                                    __html: ex.text.replace(/^(?:<[^>]+>|\s)*(?:Ví\s*dụ|Câu)(?:<[^>]+>|[\s\d\.\:\-\–\,])*(?=[A-ZÀ-Ỹ])/i, '') 
                                  }} 
                                />
                              </div>
                              {ex.images && ex.images.length > 0 && (
                                <div className="my-4 flex flex-wrap justify-center items-center gap-4">
                                  {ex.images.map((img, i) => (
                                    <div key={i} className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow max-w-full flex flex-col items-center">
                                      <img key={i} src={img} alt="Hình minh họa" className="max-h-64 sm:max-h-72 w-auto object-contain rounded-xl" />
                                      <span className="text-[11px] font-semibold text-slate-400 mt-2">Hình minh họa phổ khối lượng / cấu trúc phân tử</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {ex.solution && (
                                <div className="rounded-2xl border border-emerald-200/90 overflow-hidden shadow-2xs">
                                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Hướng dẫn giải chi tiết & Phương pháp tư duy</span>
                                  </div>
                                  <div className={`bg-emerald-50/40 p-4 sm:p-5 ${fontClasses.opt} ${fontClasses.lead} text-slate-800 space-y-3`} dangerouslySetInnerHTML={{ __html: formatChemicalText(ex.solution) }} />
                                </div>
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
              {/* Filter & Mini-set Control Card (EdTech Pro Style) */}
              <div className={`${cardTheme} p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm border border-slate-200/90`}>
                {/* TẦNG 1: CHỌN BÀI HỌC (SEGMENTED TABS) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {practiceLessons.map((l) => {
                    const isSel = selectedLessonId === l.id;
                    return (
                      <button
                        key={l.id}
                        onClick={() => {
                          setSelectedLessonId(l.id);
                          setSelectedSubTopic('all');
                          setSelectedLevel('all');
                          setSelectedSetIndex(0);
                        }}
                        className={`p-3.5 rounded-2xl text-left transition-all border flex items-center justify-between gap-3 cursor-pointer ${
                          isSel
                            ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-400 shadow-xs ring-1 ring-indigo-300'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                            isSel ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {l.lessonNumber}
                          </span>
                          <div>
                            <h3 className={`text-sm font-bold leading-tight ${isSel ? 'text-indigo-950 font-black' : 'text-slate-800'}`}>
                              {l.title}
                            </h3>
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                              {l.description}
                            </p>
                          </div>
                        </div>
                        {isSel && (
                          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* TẦNG 2: THANH LỌC ĐỊNH DẠNG & MỨC ĐỘ GỌN GÀNG (1 DÒNG DUY NHẤT) */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-3 border-t border-slate-200/70">
                  {/* Nhóm 1: Định dạng câu hỏi (Pill Switcher) */}
                  <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                    <button
                      onClick={() => { setPracticePart(1); setSelectedSetIndex(0); }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        practicePart === 1 ? 'bg-white text-indigo-700 shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Phần I: 4 Lựa chọn ({activePractice.part1?.length || 0})
                    </button>
                    <button
                      onClick={() => { setPracticePart(2); setSelectedSetIndex(0); }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        practicePart === 2 ? 'bg-white text-indigo-700 shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Phần II: Đúng / Sai ({activePractice.part2?.length || 0})
                    </button>
                    <button
                      onClick={() => { setPracticePart(3); setSelectedSetIndex(0); }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        practicePart === 3 ? 'bg-white text-indigo-700 shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Phần III: Trả lời ngắn ({activePractice.part3?.length || 0})
                    </button>
                  </div>

                  {/* Nhóm 2: Bộ lọc Mức độ & Chủ đề con (ẨN NÚT 0 CÂU) */}
                  <div className="flex items-center gap-2 flex-wrap">
                    

                    {/* Levels: CHỈ HIỂN THỊ MỨC ĐỘ NÀO CÓ SỐ CÂU > 0 */}
                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
                      <button
                        onClick={() => { setSelectedLevel('all'); setSelectedSetIndex(0); }}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                          selectedLevel === 'all' ? 'bg-white text-slate-900 shadow-xs font-black' : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Tất cả ({filteredQuestions.length})
                      </button>
                      {levelStats.NB > 0 && (
                        <button
                          onClick={() => { setSelectedLevel('NB'); setSelectedSetIndex(0); }}
                          className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                            selectedLevel === 'NB' ? 'bg-emerald-600 text-white shadow-xs font-black' : 'text-emerald-700 hover:bg-emerald-50'
                          }`}
                        >
                          🟢 NB ({levelStats.NB})
                        </button>
                      )}
                      {levelStats.TH > 0 && (
                        <button
                          onClick={() => { setSelectedLevel('TH'); setSelectedSetIndex(0); }}
                          className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                            selectedLevel === 'TH' ? 'bg-sky-600 text-white shadow-xs font-black' : 'text-sky-700 hover:bg-sky-50'
                          }`}
                        >
                          🔵 TH ({levelStats.TH})
                        </button>
                      )}
                      {levelStats.VD > 0 && (
                        <button
                          onClick={() => { setSelectedLevel('VD'); setSelectedSetIndex(0); }}
                          className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                            selectedLevel === 'VD' ? 'bg-amber-600 text-white shadow-xs font-black' : 'text-amber-700 hover:bg-amber-50'
                          }`}
                        >
                          🟡 VD ({levelStats.VD})
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* TẦNG 3: LỘ TRÌNH CHẶNG HỌC (MILESTONE STEPS) */}
                <div className="pt-3 border-t border-slate-200/70">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-800 flex items-center gap-1.5 uppercase tracking-wider">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        Lộ trình chặng luyện tập (Mỗi chặng {setSize} câu ~ 15 phút):
                      </span>
                      <span className="text-[11px] text-slate-400 hidden sm:inline">
                        Hoàn thành lần lượt để mở chặng tiếp theo
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isEffectiveTeacher && (
                        <button
                          onClick={() => {
                            setTeacherBypassLock(!teacherBypassLock);
                            toast.success(!teacherBypassLock ? 'Thầy đã mở khóa tất cả chặng!' : 'Đã khôi phục chế độ khóa lộ trình', { icon: '👑' });
                          }}
                          className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1 border cursor-pointer ${
                            teacherBypassLock ? 'bg-amber-500 text-white border-amber-600' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                          }`}
                        >
                          {teacherBypassLock ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3 text-amber-600" />}
                          <span>{teacherBypassLock ? 'Mở khóa tất cả (Thầy)' : 'Mở khóa (Thầy)'}</span>
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedSetIndex(selectedSetIndex === -1 ? 0 : -1)}
                        className="text-xs font-bold text-slate-500 hover:text-indigo-600 underline cursor-pointer"
                      >
                        {selectedSetIndex === -1 ? 'Thu gọn thành 15 câu' : 'Xem toàn bộ'}
                      </button>
                    </div>
                  </div>

                  {/* Milestone Grid: Compact & Balanced */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
                    {questionSets.map((s, idx) => {
                      const isSelected = selectedSetIndex === idx;
                      const startQ = idx * setSize + 1;
                      const endQ = idx * setSize + s.length;
                      const sKey = `${selectedLessonId}_p${practicePart}_sub${selectedSubTopic}_lvl${selectedLevel}_set${idx}`;
                      const isDone = Boolean(submittedSets[sKey] || setResults[sKey]);
                      const setResult = setResults[sKey];
                      const isUnlocked = isMiniSetUnlocked(idx);

                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            if (!isUnlocked) {
                              toast.error(`🔒 Hãy hoàn thành Chặng ${idx} trước để mở khóa Chặng ${idx + 1} nhé!`, { icon: '⏳' });
                              return;
                            }
                            setSelectedSetIndex(idx);
                          }}
                          className={`p-2.5 rounded-2xl text-center transition-all flex flex-col items-center justify-between gap-1.5 border cursor-pointer relative ${
                            !isUnlocked
                              ? 'bg-slate-50 border-slate-200/80 text-slate-400 opacity-60 cursor-not-allowed'
                              : isSelected
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-200 -translate-y-0.5'
                              : isDone
                              ? 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100 shadow-2xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-slate-50 shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            {!isUnlocked && <Lock className="w-3 h-3 text-slate-400 shrink-0" />}
                            <span className="text-xs font-black">Chặng {idx + 1}</span>
                          </div>
                          <span className={`text-[10px] font-semibold ${isSelected ? 'text-indigo-100' : 'text-slate-400'}`}>
                            Câu {startQ}–{endQ}
                          </span>
                          {isDone ? (
                            <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                              isSelected ? 'bg-white/20 text-white' : 'bg-emerald-200 text-emerald-900'
                            }`}>
                              {setResult?.score !== undefined ? `${setResult.score.toFixed(1)}đ` : '✓ Xong'}
                            </span>
                          ) : (
                            <span className={`text-[9px] font-bold ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                              15 phút
                            </span>
                          )}
                        </button>
                      );
                    })}
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
                                <span className="inline" dangerouslySetInnerHTML={{ __html: formatChemicalText(q.text) }} />
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
                              <div className="my-4 flex flex-wrap justify-center items-center gap-4">
                                {q.images.map((img, i) => (
                                  <div key={i} className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow max-w-full flex flex-col items-center">
                                    <img
                                      key={i}
                                      src={img}
                                      alt="Hình câu hỏi"
                                      className="max-h-64 sm:max-h-72 w-auto object-contain rounded-xl"
                                    />
                                  </div>
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
                                        {opt.text && <span dangerouslySetInnerHTML={{ __html: formatChemicalText(opt.text) }} />}
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
                                        <div className={`${fontClasses.opt} leading-relaxed`} dangerouslySetInnerHTML={{ __html: formatChemicalText(opt.text) }} />
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
                                <div dangerouslySetInnerHTML={{ __html: formatChemicalText(q.explanation) }} />
                              {q.explanationImages && q.explanationImages.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {q.explanationImages.map((img: string, i: number) => (
                                    <img key={i} src={img} alt="Hình giải thích" className="max-h-56 rounded-lg border border-amber-200 bg-white p-1 object-contain" />
                                  ))}
                                </div>
                              )}
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
              {!isExamActive ? (
                /* ================= SẢNH PHÒNG THI 7 ĐỀ (EXAM LOBBY) ================= */
                <div className="space-y-6 animate-fade-in">
                  {/* Lobby Hero Banner */}
                  <div className={`${cardTheme} p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden`}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs">
                            ⚡ CHUẨN MA TRẬN BỘ GD&ĐT 2025
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            7 Đề Tổng Hợp · 50 phút / Đề · 28 câu (40 lệnh hỏi)
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          Phòng Luyện Thi Thực Chiến: Chương 2 (Bảng Tuần Hoàn Các Nguyên Tố Hóa Học)
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                          Hệ thống 7 đề thi định kỳ chuẩn xác theo cấu trúc 3 phần mới nhất: 
                          <b className="text-indigo-600"> 18 câu Trắc nghiệm 4 lựa chọn (4,5đ)</b>, 
                          <b className="text-indigo-600"> 4 câu Đúng/Sai (4,0đ)</b> và 
                          <b className="text-indigo-600"> 6 câu Trả lời ngắn (1,5đ)</b>. 
                          Hệ thống tự động chấm điểm, phân tích ma trận kiến thức và cung cấp lời giải chi tiết từng bước.
                        </p>
                      </div>

                      {/* Quick Settings & Actions */}
                      <div className="flex items-center gap-2.5 flex-wrap shrink-0">
                        <label className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-700 cursor-pointer select-none transition-colors">
                          <input
                            type="checkbox"
                            checked={isShuffleEnabled}
                            onChange={(e) => setIsShuffleEnabled(e.target.checked)}
                            className="w-4 h-4 text-indigo-600 rounded"
                          />
                          <Shuffle className="w-4 h-4 text-indigo-600" />
                          <span>Đảo câu & đáp án</span>
                        </label>

                        <button
                          onClick={() => {
                            setExamHistory(getChuong2ExamHistory(selectedExamId));
                            setShowHistoryModal(true);
                          }}
                          className="px-3.5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
                          title="Xem lịch sử các lần thi trước"
                        >
                          <Clock className="w-4 h-4 text-slate-600" />
                          <span>Lịch sử bài thi</span>
                        </button>

                        {isEffectiveTeacher && (
                          <button
                            onClick={() => {
                              setTeacherBypassLock(!teacherBypassLock);
                              toast.success(!teacherBypassLock ? 'Thầy đã mở khóa tất cả đề thi!' : 'Đã khôi phục chế độ khóa theo lộ trình học sinh', { icon: '👑' });
                            }}
                            className={`px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 border cursor-pointer ${
                              teacherBypassLock
                                ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                            }`}
                          >
                            {teacherBypassLock ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5 text-amber-600" />}
                            <span>{teacherBypassLock ? 'Mở khóa tất cả đề (Thầy)' : 'Mở khóa hết (Thầy)'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 7 Exam Cards Grid - LƯỚI 7 ĐỀ THI HIỆN ĐẠI & SANG TRỌNG */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleExams.length === 0 ? (
                      <div className="col-span-full py-16 px-6 text-center bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto text-xl font-bold">
                          🔒
                        </div>
                        <h4 className="text-base font-bold text-slate-800">Các đề thi hiện đang tạm ẩn</h4>
                        <p className="text-xs text-slate-500 max-w-md mx-auto">
                          Thầy giáo hiện đang tạm thời ẩn danh sách đề thi của chuyên đề này đối với học sinh. Vui lòng quay lại sau!
                        </p>
                      </div>
                    ) : (
                      visibleExams.map((e, idx) => {
                      const isUnlocked = isExamUnlocked(idx);
                      const history = getChuong2ExamHistory(e.id);
                      const bestScore = history && history.length > 0
                        ? Math.max(...history.map(h => h.score))
                        : (completedExams[e.id]?.score);
                      const isCompleted = bestScore !== undefined;

                      return (
                        <div
                          key={e.id}
                          className={`${cardTheme} rounded-3xl p-6 border transition-all flex flex-col justify-between gap-5 relative overflow-hidden ${
                            !isUnlocked
                              ? 'border-dashed border-slate-300 bg-slate-50/70 opacity-80'
                              : 'border-slate-200/90 hover:border-indigo-400 hover:shadow-xl shadow-sm'
                          }`}
                        >
                          <div>
                            {/* Card Top: Badge & Status */}
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <div className="flex items-center gap-2">
                                <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                                  {idx + 1}
                                </span>
                                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase">
                                  {e.badge}
                                </span>
                              </div>

                              {isCompleted ? (
                                <span className="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 flex items-center gap-1 border border-emerald-200">
                                  <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                                  {bestScore.toFixed(1)} điểm
                                </span>
                              ) : !isUnlocked ? (
                                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-500 flex items-center gap-1">
                                  <Lock className="w-3.5 h-3.5" />
                                  Khóa lộ trình
                                </span>
                              ) : (
                                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                  Sẵn sàng thi
                                </span>
                              )}
                            </div>

                            {/* Title & Topic */}
                            <h3 className="text-base font-extrabold text-slate-900 leading-snug mb-1 line-clamp-2">
                              {e.title}
                            </h3>
                            <p className="text-xs text-indigo-600 font-semibold mb-3">
                              🎯 {e.topic}
                            </p>

                            {/* Details Specs Box */}
                            <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
                              <div className="flex items-center justify-between">
                                <span className="text-slate-500">Thời gian làm bài:</span>
                                <span className="font-bold text-slate-800 flex items-center gap-1">
                                  <Clock className="w-3.5 h-3.5 text-indigo-500" /> 50 phút
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-500">Quy mô câu hỏi:</span>
                                <span className="font-bold text-slate-800">28 câu (40 lệnh hỏi)</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-500">Cấu trúc 3 phần:</span>
                                <span className="font-bold text-indigo-700">18 TN · 4 Đ/S · 6 Ngắn</span>
                              </div>
                            </div>
                          </div>

                          {/* Nút phân quyền Quản trị: Mở / Khóa đề thi cho học sinh */}
                          {isEffectiveTeacher && (
                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={(ev) => {
                                  ev.stopPropagation();
                                  toggleExamAccess(e.id).then((newCfg) => {
                                    setAccessConfig({ ...newCfg });
                                    const nowLocked = Boolean(newCfg.exams?.[e.id]);
                                    toast.success(nowLocked ? `🔒 Đã KHÓA ${e.title} với học sinh!` : `🟢 Đã MỞ ${e.title} cho học sinh!`, { icon: nowLocked ? '🔒' : '🟢' });
                                  });
                                }}
                                className={`w-full py-1.5 px-3 rounded-xl text-xs font-black border transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                                  Boolean(accessConfig.exams?.[e.id])
                                    ? 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100'
                                    : 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                                }`}
                              >
                                {Boolean(accessConfig.exams?.[e.id]) ? '🔒 Đang Khóa Với Học Sinh (Bấm để Mở)' : '🟢 Đang Mở Cho Học Sinh (Bấm để Khóa)'}
                              </button>
                            </div>
                          )}

                          {/* Action Button */}
                          <div className="pt-2 flex items-center gap-2">
                            {isUnlocked ? (
                              <>
                                <button
                                  onClick={() => handleStartExam(e.id, isShuffleEnabled)}
                                  className="flex-1 py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-indigo-200 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                                >
                                  <Play className="w-4 h-4 fill-white" />
                                  <span>{isCompleted ? 'Thi Lại Đề Này' : 'Vào Thi (50 phút)'}</span>
                                </button>

                                {isCompleted && (
                                  <button
                                    onClick={() => {
                                      setSelectedExamId(e.id);
                                      setExamHistory(getChuong2ExamHistory(e.id));
                                      setShowHistoryModal(true);
                                    }}
                                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold transition-colors cursor-pointer"
                                    title="Xem lịch sử làm bài"
                                  >
                                    <Clock className="w-4 h-4" />
                                  </button>
                                )}
                              </>
                            ) : (
                              <button
                                onClick={() => {
                                  const prevBadge = HOA10_CHUONG2_EXAMS[idx - 1]?.badge || `Đề ${idx}`;
                                  toast.error(`🔒 Hãy hoàn thành ${prevBadge} trước để mở khóa đề này nhé! Cùng Thầy Thọ chinh phục từng đề nào!`, {
                                    icon: '⏳',
                                    duration: 4000
                                  });
                                }}
                                className="w-full py-3 px-4 bg-slate-100 text-slate-400 font-bold text-xs rounded-xl border border-dashed border-slate-300 flex items-center justify-center gap-2 cursor-not-allowed"
                              >
                                <Lock className="w-4 h-4" />
                                <span>Hoàn thành Đề {idx} để mở khóa</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    }))}
                  </div>
                </div>
              ) : (
                /* ================= PHÒNG THI TẬP TRUNG (ACTIVE EXAM WORKSPACE) ================= */
                <div className="space-y-6 animate-fade-in">
                  {/* Sticky Active Exam Header */}
                  <div className={`${cardTheme} p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md border-2 border-indigo-200 sticky top-2 z-30`}>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1.5 rounded-xl text-xs font-black bg-indigo-600 text-white shadow-xs">
                        {activeExam.badge}
                      </span>
                      <div>
                        <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                          {activeExam.title}
                        </h2>
                        <span className="text-xs text-slate-500">
                          Đã làm: <b className="text-indigo-600 font-black">{Object.keys(examAnswers).length}</b> / {activeExam.questions.length} câu
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 flex-wrap">
                      {/* Timer */}
                      <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-300 px-4 py-2 rounded-xl text-indigo-950 font-mono font-black text-lg shadow-2xs">
                        <Clock className="w-5 h-5 text-indigo-600 animate-pulse" />
                        <span>{formatTimer(examTimeLeft)}</span>
                      </div>

                      {/* Proctoring */}
                      <div className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs border ${
                        tabSwitchViolations === 0 ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-300 animate-pulse'
                      }`}>
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Giám sát: {tabSwitchViolations === 0 ? 'Tốt' : `${tabSwitchViolations}/3`}</span>
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={() => handleSubmitExam(false)}
                        className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black rounded-xl shadow-md text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Nộp bài & Chấm điểm</span>
                      </button>

                      {/* Exit Exam Button */}
                      <button
                        onClick={() => {
                          if (window.confirm('Em có chắc muốn rời phòng thi? Bài làm hiện tại sẽ bị hủy và thời gian thi sẽ dừng lại.')) {
                            setIsExamActive(false);
                            setExamAnswers({});
                          }
                        }}
                        className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl text-xs transition-colors"
                      >
                        Rời phòng thi
                      </button>
                    </div>
                  </div>

                  {/* Exam Questions Container */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-6">
                  {activeExam.questions.map((q, idx) => {
                    const qId = q.id;
                    const userAnswer = examAnswers[qId];
                    const isFirstOfPart = idx === 0 || q.part !== activeExam.questions[idx - 1].part;

                    return (
                      <React.Fragment key={qId}>
                        {isFirstOfPart && (
                          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 md:p-6 shadow-md border-l-4 border-indigo-500 my-6 first:mt-0">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/15 pb-3">
                              <div className="flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-black text-sm shadow-sm shrink-0">
                                  {q.part === 1 ? "I" : q.part === 2 ? "II" : "III"}
                                </span>
                                <div>
                                  <h3 className="text-base md:text-lg font-black tracking-wide text-white">
                                    {q.part === 1 && "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN"}
                                    {q.part === 2 && "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI"}
                                    {q.part === 3 && "PHẦN III. CÂU TRẮC NGHIỆM YÊU CẦU TRẢ LỜI NGẮN"}
                                  </h3>
                                  <span className="text-[11px] font-semibold text-indigo-300">
                                    Chuẩn cấu trúc định dạng đề thi Kỳ thi tốt nghiệp THPT từ năm 2025 - Bộ GD&ĐT
                                  </span>
                                </div>
                              </div>
                              <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 self-start md:self-auto shrink-0">
                                {q.part === 1 && "18 câu • 4,5 điểm (0,25 đ/câu)"}
                                {q.part === 2 && "4 câu • 4,0 điểm (Tối đa 1,0 đ/câu)"}
                                {q.part === 3 && "6 câu • 1,5 điểm (0,25 đ/câu)"}
                              </span>
                            </div>
                            <p className="text-xs md:text-sm text-indigo-100/90 pt-3 leading-relaxed">
                              {q.part === 1 && "Thí sinh trả lời từ câu 1 đến câu 18. Mỗi câu hỏi thí sinh chỉ chọn một phương án."}
                              {q.part === 2 && "Thí sinh trả lời từ câu 19 đến câu 22. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai."}
                              {q.part === 3 && "Thí sinh trả lời từ câu 23 đến câu 28. Thí sinh điền kết quả vào ô trả lời tương ứng."}
                            </p>
                            {q.part === 2 && (
                              <div className="mt-2.5 text-[11px] text-indigo-200/90 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10 flex flex-wrap gap-x-5 gap-y-1">
                                <span>• Đúng 1 ý: <strong className="text-white">0,10 điểm</strong></span>
                                <span>• Đúng 2 ý: <strong className="text-white">0,25 điểm</strong></span>
                                <span>• Đúng 3 ý: <strong className="text-white">0,50 điểm</strong></span>
                                <span>• Đúng cả 4 ý: <strong className="text-emerald-300">1,00 điểm</strong></span>
                              </div>
                            )}
                          </div>
                        )}

                        <div
                          id={`exam-q-${qId}`}
                          className={`${cardTheme} rounded-3xl p-6 md:p-8 space-y-4`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className={`${fontClasses.stem} ${fontClasses.lead} font-normal flex-1`}>
                              <span className="font-extrabold text-base text-indigo-600 dark:text-indigo-400 mr-2 inline">
                                Câu {idx + 1}:
                              </span>
                              <span className="inline" dangerouslySetInnerHTML={{ __html: formatChemicalText(q.text) }} />
                            </div>
                          <div className="shrink-0 pt-0.5">
                            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200">
                              {q.part === 1 ? '0,25 đ' : q.part === 2 ? '1,0 đ' : '0,25 đ'}
                            </span>
                          </div>
                        </div>

                        {q.images && q.images.length > 0 && (
                          <div className="my-4 flex flex-wrap justify-center items-center gap-4">
                            {q.images.map((img, i) => (
                              <div key={i} className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow max-w-full flex flex-col items-center">
                                <img key={i} src={img} alt="Đề thi" className="max-h-64 sm:max-h-72 w-auto object-contain rounded-xl" />
                              </div>
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
                                  <div className="flex-1 text-sm pt-0.5">
                                    <div dangerouslySetInnerHTML={{ __html: formatChemicalText(opt.text) }} />
                                    {opt.image && (
                                      <img src={opt.image} alt={opt.letter} className="max-h-28 mt-2 rounded-lg border border-slate-200 bg-white object-contain" />
                                    )}
                                  </div>
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
                                    <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: formatChemicalText(opt.text) }} />
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
                    </React.Fragment>
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
            </div>
          )}

          {activeTab === 'results' && lastExamResult && (
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
              {/* Scorecard Hero */}
              <div className={`${cardTheme} rounded-3xl p-6 sm:p-8 text-center space-y-5 shadow-lg border-2 border-indigo-100`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center mx-auto shadow-md shadow-amber-200">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-800 uppercase tracking-wider inline-block mb-1">
                    BÁO CÁO KẾT QUẢ THI CHÍNH THỨC
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {lastExamResult.exam.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Thời gian làm bài: {Math.floor((lastExamResult.durationSeconds || 0) / 60)} phút {(lastExamResult.durationSeconds || 0) % 60} giây • Nộp lúc: {lastExamResult.completedAt}
                  </p>
                </div>

                {/* Score Circle & Title */}
                <div className="py-2">
                  <div className="text-6xl font-black text-indigo-600 tracking-tight">
                    {lastExamResult.score.totalScore.toFixed(2)} <span className="text-2xl text-slate-400 font-bold">/ 10</span>
                  </div>
                  <div className="mt-2 text-sm font-extrabold text-slate-700 flex items-center justify-center gap-2">
                    <span>Xếp loại năng lực:</span>
                    <span className="px-3 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-black">
                      {getRankTitle(lastExamResult.score.totalScore * 400)}
                    </span>
                  </div>
                </div>

                {/* Proctoring Status Banner */}
                <div className={`p-3.5 rounded-2xl border flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm font-bold ${lastExamResult.tabSwitchCount === 0 ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-rose-50/90 border-rose-300 text-rose-950'}`}>
                  <div className="flex items-center gap-2">
                    {lastExamResult.tabSwitchCount === 0 ? (
                      <>
                        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Giám sát thi: Hoàn toàn trung thực, không rời màn hình!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        <span>Hệ thống ghi nhận: {lastExamResult.tabSwitchCount} lần rời màn hình / chuyển tab</span>
                      </>
                    )}
                  </div>
                  {lastExamResult.autoSubmittedDueToViolation && (
                    <span className="px-2.5 py-0.5 rounded-lg bg-rose-600 text-white text-xs font-black">
                      Tự động thu bài do vi phạm 3 lần
                    </span>
                  )}
                </div>

                {/* 3 Parts Score Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-left">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Phần I (4 lựa chọn)</div>
                    <div className="text-xl font-black text-slate-900 mt-1">
                      {lastExamResult.score.part1Score.toFixed(2)} <span className="text-xs text-slate-400">/ 4,50 đ</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Đúng {lastExamResult.score.p1Correct} / 18 câu</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Phần II (Đúng/Sai)</div>
                    <div className="text-xl font-black text-slate-900 mt-1">
                      {lastExamResult.score.part2Score.toFixed(2)} <span className="text-xs text-slate-400">/ 4,00 đ</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">4 câu lệnh (16 mệnh đề con)</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Phần III (Trả lời ngắn)</div>
                    <div className="text-xl font-black text-slate-900 mt-1">
                      {lastExamResult.score.part3Score.toFixed(2)} <span className="text-xs text-slate-400">/ 1,50 đ</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Đúng {lastExamResult.score.p3Correct} / 6 câu</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-3 pt-4 flex-wrap">
                  <button
                    onClick={() => handleStartExam(lastExamResult.exam.id, true)}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-extrabold rounded-2xl shadow-md shadow-indigo-200 text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Làm lại đề này (Đảo câu & đáp án)
                  </button>
                  <button
                    onClick={() => {
                      setExamHistory(getChuong2ExamHistory(lastExamResult.exam.id));
                      setShowHistoryModal(true);
                    }}
                    className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-extrabold rounded-2xl text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Clock className="w-4 h-4 text-slate-600" />
                    Lịch sử các lần làm ({examHistory.length} lần)
                  </button>
                  <button
                    onClick={() => setActiveTab('exam')}
                    className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-extrabold rounded-2xl text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all"
                  >
                    Chọn đề khác
                  </button>
                </div>
              </div>

              {/* Detailed Question Review */}
              <div className={`${cardTheme} rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                      Chi Tiết Từng Câu Hỏi & Lời Giải Chuyên Sâu
                    </h3>
                    <p className="text-xs text-slate-500">Xem lại đáp án đã chọn và học phương pháp tư duy</p>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                    <button
                      onClick={() => setFilterResultType('all')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${filterResultType === 'all' ? 'bg-white text-indigo-700 shadow-2xs font-extrabold' : 'text-slate-600'}`}
                    >
                      Tất cả (28)
                    </button>
                    <button
                      onClick={() => setFilterResultType('wrong')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${filterResultType === 'wrong' ? 'bg-white text-rose-700 shadow-2xs font-extrabold' : 'text-slate-600'}`}
                    >
                      Chỉ câu sai
                    </button>
                    <button
                      onClick={() => setFilterResultType('correct')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${filterResultType === 'correct' ? 'bg-white text-emerald-700 shadow-2xs font-extrabold' : 'text-slate-600'}`}
                    >
                      Chỉ câu đúng
                    </button>
                  </div>
                </div>

                {/* Questions List */}
                <div className="space-y-4">
                  {lastExamResult.exam.questions.map((q, idx) => {
                    const qKey = q.id || q.number;
                    const det = lastExamResult.score.detail?.[qKey] || {};
                    const isCorrect = q.part === 2 ? (det.correctSubCount === 4) : det.isCorrect;

                    if (filterResultType === 'wrong' && isCorrect) return null;
                    if (filterResultType === 'correct' && !isCorrect) return null;

                    return (
                      <div
                        key={q.id || idx}
                        className={`p-5 rounded-2xl border transition-all ${isCorrect ? 'bg-emerald-50/20 border-emerald-200' : 'bg-rose-50/20 border-rose-200'}`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-1 rounded-lg font-black text-xs ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                              Câu {q.displayNumber || idx + 1}
                            </span>
                            <span className="text-xs font-bold text-slate-500">
                              {q.part === 1 ? 'Phần I (Trắc nghiệm)' : q.part === 2 ? 'Phần II (Đúng/Sai)' : 'Phần III (Trả lời ngắn)'}
                            </span>
                          </div>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                            {isCorrect ? '✓ Đúng' : '✗ Chưa đúng'}
                          </span>
                        </div>

                        {/* Question Stem */}
                        <div className="text-sm font-medium text-slate-900 my-2" dangerouslySetInnerHTML={{ __html: formatChemicalText(q.text) }} />
                        {q.images && q.images.length > 0 && (
                          <div className="my-3 flex flex-wrap justify-center items-center gap-3">
                            {q.images.map((img: string, i: number) => (
                              <div key={i} className="p-2 bg-white rounded-xl border border-slate-200 shadow-xs max-w-full">
                                <img src={img} alt="Hình đề thi" className="max-h-56 w-auto object-contain rounded-lg" />
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Part 1 Review */}
                        {q.part === 1 && (
                          <div className="my-2 space-y-1 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-500 font-semibold">Em đã chọn:</span>
                              <span className={`font-black px-2 py-0.5 rounded ${det.userAns === det.correctAns ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                {det.userAns || 'Chưa chọn'}
                              </span>
                              {!isCorrect && (
                                <span className="text-emerald-700 font-black ml-2">
                                  &bull; Đáp án đúng: <strong>{det.correctAns}</strong>
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Part 2 Review */}
                        {q.part === 2 && (
                          <div className="my-2 space-y-1.5 text-xs">
                            <div className="font-semibold text-slate-600">Kết quả từng mệnh đề:</div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {q.options?.map((opt) => {
                                const userSub = lastExamResult.answers[qKey]?.[opt.letter];
                                const isSubOk = det.subDetail?.[opt.letter];
                                return (
                                  <div key={opt.letter} className={`p-2 rounded-xl border text-center ${isSubOk ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
                                    <div className="font-black text-slate-800">Ý {opt.letter.toUpperCase()}</div>
                                    <div className="text-[11px] text-slate-500">Chọn: {userSub === true ? 'Đúng' : userSub === false ? 'Sai' : 'Chưa chọn'}</div>
                                    <div className="text-[11px] font-bold text-emerald-700">Đ/A: {opt.isCorrect ? 'Đúng' : 'Sai'}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Part 3 Review */}
                        {q.part === 3 && (
                          <div className="my-2 space-y-1 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-500 font-semibold">Em đã nhập:</span>
                              <span className={`font-black px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                {det.userAns || 'Chưa trả lời'}
                              </span>
                              {!isCorrect && (
                                <span className="text-emerald-700 font-black ml-2">
                                  &bull; Đáp án chuẩn: <strong>{det.correctAns}</strong>
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Explanation Box */}
                        {q.explanation && (
                          <div className="mt-3 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-1 shadow-2xs">
                            <div className="font-bold text-indigo-950 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                              <span>Phương pháp & Lời giải chi tiết:</span>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: formatChemicalText(q.explanation) }} />
                              {q.explanationImages && q.explanationImages.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {q.explanationImages.map((img: string, i: number) => (
                                    <img key={i} src={img} alt="Hình giải thích" className="max-h-56 rounded-lg border border-amber-200 bg-white p-1 object-contain" />
                                  ))}
                                </div>
                              )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ── MODAL CẢNH BÁO VI PHẠM RỜI MÀN HÌNH / CHUYỂN TAB ────────────────── */}
      {showViolationModal && isExamActive && (
        <div className="fixed inset-0 z-[99999999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in select-none">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center space-y-5 shadow-2xl border-2 border-rose-500 text-slate-900">
            <div className="w-16 h-16 rounded-3xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-800 border border-rose-300 uppercase tracking-wider inline-block mb-2">
                🚨 CẢNH BÁO VI PHẠM THI CỬ
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Bạn vừa rời khỏi màn hình thi!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Hệ thống phát hiện hành vi chuyển tab trình duyệt hoặc chuyển sang ứng dụng khác ({violationReason}).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 text-sm font-bold flex items-center justify-between">
              <span>Số lần vi phạm ghi nhận:</span>
              <span className="px-3.5 py-1 rounded-xl bg-rose-600 text-white font-black text-base shadow-xs">
                {tabSwitchViolations} / 3 Lần
              </span>
            </div>

            <p className="text-xs text-rose-700 font-semibold italic">
              ⚠️ Quy chế thi: Nếu vi phạm quá 3 lần, bài thi sẽ bị hệ thống tự động khóa và nộp bài ngay lập tức!
            </p>

            <button
              onClick={() => setShowViolationModal(false)}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-extrabold text-sm shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              Tôi hiểu và cam kết quay lại làm bài
            </button>
          </div>
        </div>
      )}

      {/* ── MODAL LỊCH SỬ TẤT CẢ CÁC LẦN LÀM BÀI ──────────────────────────── */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-[9999999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in select-none">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 text-slate-900 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between border-b pb-4 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Lịch Sử Các Lần Làm Bài</h3>
                  <p className="text-xs text-slate-500">Ghi nhận tiến độ và số lần vi phạm rời màn hình</p>
                </div>
              </div>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {examHistory.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-sm">
                  Chưa có lượt làm bài nào được ghi nhận cho đề thi này.
                </div>
              ) : (
                examHistory.map((att, idx) => (
                  <div
                    key={att.id || idx}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-slate-50 transition-all flex items-center justify-between flex-wrap gap-3 shadow-2xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-800 font-black text-xs">
                          Lần {examHistory.length - idx}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{att.formattedDate || att.date}</span>
                      </div>
                      <div className="text-xs text-slate-600 flex items-center gap-2 flex-wrap">
                        <span>Thời gian: {Math.floor((att.durationSeconds || 0) / 60)}p {(att.durationSeconds || 0) % 60}s</span>
                        <span>&bull;</span>
                        <span className={att.tabSwitchCount === 0 ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                          {att.tabSwitchCount === 0 ? '✓ 0 vi phạm' : `⚠️ ${att.tabSwitchCount} lần rời tab`}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-black text-indigo-600">
                        {att.score.toFixed(2)} <span className="text-xs text-slate-400 font-normal">/ 10</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500">
                        P1: {att.part1Score.toFixed(2)} | P2: {att.part2Score.toFixed(2)} | P3: {att.part3Score.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-3 border-t shrink-0 flex justify-end">
              <button
                onClick={() => setShowHistoryModal(false)}
                className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CÀI ĐẶT CẤP QUYỀN DÀNH CHO THẦY GIÁO */}
      {isTeacherModalOpen && (
        <div className="fixed inset-0 z-[9999999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 text-slate-900">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Quản Lý Quyền Truy Cập Hóa 12</h3>
                  <p className="text-xs text-slate-500">Khóa tài liệu & cấp quyền cho học sinh</p>
                </div>
              </div>
              <button
                onClick={() => setIsTeacherModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-left">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                  Trạng thái bảo mật học liệu:
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer">
                    <input
                      type="radio"
                      name="lockMode"
                      checked={tempLockEnabled}
                      onChange={() => setTempLockEnabled(true)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span>🔒 Đang khóa (Học sinh phải có mã mở khóa do Thầy cấp)</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer">
                    <input
                      type="radio"
                      name="lockMode"
                      checked={!tempLockEnabled}
                      onChange={() => setTempLockEnabled(false)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span>🔓 Mở tự do cho toàn bộ học sinh</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Mã cấp quyền mở khóa hiện tại:
                </label>
                <input
                  type="text"
                  value={newPasscodeForm}
                  onChange={(e) => setNewPasscodeForm(e.target.value.toUpperCase())}
                  placeholder="VD: THAYTHO2026"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 font-mono font-black text-lg text-center uppercase tracking-widest focus:border-indigo-600 focus:outline-none bg-white"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Thầy có thể đổi mã này bất cứ lúc nào (ví dụ: HOA12VIP, THAYTHO,...).
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const code = newPasscodeForm.trim().toUpperCase() || 'THAYTHO2026';
                  const msg = `Chào các em, Thầy Thọ gửi mã mở khóa kho học liệu Chương 2 Hóa 10: ${code}. Các em truy cập vào để ôn luyện nhé!`;
                  navigator.clipboard.writeText(msg);
                  toast.success('Đã sao chép tin nhắn kèm mã để gửi Zalo cho học sinh!', { icon: '📋' });
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-300 cursor-pointer"
              >
                <span>📋 Sao chép tin nhắn & mã gửi Zalo cho học sinh</span>
              </button>
            </div>

            {/* KHU VỰC ĐẶC QUYỀN: CẤM QUYỀN TOÀN BỘ HỌC SINH TỨC THÌ */}
            <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 space-y-2.5 text-left">
              <div className="flex items-center gap-2 text-rose-800 font-black text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                Đặc quyền Cấm quyền & Thu hồi của Thầy:
              </div>
              <p className="text-xs text-rose-700 leading-relaxed font-medium">
                Bấm nút dưới đây để <strong>CẤM QUYỀN VÀ KHÓA TOÀN BỘ HỌC SINH TỨC THÌ</strong> trên toàn hệ thống. Mọi thiết bị học sinh đang học hoặc đã từng mở khóa sẽ bị khóa lập tức!
              </p>
              <button
                type="button"
                disabled={isRevoking}
                onClick={async () => {
                  if (!window.confirm("Thầy có chắc chắn muốn CẤM QUYỀN và KHÓA TOÀN BỘ học sinh ngay lập tức không?")) return;
                  setIsRevoking(true);
                  try {
                    const updated = await revokeAllStudentsAccess();
                    setAccessConfig(updated);
                    setTempLockEnabled(true);
                    toast.success("ĐÃ CẤM QUYỀN VÀ KHÓA TOÀN BỘ HỌC SINH THÀNH CÔNG!", { duration: 5000, icon: '🛑' });
                  } finally {
                    setIsRevoking(false);
                  }
                }}
                className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-rose-600/30 transition-all cursor-pointer disabled:opacity-50"
              >
                <span>🛑 CẤM QUYỀN TOÀN BỘ HỌC SINH (KHÓA TỨC THÌ)</span>
              </button>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={() => setIsTeacherModalOpen(false)}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={async () => {
                  const cleanedCode = newPasscodeForm.trim().toUpperCase() || 'THAYTHO2026';
                  const updated = await saveHoa12AccessConfig({
                    is_locked: tempLockEnabled,
                    passcode: cleanedCode,
                  });
                  setAccessConfig(updated);
                  setIsTeacherModalOpen(false);
                  toast.success('Đã lưu và đồng bộ cấu hình cấp quyền lên Cloud thành công!', { icon: '✅' });
                }}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md transition-all cursor-pointer"
              >
                Lưu cài đặt
              </button>
            </div>
          </div>
        </div>
      )}
          {/* MODAL NHẬP MÃ PIN QUẢN TRỊ DÀNH CHO THẦY THỌ */}
      {showTeacherPinModal && (
        <div className="fixed inset-0 z-[99999999] bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 space-y-4 shadow-2xl border border-slate-200 text-slate-900 text-left">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">👑</span>
                <h3 className="text-base font-black text-slate-900">Xác Thực Thầy Thọ</h3>
              </div>
              <button
                onClick={() => setShowTeacherPinModal(false)}
                className="p-1 text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Nhập mã PIN Quản trị của Thầy để kích hoạt quyền Thầy giáo và vào xem đề:
            </p>
            <input
              type="password"
              value={teacherPinInput}
              onChange={(e) => setTeacherPinInput(e.target.value)}
              placeholder="Nhập mã PIN Thầy (VD: THAYTHO)"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 font-bold text-center tracking-widest text-base focus:border-indigo-600 outline-none"
              autoFocus
            />
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowTeacherPinModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={() => {
                  if (verifyTeacherAdminPin(teacherPinInput)) {
                    localStorage.setItem('is_teacher_mode', 'true');
                    localStorage.setItem('hoa12_teacher_authenticated', 'true');
                    localStorage.setItem('hoa11_teacher_authenticated', 'true');
                    localStorage.setItem('hoa10_teacher_authenticated', 'true');
                    localStorage.setItem('role', 'teacher');
                    toast.success('Xác thực Thầy Thọ thành công! Đang tải lại...', { icon: '👑' });
                    setShowTeacherPinModal(false);
                    setTimeout(() => { window.location.reload(); }, 600);
                  } else {
                    toast.error('Mã PIN không chính xác!');
                  }
                }}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Smart Motivational Emotional Feedback Modal */}
      <MotivationModal
        {...motivationModal}
        onClose={() => setMotivationModal(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default Hoa12Chuong2View;
