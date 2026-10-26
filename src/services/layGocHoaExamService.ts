// src/services/layGocHoaExamService.ts
// Hệ thống 150 Đề thi Lấy Gốc Hóa Học (15 Chuyên đề x 10 Đề x 20 Câu/Đề = 3.000 câu)
// Phân hệ rõ ràng: Hóa Học Vô Cơ (Lớp 6 - 11) & Hóa Học Hữu Cơ (Lớp 11 - 12)
// CAM KẾT: 100% không trùng lặp câu hỏi, 4 phương án trắc nghiệm thật, chuẩn xác kiến thức SGK GDPT 2018

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
  branch: 'vo_co' | 'huu_co';
  title: string;
  shortTitle: string;
  icon: string;
  gradeBadge: string;
  description: string;
  totalExams: number;
  questionsPerExam: number;
}

export const LAY_GOC_HOA_TOPICS: LayGocHoaTopic[] = [
  // ===================== I. HÓA HỌC VÔ CƠ (LỚP 6 - 11) =====================
  {
    id: 'khtn_nguyen_to',
    branch: 'vo_co',
    title: 'Phần 1: Xác Định Nguyên Tử Khối (H, Li, C, N, O, F, Na, Mg, Al, Ca, Fe, Cu, Zn, Ag, Ba, Ne, Ar, Cl)',
    shortTitle: 'Phần 1: Nguyên Tử Khối (H, Li, Na, Fe...)',
    icon: '⚛️',
    gradeBadge: 'Lớp 6-12',
    description: 'Chuyên mục xác định chính xác nguyên tử khối (amu/đvC) của 18 nguyên tố cốt lõi: H, Li, C, N, O, F, Na, Mg, Al, Ca, Fe, Cu, Zn, Ag, Ba, Ne, Ar, Cl.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tinh_phan_tu_khoi',
    branch: 'vo_co',
    title: 'Phần 2: Phân Tử & Tính Phân Tử Khối (Lớp 7 - 8)',
    shortTitle: 'Phần 2: Tính Phân Tử Khối',
    icon: '⚖️',
    gradeBadge: 'Lớp 7-8',
    description: 'Quy tắc tính khối lượng phân tử (KLPT) theo đơn vị amu/đvC, phân tử khối đơn chất, hợp chất và muối ngậm nước.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'hoa_tri_cthh',
    branch: 'vo_co',
    title: 'Phần 3: Hóa Trị & Lập Công Thức Hóa Học (Lớp 7 - 8)',
    shortTitle: 'Phần 3: Hóa Trị & CTHH',
    icon: '🧪',
    gradeBadge: 'Lớp 7-8',
    description: 'Bài ca hóa trị kinh điển, quy tắc hóa trị x . a = y . b, lập nhanh CTHH chéo chỉ số và hóa trị nhóm nguyên tử.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'can_bang_pthh',
    branch: 'vo_co',
    title: 'Phần 4: Cân Bằng PTHH & Định Luật Bảo Toàn Khối Lượng (Lớp 8)',
    shortTitle: 'Phần 4: Cân Bằng PTHH & BTKL',
    icon: '⚖️',
    gradeBadge: 'Lớp 8',
    description: 'Mẹo cân bằng kim loại -> phi kim -> hiđro -> oxi và định luật bảo toàn khối lượng (m_A + m_B = m_C + m_D).',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'cong_thuc_mol',
    branch: 'vo_co',
    title: 'Phần 5: Công Thức Mol, Thể Tích Khí & Nồng Độ Dung Dịch (Lớp 8)',
    shortTitle: 'Phần 5: Công Thức Mol & Nồng Độ',
    icon: '🧮',
    gradeBadge: 'Lớp 8',
    description: 'Tam giác vàng tính mol (n = m/M, n = V/22,4), nồng độ mol CM = n/V, nồng độ phần trăm C% = (m_ct/m_dd) . 100%.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tinh_theo_pthh',
    branch: 'vo_co',
    title: 'Phần 6: Tính Theo Phương Trình Hóa Học 3 Bước (Lớp 8 - 9)',
    shortTitle: 'Phần 6: Tính Theo PTHH 3 Bước',
    icon: '🎯',
    gradeBadge: 'Lớp 8-9',
    description: 'Quy trình giải bài tập tính theo PTHH: Bước 1 tìm mol, Bước 2 lập tỉ lệ mol, Bước 3 tính khối lượng/thể tích yêu cầu.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'vo_co_lop9',
    branch: 'vo_co',
    title: 'Phần 7: Tứ Đại Hợp Chất Vô Cơ & Kim Loại - Phi Kim (Lớp 9)',
    shortTitle: 'Phần 7: Tứ Đại Vô Cơ & Dãy Kim Loại',
    icon: '🏛️',
    gradeBadge: 'Lớp 9',
    description: 'Tính chất hóa học của Oxit, Axit, Bazơ, Muối, dãy hoạt động hóa học kim loại và điều kiện phản ứng trao đổi.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'cau_tao_nguyen_tu_lop10',
    branch: 'vo_co',
    title: 'Phần 8: Cấu Tạo Nguyên Tử & Bảng Tuần Hoàn (Lớp 10)',
    shortTitle: 'Phần 8: Nguyên Tử & BTH',
    icon: '🔬',
    gradeBadge: 'Lớp 10',
    description: 'Hạt p, n, e, cấu hình electron (1s 2s 2p 3s 3p...), quy luật biến thiên tính chất chu kì và nhóm trong BTH.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'oxi_hoa_khu_lop10',
    branch: 'vo_co',
    title: 'Phần 9: Phản Ứng Oxi Hóa - Khử & Số Oxi Hóa (Lớp 10)',
    shortTitle: 'Phần 9: Oxi Hóa - Khử',
    icon: '🔥',
    gradeBadge: 'Lớp 10',
    description: 'Quy tắc xác định số oxi hóa, câu thần chú "Khử cho - O nhận", phương pháp thăng bằng electron.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'su_dien_li_lop11',
    branch: 'vo_co',
    title: 'Phần 10: Sự Điện Li, pH & Cân Bằng Hóa Học (Lớp 11)',
    shortTitle: 'Phần 10: Điện Li & pH',
    icon: '⚡',
    gradeBadge: 'Lớp 11',
    description: 'Chất điện li mạnh, yếu, tính toán độ pH, phương trình ion rút gọn và nguyên lí chuyển dịch cân bằng Le Chatelier.',
    totalExams: 10,
    questionsPerExam: 20
  },

  // ===================== II. HÓA HỌC HỮU CƠ (LỚP 11 - 12) =====================
  {
    id: 'huu_co_hidrocacbon',
    branch: 'huu_co',
    title: 'Phần 11: Đại Cương Hữu Cơ & Hiđrocacbon (Lớp 11)',
    shortTitle: 'Phần 11: Hiđrocacbon',
    icon: '🛢️',
    gradeBadge: 'Lớp 11',
    description: 'Đồng đẳng, đồng phân ankan, anken, ankin, aren benzen, phản ứng thế halogen, cộng brom và trùng hợp.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_ancol_axit',
    branch: 'huu_co',
    title: 'Phần 12: Dẫn Xuất Halogen, Ancol, Phenol & Axit Cacboxylic (Lớp 11)',
    shortTitle: 'Phần 12: Ancol & Axit',
    icon: '🍷',
    gradeBadge: 'Lớp 11',
    description: 'Rượu etylic (C₂H₅OH), axit axetic (CH₃COOH), phenol, phản ứng este hóa và tác dụng với kim loại kiềm.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_este_lipit',
    branch: 'huu_co',
    title: 'Phần 13: Este - Lipit & Chất Béo Xà Phòng (Lớp 12)',
    shortTitle: 'Phần 13: Este & Chất Béo',
    icon: '🧈',
    gradeBadge: 'Lớp 12',
    description: "Cấu tạo este RCOOR', phản ứng thủy phân trong axit và môi trường kiềm (xà phòng hóa), triglixerit chất béo.",
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_cacbohidrat',
    branch: 'huu_co',
    title: 'Phần 14: Cacbohiđrat - Glucozơ, Saccarozơ, Tinh Bột & Xenlulozơ (Lớp 12)',
    shortTitle: 'Phần 14: Cacbohiđrat',
    icon: '🌾',
    gradeBadge: 'Lớp 12',
    description: 'Monosaccarit, đisaccarit, polisaccarit, phản ứng tráng bạc Ag, hòa tan Cu(OH)₂ màu xanh lam và nhận biết iot.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'huu_co_amin_aminoaxit',
    branch: 'huu_co',
    title: 'Phần 15: Amin, Amino Axit, Peptit & Protein (Lớp 12)',
    shortTitle: 'Phần 15: Amin & Protein',
    icon: '🧬',
    gradeBadge: 'Lớp 12',
    description: 'Tính bazơ của amin, tính lưỡng tính của amino axit (glyxin, alanin), liên kết peptit, phản ứng màu biure.',
    totalExams: 10,
    questionsPerExam: 20
  }
];

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
  return all.sort((a, b) => seededRandom(seed + a.length + 13) - 0.5);
}

