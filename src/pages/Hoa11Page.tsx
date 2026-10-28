// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Hoa11Chuong1View from "@/components/Hoa11Chuong1View";
import Hoa11Chuong2View from "@/components/Hoa11Chuong2View";
import { useAuthStore } from "@/store/authStore";

export default function Hoa11Page({ defaultChapter = 1 }: { defaultChapter?: number }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = useAuthStore() as any;

  const resolveChapter = (): number => {
    if (defaultChapter === 1 || defaultChapter === 2) return defaultChapter;
    const urlC = searchParams.get("c") || searchParams.get("chuong");
    if (urlC === "2" || location.pathname.includes("chuong2") || location.pathname.includes("chuong-2")) return 2;
    return 1;
  };

  const [activeChapter, setActiveChapter] = useState<number>(resolveChapter);

  useEffect(() => {
    setActiveChapter(resolveChapter());
  }, [defaultChapter, searchParams, location.pathname]);

  const handleSelectChapter = (ch: number) => {
    setActiveChapter(ch);
    localStorage.setItem("hoa11_active_chapter", String(ch));
    setSearchParams({ c: String(ch) });
  };

  let studentSession: any = null;
  try {
    const raw = localStorage.getItem("current_student");
    if (raw) studentSession = JSON.parse(raw);
  } catch (e) {}

    // ƯU TIÊN TUYỆT ĐỐI QUYỀN GIÁO VIÊN / QUẢN TRỊ VIÊN:
  const hasTeacherParam = searchParams.get("teacher") === "1" || searchParams.get("admin") === "1";
  const hasTeacherLocal = localStorage.getItem("is_teacher_mode") === "true" ||
                          localStorage.getItem("role") === "teacher" ||
                          localStorage.getItem("role") === "admin" ||
                          localStorage.getItem("hoa11_teacher_authenticated") === "true" ||
                          localStorage.getItem("hoa12_teacher_authenticated") === "true" ||
                          localStorage.getItem("hoa10_teacher_authenticated") === "true";
  const isTeacherByAuth = Boolean(auth?.user && (auth.isAdmin?.() || auth.isTeacher?.() || auth.user?.email));
  const isTeacherByStudentCode = Boolean(
    studentSession && (
      ["THAYTHO", "TUDO", "ADMIN", "TEACHER"].includes(String(studentSession.student_code || "").toUpperCase().trim()) ||
      String(studentSession.role || "").toUpperCase() === "ADMIN" ||
      String(studentSession.role || "").toUpperCase() === "TEACHER" ||
      String(studentSession.grade || "").toLowerCase().includes("giáo viên")
    )
  );

  const isTeacher = hasTeacherParam || hasTeacherLocal || isTeacherByAuth || isTeacherByStudentCode;
  const isRealStudent = !isTeacher && Boolean(studentSession?.student_code);

  let studentName = isTeacher ? "Thầy Thọ" : (studentSession?.full_name || studentSession?.name || "Học sinh 2k8");
  let studentGrade = isTeacher ? "Khối 11" : (studentSession?.grade || "Khối 11");

  return (
    <div>
      {/* Top Chapter Switcher Bar */}
      <div className="bg-slate-950 text-white px-3 sm:px-6 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 shadow-md relative z-40 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-extrabold uppercase tracking-wide text-slate-300 hidden md:inline">
            Học Liệu Ôn Thi Hóa 11 Chuẩn Bộ 2025:
          </span>
          <span className="font-bold text-amber-400">
            {activeChapter === 2 ? "💨 Đang mở: Chương 2 – Nitrogen & Sulfur" : "⚖️ Đang mở: Chương 1 – Cân Bằng Hóa Học"}
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700/80">
          <button
            type="button"
            onClick={() => handleSelectChapter(1)}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
              activeChapter === 1
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>⚖️</span>
            <span>Chương 1: Cân Bằng Hóa Học (3 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(2)}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
              activeChapter === 2
                ? "bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>💨</span>
            <span>Chương 2: Nitrogen & Sulfur (2 Đề)</span>
          </button>
        </div>
      </div>

      {activeChapter === 2 ? (
        <Hoa11Chuong2View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate("/")}
        />
      ) : (
        <Hoa11Chuong1View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate("/")}
        />
      )}
    </div>
  );
}
