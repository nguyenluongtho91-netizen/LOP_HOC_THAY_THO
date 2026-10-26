// src/services/layGocExamService.ts
// Bộ phát sinh & quản lý 60 Đề thi Lấy Gốc Toán (6 Phần x 10 Đề x 20 Câu/Đề = 1.200 câu)
// Chuẩn kiến thức Chương trình Giáo dục Phổ thông mới (GDPT 2018 - SGK Kết nối tri thức, Cánh Diều, Chân trời sáng tạo)
// CAM KẾT:
// 1. 100% không trùng lặp câu hỏi, 20 câu hỏi là 20 dạng độc lập, đa dạng trong mỗi đề thi.
// 2. Dấu nhân chuẩn sách mới: Sử dụng dấu chấm '.' ở phía dưới chân dòng (baseline dot) hoặc viết liền 2x, tuyệt đối không dùng dấu chấm lơ lửng trên cao (· hay \cdot).
// 3. 4 đáp án trắc nghiệm A, B, C, D luôn duy nhất, không bao giờ trùng lặp đáp án.

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
    title: 'Phần 1: Số Tự Nhiên & Thứ Tự Thực Hiện Phép Tính (Lớp 6)',
    shortTitle: 'Phần 1: Số Tự Nhiên (Lớp 6)',
    icon: '🔢',
    description: 'Cộng trừ có nhớ, tính nhanh nhóm tròn chục trăm, đặt thừa số chung, thứ tự phép tính ngoặc tròn ngoặc vuông, lũy thừa và quan hệ chia hết.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tim_x_stn',
    title: 'Phần 2: Chuyên Đề Tìm x Số Tự Nhiên (Lớp 6)',
    shortTitle: 'Phần 2: Tìm x STN (Lớp 6)',
    icon: '🎯',
    description: 'Bí kíp giải toán tìm x lớp 6: Số hạng, số bị trừ, thừa số, số chia, phương trình có ngoặc, lũy thừa, ƯCLN và BCNN.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'so_am',
    title: 'Phần 3: Số Nguyên & Quy Tắc Đổi Dấu (Lớp 6)',
    shortTitle: 'Phần 3: Số Nguyên & Dấu',
    icon: '➖',
    description: 'Cộng trừ nhân chia số nguyên, bỏ dấu ngoặc có dấu trừ, tính nhanh biểu thức số âm, giá trị tuyệt đối và toán thực tế âm dương.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'chuyen_ve',
    title: 'Phần 4: Quy Tắc Chuyển Vế & Giải Phương Trình',
    shortTitle: 'Phần 4: Chuyển Vế & Tìm x',
    icon: '🔍',
    description: 'Quy tắc chuyển vế đổi dấu, phương trình bậc nhất, phương trình có ngoặc, phương trình tích, biến ở hai vế và bất phương trình cơ bản.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'phan_so',
    title: 'Phần 5: Phân Số & Thứ Tự Thực Hiện Phép Tính',
    shortTitle: 'Phần 5: Phân Số (Lớp 6)',
    icon: '➗',
    description: 'Rút gọn, quy đồng, cộng trừ nhân chia phân số, hỗn số, tính nhanh phân phối, tìm x phân số và bài toán tìm phân số của một số.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tong_hop',
    title: 'Phần 6: Khảo Sát Tổng Hợp Lấy Gốc Toán (Cấp 2)',
    shortTitle: 'Phần 6: Khảo Sát Tổng Hợp',
    icon: '⚡',
    description: 'Đề tổng hợp 20 câu đánh giá toàn diện năng lực tính toán số học và đại số để sẵn sàng bứt phá điểm 8, 9, 10.',
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

// Tạo 4 đáp án trắc nghiệm hoán vị ngẫu nhiên, cam kết 100% không trùng lặp
function makeOptions(correct: string | number, distractors: (string | number)[], seed: number): string[] {
  const correctStr = String(correct).trim();
  const optionsSet = new Set<string>([correctStr]);

  for (const d of distractors) {
    const dStr = String(d).trim();
    if (dStr && dStr !== correctStr) {
      optionsSet.add(dStr);
      if (optionsSet.size === 4) break;
    }
  }

  let offset = 1;
  const num = Number(correctStr);
  while (optionsSet.size < 4) {
    if (!isNaN(num)) {
      const c1 = String(num + offset);
      if (!optionsSet.has(c1)) optionsSet.add(c1);
      if (optionsSet.size < 4) {
        const c2 = String(num - offset);
        if (!optionsSet.has(c2)) optionsSet.add(c2);
      }
    } else {
      const c = `${correctStr} (${offset})`;
      if (!optionsSet.has(c)) optionsSet.add(c);
    }
    offset++;
  }

  const all = Array.from(optionsSet);
  return all.sort((a, b) => seededRandom(seed + a.length + 7) - 0.5);
}

