import React, { useState, useEffect } from 'react';
import { Download, Smartphone, Monitor, Share2, PlusSquare, X, CheckCircle2, Sparkles } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPwaModal() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Kiểm tra xem đã mở ở chế độ standalone (App) chưa
    const isStandalone = 
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Nhận diện thiết bị iOS (iPhone/iPad)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Lắng nghe sự kiện trước khi cài đặt PWA trên Android/Chrome/Edge
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setIsOpen(false);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
        setIsOpen(false);
      }
      setDeferredPrompt(null);
    } else {
      setIsOpen(true);
    }
  };

  // Đang trong App rồi thì không cần hiển thị nút cài đặt nữa
  if (isInstalled) return null;

  return (
    <>
      {/* NÚT NỔI Ở GÓC MÀN HÌNH (FLOATING BADGE) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40 backdrop-blur-md"
          title="Cài đặt App Lớp Học Thầy Thọ về máy"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
          </span>
          <Download className="w-4 h-4 text-emerald-100 group-hover:-translate-y-0.5 transition-transform" />
          <span>Cài App Về Máy</span>
        </button>
      </div>

      {/* POPUP HƯỚNG DẪN CÀI ĐẶT NHANH */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-teal-500/30 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl relative overflow-hidden">
            {/* Ánh sáng nền */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Nút đóng */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Modal */}
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center shadow-lg p-2.5 border border-white/20">
                <img src="/logo.svg" alt="Logo Lớp Thầy Thọ" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ứng Dụng Học Tập</span>
                </div>
                <h3 className="text-lg font-black text-white">Lớp Học Thầy Thọ</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
              Cài đặt ứng dụng trực tiếp vào điện thoại hoặc máy tính để mở 1 chạm, làm bài mượt mà, không cần nhập lại địa chỉ web.
            </p>

            {/* NẾU LÀ ANDROID HOẶC MÁY TÍNH CÓ SẴN PROMPT CỦA TRÌNH DUYỆT */}
            {deferredPrompt ? (
              <div className="space-y-3 mb-4">
                <button
                  onClick={handleInstallClick}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-5 h-5" />
                  <span>CÀI ĐẶT NGAY BÂY GIỜ</span>
                </button>
                <div className="text-[11px] text-center text-slate-400">
                  ⚡ Miễn phí 100% · Không tốn dung lượng · Dùng offline
                </div>
              </div>
            ) : isIOS ? (
              /* NẾU LÀ IPHONE / IPAD (HƯỚNG DẪN SAFARI) */
              <div className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-4 mb-4 text-xs text-slate-200">
                <div className="font-bold text-amber-300 flex items-center gap-1.5 text-sm">
                  <Smartphone className="w-4 h-4" />
                  <span>Cách cài đặt trên iPhone / iPad:</span>
                </div>
                <div className="space-y-2.5 pl-1">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                    <span>Mở trang web bằng trình duyệt <strong className="text-white font-semibold">Safari</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                    <span className="flex items-center gap-1.5 flex-wrap">
                      Bấm nút <strong className="text-white font-semibold">Chia sẻ</strong> 
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-[10px]">
                        <Share2 className="w-3 h-3 inline mr-1" /> Biểu tượng mũi tên
                      </span>
                      ở thanh dưới màn hình.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                    <span className="flex items-center gap-1.5 flex-wrap">
                      Cuộn xuống chọn <strong className="text-white font-semibold">"Thêm vào MH chính"</strong> 
                      <PlusSquare className="w-3.5 h-3.5 text-emerald-400 inline" /> rồi bấm <strong className="text-white font-semibold">"Thêm"</strong>.
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* NẾU LÀ ANDROID / MÁY TÍNH CHƯA KÍCH HOẠT PROMPT */
              <div className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-4 mb-4 text-xs text-slate-200">
                <div className="font-bold text-teal-300 flex items-center gap-1.5 text-sm">
                  <Monitor className="w-4 h-4" />
                  <span>Cài đặt trên Android & Máy tính:</span>
                </div>
                <div className="space-y-2 pl-1">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Trên <strong>Chrome</strong>: Bấm vào dấu <strong>3 chấm (⋮)</strong> góc trên phải ➔ Chọn <strong>"Cài đặt ứng dụng"</strong> hoặc <strong>"Thêm vào màn hình chính"</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Trên <strong>Máy tính</strong>: Bấm biểu tượng <strong>Cài đặt</strong> (hình màn hình có mũi tên) ở cuối thanh nhập link trình duyệt.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Footer hành động */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
              <span className="text-slate-400">Cổng học trực tuyến</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-teal-400 hover:text-teal-300 font-bold px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
