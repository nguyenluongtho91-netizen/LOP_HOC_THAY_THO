import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns'
import { vi } from 'date-fns/locale'
import type { Role } from '@/types'

export const fmt = (date: string | Date | null | undefined, pattern = 'dd/MM/yyyy'): string =>
  date ? format(new Date(date), pattern, { locale: vi }) : '—'

export const fmtVND = (amount: number | null | undefined): string =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    .format(amount ?? 0)

export const fmtVNDShort = (amount: number | null | undefined): string =>
  new Intl.NumberFormat('vi-VN').format(amount ?? 0) + ' đ'

/** Count working/class days in a month given days-of-week (0=Sun…6=Sat) */
export function countDaysInMonth(year: number, month: number, weekdays: number[] = []): number {
  const days = eachDayOfInterval({
    start: startOfMonth(new Date(year, month - 1)),
    end:   endOfMonth(new Date(year, month - 1)),
  })
  return days.filter(d => weekdays.includes(getDay(d))).length
}

/** Derive planned sessions from schedule string like "2,5" (Thu, Sun) */
export function parseSchedule(scheduleStr: string | null | undefined): number[] {
  if (!scheduleStr) return []
  return scheduleStr.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n))
}

export interface ScheduleDay {
  day: number // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  time: string // e.g. "2h30-4h30"
}

/** Parse Vietnamese user input schedule like "Thứ 2 (18h-20h), Thứ 5 (17h-19h)" */
export function parseScheduleToDays(scheduleStr: string | null | undefined): ScheduleDay[] {
  if (!scheduleStr) return []
  
  const str = scheduleStr.trim().toLowerCase()
  if (!str) return []

  const dayKeywords = [
    { keys: ['chủ nhật', 'chủn nhật', 'cn', 'c.n', 'sunday'], value: 0 },
    { keys: ['thứ 2', 'thứ hai', 't2', 't.2', 'monday'], value: 1 },
    { keys: ['thứ 3', 'thứ ba', 't3', 't.3', 'tuesday'], value: 2 },
    { keys: ['thứ 4', 'thứ tư', 't4', 't.4', 'wednesday'], value: 3 },
    { keys: ['thứ 5', 'thứ năm', 't5', 't.5', 'thursday'], value: 4 },
    { keys: ['thứ 6', 'thứ sáu', 't6', 't.6', 'friday'], value: 5 },
    { keys: ['thứ 7', 'thứ bảy', 't7', 't.7', 'saturday'], value: 6 }
  ]

  interface DayMatch {
    day: number
    index: number
    length: number
  }

  const foundDays: DayMatch[] = []

  for (const group of dayKeywords) {
    for (const key of group.keys) {
      let index = str.indexOf(key)
      while (index !== -1) {
        const isDuplicate = foundDays.some(fd => fd.index <= index && index < fd.index + fd.length)
        if (!isDuplicate) {
          foundDays.push({
            day: group.value,
            index: index,
            length: key.length
          })
        }
        index = str.indexOf(key, index + 1)
      }
    }
  }

  foundDays.sort((a, b) => a.index - b.index)

  const timeRegex = /(\d{1,2}\s*[h:]\s*\d{0,2}\s*(?:-|–|đến)\s*\d{1,2}\s*[h:]\s*\d{0,2})/g
  
  interface TimeMatch {
    time: string
    index: number
    length: number
  }

  const foundTimes: TimeMatch[] = []
  let match
  while ((match = timeRegex.exec(str)) !== null) {
    foundTimes.push({
      time: match[1].trim(),
      index: match.index,
      length: match[1].length
    })
  }

  if (foundTimes.length === 0) {
    return foundDays.map(fd => ({ day: fd.day, time: '' }))
  }

  return foundDays.map((fd, i) => {
    if (foundTimes.length === 1) {
      return { day: fd.day, time: foundTimes[0].time }
    }

    const nextDayIndex = i < foundDays.length - 1 ? foundDays[i + 1].index : Infinity
    const matchingTime = foundTimes.find(ft => ft.index >= fd.index && ft.index < nextDayIndex)

    if (matchingTime) {
      return { day: fd.day, time: matchingTime.time }
    }

    let closestTime = foundTimes[0]
    let minDiff = Math.abs(foundTimes[0].index - fd.index)
    for (const ft of foundTimes) {
      const diff = Math.abs(ft.index - fd.index)
      if (diff < minDiff) {
        minDiff = diff
        closestTime = ft
      }
    }
    return { day: fd.day, time: closestTime ? closestTime.time : '' }
  })
}

