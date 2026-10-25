import React, { useState, useEffect, useMemo } from 'react';
import { 
  Zap, ArrowRight, CheckCircle2, XCircle, RotateCcw, 
  HelpCircle, BookOpen, Award, Sparkles, Printer, 
  Flame, Clock, ChevronRight, Calculator, Shuffle, FileDown,
  Send, Users, Check, Copy, Search, ShieldCheck, X, CheckSquare, Target,
  FlaskConical, Compass
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
import toast from 'react-hot-toast';

export default function LayGocToanPage({ isPublic = false }: { isPublic?: boolean }) {
  // Môn học đang chọn: 'toan' (Toán học Lớp 6-9) hoặc 'hoa' (Hóa học Lớp 6-12)
  const [currentSubject, setCurrentSubject] = useState<'toan' | 'hoa'>('toan');

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

  // Chuyển đổi môn học
  const handleSwitchSubject = (subject: 'toan' | 'hoa') => {
    setCurrentSubject(subject);
    const defaultTopic = subject === 'toan' ? LAY_GOC_TOPICS[0].id : LAY_GOC_HOA_TOPICS[0].id;
    setSelectedTopicId(defaultTopic);
    setSelectedExamNo(1);
    setExamAnswers({});
    setIsExamSubmitted(false);
    setIsExamTimerActive(false);
    setExamTimeLeft(1200);
    setShowAllExplanations(false);
  };

  // Danh sách chủ đề của môn đang chọn
  const activeTopics = useMemo(() => {
    return currentSubject === 'toan' ? LAY_GOC_TOPICS : LAY_GOC_HOA_TOPICS;
  }, [currentSubject]);

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

  // Đồng hồ đếm ngược khi làm bài thi
  useEffect(() => {
    let timer: any;
    if (isExamTimerActive && examTimeLeft > 0 && !isExamSubmitted) {
      timer = setInterval(() => setExamTimeLeft(prev => prev - 1), 1000);
    } else if (examTimeLeft === 0 && isExamTimerActive && !isExamSubmitted) {
      setIsExamSubmitted(true);
      setIsExamTimerActive(false);
      setShowAllExplanations(true);
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
    setShowAllExplanations(false);
  };

  // Tính điểm số bài thi hiện tại
  const examResultStats = useMemo(() => {
    let correctCount = 0;
    currentExamQuestions.forEach(q => {
      const userAns = (examAnswers[q.id] || '').trim();
      const rightAns = (q.correctAnswer || '').trim();
      if (userAns && userAns === rightAns) {
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

  const displayedStudents = useMemo(() => {
    if (assignMode === 'class') {
      if (!assignClassId) return [];
      return allStudentsWithClasses.filter(s => {
        const enrolled = enrollments.some(e => e.class_id === assignClassId && e.student_id === s.id && e.status !== 'inactive');
        if (!enrolled) return false;
        if (!studentSearch.trim()) return true;
        const q = studentSearch.toLowerCase();
        return (s.full_name || '').toLowerCase().includes(q) || (s.student_code || '').toLowerCase().includes(q);
      });
    } else {
      if (!studentSearch.trim()) return allStudentsWithClasses;
      const q = studentSearch.toLowerCase();
      return allStudentsWithClasses.filter(s => 
        (s.full_name || '').toLowerCase().includes(q) || 
        (s.student_code || '').toLowerCase().includes(q) ||
        s.classNamesString.toLowerCase().includes(q)
      );
    }
  }, [assignMode, assignClassId, allStudentsWithClasses, enrollments, studentSearch]);

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
              {currentSubject === 'toan' ? '6 Chuyên đề • 60 Đề • 1.200 Câu' : '10 Chuyên đề • 100 Đề • 2.000 Câu'}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
                {currentSubject === 'toan' 
                  ? 'Hệ Thống Phục Hồi Mất Gốc Toán Cấp 2 (Lớp 6 - Lớp 9)' 
                  : 'Hệ Thống Phục Hồi Mất Gốc Hóa Học Trọng Điểm (Lớp 6 Đến Lớp 12)'}
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                {currentSubject === 'toan' 
                  ? '⚡ LẤY GỐC TOÁN HỌC – 60 ĐỀ THI TIÊU CHUẨN (20 CÂU/ĐỀ)' 
                  : '🧪 LẤY GỐC HÓA HỌC – 100 ĐỀ THI TIÊU CHUẨN (20 CÂU/ĐỀ)'}
              </h1>
              <p className="text-rose-100 text-sm mt-1 max-w-2xl leading-relaxed">
                {currentSubject === 'toan'
                  ? 'Chuyên sâu số tự nhiên, tìm x lớp 6, số âm, chuyển vế, phân số và khảo sát tổng hợp. Mỗi đề chuẩn 20 câu trắc nghiệm kèm lời giải chi tiết của Thầy Thọ.'
                  : 'Từ nguyên tố, hóa trị, lập CTHH, cân bằng PTHH, công thức tính mol, axit-bazơ-muối đến cấu tạo nguyên tử, oxi hóa khử và hóa hữu cơ 12.'}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <div className="text-center px-3 border-r border-white/20">
                <div className="text-2xl font-black text-amber-300">
                  {currentSubject === 'toan' ? '60' : '100'}
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
              <span>📚 Kho {currentSubject === 'toan' ? '60 Đề Toán' : '100 Đề Hóa Học'} (20 Câu/Đề)</span>
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

      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* ===================== TAB 1: KHO ĐỀ THI ===================== */}
        {activeTab === 'kho_de' && (
          <div className="space-y-6">
            {/* 1. BỘ CHỌN CHUYÊN ĐỀ CỦA MÔN ĐANG CHỌN */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-red-600" />
                  BƯỚC 1: CHỌN CHUYÊN ĐỀ {currentSubject === 'toan' ? 'TOÁN HỌC (6 PHẦN)' : 'HÓA HỌC (10 PHẦN LỚP 6-12)'}
                </div>
                <span className="text-[11px] font-bold text-slate-400">
                  Mỗi phần có đúng 10 Đề thi • Mỗi đề chuẩn 20 câu
                </span>
              </div>

              <div className={`grid gap-3 ${
                currentSubject === 'toan' 
                  ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6' 
                  : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
              }`}>
                {activeTopics.map((top: any) => {
                  const isSelected = selectedTopicId === top.id;
                  return (
                    <button
                      key={top.id}
                      onClick={() => handleSelectExam(top.id, 1)}
                      className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-amber-50 to-red-50/50 border-red-500 ring-2 ring-red-500/20 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-xl">{top.icon}</span>
                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase ${
                          isSelected ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          10 Đề
                        </span>
                      </div>
                      <h4 className="font-extrabold text-[12px] text-slate-800 mt-2 line-clamp-1">
                        {top.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
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
                  🎯 Đang mở: Đề {selectedExamNo.toString().padStart(2, '0')} (Chuẩn 20 câu hỏi)
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((no) => {
                  const isCur = selectedExamNo === no;
                  return (
                    <button
                      key={no}
                      onClick={() => handleSelectExam(selectedTopicId, no)}
                      className={`py-3 px-2 rounded-xl text-center border font-extrabold transition-all cursor-pointer ${
                        isCur
                          ? 'bg-gradient-to-b from-red-600 to-rose-700 text-white border-red-700 shadow-md shadow-red-600/30 ring-2 ring-red-400'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-sm font-black">
                        Đề {no.toString().padStart(2, '0')}
                      </div>
                      <div className={`text-[10px] mt-0.5 ${isCur ? 'text-amber-200 font-bold' : 'text-slate-400'}`}>
                        20 câu
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. CHI TIẾT ĐỀ THI ĐANG MỞ & KHU VỰC LÀM BÀI */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-100 text-red-800 text-[11px] font-black uppercase mb-1">
                    {currentTopic.shortTitle}
                  </div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span>{currentTopic.icon}</span>
                    <span>ĐỀ SỐ {selectedExamNo.toString().padStart(2, '0')} – 20 CÂU HỎI TRẮC NGHIỆM</span>
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
                  <button
                    onClick={() => handleOpenAssignModal(currentSubject, selectedTopicId, selectedExamNo)}
                    className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm transition cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-slate-900" />
                    <span>Giao Đề Này Cho HS</span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-slate-600" />
                    <span>In đề / Xuất PDF</span>
                  </button>

                  {!isExamTimerActive && !isExamSubmitted ? (
                    <button
                      onClick={() => {
                        setIsExamTimerActive(true);
                        setExamTimeLeft(1200);
                        toast.success('⏱️ Đã bắt đầu tính giờ 20 phút làm bài!');
                      }}
                      className="px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-sm transition cursor-pointer"
                    >
                      <Clock className="w-4 h-4" />
                      <span>Bắt đầu tính giờ (20p)</span>
                    </button>
                  ) : isExamTimerActive && !isExamSubmitted ? (
                    <div className="flex items-center gap-2 font-mono font-black text-rose-700 bg-rose-50 px-3 py-2 rounded-xl border border-rose-200 text-xs">
                      <Clock className="w-4 h-4 animate-spin text-rose-600" />
                      <span>{formatTime(examTimeLeft)}</span>
                    </div>
                  ) : null}

                  {isExamSubmitted && (
                    <button
                      onClick={() => {
                        setExamAnswers({});
                        setIsExamSubmitted(false);
                        setIsExamTimerActive(false);
                        setExamTimeLeft(1200);
                        setShowAllExplanations(false);
                      }}
                      className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Làm lại đề</span>
                    </button>
                  )}
                </div>
              </div>

              {/* BẢNG KẾT QUẢ ĐIỂM SỐ NẾU ĐÃ NỘP BÀI */}
              {isExamSubmitted && (
                <div className="mb-8 p-6 bg-gradient-to-r from-red-50 via-amber-50 to-emerald-50 rounded-2xl border border-red-200/80 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-red-200 flex items-center justify-center text-3xl font-black text-red-600 shadow-sm">
                        {examResultStats.score10}
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase text-red-700 tracking-wider">
                          KẾT QUẢ LÀM BÀI – ĐỀ SỐ {selectedExamNo.toString().padStart(2, '0')}
                        </div>
                        <h3 className="text-lg font-black text-slate-800">
                          {examResultStats.score10 >= 8 
                            ? '🎉 Xuất sắc! Em đã nắm rất vững kiến thức phần này!'
                            : examResultStats.score10 >= 5
                            ? '👍 Khá tốt! Cần chú ý thêm một số bẫy câu hỏi và tính toán cẩn thận.'
                            : '⚡ Cần rèn luyện thêm: Đọc kỹ bí kíp thần chú và làm lại nhé!'}
                        </h3>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Đúng: <strong className="text-emerald-700">{examResultStats.correctCount} / {examResultStats.total} câu</strong> ({examResultStats.percentage}%) • Điểm số quy đổi: <strong className="text-red-600">{examResultStats.score10} / 10.0</strong>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowAllExplanations(!showAllExplanations)}
                        className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold shadow-xs transition"
                      >
                        {showAllExplanations ? 'Ẩn lời giải chi tiết' : 'Hiện toàn bộ lời giải'}
                      </button>
                      <button
                        onClick={() => handleOpenAssignModal(currentSubject, selectedTopicId, selectedExamNo)}
                        className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-xl text-xs font-black shadow-xs transition"
                      >
                        Giao đề này cho lớp
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* DANH SÁCH TOÀN BỘ 20 CÂU HỎI TRẮC NGHIỆM */}
              <div className="space-y-5">
                {currentExamQuestions.map((q: any, idx: number) => {
                  const userAns = examAnswers[q.id];
                  const hasAnswered = userAns !== undefined;
                  const isCorrect = userAns === q.correctAnswer;
                  const showExp = showAllExplanations || isExamSubmitted;

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
                          <span className="text-[11px] font-bold text-slate-400">
                            (0.5 điểm)
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

                      <p className="text-sm font-bold text-slate-800 mb-2">
                        {q.question.replace(/^Câu \d+:\s*/, '')}
                      </p>

                      {q.mathExpression && (
                        <div className="my-3 py-3 px-4 bg-teal-50/80 border border-teal-200 rounded-xl text-center text-xl font-black text-teal-900 tracking-wide shadow-xs">
                          <MathText html={`$$${q.mathExpression}$$`} block />
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                        {q.options.map((opt: string, oIdx: number) => {
                          const letters = ['A', 'B', 'C', 'D'];
                          const letter = letters[oIdx] || 'A';
                          const isSelected = userAns === opt;
                          const isRightOption = opt === q.correctAnswer;

                          let btnStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700';

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
                              className={`p-3 rounded-xl border text-xs font-bold text-left transition flex items-center gap-2.5 cursor-pointer ${btnStyle}`}
                            >
                              <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                                isSelected ? 'bg-red-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
                              }`}>
                                {letter}
                              </span>
                              <div className="flex-1 font-mono text-sm">
                                {opt.includes('$') || opt.includes('\\') ? (
                                  <MathText html={opt.startsWith('$') ? opt : `$${opt}$`} />
                                ) : (
                                  opt
                                )}
                              </div>
                              {isExamSubmitted && isRightOption && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showExp && (
                        <div className={`mt-3.5 p-3.5 rounded-xl text-xs leading-relaxed border ${
                          isCorrect 
                            ? 'bg-emerald-50/70 text-emerald-950 border-emerald-200' 
                            : 'bg-amber-50/70 text-amber-950 border-amber-200'
                        }`}>
                          <div className="font-extrabold flex items-center gap-1.5 mb-1 text-slate-800">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                            <span>💡 Lời giải chi tiết Thầy Thọ:</span>
                            <span className="font-mono font-bold text-emerald-700 ml-auto">
                              Đáp án đúng: {q.correctAnswer}
                            </span>
                          </div>
                          <div>
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
                      setIsExamSubmitted(true);
                      setIsExamTimerActive(false);
                      setShowAllExplanations(true);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                      toast.success('🎉 Đã nộp bài và chấm điểm xong!');
                    }}
                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold rounded-2xl shadow-md transition cursor-pointer"
                  >
                    Nộp Bài & Chấm Điểm 20 Câu (Thang 10)
                  </button>
                ) : (
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {selectedExamNo < 10 && (
                      <button
                        onClick={() => handleSelectExam(selectedTopicId, selectedExamNo + 1)}
                        className="flex-1 sm:flex-none px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-2xl shadow-sm transition cursor-pointer flex items-center gap-2 justify-center"
                      >
                        <span>Chuyển sang Đề {(selectedExamNo + 1).toString().padStart(2, '0')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => handleOpenAssignModal(currentSubject, selectedTopicId, selectedExamNo)}
                      className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold rounded-2xl shadow-sm transition cursor-pointer"
                    >
                      🎯 Giao Đề Này Cho Học Sinh
                    </button>
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
              /* BÍ KÍP HÓA HỌC */
              <div className="space-y-6">
                {/* Bài ca hóa trị */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-2.5 mb-4 text-teal-800 font-black text-lg border-b pb-3">
                    <FlaskConical className="w-6 h-6 text-teal-600" />
                    BÀI CA HÓA TRỊ KINH ĐIỂN (XÓA MẤT GỐC HÓA HỌC)
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
                    <div className="bg-teal-50/70 p-4 rounded-xl border border-teal-200">
                      <h4 className="font-extrabold text-teal-900 mb-2">⭐ Hóa trị I & II phổ biến</h4>
                      <ul className="space-y-1.5 font-mono">
                        <li><strong>Hóa trị I:</strong> K, Na, H, Ag, Cl (Kali, Natri, Hiđro, Bạc, Clo).</li>
                        <li><strong>Hóa trị II:</strong> Ca, Ba, Mg, Zn, Fe, Cu, O (Canxi, Bari, Magie, Kẽm, Sắt, Đồng, Oxi).</li>
                        <li><strong>Hóa trị III:</strong> Nhôm (Al), Sắt (Fe khi tác dụng Cl₂ hoặc axit có tính oxi hóa mạnh).</li>
                      </ul>
                    </div>
                    <div className="bg-cyan-50/70 p-4 rounded-xl border border-cyan-200">
                      <h4 className="font-extrabold text-cyan-900 mb-2">⚡ Hóa trị của các nhóm nguyên tử</h4>
                      <ul className="space-y-1.5 font-mono">
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
                  <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-slate-700 leading-relaxed">
                    <div className="font-mono text-sm font-black text-blue-900 mb-2">
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
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                      <div className="text-xs font-bold text-slate-500">Theo khối lượng</div>
                      <div className="font-mono font-black text-purple-800 text-base my-1">n = m / M</div>
                      <div className="text-[10px] text-slate-500">m(g), M(g/mol)</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                      <div className="text-xs font-bold text-slate-500">Thể tích khí (đktc)</div>
                      <div className="font-mono font-black text-purple-800 text-base my-1">n = V / 22,4</div>
                      <div className="text-[10px] text-slate-500">V tính bằng lít</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                      <div className="text-xs font-bold text-slate-500">Nồng độ mol CM</div>
                      <div className="font-mono font-black text-purple-800 text-base my-1">C_M = n / V</div>
                      <div className="text-[10px] text-slate-500">V dung dịch (lít)</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                      <div className="text-xs font-bold text-slate-500">Nồng độ % C%</div>
                      <div className="font-mono font-black text-purple-800 text-base my-1">C% = (m_ct/m_dd).100%</div>
                      <div className="text-[10px] text-slate-500">m_dd = m_ct + m_dm</div>
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

                    <p className="text-sm font-bold text-slate-800 mb-2">
                      {q.question.replace(/^Câu \d+:\s*/, '')}
                    </p>

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
                          {top.shortTitle}
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
                    💡 <strong>Giao riêng biệt:</strong> Thầy có thể tìm và tích chọn bất kỳ học sinh nào (kể cả khác lớp). Chỉ những em được Thầy tích chọn mới thấy đề thi này!
                  </span>
                ) : (
                  <span>
                    💡 <strong>Giao theo lớp:</strong> Chọn lớp và giao cho cả lớp hoặc chọn riêng một số em trong lớp.
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
                      {assignMode === 'individual' ? 'Danh sách học sinh' : 'Học sinh trong lớp'} ({displayedStudents.length} em):
                    </label>
                    <div className="flex items-center gap-2">
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
                      className="input text-xs pl-9 py-2 bg-white"
                    />
                  </div>

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
      </div>
    </div>
  );
}
