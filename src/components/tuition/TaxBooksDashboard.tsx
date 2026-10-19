// src/components/tuition/TaxBooksDashboard.tsx
import React, { useState, useEffect, useMemo } from 'react'
import {
  FileText, Printer, Plus, Trash2, Calendar, Filter,
  TrendingUp, TrendingDown, DollarSign, ShieldCheck, CheckCircle2,
  BookOpen, Calculator, Info, AlertCircle, Building2, Download
} from 'lucide-react'
import toast from 'react-hot-toast'
import { fmtVNDShort } from '@/lib/helpers'
import ElectronicInvoiceModal from './ElectronicInvoiceModal'
import { buildElectronicInvoice, ElectronicInvoiceData } from '@/lib/invoiceService'
import { numberToVietnameseWords } from '@/lib/numberToWords'
import {
  ExpenseRecord, ExpenseCategory, EXPENSE_CATEGORIES,
  loadExpenses, saveExpenses
} from '@/lib/taxAccountingService'
import type { Payment, TuitionNotification, Class, Student } from '@/types'

interface TaxBooksDashboardProps {
  payments: Payment[]
  tuitionNotifications: TuitionNotification[]
  classes: Class[]
  students: Student[]
}

export default function TaxBooksDashboard({
  payments,
  tuitionNotifications,
  classes,
  students
}: TaxBooksDashboardProps) {
  const [subTab, setSubTab] = useState<'A1' | 'A2' | 'summary'>('A1')
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [selectedQuarter, setSelectedQuarter] = useState('all')
  const [expenses, setExpenses] = useState<ExpenseRecord[]>([])
  const [loadingExpenses, setLoadingExpenses] = useState(true)
  const [selectedInvoice, setSelectedInvoice] = useState<ElectronicInvoiceData | null>(null)

  // State modal thêm chi phí Sổ A2
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false)
  const [expenseForm, setExpenseForm] = useState({
    voucherNo: '',
    date: new Date().toISOString().substring(0, 10),
    category: 'printing' as ExpenseCategory,
    description: '',
    recipient: '',
    amount: '',
    paymentMethod: 'transfer' as 'cash' | 'transfer',
    note: ''
  })
  const [savingExpense, setSavingExpense] = useState(false)

  // Tải chi phí khi mount
  useEffect(() => {
    loadExpenses().then(data => {
      setExpenses(data)
      setLoadingExpenses(false)
    })
  }, [])

  // Danh sách các tháng có dữ liệu
  const availableMonths = useMemo(() => {
    const setM = new Set<string>()
    payments.forEach(p => {
      const d = p.paid_at || p.created_at
      if (d) setM.add(d.substring(0, 7))
    })
    expenses.forEach(e => {
      if (e.date) setM.add(e.date.substring(0, 7))
    })
    return Array.from(setM).sort().reverse()
  }, [payments, expenses])

  // Lọc theo Quý & Tháng
  const filterByPeriod = (dateStr?: string) => {
    if (!dateStr) return false
    const d = new Date(dateStr)
    const m = d.getMonth() + 1 // 1-12
    const ym = dateStr.substring(0, 7)

    if (selectedMonth !== 'all' && ym !== selectedMonth) return false

    if (selectedQuarter !== 'all') {
      if (selectedQuarter === 'Q1' && !(m >= 1 && m <= 3)) return false
      if (selectedQuarter === 'Q2' && !(m >= 4 && m <= 6)) return false
      if (selectedQuarter === 'Q3' && !(m >= 7 && m <= 9)) return false
      if (selectedQuarter === 'Q4' && !(m >= 10 && m <= 12)) return false
    }

    return true
  }

  // Sổ A1: Toàn bộ nguồn thu phát sinh (từ Payments)
  const a1Records = useMemo(() => {
    const list = payments.map((p, idx) => {
      const st = students.find(s => s.id === p.student_id)
      const cls = classes.find(c => c.id === p.class_id)
      const clsName = cls ? ((cls as any).class_name || cls.name) : ''
      const isTransfer = p.method === 'transfer' || p.method === 'seapay'
      const dateStr = p.paid_at || p.created_at || ''
      const voucherNo = 'HD26-' + p.id.slice(0, 6).toUpperCase()

      return {
        id: p.id,
        date: dateStr ? dateStr.substring(0, 10) : '',
        voucherNo,
        studentName: st?.full_name || 'Học sinh vãng lai',
        studentCode: st?.student_code || '',
        className: clsName,
        description: `Thu học phí môn Toán ${clsName ? 'Lớp ' + clsName : ''} - HS ${st?.full_name || ''}`,
        amount: Number(p.amount || 0),
        method: isTransfer ? 'Chuyển khoản VCB' : 'Tiền mặt',
        taxStatus: 'Không chịu thuế GTGT (Dịch vụ giáo dục - đào tạo)'
      }
    })

    return list
      .filter(r => filterByPeriod(r.date))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [payments, students, classes, selectedMonth, selectedQuarter])

  // Tổng doanh thu Sổ A1
  const totalRevenueA1 = useMemo(() => {
    return a1Records.reduce((s, r) => s + r.amount, 0)
  }, [a1Records])

  // Sổ A2: Toàn bộ chi phí phát sinh
  const a2Records = useMemo(() => {
    return expenses
      .filter(e => filterByPeriod(e.date))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [expenses, selectedMonth, selectedQuarter])

  // Phân loại chi phí Sổ A2
  const a2Breakdown = useMemo(() => {
    let labor = 0
    let materials = 0
    let services = 0
    let other = 0

    a2Records.forEach(e => {
      const col = EXPENSE_CATEGORIES[e.category]?.col || 'other'
      if (col === 'labor') labor += e.amount
      else if (col === 'materials') materials += e.amount
      else if (col === 'services') services += e.amount
      else other += e.amount
    })

    const total = labor + materials + services + other
    return { labor, materials, services, other, total }
  }, [a2Records])

  // Tính thuế ước tính (Thông tư 40/2021/TT-BTC)
  const taxEstimate = useMemo(() => {
    // 1. Thuế GTGT: Dịch vụ giáo dục đào tạo thuộc đối tượng không chịu thuế GTGT
    const vatRate = 0
    const vatAmount = 0

    // 2. Thuế TNCN: Hộ kinh doanh giáo dục đào tạo tỷ lệ 2% trên doanh thu
    const pitRate = 0.02
    const pitAmount = totalRevenueA1 * pitRate

    // 3. Lợi nhuận trước thuế
    const netProfit = totalRevenueA1 - a2Breakdown.total

    return {
      vatAmount,
      pitAmount,
      totalTax: vatAmount + pitAmount,
      netProfit
    }
  }, [totalRevenueA1, a2Breakdown.total])

  // Thêm khoản chi mới Sổ A2
  const handleSaveExpense = async (e: React.FormEvent) => {
    e.preventDefault()
    const amt = parseFloat(expenseForm.amount)
    if (isNaN(amt) || amt <= 0) {
      toast.error('Vui lòng nhập số tiền chi hợp lệ!')
      return
    }
    if (!expenseForm.description.trim()) {
      toast.error('Vui lòng nhập nội dung diễn giải khoản chi!')
      return
    }

    setSavingExpense(true)
    const newRecord: ExpenseRecord = {
      id: `EXP-${Date.now()}`,
      voucherNo: expenseForm.voucherNo.trim() || `PC26-${String(expenses.length + 1).padStart(3, '0')}`,
      date: expenseForm.date,
      category: expenseForm.category,
      description: expenseForm.description.trim(),
      recipient: expenseForm.recipient.trim() || 'Nhà cung cấp',
      amount: amt,
      paymentMethod: expenseForm.paymentMethod,
      note: expenseForm.note.trim(),
      createdAt: new Date().toISOString()
    }

    const nextList = [newRecord, ...expenses]
    setExpenses(nextList)
    await saveExpenses(nextList)
    toast.success(`Đã thêm phiếu chi ${newRecord.voucherNo} (${fmtVNDShort(amt)}) vào Sổ A2!`)
    setIsAddExpenseOpen(false)
    setSavingExpense(false)
    setExpenseForm({
      voucherNo: '',
      date: new Date().toISOString().substring(0, 10),
      category: 'printing',
      description: '',
      recipient: '',
      amount: '',
      paymentMethod: 'transfer',
      note: ''
    })
  }

  // Xóa khoản chi
  const handleDeleteExpense = async (id: string) => {
    if (!window.confirm('Xóa khoản chi này khỏi Sổ A2?')) return
    const nextList = expenses.filter(e => e.id !== id)
    setExpenses(nextList)
    await saveExpenses(nextList)
    toast.success('Đã xóa khoản chi!')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className='space-y-6'>

      {/* Thanh Điều Hướng 3 Tab Sổ Thuế */}
      <div className='bg-slate-100/90 p-1.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 border border-slate-200 print:hidden'>
        <div className='flex items-center gap-1'>
          <button
            onClick={() => setSubTab('A1')}
            className={'flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ' + (
              subTab === 'A1'
                ? 'bg-white text-teal-800 shadow-sm shadow-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            )}
          >
            <BookOpen className='w-4 h-4 text-teal-600' />
            Sổ A1 - Doanh Thu Bán Ra (S1-HKD)
            <span className='px-2 py-0.5 rounded-full text-[10px] font-black bg-teal-100 text-teal-800'>
              {a1Records.length}
            </span>
          </button>

          <button
            onClick={() => setSubTab('A2')}
            className={'flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ' + (
              subTab === 'A2'
                ? 'bg-white text-rose-800 shadow-sm shadow-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            )}
          >
            <BookOpen className='w-4 h-4 text-rose-600' />
            Sổ A2 - Chi Phí Đầu Vào (S2-HKD)
            <span className='px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-800'>
              {a2Records.length}
            </span>
          </button>

          <button
            onClick={() => setSubTab('summary')}
            className={'flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ' + (
              subTab === 'summary'
                ? 'bg-white text-indigo-800 shadow-sm shadow-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            )}
          >
            <Calculator className='w-4 h-4 text-indigo-600' />
            Tờ Khai Thuế & Lãi Lỗ (01/CNKD)
          </button>
        </div>

        {/* Bộ Lọc Kỳ Kê Khai (Quý / Tháng) & Nút In */}
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700'>
            <Calendar className='w-3.5 h-3.5 text-slate-400' />
            <select
              value={selectedQuarter}
              onChange={e => { setSelectedQuarter(e.target.value); setSelectedMonth('all'); }}
              className='bg-transparent outline-none font-bold text-slate-800 cursor-pointer'
            >
              <option value='all'>Toàn bộ các Quý</option>
              <option value='Q1'>Quý I (T1 - T3)</option>
              <option value='Q2'>Quý II (T4 - T6)</option>
              <option value='Q3'>Quý III (T7 - T9)</option>
              <option value='Q4'>Quý IV (T10 - T12)</option>
            </select>
          </div>

          <div className='flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700'>
            <Filter className='w-3.5 h-3.5 text-slate-400' />
            <select
              value={selectedMonth}
              onChange={e => { setSelectedMonth(e.target.value); setSelectedQuarter('all'); }}
              className='bg-transparent outline-none font-bold text-slate-800 cursor-pointer'
            >
              <option value='all'>Tất cả các tháng</option>
              {availableMonths.map(m => {
                const [y, mo] = m.split('-')
                return <option key={m} value={m}>Tháng {mo}/{y}</option>
              })}
            </select>
          </div>

          {subTab === 'A2' && (
            <button
              onClick={() => setIsAddExpenseOpen(true)}
              className='px-3.5 py-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md shadow-rose-500/25 transition-all cursor-pointer'
            >
              <Plus className='w-3.5 h-3.5' />
              + Thêm Khoản Chi
            </button>
          )}

          <button
            onClick={handlePrint}
            className='px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer'
          >
            <Printer className='w-3.5 h-3.5 text-sky-300' />
            In Sổ A4
          </button>
        </div>
      </div>

      {/* 3 Thẻ KPI Thuế Nhanh */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 print:hidden'>
        <div className='card p-5 rounded-3xl border border-slate-200 bg-white space-y-1 shadow-xs'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold text-slate-500 uppercase tracking-wider'>Doanh Thu Bán Ra (Sổ A1)</span>
            <div className='w-9 h-9 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold'>
              <TrendingUp className='w-4 h-4' />
            </div>
          </div>
          <p className='text-2xl font-black text-teal-700 font-mono'>{fmtVNDShort(totalRevenueA1)}</p>
          <p className='text-[11px] text-slate-400 font-medium'>Tổng thu học phí trong kỳ ({a1Records.length} chứng từ)</p>
        </div>

        <div className='card p-5 rounded-3xl border border-slate-200 bg-white space-y-1 shadow-xs'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold text-slate-500 uppercase tracking-wider'>Chi Phí Đầu Vào (Sổ A2)</span>
            <div className='w-9 h-9 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold'>
              <TrendingDown className='w-4 h-4' />
            </div>
          </div>
          <p className='text-2xl font-black text-rose-700 font-mono'>{fmtVNDShort(a2Breakdown.total)}</p>
          <p className='text-[11px] text-slate-400 font-medium'>In ấn, thù lao, mặt bằng, điện nước ({a2Records.length} phiếu chi)</p>
        </div>

        <div className='card p-5 rounded-3xl border border-slate-200 bg-white space-y-1 shadow-xs'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold text-slate-500 uppercase tracking-wider'>Lợi Nhuận Thuần Sau Chi Phí</span>
            <div className='w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold'>
              <Calculator className='w-4 h-4' />
            </div>
          </div>
          <p className='text-2xl font-black text-indigo-700 font-mono'>{fmtVNDShort(taxEstimate.netProfit)}</p>
          <p className='text-[11px] text-slate-400 font-medium'>Chênh lệch Doanh thu (A1) trừ Chi phí (A2)</p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TAB 1: SỔ A1 - SỔ CHI TIẾT DOANH THU BÁN HÀNG HÓA, DỊCH VỤ    */}
      {/* ============================================================ */}
      {subTab === 'A1' && (
        <div id="printable-tax-book" className='card p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-800 font-sans print:border-none print:shadow-none print:p-0'>
          
          {/* Header chuẩn Thông tư 88/2021/TT-BTC */}
          <div className='grid grid-cols-2 gap-4 pb-6 border-b-2 border-slate-900'>
            <div>
              <p className='font-black text-sm uppercase text-slate-900'>HỘ KINH DOANH NGUYỄN LƯƠNG THỌ</p>
              <p className='text-xs font-bold text-teal-700 uppercase'>CƠ SỞ: LỚP HỌC TOÁN THẦY THỌ</p>
              <p className='text-[11px] text-slate-600 mt-1'>Mã số thuế: <span className='font-mono font-bold text-slate-900'>0108833133</span></p>
              <p className='text-[11px] text-slate-600'>Địa chỉ: Số nhà 10, Ngõ 32 Hồ Phi Chấn, Phường Thành Sen, TP. Hà Tĩnh</p>
            </div>
            <div className='text-right space-y-1'>
              <p className='font-bold text-xs text-slate-700 uppercase'>Mẫu số: S1-HKD (SỔ A1)</p>
              <p className='text-[11px] text-slate-500 italic'>(Ban hành kèm theo Thông tư số 88/2021/TT-BTC ngày 11/10/2021 của Bộ Tài chính)</p>
            </div>
          </div>

          {/* Tiêu đề sổ */}
          <div className='text-center my-6 space-y-1'>
            <h2 className='text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight'>
              SỔ CHI TIẾT DOANH THU BÁN HÀNG HÓA, DỊCH VỤ (SỔ A1)
            </h2>
            <p className='text-xs font-bold text-slate-600 uppercase tracking-wider'>
              NGÀNH NGHỀ: DỊCH VỤ GIÁO DỤC VÀ ĐÀO TẠO (DẠY HỌC MÔN TOÁN)
            </p>
            <p className='text-[11px] text-slate-500 italic'>
              {selectedMonth !== 'all' ? `Kỳ kê khai: Tháng ${selectedMonth.split('-')[1]}/${selectedMonth.split('-')[0]}` : selectedQuarter !== 'all' ? `Kỳ kê khai: ${selectedQuarter}/2026` : 'Kỳ kê khai: Toàn bộ năm 2026'}
            </p>
          </div>

          {/* Bảng Kê Chi Tiết Sổ A1 */}
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-xs sm:text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100 text-slate-800 text-center font-extrabold'>
                  <th className='border border-slate-300 px-3 py-2.5 w-24'>Ngày ghi sổ</th>
                  <th className='border border-slate-300 px-3 py-2.5 w-28'>Số hiệu chứng từ</th>
                  <th className='border border-slate-300 px-3 py-2.5 w-24'>Ngày chứng từ</th>
                  <th className='border border-slate-300 px-4 py-2.5 text-left'>Diễn giải nội dung cung cấp dịch vụ</th>
                  <th className='border border-slate-300 px-4 py-2.5 text-right w-32'>Doanh thu (VNĐ)</th>
                  <th className='border border-slate-300 px-3 py-2.5 w-28'>Hình thức</th>
                  <th className='border border-slate-300 px-3 py-2.5 w-40 text-center'>Thuế suất GTGT</th>
                </tr>
                <tr className='bg-slate-50 text-slate-500 text-center text-[11px] font-bold'>
                  <td className='border border-slate-300 py-1'>A</td>
                  <td className='border border-slate-300 py-1'>B</td>
                  <td className='border border-slate-300 py-1'>C</td>
                  <td className='border border-slate-300 py-1'>D</td>
                  <td className='border border-slate-300 py-1'>1</td>
                  <td className='border border-slate-300 py-1'>2</td>
                  <td className='border border-slate-300 py-1'>3</td>
                </tr>
              </thead>
              <tbody>
                {a1Records.length === 0 ? (
                  <tr>
                    <td colSpan={7} className='text-center py-10 text-slate-400 font-medium italic border border-slate-300'>
                      Chưa có doanh thu nào phát sinh trong kỳ được chọn.
                    </td>
                  </tr>
                ) : (
                  a1Records.map((r, idx) => (
                    <tr key={idx} className='hover:bg-slate-50/50'>
                      <td className='border border-slate-300 px-3 py-2 text-center font-mono'>{r.date}</td>
                      <td className='border border-slate-300 px-3 py-2 text-center font-mono'>
                        <button
                          onClick={() => {
                            const p = payments.find(pay => pay.id === r.id)
                            const st = students.find(s => s.id === p?.student_id)
                            const cls = classes.find(c => c.id === p?.class_id)
                            const isTransfer = p?.method === 'transfer' || p?.method === 'seapay'
                            const inv = buildElectronicInvoice({
                              id: r.voucherNo,
                              studentName: r.studentName,
                              studentCode: r.studentCode,
                              className: r.className,
                              parentName: (st as any)?.parent_name || 'Quý phụ huynh',
                              phone: ((st as any)?.zalo || (st as any)?.parent_phone || '').replace(/\D/g, ''),
                              amount: r.amount,
                              courseName: r.className ? `Học phí môn Toán Lớp ${r.className}` : 'Học phí môn Toán',
                              paymentMethod: isTransfer ? 'Chuyển khoản Vietcombank' : 'Tiền mặt',
                              note: r.description,
                              date: r.date || new Date(),
                            })
                            setSelectedInvoice(inv)
                          }}
                          className='font-bold text-rose-700 hover:text-rose-900 hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors'
                          title='Bấm để xem Hóa đơn điện tử gốc kèm chữ ký số và mã QR'
                        >
                          <FileText className='w-3 h-3 text-rose-600' />
                          {r.voucherNo}
                        </button>
                      </td>
                      <td className='border border-slate-300 px-3 py-2 text-center font-mono'>{r.date}</td>
                      <td className='border border-slate-300 px-4 py-2'>
                        <span className='font-bold text-slate-900'>{r.description}</span>
                        {r.studentCode && <span className='ml-1 text-[10px] text-slate-500 font-mono'>({r.studentCode})</span>}
                      </td>
                      <td className='border border-slate-300 px-4 py-2 text-right font-mono font-bold text-slate-900'>{fmtVNDShort(r.amount)}</td>
                      <td className='border border-slate-300 px-3 py-2 text-center text-[11px] font-semibold text-slate-700'>{r.method}</td>
                      <td className='border border-slate-300 px-3 py-2 text-center text-[10px] font-bold text-emerald-700'>Không chịu thuế</td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot>
                <tr className='bg-slate-100 font-black'>
                  <td colSpan={4} className='border border-slate-300 px-4 py-3 text-right uppercase text-slate-900'>
                    TỔNG CỘNG DOANH THU PHÁT SINH TRONG KỲ:
                  </td>
                  <td className='border border-slate-300 px-4 py-3 text-right font-mono text-emerald-700 text-base'>
                    {fmtVNDShort(totalRevenueA1)}
                  </td>
                  <td colSpan={2} className='border border-slate-300 px-3 py-3 text-center text-xs text-slate-600'>
                    {a1Records.length} chứng từ thu
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Số tiền bằng chữ */}
          <div className='p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs sm:text-sm mb-8 print:border-slate-300'>
            <span className='font-bold text-slate-700'>Tổng doanh thu viết bằng chữ:</span>{' '}
            <span className='font-extrabold italic text-slate-900'>{numberToVietnameseWords(totalRevenueA1)}</span>
          </div>

          {/* Phần Chữ Ký Người Lập & Đại Diện Hộ Kinh Doanh */}
          <div className='grid grid-cols-2 gap-8 text-center pt-4'>
            <div>
              <p className='font-black text-xs uppercase'>NGƯỜI LẬP BIỂU</p>
              <p className='text-[11px] text-slate-500 italic'>(Ký, ghi rõ họ tên)</p>
              <div className='h-20 flex items-center justify-center text-xs text-slate-400 italic'>
                (Đã ký)
              </div>
              <p className='font-bold text-xs text-slate-800'>Bộ phận Kế toán</p>
            </div>
            <div>
              <p className='font-black text-xs uppercase'>ĐẠI DIỆN HỘ KINH DOANH</p>
              <p className='text-[11px] text-slate-500 italic'>(Ký, đóng dấu, ghi rõ họ tên)</p>
              <div className='h-20 flex items-center justify-center text-xs text-emerald-600 font-bold italic'>
                ✓ ĐÃ KÝ ĐIỆN TỬ CHỨNG THỰC
              </div>
              <p className='font-black text-xs uppercase text-slate-900'>NGUYỄN LƯƠNG THỌ</p>
            </div>
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 2: SỔ A2 - SỔ CHI TIẾT CHI PHÍ SẢN XUẤT, KINH DOANH      */}
      {/* ============================================================ */}
      {subTab === 'A2' && (
        <div id="printable-tax-book" className='card p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-800 font-sans print:border-none print:shadow-none print:p-0'>
          
          {/* Header chuẩn Thông tư 88/2021/TT-BTC */}
          <div className='grid grid-cols-2 gap-4 pb-6 border-b-2 border-slate-900'>
            <div>
              <p className='font-black text-sm uppercase text-slate-900'>HỘ KINH DOANH NGUYỄN LƯƠNG THỌ</p>
              <p className='text-xs font-bold text-teal-700 uppercase'>CƠ SỞ: LỚP HỌC TOÁN THẦY THỌ</p>
              <p className='text-[11px] text-slate-600 mt-1'>Mã số thuế: <span className='font-mono font-bold text-slate-900'>0108833133</span></p>
              <p className='text-[11px] text-slate-600'>Địa chỉ: Số nhà 10, Ngõ 32 Hồ Phi Chấn, Phường Thành Sen, TP. Hà Tĩnh</p>
            </div>
            <div className='text-right space-y-1'>
              <p className='font-bold text-xs text-slate-700 uppercase'>Mẫu số: S2-HKD (SỔ A2)</p>
              <p className='text-[11px] text-slate-500 italic'>(Ban hành kèm theo Thông tư số 88/2021/TT-BTC ngày 11/10/2021 của Bộ Tài chính)</p>
            </div>
          </div>

          {/* Tiêu đề sổ */}
          <div className='text-center my-6 space-y-1'>
            <h2 className='text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight'>
              SỔ CHI TIẾT CHI PHÍ SẢN XUẤT, KINH DOANH (SỔ A2)
            </h2>
            <p className='text-xs font-bold text-slate-600 uppercase tracking-wider'>
              KHOẢN MỤC: IN ẤN TÀI LIỆU, THÙ LAO TRỢ GIẢNG, ĐIỆN NƯỚC, CƠ SỞ VẬT CHẤT
            </p>
            <p className='text-[11px] text-slate-500 italic'>
              {selectedMonth !== 'all' ? `Kỳ kê khai: Tháng ${selectedMonth.split('-')[1]}/${selectedMonth.split('-')[0]}` : selectedQuarter !== 'all' ? `Kỳ kê khai: ${selectedQuarter}/2026` : 'Kỳ kê khai: Toàn bộ năm 2026'}
            </p>
          </div>

          {/* Bảng Kê Chi Tiết Sổ A2 (Phân loại 4 cột chi phí chuẩn TT 88) */}
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-xs sm:text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100 text-slate-800 text-center font-extrabold'>
                  <th className='border border-slate-300 px-3 py-2 w-24' rowSpan={2}>Ngày ghi sổ</th>
                  <th className='border border-slate-300 px-3 py-2 w-24' rowSpan={2}>Số phiếu chi</th>
                  <th className='border border-slate-300 px-4 py-2 text-left' rowSpan={2}>Diễn giải nội dung chi phí</th>
                  <th className='border border-slate-300 px-3 py-2 text-left w-28' rowSpan={2}>Người nhận</th>
                  <th className='border border-slate-300 py-1.5' colSpan={4}>Phân loại chi phí theo Thông tư 88</th>
                  <th className='border border-slate-300 px-3 py-2 text-right w-28' rowSpan={2}>Tổng chi (VNĐ)</th>
                  <th className='border border-slate-300 px-2 py-2 w-12 print:hidden' rowSpan={2}></th>
                </tr>
                <tr className='bg-slate-50 text-slate-700 text-center text-[10px] font-bold'>
                  <th className='border border-slate-300 px-2 py-1 w-24'>1. Nhân công</th>
                  <th className='border border-slate-300 px-2 py-1 w-24'>2. In & Vật tư</th>
                  <th className='border border-slate-300 px-2 py-1 w-24'>3. Dịch vụ ngoài</th>
                  <th className='border border-slate-300 px-2 py-1 w-20'>4. Chi khác</th>
                </tr>
              </thead>
              <tbody>
                {a2Records.length === 0 ? (
                  <tr>
                    <td colSpan={10} className='text-center py-10 text-slate-400 font-medium italic border border-slate-300'>
                      Chưa có chi phí nào phát sinh trong kỳ được chọn. Bấm nút "+ Thêm Khoản Chi" để ghi sổ.
                    </td>
                  </tr>
                ) : (
                  a2Records.map(e => {
                    const col = EXPENSE_CATEGORIES[e.category]?.col || 'other'
                    return (
                      <tr key={e.id} className='hover:bg-slate-50/50'>
                        <td className='border border-slate-300 px-3 py-2 text-center font-mono'>{e.date}</td>
                        <td className='border border-slate-300 px-3 py-2 text-center font-mono font-bold text-rose-700'>{e.voucherNo}</td>
                        <td className='border border-slate-300 px-4 py-2'>
                          <p className='font-bold text-slate-900'>{e.description}</p>
                          {e.note && <p className='text-[10px] text-slate-400 italic'>{e.note}</p>}
                        </td>
                        <td className='border border-slate-300 px-3 py-2 text-slate-700 text-xs'>{e.recipient}</td>
                        
                        {/* 4 Cột phân loại */}
                        <td className='border border-slate-300 px-2 py-2 text-right font-mono text-slate-800'>
                          {col === 'labor' ? fmtVNDShort(e.amount) : '—'}
                        </td>
                        <td className='border border-slate-300 px-2 py-2 text-right font-mono text-slate-800'>
                          {col === 'materials' ? fmtVNDShort(e.amount) : '—'}
                        </td>
                        <td className='border border-slate-300 px-2 py-2 text-right font-mono text-slate-800'>
                          {col === 'services' ? fmtVNDShort(e.amount) : '—'}
                        </td>
                        <td className='border border-slate-300 px-2 py-2 text-right font-mono text-slate-800'>
                          {col === 'other' ? fmtVNDShort(e.amount) : '—'}
                        </td>

                        {/* Tổng chi */}
                        <td className='border border-slate-300 px-3 py-2 text-right font-mono font-bold text-rose-700'>
                          {fmtVNDShort(e.amount)}
                        </td>

                        {/* Nút xóa */}
                        <td className='border border-slate-300 px-2 py-2 text-center print:hidden'>
                          <button
                            onClick={() => handleDeleteExpense(e.id)}
                            className='p-1 text-slate-300 hover:text-rose-600 transition-colors'
                            title='Xóa khoản chi này'
                          >
                            <Trash2 className='w-3.5 h-3.5' />
                          </button>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
              <tfoot>
                <tr className='bg-slate-100 font-black'>
                  <td colSpan={4} className='border border-slate-300 px-4 py-3 text-right uppercase text-slate-900'>
                    TỔNG CỘNG CHI PHÍ PHÁT SINH TRONG KỲ:
                  </td>
                  <td className='border border-slate-300 px-2 py-3 text-right font-mono text-xs'>{fmtVNDShort(a2Breakdown.labor)}</td>
                  <td className='border border-slate-300 px-2 py-3 text-right font-mono text-xs'>{fmtVNDShort(a2Breakdown.materials)}</td>
                  <td className='border border-slate-300 px-2 py-3 text-right font-mono text-xs'>{fmtVNDShort(a2Breakdown.services)}</td>
                  <td className='border border-slate-300 px-2 py-3 text-right font-mono text-xs'>{fmtVNDShort(a2Breakdown.other)}</td>
                  <td className='border border-slate-300 px-3 py-3 text-right font-mono text-rose-700 text-base'>
                    {fmtVNDShort(a2Breakdown.total)}
                  </td>
                  <td className='border border-slate-300 print:hidden'></td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Số tiền chi bằng chữ */}
          <div className='p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs sm:text-sm mb-8 print:border-slate-300'>
            <span className='font-bold text-slate-700'>Tổng chi phí viết bằng chữ:</span>{' '}
            <span className='font-extrabold italic text-slate-900'>{numberToVietnameseWords(a2Breakdown.total)}</span>
          </div>

          {/* Ký tên */}
          <div className='grid grid-cols-2 gap-8 text-center pt-4'>
            <div>
              <p className='font-black text-xs uppercase'>NGƯỜI LẬP BIỂU</p>
              <p className='text-[11px] text-slate-500 italic'>(Ký, ghi rõ họ tên)</p>
              <div className='h-20 flex items-center justify-center text-xs text-slate-400 italic'>
                (Đã ký)
              </div>
              <p className='font-bold text-xs text-slate-800'>Bộ phận Kế toán</p>
            </div>
            <div>
              <p className='font-black text-xs uppercase'>ĐẠI DIỆN HỘ KINH DOANH</p>
              <p className='text-[11px] text-slate-500 italic'>(Ký, đóng dấu, ghi rõ họ tên)</p>
              <div className='h-20 flex items-center justify-center text-xs text-emerald-600 font-bold italic'>
                ✓ ĐÃ KÝ ĐIỆN TỬ CHỨNG THỰC
              </div>
              <p className='font-black text-xs uppercase text-slate-900'>NGUYỄN LƯƠNG THỌ</p>
            </div>
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 3: TỜ KHAI TỔNG HỢP THUẾ & LÃI LỖ (THEO TT 40/2021)       */}
      {/* ============================================================ */}
      {subTab === 'summary' && (
        <div id="printable-tax-book" className='card p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-800 font-sans print:border-none print:shadow-none print:p-0'>
          
          <div className='grid grid-cols-2 gap-4 pb-6 border-b-2 border-slate-900'>
            <div>
              <p className='font-black text-sm uppercase text-slate-900'>HỘ KINH DOANH NGUYỄN LƯƠNG THỌ</p>
              <p className='text-xs font-bold text-teal-700 uppercase'>CƠ SỞ: LỚP HỌC TOÁN THẦY THỌ</p>
              <p className='text-[11px] text-slate-600 mt-1'>Mã số thuế: <span className='font-mono font-bold text-slate-900'>0108833133</span></p>
              <p className='text-[11px] text-slate-600'>Địa chỉ: Số nhà 10, Ngõ 32 Hồ Phi Chấn, Phường Thành Sen, TP. Hà Tĩnh</p>
            </div>
            <div className='text-right space-y-1'>
              <p className='font-bold text-xs text-slate-700 uppercase'>BẢNG KÊ KHAI NGHĨA VỤ THUẾ</p>
              <p className='text-[11px] text-slate-500 italic'>Căn cứ Thông tư 40/2021/TT-BTC & Thông tư 88/2021/TT-BTC</p>
            </div>
          </div>

          <div className='text-center my-6 space-y-1'>
            <h2 className='text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight'>
              BẢNG TỔNG HỢP KÊ KHAI THUẾ VÀ KẾT QUẢ KINH DOANH
            </h2>
            <p className='text-xs font-bold text-slate-600 uppercase tracking-wider'>
              ÁP DỤNG CHO HOẠT ĐỘNG GIÁO DỤC, ĐÀO TẠO & DẠY HỌC THÊM
            </p>
          </div>

          {/* Bảng Kê Khai Thuế & Lãi Lỗ */}
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-xs sm:text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100 text-slate-800 text-center font-extrabold'>
                  <th className='border border-slate-300 px-3 py-2.5 w-12'>STT</th>
                  <th className='border border-slate-300 px-4 py-2.5 text-left'>Chỉ tiêu kế toán & Nghĩa vụ thuế</th>
                  <th className='border border-slate-300 px-3 py-2.5 w-32'>Căn cứ pháp lý</th>
                  <th className='border border-slate-300 px-4 py-2.5 text-right w-36'>Số tiền (VNĐ)</th>
                  <th className='border border-slate-300 px-4 py-2.5 text-left'>Ghi chú / Hướng dẫn kê khai</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                
                {/* 1. Doanh thu A1 */}
                <tr className='bg-slate-50/50 font-bold'>
                  <td className='border border-slate-300 px-3 py-2.5 text-center'>I</td>
                  <td className='border border-slate-300 px-4 py-2.5 text-slate-900'>TỔNG DOANH THU CUNG CẤP DỊCH VỤ (SỔ A1)</td>
                  <td className='border border-slate-300 px-3 py-2.5 text-center text-xs'>Sổ S1-HKD</td>
                  <td className='border border-slate-300 px-4 py-2.5 text-right font-mono text-teal-700 text-base font-black'>{fmtVNDShort(totalRevenueA1)}</td>
                  <td className='border border-slate-300 px-4 py-2.5 text-xs text-slate-500'>Tổng tiền học phí đã thu trong kỳ</td>
                </tr>

                {/* 2. Chi phí A2 */}
                <tr className='bg-slate-50/50 font-bold'>
                  <td className='border border-slate-300 px-3 py-2.5 text-center'>II</td>
                  <td className='border border-slate-300 px-4 py-2.5 text-slate-900'>TỔNG CHI PHÍ HOẠT ĐỘNG SẢN XUẤT KINH DOANH (SỔ A2)</td>
                  <td className='border border-slate-300 px-3 py-2.5 text-center text-xs'>Sổ S2-HKD</td>
                  <td className='border border-slate-300 px-4 py-2.5 text-right font-mono text-rose-700 text-base font-black'>{fmtVNDShort(a2Breakdown.total)}</td>
                  <td className='border border-slate-300 px-4 py-2.5 text-xs text-slate-500'>Bao gồm in ấn, thù lao trợ giảng, điện nước</td>
                </tr>

                {/* 3. Lợi nhuận thuần */}
                <tr className='bg-indigo-50/40 font-black'>
                  <td className='border border-slate-300 px-3 py-2.5 text-center'>III</td>
                  <td className='border border-slate-300 px-4 py-2.5 text-indigo-900'>LỢI NHUẬN THUẦN TRƯỚC THUẾ (I - II)</td>
                  <td className='border border-slate-300 px-3 py-2.5 text-center text-xs'>A1 - A2</td>
                  <td className='border border-slate-300 px-4 py-2.5 text-right font-mono text-indigo-700 text-base font-black'>{fmtVNDShort(taxEstimate.netProfit)}</td>
                  <td className='border border-slate-300 px-4 py-2.5 text-xs text-indigo-600 font-semibold'>Hiệu quả hoạt động lớp học</td>
                </tr>

                {/* 4. Thuế GTGT */}
                <tr>
                  <td className='border border-slate-300 px-3 py-2.5 text-center font-bold'>1</td>
                  <td className='border border-slate-300 px-4 py-2.5'>
                    <p className='font-bold text-slate-800'>Thuế Giá Trị Gia Tăng (GTGT)</p>
                    <p className='text-[11px] text-slate-500'>Áp dụng đối với dịch vụ dạy học, đào tạo môn Toán</p>
                  </td>
                  <td className='border border-slate-300 px-3 py-2.5 text-center text-[11px] text-emerald-700 font-bold'>
                    Khoản 13 Điều 5 Luật Thuế GTGT
                  </td>
                  <td className='border border-slate-300 px-4 py-2.5 text-right font-mono font-bold text-emerald-700'>
                    0 đ
                  </td>
                  <td className='border border-slate-300 px-4 py-2.5 text-xs text-emerald-800 font-bold'>
                    ✓ Đối tượng không chịu thuế GTGT
                  </td>
                </tr>

                {/* 5. Thuế TNCN */}
                <tr>
                  <td className='border border-slate-300 px-3 py-2.5 text-center font-bold'>2</td>
                  <td className='border border-slate-300 px-4 py-2.5'>
                    <p className='font-bold text-slate-800'>Thuế Thu Nhập Cá Nhân (TNCN)</p>
                    <p className='text-[11px] text-slate-500'>Tỷ lệ 2% trên doanh thu đối với dịch vụ giáo dục</p>
                  </td>
                  <td className='border border-slate-300 px-3 py-2.5 text-center text-[11px] text-blue-700 font-bold'>
                    Phụ lục I Thông tư 40/2021
                  </td>
                  <td className='border border-slate-300 px-4 py-2.5 text-right font-mono font-bold text-blue-700'>
                    {fmtVNDShort(taxEstimate.pitAmount)}
                  </td>
                  <td className='border border-slate-300 px-4 py-2.5 text-xs text-slate-600'>
                    Tạm tính 2% doanh thu (nếu kê khai thực tế)
                  </td>
                </tr>

                {/* 6. Lệ phí Môn bài */}
                <tr>
                  <td className='border border-slate-300 px-3 py-2.5 text-center font-bold'>3</td>
                  <td className='border border-slate-300 px-4 py-2.5'>
                    <p className='font-bold text-slate-800'>Lệ Phí Môn Bài (Hàng năm)</p>
                    <p className='text-[11px] text-slate-500'>Theo bậc doanh thu của Hộ Kinh Doanh</p>
                  </td>
                  <td className='border border-slate-300 px-3 py-2.5 text-center text-[11px] text-slate-700 font-bold'>
                    Nghị định 139/2016/NĐ-CP
                  </td>
                  <td className='border border-slate-300 px-4 py-2.5 text-right font-mono font-bold text-slate-800'>
                    300.000 đ - 500.000 đ
                  </td>
                  <td className='border border-slate-300 px-4 py-2.5 text-xs text-slate-600'>
                    Nộp 1 lần vào đầu năm tài chính
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Hướng dẫn kê khai thuế */}
          <div className='p-4 bg-teal-50 border border-teal-200 rounded-2xl text-xs space-y-1.5 text-slate-700 mb-8 print:border-slate-300'>
            <p className='font-black text-teal-900 flex items-center gap-1.5'>
              <ShieldCheck className='w-4 h-4 text-teal-600' />
              GHI CHÚ HƯỚNG DẪN KÊ KHAI CHO THẦY THỌ:
            </p>
            <p>• Dịch vụ dạy học, ôn thi Toán của Hộ kinh doanh thuộc đối tượng <strong>KHÔNG CHỊU THUẾ GTGT</strong> theo Luật thuế GTGT.</p>
            <p>• Khi cơ quan thuế yêu cầu kê khai hoặc quyết toán, Thầy Thọ chỉ cần bấm <strong>In Sổ A1 và Sổ A2</strong> là đã có sẵn bảng biểu chuẩn mực theo Thông tư 88/2021/TT-BTC có đầy đủ số chứng từ, ngày lập, chữ ký điện tử.</p>
          </div>

          {/* Ký tên */}
          <div className='grid grid-cols-2 gap-8 text-center pt-4'>
            <div>
              <p className='font-black text-xs uppercase'>NGƯỜI LẬP BIỂU</p>
              <p className='text-[11px] text-slate-500 italic'>(Ký, ghi rõ họ tên)</p>
              <div className='h-20 flex items-center justify-center text-xs text-slate-400 italic'>
                (Đã ký)
              </div>
              <p className='font-bold text-xs text-slate-800'>Bộ phận Kế toán</p>
            </div>
            <div>
              <p className='font-black text-xs uppercase'>ĐẠI DIỆN HỘ KINH DOANH</p>
              <p className='text-[11px] text-slate-500 italic'>(Ký, đóng dấu, ghi rõ họ tên)</p>
              <div className='h-20 flex items-center justify-center text-xs text-emerald-600 font-bold italic'>
                ✓ ĐÃ KÝ ĐIỆN TỬ CHỨNG THỰC
              </div>
              <p className='font-black text-xs uppercase text-slate-900'>NGUYỄN LƯƠNG THỌ</p>
            </div>
          </div>

        </div>
      )}

      {/* MODAL THÊM KHOẢN CHI MỚI CHO SỔ A2 */}
      {isAddExpenseOpen && (
        <div className='fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4'>
          <div className='bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden'>
            <div className='bg-gradient-to-r from-rose-600 to-pink-600 text-white p-5 flex items-center justify-between'>
              <div className='flex items-center gap-2.5'>
                <div className='w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center'>
                  <Plus className='w-5 h-5' />
                </div>
                <div>
                  <h3 className='font-black text-sm uppercase'>THÊM KHOẢN CHI PHÍ (SỔ A2)</h3>
                  <p className='text-[11px] text-rose-100'>Ghi sổ chi phí sản xuất kinh doanh theo TT 88/2021</p>
                </div>
              </div>
              <button
                onClick={() => setIsAddExpenseOpen(false)}
                className='w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer'
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveExpense} className='p-6 space-y-4 text-xs font-semibold text-slate-700'>
              
              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <label className='block font-bold text-slate-700 mb-1'>Số Phiếu Chi / Hóa Đơn</label>
                  <input
                    type='text'
                    placeholder='VD: PC26-004'
                    value={expenseForm.voucherNo}
                    onChange={e => setExpenseForm(f => ({ ...f, voucherNo: e.target.value }))}
                    className='w-full px-3 py-2 rounded-xl border border-slate-200 font-mono font-bold uppercase focus:ring-2 focus:ring-rose-500 outline-none'
                  />
                </div>
                <div>
                  <label className='block font-bold text-slate-700 mb-1'>Ngày Chi</label>
                  <input
                    type='date'
                    value={expenseForm.date}
                    onChange={e => setExpenseForm(f => ({ ...f, date: e.target.value }))}
                    className='w-full px-3 py-2 rounded-xl border border-slate-200 font-bold focus:ring-2 focus:ring-rose-500 outline-none'
                    required
                  />
                </div>
              </div>

              <div>
                <label className='block font-bold text-slate-700 mb-1'>Khoản Mục Chi Phí (Thông Tư 88)</label>
                <select
                  value={expenseForm.category}
                  onChange={e => setExpenseForm(f => ({ ...f, category: e.target.value as ExpenseCategory }))}
                  className='w-full px-3 py-2 rounded-xl border border-slate-200 font-bold focus:ring-2 focus:ring-rose-500 outline-none'
                >
                  {Object.entries(EXPENSE_CATEGORIES).map(([key, val]) => (
                    <option key={key} value={key}>{val.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block font-bold text-slate-700 mb-1'>Diễn Giải Nội Dung Chi Phí *</label>
                <input
                  type='text'
                  placeholder='VD: Chi in 100 cuốn Chuyên đề Lấy Lại Gốc Toán 6-7'
                  value={expenseForm.description}
                  onChange={e => setExpenseForm(f => ({ ...f, description: e.target.value }))}
                  className='w-full px-3 py-2 rounded-xl border border-slate-200 font-bold focus:ring-2 focus:ring-rose-500 outline-none'
                  required
                />
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <label className='block font-bold text-slate-700 mb-1'>Số Tiền (VNĐ) *</label>
                  <input
                    type='number'
                    placeholder='VD: 1500000'
                    value={expenseForm.amount}
                    onChange={e => setExpenseForm(f => ({ ...f, amount: e.target.value }))}
                    className='w-full px-3 py-2 rounded-xl border border-slate-200 font-mono font-black text-rose-600 text-sm focus:ring-2 focus:ring-rose-500 outline-none'
                    required
                  />
                </div>
                <div>
                  <label className='block font-bold text-slate-700 mb-1'>Người Nhận / Nhà Cung Cấp</label>
                  <input
                    type='text'
                    placeholder='VD: Nhà in Thành Đạt'
                    value={expenseForm.recipient}
                    onChange={e => setExpenseForm(f => ({ ...f, recipient: e.target.value }))}
                    className='w-full px-3 py-2 rounded-xl border border-slate-200 font-bold focus:ring-2 focus:ring-rose-500 outline-none'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <label className='block font-bold text-slate-700 mb-1'>Hình Thức Thanh Toán</label>
                  <select
                    value={expenseForm.paymentMethod}
                    onChange={e => setExpenseForm(f => ({ ...f, paymentMethod: e.target.value as 'cash' | 'transfer' }))}
                    className='w-full px-3 py-2 rounded-xl border border-slate-200 font-bold focus:ring-2 focus:ring-rose-500 outline-none'
                  >
                    <option value='transfer'>🏦 Chuyển khoản Vietcombank</option>
                    <option value='cash'>💵 Tiền mặt</option>
                  </select>
                </div>
                <div>
                  <label className='block font-bold text-slate-700 mb-1'>Ghi Chú Thêm</label>
                  <input
                    type='text'
                    placeholder='Ghi chú nội bộ'
                    value={expenseForm.note}
                    onChange={e => setExpenseForm(f => ({ ...f, note: e.target.value }))}
                    className='w-full px-3 py-2 rounded-xl border border-slate-200 font-bold focus:ring-2 focus:ring-rose-500 outline-none'
                  />
                </div>
              </div>

              <div className='pt-3 border-t border-slate-100 flex items-center justify-end gap-2'>
                <button
                  type='button'
                  onClick={() => setIsAddExpenseOpen(false)}
                  className='px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer'
                >
                  Hủy
                </button>
                <button
                  type='submit'
                  disabled={savingExpense}
                  className='px-5 py-2 rounded-xl text-xs font-black bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/20 cursor-pointer disabled:opacity-50'
                >
                  {savingExpense ? 'Đang lưu...' : 'Lưu Vào Sổ A2'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {selectedInvoice && (
        <ElectronicInvoiceModal
          invoice={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
        />
      )}

    </div>
  )
}
