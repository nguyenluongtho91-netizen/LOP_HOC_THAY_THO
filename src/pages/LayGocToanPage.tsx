import React, { useState, useEffect } from 'react';
import { 
  Zap, ArrowRight, CheckCircle2, XCircle, RotateCcw, 
  HelpCircle, BookOpen, Award, Sparkles, Printer, 
  Flame, Clock, ChevronRight, Calculator, Shuffle, FileDown
} from 'lucide-react';
import MathText from '@/components/MathText';

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
                      <div className="my-3 py-3 px-4 bg-slate-50 border border-slate-150 rounded-xl text-center text-lg font-bold text-teal-800">
                        <MathText text={`$$${q.mathExpression}$$`} />
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
      </div>
    </div>
  );
}
