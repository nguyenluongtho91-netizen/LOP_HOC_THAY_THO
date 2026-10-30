import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function UniversalBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Không hiển thị nếu đang ở đúng trang chủ chính '/'
  const isHomePage = location.pathname === '/';
  if (isHomePage) return null;

  const handleBack = () => {
    // Nếu có lịch sử trang thì quay lại trang trước, không thì về trang chủ
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="fixed top-3 left-3 z-40 flex items-center gap-1.5 animate-fade-in no-print">
      {/* Nút Quay lại */}
      <button
        type="button"
        onClick={handleBack}
        className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-slate-900/95 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm shadow-xl backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
        title="Bấm để quay lại trang trước"
      >
        <ArrowLeft className="w-4 h-4 text-teal-300 group-hover:text-white group-hover:-translate-x-0.5 transition-transform" />
        <span>Quay lại</span>
      </button>

      {/* Nút Về Trang Chủ */}
      <button
        type="button"
        onClick={() => navigate('/')}
        className="p-1.5 sm:p-2 rounded-full bg-slate-900/95 hover:bg-teal-600 text-white shadow-xl backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="Về Trang Chủ"
      >
        <Home className="w-4 h-4 text-amber-300" />
      </button>
    </div>
  );
}
