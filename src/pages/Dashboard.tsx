import { useEffect, useState, useCallback, useMemo } from 'react'
import { 
  Users, BookOpen, CalendarCheck, ChevronLeft, ChevronRight, Clock, 
  MapPin, Search, Eye, EyeOff, DollarSign, GraduationCap, CheckCircle2, 
  ArrowRight, Sparkles, Layers, Calendar, ClipboardCheck, CreditCard
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDataStore } from '@/store/dataStore'
import { useAuthStore } from '@/store/authStore'
import { supabase } from '@/lib/supabase'
import { fmt, parseScheduleToDays } from '@/lib/helpers'
import type { LucideIcon } from 'lucide-react'
import Modal from '@/components/Modal'
import StudentScorecardModal from '@/components/StudentScorecardModal'

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
  const { classes, students, enrollments, loadClasses, loadStudents, loadEnrollments } = useDataStore()

  const [loaded, setLoaded]           = useState(false)
  const [detailClass, setDetailClass] = useState<any>(null)
  const [modalSearch, setModalSearch] = useState('')
  const [scorecardStudent, setScorecardStudent] = useState<any>(null)
  const [statsLoading, setStatsLoading] = useState(false)
  const [completedStats, setCompletedStats] = useState<Record<string, number>>({})
  const [showStudentCount, setShowStudentCount] = useState(true) // Mặc định hiển thị chuyên nghiệp
  const [viewDate, setViewDate] = useState(new Date())

  // Get Monday of the week containing viewDate, and return all 7 days
  const getWeekDays = (baseDate: Date) => {
    const currentDay = baseDate.getDay() // 0 = Sun, 1 = Mon, ..., 6 = Sat
    const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay
    const monday = new Date(baseDate)
    monday.setDate(baseDate.getDate() + diffToMonday)

    const days = []
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday)
      d.setDate(monday.getDate() + i)
      days.push(d)
    }
    return days
  }

  const weekDays = getWeekDays(viewDate)

  const isToday = (date: Date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
  }

  const formatWeekRange = (days: Date[]) => {
    if (days.length === 0) return ''
    const start = days[0]
    const end = days[days.length - 1]
    const pad = (n: number) => String(n).padStart(2, '0')
    return `${pad(start.getDate())}/${pad(start.getMonth() + 1)} - ${pad(end.getDate())}/${pad(end.getMonth() + 1)}/${end.getFullYear()}`
  }

  const getClassesForDay = (dayNum: number) => {
    return classes
      .filter(c => c.status === 'active')
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
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { void loadDashboard() }, [loadDashboard])

  // Count enrollments by class
  const classStudentCounts = useMemo(() => {
    const map: Record<string, number> = {}
    enrollments.forEach(e => {
      if (e.status === 'active') {
        map[e.class_id] = (map[e.class_id] || 0) + 1
      }
    })
    return map
  }, [enrollments])

  // Group classes by grade (6 to 12)
  const gradeOverview = useMemo(() => {
    const grades = ['6', '7', '8', '9', '10', '11', '12']
    return grades.map(g => {
      const gradeClasses = classes.filter(c => String(c.grade) === g)
      const totalStudents = gradeClasses.reduce((sum, c) => sum + (classStudentCounts[c.id] || 0), 0)
      return {
        grade: g,
        classes: gradeClasses,
        studentCount: totalStudents
      }
    })
  }, [classes, classStudentCounts])

  const todayClasses = useMemo(() => {
    return getClassesForDay(new Date().getDay())
  }, [classes])

  const fetchClassStats = async (classId: string, roster: any[]) => {
    if (!classId) {
      setCompletedStats({})
      return
    }
    setStatsLoading(true)
    try {
      const { data: rooms, error: roomsErr } = await supabase
        .from('exam_rooms')
        .select('id')
        .eq('class_id', classId)
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
      const studentIds = roster.map(s => s.id)

      studentIds.forEach(studentId => {
        const studentSubs = subs?.filter(sub => sub.student_id === studentId && sub.score !== 0) || []
        const submittedRooms = new Set(studentSubs.map(sub => sub.room_id))
        const completedCount = submittedRooms.size
        const pct = Math.round((completedCount / roomIds.length) * 100)
        stats[studentId] = pct
      })

      setCompletedStats(stats)
    } catch (err) {
      console.error('Lỗi tính toán phần trăm bài tập:', err)
    } finally {
      setStatsLoading(false)
    }
  }

  useEffect(() => {
    if (detailClass) {
      const roster = enrollments
        .filter(e => e.class_id === detailClass.id && e.status === 'active')
        .map(e => students.find(s => s.id === e.student_id))
        .filter(Boolean)
      void fetchClassStats(detailClass.id, roster)
    } else {
      setCompletedStats({})
    }
  }, [detailClass, enrollments, students])

  const rosterStudents: any[] = detailClass
    ? enrollments
        .filter(e => e.class_id === detailClass.id && e.status === 'active')
        .map(e => students.find(s => s.id === e.student_id))
        .filter(Boolean)
    : []

  const filteredRoster = rosterStudents.filter(s =>
    s.full_name?.toLowerCase().includes(modalSearch.toLowerCase()) ||
    s.student_code?.toLowerCase().includes(modalSearch.toLowerCase())
  )

  const activeClasses  = classes.filter(c => c.status === 'active').length
  const activeStudents = enrollments.filter(e => e.status === 'active').length

  if (!loaded) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="space-y-6">
      {/* ── Page Header ────────────────────────────────────────────── */}
      <div className="page-header flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-black text-gray-800 tracking-tight">HỆ THỐNG GIÁO DỤC THẦY THỌ</h1>
            <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Đang hoạt động
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Xin chào, <strong>{profile?.name ?? 'Thầy Thọ'}</strong> 👋 • Trung tâm bồi dưỡng Toán & Hóa học chuyên sâu
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm text-xs font-semibold text-gray-600">
          <Calendar className="w-4 h-4 text-teal-600" />
          <span>{fmt(new Date(), 'EEEE, dd/MM/yyyy')}</span>
        </div>
      </div>

      {/* ── 4 KPI Stat Cards ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          icon={BookOpen} 
          label="Lớp học tiêu chuẩn" 
          value={`${activeClasses} Lớp`} 
          sub="Quy chuẩn 3 lớp / khối (K6 - K12)" 
          color="teal" 
          badge="7 Khối"
        />
        <StatCard 
          icon={Users} 
          label="Tổng học sinh" 
          value={`${activeStudents} HS`} 
          sub="Đang theo học chính thức" 
          color="green" 
          hideable={true}
          isHidden={!showStudentCount}
          onToggleHide={() => setShowStudentCount(!showStudentCount)}
          badge="Đầy đủ"
        />
        <StatCard 
          icon={CalendarCheck} 
          label="Lịch dạy hôm nay" 
          value={`${todayClasses.length} Ca học`} 
          sub={todayClasses.length > 0 ? todayClasses.map(c => c.name).join(', ') : 'Hôm nay nghỉ dạy'} 
          color="amber" 
          badge={fmt(new Date(), 'EEEE')}
        />
        <StatCard 
          icon={DollarSign} 
          label="Biểu phí đào tạo" 
          value="80.000 đ" 
          sub="Lớp TOÁN 7.2: 60.000 đ/buổi" 
          color="blue" 
          badge="Chuẩn hóa"
        />
      </div>

      {/* ── Weekly Schedule Section ─────────────────────────────────── */}
      <div className="card p-5 flex flex-col justify-between border border-gray-100/90 shadow-sm">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <CalendarCheck className="w-4 h-4 text-teal-600" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-800 text-sm">Thời khóa biểu tuần này</h3>
              <p className="text-[11px] text-gray-400">Xem và click vào lớp học để mở nhanh danh sách học sinh</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={prevWeek} 
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition border border-gray-200"
              title="Tuần trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={goToday} 
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 transition border border-teal-200 shadow-sm"
            >
              Tuần hiện tại
            </button>
            <button 
              onClick={nextWeek} 
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition border border-gray-200"
              title="Tuần sau"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-gray-650 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
              {formatWeekRange(weekDays)}
            </span>
          </div>
        </div>

        <div className="overflow-x-auto -mx-2 px-2 scrollbar-thin">
          <div className="grid grid-cols-7 gap-2 min-w-[850px] py-1">
            {weekDays.map((dayDate) => {
              const dayNum = dayDate.getDay()
              const isDayToday = isToday(dayDate)
              const dayClasses = getClassesForDay(dayNum)
              const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']

              return (
                <div 
                  key={dayDate.toISOString()} 
                  className={`flex flex-col gap-2 p-2 rounded-xl transition-all duration-300 ${
                    isDayToday 
                      ? 'bg-gradient-to-b from-teal-50/70 to-emerald-50/40 border-2 border-teal-400 shadow-md ring-2 ring-teal-100/50' 
                      : 'bg-gray-50/40 border border-gray-150 hover:bg-white hover:border-gray-300'
                  }`}
                >
                  {/* Day Header */}
                  <div className={`flex flex-col items-center py-2 px-1 rounded-lg border transition-colors ${
                    isDayToday 
                      ? 'bg-teal-600 text-white border-teal-600 shadow-sm' 
                      : 'bg-white border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
                  }`}>
                    <span className={`text-[11px] font-black uppercase tracking-wider ${
                      isDayToday ? 'text-teal-100' : 'text-gray-500'
                    }`}>
                      {dayNames[dayNum]}
                    </span>
                    <span className={`text-base font-black mt-0.5 ${
                      isDayToday ? 'text-white' : 'text-gray-800'
                    }`}>
                      {String(dayDate.getDate()).padStart(2, '0')}
                    </span>
                    {isDayToday && (
                      <span className="text-[9px] font-black bg-white text-teal-700 px-2 py-0.5 rounded-full uppercase tracking-tight shadow-sm mt-1">
                        Hôm nay
                      </span>
                    )}
                  </div>

                  {/* Classes list */}
                  <div className="flex flex-col gap-2 flex-1 min-h-[190px]">
                    {dayClasses.length === 0 ? (
                      <div className="flex-1 flex flex-col items-center justify-center py-6 border border-dashed border-gray-200 rounded-lg bg-white/50">
                        <span className="text-[10px] text-gray-400 font-medium italic">Không có ca học</span>
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
                            className="bg-white p-2.5 rounded-xl border border-gray-200/90 shadow-sm hover:shadow-md hover:border-teal-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-1.5 cursor-pointer group"
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className={`px-1.5 py-0.5 text-[9px] font-black rounded-md uppercase border ${
                                isMath 
                                  ? 'bg-blue-50 text-blue-700 border-blue-200' 
                                  : 'bg-purple-50 text-purple-700 border-purple-200'
                              }`}>
                                {cls.subject || 'Toán'}
                              </span>
                              <span className="text-[9px] font-bold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-md">
                                {stCount} HS
                              </span>
                            </div>

                            <div className="font-black text-gray-850 text-xs leading-snug group-hover:text-teal-700 transition-colors">
                              {cls.name || cls.class_name}
                            </div>
                            
                            <div className="flex flex-col gap-1 pt-1 border-t border-gray-100 text-[10px] text-gray-600 font-medium">
                              {cls.time && (
                                <div className="flex items-center gap-1 text-teal-700 font-bold">
                                  <Clock className="w-3 h-3 flex-shrink-0 text-teal-600" />
                                  <span>{cls.time}</span>
                                </div>
                              )}
                              {cls.room && (
                                <div className="flex items-center gap-1 text-gray-500 truncate">
                                  <MapPin className="w-3 h-3 flex-shrink-0 text-gray-400" />
                                  <span className="truncate">{cls.room}</span>
                                </div>
                              )}
                            </div>
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
            className="text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1 transition"
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
                  <span className="text-[11px] font-extrabold text-gray-700 bg-white border border-gray-200 px-2 py-0.5 rounded-full shadow-sm">
                    {g.studentCount} HS
                  </span>
                </div>
                <div className="space-y-1.5 mt-2">
                  {g.classes.map(c => {
                    const cnt = classStudentCounts[c.id] || 0
                    const isMath = c.subject?.toLowerCase().includes('toán')
                    return (
                      <div key={c.id} className="bg-white p-1.5 rounded-lg border border-gray-100 flex items-center justify-between text-[11px]">
                        <span className="font-extrabold text-gray-800 truncate" title={c.name}>
                          {c.name}
                        </span>
                        <span className={`text-[9px] font-black px-1 rounded ${
                          isMath ? 'text-blue-600 bg-blue-50' : 'text-purple-600 bg-purple-50'
                        }`}>
                          {cnt}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-200/60 flex items-center justify-between text-[10px] text-gray-400 font-bold">
                <span>3 Lớp học</span>
                <span className="text-teal-600 group-hover:translate-x-0.5 transition-transform">Chi tiết →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick Action Hub ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => navigate('/attendance')}
          className="card p-4 flex items-center gap-3.5 hover:shadow-md hover:border-teal-300 cursor-pointer transition border border-gray-150 group"
        >
          <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <ClipboardCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-black text-gray-800 text-xs group-hover:text-teal-700 transition-colors">Điểm danh buổi học</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Ghi nhận sĩ số & tự động nhảy học phí</p>
          </div>
        </div>

        <div 
          onClick={() => navigate('/tuition')}
          className="card p-4 flex items-center gap-3.5 hover:shadow-md hover:border-emerald-300 cursor-pointer transition border border-gray-150 group"
        >
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-black text-gray-800 text-xs group-hover:text-emerald-700 transition-colors">Quản lý học phí</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Biểu phí 80k/buổi & 60k cho Lớp 7.2</p>
          </div>
        </div>

        <div 
          onClick={() => navigate('/classes')}
          className="card p-4 flex items-center gap-3.5 hover:shadow-md hover:border-blue-300 cursor-pointer transition border border-gray-150 group"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-black text-gray-800 text-xs group-hover:text-blue-700 transition-colors">21 Lớp học chuẩn hóa</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Xếp lịch, phòng học và sĩ số 7 khối</p>
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
            <h4 className="font-black text-gray-800 text-xs group-hover:text-amber-700 transition-colors">Hồ sơ 209 học sinh</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Tra cứu thông tin học sinh & phụ huynh</p>
          </div>
        </div>
      </div>

      {/* ── Modal: Danh sách học sinh của lớp ─────────────────────── */}
      <Modal
        open={!!detailClass}
        onClose={() => setDetailClass(null)}
        title={`Danh sách học sinh · Lớp ${detailClass?.name || detailClass?.class_name}`}
        size="2xl"
      >
        <div className="space-y-4">
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
                      className="relative border border-gray-200 hover:border-teal-300 rounded-xl hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col items-center justify-center py-4 px-3 min-h-[56px] text-center"
                    >
                      <span className="font-extrabold text-xs text-gray-800 tracking-wide uppercase line-clamp-2">
                        {s.full_name}
                      </span>
                      {pct !== undefined && (
                        <span className="absolute bottom-1 left-2 text-[9px] font-black font-mono text-gray-650 bg-white/70 px-1 py-0.2 rounded shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                          {pct}%
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </Modal>

      {/* ── Modal: Xem hồ sơ và bảng điểm rút gọn của học sinh ───── */}
      <StudentScorecardModal
        student={scorecardStudent}
        open={!!scorecardStudent}
        onClose={() => {
          setScorecardStudent(null)
          if (detailClass) {
            void fetchClassStats(detailClass.id, rosterStudents)
          }
        }}
      />
    </div>
  )
}
