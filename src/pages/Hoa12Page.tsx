// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hoa12Chuong1View from '@/components/Hoa12Chuong1View';
import { useAuthStore } from '@/store/authStore';

export default function Hoa12Page() {
  const navigate = useNavigate();
  const auth = useAuthStore() as any;
  const isTeacher = Boolean(auth?.user && (auth.isAdmin?.() || auth.isTeacher?.() || auth.user?.email));

  let studentName = 'Học sinh';
  let studentGrade = 'Khối 12';

  if (isTeacher) {
    studentName = auth.user?.user_metadata?.full_name || auth.user?.email || 'Thầy Thọ';
    studentGrade = 'Giáo viên';
  } else {
    try {
      const studentSession = localStorage.getItem('current_student');
      if (studentSession) {
        const student = JSON.parse(studentSession);
        studentName = student.name || 'Học sinh';
        studentGrade = student.grade || 'Khối 12';
      }
    } catch (e) {}
  }

  return (
    <Hoa12Chuong1View
      studentName={studentName}
      studentGrade={studentGrade}
      isTeacher={isTeacher}
      onClose={() => navigate(-1)}
    />
  );
}
