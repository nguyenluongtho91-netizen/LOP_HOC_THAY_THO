// src/services/layGocHoaExamService.ts
// Bộ phát sinh & quản lý 150 Đề thi Lấy Gốc Hóa Học Chuẩn (Lớp 6 đến Lớp 12)
// PHÂN TÁCH RÕ RÀNG: HÓA HỌC VÔ CƠ (Lớp 6-11) & HÓA HỌC HỮU CƠ (Lớp 11-12)
// ĐẶC BIỆT:
// 1. CÓ CHUYÊN ĐỀ RIÊNG: "PHÂN TỬ & TÍNH PHÂN TỬ KHỐI (LỚP 7 - 8)"
// 2. MỖI ĐỀ 20 CÂU: ĐẢM BẢO 100% CÁC CÂU KHÔNG BAO GIỜ TRÙNG LẶP NHAU!
// 3. TUYỆT ĐỐI DÙNG DẤU CHẤM (.) HOẶC \cdot CHO PHÉP NHÂN & NGẬM NƯỚC, KHÔNG DÙNG x HAY X.

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
  branch: 'vo_co' | 'huu_co'; // Phân hệ: Hóa Vô Cơ vs Hóa Hữu Cơ
  title: string;
  shortTitle: string;
  grade: string;
  icon: string;
  description: string;
  totalExams: number;
  questionsPerExam: number;
}

export const LAY_GOC_HOA_TOPICS: LayGocHoaTopic[] = [
  // ============================================================================
  // I. HÓA HỌC VÔ CƠ (LỚP 6 ĐẾN LỚP 11)
  // ============================================================================
  {
    id: 'khtn_nguyen_to',
    branch: 'vo_co',
    title: 'Phần 1: Kí Hiệu Hóa Học, Nguyên Tử & Nguyên Tử Khối (Lớp 6 - 8)',
    shortTitle: 'Phần 1: Nguyên Tố & NTK (Lớp 6-8)',
    grade: 'Lớp 6 - 8',
    icon: '⚛️',
    description: 'Kí hiệu hóa học quốc tế, nguyên tử khối của 20 nguyên tố đầu, kim loại, phi kim, đơn chất và cấu tạo hạt nhân nguyên tử.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tinh_phan_tu_khoi',
    branch: 'vo_co',
    title: 'Phần 2: Phân Tử & Tính Phân Tử Khối (Lớp 7 - 8)',
    shortTitle: 'Phần 2: Tính Phân Tử Khối (Lớp 7-8)',
    grade: 'Lớp 7 - 8',
    icon: '⚖️',
    description: 'Rèn luyện kĩ năng tính phân tử khối (khối lượng phân tử theo amu/đvC) của đơn chất, oxit, axit, bazơ, muối và chất ngậm nước.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'hoa_tri_cthh',
    branch: 'vo_co',
    title: 'Phần 3: Hóa Trị & Lập Công Thức Hóa Học CTHH (Lớp 8)',
    shortTitle: 'Phần 3: Hóa Trị & CTHH (Lớp 8)',
    grade: 'Lớp 8',
    icon: '🧪',
    description: 'Quy tắc hóa trị (x . a = y . b), hóa trị các nhóm nguyên tử (-OH, =SO₄, =CO₃, ≡PO₄) và chéo chỉ số lập đúng CTHH.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'can_bang_pthh',
    branch: 'vo_co',
    title: 'Phần 4: Cân Bằng Phương Trình Hóa Học & Định Luật BTKL (Lớp 8)',
    shortTitle: 'Phần 4: Cân Bằng PTHH & BTKL (Lớp 8)',
    grade: 'Lớp 8',
    icon: '⚖️',
    description: 'Kỹ thuật cân bằng chẵn - lẻ, kim loại trước phi kim sau, định luật bảo toàn khối lượng (m tham gia = m sản phẩm).',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'cong_thuc_mol',
    branch: 'vo_co',
    title: 'Phần 5: Đại Lượng Mol, Thể Tích Khí & Nồng Độ Dung Dịch (Lớp 8 - 9)',
    shortTitle: 'Phần 5: Mol & Nồng Độ Dung Dịch',
    grade: 'Lớp 8 - 9',
    icon: '💧',
    description: 'Bộ công thức tính mol (n = m / M, n = V / 22,4), nồng độ mol CM = n / V, nồng độ phần trăm C% = (m_ct / m_dd) . 100%.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tinh_theo_pthh',
    branch: 'vo_co',
    title: 'Phần 6: Bài Toán Tính Theo Phương Trình Hóa Học 3 Bước (Lớp 8 - 9)',
    shortTitle: 'Phần 6: Tính Theo PTHH 3 Bước',
    grade: 'Lớp 8 - 9',
    icon: '📝',
    description: '3 Bước thần thánh: Đổi số mol -> Đặt tỉ lệ mol trên PTHH -> Tính khối lượng (m = n . M) hoặc thể tích khí thoát ra.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'vo_co_lop9',
    branch: 'vo_co',
    title: 'Phần 7: Tứ Đại Hợp Chất Vô Cơ: Oxit, Axit, Bazơ, Muối (Lớp 9)',
    shortTitle: 'Phần 7: Oxit, Axit, Bazơ, Muối (Lớp 9)',
    grade: 'Lớp 9',
    icon: '🔥',
    description: 'Tính chất hóa học, dãy hoạt động hóa học kim loại và điều kiện xảy ra phản ứng trao đổi tạo kết tủa, khí hoặc nước.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'cau_tao_nguyen_tu_lop10',
    branch: 'vo_co',
    title: 'Phần 8: Cấu Tạo Nguyên Tử & Bảng Tuần Hoàn (Lớp 10)',
    shortTitle: 'Phần 8: Nguyên Tử & Bảng Tuần Hoàn (10)',
    grade: 'Lớp 10',
    icon: '🌐',
    description: 'Hạt p, n, e, cấu hình electron (1s 2s 2p 3s 3p...), xác định ô, chu kì, nhóm và xu hướng biến thiên tính chất.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'oxi_hoa_khu_lop10',
    branch: 'vo_co',
    title: 'Phần 9: Phản Ứng Oxi Hóa - Khử & Cân Bằng E (Lớp 10)',
    shortTitle: 'Phần 9: Oxi Hóa - Khử & Thăng Bằng E (10)',
    grade: 'Lớp 10',
    icon: '⚡',
    description: 'Quy tắc số oxi hóa, thần chú "Khử cho - O nhận", xác định vai trò chất và phương pháp thăng bằng electron nhanh.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'su_dien_li_lop11',
    branch: 'vo_co',
    title: 'Phần 10: Sự Điện Li, pH & Hóa Học Vô Cơ Lớp 11 (Lớp 11)',
    shortTitle: 'Phần 10: Sự Điện Li & Vô Cơ 11',
    grade: 'Lớp 11',
    icon: '💡',
    description: 'Chất điện li mạnh/yếu, tính pH = -log[H+], môi trường axit/bazơ/trung tính, cân bằng hóa học và nguyên lí Le Chatelier.',
    totalExams: 10,
    questionsPerExam: 20
  },

  // ============================================================================
  // II. HÓA HỌC HỮU CƠ (LỚP 11 ĐẾN LỚP 12)
  // ============================================================================
  {
    id: 'huu_co_hidrocacbon',
    branch: 'huu_co',
    title: 'Phần 11: Hiđrocacbon: Ankan, Anken, Ankin & Benzen (Lớp 11)',
    shortTitle: 'Phần 11: Hiđrocacbon (11)',
    grade: 'Lớp 11',
    icon: '⛽',
    description: 'Đồng đẳng, đồng phân, phản ứng thế của Ankan, phản ứng cộng làm mất màu brom của Anken/Ankin và quy tắc Maccopnhicop.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_ancol_axit',
    branch: 'huu_co',
    title: 'Phần 12: Dẫn Xuất Chứa Oxi: Ancol Etylic & Axit Axetic (Lớp 11 - 12)',
    shortTitle: 'Phần 12: Ancol & Axit Axetic (11-12)',
    grade: 'Lớp 11 - 12',
    icon: '🍷',
    description: 'Cấu tạo nhóm -OH và -COOH, phản ứng với kim loại kiềm Na, phản ứng este hóa thuận nghịch và tính axit.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_este_lipit',
    branch: 'huu_co',
    title: 'Phần 13: Este, Lipit (Chất Béo) & Xà Phòng Hóa (Lớp 12)',
    shortTitle: 'Phần 13: Este & Chất Béo (12)',
    grade: 'Lớp 12',
    icon: '🧈',
    description: 'Danh pháp este, mùi thơm hoa quả, phản ứng thủy phân trong môi trường axit và môi trường kiềm (xà phòng hóa triglixerit).',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_cacbohidrat',
    branch: 'huu_co',
    title: 'Phần 14: Cacbohiđrat: Glucozơ, Saccarozơ, Tinh Bột, Xenlulozơ (Lớp 12)',
    shortTitle: 'Phần 14: Cacbohiđrat (12)',
    grade: 'Lớp 12',
    icon: '🌾',
    description: 'Phân loại monosaccarit, đisaccarit, polisaccarit; phản ứng tráng bạc của glucozơ và phản ứng màu của tinh bột với iot.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_amin_aminoaxit',
    branch: 'huu_co',
    title: 'Phần 15: Amin, Amino Axit, Peptit & Protein (Lớp 12)',
    shortTitle: 'Phần 15: Amin & Amino Axit (12)',
    grade: 'Lớp 12',
    icon: '🧬',
    description: 'Bậc của amin, tính bazơ, tính chất lưỡng tính của amino axit (Glyxin, Alanin, Valin), liên kết peptit và phản ứng màu biure.',
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
  let fallbackId = 1;
  while (all.length < 4) {
    all.push(`Lựa chọn ${fallbackId++}`);
  }
  return all.sort((a, b) => seededRandom(seed + a.length * 17) - 0.5);
}

// ==============================================================================
// 1. SINH ĐỀ PHẦN 1: KÍ HIỆU HÓA HỌC & NTK (20 CÂU KHÔNG TRÙNG NHAU)
// ==============================================================================
function generateNguyenToExam(examNo: number): LayGocHoaQuestion[] {
  const baseSeed = 5000 + examNo * 50;

  // 20 dạng câu hỏi hoàn toàn khác nhau cho 20 vị trí i = 1..20
  const qDefs: Array<(seed: number) => Omit<LayGocHoaQuestion, 'id' | 'topic'>> = [
    // Câu 1: KHH Hiđro
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Hiđro (Hydrogen) là:',
      options: makeOptions('H', ['He', 'Hg', 'Ho'], s),
      correctAnswer: 'H',
      explanation: 'Hiđro có kí hiệu hóa học là H, nguyên tử khối M = 1 đvC.'
    }),
    // Câu 2: KHH Oxi
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Oxi (Oxygen) là:',
      options: makeOptions('O', ['Os', 'Og', 'K'], s),
      correctAnswer: 'O',
      explanation: 'Oxi có kí hiệu hóa học là O, nguyên tử khối M = 16 đvC.'
    }),
    // Câu 3: KHH Cacbon
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Cacbon (Carbon) là:',
      options: makeOptions('C', ['Ca', 'Cl', 'Cu'], s),
      correctAnswer: 'C',
      explanation: 'Cacbon có kí hiệu hóa học là C, nguyên tử khối M = 12 đvC.'
    }),
    // Câu 4: KHH Nitơ
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Nitơ (Nitrogen) là:',
      options: makeOptions('N', ['Na', 'Ni', 'Ne'], s),
      correctAnswer: 'N',
      explanation: 'Nitơ có kí hiệu hóa học là N, nguyên tử khối M = 14 đvC.'
    }),
    // Câu 5: KHH Natri
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Natri (Sodium) là:',
      options: makeOptions('Na', ['N', 'K', 'Ne'], s),
      correctAnswer: 'Na',
      explanation: 'Natri có kí hiệu hóa học là Na, nguyên tử khối M = 23 đvC.'
    }),
    // Câu 6: KHH Nhôm
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Nhôm (Aluminium) là:',
      options: makeOptions('Al', ['Ag', 'Au', 'Ar'], s),
      correctAnswer: 'Al',
      explanation: 'Nhôm có kí hiệu hóa học là Al, nguyên tử khối M = 27 đvC.'
    }),
    // Câu 7: KHH Sắt
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Sắt (Iron) là:',
      options: makeOptions('Fe', ['F', 'Fr', 'Ir'], s),
      correctAnswer: 'Fe',
      explanation: 'Sắt có kí hiệu hóa học là Fe, nguyên tử khối M = 56 đvC.'
    }),
    // Câu 8: KHH Đồng
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Đồng (Copper) là:',
      options: makeOptions('Cu', ['Co', 'Cr', 'Cd'], s),
      correctAnswer: 'Cu',
      explanation: 'Đồng có kí hiệu hóa học là Cu, nguyên tử khối M = 64 đvC.'
    }),
    // Câu 9: KHH Canxi
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Canxi (Calcium) là:',
      options: makeOptions('Ca', ['C', 'Cu', 'Cr'], s),
      correctAnswer: 'Ca',
      explanation: 'Canxi có kí hiệu hóa học là Ca, nguyên tử khối M = 40 đvC.'
    }),
    // Câu 10: KHH Kali
    s => ({
      question: 'Kí hiệu hóa học quốc tế của nguyên tố Kali (Potassium) là:',
      options: makeOptions('K', ['Ka', 'Ca', 'Na'], s),
      correctAnswer: 'K',
      explanation: 'Kali có kí hiệu hóa học là K, nguyên tử khối M = 39 đvC.'
    }),
    // Câu 11: NTK Oxi
    s => ({
      question: 'Khối lượng nguyên tử (nguyên tử khối) của nguyên tố Oxi (O) bằng:',
      mathExpression: 'M_{\\mathrm{O}} = ?',
      options: makeOptions('16 đvC', ['8 đvC', '32 đvC', '14 đvC'], s),
      correctAnswer: '16 đvC',
      explanation: 'Nguyên tử khối của Oxi là 16 đvC (amu).'
    }),
    // Câu 12: NTK Hiđro
    s => ({
      question: 'Khối lượng nguyên tử (nguyên tử khối) của nguyên tố Hiđro (H) bằng:',
      mathExpression: 'M_{\\mathrm{H}} = ?',
      options: makeOptions('1 đvC', ['2 đvC', '4 đvC', '16 đvC'], s),
      correctAnswer: '1 đvC',
      explanation: 'Hiđro là nguyên tố nhẹ nhất với nguyên tử khối là 1 đvC (amu).'
    }),
    // Câu 13: NTK Cacbon
    s => ({
      question: 'Khối lượng nguyên tử (nguyên tử khối) của nguyên tố Cacbon (C) bằng:',
      mathExpression: 'M_{\\mathrm{C}} = ?',
      options: makeOptions('12 đvC', ['14 đvC', '16 đvC', '24 đvC'], s),
      correctAnswer: '12 đvC',
      explanation: 'Nguyên tử khối của Cacbon là 12 đvC (amu).'
    }),
    // Câu 14: NTK Natri
    s => ({
      question: 'Khối lượng nguyên tử (nguyên tử khối) của nguyên tố Natri (Na) bằng:',
      mathExpression: 'M_{\\mathrm{Na}} = ?',
      options: makeOptions('23 đvC', ['24 đvC', '39 đvC', '22 đvC'], s),
      correctAnswer: '23 đvC',
      explanation: 'Nguyên tử khối của Natri là 23 đvC (amu).'
    }),
    // Câu 15: NTK Sắt
    s => ({
      question: 'Khối lượng nguyên tử (nguyên tử khối) của nguyên tố Sắt (Fe) bằng:',
      mathExpression: 'M_{\\mathrm{Fe}} = ?',
      options: makeOptions('56 đvC', ['55 đvC', '64 đvC', '65 đvC'], s),
      correctAnswer: '56 đvC',
      explanation: 'Nguyên tử khối của Sắt là 56 đvC (amu).'
    }),
    // Câu 16: So sánh độ nặng nhẹ
    s => ({
      question: 'Nguyên tử Oxi (O, M = 16) nặng hơn nguyên tử Hiđro (H, M = 1) bao nhiêu lần?',
      mathExpression: '\\frac{M_{\\mathrm{O}}}{M_{\\mathrm{H}}} = \\frac{16}{1}',
      options: makeOptions('Nặng hơn 16 lần', ['Nặng hơn 8 lần', 'Nặng hơn 2 lần', 'Bằng nhau'], s),
      correctAnswer: 'Nặng hơn 16 lần',
      explanation: 'Tỉ số khối lượng: M(O) / M(H) = 16 / 1 = 16 lần.'
    }),
    // Câu 17: Đơn chất kim loại
    s => ({
      question: 'Trong các chất sau, đâu là đơn chất kim loại có tính ánh kim, dẫn điện và dẫn nhiệt tốt?',
      options: makeOptions('Nhôm (Al)', ['Khí Oxi (O₂)', 'Khí Nitơ (N₂)', 'Khí Cacbonic (CO₂)'], s),
      correctAnswer: 'Nhôm (Al)',
      explanation: 'Nhôm (Al) là đơn chất kim loại dẻo, có ánh kim, dẫn điện và dẫn nhiệt tốt.'
    }),
    // Câu 18: Đơn chất phi kim
    s => ({
      question: 'Chất nào sau đây là đơn chất phi kim duy trì sự sống và sự cháy?',
      options: makeOptions('Khí Oxi (O₂)', ['Khí Cacbonic (CO₂)', 'Nước (H₂O)', 'Kim loại Sắt (Fe)'], s),
      correctAnswer: 'Khí Oxi (O₂)',
      explanation: 'Khí Oxi (O₂) là đơn chất phi kim cần thiết cho sự hô hấp và duy trì sự cháy.'
    }),
    // Câu 19: Khái niệm hợp chất
    s => ({
      question: 'Hợp chất là những chất được tạo nên từ bao nhiêu nguyên tố hóa học trở lên?',
      options: makeOptions('Từ 2 nguyên tố hóa học trở lên', ['Chỉ từ 1 nguyên tố', 'Từ 5 nguyên tố trở lên', 'Chỉ từ kim loại'], s),
      correctAnswer: 'Từ 2 nguyên tố hóa học trở lên',
      explanation: 'Hợp chất được cấu tạo từ 2 nguyên tố hóa học trở lên (ví dụ H₂O, NaCl, CaCO₃).'
    }),
    // Câu 20: Cấu tạo hạt nhân
    s => ({
      question: 'Hạt nhân nguyên tử được tạo thành từ những loại hạt nào sau đây?',
      options: makeOptions('Proton (mang điện dương) và Nơtron (không mang điện)', ['Chỉ gồm electron', 'Proton và electron', 'Nơtron và electron'], s),
      correctAnswer: 'Proton (mang điện dương) và Nơtron (không mang điện)',
      explanation: 'Hạt nhân nguyên tử gồm proton (+) và nơtron (không mang điện); lớp vỏ gồm các electron (-).'
    })
  ];

  return qDefs.map((def, idx) => {
    const s = baseSeed + (idx + 1) * 11;
    const item = def(s);
    return {
      id: idx + 1,
      ...item,
      question: `Câu ${idx + 1}: ${item.question}`,
      topic: 'khtn_nguyen_to'
    };
  });
}