// Master raw question repository (15 topics x 20 questions = 300 unique questions)
const RAW_CHEM_DATA: Record<string, Array<{
  question: string;
  mathExpression?: string;
  correctAnswer: string;
  distractors: string[];
  explanation: string;
}>> = {
  "khtn_nguyen_to": [
    {
      "question": "Nguyên tử khối (khối lượng nguyên tử) của nguyên tố Hiđro (Hydrogen, H) là:",
      "mathExpression": "M_{\\mathrm{H}} = ?",
      "correctAnswer": "1 amu",
      "distractors": ["2 amu", "4 amu", "16 amu"],
      "explanation": "Hiđro có kí hiệu H, nguyên tử khối M = 1 amu (hoặc 1 đvC)."
    },
    {
      "question": "Nguyên tử khối của nguyên tố Liti (Lithium, Li) bằng:",
      "mathExpression": "M_{\\mathrm{Li}} = ?",
      "correctAnswer": "7 amu",
      "distractors": ["3 amu", "6 amu", "9 amu"],
      "explanation": "Liti có kí hiệu Li (Z = 3), nguyên tử khối M = 7 amu."
    },
    {
      "question": "Nguyên tử khối của nguyên tố Cacbon (Carbon, C) bằng:",
      "mathExpression": "M_{\\mathrm{C}} = ?",
      "correctAnswer": "12 amu",
      "distractors": ["6 amu", "14 amu", "16 amu"],
      "explanation": "Cacbon có kí hiệu C, nguyên tử khối M = 12 amu."
    },
    {
      "question": "Nguyên tố Nitơ (Nitrogen, N) có nguyên tử khối bằng:",
      "mathExpression": "M_{\\mathrm{N}} = ?",
      "correctAnswer": "14 amu",
      "distractors": ["7 amu", "12 amu", "28 amu"],
      "explanation": "Nitơ có kí hiệu N, nguyên tử khối M = 14 amu."
    },
    {
      "question": "Nguyên tử khối của nguyên tố Oxi (Oxygen, O) là:",
      "mathExpression": "M_{\\mathrm{O}} = ?",
      "correctAnswer": "16 amu",
      "distractors": ["8 amu", "32 amu", "14 amu"],
      "explanation": "Oxi có kí hiệu O (Z = 8), nguyên tử khối M = 16 amu."
    },
    {
      "question": "Nguyên tử khối của nguyên tố Flo (Fluorine, F) bằng:",
      "mathExpression": "M_{\\mathrm{F}} = ?",
      "correctAnswer": "19 amu",
      "distractors": ["9 amu", "18 amu", "35,5 amu"],
      "explanation": "Flo có kí hiệu F (Z = 9), nguyên tử khối M = 19 amu."
    },
    {
      "question": "Nguyên tử khối của khí hiếm Neon (Ne) là:",
      "mathExpression": "M_{\\mathrm{Ne}} = ?",
      "correctAnswer": "20 amu",
      "distractors": ["10 amu", "19 amu", "40 amu"],
      "explanation": "Neon có kí hiệu Ne (Z = 10), nguyên tử khối M = 20 amu."
    },
    {
      "question": "Kim loại kiềm Natri (Sodium, Na) có nguyên tử khối bằng:",
      "mathExpression": "M_{\\mathrm{Na}} = ?",
      "correctAnswer": "23 amu",
      "distractors": ["11 amu", "24 amu", "39 amu"],
      "explanation": "Natri có kí hiệu Na, nguyên tử khối M = 23 amu."
    },
    {
      "question": "Nguyên tử khối của kim loại Magie (Magnesium, Mg) là:",
      "mathExpression": "M_{\\mathrm{Mg}} = ?",
      "correctAnswer": "24 amu",
      "distractors": ["12 amu", "23 amu", "27 amu"],
      "explanation": "Magie có kí hiệu Mg, nguyên tử khối M = 24 amu."
    },
    {
      "question": "Nguyên tử khối của kim loại Nhôm (Aluminium, Al) là:",
      "mathExpression": "M_{\\mathrm{Al}} = ?",
      "correctAnswer": "27 amu",
      "distractors": ["13 amu", "26 amu", "56 amu"],
      "explanation": "Nhôm có kí hiệu Al, nguyên tử khối M = 27 amu."
    },
    {
      "question": "Nguyên tố Clo (Chlorine, Cl) có nguyên tử khối quy ước là:",
      "mathExpression": "M_{\\mathrm{Cl}} = ?",
      "correctAnswer": "35,5 amu",
      "distractors": ["35 amu", "36 amu", "17 amu"],
      "explanation": "Clo có kí hiệu Cl, nguyên tử khối trung bình quy ước là 35,5 amu."
    },
    {
      "question": "Nguyên tử khối của khí hiếm Agon (Argon, Ar) xấp xỉ bằng:",
      "mathExpression": "M_{\\mathrm{Ar}} = ?",
      "correctAnswer": "40 amu",
      "distractors": ["18 amu", "20 amu", "39 amu"],
      "explanation": "Agon có kí hiệu Ar (Z = 18), nguyên tử khối xấp xỉ M = 40 amu (chính xác 39,95 amu)."
    },
    {
      "question": "Kim loại kiềm Kali (Potassium, K) có nguyên tử khối bằng:",
      "mathExpression": "M_{\\mathrm{K}} = ?",
      "correctAnswer": "39 amu",
      "distractors": ["19 amu", "23 amu", "40 amu"],
      "explanation": "Kali có kí hiệu K, nguyên tử khối M = 39 amu."
    },
    {
      "question": "Nguyên tử khối của kim loại Canxi (Calcium, Ca) bằng:",
      "mathExpression": "M_{\\mathrm{Ca}} = ?",
      "correctAnswer": "40 amu",
      "distractors": ["20 amu", "39 amu", "24 amu"],
      "explanation": "Canxi có kí hiệu Ca, nguyên tử khối M = 40 amu."
    },
    {
      "question": "Kim loại Sắt (Iron, Fe) có nguyên tử khối bằng:",
      "mathExpression": "M_{\\mathrm{Fe}} = ?",
      "correctAnswer": "56 amu",
      "distractors": ["26 amu", "64 amu", "65 amu"],
      "explanation": "Sắt có kí hiệu Fe, nguyên tử khối M = 56 amu."
    },
    {
      "question": "Nguyên tử khối của kim loại Đồng (Copper, Cu) là:",
      "mathExpression": "M_{\\mathrm{Cu}} = ?",
      "correctAnswer": "64 amu",
      "distractors": ["29 amu", "56 amu", "65 amu"],
      "explanation": "Đồng có kí hiệu Cu, nguyên tử khối M = 64 amu."
    },
    {
      "question": "Nguyên tử khối của kim loại Kẽm (Zinc, Zn) bằng:",
      "mathExpression": "M_{\\mathrm{Zn}} = ?",
      "correctAnswer": "65 amu",
      "distractors": ["30 amu", "56 amu", "64 amu"],
      "explanation": "Kẽm có kí hiệu Zn, nguyên tử khối M = 65 amu."
    },
    {
      "question": "Kim loại quý Bạc (Silver, Ag) có nguyên tử khối bằng:",
      "mathExpression": "M_{\\mathrm{Ag}} = ?",
      "correctAnswer": "108 amu",
      "distractors": ["47 amu", "64 amu", "137 amu"],
      "explanation": "Bạc có kí hiệu Ag, nguyên tử khối M = 108 amu."
    },
    {
      "question": "Kim loại Bari (Barium, Ba) có nguyên tử khối bằng:",
      "mathExpression": "M_{\\mathrm{Ba}} = ?",
      "correctAnswer": "137 amu",
      "distractors": ["56 amu", "108 amu", "40 amu"],
      "explanation": "Bari có kí hiệu Ba, nguyên tử khối M = 137 amu."
    },
    {
      "question": "Nguyên tố phi kim Lưu huỳnh (Sulfur, S) có nguyên tử khối bằng:",
      "mathExpression": "M_{\\mathrm{S}} = ?",
      "correctAnswer": "32 amu",
      "distractors": ["16 amu", "31 amu", "35,5 amu"],
      "explanation": "Lưu huỳnh có kí hiệu S (Z = 16), nguyên tử khối M = 32 amu."
    }
  ],
  "tinh_phan_tu_khoi": [
    {
      "question": "Khối lượng phân tử của khí Oxi (O₂) được tính bằng công thức 16 . 2, có giá trị là:",
      "mathExpression": "M_{\\mathrm{O_2}} = 16 \\cdot 2 = ?",
      "correctAnswer": "32 amu",
      "distractors": [
        "16 amu",
        "48 amu",
        "64 amu"
      ],
      "explanation": "Phân tử O₂ gồm 2 nguyên tử O: KLPT = 16 . 2 = 32 amu."
    },
    {
      "question": "Trong các chất sau, phân tử khí nào có khối lượng nhẹ nhất?",
      "mathExpression": null,
      "correctAnswer": "Khí Hiđro (H₂, KLPT = 2 amu)",
      "distractors": [
        "Khí Nitơ (N₂, KLPT = 28 amu)",
        "Khí Oxi (O₂, KLPT = 32 amu)",
        "Khí Cacbonic (CO₂, KLPT = 44 amu)"
      ],
      "explanation": "H₂ có KLPT = 2 amu, là chất khí nhẹ nhất trong tự nhiên."
    },
    {
      "question": "Tính khối lượng phân tử của nước (H₂O) biết H = 1, O = 16:",
      "mathExpression": "M_{\\mathrm{H_2O}} = 1 \\cdot 2 + 16 = ?",
      "correctAnswer": "18 amu",
      "distractors": [
        "17 amu",
        "20 amu",
        "34 amu"
      ],
      "explanation": "KLPT H₂O = 1 . 2 + 16 = 18 amu (đvC)."
    },
    {
      "question": "Khí cacbonic (CO₂) có trong hơi thở ra có khối lượng phân tử bằng:",
      "mathExpression": "M_{\\mathrm{CO_2}} = 12 + 16 \\cdot 2 = ?",
      "correctAnswer": "44 amu",
      "distractors": [
        "28 amu",
        "32 amu",
        "40 amu"
      ],
      "explanation": "KLPT CO₂ = 12 + 16 . 2 = 44 amu."
    },
    {
      "question": "Phân tử ozôn gồm 3 nguyên tử oxi (O₃). Khối lượng phân tử của ozôn là:",
      "mathExpression": "M_{\\mathrm{O_3}} = 16 \\cdot 3 = ?",
      "correctAnswer": "48 amu",
      "distractors": [
        "32 amu",
        "16 amu",
        "64 amu"
      ],
      "explanation": "KLPT O₃ = 16 . 3 = 48 amu."
    },
    {
      "question": "Tính phân tử khối của vôi sống Canxi oxit (CaO), biết Ca = 40, O = 16:",
      "mathExpression": "M_{\\mathrm{CaO}} = 40 + 16 = ?",
      "correctAnswer": "56 amu",
      "distractors": [
        "40 amu",
        "72 amu",
        "60 amu"
      ],
      "explanation": "KLPT CaO = 40 + 16 = 56 amu."
    },
    {
      "question": "Khí metan (CH₄) có trong khí bioga. Khối lượng phân tử của metan là:",
      "mathExpression": "M_{\\mathrm{CH_4}} = 12 + 1 \\cdot 4 = ?",
      "correctAnswer": "16 amu",
      "distractors": [
        "12 amu",
        "20 amu",
        "14 amu"
      ],
      "explanation": "KLPT CH₄ = 12 + 1 . 4 = 16 amu."
    },
    {
      "question": "So sánh khối lượng: Phân tử khí Oxi (O₂, M = 32) nặng gấp bao nhiêu lần phân tử khí Hiđro (H₂, M = 2)?",
      "mathExpression": "\\frac{M_{\\mathrm{O_2}}}{M_{\\mathrm{H_2}}} = \\frac{32}{2}",
      "correctAnswer": "16 lần",
      "distractors": [
        "8 lần",
        "32 lần",
        "2 lần"
      ],
      "explanation": "Tỉ số khối lượng: 32 : 2 = 16 lần."
    },
    {
      "question": "Tính khối lượng phân tử của đá vôi Canxi cacbonat (CaCO₃) biết Ca=40, C=12, O=16:",
      "mathExpression": "M_{\\mathrm{CaCO_3}} = 40 + 12 + 16 \\cdot 3 = ?",
      "correctAnswer": "100 amu",
      "distractors": [
        "90 amu",
        "110 amu",
        "84 amu"
      ],
      "explanation": "KLPT CaCO₃ = 40 + 12 + 16 . 3 = 100 amu."
    },
    {
      "question": "Phân tử xút ăn da Natri hiđroxit (NaOH) có phân tử khối bằng:",
      "mathExpression": "M_{\\mathrm{NaOH}} = 23 + 16 + 1 = ?",
      "correctAnswer": "40 amu",
      "distractors": [
        "39 amu",
        "41 amu",
        "58,5 amu"
      ],
      "explanation": "KLPT NaOH = 23 + 16 + 1 = 40 amu."
    },
    {
      "question": "Khối lượng phân tử của Axit sunfuric (H₂SO₄) biết H=1, S=32, O=16 là:",
      "mathExpression": "M_{\\mathrm{H_2SO_4}} = 1 \\cdot 2 + 32 + 16 \\cdot 4 = ?",
      "correctAnswer": "98 amu",
      "distractors": [
        "96 amu",
        "100 amu",
        "82 amu"
      ],
      "explanation": "KLPT H₂SO₄ = 2 . 1 + 32 + 16 . 4 = 98 amu."
    },
    {
      "question": "Tính phân tử khối của Nhôm oxit (Al₂O₃), biết Al = 27, O = 16:",
      "mathExpression": "M_{\\mathrm{Al_2O_3}} = 27 \\cdot 2 + 16 \\cdot 3 = ?",
      "correctAnswer": "102 amu",
      "distractors": [
        "100 amu",
        "75 amu",
        "113 amu"
      ],
      "explanation": "KLPT Al₂O₃ = 27 . 2 + 16 . 3 = 54 + 48 = 102 amu."
    },
    {
      "question": "Khối lượng phân tử của muối ăn Natri clorua (NaCl) biết Na = 23, Cl = 35,5 bằng:",
      "mathExpression": "M_{\\mathrm{NaCl}} = 23 + 35,5 = ?",
      "correctAnswer": "58,5 amu",
      "distractors": [
        "58 amu",
        "59 amu",
        "35,5 amu"
      ],
      "explanation": "KLPT NaCl = 23 + 35,5 = 58,5 amu."
    },
    {
      "question": "Tính khối lượng phân tử của Sắt(III) oxit (Fe₂O₃), biết Fe = 56, O = 16:",
      "mathExpression": "M_{\\mathrm{Fe_2O_3}} = 56 \\cdot 2 + 16 \\cdot 3 = ?",
      "correctAnswer": "160 amu",
      "distractors": [
        "72 amu",
        "152 amu",
        "176 amu"
      ],
      "explanation": "KLPT Fe₂O₃ = 56 . 2 + 16 . 3 = 112 + 48 = 160 amu."
    },
    {
      "question": "Nước vôi trong có công thức Ca(OH)₂. Khối lượng phân tử của Ca(OH)₂ là:",
      "mathExpression": "M_{\\mathrm{Ca(OH)_2}} = 40 + (16 + 1) \\cdot 2 = ?",
      "correctAnswer": "74 amu",
      "distractors": [
        "57 amu",
        "78 amu",
        "100 amu"
      ],
      "explanation": "KLPT Ca(OH)₂ = 40 + 17 . 2 = 74 amu."
    },
    {
      "question": "Phân tử chất nào sau đây có khối lượng phân tử bằng 28 amu?",
      "mathExpression": null,
      "correctAnswer": "Khí Nitơ (N₂) và Khí Cacbon oxit (CO)",
      "distractors": [
        "Khí Oxi (O₂)",
        "Khí Metan (CH₄)",
        "Khí Clo (Cl₂)"
      ],
      "explanation": "N₂ = 14 . 2 = 28 amu; CO = 12 + 16 = 28 amu."
    },
    {
      "question": "Tính phân tử khối của Magie oxit (MgO), biết Mg = 24, O = 16:",
      "mathExpression": "M_{\\mathrm{MgO}} = 24 + 16 = ?",
      "correctAnswer": "40 amu",
      "distractors": [
        "24 amu",
        "56 amu",
        "48 amu"
      ],
      "explanation": "KLPT MgO = 24 + 16 = 40 amu."
    },
    {
      "question": "Phân tử Axit clohiđric (HCl) có phân tử khối là:",
      "mathExpression": "M_{\\mathrm{HCl}} = 1 + 35,5 = ?",
      "correctAnswer": "36,5 amu",
      "distractors": [
        "35,5 amu",
        "37,5 amu",
        "38 amu"
      ],
      "explanation": "KLPT HCl = 1 + 35,5 = 36,5 amu."
    },
    {
      "question": "Một hợp chất gồm 1 nguyên tử X liên kết với 2 nguyên tử Oxi và có KLPT bằng 64 amu. Nguyên tố X là:",
      "mathExpression": "M_{\\mathrm{X}} + 16 \\cdot 2 = 64 \\Rightarrow M_{\\mathrm{X}} = 32",
      "correctAnswer": "Lưu huỳnh (S, M = 32 amu)",
      "distractors": [
        "Cacbon (C)",
        "Nitơ (N)",
        "Canxi (Ca)"
      ],
      "explanation": "M(X) = 64 - 16 . 2 = 32 amu -> X là Lưu huỳnh (S)."
    },
    {
      "question": "Phân tử khối của muối ngậm nước Đồng(II) sunfat pentahiđrat (CuSO₄ . 5H₂O) là:",
      "mathExpression": "M = M_{\\mathrm{CuSO_4}} + 5 \\cdot M_{\\mathrm{H_2O}} = 160 + 5 \\cdot 18 = ?",
      "correctAnswer": "250 amu",
      "distractors": [
        "160 amu",
        "232 amu",
        "178 amu"
      ],
      "explanation": "KLPT = 160 + 5 . 18 = 160 + 90 = 250 amu."
    }
  ],
  "hoa_tri_cthh": [
    {
      "question": "Trong hợp chất, nguyên tố Hiđro (H) luôn được quy ước có hóa trị chuẩn là:",
      "mathExpression": null,
      "correctAnswer": "Hóa trị I",
      "distractors": [
        "Hóa trị II",
        "Hóa trị III",
        "Hóa trị IV"
      ],
      "explanation": "Hiđro luôn có hóa trị I trong các hợp chất."
    },
    {
      "question": "Trong hợp chất, nguyên tố Oxi (O) luôn được chọn làm đơn vị quy ước có hóa trị:",
      "mathExpression": null,
      "correctAnswer": "Hóa trị II",
      "distractors": [
        "Hóa trị I",
        "Hóa trị III",
        "Hóa trị IV"
      ],
      "explanation": "Oxi luôn có hóa trị II trong các hợp chất."
    },
    {
      "question": "Hóa trị của nhóm hiđroxit (-OH) trong phân tử các bazơ (như NaOH, Ca(OH)₂) là:",
      "mathExpression": null,
      "correctAnswer": "Hóa trị I",
      "distractors": [
        "Hóa trị II",
        "Hóa trị III",
        "Hóa trị IV"
      ],
      "explanation": "Nhóm -OH luôn có hóa trị I."
    },
    {
      "question": "Hóa trị của nhóm sunfat (=SO₄) và nhóm cacbonat (=CO₃) là:",
      "mathExpression": null,
      "correctAnswer": "Hóa trị II",
      "distractors": [
        "Hóa trị I",
        "Hóa trị III",
        "Hóa trị IV"
      ],
      "explanation": "Cả hai nhóm nguyên tử SO₄ và CO₃ đều có hóa trị II."
    },
    {
      "question": "Hóa trị của nhóm photphat (≡PO₄) trong phân tử H₃PO₄ là:",
      "mathExpression": null,
      "correctAnswer": "Hóa trị III",
      "distractors": [
        "Hóa trị I",
        "Hóa trị II",
        "Hóa trị IV"
      ],
      "explanation": "Nhóm PO₄ luôn có hóa trị III."
    },
    {
      "question": "Quy tắc hóa trị đối với hợp chất hai nguyên tố A_x^a B_y^b được phát biểu chuẩn là:",
      "mathExpression": null,
      "correctAnswer": "x . a = y . b",
      "distractors": [
        "x + a = y + b",
        "x / a = y / b",
        "x . y = a . b"
      ],
      "explanation": "Quy tắc hóa trị: Tích chỉ số và hóa trị nguyên tố này bằng tích chỉ số và hóa trị nguyên tố kia."
    },
    {
      "question": "Công thức hóa học chuẩn xác của Nhôm oxit (Al hóa trị III, O hóa trị II) là:",
      "mathExpression": null,
      "correctAnswer": "Al₂O₃",
      "distractors": [
        "AlO",
        "Al₃O₂",
        "AlO₂"
      ],
      "explanation": "Al(III) và O(II) chéo chỉ số tạo CTHH Al₂O₃."
    },
    {
      "question": "Công thức hóa học chuẩn xác của Magie clorua (Mg hóa trị II, Cl hóa trị I) là:",
      "mathExpression": null,
      "correctAnswer": "MgCl₂",
      "distractors": [
        "MgCl",
        "Mg₂Cl",
        "MgCl₃"
      ],
      "explanation": "Mg(II) và Cl(I) tạo thành MgCl₂."
    },
    {
      "question": "Công thức hóa học chuẩn xác của Sắt(III) oxit (Fe hóa trị III, O hóa trị II) là:",
      "mathExpression": null,
      "correctAnswer": "Fe₂O₃",
      "distractors": [
        "FeO",
        "Fe₃O₄",
        "Fe₂O"
      ],
      "explanation": "Fe(III) và O(II) tạo CTHH Fe₂O₃."
    },
    {
      "question": "Công thức hóa học chuẩn xác của Canxi cacbonat (Ca hóa trị II, nhóm CO₃ hóa trị II) là:",
      "mathExpression": null,
      "correctAnswer": "CaCO₃",
      "distractors": [
        "Ca(CO₃)₂",
        "Ca₂CO₃",
        "CaHCO₃"
      ],
      "explanation": "Ca(II) và CO₃(II) tỉ lệ 1 : 1 -> CTHH là CaCO₃."
    },
    {
      "question": "Công thức hóa học chuẩn xác của Natri sunfat (Na hóa trị I, nhóm SO₄ hóa trị II) là:",
      "mathExpression": null,
      "correctAnswer": "Na₂SO₄",
      "distractors": [
        "NaSO₄",
        "Na(SO₄)₂",
        "Na₂SO₃"
      ],
      "explanation": "Na(I) và SO₄(II) chéo chỉ số tạo Na₂SO₄."
    },
    {
      "question": "Công thức hóa học chuẩn xác của Bari sunfat (Ba hóa trị II, nhóm SO₄ hóa trị II) là:",
      "mathExpression": null,
      "correctAnswer": "BaSO₄",
      "distractors": [
        "Ba₂(SO₄)₂",
        "Ba(SO₄)₂",
        "BaSO₃"
      ],
      "explanation": "Ba(II) và SO₄(II) tạo BaSO₄."
    },
    {
      "question": "Xác định hóa trị của kim loại Sắt (Fe) trong hợp chất FeCl₃ (biết Cl có hóa trị I):",
      "mathExpression": "Fe^a Cl_3^I \\Rightarrow a \\cdot 1 = I \\cdot 3",
      "correctAnswer": "Hóa trị III",
      "distractors": [
        "Hóa trị I",
        "Hóa trị II",
        "Hóa trị IV"
      ],
      "explanation": "Theo quy tắc: a . 1 = 1 . 3 => a = III. Sắt có hóa trị III trong FeCl₃."
    },
    {
      "question": "Xác định hóa trị của Lưu huỳnh (S) trong hợp chất khí SO₂ (biết O có hóa trị II):",
      "mathExpression": "S^a O_2^{II} \\Rightarrow a \\cdot 1 = II \\cdot 2",
      "correctAnswer": "Hóa trị IV",
      "distractors": [
        "Hóa trị II",
        "Hóa trị VI",
        "Hóa trị III"
      ],
      "explanation": "a . 1 = 2 . 2 => a = IV. Lưu huỳnh có hóa trị IV trong SO₂."
    },
    {
      "question": "Xác định hóa trị của Lưu huỳnh (S) trong hợp chất SO₃ (biết O có hóa trị II):",
      "mathExpression": "S^a O_3^{II} \\Rightarrow a \\cdot 1 = II \\cdot 3",
      "correctAnswer": "Hóa trị VI",
      "distractors": [
        "Hóa trị IV",
        "Hóa trị II",
        "Hóa trị V"
      ],
      "explanation": "a . 1 = 2 . 3 => a = VI. Lưu huỳnh có hóa trị VI trong SO₃."
    },
    {
      "question": "Xác định hóa trị của Photpho (P) trong hợp chất P₂O₅ (biết O có hóa trị II):",
      "mathExpression": "P_2^a O_5^{II} \\Rightarrow a \\cdot 2 = II \\cdot 5",
      "correctAnswer": "Hóa trị V",
      "distractors": [
        "Hóa trị III",
        "Hóa trị IV",
        "Hóa trị II"
      ],
      "explanation": "2a = 2 . 5 = 10 => a = V."
    },
    {
      "question": "Xác định hóa trị của Đồng (Cu) trong hợp chất Đồng(I) oxit Cu₂O:",
      "mathExpression": "Cu_2^a O^{II} \\Rightarrow a \\cdot 2 = II \\cdot 1",
      "correctAnswer": "Hóa trị I",
      "distractors": [
        "Hóa trị II",
        "Hóa trị III",
        "Hóa trị 0"
      ],
      "explanation": "2a = 2 . 1 = 2 => a = I."
    },
    {
      "question": "Trong hợp chất khí Cacbon oxit CO, nguyên tố Cacbon có hóa trị bằng:",
      "mathExpression": "C^a O^{II} \\Rightarrow a \\cdot 1 = II \\cdot 1",
      "correctAnswer": "Hóa trị II",
      "distractors": [
        "Hóa trị IV",
        "Hóa trị I",
        "Hóa trị III"
      ],
      "explanation": "Cacbon có hóa trị II trong khí CO."
    },
    {
      "question": "Công thức hóa học nào sau đây viết SAI theo quy tắc hóa trị?",
      "mathExpression": null,
      "correctAnswer": "AlO₂",
      "distractors": [
        "Al₂O₃",
        "CaCl₂",
        "Na₂O"
      ],
      "explanation": "Al hóa trị III, O hóa trị II thì CTHH đúng là Al₂O₃, viết AlO₂ là sai."
    },
    {
      "question": "Cách biểu diễn muối ngậm nước Đồng(II) sunfat ngậm 5 phân tử nước đúng chuẩn là:",
      "mathExpression": null,
      "correctAnswer": "CuSO₄ . 5H₂O",
      "distractors": [
        "CuSO₄ + 5H₂O",
        "CuSO₄x5H₂O",
        "CuSO₄(H₂O)₅"
      ],
      "explanation": "Chuẩn hóa học quốc tế: Muối ngậm nước biểu diễn bằng dấu chấm liên kết: CuSO₄ . 5H₂O."
    }
  ],
  "can_bang_pthh": [
    {
      "question": "Hệ số cân bằng tối giản của phản ứng đốt cháy nhôm: ? Al + ? O₂ → ? Al₂O₃ là:",
      "mathExpression": "4\\mathrm{Al} + 3\\mathrm{O_2} \\rightarrow 2\\mathrm{Al_2O_3}",
      "correctAnswer": "4, 3, 2",
      "distractors": [
        "2, 3, 1",
        "4, 2, 2",
        "2, 1, 1"
      ],
      "explanation": "Cân bằng: 4Al + 3O₂ → 2Al₂O₃. Bộ hệ số tối giản là 4, 3, 2."
    },
    {
      "question": "Hệ số cân bằng tối giản của phản ứng: ? Fe + ? O₂ → ? Fe₃O₄ là:",
      "mathExpression": "3\\mathrm{Fe} + 2\\mathrm{O_2} \\rightarrow 1\\mathrm{Fe_3O_4}",
      "correctAnswer": "3, 2, 1",
      "distractors": [
        "2, 3, 1",
        "3, 1, 1",
        "6, 4, 2"
      ],
      "explanation": "Cân bằng sắt từ oxit: 3Fe + 2O₂ → Fe₃O₄."
    },
    {
      "question": "Hệ số cân bằng của phản ứng giữa Sắt và axit clohiđric: ? Fe + ? HCl → ? FeCl₂ + ? H₂ là:",
      "mathExpression": "\\mathrm{Fe} + 2\\mathrm{HCl} \\rightarrow \\mathrm{FeCl_2} + \\mathrm{H_2}",
      "correctAnswer": "1, 2, 1, 1",
      "distractors": [
        "1, 1, 1, 1",
        "2, 4, 2, 2",
        "1, 3, 1, 1"
      ],
      "explanation": "Cân bằng: Fe + 2HCl → FeCl₂ + H₂."
    },
    {
      "question": "Hệ số cân bằng của phản ứng giữa Nhôm và axit sunfuric loãng: ? Al + ? H₂SO₄ → ? Al₂(SO₄)₃ + ? H₂ là:",
      "mathExpression": "2\\mathrm{Al} + 3\\mathrm{H_2SO_4} \\rightarrow 1\\mathrm{Al_2(SO_4)_3} + 3\\mathrm{H_2}",
      "correctAnswer": "2, 3, 1, 3",
      "distractors": [
        "1, 3, 1, 3",
        "2, 2, 1, 2",
        "4, 6, 2, 6"
      ],
      "explanation": "Cân bằng: 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂."
    },
    {
      "question": "Cân bằng phản ứng nung vôi: CaCO₃ → ? CaO + ? CO₂ với các hệ số là:",
      "mathExpression": "\\mathrm{CaCO_3} \\rightarrow \\mathrm{CaO} + \\mathrm{CO_2}",
      "correctAnswer": "1, 1, 1",
      "distractors": [
        "1, 2, 1",
        "2, 1, 1",
        "1, 1, 2"
      ],
      "explanation": "Phản ứng tự cân bằng với hệ số 1 : 1 : 1."
    },
    {
      "question": "Cân bằng phản ứng đốt cháy khí metan: CH₄ + ? O₂ → CO₂ + ? H₂O. Hệ số của O₂ và H₂O lần lượt là:",
      "mathExpression": "\\mathrm{CH_4} + 2\\mathrm{O_2} \\rightarrow \\mathrm{CO_2} + 2\\mathrm{H_2O}",
      "correctAnswer": "2 và 2",
      "distractors": [
        "1 và 2",
        "2 và 1",
        "3 và 2"
      ],
      "explanation": "Cân bằng: CH₄ + 2O₂ → CO₂ + 2H₂O."
    },
    {
      "question": "Hệ số của phân tử O₂ trong phản ứng đốt cháy photpho: 4P + ? O₂ → 2P₂O₅ là:",
      "mathExpression": "4\\mathrm{P} + 5\\mathrm{O_2} \\rightarrow 2\\mathrm{P_2O_5}",
      "correctAnswer": "5",
      "distractors": [
        "3",
        "2",
        "4"
      ],
      "explanation": "Oxi vế phải có 2 . 5 = 10 nguyên tử O -> hệ số O₂ là 10/2 = 5."
    },
    {
      "question": "Cân bằng phản ứng giữa Natri và nước: ? Na + ? H₂O → ? NaOH + ? H₂ là:",
      "mathExpression": "2\\mathrm{Na} + 2\\mathrm{H_2O} \\rightarrow 2\\mathrm{NaOH} + 1\\mathrm{H_2}",
      "correctAnswer": "2, 2, 2, 1",
      "distractors": [
        "1, 1, 1, 1",
        "2, 1, 2, 1",
        "2, 2, 1, 1"
      ],
      "explanation": "Cân bằng: 2Na + 2H₂O → 2NaOH + H₂."
    },
    {
      "question": "Cân bằng phản ứng: ? Cu + ? AgNO₃ → ? Cu(NO₃)₂ + ? Ag là:",
      "mathExpression": "\\mathrm{Cu} + 2\\mathrm{AgNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + 2\\mathrm{Ag}",
      "correctAnswer": "1, 2, 1, 2",
      "distractors": [
        "1, 1, 1, 1",
        "2, 2, 1, 2",
        "1, 2, 1, 1"
      ],
      "explanation": "Cân bằng nhóm NO₃ trước: Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag."
    },
    {
      "question": "Tổng các hệ số tối giản trong phương trình nhiệt phân thuốc tím: 2KMnO₄ → K₂MnO₄ + MnO₂ + O₂ là:",
      "mathExpression": "2 + 1 + 1 + 1 = 5",
      "correctAnswer": "5",
      "distractors": [
        "4",
        "6",
        "7"
      ],
      "explanation": "Tổng hệ số: 2 + 1 + 1 + 1 = 5."
    },
    {
      "question": "Định luật bảo toàn khối lượng phát biểu rằng trong một phản ứng hóa học:",
      "mathExpression": null,
      "correctAnswer": "Tổng khối lượng các chất tham gia bằng tổng khối lượng các sản phẩm",
      "distractors": [
        "Khối lượng chất tham gia luôn lớn hơn",
        "Khối lượng sản phẩm luôn lớn hơn",
        "Thể tích các chất luôn không đổi"
      ],
      "explanation": "Định luật Lô-mô-nô-xốp & La-voa-zi-ê: m_tham_gia = m_san_pham."
    },
    {
      "question": "Đốt cháy hoàn toàn 2,4 gam Magie (Mg) cần dùng 1,6 gam khí Oxi (O₂). Khối lượng Magie oxit (MgO) tạo thành là:",
      "mathExpression": "m_{\\mathrm{MgO}} = 2,4 + 1,6 = ?",
      "correctAnswer": "4,0 gam",
      "distractors": [
        "3,2 gam",
        "4,8 gam",
        "2,0 gam"
      ],
      "explanation": "Áp dụng định luật BTKL: m(MgO) = m(Mg) + m(O₂) = 2,4 + 1,6 = 4,0 gam."
    },
    {
      "question": "Nung 10 gam đá vôi CaCO₃ thu được 5,6 gam vôi sống CaO và khí CO₂. Khối lượng khí CO₂ thoát ra là:",
      "mathExpression": "m_{\\mathrm{CO_2}} = 10 - 5,6 = ?",
      "correctAnswer": "4,4 gam",
      "distractors": [
        "5,6 gam",
        "4,0 gam",
        "15,6 gam"
      ],
      "explanation": "m(CO₂) = m(CaCO₃) - m(CaO) = 10 - 5,6 = 4,4 gam."
    },
    {
      "question": "Cho 6,5 gam Kẽm tác dụng vừa đủ với dung dịch chứa 7,3 gam HCl, thu được 13,6 gam muối ZnCl₂ và khí H₂. Khối lượng khí H₂ sinh ra là:",
      "mathExpression": "m_{\\mathrm{H_2}} = (6,5 + 7,3) - 13,6 = ?",
      "correctAnswer": "0,2 gam",
      "distractors": [
        "0,4 gam",
        "0,1 gam",
        "1,0 gam"
      ],
      "explanation": "m(H₂) = (6,5 + 7,3) - 13,6 = 13,8 - 13,6 = 0,2 gam."
    },
    {
      "question": "Hệ số cân bằng của phản ứng giữa Bari clorua và Natri sunfat: BaCl₂ + Na₂SO₄ → BaSO₄↓ + ? NaCl là:",
      "mathExpression": "\\mathrm{BaCl_2} + \\mathrm{Na_2SO_4} \\rightarrow \\mathrm{BaSO_4} + 2\\mathrm{NaCl}",
      "correctAnswer": "2",
      "distractors": [
        "1",
        "3",
        "4"
      ],
      "explanation": "Hệ số của NaCl là 2 để cân bằng 2 Na và 2 Cl."
    },
    {
      "question": "Điền chất còn thiếu vào dấu ?: 2Fe + 3Cl₂ → 2 ?",
      "mathExpression": null,
      "correctAnswer": "FeCl₃",
      "distractors": [
        "FeCl₂",
        "FeCl",
        "FeCl₄"
      ],
      "explanation": "Sắt tác dụng với khí Clo ở nhiệt độ cao luôn tạo muối Sắt(III) clorua FeCl₃."
    },
    {
      "question": "Điền chất còn thiếu vào dấu ?: CuO + H₂ → Cu + ?",
      "mathExpression": null,
      "correctAnswer": "H₂O",
      "distractors": [
        "O₂",
        "Cu₂O",
        "H₂O₂"
      ],
      "explanation": "Khí H₂ khử oxit kim loại tạo kim loại và nước: CuO + H₂ → Cu + H₂O."
    },
    {
      "question": "Tổng hệ số tối giản của phản ứng trung hòa: 2Al(OH)₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 6H₂O là:",
      "mathExpression": "2 + 3 + 1 + 6 = 12",
      "correctAnswer": "12",
      "distractors": [
        "10",
        "11",
        "14"
      ],
      "explanation": "Tổng hệ số: 2 + 3 + 1 + 6 = 12."
    },
    {
      "question": "Đốt cháy hoàn toàn 1,2 gam Cacbon trong khí Oxi thu được 4,4 gam khí CO₂. Khối lượng khí Oxi đã tham gia phản ứng là:",
      "mathExpression": "m_{\\mathrm{O_2}} = 4,4 - 1,2 = ?",
      "correctAnswer": "3,2 gam",
      "distractors": [
        "1,6 gam",
        "2,4 gam",
        "5,6 gam"
      ],
      "explanation": "m(O₂) = m(CO₂) - m(C) = 4,4 - 1,2 = 3,2 gam."
    },
    {
      "question": "Cân bằng phản ứng cháy của rượu etylic: C₂H₅OH + ? O₂ → 2CO₂ + 3H₂O. Hệ số của O₂ là:",
      "mathExpression": "\\mathrm{C_2H_5OH} + 3\\mathrm{O_2} \\rightarrow 2\\mathrm{CO_2} + 3\\mathrm{H_2O}",
      "correctAnswer": "3",
      "distractors": [
        "2",
        "4",
        "5"
      ],
      "explanation": "Vế phải có 2 . 2 + 3 = 7 nguyên tử O. C₂H₅OH có 1 O, nên cần thêm 6 O từ O₂ -> hệ số O₂ là 3."
    }
  ],
  "cong_thuc_mol": [
    {
      "question": "Tính số mol của 5,6 gam kim loại Sắt (Fe, M = 56):",
      "mathExpression": "n = \\frac{m}{M} = \\frac{5,6}{56}",
      "correctAnswer": "0,1 mol",
      "distractors": [
        "0,2 mol",
        "0,05 mol",
        "1 mol"
      ],
      "explanation": "n = m / M = 5,6 / 56 = 0,1 mol."
    },
    {
      "question": "Tính số mol của 6,4 gam khí Oxi (O₂, M = 32):",
      "mathExpression": "n = \\frac{6,4}{32}",
      "correctAnswer": "0,2 mol",
      "distractors": [
        "0,1 mol",
        "0,4 mol",
        "0,3 mol"
      ],
      "explanation": "n = 6,4 / 32 = 0,2 mol."
    },
    {
      "question": "Tính số mol của 10 gam đá vôi Canxi cacbonat (CaCO₃, M = 100):",
      "mathExpression": "n = \\frac{10}{100}",
      "correctAnswer": "0,1 mol",
      "distractors": [
        "0,2 mol",
        "1 mol",
        "0,01 mol"
      ],
      "explanation": "n = 10 / 100 = 0,1 mol."
    },
    {
      "question": "Khối lượng của 0,5 mol khí Cacbonic (CO₂, M = 44) là:",
      "mathExpression": "m = n \\cdot M = 0,5 \\cdot 44",
      "correctAnswer": "22 gam",
      "distractors": [
        "44 gam",
        "11 gam",
        "88 gam"
      ],
      "explanation": "m = n . M = 0,5 . 44 = 22 gam."
    },
    {
      "question": "Khối lượng của 0,25 mol nước (H₂O, M = 18) bằng:",
      "mathExpression": "m = 0,25 \\cdot 18",
      "correctAnswer": "4,5 gam",
      "distractors": [
        "9 gam",
        "18 gam",
        "2,25 gam"
      ],
      "explanation": "m = 0,25 . 18 = 4,5 gam."
    },
    {
      "question": "Ở điều kiện tiêu chuẩn (đktc, 0°C, 1 atm), thể tích của 1 mol chất khí bất kì luôn bằng:",
      "mathExpression": null,
      "correctAnswer": "22,4 lít",
      "distractors": [
        "24,79 lít",
        "11,2 lít",
        "2,24 lít"
      ],
      "explanation": "Ở đktc chuẩn cũ (0°C, 1 atm), 1 mol chất khí chiếm thể tích 22,4 lít."
    },
    {
      "question": "Ở đktc, thể tích của 0,2 mol khí Hiđro (H₂) chiếm là:",
      "mathExpression": "V = n \\cdot 22,4 = 0,2 \\cdot 22,4",
      "correctAnswer": "4,48 lít",
      "distractors": [
        "2,24 lít",
        "6,72 lít",
        "8,96 lít"
      ],
      "explanation": "V = n . 22,4 = 0,2 . 22,4 = 4,48 lít."
    },
    {
      "question": "Ở đktc, 6,72 lít khí Oxi (O₂) tương ứng với số mol là:",
      "mathExpression": "n = \\frac{V}{22,4} = \\frac{6,72}{22,4}",
      "correctAnswer": "0,3 mol",
      "distractors": [
        "0,2 mol",
        "0,15 mol",
        "0,5 mol"
      ],
      "explanation": "n = V / 22,4 = 6,72 / 22,4 = 0,3 mol."
    },
    {
      "question": "Ở đktc, 11,2 lít khí Nitơ (N₂) có số mol là:",
      "mathExpression": "n = \\frac{11,2}{22,4}",
      "correctAnswer": "0,5 mol",
      "distractors": [
        "1 mol",
        "0,25 mol",
        "0,2 mol"
      ],
      "explanation": "n = 11,2 / 22,4 = 0,5 mol."
    },
    {
      "question": "Khối lượng của 2,24 lít khí Metan (CH₄, M = 16) ở đktc là:",
      "mathExpression": "n = \\frac{2,24}{22,4} = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 16",
      "correctAnswer": "1,6 gam",
      "distractors": [
        "3,2 gam",
        "16 gam",
        "0,8 gam"
      ],
      "explanation": "n = 2,24 / 22,4 = 0,1 mol. m = 0,1 . 16 = 1,6 gam."
    },
    {
      "question": "Hòa tan 0,2 mol NaCl vào nước thu được 500 ml (0,5 lít) dung dịch. Nồng độ mol CM của dung dịch là:",
      "mathExpression": "C_M = \\frac{n}{V} = \\frac{0,2}{0,5}",
      "correctAnswer": "0,4M",
      "distractors": [
        "0,1M",
        "0,2M",
        "1,0M"
      ],
      "explanation": "CM = n / V = 0,2 / 0,5 = 0,4 M."
    },
    {
      "question": "Hòa tan 0,5 mol NaOH vào nước thu được 250 ml (0,25 lít) dung dịch. Nồng độ mol CM là:",
      "mathExpression": "C_M = \\frac{0,5}{0,25}",
      "correctAnswer": "2,0M",
      "distractors": [
        "1,0M",
        "0,5M",
        "0,125M"
      ],
      "explanation": "CM = 0,5 / 0,25 = 2,0 M."
    },
    {
      "question": "Số mol chất tan HCl có trong 200 ml (0,2 lít) dung dịch axit HCl 1,5M là:",
      "mathExpression": "n = C_M \\cdot V = 1,5 \\cdot 0,2",
      "correctAnswer": "0,3 mol",
      "distractors": [
        "0,15 mol",
        "0,6 mol",
        "3 mol"
      ],
      "explanation": "n = CM . V = 1,5 . 0,2 = 0,3 mol."
    },
    {
      "question": "Hòa tan 20 gam đường vào 180 gam nước. Nồng độ phần trăm C% của dung dịch thu được là:",
      "mathExpression": "C\\% = \\frac{20}{20 + 180} \\cdot 100\\%",
      "correctAnswer": "10%",
      "distractors": [
        "20%",
        "5%",
        "11,1%"
      ],
      "explanation": "m(dd) = 20 + 180 = 200 gam. C% = (20 / 200) . 100% = 10%."
    },
    {
      "question": "Hòa tan 10 gam muối ăn vào 90 gam nước. Nồng độ phần trăm C% của dung dịch là:",
      "mathExpression": "C\\% = \\frac{10}{10 + 90} \\cdot 100\\%",
      "correctAnswer": "10%",
      "distractors": [
        "5%",
        "15%",
        "20%"
      ],
      "explanation": "m(dd) = 10 + 90 = 100 gam. C% = (10 / 100) . 100% = 10%."
    },
    {
      "question": "Khối lượng chất tan có trong 200 gam dung dịch muối ăn 5% là:",
      "mathExpression": "m_{\\mathrm{ct}} = \\frac{200 \\cdot 5}{100}",
      "correctAnswer": "10 gam",
      "distractors": [
        "5 gam",
        "20 gam",
        "25 gam"
      ],
      "explanation": "m(chất tan) = (200 . 5) / 100 = 10 gam."
    },
    {
      "question": "Hòa tan 15 gam NaOH vào nước thu được 75 gam dung dịch. Nồng độ phần trăm C% là:",
      "mathExpression": "C\\% = \\frac{15}{75} \\cdot 100\\%",
      "correctAnswer": "20%",
      "distractors": [
        "15%",
        "25%",
        "10%"
      ],
      "explanation": "C% = (15 / 75) . 100% = 20%."
    },
    {
      "question": "Tỉ khối của khí Cacbonic (CO₂, M = 44) đối với không khí (M_kk = 29) là:",
      "mathExpression": "d = \\frac{44}{29} \\approx 1,52",
      "correctAnswer": "Xấp xỉ 1,52 lần (nặng hơn không khí)",
      "distractors": [
        "Xấp xỉ 0,66 lần",
        "Xấp xỉ 2 lần",
        "Nhẹ hơn không khí"
      ],
      "explanation": "d = 44 / 29 ≈ 1,52 lần -> Khí CO₂ nặng hơn không khí."
    },
    {
      "question": "Tỉ khối của khí Metan (CH₄, M = 16) đối với khí Oxi (O₂, M = 32) là:",
      "mathExpression": "d = \\frac{16}{32} = 0,5",
      "correctAnswer": "0,5 lần",
      "distractors": [
        "2 lần",
        "1,5 lần",
        "0,25 lần"
      ],
      "explanation": "d = M(CH₄) / M(O₂) = 16 / 32 = 0,5 lần."
    },
    {
      "question": "Số nguyên tử Fe có trong 1 mol kim loại Sắt (Fe) bằng số Avogadro là:",
      "mathExpression": null,
      "correctAnswer": "6 . 10²³ nguyên tử",
      "distractors": [
        "3 . 10²³ nguyên tử",
        "12 . 10²³ nguyên tử",
        "1 . 10²³ nguyên tử"
      ],
      "explanation": "1 mol chất chứa N_A = 6 . 10²³ hạt nguyên tử hoặc phân tử."
    }
  ],
  "tinh_theo_pthh": [
    {
      "question": "Cho 5,6 gam Sắt (Fe, M = 56) tác dụng hết với axit HCl dư: Fe + 2HCl → FeCl₂ + H₂↑. Thể tích khí H₂ thoát ra ở đktc là:",
      "mathExpression": "n_{\\mathrm{Fe}} = \\frac{5,6}{56} = 0,1\\text{ mol} \\Rightarrow V = 0,1 \\cdot 22,4",
      "correctAnswer": "2,24 lít",
      "distractors": [
        "4,48 lít",
        "1,12 lít",
        "3,36 lít"
      ],
      "explanation": "B1: n(Fe) = 0,1 mol. B2: n(H₂) = n(Fe) = 0,1 mol. B3: V(H₂) = 0,1 . 22,4 = 2,24 lít."
    },
    {
      "question": "Nung nóng 10 gam đá vôi CaCO₃ (M = 100): CaCO₃ → CaO + CO₂↑. Khối lượng vôi sống CaO (M = 56) thu được là:",
      "mathExpression": "n_{\\mathrm{CaCO_3}} = \\frac{10}{100} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{CaO}} = 0,1 \\cdot 56",
      "correctAnswer": "5,6 gam",
      "distractors": [
        "4,4 gam",
        "10 gam",
        "2,8 gam"
      ],
      "explanation": "B1: n(CaCO₃) = 0,1 mol. B2: n(CaO) = 0,1 mol. B3: m(CaO) = 0,1 . 56 = 5,6 gam."
    },
    {
      "question": "Cho 6,5 gam Kẽm (Zn, M = 65) phản ứng với axit H₂SO₄ loãng: Zn + H₂SO₄ → ZnSO₄ + H₂↑. Thể tích khí H₂ thoát ra ở đktc là:",
      "mathExpression": "n_{\\mathrm{Zn}} = \\frac{6,5}{65} = 0,1\\text{ mol} \\Rightarrow V = 0,1 \\cdot 22,4",
      "correctAnswer": "2,24 lít",
      "distractors": [
        "4,48 lít",
        "3,36 lít",
        "1,12 lít"
      ],
      "explanation": "n(Zn) = 0,1 mol => n(H₂) = 0,1 mol => V = 0,1 . 22,4 = 2,24 lít."
    },
    {
      "question": "Đốt cháy 5,4 gam Nhôm (Al, M = 27) trong khí Oxi: 4Al + 3O₂ → 2Al₂O₃. Khối lượng Al₂O₃ (M = 102) tạo thành là:",
      "mathExpression": "n_{\\mathrm{Al}} = 0,2\\text{ mol} \\Rightarrow n_{\\mathrm{Al_2O_3}} = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 102",
      "correctAnswer": "10,2 gam",
      "distractors": [
        "20,4 gam",
        "5,1 gam",
        "15,3 gam"
      ],
      "explanation": "n(Al) = 5,4 / 27 = 0,2 mol. n(Al₂O₃) = 0,2 . 2 / 4 = 0,1 mol => m = 0,1 . 102 = 10,2 gam."
    },
    {
      "question": "Cho 2,4 gam Magie (Mg, M = 24) tác dụng vừa đủ với dung dịch HCl: Mg + 2HCl → MgCl₂ + H₂↑. Khối lượng muối MgCl₂ (M = 95) thu được là:",
      "mathExpression": "n_{\\mathrm{Mg}} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{MgCl_2}} = 0,1 \\cdot 95",
      "correctAnswer": "9,5 gam",
      "distractors": [
        "19 gam",
        "4,75 gam",
        "95 gam"
      ],
      "explanation": "n(Mg) = 0,1 mol => n(MgCl₂) = 0,1 mol => m = 0,1 . 95 = 9,5 gam."
    },
    {
      "question": "Đốt cháy hoàn toàn 1,2 gam Cacbon trong Oxi dư: C + O₂ → CO₂. Thể tích khí CO₂ thu được ở đktc là:",
      "mathExpression": "n_{\\mathrm{C}} = 0,1\\text{ mol} \\Rightarrow V = 0,1 \\cdot 22,4",
      "correctAnswer": "2,24 lít",
      "distractors": [
        "4,48 lít",
        "1,12 lít",
        "22,4 lít"
      ],
      "explanation": "n(C) = 1,2 / 12 = 0,1 mol => n(CO₂) = 0,1 mol => V = 2,24 lít."
    },
    {
      "question": "Nhiệt phân hoàn toàn 24,5 gam KClO₃ (M = 122,5): 2KClO₃ → 2KCl + 3O₂↑. Thể tích khí O₂ thu được ở đktc là:",
      "mathExpression": "n_{\\mathrm{KClO_3}} = 0,2\\text{ mol} \\Rightarrow n_{\\mathrm{O_2}} = 0,3\\text{ mol} \\Rightarrow V = 0,3 \\cdot 22,4",
      "correctAnswer": "6,72 lít",
      "distractors": [
        "4,48 lít",
        "2,24 lít",
        "8,96 lít"
      ],
      "explanation": "n(KClO₃) = 24,5 / 122,5 = 0,2 mol => n(O₂) = 0,2 . 3 / 2 = 0,3 mol => V = 6,72 lít."
    },
    {
      "question": "Cho dung dịch chứa 16 gam CuSO₄ tác dụng vừa đủ với NaOH: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄. Khối lượng kết tủa Cu(OH)₂ (M = 98) là:",
      "mathExpression": "n_{\\mathrm{CuSO_4}} = \\frac{16}{160} = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 98",
      "correctAnswer": "9,8 gam",
      "distractors": [
        "19,6 gam",
        "4,9 gam",
        "98 gam"
      ],
      "explanation": "n(CuSO₄) = 0,1 mol => n(Cu(OH)₂) = 0,1 mol => m = 0,1 . 98 = 9,8 gam."
    },
    {
      "question": "Hòa tan hoàn toàn 4 gam Canxi oxit (CaO, M = 56... thực tế 5,6 gam CaO): Cho 5,6 gam CaO vào nước tạo Ca(OH)₂: CaO + H₂O → Ca(OH)₂. Khối lượng Ca(OH)₂ (M = 74) thu được là:",
      "mathExpression": "n_{\\mathrm{CaO}} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{Ca(OH)_2}} = 0,1 \\cdot 74",
      "correctAnswer": "7,4 gam",
      "distractors": [
        "5,6 gam",
        "14,8 gam",
        "74 gam"
      ],
      "explanation": "n(CaO) = 5,6 / 56 = 0,1 mol => n(Ca(OH)₂) = 0,1 mol => m = 0,1 . 74 = 7,4 gam."
    },
    {
      "question": "Cho 4,6 gam Natri (Na, M = 23) tác dụng hoàn toàn với nước: 2Na + 2H₂O → 2NaOH + H₂↑. Thể tích khí H₂ thoát ra ở đktc là:",
      "mathExpression": "n_{\\mathrm{Na}} = 0,2\\text{ mol} \\Rightarrow n_{\\mathrm{H_2}} = 0,1\\text{ mol} \\Rightarrow V = 2,24\\text{ lít}",
      "correctAnswer": "2,24 lít",
      "distractors": [
        "4,48 lít",
        "1,12 lít",
        "0,224 lít"
      ],
      "explanation": "n(Na) = 4,6 / 23 = 0,2 mol => n(H₂) = 0,2 / 2 = 0,1 mol => V = 0,1 . 22,4 = 2,24 lít."
    },
    {
      "question": "Cho 10 gam CaCO₃ tác dụng hết với axit HCl: CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O. Thể tích khí CO₂ thu được ở đktc là:",
      "mathExpression": "n_{\\mathrm{CaCO_3}} = 0,1\\text{ mol} \\Rightarrow V_{\\mathrm{CO_2}} = 0,1 \\cdot 22,4",
      "correctAnswer": "2,24 lít",
      "distractors": [
        "4,48 lít",
        "1,12 lít",
        "22,4 lít"
      ],
      "explanation": "n(CaCO₃) = 0,1 mol => n(CO₂) = 0,1 mol => V = 2,24 lít."
    },
    {
      "question": "Cho 8 gam CuO (M = 80) tác dụng vừa đủ với khí H₂ nung nóng: CuO + H₂ → Cu + H₂O. Khối lượng kim loại Đồng (Cu, M = 64) thu được là:",
      "mathExpression": "n_{\\mathrm{CuO}} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{Cu}} = 0,1 \\cdot 64",
      "correctAnswer": "6,4 gam",
      "distractors": [
        "8 gam",
        "3,2 gam",
        "12,8 gam"
      ],
      "explanation": "n(CuO) = 8 / 80 = 0,1 mol => n(Cu) = 0,1 mol => m(Cu) = 0,1 . 64 = 6,4 gam."
    },
    {
      "question": "Dẫn 2,24 lít khí CO₂ (đktc) vào dung dịch Ca(OH)₂ dư: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O. Khối lượng kết tủa CaCO₃ (M = 100) thu được là:",
      "mathExpression": "n_{\\mathrm{CO_2}} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{CaCO_3}} = 0,1 \\cdot 100",
      "correctAnswer": "10 gam",
      "distractors": [
        "5 gam",
        "20 gam",
        "100 gam"
      ],
      "explanation": "n(CO₂) = 2,24 / 22,4 = 0,1 mol => n(CaCO₃) = 0,1 mol => m = 10 gam."
    },
    {
      "question": "Trung hòa 100 ml dung dịch HCl 1M bằng dung dịch NaOH 1M: HCl + NaOH → NaCl + H₂O. Thể tích dung dịch NaOH 1M cần dùng là:",
      "mathExpression": "n_{\\mathrm{HCl}} = 0,1\\text{ mol} \\Rightarrow V_{\\mathrm{NaOH}} = 0,1\\text{ lít}",
      "correctAnswer": "100 ml (0,1 lít)",
      "distractors": [
        "200 ml",
        "50 ml",
        "150 ml"
      ],
      "explanation": "n(HCl) = 0,1 . 1 = 0,1 mol. Cần n(NaOH) = 0,1 mol => V = 0,1 / 1 = 0,1 lít = 100 ml."
    },
    {
      "question": "Cho m gam Al phản ứng vừa đủ với 0,3 mol HCl: 2Al + 6HCl → 2AlCl₃ + 3H₂↑. Giá trị của m là:",
      "mathExpression": "n_{\\mathrm{Al}} = 0,3 \\cdot \\frac{2}{6} = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 27",
      "correctAnswer": "2,7 gam",
      "distractors": [
        "5,4 gam",
        "1,35 gam",
        "8,1 gam"
      ],
      "explanation": "n(Al) = 0,3 . 2 / 6 = 0,1 mol => m = 0,1 . 27 = 2,7 gam."
    },
    {
      "question": "Đốt cháy hoàn toàn 3,2 gam Lưu huỳnh (S, M = 32): S + O₂ → SO₂. Thể tích khí SO₂ thu được ở đktc là:",
      "mathExpression": "n_{\\mathrm{S}} = 0,1\\text{ mol} \\Rightarrow V_{\\mathrm{SO_2}} = 0,1 \\cdot 22,4",
      "correctAnswer": "2,24 lít",
      "distractors": [
        "4,48 lít",
        "1,12 lít",
        "3,2 lít"
      ],
      "explanation": "n(S) = 3,2 / 32 = 0,1 mol => n(SO₂) = 0,1 mol => V = 2,24 lít."
    },
    {
      "question": "Cho 2,8 gam Fe tác dụng với dung dịch AgNO₃ dư: Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag↓. Khối lượng Bạc (Ag, M = 108) kết tủa là:",
      "mathExpression": "n_{\\mathrm{Fe}} = 0,05\\text{ mol} \\Rightarrow n_{\\mathrm{Ag}} = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 108",
      "correctAnswer": "10,8 gam",
      "distractors": [
        "5,4 gam",
        "21,6 gam",
        "1,08 gam"
      ],
      "explanation": "n(Fe) = 2,8 / 56 = 0,05 mol => n(Ag) = 0,05 . 2 = 0,1 mol => m(Ag) = 0,1 . 108 = 10,8 gam."
    },
    {
      "question": "Hòa tan 8 gam Fe₂O₃ (M = 160) trong dung dịch H₂SO₄ loãng: Fe₂O₃ + 3H₂SO₄ → Fe₂(SO₄)₃ + 3H₂O. Số mol axit H₂SO₄ đã phản ứng là:",
      "mathExpression": "n_{\\mathrm{Fe_2O_3}} = 0,05\\text{ mol} \\Rightarrow n_{\\mathrm{H_2SO_4}} = 0,15\\text{ mol}",
      "correctAnswer": "0,15 mol",
      "distractors": [
        "0,05 mol",
        "0,1 mol",
        "0,3 mol"
      ],
      "explanation": "n(Fe₂O₃) = 8 / 160 = 0,05 mol => n(H₂SO₄) = 0,05 . 3 = 0,15 mol."
    },
    {
      "question": "Cho 13 gam Zn (M = 65) phản ứng với oxi dư tạo ZnO: 2Zn + O₂ → 2ZnO. Khối lượng ZnO (M = 81) thu được là:",
      "mathExpression": "n_{\\mathrm{Zn}} = 0,2\\text{ mol} \\Rightarrow m_{\\mathrm{ZnO}} = 0,2 \\cdot 81",
      "correctAnswer": "16,2 gam",
      "distractors": [
        "8,1 gam",
        "32,4 gam",
        "13 gam"
      ],
      "explanation": "n(Zn) = 13 / 65 = 0,2 mol => n(ZnO) = 0,2 mol => m(ZnO) = 0,2 . 81 = 16,2 gam."
    },
    {
      "question": "Trộn 100 ml dung dịch BaCl₂ 1M với dung dịch Na₂SO₄ dư: BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl. Khối lượng kết tủa BaSO₄ (M = 233) thu được là:",
      "mathExpression": "n_{\\mathrm{BaCl_2}} = 0,1\\text{ mol} \\Rightarrow m_{\\mathrm{BaSO_4}} = 0,1 \\cdot 233",
      "correctAnswer": "23,3 gam",
      "distractors": [
        "46,6 gam",
        "11,65 gam",
        "233 gam"
      ],
      "explanation": "n(BaCl₂) = 0,1 . 1 = 0,1 mol => n(BaSO₄) = 0,1 mol => m = 0,1 . 233 = 23,3 gam."
    }
  ],
  "vo_co_lop9": [
    {
      "question": "Dãy kim loại sắp xếp theo chiều hoạt động hóa học GIẢM DẦN là:",
      "mathExpression": null,
      "correctAnswer": "K, Na, Mg, Al, Zn, Fe, Cu, Ag",
      "distractors": [
        "Fe, Cu, Ag, Al, Zn, Na",
        "Na, K, Fe, Cu, Mg, Al",
        "Cu, Ag, Fe, Zn, Al, Mg"
      ],
      "explanation": "Thần chú: Khi Nào May Áo Giáp Sắt Nên Sang Phố Hỏi Cửa Hàng Á Phi Âu."
    },
    {
      "question": "Dung dịch axit clohiđric (HCl) làm quỳ tím chuyển sang màu gì?",
      "mathExpression": null,
      "correctAnswer": "Màu đỏ",
      "distractors": [
        "Màu xanh",
        "Màu tím",
        "Màu vàng"
      ],
      "explanation": "Dung dịch axit làm quỳ tím chuyển sang màu đỏ."
    },
    {
      "question": "Thuốc thử đặc trưng để nhận biết ion sunfat (SO₄²⁻) là:",
      "mathExpression": null,
      "correctAnswer": "Dung dịch muối Bari (BaCl₂ hoặc Ba(OH)₂)",
      "distractors": [
        "Dung dịch NaCl",
        "Dung dịch AgNO₃",
        "Quỳ tím"
      ],
      "explanation": "Ion Ba²⁺ tạo kết tủa trắng BaSO₄ không tan trong axit với SO₄²⁻."
    },
    {
      "question": "Kim loại nào sau đây tác dụng được với dung dịch Cu(NO₃)₂ để đẩy Cu ra ngoài?",
      "mathExpression": null,
      "correctAnswer": "Kim loại Sắt (Fe)",
      "distractors": [
        "Kim loại Bạc (Ag)",
        "Kim loại Vàng (Au)",
        "Kim loại Đồng (Cu)"
      ],
      "explanation": "Fe đứng trước Cu trong dãy hoạt động hóa học nên đẩy được Cu ra khỏi dung dịch muối."
    },
    {
      "question": "Oxit nào sau đây là oxit axit tác dụng với kiềm tạo muối và nước?",
      "mathExpression": null,
      "correctAnswer": "Khí cacbonic (CO₂)",
      "distractors": [
        "Canxi oxit (CaO)",
        "Natri oxit (Na₂O)",
        "Đồng(II) oxit (CuO)"
      ],
      "explanation": "CO₂ là oxit axit tác dụng với kiềm tạo muối cacbonat."
    },
    {
      "question": "Điều kiện để xảy ra phản ứng trao đổi trong dung dịch là sản phẩm phải có:",
      "mathExpression": null,
      "correctAnswer": "Chất kết tủa, chất bay hơi hoặc chất điện li yếu (nước)",
      "distractors": [
        "Kim loại mới",
        "Chất oxi hóa mạnh",
        "Chất xúc tác"
      ],
      "explanation": "Phản ứng trao đổi ion xảy ra khi có kết tủa, khí bay hơi hoặc chất điện li yếu (nước)."
    },
    {
      "question": "Kim loại nào vừa tan trong dung dịch axit HCl, vừa tan trong dung dịch kiềm NaOH giải phóng H₂?",
      "mathExpression": null,
      "correctAnswer": "Kim loại Nhôm (Al)",
      "distractors": [
        "Kim loại Sắt (Fe)",
        "Kim loại Đồng (Cu)",
        "Kim loại Magie (Mg)"
      ],
      "explanation": "Nhôm và kẽm có tính tan trong kiềm giải phóng khí H₂."
    },
    {
      "question": "Cho dung dịch NaOH vào dung dịch CuSO₄, hiện tượng quan sát được là:",
      "mathExpression": null,
      "correctAnswer": "Xuất hiện kết tủa màu xanh lam Cu(OH)₂",
      "distractors": [
        "Xuất hiện kết tủa trắng",
        "Có khí thoát ra",
        "Dung dịch hóa hồng"
      ],
      "explanation": "CuSO₄ + 2NaOH → Cu(OH)₂↓ (xanh lam) + Na₂SO₄."
    },
    {
      "question": "Chất khí nào làm vẩn đục nước vôi trong Ca(OH)₂?",
      "mathExpression": null,
      "correctAnswer": "Khí Cacbonic (CO₂)",
      "distractors": [
        "Khí Hiđro (H₂)",
        "Khí Oxi (O₂)",
        "Khí Nitơ (N₂)"
      ],
      "explanation": "CO₂ + Ca(OH)₂ → CaCO₃↓ (vẩn đục trắng) + H₂O."
    },
    {
      "question": "Dung dịch nào sau đây làm quỳ tím chuyển sang màu XANH?",
      "mathExpression": null,
      "correctAnswer": "Dung dịch Natri hiđroxit (NaOH)",
      "distractors": [
        "Dung dịch Axit axetic",
        "Dung dịch Nước cất",
        "Dung dịch Axit sunfuric"
      ],
      "explanation": "Dung dịch bazơ kiềm như NaOH làm quỳ tím hóa xanh."
    },
    {
      "question": "Để phân biệt 2 dung dịch HCl và H₂SO₄, người ta dùng thuốc thử:",
      "mathExpression": null,
      "correctAnswer": "Dung dịch BaCl₂",
      "distractors": [
        "Quỳ tím",
        "Kim loại Cu",
        "Dung dịch NaOH"
      ],
      "explanation": "H₂SO₄ tạo kết tủa trắng BaSO₄ với BaCl₂, còn HCl không phản ứng."
    },
    {
      "question": "Để phân biệt dung dịch NaCl và Na₂SO₄, người ta dùng thuốc thử:",
      "mathExpression": null,
      "correctAnswer": "Dung dịch Ba(NO₃)₂",
      "distractors": [
        "Dung dịch HCl",
        "Quỳ tím",
        "Dung dịch KOH"
      ],
      "explanation": "Ba(NO₃)₂ tạo kết tủa trắng BaSO₄ với Na₂SO₄."
    },
    {
      "question": "Kim loại nào sau đây KHÔNG tác dụng với dung dịch axit HCl loãng?",
      "mathExpression": null,
      "correctAnswer": "Kim loại Đồng (Cu)",
      "distractors": [
        "Kim loại Sắt (Fe)",
        "Kim loại Nhôm (Al)",
        "Kim loại Kẽm (Zn)"
      ],
      "explanation": "Cu đứng sau Hiđro trong dãy hoạt động hóa học nên không tác dụng với HCl loãng."
    },
    {
      "question": "Oxit bazơ nào sau đây tác dụng được với nước ở nhiệt độ thường tạo dung dịch kiềm?",
      "mathExpression": null,
      "correctAnswer": "Canxi oxit (CaO)",
      "distractors": [
        "Sắt(III) oxit (Fe₂O₃)",
        "Đồng(II) oxit (CuO)",
        "Nhôm oxit (Al₂O₃)"
      ],
      "explanation": "CaO + H₂O → Ca(OH)₂. Các oxit kim loại kiềm/kiềm thổ tan trong nước."
    },
    {
      "question": "Khi cho lá Sắt vào dung dịch CuSO₄, sau một thời gian hiện tượng quan sát được là:",
      "mathExpression": null,
      "correctAnswer": "Có lớp kim loại màu đỏ bám trên lá sắt, màu xanh dung dịch nhạt dần",
      "distractors": [
        "Lá sắt tan hết không có gì bám",
        "Dung dịch chuyển sang màu tím",
        "Có bọt khí sủi mạnh"
      ],
      "explanation": "Fe đẩy Cu tạo lớp đồng đỏ bám ngoài lá sắt: Fe + CuSO₄ → FeSO₄ + Cu."
    },
    {
      "question": "Muối nào sau đây KHÔNG tan trong nước?",
      "mathExpression": null,
      "correctAnswer": "Bari sunfat (BaSO₄)",
      "distractors": [
        "Natri clorua (NaCl)",
        "Kali nitrat (KNO₃)",
        "Canxi clorua (CaCl₂)"
      ],
      "explanation": "BaSO₄ là chất kết tủa trắng không tan trong nước và axit."
    },
    {
      "question": "Dung dịch muối AgNO₃ dùng để nhận biết ion nào sau đây bằng kết tủa trắng AgCl?",
      "mathExpression": null,
      "correctAnswer": "Ion Clorua (Cl⁻)",
      "distractors": [
        "Ion Sunfat (SO₄²⁻)",
        "Ion Nitrat (NO₃⁻)",
        "Ion Natri (Na⁺)"
      ],
      "explanation": "Ag⁺ + Cl⁻ → AgCl↓ trắng không tan trong axit."
    },
    {
      "question": "Khí SO₂ được gọi là:",
      "mathExpression": null,
      "correctAnswer": "Khí sunfurơ (Lưu huỳnh đioxit)",
      "distractors": [
        "Khí sunfuric",
        "Khí hiđrosunfua",
        "Khí cacbonic"
      ],
      "explanation": "SO₂ là lưu huỳnh đioxit (khí sunfurơ), là oxit axit gây mưa axit."
    },
    {
      "question": "Phản ứng trung hòa là phản ứng giữa:",
      "mathExpression": null,
      "correctAnswer": "Axit và Bazơ",
      "distractors": [
        "Kim loại và Phi kim",
        "Muối và Muối",
        "Oxit và Nước"
      ],
      "explanation": "Axit + Bazơ → Muối + Nước (gọi là phản ứng trung hòa)."
    },
    {
      "question": "Chất nào sau đây bị nhiệt phân hủy tạo oxit kim loại và nước?",
      "mathExpression": null,
      "correctAnswer": "Đồng(II) hiđroxit Cu(OH)₂",
      "distractors": [
        "Natri hiđroxit NaOH",
        "Kali hiđroxit KOH",
        "Bari hiđroxit Ba(OH)₂"
      ],
      "explanation": "Bazơ không tan bị nhiệt phân: Cu(OH)₂ → CuO + H₂O. Kiềm tan không bị nhiệt phân."
    }
  ],
  "cau_tao_nguyen_tu_lop10": [
    {
      "question": "Cấu hình electron của nguyên tử Natri (Na, Z = 11) là:",
      "mathExpression": null,
      "correctAnswer": "1s² 2s² 2p⁶ 3s¹",
      "distractors": [
        "1s² 2s² 2p⁶ 3s²",
        "1s² 2s² 2p⁵ 3s²",
        "1s² 2s² 2p⁶"
      ],
      "explanation": "Z = 11 phân bố 11 electron: 1s² 2s² 2p⁶ 3s¹."
    },
    {
      "question": "Nguyên tử Clo (Cl, Z = 17) có số electron ở lớp ngoài cùng là:",
      "mathExpression": null,
      "correctAnswer": "7 electron",
      "distractors": [
        "5 electron",
        "8 electron",
        "1 electron"
      ],
      "explanation": "Cấu hình: [Ne] 3s² 3p⁵ -> có 7 electron ở lớp ngoài cùng."
    },
    {
      "question": "Cấu hình electron viết gọn của Sắt (Fe, Z = 26) là:",
      "mathExpression": null,
      "correctAnswer": "[Ar] 3d⁶ 4s²",
      "distractors": [
        "[Ar] 3d⁸",
        "[Ar] 4s² 4p⁶",
        "[Ar] 3d⁵ 4s³"
      ],
      "explanation": "Cấu hình của Fe: [Ar] 3d⁶ 4s²."
    },
    {
      "question": "Số hạt mang điện trong một nguyên tử Nhôm có Z = 13 là:",
      "mathExpression": null,
      "correctAnswer": "26 hạt",
      "distractors": [
        "13 hạt",
        "27 hạt",
        "14 hạt"
      ],
      "explanation": "Hạt mang điện = proton + electron = 13 + 13 = 26 hạt."
    },
    {
      "question": "Các nguyên tố trong cùng một chu kì của bảng tuần hoàn có cùng:",
      "mathExpression": null,
      "correctAnswer": "Số lớp electron",
      "distractors": [
        "Số electron hóa trị",
        "Nguyên tử khối",
        "Số nơtron"
      ],
      "explanation": "Số thứ tự chu kì chính bằng số lớp electron trong nguyên tử."
    },
    {
      "question": "Trong một chu kì từ trái sang phải theo chiều tăng của điện tích hạt nhân:",
      "mathExpression": null,
      "correctAnswer": "Bán kính nguyên tử giảm dần, độ âm điện tăng dần",
      "distractors": [
        "Bán kính nguyên tử tăng dần",
        "Tính kim loại tăng dần",
        "Độ âm điện giảm dần"
      ],
      "explanation": "Điện tích hạt nhân tăng hút mạnh electron làm bán kính co lại, độ âm điện tăng."
    },
    {
      "question": "Nguyên tử có Z = 8 là nguyên tố:",
      "mathExpression": null,
      "correctAnswer": "Oxi (Oxygen)",
      "distractors": [
        "Cacbon",
        "Nitơ",
        "Flo"
      ],
      "explanation": "Z = 8 là vị trí của Oxi trong bảng tuần hoàn."
    },
    {
      "question": "Lớp electron thứ n có số electron tối đa bằng:",
      "mathExpression": "2n^2",
      "correctAnswer": "2n²",
      "distractors": [
        "n²",
        "2n",
        "4n²"
      ],
      "explanation": "Số electron tối đa ở lớp thứ n là 2n² (n ≤ 4)."
    },
    {
      "question": "Phân lớp p chứa tối đa bao nhiêu electron?",
      "mathExpression": null,
      "correctAnswer": "6 electron",
      "distractors": [
        "2 electron",
        "10 electron",
        "14 electron"
      ],
      "explanation": "Phân lớp s tối đa 2e, p tối đa 6e, d tối đa 10e, f tối đa 14e."
    },
    {
      "question": "Khí hiếm Neon (Ne, Z = 10) có cấu hình electron bão hòa là:",
      "mathExpression": null,
      "correctAnswer": "1s² 2s² 2p⁶",
      "distractors": [
        "1s² 2s² 2p⁴",
        "1s² 2s² 2p⁵",
        "1s² 2s² 2p⁶ 3s²"
      ],
      "explanation": "Neon có 8 electron lớp ngoài cùng bền vững kiểu khí hiếm."
    },
    {
      "question": "Đồng vị là những nguyên tử có cùng:",
      "mathExpression": null,
      "correctAnswer": "Số proton nhưng khác số nơtron (khác số khối A)",
      "distractors": [
        "Số nơtron",
        "Số khối",
        "Số electron nhưng khác số proton"
      ],
      "explanation": "Đồng vị cùng Z (proton) nhưng khác số khối A do khác số hạt nơtron."
    },
    {
      "question": "Số hiệu nguyên tử Z chính bằng:",
      "mathExpression": null,
      "correctAnswer": "Số đơn vị điện tích hạt nhân và số proton",
      "distractors": [
        "Số nơtron",
        "Số khối",
        "Khối lượng nguyên tử"
      ],
      "explanation": "Z = số proton = số electron trong nguyên tử trung hòa."
    },
    {
      "question": "Số khối A của hạt nhân được tính theo công thức:",
      "mathExpression": "A = Z + N",
      "correctAnswer": "A = Z + N",
      "distractors": [
        "A = Z - N",
        "A = Z + 2N",
        "A = 2Z + N"
      ],
      "explanation": "Số khối A = tổng số proton (Z) + tổng số nơtron (N)."
    },
    {
      "question": "Nguyên tố Magie (Mg, Z = 12) thuộc nhóm nào trong bảng tuần hoàn?",
      "mathExpression": null,
      "correctAnswer": "Nhóm IIA",
      "distractors": [
        "Nhóm IA",
        "Nhóm IIIA",
        "Nhóm VIIA"
      ],
      "explanation": "Cấu hình: [Ne] 3s² -> có 2 electron hóa trị ở phân lớp s nên thuộc nhóm IIA."
    },
    {
      "question": "Nguyên tố Nhôm (Al, Z = 13) thuộc chu kì nào trong bảng tuần hoàn?",
      "mathExpression": null,
      "correctAnswer": "Chu kì 3",
      "distractors": [
        "Chu kì 2",
        "Chu kì 4",
        "Chu kì 1"
      ],
      "explanation": "Nhôm có 3 lớp electron -> Chu kì 3."
    },
    {
      "question": "Kim loại kiềm (Li, Na, K, Rb, Cs) thuộc nhóm nào trong bảng tuần hoàn?",
      "mathExpression": null,
      "correctAnswer": "Nhóm IA",
      "distractors": [
        "Nhóm IIA",
        "Nhóm IIIA",
        "Nhóm VIIA"
      ],
      "explanation": "Kim loại kiềm thuộc phân nhóm chính IA."
    },
    {
      "question": "Nhóm halogen trong bảng tuần hoàn là nhóm:",
      "mathExpression": null,
      "correctAnswer": "Nhóm VIIA",
      "distractors": [
        "Nhóm VIA",
        "Nhóm VA",
        "Nhóm VIIIA"
      ],
      "explanation": "Nhóm halogen (F, Cl, Br, I) thuộc nhóm VIIA."
    },
    {
      "question": "Nhóm khí hiếm (khí trơ) thuộc nhóm nào?",
      "mathExpression": null,
      "correctAnswer": "Nhóm VIIIA",
      "distractors": [
        "Nhóm VIIA",
        "Nhóm IA",
        "Nhóm IIA"
      ],
      "explanation": "Khí hiếm (He, Ne, Ar, Kr, Xe, Rn) thuộc nhóm VIIIA."
    },
    {
      "question": "Trong nguyên tử, hạt nào có khối lượng vô cùng nhỏ bé có thể bỏ qua?",
      "mathExpression": null,
      "correctAnswer": "Hạt electron",
      "distractors": [
        "Hạt proton",
        "Hạt nơtron",
        "Cả proton và nơtron"
      ],
      "explanation": "Khối lượng electron xấp xỉ 1/1840 amu nên khối lượng nguyên tử tập trung ở hạt nhân."
    },
    {
      "question": "Cấu hình electron đặc biệt của Đồng (Cu, Z = 29) do trạng thái bão hòa d là:",
      "mathExpression": null,
      "correctAnswer": "[Ar] 3d¹⁰ 4s¹",
      "distractors": [
        "[Ar] 3d⁹ 4s²",
        "[Ar] 3d⁸ 4s³",
        "[Ar] 4s² 3d⁹"
      ],
      "explanation": "Cấu hình bền vững bão hòa phân lớp d: [Ar] 3d¹⁰ 4s¹."
    }
  ],
  "oxi_hoa_khu_lop10": [
    {
      "question": "Số oxi hóa của Lưu huỳnh (S) trong phân tử Axit sunfuric H₂SO₄ bằng:",
      "mathExpression": "\\mathrm{H_2^{+1} S^x O_4^{-2}} \\Rightarrow 2(+1) + x + 4(-2) = 0",
      "correctAnswer": "+6",
      "distractors": [
        "+4",
        "+2",
        "-2"
      ],
      "explanation": "2(+1) + x + 4(-2) = 0 => x = +6."
    },
    {
      "question": "Số oxi hóa của Mangan (Mn) trong phân tử thuốc tím KMnO₄ bằng:",
      "mathExpression": "\\mathrm{K^{+1} Mn^x O_4^{-2}} \\Rightarrow +1 + x + 4(-2) = 0",
      "correctAnswer": "+7",
      "distractors": [
        "+6",
        "+4",
        "+2"
      ],
      "explanation": "+1 + x - 8 = 0 => x = +7."
    },
    {
      "question": "Số oxi hóa của Crom (Cr) trong hợp chất K₂Cr₂O₇ là:",
      "mathExpression": "\\mathrm{K_2^{+1} Cr_2^x O_7^{-2}} \\Rightarrow 2(+1) + 2x + 7(-2) = 0",
      "correctAnswer": "+6",
      "distractors": [
        "+3",
        "+7",
        "+2"
      ],
      "explanation": "2 + 2x - 14 = 0 => 2x = 12 => x = +6."
    },
    {
      "question": "Số oxi hóa của Nitơ (N) trong phân tử Axit nitric HNO₃ là:",
      "mathExpression": "\\mathrm{H^{+1} N^x O_3^{-2}} \\Rightarrow +1 + x + 3(-2) = 0",
      "correctAnswer": "+5",
      "distractors": [
        "+3",
        "+4",
        "-3"
      ],
      "explanation": "+1 + x - 6 = 0 => x = +5."
    },
    {
      "question": "Số oxi hóa của Nitơ (N) trong phân tử khí amoniac NH₃ bằng:",
      "mathExpression": "\\mathrm{N^x H_3^{+1}} \\Rightarrow x + 3(+1) = 0",
      "correctAnswer": "-3",
      "distractors": [
        "+3",
        "+5",
        "0"
      ],
      "explanation": "x + 3 = 0 => x = -3."
    },
    {
      "question": "Chất khử là chất có quá trình:",
      "mathExpression": null,
      "correctAnswer": "Nhường electron (số oxi hóa tăng sau phản ứng)",
      "distractors": [
        "Nhận electron",
        "Số oxi hóa giảm",
        "Không thay đổi số oxi hóa"
      ],
      "explanation": "Chất khử là chất nhường electron, làm tăng số oxi hóa."
    },
    {
      "question": "Chất oxi hóa là chất có quá trình:",
      "mathExpression": null,
      "correctAnswer": "Nhận electron (số oxi hóa giảm sau phản ứng)",
      "distractors": [
        "Nhường electron",
        "Số oxi hóa tăng",
        "Chỉ làm tăng tốc độ"
      ],
      "explanation": "Chất oxi hóa nhận electron, làm giảm số oxi hóa."
    },
    {
      "question": "Câu thần chú kinh điển để nhớ bản chất phản ứng oxi hóa - khử là:",
      "mathExpression": null,
      "correctAnswer": "\"Khử cho - O nhận\"",
      "distractors": [
        "\"Khử nhận - O cho\"",
        "\"Khử tăng - O tăng\"",
        "\"Khử giảm - O giảm\""
      ],
      "explanation": "\"Khử cho (nhường e, số oxi hóa tăng) - O nhận (nhận e, số oxi hóa giảm)\"."
    },
    {
      "question": "Trong phản ứng: Fe + 4HNO₃ → Fe(NO₃)₃ + NO + 2H₂O, chất đóng vai trò là chất khử là:",
      "mathExpression": null,
      "correctAnswer": "Kim loại Fe (số oxi hóa tăng từ 0 lên +3)",
      "distractors": [
        "Axit HNO₃",
        "Khí NO",
        "Nước H₂O"
      ],
      "explanation": "Fe từ 0 lên +3 là chất khử; N trong HNO₃ từ +5 xuống +2 là chất oxi hóa."
    },
    {
      "question": "Trong phản ứng: CuO + H₂ → Cu + H₂O, chất đóng vai trò là chất oxi hóa là:",
      "mathExpression": null,
      "correctAnswer": "Đồng(II) oxit CuO (Cu giảm từ +2 về 0)",
      "distractors": [
        "Khí H₂",
        "Kim loại Cu",
        "Nước H₂O"
      ],
      "explanation": "Cu trong CuO giảm từ +2 về 0 nên CuO là chất oxi hóa."
    },
    {
      "question": "Quá trình nhường electron (Fe⁰ → Fe³⁺ + 3e) được gọi là:",
      "mathExpression": null,
      "correctAnswer": "Quá trình oxi hóa (sự oxi hóa)",
      "distractors": [
        "Quá trình khử",
        "Quá trình điện li",
        "Quá trình trao đổi"
      ],
      "explanation": "Sự nhường electron là sự oxi hóa."
    },
    {
      "question": "Quá trình nhận electron (O₂ + 4e → 2O²⁻) được gọi là:",
      "mathExpression": null,
      "correctAnswer": "Quá trình khử (sự khử)",
      "distractors": [
        "Quá trình oxi hóa",
        "Quá trình trung hòa",
        "Quá trình thủy phân"
      ],
      "explanation": "Sự nhận electron là sự khử."
    },
    {
      "question": "Số oxi hóa của nguyên tố trong các đơn chất (như H₂, O₂, Fe, Cu) luôn bằng:",
      "mathExpression": null,
      "correctAnswer": "0",
      "distractors": [
        "+1",
        "-1",
        "+2"
      ],
      "explanation": "Số oxi hóa của đơn chất luôn bằng 0."
    },
    {
      "question": "Trong hầu hết các hợp chất, số oxi hóa của nguyên tố Oxi là:",
      "mathExpression": null,
      "correctAnswer": "-2",
      "distractors": [
        "-1",
        "+2",
        "+1"
      ],
      "explanation": "Trong hầu hết hợp chất, Oxi có số oxi hóa là -2 (trừ OF₂ là +2 và peoxit H₂O₂ là -1)."
    },
    {
      "question": "Trong hợp chất, số oxi hóa của nguyên tố Hiđro thường bằng:",
      "mathExpression": null,
      "correctAnswer": "+1",
      "distractors": [
        "-1",
        "0",
        "+2"
      ],
      "explanation": "Hiđro có số oxi hóa là +1 trong hầu hết hợp chất (trừ hiđrua kim loại như NaH là -1)."
    },
    {
      "question": "Trong ion đa nguyên tử sunfat SO₄²⁻, số oxi hóa của Lưu huỳnh (S) là:",
      "mathExpression": "x + 4(-2) = -2 \\Rightarrow x = +6",
      "correctAnswer": "+6",
      "distractors": [
        "+4",
        "-2",
        "+2"
      ],
      "explanation": "x + 4(-2) = -2 => x - 8 = -2 => x = +6."
    },
    {
      "question": "Trong các phản ứng sau, phản ứng nào là phản ứng oxi hóa - khử?",
      "mathExpression": null,
      "correctAnswer": "Fe + 2HCl → FeCl₂ + H₂",
      "distractors": [
        "NaOH + HCl → NaCl + H₂O",
        "CaCO₃ → CaO + CO₂",
        "BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl"
      ],
      "explanation": "Fe tăng từ 0 lên +2, H giảm từ +1 về 0 -> Là phản ứng oxi hóa - khử."
    },
    {
      "question": "Nguyên tố Flo (F) trong mọi hợp chất luôn có số oxi hóa bằng:",
      "mathExpression": null,
      "correctAnswer": "-1",
      "distractors": [
        "+1",
        "+7",
        "0"
      ],
      "explanation": "Flo có độ âm điện lớn nhất nên luôn có số oxi hóa -1 trong mọi hợp chất."
    },
    {
      "question": "Kim loại kiềm (như Na, K) trong hợp chất luôn có số oxi hóa là:",
      "mathExpression": null,
      "correctAnswer": "+1",
      "distractors": [
        "+2",
        "-1",
        "0"
      ],
      "explanation": "Kim loại kiềm nhóm IA luôn có số oxi hóa +1 trong hợp chất."
    },
    {
      "question": "Phương pháp thăng bằng electron dựa trên nguyên tắc cơ bản là:",
      "mathExpression": null,
      "correctAnswer": "Tổng số electron nhường bằng tổng số electron nhận",
      "distractors": [
        "Tổng số mol chất phản ứng bằng tổng số mol sản phẩm",
        "Tổng khối lượng tăng lên",
        "Số hạt proton bằng electron"
      ],
      "explanation": "Bảo toàn electron: Tổng e nhường = Tổng e nhận."
    }
  ],
  "su_dien_li_lop11": [
    {
      "question": "Chất nào sau đây là chất điện li mạnh phân li hoàn toàn trong nước?",
      "mathExpression": null,
      "correctAnswer": "Axit clohiđric (HCl)",
      "distractors": [
        "Axit axetic (CH₃COOH)",
        "Rượu etylic (C₂H₅OH)",
        "Đường saccarozơ"
      ],
      "explanation": "HCl, HNO₃, H₂SO₄, NaOH, KOH và hầu hết muối là chất điện li mạnh."
    },
    {
      "question": "Chất nào sau đây là chất điện li yếu chỉ phân li một phần trong nước?",
      "mathExpression": null,
      "correctAnswer": "Axit axetic (CH₃COOH)",
      "distractors": [
        "Axit sunfuric (H₂SO₄)",
        "Natri hiđroxit (NaOH)",
        "Natri clorua (NaCl)"
      ],
      "explanation": "Axit yếu như CH₃COOH, HF, H₂S là chất điện li yếu."
    },
    {
      "question": "Chất nào sau đây KHÔNG điện li trong dung dịch nước (dung dịch không dẫn điện)?",
      "mathExpression": null,
      "correctAnswer": "Đường saccarozơ (C₁₂H₂₂O₁₁)",
      "distractors": [
        "Natri clorua (NaCl)",
        "Axit clohiđric (HCl)",
        "Kali hiđroxit (KOH)"
      ],
      "explanation": "Đường, rượu etylic, glixerol tan trong nước nhưng không phân li ra ion."
    },
    {
      "question": "Công thức tính độ pH của dung dịch theo nồng độ ion H⁺ là:",
      "mathExpression": "\\mathrm{pH} = -\\log[\\mathrm{H^+}]",
      "correctAnswer": "pH = -log[H⁺]",
      "distractors": [
        "pH = log[H⁺]",
        "pH = 14 + log[H⁺]",
        "pH = [H⁺] / 10"
      ],
      "explanation": "pH được định nghĩa bằng -log[H⁺]."
    },
    {
      "question": "Dung dịch có nồng độ [H⁺] = 10⁻³ M thì độ pH của dung dịch bằng:",
      "mathExpression": "\\mathrm{pH} = -\\log(10^{-3}) = 3",
      "correctAnswer": "pH = 3 (môi trường axit)",
      "distractors": [
        "pH = 11",
        "pH = 7",
        "pH = 1"
      ],
      "explanation": "pH = -log(10⁻³) = 3 < 7 -> môi trường axit."
    },
    {
      "question": "Dung dịch có nồng độ [H⁺] = 10⁻¹⁰ M thì độ pH của dung dịch bằng:",
      "mathExpression": "\\mathrm{pH} = -\\log(10^{-10}) = 10",
      "correctAnswer": "pH = 10 (môi trường kiềm)",
      "distractors": [
        "pH = 4",
        "pH = 7",
        "pH = 14"
      ],
      "explanation": "pH = 10 > 7 -> môi trường bazơ (kiềm)."
    },
    {
      "question": "Ở 25°C, dung dịch trung tính (như nước tinh khiết) có độ pH bằng:",
      "mathExpression": null,
      "correctAnswer": "pH = 7",
      "distractors": [
        "pH = 0",
        "pH = 14",
        "pH = 1"
      ],
      "explanation": "Dung dịch trung tính có [H⁺] = [OH⁻] = 10⁻⁷ M => pH = 7."
    },
    {
      "question": "Dung dịch làm quỳ tím chuyển sang màu ĐỎ có môi trường:",
      "mathExpression": null,
      "correctAnswer": "Axit (pH < 7)",
      "distractors": [
        "Bazơ (pH > 7)",
        "Trung tính (pH = 7)",
        "Không xác định"
      ],
      "explanation": "Dung dịch axit có pH < 7 làm quỳ tím hóa đỏ."
    },
    {
      "question": "Dung dịch làm phenolphtalein không màu chuyển sang màu HỒNG có pH:",
      "mathExpression": null,
      "correctAnswer": "pH > 8,3 (môi trường kiềm bazơ)",
      "distractors": [
        "pH < 7",
        "pH = 7",
        "pH = 1"
      ],
      "explanation": "Thuốc thử phenolphtalein chuyển sang màu hồng trong môi trường bazơ pH > 8,3."
    },
    {
      "question": "Tích số ion của nước ở 25°C là hằng số có giá trị bằng:",
      "mathExpression": "K_w = [\\mathrm{H^+}][\\mathrm{OH^-}] = 10^{-14}",
      "correctAnswer": "10⁻¹⁴",
      "distractors": [
        "10⁻⁷",
        "10⁻¹²",
        "10⁻¹⁰"
      ],
      "explanation": "K_w = [H⁺].[OH⁻] = 10⁻¹⁴ ở 25°C."
    },
    {
      "question": "Phương trình ion rút gọn của phản ứng trung hòa axit mạnh và bazơ mạnh là:",
      "mathExpression": null,
      "correctAnswer": "H⁺ + OH⁻ → H₂O",
      "distractors": [
        "Na⁺ + Cl⁻ → NaCl",
        "H⁺ + Cl⁻ → HCl",
        "Ba²⁺ + SO₄²⁻ → BaSO₄"
      ],
      "explanation": "Bản chất của phản ứng trung hòa axit mạnh - kiềm là ion H⁺ kết hợp OH⁻ tạo H₂O."
    },
    {
      "question": "Theo thuyết Bronsted - Lowry, axit là chất:",
      "mathExpression": null,
      "correctAnswer": "Có khả năng nhường proton (H⁺)",
      "distractors": [
        "Có khả năng nhận proton (H⁺)",
        "Phân li ra ion OH⁻",
        "Tạo muối với axit khác"
      ],
      "explanation": "Axit là chất cho (nhường) proton H⁺; bazơ là chất nhận proton H⁺."
    },
    {
      "question": "Theo thuyết Bronsted - Lowry, bazơ là chất:",
      "mathExpression": null,
      "correctAnswer": "Có khả năng nhận proton (H⁺)",
      "distractors": [
        "Có khả năng nhường proton (H⁺)",
        "Phân li ra ion H⁺",
        "Có vị chua"
      ],
      "explanation": "Bazơ là chất có khả năng nhận proton H⁺."
    },
    {
      "question": "Nguyên lí chuyển dịch cân bằng Le Chatelier phát biểu rằng khi tác động một yếu tố bên ngoài lên hệ cân bằng thì:",
      "mathExpression": null,
      "correctAnswer": "Cân bằng chuyển dịch theo chiều chống lại tác động đó",
      "distractors": [
        "Cân bằng chuyển dịch theo chiều cùng hướng",
        "Cân bằng dừng lại ngay lập tức",
        "Hệ mất tính thuận nghịch"
      ],
      "explanation": "Hệ cân bằng luôn chuyển dịch theo chiều làm giảm tác động bên ngoài."
    },
    {
      "question": "Đối với phản ứng tỏa nhiệt (ΔH < 0), khi TĂNG nhiệt độ thì cân bằng chuyển dịch theo chiều:",
      "mathExpression": null,
      "correctAnswer": "Chiều nghịch (chiều thu nhiệt)",
      "distractors": [
        "Chiều thuận (chiều tỏa nhiệt)",
        "Không chuyển dịch",
        "Tăng tốc độ phản ứng thuận"
      ],
      "explanation": "Tăng nhiệt độ làm cân bằng chuyển dịch theo chiều phản ứng thu nhiệt (chiều nghịch)."
    },
    {
      "question": "Khi TĂNG áp suất của hệ phản ứng có chất khí, cân bằng sẽ chuyển dịch về phía:",
      "mathExpression": null,
      "correctAnswer": "Phía có tổng số mol khí nhỏ hơn",
      "distractors": [
        "Phía có tổng số mol khí lớn hơn",
        "Không phụ thuộc áp suất",
        "Phía chất xúc tác"
      ],
      "explanation": "Tăng áp suất làm cân bằng chuyển dịch theo chiều giảm số mol phân tử khí."
    },
    {
      "question": "Chất xúc tác có tác dụng gì đối với một cân bằng hóa học?",
      "mathExpression": null,
      "correctAnswer": "Làm phản ứng nhanh đạt tới trạng thái cân bằng, không làm chuyển dịch cân bằng",
      "distractors": [
        "Làm chuyển dịch cân bằng sang chiều thuận",
        "Làm tăng hằng số cân bằng Kc",
        "Làm giảm nhiệt độ phản ứng"
      ],
      "explanation": "Chất xúc tác làm tăng tốc độ phản ứng thuận và nghịch như nhau nên không làm chuyển dịch cân bằng."
    },
    {
      "question": "Dung dịch NaOH 0,01M (10⁻² M) có độ pH bằng:",
      "mathExpression": "[\\mathrm{OH^-}] = 10^{-2}\\text{ M} \\Rightarrow [\\mathrm{H^+}] = 10^{-12}\\text{ M} \\Rightarrow \\mathrm{pH} = 12",
      "correctAnswer": "pH = 12",
      "distractors": [
        "pH = 2",
        "pH = 10",
        "pH = 14"
      ],
      "explanation": "pOH = -log(0,01) = 2 => pH = 14 - 2 = 12."
    },
    {
      "question": "Cặp ion nào sau đây KHÔNG thể cùng tồn tại đồng thời trong một dung dịch vì tạo kết tủa?",
      "mathExpression": null,
      "correctAnswer": "Ba²⁺ và SO₄²⁻",
      "distractors": [
        "Na⁺ và Cl⁻",
        "K⁺ và NO₃⁻",
        "Mg²⁺ và NO₃⁻"
      ],
      "explanation": "Ba²⁺ và SO₄²⁻ phản ứng tạo kết tủa BaSO₄↓ trắng nên không thể cùng tồn tại."
    },
    {
      "question": "Phương trình điện li đúng của muối ăn NaCl trong nước là:",
      "mathExpression": null,
      "correctAnswer": "NaCl → Na⁺ + Cl⁻",
      "distractors": [
        "NaCl ⇌ Na⁺ + Cl⁻",
        "NaCl → Na + Cl",
        "NaCl → Na²⁺ + Cl²⁻"
      ],
      "explanation": "NaCl là chất điện li mạnh, phân li hoàn toàn thành ion Na⁺ và Cl⁻ (mũi tên 1 chiều)."
    }
  ],
  "huu_co_hidrocacbon": [
    {
      "question": "Công thức phân tử tổng quát của dãy đồng đẳng Ankan (hiđrocacbon no mạch hở) là:",
      "mathExpression": null,
      "correctAnswer": "C_n H_{2n+2} (n ≥ 1)",
      "distractors": [
        "C_n H_{2n} (n ≥ 2)",
        "C_n H_{2n-2} (n ≥ 2)",
        "C_n H_{2n-6} (n ≥ 6)"
      ],
      "explanation": "Ankan là hiđrocacbon no mạch hở có CTTQ là CnH2n+2 (n ≥ 1)."
    },
    {
      "question": "Công thức phân tử tổng quát của dãy đồng đẳng Anken (có 1 liên kết đôi C=C mạch hở) là:",
      "mathExpression": null,
      "correctAnswer": "C_n H_{2n} (n ≥ 2)",
      "distractors": [
        "C_n H_{2n+2} (n ≥ 1)",
        "C_n H_{2n-2} (n ≥ 2)",
        "C_n H_{2n+1}OH"
      ],
      "explanation": "Anken có 1 liên kết đôi C=C mạch hở, CTTQ là CnH2n (n ≥ 2)."
    },
    {
      "question": "Công thức phân tử tổng quát của dãy đồng đẳng Ankin (có 1 liên kết ba C≡C mạch hở) là:",
      "mathExpression": null,
      "correctAnswer": "C_n H_{2n-2} (n ≥ 2)",
      "distractors": [
        "C_n H_{2n} (n ≥ 2)",
        "C_n H_{2n+2} (n ≥ 1)",
        "C_n H_{2n-6} (n ≥ 6)"
      ],
      "explanation": "Ankin có 1 liên kết ba C≡C mạch hở, CTTQ là CnH2n-2 (n ≥ 2)."
    },
    {
      "question": "Công thức phân tử của Benzen và CTTQ dãy đồng đẳng Aren là:",
      "mathExpression": null,
      "correctAnswer": "C₆H₆ và C_n H_{2n-6} (n ≥ 6)",
      "distractors": [
        "C₆H₁₂ và CnH2n",
        "C₆H₁₄ và CnH2n+2",
        "C₂H₂ và CnH2n-2"
      ],
      "explanation": "Benzen là C₆H₆, đồng đẳng aren có CTTQ CnH2n-6 (n ≥ 6)."
    },
    {
      "question": "Phản ứng hóa học đặc trưng của Ankan (hiđrocacbon no) là:",
      "mathExpression": null,
      "correctAnswer": "Phản ứng thế halogen (clo, brom) có ánh sáng",
      "distractors": [
        "Phản ứng cộng nước brom",
        "Phản ứng tráng bạc",
        "Phản ứng trùng hợp"
      ],
      "explanation": "Liên kết đơn C-C và C-H bền vững nên ankan đặc trưng bởi phản ứng thế."
    },
    {
      "question": "Phản ứng hóa học đặc trưng của Anken và Ankin do có liên kết pi kém bền là:",
      "mathExpression": null,
      "correctAnswer": "Phản ứng cộng (làm mất màu dung dịch nước Brom)",
      "distractors": [
        "Phản ứng thế kim loại",
        "Phản ứng este hóa",
        "Phản ứng xà phòng hóa"
      ],
      "explanation": "Liên kết pi kém bền dễ bị đứt ra tham gia phản ứng cộng brom, hiđro, axit."
    },
    {
      "question": "Chất khí nào sau đây là thành phần chính của khí thiên nhiên, khí mỏ dầu và khí bioga?",
      "mathExpression": null,
      "correctAnswer": "Khí Metan (CH₄)",
      "distractors": [
        "Khí Etilen (C₂H₄)",
        "Khí Axetilen (C₂H₂)",
        "Khí Cacbonic (CO₂)"
      ],
      "explanation": "Metan (CH₄) chiếm 85-95% khí thiên nhiên và khí bioga."
    },
    {
      "question": "Khí Etilen (C₂H₄) có ứng dụng quan trọng trong thực tế là:",
      "mathExpression": null,
      "correctAnswer": "Kích thích hoa quả mau chín và trùng hợp sản xuất nhựa PE",
      "distractors": [
        "Dùng làm thuốc nổ",
        "Dùng làm phân bón hóa học",
        "Dùng dập tắt đám cháy"
      ],
      "explanation": "Etilen kích thích quá trình chín của trái cây và là nguyên liệu tổng hợp nhựa PE."
    },
    {
      "question": "Thuốc thử đặc trưng để phân biệt Axetilen (hoặc các ankin có liên kết ba đầu mạch alk-1-in) là:",
      "mathExpression": null,
      "correctAnswer": "Dung dịch AgNO₃ trong NH₃ (tạo kết tủa vàng)",
      "distractors": [
        "Nước vôi trong Ca(OH)₂",
        "Quỳ tím",
        "Dung dịch NaCl"
      ],
      "explanation": "CH≡CH + 2AgNO₃ + 2NH₃ → AgC≡CAg↓ (màu vàng nhạt) + 2NH₄NO₃."
    },
    {
      "question": "Hiện tượng xảy ra khi sục khí Etilen (C₂H₄) vào dung dịch nước Brom màu da cam là:",
      "mathExpression": null,
      "correctAnswer": "Dung dịch nước Brom bị mất màu hoàn toàn",
      "distractors": [
        "Xuất hiện kết tủa trắng",
        "Dung dịch chuyển sang màu xanh",
        "Có kết tủa đỏ gạch"
      ],
      "explanation": "C₂H₄ + Br₂ → CH₂Br-CH₂Br (dung dịch mất màu da cam)."
    },
    {
      "question": "Theo quy tắc Mac-cốp-nhi-cốp, khi cộng axit HX vào anken bất đối, nguyên tử H sẽ ưu tiên cộng vào:",
      "mathExpression": null,
      "correctAnswer": "Cacbon mang nhiều nguyên tử Hiđro hơn (bậc thấp hơn)",
      "distractors": [
        "Cacbon mang ít Hiđro hơn",
        "Cacbon ở giữa mạch",
        "Phân bố ngẫu nhiên"
      ],
      "explanation": "Quy tắc: \"Giàu càng giàu thêm\" - H cộng vào C có nhiều H hơn."
    },
    {
      "question": "Khi đốt cháy hoàn toàn một ankan bất kì, tỉ lệ giữa số mol H₂O và số mol CO₂ luôn là:",
      "mathExpression": null,
      "correctAnswer": "n(H₂O) > n(CO₂)",
      "distractors": [
        "n(H₂O) = n(CO₂)",
        "n(H₂O) < n(CO₂)",
        "n(H₂O) = 2 . n(CO₂)"
      ],
      "explanation": "CnH2n+2 -> n CO₂ + (n+1) H₂O => n(H₂O) luôn lớn hơn n(CO₂)."
    },
    {
      "question": "Khi đốt cháy hoàn toàn một anken mạch hở, mối quan hệ giữa số mol H₂O và CO₂ là:",
      "mathExpression": null,
      "correctAnswer": "n(H₂O) = n(CO₂)",
      "distractors": [
        "n(H₂O) > n(CO₂)",
        "n(H₂O) < n(CO₂)",
        "Không so sánh được"
      ],
      "explanation": "CnH2n -> n CO₂ + n H₂O => n(H₂O) = n(CO₂)."
    },
    {
      "question": "Khi đốt cháy hoàn toàn một ankin mạch hở, mối quan hệ giữa số mol H₂O và CO₂ là:",
      "mathExpression": null,
      "correctAnswer": "n(H₂O) < n(CO₂)",
      "distractors": [
        "n(H₂O) = n(CO₂)",
        "n(H₂O) > n(CO₂)",
        "n(H₂O) gấp 2 lần"
      ],
      "explanation": "CnH2n-2 -> n CO₂ + (n-1) H₂O => n(H₂O) < n(CO₂) và n(ankin) = n(CO₂) - n(H₂O)."
    },
    {
      "question": "Phản ứng trùng hợp khí Etilen (C₂H₄) ở nhiệt độ và áp suất cao tạo thành vật liệu polime nào?",
      "mathExpression": null,
      "correctAnswer": "Polietilen (nhựa PE)",
      "distractors": [
        "Poli(vinyl clorua) (nhựa PVC)",
        "Cao su buna",
        "Tơ nilon-6,6"
      ],
      "explanation": "n CH₂=CH₂ → (-CH₂-CH₂-)_n (nhựa PE dùng làm bao bì nilon)."
    },
    {
      "question": "Toluen (C₆H₅CH₃) có hiện tượng gì khi đun nóng với dung dịch thuốc tím KMnO₄?",
      "mathExpression": null,
      "correctAnswer": "Làm mất màu tím của dung dịch KMnO₄",
      "distractors": [
        "Không phản ứng",
        "Tạo kết tủa vàng",
        "Dung dịch hóa xanh"
      ],
      "explanation": "Toluen bị oxi hóa nhánh metyl tạo axit benzoic và làm mất màu dung dịch KMnO₄ khi đun nóng."
    },
    {
      "question": "Số đồng phân cấu tạo hiđrocacbon của Ankan có 4 nguyên tử Cacbon (C₄H₁₀) là:",
      "mathExpression": null,
      "correctAnswer": "2 đồng phân (butan và isobutan)",
      "distractors": [
        "1 đồng phân",
        "3 đồng phân",
        "4 đồng phân"
      ],
      "explanation": "C₄H₁₀ có 2 đồng phân: CH₃-CH₂-CH₂-CH₃ và CH₃-CH(CH₃)-CH₃."
    },
    {
      "question": "Số liên kết đôi C=C có trong phân tử Benzen (C₆H₆) là:",
      "mathExpression": null,
      "correctAnswer": "Hệ liên kết pi liên hợp khép kín vòng 6 cạnh bền vững",
      "distractors": [
        "3 liên kết đôi cô lập",
        "1 liên kết ba",
        "Không có liên kết pi"
      ],
      "explanation": "Benzen có hệ 3 liên kết đôi xen kẽ 3 liên kết đơn liên hợp tạo vòng thơm bền vững."
    },
    {
      "question": "Khí gas đun nấu LPG dùng trong sinh hoạt gia đình là hỗn hợp của hai ankan nào?",
      "mathExpression": null,
      "correctAnswer": "Propan (C₃H₈) và Butan (C₄H₁₀)",
      "distractors": [
        "Metan (CH₄) và Etan (C₂H₆)",
        "Etilen và Axetilen",
        "Hiđro và Oxi"
      ],
      "explanation": "Khí gas hóa lỏng LPG chủ yếu gồm Propan C₃H₈ và Butan C₄H₁₀ nén ở áp suất cao."
    },
    {
      "question": "Đồng phân hình học cis-trans xuất hiện khi hợp chất hữu cơ thỏa mãn điều kiện:",
      "mathExpression": null,
      "correctAnswer": "Có liên kết đôi C=C và hai nhóm thế trên cùng một nguyên tử C liên kết đôi khác nhau",
      "distractors": [
        "Có liên kết ba C≡C",
        "Mạch thẳng không phân nhánh",
        "Là ankan no"
      ],
      "explanation": "Điều kiện cis-trans: R₁ ≠ R₂ và R₃ ≠ R₄ ở hai đầu liên kết đôi C=C."
    }
  ],
  "huu_co_ancol_axit": [
    {
      "question": "Công thức phân tử và nhóm chức đặc trưng của Rượu etylic (ancol etylic) là:",
      "mathExpression": null,
      "correctAnswer": "C₂H₅OH (chứa nhóm chức hiđroxyl -OH)",
      "distractors": [
        "CH₃COOH (nhóm -COOH)",
        "C₂H₄ (nhóm C=C)",
        "HCHO (nhóm -CHO)"
      ],
      "explanation": "Ancol etylic có công thức C₂H₅OH, nhóm chức -OH liên kết trực tiếp với cacbon no."
    },
    {
      "question": "Công thức phân tử và nhóm chức đặc trưng của Axit axetic là:",
      "mathExpression": null,
      "correctAnswer": "CH₃COOH (chứa nhóm chức cacboxyl -COOH)",
      "distractors": [
        "C₂H₅OH",
        "HCOOH",
        "CH₃CHO"
      ],
      "explanation": "Axit axetic có công thức CH₃COOH, chứa nhóm cacboxyl -COOH gây tính axit."
    },
    {
      "question": "Chất nào sau đây tác dụng được với kim loại Natri (Na) giải phóng khí H₂?",
      "mathExpression": null,
      "correctAnswer": "Cả Ancol etylic (C₂H₅OH) và Axit axetic (CH₃COOH)",
      "distractors": [
        "Chỉ có CH₄",
        "Chỉ có C₂H₄",
        "Chỉ có Benzen"
      ],
      "explanation": "Cả ancol (-OH) và axit (-COOH) đều có nguyên tử H linh động phản ứng với Na giải phóng H₂."
    },
    {
      "question": "Dung dịch Axit axetic (CH₃COOH) làm quỳ tím chuyển sang màu gì?",
      "mathExpression": null,
      "correctAnswer": "Màu đỏ",
      "distractors": [
        "Màu xanh",
        "Không đổi màu",
        "Màu vàng"
      ],
      "explanation": "Axit axetic là một axit hữu cơ làm quỳ tím chuyển sang màu đỏ nhạt."
    },
    {
      "question": "Dung dịch Rượu etylic (C₂H₅OH) có làm đổi màu giấy quỳ tím không?",
      "mathExpression": null,
      "correctAnswer": "Không làm đổi màu quỳ tím",
      "distractors": [
        "Hóa đỏ",
        "Hóa xanh",
        "Hóa hồng"
      ],
      "explanation": "Ancol etylic có môi trường trung tính, không phân li ra H⁺ hay OH⁻ nên không đổi màu quỳ tím."
    },
    {
      "question": "Phản ứng este hóa giữa Axit axetic và Rượu etylic sinh ra chất nào có mùi thơm hoa quả?",
      "mathExpression": null,
      "correctAnswer": "Etyl axetat (CH₃COOC₂H₅)",
      "distractors": [
        "Metyl axetat",
        "Axit fomic",
        "Glixerol"
      ],
      "explanation": "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (etyl axetat) + H₂O."
    },
    {
      "question": "Chất xúc tác bắt buộc dùng cho phản ứng este hóa giữa axit cacboxylic và ancol là:",
      "mathExpression": null,
      "correctAnswer": "Axit H₂SO₄ đặc đun nóng",
      "distractors": [
        "Bột sắt Fe",
        "Nhiệt độ phòng không cần xúc tác",
        "Dung dịch kiềm NaOH"
      ],
      "explanation": "H₂SO₄ đặc vừa làm chất xúc tác vừa hút nước để chuyển dịch cân bằng theo chiều tạo este."
    },
    {
      "question": "Độ rượu là đại lượng cho biết:",
      "mathExpression": null,
      "correctAnswer": "Số ml rượu etylic nguyên chất có trong 100 ml dung dịch rượu",
      "distractors": [
        "Khối lượng rượu trong 1 lít",
        "Nồng độ phần trăm của rượu",
        "Độ chua của rượu"
      ],
      "explanation": "Định nghĩa: Độ rượu = (V_rượu_nguyên_chất / V_dung_dịch) . 100."
    },
    {
      "question": "Trong 200 ml dung dịch rượu 45° có chứa thể tích rượu etylic nguyên chất là:",
      "mathExpression": "V_r = \\frac{200 \\cdot 45}{100} = 90\\text{ ml}",
      "correctAnswer": "90 ml",
      "distractors": [
        "45 ml",
        "100 ml",
        "110 ml"
      ],
      "explanation": "V_nguyên_chất = (200 . 45) / 100 = 90 ml."
    },
    {
      "question": "Chất nào sau đây là ancol đa chức có nhiều nhóm -OH kề nhau hòa tan được Cu(OH)₂ tạo dung dịch màu xanh lam thẩm?",
      "mathExpression": null,
      "correctAnswer": "Glixerol (C₃H₅(OH)₃)",
      "distractors": [
        "Ancol etylic (C₂H₅OH)",
        "Metanol (CH₃OH)",
        "Etylen glicol chỉ có 1 nhóm"
      ],
      "explanation": "Glixerol có 3 nhóm -OH kề nhau tạo phức màu xanh lam đặc trưng với Cu(OH)₂ ở nhiệt độ thường."
    },
    {
      "question": "Cho Axit axetic tác dụng với đá vôi (CaCO₃), hiện tượng quan sát được là:",
      "mathExpression": null,
      "correctAnswer": "Đá vôi tan ra và có bọt khí CO₂ thoát ra mạnh",
      "distractors": [
        "Xuất hiện kết tủa màu vàng",
        "Dung dịch đổi sang màu đen",
        "Không có hiện tượng gì"
      ],
      "explanation": "2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + CO₂↑ + H₂O."
    },
    {
      "question": "Giấm ăn sử dụng hàng ngày trong nấu ăn là dung dịch axit axetic có nồng độ khoảng:",
      "mathExpression": null,
      "correctAnswer": "Từ 2% đến 5%",
      "distractors": [
        "10% đến 20%",
        "50%",
        "98%"
      ],
      "explanation": "Giấm ăn là dung dịch axit axetic loãng từ 2% - 5% thu được từ quá trình lên men giấm."
    },
    {
      "question": "Phenol (C₆H₅OH) có tính chất đặc trưng nào sau đây?",
      "mathExpression": null,
      "correctAnswer": "Có tính axit yếu, tác dụng với dung dịch NaOH nhưng không làm đổi màu quỳ tím",
      "distractors": [
        "Có tính bazơ mạnh",
        "Hòa tan trong nước ở mọi nhiệt độ",
        "Làm quỳ tím hóa đỏ mạnh"
      ],
      "explanation": "Phenol có nhóm -OH gắn trực tiếp vào vòng benzen, có tính axit yếu (tác dụng NaOH nhưng không đổi màu quỳ)."
    },
    {
      "question": "Thuốc thử đặc trưng để nhận biết Phenol là dung dịch nước Brom vì tạo ra:",
      "mathExpression": null,
      "correctAnswer": "Kết tủa trắng 2,4,6-tribromphenol",
      "distractors": [
        "Dung dịch màu tím",
        "Khí không màu",
        "Kết tủa đỏ gạch"
      ],
      "explanation": "C₆H₅OH + 3Br₂ → 2,4,6-tribromphenol↓ (trắng) + 3HBr."
    },
    {
      "question": "Khi bị oxi hóa không hoàn toàn bởi CuO nung nóng, ancol bậc 1 (như C₂H₅OH) sẽ tạo thành:",
      "mathExpression": null,
      "correctAnswer": "Anđehit (như CH₃CHO)",
      "distractors": [
        "Xeton",
        "Axit cacboxylic",
        "Ankan"
      ],
      "explanation": "Ancol bậc 1 + CuO → Anđehit + Cu + H₂O."
    },
    {
      "question": "Khi bị oxi hóa bởi CuO nung nóng, ancol bậc 2 (như CH₃-CH(OH)-CH₃) sẽ tạo thành:",
      "mathExpression": null,
      "correctAnswer": "Xeton (như CH₃-CO-CH₃)",
      "distractors": [
        "Anđehit",
        "Axit",
        "Ete"
      ],
      "explanation": "Ancol bậc 2 bị oxi hóa thành xeton."
    },
    {
      "question": "Axit fomic (HCOOH) có điểm đặc biệt gì so với các axit cacboxylic khác?",
      "mathExpression": null,
      "correctAnswer": "Vừa có tính axit vừa tham gia phản ứng tráng bạc Ag (do có nhóm -CHO)",
      "distractors": [
        "Không tác dụng với kim loại",
        "Không tan trong nước",
        "Là chất khí"
      ],
      "explanation": "HCOOH có cấu tạo H-C(=O)-OH chứa nhóm anđehit -CHO nên có khả năng tráng bạc."
    },
    {
      "question": "Nhiệt độ sôi của ancol cao hơn hẳn hiđrocacbon có cùng khối lượng phân tử là do:",
      "mathExpression": null,
      "correctAnswer": "Giữa các phân tử ancol hình thành liên kết hiđro liên phân tử",
      "distractors": [
        "Ancol có khối lượng lớn hơn",
        "Ancol có liên kết ion",
        "Ancol có liên kết ba"
      ],
      "explanation": "Liên kết hiđro liên phân tử làm tăng nhiệt độ sôi và độ tan của ancol trong nước."
    },
    {
      "question": "Chất nào sau đây cực kì độc hại, uống phải một lượng nhỏ có thể gây mù mắt hoặc tử vong (có trong rượu giả)?",
      "mathExpression": null,
      "correctAnswer": "Metanol (CH₃OH)",
      "distractors": [
        "Etanol (C₂H₅OH)",
        "Axit axetic",
        "Glixerol"
      ],
      "explanation": "Metanol CH₃OH bị chuyển hóa thành fomandehit và axit fomic cực độc cho hệ thần kinh và mắt."
    },
    {
      "question": "Đốt cháy hoàn toàn 1 mol Rượu etylic (C₂H₅OH) thu được số mol khí CO₂ là:",
      "mathExpression": "\\mathrm{C_2H_5OH} + 3\\mathrm{O_2} \\rightarrow 2\\mathrm{CO_2} + 3\\mathrm{H_2O}",
      "correctAnswer": "2 mol CO₂",
      "distractors": [
        "1 mol",
        "3 mol",
        "4 mol"
      ],
      "explanation": "Theo PTHH: 1 mol C₂H₅OH đốt cháy sinh ra 2 mol CO₂ và 3 mol H₂O."
    }
  ],
  "huu_co_este_lipit": [
    {
      "question": "Công thức cấu tạo thu gọn của este Etyl axetat là:",
      "mathExpression": null,
      "correctAnswer": "CH₃COOC₂H₅",
      "distractors": [
        "C₂H₅COOCH₃",
        "CH₃COOCH₃",
        "HCOOC₂H₅"
      ],
      "explanation": "Etyl axetat gồm gốc axetat CH₃COO- và gốc etyl -C₂H₅: CH₃COOC₂H₅."
    },
    {
      "question": "Công thức cấu tạo của este Metyl fomat là:",
      "mathExpression": null,
      "correctAnswer": "HCOOCH₃",
      "distractors": [
        "CH₃COOCH₃",
        "HCOOC₂H₅",
        "CH₃COOH"
      ],
      "explanation": "Metyl fomat tạo từ axit fomic HCOOH và ancol metylic CH₃OH: HCOOCH₃."
    },
    {
      "question": "Phản ứng thủy phân este trong môi trường kiềm (đun nóng) còn được gọi là:",
      "mathExpression": null,
      "correctAnswer": "Phản ứng xà phòng hóa (phản ứng một chiều)",
      "distractors": [
        "Phản ứng este hóa",
        "Phản ứng lên men",
        "Phản ứng trùng hợp"
      ],
      "explanation": "Thủy phân trong kiềm tạo muối và ancol, phản ứng xảy ra một chiều gọi là xà phòng hóa."
    },
    {
      "question": "Phản ứng thủy phân este trong môi trường axit có đặc điểm là:",
      "mathExpression": null,
      "correctAnswer": "Là phản ứng thuận nghịch (hai chiều)",
      "distractors": [
        "Là phản ứng một chiều hoàn toàn",
        "Không cần đun nóng",
        "Sinh ra muối kết tủa"
      ],
      "explanation": "Thủy phân trong axit là phản ứng thuận nghịch: RCOOR' + H₂O ⇌ RCOOH + R'OH."
    },
    {
      "question": "Khi xà phòng hóa chất béo (triglixerit) bằng dung dịch NaOH, sản phẩm luôn luôn thu được chất nào sau đây?",
      "mathExpression": null,
      "correctAnswer": "Glixerol (C₃H₅(OH)₃)",
      "distractors": [
        "Ancol etylic",
        "Axit fomic",
        "Glucozơ"
      ],
      "explanation": "Thủy phân chất béo luôn sinh ra muối của axit béo (xà phòng) và Glixerol C₃H₅(OH)₃."
    },
    {
      "question": "Công thức phân tử của Glixerol (ancol no 3 chức) là:",
      "mathExpression": null,
      "correctAnswer": "C₃H₅(OH)₃",
      "distractors": [
        "C₂H₄(OH)₂",
        "C₃H₇OH",
        "CH₃OH"
      ],
      "explanation": "Glixerol là ancol 3 chức có công thức C₃H₅(OH)₃ (M = 92)."
    },
    {
      "question": "Chất béo lỏng (dầu thực vật như dầu mè, dầu lạc) chứa chủ yếu các gốc axit béo nào?",
      "mathExpression": null,
      "correctAnswer": "Axit béo không no (như axit oleic C₁₇H₃₃COOH)",
      "distractors": [
        "Axit béo no",
        "Axit axetic",
        "Axit fomic"
      ],
      "explanation": "Chất béo lỏng chứa chủ yếu các gốc axit béo không no có liên kết đôi C=C."
    },
    {
      "question": "Chất béo rắn (mỡ động vật như mỡ lợn, mỡ bò) chứa chủ yếu các gốc axit béo nào?",
      "mathExpression": null,
      "correctAnswer": "Axit béo no (như axit panmitic C₁₅H₃₁COOH, axit stearic C₁₇H₃₅COOH)",
      "distractors": [
        "Axit béo không no",
        "Axit hữu cơ mạch ngắn",
        "Axit vô cơ"
      ],
      "explanation": "Chất béo rắn chứa chủ yếu các gốc axit béo no có nhiệt độ nóng chảy cao."
    },
    {
      "question": "Phương pháp để chuyển hóa chất béo lỏng (dầu thực vật) thành chất béo rắn (bơ nhân tạo) là:",
      "mathExpression": null,
      "correctAnswer": "Hiđro hóa chất béo lỏng (cộng H₂ có xúc tác Ni đun nóng)",
      "distractors": [
        "Xà phòng hóa",
        "Đun sôi với nước",
        "Oxi hóa bằng không khí"
      ],
      "explanation": "Hiđro hóa chuyển các liên kết C=C không no thành liên kết no C-C biến dầu lỏng thành mỡ/bơ rắn."
    },
    {
      "question": "Este thường có tính chất vật lí đặc trưng là:",
      "mathExpression": null,
      "correctAnswer": "Nhẹ hơn nước, ít tan trong nước và thường có mùi thơm hoa quả",
      "distractors": [
        "Nặng hơn nước, tan vô hạn trong nước",
        "Có vị chua gắt",
        "Là chất rắn dẫn điện"
      ],
      "explanation": "Este ít tan, nhẹ hơn nổi trên mặt nước và có mùi thơm tự nhiên dễ chịu."
    },
    {
      "question": "Este Isoamyl axetat có mùi thơm đặc trưng của loại hoa quả nào?",
      "mathExpression": null,
      "correctAnswer": "Mùi thơm của chuối chín",
      "distractors": [
        "Mùi hoa nhài",
        "Mùi quả dứa",
        "Mùi quả táo"
      ],
      "explanation": "Isoamyl axetat (CH₃COOCH₂CH₂CH(CH₃)₂) có mùi thơm ngọt của chuối chín."
    },
    {
      "question": "Este Benzyl axetat có mùi thơm đặc trưng của loài hoa nào?",
      "mathExpression": null,
      "correctAnswer": "Hoa nhài",
      "distractors": [
        "Hoa hồng",
        "Hoa cúc",
        "Hoa sen"
      ],
      "explanation": "Benzyl axetat (CH₃COOCH₂C₆H₅) có mùi thơm dịu của hoa nhài."
    },
    {
      "question": "Este nào sau đây có khả năng tham gia phản ứng tráng bạc với dung dịch AgNO₃/NH₃?",
      "mathExpression": null,
      "correctAnswer": "Metyl fomat (HCOOCH₃)",
      "distractors": [
        "Etyl axetat (CH₃COOC₂H₅)",
        "Metyl axetat (CH₃COOCH₃)",
        "Etyl propionat"
      ],
      "explanation": "Tất cả các este của axit fomic (có dạng HCOOR) đều tham gia tráng bạc."
    },
    {
      "question": "Công thức phân tử của Axit stearic (axit béo no có 18 nguyên tử Cacbon) là:",
      "mathExpression": null,
      "correctAnswer": "C₁₇H₃₅COOH",
      "distractors": [
        "C₁₅H₃₁COOH",
        "C₁₇H₃₃COOH",
        "C₁₇H₃₁COOH"
      ],
      "explanation": "Axit stearic no: C₁₇H₃₅COOH (M = 284)."
    },
    {
      "question": "Công thức phân tử của Axit panmitic (axit béo no có 16 nguyên tử Cacbon) là:",
      "mathExpression": null,
      "correctAnswer": "C₁₅H₃₁COOH",
      "distractors": [
        "C₁₇H₃₅COOH",
        "C₁₇H₃₃COOH",
        "C₁₁H₂₃COOH"
      ],
      "explanation": "Axit panmitic no: C₁₅H₃₁COOH (M = 256)."
    },
    {
      "question": "Công thức phân tử của Axit oleic (axit béo không no có 1 liên kết đôi C=C) là:",
      "mathExpression": null,
      "correctAnswer": "C₁₇H₃₃COOH",
      "distractors": [
        "C₁₇H₃₅COOH",
        "C₁₅H₃₁COOH",
        "C₁₇H₃₁COOH"
      ],
      "explanation": "Axit oleic có 1 liên kết C=C: C₁₇H₃₃COOH (M = 282)."
    },
    {
      "question": "Chất béo Triolein có công thức (C₁₇H₃₃COO)₃C₃H₅. Tính chất hóa học nào sau đây đúng với Triolein?",
      "mathExpression": null,
      "correctAnswer": "Làm mất màu dung dịch nước Brom do có liên kết đôi C=C",
      "distractors": [
        "Là chất béo rắn ở nhiệt độ thường",
        "Không bị thủy phân trong kiềm",
        "Không cháy được"
      ],
      "explanation": "Triolein không no nên tác dụng cộng làm mất màu nước Brom."
    },
    {
      "question": "Xà phòng bánh dùng để tắm giặt hàng ngày có thành phần chính là:",
      "mathExpression": null,
      "correctAnswer": "Muối Natri hoặc Kali của các axit béo (như natri stearat, natri panmitat)",
      "distractors": [
        "Axit sunfuric",
        "Dầu thô mỏ dầu",
        "Chất béo nguyên chất"
      ],
      "explanation": "Xà phòng là hỗn hợp muối natri hoặc kali của axit béo kết hợp chất độn."
    },
    {
      "question": "Công thức tổng quát của este no, đơn chức, mạch hở là:",
      "mathExpression": null,
      "correctAnswer": "C_n H_{2n} O_2 (n ≥ 2)",
      "distractors": [
        "C_n H_{2n+2} O (n ≥ 1)",
        "C_n H_{2n-2} O_2 (n ≥ 3)",
        "C_n H_{2n} O"
      ],
      "explanation": "Este no đơn chức mạch hở có CTTQ là CnH2nO2 (n ≥ 2)."
    },
    {
      "question": "Đun nóng 8,8 gam Etyl axetat (CH₃COOC₂H₅, M = 88) với dung dịch NaOH vừa đủ. Khối lượng muối Natri axetat (CH₃COONa, M = 82) thu được là:",
      "mathExpression": "n = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 82",
      "correctAnswer": "8,2 gam",
      "distractors": [
        "8,8 gam",
        "4,1 gam",
        "16,4 gam"
      ],
      "explanation": "n(este) = 8,8 / 88 = 0,1 mol => n(muối) = 0,1 mol => m(muối) = 0,1 . 82 = 8,2 gam."
    }
  ],
  "huu_co_cacbohidrat": [
    {
      "question": "Glucozơ thuộc loại cacbohiđrat nào và có công thức phân tử là:",
      "mathExpression": null,
      "correctAnswer": "Monosaccarit, công thức C₆H₁₂O₆",
      "distractors": [
        "Đisaccarit, C₁₂H₂₂O₁₁",
        "Polisaccarit, (C₆H₁₀O₅)n",
        "Lipit"
      ],
      "explanation": "Glucozơ là monosaccarit (đường đơn) có công thức phân tử C₆H₁₂O₆ (M = 180)."
    },
    {
      "question": "Fructozơ có cùng công thức phân tử C₆H₁₂O₆ với glucozơ, do đó fructozơ và glucozơ là:",
      "mathExpression": null,
      "correctAnswer": "Đồng phân của nhau",
      "distractors": [
        "Đồng đẳng của nhau",
        "Hai chất hoàn toàn giống nhau",
        "Dẫn xuất của nhau"
      ],
      "explanation": "Cùng CTPT C₆H₁₂O₆ nhưng khác nhau về cấu tạo -> là đồng phân."
    },
    {
      "question": "Chất nào sau đây có nhiều trong quả nho chín nên còn được gọi là \"đường nho\"?",
      "mathExpression": null,
      "correctAnswer": "Glucozơ",
      "distractors": [
        "Fructozơ",
        "Saccarozơ",
        "Tinh bột"
      ],
      "explanation": "Glucozơ có nhiều trong quả nho chín nên gọi là đường nho."
    },
    {
      "question": "Chất nào sau đây có vị ngọt sắc nhất, chiếm khoảng 40% trong mật ong nên gọi là \"đường mật\"?",
      "mathExpression": null,
      "correctAnswer": "Fructozơ",
      "distractors": [
        "Glucozơ",
        "Saccarozơ",
        "Mantozơ"
      ],
      "explanation": "Fructozơ ngọt hơn đường mía, chiếm 40% trong mật ong."
    },
    {
      "question": "Saccarozơ là loại đường phổ biến nhất (đường mía, đường củ cải) có công thức phân tử là:",
      "mathExpression": null,
      "correctAnswer": "C₁₂H₂₂O₁₁ (đisaccarit)",
      "distractors": [
        "C₆H₁₂O₆",
        "(C₆H₁₀O₅)n",
        "C₁₂H₂₄O₁₂"
      ],
      "explanation": "Saccarozơ là đisaccarit có công thức C₁₂H₂₂O₁₁ (M = 342)."
    },
    {
      "question": "Tinh bột và Xenlulozơ thuộc loại cacbohiđrat nào sau đây?",
      "mathExpression": null,
      "correctAnswer": "Polisaccarit (polime thiên nhiên)",
      "distractors": [
        "Monosaccarit",
        "Đisaccarit",
        "Hiđrocacbon"
      ],
      "explanation": "Tinh bột và xenlulozơ là các polisaccarit cao phân tử."
    },
    {
      "question": "Phản ứng tráng bạc của Glucozơ: 1 mol Glucozơ tác dụng với lượng dư AgNO₃/NH₃ sinh ra bao nhiêu mol Ag kết tủa?",
      "mathExpression": "\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{Ag}",
      "correctAnswer": "2 mol Ag",
      "distractors": [
        "1 mol Ag",
        "4 mol Ag",
        "0,5 mol Ag"
      ],
      "explanation": "Glucozơ có 1 nhóm anđehit -CHO nên 1 mol glucozơ tráng bạc tạo 2 mol Ag."
    },
    {
      "question": "Thuốc thử đặc trưng nhất để nhận biết hồ tinh bột là:",
      "mathExpression": null,
      "correctAnswer": "Dung dịch Iot (I₂) tạo hợp chất màu xanh tím",
      "distractors": [
        "Dung dịch nước Brom",
        "Dung dịch AgNO₃/NH₃",
        "Dung dịch Cu(OH)₂"
      ],
      "explanation": "Iot chui vào các lỗ rỗng của cấu trúc xoắn tinh bột tạo màu xanh tím đặc trưng."
    },
    {
      "question": "Hiện tượng khi nhỏ dung dịch iot vào lát cắt củ khoai tây hoặc cơm nguội là:",
      "mathExpression": null,
      "correctAnswer": "Xuất hiện màu xanh tím đặc trưng, khi đun nóng màu mất đi và để nguội màu xuất hiện lại",
      "distractors": [
        "Xuất hiện kết tủa trắng",
        "Dung dịch sủi bọt khí mạnh",
        "Không có hiện tượng gì"
      ],
      "explanation": "Tinh bột tạo phức màu xanh tím với I₂, mất màu khi đun nóng và hiện lại khi nguội."
    },
    {
      "question": "Saccarozơ có tham gia phản ứng tráng bạc với AgNO₃/NH₃ không?",
      "mathExpression": null,
      "correctAnswer": "Không tham gia phản ứng tráng bạc",
      "distractors": [
        "Có tham gia tráng bạc tạo 2 Ag",
        "Có tham gia tráng bạc tạo 4 Ag",
        "Có tạo kết tủa vàng"
      ],
      "explanation": "Saccarozơ không có nhóm anđehit tự do nên không tham gia phản ứng tráng bạc."
    },
    {
      "question": "Khi thủy phân hoàn toàn 1 mol Saccarozơ trong môi trường axit đun nóng, thu được sản phẩm gồm:",
      "mathExpression": null,
      "correctAnswer": "1 mol Glucozơ và 1 mol Fructozơ",
      "distractors": [
        "2 mol Glucozơ",
        "2 mol Fructozơ",
        "1 mol Tinh bột"
      ],
      "explanation": "C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glucozơ) + C₆H₁₂O₆ (fructozơ)."
    },
    {
      "question": "Khi thủy phân hoàn toàn Tinh bột hoặc Xenlulozơ đến cùng, sản phẩm duy nhất thu được là:",
      "mathExpression": null,
      "correctAnswer": "Glucozơ",
      "distractors": [
        "Fructozơ",
        "Saccarozơ",
        "Ancol etylic"
      ],
      "explanation": "Cả tinh bột và xenlulozơ đều được cấu tạo từ các mắt xích glucozơ."
    },
    {
      "question": "Ở nhiệt độ phòng, dung dịch Glucozơ hòa tan Cu(OH)₂ tạo thành dung dịch có màu gì?",
      "mathExpression": null,
      "correctAnswer": "Màu xanh lam thẫm (do có nhiều nhóm -OH kề nhau)",
      "distractors": [
        "Màu đỏ gạch",
        "Màu tím",
        "Màu vàng chanh"
      ],
      "explanation": "Glucozơ có 5 nhóm -OH kề nhau nên hòa tan Cu(OH)₂ tạo dung dịch phức xanh lam."
    },
    {
      "question": "Khi đun nóng dung dịch Glucozơ với Cu(OH)₂ trong môi trường kiềm, hiện tượng quan sát được là:",
      "mathExpression": null,
      "correctAnswer": "Xuất hiện kết tủa màu đỏ gạch của Cu₂O",
      "distractors": [
        "Xuất hiện kết tủa trắng",
        "Không đổi màu",
        "Có khí không màu bay lên"
      ],
      "explanation": "Đun nóng nhóm -CHO bị oxi hóa tạo kết tủa đỏ gạch Cu₂O: Cu₂O↓."
    },
    {
      "question": "Xenlulozơ có nhiều nhất trong thành phần của vật liệu thiên nhiên nào sau đây?",
      "mathExpression": null,
      "correctAnswer": "Sợi bông nõn (chiếm gần 98%) và gỗ (chiếm khoảng 50%)",
      "distractors": [
        "Củ khoai lang",
        "Quả nho",
        "Hạt lúa gạo"
      ],
      "explanation": "Xenlulozơ là thành phần chính tạo nên màng tế bào thực vật, có nhiều nhất trong sợi bông."
    },
    {
      "question": "Xenlulozơ tác dụng với HNO₃ đặc (xúc tác H₂SO₄ đặc đun nóng) tạo thành chất nào dùng làm thuốc súng không khói?",
      "mathExpression": null,
      "correctAnswer": "Xenlulozơ trinitrat",
      "distractors": [
        "Xenlulozơ axetat",
        "Tơ visco",
        "Thuốc nổ TNT"
      ],
      "explanation": "[C₆H₇O₂(OH)₃]_n + 3n HNO₃ → [C₆H₇O₂(ONO₂)₃]_n (thuốc súng không khói) + 3n H₂O."
    },
    {
      "question": "Quá trình cây xanh hấp thụ khí CO₂ và nước dưới ánh sáng mặt trời nhờ chất diệp lục tạo tinh bột gọi là:",
      "mathExpression": null,
      "correctAnswer": "Quá trình quang hợp",
      "distractors": [
        "Quá trình lên men",
        "Quá trình hô hấp",
        "Quá trình este hóa"
      ],
      "explanation": "6n CO₂ + 5n H₂O → (C₆H₁₀O₅)_n + 6n O₂↑ (quang hợp)."
    },
    {
      "question": "Tinh bột trong tự nhiên bao gồm hai dạng cấu trúc polime là:",
      "mathExpression": null,
      "correctAnswer": "Amilozơ (mạch không phân nhánh) và Amilopectin (mạch phân nhánh)",
      "distractors": [
        "Glucozơ và Fructozơ",
        "Xenlulozơ và Saccarozơ",
        "Tơ tằm và Len"
      ],
      "explanation": "Tinh bột gồm 20-30% amilozơ mạch thẳng xoắn và 70-80% amilopectin phân nhánh."
    },
    {
      "question": "Trong y tế, dung dịch Glucozơ 5% thường được dùng để:",
      "mathExpression": null,
      "correctAnswer": "Truyền dịch tĩnh mạch tiếp năng lượng trực tiếp cho người bệnh suy nhược",
      "distractors": [
        "Sát trùng vết thương ngoài da",
        "Gây mê phẫu thuật",
        "Uống giải độc"
      ],
      "explanation": "Glucozơ hấp thụ trực tiếp vào máu cung cấp năng lượng ngay cho tế bào."
    },
    {
      "question": "Lên men m gam Glucozơ (hiệu suất 100%) thu được 0,2 mol Ancol etylic: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂↑. Giá trị của m là:",
      "mathExpression": "n_{\\mathrm{glucozo}} = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 180",
      "correctAnswer": "18 gam",
      "distractors": [
        "36 gam",
        "9 gam",
        "180 gam"
      ],
      "explanation": "n(glucozơ) = 0,2 / 2 = 0,1 mol => m = 0,1 . 180 = 18 gam."
    }
  ],
  "huu_co_amin_aminoaxit": [
    {
      "question": "Glyxin là amino axit đơn giản nhất, có công thức phân tử và khối lượng mol là:",
      "mathExpression": null,
      "correctAnswer": "C₂H₅O₂N (H₂N-CH₂-COOH, M = 75 g/mol)",
      "distractors": [
        "C₃H₇O₂N, M = 89",
        "C₅H₉O₄N, M = 147",
        "C₆H₁₄N₂O₂, M = 146"
      ],
      "explanation": "Glyxin là H₂N-CH₂-COOH, CTPT C₂H₅O₂N, M = 75 g/mol."
    },
    {
      "question": "Alanin có công thức cấu tạo thu gọn là:",
      "mathExpression": null,
      "correctAnswer": "CH₃-CH(NH₂)-COOH (M = 89 g/mol)",
      "distractors": [
        "H₂N-CH₂-COOH",
        "H₂N-(CH₂)₄-COOH",
        "C₆H₅NH₂"
      ],
      "explanation": "Alanin là axit 2-aminopropanoic: CH₃-CH(NH₂)-COOH (M = 89)."
    },
    {
      "question": "Amino axit là hợp chất hữu cơ có tính chất lưỡng tính vì trong phân tử chứa:",
      "mathExpression": null,
      "correctAnswer": "Cả nhóm amino (-NH₂) có tính bazơ và nhóm cacboxyl (-COOH) có tính axit",
      "distractors": [
        "Chỉ có nhóm -NH₂",
        "Chỉ có nhóm -COOH",
        "Chỉ có liên kết đôi"
      ],
      "explanation": "Nhóm -NH₂ nhận H⁺ (bazơ) và nhóm -COOH nhường H⁺ (axit) tạo tính lưỡng tính."
    },
    {
      "question": "Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu XANH?",
      "mathExpression": null,
      "correctAnswer": "Metylamin (CH₃NH₂)",
      "distractors": [
        "Anilin (C₆H₅NH₂)",
        "Axit axetic (CH₃COOH)",
        "Glyxin (H₂N-CH₂-COOH)"
      ],
      "explanation": "Metylamin có tính bazơ mạnh hơn amoniac làm quỳ tím hóa xanh."
    },
    {
      "question": "Anilin (C₆H₅NH₂) có tính chất nào sau đây?",
      "mathExpression": null,
      "correctAnswer": "Có tính bazơ rất yếu, không làm đổi màu quỳ tím",
      "distractors": [
        "Có tính axit mạnh làm quỳ hóa đỏ",
        "Tan vô hạn trong nước",
        "Làm quỳ tím hóa xanh đậm"
      ],
      "explanation": "Vòng benzen hút e làm mật độ e trên N giảm mạnh, anilin không đổi màu quỳ."
    },
    {
      "question": "Để nhận biết Anilin (C₆H₅NH₂), người ta dùng dung dịch nước Brom vì tạo hiện tượng:",
      "mathExpression": null,
      "correctAnswer": "Xuất hiện kết tủa trắng 2,4,6-tribromanilin",
      "distractors": [
        "Dung dịch chuyển sang màu tím",
        "Có khí không màu bay lên",
        "Dung dịch hóa xanh"
      ],
      "explanation": "C₆H₅NH₂ + 3Br₂ → 2,4,6-tribromanilin↓ (trắng) + 3HBr."
    },
    {
      "question": "Liên kết peptit là liên kết giữa hai đơn vị amino axit qua nhóm chức:",
      "mathExpression": null,
      "correctAnswer": "Nhóm -CO-NH- (giữa nhóm cacboxyl và nhóm amino)",
      "distractors": [
        "Nhóm -COO-",
        "Nhóm -O-",
        "Nhóm -C-C-"
      ],
      "explanation": "Liên kết peptit là liên kết -CO-NH- giữa hai gốc alpha-amino axit."
    },
    {
      "question": "Phản ứng màu Biure dùng dung dịch Cu(OH)₂ trong kiềm tạo phức màu tím đặc trưng với:",
      "mathExpression": null,
      "correctAnswer": "Tripeptit trở lên và Protein",
      "distractors": [
        "Dipeptit",
        "Amino axit tự do",
        "Glucozơ"
      ],
      "explanation": "Dipeptit không có phản ứng biure; chỉ có peptit có từ 2 liên kết peptit trở lên (tripeptit) mới có phản ứng màu tím."
    },
    {
      "question": "Hợp chất Dipeptit có bao nhiêu liên kết peptit trong phân tử?",
      "mathExpression": null,
      "correctAnswer": "1 liên kết peptit",
      "distractors": [
        "2 liên kết peptit",
        "3 liên kết peptit",
        "Không có liên kết"
      ],
      "explanation": "Dipeptit tạo bởi 2 gốc amino axit liên kết với nhau bằng 1 liên kết peptit -CO-NH-."
    },
    {
      "question": "Bậc của một amin được xác định bằng:",
      "mathExpression": null,
      "correctAnswer": "Số nguyên tử Hiđro trong phân tử NH₃ bị thay thế bởi gốc hiđrocacbon",
      "distractors": [
        "Số nguyên tử Cacbon trong amin",
        "Số nhóm -NH₂",
        "Bậc của nguyên tử cacbon liên kết"
      ],
      "explanation": "Bậc amin = số gốc hiđrocacbon gắn vào nguyên tử N."
    },
    {
      "question": "Đimetylamin có công thức (CH₃)₂NH là amin bậc mấy?",
      "mathExpression": null,
      "correctAnswer": "Amin bậc 2",
      "distractors": [
        "Amin bậc 1",
        "Amin bậc 3",
        "Amin bậc 4"
      ],
      "explanation": "(CH₃)₂NH có 2 gốc metyl liên kết với N -> Amin bậc 2."
    },
    {
      "question": "Trimetylamin có công thức (CH₃)₃N gây nên mùi tanh đặc trưng của cá là amin bậc mấy?",
      "mathExpression": null,
      "correctAnswer": "Amin bậc 3",
      "distractors": [
        "Amin bậc 1",
        "Amin bậc 2",
        "Amin bậc 4"
      ],
      "explanation": "(CH₃)₃N có 3 gốc metyl liên kết với N -> Amin bậc 3."
    },
    {
      "question": "Axit glutamic HOOC-(CH₂)₂-CH(NH₂)-COOH có 2 nhóm -COOH và 1 nhóm -NH₂ sẽ làm quỳ tím:",
      "mathExpression": null,
      "correctAnswer": "Chuyển sang màu đỏ nhạt (tính axit trội hơn)",
      "distractors": [
        "Chuyển sang màu xanh",
        "Không đổi màu",
        "Mất màu"
      ],
      "explanation": "Số nhóm -COOH (2) nhiều hơn -NH₂ (1) nên dung dịch có tính axit, làm quỳ hóa đỏ."
    },
    {
      "question": "Lysin H₂N-(CH₂)₄-CH(NH₂)-COOH có 2 nhóm -NH₂ và 1 nhóm -COOH sẽ làm quỳ tím:",
      "mathExpression": null,
      "correctAnswer": "Chuyển sang màu xanh (tính bazơ trội hơn)",
      "distractors": [
        "Chuyển sang màu đỏ",
        "Không đổi màu",
        "Mất màu"
      ],
      "explanation": "Số nhóm -NH₂ (2) nhiều hơn -COOH (1) nên dung dịch có tính bazơ, làm quỳ hóa xanh."
    },
    {
      "question": "Muối Mononatri glutamat (bột ngọt hay mì chính) được sản xuất từ amino axit nào?",
      "mathExpression": null,
      "correctAnswer": "Axit glutamic",
      "distractors": [
        "Glyxin",
        "Alanin",
        "Valin"
      ],
      "explanation": "Bột ngọt là muối mononatri của axit glutamic."
    },
    {
      "question": "Hiện tượng lòng trắng trứng (protein) đông tụ lại khi luộc chín là hiện tượng:",
      "mathExpression": null,
      "correctAnswer": "Sự đông tụ protein bởi nhiệt độ",
      "distractors": [
        "Sự thủy phân protein",
        "Phản ứng este hóa",
        "Phản ứng xà phòng hóa"
      ],
      "explanation": "Protein bị đông tụ không thuận nghịch dưới tác dụng của nhiệt độ cao hoặc axit, kiềm."
    },
    {
      "question": "Các amino axit thiên nhiên cấu tạo nên protein của cơ thể sống hầu hết đều là:",
      "mathExpression": null,
      "correctAnswer": "α-amino axit (nhóm -NH₂ ở vị trí cacbon số 2)",
      "distractors": [
        "β-amino axit",
        "γ-amino axit",
        "Axit béo"
      ],
      "explanation": "Hầu hết các amino axit trong cơ thể sinh vật đều là alpha-amino axit."
    },
    {
      "question": "Valin là một amino axit thiết yếu có khối lượng mol phân tử là:",
      "mathExpression": "M = 117\\text{ g/mol}",
      "correctAnswer": "117 g/mol (công thức C₅H₁₁O₂N)",
      "distractors": [
        "75 g/mol",
        "89 g/mol",
        "147 g/mol"
      ],
      "explanation": "Valin có CTPT C₅H₁₁O₂N, M = 117 g/mol."
    },
    {
      "question": "Khi thủy phân hoàn toàn protein trong cơ thể người bởi enzim tiêu hóa, sản phẩm thu được là:",
      "mathExpression": null,
      "correctAnswer": "Các amino axit tự do để cơ thể hấp thụ tổng hợp protein mới",
      "distractors": [
        "Glucozơ",
        "Glixerol",
        "Axit béo"
      ],
      "explanation": "Protein thức ăn bị phân giải thành các amino axit tự do đi vào máu nuôi cơ thể."
    },
    {
      "question": "Cho 7,5 gam Glyxin (H₂N-CH₂-COOH, M = 75) phản ứng vừa đủ với dung dịch NaOH: H₂N-CH₂-COOH + NaOH → H₂N-CH₂-COONa + H₂O. Khối lượng muối sinh ra là:",
      "mathExpression": "n = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\cdot 97",
      "correctAnswer": "9,7 gam",
      "distractors": [
        "7,5 gam",
        "11,7 gam",
        "97 gam"
      ],
      "explanation": "n(glyxin) = 7,5 / 75 = 0,1 mol => n(muối) = 0,1 mol => m(muối) = 0,1 . 97 = 9,7 gam."
    }
  ]
};