interface CalcTuitionParams {
  feePerSession: number
  plannedSessions: number
  absences: number
}

/** Calculate tuition for a student in a class for a given month */
export function calcTuition({ feePerSession, plannedSessions, absences }: CalcTuitionParams): number {
  const attended = Math.max(0, plannedSessions - absences)
  return attended * feePerSession
}

export const roleLabel: Record<Role, string> = {
  ADMIN:   'Quản trị',
  TEACHER: 'Giáo viên',
  TA:      'Trợ giảng',
}

export const statusColor: Record<string, string> = {
  active:   'bg-teal-100 text-teal-800',
  inactive: 'bg-gray-100 text-gray-600',
  paid:     'bg-green-100 text-green-800',
  debt:     'bg-red-100 text-red-700',
}

export function classInitials(name: string | null | undefined): string {
  return name?.split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2) ?? '??'
}

export function generateStudentCode(index: number): string {
  return `HS${String(index).padStart(3, '0')}`
}

export const WEEKDAY_LABELS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'] as const

/** Chuyển họ và tên thành CHỮ IN HOA theo yêu cầu chuẩn hóa của Thầy Thọ */
export function toTitleCase(str: string | null | undefined): string {
  if (!str) return ''
  return str.trim().toUpperCase()
}

/** Loại bỏ dấu tiếng Việt để dùng cho VietQR, SMS, Ngân hàng */
export function removeVietnameseTones(str: string | null | undefined): string {
  if (!str) return ''
  return str
    .normalize('NFD')
    .replace(/\u0300-\u036f/g, '')
    .replace(/[đ]/g, 'd')
    .replace(/[Đ]/g, 'D')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
}

/**
 * Sinh cú pháp chuyển khoản VietQR chuẩn Napas 247: "HP [MÃ_HS] [TÊN HỌC SINH] [LỚP]"
 * Đảm bảo hiển thị tên học sinh khi quét mã QR, đồng thời chứa mã học sinh để ngân hàng tự động gạch nợ.
 */
export function formatVietQRAddInfo(fullName: string, className = '', studentCode = '', monthOrCourse = ''): string {
  const cleanName = removeVietnameseTones(fullName).toUpperCase().trim()

  // Rút gọn tên lớp theo số khối: "Lớp 7A", "7. THẢO NGUYÊN" -> "L7"
  let classTag = ''
  if (className) {
    const m = className.match(/(?:lớp|lop)?\s*(\d+)/i)
    if (m && m[1]) {
      classTag = `L${m[1]}`
    } else {
      const anyNum = className.match(/\d+/)
      classTag = anyNum ? `L${anyNum[0]}` : ''
    }
  }

// Gọn gàng, rõ ràng đầy đủ họ và tên kèm lớp (ví dụ: NGO DUC THANG L7)
  let text = cleanName
  if (classTag) {
    text += ` ${classTag}`
  }

  // Giới hạn độ dài an toàn theo chuẩn ngân hàng Vietcombank (tối đa 50 ký tự)
  return text.substring(0, 45).trim()
}

/**
 * Sinh nội dung chuyển khoản gõ tay ngắn gọn nhất: [TÊN] [LỚP] (Ví dụ: HA GIANG L10, SY MANH L8, TUAN HUY L8)
 * Không chứa mã số học sinh, không chứa chữ "HOC PHI".
 */
export function formatShortTransferContent(fullName: string, className = ''): string {
  const clean = removeVietnameseTones(fullName).toUpperCase().trim()
  const parts = clean.split(/\s+/).filter(Boolean)
  const shortName = parts.length >= 2 ? `${parts[parts.length - 2]} ${parts[parts.length - 1]}` : (parts[0] || 'HS')
  let classTag = ''
  if (className) {
    const m = className.match(/(?:lớp|lop)?\s*(\d+)/i)
    if (m && m[1]) classTag = `L${m[1]}`
  }
  return `${shortName} ${classTag}`.trim()
}