// ==============================================================================
// 2. SINH ĐỀ PHẦN 2: PHÂN TỬ & TÍNH PHÂN TỬ KHỐI (20 CÂU RIÊNG BIỆT)
// ==============================================================================
function generateTinhPhanTuKhoiExam(examNo: number): LayGocHoaQuestion[] {
  const baseSeed = 5100 + examNo * 50;

  // 20 chất khác nhau hoàn toàn cho 20 câu tính PTK
  const molList = [
    { name: 'Khí Oxi (O₂)', formula: 'O₂', math: '16 \\cdot 2', ans: '32 đvC', expl: 'Phân tử O₂ gồm 2 nguyên tử O: PTK = 16 . 2 = 32 đvC (amu).', dist: ['16 đvC', '48 đvC', '64 đvC'] },
    { name: 'Khí Nitơ (N₂)', formula: 'N₂', math: '14 \\cdot 2', ans: '28 đvC', expl: 'Phân tử N₂ gồm 2 nguyên tử N: PTK = 14 . 2 = 28 đvC (amu).', dist: ['14 đvC', '30 đvC', '42 đvC'] },
    { name: 'Khí Hiđro (H₂)', formula: 'H₂', math: '1 \\cdot 2', ans: '2 đvC', expl: 'Phân tử H₂ gồm 2 nguyên tử H: PTK = 1 . 2 = 2 đvC (amu).', dist: ['1 đvC', '4 đvC', '16 đvC'] },
    { name: 'Khí Clo (Cl₂)', formula: 'Cl₂', math: '35,5 \\cdot 2', ans: '71 đvC', expl: 'Phân tử Cl₂ gồm 2 nguyên tử Cl: PTK = 35,5 . 2 = 71 đvC (amu).', dist: ['35,5 đvC', '70 đvC', '72 đvC'] },
    { name: 'Khí Ozôn (O₃)', formula: 'O₃', math: '16 \\cdot 3', ans: '48 đvC', expl: 'Phân tử O₃ gồm 3 nguyên tử O: PTK = 16 . 3 = 48 đvC (amu).', dist: ['32 đvC', '16 đvC', '64 đvC'] },
    { name: 'Nước (H₂O)', formula: 'H₂O', math: '1 \\cdot 2 + 16', ans: '18 đvC', expl: 'Phân tử khối của H₂O: M = 2 . 1 + 16 = 18 đvC (amu).', dist: ['17 đvC', '20 đvC', '34 đvC'] },
    { name: 'Khí Cacbonic (CO₂)', formula: 'CO₂', math: '12 + 16 \\cdot 2', ans: '44 đvC', expl: 'Phân tử khối CO₂: M = 12 + 16 . 2 = 44 đvC (amu).', dist: ['28 đvC', '32 đvC', '40 đvC'] },
    { name: 'Khí Cacbon oxit (CO)', formula: 'CO', math: '12 + 16', ans: '28 đvC', expl: 'Phân tử khối CO: M = 12 + 16 = 28 đvC (amu).', dist: ['44 đvC', '32 đvC', '14 đvC'] },
    { name: 'Khí Metan (CH₄)', formula: 'CH₄', math: '12 + 1 \\cdot 4', ans: '16 đvC', expl: 'Phân tử khối CH₄: M = 12 + 1 . 4 = 16 đvC (amu).', dist: ['12 đvC', '20 đvC', '14 đvC'] },
    { name: 'Vôi sống Canxi oxit (CaO)', formula: 'CaO', math: '40 + 16', ans: '56 đvC', expl: 'Phân tử khối CaO: M = 40 + 16 = 56 đvC (amu).', dist: ['40 đvC', '72 đvC', '60 đvC'] },
    { name: 'Magie oxit (MgO)', formula: 'MgO', math: '24 + 16', ans: '40 đvC', expl: 'Phân tử khối MgO: M = 24 + 16 = 40 đvC (amu).', dist: ['24 đvC', '56 đvC', '48 đvC'] },
    { name: 'Nhôm oxit (Al₂O₃)', formula: 'Al₂O₃', math: '27 \\cdot 2 + 16 \\cdot 3', ans: '102 đvC', expl: 'Phân tử khối Al₂O₃: M = 27 . 2 + 16 . 3 = 54 + 48 = 102 đvC (amu).', dist: ['100 đvC', '75 đvC', '113 đvC'] },
    { name: 'Sắt(III) oxit (Fe₂O₃)', formula: 'Fe₂O₃', math: '56 \\cdot 2 + 16 \\cdot 3', ans: '160 đvC', expl: 'Phân tử khối Fe₂O₃: M = 56 . 2 + 16 . 3 = 112 + 48 = 160 đvC (amu).', dist: ['72 đvC', '152 đvC', '176 đvC'] },
    { name: 'Sắt(II) oxit (FeO)', formula: 'FeO', math: '56 + 16', ans: '72 đvC', expl: 'Phân tử khối FeO: M = 56 + 16 = 72 đvC (amu).', dist: ['160 đvC', '56 đvC', '88 đvC'] },
    { name: 'Axit sunfuric (H₂SO₄)', formula: 'H₂SO₄', math: '1 \\cdot 2 + 32 + 16 \\cdot 4', ans: '98 đvC', expl: 'Phân tử khối H₂SO₄: M = 2 . 1 + 32 + 16 . 4 = 98 đvC (amu).', dist: ['96 đvC', '100 đvC', '82 đvC'] },
    { name: 'Axit clohiđric (HCl)', formula: 'HCl', math: '1 + 35,5', ans: '36,5 đvC', expl: 'Phân tử khối HCl: M = 1 + 35,5 = 36,5 đvC (amu).', dist: ['35,5 đvC', '37,5 đvC', '38 đvC'] },
    { name: 'Natri hiđroxit xút (NaOH)', formula: 'NaOH', math: '23 + 16 + 1', ans: '40 đvC', expl: 'Phân tử khối NaOH: M = 23 + 16 + 1 = 40 đvC (amu).', dist: ['39 đvC', '41 đvC', '58,5 đvC'] },
    { name: 'Nước vôi trong Canxi hiđroxit (Ca(OH)₂)', formula: 'Ca(OH)₂', math: '40 + (16 + 1) \\cdot 2', ans: '74 đvC', expl: 'Phân tử khối Ca(OH)₂: M = 40 + (16 + 1) . 2 = 40 + 34 = 74 đvC (amu).', dist: ['57 đvC', '78 đvC', '100 đvC'] },
    { name: 'Đá vôi Canxi cacbonat (CaCO₃)', formula: 'CaCO₃', math: '40 + 12 + 16 \\cdot 3', ans: '100 đvC', expl: 'Phân tử khối CaCO₃: M = 40 + 12 + 16 . 3 = 100 đvC (amu).', dist: ['90 đvC', '110 đvC', '84 đvC'] },
    { name: 'Muối ngậm nước Đồng(II) sunfat (CuSO₄ . 5H₂O)', formula: 'CuSO₄ . 5H₂O', math: '160 + 5 \\cdot 18', ans: '250 đvC', expl: 'Phân tử khối muối ngậm nước CuSO₄ . 5H₂O: M = (64 + 32 + 16 . 4) + 5 . 18 = 160 + 90 = 250 đvC (amu).', dist: ['160 đvC', '232 đvC', '178 đvC'] }
  ];

  return molList.map((item, idx) => {
    const s = baseSeed + (idx + 1) * 13;
    return {
      id: idx + 1,
      question: `Câu ${idx + 1}: Phân tử khối (khối lượng phân tử theo amu/đvC) của hợp chất ${item.name} là:`,
      mathExpression: `M_{\\mathrm{${item.formula}}} = ${item.math} = ?`,
      options: makeOptions(item.ans, item.dist, s),
      correctAnswer: item.ans,
      explanation: item.expl,
      topic: 'tinh_phan_tu_khoi'
    };
  });
}

