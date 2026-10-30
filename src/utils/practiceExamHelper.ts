/**
 * Tiện ích phân loại 4 phòng thi trực tuyến:
 * 1. BÀI TẬP VỀ NHÀ (homework): Có giám sát chuyển tab
 * 2. LUYỆN ĐỀ THEO CHƯƠNG (chapter): Có giám sát chuyển tab
 * 3. LUYỆN ĐỀ THI (practice): Có giám sát chuyển tab
 * 4. KHẢO SÁT CHẤT LƯỢNG (survey): Có giám sát chuyển tab
 *
 * LƯU Ý QUY CHUẨN:
 * - Tất cả tên phòng thi đều viết bằng CHỮ IN HOA
 * - Không sử dụng các từ "bắt buộc" hoặc "tự do"
 * - Tất cả các phòng thi đều có hệ thống giám sát và cảnh báo chuyển tab
 */

export function normalizeVietnamese(str: string): string {
  if (!str) return ''
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .trim()
}

export type ExamCategory = 'homework' | 'basic' | 'advanced' | 'mock' | 'topic' | 'material' | 'chapter' | 'practice' | 'survey'

/**
 * Kiểm tra tên lớp có phải là Lớp Khảo Sát Chất Lượng hay không
 */
export function isSurveyClassName(className?: string | null): boolean {
  if (!className) return false
  const normalized = normalizeVietnamese(className)
  const keywords = ['khao sat', 'khảo sát', 'kscl', 'danh gia', 'đánh giá', 'nang luc', 'năng lực', 'dgnl']
  return keywords.some(kw => normalized.includes(normalizeVietnamese(kw)))
}

/**
 * Kiểm tra tên lớp có phải là Lớp Luyện Đề hay không
 */
export function isPracticeClassName(className?: string | null): boolean {
  if (!className) return false
  const normalized = normalizeVietnamese(className)
  const keywords = ['luyen de', 'luyện đề', 'on luyen', 'ôn luyện', 'luyen thi', 'luyện thi', 'tu luyen', 'tự luyện', 'de on', 'đề ôn', 'on thi', 'ôn thi']
  return keywords.some(kw => normalized.includes(normalizeVietnamese(kw)))
}

/**
 * Kiểm tra tên lớp có phải là Lớp Luyện Theo Chương hay không
 */
export function isChapterClassName(className?: string | null): boolean {
  if (!className) return false
  const normalized = normalizeVietnamese(className)
  const keywords = ['chuong', 'chương', 'chuyen de', 'chuyên đề', 'chu de', 'chủ đề']
  return keywords.some(kw => normalized.includes(normalizeVietnamese(kw)))
}

/**
 * Phân loại bài thi vào đúng 1 trong 4 phòng thi:
 * - 'homework': BÀI TẬP VỀ NHÀ
 * - 'chapter': LUYỆN ĐỀ THEO CHƯƠNG
 * - 'practice': LUYỆN ĐỀ THI
 * - 'survey': KHẢO SÁT CHẤT LƯỢNG
 */
export function getExamCategory(room: any): ExamCategory {
  if (!room) return 'homework'

  // Cấu hình rõ ràng từ settings phòng thi (Hỗ trợ 6 mục chuẩn theo yêu cầu Thầy Thọ)
  const cat = room.settings?.category || room.settings?.type
  if (cat === 'homework') return 'homework'
  if (cat === 'basic') return 'basic'
  if (cat === 'advanced') return 'advanced'
  if (cat === 'mock') return 'mock'
  if (cat === 'topic') return 'topic'
  if (cat === 'material') return 'material'
  if (cat === 'survey') return 'mock'
  if (cat === 'chapter') return 'topic'
  if (cat === 'practice') return 'basic'

  const className = room.classes?.class_name || room.classes?.name || ''
  const title = room.exams?.title || room.room_name || room.name || room.title || (room as any).examTitle || ''
  const combined = normalizeVietnamese(`${className} ${title}`)

  // 1. Kiểm tra KHẢO SÁT CHẤT LƯỢNG
  const SURVEY_KEYWORDS = [
    'khao sat', 'khảo sát',
    'kscl', 'danh gia nang luc',
    'đánh giá năng lực', 'dgnl',
    'khao sat chat luong', 'khảo sát chất lượng',
    'thi khao sat', 'thi khảo sát'
  ]
  if (SURVEY_KEYWORDS.some(kw => combined.includes(normalizeVietnamese(kw)))) {
    return 'survey'
  }

  // 2. Kiểm tra LUYỆN ĐỀ THEO CHƯƠNG / CHUYÊN ĐỀ
  const CHAPTER_KEYWORDS = [
    'chuong', 'chương',
    'chuyen de', 'chuyên đề',
    'chu de', 'chủ đề',
    'on tap chuong', 'ôn tập chương',
    'luyen chuong', 'luyện chương',
    'de chuong', 'đề chương'
  ]
  if (CHAPTER_KEYWORDS.some(kw => combined.includes(normalizeVietnamese(kw)))) {
    return 'chapter'
  }

  // 3. Kiểm tra LUYỆN ĐỀ THI (Đề tổng hợp, thi thử)
  const PRACTICE_KEYWORDS = [
    'luyen de', 'luyện đề',
    'thi thu', 'thi thử',
    'de on', 'đề ôn',
    'on thi', 'ôn thi',
    'luyen thi', 'luyện thi',
    'tu luyen', 'tự luyện',
    'tot nghiep', 'tốt nghiệp',
    'thpt', 'vao 10', 'vào 10'
  ]
  if (PRACTICE_KEYWORDS.some(kw => combined.includes(normalizeVietnamese(kw)))) {
    return 'practice'
  }

  // 4. Mặc định là BÀI TẬP VỀ NHÀ
  return 'homework'
}

