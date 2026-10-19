import React, { useState, useMemo } from 'react'
import {
  TrendingUp, Calendar, DollarSign, CreditCard, Wallet,
  Building2, Printer, Search, Plus, Trash2, CheckCircle,
  ArrowUpRight, AlertCircle, Sparkles, Filter, ChevronDown
} from 'lucide-react'
import { fmtVNDShort } from '@/lib/helpers'
import Modal from '@/components/Modal'
import type { Payment, TuitionNotification, Class, Student, Enrollment, PaymentMethod } from '@/types'

interface RevenueDashboardProps {
  payments: Payment[]
  tuitionNotifications: TuitionNotification[]
  classes: Class[]
  students: Student[]
  enrollments: Enrollment[]
  onAddPayment: (p: {
    student_id?: string | null
    class_id?: string | null
    amount: number
    method: PaymentMethod
    note?: string | null
    paid_at?: string
  }) => Promise<any>
  onDeletePayment?: (id: string) => Promise<void>
}

export default function RevenueDashboard({
  payments,
  tuitionNotifications,
  classes,
  students,
  enrollments,
  onAddPayment,
  onDeletePayment
}: RevenueDashboardProps) {
  const now = new Date()
  const currentMonthKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0')

  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonthKey)
  const [selectedClassId, setSelectedClassId] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [methodFilter, setMethodFilter] = useState<'all' | 'transfer' | 'cash'>('all')

  // Modal to manually record a payment
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [addForm, setAddForm] = useState({
    studentId: '',
    classId: '',
    amount: '600000',
    method: 'transfer' as PaymentMethod,
    note: 'Học phí',
    paidAt: new Date().toISOString().substring(0, 10)
  })
  const [addingPayment, setAddingPayment] = useState(false)

  // Generate list of available months (last 12 months)
  const availableMonths = useMemo(() => {
    const list: { key: string; label: string }[] = []
    const d = new Date()
    for (let i = 0; i < 12; i++) {
      const year = d.getFullYear()
      const month = d.getMonth() + 1
      const key = year + '-' + String(month).padStart(2, '0')
      list.push({ key, label: 'Tháng ' + month + '/' + year })
      d.setMonth(d.getMonth() - 1)
    }
    return list
  }, [])

  // Filter payments by selected month and class
  const filteredPayments = useMemo(() => {
    return payments.filter(p => {
      // Month check (check paid_at or created_at)
      if (selectedMonth !== 'all') {
        const dateStr = p.paid_at || p.created_at || ''
        if (!dateStr.startsWith(selectedMonth)) return false
      }
      // Class check
      if (selectedClassId && p.class_id !== selectedClassId) return false
      // Method check
      if (methodFilter !== 'all' && p.method !== methodFilter) return false
      // Search check
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase().trim()
        const st = students.find(s => s.id === p.student_id)
        const name = (st?.full_name || '').toLowerCase()
        const code = (st?.student_code || '').toLowerCase()
        const note = (p.note || '').toLowerCase()
        return name.includes(q) || code.includes(q) || note.includes(q)
      }
      return true
    })
  }, [payments, selectedMonth, selectedClassId, methodFilter, searchTerm, students])

  // Compute revenue numbers
  const metrics = useMemo(() => {
    // 1. Total actual collected revenue from payments in this month
    const totalCollected = filteredPayments.reduce((sum, p) => sum + Number(p.amount || 0), 0)
    const transferTotal = filteredPayments
      .filter(p => p.method === 'transfer' || p.method === 'seapay')
      .reduce((sum, p) => sum + Number(p.amount || 0), 0)
    const cashTotal = filteredPayments
      .filter(p => p.method === 'cash')
      .reduce((sum, p) => sum + Number(p.amount || 0), 0)

    // 2. Expected revenue from tuition notifications matching month or class
    let relevantNotifs = tuitionNotifications
    if (selectedClassId) {
      relevantNotifs = relevantNotifs.filter(n => n.class_id === selectedClassId)
    }
    if (selectedMonth !== 'all') {
      const parts = selectedMonth.split('-')
      const m = parts[1] || ''
      const monthPattern = String(parseInt(m, 10))
      relevantNotifs = relevantNotifs.filter(n => {
        const course = (n.course_name || '').toLowerCase()
        const dateStr = n.created_at || ''
        return course.includes('tháng ' + monthPattern) || course.includes('t' + monthPattern) || dateStr.startsWith(selectedMonth)
      })
    }

    const expectedTotal = relevantNotifs.reduce((sum, n) => sum + Number(n.amount || 0), 0)
    const notifPaidTotal = relevantNotifs.filter(n => n.is_paid).reduce((sum, n) => sum + Number(n.amount || 0), 0)

    // Fallback: Use payments if available, otherwise notif paid
    const displayCollected = totalCollected > 0 ? totalCollected : notifPaidTotal
    const displayExpected = expectedTotal > 0 ? expectedTotal : displayCollected
    const displayDebt = Math.max(0, displayExpected - displayCollected)
    const rate = displayExpected > 0 ? Math.min(100, Math.round((displayCollected / displayExpected) * 1000) / 10) : (displayCollected > 0 ? 100 : 0)

    return {
      collected: displayCollected,
      expected: displayExpected,
      debt: displayDebt,
      rate,
      transferTotal,
      cashTotal,
      transferCount: filteredPayments.filter(p => p.method === 'transfer' || p.method === 'seapay').length,
      cashCount: filteredPayments.filter(p => p.method === 'cash').length,
      transactionCount: filteredPayments.length
    }
  }, [filteredPayments, tuitionNotifications, selectedClassId, selectedMonth])

  // Revenue breakdown by Class
  const classBreakdown = useMemo(() => {
    return classes.filter(c => c.status === 'active').map(cls => {
      const clsName = (cls as any).class_name || cls.name
      const enrolled = enrollments.filter(e => e.class_id === cls.id && e.status === 'active')

      // Class payments
      const clsPayments = payments.filter(p => {
        if (p.class_id !== cls.id) return false
        if (selectedMonth !== 'all') {
          const d = p.paid_at || p.created_at || ''
          return d.startsWith(selectedMonth)
        }
        return true
      })
      const collected = clsPayments.reduce((s, p) => s + Number(p.amount || 0), 0)

      // Class notifications
      const notifs = tuitionNotifications.filter(n => n.class_id === cls.id)
      const expected = notifs.length > 0
        ? notifs.reduce((s, n) => s + Number(n.amount || 0), 0)
        : enrolled.length * 600000

      const debt = Math.max(0, expected - collected)
      const pct = expected > 0 ? Math.min(100, Math.round((collected / expected) * 100)) : 0

      return {
        id: cls.id,
        name: clsName,
        grade: (cls as any).grade || 'Khác',
        studentCount: enrolled.length,
        collected,
        expected,
        debt,
        pct
      }
    })
  }, [classes, enrollments, payments, tuitionNotifications, selectedMonth])

  // Handle manual payment submission
  const handleSavePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    const amt = parseFloat(addForm.amount)
    if (isNaN(amt) || amt <= 0) return
    setAddingPayment(true)
    try {
      await onAddPayment({
        student_id: addForm.studentId || null,
        class_id: addForm.classId || null,
        amount: amt,
        method: addForm.method,
        note: addForm.note,
        paid_at: addForm.paidAt ? new Date(addForm.paidAt).toISOString() : new Date().toISOString()
      })
      setAddModalOpen(false)
      setAddForm({
        studentId: '',
        classId: '',
        amount: '600000',
        method: 'transfer',
        note: 'Học phí',
        paidAt: new Date().toISOString().substring(0, 10)
      })
    } finally {
      setAddingPayment(false)
    }
  }

  // Print Report Handler
  const handlePrint = () => {
    window.print()
  }

  const selectedMonthLabel = availableMonths.find(m => m.key === selectedMonth)?.label || (selectedMonth === 'all' ? 'Tất cả các tháng' : selectedMonth)

  return (
    <div className='space-y-6'>
      {/* Page Sub-Header with Controls */}
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div>
          <h2 className='text-xl font-extrabold text-teal-950 flex items-center gap-2'>
            <TrendingUp className='w-6 h-6 text-teal-600' />
            Báo Cáo Doanh Thu Học Phí Hàng Tháng
          </h2>
          <p className='text-xs text-slate-500 font-semibold mt-0.5'>
            Theo dõi tổng tiền đã thu, học phí còn nợ và phân tích cơ cấu tài chính theo từng tháng
          </p>
        </div>

        <div className='flex items-center gap-2 flex-wrap'>
          {/* Month selector dropdown */}
          <div className='flex items-center gap-1.5 bg-white border border-slate-200 rounded-2xl px-3 py-2 shadow-xs'>
            <Calendar className='w-4 h-4 text-teal-600 shrink-0' />
            <select
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className='outline-none text-xs font-black text-slate-800 bg-transparent cursor-pointer pr-1'
            >
              {availableMonths.map(m => (
                <option key={m.key} value={m.key}>{m.label}</option>
              ))}
              <option value='all'>Toàn bộ thời gian (Tất cả)</option>
            </select>
          </div>

          {/* Quick Print Button */}
          <button
            onClick={handlePrint}
            className='px-3.5 py-2 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer'
            title='In báo cáo doanh thu ra PDF/Giấy A4'
          >
            <Printer className='w-4 h-4 text-slate-500' />
            In Báo Cáo
          </button>

          {/* Add Manual Payment Button */}
          <button
            onClick={() => setAddModalOpen(true)}
            className='px-4 py-2 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md shadow-teal-600/20 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]'
          >
            <Plus className='w-4 h-4' />
            + Ghi Nhận Thu Tiền
          </button>
        </div>
      </div>

      {/* 4 Main KPI Cards */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* 1. Actual Collected */}
        <div className='card p-5 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-teal-600/15 relative overflow-hidden'>
          <div className='relative z-10'>
            <div className='flex items-center justify-between opacity-90 mb-1'>
              <span className='text-[11px] font-black uppercase tracking-wider'>Thực Thu Trong Tháng</span>
              <Wallet className='w-5 h-5' />
            </div>
            <p className='text-3xl font-black tracking-tight'>{fmtVNDShort(metrics.collected)}</p>
            <div className='mt-2 flex items-center gap-2 text-xs font-bold text-emerald-100'>
              <span className='bg-white/20 px-2 py-0.5 rounded-full'>{metrics.transactionCount} giao dịch</span>
              <span>• Đạt {metrics.rate}%</span>
            </div>
          </div>
          <div className='absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none' />
        </div>

        {/* 2. Expected Planned */}
        <div className='card p-5 rounded-3xl bg-white border border-slate-200 shadow-xs'>
          <div className='flex items-center justify-between text-slate-400 mb-1'>
            <span className='text-[11px] font-black uppercase tracking-wider'>Học Phí Dự Kiến</span>
            <DollarSign className='w-5 h-5 text-indigo-500' />
          </div>
          <p className='text-3xl font-black text-slate-800 tracking-tight'>{fmtVNDShort(metrics.expected)}</p>
          <p className='mt-2 text-xs font-semibold text-slate-500'>
            Kế hoạch thu {selectedMonthLabel}
          </p>
        </div>

        {/* 3. Outstanding Debt */}
        <div className='card p-5 rounded-3xl bg-white border border-rose-100 shadow-xs'>
          <div className='flex items-center justify-between text-rose-400 mb-1'>
            <span className='text-[11px] font-black uppercase tracking-wider'>Còn Nợ / Chưa Thu</span>
            <AlertCircle className='w-5 h-5 text-rose-500' />
          </div>
          <p className='text-3xl font-black text-rose-600 tracking-tight'>{fmtVNDShort(metrics.debt)}</p>
          <p className='mt-2 text-xs font-bold text-rose-600/80'>
            {metrics.debt > 0 ? 'Phụ huynh chưa hoàn tất đóng' : 'Đã thu đầy đủ 100% 🎉'}
          </p>
        </div>

        {/* 4. Completion Rate */}
        <div className='card p-5 rounded-3xl bg-white border border-slate-200 shadow-xs'>
          <div className='flex items-center justify-between text-slate-400 mb-1'>
            <span className='text-[11px] font-black uppercase tracking-wider'>Tiến Độ Thu Đạt</span>
            <TrendingUp className='w-5 h-5 text-teal-500' />
          </div>
          <p className='text-3xl font-black text-teal-700 tracking-tight'>{metrics.rate}%</p>
          <div className='mt-2 w-full bg-slate-100 rounded-full h-2 overflow-hidden'>
            <div
              className={'h-full rounded-full transition-all duration-500 ' + (
                metrics.rate >= 80 ? 'bg-emerald-500' : metrics.rate >= 50 ? 'bg-amber-500' : 'bg-rose-500'
              )}
              style={{ width: metrics.rate + '%' }}
            />
          </div>
        </div>
      </div>

      {/* Payment Method Breakdown Bar */}
      <div className='card p-5 rounded-3xl border border-slate-200 shadow-xs bg-white space-y-3'>
        <h3 className='text-xs font-extrabold uppercase tracking-wider text-slate-500'>Cơ Cấu Phương Thức Thanh Toán</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Transfer */}
          <div className='p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shrink-0'>
                <Building2 className='w-5 h-5' />
              </div>
              <div>
                <p className='text-xs font-bold text-blue-900'>Chuyển khoản (Vietcombank / VietQR)</p>
                <p className='text-xs text-blue-700/80 font-medium'>{metrics.transferCount} lượt thanh toán</p>
              </div>
            </div>
            <div className='text-right'>
              <p className='text-lg font-black font-mono text-blue-950'>{fmtVNDShort(metrics.transferTotal)}</p>
              <p className='text-xs font-bold text-blue-600'>
                {metrics.collected > 0 ? Math.round((metrics.transferTotal / metrics.collected) * 100) : 0}% tổng thu
              </p>
            </div>
          </div>

          {/* Cash */}
          <div className='p-4 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shrink-0'>
                <Wallet className='w-5 h-5' />
              </div>
              <div>
                <p className='text-xs font-bold text-amber-900'>Tiền mặt tại trung tâm</p>
                <p className='text-xs text-amber-700/80 font-medium'>{metrics.cashCount} lượt thanh toán</p>
              </div>
            </div>
            <div className='text-right'>
              <p className='text-lg font-black font-mono text-amber-950'>{fmtVNDShort(metrics.cashTotal)}</p>
              <p className='text-xs font-bold text-amber-600'>
                {metrics.collected > 0 ? Math.round((metrics.cashTotal / metrics.collected) * 100) : 0}% tổng thu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Class Revenue Breakdown Table */}
      <div className='card rounded-3xl border border-slate-200 shadow-xs overflow-hidden bg-white'>
        <div className='p-5 border-b border-slate-100 flex items-center justify-between'>
          <div>
            <h3 className='font-extrabold text-slate-800 text-base'>Bảng Doanh Thu Chi Tiết Theo Từng Lớp</h3>
            <p className='text-xs text-slate-400 font-semibold mt-0.5'>Thống kê tiến độ nộp học phí của từng lớp học trong {selectedMonthLabel}</p>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='bg-slate-50/80 border-b border-slate-100'>
                <th className='px-5 py-3.5 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Lớp học</th>
                <th className='px-5 py-3.5 text-center text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Sĩ số</th>
                <th className='px-5 py-3.5 text-right text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Dự kiến thu</th>
                <th className='px-5 py-3.5 text-right text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Thực thu</th>
                <th className='px-5 py-3.5 text-right text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Còn nợ</th>
                <th className='px-5 py-3.5 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Tiến độ</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {classBreakdown.map(c => (
                <tr key={c.id} className='hover:bg-slate-50/80 transition-colors'>
                  <td className='px-5 py-3.5'>
                    <span className='font-extrabold text-slate-900'>{c.name}</span>
                    <span className='text-xs text-slate-400 block font-semibold'>{c.grade}</span>
                  </td>
                  <td className='px-5 py-3.5 text-center font-bold text-slate-700'>
                    {c.studentCount} HS
                  </td>
                  <td className='px-5 py-3.5 text-right font-mono font-bold text-slate-600'>
                    {fmtVNDShort(c.expected)}
                  </td>
                  <td className='px-5 py-3.5 text-right font-mono font-black text-emerald-700'>
                    {fmtVNDShort(c.collected)}
                  </td>
                  <td className='px-5 py-3.5 text-right font-mono font-bold text-rose-600'>
                    {fmtVNDShort(c.debt)}
                  </td>
                  <td className='px-5 py-3.5'>
                    <div className='flex items-center gap-2'>
                      <div className='w-24 bg-slate-100 rounded-full h-2 overflow-hidden shrink-0'>
                        <div
                          className={'h-full rounded-full ' + (
                            c.pct >= 80 ? 'bg-emerald-500' : c.pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                          )}
                          style={{ width: c.pct + '%' }}
                        />
                      </div>
                      <span className='text-xs font-black text-slate-700 font-mono'>{c.pct}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction History Table */}
      <div className='card rounded-3xl border border-slate-200 shadow-xs overflow-hidden bg-white space-y-4'>
        <div className='p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <div>
            <h3 className='font-extrabold text-slate-800 text-base'>Sổ Nhật Ký Các Khoản Thu Tiền</h3>
            <p className='text-xs text-slate-400 font-semibold mt-0.5'>Danh sách các giao dịch thu học phí đã ghi nhận ({filteredPayments.length} giao dịch)</p>
          </div>

          <div className='flex items-center gap-2'>
            {/* Search */}
            <div className='relative min-w-[220px]'>
              <Search className='w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400' />
              <input
                type='text'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder='Tìm học sinh, mã HS...'
                className='w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold outline-none focus:border-teal-500'
              />
            </div>

            {/* Method filter */}
            <select
              value={methodFilter}
              onChange={e => setMethodFilter(e.target.value as any)}
              className='text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 bg-white outline-none cursor-pointer'
            >
              <option value='all'>Tất cả hình thức</option>
              <option value='transfer'>Chuyển khoản (VCB)</option>
              <option value='cash'>Tiền mặt</option>
            </select>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='bg-slate-50/80 border-b border-slate-100'>
                <th className='px-5 py-3 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Thời gian</th>
                <th className='px-5 py-3 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Học sinh</th>
                <th className='px-5 py-3 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Lớp học</th>
                <th className='px-5 py-3 text-right text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Số tiền</th>
                <th className='px-5 py-3 text-center text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Phương thức</th>
                <th className='px-5 py-3 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Nội dung / Ghi chú</th>
                {onDeletePayment && <th className='px-5 py-3 text-right text-slate-700 font-extrabold text-xs uppercase tracking-wider'></th>}
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {filteredPayments.length === 0 ? (
                <tr>
                  <td colSpan={7} className='text-center py-10 text-slate-400 font-medium italic'>
                    Chưa có giao dịch thu tiền nào phù hợp với bộ lọc.
                  </td>
                </tr>
              ) : (
                filteredPayments.map(p => {
                  const st = students.find(s => s.id === p.student_id)
                  const cls = classes.find(c => c.id === p.class_id)
                  const dateStr = p.paid_at || p.created_at || ''
                  const formattedDate = dateStr
                    ? new Date(dateStr).toLocaleString('vi-VN', {
                        day: '2-digit', month: '2-digit', year: 'numeric',
                        hour: '2-digit', minute: '2-digit'
                      })
                    : '—'
                  const isTransfer = p.method === 'transfer' || p.method === 'seapay'

                  return (
                    <tr key={p.id} className='hover:bg-slate-50/80 transition-colors'>
                      <td className='px-5 py-3 text-xs font-mono text-slate-500 whitespace-nowrap'>
                        {formattedDate}
                      </td>
                      <td className='px-5 py-3'>
                        <p className='font-extrabold text-slate-900'>{st?.full_name || 'Học sinh vãng lai'}</p>
                        {st?.student_code && (
                          <span className='text-[10px] font-mono text-slate-500 bg-slate-100 px-1 rounded font-bold'>
                            {st.student_code}
                          </span>
                        )}
                      </td>
                      <td className='px-5 py-3 text-xs font-bold text-slate-700'>
                        {cls ? ((cls as any).class_name || cls.name) : '—'}
                      </td>
                      <td className='px-5 py-3 text-right font-mono font-black text-emerald-700 text-base'>
                        {fmtVNDShort(p.amount)}
                      </td>
                      <td className='px-5 py-3 text-center'>
                        <span className={'inline-flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-full ' + (
                          isTransfer
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        )}>
                          {isTransfer ? '🏦 Chuyển khoản VCB' : '💵 Tiền mặt'}
                        </span>
                      </td>
                      <td className='px-5 py-3 text-xs text-slate-600 font-medium'>
                        {p.note || '—'}
                      </td>
                      {onDeletePayment && (
                        <td className='px-5 py-3 text-right'>
                          <button
                            onClick={() => {
                              if (window.confirm('Xóa bản ghi thu tiền này?')) {
                                void onDeletePayment(p.id)
                              }
                            }}
                            className='p-1 rounded text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer'
                            title='Xóa bản ghi'
                          >
                            <Trash2 className='w-3.5 h-3.5' />
                          </button>
                        </td>
                      )}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Add Payment Modal */}
      {addModalOpen && (
        <Modal
          isOpen={true}
          onClose={() => setAddModalOpen(false)}
          title='Thêm Khoản Thu Tiền Học Phí Thủ Công'
          maxWidth='max-w-md'
        >
          <form onSubmit={handleSavePayment} className='space-y-4 pt-1'>
            {/* Student selection */}
            <div className='space-y-1'>
              <label className='text-xs font-bold text-slate-700'>Học sinh nộp tiền</label>
              <select
                value={addForm.studentId}
                onChange={e => {
                  const sid = e.target.value
                  const enroll = enrollments.find(en => en.student_id === sid && en.status === 'active')
                  setAddForm(f => ({
                    ...f,
                    studentId: sid,
                    classId: enroll ? enroll.class_id : f.classId
                  }))
                }}
                className='w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold outline-none focus:border-teal-500'
              >
                <option value=''>-- Chọn học sinh --</option>
                {students.filter(s => s.status === 'active').map(s => (
                  <option key={s.id} value={s.id}>{s.full_name} ({s.student_code})</option>
                ))}
              </select>
            </div>

            {/* Class selection */}
            <div className='space-y-1'>
              <label className='text-xs font-bold text-slate-700'>Lớp học</label>
              <select
                value={addForm.classId}
                onChange={e => setAddForm(f => ({ ...f, classId: e.target.value }))}
                className='w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold outline-none focus:border-teal-500'
              >
                <option value=''>-- Chọn lớp học --</option>
                {classes.filter(c => c.status === 'active').map(c => (
                  <option key={c.id} value={c.id}>{(c as any).class_name || c.name}</option>
                ))}
              </select>
            </div>

            {/* Amount */}
            <div className='space-y-1'>
              <label className='text-xs font-bold text-slate-700'>Số tiền đã thu (VNĐ)</label>
              <input
                type='number'
                step='10000'
                required
                value={addForm.amount}
                onChange={e => setAddForm(f => ({ ...f, amount: e.target.value }))}
                className='w-full px-3 py-2 rounded-xl border border-slate-200 text-base font-black font-mono outline-none focus:border-teal-500'
              />
            </div>

            {/* Payment method */}
            <div className='space-y-1'>
              <label className='text-xs font-bold text-slate-700'>Hình thức thanh toán</label>
              <div className='grid grid-cols-2 gap-2'>
                <button
                  type='button'
                  onClick={() => setAddForm(f => ({ ...f, method: 'transfer' }))}
                  className={'py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ' + (
                    addForm.method === 'transfer'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  )}
                >
                  🏦 Chuyển khoản (VCB)
                </button>
                <button
                  type='button'
                  onClick={() => setAddForm(f => ({ ...f, method: 'cash' }))}
                  className={'py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ' + (
                    addForm.method === 'cash'
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  )}
                >
                  💵 Tiền mặt
                </button>
              </div>
            </div>

            {/* Date */}
            <div className='space-y-1'>
              <label className='text-xs font-bold text-slate-700'>Ngày thu tiền</label>
              <input
                type='date'
                value={addForm.paidAt}
                onChange={e => setAddForm(f => ({ ...f, paidAt: e.target.value }))}
                className='w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold outline-none focus:border-teal-500'
              />
            </div>

            {/* Note */}
            <div className='space-y-1'>
              <label className='text-xs font-bold text-slate-700'>Ghi chú</label>
              <input
                type='text'
                value={addForm.note}
                onChange={e => setAddForm(f => ({ ...f, note: e.target.value }))}
                placeholder='Ví dụ: Đóng học phí tháng 10'
                className='w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold outline-none focus:border-teal-500'
              />
            </div>

            {/* Buttons */}
            <div className='pt-3 border-t border-slate-100 flex items-center justify-end gap-2'>
              <button
                type='button'
                onClick={() => setAddModalOpen(false)}
                className='px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer'
              >
                Hủy
              </button>
              <button
                type='submit'
                disabled={addingPayment}
                className='px-5 py-2 rounded-xl text-xs font-black bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20 cursor-pointer'
              >
                {addingPayment ? 'Đang lưu...' : 'Lưu Khoản Thu'}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}
