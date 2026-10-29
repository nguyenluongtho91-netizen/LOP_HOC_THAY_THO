// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, Lock, Unlock, Eye, BookOpen, Clock, Award, 
  ShieldCheck, Printer, Play, RotateCcw, AlertCircle, Check, 
  HelpCircle, ChevronRight, Trophy, Zap, Bookmark
} from 'lucide-react';
import toast from 'react-hot-toast';
import { formatChemicalText } from '@/utils/chemicalFormulaFormatter';
import { toggleExamAccess, isExamLocked, GranularAccessConfig } from '@/services/hoa12AccessControlService';

interface AdminExamViewerModalProps {
  exam: any | null;
  accessConfig: GranularAccessConfig;
  onClose: () => void;
  onConfigChange: (newCfg: GranularAccessConfig) => void;
  onEnterExam?: (examId: string) => void;
}

export default function AdminExamViewerModal({
  exam,
  accessConfig,
  onClose,
  onConfigChange,
  onEnterExam
}: AdminExamViewerModalProps) {
  if (!exam) return null;

  const [activePartTab, setActivePartTab] = useState<'all' | 1 | 2 | 3>('all');
  const [isTestMode, setIsTestMode] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [timeLeft, setTimeLeft] = useState((exam.duration || 50) * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreResult, setScoreResult] = useState<{
    score: number;
    part1Score: number;
    part2Score: number;
    part3Score: number;
    correctCount: number;
    total: number;
  } | null>(null);

  const isLocked = Boolean(accessConfig?.exams?.[exam.id]);
  const questions = exam.questions || [];
  const part1Questions = questions.filter(q => q.part === 1 || q.type === 'multiple_choice');
  const part2Questions = questions.filter(q => q.part === 2 || q.type === 'true_false');
  const part3Questions = questions.filter(q => q.part === 3 || q.type === 'short_answer');

  // Countdown timer in test mode
  useEffect(() => {
    if (!isTestMode || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTestMode, isSubmitted]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggle = async () => {
    try {
      const newCfg = await toggleExamAccess(exam.id, !isLocked);
      onConfigChange(newCfg);
      toast.success(!isLocked ? `🔒 Đã KHÓA ${exam.title} với học sinh!` : `🟢 Đã MỞ ${exam.title} cho học sinh!`, {
        icon: !isLocked ? '🔒' : '🟢'
      });
    } catch (e) {
      toast.error('Lỗi lưu trạng thái khóa!');
    }
  };

  const handleSelectP1 = (qId: string, letter: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: letter }));
  };

  const handleSelectP2 = (qId: string, subId: string, val: 'true' | 'false') => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [qId]: { ...(prev[qId] || {}), [subId]: val }
    }));
  };

  const handleInputP3 = (qId: string, val: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmitTest = () => {
    let p1 = 0, p2 = 0, p3 = 0, correct = 0;

    questions.forEach(q => {
      const ans = userAnswers[q.id];
      if (q.part === 1 || q.type === 'multiple_choice') {
        const correctOpt = q.options?.find((o: any) => o.isCorrect)?.letter || q.correctAnswer;
        if (ans && ans.toUpperCase() === String(correctOpt).toUpperCase()) {
          p1 += (q.points || 0.25);
          correct++;
        }
      } else if (q.part === 2 || q.type === 'true_false') {
        if (ans && typeof ans === 'object' && q.options) {
          let subCorrect = 0;
          q.options.forEach((opt: any) => {
            const key = opt.id || opt.letter?.toLowerCase();
            const uVal = ans[key];
            const isActuallyTrue = Boolean(opt.isCorrect);
            if (uVal === 'true' && isActuallyTrue) subCorrect++;
            else if (uVal === 'false' && !isActuallyTrue) subCorrect++;
          });
          if (subCorrect === 1) p2 += 0.1;
          else if (subCorrect === 2) p2 += 0.25;
          else if (subCorrect === 3) p2 += 0.5;
          else if (subCorrect === 4) {
            p2 += 1.0;
            correct++;
          }
        }
      } else if (q.part === 3 || q.type === 'short_answer') {
        if (ans !== undefined && ans !== null && String(ans).trim() !== '') {
          const rawU = String(ans).trim().toLowerCase().replace(',', '.');
          const rawC = String(q.correctAnswer || '').trim().toLowerCase().replace(',', '.');
          const numU = parseFloat(rawU);
          const numC = parseFloat(rawC);
          let match = false;
          if (!isNaN(numU) && !isNaN(numC)) {
            match = Math.abs(numU - numC) < 0.01;
          } else {
            match = (rawU === rawC);
          }
          if (!match && q.acceptedAnswers && Array.isArray(q.acceptedAnswers)) {
            match = q.acceptedAnswers.some((acc: any) => {
              const rawA = String(acc).trim().toLowerCase().replace(',', '.');
              const numA = parseFloat(rawA);
              if (!isNaN(numU) && !isNaN(numA)) {
                return Math.abs(numU - numA) < 0.01;
              }
              return rawU === rawA;
            });
          }
          if (match) {
            p3 += (q.points || 0.25);
            correct++;
          }
        }
      }
    });

    const finalScore = Math.round((p1 + p2 + p3) * 100) / 100;
    setScoreResult({
      score: finalScore,
      part1Score: Math.round(p1 * 100) / 100,
      part2Score: Math.round(p2 * 100) / 100,
      part3Score: Math.round(p3 * 100) / 100,
      correctCount: correct,
      total: questions.length
    });
    setIsSubmitted(true);
    toast.success(`🎉 Đã nộp bài! Điểm số: ${finalScore}/10 điểm`, { icon: '🏆' });
  };

  const handleRetake = () => {
    setUserAnswers({});
    setTimeLeft((exam.duration || 50) * 60);
    setIsSubmitted(false);
    setScoreResult(null);
  };

  const scrollToQuestion = (qId: string) => {
    const el = document.getElementById(`question-${qId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const isQuestionAnswered = (q: any) => {
    const ans = userAnswers[q.id];
    if (q.part === 1 || q.type === 'multiple_choice') {
      return Boolean(ans);
    }
    if (q.part === 2 || q.type === 'true_false') {
      return ans && typeof ans === 'object' && Object.keys(ans).length === 4;
    }
    if (q.part === 3 || q.type === 'short_answer') {
      return ans !== undefined && ans !== null && String(ans).trim() !== '';
    }
    return false;
  };

  const displayedQuestions = activePartTab === 'all'
    ? questions
    : questions.filter(q => q.part === activePartTab || (activePartTab === 1 && q.type === 'multiple_choice') || (activePartTab === 2 && q.type === 'true_false') || (activePartTab === 3 && q.type === 'short_answer'));

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fade-in font-sans">
      <div className="bg-white w-full max-w-5xl max-h-[94vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white flex items-center justify-between gap-3 border-b border-white/10 shrink-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                MÃ ĐỀ: {exam.code}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-slate-300">
                {exam.grade ? `Hóa ${exam.grade}` : 'THPT'} • {exam.chapter || exam.topic || 'Đề Thi Chuẩn Bộ GD&ĐT 2025'}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                isLocked ? 'bg-rose-500/80 text-white' : 'bg-emerald-400 text-slate-950'
              }`}>
                {isLocked ? '🔒 ĐÃ KHÓA VỚI HỌC SINH' : '🟢 ĐANG MỞ'}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-white leading-snug truncate">
              {exam.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Chế độ làm bài thi thử */}
            <button
              type="button"
              onClick={() => {
                if (isTestMode && !isSubmitted) {
                  if (confirm('Thầy/Trò có muốn thoát chế độ làm bài thi không?')) {
                    setIsTestMode(false);
                    setIsSubmitted(false);
                  }
                } else {
                  setIsTestMode(!isTestMode);
                  if (!isTestMode) handleRetake();
                }
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                isTestMode
                  ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-400 font-extrabold'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400'
              }`}
            >
              {isTestMode ? <Eye className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isTestMode ? 'Xem Đề & Lời Giải' : 'Vào Thi Thử (50p)'}</span>
            </button>

            <button
              type="button"
              onClick={handleToggle}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-black border transition-all flex items-center gap-1 cursor-pointer ${
                isLocked
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-400'
                  : 'bg-rose-500/90 hover:bg-rose-600 text-white border-rose-400'
              }`}
              title="Bật/Tắt quyền làm bài của học sinh"
            >
              {isLocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isLocked ? 'Mở HS' : 'Khóa HS'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Test Bar (When in Test Mode) */}
        {isTestMode && (
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-5 py-2.5 border-b border-indigo-700/60 flex items-center justify-between gap-3 shrink-0 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-black tracking-wide text-indigo-200 uppercase">
                ⏱️ Thời Gian Còn Lại:
              </span>
              <span className={`text-base font-black px-2.5 py-0.5 rounded-lg border ${
                timeLeft < 300 ? 'bg-rose-600 text-white border-rose-400 animate-pulse' : 'bg-slate-900/80 text-amber-300 border-white/20'
              }`}>
                {formatTimer(timeLeft)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {!isSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitTest}
                  className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Nộp Bài Thi</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleRetake}
                  className="px-4 py-1.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-black text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Làm Lại Đề Này</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Result Banner after submit */}
        {isTestMode && isSubmitted && scoreResult && (
          <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border-b border-emerald-200 flex items-center justify-between gap-4 flex-wrap shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-xl shadow-md">
                {scoreResult.score}
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-black text-emerald-800">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span>KẾT QUẢ THI: {scoreResult.score >= 8 ? 'XUẤT SẮC' : scoreResult.score >= 6.5 ? 'ĐẠT YÊU CẦU' : 'CẦN ÔN TẬP THÊM'}</span>
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Đúng <strong>{scoreResult.correctCount}/{scoreResult.total} câu</strong> • Phần I: <strong>{scoreResult.part1Score}đ</strong> • Phần II: <strong>{scoreResult.part2Score}đ</strong> • Phần III: <strong>{scoreResult.part3Score}đ</strong>
                </div>
              </div>
            </div>
            <div className="text-xs text-emerald-900 font-semibold bg-white/80 px-3 py-1.5 rounded-xl border border-emerald-200">
              💡 Thầy/Trò xem đối chiếu đáp án đúng và hướng dẫn giải chi tiết bên dưới!
            </div>
          </div>
        )}

        {/* Filter Part Tabs */}
        <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2 flex-wrap shrink-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setActivePartTab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Toàn bộ đề thi ({questions.length} câu)
            </button>
            <button
              onClick={() => setActivePartTab(1)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 1
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Phần I: 4 Lựa chọn ({part1Questions.length} câu)
            </button>
            <button
              onClick={() => setActivePartTab(2)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 2
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Phần II: Đúng / Sai ({part2Questions.length} câu)
            </button>
            <button
              onClick={() => setActivePartTab(3)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 3
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Phần III: Trả lời ngắn ({part3Questions.length} câu)
            </button>
          </div>

          <div className="text-xs font-bold text-slate-500">
            Hiển thị {displayedQuestions.length} câu hỏi
          </div>
        </div>

        {/* Quick Question Jump Navigator */}
        <div className="px-5 py-2 bg-slate-100/70 border-b border-slate-200 overflow-x-auto shrink-0 flex items-center gap-4 text-xs font-bold">
          <div className="flex items-center gap-1.5 shrink-0 text-slate-600">
            <Bookmark className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-500">Chuyển nhanh:</span>
          </div>

          {/* Part 1 Jump List */}
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[10px] font-black uppercase text-indigo-700 bg-indigo-100/80 px-1.5 py-0.5 rounded mr-0.5">P.I:</span>
            {part1Questions.map((q) => {
              const answered = isQuestionAnswered(q);
              return (
                <button
                  key={q.id}
                  onClick={() => scrollToQuestion(q.id)}
                  title={`Phần I - Câu ${q.number}`}
                  className={`w-6 h-6 rounded-md text-[11px] font-black flex items-center justify-center transition-all cursor-pointer ${
                    isTestMode && answered
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white hover:bg-indigo-100 text-slate-700 border border-slate-300'
                  }`}
                >
                  {q.number}
                </button>
              );
            })}
          </div>

          {/* Part 2 Jump List */}
          <div className="flex items-center gap-1 shrink-0 pl-2 border-l border-slate-300">
            <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100/80 px-1.5 py-0.5 rounded mr-0.5">P.II:</span>
            {part2Questions.map((q) => {
              const answered = isQuestionAnswered(q);
              return (
                <button
                  key={q.id}
                  onClick={() => scrollToQuestion(q.id)}
                  title={`Phần II - Câu ${q.number}`}
                  className={`w-6 h-6 rounded-md text-[11px] font-black flex items-center justify-center transition-all cursor-pointer ${
                    isTestMode && answered
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white hover:bg-amber-100 text-slate-700 border border-slate-300'
                  }`}
                >
                  {q.number}
                </button>
              );
            })}
          </div>

          {/* Part 3 Jump List */}
          <div className="flex items-center gap-1 shrink-0 pl-2 border-l border-slate-300">
            <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-100/80 px-1.5 py-0.5 rounded mr-0.5">P.III:</span>
            {part3Questions.map((q) => {
              const answered = isQuestionAnswered(q);
              return (
                <button
                  key={q.id}
                  onClick={() => scrollToQuestion(q.id)}
                  title={`Phần III - Câu ${q.number}`}
                  className={`w-6 h-6 rounded-md text-[11px] font-black flex items-center justify-center transition-all cursor-pointer ${
                    isTestMode && answered
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white hover:bg-teal-100 text-slate-700 border border-slate-300'
                  }`}
                >
                  {q.number}
                </button>
              );
            })}
          </div>
        </div>

        {/* Question List Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
          {displayedQuestions.map((q, qIndex) => {
            const userP1 = userAnswers[q.id];
            const userP2 = userAnswers[q.id] || {};
            const userP3 = userAnswers[q.id] || '';
            const correctP1 = q.options?.find((o: any) => o.isCorrect)?.letter || q.correctAnswer;

            // Check if this is the start of a new Part
            const isFirstOfPart = (qIndex === 0) || (displayedQuestions[qIndex - 1]?.part !== q.part);
            const partNum = q.part || (q.type === 'multiple_choice' ? 1 : q.type === 'true_false' ? 2 : 3);

            return (
              <React.Fragment key={q.id || qIndex}>
                {/* ── Official Ministry Part Header Banner ── */}
                {isFirstOfPart && (
                  <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 rounded-xl bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm">
                          {partNum === 1 ? 'PHẦN I' : partNum === 2 ? 'PHẦN II' : 'PHẦN III'}
                        </span>
                        <h3 className="text-sm sm:text-base font-black tracking-tight text-white uppercase">
                          {partNum === 1 && 'CÂU HỎI TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN'}
                          {partNum === 2 && 'CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI'}
                          {partNum === 3 && 'CÂU HỎI TRẮC NGHIỆM TRẢ LỜI NGẮN'}
                        </h3>
                      </div>
                      <span className="text-[11px] font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-xl border border-amber-400/20 w-fit">
                        {partNum === 1 && `Thí sinh trả lời từ Câu 1 đến Câu ${part1Questions.length} • 0,25 điểm/câu`}
                        {partNum === 2 && `Thí sinh trả lời từ Câu 1 đến Câu ${part2Questions.length} • Tối đa 1,0 điểm/câu`}
                        {partNum === 3 && `Thí sinh trả lời từ Câu 1 đến Câu ${part3Questions.length} • 0,25 điểm/câu`}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                      {partNum === 1 && 'Thí sinh chỉ chọn một phương án chính xác nhất trong các phương án A, B, C, D cho mỗi câu hỏi.'}
                      {partNum === 2 && 'Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai. (Thang điểm chuẩn Bộ GD&ĐT: Đúng 1 ý: 0,1đ | Đúng 2 ý: 0,25đ | Đúng 3 ý: 0,5đ | Đúng 4 ý: 1,0đ).'}
                      {partNum === 3 && 'Thí sinh tính toán và điền kết quả vào ô tương ứng. Đối với số thập phân, có thể dùng dấu phẩy (,) hoặc dấu chấm (.).'}
                    </p>
                  </div>
                )}

                {/* ── Question Card ── */}
                <div
                  id={`question-${q.id}`}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 scroll-mt-28 transition-all hover:border-indigo-200"
                >
                  {/* Question Header: Question number & text on top */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 flex items-start gap-2.5 min-w-0">
                      <span className="shrink-0 px-2.5 py-1 rounded-xl bg-indigo-600 text-white font-black text-xs shadow-xs tracking-tight mt-0.5">
                        Câu {q.number || q.displayNumber || (qIndex + 1)}
                      </span>
                      <div
                        className="text-sm font-semibold text-slate-900 leading-relaxed pt-0.5"
                        dangerouslySetInnerHTML={{ __html: formatChemicalText(q.text) }}
                      />
                    </div>
                    <span className="shrink-0 px-2.5 py-1 rounded-lg text-xs font-black bg-slate-100 text-slate-700 border border-slate-200">
                      {partNum === 2 ? '1,0 điểm' : '0,25 điểm'}
                    </span>
                  </div>

                  {/* Question Images - Centered & Professional Frame */}
                  {q.images && q.images.length > 0 && (
                    <div className="flex flex-wrap justify-center items-center gap-4 my-3 p-2.5 bg-slate-50/70 rounded-xl border border-slate-200/80">
                      {q.images.map((img: string, i: number) => (
                        <div key={i} className="flex flex-col items-center">
                          <img
                            src={img}
                            alt={`Hình minh họa câu ${q.number || q.displayNumber || (qIndex + 1)}`}
                            className="max-h-64 sm:max-h-72 w-auto max-w-full rounded-lg border border-slate-200/90 shadow-xs bg-white p-2 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ── PART 1: MULTIPLE CHOICE OPTIONS ── */}
                  {(partNum === 1 || q.type === 'multiple_choice') && q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 pt-2 border-t border-slate-100">
                      {q.options.map((opt: any) => {
                        const isTeacherView = !isTestMode || isSubmitted;
                        const isCorrect = Boolean(opt.isCorrect || opt.letter === correctP1);
                        const isSelected = (userP1 === opt.letter);

                        let containerClass = "bg-slate-50 border-slate-200 text-slate-700";
                        let badgeClass = "bg-slate-200 text-slate-700";

                        if (isTestMode && !isSubmitted) {
                          if (isSelected) {
                            containerClass = "bg-indigo-50 border-indigo-400 text-indigo-950 font-bold shadow-xs";
                            badgeClass = "bg-indigo-600 text-white";
                          } else {
                            containerClass = "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800";
                          }
                        } else if (isTeacherView) {
                          if (isCorrect) {
                            containerClass = "bg-emerald-50/90 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-300/60";
                            badgeClass = "bg-emerald-600 text-white";
                          } else if (isSelected && !isCorrect) {
                            containerClass = "bg-rose-50 border-rose-300 text-rose-950 line-through";
                            badgeClass = "bg-rose-600 text-white";
                          }
                        }

                        return (
                          <div
                            key={opt.id || opt.letter}
                            onClick={() => isTestMode && !isSubmitted && handleSelectP1(q.id, opt.letter)}
                            className={`p-3 rounded-xl border transition-all flex items-start gap-2.5 ${containerClass} ${isTestMode && !isSubmitted ? 'cursor-pointer hover:shadow-xs' : ''}`}
                          >
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${badgeClass}`}>
                              {opt.letter}
                            </span>
                            <div className="text-xs sm:text-sm leading-snug flex-1 font-medium">
                              {opt.text && <div dangerouslySetInnerHTML={{ __html: formatChemicalText(opt.text) }} />}
                              {opt.image && (
                                <img src={opt.image} alt={`Hình ${opt.letter}`} className="max-h-28 rounded-lg mt-1 border border-slate-200 bg-white" />
                              )}
                            </div>
                            {isTeacherView && isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* ── PART 2: TRUE / FALSE STATEMENTS ── */}
                  {(partNum === 2 || q.type === 'true_false') && q.options && (
                    <div className="space-y-2 mt-3 pt-2 border-t border-slate-100">
                      {q.options.map((opt: any) => {
                        const key = opt.id || opt.letter?.toLowerCase();
                        const isCorrectTrue = Boolean(opt.isCorrect);
                        const uChoice = userP2[key];

                        return (
                          <div
                            key={key}
                            className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3"
                          >
                            <div className="flex items-start gap-2 flex-1">
                              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-slate-200 text-slate-700">
                                {opt.letter?.toLowerCase()})
                              </span>
                              <div className="text-xs sm:text-sm leading-snug text-slate-800 font-medium">
                                {opt.text && <div dangerouslySetInnerHTML={{ __html: formatChemicalText(opt.text) }} />}
                                {opt.image && (
                                  <img src={opt.image} alt={`Hình ${opt.letter}`} className="max-h-28 rounded-lg mt-1 border border-slate-200 bg-white" />
                                )}
                              </div>
                            </div>

                            {/* Interactive Buttons / Reveal */}
                            <div className="flex items-center gap-1.5 shrink-0 ml-auto">
                              {isTestMode && !isSubmitted ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => handleSelectP2(q.id, key, 'true')}
                                    className={`px-3 py-1 rounded-lg text-xs font-black border transition-all cursor-pointer ${
                                      uChoice === 'true'
                                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                                        : 'bg-white text-slate-700 hover:bg-emerald-50 border-slate-300'
                                    }`}
                                  >
                                    Đúng
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleSelectP2(q.id, key, 'false')}
                                    className={`px-3 py-1 rounded-lg text-xs font-black border transition-all cursor-pointer ${
                                      uChoice === 'false'
                                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                                        : 'bg-white text-slate-700 hover:bg-rose-50 border-slate-300'
                                    }`}
                                  >
                                    Sai
                                  </button>
                                </>
                              ) : (
                                <div className="flex items-center gap-1.5">
                                  {isSubmitted && uChoice && (
                                    <span className="text-[11px] text-slate-500">
                                      Đã chọn: <strong>{uChoice === 'true' ? 'Đúng' : 'Sai'}</strong>
                                    </span>
                                  )}
                                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-black border ${
                                    isCorrectTrue
                                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                      : 'bg-rose-100 text-rose-800 border-rose-300'
                                  }`}>
                                    {isCorrectTrue ? 'ĐÚNG' : 'SAI'}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* ── PART 3: SHORT ANSWER ── */}
                  {(partNum === 3 || q.type === 'short_answer') && (
                    <div className="mt-3 pt-2 border-t border-slate-100 space-y-2">
                      {isTestMode && !isSubmitted ? (
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-slate-600">Nhập kết quả trả lời ngắn:</span>
                          <input
                            type="text"
                            value={userP3}
                            onChange={(e) => handleInputP3(q.id, e.target.value)}
                            placeholder="Ví dụ: 18 hoặc 2,5..."
                            className="px-3 py-1.5 rounded-xl border border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-sm font-black text-slate-900 w-44"
                          />
                        </div>
                      ) : (
                        <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-indigo-700">Đáp án chính xác:</span>
                            <strong className="text-sm font-black text-indigo-900 bg-white px-2 py-0.5 rounded-lg border border-indigo-200">
                              {String(q.correctAnswer)}
                            </strong>
                          </div>
                          {isSubmitted && (
                            <div className="text-xs font-bold text-slate-600">
                              Câu trả lời của bạn: <strong className="text-indigo-800">{userP3 || '(chưa điền)'}</strong>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* ── EXPLANATION (Revealed in Teacher Mode or After Submission) ── */}
                  {(!isTestMode || isSubmitted) && q.explanation && (
                    <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-sm text-slate-800 space-y-2 mt-3 shadow-2xs">
                      <div className="font-black text-amber-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                        <span>💡 Hướng dẫn giải chi tiết:</span>
                      </div>
                      <div
                        className="leading-relaxed font-normal text-slate-800 space-y-1"
                        dangerouslySetInnerHTML={{ __html: formatChemicalText(q.explanation) }}
                      />
                      {q.explanationImages && q.explanationImages.length > 0 && (
                        <div className="flex flex-wrap justify-center items-center gap-3 mt-3 p-2 bg-white rounded-xl border border-amber-200/80">
                          {q.explanationImages.map((img: string, i: number) => (
                            <img key={i} src={img} alt="Hình giải thích" className="max-h-60 rounded-lg border border-amber-200 bg-white p-1.5 shadow-xs object-contain" />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-3 shrink-0 flex-wrap">
          <div className="text-xs font-medium text-slate-500">
            Tổng cộng: <strong className="text-slate-800">{questions.length} câu hỏi chuẩn cấu trúc Bộ GD&ĐT 2025</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              Đóng lại
            </button>
            {isTestMode && !isSubmitted ? (
              <button
                type="button"
                onClick={handleSubmitTest}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md transition-all cursor-pointer"
              >
                Nộp Bài Thi
              </button>
            ) : onEnterExam ? (
              <button
                type="button"
                onClick={() => onEnterExam(exam.id)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              >
                Vào Luyện Đề
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
