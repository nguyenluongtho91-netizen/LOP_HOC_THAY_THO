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
const PublicPortalHub = lazy(() => import('@/pages/PublicPortalHub'))
const Hoa10Page = lazy(() => import('@/pages/Hoa10Page'))
const Hoa11Page = lazy(() => import('@/pages/Hoa11Page'))

// Lazy Load các Pages Quản lý (CRM), Công cụ nặng, Chấm thi AI giúp tối ưu tải trang siêu tốc
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const ThcsManagementHub = lazy(() => import('@/pages/ThcsManagementHub'))
const ThptManagementHub = lazy(() => import('@/pages/ThptManagementHub'))
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

function RootRouteWrapper() {
  const { user } = useAuthStore()
  if (user) {
    return (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    )
  }
  return <PublicPortalHub />
}

export default function App() {
  const { user, init, loading } = useAuthStore()

  useEffect(() => {
    void init()
  }, [init])

  if (loading) return <Spinner />

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {/* 1. CỔNG CÔNG KHAI DÀNH CHO HỌC SINH VÀ HỌC LIỆU TOÀN DIỆN */}
                {/* CỔNG QUẢN TRỊ THPT TRỰC TIẾP */}
        <Route path="/thpt"            element={<ThptManagementHub />} />
        <Route path="/thpt/hoa"        element={<ThptManagementHub defaultSubject="Hóa" />} />
        <Route path="/thpt/toan"       element={<ThptManagementHub defaultSubject="Toán" />} />
        <Route path="/portal"   element={<PublicPortalHub />} />
        <Route path="/hub"      element={<PublicPortalHub />} />
        <Route path="/trang-chu" element={<PublicPortalHub />} />
        <Route path="/login"    element={<Login />} />
        <Route path="/thi"      element={<StudentPortal />} />
        <Route path="/lay-goc"  element={<LayGocToanPage isPublic={true} />} />

        {/* HỌC LIỆU HÓA HỌC KHỐI 10 */}
        <Route path="/hoa10"    element={<Hoa10Page />} />
        <Route path="/hoa-10"   element={<Hoa10Page />} />
        <Route path="/hoa10-chuong1" element={<Hoa10Page defaultChapter={1} />} />
        <Route path="/hoa10-chuong2" element={<Hoa10Page defaultChapter={2} />} />

        {/* HỌC LIỆU HÓA HỌC KHỐI 11 */}
        <Route path="/hoa11"    element={<Hoa11Page />} />
        <Route path="/hoa-11"   element={<Hoa11Page />} />
        <Route path="/hoa11-chuong1" element={<Hoa11Page defaultChapter={1} />} />
        <Route path="/hoa11-chuong2" element={<Hoa11Page defaultChapter={2} />} />
        <Route path="/hoa11-chuong3" element={<Hoa11Page defaultChapter={3} />} />
        <Route path="/hoa11-chuong4" element={<Hoa11Page defaultChapter={4} />} />
        <Route path="/hoa11-chuong5" element={<Hoa11Page defaultChapter={5} />} />
        <Route path="/hoa11-chuong6" element={<Hoa11Page defaultChapter={6} />} />

        {/* HỌC LIỆU HÓA HỌC KHỐI 12 */}
        <Route path="/hoa12"    element={<Hoa12Page />} />
        <Route path="/hoa-12"   element={<Hoa12Page />} />
        <Route path="/chuong-1" element={<Hoa12Page defaultChapter={1} />} />
        <Route path="/hoa12-chuong1" element={<Hoa12Page defaultChapter={1} />} />
        <Route path="/hoa12-chuong2" element={<Hoa12Page defaultChapter={2} />} />
        <Route path="/chuong-2" element={<Hoa12Page defaultChapter={2} />} />
        <Route path="/hoa12-chuong3" element={<Hoa12Page defaultChapter={3} />} />
        <Route path="/chuong-3" element={<Hoa12Page defaultChapter={3} />} />
        <Route path="/hoa12-chuong4" element={<Hoa12Page defaultChapter={4} />} />
        <Route path="/chuong-4" element={<Hoa12Page defaultChapter={4} />} />
        <Route path="/hoa12-chuong5" element={<Hoa12Page defaultChapter={5} />} />
        <Route path="/hoa12-chuong6" element={<Hoa12Page defaultChapter={6} />} />
        <Route path="/hoa12-chuong7" element={<Hoa12Page defaultChapter={7} />} />
        <Route path="/hoa12-chuong8" element={<Hoa12Page defaultChapter={8} />} />
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

        {/* 3. HỆ THỐNG QUẢN TRỊ & CỔNG HỌC LIỆU CHÍNH */}
        <Route path="/" element={<RootRouteWrapper />}>

          {/* --- Nhóm Quản lý Đào tạo --- */}
          <Route index element={<Dashboard />} />
          <Route path="classes"    element={<Classes />} />
          <Route path="students"   element={<Students />} />
          <Route path="attendance" element={<Attendance />} />

          {/* --- Nhóm Quản lý Phân Khối THCS & THPT --- */}
          <Route path="thcs"            element={<ThcsManagementHub />} />
          <Route path="thcs/toan"       element={<ThcsManagementHub defaultSubject="Toán" />} />
          <Route path="thcs/hoa"        element={<ThcsManagementHub defaultSubject="Hóa" />} />

          <Route path="thpt"            element={<ThptManagementHub />} />
          <Route path="thpt/toan"       element={<ThptManagementHub defaultSubject="Toán" />} />
          <Route path="thpt/hoa"        element={<ThptManagementHub defaultSubject="Hóa" />} />

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

        <Route path="/admin" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
