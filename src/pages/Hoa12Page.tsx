// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Hoa12Chuong1View from "@/components/Hoa12Chuong1View";
import Hoa12Chuong2View from "@/components/Hoa12Chuong2View";
import Hoa12Chuong3View from "@/components/Hoa12Chuong3View";
import Hoa12Chuong4View from "@/components/Hoa12Chuong4View";
import Hoa12Chuong5View from "@/components/Hoa12Chuong5View";
import { useAuthStore } from "@/store/authStore";

class Hoa12ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    console.error("Hoa12 local error caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7EE] text-slate-800 flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl mb-4 border border-amber-300">
            👑
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-2">Đang tải lại dữ liệu Hóa 12...</h2>
          <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
            Hệ thống đang đồng bộ dữ liệu đề thi và bài giảng mới nhất. Vui lòng nhấn nút bên dưới để tải lại.
          </p>

          <div className="mb-5 p-4 bg-red-50 border border-red-300 rounded-2xl text-left text-xs font-mono text-red-800 max-w-xl w-full max-h-60 overflow-auto whitespace-pre-wrap select-all shadow-inner">
            <div className="font-bold text-red-700 mb-1">Chi tiết lỗi kỹ thuật:</div>
            {String(this.state.error?.message || this.state.error)}
            {this.state.error?.stack && (
              <div className="mt-2 text-[10px] text-red-500 border-t border-red-200 pt-1">
                {this.state.error.stack}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              🔄 Tải lại trang ngay
            </button>
            <button
              onClick={() => {
                try {
                  localStorage.removeItem("hoa12_lock_status");
                  localStorage.removeItem("hoa12_passcode");
                  sessionStorage.clear();
                } catch (e) {}
                window.location.href = "/hoa12?t=" + Date.now();
              }}
              className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              🧹 Làm mới bộ nhớ & Vào lại
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

interface Hoa12PageProps {
  defaultChapter?: number;
}

export default function Hoa12Page({ defaultChapter }: Hoa12PageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = useAuthStore() as any;

  // Khởi tạo chương học (1 hoặc 5)
  const resolveChapter = (): number => {
    if ([1, 2, 3, 4, 5].includes(defaultChapter)) return defaultChapter;
    const urlC = searchParams.get("c") || searchParams.get("chuong");
    if (urlC === "5" || location.pathname.includes("chuong5") || location.pathname.includes("chuong-5")) return 5;
    if (urlC === "4" || location.pathname.includes("chuong4") || location.pathname.includes("chuong-4")) return 4;
    if (urlC === "3" || location.pathname.includes("chuong3") || location.pathname.includes("chuong-3")) return 3;
    if (urlC === "2" || location.pathname.includes("chuong2") || location.pathname.includes("chuong-2")) return 2;
    if (urlC === "1" || location.pathname.includes("chuong1") || location.pathname.includes("chuong-1")) return 1;
    const saved = localStorage.getItem("hoa12_active_chapter");
    if (saved && ["1", "2", "3", "4", "5"].includes(saved)) return Number(saved);
    return 1;
  };

  const [activeChapter, setActiveChapter] = useState<number>(resolveChapter);

  useEffect(() => {
    const target = resolveChapter();
    setActiveChapter(target);
  }, [defaultChapter, searchParams, location.pathname]);

  const handleSelectChapter = (ch: number) => {
    setActiveChapter(ch);
    localStorage.setItem("hoa12_active_chapter", String(ch));
    setSearchParams({ c: String(ch) });
  };

  // Kiểm tra quyền Thầy giáo từ mọi nguồn (Supabase Auth, Student Session, LocalStorage)
  let studentSession: any = null;
  try {
    const raw = localStorage.getItem("current_student");
    if (raw) studentSession = JSON.parse(raw);
  } catch (e) {}

  // PHÂN BIỆT RÕ RÀNG GIỮA HỌC SINH VÀ THẦY GIÁO (TRÁNH LẪN LỘN QUYỀN):
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

  let studentName = isTeacher ? "Thầy Thọ" : (studentSession?.full_name || studentSession?.name || "Học sinh");
  let studentGrade = isTeacher ? "Khối 12" : (studentSession?.grade || "Khối 12");

  return (
    <Hoa12ErrorBoundary>
      {/* Thanh điều hướng chương học chuyên biệt trên cùng, không che khuất bất kỳ nút nào */}
      <div className="bg-slate-950 text-white px-3 sm:px-6 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 shadow-md relative z-40 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-extrabold uppercase tracking-wide text-slate-300 hidden md:inline">
            Học Liệu Ôn Thi Hóa 12 Chuẩn Bộ 2025:
          </span>
          <span className="font-bold text-amber-400">
            {activeChapter === 2
              ? "🍇 Đang mở: Chương 2 – Carbohydrate"
              : activeChapter === 3
              ? "🧬 Đang mở: Chương 3 – Hợp Chất Chứa Nitrogen"
              : activeChapter === 4
              ? "🧶 Đang mở: Chương 4 – Polymer & Vật Liệu"
              : activeChapter === 5
              ? "⚡ Đang mở: Chương 5 – Pin & Điện Phân"
              : "🧪 Đang mở: Chương 1 – Ester – Lipid"}
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
            <span>🧪</span>
            <span>Chương 1: Ester – Lipid (7 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(2)}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
              activeChapter === 2
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>🍇</span>
            <span>Chương 2: Carbohydrate (4 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(3)}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
              activeChapter === 3
                ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>🧬</span>
            <span>Chương 3: Hợp Chất Chứa Nitrogen (4 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(4)}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
              activeChapter === 4
                ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>🧶</span>
            <span>Chương 4: Polymer (4 Đề)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectChapter(5)}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
              activeChapter === 5
                ? "bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span>⚡</span>
            <span>Chương 5: Pin & Điện Phân (4 Đề)</span>
          </button>
        </div>
      </div>

      {activeChapter === 2 ? (
        <Hoa12Chuong2View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate(-1)}
        />
      ) : activeChapter === 3 ? (
        <Hoa12Chuong3View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate(-1)}
        />
      ) : activeChapter === 4 ? (
        <Hoa12Chuong4View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate(-1)}
        />
      ) : activeChapter === 5 ? (
        <Hoa12Chuong5View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate(-1)}
        />
      ) : (
        <Hoa12Chuong1View
          studentName={studentName}
          studentGrade={studentGrade}
          isTeacher={isTeacher}
          onClose={() => navigate(-1)}
        />
      )}
    </Hoa12ErrorBoundary>
  );
}