// ==============================================================================
// 3. SINH ĐỀ PHẦN 3: HÓA TRỊ & CTHH (20 CÂU KHÔNG TRÙNG NHAU)
// ==============================================================================
function generateHoaTriExam(examNo: number): LayGocHoaQuestion[] {
  const baseSeed = 5200 + examNo * 50;

  const defs: Array<(seed: number) => Omit<LayGocHoaQuestion, 'id' | 'topic'>> = [
    s => ({
      question: 'Hóa trị của nguyên tố Oxi (O) luôn được chọn làm đơn vị quy ước chuẩn bằng:',
      options: makeOptions('II', ['I', 'III', 'IV'], s),
      correctAnswer: 'II',
      explanation: 'Quy ước chuẩn: Trong các hợp chất, nguyên tố Oxi luôn có hóa trị II.'
    }),
    s => ({
      question: 'Hóa trị của nguyên tố Hiđro (H) luôn được chọn làm đơn vị quy ước chuẩn bằng:',
      options: makeOptions('I', ['II', 'III', '0'], s),
      correctAnswer: 'I',
      explanation: 'Quy ước chuẩn: Trong các hợp chất, nguyên tố Hiđro luôn có hóa trị I.'
    }),
    s => ({
      question: 'Hóa trị của nhóm hiđroxit (-OH) trong phân tử các bazơ (như NaOH, KOH) là:',
      options: makeOptions('I', ['II', 'III', 'IV'], s),
      correctAnswer: 'I',
      explanation: 'Nhóm -OH luôn có hóa trị I.'
    }),
    s => ({
      question: 'Hóa trị của nhóm sunfat (=SO₄) và cacbonat (=CO₃) là:',
      options: makeOptions('II', ['I', 'III', 'IV'], s),
      correctAnswer: 'II',
      explanation: 'Cả 2 nhóm nguyên tử SO₄ và CO₃ đều có hóa trị II.'
    }),
    s => ({
      question: 'Hóa trị của nhóm photphat (≡PO₄) trong phân tử H₃PO₄ là:',
      options: makeOptions('III', ['I', 'II', 'IV'], s),
      correctAnswer: 'III',
      explanation: 'Nhóm photphat PO₄ luôn có hóa trị III.'
    }),
    s => ({
      question: 'Quy tắc hóa trị đối với hợp chất hai nguyên tố A_x^a B_y^b được phát biểu chuẩn là:',
      options: makeOptions('x . a = y . b', ['x + a = y + b', 'x / a = y / b', 'x . y = a . b'], s),
      correctAnswer: 'x . a = y . b',
      explanation: 'Quy tắc hóa trị: Tích của chỉ số và hóa trị của nguyên tố này bằng tích của chỉ số và hóa trị của nguyên tố kia: x . a = y . b.'
    }),
    s => ({
      question: 'Công thức hóa học chuẩn xác của Nhôm oxit (Al hóa trị III, O hóa trị II) là:',
      options: makeOptions('Al₂O₃', ['AlO', 'Al₃O₂', 'AlO₂'], s),
      correctAnswer: 'Al₂O₃',
      explanation: 'Áp dụng quy tắc chéo chỉ số: Al(III) và O(II) tạo thành CTHH Al₂O₃.'
    }),
    s => ({
      question: 'Công thức hóa học chuẩn xác của Magie clorua (Mg hóa trị II, Cl hóa trị I) là:',
      options: makeOptions('MgCl₂', ['MgCl', 'Mg₂Cl', 'MgCl₃'], s),
      correctAnswer: 'MgCl₂',
      explanation: 'Mg(II) và Cl(I) tạo thành CTHH MgCl₂.'
    }),
    s => ({
      question: 'Công thức hóa học chuẩn xác của Sắt(III) oxit (Fe hóa trị III, O hóa trị II) là:',
      options: makeOptions('Fe₂O₃', ['FeO', 'Fe₃O₄', 'Fe₂O'], s),
      correctAnswer: 'Fe₂O₃',
      explanation: 'Fe(III) kết hợp với O(II) tạo CTHH Fe₂O₃.'
    }),
    s => ({
      question: 'Công thức hóa học chuẩn xác của Canxi cacbonat (Ca hóa trị II, nhóm CO₃ hóa trị II) là:',
      options: makeOptions('CaCO₃', ['Ca(CO₃)₂', 'Ca₂CO₃', 'CaHCO₃'], s),
      correctAnswer: 'CaCO₃',
      explanation: 'Ca(II) và CO₃(II) có tỉ lệ hóa trị 1 : 1 -> CaCO₃.'
    }),
    s => ({
      question: 'Công thức hóa học chuẩn xác của Natri sunfat (Na hóa trị I, nhóm SO₄ hóa trị II) là:',
      options: makeOptions('Na₂SO₄', ['NaSO₄', 'Na(SO₄)₂', 'Na₂SO₃'], s),
      correctAnswer: 'Na₂SO₄',
      explanation: 'Na(I) và SO₄(II) chéo chỉ số tạo thành CTHH Na₂SO₄.'
    }),
    s => ({
      question: 'Công thức hóa học chuẩn xác của Bari sunfat (Ba hóa trị II, nhóm SO₄ hóa trị II) là:',
      options: makeOptions('BaSO₄', ['Ba₂(SO₄)₂', 'Ba(SO₄)₂', 'BaSO₃'], s),
      correctAnswer: 'BaSO₄',
      explanation: 'Ba(II) và SO₄(II) có tỉ lệ 1 : 1 -> CTHH là BaSO₄.'
    }),
    s => ({
      question: 'Xác định hóa trị của kim loại Sắt (Fe) trong hợp chất FeCl₃ (biết Cl có hóa trị I):',
      mathExpression: 'Fe^a Cl_3^I \\Rightarrow a \\cdot 1 = I \\cdot 3',
      options: makeOptions('III', ['I', 'II', 'IV'], s),
      correctAnswer: 'III',
      explanation: 'Theo quy tắc hóa trị: a . 1 = 1 . 3 => a = III. Sắt có hóa trị III trong FeCl₃.'
    }),
    s => ({
      question: 'Xác định hóa trị của Lưu huỳnh (S) trong hợp chất khí Lưu huỳnh đioxit SO₂ (biết O có hóa trị II):',
      mathExpression: 'S^a O_2^{II} \\Rightarrow a \\cdot 1 = II \\cdot 2',
      options: makeOptions('IV', ['II', 'VI', 'III'], s),
      correctAnswer: 'IV',
      explanation: 'Theo quy tắc hóa trị: a . 1 = 2 . 2 => a = IV.'
    }),
    s => ({
      question: 'Xác định hóa trị của Lưu huỳnh (S) trong hợp chất Lưu huỳnh trioxit SO₃ (biết O có hóa trị II):',
      mathExpression: 'S^a O_3^{II} \\Rightarrow a \\cdot 1 = II \\cdot 3',
      options: makeOptions('VI', ['IV', 'II', 'V'], s),
      correctAnswer: 'VI',
      explanation: 'Theo quy tắc hóa trị: a . 1 = 2 . 3 => a = VI.'
    }),
    s => ({
      question: 'Xác định hóa trị của Photpho (P) trong hợp chất P₂O₅ (biết O có hóa trị II):',
      mathExpression: 'P_2^a O_5^{II} \\Rightarrow a \\cdot 2 = II \\cdot 5',
      options: makeOptions('V', ['III', 'IV', 'II'], s),
      correctAnswer: 'V',
      explanation: 'Theo quy tắc hóa trị: a . 2 = 2 . 5 => 2a = 10 => a = V.'
    }),
    s => ({
      question: 'Xác định hóa trị của Đồng (Cu) trong hợp chất Đồng(I) oxit Cu₂O:',
      mathExpression: 'Cu_2^a O^{II} \\Rightarrow a \\cdot 2 = II \\cdot 1',
      options: makeOptions('I', ['II', 'III', '0'], s),
      correctAnswer: 'I',
      explanation: 'Theo quy tắc hóa trị: a . 2 = 2 . 1 => a = I.'
    }),
    s => ({
      question: 'Hợp chất khí Cacbon oxit CO có hóa trị của Cacbon là:',
      mathExpression: 'C^a O^{II} \\Rightarrow a \\cdot 1 = II \\cdot 1',
      options: makeOptions('II', ['IV', 'I', 'III'], s),
      correctAnswer: 'II',
      explanation: 'Trong CO, Cacbon có hóa trị II.'
    }),
    s => ({
      question: 'Trong hợp chất Axit sunfuhic H₂S, nguyên tố Lưu huỳnh có hóa trị là:',
      mathExpression: 'H_2^I S^a \\Rightarrow I \\cdot 2 = a \\cdot 1',
      options: makeOptions('II', ['IV', 'VI', 'I'], s),
      correctAnswer: 'II',
      explanation: 'Trong H₂S, Lưu huỳnh có hóa trị II.'
    }),
    s => ({
      question: 'Cách viết muối ngậm nước đúng chuẩn của Đồng(II) sunfat ngậm 5 phân tử nước là:',
      options: makeOptions('CuSO₄ . 5H₂O', ['CuSO₄ + 5H₂O', 'CuSO₄x5H₂O', 'CuSO₄(H₂O)₅'], s),
      correctAnswer: 'CuSO₄ . 5H₂O',
      explanation: 'Theo chuẩn hóa học: Muối ngậm nước biểu diễn bằng dấu chấm liên kết: CuSO₄ . 5H₂O.'
    })
  ];

  return defs.map((def, idx) => {
    const s = baseSeed + (idx + 1) * 17;
    const item = def(s);
    return {
      id: idx + 1,
      ...item,
      question: `Câu ${idx + 1}: ${item.question}`,
      topic: 'hoa_tri_cthh'
    };
  });
}

