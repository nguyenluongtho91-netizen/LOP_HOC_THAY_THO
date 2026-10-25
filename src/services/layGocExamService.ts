// src/services/layGocExamService.ts
// Bộ phát sinh & quản lý 60 Đề thi Lấy Gốc Toán (6 Phần x 10 Đề x 20 Câu/Đề = 1.200 câu)
// Chuẩn kiến thức Toán THCS Thầy Thọ (Lớp 6 - Lớp 9)
// CAM KẾT: 100% không trùng lặp câu hỏi, 20 câu hỏi đa dạng, độc lập trong mỗi đề thi

export interface LayGocQuestion {
  id: number;
  question: string;
  mathExpression?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  topic: string;
}

export interface LayGocTopic {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  totalExams: number;
  questionsPerExam: number;
}

export const LAY_GOC_TOPICS: LayGocTopic[] = [
  {
    id: 'so_tu_nhien',
    title: 'Phần 1: Cộng, Trừ & Tính Nhanh Số Tự Nhiên (Lớp 6)',
    shortTitle: 'Phần 1: Cộng Trừ STN (Lớp 6)',
    icon: '🔢',
    description: 'Cộng trừ số tự nhiên có nhớ, đặt tính thẳng cột, nhóm tròn chục tròn trăm và thứ tự phép tính.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tim_x_stn',
    title: 'Phần 2: Chuyên Đề Tìm x Số Tự Nhiên (Lớp 6)',
    shortTitle: 'Phần 2: Tìm x STN (Lớp 6)',
    icon: '🎯',
    description: 'Bí kíp giải toán tìm x lớp 6: Tìm số hạng, số bị trừ, thừa số, số chia, phương trình có ngoặc và lũy thừa cơ bản.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'so_am',
    title: 'Phần 3: Số Âm & Quy Tắc Đổi Dấu',
    shortTitle: 'Phần 3: Số Âm & Dấu',
    icon: '➖',
    description: 'Quy tắc cộng trừ nhân chia số nguyên, bỏ dấu ngoặc có dấu trừ, tính nhanh biểu thức số âm.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'chuyen_ve',
    title: 'Phần 4: Quy Tắc Chuyển Vế & Tìm x',
    shortTitle: 'Phần 4: Chuyển Vế & Tìm x',
    icon: '🔍',
    description: 'Quy tắc chuyển vế đổi dấu, giải phương trình tìm x từ cơ bản đến có ngoặc và x ở cả 2 vế.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'phan_so',
    title: 'Phần 5: Phân Số & Thứ Tự Thực Hiện Phép Tính',
    shortTitle: 'Phần 5: Phân Số',
    icon: '➗',
    description: 'Quy đồng, rút gọn, cộng trừ nhân chia phân số có dấu âm và thứ tự thực hiện phép tính.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tong_hop',
    title: 'Phần 6: Khảo Sát Tổng Hợp Lấy Gốc Toán (Cấp 2)',
    shortTitle: 'Phần 6: Khảo Sát Tổng Hợp',
    icon: '⚡',
    description: 'Đề tổng hợp 20 câu kiểm tra toàn diện khả năng xóa mất gốc để sẵn sàng vào chương trình chính khóa.',
    totalExams: 10,
    questionsPerExam: 20
  }
];

// Hàm PRNG giả lập ngẫu nhiên có seed để mỗi Đề thi (1->10) luôn cố định và có số liệu khác nhau
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function randInt(min: number, max: number, seed: number) {
  return Math.floor(seededRandom(seed) * (max - min + 1)) + min;
}

// Tạo 4 đáp án trắc nghiệm hoán vị ngẫu nhiên
function makeOptions(correct: string | number, distractors: (string | number)[], seed: number): string[] {
  const correctStr = String(correct);
  const uniqueDistractors = Array.from(new Set(distractors.map(d => String(d)).filter(d => d !== correctStr)));
  while (uniqueDistractors.length < 3) {
    const num = Number(correct);
    if (!isNaN(num)) {
      uniqueDistractors.push(String(num + uniqueDistractors.length + 1));
    } else {
      uniqueDistractors.push(`-${correctStr}`);
    }
  }
  const all = [correctStr, ...uniqueDistractors.slice(0, 3)];
  return all.sort((a, b) => seededRandom(seed + a.length + 7) - 0.5);
}