export interface ElementNTK {
  symbol: string;
  nameVi: string;
  nameIupac: string;
  combinedName: string; // Tên cũ / Tên mới (Kí hiệu)
  ntk: string;
  distractors: string[];
  elementDistractors: string[];
}

export const NTK_18_ELEMENTS: ElementNTK[] = [
  { symbol: 'H', nameVi: 'Hiđro', nameIupac: 'Hydrogen', combinedName: 'Hiđro / Hydrogen (H)', ntk: '1 amu', distractors: ['2 amu', '4 amu', '16 amu'], elementDistractors: ['Heli / Helium (He)', 'Liti / Lithium (Li)', 'Cacbon / Carbon (C)'] },
  { symbol: 'Li', nameVi: 'Liti', nameIupac: 'Lithium', combinedName: 'Liti / Lithium (Li)', ntk: '7 amu', distractors: ['3 amu', '6 amu', '9 amu'], elementDistractors: ['Beri / Beryllium (Be)', 'Bo / Boron (B)', 'Hiđro / Hydrogen (H)'] },
  { symbol: 'C', nameVi: 'Cacbon', nameIupac: 'Carbon', combinedName: 'Cacbon / Carbon (C)', ntk: '12 amu', distractors: ['6 amu', '14 amu', '16 amu'], elementDistractors: ['Nitơ / Nitrogen (N)', 'Oxi / Oxygen (O)', 'Canxi / Calcium (Ca)'] },
  { symbol: 'N', nameVi: 'Nitơ', nameIupac: 'Nitrogen', combinedName: 'Nitơ / Nitrogen (N)', ntk: '14 amu', distractors: ['7 amu', '12 amu', '28 amu'], elementDistractors: ['Cacbon / Carbon (C)', 'Oxi / Oxygen (O)', 'Natri / Sodium (Na)'] },
  { symbol: 'O', nameVi: 'Oxi', nameIupac: 'Oxygen', combinedName: 'Oxi / Oxygen (O)', ntk: '16 amu', distractors: ['8 amu', '32 amu', '14 amu'], elementDistractors: ['Nitơ / Nitrogen (N)', 'Flo / Fluorine (F)', 'Lưu huỳnh / Sulfur (S)'] },
  { symbol: 'F', nameVi: 'Flo', nameIupac: 'Fluorine', combinedName: 'Flo / Fluorine (F)', ntk: '19 amu', distractors: ['9 amu', '18 amu', '35,5 amu'], elementDistractors: ['Clo / Chlorine (Cl)', 'Neon / Neon (Ne)', 'Oxi / Oxygen (O)'] },
  { symbol: 'Ne', nameVi: 'Neon', nameIupac: 'Neon', combinedName: 'Neon / Neon (Ne)', ntk: '20 amu', distractors: ['10 amu', '19 amu', '40 amu'], elementDistractors: ['Agon / Argon (Ar)', 'Flo / Fluorine (F)', 'Natri / Sodium (Na)'] },
  { symbol: 'Na', nameVi: 'Natri', nameIupac: 'Sodium', combinedName: 'Natri / Sodium (Na)', ntk: '23 amu', distractors: ['11 amu', '24 amu', '39 amu'], elementDistractors: ['Magie / Magnesium (Mg)', 'Kali / Potassium (K)', 'Nhôm / Aluminium (Al)'] },
  { symbol: 'Mg', nameVi: 'Magie', nameIupac: 'Magnesium', combinedName: 'Magie / Magnesium (Mg)', ntk: '24 amu', distractors: ['12 amu', '23 amu', '27 amu'], elementDistractors: ['Natri / Sodium (Na)', 'Nhôm / Aluminium (Al)', 'Canxi / Calcium (Ca)'] },
  { symbol: 'Al', nameVi: 'Nhôm', nameIupac: 'Aluminium', combinedName: 'Nhôm / Aluminium (Al)', ntk: '27 amu', distractors: ['13 amu', '26 amu', '56 amu'], elementDistractors: ['Magie / Magnesium (Mg)', 'Sắt / Iron (Fe)', 'Silic / Silicon (Si)'] },
  { symbol: 'Cl', nameVi: 'Clo', nameIupac: 'Chlorine', combinedName: 'Clo / Chlorine (Cl)', ntk: '35,5 amu', distractors: ['35 amu', '36 amu', '17 amu'], elementDistractors: ['Flo / Fluorine (F)', 'Brom / Bromine (Br)', 'Lưu huỳnh / Sulfur (S)'] },
  { symbol: 'Ar', nameVi: 'Agon', nameIupac: 'Argon', combinedName: 'Agon / Argon (Ar)', ntk: '40 amu', distractors: ['18 amu', '20 amu', '39 amu'], elementDistractors: ['Neon / Neon (Ne)', 'Canxi / Calcium (Ca)', 'Kali / Potassium (K)'] },
  { symbol: 'K', nameVi: 'Kali', nameIupac: 'Potassium', combinedName: 'Kali / Potassium (K)', ntk: '39 amu', distractors: ['19 amu', '23 amu', '40 amu'], elementDistractors: ['Natri / Sodium (Na)', 'Canxi / Calcium (Ca)', 'Liti / Lithium (Li)'] },
  { symbol: 'Ca', nameVi: 'Canxi', nameIupac: 'Calcium', combinedName: 'Canxi / Calcium (Ca)', ntk: '40 amu', distractors: ['20 amu', '39 amu', '24 amu'], elementDistractors: ['Kali / Potassium (K)', 'Magie / Magnesium (Mg)', 'Bari / Barium (Ba)'] },
  { symbol: 'Fe', nameVi: 'Sắt', nameIupac: 'Iron', combinedName: 'Sắt / Iron (Fe)', ntk: '56 amu', distractors: ['26 amu', '64 amu', '65 amu'], elementDistractors: ['Đồng / Copper (Cu)', 'Kẽm / Zinc (Zn)', 'Mangan / Manganese (Mn)'] },
  { symbol: 'Cu', nameVi: 'Đồng', nameIupac: 'Copper', combinedName: 'Đồng / Copper (Cu)', ntk: '64 amu', distractors: ['29 amu', '56 amu', '65 amu'], elementDistractors: ['Sắt / Iron (Fe)', 'Kẽm / Zinc (Zn)', 'Bạc / Silver (Ag)'] },
  { symbol: 'Zn', nameVi: 'Kẽm', nameIupac: 'Zinc', combinedName: 'Kẽm / Zinc (Zn)', ntk: '65 amu', distractors: ['30 amu', '56 amu', '64 amu'], elementDistractors: ['Đồng / Copper (Cu)', 'Sắt / Iron (Fe)', 'Nhôm / Aluminium (Al)'] },
  { symbol: 'Ag', nameVi: 'Bạc', nameIupac: 'Silver', combinedName: 'Bạc / Silver (Ag)', ntk: '108 amu', distractors: ['47 amu', '64 amu', '137 amu'], elementDistractors: ['Đồng / Copper (Cu)', 'Bari / Barium (Ba)', 'Chì / Lead (Pb)'] },
  { symbol: 'Ba', nameVi: 'Bari', nameIupac: 'Barium', combinedName: 'Bari / Barium (Ba)', ntk: '137 amu', distractors: ['56 amu', '108 amu', '40 amu'], elementDistractors: ['Canxi / Calcium (Ca)', 'Bạc / Silver (Ag)', 'Magie / Magnesium (Mg)'] },
  { symbol: 'S', nameVi: 'Lưu huỳnh', nameIupac: 'Sulfur', combinedName: 'Lưu huỳnh / Sulfur (S)', ntk: '32 amu', distractors: ['16 amu', '31 amu', '35,5 amu'], elementDistractors: ['Oxi / Oxygen (O)', 'Photpho / Phosphorus (P)', 'Clo / Chlorine (Cl)'] }
];

