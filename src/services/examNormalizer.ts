// src/services/examNormalizer.ts

export interface NormalizedOption {
  id: string;
  letter: string;
  text: string;
  isCorrect?: boolean;
}

export interface NormalizedQuestion {
  id: string | number;
  number: number;
  text: string;
  type: 'multiple_choice' | 'true_false' | 'short_answer' | 'writing';
  options: NormalizedOption[];
  correctAnswer?: string;
  explanation?: string;
  mathExpression?: string;
  images?: any[];
}

export interface NormalizedExamData {
  title?: string;
  questions: NormalizedQuestion[];
  pdfUrl?: string;
  pdfDriveUrl?: string;
  pdfBase64?: string;
  [key: string]: any;
}

/**
 * Xóa tiền tố thừa dạng "Câu X:", "Câu X.", "Bài X:" ở đầu câu hỏi
 * để tránh trùng lặp khi giao diện đã có huy hiệu số câu (1, 2, 19, v.v.)
 */
export function cleanQuestionText(raw: string = ''): string {
  if (!raw) return '';
  const cleaned = raw
    .trim()
    .replace(/^(\s*<p[^>]*>)?\s*(<strong[^>]*>|<b[^>]*>|<span[^>]*>)?\s*(?:câu|bài)\s*\d+\s*[:.-]?\s*(<\/strong>|<\/b>|<\/span>)?\s*/i, (match, pOpening = '') => pOpening || '')
    .trim();
  return cleaned || raw;
}

/**
 * Chuẩn hóa toàn diện mọi định dạng đề thi (từ Word import, Sinh đề tự động, Đề Lấy Gốc Toán, v.v.)
 * đảm bảo 100% câu hỏi có number, text, type, và options có letter hợp lệ.
 */
export function normalizeExamData(rawExamData: any): NormalizedExamData {
  if (!rawExamData || typeof rawExamData !== 'object') {
    return { questions: [] };
  }

  const rawQuestions = Array.isArray(rawExamData.questions) ? rawExamData.questions : [];

  const normalizedQuestions: NormalizedQuestion[] = rawQuestions.map((q: any, idx: number) => {
    const number = (q.number !== undefined && !isNaN(Number(q.number)) && Number(q.number) > 0)
      ? Number(q.number)
      : (idx + 1);

    // Xử lý text câu hỏi và mathExpression
    let text = cleanQuestionText(q.text || q.question || '');
    if (q.mathExpression && typeof q.mathExpression === 'string' && q.mathExpression.trim()) {
      const mathExpr = q.mathExpression.trim();
      if (!text.includes(mathExpr)) {
        text = text ? `${text}\n\n$$${mathExpr}$$` : `$$${mathExpr}$$`;
      }
    }

    // Xử lý options
    const rawOptions = Array.isArray(q.options) ? q.options : [];
    const normalizedOptions: NormalizedOption[] = rawOptions.map((opt: any, optIdx: number) => {
      const fallbackLetter = String.fromCharCode(65 + optIdx);
      if (typeof opt === 'string') {
        return {
          id: fallbackLetter,
          letter: fallbackLetter,
          text: opt
        };
      }
      const rawLetter = opt.letter || opt.id || fallbackLetter;
      const letter = String(rawLetter).trim().toUpperCase();
      return {
        ...opt,
        id: opt.id || letter,
        letter,
        text: (opt.text || opt.content || opt.value || opt.label || '').trim()
      };
    });

    // Xác định type
    let type = q.type;
    if (!type) {
      if (normalizedOptions.length > 0) {
        // Kiểm tra xem có phải đúng sai không
        const isTF = normalizedOptions.some((o: any) => 
          typeof o.isCorrect === 'boolean' || 
          o.letter === 'T' || o.letter === 'F' || 
          ['đúng', 'sai'].includes((o.text || '').toLowerCase())
        );
        type = isTF ? 'true_false' : 'multiple_choice';
      } else if (q.correctAnswer && typeof q.correctAnswer === 'string' && !q.options) {
        type = 'short_answer';
      } else {
        type = 'multiple_choice';
      }
    }

    return {
      ...q,
      id: q.id || `q_${number}`,
      number,
      text,
      type,
      options: normalizedOptions,
      correctAnswer: q.correctAnswer || q.answer || '',
      explanation: q.explanation || ''
    };
  });

  return {
    ...rawExamData,
    questions: normalizedQuestions
  };
}
