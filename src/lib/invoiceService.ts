// src/lib/invoiceService.ts
import { supabase } from './supabase'
import { numberToVietnameseWords } from './numberToWords'

export interface InvoiceItem {
  stt: number
  name: string
  unit: string
  quantity: number
  unitPrice: number
  amount: number
}

export interface ElectronicInvoiceData {
  id: string              // Mã định danh hóa đơn, vd: HD26-8F92A1
  invoiceNumber: string   // Số hóa đơn, vd: HD26-00128
  symbol: string          // Ký hiệu hóa đơn, vd: TT/26E
  templateCode: string    // Mẫu số, vd: 01GTKT0/001
  issueDate: string       // Ngày lập: ISO string hoặc YYYY-MM-DD
  issueDateFormatted: string // Ngày DD tháng MM năm YYYY

  // Đơn vị phát hành
  sellerName: string      // HỘ KINH DOANH NGUYỄN LƯƠNG THỌ
  sellerBrand: string     // LỚP HỌC TOÁN THẦY THỌ
  sellerTaxCode: string   // 0108833133
  sellerAddress: string   // Số nhà 10, Ngõ 32 Hồ Phi Chấn, Phường Thành Sen, TP. Hà Tĩnh
  sellerHotline: string   // 0345.833.133
  sellerBank: string      // Vietcombank - STK: 1070493932 (Chủ TK: NGUYEN LUONG THO)

  // Khách hàng / Học sinh
  studentId?: string
  studentName: string
  studentCode?: string
  className?: string
  parentName?: string
  phone?: string

  // Chi tiết hóa đơn
  items: InvoiceItem[]
  totalAmount: number
  totalAmountWords: string
  paymentMethod: string   // Chuyển khoản Vietcombank | Tiền mặt
  note?: string

  // Ký số điện tử
  signedBy: string        // HỘ KINH DOANH NGUYỄN LƯƠNG THỌ
  signedAt: string        // Thời gian ký số
  lookupCode: string      // Mã tra cứu trực tuyến (dùng cho QR & URL)
}

const LOCAL_STORAGE_KEY = '__INVOICES_STORE__'

/**
 * Sinh mã tra cứu hóa đơn duy nhất
 */
export function generateInvoiceLookupCode(seed?: string): string {
  const yearSuffix = new Date().getFullYear().toString().slice(-2) // "26"
  if (seed) {
    let hash = 0
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i)
      hash |= 0
    }
    const hex = Math.abs(hash).toString(16).toUpperCase().padStart(6, '0').slice(0, 6)
    return `HD${yearSuffix}-${hex}`
  }
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `HD${yearSuffix}-${randomPart}`
}

/**
 * Định dạng ngày theo chuẩn hóa đơn Việt Nam: "Ngày DD tháng MM năm YYYY"
 */
export function formatVietnameseInvoiceDate(dateInput?: string | Date): string {
  const d = dateInput ? new Date(dateInput) : new Date()
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()
  return `Ngày ${day} tháng ${month} năm ${year}`
}

/**
 * Khởi tạo hóa đơn điện tử từ thông tin thanh toán hoặc học phí
 */