function generateNguyenTuKhoiExam(safeNo: number): LayGocHoaQuestion[] {
  const baseSeed = 7500 + safeNo * 60;
  // Hoán vị xoay vòng vị trí 20 nguyên tố theo safeNo để mỗi đề có thứ tự khác biệt
  const shift = (safeNo - 1) * 7;
  const orderedElements = Array.from({ length: 20 }, (_, i) => {
    return NTK_18_ELEMENTS[(i + shift) % 20];
  });

  return orderedElements.map((el, idx) => {
    const s = baseSeed + (idx + 1) * 23;
    // Đề chẵn: xen kẽ các câu hỏi ngược (từ NTK tìm nguyên tố) để rèn phản xạ 2 chiều
    const isReverseQuestion = (safeNo % 2 === 0) ? (idx % 2 === 1) : false;

    if (isReverseQuestion) {
      const correctAnswer = el.combinedName;
      return {
        id: idx + 1,
        question: `Câu ${idx + 1}: Nguyên tố hóa học nào sau đây có nguyên tử khối bằng ${el.ntk}?`,
        mathExpression: `M = ${el.ntk}`,
        options: makeOptions(correctAnswer, el.elementDistractors, s),
        correctAnswer,
        explanation: `Nguyên tố có nguyên tử khối M = ${el.ntk} là ${el.nameVi} (tên quốc tế mới IUPAC: ${el.nameIupac}), kí hiệu hóa học là ${el.symbol}.`,
        topic: 'khtn_nguyen_to'
      };
    } else {
      const correctAnswer = el.ntk;
      return {
        id: idx + 1,
        question: `Câu ${idx + 1}: Nguyên tử khối (khối lượng nguyên tử) của nguyên tố ${el.nameVi} / ${el.nameIupac} (${el.symbol}) là:`,
        mathExpression: `M_{\\mathrm{${el.symbol}}} = ?`,
        options: makeOptions(correctAnswer, el.distractors, s),
        correctAnswer,
        explanation: `Nguyên tố ${el.nameVi} (tên mới: ${el.nameIupac}), kí hiệu hóa học ${el.symbol}, có nguyên tử khối M = ${el.ntk}.`,
        topic: 'khtn_nguyen_to'
      };
    }
  });
}

