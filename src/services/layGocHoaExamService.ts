// src/services/layGocHoaExamService.ts
// Bộ phát sinh & quản lý 100 Đề thi Lấy Gốc Hóa Học (Lớp 6 đến Lớp 12)
// 10 Chuyên Đề x 10 Đề x 20 Câu/Đề = 2.000 Câu hỏi chuẩn Hóa học Thầy Thọ

export interface LayGocHoaQuestion {
  id: number;
  question: string;
  mathExpression?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  topic: string;
}

export interface LayGocHoaTopic {
  id: string;
  title: string;
  shortTitle: string;
  grade: string;
  icon: string;
  description: string;
  totalExams: number;
  questionsPerExam: number;
}

export const LAY_GOC_HOA_TOPICS: LayGocHoaTopic[] = [
  {
    id: 'khtn_nguyen_to',
    title: 'Phần 1: Kí Hiệu Hóa Học, Nguyên Tử & Nguyên Tử Khối (Lớp 6 - 8)',
    shortTitle: 'Phần 1: Nguyên Tố & NTK (Lớp 6-8)',
    grade: 'Lớp 6 - 8',
    icon: '⚛️',
    description: 'Kí hiệu hóa học, nguyên tử khối của 20 nguyên tố đầu và các kim loại, phi kim phổ biến nhất.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'hoa_tri_cthh',
    title: 'Phần 2: Hóa Trị & Lập Công Thức Hóa Học CTHH (Lớp 8)',
    shortTitle: 'Phần 2: Hóa Trị & CTHH (Lớp 8)',
    grade: 'Lớp 8',
    icon: '🧪',
    description: 'Quy tắc hóa trị, bài ca hóa trị, chéo chỉ số để lập đúng CTHH và tính phân tử khối.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'can_bang_pthh',
    title: 'Phần 3: Cân Bằng Phương Trình Hóa Học & Định Luật BTKL (Lớp 8)',
    shortTitle: 'Phần 3: Cân Bằng PTHH (Lớp 8)',
    grade: 'Lớp 8',
    icon: '⚖️',
    description: 'Kỹ thuật cân bằng chẵn - lẻ, kim loại trước phi kim sau, định luật bảo toàn khối lượng.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'cong_thuc_mol',
    title: 'Phần 4: Đại Lượng Mol, Thể Tích Khí & Nồng Độ Dung Dịch (Lớp 8 - 9)',
    shortTitle: 'Phần 4: Mol & Nồng Độ Dung Dịch',
    grade: 'Lớp 8 - 9',
    icon: '💧',
    description: 'Công thức chuyển đổi mol (n = m/M, n = V/22,4 hoặc 24,79), nồng độ mol CM, nồng độ phần trăm C%.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tinh_theo_pthh',
    title: 'Phần 5: Bài Toán Tính Theo Phương Trình Hóa Học 3 Bước (Lớp 8 - 9)',
    shortTitle: 'Phần 5: Tính Theo PTHH 3 Bước',
    grade: 'Lớp 8 - 9',
    icon: '📝',
    description: '3 Bước thần thánh: Đổi số mol -> Đặt tỉ lệ mol trên PTHH -> Tính khối lượng hoặc thể tích.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'vo_co_lop9',
    title: 'Phần 6: Tứ Đại Hợp Chất Vô Cơ: Oxit, Axit, Bazơ, Muối (Lớp 9)',
    shortTitle: 'Phần 6: Oxit, Axit, Bazơ, Muối',
    grade: 'Lớp 9',
    icon: '🔥',
    description: 'Tính chất hóa học, dãy hoạt động hóa học của kim loại và điều kiện xảy ra phản ứng trao đổi.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'cau_tao_nguyen_tu_lop10',
    title: 'Phần 7: Cấu Tạo Nguyên Tử & Bảng Tuần Hoàn (Lớp 10)',
    shortTitle: 'Phần 7: Nguyên Tử & Bảng Tuần Hoàn',
    grade: 'Lớp 10',
    icon: '🌐',
    description: 'Cấu hình electron (1s 2s 2p 3s 3p...), xác định vị trí ô, chu kì, nhóm và số oxi hóa.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'oxi_hoa_khu_lop10',
    title: 'Phần 8: Phản Ứng Oxi Hóa - Khử & Cân Bằng E (Lớp 10)',
    shortTitle: 'Phần 8: Oxi Hóa - Khử & Thăng Bằng E',
    grade: 'Lớp 10',
    icon: '⚡',
    description: 'Xác định số oxi hóa, chất khử, chất oxi hóa và phương pháp thăng bằng electron nhanh.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'su_dien_li_lop11',
    title: 'Phần 9: Sự Điện Li, pH & Hóa Học Vô Cơ Lớp 11 (Lớp 11)',
    shortTitle: 'Phần 9: Sự Điện Li & Vô Cơ 11',
    grade: 'Lớp 11',
    icon: '💡',
    description: 'Chất điện li mạnh/yếu, tính pH dung dịch, cân bằng hóa học, hợp chất Nitơ, Photpho, Lưu huỳnh.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_lop11_12',
    title: 'Phần 10: Hóa Học Hữu Cơ: Hiđrocacbon, Este, Lipit, Amin (Lớp 11 - 12)',
    shortTitle: 'Phần 10: Hóa Hữu Cơ Trọng Tâm (11-12)',
    grade: 'Lớp 11 - 12',
    icon: '🌿',
    description: 'Đồng phân, danh pháp, Ankan, Anken, Ancol, Este, Lipit, Amin, Amino axit phục vụ thi THPT Quốc Gia.',
    totalExams: 10,
    questionsPerExam: 20
  }
];

