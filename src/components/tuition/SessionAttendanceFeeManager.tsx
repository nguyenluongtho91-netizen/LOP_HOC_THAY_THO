// src/components/tuition/SessionAttendanceFeeManager.tsx
import React, { useState, useMemo, useEffect } from 'react'
import {
  CalendarCheck, CalendarDays, CheckSquare, XSquare, Save, RefreshCw,
  Clock, Sparkles, DollarSign, Users, Check, Trash2, Edit3, ArrowRight,
  ExternalLink, AlertCircle, CheckCircle2, ChevronRight, FileText, Send
} from 'lucide-react'
import { fmtVNDShort, fmt } from '@/lib/helpers'
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
  onOpenInvoice?: (student: Student, amount: number, sessionCount: number, unitPrice: number) => void
  onSwitchToTuitionTab?: () => void
}

const LOCAL_UNIT_PRICES_KEY = '__CLASS_UNIT_PRICES__'

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
  const [unitPrice, setUnitPrice] = useState<number>(150000)
  const [isEditingPrice, setIsEditingPrice] = useState(false)
  const [priceInput, setPriceInput] = useState<string>('150000')
  const [savingPrice, setSavingPrice] = useState(false)

  // Selected date for recording attendance
  const [sessionDate, setSessionDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'))
  const [sessionNote, setSessionNote] = useState<string>('')
  
  // Draft attendance for current sessionDate
  const [draft, setDraft] = useState<Record<string, { present: boolean; late: boolean; note: string }>>({})
  const [savingSession, setSavingSession] = useState(false)
  const [syncingAll, setSyncingAll] = useState(false)

  // Filter month (YYYY-MM)
  const [selectedMonth, setSelectedMonth] = useState<string>(format(new Date(), 'yyyy-MM'))

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

        if (data?.data?.items && typeof data.data.items === 'object') {
          const merged = { ...localMap, ...data.data.items }
          setUnitPricesMap(merged)
          try {
            localStorage.setItem(LOCAL_UNIT_PRICES_KEY, JSON.stringify(merged))
          } catch {}
          return
        }
      } catch {}

      setUnitPricesMap(localMap)
    }

    void loadUnitPrices()
  }, [])

  // Update current unit price when selClass or unitPricesMap changes
  useEffect(() => {
    if (!selClass) {
      setUnitPrice(150000)
      setPriceInput('150000')
      return
    }

    if (unitPricesMap[selClass] && unitPricesMap[selClass] > 0) {
      const p = unitPricesMap[selClass]
      setUnitPrice(p)
      setPriceInput(String(p))
      return
    }

    if ((currentClass as any)?.fee_per_session && Number((currentClass as any).fee_per_session) > 0) {
      const p = Number((currentClass as any).fee_per_session)
      setUnitPrice(p)
      setPriceInput(String(p))
      return
    }

    // Default by grade: grade 6 = 100k, others = 150k
    const grade = ((currentClass as any)?.grade || '').toLowerCase()
    const def = grade.includes('6') ? 100000 : 150000
    setUnitPrice(def)
    setPriceInput(String(def))
  }, [selClass, currentClass, unitPricesMap])

  // Load attendance when class changes
  useEffect(() => {
    if (selClass) {
      void loadAttendance(selClass)
    }
  }, [selClass])

  // Students enrolled in this class
  const enrolledStudents = useMemo(() => {
    if (!selClass) return []
    return enrollments
      .filter(e => e.class_id === selClass && e.status === 'active')
      .map(e => students.find(s => s.id === e.student_id))
      .filter((s): s is Student => s !== undefined)
      .sort((a, b) => (a.full_name || '').localeCompare(b.full_name || '', 'vi'))
  }, [selClass, enrollments, students])

  // Build draft when sessionDate or selClass or attendance changes
  useEffect(() => {
    if (!selClass || !sessionDate) return

    const initialDraft: Record<string, { present: boolean; late: boolean; note: string }> = {}
    for (const st of enrolledStudents) {
      const rec = attendance.find(
        a => a.class_id === selClass && a.student_id === st.id && a.date === sessionDate
      )
      if (rec) {
        initialDraft[st.id] = {
          present: rec.present || rec.status === 'present' || rec.status === 'late',
          late: rec.status === 'late',
          note: rec.note || ''
        }
      } else {
        // Mặc định ban đầu: có mặt để Thầy tích nhanh
        initialDraft[st.id] = { present: true, late: false, note: '' }
      }
    }
    setDraft(initialDraft)
  }, [selClass, sessionDate, enrolledStudents, attendance])

  // All distinct session dates in this class
  const classAttendanceRecords = useMemo(() => {
    if (!selClass) return []
    return attendance.filter(a => a.class_id === selClass)
  }, [selClass, attendance])

  // Sessions grouped by date
  const sessionsHistory = useMemo(() => {
    const datesMap: Record<string, { date: string; presentCount: number; lateCount: number; absentCount: number; studentIds: string[] }> = {}
    
    for (const rec of classAttendanceRecords) {
      if (!selectedMonth || rec.date.startsWith(selectedMonth)) {
        if (!datesMap[rec.date]) {
          datesMap[rec.date] = { date: rec.date, presentCount: 0, lateCount: 0, absentCount: 0, studentIds: [] }
        }
        const isPresent = rec.present || rec.status === 'present' || rec.status === 'late'
        if (rec.status === 'late') {
          datesMap[rec.date].lateCount++
          datesMap[rec.date].presentCount++
          datesMap[rec.date].studentIds.push(rec.student_id)
        } else if (isPresent) {
          datesMap[rec.date].presentCount++
          datesMap[rec.date].studentIds.push(rec.student_id)
        } else {
          datesMap[rec.date].absentCount++
        }
      }
    }

    return Object.values(datesMap).sort((a, b) => b.date.localeCompare(a.date))
  }, [classAttendanceRecords, selectedMonth])

  // Per student attendance summary
  const studentSummaries = useMemo(() => {
    return enrolledStudents.map(st => {
      // Find all attended dates for this student in selectedMonth
      const attendedDates = classAttendanceRecords
        .filter(a => a.student_id === st.id && (a.present || a.status === 'present' || a.status === 'late'))
        .filter(a => !selectedMonth || a.date.startsWith(selectedMonth))
        .map(a => a.date)
        .sort()

      const attendedCount = attendedDates.length
      const calculatedAmount = attendedCount * unitPrice
      const notif = tuitionNotifications.find(n => n.student_id === st.id && n.class_id === selClass)
      const currentAmount = notif ? Number(notif.amount) : 0
      const isPaid = notif?.is_paid || false
      const isSynced = currentAmount === calculatedAmount && notif != null

      return {
        student: st,
        attendedDates,
        attendedCount,
        calculatedAmount,
        currentAmount,
        isPaid,
        isSynced,
        notif
      }
    })
  }, [enrolledStudents, classAttendanceRecords, selectedMonth, unitPrice, tuitionNotifications, selClass])

  // Class KPI Stats
  const totalSessionsCount = sessionsHistory.length
  const totalAttendancesCount = sessionsHistory.reduce((sum, s) => sum + s.presentCount, 0)
  const totalClassSessionRevenue = sessionsHistory.reduce((sum, s) => sum + (s.presentCount * unitPrice), 0)

  // Quick mark all
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

  // Toggle present
  const toggleStudent = (sid: string) => {
    setDraft(prev => {
      const cur = prev[sid] || { present: false, late: false, note: '' }
      const nextPresent = !cur.present
      return {
        ...prev,
        [sid]: {
          ...cur,
          present: nextPresent,
          late: false
        }
      }
    })
  }

  // Save session attendance & auto calculate
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
          present: isPresent,
          status: isPresent ? (isLate ? 'late' : 'present') : 'absent',
          note: d.note || sessionNote || null
        }
      })

      const { error } = await supabase
        .from('attendance')
        .upsert(rows, { onConflict: 'date,class_id,student_id' })

      if (error) throw error

      // Reload attendance store
      await loadAttendance(selClass)

      // Count present in this session
      const presentCount = rows.filter(r => r.present).length
      const sessionMoney = presentCount * unitPrice

      toast.success(
        `✅ Đã lưu buổi học ngày ${fmt(sessionDate)}!
` +
        `• ${presentCount}/${enrolledStudents.length} học sinh có mặt
` +
        `• Doanh thu buổi: ${fmtVNDShort(sessionMoney)}`
      )
    } catch (err: any) {
      toast.error('Lỗi khi lưu buổi học: ' + (err.message || 'Thử lại'))
    } finally {
      setSavingSession(false)
    }
  }

  // Save unit price (Resilient: LocalStorage + Supabase exams cloud store)
  const handleSavePrice = async () => {
    if (!selClass) {
      return toast.error('Vui lòng chọn lớp học trước khi lưu đơn giá')
    }
    const num = Number(priceInput)
    if (isNaN(num) || num < 0) {
      return toast.error('Vui lòng nhập đơn giá hợp lệ')
    }
    setSavingPrice(true)
    try {
      setUnitPrice(num)

      // 1. Cập nhật state & LocalStorage
      const nextMap = { ...unitPricesMap, [selClass]: num }
      setUnitPricesMap(nextMap)
      try {
        localStorage.setItem(LOCAL_UNIT_PRICES_KEY, JSON.stringify(nextMap))
      } catch {}

      // 2. Lưu lên Supabase Cloud (bảng exams)
      try {
        const { data: existing } = await supabase
          .from('exams')
          .select('id, data')
          .eq('title', LOCAL_UNIT_PRICES_KEY)
          .maybeSingle()

        if (existing?.id) {
          const currentItems = existing.data?.items || {}
          currentItems[selClass] = num
          await supabase.from('exams').update({ data: { items: currentItems } }).eq('id', existing.id)
        } else {
          await supabase.from('exams').insert([{ title: LOCAL_UNIT_PRICES_KEY, data: { items: { [selClass]: num } } }])
        }
      } catch (cloudErr) {
        console.warn('Lưu Supabase exams:', cloudErr)
      }

      // 3. Thử update classes table nếu có column, nếu không thì âm thầm bỏ qua
      try {
        if (currentClass) {
          await supabase.from('classes').update({ fee_per_session: num }).eq('id', currentClass.id)
        }
      } catch {}

      setIsEditingPrice(false)
      toast.success(`✅ Đã lưu đơn giá ${fmtVNDShort(num)}/buổi cho lớp!`)
    } catch (err: any) {
      toast.error('Lỗi khi lưu đơn giá: ' + err.message)
    } finally {
      setSavingPrice(false)
    }
  }

  // SYNC ALL TO TUITION: Tự động nhảy số tiền cần nộp vào Học phí của học sinh
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
        const courseNameWithSessions = `${activeMonthName} (${count} buổi)`

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
      const courseNameWithSessions = `${activeMonthName} (${item.attendedCount} buổi)`

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
      toast.success(`✅ Đã đồng bộ ${fmtVNDShort(item.calculatedAmount)} (${item.attendedCount} buổi) cho em ${item.student.full_name}`)
    } catch (err: any) {
      toast.error('Lỗi khi đồng bộ: ' + err.message)
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

  // Count present in current session form
  const currentPresentCount = Object.values(draft).filter(d => d.present).length
  const currentSessionRevenue = currentPresentCount * unitPrice

  return (
    <div className="space-y-6">

      {/* TOP BANNER */}
      <div className="bg-gradient-to-r from-teal-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl border border-teal-800/60">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30">
              <CalendarCheck className="w-7 h-7 text-teal-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-wide uppercase">
                  ĐÁNH DẤU BUỔI ĐÃ HỌC & TỰ ĐỘNG TÍNH TIỀN HỌC PHÍ
                </h2>
                <span className="bg-emerald-400/20 text-emerald-300 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                  TỰ ĐỘNG LIÊN KẾT 100%
                </span>
              </div>
              <p className="text-xs text-teal-200 mt-1 max-w-2xl leading-relaxed">
                Thầy chỉ cần đánh dấu ngày học và học sinh đi học ➔ Hệ thống tự tính doanh thu từng buổi ➔ Tự nhân số buổi học và nhảy thẳng vào số tiền cần nộp của từng học sinh!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSyncAllToTuition}
              disabled={syncingAll || !selClass || enrolledStudents.length === 0}
              className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl text-xs font-black flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>{syncingAll ? 'Đang đồng bộ...' : 'ĐỒNG BỘ TIỀN VÀO HỌC PHÍ'}</span>
            </button>
            {onSwitchToTuitionTab && (
              <button
                onClick={onSwitchToTuitionTab}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-white/15"
              >
                <span>Xem Bảng Học Phí</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* CONTROLS: CHỌN LỚP, THÁNG, ĐƠN GIÁ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
          
          {/* 1. Chọn Lớp */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-teal-200 uppercase tracking-wider">
              1. Lớp học đang quản lý:
            </label>
            <select
              value={selClass}
              onChange={e => onSelectClass(e.target.value)}
              className="w-full bg-slate-800/90 border border-teal-500/40 rounded-xl px-3.5 py-2.5 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="">— Vui lòng chọn lớp học —</option>
              {classes.filter(c => c.status === 'active').map(c => (
                <option key={c.id} value={c.id}>
                  {(c as any).class_name || c.name} ({(c as any).grade ? `Khối ${(c as any).grade}` : 'Môn Toán'})
                </option>
              ))}
            </select>
          </div>

          {/* 2. Chọn Tháng */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-teal-200 uppercase tracking-wider">
              2. Xem theo tháng / kỳ học:
            </label>
            <input
              type="month"
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className="w-full bg-slate-800/90 border border-teal-500/40 rounded-xl px-3.5 py-2.5 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* 3. Đơn giá mỗi buổi học */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-teal-200 uppercase tracking-wider flex items-center justify-between">
              <span>3. Đơn giá mỗi buổi học:</span>
              {!isEditingPrice && (
                <button
                  onClick={() => setIsEditingPrice(true)}
                  className="text-amber-300 hover:text-amber-200 text-[10px] underline cursor-pointer"
                >
                  Thay đổi giá
                </button>
              )}
            </label>
            {isEditingPrice ? (
              <div className="flex gap-2">
                <input
                  type="number"
                  step="5000"
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
                  {fmtVNDShort(unitPrice)} <span className="text-[11px] font-normal text-slate-300">/ 1 học sinh / buổi</span>
                </span>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                  Đang áp dụng
                </span>
              </div>
            )}
          </div>

        </div>

        {/* 3 THẺ KPI THỐNG KÊ DOANH THU & BUỔI HỌC */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-black">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase font-bold">Số buổi đã học (Tháng này)</p>
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
              <p className="text-[11px] text-slate-400 uppercase font-bold">Tổng doanh thu theo buổi thực tế</p>
              <p className="text-xl font-black text-emerald-400 font-mono">{fmtVNDShort(totalClassSessionRevenue)}</p>
            </div>
          </div>
        </div>

      </div>

      {!selClass ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-3">
          <CalendarCheck className="w-12 h-12 text-teal-600 mx-auto opacity-70" />
          <h3 className="font-extrabold text-slate-800 text-base">Vui lòng chọn một lớp học ở trên</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Sau khi chọn lớp, Thầy có thể đánh dấu từng buổi học, xem buổi đó được bao nhiêu tiền và tự động liên kết thành tiền cần nộp của học sinh.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* CỘT TRÁI (5 CỘT): ĐÁNH DẤU BUỔI HỌC MỚI */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
              
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
                <div className="text-right">
                  <span className="text-[10px] font-bold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">
                    {enrolledStudents.length} học sinh
                  </span>
                </div>
              </div>

              {/* Chọn Ngày học */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-teal-600" /> Ngày diễn ra buổi học:
                </label>
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
                  Nội dung bài học / Ghi chú buổi (tùy chọn):
                </label>
                <input
                  type="text"
                  value={sessionNote}
                  onChange={e => setSessionNote(e.target.value)}
                  placeholder="VD: Đại số - Ôn tập phương trình, Kiểm tra 15p..."
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
                    className="text-[11px] font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors cursor-pointer"
                  >
                    ✓ Tất cả có mặt
                  </button>
                  <button
                    onClick={() => markAll(false)}
                    type="button"
                    className="text-[11px] font-bold px-2 py-1 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors cursor-pointer"
                  >
                    ✗ Tất cả vắng
                  </button>
                </div>
              </div>

              {/* Danh sách học sinh tick chọn */}
              <div className="max-h-[340px] overflow-y-auto space-y-1.5 pr-1 border border-slate-100 rounded-2xl p-2 bg-slate-50/50">
                {enrolledStudents.length === 0 ? (
                  <p className="text-xs text-slate-400 italic text-center py-6">Chưa có học sinh nào trong lớp này.</p>
                ) : (
                  enrolledStudents.map(st => {
                    const isPresent = draft[st.id]?.present || false
                    return (
                      <div
                        key={st.id}
                        onClick={() => toggleStudent(st.id)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
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
                  })
                )}
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

            {/* DANH SÁCH CÁC BUỔI ĐÃ HỌC TRONG THÁNG */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="font-extrabold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4 text-teal-600" />
                  Các buổi đã diễn ra ({sessionsHistory.length})
                </h3>
                <span className="text-[11px] font-bold text-slate-500">
                  {selectedMonth || 'Tất cả'}
                </span>
              </div>

              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {sessionsHistory.length === 0 ? (
                  <p className="text-xs text-slate-400 italic text-center py-6">Chưa có buổi học nào được chấm trong tháng này.</p>
                ) : (
                  sessionsHistory.map(item => {
                    const sessionRevenue = item.presentCount * unitPrice
                    const isCurrentDate = item.date === sessionDate
                    return (
                      <div
                        key={item.date}
                        className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
                          isCurrentDate
                            ? 'bg-teal-50/70 border-teal-300 ring-1 ring-teal-300'
                            : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/60'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-xs text-slate-900">
                              Ngày {fmt(item.date)}
                            </span>
                            {isCurrentDate && (
                              <span className="bg-teal-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded">
                                Đang chọn
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
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

          {/* CỘT PHẢI (7 CỘT): BẢNG TỰ ĐỘNG TÍNH TIỀN HỌC PHÍ CỦA TỪNG HỌC SINH */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                    <span>Bảng tổng hợp Buổi học & Học phí từng học sinh</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                      Tự tính tự động
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Hệ thống tự động đếm số buổi học thực tế × {fmtVNDShort(unitPrice)} = Số tiền cần nộp
                  </p>
                </div>

                <button
                  onClick={handleSyncAllToTuition}
                  disabled={syncingAll || enrolledStudents.length === 0}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                  title="Cập nhật số tiền này vào bảng học phí"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Áp dụng tất cả vào Học phí</span>
                </button>
              </div>

              {/* Bảng danh sách học sinh */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 uppercase font-black text-[10px] tracking-wider border-b border-slate-200">
                      <th className="py-2.5 px-3">Học sinh</th>
                      <th className="py-2.5 px-3 text-center">Số buổi đã học</th>
                      <th className="py-2.5 px-3 text-right">Thành tiền tự tính</th>
                      <th className="py-2.5 px-3 text-center">Trạng thái</th>
                      <th className="py-2.5 px-3 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {studentSummaries.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-10 text-center text-slate-400 italic">
                          Không có học sinh trong lớp này.
                        </td>
                      </tr>
                    ) : (
                      studentSummaries.map(item => (
                        <tr key={item.student.id} className="hover:bg-slate-50/70 transition-colors">
                          
                          {/* Họ tên & Mã */}
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
                            
                            {/* Chi tiết các ngày đã học */}
                            {item.attendedDates.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-1.5 max-w-[280px]">
                                {item.attendedDates.map(d => (
                                  <span
                                    key={d}
                                    className="bg-teal-50 text-teal-800 text-[9px] font-bold px-1.5 py-0.2 rounded border border-teal-200/60"
                                    title={`Buổi học ngày ${fmt(d)}`}
                                  >
                                    {d.split('-').slice(1).reverse().join('/')}
                                  </span>
                                ))}
                              </div>
                            )}
                          </td>

                          {/* Số buổi đã học */}
                          <td className="py-3 px-3 text-center">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700 border border-indigo-200">
                              <CalendarCheck className="w-3.5 h-3.5" />
                              {item.attendedCount} buổi
                            </span>
                          </td>

                          {/* Thành tiền tự tính */}
                          <td className="py-3 px-3 text-right">
                            <p className="font-mono font-black text-rose-600 text-sm">
                              {fmtVNDShort(item.calculatedAmount)}
                            </p>
                            <p className="text-[10px] text-slate-400">
                              {item.attendedCount} × {fmtVNDShort(unitPrice)}
                            </p>
                          </td>

                          {/* Trạng thái liên kết */}
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
                                title="Bấm để cập nhật số tiền này vào học phí"
                              >
                                ⚡ Cần đồng bộ
                              </button>
                            )}
                          </td>

                          {/* Thao tác */}
                          <td className="py-3 px-3 text-right space-x-1 whitespace-nowrap">
                            <button
                              onClick={() => handleSyncSingleStudent(item)}
                              className="p-1.5 text-teal-600 hover:bg-teal-50 rounded-lg border border-teal-200 font-bold text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer"
                              title="Áp dụng số tiền vào học phí"
                            >
                              <RefreshCw className="w-3 h-3" />
                              <span>Đồng bộ</span>
                            </button>

                            {onOpenInvoice && (
                              <button
                                onClick={() => onOpenInvoice(item.student, item.calculatedAmount, item.attendedCount, unitPrice)}
                                className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-200 font-bold text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer"
                                title="Xuất hóa đơn điện tử cho học sinh này"
                              >
                                <FileText className="w-3 h-3" />
                                <span>HĐĐT</span>
                              </button>
                            )}
                          </td>

                        </tr>
                      ))
                    )}
                  </tbody>
                  {studentSummaries.length > 0 && (
                    <tfoot>
                      <tr className="bg-slate-50 font-black text-slate-800 border-t-2 border-slate-200">
                        <td className="py-3 px-3 uppercase text-xs">
                          TỔNG CỘNG ({studentSummaries.length} HS):
                        </td>
                        <td className="py-3 px-3 text-center text-xs font-mono text-indigo-700">
                          {studentSummaries.reduce((sum, s) => sum + s.attendedCount, 0)} lượt
                        </td>
                        <td className="py-3 px-3 text-right text-sm font-mono text-rose-600">
                          {fmtVNDShort(studentSummaries.reduce((sum, s) => sum + s.calculatedAmount, 0))}
                        </td>
                        <td colSpan={2} className="py-3 px-3 text-right">
                          <button
                            onClick={handleSyncAllToTuition}
                            disabled={syncingAll}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow-xs cursor-pointer inline-flex items-center gap-1"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            Đồng bộ tất cả vào Học Phí
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  )
}
