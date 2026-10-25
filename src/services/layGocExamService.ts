// src/services/layGocExamService.ts
// Bộ phát sinh & quản lý 50 Đề thi Lấy Gốc Toán (5 Phần x 10 Đề x 20 Câu/Đề = 1.000 câu)
// Chuẩn kiến thức Toán THCS Thầy Thọ (Lớp 6 - Lớp 9)

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
    shortTitle: 'Phần 1: Số Tự Nhiên (Lớp 6)',
    icon: '🔢',
    description: 'Cộng trừ số tự nhiên có nhớ, nhóm tròn chục tròn trăm, tìm thành phần chưa biết (tìm x) và thứ tự phép tính.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'so_am',
    title: 'Phần 2: Số Âm & Quy Tắc Đổi Dấu',
    shortTitle: 'Phần 2: Số Âm & Dấu',
    icon: '➖',
    description: 'Quy tắc cộng trừ nhân chia số nguyên, bỏ dấu ngoặc có dấu trừ, tính nhanh biểu thức số âm.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'chuyen_ve',
    title: 'Phần 3: Quy Tắc Chuyển Vế & Tìm x',
    shortTitle: 'Phần 3: Chuyển Vế & Tìm x',
    icon: '🔍',
    description: 'Quy tắc chuyển vế đổi dấu, giải phương trình tìm x từ cơ bản đến có ngoặc và x ở cả 2 vế.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'phan_so',
    title: 'Phần 4: Phân Số & Thứ Tự Thực Hiện Phép Tính',
    shortTitle: 'Phần 4: Phân Số',
    icon: '➗',
    description: 'Quy đồng, rút gọn, cộng trừ nhân chia phân số có dấu âm và thứ tự thực hiện phép tính.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tong_hop',
    title: 'Phần 5: Khảo Sát Tổng Hợp Lấy Gốc Toán',
    shortTitle: 'Phần 5: Khảo Sát Tổng Hợp',
    icon: '⚡',
    description: 'Đề tổng hợp 20 câu kiểm tra toàn diện khả năng xóa mất gốc để sẵn sàng vào chương trình chính khóa.',
    totalExams: 10,
    questionsPerExam: 20
  }
];

// Hàm PRNG giả lập ngẫu nhiên có seed để mỗi Đề thi (1->10) luôn luôn cố định câu hỏi giống nhau
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
  return all.sort((a, b) => seededRandom(seed + a.length) - 0.5);
}