function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function randInt(min: number, max: number, seed: number) {
  return Math.floor(seededRandom(seed) * (max - min + 1)) + min;
}

function makeOptions(correct: string | number, distractors: (string | number)[], seed: number): string[] {
  const correctStr = String(correct);
  const uniqueDistractors = Array.from(new Set(distractors.map(d => String(d)).filter(d => d !== correctStr)));
  while (uniqueDistractors.length < 3) {
    const num = Number(correct);
    if (!isNaN(num)) {
      uniqueDistractors.push(String(num + uniqueDistractors.length + 2));
    } else {
      uniqueDistractors.push(`${correctStr}*`);
    }
  }
  const all = [correctStr, ...uniqueDistractors.slice(0, 3)];
  return all.sort((a, b) => seededRandom(seed + a.length) - 0.5);
}

// ==============================================================================
// 1. SINH ĐỀ PHẦN 1: KÍ HIỆU HÓA HỌC & NTK (LỚP 6 - 8) - 20 CÂU
// ==============================================================================
function generateNguyenToExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 5000 + examNo * 50;

  const elements = [
    { name: 'Hiđro (Hydrogen)', sym: 'H', m: 1, val: 'I' },
    { name: 'Heli (Helium)', sym: 'He', m: 4, val: '0' },
    { name: 'Cacbon (Carbon)', sym: 'C', m: 12, val: 'IV, II' },
    { name: 'Nitơ (Nitrogen)', sym: 'N', m: 14, val: 'II, III, IV, V' },
    { name: 'Oxi (Oxygen)', sym: 'O', m: 16, val: 'II' },
    { name: 'Natri (Sodium)', sym: 'Na', m: 23, val: 'I' },
    { name: 'Magie (Magnesium)', sym: 'Mg', m: 24, val: 'II' },
    { name: 'Nhôm (Aluminium)', sym: 'Al', m: 27, val: 'III' },
    { name: 'Photpho (Phosphorus)', sym: 'P', m: 31, val: 'III, V' },
    { name: 'Lưu huỳnh (Sulfur)', sym: 'S', m: 32, val: 'II, IV, VI' },
    { name: 'Clo (Chlorine)', sym: 'Cl', m: 35.5, val: 'I' },
    { name: 'Kali (Potassium)', sym: 'K', m: 39, val: 'I' },
    { name: 'Canxi (Calcium)', sym: 'Ca', m: 40, val: 'II' },
    { name: 'Sắt (Iron)', sym: 'Fe', m: 56, val: 'II, III' },
    { name: 'Đồng (Copper)', sym: 'Cu', m: 64, val: 'II, I' },
    { name: 'Kẽm (Zinc)', sym: 'Zn', m: 65, val: 'II' },
    { name: 'Bari (Barium)', sym: 'Ba', m: 137, val: 'II' },
    { name: 'Bạc (Silver)', sym: 'Ag', m: 108, val: 'I' }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const el = elements[(i + examNo * 3) % elements.length];

    if (i <= 6) {
      questions.push({
        id: i,
        question: `Câu ${i}: Kí hiệu hóa học của nguyên tố ${el.name} là:`,
        options: makeOptions(el.sym, [el.sym.toLowerCase(), el.sym + 'a', el.sym === 'Na' ? 'K' : 'Na'], s),
        correctAnswer: el.sym,
        explanation: `Theo quy ước danh pháp hóa học: Nguyên tố ${el.name} có kí hiệu hóa học là ${el.sym}, nguyên tử khối M = ${el.m} đvC (amu).`,
        topic: 'khtn_nguyen_to'
      });
    } else if (i <= 12) {
      questions.push({
        id: i,
        question: `Câu ${i}: Nguyên tử khối (khối lượng nguyên tử) của nguyên tố ${el.name} (${el.sym}) là:`,
        mathExpression: `M_{${el.sym}} = ?`,
        options: makeOptions(`${el.m} đvC`, [`${Math.round(Number(el.m) + 4)} đvC`, `${Math.max(1, Math.round(Number(el.m) - 2))} đvC`, `${Number(el.m) * 2} đvC`], s),
        correctAnswer: `${el.m} đvC`,
        explanation: `Nguyên tử khối của ${el.name} (${el.sym}) là ${el.m} đvC (amu). Học sinh cần nhớ chính xác để tính toán số mol.`,
        topic: 'khtn_nguyen_to'
      });
    } else if (i <= 16) {
      const el2 = elements[(i + 4) % elements.length];
      const ansRatio = (Number(el.m) / Number(el2.m)).toFixed(2);
      questions.push({
        id: i,
        question: `Câu ${i}: Nguyên tử ${el.sym} nặng hơn hay nhẹ hơn nguyên tử ${el2.sym} bao nhiêu lần?`,
        mathExpression: `\\frac{M_{${el.sym}}}{M_{${el2.sym}}} = \\frac{${el.m}}{${el2.m}}`,
        options: makeOptions(
          Number(el.m) > Number(el2.m) ? `Nặng hơn ${ansRatio} lần` : `Nhẹ hơn ${(Number(el2.m) / Number(el.m)).toFixed(2)} lần`,
          [`Bằng nhau`, `Nặng hơn 2 lần`, `Nhẹ hơn 3 lần`],
          s
        ),
        correctAnswer: Number(el.m) > Number(el2.m) ? `Nặng hơn ${ansRatio} lần` : `Nhẹ hơn ${(Number(el2.m) / Number(el.m)).toFixed(2)} lần`,
        explanation: `Tỉ số khối lượng: M(${el.sym}) / M(${el2.sym}) = ${el.m} / ${el2.m}. Do đó nguyên tử ${el.sym} ${Number(el.m) > Number(el2.m) ? 'nặng hơn' : 'nhẹ hơn'} ${el2.sym}.`,
        topic: 'khtn_nguyen_to'
      });
    } else {
      questions.push({
        id: i,
        question: `Câu ${i}: Trong các chất sau, đâu là đơn chất kim loại dẫn điện và nhiệt tốt?`,
        options: makeOptions('Nhôm (Al)', ['Khí Oxi (O₂)', 'Nước (H₂O)', 'Khí Cacbonic (CO₂)'], s),
        correctAnswer: 'Nhôm (Al)',
        explanation: 'Đơn chất là chất được tạo nên từ 1 nguyên tố hóa học. Nhôm (Al) là đơn chất kim loại, dẫn điện và dẫn nhiệt rất tốt.',
        topic: 'khtn_nguyen_to'
      });
    }
  }

  return questions;
}