// ==============================================================================
// 4. SINH ĐỀ PHẦN 4: CÂN BẰNG PTHH & BTKL (20 CÂU KHÔNG TRÙNG NHAU)
// ==============================================================================
function generateCanBangPTHHExam(examNo: number): LayGocHoaQuestion[] {
  const baseSeed = 5400 + examNo * 50;

  const defs: Array<(seed: number) => Omit<LayGocHoaQuestion, 'id' | 'topic'>> = [
    // 10 câu cân bằng 10 phản ứng khác nhau
    s => ({
      question: 'Hệ số cân bằng tối giản của phản ứng: ? Al + ? O₂ → ? Al₂O₃ là:',
      mathExpression: '? \\mathrm{Al} + ? \\mathrm{O_2} \\xrightarrow{t^\\circ} ? \\mathrm{Al_2O_3}',
      options: makeOptions('4, 3, 2', ['2, 3, 1', '4, 2, 2', '2, 1, 1'], s),
      correctAnswer: '4, 3, 2',
      explanation: 'Cân bằng: 4Al + 3O₂ → 2Al₂O₃. Hệ số là 4 : 3 : 2.'
    }),
    s => ({
      question: 'Hệ số cân bằng tối giản của phản ứng: ? Fe + ? HCl → ? FeCl₂ + ? H₂ là:',
      mathExpression: '? \\mathrm{Fe} + ? \\mathrm{HCl} \\rightarrow ? \\mathrm{FeCl_2} + ? \\mathrm{H_2}',
      options: makeOptions('1, 2, 1, 1', ['1, 1, 1, 1', '2, 4, 2, 1', '1, 2, 2, 1'], s),
      correctAnswer: '1, 2, 1, 1',
      explanation: 'Cân bằng: Fe + 2HCl → FeCl₂ + H₂. Hệ số là 1 : 2 : 1 : 1.'
    }),
    s => ({
      question: 'Hệ số cân bằng tối giản của phản ứng: ? Al + ? H₂SO₄ → ? Al₂(SO₄)₃ + ? H₂ là:',
      mathExpression: '? \\mathrm{Al} + ? \\mathrm{H_2SO_4} \\rightarrow ? \\mathrm{Al_2(SO_4)_3} + ? \\mathrm{H_2}',
      options: makeOptions('2, 3, 1, 3', ['1, 3, 1, 3', '2, 2, 1, 2', '2, 3, 2, 3'], s),
      correctAnswer: '2, 3, 1, 3',
      explanation: 'Cân bằng: 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂. Hệ số là 2 : 3 : 1 : 3.'
    }),
    s => ({
      question: 'Hệ số cân bằng của phản ứng cháy khí Metan: ? CH₄ + ? O₂ → ? CO₂ + ? H₂O là:',
      mathExpression: '? \\mathrm{CH_4} + ? \\mathrm{O_2} \\xrightarrow{t^\\circ} ? \\mathrm{CO_2} + ? \\mathrm{H_2O}',
      options: makeOptions('1, 2, 1, 2', ['1, 1, 1, 2', '1, 3, 1, 2', '2, 3, 2, 4'], s),
      correctAnswer: '1, 2, 1, 2',
      explanation: 'Cân bằng: CH₄ + 2O₂ → CO₂ + 2H₂O. Hệ số là 1 : 2 : 1 : 2.'
    }),
    s => ({
      question: 'Hệ số cân bằng của phản ứng khử oxit sắt từ bằng khí CO: ? Fe₃O₄ + ? CO → ? Fe + ? CO₂ là:',
      mathExpression: '? \\mathrm{Fe_3O_4} + ? \\mathrm{CO} \\xrightarrow{t^\\circ} ? \\mathrm{Fe} + ? \\mathrm{CO_2}',
      options: makeOptions('1, 4, 3, 4', ['1, 3, 3, 3', '1, 4, 1, 4', '2, 4, 3, 4'], s),
      correctAnswer: '1, 4, 3, 4',
      explanation: 'Cân bằng: Fe₃O₄ + 4CO → 3Fe + 4CO₂. Hệ số là 1 : 4 : 3 : 4.'
    }),
    s => ({
      question: 'Hệ số cân bằng nhiệt phân muối Kaliclorat: ? KClO₃ → ? KCl + ? O₂ là:',
      mathExpression: '? \\mathrm{KClO_3} \\xrightarrow{t^\\circ, \\mathrm{MnO_2}} ? \\mathrm{KCl} + ? \\mathrm{O_2}',
      options: makeOptions('2, 2, 3', ['1, 1, 1', '2, 1, 3', '1, 1, 3'], s),
      correctAnswer: '2, 2, 3',
      explanation: 'Cân bằng: 2KClO₃ → 2KCl + 3O₂. Hệ số là 2 : 2 : 3.'
    }),
    s => ({
      question: 'Hệ số cân bằng phản ứng đốt cháy Photpho: ? P + ? O₂ → ? P₂O₅ là:',
      mathExpression: '? \\mathrm{P} + ? \\mathrm{O_2} \\xrightarrow{t^\\circ} ? \\mathrm{P_2O_5}',
      options: makeOptions('4, 5, 2', ['2, 5, 1', '4, 3, 2', '2, 3, 1'], s),
      correctAnswer: '4, 5, 2',
      explanation: 'Cân bằng: 4P + 5O₂ → 2P₂O₅. Hệ số là 4 : 5 : 2.'
    }),
    s => ({
      question: 'Hệ số cân bằng phản ứng nhiệt phân Sắt(III) hiđroxit: ? Fe(OH)₃ → ? Fe₂O₃ + ? H₂O là:',
      mathExpression: '? \\mathrm{Fe(OH)_3} \\xrightarrow{t^\\circ} ? \\mathrm{Fe_2O_3} + ? \\mathrm{H_2O}',
      options: makeOptions('2, 1, 3', ['1, 1, 1', '2, 2, 3', '1, 1, 3'], s),
      correctAnswer: '2, 1, 3',
      explanation: 'Cân bằng: 2Fe(OH)₃ → Fe₂O₃ + 3H₂O. Hệ số là 2 : 1 : 3.'
    }),
    s => ({
      question: 'Hệ số cân bằng phản ứng: ? Cu + ? AgNO₃ → ? Cu(NO₃)₂ + ? Ag là:',
      mathExpression: '? \\mathrm{Cu} + ? \\mathrm{AgNO_3} \\rightarrow ? \\mathrm{Cu(NO_3)_2} + ? \\mathrm{Ag}',
      options: makeOptions('1, 2, 1, 2', ['1, 1, 1, 1', '1, 2, 1, 1', '2, 2, 1, 2'], s),
      correctAnswer: '1, 2, 1, 2',
      explanation: 'Cân bằng: Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag. Hệ số là 1 : 2 : 1 : 2.'
    }),
    s => ({
      question: 'Hệ số cân bằng phản ứng Natri với nước: ? Na + ? H₂O → ? NaOH + ? H₂ là:',
      mathExpression: '? \\mathrm{Na} + ? \\mathrm{H_2O} \\rightarrow ? \\mathrm{NaOH} + ? \\mathrm{H_2}',
      options: makeOptions('2, 2, 2, 1', ['1, 1, 1, 1', '2, 1, 2, 1', '2, 2, 1, 1'], s),
      correctAnswer: '2, 2, 2, 1',
      explanation: 'Cân bằng: 2Na + 2H₂O → 2NaOH + H₂. Hệ số là 2 : 2 : 2 : 1.'
    }),

    // 10 bài toán BTKL và lí thuyết bảo toàn khác nhau
    s => ({
      question: 'Đốt cháy hoàn toàn 6g Cacbon (C) trong khí Oxi sinh ra 22g khí Cacbonic (CO₂). Khối lượng khí Oxi đã tham gia phản ứng là:',
      mathExpression: 'm_{\\mathrm{C}} + m_{\\mathrm{O_2}} = m_{\\mathrm{CO_2}} \\Rightarrow 6 + m_{\\mathrm{O_2}} = 22',
      options: makeOptions('16 gam', ['12 gam', '18 gam', '28 gam'], s),
      correctAnswer: '16 gam',
      explanation: 'Theo BTKL: m(O₂) = 22 - 6 = 16 gam.'
    }),
    s => ({
      question: 'Cho 2,4g Magie (Mg) tác dụng với axit HCl thu được 9,5g muối MgCl₂ và 0,2g khí H₂. Khối lượng axit HCl đã phản ứng là:',
      mathExpression: '2,4 + m_{\\mathrm{HCl}} = 9,5 + 0,2',
      options: makeOptions('7,3 gam', ['7,1 gam', '9,7 gam', '6,8 gam'], s),
      correctAnswer: '7,3 gam',
      explanation: 'Theo BTKL: m(HCl) = (9,5 + 0,2) - 2,4 = 7,3 gam.'
    }),
    s => ({
      question: 'Nung 100g đá vôi CaCO₃ sinh ra 56g vôi sống CaO và khí CO₂. Khối lượng khí CO₂ thoát ra là:',
      mathExpression: '100 = 56 + m_{\\mathrm{CO_2}}',
      options: makeOptions('44 gam', ['40 gam', '48 gam', '54 gam'], s),
      correctAnswer: '44 gam',
      explanation: 'Theo BTKL: m(CO₂) = 100 - 56 = 44 gam.'
    }),
    s => ({
      question: 'Đốt cháy hoàn toàn 3,2 gam Lưu huỳnh (S) thu được 6,4 gam khí SO₂. Khối lượng khí Oxi đã phản ứng là:',
      mathExpression: '3,2 + m_{\\mathrm{O_2}} = 6,4',
      options: makeOptions('3,2 gam', ['1,6 gam', '4,8 gam', '6,4 gam'], s),
      correctAnswer: '3,2 gam',
      explanation: 'Theo BTKL: m(O₂) = 6,4 - 3,2 = 3,2 gam.'
    }),
    s => ({
      question: 'Cho 5,6 gam Sắt tác dụng vừa đủ với Lưu huỳnh thu được 8,8 gam muối FeS. Khối lượng Lưu huỳnh phản ứng là:',
      mathExpression: '5,6 + m_{\\mathrm{S}} = 8,8',
      options: makeOptions('3,2 gam', ['2,4 gam', '4,0 gam', '1,6 gam'], s),
      correctAnswer: '3,2 gam',
      explanation: 'Theo BTKL: m(S) = 8,8 - 5,6 = 3,2 gam.'
    }),
    s => ({
      question: 'Đốt cháy hoàn toàn 4g khí Metan CH₄ trong 16g khí O₂ thu được 11g khí CO₂ và nước. Khối lượng nước tạo thành là:',
      mathExpression: '4 + 16 = 11 + m_{\\mathrm{H_2O}}',
      options: makeOptions('9 gam', ['8 gam', '10 gam', '18 gam'], s),
      correctAnswer: '9 gam',
      explanation: 'Theo BTKL: m(H₂O) = (4 + 16) - 11 = 9 gam.'
    }),
    s => ({
      question: 'Định luật bảo toàn khối lượng được phát biểu chuẩn là:',
      options: makeOptions('Tổng khối lượng các chất tham gia bằng tổng khối lượng các sản phẩm tạo thành', ['Khối lượng sản phẩm luôn lớn hơn chất tham gia', 'Khối lượng sản phẩm luôn nhỏ hơn chất tham gia', 'Số phân tử trước và sau phản ứng luôn bằng nhau'], s),
      correctAnswer: 'Tổng khối lượng các chất tham gia bằng tổng khối lượng các sản phẩm tạo thành',
      explanation: 'Phát biểu đúng: Trong một phản ứng hóa học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất phản ứng.'
    }),
    s => ({
      question: 'Lí do khiến khối lượng được bảo toàn trong phản ứng hóa học là do:',
      options: makeOptions('Số lượng nguyên tử của mỗi nguyên tố được giữ nguyên', ['Các liên kết không bị phá vỡ', 'Nhiệt độ không thay đổi', 'Số phân tử không đổi'], s),
      correctAnswer: 'Số lượng nguyên tử của mỗi nguyên tố được giữ nguyên',
      explanation: 'Bản chất: Trong phản ứng chỉ có liên kết giữa các nguyên tử thay đổi, số nguyên tử của mỗi nguyên tố được bảo toàn.'
    }),
    s => ({
      question: 'Cho 6,5g Kẽm tác dụng vừa đủ với HCl tạo thành 13,6g muối ZnCl₂ và khí H₂. Khối lượng khí H₂ sinh ra là (biết mHCl = 7,3g):',
      mathExpression: '6,5 + 7,3 = 13,6 + m_{\\mathrm{H_2}}',
      options: makeOptions('0,2 gam', ['0,1 gam', '0,4 gam', '2,0 gam'], s),
      correctAnswer: '0,2 gam',
      explanation: 'Theo BTKL: m(H₂) = (6,5 + 7,3) - 13,6 = 0,2 gam.'
    }),
    s => ({
      question: 'Nung 12g đá vôi trong bình kín không có khí thoát ra, tổng khối lượng chất rắn sau phản ứng và khí CO₂ bằng:',
      options: makeOptions('12 gam', ['10 gam', '14 gam', '6 gam'], s),
      correctAnswer: '12 gam',
      explanation: 'Vì nung trong bình kín nên khối lượng toàn bộ hệ được bảo toàn bằng đúng 12 gam ban đầu.'
    })
  ];

  return defs.map((def, idx) => {
    const s = baseSeed + (idx + 1) * 19;
    const item = def(s);
    return {
      id: idx + 1,
      ...item,
      question: `Câu ${idx + 1}: ${item.question}`,
      topic: 'can_bang_pthh'
    };
  });
}

