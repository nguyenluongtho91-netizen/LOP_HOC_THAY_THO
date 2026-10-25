// src/services/layGocHoaExamService.ts
// Bộ phát sinh & quản lý 100 Đề thi Lấy Gốc Hóa Học Chuẩn (Lớp 6 đến Lớp 12)
// 10 Chuyên Đề x 10 Đề x 20 Câu/Đề = 2.000 Câu hỏi chuẩn Hóa học Thầy Thọ
// ĐẶC BIỆT TUÂN THỦ: Dấu chấm (.) hoặc \cdot cho phép nhân & ngậm nước, TUYỆT ĐỐI KHÔNG DÙNG x hay X.

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
    description: 'Quy tắc hóa trị (x . a = y . b), chéo chỉ số để lập đúng CTHH, tính phân tử khối và chất ngậm nước.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'can_bang_pthh',
    title: 'Phần 3: Cân Bằng Phương Trình Hóa Học & Định Luật BTKL (Lớp 8)',
    shortTitle: 'Phần 3: Cân Bằng PTHH (Lớp 8)',
    grade: 'Lớp 8',
    icon: '⚖️',
    description: 'Kỹ thuật cân bằng chẵn - lẻ, kim loại trước phi kim sau, định luật bảo toàn khối lượng (m tham gia = m sản phẩm).',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'cong_thuc_mol',
    title: 'Phần 4: Đại Lượng Mol, Thể Tích Khí & Nồng Độ Dung Dịch (Lớp 8 - 9)',
    shortTitle: 'Phần 4: Mol & Nồng Độ Dung Dịch',
    grade: 'Lớp 8 - 9',
    icon: '💧',
    description: 'Bộ công thức tính mol (n = m / M, n = V / 22,4), nồng độ mol CM = n / V, nồng độ phần trăm C% = (m_ct / m_dd) . 100%.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tinh_theo_pthh',
    title: 'Phần 5: Bài Toán Tính Theo Phương Trình Hóa Học 3 Bước (Lớp 8 - 9)',
    shortTitle: 'Phần 5: Tính Theo PTHH 3 Bước',
    grade: 'Lớp 8 - 9',
    icon: '📝',
    description: '3 Bước thần thánh: Đổi số mol -> Đặt tỉ lệ mol trên PTHH -> Tính khối lượng (m = n . M) hoặc thể tích khí.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'vo_co_lop9',
    title: 'Phần 6: Tứ Đại Hợp Chất Vô Cơ: Oxit, Axit, Bazơ, Muối (Lớp 9)',
    shortTitle: 'Phần 6: Oxit, Axit, Bazơ, Muối',
    grade: 'Lớp 9',
    icon: '🔥',
    description: 'Tính chất hóa học, dãy hoạt động hóa học kim loại (K Na Ba Ca Mg Al Zn Fe Ni Sn Pb H Cu Hg Ag Pt Au) và phản ứng trao đổi.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'cau_tao_nguyen_tu_lop10',
    title: 'Phần 7: Cấu Tạo Nguyên Tử & Bảng Tuần Hoàn (Lớp 10)',
    shortTitle: 'Phần 7: Nguyên Tử & Bảng Tuần Hoàn',
    grade: 'Lớp 10',
    icon: '🌐',
    description: 'Hạt p, n, e, cấu hình electron (1s 2s 2p 3s 3p...), xác định ô, chu kì, nhóm và xu hướng biến thiên tính chất.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'oxi_hoa_khu_lop10',
    title: 'Phần 8: Phản Ứng Oxi Hóa - Khử & Cân Bằng E (Lớp 10)',
    shortTitle: 'Phần 8: Oxi Hóa - Khử & Thăng Bằng E',
    grade: 'Lớp 10',
    icon: '⚡',
    description: 'Quy tắc số oxi hóa, thần chú "Khử cho - O nhận", xác định vai trò chất và phương pháp thăng bằng electron nhanh.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'su_dien_li_lop11',
    title: 'Phần 9: Sự Điện Li, pH & Hóa Học Vô Cơ Lớp 11 (Lớp 11)',
    shortTitle: 'Phần 9: Sự Điện Li & Vô Cơ 11',
    grade: 'Lớp 11',
    icon: '💡',
    description: 'Chất điện li mạnh/yếu, tính pH = -log[H+], môi trường axit/bazơ/trung tính, cân bằng hóa học và nguyên lí Le Chatelier.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_lop11_12',
    title: 'Phần 10: Hóa Học Hữu Cơ: Hiđrocacbon, Este, Lipit, Amin (Lớp 11 - 12)',
    shortTitle: 'Phần 10: Hóa Hữu Cơ Trọng Tâm (11-12)',
    grade: 'Lớp 11 - 12',
    icon: '🌿',
    description: 'Ankan, Anken, Ankin, Ancol, Axit, Este, Chất béo, Amin, Amino axit phục vụ tốt kì thi THPT Quốc Gia.',
    totalExams: 10,
    questionsPerExam: 20
  }
];

function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function makeOptions(correct: string | number, distractors: (string | number)[], seed: number): string[] {
  const correctStr = String(correct).trim();
  const validDistractors = distractors
    .map(d => String(d).trim())
    .filter(d => d.length > 0 && d !== correctStr);
  const uniqueDistractors = Array.from(new Set(validDistractors));
  
  const all = [correctStr, ...uniqueDistractors.slice(0, 3)];
  while (all.length < 4) {
    all.push(`Lựa chọn khác (${all.length + 1})`);
  }
  return all.sort((a, b) => seededRandom(seed + a.length * 13) - 0.5);
}

