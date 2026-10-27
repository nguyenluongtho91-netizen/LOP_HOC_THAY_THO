// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hoa12Chuong1View from '@/components/Hoa12Chuong1View';
import { useAuthStore } from '@/store/authStore';

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
    <Hoa12Chuong1View
      studentName={studentName}
      studentGrade={studentGrade}
      isTeacher={isTeacher}
      onClose={() => navigate(-1)}
    />
  );
}
