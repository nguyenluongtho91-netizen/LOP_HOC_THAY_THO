import React, { useState, useEffect } from 'react';
import { 
  Zap, ArrowRight, CheckCircle2, XCircle, RotateCcw, 
  HelpCircle, BookOpen, Award, Sparkles, Printer, 
  Flame, Clock, ChevronRight, Calculator, Shuffle, FileDown,
  Send, Users, Check, Copy, Search, ShieldCheck, X
} from 'lucide-react';
import MathText from '@/components/MathText';
import { useDataStore } from '@/store/dataStore';
import { useExamRoomStore } from '@/store/examRoomStore';
import { useExamStore } from '@/store/examStore';
import Modal from '@/components/Modal';
import toast from 'react-hot-toast';

interface Question {
  id: number;
  question: string;
  mathExpression?: string;
  type: 'fill' | 'choice';
  options?: string[];
  correctAnswer: string;
  explanation: string;
  topic: 'so_am' | 'chuyen_ve' | 'phan_so';
}

const DEFAULT_QUESTIONS: Question[] = [
  // Phần Số Âm
  {
    id: 1,
    question: 'Tính giá trị của phép tính:',
    mathExpression: '(-8) + (-15)',
    type: 'fill',
    correctAnswer: '-23',
    explanation: 'Cộng hai số nguyên âm: Ta cộng hai phần số tự nhiên rồi đặt dấu trừ trước kết quả: -(8 + 15) = -23.',
    topic: 'so_am'
  },
  {
    id: 2,
    question: 'Tính giá trị của phép tính:',
    mathExpression: '12 - (-7)',
    type: 'fill',
    correctAnswer: '19',
    explanation: 'Trừ đi số âm tương đương với cộng số dương: 12 - (-7) = 12 + 7 = 19.',
    topic: 'so_am'
  },
  {
    id: 3,
    question: 'Tính giá trị biểu thức:',
    mathExpression: '(-6) \\times (-9)',
    type: 'fill',
    correctAnswer: '54',
    explanation: 'Nhân hai số cùng dấu âm thì kết quả là số dương: (-) x (-) = (+). Do đó (-6) x (-9) = 54.',
    topic: 'so_am'
  },
  {
    id: 4,
    question: 'Tính giá trị biểu thức:',
    mathExpression: '(-45) : 5',
    type: 'fill',
    correctAnswer: '-9',
    explanation: 'Chia hai số khác dấu thì kết quả là số âm: (-) : (+) = (-). Do đó (-45) : 5 = -9.',
    topic: 'so_am'
  },
  {
    id: 5,
    question: 'Phá dấu ngoặc biểu thức sau: -(x - y + 5)',
    type: 'choice',
    options: ['-x - y - 5', '-x + y - 5', '-x + y + 5', 'x - y - 5'],
    correctAnswer: '-x + y - 5',
    explanation: 'Khi bỏ dấu ngoặc có dấu trừ đằng trước, ta phải đổi dấu tất cả các số hạng trong ngoặc: x thành -x, -y thành +y, +5 thành -5.',
    topic: 'so_am'
  },

  // Phần Chuyển vế đổi dấu & Tìm x
  {
    id: 6,
    question: 'Tìm x biết:',
    mathExpression: 'x - 17 = -25',
    type: 'fill',
    correctAnswer: '-8',
    explanation: 'Chuyển -17 sang vế phải đổi dấu thành +17: x = -25 + 17 => x = -8.',
    topic: 'chuyen_ve'
  },
  {
    id: 7,
    question: 'Tìm x biết:',
    mathExpression: '15 - x = 28',
    type: 'fill',
    correctAnswer: '-13',
    explanation: 'Chuyển -x sang vế phải thành +x, chuyển 28 sang trái thành -28: x = 15 - 28 => x = -13.',
    topic: 'chuyen_ve'
  },
  {
    id: 8,
    question: 'Tìm x biết:',
    mathExpression: '2x + 9 = -11',
    type: 'fill',
    correctAnswer: '-10',
    explanation: 'Chuyển +9 sang vế phải đổi thành -9: 2x = -11 - 9 = -20. Chia cả 2 vế cho 2: x = -20 : 2 = -10.',
    topic: 'chuyen_ve'
  },
  {
    id: 9,
    question: 'Tìm x biết:',
    mathExpression: '3(x - 4) = -18',
    type: 'fill',
    correctAnswer: '-2',
    explanation: 'Chia 2 vế cho 3: x - 4 = -18 : 3 = -6. Chuyển -4 sang phải đổi thành +4: x = -6 + 4 = -2.',
    topic: 'chuyen_ve'
  },
  {
    id: 10,
    question: 'Tìm x biết:',
    mathExpression: '5x - 3 = 2x + 12',
    type: 'fill',
    correctAnswer: '5',
    explanation: 'Chuyển 2x sang trái thành -2x, chuyển -3 sang phải thành +3: 5x - 2x = 12 + 3 => 3x = 15 => x = 5.',
    topic: 'chuyen_ve'
  },

  // Phần Phân số
  {
    id: 11,
    question: 'Tính giá trị của phân số:',
    mathExpression: '\\frac{1}{3} + \\frac{1}{6}',
    type: 'fill',
    correctAnswer: '1/2',
    explanation: 'Quy đồng mẫu chung là 6: 2/6 + 1/6 = 3/6 = 1/2.',
    topic: 'phan_so'
  },
  {
    id: 12,
    question: 'Tính giá trị phép nhân:',
    mathExpression: '\\frac{-3}{4} \\times \\frac{8}{9}',
    type: 'fill',
    correctAnswer: '-2/3',
    explanation: 'Rút gọn chéo 8 với 4 còn 2 ở tử; -3 với 9 còn 3 ở mẫu => (-1 * 2) / (1 * 3) = -2/3.',
    topic: 'phan_so'
  }
];

