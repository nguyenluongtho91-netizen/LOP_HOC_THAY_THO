// src/lib/numberToWords.ts

const DIGITS = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín']

function readThreeDigitsGroup(n: number, isHighestGroup: boolean): string {
  const hundred = Math.floor(n / 100)
  const remainder = n % 100
  const ten = Math.floor(remainder / 10)
  const unit = remainder % 10

  if (hundred === 0 && ten === 0 && unit === 0) return ''

  const parts: string[] = []

  // Hàng trăm
  if (hundred > 0 || !isHighestGroup) {
    parts.push(DIGITS[hundred] + ' trăm')
  }

  // Hàng chục
  if (ten > 1) {
    parts.push(DIGITS[ten] + ' mươi')
  } else if (ten === 1) {
    parts.push('mười')
  } else if (ten === 0 && unit > 0 && (hundred > 0 || !isHighestGroup)) {
    parts.push('linh')
  }

  // Hàng đơn vị
  if (unit > 0) {
    if (unit === 1 && ten >= 2) {
      parts.push('mốt')
    } else if (unit === 5 && ten >= 1) {
      parts.push('lăm')
    } else {
      parts.push(DIGITS[unit])
    }
  }

  return parts.join(' ')
}

/**
 * Chuyển đổi số tiền thành chữ Tiếng Việt chuẩn hóa đơn tài chính
 * Ví dụ: 600000 -> 'Sáu trăm nghìn đồng chẵn'
 *       1000000 -> 'Một triệu đồng chẵn'
 *       1250000 -> 'Một triệu hai trăm năm mươi nghìn đồng chẵn'
 */
export function numberToVietnameseWords(amount: number | null | undefined): string {
  if (amount == null || isNaN(amount) || amount === 0) {
    return 'Không đồng chẵn'
  }

  const num = Math.floor(Math.abs(amount))
  if (num === 0) return 'Không đồng chẵn'

  const groups: number[] = []
  let temp = num
  while (temp > 0) {
    groups.push(temp % 1000)
    temp = Math.floor(temp / 1000)
  }

  const scales = ['', 'nghìn', 'triệu', 'tỷ', 'nghìn tỷ', 'triệu tỷ']
  const resultWords: string[] = []

  for (let i = groups.length - 1; i >= 0; i--) {
    const groupVal = groups[i]
    if (groupVal === 0) continue

    const isHighest = (i === groups.length - 1)
    const groupText = readThreeDigitsGroup(groupVal, isHighest)
    if (groupText) {
      const scale = scales[i]
      resultWords.push(scale ? (groupText + ' ' + scale) : groupText)
    }
  }

  const full = resultWords.join(' ').replace(/\s+/g, ' ').trim()
  if (!full) return 'Không đồng chẵn'

  const formatted = full.charAt(0).toUpperCase() + full.slice(1)
  return formatted + ' đồng chẵn'
}