// ==============================================================================
// 1. SINH ĐỀ PHẦN 1: CỘNG TRỪ SỐ TỰ NHIÊN (LỚP 6) - 20 CÂU
// ==============================================================================
function generateSoTuNhienExam(examNo: number): LayGocQuestion[] {
  const questions: LayGocQuestion[] = [];
  const baseSeed = 500 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;

    if (i <= 4) {
      // Dạng 1: Phép cộng có nhớ số tự nhiên
      const a = randInt(35 + examNo * 5, 250 + examNo * 10, s);
      const b = randInt(48 + examNo * 5, 380 + examNo * 10, s + 1);
      const ans = a + b;
      questions.push({
        id: i,
        question: `Câu ${i}: Thực hiện phép tính cộng số tự nhiên:`,
        mathExpression: `${a} + ${b}`,
        options: makeOptions(ans, [ans - 10, ans + 10, ans + 100], s),
        correctAnswer: String(ans),
        explanation: `Đặt tính rồi tính từ phải sang trái (hàng đơn vị -> hàng chục -> hàng trăm). ${a} + ${b} = ${ans}.`,
        topic: 'so_tu_nhien'
      });
    } else if (i <= 8) {
      // Dạng 2: Phép trừ có mượn số tự nhiên
      const big = randInt(300 + examNo * 20, 950 + examNo * 20, s);
      const small = randInt(85, big - 50, s + 1);
      const ans = big - small;
      questions.push({
        id: i,
        question: `Câu ${i}: Thực hiện phép tính trừ số tự nhiên:`,
        mathExpression: `${big} - ${small}`,
        options: makeOptions(ans, [ans + 10, ans - 10, ans + 100], s),
        correctAnswer: String(ans),
        explanation: `Đặt tính thẳng cột rồi trừ từ phải sang trái. Nếu chữ số bị trừ nhỏ hơn thì mượn 1 chục ở hàng liền trước. Ta được: ${big} - ${small} = ${ans}.`,
        topic: 'so_tu_nhien'
      });
    } else if (i <= 12) {
      // Dạng 3: Tính nhanh nhóm tròn trăm, tròn chục
      if (i === 9) {
        const u1 = randInt(25, 75, s);
        const u2 = 100 - u1;
        const middle = randInt(120, 450, s + 1);
        const ans = 100 + middle;
        questions.push({
          id: i,
          question: `Câu ${i}: Tính nhanh giá trị biểu thức:`,
          mathExpression: `${u1} + ${middle} + ${u2}`,
          options: makeOptions(ans, [ans - 20, ans + 20, ans + 100], s),
          correctAnswer: String(ans),
          explanation: `Áp dụng tính chất giao hoán và kết hợp: (${u1} + ${u2}) + ${middle} = 100 + ${middle} = ${ans}.`,
          topic: 'so_tu_nhien'
        });
      } else if (i === 10) {
        const m = randInt(110, 390, s);
        const k = 100;
        const a = m + k;
        const b = randInt(45, 95, s + 1);
        const ans = a - m + b; // (a - m) + b = 100 + b
        questions.push({
          id: i,
          question: `Câu ${i}: Tính hợp lý:`,
          mathExpression: `${a} - ${m} + ${b}`,
          options: makeOptions(ans, [ans - 10, ans + 10, 100 + b + 10], s),
          correctAnswer: String(ans),
          explanation: `Thực hiện từ trái sang phải: (${a} - ${m}) + ${b} = ${k} + ${b} = ${ans}.`,
          topic: 'so_tu_nhien'
        });
      } else if (i === 11) {
        const a = randInt(250, 600, s);
        const b = randInt(40, 150, s + 1);
        const ans = b;
        questions.push({
          id: i,
          question: `Câu ${i}: Tính nhanh giá trị biểu thức:`,
          mathExpression: `(${a} + ${b}) - ${a}`,
          options: makeOptions(ans, [ans + 10, a, a + b], s),
          correctAnswer: String(ans),
          explanation: `Bỏ dấu ngoặc hoặc dùng giao hoán: (${a} - ${a}) + ${b} = 0 + ${b} = ${ans}.`,
          topic: 'so_tu_nhien'
        });
      } else {
        const a = randInt(300, 750, s);
        const sub1 = randInt(100, 200, s + 1);
        const sub2 = randInt(25, 75, s + 2);
        const ans = a - (sub1 + sub2);
        questions.push({
          id: i,
          question: `Câu ${i}: Thực hiện phép tính:`,
          mathExpression: `${a} - (${sub1} + ${sub2})`,
          options: makeOptions(ans, [ans + 20, ans - 20, a - sub1], s),
          correctAnswer: String(ans),
          explanation: `Tính trong ngoặc trước: ${sub1} + ${sub2} = ${sub1 + sub2}. Sau đó lấy ${a} - ${sub1 + sub2} = ${ans}. (Hoặc quy tắc trừ một tổng: a - b - c).`,
          topic: 'so_tu_nhien'
        });
      }
    } else if (i <= 16) {
      // Dạng 4: Tìm số tự nhiên x cơ bản (số hạng, số bị trừ, số trừ)
      if (i === 13) {
        // x + a = b
        const a = randInt(45, 230, s);
        const ans = randInt(50, 300, s + 1);
        const b = ans + a;
        questions.push({
          id: i,
          question: `Câu ${i}: Tìm số tự nhiên x biết:`,
          mathExpression: `x + ${a} = ${b}`,
          options: makeOptions(ans, [b + a, ans + 10, ans - 10], s),
          correctAnswer: String(ans),
          explanation: `Muốn tìm số hạng chưa biết, ta lấy Tổng trừ đi số hạng đã biết: x = ${b} - ${a} => x = ${ans}.`,
          topic: 'so_tu_nhien'
        });
      } else if (i === 14) {
        // x - a = b (tìm số bị trừ)
        const a = randInt(60, 280, s);
        const b = randInt(120, 450, s + 1);
        const ans = a + b;
        questions.push({
          id: i,
          question: `Câu ${i}: Tìm số tự nhiên x biết:`,
          mathExpression: `x - ${a} = ${b}`,
          options: makeOptions(ans, [b - a, ans + 20, ans - 20], s),
          correctAnswer: String(ans),
          explanation: `Muốn tìm số bị trừ, ta lấy Hiệu cộng với số trừ: x = ${b} + ${a} => x = ${ans}.`,
          topic: 'so_tu_nhien'
        });
      } else if (i === 15) {
        // a - x = b (tìm số trừ)
        const ans = randInt(40, 220, s);
        const b = randInt(60, 310, s + 1);
        const a = ans + b;
        questions.push({
          id: i,
          question: `Câu ${i}: Tìm số tự nhiên x biết:`,
          mathExpression: `${a} - x = ${b}`,
          options: makeOptions(ans, [a + b, ans + 10, ans - 10], s),
          correctAnswer: String(ans),
          explanation: `Muốn tìm số trừ, ta lấy Số bị trừ trừ đi Hiệu: x = ${a} - ${b} => x = ${ans}.`,
          topic: 'so_tu_nhien'
        });
      } else {
        // (x - a) + b = c
        const a = randInt(25, 75, s);
        const b = randInt(30, 90, s + 1);
        const ans = randInt(100, 300, s + 2);
        const c = (ans - a) + b;
        questions.push({
          id: i,
          question: `Câu ${i}: Tìm số tự nhiên x biết:`,
          mathExpression: `(x - ${a}) + ${b} = ${c}`,
          options: makeOptions(ans, [ans + a, ans - b, c - b], s),
          correctAnswer: String(ans),
          explanation: `Coi (x - ${a}) là số hạng chưa biết: x - ${a} = ${c} - ${b} = ${c - b}. Tiếp tục tìm số bị trừ x: x = ${c - b} + ${a} = ${ans}.`,
          topic: 'so_tu_nhien'
        });
      }
    } else if (i <= 18) {
      // Dạng 5: Thứ tự thực hiện phép tính có ngoặc tròn và vuông
      const k1 = randInt(15, 45, s);
      const k2 = randInt(20, 50, s + 1);
      const sumK = k1 + k2;
      const mid = sumK + randInt(20, 60, s + 2);
      const outer = randInt(150, 350, s + 3);
      const innerVal = mid - sumK;
      const ans = outer - innerVal;

      questions.push({
        id: i,
        question: `Câu ${i}: Thực hiện phép tính theo đúng thứ tự ưu tiên:`,
        mathExpression: `${outer} - [${mid} - (${k1} + ${k2})]`,
        options: makeOptions(ans, [ans + 10, ans - 10, outer - mid], s),
        correctAnswer: String(ans),
        explanation: `Thực hiện trong ngoặc tròn trước: (${k1} + ${k2}) = ${sumK}. Trong ngoặc vuông: [${mid} - ${sumK}] = ${innerVal}. Cuối cùng: ${outer} - ${innerVal} = ${ans}.`,
        topic: 'so_tu_nhien'
      });
    } else {
      // Dạng 6: Bài toán thực tế lớp 6
      if (i === 19) {
        const morning = randInt(120, 250, s);
        const diff = randInt(30, 80, s + 1);
        const afternoon = morning + diff;
        const ans = morning + afternoon;
        questions.push({
          id: i,
          question: `Câu ${i}: Một cửa hàng gạo buổi sáng bán được ${morning} kg, buổi chiều bán nhiều hơn buổi sáng ${diff} kg. Hỏi cả ngày cửa hàng bán được bao nhiêu kg gạo?`,
          options: makeOptions(ans, [morning + diff, morning * 2, ans + 20], s),
          correctAnswer: String(ans),
          explanation: `Buổi chiều bán được: ${morning} + ${diff} = ${afternoon} (kg). Cả ngày bán được: ${morning} + ${afternoon} = ${ans} (kg).`,
          topic: 'so_tu_nhien'
        });
      } else {
        const initial = randInt(450, 900, s);
        const added = randInt(120, 280, s + 1);
        const borrowed = randInt(150, 320, s + 2);
        const ans = initial + added - borrowed;
        questions.push({
          id: i,
          question: `Câu ${i}: Thư viện trường có ${initial} cuốn sách. Tháng trước nhập thêm ${added} cuốn, tháng này cho học sinh mượn ${borrowed} cuốn. Hỏi hiện tại thư viện còn lại bao nhiêu cuốn sách?`,
          options: makeOptions(ans, [ans + 50, ans - 50, initial + added], s),
          correctAnswer: String(ans),
          explanation: `Sau khi nhập thêm thư viện có: ${initial} + ${added} = ${initial + added} cuốn. Sau khi cho mượn còn lại: ${initial + added} - ${borrowed} = ${ans} cuốn sách.`,
          topic: 'so_tu_nhien'
        });
      }
    }
  }

  return questions;
}