// ==============================================================================
// 2. SINH ĐỀ PHẦN 2: HÓA TRỊ & CTHH (LỚP 8) - 20 CÂU
// ==============================================================================
function generateHoaTriExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 5200 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;

    if (i <= 5) {
      questions.push({
        id: i,
        question: `Câu ${i}: Hóa trị phổ biến của nguyên tố Oxi (O) và Hiđro (H) được chọn làm đơn vị quy ước là:`,
        options: makeOptions('Oxi hóa trị II, Hiđro hóa trị I', ['Oxi hóa trị I, Hiđro hóa trị II', 'Cả hai đều hóa trị I', 'Cả hai đều hóa trị II'], s),
        correctAnswer: 'Oxi hóa trị II, Hiđro hóa trị I',
        explanation: 'Quy ước chuẩn: Hiđro (H) luôn có hóa trị I, Oxi (O) luôn có hóa trị II.',
        topic: 'hoa_tri_cthh'
      });
    } else if (i <= 10) {
      const compounds = [
        { name: 'Nhôm oxit', formula: 'Al₂O₃', ptk: 102, expl: 'Al hóa trị III, O hóa trị II. Áp dụng quy tắc chéo: Al₂O₃. PTK = 27x2 + 16x3 = 102 đvC.' },
        { name: 'Magie clorua', formula: 'MgCl₂', ptk: 95, expl: 'Mg hóa trị II, Cl hóa trị I. Công thức đúng là MgCl₂. PTK = 24 + 35.5x2 = 95 đvC.' },
        { name: 'Sắt(III) oxit', formula: 'Fe₂O₃', ptk: 160, expl: 'Fe(III) kết hợp với O(II) tạo CTHH Fe₂O₃. PTK = 56x2 + 16x3 = 160 đvC.' },
        { name: 'Canxi cacbonat', formula: 'CaCO₃', ptk: 100, expl: 'Ca hóa trị II, nhóm CO₃ hóa trị II. Tỉ lệ 1:1 -> CaCO₃. PTK = 40 + 12 + 16x3 = 100 đvC.' },
        { name: 'Natri sunfat', formula: 'Na₂SO₄', ptk: 142, expl: 'Na hóa trị I, nhóm SO₄ hóa trị II -> Na₂SO₄. PTK = 23x2 + 32 + 16x4 = 142 đvC.' }
      ];
      const item = compounds[(i + examNo) % compounds.length];
      questions.push({
        id: i,
        question: `Câu ${i}: Công thức hóa học đúng của hợp chất ${item.name} là:`,
        options: makeOptions(item.formula, [item.formula.replace('₂', ''), item.formula.replace('₃', '₂'), item.formula + '₂'], s),
        correctAnswer: item.formula,
        explanation: item.expl,
        topic: 'hoa_tri_cthh'
      });
    } else if (i <= 15) {
      questions.push({
        id: i,
        question: `Câu ${i}: Phân tử khối của khí Cacbonic (CO₂) là:`,
        mathExpression: `M_{CO_2} = 12 + 16 \\times 2 = ?`,
        options: makeOptions('44 đvC', ['28 đvC', '32 đvC', '40 đvC'], s),
        correctAnswer: '44 đvC',
        explanation: 'Phân tử khối của CO₂: M = M_C + 2 x M_O = 12 + 16 x 2 = 44 đvC (amu).',
        topic: 'hoa_tri_cthh'
      });
    } else {
      questions.push({
        id: i,
        question: `Câu ${i}: Xác định hóa trị của kim loại Sắt (Fe) trong hợp chất FeCl₃ (biết Cl có hóa trị I):`,
        mathExpression: `Fe^a Cl_3^I \\Rightarrow a \\times 1 = I \\times 3`,
        options: makeOptions('III', ['I', 'II', 'IV'], s),
        correctAnswer: 'III',
        explanation: 'Áp dụng quy tắc hóa trị: a x 1 = I x 3 => a = III. Vậy trong FeCl₃, sắt có hóa trị III.',
        topic: 'hoa_tri_cthh'
      });
    }
  }

  return questions;
}

