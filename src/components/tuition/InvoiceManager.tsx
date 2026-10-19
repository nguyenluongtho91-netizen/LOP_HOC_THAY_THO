// src/components/tuition/InvoiceManager.tsx
import React, { useState, useMemo } from 'react'
import {
  FileText, BookOpen, Printer, Send, Copy, Check, Search,
  Calendar, Filter, Sparkles, ShieldCheck, TrendingUp,
  Download, Eye, QrCode, Phone, CheckCircle2, ChevronRight
} from 'lucide-react'
import toast from 'react-hot-toast'
import { fmtVNDShort } from '@/lib/helpers'
import { ElectronicInvoiceData, buildElectronicInvoice, saveElectronicInvoice } from '@/lib/invoiceService'
import ElectronicInvoiceModal from './ElectronicInvoiceModal'
import type { Payment, TuitionNotification, Class, Student } from '@/types'

interface InvoiceManagerProps {
  payments: Payment[]
  tuitionNotifications: TuitionNotification[]
  classes: Class[]
  students: Student[]
  selectedClassId: string
  onSelectClassId: (classId: string) => void
  onNavigateTab?: (tab: string) => void
}

export default function InvoiceManager({
  payments,
  tuitionNotifications,
  classes,
  students,
  selectedClassId,
  onSelectClassId,
  onNavigateTab
}: InvoiceManagerProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [selectedInvoice, setSelectedInvoice] = useState<ElectronicInvoiceData | null>(null)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [sendingZaloId, setSendingZaloId] = useState<string | null>(null)

  // Danh sách các tháng có giao dịch
  const availableMonths = useMemo(() => {
    const setM = new Set<string>()
    payments.forEach(p => {
      const d = p.paid_at || p.created_at
      if (d) setM.add(d.substring(0, 7))
    })
    tuitionNotifications.forEach(t => {
      if (t.is_paid && t.created_at) setM.add(t.created_at.substring(0, 7))
    })
    return Array.from(setM).sort().reverse()
  }, [payments, tuitionNotifications])

  // Tổng hợp toàn bộ Hóa Đơn Điện Tử từ payments & tuitionNotifications đã thu
  const allInvoices = useMemo(() => {
    const list: ElectronicInvoiceData[] = []
    const seenIds = new Set<string>()

    // 1. Khởi tạo từ các thanh toán thực tế (Payments)
    payments.forEach(p => {
      const st = students.find(s => s.id === p.student_id)
      const cls = classes.find(c => c.id === p.class_id)
      const isTransfer = p.method === 'transfer' || p.method === 'seapay'
      const invoiceId = 'HD26-' + p.id.replace(/\D/g, '').slice(-4).padStart(4, '0') + p.id.slice(0, 2).toUpperCase()
      const seedCode = p.id.slice(0, 6).toUpperCase()

      const inv = buildElectronicInvoice({
        id: `HD26-${seedCode}`,
        studentName: st?.full_name || 'Học sinh vãng lai',
        studentCode: st?.student_code || '',
        className: cls ? ((cls as any).class_name || cls.name) : '',
        parentName: (st as any)?.parent_name || 'Quý phụ huynh',
        phone: ((st as any)?.zalo || (st as any)?.parent_phone || '').replace(/\D/g, ''),
        amount: Number(p.amount || 0),
        courseName: cls ? ((cls as any).class_name || cls.name) : 'Học phí môn Toán',
        paymentMethod: isTransfer ? 'Chuyển khoản Vietcombank' : 'Tiền mặt',
        note: p.note || 'Thanh toán học phí môn Toán Thầy Thọ',
        date: p.paid_at || p.created_at || new Date(),
      })

      list.push(inv)
      seenIds.add(p.student_id || '')
    })

    // 2. Bổ sung các thông báo học phí đã nộp nhưng chưa có bản ghi payment tương ứng
    tuitionNotifications
      .filter(t => t.is_paid)
      .forEach(t => {
        const key = `NOTIF-${t.id}`
        if (seenIds.has(t.student_id)) return // Đã có trong payments

        const st = students.find(s => s.id === t.student_id)
        const cls = classes.find(c => c.id === t.class_id)
        const seedCode = t.id.slice(0, 6).toUpperCase()

        const inv = buildElectronicInvoice({
          id: `HD26-${seedCode}`,
          studentName: st?.full_name || 'Học sinh',
          studentCode: st?.student_code || '',
          className: cls ? ((cls as any).class_name || cls.name) : '',
          parentName: (st as any)?.parent_name || 'Quý phụ huynh',
          phone: ((st as any)?.zalo || (st as any)?.parent_phone || '').replace(/\D/g, ''),
          amount: Number(t.amount || 0),
          courseName: t.course_name || 'Học phí môn Toán',
          paymentMethod: 'Chuyển khoản Vietcombank',
          note: 'Thu học phí đã hoàn tất',
          date: t.created_at || new Date(),
        })

        list.push(inv)
      })

    // Sắp xếp ngày mới nhất lên đầu
    return list.sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime())
  }, [payments, tuitionNotifications, classes, students])

  // Lọc danh sách hóa đơn theo tìm kiếm, lớp và tháng
  const filteredInvoices = useMemo(() => {
    return allInvoices.filter(inv => {
      // Lọc lớp
      if (selectedClassId && selectedClassId !== 'all') {
        const cls = classes.find(c => c.id === selectedClassId)
        const clsName = cls ? ((cls as any).class_name || cls.name || '').toLowerCase() : ''
        if (clsName && !(inv.className || '').toLowerCase().includes(clsName)) {
          return false
        }
      }

      // Lọc tháng
      if (selectedMonth !== 'all') {
        const ym = (inv.issueDate || '').substring(0, 7)
        if (ym !== selectedMonth) return false
      }

      // Lọc tìm kiếm
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase()
        const matchName = (inv.studentName || '').toLowerCase().includes(q)
        const matchCode = (inv.studentCode || '').toLowerCase().includes(q)
        const matchInvoiceNo = (inv.invoiceNumber || '').toLowerCase().includes(q)
        const matchPhone = (inv.phone || '').includes(q)
        if (!matchName && !matchCode && !matchInvoiceNo && !matchPhone) return false
      }

      return true
    })
  }, [allInvoices, selectedClassId, selectedMonth, searchTerm, classes])

  // Thống kê nhanh
  const stats = useMemo(() => {
    const totalCount = filteredInvoices.length
    const totalAmount = filteredInvoices.reduce((s, inv) => s + inv.totalAmount, 0)
    const transferCount = filteredInvoices.filter(i => i.paymentMethod.includes('khoản')).length
    const cashCount = totalCount - transferCount
    return { totalCount, totalAmount, transferCount, cashCount }
  }, [filteredInvoices])

  // Sao chép link tra cứu
  const handleCopyLink = async (inv: ElectronicInvoiceData) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://lop-hoc-thay-tho.vercel.app'
    const link = `${origin}/hoa-don/${inv.lookupCode}`
    try {
      await navigator.clipboard.writeText(link)
      setCopiedCode(inv.lookupCode)
      toast.success(`Đã sao chép link HĐ ${inv.invoiceNumber}!`)
      setTimeout(() => setCopiedCode(null), 2500)
    } catch {
      toast.error('Không thể sao chép liên kết')
    }
  }

  // Gửi Zalo trực tiếp qua daemon
  const handleSendZalo = async (inv: ElectronicInvoiceData) => {
    const rawPhone = (inv.phone || '').replace(/\D/g, '')
    if (!rawPhone) {
      toast.error(`Học sinh ${inv.studentName} chưa có SĐT Zalo!`)
      return
    }

    setSendingZaloId(inv.id)
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://lop-hoc-thay-tho.vercel.app'
    const publicUrl = `${origin}/hoa-don/${inv.lookupCode}`

    const msg = `LỚP HỌC TOÁN THẦY THỌ - HÓA ĐƠN ĐIỆN TỬ\n` +
      `Kính gửi Quý phụ huynh học sinh ${inv.studentName},\n` +
      `Thầy Thọ xin gửi Hóa đơn điện tử thu học phí đã hoàn tất:\n` +
      `• Số hóa đơn: ${inv.invoiceNumber}\n` +
      `• Môn học: ${inv.items[0]?.name || 'Học phí môn Toán'}\n` +
      `• Số tiền: ${fmtVNDShort(inv.totalAmount)} (${inv.totalAmountWords})\n` +
      `• Hình thức: ${inv.paymentMethod}\n` +
      `• Đơn vị phát hành: HỘ KINH DOANH NGUYỄN LƯƠNG THỌ\n` +
      `Quý phụ huynh bấm vào link dưới đây để xem và lưu trữ hóa đơn điện tử gốc:\n${publicUrl}\n\n` +
      `Trân trọng cảm ơn Quý phụ huynh!`

    try {
      const res = await fetch('http://localhost:3001/send-direct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: rawPhone, message: msg }),
      })
      const data = await res.json()
      if (data.ok) {
        toast.success(`Đã gửi hóa đơn Zalo cho phụ huynh ${inv.studentName}!`)
      } else {
        window.open(`https://zalo.me/${rawPhone}`, '_blank')
        toast.success(`Đã mở Zalo phụ huynh ${inv.studentName}`)
      }
    } catch {
      window.open(`https://zalo.me/${rawPhone}`, '_blank')
      toast.success(`Đã mở Zalo phụ huynh ${inv.studentName}`)
    } finally {
      setSendingZaloId(null)
    }
  }

  // In bảng kê hóa đơn
  const handlePrintRegistry = () => {
    window.print()
  }

  return (
    <div className='space-y-6'>
      
      {/* 4 Thẻ Thống Kê Hóa Đơn */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 print:hidden'>
        <div className='card p-5 rounded-3xl border border-slate-200 shadow-xs bg-white space-y-1 hover:shadow-md transition-shadow'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold text-slate-500 uppercase tracking-wider'>Tổng Số Hóa Đơn</span>
            <div className='w-9 h-9 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold'>
              <FileText className='w-4 h-4' />
            </div>
          </div>
          <p className='text-2xl font-black text-slate-900'>{stats.totalCount}</p>
          <p className='text-[11px] text-slate-400 font-medium'>Đã phát hành & ký số điện tử</p>
        </div>

        <div className='card p-5 rounded-3xl border border-slate-200 shadow-xs bg-white space-y-1 hover:shadow-md transition-shadow'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold text-slate-500 uppercase tracking-wider'>Doanh Thu Đã Xuất</span>
            <div className='w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold'>
              <TrendingUp className='w-4 h-4' />
            </div>
          </div>
          <p className='text-2xl font-black text-emerald-600 font-mono'>{fmtVNDShort(stats.totalAmount)}</p>
          <p className='text-[11px] text-slate-400 font-medium'>Theo bộ lọc hiện tại</p>
        </div>

        <div className='card p-5 rounded-3xl border border-slate-200 shadow-xs bg-white space-y-1 hover:shadow-md transition-shadow'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold text-slate-500 uppercase tracking-wider'>Chuyển Khoản VCB</span>
            <div className='w-9 h-9 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold'>
              <CheckCircle2 className='w-4 h-4' />
            </div>
          </div>
          <p className='text-2xl font-black text-blue-700'>{stats.transferCount} <span className='text-xs text-slate-500 font-semibold'>hóa đơn</span></p>
          <p className='text-[11px] text-slate-400 font-medium'>Qua STK 1070493932</p>
        </div>

        <div className='card p-5 rounded-3xl border border-slate-200 shadow-xs bg-white space-y-1 hover:shadow-md transition-shadow'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold text-slate-500 uppercase tracking-wider'>Thu Tiền Mặt</span>
            <div className='w-9 h-9 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold'>
              <ShieldCheck className='w-4 h-4' />
            </div>
          </div>
          <p className='text-2xl font-black text-amber-700'>{stats.cashCount} <span className='text-xs text-slate-500 font-semibold'>hóa đơn</span></p>
          <p className='text-[11px] text-slate-400 font-medium'>Biên lai trực tiếp tại lớp</p>
        </div>
      </div>

      {/* Thanh Điều Khiển: Lọc & Tìm Kiếm & In */}
      <div className='card p-5 rounded-3xl border border-slate-200 shadow-xs bg-white flex flex-wrap items-center justify-between gap-4 print:hidden'>
        <div className='flex flex-wrap items-center gap-3 flex-1 min-w-[280px]'>
          
          {/* Ô tìm kiếm */}
          <div className='relative flex-1 min-w-[200px]'>
            <Search className='w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2' />
            <input
              type='text'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder='Tìm theo tên HS, mã HS, số hóa đơn (HD26-...)'
              className='w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-teal-500'
            />
          </div>

          {/* Chọn Lớp */}
          <div className='flex items-center gap-1.5'>
            <Filter className='w-3.5 h-3.5 text-slate-400' />
            <select
              value={selectedClassId}
              onChange={e => onSelectClassId(e.target.value)}
              className='px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500'
            >
              <option value='all'>Tất cả các lớp ({classes.length})</option>
              {classes.map(c => (
                <option key={c.id} value={c.id}>
                  {(c as any).class_name || c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Chọn Tháng */}
          <div className='flex items-center gap-1.5'>
            <Calendar className='w-3.5 h-3.5 text-slate-400' />
            <select
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className='px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500'
            >
              <option value='all'>Tất cả các tháng</option>
              {availableMonths.map(m => {
                const [y, mo] = m.split('-')
                return (
                  <option key={m} value={m}>Tháng {mo}/{y}</option>
                )
              })}
            </select>
          </div>

        </div>

        {/* Nút Thao Tác Nhanh */}
        <div className='flex items-center gap-2'>
          {onNavigateTab && (
            <button
              onClick={() => onNavigateTab('tax-books')}
              className='px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 font-black rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-amber-300 shadow-xs'
              title='Xem kết chuyển toàn bộ hóa đơn vào Sổ Doanh Thu A1'
            >
              <BookOpen className='w-3.5 h-3.5 text-amber-600' />
              Xem Trong Sổ Thuế A1
            </button>
          )}

          <button
            onClick={handlePrintRegistry}
            className='px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer'
            title='In toàn bộ bảng kê sổ phát hành hóa đơn điện tử'
          >
            <Printer className='w-3.5 h-3.5 text-slate-600' />
            In Bảng Kê A4
          </button>
        </div>
      </div>

      {/* Sổ Kê Hóa Đơn Điện Tử (Bảng Chi Tiết) */}
      <div className='card rounded-3xl border border-slate-200 shadow-xs bg-white overflow-hidden'>
        <div className='p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50'>
          <div>
            <h3 className='text-sm font-black text-slate-900 uppercase tracking-wide flex items-center gap-2'>
              <FileText className='w-4 h-4 text-teal-600' />
              SỔ PHÁT HÀNH HÓA ĐƠN ĐIỆN TỬ
            </h3>
            <p className='text-xs text-slate-400 font-semibold mt-0.5'>
              Hộ Kinh Doanh Nguyễn Lương Thọ • Quản lý chứng từ thu học phí ({filteredInvoices.length} hóa đơn)
            </p>
          </div>
          <span className='text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full'>
            Tổng: {fmtVNDShort(stats.totalAmount)}
          </span>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='bg-slate-50/80 border-b border-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider'>
                <th className='px-5 py-3 text-left w-28'>Số Hóa Đơn</th>
                <th className='px-5 py-3 text-left w-32'>Ngày Lập</th>
                <th className='px-5 py-3 text-left'>Học Sinh</th>
                <th className='px-5 py-3 text-left'>Lớp Học</th>
                <th className='px-5 py-3 text-right'>Số Tiền</th>
                <th className='px-5 py-3 text-center'>Phương Thức</th>
                <th className='px-5 py-3 text-center'>Chữ Ký Số</th>
                <th className='px-5 py-3 text-right'>Thao Tác</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {filteredInvoices.length === 0 ? (
                <tr>
                  <td colSpan={8} className='text-center py-12 text-slate-400 font-medium italic'>
                    Chưa có hóa đơn nào phù hợp với bộ lọc tìm kiếm.
                  </td>
                </tr>
              ) : (
                filteredInvoices.map((inv, idx) => {
                  const isTransfer = inv.paymentMethod.includes('khoản')
                  return (
                    <tr key={inv.id || idx} className='hover:bg-slate-50/70 transition-colors'>
                      
                      {/* Số hóa đơn */}
                      <td className='px-5 py-3.5'>
                        <span className='font-mono font-black text-rose-600 text-xs bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-lg'>
                          {inv.invoiceNumber}
                        </span>
                      </td>

                      {/* Ngày lập */}
                      <td className='px-5 py-3.5 text-xs font-mono text-slate-500 whitespace-nowrap'>
                        {new Date(inv.issueDate).toLocaleDateString('vi-VN', {
                          day: '2-digit', month: '2-digit', year: 'numeric'
                        })}
                      </td>

                      {/* Học sinh */}
                      <td className='px-5 py-3.5'>
                        <p className='font-extrabold text-slate-900'>{inv.studentName}</p>
                        <div className='flex items-center gap-2 mt-0.5'>
                          {inv.studentCode && (
                            <span className='text-[10px] font-mono text-slate-500 bg-slate-100 px-1 rounded font-bold'>
                              {inv.studentCode}
                            </span>
                          )}
                          {inv.phone && (
                            <span className='text-[10px] text-slate-400 font-mono'>
                              {inv.phone}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Lớp học */}
                      <td className='px-5 py-3.5 text-xs font-bold text-slate-700'>
                        {inv.className || 'Toán Thầy Thọ'}
                      </td>

                      {/* Số tiền */}
                      <td className='px-5 py-3.5 text-right font-mono font-black text-emerald-700 text-base'>
                        {fmtVNDShort(inv.totalAmount)}
                      </td>

                      {/* Phương thức */}
                      <td className='px-5 py-3.5 text-center'>
                        <span className={'inline-flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-full ' + (
                          isTransfer
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        )}>
                          {isTransfer ? '🏦 Vietcombank' : '💵 Tiền mặt'}
                        </span>
                      </td>

                      {/* Ký số */}
                      <td className='px-5 py-3.5 text-center'>
                        <span className='inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md'>
                          ✓ ĐÃ KÝ ĐIỆN TỬ
                        </span>
                      </td>

                      {/* Thao tác */}
                      <td className='px-5 py-3.5 text-right whitespace-nowrap'>
                        <div className='flex items-center justify-end gap-1.5'>
                          <button
                            onClick={() => setSelectedInvoice(inv)}
                            className='px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-xs font-black inline-flex items-center gap-1 transition-all hover:scale-105 cursor-pointer shadow-xs'
                            title='Xem chi tiết và In hóa đơn điện tử'
                          >
                            <FileText className='w-3.5 h-3.5 text-amber-600' />
                            Xem HĐ
                          </button>

                          <button
                            onClick={() => handleSendZalo(inv)}
                            disabled={sendingZaloId === inv.id}
                            className='px-2.5 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-xs font-black inline-flex items-center gap-1 transition-all hover:scale-105 cursor-pointer shadow-xs disabled:opacity-50'
                            title='Gửi hóa đơn Zalo cho phụ huynh'
                          >
                            <Send className='w-3 h-3 text-amber-300' />
                            {sendingZaloId === inv.id ? '...' : 'Zalo'}
                          </button>

                          {onNavigateTab && (
                            <button
                              onClick={() => onNavigateTab('tax-books')}
                              className='p-1.5 text-slate-400 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer'
                              title='Xem trong Sổ Thuế A1 (TT 88)'
                            >
                              <BookOpen className='w-3.5 h-3.5 text-amber-600' />
                            </button>
                          )}

                          <button
                            onClick={() => handleCopyLink(inv)}
                            className='p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer'
                            title='Sao chép link tra cứu trực tuyến'
                          >
                            {copiedCode === inv.lookupCode ? <Check className='w-3.5 h-3.5 text-emerald-600' /> : <Copy className='w-3.5 h-3.5' />}
                          </button>
                        </div>
                      </td>

                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Hóa Đơn Điện Tử Chi Tiết */}
      {selectedInvoice && (
        <ElectronicInvoiceModal
          invoice={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
        />
      )}

    </div>
  )
}
