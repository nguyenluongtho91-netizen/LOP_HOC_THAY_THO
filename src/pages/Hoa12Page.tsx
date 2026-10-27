// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hoa12Chuong1View from '@/components/Hoa12Chuong1View';
import { useAuthStore } from '@/store/authStore';

export default function Hoa12Page() {
  const navigate = useNavigate();
  const auth = useAuthStore() as any;
  const isTeacher = Boolean(auth?.user && (auth.isAdmin?.() || auth.isTeacher?.() || auth.user?.email));

  return (
    <Hoa12Chuong1View
      studentName={isTeacher ? (auth.user?.user_metadata?.full_name || auth.user?.email || 'Thầy Thọ') : 'Học sinh'}
      studentGrade="Lớp 12"
      isTeacher={isTeacher}
      onClose={() => navigate(-1)}
    />
  );
}