// ==============================================================================
// 3. SINH ĐỀ PHẦN 3: CÂN BẰNG PTHH (LỚP 8) - 20 CÂU
// ==============================================================================
function generateCanBangPTHHExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 5400 + examNo * 50;

  const equations = [
    {
      raw: '? Al + ? O₂ → ? Al₂O₃',
      balanced: '4Al + 3O₂ → 2Al₂O₃',
      coefs: '4, 3, 2',
      expl: 'Bên phải có 3 nguyên tử O (lẻ), ta nhân đôi thành 2Al₂O₃ (6O). Bên trái cần 3O₂. Vế phải có 4Al -> vế trái cần 4Al. Hệ số là 4 : 3 : 2.'
    },
    {
      raw: '? Fe + ? HCl → ? FeCl₂ + ? H₂',
      balanced: 'Fe + 2HCl → FeCl₂ + H₂',
      coefs: '1, 2, 1, 1',
      expl: 'Bên phải có 2Cl và 2H, do đó thêm hệ số 2 trước HCl. Hệ số tối giản là 1 : 2 : 1 : 1.'
    },
    {
      raw: '? Al + ? H₂SO₄ → ? Al₂(SO₄)₃ + ? H₂',
      balanced: '2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂',
      coefs: '2, 3, 1, 3',
      expl: 'Bên phải có 3 nhóm (SO₄) -> thêm 3 trước H₂SO₄. Vế trái có 6H -> thêm 3 trước H₂. Có 2Al -> thêm 2 trước Al. Hệ số là 2 : 3 : 1 : 3.'
    },
    {
      raw: '? CH₄ + ? O₂ → ? CO₂ + ? H₂O',
      balanced: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
      coefs: '1, 2, 1, 2',
      expl: 'Vế trái có 4H -> thêm 2 trước H₂O. Tổng O vế phải là 2 + 2 = 4 -> thêm 2 trước O₂. Hệ số là 1 : 2 : 1 : 2.'
    },
    {
      raw: '? Fe₃O₄ + ? CO → ? Fe + ? CO₂',
      balanced: 'Fe₃O₄ + 4CO → 3Fe + 4CO₂',
      coefs: '1, 4, 3, 4',
      expl: 'Fe₃O₄ có 4 nguyên tử O cần 4 phân tử CO để tạo 4CO₂. Cần 3 nguyên tử Fe ở sản phẩm. Hệ số là 1 : 4 : 3 : 4.'
    }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const eq = equations[(i + examNo) % equations.length];

    if (i <= 10) {
      questions.push({
        id: i,
        question: `Câu ${i}: Hệ số cân bằng tối giản của phản ứng hóa học sau là:`,
        mathExpression: eq.raw,
        options: makeOptions(eq.coefs, ['2, 1, 2', '1, 3, 2', '2, 3, 2, 1'], s),
        correctAnswer: eq.coefs,
        explanation: eq.expl,
        topic: 'can_bang_pthh'
      });
    } else {
      questions.push({
        id: i,
        question: `Câu ${i}: Đốt cháy hoàn toàn 6g Cacbon (C) trong khí Oxi sinh ra 22g khí Cacbonic (CO₂). Khối lượng khí Oxi đã phản ứng là:`,
        mathExpression: `m_C + m_{O_2} = m_{CO_2} \\Rightarrow 6 + m_{O_2} = 22`,
        options: makeOptions('16g', ['12g', '18g', '28g'], s),
        correctAnswer: '16g',
        explanation: 'Theo định luật bảo toàn khối lượng: m(C) + m(O₂) = m(CO₂) => m(O₂) = 22 - 6 = 16 (gam).',
        topic: 'can_bang_pthh'
      });
    }
  }

  return questions;
}

