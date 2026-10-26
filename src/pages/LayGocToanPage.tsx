import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Zap, ArrowRight, CheckCircle2, XCircle, RotateCcw, 
  HelpCircle, BookOpen, Award, Sparkles, Printer, 
  Flame, Clock, ChevronRight, Calculator, Shuffle, FileDown,
  Send, Users, Check, Copy, Search, ShieldCheck, X, CheckSquare, Target,
  FlaskConical, Compass, Scale, Bell, AlertTriangle, History, 
  Volume2, ShieldAlert, Calendar, Eye, Activity, TrendingUp, AlertCircle,
  Share2, Link, MessageCircle, QrCode, ExternalLink, Smartphone, Lock
} from 'lucide-react';
import MathText from '@/components/MathText';
import { useDataStore } from '@/store/dataStore';
import { useExamRoomStore } from '@/store/examRoomStore';
import { useExamStore } from '@/store/examStore';
import { 
  LAY_GOC_TOPICS, 
  getLayGocExamQuestions, 
  convertLayGocQuestionsToExamFormat,
  LayGocQuestion 
} from '@/services/layGocExamService';
import {
  LAY_GOC_HOA_TOPICS,
  getLayGocHoaExamQuestions,
  convertLayGocHoaQuestionsToExamFormat,
  LayGocHoaQuestion
} from '@/services/layGocHoaExamService';
import Modal from '@/components/Modal';
import PrintableExamModal from '@/components/PrintableExamModal';
import BatchExamScanModal from '@/components/BatchExamScanModal';
import { FireworksEffect } from '@/components/FireworksEffect';
import toast from 'react-hot-toast';

export interface ExamAttempt {
  id: string;
  attemptNo: number; // Lần 1, Lần 2, Lần 3...
  timestamp: number;
  dateFormatted: string;
  score10: number;
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number; // Thời gian làm bài (giây)
  answers: Record<number, string>;
  violations: number; // Số lần vi phạm rời tab
  isAutoSubmittedByViolation?: boolean; // Tự động nộp do vi phạm 3 lần
}

