// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, Lock, Unlock, Eye, BookOpen, Clock, Award, 
  ShieldCheck, Printer, Play, RotateCcw, AlertCircle, Check, 
  HelpCircle, ChevronRight, Trophy, Zap
} from 'lucide-react';
import toast from 'react-hot-toast';
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

  const displayedQuestions = activePartTab === 'all'
    ? questions
    : questions.filter(q => q.part === activePartTab || (activePartTab === 1 && q.type === 'multiple_choice') || (activePartTab === 2 && q.type === 'true_false') || (activePartTab === 3 && q.type === 'short_answer'));

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fade-in font-sans">
      <div className="bg-white w-full max-w-5xl max-h-[94vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white flex items-center justify-between gap-3 border-b border-white/10 shrink-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                MÃ ĐỀ: {exam.code}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-slate-300">
                {exam.grade ? `Hóa ${exam.grade}` : 'THPT'} • {exam.chapter || exam.topic || 'Đề Chuẩn GDPT 2018'}
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
              <span>{isTestMode ? 'Xem Lời Giải' : 'Làm Bài Thi Thử'}</span>
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
                  Đúng <strong>{scoreResult.correctCount}/{scoreResult.total} câu</strong> • P1: <strong>{scoreResult.part1Score}đ</strong> • P2: <strong>{scoreResult.part2Score}đ</strong> • P3: <strong>{scoreResult.part3Score}đ</strong>
                </div>
              </div>
            </div>
            <div className="text-xs text-emerald-900 font-semibold bg-white/80 px-3 py-1.5 rounded-xl border border-emerald-200">
              💡 Thầy/Trò kéo xuống dưới để xem đáp án đúng và lời giải chi tiết từng câu!
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
              Tất cả ({questions.length} câu)
            </button>
            <button
              onClick={() => setActivePartTab(1)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 1
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Phần I: Trắc nghiệm ({part1Questions.length})
            </button>
            <button
              onClick={() => setActivePartTab(2)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 2
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Phần II: Đúng / Sai ({part2Questions.length})
            </button>
            <button
              onClick={() => setActivePartTab(3)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 3
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Phần III: Trả lời ngắn ({part3Questions.length})
            </button>
          </div>

          <div className="text-xs font-bold text-slate-500">
            Hiển thị {displayedQuestions.length} câu
          </div>
        </div>

        {/* Question List Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
          {displayedQuestions.map((q, qIndex) => {
            const userP1 = userAnswers[q.id];
            const userP2 = userAnswers[q.id] || {};
            const userP3 = userAnswers[q.id] || '';
            const correctP1 = q.options?.find((o: any) => o.isCorrect)?.letter || q.correctAnswer;

            return (
              <div
                key={q.id || qIndex}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 font-black text-xs flex items-center justify-center">
                      {q.displayNumber || q.number || qIndex + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {q.type === 'multiple_choice' ? 'Trắc nghiệm nhiều lựa chọn' : q.type === 'true_false' ? 'Trắc nghiệm Đúng / Sai' : 'Yêu cầu trả lời ngắn'}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-black bg-slate-100 text-slate-700 border border-slate-200">
                    {q.points || 0.25} điểm
                  </span>
                </div>

                {/* Question Text */}
                <div
                  className="text-sm font-semibold text-slate-900 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: q.text }}
                />

                {/* Question Images */}
                {q.images && q.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 my-2">
                    {q.images.map((img: string, i: number) => (
                      <img
                        key={i}
                        src={img}
                        alt="Hình câu hỏi"
                        className="max-h-56 rounded-xl border border-slate-200 shadow-2xs bg-white"
                      />
                    ))}
                  </div>
                )}

                {/* ── PART 1: MULTIPLE CHOICE OPTIONS ── */}
                {(q.part === 1 || q.type === 'multiple_choice') && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-2 border-t border-slate-100">
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
                          containerClass = "bg-emerald-50/80 border-emerald-300 text-emerald-950 font-bold";
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
                          <div className="text-xs sm:text-sm leading-snug flex-1">
                            {opt.text && <div dangerouslySetInnerHTML={{ __html: opt.text }} />}
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
                {(q.part === 2 || q.type === 'true_false') && q.options && (
                  <div className="space-y-2 mt-3 pt-2 border-t border-slate-100">
                    {q.options.map((opt: any) => {
                      const key = opt.id || opt.letter?.toLowerCase();
                      const isTeacherView = !isTestMode || isSubmitted;
                      const isCorrectTrue = Boolean(opt.isCorrect);
                      const uChoice = userP2[key];

                      return (
                        <div
                          key={key}
                          className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap"
                        >
                          <div className="flex items-start gap-2.5 flex-1">
                            <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-900 flex items-center justify-center text-xs font-black shrink-0">
                              {opt.letter?.toLowerCase()})
                            </span>
                            <div className="text-xs sm:text-sm leading-snug text-slate-800">
                              {opt.text && <div dangerouslySetInnerHTML={{ __html: opt.text }} />}
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
                                  className={`px-2.5 py-1 rounded-lg text-xs font-black border transition-all cursor-pointer ${
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
                                  className={`px-2.5 py-1 rounded-lg text-xs font-black border transition-all cursor-pointer ${
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
                {(q.part === 3 || q.type === 'short_answer') && (
                  <div className="mt-3 pt-2 border-t border-slate-100 space-y-2">
                    {isTestMode && !isSubmitted ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-600">Nhập câu trả lời ngắn:</span>
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
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1 mt-3">
                    <div className="font-black text-amber-800 flex items-center gap-1">
                      💡 Hướng dẫn giải chi tiết:
                    </div>
                    <div
                      className="leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: q.explanation }}
                    />
                    {q.explanationImages && q.explanationImages.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {q.explanationImages.map((img: string, i: number) => (
                          <img key={i} src={img} alt="Hình giải thích" className="max-h-40 rounded-lg border border-amber-200 bg-white" />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-3 shrink-0 flex-wrap">
          <div className="text-xs font-medium text-slate-500">
            Tổng cộng: <strong className="text-slate-800">{questions.length} câu hỏi chuẩn Bộ GD&ĐT 2025</strong>
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
