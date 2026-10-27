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

export type ExamCategory = 'homework' | 'chapter' | 'practice' | 'survey'

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

  // Cấu hình rõ ràng từ settings phòng thi
  if (room.settings?.category === 'survey' || room.settings?.type === 'survey') return 'survey'
  if (room.settings?.category === 'chapter' || room.settings?.type === 'chapter') return 'chapter'
  if (room.settings?.category === 'practice' || room.settings?.type === 'practice') return 'practice'
  if (room.settings?.category === 'homework' || room.settings?.type === 'homework') return 'homework'

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
        label: 'BÀI TẬP VỀ NHÀ',
        shortLabel: 'BTVN',
        icon: '🔴',
        tagBg: 'bg-rose-50 text-rose-700 border-rose-200',
        badgeBg: 'bg-rose-600 text-white',
        border: 'border-rose-200',
        accentColor: 'rose',
        antiCheatNotice: '🛡️ BÀI TẬP VỀ NHÀ · CÓ GIÁM SÁT CHUYỂN TAB'
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
