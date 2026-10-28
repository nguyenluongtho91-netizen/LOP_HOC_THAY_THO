import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Flame,
  Zap,
  Heart,
  Sparkles,
  ArrowRight,
  RotateCcw,
  BookOpen,
  X,
  CheckCircle2
} from 'lucide-react';

export interface MotivationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  setName: string;
  correctCount: number;
  totalQuestions: number;
  score: number; // 0.0 - 10.0
  timeSpent?: string;
  hasNextSet?: boolean;
  onNextSet?: () => void;
  onRetry?: () => void;
  onReviewSolutions?: () => void;
  onOpenHandbook?: () => void;
}

export const MotivationModal: React.FC<MotivationModalProps> = ({
  isOpen,
  onClose,
  setName,
  correctCount,
  totalQuestions,
  score,
  timeSpent,
  hasNextSet,
  onNextSet,
  onRetry,
  onReviewSolutions,
  onOpenHandbook,
}) => {
  useEffect(() => {
    if (isOpen && score >= 8.5) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#10B981', '#6366F1', '#EC4899', '#3B82F6'],
        });
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#F59E0B', '#10B981', '#38BDF8'],
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#F59E0B', '#10B981', '#38BDF8'],
          });
        }, 300);
      } catch (err) {
        console.error('Confetti error:', err);
      }
    }
  }, [isOpen, score]);

  if (!isOpen) return null;

  let tier: 'legend' | 'warrior' | 'resilient' | 'encouraging' = 'legend';
  if (score >= 9.0) {
    tier = 'legend';
  } else if (score >= 7.0) {
    tier = 'warrior';
  } else if (score >= 5.0) {
    tier = 'resilient';
  } else {
    tier = 'encouraging';
  }

  const tierConfig = {
    legend: {
      badgeText: '🏆 HUYỀN THOẠI HÓA HỌC · ĐỈNH CAO XUẤT SẮC!',
      badgeClass: 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black shadow-amber-500/20',
      headerBg: 'from-amber-600 via-orange-600 to-amber-700',
      icon: <Trophy className="w-12 h-12 text-yellow-300 animate-bounce" />,
      quote:
        '“Thầy rất tự hào về em! Tư duy hóa học và sự tập trung của em thật sự đỉnh cao. Điểm số xuất sắc này hoàn toàn xứng đáng với nỗ lực bền bỉ của em. Cánh cửa thử thách tiếp theo đã mở rộng chào đón em!”',
      highlightWord: 'Xuất sắc tuyệt đối',
      borderColor: 'border-amber-400/50',
    },
    warrior: {
      badgeText: '🥈 CHIẾN BINH BỨT PHÁ · KẾT QUẢ RẤT ẤN TƯỢNG!',
      badgeClass: 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-black shadow-sky-500/20',
      headerBg: 'from-blue-600 via-indigo-600 to-cyan-700',
      icon: <Flame className="w-12 h-12 text-cyan-300 animate-pulse" />,
      quote:
        '“Làm rất tốt em ơi! Em đã nắm rất vững nền tảng kiến thức trọng tâm. Chỉ cần chú ý xem lại 1–2 bẫy nhỏ ở phần giải thích bên dưới là điểm 10 chắc chắn nằm trong tầm tay. Bộ tiếp theo đã sẵn sàng cho em chinh phục!”',
      highlightWord: 'Vững vàng bứt phá',
      borderColor: 'border-sky-400/50',
    },
    resilient: {
      badgeText: '💪 NỖ LỰC KIÊN CƯỜNG · ĐANG TIẾN BỘ TỪNG NGÀY!',
      badgeClass: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black shadow-teal-500/20',
      headerBg: 'from-emerald-700 via-teal-700 to-emerald-800',
      icon: <Zap className="w-12 h-12 text-emerald-300 animate-pulse" />,
      quote:
        '“Đừng nản lòng nhé! Sai sót hôm nay chính là kinh nghiệm quý báu cho kỳ thi thật ngày mai. Thầy đã chuẩn bị sẵn lời giải chi tiết cho từng câu bên dưới, em hãy đọc kỹ rồi có thể làm lại để nâng cao điểm số nhé!”',
      highlightWord: 'Tiếp tục kiên trì',
      borderColor: 'border-emerald-400/50',
    },
    encouraging: {
      badgeText: '💖 VẠN SỰ KHỞI ĐẦU NAN · THẦY LUÔN ĐỒNG HÀNH!',
      badgeClass: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black shadow-rose-500/20',
      headerBg: 'from-rose-600 via-pink-700 to-purple-800',
      icon: <Heart className="w-12 h-12 text-rose-300 animate-pulse" />,
      quote:
        '“Hóa học như một người bạn, cần thời gian để tích lũy và thấu hiểu. Em đừng lo lắng hay nản chí nhé! Hãy mở cẩm nang lý thuyết của Thầy ôn lại một chút, xem đáp án giải thích từng bước. Thầy tin lần thử sức tiếp theo em sẽ tiến bộ vượt bậc!”',
      highlightWord: 'Không bao giờ từ bỏ',
      borderColor: 'border-rose-400/50',
    },
  }[tier];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border-2 ${tierConfig.borderColor} transition-all transform scale-100 animate-scale-up`}>
        {/* Header Ribbon */}
        <div className={`relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border-2 ${tierConfig.borderColor} transition-all transform scale-100 animate-scale-up`}>
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex justify-center mb-3">
            {tierConfig.icon}
          </div>

          <span className={`inline-block px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-2 shadow-sm ${tierConfig.badgeClass}`}>
            {tierConfig.badgeText}
          </span>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-md">
            {setName}
          </h3>

          {/* Big Score Display */}
          <div className="mt-4 flex items-baseline justify-center gap-2">
            <span className="text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-lg">
              {score.toFixed(1)}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-white/80">
              / 10.0 đ
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-white/90 mt-1 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>Đúng <b>{correctCount}</b> / {totalQuestions} câu</span>
            {timeSpent && <span>• Thời gian: {timeSpent}</span>}
          </p>
        </div>

        {/* Teacher Warm Quote Card */}
        <div className="p-6 sm:p-7 space-y-5 bg-gradient-to-b from-slate-50/70 to-white">
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 relative shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white text-xs font-black shadow-sm">
                LT
              </div>
              <div>
                <span className="text-xs font-black text-amber-950 uppercase tracking-wide">
                  Thầy Thọ Nhắn Nhủ Em
                </span>
                <span className="block text-[10px] text-amber-700/80">
                  {tierConfig.highlightWord}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">
              {tierConfig.quote}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            {hasNextSet && onNextSet && (
              <button
                onClick={() => {
                  onClose();
                  onNextSet();
                }}
                className="w-full py-3.5 px-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-sm rounded-2xl shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
              >
                <span>Mở khóa & Tiến tới Bộ tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <div className="grid grid-cols-2 gap-2.5">
              {onReviewSolutions && (
                <button
                  onClick={() => {
                    onClose();
                    onReviewSolutions();
                  }}
                  className="py-3 px-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Xem giải chi tiết</span>
                </button>
              )}

              {onRetry && (
                <button
                  onClick={() => {
                    onClose();
                    onRetry();
                  }}
                  className="py-3 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-600" />
                  <span>Làm lại bộ này</span>
                </button>
              )}
            </div>

            {score < 7.0 && onOpenHandbook && (
              <button
                onClick={() => {
                  onClose();
                  onOpenHandbook();
                }}
                className="w-full py-2.5 px-4 bg-amber-50/80 hover:bg-amber-100 text-amber-900 border border-amber-300 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Xem lại Cẩm nang lý thuyết & dạng toán</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
