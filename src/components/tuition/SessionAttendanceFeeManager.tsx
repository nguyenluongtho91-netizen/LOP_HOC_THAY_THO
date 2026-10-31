// src/components/tuition/SessionAttendanceFeeManager.tsx
import React, { useState, useMemo, useEffect } from 'react'
import {
  CalendarCheck, CalendarDays, CheckSquare, XSquare, Save, RefreshCw,
  Clock, Sparkles, DollarSign, Users, Check, Trash2, Edit3, ArrowRight,
  ExternalLink, AlertCircle, CheckCircle2, ChevronRight, ChevronLeft, FileText, Send,
  Table as TableIcon, Layers, Calendar, ChevronDown, CheckCircle, QrCode, Copy, HeartHandshake
} from 'lucide-react'
import { fmtVNDShort, formatVietQRAddInfo } from '@/lib/helpers'

const fmt = (date: any, pattern = 'dd/MM/yyyy'): string => {
  if (!date) return '—'
  try {
    const s = String(date).split('T')[0]
    const parts = s.split('-')
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`
    return s
  } catch {
    return '—'
  }
}
import { copyQrImageToClipboard } from '@/services/zaloService'
import { format } from 'date-fns'
import toast from 'react-hot-toast'
import { supabase } from '@/lib/supabase'
import type { Class, Student, AttendanceRecord, TuitionNotification } from '@/types'

interface SessionAttendanceFeeManagerProps {
  classes: Class[]
  selClass: string
  onSelectClass: (classId: string) => void
  students: Student[]
  enrollments: any[]
  attendance: AttendanceRecord[]
  loadAttendance: (classId?: string, dateFrom?: string, dateTo?: string) => Promise<void>
  tuitionNotifications: TuitionNotification[]
  upsertTuitionNotification: (payload: any) => Promise<any>
  updateTuitionNotification: (id: string, payload: any) => Promise<any>
  updateClass?: (id: string, payload: any) => Promise<any>
  onOpenInvoice?: (student: Student, amount: number, sessionCount: number, unitPrice: number, attendedDates?: string[]) => void
  onSwitchToTuitionTab?: () => void
}

const LOCAL_UNIT_PRICES_KEY = '__CLASS_UNIT_PRICES__'

export const STUDENT_CUSTOM_RATES: Record<string, number> = {
  '0cd3090a-a5d5-4ced-b192-d22beb21762a': 0,     // Lê Thị Thu Ngân (Lớp 6A): 0đ (Miễn phí)
  'd5d931b7-0891-4124-8d3c-2f5f818d92cd': 0,     // Lê Thị Bình Nhi (Lớp 12): 0đ (Miễn phí)
  'ac066b5d-606a-4cfa-a3bd-96f569b85005': 0,     // Nguyễn Ngọc Trang (Lớp 7A): 0đ (Miễn phí)
  '072b8d66-03a2-4e13-81c9-0893360f3eca': 40000, // Nguyễn Minh Chí (Lớp 7A): 40.000đ/buổi
  'e2f1a1ee-e8ff-4a3f-8606-1013fdb22bef': 40000, // Nguyễn Hà Phương (Lớp 7A): 40.000đ/buổi
  'd80d2f54-dcb6-430d-b43b-b7061da54d72': 40000, // Nguyễn Huy Hoàng (Lớp 11): 40.000đ/buổi
  '53843fca-d1c8-4df6-ba36-1f9bb6e5f27f': 40000, // Nguyễn Hữu Bảo (Lớp 11): 40.000đ/buổi
  '55c11a09-6778-4065-aaa4-d123a19b6874': 50000, // Dương Thị Diễm Nhi (Lớp 11): 50.000đ/buổi
  '7334a553-0e31-47e2-b0fa-4d35e79eb083': 60000, // Nguyễn Thị Phương Chi (Lớp 12): 60.000đ/buổi
  '53893c65-e726-4dee-8116-f1b29b0cd55a': 50000, // Lê Viết Nam (Lớp 8A): 50.000đ/buổi
  'b1ed2f0f-36b1-4076-8ac8-64dabba143a4': 0,     // Lê Viết Nam (Lớp 8B): 0đ (Miễn phí)
}


export default function SessionAttendanceFeeManager({
  classes,
  selClass,
  onSelectClass,
  students,
  enrollments,
  attendance,
  loadAttendance,
  tuitionNotifications,
  upsertTuitionNotification,
  updateTuitionNotification,
  updateClass,
  onOpenInvoice,
  onSwitchToTuitionTab
}: SessionAttendanceFeeManagerProps) {
  // Current active class object
  const currentClass = classes.find(c => c.id === selClass)

  const [unitPricesMap, setUnitPricesMap] = useState<Record<string, number>>({})
  const [unitPrice, setUnitPrice] = useState<number>(80000)
  const [isEditingPrice, setIsEditingPrice] = useState(false)
  const [priceInput, setPriceInput] = useState<string>('80000')
  const [savingPrice, setSavingPrice] = useState(false)
  const [copiedSessionQrId, setCopiedSessionQrId] = useState<string | null>(null)
  const [copiedSessionMsgId, setCopiedSessionMsgId] = useState<string | null>(null)

  // Selected date for recording attendance
  const [sessionDate, setSessionDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'))
  const [sessionNote, setSessionNote] = useState<string>('')
  
  // Draft attendance for current sessionDate
  const [draft, setDraft] = useState<Record<string, { present: boolean; late: boolean; note: string }>>({})
  const [savingSession, setSavingSession] = useState(false)
  const [syncingAll, setSyncingAll] = useState(false)

  // Filter month (YYYY-MM)
  const [selectedMonth, setSelectedMonth] = useState<string>(format(new Date(), 'yyyy-MM'))

  // Tách Tháng & Năm phục vụ giao diện chọn 100% Tiếng Việt
  const [curYear, curMonth] = useMemo(() => {
    const parts = (selectedMonth || format(new Date(), 'yyyy-MM')).split('-')
    return [parseInt(parts[0], 10) || 2026, parseInt(parts[1], 10) || 10]
  }, [selectedMonth])

  const handlePrevMonth = () => {
    let y = curYear
    let m = curMonth - 1
    if (m < 1) {
      m = 12
      y -= 1
    }
    setSelectedMonth(`${y}-${String(m).padStart(2, '0')}`)
  }

  const handleNextMonth = () => {
    let y = curYear
    let m = curMonth + 1
    if (m > 12) {
      m = 1
      y += 1
    }
    setSelectedMonth(`${y}-${String(m).padStart(2, '0')}`)
  }

  const handleMonthChange = (m: number) => {
    setSelectedMonth(`${curYear}-${String(m).padStart(2, '0')}`)
  }

  const handleYearChange = (y: number) => {
    setSelectedMonth(`${y}-${String(curMonth).padStart(2, '0')}`)
  }

  // View mode tab for the selected class: 'matrix' (Ma trận buổi học) | 'journal' (Nhật ký & điểm danh) | 'tuition' (Tổng hợp học phí)
  const [viewMode, setViewMode] = useState<'matrix' | 'journal' | 'tuition'>('matrix')

  // Load all unit prices from LocalStorage & Supabase exams
  useEffect(() => {
    const loadUnitPrices = async () => {
      let localMap: Record<string, number> = {}
      try {
        const raw = localStorage.getItem(LOCAL_UNIT_PRICES_KEY)
        if (raw) localMap = JSON.parse(raw)
      } catch {}

      try {
        const { data } = await supabase
          .from('exams')
          .select('data')
          .eq('title', LOCAL_UNIT_PRICES_KEY)
          .maybeSingle()

        if (data?.data?.items) {
          localMap = { ...localMap, ...data.data.items }
          localStorage.setItem(LOCAL_UNIT_PRICES_KEY, JSON.stringify(localMap))
        }
      } catch {}

      setUnitPricesMap(localMap)
    }

    void loadUnitPrices()
  }, [])

  // Update unitPrice whenever selClass changes
  useEffect(() => {
    if (!selClass) return

    const cName = ((currentClass as any)?.class_name || currentClass?.name || '').toUpperCase()
    const is7A = selClass === '75ec18e9-cc89-4b3e-87b0-a4a39cb90d40' || cName.includes('7A') || cName.includes('7.2')

    if (is7A) {
      setUnitPrice(60000)
      setPriceInput('60000')
      return
    }

    // 1. Priority: unitPricesMap
    if (unitPricesMap[selClass]) {
      setUnitPrice(unitPricesMap[selClass])
      setPriceInput(String(unitPricesMap[selClass]))
      return
    }

    // 2. Fallback: class name logic
    const fallbackPrice = currentClass?.tuition_fee || 80000

    setUnitPrice(fallbackPrice)
    setPriceInput(String(fallbackPrice))
  }, [selClass, unitPricesMap, currentClass])

  // Save modified unit price
  const handleSavePrice = async () => {
    const val = Number(priceInput)
    if (!val || val <= 0) {
      toast.error('Vui lòng nhập đơn giá hợp lệ (> 0đ)')
      return
    }

    setSavingPrice(true)
    try {
      const nextMap = { ...unitPricesMap, [selClass]: val }
      setUnitPricesMap(nextMap)
      setUnitPrice(val)
      localStorage.setItem(LOCAL_UNIT_PRICES_KEY, JSON.stringify(nextMap))

      const { data: existing } = await supabase
        .from('exams')
        .select('id')
        .eq('title', LOCAL_UNIT_PRICES_KEY)
        .maybeSingle()

      if (existing?.id) {
        await supabase
          .from('exams')
          .update({ data: { items: nextMap } })
          .eq('id', existing.id)
      } else {
        await supabase
          .from('exams')
          .insert([{ title: LOCAL_UNIT_PRICES_KEY, data: { items: nextMap } }])
      }

      setIsEditingPrice(false)
      toast.success(`Đã cập nhật đơn giá lớp ${currentClass?.name}: ${fmtVNDShort(val)}/buổi`)
    } catch (err: any) {
      toast.error('Lỗi lưu đơn giá: ' + err.message)
    } finally {
      setSavingPrice(false)
    }
  }

  // Active students enrolled in selected class
  const enrolledStudents = useMemo(() => {
    if (!selClass) return []
    const sids = new Set(
      enrollments
        .filter(e => e.class_id === selClass && e.status === 'active')
        .map(e => e.student_id)
    )
    return students
      .filter(s => sids.has(s.id) && s.status === 'active')
      .sort((a, b) => (a.full_name || '').localeCompare(b.full_name || '', 'vi'))
  }, [selClass, enrollments, students])

  // Attendance records for the selected class (handling both uppercase and lowercase)
  const classAttendanceRecords = useMemo(() => {
    if (!selClass) return []
    return attendance.filter(a => a.class_id === selClass)
  }, [selClass, attendance])

  // Sessions grouped by date for selected class in selectedMonth
  const sessionsHistory = useMemo(() => {
    const datesMap: Record<string, { date: string; presentCount: number; lateCount: number; absentCount: number; studentIds: string[] }> = {}
    
    for (const rec of classAttendanceRecords) {
      if (!selectedMonth || rec.date.startsWith(selectedMonth)) {
        if (!datesMap[rec.date]) {
          datesMap[rec.date] = { date: rec.date, presentCount: 0, lateCount: 0, absentCount: 0, studentIds: [] }
        }
        const isPres = rec.present || rec.status === 'PRESENT' || rec.status === 'present'
        const isLt = (rec as any).late || rec.status === 'LATE' || rec.status === 'late'
        if (isPres) {
          datesMap[rec.date].presentCount++
          datesMap[rec.date].studentIds.push(rec.student_id)
        } else {
          datesMap[rec.date].absentCount++
        }
        if (isLt) datesMap[rec.date].lateCount++
      }
    }

    // Sort ascending by date for matrix columns
    return Object.values(datesMap).sort((a, b) => a.date.localeCompare(b.date))
  }, [classAttendanceRecords, selectedMonth])

  // Load draft attendance when sessionDate or enrolledStudents changes
  useEffect(() => {
    if (!selClass || !sessionDate) return
    const initialDraft: Record<string, { present: boolean; late: boolean; note: string }> = {}
    for (const st of enrolledStudents) {
      const rec = classAttendanceRecords.find(a => a.student_id === st.id && a.date === sessionDate)
      if (rec) {
        const isPres = rec.present || rec.status === 'PRESENT' || rec.status === 'present'
        initialDraft[st.id] = {
          present: isPres,
          late: (rec as any).late || rec.status === 'LATE' || rec.status === 'late',
          note: rec.note || ''
        }
      } else {
        // Mặc định ban đầu: Có mặt
        initialDraft[st.id] = { present: true, late: false, note: '' }
      }
    }
    setDraft(initialDraft)
  }, [selClass, sessionDate, enrolledStudents, classAttendanceRecords])

  // Summary per student for selected class in selectedMonth
  const studentSummaries = useMemo(() => {
    return enrolledStudents.map(st => {
      // Find all attended dates for this student in selectedMonth
      const attendedDates = classAttendanceRecords
        .filter(a => a.student_id === st.id)
        .filter(a => a.present || a.status === 'PRESENT' || a.status === 'present' || a.status === 'LATE' || a.status === 'late')
        .filter(a => !selectedMonth || a.date.startsWith(selectedMonth))
        .map(a => a.date)
        .sort()

      const attendedCount = attendedDates.length
      const notif = tuitionNotifications.find(n => n.student_id === st.id && n.class_id === selClass)
      const customRate = STUDENT_CUSTOM_RATES[st.id]
      const studentRate = customRate !== undefined ? customRate : unitPrice
      const calculatedAmount = attendedCount * studentRate
      const currentAmount = notif ? Number(notif.amount) : 0
      const isPaid = notif?.is_paid || false
      const isSynced = currentAmount === calculatedAmount && notif != null

      return {
        student: st,
        attendedDates,
        attendedCount,
        studentRate,
        calculatedAmount,
        currentAmount,
        isPaid,
        isSynced,
        notif
      }
    })
  }, [enrolledStudents, classAttendanceRecords, selectedMonth, unitPrice, tuitionNotifications, selClass])

  // KPI Stats for selected class
  const totalSessionsCount = sessionsHistory.length
  const totalAttendancesCount = sessionsHistory.reduce((sum, s) => sum + s.presentCount, 0)
  const totalClassSessionRevenue = sessionsHistory.reduce((sum, s) => sum + (s.presentCount * unitPrice), 0)

  // Quick mark all in draft
  const markAll = (present: boolean) => {
    const next: Record<string, { present: boolean; late: boolean; note: string }> = {}
    for (const st of enrolledStudents) {
      next[st.id] = {
        present,
        late: false,
        note: draft[st.id]?.note || ''
      }
    }
    setDraft(next)
  }

  // Toggle single student in draft
  const toggleStudent = (studentId: string) => {
    setDraft(prev => {
      const cur = prev[studentId] || { present: false, late: false, note: '' }
      return {
        ...prev,
        [studentId]: { ...cur, present: !cur.present }
      }
    })
  }

  // Toggle attendance directly in matrix table
  const handleToggleMatrixCell = async (studentId: string, date: string, currentPresent: boolean) => {
    const newStatus = currentPresent ? 'ABSENT' : 'PRESENT'
    try {
      const { error } = await supabase
        .from('attendance')
        .upsert([{
          class_id: selClass,
          student_id: studentId,
          date: date,
          status: newStatus,
          note: newStatus === 'PRESENT' ? 'Có mặt' : 'Vắng'
        }], { onConflict: 'date,class_id,student_id' })

      if (error) throw error
      await loadAttendance(selClass)
      toast.success(`Đã cập nhật: ${newStatus === 'PRESENT' ? 'Có mặt' : 'Vắng'}`)
    } catch (err: any) {
      toast.error('Lỗi cập nhật: ' + err.message)
    }
  }

  // Save current session draft into Supabase
  const handleSaveSession = async () => {
    if (!selClass) return toast.error('Vui lòng chọn lớp học trước')
    if (!sessionDate) return toast.error('Vui lòng chọn ngày học')
    if (enrolledStudents.length === 0) return toast.error('Lớp chưa có học sinh nào')

    setSavingSession(true)
    try {
      const rows = enrolledStudents.map(st => {
        const d = draft[st.id] || { present: false, late: false, note: '' }
        const isPresent = d.present
        const isLate = d.late
        return {
          date: sessionDate,
          class_id: selClass,
          student_id: st.id,
          status: isPresent ? (isLate ? 'LATE' : 'PRESENT') : 'ABSENT',
          note: d.note || sessionNote || null
        }
      })

      const { error } = await supabase
        .from('attendance')
        .upsert(rows, { onConflict: 'date,class_id,student_id' })

      if (error) throw error

      // Reload attendance store
      await loadAttendance(selClass)

      const presentCount = rows.filter(r => r.status === 'PRESENT' || r.status === 'LATE').length
      const sessionMoney = presentCount * unitPrice

      toast.success(
        `✅ Đã lưu buổi học ngày ${fmt(sessionDate)}!
` +
        `• ${presentCount}/${enrolledStudents.length} học sinh có mặt
` +
        `• Doanh thu buổi: ${fmtVNDShort(sessionMoney)}`
      )
    } catch (err: any) {
      toast.error('Lỗi khi lưu buổi học: ' + err.message)
    } finally {
      setSavingSession(false)
    }
  }

  // Delete a session
  const handleDeleteSession = async (dateToDelete: string) => {
    if (!window.confirm(`Thầy có chắc chắn muốn xóa toàn bộ điểm danh buổi học ngày ${fmt(dateToDelete)} của lớp này không?`)) {
      return
    }
    try {
      const { error } = await supabase
        .from('attendance')
        .delete()
        .eq('class_id', selClass)
        .eq('date', dateToDelete)

      if (error) throw error
      await loadAttendance(selClass)
      toast.success(`Đã xóa buổi học ngày ${fmt(dateToDelete)}`)
    } catch (err: any) {
      toast.error('Lỗi khi xóa: ' + err.message)
    }
  }

  // Sync all students to tuition
  const handleSyncAllToTuition = async () => {
    if (!selClass) return toast.error('Vui lòng chọn lớp học')
    if (enrolledStudents.length === 0) return toast.error('Không có học sinh trong lớp')

    setSyncingAll(true)
    let updatedCount = 0
    try {
      const clsName = (currentClass as any)?.class_name || currentClass?.name || 'Lớp học'
      const activeMonthName = selectedMonth ? `Tháng ${selectedMonth.split('-')[1]}/${selectedMonth.split('-')[0]}` : 'Học phí'

      for (const item of studentSummaries) {
        const studentId = item.student.id
        const amount = item.calculatedAmount
        const count = item.attendedCount
        const datesDetail = item.attendedDates.length > 0
          ? item.attendedDates.map((d, i) => `Buổi ${i + 1}: Ngày ${fmt(d)}`).join(', ')
          : '0 buổi'
        const courseNameWithSessions = `${activeMonthName} (${count} buổi: ${datesDetail})`

        if (item.notif) {
          await updateTuitionNotification(item.notif.id, {
            amount,
            course_name: courseNameWithSessions
          })
        } else {
          await upsertTuitionNotification({
            student_id: studentId,
            class_id: selClass,
            course_name: courseNameWithSessions,
            amount,
            is_paid: false
          })
        }
        updatedCount++
      }

      toast.success(
        `🎉 ĐÃ ĐỒNG BỘ THÀNH CÔNG CHO ${updatedCount} HỌC SINH!
` +
        `Số tiền cần nộp đã tự động nhảy theo đúng số buổi học của từng em.`
      )
    } catch (err: any) {
      toast.error('Lỗi đồng bộ: ' + err.message)
    } finally {
      setSyncingAll(false)
    }
  }

  // Sync a single student
  const handleSyncSingleStudent = async (item: typeof studentSummaries[0]) => {
    try {
      const activeMonthName = selectedMonth ? `Tháng ${selectedMonth.split('-')[1]}/${selectedMonth.split('-')[0]}` : 'Học phí'
      const datesDetail = item.attendedDates.length > 0
        ? item.attendedDates.map((d, i) => `Buổi ${i + 1}: Ngày ${fmt(d)}`).join(', ')
        : '0 buổi'
      const courseNameWithSessions = `${activeMonthName} (${item.attendedCount} buổi: ${datesDetail})`

      if (item.notif) {
        await updateTuitionNotification(item.notif.id, {
          amount: item.calculatedAmount,
          course_name: courseNameWithSessions
        })
      } else {
        await upsertTuitionNotification({
          student_id: item.student.id,
          class_id: selClass,
          course_name: courseNameWithSessions,
          amount: item.calculatedAmount,
          is_paid: false
        })
      }

      toast.success(`Đã đồng bộ học phí em ${item.student.full_name}: ${fmtVNDShort(item.calculatedAmount)}`)
    } catch (err: any) {
      toast.error('Lỗi: ' + err.message)
    }
  }

  // Realtime count of present in current draft
  const currentPresentCount = useMemo(() => {
    return Object.values(draft).filter(d => d.present).length
  }, [draft])
  const currentSessionRevenue = currentPresentCount * unitPrice

  // ── OVERVIEW ACROSS ALL 21 CLASSES ──
  const allClassesStats = useMemo(() => {
    return classes
      .filter(c => c.status === 'active')
      .map(c => {
        const is7A = c.id === '75ec18e9-cc89-4b3e-87b0-a4a39cb90d40' || (c.name || '').toUpperCase().includes('7A') || (c.name || '').includes('7.2')
        const cPrice = is7A ? 60000 : (unitPricesMap[c.id] || c.tuition_fee || 80000)
        const cEnrolls = enrollments.filter(e => e.class_id === c.id && e.status === 'active')
        const cAtts = attendance.filter(a => a.class_id === c.id && (!selectedMonth || a.date.startsWith(selectedMonth)))
        
        // Distinct session dates
        const distinctDates = Array.from(new Set(cAtts.map(a => a.date))).sort()
        const totalPresents = cAtts.filter(a => a.present || a.status === 'PRESENT' || a.status === 'present').length
        let totalRev = 0
        cEnrolls.forEach(e => {
          const sPresents = cAtts.filter(a => a.student_id === e.student_id && (a.present || a.status === 'PRESENT' || a.status === 'present')).length
          const sRate = STUDENT_CUSTOM_RATES[e.student_id] !== undefined ? STUDENT_CUSTOM_RATES[e.student_id] : cPrice
          totalRev += sPresents * sRate
        })

        return {
          cls: c,
          studentCount: cEnrolls.length,
          unitPrice: cPrice,
          sessionDates: distinctDates,
          sessionCount: distinctDates.length,
          totalPresents,
          totalRevenue: totalRev
        }
      })
      .sort((a, b) => {
        const ga = parseInt(String(a.cls.grade || '0').replace(/\D/g, ''), 10)
        const gb = parseInt(String(b.cls.grade || '0').replace(/\D/g, ''), 10)
        if (ga !== gb) return ga - gb
        return (a.cls.name || '').localeCompare(b.cls.name || '', 'vi')
      })
  }, [classes, enrollments, attendance, selectedMonth, unitPricesMap])

  return (
    <div className="space-y-6">

      {/* ── TOP BANNER: QUẢN LÝ TIẾN ĐỘ BUỔI HỌC ── */}
      <div className="bg-gradient-to-r from-teal-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl border border-teal-800/60">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30">
              <CalendarCheck className="w-7 h-7 text-teal-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-wide uppercase">
                  BẢNG THỐNG KÊ BUỔI ĐÃ HỌC & ĐỒNG BỘ HỌC PHÍ
                </h2>
                <span className="bg-emerald-400/20 text-emerald-300 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                  TỰ ĐỘNG LIÊN KẾT 100%
                </span>
              </div>
              <p className="text-xs text-teal-200 mt-1 max-w-2xl leading-relaxed">
                Thống kê chi tiết từng buổi đã học, ngày diễn ra, số học sinh có mặt và số tiền thu được. Tự nhân theo số buổi học để khớp thẳng vào học phí cần nộp!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {selClass && (
              <button
                onClick={handleSyncAllToTuition}
                disabled={syncingAll || enrolledStudents.length === 0}
                className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl text-xs font-black flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>{syncingAll ? 'Đang đồng bộ...' : 'ĐỒNG BỘ TIỀN VÀO HỌC PHÍ'}</span>
              </button>
            )}
            {onSwitchToTuitionTab && (
              <button
                onClick={onSwitchToTuitionTab}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-white/15"
              >
                <span>Xem Bảng Thu Học Phí</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* CONTROLS: CHỌN LỚP, THÁNG, ĐƠN GIÁ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
          
          {/* 1. Chọn Lớp */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-teal-200 uppercase tracking-wider flex items-center justify-between">
              <span>1. Lớp học đang chọn:</span>
              {selClass && (
                <button 
                  onClick={() => onSelectClass('')}
                  className="text-[10px] text-amber-300 hover:underline font-normal"
                >
                  Xem tất cả lớp
                </button>
              )}
            </label>
            <select
              value={selClass}
              onChange={e => onSelectClass(e.target.value)}
              className="w-full bg-slate-800/90 border border-teal-500/40 rounded-xl px-3.5 py-2.5 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="">📊 — TẤT CẢ 21 LỚP HỌC (XEM TỔNG QUAN) —</option>
              {classes.filter(c => c.status === 'active').map(c => {
                const is72 = c.tuition_fee === 60000 || (c.name || '').includes('7.2') || (c.name || '').includes('7A')
                return (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.grade ? `Khối ${c.grade}` : 'Môn Toán'}) • {is72 ? '60k' : '80k'}/buổi
                  </option>
                )
              })}
            </select>
          </div>

          {/* 2. Chọn Tháng Học (100% Tiếng Việt, không phụ thuộc trình duyệt) */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-bold text-teal-200 uppercase tracking-wider">
                2. Xem theo tháng học:
              </label>
              <span className="text-[10px] text-amber-300 font-bold bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/30">
                Tháng {curMonth < 10 ? `0${curMonth}` : curMonth}/{curYear}
              </span>
            </div>

            <div className="flex items-center gap-1 bg-slate-800/90 border border-teal-500/40 rounded-xl p-1 text-xs text-white">
              <button
                type="button"
                onClick={handlePrevMonth}
                title="Lùi 1 tháng"
                className="p-2 hover:bg-teal-600/40 text-teal-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <select
                value={curMonth}
                onChange={e => handleMonthChange(Number(e.target.value))}
                className="flex-1 bg-slate-700/90 border-0 rounded-lg px-2 py-2 text-xs font-bold text-white focus:outline-none focus:ring-1 focus:ring-teal-400 cursor-pointer"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                  <option key={m} value={m} className="bg-slate-800 text-white font-medium">
                    Tháng {m < 10 ? `0${m}` : m}
                  </option>
                ))}
              </select>

              <select
                value={curYear}
                onChange={e => handleYearChange(Number(e.target.value))}
                className="w-24 bg-slate-700/90 border-0 rounded-lg px-2 py-2 text-xs font-bold text-white focus:outline-none focus:ring-1 focus:ring-teal-400 cursor-pointer"
              >
                {[2024, 2025, 2026, 2027, 2028].map(y => (
                  <option key={y} value={y} className="bg-slate-800 text-white font-medium">
                    Năm {y}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={handleNextMonth}
                title="Tiến 1 tháng"
                className="p-2 hover:bg-teal-600/40 text-teal-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. Đơn giá */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-bold text-teal-200 uppercase tracking-wider">
                3. Đơn giá 1 buổi học:
              </label>
              {selClass && !isEditingPrice && (
                <button
                  onClick={() => setIsEditingPrice(true)}
                  className="text-[10px] text-amber-300 hover:underline flex items-center gap-1"
                >
                  <Edit3 className="w-3 h-3" /> Sửa đơn giá
                </button>
              )}
            </div>

            {isEditingPrice ? (
              <div className="flex gap-1.5">
                <input
                  type="number"
                  value={priceInput}
                  onChange={e => setPriceInput(e.target.value)}
                  placeholder="80000"
                  className="flex-1 bg-white text-slate-900 border border-amber-400 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none"
                />
                <button
                  onClick={handleSavePrice}
                  disabled={savingPrice}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  {savingPrice ? '...' : 'Lưu'}
                </button>
                <button
                  onClick={() => setIsEditingPrice(false)}
                  className="px-2 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs cursor-pointer"
                >
                  Hủy
                </button>
              </div>
            ) : (
              <div className="bg-slate-800/80 border border-teal-500/40 rounded-xl px-3.5 py-2.5 flex items-center justify-between text-xs">
                <span className="font-mono font-black text-amber-300 text-sm">
                  {fmtVNDShort(unitPrice)} <span className="text-[11px] font-normal text-slate-300">/ học sinh / buổi</span>
                </span>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                  {selClass && (currentClass?.name || '')?.includes('7.2') ? 'Quy chuẩn 60k' : 'Chuẩn hóa 80k'}
                </span>
              </div>
            )}
          </div>

        </div>

        {/* 3 THẺ KPI THỐNG KÊ DOANH THU & BUỔI HỌC */}
        {selClass ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-black">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-bold">Số buổi đã học ({currentClass?.name})</p>
                <p className="text-xl font-black text-white">{totalSessionsCount} buổi</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-black">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-bold">Tổng lượt học sinh tham gia</p>
                <p className="text-xl font-black text-indigo-300">{totalAttendancesCount} lượt</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-bold">Doanh thu buổi học thực tế</p>
                <p className="text-xl font-black text-emerald-400 font-mono">{fmtVNDShort(totalClassSessionRevenue)}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-black">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-bold">Tổng số lớp theo dõi</p>
                <p className="text-xl font-black text-white">{allClassesStats.length} Lớp (7 Khối)</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-black">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-bold">Tổng số buổi đã dạy (Toàn trung tâm)</p>
                <p className="text-xl font-black text-indigo-300">
                  {allClassesStats.reduce((sum, c) => sum + c.sessionCount, 0)} buổi
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-bold">Doanh thu dự kiến Tháng {curMonth < 10 ? `0${curMonth}` : curMonth}/{curYear}</p>
                <p className="text-xl font-black text-emerald-400 font-mono">
                  {fmtVNDShort(allClassesStats.reduce((sum, c) => sum + c.totalRevenue, 0))}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ── NẾU CHƯA CHỌN LỚP: HIỂN THỊ BẢNG THỐNG KÊ TỔNG QUAN TẤT CẢ 21 LỚP ── */}
      {!selClass ? (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                <TableIcon className="w-5 h-5 text-teal-600" />
                BẢNG THỐNG KÊ SỐ BUỔI ĐÃ HỌC CỦA TOÀN BỘ 21 LỚP HỌC (THÁNG {curMonth < 10 ? `0${curMonth}` : curMonth}/{curYear})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Nhấp vào bất kỳ lớp nào để mở bảng ma trận điểm danh từng buổi và đồng bộ học phí của lớp đó.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-600 uppercase font-black text-[10px] tracking-wider border-b border-slate-200">
                  <th className="py-3 px-3">Tên lớp</th>
                  <th className="py-3 px-3 text-center">Khối</th>
                  <th className="py-3 px-3 text-center">Môn</th>
                  <th className="py-3 px-3 text-center">Đơn giá / buổi</th>
                  <th className="py-3 px-3 text-center">Sĩ số</th>
                  <th className="py-3 px-3 text-center">Số buổi đã học</th>
                  <th className="py-3 px-3">Các ngày đã học trong tháng</th>
                  <th className="py-3 px-3 text-right">Doanh thu theo buổi</th>
                  <th className="py-3 px-3 text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {allClassesStats.map(item => {
                  const isMath = item.cls.subject?.toLowerCase().includes('toán')
                  return (
                    <tr 
                      key={item.cls.id} 
                      onClick={() => onSelectClass(item.cls.id)}
                      className="hover:bg-teal-50/50 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-3">
                        <span className="font-extrabold text-slate-900 text-xs hover:text-teal-700">
                          {item.cls.name}
                        </span>
                      </td>

                      <td className="py-3 px-3 text-center">
                        <span className="font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full text-[10px]">
                          K{item.cls.grade}
                        </span>
                      </td>

                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          isMath ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-purple-50 text-purple-700 border border-purple-200'
                        }`}>
                          {item.cls.subject}
                        </span>
                      </td>

                      <td className="py-3 px-3 text-center font-mono font-bold text-slate-700">
                        {fmtVNDShort(item.unitPrice)}
                      </td>

                      <td className="py-3 px-3 text-center font-bold text-slate-700">
                        {item.studentCount} HS
                      </td>

                      <td className="py-3 px-3 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-black ${
                          item.sessionCount > 0 
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {item.sessionCount} buổi
                        </span>
                      </td>

                      <td className="py-3 px-3">
                        {item.sessionDates.length === 0 ? (
                          <span className="text-gray-400 italic text-[11px]">Chưa chấm buổi nào</span>
                        ) : (
                          <div className="flex flex-wrap gap-1 max-w-[320px]">
                            {item.sessionDates.map((d, idx) => (
                              <span 
                                key={d}
                                className="bg-teal-50 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded-md border border-teal-200 flex items-center gap-1"
                              >
                                <span className="text-teal-600 font-extrabold">Buổi {idx + 1}:</span>
                                <span>{fmt(d)}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </td>

                      <td className="py-3 px-3 text-right font-mono font-black text-emerald-700 text-xs">
                        {fmtVNDShort(item.totalRevenue)}
                      </td>

                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            onSelectClass(item.cls.id)
                          }}
                          className="px-3 py-1 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white rounded-lg text-[11px] font-bold border border-teal-200 transition-colors cursor-pointer"
                        >
                          Chi tiết buổi →
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* ── KHI ĐÃ CHỌN LỚP: HIỂN THỊ CHI TIẾT VÀ 3 CHẾ ĐỘ XEM ── */
        <div className="space-y-4">
          
          {/* TAB BAR CHỌN CHẾ ĐỘ XEM */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setViewMode('matrix')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <TableIcon className="w-4 h-4" />
                <span>BẢNG MA TRẬN ĐÃ HỌC TỪNG BUỔI ({sessionsHistory.length})</span>
              </button>

              <button
                onClick={() => setViewMode('journal')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  viewMode === 'journal'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Edit3 className="w-4 h-4" />
                <span>NHẬT KÝ & ĐIỂM DANH BUỔI MỚI</span>
              </button>

              <button
                onClick={() => setViewMode('tuition')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  viewMode === 'tuition'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span>TỔNG HỢP HỌC PHÍ HỌC SINH</span>
              </button>
            </div>

            <div className="flex items-center gap-2 pr-2">
              <span className="text-xs font-bold text-slate-500">
                Đang xem: <strong className="text-teal-700">{currentClass?.name}</strong> ({enrolledStudents.length} HS)
              </span>
            </div>
          </div>

          {/* ════ CHẾ ĐỘ 1: BẢNG MA TRẬN ĐÃ HỌC TỪNG BUỔI (MATRIX SHEET) ════ */}
          {viewMode === 'matrix' && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-teal-600" />
                    MA TRẬN ĐIỂM DANH & DOANH THU CÁC BUỔI ĐÃ HỌC · {currentClass?.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click trực tiếp vào ô để chuyển đổi Có mặt / Vắng của học sinh trong buổi học tương ứng.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSyncAllToTuition}
                    disabled={syncingAll || enrolledStudents.length === 0}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Áp dụng tất cả vào Học phí</span>
                  </button>
                </div>
              </div>

              {sessionsHistory.length === 0 ? (
                <div className="py-12 text-center text-slate-400 space-y-3">
                  <CalendarDays className="w-10 h-10 mx-auto text-slate-300" />
                  <p className="text-xs italic">Chưa có buổi học nào được ghi nhận trong tháng này.</p>
                  <button
                    onClick={() => setViewMode('journal')}
                    className="px-4 py-2 bg-teal-600 text-white text-xs font-bold rounded-xl shadow-sm hover:bg-teal-700"
                  >
                    + Đánh dấu buổi học đầu tiên ngay
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto scrollbar-thin">
                  <table className="w-full text-left border-collapse text-xs min-w-[800px]">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 font-black text-[11px]">
                        <th className="py-3 px-3 w-10 text-center">STT</th>
                        <th className="py-3 px-3 w-48">Học sinh</th>
                        {/* Dynamic columns for each session */}
                        {sessionsHistory.map((s, idx) => {
                          const sRev = s.presentCount * unitPrice
                          return (
                            <th key={s.date} className="py-2.5 px-2 text-center min-w-[95px] border-l border-slate-200/80 bg-teal-50/30">
                              <div className="text-[11px] font-black text-teal-900">
                                Buổi {idx + 1}
                              </div>
                              <div className="text-[10px] font-mono text-teal-700">
                                {s.date.split('-').slice(1).reverse().join('/')}
                              </div>
                              <div className="text-[9px] font-normal text-slate-500 mt-0.5">
                                {s.presentCount}/{enrolledStudents.length} em • {fmtVNDShort(sRev)}
                              </div>
                            </th>
                          )
                        })}
                        <th className="py-3 px-3 text-center border-l border-slate-200 min-w-[170px]">Số buổi & Ngày học</th>
                        <th className="py-3 px-3 text-right w-28">Thành tiền</th>
                        <th className="py-3 px-3 text-center w-28">Học phí</th>
                        <th className="py-3 px-3 text-center min-w-[210px]">Mã QR & Tin nhắn</th>
                        <th className="py-3 px-3 text-center w-24">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {studentSummaries.map((item, stIdx) => (
                        <tr key={item.student.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 text-center font-mono text-slate-400 font-bold">
                            {stIdx + 1}
                          </td>
                          <td className="py-2.5 px-3">
                            <div className="font-extrabold text-slate-900 text-xs">
                              {item.student.full_name}
                            </div>
                            <div className="text-[10px] font-mono text-slate-400">
                              {item.student.student_code}
                            </div>
                          </td>

                          {/* Attendance state per session */}
                          {sessionsHistory.map(s => {
                            const isPresent = s.studentIds.includes(item.student.id)
                            return (
                              <td 
                                key={s.date} 
                                onClick={() => handleToggleMatrixCell(item.student.id, s.date, isPresent)}
                                className="py-2 px-2 text-center border-l border-slate-150 cursor-pointer hover:bg-teal-100/40 transition-colors"
                                title={`Click để đổi trạng thái ngày ${fmt(s.date)}`}
                              >
                                {isPresent ? (
                                  <span className="inline-flex items-center justify-center gap-1 w-full py-1 rounded-md text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs">
                                    <Check className="w-3 h-3 stroke-[3px]" />
                                    <span>+{fmtVNDShort(unitPrice)}</span>
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center justify-center w-full py-1 rounded-md text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-200">
                                    ✗ Vắng (0đ)
                                  </span>
                                )}
                              </td>
                            )
                          })}

                          {/* Tổng số buổi & Danh sách từng ngày đã học */}
                          <td className="py-2.5 px-3 border-l border-slate-200 bg-indigo-50/20">
                            <div className="flex flex-col items-center gap-1.5">
                              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-black shadow-xs">
                                {item.attendedCount}/{sessionsHistory.length} buổi
                              </span>
                              {item.attendedDates.length > 0 ? (
                                <div className="flex flex-col gap-1 w-full text-left">
                                  {item.attendedDates.map((d, idx) => (
                                    <div 
                                      key={d} 
                                      className="bg-white/95 text-teal-900 px-2 py-0.5 rounded-md border border-teal-200/90 flex items-center justify-between text-[10px] shadow-xs"
                                    >
                                      <span className="font-bold text-teal-700">Buổi {idx + 1}:</span>
                                      <span className="font-mono font-black text-slate-800">Ngày {fmt(d)}</span>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <span className="text-[10px] text-rose-500 font-semibold italic">Chưa học buổi nào</span>
                              )}
                            </div>
                          </td>

                          {/* Thành tiền */}
                          <td className="py-2.5 px-3 text-right font-mono font-black text-rose-600 text-xs">
                            {fmtVNDShort(item.calculatedAmount)}
                          </td>

                          {/* Trạng thái đồng bộ */}
                          <td className="py-2.5 px-3 text-center">
                            {item.isPaid ? (
                              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                                ✓ Đã đóng
                              </span>
                            ) : item.isSynced ? (
                              <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                ✓ Đã khớp
                              </span>
                            ) : (
                              <button
                                onClick={() => handleSyncSingleStudent(item)}
                                className="bg-amber-100 hover:bg-amber-200 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full transition-colors cursor-pointer"
                              >
                                ⚡ Đồng bộ
                              </button>
                            )}
                          </td>

                          {/* Cột Nhắc phí / Cảm ơn & Mã QR */}
                          <td className="py-2.5 px-3 text-center">
                            {(() => {
                              const cls = classes.find(c => c.id === selClass)
                              const clsName = (cls as any)?.class_name || cls?.name || 'Lớp học'
                              const addInfo = formatVietQRAddInfo(item.student.full_name, clsName, item.student.student_code, selectedMonth)
                              const qrUrl = `https://qr.sepay.vn/img?bank=Vietcombank&acc=1070493932&template=compact&amount=${item.calculatedAmount}&des=${encodeURIComponent(addInfo)}`
                              const isCopied = copiedSessionQrId === item.student.id

                              if (item.isPaid) {
                                return (
                                  <div className="flex items-center justify-center gap-1.5">
                                    <button
                                      type="button"
                                      onClick={async () => {
                                        const rawPhone = (item.student as any)?.zalo || (item.student as any)?.parent_phone || ''
                                        const cleanPhone = rawPhone.replace(/\D/g, '').replace(/^84/, '0')
                                        const cleanMonthTitle = ('Tháng ' + (selectedMonth ? selectedMonth.split('-')[1] + '/' + selectedMonth.split('-')[0] : '10/2026'))
                                        const monthHeader = cleanMonthTitle.toLowerCase().startsWith('tháng') ? cleanMonthTitle : `Tháng ${cleanMonthTitle}`
                                        const thankMsg = `Kính gửi Quý phụ huynh học sinh ${item.student.full_name},\n\n`
                                                       + `Thầy Thọ xin thông báo: Thầy đã nhận đủ học phí ${monthHeader} của em (${item.calculatedAmount.toLocaleString('vi-VN')} đ).\n\n`
                                                       + `Thầy cảm ơn Quý phụ huynh rất nhiều ạ!`
                                        try {
                                          await navigator.clipboard.writeText(thankMsg)
                                          toast.success(`💌 Đã copy lời cảm ơn gửi PH em ${item.student.full_name}! Vào Zalo ấn Cmd+V để gửi.`)
                                        } catch {}
                                        if (cleanPhone && cleanPhone.length === 10) {
                                          window.open(`https://zalo.me/${cleanPhone}`, '_blank')
                                        } else {
                                          window.open('https://chat.zalo.me', '_blank')
                                        }
                                      }}
                                      className="px-2.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-black transition-all flex items-center gap-1 shadow-md shadow-emerald-500/20 cursor-pointer hover:scale-105 active:scale-95"
                                      title="Bấm 1 nút: Copy lời cảm ơn & Mở Zalo phụ huynh"
                                    >
                                      <HeartHandshake className="w-3.5 h-3.5 text-emerald-200" />
                                      <span>Gửi Cảm Ơn</span>
                                    </button>

                                    <button
                                      type="button"
                                      onClick={async () => {
                                        const cleanMonthTitle = ('Tháng ' + (selectedMonth ? selectedMonth.split('-')[1] + '/' + selectedMonth.split('-')[0] : '10/2026'))
                                        const monthHeader = cleanMonthTitle.toLowerCase().startsWith('tháng') ? cleanMonthTitle : `Tháng ${cleanMonthTitle}`
                                        const thankMsg = `Kính gửi Quý phụ huynh học sinh ${item.student.full_name},\n\n`
                                                       + `Thầy Thọ xin thông báo: Thầy đã nhận đủ học phí ${monthHeader} của em (${item.calculatedAmount.toLocaleString('vi-VN')} đ).\n\n`
                                                       + `Thầy cảm ơn Quý phụ huynh rất nhiều ạ!`
                                        await navigator.clipboard.writeText(thankMsg)
                                        toast.success(`💌 Đã copy LỜI CẢM ƠN của ${item.student.full_name}! Vào Zalo ấn Cmd+V để dán`)
                                      }}
                                      className="px-2 py-1 rounded-lg font-bold text-[11px] bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-all flex items-center gap-1 cursor-pointer"
                                      title="Copy lời cảm ơn vào bộ nhớ"
                                    >
                                      <Copy className="w-3 h-3 text-emerald-600" />
                                      <span>Copy Cảm Ơn</span>
                                    </button>
                                  </div>
                                )
                              }

                              return (
                                <div className="flex items-center justify-center gap-1.5">
                                  <img
                                    src={qrUrl}
                                    alt="QR"
                                    className="w-8 h-8 rounded-lg border border-slate-200 bg-white p-0.5 object-contain shadow-xs cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                                    onClick={() => window.open(qrUrl, '_blank')}
                                    title="Bấm để xem ảnh phóng to"
                                  />
                                  <button
                                    type="button"
                                    onClick={async () => {
                                      const rawPhone = (item.student as any)?.zalo || (item.student as any)?.parent_phone || ''
                                      const cleanPhone = rawPhone.replace(/\D/g, '').replace(/^84/, '0')
                                      const cleanClass = clsName.replace(/^[Ll][ớỚoO][pP]\s*/, '').trim() || clsName
                                      const subjectName = (cls as any)?.subject || ((item.student.student_code && item.student.student_code.toUpperCase().endsWith('H')) || cleanClass.toLowerCase().includes('hóa') ? 'Hóa học' : 'Toán học')
                                      const cleanMonthTitle = ('Tháng ' + (selectedMonth ? selectedMonth.split('-')[1] + '/' + selectedMonth.split('-')[0] : '10/2026'))
                                      const monthHeader = cleanMonthTitle.toLowerCase().startsWith('tháng') ? cleanMonthTitle : `Tháng ${cleanMonthTitle}`
                                      const msg = `Kính gửi Quý phụ huynh học sinh ${item.student.full_name},\n\n`
                                                + `Thầy Thọ xin gửi thông tin học phí ${monthHeader} của em:\n`
                                                + `• Học sinh: ${item.student.full_name}\n`
                                                + `• Môn học: ${subjectName}\n`
                                                + `• Lớp: ${cleanClass}\n`
                                                + `• Số tiền học phí: ${item.calculatedAmount.toLocaleString('vi-VN')} đ\n\n`
                                                + `⏰ Quý phụ huynh vui lòng gửi học phí trước ngày 05/11 giúp Thầy nhé ạ.\n\n`
                                                + `👉 Quý phụ huynh quét ảnh mã QR chuyển khoản đính kèm bên dưới.\n\n`
                                                + `Thầy xin chân thành cảm ơn Quý phụ huynh!`

                                      const ok = await copyQrImageToClipboard(qrUrl, msg)
                                      if (ok) {
                                        toast.success(`🎉 Đã nạp ẢNH MÃ QR của ${item.student.full_name}! Vào Zalo ấn Cmd+V để dán ảnh mã QR`)
                                      } else {
                                        await navigator.clipboard.writeText(msg)
                                        toast.success(`📋 Đã copy tin nhắn học phí của ${item.student.full_name}!`)
                                      }
                                      if (cleanPhone && cleanPhone.length === 10) {
                                        window.open(`https://zalo.me/${cleanPhone}`, '_blank')
                                      } else {
                                        window.open('https://chat.zalo.me', '_blank')
                                      }
                                    }}
                                    className="px-2.5 py-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black transition-all flex items-center gap-1 shadow-md shadow-blue-500/20 cursor-pointer hover:scale-105 active:scale-95"
                                    title="Bấm 1 nút: Nạp ảnh mã QR & Mở Zalo phụ huynh"
                                  >
                                    <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                                    <span>Gửi Zalo ngay</span>
                                  </button>

                                  <button
                                    type="button"
                                    onClick={async () => {
                                      const cleanClass = clsName.replace(/^[Ll][ớỚoO][pP]\s*/, '').trim() || clsName
                                      const subjectName = (cls as any)?.subject || ((item.student.student_code && item.student.student_code.toUpperCase().endsWith('H')) || cleanClass.toLowerCase().includes('hóa') ? 'Hóa học' : 'Toán học')
                                      const cleanMonthTitle = ('Tháng ' + (selectedMonth ? selectedMonth.split('-')[1] + '/' + selectedMonth.split('-')[0] : '10/2026'))
                                      const monthHeader = cleanMonthTitle.toLowerCase().startsWith('tháng') ? cleanMonthTitle : `Tháng ${cleanMonthTitle}`
                                      const msg = `Kính gửi Quý phụ huynh học sinh ${item.student.full_name},\n\n`
                                                + `Thầy Thọ xin gửi thông tin học phí ${monthHeader} của em:\n`
                                                + `• Học sinh: ${item.student.full_name}\n`
                                                + `• Môn học: ${subjectName}\n`
                                                + `• Lớp: ${cleanClass}\n`
                                                + `• Số tiền học phí: ${item.calculatedAmount.toLocaleString('vi-VN')} đ\n\n`
                                                + `⏰ Quý phụ huynh vui lòng gửi học phí trước ngày 05/11 giúp Thầy nhé ạ.\n\n`
                                                + `👉 Quý phụ huynh quét ảnh mã QR chuyển khoản đính kèm bên dưới.\n\n`
                                                + `Thầy xin chân thành cảm ơn Quý phụ huynh!`
                                      try {
                                        const toastId = toast.loading('Đang copy ảnh mã QR...')
                                        const ok = await copyQrImageToClipboard(qrUrl, msg)
                                        toast.dismiss(toastId)
                                        setCopiedSessionMsgId(item.student.id)
                                        if (ok) {
                                          toast.success(`🎉 Đã copy ẢNH MÃ QR của ${item.student.full_name}! Vào Zalo ấn Cmd+V để dán ảnh mã QR gửi ngay!`)
                                        } else {
                                          await navigator.clipboard.writeText(msg)
                                          toast.success(`📋 Đã copy tin nhắn học phí của ${item.student.full_name}! Vào Zalo ấn Cmd+V để dán`)
                                        }
                                        setTimeout(() => setCopiedSessionMsgId(null), 3500)
                                      } catch {
                                        toast.error('Lỗi khi sao chép')
                                      }
                                    }}
                                    className={`px-2.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer select-none whitespace-nowrap
                                      ${copiedSessionMsgId === item.student.id
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 hover:scale-105 active:scale-95'}`}
                                    title="Bấm để copy ẢNH MÃ QR của học sinh này (Vào Zalo ấn Cmd+V để dán ảnh mã QR)"
                                  >
                                    {copiedSessionMsgId === item.student.id ? (
                                      <>
                                        <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                                        <span>Đã copy QR</span>
                                      </>
                                    ) : (
                                      <>
                                        <QrCode className="w-3.5 h-3.5 text-indigo-600" />
                                        <span>Copy Tin + Mã QR</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              )
                            })()}
                          </td>

                          {/* Thao tác */}
                          <td className="py-2.5 px-3 text-center">
                            {onOpenInvoice && (
                              <button
                                onClick={() => onOpenInvoice(item.student, item.calculatedAmount, item.attendedCount, unitPrice, item.attendedDates)}
                                className="p-1 text-rose-600 hover:bg-rose-50 rounded border border-rose-200 font-bold text-[10px] inline-flex items-center gap-1 cursor-pointer"
                                title="Xuất hóa đơn điện tử cho học sinh này"
                              >
                                <FileText className="w-3 h-3" />
                                <span>HĐĐT</span>
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* ════ CHẾ ĐỘ 2: NHẬT KÝ & ĐIỂM DANH BUỔI MỚI ════ */}
          {viewMode === 'journal' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Form điểm danh buổi mới */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                      <Edit3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm">
                        Đánh dấu Buổi học mới
                      </h3>
                      <p className="text-[11px] text-slate-400">Chọn ngày & tick chọn học sinh có mặt</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">
                    {enrolledStudents.length} học sinh
                  </span>
                </div>

                {/* Chọn Ngày học */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-600" /> Ngày diễn ra buổi học:
                    </label>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      Ngày {fmt(sessionDate)}
                    </span>
                  </div>
                  <input
                    type="date"
                    value={sessionDate}
                    onChange={e => setSessionDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Ghi chú buổi học */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Nội dung bài học / Ghi chú buổi:
                  </label>
                  <input
                    type="text"
                    value={sessionNote}
                    onChange={e => setSessionNote(e.target.value)}
                    placeholder="VD: Ôn tập đại số, Giải bài tập về nhà..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Nút tiện ích: Tất cả có mặt / Tất cả vắng */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-slate-600">Điểm danh học sinh:</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => markAll(true)}
                      type="button"
                      className="text-[11px] font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
                    >
                      ✓ Tất cả có mặt
                    </button>
                    <button
                      onClick={() => markAll(false)}
                      type="button"
                      className="text-[11px] font-bold px-2.5 py-1 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors"
                    >
                      ✗ Tất cả vắng
                    </button>
                  </div>
                </div>

                {/* Danh sách học sinh */}
                <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1 border border-slate-100 rounded-2xl p-2 bg-slate-50/50">
                  {enrolledStudents.map(st => {
                    const isPresent = draft[st.id]?.present ?? false
                    return (
                      <div
                        key={st.id}
                        onClick={() => toggleStudent(st.id)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isPresent
                            ? 'bg-emerald-50/80 border-emerald-200 shadow-xs'
                            : 'bg-white border-slate-200 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                              isPresent ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {isPresent ? <Check className="w-3.5 h-3.5 stroke-[3px]" /> : ''}
                          </div>
                          <div>
                            <p className="text-xs font-extrabold text-slate-800 leading-tight">
                              {st.full_name}
                            </p>
                            <span className="text-[10px] font-mono text-slate-400">
                              {st.student_code}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span
                            className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                              isPresent
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-700'
                            }`}
                          >
                            {isPresent ? `+${fmtVNDShort(unitPrice)}` : 'Vắng (0đ)'}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* DOANH THU BUỔI HỌC REALTIME */}
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-2xl p-4 text-xs space-y-1.5">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Học sinh có mặt buổi này:</span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {currentPresentCount} / {enrolledStudents.length} em
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Đơn giá buổi học:</span>
                    <span className="font-mono font-bold text-slate-800">
                      {fmtVNDShort(unitPrice)} / em
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-1.5 border-t border-teal-200 font-black">
                    <span className="text-teal-900 uppercase">TIỀN THU ĐƯỢC BUỔI NÀY:</span>
                    <span className="font-mono text-emerald-700 text-base font-black">
                      {fmtVNDShort(currentSessionRevenue)}
                    </span>
                  </div>
                </div>

                {/* Nút Lưu buổi học */}
                <button
                  onClick={handleSaveSession}
                  disabled={savingSession || enrolledStudents.length === 0}
                  className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-teal-600/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>{savingSession ? 'Đang lưu buổi học...' : `LƯU BUỔI HỌC (${fmt(sessionDate)})`}</span>
                </button>
              </div>

              {/* Danh sách các buổi đã học trong tháng */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="font-extrabold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4 text-teal-600" />
                    Danh sách các buổi đã học ({sessionsHistory.length})
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500">
                    Tháng {selectedMonth}
                  </span>
                </div>

                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                  {sessionsHistory.length === 0 ? (
                    <p className="text-xs text-slate-400 italic text-center py-10">Chưa có buổi học nào được chấm trong tháng này.</p>
                  ) : (
                    sessionsHistory.map((item, idx) => {
                      const sessionRevenue = item.presentCount * unitPrice
                      const isCurrentDate = item.date === sessionDate
                      return (
                        <div
                          key={item.date}
                          className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                            isCurrentDate
                              ? 'bg-teal-50/70 border-teal-300 ring-1 ring-teal-300'
                              : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/60'
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-black text-xs text-slate-900">
                                Buổi {idx + 1}: Ngày {fmt(item.date)}
                              </span>
                              {isCurrentDate && (
                                <span className="bg-teal-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded">
                                  Đang chọn
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500">
                              {item.presentCount} học sinh có mặt • {item.absentCount} vắng
                            </p>
                          </div>

                          <div className="text-right flex items-center gap-2">
                            <div>
                              <p className="font-mono font-black text-emerald-700 text-xs">
                                {fmtVNDShort(sessionRevenue)}
                              </p>
                            </div>
                            <button
                              onClick={() => setSessionDate(item.date)}
                              className="p-1 text-slate-400 hover:text-teal-600 rounded hover:bg-white"
                              title="Chọn buổi này để sửa điểm danh"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteSession(item.date)}
                              className="p-1 text-slate-400 hover:text-rose-600 rounded hover:bg-white"
                              title="Xóa buổi học này"
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
          )}

          {/* ════ CHẾ ĐỘ 3: BẢNG TỔNG HỢP HỌC PHÍ HỌC SINH ════ */}
          {viewMode === 'tuition' && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-teal-600" />
                    BẢNG TỔNG HỢP TIỀN HỌC PHÍ TỰ ĐỘNG · {currentClass?.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Hệ thống tự lấy số buổi có mặt của từng học sinh nhân với đơn giá {fmtVNDShort(unitPrice)}/buổi.
                  </p>
                </div>
                <button
                  onClick={handleSyncAllToTuition}
                  disabled={syncingAll || enrolledStudents.length === 0}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Áp dụng tất cả vào Học phí</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 uppercase font-black text-[10px] tracking-wider border-b border-slate-200">
                      <th className="py-2.5 px-3">Học sinh</th>
                      <th className="py-2.5 px-3 text-center">Số buổi đã học</th>
                      <th className="py-2.5 px-3 text-right">Thành tiền tự tính</th>
                      <th className="py-2.5 px-3 text-center">Trạng thái</th>
                      <th className="py-2.5 px-3 text-center">Mã QR</th>
                      <th className="py-2.5 px-3 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {studentSummaries.map(item => (
                      <tr key={item.student.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-3">
                          <div className="font-extrabold text-slate-900 text-xs">
                            {item.student.full_name}
                          </div>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-1 rounded">
                              {item.student.student_code}
                            </span>
                            {item.student.parent_phone && (
                              <span className="text-[10px] text-blue-600">
                                📞 {item.student.parent_phone}
                              </span>
                            )}
                          </div>
                          {item.attendedDates.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5 max-w-[280px]">
                              {item.attendedDates.map(d => (
                                <span
                                  key={d}
                                  className="bg-teal-50 text-teal-800 text-[9px] font-bold px-1.5 py-0.2 rounded border border-teal-200/60"
                                >
                                  {d.split('-').slice(1).reverse().join('/')}
                                </span>
                              ))}
                            </div>
                          )}
                        </td>

                        <td className="py-3 px-3 text-center">
                          <div className="flex flex-col items-center gap-1.5">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-800 border border-indigo-200 shadow-xs">
                              <CalendarCheck className="w-3.5 h-3.5 text-indigo-600" />
                              {item.attendedCount} buổi học
                            </span>
                            {item.attendedDates.length > 0 ? (
                              <div className="flex flex-col gap-1 w-full max-w-[190px]">
                                {item.attendedDates.map((d, idx) => (
                                  <div 
                                    key={d} 
                                    className="bg-slate-50 text-teal-900 px-2 py-0.5 rounded-md border border-teal-200/80 flex items-center justify-between text-[10px]"
                                  >
                                    <span className="font-bold text-teal-700">Buổi {idx + 1}:</span>
                                    <span className="font-mono font-black text-slate-800">Ngày {fmt(d)}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span className="text-[10px] text-slate-400 italic">0 buổi</span>
                            )}
                          </div>
                        </td>

                        <td className="py-3 px-3 text-right">
                          <p className="font-mono font-black text-rose-600 text-sm">
                            {fmtVNDShort(item.calculatedAmount)}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {item.attendedCount} × {fmtVNDShort(unitPrice)}
                          </p>
                        </td>

                        <td className="py-3 px-3 text-center">
                          {item.isPaid ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                              <CheckCircle2 className="w-3 h-3" /> Đã đóng
                            </span>
                          ) : item.isSynced ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                              ✓ Đã khớp HP
                            </span>
                          ) : (
                            <button
                              onClick={() => handleSyncSingleStudent(item)}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 hover:bg-amber-200 text-amber-800 cursor-pointer transition-colors"
                            >
                              ⚡ Cần đồng bộ
                            </button>
                          )}
                        </td>

                        <td className="py-3 px-3 text-center">
                          {(() => {
                            const cls = classes.find(c => c.id === selClass)
                            const clsName = (cls as any)?.class_name || cls?.name || 'Lớp học'
                            const addInfo = formatVietQRAddInfo(item.student.full_name, clsName, item.student.student_code, selectedMonth)
                            const qrUrl = `https://qr.sepay.vn/img?bank=Vietcombank&acc=1070493932&template=compact&amount=${item.calculatedAmount}&des=${encodeURIComponent(addInfo)}`
                            const isCopied = copiedSessionQrId === item.student.id

                            return (
                              <button
                                type="button"
                                onClick={async () => {
                                  const toastId = toast.loading('Đang copy ảnh mã QR...')
                                  const ok = await copyQrImageToClipboard(qrUrl)
                                  toast.dismiss(toastId)
                                  if (ok) {
                                    setCopiedSessionQrId(item.student.id)
                                    toast.success(`🎉 Đã copy ẢNH MÃ QR của ${item.student.full_name}! Sang Zalo ấn Cmd+V để dán`)
                                    setTimeout(() => setCopiedSessionQrId(null), 3500)
                                  } else {
                                    const a = document.createElement('a')
                                    a.href = qrUrl
                                    a.download = `QR_${item.student.student_code || item.student.full_name}_${item.calculatedAmount}.png`
                                    a.click()
                                    toast.success('Đã tải ảnh mã QR xuống máy!')
                                  }
                                }}
                                className={`px-2 py-1 rounded-lg font-bold text-[11px] inline-flex items-center gap-1 transition-all shadow-xs cursor-pointer select-none
                                  ${isCopied
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 hover:scale-105 active:scale-95'}`}
                                title="Copy ẢNH mã QR để vào Zalo ấn Cmd+V dán ngay ảnh"
                              >
                                {isCopied ? (
                                  <>
                                    <Check className="w-3 h-3 text-white stroke-[3px]" />
                                    <span>Đã copy</span>
                                  </>
                                ) : (
                                  <>
                                    <QrCode className="w-3 h-3 text-teal-600" />
                                    <span>Copy QR</span>
                                  </>
                                )}
                              </button>
                            )
                          })()}
                        </td>

                        <td className="py-3 px-3 text-right space-x-1 whitespace-nowrap">
                          <button
                            onClick={() => handleSyncSingleStudent(item)}
                            className="p-1.5 text-teal-600 hover:bg-teal-50 rounded-lg border border-teal-200 font-bold text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Đồng bộ</span>
                          </button>

                          {onOpenInvoice && (
                            <button
                              onClick={() => onOpenInvoice(item.student, item.calculatedAmount, item.attendedCount, unitPrice, item.attendedDates)}
                              className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-200 font-bold text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <FileText className="w-3 h-3" />
                              <span>HĐĐT</span>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  )
}
