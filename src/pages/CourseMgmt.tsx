// @ts-nocheck
import { useEffect, useState, useRef, useMemo } from "react"
import { 
  BookOpen, Plus, FileText, ChevronRight, Pencil, Check, X, Trash2, 
  RefreshCw, Youtube, Users, Eye, EyeOff, Key, Globe, Search, ShieldCheck, 
  CheckSquare, Square, UserCheck, Sparkles, AlertCircle, School, GraduationCap
} from "lucide-react"
import { useCourseStore } from "@/store/courseStore"
import { useExamStore } from "@/store/examStore"
import { useDataStore } from "@/store/dataStore" 
import { useAuthStore } from "@/store/authStore"
import { uploadPdfToSupabase } from "@/services/supabaseService"
import Modal from "@/components/Modal"
import toast from "react-hot-toast"
import InteractiveVideoEditor from "@/components/InteractiveVideoEditor"

const sortLessons = (lessons: any[]) => {
  return [...lessons].sort((a, b) => {
    const getNum = (title: string) => {
      const match = title.match(/(?:buổi|buoi|bài|bai|lớp|lop)\s*(\d+)/i) || title.match(/(\d+)/)
      return match ? parseInt(match[1], 10) : Infinity
    }
    const numA = getNum(a.title || "")
    const numB = getNum(b.title || "")
    if (numA !== numB) return numA - numB
    return (a.title || "").localeCompare(b.title || "", "vi", { numeric: true, sensitivity: "base" })
  })
}

const getCourseGrade = (title: string) => {
  const t = (title || "").toLowerCase()
  if (t.includes("lớp 12") || t.includes("khối 12") || t.includes("toán 12") || t.includes("khối mười hai") || /\b(khối\s+)?12\b/.test(t)) return 12
  if (t.includes("lớp 11") || t.includes("khối 11") || t.includes("toán 11") || t.includes("khối mười một") || /\b(khối\s+)?11\b/.test(t)) return 11
  if (t.includes("lớp 10") || t.includes("khối 10") || t.includes("toán 10") || t.includes("khối mười") || /\b(khối\s+)?10\b/.test(t)) return 10
  if (t.includes("lớp 6") || t.includes("khối 6") || t.includes("toán 6") || t.includes("khối sáu") || /\b(khối\s+)?6\b/.test(t)) return 6
  if (t.includes("lớp 7") || t.includes("khối 7") || t.includes("toán 7") || t.includes("khối bảy") || /\b(khối\s+)?7\b/.test(t)) return 7
  if (t.includes("lớp 8") || t.includes("khối 8") || t.includes("toán 8") || t.includes("khối tám") || /\b(khối\s+)?8\b/.test(t)) return 8
  if (t.includes("lớp 9") || t.includes("khối 9") || t.includes("toán 9") || t.includes("khối chín") || /\b(khối\s+)?9\b/.test(t)) return 9
  return null
}

