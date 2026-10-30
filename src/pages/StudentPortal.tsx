// @ts-nocheck
import React, { useEffect, useState, useMemo, Suspense, lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  LogOut, 
  ChevronRight, 
  BookOpen, 
  UserCircle, 
  GraduationCap, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  Lock, 
  FileText, 
  CheckCircle, 
  Clock,
  RefreshCw,
  Camera,
  Upload,
  Trash2,
  X,
  Loader2,
  Key,
  Sparkles,
  Trophy,
  Target,
  CheckCircle2,
  ArrowRight,
  Layers,
  ShieldCheck,
  FlaskConical,
  Calculator,
  Atom,
  Flame,
  Compass
} from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { 
  isPracticeExam, 
  isPracticeClassName, 
  isChapterClassName, 
  getExamCategory, 
  getCategoryMeta, 
  ExamCategory 
} from '@/utils/practiceExamHelper'
import toast from 'react-hot-toast'
import { fetchHoa12AccessConfig, getHoa12AccessConfigSync, grantAllStudentsAccess, revokeAllStudentsAccess, isChapterLocked, isGradeLocked, isCategoryLocked, isCourseLocked, type GranularAccessConfig } from '@/services/hoa12AccessControlService'
import { format } from 'date-fns'
import { shuffleExamForStudent } from '@/services/mergeExamsService'
import { normalizeExamData } from '@/services/examNormalizer'
import { getStudentCredential, saveStudentCredential } from '@/services/studentCredentialsService'

// Lazy load Chapter 1 to keep StudentPortal initial load blazing fast
// Hoa12Chuong1View loaded on-demand via route /hoa12;

const BANK_ID      = import.meta.env.VITE_BANK_ID      || 'VCB'
const BANK_ACCOUNT = import.meta.env.VITE_BANK_ACCOUNT || '1070493932'
const BANK_NAME    = import.meta.env.VITE_BANK_NAME    || import.meta.env.VITE_BANK_ACCOUNT_NAME || 'HO KINH DOANH NGUYEN LUONG THO'

