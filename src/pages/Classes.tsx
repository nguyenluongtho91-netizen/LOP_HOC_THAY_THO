// @ts-nocheck
import { useEffect, useState, useMemo } from 'react'
import {
  Plus, Pencil, Users, BookOpen, User, Trash2, Search, UserPlus,
  GraduationCap, Calendar, MapPin, CheckCircle2, DollarSign, CalendarCheck,
  LayoutGrid, Table as TableIcon, Phone, ExternalLink, ArrowRight, Sparkles, Filter
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDataStore } from '@/store/dataStore'
import { useAuthStore } from '@/store/authStore'
import Modal from '@/components/Modal'
import StudentScorecardModal from '@/components/StudentScorecardModal'
import { fmtVNDShort } from '@/lib/helpers'
import toast from 'react-hot-toast'
import { supabase } from '@/lib/supabase'

const EMPTY = {
  class_name: '', name: '', subject: 'Toán', grade: '', teacher_id: '', fee_per_session: '',
  planned_sessions: '', start_date: '', max_students: 30,
  room: '', school: '', schedule: '', note: '', status: 'active'
}

// Bảng màu phân khối lớp chuyên nghiệp
const GRADE_COLORS: Record<string, { bg: string; text: string; border: string; pill: string }> = {
  '6': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', pill: 'bg-emerald-600 text-white' },
  '7': { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200', pill: 'bg-sky-600 text-white' },
  '8': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', pill: 'bg-indigo-600 text-white' },
  '9': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200', pill: 'bg-amber-600 text-white' },
  '10': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', pill: 'bg-rose-600 text-white' },
  '11': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', pill: 'bg-purple-600 text-white' },
  '12': { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200', pill: 'bg-teal-700 text-white' },
}

export default function Classes() {
  const navigate = useNavigate()
  const {
    classes, students, enrollments, profiles, loadClasses, loadStudents, loadEnrollments, loadProfiles,
    addClass, updateClass, enroll, unenroll
  } = useDataStore()

  const { user, isAdmin } = useAuthStore() as any

  const [modal, setModal]             = useState<'form' | 'add_student' | null>(null)
  const [editing, setEditing]         = useState<any>(null)
  const [form, setForm]               = useState(EMPTY)
  const [selClass, setSelClass]       = useState<any>(null)
  const [scorecardStudent, setScorecardStudent] = useState<any>(null)
  const [saving, setSaving]           = useState(false)
  const [search, setSearch]           = useState('')
  const [leftSearch, setLeftSearch]   = useState('')
  const [rightSearch, setRightSearch] = useState('')
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null)
  const [viewMode, setViewMode]       = useState<'cards' | 'table'>('cards')

  useEffect(() => {
    loadClasses()
    loadStudents()
    loadEnrollments()
    loadProfiles()
  }, [])

  const openAdd = () => {
    setEditing(null)
    setForm({ ...EMPTY, teacher_id: isAdmin() ? '' : user?.id })
    setModal('form')
  }

  const openEdit = (c: any) => {
    setEditing(c)
    const nameVal = c.class_name || c.name || ''
    setForm({
      ...c,
      class_name: nameVal,
      name: nameVal
    })
    setModal('form')
  }

  const save = async () => {
    const nameVal = (form.class_name || form.name || '').trim()
    if (!nameVal) return toast.error('Vui lòng nhập tên lớp học')
    if (!form.grade) return toast.error('Vui lòng chọn Khối lớp')

    setSaving(true)
    try {
      const payload: any = {
        ...form,
        class_name: nameVal,
        name: nameVal,
        fee_per_session: Number(form.fee_per_session) || 0,
        planned_sessions: Number(form.planned_sessions) || 0,
        max_students: Number(form.max_students) || 30,
        start_date: form.start_date || null,
        teacher_id: form.teacher_id || null
      }

      if (editing) await updateClass(editing.id, payload)
      else await addClass(payload)

      toast.success(editing ? 'Đã cập nhật lớp' : 'Đã thêm lớp mới')
      setModal(null)
      loadClasses()
    } catch (e: any) {
      toast.error(e.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteClass = async (id: string, className: string) => {
    const confirmMsg = `Thầy/Cô có chắc chắn muốn xóa lớp "${className}"?\n\nHành động này sẽ dọn dẹp các phân công học sinh của lớp này. Không thể hoàn tác!`
    if (!window.confirm(confirmMsg)) return

    const toastId = toast.loading('Đang xóa lớp học...')
    try {
      const { error } = await supabase.from('classes').delete().eq('id', id)
      if (error) throw error

      toast.success('Đã xóa lớp học thành công!', { id: toastId })
      loadClasses()
      if (selClass?.id === id) setSelClass(null)
    } catch (e: any) {
      toast.error(e.message || 'Lỗi khi xóa lớp học!', { id: toastId })
    }
  }

  // Phân quyền lớp
  const myClasses = isAdmin() ? classes : classes.filter((c: any) => c.teacher_id === user?.id)

  // SẮP XẾP LỚP HỌC MỘT CÁCH HỢP LÝ & KHOA HỌC:
  // 1. Sắp xếp theo Khối lớp tăng dần: Khối 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12
  // 2. Cùng khối sắp xếp theo Tên lớp: Lớp 7.1 -> Lớp 7.2...
  const sortedClasses = useMemo(() => {
    return [...myClasses].sort((a: any, b: any) => {
      const gradeA = parseInt(String(a.grade || '').replace(/\D/g, '') || '0', 10)
      const gradeB = parseInt(String(b.grade || '').replace(/\D/g, '') || '0', 10)
      if (gradeA !== gradeB) {
        return gradeA - gradeB
      }
      const nameA = (a.class_name || a.name || '').trim()
      const nameB = (b.class_name || b.name || '').trim()
      return nameA.localeCompare(nameB, 'vi', { numeric: true })
    })
  }, [myClasses])

  // Lọc theo tìm kiếm và Khối lớp
  const filtered = useMemo(() => {
    return sortedClasses.filter(c => {
      const cName = (c.class_name || c.name || '').toLowerCase()
      const cSubject = (c.subject || '').toLowerCase()
      const matchesSearch = cName.includes(search.toLowerCase()) || cSubject.includes(search.toLowerCase())
      const matchesGrade = selectedGrade === null || String(c.grade) === selectedGrade
      return matchesSearch && matchesGrade
    })
  }, [sortedClasses, search, selectedGrade])

  // Lớp đang chọn
  const currentClass = useMemo(() => {
    if (selClass?.id) {
      const found = classes.find(c => c.id === selClass.id)
      if (found) return found
    }
    return filtered.length > 0 ? filtered[0] : null
  }, [classes, selClass, filtered])

  // Tự động set selClass nếu chưa có
  useEffect(() => {
    if (!selClass && filtered.length > 0) {
      setSelClass(filtered[0])
    }
  }, [filtered, selClass])

  // Đơn giá của lớp (Lớp 7.2 = 60k, lớp khác = 80k)
  const getClassPrice = (c: any): number => {
    if (!c) return 80000
    const name = (c.class_name || c.name || '').toLowerCase()
    const is72 = name.includes('7.2') || name.includes('72')
    return is72 ? 60000 : 80000
  }

  // Danh sách học sinh trong lớp hiện tại
  const rosterStudents = useMemo((): any[] => {
    if (!currentClass) return []
    return enrollments
      .filter(e => e.class_id === currentClass.id && e.status === 'active')
      .map(e => students.find(s => s.id === e.student_id))
      .filter(Boolean)
      .sort((a, b) => (a.full_name || '').localeCompare(b.full_name || '', 'vi'))
  }, [currentClass, enrollments, students])

  const filteredRoster = useMemo(() => {
    return rosterStudents.filter(s => {
      const nameMatch = (s.full_name || '').toLowerCase().includes(leftSearch.toLowerCase())
      const codeMatch = (s.student_code || '').toLowerCase().includes(leftSearch.toLowerCase())
      const phoneMatch = ((s.parent_phone || s.zalo || '')).includes(leftSearch)
      return nameMatch || codeMatch || phoneMatch
    })
  }, [rosterStudents, leftSearch])

  // Học sinh khả dụng để thêm vào lớp
  const filteredAllStudents = useMemo(() => {
    return students
      .filter(s => s.status === 'active')
      .filter(s => currentClass ? !enrollments.some(e => e.class_id === currentClass.id && e.student_id === s.id && e.status === 'active') : true)
      .filter(s => {
        const q = rightSearch.toLowerCase()
        return (
          (s.full_name || '').toLowerCase().includes(q) ||
          (s.student_code || '').toLowerCase().includes(q) ||
          (s.school || '').toLowerCase().includes(q)
        )
      })
      .sort((a, b) => (a.full_name || '').localeCompare(b.full_name || '', 'vi'))
  }, [students, currentClass, enrollments, rightSearch])

  const inp = (field: keyof typeof EMPTY, extra = {}) => ({
    value: form[field] || '',
    onChange: (e: any) => setForm(f => ({ ...f, [field]: e.target.value })),
    className: 'input',
    ...extra,
  })

  const teachers = profiles.filter(p => p.role === 'TEACHER' || p.role === 'ADMIN')

  // Đếm số lớp theo từng khối để hiện trên nút lọc
  const gradeCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const c of myClasses) {
      const g = String(c.grade || '')
      counts[g] = (counts[g] || 0) + 1
    }
    return counts
  }, [myClasses])

  // Thống kê bài tập của lớp
  const [statsLoading, setStatsLoading] = useState(false)
  const [completedStats, setCompletedStats] = useState<Record<string, number>>({})

  const fetchClassStats = async () => {
    if (!currentClass?.id) {
      setCompletedStats({})
      return
    }
    setStatsLoading(true)
    try {
      const { data: rooms, error: roomsErr } = await supabase
        .from('exam_rooms')
        .select('id')
        .eq('class_id', currentClass.id)
        .eq('status', 'active')

      if (roomsErr) throw roomsErr
      const roomIds = rooms?.map(r => r.id) || []
      if (roomIds.length === 0) {
        setCompletedStats({})
        return
      }

      const { data: subs, error: subsErr } = await supabase
        .from('exam_submissions')
        .select('student_id, room_id, score')
        .in('room_id', roomIds)
        .eq('status', 'submitted')

      if (subsErr) throw subsErr

      const stats: Record<string, number> = {}
      const studentIds = rosterStudents.map(s => s.id)
      studentIds.forEach(studentId => {
        const studentSubs = subs?.filter(sub => sub.student_id === studentId && sub.score !== 0) || []
        const submittedRooms = new Set(studentSubs.map(sub => sub.room_id))
        const completedCount = submittedRooms.size
        const pct = Math.round((completedCount / roomIds.length) * 100)
        stats[studentId] = pct
      })
      setCompletedStats(stats)
    } catch (e) {
      console.warn('Lỗi tải thống kê bài tập:', e)
    } finally {
      setStatsLoading(false)
    }
  }

  useEffect(() => {
    void fetchClassStats()
  }, [currentClass?.id, rosterStudents.length])

  // Giáo viên phụ trách lớp hiện tại
  const currentTeacher = profiles.find(p => p.id === currentClass?.teacher_id)
  const currentClassPrice = getClassPrice(currentClass)

  return (
    <div className="space-y-6 text-slate-800">
      
      {/* HEADER TRANG */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <GraduationCap className="w-7 h-7 text-teal-600" />
              Quản Lý Lớp Học & Học Sinh
            </h1>
            <span className="bg-teal-100 text-teal-800 text-xs font-black px-2.5 py-0.5 rounded-full">
              {myClasses.length} lớp
            </span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Sắp xếp theo thứ tự khối lớp (Khối 6 ➔ 12) • Đơn giá theo buổi tự động liên kết học phí
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/tuition')}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-slate-200"
          >
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <span>Học Phí</span>
          </button>

          <button
            onClick={() => navigate('/attendance')}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-slate-200"
          >
            <CalendarCheck className="w-4 h-4 text-teal-600" />
            <span>Điểm Danh</span>
          </button>

          <button
            onClick={openAdd}
            className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-xl text-xs font-black flex items-center gap-2 shadow-lg shadow-teal-600/20 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-4 h-4 stroke-[3px]" />
            <span>Thêm Lớp Mới</span>
          </button>
        </div>
      </div>

      {/* KHUNG CHÍNH: 2 CỘT (CỘT TRÁI: DANH SÁCH LỚP • CỘT PHẢI: CHI TIẾT & HỌC SINH) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ============================================================== */}
        {/* CỘT TRÁI (4 CỘT): DANH SÁCH LỚP HỌC THÔNG MINH                  */}
        {/* ============================================================== */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-sm space-y-3">
            
            {/* Thanh tìm kiếm lớp */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Tìm tên lớp, môn học..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Bộ lọc Khối Lớp (Xếp theo thứ tự chuẩn Khối 6 -> 12) */}
            <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedGrade(null)}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                  selectedGrade === null
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                Tất cả ({myClasses.length})
              </button>
              {['6', '7', '8', '9', '10', '11', '12'].map(grade => {
                const count = gradeCounts[grade] || 0
                return (
                  <button
                    key={grade}
                    onClick={() => setSelectedGrade(grade)}
                    className={`py-1.5 px-2.5 rounded-lg text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                      selectedGrade === grade
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    K{grade} {count > 0 && `(${count})`}
                  </button>
                )
              })}
            </div>

            {/* Danh sách thẻ lớp học */}
            <div className="space-y-2.5 overflow-y-auto max-h-[calc(100vh-270px)] pr-1 custom-scrollbar">
              {filtered.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs italic">
                  Không tìm thấy lớp học nào.
                </div>
              ) : (
                filtered.map((c: any) => {
                  const isActive = currentClass?.id === c.id
                  const count = enrollments.filter(e => e.class_id === c.id && e.status === 'active').length
                  const teacher = profiles.find(p => p.id === c.teacher_id)
                  const classNameStr = (c.class_name || c.name || 'Lớp học').trim()
                  const gradeColor = GRADE_COLORS[String(c.grade)] || GRADE_COLORS['10']
                  const unitPrice = getClassPrice(c)
                  const maxStu = Number(c.max_students) || 30
                  const fillPct = Math.min(100, Math.round((count / maxStu) * 100))

                  return (
                    <div
                      key={c.id}
                      onClick={() => setSelClass(c)}
                      className={`relative group cursor-pointer border rounded-2xl p-3.5 transition-all select-none ${
                        isActive
                          ? 'border-teal-500 bg-teal-50/50 shadow-md ring-2 ring-teal-500/20'
                          : 'border-slate-200/90 hover:border-teal-300 hover:bg-slate-50/70 bg-white'
                      }`}
                    >
                      {/* Dòng 1: Khối lớp, Đơn giá & Trạng thái */}
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border ${gradeColor.bg} ${gradeColor.text} ${gradeColor.border}`}>
                            Khối {c.grade || '—'}
                          </span>
                          <span className="text-[10px] font-mono font-black text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                            {fmtVNDShort(unitPrice)}/b
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            c.status === 'active'
                              ? 'text-emerald-700 bg-emerald-50'
                              : 'text-slate-400 bg-slate-100'
                          }`}>
                            {c.status === 'active' ? '🟢 Mở' : '⚪ Đóng'}
                          </span>

                          {/* Nút cộng học sinh nhanh */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelClass(c)
                              setRightSearch('')
                              setModal('add_student')
                            }}
                            title="Thêm nhanh học sinh vào lớp này"
                            className="w-5 h-5 rounded-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center transition-colors shadow-xs"
                          >
                            <Plus className="w-3 h-3 stroke-[3px]" />
                          </button>
                        </div>
                      </div>

                      {/* Dòng 2: TÊN LỚP HỌC (IN ĐẬM, RÕ RÀNG, SẮC NÉT) */}
                      <h3 className={`font-black text-sm uppercase tracking-tight line-clamp-1 ${
                        isActive ? 'text-teal-900' : 'text-slate-800 group-hover:text-teal-700'
                      }`}>
                        {classNameStr}
                      </h3>

                      {/* Dòng 3: Môn học & Giáo viên */}
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                        <span>Môn: <strong className="text-slate-700 font-bold">{c.subject || 'Toán'}</strong></span>
                        <span>•</span>
                        <span className="truncate">
                          GV: <strong className="text-slate-700 font-semibold">{teacher ? (teacher.name || teacher.email) : 'Thầy Thọ'}</strong>
                        </span>
                      </div>

                      {/* Dòng 4: Sĩ số & Tiến độ sĩ số */}
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-slate-400 truncate max-w-[55%]">
                          {c.schedule || 'Chưa xếp lịch'}
                        </span>
                        
                        <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-teal-800 bg-teal-100/60 px-2 py-0.5 rounded-full">
                          <Users className="w-3 h-3 text-teal-600" />
                          <span>{count}/{maxStu}</span>
                        </div>
                      </div>

                      {/* Nút hành động nhanh (Hiện khi hover) */}
                      <div className="absolute right-2.5 top-9 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-white p-1 rounded-xl shadow-md border border-slate-200">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            openEdit(c)
                          }}
                          title="Sửa thông tin lớp"
                          className="p-1 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteClass(c.id, classNameStr)
                          }}
                          title="Xóa lớp học"
                          className="p-1 text-slate-600 hover:text-rose-600 hover:bg-slate-50 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  )
                })
              )}
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* CỘT PHẢI (8 CỘT): CHI TIẾT LỚP & QUẢN LÝ HỌC SINH               */}
        {/* ============================================================== */}
        <div className="lg:col-span-8 space-y-4">
          {currentClass ? (
            <>
              {/* HERO CARD: THÔNG TIN TỔNG QUAN LỚP ĐANG CHỌN */}
              <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-800 space-y-4">
                
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                        Khối {currentClass.grade || '—'}
                      </span>
                      <span className="bg-white/10 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Môn {currentClass.subject || 'Toán'}
                      </span>
                      <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black px-2 py-0.5 rounded-full">
                        💰 Đơn giá: {fmtVNDShort(currentClassPrice)}/buổi
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-2">
                      {currentClass.class_name || currentClass.name}
                    </h2>

                    <p className="text-xs text-teal-200 mt-1 flex flex-wrap items-center gap-3">
                      <span>👤 GV: <strong>{currentTeacher ? (currentTeacher.name || currentTeacher.email) : 'Thầy Thọ'}</strong></span>
                      <span>•</span>
                      <span>📅 {currentClass.schedule || 'Chưa xếp lịch học'}</span>
                      {currentClass.room && (
                        <>
                          <span>•</span>
                          <span>📍 Phòng: {currentClass.room}</span>
                        </>
                      )}
                    </p>
                  </div>

                  {/* CÁC NÚT LỐI TẮT NGHIỆP VỤ LIÊN HOÀN */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => navigate('/tuition')}
                      className="px-3.5 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer"
                      title="Chuyển sang Báo Học Phí & Đánh dấu buổi học cho lớp này"
                    >
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Học Phí & Buổi Học</span>
                    </button>

                    <button
                      onClick={() => navigate('/attendance')}
                      className="px-3.5 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/30 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer"
                      title="Điểm danh lớp này"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-teal-400" />
                      <span>Điểm Danh</span>
                    </button>

                    <button
                      onClick={() => openEdit(currentClass)}
                      className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors cursor-pointer border border-white/15"
                      title="Sửa thông tin lớp"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* DÒNG SĨ SỐ HỌC SINH */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-teal-400" />
                    <span>
                      Sĩ số: <strong className="text-white font-black">{rosterStudents.length}</strong> / {currentClass.max_students || 30} học sinh
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      ({Math.round((rosterStudents.length / (Number(currentClass.max_students) || 30)) * 100)}% chỉ tiêu)
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setRightSearch('')
                      setModal('add_student')
                    }}
                    className="px-3.5 py-1.5 bg-teal-500 hover:bg-teal-600 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md shadow-teal-500/20 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>+ Thêm Học Sinh Vào Lớp</span>
                  </button>
                </div>

              </div>

              {/* KHUNG DANH SÁCH HỌC SINH CỦA LỚP */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm space-y-4">
                
                {/* TOOLBAR TÌM KIẾM & CHUYỂN CHẾ ĐỘ HIỂN THỊ */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">
                      Danh Sách Học Sinh Trong Lớp
                    </h3>
                    <span className="bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold px-2 py-0.5 rounded-full">
                      {filteredRoster.length} em
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* View Switcher: Cards vs Table */}
                    <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
                      <button
                        onClick={() => setViewMode('cards')}
                        className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                          viewMode === 'cards'
                            ? 'bg-white text-teal-800 shadow-xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                        title="Xem dạng thẻ"
                      >
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Dạng Thẻ</span>
                      </button>
                      <button
                        onClick={() => setViewMode('table')}
                        className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                          viewMode === 'table'
                            ? 'bg-white text-teal-800 shadow-xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                        title="Xem dạng bảng chi tiết"
                      >
                        <TableIcon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Dạng Bảng</span>
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setRightSearch('')
                        setModal('add_student')
                      }}
                      className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-black flex items-center gap-1 shadow-xs cursor-pointer transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Thêm HS</span>
                    </button>
                  </div>
                </div>

                {/* Ô tìm kiếm học sinh trong lớp */}
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Tìm tên, mã số hoặc SĐT phụ huynh trong lớp..."
                    value={leftSearch}
                    onChange={e => setLeftSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* NỘI DUNG DANH SÁCH: CARDS VIEW HOẶC TABLE VIEW */}
                {filteredRoster.length === 0 ? (
                  <div className="text-center py-16 text-slate-400 space-y-3">
                    <Users className="w-12 h-12 mx-auto text-slate-300 opacity-70" />
                    <p className="text-sm font-semibold">
                      {leftSearch ? 'Không tìm thấy học sinh phù hợp' : 'Chưa có học sinh nào trong lớp này'}
                    </p>
                    {!leftSearch && (
                      <button
                        onClick={() => {
                          setRightSearch('')
                          setModal('add_student')
                        }}
                        className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>Thêm học sinh đầu tiên vào lớp</span>
                      </button>
                    )}
                  </div>
                ) : viewMode === 'cards' ? (
                  /* DẠNG THẺ HỌC SINH HIỆN ĐẠI (CARDS) */
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {filteredRoster.map((s, idx) => {
                      const pct = completedStats[s.id]
                      const phone = s.parent_phone || s.zalo || ''
                      const initials = (s.full_name || '')
                        .split(' ')
                        .slice(-2)
                        .map((w: string) => w[0])
                        .join('')
                        .toUpperCase() || 'HS'

                      return (
                        <div
                          key={s.id}
                          className="relative group bg-white hover:bg-teal-50/20 border border-slate-200 hover:border-teal-400 rounded-2xl p-3.5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
                          onClick={() => setScorecardStudent(s)}
                        >
                          <div className="space-y-2">
                            {/* Avatar & Header thẻ */}
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5 min-w-0">
                                {s.avatar_url ? (
                                  <img
                                    src={s.avatar_url}
                                    alt={s.full_name}
                                    className="w-10 h-10 rounded-2xl object-cover border border-teal-200 shrink-0 shadow-xs"
                                  />
                                ) : (
                                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-indigo-600 text-white flex items-center justify-center text-xs font-black shrink-0 shadow-xs">
                                    {initials}
                                  </div>
                                )}
                                <div className="min-w-0">
                                  <h4 className="font-black text-sm text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1">
                                    {s.full_name}
                                  </h4>
                                  <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-1 rounded">
                                    {s.student_code || `HS-${idx + 1}`}
                                  </span>
                                </div>
                              </div>

                              {/* Nút xóa học sinh khỏi lớp */}
                              <button
                                onClick={async (e) => {
                                  e.stopPropagation()
                                  const cName = currentClass.class_name || currentClass.name
                                  if (!window.confirm(`Thầy có muốn xóa học sinh "${s.full_name}" khỏi lớp "${cName}"?`)) return
                                  await unenroll(s.id, currentClass.id)
                                  toast.success(`Đã xóa ${s.full_name} khỏi lớp`)
                                }}
                                className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-all cursor-pointer"
                                title="Xóa khỏi lớp này"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Thông tin phụ huynh & SĐT */}
                            <div className="text-[11px] text-slate-500 space-y-0.5 pt-1 border-t border-slate-100">
                              {phone ? (
                                <p className="flex items-center gap-1 text-slate-700 font-mono font-bold">
                                  <Phone className="w-3 h-3 text-emerald-600" />
                                  <span>{phone}</span>
                                </p>
                              ) : (
                                <p className="text-slate-400 italic">Chưa có số điện thoại</p>
                              )}
                              {s.school && (
                                <p className="truncate text-[10px] text-slate-400">
                                  Trường: {s.school}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Footer thẻ: % bài tập & Nút xem chi tiết */}
                          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span className="text-[10px] font-bold text-slate-500">
                              {pct !== undefined ? (
                                <span className="text-emerald-700 font-mono font-black">
                                  Bài tập: {pct}%
                                </span>
                              ) : (
                                <span className="text-slate-400">Xem hồ sơ</span>
                              )}
                            </span>

                            <span className="text-[10px] font-bold text-teal-600 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                              Chi tiết <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>

                        </div>
                      )
                    })}
                  </div>
                ) : (
                  /* DẠNG BẢNG CHI TIẾT (TABLE VIEW) */
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 text-slate-600 uppercase font-black text-[10px] tracking-wider border-b border-slate-200">
                          <th className="py-2.5 px-3 w-10">STT</th>
                          <th className="py-2.5 px-3">Học sinh</th>
                          <th className="py-2.5 px-3">Mã HS</th>
                          <th className="py-2.5 px-3">Trường học</th>
                          <th className="py-2.5 px-3">SĐT Phụ huynh</th>
                          <th className="py-2.5 px-3 text-center">Tiến độ bài</th>
                          <th className="py-2.5 px-3 text-right">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredRoster.map((s, idx) => {
                          const pct = completedStats[s.id]
                          const phone = s.parent_phone || s.zalo || ''
                          return (
                            <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                              <td className="py-3 px-3 text-slate-400 font-bold">{idx + 1}</td>
                              <td className="py-3 px-3 font-extrabold text-slate-900">
                                <button
                                  onClick={() => setScorecardStudent(s)}
                                  className="text-slate-900 hover:text-teal-700 font-black cursor-pointer text-left"
                                >
                                  {s.full_name}
                                </button>
                              </td>
                              <td className="py-3 px-3 font-mono text-slate-500">{s.student_code}</td>
                              <td className="py-3 px-3 text-slate-500">{s.school || '—'}</td>
                              <td className="py-3 px-3 font-mono font-bold text-slate-700">
                                {phone ? `📞 ${phone}` : '—'}
                              </td>
                              <td className="py-3 px-3 text-center">
                                {pct !== undefined ? (
                                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                    {pct}%
                                  </span>
                                ) : '—'}
                              </td>
                              <td className="py-3 px-3 text-right space-x-1">
                                <button
                                  onClick={() => setScorecardStudent(s)}
                                  className="px-2 py-1 text-teal-700 hover:bg-teal-50 rounded font-bold cursor-pointer"
                                >
                                  Hồ sơ
                                </button>
                                <button
                                  onClick={async () => {
                                    const cName = currentClass.class_name || currentClass.name
                                    if (!window.confirm(`Xóa "${s.full_name}" khỏi lớp "${cName}"?`)) return
                                    await unenroll(s.id, currentClass.id)
                                    toast.success('Đã xóa học sinh khỏi lớp')
                                  }}
                                  className="px-2 py-1 text-rose-600 hover:bg-rose-50 rounded font-bold cursor-pointer"
                                >
                                  Xóa
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

              </div>
            </>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
              <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-black text-slate-800 text-base">Chưa chọn lớp học</h3>
              <p className="text-slate-400 text-xs mt-1">
                Vui lòng chọn một lớp học bên danh sách bên trái để xem và quản lý học sinh
              </p>
            </div>
          )}
        </div>

      </div>

      {/* ============================================================== */}
      {/* MODAL: THÊM / SỬA LỚP HỌC                                      */}
      {/* ============================================================== */}
      <Modal
        open={modal === 'form'}
        onClose={() => setModal(null)}
        title={editing ? `Sửa lớp học: ${editing.class_name || editing.name}` : 'Thêm lớp học mới'}
        size="2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-slate-800">
          <div className="md:col-span-3">
            <label className="label">Tên lớp học *</label>
            <input {...inp('class_name')} placeholder="VD: LỚP 7.2, LỚP 9 TOÁN, LỚP 6..." />
          </div>
          <div>
            <label className="label">Trạng thái</label>
            <select {...inp('status')} className="input">
              <option value="active">🟢 Đang mở</option>
              <option value="inactive">⚪ Đóng lớp</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="label font-bold text-teal-700">Giáo viên phụ trách</label>
            <select {...inp('teacher_id')} className="input border-teal-200" disabled={!isAdmin()}>
              {isAdmin() ? (
                <>
                  <option value="">— Chưa phân công (Mặc định Thầy Thọ) —</option>
                  {teachers.map(t => (
                    <option key={t.id} value={t.id}>{t.name || t.email} ({t.role})</option>
                  ))}
                </>
              ) : (
                <option value={user?.id}>{user?.user_metadata?.full_name || user?.email || 'Bản thân tôi'}</option>
              )}
            </select>
          </div>
          <div>
            <label className="label">Môn học</label>
            <select {...inp('subject')} className="input">
              {['Toán', 'Lý', 'Hóa', 'Anh', 'Văn', 'Sinh', 'Sử', 'Địa', 'Tin'].map(s => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Khối lớp *</label>
            <select {...inp('grade')} className="input" required>
              <option value="">-- Chọn khối --</option>
              {['6', '7', '8', '9', '10', '11', '12'].map(g => (
                <option key={g} value={g}>Khối {g}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="label">Trường</label>
            <input {...inp('school')} placeholder="THCS / THPT..." />
          </div>
          <div>
            <label className="label">Học phí / buổi (đ)</label>
            <input {...inp('fee_per_session')} type="number" placeholder="80000" />
          </div>
          <div>
            <label className="label">Số buổi dự kiến / tháng</label>
            <input {...inp('planned_sessions')} type="number" placeholder="8" />
          </div>

          <div className="md:col-span-2">
            <label className="label">Ngày bắt đầu</label>
            <input {...inp('start_date')} type="date" />
          </div>
          <div>
            <label className="label">Sĩ số tối đa</label>
            <input {...inp('max_students')} type="number" placeholder="30" />
          </div>
          <div>
            <label className="label">Phòng học</label>
            <input {...inp('room')} placeholder="P.101..." />
          </div>

          <div className="md:col-span-4">
            <label className="label">Lịch học chi tiết</label>
            <input {...inp('schedule')} placeholder="VD: Thứ 2 - Thứ 5 (18:00 - 19:30)" />
          </div>

          <div className="md:col-span-4">
            <label className="label">Ghi chú thêm</label>
            <input {...inp('note')} placeholder="Ghi chú về tài liệu, chỉ tiêu..." className="input" />
          </div>
        </div>

        <div className="flex gap-3 mt-5 justify-end border-t border-slate-100 pt-4 sticky bottom-0 bg-white pb-2">
          <button onClick={() => setModal(null)} className="btn-outline px-6">Hủy</button>
          <button onClick={save} disabled={saving} className="btn-teal px-8 shadow-md">
            {saving ? 'Đang lưu...' : editing ? 'Cập nhật' : 'Thêm lớp học'}
          </button>
        </div>
      </Modal>

      {/* ============================================================== */}
      {/* MODAL: THÊM HỌC SINH VÀO LỚP                                   */}
      {/* ============================================================== */}
      <Modal
        open={modal === 'add_student'}
        onClose={() => setModal(null)}
        title={`Thêm học sinh vào: ${currentClass?.class_name || currentClass?.name}`}
        size="2xl"
      >
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Nhập tên, mã số hoặc trường để tìm kiếm học sinh..."
              value={rightSearch}
              onChange={e => setRightSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1 custom-scrollbar">
            {filteredAllStudents.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-12">
                Không tìm thấy học sinh khả dụng nào để thêm.
              </p>
            ) : (
              filteredAllStudents.map(s => {
                const initials = (s.full_name || '')
                  .split(' ')
                  .slice(-2)
                  .map((w: string) => w[0])
                  .join('')
                  .toUpperCase() || 'HS'

                return (
                  <div
                    key={s.id}
                    className="flex items-center justify-between bg-white border border-slate-200 hover:border-teal-300 rounded-2xl p-3 shadow-xs hover:shadow transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-3">
                      {s.avatar_url ? (
                        <img
                          src={s.avatar_url}
                          alt={s.full_name}
                          className="w-10 h-10 rounded-2xl object-cover border border-teal-100 shrink-0 shadow-xs"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-600 flex items-center justify-center text-white text-xs font-black shrink-0 shadow-xs">
                          {initials}
                        </div>
                      )}
                      
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="font-black text-sm text-slate-900 truncate">{s.full_name}</p>
                          <span className="text-[10px] text-slate-400 font-mono bg-slate-100 px-1 py-0.5 rounded shrink-0">
                            {s.student_code}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 truncate mt-0.5">
                          {s.school || 'Không rõ trường'} • Khối {s.grade || '—'}
                          {s.parent_phone && ` • 📞 ${s.parent_phone}`}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={async () => {
                        await enroll(s.id, currentClass.id)
                        toast.success(`Đã thêm ${s.full_name} vào lớp`)
                      }}
                      className="px-3.5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-xs cursor-pointer transition-all shrink-0"
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      <span>Thêm vào lớp</span>
                    </button>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </Modal>

      {/* ============================================================== */}
      {/* MODAL: HỒ SƠ & BẢNG ĐIỂM HỌC SINH                               */}
      {/* ============================================================== */}
      <StudentScorecardModal
        student={scorecardStudent}
        open={!!scorecardStudent}
        onClose={() => {
          setScorecardStudent(null)
          void fetchClassStats()
        }}
      />

    </div>
  )
}