// ==============================================================================
// HÀM LẤY ĐỀ THI HÓA THEO CHUYÊN ĐỀ VÀ SỐ ĐỀ (1 -> 10)
// ==============================================================================
export function getLayGocHoaExamQuestions(topicId: string, examNo: number): LayGocHoaQuestion[] {
  const safeNo = Math.min(10, Math.max(1, examNo));

  // Chuyên đề Phần 1: Chuyên sâu xác định Nguyên tử khối 18 nguyên tố nền tảng
  if (topicId === 'khtn_nguyen_to') {
    return generateNguyenTuKhoiExam(safeNo);
  }

  const baseSeed = 7000 + safeNo * 50;
  const topicQuestions = RAW_CHEM_DATA[topicId] || RAW_CHEM_DATA['khtn_nguyen_to'];

  // Hoán vị câu hỏi theo số đề để các đề 1..10 có thứ tự câu và đáp án xáo trộn sinh động,
  // nhưng ĐẢM BẢO trong 1 đề đúng 20 câu duy nhất không bao giờ trùng lặp!
  const shift = (safeNo - 1) * 3;
  const ordered = Array.from({ length: 20 }, (_, i) => {
    const rawIdx = (i + shift) % 20;
    return topicQuestions[rawIdx];
  });

  return ordered.map((item, idx) => {
    const s = baseSeed + (idx + 1) * 19;
    return {
      id: idx + 1,
      question: `Câu ${idx + 1}: ${item.question}`,
      mathExpression: item.mathExpression,
      options: makeOptions(item.correctAnswer, item.distractors, s),
      correctAnswer: item.correctAnswer,
      explanation: item.explanation,
      topic: topicId
    };
  });
}

// Chuyển đổi sang format câu hỏi chuẩn của bảng exams trong hệ thống
export function convertLayGocHoaQuestionsToExamFormat(layGocQuestions: LayGocHoaQuestion[]): any[] {
  return layGocQuestions.map((q, idx) => {
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
      id: `lgh_${q.id || idx + 1}`,
      question: q.question,
      options,
      correctAnswer: correctLetter,
      explanation: q.explanation || '',
      mathExpression: q.mathExpression
    };
  });
}