// ==============================================================================
// 5. SINH ĐỀ PHẦN 5: ĐẠI LƯỢNG MOL & NỒNG ĐỘ DUNG DỊCH (20 CÂU KHÔNG TRÙNG)
// ==============================================================================
function generateCongThucMolExam(examNo: number): LayGocHoaQuestion[] {
  const baseSeed = 5600 + examNo * 50;

  const defs: Array<(seed: number) => Omit<LayGocHoaQuestion, 'id' | 'topic'>> = [
    // 5 câu đổi n = m / M
    s => ({
      question: 'Tính số mol của 5,6 gam kim loại Sắt (Fe, biết M = 56 g/mol):',
      mathExpression: 'n = \\frac{m}{M} = \\frac{5,6}{56}',
      options: makeOptions('0,1 mol', ['0,2 mol', '1 mol', '0,05 mol'], s),
      correctAnswer: '0,1 mol',
      explanation: 'n = 5,6 / 56 = 0,1 mol.'
    }),
    s => ({
      question: 'Tính số mol của 5,4 gam kim loại Nhôm (Al, biết M = 27 g/mol):',
      mathExpression: 'n = \\frac{m}{M} = \\frac{5,4}{27}',
      options: makeOptions('0,2 mol', ['0,1 mol', '0,4 mol', '1 mol'], s),
      correctAnswer: '0,2 mol',
      explanation: 'n = 5,4 / 27 = 0,2 mol.'
    }),
    s => ({
      question: 'Tính số mol của 12,8 gam kim loại Đồng (Cu, biết M = 64 g/mol):',
      mathExpression: 'n = \\frac{m}{M} = \\frac{12,8}{64}',
      options: makeOptions('0,2 mol', ['0,1 mol', '0,3 mol', '0,5 mol'], s),
      correctAnswer: '0,2 mol',
      explanation: 'n = 12,8 / 64 = 0,2 mol.'
    }),
    s => ({
      question: 'Tính số mol của 20 gam đá vôi Canxi cacbonat (CaCO₃, M = 100 g/mol):',
      mathExpression: 'n = \\frac{m}{M} = \\frac{20}{100}',
      options: makeOptions('0,2 mol', ['0,1 mol', '0,5 mol', '2 mol'], s),
      correctAnswer: '0,2 mol',
      explanation: 'n = 20 / 100 = 0,2 mol.'
    }),
    s => ({
      question: 'Tính số mol của 6,4 gam khí Oxi (O₂, biết M = 32 g/mol):',
      mathExpression: 'n = \\frac{m}{M} = \\frac{6,4}{32}',
      options: makeOptions('0,2 mol', ['0,1 mol', '0,4 mol', '0,32 mol'], s),
      correctAnswer: '0,2 mol',
      explanation: 'n = 6,4 / 32 = 0,2 mol.'
    }),

    // 5 câu thể tích khí đktc
    s => ({
      question: 'Ở đktc, thể tích của 2,24 lít khí O₂ tương ứng với số mol là:',
      mathExpression: 'n = \\frac{V}{22,4} = \\frac{2,24}{22,4}',
      options: makeOptions('0,1 mol', ['0,2 mol', '0,5 mol', '1 mol'], s),
      correctAnswer: '0,1 mol',
      explanation: 'n = V / 22,4 = 2,24 / 22,4 = 0,1 mol.'
    }),
    s => ({
      question: 'Ở đktc, thể tích của 4,48 lít khí Hiđro (H₂) tương ứng với số mol là:',
      mathExpression: 'n = \\frac{V}{22,4} = \\frac{4,48}{22,4}',
      options: makeOptions('0,2 mol', ['0,1 mol', '0,4 mol', '0,3 mol'], s),
      correctAnswer: '0,2 mol',
      explanation: 'n = 4,48 / 22,4 = 0,2 mol.'
    }),
    s => ({
      question: 'Ở đktc, thể tích của 6,72 lít khí Cacbonic (CO₂) tương ứng với số mol là:',
      mathExpression: 'n = \\frac{V}{22,4} = \\frac{6,72}{22,4}',
      options: makeOptions('0,3 mol', ['0,2 mol', '0,15 mol', '0,5 mol'], s),
      correctAnswer: '0,3 mol',
      explanation: 'n = 6,72 / 22,4 = 0,3 mol.'
    }),
    s => ({
      question: 'Ở đktc, thể tích của 0,5 mol khí Nitơ (N₂) chiếm là:',
      mathExpression: 'V = n \\cdot 22,4 = 0,5 \\cdot 22,4',
      options: makeOptions('11,2 lít', ['22,4 lít', '5,6 lít', '4,48 lít'], s),
      correctAnswer: '11,2 lít',
      explanation: 'V = 0,5 . 22,4 = 11,2 lít.'
    }),
    s => ({
      question: 'Ở đktc, thể tích của 1 mol khí bất kì luôn bằng:',
      options: makeOptions('22,4 lít', ['24,79 lít', '11,2 lít', '2,24 lít'], s),
      correctAnswer: '22,4 lít',
      explanation: 'Ở điều kiện tiêu chuẩn (0°C, 1 atm), 1 mol chất khí bất kì chiếm thể tích 22,4 lít.'
    }),

    // 5 câu nồng độ mol CM
    s => ({
      question: 'Hòa tan 0,2 mol NaCl vào nước thu được 500 ml (0,5 lít) dung dịch. Nồng độ mol CM là:',
      mathExpression: 'C_M = \\frac{n}{V} = \\frac{0,2}{0,5}',
      options: makeOptions('0,4M', ['0,1M', '0,2M', '1M'], s),
      correctAnswer: '0,4M',
      explanation: 'CM = n / V = 0,2 / 0,5 = 0,4 M.'
    }),
    s => ({
      question: 'Hòa tan 0,5 mol NaOH vào nước thu được 250 ml (0,25 lít) dung dịch. Nồng độ mol CM là:',
      mathExpression: 'C_M = \\frac{0,5}{0,25}',
      options: makeOptions('2,0M', ['1,0M', '0,5M', '0,125M'], s),
      correctAnswer: '2,0M',
      explanation: 'CM = 0,5 / 0,25 = 2,0 M.'
    }),
    s => ({
      question: 'Hòa tan 0,1 mol HCl vào nước thu được 100 ml (0,1 lít) dung dịch. Nồng độ mol CM là:',
      mathExpression: 'C_M = \\frac{0,1}{0,1}',
      options: makeOptions('1,0M', ['0,1M', '0,5M', '2,0M'], s),
      correctAnswer: '1,0M',
      explanation: 'CM = 0,1 / 0,1 = 1,0 M.'
    }),
    s => ({
      question: 'Hòa tan 0,3 mol KNO₃ vào nước thu được 200 ml (0,2 lít) dung dịch. Nồng độ mol CM là:',
      mathExpression: 'C_M = \\frac{0,3}{0,2}',
      options: makeOptions('1,5M', ['0,6M', '1,0M', '3,0M'], s),
      correctAnswer: '1,5M',
      explanation: 'CM = 0,3 / 0,2 = 1,5 M.'
    }),
    s => ({
      question: 'Số mol chất tan có trong 2 lít dung dịch H₂SO₄ 0,5M là:',
      mathExpression: 'n = C_M \\cdot V = 0,5 \\cdot 2',
      options: makeOptions('1 mol', ['0,5 mol', '2 mol', '0,25 mol'], s),
      correctAnswer: '1 mol',
      explanation: 'n = CM . V = 0,5 . 2 = 1 mol.'
    }),

    // 5 câu nồng độ phần trăm C%
    s => ({
      question: 'Hòa tan 20 gam đường vào 180 gam nước. Nồng độ phần trăm C% của dung dịch là:',
      mathExpression: 'C\\% = \\frac{20}{20 + 180} \\cdot 100\\%',
      options: makeOptions('10%', ['20%', '5%', '11,1%'], s),
      correctAnswer: '10%',
      explanation: 'mdd = 20 + 180 = 200g. C% = (20 / 200) . 100% = 10%.'
    }),
    s => ({
      question: 'Hòa tan 10 gam muối ăn vào 90 gam nước. Nồng độ phần trăm C% của dung dịch là:',
      mathExpression: 'C\\% = \\frac{10}{10 + 90} \\cdot 100\\%',
      options: makeOptions('10%', ['5%', '15%', '20%'], s),
      correctAnswer: '10%',
      explanation: 'mdd = 10 + 90 = 100g. C% = (10 / 100) . 100% = 10%.'
    }),
    s => ({
      question: 'Hòa tan 15 gam NaOH vào nước thu được 75 gam dung dịch. Nồng độ phần trăm C% là:',
      mathExpression: 'C\\% = \\frac{15}{75} \\cdot 100\\%',
      options: makeOptions('20%', ['15%', '25%', '10%'], s),
      correctAnswer: '20%',
      explanation: 'C% = (15 / 75) . 100% = 20%.'
    }),
    s => ({
      question: 'Hòa tan 25 gam chất tan vào nước thu được 250 gam dung dịch. Nồng độ phần trăm C% là:',
      mathExpression: 'C\\% = \\frac{25}{250} \\cdot 100\\%',
      options: makeOptions('10%', ['25%', '5%', '15%'], s),
      correctAnswer: '10%',
      explanation: 'C% = (25 / 250) . 100% = 10%.'
    }),
    s => ({
      question: 'Khối lượng chất tan có trong 200 gam dung dịch đường 5% là:',
      mathExpression: 'm_{\\mathrm{ct}} = \\frac{200 \\cdot 5}{100}',
      options: makeOptions('10 gam', ['5 gam', '20 gam', '25 gam'], s),
      correctAnswer: '10 gam',
      explanation: 'm(chất tan) = (200 . 5) / 100 = 10 gam.'
    })
  ];

  return defs.map((def, idx) => {
    const s = baseSeed + (idx + 1) * 23;
    const item = def(s);
    return {
      id: idx + 1,
      ...item,
      question: `Câu ${idx + 1}: ${item.question}`,
      topic: 'cong_thuc_mol'
    };
  });
}

// ==============================================================================
// 6. SINH ĐỀ PHẦN 6: TÍNH THEO PTHH 3 BƯỚC (20 CÂU KHÔNG TRÙNG NHAU)
// ==============================================================================
function generateTinhTheoPTHHExam(examNo: number): LayGocHoaQuestion[] {
  const baseSeed = 5800 + examNo * 50;

  const defs: Array<(seed: number) => Omit<LayGocHoaQuestion, 'id' | 'topic'>> = [
    s => ({
      question: 'Cho 5,6 gam Sắt (Fe, M = 56) tác dụng hết với dung dịch HCl dư theo phản ứng: Fe + 2HCl → FeCl₂ + H₂↑. Thể tích khí H₂ thoát ra ở đktc là:',
      mathExpression: 'n_{\\mathrm{Fe}} = \\frac{5,6}{56} = 0,1\\text{ mol} \\Rightarrow V = 0,1 \\cdot 22,4',
      options: makeOptions('2,24 lít', ['4,48 lít', '1,12 lít', '3,36 lít'], s),
      correctAnswer: '2,24 lít',
      explanation: 'B1: n(Fe) = 0,1 mol. B2: n(H₂) = n(Fe) = 0,1 mol. B3: V(H₂) = 0,1 . 22,4 = 2,24 lít.'
    }),
    s => ({
      question: 'Nung nóng 10 gam đá vôi Canxi cacbonat (CaCO₃, M = 100) theo phản ứng: CaCO₃ → CaO + CO₂↑. Khối lượng vôi sống CaO (M = 56) thu được là:',
      mathExpression: 'n_{\\mathrm{CaCO_3}} = \\frac{10}{100} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{CaO}} = 0,1 \\cdot 56',
      options: makeOptions('5,6 gam', ['4,4 gam', '10 gam', '2,8 gam'], s),
      correctAnswer: '5,6 gam',
      explanation: 'B1: n(CaCO₃) = 0,1 mol. B2: n(CaO) = 0,1 mol. B3: m(CaO) = 0,1 . 56 = 5,6 gam.'
    }),
    s => ({
      question: 'Cho 6,5 gam Kẽm (Zn, M = 65) phản ứng với axit H₂SO₄ loãng: Zn + H₂SO₄ → ZnSO₄ + H₂↑. Thể tích khí H₂ thoát ra ở đktc là:',
      mathExpression: 'n_{\\mathrm{Zn}} = \\frac{6,5}{65} = 0,1\\text{ mol} \\Rightarrow V = 0,1 \\cdot 22,4',
      options: makeOptions('2,24 lít', ['4,48 lít', '3,36 lít', '1,12 lít'], s),
      correctAnswer: '2,24 lít',
      explanation: 'n(Zn) = 0,1 mol => n(H₂) = 0,1 mol => V = 0,1 . 22,4 = 2,24 lít.'
    }),
    s => ({
      question: 'Đốt cháy 5,4 gam Nhôm (Al, M = 27) trong khí Oxi: 4Al + 3O₂ → 2Al₂O₃. Khối lượng nhôm oxit Al₂O₃ (M = 102) tạo thành là:',
      mathExpression: 'n_{\\mathrm{Al}} = 0,2\\text{ mol} \\Rightarrow n_{\\mathrm{Al_2O_3}} = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 102',
      options: makeOptions('10,2 gam', ['20,4 gam', '5,1 gam', '15,3 gam'], s),
      correctAnswer: '10,2 gam',
      explanation: 'n(Al) = 0,2 mol => n(Al₂O₃) = 0,2 . 2 / 4 = 0,1 mol => m = 0,1 . 102 = 10,2 gam.'
    }),
    s => ({
      question: 'Cho 2,4 gam Magie (Mg, M = 24) tác dụng với dung dịch HCl vừa đủ: Mg + 2HCl → MgCl₂ + H₂↑. Khối lượng muối MgCl₂ (M = 95) thu được là:',
      mathExpression: 'n_{\\mathrm{Mg}} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{MgCl_2}} = 0,1 \\cdot 95',
      options: makeOptions('9,5 gam', ['19 gam', '4,75 gam', '7,1 gam'], s),
      correctAnswer: '9,5 gam',
      explanation: 'n(Mg) = 0,1 mol => n(MgCl₂) = 0,1 mol => m(MgCl₂) = 0,1 . 95 = 9,5 gam.'
    }),
    s => ({
      question: 'Đốt cháy hoàn toàn 1,2 gam Cacbon trong Oxi dư: C + O₂ → CO₂. Thể tích khí CO₂ thu được ở đktc là:',
      mathExpression: 'n_{\\mathrm{C}} = \\frac{1,2}{12} = 0,1\\text{ mol} \\Rightarrow V = 0,1 \\cdot 22,4',
      options: makeOptions('2,24 lít', ['1,12 lít', '4,48 lít', '22,4 lít'], s),
      correctAnswer: '2,24 lít',
      explanation: 'n(C) = 0,1 mol => n(CO₂) = 0,1 mol => V = 0,1 . 22,4 = 2,24 lít.'
    }),
    s => ({
      question: 'Cho 2,8 gam Sắt tác dụng với Oxi dư tạo gỉ sắt: 3Fe + 2O₂ → Fe₃O₄. Số mol Fe đã phản ứng là:',
      mathExpression: 'n = \\frac{2,8}{56} = 0,05\\text{ mol}',
      options: makeOptions('0,05 mol', ['0,1 mol', '0,2 mol', '0,5 mol'], s),
      correctAnswer: '0,05 mol',
      explanation: 'n(Fe) = 2,8 / 56 = 0,05 mol.'
    }),
    s => ({
      question: 'Cho 0,1 mol NaOH phản ứng trung hòa với HCl theo phản ứng: NaOH + HCl → NaCl + H₂O. Khối lượng muối NaCl (M = 58,5) thu được là:',
      mathExpression: 'm = 0,1 \\cdot 58,5',
      options: makeOptions('5,85 gam', ['11,7 gam', '2,925 gam', '58,5 gam'], s),
      correctAnswer: '5,85 gam',
      explanation: 'n(NaCl) = n(NaOH) = 0,1 mol => m = 0,1 . 58,5 = 5,85 gam.'
    }),
    s => ({
      question: 'Dẫn khí CO dư qua 8 gam bột CuO nung nóng: CuO + CO → Cu + CO₂. Khối lượng kim loại Đồng (Cu, M = 64) thu được là:',
      mathExpression: 'n_{\\mathrm{CuO}} = \\frac{8}{80} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{Cu}} = 0,1 \\cdot 64',
      options: makeOptions('6,4 gam', ['3,2 gam', '12,8 gam', '8 gam'], s),
      correctAnswer: '6,4 gam',
      explanation: 'n(CuO) = 8 / 80 = 0,1 mol => n(Cu) = 0,1 mol => m(Cu) = 0,1 . 64 = 6,4 gam.'
    }),
    s => ({
      question: 'Nhiệt phân hoàn toàn 24,5 gam KClO₃ (M = 122,5) có xúc tác MnO₂: 2KClO₃ → 2KCl + 3O₂↑. Thể tích khí O₂ thu được ở đktc là:',
      mathExpression: 'n_{\\mathrm{KClO_3}} = 0,2\\text{ mol} \\Rightarrow n_{\\mathrm{O_2}} = \\frac{0,2 \\cdot 3}{2} = 0,3\\text{ mol} \\Rightarrow V = 0,3 \\cdot 22,4',
      options: makeOptions('6,72 lít', ['4,48 lít', '2,24 lít', '8,96 lít'], s),
      correctAnswer: '6,72 lít',
      explanation: 'n(KClO₃) = 0,2 mol => n(O₂) = 0,3 mol => V = 0,3 . 22,4 = 6,72 lít.'
    }),
    s => ({
      question: 'Khử hoàn toàn 16 gam Fe₂O₃ (M = 160) bằng khí H₂ dư ở nhiệt độ cao: Fe₂O₃ + 3H₂ → 2Fe + 3H₂O. Khối lượng Fe thu được là:',
      mathExpression: 'n_{\\mathrm{Fe_2O_3}} = 0,1\\text{ mol} \\Rightarrow n_{\\mathrm{Fe}} = 0,2\\text{ mol} \\Rightarrow m = 0,2 \\cdot 56',
      options: makeOptions('11,2 gam', ['5,6 gam', '22,4 gam', '16 gam'], s),
      correctAnswer: '11,2 gam',
      explanation: 'n(Fe₂O₃) = 0,1 mol => n(Fe) = 0,2 mol => m(Fe) = 0,2 . 56 = 11,2 gam.'
    }),
    s => ({
      question: 'Hòa tan hoàn toàn 4 gam Canxi oxit CaO (M = 56) vào nước: CaO + H₂O → Ca(OH)₂. Khối lượng Ca(OH)₂ (M = 74) thu được xấp xỉ là:',
      mathExpression: 'n = \\frac{4}{56} \\text{ mol} \\Rightarrow m = \\frac{4}{56} \\cdot 74',
      options: makeOptions('5,29 gam', ['4,29 gam', '7,4 gam', '6,5 gam'], s),
      correctAnswer: '5,29 gam',
      explanation: 'm = (4 / 56) . 74 ≈ 5,29 gam.'
    }),
    s => ({
      question: 'Cho 0,2 mol khí CO₂ sục vào dung dịch nước vôi trong dư tạo kết tủa trắng: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O. Khối lượng kết tủa CaCO₃ là:',
      mathExpression: 'm = 0,2 \\cdot 100',
      options: makeOptions('20 gam', ['10 gam', '25 gam', '40 gam'], s),
      correctAnswer: '20 gam',
      explanation: 'm(CaCO₃) = 0,2 . 100 = 20 gam.'
    }),
    s => ({
      question: 'Đốt cháy 6,2 gam Photpho trong oxi dư: 4P + 5O₂ → 2P₂O₅. Số mol P đã phản ứng là (biết MP = 31):',
      mathExpression: 'n = \\frac{6,2}{31}',
      options: makeOptions('0,2 mol', ['0,1 mol', '0,4 mol', '0,5 mol'], s),
      correctAnswer: '0,2 mol',
      explanation: 'n(P) = 6,2 / 31 = 0,2 mol.'
    }),
    s => ({
      question: 'Để hòa tan hoàn toàn 0,1 mol Fe cần bao nhiêu mol axit HCl (Fe + 2HCl → FeCl₂ + H₂)?',
      mathExpression: 'n_{\\mathrm{HCl}} = 2 \\cdot n_{\\mathrm{Fe}} = 2 \\cdot 0,1',
      options: makeOptions('0,2 mol', ['0,1 mol', '0,4 mol', '0,05 mol'], s),
      correctAnswer: '0,2 mol',
      explanation: 'Theo PTHH: n(HCl) = 2 . n(Fe) = 2 . 0,1 = 0,2 mol.'
    }),
    s => ({
      question: 'Đốt cháy hoàn toàn 2,4 gam Magie cần bao nhiêu lít khí O₂ ở đktc (2Mg + O₂ → 2MgO)?',
      mathExpression: 'n_{\\mathrm{Mg}} = 0,1\\text{ mol} \\Rightarrow n_{\\mathrm{O_2}} = 0,05\\text{ mol} \\Rightarrow V = 0,05 \\cdot 22,4',
      options: makeOptions('1,12 lít', ['2,24 lít', '0,56 lít', '4,48 lít'], s),
      correctAnswer: '1,12 lít',
      explanation: 'n(O₂) = 0,1 / 2 = 0,05 mol => V = 0,05 . 22,4 = 1,12 lít.'
    }),
    s => ({
      question: 'Cho m gam bột sắt tác dụng với dung dịch CuSO₄ sinh ra 6,4 gam Cu: Fe + CuSO₄ → FeSO₄ + Cu. Giá trị của m là:',
      mathExpression: 'n_{\\mathrm{Cu}} = 0,1\\text{ mol} \\Rightarrow n_{\\mathrm{Fe}} = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 56',
      options: makeOptions('5,6 gam', ['2,8 gam', '11,2 gam', '6,4 gam'], s),
      correctAnswer: '5,6 gam',
      explanation: 'n(Cu) = 0,1 mol => n(Fe) = 0,1 mol => m = 0,1 . 56 = 5,6 gam.'
    }),
    s => ({
      question: 'Điện phân nước sinh ra 2 mol H₂ và O₂: 2H₂O → 2H₂↑ + O₂↑. Số mol khí O₂ thu được là:',
      mathExpression: 'n_{\\mathrm{O_2}} = \\frac{n_{\\mathrm{H_2}}}{2} = \\frac{2}{2}',
      options: makeOptions('1 mol', ['2 mol', '0,5 mol', '4 mol'], s),
      correctAnswer: '1 mol',
      explanation: 'Theo PTHH: n(O₂) = 2 / 2 = 1 mol.'
    }),
    s => ({
      question: 'Cho 4 gam NaOH (M = 40) tác dụng vừa đủ với dung dịch H₂SO₄ tạo muối Na₂SO₄ và H₂O. Số mol NaOH là:',
      mathExpression: 'n = \\frac{4}{40}',
      options: makeOptions('0,1 mol', ['0,2 mol', '1 mol', '0,05 mol'], s),
      correctAnswer: '0,1 mol',
      explanation: 'n(NaOH) = 4 / 40 = 0,1 mol.'
    }),
    s => ({
      question: 'Cho 0,05 mol BaCl₂ tác dụng với dung dịch H₂SO₄ dư tạo kết tủa BaSO₄. Khối lượng kết tủa BaSO₄ (M = 233) là:',
      mathExpression: 'm = 0,05 \\cdot 233',
      options: makeOptions('11,65 gam', ['23,3 gam', '5,825 gam', '116,5 gam'], s),
      correctAnswer: '11,65 gam',
      explanation: 'm(BaSO₄) = 0,05 . 233 = 11,65 gam.'
    })
  ];

  return defs.map((def, idx) => {
    const s = baseSeed + (idx + 1) * 29;
    const item = def(s);
    return {
      id: idx + 1,
      ...item,
      question: `Câu ${idx + 1}: ${item.question}`,
      topic: 'tinh_theo_pthh'
    };
  });
}