/**
 * Tạo link ảnh mã VietQR chuẩn ngân hàng Vietcombank (tối giản gọn gàng nhất)
 */
export function generateVietQRUrl(amount: number, addInfo: string): string {
  return `https://img.vietqr.io/image/VCB-1070493932-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(addInfo)}`
}

export interface ParentTuitionMessageParams {
  studentName: string
  className?: string
  amount: number
  month?: string
  note?: string
  qrUrl?: string
  shortTransferContent?: string
}

/**
 * Mẫu tin nhắn gửi học phí chuẩn cho Phụ huynh theo yêu cầu của Thầy Thọ
 */
export function formatParentTuitionMessage(params: ParentTuitionMessageParams): string {
  const { studentName, className = '', amount, month, note, qrUrl, shortTransferContent } = params
  const cleanClass = className.replace(/^[Ll][ớỚoO][pP]\s*/, '').trim() || className
  const classLabel = cleanClass ? (cleanClass.toLowerCase().startsWith('lớp') ? cleanClass : `Lớp ${cleanClass}`) : ''
  const shortTransfer = shortTransferContent || formatShortTransferContent(studentName, cleanClass)
  const addInfo = formatVietQRAddInfo(studentName, cleanClass, '', '')
  const finalQrUrl = qrUrl || generateVietQRUrl(amount, addInfo)
  
  let monthText = month
  if (!monthText || monthText === 'Tháng 10' || monthText === 'Tháng 10/2026') {
    if (note && (note.includes('Tháng 8') || note.includes('T8')) && (note.includes('Tháng 9') || note.includes('T9')) && (note.includes('Tháng 10') || note.includes('T10'))) {
      monthText = 'Tháng 8, 9 & 10'
    } else if (note && (note.includes('Tháng 9') || note.includes('T9')) && (note.includes('Tháng 10') || note.includes('T10'))) {
      monthText = 'Tháng 9 & Tháng 10'
    } else if (!monthText) {
      monthText = 'Tháng 10'
    }
  }

  const origin = typeof window !== 'undefined' && window.location?.origin?.includes('http')
    ? window.location.origin
    : 'https://lop-hoc-thay-tho.vercel.app'
  
  const payParams = new URLSearchParams()
  payParams.set('amount', String(amount))
  payParams.set('des', shortTransfer)
  payParams.set('name', studentName)
  if (cleanClass) payParams.set('class', cleanClass)
  if (monthText) payParams.set('month', monthText)
  if (note && note.trim()) payParams.set('note', note.trim())
  const payUrl = `${origin}/pay?${payParams.toString()}`

  return `Kính gửi Quý Phụ huynh em: ${studentName}${classLabel ? ` (${classLabel})` : ''}\n\n`
       + `Thầy xin gửi thông tin học phí ${monthText} của em:\n`
       + `• Số tiền học phí: ${amount.toLocaleString('vi-VN')} đ\n`
       + (note && note.trim() ? `• Chi tiết: ${note.trim()}\n` : '')
       + `\nQuý phụ huynh vui lòng hoàn thành học phí trước 07/10 để Thầy thuận tiện vào sổ sách ạ.\n\n`
       + `Thông tin chuyển khoản:\n`
       + `- Ngân hàng: Vietcombank (VCB)\n`
       + `- Số tài khoản: 1070493932\n`
       + `- Chủ tài khoản: HO KINH DOANH NGUYEN LUONG THO\n`
       + `- Số tiền: ${amount.toLocaleString('vi-VN')} đ\n`
       + `- Nội dung CK: ${shortTransfer}\n\n`
       + `📲 Chuyển khoản trực tiếp qua App ngân hàng:\n`
       + `${payUrl}\n\n`
       + `🔗 Hoặc quét mã QR tại đây:\n`
       + `${finalQrUrl}\n\n`
       + `Thầy cảm ơn Quý Phụ huynh nhiều ạ!`
}

/**
 * Cấu hình học phí đặc biệt theo chỉ đạo của Thầy Thọ
 * Tự động nhận diện qua cả 3 tiêu chí: UUID, Mã Học Sinh, và Tên Học Sinh
 */
