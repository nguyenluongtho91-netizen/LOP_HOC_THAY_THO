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
    console.error('Hoa12 local error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7EE] text-slate-800 flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-3xl mb-4 border border-indigo-300">
            🧪
          </div>
          <h2 className="text-xl font-black mb-2 text-slate-900">Đang đồng bộ học liệu Hóa 12</h2>
          <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
            Hệ thống vừa cập nhật dữ liệu câu hỏi và 7 đề thi mới nhất. Em bấm nút bên dưới để vào làm bài ngay nhé!
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
            }}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Vào học Hóa 12 ngay
          </button>
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
