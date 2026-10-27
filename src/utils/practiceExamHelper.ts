/**
 * Tiện ích nhận diện Lớp Luyện Đề & Đề Thi Luyện Đề
 * Giúp tự động tắt cảnh báo gian lận và hiển thị khu vực Luyện Đề riêng biệt
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

const PRACTICE_KEYWORDS = [
  'luyen de',
  'luyện đề',
  'on luyen',
  'ôn luyện',
  'luyen thi',
  'luyện thi',
  'tu luyen',
  'tự luyện',
  'de on',
  'đề ôn',
  'on thi',
  'ôn thi'
]

/**
 * Kiểm tra tên lớp có phải là Lớp Luyện Đề hay không
 */
export function isPracticeClassName(className?: string | null): boolean {
  if (!className) return false
  const normalized = normalizeVietnamese(className)
  return PRACTICE_KEYWORDS.some(kw => normalized.includes(normalizeVietnamese(kw)))
}

/**
 * Kiểm tra phòng thi hoặc bài thi có thuộc diện Luyện Đề hay không
 * Nếu thuộc diện này:
 * 1. Tuyệt đối KHÔNG cảnh báo chuyển tab / không phạt học sinh
 * 2. Hiển thị ở mục Lớp Luyện Đề riêng biệt để học sinh theo dõi bài và điểm
 */
export function isPracticeExam(room: any): boolean {
  if (!room) return false

  // Cấu hình rõ ràng từ phòng thi
  if (room.settings?.antiCheat === false) return true
  if (room.settings?.isPractice === true || room.settings?.is_practice === true) return true

  // Kiểm tra tên lớp học
  const className = room.classes?.class_name || room.classes?.name || ''
  if (isPracticeClassName(className)) return true

  // Kiểm tra tên đề thi hoặc tên phòng
  const title = room.exams?.title || room.room_name || room.name || room.title || (room as any).examTitle || ''
  if (title) {
    const normalizedTitle = normalizeVietnamese(title)
    if (PRACTICE_KEYWORDS.some(kw => normalizedTitle.includes(normalizeVietnamese(kw)))) {
      return true
    }
  }

  return false
}
