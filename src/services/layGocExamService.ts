// src/services/layGocExamService.ts
// Bộ phát sinh & quản lý 40 Đề thi Lấy Gốc Toán (4 Phần x 10 Đề x 20 Câu/Đề)
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
    id: 'so_am',
    title: 'Phần 1: Số Âm & Quy Tắc Đổi Dấu',
    shortTitle: 'Phần 1: Số Âm',
    icon: '➖',
    description: 'Quy tắc cộng trừ nhân chia số nguyên, bỏ dấu ngoặc có dấu trừ, tính nhanh biểu thức số âm.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'chuyen_ve',
    title: 'Phần 2: Quy Tắc Chuyển Vế & Tìm x',
    shortTitle: 'Phần 2: Chuyển Vế & Tìm x',
    icon: '🔍',
    description: 'Quy tắc chuyển vế đổi dấu, giải phương trình tìm x từ cơ bản đến có ngoặc và x ở cả 2 vế.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'phan_so',
    title: 'Phần 3: Phân Số & Thứ Tự Thực Hiện Phép Tính',
    shortTitle: 'Phần 3: Phân Số',
    icon: '➗',
    description: 'Quy đồng, rút gọn, cộng trừ nhân chia phân số có dấu âm và thứ tự thực hiện phép tính.',
    totalExams: 10,
    questionsPerExam: 20
  },
  {
    id: 'tong_hop',
    title: 'Phần 4: Khảo Sát Tổng Hợp Lấy Gốc Toán',
    shortTitle: 'Phần 4: Khảo Sát Tổng Hợp',
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
  // Trộn thứ tự dựa trên seed
  return all.sort((a, b) => seededRandom(seed + a.length) - 0.5);
}

// ==============================================================================
// 1. SINH ĐỀ PHẦN 1: SỐ ÂM & QUY TẮC DẤU (20 CÂU)
// ==============================================================================
function generateSoAmExam(examNo: number): LayGocQuestion[] {
  const questions: LayGocQuestion[] = [];
  const baseSeed = 1000 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const a = randInt(5, 25 + examNo * 2, s);
    const b = randInt(4, 20 + examNo * 2, s + 1);

    if (i <= 4) {
      // Dạng 1: Cộng hai số nguyên âm (-a) + (-b)
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
      // Dạng 2: Cộng hai số nguyên khác dấu
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
      // Dạng 3: Trừ số nguyên: x - (-y) = x + y hoặc (-x) - (-y)
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
      // Dạng 4: Nhân chia số nguyên
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
      // Dạng 5: Phá ngoặc & Tính nhanh biểu thức
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
// 2. SINH ĐỀ PHẦN 2: CHUYỂN VẾ ĐỔI DẤU & TÌM X (20 CÂU)
// ==============================================================================
function generateChuyenVeExam(examNo: number): LayGocQuestion[] {
  const questions: LayGocQuestion[] = [];
  const baseSeed = 2000 + examNo * 50;

  for (let i = 1; i <= 20; i++) {
    const s = baseSeed + i * 7;
    const a = randInt(4, 20 + examNo, s);
    const b = randInt(5, 30 + examNo, s + 1);

    if (i <= 4) {
      // Dạng 1: x - a = -b
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
      // Dạng 2: a - x = b hoặc a - x = -b
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
      // Dạng 3: kx + a = -b
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
      // Dạng 4: k(x - m) = -n
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
      // Dạng 5: x ở cả hai vế: ax + b = cx + d
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
// 3. SINH ĐỀ PHẦN 3: PHÂN SỐ & THỨ TỰ PHÉP TÍNH (20 CÂU)
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
      // Cộng trừ phân số cùng mẫu
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
      // Nhân phân số có dấu âm
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
      // Chia phân số
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
      // Biểu thức hỗn hợp thứ tự phép tính
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
// 4. SINH ĐỀ PHẦN 4: KHẢO SÁT TỔNG HỢP LẤY GỐC TOÁN (20 CÂU)
// ==============================================================================
function generateTongHopExam(examNo: number): LayGocQuestion[] {
  const q1 = generateSoAmExam(examNo).slice(0, 7);
  const q2 = generateChuyenVeExam(examNo).slice(0, 8);
  const q3 = generatePhanSoExam(examNo).slice(0, 5);

  const combined = [...q1, ...q2, ...q3];
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

