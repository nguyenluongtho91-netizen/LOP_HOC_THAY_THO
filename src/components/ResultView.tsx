// @ts-nocheck
import React, { useState } from 'react';
import { Submission, Room, Exam, Question, QuestionOption } from '../types';
import MathText from './MathText';
import { formatScore } from '../services/scoringService';
import { formatQuestionTitle } from '../services/examNormalizer';

interface ResultViewProps {
  submission: Submission;
  room: Room;
  exam?: Exam;
  showAnswers?: boolean;
  onExit: () => void;
  onRetry?: () => void;
}

const escapeHtml = (s: string) =>
  (s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// ✅ Helper: lấy TF details theo cả number và string key
function getTFDetail(
  scoreBreakdown: any,
  qNumber: number
): { correctCount: number; points: number; answeredCount?: number; totalStatements?: number } | undefined {
  const details = scoreBreakdown?.trueFalse?.details;
  if (!details) return undefined;
  return details[qNumber] ?? details[String(qNumber)];
}

// ✅ Helper: lấy answer theo cả number và string key
function getAnswer(answers: Record<string, string> | undefined, qNumber: number): string | undefined {
  if (!answers) return undefined;
  return answers[qNumber] ?? answers[String(qNumber)];
}

const ResultView: React.FC<ResultViewProps> = ({
  submission,
  room,
  exam,
  onExit,
  onRetry
}) => {
  // ✅ FIX BUG 1+3: Supabase trả về score_breakdown (snake_case), phải fallback
  const scoreBreakdown = submission.scoreBreakdown || (submission as any).score_breakdown;
  const answers = submission.answers;

  // ✅ Cho phép xem đáp án và lời giải chi tiết theo yêu cầu của Thầy Thọ
  const canShowCorrectAnswers = room.settings?.showCorrectAnswers !== false;
  const canShowExplanations = room.settings?.showExplanations !== false;

  // ✅ State lọc 2 chế độ: 'all' (xem lại cả đề) hoặc 'wrong' (xem lại câu sai)
  const [filterMode, setFilterMode] = useState<'all' | 'wrong'>('all');

  // ✅ Kiểm tra câu hỏi đúng hay sai
  const isQuestionCorrect = (q: Question): boolean => {
    const userAnswer = getAnswer(answers, q.number);
    const correctAnswer = q.correctAnswer || '';

    if (q.type === 'true_false') {
      const detail = getTFDetail(scoreBreakdown, q.number);
      const totalStatements = detail?.totalStatements ?? (q.options?.length || 4);
      return (detail?.correctCount ?? 0) === totalStatements;
    } else if (q.type === 'short_answer') {
      const normalize = (s: string) => (s || '').toLowerCase().replace(/\s+/g, '').replace(/,/g, '.').trim();
      const u = normalize(userAnswer || '');
      const c = normalize(correctAnswer || '');
      const numU = Number(u);
      const numC = Number(c);
      if (!isNaN(numU) && u !== '' && !isNaN(numC) && c !== '') return numU === numC;
      return !!u && u === c;
    } else {
      // Multiple choice
      return !!userAnswer && userAnswer.trim().toUpperCase() === correctAnswer.trim().toUpperCase();
    }
  };

  const allQuestions = exam?.questions || [];
  const wrongQuestions = allQuestions.filter(q => !isQuestionCorrect(q));
  const displayedQuestions = filterMode === 'wrong' ? wrongQuestions : allQuestions;

  const scrollToReview = (mode?: 'all' | 'wrong') => {
    if (mode) setFilterMode(mode);
    setTimeout(() => {
      const el = document.getElementById('review-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} phút ${secs} giây`;
  };

  const formatDurationShort = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs}s`;
    if (secs === 0) return `${mins}m`;
    return `${mins}m ${secs}s`;
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', emoji: '🏆', label: 'Xuất sắc' };
    if (percentage >= 80) return { grade: 'A', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', emoji: '🌟', label: 'Giỏi' };
    if (percentage >= 70) return { grade: 'B+', color: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-200', emoji: '👍', label: 'Khá' };
    if (percentage >= 60) return { grade: 'B', color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200', emoji: '📚', label: 'Trung bình khá' };
    if (percentage >= 50) return { grade: 'C', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', emoji: '💪', label: 'Trung bình' };
    if (percentage >= 40) return { grade: 'D', color: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-200', emoji: '📖', label: 'Cần cố gắng' };
    return { grade: 'F', color: 'text-rose-700', bg: 'bg-rose-50', border: 'border-rose-200', emoji: '🌱', label: 'Cần cố gắng hơn' };
  };

  const gradeInfo = getGrade(submission.percentage);
  const maxScore = exam?.pointsConfig?.maxScore || 10;

  return (
    <div className="min-h-screen bg-slate-50/80">
      {submission.percentage >= 80 && (
        <style>{`
          @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
          }
          .confetti { position: fixed; top: -10px; animation: confetti 3s ease-in-out forwards; }
        `}</style>
      )}
      {submission.percentage >= 80 && (
        <>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="confetti text-2xl" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }}>
              {['🎉', '⭐', '🌟', '✨', '🎊'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </>
      )}

      {/* Header nhẹ nhàng */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white px-4 py-5 shadow-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Kết Quả Bài Thi</h1>
          <p className="text-teal-200/90 text-xs sm:text-sm mt-0.5 line-clamp-1">{room.examTitle}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-3.5 sm:p-6 pb-12">
        {/* 🚨 Cảnh báo nếu bài thi bị thu do vi phạm quá 3 lần */}
        {(submission.isViolationSubmit || submission.autoSubmittedReason?.includes('Chuyển tab') || submission.autoSubmittedReason?.includes('vi phạm') || (submission.tabSwitchCount && submission.tabSwitchCount > 3)) && (
          <div className="mb-5 p-4 sm:p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 shadow-xs flex items-start gap-3.5 animate-fadeIn">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center text-xl shrink-0 mt-0.5 shadow-sm">
              🚨
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-black text-rose-700 text-sm sm:text-base uppercase tracking-wide">
                  BÀI THI BỊ THU HỒI DO VI PHẠM QUY CHẾ THI
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black border border-rose-200">
                  {submission.tabSwitchCount || 4} lần vi phạm
                </span>
              </div>
              <p className="text-xs sm:text-sm text-rose-900 font-semibold mt-1 leading-relaxed">
                <strong>Lý do thu bài:</strong> {submission.autoSubmittedReason || `Rời khỏi phòng thi / chuyển tab quá 3 lần (${submission.tabSwitchCount || 4} lần vi phạm)`}.
              </p>
              <p className="text-[11px] text-rose-700 mt-1 italic">
                Hệ thống đã tự động khóa bài thi và chỉ chấm điểm những câu em đã tích chọn trước thời điểm vi phạm.
              </p>
            </div>
          </div>
        )}

        {/* Card Kết quả trung tâm - Tối giản & Chuyên nghiệp */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200/70 p-4 sm:p-7 mb-6 relative overflow-hidden">
          
          {/* Header học sinh & phòng thi gọn gàng */}
          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 text-xs text-gray-500">
            <div className="flex items-center gap-1.5 truncate">
              <span className="font-semibold text-gray-800 truncate">
                {submission.student?.name || 'Học sinh'}
              </span>
              {submission.student?.className && (
                <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-medium text-[11px] shrink-0">
                  {submission.student.className}
                </span>
              )}
            </div>
            {submission.roomCode && (
              <span className="font-mono text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded text-[11px] shrink-0 border border-teal-100/60">
                Mã: {submission.roomCode}
              </span>
            )}
          </div>

          {/* Điểm số trung tâm tối giản */}
          <div className="text-center py-1 sm:py-3 mb-4">
            <div className="inline-flex items-baseline justify-center gap-1">
              <span className="text-5xl sm:text-6xl font-black tracking-tight text-teal-600">
                {formatScore(submission.totalScore)}
              </span>
              <span className="text-xl sm:text-2xl font-semibold text-gray-300">/{maxScore}</span>
            </div>
            
            {/* Tag xếp loại & tỉ lệ */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${gradeInfo.bg} ${gradeInfo.color} border ${gradeInfo.border}`}>
                <span>{gradeInfo.emoji}</span>
                <span>{gradeInfo.label}</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                {submission.percentage}%
              </span>
            </div>
          </div>

          {/* Hàng 3 chỉ số thống kê - Bấm vào xem ngay danh sách câu */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
            <button 
              type="button"
              onClick={() => scrollToReview('all')}
              className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2.5 sm:p-3 text-center hover:bg-emerald-100/70 active:scale-95 transition cursor-pointer"
              title="Bấm để xem danh sách toàn bộ câu hỏi"
            >
              <div className="text-xl sm:text-2xl font-black text-emerald-600 leading-none mb-1">
                {submission.correctCount}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-emerald-700">Câu đúng</div>
            </button>
            <button 
              type="button"
              onClick={() => scrollToReview('wrong')}
              className="bg-rose-50/60 border border-rose-100 rounded-xl p-2.5 sm:p-3 text-center hover:bg-rose-100/70 active:scale-95 transition cursor-pointer"
              title="Bấm để lọc và xem ngay các câu làm sai"
            >
              <div className="text-xl sm:text-2xl font-black text-rose-500 leading-none mb-1">
                {wrongQuestions.length}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-rose-600">Câu sai</div>
            </button>
            <div className="bg-sky-50/60 border border-sky-100 rounded-xl p-2.5 sm:p-3 text-center">
              <div className="text-xl sm:text-2xl font-black text-sky-600 leading-none mb-1">
                {formatDurationShort(submission.duration || 0)}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-sky-700">Thời gian</div>
            </div>
          </div>

          {/* Chi tiết theo phần (nếu có) - Gọn nhẹ, tinh tế */}
          {scoreBreakdown && (scoreBreakdown.multipleChoice?.total > 0 || scoreBreakdown.trueFalse?.total > 0 || scoreBreakdown.shortAnswer?.total > 0) && (
            <div className="mb-5 bg-gray-50/80 rounded-xl p-3 border border-gray-100">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Điểm chi tiết từng phần
              </div>
              <div className="space-y-1.5">
                {scoreBreakdown.multipleChoice?.total > 0 && (
                  <div className="flex items-center justify-between py-1.5 px-2.5 bg-white rounded-lg border border-gray-100 text-xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                      <span className="font-semibold text-gray-800">Trắc nghiệm</span>
                      <span className="text-gray-400 text-[11px]">({scoreBreakdown.multipleChoice.correct}/{scoreBreakdown.multipleChoice.total} câu)</span>
                    </div>
                    <span className="font-bold text-blue-600 shrink-0 ml-2">
                      {formatScore(scoreBreakdown.multipleChoice.points)}đ
                    </span>
                  </div>
                )}
                {scoreBreakdown.trueFalse?.total > 0 && (
                  <div className="flex items-center justify-between py-1.5 px-2.5 bg-white rounded-lg border border-gray-100 text-xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                      <span className="font-semibold text-gray-800">Đúng / Sai</span>
                      <span className="text-gray-400 text-[11px]">({scoreBreakdown.trueFalse.correct}/{scoreBreakdown.trueFalse.total} câu)</span>
                    </div>
                    <span className="font-bold text-teal-600 shrink-0 ml-2">
                      {formatScore(scoreBreakdown.trueFalse.points)}đ
                    </span>
                  </div>
                )}
                {scoreBreakdown.shortAnswer?.total > 0 && (
                  <div className="flex items-center justify-between py-1.5 px-2.5 bg-white rounded-lg border border-gray-100 text-xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span className="font-semibold text-gray-800">Tự luận / Ngắn</span>
                      <span className="text-gray-400 text-[11px]">({scoreBreakdown.shortAnswer.correct}/{scoreBreakdown.shortAnswer.total} câu)</span>
                    </div>
                    <span className="font-bold text-amber-600 shrink-0 ml-2">
                      {formatScore(scoreBreakdown.shortAnswer.points)}đ
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2 Nút điều hướng - Gọn gàng, chuẩn tỉ lệ, không bị rớt dòng */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button 
              onClick={onExit} 
              className="py-2.5 px-3 rounded-xl font-bold text-teal-700 bg-teal-50/80 hover:bg-teal-100 border border-teal-200 transition text-xs sm:text-sm flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap"
            >
              <span>←</span>
              <span>Trang chủ</span>
            </button>
            {onRetry && (
              <button 
                onClick={onRetry} 
                className="py-2.5 px-3 rounded-xl font-bold text-white transition text-xs sm:text-sm flex items-center justify-center gap-1.5 active:scale-95 shadow-sm hover:shadow whitespace-nowrap bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800" 
              >
                <span>🔄</span>
                <span>Làm lại đề</span>
              </button>
            )}
          </div>

          {/* 🔘 HAI CHẾ ĐỘ XEM: XEM LẠI CÂU SAI & XEM LẠI CẢ ĐỀ */}
          {allQuestions.length > 0 && (
            <div className="mt-4 pt-3.5 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  Chế độ xem lại bài:
                </span>
                <span className="text-[11px] font-semibold text-teal-700">
                  {filterMode === 'wrong' ? `Đang lọc: ${wrongQuestions.length} câu sai` : `Xem toàn bộ đề`}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100/90 rounded-xl">
                <button
                  type="button"
                  onClick={() => scrollToReview('all')}
                  className={`py-2 px-2.5 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 ${
                    filterMode === 'all'
                      ? 'bg-white text-teal-900 shadow-xs border border-gray-200/60'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>📋 Xem cả đề</span>
                  <span className="text-[11px] font-semibold opacity-75">({allQuestions.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToReview('wrong')}
                  className={`py-2 px-2.5 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 ${
                    filterMode === 'wrong'
                      ? 'bg-rose-500 text-white shadow-xs'
                      : 'text-rose-700 hover:bg-rose-50'
                  }`}
                >
                  <span>❌ Xem câu sai</span>
                  <span className="text-[11px] font-semibold opacity-90">({wrongQuestions.length})</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ✅ FIX: Link xem lại đề thi PDF */}
        {(submission as any).examPdfUrl && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
            <span className="text-2xl">📄</span>
            <div>
              <p className="font-bold text-blue-800 mb-1">Xem lại đề thi</p>
              <a href={(submission as any).examPdfUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
                📎 Mở đề thi ↗
              </a>
            </div>
          </div>
        )}

        {/* Xem lại bài làm */}
        {exam && (
          <div id="review-section" className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200/80 overflow-hidden">
            {/* Header Xem lại bài làm tích hợp 2 chế độ lọc */}
            <div className="p-3.5 sm:p-4 text-white font-bold flex flex-wrap items-center justify-between gap-2.5" style={{ background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)' }}>
              <div className="flex items-center gap-2">
                <span className="text-lg">📋</span>
                <span className="text-sm sm:text-base">Xem lại bài làm</span>
                <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded-full">
                  {displayedQuestions.length}/{allQuestions.length} câu
                </span>
              </div>

              {/* Toggle 2 chế độ: Xem toàn bộ đề / Chỉ câu sai */}
              <div className="flex items-center gap-1 bg-teal-900/40 p-1 rounded-xl text-xs">
                <button
                  type="button"
                  onClick={() => setFilterMode('all')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 ${
                    filterMode === 'all'
                      ? 'bg-white text-teal-900 shadow-xs'
                      : 'text-teal-100 hover:text-white'
                  }`}
                >
                  <span>📋 Cả đề</span>
                  <span>({allQuestions.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFilterMode('wrong')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 ${
                    filterMode === 'wrong'
                      ? 'bg-rose-500 text-white shadow-xs'
                      : 'text-teal-100 hover:text-white'
                  }`}
                >
                  <span>❌ Câu sai</span>
                  <span>({wrongQuestions.length})</span>
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {(!canShowCorrectAnswers || !canShowExplanations) && (
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">ℹ️</span>
                    <div>
                      <p className="font-semibold text-yellow-800 text-sm">Thông báo:</p>
                      <ul className="text-sm text-yellow-700 mt-1 list-disc list-inside">
                        {!canShowCorrectAnswers && <li>Không được phép xem đáp án đúng</li>}
                        {!canShowExplanations && <li>Không được phép xem lời giải chi tiết</li>}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Thông báo nếu chế độ lọc câu sai mà không có câu nào sai */}
              {filterMode === 'wrong' && displayedQuestions.length === 0 && (
                <div className="p-8 text-center bg-emerald-50/40">
                  <div className="text-4xl mb-2">🎉</div>
                  <h4 className="font-bold text-emerald-800 text-base mb-1">Tuyệt vời! Bạn không làm sai câu nào</h4>
                  <p className="text-emerald-700 text-xs sm:text-sm mb-4">Bạn đã trả lời chính xác tất cả câu hỏi trong bài thi.</p>
                  <button
                    type="button"
                    onClick={() => setFilterMode('all')}
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
                  >
                    Xem lại toàn bộ đề thi
                  </button>
                </div>
              )}

              {displayedQuestions.map((q: Question) => {
                // ✅ FIX: robust answer lookup với cả number và string key
                const userAnswer = getAnswer(answers, q.number);
                const correctAnswer = q.correctAnswer || '';

                if (q.type === 'true_false') {
                  // ✅ FIX: truyền đúng breakdown với string key fallback
                  const detail = getTFDetail(scoreBreakdown, q.number);
                  return (
                    <TrueFalseReview
                      key={q.number}
                      question={q}
                      userAnswer={userAnswer}
                      correctAnswer={correctAnswer}
                      showCorrectAnswers={canShowCorrectAnswers}
                      showExplanations={canShowExplanations}
                      breakdown={detail}
                    />
                  );
                } else if (q.type === 'short_answer') {
                  return (
                    <ShortAnswerReview
                      key={q.number}
                      question={q}
                      userAnswer={userAnswer}
                      correctAnswer={correctAnswer}
                      showCorrectAnswers={canShowCorrectAnswers}
                      showExplanations={canShowExplanations}
                    />
                  );
                } else {
                  return (
                    <MultipleChoiceReview
                      key={q.number}
                      question={q}
                      userAnswer={userAnswer}
                      correctAnswer={correctAnswer}
                      showCorrectAnswers={canShowCorrectAnswers}
                      showExplanations={canShowExplanations}
                    />
                  );
                }
              })}
            </div>
          </div>
        )}

        {/* Action card ở cuối trang sau khi học sinh xem xong toàn bộ bài */}
        <div className="mt-8 bg-white rounded-3xl shadow-lg border border-teal-100 p-6 text-center">
          <p className="text-gray-700 font-semibold mb-4 text-base">
            🎉 Bạn đã xem hết kết quả & lời giải chi tiết của đề thi!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
            {onRetry && (
              <button 
                onClick={onRetry} 
                className="w-full sm:flex-1 px-6 py-3 rounded-2xl font-bold text-white transition text-center shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base" 
                style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' }}
              >
                <span>🔄</span>
                <span>Bắt đầu thi lại (Đảo câu)</span>
              </button>
            )}
            <button 
              onClick={onExit} 
              className="w-full sm:flex-1 px-6 py-3 rounded-2xl font-bold text-teal-700 bg-teal-50 border-2 border-teal-300 hover:bg-teal-100 active:scale-95 transition text-center flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>🏠</span>
              <span>Về màn hình chính</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== Review: Multiple choice =====
const MultipleChoiceReview: React.FC<{
  question: Question;
  userAnswer?: string;
  correctAnswer: string;
  showCorrectAnswers: boolean;
  showExplanations: boolean;
}> = ({ question, userAnswer, correctAnswer, showCorrectAnswers, showExplanations }) => {
  const isCorrect = !!userAnswer && userAnswer.toUpperCase() === correctAnswer?.toUpperCase();
  const isUnanswered = !userAnswer;
  const displayOptions = question.options || [];

  const statusColor = isUnanswered 
    ? 'bg-gray-50' 
    : isCorrect 
      ? 'bg-emerald-50 border-l-4 border-emerald-400' 
      : 'bg-red-50 border-l-4 border-red-400';

  return (
    <div className={`p-5 ${statusColor}`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0 ${
          isUnanswered ? 'bg-slate-400' : isCorrect ? 'bg-emerald-500' : 'bg-red-500'
        }`} title={isUnanswered ? 'Chưa trả lời' : isCorrect ? 'Đúng' : 'Sai'}>
          {isUnanswered ? '—' : isCorrect ? '✓' : '✕'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-gray-800 mb-3 text-[15px] leading-relaxed">
            <MathText html={formatQuestionTitle(question.text || '', question.number)} block />
          </div>

          {question.images?.length > 0 && (
            <div className="my-2 flex flex-wrap gap-2">
              {question.images.map((img: any, idx: number) => (
                <img key={idx} src={img.base64 ? `data:${img.contentType || 'image/png'};base64,${img.base64}` : ''} alt={`Hình ${idx + 1}`} className="max-h-32 rounded border block" />
              ))}
            </div>
          )}

          {displayOptions.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {displayOptions.map((opt: QuestionOption, idx: number) => {
                const optLetter = (opt.letter || (opt as any).id || String.fromCharCode(65 + idx)).toUpperCase();
                const isUserAnswer = userAnswer?.toUpperCase() === optLetter;
                const isCorrectOpt = correctAnswer?.toUpperCase() === optLetter;

                let optClass = 'bg-white border-gray-200 text-gray-700';
                if (isUserAnswer) {
                  optClass = isCorrect ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold' : 'bg-red-50 border-red-400 text-red-800';
                }
                if (showCorrectAnswers && isCorrectOpt && !isUserAnswer) {
                  optClass = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold';
                }

                return (
                  <div key={optLetter || idx} className={`flex items-center gap-2 p-2.5 rounded-xl border-2 text-sm ${optClass}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      isUserAnswer
                        ? isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                        : showCorrectAnswers && isCorrectOpt ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {optLetter}
                    </span>
                    <span className="flex-1"><MathText html={opt.text || ''} /></span>
                    {isUserAnswer && isCorrect && <span className="text-emerald-600 font-bold">✔</span>}
                    {isUserAnswer && !isCorrect && <span className="text-red-500 font-bold">✖</span>}
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${isUnanswered ? 'bg-gray-100 text-gray-500' : 'bg-blue-100 text-blue-700'}`}>
              Bạn chọn: {userAnswer || '(Chưa chọn)'}
            </span>
            {!isUnanswered && (
              <span className={`px-3 py-1 rounded-lg text-sm font-bold ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                {isCorrect ? '✅ Chính xác!' : `❌ Không chính xác`}
              </span>
            )}
            {showCorrectAnswers && !isCorrect && !isUnanswered && (
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-lg text-sm font-bold">
                Đáp án đúng: {correctAnswer}
              </span>
            )}
          </div>

          {showExplanations && (question.solution || question.explanation || (question as any).loigiai) && (
            <div className="mt-3 p-3.5 bg-blue-50/90 border border-blue-200 rounded-xl">
              <span className="text-blue-800 font-bold text-sm flex items-center gap-1.5 mb-1">
                💡 Lời giải & Đáp án chi tiết:
              </span>
              <div className="text-sm text-gray-800 leading-relaxed font-normal">
                <MathText html={question.solution || question.explanation || (question as any).loigiai} block />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ===== Review: True/False =====
const TrueFalseReview: React.FC<{
  question: Question;
  userAnswer?: string;
  correctAnswer: string;
  showCorrectAnswers: boolean;
  showExplanations: boolean;
  breakdown?: { correctCount: number; points: number; answeredCount?: number; totalStatements?: number };
}> = ({ question, userAnswer, correctAnswer, showCorrectAnswers, showExplanations, breakdown }) => {

  // ✅ FIX: Parse đáp án học sinh – hỗ trợ JSON {"a":true,"b":false} VÀ format cũ "a:T,b:F"
  let userAnswers: Record<string, string> = {};
  if (userAnswer) {
    if (userAnswer.startsWith('{')) {
      try {
        const parsed = JSON.parse(userAnswer);
        // ✅ FIX: map cả false → 'F', không bỏ qua
        Object.keys(parsed).forEach(k => {
          userAnswers[k.toLowerCase()] = parsed[k] ? 'T' : 'F';
        });
      } catch { /* ignore */ }
    } else if (userAnswer.includes(':')) {
      userAnswer.split(',').forEach(p => {
        const [l, v] = p.split(':');
        if (l && v) userAnswers[l.trim().toLowerCase()] = v.trim();
      });
    } else {
      userAnswer.split(',').forEach(s => {
        const l = s.trim().toLowerCase();
        if (l) userAnswers[l] = 'T';
      });
    }
  }

  // ✅ FIX: Parse correctAnswer – hỗ trợ JSON {"a":true,"b":false} VÀ "a,c" (comma-separated)
  let correctMap: Record<string, boolean> = {};
  try {
    const parsedCA = JSON.parse(correctAnswer || '{}');
    Object.keys(parsedCA).forEach(k => { correctMap[k.toLowerCase()] = !!parsedCA[k]; });
  } catch {
    correctAnswer.toLowerCase().split(',').map(s => s.trim()).filter(Boolean)
      .forEach(l => { correctMap[l] = true; });
  }

  // ✅ FIX: Khi options rỗng (PDF exam tạo bởi PDFExamCreator), tạo options tổng hợp a/b/c/d
  const displayOptions = (question.options && question.options.length > 0)
    ? question.options
    : ['a', 'b', 'c', 'd'].map(l => ({ letter: l, text: l.toUpperCase() }));

  // Dùng breakdown từ scoringService (đã được tính sẵn)
  const correctCount = breakdown?.correctCount ?? 0;
  const earnedPoints = breakdown?.points ?? 0;
  const totalStatements = breakdown?.totalStatements ?? (displayOptions.length ?? 4);

  const allCorrect = correctCount === totalStatements;
  const partialCorrect = correctCount > 0 && !allCorrect;

  const statusBg = allCorrect 
    ? 'bg-emerald-50 border-l-4 border-emerald-400'
    : partialCorrect 
      ? 'bg-yellow-50 border-l-4 border-yellow-400'
      : 'bg-red-50 border-l-4 border-red-400';

  return (
    <div className={`p-5 ${statusBg}`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0 ${
          allCorrect ? 'bg-emerald-500' : partialCorrect ? 'bg-yellow-500' : 'bg-red-500'
        }`} title={allCorrect ? 'Đúng hoàn toàn' : partialCorrect ? 'Đúng một phần' : 'Sai'}>
          {allCorrect ? '✓' : partialCorrect ? '½' : '✕'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-gray-800 mb-2 text-[15px] leading-relaxed">
            <MathText html={formatQuestionTitle(question.text || '', question.number)} block />
          </div>

          {/* Badge điểm đúng sai */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-lg text-xs font-bold">
              ✅ Đúng / Sai
            </span>
            {showCorrectAnswers && (
              <>
                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                  earnedPoints > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'
                }`}>
                  +{formatScore(earnedPoints)}đ
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
                  {correctCount}/{totalStatements} ý đúng
                </span>
              </>
            )}
          </div>

          {question.images?.length > 0 && (
            <div className="my-2 flex flex-wrap gap-2">
              {question.images.map((img: any, idx: number) => (
                <img key={idx} src={img.base64 ? `data:${img.contentType || 'image/png'};base64,${img.base64}` : ''} alt={`Hình ${idx + 1}`} className="max-h-32 rounded border block" />
              ))}
            </div>
          )}

          {/* ✅ Bảng đúng/sai – dùng displayOptions, correctMap, userAnswers đã fix */}
          {displayOptions.length > 0 && (
            <div className="rounded-xl border-2 border-teal-200 overflow-hidden shadow-sm">
              <div className="grid bg-teal-600 text-white text-xs font-bold"
                   style={{ gridTemplateColumns: showCorrectAnswers ? '1fr 60px 60px 60px' : '1fr 60px 60px' }}>
                <div className="px-4 py-2.5">Mệnh đề</div>
                <div className="py-2.5 text-center">Bạn chọn</div>
                {showCorrectAnswers && <div className="py-2.5 text-center bg-teal-700">Đáp án</div>}
                <div className="py-2.5 text-center bg-teal-800">Kết quả</div>
              </div>
              <div className="divide-y divide-teal-100">
                {displayOptions.map((opt: QuestionOption, idx: number) => {
                  const letter = (opt.letter || (opt as any).id || String.fromCharCode(97 + idx)).toLowerCase();
                  const key = letter;
                  const shouldBeTrue = correctMap[key] ?? false;
                  const userVal = userAnswers[key];
                  const isCorrectStatement = userVal 
                    ? ((userVal === 'T' && shouldBeTrue) || (userVal === 'F' && !shouldBeTrue))
                    : null;

                  return (
                    <div key={letter || idx} className="grid items-center text-sm"
                         style={{ 
                           gridTemplateColumns: showCorrectAnswers ? '1fr 60px 60px 60px' : '1fr 60px 60px',
                           backgroundColor: isCorrectStatement !== null ? (isCorrectStatement ? '#f0fdf4' : '#fef2f2') : '#ffffff'
                         }}>
                      <div className="px-4 py-3 flex gap-2 items-start">
                        <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-black flex-shrink-0">
                          {letter}
                        </span>
                        <div className="flex-1"><MathText html={opt.text || letter} /></div>
                      </div>
                      <div className="text-center py-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          userVal === 'T' ? 'bg-blue-100 text-blue-700'
                          : userVal === 'F' ? 'bg-orange-100 text-orange-700'
                          : 'bg-gray-100 text-gray-400'
                        }`}>
                          {userVal === 'T' ? 'Đ' : userVal === 'F' ? 'S' : '—'}
                        </span>
                      </div>
                      {showCorrectAnswers && (
                        <div className="text-center py-3 bg-teal-50/30">
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${shouldBeTrue ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>
                            {shouldBeTrue ? 'Đ' : 'S'}
                          </span>
                        </div>
                      )}
                      <div className="text-center py-3 bg-teal-50/10">
                        {isCorrectStatement !== null
                          ? isCorrectStatement
                            ? <span className="text-emerald-600 font-bold text-base">✔</span>
                            : <span className="text-red-500 font-bold text-base">✖</span>
                          : <span className="text-gray-400">—</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {showExplanations && (question.solution || question.explanation || (question as any).loigiai) && (
            <div className="mt-3 p-3.5 bg-blue-50/90 border border-blue-200 rounded-xl">
              <span className="text-blue-800 font-bold text-sm flex items-center gap-1.5 mb-1">
                💡 Lời giải & Đáp án chi tiết:
              </span>
              <div className="text-sm text-gray-800 leading-relaxed font-normal">
                <MathText html={question.solution || question.explanation || (question as any).loigiai} block />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ===== Review: Short answer =====
const ShortAnswerReview: React.FC<{
  question: Question;
  userAnswer?: string;
  correctAnswer: string;
  showCorrectAnswers: boolean;
  showExplanations: boolean;
}> = ({ question, userAnswer, correctAnswer, showCorrectAnswers, showExplanations }) => {
  const normalizeAnswer = (answer: string): string => {
    let norm = (answer || '').toLowerCase().replace(/\s+/g, '').replace(/,/g, '.').trim();
    const numValue = Number(norm);
    if (!isNaN(numValue) && norm !== '') return numValue.toString();
    return norm;
  };

  const isCorrect = normalizeAnswer(userAnswer || '') === normalizeAnswer(correctAnswer);
  const isUnanswered = !userAnswer;
  const safeUser = escapeHtml(userAnswer || '');
  const safeCorrect = escapeHtml(correctAnswer || '');

  const statusBg = isUnanswered 
    ? 'bg-gray-50' 
    : isCorrect 
      ? 'bg-emerald-50 border-l-4 border-emerald-400' 
      : 'bg-red-50 border-l-4 border-red-400';

  return (
    <div className={`p-5 ${statusBg}`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0 ${
          isUnanswered ? 'bg-slate-400' : isCorrect ? 'bg-emerald-500' : 'bg-red-500'
        }`} title={isUnanswered ? 'Chưa trả lời' : isCorrect ? 'Đúng' : 'Sai'}>
          {isUnanswered ? '—' : isCorrect ? '✓' : '✕'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-gray-800 mb-2 text-[15px] leading-relaxed">
            <MathText html={formatQuestionTitle(question.text || '', question.number)} block />
            <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">TLN</span>
          </div>

          {question.images?.length > 0 && (
            <div className="my-2 flex flex-wrap gap-2">
              {question.images.map((img: any, idx: number) => (
                <img key={idx} src={img.base64 ? `data:${img.contentType || 'image/png'};base64,${img.base64}` : ''} alt={`Hình ${idx + 1}`} className="max-h-32 rounded border block" />
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className={`p-3 rounded-xl border-2 ${isUnanswered ? 'bg-gray-50 border-gray-200' : isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
              <div className="text-xs font-bold uppercase mb-1 text-gray-500">Bạn trả lời:</div>
              <div className="font-bold text-gray-800">
                {userAnswer ? <MathText html={safeUser} /> : <span className="text-gray-400 italic font-normal">Bỏ trống</span>}
              </div>
              <div className="mt-1">
                {isUnanswered 
                  ? <span className="text-gray-400 italic font-normal">Bỏ trống</span> 
                  : isCorrect 
                    ? <span className="text-emerald-600 font-bold text-sm">✅ Chính xác</span> 
                    : <span className="text-red-500 font-bold text-sm">❌ Không chính xác</span>}
              </div>
            </div>

            {showCorrectAnswers && !isCorrect && !isUnanswered && (
              <div className="p-3 rounded-xl bg-emerald-50 border-2 border-emerald-200">
                <div className="text-xs font-bold uppercase mb-1 text-emerald-600">Đáp án đúng:</div>
                <div className="font-bold text-emerald-800"><MathText html={safeCorrect} /></div>
              </div>
            )}
          </div>

          {showExplanations && (question.solution || question.explanation || (question as any).loigiai) && (
            <div className="mt-3 p-3.5 bg-blue-50/90 border border-blue-200 rounded-xl">
              <span className="text-blue-800 font-bold text-sm flex items-center gap-1.5 mb-1">
                💡 Lời giải & Đáp án chi tiết:
              </span>
              <div className="text-sm text-gray-800 leading-relaxed font-normal">
                <MathText html={question.solution || question.explanation || (question as any).loigiai} block />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultView;
