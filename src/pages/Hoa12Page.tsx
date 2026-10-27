// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hoa12Chuong1View from '@/components/Hoa12Chuong1View';

export default function Hoa12Page() {
  const navigate = useNavigate();
  return (
    <Hoa12Chuong1View
      studentName="Học sinh"
      studentGrade="Lớp 12"
      onClose={() => navigate(-1)}
    />
  );
}