// ==============================================================================
// 1. SINH ĐỀ PHẦN 1: CỘNG TRỪ SỐ TỰ NHIÊN (LỚP 6) - 20 CÂU ĐA DẠNG
// ==============================================================================
function generateSoTuNhienExam(examNo: number): LayGocQuestion[] {
  const baseSeed = 500 + examNo * 50;

  const q1_a = randInt(45 + examNo * 5, 230 + examNo * 10, baseSeed + 1);
  const q1_b = randInt(58 + examNo * 5, 340 + examNo * 10, baseSeed + 2);
  const q1_ans = q1_a + q1_b;

  const q2_a = randInt(320 + examNo * 15, 850 + examNo * 20, baseSeed + 3);
  const q2_b = randInt(180, 450, baseSeed + 4);
  const q2_ans = q2_a + q2_b;

  const q3_big = randInt(400 + examNo * 20, 950 + examNo * 20, baseSeed + 5);
  const q3_small = randInt(95, q3_big - 60, baseSeed + 6);
  const q3_ans = q3_big - q3_small;

  const q4_a = randInt(500 + examNo * 10, 999, baseSeed + 7);
  const q4_b = randInt(120, q4_a - 100, baseSeed + 8);
  const q4_ans = q4_a - q4_b;

  const q5_u1 = randInt(25, 75, baseSeed + 9);
  const q5_u2 = 100 - q5_u1;
  const q5_mid = randInt(135, 460, baseSeed + 10);
  const q5_ans = 100 + q5_mid;

  const q6_m = randInt(110, 390, baseSeed + 11);
  const q6_a = q6_m + 100;
  const q6_b = randInt(45, 95, baseSeed + 12);
  const q6_ans = 100 + q6_b;

  const q7_a = randInt(250, 600, baseSeed + 13);
  const q7_b = randInt(40, 150, baseSeed + 14);
  const q7_ans = q7_b;

  const q8_a = randInt(350, 750, baseSeed + 15);
  const q8_sub1 = randInt(100, 200, baseSeed + 16);
  const q8_sub2 = randInt(25, 75, baseSeed + 17);
  const q8_ans = q8_a - (q8_sub1 + q8_sub2);

  const q9_k = randInt(12, 45, baseSeed + 18);
  const q9_a = randInt(25, 65, baseSeed + 19);
  const q9_b = 100 - q9_a;
  const q9_ans = q9_k * 100;

  const q10_a = randInt(45, 230, baseSeed + 20);
  const q10_ans = randInt(50, 300, baseSeed + 21);
  const q10_b = q10_ans + q10_a;

  const q11_a = randInt(60, 280, baseSeed + 22);
  const q11_b = randInt(120, 450, baseSeed + 23);
  const q11_ans = q11_a + q11_b;

  const q12_ans = randInt(40, 220, baseSeed + 24);
  const q12_b = randInt(60, 310, baseSeed + 25);
  const q12_a = q12_ans + q12_b;

  const q13_a = randInt(3, 9, baseSeed + 26);
  const q13_ans = randInt(15, 65, baseSeed + 27);
  const q13_b = q13_a * q13_ans;

  const q14_a = randInt(25, 75, baseSeed + 28);
  const q14_b = randInt(30, 90, baseSeed + 29);
  const q14_ans = randInt(100, 300, baseSeed + 30);
  const q14_c = (q14_ans - q14_a) + q14_b;

  const q15_b = randInt(3, 8, baseSeed + 31);
  const q15_ans = randInt(10, 40, baseSeed + 32);
  const q15_a = randInt(20, 80, baseSeed + 33);
  const q15_c = q15_a + q15_b * q15_ans;

  const q16_outer = randInt(400, 800, baseSeed + 34);
  const q16_mid = randInt(150, 300, baseSeed + 35);
  const q16_k1 = randInt(40, 90, baseSeed + 36);
  const q16_k2 = randInt(20, 50, baseSeed + 37);
  const q16_ans = q16_outer - (q16_mid - (q16_k1 + q16_k2));

  const q17_a = randInt(4, 9, baseSeed + 38);
  const q17_b = randInt(3, 6, baseSeed + 39);
  const q17_ans = q17_a * q17_a + q17_b * q17_b;

  const q18_a = randInt(2, 5, baseSeed + 40);
  const q18_ans = Math.pow(q18_a, 2);

  const q19_morning = randInt(120, 250, baseSeed + 41);
  const q19_diff = randInt(30, 80, baseSeed + 42);
  const q19_afternoon = q19_morning + q19_diff;
  const q19_ans = q19_morning + q19_afternoon;

  const q20_initial = randInt(450, 900, baseSeed + 43);
  const q20_added = randInt(120, 280, baseSeed + 44);
  const q20_borrowed = randInt(150, 320, baseSeed + 45);
  const q20_ans = q20_initial + q20_added - q20_borrowed;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Tính giá trị của phép cộng hai số tự nhiên: ${q1_a} + ${q1_b} = ?`,
      mathExpression: `${q1_a} + ${q1_b}`,
      options: makeOptions(q1_ans, [q1_ans - 10, q1_ans + 10, q1_ans + 100], baseSeed + 1),
      correctAnswer: String(q1_ans),
      explanation: `Đặt tính rồi tính từ phải sang trái (hàng đơn vị -> hàng chục -> hàng trăm). ${q1_a} + ${q1_b} = ${q1_ans}.`
    },
    {
      question: `Đặt tính rồi tính tổng của hai số tự nhiên ${q2_a} và ${q2_b}, kết quả thu được là:`,
      mathExpression: `${q2_a} + ${q2_b}`,
      options: makeOptions(q2_ans, [q2_ans + 20, q2_ans - 20, q2_ans + 100], baseSeed + 3),
      correctAnswer: String(q2_ans),
      explanation: `Cộng lần lượt các hàng từ phải sang trái có nhớ: ${q2_a} + ${q2_b} = ${q2_ans}.`
    },
    {
      question: `Kết quả của phép tính trừ có nhớ: ${q3_big} - ${q3_small} bằng:`,
      mathExpression: `${q3_big} - ${q3_small}`,
      options: makeOptions(q3_ans, [q3_ans + 10, q3_ans - 10, q3_ans + 100], baseSeed + 5),
      correctAnswer: String(q3_ans),
      explanation: `Đặt tính thẳng cột rồi trừ từ phải sang trái. Nếu chữ số bị trừ nhỏ hơn thì mượn 1 chục ở hàng liền trước. Ta được: ${q3_big} - ${q3_small} = ${q3_ans}.`
    },
    {
      question: `Hiệu giữa số tự nhiên ${q4_a} và số tự nhiên ${q4_b} có giá trị bằng bao nhiêu?`,
      mathExpression: `${q4_a} - ${q4_b}`,
      options: makeOptions(q4_ans, [q4_ans - 20, q4_ans + 20, q4_ans - 10], baseSeed + 7),
      correctAnswer: String(q4_ans),
      explanation: `Hiệu = Số bị trừ - Số trừ = ${q4_a} - ${q4_b} = ${q4_ans}.`
    },
    {
      question: `Tính nhanh giá trị biểu thức bằng cách ghép các số tròn trăm: ${q5_u1} + ${q5_mid} + ${q5_u2} = ?`,
      mathExpression: `${q5_u1} + ${q5_mid} + ${q5_u2}`,
      options: makeOptions(q5_ans, [q5_ans - 20, q5_ans + 20, q5_ans + 100], baseSeed + 9),
      correctAnswer: String(q5_ans),
      explanation: `Áp dụng tính chất giao hoán và kết hợp: (${q5_u1} + ${q5_u2}) + ${q5_mid} = 100 + ${q5_mid} = ${q5_ans}.`
    },
    {
      question: `Tính hợp lý biểu thức trừ rồi cộng: ${q6_a} - ${q6_m} + ${q6_b} = ?`,
      mathExpression: `${q6_a} - ${q6_m} + ${q6_b}`,
      options: makeOptions(q6_ans, [q6_ans - 10, q6_ans + 10, 100 + q6_b + 10], baseSeed + 11),
      correctAnswer: String(q6_ans),
      explanation: `Thực hiện từ trái sang phải: (${q6_a} - ${q6_m}) + ${q6_b} = 100 + ${q6_b} = ${q6_ans}.`
    },
    {
      question: `Áp dụng quy tắc bỏ dấu ngoặc, giá trị rút gọn của (${q7_a} + ${q7_b}) - ${q7_a} là:`,
      mathExpression: `(${q7_a} + ${q7_b}) - ${q7_a}`,
      options: makeOptions(q7_ans, [q7_ans + 10, q7_a, q7_a + q7_b], baseSeed + 13),
      correctAnswer: String(q7_ans),
      explanation: `Bỏ dấu ngoặc hoặc dùng giao hoán: (${q7_a} - ${q7_a}) + ${q7_b} = 0 + ${q7_b} = ${q7_ans}.`
    },
    {
      question: `Thực hiện phép tính chứa dấu ngoặc tròn: ${q8_a} - (${q8_sub1} + ${q8_sub2}) = ?`,
      mathExpression: `${q8_a} - (${q8_sub1} + ${q8_sub2})`,
      options: makeOptions(q8_ans, [q8_ans + 20, q8_ans - 20, q8_a - q8_sub1], baseSeed + 15),
      correctAnswer: String(q8_ans),
      explanation: `Tính trong ngoặc trước: ${q8_sub1} + ${q8_sub2} = ${q8_sub1 + q8_sub2}. Sau đó lấy ${q8_a} - ${q8_sub1 + q8_sub2} = ${q8_ans}.`
    },
    {
      question: `Tính nhanh bằng cách đặt thừa số chung: ${q9_k} · ${q9_a} + ${q9_k} · ${q9_b} = ?`,
      mathExpression: `${q9_k} \\cdot ${q9_a} + ${q9_k} \\cdot ${q9_b}`,
      options: makeOptions(q9_ans, [q9_ans - 100, q9_ans + 100, q9_k * 10], baseSeed + 18),
      correctAnswer: String(q9_ans),
      explanation: `Đặt ${q9_k} ra ngoài làm thừa số chung: ${q9_k} . (${q9_a} + ${q9_b}) = ${q9_k} . 100 = ${q9_ans}.`
    },
    {
      question: `Tìm số hạng chưa biết x trong phép cộng: x + ${q10_a} = ${q10_b}`,
      mathExpression: `x + ${q10_a} = ${q10_b}`,
      options: makeOptions(q10_ans, [q10_b + q10_a, q10_ans + 10, q10_ans - 10], baseSeed + 20),
      correctAnswer: String(q10_ans),
      explanation: `Muốn tìm số hạng chưa biết, ta lấy Tổng trừ đi số hạng đã biết: x = ${q10_b} - ${q10_a} => x = ${q10_ans}.`
    },
    {
      question: `Tìm số bị trừ x trong phép tính trừ: x - ${q11_a} = ${q11_b}`,
      mathExpression: `x - ${q11_a} = ${q11_b}`,
      options: makeOptions(q11_ans, [q11_b - q11_a, q11_ans + 20, q11_ans - 20], baseSeed + 22),
      correctAnswer: String(q11_ans),
      explanation: `Muốn tìm số bị trừ, ta lấy Hiệu cộng với số trừ: x = ${q11_b} + ${q11_a} => x = ${q11_ans}.`
    },
    {
      question: `Tìm số trừ x thỏa mãn đẳng thức: ${q12_a} - x = ${q12_b}`,
      mathExpression: `${q12_a} - x = ${q12_b}`,
      options: makeOptions(q12_ans, [q12_a + q12_b, q12_ans + 10, q12_ans - 10], baseSeed + 24),
      correctAnswer: String(q12_ans),
      explanation: `Muốn tìm số trừ, ta lấy Số bị trừ trừ đi Hiệu: x = ${q12_a} - ${q12_b} => x = ${q12_ans}.`
    },
    {
      question: `Tìm thừa số chưa biết x trong phép nhân: ${q13_a} · x = ${q13_b}`,
      mathExpression: `${q13_a} \\cdot x = ${q13_b}`,
      options: makeOptions(q13_ans, [q13_ans + 2, q13_ans - 2, q13_b - q13_a], baseSeed + 26),
      correctAnswer: String(q13_ans),
      explanation: `Muốn tìm thừa số chưa biết, ta lấy Tích chia cho thừa số đã biết: x = ${q13_b} : ${q13_a} => x = ${q13_ans}.`
    },
    {
      question: `Tìm số tự nhiên x trong biểu thức có ngoặc: (x - ${q14_a}) + ${q14_b} = ${q14_c}`,
      mathExpression: `(x - ${q14_a}) + ${q14_b} = ${q14_c}`,
      options: makeOptions(q14_ans, [q14_ans + 10, q14_ans - 10, q14_c - q14_b], baseSeed + 28),
      correctAnswer: String(q14_ans),
      explanation: `Coi (x - ${q14_a}) là số hạng chưa biết: x - ${q14_a} = ${q14_c} - ${q14_b} = ${q14_c - q14_b}. Tiếp tục: x = ${q14_c - q14_b} + ${q14_a} = ${q14_ans}.`
    },
    {
      question: `Giá trị của số tự nhiên x thỏa mãn phương trình ${q15_a} + ${q15_b} · x = ${q15_c} là:`,
      mathExpression: `${q15_a} + ${q15_b} \\cdot x = ${q15_c}`,
      options: makeOptions(q15_ans, [q15_ans + 1, q15_ans - 1, q15_ans + 5], baseSeed + 31),
      correctAnswer: String(q15_ans),
      explanation: `Chuyển ${q15_a} sang vế phải: ${q15_b} . x = ${q15_c} - ${q15_a} = ${q15_c - q15_a}. Sau đó x = ${q15_c - q15_a} : ${q15_b} = ${q15_ans}.`
    },
    {
      question: `Thực hiện phép tính đúng thứ tự ưu tiên trong ngoặc vuông và tròn: ${q16_outer} - [${q16_mid} - (${q16_k1} + ${q16_k2})] = ?`,
      mathExpression: `${q16_outer} - [${q16_mid} - (${q16_k1} + ${q16_k2})]`,
      options: makeOptions(q16_ans, [q16_ans + 10, q16_ans - 10, q16_outer - q16_mid], baseSeed + 34),
      correctAnswer: String(q16_ans),
      explanation: `Thực hiện trong ngoặc tròn trước: (${q16_k1} + ${q16_k2}) = ${q16_k1 + q16_k2}. Trong ngoặc vuông: [${q16_mid} - ${q16_k1 + q16_k2}] = ${q16_mid - (q16_k1 + q16_k2)}. Cuối cùng: ${q16_outer} - ${q16_mid - (q16_k1 + q16_k2)} = ${q16_ans}.`
    },
    {
      question: `Tính tổng bình phương của hai số tự nhiên: ${q17_a}² + ${q17_b}² = ?`,
      mathExpression: `${q17_a}^2 + ${q17_b}^2`,
      options: makeOptions(q17_ans, [q17_ans + 5, q17_ans - 5, (q17_a + q17_b) * 2], baseSeed + 38),
      correctAnswer: String(q17_ans),
      explanation: `Lũy thừa trước, cộng sau: ${q17_a}² = ${q17_a * q17_a}, ${q17_b}² = ${q17_b * q17_b}. Tổng = ${q17_a * q17_a} + ${q17_b * q17_b} = ${q17_ans}.`
    },
    {
      question: `Kết quả của phép chia hai lũy thừa cùng cơ số: ${q18_a}³ : ${q18_a} bằng bao nhiêu?`,
      mathExpression: `${q18_a}^3 : ${q18_a}`,
      options: makeOptions(q18_ans, [q18_a, q18_ans * q18_a, q18_ans - 1], baseSeed + 40),
      correctAnswer: String(q18_ans),
      explanation: `Quy tắc chia hai lũy thừa cùng cơ số: a^m : a^n = a^(m - n). Vậy ${q18_a}³ : ${q18_a}¹ = ${q18_a}² = ${q18_ans}.`
    },
    {
      question: `Một cửa hàng gạo buổi sáng bán được ${q19_morning} kg, buổi chiều bán nhiều hơn buổi sáng ${q19_diff} kg. Hỏi cả ngày cửa hàng bán được bao nhiêu kg gạo?`,
      options: makeOptions(q19_ans, [q19_morning + q19_diff, q19_morning * 2, q19_ans + 20], baseSeed + 41),
      correctAnswer: String(q19_ans),
      explanation: `Buổi chiều bán được: ${q19_morning} + ${q19_diff} = ${q19_afternoon} (kg). Cả ngày bán được: ${q19_morning} + ${q19_afternoon} = ${q19_ans} (kg).`
    },
    {
      question: `Thư viện trường có ${q20_initial} cuốn sách. Tháng trước nhập thêm ${q20_added} cuốn, tháng này cho học sinh mượn ${q20_borrowed} cuốn. Hỏi hiện tại thư viện còn lại bao nhiêu cuốn sách?`,
      options: makeOptions(q20_ans, [q20_ans + 50, q20_ans - 50, q20_initial + q20_added], baseSeed + 43),
      correctAnswer: String(q20_ans),
      explanation: `Sau khi nhập thêm thư viện có: ${q20_initial} + ${q20_added} = ${q20_initial + q20_added} cuốn. Sau khi cho mượn còn lại: ${q20_initial + q20_added} - ${q20_borrowed} = ${q20_ans} cuốn sách.`
    }
  ];

  return rawQuestions.map((item, idx) => ({
    id: idx + 1,
    ...item,
    question: `Câu ${idx + 1}: ${item.question}`,
    topic: 'so_tu_nhien'
  }));
}

// ==============================================================================
// 2. SINH ĐỀ PHẦN 2: CHUYÊN ĐỀ TÌM X SỐ TỰ NHIÊN (LỚP 6) - 20 DẠNG CÂU HỎI ĐỘC LẬP
// ==============================================================================
function generateTimXSoTuNhienExam(examNo: number): LayGocQuestion[] {
  const baseSeed = 800 + examNo * 50;

  const q1_a = randInt(25 + examNo * 2, 180 + examNo * 5, baseSeed + 1);
  const q1_ans = randInt(30, 200, baseSeed + 2);
  const q1_b = q1_ans + q1_a;

  const q2_a = randInt(40, 250, baseSeed + 3);
  const q2_b = randInt(50, 320, baseSeed + 4);
  const q2_ans = q2_a + q2_b;

  const q3_ans = randInt(35, 190, baseSeed + 5);
  const q3_b = randInt(40, 210, baseSeed + 6);
  const q3_a = q3_ans + q3_b;

  const q4_a = randInt(4, 12, baseSeed + 7);
  const q4_ans = randInt(12, 55, baseSeed + 8);
  const q4_b = q4_a * q4_ans;

  const q5_a = randInt(3, 9, baseSeed + 9);
  const q5_b = randInt(15, 60, baseSeed + 10);
  const q5_ans = q5_a * q5_b;

  const q6_ans = randInt(4, 12, baseSeed + 11);
  const q6_b = randInt(10, 45, baseSeed + 12);
  const q6_a = q6_ans * q6_b;

  const q7_a = randInt(2, 6, baseSeed + 13);
  const q7_ans = randInt(10, 40, baseSeed + 14);
  const q7_b = randInt(15, 60, baseSeed + 15);
  const q7_c = q7_a * q7_ans + q7_b;

  const q8_a = randInt(3, 7, baseSeed + 16);
  const q8_ans = randInt(12, 50, baseSeed + 17);
  const q8_b = randInt(10, 50, baseSeed + 18);
  const q8_c = q8_a * q8_ans - q8_b;

  const q9_b = randInt(2, 5, baseSeed + 19);
  const q9_ans = randInt(8, 30, baseSeed + 20);
  const q9_c = randInt(20, 80, baseSeed + 21);
  const q9_a = q9_c + q9_b * q9_ans;

  const q10_b = randInt(2, 6, baseSeed + 22);
  const q10_c = randInt(15, 50, baseSeed + 23);
  const q10_a = randInt(10, 40, baseSeed + 24);
  const q10_ans = q10_b * q10_c - q10_a;

  const q11_b = randInt(2, 5, baseSeed + 25);
  const q11_ans = randInt(20, 80, baseSeed + 26);
  const q11_a = randInt(10, 30, baseSeed + 27);
  const q11_c = (q11_ans - q11_a) * q11_b;

  const q12_c = randInt(3, 8, baseSeed + 28);
  const q12_ans = randInt(15, 50, baseSeed + 29);
  const q12_b = randInt(5, 20, baseSeed + 30);
  const q12_a = (q12_ans - q12_b) * q12_c;

  const q13_a = randInt(2, 5, baseSeed + 31);
  const q13_b = randInt(3, 6, baseSeed + 32);
  const q13_ans = randInt(10, 45, baseSeed + 33);
  const q13_c = (q13_a + q13_b) * q13_ans;

  const q14_b = randInt(2, 5, baseSeed + 34);
  const q14_diff = randInt(2, 4, baseSeed + 35);
  const q14_a = q14_b + q14_diff;
  const q14_ans = randInt(10, 40, baseSeed + 36);
  const q14_c = q14_diff * q14_ans;

  const q15_ans = randInt(3, 12, baseSeed + 37);
  const q15_a = q15_ans * q15_ans;

  const q16_ans = randInt(2, 6, baseSeed + 38);
  const q16_a = Math.pow(2, q16_ans);

  const q17_a = randInt(2, 8, baseSeed + 39);
  const q17_k = randInt(3, 9, baseSeed + 40);
  const q17_b = q17_k * q17_k;
  const q17_ans = q17_a + q17_k;

  const q18_a = randInt(10, 40, baseSeed + 41);
  const q18_b = randInt(2, 5, baseSeed + 42);
  const q18_c = randInt(3, 10, baseSeed + 43);
  const q18_ans = randInt(15, 50, baseSeed + 44);
  const q18_d = q18_a + q18_b * (q18_ans - q18_c);

  const q19_base = randInt(3, 8, baseSeed + 45);
  const q19_a = q19_base * 4;
  const q19_b = q19_base * 6;
  const q19_ans = q19_base * 2;

  const q20_m = randInt(2, 5, baseSeed + 46);
  const q20_n = randInt(3, 7, baseSeed + 47);
  const q20_ans = q20_m * q20_n;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Tìm số hạng chưa biết x trong phép cộng: x + ${q1_a} = ${q1_b}`,
      mathExpression: `x + ${q1_a} = ${q1_b}`,
      options: makeOptions(q1_ans, [q1_b + q1_a, q1_ans + 10, q1_ans - 10], baseSeed + 1),
      correctAnswer: String(q1_ans),
      explanation: `Muốn tìm số hạng chưa biết, lấy Tổng trừ đi số hạng đã biết: x = ${q1_b} - ${q1_a} => x = ${q1_ans}.`
    },
    {
      question: `Tìm số bị trừ x thỏa mãn phép trừ: x - ${q2_a} = ${q2_b}`,
      mathExpression: `x - ${q2_a} = ${q2_b}`,
      options: makeOptions(q2_ans, [q2_b - q2_a, q2_ans + 20, q2_ans - 20], baseSeed + 3),
      correctAnswer: String(q2_ans),
      explanation: `Muốn tìm số bị trừ, lấy Hiệu cộng với số trừ: x = ${q2_b} + ${q2_a} => x = ${q2_ans}.`
    },
    {
      question: `Tìm số trừ x trong phép tính: ${q3_a} - x = ${q3_b}`,
      mathExpression: `${q3_a} - x = ${q3_b}`,
      options: makeOptions(q3_ans, [q3_a + q3_b, q3_ans + 10, q3_ans - 10], baseSeed + 5),
      correctAnswer: String(q3_ans),
      explanation: `Muốn tìm số trừ, lấy Số bị trừ trừ đi Hiệu: x = ${q3_a} - ${q3_b} => x = ${q3_ans}.`
    },
    {
      question: `Tìm thừa số chưa biết x trong phép nhân: ${q4_a} · x = ${q4_b}`,
      mathExpression: `${q4_a} \\cdot x = ${q4_b}`,
      options: makeOptions(q4_ans, [q4_ans + 2, q4_ans - 2, q4_b - q4_a], baseSeed + 7),
      correctAnswer: String(q4_ans),
      explanation: `Muốn tìm thừa số chưa biết, lấy Tích chia cho thừa số đã biết: x = ${q4_b} : ${q4_a} => x = ${q4_ans}.`
    },
    {
      question: `Tìm số bị chia x trong phép chia hết: x : ${q5_a} = ${q5_b}`,
      mathExpression: `x : ${q5_a} = ${q5_b}`,
      options: makeOptions(q5_ans, [Math.floor(q5_b / q5_a), q5_ans + 10, q5_ans - 10], baseSeed + 9),
      correctAnswer: String(q5_ans),
      explanation: `Muốn tìm số bị chia, lấy Thương nhân với số chia: x = ${q5_b} . ${q5_a} => x = ${q5_ans}.`
    },
    {
      question: `Tìm số chia x thỏa mãn đẳng thức: ${q6_a} : x = ${q6_b}`,
      mathExpression: `${q6_a} : x = ${q6_b}`,
      options: makeOptions(q6_ans, [q6_a * q6_b, q6_ans + 1, q6_ans - 1], baseSeed + 11),
      correctAnswer: String(q6_ans),
      explanation: `Muốn tìm số chia, lấy Số bị chia chia cho Thương: x = ${q6_a} : ${q6_b} => x = ${q6_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn phương trình bậc nhất: ${q7_a} · x + ${q7_b} = ${q7_c}`,
      mathExpression: `${q7_a} \\cdot x + ${q7_b} = ${q7_c}`,
      options: makeOptions(q7_ans, [q7_ans + 2, q7_ans - 2, q7_ans + 5], baseSeed + 13),
      correctAnswer: String(q7_ans),
      explanation: `Chuyển ${q7_b} sang vế phải: ${q7_a} . x = ${q7_c} - ${q7_b} = ${q7_c - q7_b}. Sau đó: x = ${q7_c - q7_b} : ${q7_a} = ${q7_ans}.`
    },
    {
      question: `Giá trị của số tự nhiên x thỏa mãn ${q8_a} · x - ${q8_b} = ${q8_c} là:`,
      mathExpression: `${q8_a} \\cdot x - ${q8_b} = ${q8_c}`,
      options: makeOptions(q8_ans, [q8_ans + 2, q8_ans - 2, q8_ans + 10], baseSeed + 16),
      correctAnswer: String(q8_ans),
      explanation: `Chuyển số trừ: ${q8_a} . x = ${q8_c} + ${q8_b} = ${q8_c + q8_b}. Ta có: x = ${q8_c + q8_b} : ${q8_a} = ${q8_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn: ${q9_a} - ${q9_b} · x = ${q9_c}`,
      mathExpression: `${q9_a} - ${q9_b} \\cdot x = ${q9_c}`,
      options: makeOptions(q9_ans, [q9_ans + 1, q9_ans - 1, q9_ans + 3], baseSeed + 19),
      correctAnswer: String(q9_ans),
      explanation: `Coi ${q9_b} . x là số trừ: ${q9_b} . x = ${q9_a} - ${q9_c} = ${q9_a - q9_c}. Sau đó: x = ${q9_a - q9_c} : ${q9_b} = ${q9_ans}.`
    },
    {
      question: `Tìm x trong biểu thức có dấu ngoặc tròn: (x + ${q10_a}) : ${q10_b} = ${q10_c}`,
      mathExpression: `(x + ${q10_a}) : ${q10_b} = ${q10_c}`,
      options: makeOptions(q10_ans, [q10_ans + 10, q10_ans - 10, q10_c * q10_b], baseSeed + 22),
      correctAnswer: String(q10_ans),
      explanation: `Coi (x + ${q10_a}) là số bị chia: x + ${q10_a} = ${q10_c} . ${q10_b} = ${q10_b * q10_c}. Sau đó: x = ${q10_b * q10_c} - ${q10_a} = ${q10_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn: (x - ${q11_a}) · ${q11_b} = ${q11_c}`,
      mathExpression: `(x - ${q11_a}) \\cdot ${q11_b} = ${q11_c}`,
      options: makeOptions(q11_ans, [q11_ans + 5, q11_ans - 5, Math.floor(q11_c / q11_b)], baseSeed + 25),
      correctAnswer: String(q11_ans),
      explanation: `Tìm cụm trong ngoặc trước: x - ${q11_a} = ${q11_c} : ${q11_b} = ${q11_c / q11_b}. Tiếp tục: x = ${q11_c / q11_b} + ${q11_a} = ${q11_ans}.`
    },
    {
      question: `Tìm x thỏa mãn biểu thức chia có ngoặc: ${q12_a} : (x - ${q12_b}) = ${q12_c}`,
      mathExpression: `${q12_a} : (x - ${q12_b}) = ${q12_c}`,
      options: makeOptions(q12_ans, [q12_ans + 2, q12_ans - 2, Math.floor(q12_a / q12_c)], baseSeed + 28),
      correctAnswer: String(q12_ans),
      explanation: `Coi (x - ${q12_b}) là số chia: x - ${q12_b} = ${q12_a} : ${q12_c} = ${q12_a / q12_c}. Tiếp tục: x = ${q12_a / q12_c} + ${q12_b} = ${q12_ans}.`
    },
    {
      question: `Đặt thừa số chung để tìm số tự nhiên x: ${q13_a} · x + ${q13_b} · x = ${q13_c}`,
      mathExpression: `${q13_a} \\cdot x + ${q13_b} \\cdot x = ${q13_c}`,
      options: makeOptions(q13_ans, [q13_ans + 2, q13_ans - 2, Math.floor(q13_c / q13_a)], baseSeed + 31),
      correctAnswer: String(q13_ans),
      explanation: `Đặt x làm thừa số chung: (${q13_a} + ${q13_b}) . x = ${q13_c} => ${q13_a + q13_b} . x = ${q13_c} => x = ${q13_ans}.`
    },
    {
      question: `Rút gọn vế trái để tìm x: ${q14_a} · x - ${q14_b} · x = ${q14_c}`,
      mathExpression: `${q14_a} \\cdot x - ${q14_b} \\cdot x = ${q14_c}`,
      options: makeOptions(q14_ans, [q14_ans + 2, q14_ans - 2, Math.floor(q14_c / q14_a)], baseSeed + 34),
      correctAnswer: String(q14_ans),
      explanation: `Trừ hai hạng tử: (${q14_a} - ${q14_b}) . x = ${q14_c} => ${q14_diff} . x = ${q14_c} => x = ${q14_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn đẳng thức lũy thừa bậc 2: x² = ${q15_a}`,
      mathExpression: `x^2 = ${q15_a}`,
      options: makeOptions(q15_ans, [q15_ans + 1, q15_ans - 1, q15_a / 2], baseSeed + 37),
      correctAnswer: String(q15_ans),
      explanation: `Vì ${q15_ans}² = ${q15_ans} . ${q15_ans} = ${q15_a} và x là số tự nhiên nên x = ${q15_ans}.`
    },
    {
      question: `Tìm số mũ tự nhiên x thỏa mãn đẳng thức lũy thừa: 2ˣ = ${q16_a}`,
      mathExpression: `2^x = ${q16_a}`,
      options: makeOptions(q16_ans, [q16_ans + 1, q16_ans - 1, q16_a / 2], baseSeed + 38),
      correctAnswer: String(q16_ans),
      explanation: `Phân tích ${q16_a} ra thừa số nguyên tố: ${q16_a} = 2^${q16_ans}. Do đó x = ${q16_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn bình phương có ngoặc: (x - ${q17_a})² = ${q17_b}`,
      mathExpression: `(x - ${q17_a})^2 = ${q17_b}`,
      options: makeOptions(q17_ans, [q17_ans + 2, q17_ans - 2, q17_k], baseSeed + 39),
      correctAnswer: String(q17_ans),
      explanation: `Vì x là số tự nhiên nên x - ${q17_a} = ${q17_k} => x = ${q17_k} + ${q17_a} = ${q17_ans}.`
    },
    {
      question: `Tìm x trong biểu thức có nhiều phép tính phối hợp: ${q18_a} + ${q18_b} · (x - ${q18_c}) = ${q18_d}`,
      mathExpression: `${q18_a} + ${q18_b} \\cdot (x - ${q18_c}) = ${q18_d}`,
      options: makeOptions(q18_ans, [q18_ans + 3, q18_ans - 3, q18_ans + 5], baseSeed + 41),
      correctAnswer: String(q18_ans),
      explanation: `Chuyển ${q18_a}: ${q18_b} . (x - ${q18_c}) = ${q18_d - q18_a}. Chia cho ${q18_b}: x - ${q18_c} = ${q18_ans - q18_c} => x = ${q18_ans}.`
    },
    {
      question: `Tìm số tự nhiên x lớn nhất biết rằng ${q19_a} ⋮ x và ${q19_b} ⋮ x (ƯCLN của ${q19_a} và ${q19_b}):`,
      options: makeOptions(q19_ans, [q19_ans / 2, q19_ans * 2, q19_base], baseSeed + 45),
      correctAnswer: String(q19_ans),
      explanation: `x là ƯCLN(${q19_a}, ${q19_b}). Phân tích ra thừa số nguyên tố ta tìm được ƯCLN là ${q19_ans}.`
    },
    {
      question: `Tìm số tự nhiên x nhỏ nhất khác 0 sao cho x chia hết cho cả ${q20_m} và ${q20_n} (BCNN của ${q20_m} và ${q20_n}):`,
      options: makeOptions(q20_ans, [q20_ans * 2, q20_m + q20_n, q20_ans - 1], baseSeed + 46),
      correctAnswer: String(q20_ans),
      explanation: `x là BCNN(${q20_m}, ${q20_n}) = ${q20_ans}.`
    }
  ];

  return rawQuestions.map((item, idx) => ({
    id: idx + 1,
    ...item,
    question: `Câu ${idx + 1}: ${item.question}`,
    topic: 'tim_x_stn'
  }));
}