export default function LayGocToanPage({ isPublic = false }: { isPublic?: boolean }) {
  // Môn học đang chọn: 'toan' (Toán học Lớp 6-9) hoặc 'hoa' (Hóa học Lớp 6-12)
  const [currentSubject, setCurrentSubject] = useState<'toan' | 'hoa'>('toan');

  // Bộ lọc phân hệ Hóa học: 'all' (Tất cả), 'vo_co' (Hóa Vô Cơ), 'huu_co' (Hóa Hữu Cơ)
  const [hoaBranchFilter, setHoaBranchFilter] = useState<'all' | 'vo_co' | 'huu_co'>('all');

  // Main Tab: kho_de (Đề thi 20 câu), ly_thuyet (thần chú), luyen_tap (tự do)
  const [activeTab, setActiveTab] = useState<'kho_de' | 'ly_thuyet' | 'luyen_tap'>('kho_de');
  
  // State của Đề thi đang chọn
  const [selectedTopicId, setSelectedTopicId] = useState<string>('so_tu_nhien');
  const [selectedExamNo, setSelectedExamNo] = useState<number>(1);
  const [examAnswers, setExamAnswers] = useState<Record<number, string>>({});
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [isExamTimerActive, setIsExamTimerActive] = useState<boolean>(false);
  const [examTimeLeft, setExamTimeLeft] = useState<number>(1200); // 20 phút = 1200 giây
  const [showAllExplanations, setShowAllExplanations] = useState<boolean>(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [isScanModalOpen, setIsScanModalOpen] = useState<boolean>(false);
  const [showFireworks, setShowFireworks] = useState<boolean>(false);

  // CHIA SẺ LINK ĐỀ THI TRỰC TIẾP CHO HỌC SINH & PHỤ HUYNH
  const [searchParams] = useSearchParams();
  const isStudentMode = useMemo(() => {
    return isPublic || searchParams.get('mode') === 'student' || searchParams.get('view') === 'student';
  }, [isPublic, searchParams]);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isCopiedShareLink, setIsCopiedShareLink] = useState<boolean>(false);
  const [isCopiedShareMessage, setIsCopiedShareMessage] = useState<boolean>(false);

  // CHỐNG GIAN LẬN: THOÁT RA 3 LẦN TỰ NỘP BÀI & CHUÔNG BÁO ĐỘNG
  const [tabSwitchCount, setTabSwitchCount] = useState<number>(0);
  const [showViolationModal, setShowViolationModal] = useState<boolean>(false);
  const [lastViolationTime, setLastViolationTime] = useState<number>(0);

  // LƯU LỊCH SỬ KẾT QUẢ CÁC LẦN LÀM BÀI
  const [examHistory, setExamHistory] = useState<ExamAttempt[]>([]);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState<boolean>(false);
  const [viewingPastAttempt, setViewingPastAttempt] = useState<ExamAttempt | null>(null);

  // Luyện tập nhanh tự do
  const [freeAnswers, setFreeAnswers] = useState<Record<number, string>>({});
  const [freeResults, setFreeResults] = useState<Record<number, boolean>>({});
  const [freeExplanations, setFreeExplanations] = useState<Record<number, boolean>>({});
  const [streak, setStreak] = useState(0);

  // Giao bài cho học sinh chỉ định / lớp học
  const { classes, loadClasses, students, loadStudents, enrollments, loadEnrollments } = useDataStore();
  const { exams, loadExams, createExam } = useExamStore();
  const { createRoom } = useExamRoomStore();

  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [assignSubject, setAssignSubject] = useState<'toan' | 'hoa'>('toan');
  const [assignTopicId, setAssignTopicId] = useState<string>('so_tu_nhien');
  const [assignExamNo, setAssignExamNo] = useState<number>(1);
  const [assignMode, setAssignMode] = useState<'individual' | 'class'>('individual');
  const [assignClassId, setAssignClassId] = useState('');
  const [assignStudentIds, setAssignStudentIds] = useState<string[]>([]);
  const [assignTimeLimit, setAssignTimeLimit] = useState(20);
  const [assignPasscode, setAssignPasscode] = useState('');
  const [studentSearch, setStudentSearch] = useState('');
  const [isSubmittingAssign, setIsSubmittingAssign] = useState(false);
  const [assignedSuccessData, setAssignedSuccessData] = useState<{ 
    roomCode: string; 
    count: number; 
    className: string;
    examTitle: string;
  } | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedZalo, setCopiedZalo] = useState(false);

  useEffect(() => {
    void loadClasses();
    void loadStudents();
    void loadEnrollments();
    void loadExams();
  }, [loadClasses, loadStudents, loadEnrollments, loadExams]);

  // Luôn nạp lại học sinh và danh sách lớp mới nhất từ server khi mở modal giao đề
  useEffect(() => {
    if (isAssignModalOpen) {
      void loadStudents();
      void loadEnrollments();
      void loadClasses();
    }
  }, [isAssignModalOpen, loadStudents, loadEnrollments, loadClasses]);

  // TỰ ĐỘNG NHẬN DIỆN MÔN HỌC, CHUYÊN ĐỀ VÀ ĐỀ SỐ TỪ LINK CHIA SẺ GỬI CHO HỌC SINH / PHỤ HUYNH
  useEffect(() => {
    const sParam = searchParams.get('subject');
    const tParam = searchParams.get('topic');
    const eParam = searchParams.get('exam');

    if (sParam === 'toan' || sParam === 'hoa') {
      setCurrentSubject(sParam);
    }
    if (tParam) {
      setSelectedTopicId(tParam);
    }
    if (eParam) {
      const eNum = parseInt(eParam, 10);
      if (!isNaN(eNum) && eNum >= 1 && eNum <= 10) {
        setSelectedExamNo(eNum);
      }
    }
  }, [searchParams]);

  // HÀM TẠO LINK TRỰC TIẾP ĐỂ GỬI QUA ZALO / PHỤ HUYNH / HỌC SINH (CHỈ MỞ DUY NHẤT ĐỀ ĐƯỢC GIAO)
  const getShareableExamUrl = () => {
    const origin = window.location.origin;
    return `${origin}/lay-goc?subject=${currentSubject}&topic=${selectedTopicId}&exam=${selectedExamNo}&mode=student`;
  };

  // HÀM TẠO LỜI DẶN DÒ TRANG TRỌNG KÈM LINK GỬI CHO HỌC SINH & PHỤ HUYNH
  const getShareableMessage = () => {
    const isHoa = currentSubject === 'hoa';
    const subjectName = isHoa ? 'Hóa học' : 'Toán học';
    const topicList = isHoa ? LAY_GOC_HOA_TOPICS : LAY_GOC_TOPICS;
    const topicObj = topicList.find(t => t.id === selectedTopicId) || topicList[0];
    const examUrl = getShareableExamUrl();

    let examDetailName = `Đề số ${selectedExamNo.toString().padStart(2, '0')}`;
    if (isHoa && selectedTopicId === 'nguyen_tu_khoi_18') {
      examDetailName = selectedExamNo % 2 === 1 
        ? `Đề ${selectedExamNo.toString().padStart(2, '0')} (Xác định tên nguyên tố cũ & mới)`
        : `Đề ${selectedExamNo.toString().padStart(2, '0')} (Tìm chọn số nguyên tử khối NTK)`;
    } else if (isHoa && selectedTopicId === 'nguyen_tu_khoi_short_ans') {
      examDetailName = `Đề ${selectedExamNo.toString().padStart(2, '0')} (Trả lời ngắn: Điền nguyên tử khối)`;
    }

    return `📚 BÀI TẬP LẤY GỐC KIẾN THỨC – LỚP HỌC THẦY THỌ\n` +
           `👨‍🏫 Thầy Thọ gửi link bài tập trực tuyến:\n` +
           `• Môn học: ${subjectName}\n` +
           `• Chuyên đề: ${topicObj.title}\n` +
           `• Nội dung: ${examDetailName} (20 câu)\n` +
           `• Thời gian làm bài: 20 phút (Tự động chấm điểm, có lời giải chi tiết và bắn pháo hoa khi 10đ)\n\n` +
           `👉 Phụ huynh và các em học sinh mở link này trên điện thoại hoặc máy tính để làm bài trực tiếp:\n` +
           `${examUrl}\n\n` +
           `✨ Chúc các em làm bài thật tốt và đạt điểm 10 tuyệt đối!`;
  };

  // HÀM SAO CHÉP CLIPBOARD ĐA TẦNG (TƯƠNG THÍCH 100% MỌI TRÌNH DUYỆT & THIẾT BỊ)
  const robustCopy = async (text: string): Promise<boolean> => {
    // 1. Thử Clipboard API hiện đại
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.warn('navigator.clipboard.writeText không được cấp quyền, chuyển sang execCommand:', err);
      }
    }

    // 2. Fallback dùng textarea ẩn kết hợp document.execCommand('copy')
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.contain = 'strict';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      textarea.style.fontSize = '12pt'; // Chống zoom trên iOS Safari
      const selection = document.getSelection();
      const originalRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.selectionStart = 0;
      textarea.selectionEnd = text.length;

      const success = document.execCommand('copy');
      document.body.removeChild(textarea);

      if (originalRange && selection) {
        selection.removeAllRanges();
        selection.addRange(originalRange);
      }

      if (success) return true;
    } catch (err) {
      console.warn('execCommand copy thất bại:', err);
    }

    // 3. Fallback cuối: Hiển thị prompt để người dùng copy trực tiếp
    try {
      window.prompt('Vui lòng nhấn Ctrl+C (hoặc Cmd+C trên Mac) để sao chép link:', text);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleCopyLinkOnly = async () => {
    const url = getShareableExamUrl();
    const ok = await robustCopy(url);
    if (ok) {
      setIsCopiedShareLink(true);
      toast.success('📋 Đã sao chép link đề thi! Thầy có thể dán (Paste / Ctrl+V) gửi cho phụ huynh ngay.', { duration: 4000 });
      setTimeout(() => setIsCopiedShareLink(false), 3000);
    } else {
      toast.error('Vui lòng chọn link trong ô và bấm Ctrl+C để sao chép!');
    }
  };

  const handleCopyFullMessage = async () => {
    const msg = getShareableMessage();
    const ok = await robustCopy(msg);
    if (ok) {
      setIsCopiedShareMessage(true);
      toast.success('💬 Đã sao chép toàn bộ lời dặn dò kèm link! Thầy mở Zalo dán (Ctrl+V) gửi ngay nhé.', { duration: 4000 });
      setTimeout(() => setIsCopiedShareMessage(false), 3000);
    } else {
      toast.error('Vui lòng bôi đen lời dặn dò và bấm Ctrl+C để sao chép!');
    }
  };


  // Key lưu trữ lịch sử các lần làm bài vào localStorage
  const historyStorageKey = `laygoc_history_${currentSubject}_${selectedTopicId}_exam_${selectedExamNo}`;

  // Nạp lịch sử các lần làm bài khi chọn đề
  useEffect(() => {
    try {
      const saved = localStorage.getItem(historyStorageKey);
      if (saved) {
        setExamHistory(JSON.parse(saved));
      } else {
        setExamHistory([]);
      }
    } catch (e) {
      setExamHistory([]);
    }
  }, [historyStorageKey]);

  // PHÁT CHUÔNG BÁO ĐỘNG CẢNH BÁO VI PHẠM RỜI MÀN HÌNH (Web Audio API)
  const playWarningAlarm = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(880, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.35);
      gain1.gain.setValueAtTime(0.4, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.35);

      setTimeout(() => {
        try {
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'sawtooth';
          osc2.frequency.setValueAtTime(950, ctx.currentTime);
          osc2.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.4);
          gain2.gain.setValueAtTime(0.4, ctx.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.start();
          osc2.stop(ctx.currentTime + 0.4);
        } catch (e) {}
      }, 300);
    } catch (e) {
      console.warn('Audio warning error:', e);
    }
  };

  // Chuyển đổi môn học
  const handleSwitchSubject = (subject: 'toan' | 'hoa') => {
    setCurrentSubject(subject);
    setHoaBranchFilter('all');
    const defaultTopic = subject === 'toan' ? LAY_GOC_TOPICS[0].id : LAY_GOC_HOA_TOPICS[0].id;
    setSelectedTopicId(defaultTopic);
    setSelectedExamNo(1);
    setExamAnswers({});
    setIsExamSubmitted(false);
    setIsExamTimerActive(false);
    setExamTimeLeft(1200);
    setTabSwitchCount(0);
    setShowAllExplanations(false);
    setViewingPastAttempt(null);
  };

  // Chuyển đổi nhánh Hóa Vô cơ / Hóa Hữu cơ
  const handleSwitchHoaBranch = (branch: 'all' | 'vo_co' | 'huu_co') => {
    setHoaBranchFilter(branch);
    const relevantTopics = branch === 'all' 
      ? LAY_GOC_HOA_TOPICS 
      : LAY_GOC_HOA_TOPICS.filter(t => t.branch === branch);
    if (relevantTopics.length > 0 && !relevantTopics.some(t => t.id === selectedTopicId)) {
      setSelectedTopicId(relevantTopics[0].id);
      setSelectedExamNo(1);
      setExamAnswers({});
      setIsExamSubmitted(false);
      setIsExamTimerActive(false);
      setTabSwitchCount(0);
      setViewingPastAttempt(null);
    }
  };

  // Danh sách chủ đề của môn đang chọn (kèm bộ lọc Vô Cơ / Hữu Cơ)
  const activeTopics = useMemo(() => {
    if (currentSubject === 'toan') return LAY_GOC_TOPICS;
    if (hoaBranchFilter === 'all') return LAY_GOC_HOA_TOPICS;
    return LAY_GOC_HOA_TOPICS.filter(t => t.branch === hoaBranchFilter);
  }, [currentSubject, hoaBranchFilter]);

  // Danh sách 20 câu hỏi của Đề đang chọn
  const currentExamQuestions = useMemo(() => {
    if (currentSubject === 'toan') {
      return getLayGocExamQuestions(selectedTopicId, selectedExamNo);
    } else {
      return getLayGocHoaExamQuestions(selectedTopicId, selectedExamNo);
    }
  }, [currentSubject, selectedTopicId, selectedExamNo]);

  // Thông tin chuyên đề đang chọn
  const currentTopic = useMemo(() => {
    return activeTopics.find(t => t.id === selectedTopicId) || activeTopics[0];
  }, [activeTopics, selectedTopicId]);

  // HÀM KIỂM TRA ĐÁP ÁN ĐÚNG CHO CẢ TRẮC NGHIỆM VÀ TRẢ LỜI NGẮN (ĐIỀN ĐÁP ÁN)
  const checkLayGocAnswerCorrect = (userAns: any, q: any): boolean => {
    if (userAns === undefined || userAns === null) return false;
    const userStr = String(userAns).trim();
    if (!userStr) return false;

    const isShortAnswer = q.questionType === 'short_answer' || !q.options || q.options.length === 0;
    if (isShortAnswer) {
      const clean = (s: string) => String(s || '').toLowerCase()
        .replace(/,/g, '.')
        .replace(/\s*(amu|đvc|dvc|g\/mol)\s*/gi, '')
        .trim();
      const cleanUser = clean(userStr);
      const cleanCorrect = clean(q.correctAnswer);
      if (cleanUser === cleanCorrect) return true;
      const numU = parseFloat(cleanUser);
      const numC = parseFloat(cleanCorrect);
      if (!isNaN(numU) && !isNaN(numC) && Math.abs(numU - numC) < 0.001) return true;
      return false;
    }

    return userStr === String(q.correctAnswer).trim();
  };

  // HÀM TẠO LỜI ĐỘNG VIÊN KHÍCH LỆ CHUẨN XÁC THEO 4 MỐC ĐIỂM (XƯNG HÔ THẦY VÀ EM, PHÂN BIỆT RÕ MÔN TOÁN VÀ HÓA)
  const getExamEncouragement = (score: number) => {
    const isHoa = currentSubject === 'hoa';
    const subjectName = isHoa ? 'Hóa học' : 'Toán học';
    const reviewGuideText = isHoa 
      ? 'bảng nguyên tử khối, bài ca hóa trị và các định luật cốt lõi'
      : 'các quy tắc tính toán, công thức và phương pháp giải cốt lõi';

    if (score >= 10) {
      return {
        badge: `🎯 ĐẠT ĐIỂM 10 TUYỆT ĐỐI (${subjectName})`,
        title: `Chúc mừng em đã đạt điểm 10 tuyệt đối môn ${subjectName}!`,
        message: `Em đã làm bài rất cẩn thận và trả lời chính xác tất cả các câu hỏi của đề thi môn ${subjectName}. Hãy tiếp tục duy trì tinh thần học tập nghiêm túc và chăm chỉ này ở các đề tiếp theo nhé!`,
        colorClass: 'text-amber-900 bg-amber-100/90 border-amber-300',
        bgGradient: 'from-amber-50 via-yellow-50 to-emerald-50 border-amber-300'
      };
    } else if (score >= 8.0) {
      return {
        badge: '✨ KẾT QUẢ TỐT (8.0 – 9.9 ĐIỂM)',
        title: 'Em làm bài rất tốt, gần đạt điểm tối đa rồi!',
        message: `Em đã nắm chắc kiến thức căn bản của bài học môn ${subjectName}. Hãy xem lại kỹ những câu còn nhầm lẫn để rút kinh nghiệm và đạt điểm 10 ở lần làm tiếp theo nhé!`,
        colorClass: 'text-emerald-800 bg-emerald-100/90 border-emerald-300',
        bgGradient: 'from-emerald-50 via-teal-50 to-sky-50 border-emerald-300'
      };
    } else if (score >= 7.0) {
      return {
        badge: '📘 ĐẠT YÊU CẦU CĂN BẢN (7.0 – 7.9 ĐIỂM)',
        title: 'Em đã nắm được kiến thức nền tảng!',
        message: `Em đã hiểu được các nội dung trọng tâm môn ${subjectName}. Cần chú ý đọc kỹ câu hỏi và tính toán cẩn thận hơn để nâng cao điểm số. Hãy thử làm lại một lần nữa để cải thiện kết quả nhé!`,
        colorClass: 'text-blue-800 bg-blue-100/90 border-blue-300',
        bgGradient: 'from-blue-50 via-indigo-50 to-cyan-50 border-blue-300'
      };
    } else {
      return {
        badge: '🌱 CẦN CỐ GẮNG HƠN (1.0 – 6.9 ĐIỂM)',
        title: 'Em cần dành thêm thời gian ôn lại lý thuyết!',
        message: `Kết quả này cho thấy em cần xem lại ${reviewGuideText} bên dưới. Em hãy đọc kỹ phần hướng dẫn giải của Thầy rồi bấm làm lại để nắm vững bài hơn nhé!`,
        colorClass: 'text-rose-800 bg-rose-100/90 border-rose-300',
        bgGradient: 'from-rose-50 via-orange-50 to-amber-50 border-rose-300'
      };
    }
  };

  // HÀM NỘP BÀI THI & TỰ ĐỘNG LƯU VÀO LỊCH SỬ TỪNG LẦN LÀM
  const handleSubmitExamFinal = (isViolationSubmit = false) => {
    let correctCount = 0;
    currentExamQuestions.forEach(q => {
      if (checkLayGocAnswerCorrect(examAnswers[q.id], q)) {
        correctCount++;
      }
    });
    const score10 = Number(((correctCount / currentExamQuestions.length) * 10).toFixed(1));
    const percentage = Math.round((correctCount / currentExamQuestions.length) * 100);
    const timeSpent = Math.max(1, 1200 - examTimeLeft);

    // Tạo bản ghi lần thi mới
    const newAttempt: ExamAttempt = {
      id: `attempt_${Date.now()}`,
      attemptNo: examHistory.length + 1,
      timestamp: Date.now(),
      dateFormatted: new Date().toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' }),
      score10,
      correctCount,
      totalQuestions: currentExamQuestions.length,
      percentage,
      timeSpentSeconds: timeSpent,
      answers: { ...examAnswers },
      violations: tabSwitchCount + (isViolationSubmit ? 1 : 0),
      isAutoSubmittedByViolation: isViolationSubmit
    };

    const updatedHistory = [newAttempt, ...examHistory];
    setExamHistory(updatedHistory);
    try {
      localStorage.setItem(historyStorageKey, JSON.stringify(updatedHistory));
    } catch (e) {}

    setIsExamSubmitted(true);
    setIsExamTimerActive(false);
    setShowAllExplanations(true);
    setShowViolationModal(false);
    window.scrollTo({ top: 300, behavior: 'smooth' });

    const subjectName = currentSubject === 'hoa' ? 'Hóa học' : 'Toán học';

    if (isViolationSubmit) {
      toast.error('🚨 TỰ ĐỘNG THU BÀI: Em đã vi phạm rời màn hình thi 3 lần!');
    } else {
      if (score10 >= 10) {
        setShowFireworks(true);
        toast.success(`🎯 Chúc mừng em đã đạt điểm 10 tuyệt đối môn ${subjectName}! Em làm bài rất cẩn thận và chính xác!`, { duration: 6000 });
      } else if (score10 >= 8.0) {
        toast.success(`✨ Kết quả rất tốt! Điểm môn ${subjectName}: ${score10}/10. Em xem lại các câu chưa đúng để hoàn thiện nhé!`, { duration: 5000 });
      } else if (score10 >= 7.0) {
        toast.success(`📘 Điểm môn ${subjectName}: ${score10}/10. Em đã nắm được kiến thức nền tảng, cố gắng luyện thêm nhé!`, { duration: 5000 });
      } else {
        toast(`🌱 Điểm môn ${subjectName}: ${score10}/10. Em hãy đọc lại lý thuyết và lời giải chi tiết để làm lại nhé!`, { icon: '📖', duration: 6000 });
      }
    }
  };

  // CHẾ ĐỘ CHỐNG GIAN LẬN: THEO DÕI THOÁT RA / RỜI TAB (3 LẦN THÌ TỰ NỘP BÀI)
  useEffect(() => {
    if (!isExamTimerActive || isExamSubmitted) return;

    const handleViolation = () => {
      const now = Date.now();
      if (now - lastViolationTime < 1500) return; // Debounce 1.5s
      setLastViolationTime(now);

      // 1. Phát âm thanh chuông cảnh báo
      playWarningAlarm();

      // 2. Tăng số lần vi phạm
      setTabSwitchCount(prev => {
        const next = prev + 1;
        if (next >= 3) {
          // Vi phạm lần thứ 3 -> Tự động nộp bài ngay lập tức!
          handleSubmitExamFinal(true);
          return 3;
        } else {
          // Lần 1 hoặc 2: Hiện popup cảnh báo đỏ
          setShowViolationModal(true);
          toast.error(`⚠️ CẢNH BÁO VI PHẠM (${next}/3): Em vừa chuyển tab hoặc rời khỏi trang thi!`, {
            duration: 5000
          });
          return next;
        }
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleViolation();
      }
    };

    const handleBlur = () => {
      handleViolation();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
    };
  }, [isExamTimerActive, isExamSubmitted, lastViolationTime, currentExamQuestions, examAnswers, examTimeLeft, tabSwitchCount, examHistory, historyStorageKey]);

  // Đồng hồ đếm ngược khi làm bài thi
  useEffect(() => {
    let timer: any;
    if (isExamTimerActive && examTimeLeft > 0 && !isExamSubmitted) {
      timer = setInterval(() => setExamTimeLeft(prev => prev - 1), 1000);
    } else if (examTimeLeft === 0 && isExamTimerActive && !isExamSubmitted) {
      handleSubmitExamFinal(false);
      toast('⏰ Đã hết 20 phút làm bài! Hệ thống tự động thu bài.', { icon: '🔔' });
    }
    return () => clearInterval(timer);
  }, [isExamTimerActive, examTimeLeft, isExamSubmitted]);

  // Format thời gian mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Đổi đề thi
  const handleSelectExam = (topicId: string, examNo: number) => {
    setSelectedTopicId(topicId);
    setSelectedExamNo(examNo);
    setExamAnswers({});
    setIsExamSubmitted(false);
    setIsExamTimerActive(false);
    setExamTimeLeft(1200);
    setTabSwitchCount(0);
    setShowAllExplanations(false);
    setViewingPastAttempt(null);
  };

  // CHẾ ĐỘ LÀM LẠI NHIỀU LẦN ĐỀ NÀY (BẮT ĐẦU LẦN TIẾP THEO)
  const handleRetakeExam = () => {
    setExamAnswers({});
    setIsExamSubmitted(false);
    setIsExamTimerActive(true);
    setExamTimeLeft(1200);
    setTabSwitchCount(0);
    setShowAllExplanations(false);
    setShowViolationModal(false);
    setViewingPastAttempt(null);
    window.scrollTo({ top: 300, behavior: 'smooth' });
    toast.success(`🚀 Bắt đầu làm bài Lần ${examHistory.length + 1}! Chúc em bứt phá điểm số.`);
  };

  // Xem lại bài làm của 1 lần trong quá khứ
  const handleViewPastAttempt = (attempt: ExamAttempt) => {
    setViewingPastAttempt(attempt);
    setExamAnswers(attempt.answers);
    setIsExamSubmitted(true);
    setIsExamTimerActive(false);
    setShowAllExplanations(true);
    setIsHistoryModalOpen(false);
    window.scrollTo({ top: 300, behavior: 'smooth' });
    toast(`👀 Đang xem lại bài làm Lần ${attempt.attemptNo} (${attempt.score10} điểm)`, { icon: '📜' });
  };

  // Tính điểm số bài thi hiện tại
  const examResultStats = useMemo(() => {
    let correctCount = 0;
    currentExamQuestions.forEach(q => {
      if (checkLayGocAnswerCorrect(examAnswers[q.id], q)) {
        correctCount++;
      }
    });
    const score10 = Number(((correctCount / currentExamQuestions.length) * 10).toFixed(1));
    return {
      total: currentExamQuestions.length,
      correctCount,
      score10,
      percentage: Math.round((correctCount / currentExamQuestions.length) * 100)
    };
  }, [currentExamQuestions, examAnswers]);

  // Danh sách học sinh gắn kèm tên lớp
  const allStudentsWithClasses = useMemo(() => {
    return students.filter(s => s.status !== 'inactive').map(s => {
      const studentEnrolls = enrollments.filter(e => e.student_id === s.id && e.status !== 'inactive');
      const classNames = studentEnrolls.map(e => {
        const cls = classes.find(c => c.id === e.class_id);
        return (cls as any)?.class_name || (cls as any)?.name;
      }).filter(Boolean);
      return {
        ...s,
        classNamesString: classNames.join(', ') || 'Chưa xếp lớp'
      };
    });
  }, [students, enrollments, classes]);

  const currentClassStudents = useMemo(() => {
    if (!assignClassId) return [];
    return allStudentsWithClasses.filter(s =>
      enrollments.some(e => e.class_id === assignClassId && e.student_id === s.id && e.status !== 'inactive')
    );
  }, [assignClassId, allStudentsWithClasses, enrollments]);

  const matchStudentQuery = (s: any, q: string) => {
    if (!q) return true;
    const name = (s.full_name || '').toLowerCase();
    const code = (s.student_code || '').toLowerCase().trim();
    const phone = (s.parent_phone || '').trim();

    // 1. Khớp thông thường (substring)
    if (name.includes(q) || code.includes(q) || phone.includes(q)) return true;

    // 2. Xử lý đặc biệt khi Thầy gõ chuỗi toàn số 0 (ví dụ "000" hoặc "0000")
    if (/^0+$/.test(q)) {
      // Khớp học sinh có mã toàn số 0 (ví dụ "0", "00", "000", "0000")
      if (/^0+$/.test(code)) return true;
      // Hoặc khớp học sinh có chứa cụm "00" trong mã (ví dụ "6001", "6002"...)
      if (code.includes('00')) return true;
    }

    // 3. Khớp linh hoạt theo đuôi số (ví dụ gõ "001" hoặc "01" sẽ khớp mã "6001")
    const strippedLeadingZeros = q.replace(/^0+/, '');
    if (strippedLeadingZeros && code.endsWith(strippedLeadingZeros)) {
      return true;
    }

    return false;
  };

  const displayedStudents = useMemo(() => {
    const q = studentSearch.trim().toLowerCase();
    if (assignMode === 'class') {
      if (!assignClassId) return [];
      if (!q) return currentClassStudents;
      return currentClassStudents.filter(s => matchStudentQuery(s, q));
    } else {
      if (!q) return allStudentsWithClasses;
      return allStudentsWithClasses.filter(s => 
        matchStudentQuery(s, q) || s.classNamesString.toLowerCase().includes(q)
      );
    }
  }, [assignMode, assignClassId, currentClassStudents, allStudentsWithClasses, studentSearch]);

  // Tìm học sinh khớp mã/tên trong toàn bộ trung tâm nhưng KHÔNG thuộc lớp đang chọn
  const otherMatchingStudents = useMemo(() => {
    if (assignMode !== 'class' || !studentSearch.trim() || !assignClassId) return [];
    const q = studentSearch.trim().toLowerCase();
    return allStudentsWithClasses.filter(s => {
      const isEnrolledInCurrentClass = enrollments.some(e => e.class_id === assignClassId && e.student_id === s.id && e.status !== 'inactive');
      if (isEnrolledInCurrentClass) return false;
      return matchStudentQuery(s, q);
    });
  }, [assignMode, assignClassId, studentSearch, allStudentsWithClasses, enrollments]);

  const handleSelectAllStudents = () => {
    if (assignStudentIds.length === displayedStudents.length) {
      setAssignStudentIds([]);
    } else {
      setAssignStudentIds(displayedStudents.map(s => s.id));
    }
  };

  const handleToggleStudent = (id: string) => {
    setAssignStudentIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Mở modal giao bài với đề đã chọn
  const handleOpenAssignModal = (subject?: 'toan' | 'hoa', topicId?: string, examNo?: number) => {
    setAssignSubject(subject || currentSubject);
    setAssignTopicId(topicId || selectedTopicId);
    setAssignExamNo(examNo || selectedExamNo);
    setAssignedSuccessData(null);
    setIsAssignModalOpen(true);
  };

  // Giao đề thi Lấy Gốc cho học sinh
  const handleAssignSubmit = async () => {
    if (assignMode === 'class' && !assignClassId) {
      toast.error('Vui lòng chọn lớp học!');
      return;
    }
    if (assignMode === 'individual' && assignStudentIds.length === 0) {
      toast.error('Vui lòng tích chọn ít nhất 1 học sinh!');
      return;
    }

    setIsSubmittingAssign(true);
    try {
      const topicList = assignSubject === 'toan' ? LAY_GOC_TOPICS : LAY_GOC_HOA_TOPICS;
      const topicObj = topicList.find(t => t.id === assignTopicId) || topicList[0];
      const subjectTag = assignSubject === 'toan' ? 'TOÁN' : 'HÓA HỌC';
      const examTitle = `[LẤY GỐC ${subjectTag}] - ${topicObj.shortTitle} - Đề ${assignExamNo.toString().padStart(2, '0')} (20 câu)`;
      
      let rawQuestions: any[] = [];
      let formattedQuestions: any[] = [];

      if (assignSubject === 'toan') {
        rawQuestions = getLayGocExamQuestions(assignTopicId, assignExamNo);
        formattedQuestions = convertLayGocQuestionsToExamFormat(rawQuestions);
      } else {
        rawQuestions = getLayGocHoaExamQuestions(assignTopicId, assignExamNo);
        formattedQuestions = convertLayGocHoaQuestionsToExamFormat(rawQuestions);
      }

      let examId = '';
      const existingExam = exams.find(e => e.title === examTitle);
      if (existingExam) {
        examId = existingExam.id;
      } else {
        examId = await createExam({
          title: examTitle,
          duration: assignTimeLimit,
          type: 'quiz',
          questions: formattedQuestions,
          totalPoints: 10,
          created_at: new Date().toISOString()
        }, examTitle);
      }

      let targetClassId: string | null = null;
      let targetClassName = 'Chỉ định riêng';

      if (assignMode === 'class' && assignClassId) {
        targetClassId = assignClassId;
        const selectedClass = classes.find(c => c.id === assignClassId);
        targetClassName = (selectedClass as any)?.class_name || (selectedClass as any)?.name || 'Lớp học';
      } else {
        const studentNames = students.filter(s => assignStudentIds.includes(s.id)).map(s => s.full_name);
        targetClassName = studentNames.length <= 2 ? studentNames.join(', ') : `${studentNames[0]} và ${studentNames.length - 1} bạn khác`;
      }

      await createRoom({
        exam_id: examId,
        class_id: targetClassId,
        time_limit: assignTimeLimit,
        status: 'active',
        settings: {
          shuffle: false,
          allowRetry: true,
          showCorrectAnswers: true,
          showExplanations: true,
          passcode: assignPasscode.trim(),
          antiCheat: true,
          assigned_student_ids: assignStudentIds
        }
      });

      const count = assignStudentIds.length > 0 ? assignStudentIds.length : displayedStudents.length;
      setAssignedSuccessData({
        roomCode: 'Đã mở phòng',
        count,
        className: targetClassName,
        examTitle
      });
      toast.success(`🎉 Đã giao Đề Lấy Gốc ${subjectTag} (20 câu) cho học sinh thành công!`);
    } catch (err: any) {
      console.error(err);
      toast.error('Lỗi khi giao bài: ' + (err.message || 'Thử lại'));
    } finally {
      setIsSubmittingAssign(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-16">
      {/* ===================== BANNER ĐẦU TRANG ===================== */}
      {isStudentMode ? (
        <div className={`shadow-lg print:hidden transition-colors ${
          currentSubject === 'toan'
            ? 'bg-gradient-to-r from-red-800 via-rose-800 to-amber-700 text-white'
            : 'bg-gradient-to-r from-teal-900 via-cyan-900 to-blue-900 text-white'
        }`}>
          <div className="max-w-6xl mx-auto px-4 py-5 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl border border-white/20 shrink-0 shadow-inner">
                  {currentSubject === 'toan' ? '📐' : '🧪'}
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-wider text-amber-200 mb-1">
                    <span>LỚP HỌC THẦY THỌ • BÀI TẬP VỀ NHÀ ĐƯỢC GIAO</span>
                  </div>
                  <h1 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    {currentSubject === 'hoa' ? 'Môn Hóa Học' : 'Môn Toán Học'} – {currentTopic.title}
                  </h1>
                  <p className="text-white/80 text-xs mt-0.5">
                    🎯 <strong>ĐỀ SỐ {selectedExamNo.toString().padStart(2, '0')}</strong> • Chuẩn 20 câu hỏi trắc nghiệm • Thời gian làm bài: 20 phút (Tự động chấm điểm)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-3.5 py-2 rounded-xl bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Lock className="w-4 h-4 text-amber-300" />
                  <span>Đề thi được khóa cố định</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`shadow-lg print:hidden transition-colors ${
          currentSubject === 'toan'
            ? 'bg-gradient-to-r from-red-700 via-rose-700 to-amber-600 text-white'
            : 'bg-gradient-to-r from-teal-800 via-cyan-800 to-blue-700 text-white'
        }`}>
          <div className="max-w-6xl mx-auto px-4 py-8">
            {/* THANH CHUYỂN ĐỔI MÔN HỌC TOÁN / HÓA */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-black/20 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <button
                  onClick={() => handleSwitchSubject('toan')}
                  className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer ${
                    currentSubject === 'toan'
                      ? 'bg-white text-red-700 shadow-md ring-2 ring-amber-300'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Calculator className="w-4 h-4" />
                  <span>📐 Lấy Gốc Toán Học (Lớp 6 - 9)</span>
                </button>

                <button
                  onClick={() => handleSwitchSubject('hoa')}
                  className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer ${
                    currentSubject === 'hoa'
                      ? 'bg-white text-teal-800 shadow-md ring-2 ring-cyan-300'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>🧪 Lấy Gốc Hóa Học (Lớp 6 - 12)</span>
                </button>
              </div>

              <div className="text-xs font-bold text-amber-200 px-3 hidden md:block">
                {currentSubject === 'toan' ? '6 Chuyên đề • 60 Đề • 1.200 Câu' : '14 Chuyên đề (9 Vô cơ + 5 Hữu cơ) • 140 Đề • 2.800 Câu'}
              </div>
            </div>

            {/* SUB-FILTER PHÂN HỆ HÓA VÔ CƠ / HÓA HỮU CƠ */}
            {currentSubject === 'hoa' && (
              <div className="flex flex-wrap items-center gap-2 mb-6 bg-black/25 backdrop-blur-md p-1.5 rounded-2xl border border-teal-300/30">
                <span className="text-[11px] font-black uppercase text-teal-200 px-3">
                  Phân hệ:
                </span>
                <button
                  onClick={() => handleSwitchHoaBranch('all')}
                  className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
                    hoaBranchFilter === 'all'
                      ? 'bg-white text-teal-950 shadow-md ring-2 ring-cyan-400'
                      : 'text-teal-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>🧪 Toàn Bộ Hóa Học (14 Chuyên Đề • 140 Đề)</span>
                </button>
                <button
                  onClick={() => handleSwitchHoaBranch('vo_co')}
                  className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
                    hoaBranchFilter === 'vo_co'
                      ? 'bg-cyan-400 text-slate-950 shadow-md font-black ring-2 ring-white'
                      : 'text-cyan-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>⚗️ Hóa Học Vô Cơ (9 Chuyên Đề • Lớp 6 - 11)</span>
                </button>
                <button
                  onClick={() => handleSwitchHoaBranch('huu_co')}
                  className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
                    hoaBranchFilter === 'huu_co'
                      ? 'bg-emerald-400 text-slate-950 shadow-md font-black ring-2 ring-white'
                      : 'text-emerald-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>🌿 Hóa Học Hữu Cơ (5 Chuyên Đề • Lớp 11 - 12)</span>
                </button>
              </div>
            )}

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider mb-2">
                  <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
                  {currentSubject === 'toan' 
                    ? 'Hệ Thống Phục Hồi Mất Gốc Toán Cấp 2 (Lớp 6 - Lớp 9)' 
                    : 'Hệ Thống Phục Hồi Mất Gốc Hóa Học Toàn Diện (Hóa Vô Cơ & Hóa Hữu Cơ Lớp 6-12)'}
                </div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                  {currentSubject === 'toan' 
                    ? '⚡ LẤY GỐC TOÁN HỌC – 60 ĐỀ THI TIÊU CHUẨN (20 CÂU/ĐỀ)' 
                    : '🧪 LẤY GỐC HÓA HỌC – 140 ĐỀ THI VÔ CƠ & HỮU CƠ (20 CÂU/ĐỀ)'}
                </h1>
                <p className="text-rose-100 text-sm mt-1 max-w-2xl leading-relaxed">
                  {currentSubject === 'toan'
                    ? 'Chuyên sâu số tự nhiên, tìm x lớp 6, số âm, chuyển vế, phân số và khảo sát tổng hợp. Mỗi đề chuẩn 20 câu trắc nghiệm kèm lời giải chi tiết của Thầy Thọ.'
                    : 'Phân định bài bản giữa Hóa Vô Cơ (nguyên tố, CTHH, mol, axit-bazơ-muối, cấu tạo nguyên tử, oxi hóa khử) và Hóa Hữu Cơ (hiđrocacbon, ancol, este, cacbohiđrat, amin).'}
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                <div className="text-center px-3 border-r border-white/20">
                  <div className="text-2xl font-black text-amber-300">
                    {currentSubject === 'toan' ? '60' : hoaBranchFilter === 'vo_co' ? '90' : hoaBranchFilter === 'huu_co' ? '50' : '140'}
                  </div>
                  <div className="text-[10px] text-white/80 font-bold uppercase">Tổng số đề</div>
                </div>
                <div className="text-center px-3 border-r border-white/20">
                  <div className="text-2xl font-black text-emerald-300">20</div>
                  <div className="text-[10px] text-white/80 font-bold uppercase">Câu / Mỗi đề</div>
                </div>
                <div className="text-center px-3">
                  <div className="text-2xl font-black text-orange-300 flex items-center justify-center gap-1">
                    <Flame className="w-5 h-5 text-orange-400 fill-orange-400" />
                    {streak}
                  </div>
                  <div className="text-[10px] text-white/80 font-bold uppercase">Chuỗi đúng</div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
              <button
                onClick={() => setActiveTab('kho_de')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer ${
                  activeTab === 'kho_de' 
                    ? 'bg-white text-slate-900 shadow-md ring-2 ring-white/50' 
                    : 'bg-black/20 text-white hover:bg-black/30'
                }`}
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>📚 Kho {currentSubject === 'toan' ? '60 Đề Toán' : '140 Đề Hóa Học'} (20 Câu/Đề)</span>
              </button>

              <button
                onClick={() => setActiveTab('ly_thuyet')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer ${
                  activeTab === 'ly_thuyet' 
                    ? 'bg-white text-slate-900 shadow-md ring-2 ring-white/50' 
                    : 'bg-black/20 text-white hover:bg-black/30'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>📖 Bí Kíp Thần Chú & Lý Thuyết</span>
              </button>

              <button
                onClick={() => setActiveTab('luyen_tap')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer ${
                  activeTab === 'luyen_tap' 
                    ? 'bg-white text-slate-900 shadow-md ring-2 ring-white/50' 
                    : 'bg-black/20 text-white hover:bg-black/30'
                }`}
              >
                <Calculator className="w-4 h-4" />
                <span>⚡ Luyện Tập Nhanh Tự Do</span>
              </button>

              <button
                onClick={() => handleOpenAssignModal(currentSubject)}
                className="px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 shadow-md transition ml-auto cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-900" />
                <span>🎯 Giao Đề Cho Học Sinh Chỉ Định</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* ===================== TAB 1: KHO ĐỀ THI ===================== */}
        {activeTab === 'kho_de' && (
          <div className="space-y-6">
            {/* 1. BỘ CHỌN CHUYÊN ĐỀ CỦA MÔN ĐANG CHỌN */}
            {!isStudentMode && (
              <>
                <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="text-xs font-black uppercase text-slate-600 tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-red-600" />
                  BƯỚC 1: CHỌN CHUYÊN ĐỀ {currentSubject === 'toan' ? 'TOÁN HỌC (6 PHẦN)' : hoaBranchFilter === 'vo_co' ? 'HÓA HỌC VÔ CƠ (9 PHẦN • LỚP 6-11)' : hoaBranchFilter === 'huu_co' ? 'HÓA HỌC HỮU CƠ (5 PHẦN • LỚP 11-12)' : 'HÓA HỌC (14 PHẦN VÔ CƠ & HỮU CƠ)'}
                </div>
                <span className="text-[11px] font-bold text-slate-400">
                  Mỗi phần có đúng 10 Đề thi • Mỗi đề chuẩn 20 câu
                </span>
              </div>

              {/* Nút lọc nhanh Vô cơ / Hữu cơ ngay trong khung chọn */}
              {currentSubject === 'hoa' && (
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-3.5 max-w-fit border border-slate-200">
                  <button
                    onClick={() => handleSwitchHoaBranch('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      hoaBranchFilter === 'all'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    🧪 Tất cả (14 Phần)
                  </button>
                  <button
                    onClick={() => handleSwitchHoaBranch('vo_co')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                      hoaBranchFilter === 'vo_co'
                        ? 'bg-cyan-600 text-white shadow-xs font-extrabold'
                        : 'text-cyan-800 hover:bg-cyan-100/60'
                    }`}
                  >
                    <FlaskConical className="w-3.5 h-3.5" />
                    <span>⚗️ Hóa Vô Cơ (9 Phần)</span>
                  </button>
                  <button
                    onClick={() => handleSwitchHoaBranch('huu_co')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                      hoaBranchFilter === 'huu_co'
                        ? 'bg-emerald-600 text-white shadow-xs font-extrabold'
                        : 'text-emerald-800 hover:bg-emerald-100/60'
                    }`}
                  >
                    <span>🌿 Hóa Hữu Cơ (5 Phần)</span>
                  </button>
                </div>
              )}

              <div className={`grid gap-3 ${
                currentSubject === 'toan' 
                  ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6' 
                  : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
              }`}>
                {activeTopics.map((top: any) => {
                  const isSelected = selectedTopicId === top.id;
                  const isHuuCo = top.branch === 'huu_co';
                  return (
                    <button
                      key={top.id}
                      onClick={() => handleSelectExam(top.id, 1)}
                      className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                        isSelected
                          ? isHuuCo
                            ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                            : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-500 ring-2 ring-cyan-500/20 shadow-md'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-2xl">{top.icon}</span>
                        <div className="flex flex-col items-end gap-1">
                          {top.branch && (
                            <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider ${
                              isHuuCo ? 'bg-emerald-100 text-emerald-800' : 'bg-cyan-100 text-cyan-800'
                            }`}>
                              {isHuuCo ? 'Hữu cơ' : 'Vô cơ'}
                            </span>
                          )}
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                            isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            10 Đề
                          </span>
                        </div>
                      </div>
                      <h4 className="font-extrabold text-[13px] text-slate-900 mt-2 line-clamp-1 leading-snug">
                        {top.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {top.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. DẢI 10 ĐỀ THI CỦA PHẦN ĐANG CHỌN */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  BƯỚC 2: CHỌN ĐỀ THI TRONG {currentTopic.shortTitle.toUpperCase()} (ĐỀ 01 ➜ ĐỀ 10)
                </div>
                <div className="text-xs font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">
                  {selectedTopicId === 'khtn_nguyen_to' ? (
                    <span>
                      🎯 Đang mở: Đề {selectedExamNo.toString().padStart(2, '0')} (
                      <strong className="text-red-900">
                        {selectedExamNo % 2 === 1 ? 'Đề lẻ: Luyện Tên Nguyên Tố Cũ & Mới' : 'Đề chẵn: Cho Tên ➜ Tìm Nguyên Tử Khối'}
                      </strong>
                      )
                    </span>
                  ) : selectedTopicId === 'khtn_nguyen_to_short' ? (
                    <span>
                      🎯 Đang mở: Đề {selectedExamNo.toString().padStart(2, '0')} (
                      <strong className="text-teal-900">
                        ✍️ Đề Trả Lời Ngắn: Cho Kí Hiệu ➜ Điền Số Nguyên Tử Khối
                      </strong>
                      )
                    </span>
                  ) : (
                    <span>🎯 Đang mở: Đề {selectedExamNo.toString().padStart(2, '0')} (Chuẩn 20 câu hỏi)</span>
                  )}
                </div>
              </div>

              {/* NÚT CHUYỂN NHANH 2 BỘ ĐỀ TRẮC NGHIỆM & TRẢ LỜI NGẮN */}
              {(selectedTopicId === 'khtn_nguyen_to' || selectedTopicId === 'khtn_nguyen_to_short') && (
                <div className="flex flex-wrap items-center gap-2 mb-3.5 p-1.5 bg-slate-100 rounded-2xl w-fit border border-slate-200">
                  <button
                    type="button"
                    onClick={() => handleSelectExam('khtn_nguyen_to', selectedExamNo)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
                      selectedTopicId === 'khtn_nguyen_to'
                        ? 'bg-white text-teal-900 shadow-sm ring-1 ring-slate-300'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>⚛️ 10 Đề Trắc Nghiệm (Xen kẽ Tên & NTK)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectExam('khtn_nguyen_to_short', selectedExamNo)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
                      selectedTopicId === 'khtn_nguyen_to_short'
                        ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white shadow-sm ring-1 ring-teal-500'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>✍️ 10 Đề Trả Lời Ngắn (Cho Kí Hiệu ➜ Điền NTK)</span>
                  </button>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((no) => {
                  const isCur = selectedExamNo === no;
                  const isNtkTopic = selectedTopicId === 'khtn_nguyen_to';
                  const isShortTopic = selectedTopicId === 'khtn_nguyen_to_short';
                  const ntkSubtitle = no % 2 === 1 ? '🏷️ Tên ng.tố' : '⚖️ Tìm NTK';

                  return (
                    <button
                      key={no}
                      onClick={() => handleSelectExam(selectedTopicId, no)}
                      className={`py-2.5 px-1.5 rounded-xl text-center border font-extrabold transition-all cursor-pointer ${
                        isCur
                          ? 'bg-gradient-to-b from-red-600 to-rose-700 text-white border-red-700 shadow-md shadow-red-600/30 ring-2 ring-red-400'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-sm font-black">
                        Đề {no.toString().padStart(2, '0')}
                      </div>
                      <div className={`text-[10px] mt-0.5 truncate ${
                        isCur 
                          ? 'text-amber-200 font-bold' 
                          : isShortTopic 
                          ? 'text-teal-700 font-bold' 
                          : isNtkTopic 
                          ? 'text-teal-700 font-semibold' 
                          : 'text-slate-400'
                      }`}>
                        {isShortTopic ? '✍️ Điền NTK' : isNtkTopic ? ntkSubtitle : '20 câu'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

            {/* 3. CHI TIẾT ĐỀ THI ĐANG MỞ & KHU VỰC LÀM BÀI */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-100 text-red-800 text-[11px] font-black uppercase mb-1">
                    {currentTopic.shortTitle}
                  </div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span>{currentTopic.icon}</span>
                    <span>
                      {selectedTopicId === 'khtn_nguyen_to'
                        ? `ĐỀ SỐ ${selectedExamNo.toString().padStart(2, '0')} – ${selectedExamNo % 2 === 1 ? 'XÁC ĐỊNH TÊN NGUYÊN TỐ (CẢ TÊN CŨ & MỚI)' : 'CHO TÊN ➜ TÌM CHỌN NGUYÊN TỬ KHỐI (NTK)'}`
                        : selectedTopicId === 'khtn_nguyen_to_short'
                        ? `ĐỀ SỐ ${selectedExamNo.toString().padStart(2, '0')} – TRẢ LỜI NGẮN: CHO KÍ HIỆU HOÁ HỌC ➜ ĐIỀN NGUYÊN TỬ KHỐI`
                        : `ĐỀ SỐ ${selectedExamNo.toString().padStart(2, '0')} – 20 CÂU HỎI TRẮC NGHIỆM`}
                    </span>
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1.5">
                    <span className="flex items-center gap-1 font-bold text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Thời gian: 20 phút
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-bold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      20 câu chuẩn kiến thức có Lời giải
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-bold text-slate-700">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      Thang điểm: 10.0
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {!isStudentMode ? (
                    <>
                      {/* NÚT TẠO VÀ SAO CHÉP LINK GỬI CHO HỌC SINH / PHỤ HUYNH */}
                      <button
                        onClick={() => setIsShareModalOpen(true)}
                        className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm hover:shadow transition cursor-pointer"
                        title="Mở bảng hướng dẫn gửi link và mã QR cho học sinh / phụ huynh"
                      >
                        <Share2 className="w-4 h-4 text-white" />
                        <span>🔗 Tạo Link & QR Gửi PH</span>
                      </button>

                      {/* NÚT COPY NHANH LINK ĐỀ THI 1 CHẠM */}
                      <button
                        onClick={handleCopyLinkOnly}
                        className="px-3.5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm hover:shadow transition cursor-pointer"
                        title="Sao chép nhanh link làm bài của đề này để gửi ngay"
                      >
                        {isCopiedShareLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-emerald-600" />}
                        <span>{isCopiedShareLink ? '✓ Đã Chép Link!' : 'Copy Link Nhanh'}</span>
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold shadow-xs">
                      <Lock className="w-3.5 h-3.5 text-amber-600" />
                      <span>Đề thi được giao chỉ định bởi Thầy Thọ</span>
                    </div>
                  )}

                  {/* NÚT XEM LỊCH SỬ TẤT CẢ CÁC LẦN LÀM BÀI */}
                  <button
                    onClick={() => setIsHistoryModalOpen(true)}
                    className="px-3.5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm hover:shadow transition cursor-pointer"
                    title="Xem lịch sử điểm số và kết quả các lần làm bài của đề này"
                  >
                    <History className="w-4 h-4 text-blue-700" />
                    <span>Lịch Sử ({examHistory.length} lần)</span>
                    {examHistory.length > 0 && (
                      <span className="px-1.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold">
                        Max: {Math.max(...examHistory.map(h => h.score10))}đ
                      </span>
                    )}
                  </button>

                  {!isStudentMode && !isPublic && (
                    <>
                      <button
                        onClick={() => handleOpenAssignModal(currentSubject, selectedTopicId, selectedExamNo)}
                        className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm transition cursor-pointer"
                      >
                        <Send className="w-4 h-4 text-slate-900" />
                        <span>Giao Đề Này Cho HS</span>
                      </button>

                      <button
                        onClick={() => setIsScanModalOpen(true)}
                        className="px-4 py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm hover:shadow transition cursor-pointer"
                        title="Tải lên 10-50 ảnh bài làm đã scan để AI tự động nhận diện họ tên, đọc đáp án và chấm điểm hàng loạt"
                      >
                        <Sparkles className="w-4 h-4 text-purple-700" />
                        <span>Quét Ảnh Chấm Bài AI</span>
                      </button>
                    </>
                  )}

                  {!isStudentMode && (
                    <button
                      onClick={() => setIsPrintModalOpen(true)}
                      className="px-4 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm hover:shadow transition cursor-pointer"
                      title="In bản giấy A4 hoặc Tải file PDF cho học sinh làm bài"
                    >
                      <Printer className="w-4 h-4 text-teal-700" />
                      <span>In Đề / Tải File PDF (A4)</span>
                    </button>
                  )}

                  {/* NÚT BẮT ĐẦU HOẶC ĐỒNG HỒ ĐANG ĐẾM NGƯỢC */}
                  {!isExamTimerActive && !isExamSubmitted ? (
                    <button
                      onClick={() => {
                        setIsExamTimerActive(true);
                        setExamTimeLeft(1200);
                        setTabSwitchCount(0);
                        setViewingPastAttempt(null);
                        toast.success('⏱️ Đã bắt đầu tính giờ 20 phút làm bài! Chú ý: Không thoát ra quá 3 lần nhé.');
                      }}
                      className="px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-sm transition cursor-pointer"
                    >
                      <Clock className="w-4 h-4" />
                      <span>Bắt đầu tính giờ (20p)</span>
                    </button>
                  ) : isExamTimerActive && !isExamSubmitted ? (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 font-mono font-black text-rose-700 bg-rose-50 px-3 py-2 rounded-xl border border-rose-200 text-xs shadow-xs">
                        <Clock className="w-4 h-4 animate-spin text-rose-600" />
                        <span>{formatTime(examTimeLeft)}</span>
                      </div>
                      
                      {/* HUY HIỆU CẢNH BÁO RỜI TAB KHI ĐANG LÀM BÀI */}
                      {tabSwitchCount > 0 ? (
                        <div 
                          onClick={() => setShowViolationModal(true)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-600 text-white font-black text-xs animate-pulse shadow-md cursor-pointer"
                          title="Click xem chi tiết cảnh báo"
                        >
                          <ShieldAlert className="w-4 h-4 text-amber-300" />
                          <span>RỜI TAB: {tabSwitchCount}/3 LẦN!</span>
                        </div>
                      ) : (
                        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs border border-slate-200">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Chống gian lận: 0/3</span>
                        </div>
                      )}
                    </div>
                  ) : null}

                  {/* NÚT LÀM LẠI BÀI NÀY (LẦN TIẾP THEO) KHI ĐÃ NỘP BÀI */}
                  {isExamSubmitted && (
                    <button
                      onClick={handleRetakeExam}
                      className="px-4 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md shadow-red-500/20 transition cursor-pointer"
                      title="Làm lại đề này để cải thiện điểm số và lưu vào lịch sử"
                    >
                      <RotateCcw className="w-4 h-4 text-white" />
                      <span>Làm Lại Bài Này (Lần {examHistory.length + 1})</span>
                    </button>
                  )}
                </div>
              </div>

              {/* BANNER NẾU ĐANG XEM LẠI BÀI LÀM CỦA 1 LẦN TRONG QUÁ KHỨ */}
              {viewingPastAttempt && (
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-base shadow-xs shrink-0">
                      #{viewingPastAttempt.attemptNo}
                    </div>
                    <div>
                      <div className="text-xs font-black text-blue-900 flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-blue-700" />
                        <span>ĐANG XEM LẠI KẾT QUẢ BÀI LÀM LẦN {viewingPastAttempt.attemptNo}</span>
                        {viewingPastAttempt.isAutoSubmittedByViolation && (
                          <span className="px-1.5 py-0.5 rounded-md bg-red-100 text-red-800 text-[10px] font-black">
                            🚨 Thu bài do vi phạm rời tab
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-blue-800 mt-0.5">
                        Điểm số: <strong className="text-red-600 font-black">{viewingPastAttempt.score10}/10</strong> ({viewingPastAttempt.correctCount}/{viewingPastAttempt.totalQuestions} câu) • Ngày nộp: {viewingPastAttempt.dateFormatted} • Vi phạm: {viewingPastAttempt.violations} lần
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={() => setIsHistoryModalOpen(true)}
                      className="px-3 py-1.5 bg-white border border-blue-200 hover:bg-blue-100 text-blue-900 rounded-lg text-xs font-bold transition cursor-pointer"
                    >
                      Xem các lần khác
                    </button>
                    <button
                      onClick={handleRetakeExam}
                      className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-black shadow-xs transition cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Làm lần mới</span>
                    </button>
                  </div>
                </div>
              )}

              {/* BẢNG KẾT QUẢ ĐIỂM SỐ NẾU ĐÃ NỘP BÀI (THEO 4 MỐC ĐỘNG VIÊN) */}
              {isExamSubmitted && (() => {
                const enc = getExamEncouragement(examResultStats.score10);
                return (
                  <div className={`mb-8 p-6 bg-gradient-to-r ${enc.bgGradient} rounded-2xl border shadow-sm transition-all`}>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                      <div className="flex items-start sm:items-center gap-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center shrink-0 shadow-sm">
                          <span className="text-2xl sm:text-3xl font-black text-red-600 leading-none">
                            {examResultStats.score10}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 mt-1">/ 10.0 đ</span>
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="text-xs font-black uppercase text-slate-700 tracking-wider">
                              KẾT QUẢ LÀM BÀI – ĐỀ SỐ {selectedExamNo.toString().padStart(2, '0')}
                            </span>
                            <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-2xs ${enc.colorClass}`}>
                              {enc.badge}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                            {enc.title}
                          </h3>
                          <div className="text-xs sm:text-sm text-slate-700 mt-2 font-medium leading-relaxed max-w-2xl bg-white/80 p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                            💬 <strong className="text-slate-900">Lời Thầy Thọ nhắn nhủ:</strong> {enc.message}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-2.5">
                            <span>
                              Đúng: <strong className="text-emerald-700 font-bold">{examResultStats.correctCount} / {examResultStats.total} câu</strong> ({examResultStats.percentage}%)
                            </span>
                            <span>•</span>
                            <span>
                              Điểm: <strong className="text-red-600 font-black">{examResultStats.score10} / 10.0</strong>
                            </span>
                            {tabSwitchCount > 0 && (
                              <>
                                <span>•</span>
                                <span className="inline-flex items-center gap-1 font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md">
                                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                                  Rời tab: {tabSwitchCount} lần
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end shrink-0">
                        {examResultStats.score10 >= 10 && (
                          <button
                            type="button"
                            onClick={() => setShowFireworks(true)}
                            className="px-3.5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-black rounded-xl text-xs shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                            title="Bắn pháo hoa chúc mừng điểm 10 tuyệt đối"
                          >
                            <span>🎆</span>
                            <span>Bắn Pháo Hoa</span>
                          </button>
                        )}
                        <button
                          onClick={() => setIsHistoryModalOpen(true)}
                          className="px-3.5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-xl text-xs font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <History className="w-4 h-4 text-blue-700" />
                          <span>Xem Lịch Sử ({examHistory.length})</span>
                        </button>
                        <button
                          onClick={() => setShowAllExplanations(!showAllExplanations)}
                          className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold shadow-xs transition cursor-pointer"
                        >
                          {showAllExplanations ? 'Ẩn lời giải' : 'Hiện toàn bộ lời giải'}
                        </button>
                        <button
                          onClick={handleRetakeExam}
                          className="px-4 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white rounded-xl text-xs font-black shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Làm Lần Mới</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* DANH SÁCH TOÀN BỘ 20 CÂU HỎI (TRẮC NGHIỆM HOẶC TRẢ LỜI NGẮN) */}
              <div className="space-y-5">
                {currentExamQuestions.map((q: any, idx: number) => {
                  const userAns = examAnswers[q.id];
                  const hasAnswered = userAns !== undefined && String(userAns).trim() !== '';
                  const isCorrect = checkLayGocAnswerCorrect(userAns, q);
                  const showExp = showAllExplanations || isExamSubmitted;
                  const isShortAnswer = q.questionType === 'short_answer' || !q.options || q.options.length === 0;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        isExamSubmitted
                          ? isCorrect
                            ? 'bg-emerald-50/40 border-emerald-300 ring-2 ring-emerald-500/10'
                            : 'bg-rose-50/40 border-rose-300 ring-2 ring-rose-500/10'
                          : hasAnswered
                          ? 'bg-amber-50/20 border-amber-300'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                            Câu {idx + 1} / 20
                          </span>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                            isShortAnswer ? 'bg-teal-50 text-teal-800 border border-teal-200' : 'text-slate-400'
                          }`}>
                            {isShortAnswer ? '✍️ Trả lời ngắn (0.5 điểm)' : '(0.5 điểm)'}
                          </span>
                        </div>

                        {isExamSubmitted && (
                          <span className={`inline-flex items-center gap-1 text-xs font-black px-2.5 py-0.5 rounded-full ${
                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                            {isCorrect ? 'Chính xác (+0.5đ)' : 'Chưa đúng'}
                          </span>
                        )}
                      </div>

                      <div className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-relaxed tracking-normal">
                        <MathText html={q.question.replace(/^Câu \d+:\s*/, '')} />
                      </div>

                      {q.mathExpression && (
                        <div className="my-3.5 py-3.5 px-4 bg-teal-50/90 border border-teal-200 rounded-2xl text-center text-xl sm:text-2xl font-black text-teal-950 tracking-wide shadow-xs">
                          <MathText html={`$$${q.mathExpression}$$`} block />
                        </div>
                      )}

                      {/* DẠNG 1: TRẢ LỜI NGẮN (ĐIỀN SỐ HOẶC CHỮ VÀO Ô TRỐNG) */}
                      {isShortAnswer ? (
                        <div className="mt-4 p-4 rounded-2xl bg-teal-50/40 border border-teal-100">
                          <div className="text-xs font-bold text-teal-900 mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-teal-600" />
                            <span>✍️ Ô nhập trả lời ngắn (Nhập số nguyên tử khối):</span>
                          </div>
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <div className="relative flex-1 max-w-md">
                              <input
                                type="text"
                                disabled={isExamSubmitted}
                                value={examAnswers[q.id] || ''}
                                onChange={(e) => {
                                  setExamAnswers(prev => ({ ...prev, [q.id]: e.target.value }));
                                }}
                                placeholder="Nhập số NTK (ví dụ: 23, 56, 35.5)..."
                                className={`w-full px-4 py-3 text-base sm:text-lg font-bold rounded-xl border transition outline-none ${
                                  isExamSubmitted
                                    ? isCorrect
                                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20'
                                      : 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400/20'
                                    : hasAnswered
                                    ? 'bg-white border-teal-500 ring-2 ring-teal-500/20 text-slate-900 shadow-xs'
                                    : 'bg-white border-slate-300 text-slate-900 focus:border-teal-500'
                                }`}
                              />
                            </div>
                            {isExamSubmitted && (
                              <div className={`px-3.5 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 shrink-0 ${
                                isCorrect
                                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                  : 'bg-rose-100 text-rose-900 border border-rose-300'
                              }`}>
                                {isCorrect ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span>Chính xác (+0.5đ)</span>
                                  </>
                                ) : (
                                  <>
                                    <XCircle className="w-4 h-4 text-rose-600" />
                                    <span>Đ/A đúng: {q.correctAnswer} amu</span>
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                          {!isExamSubmitted && (
                            <div className="text-[11px] text-slate-500 mt-2 italic">
                              * Hướng dẫn: Thí sinh chỉ cần gõ số nguyên tử khối (ví dụ: <strong>23</strong>, <strong>56</strong>, <strong>35.5</strong>) rồi chuyển sang câu tiếp theo.
                            </div>
                          )}
                        </div>
                      ) : (
                        /* DẠNG 2: TRẮC NGHIỆM 4 PHƯƠNG ÁN A, B, C, D */
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                          {q.options.map((opt: string, oIdx: number) => {
                            const letters = ['A', 'B', 'C', 'D'];
                            const letter = letters[oIdx] || 'A';
                            const isSelected = userAns === opt;
                            const isRightOption = opt === q.correctAnswer;

                            let btnStyle = 'bg-slate-50/80 border-slate-200 hover:bg-slate-100 text-slate-800 hover:border-slate-300';

                            if (isExamSubmitted) {
                              if (isRightOption) {
                                btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-500/20';
                              } else if (isSelected && !isRightOption) {
                                btnStyle = 'bg-rose-100 border-rose-400 text-rose-900 line-through';
                              }
                            } else if (isSelected) {
                              btnStyle = 'bg-red-50 border-red-500 text-red-700 font-extrabold ring-2 ring-red-500/20';
                            }

                            return (
                              <button
                                key={oIdx}
                                disabled={isExamSubmitted}
                                onClick={() => {
                                  setExamAnswers(prev => ({ ...prev, [q.id]: opt }));
                                }}
                                className={`p-3.5 sm:p-4 rounded-2xl border text-sm sm:text-base font-semibold text-left transition flex items-center gap-3 cursor-pointer ${btnStyle}`}
                              >
                                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 ${
                                  isSelected ? 'bg-red-600 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-700 shadow-xs'
                                }`}>
                                  {letter}
                                </span>
                                <div className="flex-1 leading-relaxed">
                                  {opt.includes('$') || opt.includes('\\') ? (
                                    <MathText html={opt.startsWith('$') ? opt : `$${opt}$`} />
                                  ) : (
                                    opt
                                  )}
                                </div>
                                {isExamSubmitted && isRightOption && (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {showExp && (
                        <div className={`mt-4 p-4 rounded-2xl text-sm sm:text-base leading-relaxed border ${
                          isCorrect 
                            ? 'bg-emerald-50/80 text-emerald-950 border-emerald-200' 
                            : 'bg-amber-50/80 text-amber-950 border-amber-200'
                        }`}>
                          <div className="font-extrabold flex items-center gap-1.5 mb-1.5 text-slate-900 text-sm">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <span>💡 Lời giải chi tiết Thầy Thọ:</span>
                            <span className="font-bold text-emerald-700 ml-auto text-sm">
                              Đáp án đúng: {q.correctAnswer} {isShortAnswer ? 'amu' : ''}
                            </span>
                          </div>
                          <div className="text-slate-800 leading-relaxed font-normal">
                            <MathText html={q.explanation} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Nút Nộp Bài ở cuối trang */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Đã làm: <strong className="text-slate-800">{Object.keys(examAnswers).length} / 20 câu</strong>
                </div>

                {!isExamSubmitted ? (
                  <button
                    onClick={() => {
                      if (Object.keys(examAnswers).length < 20) {
                        if (!confirm(`Em mới trả lời ${Object.keys(examAnswers).length}/20 câu. Em có chắc muốn nộp bài ngay không?`)) {
                          return;
                        }
                      }
                      handleSubmitExamFinal(false);
                    }}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-sm rounded-2xl shadow-lg shadow-red-600/30 hover:shadow-xl transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Nộp Bài & Lưu Kết Quả (Lần {examHistory.length + 1})</span>
                  </button>
                ) : (
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleRetakeExam}
                      className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black rounded-2xl shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4 text-white" />
                      <span>Làm Lại Bài Này (Lần {examHistory.length + 1})</span>
                    </button>

                    <button
                      onClick={() => setIsHistoryModalOpen(true)}
                      className="px-5 py-3 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold rounded-2xl transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <History className="w-4 h-4 text-blue-700" />
                      <span>Xem Lịch Sử ({examHistory.length} lần)</span>
                    </button>

                    {!isStudentMode && selectedExamNo < 10 && (
                      <button
                        onClick={() => handleSelectExam(selectedTopicId, selectedExamNo + 1)}
                        className="flex-1 sm:flex-none px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-2xl shadow-sm transition cursor-pointer flex items-center gap-2 justify-center"
                      >
                        <span>Đề {(selectedExamNo + 1).toString().padStart(2, '0')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 2: BÍ KÍP THẦN CHÚ LÝ THUYẾT (TOÁN & HÓA) ===================== */}
        {activeTab === 'ly_thuyet' && (
          <div className="space-y-6">
            {currentSubject === 'hoa' ? (
              /* BÍ KÍP HÓA HỌC - TÁCH RÕ VÔ CƠ & HỮU CƠ */
              <div className="space-y-8">
                {/* ----------------- I. PHẦN HÓA HỌC VÔ CƠ ----------------- */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-100/80 text-cyan-900 font-black text-sm max-w-fit border border-cyan-200">
                    <FlaskConical className="w-4 h-4 text-cyan-700" />
                    <span>I. BÍ KÍP THẦN CHÚ HÓA HỌC VÔ CƠ (LỚP 6 - 11)</span>
                  </div>

                  {/* BẢNG NGUYÊN TỬ KHỐI CÁC NGUYÊN TỐ CỐT LÕI */}
                  <div className="bg-gradient-to-br from-teal-50 via-white to-sky-50 rounded-2xl p-6 shadow-sm border border-teal-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-teal-100 pb-3">
                      <div className="flex items-center gap-2.5 text-teal-900 font-black text-lg">
                        <Award className="w-6 h-6 text-teal-600" />
                        <span>BẢNG NGUYÊN TỬ KHỐI CÁC NGUYÊN TỐ CỐT LÕI (BẮT BUỘC THUỘC LÒNG)</span>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-600 text-white shadow-sm w-fit">
                        Lấy Gốc Hóa Học Cấp 2 & 3
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      💡 <strong>Nguyên tử khối (M)</strong> tính theo đơn vị <strong>amu</strong> (hoặc đvC). Đây là các nguyên tố xuất hiện 98% trong mọi đề kiểm tra, thi vào 10 và THPT Quốc gia (đã bổ sung đầy đủ cả <strong>Brom (Br = 80)</strong> và <strong>Crom (Cr = 52)</strong>):
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2.5 text-center">
                      {[
                        { s: 'H', oldName: 'Hiđro', newName: 'Hydrogen', m: '1' },
                        { s: 'Li', oldName: 'Liti', newName: 'Lithium', m: '7' },
                        { s: 'C', oldName: 'Cacbon', newName: 'Carbon', m: '12' },
                        { s: 'N', oldName: 'Nitơ', newName: 'Nitrogen', m: '14' },
                        { s: 'O', oldName: 'Oxi', newName: 'Oxygen', m: '16' },
                        { s: 'F', oldName: 'Flo', newName: 'Fluorine', m: '19' },
                        { s: 'Ne', oldName: 'Neon', newName: 'Neon', m: '20' },
                        { s: 'Na', oldName: 'Natri', newName: 'Sodium', m: '23' },
                        { s: 'Mg', oldName: 'Magie', newName: 'Magnesium', m: '24' },
                        { s: 'Al', oldName: 'Nhôm', newName: 'Aluminium', m: '27' },
                        { s: 'Cl', oldName: 'Clo', newName: 'Chlorine', m: '35.5' },
                        { s: 'Ar', oldName: 'Agon', newName: 'Argon', m: '40' },
                        { s: 'K', oldName: 'Kali', newName: 'Potassium', m: '39' },
                        { s: 'Ca', oldName: 'Canxi', newName: 'Calcium', m: '40' },
                        { s: 'Fe', oldName: 'Sắt', newName: 'Iron', m: '56' },
                        { s: 'Cu', oldName: 'Đồng', newName: 'Copper', m: '64' },
                        { s: 'Zn', oldName: 'Kẽm', newName: 'Zinc', m: '65' },
                        { s: 'Ag', oldName: 'Bạc', newName: 'Silver', m: '108' },
                        { s: 'Ba', oldName: 'Bari', newName: 'Barium', m: '137' },
                        { s: 'S', oldName: 'Lưu huỳnh', newName: 'Sulfur', m: '32' },
                        { s: 'Br', oldName: 'Brom', newName: 'Bromine', m: '80' },
                        { s: 'Cr', oldName: 'Crom', newName: 'Chromium', m: '52' },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white p-2.5 rounded-xl border border-teal-100 shadow-xs hover:border-teal-400 hover:shadow-md transition flex flex-col justify-between">
                          <div className="text-xl font-black text-teal-700 font-mono">{item.s}</div>
                          <div className="my-1">
                            <div className="text-[11px] font-bold text-slate-800 leading-tight">{item.oldName}</div>
                            <div className="text-[10px] text-sky-600 font-medium italic leading-tight">({item.newName})</div>
                          </div>
                          <div className="text-xs font-black text-rose-600 mt-1 bg-rose-50 rounded py-0.5 border border-rose-100">
                            M = {item.m}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-teal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <span className="text-slate-500 italic">
                        * Mẹo nhớ: C (12), N (14), O (16) chẵn cách nhau 2 đơn vị; Na (23), Mg (24), Al (27); Fe (56), Cu (64), Zn (65).
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedTopicId('khtn_nguyen_to');
                            setSelectedExamNo(1);
                            setActiveTab('exams');
                            toast.success('Đã mở 10 Đề Trắc Nghiệm Nguyên Tử Khối!');
                          }}
                          className="px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 rounded-lg font-bold flex items-center gap-1 cursor-pointer transition"
                        >
                          👉 10 Đề Trắc Nghiệm NTK
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedTopicId('khtn_nguyen_to_short');
                            setSelectedExamNo(1);
                            setActiveTab('exams');
                            toast.success('Đã mở 10 Đề Trả Lời Ngắn Theo Kí Hiệu!');
                          }}
                          className="px-3 py-1.5 bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white rounded-lg font-black flex items-center gap-1 cursor-pointer shadow-xs transition"
                        >
                          ✍️ 10 Đề Trả Lời Ngắn (Điền NTK)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tính phân tử khối */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2.5 mb-4 text-sky-800 font-black text-lg border-b pb-3">
                      <Scale className="w-6 h-6 text-sky-600" />
                      QUY TẮC TÍNH KHỐI LƯỢNG PHÂN TỬ (PHÂN TỬ KHỐI - LỚP 7 & 8)
                    </div>
                    <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl mb-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
                      <div className="font-extrabold text-sky-950 mb-1">
                        🎯 Công thức tổng quát cho hợp chất A_x B_y C_z:
                      </div>
                      <div className="text-sm sm:text-base font-black text-sky-900 bg-white/80 px-3 py-2 rounded-lg border border-sky-300 inline-block my-1.5">
                        KLPT = x . M_A + y . M_B + z . M_C (đơn vị: amu hoặc đvC)
                      </div>
                      <p className="text-slate-600 text-xs mt-1">
                        * Lưu ý với muối ngậm nước (ví dụ CuSO₄ . 5H₂O): Dấu chấm "." nghĩa là cộng thêm phân tử nước kết tinh: KLPT = M(CuSO₄) + 5 . M(H₂O) = 160 + 90 = 250 amu.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 mb-2">📊 Nguyên tử khối các nguyên tố hay gặp nhất:</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">H = 1</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">C = 12</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">N = 14</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">O = 16</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Na = 23</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Mg = 24</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Al = 27</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">P = 31</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">S = 32</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Cl = 35.5</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">K = 39</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Ca = 40</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Cr = 52</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Fe = 56</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Cu = 64</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Zn = 65</span>
                          <span className="bg-white px-2.5 py-1 rounded border font-semibold">Br = 80</span>
                        </div>
                      </div>

                      <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                        <h4 className="font-extrabold text-emerald-900 mb-2">⚡ Các phân tử khối kinh điển cần nhớ:</h4>
                        <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                          <li>• <strong>H₂O:</strong> 1 . 2 + 16 = <strong>18</strong> amu</li>
                          <li>• <strong>CO₂:</strong> 12 + 16 . 2 = <strong>44</strong> amu</li>
                          <li>• <strong>NaOH:</strong> 23 + 16 + 1 = <strong>40</strong> amu</li>
                          <li>• <strong>CaCO₃:</strong> 40 + 12 + 16 . 3 = <strong>100</strong> amu</li>
                          <li>• <strong>H₂SO₄:</strong> 1 . 2 + 32 + 16 . 4 = <strong>98</strong> amu</li>
                          <li>• <strong>Al₂O₃:</strong> 27 . 2 + 16 . 3 = <strong>102</strong> amu</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bài ca hóa trị */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2.5 mb-4 text-teal-800 font-black text-lg border-b pb-3">
                      <Sparkles className="w-6 h-6 text-teal-600" />
                      BÀI CA HÓA TRỊ KINH ĐIỂN (XÓA MẤT GỐC HÓA HỌC)
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <div className="bg-teal-50/70 p-4 rounded-xl border border-teal-200">
                        <h4 className="font-extrabold text-teal-900 mb-2">⭐ Hóa trị I & II phổ biến</h4>
                        <ul className="space-y-1.5 font-sans">
                          <li><strong>Hóa trị I:</strong> K, Na, H, Ag, Cl (Kali, Natri, Hiđro, Bạc, Clo).</li>
                          <li><strong>Hóa trị II:</strong> Ca, Ba, Mg, Zn, Fe, Cu, O (Canxi, Bari, Magie, Kẽm, Sắt, Đồng, Oxi).</li>
                          <li><strong>Hóa trị III:</strong> Nhôm (Al), Sắt (Fe khi tác dụng Cl₂ hoặc axit có tính oxi hóa mạnh).</li>
                        </ul>
                      </div>
                      <div className="bg-cyan-50/70 p-4 rounded-xl border border-cyan-200">
                        <h4 className="font-extrabold text-cyan-900 mb-2">⚡ Hóa trị của các nhóm nguyên tử</h4>
                        <ul className="space-y-1.5 font-sans">
                          <li><strong>Hóa trị I:</strong> Nhóm -OH (hiđroxit), -NO₃ (nitrat).</li>
                          <li><strong>Hóa trị II:</strong> Nhóm =SO₄ (sunfat), =CO₃ (cacbonat), =SO₃ (sunfit).</li>
                          <li><strong>Hóa trị III:</strong> Nhóm ≡PO₄ (photphat).</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Dãy hoạt động kim loại */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2.5 mb-3 text-blue-800 font-black text-lg border-b pb-3">
                      <Zap className="w-6 h-6 text-amber-500" />
                      DÃY HOẠT ĐỘNG HÓA HỌC KIM LOẠI & MẸO NHỚ
                    </div>
                    <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <div className="font-sans text-sm sm:text-base font-black text-blue-900 mb-2 tracking-wide">
                        K, Na, Ba, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Hg, Ag, Pt, Au
                      </div>
                      <div className="text-slate-800 font-bold mb-1">
                        🗣️ Câu thần chú: <em>"Khi Nào Bạn Cần May Áo Giáp Sắt Nên Sang Phố Hỏi Cửa Hàng Á Phi Âu"</em>
                      </div>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                        <li>Kim loại đứng trước H tác dụng với HCl, H₂SO₄ loãng giải phóng khí H₂.</li>
                        <li>Kim loại đứng trước đẩy kim loại đứng sau ra khỏi dung dịch muối (trừ K, Na, Ba, Ca tác dụng với nước trước).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Bộ công thức tính mol */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2.5 mb-3 text-purple-800 font-black text-lg border-b pb-3">
                      <Calculator className="w-6 h-6 text-purple-600" />
                      BỘ CÔNG THỨC TÍNH MOL & NỒNG ĐỘ DUNG DỊCH
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-center">
                      <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                        <div className="text-xs font-bold text-slate-500">Theo khối lượng</div>
                        <div className="font-black text-purple-800 text-base my-1">n = m / M</div>
                        <div className="text-[11px] text-slate-500">m(g), M(g/mol)</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                        <div className="text-xs font-bold text-slate-500">Thể tích khí (đktc)</div>
                        <div className="font-black text-purple-800 text-base my-1">n = V / 22,4</div>
                        <div className="text-[11px] text-slate-500">V tính bằng lít</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                        <div className="text-xs font-bold text-slate-500">Nồng độ mol CM</div>
                        <div className="font-black text-purple-800 text-base my-1">C_M = n / V</div>
                        <div className="text-[11px] text-slate-500">V dung dịch (lít)</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                        <div className="text-xs font-bold text-slate-500">Nồng độ % C%</div>
                        <div className="font-black text-purple-800 text-base my-1">C% = (m_ct/m_dd) . 100%</div>
                        <div className="text-[11px] text-slate-500">m_dd = m_ct + m_dm</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ----------------- II. PHẦN HÓA HỌC HỮU CƠ ----------------- */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-black text-sm max-w-fit border border-emerald-200">
                    <Award className="w-4 h-4 text-emerald-700" />
                    <span>II. BÍ KÍP THẦN CHÚ HÓA HỌC HỮU CƠ (LỚP 11 - 12)</span>
                  </div>

                  {/* Bảng công thức tổng quát */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="font-black text-emerald-900 text-lg mb-3 flex items-center gap-2">
                      <span>🌿</span>
                      <span>BẢNG CÔNG THỨC TỔNG QUÁT CÁC DÃY ĐỒNG ĐẲNG HỮU CƠ</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                      <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200">
                        <span className="font-bold text-emerald-900 block">Ankan (no, hở):</span>
                        <div className="font-bold text-emerald-800 text-sm my-1">C_n H_{'{2n+2}'} (n ≥ 1)</div>
                        <p className="text-[11px] text-slate-600">Đặc trưng: Phản ứng thế Cl₂ (ánh sáng).</p>
                      </div>
                      <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200">
                        <span className="font-bold text-emerald-900 block">Anken (1 nối đôi C=C):</span>
                        <div className="font-bold text-emerald-800 text-sm my-1">C_n H_{'{2n}'} (n ≥ 2)</div>
                        <p className="text-[11px] text-slate-600">Đặc trưng: Làm mất màu dung dịch Br₂.</p>
                      </div>
                      <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200">
                        <span className="font-bold text-emerald-900 block">Ankin (1 nối ba C≡C):</span>
                        <div className="font-bold text-emerald-800 text-sm my-1">C_n H_{'{2n-2}'} (n ≥ 2)</div>
                        <p className="text-[11px] text-slate-600">Ank-1-in tạo kết tủa vàng với AgNO₃/NH₃.</p>
                      </div>
                      <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200">
                        <span className="font-bold text-teal-900 block">Ancol no, đơn chức:</span>
                        <div className="font-bold text-teal-800 text-sm my-1">C_n H_{'{2n+1}'}OH (n ≥ 1)</div>
                        <p className="text-[11px] text-slate-600">Tác dụng Na tạo H₂; không đổi màu quỳ tím.</p>
                      </div>
                      <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200">
                        <span className="font-bold text-teal-900 block">Axit cacboxylic no, đơn:</span>
                        <div className="font-bold text-teal-800 text-sm my-1">C_n H_{'{2n+1}'}COOH (n ≥ 0)</div>
                        <p className="text-[11px] text-slate-600">Làm quỳ tím hóa đỏ; tác dụng bazơ, muối.</p>
                      </div>
                      <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200">
                        <span className="font-bold text-teal-900 block">Este no, đơn chức:</span>
                        <div className="font-bold text-teal-800 text-sm my-1">C_n H_{'{2n}'}O_2 (n ≥ 2)</div>
                        <p className="text-[11px] text-slate-600">Thủy phân trong kiềm tạo xà phòng và ancol.</p>
                      </div>
                    </div>
                  </div>

                  {/* Mẹo nhận biết chất hữu cơ */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="font-black text-slate-900 text-lg mb-3 flex items-center gap-2">
                      <span>💡</span>
                      <span>MẸO NHẬN BIẾT NHANH CÁC CHẤT HỮU CƠ TRỌNG TÂM THI ĐẠI HỌC</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2">
                        <div><strong>Mất màu nước Brom:</strong> Anken, Ankin, Benzen (có nhánh không no), Glucozơ, Anilin.</div>
                        <div><strong>Phản ứng tráng bạc (Ag↓):</strong> Glucozơ, Fructozơ (trong kiềm), Este fomat (HCOOR), Axit fomic (HCOOH).</div>
                      </div>
                      <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
                        <div><strong>Làm quỳ tím đổi màu:</strong> Axit cacboxylic (hóa đỏ), Amin bazơ như CH₃NH₂ (hóa xanh).</div>
                        <div><strong>Hồ tinh bột:</strong> Nhỏ Iot vào xuất hiện màu xanh tím đặc trưng.</div>
                        <div><strong>Phản ứng màu Biure:</strong> Peptit (từ tripeptit) và Protein tác dụng Cu(OH)₂ ra màu tím.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* BÍ KÍP TOÁN HỌC */
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-2.5 mb-4 text-emerald-800 font-black text-lg border-b pb-3">
                    <Target className="w-6 h-6 text-emerald-600" />
                    BẢNG THẦN CHÚ: GIẢI TOÁN TÌM X SỐ TỰ NHIÊN (LỚP 6)
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
                      <h3 className="font-extrabold text-emerald-900 text-sm mb-2">🎯 4 Quy Tắc Cơ Bản</h3>
                      <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                        <li><strong>Số hạng:</strong> x = Tổng - Số hạng đã biết</li>
                        <li><strong>Số bị trừ:</strong> x = Hiệu + Số trừ</li>
                        <li><strong>Số trừ:</strong> x = Số bị trừ - Hiệu</li>
                        <li><strong>Thừa số:</strong> x = Tích : Thừa số đã biết</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4">
                      <h3 className="font-extrabold text-blue-900 text-sm mb-2">📦 Biểu Thức Có Ngoặc</h3>
                      <p className="text-xs text-slate-700">Nguyên tắc: Tìm từ ngoài vào trong, coi cụm trong ngoặc như thành phần chưa biết.</p>
                    </div>
                    <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-4">
                      <h3 className="font-extrabold text-purple-900 text-sm mb-2">⚡ Lũy Thừa & Tích Bằng 0</h3>
                      <p className="text-xs text-slate-700">a^x = a^n =&gt; x = n; (x-a)(x-b) = 0 =&gt; x = a hoặc x = b.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-2.5 mb-4 text-red-700 font-black text-lg border-b pb-3">
                    <Zap className="w-6 h-6 text-amber-500" />
                    BẢNG THẦN CHÚ DẤU: CỘNG, TRỪ, NHÂN, CHIA SỐ ÂM
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                      <strong>Cộng cùng âm:</strong> (-5) + (-8) = -13.<br/>
                      <strong>Trừ đi số âm:</strong> a - (-b) = a + b.
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <strong>Nhân chia cùng dấu:</strong> Ra DƯƠNG (+).<br/>
                      <strong>Nhân chia khác dấu:</strong> Ra ÂM (-).
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================== TAB 3: LUYỆN TẬP TỰ DO ===================== */}
        {activeTab === 'luyen_tap' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-slate-900 text-base">
                  ⚡ Luyện Tập Nhanh Tự Do {currentSubject === 'toan' ? 'Môn Toán' : 'Môn Hóa Học'} – Chấm Điểm Tức Thì
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Làm câu nào kiểm tra câu đó, giải thích cặn kẽ để rèn phản xạ tính toán.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const randomTopic = activeTopics[Math.floor(Math.random() * activeTopics.length)].id;
                    const randomExam = Math.floor(Math.random() * 10) + 1;
                    handleSelectExam(randomTopic, randomExam);
                    setActiveTab('kho_de');
                  }}
                  className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Shuffle className="w-4 h-4" />
                  Mở 1 Đề Ngẫu Nhiên (20 câu)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentExamQuestions.slice(0, 10).map((q: any, idx: number) => {
                const userAns = freeAnswers[q.id] || '';
                const isChecked = freeResults[q.id] !== undefined;
                const isCorrect = freeResults[q.id];
                const showExpl = freeExplanations[q.id];

                return (
                  <div
                    key={q.id}
                    className={`bg-white rounded-2xl p-5 border transition-all shadow-xs ${
                      isChecked 
                        ? isCorrect 
                          ? 'border-emerald-300 ring-2 ring-emerald-500/20' 
                          : 'border-rose-300 ring-2 ring-rose-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Câu {idx + 1}
                      </span>
                      {isChecked && (
                        <span className={`inline-flex items-center gap-1 text-xs font-black px-2 py-0.5 rounded-md ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isCorrect ? 'Chính xác! (+10đ)' : 'Chưa đúng'}
                        </span>
                      )}
                    </div>

                    <div className="text-base font-bold text-slate-900 mb-2.5 leading-relaxed">
                      <MathText html={q.question.replace(/^Câu \d+:\s*/, '')} />
                    </div>

                    {q.mathExpression && (
                      <div className="my-2.5 py-2.5 px-3 bg-teal-50/80 border border-teal-200 rounded-xl text-center text-lg font-black text-teal-800 shadow-xs">
                        <MathText html={`$$${q.mathExpression}$$`} block />
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {q.options.map((opt: string, oIdx: number) => (
                        <button
                          key={oIdx}
                          onClick={() => {
                            setFreeAnswers({ ...freeAnswers, [q.id]: opt });
                            const isMatch = opt.trim() === q.correctAnswer.trim();
                            setFreeResults(prev => ({ ...prev, [q.id]: isMatch }));
                            setFreeExplanations(prev => ({ ...prev, [q.id]: true }));
                            if (isMatch) {
                              setStreak(s => s + 1);
                              toast.success('Chính xác! Chuỗi đúng tăng lên.');
                            } else {
                              setStreak(0);
                            }
                          }}
                          className={`p-2.5 rounded-xl border text-xs font-bold text-left transition cursor-pointer ${
                            userAns === opt
                              ? 'bg-red-50 border-red-500 text-red-700'
                              : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                          }`}
                        >
                          {opt.includes('$') || opt.includes('\\') ? (
                            <MathText html={opt.startsWith('$') ? opt : `$${opt}$`} />
                          ) : (
                            opt
                          )}
                        </button>
                      ))}
                    </div>

                    {showExpl && (
                      <div className={`mt-3 p-3 rounded-xl text-xs leading-relaxed ${
                        isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'bg-rose-50 text-rose-900 border border-rose-100'
                      }`}>
                        <strong>Lời giải Thầy Thọ:</strong> <MathText html={q.explanation} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===================== MODAL GIAO ĐỀ CHO HỌC SINH CHỈ ĐỊNH ===================== */}
        <Modal 
          open={isAssignModalOpen} 
          onClose={() => setIsAssignModalOpen(false)} 
          title="🎯 GIAO ĐỀ LẤY GỐC CHO HỌC SINH CHỈ ĐỊNH"
          size="md"
        >
          {assignedSuccessData ? (
            <div className="p-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-800 uppercase tracking-wide">
                  ĐÃ GIAO BÀI THÀNH CÔNG!
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Đã mở phòng thi <strong>{assignedSuccessData.examTitle}</strong> cho <strong className="text-emerald-700">{assignedSuccessData.count} học sinh</strong> ({assignedSuccessData.className}).
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-2">
                <div className="text-xs font-bold text-slate-600">
                  🌐 Cổng làm bài thi trực tuyến của học sinh:
                </div>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    readOnly 
                    value="https://lop-hoc-thay-tho.vercel.app/thi" 
                    className="input text-xs font-mono py-2 bg-white flex-1" 
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('https://lop-hoc-thay-tho.vercel.app/thi');
                      setCopiedLink(true);
                      toast.success('Đã sao chép link!');
                      setTimeout(() => setCopiedLink(false), 2000);
                    }}
                    className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedLink ? 'Đã chép' : 'Chép link'}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  * Học sinh chỉ cần đăng nhập bằng Mã học sinh và Mật khẩu riêng Thầy đã cấp là thấy ngay đề thi 20 câu này!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  onClick={() => {
                    const zaloMsg = `🔔 THÔNG BÁO BÀI TẬP LẤY GỐC - THẦY THỌ\nThầy vừa mở bài thi: ${assignedSuccessData.examTitle} (20 câu) cho ${assignedSuccessData.count} bạn (${assignedSuccessData.className}).\nCác em đăng nhập vào cổng thi: https://lop-hoc-thay-tho.vercel.app/thi để hoàn thành trước buổi học nhé!`;
                    navigator.clipboard.writeText(zaloMsg);
                    setCopiedZalo(true);
                    toast.success('Đã sao chép tin nhắn Zalo!');
                    setTimeout(() => setCopiedZalo(false), 2000);
                  }}
                  className="btn-outline flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50 cursor-pointer"
                >
                  {copiedZalo ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copiedZalo ? 'Đã sao chép lời nhắn' : 'Sao chép tin nhắn Zalo gửi phụ huynh'}
                </button>
                <button
                  onClick={() => {
                    setIsAssignModalOpen(false);
                    setAssignedSuccessData(null);
                  }}
                  className="btn-teal px-8 py-3 text-xs font-bold cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Chọn Môn & Đề cần giao */}
              <div className="p-3.5 bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl border border-red-200">
                <div className="text-xs font-black text-red-800 uppercase mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-red-600" />
                  1. CHỌN MÔN & ĐỀ THI LẤY GỐC (20 CÂU/ĐỀ)
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Môn học:</label>
                    <select
                      value={assignSubject}
                      onChange={e => {
                        const subj = e.target.value as 'toan' | 'hoa';
                        setAssignSubject(subj);
                        setAssignTopicId(subj === 'toan' ? LAY_GOC_TOPICS[0].id : LAY_GOC_HOA_TOPICS[0].id);
                      }}
                      className="input font-bold text-xs bg-white"
                    >
                      <option value="toan">📐 Môn Toán Học</option>
                      <option value="hoa">🧪 Môn Hóa Học (6-12)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Chuyên đề:</label>
                    <select
                      value={assignTopicId}
                      onChange={e => setAssignTopicId(e.target.value)}
                      className="input font-bold text-xs bg-white"
                    >
                      {(assignSubject === 'toan' ? LAY_GOC_TOPICS : LAY_GOC_HOA_TOPICS).map((top: any) => (
                        <option key={top.id} value={top.id}>
                          {top.branch ? (top.branch === 'vo_co' ? '[Vô cơ] ' : '[Hữu cơ] ') : ''}{top.shortTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Số đề:</label>
                    <select
                      value={assignExamNo}
                      onChange={e => setAssignExamNo(Number(e.target.value))}
                      className="input font-bold text-xs bg-white"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(no => (
                        <option key={no} value={no}>
                          Đề {no.toString().padStart(2, '0')} (20 câu)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Chuyển chế độ giao bài */}
              <div className="flex bg-slate-100 p-1 rounded-2xl gap-1 border border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    setAssignMode('individual');
                    setAssignStudentIds([]);
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                    assignMode === 'individual'
                      ? 'bg-amber-400 text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  👤 Giao Cho Học Sinh Riêng Biệt (Chỉ định)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAssignMode('class');
                    setAssignStudentIds([]);
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                    assignMode === 'class'
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🏫 Giao Theo Lớp Học
                </button>
              </div>

              {/* Hướng dẫn */}
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
                {assignMode === 'individual' ? (
                  <span>
                    💡 <strong>Giao riêng biệt:</strong> Thầy có thể tìm theo mã hoặc tên để chọn bất kỳ học sinh nào trong toàn bộ trung tâm (kể cả khác lớp hoặc chưa xếp lớp).
                  </span>
                ) : (
                  <span>
                    💡 <strong>Giao theo lớp:</strong> Ô tìm kiếm dưới đây chỉ lọc các em <u>đã được xếp vào lớp này</u>. Nếu muốn tìm học sinh theo mã trên toàn trường, Thầy vui lòng bấm chọn tab <strong>"Giao Cho Học Sinh Riêng Biệt"</strong> ở trên!
                  </span>
                )}
              </div>

              {/* Chọn lớp nếu ở chế độ theo lớp */}
              {assignMode === 'class' && (
                <div>
                  <label className="label">2. Chọn lớp học *</label>
                  <select
                    value={assignClassId}
                    onChange={e => {
                      setAssignClassId(e.target.value);
                      setAssignStudentIds([]);
                    }}
                    className="input font-bold"
                  >
                    <option value="">-- Chọn lớp cần giao bài --</option>
                    {classes.filter(c => c.status === 'active').map(c => (
                      <option key={c.id} value={c.id}>
                        {(c as any).class_name || (c as any).name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Danh sách học sinh để tích chọn */}
              {(assignMode === 'individual' || assignClassId) && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {assignMode === 'individual' ? 'Danh sách học sinh' : 'Học sinh trong lớp'}{' '}
                      {assignMode === 'class' && studentSearch.trim()
                        ? `(${displayedStudents.length}/${currentClassStudents.length} em)`
                        : `(${displayedStudents.length} em)`}:
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={async () => {
                          await Promise.all([loadStudents(), loadEnrollments(), loadClasses()]);
                          toast.success('Đã tải lại danh sách học sinh mới nhất!');
                        }}
                        className="text-[11px] font-bold text-slate-500 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                        title="Tải lại danh sách học sinh mới nhất từ hệ thống"
                      >
                        <RotateCcw className="w-3 h-3" /> Làm mới dữ liệu
                      </button>
                      <button
                        type="button"
                        onClick={handleSelectAllStudents}
                        className="text-[11px] font-bold text-teal-600 hover:underline cursor-pointer"
                      >
                        {assignStudentIds.length === displayedStudents.length ? 'Bỏ chọn hết' : `Chọn tất cả (${displayedStudents.length})`}
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Tìm tên hoặc mã học sinh..."
                      value={studentSearch}
                      onChange={e => setStudentSearch(e.target.value)}
                      className="input text-xs pl-9 pr-9 py-2 bg-white"
                    />
                    {studentSearch && (
                      <button
                        type="button"
                        onClick={() => setStudentSearch('')}
                        className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
                        title="Xóa tìm kiếm để hiện đủ danh sách"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {studentSearch.trim() && (
                    <div className="flex items-center justify-between bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200 text-[11px] text-sky-800">
                      <span>
                        🔍 Đang lọc theo: <strong>"{studentSearch}"</strong> (tìm thấy {displayedStudents.length} em)
                      </span>
                      <button
                        type="button"
                        onClick={() => setStudentSearch('')}
                        className="font-bold text-sky-700 hover:underline cursor-pointer ml-2 flex items-center gap-1"
                      >
                        <X className="w-3 h-3" /> Hiện đủ {assignMode === 'class' ? currentClassStudents.length : allStudentsWithClasses.length} em
                      </button>
                    </div>
                  )}

                  <div className="text-[11px] text-slate-500">
                    {assignStudentIds.length === 0 ? (
                      <span className="text-amber-700 font-medium">
                        ⚠️ <strong>Chưa tích chọn:</strong> Hệ thống sẽ giao cho TẤT CẢ ({displayedStudents.length} em). Thầy tích chọn riêng từng em nếu chỉ muốn chỉ định riêng.
                      </span>
                    ) : (
                      <span className="text-teal-700 font-bold">
                        ✅ Đã chỉ định {assignStudentIds.length} em học sinh được làm bài.
                      </span>
                    )}
                  </div>

                  {displayedStudents.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-500 bg-white rounded-xl border border-dashed border-slate-300 space-y-3">
                      {studentSearch.trim() ? (
                        <div>
                          <p className="font-bold text-slate-700">
                            ❌ Không tìm thấy học sinh nào trong lớp có mã/tên khớp với "{studentSearch}".
                          </p>
                          <p className="text-[11px] text-slate-500 mt-1">
                            (Học sinh này có thể chưa được thêm vào lớp này hoặc đang ở lớp khác).
                          </p>

                          {otherMatchingStudents.length > 0 && (
                            <div className="mt-3 p-3 bg-teal-50 border border-teal-200 rounded-xl text-left">
                              <p className="text-[11px] font-black text-teal-900 mb-2">
                                🎯 TÌM THẤY {otherMatchingStudents.length} HỌC SINH KHỚP MÃ TRONG DANH SÁCH TOÀN TRƯỜNG:
                              </p>
                              <div className="space-y-1.5">
                                {otherMatchingStudents.map((s: any) => (
                                  <div key={s.id} className="flex items-center justify-between gap-2 p-2 bg-white rounded-lg border border-teal-200 text-xs">
                                    <div className="min-w-0 flex-1">
                                      <span className="font-mono font-bold text-teal-800 bg-teal-100 px-1.5 py-0.5 rounded text-[10px] mr-1.5">
                                        {s.student_code}
                                      </span>
                                      <span className="font-bold text-slate-900">{s.full_name}</span>
                                      <span className="text-[10px] text-slate-400 ml-1.5">
                                        [{s.classNamesString}]
                                      </span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setAssignMode('individual');
                                        handleToggleStudent(s.id);
                                        toast.success(`Đã chọn học sinh ${s.full_name} (${s.student_code})`);
                                      }}
                                      className="px-2.5 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer shrink-0"
                                    >
                                      + Chọn giao ngay
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="mt-2.5">
                            <button
                              type="button"
                              onClick={() => setAssignMode('individual')}
                              className="text-xs font-bold text-teal-600 hover:underline cursor-pointer"
                            >
                              👉 Bấm vào đây để chuyển sang tìm kiếm trong toàn bộ học sinh
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="font-semibold text-slate-600">Lớp này hiện chưa có học sinh nào được ghi danh (0 em).</p>
                          <button
                            type="button"
                            onClick={() => setAssignMode('individual')}
                            className="mt-2 text-xs font-bold text-teal-600 hover:underline cursor-pointer inline-block"
                          >
                            👉 Bấm vào đây để chuyển sang Giao cho học sinh riêng biệt (Toàn trường)
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="max-h-56 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 bg-white rounded-xl border border-slate-200">
                        {displayedStudents.map((s: any) => {
                          const isChecked = assignStudentIds.includes(s.id);
                          return (
                            <label
                              key={s.id}
                              className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer transition select-none ${
                                isChecked 
                                  ? 'bg-amber-50 border-amber-300 text-amber-900 font-bold shadow-xs' 
                                  : 'bg-white border-slate-100 hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleToggleStudent(s.id)}
                                className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                              />
                              <span className="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded text-slate-600 font-bold">
                                {s.student_code}
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="truncate font-bold">{s.full_name}</div>
                                {s.classNamesString && (
                                  <div className="text-[9px] text-slate-400 truncate">{s.classNamesString}</div>
                                )}
                              </div>
                            </label>
                          );
                        })}
                      </div>

                      {/* Gợi ý học sinh ngoài lớp nếu có kết quả tìm kiếm */}
                      {otherMatchingStudents.length > 0 && (
                        <div className="p-2.5 bg-amber-50/80 border border-amber-200 rounded-xl text-left">
                          <p className="text-[11px] font-bold text-amber-900 mb-1.5">
                            💡 Có thêm {otherMatchingStudents.length} học sinh khớp mã ở lớp khác hoặc chưa xếp lớp:
                          </p>
                          <div className="space-y-1">
                            {otherMatchingStudents.slice(0, 3).map((s: any) => (
                              <div key={s.id} className="flex items-center justify-between gap-2 p-1.5 bg-white rounded border border-amber-200 text-xs">
                                <span className="truncate">
                                  <strong className="font-mono text-amber-800 mr-1">{s.student_code}</strong>
                                  {s.full_name} <span className="text-[10px] text-slate-400">({s.classNamesString})</span>
                                </span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setAssignMode('individual');
                                    handleToggleStudent(s.id);
                                    toast.success(`Đã chọn học sinh ${s.full_name}`);
                                  }}
                                  className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded hover:bg-teal-100 shrink-0"
                                >
                                  + Chọn em này
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* Thời gian làm bài & Mã PIN */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Thời gian làm bài (Phút)</label>
                  <input
                    type="number"
                    value={assignTimeLimit}
                    onChange={e => setAssignTimeLimit(Number(e.target.value))}
                    className="input text-center font-bold"
                  />
                </div>
                <div>
                  <label className="label">Mã PIN phòng thi (Tùy chọn)</label>
                  <input
                    type="text"
                    placeholder="Để trống nếu không đặt"
                    value={assignPasscode}
                    onChange={e => setAssignPasscode(e.target.value)}
                    className="input font-mono text-center font-bold"
                  />
                </div>
              </div>

              {/* Nút hành động */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAssignModalOpen(false)}
                  className="btn-outline px-6 py-2.5 text-xs font-bold cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  onClick={handleAssignSubmit}
                  disabled={isSubmittingAssign || (assignMode === 'class' && !assignClassId) || (assignMode === 'individual' && assignStudentIds.length === 0)}
                  className="btn-teal px-8 py-2.5 text-xs font-bold shadow-lg shadow-teal-500/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmittingAssign ? (
                    <span>Đang tạo phòng & giao bài...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Xác Nhận Giao Đề {assignStudentIds.length > 0 ? `(${assignStudentIds.length} em)` : '(Cả lớp)'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* MODAL CHIA SẺ ĐƯỜNG LINK ĐỀ THI CHO HỌC SINH & PHỤ HUYNH */}
        <Modal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          title="🔗 TẠO ĐƯỜNG LINK GỬI HỌC SINH & PHỤ HUYNH LÀM BÀI"
          maxWidth="max-w-2xl"
        >
          <div className="p-6 space-y-6">
            {/* THÔNG TIN TÓM TẮT ĐỀ THI */}
            <div className="p-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
                  {selectedExamNo.toString().padStart(2, '0')}
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase text-emerald-800 tracking-wider">
                    {currentSubject === 'hoa' ? '🧪 MÔN HÓA HỌC' : '📐 MÔN TOÁN HỌC'} – ĐỀ SỐ {selectedExamNo.toString().padStart(2, '0')}
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                    {currentTopic?.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-600 mt-0.5">
                    <span>⏱️ 20 phút</span>
                    <span>•</span>
                    <span>📝 20 câu</span>
                    <span>•</span>
                    <span>🎯 Tự động chấm điểm & lời giải</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MỤC 1: ĐƯỜNG LINK TRỰC TIẾP */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Link className="w-4 h-4 text-emerald-600" />
                <span>1. Đường Link Làm Bài Trực Tiếp (1 Chạm Vào Ngay)</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={getShareableExamUrl()}
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 select-all"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                />
                <button
                  type="button"
                  onClick={handleCopyLinkOnly}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black rounded-xl transition flex items-center gap-1.5 shadow-sm shrink-0 cursor-pointer"
                >
                  {isCopiedShareLink ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{isCopiedShareLink ? 'Đã Chép Link!' : 'Sao Chép Link'}</span>
                </button>
                <a
                  href={getShareableExamUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition shrink-0"
                  title="Mở thử trong tab mới để kiểm tra"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] text-slate-500">
                💡 Học sinh hoặc phụ huynh chỉ cần bấm vào link này trên điện thoại hoặc máy tính là mở ngay đề thi, không cần đăng nhập.
              </p>
            </div>

            {/* MỤC 2: TIN NHẮN MẪU SOẠN SẴN GỬI QUA ZALO / MESSENGER / PHỤ HUYNH */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                  <span>2. Tin Nhắn Soạn Sẵn Kèm Lời Dặn Dò (Gửi Zalo / Nhóm Lớp)</span>
                </label>
                <span className="text-[11px] text-emerald-700 font-bold">Chuẩn mực Thầy và em</span>
              </div>
              
              <div className="relative">
                <textarea
                  readOnly
                  rows={7}
                  value={getShareableMessage()}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-3.5 text-xs text-slate-800 leading-relaxed font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 select-all resize-none"
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                />
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleCopyFullMessage}
                  className="flex-1 py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  {isCopiedShareMessage ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{isCopiedShareMessage ? '✓ Đã Sao Chép Lời Nhắn!' : '📋 Sao Chép Lời Nhắn & Link (Gửi Zalo / PH)'}</span>
                </button>
                <a
                  href="https://chat.zalo.me"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-black rounded-xl transition flex items-center gap-1.5 shrink-0"
                >
                  <span>Mở Zalo Web</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* MỤC 3: MÃ QR CODE CHO HỌC SINH QUÉT ĐIỆN THOẠI TRỰC TIẾP */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&margin=10&data=${encodeURIComponent(getShareableExamUrl())}`}
                alt="QR Code Đề Thi"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border border-slate-200 bg-white p-1 shrink-0 shadow-xs"
              />
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-black uppercase text-slate-800 flex items-center justify-center sm:justify-start gap-1">
                  <QrCode className="w-4 h-4 text-slate-700" />
                  <span>Mã QR Quét Làm Bài Ngay Tại Lớp</span>
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thầy có thể chiếu mã QR này lên máy chiếu hoặc màn hình tivi tại lớp học. Học sinh chỉ cần mở Camera hoặc Zalo quét là vào thẳng đề thi làm bài ngay!
                </p>
              </div>
            </div>

            {/* CHÂN MODAL */}
            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsShareModalOpen(false)}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </Modal>

        {/* MODAL IN ẤN & XUẤT PDF CHUẨN A4 CHO PHỤ HUYNH & HỌC SINH */}
        <PrintableExamModal
          isOpen={isPrintModalOpen}
          onClose={() => setIsPrintModalOpen(false)}
          subject={currentSubject}
          topicTitle={currentTopic?.title || 'Chuyên đề kiến thức cốt lõi'}
          topicGrade={currentTopic?.grade}
          examNo={selectedExamNo}
          questions={currentExamQuestions}
        />

        {/* MODAL QUÉT ẢNH SCAN BÀI LÀM & CHẤM ĐIỂM HÀNG LOẠT BẰNG AI */}
        <BatchExamScanModal
          isOpen={isScanModalOpen}
          onClose={() => setIsScanModalOpen(false)}
          subject={currentSubject}
          topicTitle={currentTopic?.title || 'Chuyên đề kiến thức cốt lõi'}
          examNo={selectedExamNo}
          questions={currentExamQuestions}
        />

        {/* 1. MODAL CẢNH BÁO VI PHẠM RỜI MÀN HÌNH / CHUYỂN TAB THI (3 LẦN TỰ NỘP BÀI) */}
        <Modal
          isOpen={showViolationModal}
          onClose={() => setShowViolationModal(false)}
          title="🚨 CẢNH BÁO VI PHẠM NỘI QUY PHÒNG THI"
          maxWidth="max-w-lg"
        >
          <div className="p-6 text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-red-100 text-red-600 flex items-center justify-center animate-bounce shadow-lg shadow-red-500/20">
              <ShieldAlert className="w-12 h-12 text-red-600" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider mb-2 animate-pulse">
                <Bell className="w-3.5 h-3.5 animate-spin" />
                <span>Vi phạm lần {tabSwitchCount} / 3 lần tối đa</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                Em vừa rời khỏi màn hình làm bài!
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Hệ thống phát hiện em vừa chuyển tab trình duyệt, mở ứng dụng khác hoặc bấm ra ngoài cửa sổ bài thi.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-left text-xs space-y-2">
              <div className="font-extrabold text-amber-900 flex items-center gap-1.5 text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Quy định phòng thi nghiêm ngặt của Thầy Thọ:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-amber-950">
                <li>Mỗi lần thoát ra ngoài, hệ thống sẽ <strong>phát chuông cảnh báo</strong> và ghi nhận vào lịch sử bài thi.</li>
                <li>Nếu vi phạm đủ <strong>3 lần</strong>, hệ thống sẽ <strong>TỰ ĐỘNG THU VÀ NỘP BÀI NGAY LẬP TỨC</strong>!</li>
                <li>Lần này là vi phạm thứ <strong>{tabSwitchCount}/3</strong>. Còn <strong>{Math.max(0, 3 - tabSwitchCount)} lần</strong> nữa là bị thu bài!</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => playWarningAlarm()}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-slate-600" />
                <span>Nghe lại còi cảnh báo</span>
              </button>

              <button
                type="button"
                onClick={() => setShowViolationModal(false)}
                className="w-full sm:flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-sm rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Em đã hiểu, quay lại làm bài ngay!</span>
              </button>
            </div>
          </div>
        </Modal>

        {/* 2. MODAL LỊCH SỬ TẤT CẢ CÁC LẦN LÀM BÀI & XEM LẠI KẾT QUẢ */}
        <Modal
          isOpen={isHistoryModalOpen}
          onClose={() => setIsHistoryModalOpen(false)}
          title={`📜 LỊCH SỬ LÀM BÀI • ĐỀ SỐ ${selectedExamNo.toString().padStart(2, '0')} (${currentTopic.shortTitle})`}
          maxWidth="max-w-3xl"
        >
          <div className="p-5 space-y-5">
            {/* THỐNG KÊ NHANH */}
            {examHistory.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Tổng số lần làm</div>
                  <div className="text-2xl font-black text-slate-900 mt-1">{examHistory.length} lần</div>
                </div>

                <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
                  <div className="text-[11px] font-bold text-emerald-700 uppercase">Điểm cao nhất</div>
                  <div className="text-2xl font-black text-emerald-700 mt-1">
                    {Math.max(...examHistory.map(h => h.score10))} / 10
                  </div>
                </div>

                <div className="p-3.5 bg-blue-50 rounded-2xl border border-blue-200 text-center">
                  <div className="text-[11px] font-bold text-blue-700 uppercase">Điểm lần gần nhất</div>
                  <div className="text-2xl font-black text-blue-700 mt-1">
                    {examHistory[0]?.score10 || 0} / 10
                  </div>
                </div>

                <div className="p-3.5 bg-purple-50 rounded-2xl border border-purple-200 text-center">
                  <div className="text-[11px] font-bold text-purple-700 uppercase">Điểm trung bình</div>
                  <div className="text-2xl font-black text-purple-700 mt-1">
                    {(examHistory.reduce((acc, cur) => acc + cur.score10, 0) / examHistory.length).toFixed(1)} / 10
                  </div>
                </div>
              </div>
            ) : null}

            {/* DANH SÁCH CHI TIẾT TỪNG LẦN LÀM BÀI */}
            {examHistory.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <History className="w-12 h-12 mx-auto text-slate-300 mb-2" />
                <h4 className="font-bold text-slate-700 text-base">Chưa có lịch sử làm bài cho đề này</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Hãy bấm bắt đầu làm bài và nộp bài. Tất cả các lần làm sẽ được hệ thống tự động ghi lại đầy đủ tại đây!
                </p>
                <button
                  onClick={() => {
                    setIsHistoryModalOpen(false);
                    handleRetakeExam();
                  }}
                  className="mt-4 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition cursor-pointer"
                >
                  🚀 Bắt Đầu Làm Lần 1 Ngay
                </button>
              </div>
            ) : (
              <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
                {examHistory.map((attempt, index) => {
                  const isHighScore = attempt.score10 === Math.max(...examHistory.map(h => h.score10));
                  return (
                    <div
                      key={attempt.id}
                      className={`p-4 rounded-2xl border transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                        viewingPastAttempt?.id === attempt.id
                          ? 'bg-blue-50/80 border-blue-400 ring-2 ring-blue-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-xs shrink-0 ${
                          attempt.score10 >= 10
                            ? 'bg-amber-100 text-amber-900 border-2 border-amber-400 ring-2 ring-amber-400/20'
                            : attempt.score10 >= 8
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : attempt.score10 >= 7
                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                            : 'bg-rose-100 text-rose-800 border border-rose-300'
                        }`}>
                          {attempt.score10}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-slate-900 text-sm">
                              Lần làm thứ {attempt.attemptNo}
                            </span>
                            {isHighScore && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase flex items-center gap-0.5">
                                <Award className="w-3 h-3 text-amber-600" />
                                Cao nhất
                              </span>
                            )}
                            {attempt.isAutoSubmittedByViolation && (
                              <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-black uppercase">
                                🚨 Tự động thu bài
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-slate-400" />
                              {attempt.dateFormatted}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1 font-bold text-slate-700">
                              <Clock className="w-3 h-3 text-slate-400" />
                              {Math.floor(attempt.timeSpentSeconds / 60)}p {attempt.timeSpentSeconds % 60}s
                            </span>
                            <span>•</span>
                            <span className="font-bold text-emerald-700">
                              {attempt.correctCount}/{attempt.totalQuestions} câu đúng ({attempt.percentage}%)
                            </span>
                            <span>•</span>
                            <span className={`font-bold ${attempt.violations > 0 ? 'text-rose-600' : 'text-slate-500'}`}>
                              Rời tab: {attempt.violations} lần
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        <button
                          onClick={() => handleViewPastAttempt(attempt)}
                          className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-900 font-extrabold text-xs rounded-xl border border-blue-200 transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-blue-700" />
                          <span>Xem lại bài làm</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CHÂN MODAL */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
              {examHistory.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Em có chắc chắn muốn xóa toàn bộ lịch sử các lần làm bài của đề này không?')) {
                      localStorage.removeItem(historyStorageKey);
                      setExamHistory([]);
                      setViewingPastAttempt(null);
                      toast.success('Đã xóa sạch lịch sử bài thi này!');
                    }
                  }}
                  className="text-xs text-slate-400 hover:text-rose-600 font-semibold transition cursor-pointer"
                >
                  🗑️ Xóa lịch sử bài này
                </button>
              )}

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setIsHistoryModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsHistoryModalOpen(false);
                    handleRetakeExam();
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-black text-xs rounded-xl shadow-md transition flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Làm Lại Bài Này (Lần {examHistory.length + 1})</span>
                </button>
              </div>
            </div>
          </div>
        </Modal>
        
        {/* HIỆU ỨNG BẮN PHÁO HOA KHI ĐẠT 10 ĐIỂM TUYỆT ĐỐI */}
        <FireworksEffect
          active={showFireworks}
          onClose={() => setShowFireworks(false)}
          title={`Chúc mừng em đã đạt điểm 10 tuyệt đối môn ${currentSubject === 'hoa' ? 'Hóa học' : 'Toán học'}! 🎆`}
        />
      </div>
    </div>
  );
}