export default function LayGocToanPage({ isPublic = false }: { isPublic?: boolean }) {
  const [activeTab, setActiveTab] = useState<'ly_thuyet' | 'luyen_tap' | 'kiem_tra'>('luyen_tap');
  const [topicFilter, setTopicFilter] = useState<'all' | 'so_am' | 'chuyen_ve' | 'phan_so'>('all');
  
  // Interactive practice states
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [checkResults, setCheckResults] = useState<Record<number, boolean>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // Flash test states
  const [testActive, setTestActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 mins
  const [testSubmitted, setTestSubmitted] = useState(false);

  // Giao bài cho học sinh chỉ định
  const { classes, loadClasses, students, loadStudents, enrollments, loadEnrollments } = useDataStore();
  const { exams, loadExams } = useExamStore();
  const { createRoom } = useExamRoomStore();

  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [assignClassId, setAssignClassId] = useState('');
  const [assignStudentIds, setAssignStudentIds] = useState<string[]>([]);
  const [assignTimeLimit, setAssignTimeLimit] = useState(20);
  const [assignPasscode, setAssignPasscode] = useState('');
  const [studentSearch, setStudentSearch] = useState('');
  const [isSubmittingAssign, setIsSubmittingAssign] = useState(false);
  const [assignedSuccessData, setAssignedSuccessData] = useState<{ roomCode: string; count: number; className: string } | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedZalo, setCopiedZalo] = useState(false);

  useEffect(() => {
    void loadClasses();
    void loadStudents();
    void loadEnrollments();
    void loadExams();
  }, [loadClasses, loadStudents, loadEnrollments, loadExams]);

  const assignedClassStudents = assignClassId
    ? students.filter(s => {
        const enrolled = enrollments.some(e => e.class_id === assignClassId && e.student_id === s.id && e.status !== 'inactive');
        if (!enrolled) return false;
        if (!studentSearch.trim()) return true;
        const q = studentSearch.toLowerCase();
        return (s.full_name || '').toLowerCase().includes(q) || (s.student_code || '').toLowerCase().includes(q);
      })
    : [];

  const handleSelectAllStudents = () => {
    if (assignStudentIds.length === assignedClassStudents.length) {
      setAssignStudentIds([]);
    } else {
      setAssignStudentIds(assignedClassStudents.map(s => s.id));
    }
  };

  const handleToggleStudent = (id: string) => {
    setAssignStudentIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleAssignSubmit = async () => {
    if (!assignClassId) {
      toast.error('Vui lòng chọn lớp học!');
      return;
    }

    setIsSubmittingAssign(true);
    try {
      let exam = exams.find(e => e.title?.includes('LẤY GỐC TOÁN') || e.title?.includes('Lấy gốc'));
      if (!exam && exams.length > 0) {
        exam = exams[0];
      }

      if (!exam) {
        toast.error('Không tìm thấy đề thi mẫu trong ngân hàng!');
        return;
      }

      const selectedClass = classes.find(c => c.id === assignClassId);
      const className = (selectedClass as any)?.class_name || (selectedClass as any)?.name || 'Lớp học';

      await createRoom({
        exam_id: exam.id,
        class_id: assignClassId,
        time_limit: assignTimeLimit,
        status: 'active',
        settings: {
          shuffle: true,
          allowRetry: true,
          showCorrectAnswers: true,
          showExplanations: true,
          passcode: assignPasscode.trim(),
          antiCheat: true,
          assigned_student_ids: assignStudentIds
        }
      });

      const count = assignStudentIds.length > 0 ? assignStudentIds.length : assignedClassStudents.length;
      setAssignedSuccessData({
        roomCode: 'Đã mở phòng',
        count,
        className
      });
      toast.success('🎉 Đã giao đề Lấy Gốc Toán cho học sinh thành công!');
    } catch (err: any) {
      console.error(err);
      toast.error('Lỗi khi giao bài: ' + (err.message || 'Thử lại'));
    } finally {
      setIsSubmittingAssign(false);
    }
  };

  useEffect(() => {
    let timer: any;
    if (testActive && timeLeft > 0 && !testSubmitted) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [testActive, timeLeft, testSubmitted]);

  const filteredQuestions = DEFAULT_QUESTIONS.filter(q => 
    topicFilter === 'all' ? true : q.topic === topicFilter
  );

  const handleCheckAnswer = (qId: number, userAns: string) => {
    const q = DEFAULT_QUESTIONS.find(item => item.id === qId);
    if (!q) return;

    const cleanUser = userAns.trim().replace(/\s+/g, '').toLowerCase();
    const cleanCorrect = q.correctAnswer.trim().replace(/\s+/g, '').toLowerCase();
    const isCorrect = cleanUser === cleanCorrect;

    setCheckResults(prev => ({ ...prev, [qId]: isCorrect }));
    setShowExplanation(prev => ({ ...prev, [qId]: true }));

    if (isCorrect) {
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-700 via-rose-700 to-amber-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
                Hệ Thống Phục Hồi Mất Gốc Toán Cấp 2
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                ⚡ LẤY GỐC TOÁN – LỚP HỌC THẦY THỌ
              </h1>
              <p className="text-rose-100 text-sm mt-1 max-w-xl">
                Bí kíp xóa sạch mất gốc: Làm chủ cộng trừ số âm, quy tắc chuyển vế đổi dấu và xử lý phương trình tìm x dễ dàng trong 15 phút mỗi ngày!
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <div className="text-center px-3 border-r border-white/20">
                <div className="text-2xl font-black text-amber-300">{score}</div>
                <div className="text-[10px] text-white/80 font-bold uppercase">Điểm tích lũy</div>
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
          <div className="flex gap-2 mt-6 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('luyen_tap')}
              className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                activeTab === 'luyen_tap' 
                  ? 'bg-white text-red-700 shadow-md' 
                  : 'bg-red-800/60 text-white hover:bg-red-800'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Luyện Tập Tương Tác
            </button>
            <button
              onClick={() => setActiveTab('ly_thuyet')}
              className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                activeTab === 'ly_thuyet' 
                  ? 'bg-white text-red-700 shadow-md' 
                  : 'bg-red-800/60 text-white hover:bg-red-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Bí Kíp Thần Chú & Lý Thuyết
            </button>
            <button
              onClick={() => setActiveTab('kiem_tra')}
              className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                activeTab === 'kiem_tra' 
                  ? 'bg-white text-red-700 shadow-md' 
                  : 'bg-red-800/60 text-white hover:bg-red-800'
              }`}
            >
              <Award className="w-4 h-4" />
              Kiểm Tra Nhanh (Flash Test)
            </button>

            <button
              onClick={() => {
                setAssignedSuccessData(null);
                setIsAssignModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 shadow-md transition ml-auto flex-shrink-0"
            >
              <Send className="w-4 h-4 text-slate-900" />
              🎯 Giao Đề Cho Học Sinh Chỉ Định
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* ===================== TAB 1: BÍ KÍP THẦN CHÚ LÝ THUYẾT ===================== */}
        {activeTab === 'ly_thuyet' && (
          <div className="space-y-6">
            {/* Box 1: Quy tắc dấu */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2.5 mb-4 text-red-700 font-black text-lg border-b pb-3">
                <Zap className="w-6 h-6 text-amber-500" />
                BẢNG THẦN CHÚ DẤU: CỘNG, TRỪ, NHÂN, CHIA SỐ ÂM
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
                  <h3 className="font-extrabold text-amber-900 text-sm mb-2 flex items-center gap-1.5">
                    <span>➕ Phép Cộng & Trừ Số Nguyên</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <li className="bg-white p-2 rounded-lg border border-amber-100 shadow-xs">
                      <strong>Cùng âm:</strong> Cộng 2 số lại rồi thêm dấu trừ ở trước.<br/>
                      <span className="text-red-600 font-mono font-bold">(-5) + (-8) = -(5 + 8) = -13</span>
                    </li>
                    <li className="bg-white p-2 rounded-lg border border-amber-100 shadow-xs">
                      <strong>Khác dấu:</strong> Lấy số lớn trừ số bé, kết quả mang dấu của số có phần số lớn hơn.<br/>
                      <span className="text-red-600 font-mono font-bold">12 + (-20) = -(20 - 12) = -8</span>
                    </li>
                    <li className="bg-white p-2 rounded-lg border border-amber-100 shadow-xs">
                      <strong>Trừ đi số âm:</strong> Biến thành cộng số dương: <br/>
                      <span className="text-red-600 font-mono font-bold">a - (-b) = a + b</span> (Ví dụ: <span className="font-mono">7 - (-3) = 7 + 3 = 10</span>)
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4">
                  <h3 className="font-extrabold text-blue-900 text-sm mb-2 flex items-center gap-1.5">
                    <span>✖️ Phép Nhân & Chia Quy Tắc Dấu</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-2">
                    <div className="bg-white p-2 rounded-lg border border-blue-100 text-emerald-700 font-bold text-center">
                      (+) × (+) = (+)<br/>(-) × (-) = (+)
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-blue-100 text-rose-700 font-bold text-center">
                      (+) × (-) = (-)<br/>(-) × (+) = (-)
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    <strong>Ghi nhớ khẩu quyết:</strong> Cùng dấu ra <strong>DƯƠNG (+)</strong>, trái dấu ra <strong>ÂM (-)</strong>!
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Chuyển vế đổi dấu */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2.5 mb-4 text-emerald-700 font-black text-lg border-b pb-3">
                <Sparkles className="w-6 h-6 text-emerald-500" />
                QUY TẮC "QUA CẦU ĐỔI DẤU" – TÌM X KHÔNG BAO GIỜ SAI
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 mb-4">
                <h4 className="font-bold text-emerald-900 text-sm mb-1">Quy tắc vàng:</h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta <strong>bắt buộc phải đổi dấu</strong> số hạng đó:
                </p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs font-bold font-mono">
                  <span className="bg-white px-3 py-1.5 rounded-lg border border-emerald-300 text-emerald-800">
                    Dấu (+) ⇄ Dấu (-)
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg border border-emerald-300 text-emerald-800">
                    Phép nhân (×) ⇄ Phép chia (:)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Ví dụ 1: Tìm x cơ bản</span>
                  <p className="font-mono text-slate-600">x - 8 = -15</p>
                  <p className="font-mono text-emerald-600 font-bold">x = -15 + 8 (đổi - thành +)</p>
                  <p className="font-mono text-emerald-700 font-bold">x = -7</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Ví dụ 2: Tìm x có hệ số</span>
                  <p className="font-mono text-slate-600">3x + 12 = 0</p>
                  <p className="font-mono text-emerald-600 font-bold">3x = -12</p>
                  <p className="font-mono text-emerald-700 font-bold">x = -12 : 3 = -4</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Ví dụ 3: x ở cả hai vế</span>
                  <p className="font-mono text-slate-600">4x - 5 = x + 10</p>
                  <p className="font-mono text-emerald-600 font-bold">4x - x = 10 + 5</p>
                  <p className="font-mono text-emerald-700 font-bold">3x = 15 =&gt; x = 5</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 2: LUYỆN TẬP TƯƠNG TÁC ===================== */}
        {activeTab === 'luyen_tap' && (
          <div className="space-y-6">
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider pl-1">Chủ đề:</span>
                <button
                  onClick={() => setTopicFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    topicFilter === 'all' ? 'bg-red-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Tất cả ({DEFAULT_QUESTIONS.length})
                </button>
                <button
                  onClick={() => setTopicFilter('so_am')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    topicFilter === 'so_am' ? 'bg-red-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Số âm & Dấu
                </button>
                <button
                  onClick={() => setTopicFilter('chuyen_ve')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    topicFilter === 'chuyen_ve' ? 'bg-red-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Tìm x chuyển vế
                </button>
                <button
                  onClick={() => setTopicFilter('phan_so')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    topicFilter === 'phan_so' ? 'bg-red-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Phân số
                </button>
              </div>

              <div className="text-xs text-slate-400 font-medium">
                Gõ đáp án và nhấn <span className="font-bold text-slate-700">Enter</span> hoặc bấm <span className="font-bold text-slate-700">Kiểm tra</span>
              </div>
            </div>

            {/* Questions List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredQuestions.map((q, idx) => {
                const userAns = userAnswers[q.id] || '';
                const isChecked = checkResults[q.id] !== undefined;
                const isCorrect = checkResults[q.id];
                const showExpl = showExplanation[q.id];

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
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Câu {idx + 1}
                      </span>
                      {isChecked && (
                        <span className={`inline-flex items-center gap-1 text-xs font-extrabold px-2 py-0.5 rounded-md ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isCorrect ? 'Chính xác! (+10đ)' : 'Chưa đúng'}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-slate-800 mb-2">
                      {q.question}
                    </p>

                    {q.mathExpression && (
                      <div className="my-3 py-3.5 px-4 bg-teal-50/80 border border-teal-200 rounded-xl text-center text-xl font-black text-teal-800 tracking-wide shadow-xs">
                        <MathText html={`$$${q.mathExpression}$$`} block />
                      </div>
                    )}

                    {/* Inputs */}
                    {q.type === 'fill' ? (
                      <div className="flex gap-2 mt-4">
                        <input
                          type="text"
                          placeholder="Nhập kết quả (ví dụ: -8, 12, 1/2)..."
                          value={userAns}
                          onChange={(e) => setUserAnswers({ ...userAnswers, [q.id]: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCheckAnswer(q.id, userAns);
                          }}
                          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500"
                        />
                        <button
                          onClick={() => handleCheckAnswer(q.id, userAns)}
                          className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white text-xs font-bold rounded-xl shadow-xs transition"
                        >
                          Kiểm tra
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        {q.options?.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setUserAnswers({ ...userAnswers, [q.id]: opt });
                              handleCheckAnswer(q.id, opt);
                            }}
                            className={`p-2.5 rounded-xl border text-xs font-bold text-left transition ${
                              userAns === opt
                                ? 'bg-red-50 border-red-500 text-red-700'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Explanation */}
                    {showExpl && (
                      <div className={`mt-3 p-3 rounded-xl text-xs leading-relaxed ${
                        isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'bg-rose-50 text-rose-900 border border-rose-100'
                      }`}>
                        <strong>Lời giải Thầy Thọ:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===================== TAB 3: KIỂM TRA NHANH 20 PHÚT ===================== */}
        {activeTab === 'kiem_tra' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-4 mb-6">
              <div>
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-500" />
                  BÀI TEST KHẢO SÁT & ĐÁNH GIÁ MẤT GỐC TOÁN (20 CÂU)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Đánh giá chính xác mức độ hổng kiến thức số âm, dấu ngoặc và chuyển vế.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Printer className="w-4 h-4" />
                  In đề / Xuất PDF
                </button>
                {!testActive && !testSubmitted ? (
                  <button
                    onClick={() => {
                      setTestActive(true);
                      setTimeLeft(1200);
                    }}
                    className="px-5 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-extrabold shadow-sm transition"
                  >
                    Bắt đầu làm bài (20 phút)
                  </button>
                ) : (
                  <div className="flex items-center gap-2 font-mono font-black text-rose-600 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200 text-sm">
                    <Clock className="w-4 h-4 animate-spin" />
                    {formatTime(timeLeft)}
                  </div>
                )}
              </div>
            </div>

            {/* Test questions list */}
            <div className="space-y-4">
              {DEFAULT_QUESTIONS.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="font-bold text-sm text-slate-800 mb-2">
                    Câu {idx + 1}: {q.question} {q.mathExpression && <span className="text-red-700 font-mono">[{q.mathExpression}]</span>}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      disabled={testSubmitted}
                      placeholder="Đáp án của em..."
                      value={userAnswers[q.id] || ''}
                      onChange={(e) => setUserAnswers({ ...userAnswers, [q.id]: e.target.value })}
                      className="max-w-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold"
                    />
                    {testSubmitted && (
                      <span className={`text-xs font-bold self-center ${
                        (userAnswers[q.id] || '').trim() === q.correctAnswer.trim() ? 'text-emerald-600' : 'text-rose-600'
                      }`}>
                        Đáp án đúng: {q.correctAnswer}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {testActive && !testSubmitted && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setTestSubmitted(true);
                    setTestActive(false);
                  }}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl shadow-md transition"
                >
                  Nộp bài & Xem kết quả đánh giá
                </button>
              </div>
            )}
          </div>
        )}
      {/* ===================== MODAL GIAO ĐỀ CHO HỌC SINH CHỈ ĐỊNH ===================== */}
      <Modal 
        open={isAssignModalOpen} 
        onClose={() => setIsAssignModalOpen(false)} 
        title="🎯 GIAO ĐỀ LẤY GỐC TOÁN CHO HỌC SINH CHỈ ĐỊNH"
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
              <p className="text-sm text-slate-500 mt-1">
                Đã mở phòng thi Lấy Gốc Toán cho <strong className="text-emerald-700">{assignedSuccessData.count} học sinh</strong> thuộc <strong className="text-emerald-700">{assignedSuccessData.className}</strong>.
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
                  className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedLink ? 'Đã chép' : 'Chép link'}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                * Học sinh đăng nhập bằng Mã học sinh và Mật khẩu riêng Thầy đã cấp là thấy ngay bài thi!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button
                onClick={() => {
                  const zaloMsg = `🔔 THÔNG BÁO BÀI TẬP LẤY GỐC TOÁN - THẦY THỌ\nThầy vừa mở bài khảo sát Lấy Gốc Toán cho ${assignedSuccessData.count} bạn lớp ${assignedSuccessData.className}.\nCác em đăng nhập vào cổng thi: https://lop-hoc-thay-tho.vercel.app/thi để hoàn thành trước buổi học nhé!`;
                  navigator.clipboard.writeText(zaloMsg);
                  setCopiedZalo(true);
                  toast.success('Đã sao chép tin nhắn Zalo!');
                  setTimeout(() => setCopiedZalo(false), 2000);
                }}
                className="btn-outline flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                {copiedZalo ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                {copiedZalo ? 'Đã sao chép lời nhắn Zalo' : 'Sao chép tin nhắn Zalo gửi phụ huynh'}
              </button>
              <button
                onClick={() => {
                  setIsAssignModalOpen(false);
                  setAssignedSuccessData(null);
                }}
                className="btn-teal px-8 py-3 text-xs font-bold"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200/70 text-xs text-amber-900 leading-relaxed">
              💡 <strong>Chế độ chỉ định:</strong> Thầy có thể giao đề Lấy Gốc Toán cho cả lớp, hoặc chỉ định đích danh từng em học sinh bị mất gốc (các em khác sẽ không nhìn thấy).
            </div>

            {/* Bước 1: Chọn lớp */}
            <div>
              <label className="label">1. Chọn lớp học *</label>
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

            {/* Bước 2: Danh sách học sinh */}
            {assignClassId && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    2. Danh sách học sinh ({assignedClassStudents.length} em):
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSelectAllStudents}
                      className="text-[11px] font-bold text-teal-600 hover:underline"
                    >
                      {assignStudentIds.length === assignedClassStudents.length ? 'Bỏ chọn hết' : `Chọn cả lớp (${assignedClassStudents.length})`}
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
                      ⚠️ <strong>Chưa tích chọn:</strong> Hệ thống sẽ giao cho CẢ LỚP ({assignedClassStudents.length} em). Thầy tích chọn từng em nếu chỉ muốn chỉ định riêng.
                    </span>
                  ) : (
                    <span className="text-teal-700 font-bold">
                      ✅ Đã chỉ định {assignStudentIds.length} em học sinh được làm bài.
                    </span>
                  )}
                </div>

                <div className="max-h-48 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 bg-white rounded-xl border border-slate-200">
                  {assignedClassStudents.map(s => {
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
                        <span className="truncate flex-1">{s.full_name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bước 3: Cấu hình phòng */}
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
                <label className="label">Mã PIN bảo vệ (Tùy chọn)</label>
                <input
                  type="text"
                  placeholder="Để trống nếu không đặt"
                  value={assignPasscode}
                  onChange={e => setAssignPasscode(e.target.value)}
                  className="input font-mono text-center font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsAssignModalOpen(false)}
                className="btn-outline px-6 py-2.5 text-xs font-bold"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleAssignSubmit}
                disabled={isSubmittingAssign || !assignClassId}
                className="btn-teal px-8 py-2.5 text-xs font-bold shadow-lg shadow-teal-500/20 flex items-center gap-2"
              >
                {isSubmittingAssign ? (
                  <span>Đang giao bài...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Giao Đề Ngay {assignStudentIds.length > 0 ? `(${assignStudentIds.length} em)` : '(Cả lớp)'}</span>
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
