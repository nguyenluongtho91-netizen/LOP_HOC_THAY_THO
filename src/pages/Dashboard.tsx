import { useEffect, useState, useCallback, useMemo } from 'react'
import { 
  Users, BookOpen, CalendarCheck, ChevronLeft, ChevronRight, Clock, 
  MapPin, Search, Eye, EyeOff, DollarSign, GraduationCap, CheckCircle2, 
  ArrowRight, Sparkles, Layers, Calendar, ClipboardCheck, CreditCard,
  Edit3, Save, Plus, Filter, Check, X, RefreshCw,
  Lock, Unlock, ShieldAlert, ShieldCheck
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDataStore } from '@/store/dataStore'
import { useAuthStore } from '@/store/authStore'
import { supabase } from '@/lib/supabase'
import { fmt, parseScheduleToDays } from '@/lib/helpers'
import type { LucideIcon } from 'lucide-react'
import Modal from '@/components/Modal'
import StudentScorecardModal from '@/components/StudentScorecardModal'
import toast from 'react-hot-toast'
import { fetchHoa12AccessConfig, getHoa12AccessConfigSync, grantAllStudentsAccess, revokeAllStudentsAccess, toggleChapterAccess, toggleGradeAccess, toggleCategoryAccess, type GranularAccessConfig } from '@/services/hoa12AccessControlService'


type Color = 'teal' | 'green' | 'amber' | 'blue' | 'purple'

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  sub?: string
  color?: Color
  hideable?: boolean
  isHidden?: boolean
  onToggleHide?: () => void
  badge?: string
}

const colorMap: Record<Color, { grad: string; text: string; bg: string }> = {
  teal:   { grad: 'from-teal-500 to-teal-400',   text: 'text-teal-600',   bg: 'bg-teal-50' },
  green:  { grad: 'from-emerald-500 to-teal-500', text: 'text-emerald-600', bg: 'bg-emerald-50' },
  amber:  { grad: 'from-amber-500 to-orange-400', text: 'text-amber-600',  bg: 'bg-amber-50' },
  blue:   { grad: 'from-blue-600 to-indigo-500',  text: 'text-blue-600',   bg: 'bg-blue-50' },
  purple: { grad: 'from-purple-600 to-pink-500',  text: 'text-purple-600', bg: 'bg-purple-50' },
}

function StatCard({ icon: Icon, label, value, sub, color = 'teal', hideable, isHidden, onToggleHide, badge }: StatCardProps) {
  const theme = colorMap[color]
  return (
    <div className="card p-5 flex items-center justify-between gap-4 border border-gray-100/80 hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-4 min-w-0">
        <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${theme.grad} flex items-center justify-center flex-shrink-0 shadow-sm text-white`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{label}</p>
            {badge && (
              <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${theme.bg} ${theme.text}`}>
                {badge}
              </span>
            )}
          </div>
          <p className="text-2xl font-black text-gray-800 tracking-tight mt-0.5">
            {hideable && isHidden ? '•••' : value}
          </p>
          {sub && <p className="text-xs text-gray-500 mt-0.5 truncate font-medium">{sub}</p>}
        </div>
      </div>
      {hideable && onToggleHide && (
        <button 
          onClick={onToggleHide}
          className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50/50 rounded-xl transition"
          title={isHidden ? "Hiện số lượng" : "Ẩn số lượng"}
        >
          {isHidden ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
      )}
    </div>
  )
}

function parseTimeToMinutes(timeStr: string | null | undefined): number {
  if (!timeStr) return 9999
  const cleanStr = timeStr.trim().toLowerCase()
  const firstPart = cleanStr.split(/[-–đ]/)[0].trim()
  const match = firstPart.match(/(\d{1,2})\s*[h:]\s*(\d{2})?/)
  if (match) {
    const hours = parseInt(match[1], 10)
    const minutes = match[2] ? parseInt(match[2], 10) : 0
    return hours * 60 + minutes
  }
  const hourOnlyMatch = firstPart.match(/^(\d{1,2})$/)
  if (hourOnlyMatch) {
    return parseInt(hourOnlyMatch[1], 10) * 60
  }
  return 9999
}

