// src/lib/numberToWords.ts

const DIGITS = ['khĂ´ng', 'má»™t', 'hai', 'ba', 'bá»‘n', 'nÄƒm', 'sĂ¡u', 'báº£y', 'tĂ¡m', 'chĂ­n']

function readThreeDigitsGroup(n: number, isHighestGroup: boolean): string {
  const hundred = Math.floor(n / 100)
  const remainder = n % 100
  const ten = Math.floor(remainder / 10)
  const unit = remainder % 10

  if (hundred === 0 && ten === 0 && unit === 0) return ''

  const parts: string[] = []

  // HĂ ng trÄƒm
  if (hundred > 0 || !isHighestGroup) {
    parts.push(DIGITS[hundred] + ' trÄƒm')
  }

  // HĂ ng chá»¥c
  if (ten > 1) {
    parts.push(DIGITS[ten] + ' mÆ°Æ¡i')
  } else if (ten === 1) {
    parts.push('mÆ°á»i')
  } else if (ten === 0 && unit > 0 && (hundred > 0 || !isHighestGroup)) {
    parts.push('linh')
  }

  // HĂ ng Ä‘Æ¡n vá»‹
  if (unit > 0) {
    if (unit === 1 && ten >= 2) {
      parts.push('má»‘t')
    } else if (unit === 5 && ten >= 1) {
      parts.push('lÄƒm')
    } else {
      parts.push(DIGITS[unit])
    }
  }

  return parts.join(' ')
}

/**
 * Chuyá»ƒn Ä‘á»•i sá»‘ tiá»n thĂ nh chá»¯ Tiáº¿ng Viá»‡t chuáº©n hĂ³a Ä‘Æ¡n tĂ i chĂ­nh
 * VĂ­ dá»¥: 600000 -> 'SĂ¡u trÄƒm nghĂ¬n Ä‘á»“ng cháºµn'
 *       1000000 -> 'Má»™t triá»‡u Ä‘á»“ng cháºµn'
 *       1250000 -> 'Má»™t triá»‡u hai trÄƒm nÄƒm mÆ°Æ¡i nghĂ¬n Ä‘á»“ng cháºµn'
 */
export function numberToVietnameseWords(amount: number | null | undefined): string {
  if (amount == null || isNaN(amount) || amount === 0) {
    return 'KhĂ´ng Ä‘á»“ng cháºµn'
  }

  const num = Math.floor(Math.abs(amount))
  if (num === 0) return 'KhĂ´ng Ä‘á»“ng cháºµn'

  const groups: number[] = []
  let temp = num
  while (temp > 0) {
    groups.push(temp % 1000)
    temp = Math.floor(temp / 1000)
  }

  const scales = ['', 'nghĂ¬n', 'triá»‡u', 'tá»·', 'nghĂ¬n tá»·', 'triá»‡u tá»·']
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
  if (!full) return 'KhĂ´ng Ä‘á»“ng cháºµn'

  const formatted = full.charAt(0).toUpperCase() + full.slice(1)
  return formatted + ' Ä‘á»“ng cháºµn'
}