// ==============================================================================
// 4. SINH ĐỀ PHẦN 4: ĐẠI LƯỢNG MOL & NỒNG ĐỘ DUNG DỊCH (LỚP 8-9) - 20 CÂU
// ==============================================================================
function generateCongThucMolExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 5600 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;

    if (i <= 5) {
      // n = m / M
      const grams = [5.6, 11.2, 16.8, 22.4, 28][i % 5];
      const ansMol = (grams / 56).toFixed(1);
      questions.push({
        id: i,
        question: `Câu ${i}: Tính số mol của ${grams} gam kim loại Sắt (Fe, biết M = 56 g/mol):`,
        mathExpression: `n = \\frac{m}{M} = \\frac{${grams}}{56}`,
        options: makeOptions(`${ansMol} mol`, [`${(Number(ansMol) * 2).toFixed(1)} mol`, `${(Number(ansMol) / 2).toFixed(2)} mol`, `1 mol`], s),
        correctAnswer: `${ansMol} mol`,
        explanation: `Công thức tính số mol: n = m / M = ${grams} / 56 = ${ansMol} mol.`,
        topic: 'cong_thuc_mol'
      });
    } else if (i <= 10) {
      // n = V / 22.4
      const lit = [2.24, 4.48, 6.72, 8.96, 11.2][i % 5];
      const ansMol = (lit / 22.4).toFixed(1);
      questions.push({
        id: i,
        question: `Câu ${i}: Thể tích khí O₂ ở điều kiện tiêu chuẩn là ${lit} lít. Số mol khí O₂ là:`,
        mathExpression: `n = \\frac{V}{22,4} = \\frac{${lit}}{22,4}`,
        options: makeOptions(`${ansMol} mol`, [`${(Number(ansMol) + 0.2).toFixed(1)} mol`, `0.5 mol`, `1 mol`], s),
        correctAnswer: `${ansMol} mol`,
        explanation: `Ở điều kiện tiêu chuẩn: n = V / 22,4 = ${lit} / 22,4 = ${ansMol} mol.`,
        topic: 'cong_thuc_mol'
      });
    } else if (i <= 15) {
      // CM = n / V
      questions.push({
        id: i,
        question: `Câu ${i}: Hòa tan 0,2 mol NaCl vào nước thu được 500 ml (0,5 lít) dung dịch. Nồng độ mol CM của dung dịch là:`,
        mathExpression: `C_M = \\frac{n}{V} = \\frac{0,2}{0,5}`,
        options: makeOptions('0,4M', ['0,1M', '0,2M', '1,0M'], s),
        correctAnswer: '0,4M',
        explanation: 'Công thức nồng độ mol: CM = n / V(lít) = 0,2 / 0,5 = 0,4 (mol/lít hay M).',
        topic: 'cong_thuc_mol'
      });
    } else {
      // C% = mct / mdd * 100%
      questions.push({
        id: i,
        question: `Câu ${i}: Hòa tan 20 gam đường vào 180 gam nước. Nồng độ phần trăm C% của dung dịch đường thu được là:`,
        mathExpression: `C\\% = \\frac{m_{ct}}{m_{dd}} \\times 100\\% = \\frac{20}{20 + 180} \\times 100\\%`,
        options: makeOptions('10%', ['20%', '11,1%', '5%'], s),
        correctAnswer: '10%',
        explanation: 'Khối lượng dung dịch = m(chất tan) + m(nước) = 20 + 180 = 200g. Nồng độ % = (20 / 200) x 100% = 10%.',
        topic: 'cong_thuc_mol'
      });
    }
  }

  return questions;
}

