// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hoa12Chuong1View from '@/components/Hoa12Chuong1View';
import { useAuthStore } from '@/store/authStore';

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
    console.error('Hoa12 local error caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7EE] text-slate-800 flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl mb-4 border border-amber-300">
            👑
          </div>
          <h2 className="text-xl font-black mb-2 text-slate-900">Hệ Thống Đang Nạp Giao Diện Quản Trị Hóa 12</h2>
          <p className="text-sm text-slate-600 max-w-md mb-4 leading-relaxed">
            Kính gửi Thầy Thọ: Hệ thống đang đồng bộ kho câu hỏi Chương 1 và 7 đề thi. Nếu giao diện chưa hiện ra, Thầy xem chi tiết kỹ thuật bên dưới:
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
                  localStorage.removeItem('hoa12_lock_status');
                  localStorage.removeItem('hoa12_passcode');
                  sessionStorage.clear();
                } catch (e) {}
                window.location.href = '/hoa12?t=' + Date.now();
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

export default function Hoa12Page() {
  const navigate = useNavigate();
  const auth = useAuthStore() as any;

  // Kiểm tra quyền Thầy giáo từ mọi nguồn (Supabase Auth, Student Session, LocalStorage)
  let studentSession: any = null;
  try {
    const raw = localStorage.getItem('current_student');
    if (raw) studentSession = JSON.parse(raw);
  } catch (e) {}

  const isTeacherByAuth = Boolean(auth?.user && (auth.isAdmin?.() || auth.isTeacher?.() || auth.user?.email));
  const isTeacherByStudentCode = Boolean(
    studentSession && (
      ['THAYTHO', 'TUDO', 'ADMIN', 'TEACHER'].includes(String(studentSession.student_code || '').toUpperCase().trim()) ||
      String(studentSession.full_name || '').toLowerCase().includes('thọ') ||
      String(studentSession.role || '').toUpperCase() === 'ADMIN' ||
      String(studentSession.role || '').toUpperCase() === 'TEACHER' ||
      String(studentSession.grade || '').toLowerCase().includes('giáo viên')
    )
  );
  const isTeacherByLocalFlag = localStorage.getItem('is_teacher_mode') === 'true' ||
                               localStorage.getItem('hoa12_student_authorized') === 'true' ||
                               localStorage.getItem('role') === 'teacher' ||
                               localStorage.getItem('role') === 'admin';

  const isTeacher = isTeacherByAuth || isTeacherByStudentCode || isTeacherByLocalFlag;

  let studentName = isTeacher ? 'Thầy Thọ' : (studentSession?.full_name || studentSession?.name || 'Học sinh');
  let studentGrade = isTeacher ? 'Khối 12' : (studentSession?.grade || 'Khối 12');

  return (
    <Hoa12ErrorBoundary>
      <Hoa12Chuong1View
        studentName={studentName}
        studentGrade={studentGrade}
        isTeacher={isTeacher}
        onClose={() => navigate(-1)}
      />
    </Hoa12ErrorBoundary>
  );
}
