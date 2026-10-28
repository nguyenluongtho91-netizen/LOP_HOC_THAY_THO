// @ts-nocheck
import React, { useState } from 'react';
import { X, CheckCircle2, Lock, Unlock, Eye, BookOpen, Clock, Award, ShieldCheck, Printer } from 'lucide-react';
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
  const isLocked = Boolean(accessConfig?.exams?.[exam.id]);

  const questions = exam.questions || [];
  const part1Questions = questions.filter(q => q.part === 1 || q.type === 'multiple_choice');
  const part2Questions = questions.filter(q => q.part === 2 || q.type === 'true_false');
  const part3Questions = questions.filter(q => q.part === 3 || q.type === 'short_answer');

  const displayedQuestions = activePartTab === 'all'
    ? questions
    : questions.filter(q => q.part === activePartTab || (activePartTab === 1 && q.type === 'multiple_choice') || (activePartTab === 2 && q.type === 'true_false') || (activePartTab === 3 && q.type === 'short_answer'));

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

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in font-sans">
      <div className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                MÃ ĐỀ: {exam.code}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-slate-300">
                {exam.grade ? `Hóa ${exam.grade}` : 'THPT'} • {exam.chapter || exam.topic || 'Đề Chuẩn GDPT 2018'}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black ${
                isLocked ? 'bg-rose-500/80 text-white' : 'bg-emerald-400 text-slate-950'
              }`}>
                {isLocked ? '🔒 ĐÃ KHÓA VỚI HỌC SINH' : '🟢 ĐANG MỞ CHO HỌC SINH'}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white leading-snug">
              {exam.title}
            </h2>
            <p className="text-xs text-indigo-200/80 font-medium mt-0.5">
              👑 Chế độ Quản Trị Viên: Thầy được xem toàn bộ 28 câu hỏi, đáp án và lời giải chi tiết.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleToggle}
              className={`px-3.5 py-2 rounded-xl text-xs font-black border transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                isLocked
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-400'
                  : 'bg-rose-500 hover:bg-rose-600 text-white border-rose-400'
              }`}
            >
              {isLocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              <span>{isLocked ? 'Mở cho HS' : 'Khóa với HS'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Part Tabs */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2 flex-wrap shrink-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setActivePartTab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Tất cả 28 câu
            </button>
            <button
              onClick={() => setActivePartTab(1)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 1
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Phần I: 18 Câu TN ({part1Questions.length})
            </button>
            <button
              onClick={() => setActivePartTab(2)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 2
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Phần II: 4 Câu Đúng/Sai ({part2Questions.length})
            </button>
            <button
              onClick={() => setActivePartTab(3)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activePartTab === 3
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Phần III: 6 Câu Ngắn ({part3Questions.length})
            </button>
          </div>

          <div className="text-xs font-bold text-slate-500">
            Hiển thị {displayedQuestions.length} câu
          </div>
        </div>

        {/* Question List Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
          {displayedQuestions.map((q, qIndex) => {
            return (
              <div
                key={q.id || qIndex}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 font-black text-xs flex items-center justify-center">
                      {q.number || qIndex + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {q.type === 'multiple_choice' ? 'Trắc nghiệm 4 chọn' : q.type === 'true_false' ? 'Trắc nghiệm Đúng / Sai' : 'Trả lời ngắn'}
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

                {/* Images if any */}
                {q.images && q.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 my-2">
                    {q.images.map((img: string, i: number) => (
                      <img
                        key={i}
                        src={img}
                        alt="Hình câu hỏi"
                        className="max-h-48 rounded-xl border border-slate-200 shadow-2xs"
                      />
                    ))}
                  </div>
                )}

                {/* Options / Statements */}
                {q.options && q.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-2 border-t border-slate-100">
                    {q.options.map((opt: any) => {
                      const isCorrect = Boolean(opt.isCorrect || opt.correct || opt.letter === q.correctAnswer);

                      return (
                        <div
                          key={opt.id || opt.letter}
                          className={`p-3 rounded-xl border transition-all flex items-start gap-2.5 ${
                            isCorrect
                              ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                            isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {opt.letter}
                          </span>
                          <div
                            className="text-xs sm:text-sm leading-snug flex-1"
                            dangerouslySetInnerHTML={{ __html: opt.text }}
                          />
                          {isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Short Answer */}
                {q.type === 'short_answer' && (
                  <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center gap-2">
                    <span className="text-xs font-bold text-indigo-700">Đáp án chính xác:</span>
                    <strong className="text-sm font-black text-indigo-900">{String(q.correctAnswer)}</strong>
                  </div>
                )}

                {/* Explanation */}
                {q.explanation && (
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                    <div className="font-black text-amber-800 flex items-center gap-1">
                      💡 Hướng dẫn giải chi tiết:
                    </div>
                    <div
                      className="leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: q.explanation }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-medium text-slate-500">
            Tổng cộng: <strong className="text-slate-800">28 câu hỏi chuẩn Bộ GD&ĐT 2025</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              Đóng lại
            </button>
            {onEnterExam && (
              <button
                type="button"
                onClick={() => onEnterExam(exam.id)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              >
                Vào Phòng Thi Làm Thử (50 phút)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