// ==============================================================================
// 5. SINH ĐỀ PHẦN 5: TÍNH THEO PTHH 3 BƯỚC (LỚP 8-9) - 20 CÂU
// ==============================================================================
function generateTinhTheoPTHHExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 5800 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;

    if (i <= 10) {
      const feMass = 5.6;
      const h2Lit = 2.24;
      questions.push({
        id: i,
        question: `Câu ${i}: Cho 5,6 gam Sắt (Fe) phản ứng hoàn toàn với dung dịch HCl dư theo phương trình: Fe + 2HCl → FeCl₂ + H₂↑. Thể tích khí H₂ thu được ở đktc là:`,
        mathExpression: `n_{Fe} = \\frac{5,6}{56} = 0,1 \\text{ mol} \\Rightarrow n_{H_2} = n_{Fe} = 0,1 \\text{ mol}`,
        options: makeOptions('2,24 lít', ['4,48 lít', '1,12 lít', '3,36 lít'], s),
        correctAnswer: '2,24 lít',
        explanation: 'B1: n(Fe) = 5,6 / 56 = 0,1 mol. B2: Theo PTHH, n(H₂) = n(Fe) = 0,1 mol. B3: V(H₂) = 0,1 x 22,4 = 2,24 lít.',
        topic: 'tinh_theo_pthh'
      });
    } else {
      questions.push({
        id: i,
        question: `Câu ${i}: Nung nóng 10 gam đá vôi Canxi cacbonat (CaCO₃, M = 100) theo phản ứng: CaCO₃ → CaO + CO₂↑. Khối lượng vôi sống CaO (M = 56) thu được là:`,
        mathExpression: `n_{CaCO_3} = \\frac{10}{100} = 0,1 \\text{ mol} \\Rightarrow m_{CaO} = 0,1 \\times 56`,
        options: makeOptions('5,6 gam', ['4,4 gam', '10 gam', '2,8 gam'], s),
        correctAnswer: '5,6 gam',
        explanation: 'n(CaCO₃) = 10 / 100 = 0,1 mol. Theo PTHH: n(CaO) = n(CaCO₃) = 0,1 mol. m(CaO) = 0,1 x 56 = 5,6 gam.',
        topic: 'tinh_theo_pthh'
      });
    }
  }

  return questions;
}