export function getSpecialStudentFee(
  studentId?: string,
  classId?: string,
  studentCode?: string,
  studentName?: string,
  className?: string
): { amount: number; note: string; month?: string; isCustom: true } | null {
  const normName = removeVietnameseTones(studentName || '').toLowerCase().trim()
  const code = (studentCode || '').toUpperCase().trim()
  const sid = (studentId || '').trim()
  const cid = (classId || '').trim()
  const cName = (className || '').toUpperCase().trim()

  const isClass8A = cid === '59eb0175-e6ba-45ea-93cd-c2bf6f07644a' || cName.includes('8A')
  const isClass8B = cid === '54d47dd9-0af9-4df3-96b3-4078bb05bf2c' || cName.includes('8B') || cName.includes('HÓA 8') || cName.includes('HOA 8')
  const isClass9A = cid === '165b5023-5c8f-4792-be55-21b88466b2e2' || cName.includes('9A')
  const isClass9B = cid === 'c45ff60b-d498-4a43-9260-38b4a31d1cc0' || cName.includes('9B') || cName.includes('HÓA 9') || cName.includes('HOA 9')
  const isClass7B = cid === 'c37d47a2-d679-4429-8627-001b6099f65e' || cName.includes('7B')
  const isClass10 = cid === 'a584e78a-355f-4398-970b-1d8359a2b241' || cName.includes('10')

  // 1. Nguyễn Sỹ Mạnh (Mã 8008 / 8007H): Lớp 8A gộp Tháng 9 + Tháng 10 cả 2 môn Toán + Hóa = 2.000.000đ; Lớp 8B = 0đ
  if (code === '8008' || code === '8007H' || normName.includes('sy manh') || sid === '16a3cabf-da5e-4b9d-8b3f-d3d155eda6ee' || sid === '649e6598-7cbb-4c0b-8101-67b81a540739') {
    if (isClass8B || code === '8007H' || sid === '649e6598-7cbb-4c0b-8101-67b81a540739') {
      return { amount: 0, note: 'Đã gộp vào Lớp 8A (2.000.000 đ)', isCustom: true }
    }
    return { 
      amount: 2000000, 
      note: 'Gộp 2 tháng (Tháng 9 & Tháng 10) cả 2 môn Toán + Hóa', 
      month: 'Tháng 9 & Tháng 10',
      isCustom: true 
    }
  }

  // 2. Nguyễn Duy Tuấn Huy (Mã 8006 / 8006H): Lớp 8A gộp Toán (720k) + Hóa (400k) = 1.120.000đ; Lớp 8B = 0đ
  if (code === '8006' || code === '8006H' || normName.includes('tuan huy') || sid === 'a21072d4-1ddc-40ab-8bb6-081534ab3ca6' || sid === '4c85bab8-8d95-4761-9bf7-637bc419a9f4') {
    if (isClass8B || code === '8006H' || sid === '4c85bab8-8d95-4761-9bf7-637bc419a9f4') {
      return { amount: 0, note: 'Đã gộp vào Lớp 8A (1.120.000 đ)', isCustom: true }
    }
    return { 
      amount: 1120000, 
      note: 'Gộp Môn Toán (720k) + Môn Hóa (400k)', 
      month: 'Tháng 10',
      isCustom: true 
    }
  }

  // 3. Nguyễn Thị Hạ Giang / Nguyễn Đậu Hà Giang (Mã 1028): Lớp 10 gộp T8 (400k) + T9 (560k) + T10 (720k) = 1.680.000đ
  if (code === '1028' || normName.includes('ha giang') || sid === 'f195c849-bd2c-4321-bcef-3534be7ab183') {
    return { 
      amount: 1680000, 
      note: 'Gộp 3 tháng (Tháng 8, 9 & 10): T8 (400k) + T9 (560k) + T10 (720k)', 
      month: 'Tháng 8, 9 & 10',
      isCustom: true 
    }
  }

  // 4. Đậu Văn Trung / Hoàng Văn Trung (Mã 9008): Lớp 9A gộp 3 tháng = 1.840.000đ
  if (code === '9008' || normName.includes('van trung') || sid === '5b00c0e6-85cc-43ee-b169-ff4fa3ed3ea5') {
    return { 
      amount: 1840000, 
      note: 'Gộp 3 tháng (Tháng 8, 9 & 10): T8 (560k) + T9 (640k) + T10 (640k)', 
      month: 'Tháng 8, 9 & 10',
      isCustom: true 
    }
  }

  // 5. Bùi Thị Thủy Tiên / Trần Thị Thủy Tiên (Mã 9003): Lớp 9A gộp 3 tháng = 1.840.000đ
  if (code === '9003' || normName.includes('thuy tien') || sid === '1398846d-6b15-45b9-9b4b-910c9caac9b5') {
    return { 
      amount: 1840000, 
      note: 'Gộp 3 tháng (Tháng 8, 9 & 10): T8 (560k) + T9 (640k) + T10 (640k)', 
      month: 'Tháng 8, 9 & 10',
      isCustom: true 
    }
  }

  // 6. Nguyễn Hà Linh (Mã 9019): Lớp 9A gộp Toán (640k) + Hóa (400k) = 1.040.000đ; Lớp 9B (Hóa 9) = 0đ
  if (code === '9019' || (normName.includes('ha linh') && (isClass9A || isClass9B || cid === '165b5023-5c8f-4792-be55-21b88466b2e2' || cid === 'c45ff60b-d498-4a43-9260-38b4a31d1cc0')) || sid === 'ec953303-7427-4085-8394-f386f66e6021') {
    if (isClass9B || cid === 'c45ff60b-d498-4a43-9260-38b4a31d1cc0') {
      return { amount: 0, note: 'Đã gộp vào Lớp 9A (1.040.000 đ)', isCustom: true }
    }
    return { 
      amount: 1040000, 
      note: 'Gộp Môn Toán (640k) + Môn Hóa (400k)', 
      month: 'Tháng 10',
      isCustom: true 
    }
  }

  // 7. Trương Thảo Nguyên (Mã 7018): Lớp 7B gộp T9 (560k) + T10 (720k) = 1.280.000đ
  if (code === '7018' || normName.includes('thao nguyen') || sid === '353d699e-90c9-4a47-9722-6ccd49292999' || sid === '742b4148-0134-4c44-a79c-a465ecfcbe87') {
    if (code === '7018' || isClass7B || sid === '353d699e-90c9-4a47-9722-6ccd49292999' || sid === '742b4148-0134-4c44-a79c-a465ecfcbe87') {
      return { 
        amount: 1280000, 
        note: 'Gộp 2 tháng (Tháng 9 & Tháng 10): T9 (560.000 đ) + T10 (720.000 đ)', 
        month: 'Tháng 9 & Tháng 10',
        isCustom: true 
      }
    }
  }

  // 8. Phạm An Nhiên / Trương Quốc An Nhiên (Mã 9011): Lớp 9A gộp T9 (640k) + T10 (640k) = 1.280.000đ
  if (code === '9011' || normName.includes('an nhien') || sid === 'b96d9640-b7e5-41c9-95bd-cc80faae7f34') {
    return { 
      amount: 1280000, 
      note: 'Gộp 2 tháng (Tháng 9 & Tháng 10): T9 (640.000 đ) + T10 (640.000 đ)', 
      month: 'Tháng 9 & Tháng 10',
      isCustom: true 
    }
  }

  // 9. Dương Thị Hiền Thương (Mã 9007): Lớp 9A (8 buổi × 60.000 đ = 480.000 đ)
  if (code === '9007' || normName.includes('hien thuong') || sid === '78c48a31-f5c1-46e2-acd6-e8a1ab5655e6') {
    return { amount: 480000, note: '8 buổi × 60.000 đ = 480.000 đ', isCustom: true }
  }

  // 10. Nguyễn Thị Hà Ly / Hương Ly (Mã 8008H / 8011H): Lớp 8B = 320.000đ
  if (code === '8008H' || code === '8011H' || normName.includes('ha ly') || normName.includes('huong ly') || sid === '797a874e-b4c7-4e86-98c8-ee0a47ba5dee' || sid === '79454ae4-db56-467b-a333-ee8489e75c61') {
    return { amount: 320000, note: 'Học phí Lớp 8B: 320.000 đ', isCustom: true }
  }

  return null
}