export default function CourseMgmt() {
  const { 
    courses, loadCourses, createCourse, updateCourse, deleteCourse,
    addChapter, updateChapter, deleteChapter,
    addLesson, updateLesson, deleteLesson 
  } = useCourseStore() as any;
  
  const { exams, loadExams } = useExamStore() as any;
  const { classes, loadClasses, students, loadStudents } = useDataStore() as any; 
  const { user } = useAuthStore() as any; 
  
  const [modalOpen, setModalOpen] = useState(false)
  const [newCourseTitle, setNewCourseTitle] = useState("")
  const [editState, setEditState] = useState<{ id: string, type: "course"|"chapter"|"lesson", title: string } | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadingLessonId, setUploadingLessonId] = useState<string | null>(null);
  const [attachExamLesson, setAttachExamLesson] = useState<any>(null);
  const [selectedExamId, setSelectedExamId] = useState("");
  const [isRefreshingExams, setIsRefreshingExams] = useState(false);

  const [attachVideoLesson, setAttachVideoLesson] = useState<any>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [editingVideoLesson, setEditingVideoLesson] = useState<any>(null);

  // ── PHÂN QUYỀN KHÓA HỌC CHUYÊN SÂU ──
  const [assigningCourse, setAssigningCourse] = useState<any>(null);
  const [isOpenToAll, setIsOpenToAll] = useState(false);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedClassIds, setSelectedClassIds] = useState<string[]>([]);
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [isPublishedInModal, setIsPublishedInModal] = useState(true);
  const [assignModalTab, setAssignModalTab] = useState<"quick" | "classes" | "students">("quick");
  const [studentSearchQuery, setStudentSearchQuery] = useState("");

  const [activeGrade, setActiveGrade] = useState<number | "others">(() => {
    const saved = sessionStorage.getItem("course_mgmt_active_grade")
    if (saved) {
      return saved === "others" ? "others" : Number(saved)
    }
    return 12
  })

  useEffect(() => {
    sessionStorage.setItem("course_mgmt_active_grade", activeGrade.toString())
  }, [activeGrade])

  useEffect(() => {
    if (loadCourses) loadCourses()
    if (loadExams) loadExams()
    if (loadClasses) loadClasses() 
    if (loadStudents) loadStudents()
  }, [loadCourses, loadExams, loadClasses, loadStudents])

  useEffect(() => {
    if (courses && courses.length > 0) {
      const availableGrades = [12, 11, 10, 9, 8, 7, 6].filter(g => 
        courses.some((c: any) => getCourseGrade(c.title) === g)
      )
      
      const saved = sessionStorage.getItem("course_mgmt_active_grade")
      if (saved) {
        const savedVal = saved === "others" ? "others" : Number(saved)
        const isValid = savedVal === "others"
          ? courses.some((c: any) => getCourseGrade(c.title) === null)
          : availableGrades.includes(savedVal)
        if (isValid) {
          setActiveGrade(savedVal)
          return
        }
      }

      if (availableGrades.length > 0) {
        setActiveGrade(availableGrades[0])
      } else if (courses.some((c: any) => getCourseGrade(c.title) === null)) {
        setActiveGrade("others")
      }
    }
  }, [courses])

  const handleCreateCourse = async () => {
    if (!newCourseTitle.trim()) return toast.error("Vui lòng nhập tên khóa học")
    try {
      await createCourse({ 
        title: newCourseTitle, 
        description: "Khóa học mới tạo", 
        teacher_id: user?.id || null, 
        is_published: true,
        assigned_class_ids: ["ALL"]
      })
      toast.success("Đã tạo khóa học thành công! (Mặc định mở cho học sinh)")
      setModalOpen(false)
      setNewCourseTitle("")
    } catch (error: any) { 
      toast.error("Lỗi tạo khóa học!") 
    }
  }

  const handleDeleteCourse = async (id: string, title: string) => {
    if (!confirm(`Xóa khóa học "${title}"? Toàn bộ chương và bài học sẽ mất.`)) return;
    try { await deleteCourse(id); toast.success("Đã xóa khóa học!"); } catch (e) { toast.error("Lỗi xóa khóa học!"); }
  }

  const handleTogglePublish = async (course: any) => {
    const newStatus = !course.is_published;
    try {
      await updateCourse(course.id, { is_published: newStatus });
      toast.success(newStatus ? "Đã XUẤT BẢN khóa học (Học sinh thấy được)!" : "Đã chuyển về BẢN NHÁP (Đang ẩn)!");
    } catch (err) {
      toast.error("Lỗi cập nhật trạng thái!");
    }
  }

  // ── MỞ MODAL CẤP QUYỀN VÀ TRÍCH XUẤT DỮ LIỆU HIỆN TẠI ──
  const openAssignModal = (course: any) => {
    setAssigningCourse(course);
    setIsPublishedInModal(course.is_published ?? true);
    
    const assigned: string[] = Array.isArray(course.assigned_class_ids) ? course.assigned_class_ids : [];
    
    setIsOpenToAll(assigned.includes("ALL"));
    
    // Khối lớp (GRADE_12, GRADE_11, ...)
    const grades = assigned
      .filter((id: string) => id.startsWith("GRADE_"))
      .map((id: string) => id.replace("GRADE_", ""));
    setSelectedGrades(grades);
    
    // Lớp học: các id khớp với classes
    const classIdList = (classes || []).map((c: any) => c.id);
    setSelectedClassIds(assigned.filter((id: string) => classIdList.includes(id)));
    
    // Học sinh: các id khớp với students
    const studentIdList = (students || []).map((s: any) => s.id);
    setSelectedStudentIds(assigned.filter((id: string) => studentIdList.includes(id)));
    
    setStudentSearchQuery("");
    setAssignModalTab(assigned.includes("ALL") ? "quick" : (grades.length > 0 ? "quick" : "classes"));
  };

  // ── LƯU CẤP QUYỀN KHÓA HỌC ──
  const handleSaveAssignPermissions = async () => {
    if (!assigningCourse) return;
    try {
      let finalAssigned: string[] = [];
      
      if (isOpenToAll) {
        finalAssigned = ["ALL"];
      } else {
        const gradeTags = selectedGrades.map(g => `GRADE_${g}`);
        finalAssigned = Array.from(new Set([...gradeTags, ...selectedClassIds, ...selectedStudentIds]));
      }

      await updateCourse(assigningCourse.id, { 
        assigned_class_ids: finalAssigned,
        is_published: isPublishedInModal
      });
      
      toast.success(`🎉 Đã cấp quyền cho "${assigningCourse.title}" thành công!`);
      setAssigningCourse(null);
    } catch (err) {
      toast.error("Lỗi cập nhật quyền khóa học!");
    }
  };

  const handleAddChapter = async (courseId: string) => {
    try { await addChapter({ course_id: courseId, title: "Chương mới", order_index: 1 }); toast.success("Đã thêm chương!"); } catch (e) { toast.error("Lỗi thêm chương!"); }
  }

  const handleDeleteChapter = async (id: string, title: string) => {
    if (!confirm(`Xóa chương "${title}"?`)) return;
    try { await deleteChapter(id); toast.success("Đã xóa!"); } catch (e) { toast.error("Lỗi!"); }
  }

  const handleAddLesson = async (chapterId: string) => {
    try { await addLesson({ chapter_id: chapterId, title: "Bài học mới", order_index: 1 }); toast.success("Đã thêm bài học!"); } catch (e) { toast.error("Lỗi thêm bài học!"); }
  }

  const handleDeleteLesson = async (id: string, title: string) => {
    if (!confirm(`Xóa bài học "${title}"?`)) return;
    try { await deleteLesson(id); toast.success("Đã xóa!"); } catch (e) { toast.error("Lỗi!"); }
  }

  const handleSaveEdit = async () => {
    if (!editState || !editState.title.trim()) { setEditState(null); return; }
    try {
      if (editState.type === "course") await updateCourse(editState.id, { title: editState.title });
      else if (editState.type === "chapter") await updateChapter(editState.id, { title: editState.title });
      else if (editState.type === "lesson") await updateLesson(editState.id, { title: editState.title });
      toast.success("Đã cập nhật tên!");
    } catch (err) { toast.error("Lỗi!"); } finally { setEditState(null); }
  }

  const handleTriggerUpload = (lessonId: string) => {
    setUploadingLessonId(lessonId);
    fileInputRef.current?.click();
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !uploadingLessonId) return;
    const toastId = toast.loading("Đang upload PDF...");
    try {
      const base64 = await fileToBase64(file);
      const result = await uploadPdfToSupabase(base64, file.name);

      let currentPdfs = [];
      for (const c of courses || []) {
        for (const ch of c.chapters || []) {
          for (const l of ch.lessons || []) {
            if (l.id === uploadingLessonId) {
              currentPdfs = l.pdf_list || (l.pdf_url ? [{ name: "Tài liệu PDF", url: l.pdf_url }] : []);
              break;
            }
          }
        }
      }

      const newPdfList = [...currentPdfs, { name: file.name, url: result.fileUrl }];

      await updateLesson(uploadingLessonId, { 
        pdf_list: newPdfList,
        pdf_url: newPdfList[0]?.url || null
      });
      toast.success("Upload PDF thành công!", { id: toastId });
    } catch(err: any) { 
      toast.error(`Lỗi upload: ${err.message || "Không rõ nguyên nhân"}`, { id: toastId }); 
      console.error(err);
    } 
    finally { setUploadingLessonId(null); if (fileInputRef.current) fileInputRef.current.value = ""; }
  }

  const handleRefreshExams = async () => {
    setIsRefreshingExams(true);
    await loadExams();
    setIsRefreshingExams(false);
    toast.success("Đã làm mới danh sách đề!");
  }

  const handleSaveAttachExam = async () => {
    if (!attachExamLesson || !selectedExamId) return toast.error("Chọn một đề thi!");
    try {
      const currentExamIds = attachExamLesson.exam_ids || (attachExamLesson.exam_id ? [attachExamLesson.exam_id] : []);
      if (currentExamIds.includes(selectedExamId)) {
        return toast.error("Bài tập này đã được gắn rồi!");
      }
      const newExamIds = [...currentExamIds, selectedExamId];
      await updateLesson(attachExamLesson.id, { 
        exam_ids: newExamIds,
        exam_id: newExamIds[0]
      });
      toast.success("Gắn bài tập thành công!");
      setAttachExamLesson(null); setSelectedExamId("");
    } catch(err) { toast.error("Lỗi gắn bài tập!"); }
  }

  const handleSaveVideo = async () => {
    if (!videoUrl) return toast.error("Nhập link YouTube!");
    try {
      await updateLesson(attachVideoLesson.id, { video_url: videoUrl });
      toast.success("Gắn Video thành công!");
      setAttachVideoLesson(null); setVideoUrl("");
    } catch(err) { toast.error("Lỗi!"); }
  }

  // Thầy Thọ là Chủ/Admin toàn bộ hệ thống -> Luôn thấy tất cả Lớp và Khóa học
  const myClasses = classes && classes.length > 0 ? classes : [];
  const myCourses = courses && courses.length > 0 ? courses : [];

  const displayedCourses = myCourses?.filter((course: any) => {
    const g = getCourseGrade(course.title)
    if (activeGrade === "others") {
      return g === null
    }
    return g === activeGrade
  })

  // Lọc học sinh trong modal tìm kiếm
  const filteredStudents = useMemo(() => {
    if (!students) return [];
    if (!studentSearchQuery.trim()) return students.slice(0, 50);
    const q = studentSearchQuery.toLowerCase().trim();
    return students.filter((s: any) => 
      s.full_name?.toLowerCase().includes(q) ||
      s.student_code?.toLowerCase().includes(q) ||
      s.grade?.toLowerCase().includes(q)
    );
  }, [students, studentSearchQuery]);

  return (
    <div className="space-y-6">
      <input type="file" accept=".pdf" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-800 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-teal-600" /> Quản Lý Khóa Học & Bài Giảng Video
          </h1>
          <p className="text-xs text-gray-500 mt-1 font-medium">
            Thầy có thể tạo khóa học, nhúng video bài giảng, gắn PDF bài tập và cấp quyền học sinh theo Khối hoặc Lớp.
          </p>
        </div>
        <button onClick={() => setModalOpen(true)} className="btn-teal flex items-center gap-2 font-bold px-4 py-2.5 shadow-md shadow-teal-600/20">
          <Plus className="w-4 h-4" /> Tạo khóa học mới
        </button>
      </div>

      {/* Grade Selector horizontal list */}
      <div className="flex flex-wrap gap-2.5">
        {[12, 11, 10, 9, 8, 7, 6, "others"].map((grade) => {
          const isOther = grade === "others"
          const label = isOther ? "Khác / Lấy Gốc" : `Khối ${grade}`
          const isActive = activeGrade === grade
          
          const count = myCourses?.filter(c => {
            const g = getCourseGrade(c.title)
            return isOther ? (g === null) : (g === grade)
          }).length || 0

          if (isOther && count === 0) return null

          return (
            <button
              key={grade}
              onClick={() => setActiveGrade(grade as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-black text-xs sm:text-sm transition-all shadow-2xs ${
                isActive
                  ? "bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-500/20 scale-[1.02]"
                  : "bg-white border-slate-200 text-slate-700 hover:border-teal-300 hover:bg-teal-50/20"
              }`}
            >
              {label}
              <span className={`text-[11px] px-2 py-0.5 rounded-md font-extrabold ${
                isActive ? "bg-teal-800 text-white" : "bg-slate-100 text-slate-600"
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Danh sách khóa học */}
      <div className="grid grid-cols-1 gap-6">
        {displayedCourses?.map((course: any) => {
          const assigned = Array.isArray(course.assigned_class_ids) ? course.assigned_class_ids : [];
          const isAll = assigned.includes("ALL");
          const grades = assigned.filter((id: string) => id.startsWith("GRADE_")).map((id: string) => id.replace("GRADE_", ""));
          
          return (
            <div key={course.id} className={`card p-6 border-l-4 ${course.is_published ? "border-teal-500 bg-white" : "border-amber-400 bg-amber-50/20"}`}>
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-6">
                <div className="flex-1">
                  {editState?.id === course.id && editState.type === "course" ? (
                    <div className="flex items-center gap-2 mb-1">
                      <input autoFocus value={editState.title} onChange={(e) => setEditState({ ...editState, title: e.target.value })} onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()} className="text-xl font-bold text-gray-800 border-b-2 border-teal-500 outline-none bg-transparent px-1 w-full max-w-md" />
                      <button onClick={handleSaveEdit} className="text-green-600 p-1 hover:bg-green-50 rounded"><Check className="w-5 h-5"/></button>
                      <button onClick={() => setEditState(null)} className="text-gray-400 p-1 hover:bg-gray-100 rounded"><X className="w-5 h-5"/></button>
                    </div>
                  ) : (
                    <div className="flex items-center flex-wrap gap-2.5 group">
                      <h2 className="text-lg sm:text-xl font-black text-gray-800">{course.title}</h2>
                      
                      {/* Nút bật/tắt Xuất bản */}
                      <button 
                        onClick={() => handleTogglePublish(course)} 
                        className={`flex items-center gap-1.5 px-3 py-1 text-xs font-black rounded-lg border transition shadow-2xs ${
                          course.is_published 
                          ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100" 
                          : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200 animate-pulse"
                        }`}
                        title="Bấm để bật/tắt xuất bản cho học sinh xem"
                      >
                        {course.is_published ? <><Eye className="w-3.5 h-3.5"/> Đã xuất bản</> : <><EyeOff className="w-3.5 h-3.5"/> Bản nháp (Đang ẩn)</>}
                      </button>

                      {/* NÚT CẤP QUYỀN NỔI BẬT DÀNH CHO THẦY */}
                      <button 
                        onClick={() => openAssignModal(course)} 
                        className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-xs font-black rounded-xl shadow-sm transition active:scale-95 cursor-pointer"
                        title="Cấp quyền truy cập cho học sinh, khối hoặc lớp"
                      >
                        <Key className="w-3.5 h-3.5 text-amber-300" />
                        <span>Cấp Quyền & Giao Lớp</span>
                      </button>

                      {/* Huy hiệu quyền hiện tại */}
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-xl border flex items-center gap-1 shadow-2xs ${
                        isAll 
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200 font-extrabold" 
                          : grades.length > 0 
                          ? "bg-blue-50 text-blue-800 border-blue-200 font-extrabold" 
                          : assigned.length > 0 
                          ? "bg-teal-50 text-teal-800 border-teal-200 font-bold" 
                          : "bg-rose-50 text-rose-700 border-rose-200 font-bold"
                      }`}>
                        {isAll 
                          ? "🌐 Mở toàn trường (Mọi HS)" 
                          : grades.length > 0 
                          ? `🏫 Khối: ${grades.join(", ")}` 
                          : assigned.length > 0 
                          ? `👥 Giao cho ${assigned.length} lớp/HS` 
                          : "🔒 Chưa cấp quyền (Khóa)"}
                      </span>

                      <button onClick={() => setEditState({ id: course.id, type: "course", title: course.title })} className="text-gray-400 hover:text-teal-600 p-1" title="Sửa tên khóa"><Pencil className="w-3.5 h-3.5" /></button>
                      <button onClick={() => handleDeleteCourse(course.id, course.title)} className="text-gray-400 hover:text-red-600 p-1" title="Xóa khóa học"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  )}
                  <p className="text-gray-500 text-xs sm:text-sm mt-1.5">{course.description}</p>
                </div>
              </div>

              {/* Danh sách chương & bài học */}
              <div className="space-y-4">
                {course.chapters?.sort((a:any, b:any) => a.order_index - b.order_index).map((chapter: any) => (
                  <div key={chapter.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3 group">
                      {editState?.id === chapter.id && editState.type === "chapter" ? (
                        <div className="flex items-center gap-2 flex-1">
                          <ChevronRight className="w-4 h-4 text-teal-700" />
                          <input autoFocus value={editState.title} onChange={(e) => setEditState({ ...editState, title: e.target.value })} onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()} className="font-bold text-teal-700 border-b border-teal-500 outline-none bg-transparent px-1 flex-1 max-w-sm" />
                          <button onClick={handleSaveEdit} className="text-green-600 p-1"><Check className="w-4 h-4"/></button>
                          <button onClick={() => setEditState(null)} className="text-gray-400 p-1"><X className="w-4 h-4"/></button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 font-bold text-teal-800 text-sm">
                          <ChevronRight className="w-4 h-4" /> {chapter.title}
                          <button onClick={() => setEditState({ id: chapter.id, type: "chapter", title: chapter.title })} className="text-gray-400 hover:text-teal-600 opacity-0 group-hover:opacity-100 transition ml-2"><Pencil className="w-3.5 h-3.5" /></button>
                          <button onClick={() => handleDeleteChapter(chapter.id, chapter.title)} className="text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      )}
                    </div>

                    <div className="pl-4 sm:pl-6 space-y-2">
                      {sortLessons(chapter.lessons || []).map((lesson: any) => (
                        <div key={lesson.id} className="flex flex-col bg-white p-3 rounded-xl border border-gray-100 shadow-2xs group">
                          <div className="flex items-center justify-between">
                            {editState?.id === lesson.id && editState.type === "lesson" ? (
                              <div className="flex items-center gap-2 flex-1">
                                <FileText className="w-4 h-4 text-gray-400" />
                                <input autoFocus value={editState.title} onChange={(e) => setEditState({ ...editState, title: e.target.value })} onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()} className="text-sm font-medium border-b border-teal-500 outline-none bg-transparent px-1 flex-1 max-w-sm" />
                                <button onClick={handleSaveEdit} className="text-green-600 p-1"><Check className="w-4 h-4"/></button>
                                <button onClick={() => setEditState(null)} className="text-gray-400 p-1"><X className="w-4 h-4"/></button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2.5">
                                <FileText className="w-4 h-4 text-teal-600" />
                                <span className="text-xs sm:text-sm font-bold text-slate-800">{lesson.title}</span>
                                <button onClick={() => setEditState({ id: lesson.id, type: "lesson", title: lesson.title })} className="text-gray-400 hover:text-teal-600 opacity-0 group-hover:opacity-100 transition"><Pencil className="w-3.5 h-3.5" /></button>
                                <button onClick={() => handleDeleteLesson(lesson.id, lesson.title)} className="text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"><Trash2 className="w-3.5 h-3.5" /></button>
                              </div>
                            )}
                          </div>

                          <div className="text-xs text-gray-500 flex flex-wrap gap-3 mt-2 sm:ml-6 items-center">
                             {/* Danh sách PDF */}
                             <div className="flex flex-wrap items-center gap-1.5">
                               {(() => {
                                 const currentPdfs = lesson.pdf_list || (lesson.pdf_url ? [{ name: "Tài liệu PDF", url: lesson.pdf_url }] : []);
                                 return (
                                   <>
                                     {currentPdfs.map((pdf: any, idx: number) => (
                                       <div key={idx} className="flex items-center gap-1 bg-teal-50 text-teal-700 px-2 py-0.5 rounded-lg border border-teal-200 font-bold text-[11px]">
                                         📄 <a href={pdf.url} target="_blank" rel="noreferrer" className="hover:underline max-w-[120px] truncate" title={pdf.name}>{pdf.name}</a>
                                         <button 
                                           onClick={async () => {
                                             if (!confirm(`Gỡ tài liệu "${pdf.name}"?`)) return;
                                             const newPdfList = currentPdfs.filter((_: any, i: number) => i !== idx);
                                             await updateLesson(lesson.id, { 
                                               pdf_list: newPdfList,
                                               pdf_url: newPdfList[0]?.url || null
                                             });
                                             toast.success("Đã gỡ tài liệu!");
                                           }}
                                           className="text-red-400 hover:text-red-600 ml-1 font-bold"
                                           title="Gỡ tài liệu"
                                         >
                                           ✕
                                         </button>
                                       </div>
                                     ))}
                                     <button onClick={() => handleTriggerUpload(lesson.id)} className="text-teal-700 hover:text-teal-900 font-bold text-[11px] flex items-center gap-0.5 ml-1 bg-teal-50 hover:bg-teal-100 px-2 py-0.5 rounded border border-teal-200 cursor-pointer">
                                       + Tải PDF lên
                                     </button>
                                   </>
                                 );
                               })()}
                             </div>

                             {/* Video YouTube */}
                             {lesson.video_url ? (
                               <div className="flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-0.5 rounded-lg border border-red-200 font-bold text-[11px]">
                                 <Youtube className="w-3.5 h-3.5 text-red-600" />
                                 <a href={lesson.video_url} target="_blank" rel="noreferrer" className="hover:underline truncate max-w-[130px]" title={lesson.video_url}>
                                   Video YouTube
                                 </a>
                                 <button onClick={() => setEditingVideoLesson(lesson)} className="text-indigo-600 hover:underline font-bold text-[10px] ml-1 bg-indigo-50 px-1.5 py-0.2 rounded border border-indigo-200 cursor-pointer">
                                   Câu hỏi dừng
                                 </button>
                                 <button 
                                   onClick={async () => {
                                     if (!confirm("Bạn có chắc muốn gỡ Video này?")) return;
                                     await updateLesson(lesson.id, { video_url: null, interactive_questions: [] });
                                     toast.success("Đã gỡ Video!");
                                   }}
                                   className="text-red-400 hover:text-red-600 font-bold ml-1 cursor-pointer"
                                   title="Gỡ video"
                                 >
                                   ✕
                                 </button>
                               </div>
                             ) : (
                               <button 
                                 onClick={() => { setAttachVideoLesson(lesson); setVideoUrl(""); }} 
                                 className="text-red-600 hover:text-red-800 font-bold text-[11px] flex items-center gap-0.5 bg-red-50 hover:bg-red-100 px-2 py-0.5 rounded border border-red-200 cursor-pointer"
                               >
                                 + Nhúng Video
                               </button>
                             )}

                             {/* Bài tập trắc nghiệm */}
                             <div className="flex flex-wrap items-center gap-1.5">
                               {(() => {
                                 const currentExamIds = lesson.exam_ids || (lesson.exam_id ? [lesson.exam_id] : []);
                                 return (
                                   <>
                                     {currentExamIds.map((exId: string, idx: number) => {
                                       const examObj = exams?.find((e: any) => e.id === exId);
                                       const examTitle = examObj ? examObj.title : `Đề ${idx + 1}`;
                                       return (
                                         <div key={idx} className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-lg border border-blue-200 font-bold text-[11px]">
                                           📝 <span className="max-w-[130px] truncate" title={examTitle}>{examTitle}</span>
                                           <button 
                                             onClick={async () => {
                                               if (!confirm(`Gỡ bài tập "${examTitle}"?`)) return;
                                               const newExamIds = currentExamIds.filter((id: string) => id !== exId);
                                               await updateLesson(lesson.id, { 
                                                 exam_ids: newExamIds,
                                                 exam_id: newExamIds[0] || null
                                               });
                                               toast.success("Đã gỡ bài tập!");
                                             }}
                                             className="text-red-400 hover:text-red-600 ml-1 font-bold cursor-pointer"
                                             title="Gỡ bài tập"
                                           >
                                             ✕
                                           </button>
                                         </div>
                                       );
                                     })}
                                     <button 
                                       onClick={() => {
                                         setAttachExamLesson(lesson);
                                         setSelectedExamId("");
                                       }} 
                                       className="text-blue-600 hover:text-blue-800 font-bold text-[11px] flex items-center gap-0.5 bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded border border-blue-200 cursor-pointer"
                                     >
                                       + Gắn Bài tập
                                     </button>
                                   </>
                                 );
                               })()}
                             </div>
                          </div>
                        </div>
                      ))}
                      <button onClick={() => handleAddLesson(chapter.id)} className="text-xs text-teal-700 font-bold hover:underline mt-2 inline-block cursor-pointer">+ Thêm bài học mới</button>
                    </div>
                  </div>
                ))}
                <button onClick={() => handleAddChapter(course.id)} className="btn-outline w-full text-xs py-2 cursor-pointer">+ Thêm chương mới</button>
              </div>
            </div>
          )
        })}

        {(!displayedCourses || displayedCourses.length === 0) && (
          <div className="text-center py-12 text-gray-500 bg-white rounded-2xl border border-dashed border-gray-300">
            Chưa có khóa học nào thuộc {activeGrade === "others" ? "danh mục Khác / Lấy Gốc" : `Khối ${activeGrade}`}.
          </div>
        )}
      </div>

      {/* ── MODAL: TẠO KHÓA HỌC MỚI ── */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Tạo khóa học mới">
         <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Tên khóa học</label>
              <input type="text" value={newCourseTitle} onChange={e => setNewCourseTitle(e.target.value)} className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-teal-500 font-bold text-sm" placeholder="Ví dụ: Hóa Học 12 - Chương Trình Mới 2025" autoFocus />
            </div>
            <p className="text-xs text-slate-500 italic">
              Khóa học mới tạo sẽ mặc định được cấp quyền mở cho toàn bộ học sinh để các em vào học được ngay.
            </p>
            <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
              <button onClick={() => setModalOpen(false)} className="btn-outline px-4 py-2">Hủy</button>
              <button onClick={handleCreateCourse} className="btn-teal px-6 py-2 shadow-md">Lưu khóa học</button>
            </div>
         </div>
      </Modal>

      {/* ── MODAL CHUYÊN NGHIỆP: CẤP QUYỀN TRUY CẬP KHÓA HỌC ── */}
      <Modal open={!!assigningCourse} onClose={() => setAssigningCourse(null)} title="🔑 Cấp Quyền Truy Cập Khóa Học">
         <div className="space-y-5">
            {/* Tóm tắt khóa học & Trạng thái xuất bản */}
            <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-black uppercase text-teal-800 tracking-wider">Đang cấp quyền khóa:</span>
                <h4 className="text-base font-black text-teal-950 mt-0.5">{assigningCourse?.title}</h4>
              </div>

              {/* Nút bật/tắt Xuất bản ngay trong modal */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsPublishedInModal(!isPublishedInModal)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer ${
                    isPublishedInModal
                      ? "bg-emerald-600 text-white ring-2 ring-emerald-400/40"
                      : "bg-amber-100 text-amber-900 border border-amber-300"
                  }`}
                >
                  {isPublishedInModal ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                  <span>{isPublishedInModal ? "ĐÃ XUẤT BẢN (HS Xem Được)" : "BẢN NHÁP (Đang Ẩn)"}</span>
                </button>
              </div>
            </div>

            {/* TAB CHUYỂN ĐỔI CHẾ ĐỘ PHÂN QUYỀN */}
            <div className="flex border-b border-slate-200 gap-2">
              <button
                type="button"
                onClick={() => setAssignModalTab("quick")}
                className={`pb-2.5 px-3 text-xs font-black transition-all flex items-center gap-1.5 border-b-2 cursor-pointer ${
                  assignModalTab === "quick"
                    ? "border-teal-600 text-teal-700"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> Cấp Quyền Nhanh (Toàn Trường / Khối)
              </button>

              <button
                type="button"
                onClick={() => setAssignModalTab("classes")}
                className={`pb-2.5 px-3 text-xs font-black transition-all flex items-center gap-1.5 border-b-2 cursor-pointer ${
                  assignModalTab === "classes"
                    ? "border-teal-600 text-teal-700"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Users className="w-3.5 h-3.5" /> Theo Lớp Học ({selectedClassIds.length})
              </button>

              <button
                type="button"
                onClick={() => setAssignModalTab("students")}
                className={`pb-2.5 px-3 text-xs font-black transition-all flex items-center gap-1.5 border-b-2 cursor-pointer ${
                  assignModalTab === "students"
                    ? "border-teal-600 text-teal-700"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" /> Theo Học Sinh ({selectedStudentIds.length})
              </button>
            </div>

            {/* NỘI DUNG TAB 1: CẤP QUYỀN NHANH */}
            {assignModalTab === "quick" && (
              <div className="space-y-4">
                {/* 1. Mở toàn trường */}
                <label className={`flex items-start gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  isOpenToAll ? "bg-emerald-50/90 border-emerald-500 ring-2 ring-emerald-400/20" : "bg-white border-slate-200 hover:border-teal-300"
                }`}>
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-emerald-600 rounded mt-0.5 cursor-pointer"
                    checked={isOpenToAll}
                    onChange={(e) => setIsOpenToAll(e.target.checked)}
                  />
                  <div>
                    <div className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                      <span>🌐 MỞ CÔNG KHAI CHO TOÀN BỘ HỌC SINH</span>
                      <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">Khuyên dùng</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Bất kỳ học sinh nào đăng nhập vào cổng thi đều có thể vào học khóa này. Rất thích hợp cho khóa "Lấy Gốc Toán", chuyên đề ôn tập chung hoặc khóa học dùng chung toàn trường.
                    </p>
                  </div>
                </label>

                {/* 2. Cấp quyền theo Khối lớp */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-800 uppercase flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-teal-600" />
                      Cấp Quyền Theo Khối Lớp:
                    </span>
                    <span className="text-[11px] text-slate-500 italic">Bấm để chọn khối được học</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[12, 11, 10, 9, 8, 7, 6].map((g) => {
                      const gradeStr = String(g);
                      const isSelected = selectedGrades.includes(gradeStr);
                      return (
                        <button
                          key={g}
                          type="button"
                          onClick={() => {
                            if (isSelected) setSelectedGrades(selectedGrades.filter(x => x !== gradeStr));
                            else setSelectedGrades([...selectedGrades, gradeStr]);
                          }}
                          className={`py-2.5 px-3 rounded-xl border-2 font-black text-xs transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-teal-600 border-teal-600 text-white shadow-xs"
                              : "bg-white border-slate-200 text-slate-700 hover:border-teal-300"
                          }`}
                        >
                          <span>Khối {g}</span>
                          {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5 text-slate-400" />}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[11px] text-slate-500">
                    💡 Học sinh đăng ký khối nào sẽ tự động nhìn thấy khóa học này trên trang cá nhân của mình.
                  </p>
                </div>
              </div>
            )}

            {/* NỘI DUNG TAB 2: THEO LỚP HỌC */}
            {assignModalTab === "classes" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600">
                    Đã chọn <strong className="text-teal-700 font-black">{selectedClassIds.length}</strong> / {myClasses.length} lớp
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedClassIds(myClasses.map((c: any) => c.id))}
                      className="text-xs font-bold text-teal-700 hover:underline cursor-pointer"
                    >
                      Chọn tất cả
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      type="button"
                      onClick={() => setSelectedClassIds([])}
                      className="text-xs font-bold text-slate-500 hover:underline cursor-pointer"
                    >
                      Bỏ chọn hết
                    </button>
                  </div>
                </div>

                <div className="max-h-64 overflow-y-auto space-y-2 border border-slate-200 rounded-2xl p-3 bg-slate-50">
                  {myClasses.length === 0 && (
                    <p className="text-xs text-slate-500 text-center py-6">Chưa có lớp học nào trong hệ thống.</p>
                  )}
                  {myClasses.map((cls: any) => {
                    const isSelected = selectedClassIds.includes(cls.id);
                    const displayName = cls.name || cls.class_name || cls.code || "Lớp học";
                    return (
                      <label 
                        key={cls.id} 
                        className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                          isSelected ? "border-teal-500 bg-teal-50/80 shadow-2xs" : "border-slate-200 bg-white hover:border-teal-300"
                        }`}
                      >
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 text-teal-600 rounded cursor-pointer"
                          checked={isSelected}
                          onChange={(e) => {
                            if (e.target.checked) setSelectedClassIds([...selectedClassIds, cls.id]);
                            else setSelectedClassIds(selectedClassIds.filter(id => id !== cls.id));
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-black text-slate-900 text-xs sm:text-sm truncate">{displayName}</p>
                          <p className="text-[11px] text-slate-500 font-medium">
                            {cls.subject || "Môn học"} • Khối {cls.grade || "--"} • {cls.schedule || "Chưa có lịch"}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* NỘI DUNG TAB 3: THEO HỌC SINH */}
            {assignModalTab === "students" && (
              <div className="space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={studentSearchQuery}
                    onChange={(e) => setStudentSearchQuery(e.target.value)}
                    placeholder="Tìm theo tên học sinh, mã số (VD: 6002, Phương)..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold outline-none focus:border-teal-500 bg-white"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Đã chọn riêng <strong className="text-teal-700 font-black">{selectedStudentIds.length}</strong> học sinh</span>
                  {selectedStudentIds.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedStudentIds([])}
                      className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                    >
                      Xóa chọn hết
                    </button>
                  )}
                </div>

                <div className="max-h-64 overflow-y-auto space-y-1.5 border border-slate-200 rounded-2xl p-2 bg-slate-50">
                  {filteredStudents.length === 0 && (
                    <p className="text-xs text-slate-500 text-center py-6">Không tìm thấy học sinh nào phù hợp.</p>
                  )}
                  {filteredStudents.map((st: any) => {
                    const isSelected = selectedStudentIds.includes(st.id);
                    return (
                      <label
                        key={st.id}
                        className={`flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected ? "border-teal-500 bg-teal-50" : "border-slate-200 bg-white hover:border-teal-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-teal-600 rounded cursor-pointer"
                          checked={isSelected}
                          onChange={(e) => {
                            if (e.target.checked) setSelectedStudentIds([...selectedStudentIds, st.id]);
                            else setSelectedStudentIds(selectedStudentIds.filter(id => id !== st.id));
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <span className="font-black text-slate-900 text-xs truncate block">{st.full_name}</span>
                          <span className="text-[10px] text-slate-500 font-mono">#{st.student_code} • {st.grade || "Khối"}</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* FOOTER ACTIONS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                {isOpenToAll ? "🌐 Đang chọn: Mở toàn trường" : `Đã chọn: ${selectedGrades.length} khối · ${selectedClassIds.length} lớp · ${selectedStudentIds.length} HS`}
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button 
                  type="button" 
                  onClick={() => setAssigningCourse(null)} 
                  className="btn-outline px-4 py-2 text-xs font-bold cursor-pointer"
                >
                  Hủy
                </button>
                <button 
                  type="button" 
                  onClick={handleSaveAssignPermissions} 
                  className="btn-teal px-6 py-2.5 text-xs font-black shadow-md shadow-teal-600/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <Key className="w-3.5 h-3.5 text-amber-300" />
                  <span>LƯU CÀI ĐẶT CẤP QUYỀN</span>
                </button>
              </div>
            </div>
         </div>
      </Modal>

      {/* ── MODAL NHÚNG VIDEO YOUTUBE ── */}
      <Modal open={!!attachVideoLesson} onClose={() => setAttachVideoLesson(null)} title="Nhúng Video YouTube">
         <div className="space-y-4">
            <p className="text-sm text-gray-600">Bài học: <strong className="text-red-600">{attachVideoLesson?.title}</strong></p>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Link YouTube</label>
              <input type="text" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-red-500 font-bold text-sm" placeholder="https://www.youtube.com/watch?v=..." autoFocus />
            </div>
            <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
              <button onClick={() => { setAttachVideoLesson(null); setVideoUrl(""); }} className="btn-outline px-4 py-2 cursor-pointer">Hủy</button>
              <button onClick={handleSaveVideo} className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-xl shadow-md flex items-center gap-2 cursor-pointer">
                <Youtube className="w-4 h-4"/> Lưu Video
              </button>
            </div>
         </div>
      </Modal>

      {/* ── MODAL GẮN BÀI TẬP CHO BÀI HỌC ── */}
      <Modal open={!!attachExamLesson} onClose={() => setAttachExamLesson(null)} title="Gắn bài tập cho Bài học">
         <div className="space-y-5">
            <p className="text-sm text-gray-600">Bài học: <strong className="text-teal-700">{attachExamLesson?.title}</strong></p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <div className="flex justify-between items-end mb-2">
                <label className="block text-sm font-bold text-gray-700">Chọn Đề thi từ Ngân hàng</label>
                <button onClick={handleRefreshExams} disabled={isRefreshingExams} className="text-xs text-teal-600 font-bold hover:underline flex items-center gap-1 cursor-pointer">
                  <RefreshCw className={`w-3 h-3 ${isRefreshingExams ? "animate-spin" : ""}`} /> Làm mới
                </button>
              </div>
              <select value={selectedExamId} onChange={e => setSelectedExamId(e.target.value)} className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-teal-500 font-bold text-sm bg-white cursor-pointer">
                <option value="">-- Click để chọn đề thi --</option>
                {exams?.map((ex: any) => <option key={ex.id} value={ex.id}>{ex.title}</option>)}
              </select>
            </div>
            <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
              <button onClick={() => { setAttachExamLesson(null); setSelectedExamId(""); }} className="btn-outline px-4 py-2 cursor-pointer">Hủy</button>
              <button onClick={handleSaveAttachExam} className="btn-teal px-6 py-2 shadow-md cursor-pointer">Gắn bài tập</button>
            </div>
         </div>
      </Modal>

      {editingVideoLesson && (
        <InteractiveVideoEditor 
          lesson={editingVideoLesson} 
          onClose={() => setEditingVideoLesson(null)} 
          onSave={async (questions) => {
            await updateLesson(editingVideoLesson.id, { interactive_questions: questions });
            setEditingVideoLesson(null);
            toast.success("Lưu cài đặt câu hỏi thành công!");
          }} 
        />
      )}

    </div>
  )
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result?.toString().split(",")[1] || "")
    reader.readAsDataURL(file)
  })
}