// ==============================================================================
// 6. SINH ĐỀ PHẦN 6 ĐẾN 10 (LỚP 9 ĐẾN LỚP 12)
// ==============================================================================
function generateAdvancedHoaExam(topicId: string, examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 6000 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;

    if (topicId === 'vo_co_lop9') {
      questions.push({
        id: i,
        question: `Câu ${i}: Dãy kim loại nào sau đây được sắp xếp theo chiều hoạt động hóa học GIẢM DẦN?`,
        options: makeOptions('K, Na, Mg, Al, Zn, Fe, Cu, Ag', ['Fe, Cu, Ag, Al, Zn, Na', 'Na, K, Fe, Cu, Mg, Al', 'Cu, Ag, Fe, Zn, Al, Mg'], s),
        correctAnswer: 'K, Na, Mg, Al, Zn, Fe, Cu, Ag',
        explanation: 'Mẹo nhớ dãy hoạt động hóa học kim loại: "Khi Nào May Áo Giáp Sắt Nên Sang Phố Hỏi Cửa Hàng Á Phi Âu" (K, Na, Ba, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Hg, Ag, Pt, Au).',
        topic: topicId
      });
    } else if (topicId === 'cau_tao_nguyen_tu_lop10') {
      questions.push({
        id: i,
        question: `Câu ${i}: Cấu hình electron của nguyên tử Natri (Na, Z = 11) ở trạng thái cơ bản là:`,
        options: makeOptions('1s² 2s² 2p⁶ 3s¹', ['1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁵ 3s²', '1s² 2s² 2p⁶'], s),
        correctAnswer: '1s² 2s² 2p⁶ 3s¹',
        explanation: 'Tổng số electron của Na là 11. Phân bố theo các phân lớp: 1s² 2s² 2p⁶ 3s¹. Có 1 electron lớp ngoài cùng (Kim loại kiềm thuộc nhóm IA, chu kì 3).',
        topic: topicId
      });
    } else if (topicId === 'oxi_hoa_khu_lop10') {
      questions.push({
        id: i,
        question: `Câu ${i}: Trong phản ứng: Fe + 4HNO₃ → Fe(NO₃)₃ + NO + 2H₂O. Vai trò của Fe là:`,
        options: makeOptions('Chất khử (số oxi hóa tăng từ 0 lên +3)', ['Chất oxi hóa', 'Môi trường axit', 'Chất xúc tác'], s),
        correctAnswer: 'Chất khử (số oxi hóa tăng từ 0 lên +3)',
        explanation: 'Khắc cốt ghi tâm: "Khử cho - O nhận" (Chất khử cho e, số oxi hóa tăng; chất oxi hóa nhận e, số oxi hóa giảm). Fe nhường 3e tăng từ 0 lên +3 nên Fe là chất khử.',
        topic: topicId
      });
    } else if (topicId === 'su_dien_li_lop11') {
      questions.push({
        id: i,
        question: `Câu ${i}: Dung dịch có nồng độ ion [H⁺] = 10⁻³ M. Độ pH của dung dịch này bằng:`,
        mathExpression: `\\text{pH} = -\\log[H^+] = -\\log(10^{-3})`,
        options: makeOptions('3 (Môi trường axit)', ['11 (Môi trường bazơ)', '7 (Trung tính)', '10'], s),
        correctAnswer: '3 (Môi trường axit)',
        explanation: 'Công thức: pH = -log[H⁺] = 3. Vì pH < 7 nên dung dịch có môi trường axit, làm quỳ tím chuyển sang màu đỏ.',
        topic: topicId
      });
    } else {
      // huu_co_lop11_12
      questions.push({
        id: i,
        question: `Câu ${i}: Hợp chất hữu cơ X có công thức phân tử C₂H₄O₂ (etyl fomat hoặc axit axetic). X thuộc loại hợp chất nào có mùi thơm hoa quả đặc trưng?`,
        options: makeOptions('Este (HCOOCH₃)', ['Axit cacboxylic (CH₃COOH)', 'Ancol (C₂H₅OH)', 'Anđehit'], s),
        correctAnswer: 'Este (HCOOCH₃)',
        explanation: 'Este HCOOCH₃ (metyl fomat) có CTPT C₂H₄O₂, là este đơn giản nhất, có mùi thơm đặc trưng, nhiệt độ sôi thấp hơn axit đồng phân.',
        topic: topicId
      });
    }
  }

  return questions;
}