// ==============================================================================
// 2. SINH ĐỀ PHẦN 2: SỐ ÂM & QUY TẮC DẤU (20 CÂU)
// ==============================================================================
function generateSoAmExam(examNo: number): LayGocQuestion[] {
  const questions: LayGocQuestion[] = [];
  const baseSeed = 1000 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const a = randInt(5, 25 + examNo * 2, s);
    const b = randInt(4, 20 + examNo * 2, s + 1);

    if (i <= 4) {
      const ans = -(a + b);
      questions.push({
        id: i,
        question: `Câu ${i}: Tính giá trị biểu thức:`,
        mathExpression: `(-${a}) + (-${b})`,
        options: makeOptions(ans, [-(a - b), a + b, a - b], s),
        correctAnswer: String(ans),
        explanation: `Quy tắc cộng hai số nguyên âm: Ta cộng hai phần số tự nhiên rồi đặt dấu trừ trước kết quả: -(${a} + ${b}) = ${ans}.`,
        topic: 'so_am'
      });
    } else if (i <= 8) {
      const big = Math.max(a, b);
      const small = Math.min(a, b);
      const isNegBig = i % 2 === 0;
      const expr = isNegBig ? `(-${big}) + ${small}` : `${big} + (-${small})`;
      const ans = isNegBig ? -(big - small) : (big - small);
      questions.push({
        id: i,
        question: `Câu ${i}: Tính giá trị của phép tính:`,
        mathExpression: expr,
        options: makeOptions(ans, [-ans, -(big + small), big + small], s),
        correctAnswer: String(ans),
        explanation: `Quy tắc cộng hai số nguyên khác dấu: Lấy số lớn trừ số nhỏ rồi lấy dấu của số có phần tự nhiên lớn hơn. Kết quả là ${ans}.`,
        topic: 'so_am'
      });
    } else if (i <= 12) {
      if (i % 2 === 0) {
        const ans = a + b;
        questions.push({
          id: i,
          question: `Câu ${i}: Thực hiện phép tính:`,
          mathExpression: `${a} - (-${b})`,
          options: makeOptions(ans, [a - b, -(a + b), -(a - b)], s),
          correctAnswer: String(ans),
          explanation: `Trừ đi số âm tương đương với cộng số dương: ${a} - (-${b}) = ${a} + ${b} = ${ans}.`,
          topic: 'so_am'
        });
      } else {
        const ans = -a + b;
        questions.push({
          id: i,
          question: `Câu ${i}: Thực hiện phép tính:`,
          mathExpression: `(-${a}) - (-${b})`,
          options: makeOptions(ans, [-(a + b), a + b, a - b], s),
          correctAnswer: String(ans),
          explanation: `Đổi phép trừ thành phép cộng với số đối: (-${a}) - (-${b}) = -${a} + ${b} = ${ans}.`,
          topic: 'so_am'
        });
      }
    } else if (i <= 16) {
      const mul = i <= 14;
      if (mul) {
        const ans = a * b;
        questions.push({
          id: i,
          question: `Câu ${i}: Tính tích hai số nguyên âm:`,
          mathExpression: `(-${a}) \\times (-${b})`,
          options: makeOptions(ans, [-ans, ans + 10, -ans - 10], s),
          correctAnswer: String(ans),
          explanation: `Quy tắc dấu của phép nhân: Âm nhân Âm ra Dương: (-) x (-) = (+). Vậy (-${a}) x (-${b}) = ${ans}.`,
          topic: 'so_am'
        });
      } else {
        const m = randInt(2, 9, s);
        const dividend = m * b;
        const ans = -b;
        questions.push({
          id: i,
          question: `Câu ${i}: Tính thương:`,
          mathExpression: `(-${dividend}) : ${m}`,
          options: makeOptions(ans, [b, -ans - 2, b + 2], s),
          correctAnswer: String(ans),
          explanation: `Quy tắc dấu của phép chia: Âm chia Dương ra Âm: (-) : (+) = (-). Vậy (-${dividend}) : ${m} = ${ans}.`,
          topic: 'so_am'
        });
      }
    } else {
      const c = randInt(3, 15, s);
      const ans = -a + b - c;
      questions.push({
        id: i,
        question: `Câu ${i}: Bỏ dấu ngoặc rồi tính giá trị:`,
        mathExpression: `-(${a} - ${b} + ${c})`,
        options: makeOptions(ans, [-a - b + c, -a - b - c, a - b + c], s),
        correctAnswer: String(ans),
        explanation: `Quy tắc bỏ dấu ngoặc: Đằng trước có dấu trừ (-) thì đổi dấu toàn bộ các số hạng bên trong ngoặc: -(${a} - ${b} + ${c}) = -${a} + ${b} - ${c} = ${ans}.`,
        topic: 'so_am'
      });
    }
  }

  return questions;
}