// ==============================================================================
// 1. SINH ĐỀ PHẦN 1: SỐ TỰ NHIÊN (LỚP 6) - 20 DẠNG CÂU HỎI ĐỘC LẬP
// ==============================================================================
function generateSoTuNhienExam(examNo: number): LayGocQuestion[] {
  const baseSeed = 500 + examNo * 50;

  // Dạng 1: Cộng số tự nhiên có nhớ
  const q1_a = randInt(125 + examNo * 8, 380 + examNo * 10, baseSeed + 1);
  const q1_b = randInt(148 + examNo * 6, 420 + examNo * 12, baseSeed + 2);
  const q1_ans = q1_a + q1_b;

  // Dạng 2: Trừ số tự nhiên có mượn
  const q2_a = randInt(520 + examNo * 15, 950 + examNo * 20, baseSeed + 3);
  const q2_b = randInt(185, q2_a - 120, baseSeed + 4);
  const q2_ans = q2_a - q2_b;

  // Dạng 3: Tính nhẩm thêm bớt (cộng/trừ 99)
  const q3_a = randInt(135 + examNo * 10, 480, baseSeed + 5);
  const q3_ans = q3_a + 99;

  // Dạng 4: Nhóm tròn trăm trong phép cộng
  const q4_u1 = randInt(25, 75, baseSeed + 6);
  const q4_u2 = 100 - q4_u1;
  const q4_mid = randInt(140, 460, baseSeed + 7);
  const q4_ans = 100 + q4_mid;

  // Dạng 5: Nhóm trừ liên tiếp a - b - c = a - (b + c)
  const q5_b = randInt(35, 75, baseSeed + 8);
  const q5_c = 100 - q5_b;
  const q5_a = randInt(350, 750, baseSeed + 9);
  const q5_ans = q5_a - 100;

  // Dạng 6: Đặt thừa số chung phép cộng k . a + k . b
  const q6_k = randInt(15, 45, baseSeed + 10);
  const q6_a = randInt(26, 68, baseSeed + 11);
  const q6_b = 100 - q6_a;
  const q6_ans = q6_k * 100;

  // Dạng 7: Đặt thừa số chung phép trừ k . a - k . b
  const q7_k = randInt(12, 38, baseSeed + 12);
  const q7_diff = randInt(10, 20, baseSeed + 13);
  const q7_b = randInt(15, 40, baseSeed + 14);
  const q7_a = q7_b + q7_diff;
  const q7_ans = q7_k * q7_diff;

  // Dạng 8: Phép tính có dấu ngoặc tròn
  const q8_out = randInt(250, 600, baseSeed + 15);
  const q8_in1 = randInt(40, 110, baseSeed + 16);
  const q8_in2 = randInt(30, 90, baseSeed + 17);
  const q8_ans = q8_out - (q8_in1 + q8_in2);

  // Dạng 9: Thứ tự ưu tiên không ngoặc: nhân chia trước, cộng trừ sau
  const q9_a = randInt(20, 80, baseSeed + 18);
  const q9_b = randInt(4, 9, baseSeed + 19);
  const q9_c = randInt(6, 15, baseSeed + 20);
  const q9_ans = q9_a + q9_b * q9_c;

  // Dạng 10: Ngoặc vuông và ngoặc tròn: A - [B - (C + D)]
  const q10_out = randInt(400, 800, baseSeed + 21);
  const q10_mid = randInt(150, 280, baseSeed + 22);
  const q10_k1 = randInt(35, 75, baseSeed + 23);
  const q10_k2 = randInt(25, 55, baseSeed + 24);
  const q10_ans = q10_out - (q10_mid - (q10_k1 + q10_k2));

  // Dạng 11: Đặt tính nhân hai số tự nhiên
  const q11_a = randInt(24, 75, baseSeed + 25);
  const q11_b = randInt(12, 28, baseSeed + 26);
  const q11_ans = q11_a * q11_b;

  // Dạng 12: Phép chia hết hai số tự nhiên
  const q12_b = randInt(12, 25, baseSeed + 27);
  const q12_ans = randInt(14, 45, baseSeed + 28);
  const q12_a = q12_b * q12_ans;

  // Dạng 13: Phép chia có dư: a = b . q + r
  const q13_b = randInt(12, 30, baseSeed + 29);
  const q13_q = randInt(15, 35, baseSeed + 30);
  const q13_r = randInt(3, q13_b - 1, baseSeed + 31);
  const q13_a = q13_b * q13_q + q13_r;

  // Dạng 14: Lũy thừa bậc 2 và bậc 3: a^2 + b^2
  const q14_a = randInt(4, 9, baseSeed + 32);
  const q14_b = randInt(3, 7, baseSeed + 33);
  const q14_ans = q14_a * q14_a + q14_b * q14_b;

  // Dạng 15: Nhân hai lũy thừa cùng cơ số: a^m . a^n = a^(m + n)
  const q15_base = randInt(2, 6, baseSeed + 34);
  const q15_m = randInt(2, 4, baseSeed + 35);
  const q15_n = randInt(3, 5, baseSeed + 36);
  const q15_ans_exp = q15_m + q15_n;

  // Dạng 16: Chia hai lũy thừa cùng cơ số: a^m : a^n = a^(m - n)
  const q16_base = randInt(3, 7, baseSeed + 37);
  const q16_m = randInt(5, 8, baseSeed + 38);
  const q16_n = randInt(2, 4, baseSeed + 39);
  const q16_ans_exp = q16_m - q16_n;

  // Dạng 17: Dấu hiệu chia hết cho 2 và 5 (chữ số tận cùng)
  const q17_val = (randInt(12, 48, baseSeed + 40) * 10);

  // Dạng 18: Dấu hiệu chia hết cho 3 và 9 (tổng chữ số)
  const q18_base = randInt(15, 45, baseSeed + 41) * 9;

  // Dạng 19: Toán thực tế mua sắm (tổng tiền và tiền thừa)
  const q19_price_pen = 5000;
  const q19_pens = randInt(3, 6, baseSeed + 42);
  const q19_price_book = 12000;
  const q19_books = randInt(2, 4, baseSeed + 43);
  const q19_total = q19_price_pen * q19_pens + q19_price_book * q19_books;
  const q19_money = 100000;
  const q19_change = q19_money - q19_total;

  // Dạng 20: Toán thực tế chia đều hàng / xếp hàng
  const q20_students = randInt(120, 240, baseSeed + 44);
  const q20_rows = randInt(6, 12, baseSeed + 45);
  const q20_per_row = Math.floor(q20_students / q20_rows);
  const q20_leftover = q20_students % q20_rows;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Tính giá trị của phép cộng hai số tự nhiên:`,
      mathExpression: `${q1_a} + ${q1_b}`,
      options: makeOptions(q1_ans, [q1_ans - 10, q1_ans + 10, q1_ans + 100], baseSeed + 1),
      correctAnswer: String(q1_ans),
      explanation: `Đặt tính rồi cộng từ phải sang trái (hàng đơn vị -> hàng chục -> hàng trăm). Kết quả: ${q1_a} + ${q1_b} = ${q1_ans}.`
    },
    {
      question: `Thực hiện phép trừ có nhớ giữa hai số tự nhiên:`,
      mathExpression: `${q2_a} - ${q2_b}`,
      options: makeOptions(q2_ans, [q2_ans + 10, q2_ans - 10, q2_ans + 100], baseSeed + 3),
      correctAnswer: String(q2_ans),
      explanation: `Đặt tính thẳng cột rồi trừ lần lượt từ phải sang trái. Nếu chữ số bị trừ nhỏ hơn thì mượn 1 chục ở hàng liền trước. Ta được: ${q2_a} - ${q2_b} = ${q2_ans}.`
    },
    {
      question: `Tính nhẩm nhanh bằng cách thêm bớt (cộng với 99):`,
      mathExpression: `${q3_a} + 99`,
      options: makeOptions(q3_ans, [q3_ans + 1, q3_ans - 2, q3_a + 100], baseSeed + 5),
      correctAnswer: String(q3_ans),
      explanation: `Quy tắc tính nhẩm: ${q3_a} + 99 = ${q3_a} + 100 - 1 = ${q3_a + 100} - 1 = ${q3_ans}.`
    },
    {
      question: `Tính nhanh giá trị biểu thức bằng cách nhóm các số tròn trăm:`,
      mathExpression: `${q4_u1} + ${q4_mid} + ${q4_u2}`,
      options: makeOptions(q4_ans, [q4_ans - 20, q4_ans + 20, q4_ans + 100], baseSeed + 7),
      correctAnswer: String(q4_ans),
      explanation: `Áp dụng tính chất giao hoán và kết hợp: (${q4_u1} + ${q4_u2}) + ${q4_mid} = 100 + ${q4_mid} = ${q4_ans}.`
    },
    {
      question: `Tính hợp lý biểu thức trừ liên tiếp bằng cách nhóm số trừ:`,
      mathExpression: `${q5_a} - ${q5_b} - ${q5_c}`,
      options: makeOptions(q5_ans, [q5_ans + 10, q5_ans - 10, q5_a - 10], baseSeed + 9),
      correctAnswer: String(q5_ans),
      explanation: `Áp dụng quy tắc a - b - c = a - (b + c): ${q5_a} - (${q5_b} + ${q5_c}) = ${q5_a} - 100 = ${q5_ans}.`
    },
    {
      question: `Tính nhanh bằng cách đặt thừa số chung trong phép cộng:`,
      mathExpression: `${q6_k} . ${q6_a} + ${q6_k} . ${q6_b}`,
      options: makeOptions(q6_ans, [q6_ans - 100, q6_ans + 100, q6_k * 10], baseSeed + 11),
      correctAnswer: String(q6_ans),
      explanation: `Đặt ${q6_k} ra ngoài làm thừa số chung: ${q6_k} . (${q6_a} + ${q6_b}) = ${q6_k} . 100 = ${q6_ans}.`
    },
    {
      question: `Áp dụng tính chất phân phối đặt thừa số chung với phép trừ:`,
      mathExpression: `${q7_k} . ${q7_a} - ${q7_k} . ${q7_b}`,
      options: makeOptions(q7_ans, [q7_ans + q7_k, q7_ans - q7_k, q7_k * 10], baseSeed + 13),
      correctAnswer: String(q7_ans),
      explanation: `Đặt thừa số chung: ${q7_k} . (${q7_a} - ${q7_b}) = ${q7_k} . ${q7_diff} = ${q7_ans}.`
    },
    {
      question: `Thực hiện phép tính có chứa dấu ngoặc tròn:`,
      mathExpression: `${q8_out} - (${q8_in1} + ${q8_in2})`,
      options: makeOptions(q8_ans, [q8_ans + 20, q8_ans - 20, q8_out - q8_in1], baseSeed + 15),
      correctAnswer: String(q8_ans),
      explanation: `Tính trong ngoặc trước: ${q8_in1} + ${q8_in2} = ${q8_in1 + q8_in2}. Sau đó lấy ${q8_out} - ${q8_in1 + q8_in2} = ${q8_ans}.`
    },
    {
      question: `Thực hiện phép tính đúng thứ tự ưu tiên (nhân trước, cộng sau):`,
      mathExpression: `${q9_a} + ${q9_b} . ${q9_c}`,
      options: makeOptions(q9_ans, [(q9_a + q9_b) * q9_c, q9_ans + 10, q9_ans - 10], baseSeed + 18),
      correctAnswer: String(q9_ans),
      explanation: `Nhân trước: ${q9_b} . ${q9_c} = ${q9_b * q9_c}. Sau đó cộng: ${q9_a} + ${q9_b * q9_c} = ${q9_ans}.`
    },
    {
      question: `Thực hiện phép tính theo thứ tự ưu tiên trong ngoặc vuông và tròn:`,
      mathExpression: `${q10_out} - [${q10_mid} - (${q10_k1} + ${q10_k2})]`,
      options: makeOptions(q10_ans, [q10_ans + 10, q10_ans - 10, q10_out - q10_mid], baseSeed + 21),
      correctAnswer: String(q10_ans),
      explanation: `Trong ngoặc tròn trước: (${q10_k1} + ${q10_k2}) = ${q10_k1 + q10_k2}. Trong ngoặc vuông: [${q10_mid} - ${q10_k1 + q10_k2}] = ${q10_mid - (q10_k1 + q10_k2)}. Kết quả: ${q10_out} - ${q10_mid - (q10_k1 + q10_k2)} = ${q10_ans}.`
    },
    {
      question: `Đặt tính rồi tính kết quả của phép nhân hai số tự nhiên:`,
      mathExpression: `${q11_a} . ${q11_b}`,
      options: makeOptions(q11_ans, [q11_ans + 20, q11_ans - 20, q11_ans + 100], baseSeed + 25),
      correctAnswer: String(q11_ans),
      explanation: `Thực hiện phép nhân đặt tính thẳng hàng: ${q11_a} . ${q11_b} = ${q11_ans}.`
    },
    {
      question: `Thực hiện phép chia hết của hai số tự nhiên:`,
      mathExpression: `${q12_a} : ${q12_b}`,
      options: makeOptions(q12_ans, [q12_ans + 2, q12_ans - 2, q12_ans + 5], baseSeed + 27),
      correctAnswer: String(q12_ans),
      explanation: `Lấy ${q12_a} chia cho ${q12_b} được thương là ${q12_ans} (số dư bằng 0).`
    },
    {
      question: `Tìm thương q và số dư r trong phép chia có dư:`,
      mathExpression: `${q13_a} : ${q13_b}`,
      options: makeOptions(`q = ${q13_q}, r = ${q13_r}`, [`q = ${q13_q + 1}, r = ${q13_r}`, `q = ${q13_q}, r = ${q13_r + 1}`, `q = ${q13_q - 1}, r = 0`], baseSeed + 29),
      correctAnswer: `q = ${q13_q}, r = ${q13_r}`,
      explanation: `Ta có: ${q13_a} = ${q13_b} . ${q13_q} + ${q13_r} (với 0 < ${q13_r} < ${q13_b}). Do đó q = ${q13_q}, r = ${q13_r}.`
    },
    {
      question: `Tính tổng bình phương của hai số tự nhiên:`,
      mathExpression: `${q14_a}^2 + ${q14_b}^2`,
      options: makeOptions(q14_ans, [q14_ans + 5, q14_ans - 5, (q14_a + q14_b) * 2], baseSeed + 32),
      correctAnswer: String(q14_ans),
      explanation: `Tính lũy thừa trước: ${q14_a}^2 = ${q14_a * q14_a}, ${q14_b}^2 = ${q14_b * q14_b}. Tổng = ${q14_a * q14_a} + ${q14_b * q14_b} = ${q14_ans}.`
    },
    {
      question: `Áp dụng quy tắc nhân hai lũy thừa cùng cơ số, viết gọn biểu thức:`,
      mathExpression: `${q15_base}^${q15_m} . ${q15_base}^${q15_n}`,
      options: makeOptions(`${q15_base}^${q15_ans_exp}`, [`${q15_base}^${q15_m * q15_n}`, `${q15_base * 2}^${q15_ans_exp}`, `${q15_base}^${q15_ans_exp + 1}`], baseSeed + 34),
      correctAnswer: `${q15_base}^${q15_ans_exp}`,
      explanation: `Công thức: a^m . a^n = a^(m + n). Vậy ${q15_base}^${q15_m} . ${q15_base}^${q15_n} = ${q15_base}^(${q15_m} + ${q15_n}) = ${q15_base}^${q15_ans_exp}.`
    },
    {
      question: `Áp dụng quy tắc chia hai lũy thừa cùng cơ số, viết gọn biểu thức:`,
      mathExpression: `${q16_base}^${q16_m} : ${q16_base}^${q16_n}`,
      options: makeOptions(`${q16_base}^${q16_ans_exp}`, [`${q16_base}^${q16_m + q16_n}`, `${q16_base}^${Math.floor(q16_m / q16_n)}`, `1`], baseSeed + 37),
      correctAnswer: `${q16_base}^${q16_ans_exp}`,
      explanation: `Công thức: a^m : a^n = a^(m - n). Vậy ${q16_base}^${q16_m} : ${q16_base}^${q16_n} = ${q16_base}^(${q16_m} - ${q16_n}) = ${q16_base}^${q16_ans_exp}.`
    },
    {
      question: `Số tự nhiên nào sau đây vừa chia hết cho 2, vừa chia hết cho 5?`,
      options: makeOptions(String(q17_val), [String(q17_val + 3), String(q17_val + 5), String(q17_val + 7)], baseSeed + 40),
      correctAnswer: String(q17_val),
      explanation: `Số chia hết cho cả 2 và 5 là số có chữ số tận cùng bằng 0. Do đó ${q17_val} thỏa mãn.`
    },
    {
      question: `Số tự nhiên nào sau đây chia hết cho 9 (có tổng các chữ số chia hết cho 9)?`,
      options: makeOptions(String(q18_base), [String(q18_base + 2), String(q18_base + 4), String(q18_base + 5)], baseSeed + 41),
      correctAnswer: String(q18_base),
      explanation: `Dấu hiệu chia hết cho 9: các số có tổng chữ số chia hết cho 9 thì chia hết cho 9. Số ${q18_base} chia hết cho 9.`
    },
    {
      question: `Bạn Nam mua ${q19_pens} cây bút bi (giá ${q19_price_pen.toLocaleString('vi-VN')} đ/cây) và ${q19_books} quyển vở (giá ${q19_price_book.toLocaleString('vi-VN')} đ/quyển). Bạn đưa cô bán hàng tờ 100.000 đồng. Cô bán hàng phải trả lại bạn Nam bao nhiêu tiền?`,
      options: makeOptions(`${q19_change.toLocaleString('vi-VN')} đồng`, [`${(q19_change - 5000).toLocaleString('vi-VN')} đồng`, `${(q19_change + 5000).toLocaleString('vi-VN')} đồng`, `${q19_total.toLocaleString('vi-VN')} đồng`], baseSeed + 42),
      correctAnswer: `${q19_change.toLocaleString('vi-VN')} đồng`,
      explanation: `Tổng tiền mua hàng: ${q19_pens} . ${q19_price_pen.toLocaleString('vi-VN')} + ${q19_books} . ${q19_price_book.toLocaleString('vi-VN')} = ${q19_total.toLocaleString('vi-VN')} đồng. Tiền trả lại: 100.000 - ${q19_total.toLocaleString('vi-VN')} = ${q19_change.toLocaleString('vi-VN')} đồng.`
    },
    {
      question: `Một khối học sinh có ${q20_students} em xếp thành ${q20_rows} hàng đều nhau. Hỏi mỗi hàng có bao nhiêu học sinh và còn dư mấy bạn?`,
      options: makeOptions(`Mỗi hàng ${q20_per_row} em, dư ${q20_leftover} em`, [`Mỗi hàng ${q20_per_row + 1} em, dư 0 em`, `Mỗi hàng ${q20_per_row - 1} em, dư ${q20_leftover + 2} em`, `Mỗi hàng ${q20_per_row} em, không dư`], baseSeed + 44),
      correctAnswer: `Mỗi hàng ${q20_per_row} em, dư ${q20_leftover} em`,
      explanation: `Thực hiện phép chia: ${q20_students} : ${q20_rows} = ${q20_per_row} (dư ${q20_leftover}). Vậy mỗi hàng có ${q20_per_row} học sinh và dư ${q20_leftover} em.`
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

  // Q1: Tìm số hạng trong phép cộng: x + a = b
  const q1_a = randInt(25 + examNo * 2, 180 + examNo * 5, baseSeed + 1);
  const q1_ans = randInt(30, 200, baseSeed + 2);
  const q1_b = q1_ans + q1_a;

  // Q2: Tìm số bị trừ: x - a = b
  const q2_a = randInt(40, 250, baseSeed + 3);
  const q2_b = randInt(50, 320, baseSeed + 4);
  const q2_ans = q2_a + q2_b;

  // Q3: Tìm số trừ: a - x = b
  const q3_ans = randInt(35, 190, baseSeed + 5);
  const q3_b = randInt(40, 210, baseSeed + 6);
  const q3_a = q3_ans + q3_b;

  // Q4: Tìm thừa số: a . x = b
  const q4_a = randInt(4, 12, baseSeed + 7);
  const q4_ans = randInt(12, 55, baseSeed + 8);
  const q4_b = q4_a * q4_ans;

  // Q5: Tìm số bị chia: x : a = b
  const q5_a = randInt(3, 9, baseSeed + 9);
  const q5_b = randInt(15, 60, baseSeed + 10);
  const q5_ans = q5_a * q5_b;

  // Q6: Tìm số chia: a : x = b
  const q6_ans = randInt(4, 12, baseSeed + 11);
  const q6_b = randInt(10, 45, baseSeed + 12);
  const q6_a = q6_ans * q6_b;

  // Q7: ax + b = c
  const q7_a = randInt(2, 6, baseSeed + 13);
  const q7_ans = randInt(10, 40, baseSeed + 14);
  const q7_b = randInt(15, 60, baseSeed + 15);
  const q7_c = q7_a * q7_ans + q7_b;

  // Q8: ax - b = c
  const q8_a = randInt(3, 7, baseSeed + 16);
  const q8_ans = randInt(12, 50, baseSeed + 17);
  const q8_b = randInt(10, 50, baseSeed + 18);
  const q8_c = q8_a * q8_ans - q8_b;

  // Q9: a - b . x = c
  const q9_b = randInt(2, 5, baseSeed + 19);
  const q9_ans = randInt(8, 30, baseSeed + 20);
  const q9_c = randInt(20, 80, baseSeed + 21);
  const q9_a = q9_c + q9_b * q9_ans;

  // Q10: (x + a) : b = c
  const q10_b = randInt(2, 6, baseSeed + 22);
  const q10_c = randInt(15, 50, baseSeed + 23);
  const q10_a = randInt(10, 40, baseSeed + 24);
  const q10_ans = q10_b * q10_c - q10_a;

  // Q11: (x - a) . b = c
  const q11_b = randInt(2, 5, baseSeed + 25);
  const q11_ans = randInt(20, 80, baseSeed + 26);
  const q11_a = randInt(10, 30, baseSeed + 27);
  const q11_c = (q11_ans - q11_a) * q11_b;

  // Q12: a : (x - b) = c
  const q12_c = randInt(3, 8, baseSeed + 28);
  const q12_ans = randInt(15, 50, baseSeed + 29);
  const q12_b = randInt(5, 20, baseSeed + 30);
  const q12_a = (q12_ans - q12_b) * q12_c;

  // Q13: ax + bx = c
  const q13_a = randInt(2, 5, baseSeed + 31);
  const q13_b = randInt(3, 6, baseSeed + 32);
  const q13_ans = randInt(10, 45, baseSeed + 33);
  const q13_c = (q13_a + q13_b) * q13_ans;

  // Q14: ax - bx = c
  const q14_b = randInt(2, 5, baseSeed + 34);
  const q14_diff = randInt(2, 4, baseSeed + 35);
  const q14_a = q14_b + q14_diff;
  const q14_ans = randInt(10, 40, baseSeed + 36);
  const q14_c = q14_diff * q14_ans;

  // Q15: x^2 = a
  const q15_ans = randInt(4, 15, baseSeed + 37);
  const q15_a = q15_ans * q15_ans;

  // Q16: a^x = b
  const q16_base = randInt(2, 5, baseSeed + 38);
  const q16_ans = randInt(2, 4, baseSeed + 39);
  const q16_a = Math.pow(q16_base, q16_ans);

  // Q17: (x - a)^2 = b
  const q17_a = randInt(2, 8, baseSeed + 40);
  const q17_k = randInt(3, 9, baseSeed + 41);
  const q17_b = q17_k * q17_k;
  const q17_ans = q17_a + q17_k;

  // Q18: a + b . (x - c) = d
  const q18_a = randInt(10, 40, baseSeed + 42);
  const q18_b = randInt(2, 5, baseSeed + 43);
  const q18_c = randInt(3, 10, baseSeed + 44);
  const q18_ans = randInt(15, 50, baseSeed + 45);
  const q18_d = q18_a + q18_b * (q18_ans - q18_c);

  // Q19: ƯCLN
  const q19_base = randInt(3, 8, baseSeed + 46);
  const q19_a = q19_base * 4;
  const q19_b = q19_base * 6;
  const q19_ans = q19_base * 2;

  // Q20: BCNN
  const q20_m = randInt(2, 5, baseSeed + 47);
  const q20_n = randInt(3, 7, baseSeed + 48);
  const q20_ans = q20_m * q20_n;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Tìm số hạng chưa biết x trong phép cộng:`,
      mathExpression: `x + ${q1_a} = ${q1_b}`,
      options: makeOptions(q1_ans, [q1_b + q1_a, q1_ans + 10, q1_ans - 10], baseSeed + 1),
      correctAnswer: String(q1_ans),
      explanation: `Muốn tìm số hạng chưa biết, lấy Tổng trừ đi số hạng đã biết: x = ${q1_b} - ${q1_a} => x = ${q1_ans}.`
    },
    {
      question: `Tìm số bị trừ x trong phép tính trừ:`,
      mathExpression: `x - ${q2_a} = ${q2_b}`,
      options: makeOptions(q2_ans, [q2_b - q2_a, q2_ans + 20, q2_ans - 20], baseSeed + 3),
      correctAnswer: String(q2_ans),
      explanation: `Muốn tìm số bị trừ, lấy Hiệu cộng với số trừ: x = ${q2_b} + ${q2_a} => x = ${q2_ans}.`
    },
    {
      question: `Tìm số trừ x trong phép tính trừ:`,
      mathExpression: `${q3_a} - x = ${q3_b}`,
      options: makeOptions(q3_ans, [q3_a + q3_b, q3_ans + 10, q3_ans - 10], baseSeed + 5),
      correctAnswer: String(q3_ans),
      explanation: `Muốn tìm số trừ, lấy Số bị trừ trừ đi Hiệu: x = ${q3_a} - ${q3_b} => x = ${q3_ans}.`
    },
    {
      question: `Tìm thừa số chưa biết x trong phép nhân:`,
      mathExpression: `${q4_a} . x = ${q4_b}`,
      options: makeOptions(q4_ans, [q4_ans + 2, q4_ans - 2, q4_b - q4_a], baseSeed + 7),
      correctAnswer: String(q4_ans),
      explanation: `Muốn tìm thừa số chưa biết, lấy Tích chia cho thừa số đã biết: x = ${q4_b} : ${q4_a} => x = ${q4_ans}.`
    },
    {
      question: `Tìm số bị chia x trong phép chia:`,
      mathExpression: `x : ${q5_a} = ${q5_b}`,
      options: makeOptions(q5_ans, [Math.floor(q5_b / q5_a), q5_ans + 10, q5_ans - 10], baseSeed + 9),
      correctAnswer: String(q5_ans),
      explanation: `Muốn tìm số bị chia, lấy Thương nhân với số chia: x = ${q5_b} . ${q5_a} => x = ${q5_ans}.`
    },
    {
      question: `Tìm số chia x trong phép chia:`,
      mathExpression: `${q6_a} : x = ${q6_b}`,
      options: makeOptions(q6_ans, [q6_a * q6_b, q6_ans + 1, q6_ans - 1], baseSeed + 11),
      correctAnswer: String(q6_ans),
      explanation: `Muốn tìm số chia, lấy Số bị chia chia cho Thương: x = ${q6_a} : ${q6_b} => x = ${q6_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn phương trình:`,
      mathExpression: `${q7_a} . x + ${q7_b} = ${q7_c}`,
      options: makeOptions(q7_ans, [q7_ans + 2, q7_ans - 2, q7_ans + 5], baseSeed + 13),
      correctAnswer: String(q7_ans),
      explanation: `Chuyển ${q7_b} sang vế phải: ${q7_a} . x = ${q7_c} - ${q7_b} = ${q7_c - q7_b}. Sau đó: x = ${q7_c - q7_b} : ${q7_a} = ${q7_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn:`,
      mathExpression: `${q8_a} . x - ${q8_b} = ${q8_c}`,
      options: makeOptions(q8_ans, [q8_ans + 2, q8_ans - 2, q8_ans + 10], baseSeed + 16),
      correctAnswer: String(q8_ans),
      explanation: `Chuyển số trừ: ${q8_a} . x = ${q8_c} + ${q8_b} = ${q8_c + q8_b}. Ta có: x = ${q8_c + q8_b} : ${q8_a} = ${q8_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn đẳng thức:`,
      mathExpression: `${q9_a} - ${q9_b} . x = ${q9_c}`,
      options: makeOptions(q9_ans, [q9_ans + 1, q9_ans - 1, q9_ans + 3], baseSeed + 19),
      correctAnswer: String(q9_ans),
      explanation: `Coi ${q9_b} . x là số trừ: ${q9_b} . x = ${q9_a} - ${q9_c} = ${q9_a - q9_c}. Sau đó: x = ${q9_a - q9_c} : ${q9_b} = ${q9_ans}.`
    },
    {
      question: `Tìm số tự nhiên x trong biểu thức chia có dấu ngoặc:`,
      mathExpression: `(x + ${q10_a}) : ${q10_b} = ${q10_c}`,
      options: makeOptions(q10_ans, [q10_ans + 10, q10_ans - 10, q10_c * q10_b], baseSeed + 22),
      correctAnswer: String(q10_ans),
      explanation: `Coi (x + ${q10_a}) là số bị chia: x + ${q10_a} = ${q10_c} . ${q10_b} = ${q10_b * q10_c}. Sau đó: x = ${q10_b * q10_c} - ${q10_a} = ${q10_ans}.`
    },
    {
      question: `Tìm số tự nhiên x trong biểu thức nhân có dấu ngoặc:`,
      mathExpression: `(x - ${q11_a}) . ${q11_b} = ${q11_c}`,
      options: makeOptions(q11_ans, [q11_ans + 5, q11_ans - 5, Math.floor(q11_c / q11_b)], baseSeed + 25),
      correctAnswer: String(q11_ans),
      explanation: `Tìm cụm trong ngoặc trước: x - ${q11_a} = ${q11_c} : ${q11_b} = ${q11_c / q11_b}. Tiếp tục: x = ${q11_c / q11_b} + ${q11_a} = ${q11_ans}.`
    },
    {
      question: `Tìm x trong biểu thức chia có ngoặc ở số chia:`,
      mathExpression: `${q12_a} : (x - ${q12_b}) = ${q12_c}`,
      options: makeOptions(q12_ans, [q12_ans + 2, q12_ans - 2, Math.floor(q12_a / q12_c)], baseSeed + 28),
      correctAnswer: String(q12_ans),
      explanation: `Coi (x - ${q12_b}) là số chia: x - ${q12_b} = ${q12_a} : ${q12_c} = ${q12_a / q12_c}. Tiếp tục: x = ${q12_a / q12_c} + ${q12_b} = ${q12_ans}.`
    },
    {
      question: `Đặt thừa số chung để tìm số tự nhiên x:`,
      mathExpression: `${q13_a} . x + ${q13_b} . x = ${q13_c}`,
      options: makeOptions(q13_ans, [q13_ans + 2, q13_ans - 2, Math.floor(q13_c / q13_a)], baseSeed + 31),
      correctAnswer: String(q13_ans),
      explanation: `Đặt x làm thừa số chung: (${q13_a} + ${q13_b}) . x = ${q13_c} => ${q13_a + q13_b} . x = ${q13_c} => x = ${q13_ans}.`
    },
    {
      question: `Rút gọn vế trái bằng cách đặt thừa số chung để tìm x:`,
      mathExpression: `${q14_a} . x - ${q14_b} . x = ${q14_c}`,
      options: makeOptions(q14_ans, [q14_ans + 2, q14_ans - 2, Math.floor(q14_c / q14_a)], baseSeed + 34),
      correctAnswer: String(q14_ans),
      explanation: `Trừ hai hạng tử: (${q14_a} - ${q14_b}) . x = ${q14_c} => ${q14_diff} . x = ${q14_c} => x = ${q14_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn đẳng thức lũy thừa bậc 2:`,
      mathExpression: `x^2 = ${q15_a}`,
      options: makeOptions(q15_ans, [q15_ans + 1, q15_ans - 1, Math.floor(q15_a / 2)], baseSeed + 37),
      correctAnswer: String(q15_ans),
      explanation: `Vì ${q15_ans}^2 = ${q15_ans} . ${q15_ans} = ${q15_a} và x là số tự nhiên nên x = ${q15_ans}.`
    },
    {
      question: `Tìm số mũ tự nhiên x thỏa mãn đẳng thức lũy thừa:`,
      mathExpression: `${q16_base}^x = ${q16_a}`,
      options: makeOptions(q16_ans, [q16_ans + 1, q16_ans - 1, q16_ans + 2], baseSeed + 38),
      correctAnswer: String(q16_ans),
      explanation: `Phân tích ${q16_a} theo cơ số ${q16_base}: ${q16_a} = ${q16_base}^${q16_ans}. Do đó x = ${q16_ans}.`
    },
    {
      question: `Tìm số tự nhiên x thỏa mãn bình phương có ngoặc:`,
      mathExpression: `(x - ${q17_a})^2 = ${q17_b}`,
      options: makeOptions(q17_ans, [q17_ans + 2, q17_ans - 2, q17_k], baseSeed + 40),
      correctAnswer: String(q17_ans),
      explanation: `Vì x là số tự nhiên và ${q17_k}^2 = ${q17_b} nên x - ${q17_a} = ${q17_k} => x = ${q17_k} + ${q17_a} = ${q17_ans}.`
    },
    {
      question: `Tìm số tự nhiên x trong biểu thức phối hợp nhiều phép tính:`,
      mathExpression: `${q18_a} + ${q18_b} . (x - ${q18_c}) = ${q18_d}`,
      options: makeOptions(q18_ans, [q18_ans + 3, q18_ans - 3, q18_ans + 5], baseSeed + 42),
      correctAnswer: String(q18_ans),
      explanation: `Chuyển số hạng tự do: ${q18_b} . (x - ${q18_c}) = ${q18_d - q18_a}. Chia cho ${q18_b}: x - ${q18_c} = ${q18_ans - q18_c} => x = ${q18_ans}.`
    },
    {
      question: `Tìm số tự nhiên x lớn nhất biết rằng ${q19_a} ⋮ x và ${q19_b} ⋮ x (ƯCLN của ${q19_a} và ${q19_b}):`,
      options: makeOptions(q19_ans, [Math.floor(q19_ans / 2), q19_ans * 2, q19_base], baseSeed + 46),
      correctAnswer: String(q19_ans),
      explanation: `x là ƯCLN(${q19_a}, ${q19_b}). Phân tích ra thừa số nguyên tố: ${q19_a} = ${q19_base} . 4, ${q19_b} = ${q19_base} . 6. Ta tìm được ƯCLN là ${q19_ans}.`
    },
    {
      question: `Tìm số tự nhiên x nhỏ nhất khác 0 sao cho x chia hết cho cả ${q20_m} và ${q20_n} (BCNN của ${q20_m} và ${q20_n}):`,
      options: makeOptions(q20_ans, [q20_ans * 2, q20_m + q20_n, q20_ans - 1], baseSeed + 47),
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
// 3. SINH ĐỀ PHẦN 3: SỐ NGUYÊN & QUY TẮC ĐỔI DẤU (20 DẠNG CÂU HỎI ĐỘC LẬP)
// ==============================================================================
function generateSoNguyenExam(examNo: number): LayGocQuestion[] {
  const baseSeed = 1000 + examNo * 50;

  // Q1: Tìm số đối của số nguyên
  const q1_val = randInt(15 + examNo * 3, 85, baseSeed + 1);

  // Q2: So sánh hai số nguyên âm
  const q2_a = -randInt(20 + examNo * 2, 70, baseSeed + 2);
  const q2_b = -randInt(75, 120, baseSeed + 3);

  // Q3: Cộng hai số nguyên cùng dấu âm: (-a) + (-b)
  const q3_a = randInt(15, 55, baseSeed + 4);
  const q3_b = randInt(18, 65, baseSeed + 5);
  const q3_ans = -(q3_a + q3_b);

  // Q4: Cộng hai số nguyên khác dấu: a + (-b)
  const q4_a = randInt(45, 95, baseSeed + 6);
  const q4_b = randInt(20, q4_a - 10, baseSeed + 7);
  const q4_ans = q4_a - q4_b;

  // Q5: Phép trừ số nhỏ cho số lớn (kết quả âm): a - b với a < b
  const q5_a = randInt(15, 45, baseSeed + 8);
  const q5_b = randInt(q5_a + 12, q5_a + 55, baseSeed + 9);
  const q5_ans = q5_a - q5_b;

  // Q6: Trừ đi số âm: a - (-b) = a + b
  const q6_a = randInt(25, 75, baseSeed + 10);
  const q6_b = randInt(15, 60, baseSeed + 11);
  const q6_ans = q6_a + q6_b;

  // Q7: Trừ hai số nguyên âm: (-a) - (-b)
  const q7_a = randInt(20, 60, baseSeed + 12);
  const q7_b = randInt(10, 50, baseSeed + 13);
  const q7_ans = -q7_a + q7_b;

  // Q8: Nhân hai số nguyên khác dấu: a . (-b)
  const q8_a = randInt(4, 12, baseSeed + 14);
  const q8_b = randInt(3, 9, baseSeed + 15);
  const q8_ans = -(q8_a * q8_b);

  // Q9: Nhân hai số nguyên cùng âm: (-a) . (-b)
  const q9_a = randInt(5, 12, baseSeed + 16);
  const q9_b = randInt(4, 9, baseSeed + 17);
  const q9_ans = q9_a * q9_b;

  // Q10: Chia hai số nguyên khác dấu: (-a) : b
  const q10_b = randInt(3, 8, baseSeed + 18);
  const q10_res = randInt(5, 15, baseSeed + 19);
  const q10_a = q10_b * q10_res;
  const q10_ans = -q10_res;

  // Q11: Chia hai số nguyên cùng âm: (-a) : (-b)
  const q11_b = randInt(3, 9, baseSeed + 20);
  const q11_ans = randInt(4, 14, baseSeed + 21);
  const q11_a = q11_b * q11_ans;

  // Q12: Tính nhanh nhóm số đối: (-a) + b + a = b
  const q12_a = randInt(35, 85, baseSeed + 22);
  const q12_b = randInt(20, 60, baseSeed + 23);
  const q12_ans = q12_b;

  // Q13: Bỏ dấu ngoặc có dấu trừ: a - (a + b) = -b
  const q13_a = randInt(45, 95, baseSeed + 24);
  const q13_b = randInt(15, 45, baseSeed + 25);
  const q13_ans = -q13_b;

  // Q14: Bỏ ngoặc có dấu trừ kèm số âm: a - (b - c)
  const q14_a = randInt(120, 250, baseSeed + 26);
  const q14_b = randInt(40, 80, baseSeed + 27);
  const q14_c = randInt(20, 50, baseSeed + 28);
  const q14_ans = q14_a - q14_b + q14_c;

  // Q15: Tìm số nguyên x: x + a = -b
  const q15_a = randInt(15, 50, baseSeed + 29);
  const q15_b = randInt(20, 60, baseSeed + 30);
  const q15_ans = -q15_b - q15_a;

  // Q16: Tìm số nguyên x: a . x = -b
  const q16_a = randInt(3, 8, baseSeed + 31);
  const q16_ans = -randInt(4, 12, baseSeed + 32);
  const q16_b = q16_a * q16_ans;

  // Q17: Giá trị tuyệt đối: |x| = a
  const q17_val = randInt(8, 25, baseSeed + 33);

  // Q18: |x - a| = b
  const q18_a = randInt(3, 10, baseSeed + 34);
  const q18_b = randInt(5, 15, baseSeed + 35);
  const q18_ans1 = q18_a + q18_b;
  const q18_ans2 = q18_a - q18_b;

  // Q19: Toán thực tế nhiệt độ Sa Pa
  const q19_t1 = randInt(2, 6, baseSeed + 36);
  const q19_inc = randInt(8, 16, baseSeed + 37);
  const q19_ans = -q19_t1 + q19_inc;

  // Q20: Toán thực tế lợi nhuận kinh doanh
  const q20_loss = randInt(12, 35, baseSeed + 38);
  const q20_gain = randInt(15, 45, baseSeed + 39);
  const q20_ans = -q20_loss + q20_gain;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Số đối của số nguyên -${q1_val} là:`,
      options: makeOptions(String(q1_val), [String(-q1_val), '0', String(q1_val + 1)], baseSeed + 1),
      correctAnswer: String(q1_val),
      explanation: `Số đối của một số nguyên âm -a là số nguyên dương a. Do đó số đối của -${q1_val} là ${q1_val}.`
    },
    {
      question: `So sánh hai số nguyên âm ${q2_a} và ${q2_b}:`,
      options: makeOptions(`${q2_a} > ${q2_b}`, [`${q2_a} < ${q2_b}`, `${q2_a} = ${q2_b}`, 'Không thể so sánh'], baseSeed + 2),
      correctAnswer: `${q2_a} > ${q2_b}`,
      explanation: `Trong hai số nguyên âm, số nào có giá trị tuyệt đối nhỏ hơn thì lớn hơn: vì |${q2_a}| = ${-q2_a} < |${q2_b}| = ${-q2_b} nên ${q2_a} > ${q2_b}.`
    },
    {
      question: `Tính tổng của hai số nguyên cùng dấu âm:`,
      mathExpression: `(-${q3_a}) + (-${q3_b})`,
      options: makeOptions(q3_ans, [-(q3_ans), q3_ans + 10, q3_ans - 10], baseSeed + 4),
      correctAnswer: String(q3_ans),
      explanation: `Quy tắc cộng hai số nguyên âm: cộng hai giá trị tuyệt đối rồi đặt dấu trừ trước kết quả: -(${q3_a} + ${q3_b}) = ${q3_ans}.`
    },
    {
      question: `Tính tổng của hai số nguyên khác dấu:`,
      mathExpression: `${q4_a} + (-${q4_b})`,
      options: makeOptions(q4_ans, [-q4_ans, q4_ans + 5, q4_ans - 5], baseSeed + 6),
      correctAnswer: String(q4_ans),
      explanation: `Lấy số có giá trị tuyệt đối lớn trừ số có giá trị tuyệt đối nhỏ rồi mang dấu của số lớn hơn: +(${q4_a} - ${q4_b}) = ${q4_ans}.`
    },
    {
      question: `Kết quả của phép trừ số nhỏ cho số lớn trong tập hợp số nguyên:`,
      mathExpression: `${q5_a} - ${q5_b}`,
      options: makeOptions(q5_ans, [-q5_ans, q5_ans + 10, q5_ans - 10], baseSeed + 8),
      correctAnswer: String(q5_ans),
      explanation: `Phép trừ số nguyên: a - b = a + (-b). Vì ${q5_a} < ${q5_b} nên kết quả mang dấu âm: -(${q5_b} - ${q5_a}) = ${q5_ans}.`
    },
    {
      question: `Áp dụng quy tắc trừ đi số âm (trừ trừ thành cộng):`,
      mathExpression: `${q6_a} - (-${q6_b})`,
      options: makeOptions(q6_ans, [q6_a - q6_b, -(q6_ans), q6_ans - 10], baseSeed + 10),
      correctAnswer: String(q6_ans),
      explanation: `Trừ đi số âm tương đương với cộng số dương đối của nó: ${q6_a} - (-${q6_b}) = ${q6_a} + ${q6_b} = ${q6_ans}.`
    },
    {
      question: `Thực hiện phép trừ hai số nguyên âm:`,
      mathExpression: `(-${q7_a}) - (-${q7_b})`,
      options: makeOptions(q7_ans, [-q7_ans, -(q7_a + q7_b), q7_ans + 5], baseSeed + 12),
      correctAnswer: String(q7_ans),
      explanation: `Đổi dấu phép trừ: (-${q7_a}) - (-${q7_b}) = -${q7_a} + ${q7_b} = ${q7_ans}.`
    },
    {
      question: `Tính tích của hai số nguyên khác dấu:`,
      mathExpression: `${q8_a} . (-${q8_b})`,
      options: makeOptions(q8_ans, [-q8_ans, q8_ans + 5, q8_ans - 5], baseSeed + 14),
      correctAnswer: String(q8_ans),
      explanation: `Tích của hai số nguyên khác dấu luôn là một số nguyên âm: -(${q8_a} . ${q8_b}) = ${q8_ans}.`
    },
    {
      question: `Tính tích của hai số nguyên cùng dấu âm:`,
      mathExpression: `(-${q9_a}) . (-${q9_b})`,
      options: makeOptions(q9_ans, [-q9_ans, q9_ans + 6, q9_ans - 6], baseSeed + 16),
      correctAnswer: String(q9_ans),
      explanation: `Âm nhân âm ra dương: (-${q9_a}) . (-${q9_b}) = +(${q9_a} . ${q9_b}) = ${q9_ans}.`
    },
    {
      question: `Thương của phép chia số nguyên âm cho số nguyên dương:`,
      mathExpression: `(-${q10_a}) : ${q10_b}`,
      options: makeOptions(q10_ans, [-q10_ans, q10_ans + 2, q10_ans - 2], baseSeed + 18),
      correctAnswer: String(q10_ans),
      explanation: `Chia hai số nguyên khác dấu thu được kết quả mang dấu âm: -(${q10_a} : ${q10_b}) = ${q10_ans}.`
    },
    {
      question: `Thương của phép chia hai số nguyên cùng dấu âm:`,
      mathExpression: `(-${q11_a}) : (-${q11_b})`,
      options: makeOptions(q11_ans, [-q11_ans, q11_ans + 2, q11_ans - 2], baseSeed + 20),
      correctAnswer: String(q11_ans),
      explanation: `Âm chia âm cho kết quả là số dương: (-${q11_a}) : (-${q11_b}) = +(${q11_a} : ${q11_b}) = ${q11_ans}.`
    },
    {
      question: `Tính nhanh biểu thức bằng cách triệt tiêu hai số đối nhau:`,
      mathExpression: `(-${q12_a}) + ${q12_b} + ${q12_a}`,
      options: makeOptions(q12_ans, [-q12_ans, 0, q12_a], baseSeed + 22),
      correctAnswer: String(q12_ans),
      explanation: `Nhóm hai số đối nhau: [(-${q12_a}) + ${q12_a}] + ${q12_b} = 0 + ${q12_b} = ${q12_ans}.`
    },
    {
      question: `Áp dụng quy tắc bỏ dấu ngoặc có dấu trừ đằng trước:`,
      mathExpression: `${q13_a} - (${q13_a} + ${q13_b})`,
      options: makeOptions(q13_ans, [-q13_ans, q13_ans + 5, 0], baseSeed + 24),
      correctAnswer: String(q13_ans),
      explanation: `Khi bỏ ngoặc có dấu trừ đằng trước, ta đổi dấu các số hạng bên trong: ${q13_a} - ${q13_a} - ${q13_b} = 0 - ${q13_b} = ${q13_ans}.`
    },
    {
      question: `Bỏ dấu ngoặc có dấu trừ trước ngoặc chứa phép trừ:`,
      mathExpression: `${q14_a} - (${q14_b} - ${q14_c})`,
      options: makeOptions(q14_ans, [q14_a - q14_b - q14_c, q14_ans + 20, q14_ans - 20], baseSeed + 26),
      correctAnswer: String(q14_ans),
      explanation: `Đổi dấu bên trong ngoặc: ${q14_a} - ${q14_b} + ${q14_c} = ${q14_a - q14_b} + ${q14_c} = ${q14_ans}.`
    },
    {
      question: `Tìm số nguyên x thỏa mãn phương trình:`,
      mathExpression: `x + ${q15_a} = -${q15_b}`,
      options: makeOptions(q15_ans, [-q15_ans, -q15_b + q15_a, q15_b + q15_a], baseSeed + 29),
      correctAnswer: String(q15_ans),
      explanation: `Chuyển ${q15_a} sang vế phải và đổi dấu: x = -${q15_b} - ${q15_a} = ${q15_ans}.`
    },
    {
      question: `Tìm số nguyên x trong phép nhân số nguyên:`,
      mathExpression: `${q16_a} . x = ${q16_b}`,
      options: makeOptions(q16_ans, [-q16_ans, q16_ans + 2, q16_ans - 2], baseSeed + 31),
      correctAnswer: String(q16_ans),
      explanation: `Lấy tích chia cho thừa số đã biết: x = ${q16_b} : ${q16_a} = ${q16_ans}.`
    },
    {
      question: `Tìm tất cả các giá trị của số nguyên x thỏa mãn |x| = ${q17_val}:`,
      options: makeOptions(`x = ${q17_val} hoặc x = -${q17_val}`, [`Chỉ có x = ${q17_val}`, `Chỉ có x = -${q17_val}`, `x = 0`], baseSeed + 33),
      correctAnswer: `x = ${q17_val} hoặc x = -${q17_val}`,
      explanation: `Có hai số nguyên có giá trị tuyệt đối bằng ${q17_val} là ${q17_val} và -${q17_val}.`
    },
    {
      question: `Tìm hai giá trị của x thỏa mãn phương trình trị tuyệt đối:`,
      mathExpression: `|x - ${q18_a}| = ${q18_b}`,
      options: makeOptions(`x = ${q18_ans1} hoặc x = ${q18_ans2}`, [`x = ${q18_ans1} hoặc x = ${-q18_ans1}`, `x = ${q18_b} hoặc x = -${q18_b}`, `x = ${q18_ans2}`], baseSeed + 34),
      correctAnswer: `x = ${q18_ans1} hoặc x = ${q18_ans2}`,
      explanation: `Trường hợp 1: x - ${q18_a} = ${q18_b} => x = ${q18_ans1}. Trường hợp 2: x - ${q18_a} = -${q18_b} => x = ${q18_ans2}.`
    },
    {
      question: `Vào mùa đông ở Sa Pa, nhiệt độ lúc 5 giờ sáng là -${q19_t1}°C. Đến 12 giờ trưa, nhiệt độ tăng thêm ${q19_inc}°C. Nhiệt độ lúc 12 giờ trưa là bao nhiêu?`,
      options: makeOptions(`${q19_ans}°C`, [`${q19_ans + 2}°C`, `${-q19_ans}°C`, `${q19_inc}°C`], baseSeed + 36),
      correctAnswer: `${q19_ans}°C`,
      explanation: `Nhiệt độ buổi trưa: (-${q19_t1}) + ${q19_inc} = ${q19_ans}°C.`
    },
    {
      question: `Một cửa hàng kinh doanh quý I lỗ ${q20_loss} triệu đồng (ghi là -${q20_loss}), quý II lãi ${q20_gain} triệu đồng. Sau 6 tháng kinh doanh, cửa hàng đó:`,
      options: makeOptions(q20_ans >= 0 ? `Lãi ${q20_ans} triệu đồng` : `Lỗ ${-q20_ans} triệu đồng`, [`Lãi ${q20_loss + q20_gain} triệu đồng`, `Lỗ ${q20_loss + q20_gain} triệu đồng`, `Hòa vốn (0 đồng)`], baseSeed + 38),
      correctAnswer: q20_ans >= 0 ? `Lãi ${q20_ans} triệu đồng` : `Lỗ ${-q20_ans} triệu đồng`,
      explanation: `Tổng kết sau hai quý: (-${q20_loss}) + ${q20_gain} = ${q20_ans >= 0 ? `+${q20_ans} (lãi ${q20_ans} triệu)` : `${q20_ans} (lỗ ${-q20_ans} triệu)`}.`
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

  // Q2: Chuyển vế phép trừ: x - a = b
  const q2_a = randInt(14, 45, baseSeed + 1);
  const q2_b = randInt(25, 75, baseSeed + 2);
  const q2_ans = q2_b + q2_a;

  // Q3: Chuyển vế với số âm: x + a = -b
  const q3_a = randInt(20, 60, baseSeed + 3);
  const q3_b = randInt(10, 40, baseSeed + 4);
  const q3_ans = -q3_b - q3_a;

  // Q4: a - x = b
  const q4_a = randInt(50, 95, baseSeed + 5);
  const q4_b = randInt(15, q4_a - 15, baseSeed + 6);
  const q4_ans = q4_a - q4_b;

  // Q5: 2x + b = c
  const q5_ans = randInt(6, 25, baseSeed + 7);
  const q5_b = randInt(12, 36, baseSeed + 8);
  const q5_c = 2 * q5_ans + q5_b;

  // Q6: 3x - b = c
  const q6_ans = randInt(7, 24, baseSeed + 9);
  const q6_b = randInt(12, 30, baseSeed + 10);
  const q6_c = 3 * q6_ans - q6_b;

  // Q7: 5x + b = 2x + c (nghiệm nguyên)
  const q7_ans = randInt(4, 15, baseSeed + 11);
  const q7_b = randInt(10, 30, baseSeed + 12);
  const q7_c = 3 * q7_ans + q7_b;

  // Q8: 7x - b = 3x + c
  const q8_ans = randInt(4, 14, baseSeed + 13);
  const q8_b = randInt(8, 24, baseSeed + 14);
  const q8_c = 4 * q8_ans - q8_b;

  // Q9: a(x - b) = c
  const q9_a = randInt(2, 4, baseSeed + 15);
  const q9_b = randInt(3, 8, baseSeed + 16);
  const q9_ans = randInt(10, 25, baseSeed + 17);
  const q9_c = q9_a * (q9_ans - q9_b);

  // Q10: 3(x + b) - c = d
  const q10_b = randInt(2, 6, baseSeed + 18);
  const q10_ans = randInt(5, 18, baseSeed + 19);
  const q10_c = randInt(4, 12, baseSeed + 20);
  const q10_d = 3 * (q10_ans + q10_b) - q10_c;

  // Q11: a - (2x - b) = c  =>  2x = a + b - c (đảm bảo x nguyên chuẩn xác)
  const q11_ans = randInt(3, 9, baseSeed + 21);
  const q11_a = randInt(15, 35, baseSeed + 22);
  const q11_b = randInt(3, 11, baseSeed + 23);
  const q11_c = q11_a - (2 * q11_ans - q11_b);

  // Q12: Nhân chéo tỉ lệ thức: x / a = b / c
  const q12_a = randInt(2, 5, baseSeed + 24);
  const q12_k = randInt(2, 5, baseSeed + 25);
  const q12_b = q12_k * randInt(2, 4, baseSeed + 26);
  const q12_c = q12_k * q12_a;
  const q12_ans = q12_b / q12_k;

  // Q13: (x + a) / b = c
  const q13_b = randInt(3, 6, baseSeed + 27);
  const q13_c = randInt(4, 9, baseSeed + 28);
  const q13_a = randInt(2, 8, baseSeed + 29);
  const q13_ans = q13_b * q13_c - q13_a;

  // Q14: (2x - a) / b = c
  const q14_b = randInt(3, 5, baseSeed + 30);
  const q14_c = randInt(5, 11, baseSeed + 31);
  const q14_ans = randInt(8, 22, baseSeed + 32);
  const q14_a = 2 * q14_ans - q14_b * q14_c;

  // Q16: Phương trình tích (x - a)(x + b) = 0
  const q16_a = randInt(2, 8, baseSeed + 33);
  const q16_b = randInt(3, 9, baseSeed + 34);

  // Q17: x^2 - a^2 = 0
  const q17_a = randInt(4, 12, baseSeed + 35);
  const q17_a2 = q17_a * q17_a;

  // Q18: |2x - 1| = c (c là số lẻ để nghiệm nguyên)
  const q18_ans = randInt(3, 9, baseSeed + 36);
  const q18_c = 2 * q18_ans - 1;

  // Q19: ax + b < c
  const q19_a = randInt(2, 4, baseSeed + 37);
  const q19_ans = randInt(3, 7, baseSeed + 38);
  const q19_b = randInt(2, 5, baseSeed + 39);
  const q19_c = q19_a * (q19_ans + 1) + q19_b;

  // Q20: Bài toán thực tế chu vi hình chữ nhật
  const q20_w = randInt(6, 12, baseSeed + 40);
  const q20_ans = randInt(q20_w + 3, q20_w + 10, baseSeed + 41);
  const q20_peri = (q20_ans + q20_w) * 2;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Theo quy tắc chuyển vế trong toán học, khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức ta phải:`,
      options: makeOptions('Đổi dấu số hạng đó (+ thành -, - thành +)', ['Giữ nguyên dấu của số hạng đó', 'Đổi số hạng đó thành số nghịch đảo', 'Nhân số hạng đó với 2'], baseSeed + 0),
      correctAnswer: 'Đổi dấu số hạng đó (+ thành -, - thành +)',
      explanation: 'Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu "+" đổi thành dấu "-" và dấu "-" đổi thành dấu "+".'
    },
    {
      question: `Áp dụng quy tắc chuyển vế để tìm x:`,
      mathExpression: `x - ${q2_a} = ${q2_b}`,
      options: makeOptions(q2_ans, [q2_b - q2_a, q2_ans + 10, q2_ans - 10], baseSeed + 1),
      correctAnswer: String(q2_ans),
      explanation: `Chuyển -${q2_a} sang vế phải thành +${q2_a}: x = ${q2_b} + ${q2_a} = ${q2_ans}.`
    },
    {
      question: `Chuyển vế số hạng tự do sang vế có số âm để tìm x:`,
      mathExpression: `x + ${q3_a} = -${q3_b}`,
      options: makeOptions(q3_ans, [-q3_b + q3_a, q3_ans + 10, -q3_ans], baseSeed + 3),
      correctAnswer: String(q3_ans),
      explanation: `Chuyển +${q3_a} sang vế phải đổi thành -${q3_a}: x = -${q3_b} - ${q3_a} = ${q3_ans}.`
    },
    {
      question: `Tìm x thỏa mãn đẳng thức chuyển vế:`,
      mathExpression: `${q4_a} - x = ${q4_b}`,
      options: makeOptions(q4_ans, [q4_a + q4_b, q4_ans + 5, q4_ans - 5], baseSeed + 5),
      correctAnswer: String(q4_ans),
      explanation: `Chuyển -x sang vế phải và ${q4_b} sang vế trái: x = ${q4_a} - ${q4_b} = ${q4_ans}.`
    },
    {
      question: `Giải phương trình bậc nhất một ẩn cơ bản:`,
      mathExpression: `2x + ${q5_b} = ${q5_c}`,
      options: makeOptions(q5_ans, [q5_ans + 2, q5_ans - 2, q5_ans + 4], baseSeed + 7),
      correctAnswer: String(q5_ans),
      explanation: `Chuyển vế: 2x = ${q5_c} - ${q5_b} = ${2 * q5_ans} => x = ${q5_ans}.`
    },
    {
      question: `Giải phương trình bậc nhất có dấu trừ:`,
      mathExpression: `3x - ${q6_b} = ${q6_c}`,
      options: makeOptions(q6_ans, [q6_ans + 2, q6_ans - 2, q6_ans + 3], baseSeed + 9),
      correctAnswer: String(q6_ans),
      explanation: `Chuyển -${q6_b} sang vế phải: 3x = ${q6_c} + ${q6_b} = ${3 * q6_ans} => x = ${q6_ans}.`
    },
    {
      question: `Giải phương trình có biến x ở cả hai vế:`,
      mathExpression: `5x + ${q7_b} = 2x + ${q7_c}`,
      options: makeOptions(q7_ans, [q7_ans + 2, q7_ans - 2, q7_ans + 5], baseSeed + 11),
      correctAnswer: String(q7_ans),
      explanation: `Chuyển 2x sang vế trái và ${q7_b} sang vế phải: 5x - 2x = ${q7_c} - ${q7_b} => 3x = ${3 * q7_ans} => x = ${q7_ans}.`
    },
    {
      question: `Chuyển vế biến và hệ số tự do:`,
      mathExpression: `7x - ${q8_b} = 3x + ${q8_c}`,
      options: makeOptions(q8_ans, [q8_ans + 2, q8_ans - 2, q8_ans + 3], baseSeed + 13),
      correctAnswer: String(q8_ans),
      explanation: `Chuyển 3x sang vế trái, -${q8_b} sang vế phải: 7x - 3x = ${q8_c} + ${q8_b} => 4x = ${4 * q8_ans} => x = ${q8_ans}.`
    },
    {
      question: `Giải phương trình có dấu ngoặc tròn:`,
      mathExpression: `${q9_a}(x - ${q9_b}) = ${q9_c}`,
      options: makeOptions(q9_ans, [q9_ans + 3, q9_ans - 3, q9_ans + 5], baseSeed + 15),
      correctAnswer: String(q9_ans),
      explanation: `Chia cả hai vế cho ${q9_a}: x - ${q9_b} = ${q9_c / q9_a} => x = ${q9_c / q9_a} + ${q9_b} = ${q9_ans}.`
    },
    {
      question: `Giải phương trình phân phối và thu gọn:`,
      mathExpression: `3(x + ${q10_b}) - ${q10_c} = ${q10_d}`,
      options: makeOptions(q10_ans, [q10_ans + 2, q10_ans - 2, q10_ans + 4], baseSeed + 18),
      correctAnswer: String(q10_ans),
      explanation: `Chuyển -${q10_c} sang vế phải: 3(x + ${q10_b}) = ${q10_d + q10_c}. Chia cho 3: x + ${q10_b} = ${(q10_d + q10_c) / 3} => x = ${q10_ans}.`
    },
    {
      question: `Tìm x trong phương trình có dấu trừ đằng trước ngoặc:`,
      mathExpression: `${q11_a} - (2x - ${q11_b}) = ${q11_c}`,
      options: makeOptions(q11_ans, [q11_ans + 2, q11_ans - 2, q11_ans + 4], baseSeed + 21),
      correctAnswer: String(q11_ans),
      explanation: `Bỏ ngoặc đổi dấu: ${q11_a} - 2x + ${q11_b} = ${q11_c} => 2x = ${q11_a + q11_b} - ${q11_c} = ${2 * q11_ans} => x = ${q11_ans}.`
    },
    {
      question: `Áp dụng quy tắc nhân chéo giải phương trình tỉ lệ thức:`,
      mathExpression: `\\frac{x}{${q12_a}} = \\frac{${q12_b}}{${q12_c}}`,
      options: makeOptions(q12_ans, [q12_ans + 1, q12_ans - 1, q12_ans + 2], baseSeed + 24),
      correctAnswer: String(q12_ans),
      explanation: `Nhân chéo: ${q12_c} . x = ${q12_a} . ${q12_b} => x = (${q12_a} . ${q12_b}) : ${q12_c} = ${q12_ans}.`
    },
    {
      question: `Giải phương trình phân thức đơn giản:`,
      mathExpression: `\\frac{x + ${q13_a}}{${q13_b}} = ${q13_c}`,
      options: makeOptions(q13_ans, [q13_ans + 2, q13_ans - 2, q13_b * q13_c], baseSeed + 27),
      correctAnswer: String(q13_ans),
      explanation: `Khử mẫu: x + ${q13_a} = ${q13_c} . ${q13_b} = ${q13_b * q13_c} => x = ${q13_b * q13_c} - ${q13_a} = ${q13_ans}.`
    },
    {
      question: `Tìm x thỏa mãn phương trình phân thức:`,
      mathExpression: `\\frac{2x - ${q14_a}}{${q14_b}} = ${q14_c}`,
      options: makeOptions(q14_ans, [q14_ans + 2, q14_ans - 2, q14_ans + 5], baseSeed + 30),
      correctAnswer: String(q14_ans),
      explanation: `Khử mẫu: 2x - ${q14_a} = ${q14_b * q14_c} => 2x = ${q14_b * q14_c + q14_a} => x = ${q14_ans}.`
    },
    {
      question: `Phương trình tích A(x) . B(x) = 0 có tập nghiệm thỏa mãn:`,
      options: makeOptions('A(x) = 0 hoặc B(x) = 0', ['A(x) = 0 và B(x) = 0 cùng lúc', 'A(x) + B(x) = 0', 'A(x) > 0'], baseSeed + 32),
      correctAnswer: 'A(x) = 0 hoặc B(x) = 0',
      explanation: 'Tích hai thừa số bằng 0 khi và chỉ khi ít nhất một trong hai thừa số bằng 0.'
    },
    {
      question: `Tìm tập nghiệm của phương trình tích:`,
      mathExpression: `(x - ${q16_a})(x + ${q16_b}) = 0`,
      options: makeOptions(`x = ${q16_a} hoặc x = -${q16_b}`, [`x = -${q16_a} hoặc x = ${q16_b}`, `x = ${q16_a} và x = ${q16_b}`, `x = 0`], baseSeed + 33),
      correctAnswer: `x = ${q16_a} hoặc x = -${q16_b}`,
      explanation: `TH1: x - ${q16_a} = 0 => x = ${q16_a}. TH2: x + ${q16_b} = 0 => x = -${q16_b}.`
    },
    {
      question: `Giải phương trình bậc hai dạng hiệu hai bình phương:`,
      mathExpression: `x^2 - ${q17_a2} = 0`,
      options: makeOptions(`x = ${q17_a} hoặc x = -${q17_a}`, [`Chỉ có x = ${q17_a}`, `Chỉ có x = -${q17_a}`, `x = ${q17_a2}`], baseSeed + 35),
      correctAnswer: `x = ${q17_a} hoặc x = -${q17_a}`,
      explanation: `Chuyển vế: x^2 = ${q17_a2} => x = ${q17_a} hoặc x = -${q17_a}.`
    },
    {
      question: `Tìm nghiệm nguyên dương của phương trình chứa giá trị tuyệt đối:`,
      mathExpression: `|2x - 1| = ${q18_c}`,
      options: makeOptions(q18_ans, [q18_ans + 1, q18_ans - 1, q18_ans + 2], baseSeed + 36),
      correctAnswer: String(q18_ans),
      explanation: `Vì tìm nghiệm nguyên dương nên: 2x - 1 = ${q18_c} => 2x = ${q18_c + 1} => x = ${q18_ans}.`
    },
    {
      question: `Tìm số tự nhiên x lớn nhất thỏa mãn bất phương trình:`,
      mathExpression: `${q19_a}x + ${q19_b} < ${q19_c}`,
      options: makeOptions(q19_ans, [q19_ans + 1, q19_ans - 1, q19_ans + 2], baseSeed + 38),
      correctAnswer: String(q19_ans),
      explanation: `Chuyển vế: ${q19_a}x < ${q19_c - q19_b} => x < ${(q19_c - q19_b) / q19_a}. Số tự nhiên lớn nhất thỏa mãn là x = ${q19_ans}.`
    },
    {
      question: `Một hình chữ nhật có chu vi là ${q20_peri} cm, chiều rộng là ${q20_w} cm. Gọi chiều dài là x (cm), giá trị của x là:`,
      options: makeOptions(`${q20_ans} cm`, [`${q20_ans - 2} cm`, `${q20_ans + 2} cm`, `${q20_peri - q20_w} cm`], baseSeed + 40),
      correctAnswer: `${q20_ans} cm`,
      explanation: `Nửa chu vi = chiều dài + chiều rộng: x + ${q20_w} = ${q20_peri / 2} => x = ${q20_peri / 2} - ${q20_w} = ${q20_ans} cm.`
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

  // Q1: Rút gọn phân số
  const q1_k = randInt(3, 8, baseSeed + 1);
  const q1_u = randInt(2, 5, baseSeed + 2);
  const q1_v = q1_u + randInt(1, 3, baseSeed + 3);
  const q1_num = q1_u * q1_k;
  const q1_den = q1_v * q1_k;

  // Q2: BCNN mẫu số
  const q2_m1 = randInt(4, 8, baseSeed + 4);
  const q2_m2 = q2_m1 + 2;

  // Q4: Cộng cùng mẫu
  const q4_den = randInt(7, 15, baseSeed + 5);
  const q4_n1 = randInt(2, 5, baseSeed + 6);
  const q4_n2 = randInt(1, 4, baseSeed + 7);
  const q4_ans = `${q4_n1 + q4_n2}/${q4_den}`;

  // Q5: Cộng khác mẫu: 1/a + 1/b
  const q5_a = randInt(2, 5, baseSeed + 8);
  const q5_b = randInt(3, 7, baseSeed + 9);
  const q5_num = q5_a + q5_b;
  const q5_den = q5_a * q5_b;

  // Q6: Trừ khác mẫu
  const q6_m1 = randInt(3, 6, baseSeed + 10);
  const q6_m2 = q6_m1 + randInt(1, 3, baseSeed + 11);

  // Q7: Nhân hai phân số
  const q7_a = randInt(2, 5, baseSeed + 12);
  const q7_b = randInt(3, 7, baseSeed + 13);
  const q7_c = randInt(2, 4, baseSeed + 14);

  // Q8: Phân số nghịch đảo
  const q8_num = -randInt(3, 9, baseSeed + 15);
  const q8_den = randInt(4, 11, baseSeed + 16);

  // Q11: Hỗn số
  const q11_int = randInt(2, 5, baseSeed + 17);
  const q11_num = randInt(1, 4, baseSeed + 18);
  const q11_den = randInt(q11_num + 1, 7, baseSeed + 19);
  const q11_ans_num = q11_int * q11_den + q11_num;

  // Q19: Tìm giá trị phân số của một số
  const q19_den = randInt(3, 6, baseSeed + 20);
  const q19_num = randInt(1, q19_den - 1, baseSeed + 21);
  const q19_total = q19_den * randInt(10, 25, baseSeed + 22);
  const q19_ans = (q19_total * q19_num) / q19_den;

  // Q20: Tìm một số biết giá trị phân số
  const q20_den = randInt(3, 5, baseSeed + 23);
  const q20_num = randInt(2, q20_den - 1, baseSeed + 24);
  const q20_part = q20_num * randInt(8, 16, baseSeed + 25);
  const q20_ans = (q20_part * q20_den) / q20_num;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Rút gọn phân số về phân số tối giản:`,
      mathExpression: `\\frac{${q1_num}}{${q1_den}}`,
      options: makeOptions(`${q1_u}/${q1_v}`, [`${q1_u + 1}/${q1_v}`, `${q1_u}/${q1_v + 1}`, `${q1_num - 1}/${q1_den}`], baseSeed + 1),
      correctAnswer: `${q1_u}/${q1_v}`,
      explanation: `Chia cả tử và mẫu cho ƯCLN(${q1_num}, ${q1_den}) = ${q1_k}: ${q1_num}:${q1_k} / ${q1_den}:${q1_k} = ${q1_u}/${q1_v}.`
    },
    {
      question: `Mẫu số chung nhỏ nhất khi quy đồng hai phân số 1/${q2_m1} và 1/${q2_m2} là:`,
      options: makeOptions(String(q2_m1 * q2_m2), [String(q2_m1 + q2_m2), String(q2_m1 * 2), String(q2_m2 * 2)], baseSeed + 4),
      correctAnswer: String(q2_m1 * q2_m2),
      explanation: `Mẫu số chung nhỏ nhất chính là BCNN(${q2_m1}, ${q2_m2}) = ${q2_m1 * q2_m2}.`
    },
    {
      question: `So sánh hai phân số dương có cùng tử số: Trong hai phân số 3/7 và 3/10, phân số nào lớn hơn?`,
      options: makeOptions('3/7 > 3/10', ['3/7 < 3/10', '3/7 = 3/10', 'Không thể so sánh'], baseSeed + 5),
      correctAnswer: '3/7 > 3/10',
      explanation: 'Trong hai phân số dương có cùng tử số, phân số nào có mẫu số nhỏ hơn thì lớn hơn: vì 7 < 10 nên 3/7 > 3/10.'
    },
    {
      question: `Thực hiện phép cộng hai phân số cùng mẫu số:`,
      mathExpression: `\\frac{${q4_n1}}{${q4_den}} + \\frac{${q4_n2}}{${q4_den}}`,
      options: makeOptions(q4_ans, [`${q4_n1 + q4_n2}/${q4_den * 2}`, `${q4_n1 * q4_n2}/${q4_den}`, `${q4_n1}/${q4_den}`], baseSeed + 6),
      correctAnswer: q4_ans,
      explanation: `Quy tắc cộng hai phân số cùng mẫu: cộng tử số và giữ nguyên mẫu số: (${q4_n1} + ${q4_n2}) / ${q4_den} = ${q4_ans}.`
    },
    {
      question: `Cộng hai phân số khác mẫu số:`,
      mathExpression: `\\frac{1}{${q5_a}} + \\frac{1}{${q5_b}}`,
      options: makeOptions(`${q5_num}/${q5_den}`, [`2/${q5_a + q5_b}`, `1/${q5_den}`, `${q5_num + 1}/${q5_den}`], baseSeed + 8),
      correctAnswer: `${q5_num}/${q5_den}`,
      explanation: `Quy đồng mẫu số chung là ${q5_den}: ${q5_b}/${q5_den} + ${q5_a}/${q5_den} = (${q5_b} + ${q5_a})/${q5_den} = ${q5_num}/${q5_den}.`
    },
    {
      question: `Kết quả của phép trừ hai phân số:`,
      mathExpression: `\\frac{5}{6} - \\frac{1}{4}`,
      options: makeOptions('7/12', ['4/2', '4/12', '1/3'], baseSeed + 10),
      correctAnswer: '7/12',
      explanation: 'Quy đồng mẫu số chung là 12: 10/12 - 3/12 = 7/12.'
    },
    {
      question: `Tính giá trị của phép nhân hai phân số:`,
      mathExpression: `\\frac{3}{5} . \\frac{10}{9}`,
      options: makeOptions('2/3', ['30/45', '1/3', '5/6'], baseSeed + 12),
      correctAnswer: '2/3',
      explanation: 'Nhân tử với tử, mẫu với mẫu rồi rút gọn: (3 . 10) / (5 . 9) = 30 / 45 = 2/3.'
    },
    {
      question: `Phân số nghịch đảo của phân số ${q8_num}/${q8_den} là:`,
      options: makeOptions(`${q8_den}/${q8_num}`, [`${-q8_num}/${q8_den}`, `${q8_num}/${q8_den}`, `1`], baseSeed + 15),
      correctAnswer: `${q8_den}/${q8_num}`,
      explanation: `Phân số nghịch đảo của a/b là b/a. Do đó phân số nghịch đảo của ${q8_num}/${q8_den} là ${q8_den}/${q8_num}.`
    },
    {
      question: `Kết quả của phép chia phân số:`,
      mathExpression: `\\frac{4}{9} : \\frac{2}{3}`,
      options: makeOptions('2/3', ['8/27', '3/2', '1/3'], baseSeed + 16),
      correctAnswer: '2/3',
      explanation: 'Chia phân số bằng nhân với phân số nghịch đảo: 4/9 . 3/2 = 12/18 = 2/3.'
    },
    {
      question: `Tính nhanh bằng tính chất phân phối của phép nhân đối với phép cộng:`,
      mathExpression: `\\frac{3}{7} . \\frac{5}{8} + \\frac{3}{7} . \\frac{3}{8}`,
      options: makeOptions('3/7', ['15/56', '8/8', '6/7'], baseSeed + 17),
      correctAnswer: '3/7',
      explanation: 'Đặt 3/7 ra ngoài làm thừa số chung: 3/7 . (5/8 + 3/8) = 3/7 . 1 = 3/7.'
    },
    {
      question: `Chuyển hỗn số sang phân số:`,
      mathExpression: `${q11_int}\\frac{${q11_num}}{${q11_den}}`,
      options: makeOptions(`${q11_ans_num}/${q11_den}`, [`${q11_int * q11_num}/${q11_den}`, `${q11_ans_num + 1}/${q11_den}`, `${q11_num}/${q11_den}`], baseSeed + 18),
      correctAnswer: `${q11_ans_num}/${q11_den}`,
      explanation: `Tử số = Phần nguyên . Mẫu + Tử = ${q11_int} . ${q11_den} + ${q11_num} = ${q11_ans_num}. Mẫu giữ nguyên: ${q11_ans_num}/${q11_den}.`
    },
    {
      question: `Cộng hai hỗn số:`,
      mathExpression: `1\\frac{1}{4} + 2\\frac{1}{4}`,
      options: makeOptions('7/2', ['3 1/4', '3 2/8', '4'], baseSeed + 19),
      correctAnswer: '7/2',
      explanation: '(1 + 2) + (1/4 + 1/4) = 3 + 2/4 = 3 + 1/2 = 7/2.'
    },
    {
      question: `Tìm x thỏa mãn phép trừ phân số:`,
      mathExpression: `x - \\frac{1}{3} = \\frac{1}{2}`,
      options: makeOptions('5/6', ['1/6', '-1/6', '2/5'], baseSeed + 20),
      correctAnswer: '5/6',
      explanation: 'Chuyển vế: x = 1/2 + 1/3 = 3/6 + 2/6 = 5/6.'
    },
    {
      question: `Tìm x trong phép cộng phân số:`,
      mathExpression: `x + \\frac{1}{4} = \\frac{3}{2}`,
      options: makeOptions('5/4', ['4/6', '1/4', '7/4'], baseSeed + 21),
      correctAnswer: '5/4',
      explanation: 'Chuyển vế: x = 3/2 - 1/4 = 6/4 - 1/4 = 5/4.'
    },
    {
      question: `Tìm x trong phép nhân phân số:`,
      mathExpression: `x . \\frac{3}{4} = \\frac{9}{8}`,
      options: makeOptions('3/2', ['27/32', '2/3', '4/3'], baseSeed + 22),
      correctAnswer: '3/2',
      explanation: 'x = 9/8 : 3/4 = 9/8 . 4/3 = 36/24 = 3/2.'
    },
    {
      question: `Tìm x trong phép chia phân số:`,
      mathExpression: `\\frac{2}{5} : x = \\frac{4}{15}`,
      options: makeOptions('3/2', ['8/75', '2/3', '5/6'], baseSeed + 23),
      correctAnswer: '3/2',
      explanation: 'x = 2/5 : 4/15 = 2/5 . 15/4 = 30/20 = 3/2.'
    },
    {
      question: `Thực hiện phép tính đúng thứ tự ưu tiên (nhân trước, cộng sau):`,
      mathExpression: `\\frac{1}{2} + \\frac{3}{4} . \\frac{2}{3}`,
      options: makeOptions('1', ['5/6', '7/8', '2/3'], baseSeed + 24),
      correctAnswer: '1',
      explanation: 'Nhân trước: 3/4 . 2/3 = 1/2. Cộng sau: 1/2 + 1/2 = 1.'
    },
    {
      question: `Giá trị của biểu thức phân số có dấu ngoặc:`,
      mathExpression: `\\left(\\frac{1}{2} - \\frac{1}{3}\\right) : \\frac{1}{6}`,
      options: makeOptions('1', ['1/36', '6', '1/6'], baseSeed + 25),
      correctAnswer: '1',
      explanation: 'Trong ngoặc: 1/2 - 1/3 = 1/6. Sau đó lấy: 1/6 : 1/6 = 1.'
    },
    {
      question: `Tính giá trị: ${q19_num}/${q19_den} của ${q19_total} kg bằng bao nhiêu kg?`,
      options: makeOptions(`${q19_ans} kg`, [`${q19_ans + 5} kg`, `${q19_ans - 5} kg`, `${q19_total} kg`], baseSeed + 26),
      correctAnswer: `${q19_ans} kg`,
      explanation: `Muốn tìm m/n của số b, ta lấy b . m/n = ${q19_total} . ${q19_num}/${q19_den} = ${q19_ans} kg.`
    },
    {
      question: `Tìm một số biết rằng ${q20_num}/${q20_den} của số đó bằng ${q20_part}:`,
      options: makeOptions(String(q20_ans), [String(q20_ans + 6), String(q20_ans - 6), String(q20_part)], baseSeed + 27),
      correctAnswer: String(q20_ans),
      explanation: `Muốn tìm một số khi biết m/n của nó bằng a, ta lấy a : m/n = ${q20_part} : ${q20_num}/${q20_den} = ${q20_part} . ${q20_den}/${q20_num} = ${q20_ans}.`
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

  // Q1: Cộng STN
  const q1_a = randInt(130 + examNo * 12, 350, baseSeed + 1);
  const q1_b = randInt(140 + examNo * 10, 380, baseSeed + 2);
  const q1_ans = q1_a + q1_b;

  // Q2: Trừ STN
  const q2_a = randInt(450 + examNo * 20, 850, baseSeed + 3);
  const q2_b = randInt(160 + examNo * 10, 350, baseSeed + 4);
  const q2_ans = q2_a - q2_b;

  // Q3: Tính nhanh STN: k . a + k . b
  const q3_k = randInt(14, 38, baseSeed + 5);
  const q3_a = randInt(25, 75, baseSeed + 6);
  const q3_b = 100 - q3_a;
  const q3_ans = q3_k * 100;

  // Q4: Lũy thừa STN: a^2 + b^2
  const q4_a = randInt(3, 8, baseSeed + 7);
  const q4_b = randInt(2, 6, baseSeed + 8);
  const q4_ans = q4_a * q4_a + q4_b * q4_b;

  // Q5: Tìm x STN: x + a = b
  const q5_a = randInt(30 + examNo * 5, 90, baseSeed + 9);
  const q5_ans = randInt(40, 120, baseSeed + 10);
  const q5_b = q5_ans + q5_a;

  // Q6: Tìm x STN: a - x = b
  const q6_ans = randInt(35, 85, baseSeed + 11);
  const q6_b = randInt(25, 65, baseSeed + 12);
  const q6_a = q6_ans + q6_b;

  // Q7: Cộng số nguyên khác dấu
  const q7_a = randInt(35 + examNo * 4, 85, baseSeed + 13);
  const q7_b = randInt(20 + examNo * 2, 55, baseSeed + 14);
  const q7_ans = -q7_a + q7_b;

  // Q8: Trừ số nguyên âm: a - (-b)
  const q8_a = randInt(20 + examNo * 3, 60, baseSeed + 15);
  const q8_b = randInt(15 + examNo * 2, 45, baseSeed + 16);
  const q8_ans = q8_a + q8_b;

  // Q9: Nhân hai số nguyên khác dấu
  const q9_a = randInt(5, 12, baseSeed + 17);
  const q9_b = randInt(4, 9, baseSeed + 18);
  const q9_ans = -(q9_a * q9_b);

  // Q10: Nhân hai số nguyên cùng âm
  const q10_a = randInt(4, 11, baseSeed + 19);
  const q10_b = randInt(5, 9, baseSeed + 20);
  const q10_ans = q10_a * q10_b;

  // Q11: Bỏ ngoặc đổi dấu số nguyên
  const q11_a = randInt(30, 80, baseSeed + 21);
  const q11_b = randInt(15, 45, baseSeed + 22);
  const q11_ans = -q11_b;

  // Q12: Tìm số nguyên x: x - a = -b
  const q12_a = randInt(10, 30, baseSeed + 23);
  const q12_b = randInt(25, 65, baseSeed + 24);
  const q12_ans = -q12_b + q12_a;

  // Q13: Rút gọn phân số (biến đổi linh hoạt theo examNo)
  const q13_k = randInt(3, 8, baseSeed + 25);
  const q13_num = 2 * q13_k;
  const q13_den = 3 * q13_k;

  // Q14: Cộng phân số khác mẫu
  const q14_ans = '9/10';

  // Q15: Trừ phân số khác mẫu
  const q15_ans = '7/12';

  // Q16: Nhân hai phân số
  const q16_ans = '1';

  // Q17: Chia hai phân số
  const q17_ans = '2';

  // Q18: Tìm x phân số
  const q18_ans = '5/4';

  // Q19: Phương trình tích
  const q19_a = randInt(2, 6, baseSeed + 30);
  const q19_b = randInt(2, 6, baseSeed + 31);

  // Q20: Bài toán thực tế giảm giá
  const q20_price = 50000 + examNo * 10000;
  const q20_pct = 20;
  const q20_discount = (q20_price * q20_pct) / 100;

  const rawQuestions: Omit<LayGocQuestion, 'id' | 'topic'>[] = [
    {
      question: `Cộng số tự nhiên có nhớ:`,
      mathExpression: `${q1_a} + ${q1_b}`,
      options: makeOptions(q1_ans, [q1_ans - 10, q1_ans + 10, q1_ans + 100], baseSeed + 1),
      correctAnswer: String(q1_ans),
      explanation: `Đặt tính thẳng cột từ phải sang trái có nhớ: ${q1_a} + ${q1_b} = ${q1_ans}.`
    },
    {
      question: `Trừ số tự nhiên có mượn:`,
      mathExpression: `${q2_a} - ${q2_b}`,
      options: makeOptions(q2_ans, [q2_ans + 10, q2_ans - 10, q2_ans + 100], baseSeed + 3),
      correctAnswer: String(q2_ans),
      explanation: `Đặt tính trừ thẳng cột từ phải sang trái: ${q2_a} - ${q2_b} = ${q2_ans}.`
    },
    {
      question: `Tính nhanh bằng cách đặt thừa số chung:`,
      mathExpression: `${q3_k} . ${q3_a} + ${q3_k} . ${q3_b}`,
      options: makeOptions(q3_ans, [q3_ans - 100, q3_ans + 100, q3_k * 10], baseSeed + 5),
      correctAnswer: String(q3_ans),
      explanation: `Đặt ${q3_k} làm thừa số chung: ${q3_k} . (${q3_a} + ${q3_b}) = ${q3_k} . 100 = ${q3_ans}.`
    },
    {
      question: `Tính giá trị của biểu thức lũy thừa:`,
      mathExpression: `${q4_a}^2 + ${q4_b}^2`,
      options: makeOptions(q4_ans, [q4_ans + 4, q4_ans - 4, (q4_a + q4_b) * 2], baseSeed + 7),
      correctAnswer: String(q4_ans),
      explanation: `Lũy thừa trước, cộng sau: ${q4_a}^2 = ${q4_a * q4_a}, ${q4_b}^2 = ${q4_b * q4_b}. Tổng = ${q4_ans}.`
    },
    {
      question: `Tìm số tự nhiên x, biết:`,
      mathExpression: `x + ${q5_a} = ${q5_b}`,
      options: makeOptions(q5_ans, [q5_ans + 10, q5_ans - 10, q5_b + q5_a], baseSeed + 9),
      correctAnswer: String(q5_ans),
      explanation: `x = ${q5_b} - ${q5_a} = ${q5_ans}.`
    },
    {
      question: `Tìm số tự nhiên x trong phép trừ:`,
      mathExpression: `${q6_a} - x = ${q6_b}`,
      options: makeOptions(q6_ans, [q6_a + q6_b, q6_ans + 10, q6_ans - 10], baseSeed + 11),
      correctAnswer: String(q6_ans),
      explanation: `x = ${q6_a} - ${q6_b} = ${q6_ans}.`
    },
    {
      question: `Cộng hai số nguyên khác dấu:`,
      mathExpression: `(-${q7_a}) + ${q7_b}`,
      options: makeOptions(q7_ans, [-q7_ans, q7_ans + 10, q7_ans - 10], baseSeed + 13),
      correctAnswer: String(q7_ans),
      explanation: `Tổng mang dấu của số có giá trị tuyệt đối lớn hơn: -(${q7_a} - ${q7_b}) = ${q7_ans}.`
    },
    {
      question: `Trừ số nguyên âm:`,
      mathExpression: `${q8_a} - (-${q8_b})`,
      options: makeOptions(q8_ans, [q8_a - q8_b, -q8_ans, q8_ans - 10], baseSeed + 15),
      correctAnswer: String(q8_ans),
      explanation: `Trừ đi số âm bằng cộng số dương: ${q8_a} + ${q8_b} = ${q8_ans}.`
    },
    {
      question: `Nhân hai số nguyên khác dấu:`,
      mathExpression: `(-${q9_a}) . ${q9_b}`,
      options: makeOptions(q9_ans, [-q9_ans, q9_ans + 5, q9_ans - 5], baseSeed + 17),
      correctAnswer: String(q9_ans),
      explanation: `Tích hai số khác dấu là số âm: -(${q9_a} . ${q9_b}) = ${q9_ans}.`
    },
    {
      question: `Nhân hai số nguyên cùng dấu âm:`,
      mathExpression: `(-${q10_a}) . (-${q10_b})`,
      options: makeOptions(q10_ans, [-q10_ans, q10_ans + 6, q10_ans - 6], baseSeed + 19),
      correctAnswer: String(q10_ans),
      explanation: `Âm nhân âm ra dương: +(${q10_a} . ${q10_b}) = ${q10_ans}.`
    },
    {
      question: `Áp dụng quy tắc bỏ dấu ngoặc có dấu trừ đằng trước:`,
      mathExpression: `${q11_a} - (${q11_a} + ${q11_b})`,
      options: makeOptions(q11_ans, [-q11_ans, q11_ans + 5, 0], baseSeed + 21),
      correctAnswer: String(q11_ans),
      explanation: `Bỏ ngoặc đổi dấu: ${q11_a} - ${q11_a} - ${q11_b} = ${q11_ans}.`
    },
    {
      question: `Tìm số nguyên x thỏa mãn:`,
      mathExpression: `x - ${q12_a} = -${q12_b}`,
      options: makeOptions(q12_ans, [-q12_ans, -q12_b - q12_a, q12_b + q12_a], baseSeed + 23),
      correctAnswer: String(q12_ans),
      explanation: `Chuyển vế: x = -${q12_b} + ${q12_a} = ${q12_ans}.`
    },
    {
      question: `Rút gọn phân số về tối giản:`,
      mathExpression: `\\frac{${q13_num}}{${q13_den}}`,
      options: makeOptions('2/3', ['3/4', '4/6', '1/2'], baseSeed + 25),
      correctAnswer: '2/3',
      explanation: `Chia cả tử và mẫu cho ${q13_k}: ${q13_num}:${q13_k} / ${q13_den}:${q13_k} = 2/3.`
    },
    {
      question: `Cộng hai phân số khác mẫu:`,
      mathExpression: `\\frac{2}{5} + \\frac{1}{2}`,
      options: makeOptions(q14_ans, ['3/7', '3/10', '4/5'], baseSeed + 26),
      correctAnswer: q14_ans,
      explanation: 'Quy đồng mẫu số 10: 4/10 + 5/10 = 9/10.'
    },
    {
      question: `Trừ hai phân số khác mẫu:`,
      mathExpression: `\\frac{3}{4} - \\frac{1}{6}`,
      options: makeOptions(q15_ans, ['2/2', '1/2', '5/12'], baseSeed + 27),
      correctAnswer: q15_ans,
      explanation: 'Quy đồng mẫu số 12: 9/12 - 2/12 = 7/12.'
    },
    {
      question: `Nhân hai phân số:`,
      mathExpression: `\\frac{4}{7} . \\frac{14}{8}`,
      options: makeOptions(q16_ans, ['2', '1/2', '4/7'], baseSeed + 28),
      correctAnswer: q16_ans,
      explanation: '(4 . 14) / (7 . 8) = 56 / 56 = 1.'
    },
    {
      question: `Chia hai phân số:`,
      mathExpression: `\\frac{5}{6} : \\frac{5}{12}`,
      options: makeOptions(q17_ans, ['1/2', '25/72', '1'], baseSeed + 29),
      correctAnswer: q17_ans,
      explanation: '5/6 . 12/5 = 12/6 = 2.'
    },
    {
      question: `Tìm x biết:`,
      mathExpression: `x + \\frac{1}{4} = \\frac{3}{2}`,
      options: makeOptions(q18_ans, ['4/6', '1/4', '7/4'], baseSeed + 30),
      correctAnswer: q18_ans,
      explanation: 'x = 3/2 - 1/4 = 6/4 - 1/4 = 5/4.'
    },
    {
      question: `Tìm x trong phương trình tích:`,
      mathExpression: `(x - ${q19_a})(x + ${q19_b}) = 0`,
      options: makeOptions(`x = ${q19_a} hoặc x = -${q19_b}`, [`x = -${q19_a} hoặc x = ${q19_b}`, `x = ${q19_a} và x = ${q19_b}`, `x = 0`], baseSeed + 31),
      correctAnswer: `x = ${q19_a} hoặc x = -${q19_b}`,
      explanation: `Tích bằng 0 khi từng thừa số bằng 0: x = ${q19_a} hoặc x = -${q19_b}.`
    },
    {
      question: `Một quyển sách giá ${q20_price.toLocaleString('vi-VN')} đồng, nhân ngày hội đọc sách được giảm giá ${q20_pct}%. Số tiền được giảm là:`,
      options: makeOptions(`${q20_discount.toLocaleString('vi-VN')} đồng`, [`${(q20_discount - 2000).toLocaleString('vi-VN')} đồng`, `${(q20_discount + 2000).toLocaleString('vi-VN')} đồng`, `${(q20_price - q20_discount).toLocaleString('vi-VN')} đồng`], baseSeed + 32),
      correctAnswer: `${q20_discount.toLocaleString('vi-VN')} đồng`,
      explanation: `Số tiền giảm = ${q20_price.toLocaleString('vi-VN')} . ${q20_pct}% = ${q20_discount.toLocaleString('vi-VN')} đồng.`
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
