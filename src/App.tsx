// @ts-nocheck
import React, { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import Layout from '@/components/Layout'

// Pages Học sinh & Cốt lõi (Load trực tiếp để tốc độ phản hồi tức thì)
import Login from '@/pages/Login'
import StudentPortal from '@/pages/StudentPortal'
import ExamRoomPage from '@/pages/ExamRoomPage'
import Hoa12Page from '@/pages/Hoa12Page'

// Lazy Load các Pages Quản lý (CRM), Công cụ nặng, Chấm thi AI giúp tối ưu tải trang siêu tốc
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Classes = lazy(() => import('@/pages/Classes'))
const Students = lazy(() => import('@/pages/Students'))
const Attendance = lazy(() => import('@/pages/Attendance'))
const Tuition = lazy(() => import('@/pages/Tuition'))
const EmailCenter = lazy(() => import('@/pages/EmailCenter'))
const UserMgmt = lazy(() => import('@/pages/UserMgmt'))

// Pages Thi cử & Học liệu nâng cao
const ExamMgmt = lazy(() => import('@/pages/ExamMgmt'))
const ExamRoomsMgmt = lazy(() => import('@/pages/ExamRoomsMgmt'))
const ExamResultsPage = lazy(() => import('@/pages/ExamResultsPage'))
const LiveClassroomPage = lazy(() => import('@/pages/LiveClassroomPage'))
const CasioCalculatorPage = lazy(() => import('@/pages/CasioCalculatorPage'))
const CreatePdfExamPage = lazy(() => import('@/pages/CreatePdfExamPage'))
const CreateTexExamPage = lazy(() => import('@/pages/CreateTexExamPage'))
const CreateWorksheetPage = lazy(() => import('@/pages/CreateWorksheetPage'))
const WhiteboardPage = lazy(() => import('@/pages/WhiteboardPage'))
const LayGocToanPage = lazy(() => import('@/pages/LayGocToanPage'))
// Hoa12Page loaded eagerly above

// Pages Khóa học
const CourseMgmt = lazy(() => import('@/pages/CourseMgmt'))
const StudentCourseViewer = lazy(() => import('@/pages/StudentCourseViewer'))

// Pages Chấm thi AI & BTVN
const PhieuGrader = lazy(() => import('@/pages/PhieuGrader'))
const HomeworkMgmt = lazy(() => import('@/pages/HomeworkMgmt'))
const StudentSubmitHomeworkPage = lazy(() => import('@/homework/StudentSubmitHomeworkPage'))

// Pages Công cụ bổ trợ
const OcrToolPage = lazy(() => import('@/pages/OcrToolPage'))
const LatexToolsPage = lazy(() => import('@/pages/LatexToolsPage'))
const WordToolsPage = lazy(() => import('@/pages/WordToolsPage'))
const NhanVoPage = lazy(() => import('@/pages/NhanVoPage'))

// Pages Thẻ học viên & Tiến trình
const StudentCards = lazy(() => import('@/pages/StudentCards'))
const StudentProgressPage = lazy(() => import('@/pages/StudentProgressPage'))
const ZaloCenter = lazy(() => import('@/pages/ZaloCenter'))
const PublicInvoicePage = lazy(() => import('@/pages/PublicInvoicePage'))
const DebtPlannerPage = lazy(() => import('@/pages/DebtPlannerPage'))

// --- PHỤ TRỢ: LOADER ---
function Spinner() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-teal-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-teal-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="text-teal-700 text-sm font-bold tracking-widest animate-pulse uppercase">Lớp Học Thầy Thọ</p>
    </div>
  )
}

// --- BẢO VỆ ĐƯỜNG DẪN (Auth Guard) ---
interface ProtectedRouteProps {
  children: React.ReactNode
  adminOnly?: boolean
}

function ProtectedRoute({ children, adminOnly = false }: ProtectedRouteProps) {
  const { user, loading, isAdmin } = useAuthStore()

  if (loading) return <Spinner />
  if (!user) return <Navigate to="/login" replace />
  if (adminOnly && !isAdmin()) return <Navigate to="/" replace />

  return <>{children}</>
}