export function buildElectronicInvoice(params: {
  id?: string
  studentName: string
  studentCode?: string
  className?: string
  parentName?: string
  phone?: string
  amount: number
  courseName?: string
  paymentMethod?: string
  note?: string
  date?: string | Date
}): ElectronicInvoiceData {
  const dateObj = params.date ? new Date(params.date) : new Date()
  const lookupCode = params.id || generateInvoiceLookupCode(params.studentCode || params.studentName + dateObj.getTime())
  const total = Number(params.amount) || 0
  const totalWords = numberToVietnameseWords(total)

  const courseTitle = params.courseName
    ? `Học phí môn Toán - ${params.courseName}`
    : params.className
    ? `Học phí môn Toán - ${params.className}`
    : 'Học phí môn Toán Thầy Thọ'

  const items: InvoiceItem[] = [
    {
      stt: 1,
      name: courseTitle,
      unit: 'Khóa / Tháng',
      quantity: 1,
      unitPrice: total,
      amount: total,
    }
  ]

  const nowStr = dateObj.toLocaleString('vi-VN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  })

  return {
    id: lookupCode,
    invoiceNumber: lookupCode,
    symbol: 'TT/26E',
    templateCode: '01GTKT0/001',
    issueDate: dateObj.toISOString(),
    issueDateFormatted: formatVietnameseInvoiceDate(dateObj),

    sellerName: 'HỘ KINH DOANH NGUYỄN LƯƠNG THỌ',
    sellerBrand: 'LỚP HỌC TOÁN THẦY THỌ',
    sellerTaxCode: '0108833133',
    sellerAddress: 'Số nhà 10, Ngõ 32 Hồ Phi Chấn, Phường Thành Sen, TP. Hà Tĩnh',
    sellerHotline: '0345.833.133',
    sellerBank: 'Vietcombank - STK: 1070493932 (Chủ TK: NGUYEN LUONG THO)',

    studentName: params.studentName || 'Học sinh',
    studentCode: params.studentCode || '',
    className: params.className || '',
    parentName: params.parentName || '',
    phone: params.phone || '',

    items,
    totalAmount: total,
    totalAmountWords: totalWords,
    paymentMethod: params.paymentMethod || 'Chuyển khoản Vietcombank',
    note: params.note || 'Đã hoàn tất thanh toán học phí',

    signedBy: 'HỘ KINH DOANH NGUYỄN LƯƠNG THỌ',
    signedAt: nowStr,
    lookupCode,
  }
}

/**
 * Lưu hóa đơn vào LocalStorage & Supabase
 */
export async function saveElectronicInvoice(invoice: ElectronicInvoiceData): Promise<void> {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
    const map: Record<string, ElectronicInvoiceData> = raw ? JSON.parse(raw) : {}
    map[invoice.lookupCode] = invoice
    map[invoice.id] = invoice
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(map))
  } catch (e) {
    console.error('Lỗi lưu invoice vào localStorage:', e)
  }

  try {
    const { data: existing } = await supabase
      .from('exams')
      .select('id, data')
      .eq('title', LOCAL_STORAGE_KEY)
      .maybeSingle()

    let items: Record<string, ElectronicInvoiceData> = {}
    if (existing?.data?.items && typeof existing.data.items === 'object') {
      items = existing.data.items
    }
    items[invoice.lookupCode] = invoice
    items[invoice.id] = invoice

    if (existing?.id) {
      await supabase
        .from('exams')
        .update({ data: { items } })
        .eq('id', existing.id)
    } else {
      await supabase
        .from('exams')
        .insert({
          title: LOCAL_STORAGE_KEY,
          data: { items }
        })
    }
  } catch (err) {
    console.warn('Lưu hóa đơn lên Supabase chưa thành công, đã lưu LocalStorage an toàn:', err)
  }
}

/**
 * Lấy thông tin hóa đơn theo mã tra cứu (lookupCode)
 */
export async function getElectronicInvoice(lookupCode: string): Promise<ElectronicInvoiceData | null> {
  const cleanCode = lookupCode.trim().toUpperCase()

  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (raw) {
      const map: Record<string, ElectronicInvoiceData> = JSON.parse(raw)
      if (map[cleanCode]) return map[cleanCode]
    }
  } catch {}

  try {
    const { data: row } = await supabase
      .from('exams')
      .select('data')
      .eq('title', LOCAL_STORAGE_KEY)
      .maybeSingle()

    if (row?.data?.items && typeof row.data.items === 'object') {
      const item = row.data.items[cleanCode]
      if (item) {
        if (!item.sellerAddress || item.sellerAddress.includes('Lê Trọng Tấn')) {
          item.sellerAddress = 'Số nhà 10, Ngõ 32 Hồ Phi Chấn, Phường Thành Sen, TP. Hà Tĩnh'
        }
        return item
      }
    }
  } catch (e) {
    console.error('Lỗi tra cứu hóa đơn từ Supabase:', e)
  }

  return null
}