export default function Dashboard() {
  const navigate = useNavigate()
  const { profile } = useAuthStore()
  const { classes, students, enrollments, loadClasses, loadStudents, loadEnrollments, updateClass } = useDataStore()

  const [loaded, setLoaded]           = useState(false)
  const [detailClass, setDetailClass] = useState<any>(null)
  const [modalSearch, setModalSearch] = useState('')
  const [scorecardStudent, setScorecardStudent] = useState<any>(null)
  const [statsLoading, setStatsLoading] = useState(false)
  const [completedStats, setCompletedStats] = useState<Record<string, number>>({})
  const [showStudentCount, setShowStudentCount] = useState(true)
  const [viewDate, setViewDate] = useState(new Date())

  // Filters for Schedule
  const [subjectFilter, setSubjectFilter] = useState<'all' | 'toan' | 'hoa'>('all')

  // ── SCHEDULE EDITOR MODAL STATE ──
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false)
  const [editingClassId, setEditingClassId] = useState<string>('')
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 4])
  const [sessionTime, setSessionTime] = useState<string>('17:45 - 19:15')
  const [sessionRoom, setSessionRoom] = useState<string>('Phòng Chuyên Toán')
  const [savingSchedule, setSavingSchedule] = useState(false)
  // ── MASTER ACCESS CONTROL PHÂN LẬP TỪNG CHƯƠNG & TỪNG KHỐI (ĐỘC QUYỀN THẦY THỌ) ──
  const [accessConfig, setAccessConfig] = useState<GranularAccessConfig>(() => getHoa12AccessConfigSync())
  const [isUpdatingAccess, setIsUpdatingAccess] = useState(false)

  useEffect(() => {
    fetchHoa12AccessConfig().then((cfg) => setAccessConfig({ ...cfg }))
  }, [])

  const handleToggleChapter = async (ch: 'c1' | 'c2' | 'c3' | 'c4' | 'c5', name: string) => {
    try {
      setIsUpdatingAccess(true)
      const updated = await toggleChapterAccess(ch)
      setAccessConfig({ ...updated })
      const isLocked = updated.chapters[ch]
      toast.success(`${isLocked ? '🔒 ĐÃ KHÓA' : '🟢 ĐÃ MỞ CẤP QUYỀN'}: ${name}!`, { duration: 3500 })
    } catch (e) {
      toast.error('Lỗi khi cập nhật quyền chương!')
    } finally {
      setIsUpdatingAccess(false)
    }
  }

  const handleToggleGrade = async (gradeKey: 'grade_12' | 'grade_11' | 'grade_10', name: string) => {
    try {
      setIsUpdatingAccess(true)
      const updated = await toggleGradeAccess(gradeKey)
      setAccessConfig({ ...updated })
      const isLocked = updated.grades[gradeKey]
      toast.success(`${isLocked ? '🔒 ĐÃ KHÓA' : '🟢 ĐÃ MỞ CẤP QUYỀN'}: ${name}!`, { duration: 3500 })
    } catch (e) {
      toast.error('Lỗi khi cập nhật quyền khối!')
    } finally {
      setIsUpdatingAccess(false)
    }
  }

  const handleToggleCategory = async (catKey: 'homework' | 'practice' | 'survey', name: string) => {
    try {
      setIsUpdatingAccess(true)
      const updated = await toggleCategoryAccess(catKey)
      setAccessConfig({ ...updated })
      const isLocked = updated.categories[catKey]
      toast.success(`${isLocked ? '🔒 ĐÃ KHÓA' : '🟢 ĐÃ MỞ CẤP QUYỀN'}: ${name}!`, { duration: 3500 })
    } catch (e) {
      toast.error('Lỗi khi cập nhật danh mục!')
    } finally {
      setIsUpdatingAccess(false)
    }
  }

  const handleGrantAll = async () => {
    try {
      setIsUpdatingAccess(true)
      const updated = await grantAllStudentsAccess()
      setAccessConfig({ ...updated })
      toast.success('🟢 ĐÃ MỞ TẤT CẢ: Cấp quyền học sinh toàn bộ các chương và khối!', { duration: 4000 })
    } catch (e) {
      toast.error('Lỗi khi mở toàn bộ!')
    } finally {
      setIsUpdatingAccess(false)
    }
  }

  const handleRevokeAll = async () => {
    try {
      setIsUpdatingAccess(true)
      const updated = await revokeAllStudentsAccess()
      setAccessConfig({ ...updated })
      toast.success('🛑 ĐÃ KHÓA TOÀN BỘ: Cấm quyền tất cả các chương và khối!', { duration: 4000 })
    } catch (e) {
      toast.error('Lỗi khi khóa toàn bộ!')
    } finally {
      setIsUpdatingAccess(false)
    }
  }


  // Preset Times
  const PRESET_TIMES = [
    { label: '17:15 - 19:15', desc: 'Ca chiều 1' },
    { label: '17:45 - 19:15', desc: 'Ca chiều 2' },
    { label: '19:15 - 21:15', desc: 'Ca tối 1' },
    { label: '19:30 - 21:30', desc: 'Ca tối 2' },
    { label: '14:30 - 16:30', desc: 'Ca chiều T7/CN' },
    { label: '08:30 - 10:30', desc: 'Ca sáng CN' }
  ]

  // Preset Rooms
  const PRESET_ROOMS = [
    'Phòng A1', 'Phòng A2', 'Phòng B1', 'Phòng R1', 
    'Phòng Chuyên Toán', 'Phòng Hóa 1', 'Phòng Hóa 2', 'Phòng Luyện Thi'
  ]

  const DAY_LABELS = [
    { day: 1, label: 'Thứ 2', short: 'T2' },
    { day: 2, label: 'Thứ 3', short: 'T3' },
    { day: 3, label: 'Thứ 4', short: 'T4' },
    { day: 4, label: 'Thứ 5', short: 'T5' },
    { day: 5, label: 'Thứ 6', short: 'T6' },
    { day: 6, label: 'Thứ 7', short: 'T7' },
    { day: 0, label: 'Chủ Nhật', short: 'CN' }
  ]

  // Open Schedule Editor Modal for a class
  const openEditSchedule = (cls: any, defaultDayNum?: number) => {
    setEditingClassId(cls.id)
    setSessionRoom(cls.room || 'Phòng A1')

    const parsed = parseScheduleToDays(cls.schedule)
    if (parsed.length > 0) {
      setSelectedDays(Array.from(new Set(parsed.map(p => p.day))))
      setSessionTime(parsed[0].time || '17:45 - 19:15')
    } else if (defaultDayNum !== undefined) {
      setSelectedDays([defaultDayNum])
      setSessionTime('17:45 - 19:15')
    } else {
      setSelectedDays([1, 4])
      setSessionTime('17:45 - 19:15')
    }
    setScheduleModalOpen(true)
  }

  // Toggle Day selection
  const toggleDaySelection = (dayNum: number) => {
    setSelectedDays(prev => {
      if (prev.includes(dayNum)) {
        if (prev.length === 1) {
          toast.error('Lớp học cần ít nhất 1 buổi trong tuần!')
          return prev
        }
        return prev.filter(d => d !== dayNum)
      } else {
        return [...prev, dayNum]
      }
    })
  }

  // Computed schedule preview string
  const previewScheduleString = useMemo(() => {
    if (selectedDays.length === 0) return ''
    const dayNamesMap: Record<number, string> = {
      0: 'Chủ Nhật',
      1: 'Thứ 2',
      2: 'Thứ 3',
      3: 'Thứ 4',
      4: 'Thứ 5',
      5: 'Thứ 6',
      6: 'Thứ 7'
    }
    const sortedDays = [...selectedDays].sort((a, b) => {
      const da = a === 0 ? 7 : a
      const db = b === 0 ? 7 : b
      return da - db
    })
    return sortedDays.map(d => `${dayNamesMap[d]}: ${sessionTime}`).join(', ')
  }, [selectedDays, sessionTime])

  // Save Schedule changes to database
  const handleSaveSchedule = async () => {
    if (!editingClassId) {
      toast.error('Vui lòng chọn lớp học!')
      return
    }

    if (selectedDays.length === 0) {
      toast.error('Vui lòng chọn ít nhất 1 ngày trong tuần!')
      return
    }

    setSavingSchedule(true)
    try {
      await updateClass(editingClassId, {
        schedule: previewScheduleString,
        room: sessionRoom.trim() || 'Phòng học'
      })
      await loadClasses()
      const targetClass = classes.find(c => c.id === editingClassId)
      toast.success(
        `✅ Đã cập nhật lịch dạy lớp ${targetClass?.name || 'mới'}!
` +
        `• Lịch học: ${previewScheduleString}
` +
        `• Phòng học: ${sessionRoom}`
      )
      setScheduleModalOpen(false)
    } catch (err: any) {
      toast.error('Lỗi khi lưu lịch dạy: ' + err.message)
    } finally {
      setSavingSchedule(false)
    }
  }

  // Get Monday of the week containing viewDate, and return all 7 days
  const getWeekDays = (baseDate: Date) => {
    const currentDay = baseDate.getDay() // 0 = Sun, 1 = Mon, ..., 6 = Sat
    const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay
    const monday = new Date(baseDate)
    monday.setDate(baseDate.getDate() + diffToMonday)

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday)
      d.setDate(monday.getDate() + i)
      return d
    })
  }

  const weekDays = useMemo(() => getWeekDays(viewDate), [viewDate])

  const formatWeekRange = (days: Date[]) => {
    if (!days.length) return ''
    const start = days[0]
    const end = days[6]
    const fmtShort = (d: Date) => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`
    return `${fmtShort(start)} - ${fmtShort(end)}/${end.getFullYear()}`
  }

  const isToday = (d: Date) => {
    const today = new Date()
    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    )
  }

  // Filter classes for a given dayNum (0=Sun, 1=Mon, ..., 6=Sat)
  const getClassesForDay = (dayNum: number) => {
    return classes
      .filter(c => c.status === 'active')
      .filter(c => {
        if (subjectFilter === 'toan') return c.subject?.toLowerCase().includes('toán')
        if (subjectFilter === 'hoa') return c.subject?.toLowerCase().includes('hóa')
        return true
      })
      .flatMap(c => {
        const scheduleDays = parseScheduleToDays(c.schedule)
        const matched = scheduleDays.filter(s => s.day === dayNum)
        return matched.map(m => ({
          ...c,
          time: m.time
        }))
      })
      .sort((a, b) => {
        return parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time)
      })
  }

  const prevWeek = () => {
    setViewDate(prev => {
      const d = new Date(prev)
      d.setDate(prev.getDate() - 7)
      return d
    })
  }

  const nextWeek = () => {
    setViewDate(prev => {
      const d = new Date(prev)
      d.setDate(prev.getDate() + 7)
      return d
    })
  }

  const goToday = () => {
    setViewDate(new Date())
  }

  const loadDashboard = useCallback(async () => {
    try {
      await Promise.all([
        loadClasses(),
        loadStudents(),
        loadEnrollments(),
      ])
    } finally {
      setLoaded(true)
    }
  }, [loadClasses, loadStudents, loadEnrollments])

  useEffect(() => {
    void loadDashboard()
  }, [loadDashboard])

  const activeClasses = useMemo(() => classes.filter(c => c.status === 'active'), [classes])
  const activeStudents = useMemo(() => students.filter(s => s.status === 'active'), [students])
  const activeEnrollments = useMemo(() => enrollments.filter(e => e.status === 'active'), [enrollments])

  // Map student counts per class
  const classStudentCounts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const e of activeEnrollments) {
      map[e.class_id] = (map[e.class_id] || 0) + 1
    }
    return map
  }, [activeEnrollments])

  // Grade overview for 7 grades K6-K12
  const gradeOverview = useMemo(() => {
    const grades = ['6', '7', '8', '9', '10', '11', '12']
    return grades.map(g => {
      const gradeClasses = activeClasses.filter(c => String(c.grade) === g)
      const studentCount = gradeClasses.reduce((sum, c) => sum + (classStudentCounts[c.id] || 0), 0)
      return {
        grade: g,
        classes: gradeClasses,
        classCount: gradeClasses.length,
        studentCount
      }
    })
  }, [activeClasses, classStudentCounts])

  // Fetch progress stats for modal roster
  const fetchClassStats = async (classId: string, currentRoster: any[]) => {
    if (!currentRoster.length) return
    setStatsLoading(true)
    try {
      const { data: assignments } = await supabase
        .from('assignments')
        .select('id, total_points')
        .eq('class_id', classId)

      const totalAssignments = assignments?.length || 0
      if (totalAssignments === 0) {
        setCompletedStats({})
        return
      }

      const assignmentIds = assignments!.map(a => a.id)
      const { data: submissions } = await supabase
        .from('submissions')
        .select('student_id, assignment_id, score')
        .in('assignment_id', assignmentIds)

      const stats: Record<string, number> = {}
      for (const s of currentRoster) {
        const studentSubs = (submissions || []).filter(sub => sub.student_id === s.id)
        stats[s.id] = Math.round((studentSubs.length / totalAssignments) * 100)
      }
      setCompletedStats(stats)
    } catch {
      setCompletedStats({})
    } finally {
      setStatsLoading(false)
    }
  }

  const rosterStudents: any[] = useMemo(() => {
    if (!detailClass) return []
    const sids = new Set(
      enrollments
        .filter(e => e.class_id === detailClass.id && e.status === 'active')
        .map(e => e.student_id)
    )
    return students.filter(s => sids.has(s.id) && s.status === 'active')
  }, [detailClass, enrollments, students])

  useEffect(() => {
    if (detailClass) {
      void fetchClassStats(detailClass.id, rosterStudents)
    }
  }, [detailClass, rosterStudents])

  const filteredRoster = useMemo(() => {
    if (!modalSearch) return rosterStudents
    const q = modalSearch.toLowerCase().trim()
    return rosterStudents.filter(s =>
      s.full_name?.toLowerCase().includes(q) ||
      s.student_code?.toLowerCase().includes(q)
    )
  }, [rosterStudents, modalSearch])

  const totalClassesCount = activeClasses.length
  const mathClassesCount = activeClasses.filter(c => c.subject?.toLowerCase().includes('toán')).length
  const chemClassesCount = activeClasses.filter(c => c.subject?.toLowerCase().includes('hóa')).length

  return (
    <div className="space-y-6">

      {/* ── Top Header ────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 tracking-tight">
              Bảng điều khiển trung tâm
            </h1>
            <span className="bg-teal-50 text-teal-700 text-[10px] font-black px-2 py-0.5 rounded-full border border-teal-200 uppercase tracking-wider">
              Hệ thống Thầy Thọ
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1 font-medium">
            Xin chào <strong className="text-gray-700 font-bold">{profile?.name || 'Thầy Thọ'}</strong>, chúc Thầy một ngày giảng dạy hiệu quả và tràn đầy năng lượng!
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => openEditSchedule(classes[0] || { id: '' })}
            className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
            title="Bấm để chỉnh sửa lịch dạy khi cần"
          >
            <Edit3 className="w-3.5 h-3.5 text-teal-600" />
            <span>Đổi Lịch</span>
          </button>

          <button
            onClick={() => navigate('/tuition')}
            className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-teal-600" />
            <span>Điểm Danh & Học Phí</span>
          </button>
        </div>
      </div>

      {/* ── BẢNG ĐIỀU KHIỂN CẤP QUYỀN PHÂN LẬP TỪNG CHƯƠNG & TỪNG KHỐI (ĐỘC QUYỀN THẦY THỌ) ── */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-md space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl shadow-md shadow-indigo-600/20">
              🎛️
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <span>TRUNG TÂM CẤP QUYỀN PHÂN LẬP (TỪNG CHƯƠNG · TỪNG KHỐI)</span>
                <span className="text-[10px] bg-indigo-100 text-indigo-800 font-extrabold px-2 py-0.5 rounded-full uppercase">
                  Độc Quyền Thầy Thọ
                </span>
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Bấm trực tiếp vào từng mục để Mở (màu xanh) hoặc Khóa (màu đỏ) độc lập cho từng chương hoặc từng khối.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              disabled={isUpdatingAccess}
              onClick={handleGrantAll}
              className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1 shadow-2xs"
            >
              <span>🟢 Mở Tất Cả</span>
            </button>
            <button
              type="button"
              disabled={isUpdatingAccess}
              onClick={handleRevokeAll}
              className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1 shadow-2xs"
            >
              <span>🛑 Khóa Tất Cả</span>
            </button>
            <button
              type="button"
              disabled={isUpdatingAccess}
              onClick={() => {
                setIsUpdatingAccess(true);
                fetchHoa12AccessConfig().then((cfg) => {
                  setAccessConfig({ ...cfg });
                  setIsUpdatingAccess(false);
                  toast.success('Đã đồng bộ trạng thái mới nhất từ Cloud!');
                });
              }}
              title="Làm mới từ Cloud"
              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isUpdatingAccess ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* CỘT 1: HÓA HỌC 12 (TỪNG CHƯƠNG) */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <span>🧪</span>
                <span>Hóa Học 12 (Từng Chương)</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold">3 Chương chuẩn</span>
            </div>

            <div className="space-y-2">
              {/* CHƯƠNG 1 */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="min-w-0 pr-2">
                  <div className="text-xs font-black text-slate-900 truncate">Chương 1: Ester – Lipid</div>
                  <div className="text-[10px] text-slate-400 font-medium">7 Đề cấu trúc mới</div>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingAccess}
                  onClick={() => handleToggleChapter('c1', 'Chương 1 (Ester - Lipid)')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer shrink-0 ${
                    !accessConfig.chapters?.c1
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {!accessConfig.chapters?.c1 ? '🟢 Đang Mở' : '🔒 Đang Khóa'}
                </button>
              </div>

                            {/* CHƯƠNG 2 */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="min-w-0 pr-2">
                  <div className="text-xs font-black text-slate-900 truncate">Chương 2: Carbohydrate</div>
                  <div className="text-[10px] text-slate-400 font-medium">4 Đề cấu trúc mới (28 câu)</div>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingAccess}
                  onClick={() => handleToggleChapter('c2', 'Chương 2 (Carbohydrate)')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer shrink-0 ${
                    !accessConfig.chapters?.c2
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {!accessConfig.chapters?.c2 ? '🟢 Đang Mở' : '🔒 Đang Khóa'}
                </button>
              </div>

              {/* CHƯƠNG 5 */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="min-w-0 pr-2">
                  <div className="text-xs font-black text-slate-900 truncate">Chương 5: Pin & Điện Phân</div>
                  <div className="text-[10px] text-slate-400 font-medium">4 Đề kiểm tra nâng cao</div>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingAccess}
                  onClick={() => handleToggleChapter('c5', 'Chương 5 (Pin & Điện Phân)')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer shrink-0 ${
                    !accessConfig.chapters?.c5
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {!accessConfig.chapters?.c5 ? '🟢 Đang Mở' : '🔒 Đang Khóa'}
                </button>
              </div>
            </div>
          </div>

          {/* CỘT 2: PHÂN LẬP THEO KHỐI LỚP */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <span>📚</span>
                <span>Phân Lập Khối Lớp</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold">K10 · K11 · K12</span>
            </div>

            <div className="space-y-2">
              {/* KHỐI 12 */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <div>
                  <div className="text-xs font-black text-slate-900">Khối 12 (Toàn bộ đề thi K12)</div>
                  <div className="text-[10px] text-slate-400 font-medium">BTVN & Phòng thi K12</div>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingAccess}
                  onClick={() => handleToggleGrade('grade_12', 'Khối 12')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer shrink-0 ${
                    !accessConfig.grades?.grade_12
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {!accessConfig.grades?.grade_12 ? '🟢 Đang Mở' : '🔒 Đang Khóa'}
                </button>
              </div>

              {/* KHỐI 11 */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <div>
                  <div className="text-xs font-black text-slate-900">Khối 11</div>
                  <div className="text-[10px] text-slate-400 font-medium">Học sinh Lớp 11</div>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingAccess}
                  onClick={() => handleToggleGrade('grade_11', 'Khối 11')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer shrink-0 ${
                    !accessConfig.grades?.grade_11
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {!accessConfig.grades?.grade_11 ? '🟢 Đang Mở' : '🔒 Đang Khóa'}
                </button>
              </div>

              {/* KHỐI 10 */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <div>
                  <div className="text-xs font-black text-slate-900">Khối 10</div>
                  <div className="text-[10px] text-slate-400 font-medium">Học sinh Lớp 10</div>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingAccess}
                  onClick={() => handleToggleGrade('grade_10', 'Khối 10')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer shrink-0 ${
                    !accessConfig.grades?.grade_10
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {!accessConfig.grades?.grade_10 ? '🟢 Đang Mở' : '🔒 Đang Khóa'}
                </button>
              </div>
            </div>
          </div>

          {/* CỘT 3: CÁC KHU VỰC PHÒNG THI */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <span>🎯</span>
                <span>Khu Vực Phòng Thi</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold">BTVN · Đề Thi · Khảo Sát</span>
            </div>

            <div className="space-y-2">
              {/* BTVN */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <div>
                  <div className="text-xs font-black text-slate-900">Đề Thi & Bài Tập</div>
                  <div className="text-[10px] text-slate-400 font-medium">Đề giao nộp định kỳ</div>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingAccess}
                  onClick={() => handleToggleCategory('homework', 'Đề Thi & Bài Tập')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer shrink-0 ${
                    !accessConfig.categories?.homework
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {!accessConfig.categories?.homework ? '🟢 Đang Mở' : '🔒 Đang Khóa'}
                </button>
              </div>

              {/* LUYỆN ĐỀ THI */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <div>
                  <div className="text-xs font-black text-slate-900">Luyện Đề Thi</div>
                  <div className="text-[10px] text-slate-400 font-medium">Đề ôn tập thi thử</div>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingAccess}
                  onClick={() => handleToggleCategory('practice', 'Luyện Đề Thi')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer shrink-0 ${
                    !accessConfig.categories?.practice
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {!accessConfig.categories?.practice ? '🟢 Đang Mở' : '🔒 Đang Khóa'}
                </button>
              </div>

              {/* KHẢO SÁT CHẤT LƯỢNG */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <div>
                  <div className="text-xs font-black text-slate-900">Khảo Sát Chất Lượng</div>
                  <div className="text-[10px] text-slate-400 font-medium">Bài thi kiểm tra chung</div>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingAccess}
                  onClick={() => handleToggleCategory('survey', 'Khảo Sát Chất Lượng')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer shrink-0 ${
                    !accessConfig.categories?.survey
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {!accessConfig.categories?.survey ? '🟢 Đang Mở' : '🔒 Đang Khóa'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ── 4 KPI Stats Cards ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          label="Tổng học sinh trung tâm"
          value={activeStudents.length}
          sub="Đang theo học các lớp"
          color="teal"
          hideable
          isHidden={!showStudentCount}
          onToggleHide={() => setShowStudentCount(prev => !prev)}
          badge="Đang hoạt động"
        />

        <StatCard
          icon={BookOpen}
          label="Quy mô lớp học"
          value={activeClasses.length}
          sub="7 khối lớp chuẩn (K6 - K12)"
          color="blue"
          badge="3 lớp / khối"
        />

        <StatCard
          icon={CreditCard}
          label="Lượt phân lớp đào tạo"
          value={activeEnrollments.length}
          sub="Sĩ số phân bổ đồng đều"
          color="green"
          badge="Đồng bộ 100%"
        />

        <StatCard
          icon={CalendarCheck}
          label="Ca dạy tuần này"
          value={classes.filter(c => c.schedule && c.schedule !== 'None').length}
          sub="Phân bổ từ Thứ 2 đến CN"
          color="purple"
          badge="Thời khóa biểu"
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          ── WEEKLY SCHEDULE SECTION (THỜI KHÓA BIỂU SIÊU HIỆN ĐẠI) ──
          ══════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xl shadow-slate-100/60 space-y-5">
        
        {/* HEADER BAR THỜI KHÓA BIỂU */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-teal-500/20">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-slate-900 text-base tracking-wide uppercase">
                  LỊCH DẠY TRONG TUẦN
                </h3>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-300 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  ĐANG DIỄN RA
                </span>
              </div>
            </div>
          </div>

          {/* FILTER VÀ ĐIỀU HƯỚNG TUẦN */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Filter buttons */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setSubjectFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  subjectFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-black'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Tất cả ({totalClassesCount})
              </button>
              <button
                onClick={() => setSubjectFilter('toan')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  subjectFilter === 'toan'
                    ? 'bg-blue-600 text-white shadow-xs font-black'
                    : 'text-slate-500 hover:text-blue-700'
                }`}
              >
                📐 Toán ({mathClassesCount})
              </button>
              <button
                onClick={() => setSubjectFilter('hoa')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  subjectFilter === 'hoa'
                    ? 'bg-purple-600 text-white shadow-xs font-black'
                    : 'text-slate-500 hover:text-purple-700'
                }`}
              >
                🧪 Hóa ({chemClassesCount})
              </button>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200">
              <button 
                onClick={prevWeek} 
                className="p-1.5 rounded-lg hover:bg-white text-slate-600 hover:text-slate-900 transition cursor-pointer"
                title="Tuần trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={goToday} 
                className="text-xs font-black px-3 py-1.5 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition shadow-sm cursor-pointer"
              >
                Tuần hiện tại
              </button>
              <button 
                onClick={nextWeek} 
                className="p-1.5 rounded-lg hover:bg-white text-slate-600 hover:text-slate-900 transition cursor-pointer"
                title="Tuần sau"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-xs font-black text-slate-700 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 font-mono">
              {formatWeekRange(weekDays)}
            </span>

            {/* Nút sửa lịch dạy tinh gọn - lúc nào cần thì bấm */}
            <button
              onClick={() => openEditSchedule(classes[0] || { id: '' })}
              className="p-1.5 sm:px-2.5 sm:py-1.5 bg-white hover:bg-teal-50 text-slate-600 hover:text-teal-700 rounded-xl text-xs font-bold border border-slate-200 shadow-xs flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
              title="Bấm để chỉnh sửa lịch dạy khi cần"
            >
              <Edit3 className="w-3.5 h-3.5 text-teal-600" />
              <span className="hidden sm:inline">Sửa lịch</span>
            </button>
          </div>
        </div>

        {/* BẢNG LƯỚI 7 CỘT THỨ HIỆN ĐẠI */}
        <div className="overflow-x-auto -mx-2 px-2 scrollbar-thin">
          <div className="grid grid-cols-7 gap-3 min-w-[980px] py-1">
            {weekDays.map((dayDate) => {
              const dayNum = dayDate.getDay()
              const isDayToday = isToday(dayDate)
              const dayClasses = getClassesForDay(dayNum)
              const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']

              return (
                <div 
                  key={dayDate.toISOString()} 
                  className={`flex flex-col gap-2.5 p-2.5 rounded-2xl transition-all duration-300 ${
                    isDayToday 
                      ? 'bg-gradient-to-b from-teal-50/90 via-white to-emerald-50/40 border-2 border-teal-500 shadow-xl shadow-teal-500/10 ring-4 ring-teal-500/10' 
                      : 'bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Cột Header ngày */}
                  <div className={`flex flex-col items-center py-2.5 px-1.5 rounded-xl transition-all ${
                    isDayToday 
                      ? 'bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 text-white shadow-md' 
                      : 'bg-white border border-slate-200/90 shadow-xs'
                  }`}>
                    <span className={`text-[11px] font-black uppercase tracking-wider ${
                      isDayToday ? 'text-teal-100' : 'text-slate-500'
                    }`}>
                      {dayNames[dayNum]}
                    </span>
                    <span className={`text-lg font-black mt-0.5 ${
                      isDayToday ? 'text-white' : 'text-slate-800'
                    }`}>
                      {String(dayDate.getDate()).padStart(2, '0')}
                    </span>
                    
                    {isDayToday ? (
                      <span className="text-[9px] font-black bg-white text-teal-800 px-2 py-0.5 rounded-full uppercase tracking-tight shadow-sm mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        Hôm nay · {dayClasses.length} ca
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400 mt-0.5">
                        {dayClasses.length > 0 ? `${dayClasses.length} ca dạy` : 'Nghỉ'}
                      </span>
                    )}
                  </div>

                  {/* Danh sách các ca học trong ngày */}
                  <div className="flex flex-col gap-2 flex-1 min-h-[200px]">
                    {dayClasses.length === 0 ? (
                      <div className="flex-1 flex flex-col items-center justify-center py-8 border-2 border-dashed border-slate-200 rounded-xl bg-white/60 text-center px-2 space-y-2">
                        <Clock className="w-5 h-5 text-slate-300 mx-auto" />
                        <span className="text-[11px] text-slate-400 font-medium italic">Không có ca dạy</span>
                        <button
                          onClick={() => {
                            // Find a class without schedule or first class
                            const cls = classes.find(c => !c.schedule || c.schedule === 'None') || classes[0]
                            if (cls) openEditSchedule(cls, dayNum)
                          }}
                          className="text-[10px] font-bold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 px-2 py-1 rounded-lg border border-teal-200 transition-colors cursor-pointer"
                        >
                          + Xếp ca ngày này
                        </button>
                      </div>
                    ) : (
                      dayClasses.map(cls => {
                        const isMath = cls.subject?.toLowerCase().includes('toán')
                        const stCount = classStudentCounts[cls.id] || 0
                        
                        return (
                          <div 
                            key={`${cls.id}-${cls.time}`} 
                            onClick={() => {
                              setDetailClass(cls)
                              setModalSearch('')
                            }}
                            className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-500 transition-all cursor-pointer group relative overflow-hidden flex flex-col gap-1.5"
                          >
                            {/* Dải màu môn học bên trái */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                              isMath 
                                ? 'bg-blue-600' 
                                : 'bg-purple-600'
                            }`} />

                            {/* Hàng 1: Tên Lớp to rõ + Nút sửa lịch */}
                            <div className="flex items-center justify-between gap-1 pl-1.5">
                              <span className="font-black text-slate-900 text-xs sm:text-sm group-hover:text-teal-700 transition-colors truncate">
                                {cls.name || cls.class_name}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  openEditSchedule(cls, dayNum)
                                }}
                                className="w-5 h-5 rounded-md bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-400 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                                title="Đổi giờ dạy"
                              >
                                <Edit3 className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Hàng 2: Giờ Dạy gọn gàng */}
                            {cls.time && (
                              <div className="pl-1.5 flex items-center gap-1.5 text-teal-800 font-bold text-xs font-mono bg-teal-50/90 px-2 py-1 rounded-lg border border-teal-200/50">
                                <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                                <span>{cls.time}</span>
                              </div>
                            )}
                          </div>
                        )
                      })
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── 7 Grades Overview Matrix (K6 - K12) ─────────────────────────── */}
      <div className="card p-5 border border-gray-100/90 shadow-sm">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
              <Layers className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-800 text-sm">Danh mục 7 Khối lớp chuẩn hóa (21 Lớp học)</h3>
              <p className="text-[11px] text-gray-400">Mỗi khối lớp gồm đúng 3 lớp học với chương trình sư phạm đồng bộ</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/classes')}
            className="text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1 transition cursor-pointer"
          >
            Quản lý tất cả lớp <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {gradeOverview.map(g => (
            <div 
              key={g.grade}
              onClick={() => navigate('/classes')}
              className="bg-gray-50/50 hover:bg-white p-3 rounded-xl border border-gray-200/80 hover:border-teal-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-8 h-8 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center shadow-sm">
                    K{g.grade}
                  </span>
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                    {g.classCount} lớp
                  </span>
                </div>
                <h4 className="font-black text-xs text-gray-800 mb-1">Khối {g.grade}</h4>
                <div className="space-y-0.5 text-[11px] text-gray-500">
                  {g.classes.slice(0, 3).map(c => (
                    <div key={c.id} className="truncate hover:text-teal-700">
                      • {c.name || c.class_name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-200/60 flex items-center justify-between text-[10px]">
                <span className="text-gray-400">Tổng sĩ số:</span>
                <span className="font-extrabold text-teal-700 bg-teal-50/80 px-1.5 py-0.5 rounded">
                  {g.studentCount} HS
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick Action Hub ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => navigate('/classes')}
          className="card p-4 flex items-center gap-3.5 hover:shadow-md hover:border-blue-300 cursor-pointer transition border border-gray-150 group"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-black text-gray-800 text-xs group-hover:text-blue-700 transition-colors">Quản lý 21 lớp học</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Xếp lịch, đổi phòng & sĩ số</p>
          </div>
        </div>

        <div 
          onClick={() => navigate('/tuition?tab=session-attendance')}
          className="card p-4 flex items-center gap-3.5 hover:shadow-md hover:border-teal-300 cursor-pointer transition border border-gray-150 group"
        >
          <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-black text-gray-800 text-xs group-hover:text-teal-700 transition-colors">Điểm danh & Học phí</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Tự tính tiền học theo số buổi</p>
          </div>
        </div>

        <div 
          onClick={() => navigate('/tuition')}
          className="card p-4 flex items-center gap-3.5 hover:shadow-md hover:border-emerald-300 cursor-pointer transition border border-gray-150 group"
        >
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-black text-gray-800 text-xs group-hover:text-emerald-700 transition-colors">Thu tiền & VietQR</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Báo phí Zalo & hóa đơn điện tử</p>
          </div>
        </div>

        <div 
          onClick={() => navigate('/students')}
          className="card p-4 flex items-center gap-3.5 hover:shadow-md hover:border-amber-300 cursor-pointer transition border border-gray-150 group"
        >
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-black text-gray-800 text-xs group-hover:text-amber-700 transition-colors">Hồ sơ học sinh</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Tra cứu thông tin học sinh & phụ huynh</p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          ── MODAL 1: CHỈNH SỬA LỊCH DẠY & PHÒNG HỌC (SIÊU TIỆN ÍCH) ──
          ══════════════════════════════════════════════════════════════ */}
      <Modal
        open={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        title="Chỉnh Sửa Lịch Giảng Dạy & Phòng Học"
        size="lg"
      >
        <div className="space-y-5 py-1">
          {/* 1. Chọn Lớp học */}
          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center justify-between">
              <span>1. Chọn Lớp Học Cần Đổi Lịch:</span>
              <span className="text-[11px] font-bold text-teal-700">
                {classes.find(c => c.id === editingClassId)?.subject} · Khối {classes.find(c => c.id === editingClassId)?.grade}
              </span>
            </label>
            <select
              value={editingClassId}
              onChange={e => {
                const target = classes.find(c => c.id === e.target.value)
                if (target) openEditSchedule(target)
              }}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">— Chọn một lớp học trong danh sách 21 lớp —</option>
              {classes.filter(c => c.status === 'active').map(c => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.subject} · Khối {c.grade}) — Hiện tại: {c.schedule || 'Chưa xếp lịch'}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Chọn Các Thứ Trong Tuần */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center justify-between">
              <span>2. Chọn Các Ngày Học Trong Tuần:</span>
              <span className="text-[11px] font-bold text-teal-600">
                Đã chọn: {selectedDays.length} buổi/tuần
              </span>
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {DAY_LABELS.map(item => {
                const isSelected = selectedDays.includes(item.day)
                return (
                  <button
                    key={item.day}
                    type="button"
                    onClick={() => toggleDaySelection(item.day)}
                    className={`p-2.5 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-teal-600 text-white border-teal-600 shadow-md scale-[1.02]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-black text-xs">{item.label}</span>
                    <span className={`text-[10px] mt-0.5 ${isSelected ? 'text-teal-200' : 'text-slate-400'}`}>
                      {isSelected ? '✓ Đang chọn' : '+ Chọn'}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3. Chọn Khung Giờ Học */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center justify-between">
              <span>3. Khung Giờ Giảng Dạy:</span>
              <span className="text-[11px] font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                {sessionTime}
              </span>
            </label>
            
            {/* Quick preset chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRESET_TIMES.map(p => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setSessionTime(p.label)}
                  className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                    sessionTime === p.label
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <p className="font-mono font-black text-xs">{p.label}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{p.desc}</p>
                </button>
              ))}
            </div>

            {/* Custom Time input */}
            <div className="pt-1">
              <input
                type="text"
                value={sessionTime}
                onChange={e => setSessionTime(e.target.value)}
                placeholder="Hoặc tự gõ giờ: VD: 18:00 - 19:30"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* 4. Chọn Phòng Học */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center justify-between">
              <span>4. Phòng Học:</span>
              <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {sessionRoom}
              </span>
            </label>

            {/* Preset rooms */}
            <div className="flex flex-wrap gap-1.5">
              {PRESET_ROOMS.map(r => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setSessionRoom(r)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    sessionRoom === r
                      ? 'bg-blue-50 border-blue-500 text-blue-900 font-black ring-2 ring-blue-500/20'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <input
              type="text"
              value={sessionRoom}
              onChange={e => setSessionRoom(e.target.value)}
              placeholder="Hoặc tự gõ tên phòng..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 mt-1"
            />
          </div>

          {/* 5. Live Preview Card */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-4 space-y-2 border border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold text-teal-300">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                XEM TRƯỚC LỊCH SẼ LƯU
              </span>
              <span className="bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded text-[10px]">Tự cập nhật bảng tuần</span>
            </div>
            <div className="font-black text-white text-sm">
              Lớp: {classes.find(c => c.id === editingClassId)?.name || 'Chưa chọn'}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-200">
              <span className="bg-white/10 px-2.5 py-1 rounded-lg border border-white/15 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-300" />
                <span>{previewScheduleString || 'Chưa có lịch'}</span>
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded-lg border border-white/15 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                <span>{sessionRoom}</span>
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setScheduleModalOpen(false)}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Hủy bỏ
            </button>
            <button
              type="button"
              onClick={handleSaveSchedule}
              disabled={savingSchedule || !editingClassId}
              className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-black text-xs rounded-xl shadow-md flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {savingSchedule ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{savingSchedule ? 'Đang lưu...' : 'LƯU LỊCH DẠY NGAY'}</span>
            </button>
          </div>
        </div>
      </Modal>

      {/* ── Modal 2: Danh sách học sinh của lớp ─────────────────────── */}
      <Modal
        open={!!detailClass}
        onClose={() => setDetailClass(null)}
        title={`Thông tin lớp học · ${detailClass?.name || detailClass?.class_name}`}
        size="2xl"
      >
        <div className="space-y-4">
          {/* Quick Action Header inside modal */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <div>
              <p className="text-xs font-black text-slate-800">
                {detailClass?.name} ({detailClass?.subject} · Khối {detailClass?.grade})
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Lịch: {detailClass?.schedule || 'Chưa xếp'} · {detailClass?.room || 'Chưa có phòng'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const targetCls = detailClass
                  setDetailClass(null)
                  openEditSchedule(targetCls)
                }}
                className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Đổi Lịch Lớp Này</span>
              </button>

              <button
                onClick={() => {
                  const cid = detailClass?.id
                  setDetailClass(null)
                  navigate('/tuition?tab=session-attendance&classId=' + cid)
                }}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Điểm Danh Học Phí</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm tên hoặc mã học sinh trong lớp..."
              value={modalSearch}
              onChange={e => setModalSearch(e.target.value)}
              className="input pl-9 w-full text-xs py-2 bg-gray-50/30 border-gray-200 focus:bg-white"
            />
          </div>

          <div className="space-y-3 mt-4">
            {statsLoading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-2">
                <div className="w-8 h-8 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
                <span className="text-xs text-gray-500 font-medium">Đang tải tiến độ học sinh...</span>
              </div>
            ) : filteredRoster.length === 0 ? (
              <div className="text-center py-12 text-gray-400 text-sm font-medium">
                {modalSearch ? 'Không tìm thấy học sinh phù hợp' : 'Chưa có học sinh nào đăng ký lớp này'}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredRoster.map(s => {
                  const pct = completedStats[s.id]
                  const bgStyle = pct !== undefined
                    ? { background: `linear-gradient(to right, #dcfce7 ${pct}%, #fee2e2 ${pct}%)` }
                    : { backgroundColor: '#ffffff' }

                  return (
                    <div
                      key={s.id}
                      onClick={() => setScorecardStudent(s)}
                      style={bgStyle}
                      className="p-3 rounded-xl border border-gray-200/90 shadow-sm hover:shadow-md hover:border-teal-400 transition cursor-pointer flex flex-col justify-between h-20"
                    >
                      <div className="min-w-0">
                        <p className="font-black text-xs text-gray-800 truncate">{s.full_name}</p>
                        <p className="text-[10px] text-gray-500 font-mono mt-0.5">{s.student_code}</p>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-bold text-gray-600 mt-1">
                        <span>Tiến độ:</span>
                        <span className="font-extrabold text-teal-700">
                          {pct !== undefined ? `${pct}%` : 'Chưa có'}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </Modal>

      {/* ── Modal 3: Bảng điểm học sinh ────────────────────────────── */}
      {scorecardStudent && (
        <StudentScorecardModal
          student={scorecardStudent}
          onClose={() => setScorecardStudent(null)}
        />
      )}

    </div>
  )
}
