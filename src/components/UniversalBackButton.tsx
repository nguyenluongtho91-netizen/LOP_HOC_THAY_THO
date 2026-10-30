import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Home, ChevronLeft } from "lucide-react";

export default function UniversalBackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  // Trạng thái thu gọn nút Quay lại: mặc định mở, người dùng có thể thu gọn lại thành nút tròn nhỏ xíu sát góc để không che chữ
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Không hiển thị nếu đang ở đúng trang chủ chính "/"
  const isHomePage = location.pathname === "/";
  if (isHomePage) return null;

  const handleBack = () => {
    // Nếu có lịch sử trang thì quay lại trang trước, không thì về trang chủ
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="fixed top-2.5 left-2.5 z-40 animate-fade-in no-print">
      {isCollapsed ? (
        /* KHI THU GỌN: Nút tròn siêu nhỏ gọn ở góc, không hề che bất kỳ dòng chữ nào */
        <button
          type="button"
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-teal-600 text-teal-300 hover:text-white font-bold text-xs shadow-xl backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
          title="Bấm để mở đầy đủ nút Quay lại & Trang chủ"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-[10px] text-white font-semibold">Bấm ra</span>
        </button>
      ) : (
        /* KHI MỞ RỘNG: Đầy đủ nút Quay lại, nút Trang chủ và nút thu gọn */
        <div className="flex items-center gap-1 bg-slate-900/95 p-1 rounded-full shadow-2xl backdrop-blur-md border border-white/20">
          {/* Nút Quay lại */}
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer group"
            title="Bấm để quay lại trang trước"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:-translate-x-0.5 transition-transform" />
            <span>Quay lại</span>
          </button>

          {/* Nút Về Trang Chủ */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="p-1.5 sm:p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Về Trang Chủ"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Nút Thu gọn */}
          <button
            type="button"
            onClick={() => setIsCollapsed(true)}
            className="p-1 sm:p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            title="Thu gọn nút lại"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