// ==============================================================================
// 3. SINH ĐỀ PHẦN 3: CHUYỂN VẾ ĐỔI DẤU & TÌM X (20 CÂU)
// ==============================================================================
function generateChuyenVeExam(examNo: number): LayGocQuestion[] {
  const questions: LayGocQuestion[] = [];
  const baseSeed = 2000 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const a = randInt(4, 20 + examNo, s);
    const b = randInt(5, 30 + examNo, s + 1);

    if (i <= 4) {
      const ans = -b + a;
      questions.push({
        id: i,
        question: `Câu ${i}: Tìm số nguyên x biết:`,
        mathExpression: `x - ${a} = -${b}`,
        options: makeOptions(ans, [-(b + a), b + a, b - a], s),
        correctAnswer: String(ans),
        explanation: `Quy tắc chuyển vế: Chuyển -${a} từ vế trái sang vế phải đổi dấu thành +${a}: x = -${b} + ${a} => x = ${ans}.`,
        topic: 'chuyen_ve'
      });
    } else if (i <= 8) {
      const isNeg = i % 2 === 0;
      const targetB = isNeg ? -b : b;
      const ans = a - targetB;
      questions.push({
        id: i,
        question: `Câu ${i}: Tìm x biết:`,
        mathExpression: `${a} - x = ${targetB}`,
        options: makeOptions(ans, [-ans, a + targetB, targetB - a], s),
        correctAnswer: String(ans),
        explanation: `Chuyển -x sang vế phải thành +x, chuyển ${targetB} sang vế trái: x = ${a} - (${targetB}) => x = ${ans}.`,
        topic: 'chuyen_ve'
      });
    } else if (i <= 12) {
      const k = randInt(2, 5, s);
      const ans = -randInt(2, 10, s + 2);
      const rightSide = k * ans + a;
      questions.push({
        id: i,
        question: `Câu ${i}: Tìm x biết:`,
        mathExpression: `${k}x + ${a} = ${rightSide}`,
        options: makeOptions(ans, [-ans, ans + 2, -ans - 2], s),
        correctAnswer: String(ans),
        explanation: `Chuyển +${a} sang vế phải đổi thành -${a}: ${k}x = ${rightSide} - ${a} = ${k * ans}. Chia cả 2 vế cho ${k}: x = ${ans}.`,
        topic: 'chuyen_ve'
      });
    } else if (i <= 16) {
      const k = randInt(2, 4, s);
      const m = randInt(3, 9, s + 1);
      const ans = randInt(-10, 10, s + 2);
      const rightSide = k * (ans - m);
      questions.push({
        id: i,
        question: `Câu ${i}: Tìm x biết:`,
        mathExpression: `${k}(x - ${m}) = ${rightSide}`,
        options: makeOptions(ans, [ans + m, ans - m, -ans], s),
        correctAnswer: String(ans),
        explanation: `Chia cả 2 vế cho ${k}: x - ${m} = ${rightSide} : ${k} = ${ans - m}. Chuyển -${m} sang phải: x = ${ans - m} + ${m} = ${ans}.`,
        topic: 'chuyen_ve'
      });
    } else {
      const c = randInt(2, 4, s);
      const diff = randInt(1, 3, s + 1);
      const aCoeff = c + diff;
      const ans = randInt(-8, 8, s + 2);
      const bConst = randInt(5, 20, s + 3);
      const dConst = (aCoeff - c) * ans + bConst;
      questions.push({
        id: i,
        question: `Câu ${i}: Tìm x thỏa mãn phương trình:`,
        mathExpression: `${aCoeff}x + ${bConst} = ${c}x + ${dConst}`,
        options: makeOptions(ans, [-ans, ans + 1, -ans - 1], s),
        correctAnswer: String(ans),
        explanation: `Quy tắc chuyển vế: Chuyển các số hạng chứa x sang vế trái, các hằng số sang vế phải: ${aCoeff}x - ${c}x = ${dConst} - ${bConst} => ${diff}x = ${diff * ans} => x = ${ans}.`,
        topic: 'chuyen_ve'
      });
    }
  }

  return questions;
}