export default function StudentPortal() {
  const navigate = useNavigate()
  const [student, setStudent] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Đăng nhập form
  const [studentCodeInput, setStudentCodeInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  // Danh sách bài thi và bài làm
  const [examsList, setExamsList] = useState<any[]>([])
  const [submissionsList, setSubmissionsList] = useState<any[]>([])
  const [tuitionNotifications, setTuitionNotifications] = useState<any[]>([])

  // Đổi mật khẩu
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showOldPass, setShowOldPass] = useState(false)
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  // Đổi ảnh đại diện
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false)
  const [selectedAvatarFile, setSelectedAvatarFile] = useState<File | null>(null)
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState<string | null>(null)
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false)

  // Quản lý Tab hiển thị: 'homework' (1. BÀI TẬP VỀ NHÀ) | 'chapter' (2. LUYỆN ĐỀ THEO CHƯƠNG) | 'practice' (3. LUYỆN ĐỀ THI) | 'survey' (4. KHẢO SÁT CHẤT LƯỢNG) | 'all' (Tất cả)
  const [activeTab, setActiveTab] = useState<'homework' | 'chapter' | 'practice' | 'survey' | 'all'>('homework')
  const [accessConfig, setAccessConfig] = useState<GranularAccessConfig>(() => getHoa12AccessConfigSync())
  // Modal Cảnh Báo Quy Chế (Chỉ hiện khi học sinh bấm vào bài thi)
  const [examRuleModalTarget, setExamRuleModalTarget] = useState<{
    type: 'room' | 'hoa12_c1' | 'hoa12_c5';
    id?: string;
    title: string;
    hasSub?: boolean;
  } | null>(null)
  const [enrolledClasses, setEnrolledClasses] = useState<any[]>([])
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([])

  // Xác định rõ ràng quyền Thầy giáo / Quản trị viên (Khởi tạo trước để tránh lỗi TDZ)
  // Ưu tiên kiểm tra: Nếu đang đăng nhập bằng tài khoản Học sinh (không phải THAYTHO), tuyệt đối coi là Học sinh!
  const isTeacherUser = useMemo(() => {
    if (student) {
      const code = String(student.student_code || '').toUpperCase().trim();
      const role = String(student.role || '').toUpperCase();
      const name = String(student.full_name || '').toLowerCase();
      // Chỉ khi mã là THAYTHO hoặc role là ADMIN/TEACHER thật sự thì mới là Thầy giáo
      return code === 'THAYTHO' || role === 'ADMIN' || role === 'TEACHER' || name.includes('thọ');
    }
    if (typeof window !== 'undefined') {
      return localStorage.getItem('is_teacher_mode') === 'true' || 
             localStorage.getItem('role') === 'teacher' || 
             localStorage.getItem('role') === 'admin';
    }
    return false;
  }, [student]);

  const isFreeCandidate = isTeacherUser;

  // Xác định học sinh Khối 12 hoặc Thầy giáo (Tài liệu lớp nào chỉ hiện cho lớp đó)
  const isGrade12 = useMemo(() => {
    if (!student) return true; // Khách / chưa đăng nhập
    const code = String(student.student_code || '').toUpperCase().trim();
    const name = String(student.full_name || '').toLowerCase();
    const role = String(student.role || '').toUpperCase();
    if (code === 'THAYTHO' || code === 'TUDO' || name.includes('thọ') || role === 'ADMIN' || role === 'TEACHER') {
      return true;
    }
    const g = String(student.grade || '').toLowerCase().trim();
    if (g.includes('12') || g.includes('khối 12') || g.includes('lớp 12')) {
      return true;
    }
    if (Array.isArray(enrolledClasses) && enrolledClasses.some(c => String(c?.class_name || '').includes('12'))) {
      return true;
    }
    return false;
  }, [student, enrolledClasses]);

  // Lọc danh sách khóa học thực sự hiển thị cho học sinh (Mặc định ẩn hết, chỉ khi Thầy mở/gán quyền cho HS thì mới thấy)
  const visibleCourses = useMemo(() => {
    return (enrolledCourses || []).filter((c: any) => {
      if (isTeacherUser) return true;
      if (!c.is_published) return false;
      return !isCourseLocked(c, false, accessConfig);
    });
  }, [enrolledCourses, accessConfig, isTeacherUser]);

  // Tự động đồng bộ quyền truy cập và trạng thái khóa/mở từ Supabase Cloud
  useEffect(() => {
    fetchHoa12AccessConfig().then((cfg) => setAccessConfig({ ...cfg }));
  }, []);

  useEffect(() => {
    const sessionStr = localStorage.getItem('current_student')
    if (sessionStr) {
      try {
        const parsed = JSON.parse(sessionStr)
        setStudent(parsed)
        const g = String(parsed?.grade || '').toLowerCase()
        if (g.includes('12') || g.includes('khối 12')) {
          setActiveTab('homework')
        }
        if (parsed?.id) {
          fetchStudentData(parsed.id)
        } else {
          setLoading(false)
        }
      } catch (err) {
        console.error('Failed to parse student session:', err)
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }, [])

  // ── Tải danh sách bài thi và kết quả làm bài ─────────────────
  const fetchStudentData = async (studentId: string) => {
    setLoading(true)
    try {
      // 0. Cập nhật lại dữ liệu học sinh mới nhất từ DB
      const { data: latestStudent } = await supabase
        .from('students')
        .select('*')
        .eq('id', studentId)
        .maybeSingle()

      if (latestStudent) {
        const cred = await getStudentCredential(latestStudent.student_code)
        if (cred?.avatar_url) {
          latestStudent.avatar_url = cred.avatar_url
        }
        setStudent(latestStudent)
        localStorage.setItem('current_student', JSON.stringify(latestStudent))
      }

      // 1. Lấy danh sách lớp học sinh tham gia
      const { data: enrolls } = await supabase
        .from('enrollments')
        .select('class_id, classes(*)')
        .eq('student_id', studentId)
        .eq('status', 'active')

      const myClassIds = enrolls?.map(e => e.class_id) || []
      let myClasses = (enrolls || [])
        .map((e: any) => ({
          id: e.class_id,
          class_name: e.classes?.class_name || e.classes?.name || ''
        }))
        .filter((c: any) => c.class_name)

      if (myClasses.length === 0 && myClassIds.length > 0) {
        const { data: clsData } = await supabase
          .from('classes')
          .select('*')
          .in('id', myClassIds)
        if (clsData) {
          myClasses = clsData.map((c: any) => ({
            id: c.id,
            class_name: c.class_name || c.name || ''
          }))
        }
      }
      setEnrolledClasses(myClasses)

      // 1.1. Lấy thông báo học phí chưa thanh toán
      const { data: tuitionNotifs, error: tuitionErr } = await supabase
        .from('tuition_notifications')
        .select('*')
        .eq('student_id', studentId)
        .eq('is_paid', false)

      if (tuitionErr) {
        console.error('Lỗi tải thông báo học phí:', tuitionErr)
      } else {
        setTuitionNotifications(tuitionNotifs || [])
      }

      const { data: rawRooms, error: roomsErr } = await supabase
        .from('exam_rooms')
        .select(`
          *,
          exams ( title ),
          classes ( * )
        `)
        .order('created_at', { ascending: false })

      const rooms = (rawRooms || []).map((r: any) => ({
        ...r,
        classes: r.classes ? {
          ...r.classes,
          class_name: r.classes.class_name || r.classes.name || ''
        } : undefined
      }))

      // 3. Lấy danh sách bài nộp của học sinh
      const { data: subs, error: subsErr } = await supabase
        .from('exam_submissions')
        .select('*')
        .eq('student_id', studentId)

      if (subsErr) throw subsErr

      const submittedRoomIds = (subs || []).map((s: any) => s.room_id)

      // Lọc phòng thi học sinh được phép tham gia (chỉ thấy đúng đề thuộc lớp của mình)
      const isFreeCandidate = latestStudent?.student_code?.toUpperCase() === 'THAYTHO' || 
                              latestStudent?.grade === 'Thí Sinh Tự Do' ||
                              latestStudent?.student_code?.toUpperCase() === 'TUDO';

      const eligibleRooms = (rooms || []).filter((room: any) => {
        // NẾU LÀ THẦY THỌ / QUẢN TRỊ -> ĐẶC QUYỀN LÀM ĐƯỢC 100% TẤT CẢ PHÒNG THI
        if (isTeacherUser) return true;

        // KIỂM TRA KHÓA HỆ THỐNG / ĐỀ THI: NẾU THẦY KHÓA THÌ ẨN HẲN KHỎI HỌC SINH
        if (accessConfig?.is_locked) return false;
        if (isExamLocked(room.id, false, accessConfig)) return false;
        if (room.exam_id && isExamLocked(room.exam_id, false, accessConfig)) return false;
        const cat = getExamCategory(room);
        if (isCategoryLocked(cat, false, accessConfig)) return false;

        // 1. Kiểm tra nếu phòng thi có chỉ định danh sách học sinh cụ thể
        const assignedIds = room.settings?.assigned_student_ids
        const isExplicitlyAssigned = Array.isArray(assignedIds) && assignedIds.includes(studentId)
        if (Array.isArray(assignedIds) && assignedIds.length > 0 && !assignedIds.includes(studentId)) {
          return false
        }

        // 2. Thuộc đúng lớp của học sinh (hỗ trợ 1 lớp hoặc nhiều lớp được chọn)
        const assignedClassIds = Array.isArray(room.settings?.assigned_class_ids) && room.settings.assigned_class_ids.length > 0
          ? room.settings.assigned_class_ids 
          : room.class_id ? [room.class_id] : []
        const isMyClass = assignedClassIds.some((cid: string) => myClassIds.includes(cid))

        // 3. Giao cho toàn khối (Khối 12, 11, 10...)
        const sGrade = String(latestStudent?.grade || '').toLowerCase().trim()
        const targetGrade = String(room.settings?.targetGrade || '').toLowerCase().trim()
        const isGradeMatch = targetGrade && (
          sGrade === targetGrade ||
          sGrade.includes(targetGrade) ||
          (sGrade.includes('12') && targetGrade.includes('12')) ||
          (sGrade.includes('11') && targetGrade.includes('11')) ||
          (sGrade.includes('10') && targetGrade.includes('10')) ||
          (sGrade.includes('9') && targetGrade.includes('9')) ||
          (sGrade.includes('8') && targetGrade.includes('8')) ||
          (sGrade.includes('7') && targetGrade.includes('7')) ||
          (sGrade.includes('6') && targetGrade.includes('6'))
        )
        const isAllGrade = (room.settings?.targetScope === 'all_grade') && isGradeMatch

        // 4. Giao cho toàn bộ học sinh trung tâm hoặc đề mở chung
        const isAllCenter = room.settings?.targetScope === 'all_center' || (!room.class_id && !room.settings?.targetScope)

        if (!isMyClass && !isExplicitlyAssigned && !isAllGrade && !isAllCenter) return false

        // Nếu phòng thi đã kết thúc/khóa (closed) mà học sinh chưa từng nộp bài -> ẩn đi
        if (room.status === 'closed' && !submittedRoomIds.includes(room.id)) {
          return false
        }

        return true
      })

      // Đã loại bỏ logic tự động nộp bài (0 điểm) khi quay về portal để hỗ trợ làm tiếp
      setExamsList(eligibleRooms)
      setSubmissionsList(subs || [])

      // Lấy danh sách Khóa học & Bài giảng Video mà học sinh được cấp quyền
      try {
        const { data: rawCourses } = await supabase
          .from("courses")
          .select("*, chapters(*, lessons(*))")
          .order("created_at", { ascending: false });

        const st = latestStudent || student;
        const isThay = st?.student_code?.toUpperCase() === "THAYTHO" || st?.role === "ADMIN" || st?.role === "TEACHER";
        const sGradeNum = (st?.grade || "").match(/\d+/)?.[0];

        const cfg = await fetchHoa12AccessConfig();
        setAccessConfig(cfg);

        const validCourses = (rawCourses || []).filter((c: any) => {
          if (isThay) return true;
          if (!c.is_published) return false;
          // QUAN TRỌNG: NẾU THẦY KHÓA THÌ ẨN HẲN KHỎI HỌC SINH
          if (isCourseLocked(c, isThay, cfg)) return false;

          const assigned: string[] = Array.isArray(c.assigned_class_ids) ? c.assigned_class_ids : [];
          if (assigned.includes("ALL")) return true;
          if (sGradeNum && assigned.includes(`GRADE_${sGradeNum}`)) return true;
          if (myClassIds.some((cid: string) => assigned.includes(cid))) return true;
          if (assigned.includes(studentId)) return true;
          if (c.title?.toLowerCase().includes("lấy gốc") && sGradeNum && ["6","7","8","9"].includes(sGradeNum)) return true;
          return false;
        });

        setEnrolledCourses(validCourses);
      } catch (cErr) {
        console.warn("Lỗi tải khóa học học sinh:", cErr);
      }
    } catch (error) {
      console.error('Lỗi tải dữ liệu:', error)
      toast.error('Không thể tải danh sách bài thi.')
    } finally {
      setLoading(false)
    }
  }

  // ── Xác minh học sinh (mã + mật khẩu bắt buộc) ─────────────
  const verifyStudent = async (code: string, password: string) => {
    if (!code.trim()) {
      toast.error('Vui lòng nhập Mã học sinh!')
      return null
    }
    if (!password.trim()) {
      toast.error('Vui lòng nhập Mật khẩu!')
      return null
    }

    const { data, error } = await supabase
      .from('students')
      .select('*')
      .ilike('student_code', code.trim())
      .maybeSingle()

    if (error || !data) {
      toast.error('Sai Mã học sinh! Vui lòng kiểm tra lại.')
      return null
    }

    if (data.status === 'inactive') {
      toast.error('Tài khoản học sinh này đã bị khóa hoặc nghỉ học.')
      return null
    }

    // ĐẶC BIỆT: NẾU LÀ THÍ SINH TỰ DO (THẦY THỌ) -> ĐĂNG NHẬP THUẬN TIỆN VỚI MỌI MẬT KHẨU
    const isFreeCode = code.trim().toUpperCase() === 'THAYTHO' || code.trim().toUpperCase() === 'TUDO';
    if (isFreeCode) {
      localStorage.setItem('current_student', JSON.stringify(data))
      localStorage.setItem('studentName', data.full_name)
      localStorage.setItem('student_name', data.full_name)
      return data
    }

    const cred = await getStudentCredential(code.trim())
    const expectedPassword = cred?.password || data.password
    if (cred?.avatar_url) {
      data.avatar_url = cred.avatar_url
    }

    if (expectedPassword) {
      if (expectedPassword !== password.trim()) {
        toast.error('Sai mật khẩu! Vui lòng kiểm tra lại.')
        return null
      }
    } else {
      // Lưu mật khẩu học sinh nhập làm mật khẩu mặc định
      await saveStudentCredential(data.student_code, password.trim())
    }

    localStorage.setItem('current_student', JSON.stringify(data))
    localStorage.setItem('studentName', data.full_name)
    localStorage.setItem('student_name', data.full_name)

    return data
  }

  // ── Đăng nhập học sinh ─────────────────────────────────────
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)
    try {
      const studentData = await verifyStudent(studentCodeInput, passwordInput)
      if (!studentData) return

      setStudent(studentData)
      const gGrade = String(studentData.grade || '').toLowerCase()
      if (gGrade.includes('12') || gGrade.includes('khối 12')) {
        setActiveTab('homework')
      }
      toast.success(`Xin chào, ${studentData.full_name}! 👋`)
      await fetchStudentData(studentData.id)
    } catch (err) {
      toast.error('Lỗi kết nối máy chủ!')
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('current_student')
    localStorage.removeItem('studentName')
    localStorage.removeItem('student_name')
    setStudent(null)
    setStudentCodeInput('')
    setPasswordInput('')
    setExamsList([])
    setSubmissionsList([])
  }

  const resetChangePasswordForm = () => {
    setOldPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setShowOldPass(false)
    setShowNewPass(false)
    setShowConfirmPass(false)
  }

  const handleChangePassword = async () => {
    if (!oldPassword.trim()) {
      toast.error('Vui lòng nhập mật khẩu hiện tại!')
      return
    }
    if (!newPassword.trim()) {
      toast.error('Vui lòng nhập mật khẩu mới!')
      return
    }
    if (newPassword.trim() === oldPassword.trim()) {
      toast.error('Mật khẩu mới không được trùng với mật khẩu cũ!')
      return
    }
    if (newPassword.trim().length < 4) {
      toast.error('Mật khẩu mới phải từ 4 ký tự trở lên!')
      return
    }
    if (newPassword.trim() !== confirmPassword.trim()) {
      toast.error('Xác nhận mật khẩu mới không khớp!')
      return
    }

    if (student.password !== oldPassword.trim()) {
      toast.error('Mật khẩu hiện tại không chính xác!')
      return
    }

    setIsChangingPassword(true)
    try {
      await saveStudentCredential(student.student_code, newPassword.trim())

      // Cập nhật state cục bộ và localStorage
      const updatedStudent = { ...student, password: newPassword.trim() }
      setStudent(updatedStudent)
      localStorage.setItem('current_student', JSON.stringify(updatedStudent))

      toast.success('Đổi mật khẩu thành công! 🔑')
      setIsChangePasswordOpen(false)
      resetChangePasswordForm()
    } catch (err: any) {
      console.error(err)
      toast.error(err.message || 'Lỗi khi đổi mật khẩu.')
    } finally {
      setIsChangingPassword(false)
    }
  }

  // ── Xử lý chọn & lưu ảnh đại diện ─────────────────────────
  const handleSelectAvatarFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      toast.error('Vui lòng chọn file hình ảnh (PNG, JPG, JPEG, WEBP,...)!')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Dung lượng ảnh tối đa là 5MB!')
      return
    }
    setSelectedAvatarFile(file)
    const reader = new FileReader()
    reader.onload = () => {
      setAvatarPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleSaveAvatar = async () => {
    if (!selectedAvatarFile || !student?.id) return
    setIsUploadingAvatar(true)
    try {
      const fileExt = selectedAvatarFile.name.split('.').pop() || 'png'
      const fileName = `student_${student.id}_${Date.now()}.${fileExt}`
      const filePath = `avatars/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('exams_pdf')
        .upload(filePath, selectedAvatarFile, {
          cacheControl: '3600',
          upsert: true
        })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('exams_pdf')
        .getPublicUrl(filePath)

      await saveStudentCredential(student.student_code, undefined, undefined, publicUrl)

      const updatedStudent = { ...student, avatar_url: publicUrl }
      setStudent(updatedStudent)
      localStorage.setItem('current_student', JSON.stringify(updatedStudent))
      toast.success('Cập nhật ảnh đại diện thành công! ✨')
      setIsAvatarModalOpen(false)
      setSelectedAvatarFile(null)
      setAvatarPreviewUrl(null)
    } catch (err: any) {
      console.error('Lỗi upload avatar:', err)
      toast.error('Lỗi tải ảnh lên: ' + (err.message || 'Thử lại sau'))
    } finally {
      setIsUploadingAvatar(false)
    }
  }

  const handleRemoveAvatar = async () => {
    if (!student?.id) return
    if (!confirm('Bạn có chắc chắn muốn xóa ảnh đại diện hiện tại?')) return
    setIsUploadingAvatar(true)
    try {
      await saveStudentCredential(student.student_code, undefined, undefined, '')

      const updatedStudent = { ...student, avatar_url: null }
      setStudent(updatedStudent)
      localStorage.setItem('current_student', JSON.stringify(updatedStudent))
      toast.success('Đã xóa ảnh đại diện thành công!')
      setIsAvatarModalOpen(false)
      setSelectedAvatarFile(null)
      setAvatarPreviewUrl(null)
    } catch (err: any) {
      console.error('Lỗi xóa avatar:', err)
      toast.error('Lỗi xóa ảnh: ' + (err.message || 'Thử lại sau'))
    } finally {
      setIsUploadingAvatar(false)
    }
  }

  const handleRetakeExam = async (room: any, sub: any) => {
    if (!confirm('Bạn có muốn thi lại bài này? Kết quả cũ sẽ được lưu vào lịch sử.')) return

    const toastId = toast.loading('Đang khởi tạo lại bài thi...')
    try {
      const currentAttempt = sub.score_breakdown?.attempt_count || 1
      const currentHistory = sub.score_breakdown?.history || []

      const finishedAttemptData = {
        attempt: currentAttempt,
        score: sub.score,
        tab_switches: sub.tab_switches || 0,
        submitted_at: sub.submitted_at,
        duration: sub.duration || 0
      }

      const newHistory = [...currentHistory, finishedAttemptData]

      // Fetch exam data to shuffle if needed
      const { data: examData, error: examErr } = await supabase
        .from('exams')
        .select('data')
        .eq('id', room.exam_id)
        .single()

      if (examErr || !examData) throw new Error('Không tìm thấy đề thi')

      const normalizedBase = normalizeExamData(examData.data)

      const hasRealQuestions = normalizedBase.questions && normalizedBase.questions.length > 0 &&
        !normalizedBase.questions.every((q: any) => 
          /^(câu\s+\d+|câu\s+tự\s+luận\s+\d+):?$/i.test((q.text || '').trim())
        );
      const isPdf = !hasRealQuestions && (!!normalizedBase.pdfUrl || !!normalizedBase.pdfDriveUrl || !!normalizedBase.pdfBase64);

      let nextExamData = normalizedBase
      if (!isPdf) {
        // ✅ Luôn đảo và xáo trộn câu hỏi khi học sinh làm lại đề
        nextExamData = normalizeExamData(shuffleExamForStudent(normalizedBase))
      }

      const { error: updateErr } = await supabase
        .from('exam_submissions')
        .update({
          status: 'in_progress',
          answers: {},
          score: null,
          score_breakdown: {
            shuffled_exam: nextExamData,
            attempt_count: currentAttempt + 1,
            history: newHistory
          },
          submitted_at: null,
          tab_switches: 0,
          tab_switch_warnings: [],
          duration: 0
        })
        .eq('id', sub.id)

      if (updateErr) throw updateErr

      toast.success('Khởi tạo thành công! Đang vào phòng thi...', { id: toastId })
      await fetchStudentData(student.id)
      navigate(`/exam-room/${room.id}`)
    } catch (err: any) {
      console.error(err)
      toast.error(err.message || 'Lỗi khi thiết lập thi lại.', { id: toastId })
    }
  }

  // ── Loading ──────────────────────────────────────────────────
  if (loading && student) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-teal-50">
        <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 font-bold text-teal-700">Đang tải danh sách bài thi...</p>
      </div>
    )
  }

  // ── GIAO DIỆN ĐĂNG NHẬP ─────────────────────────────────────

  if (!student) {
    return (
      <div 
        className="min-h-screen py-8 px-4 flex flex-col items-center justify-center relative overflow-y-auto"
        style={{ background: 'linear-gradient(135deg, #ccfbf1 0%, #5eead4 50%, #0d9488 100%)' }}
      >
        {/* THẺ LỐI TẮT HỌC LIỆU VÀ PHÒNG THI (ẨN VỚI HỌC SINH MẶC ĐỊNH THEO YÊU CẦU THẦY THỌ) */}
        {isTeacherUser && (
        <div className="mb-4 w-full max-w-md bg-slate-900/95 backdrop-blur-md p-4 rounded-3xl border-2 border-teal-400/60 shadow-2xl text-white flex flex-col gap-3 relative z-10">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="text-[11px] font-black uppercase text-amber-400 tracking-wider">🌟 HỌC LIỆU & PHÒNG THI CHUẨN BỘ 2025</div>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-[11px] text-teal-400 hover:text-white font-bold flex items-center gap-1"
            >
              Xem tất cả ➔
            </button>
          </div>
          
          {(!isChapterLocked('c1', false, accessConfig) || !isChapterLocked('c5', false, accessConfig) || !isChapterLocked('h11_c1', false, accessConfig) || !isChapterLocked('h10_c1', false, accessConfig)) && (
          <div className="space-y-2">
            {/* Khối 12 */}
            {(!isChapterLocked('c1', false, accessConfig) || !isChapterLocked('c5', false, accessConfig)) && (
              <div className="p-2.5 bg-slate-950/80 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 mb-1.5">
                  <span className="text-amber-400 font-extrabold">👑 KHỐI 12 (2k7)</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Đã Mở</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {!isChapterLocked('c1', false, accessConfig) && (
                    <button
                      type="button"
                      onClick={() => navigate('/hoa12-chuong1')}
                      className="px-2 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 text-white font-black text-xs rounded-xl shadow transition-all text-center"
                    >
                      🧪 Chương 1
                    </button>
                  )}
                  {!isChapterLocked('c5', false, accessConfig) && (
                    <button
                      type="button"
                      onClick={() => navigate('/hoa12-chuong5')}
                      className="px-2 py-1.5 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 text-white font-black text-xs rounded-xl shadow transition-all text-center"
                    >
                      ⚡ Chương 5
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Khối 11 & Khối 10 */}
            {(!isChapterLocked('h11_c1', false, accessConfig) || !isChapterLocked('h10_c1', false, accessConfig)) && (
              <div className="grid grid-cols-2 gap-2">
                {!isChapterLocked('h11_c1', false, accessConfig) && (
                  <div className="p-2 bg-slate-950/80 rounded-2xl border border-slate-800 text-center space-y-1.5">
                    <span className="text-[11px] font-bold text-teal-400 block">⚖️ KHỐI 11 (2k8)</span>
                    <button
                      type="button"
                      onClick={() => navigate('/hoa11-chuong1')}
                      className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-[11px] rounded-xl border border-slate-700"
                    >
                      Chương 1 & 2 ➔
                    </button>
                  </div>
                )}

                {!isChapterLocked('h10_c1', false, accessConfig) && (
                  <div className="p-2 bg-slate-950/80 rounded-2xl border border-slate-800 text-center space-y-1.5">
                    <span className="text-[11px] font-bold text-purple-400 block">⚛️ KHỐI 10 (2k9)</span>
                    <button
                      type="button"
                      onClick={() => navigate('/hoa10-chuong1')}
                      className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-[11px] rounded-xl border border-slate-700"
                    >
                      Chương 1 & 2 ➔
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          )}
        </div>
        )}

        <div className="relative w-full max-w-md z-10">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-teal-200 overflow-hidden">
            {/* Header */}
            <div 
              className="px-8 pt-10 pb-8 text-center text-white"
              style={{ background: 'linear-gradient(135deg, #0d9488, #14b8a6, #5eead4)' }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg backdrop-blur-sm">
                <GraduationCap className="w-9 h-9 text-white" />
              </div>
              <h1 className="font-extrabold text-2xl tracking-wide uppercase">LỚP HỌC THẦY THỌ</h1>
              <p className="text-teal-100 text-xs font-semibold mt-1">Cổng Đăng Nhập & Ôn Luyện Học Sinh</p>
            </div>

            <form onSubmit={handleLogin} className="p-8 space-y-5">


              <h3 className="text-gray-800 font-extrabold text-xl mb-4 text-center">ĐĂNG NHẬP CỔNG THI</h3>

              {/* Mã học sinh */}
              <div>
                <label className="block text-xs font-bold text-teal-700 mb-1 uppercase tracking-wide">Mã học sinh *</label>
                <input
                  type="text"
                  value={studentCodeInput}
                  onChange={e => setStudentCodeInput(e.target.value.toUpperCase())}
                  placeholder="VD: HS001"
                  className="w-full px-4 py-3 rounded-xl border-2 border-teal-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all font-mono font-bold text-lg text-center uppercase tracking-widest bg-white"
                  required
                />
              </div>

              {/* Mật khẩu */}
              <div>
                <label className="block text-xs font-bold text-teal-700 mb-1 uppercase tracking-wide">Mật khẩu *</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                    placeholder="Nhập mật khẩu"
                    className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-teal-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all font-bold text-lg text-center bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-teal-400 hover:text-teal-600 transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>



              {/* Nút đăng nhập */}
              <button
                type="submit"
                disabled={isLoggingIn}
                className="btn-teal w-full flex items-center justify-center gap-2 text-base py-3.5 shadow-lg shadow-teal-500/25"
              >
                {isLoggingIn ? (
                  <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>VÀO HỆ THỐNG</span>
                )}
              </button>

              {/* Quên mật khẩu khi học sinh không nhớ */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => {
                    toast(
                      `Mật khẩu mặc định là: 222\nNếu bạn đã đổi mật khẩu và không nhớ, hãy nhắn ngay cho Thầy Thọ để được cấp lại nhé!`,
                      { icon: '🔑', duration: 7000 }
                    )
                  }}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1.5 cursor-pointer bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-xl border border-teal-200 transition-all shadow-2xs"
                >
                  <Key className="w-3.5 h-3.5 text-amber-500" /> Quên mật khẩu? (Bấm vào đây)
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                {/* Nút truy cập nhanh Hóa 12 không cần đăng nhập (Chỉ hiện khi Thầy đã mở) */}
                {(!isChapterLocked('c1', false, accessConfig) || !isChapterLocked('c2', false, accessConfig) || !isChapterLocked('c5', false, accessConfig)) && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {!isChapterLocked('c1', false, accessConfig) && (
                      <button
                        type="button"
                        onClick={() => navigate('/hoa12-chuong1')}
                        className="w-full py-2.5 px-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1 transition-all cursor-pointer active:scale-95"
                      >
                        <span>🧪 Chương 1 (7 Đề)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {!isChapterLocked('c2', false, accessConfig) && (
                      <button
                        type="button"
                        onClick={() => navigate('/hoa12-chuong2')}
                        className="w-full py-2.5 px-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1 transition-all cursor-pointer active:scale-95"
                      >
                        <span>🍇 Chương 2 (4 Đề)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {!isChapterLocked('c5', false, accessConfig) && (
                      <button
                        type="button"
                        onClick={() => navigate('/hoa12-chuong5')}
                        className="w-full py-2.5 px-2 bg-gradient-to-r from-teal-600 to-indigo-700 hover:from-teal-700 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1 transition-all cursor-pointer active:scale-95"
                      >
                        <span>⚡ Chương 5 (4 Đề)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}

                <button
                  type="button"
                  onClick={async () => {
                    setStudentCodeInput('THAYTHO')
                    setPasswordInput('123456')
                    setIsLoggingIn(true)
                    try {
                      const user = await verifyStudent('THAYTHO', '123456')
                      if (user) {
                        setStudent(user)
                        toast.success('👑 Xin chào Thầy Thọ! Chúc Thầy kiểm tra đề hiệu quả.')
                        await fetchStudentData(user.id)
                      }
                    } catch (e) {
                      toast.error('Lỗi kết nối máy chủ!')
                    } finally {
                      setIsLoggingIn(false)
                    }
                  }}
                  className="w-full py-2.5 px-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 text-amber-900 border border-amber-300 rounded-xl text-xs font-extrabold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>👑 Đăng nhập nhanh Thầy Thọ (1-Chạm)</span>
                </button>
              </div>
            </form>
          </div>
          <p className="text-center text-white/60 text-xs mt-4">
            © 2025 LỚP HỌC THẦY THỌ – Powered by React + Supabase
          </p>
        </div>
      </div>
    )
  }

  // Phân loại danh sách bài thi
  const submittedRoomIds = submissionsList
    .filter(s => s.status === 'submitted' && s.score !== 0)
    .map(s => s.room_id)

  const inProgressSubMap = new Map()
  submissionsList
    .filter(s => s.status !== 'submitted')
    .forEach(s => inProgressSubMap.set(s.room_id, s))

  // Đã thi: có bài nộp status = 'submitted'
  const completedExams = examsList
    .filter(room => submittedRoomIds.includes(room.id))
    .map(room => {
      const sub = submissionsList.find(s => s.room_id === room.id && s.status === 'submitted')
      return { room, sub }
    })

  // Chưa thi: chưa có bài nộp status = 'submitted'
  const pendingExams = examsList.filter(room => !submittedRoomIds.includes(room.id))
  const activePendingCount = pendingExams.filter(room => room.status !== 'closed' && room.status !== 'waiting').length

  // ── PHÂN LOẠI 4 PHÒNG THI ĐỘC LẬP & LOGIC ─────────────────────────────
  // 1. BÀI TẬP VỀ NHÀ (homework) - Có giám sát chuyển tab
  // 2. LUYỆN ĐỀ THEO CHƯƠNG (chapter) - Có giám sát chuyển tab
  // 3. LUYỆN ĐỀ THI (practice) - Có giám sát chuyển tab
  // 4. KHẢO SÁT CHẤT LƯỢNG (survey) - Có giám sát chuyển tab
  const homeworkRooms = examsList.filter(r => getExamCategory(r) === 'homework')
  const chapterRooms = examsList.filter(r => getExamCategory(r) === 'chapter')
  const practiceRooms = examsList.filter(r => getExamCategory(r) === 'practice')
  const surveyRooms = examsList.filter(r => getExamCategory(r) === 'survey')

  const homeworkPending = pendingExams.filter(r => getExamCategory(r) === 'homework')
  const chapterPending = pendingExams.filter(r => getExamCategory(r) === 'chapter')
  const practicePending = pendingExams.filter(r => getExamCategory(r) === 'practice')
  const surveyPending = pendingExams.filter(r => getExamCategory(r) === 'survey')

  const homeworkCompleted = completedExams.filter(({ room }) => getExamCategory(room) === 'homework')
  const chapterCompleted = completedExams.filter(({ room }) => getExamCategory(room) === 'chapter')
  const practiceCompleted = completedExams.filter(({ room }) => getExamCategory(room) === 'practice')
  const surveyCompleted = completedExams.filter(({ room }) => getExamCategory(room) === 'survey')

  const homeworkAvgScore = homeworkCompleted.length > 0
    ? homeworkCompleted.reduce((sum, item) => sum + (item.sub?.score || 0), 0) / homeworkCompleted.length
    : null

  const chapterAvgScore = chapterCompleted.length > 0
    ? chapterCompleted.reduce((sum, item) => sum + (item.sub?.score || 0), 0) / chapterCompleted.length
    : null

  const practiceAvgScore = practiceCompleted.length > 0
    ? practiceCompleted.reduce((sum, item) => sum + (item.sub?.score || 0), 0) / practiceCompleted.length
    : null

  const surveyAvgScore = surveyCompleted.length > 0
    ? surveyCompleted.reduce((sum, item) => sum + (item.sub?.score || 0), 0) / surveyCompleted.length
    : null

  const practiceClasses = enrolledClasses.filter(c => isPracticeClassName(c.class_name))

  // ── RENDER HELPER: DANH SÁCH ĐỀ THI CẦN LÀM ─────────────────────
  const renderPendingGrid = (rooms: any[], category: ExamCategory) => {
    const meta = getCategoryMeta(category)

    if (rooms.length === 0) {
      return (
        <div className="bg-white rounded-3xl p-8 sm:p-10 text-center border-2 border-dashed border-slate-200 shadow-2xs">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-100 shadow-inner">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-base sm:text-lg font-black text-slate-800">
            {category === 'homework' 
              ? '🎉 Tuyệt vời! Em đã hoàn thành tất cả đề thi và bài tập.'
              : category === 'chapter'
              ? '📘 Hiện tại chưa có bài luyện đề chương nào đang chờ.'
              : category === 'practice'
              ? '🎯 Em đã hoàn thành tất cả đề thi hiện có!'
              : '🟣 Hiện tại chưa có đề khảo sát chất lượng nào đang chờ.'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
            {category === 'homework'
              ? 'Thầy Thọ khen ngợi tinh thần học tập của em! Hãy tiếp tục duy trì nhé.'
              : 'Em có thể xem lại bài giải hoặc bấm thi lại ở bảng điểm bên dưới để rèn luyện thêm!'}
          </p>

        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {rooms.map(room => {
          const hasSub = inProgressSubMap.has(room.id)
          const isClosed = room.status === 'closed'
          const isWaiting = room.status === 'waiting'

          let statusBadge = null
          if (isClosed) {
            statusBadge = <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full border border-slate-200">Đã đóng</span>
          } else if (isWaiting) {
            statusBadge = <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-200">Chờ mở</span>
          } else {
            statusBadge = (
              <span className="bg-emerald-50 text-emerald-800 text-xs font-black px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Đang mở thi</span>
              </span>
            )
          }

          const btnGradient = category === 'homework'
            ? 'from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white shadow-rose-600/20'
            : category === 'chapter'
            ? 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-600/20'
            : 'from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-emerald-600/20'

          return (
            <div 
              key={room.id}
              className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 ${
                category === 'homework' 
                  ? 'border-rose-200/80 hover:border-rose-400' 
                  : category === 'chapter'
                  ? 'border-blue-200/80 hover:border-blue-400'
                  : 'border-emerald-200/80 hover:border-emerald-400'
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-200/20 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-xl border border-slate-200">
                      🏫 {room.classes?.class_name || (room.settings?.targetScope === 'all_grade' ? `Toàn Khối ${room.settings.targetGrade}` : room.settings?.targetScope === 'all_center' ? 'Toàn Trung Tâm' : 'Đề chung')}
                    </span>
                    <span className={`text-[11px] font-black px-2.5 py-1 rounded-xl border ${meta.tagBg}`}>
                      {meta.shortLabel}
                    </span>
                  </div>
                  {statusBadge}
                </div>

                <h4 className="text-base sm:text-lg font-black text-slate-800 mb-2.5 line-clamp-2 leading-snug group-hover:text-teal-700 transition-colors">
                  {room.exams?.title || `Phòng thi ${room.code}`}
                </h4>

                <div className="flex flex-wrap items-center gap-2 text-slate-500 text-xs font-semibold mb-4">
                  <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    Thời gian: <strong className="text-slate-800 font-bold">{room.time_limit} phút</strong>
                  </span>

                  {hasSub && (
                    <span className="bg-amber-50 text-amber-800 px-2.5 py-1 rounded-lg border border-amber-200 text-[10px] uppercase font-black animate-pulse">
                      ⚡ Đang làm dở
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <span>Mã đề:</span>
                  <span className="font-mono font-black text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200 text-xs">{room.code}</span>
                </span>

                {isClosed ? (
                  <button disabled className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 text-slate-400 text-xs font-bold rounded-xl cursor-not-allowed border border-slate-200">
                    Đã đóng
                  </button>
                ) : isWaiting ? (
                  <button disabled className="w-full sm:w-auto px-4 py-2.5 bg-amber-50 text-amber-600 text-xs font-bold rounded-xl cursor-not-allowed border border-amber-200">
                    Chờ mở phòng
                  </button>
                ) : (
                  <button 
                    onClick={() => setExamRuleModalTarget({
                      type: 'room',
                      id: room.id,
                      title: room.exams?.title || room.title || 'Phòng Thi Trực Tuyến',
                      hasSub: hasSub
                    })}
                    className={`w-full sm:w-auto px-5 py-3 sm:py-2.5 bg-gradient-to-r ${btnGradient} text-xs sm:text-sm font-black rounded-xl sm:rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95`}
                  >
                    <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>{hasSub ? 'Làm tiếp ⚡' : 'Bắt đầu làm bài 🚀'}</span>
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  // ── RENDER HELPER: BẢNG KẾT QUẢ & ĐIỂM SỐ ĐÃ NỘP ──────────────────
  const renderCompletedTable = (items: any[], category: ExamCategory) => {
    const meta = getCategoryMeta(category)

    if (items.length === 0) {
      return (
        <div className="bg-white rounded-3xl p-8 text-center border border-slate-200 shadow-2xs text-slate-400">
          <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h4 className="text-base sm:text-lg font-bold text-slate-700">Chưa có kết quả làm bài nào</h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-sm mx-auto">
            Hãy hoàn thành các bài thi ở danh sách bên trên để xem điểm số, xếp loại và bài giải chi tiết nhé!
          </p>
        </div>
      )
    }

    const tableHeaderGrad = category === 'homework'
      ? 'from-rose-700 to-rose-800'
      : category === 'chapter'
      ? 'from-blue-700 to-indigo-800'
      : category === 'survey'
      ? 'from-purple-700 to-indigo-800'
      : 'from-emerald-700 to-teal-800'

    return (
      <div className="space-y-4">
        {/* Dạng Bảng Desktop */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className={`bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white font-black text-xs uppercase tracking-wider`}>
                <th className="py-3.5 px-4 text-center w-12">#</th>
                <th className="py-3.5 px-4">Tên Đề Thi</th>
                <th className="py-3.5 px-4 text-center">Lớp Học</th>
                <th className="py-3.5 px-4 text-center">Thời Gian Nộp</th>
                <th className="py-3.5 px-4 text-center w-36">Điểm Số</th>
                <th className="py-3.5 px-4 text-center w-48">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {items.map(({ room, sub }, index) => {
                const formattedDate = sub.submitted_at 
                  ? format(new Date(sub.submitted_at), 'dd/MM/yyyy HH:mm') 
                  : 'N/A'
                const score = typeof sub.score === 'number' ? sub.score : null
                const isHigh = score !== null && score >= 8.0
                const isPass = score !== null && score >= 5.0
                const canRetake = room.status === 'active'

                return (
                  <tr key={room.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400 text-xs">
                      {index + 1}
                    </td>
                    <td className="py-4 px-4 font-black text-slate-800">
                      <div className="line-clamp-2 leading-snug">
                        {room.exams?.title || `Phòng thi ${room.code}`}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 font-medium">Mã phòng: {room.code}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 whitespace-nowrap inline-block">
                        {room.classes?.class_name || 'Đề chung'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {formattedDate}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className={`text-xl font-black ${
                          isHigh ? 'text-emerald-600' : isPass ? 'text-teal-600' : 'text-rose-600'
                        }`}>
                          {score !== null ? score : '-'}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          {isHigh ? 'Giỏi' : isPass ? 'Đạt' : 'Cần cố gắng'}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => navigate(`/exam-room/${room.id}`)}
                          className="px-3.5 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-black transition-all shadow-2xs flex items-center gap-1 cursor-pointer"
                        >
                          <span>Xem giải</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        {canRetake && (
                          <button
                            onClick={() => handleRetakeExam(room, sub)}
                            className="p-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-xl text-xs font-black transition-all cursor-pointer"
                            title="Luyện lại bài này"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Dạng Card Mobile */}
        <div className="grid grid-cols-1 gap-3.5 md:hidden">
          {items.map(({ room, sub }, index) => {
            const formattedDate = sub.submitted_at 
              ? format(new Date(sub.submitted_at), 'dd/MM/yyyy HH:mm') 
              : 'N/A'
            const score = typeof sub.score === 'number' ? sub.score : null
            const isHigh = score !== null && score >= 8.0
            const isPass = score !== null && score >= 5.0
            const canRetake = room.status === 'active'

            return (
              <div 
                key={room.id}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3 relative overflow-hidden"
              >
                {/* Điểm số & Xếp loại góc trên */}
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200">
                      #{index + 1} · {room.classes?.class_name || 'Đề chung'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {room.code}
                    </span>
                  </div>
                  <div className={`px-2.5 py-1 rounded-xl font-black text-sm flex items-center gap-1 border ${
                    isHigh 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                      : isPass 
                      ? 'bg-teal-50 text-teal-700 border-teal-200' 
                      : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>
                    <span>{score !== null ? `${score}` : '-'}</span>
                    <span className="text-[10px] font-bold opacity-75">/10</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-black text-slate-900 text-sm line-clamp-2 leading-snug">
                    {room.exams?.title || `Phòng thi ${room.code}`}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>Nộp: {formattedDate}</span>
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/exam-room/${room.id}`)}
                    className="flex-1 py-2.5 px-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl text-xs font-black shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                  >
                    <span>Xem bài giải chi tiết</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  {canRetake && (
                    <button
                      onClick={() => handleRetakeExam(room, sub)}
                      className="p-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-xl transition-all cursor-pointer shrink-0 active:scale-95"
                      title="Luyện lại bài này"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // ── DASHBOARD (đã đăng nhập) ─────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-sky-50/20 to-slate-50 flex flex-col relative overflow-x-hidden">
      {/* HỌA TIẾT PHÔNG NỀN CHÌM: KÝ HIỆU TOÁN & HÓA HỌC */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.035] text-blue-900">
        {/* Phía trên bên phải: Vòng benzen & Bình Erlenmeyer */}
        <div className="absolute -top-10 -right-10 w-96 h-96">
          <svg viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 20 L160 55 L160 125 L100 160 L40 125 L40 55 Z" stroke="currentColor" strokeWidth="6" fill="none"/>
            <circle cx="100" cy="90" r="38" stroke="currentColor" strokeWidth="5" fill="none"/>
          </svg>
        </div>
        {/* Phía trên bên trái: Tích phân & Sigma */}
        <div className="absolute top-24 -left-6 text-9xl font-serif">
          ∫
        </div>
        <div className="absolute top-80 left-12 text-7xl font-serif">
          ∑
        </div>
        {/* Giữa trang bên phải: Căn bậc hai & Pi */}
        <div className="absolute top-1/2 -right-8 text-8xl font-serif">
          √x
        </div>
        <div className="absolute top-[60%] right-24 text-7xl font-serif">
          π
        </div>
        {/* Phía dưới bên trái: Bình phản ứng & Nguyên tử */}
        <div className="absolute bottom-20 left-8 w-48 h-48">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <ellipse cx="50" cy="50" rx="45" ry="16" transform="rotate(30 50 50)"/>
            <ellipse cx="50" cy="50" rx="45" ry="16" transform="rotate(-30 50 50)"/>
            <circle cx="50" cy="50" r="8" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-xs border-b border-teal-100 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between gap-2">
          {/* Logo & Tên Cổng Thi */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-teal-700 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-tr from-teal-700 to-teal-500 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="font-black text-sm sm:text-base leading-tight text-teal-800 uppercase tracking-wide truncate">
                LỚP HỌC THẦY THỌ
              </h1>
              <p className="text-[10px] font-bold uppercase tracking-wider text-teal-600 truncate">
                Cổng Thi Học Sinh
              </p>
            </div>
          </div>

          {/* Cụm thông tin học sinh & Thao tác */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Viên thuốc thông tin học sinh */}
            <div 
              onClick={() => {
                setSelectedAvatarFile(null)
                setAvatarPreviewUrl(null)
                setIsAvatarModalOpen(true)
              }}
              className="flex items-center gap-2 bg-teal-50/90 hover:bg-teal-100/80 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-teal-200 transition-colors cursor-pointer group shadow-2xs"
              title="Bấm để xem & đổi ảnh đại diện"
            >
              <div className="relative flex-shrink-0">
                {student.avatar_url ? (
                  <img
                    src={student.avatar_url}
                    alt={student.full_name}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-teal-500 shadow-2xs transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs shadow-2xs transition-transform group-hover:scale-105">
                    {student.full_name?.charAt(0)?.toUpperCase() || <UserCircle className="w-4 h-4 text-white" />}
                  </div>
                )}
                <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-xs border border-teal-200">
                  <Camera className="w-2.5 h-2.5 text-teal-700" />
                </div>
              </div>
              <div className="flex flex-col min-w-0 max-w-[85px] xs:max-w-[120px] sm:max-w-[150px]">
                <span className="text-xs sm:text-sm font-black text-teal-900 truncate">{student.full_name}</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-teal-600 font-mono tracking-wider">{student.student_code}</span>
              </div>
            </div>

            {student.student_code === 'THAYTHO' && (
              <button
                onClick={() => navigate('/lay-goc-toan')}
                className="h-8 sm:h-9 px-2.5 sm:px-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-xl flex items-center justify-center gap-1.5 transition-all flex-shrink-0 shadow-xs cursor-pointer"
                title="Mở toàn bộ Kho Đề Lấy Gốc Toán & Hóa"
              >
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                <span className="hidden md:inline text-xs font-black">Kho Đề</span>
              </button>
            )}

            <button
              onClick={() => navigate('/khoa-hoc-lay-goc-hoa')}
              className="h-8 sm:h-9 px-2.5 sm:px-3 bg-gradient-to-r from-blue-700 via-indigo-700 to-amber-600 hover:opacity-95 text-white rounded-xl flex items-center justify-center gap-1.5 transition-all flex-shrink-0 shadow-xs cursor-pointer border border-amber-400/40"
              title="Khóa Học Lấy Gốc Hóa Học Nền Tảng (9 Đề Toàn Diện)"
            >
              <FlaskConical className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
              <span className="hidden sm:inline text-xs font-black">9 Đề Gốc Hóa</span>
            </button>

            <button
              onClick={() => setIsChangePasswordOpen(true)}
              className="h-8 w-8 sm:h-9 sm:w-9 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded-xl border border-teal-200 flex items-center justify-center transition-all flex-shrink-0 shadow-2xs cursor-pointer"
              title="Đổi mật khẩu"
            >
              <Lock className="w-4 h-4 text-teal-700" />
            </button>

            <button
              onClick={handleLogout}
              className="h-8 w-8 sm:h-9 sm:w-9 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl border border-rose-200 flex items-center justify-center transition-all flex-shrink-0 shadow-2xs cursor-pointer"
              title="Đăng xuất"
            >
              <LogOut className="w-4 h-4 text-rose-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 space-y-8 animate-fade-in">
        {/* HERO DASHBOARD CAO CẤP TOÁN & HÓA (HỢP TUỔI TÂN MÙI 1991 - TƯƠI SÁNG & HIỆN ĐẠI) */}
        <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-amber-600 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 text-white border-2 border-amber-300/40 shadow-2xl relative overflow-hidden">
          {/* Hào quang phong thủy 1991: Vàng Hổ Phách (Hỏa sinh Thổ) + Xanh Coban Trí Tuệ */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-amber-400/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-400/30 blur-3xl pointer-events-none" />

          {/* Họa tiết vector Toán & Hóa chìm trong Card */}
          <div className="absolute right-4 bottom-2 opacity-15 pointer-events-none select-none flex items-center gap-3 text-amber-200">
            <span className="text-6xl sm:text-7xl font-serif">∫</span>
            <span className="text-5xl sm:text-6xl font-serif">∑</span>
            <span className="text-4xl sm:text-5xl font-mono">⬡</span>
            <span className="text-4xl sm:text-5xl font-serif">π</span>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
            {/* Lời chào và thông tin học sinh */}
            <div className="space-y-2.5 sm:space-y-3 max-w-2xl text-left">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/25 border border-amber-300/45 text-amber-100 text-[11px] sm:text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xs">
                  <Flame className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Toán & Hóa Thầy Thọ · Tân Mùi 1991</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                  <span>Học Viên Chính Thức</span>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                Xin chào, <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 bg-clip-text text-transparent font-black drop-shadow-sm">{student.full_name}</span>! 👋
              </h2>
              
              <p className="text-amber-100/90 text-xs sm:text-sm font-medium leading-relaxed">
                Thầy Thọ chúc em vững vàng tư duy Toán học, thấu hiểu bản chất Hóa học, bứt phá phản xạ và đạt điểm 9-10 xuất sắc nhất!
              </p>

              {/* Nhãn lớp và mã học sinh */}
              <div className="flex items-center gap-2 flex-wrap pt-0.5">
                <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-white/20 text-amber-200 border border-white/30 shadow-xs backdrop-blur-md">
                  Mã HS: {student.student_code}
                </span>
                {enrolledClasses.length > 0 ? (
                  enrolledClasses.map((cls, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white border border-white/30 shadow-xs backdrop-blur-md flex items-center gap-1"
                    >
                      📚 {cls.class_name}
                    </span>
                  ))
                ) : student.grade ? (
                  <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white border border-white/30 shadow-xs backdrop-blur-md flex items-center gap-1">
                    📚 {student.grade}
                  </span>
                ) : null}
              </div>
            </div>

            {/* BỘ 3 CARD CHỈ SỐ HỌC TẬP (TIẾN ĐỘ, ĐIỂM TB, CẦN NỘP) - WHITE GLASSMORPHISM */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 w-full lg:w-auto shrink-0">
              {/* Chỉ số 1: Tiến độ hoàn thành */}
              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 transition-all border border-white/25 backdrop-blur-md text-center flex flex-col justify-between min-w-0 shadow-sm">
                <span className="text-[10px] sm:text-xs font-bold text-amber-100 uppercase tracking-wider block truncate flex items-center justify-center gap-1">
                  <Calculator className="w-3 h-3 text-amber-300 hidden sm:inline" />
                  <span>Tiến Độ</span>
                </span>
                <div className="text-base sm:text-2xl font-black text-white my-1 truncate">
                  {homeworkCompleted.length} <span className="text-xs font-normal text-amber-200">/ {homeworkRooms.length}</span>
                </div>
                <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden mt-1">
                  <div 
                    className="bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-300 h-full rounded-full transition-all duration-500 shadow-xs"
                    style={{ width: `${Math.round(homeworkRooms.length > 0 ? (homeworkCompleted.length / homeworkRooms.length) * 100 : 0)}%` }}
                  />
                </div>
              </div>

              {/* Chỉ số 2: Điểm trung bình */}
              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 transition-all border border-white/25 backdrop-blur-md text-center flex flex-col justify-between min-w-0 shadow-sm">
                <span className="text-[10px] sm:text-xs font-bold text-amber-100 uppercase tracking-wider block truncate flex items-center justify-center gap-1">
                  <FlaskConical className="w-3 h-3 text-amber-300 hidden sm:inline" />
                  <span>Điểm TB</span>
                </span>
                <div className="text-base sm:text-2xl font-black text-amber-200 my-1 truncate drop-shadow-xs">
                  {homeworkAvgScore !== null ? `${homeworkAvgScore.toFixed(1)}` : '-'}
                  <span className="text-[10px] text-amber-100/80 font-bold ml-0.5">/10</span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-bold text-yellow-200 uppercase tracking-wider truncate">
                  {homeworkAvgScore !== null && homeworkAvgScore >= 8.0 ? '🌟 Giỏi' : 'Đang học'}
                </span>
              </div>

              {/* Chỉ số 3: Cần nộp */}
              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 transition-all border border-white/25 backdrop-blur-md text-center flex flex-col justify-between min-w-0 shadow-sm">
                <span className="text-[10px] sm:text-xs font-bold text-amber-100 uppercase tracking-wider block truncate flex items-center justify-center gap-1">
                  <Atom className="w-3 h-3 text-amber-300 hidden sm:inline" />
                  <span>Chờ nộp</span>
                </span>
                <div className={`text-base sm:text-2xl font-black my-1 truncate ${homeworkPending.length > 0 ? 'text-yellow-200 animate-pulse' : 'text-emerald-200'}`}>
                  {homeworkPending.length}
                </div>
                <span className="text-[9px] sm:text-[11px] font-bold text-amber-100/90 uppercase tracking-wider truncate">
                  {homeworkPending.length > 0 ? 'Cần làm' : 'Xong hết ✅'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BẢNG ĐIỀU KHIỂN CẤP QUYỀN TRỰC TIẾP DÀNH CHO THẦY THỌ NGAY TRÊN CỔNG THI */}
        {(student?.student_code?.toUpperCase() === 'THAYTHO' || student?.grade === 'Thí Sinh Tự Do') && (
          <div className="p-4 sm:p-5 rounded-3xl bg-slate-900 border-2 border-teal-500 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500 text-white flex items-center justify-center text-xl shrink-0">
                👑
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-teal-400 flex items-center gap-2">
                  <span>BẢNG ĐIỀU KHIỂN CỦA THẦY THỌ</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase ${accessConfig?.is_locked ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'}`}>
                    {accessConfig?.is_locked ? 'Đang Khóa Học Sinh' : 'Đang Mở Cho Học Sinh'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  Thầy có thể bật cấp quyền hoặc cấm quyền học sinh ngay tại đây mà không cần đổi trang.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={async () => {
                  const updated = await grantAllStudentsAccess();
                  setAccessConfig({ ...updated });
                  toast.success('ĐÃ CẤP QUYỀN! Học sinh được vào học & thi tự do.', { icon: '🟢' });
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                  !accessConfig?.is_locked ? 'bg-emerald-600 text-white ring-2 ring-emerald-400' : 'bg-slate-800 text-emerald-400 border border-emerald-500/50 hover:bg-slate-700'
                }`}
              >
                <span>🟢 MỞ CẤP QUYỀN HỌC SINH</span>
              </button>

              <button
                type="button"
                onClick={async () => {
                  const updated = await revokeAllStudentsAccess();
                  setAccessConfig({ ...updated });
                  toast.success('ĐÃ CẤM QUYỀN! Toàn bộ học sinh đã bị khóa.', { icon: '🛑' });
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                  accessConfig?.is_locked ? 'bg-rose-600 text-white ring-2 ring-rose-400' : 'bg-slate-800 text-rose-400 border border-rose-500/50 hover:bg-slate-700'
                }`}
              >
                <span>🛑 CẤM QUYỀN (KHÓA TỨC THÌ)</span>
              </button>
            </div>
          </div>
        )}




        {/* 📚 KHÓA HỌC & BÀI GIẢNG VIDEO ĐƯỢC CẤP QUYỀN */}
        {visibleCourses.length > 0 && (
          <div className="space-y-3 animate-fade-in">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>Khóa Học & Video Bài Giảng Của Em ({visibleCourses.length}):</span>
              </h3>
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                Thầy Thọ Cấp Quyền 🌟
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {visibleCourses.map((c: any) => {
                const totalLessons = (c.chapters || []).reduce((acc: number, ch: any) => acc + (ch.lessons?.length || 0), 0);
                const isLayGoc = c.title?.toLowerCase().includes("lấy gốc");

                return (
                  <div
                    key={c.id}
                    onClick={() => {
                      if (c.title?.toLowerCase().includes("hóa") && isLayGoc) {
                        navigate('/khoa-hoc-lay-goc-hoa');
                      } else {
                        navigate(`/course-viewer/${c.id}/${student.id}`);
                      }
                    }}
                    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between gap-3 shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
                      isLayGoc
                        ? "bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-white border-amber-400 ring-2 ring-amber-400/20"
                        : "bg-white hover:bg-teal-50/20 border-slate-200/90 hover:border-teal-400"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          isLayGoc ? "bg-amber-500 text-white" : "bg-teal-600 text-white"
                        }`}>
                          {isLayGoc ? "⚡ Lấy Gốc Đặc Biệt" : "Khóa Học Chính Thức"}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">
                          {c.chapters?.length || 0} chương · {totalLessons} bài
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-black text-slate-900 line-clamp-2 leading-snug">
                        {c.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-medium leading-relaxed">
                        {c.description || "Khóa học kèm video bài giảng, tài liệu PDF và bài tập tự luyện."}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black text-teal-700 flex items-center gap-1">
                        ▶️ Vào học ngay
                      </span>
                      <span className="text-xs text-slate-400 font-bold">➔</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. THÔNG BÁO HỌC PHÍ (NẾU CÓ) */}
        {/* Thông báo học phí */}
        {tuitionNotifications.length > 0 && tuitionNotifications.map((notif) => {
          let addInfo = `HP ${student.student_code}`
          if (/^\d{4}-\d{2}$/.test(notif.course_name)) {
            const [y, m] = notif.course_name.split('-')
            addInfo = `HP ${student.student_code} T${parseInt(m)}${y}`
          } else {
            const cleanCourse = notif.course_name
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[đĐ]/g, 'd')
              .toUpperCase()
              .replace(/[^A-Z0-9\s]/g, '')
              .trim()
            addInfo = `HP ${student.student_code} ${cleanCourse}`
          }
          addInfo = addInfo.substring(0, 25).trim()

          const qrUrl = BANK_ID && BANK_ACCOUNT
            ? `https://img.vietqr.io/image/${BANK_ID}-${BANK_ACCOUNT}-compact2.png?amount=${notif.amount}&addInfo=${encodeURIComponent(addInfo)}&accountName=${encodeURIComponent(BANK_NAME)}`
            : ''

          return (
            <div key={notif.id} className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex flex-col md:flex-row gap-5 items-center justify-between shadow-md shadow-teal-100/50 transition-all hover:scale-[1.01]">
              <div className="flex gap-4 items-start flex-1 w-full">
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-white flex-shrink-0 animate-pulse mt-1">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-teal-800 font-extrabold text-lg uppercase tracking-wide flex items-center gap-2">
                    <span>📢 THÔNG BÁO ĐÓNG HỌC PHÍ</span>
                  </h3>
                  <p className="text-teal-900 font-medium text-base mt-1 leading-relaxed">
                    Học phí khóa <strong className="text-teal-700 font-black">{notif.course_name}</strong> của học sinh <strong className="text-teal-700 font-black">{student.full_name}</strong> là <strong className="text-rose-600 font-black text-lg">{Number(notif.amount).toLocaleString('vi-VN')}</strong> Đồng, phụ huynh vui lòng chuyển khoản vào stk: <strong className="text-teal-700 font-black tracking-wider">{BANK_ACCOUNT}</strong> {BANK_NAME}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(BANK_ACCOUNT)
                        toast.success("Đã copy số tài khoản! 📋")
                      }}
                      className="px-3.5 py-1.5 bg-teal-600 hover:bg-teal-750 text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1"
                    >
                      📋 Copy STK
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(Number(notif.amount).toString())
                        toast.success("Đã copy số tiền! 📋")
                      }}
                      className="px-3.5 py-1.5 bg-white border border-teal-200 text-teal-800 hover:bg-teal-50 rounded-lg text-xs font-bold transition-all shadow-sm"
                    >
                      💵 Copy số tiền
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(addInfo)
                        toast.success("Đã copy nội dung chuyển khoản! 📋")
                      }}
                      className="px-3.5 py-1.5 bg-white border border-teal-200 text-teal-750 hover:bg-teal-50 rounded-lg text-xs font-bold transition-all shadow-sm"
                      title={addInfo}
                    >
                      ✍️ Copy Nội dung: {addInfo}
                    </button>
                  </div>
                </div>
              </div>

              {qrUrl && (
                <div className="flex flex-col items-center bg-white p-2.5 rounded-xl border border-teal-200 shadow-sm flex-shrink-0 w-40">
                  <img
                    src={qrUrl}
                    alt="VietQR"
                    className="w-36 h-36 object-contain rounded-lg border border-gray-100"
                  />
                  <span className="text-[9px] text-teal-700 font-extrabold mt-1 uppercase tracking-wider">Quét VietQR để đóng</span>
                </div>
              )}
            </div>
          )
        })}

        {/* 4. BANNER ÔN LUYỆN LẤY GỐC TOÁN (DÀNH CHO THAYTHO) */}
        {/* BANNER ÔN LUYỆN LẤY GỐC TOÁN (CHỈ HIỂN THỊ KHI THÍ SINH TỰ DO THAYTHO TRUY CẬP) */}
        {student?.student_code === 'THAYTHO' && (
          <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 rounded-2xl p-5 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-2xl flex-shrink-0 animate-pulse shadow-inner">
                ⚡
              </div>
              <div>
                <h3 className="font-black text-lg text-white tracking-wide">KHÔNG GIAN LẤY GỐC TOÁN (LỚP 6 - LỚP 9)</h3>
                <p className="text-xs text-rose-100 font-medium mt-0.5">
                  Luyện tập cộng trừ số âm, quy tắc đổi dấu và chuyển vế tìm x cùng Thầy Thọ!
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/lay-goc-toan')}
              className="px-5 py-2.5 bg-white text-rose-700 hover:bg-rose-50 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Vào Luyện Ngay</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* BANNER ĐẶC BIỆT: KHÓA HỌC LẤY GỐC HÓA HỌC NỀN TẢNG (9 ĐỀ TOÀN DIỆN) */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-900 to-amber-900 text-white p-5 sm:p-7 shadow-xl border-2 border-amber-400/50 hover:border-amber-400 transition-all">
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white pointer-events-none select-none">
            <FlaskConical className="w-56 h-56" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[11px] sm:text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span>KHÓA HỌC ĐẶC BIỆT · 9 ĐỀ THI TOÀN DIỆN CHUẨN ĐỔI MỚI</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2 flex-wrap">
                <span>🧪 LẤY GỐC HÓA HỌC NỀN TẢNG — 9 ĐỀ TOÀN DIỆN</span>
                <span className="text-xs font-bold bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full">360 CÂU TOÀN DIỆN (40 CÂU / ĐỀ)</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                Hệ thống 9 chuyên đề trắc nghiệm toàn diện bao quát 100% các nguyên tố hay thi trong các kì thi lớp 10, 11, 12 và THPT Quốc Gia / Đại học: <strong>Kí hiệu & Tên</strong>, <strong>Kim loại / Phi kim / Khí hiếm</strong>, <strong>Nguyên tử khối (amu)</strong>, <strong>Phân tử khối</strong>, <strong>Hóa trị</strong>, <strong>Lập CTHH vô cơ</strong>, <strong>Phân loại Oxide/Acid/Base/Muối</strong> (đặc biệt các chất lưỡng tính <code className="text-amber-300">Al₂O₃, ZnO, Cr₂O₃; Al(OH)₃, Zn(OH)₂, Cr(OH)₃</code>) và <strong>Tính tan & Hiện tượng kết tủa</strong>!
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  '1. Kí hiệu ➔ Tên',
                  '2. Tên ➔ Kí hiệu',
                  '3. Kim loại / Khí hiếm',
                  '4. Nguyên tử khối',
                  '5. Phân tử khối',
                  '6. Xác định Hóa trị',
                  '7. Lập CTHH vô cơ',
                  '8. Phân loại vô cơ & Lưỡng tính',
                  '9. Tính tan & Kết tủa'
                ].map((tag, idx) => (
                  <span key={idx} className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 backdrop-blur-xs transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 shrink-0">
              <button
                onClick={() => navigate('/khoa-hoc-lay-goc-hoa')}
                className="px-6 py-3.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Vào Học & Luyện 9 Đề Ngay</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-[11px] text-amber-200/80 font-medium text-center lg:text-right">
                ⚡ Tự chấm điểm /10 · Có lời giải chi tiết · In đề PDF
              </span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* ── PHẦN 1: BÀI TẬP VỀ NHÀ (CÓ GIÁM SÁT CHUYỂN TAB) ─────────────── */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {(activeTab === 'homework' || activeTab === 'all') && (
          <section className="space-y-6 bg-white p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/80 sm:border-2 sm:border-rose-100 shadow-sm">
            {/* Header Phần 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 sm:border-rose-200 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-50 to-blue-50 border border-amber-300/60 text-blue-900 text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2 shadow-2xs">
                  <Calculator className="w-3.5 h-3.5 text-blue-700" />
                  <FlaskConical className="w-3.5 h-3.5 text-amber-600" />
                  <span>TOÁN & HÓA: DANH SÁCH ĐỀ THI & BÀI TẬP</span>
                </div>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5 flex-wrap">
                  <span>ĐỀ THI & BÀI TẬP CỦA EM</span>
                  {homeworkPending.length > 0 ? (
                    <span className="text-xs font-black bg-amber-500 text-white px-3 py-0.5 rounded-full">
                      Còn {homeworkPending.length} bài
                    </span>
                  ) : (
                    <span className="text-xs font-black bg-emerald-600 text-white px-3 py-0.5 rounded-full">
                      Đã hoàn thành xuất sắc ✅
                    </span>
                  )}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Em hãy tập trung làm bài thi độc lập, không chuyển tab để rèn luyện phản xạ và đạt kết quả cao nhất nhé!
                </p>
              </div>

              {/* Stats Box */}
              <div className="flex items-center gap-2.5 bg-slate-50 px-3.5 py-2 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700 shrink-0 self-start sm:self-auto">
                <span>Tiến độ:</span>
                <span className="text-sm font-black text-teal-700">
                  {homeworkCompleted.length}/{homeworkRooms.length}
                </span>
                {homeworkAvgScore !== null && (
                  <>
                    <span className="text-slate-300">|</span>
                    <span>Điểm TB: <strong className="text-teal-700">{homeworkAvgScore.toFixed(1)}</strong></span>
                  </>
                )}
              </div>
            </div>

            {/* A. Danh sách BTVN Cần Nộp */}
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>📝 Đề Thi & Bài Tập Cần Nộp Cho Thầy</span>
                <span className="text-xs font-bold text-slate-500">({homeworkPending.length} bài chờ)</span>
              </h3>
              {renderPendingGrid(homeworkPending, 'homework')}
            </div>

            {/* B. Bảng Điểm & Bài Giải BTVN Đã Nộp */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>📊 Bảng Điểm & Lịch Sử Đã Nộp</span>
                <span className="text-xs font-bold text-slate-500">({homeworkCompleted.length} bài)</span>
              </h3>
              {renderCompletedTable(homeworkCompleted, 'homework')}
            </div>
          </section>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* ── PHẦN 2: LUYỆN ĐỀ THEO CHƯƠNG (CÓ GIÁM SÁT CHUYỂN TAB) ───────── */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {isTeacherUser && (activeTab === 'chapter' || activeTab === 'all') && (
          <section className="space-y-6 bg-white p-5 sm:p-7 rounded-3xl border-2 border-blue-100 shadow-sm">
            {/* 🌟 THẺ ĐẶC BIỆT KHO HỌC LIỆU HÓA 12 (TỐI ƯU SIÊU TỐC, CHỈ DÀNH CHO KHỐI 12) */}
            {isGrade12 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Thẻ Chương 1 */}
                {(!isChapterLocked("h12_c1", isTeacherUser, accessConfig) || isTeacherUser) && (
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 rounded-3xl border-2 border-indigo-500/40 shadow-xl flex flex-col justify-between gap-4 relative overflow-hidden">
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center text-2xl shrink-0 shadow-lg">
                      🧪
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                          CHƯƠNG 1
                        </span>
                        <span className="text-xs text-indigo-300 font-bold">495 Câu · 7 Đề</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase ${
                          accessConfig && isChapterLocked('c1', isFreeCandidate, accessConfig)
                            ? 'bg-rose-500 text-white'
                            : 'bg-emerald-500 text-white'
                        }`}>
                          {accessConfig && isChapterLocked('c1', isFreeCandidate, accessConfig) ? '🔒 Đang Khóa' : '🟢 Đang Mở'}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        ESTER – LIPID – XÀ PHÒNG
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">
                        Hệ thống bộ đề 15 câu chống mỏi mắt • 7 Đề chuẩn Bộ GD&ĐT 50 phút • Lời giải chi tiết
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (accessConfig && isChapterLocked('c1', isFreeCandidate, accessConfig)) {
                        toast.error('Chương 1 đang tạm khóa bởi Thầy Thọ! Thầy chưa cấp quyền cho chương này.', { icon: '🔒' });
                        return;
                      }
                      navigate('/hoa12-chuong1');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shrink-0 relative z-10"
                  >
                    <span>🚀 VÀO CHƯƠNG 1 (ESTER - LIPID)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                )}

                                {/* Thẻ Chương 2 */}
                {(!isChapterLocked("h12_c2", isTeacherUser, accessConfig) || isTeacherUser) && (
                <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-6 rounded-3xl border-2 border-emerald-500/40 shadow-xl flex flex-col justify-between gap-4 relative overflow-hidden">
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center text-2xl shrink-0 shadow-lg">
                      🍇
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className="bg-emerald-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                          CHƯƠNG 2 MỚI
                        </span>
                        <span className="text-xs text-emerald-300 font-bold">350+ Câu · 4 Đề Chuẩn</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase ${
                          accessConfig && isChapterLocked('c2', isFreeCandidate, accessConfig)
                            ? 'bg-rose-500 text-white'
                            : 'bg-emerald-500 text-white'
                        }`}>
                          {accessConfig && isChapterLocked('c2', isFreeCandidate, accessConfig) ? '🔒 Đang Khóa' : '🟢 Đang Mở'}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        CARBOHYDRATE
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">
                        Glucose, Fructose, Saccharose, Tinh bột, Cellulose • Tráng bạc & Thủy phân • 4 Đề chuẩn GDPT thang 10
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (accessConfig && isChapterLocked('c2', isFreeCandidate, accessConfig)) {
                        toast.error('Chương 2 đang tạm khóa bởi Thầy Thọ! Thầy chưa cấp quyền cho chương này.', { icon: '🔒' });
                        return;
                      }
                      navigate('/hoa12-chuong2');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shrink-0 relative z-10"
                  >
                    <span>🍇 VÀO CHƯƠNG 2 (CARBOHYDRATE)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                )}

                {/* Thẻ Chương 3 */}
                {(!isChapterLocked("h12_c3", isTeacherUser, accessConfig) || isTeacherUser) && (
                <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-6 rounded-3xl border-2 border-sky-500/40 shadow-xl flex flex-col justify-between gap-4 relative overflow-hidden">
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center text-2xl shrink-0 shadow-lg">
                      🧬
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className="bg-sky-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                          CHƯƠNG 3 MỚI
                        </span>
                        <span className="text-xs text-sky-300 font-bold">580+ Câu · 4 Đề Chuẩn</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase ${
                          accessConfig && isChapterLocked('c3', isFreeCandidate, accessConfig)
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        }`}>
                          {accessConfig && isChapterLocked('c3', isFreeCandidate, accessConfig) ? '🔒 Đang khóa' : '🔓 Đã mở'}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        HỢP CHẤT CHỨA NITROGEN
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">
                        Amine, Amino Acid, Peptide, Protein & Enzyme • Phản ứng màu Biuret & Thủy phân • 4 Đề chuẩn GDPT thang 10
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (accessConfig && isChapterLocked('c3', isFreeCandidate, accessConfig)) {
                        toast.error('Chương 3 đang tạm khóa bởi Thầy Thọ! Thầy chưa cấp quyền cho chương này.', { icon: '🔒' });
                        return;
                      }
                      navigate('/hoa12-chuong3');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shrink-0 relative z-10"
                  >
                    <span>🧬 VÀO CHƯƠNG 3 (NITROGEN)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                )}

                {/* Thẻ Chương 4 */}
                {(!isChapterLocked("h12_c4", isTeacherUser, accessConfig) || isTeacherUser) && (
                <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-6 rounded-3xl border-2 border-amber-500/40 shadow-xl flex flex-col justify-between gap-4 relative overflow-hidden">
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-600 text-white flex items-center justify-center text-2xl shrink-0 shadow-lg">
                      🧶
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                          CHƯƠNG 4 MỚI
                        </span>
                        <span className="text-xs text-amber-300 font-bold">400+ Câu · 4 Đề Chuẩn</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase ${
                          accessConfig && isChapterLocked('c4', isFreeCandidate, accessConfig)
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        }`}>
                          {accessConfig && isChapterLocked('c4', isFreeCandidate, accessConfig) ? '🔒 Đang khóa' : '🔓 Đã mở'}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        POLYMER & VẬT LIỆU
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">
                        Đại cương Polymer, Chất dẻo, Tơ, Cao su, Keo dán • Trùng hợp & Trùng ngưng • 4 Đề chuẩn GDPT thang 10
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (accessConfig && isChapterLocked('c4', isFreeCandidate, accessConfig)) {
                        toast.error('Chương 4 đang tạm khóa bởi Thầy Thọ! Thầy chưa cấp quyền cho chương này.', { icon: '🔒' });
                        return;
                      }
                      navigate('/hoa12-chuong4');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shrink-0 relative z-10"
                  >
                    <span>🧶 VÀO CHƯƠNG 4 (POLYMER)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                )}

                {/* Thẻ Chương 5 */}
                {(!isChapterLocked("h12_c5", isTeacherUser, accessConfig) || isTeacherUser) && (
                <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-6 rounded-3xl border-2 border-teal-500/40 shadow-xl flex flex-col justify-between gap-4 relative overflow-hidden">
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-indigo-600 text-white flex items-center justify-center text-2xl shrink-0 shadow-lg">
                      ⚡
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className="bg-teal-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                          CHƯƠNG 5 MỚI
                        </span>
                        <span className="text-xs text-teal-300 font-bold">440+ Câu · 4 Đề Chuẩn</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase ${
                          accessConfig && isChapterLocked('c5', isFreeCandidate, accessConfig)
                            ? 'bg-rose-500 text-white'
                            : 'bg-emerald-500 text-white'
                        }`}>
                          {accessConfig && isChapterLocked('c5', isFreeCandidate, accessConfig) ? '🔒 Đang Khóa' : '🟢 Đang Mở'}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        PIN ĐIỆN HOÁ VÀ ĐIỆN PHÂN
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">
                        Cặp oxi hoá khử, thế điện cực chuẩn, Pin Galvani • Điện phân nóng chảy & dung dịch • 4 Đề chuẩn 2025
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (accessConfig && isChapterLocked('c5', isFreeCandidate, accessConfig)) {
                        toast.error('Chương 5 đang tạm khóa bởi Thầy Thọ! Thầy chưa cấp quyền cho chương này.', { icon: '🔒' });
                        return;
                      }
                      navigate('/hoa12-chuong5');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shrink-0 relative z-10"
                  >
                    <span>⚡ VÀO CHƯƠNG 5 (PIN & ĐIỆN PHÂN)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                )}
              </div>
            )}

            {/* Header Phần 2 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-blue-200 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider mb-1.5">
                  <span>📘 PHẦN 2</span>
                  <span>·</span>
                  <span>LUYỆN ĐỀ THEO CHƯƠNG</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 uppercase">
                  <span>LUYỆN ĐỀ THEO CHƯƠNG</span>
                  <span className="text-xs font-black bg-blue-600 text-white px-2.5 py-0.5 rounded-full normal-case">
                    {chapterRooms.length} bộ đề
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Ôn tập củng cố kiến thức và rèn luyện kỹ năng làm bài theo từng chuyên đề chương học.
                </p>
              </div>

              {/* Stats Box */}
              <div className="flex items-center gap-2 bg-blue-50 px-3.5 py-2 rounded-2xl border border-blue-200 text-xs font-bold text-blue-800 shrink-0">
                <span>Đã luyện:</span>
                <span className="text-sm font-black text-blue-700">
                  {chapterCompleted.length}/{chapterRooms.length}
                </span>
                {chapterAvgScore !== null && (
                  <>
                    <span className="text-blue-300">|</span>
                    <span>Điểm TB: <strong className="text-blue-700">{chapterAvgScore.toFixed(1)}</strong></span>
                  </>
                )}
              </div>
            </div>

            {/* A. Danh sách Đề Chương Cần Luyện */}
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>📚 Đề Chương Cần Luyện</span>
                <span className="text-xs font-bold text-slate-500">({chapterPending.length} đề chờ)</span>
              </h3>
              {renderPendingGrid(chapterPending, 'chapter')}
            </div>

            {/* B. Bảng Điểm & Bài Giải Đề Chương Đã Nộp */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>📈 Bảng Điểm Luyện Đề Chương</span>
                <span className="text-xs font-bold text-slate-500">({chapterCompleted.length} bài)</span>
              </h3>
              {renderCompletedTable(chapterCompleted, 'chapter')}
            </div>
          </section>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* ── PHẦN 3: LUYỆN ĐỀ THI (CÓ GIÁM SÁT CHUYỂN TAB) ───────────────── */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {isTeacherUser && (activeTab === 'practice' || activeTab === 'all') && (
          <section className="space-y-6 bg-white p-5 sm:p-7 rounded-3xl border-2 border-emerald-100 shadow-sm">
            {/* Banner Luyện Đề Thi Ngọc Lục Bảo Sang Trọng */}
            <div className="bg-gradient-to-br from-emerald-800 via-teal-800 to-teal-900 rounded-2xl p-5 sm:p-6 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/30 text-emerald-200 text-xs font-black uppercase tracking-wider">
                    <Target className="w-4 h-4 text-emerald-300" />
                    <span>PHẦN 3 · LUYỆN ĐỀ THI</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5 uppercase">
                    <span>🎯 LUYỆN ĐỀ THI</span>
                  </h2>
                  <p className="text-emerald-100/90 text-xs sm:text-sm max-w-xl leading-relaxed">
                    Tổng hợp các bộ đề thi học kỳ, thi thử, kiểm tra định kỳ cho từng khối lớp (Khối 6, 7, 8, 9, 10, 11, 12). Rèn giũa bản lĩnh và kỹ năng làm bài thi nghiêm túc!
                  </p>
                  
                  {practiceClasses.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap pt-1">
                      <span className="text-xs text-emerald-200 font-bold">Lớp luyện đề của em:</span>
                      {practiceClasses.map((cls, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 bg-white/20 rounded-full text-xs font-black text-white border border-white/30">
                          🎯 {cls.class_name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3 Thẻ thống kê riêng phần Luyện Đề */}
                <div className="grid grid-cols-3 gap-2 shrink-0">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 text-center min-w-[75px]">
                    <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider block">Tổng Đề</span>
                    <span className="text-lg sm:text-xl font-black text-white mt-0.5 block">{practiceRooms.length}</span>
                    <span className="text-[9px] text-emerald-200">bộ đề</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 text-center min-w-[75px]">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">Đã Luyện</span>
                    <span className="text-lg sm:text-xl font-black text-amber-300 mt-0.5 block">{practiceCompleted.length}</span>
                    <span className="text-[9px] text-emerald-200">bài đã nộp</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 text-center min-w-[75px]">
                    <span className="text-[10px] font-bold text-yellow-300 uppercase tracking-wider block">Điểm TB</span>
                    <span className="text-lg sm:text-xl font-black text-yellow-300 mt-0.5 block">
                      {practiceAvgScore !== null ? practiceAvgScore.toFixed(1) : '-'}
                    </span>
                    <span className="text-[9px] text-emerald-200">thang 10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* A. Danh sách Đề Thi Cần Luyện */}
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>🎯 Đề Thi Cần Luyện</span>
                <span className="text-xs font-bold text-slate-500">({practicePending.length} đề chờ)</span>
              </h3>
              {renderPendingGrid(practicePending, 'practice')}
            </div>

            {/* B. Bảng Điểm & Bài Giải Đề Thi Đã Nộp */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>🏆 Bảng Điểm & Kết Quả Luyện Đề Thi</span>
                <span className="text-xs font-bold text-slate-500">({practiceCompleted.length} bài)</span>
              </h3>
              {renderCompletedTable(practiceCompleted, 'practice')}
            </div>
          </section>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* ── PHẦN 4: KHẢO SÁT CHẤT LƯỢNG (CÓ GIÁM SÁT CHUYỂN TAB) ───────── */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {isTeacherUser && (activeTab === 'survey' || activeTab === 'all') && (
          <section className="space-y-6 bg-white p-5 sm:p-7 rounded-3xl border-2 border-purple-100 shadow-sm">
            {/* Header Phần 4 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-purple-200 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-black uppercase tracking-wider mb-1.5">
                  <span>🟣 PHẦN 4</span>
                  <span>·</span>
                  <span>KHẢO SÁT CHẤT LƯỢNG</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 uppercase">
                  <span>KHẢO SÁT CHẤT LƯỢNG</span>
                  <span className="text-xs font-black bg-purple-600 text-white px-2.5 py-0.5 rounded-full normal-case">
                    {surveyPending.length > 0 ? `Còn ${surveyPending.length} đề` : 'Đã hoàn thành'}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Khảo sát chất lượng định kỳ và đánh giá năng lực học sinh một cách chính xác.
                </p>
              </div>

              {/* Stats Box */}
              <div className="flex items-center gap-2 bg-purple-50 px-3.5 py-2 rounded-2xl border border-purple-200 text-xs font-bold text-purple-800 shrink-0">
                <span>Tiến độ:</span>
                <span className="text-sm font-black text-purple-700">
                  {surveyCompleted.length}/{surveyRooms.length}
                </span>
                {surveyAvgScore !== null && (
                  <>
                    <span className="text-purple-300">|</span>
                    <span>Điểm TB: <strong className="text-purple-700">{surveyAvgScore.toFixed(1)}</strong></span>
                  </>
                )}
              </div>
            </div>

            {/* A. Danh sách Đề Khảo Sát Cần Làm */}
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>📝 Đề Khảo Sát Chất Lượng Cần Làm</span>
                <span className="text-xs font-bold text-slate-500">({surveyPending.length} đề chờ)</span>
              </h3>
              {renderPendingGrid(surveyPending, 'survey')}
            </div>

            {/* B. Bảng Điểm & Kết Quả Khảo Sát Đã Nộp */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>📊 Bảng Điểm Khảo Sát Chất Lượng</span>
                <span className="text-xs font-bold text-slate-500">({surveyCompleted.length} bài)</span>
              </h3>
              {renderCompletedTable(surveyCompleted, 'survey')}
            </div>
          </section>
        )}
      </main>

      {/* MODAL ĐỔI MẬT KHẨU */}
      {isChangePasswordOpen && (
        <div className="fixed inset-0 bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border border-teal-150 shadow-2xl space-y-4 animate-scale-up">
            <div className="flex justify-between items-center border-b border-teal-100 pb-3">
              <h3 className="text-lg font-black text-teal-800 flex items-center gap-2">
                <Lock className="w-5 h-5 text-teal-650" /> Đổi mật khẩu học sinh
              </h3>
              <button
                onClick={() => {
                  setIsChangePasswordOpen(false)
                  resetChangePasswordForm()
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4">
              {/* Mật khẩu hiện tại */}
              <div>
                <label className="block text-xs font-bold text-teal-700 mb-1 uppercase tracking-wide">Mật khẩu hiện tại *</label>
                <div className="relative">
                  <input
                    type={showOldPass ? 'text' : 'password'}
                    value={oldPassword}
                    onChange={e => setOldPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-teal-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-bold text-sm bg-white"
                    placeholder="Nhập mật khẩu hiện tại"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPass(p => !p)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-teal-400 hover:text-teal-600 transition-colors"
                  >
                    {showOldPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Mật khẩu mới */}
              <div>
                <label className="block text-xs font-bold text-teal-700 mb-1 uppercase tracking-wide">Mật khẩu mới *</label>
                <div className="relative">
                  <input
                    type={showNewPass ? 'text' : 'password'}
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-teal-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-bold text-sm bg-white"
                    placeholder="Nhập mật khẩu mới (tối thiểu 4 ký tự)"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPass(p => !p)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-teal-400 hover:text-teal-600 transition-colors"
                  >
                    {showNewPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Xác nhận mật khẩu mới */}
              <div>
                <label className="block text-xs font-bold text-teal-700 mb-1 uppercase tracking-wide">Xác nhận mật khẩu mới *</label>
                <div className="relative">
                  <input
                    type={showConfirmPass ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-teal-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-bold text-sm bg-white"
                    placeholder="Nhập lại mật khẩu mới"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPass(p => !p)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-teal-400 hover:text-teal-600 transition-colors"
                  >
                    {showConfirmPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsChangePasswordOpen(false)
                  resetChangePasswordForm()
                }}
                className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-700 hover:bg-slate-50 rounded-xl transition-all"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={() => { void handleChangePassword() }}
                disabled={isChangingPassword}
                className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-black rounded-xl transition-all shadow-md shadow-teal-500/10 flex items-center gap-1.5"
              >
                {isChangingPassword ? (
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  'Cập nhật'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL ĐỔI ẢNH ĐẠI DIỆN HỌC SINH */}
      {isAvatarModalOpen && (
        <div className="fixed inset-0 bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border border-teal-150 shadow-2xl space-y-5 animate-scale-up">
            <div className="flex justify-between items-center border-b border-teal-100 pb-3">
              <h3 className="text-lg font-black text-teal-800 flex items-center gap-2">
                <Camera className="w-5 h-5 text-teal-600" /> Đổi ảnh đại diện học sinh
              </h3>
              <button
                onClick={() => {
                  setIsAvatarModalOpen(false)
                  setSelectedAvatarFile(null)
                  setAvatarPreviewUrl(null)
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col items-center space-y-4">
              {/* Preview Avatar */}
              <div className="relative group w-32 h-32">
                {avatarPreviewUrl ? (
                  <img
                    src={avatarPreviewUrl}
                    alt="Preview"
                    className="w-32 h-32 rounded-full object-cover border-4 border-teal-500 shadow-md"
                  />
                ) : student?.avatar_url ? (
                  <img
                    src={student.avatar_url}
                    alt={student.full_name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-teal-500 shadow-md"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-600 border-4 border-teal-100 flex items-center justify-center text-white text-4xl font-black shadow-md">
                    {student?.full_name?.charAt(0)?.toUpperCase() || 'H'}
                  </div>
                )}
                
                <label 
                  htmlFor="student-avatar-input"
                  className="absolute inset-0 bg-black/40 hover:bg-black/50 text-white rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-200"
                >
                  <Camera className="w-6 h-6 mb-1" />
                  <span className="text-[10px] font-bold uppercase">Chọn ảnh</span>
                </label>
              </div>

              <input
                id="student-avatar-input"
                type="file"
                accept="image/*"
                onChange={handleSelectAvatarFile}
                className="hidden"
                disabled={isUploadingAvatar}
              />

              <div className="flex flex-wrap justify-center gap-2 w-full">
                <label
                  htmlFor="student-avatar-input"
                  className="px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-700 border border-teal-200 rounded-xl font-bold text-sm cursor-pointer transition-colors flex items-center gap-1.5"
                >
                  <Upload className="w-4 h-4 text-teal-600" />
                  {selectedAvatarFile ? 'Đổi ảnh khác' : 'Tải ảnh từ máy tính'}
                </label>

                {student?.avatar_url && !selectedAvatarFile && (
                  <button
                    type="button"
                    onClick={handleRemoveAvatar}
                    disabled={isUploadingAvatar}
                    className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl font-bold text-sm transition-colors flex items-center gap-1.5"
                  >
                    <Trash2 className="w-4 h-4 text-rose-600" />
                    Xóa ảnh
                  </button>
                )}
              </div>

              {selectedAvatarFile && (
                <p className="text-xs text-teal-600 font-medium truncate max-w-xs">
                  Đã chọn: {selectedAvatarFile.name}
                </p>
              )}
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsAvatarModalOpen(false)
                  setSelectedAvatarFile(null)
                  setAvatarPreviewUrl(null)
                }}
                className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-700 hover:bg-slate-50 rounded-xl transition-all"
              >
                Hủy
              </button>

              <button
                type="button"
                onClick={handleSaveAvatar}
                disabled={!selectedAvatarFile || isUploadingAvatar}
                className="px-5 py-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-black rounded-xl transition-all shadow-md shadow-teal-500/10 flex items-center gap-1.5"
              >
                {isUploadingAvatar ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang tải lên...</span>
                  </>
                ) : (
                  <span>Lưu ảnh</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    
      {/* MODAL CẢNH BÁO & XÁC NHẬN QUY CHẾ KHI HỌC SINH BẤM NÚT BẮT ĐẦU LÀM BÀI */}
      {examRuleModalTarget && (
        <div className="fixed inset-0 z-[999999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 text-slate-900 relative overflow-hidden text-left">
            {/* Thanh gradient cảnh báo */}
            <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-amber-500 via-rose-500 to-rose-600" />
            
            {/* Header Modal */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-600 flex items-center justify-center text-2xl shadow-inner shrink-0">
                  ⚠️
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 text-[10px] font-black uppercase tracking-wider mb-1">
                    <span>CẢNH BÁO QUY CHẾ THI TRỰC TUYẾN</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug line-clamp-2">
                    {examRuleModalTarget.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setExamRuleModalTarget(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Khối CẢNH BÁO QUAN TRỌNG: Thoát quá 3 lần bị thu bài */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-400 flex items-start gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-rose-600 text-white font-black text-lg flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  🛡️
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-black text-rose-950 uppercase tracking-wide">
                    Quy Định Giám Sát Màn Hình (Tối Đa 3 Lần)
                  </h4>
                  <p className="text-xs text-rose-900 leading-relaxed font-semibold">
                    Hệ thống tự động giám sát và ghi lại mỗi khi em chuyển tab, mở ứng dụng khác hoặc thoát màn hình làm bài.
                  </p>
                  <div className="p-2.5 bg-white/95 rounded-xl border-2 border-rose-300 text-xs text-rose-700 font-black leading-snug shadow-2xs">
                    🚨 NẾU THOÁT MÀN HÌNH QUÁ 3 LẦN: HỆ THỐNG SẼ TỰ ĐỘNG THU BÀI VÀ NỘP CHẤM ĐIỂM NGAY LẬP TỨC!
                  </div>
                </div>
              </div>

              {/* Thông tin thang điểm 10 chuẩn & Đồng hồ */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <span className="text-xl">🎯</span>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Thang điểm</div>
                    <div className="text-xs font-black text-indigo-700">Thang 10 Chuẩn</div>
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <span className="text-xl">⏱️</span>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Thời gian</div>
                    <div className="text-xs font-black text-slate-800">Bắt đầu tính giờ ngay</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nút hành động */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setExamRuleModalTarget(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs cursor-pointer transition-all text-center"
              >
                Quay lại ôn tập
              </button>
              <button
                type="button"
                onClick={() => {
                  const target = examRuleModalTarget;
                  const isFree = student?.student_code?.toUpperCase() === 'THAYTHO' || student?.student_code?.toUpperCase() === 'TUDO';
                  if (accessConfig?.is_locked && !isFree) {
                    toast.error('Hệ thống đang tạm khóa! Thầy Thọ chưa cấp quyền vào học hay thi từ Trang Chủ.', {
                      icon: '🔒',
                      duration: 4500
                    });
                    setExamRuleModalTarget(null);
                    return;
                  }
                  setExamRuleModalTarget(null);
                  if (target.type === 'room' && target.id) {
                    navigate(`/exam-room/${target.id}`);
                  } else if (target.type === 'hoa12_c1') {
                    navigate('/hoa12-chuong1');
                  } else if (target.type === 'hoa12_c2') {
                    navigate('/hoa12-chuong2');
                  } else if (target.type === 'hoa12_c5') {
                    navigate('/hoa12-chuong5');
                  }
                }}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-700 hover:to-emerald-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-teal-700/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>🚀 TÔI ĐÃ HIỂU & BẮT ĐẦU LÀM BÀI</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