export default function App() {
  const { init, loading } = useAuthStore()

  useEffect(() => {
    void init()
  }, [init])

  if (loading) return <Spinner />

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {/* 1. CỔNG CÔNG KHAI DÀNH CHO HỌC SINH VÀ ĐĂNG NHẬP */}
        <Route path="/login"    element={<Login />} />
        <Route path="/thi"      element={<StudentPortal />} />
        <Route path="/lay-goc"  element={<LayGocToanPage isPublic={true} />} />
        <Route path="/hoa12"    element={<Hoa12Page />} />
        <Route path="/hoa-12"   element={<Hoa12Page />} />
        <Route path="/chuong-1" element={<Hoa12Page />} />
        <Route path="/hoa12-chuong1" element={<Hoa12Page defaultChapter={1} />} />
        <Route path="/hoa12-chuong5" element={<Hoa12Page defaultChapter={5} />} />
        <Route path="/chuong-5" element={<Hoa12Page defaultChapter={5} />} />
        {/* CỔNG TRA CỨU HÓA ĐƠN ĐIỆN TỬ DÀNH CHO PHỤ HUYNH */}
        <Route path="/hoa-don/:invoiceId" element={<PublicInvoicePage />} />
        <Route path="/hoa-don"            element={<PublicInvoicePage />} />
        <Route path="/invoice/:invoiceId" element={<PublicInvoicePage />} />
        <Route path="/invoice"            element={<PublicInvoicePage />} />
        {/* CỔNG NỘP BÀI TẬP VỀ NHÀ DÀNH CHO HỌC SINH (CHUẨN AZOTA) */}
        <Route path="/nop-bai/:assignmentId" element={<StudentSubmitHomeworkPage />} />
        <Route path="/nop-bai"               element={<StudentSubmitHomeworkPage />} />
        <Route path="/bai-tap/:assignmentId" element={<StudentSubmitHomeworkPage />} />
        <Route path="/bai-tap"               element={<StudentSubmitHomeworkPage />} />

        {/* PHÒNG HỌC LIVE CỐ ĐỊNH THEO SỐ ĐIỆN THOẠI THẦY THỌ */}
        <Route path="/whiteboard" element={<WhiteboardPage />} />
        <Route path="/bang-ve"    element={<WhiteboardPage />} />
        <Route path="/casio"       element={<CasioCalculatorPage />} />
        <Route path="/may-tinh-casio" element={<CasioCalculatorPage />} />
        <Route path="/0345833133"   element={<LiveClassroomPage />} />
        <Route path="/0345.833.133" element={<LiveClassroomPage />} />
        <Route path="/live"         element={<LiveClassroomPage />} />
        <Route path="/live/:roomId" element={<LiveClassroomPage />} />
        <Route path="/progress" element={<StudentProgressPage />} />

        {/* 2. PHÒNG THI & XEM KHÓA HỌC (Giao diện tập trung) */}
        <Route path="/exam-room/:roomId"                    element={<ExamRoomPage />} />
        <Route path="/course-viewer/:courseId/:studentId"   element={<StudentCourseViewer />} />

        {/* 3. HỆ THỐNG QUẢN TRỊ (Phải đăng nhập) */}
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>

          {/* --- Nhóm Quản lý Đào tạo --- */}
          <Route index element={<Dashboard />} />
          <Route path="classes"    element={<Classes />} />
          <Route path="students"   element={<Students />} />
          <Route path="attendance" element={<Attendance />} />

          {/* --- Nhóm Học liệu & Thi cử --- */}
          <Route path="courses"              element={<CourseMgmt />} />
          <Route path="exams"                element={<ExamMgmt />} />
          <Route path="create-pdf-exam"      element={<CreatePdfExamPage />} />
          <Route path="create-tex-exam"      element={<CreateTexExamPage />} />
          <Route path="create-worksheet"     element={<CreateWorksheetPage />} />
          <Route path="exam-rooms"           element={<ExamRoomsMgmt />} />
          <Route path="exam-results/:roomId" element={<ExamResultsPage />} />
          <Route path="phieu-grader"         element={<PhieuGrader />} />
          <Route path="homework"             element={<HomeworkMgmt />} />
          <Route path="lay-goc-toan"         element={<LayGocToanPage isPublic={false} />} />
          <Route path="lay-goc"              element={<LayGocToanPage isPublic={false} />} />
          <Route path="hoa12"                 element={<Hoa12Page />} />
          <Route path="hoa-12"                element={<Hoa12Page />} />

          {/* --- Nhóm Công cụ chuyên dụng --- */}
          <Route path="whiteboard"    element={<WhiteboardPage />} />
          <Route path="bang-ve"       element={<WhiteboardPage />} />
          <Route path="ocr"            element={<OcrToolPage />} />
          <Route path="latex-tools"    element={<LatexToolsPage />} />
          <Route path="word-tools"     element={<WordToolsPage />} />
          <Route path="casio"          element={<CasioCalculatorPage />} />
          <Route path="student-labels" element={<NhanVoPage />} />

          {/* --- Nhóm Hệ thống (Chỉ Admin) --- */}
          <Route path="debt-planner"  element={<ProtectedRoute adminOnly><DebtPlannerPage /></ProtectedRoute>} />
          <Route path="zalo"          element={<ProtectedRoute adminOnly><ZaloCenter /></ProtectedRoute>} />
          <Route path="student-cards" element={<ProtectedRoute adminOnly><StudentCards /></ProtectedRoute>} />
          <Route path="tuition"       element={<ProtectedRoute adminOnly><Tuition /></ProtectedRoute>} />
          <Route path="email"         element={<ProtectedRoute adminOnly><EmailCenter /></ProtectedRoute>} />
          <Route path="users"         element={<ProtectedRoute adminOnly><UserMgmt /></ProtectedRoute>} />

        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