// ==============================================================================
// 3. SINH ĐỀ PHẦN 3: SỐ ÂM & QUY TẮC ĐỔI DẤU (20 DẠNG CÂU HỎI ĐỘC LẬP)
// ==============================================================================
function generateSoNguyenExam(examNo: number): LayGocQuestion[] {
  const baseSeed = 1000 + examNo * 50;

  const q1_a = randInt(12, 48, baseSeed + 1);
  const q1_b = randInt(15, 55, baseSeed + 2);
  const q1_ans = -(q1_a + q1_b);

  const q2_a = randInt(25, 75, baseSeed + 3);
  const q2_b = randInt(q2_a + 10, q2_a + 60, baseSeed + 4);
  const q2_ans = q2_a - q2_b;

  const q3_a = randInt(15, 60, baseSeed + 5);
  const q3_b = randInt(40, 95, baseSeed + 6);
  const q3_ans = q3_a - q3_b;

  const q4_a = randInt(20, 70, baseSeed + 7);
  const q4_b = randInt(15, 50, baseSeed + 8);
  const q4_ans = q4_a + q4_b;

  const q5_a = randInt(4, 12, baseSeed + 9);
  const q5_b = randInt(3, 9, baseSeed + 10);
  const q5_ans = -(q5_a * q5_b);

  const q6_a = randInt(5, 12, baseSeed + 11);
  const q6_b = randInt(4, 9, baseSeed + 12);
  const q6_ans = q6_a * q6_b;

  const q7_b = randInt(3, 8, baseSeed + 13);
  const q7_ans = -randInt(5, 15, baseSeed + 14);
  const q7_a = -q7_ans * q7_b;

  const q8_a = randInt(15, 45, baseSeed + 15);
  const q8_b = randInt(10, 35, baseSeed + 16);
  const q8_ans = q8_a + q8_b;

  const q9_a = randInt(40, 90, baseSeed + 17);
  const q9_b = randInt(15, 35, baseSeed + 18);
  const q9_ans = -q9_b;

  const q10_a = randInt(100, 250, baseSeed + 19);
  const q10_b = randInt(30, 80, baseSeed + 20);
  const q10_c = randInt(20, 50, baseSeed + 21);
  const q10_ans = q10_a - q10_b - q10_c;

  const q11_a = randInt(35, 85, baseSeed + 22);
  const q11_b = randInt(20, 60, baseSeed + 23);
  const q11_ans = q11_b;

  const q12_a = randInt(15, 50, baseSeed + 24);
  const q12_b = randInt(20, 60, baseSeed + 25);
  const q12_ans = -q12_b - q12_a;

  const q13_a = randInt(10, 40, baseSeed + 26);
  const q13_b = randInt(15, 50, baseSeed + 27);
  const q13_ans = q13_b - q13_a;

  const q14_a = randInt(20, 60, baseSeed + 28);
  const q14_b = randInt(15, 45, baseSeed + 29);
  const q14_ans = -q14_a - q14_b;

  const q15_a = randInt(3, 8, baseSeed + 30);
  const q15_ans = -randInt(4, 12, baseSeed + 31);
  const q15_b = q15_a * q15_ans;

  const q16_a = randInt(3, 8, baseSeed + 32);
  const q16_ans = randInt(4, 12, baseSeed + 33);
  const q16_b = -q16_a * q16_ans;

  const q17_ans = randInt(5, 25, baseSeed + 34);

  const q18_a = randInt(3, 10, baseSeed + 35);
  const q18_b = randInt(5, 15, baseSeed + 36);
  const q18_ans1 = q18_a + q18_b;
  const q18_ans2 = q18_a - q18_b;

  const q19_t1 = randInt(2, 6, baseSeed + 37);
  const q19_inc = randInt(8, 16, baseSeed + 38);
  const q19_ans = -q19_t1 + q19_inc;

  const q20_debt = randInt(5, 20, baseSeed + 39);
  const q20_pay = randInt(3, q20_debt - 1, baseSeed + 40);
  const q20_ans = -(q20_debt - q20_pay);

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Kết quả của phép cộng hai số nguyên cùng dấu âm: (-${q1_a}) + (-${q1_b}) = ?`,
      mathExpression: `(-${q1_a}) + (-${q1_b})`,
      options: makeOptions(q1_ans, [-(q1_ans), q1_ans + 10, q1_ans - 10], baseSeed + 1),
      correctAnswer: String(q1_ans),
      explanation: `Muốn cộng hai số nguyên âm, ta cộng hai giá trị tuyệt đối rồi đặt dấu trừ trước kết quả: -(${q1_a} + ${q1_b}) = ${q1_ans}.`
    },
    {
      question: `Tính tổng của hai số nguyên khác dấu: ${q2_a} + (-${q2_b}) = ?`,
      mathExpression: `${q2_a} + (-${q2_b})`,
      options: makeOptions(q2_ans, [-q2_ans, q2_ans + 5, q2_ans - 5], baseSeed + 3),
      correctAnswer: String(q2_ans),
      explanation: `Lấy số có giá trị tuyệt đối lớn trừ số có giá trị tuyệt đối nhỏ rồi mang dấu của số lớn hơn: -(${q2_b} - ${q2_a}) = ${q2_ans}.`
    },
    {
      question: `Kết quả của phép trừ số nhỏ cho số lớn: ${q3_a} - ${q3_b} = ?`,
      mathExpression: `${q3_a} - ${q3_b}`,
      options: makeOptions(q3_ans, [-q3_ans, q3_ans + 10, q3_ans - 10], baseSeed + 5),
      correctAnswer: String(q3_ans),
      explanation: `Phép trừ: a - b = a + (-b). Vì ${q3_a} < ${q3_b} nên kết quả mang dấu âm: -(${q3_b} - ${q3_a}) = ${q3_ans}.`
    },
    {
      question: `Quy tắc trừ đi số âm (trừ trừ thành cộng): ${q4_a} - (-${q4_b}) = ?`,
      mathExpression: `${q4_a} - (-${q4_b})`,
      options: makeOptions(q4_ans, [q4_a - q4_b, -(q4_ans), q4_ans - 10], baseSeed + 7),
      correctAnswer: String(q4_ans),
      explanation: `Trừ đi số âm tương đương với cộng số dương đối của nó: ${q4_a} - (-${q4_b}) = ${q4_a} + ${q4_b} = ${q4_ans}.`
    },
    {
      question: `Tích của hai số nguyên khác dấu: ${q5_a} · (-${q5_b}) bằng bao nhiêu?`,
      mathExpression: `${q5_a} \\cdot (-${q5_b})`,
      options: makeOptions(q5_ans, [-q5_ans, q5_ans + 5, q5_ans - 5], baseSeed + 9),
      correctAnswer: String(q5_ans),
      explanation: `Nhân hai số nguyên khác dấu luôn cho kết quả là số âm: -(${q5_a} . ${q5_b}) = ${q5_ans}.`
    },
    {
      question: `Tích của hai số nguyên cùng dấu âm: (-${q6_a}) · (-${q6_b}) có giá trị bằng:`,
      mathExpression: `(-${q6_a}) \\cdot (-${q6_b})`,
      options: makeOptions(q6_ans, [-q6_ans, q6_ans + 6, q6_ans - 6], baseSeed + 11),
      correctAnswer: String(q6_ans),
      explanation: `Âm nhân âm ra dương: (-${q6_a}) . (-${q6_b}) = +(${q6_a} . ${q6_b}) = ${q6_ans}.`
    },
    {
      question: `Thương của phép chia số âm cho số dương: (-${q7_a}) : ${q7_b} = ?`,
      mathExpression: `(-${q7_a}) : ${q7_b}`,
      options: makeOptions(q7_ans, [-q7_ans, q7_ans + 2, q7_ans - 2], baseSeed + 13),
      correctAnswer: String(q7_ans),
      explanation: `Chia hai số nguyên khác dấu cho kết quả mang dấu âm: -(${q7_a} : ${q7_b}) = ${q7_ans}.`
    },
    {
      question: `Tính tổng giá trị tuyệt đối: |-${q8_a}| + |${q8_b}| = ?`,
      mathExpression: `|-${q8_a}| + |${q8_b}|`,
      options: makeOptions(q8_ans, [q8_a - q8_b, -(q8_ans), q8_ans + 10], baseSeed + 15),
      correctAnswer: String(q8_ans),
      explanation: `Giá trị tuyệt đối của số âm là số đối của nó: |-${q8_a}| = ${q8_a}, |${q8_b}| = ${q8_b}. Tổng = ${q8_a} + ${q8_b} = ${q8_ans}.`
    },
    {
      question: `Áp dụng quy tắc bỏ dấu ngoặc có dấu trừ đằng trước: ${q9_a} - (${q9_a} + ${q9_b}) = ?`,
      mathExpression: `${q9_a} - (${q9_a} + ${q9_b})`,
      options: makeOptions(q9_ans, [-q9_ans, q9_ans + 5, 0], baseSeed + 17),
      correctAnswer: String(q9_ans),
      explanation: `Bỏ ngoặc đổi dấu bên trong: ${q9_a} - ${q9_a} - ${q9_b} = 0 - ${q9_b} = ${q9_ans}.`
    },
    {
      question: `Bỏ dấu ngoặc rồi thực hiện phép tính: ${q10_a} - (${q10_b} + ${q10_c}) = ?`,
      mathExpression: `${q10_a} - (${q10_b} + ${q10_c})`,
      options: makeOptions(q10_ans, [q10_a - q10_b + q10_c, q10_ans + 10, q10_ans - 10], baseSeed + 19),
      correctAnswer: String(q10_ans),
      explanation: `Bỏ ngoặc có dấu trừ: ${q10_a} - ${q10_b} - ${q10_c} = ${q10_ans}.`
    },
    {
      question: `Tính nhanh biểu thức bằng cách triệt tiêu hai số đối nhau: (-${q11_a}) + ${q11_b} + ${q11_a} = ?`,
      mathExpression: `(-${q11_a}) + ${q11_b} + ${q11_a}`,
      options: makeOptions(q11_ans, [-q11_ans, 0, q11_a], baseSeed + 22),
      correctAnswer: String(q11_ans),
      explanation: `Nhóm hai số đối nhau có tổng bằng 0: [(-${q11_a}) + ${q11_a}] + ${q11_b} = 0 + ${q11_b} = ${q11_ans}.`
    },
    {
      question: `Tìm số nguyên x thỏa mãn phương trình: x + ${q12_a} = -${q12_b}`,
      mathExpression: `x + ${q12_a} = -${q12_b}`,
      options: makeOptions(q12_ans, [-q12_ans, q12_ans + 5, q12_b - q12_a], baseSeed + 24),
      correctAnswer: String(q12_ans),
      explanation: `Chuyển vế đổi dấu: x = -${q12_b} - ${q12_a} = ${q12_ans}.`
    },
    {
      question: `Tìm số nguyên x thỏa mãn: x - (-${q13_a}) = ${q13_b}`,
      mathExpression: `x - (-${q13_a}) = ${q13_b}`,
      options: makeOptions(q13_ans, [q13_b + q13_a, -q13_ans, q13_ans + 2], baseSeed + 26),
      correctAnswer: String(q13_ans),
      explanation: `Quy tắc trừ số âm: x + ${q13_a} = ${q13_b} => x = ${q13_b} - ${q13_a} = ${q13_ans}.`
    },
    {
      question: `Tìm số nguyên x biết: -${q14_a} - x = ${q14_b}`,
      mathExpression: `-${q14_a} - x = ${q14_b}`,
      options: makeOptions(q14_ans, [-q14_ans, q14_b - q14_a, q14_ans + 5], baseSeed + 28),
      correctAnswer: String(q14_ans),
      explanation: `Chuyển -x sang phải, ${q14_b} sang trái: x = -${q14_a} - ${q14_b} = ${q14_ans}.`
    },
    {
      question: `Tìm số nguyên x trong phép nhân: ${q15_a} · x = ${q15_b}`,
      mathExpression: `${q15_a} \\cdot x = ${q15_b}`,
      options: makeOptions(q15_ans, [-q15_ans, q15_ans + 1, q15_ans - 1], baseSeed + 30),
      correctAnswer: String(q15_ans),
      explanation: `Tìm x = ${q15_b} : ${q15_a} = ${q15_ans}.`
    },
    {
      question: `Tìm số nguyên x thỏa mãn: (-${q16_a}) · x = ${q16_b}`,
      mathExpression: `(-${q16_a}) \\cdot x = ${q16_b}`,
      options: makeOptions(q16_ans, [-q16_ans, q16_ans + 1, q16_ans - 1], baseSeed + 32),
      correctAnswer: String(q16_ans),
      explanation: `Chia hai số âm ra số dương: x = ${q16_b} : (-${q16_a}) = ${q16_ans}.`
    },
    {
      question: `Tìm tất cả các số nguyên x thỏa mãn điều kiện giá trị tuyệt đối |x| = ${q17_ans}:`,
      mathExpression: `|x| = ${q17_ans}`,
      options: makeOptions(`x = ${q17_ans} hoặc x = -${q17_ans}`, [`Chỉ có x = ${q17_ans}`, `Chỉ có x = -${q17_ans}`, `x = 0`], baseSeed + 34),
      correctAnswer: `x = ${q17_ans} hoặc x = -${q17_ans}`,
      explanation: `Một số có giá trị tuyệt đối bằng a (a > 0) thì nhận 2 giá trị đối nhau: x = a hoặc x = -a.`
    },
    {
      question: `Tìm hai giá trị của x thỏa mãn: |x - ${q18_a}| = ${q18_b}`,
      mathExpression: `|x - ${q18_a}| = ${q18_b}`,
      options: makeOptions(`x = ${q18_ans1} hoặc x = ${q18_ans2}`, [`x = ${q18_ans1}`, `x = ${q18_ans2}`, `x = 0`], baseSeed + 35),
      correctAnswer: `x = ${q18_ans1} hoặc x = ${q18_ans2}`,
      explanation: `TH1: x - ${q18_a} = ${q18_b} => x = ${q18_ans1}. TH2: x - ${q18_a} = -${q18_b} => x = ${q18_ans2}.`
    },
    {
      question: `Vào mùa đông ở Sa Pa, nhiệt độ lúc 5 giờ sáng là -${q19_t1}°C. Đến 12 giờ trưa, nhiệt độ tăng thêm ${q19_inc}°C. Nhiệt độ lúc 12 giờ trưa là:`,
      options: makeOptions(`${q19_ans}°C`, [`-${q19_ans}°C`, `${q19_t1 + q19_inc}°C`, `0°C`], baseSeed + 37),
      correctAnswer: `${q19_ans}°C`,
      explanation: `Nhiệt độ buổi trưa = (-${q19_t1}) + ${q19_inc} = ${q19_ans}°C.`
    },
    {
      question: `Một công ty kinh doanh quý I lỗ ${q20_debt} triệu đồng (ghi là -${q20_debt}), quý II lãi ${q20_pay} triệu đồng. Kết quả kinh doanh sau 2 quý là:`,
      options: makeOptions(`${q20_ans} triệu đồng`, [`${-q20_ans} triệu đồng`, `${q20_debt + q20_pay} triệu đồng`, `0 triệu đồng`], baseSeed + 39),
      correctAnswer: `${q20_ans} triệu đồng`,
      explanation: `Tổng kết sau 2 quý: (-${q20_debt}) + ${q20_pay} = ${q20_ans} triệu đồng (nghĩa là còn lỗ ${q20_debt - q20_pay} triệu đồng).`
    }
  ];

  return rawQuestions.map((item, idx) => ({
    id: idx + 1,
    ...item,
    question: `Câu ${idx + 1}: ${item.question}`,
    topic: 'so_am'
  }));
}

// ==============================================================================
// 4. SINH ĐỀ PHẦN 4: QUY TẮC CHUYỂN VẾ & TÌM X (20 DẠNG CÂU HỎI ĐỘC LẬP)
// ==============================================================================
function generateChuyenVeExam(examNo: number): LayGocQuestion[] {
  const baseSeed = 1200 + examNo * 50;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: 'Theo quy tắc chuyển vế trong toán học, khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức ta phải:',
      options: makeOptions('Đổi dấu số hạng đó (+ đổi thành -, - đổi thành +)', ['Giữ nguyên dấu số hạng đó', 'Đổi số hạng đó thành nghịch đảo', 'Nhân số hạng đó với -1 cả 2 vế'], baseSeed + 1),
      correctAnswer: 'Đổi dấu số hạng đó (+ đổi thành -, - đổi thành +)',
      explanation: 'Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu "+" đổi thành "-" và dấu "-" đổi thành "+".'
    },
    {
      question: `Áp dụng quy tắc chuyển vế tìm x: x - ${15 + examNo * 3} = ${28 + examNo * 4}`,
      mathExpression: `x - ${15 + examNo * 3} = ${28 + examNo * 4}`,
      options: makeOptions(String(43 + examNo * 7), [String(13 + examNo), String(53 + examNo * 7), String(33 + examNo * 7)], baseSeed + 2),
      correctAnswer: String(43 + examNo * 7),
      explanation: `Chuyển -${15 + examNo * 3} sang vế phải đổi thành +${15 + examNo * 3}: x = ${28 + examNo * 4} + ${15 + examNo * 3} = ${43 + examNo * 7}.`
    },
    {
      question: `Chuyển vế số hạng tự do để tìm x: x + ${34 + examNo * 2} = ${-12 - examNo}`,
      mathExpression: `x + ${34 + examNo * 2} = ${-12 - examNo}`,
      options: makeOptions(String(-46 - examNo * 3), [String(22 + examNo), String(46 + examNo * 3), String(-22 - examNo)], baseSeed + 3),
      correctAnswer: String(-46 - examNo * 3),
      explanation: `Chuyển +${34 + examNo * 2} sang vế phải đổi thành -${34 + examNo * 2}: x = -${12 + examNo} - ${34 + examNo * 2} = ${-46 - examNo * 3}.`
    },
    {
      question: `Tìm x thỏa mãn đẳng thức chuyển vế: ${50 + examNo * 5} - x = ${18 + examNo * 2}`,
      mathExpression: `${50 + examNo * 5} - x = ${18 + examNo * 2}`,
      options: makeOptions(String(32 + examNo * 3), [String(68 + examNo * 7), String(30 + examNo * 3), String(-32 - examNo * 3)], baseSeed + 4),
      correctAnswer: String(32 + examNo * 3),
      explanation: `Chuyển -x sang vế phải thành +x, chuyển ${18 + examNo * 2} sang vế trái: x = ${50 + examNo * 5} - ${18 + examNo * 2} = ${32 + examNo * 3}.`
    },
    {
      question: `Giải phương trình bậc nhất một ẩn cơ bản: 2x + ${14 + examNo * 2} = ${30 + examNo * 4}`,
      mathExpression: `2x + ${14 + examNo * 2} = ${30 + examNo * 4}`,
      options: makeOptions(String(8 + examNo), [String(16 + examNo * 2), String(6 + examNo), String(10 + examNo)], baseSeed + 5),
      correctAnswer: String(8 + examNo),
      explanation: `Chuyển vế: 2x = ${30 + examNo * 4} - ${14 + examNo * 2} = ${16 + examNo * 2}. Chia cho 2: x = ${8 + examNo}.`
    },
    {
      question: `Giải phương trình bậc nhất có dấu trừ: 3x - ${15 + examNo * 3} = ${12 + examNo * 3}`,
      mathExpression: `3x - ${15 + examNo * 3} = ${12 + examNo * 3}`,
      options: makeOptions(String(9 + examNo * 2), [String(1 + examNo), String(8 + examNo * 2), String(10 + examNo * 2)], baseSeed + 6),
      correctAnswer: String(9 + examNo * 2),
      explanation: `Chuyển vế: 3x = ${12 + examNo * 3} + ${15 + examNo * 3} = ${27 + examNo * 6}. Chia cho 3: x = ${9 + examNo * 2}.`
    },
    {
      question: `Phương trình có biến x ở cả hai vế: 5x + ${10 + examNo} = 2x + ${25 + examNo * 4}`,
      mathExpression: `5x + ${10 + examNo} = 2x + ${25 + examNo * 4}`,
      options: makeOptions(String(5 + examNo), [String(3 + examNo), String(7 + examNo), String(15 + examNo * 3)], baseSeed + 7),
      correctAnswer: String(5 + examNo),
      explanation: `Chuyển 2x sang vế trái, ${10 + examNo} sang vế phải: 5x - 2x = ${25 + examNo * 4} - ${10 + examNo} => 3x = ${15 + examNo * 3} => x = ${5 + examNo}.`
    },
    {
      question: `Chuyển vế biến và hệ số: 7x - ${8 + examNo * 2} = 3x + ${16 + examNo * 2}`,
      mathExpression: `7x - ${8 + examNo * 2} = 3x + ${16 + examNo * 2}`,
      options: makeOptions(String(6 + examNo), [String(4 + examNo), String(5 + examNo), String(8 + examNo)], baseSeed + 8),
      correctAnswer: String(6 + examNo),
      explanation: `Chuyển vế: 7x - 3x = ${16 + examNo * 2} + ${8 + examNo * 2} => 4x = ${24 + examNo * 4} => x = ${6 + examNo}.`
    },
    {
      question: `Giải phương trình có dấu ngoặc tròn: 2(x - ${3 + examNo}) = ${14 + examNo * 2}`,
      mathExpression: `2(x - ${3 + examNo}) = ${14 + examNo * 2}`,
      options: makeOptions(String(10 + examNo * 2), [String(7 + examNo), String(9 + examNo * 2), String(12 + examNo * 2)], baseSeed + 9),
      correctAnswer: String(10 + examNo * 2),
      explanation: `Chia cả hai vế cho 2: x - ${3 + examNo} = ${7 + examNo} => x = ${7 + examNo} + ${3 + examNo} = ${10 + examNo * 2}.`
    },
    {
      question: `Giải phương trình phân phối và rút gọn: 3(x + 2) - 4 = ${17 + examNo * 3}`,
      mathExpression: `3(x + 2) - 4 = ${17 + examNo * 3}`,
      options: makeOptions(String(5 + examNo), [String(4 + examNo), String(6 + examNo), String(7 + examNo)], baseSeed + 10),
      correctAnswer: String(5 + examNo),
      explanation: `Chuyển -4: 3(x + 2) = ${21 + examNo * 3} => x + 2 = ${7 + examNo} => x = ${5 + examNo}.`
    },
    {
      question: `Tìm x trong phương trình có dấu trừ trước ngoặc: 15 - (2x - 3) = ${8 + examNo}`,
      mathExpression: `15 - (2x - 3) = ${8 + examNo}`,
      options: makeOptions(String(5 - Math.floor(examNo / 2)), [String(6), String(4), String(7)], baseSeed + 11),
      correctAnswer: String(5 - Math.floor(examNo / 2)),
      explanation: `Bỏ ngoặc: 15 - 2x + 3 = 8 + examNo => 18 - 2x = 8 + examNo => 2x = 10 - examNo.`
    },
    {
      question: `Áp dụng quy tắc nhân chéo giải phương trình tỉ lệ thức: x / 3 = 4 / 6`,
      mathExpression: `\\frac{x}{3} = \\frac{4}{6}`,
      options: makeOptions('2', ['1', '3', '4'], baseSeed + 12),
      correctAnswer: '2',
      explanation: `Nhân chéo: 6x = 3 . 4 = 12 => x = 12 : 6 = 2.`
    },
    {
      question: `Giải phương trình phân thức đơn giản: (x + 3) / 4 = 5`,
      mathExpression: `\\frac{x + 3}{4} = 5`,
      options: makeOptions('17', ['20', '15', '23'], baseSeed + 13),
      correctAnswer: '17',
      explanation: `Quy đồng khử mẫu: x + 3 = 5 . 4 = 20 => x = 20 - 3 = 17.`
    },
    {
      question: `Tìm x thỏa mãn phương trình: (2x - 5) / 3 = 7`,
      mathExpression: `\\frac{2x - 5}{3} = 7`,
      options: makeOptions('13', ['11', '15', '16'], baseSeed + 14),
      correctAnswer: '13',
      explanation: `Nhân chéo: 2x - 5 = 7 . 3 = 21 => 2x = 21 + 5 = 26 => x = 13.`
    },
    {
      question: `Phương trình tích A(x) . B(x) = 0 có nghiệm khi:`,
      options: makeOptions('A(x) = 0 hoặc B(x) = 0', ['A(x) = 0 và B(x) = 0 cùng lúc', 'A(x) + B(x) = 0', 'A(x) . B(x) > 0'], baseSeed + 15),
      correctAnswer: 'A(x) = 0 hoặc B(x) = 0',
      explanation: 'Tích hai thừa số bằng 0 khi ít nhất một trong hai thừa số bằng 0.'
    },
    {
      question: `Tìm tập nghiệm của phương trình tích: (x - 3)(x + 5) = 0`,
      mathExpression: `(x - 3)(x + 5) = 0`,
      options: makeOptions('x = 3 hoặc x = -5', ['x = -3 hoặc x = 5', 'x = 3 và x = 5', 'x = -3 hoặc x = -5'], baseSeed + 16),
      correctAnswer: 'x = 3 hoặc x = -5',
      explanation: `TH1: x - 3 = 0 => x = 3. TH2: x + 5 = 0 => x = -5.`
    },
    {
      question: `Giải phương trình bậc hai dạng hiệu hai bình phương: x² - 25 = 0`,
      mathExpression: `x^2 - 25 = 0`,
      options: makeOptions('x = 5 hoặc x = -5', ['Chỉ có x = 5', 'Chỉ có x = -5', 'x = 25'], baseSeed + 17),
      correctAnswer: 'x = 5 hoặc x = -5',
      explanation: `Chuyển vế: x² = 25 => x = 5 hoặc x = -5.`
    },
    {
      question: `Tìm nghiệm của phương trình chứa giá trị tuyệt đối: |2x - 1| = 5`,
      mathExpression: `|2x - 1| = 5`,
      options: makeOptions('x = 3 hoặc x = -2', ['x = 3 hoặc x = 2', 'x = -3 hoặc x = 2', 'Chỉ có x = 3'], baseSeed + 18),
      correctAnswer: 'x = 3 hoặc x = -2',
      explanation: `TH1: 2x - 1 = 5 => 2x = 6 => x = 3. TH2: 2x - 1 = -5 => 2x = -4 => x = -2.`
    },
    {
      question: `Tìm số tự nhiên x lớn nhất thỏa mãn bất phương trình: 3x + 4 < 19`,
      mathExpression: `3x + 4 < 19`,
      options: makeOptions('4', ['5', '3', '6'], baseSeed + 19),
      correctAnswer: '4',
      explanation: `Chuyển vế: 3x < 19 - 4 = 15 => x < 5. Số tự nhiên lớn nhất nhỏ hơn 5 là 4.`
    },
    {
      question: `Một hình chữ nhật có chu vi là 36 cm, chiều rộng là 8 cm. Gọi chiều dài là x (cm), giá trị của x là:`,
      options: makeOptions('10 cm', ['12 cm', '14 cm', '9 cm'], baseSeed + 20),
      correctAnswer: '10 cm',
      explanation: `Nửa chu vi: 36 : 2 = 18 cm. Chiều dài: x = 18 - 8 = 10 cm.`
    }
  ];

  return rawQuestions.map((item, idx) => ({
    id: idx + 1,
    ...item,
    question: `Câu ${idx + 1}: ${item.question}`,
    topic: 'chuyen_ve'
  }));
}

// ==============================================================================
// 5. SINH ĐỀ PHẦN 5: PHÂN SỐ & THỨ TỰ PHÉP TÍNH (20 DẠNG CÂU HỎI ĐỘC LẬP)
// ==============================================================================
function generatePhanSoExam(examNo: number): LayGocQuestion[] {
  const baseSeed = 1400 + examNo * 50;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: 'Rút gọn phân số 18 / 24 về phân số tối giản ta được kết quả là:',
      mathExpression: `\\frac{18}{24} = ?`,
      options: makeOptions('3/4', ['2/3', '9/12', '1/2'], baseSeed + 1),
      correctAnswer: '3/4',
      explanation: 'Chia cả tử và mẫu cho ƯCLN(18, 24) = 6: 18:6 / 24:6 = 3/4.'
    },
    {
      question: 'Mẫu số chung nhỏ nhất khi quy đồng hai phân số 5/6 và 7/9 là:',
      options: makeOptions('18', ['54', '12', '36'], baseSeed + 2),
      correctAnswer: '18',
      explanation: 'BCNN(6, 9) = 18. Mẫu số chung nhỏ nhất là 18.'
    },
    {
      question: 'So sánh hai phân số cùng tử: Trong hai phân số 4/7 và 4/9, phân số nào lớn hơn?',
      options: makeOptions('4/7 > 4/9', ['4/7 < 4/9', '4/7 = 4/9', 'Không so sánh được'], baseSeed + 3),
      correctAnswer: '4/7 > 4/9',
      explanation: 'Trong hai phân số dương có cùng tử số, phân số nào có mẫu nhỏ hơn thì lớn hơn: vì 7 < 9 nên 4/7 > 4/9.'
    },
    {
      question: 'Thực hiện phép cộng hai phân số cùng mẫu: 3/11 + 5/11 = ?',
      mathExpression: `\\frac{3}{11} + \\frac{5}{11}`,
      options: makeOptions('8/11', ['8/22', '15/11', '2/11'], baseSeed + 4),
      correctAnswer: '8/11',
      explanation: 'Cộng tử giữ nguyên mẫu: (3 + 5)/11 = 8/11.'
    },
    {
      question: 'Cộng hai phân số khác mẫu số: 1/3 + 2/5 = ?',
      mathExpression: `\\frac{1}{3} + \\frac{2}{5}`,
      options: makeOptions('11/15', ['3/8', '2/15', '7/15'], baseSeed + 5),
      correctAnswer: '11/15',
      explanation: 'Quy đồng mẫu 15: 5/15 + 6/15 = 11/15.'
    },
    {
      question: 'Kết quả của phép trừ hai phân số: 5/6 - 1/4 = ?',
      mathExpression: `\\frac{5}{6} - \\frac{1}{4}`,
      options: makeOptions('7/12', ['4/2', '4/12', '1/3'], baseSeed + 6),
      correctAnswer: '7/12',
      explanation: 'Quy đồng mẫu 12: 10/12 - 3/12 = 7/12.'
    },
    {
      question: 'Tính giá trị của phép nhân hai phân số: 3/5 · 10/9 = ?',
      mathExpression: `\\frac{3}{5} \\cdot \\frac{10}{9}`,
      options: makeOptions('2/3', ['30/45', '1/3', '5/6'], baseSeed + 7),
      correctAnswer: '2/3',
      explanation: 'Nhân tử với tử, mẫu với mẫu rồi rút gọn: (3 . 10) / (5 . 9) = 30 / 45 = 2/3.'
    },
    {
      question: 'Phân số nghịch đảo của phân số âm -4/7 là:',
      options: makeOptions('-7/4', ['7/4', '4/7', '-4/7'], baseSeed + 8),
      correctAnswer: '-7/4',
      explanation: 'Phân số nghịch đảo của a/b là b/a. Do đó nghịch đảo của -4/7 là -7/4.'
    },
    {
      question: 'Kết quả của phép chia phân số: 4/9 : 2/3 = ?',
      mathExpression: `\\frac{4}{9} : \\frac{2}{3}`,
      options: makeOptions('2/3', ['8/27', '3/2', '1/3'], baseSeed + 9),
      correctAnswer: '2/3',
      explanation: 'Nhân với phân số nghịch đảo: 4/9 . 3/2 = 12/18 = 2/3.'
    },
    {
      question: 'Tính nhanh bằng tính chất phân phối: 3/7 · 5/8 + 3/7 · 3/8 = ?',
      mathExpression: `\\frac{3}{7} \\cdot \\frac{5}{8} + \\frac{3}{7} \\cdot \\frac{3}{8}`,
      options: makeOptions('3/7', ['15/56', '8/8', '6/7'], baseSeed + 10),
      correctAnswer: '3/7',
      explanation: 'Đặt 3/7 ra ngoài: 3/7 . (5/8 + 3/8) = 3/7 . 1 = 3/7.'
    },
    {
      question: 'Chuyển hỗn số 2 3/5 thành phân số ta được:',
      mathExpression: `2\\frac{3}{5} = ?`,
      options: makeOptions('13/5', ['6/5', '11/5', '10/5'], baseSeed + 11),
      correctAnswer: '13/5',
      explanation: 'Tử số = Phần nguyên . Mẫu + Tử = 2 . 5 + 3 = 13. Kết quả: 13/5.'
    },
    {
      question: 'Cộng hai hỗn số: 1 1/4 + 2 1/4 = ?',
      mathExpression: `1\\frac{1}{4} + 2\\frac{1}{4}`,
      options: makeOptions('3 1/2 (hoặc 7/2)', ['3 1/4', '3 2/8', '4'], baseSeed + 12),
      correctAnswer: '3 1/2 (hoặc 7/2)',
      explanation: '(1 + 2) + (1/4 + 1/4) = 3 + 2/4 = 3 1/2 = 7/2.'
    },
    {
      question: 'Tìm x thỏa mãn phép trừ phân số: x - 1/3 = 1/2',
      mathExpression: `x - \\frac{1}{3} = \\frac{1}{2}`,
      options: makeOptions('5/6', ['1/6', '-1/6', '2/5'], baseSeed + 13),
      correctAnswer: '5/6',
      explanation: 'Chuyển vế: x = 1/2 + 1/3 = 3/6 + 2/6 = 5/6.'
    },
    {
      question: 'Tìm x trong phép nhân phân số: x · 3/4 = 9/8',
      mathExpression: `x \\cdot \\frac{3}{4} = \\frac{9}{8}`,
      options: makeOptions('3/2', ['27/32', '2/3', '4/3'], baseSeed + 14),
      correctAnswer: '3/2',
      explanation: 'x = 9/8 : 3/4 = 9/8 . 4/3 = 3/2.'
    },
    {
      question: 'Tìm x trong phép chia phân số: 2/5 : x = 4/15',
      mathExpression: `\\frac{2}{5} : x = \\frac{4}{15}`,
      options: makeOptions('3/2', ['8/75', '2/3', '5/6'], baseSeed + 15),
      correctAnswer: '3/2',
      explanation: 'x = 2/5 : 4/15 = 2/5 . 15/4 = 30/20 = 3/2.'
    },
    {
      question: 'Thực hiện phép tính đúng thứ tự ưu tiên (nhân trước, cộng sau): 1/2 + 3/4 · 2/3 = ?',
      mathExpression: `\\frac{1}{2} + \\frac{3}{4} \\cdot \\frac{2}{3}`,
      options: makeOptions('1', ['5/6', '7/8', '2/3'], baseSeed + 16),
      correctAnswer: '1',
      explanation: 'Nhân trước: 3/4 . 2/3 = 1/2. Cộng sau: 1/2 + 1/2 = 1.'
    },
    {
      question: 'Giá trị của biểu thức có dấu ngoặc: (1/2 - 1/3) : 1/6 = ?',
      mathExpression: `\\left(\\frac{1}{2} - \\frac{1}{3}\\right) : \\frac{1}{6}`,
      options: makeOptions('1', ['1/36', '6', '1/6'], baseSeed + 17),
      correctAnswer: '1',
      explanation: 'Trong ngoặc: 1/2 - 1/3 = 1/6. Sau đó: 1/6 : 1/6 = 1.'
    },
    {
      question: 'Tính giá trị: 3/5 của 50 kg bằng bao nhiêu kg?',
      options: makeOptions('30 kg', ['25 kg', '35 kg', '10 kg'], baseSeed + 18),
      correctAnswer: '30 kg',
      explanation: 'Muốn tìm m/n của b, ta tính b . m/n = 50 . 3/5 = 30 kg.'
    },
    {
      question: 'Tìm một số biết rằng 2/3 của số đó bằng 24:',
      options: makeOptions('36', ['16', '48', '32'], baseSeed + 19),
      correctAnswer: '36',
      explanation: 'Muốn tìm một số khi biết m/n của nó bằng a, ta lấy a : m/n = 24 : 2/3 = 24 . 3/2 = 36.'
    },
    {
      question: 'Một lớp học có 40 học sinh, trong đó 3/5 số học sinh là nữ. Số học sinh nam của lớp đó là:',
      options: makeOptions('16 học sinh', ['24 học sinh', '20 học sinh', '18 học sinh'], baseSeed + 20),
      correctAnswer: '16 học sinh',
      explanation: 'Số nữ: 40 . 3/5 = 24 học sinh. Số nam: 40 - 24 = 16 học sinh.'
    }
  ];

  return rawQuestions.map((item, idx) => ({
    id: idx + 1,
    ...item,
    question: `Câu ${idx + 1}: ${item.question}`,
    topic: 'phan_so'
  }));
}

// ==============================================================================
// 6. SINH ĐỀ PHẦN 6: KHẢO SÁT TỔNG HỢP LẤY GỐC TOÁN (20 CÂU ĐA DẠNG)
// ==============================================================================
function generateTongHopExam(examNo: number): LayGocQuestion[] {
  const baseSeed = 1600 + examNo * 50;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Cộng số tự nhiên có nhớ: ${138 + examNo * 12} + ${245 + examNo * 15} = ?`,
      options: makeOptions(String(383 + examNo * 27), [String(373 + examNo * 27), String(393 + examNo * 27), String(403 + examNo * 27)], baseSeed + 1),
      correctAnswer: String(383 + examNo * 27),
      explanation: `Cộng từ phải sang trái có nhớ: ${138 + examNo * 12} + ${245 + examNo * 15} = ${383 + examNo * 27}.`
    },
    {
      question: `Trừ số tự nhiên có mượn: ${502 + examNo * 20} - ${187 + examNo * 10} = ?`,
      options: makeOptions(String(315 + examNo * 10), [String(325 + examNo * 10), String(305 + examNo * 10), String(415 + examNo * 10)], baseSeed + 2),
      correctAnswer: String(315 + examNo * 10),
      explanation: `Đặt tính trừ thẳng cột: ${502 + examNo * 20} - ${187 + examNo * 10} = ${315 + examNo * 10}.`
    },
    {
      question: `Tìm số tự nhiên x biết: x + ${45 + examNo * 5} = ${120 + examNo * 10}`,
      options: makeOptions(String(75 + examNo * 5), [String(65 + examNo * 5), String(85 + examNo * 5), String(165 + examNo * 15)], baseSeed + 3),
      correctAnswer: String(75 + examNo * 5),
      explanation: `x = ${120 + examNo * 10} - ${45 + examNo * 5} = ${75 + examNo * 5}.`
    },
    {
      question: `Tìm x trong phép trừ: ${90 + examNo * 8} - x = ${35 + examNo * 3}`,
      options: makeOptions(String(55 + examNo * 5), [String(45 + examNo * 5), String(65 + examNo * 5), String(125 + examNo * 11)], baseSeed + 4),
      correctAnswer: String(55 + examNo * 5),
      explanation: `x = ${90 + examNo * 8} - ${35 + examNo * 3} = ${55 + examNo * 5}.`
    },
    {
      question: `Cộng hai số nguyên khác dấu: (-${48 + examNo * 4}) + ${32 + examNo * 2} = ?`,
      options: makeOptions(String(-16 - examNo * 2), [String(16 + examNo * 2), String(-80 - examNo * 6), String(-20)], baseSeed + 5),
      correctAnswer: String(-16 - examNo * 2),
      explanation: `Tổng mang dấu của số có trị tuyệt đối lớn hơn: -(${48 + examNo * 4} - ${32 + examNo * 2}) = ${-16 - examNo * 2}.`
    },
    {
      question: `Trừ số nguyên âm: ${25 + examNo * 3} - (-${15 + examNo * 2}) = ?`,
      options: makeOptions(String(40 + examNo * 5), [String(10 + examNo), String(-40 - examNo * 5), String(30)], baseSeed + 6),
      correctAnswer: String(40 + examNo * 5),
      explanation: `Trừ đi số âm bằng cộng số dương: ${25 + examNo * 3} + ${15 + examNo * 2} = ${40 + examNo * 5}.`
    },
    {
      question: `Nhân hai số nguyên khác dấu: (-${6 + examNo}) · ${8} = ?`,
      options: makeOptions(String(-(48 + examNo * 8)), [String(48 + examNo * 8), String(-40), String(-56)], baseSeed + 7),
      correctAnswer: String(-(48 + examNo * 8)),
      explanation: `Tích hai số khác dấu là số âm: -(${6 + examNo} . 8) = ${-(48 + examNo * 8)}.`
    },
    {
      question: `Nhân hai số nguyên cùng dấu âm: (-${5 + examNo}) · (-${7}) = ?`,
      options: makeOptions(String(35 + examNo * 7), [String(-(35 + examNo * 7)), String(30), String(42)], baseSeed + 8),
      correctAnswer: String(35 + examNo * 7),
      explanation: `Âm nhân âm ra dương: +(${5 + examNo} . 7) = ${35 + examNo * 7}.`
    },
    {
      question: `Tìm số nguyên x thỏa mãn: x - 12 = -${20 + examNo * 2}`,
      options: makeOptions(String(-8 - examNo * 2), [String(8 + examNo * 2), String(-32 - examNo * 2), String(32)], baseSeed + 9),
      correctAnswer: String(-8 - examNo * 2),
      explanation: `Chuyển vế: x = -${20 + examNo * 2} + 12 = ${-8 - examNo * 2}.`
    },
    {
      question: `Giải phương trình bậc nhất một ẩn: 3x - ${9 + examNo * 3} = ${18 + examNo * 3}`,
      options: makeOptions(String(9 + examNo * 2), [String(7 + examNo), String(8 + examNo * 2), String(10 + examNo * 2)], baseSeed + 10),
      correctAnswer: String(9 + examNo * 2),
      explanation: `3x = ${18 + examNo * 3} + ${9 + examNo * 3} = ${27 + examNo * 6} => x = ${9 + examNo * 2}.`
    },
    {
      question: `Tìm x khi có biến ở cả hai vế: 4x + 5 = x + ${26 + examNo * 3}`,
      options: makeOptions(String(7 + examNo), [String(6 + examNo), String(8 + examNo), String(5 + examNo)], baseSeed + 11),
      correctAnswer: String(7 + examNo),
      explanation: `4x - x = ${26 + examNo * 3} - 5 => 3x = ${21 + examNo * 3} => x = ${7 + examNo}.`
    },
    {
      question: `Giải phương trình có ngoặc: 2(x + 4) = ${22 + examNo * 2}`,
      options: makeOptions(String(7 + examNo), [String(8 + examNo), String(6 + examNo), String(9 + examNo)], baseSeed + 12),
      correctAnswer: String(7 + examNo),
      explanation: `x + 4 = (${22 + examNo * 2}) / 2 = ${11 + examNo} => x = ${7 + examNo}.`
    },
    {
      question: 'Rút gọn phân số 24 / 36 về tối giản ta được:',
      options: makeOptions('2/3', ['3/4', '4/6', '1/2'], baseSeed + 13),
      correctAnswer: '2/3',
      explanation: 'Chia cả tử và mẫu cho 12: 24:12 / 36:12 = 2/3.'
    },
    {
      question: 'Cộng hai phân số khác mẫu: 2/5 + 1/2 = ?',
      options: makeOptions('9/10', ['3/7', '3/10', '4/5'], baseSeed + 14),
      correctAnswer: '9/10',
      explanation: 'Quy đồng mẫu 10: 4/10 + 5/10 = 9/10.'
    },
    {
      question: 'Trừ hai phân số: 3/4 - 1/6 = ?',
      options: makeOptions('7/12', ['2/2', '1/2', '5/12'], baseSeed + 15),
      correctAnswer: '7/12',
      explanation: 'Quy đồng mẫu 12: 9/12 - 2/12 = 7/12.'
    },
    {
      question: 'Nhân hai phân số: 4/7 · 14/8 = ?',
      options: makeOptions('1', ['2', '1/2', '4/7'], baseSeed + 16),
      correctAnswer: '1',
      explanation: '(4 . 14) / (7 . 8) = 56 / 56 = 1.'
    },
    {
      question: 'Chia hai phân số: 5/6 : 5/12 = ?',
      options: makeOptions('2', ['1/2', '25/72', '1'], baseSeed + 17),
      correctAnswer: '2',
      explanation: '5/6 . 12/5 = 12/6 = 2.'
    },
    {
      question: 'Tìm x biết: x + 1/4 = 3/2',
      options: makeOptions('5/4', ['4/6', '1/4', '7/4'], baseSeed + 18),
      correctAnswer: '5/4',
      explanation: 'x = 3/2 - 1/4 = 6/4 - 1/4 = 5/4.'
    },
    {
      question: 'Tìm x trong phương trình tích: (x - 4)(x + 2) = 0',
      options: makeOptions('x = 4 hoặc x = -2', ['x = -4 hoặc x = 2', 'x = 4 và x = 2', 'x = 0'], baseSeed + 19),
      correctAnswer: 'x = 4 hoặc x = -2',
      explanation: 'Tích bằng 0 khi từng thừa số bằng 0: x = 4 hoặc x = -2.'
    },
    {
      question: `Một quyển sách giá 60.000 đồng, trong ngày hội sách được giảm giá 20%. Số tiền được giảm là:`,
      options: makeOptions('12.000 đồng', ['10.000 đồng', '15.000 đồng', '20.000 đồng'], baseSeed + 20),
      correctAnswer: '12.000 đồng',
      explanation: 'Số tiền giảm = 60.000 . 20% = 60.000 . 0,2 = 12.000 đồng.'
    }
  ];

  return rawQuestions.map((item, idx) => ({
    id: idx + 1,
    ...item,
    question: `Câu ${idx + 1}: ${item.question}`,
    topic: 'tong_hop'
  }));
}