/**
 * Kiểm tra xem phòng thi có tắt giám sát hay không.
 * Theo yêu cầu mới: TẤT CẢ các phòng thi đều có giám sát và cảnh báo chuyển tab.
 * Chỉ tắt khi có cờ tường minh `settings.antiCheat === false`.
 */
export function isPracticeExam(room: any): boolean {
  if (!room) return false
  return room.settings?.antiCheat === false
}

export function getCategoryMeta(category: ExamCategory) {
  switch (category) {
    case 'homework':
      return {
        label: '1. ĐỀ THI & BÀI TẬP (BẮT BUỘC)',
        shortLabel: 'ĐỀ BẮT BUỘC',
        icon: '📝',
        tagBg: 'bg-amber-50 text-amber-800 border-amber-300',
        badgeBg: 'bg-amber-600 text-white',
        border: 'border-amber-300',
        accentColor: 'amber',
        antiCheatNotice: '📝 ĐỀ THI & BÀI TẬP NỘP CHO THẦY'
      }
    case 'basic':
      return {
        label: '2. RÈN LUYỆN CƠ BẢN',
        shortLabel: 'CƠ BẢN',
        icon: '🎯',
        tagBg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
        badgeBg: 'bg-emerald-600 text-white',
        border: 'border-emerald-300',
        accentColor: 'emerald',
        antiCheatNotice: '🎯 BÀI TẬP RÈN LUYỆN CƠ BẢN'
      }
    case 'advanced':
      return {
        label: '3. RÈN LUYỆN NÂNG CAO',
        shortLabel: 'NÂNG CAO',
        icon: '🔥',
        tagBg: 'bg-rose-50 text-rose-800 border-rose-300',
        badgeBg: 'bg-rose-600 text-white',
        border: 'border-rose-300',
        accentColor: 'rose',
        antiCheatNotice: '🔥 BÀI TẬP RÈN LUYỆN NÂNG CAO'
      }
    case 'mock':
      return {
        label: '4. ĐỀ THI THỬ & KHẢO SÁT',
        shortLabel: 'THI THỬ',
        icon: '🏆',
        tagBg: 'bg-cyan-50 text-cyan-800 border-cyan-300',
        badgeBg: 'bg-cyan-600 text-white',
        border: 'border-cyan-300',
        accentColor: 'cyan',
        antiCheatNotice: '🏆 ĐỀ THI THỬ & KHẢO SÁT CHẤT LƯỢNG'
      }
    case 'topic':
      return {
        label: '5. LUYỆN CÁC CHUYÊN ĐỀ',
        shortLabel: 'CHUYÊN ĐỀ',
        icon: '🧪',
        tagBg: 'bg-indigo-50 text-indigo-800 border-indigo-300',
        badgeBg: 'bg-indigo-600 text-white',
        border: 'border-indigo-300',
        accentColor: 'indigo',
        antiCheatNotice: '🧪 LUYỆN CHUYÊN ĐỀ 3 DẠNG THỨC BỘ GD&ĐT'
      }
    case 'material':
      return {
        label: '6. TÀI LIỆU THAM KHẢO',
        shortLabel: 'TÀI LIỆU',
        icon: '📚',
        tagBg: 'bg-purple-50 text-purple-800 border-purple-300',
        badgeBg: 'bg-purple-600 text-white',
        border: 'border-purple-300',
        accentColor: 'purple',
        antiCheatNotice: '📚 TÀI LIỆU THAM KHẢO & ĐỀ ÔN TẬP'
      }
    case 'chapter':
      return {
        label: 'LUYỆN ĐỀ THEO CHƯƠNG',
        shortLabel: 'ĐỀ CHƯƠNG',
        icon: '📘',
        tagBg: 'bg-blue-50 text-blue-700 border-blue-200',
        badgeBg: 'bg-blue-600 text-white',
        border: 'border-blue-200',
        accentColor: 'blue',
        antiCheatNotice: '📘 LUYỆN ĐỀ THEO CHƯƠNG · CÓ GIÁM SÁT CHUYỂN TAB'
      }
    case 'practice':
      return {
        label: 'LUYỆN ĐỀ THI',
        shortLabel: 'LUYỆN ĐỀ',
        icon: '🎯',
        tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        badgeBg: 'bg-emerald-600 text-white',
        border: 'border-emerald-200',
        accentColor: 'emerald',
        antiCheatNotice: '🎯 LUYỆN ĐỀ THI · CÓ GIÁM SÁT CHUYỂN TAB'
      }
    case 'survey':
      return {
        label: 'KHẢO SÁT CHẤT LƯỢNG',
        shortLabel: 'KHẢO SÁT',
        icon: '🟣',
        tagBg: 'bg-purple-50 text-purple-700 border-purple-200',
        badgeBg: 'bg-purple-600 text-white',
        border: 'border-purple-200',
        accentColor: 'purple',
        antiCheatNotice: '🟣 KHẢO SÁT CHẤT LƯỢNG · CÓ GIÁM SÁT CHUYỂN TAB'
      }
  }
}
