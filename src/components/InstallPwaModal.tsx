import React, { useState, useEffect } from 'react';
import { Download, Smartphone, Monitor, Share2, PlusSquare, X, CheckCircle2, Sparkles, MoreHorizontal, ExternalLink, Copy, Check } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPwaModal() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInApp, setIsInApp] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // 1. Kiểm tra xem đã mở ở chế độ standalone (App) chưa
    const isStandalone = 
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // 2. Nhận diện thiết bị iOS (iPhone/iPad)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // 3. Nhận diện mở bên trong ứng dụng Zalo, Facebook, Messenger
    const isInAppBrowser = /zalo|fbav|fban|instagram|messenger|line/i.test(userAgent);
    setIsInApp(isInAppBrowser);

    // 4. Lắng nghe sự kiện trước khi cài đặt PWA trên Android/Chrome/Edge
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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

      {/* POPUP HƯỚNG DẪN CÀI ĐẶT */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-teal-500/30 rounded-3xl max-w-md w-full p-5 sm:p-6 text-white shadow-2xl relative overflow-hidden">
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
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center shadow-lg p-2 border border-white/20">
                <img src="/logo.svg" alt="Logo Lớp Thầy Thọ" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ứng Dụng Học Tập</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white">Lớp Học Thầy Thọ</h3>
              </div>
            </div>

            {/* TRƯỜNG HỢP 1: ĐANG MỞ TRONG TRÌNH DUYỆT NHÚNG ZALO / FACEBOOK TRÊN IPHONE */}
            {isInApp && isIOS ? (
              <div className="space-y-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 mb-4 text-xs text-slate-200">
                <div className="font-bold text-amber-300 flex items-center gap-1.5 text-sm">
                  <span>⚠️ Đang mở trong Zalo (Cần mở bằng Safari):</span>
                </div>
                <p className="text-amber-100/90 text-[11px] leading-relaxed">
                  Apple không cho phép cài đặt App trực tiếp từ bên trong Zalo. Thầy/Trò chỉ cần thực hiện 2 thao tác sau:
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                    <span>
                      Nhìn lên <strong className="text-white">góc trên bên phải màn hình Zalo</strong>, bấm vào dấu <strong className="text-amber-300 font-mono text-sm">•••</strong> (3 chấm).
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                    <span>
                      Chọn dòng <strong className="text-white">"Mở bằng trình duyệt"</strong> (hoặc <strong className="text-white">"Mở bằng Safari"</strong>).
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                    <span>
                      Khi đã sang Safari, bấm nút <strong className="text-white">Chia sẻ</strong> (biểu tượng ô vuông mũi tên ⎋ ở thanh dưới cùng) ➔ Chọn <strong className="text-emerald-300 font-bold">"Thêm vào MH chính"</strong>.
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleCopyLink}
                    className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/20 transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Đã sao chép link! Mở Safari dán vào' : 'Sao chép link web để tự dán vào Safari'}</span>
                  </button>
                </div>
              </div>
            ) : deferredPrompt ? (
              /* TRƯỜNG HỢP 2: ANDROID HOẶC CHROME SẴN SÀNG CÀI ĐẶT 1 CHẠM */
              <div className="space-y-3 mb-4">
                <p className="text-xs text-slate-300">
                  Cài đặt ứng dụng trực tiếp vào máy để làm bài mượt mà, không cần gõ lại địa chỉ web.
                </p>
                <button
                  onClick={handleInstallClick}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-5 h-5" />
                  <span>CÀI ĐẶT NGAY BÂY GIỜ</span>
                </button>
                <div className="text-[11px] text-center text-slate-400">
                  ⚡ Miễn phí 100% · Không tốn dung lượng · Mở toàn màn hình
                </div>
              </div>
            ) : isIOS ? (
              /* TRƯỜNG HỢP 3: IPHONE ĐÃ Ở TRONG SAFARI */
              <div className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-4 mb-4 text-xs text-slate-200">
                <div className="font-bold text-amber-300 flex items-center gap-1.5 text-sm">
                  <Smartphone className="w-4 h-4" />
                  <span>Cài đặt trên iPhone / iPad (Safari):</span>
                </div>
                <div className="space-y-2.5 pl-1">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                    <span className="flex items-center gap-1.5 flex-wrap">
                      Nhìn xuống thanh dưới cùng Safari, bấm nút <strong className="text-white font-semibold">Chia sẻ</strong> 
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-[10px]">
                        <Share2 className="w-3 h-3 inline mr-1" /> Biểu tượng ô vuông mũi tên lên
                      </span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                    <span className="flex items-center gap-1.5 flex-wrap">
                      Cuộn xuống chọn dòng <strong className="text-white font-semibold">"Thêm vào MH chính"</strong> 
                      <PlusSquare className="w-3.5 h-3.5 text-emerald-400 inline" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                    <span>Bấm nút <strong className="text-emerald-400 font-bold">"Thêm"</strong> ở góc trên bên phải là hoàn tất!</span>
                  </div>
                </div>
              </div>
            ) : (
              /* TRƯỜNG HỢP 4: ANDROID / MÁY TÍNH */
              <div className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-4 mb-4 text-xs text-slate-200">
                <div className="font-bold text-teal-300 flex items-center gap-1.5 text-sm">
                  <Monitor className="w-4 h-4" />
                  <span>Cài đặt trên Android & Máy tính:</span>
                </div>
                <div className="space-y-2 pl-1">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Trên <strong>Chrome Android</strong>: Bấm dấu <strong>3 chấm (⋮)</strong> góc trên phải ➔ Chọn <strong>"Cài đặt ứng dụng"</strong> (hoặc "Thêm vào màn hình chính").</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Trên <strong>Máy tính</strong>: Bấm biểu tượng <strong>Cài đặt</strong> (màn hình có mũi tên) ở cuối thanh nhập địa chỉ web.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
              <span className="text-slate-400">Cổng học tập trực tuyến</span>
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