// ==============================================================================
// 4. SINH ĐỀ PHẦN 4: PHÂN SỐ & THỨ TỰ PHÉP TÍNH (20 CÂU)
// ==============================================================================
function generatePhanSoExam(examNo: number): LayGocQuestion[] {
  const questions: LayGocQuestion[] = [];
  const baseSeed = 3000 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const n1 = randInt(1, 5, s);
    const d1 = randInt(2, 6, s + 1);
    const n2 = randInt(1, 4, s + 2);

    if (i <= 5) {
      const ansNum = n1 + n2;
      questions.push({
        id: i,
        question: `Câu ${i}: Thực hiện phép tính cộng phân số:`,
        mathExpression: `\\frac{-${n1}}{${d1}} + \\frac{${ansNum}}{${d1}}`,
        options: makeOptions(`\\frac{${n2}}{${d1}}`, [`\\frac{-${n2}}{${d1}}`, `\\frac{${ansNum + n1}}{${d1}}`, `1`], s),
        correctAnswer: `\\frac{${n2}}{${d1}}`,
        explanation: `Cộng tử với tử, giữ nguyên mẫu: (-${n1} + ${ansNum}) / ${d1} = ${n2}/${d1}.`,
        topic: 'phan_so'
      });
    } else if (i <= 10) {
      const ansNum = -(n1 * n2);
      const ansDen = d1 * 5;
      questions.push({
        id: i,
        question: `Câu ${i}: Tính giá trị phép nhân:`,
        mathExpression: `\\frac{-${n1}}{${d1}} \\times \\frac{${n2}}{5}`,
        options: makeOptions(`\\frac{${ansNum}}{${ansDen}}`, [`\\frac{${Math.abs(ansNum)}}{${ansDen}}`, `\\frac{-${n1 + n2}}{${d1 + 5}}`, `-1`], s),
        correctAnswer: `\\frac{${ansNum}}{${ansDen}}`,
        explanation: `Nhân tử với tử, mẫu với mẫu: (-${n1} x ${n2}) / (${d1} x 5) = ${ansNum}/${ansDen}.`,
        topic: 'phan_so'
      });
    } else if (i <= 15) {
      questions.push({
        id: i,
        question: `Câu ${i}: Tính giá trị phép chia phân số:`,
        mathExpression: `\\frac{-3}{4} : \\frac{2}{5}`,
        options: makeOptions(`\\frac{-15}{8}`, [`\\frac{15}{8}`, `\\frac{-6}{20}`, `\\frac{-8}{15}`], s),
        correctAnswer: `\\frac{-15}{8}`,
        explanation: `Quy tắc chia phân số: Lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược: (-3/4) x (5/2) = -15/8.`,
        topic: 'phan_so'
      });
    } else {
      questions.push({
        id: i,
        question: `Câu ${i}: Thực hiện phép tính đúng thứ tự ưu tiên:`,
        mathExpression: `\\frac{1}{2} - \\frac{3}{4} \\times \\frac{-2}{3}`,
        options: makeOptions(`1`, [`0`, `\\frac{1}{4}`, `\\frac{-1}{2}`], s),
        correctAnswer: `1`,
        explanation: `Thực hiện nhân trước, trừ sau: (3/4) x (-2/3) = -1/2. Khi đó: 1/2 - (-1/2) = 1/2 + 1/2 = 1.`,
        topic: 'phan_so'
      });
    }
  }

  return questions;
}

