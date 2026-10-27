/**
 * Tiện ích phân loại 3 phần bài thi:
 * 1. Bài Tập Về Nhà (homework): Bắt buộc hoàn thành, cảnh báo khi chưa nộp, có giám sát chống gian lận
 * 2. Luyện Đề Chương (chapter): Ôn tập củng cố theo chương/chuyên đề, tự do tra cứu, không phạt chuyển tab
 * 3. Luyện Đề (practice): Đề thi thử, đề tổng hợp ôn thi, tự do tra cứu, không phạt chuyển tab
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

export type ExamCategory = 'homework' | 'chapter' | 'practice'

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
 * Phân loại bài thi vào đúng 1 trong 3 phần:
 * - 'homework': Bài Tập Về Nhà
 * - 'chapter': Luyện Đề Chương
 * - 'practice': Luyện Đề
 */
export function getExamCategory(room: any): ExamCategory {
  if (!room) return 'homework'

  // Nếu trong settings có chỉ định rõ ràng
  if (room.settings?.category === 'chapter' || room.settings?.type === 'chapter') return 'chapter'
  if (room.settings?.category === 'practice' || room.settings?.type === 'practice') return 'practice'
  if (room.settings?.category === 'homework' || room.settings?.type === 'homework') return 'homework'

  const className = room.classes?.class_name || room.classes?.name || ''
  const title = room.exams?.title || room.room_name || room.name || room.title || (room as any).examTitle || ''
  const combined = normalizeVietnamese(`${className} ${title}`)

  // 1. Kiểm tra Luyện Đề Theo Chương / Chuyên đề
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

  // 2. Kiểm tra Luyện Đề (Đề tổng hợp, thi thử, lớp luyện đề)
  const PRACTICE_KEYWORDS = [
    'luyen de', 'luyện đề',
    'thi thu', 'thi thử',
    'de on', 'đề ôn',
    'on thi', 'ôn thi',
    'luyen thi', 'luyện thi',
    'tu luyen', 'tự luyện',
    'khao sat', 'khảo sát',
    'tot nghiep', 'tốt nghiệp',
    'thpt', 'vao 10', 'vào 10'
  ]
  if (PRACTICE_KEYWORDS.some(kw => combined.includes(normalizeVietnamese(kw)))) {
    return 'practice'
  }

  // 3. Mặc định là Bài Tập Về Nhà (bắt buộc hoàn thành)
  return 'homework'
}

/**
 * Kiểm tra xem phòng thi có phải thuộc diện tự do ôn luyện (không cảnh báo gian lận) hay không.
 * Cả Luyện Đề Chương và Luyện Đề Thi đều là chế độ tự do, không phạt chuyển tab!
 */
export function isPracticeExam(room: any): boolean {
  if (!room) return false

  // Cấu hình rõ ràng từ phòng thi
  if (room.settings?.antiCheat === false) return true
  if (room.settings?.isPractice === true || room.settings?.is_practice === true) return true

  const category = getExamCategory(room)
  return category === 'chapter' || category === 'practice'
}

export function getCategoryMeta(category: ExamCategory) {
  switch (category) {
    case 'homework':
      return {
        label: 'Bài Tập Về Nhà',
        shortLabel: 'BTVN',
        icon: '🔴',
        tagBg: 'bg-rose-50 text-rose-700 border-rose-200',
        badgeBg: 'bg-rose-600 text-white',
        border: 'border-rose-200',
        accentColor: 'rose',
        antiCheatNotice: '🛡️ BTVN Bắt Buộc · Có giám sát chuyển tab'
      }
    case 'chapter':
      return {
        label: 'Luyện Đề Chương',
        shortLabel: 'Đề Chương',
        icon: '📘',
        tagBg: 'bg-blue-50 text-blue-700 border-blue-200',
        badgeBg: 'bg-blue-600 text-white',
        border: 'border-blue-200',
        accentColor: 'blue',
        antiCheatNotice: '📚 Luyện Chương Tự Do · Thoải mái tra cứu tài liệu'
      }
    case 'practice':
      return {
        label: 'Luyện Đề Thi',
        shortLabel: 'Luyện Đề',
        icon: '🎯',
        tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        badgeBg: 'bg-emerald-600 text-white',
        border: 'border-emerald-200',
        accentColor: 'emerald',
        antiCheatNotice: '🎯 Đề Luyện Thi Tự Do · Không giới hạn chuyển tab'
      }
  }
}