// ==============================================================================
// 1. SINH ĐỀ PHẦN 1: KÍ HIỆU HÓA HỌC & NTK (LỚP 6 - 8) - 20 CÂU
// ==============================================================================
function generateNguyenToExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 5000 + examNo * 50;

  const elements = [
    { name: 'Hiđro (Hydrogen)', sym: 'H', m: 1, distSym: ['He', 'Hg', 'Ho'], distM: ['2 đvC', '4 đvC', '16 đvC'] },
    { name: 'Heli (Helium)', sym: 'He', m: 4, distSym: ['H', 'Be', 'Li'], distM: ['2 đvC', '8 đvC', '12 đvC'] },
    { name: 'Cacbon (Carbon)', sym: 'C', m: 12, distSym: ['Ca', 'Cl', 'Cu'], distM: ['14 đvC', '16 đvC', '24 đvC'] },
    { name: 'Nitơ (Nitrogen)', sym: 'N', m: 14, distSym: ['Na', 'Ni', 'Ne'], distM: ['12 đvC', '16 đvC', '28 đvC'] },
    { name: 'Oxi (Oxygen)', sym: 'O', m: 16, distSym: ['Os', 'Og', 'K'], distM: ['8 đvC', '32 đvC', '14 đvC'] },
    { name: 'Natri (Sodium)', sym: 'Na', m: 23, distSym: ['N', 'K', 'Ne'], distM: ['24 đvC', '39 đvC', '22 đvC'] },
    { name: 'Magie (Magnesium)', sym: 'Mg', m: 24, distSym: ['Mn', 'Mo', 'Ca'], distM: ['23 đvC', '27 đvC', '40 đvC'] },
    { name: 'Nhôm (Aluminium)', sym: 'Al', m: 27, distSym: ['Ag', 'Au', 'Ar'], distM: ['24 đvC', '56 đvC', '28 đvC'] },
    { name: 'Photpho (Phosphorus)', sym: 'P', m: 31, distSym: ['Pt', 'Pb', 'Po'], distM: ['32 đvC', '15 đvC', '30 đvC'] },
    { name: 'Lưu huỳnh (Sulfur)', sym: 'S', m: 32, distSym: ['Si', 'Se', 'Sn'], distM: ['31 đvC', '16 đvC', '64 đvC'] },
    { name: 'Clo (Chlorine)', sym: 'Cl', m: 35.5, distSym: ['C', 'Cr', 'Co'], distM: ['35 đvC', '36 đvC', '71 đvC'] },
    { name: 'Kali (Potassium)', sym: 'K', m: 39, distSym: ['Ka', 'Ca', 'Na'], distM: ['23 đvC', '40 đvC', '31 đvC'] },
    { name: 'Canxi (Calcium)', sym: 'Ca', m: 40, distSym: ['C', 'Cu', 'Cr'], distM: ['39 đvC', '20 đvC', '56 đvC'] },
    { name: 'Sắt (Iron)', sym: 'Fe', m: 56, distSym: ['F', 'Fr', 'Ir'], distM: ['55 đvC', '64 đvC', '65 đvC'] },
    { name: 'Đồng (Copper)', sym: 'Cu', m: 64, distSym: ['Co', 'Cr', 'Cd'], distM: ['56 đvC', '65 đvC', '108 đvC'] },
    { name: 'Kẽm (Zinc)', sym: 'Zn', m: 65, distSym: ['Z', 'Zr', 'Sn'], distM: ['56 đvC', '64 đvC', '27 đvC'] },
    { name: 'Bari (Barium)', sym: 'Ba', m: 137, distSym: ['B', 'Br', 'Be'], distM: ['108 đvC', '56 đvC', '127 đvC'] },
    { name: 'Bạc (Silver)', sym: 'Ag', m: 108, distSym: ['Au', 'Al', 'As'], distM: ['56 đvC', '64 đvC', '137 đvC'] }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const el = elements[(i + examNo * 3) % elements.length];

    if (i <= 6) {
      questions.push({
        id: i,
        question: `Câu ${i}: Kí hiệu hóa học quốc tế của nguyên tố ${el.name} là:`,
        options: makeOptions(el.sym, el.distSym, s),
        correctAnswer: el.sym,
        explanation: `Theo quy ước danh pháp hóa học: Nguyên tố ${el.name} có kí hiệu hóa học là ${el.sym}, nguyên tử khối M = ${el.m} đvC (amu).`,
        topic: 'khtn_nguyen_to'
      });
    } else if (i <= 12) {
      questions.push({
        id: i,
        question: `Câu ${i}: Khối lượng nguyên tử (nguyên tử khối) của nguyên tố ${el.name} (${el.sym}) bằng:`,
        mathExpression: `M_{\\mathrm{${el.sym}}} = ?`,
        options: makeOptions(`${el.m} đvC`, el.distM, s),
        correctAnswer: `${el.m} đvC`,
        explanation: `Nguyên tử khối của ${el.name} (${el.sym}) là ${el.m} đvC (amu). Học sinh cần nhớ chính xác để tính toán số mol.`,
        topic: 'khtn_nguyen_to'
      });
    } else if (i <= 16) {
      const el2 = elements[(i + 4) % elements.length];
      const isHeavier = Number(el.m) >= Number(el2.m);
      const ratio = isHeavier 
        ? (Number(el.m) / Number(el2.m)).toFixed(2)
        : (Number(el2.m) / Number(el.m)).toFixed(2);
      const correctAns = isHeavier 
        ? `Nặng hơn ${ratio} lần` 
        : `Nhẹ hơn ${ratio} lần`;

      questions.push({
        id: i,
        question: `Câu ${i}: Nguyên tử ${el.name} (${el.sym}) so với nguyên tử ${el2.name} (${el2.sym}) thì:`,
        mathExpression: `\\frac{M_{\\mathrm{${el.sym}}}}{M_{\\mathrm{${el2.sym}}}} = \\frac{${el.m}}{${el2.m}}`,
        options: makeOptions(correctAns, ['Bằng nhau', `Nặng hơn 2 lần`, `Nhẹ hơn 2 lần`], s),
        correctAnswer: correctAns,
        explanation: `So sánh tỉ số khối lượng: M(${el.sym}) / M(${el2.sym}) = ${el.m} / ${el2.m}. Do đó nguyên tử ${el.sym} ${correctAns.toLowerCase()} so với ${el2.sym}.`,
        topic: 'khtn_nguyen_to'
      });
    } else {
      const concepts = [
        { q: 'Trong các chất sau, đâu là đơn chất kim loại dẫn điện và nhiệt tốt?', a: 'Nhôm (Al)', d: ['Khí Oxi (O₂)', 'Nước (H₂O)', 'Khí Cacbonic (CO₂)'], expl: 'Đơn chất là chất cấu tạo từ 1 nguyên tố. Nhôm (Al) là đơn chất kim loại, dẫn điện dẫn nhiệt tốt.' },
        { q: 'Hợp chất là chất được cấu tạo từ bao nhiêu nguyên tố hóa học trở lên?', a: 'Từ 2 nguyên tố trở lên', d: ['Chỉ từ 1 nguyên tố', 'Từ 5 nguyên tố trở lên', 'Chỉ từ kim loại'], expl: 'Hợp chất được cấu tạo từ 2 nguyên tố hóa học trở lên (ví dụ H₂O, NaCl, CaCO₃).' },
        { q: 'Hạt nhân của nguyên tử được tạo thành từ những loại hạt nào?', a: 'Proton (p) và Nơtron (n)', d: ['Chỉ gồm electron', 'Proton và electron', 'Nơtron và electron'], expl: 'Hạt nhân nguyên tử gồm hạt proton (mang điện tích +) và nơtron (không mang điện).' },
        { q: 'Trong nguyên tử trung hòa về điện, số lượng hạt nào luôn bằng nhau?', a: 'Số proton = Số electron (p = e)', d: ['Số proton = Số nơtron', 'Số electron = Số nơtron', 'Số proton = 2 . Số electron'], expl: 'Nguyên tử trung hòa về điện nên tổng điện tích dương bằng tổng điện tích âm: Số proton = Số electron.' }
      ];
      const item = concepts[(i - 17) % concepts.length];
      questions.push({
        id: i,
        question: `Câu ${i}: ${item.q}`,
        options: makeOptions(item.a, item.d, s),
        correctAnswer: item.a,
        explanation: item.expl,
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

  const compoundList = [
    { name: 'Nhôm oxit', formula: 'Al₂O₃', expl: 'Al hóa trị III, O hóa trị II. Quy tắc chéo: Al₂O₃. Phân tử khối = 27 . 2 + 16 . 3 = 102 đvC.', distractors: ['AlO', 'Al₃O₂', 'AlO₂'] },
    { name: 'Magie clorua', formula: 'MgCl₂', expl: 'Mg hóa trị II, Cl hóa trị I. CTHH đúng là MgCl₂. Phân tử khối = 24 + 35,5 . 2 = 95 đvC.', distractors: ['MgCl', 'Mg₂Cl', 'MgCl₃'] },
    { name: 'Sắt(III) oxit', formula: 'Fe₂O₃', expl: 'Fe(III) kết hợp với O(II) tạo CTHH Fe₂O₃. Phân tử khối = 56 . 2 + 16 . 3 = 160 đvC.', distractors: ['FeO', 'Fe₃O₄', 'Fe₂O'] },
    { name: 'Canxi cacbonat', formula: 'CaCO₃', expl: 'Ca hóa trị II, nhóm CO₃ hóa trị II. Tỉ lệ 1:1 -> CaCO₃. Phân tử khối = 40 + 12 + 16 . 3 = 100 đvC.', distractors: ['Ca(CO₃)₂', 'Ca₂CO₃', 'CaHCO₃'] },
    { name: 'Natri sunfat', formula: 'Na₂SO₄', expl: 'Na hóa trị I, nhóm SO₄ hóa trị II -> Na₂SO₄. Phân tử khối = 23 . 2 + 32 + 16 . 4 = 142 đvC.', distractors: ['NaSO₄', 'Na(SO₄)₂', 'Na₂SO₃'] },
    { name: 'Bari sunfat', formula: 'BaSO₄', expl: 'Ba hóa trị II, nhóm SO₄ hóa trị II -> BaSO₄. Phân tử khối = 137 + 32 + 16 . 4 = 233 đvC.', distractors: ['Ba₂(SO₄)₂', 'Ba(SO₄)₂', 'BaSO₃'] },
    { name: 'Đồng(II) sunfat ngậm 5 phân tử nước', formula: 'CuSO₄ . 5H₂O', expl: 'Muối ngậm nước biểu diễn bằng dấu chấm (.): CuSO₄ . 5H₂O. Phân tử khối = 160 + 5 . 18 = 250 đvC.', distractors: ['CuSO₄ . H₂O', 'Cu₂SO₄ . 5H₂O', 'CuSO₄ + 5H₂O'] }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;

    if (i <= 5) {
      const valencyQuestions = [
        { q: 'Hóa trị của nguyên tố Oxi (O) luôn được chọn làm đơn vị quy ước chuẩn bằng:', a: 'II', d: ['I', 'III', 'IV'], expl: 'Quy ước chuẩn: Trong các hợp chất, nguyên tố Oxi luôn có hóa trị II.' },
        { q: 'Hóa trị của nguyên tố Hiđro (H) luôn được chọn làm đơn vị quy ước chuẩn bằng:', a: 'I', d: ['II', 'III', '0'], expl: 'Quy ước chuẩn: Trong các hợp chất, nguyên tố Hiđro luôn có hóa trị I.' },
        { q: 'Hóa trị của nhóm hiđroxit (-OH) trong phân tử bazơ là:', a: 'I', d: ['II', 'III', 'IV'], expl: 'Nhóm -OH luôn có hóa trị I (ví dụ NaOH, KOH, Ca(OH)₂).' },
        { q: 'Hóa trị của nhóm sunfat (=SO₄) và cacbonat (=CO₃) là:', a: 'II', d: ['I', 'III', 'IV'], expl: 'Cả 2 nhóm nguyên tử SO₄ và CO₃ đều có hóa trị II.' },
        { q: 'Quy tắc hóa trị đối với hợp chất hai nguyên tố A_x^a B_y^b được phát biểu là:', a: 'x . a = y . b', d: ['x + a = y + b', 'x / a = y / b', 'x . y = a . b'], expl: 'Quy tắc hóa trị chuẩn: Tích của chỉ số và hóa trị của nguyên tố này bằng tích của chỉ số và hóa trị của nguyên tố kia: x . a = y . b.' }
      ];
      const item = valencyQuestions[(i - 1) % valencyQuestions.length];
      questions.push({
        id: i,
        question: `Câu ${i}: ${item.q}`,
        options: makeOptions(item.a, item.d, s),
        correctAnswer: item.a,
        explanation: item.expl,
        topic: 'hoa_tri_cthh'
      });
    } else if (i <= 10) {
      const comp = compoundList[(i + examNo) % compoundList.length];
      questions.push({
        id: i,
        question: `Câu ${i}: Công thức hóa học chuẩn xác của hợp chất ${comp.name} là:`,
        options: makeOptions(comp.formula, comp.distractors, s),
        correctAnswer: comp.formula,
        explanation: comp.expl,
        topic: 'hoa_tri_cthh'
      });
    } else if (i <= 15) {
      const massList = [
        { formula: 'CO₂', exp: '12 + 16 \\cdot 2', ans: '44 đvC', expl: 'Phân tử khối của CO₂: M = M_C + 2 . M_O = 12 + 16 . 2 = 44 đvC.', d: ['28 đvC', '32 đvC', '40 đvC'] },
        { formula: 'H₂SO₄', exp: '1 \\cdot 2 + 32 + 16 \\cdot 4', ans: '98 đvC', expl: 'Phân tử khối H₂SO₄: M = 2 . 1 + 32 + 16 . 4 = 98 đvC.', d: ['96 đvC', '100 đvC', '82 đvC'] },
        { formula: 'CaCO₃', exp: '40 + 12 + 16 \\cdot 3', ans: '100 đvC', expl: 'Phân tử khối CaCO₃: M = 40 + 12 + 16 . 3 = 100 đvC.', d: ['90 đvC', '110 đvC', '84 đvC'] },
        { formula: 'NaOH', exp: '23 + 16 + 1', ans: '40 đvC', expl: 'Phân tử khối NaOH: M = 23 + 16 + 1 = 40 đvC.', d: ['39 đvC', '41 đvC', '58,5 đvC'] },
        { formula: 'Al₂O₃', exp: '27 \\cdot 2 + 16 \\cdot 3', ans: '102 đvC', expl: 'Phân tử khối Al₂O₃: M = 27 . 2 + 16 . 3 = 102 đvC.', d: ['100 đvC', '75 đvC', '113 đvC'] }
      ];
      const mItem = massList[(i - 11) % massList.length];
      questions.push({
        id: i,
        question: `Câu ${i}: Phân tử khối của hợp chất ${mItem.formula} là:`,
        mathExpression: `M_{\\mathrm{${mItem.formula}}} = ${mItem.exp} = ?`,
        options: makeOptions(mItem.ans, mItem.d, s),
        correctAnswer: mItem.ans,
        explanation: mItem.expl,
        topic: 'hoa_tri_cthh'
      });
    } else {
      const determineValList = [
        { formula: 'FeCl₃', math: 'Fe^a Cl_3^I \\Rightarrow a \\cdot 1 = I \\cdot 3', ans: 'III', expl: 'Theo quy tắc hóa trị: a . 1 = 1 . 3 => a = III. Trong FeCl₃, Fe có hóa trị III.' },
        { formula: 'SO₂', math: 'S^a O_2^{II} \\Rightarrow a \\cdot 1 = II \\cdot 2', ans: 'IV', expl: 'Theo quy tắc hóa trị: a . 1 = 2 . 2 => a = IV. Trong SO₂, Lưu huỳnh có hóa trị IV.' },
        { formula: 'SO₃', math: 'S^a O_3^{II} \\Rightarrow a \\cdot 1 = II \\cdot 3', ans: 'VI', expl: 'Theo quy tắc hóa trị: a . 1 = 2 . 3 => a = VI. Trong SO₃, Lưu huỳnh có hóa trị VI.' },
        { formula: 'P₂O₅', math: 'P_2^a O_5^{II} \\Rightarrow a \\cdot 2 = II \\cdot 5', ans: 'V', expl: 'Theo quy tắc hóa trị: a . 2 = 2 . 5 => a = V. Trong P₂O₅, Photpho có hóa trị V.' },
        { formula: 'CuO', math: 'Cu^a O^{II} \\Rightarrow a \\cdot 1 = II \\cdot 1', ans: 'II', expl: 'Theo quy tắc hóa trị: a . 1 = 2 . 1 => a = II. Trong CuO, Đồng có hóa trị II.' }
      ];
      const vItem = determineValList[(i - 16) % determineValList.length];
      questions.push({
        id: i,
        question: `Câu ${i}: Xác định hóa trị của nguyên tố đầu trong hợp chất ${vItem.formula}:`,
        mathExpression: vItem.math,
        options: makeOptions(vItem.ans, ['I', 'II', 'III', 'IV', 'VI'].filter(x => x !== vItem.ans), s),
        correctAnswer: vItem.ans,
        explanation: vItem.expl,
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
      rawMath: '? \\mathrm{Al} + ? \\mathrm{O_2} \\xrightarrow{t^\\circ} ? \\mathrm{Al_2O_3}',
      coefs: '4, 3, 2',
      expl: 'Bên phải có 3 O (lẻ), ta nhân đôi thành 2 Al₂O₃ (6 O). Bên trái cần 3 O₂. Vế phải có 4 Al -> vế trái cần 4 Al. Hệ số cân bằng tối giản là 4 : 3 : 2.',
      dist: ['2, 3, 1', '4, 2, 2', '2, 1, 1']
    },
    {
      rawMath: '? \\mathrm{Fe} + ? \\mathrm{HCl} \\rightarrow ? \\mathrm{FeCl_2} + ? \\mathrm{H_2}',
      coefs: '1, 2, 1, 1',
      expl: 'Bên phải có 2 Cl và 2 H, do đó thêm hệ số 2 trước HCl. Hệ số tối giản là 1 : 2 : 1 : 1.',
      dist: ['1, 1, 1, 1', '2, 4, 2, 1', '1, 2, 2, 1']
    },
    {
      rawMath: '? \\mathrm{Al} + ? \\mathrm{H_2SO_4} \\rightarrow ? \\mathrm{Al_2(SO_4)_3} + ? \\mathrm{H_2}',
      coefs: '2, 3, 1, 3',
      expl: 'Bên phải có 3 nhóm (SO₄) -> thêm 3 trước H₂SO₄. Vế trái có 6 H -> thêm 3 trước H₂. Có 2 Al -> thêm 2 trước Al. Hệ số tối giản là 2 : 3 : 1 : 3.',
      dist: ['1, 3, 1, 3', '2, 2, 1, 2', '2, 3, 2, 3']
    },
    {
      rawMath: '? \\mathrm{CH_4} + ? \\mathrm{O_2} \\xrightarrow{t^\\circ} ? \\mathrm{CO_2} + ? \\mathrm{H_2O}',
      coefs: '1, 2, 1, 2',
      expl: 'Vế trái có 4 H -> thêm 2 trước H₂O. Tổng O vế phải là 2 + 2 = 4 -> thêm 2 trước O₂. Hệ số tối giản là 1 : 2 : 1 : 2.',
      dist: ['1, 1, 1, 2', '1, 3, 1, 2', '2, 3, 2, 4']
    },
    {
      rawMath: '? \\mathrm{Fe_3O_4} + ? \\mathrm{CO} \\xrightarrow{t^\\circ} ? \\mathrm{Fe} + ? \\mathrm{CO_2}',
      coefs: '1, 4, 3, 4',
      expl: 'Fe₃O₄ có 4 nguyên tử O, cần 4 phân tử CO để lấy 4 O tạo thành 4 CO₂. Đồng thời giải phóng 3 nguyên tử Fe. Hệ số tối giản là 1 : 4 : 3 : 4.',
      dist: ['1, 3, 3, 3', '1, 4, 1, 4', '2, 4, 3, 4']
    },
    {
      rawMath: '? \\mathrm{KClO_3} \\xrightarrow{t^\\circ, \\mathrm{MnO_2}} ? \\mathrm{KCl} + ? \\mathrm{O_2}',
      coefs: '2, 2, 3',
      expl: 'KClO₃ có 3 O -> nhân 2 thành 2 KClO₃ (6 O). Vế phải cần 3 O₂ và 2 KCl. Hệ số tối giản là 2 : 2 : 3.',
      dist: ['1, 1, 1', '2, 1, 3', '1, 1, 3']
    },
    {
      rawMath: '? \\mathrm{P} + ? \\mathrm{O_2} \\xrightarrow{t^\\circ} ? \\mathrm{P_2O_5}',
      coefs: '4, 5, 2',
      expl: 'P₂O₅ có 5 O (lẻ) -> nhân đôi thành 2 P₂O₅ (10 O). Vế trái cần 5 O₂ và 4 P. Hệ số tối giản là 4 : 5 : 2.',
      dist: ['2, 5, 1', '4, 3, 2', '2, 3, 1']
    }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;

    if (i <= 10) {
      const eq = equations[(i + examNo) % equations.length];
      questions.push({
        id: i,
        question: `Câu ${i}: Bộ hệ số nguyên tối giản để cân bằng phương trình hóa học sau là:`,
        mathExpression: eq.rawMath,
        options: makeOptions(eq.coefs, eq.dist, s),
        correctAnswer: eq.coefs,
        explanation: eq.expl,
        topic: 'can_bang_pthh'
      });
    } else {
      const btklProblems = [
        {
          q: 'Đốt cháy hoàn toàn 6g Cacbon (C) trong khí Oxi sinh ra 22g khí Cacbonic (CO₂). Khối lượng khí Oxi đã tham gia phản ứng là:',
          math: 'm_{\\mathrm{C}} + m_{\\mathrm{O_2}} = m_{\\mathrm{CO_2}} \\Rightarrow 6 + m_{\\mathrm{O_2}} = 22',
          ans: '16 gam',
          d: ['12 gam', '18 gam', '28 gam'],
          expl: 'Theo định luật bảo toàn khối lượng: m(C) + m(O₂) = m(CO₂) => m(O₂) = 22 - 6 = 16 gam.'
        },
        {
          q: 'Cho 2,4g kim loại Magie (Mg) tác dụng hết với axit HCl thu được 9,5g muối MgCl₂ và 0,2g khí H₂. Khối lượng axit HCl đã phản ứng là:',
          math: 'm_{\\mathrm{Mg}} + m_{\\mathrm{HCl}} = m_{\\mathrm{MgCl_2}} + m_{\\mathrm{H_2}} \\Rightarrow 2,4 + m_{\\mathrm{HCl}} = 9,5 + 0,2',
          ans: '7,3 gam',
          d: ['7,1 gam', '9,7 gam', '6,8 gam'],
          expl: 'Theo định luật bảo toàn khối lượng: m(Mg) + m(HCl) = m(MgCl₂) + m(H₂) => 2,4 + m(HCl) = 9,7 => m(HCl) = 9,7 - 2,4 = 7,3 gam.'
        },
        {
          q: 'Nung 100g đá vôi CaCO₃ sinh ra 56g vôi sống CaO và khí CO₂. Khối lượng khí CO₂ thoát ra là:',
          math: 'm_{\\mathrm{CaCO_3}} = m_{\\mathrm{CaO}} + m_{\\mathrm{CO_2}} \\Rightarrow 100 = 56 + m_{\\mathrm{CO_2}}',
          ans: '44 gam',
          d: ['40 gam', '48 gam', '54 gam'],
          expl: 'Theo định luật bảo toàn khối lượng: m(CaCO₃) = m(CaO) + m(CO₂) => m(CO₂) = 100 - 56 = 44 gam.'
        }
      ];
      const p = btklProblems[(i - 11) % btklProblems.length];
      questions.push({
        id: i,
        question: `Câu ${i}: ${p.q}`,
        mathExpression: p.math,
        options: makeOptions(p.ans, p.d, s),
        correctAnswer: p.ans,
        explanation: p.expl,
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
      const data = [
        { name: 'Sắt (Fe, M = 56)', m: 5.6, ans: '0,1 mol', d: ['0,2 mol', '1 mol', '0,05 mol'] },
        { name: 'Nhôm (Al, M = 27)', m: 5.4, ans: '0,2 mol', d: ['0,1 mol', '0,4 mol', '1 mol'] },
        { name: 'Đồng (Cu, M = 64)', m: 12.8, ans: '0,2 mol', d: ['0,1 mol', '0,3 mol', '0,5 mol'] },
        { name: 'Canxi cacbonat (CaCO₃, M = 100)', m: 20, ans: '0,2 mol', d: ['0,1 mol', '0,5 mol', '2 mol'] },
        { name: 'Khí Oxi (O₂, M = 32)', m: 6.4, ans: '0,2 mol', d: ['0,1 mol', '0,4 mol', '0,32 mol'] }
      ];
      const item = data[(i - 1) % data.length];
      questions.push({
        id: i,
        question: `Câu ${i}: Tính số mol của ${item.m} gam ${item.name}:`,
        mathExpression: `n = \\frac{m}{M} = \\frac{${item.m}}{M}`,
        options: makeOptions(item.ans, item.d, s),
        correctAnswer: item.ans,
        explanation: `Áp dụng công thức tính số mol: n = m / M. Với m = ${item.m} gam thì số mol là ${item.ans}.`,
        topic: 'cong_thuc_mol'
      });
    } else if (i <= 10) {
      // V = n . 22,4 hoặc n = V / 22,4
      const gasData = [
        { lit: 2.24, mol: '0,1 mol', d: ['0,2 mol', '0,5 mol', '1 mol'] },
        { lit: 4.48, mol: '0,2 mol', d: ['0,1 mol', '0,4 mol', '0,3 mol'] },
        { lit: 6.72, mol: '0,3 mol', d: ['0,2 mol', '0,15 mol', '0,5 mol'] },
        { lit: 11.2, mol: '0,5 mol', d: ['0,2 mol', '1 mol', '0,25 mol'] },
        { lit: 22.4, mol: '1 mol', d: ['0,5 mol', '2 mol', '0,1 mol'] }
      ];
      const g = gasData[(i - 6) % gasData.length];
      questions.push({
        id: i,
        question: `Câu ${i}: Ở điều kiện tiêu chuẩn (đktc), thể tích ${g.lit} lít khí O₂ tương ứng với số mol là:`,
        mathExpression: `n = \\frac{V}{22,4} = \\frac{${g.lit}}{22,4}`,
        options: makeOptions(g.mol, g.d, s),
        correctAnswer: g.mol,
        explanation: `Ở điều kiện tiêu chuẩn: n = V / 22,4 = ${g.lit} / 22,4 = ${g.mol}.`,
        topic: 'cong_thuc_mol'
      });
    } else if (i <= 15) {
      // CM = n / V
      const cmData = [
        { n: 0.2, v: 0.5, ans: '0,4M', d: ['0,1M', '0,2M', '1M'], vMl: '500 ml' },
        { n: 0.5, v: 0.25, ans: '2,0M', d: ['1,0M', '0,5M', '0,125M'], vMl: '250 ml' },
        { n: 0.1, v: 0.1, ans: '1,0M', d: ['0,1M', '0,5M', '2,0M'], vMl: '100 ml' },
        { n: 0.3, v: 0.2, ans: '1,5M', d: ['0,6M', '1,0M', '3,0M'], vMl: '200 ml' },
        { n: 0.4, v: 1.0, ans: '0,4M', d: ['0,2M', '0,8M', '1,0M'], vMl: '1 lít' }
      ];
      const c = cmData[(i - 11) % cmData.length];
      questions.push({
        id: i,
        question: `Câu ${i}: Hòa tan ${c.n} mol chất tan vào nước thu được ${c.vMl} (${c.v} lít) dung dịch. Nồng độ mol CM là:`,
        mathExpression: `C_M = \\frac{n}{V} = \\frac{${c.n}}{${c.v}}`,
        options: makeOptions(c.ans, c.d, s),
        correctAnswer: c.ans,
        explanation: `Công thức nồng độ mol: CM = n / V = ${c.n} / ${c.v} = ${c.ans} (mol/lít hay M).`,
        topic: 'cong_thuc_mol'
      });
    } else {
      // C% = (mct / mdd) . 100%
      const cPercentData = [
        { mct: 20, mdd: 200, ans: '10%', d: ['20%', '5%', '11,1%'], expl: 'Khối lượng dung dịch = 20 + 180 = 200g. Nồng độ % = (20 / 200) . 100% = 10%.' },
        { mct: 10, mdd: 100, ans: '10%', d: ['5%', '15%', '20%'], expl: 'Nồng độ % = (10 / 100) . 100% = 10%.' },
        { mct: 15, mdd: 75, ans: '20%', d: ['15%', '25%', '10%'], expl: 'Nồng độ % = (15 / 75) . 100% = 20%.' },
        { mct: 25, mdd: 250, ans: '10%', d: ['25%', '5%', '15%'], expl: 'Nồng độ % = (25 / 250) . 100% = 10%.' },
        { mct: 50, mdd: 200, ans: '25%', d: ['50%', '20%', '15%'], expl: 'Nồng độ % = (50 / 200) . 100% = 25%.' }
      ];
      const cp = cPercentData[(i - 16) % cPercentData.length];
      questions.push({
        id: i,
        question: `Câu ${i}: Hòa tan ${cp.mct} gam muối vào nước tạo thành ${cp.mdd} gam dung dịch. Nồng độ phần trăm C% của dung dịch là:`,
        mathExpression: `C\\% = \\frac{m_{\\mathrm{ct}}}{m_{\\mathrm{dd}}} \\cdot 100\\% = \\frac{${cp.mct}}{${cp.mdd}} \\cdot 100\\%`,
        options: makeOptions(cp.ans, cp.d, s),
        correctAnswer: cp.ans,
        explanation: cp.expl,
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

  const problems = [
    {
      q: 'Cho 5,6 gam Sắt (Fe, M = 56) tác dụng hoàn toàn với dung dịch HCl dư theo phương trình: Fe + 2HCl → FeCl₂ + H₂↑. Thể tích khí H₂ thu được ở đktc là:',
      math: 'n_{\\mathrm{Fe}} = \\frac{5,6}{56} = 0,1\\text{ mol} \\Rightarrow n_{\\mathrm{H_2}} = 0,1\\text{ mol} \\Rightarrow V = 0,1 \\cdot 22,4',
      ans: '2,24 lít',
      d: ['4,48 lít', '1,12 lít', '3,36 lít'],
      expl: 'B1: n(Fe) = 5,6 / 56 = 0,1 mol. B2: Theo PTHH, n(H₂) = n(Fe) = 0,1 mol. B3: V(H₂) = 0,1 . 22,4 = 2,24 lít.'
    },
    {
      q: 'Nung nóng hoàn toàn 10 gam đá vôi Canxi cacbonat (CaCO₃, M = 100) theo phản ứng: CaCO₃ → CaO + CO₂↑. Khối lượng vôi sống CaO (M = 56) thu được là:',
      math: 'n_{\\mathrm{CaCO_3}} = \\frac{10}{100} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{CaO}} = 0,1 \\cdot 56',
      ans: '5,6 gam',
      d: ['4,4 gam', '10 gam', '2,8 gam'],
      expl: 'B1: n(CaCO₃) = 10 / 100 = 0,1 mol. B2: n(CaO) = n(CaCO₃) = 0,1 mol. B3: m(CaO) = 0,1 . 56 = 5,6 gam.'
    },
    {
      q: 'Cho 6,5 gam Kẽm (Zn, M = 65) phản ứng với lượng dư axit H₂SO₄ loãng theo phản ứng: Zn + H₂SO₄ → ZnSO₄ + H₂↑. Thể tích khí H₂ thoát ra ở đktc là:',
      math: 'n_{\\mathrm{Zn}} = \\frac{6,5}{65} = 0,1\\text{ mol} \\Rightarrow V = 0,1 \\cdot 22,4',
      ans: '2,24 lít',
      d: ['4,48 lít', '3,36 lít', '1,12 lít'],
      expl: 'B1: n(Zn) = 6,5 / 65 = 0,1 mol. B2: n(H₂) = n(Zn) = 0,1 mol. B3: V(H₂) = 0,1 . 22,4 = 2,24 lít.'
    },
    {
      q: 'Đốt cháy 5,4 gam Nhôm (Al, M = 27) trong bình chứa khí Oxi dư: 4Al + 3O₂ → 2Al₂O₃. Khối lượng nhôm oxit Al₂O₃ (M = 102) tạo thành là:',
      math: 'n_{\\mathrm{Al}} = \\frac{5,4}{27} = 0,2\\text{ mol} \\Rightarrow n_{\\mathrm{Al_2O_3}} = \\frac{0,2 \\cdot 2}{4} = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 102',
      ans: '10,2 gam',
      d: ['20,4 gam', '5,1 gam', '15,3 gam'],
      expl: 'B1: n(Al) = 5,4 / 27 = 0,2 mol. B2: n(Al₂O₃) = 0,2 . 2 / 4 = 0,1 mol. B3: m(Al₂O₃) = 0,1 . 102 = 10,2 gam.'
    },
    {
      q: 'Cho 2,4 gam Magie (Mg, M = 24) tác dụng với dung dịch HCl vừa đủ. Khối lượng muối MgCl₂ (M = 95) thu được là:',
      math: 'n_{\\mathrm{Mg}} = \\frac{2,4}{24} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{MgCl_2}} = 0,1 \\cdot 95',
      ans: '9,5 gam',
      d: ['19 gam', '4,75 gam', '7,1 gam'],
      expl: 'B1: n(Mg) = 2,4 / 24 = 0,1 mol. B2: n(MgCl₂) = n(Mg) = 0,1 mol. B3: m(MgCl₂) = 0,1 . 95 = 9,5 gam.'
    }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const p = problems[(i + examNo) % problems.length];
    questions.push({
      id: i,
      question: `Câu ${i}: ${p.q}`,
      mathExpression: p.math,
      options: makeOptions(p.ans, p.d, s),
      correctAnswer: p.ans,
      explanation: p.expl,
      topic: 'tinh_theo_pthh'
    });
  }

  return questions;
}

// ==============================================================================
// 6. SINH ĐỀ PHẦN 6: TỨ ĐẠI HỢP CHẤT VÔ CƠ (LỚP 9) - 20 CÂU
// ==============================================================================
function generateVoCoLop9Exam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 6000 + examNo * 50;

  const bank = [
    {
      q: 'Dãy kim loại nào sau đây được sắp xếp đúng theo chiều hoạt động hóa học GIẢM DẦN?',
      ans: 'K, Na, Mg, Al, Zn, Fe, Cu, Ag',
      d: ['Fe, Cu, Ag, Al, Zn, Na', 'Na, K, Fe, Cu, Mg, Al', 'Cu, Ag, Fe, Zn, Al, Mg'],
      expl: 'Câu thần chú dãy hoạt động kim loại: "Khi Nào May Áo Giáp Sắt Nên Sang Phố Hỏi Cửa Hàng Á Phi Âu" (K, Na, Ba, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Hg, Ag, Pt, Au).'
    },
    {
      q: 'Dung dịch axit clohiđric (HCl) làm quỳ tím chuyển sang màu gì?',
      ans: 'Màu đỏ',
      d: ['Màu xanh', 'Màu tím không đổi', 'Màu vàng'],
      expl: 'Dung dịch axit làm quỳ tím hóa đỏ; dung dịch bazơ làm quỳ tím hóa xanh.'
    },
    {
      q: 'Để nhận biết dung dịch axit sunfuric (H₂SO₄) hoặc muối sunfat (SO₄), người ta dùng thuốc thử đặc trưng nào?',
      ans: 'Dung dịch muối Bari (BaCl₂ hoặc Ba(OH)₂)',
      d: ['Dung dịch NaCl', 'Dung dịch Cu(NO₃)₂', 'Quỳ tím'],
      expl: 'Ion Ba²⁺ phản ứng với ion SO₄²⁻ tạo kết tủa trắng BaSO₄ không tan trong axit: Ba²⁺ + SO₄²⁻ → BaSO₄↓.'
    },
    {
      q: 'Kim loại nào sau đây tác dụng được với dung dịch Cu(NO₃)₂ để đẩy Cu ra ngoài?',
      ans: 'Kim loại Sắt (Fe)',
      d: ['Kim loại Bạc (Ag)', 'Kim loại Vàng (Au)', 'Kim loại Đồng (Cu)'],
      expl: 'Fe đứng trước Cu trong dãy hoạt động hóa học nên Fe đẩy Cu ra khỏi dung dịch muối: Fe + Cu(NO₃)₂ → Fe(NO₃)₂ + Cu↓.'
    },
    {
      q: 'Oxit nào sau đây là oxit axit tác dụng với dung dịch bazơ tạo thành muối và nước?',
      ans: 'Khí cacbonic (CO₂)',
      d: ['Canxi oxit (CaO)', 'Natri oxit (Na₂O)', 'Đồng(II) oxit (CuO)'],
      expl: 'CO₂, SO₂, SO₃, P₂O₅ là các oxit axit (oxit của phi kim), tác dụng được với dung dịch kiềm.'
    },
    {
      q: 'Điều kiện để phản ứng trao đổi trong dung dịch giữa axit, bazơ và muối xảy ra là sản phẩm phải có:',
      ans: 'Chất kết tủa, chất bay hơi hoặc chất điện li yếu (nước)',
      d: ['Kim loại mới sinh ra', 'Nhiệt độ trên 1000°C', 'Chất oxi hóa mạnh'],
      expl: 'Phản ứng trao đổi trong dung dịch chỉ xảy ra khi tạo thành ít nhất một trong ba yếu tố: kết tủa (↓), bay hơi (↑) hoặc nước (H₂O).'
    },
    {
      q: 'Kim loại nào vừa tác dụng được với dung dịch axit HCl, vừa tác dụng được với dung dịch kiềm NaOH giải phóng khí H₂?',
      ans: 'Kim loại Nhôm (Al)',
      d: ['Kim loại Sắt (Fe)', 'Kim loại Đồng (Cu)', 'Kim loại Magie (Mg)'],
      expl: 'Nhôm (Al) và Kẽm (Zn) là các kim loại có tính lưỡng tính đặc biệt, tan được trong dung dịch kiềm NaOH giải phóng khí H₂.'
    },
    {
      q: 'Cho dung dịch NaOH vào dung dịch CuSO₄, hiện tượng quan sát được là:',
      ans: 'Xuất hiện kết tủa màu xanh lam Cu(OH)₂',
      d: ['Xuất hiện kết tủa trắng', 'Có bọt khí thoát ra', 'Dung dịch đổi màu hồng'],
      expl: 'Phản ứng tạo kết tủa Cu(OH)₂ màu xanh lam: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.'
    }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const item = bank[(i + examNo) % bank.length];
    questions.push({
      id: i,
      question: `Câu ${i}: ${item.q}`,
      options: makeOptions(item.ans, item.d, s),
      correctAnswer: item.ans,
      explanation: item.expl,
      topic: 'vo_co_lop9'
    });
  }

  return questions;
}

// ==============================================================================
// 7. SINH ĐỀ PHẦN 7: CẤU TẠO NGUYÊN TỬ & BẢNG TUẦN HOÀN (LỚP 10) - 20 CÂU
// ==============================================================================
function generateCauTaoNguyenTuExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 6200 + examNo * 50;

  const bank = [
    {
      q: 'Cấu hình electron của nguyên tử Natri (Na, Z = 11) ở trạng thái cơ bản là:',
      ans: '1s² 2s² 2p⁶ 3s¹',
      d: ['1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁵ 3s²', '1s² 2s² 2p⁶'],
      expl: 'Z = 11: Có 11 electron phân bố trên các phân lớp theo mức năng lượng tăng dần: 1s² 2s² 2p⁶ 3s¹ (nhóm IA, chu kì 3).'
    },
    {
      q: 'Cấu hình electron của nguyên tử Clo (Cl, Z = 17) có bao nhiêu electron ở lớp ngoài cùng?',
      ans: '7 electron (1s² 2s² 2p⁶ 3s² 3p⁵)',
      d: ['5 electron', '8 electron', '1 electron'],
      expl: 'Lớp ngoài cùng (lớp 3) của Clo có 3s² 3p⁵ = 2 + 5 = 7 electron (phi kim điển hình thuộc nhóm VIIA).'
    },
    {
      q: 'Nguyên tử Sắt (Fe, Z = 26) có cấu hình electron viết gọn là:',
      ans: '[Ar] 3d⁶ 4s²',
      d: ['[Ar] 3d⁸', '[Ar] 4s² 4p⁶', '[Ar] 3d⁵ 4s³'],
      expl: 'Z = 26, cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² hay viết gọn là [Ar] 3d⁶ 4s² (Kim loại chuyển tiếp phân nhóm VIIIB).'
    },
    {
      q: 'Số hạt mang điện trong một nguyên tử nguyên tố X (biết Z = 13, N = 14) là:',
      ans: '26 hạt (p + e = 13 + 13 = 26)',
      d: ['13 hạt', '27 hạt', '14 hạt'],
      expl: 'Các hạt mang điện trong nguyên tử gồm proton (+) và electron (-). Vì p = e = 13 nên tổng số hạt mang điện là 13 + 13 = 26 hạt.'
    },
    {
      q: 'Trong bảng tuần hoàn, các nguyên tố trong cùng một chu kì có đặc điểm chung là:',
      ans: 'Có cùng số lớp electron',
      d: ['Có cùng số electron hóa trị', 'Có cùng nguyên tử khối', 'Có cùng số nơtron'],
      expl: 'Số thứ tự của chu kì chính bằng số lớp electron của nguyên tử các nguyên tố trong chu kì đó.'
    },
    {
      q: 'Trong một chu kì theo chiều tăng dần của điện tích hạt nhân (từ trái sang phải):',
      ans: 'Bán kính nguyên tử giảm dần, độ âm điện tăng dần',
      d: ['Bán kính nguyên tử tăng dần, độ âm điện giảm dần', 'Tính kim loại tăng dần', 'Tính phi kim giảm dần'],
      expl: 'Từ trái sang phải trong một chu kì: Điện tích hạt nhân tăng -> Lực hút electron mạnh hơn -> Bán kính giảm, độ âm điện tăng, tính phi kim tăng.'
    }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const item = bank[(i + examNo) % bank.length];
    questions.push({
      id: i,
      question: `Câu ${i}: ${item.q}`,
      options: makeOptions(item.ans, item.d, s),
      correctAnswer: item.ans,
      explanation: item.expl,
      topic: 'cau_tao_nguyen_tu_lop10'
    });
  }

  return questions;
}

// ==============================================================================
// 8. SINH ĐỀ PHẦN 8: PHẢN ỨNG OXI HÓA - KHỬ (LỚP 10) - 20 CÂU
// ==============================================================================
function generateOxiHoaKhuExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 6400 + examNo * 50;

  const bank = [
    {
      q: 'Trong phản ứng: Fe + 4HNO₃ → Fe(NO₃)₃ + NO + 2H₂O. Vai trò của kim loại Fe là:',
      math: '\\mathrm{\\overset{0}{Fe} \\rightarrow \\overset{+3}{Fe} + 3e}',
      ans: 'Chất khử (số oxi hóa tăng từ 0 lên +3)',
      d: ['Chất oxi hóa', 'Môi trường axit', 'Chất xúc tác'],
      expl: 'Thần chú: "Khử cho - O nhận". Fe nhường 3e làm số oxi hóa tăng từ 0 lên +3 nên Fe đóng vai trò là chất khử.'
    },
    {
      q: 'Số oxi hóa của nguyên tố Lưu huỳnh (S) trong phân tử axit sunfuric H₂SO₄ bằng:',
      math: '(+1) \\cdot 2 + x + (-2) \\cdot 4 = 0 \\Rightarrow x = +6',
      ans: '+6',
      d: ['+4', '-2', '0'],
      expl: 'Tổng số oxi hóa trong phân tử bằng 0: 2 . (+1) + x + 4 . (-2) = 0 => x = +6.'
    },
    {
      q: 'Số oxi hóa của nguyên tố Mangan (Mn) trong hợp chất thuốc tím KMnO₄ bằng:',
      math: '(+1) + x + (-2) \\cdot 4 = 0 \\Rightarrow x = +7',
      ans: '+7',
      d: ['+6', '+4', '+2'],
      expl: 'Trong KMnO₄: (+1) + x + 4 . (-2) = 0 => x = +7. Đây là trạng thái oxi hóa cao nhất của Mangan.'
    },
    {
      q: 'Dấu hiệu bản chất để nhận biết một phản ứng là phản ứng oxi hóa - khử là:',
      ans: 'Có sự thay đổi số oxi hóa của ít nhất một nguyên tố',
      d: ['Có chất kết tủa tạo thành', 'Có sự trao đổi ion không đổi số oxi hóa', 'Luôn giải phóng khí CO₂'],
      expl: 'Phản ứng oxi hóa - khử là phản ứng hóa học trong đó có sự chuyển dịch electron, dẫn đến sự thay đổi số oxi hóa của các nguyên tố.'
    },
    {
      q: 'Quá trình: Cu → Cu²⁺ + 2e được gọi là:',
      ans: 'Quá trình oxi hóa (sự oxi hóa kim loại đồng)',
      d: ['Quá trình khử', 'Sự nhận electron', 'Phản ứng trao đổi'],
      expl: 'Quá trình chất khử nhường electron được gọi là quá trình oxi hóa (sự oxi hóa).'
    }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const item = bank[(i + examNo) % bank.length];
    questions.push({
      id: i,
      question: `Câu ${i}: ${item.q}`,
      mathExpression: item.math,
      options: makeOptions(item.ans, item.d, s),
      correctAnswer: item.ans,
      explanation: item.expl,
      topic: 'oxi_hoa_khu_lop10'
    });
  }

  return questions;
}

// ==============================================================================
// 9. SINH ĐỀ PHẦN 9: SỰ ĐIỆN LI & pH (LỚP 11) - 20 CÂU
// ==============================================================================
function generateSuDienLiExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 6600 + examNo * 50;

  const bank = [
    {
      q: 'Dung dịch có nồng độ ion [H⁺] = 10⁻³ M. Độ pH của dung dịch này bằng:',
      math: '\\mathrm{pH} = -\\log[\\mathrm{H^+}] = -\\log(10^{-3})',
      ans: '3 (Môi trường axit)',
      d: ['11 (Môi trường bazơ)', '7 (Trung tính)', '10'],
      expl: 'Công thức: pH = -log[H⁺] = 3. Vì pH < 7 nên dung dịch có môi trường axit, làm quỳ tím chuyển sang màu đỏ.'
    },
    {
      q: 'Chất nào sau đây là chất điện li MẠNH phân li hoàn toàn trong dung dịch nước?',
      ans: 'Axit clohiđric (HCl)',
      d: ['Axit axetic (CH₃COOH)', 'Nước cất (H₂O)', 'Rượu etylic (C₂H₅OH)'],
      expl: 'Axit mạnh (HCl, HNO₃, H₂SO₄), bazơ mạnh (NaOH, KOH...) và hầu hết các muối tan là chất điện li mạnh.'
    },
    {
      q: 'Dung dịch NaOH 0,01 M (10⁻² M). Nồng độ ion [H⁺] và độ pH của dung dịch là:',
      math: '[\\mathrm{OH^-}] = 10^{-2}\\mathrm{M} \\Rightarrow [\\mathrm{H^+}] = 10^{-12}\\mathrm{M} \\Rightarrow \\mathrm{pH} = 12',
      ans: 'pH = 12 (Môi trường bazơ)',
      d: ['pH = 2', 'pH = 7', 'pH = 14'],
      expl: 'Ở 25°C: [H⁺] . [OH⁻] = 10⁻¹⁴. Với [OH⁻] = 10⁻² M => [H⁺] = 10⁻¹² M => pH = 12 (môi trường kiềm bazơ).'
    },
    {
      q: 'Phương trình ion rút gọn của phản ứng trung hòa giữa HCl và NaOH là:',
      math: '\\mathrm{H^+ + OH^- \\rightarrow H_2O}',
      ans: 'H⁺ + OH⁻ → H₂O',
      d: ['Na⁺ + Cl⁻ → NaCl', 'HCl + NaOH → NaCl + H₂O', 'H⁺ + Cl⁻ → HCl'],
      expl: 'Bản chất của phản ứng trung hòa giữa axit mạnh và bazơ mạnh là sự kết hợp ion: H⁺ + OH⁻ → H₂O.'
    }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const item = bank[(i + examNo) % bank.length];
    questions.push({
      id: i,
      question: `Câu ${i}: ${item.q}`,
      mathExpression: item.math,
      options: makeOptions(item.ans, item.d, s),
      correctAnswer: item.ans,
      explanation: item.expl,
      topic: 'su_dien_li_lop11'
    });
  }

  return questions;
}

// ==============================================================================
// 10. SINH ĐỀ PHẦN 10: HÓA HỮU CƠ (LỚP 11 - 12) - 20 CÂU
// ==============================================================================
function generateHuuCoExam(examNo: number): LayGocHoaQuestion[] {
  const questions: LayGocHoaQuestion[] = [];
  const baseSeed = 6800 + examNo * 50;

  const bank = [
    {
      q: 'Hợp chất este metyl axetat có công thức cấu tạo thu gọn là:',
      ans: 'CH₃COOCH₃',
      d: ['HCOOCH₃', 'CH₃COOC₂H₅', 'HCOOC₂H₅'],
      expl: 'Metyl axetat cấu tạo từ gốc axetat CH₃COO- và gốc metyl -CH₃: CH₃COOCH₃.'
    },
    {
      q: 'Hiđrocacbon nào sau đây làm mất màu dung dịch nước brom ở điều kiện thường do có liên kết đôi C=C?',
      ans: 'Etilen (CH₂=CH₂)',
      d: ['Metan (CH₄)', 'Etan (C₂H₆)', 'Propan (C₃H₈)'],
      expl: 'Anken chứa liên kết đôi C=C (kém bền) dễ dàng tham gia phản ứng cộng làm mất màu dung dịch brom.'
    },
    {
      q: 'Phản ứng xà phòng hóa chất béo (triglixerit) với dung dịch kiềm NaOH luôn sinh ra sản phẩm nào sau đây?',
      ans: 'Glixerol (C₃H₅(OH)₃) và xà phòng',
      d: ['Rượu etylic', 'Axit axetic', 'Glucozơ'],
      expl: 'Chất béo + 3 NaOH → 3 Muối của axit béo (xà phòng) + Glixerol (C₃H₅(OH)₃).'
    },
    {
      q: 'Thuốc thử dùng để phân biệt dung dịch Glucozơ với dung dịch Rượu etylic bằng phản ứng tráng bạc là:',
      ans: 'Dung dịch AgNO₃ trong NH₃, đun nóng',
      d: ['Dung dịch quỳ tím', 'Kim loại Cu', 'Dung dịch NaCl'],
      expl: 'Glucozơ có nhóm chức anđehit (-CHO) nên tham gia phản ứng tráng bạc tạo lớp Ag sáng bóng: C₆H₁₂O₆ + 2AgNO₃ + 3NH₃ + H₂O → 2Ag↓.'
    },
    {
      q: 'Amino axit thiên nhiên cấu thành nên protein của cơ thể sống có chứa những nhóm chức nào?',
      ans: 'Nhóm amin (-NH₂) và nhóm cacboxyl (-COOH)',
      d: ['Chỉ có nhóm -OH', 'Nhóm -CHO và -OH', 'Chỉ có nhóm -COOH'],
      expl: 'Amino axit là hợp chất hữu cơ tạp chức, phân tử chứa đồng thời nhóm amino (-NH₂) và nhóm cacboxyl (-COOH), có tính chất lưỡng tính.'
    }
  ];

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const item = bank[(i + examNo) % bank.length];
    questions.push({
      id: i,
      question: `Câu ${i}: ${item.q}`,
      options: makeOptions(item.ans, item.d, s),
      correctAnswer: item.ans,
      explanation: item.expl,
      topic: 'huu_co_lop11_12'
    });
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
    case 'vo_co_lop9':
      return generateVoCoLop9Exam(safeNo);
    case 'cau_tao_nguyen_tu_lop10':
      return generateCauTaoNguyenTuExam(safeNo);
    case 'oxi_hoa_khu_lop10':
      return generateOxiHoaKhuExam(safeNo);
    case 'su_dien_li_lop11':
      return generateSuDienLiExam(safeNo);
    case 'huu_co_lop11_12':
      return generateHuuCoExam(safeNo);
    default:
      return generateNguyenToExam(safeNo);
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
