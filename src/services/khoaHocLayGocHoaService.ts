// src/services/khoaHocLayGocHoaService.ts
// KHÓA HỌC: LẤY GỐC HÓA HỌC NỀN TẢNG (9 CHUYÊN ĐỀ BỨT PHÁ)
// Biên soạn: Thầy Nguyễn Lương Thọ (1991)
// Đáp ứng chuẩn xác 100% kiến thức SGK GDPT 2018

export interface KhoaHocHoaQuestion {
  id: number;
  question: string;
  mathExpression?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface KhoaHocHoaExam {
  id: string;
  examNo: number;
  title: string;
  shortTitle: string;
  icon: string;
  desc: string;
  questions: KhoaHocHoaQuestion[];
}

function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function makeOptions(correct: string, distractors: string[], seed: number): string[] {
  const correctStr = String(correct).trim();
  const uniqueDistractors = Array.from(new Set(distractors.map(d => String(d).trim()).filter(d => d !== correctStr)));
  while (uniqueDistractors.length < 3) {
    uniqueDistractors.push(`Phương án ${uniqueDistractors.length + 1}`);
  }
  const all = [correctStr, ...uniqueDistractors.slice(0, 3)];
  return all.sort((a, b) => seededRandom(seed + a.length + 17) - 0.5);
}

export const KHOA_HOC_HOA_META = {
  id: 'khoa-hoc-lay-goc-hoa',
  title: 'KHÓA HỌC: LẤY GỐC HÓA HỌC NỀN TẢNG (9 ĐỀ TOÀN DIỆN)',
  subtitle: 'Lộ trình 9 chuyên đề then chốt: Kí hiệu, Nguyên tử khối, Phân tử khối, Hóa trị, CTHH, Phân loại Oxide/Acid/Base/Muối/Lưỡng tính & Bảng tính tan.',
  teacher: 'Thầy Nguyễn Lương Thọ (1991)',
  phone: '0345.833.133',
  gradeBadge: 'Lớp 8 - 12 (Ôn Thi THPT & ĐGNL)',
  totalExams: 9,
  questionsPerExam: 20,
  totalQuestions: 180
};

export const KHOA_HOC_HOA_EXAMS: KhoaHocHoaExam[] = [
  {
    id: 'de_1',
    examNo: 1,
    title: 'Đề 1: Nhận Biết Tên Nguyên Tố Từ Kí Hiệu Hóa Học',
    shortTitle: 'Đề 1: Kí Hiệu ➔ Tên Nguyên Tố',
    icon: '🔤',
    desc: 'Cho kí hiệu hóa học (Fe, Cu, Al, Na, K, Ba, Cr...), chọn tên nguyên tố tương ứng (chuẩn tên SGK mới IUPAC & tên Việt quen thuộc).',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Kí hiệu hóa học \'Fe\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Fe}',
        options: makeOptions('Sắt / Iron', ['Đồng / Copper', 'Nhôm / Aluminium', 'Chì / Lead'], 9138),
        correctAnswer: 'Sắt / Iron',
        explanation: '👉 Kí hiệu Fe bắt nguồn từ tiếng Latinh \'Ferrum\', là nguyên tố Sắt (tên quốc tế IUPAC: Iron).'
      },
      {
        id: 2,
        question: 'Câu 2: Kí hiệu hóa học \'Cu\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Cu}',
        options: makeOptions('Đồng / Copper', ['Canxi / Calcium', 'Coban / Cobalt', 'Crom / Chromium'], 9145),
        correctAnswer: 'Đồng / Copper',
        explanation: '👉 Kí hiệu Cu bắt nguồn từ \'Cuprum\', là nguyên tố Đồng (tên quốc tế IUPAC: Copper).'
      },
      {
        id: 3,
        question: 'Câu 3: Kí hiệu hóa học \'Al\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Al}',
        options: makeOptions('Nhôm / Aluminium', ['Bạc / Silver', 'Vàng / Gold', 'Argon'], 9152),
        correctAnswer: 'Nhôm / Aluminium',
        explanation: '👉 Kí hiệu Al là của nguyên tố Nhôm (tên quốc tế IUPAC: Aluminium).'
      },
      {
        id: 4,
        question: 'Câu 4: Kí hiệu hóa học \'Zn\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Zn}',
        options: makeOptions('Kẽm / Zinc', ['Sắt / Iron', 'Thiếc / Tin', 'Đồng / Copper'], 9159),
        correctAnswer: 'Kẽm / Zinc',
        explanation: '👉 Kí hiệu Zn là của nguyên tố Kẽm (tên quốc tế IUPAC: Zinc).'
      },
      {
        id: 5,
        question: 'Câu 5: Kí hiệu hóa học \'Ag\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ag}',
        options: makeOptions('Bạc / Silver', ['Vàng / Gold', 'Bari / Barium', 'Argon'], 9166),
        correctAnswer: 'Bạc / Silver',
        explanation: '👉 Kí hiệu Ag bắt nguồn từ tiếng Latinh \'Argentum\', là nguyên tố Bạc (Silver).'
      },
      {
        id: 6,
        question: 'Câu 6: Kí hiệu hóa học \'Au\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Au}',
        options: makeOptions('Vàng / Gold', ['Bạc / Silver', 'Đồng / Copper', 'Asen / Arsenic'], 9173),
        correctAnswer: 'Vàng / Gold',
        explanation: '👉 Kí hiệu Au bắt nguồn từ tiếng Latinh \'Aurum\', là nguyên tố Vàng (Gold).'
      },
      {
        id: 7,
        question: 'Câu 7: Kí hiệu hóa học \'Na\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Na}',
        options: makeOptions('Natri / Sodium', ['Nitơ / Nitrogen', 'Neon', 'Niken / Nickel'], 9180),
        correctAnswer: 'Natri / Sodium',
        explanation: '👉 Kí hiệu Na bắt nguồn từ tiếng Latinh \'Natrium\', là nguyên tố Natri (Sodium).'
      },
      {
        id: 8,
        question: 'Câu 8: Kí hiệu hóa học \'K\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{K}',
        options: makeOptions('Kali / Potassium', ['Canxi / Calcium', 'Krypton', 'Kẽm / Zinc'], 9187),
        correctAnswer: 'Kali / Potassium',
        explanation: '👉 Kí hiệu K bắt nguồn từ tiếng Latinh \'Kalium\', là nguyên tố Kali (Potassium).'
      },
      {
        id: 9,
        question: 'Câu 9: Kí hiệu hóa học \'Ca\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ca}',
        options: makeOptions('Canxi / Calcium', ['Cacbon / Carbon', 'Clo / Chlorine', 'Crom / Chromium'], 9194),
        correctAnswer: 'Canxi / Calcium',
        explanation: '👉 Kí hiệu Ca là của nguyên tố Canxi (Calcium).'
      },
      {
        id: 10,
        question: 'Câu 10: Kí hiệu hóa học \'Ba\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ba}',
        options: makeOptions('Bari / Barium', ['Bạc / Silver', 'Brom / Bromine', 'Bo / Boron'], 9201),
        correctAnswer: 'Bari / Barium',
        explanation: '👉 Kí hiệu Ba là của nguyên tố Bari (Barium).'
      },
      {
        id: 11,
        question: 'Câu 11: Kí hiệu hóa học \'Mg\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Mg}',
        options: makeOptions('Magie / Magnesium', ['Mangan / Manganese', 'Thủy ngân / Mercury', 'Molybden'], 9208),
        correctAnswer: 'Magie / Magnesium',
        explanation: '👉 Kí hiệu Mg là của nguyên tố Magie (Magnesium).'
      },
      {
        id: 12,
        question: 'Câu 12: Kí hiệu hóa học \'Pb\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Pb}',
        options: makeOptions('Chì / Lead', ['Bạch kim / Platinum', 'Photpho / Phosphorus', 'Kali / Potassium'], 9215),
        correctAnswer: 'Chì / Lead',
        explanation: '👉 Kí hiệu Pb bắt nguồn từ \'Plumbum\', là nguyên tố Chì (Lead).'
      },
      {
        id: 13,
        question: 'Câu 13: Kí hiệu hóa học \'Cr\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Cr}',
        options: makeOptions('Crom / Chromium', ['Clo / Chlorine', 'Canxi / Calcium', 'Cacbon / Carbon'], 9222),
        correctAnswer: 'Crom / Chromium',
        explanation: '👉 Kí hiệu Cr là của nguyên tố Crom (Chromium).'
      },
      {
        id: 14,
        question: 'Câu 14: Kí hiệu hóa học \'Mn\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Mn}',
        options: makeOptions('Mangan / Manganese', ['Magie / Magnesium', 'Thủy ngân / Mercury', 'Molybden'], 9229),
        correctAnswer: 'Mangan / Manganese',
        explanation: '👉 Kí hiệu Mn là của nguyên tố Mangan (Manganese).'
      },
      {
        id: 15,
        question: 'Câu 15: Kí hiệu hóa học \'Hg\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Hg}',
        options: makeOptions('Thủy ngân / Mercury', ['Hiđro / Hydrogen', 'Heli / Helium', 'Hafni'], 9236),
        correctAnswer: 'Thủy ngân / Mercury',
        explanation: '👉 Kí hiệu Hg bắt nguồn từ \'Hydrargyrum\', là nguyên tố Thủy ngân (Mercury).'
      },
      {
        id: 16,
        question: 'Câu 16: Kí hiệu hóa học \'H\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{H}',
        options: makeOptions('Hiđro / Hydrogen', ['Heli / Helium', 'Thủy ngân / Mercury', 'Hafni'], 9243),
        correctAnswer: 'Hiđro / Hydrogen',
        explanation: '👉 Kí hiệu H là của nguyên tố Hiđro (Hydrogen).'
      },
      {
        id: 17,
        question: 'Câu 17: Kí hiệu hóa học \'O\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{O}',
        options: makeOptions('Oxi / Oxygen', ['Osmi', 'Vàng / Gold', 'Ozon'], 9250),
        correctAnswer: 'Oxi / Oxygen',
        explanation: '👉 Kí hiệu O là của nguyên tố Oxi (Oxygen).'
      },
      {
        id: 18,
        question: 'Câu 18: Kí hiệu hóa học \'N\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{N}',
        options: makeOptions('Nitơ / Nitrogen', ['Natri / Sodium', 'Neon', 'Niken / Nickel'], 9257),
        correctAnswer: 'Nitơ / Nitrogen',
        explanation: '👉 Kí hiệu N là của nguyên tố Nitơ (Nitrogen).'
      },
      {
        id: 19,
        question: 'Câu 19: Kí hiệu hóa học \'C\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{C}',
        options: makeOptions('Cacbon / Carbon', ['Canxi / Calcium', 'Clo / Chlorine', 'Crom / Chromium'], 9264),
        correctAnswer: 'Cacbon / Carbon',
        explanation: '👉 Kí hiệu C là của nguyên tố Cacbon (Carbon).'
      },
      {
        id: 20,
        question: 'Câu 20: Kí hiệu hóa học \'S\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{S}',
        options: makeOptions('Lưu huỳnh / Sulfur', ['Silic / Silicon', 'Natri / Sodium', 'Thiếc / Tin'], 9271),
        correctAnswer: 'Lưu huỳnh / Sulfur',
        explanation: '👉 Kí hiệu S là của nguyên tố Lưu huỳnh (Sulfur).'
      },
    ]
  },
  {
    id: 'de_2',
    examNo: 2,
    title: 'Đề 2: Xác Định Kí Hiệu Hóa Học Từ Tên Nguyên Tố',
    shortTitle: 'Đề 2: Tên Nguyên Tố ➔ Kí Hiệu',
    icon: '🔄',
    desc: 'Bài toán ngược lại: Cho tên nguyên tố Hóa học, tìm chọn kí hiệu hóa học chính xác nhất.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Nguyên tố Sắt (tên quốc tế: Iron) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Sắt / Iron} \\implies ?',
        options: makeOptions('Fe', ['S', 'St', 'Ir'], 9169),
        correctAnswer: 'Fe',
        explanation: '👉 Nguyên tố Sắt (Iron) có kí hiệu hóa học là Fe (từ Ferrum).'
      },
      {
        id: 2,
        question: 'Câu 2: Nguyên tố Đồng (tên quốc tế: Copper) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Đồng / Copper} \\implies ?',
        options: makeOptions('Cu', ['Co', 'Cp', 'Do'], 9176),
        correctAnswer: 'Cu',
        explanation: '👉 Nguyên tố Đồng (Copper) có kí hiệu hóa học là Cu.'
      },
      {
        id: 3,
        question: 'Câu 3: Nguyên tố Nhôm (tên quốc tế: Aluminium) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Nhôm / Aluminium} \\implies ?',
        options: makeOptions('Al', ['N', 'Nh', 'Am'], 9183),
        correctAnswer: 'Al',
        explanation: '👉 Nguyên tố Nhôm (Aluminium) có kí hiệu hóa học là Al.'
      },
      {
        id: 4,
        question: 'Câu 4: Nguyên tố Kẽm (tên quốc tế: Zinc) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Kẽm / Zinc} \\implies ?',
        options: makeOptions('Zn', ['K', 'Ke', 'Z'], 9190),
        correctAnswer: 'Zn',
        explanation: '👉 Nguyên tố Kẽm (Zinc) có kí hiệu hóa học là Zn.'
      },
      {
        id: 5,
        question: 'Câu 5: Nguyên tố Bạc (tên quốc tế: Silver) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Bạc / Silver} \\implies ?',
        options: makeOptions('Ag', ['Ba', 'Bc', 'Si'], 9197),
        correctAnswer: 'Ag',
        explanation: '👉 Nguyên tố Bạc (Silver) có kí hiệu hóa học là Ag (từ Argentum).'
      },
      {
        id: 6,
        question: 'Câu 6: Nguyên tố Vàng (tên quốc tế: Gold) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Vàng / Gold} \\implies ?',
        options: makeOptions('Au', ['Va', 'V', 'Go'], 9204),
        correctAnswer: 'Au',
        explanation: '👉 Nguyên tố Vàng (Gold) có kí hiệu hóa học là Au (từ Aurum).'
      },
      {
        id: 7,
        question: 'Câu 7: Nguyên tố Natri (tên quốc tế: Sodium) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Natri / Sodium} \\implies ?',
        options: makeOptions('Na', ['N', 'Nt', 'So'], 9211),
        correctAnswer: 'Na',
        explanation: '👉 Nguyên tố Natri (Sodium) có kí hiệu hóa học là Na.'
      },
      {
        id: 8,
        question: 'Câu 8: Nguyên tố Kali (tên quốc tế: Potassium) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Kali / Potassium} \\implies ?',
        options: makeOptions('K', ['Ka', 'Kl', 'P'], 9218),
        correctAnswer: 'K',
        explanation: '👉 Nguyên tố Kali (Potassium) có kí hiệu hóa học là K.'
      },
      {
        id: 9,
        question: 'Câu 9: Nguyên tố Canxi (tên quốc tế: Calcium) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Canxi / Calcium} \\implies ?',
        options: makeOptions('Ca', ['C', 'Cx', 'Cl'], 9225),
        correctAnswer: 'Ca',
        explanation: '👉 Nguyên tố Canxi (Calcium) có kí hiệu hóa học là Ca.'
      },
      {
        id: 10,
        question: 'Câu 10: Nguyên tố Bari (tên quốc tế: Barium) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Bari / Barium} \\implies ?',
        options: makeOptions('Ba', ['B', 'Br', 'Bi'], 9232),
        correctAnswer: 'Ba',
        explanation: '👉 Nguyên tố Bari (Barium) có kí hiệu hóa học là Ba.'
      },
      {
        id: 11,
        question: 'Câu 11: Nguyên tố Magie (tên quốc tế: Magnesium) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Magie / Magnesium} \\implies ?',
        options: makeOptions('Mg', ['Ma', 'Mn', 'M'], 9239),
        correctAnswer: 'Mg',
        explanation: '👉 Nguyên tố Magie (Magnesium) có kí hiệu hóa học là Mg.'
      },
      {
        id: 12,
        question: 'Câu 12: Nguyên tố Crom (tên quốc tế: Chromium) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Crom / Chromium} \\implies ?',
        options: makeOptions('Cr', ['C', 'Ch', 'Co'], 9246),
        correctAnswer: 'Cr',
        explanation: '👉 Nguyên tố Crom (Chromium) có kí hiệu hóa học là Cr.'
      },
      {
        id: 13,
        question: 'Câu 13: Nguyên tố Mangan (tên quốc tế: Manganese) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Mangan / Manganese} \\implies ?',
        options: makeOptions('Mn', ['Mg', 'Ma', 'M'], 9253),
        correctAnswer: 'Mn',
        explanation: '👉 Nguyên tố Mangan (Manganese) có kí hiệu hóa học là Mn.'
      },
      {
        id: 14,
        question: 'Câu 14: Nguyên tố Chì (tên quốc tế: Lead) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Chì / Lead} \\implies ?',
        options: makeOptions('Pb', ['Ch', 'C', 'Ld'], 9260),
        correctAnswer: 'Pb',
        explanation: '👉 Nguyên tố Chì (Lead) có kí hiệu hóa học là Pb (từ Plumbum).'
      },
      {
        id: 15,
        question: 'Câu 15: Nguyên tố Thủy ngân (tên quốc tế: Mercury) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Thủy ngân / Mercury} \\implies ?',
        options: makeOptions('Hg', ['Th', 'Tn', 'Me'], 9267),
        correctAnswer: 'Hg',
        explanation: '👉 Nguyên tố Thủy ngân (Mercury) có kí hiệu hóa học là Hg.'
      },
      {
        id: 16,
        question: 'Câu 16: Nguyên tố Lưu huỳnh (tên quốc tế: Sulfur) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Lưu huỳnh / Sulfur} \\implies ?',
        options: makeOptions('S', ['L', 'Lu', 'Su'], 9274),
        correctAnswer: 'S',
        explanation: '👉 Nguyên tố Lưu huỳnh (Sulfur) có kí hiệu hóa học là S.'
      },
      {
        id: 17,
        question: 'Câu 17: Nguyên tố Photpho (tên quốc tế: Phosphorus) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Photpho / Phosphorus} \\implies ?',
        options: makeOptions('P', ['Ph', 'Pt', 'Po'], 9281),
        correctAnswer: 'P',
        explanation: '👉 Nguyên tố Photpho (Phosphorus) có kí hiệu hóa học là P.'
      },
      {
        id: 18,
        question: 'Câu 18: Nguyên tố Clo (tên quốc tế: Chlorine) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Clo / Chlorine} \\implies ?',
        options: makeOptions('Cl', ['C', 'Co', 'Ch'], 9288),
        correctAnswer: 'Cl',
        explanation: '👉 Nguyên tố Clo (Chlorine) có kí hiệu hóa học là Cl.'
      },
      {
        id: 19,
        question: 'Câu 19: Nguyên tố Brom (tên quốc tế: Bromine) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Brom / Bromine} \\implies ?',
        options: makeOptions('Br', ['B', 'Bm', 'Bo'], 9295),
        correctAnswer: 'Br',
        explanation: '👉 Nguyên tố Brom (Bromine) có kí hiệu hóa học là Br.'
      },
      {
        id: 20,
        question: 'Câu 20: Nguyên tố Iot (tên quốc tế: Iodine) có kí hiệu hóa học đúng là:',
        mathExpression: '\\text{Iot / Iodine} \\implies ?',
        options: makeOptions('I', ['Io', 'It', 'Id'], 9302),
        correctAnswer: 'I',
        explanation: '👉 Nguyên tố Iot (Iodine) có kí hiệu hóa học là I.'
      },
    ]
  },
  {
    id: 'de_3',
    examNo: 3,
    title: 'Đề 3: Phân Loại Kim Loại, Phi Kim Hay Khí Hiếm (He, Ne, Ar...)',
    shortTitle: 'Đề 3: Kim Loại - Phi Kim - Khí Hiếm',
    icon: '⚡',
    desc: 'Xác định và phân biệt chuẩn xác 3 nhóm nguyên tố: Kim loại, Phi kim và Khí hiếm (He, Ne, Ar, Kr, Xe...).',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Nhóm nguyên tố nào sau đây gồm toàn các khí hiếm?',
        mathExpression: '\\text{Khí hiếm (Noble gases)} = ?',
        options: makeOptions('He, Ne, Ar', ['Na, K, Ba', 'O, N, Cl', 'Fe, Cu, Zn'], 9200),
        correctAnswer: 'He, Ne, Ar',
        explanation: '👉 Khí hiếm thuộc nhóm VIIIA trong bảng tuần hoàn, gồm He (Heli), Ne (Neon), Ar (Argon), Kr, Xe, Rn.'
      },
      {
        id: 2,
        question: 'Câu 2: Nguyên tố Neon (Ne) thuộc loại nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ne} \\implies ?',
        options: makeOptions('Khí hiếm', ['Kim loại', 'Phi kim', 'Á kim'], 9207),
        correctAnswer: 'Khí hiếm',
        explanation: '👉 Neon (Ne, Z = 10) có lớp electron ngoài cùng bão hòa (8 electron), là khí hiếm trơ về mặt hóa học.'
      },
      {
        id: 3,
        question: 'Câu 3: Nguyên tố Argon (Ar) thuộc loại nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ar} \\implies ?',
        options: makeOptions('Khí hiếm', ['Kim loại kiềm', 'Phi kim nhóm halogen', 'Kim loại chuyển tiếp'], 9214),
        correctAnswer: 'Khí hiếm',
        explanation: '👉 Argon (Ar, Z = 18) là khí hiếm, thường được bơm vào bóng đèn sợi đốt để bảo vệ dây tóc.'
      },
      {
        id: 4,
        question: 'Câu 4: Nguyên tố Helium (He) thuộc loại nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{He} \\implies ?',
        options: makeOptions('Khí hiếm', ['Kim loại kiềm', 'Kim loại kiềm thổ', 'Phi kim'], 9221),
        correctAnswer: 'Khí hiếm',
        explanation: '👉 Helium (He, Z = 2) có cấu hình 1s², là khí hiếm nhẹ nhất sau hiđro, dùng bơm khinh khí cầu.'
      },
      {
        id: 5,
        question: 'Câu 5: Nguyên tố nào sau đây là một KIM LOẠI?',
        mathExpression: '\\text{Kim loại} = ?',
        options: makeOptions('Nhôm (Al)', ['Lưu huỳnh (S)', 'Oxi (O)', 'Nitơ (N)'], 9228),
        correctAnswer: 'Nhôm (Al)',
        explanation: '👉 Nhôm (Al) là kim loại có ánh kim, dẫn điện, dẫn nhiệt tốt và có tính dẻo.'
      },
      {
        id: 6,
        question: 'Câu 6: Nguyên tố nào sau đây là một KIM LOẠI?',
        mathExpression: '\\text{Kim loại} = ?',
        options: makeOptions('Sắt (Fe)', ['Cacbon (C)', 'Photpho (P)', 'Clo (Cl)'], 9235),
        correctAnswer: 'Sắt (Fe)',
        explanation: '👉 Sắt (Fe) là kim loại phổ biến trong đời sống, có từ tính và tính ánh kim.'
      },
      {
        id: 7,
        question: 'Câu 7: Nguyên tố nào sau đây là một PHI KIM?',
        mathExpression: '\\text{Phi kim} = ?',
        options: makeOptions('Lưu huỳnh (S)', ['Kẽm (Zn)', 'Đồng (Cu)', 'Bari (Ba)'], 9242),
        correctAnswer: 'Lưu huỳnh (S)',
        explanation: '👉 Lưu huỳnh (S) là phi kim thể rắn màu vàng, không dẫn điện.'
      },
      {
        id: 8,
        question: 'Câu 8: Nguyên tố nào sau đây là một PHI KIM?',
        mathExpression: '\\text{Phi kim} = ?',
        options: makeOptions('Clo (Cl)', ['Canxi (Ca)', 'Natri (Na)', 'Magie (Mg)'], 9249),
        correctAnswer: 'Clo (Cl)',
        explanation: '👉 Clo (Cl) là phi kim điển hình thuộc nhóm Halogen (VIIA).'
      },
      {
        id: 9,
        question: 'Câu 9: Ở điều kiện thường, kim loại duy nhất tồn tại ở thể lỏng là:',
        mathExpression: '\\text{Kim loại thể lỏng} = ?',
        options: makeOptions('Thủy ngân (Hg)', ['Brom (Br)', 'Chì (Pb)', 'Kali (Na)'], 9256),
        correctAnswer: 'Thủy ngân (Hg)',
        explanation: '👉 Thủy ngân (Hg) là kim loại duy nhất tồn tại ở thể lỏng ở nhiệt độ phòng (Brom là phi kim lỏng).'
      },
      {
        id: 10,
        question: 'Câu 10: Ở điều kiện thường, phi kim duy nhất tồn tại ở thể lỏng là:',
        mathExpression: '\\text{Phi kim thể lỏng} = ?',
        options: makeOptions('Brom (Br)', ['Thủy ngân (Hg)', 'Clo (Cl)', 'Iot (I)'], 9263),
        correctAnswer: 'Brom (Br)',
        explanation: '👉 Brom (Br) là phi kim dạng lỏng màu đỏ nâu bốc khói nguy hiểm.'
      },
      {
        id: 11,
        question: 'Câu 11: Dãy chất nào sau đây chỉ gồm các nguyên tố KIM LOẠI?',
        mathExpression: '\\text{Dãy toàn kim loại} = ?',
        options: makeOptions('Na, Mg, Al, Fe', ['Na, C, Al, Fe', 'Cu, Zn, S, O', 'Ba, Ca, P, Cl'], 9270),
        correctAnswer: 'Na, Mg, Al, Fe',
        explanation: '👉 Na, Mg, Al, Fe đều là các nguyên tố kim loại.'
      },
      {
        id: 12,
        question: 'Câu 12: Dãy chất nào sau đây chỉ gồm các nguyên tố PHI KIM?',
        mathExpression: '\\text{Dãy toàn phi kim} = ?',
        options: makeOptions('C, S, O, Cl', ['C, S, Fe, Cl', 'O, N, Al, P', 'H, He, Na, K'], 9277),
        correctAnswer: 'C, S, O, Cl',
        explanation: '👉 C, S, O, Cl đều là các nguyên tố phi kim.'
      },
      {
        id: 13,
        question: 'Câu 13: Đặc điểm chung nổi bật của các nguyên tố KHÍ HIẾM (He, Ne, Ar...) là:',
        mathExpression: '\\text{Đặc tính khí hiếm} = ?',
        options: makeOptions('Rất trơ về mặt hóa học, khó tham gia phản ứng', ['Dễ dàng nhường electron tạo cation', 'Dễ dàng nhận electron tạo anion', 'Là chất dẫn điện siêu tốt'], 9284),
        correctAnswer: 'Rất trơ về mặt hóa học, khó tham gia phản ứng',
        explanation: '👉 Khí hiếm có lớp vỏ ngoài cùng bền vững (2e ở He, 8e ở Ne, Ar...) nên rất trơ và bền.'
      },
      {
        id: 14,
        question: 'Câu 14: Nguyên tố Canxi (Ca) thuộc nhóm nào sau đây?',
        mathExpression: '\\mathbf{Ca} \\implies ?',
        options: makeOptions('Kim loại', ['Phi kim', 'Khí hiếm', 'Á kim'], 9291),
        correctAnswer: 'Kim loại',
        explanation: '👉 Canxi (Ca) là kim loại kiềm thổ thuộc nhóm IIA.'
      },
      {
        id: 15,
        question: 'Câu 15: Nguyên tố Nitơ (N) thuộc nhóm nào sau đây?',
        mathExpression: '\\mathbf{N} \\implies ?',
        options: makeOptions('Phi kim', ['Kim loại', 'Khí hiếm', 'Kim loại chuyển tiếp'], 9298),
        correctAnswer: 'Phi kim',
        explanation: '👉 Nitơ (N) là phi kim, chiếm khoảng 78% thể tích không khí.'
      },
      {
        id: 16,
        question: 'Câu 16: Khí nào sau đây được dùng để nạp vào đèn tuýp phóng điện phát sáng màu cam đỏ?',
        mathExpression: '\\text{Đèn quảng cáo} = ?',
        options: makeOptions('Khí Neon (Ne)', ['Khí Oxi (O₂)', 'Khí Clo (Cl₂)', 'Khí Hiđro (H₂)'], 9305),
        correctAnswer: 'Khí Neon (Ne)',
        explanation: '👉 Khí Neon (Ne) khi phóng điện phát ra ánh sáng màu cam đỏ rực rỡ đặc trưng.'
      },
      {
        id: 17,
        question: 'Câu 17: Khí hiếm chiếm hàm lượng nhiều nhất trong bầu khí quyển Trái Đất là:',
        mathExpression: '\\text{Khí hiếm nhiều nhất trong KK} = ?',
        options: makeOptions('Argon (Ar, ~0,93%)', ['Helium (He)', 'Neon (Ne)', 'Krypton (Kr)'], 9312),
        correctAnswer: 'Argon (Ar, ~0,93%)',
        explanation: '👉 Khí Argon (Ar) chiếm khoảng 0,93% thể tích không khí, là khí hiếm dồi dào nhất trong khí quyển.'
      },
      {
        id: 18,
        question: 'Câu 18: Nguyên tố Đồng (Cu) là chất dẫn điện rất tốt, thuộc loại:',
        mathExpression: '\\mathbf{Cu} \\implies ?',
        options: makeOptions('Kim loại', ['Phi kim', 'Khí hiếm', 'Á kim'], 9319),
        correctAnswer: 'Kim loại',
        explanation: '👉 Đồng (Cu) là kim loại dẫn điện tốt thứ hai sau Bạc (Ag), ứng dụng làm dây dẫn điện.'
      },
      {
        id: 19,
        question: 'Câu 19: Nguyên tố Oxi (O) duy trì sự sống và sự cháy, thuộc loại:',
        mathExpression: '\\mathbf{O} \\implies ?',
        options: makeOptions('Phi kim', ['Kim loại', 'Khí hiếm', 'Hợp chất'], 9326),
        correctAnswer: 'Phi kim',
        explanation: '👉 Oxi (O) là phi kim có độ âm điện rất lớn (3,44), chỉ đứng sau Flo.'
      },
      {
        id: 20,
        question: 'Câu 20: Nguyên tố Photpho (P) dùng làm diêm và phân bón hóa học, thuộc loại:',
        mathExpression: '\\mathbf{P} \\implies ?',
        options: makeOptions('Phi kim', ['Kim loại', 'Khí hiếm', 'Kim loại kiềm'], 9333),
        correctAnswer: 'Phi kim',
        explanation: '👉 Photpho (P) là phi kim thuộc nhóm VA (gồm photpho trắng và photpho đỏ).'
      },
    ]
  },
  {
    id: 'de_4',
    examNo: 4,
    title: 'Đề 4: Ghi Nhớ & Xác Định Nguyên Tử Khối (amu)',
    shortTitle: 'Đề 4: Nguyên Tử Khối Chuẩn',
    icon: '⚖️',
    desc: 'Bảng nguyên tử khối chuẩn SGK mới (amu): H=1, C=12, N=14, O=16, Na=23, Al=27, S=32, Cl=35.5, Fe=56, Cu=64...',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Nguyên tử khối (khối lượng nguyên tử) của Hiđro (H) là:',
        mathExpression: 'M_{\\mathrm{H}} = ?',
        options: makeOptions('1 amu', ['2 amu', '4 amu', '16 amu'], 9231),
        correctAnswer: '1 amu',
        explanation: '👉 Nguyên tố Hiđro (H) có nguyên tử khối M = 1 amu.'
      },
      {
        id: 2,
        question: 'Câu 2: Nguyên tử khối của Cacbon (C) là:',
        mathExpression: 'M_{\\mathrm{C}} = ?',
        options: makeOptions('12 amu', ['14 amu', '16 amu', '6 amu'], 9238),
        correctAnswer: '12 amu',
        explanation: '👉 Cacbon (C) có nguyên tử khối M = 12 amu (chuẩn 1 đvC = 1/12 khối lượng nguyên tử C-12).'
      },
      {
        id: 3,
        question: 'Câu 3: Nguyên tử khối của Nitơ (N) là:',
        mathExpression: 'M_{\\mathrm{N}} = ?',
        options: makeOptions('14 amu', ['7 amu', '16 amu', '28 amu'], 9245),
        correctAnswer: '14 amu',
        explanation: '👉 Nitơ (N) có số hiệu nguyên tử Z = 7, nguyên tử khối M = 14 amu.'
      },
      {
        id: 4,
        question: 'Câu 4: Nguyên tử khối của Oxi (O) là:',
        mathExpression: 'M_{\\mathrm{O}} = ?',
        options: makeOptions('16 amu', ['8 amu', '32 amu', '14 amu'], 9252),
        correctAnswer: '16 amu',
        explanation: '👉 Oxi (O) có nguyên tử khối M = 16 amu (phân tử O₂ có phân tử khối bằng 32 amu).'
      },
      {
        id: 5,
        question: 'Câu 5: Nguyên tử khối của Natri (Na) là:',
        mathExpression: 'M_{\\mathrm{Na}} = ?',
        options: makeOptions('23 amu', ['11 amu', '24 amu', '39 amu'], 9259),
        correctAnswer: '23 amu',
        explanation: '👉 Natri (Na) có nguyên tử khối M = 23 amu.'
      },
      {
        id: 6,
        question: 'Câu 6: Nguyên tử khối của Magie (Mg) là:',
        mathExpression: 'M_{\\mathrm{Mg}} = ?',
        options: makeOptions('24 amu', ['12 amu', '23 amu', '27 amu'], 9266),
        correctAnswer: '24 amu',
        explanation: '👉 Magie (Mg) có nguyên tử khối M = 24 amu.'
      },
      {
        id: 7,
        question: 'Câu 7: Nguyên tử khối của Nhôm (Al) là:',
        mathExpression: 'M_{\\mathrm{Al}} = ?',
        options: makeOptions('27 amu', ['13 amu', '24 amu', '56 amu'], 9273),
        correctAnswer: '27 amu',
        explanation: '👉 Nhôm (Al) có nguyên tử khối M = 27 amu.'
      },
      {
        id: 8,
        question: 'Câu 8: Nguyên tử khối của Photpho (P) là:',
        mathExpression: 'M_{\\mathrm{P}} = ?',
        options: makeOptions('31 amu', ['15 amu', '32 amu', '35,5 amu'], 9280),
        correctAnswer: '31 amu',
        explanation: '👉 Photpho (P) có nguyên tử khối M = 31 amu.'
      },
      {
        id: 9,
        question: 'Câu 9: Nguyên tử khối của Lưu huỳnh (S) là:',
        mathExpression: 'M_{\\mathrm{S}} = ?',
        options: makeOptions('32 amu', ['16 amu', '31 amu', '64 amu'], 9287),
        correctAnswer: '32 amu',
        explanation: '👉 Lưu huỳnh (S) có nguyên tử khối M = 32 amu.'
      },
      {
        id: 10,
        question: 'Câu 10: Nguyên tử khối của Clo (Chlorine, Cl) là:',
        mathExpression: 'M_{\\mathrm{Cl}} = ?',
        options: makeOptions('35,5 amu', ['35 amu', '36 amu', '17 amu'], 9294),
        correctAnswer: '35,5 amu',
        explanation: '👉 Clo (Cl) có nguyên tử khối trung bình M = 35,5 amu (do hỗn hợp đồng vị Cl-35 và Cl-37).'
      },
      {
        id: 11,
        question: 'Câu 11: Nguyên tử khối của Kali (K) là:',
        mathExpression: 'M_{\\mathrm{K}} = ?',
        options: makeOptions('39 amu', ['19 amu', '23 amu', '40 amu'], 9301),
        correctAnswer: '39 amu',
        explanation: '👉 Kali (K) có nguyên tử khối M = 39 amu.'
      },
      {
        id: 12,
        question: 'Câu 12: Nguyên tử khối của Canxi (Ca) là:',
        mathExpression: 'M_{\\mathrm{Ca}} = ?',
        options: makeOptions('40 amu', ['20 amu', '39 amu', '56 amu'], 9308),
        correctAnswer: '40 amu',
        explanation: '👉 Canxi (Ca) có nguyên tử khối M = 40 amu.'
      },
      {
        id: 13,
        question: 'Câu 13: Nguyên tử khối của Crom (Cr) là:',
        mathExpression: 'M_{\\mathrm{Cr}} = ?',
        options: makeOptions('52 amu', ['24 amu', '55 amu', '56 amu'], 9315),
        correctAnswer: '52 amu',
        explanation: '👉 Crom (Cr) có nguyên tử khối M = 52 amu.'
      },
      {
        id: 14,
        question: 'Câu 14: Nguyên tử khối của Mangan (Mn) là:',
        mathExpression: 'M_{\\mathrm{Mn}} = ?',
        options: makeOptions('55 amu', ['25 amu', '52 amu', '56 amu'], 9322),
        correctAnswer: '55 amu',
        explanation: '👉 Mangan (Mn) có nguyên tử khối M = 55 amu.'
      },
      {
        id: 15,
        question: 'Câu 15: Nguyên tử khối của Sắt (Fe) là:',
        mathExpression: 'M_{\\mathrm{Fe}} = ?',
        options: makeOptions('56 amu', ['26 amu', '55 amu', '64 amu'], 9329),
        correctAnswer: '56 amu',
        explanation: '👉 Sắt (Fe) có nguyên tử khối M = 56 amu.'
      },
      {
        id: 16,
        question: 'Câu 16: Nguyên tử khối của Đồng (Cu) là:',
        mathExpression: 'M_{\\mathrm{Cu}} = ?',
        options: makeOptions('64 amu', ['29 amu', '56 amu', '65 amu'], 9336),
        correctAnswer: '64 amu',
        explanation: '👉 Đồng (Cu) có nguyên tử khối M = 64 amu.'
      },
      {
        id: 17,
        question: 'Câu 17: Nguyên tử khối của Kẽm (Zn) là:',
        mathExpression: 'M_{\\mathrm{Zn}} = ?',
        options: makeOptions('65 amu', ['30 amu', '64 amu', '56 amu'], 9343),
        correctAnswer: '65 amu',
        explanation: '👉 Kẽm (Zn) có nguyên tử khối M = 65 amu.'
      },
      {
        id: 18,
        question: 'Câu 18: Nguyên tử khối của Brom (Br) là:',
        mathExpression: 'M_{\\mathrm{Br}} = ?',
        options: makeOptions('80 amu', ['35 amu', '79 amu', '108 amu'], 9350),
        correctAnswer: '80 amu',
        explanation: '👉 Brom (Br) có nguyên tử khối M = 80 amu.'
      },
      {
        id: 19,
        question: 'Câu 19: Nguyên tử khối của Bạc (Ag) là:',
        mathExpression: 'M_{\\mathrm{Ag}} = ?',
        options: makeOptions('108 amu', ['47 amu', '64 amu', '137 amu'], 9357),
        correctAnswer: '108 amu',
        explanation: '👉 Bạc (Ag) có nguyên tử khối M = 108 amu.'
      },
      {
        id: 20,
        question: 'Câu 20: Nguyên tử khối của Bari (Ba) là:',
        mathExpression: 'M_{\\mathrm{Ba}} = ?',
        options: makeOptions('137 amu', ['56 amu', '108 amu', '40 amu'], 9364),
        correctAnswer: '137 amu',
        explanation: '👉 Bari (Ba) có nguyên tử khối M = 137 amu.'
      },
    ]
  },
  {
    id: 'de_5',
    examNo: 5,
    title: 'Đề 5: Tính Phân Tử Khối Của Các Hợp Chất Vô Cơ',
    shortTitle: 'Đề 5: Tính Phân Tử Khối',
    icon: '🧮',
    desc: 'Rèn luyện kĩ năng cộng nguyên tử khối tính chuẩn xác phân tử khối của các hợp chất vô cơ quen thuộc.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Khối lượng phân tử (phân tử khối) của Nước (H₂O) là:',
        mathExpression: 'M_{\\mathrm{H_2O}} = 1 \\times 2 + 16 = ?',
        options: makeOptions('18 amu', ['17 amu', '20 amu', '34 amu'], 9262),
        correctAnswer: '18 amu',
        explanation: '👉 M(H₂O) = 1 × 2 + 16 = 18 amu.'
      },
      {
        id: 2,
        question: 'Câu 2: Phân tử khối của Khí cacbonic (CO₂) là:',
        mathExpression: 'M_{\\mathrm{CO_2}} = 12 + 16 \\times 2 = ?',
        options: makeOptions('44 amu', ['28 amu', '32 amu', '40 amu'], 9269),
        correctAnswer: '44 amu',
        explanation: '👉 M(CO₂) = 12 + 16 × 2 = 44 amu.'
      },
      {
        id: 3,
        question: 'Câu 3: Phân tử khối của Khí oxi (O₂) là:',
        mathExpression: 'M_{\\mathrm{O_2}} = 16 \\times 2 = ?',
        options: makeOptions('32 amu', ['16 amu', '48 amu', '64 amu'], 9276),
        correctAnswer: '32 amu',
        explanation: '👉 M(O₂) = 16 × 2 = 32 amu.'
      },
      {
        id: 4,
        question: 'Câu 4: Phân tử khối của Muối ăn (NaCl, Na=23, Cl=35,5) là:',
        mathExpression: 'M_{\\mathrm{NaCl}} = 23 + 35,5 = ?',
        options: makeOptions('58,5 amu', ['58 amu', '59 amu', '46 amu'], 9283),
        correctAnswer: '58,5 amu',
        explanation: '👉 M(NaCl) = 23 + 35,5 = 58,5 amu.'
      },
      {
        id: 5,
        question: 'Câu 5: Phân tử khối của Natri hiđroxit (NaOH, Na=23, O=16, H=1) là:',
        mathExpression: 'M_{\\mathrm{NaOH}} = 23 + 16 + 1 = ?',
        options: makeOptions('40 amu', ['39 amu', '41 amu', '30 amu'], 9290),
        correctAnswer: '40 amu',
        explanation: '👉 M(NaOH) = 23 + 16 + 1 = 40 amu.'
      },
      {
        id: 6,
        question: 'Câu 6: Phân tử khối của Axit clohiđric (HCl, H=1, Cl=35,5) là:',
        mathExpression: 'M_{\\mathrm{HCl}} = 1 + 35,5 = ?',
        options: makeOptions('36,5 amu', ['35,5 amu', '37,5 amu', '36 amu'], 9297),
        correctAnswer: '36,5 amu',
        explanation: '👉 M(HCl) = 1 + 35,5 = 36,5 amu.'
      },
      {
        id: 7,
        question: 'Câu 7: Phân tử khối của Vôi sống (CaO, Ca=40, O=16) là:',
        mathExpression: 'M_{\\mathrm{CaO}} = 40 + 16 = ?',
        options: makeOptions('56 amu', ['54 amu', '58 amu', '40 amu'], 9304),
        correctAnswer: '56 amu',
        explanation: '👉 M(CaO) = 40 + 16 = 56 amu.'
      },
      {
        id: 8,
        question: 'Câu 8: Phân tử khối của Đá vôi (CaCO₃, Ca=40, C=12, O=16) là:',
        mathExpression: 'M_{\\mathrm{CaCO_3}} = 40 + 12 + 16 \\times 3 = ?',
        options: makeOptions('100 amu', ['96 amu', '84 amu', '116 amu'], 9311),
        correctAnswer: '100 amu',
        explanation: '👉 M(CaCO₃) = 40 + 12 + 16 × 3 = 100 amu (con số tròn trĩnh cực hay gặp!).'
      },
      {
        id: 9,
        question: 'Câu 9: Phân tử khối của Axit sunfuric (H₂SO₄, H=1, S=32, O=16) là:',
        mathExpression: 'M_{\\mathrm{H_2SO_4}} = 1 \\times 2 + 32 + 16 \\times 4 = ?',
        options: makeOptions('98 amu', ['96 amu', '82 amu', '100 amu'], 9318),
        correctAnswer: '98 amu',
        explanation: '👉 M(H₂SO₄) = 2 + 32 + 64 = 98 amu.'
      },
      {
        id: 10,
        question: 'Câu 10: Phân tử khối của Axit nitric (HNO₃, H=1, N=14, O=16) là:',
        mathExpression: 'M_{\\mathrm{HNO_3}} = 1 + 14 + 16 \\times 3 = ?',
        options: makeOptions('63 amu', ['62 amu', '64 amu', '48 amu'], 9325),
        correctAnswer: '63 amu',
        explanation: '👉 M(HNO₃) = 1 + 14 + 48 = 63 amu.'
      },
      {
        id: 11,
        question: 'Câu 11: Phân tử khối của Vôi tôi (Ca(OH)₂, Ca=40, O=16, H=1) là:',
        mathExpression: 'M_{\\mathrm{Ca(OH)_2}} = 40 + (16 + 1) \\times 2 = ?',
        options: makeOptions('74 amu', ['57 amu', '72 amu', '76 amu'], 9332),
        correctAnswer: '74 amu',
        explanation: '👉 M(Ca(OH)₂) = 40 + 17 × 2 = 74 amu.'
      },
      {
        id: 12,
        question: 'Câu 12: Phân tử khối của Bari hiđroxit (Ba(OH)₂, Ba=137, O=16, H=1) là:',
        mathExpression: 'M_{\\mathrm{Ba(OH)_2}} = 137 + 17 \\times 2 = ?',
        options: makeOptions('171 amu', ['154 amu', '170 amu', '188 amu'], 9339),
        correctAnswer: '171 amu',
        explanation: '👉 M(Ba(OH)₂) = 137 + 34 = 171 amu.'
      },
      {
        id: 13,
        question: 'Câu 13: Phân tử khối của Đồng(II) sunfat (CuSO₄, Cu=64, S=32, O=16) là:',
        mathExpression: 'M_{\\mathrm{CuSO_4}} = 64 + 32 + 16 \\times 4 = ?',
        options: makeOptions('160 amu', ['150 amu', '168 amu', '144 amu'], 9346),
        correctAnswer: '160 amu',
        explanation: '👉 M(CuSO₄) = 64 + 32 + 64 = 160 amu.'
      },
      {
        id: 14,
        question: 'Câu 14: Phân tử khối của Sắt(III) oxit (Fe₂O₃, Fe=56, O=16) là:',
        mathExpression: 'M_{\\mathrm{Fe_2O_3}} = 56 \\times 2 + 16 \\times 3 = ?',
        options: makeOptions('160 amu', ['72 amu', '152 amu', '232 amu'], 9353),
        correctAnswer: '160 amu',
        explanation: '👉 M(Fe₂O₃) = 112 + 48 = 160 amu.'
      },
      {
        id: 15,
        question: 'Câu 15: Phân tử khối của Nhôm oxit (Al₂O₃, Al=27, O=16) là:',
        mathExpression: 'M_{\\mathrm{Al_2O_3}} = 27 \\times 2 + 16 \\times 3 = ?',
        options: makeOptions('102 amu', ['75 amu', '100 amu', '118 amu'], 9360),
        correctAnswer: '102 amu',
        explanation: '👉 M(Al₂O₃) = 54 + 48 = 102 amu.'
      },
      {
        id: 16,
        question: 'Câu 16: Phân tử khối của Nhôm sunfat (Al₂(SO₄)₃, Al=27, S=32, O=16) là:',
        mathExpression: 'M_{\\mathrm{Al_2(SO_4)_3}} = 27 \\times 2 + 96 \\times 3 = ?',
        options: makeOptions('342 amu', ['214 amu', '315 amu', '378 amu'], 9367),
        correctAnswer: '342 amu',
        explanation: '👉 M(Al₂(SO₄)₃) = 54 + 96 × 3 = 342 amu.'
      },
      {
        id: 17,
        question: 'Câu 17: Phân tử khối của Bari sunfat (BaSO₄, Ba=137, S=32, O=16) là:',
        mathExpression: 'M_{\\mathrm{BaSO_4}} = 137 + 32 + 64 = ?',
        options: makeOptions('233 amu', ['217 amu', '249 amu', '185 amu'], 9374),
        correctAnswer: '233 amu',
        explanation: '👉 M(BaSO₄) = 137 + 96 = 233 amu.'
      },
      {
        id: 18,
        question: 'Câu 18: Phân tử khối của Thuốc tím (KMnO₄, K=39, Mn=55, O=16) là:',
        mathExpression: 'M_{\\mathrm{KMnO_4}} = 39 + 55 + 16 \\times 4 = ?',
        options: makeOptions('158 amu', ['142 amu', '164 amu', '174 amu'], 9381),
        correctAnswer: '158 amu',
        explanation: '👉 M(KMnO₄) = 39 + 55 + 64 = 158 amu.'
      },
      {
        id: 19,
        question: 'Câu 19: Phân tử khối của Đồng(II) hiđroxit (Cu(OH)₂, Cu=64, O=16, H=1) là:',
        mathExpression: 'M_{\\mathrm{Cu(OH)_2}} = 64 + 17 \\times 2 = ?',
        options: makeOptions('98 amu', ['81 amu', '96 amu', '115 amu'], 9388),
        correctAnswer: '98 amu',
        explanation: '👉 M(Cu(OH)₂) = 64 + 34 = 98 amu.'
      },
      {
        id: 20,
        question: 'Câu 20: Phân tử khối của Sắt(III) hiđroxit (Fe(OH)₃, Fe=56, O=16, H=1) là:',
        mathExpression: 'M_{\\mathrm{Fe(OH)_3}} = 56 + 51 = ?',
        options: makeOptions('107 amu', ['90 amu', '105 amu', '113 amu'], 9395),
        correctAnswer: '107 amu',
        explanation: '👉 M(Fe(OH)₃) = 56 + 51 = 107 amu.'
      },
    ]
  },
  {
    id: 'de_6',
    examNo: 6,
    title: 'Đề 6: Xác Định Hóa Trị Của Nguyên Tố & Nhóm Nguyên Tử',
    shortTitle: 'Đề 6: Xác Định Hóa Trị',
    icon: '🧪',
    desc: 'Xác định nhanh hóa trị của kim loại, phi kim trong oxide/muối và hóa trị các nhóm nguyên tử kinh điển (OH, NO3, SO4, CO3, PO4...).',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Trong hợp chất Sắt(III) oxit (Fe₂O₃), nguyên tố Sắt (Fe) có hóa trị mấy?',
        mathExpression: '\\mathrm{Fe_2^{\\mathbf{a}}O_3^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('III', ['II', 'I', 'IV'], 9293),
        correctAnswer: 'III',
        explanation: '👉 Theo quy tắc hóa trị: a × 2 = II × 3 ⟹ a = III. Trong Fe₂O₃, Fe có hóa trị III.'
      },
      {
        id: 2,
        question: 'Câu 2: Trong hợp chất Sắt(II) oxit (FeO), nguyên tố Sắt (Fe) có hóa trị mấy?',
        mathExpression: '\\mathrm{Fe^{\\mathbf{a}}O^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('II', ['III', 'I', 'IV'], 9300),
        correctAnswer: 'II',
        explanation: '👉 a × 1 = II × 1 ⟹ a = II. Trong FeO, Fe có hóa trị II.'
      },
      {
        id: 3,
        question: 'Câu 3: Trong hợp chất Đồng(II) sunfat (CuSO₄, nhóm SO₄ có hóa trị II), Cu có hóa trị mấy?',
        mathExpression: '\\mathrm{Cu^{\\mathbf{a}}(SO_4)^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('II', ['I', 'III', 'IV'], 9307),
        correctAnswer: 'II',
        explanation: '👉 a × 1 = II × 1 ⟹ Cu có hóa trị II.'
      },
      {
        id: 4,
        question: 'Câu 4: Trong hợp chất Nhôm oxit (Al₂O₃), nguyên tố Nhôm (Al) có hóa trị mấy?',
        mathExpression: '\\mathrm{Al_2^{\\mathbf{a}}O_3^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('III', ['II', 'I', 'IV'], 9314),
        correctAnswer: 'III',
        explanation: '👉 a × 2 = II × 3 ⟹ a = III. Nhôm luôn có hóa trị III trong mọi hợp chất.'
      },
      {
        id: 5,
        question: 'Câu 5: Trong hợp chất Khí sunfurơ (SO₂), nguyên tố Lưu huỳnh (S) có hóa trị mấy?',
        mathExpression: '\\mathrm{S^{\\mathbf{a}}O_2^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('IV', ['II', 'VI', 'III'], 9321),
        correctAnswer: 'IV',
        explanation: '👉 a × 1 = II × 2 ⟹ a = IV. Trong SO₂, S có hóa trị IV.'
      },
      {
        id: 6,
        question: 'Câu 6: Trong hợp chất Lưu huỳnh trioxit (SO₃), nguyên tố Lưu huỳnh (S) có hóa trị mấy?',
        mathExpression: '\\mathrm{S^{\\mathbf{a}}O_3^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('VI', ['IV', 'II', 'III'], 9328),
        correctAnswer: 'VI',
        explanation: '👉 a × 1 = II × 3 ⟹ a = VI. Trong SO₃, S đạt hóa trị cao nhất là VI.'
      },
      {
        id: 7,
        question: 'Câu 7: Trong hợp chất Khí cacbonic (CO₂), nguyên tố Cacbon (C) có hóa trị mấy?',
        mathExpression: '\\mathrm{C^{\\mathbf{a}}O_2^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('IV', ['II', 'I', 'III'], 9335),
        correctAnswer: 'IV',
        explanation: '👉 a × 1 = II × 2 ⟹ a = IV. Trong CO₂, C có hóa trị IV.'
      },
      {
        id: 8,
        question: 'Câu 8: Trong hợp chất Khí cacbon monooxit (CO), nguyên tố Cacbon (C) có hóa trị mấy?',
        mathExpression: '\\mathrm{C^{\\mathbf{a}}O^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('II', ['IV', 'I', 'III'], 9342),
        correctAnswer: 'II',
        explanation: '👉 a × 1 = II × 1 ⟹ a = II. Trong CO, C có hóa trị II.'
      },
      {
        id: 9,
        question: 'Câu 9: Trong hợp chất Điphotpho pentaoxit (P₂O₅), Photpho (P) có hóa trị mấy?',
        mathExpression: '\\mathrm{P_2^{\\mathbf{a}}O_5^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('V', ['III', 'IV', 'II'], 9349),
        correctAnswer: 'V',
        explanation: '👉 a × 2 = II × 5 ⟹ a = V. Trong P₂O₅, P có hóa trị V.'
      },
      {
        id: 10,
        question: 'Câu 10: Trong hợp chất Khí amoniac (NH₃, H có hóa trị I), Nitơ (N) có hóa trị mấy?',
        mathExpression: '\\mathrm{N^{\\mathbf{a}}H_3^{\\mathbf{I}}} \\implies a = ?',
        options: makeOptions('III', ['IV', 'V', 'II'], 9356),
        correctAnswer: 'III',
        explanation: '👉 a × 1 = I × 3 ⟹ a = III. Trong NH₃, N có hóa trị III.'
      },
      {
        id: 11,
        question: 'Câu 11: Nhóm hiđroxit (-OH) trong các bazơ (như NaOH, Ca(OH)₂) luôn có hóa trị mấy?',
        mathExpression: '\\mathbf{(-OH)} \\implies ?',
        options: makeOptions('I', ['II', 'III', 'IV'], 9363),
        correctAnswer: 'I',
        explanation: '👉 Nhóm hiđroxit (-OH) luôn có hóa trị I.'
      },
      {
        id: 12,
        question: 'Câu 12: Nhóm nitrat (-NO₃) trong axit HNO₃ và các muối nitrat luôn có hóa trị mấy?',
        mathExpression: '\\mathbf{(-NO_3)} \\implies ?',
        options: makeOptions('I', ['II', 'III', 'IV'], 9370),
        correctAnswer: 'I',
        explanation: '👉 Gốc axit nitrat (-NO₃) có hóa trị I (tương ứng với axit có 1 nguyên tử H là HNO₃).'
      },
      {
        id: 13,
        question: 'Câu 13: Nhóm sunfat (=SO₄) trong H₂SO₄ và các muối sunfat có hóa trị mấy?',
        mathExpression: '\\mathbf{(=SO_4)} \\implies ?',
        options: makeOptions('II', ['I', 'III', 'IV'], 9377),
        correctAnswer: 'II',
        explanation: '👉 Gốc sunfat (=SO₄) có hóa trị II (tương ứng với axit H₂SO₄ có 2 nguyên tử H).'
      },
      {
        id: 14,
        question: 'Câu 14: Nhóm cacbonat (=CO₃) trong H₂CO₃ và muối cacbonat (như CaCO₃) có hóa trị mấy?',
        mathExpression: '\\mathbf{(=CO_3)} \\implies ?',
        options: makeOptions('II', ['I', 'III', 'IV'], 9384),
        correctAnswer: 'II',
        explanation: '👉 Gốc cacbonat (=CO₃) có hóa trị II.'
      },
      {
        id: 15,
        question: 'Câu 15: Nhóm photphat (≡PO₄) trong H₃PO₄ và muối photphat có hóa trị mấy?',
        mathExpression: '\\mathbf{(\\equiv PO_4)} \\implies ?',
        options: makeOptions('III', ['II', 'I', 'IV'], 9391),
        correctAnswer: 'III',
        explanation: '👉 Gốc photphat (≡PO₄) có hóa trị III (tương ứng axit H₃PO₄ có 3 nguyên tử H).'
      },
      {
        id: 16,
        question: 'Câu 16: Trong hợp chất Khí hiđro sunfua (H₂S, H hóa trị I), Lưu huỳnh (S) có hóa trị mấy?',
        mathExpression: '\\mathrm{H_2^{\\mathbf{I}}S^{\\mathbf{a}}} \\implies a = ?',
        options: makeOptions('II', ['IV', 'VI', 'I'], 9398),
        correctAnswer: 'II',
        explanation: '👉 I × 2 = a × 1 ⟹ a = II. Trong H₂S, S có hóa trị II.'
      },
      {
        id: 17,
        question: 'Câu 17: Trong hợp chất Kẽm clorua (ZnCl₂, Cl hóa trị I), Kẽm (Zn) có hóa trị mấy?',
        mathExpression: '\\mathrm{Zn^{\\mathbf{a}}Cl_2^{\\mathbf{I}}} \\implies a = ?',
        options: makeOptions('II', ['I', 'III', 'IV'], 9405),
        correctAnswer: 'II',
        explanation: '👉 a × 1 = I × 2 ⟹ a = II. Kẽm (Zn) luôn có hóa trị II trong hợp chất.'
      },
      {
        id: 18,
        question: 'Câu 18: Trong hợp chất Bạc nitrat (AgNO₃, nhóm NO₃ hóa trị I), Bạc (Ag) có hóa trị mấy?',
        mathExpression: '\\mathrm{Ag^{\\mathbf{a}}(NO_3)^{\\mathbf{I}}} \\implies a = ?',
        options: makeOptions('I', ['II', 'III', 'IV'], 9412),
        correctAnswer: 'I',
        explanation: '👉 a × 1 = I × 1 ⟹ a = I. Bạc (Ag) luôn có hóa trị I.'
      },
      {
        id: 19,
        question: 'Câu 19: Trong hợp chất Crom(III) oxit (Cr₂O₃), nguyên tố Crom (Cr) có hóa trị mấy?',
        mathExpression: '\\mathrm{Cr_2^{\\mathbf{a}}O_3^{\\mathbf{II}}} \\implies a = ?',
        options: makeOptions('III', ['II', 'VI', 'IV'], 9419),
        correctAnswer: 'III',
        explanation: '👉 a × 2 = II × 3 ⟹ a = III. Trong Cr₂O₃, Cr có hóa trị III.'
      },
      {
        id: 20,
        question: 'Câu 20: Trong hợp chất Bari hiđroxit (Ba(OH)₂, nhóm OH hóa trị I), Bari (Ba) có hóa trị mấy?',
        mathExpression: '\\mathrm{Ba^{\\mathbf{a}}(OH)_2^{\\mathbf{I}}} \\implies a = ?',
        options: makeOptions('II', ['I', 'III', 'IV'], 9426),
        correctAnswer: 'II',
        explanation: '👉 a × 1 = I × 2 ⟹ a = II. Bari (Ba) là kim loại kiềm thổ, luôn có hóa trị II.'
      },
    ]
  },
  {
    id: 'de_7',
    examNo: 7,
    title: 'Đề 7: Xác Định Công Thức Hóa Học Vô Cơ Khi Biết Hóa Trị',
    shortTitle: 'Đề 7: Lập CTHH Theo Hóa Trị',
    icon: '📝',
    desc: 'Áp dụng quy tắc hóa trị x . a = y . b lập nhanh và chính xác CTHH của oxide, acid, base và muối.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Hợp chất tạo bởi Nhôm (Al hóa trị III) và Oxi (O hóa trị II) có công thức hóa học đúng là:',
        mathExpression: '\\mathrm{Al^{III}} + \\mathrm{O^{II}} \\implies ?',
        options: makeOptions('Al₂O₃', ['AlO', 'Al₃O₂', 'Al₂O'], 9324),
        correctAnswer: 'Al₂O₃',
        explanation: '👉 Theo quy tắc hóa trị: x/y = II/III ⟹ x = 2, y = 3 ⟹ CTHH là Al₂O₃.'
      },
      {
        id: 2,
        question: 'Câu 2: Hợp chất tạo bởi Canxi (Ca hóa trị II) và Oxi (O hóa trị II) có công thức hóa học đúng là:',
        mathExpression: '\\mathrm{Ca^{II}} + \\mathrm{O^{II}} \\implies ?',
        options: makeOptions('CaO', ['Ca₂O₂', 'CaO₂', 'Ca₂O'], 9331),
        correctAnswer: 'CaO',
        explanation: '👉 Cùng hóa trị II nên chỉ số tối giản là 1:1 ⟹ CTHH là CaO.'
      },
      {
        id: 3,
        question: 'Câu 3: Hợp chất tạo bởi Sắt (Fe hóa trị III) và nhóm sunfat (SO₄ hóa trị II) có CTHH đúng là:',
        mathExpression: '\\mathrm{Fe^{III}} + \\mathrm{(SO_4)^{II}} \\implies ?',
        options: makeOptions('Fe₂(SO₄)₃', ['FeSO₄', 'Fe₃(SO₄)₂', 'Fe₂(SO₄)'], 9338),
        correctAnswer: 'Fe₂(SO₄)₃',
        explanation: '👉 x/y = II/III ⟹ x = 2, y = 3 ⟹ CTHH là Fe₂(SO₄)₃ (Sắt(III) sunfat).'
      },
      {
        id: 4,
        question: 'Câu 4: Hợp chất tạo bởi Natri (Na hóa trị I) và nhóm cacbonat (CO₃ hóa trị II) có CTHH đúng là:',
        mathExpression: '\\mathrm{Na^{I}} + \\mathrm{(CO_3)^{II}} \\implies ?',
        options: makeOptions('Na₂CO₃', ['NaCO₃', 'Na(CO₃)₂', 'Na₃CO₃'], 9345),
        correctAnswer: 'Na₂CO₃',
        explanation: '👉 x/y = II/I ⟹ x = 2, y = 1 ⟹ CTHH là Na₂CO₃ (Natri cacbonat).'
      },
      {
        id: 5,
        question: 'Câu 5: Hợp chất tạo bởi Canxi (Ca hóa trị II) và nhóm photphat (PO₄ hóa trị III) có CTHH đúng là:',
        mathExpression: '\\mathrm{Ca^{II}} + \\mathrm{(PO_4)^{III}} \\implies ?',
        options: makeOptions('Ca₃(PO₄)₂', ['CaPO₄', 'Ca₂(PO₄)₃', 'Ca(PO₄)₂'], 9352),
        correctAnswer: 'Ca₃(PO₄)₂',
        explanation: '👉 x/y = III/II ⟹ x = 3, y = 2 ⟹ CTHH là Ca₃(PO₄)₂.'
      },
      {
        id: 6,
        question: 'Câu 6: Hợp chất tạo bởi Bari (Ba hóa trị II) và nhóm hiđroxit (OH hóa trị I) có CTHH đúng là:',
        mathExpression: '\\mathrm{Ba^{II}} + \\mathrm{(OH)^{I}} \\implies ?',
        options: makeOptions('Ba(OH)₂', ['BaOH', 'Ba₂(OH)', 'Ba(OH)₃'], 9359),
        correctAnswer: 'Ba(OH)₂',
        explanation: '👉 x/y = I/II ⟹ x = 1, y = 2 ⟹ CTHH là Ba(OH)₂.'
      },
      {
        id: 7,
        question: 'Câu 7: Hợp chất tạo bởi Sắt (Fe hóa trị II) và Clo (Cl hóa trị I) có CTHH đúng là:',
        mathExpression: '\\mathrm{Fe^{II}} + \\mathrm{Cl^{I}} \\implies ?',
        options: makeOptions('FeCl₂', ['FeCl', 'FeCl₃', 'Fe₂Cl'], 9366),
        correctAnswer: 'FeCl₂',
        explanation: '👉 x/y = I/II ⟹ x = 1, y = 2 ⟹ CTHH là FeCl₂ (Sắt(II) clorua).'
      },
      {
        id: 8,
        question: 'Câu 8: Hợp chất tạo bởi Sắt (Fe hóa trị III) và Clo (Cl hóa trị I) có CTHH đúng là:',
        mathExpression: '\\mathrm{Fe^{III}} + \\mathrm{Cl^{I}} \\implies ?',
        options: makeOptions('FeCl₃', ['FeCl₂', 'FeCl', 'Fe₃Cl'], 9373),
        correctAnswer: 'FeCl₃',
        explanation: '👉 x/y = I/III ⟹ x = 1, y = 3 ⟹ CTHH là FeCl₃ (Sắt(III) clorua).'
      },
      {
        id: 9,
        question: 'Câu 9: Hợp chất tạo bởi Photpho (P hóa trị V) và Oxi (O hóa trị II) có CTHH đúng là:',
        mathExpression: '\\mathrm{P^{V}} + \\mathrm{O^{II}} \\implies ?',
        options: makeOptions('P₂O₅', ['PO₂', 'P₅O₂', 'P₂O₃'], 9380),
        correctAnswer: 'P₂O₅',
        explanation: '👉 x/y = II/V ⟹ x = 2, y = 5 ⟹ CTHH là P₂O₅ (Điphotpho pentaoxit).'
      },
      {
        id: 10,
        question: 'Câu 10: Hợp chất tạo bởi Đồng (Cu hóa trị II) và nhóm nitrat (NO₃ hóa trị I) có CTHH đúng là:',
        mathExpression: '\\mathrm{Cu^{II}} + \\mathrm{(NO_3)^{I}} \\implies ?',
        options: makeOptions('Cu(NO₃)₂', ['CuNO₃', 'Cu₂(NO₃)', 'Cu(NO₃)₃'], 9387),
        correctAnswer: 'Cu(NO₃)₂',
        explanation: '👉 x/y = I/II ⟹ x = 1, y = 2 ⟹ CTHH là Cu(NO₃)₂.'
      },
      {
        id: 11,
        question: 'Câu 11: Hợp chất tạo bởi Magie (Mg hóa trị II) và nhóm cacbonat (CO₃ hóa trị II) có CTHH đúng là:',
        mathExpression: '\\mathrm{Mg^{II}} + \\mathrm{(CO_3)^{II}} \\implies ?',
        options: makeOptions('MgCO₃', ['Mg₂(CO₃)₂', 'Mg(CO₃)₂', 'Mg₂CO₃'], 9394),
        correctAnswer: 'MgCO₃',
        explanation: '👉 Cùng hóa trị II nên chỉ số tối giản là 1:1 ⟹ CTHH là MgCO₃.'
      },
      {
        id: 12,
        question: 'Câu 12: Hợp chất tạo bởi Kali (K hóa trị I) và nhóm sunfat (SO₄ hóa trị II) có CTHH đúng là:',
        mathExpression: '\\mathrm{K^{I}} + \\mathrm{(SO_4)^{II}} \\implies ?',
        options: makeOptions('K₂SO₄', ['KSO₄', 'K(SO₄)₂', 'K₂SO₃'], 9401),
        correctAnswer: 'K₂SO₄',
        explanation: '👉 x/y = II/I ⟹ x = 2, y = 1 ⟹ CTHH là K₂SO₄.'
      },
      {
        id: 13,
        question: 'Câu 13: Hợp chất tạo bởi Kẽm (Zn hóa trị II) và Oxi (O hóa trị II) có CTHH đúng là:',
        mathExpression: '\\mathrm{Zn^{II}} + \\mathrm{O^{II}} \\implies ?',
        options: makeOptions('ZnO', ['Zn₂O', 'ZnO₂', 'Zn₂O₃'], 9408),
        correctAnswer: 'ZnO',
        explanation: '👉 Cùng hóa trị II ⟹ CTHH là ZnO (Kẽm oxit).'
      },
      {
        id: 14,
        question: 'Câu 14: Hợp chất tạo bởi Nhôm (Al hóa trị III) và Clo (Cl hóa trị I) có CTHH đúng là:',
        mathExpression: '\\mathrm{Al^{III}} + \\mathrm{Cl^{I}} \\implies ?',
        options: makeOptions('AlCl₃', ['AlCl', 'AlCl₂', 'Al₃Cl'], 9415),
        correctAnswer: 'AlCl₃',
        explanation: '👉 x/y = I/III ⟹ x = 1, y = 3 ⟹ CTHH là AlCl₃ (Nhôm clorua).'
      },
      {
        id: 15,
        question: 'Câu 15: Hợp chất tạo bởi Hiđro (H hóa trị I) và nhóm photphat (PO₄ hóa trị III) có CTHH đúng là:',
        mathExpression: '\\mathrm{H^{I}} + \\mathrm{(PO_4)^{III}} \\implies ?',
        options: makeOptions('H₃PO₄', ['HPO₄', 'H₂(PO₄)₃', 'H₃P'], 9422),
        correctAnswer: 'H₃PO₄',
        explanation: '👉 x/y = III/I ⟹ x = 3, y = 1 ⟹ CTHH là H₃PO₄ (Axit photphoric).'
      },
      {
        id: 16,
        question: 'Câu 16: Hợp chất tạo bởi Bạc (Ag hóa trị I) và nhóm photphat (PO₄ hóa trị III) có CTHH đúng là:',
        mathExpression: '\\mathrm{Ag^{I}} + \\mathrm{(PO_4)^{III}} \\implies ?',
        options: makeOptions('Ag₃PO₄', ['AgPO₄', 'Ag₂(PO₄)₃', 'Ag(PO₄)₂'], 9429),
        correctAnswer: 'Ag₃PO₄',
        explanation: '👉 x/y = III/I ⟹ x = 3, y = 1 ⟹ CTHH là Ag₃PO₄ (Bạc photphat, kết tủa vàng).'
      },
      {
        id: 17,
        question: 'Câu 17: Hợp chất tạo bởi Crom (Cr hóa trị III) và Oxi (O hóa trị II) có CTHH đúng là:',
        mathExpression: '\\mathrm{Cr^{III}} + \\mathrm{O^{II}} \\implies ?',
        options: makeOptions('Cr₂O₃', ['CrO', 'CrO₃', 'Cr₃O₂'], 9436),
        correctAnswer: 'Cr₂O₃',
        explanation: '👉 x/y = II/III ⟹ x = 2, y = 3 ⟹ CTHH là Cr₂O₃ (Crom(III) oxit lưỡng tính).'
      },
      {
        id: 18,
        question: 'Câu 18: Hợp chất tạo bởi Crom (Cr hóa trị III) và nhóm hiđroxit (OH hóa trị I) có CTHH đúng là:',
        mathExpression: '\\mathrm{Cr^{III}} + \\mathrm{(OH)^{I}} \\implies ?',
        options: makeOptions('Cr(OH)₃', ['CrOH', 'Cr(OH)₂', 'Cr₂(OH)₃'], 9443),
        correctAnswer: 'Cr(OH)₃',
        explanation: '👉 x/y = I/III ⟹ x = 1, y = 3 ⟹ CTHH là Cr(OH)₃ (Crom(III) hiđroxit lưỡng tính).'
      },
      {
        id: 19,
        question: 'Câu 19: Hợp chất tạo bởi Kẽm (Zn hóa trị II) và nhóm hiđroxit (OH hóa trị I) có CTHH đúng là:',
        mathExpression: '\\mathrm{Zn^{II}} + \\mathrm{(OH)^{I}} \\implies ?',
        options: makeOptions('Zn(OH)₂', ['ZnOH', 'Zn₂(OH)', 'Zn(OH)₃'], 9450),
        correctAnswer: 'Zn(OH)₂',
        explanation: '👉 x/y = I/II ⟹ x = 1, y = 2 ⟹ CTHH là Zn(OH)₂ (Kẽm hiđroxit lưỡng tính).'
      },
      {
        id: 20,
        question: 'Câu 20: Hợp chất tạo bởi Nhôm (Al hóa trị III) và nhóm hiđroxit (OH hóa trị I) có CTHH đúng là:',
        mathExpression: '\\mathrm{Al^{III}} + \\mathrm{(OH)^{I}} \\implies ?',
        options: makeOptions('Al(OH)₃', ['AlOH', 'Al(OH)₂', 'Al₃(OH)'], 9457),
        correctAnswer: 'Al(OH)₃',
        explanation: '👉 x/y = I/III ⟹ x = 1, y = 3 ⟹ CTHH là Al(OH)₃ (Nhôm hiđroxit lưỡng tính).'
      },
    ]
  },
  {
    id: 'de_8',
    examNo: 8,
    title: 'Đề 8: Phân Loại Hợp Chất Vô Cơ & Chất Lưỡng Tính',
    shortTitle: 'Đề 8: Phân Loại Vô Cơ & Lưỡng Tính',
    icon: '🧬',
    desc: 'Xác định Oxide acid, Oxide base, Acid, Base, Muối và đặc biệt nhận diện chính xác Oxide lưỡng tính (Al2O3, ZnO, Cr2O3), Hydroxide lưỡng tính (Al(OH)3, Zn(OH)2, Cr(OH)3).',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Chất nào sau đây là một OXIDE LƯỠNG TÍNH (tác dụng được với cả dung dịch acid và dung dịch base/kiềm)?',
        mathExpression: '\\text{Oxide lưỡng tính} = ?',
        options: makeOptions('Al₂O₃', ['Na₂O', 'SO₂', 'CaO'], 9355),
        correctAnswer: 'Al₂O₃',
        explanation: '👉 Al₂O₃ (Nhôm oxit) là oxide lưỡng tính kinh điển, vừa tan trong axit (như HCl), vừa tan trong kiềm (như NaOH).'
      },
      {
        id: 2,
        question: 'Câu 2: Chất nào sau đây là một OXIDE LƯỠNG TÍNH?',
        mathExpression: '\\text{Oxide lưỡng tính} = ?',
        options: makeOptions('ZnO', ['CuO', 'CO₂', 'BaO'], 9362),
        correctAnswer: 'ZnO',
        explanation: '👉 ZnO (Kẽm oxit) là oxide lưỡng tính (cùng với Al₂O₃, Cr₂O₃).'
      },
      {
        id: 3,
        question: 'Câu 3: Chất nào sau đây là một OXIDE LƯỠNG TÍNH?',
        mathExpression: '\\text{Oxide lưỡng tính} = ?',
        options: makeOptions('Cr₂O₃', ['Fe₂O₃', 'P₂O₅', 'MgO'], 9369),
        correctAnswer: 'Cr₂O₃',
        explanation: '👉 Cr₂O₃ (Crom(III) oxit) là oxide lưỡng tính. Chú ý: Fe₂O₃ chỉ là oxide base!'
      },
      {
        id: 4,
        question: 'Câu 4: Chất nào sau đây là một HYDROXIDE (HIĐROXIT) LƯỠNG TÍNH?',
        mathExpression: '\\text{Hydroxide lưỡng tính} = ?',
        options: makeOptions('Al(OH)₃', ['Fe(OH)₃', 'NaOH', 'Cu(OH)₂'], 9376),
        correctAnswer: 'Al(OH)₃',
        explanation: '👉 Al(OH)₃ (Nhôm hiđroxit) là hiđroxit lưỡng tính dạng kết tủa keo trắng, tan được cả trong axit mạnh và kiềm mạnh.'
      },
      {
        id: 5,
        question: 'Câu 5: Chất nào sau đây là một HYDROXIDE (HIĐROXIT) LƯỠNG TÍNH?',
        mathExpression: '\\text{Hydroxide lưỡng tính} = ?',
        options: makeOptions('Zn(OH)₂', ['Mg(OH)₂', 'Ba(OH)₂', 'Fe(OH)₂'], 9383),
        correctAnswer: 'Zn(OH)₂',
        explanation: '👉 Zn(OH)₂ (Kẽm hiđroxit) là hiđroxit lưỡng tính.'
      },
      {
        id: 6,
        question: 'Câu 6: Chất nào sau đây là một HYDROXIDE (HIĐROXIT) LƯỠNG TÍNH?',
        mathExpression: '\\text{Hydroxide lưỡng tính} = ?',
        options: makeOptions('Cr(OH)₃', ['Fe(OH)₃', 'Ca(OH)₂', 'KOH'], 9390),
        correctAnswer: 'Cr(OH)₃',
        explanation: '👉 Cr(OH)₃ (Crom(III) hiđroxit) là hiđroxit lưỡng tính màu lục xám.'
      },
      {
        id: 7,
        question: 'Câu 7: Chất nào sau đây thuộc loại OXIDE ACID (oxit axit)?',
        mathExpression: '\\text{Oxide acid} = ?',
        options: makeOptions('SO₂', ['CaO', 'Fe₂O₃', 'Na₂O'], 9397),
        correctAnswer: 'SO₂',
        explanation: '👉 SO₂ (Lưu huỳnh đioxit) là oxide acid, tương ứng với axit H₂SO₃.'
      },
      {
        id: 8,
        question: 'Câu 8: Chất nào sau đây thuộc loại OXIDE ACID?',
        mathExpression: '\\text{Oxide acid} = ?',
        options: makeOptions('CO₂', ['BaO', 'CuO', 'FeO'], 9404),
        correctAnswer: 'CO₂',
        explanation: '👉 CO₂ (Cacbon đioxit) là oxide acid, tác dụng với nước tạo H₂CO₃.'
      },
      {
        id: 9,
        question: 'Câu 9: Chất nào sau đây thuộc loại OXIDE ACID?',
        mathExpression: '\\text{Oxide acid} = ?',
        options: makeOptions('P₂O₅', ['MgO', 'Al₂O₃', 'K₂O'], 9411),
        correctAnswer: 'P₂O₅',
        explanation: '👉 P₂O₅ (Điphotpho pentaoxit) là oxide acid, tác dụng với nước tạo H₃PO₄.'
      },
      {
        id: 10,
        question: 'Câu 10: Chất nào sau đây thuộc loại OXIDE BASE (oxit bazơ)?',
        mathExpression: '\\text{Oxide base} = ?',
        options: makeOptions('CaO', ['SO₃', 'P₂O₅', 'CO₂'], 9418),
        correctAnswer: 'CaO',
        explanation: '👉 CaO (Canxi oxit) là oxide base, tác dụng với nước tạo bazơ Ca(OH)₂.'
      },
      {
        id: 11,
        question: 'Câu 11: Chất nào sau đây thuộc loại OXIDE BASE?',
        mathExpression: '\\text{Oxide base} = ?',
        options: makeOptions('Na₂O', ['N₂O₅', 'SO₂', 'SiO₂'], 9425),
        correctAnswer: 'Na₂O',
        explanation: '👉 Na₂O (Natri oxit) là oxide base của kim loại kiềm Na.'
      },
      {
        id: 12,
        question: 'Câu 12: Chất nào sau đây thuộc loại OXIDE BASE?',
        mathExpression: '\\text{Oxide base} = ?',
        options: makeOptions('CuO', ['SO₂', 'CO₂', 'Cl₂O₇'], 9432),
        correctAnswer: 'CuO',
        explanation: '👉 CuO (Đồng(II) oxit) là oxide base màu đen, tan trong axit tạo muối đồng(II).'
      },
      {
        id: 13,
        question: 'Câu 13: Chất nào sau đây là một ACID (axit)?',
        mathExpression: '\\text{Acid} = ?',
        options: makeOptions('H₂SO₄', ['Na₂SO₄', 'NaOH', 'CaO'], 9439),
        correctAnswer: 'H₂SO₄',
        explanation: '👉 H₂SO₄ (Axit sunfuric) phân li ra ion H⁺ trong nước, là một axit mạnh.'
      },
      {
        id: 14,
        question: 'Câu 14: Chất nào sau đây là một ACID?',
        mathExpression: '\\text{Acid} = ?',
        options: makeOptions('HCl', ['NaCl', 'NaOH', 'H₂O'], 9446),
        correctAnswer: 'HCl',
        explanation: '👉 HCl (Axit clohiđric) là một acid vô cơ mạnh.'
      },
      {
        id: 15,
        question: 'Câu 15: Chất nào sau đây là một BASE (bazơ kiềm tan trong nước)?',
        mathExpression: '\\text{Base kiềm tan} = ?',
        options: makeOptions('NaOH', ['Cu(OH)₂', 'Fe(OH)₃', 'Al(OH)₃'], 9453),
        correctAnswer: 'NaOH',
        explanation: '👉 NaOH (Natri hiđroxit) là bazơ tan tốt (kiềm), đổi màu quỳ tím thành xanh.'
      },
      {
        id: 16,
        question: 'Câu 16: Chất nào sau đây là một BASE KHÔNG TAN trong nước?',
        mathExpression: '\\text{Base không tan} = ?',
        options: makeOptions('Cu(OH)₂', ['NaOH', 'KOH', 'Ba(OH)₂'], 9460),
        correctAnswer: 'Cu(OH)₂',
        explanation: '👉 Cu(OH)₂ là bazơ không tan trong nước, dạng kết tủa màu xanh lam.'
      },
      {
        id: 17,
        question: 'Câu 17: Chất nào sau đây thuộc loại MUỐI?',
        mathExpression: '\\text{Muối} = ?',
        options: makeOptions('CaCO₃', ['CaO', 'Ca(OH)₂', 'H₂CO₃'], 9467),
        correctAnswer: 'CaCO₃',
        explanation: '👉 CaCO₃ (Canxi cacbonat) là muối tạo bởi cation Ca²⁺ và anion gốc axit CO₃²⁻.'
      },
      {
        id: 18,
        question: 'Câu 18: Chất nào sau đây thuộc loại MUỐI?',
        mathExpression: '\\text{Muối} = ?',
        options: makeOptions('CuSO₄', ['CuO', 'Cu(OH)₂', 'H₂SO₄'], 9474),
        correctAnswer: 'CuSO₄',
        explanation: '👉 CuSO₄ (Đồng(II) sunfat) là muối.'
      },
      {
        id: 19,
        question: 'Câu 19: Ba oxit lưỡng tính quan trọng nhất mà học sinh cần ghi nhớ gồm:',
        mathExpression: '\\text{Bộ 3 Oxide lưỡng tính} = ?',
        options: makeOptions('Al₂O₃, ZnO, Cr₂O₃', ['Na₂O, CaO, BaO', 'Fe₂O₃, CuO, MgO', 'CO₂, SO₂, P₂O₅'], 9481),
        correctAnswer: 'Al₂O₃, ZnO, Cr₂O₃',
        explanation: '👉 3 oxit lưỡng tính tiêu biểu nhất cần thuộc lòng: Al₂O₃, ZnO, Cr₂O₃!'
      },
      {
        id: 20,
        question: 'Câu 20: Ba hiđroxit lưỡng tính tiêu biểu nhất mà học sinh cần ghi nhớ gồm:',
        mathExpression: '\\text{Bộ 3 Hydroxide lưỡng tính} = ?',
        options: makeOptions('Al(OH)₃, Zn(OH)₂, Cr(OH)₃', ['NaOH, KOH, Ba(OH)₂', 'Fe(OH)₃, Cu(OH)₂, Mg(OH)₂', 'Ca(OH)₂, Ba(OH)₂, LiOH'], 9488),
        correctAnswer: 'Al(OH)₃, Zn(OH)₂, Cr(OH)₃',
        explanation: '👉 3 hiđroxit lưỡng tính tiêu biểu nhất: Al(OH)₃, Zn(OH)₂, Cr(OH)₃!'
      },
    ]
  },
  {
    id: 'de_9',
    examNo: 9,
    title: 'Đề 9: Xác Định Tính Tan Của Hợp Chất & Màu Sắc Kết Tủa',
    shortTitle: 'Đề 9: Bảng Tính Tan & Kết Tủa',
    icon: '💧',
    desc: 'Quy tắc bảng tính tan: Muối NO3-, kim loại kiềm tan 100%, kết tủa trắng (AgCl, BaSO4, CaCO3), kết tủa màu (Cu(OH)2 xanh, Fe(OH)3 nâu đỏ...).',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Tất cả các muối của gốc axit nào sau đây ĐỀU TAN hoàn toàn trong nước?',
        mathExpression: '\\text{Muối luôn tan 100\\%} = ?',
        options: makeOptions('Gốc Nitrat (-NO₃)', ['Gốc Cacbonat (=CO₃)', 'Gốc Sunfat (=SO₄)', 'Gốc Clorua (-Cl)'], 9386),
        correctAnswer: 'Gốc Nitrat (-NO₃)',
        explanation: '👉 Quy tắc vàng: Tất cả các muối nitrat (-NO₃) đều tan tốt trong nước, không có ngoại lệ!'
      },
      {
        id: 2,
        question: 'Câu 2: Tất cả các muối của các kim loại nào sau đây ĐỀU TAN tốt trong nước?',
        mathExpression: '\\text{Cation luôn tan} = ?',
        options: makeOptions('Natri (Na⁺) và Kali (K⁺)', ['Bari (Ba²⁺) và Canxi (Ca²⁺)', 'Sắt (Fe²⁺) và Đồng (Cu²⁺)', 'Nhôm (Al³⁺) và Kẽm (Zn²⁺)'], 9393),
        correctAnswer: 'Natri (Na⁺) và Kali (K⁺)',
        explanation: '👉 Mọi muối chứa Na⁺, K⁺ và NH₄⁺ đều tan tốt trong nước!'
      },
      {
        id: 3,
        question: 'Câu 3: Hợp chất Bạc clorua (AgCl) trong nước có tính chất nào sau đây?',
        mathExpression: '\\mathbf{AgCl} \\implies ?',
        options: makeOptions('Không tan, là kết tủa trắng', ['Tan rất tốt', 'Không tan, là kết tủa đen', 'Tan một phần tạo kiềm'], 9400),
        correctAnswer: 'Không tan, là kết tủa trắng',
        explanation: '👉 AgCl là chất kết tủa màu trắng, không tan trong axit (dấu hiệu nhận biết ion Cl⁻ bằng AgNO₃).'
      },
      {
        id: 4,
        question: 'Câu 4: Hợp chất Bari sunfat (BaSO₄) trong nước có tính chất nào sau đây?',
        mathExpression: '\\mathbf{BaSO_4} \\implies ?',
        options: makeOptions('Không tan, là kết tủa trắng bền không tan trong axit', ['Tan rất tốt tạo dung dịch trong suốt', 'Kết tủa màu xanh lam', 'Tan trong axit giải phóng khí'], 9407),
        correctAnswer: 'Không tan, là kết tủa trắng bền không tan trong axit',
        explanation: '👉 BaSO₄ là kết tủa màu trắng cực bền, không tan cả trong axit mạnh (dùng Ba²⁺ nhận biết gốc SO₄²⁻).'
      },
      {
        id: 5,
        question: 'Câu 5: Hợp chất Đá vôi (CaCO₃) trong nước có tính chất nào sau đây?',
        mathExpression: '\\mathbf{CaCO_3} \\implies ?',
        options: makeOptions('Không tan, là chất rắn màu trắng', ['Tan hoàn toàn', 'Tan một phần tạo dung dịch kiềm', 'Kết tủa màu vàng tươi'], 9414),
        correctAnswer: 'Không tan, là chất rắn màu trắng',
        explanation: '👉 CaCO₃ không tan trong nước nguyên chất, tan trong axit sủi bọt khí CO₂.'
      },
      {
        id: 6,
        question: 'Câu 6: Hợp chất Đồng(II) hiđroxit (Cu(OH)₂) là chất kết tủa có màu gì đặc trưng?',
        mathExpression: '\\mathbf{Cu(OH)_2} \\implies ?',
        options: makeOptions('Kết tủa màu xanh lam', ['Kết tủa màu nâu đỏ', 'Kết tủa màu trắng', 'Kết tủa màu vàng'], 9421),
        correctAnswer: 'Kết tủa màu xanh lam',
        explanation: '👉 Cu(OH)₂ là kết tủa màu xanh lam (xanh da trời) đặc trưng.'
      },
      {
        id: 7,
        question: 'Câu 7: Hợp chất Sắt(III) hiđroxit (Fe(OH)₃) là chất kết tủa có màu gì đặc trưng?',
        mathExpression: '\\mathbf{Fe(OH)_3} \\implies ?',
        options: makeOptions('Kết tủa màu nâu đỏ', ['Kết tủa màu xanh lam', 'Kết tủa màu trắng xanh', 'Kết tủa màu đen'], 9428),
        correctAnswer: 'Kết tủa màu nâu đỏ',
        explanation: '👉 Fe(OH)₃ là kết tủa màu nâu đỏ (màu gỉ sắt).'
      },
      {
        id: 8,
        question: 'Câu 8: Hợp chất Sắt(II) hiđroxit (Fe(OH)₂) vừa tạo thành trong dung dịch có màu gì?',
        mathExpression: '\\mathbf{Fe(OH)_2} \\implies ?',
        options: makeOptions('Kết tủa màu trắng xanh', ['Kết tủa màu nâu đỏ', 'Kết tủa màu xanh lam', 'Kết tủa màu vàng'], 9435),
        correctAnswer: 'Kết tủa màu trắng xanh',
        explanation: '👉 Fe(OH)₂ là kết tủa màu trắng xanh, để ngoài không khí sẽ nhanh chóng bị oxi hóa thành Fe(OH)₃ màu nâu đỏ.'
      },
      {
        id: 9,
        question: 'Câu 9: Hợp chất Nhôm hiđroxit (Al(OH)₃) có dạng kết tủa như thế nào?',
        mathExpression: '\\mathbf{Al(OH)_3} \\implies ?',
        options: makeOptions('Kết tủa dạng keo trắng', ['Kết tủa tinh thể màu xanh', 'Dung dịch trong suốt', 'Kết tủa màu nâu đen'], 9442),
        correctAnswer: 'Kết tủa dạng keo trắng',
        explanation: '👉 Al(OH)₃ kết tủa dạng keo trắng, tan được trong kiềm dư tạo muối aluminat.'
      },
      {
        id: 10,
        question: 'Câu 10: Hợp chất Natri hiđroxit (NaOH) trong nước có tính chất:',
        mathExpression: '\\mathbf{NaOH} \\implies ?',
        options: makeOptions('Tan rất tốt, tỏa nhiều nhiệt tạo dung dịch kiềm', ['Không tan, kết tủa trắng', 'Ít tan trong nước', 'Kết tủa keo'], 9449),
        correctAnswer: 'Tan rất tốt, tỏa nhiều nhiệt tạo dung dịch kiềm',
        explanation: '👉 NaOH là bazơ tan rất mạnh (xút ăn da), tan nhiều trong nước và tỏa nhiệt lớn.'
      },
      {
        id: 11,
        question: 'Câu 11: Hợp chất Canxi hiđroxit (Ca(OH)₂, vôi tôi) trong nước có tính chất:',
        mathExpression: '\\mathbf{Ca(OH)_2} \\implies ?',
        options: makeOptions('Ít tan trong nước (phần tan là nước vôi trong)', ['Tan vô hạn trong nước', 'Hoàn toàn không tan', 'Kết tủa màu xanh'], 9456),
        correctAnswer: 'Ít tan trong nước (phần tan là nước vôi trong)',
        explanation: '👉 Ca(OH)₂ là chất ít tan trong nước, phần dung dịch lọc trong suốt chính là nước vôi trong.'
      },
      {
        id: 12,
        question: 'Câu 12: Hợp chất Đồng(II) sunfat (CuSO₄) trong nước có tính chất:',
        mathExpression: '\\mathbf{CuSO_4} \\implies ?',
        options: makeOptions('Tan tốt, tạo dung dịch màu xanh lam', ['Không tan, kết tủa trắng', 'Không tan, kết tủa đen', 'Ít tan'], 9463),
        correctAnswer: 'Tan tốt, tạo dung dịch màu xanh lam',
        explanation: '👉 CuSO₄ tan tốt trong nước tạo dung dịch có màu xanh lam do ion Cu²⁺ hiđrat hóa.'
      },
      {
        id: 13,
        question: 'Câu 13: Hợp chất Bạc photphat (Ag₃PO₄) có màu gì đặc trưng?',
        mathExpression: '\\mathbf{Ag_3PO_4} \\implies ?',
        options: makeOptions('Kết tủa màu vàng', ['Kết tủa màu trắng', 'Kết tủa màu xanh', 'Tan tốt trong nước'], 9470),
        correctAnswer: 'Kết tủa màu vàng',
        explanation: '👉 Ag₃PO₄ là chất kết tủa màu vàng tươi, dùng nhận biết ion PO₄³⁻ bằng dung dịch AgNO₃.'
      },
      {
        id: 14,
        question: 'Câu 14: Hợp chất Chì sunfat (PbSO₄) có tính tan như thế nào?',
        mathExpression: '\\mathbf{PbSO_4} \\implies ?',
        options: makeOptions('Không tan trong nước (kết tủa trắng)', ['Tan rất tốt', 'Tan một phần tạo bọt', 'Kết tủa màu đen'], 9477),
        correctAnswer: 'Không tan trong nước (kết tủa trắng)',
        explanation: '👉 Đa số muối sunfat tan, trừ BaSO₄, PbSO₄ không tan (kết tủa trắng), CaSO₄ ít tan.'
      },
      {
        id: 15,
        question: 'Câu 15: Muối Natri cacbonat (Na₂CO₃) có tan trong nước không?',
        mathExpression: '\\mathbf{Na_2CO_3} \\implies ?',
        options: makeOptions('Tan tốt trong nước', ['Không tan, kết tủa', 'Ít tan', 'Bị thủy phân hoàn toàn bay hơi'], 9484),
        correctAnswer: 'Tan tốt trong nước',
        explanation: '👉 Mặc dù đa số muối cacbonat không tan, nhưng muối cacbonat của Na, K, NH₄ tan rất tốt!'
      },
      {
        id: 16,
        question: 'Câu 16: Muối Bari cacbonat (BaCO₃) có tan trong nước không?',
        mathExpression: '\\mathbf{BaCO_3} \\implies ?',
        options: makeOptions('Không tan, là kết tủa trắng', ['Tan rất tốt', 'Tan một phần', 'Kết tủa màu xanh'], 9491),
        correctAnswer: 'Không tan, là kết tủa trắng',
        explanation: '👉 BaCO₃ không tan trong nước, là kết tủa màu trắng.'
      },
      {
        id: 17,
        question: 'Câu 17: Hợp chất Kẽm hiđroxit (Zn(OH)₂) có dạng kết tủa như thế nào?',
        mathExpression: '\\mathbf{Zn(OH)_2} \\implies ?',
        options: makeOptions('Kết tủa keo trắng, tan được trong kiềm dư', ['Kết tủa màu xanh lam', 'Chất lỏng màu vàng', 'Chất tan vô hạn'], 9498),
        correctAnswer: 'Kết tủa keo trắng, tan được trong kiềm dư',
        explanation: '👉 Zn(OH)₂ là hiđroxit lưỡng tính dạng kết tủa keo trắng, tan trong kiềm dư (như NaOH).'
      },
      {
        id: 18,
        question: 'Câu 18: Dãy muối nào sau đây TẤT CẢ ĐỀU TAN tốt trong nước?',
        mathExpression: '\\text{Dãy muối đều tan} = ?',
        options: makeOptions('NaCl, KNO₃, Cu(NO₃)₂, BaCl₂', ['AgCl, NaCl, CaCO₃, BaSO₄', 'BaSO₄, Na₂SO₄, K₂CO₃, Fe(NO₃)₃', 'CaCO₃, BaCO₃, Ag₃PO₄, CuS'], 9505),
        correctAnswer: 'NaCl, KNO₃, Cu(NO₃)₂, BaCl₂',
        explanation: '👉 NaCl, KNO₃, Cu(NO₃)₂, BaCl₂ đều là muối tan tốt.'
      },
      {
        id: 19,
        question: 'Câu 19: Dãy muối nào sau đây TẤT CẢ ĐỀU KHÔNG TAN trong nước (kết tủa)?',
        mathExpression: '\\text{Dãy muối đều kết tủa} = ?',
        options: makeOptions('AgCl, BaSO₄, CaCO₃, BaCO₃', ['NaCl, BaSO₄, KNO₃, Cu(NO₃)₂', 'Na₂CO₃, CaCO₃, BaCO₃, K₂SO₄', 'CuSO₄, FeCl₃, AlCl₃, BaCl₂'], 9512),
        correctAnswer: 'AgCl, BaSO₄, CaCO₃, BaCO₃',
        explanation: '👉 AgCl, BaSO₄, CaCO₃, BaCO₃ đều là các muối không tan (kết tủa trắng).'
      },
      {
        id: 20,
        question: 'Câu 20: Dãy bazơ nào sau đây gồm các bazơ TAN TỐT (dung dịch kiềm)?',
        mathExpression: '\\text{Dãy bazơ kiềm tan} = ?',
        options: makeOptions('NaOH, KOH, Ba(OH)₂', ['Cu(OH)₂, Fe(OH)₃, Al(OH)₃', 'Mg(OH)₂, Zn(OH)₂, Ca(OH)₂', 'Fe(OH)₂, Fe(OH)₃, Cu(OH)₂'], 9519),
        correctAnswer: 'NaOH, KOH, Ba(OH)₂',
        explanation: '👉 Các bazơ tan tốt: LiOH, NaOH, KOH, Ba(OH)₂ (và Ca(OH)₂ ít tan).'
      },
    ]
  },

];

export function getKhoaHocHoaQuestions(examNo: number): KhoaHocHoaQuestion[] {
  const safeNo = Math.min(9, Math.max(1, examNo));
  const exam = KHOA_HOC_HOA_EXAMS.find(e => e.examNo === safeNo) || KHOA_HOC_HOA_EXAMS[0];
  return exam.questions;
}

export function convertKhoaHocHoaToExamFormat(questions: KhoaHocHoaQuestion[]): any[] {
  return questions.map((q, idx) => {
    const letters = ['A', 'B', 'C', 'D'];
    let correctLetter = 'A';
    const options = (q.options || []).map((optText, oIdx) => {
      const letter = letters[oIdx] || 'A';
      if (optText === q.correctAnswer) {
        correctLetter = letter;
      }
      return {
        id: letter,
        text: optText
      };
    });

    return {
      id: `khh_${q.id || idx + 1}`,
      question: q.question,
      options,
      correctAnswer: correctLetter,
      explanation: q.explanation || '',
      mathExpression: q.mathExpression
    };
  });
}
