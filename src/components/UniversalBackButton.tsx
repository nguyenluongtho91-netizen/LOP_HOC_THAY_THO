import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Home, ChevronLeft } from "lucide-react";

export default function UniversalBackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Kiểm tra vai trò: Học sinh hay Thầy giáo
  const isTeacher = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("is_teacher_mode") === "true" ||
      localStorage.getItem("role") === "teacher" ||
      localStorage.getItem("role") === "admin"
    );
  }, []);

  const isStudentLoggedIn = useMemo(() => {
    if (typeof window === "undefined") return false;
    return Boolean(localStorage.getItem("current_student")) && !isTeacher;
  }, [isTeacher]);

  // 1. Tuyệt đối KHÔNG hiển thị nút này khi ở trang chủ "/" hoặc cổng học sinh "/thi"
  if (location.pathname === "/" || location.pathname === "/thi") {
    return null;
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Học sinh quay về Cổng học sinh /thi, Thầy quay về trang chủ /
      navigate(isStudentLoggedIn ? "/thi" : "/");
    }
  };

  const handleGoHome = () => {
    // TUYỆT ĐỐI HỌC SINH KHÔNG ĐƯỢC TRUY CẬP VÀO TRANG CHỦ CỦA THẦY:
    // Học sinh bấm Home sẽ về Cổng học sinh /thi, Thầy bấm Home mới về /
    if (isStudentLoggedIn) {
      navigate("/thi");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="fixed top-2.5 left-2.5 z-40 animate-fade-in no-print">
      {isCollapsed ? (
        <button
          type="button"
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-teal-600 text-teal-300 hover:text-white font-bold text-xs shadow-xl backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
          title="Bấm để mở nút Quay lại"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-[10px] text-white font-semibold">Bấm ra</span>
        </button>
      ) : (
        <div className="flex items-center gap-1 bg-slate-900/95 p-1 rounded-full shadow-2xl backdrop-blur-md border border-white/20">
          {/* Nút Quay lại */}
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer group"
            title="Quay lại"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:-translate-x-0.5 transition-transform" />
            <span>Quay lại</span>
          </button>

          {/* Nút Home: Đối với học sinh thì về Cổng học sinh, Thầy về Trang chủ */}
          <button
            type="button"
            onClick={handleGoHome}
            className="p-1.5 sm:p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title={isStudentLoggedIn ? "Về Cổng Thi Học Sinh" : "Về Trang Chủ"}
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Nút Thu gọn */}
          <button
            type="button"
            onClick={() => setIsCollapsed(true)}
            className="p-1 sm:p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            title="Thu gọn"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