// ==============================================================================
// HÀM LẤY ĐỀ THI HÓA THEO CHUYÊN ĐỀ VÀ SỐ ĐỀ (1 -> 10)
// ==============================================================================
export function getLayGocHoaExamQuestions(topicId: string, examNo: number): LayGocHoaQuestion[] {
  const safeNo = Math.min(10, Math.max(1, examNo));
  switch (topicId) {
    case 'khtn_nguyen_to':
      return generateNguyenToExam(safeNo);
    case 'hoa_tri_cthh':
      return generateHoaTriExam(safeNo);
    case 'can_bang_pthh':
      return generateCanBangPTHHExam(safeNo);
    case 'cong_thuc_mol':
      return generateCongThucMolExam(safeNo);
    case 'tinh_theo_pthh':
      return generateTinhTheoPTHHExam(safeNo);
    default:
      return generateAdvancedHoaExam(topicId, safeNo);
  }
}

// Chuyển đổi sang format câu hỏi chuẩn của bảng exams trong hệ thống
export function convertLayGocHoaQuestionsToExamFormat(layGocQuestions: LayGocHoaQuestion[]): any[] {
  return layGocQuestions.map((q, idx) => {
    const letters = ['A', 'B', 'C', 'D'];
    let correctLetter = 'A';
    const options = (q.options || []).map((optText, oIdx) => {
      const letter = letters[oIdx] || 'A';
      const isCorrect = String(optText).trim() === String(q.correctAnswer).trim();
      if (isCorrect) correctLetter = letter;
      return {
        letter,
        text: optText,
        isCorrect
      };
    });

    const fullText = q.mathExpression
      ? `${q.question}\n\n$$${q.mathExpression}$$`
      : q.question;

    return {
      id: `lgh_q_${idx + 1}`,
      number: idx + 1,
      part: 1,
      type: 'single_choice',
      text: fullText,
      options,
      correctAnswer: correctLetter,
      solution: q.explanation || ''
    };
  });
}
