// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Hoa10View from "@/components/Hoa10View";
import { useAuthStore } from "@/store/authStore";

export default function Hoa10Page({ defaultChapter = 1 }: { defaultChapter?: number }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
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

  let studentSession: any = null;
  try {
    const raw = localStorage.getItem("current_student");
    if (raw) studentSession = JSON.parse(raw);
  } catch (e) {}

  const isTeacher = Boolean(auth?.user || localStorage.getItem("is_teacher_mode") === "true");
  const studentName = isTeacher ? "Thầy Thọ" : (studentSession?.full_name || studentSession?.name || "Học sinh 2k9");
  const studentGrade = isTeacher ? "Giáo viên" : (studentSession?.grade || "Khối 10");

  return (
    <Hoa10View
      studentName={studentName}
      studentGrade={studentGrade}
      isTeacher={isTeacher}
      initialChapter={activeChapter}
      onClose={() => navigate("/")}
    />
  );
}
