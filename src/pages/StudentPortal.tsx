// @ts-nocheck
import { useEffect, useState } from 'react'
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
  CheckCircle2
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
import { format } from 'date-fns'
import { shuffleExamForStudent } from '@/services/mergeExamsService'
import { normalizeExamData } from '@/services/examNormalizer'
import { getStudentCredential, saveStudentCredential } from '@/services/studentCredentialsService'

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

  // Quản lý Tab hiển thị: 'homework' (1. BTVN Bắt buộc) | 'chapter' (2. Luyện Đề Chương) | 'practice' (3. Luyện Đề Thi) | 'all' (Tất cả)
  const [activeTab, setActiveTab] = useState<'homework' | 'chapter' | 'practice' | 'all'>('homework')
  const [enrolledClasses, setEnrolledClasses] = useState<any[]>([])

  useEffect(() => {
    const sessionStr = localStorage.getItem('current_student')
    if (sessionStr) {
      const parsed = JSON.parse(sessionStr)
      setStudent(parsed)
      fetchStudentData(parsed.id)
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
        // NẾU LÀ THÍ SINH TỰ DO (THẦY THỌ) -> ĐẶC QUYỀN LÀM ĐƯỢC 100% TẤT CẢ PHÒNG THI!
        if (isFreeCandidate) return true;

        // Chỉ hiển thị phòng thi thuộc đúng lớp của học sinh (hoặc được chỉ định cụ thể)
        const isMyClass = room.class_id && myClassIds.includes(room.class_id)
        const assignedIds = room.settings?.assigned_student_ids
        const isExplicitlyAssigned = Array.isArray(assignedIds) && assignedIds.includes(studentId)

        if (!isMyClass && !isExplicitlyAssigned) return false

        // Kiểm tra nếu phòng thi có chỉ định danh sách học sinh cụ thể
        if (Array.isArray(assignedIds) && assignedIds.length > 0 && !assignedIds.includes(studentId)) {
          return false
        }

        // Nếu phòng thi đã kết thúc/khóa (closed) mà học sinh chưa từng nộp bài -> ẩn đi
        if (room.status === 'closed' && !submittedRoomIds.includes(room.id)) {
          return false
        }

        return true
      })

      // Đã loại bỏ logic tự động nộp bài (0 điểm) khi quay về portal để hỗ trợ làm tiếp
      setExamsList(eligibleRooms)
      setSubmissionsList(subs || [])
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
        className="min-h-screen flex items-center justify-center p-4"
        style={{ background: 'linear-gradient(135deg, #ccfbf1 0%, #5eead4 50%, #0d9488 100%)' }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full max-w-md animate-fade-in">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-teal-200 overflow-hidden">
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

              {/* Cảnh báo giám sát */}
              <div className="bg-amber-50 text-amber-700 p-4 rounded-xl flex gap-2.5 text-xs font-medium border border-amber-100">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">Hệ thống có giám sát chuyển tab. Vui lòng tập trung làm bài thi.</p>
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

              {/* Nút đăng nhập nhanh dành riêng cho Thầy Thọ (Thí sinh tự do) */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setStudentCodeInput('THAYTHO')
                    setPasswordInput('123456')
                    toast.success('👑 Đã điền sẵn tài khoản Thí sinh tự do: THAYTHO. Bấm "VÀO HỆ THỐNG" để làm tất cả bài thi!');
                  }}
                  className="w-full py-2.5 px-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 text-amber-900 border border-amber-300 rounded-xl text-xs font-extrabold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>👑 Thí Sinh Tự Do (Thầy Thọ)</span>
                  <span className="text-[10px] font-normal text-amber-700">(Bấm điền tự động)</span>
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

  // ── PHÂN LOẠI 3 PHẦN ĐỘC LẬP & LOGIC ─────────────────────────────
  // 1. Bài Tập Về Nhà (homework) - Bắt buộc sau mỗi buổi học, chống gian lận
  // 2. Luyện Đề Chương (chapter) - Ôn tập lý thuyết & chuyên đề, tự do tra cứu
  // 3. Luyện Đề Thi (practice) - Đề thi thử, tổng hợp, tự do tra cứu & làm lại
  const homeworkRooms = examsList.filter(r => getExamCategory(r) === 'homework')
  const chapterRooms = examsList.filter(r => getExamCategory(r) === 'chapter')
  const practiceRooms = examsList.filter(r => getExamCategory(r) === 'practice')

  const homeworkPending = pendingExams.filter(r => getExamCategory(r) === 'homework')
  const chapterPending = pendingExams.filter(r => getExamCategory(r) === 'chapter')
  const practicePending = pendingExams.filter(r => getExamCategory(r) === 'practice')

  const homeworkCompleted = completedExams.filter(({ room }) => getExamCategory(room) === 'homework')
  const chapterCompleted = completedExams.filter(({ room }) => getExamCategory(room) === 'chapter')
  const practiceCompleted = completedExams.filter(({ room }) => getExamCategory(room) === 'practice')

  const homeworkAvgScore = homeworkCompleted.length > 0
    ? homeworkCompleted.reduce((sum, item) => sum + (item.sub?.score || 0), 0) / homeworkCompleted.length
    : null

  const chapterAvgScore = chapterCompleted.length > 0
    ? chapterCompleted.reduce((sum, item) => sum + (item.sub?.score || 0), 0) / chapterCompleted.length
    : null

  const practiceAvgScore = practiceCompleted.length > 0
    ? practiceCompleted.reduce((sum, item) => sum + (item.sub?.score || 0), 0) / practiceCompleted.length
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
              ? '🎉 Tuyệt vời! Em đã hoàn thành tất cả bài tập về nhà.'
              : category === 'chapter'
              ? '📘 Hiện tại chưa có bài ôn tập chương nào đang chờ.'
              : '🎯 Em đã làm xong các bộ đề thi thử hiện có!'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
            {category === 'homework'
              ? 'Thầy Thọ khen ngợi tinh thần tự giác của em! Hãy tiếp tục duy trì nhé.'
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
              className={`bg-white rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 ${
                category === 'homework' 
                  ? 'border-rose-100 hover:border-rose-300' 
                  : category === 'chapter'
                  ? 'border-blue-100 hover:border-blue-300'
                  : 'border-emerald-100 hover:border-emerald-300'
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-200/20 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-xl border border-slate-200">
                      🏫 {room.classes?.class_name || 'Đề tự do'}
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
                  {category === 'homework' ? (
                    <span className="bg-rose-50 text-rose-700 px-2.5 py-1 rounded-lg border border-rose-200 text-[11px] font-bold">
                      🛡️ Có giám sát chuyển tab
                    </span>
                  ) : (
                    <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-200 text-[11px] font-bold">
                      ✨ Tự do tra cứu tài liệu
                    </span>
                  )}
                  {hasSub && (
                    <span className="bg-amber-50 text-amber-800 px-2.5 py-1 rounded-lg border border-amber-200 text-[10px] uppercase font-black animate-pulse">
                      ⚡ Đang làm dở
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-400 font-medium">
                  Mã đề: <span className="font-mono font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">{room.code}</span>
                </span>

                {isClosed ? (
                  <button disabled className="px-4 py-2 bg-slate-100 text-slate-400 text-xs font-bold rounded-xl cursor-not-allowed border border-slate-200">
                    Đã đóng
                  </button>
                ) : isWaiting ? (
                  <button disabled className="px-4 py-2 bg-amber-50 text-amber-600 text-xs font-bold rounded-xl cursor-not-allowed border border-amber-200">
                    Chờ mở phòng
                  </button>
                ) : (
                  <button 
                    onClick={() => navigate(`/exam-room/${room.id}`)}
                    className={`px-5 py-2.5 bg-gradient-to-r ${btnGradient} text-xs sm:text-sm font-black rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer`}
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{hasSub ? 'Làm tiếp ⚡' : category === 'homework' ? 'Vào làm BTVN 🚀' : category === 'chapter' ? 'Ôn chương ngay 🚀' : 'Bắt đầu luyện 🚀'}</span>
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
      : 'from-emerald-700 to-teal-800'

    return (
      <div className="space-y-4">
        {/* Dạng Bảng Desktop */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className={`bg-gradient-to-r ${tableHeaderGrad} text-white font-black text-xs uppercase tracking-wider`}>
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
                        {room.classes?.class_name || 'Tự do'}
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
        <div className="grid grid-cols-1 gap-3 md:hidden">
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
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex flex-col justify-between gap-3"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      #{index + 1} · {room.classes?.class_name || 'Tự do'}
                    </span>
                    <span className={`text-lg font-black ${
                      isHigh ? 'text-emerald-600' : isPass ? 'text-teal-600' : 'text-rose-600'
                    }`}>
                      {score !== null ? `${score} đ` : '-'}
                    </span>
                  </div>

                  <h5 className="font-black text-slate-800 text-sm line-clamp-2 leading-snug">
                    {room.exams?.title || `Phòng thi ${room.code}`}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-1">Nộp: {formattedDate}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    onClick={() => navigate(`/exam-room/${room.id}`)}
                    className="px-3.5 py-1.5 bg-teal-600 text-white rounded-xl text-xs font-black"
                  >
                    Xem giải 🔍
                  </button>
                  {canRetake && (
                    <button
                      onClick={() => handleRetakeExam(room, sub)}
                      className="p-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl"
                      title="Thi lại"
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
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
                <span className="text-[9px] sm:text-[10px] font-bold text-teal-600 font-mono tracking-wider">#{student.student_code}</span>
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
        {/* BANNER CHÀO MỪNG HỌC SINH & THỐNG KÊ NHANH */}
        <div className="bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-teal-100 text-xs font-black uppercase tracking-wider border border-white/20">
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Không gian học tập & thi trực tuyến</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Xin chào, {student.full_name}! 👋
              </h2>
              <p className="text-teal-100/90 text-sm font-medium max-w-xl leading-relaxed">
                Thầy Thọ chúc em luôn giữ vững tinh thần tự giác, hoàn thành xuất sắc các bài tập và đạt điểm số cao nhất nhé!
              </p>
              
              {/* Danh sách lớp học sinh tham gia */}
              <div className="flex items-center gap-2 flex-wrap pt-1">
                {enrolledClasses.length > 0 ? (
                  enrolledClasses.map((cls, idx) => {
                    const isPrac = isPracticeClassName(cls.class_name)
                    return (
                      <span 
                        key={idx} 
                        className={`text-xs font-bold px-3 py-0.5 rounded-full border shadow-2xs flex items-center gap-1 ${
                          isPrac 
                            ? 'bg-emerald-500/30 text-emerald-100 border-emerald-300/40' 
                            : 'bg-white/20 text-white border-white/30'
                        }`}
                      >
                        {isPrac ? '🎯 Lớp Luyện Đề: ' : '📚 Lớp: '}{cls.class_name}
                      </span>
                    )
                  })
                ) : (
                  <span className="text-xs text-teal-200/90 font-medium">Lớp: {student.grade || 'Học sinh'}</span>
                )}
              </div>
            </div>

            {/* 3 Thẻ thống kê tương ứng trực tiếp với 3 Trụ Cột (Bấm vào thẻ để chuyển tab) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 shrink-0">
              {/* Thẻ 1: 🔴 BTVN */}
              <button
                type="button"
                onClick={() => setActiveTab('homework')}
                className={`p-3 sm:p-3.5 rounded-2xl border text-center flex flex-col items-center justify-center min-w-[90px] sm:min-w-[105px] transition-all cursor-pointer backdrop-blur-md shadow-sm ${
                  activeTab === 'homework'
                    ? 'bg-rose-500/35 border-rose-300 ring-2 ring-rose-400/50'
                    : 'bg-white/15 border-white/20 hover:bg-white/25'
                }`}
              >
                <span className="text-[10px] font-black text-rose-200 uppercase tracking-wider flex items-center gap-1">
                  <span>🔴</span> 1. BTVN
                </span>
                <span className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {homeworkCompleted.length}/{homeworkRooms.length}
                </span>
                <span className={`text-[10px] font-bold ${
                  homeworkPending.length > 0 ? 'text-rose-300 animate-pulse font-black' : 'text-teal-200'
                }`}>
                  {homeworkPending.length > 0 ? `Nợ ${homeworkPending.length} bài ⚠️` : 'Hoàn thành ✅'}
                </span>
              </button>

              {/* Thẻ 2: 📘 Đề Chương */}
              <button
                type="button"
                onClick={() => setActiveTab('chapter')}
                className={`p-3 sm:p-3.5 rounded-2xl border text-center flex flex-col items-center justify-center min-w-[90px] sm:min-w-[105px] transition-all cursor-pointer backdrop-blur-md shadow-sm ${
                  activeTab === 'chapter'
                    ? 'bg-blue-500/35 border-blue-300 ring-2 ring-blue-400/50'
                    : 'bg-white/15 border-white/20 hover:bg-white/25'
                }`}
              >
                <span className="text-[10px] font-black text-blue-200 uppercase tracking-wider flex items-center gap-1">
                  <span>📘</span> 2. Chương
                </span>
                <span className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {chapterCompleted.length}/{chapterRooms.length}
                </span>
                <span className="text-[10px] text-blue-200 font-bold">
                  {chapterAvgScore !== null ? `ĐTB: ${chapterAvgScore.toFixed(1)}` : 'Tự do ôn tập'}
                </span>
              </button>

              {/* Thẻ 3: 🎯 Luyện Đề Thi */}
              <button
                type="button"
                onClick={() => setActiveTab('practice')}
                className={`p-3 sm:p-3.5 rounded-2xl border text-center flex flex-col items-center justify-center min-w-[90px] sm:min-w-[105px] transition-all cursor-pointer backdrop-blur-md shadow-sm ${
                  activeTab === 'practice'
                    ? 'bg-emerald-500/35 border-emerald-300 ring-2 ring-emerald-400/50'
                    : 'bg-white/15 border-white/20 hover:bg-white/25'
                }`}
              >
                <span className="text-[10px] font-black text-emerald-200 uppercase tracking-wider flex items-center gap-1">
                  <span>🎯</span> 3. Luyện Đề
                </span>
                <span className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {practiceCompleted.length}/{practiceRooms.length}
                </span>
                <span className="text-[10px] text-emerald-200 font-bold">
                  {practiceAvgScore !== null ? `ĐTB: ${practiceAvgScore.toFixed(1)}` : 'Đề thi thử'}
                </span>
              </button>
            </div>
          </div>
        </div>

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

        {/* CẢNH BÁO BÀI TẬP VỀ NHÀ CHƯA NỘP (CHỈ CẢNH BÁO KHI BTVN CHƯA HOÀN THÀNH) */}
        {homeworkPending.length > 0 && (
          <div className="bg-gradient-to-r from-rose-500 via-red-600 to-rose-600 rounded-2xl p-5 text-white shadow-lg shadow-rose-600/20 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0 animate-bounce">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-black text-base sm:text-lg uppercase tracking-wide flex items-center gap-2 text-white">
                  <span>⚠️ CẢNH BÁO BÀI TẬP VỀ NHÀ (BẮT BUỘC)</span>
                </h3>
                <p className="text-rose-100 font-medium text-xs sm:text-sm mt-0.5">
                  Em còn <strong className="text-white text-base font-black underline underline-offset-4 mx-1">{homeworkPending.length} bài tập về nhà</strong> bắt buộc cần hoàn thành. Hãy nộp bài đúng hạn nhé!
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('homework')}
              className="px-4 py-2.5 bg-white text-rose-700 hover:bg-rose-50 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <span>Vào Làm BTVN Ngay</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* LƯU Ý QUY CHẾ LÀM BÀI LOGIC & RÕ RÀNG */}
        <div className="bg-amber-50 text-amber-800 p-4 rounded-2xl flex gap-3 text-xs sm:text-sm font-medium border border-amber-200/60 shadow-2xs">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold">Lưu ý phân biệt các phần:</span> Mục <strong className="text-rose-700 font-black">1. Bài Tập Về Nhà</strong> có giám sát chuyển tab để rèn luyện tính tự giác. Còn mục <strong className="text-blue-700 font-black">2. Luyện Đề Chương</strong> và <strong className="text-emerald-700 font-black">3. Luyện Đề Thi</strong> hoàn toàn tự do tra cứu tài liệu, không phạt chuyển tab và có thể thi lại nhiều lần.
          </div>
        </div>

        {/* THANH ĐIỀU HƯỚNG 3 PHẦN THÔNG MINH (CHUYÊN NGHIỆP & DỄ SỬ DỤNG) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="grid grid-cols-3 sm:flex sm:items-center gap-1.5">
            {/* Tab 1: BTVN */}
            <button
              onClick={() => setActiveTab('homework')}
              className={`px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeTab === 'homework'
                  ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-600/25 ring-2 ring-rose-400/40'
                  : 'bg-rose-50/70 hover:bg-rose-100/70 text-rose-900 border border-rose-200/60'
              }`}
            >
              <span>🔴</span>
              <span className="truncate">1. Bài Tập Về Nhà</span>
              <span className={`text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded-full ${
                activeTab === 'homework'
                  ? 'bg-white/20 text-white'
                  : homeworkPending.length > 0
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-rose-200 text-rose-800'
              }`}>
                {homeworkPending.length > 0 ? `Nợ ${homeworkPending.length}` : homeworkRooms.length}
              </span>
            </button>

            {/* Tab 2: Luyện Đề Chương */}
            <button
              onClick={() => setActiveTab('chapter')}
              className={`px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeTab === 'chapter'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/25 ring-2 ring-blue-400/40'
                  : 'bg-blue-50/70 hover:bg-blue-100/70 text-blue-900 border border-blue-200/60'
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span className="truncate">2. Luyện Đề Chương</span>
              <span className={`text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded-full ${
                activeTab === 'chapter'
                  ? 'bg-white/20 text-white'
                  : 'bg-blue-200 text-blue-800'
              }`}>
                {chapterRooms.length}
              </span>
            </button>

            {/* Tab 3: Luyện Đề Thi */}
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/25 ring-2 ring-emerald-400/40'
                  : 'bg-emerald-50/70 hover:bg-emerald-100/70 text-emerald-900 border border-emerald-200/60'
              }`}
            >
              <Target className="w-4 h-4 text-emerald-500" />
              <span className="truncate">3. Luyện Đề Thi</span>
              <span className={`text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded-full ${
                activeTab === 'practice' 
                  ? 'bg-white/20 text-white' 
                  : 'bg-emerald-200 text-emerald-800'
              }`}>
                {practiceRooms.length}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 px-2 text-xs font-bold text-slate-500">
            <button
              onClick={() => setActiveTab(activeTab === 'all' ? 'homework' : 'all')}
              className="text-xs text-teal-700 hover:text-teal-900 font-bold underline cursor-pointer"
            >
              {activeTab === 'all' ? 'Chỉ hiện tab đang chọn' : 'Xem tất cả trên 1 trang'}
            </button>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* ── PHẦN 1: BÀI TẬP VỀ NHÀ (BẮT BUỘC - GIÁM SÁT CHỐNG GIAN LẬN) ── */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {(activeTab === 'homework' || activeTab === 'all') && (
          <section className="space-y-6 bg-white p-5 sm:p-7 rounded-3xl border-2 border-rose-100 shadow-sm">
            {/* Header Phần 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-rose-200 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black uppercase tracking-wider mb-1.5">
                  <span>🔴 PHẦN 1</span>
                  <span>·</span>
                  <span>BẮT BUỘC HOÀN THÀNH</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Bài Tập Về Nhà Sau Buổi Học</span>
                  <span className="text-xs font-black bg-rose-600 text-white px-2.5 py-0.5 rounded-full">
                    {homeworkPending.length > 0 ? `Còn ${homeworkPending.length} bài` : 'Đã xong hết'}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Nhiệm vụ bắt buộc hoàn thành sau mỗi buổi học. Hệ thống bật giám sát chống gian lận để rèn luyện tính tự giác.
                </p>
              </div>

              {/* Stats Box */}
              <div className="flex items-center gap-2 bg-rose-50 px-3.5 py-2 rounded-2xl border border-rose-200 text-xs font-bold text-rose-800 shrink-0">
                <span>Tiến độ:</span>
                <span className="text-sm font-black text-rose-700">
                  {homeworkCompleted.length}/{homeworkRooms.length}
                </span>
                {homeworkAvgScore !== null && (
                  <>
                    <span className="text-rose-300">|</span>
                    <span>Điểm TB: <strong className="text-rose-700">{homeworkAvgScore.toFixed(1)}</strong></span>
                  </>
                )}
              </div>
            </div>

            {/* A. Danh sách BTVN Cần Nộp */}
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>📝 Đề BTVN Cần Nộp Cho Thầy</span>
                <span className="text-xs font-bold text-slate-500">({homeworkPending.length} bài chờ)</span>
              </h3>
              {renderPendingGrid(homeworkPending, 'homework')}
            </div>

            {/* B. Bảng Điểm & Bài Giải BTVN Đã Nộp */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>📊 Bảng Điểm & Lịch Sử BTVN Đã Nộp</span>
                <span className="text-xs font-bold text-slate-500">({homeworkCompleted.length} bài)</span>
              </h3>
              {renderCompletedTable(homeworkCompleted, 'homework')}
            </div>
          </section>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* ── PHẦN 2: LUYỆN ĐỀ THEO CHƯƠNG / CHUYÊN ĐỀ (TỰ DO TRA CỨU) ──── */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {(activeTab === 'chapter' || activeTab === 'all') && (
          <section className="space-y-6 bg-white p-5 sm:p-7 rounded-3xl border-2 border-blue-100 shadow-sm">
            {/* Header Phần 2 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-blue-200 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider mb-1.5">
                  <span>📘 PHẦN 2</span>
                  <span>·</span>
                  <span>TỰ DO TRA CỨU TÀI LIỆU</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Luyện Đề Theo Chương & Chuyên Đề</span>
                  <span className="text-xs font-black bg-blue-600 text-white px-2.5 py-0.5 rounded-full">
                    {chapterRooms.length} bộ đề
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Ôn tập củng cố lý thuyết & các dạng bài tập theo từng chương. Tự do tra cứu sách vở, không phạt chuyển tab.
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
        {/* ── PHẦN 3: LUYỆN ĐỀ THI THỬ & THỰC CHIẾN (TỰ DO TRA CỨU) ──────── */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {(activeTab === 'practice' || activeTab === 'all') && (
          <section className="space-y-6 bg-white p-5 sm:p-7 rounded-3xl border-2 border-emerald-100 shadow-sm">
            {/* Banner Luyện Đề Thi Thử Ngọc Lục Bảo Sang Trọng */}
            <div className="bg-gradient-to-br from-emerald-800 via-teal-800 to-teal-900 rounded-2xl p-5 sm:p-6 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/30 text-emerald-200 text-xs font-black uppercase tracking-wider">
                    <Target className="w-4 h-4 text-emerald-300" />
                    <span>PHẦN 3 · THỰC CHIẾN ĐỀ THI</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                    <span>🎯 Hệ Thống Luyện Đề Thi Thử</span>
                  </h2>
                  <p className="text-emerald-100/90 text-xs sm:text-sm max-w-xl leading-relaxed">
                    Tổng hợp các bộ đề thi thử vào 10, tốt nghiệp THPT và đề thi định kỳ. 
                    <span className="font-bold text-emerald-200"> Hoàn toàn tự do tra cứu, không giới hạn chuyển tab</span> để rèn giũa bản lĩnh phòng thi!
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

            {/* A. Danh sách Đề Thi Thử Cần Luyện */}
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>🎯 Đề Thi Thử Cần Luyện</span>
                <span className="text-xs font-bold text-slate-500">({practicePending.length} đề chờ)</span>
              </h3>
              {renderPendingGrid(practicePending, 'practice')}
            </div>

            {/* B. Bảng Điểm & Bài Giải Đề Thi Thử Đã Nộp */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                <span>🏆 Bảng Điểm & Kết Quả Luyện Đề Thi</span>
                <span className="text-xs font-bold text-slate-500">({practiceCompleted.length} bài)</span>
              </h3>
              {renderCompletedTable(practiceCompleted, 'practice')}
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
    </div>
  )
}