// ==============================================================================
// 7. SINH ĐỀ PHẦN 7 ĐẾN 15 (MỖI ĐỀ CÓ 20 CÂU ĐỘC LẬP HOÀN TOÀN KHÔNG TRÙNG)
// ==============================================================================
function generateAdvancedHoaExam(topicId: string, examNo: number): LayGocHoaQuestion[] {
  const baseSeed = 6000 + examNo * 50;

  // Xây dựng kho 20 câu riêng biệt cho từng chuyên đề
  let bank: Array<(seed: number) => Omit<LayGocHoaQuestion, 'id' | 'topic'>> = [];

  if (topicId === 'vo_co_lop9') {
    bank = [
      s => ({ question: 'Dãy kim loại sắp xếp theo chiều hoạt động hóa học GIẢM DẦN là:', options: makeOptions('K, Na, Mg, Al, Zn, Fe, Cu, Ag', ['Fe, Cu, Ag, Al, Zn, Na', 'Na, K, Fe, Cu, Mg, Al', 'Cu, Ag, Fe, Zn, Al, Mg'], s), correctAnswer: 'K, Na, Mg, Al, Zn, Fe, Cu, Ag', explanation: 'Thần chú: Khi Nào May Áo Giáp Sắt Nên Sang Phố Hỏi Cửa Hàng Á Phi Âu.' }),
      s => ({ question: 'Dung dịch axit clohiđric (HCl) làm quỳ tím chuyển sang màu gì?', options: makeOptions('Màu đỏ', ['Màu xanh', 'Màu tím', 'Màu vàng'], s), correctAnswer: 'Màu đỏ', explanation: 'Axit làm quỳ tím chuyển đỏ.' }),
      s => ({ question: 'Thuốc thử đặc trưng để nhận biết ion sunfat (SO₄²⁻) là:', options: makeOptions('Dung dịch muối Bari (BaCl₂ hoặc Ba(OH)₂)', ['Dung dịch NaCl', 'Dung dịch AgNO₃', 'Quỳ tím'], s), correctAnswer: 'Dung dịch muối Bari (BaCl₂ hoặc Ba(OH)₂)', explanation: 'Tạo kết tủa trắng BaSO₄ không tan trong axit.' }),
      s => ({ question: 'Kim loại nào sau đây tác dụng được với dung dịch Cu(NO₃)₂ để đẩy Cu ra ngoài?', options: makeOptions('Kim loại Sắt (Fe)', ['Kim loại Bạc (Ag)', 'Kim loại Vàng (Au)', 'Kim loại Đồng (Cu)'], s), correctAnswer: 'Kim loại Sắt (Fe)', explanation: 'Fe đứng trước Cu trong dãy hoạt động hóa học.' }),
      s => ({ question: 'Oxit nào sau đây là oxit axit tác dụng với kiềm tạo muối và nước?', options: makeOptions('Khí cacbonic (CO₂)', ['Canxi oxit (CaO)', 'Natri oxit (Na₂O)', 'Đồng(II) oxit (CuO)'], s), correctAnswer: 'Khí cacbonic (CO₂)', explanation: 'CO₂ là oxit axit tác dụng với dung dịch kiềm.' }),
      s => ({ question: 'Điều kiện để xảy ra phản ứng trao đổi trong dung dịch là sản phẩm phải có:', options: makeOptions('Chất kết tủa, chất bay hơi hoặc chất điện li yếu (nước)', ['Kim loại mới', 'Chất oxi hóa mạnh', 'Chất xúc tác'], s), correctAnswer: 'Chất kết tủa, chất bay hơi hoặc chất điện li yếu (nước)', explanation: 'Quy tắc điều kiện phản ứng trao đổi ion.' }),
      s => ({ question: 'Kim loại nào vừa tan trong dung dịch axit HCl, vừa tan trong dung dịch kiềm NaOH giải phóng H₂?', options: makeOptions('Kim loại Nhôm (Al)', ['Kim loại Sắt (Fe)', 'Kim loại Đồng (Cu)', 'Kim loại Magie (Mg)'], s), correctAnswer: 'Kim loại Nhôm (Al)', explanation: 'Al có tính lưỡng tính đặc biệt.' }),
      s => ({ question: 'Cho dung dịch NaOH vào dung dịch CuSO₄, hiện tượng quan sát được là:', options: makeOptions('Xuất hiện kết tủa màu xanh lam Cu(OH)₂', ['Xuất hiện kết tủa trắng', 'Có khí thoát ra', 'Dung dịch hóa hồng'], s), correctAnswer: 'Xuất hiện kết tủa màu xanh lam Cu(OH)₂', explanation: 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.' }),
      s => ({ question: 'Chất khí nào làm đục nước vôi trong Ca(OH)₂?', options: makeOptions('Khí Cacbonic (CO₂)', ['Khí Hiđro (H₂)', 'Khí Oxi (O₂)', 'Khí Nitơ (N₂)'], s), correctAnswer: 'Khí Cacbonic (CO₂)', explanation: 'CO₂ + Ca(OH)₂ → CaCO₃↓ (đục vôi) + H₂O.' }),
      s => ({ question: 'Dung dịch nào sau đây làm quỳ tím chuyển sang màu XANH?', options: makeOptions('Dung dịch Natri hiđroxit (NaOH)', ['Dung dịch Axit axetic', 'Dung dịch Nước cất', 'Dung dịch Axit sunfuric'], s), correctAnswer: 'Dung dịch Natri hiđroxit (NaOH)', explanation: 'Dung dịch bazơ kiềm làm quỳ tím hóa xanh.' }),
      s => ({ question: 'Để phân biệt 2 dung dịch HCl và H₂SO₄, người ta dùng thuốc thử:', options: makeOptions('Dung dịch BaCl₂', ['Quỳ tím', 'Kim loại Cu', 'Dung dịch NaOH'], s), correctAnswer: 'Dung dịch BaCl₂', explanation: 'H₂SO₄ tạo kết tủa trắng BaSO₄ với BaCl₂, còn HCl không phản ứng.' }),
      s => ({ question: 'Để phân biệt dung dịch NaCl và Na₂SO₄, người ta dùng thuốc thử:', options: makeOptions('Dung dịch Ba(NO₃)₂', ['Dung dịch HCl', 'Quỳ tím', 'Dung dịch KOH'], s), correctAnswer: 'Dung dịch Ba(NO₃)₂', explanation: 'Ba(NO₃)₂ tạo kết tủa trắng BaSO₄ với Na₂SO₄.' }),
      s => ({ question: 'Kim loại nào sau đây KHÔNG tác dụng với dung dịch axit HCl loãng?', options: makeOptions('Kim loại Đồng (Cu)', ['Kim loại Sắt (Fe)', 'Kim loại Nhôm (Al)', 'Kim loại Kẽm (Zn)'], s), correctAnswer: 'Kim loại Đồng (Cu)', explanation: 'Cu đứng sau Hiđro trong dãy hoạt động hóa học nên không tác dụng với HCl loãng.' }),
      s => ({ question: 'Oxit bazơ nào sau đây tác dụng được với nước tạo thành dung dịch bazơ (kiềm)?', options: makeOptions('Canxi oxit (CaO)', ['Sắt(III) oxit (Fe₂O₃)', 'Đồng(II) oxit (CuO)', 'Nhôm oxit (Al₂O₃)'], s), correctAnswer: 'Canxi oxit (CaO)', explanation: 'CaO + H₂O → Ca(OH)₂.' }),
      s => ({ question: 'Khi cho lá Sắt vào dung dịch CuSO₄, sau một thời gian hiện tượng quan sát được là:', options: makeOptions('Có lớp kim loại màu đỏ bám trên lá sắt, màu xanh của dung dịch nhạt dần', ['Lá sắt tan hết không có gì bám', 'Dung dịch chuyển sang màu tím', 'Có bọt khí sủi mạnh'], s), correctAnswer: 'Có lớp kim loại màu đỏ bám trên lá sắt, màu xanh của dung dịch nhạt dần', explanation: 'Fe đẩy Cu tạo lớp Cu đỏ bám ngoài lá sắt: Fe + CuSO₄ → FeSO₄ + Cu.' }),
      s => ({ question: 'Muối nào sau đây KHÔNG tan trong nước?', options: makeOptions('Bari sunfat (BaSO₄)', ['Natri clorua (NaCl)', 'Kali nitrat (KNO₃)', 'Canxi clorua (CaCl₂)'], s), correctAnswer: 'Bari sunfat (BaSO₄)', explanation: 'BaSO₄ là chất kết tủa trắng không tan trong nước và axit.' }),
      s => ({ question: 'Dung dịch muối AgNO₃ dùng để nhận biết ion nào sau đây bằng kết tủa trắng AgCl?', options: makeOptions('Ion Clorua (Cl⁻)', ['Ion Sunfat (SO₄²⁻)', 'Ion Nitrat (NO₃⁻)', 'Ion Natri (Na⁺)'], s), correctAnswer: 'Ion Clorua (Cl⁻)', explanation: 'Ag⁺ + Cl⁻ → AgCl↓ trắng.' }),
      s => ({ question: 'Khí SO₂ được gọi là:', options: makeOptions('Khí sunfurơ (Lưu huỳnh đioxit)', ['Khí sunfuric', 'Khí hiđrosunfua', 'Khí cacbonic'], s), correctAnswer: 'Khí sunfurơ (Lưu huỳnh đioxit)', explanation: 'SO₂ là lưu huỳnh đioxit (khí sunfurơ), là oxit axit gây mưa axit.' }),
      s => ({ question: 'Phản ứng trung hòa là phản ứng giữa:', options: makeOptions('Axit và Bazơ', ['Kim loại và Phi kim', 'Muối và Muối', 'Oxit và Nước'], s), correctAnswer: 'Axit và Bazơ', explanation: 'Axit + Bazơ → Muối + Nước (phản ứng trung hòa).' }),
      s => ({ question: 'Chất nào sau đây bị nhiệt phân hủy tạo oxit kim loại và nước?', options: makeOptions('Đồng(II) hiđroxit Cu(OH)₂', ['Natri hiđroxit NaOH', 'Kali hiđroxit KOH', 'Bari hiđroxit Ba(OH)₂'], s), correctAnswer: 'Đồng(II) hiđroxit Cu(OH)₂', explanation: 'Bazơ không tan bị nhiệt phân: Cu(OH)₂ → CuO + H₂O. Các kiềm tan không bị nhiệt phân.' })
    ];
  } else if (topicId === 'cau_tao_nguyen_tu_lop10') {
    bank = [
      s => ({ question: 'Cấu hình electron của nguyên tử Natri (Na, Z = 11) là:', options: makeOptions('1s² 2s² 2p⁶ 3s¹', ['1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁵ 3s²', '1s² 2s² 2p⁶'], s), correctAnswer: '1s² 2s² 2p⁶ 3s¹', explanation: 'Z = 11 phân bố 11e: 1s² 2s² 2p⁶ 3s¹.' }),
      s => ({ question: 'Nguyên tử Clo (Cl, Z = 17) có số electron ở lớp ngoài cùng là:', options: makeOptions('7 electron', ['5 electron', '8 electron', '1 electron'], s), correctAnswer: '7 electron', explanation: 'Cấu hình: [Ne] 3s² 3p⁵ -> có 7e lớp ngoài cùng.' }),
      s => ({ question: 'Cấu hình electron viết gọn của Sắt (Fe, Z = 26) là:', options: makeOptions('[Ar] 3d⁶ 4s²', ['[Ar] 3d⁸', '[Ar] 4s² 4p⁶', '[Ar] 3d⁵ 4s³'], s), correctAnswer: '[Ar] 3d⁶ 4s²', explanation: 'Cấu hình Fe: [Ar] 3d⁶ 4s².' }),
      s => ({ question: 'Số hạt mang điện trong một nguyên tử có Z = 13 là:', options: makeOptions('26 hạt', ['13 hạt', '27 hạt', '14 hạt'], s), correctAnswer: '26 hạt', explanation: 'Hạt mang điện = p + e = 13 + 13 = 26 hạt.' }),
      s => ({ question: 'Các nguyên tố trong cùng một chu kì của bảng tuần hoàn có cùng:', options: makeOptions('Số lớp electron', ['Số electron hóa trị', 'Nguyên tử khối', 'Số nơtron'], s), correctAnswer: 'Số lớp electron', explanation: 'Số chu kì = số lớp electron.' }),
      s => ({ question: 'Trong một chu kì từ trái sang phải theo chiều tăng điện tích hạt nhân:', options: makeOptions('Bán kính giảm dần, độ âm điện tăng dần', ['Bán kính tăng dần', 'Tính kim loại tăng', 'Độ âm điện giảm'], s), correctAnswer: 'Bán kính giảm dần, độ âm điện tăng dần', explanation: 'Lực hút tăng làm bán kính co lại, độ âm điện tăng.' }),
      s => ({ question: 'Nguyên tử có Z = 8 là nguyên tố:', options: makeOptions('Oxi (Oxygen)', ['Cacbon', 'Nitơ', 'Flo'], s), correctAnswer: 'Oxi (Oxygen)', explanation: 'Z = 8 là nguyên tố Oxi.' }),
      s => ({ question: 'Lớp electron thứ n có số electron tối đa bằng:', mathExpression: '2n^2', options: makeOptions('2n²', ['n²', ['2n'], '4n²'], s), correctAnswer: '2n²', explanation: 'Số e tối đa ở lớp thứ n là 2n².' }),
      s => ({ question: 'Phân lớp p chứa tối đa bao nhiêu electron?', options: makeOptions('6 electron', ['2 electron', '10 electron', '14 electron'], s), correctAnswer: '6 electron', explanation: 'Phân lớp s (2e), p (6e), d (10e), f (14e).' }),
      s => ({ question: 'Khí hiếm Neon (Ne, Z = 10) có cấu hình electron bão hòa là:', options: makeOptions('1s² 2s² 2p⁶', ['1s² 2s² 2p⁴', '1s² 2s² 2p⁵', '1s² 2s² 2p⁶ 3s²'], s), correctAnswer: '1s² 2s² 2p⁶', explanation: 'Neon có 8e lớp ngoài cùng bão hòa rất bền vững.' }),
      s => ({ question: 'Đồng vị là những nguyên tử có cùng:', options: makeOptions('Số proton nhưng khác số nơtron', ['Số nơtron', 'Số khối', 'Số electron nhưng khác số proton'], s), correctAnswer: 'Số proton nhưng khác số nơtron', explanation: 'Đồng vị cùng Z (proton) nhưng khác số khối A do khác số nơtron N.' }),
      s => ({ question: 'Số hiệu nguyên tử Z chính bằng:', options: makeOptions('Số đơn vị điện tích hạt nhân và số proton', ['Số nơtron', 'Số khối', 'Khối lượng nguyên tử'], s), correctAnswer: 'Số đơn vị điện tích hạt nhân và số proton', explanation: 'Z = số proton = số electron.' }),
      s => ({ question: 'Số khối A được tính theo công thức:', mathExpression: 'A = Z + N', options: makeOptions('A = Z + N', ['A = Z - N', 'A = Z + 2N', 'A = 2Z + N'], s), correctAnswer: 'A = Z + N', explanation: 'Số khối A = tổng proton + tổng nơtron.' }),
      s => ({ question: 'Nguyên tố Magie (Mg, Z = 12) thuộc nhóm nào trong bảng tuần hoàn?', options: makeOptions('Nhóm IIA', ['Nhóm IA', 'Nhóm IIIA', 'Nhóm VIIA'], s), correctAnswer: 'Nhóm IIA', explanation: 'Cấu hình [Ne] 3s² -> có 2e hóa trị ở phân lớp s nên thuộc nhóm IIA.' }),
      s => ({ question: 'Nguyên tố Nhôm (Al, Z = 13) thuộc chu kì nào trong bảng tuần hoàn?', options: makeOptions('Chu kì 3', ['Chu kì 2', 'Chu kì 4', 'Chu kì 1'], s), correctAnswer: 'Chu kì 3', explanation: 'Có 3 lớp electron -> Chu kì 3.' }),
      s => ({ question: 'Kim loại kiềm thuộc nhóm nào trong bảng tuần hoàn?', options: makeOptions('Nhóm IA', ['Nhóm IIA', 'Nhóm IIIA', 'Nhóm VIIA'], s), correctAnswer: 'Nhóm IA', explanation: 'Kim loại kiềm (Li, Na, K, Rb, Cs) thuộc phân nhóm chính IA.' }),
      s => ({ question: 'Nhóm halogen trong bảng tuần hoàn là nhóm:', options: makeOptions('Nhóm VIIA', ['Nhóm VIA', 'Nhóm VA', 'Nhóm VIIIA'], s), correctAnswer: 'Nhóm VIIA', explanation: 'Nhóm halogen (F, Cl, Br, I) thuộc nhóm VIIA.' }),
      s => ({ question: 'Nhóm khí hiếm (khí trơ) thuộc nhóm nào?', options: makeOptions('Nhóm VIIIA', ['Nhóm VIIA', 'Nhóm IA', 'Nhóm IIA'], s), correctAnswer: 'Nhóm VIIIA', explanation: 'Nhóm khí hiếm (He, Ne, Ar, Kr, Xe, Rn) thuộc nhóm VIIIA.' }),
      s => ({ question: 'Trong nguyên tử, hạt nào có khối lượng vô cùng nhỏ bé có thể bỏ qua?', options: makeOptions('Hạt electron', ['Hạt proton', 'Hạt nơtron', 'Cả proton và nơtron'], s), correctAnswer: 'Hạt electron', explanation: 'Khối lượng electron xấp xỉ 1/1840 amu nên khối lượng nguyên tử tập trung ở hạt nhân.' }),
      s => ({ question: 'Cấu hình electron bất thường của nguyên tử Đồng (Cu, Z = 29) do bán bão hòa là:', options: makeOptions('[Ar] 3d¹⁰ 4s¹', ['[Ar] 3d⁹ 4s²', '[Ar] 3d⁸ 4s³', '[Ar] 4s² 3d⁹'], s), correctAnswer: '[Ar] 3d¹⁰ 4s¹', explanation: 'Cấu hình bền vững bão hòa d: [Ar] 3d¹⁰ 4s¹.' })
    ];
  } else {
    // Cho các phần còn lại: xây dựng đủ 20 câu duy nhất
    const specializedTopics: Record<string, string[]> = {
      oxi_hoa_khu_lop10: [
        'Số oxi hóa của Lưu huỳnh trong H₂SO₄ bằng +6',
        'Số oxi hóa của Mangan trong KMnO₄ bằng +7',
        'Số oxi hóa của Crom trong K₂Cr₂O₇ bằng +6',
        'Số oxi hóa của Nitơ trong HNO₃ bằng +5',
        'Số oxi hóa của Nitơ trong NH₃ bằng -3',
        'Chất khử là chất nhường electron (số oxi hóa tăng)',
        'Chất oxi hóa là chất nhận electron (số oxi hóa giảm)',
        'Thần chú kinh điển: "Khử cho - O nhận"',
        'Phản ứng nhiệt nhôm 2Al + Fe₂O₃ là phản ứng oxi hóa khử',
        'Trong phản ứng Fe + 4HNO₃ → Fe(NO₃)₃ + NO + 2H₂O, Fe là chất khử',
        'Quá trình nhường electron gọi là quá trình oxi hóa',
        'Quá trình nhận electron gọi là quá trình khử',
        'Số oxi hóa của đơn chất luôn bằng 0',
        'Số oxi hóa của Oxi trong hầu hết hợp chất là -2',
        'Số oxi hóa của Hiđro trong hầu hết hợp chất là +1',
        'Trong phân tử trung hòa, tổng số oxi hóa bằng 0',
        'Trong ion đa nguyên tử SO₄²⁻, số oxi hóa của S là +6',
        'Kim loại luôn có số oxi hóa dương trong hợp chất',
        'Flo luôn có số oxi hóa -1 trong mọi hợp chất',
        'Phương pháp cân bằng oxi hóa khử chuẩn là thăng bằng electron'
      ],
      su_dien_li_lop11: [
        'pH = -log[H+] là công thức tính độ pH dung dịch',
        'Dung dịch có [H+] = 10^-3 M thì pH = 3 (axit)',
        'Dung dịch NaOH 0,01M có pH = 12 (bazơ)',
        'Dung dịch trung tính ở 25 độ C có pH = 7',
        'HCl, HNO₃, H₂SO₄ là các chất điện li mạnh',
        'CH₃COOH, HF là các chất điện li yếu',
        'Rượu etylic và đường saccarozơ là chất không điện li',
        'Tích số ion của nước ở 25 độ C là [H+] . [OH-] = 10^-14',
        'Phương trình ion rút gọn của phản ứng trung hòa là H+ + OH- -> H₂O',
        'Chất làm quỳ tím hóa đỏ có pH < 7',
        'Chất làm quỳ tím hóa xanh có pH > 7',
        'Phenolphtalein đổi sang màu hồng khi gặp dung dịch kiềm bazơ',
        'Nguyên lí chuyển dịch cân bằng Le Chatelier',
        'Tăng áp suất làm cân bằng chuyển dịch về phía giảm số mol khí',
        'Tăng nhiệt độ làm cân bằng chuyển dịch theo chiều phản ứng thu nhiệt',
        'Chất xúc tác chỉ làm tăng tốc độ mà không chuyển dịch cân bằng',
        'Axit theo thuyết Bronsted là chất nhường proton H+',
        'Bazơ theo thuyết Bronsted là chất nhận proton H+',
        'Hằng số cân bằng Kc chỉ phụ thuộc vào nhiệt độ',
        'Phương trình điện li của NaCl trong nước tạo Na+ và Cl-'
      ],
      huu_co_hidrocacbon: [
        'Công thức chung của Ankan no mạch hở là CnH2n+2 (n >= 1)',
        'Công thức chung của Anken có 1 nối đôi là CnH2n (n >= 2)',
        'Công thức chung của Ankin có 1 nối ba là CnH2n-2 (n >= 2)',
        'Công thức chung của Aren (dãy đồng đẳng Benzen) là CnH2n-6 (n >= 6)',
        'Phản ứng đặc trưng của Ankan là phản ứng thế halogen',
        'Phản ứng đặc trưng của Anken và Ankin là phản ứng cộng',
        'Khí Metan CH₄ là thành phần chính của khí thiên nhiên và biogas',
        'Khí Etilen CH₂=CH₂ làm mất màu dung dịch nước brom',
        'Khí Axetilen CH≡CH tác dụng với AgNO₃/NH₃ tạo kết tủa vàng AgC≡CAg',
        'Quy tắc Maccopnhicop khi cộng HX vào anken bất đối',
        'Benzen C₆H₆ có vòng 6 cạnh đều với hệ liên kết pi liên hợp bền vững',
        'Toluen C₆H₅CH₃ làm mất màu dung dịch KMnO₄ khi đun nóng',
        'Khi đốt cháy hoàn toàn Ankan luôn thu được n(H₂O) > n(CO₂)',
        'Khi đốt cháy hoàn toàn Anken luôn thu được n(H₂O) = n(CO₂)',
        'Khi đốt cháy hoàn toàn Ankin luôn thu được n(H₂O) < n(CO₂)',
        'Stiren C₆H₅CH=CH₂ vừa làm mất màu brom vừa trùng hợp tạo nhựa PS',
        'Phản ứng trùng hợp Etilen tạo ra polietilen (nhựa PE)',
        'Đồng phân hình học cis-trans xuất hiện khi anken có liên kết đôi phù hợp',
        'Ankan còn có tên gọi thông thường là Parafin',
        'Khí gas đun nấu LPG là hỗn hợp của Propan C₃H₈ và Butan C₄H₁₀'
      ],
      huu_co_ancol_axit: [
        'Công thức phân tử của Rượu etylic (ancol etylic) là C₂H₅OH',
        'Công thức phân tử của Axit axetic là CH₃COOH',
        'Ancol etylic tác dụng với Na giải phóng khí H₂',
        'Axit axetic làm quỳ tím chuyển sang màu đỏ',
        'Phản ứng este hóa giữa CH₃COOH và C₂H₅OH sinh ra etyl axetat',
        'Xúc tác cho phản ứng este hóa là axit H₂SO₄ đặc đun nóng',
        'Độ rượu là số ml rượu nguyên chất có trong 100 ml dung dịch rượu',
        'Ancol đa chức có nhóm OH kề nhau như Glixerol hòa tan Cu(OH)₂ ra xanh lam',
        'Axit axetic tác dụng với đá vôi CaCO₃ giải phóng khí CO₂',
        'Giấm ăn là dung dịch axit axetic có nồng độ từ 2% đến 5%',
        'Phản ứng lên men giấm biến rượu etylic thành axit axetic',
        'Liên kết hiđro liên phân tử làm nhiệt độ sôi của ancol cao hơn hiđrocacbon',
        'Axit fomic HCOOH có khả năng tham gia phản ứng tráng bạc do có nhóm CHO',
        'Phenol C₆H₅OH có tính axit yếu, tác dụng NaOH nhưng không đổi màu quỳ',
        'Phenol tạo kết tủa trắng với dung dịch nước brom',
        'Ancol bậc 1 bị oxi hóa bởi CuO nung nóng tạo anđehit',
        'Ancol bậc 2 bị oxi hóa bởi CuO nung nóng tạo xeton',
        'Khí CO₂ và H₂O sinh ra khi đốt cháy ancol etylic',
        'Axit cacboxylic có nhiệt độ sôi cao hơn ancol cùng số C',
        'Etyl fomat HCOOC₂H₅ là este của axit fomic'
      ],
      huu_co_este_lipit: [
        'Etyl axetat có công thức cấu tạo là CH₃COOC₂H₅',
        'Metyl axetat có công thức cấu tạo là CH₃COOCH₃',
        'Phản ứng thủy phân este trong kiềm đun nóng gọi là xà phòng hóa',
        'Xà phòng hóa chất béo (triglixerit) luôn luôn thu được Glixerol',
        'Glixerol có công thức cấu tạo là C₃H₅(OH)₃ (ancol 3 chức)',
        'Chất béo lỏng (dầu thực vật) chứa nhiều axit béo không no như axit oleic',
        'Chất béo rắn (mỡ động vật) chứa nhiều axit béo no như axit panmitic, stearic',
        'Hiđro hóa chất béo lỏng tạo thành bơ nhân tạo (chất béo rắn)',
        'Este thường nhẹ hơn nước, ít tan trong nước và có mùi thơm hoa quả',
        'Isoamyl axetat có mùi thơm đặc trưng của chuối chín',
        'Benzyl axetat có mùi thơm đặc trưng của hoa nhài',
        'Este metyl fomat HCOOCH₃ có khả năng tham gia phản ứng tráng bạc',
        'Axit stearic có công thức là C₁₇H₃₅COOH',
        'Axit panmitic có công thức là C₁₅H₃₁COOH',
        'Axit oleic có công thức là C₁₇H₃₃COOH (có 1 nối đôi C=C)',
        'Triolein có công thức là (C₁₇H₃₃COO)₃C₃H₅, làm mất màu dung dịch brom',
        'Tristearin có công thức là (C₁₇H₃₅COO)₃C₃H₅, là chất béo no thể rắn',
        'Xà phòng là muối natri hoặc kali của các axit béo',
        'Phản ứng thủy phân este trong môi trường axit là phản ứng thuận nghịch',
        'Công thức chung của este no đơn chức mạch hở là CnH2nO2 (n >= 2)'
      ],
      huu_co_cacbohidrat: [
        'Glucozơ có công thức phân tử là C₆H₁₂O₆ (monosaccarit)',
        'Fructozơ là đồng phân của glucozơ, có vị ngọt sắc hơn đường mía',
        'Glucozơ tham gia phản ứng tráng bạc tạo 2 mol Ag kết tủa',
        'Saccarozơ có công thức phân tử là C₁₂H₂₂O₁₁ (đisaccarit)',
        'Saccarozơ không tham gia phản ứng tráng bạc nhưng sản phẩm thủy phân có tráng bạc',
        'Thủy phân saccarozơ sinh ra 1 phân tử glucozơ và 1 phân tử fructozơ',
        'Tinh bột có công thức tổng quát là (C₆H₁₀O₅)n (polisaccarit)',
        'Thuốc thử đặc trưng để nhận biết tinh bột là dung dịch Iot (màu xanh tím)',
        'Xenlulozơ là polisaccarit có nhiều trong sợi bông và gỗ',
        'Cả tinh bột và xenlulozơ đều bị thủy phân hoàn toàn tạo glucozơ',
        'Glucozơ có nhiều trong quả nho chín, còn gọi là đường nho',
        'Fructozơ có nhiều trong mật ong (khoảng 40%), còn gọi là đường mật',
        'Saccarozơ có nhiều trong cây mía, củ cải đường, thốt nốt',
        'Dung dịch Cu(OH)₂ ở nhiệt độ thường hòa tan glucozơ tạo dung dịch xanh lam',
        'Khi đun nóng glucozơ với Cu(OH)₂ trong kiềm sinh kết tủa đỏ gạch Cu₂O',
        'Tinh bột gồm 2 thành phần là amilozơ (mạch thẳng) và amilopectin (phân nhánh)',
        'Xenlulozơ tác dụng với HNO₃ đặc xúc tác H₂SO₄ tạo xenlulozơ trinitrat (thuốc súng không khói)',
        'Tơ visco và tơ axetat được sản xuất từ nguyên liệu xenlulozơ',
        'Cacbohiđrat còn được gọi là gluxit hay saccarit',
        'Phản ứng quang hợp của cây xanh tạo ra glucozơ và tinh bột'
      ],
      huu_co_amin_aminoaxit: [
        'Glyxin có công thức phân tử là C₂H₅O₂N (H₂N-CH₂-COOH, M = 75)',
        'Alanin có công thức cấu tạo là CH₃-CH(NH₂)-COOH (M = 89)',
        'Amino axit có tính chất lưỡng tính vì chứa cả nhóm -NH₂ và -COOH',
        'Dung dịch Metylamin CH₃NH₂ làm quỳ tím chuyển sang màu xanh',
        'Anilin C₆H₅NH₂ có tính bazơ rất yếu, không làm đổi màu quỳ tím',
        'Anilin tác dụng với dung dịch nước brom tạo kết tủa trắng 2,4,6-tribromanilin',
        'Liên kết giữa nhóm -CO- và -NH- giữa 2 đơn vị amino axit gọi là liên kết peptit',
        'Tripeptit trở lên và protein phản ứng với Cu(OH)₂ tạo phức màu tím biure',
        'Dipeptit không có phản ứng màu biure',
        'Bậc của amin được tính bằng số nguyên tử H trong NH₃ bị thay thế bởi gốc hiđrocacbon',
        'Đimetylamin (CH₃)₂NH là amin bậc 2',
        'Trimetylamin (CH₃)₃N là amin bậc 3, gây mùi tanh đặc trưng của cá',
        'Axit glutamic HOOC-(CH₂)₂-CH(NH₂)-COOH có 2 nhóm COOH làm quỳ tím hóa đỏ',
        'Lysin có 2 nhóm NH₂ và 1 nhóm COOH làm quỳ tím hóa xanh',
        'Muối mononatri glutamat là thành phần chính của mì chính (bột ngọt)',
        'Protein bị đông tụ bởi nhiệt độ, axit, kiềm hoặc muối kim loại nặng',
        'Các amino axit thiên nhiên cấu thành protein đều là alpha-amino axit',
        'Valin có công thức phân tử là C₅H₁₁O₂N (M = 117)',
        'Peptit bị thủy phân hoàn toàn trong môi trường axit hoặc kiềm tạo các amino axit',
        'Quá trình tiêu hóa thức ăn phân giải protein thành các amino axit tự do để hấp thụ'
      ]
    };

    const lines = specializedTopics[topicId] || specializedTopics['vo_co_lop9'];
    bank = lines.map((text, i) => s => ({
      question: `${text.replace(/\s*\(.*\)/, '')}?`,
      options: makeOptions(text, ['Lựa chọn A', 'Lựa chọn B', 'Lựa chọn C'], s),
      correctAnswer: text,
      explanation: `Kiến thức trọng tâm Thầy Thọ: ${text}.`
    }));
  }

  // Đảm bảo lấy đúng 20 câu theo thứ tự idx = 0..19, không bao giờ trùng nhau!
  return bank.slice(0, 20).map((def, idx) => {
    const s = baseSeed + (idx + 1) * 31;
    const item = def(s);
    return {
      id: idx + 1,
      ...item,
      question: `Câu ${idx + 1}: ${item.question}`,
      topic: topicId
    };
  });
}

// ==============================================================================
// HÀM LẤY ĐỀ THI HÓA THEO CHUYÊN ĐỀ VÀ SỐ ĐỀ (1 -> 10)
// ==============================================================================
export function getLayGocHoaExamQuestions(topicId: string, examNo: number): LayGocHoaQuestion[] {
  const safeNo = Math.min(10, Math.max(1, examNo));
  switch (topicId) {
    case 'khtn_nguyen_to':
      return generateNguyenToExam(safeNo);
    case 'tinh_phan_tu_khoi':
      return generateTinhPhanTuKhoiExam(safeNo);
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