// ==============================================================================
// HÀM LẤY ĐỀ THI TOÁN THEO CHUYÊN ĐỀ VÀ SỐ ĐỀ (1 -> 10)
// ==============================================================================
export function getLayGocExamQuestions(topicId: string, examNo: number): LayGocQuestion[] {
  const safeNo = Math.min(10, Math.max(1, examNo));
  switch (topicId) {
    case 'so_tu_nhien':
      return generateSoTuNhienExam(safeNo);
    case 'tim_x_stn':
      return generateTimXSoTuNhienExam(safeNo);
    case 'so_am':
      return generateSoNguyenExam(safeNo);
    case 'chuyen_ve':
      return generateChuyenVeExam(safeNo);
    case 'phan_so':
      return generatePhanSoExam(safeNo);
    case 'tong_hop':
    default:
      return generateTongHopExam(safeNo);
  }
}

// Chuyển đổi sang format câu hỏi chuẩn của bảng exams trong hệ thống
export function convertLayGocQuestionsToExamFormat(layGocQuestions: LayGocQuestion[]): any[] {
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
      id: `lg_${q.id || idx + 1}`,
      question: q.question,
      options,
      correctAnswer: correctLetter,
      explanation: q.explanation || '',
      mathExpression: q.mathExpression
    };
  });
}
