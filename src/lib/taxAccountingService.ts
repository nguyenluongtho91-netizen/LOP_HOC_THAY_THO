// src/lib/taxAccountingService.ts
import { supabase } from './supabase'

export type ExpenseCategory = 'printing' | 'salary' | 'utilities' | 'software' | 'rent' | 'other'

export const EXPENSE_CATEGORIES: Record<ExpenseCategory, { label: string; col: 'labor' | 'materials' | 'services' | 'other' }> = {
  printing:  { label: 'In ấn đề thi, phiếu bài tập & sách giáo trình', col: 'materials' },
  salary:    { label: 'Thù lao trợ giảng & chấm bài kiểm tra',          col: 'labor' },
  utilities: { label: 'Tiền điện nước, vệ sinh phòng học',              col: 'services' },
  software:  { label: 'Phần mềm dạy học Zoom, Zalo Robot & server',    col: 'services' },
  rent:      { label: 'Mặt bằng phòng học & cơ sở vật chất',            col: 'services' },
  other:     { label: 'Văn phòng phẩm (bút, phấn, bảng vẽ) & chi khác', col: 'other' },
}

export interface ExpenseRecord {
  id: string              // e.g. "EXP-2601-A1"
  voucherNo: string       // Số phiếu chi, e.g. "PC26-001"
  date: string            // YYYY-MM-DD
  category: ExpenseCategory
  description: string     // Chi in ấn tài liệu tuần 15
  recipient: string       // Nhà in / Người nhận
  amount: number
  paymentMethod: 'cash' | 'transfer'
  note?: string
  createdAt: string
}

const STORAGE_KEY = '__EXPENSES_STORE__'

const DEFAULT_EXPENSES: ExpenseRecord[] = [
  {
    id: 'EXP-DEFAULT-01',
    voucherNo: 'PC26-001',
    date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString().substring(0, 10),
    category: 'printing',
    description: 'In ấn tài liệu Chuyên đề Toán & Phiếu kiểm tra định kỳ Tuần 15',
    recipient: 'Nhà in & photocopy Hà Nội',
    amount: 1450000,
    paymentMethod: 'transfer',
    note: 'In ấn phục vụ học sinh các lớp 6, 7, 9',
    createdAt: new Date().toISOString()
  },
  {
    id: 'EXP-DEFAULT-02',
    voucherNo: 'PC26-002',
    date: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString().substring(0, 10),
    category: 'salary',
    description: 'Chi thù lao trợ giảng phụ đạo và chấm bài tự luận học sinh',
    recipient: 'Trợ giảng lớp Toán',
    amount: 2500000,
    paymentMethod: 'transfer',
    note: 'Thù lao hỗ trợ các buổi học',
    createdAt: new Date().toISOString()
  },
  {
    id: 'EXP-DEFAULT-03',
    voucherNo: 'PC26-003',
    date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().substring(0, 10),
    category: 'utilities',
    description: 'Tiền mạng internet cáp quang & điện nước phục vụ phòng học',
    recipient: 'VNPT / Điện lực',
    amount: 780000,
    paymentMethod: 'transfer',
    note: 'Hóa đơn dịch vụ tháng',
    createdAt: new Date().toISOString()
  }
]

/**
 * Tải danh sách chi phí từ LocalStorage & Supabase
 */
export async function loadExpenses(): Promise<ExpenseRecord[]> {
  let localList: ExpenseRecord[] = []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) localList = JSON.parse(raw)
  } catch {}

  try {
    const { data: row } = await supabase
      .from('exams')
      .select('data')
      .eq('title', STORAGE_KEY)
      .maybeSingle()

    if (row?.data?.items && Array.isArray(row.data.items)) {
      const cloudList: ExpenseRecord[] = row.data.items
      // Gộp cloud với local, ưu tiên id
      const map = new Map<string, ExpenseRecord>()
      cloudList.forEach(e => map.set(e.id, e))
      localList.forEach(e => map.set(e.id, e))
      const merged = Array.from(map.values())
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
      return merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }
  } catch (err) {
    console.warn('Lỗi tải chi phí từ Supabase, dùng local:', err)
  }

  if (localList.length > 0) {
    return localList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  // Khởi tạo mặc định nếu chưa có
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_EXPENSES))
    void saveExpenses(DEFAULT_EXPENSES)
  } catch {}

  return DEFAULT_EXPENSES
}

/**
 * Lưu danh sách chi phí vào LocalStorage & Supabase
 */
export async function saveExpenses(expenses: ExpenseRecord[]): Promise<void> {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
  } catch {}

  try {
    const { data: existing } = await supabase
      .from('exams')
      .select('id')
      .eq('title', STORAGE_KEY)
      .maybeSingle()

    if (existing?.id) {
      await supabase
        .from('exams')
        .update({ data: { items: expenses } })
        .eq('id', existing.id)
    } else {
      await supabase
        .from('exams')
        .insert({
          title: STORAGE_KEY,
          data: { items: expenses }
        })
    }
  } catch (err) {
    console.error('Lỗi lưu chi phí lên Supabase:', err)
  }
}
