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
  id: string              // MĂ£ Ä‘á»‹nh danh hĂ³a Ä‘Æ¡n, vd: HD26-8F92A1
  invoiceNumber: string   // Sá»‘ hĂ³a Ä‘Æ¡n, vd: HD26-00128
  symbol: string          // KĂ½ hiá»‡u hĂ³a Ä‘Æ¡n, vd: TT/26E
  templateCode: string    // Máº«u sá»‘, vd: 01GTKT0/001
  issueDate: string       // NgĂ y láº­p: ISO string hoáº·c YYYY-MM-DD
  issueDateFormatted: string // NgĂ y DD thĂ¡ng MM nÄƒm YYYY

  // ÄÆ¡n vá»‹ phĂ¡t hĂ nh
  sellerName: string      // Há»˜ KINH DOANH NGUYá»„N LÆ¯Æ NG THá»Œ
  sellerBrand: string     // Lá»P Há»ŒC TOĂN THáº¦Y THá»Œ
  sellerTaxCode: string   // 0108833133
  sellerAddress: string   // Sá»‘ 8 NgĂµ 198 LĂª Trá»ng Táº¥n, P. KhÆ°Æ¡ng Mai, Q. Thanh XuĂ¢n, HĂ  Ná»™i
  sellerHotline: string   // 0345.833.133
  sellerBank: string      // Vietcombank - STK: 1070493932 (Chá»§ TK: NGUYEN LUONG THO)

  // KhĂ¡ch hĂ ng / Há»c sinh
  studentId?: string
  studentName: string
  studentCode?: string
  className?: string
  parentName?: string
  phone?: string

  // Chi tiáº¿t hĂ³a Ä‘Æ¡n
  items: InvoiceItem[]
  totalAmount: number
  totalAmountWords: string
  paymentMethod: string   // Chuyá»ƒn khoáº£n Vietcombank | Tiá»n máº·t
  note?: string

  // KĂ½ sá»‘ Ä‘iá»‡n tá»­
  signedBy: string        // Há»˜ KINH DOANH NGUYá»„N LÆ¯Æ NG THá»Œ
  signedAt: string        // Thá»i gian kĂ½ sá»‘
  lookupCode: string      // MĂ£ tra cá»©u trá»±c tuyáº¿n (dĂ¹ng cho QR & URL)
}

const LOCAL_STORAGE_KEY = '__INVOICES_STORE__'

/**
 * Sinh mĂ£ tra cá»©u hĂ³a Ä‘Æ¡n duy nháº¥t
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
 * Äá»‹nh dáº¡ng ngĂ y theo chuáº©n hĂ³a Ä‘Æ¡n Viá»‡t Nam: "NgĂ y DD thĂ¡ng MM nÄƒm YYYY"
 */
export function formatVietnameseInvoiceDate(dateInput?: string | Date): string {
  const d = dateInput ? new Date(dateInput) : new Date()
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()
  return `NgĂ y ${day} thĂ¡ng ${month} nÄƒm ${year}`
}

/**
 * Khá»Ÿi táº¡o hĂ³a Ä‘Æ¡n Ä‘iá»‡n tá»­ tá»« thĂ´ng tin thanh toĂ¡n hoáº·c há»c phĂ­
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
    ? `Há»c phĂ­ mĂ´n ToĂ¡n - ${params.courseName}`
    : params.className
    ? `Há»c phĂ­ mĂ´n ToĂ¡n - ${params.className}`
    : 'Há»c phĂ­ mĂ´n ToĂ¡n Tháº§y Thá»'

  const items: InvoiceItem[] = [
    {
      stt: 1,
      name: courseTitle,
      unit: 'KhĂ³a / ThĂ¡ng',
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

    sellerName: 'Há»˜ KINH DOANH NGUYá»„N LÆ¯Æ NG THá»Œ',
    sellerBrand: 'Lá»P Há»ŒC TOĂN THáº¦Y THá»Œ',
    sellerTaxCode: '0108833133',
    sellerAddress: 'Sá»‘ 8 NgĂµ 198 LĂª Trá»ng Táº¥n, P. KhÆ°Æ¡ng Mai, Q. Thanh XuĂ¢n, TP. HĂ  Ná»™i',
    sellerHotline: '0345.833.133',
    sellerBank: 'Vietcombank - STK: 1070493932 (Chá»§ TK: NGUYEN LUONG THO)',

    studentName: params.studentName || 'Há»c sinh',
    studentCode: params.studentCode || '',
    className: params.className || '',
    parentName: params.parentName || '',
    phone: params.phone || '',

    items,
    totalAmount: total,
    totalAmountWords: totalWords,
    paymentMethod: params.paymentMethod || 'Chuyá»ƒn khoáº£n Vietcombank',
    note: params.note || 'ÄĂ£ hoĂ n táº¥t thanh toĂ¡n há»c phĂ­',

    signedBy: 'Há»˜ KINH DOANH NGUYá»„N LÆ¯Æ NG THá»Œ',
    signedAt: nowStr,
    lookupCode,
  }
}

/**
 * LÆ°u hĂ³a Ä‘Æ¡n vĂ o LocalStorage & Supabase
 */
export async function saveElectronicInvoice(invoice: ElectronicInvoiceData): Promise<void> {
  // 1. LÆ°u LocalStorage
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
    const map: Record<string, ElectronicInvoiceData> = raw ? JSON.parse(raw) : {}
    map[invoice.lookupCode] = invoice
    map[invoice.id] = invoice
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(map))
  } catch (e) {
    console.error('Lá»—i lÆ°u invoice vĂ o localStorage:', e)
  }

  // 2. LÆ°u vĂ o Supabase Cloud (báº£ng exams)
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
    console.warn('LÆ°u hĂ³a Ä‘Æ¡n lĂªn Supabase chÆ°a thĂ nh cĂ´ng, Ä‘Ă£ lÆ°u LocalStorage an toĂ n:', err)
  }
}

/**
 * Láº¥y thĂ´ng tin hĂ³a Ä‘Æ¡n theo mĂ£ tra cá»©u (lookupCode)
 */
export async function getElectronicInvoice(lookupCode: string): Promise<ElectronicInvoiceData | null> {
  const cleanCode = lookupCode.trim().toUpperCase()

  // 1. Kiá»ƒm tra LocalStorage trÆ°á»›c
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (raw) {
      const map: Record<string, ElectronicInvoiceData> = JSON.parse(raw)
      if (map[cleanCode]) return map[cleanCode]
    }
  } catch {}

  // 2. Kiá»ƒm tra Supabase Cloud
  try {
    const { data: row } = await supabase
      .from('exams')
      .select('data')
      .eq('title', LOCAL_STORAGE_KEY)
      .maybeSingle()

    if (row?.data?.items && typeof row.data.items === 'object') {
      const item = row.data.items[cleanCode]
      if (item) return item
    }
  } catch (e) {
    console.error('Lá»—i tra cá»©u hĂ³a Ä‘Æ¡n tá»« Supabase:', e)
  }

  return null
}