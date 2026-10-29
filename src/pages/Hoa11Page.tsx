// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Hoa11Chuong1View from "@/components/Hoa11Chuong1View";
import Hoa11Chuong2View from "@/components/Hoa11Chuong2View";
import Hoa11Chuong3View from "@/components/Hoa11Chuong3View";
import Hoa11Chuong4View from "@/components/Hoa11Chuong4View";
import Hoa11Chuong5View from "@/components/Hoa11Chuong5View";
import Hoa11Chuong6View from "@/components/Hoa11Chuong6View";
import { useAuthStore } from "@/store/authStore";

export default function Hoa11Page({ defaultChapter = 1 }: { defaultChapter?: number }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = useAuthStore() as any;

  const resolveChapter = (): number => {
    if ([1, 2, 3, 4, 5, 6].includes(defaultChapter)) return defaultChapter;
    const urlC = searchParams.get("c") || searchParams.get("chuong");
    if (urlC === "2" || location.pathname.includes("chuong2") || location.pathname.includes("chuong-2")) return 2;
    if (urlC === "3" || location.pathname.includes("chuong3") || location.pathname.includes("chuong-3")) return 3;
    if (urlC === "4" || location.pathname.includes("chuong4") || location.pathname.includes("chuong-4")) return 4;
    if (urlC === "5" || location.pathname.includes("chuong5") || location.pathname.includes("chuong-5")) return 5;
    if (urlC === "6" || location.pathname.includes("chuong6") || location.pathname.includes("chuong-6")) return 6;
    const saved = localStorage.getItem("hoa11_active_chapter");
    if (saved && ["1", "2", "3", "4", "5", "6"].includes(saved)) return Number(saved);
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
            {activeChapter === 2
              ? "💨 Đang mở: Chương 2 – Nitrogen & Sulfur"
              : activeChapter === 3
              ? "🧪 Đang mở: Chương 3 – Đại Cương Hóa Học Hữu Cơ"
              : activeChapter === 4
              ? "⛽ Đang mở: Chương 4 – Hydrocarbon"
              : activeChapter === 5
              ? "🍶 Đang mở: Chương 5 – Dẫn Xuất Halogen, Alcohol & Phenol"
              : activeChapter === 6
              ? "⚡ Đang mở: Chương 6 – Hợp Chất Carbonyl & Carboxylic Acid"
              : "⚖️ Đang mở: Chương 1 – Cân Bằng Hóa Học"}
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700/80 overflow-x-auto max-w-full">
          <Link
            to="/hoa11-giuaki1"
            className="px-3 py-1.5 rounded-lg font-black text-xs transition-all flex items-center gap-1.5 whitespace-nowrap bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/20 hover:scale-[1.03] cursor-pointer mr-1"
          >
            <span>🎯</span>
            <span>BỘ 10 ĐỀ GIỮA KÌ 1</span>
          </Link>
          <Link
            to="/hoa11-cuoiki1"
            className="px-3 py-1.5 rounded-lg font-black text-xs transition-all flex items-center gap-1.5 whitespace-nowrap bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/20 hover:scale-[1.03] cursor-pointer mr-1"
          >
            <span>🏆</span>
            <span>BỘ 10 ĐỀ CUỐI KÌ 1</span>
          </Link>
          
          <button
            type="button"
            onClick={() => handleSelectChapter(1)}
            className={`px-2.5 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
              activeChapter === 1
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>⚖️</span>
            <span>C1: Cân Bằng (2 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(2)}
            className={`px-2.5 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
              activeChapter === 2
                ? "bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>💨</span>
            <span>C2: N & S (2 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(3)}
            className={`px-2.5 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
              activeChapter === 3
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>🧪</span>
            <span>C3: Hữu Cơ (4 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(4)}
            className={`px-2.5 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
              activeChapter === 4
                ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>⛽</span>
            <span>C4: Hydrocarbon (4 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(5)}
            className={`px-2.5 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
              activeChapter === 5
                ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>🍶</span>
            <span>C5: Alcohol - Phenol (4 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(6)}
            className={`px-2.5 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
              activeChapter === 6
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>⚡</span>
            <span>C6: Carbonyl - Acid (4 Đề)</span>
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
      ) : activeChapter === 3 ? (
        <Hoa11Chuong3View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate("/")}
        />
      ) : activeChapter === 4 ? (
        <Hoa11Chuong4View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate("/")}
        />
      ) : activeChapter === 5 ? (
        <Hoa11Chuong5View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate("/")}
        />
      ) : activeChapter === 6 ? (
        <Hoa11Chuong6View
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