// ==============================================================================
// 5. SINH ĐỀ PHẦN 5: KHẢO SÁT TỔNG HỢP LẤY GỐC TOÁN (20 CÂU)
// ==============================================================================
function generateTongHopExam(examNo: number): LayGocQuestion[] {
  const q0 = generateSoTuNhienExam(examNo).slice(0, 4);
  const q1 = generateSoAmExam(examNo).slice(0, 5);
  const q2 = generateChuyenVeExam(examNo).slice(0, 6);
  const q3 = generatePhanSoExam(examNo).slice(0, 5);

  const combined = [...q0, ...q1, ...q2, ...q3];
  return combined.map((q, idx) => ({
    ...q,
    id: idx + 1,
    question: `Câu ${idx + 1}: ${q.question.replace(/^Câu \d+:\s*/, '')}`,
    topic: 'tong_hop'
  }));
}

// ==============================================================================
// HÀM LẤY ĐỀ THI THEO CHUYÊN ĐỀ VÀ SỐ ĐỀ (1 -> 10)
// ==============================================================================
export function getLayGocExamQuestions(topicId: string, examNo: number): LayGocQuestion[] {
  const safeNo = Math.min(10, Math.max(1, examNo));
  switch (topicId) {
    case 'so_tu_nhien':
      return generateSoTuNhienExam(safeNo);
    case 'so_am':
      return generateSoAmExam(safeNo);
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
      id: `lg_q_${idx + 1}`,
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
