// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI GIỮA HỌC KÌ 2 HÓA HỌC 10 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi GIỮA Học Kì 2 Hóa Học Lớp 10 Chuẩn Cấu Trúc 2025
 * Chuẩn hóa 100% trắc nghiệm & tự luận theo đúng quy định Bộ Giáo Dục:
 * - Phần I: Câu trắc nghiệm nhiều phương án lựa chọn
 * - Phần II: Câu trắc nghiệm đúng / sai
 * - Phần III: Câu trắc nghiệm trả lời ngắn
 * - Phần IV: Câu hỏi tự luận / chuyên đề nâng cao (nếu có)
 */

export interface Chuong1Question {
  id: string;
  number: number;
  part: number;
  type: multiple_choice | true_false | short_answer | essay;
  text: string;
  images?: string[];
  image?: string;
  options?: Array<{
    id: string;
    letter: string;
    text: string;
    image?: string;
    isCorrect?: boolean;
  }>;
  correctAnswer?: string;
  acceptedAnswers?: string[];
  explanation?: string;
  explanationImages?: string[];
  points?: number;
  displayNumber?: number;
}

export interface Chuong1Exam {
  id: string;
  code: string;
  title: string;
  topic: string;
  badge: string;
  grade?: string;
  chapter?: string;
  duration: number;
  totalQuestions: number;
  totalPoints: number;
  questions: Chuong1Question[];
}

export const HOA10_MIDTERM2_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa10_gk2_de01",
    "code": "H10-GK2-01",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de01_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quy ước về dấu của nhiệt phản ứng () nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thu nhiệt có < 0",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thu nhiệt có > 0",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng tỏa nhiệt có > 0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thu nhiệt có = 0",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de01_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điều kiện chuẩn đối với chất khí là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "áp suất 1 bar và nhiệt độ 25 <sup>o</sup>C hay 298K",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "áp suất 1 bar và nhiệt độ 298K hay 25K",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "áp suất 1 bar và nhiệt độ 25 <sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "áp suất 1 bar và nhiệt độ 25K",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de01_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt tạo thành chuẩn của một chất là nhiệt lượng tạo thành x mol chất đó từ các đơn chất bền vững nhât ở điều kiện chuẩn. Giá trị của x là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de01_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kí hiệu enthalpy tạo thành (nhiệt tạo thành) của phản ứng ở điều kiện chuẩn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de01_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt lượng tỏa ra hay thu vào của một phản ứng ở một điều kiện xác định được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhiệt lượng tỏa ra",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhiệt lượng thu vào",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "biến thiên enthalpy",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "biến thiên năng lượng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de01_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Năng lượng hóa học của một số phản ứng được ghi ở các sơ đồ dưới, sơ đồ nào biểu thị phản ứng H < 0?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de01_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Enthalpy tạo thành chuẩn của các đơn chất bền bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+1 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "-1 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+2 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0 kJ.mol<sup>-1</sup>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de01_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện chuẩn, phản ứng của 2 mol Na (thể rắn) với 1/2 mol O<sub>2</sub> (thể khí) thu được 1 mol Na<sub>2</sub>O (thể rắn) giải phóng 417,98 kJ mol<sup>-1</sup>. Phản ứng trên được biểu diễn như sau:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2Na<sub>(s)</sub> + O<sub>2(g)</sub> → Na<sub>2</sub>O<sub>(s)</sub> = 417,98 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2Na<sub>(s)</sub> + O<sub>2(g)</sub>→ Na<sub>2</sub>O<sub>(s)</sub> = –417,98 kJ.mol<sup>-1</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4Na<sub>(s)</sub> + O<sub>2(g)</sub> → 2Na<sub>2</sub>O<sub>(s)</sub> = –417,98 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4Na<sub>(s)</sub> + O<sub>2(g)</sub> → 2Na<sub>2</sub>O<sub>(s)</sub> = 417,98 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de01_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nung nóng hai ống nghiệm chứa CaCO<sub>3</sub> và P, xảy ra các phản ứng sau:<br/>4P(s) + 5O<sub>2</sub>(g)  2P<sub>2</sub>O<sub>5</sub>(s)(1)<br/>CaCO<sub>3(s)</sub> → CaO<sub>(s)</sub> + CO<sub>2(s)</sub> (2)<br/>Khi ngừng đun nóng, phản ứng (2) dừng lại còn phản ứng (1) tiếp tục xảy ra, chứng tỏ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phản ứng (1) toả nhiệt, phản ứng (2) thu nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng (1) thu nhiệt, phản ứng (2) toả nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cả 2 phản ứng đều toả nhiệt",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cả 2 phản ứng đều thu nhiệt",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de01_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình nhiệt hóa học sau: 2H<sub>2</sub> (g) + O<sub>2</sub> (g) ⟶ 2H<sub>2</sub>O (g)      = − 483,64 kJ<br/>So sánh đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "∑ (cđ) > ∑ (sp)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "∑ (cđ) = ∑ (sp)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "∑ (cđ) < ∑ (sp)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "∑ (cđ) ≤ ∑ (sp)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de01_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng: . Biết enthalpy tạo thành chuẩn của NH<sub>3</sub> là –45,9 kJ.mol<sup>-1</sup>. Để thu được 2 mol NH<sub>3</sub> ở cùng điều kiện phản ứng thì lượng nhiệt",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tỏa ra là –45,9 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "thu vào là 45,9 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tỏa ra là 91,8 kJ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "thu vào là 91,8 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de01_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các đêm trại Hè, thường có hoạt động đốt lửa trại kết hợp giao lưu văn nghệ. Càng lại gần đám lửa ta càng thấy nóng hơn vì",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "quá trình củi cháy là tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "quá trình củi cháy thu nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đi lại nhiều nên thấy nóng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhiệt độ cơ thể cao hơn nhiệt độ ngoài trời",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de01_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng: H<sub>2</sub>(g) + Cl<sub>2</sub>(g) → 2HCl(g). Ở điều kiện chuẩn, cứ 1 mol H<sub>2</sub> phản ứng hết sẽ tỏa ra -184,6 kJ. Enthalpy tạo thành chuẩn của HCl(g) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "92,3 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–92,3 kJ.mol<sup>-1</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "184,6 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–184,6 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de01_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng đốt cháy methane (CH<sub>4</sub>) như sau:<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = -890,36 kJ<br/>Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tỏa rất nhiều nhiệt",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở điều kiện chuẩn, khi đốt cháy hoàn toàn 1 mol CH<sub>4</sub>, sản phẩm là CO<sub>2(g)</sub> và H<sub>2</sub>O<sub>(l)</sub> thì sẽ giải phóng một nhiệt lượng là 890,36 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cũng phản ứng này, nếu nước ở thể hơi thì giá trị  không thay đổi",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chính là nhiệt tỏa ra kèm theo phản ứng đốt cháy methane ở điều kiện chuẩn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de01_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng giữa bột nhôm (aluminium) với oxygen có phương trình nhiệt hóa học như sau:<br/>4Al(s) + 3O<sub>2</sub>(g) → 2Al<sub>2</sub>O<sub>3</sub>(s) ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> = -3352 kJ<br/>Nhiệt lượng thoát ra khi đốt cháy 24,3 gam bột nhôm là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "–3016,8 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–754,2 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "–1508,4 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–3724,4 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de01_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình nhiệt hóa học đốt cháy acetylene (C<sub>2</sub>H<sub>2</sub>), methane (CH<sub>4</sub>) và C(graphite, s):<br/>2C<sub>2</sub>H<sub>2</sub>(g) + 5O<sub>2</sub>(g) → 4CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g)       = - 668 kJ<br/>C(graphite, s) + O<sub>2</sub>(g)  CO<sub>2</sub>(g)  = -393,51 kJ<br/>Từ 3 phương trình trên ta nên chọn nhiên liệu nào để có thể ứng dụng hàn xì kim loại?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Acetylene (C<sub>2</sub>H<sub>2</sub>)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Methane (CH<sub>4</sub>)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C(graphite, s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cả ba phương trình",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de01_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng: 4HCl (g) + O<sub>2</sub> (g)  2Cl<sub>2</sub> (g) + 2H<sub>2</sub>O (g)<br/><br/>Biến thiên enthalpy chuẩn của phản ứng trên tính theo năng lượng liên kết là bao nhiêu? Phản ứng tỏa nhiệt hay thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "= −148 kJ, phản ứng tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "= −148 kJ, phản ứng thu nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "= 215 kJ, phản ứng tỏa nhiệt",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "= 215 kJ, phản ứng thu nhiệt",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de01_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt tạo thành chuẩn tính theo kJ/mol của C<sub>2</sub>H<sub>5</sub>OH(l), CO<sub>2</sub>(g) và H<sub>2</sub>O(l) lần lượt là –267, –393,5 và –285,8. Cần đốt cháy bao nhiêu gam cồn để đun 100 gam nước từ 25<sup>o</sup>C đến 100<sup>o</sup>C (biết nhiệt dung của nước là 4,2 J/g.K)? Giả thiết, cồn là C<sub>2</sub>H<sub>5</sub>OH nguyên chất và có 40% nhiệt lượng thất thoát ra môi trường.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4,375",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1,748",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2,182",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0,875",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án: B.<br/><br/>QH<sub>2</sub>O thu = m.c.Δt = 100.4,2.(100−25) = 31500J = 31,5kJ<br/>Nhiệt lượng hấp thụ là 100% − 40% = 60%<br/>QC<sub>2</sub>H<sub>5</sub>OH toả = 31,5 : 60% = 52,5kJ<br/>",
        "explanationImages": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_image41.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_hdphoto5.wdp",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_image42.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_hdphoto6.wdp",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_image43.png"
        ],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de01_p2_q19",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Khi các phản ứng hóa học xảy ra thường có sự trao đổi nhiệt với môi trường, làm thay đổi nhiệt độ của môi trường.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tỏa nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi than, củi cháy không khí xung quanh ấm hơn do phản ứng tỏa nhiệt.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Pha viên C sủi vitamin C vào nước, khi viên C sủi tan thấy cốc nước mát hơn là do phản ứng thu nhiệt.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de01_p2_q20",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Phản ứng phân hủy 1 mol H<sub>2</sub>O (g) ở điều kiện chuẩn:<br/>H<sub>2</sub>O<sub>(</sub><sub>g</sub><sub>)</sub>→ H<sub>2</sub><sub>(</sub><sub>g</sub><sub>)</sub>+ O<sub>2</sub><sub>(</sub><sub>g</sub><sub>)</sub>(1) cần cung cấp một nhiệt lượng là 241,8 kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng (1) là phản ứng tỏa nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt tạo thành chuẩn của H<sub>2</sub>O (g) là -241,8 kJ mol-1.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy chuẩn của phản ứng 2H<sub>2(g)</sub> + O<sub>2(g)</sub> → 2H<sub>2</sub>O<sub>(g)</sub> là -483,6 kJ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Biến thiên enthalpy chuẩn của phản ứng (1) là 124,05 kJ.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Phản ứng thu nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Biến thiên enthalpy chuẩn của phản ứng (1) là -124,05 kJ.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de01_p2_q21",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho hai phản ứng cùng xảy ra ở điều kiện chuẩn:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Enthalpy tạo thành chuẩn của NO là",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Enthalpy tạo thành chuẩn của NO<sub>2</sub> là",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol N<sub>2</sub> với 1 mol O<sub>2</sub> tạo thành 2 mol NO là",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol khí NO với 0,5 mol khí  tạo thành 1 mol khí NO<sub>2</sub> là",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai vì phản ứng (2) không phải tạo thành từ các đơn chất.<br/>c. Sai vì biến thiên enthalpy chuẩn của phản ứng giữa 1 mol  với 1 mol  tạo thành 2 mol NO là<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de01_p2_q22",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Sulfur dioxide là một chất có nhiều ứng dụng trong công nghiệp (dùng để sản xuất sulfuric acid, tẩy trắng bột giấy trong công nghiệp giấy, tẩy trắng dung dịch đường trong sản xuất đường tinh luyện..) và giúp ngăn cản sự phát triển của một số vi khuẩn và nấm gây hại cho thực phẩm. Ở áp suất 1 bar và nhiệt độ 25°C, phản ứng giữa sulfur với oxygen xảy ra theo phương trình<br/>“ S (s) + O<sub>2</sub>(g) → SO<sub>2</sub>(g)” và tỏa ra một lượng nhiệt là 296,9kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Biến thiên enthalpy chuẩn của phản ứng là 296,9 kJ mol<sup>-1</sup>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Enthalpy tạo thành chuẩn của sulfur dioxide bằng -296,9 kJ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sulfur dioxide vừa có thể là chất khử vừa có thể là chất oxi hóa, tùy thuộc vào phản ứng mà nó tham gia.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0,5 mol sulfur tác dụng hết với oxygen giải phóng 148,45kJ năng lượng dưới dạng nhiệt.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Biến thiên enthalpy chuẩn của phản ứng là -196,9kJ.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de01_p3_q23",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các quá trình sau:<br/>(a) Đốt một ngọn nến.<br/>(b) Nước đóng băng.<br/>(c) Hòa tan một ít bột giặt trong tay với nước thấy tay ấm.<br/>(d) Muối kết tinh từ nước biển ở các ruộng muối.<br/>(e) Đổ mồ hôi sau khi chạy bộ.<br/>Trong các quá trình trên, có bao nhiêu quá trình thu nhiệt?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de01_p3_q24",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phương trình nhiệt hóa học của phản ứng: CO<sub>2</sub>(g) → CO(g) + O<sub>2</sub>(g) . Giá trị  của phản ứng: 2CO<sub>2</sub>(g) → 2CO(g) + O<sub>2</sub>(g) là bao nhiêu kJ?",
        "images": [],
        "correctAnswer": "560",
        "explanation": "Đáp án: 560.<br/>= 2x280 = 560 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de01_p3_q25",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Liệt kê các phản ứng có thể tự xảy ra (sau giai đoạn khơi mào ban đầu) theo dãy số thứ tự tăng dần (Ví dụ: 234, 14,...).<br/>(1) 3Fe(s) + 4H<sub>2</sub>O(l)  Fe<sub>3</sub>O<sub>4</sub>(s) + 4H<sub>2</sub>(g) = +26,32 kJ<br/>(2) N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g) = +179,20 kJ<br/>(3) C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l)= -1370,70 kJ<br/>(4) C(graphite, s) + O<sub>2</sub>(g)  CO<sub>2</sub>(g)  = -393,51 kJ",
        "images": [],
        "correctAnswer": "34",
        "explanation": "Đáp án: 34.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de01_p3_q26",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Giá trị trung bình của các năng lượng liên kết ở điều kiện chuẩn:<br/><br/>Biến thiên enthalpy của phản ứng C<sub>3</sub>H<sub>8</sub> (g)  CH<sub>4</sub> (g) + C<sub>2</sub>H<sub>4</sub> (g) có giá trị là bao nhiêu kJ?",
        "images": [],
        "correctAnswer": "80",
        "explanation": "Đáp án: 80.",
        "explanationImages": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_image48.png"
        ],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de01_p3_q27",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Nhiệt tỏa ra khi đốt cháy 1 gam một mẫu than là 23,0 kJ. Giả thiết rằng toàn bộ lượng nhiệt của quá trình đốt than tỏa ra đều dùng để làm nóng nước, không có sự thất thoát nhiệt, hãy tính khối lượng than (gam) cần phải đốt để làm nóng 500 gam nước từ  tới  Biết để làm nóng 1 mol nước thêm  cần một nhiệt lượng là 75,4 J. (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "6,4",
        "explanation": "Đáp án: 6,4.<br/>Lượng nhiệt cần dùng để đun nóng 500 gam nước từ lên  là<br/>Vậy lượng than đá cần dùng là:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de01_p3_q28",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng sau xảy ra ở điều kiện chuẩn:<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = –890,36 kJ<br/>CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(s) = 178,29 kJ<br/>Ở điều kiện tiêu chuẩn, cần phải đốt cháy hoàn toàn bao nhiêu gam CH<sub>4</sub>(g) để cung cấp nhiệt cho phản ứng tạo 2 mol CaO bằng cách nung CaCO<sub>3</sub>. Giả thiết hiệu suất các quá trình đều là 100% (Làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "6,4",
        "explanation": "Đáp án: 6,4.<br/>2 mol CaO tạo thành cần cung cấp một nhiệt lượng là 356,58 kJ<br/>Nhiệt lượng của phản ứng nung vôi bằng lượng nhiệt khi đốt x mol khí CH<sub>4</sub>(g)<br/>Theo đề 1 mol khí CH<sub>4</sub> khi đốt tỏa ra một nhiệt lượng 890,36 kJ<br/>x mol 356,58 kJ<br/>x = 0,4 mol  m = 6,4g.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_gk2_de02",
    "code": "H10-GK2-02",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de02_p1_q1",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng: H<sub>2</sub>(g) + Cl<sub>2</sub>(g) → 2HCl(g). Ở điều kiện chuẩn, cứ 1 mol H<sub>2</sub> phản ứng hết sẽ tỏa ra -184,6 kJ. Enthalpy tạo thành chuẩn của HCl(g) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "92,3 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–92,3 kJ.mol<sup>-1</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "184,6 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–184,6 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de02_p1_q2",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng đốt cháy methane (CH<sub>4</sub>) như sau:<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = -890,36 kJ<br/>Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tỏa rất nhiều nhiệt",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở điều kiện chuẩn, khi đốt cháy hoàn toàn 1 mol CH<sub>4</sub>, sản phẩm là CO<sub>2(g)</sub> và H<sub>2</sub>O<sub>(l)</sub> thì sẽ giải phóng một nhiệt lượng là 890,36 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cũng phản ứng này, nếu nước ở thể hơi thì giá trị  không thay đổi",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chính là nhiệt tỏa ra kèm theo phản ứng đốt cháy methane ở điều kiện chuẩn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de02_p1_q3",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng giữa bột nhôm (aluminium) với oxygen có phương trình nhiệt hóa học như sau:<br/>4Al(s) + 3O<sub>2</sub>(g) → 2Al<sub>2</sub>O<sub>3</sub>(s) ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> = -3352 kJ<br/>Nhiệt lượng thoát ra khi đốt cháy 24,3 gam bột nhôm là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "–3016,8 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–754,2 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "–1508,4 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–3724,4 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de02_p1_q4",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình nhiệt hóa học đốt cháy acetylene (C<sub>2</sub>H<sub>2</sub>), methane (CH<sub>4</sub>) và C(graphite, s):<br/>2C<sub>2</sub>H<sub>2</sub>(g) + 5O<sub>2</sub>(g) → 4CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g)       = - 668 kJ<br/>C(graphite, s) + O<sub>2</sub>(g)  CO<sub>2</sub>(g)  = -393,51 kJ<br/>Từ 3 phương trình trên ta nên chọn nhiên liệu nào để có thể ứng dụng hàn xì kim loại?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Acetylene (C<sub>2</sub>H<sub>2</sub>)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Methane (CH<sub>4</sub>)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C(graphite, s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cả ba phương trình",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de02_p1_q5",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng: 4HCl (g) + O<sub>2</sub> (g)  2Cl<sub>2</sub> (g) + 2H<sub>2</sub>O (g)<br/><br/>Biến thiên enthalpy chuẩn của phản ứng trên tính theo năng lượng liên kết là bao nhiêu? Phản ứng tỏa nhiệt hay thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "= −148 kJ, phản ứng tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "= −148 kJ, phản ứng thu nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "= 215 kJ, phản ứng tỏa nhiệt",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "= 215 kJ, phản ứng thu nhiệt",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de02_p1_q6",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt tạo thành chuẩn tính theo kJ/mol của C<sub>2</sub>H<sub>5</sub>OH(l), CO<sub>2</sub>(g) và H<sub>2</sub>O(l) lần lượt là –267, –393,5 và –285,8. Cần đốt cháy bao nhiêu gam cồn để đun 100 gam nước từ 25<sup>o</sup>C đến 100<sup>o</sup>C (biết nhiệt dung của nước là 4,2 J/g.K)? Giả thiết, cồn là C<sub>2</sub>H<sub>5</sub>OH nguyên chất và có 40% nhiệt lượng thất thoát ra môi trường.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4,375",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1,748",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2,182",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0,875",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án: B.<br/><br/>QH<sub>2</sub>O thu = m.c.Δt = 100.4,2.(100−25) = 31500J = 31,5kJ<br/>Nhiệt lượng hấp thụ là 100% − 40% = 60%<br/>QC<sub>2</sub>H<sub>5</sub>OH toả = 31,5 : 60% = 52,5kJ<br/>",
        "explanationImages": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_image41.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_hdphoto5.wdp",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_image42.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_hdphoto6.wdp",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_1)_image43.png"
        ],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de02_p1_q7",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các phản ứng phân hủy thường là phản ứng thu nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng càng tỏa ra nhiều nhiệt càng dễ tự xảy ra",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng oxi hóa chất béo cung cấp nhiệt cho cơ thể",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các phản ứng khi đun nóng đều dễ xảy ra hơn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de02_p1_q8",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt tạo thành chuẩn (∆<sub>f</sub>) của các đơn chất ở dạng bền vững nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0 kJ/mol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 kJ/mol",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de02_p1_q9",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quy ước về dấu của nhiệt phản ứng () nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thu nhiệt có < 0",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng tỏa nhiệt có > 0",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng thu nhiệt có = 0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng tỏa nhiệt có < 0",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de02_p1_q10",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình nhiệt hóa học của phản ứng trung hòa sau :<br/>HCl(aq)  + NaOH(aq)    NaCl(aq)  +  H<sub>2</sub>O(l)      = -57,3 kJ<br/>Phát biểu nào sau đây không đúng ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho 1 mol HCl tác dụng với 1 mol NaOH tỏa nhiệt lượng là 57,3kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cho 1 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho HCl dư tác dụng với 1 mol NaOH thu nhiệt lượng là 57,3kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de02_p1_q11",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng nhiệt phân CaCO<sub>3</sub>: CaCO<sub>3</sub>(s)  CaO(s) + CO<sub>2</sub>(g). Ở điều kiện chuẩn, để thu được 1 mol CaO(s) từ CaCO<sub>3</sub>(s) cần phải cung cấp 179,2 kJ nhiệt lượng. Phát biểu nào sau đây đúng khi nói về phản ứng trên?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tỏa nhiệt, ∆<sub>r</sub>= +179,2 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thu nhiệt, ∆<sub>r</sub>= –179,2 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng tỏa nhiệt, ∆<sub>r</sub>= –179,2 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thu nhiệt, ∆<sub>r</sub>= +179,2 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de02_p1_q12",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình nhiệt hoá học nào sau đây ứng với sơ đồ biểu diễn biến thiên enthalpy của phản ứng sau:",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_2)_image40.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_2)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) → 2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) ∆<sub>r</sub> = +1450 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) → 2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) ∆<sub>r</sub> = +1450 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) → 2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) ∆<sub>r</sub> = -1450 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) → 2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) ∆<sub>r</sub> = -1450 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de02_p1_q13",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaOH(aq) + HCl(aq)  NaCl(aq) + H<sub>2</sub>O(l)  ∆<sub>r</sub>= –57,9 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>(g) + I<sub>2</sub>(s)  2HI(g)    ∆<sub>r</sub>= +53,0 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g)  C<sub>2</sub>H<sub>6</sub>(g)    ∆<sub>r</sub>= –137,0 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2CO(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g)    ∆<sub>r</sub>= –566,0 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de02_p1_q14",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biết biến thiên enthalpy của phản ứng sau ở điều kiện chuẩn<br/>CO (g)  +  O<sub>2</sub> (g) CO<sub>2</sub>(g)     = -283,0 kJ<br/>Biết nhiệt tạo thành của CO<sub>2</sub>: (CO<sub>2</sub> (g))  = -393,5 kJ. Nhiệt tạo thành chuẩn của CO là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-141,5 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "+110,5 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "-221,0 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "-110,5 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de02_p1_q15",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình ảnh nào miêu tả quá trình đang diễn ra sự thu nhiệt?<br/>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hình 1",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hình 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hình 2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hình 4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de02_p1_q16",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng chuyển hoá giữa hai dạng đơn chất của phosphorus (P):<br/>P(s, đỏ) P (s, trắng)    = +17,6 kJ<br/>Điều này chứng tỏ phản ứng:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tỏa nhiệt, P trắng bền hơn P đỏ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tỏa nhiệt, P đỏ bền hơn P trắng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "thu nhiệt, P trắng bền hơn P đỏ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "thu nhiệt, P đỏ bền hơn P trắng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de02_p1_q17",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình nhiệt hóa học giữa nitrogen và oxygen như sau:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g) = +180kJ<br/>Kết luận nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng xảy ra thuận lợi ở điều kiện thường",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng tỏa nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nitrogen và oxygen phản ứng mạnh hơn khi ở nhiệt độ thấp",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng hóa học xảy ra có sự hấp thụ nhiệt năng từ môi trường",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de02_p1_q18",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình hoá học tổng quát: aA + bB  mM + nN. Hãy chọn các phương án tính đúng  của phản ứng theo nhiệt tạo thành chuẩn () của các chất A, B, C, D.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "= m . (M) + n . (N) – a. (A) – b . (B)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "= a. (A) + b . (B)   V m . (M) – n . (N)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "= a . E<sub>b</sub>(A) + b . E<sub>b</sub> (B) – m . E<sub>b</sub>(M) – n . E<sub>b</sub> (N)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "= m . E<sub>b</sub>(M) + n . E<sub>b</sub> (N)  – a . E<sub>b</sub>(A) – b . E<sub>b</sub> (B)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de02_p2_q19",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Sulfur dioxide là một chất có nhiều ứng dụng trong công nghiệp (dùng để sản xuất sulfuric acid, tẩy trắng bột giấy trong công nghiệp giấy, tẩy trắng dung dịch đường trong sản xuất đường tinh luyện..) và giúp ngăn cản sự phát triển của một số vi khuẩn và nấm gây hại cho thực phẩm. Ở áp suất 1 bar và nhiệt độ 25°C, phản ứng giữa sulfur với oxygen xảy ra theo phương trình<br/>“ S (s) + O<sub>2</sub>(g) → SO<sub>2</sub>(g)” và tỏa ra một lượng nhiệt là 296,9kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Biến thiên enthalpy chuẩn của phản ứng là 296,9 kJ mol<sup>-1</sup>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Enthalpy tạo thành chuẩn của sulfur dioxide bằng -296,9 kJ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sulfur dioxide vừa có thể là chất khử vừa có thể là chất oxi hóa, tùy thuộc vào phản ứng mà nó tham gia.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0,5 mol sulfur tác dụng hết với oxygen giải phóng 148,45kJ năng lượng dưới dạng nhiệt.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Biến thiên enthalpy chuẩn của phản ứng là -196,9kJ.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de02_p2_q20",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Với các phản ứng có kèm theo trao đổi năng lượng dưới dạng nhiệt, có hai khả năng đó là phản ứng tỏa nhiệt và phản ứng thu nhiệt.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thu nhiệt xảy ra thuận lợi hơn so với phản ứng tỏa nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Biến thiên enthalpy của phản ứng tỏa nhiệt trái dấu với phản ứng thu nhiệt.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng thu nhiệt thường phải cung cấp nhiệt độ liên tục trong quá trình phản ứng.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi cho vôi sống vào nước thấy nhiệt độ tăng so với ban đầu chứng tỏ đây là phản ứng tỏa nhiệt.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Phản ứng tỏa nhiệt thuận lợi hơn thu nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de02_p2_q21",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho phương trình nhiệt hoá học sau:<br/>H<sub>2</sub>(g) + I<sub>2</sub>(g) → 2HI(g)  = +11,3 kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng giải phóng nhiệt lượng 11,3 kJ khi 2 mol HI được tạo thành.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tổng nhiệt phá vỡ liên kết của chất phản ứng lớn hơn nhiệt tỏa ra khi tạo thành sản phẩm.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Năng lượng chứa trong H<sub>2</sub> và I<sub>2</sub> cao hơn trong HI.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng xảy ra với tốc độ chậm.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. ∆H = +11,3 kJ > 0 ⇒ phản ứng thu nhiệt.<br/>b. Đúng.<br/>c. Sai. Phân tử H<sub>2</sub> và I<sub>2</sub> có liên kết bền hơn HI, nghĩa là mức năng lượng thấp hơn.<br/>d. Sai. Không nói về sự trao đổi năng lượng của phản ứng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de02_p2_q22",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Baking soda (NaHCO<sub>3</sub>) có trong thành phần bột nở dùng để làm bánh và cũng có trong thành phần của thuốc đau dạ dày Nabica, xét phản ứng nhiệt phân NaHCO<sub>3</sub> xảy ra như sau:<br/>2NaHCO<sub>3</sub>(s) → Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l)   = +91,6 kJ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng trên có tổng nhiệt tạo thành của chất đầu lớn hơn tổng nhiệt tạo thành của các chất sản phẩm..",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cần tránh để bột nở ở nơi có nhiệt độ cao.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng trên thu vào một nhiệt lượng bằng 91,6 kJ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu thay đổi trạng thái của H<sub>2</sub>O(l) bằng H<sub>2</sub>O(g) thì giá trị biến thiên enthalpy chuẩn của phản ứng không đổi.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Vì > 0 nên tổng nhiệt tạo thành của sản phẩm lớn hơn tổng nhiệt tạo thành của chất đầu.<br/>b. Đúng. Bột nở chứa NaHCO<sub>3</sub> dễ bị phân hủy bởi nhiệt theo phương trình hóa học trên.<br/>c. Đúng.<br/>d. Sai. Nếu thay đổi trạng thái của H<sub>2</sub>O(l) bằng H<sub>2</sub>O(g) thì giá trị biến thiên enthalpy của phản ứng sẽ thay đổi vì nhiệt tạo thành của H<sub>2</sub>O(l) khác H<sub>2</sub>O(g).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de02_p3_q23",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Nhiệt tỏa ra khi đốt cháy 1 gam một mẫu than là 23,0 kJ. Giả thiết rằng toàn bộ lượng nhiệt của quá trình đốt than tỏa ra đều dùng để làm nóng nước, không có sự thất thoát nhiệt, hãy tính khối lượng than (gam) cần phải đốt để làm nóng 500 gam nước từ  tới  Biết để làm nóng 1 mol nước thêm  cần một nhiệt lượng là 75,4 J. (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "6,4",
        "explanation": "Đáp án: 6,4.<br/>Lượng nhiệt cần dùng để đun nóng 500 gam nước từ lên  là<br/>Vậy lượng than đá cần dùng là:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de02_p3_q24",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng sau xảy ra ở điều kiện chuẩn:<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = –890,36 kJ<br/>CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(s) = 178,29 kJ<br/>Ở điều kiện tiêu chuẩn, cần phải đốt cháy hoàn toàn bao nhiêu gam CH<sub>4</sub>(g) để cung cấp nhiệt cho phản ứng tạo 2 mol CaO bằng cách nung CaCO<sub>3</sub>. Giả thiết hiệu suất các quá trình đều là 100% (Làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "6,4",
        "explanation": "Đáp án: 6,4.<br/>2 mol CaO tạo thành cần cung cấp một nhiệt lượng là 356,58 kJ<br/>Nhiệt lượng của phản ứng nung vôi bằng lượng nhiệt khi đốt x mol khí CH<sub>4</sub>(g)<br/>Theo đề 1 mol khí CH<sub>4</sub> khi đốt tỏa ra một nhiệt lượng 890,36 kJ<br/>x mol 356,58 kJ<br/>x = 0,4 mol  m = 6,4g.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de02_p3_q25",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Phản ứng giữa sulfur dioxide và oxygen là tỏa nhiệt<br/>2SO<sub>2</sub>(g) + O<sub>2</sub>(g) 2SO<sub>3</sub>(g)      = –197 kJ<br/>Giá trị biến thiên enthalpy của phản ứng SO<sub>3</sub>(g) SO<sub>2</sub>  + O<sub>2</sub> (g) là bao nhiêu kJ?",
        "images": [],
        "correctAnswer": "98,5",
        "explanation": "Đáp án: 98,5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de02_p3_q26",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phương trình nhiệt hóa học của các phản ứng như sau:<br/>CO<sub>2</sub>(g) CO(g) + O<sub>2</sub>(g)<br/>3H<sub>2</sub>(g) + N<sub>2</sub>(g) 2NH<sub>3</sub>(g)<br/>3Fe(s) + 4H<sub>2</sub>O(l)  Fe<sub>3</sub>O<sub>4</sub>(s) + 4H<sub>2</sub>(g)<br/>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(g)<br/>H<sub>2</sub>(g) + F<sub>2</sub>(g)  2HF(g)<br/>Trong các phản ứng trên, có bao nhiêu phản ứng tỏa nhiệt?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de02_p3_q27",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Quá trình hoà tan calcium chloride trong nước:<br/>CaCl<sub>2</sub>(s)  Ca<sup>2+</sup>(ag) + 2Cl<sup>-</sup> (ag) = ?<br/><br/>Tính biến thiên enthalpy chuẩn của quá trình theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "-82",
        "explanation": "Đáp án: -82.<br/>Enthalpy của quá trình:  =  -542,83 + 2.(-167,16) – (-795,0) = -82,15 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de02_p3_q28",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các loại phản ứng sau:<br/>(1) Phản ứng tạo gỉ kim loại.<br/>(2) Phản ứng quang hợp.<br/>(3) Phản ứng nhiệt phân.<br/>(4) Phản ứng đốt cháy.<br/>Liệt kê các phản ứng cần cung cấp năng lượng trong suốt quá trình diễn ra phản ứng theo dãy số thứ tự tăng dần (Ví dụ: 1234, 24,…).",
        "images": [],
        "correctAnswer": "23",
        "explanation": "Đáp án: 23.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_gk2_de03",
    "code": "H10-GK2-03",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de03_p1_q1",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaOH(aq) + HCl(aq)  NaCl(aq) + H<sub>2</sub>O(l)  ∆<sub>r</sub>= –57,9 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>(g) + I<sub>2</sub>(s)  2HI(g)    ∆<sub>r</sub>= +53,0 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g)  C<sub>2</sub>H<sub>6</sub>(g)    ∆<sub>r</sub>= –137,0 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2CO(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g)    ∆<sub>r</sub>= –566,0 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de03_p1_q2",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biết biến thiên enthalpy của phản ứng sau ở điều kiện chuẩn<br/>CO (g)  +  O<sub>2</sub> (g) CO<sub>2</sub>(g)     = -283,0 kJ<br/>Biết nhiệt tạo thành của CO<sub>2</sub>: (CO<sub>2</sub> (g))  = -393,5 kJ. Nhiệt tạo thành chuẩn của CO là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-141,5 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "+110,5 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "-221,0 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "-110,5 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de03_p1_q3",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình ảnh nào miêu tả quá trình đang diễn ra sự thu nhiệt?<br/>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hình 1",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hình 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hình 2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hình 4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de03_p1_q4",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng chuyển hoá giữa hai dạng đơn chất của phosphorus (P):<br/>P(s, đỏ) P (s, trắng)    = +17,6 kJ<br/>Điều này chứng tỏ phản ứng:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tỏa nhiệt, P trắng bền hơn P đỏ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tỏa nhiệt, P đỏ bền hơn P trắng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "thu nhiệt, P trắng bền hơn P đỏ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "thu nhiệt, P đỏ bền hơn P trắng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de03_p1_q5",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình nhiệt hóa học giữa nitrogen và oxygen như sau:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g) = +180kJ<br/>Kết luận nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng xảy ra thuận lợi ở điều kiện thường",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng tỏa nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nitrogen và oxygen phản ứng mạnh hơn khi ở nhiệt độ thấp",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng hóa học xảy ra có sự hấp thụ nhiệt năng từ môi trường",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de03_p1_q6",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình hoá học tổng quát: aA + bB  mM + nN. Hãy chọn các phương án tính đúng  của phản ứng theo nhiệt tạo thành chuẩn () của các chất A, B, C, D.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "= m . (M) + n . (N) – a. (A) – b . (B)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "= a. (A) + b . (B)   V m . (M) – n . (N)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "= a . E<sub>b</sub>(A) + b . E<sub>b</sub> (B) – m . E<sub>b</sub>(M) – n . E<sub>b</sub> (N)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "= m . E<sub>b</sub>(M) + n . E<sub>b</sub> (N)  – a . E<sub>b</sub>(A) – b . E<sub>b</sub> (B)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de03_p1_q7",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây có thể tự xảy ra ở điều kiện thường?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng giữa H<sub>2</sub> và O<sub>2</sub> trong hỗn hợp khí",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng nhiệt phân Cu(OH)<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng giữa Zn và dung dịch H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng đốt cháy cồn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de03_p1_q8",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điều kiện nào sau đây được gọi là điều kiện chuẩn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 20<sup>o</sup>C (293K)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Áp suất 1,5 bar (đối với chất khí), nồng độ 1,5 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 25<sup>o</sup>C (298K)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Áp suất 1,5 bar (đối với chất khí), nồng độ 1,5 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 20<sup>o</sup>C (293K)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 25<sup>o</sup>C (298K)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de03_p1_q9",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng đốt cháy ethanol: C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l)<br/>Đốt cháy hoàn toàn 5 g ethanol, nhiệt tỏa ra làm nóng chảy 447 g nước đá ở 0<sup>o</sup>C. Biết 1 g nước đá nóng chảy hấp thụ nhiệt lượng 333,5 J, biến thiên enthalpy của phản ứng đốt cháy ethanol là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-1371 kJ/mol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "-954 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "-149 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "+149 kJ/mol",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án: A.<br/>Q = 447.333,5 = 149074,5 J  149 (kJ)  H = .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de03_p1_q10",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng sau: CHCH(g) + H<sub>2</sub>(g) CH<sub>3</sub>-CH<sub>3</sub> (g)<br/>Năng lượng liên kết (kJ/mol) của H – H là 436, của C – C là 347, của C – H là 414 và của CC là 839. Nhiệt () của phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "–294 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–292kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+292kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "+294kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de03_p1_q11",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) 5%, có khối lượng riêng là 1,02 g/mL, phản ứng oxi hóa 1 mol glucose tạo thành CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tỏa ra nhiệt lượng là 2803,0 kJ.<br/>Một người bệnh được truyền một chai nước chứa 500 mL dung dịch glucose 5%. Năng lượng tối đa từ phản ứng oxi hóa hoàn toàn glucose mà bệnh nhân đó có thể nhận được là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+397,09 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–397,09 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+416,02 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–416,02 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án: A.<br/>Phản ứng tỏa nhiệt nên<br/>Số mol glucose:<br/>Q = 2803,0.0,14167 = 397,1 (kJ).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de03_p1_q12",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu:<br/>(a) Phản ứng tỏa nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt.<br/>(b) Tất cả các phản ứng mà chất tham gia có chứa nguyên tố oxygen đều tỏa nhiệt.<br/>(c) Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt.<br/>(d) Lượng nhiệt mà phản ứng hấp thụ hay giải phóng không phụ thuộc vào điều kiện thực hiện phản ứng và thể tồn tại của chất trong phản ứng.<br/>(e) Sự cháy của nhiên liệu (xăng, dầu, khí gas, than, gỗ,…) là những ví dụ về phản ứng thu nhiệt vì cần khơi mào.<br/>Số phát biểu đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de03_p1_q13",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng hóa học trong đó có sự truyền năng lượng từ hệ sang môi trường xung quanh nó được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phản ứng tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng trung hòa",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phản ứng trao đổi",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phản ứng thu nhiệt",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de03_p1_q14",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biến thiên enthalpy chuẩn của một phản ứng hóa học kí hiệu là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de03_p1_q15",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào dưới đây là phản ứng thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nung NH<sub>4</sub>Cl tạo ra HCl và NH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cồn cháy trong không khí",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đá vôi tác dụng với dung dịch HCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự phân hạch hạt nhân",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de03_p1_q16",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de03_p1_q17",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điều kiện chuẩn là điều kiện ứng với áp suất 1 bar (với chất khí), nồng độ 1 mol L<sup>-1</sup> (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 298 K",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Điều kiện chuẩn là điều kiện ứng với nhiệt độ 298 K",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Áp suất 760 mmHg là áp suất ở điều kiện chuẩn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Điều kiện chuẩn là điều kiện ứng với áp suất 1 atm, nhiệt độ 0 °",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de03_p1_q18",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hầu hết các phản ứng thu nhiệt cần giai đoạn khơi mào (đun, đốt nóng,…)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hầu hết các phản ứng tỏa nhiệt cần phải tiếp tục đun hoặc đốt nóng ở giai đoạn tiếp diễn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hầu hết các phản ứng tỏa nhiệt không cần phải tiếp tục đun hoặc đốt nóng ở giai đoạn tiếp diễn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tùy phản ứng cụ thể mà các phản ứng tỏa nhiệt có thể cần hoặc không cần giai đoạn khơi mào",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de03_p2_q19",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Baking soda (NaHCO<sub>3</sub>) có trong thành phần bột nở dùng để làm bánh và cũng có trong thành phần của thuốc đau dạ dày Nabica, xét phản ứng nhiệt phân NaHCO<sub>3</sub> xảy ra như sau:<br/>2NaHCO<sub>3</sub>(s) → Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l)   = +91,6 kJ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng trên có tổng nhiệt tạo thành của chất đầu lớn hơn tổng nhiệt tạo thành của các chất sản phẩm..",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cần tránh để bột nở ở nơi có nhiệt độ cao.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng trên thu vào một nhiệt lượng bằng 91,6 kJ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu thay đổi trạng thái của H<sub>2</sub>O(l) bằng H<sub>2</sub>O(g) thì giá trị biến thiên enthalpy chuẩn của phản ứng không đổi.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Vì > 0 nên tổng nhiệt tạo thành của sản phẩm lớn hơn tổng nhiệt tạo thành của chất đầu.<br/>b. Đúng. Bột nở chứa NaHCO<sub>3</sub> dễ bị phân hủy bởi nhiệt theo phương trình hóa học trên.<br/>c. Đúng.<br/>d. Sai. Nếu thay đổi trạng thái của H<sub>2</sub>O(l) bằng H<sub>2</sub>O(g) thì giá trị biến thiên enthalpy của phản ứng sẽ thay đổi vì nhiệt tạo thành của H<sub>2</sub>O(l) khác H<sub>2</sub>O(g).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de03_p2_q20",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng đốt cháy methane (CH<sub>4</sub>) và acetylene (C<sub>2</sub>H<sub>2</sub>) như sau:<br/>(1) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)<br/>(2) C<sub>2</sub>H<sub>2</sub>(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả hai phản ứng trên đều là phản ứng tỏa nhiệt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi đốt cháy cùng một lượng thể tích khí CH<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> thì lượng nhiệt sinh ra do CH<sub>4</sub> nhiều hơn lượng nhiệt sinh ra do C<sub>2</sub>H<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy của phản ứng (1), (2) tính theo nhiệt tạo thành:",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong thực tế, để hàn, cắt kim loại người ta sử dụng CH<sub>4</sub> mà không dùng C<sub>2</sub>H<sub>2</sub>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. C<sub>2</sub>H<sub>2</sub> cháy tỏa nhiều nhiệt hơn CH<sub>4</sub>.<br/>c. Đúng.<br/>d. Sai. Người ta dùng C<sub>2</sub>H<sub>2</sub> vì nhiệt lượng tỏa ra nhiều hơn CH<sub>4</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de03_p2_q21",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phản ứng tỏa nhiệt, dấu của ∆H dương vì năng lượng của hệ chất phản ứng nhỏ hơn năng lượng của hệ chất sản phẩm.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phản ứng thu nhiệt, dấu của ∆H âm vì năng lượng của hệ chất phản ứng lớn hơn năng lượng của hệ chất sản phẩm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Giá trị tuyệt đối của biến thiên enthalpy càng lớn thì nhiệt lượng tỏa ra hay thu vào của phản ứng càng nhiều.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các phản ứng xảy ra ở nhiệt độ phòng thường là phản ứng tỏa nhiệt, các phản ứng thu nhiệt thường xảy ra khi đun nóng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Trong phản ứng tỏa nhiệt, ∆H < 0.<br/>b. Sai. Trong phản ứng thu nhiệt, dấu của ∆H > 0.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de03_p2_q22",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho phương trình phản ứng: Zn (s) + CuSO<sub>4</sub> (aq)  ZnSO<sub>4</sub> (aq) + Cu (s);",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Enthalpy tạo thành chuẩn của Zn(s) bằng 210 kJ/mol.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng trên là phản ứng tỏa nhiệt.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy của phản ứng tạo thành 3,84 g Cu là 12,6 kJ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong quá trình phản ứng, nhiệt độ của hỗn hợp tăng lên.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Enthalpy tạo thành chuẩn của Zn(s) bằng 0.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy của phản ứng tạo thành 3,84g Cu là<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de03_p3_q23",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Quá trình hoà tan calcium chloride trong nước:<br/>CaCl<sub>2</sub>(s)  Ca<sup>2+</sup>(ag) + 2Cl<sup>-</sup> (ag) = ?<br/><br/>Tính biến thiên enthalpy chuẩn của quá trình theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "-82",
        "explanation": "Đáp án: -82.<br/>Enthalpy của quá trình:  =  -542,83 + 2.(-167,16) – (-795,0) = -82,15 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de03_p3_q24",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các loại phản ứng sau:<br/>(1) Phản ứng tạo gỉ kim loại.<br/>(2) Phản ứng quang hợp.<br/>(3) Phản ứng nhiệt phân.<br/>(4) Phản ứng đốt cháy.<br/>Liệt kê các phản ứng cần cung cấp năng lượng trong suốt quá trình diễn ra phản ứng theo dãy số thứ tự tăng dần (Ví dụ: 1234, 24,…).",
        "images": [],
        "correctAnswer": "23",
        "explanation": "Đáp án: 23.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de03_p3_q25",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Phản ứng tổng hợp ammonia : N<sub>2</sub>(g)  + 3H<sub>2</sub>(g)  2NH<sub>3</sub>(g)      = –92 kJ<br/>Biết năng lượng liên kết (kJ/mol) của NN  và H – H lần lượt là 946 và 436<br/>Năng lượng liên kết của N – H trong ammonia là bao nhiêu kJ/mol?",
        "images": [],
        "correctAnswer": "391",
        "explanation": "Đáp án: 391.<br/>= E<sub>b</sub>(NN ) + 3E<sub>b</sub>(H-H) - 6E<sub>b</sub>(N-H) = 946 + 3.436 - 6E<sub>b</sub>(N-H) = -92  E<sub>b</sub>(N-H) = 391 kJ/mol.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de03_p3_q26",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Một hộ gia đình mua than đá làm nhiên liệu đun nấu và trung bình mỗi ngày dùng hết 1,8 kg than. Giả thiết loại than đá trên chứa 90% carbon và 1,2% sulfur về khối lượng, còn lại là các tạp chất trơ.<br/>Cho các phản ứng:<br/>Nhiệt lượng cung cấp cho hộ gia đình từ quá trình đốt than trong một ngày tương đương bao nhiêu số điện (1 số điện = 1 kWh = 3600 kJ, làm tròn kết quả đến hàng đơn vị)?",
        "images": [],
        "correctAnswer": "15",
        "explanation": "Đáp án: 15.<br/>Trong 1800 g than đá chứa 1620 gam (135 mol) carbon và 21,6 g (0,675 mol) sulfur.<br/>Nhiệt lượng giải phóng ra khi đốt cháy 1800 gam than đá:<br/>Nhiệt lượng trên tương đương với số điện:  số.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de03_p3_q27",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Phân tử hemoglobin(Hb) trong máu nhận O<sub>2</sub> ở phổi để chuyển thành HbO<sub>2</sub>. Chất này theo máu tới các bộ phận cơ thể, tại đó HbO<sub>2</sub> lại chuyển thành Hb và O<sub>2</sub>( để cung cấp O<sub>2</sub> cho các hoạt động sinh hóa cần thiết trong cơ thể). Nếu trong không khí có lẫn carbon monoxide(CO), cơ thể nhanh chóng bị ngộ độc. Cho các số liệu thực nghiệm sau:<br/>Hb + O<sub>2</sub> → HbO<sub>2</sub>                      = -33,05kJ       (1)<br/>Hb + CO → HbCO                   = -47,28kJ       (2)<br/>HbO<sub>2</sub> + CO → HbCO + O<sub>2</sub>      = -14,23kJ       (3)<br/>HbCO + O<sub>2</sub> → HbO<sub>2</sub> + CO      = 14,23 kJ       (4)<br/>Liệt kê các phản ứng tỏa nhiệt theo số thứ tự tăng dần (ví dụ: 134, 24,...).",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de03_p3_q28",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các trường hợp sau:<br/>(1) Nước bay hơi.<br/>(2) Nước đóng băng.<br/>(3) Cồn cháy trong không khí.<br/>(4) Pha viên sủi vitamin C vào nước.<br/>(5) Phản ứng tạo gỉ sắt.<br/>Có bao nhiêu quá trình thu nhiệt trong các trường hợp trên?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_gk2_de04",
    "code": "H10-GK2-04",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de04_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng hóa học trong đó có sự truyền năng lượng từ hệ sang môi trường xung quanh nó được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phản ứng tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng trung hòa",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phản ứng trao đổi",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phản ứng thu nhiệt",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de04_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biến thiên enthalpy chuẩn của một phản ứng hóa học kí hiệu là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de04_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào dưới đây là phản ứng thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nung NH<sub>4</sub>Cl tạo ra HCl và NH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cồn cháy trong không khí",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đá vôi tác dụng với dung dịch HCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự phân hạch hạt nhân",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de04_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de04_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điều kiện chuẩn là điều kiện ứng với áp suất 1 bar (với chất khí), nồng độ 1 mol L<sup>-1</sup> (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 298 K",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Điều kiện chuẩn là điều kiện ứng với nhiệt độ 298 K",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Áp suất 760 mmHg là áp suất ở điều kiện chuẩn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Điều kiện chuẩn là điều kiện ứng với áp suất 1 atm, nhiệt độ 0 °",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de04_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hầu hết các phản ứng thu nhiệt cần giai đoạn khơi mào (đun, đốt nóng,…)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hầu hết các phản ứng tỏa nhiệt cần phải tiếp tục đun hoặc đốt nóng ở giai đoạn tiếp diễn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hầu hết các phản ứng tỏa nhiệt không cần phải tiếp tục đun hoặc đốt nóng ở giai đoạn tiếp diễn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tùy phản ứng cụ thể mà các phản ứng tỏa nhiệt có thể cần hoặc không cần giai đoạn khơi mào",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de04_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Enthalpy tạo thành của một chất (Δ<sub>f</sub>H) là nhiệt kèm theo phản ứng tạo thành",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 gam chất đó từ các đơn chất bền nhất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1 lít chất đó từ các đơn chất dạng bền nhất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1 mol chất đó từ các đơn chất bền nhất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 mol chất đó từ các hợp chất bền nhất",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de04_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây cần phải cung cấp năng lượng trong quá trình phản ứng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tạo gỉ kim loại",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng quang hợp",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng nhiệt phân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng tạo oxit Na<sub>2</sub>O",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de04_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các giá trị năng lượng liên kết:<br/><br/>Phương trình đốt cháy khí methane: CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g) (*)<br/>Biến thiên enthalpy của phản ứng (*) dựa vào năng lượng liên kết là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "–256 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–560 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "–816 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–710 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de04_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng toả nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng nhiệt phân muối KNO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng phân huỷ khí NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng oxi hoá glucose trong cơ thể",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng hoà tan NH<sub>4</sub>Cl trong nước",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de04_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các chất dưới đây, chất nào có ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N<sub>2</sub>(g)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "S(s)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na(s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "O<sub>3</sub>(g)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de04_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biến thiên enthalpy của một phản ứng được ghi ở sơ đồ dưới. Kết luận nào sau đây là đúng?",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_3)_image35.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_3)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Năng lượng chất tham gia phản ứng nhỏ hơn năng lượng sản phẩm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy của phản ứng là a kJ/mol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thu nhiệt",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de04_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biểu thức đúng tính của phản ứng theo năng lượng liên kết của các chất là :",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de04_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình hóa học nào dưới đây biểu thị enthalpy tạo thành chuẩn của CO(g)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2C ((graphite)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C ((graphite) + ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C ((graphite)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C ((graphite)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de04_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thu vào càng nhiều nhiệt, biến thiên enthalpy càng âm",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng tỏa ra càng nhiều nhiệt, biến thiên enthaply càng dương",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Năng lượng của hệ chất tham gia trong phản ứng tỏa nhiệt cao hơn năng lượng của hệ sản phẩm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Năng lượng của hệ chất tham gia trong phản ứng thu nhiệt cao hơn năng lượng của hệ sản phẩm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de04_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học sau: 4FeS(s) + 7O<sub>2</sub>(g) → 2Fe<sub>2</sub>O<sub>3</sub>(s) + 4SO<sub>2</sub>(g). Biết nhiệt tạo thành ∆<sub>f</sub>H<sup>0</sup><sub>298</sub> của các chất FeS(s), Fe<sub>2</sub>O<sub>3</sub>(s) và SO<sub>2</sub>(g) lần lượt là –100,0 kJ/mol, –825,5 kJ/mol và –296,8 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+3105,6 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–3105,6 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+2438,2 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–2438,2 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de04_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học sau: N<sub>2</sub>(g) + O<sub>2</sub>(g) → 2NO(g). Cho biết năng lượng liên kết trong các phân tử O<sub>2</sub>, N<sub>2</sub> và NO lần lượt là 494 kJ/mol; 945 kJ/mol và 607 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+298 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–298 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+225 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–225 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de04_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau: NH<sub>4</sub>NO<sub>3</sub>(s) + H<sub>2</sub>O(l) NH<sub>4</sub>NO<sub>3</sub>(aq)<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Biết nhiệt dung riêng của H<sub>2</sub>O là 4,2 J/g.K. Sau khi muối tan hết, nước trong bình có nhiệt độ là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "31,2<sup>o</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "28,1<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "21,9<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "18,8<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đáp án:  m  =",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "V  = 1000 g Q = mcT = 1000.4,2. T = 26.1000  T = 6,2 <sup>o</sup>C Sau khi hòa tan nước trong bình có nhiệt độ giảm so với ban đầu  25 – 6,2 = 18,8<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de04_p2_q19",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho phương trình phản ứng: Zn (s) + CuSO<sub>4</sub> (aq)  ZnSO<sub>4</sub> (aq) + Cu (s);",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Enthalpy tạo thành chuẩn của Zn(s) bằng 210 kJ/mol.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng trên là phản ứng tỏa nhiệt.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy của phản ứng tạo thành 3,84 g Cu là 12,6 kJ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong quá trình phản ứng, nhiệt độ của hỗn hợp tăng lên.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Enthalpy tạo thành chuẩn của Zn(s) bằng 0.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy của phản ứng tạo thành 3,84g Cu là<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de04_p2_q20",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Biến thiên enthalpy chuẩn quá trình “ H<sub>2</sub>O(s) → H<sub>2</sub>O(l)” là 6,020kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Quá trình tan chảy của nước đá là quá trình tỏa nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi cho viên nước đá vào cốc nước lỏng ấm, viên đá lại tan chảy dần vì nó lấy nhiệt từ nước lỏng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cốc nước lỏng bị lạnh dần trong quá trình viên nước đá tan chảy do sự mất nhiệt làm cho nước lỏng lạnh đi.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Biết rằng để làm cho nhiệt độ của 1 mol nước lỏng thay đổi 1°C cần một nhiệt lượng là 75,4J. Giả sử mỗi viên nước đá tương ứng với 1 mol nước, thì cần tối thiểu 6 viên nước đá tan chảy để có thể làm lạnh 500 gam nước lỏng ở 20°C xuống 0°C.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Quá trình tan chảy của nước đá là quá trình thu nhiệt vì có biến thiên enthalpy dương.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Nhiệt lượng mà 500 gam nước lỏng từ ở 20°C xuống 0°C  tỏa ra là:<br/>= 41,8889(kJ)<br/>Mỗi viên đá tan chảy hấp thụ một nhiệt lượng là 6,020 kJ<br/>⇒ Số viên nước đá tối thiểu cần là  viên.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de04_p2_q21",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Ở điều kiện chuẩn, 2 mol nhôm tác dụng vừa đủ với khí chlorine tạo muối aluminium chloride và giải phóng một lượng nhiệt 1390,81 kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phương trình nhiệt của phản ứng trên: 2Al(s) + 3Cl<sub>2</sub>(g)  → 2AlCl<sub>3</sub>(s); = 1390,81 kJ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là 1390,81 kJ/mol.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lượng nhiệt được giải phóng khi 10 gam AlCl<sub>3</sub> được tạo thành là 52,2 kJ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để tạo ra được 1,0 kJ nhiệt cần 0,043 gam Al phản ứng với khí chlorine.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. 2Al(s) + 3Cl<sub>2</sub>(g)  → 2AlCl<sub>3</sub>(s); = -1390,81 kJ.<br/>b. Sai.  Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là -1390,81 kJ/mol.<br/>c. Đúng.<br/>Cứ 2 mol Al phản ứng tạo thành 2 mol AlCl<sub>3</sub> thì giải phóng nhiệt lượng là 1390,81 kJ<br/>0,075 mol ---------------------------- x =<br/>d. Sai.<br/>Cứ 2 mol Al phản ứng thì giải phóng nhiệt lượng là 1390,81 kJ<br/>x =        ←                                  1 kJ<br/>⇒ m<sub>Al</sub> = 0,0388 gam",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de04_p2_q22",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau về tốc độ phản ứng hóa học là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ của phản ứng hóa học chỉ có thể được xác định theo sự thay đổi nồng độ chất phản ứng theo thời gian.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ của phản ứng hóa học không thể xác định được từ sự thay đổi nồng độ chất sản phẩm tạo thành theo thời gian.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dấu “ – ” trong biểu thức tính tốc độ trung bình theo biến thiên nồng độ chất phản ứng là để đảm bảo cho giá trị của tốc độ phản ứng không âm.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ trung bình của một phản ứng trong một khoảng thời gian nhất định được biểu thị bằng biến thiên nồng độ một chất phản ứng hoặc sản phẩm tạo thành chia cho khoảng thời gian đó.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Ngoài nồng độ có thể đưa ra khái niệm tốc dộ phản ứng theo sự thay đổi khối lượng, thể tích, số mo theo thời gian.<br/>b. Sai. Tốc độ của phản ứng hóa học có thể xác định được từ sự thay đổi nồng độ chất sản phẩm tạo thành theo thời gian.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de04_p3_q23",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Phân tử hemoglobin(Hb) trong máu nhận O<sub>2</sub> ở phổi để chuyển thành HbO<sub>2</sub>. Chất này theo máu tới các bộ phận cơ thể, tại đó HbO<sub>2</sub> lại chuyển thành Hb và O<sub>2</sub>( để cung cấp O<sub>2</sub> cho các hoạt động sinh hóa cần thiết trong cơ thể). Nếu trong không khí có lẫn carbon monoxide(CO), cơ thể nhanh chóng bị ngộ độc. Cho các số liệu thực nghiệm sau:<br/>Hb + O<sub>2</sub> → HbO<sub>2</sub>                      = -33,05kJ       (1)<br/>Hb + CO → HbCO                   = -47,28kJ       (2)<br/>HbO<sub>2</sub> + CO → HbCO + O<sub>2</sub>      = -14,23kJ       (3)<br/>HbCO + O<sub>2</sub> → HbO<sub>2</sub> + CO      = 14,23 kJ       (4)<br/>Liệt kê các phản ứng tỏa nhiệt theo số thứ tự tăng dần (ví dụ: 134, 24,...).",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de04_p3_q24",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các trường hợp sau:<br/>(1) Nước bay hơi.<br/>(2) Nước đóng băng.<br/>(3) Cồn cháy trong không khí.<br/>(4) Pha viên sủi vitamin C vào nước.<br/>(5) Phản ứng tạo gỉ sắt.<br/>Có bao nhiêu quá trình thu nhiệt trong các trường hợp trên?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de04_p3_q25",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Khi dẫn hơi nước qua than nóng đỏ thu được khí than, là hỗn hợp của carbonmonoxide và hydrogen:<br/>Tính sự biến đổi enthalpy chuẩn của phản ứng (1) theo đơn vị kJ từ những phương trình phản ứng hóa học và sự biến đổi enthalpy chuẩn:<br/>(Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "131",
        "explanation": "Đáp án: 131.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de04_p3_q26",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng đốt cháy butane sau:<br/>C<sub>4</sub>H<sub>10</sub>(g)  +  O<sub>2</sub>(g)   CO<sub>2</sub>(g)  +  H<sub>2</sub>O(g)(1)<br/>Biết năng lượng liên kết trong các hợp chất cho trong bảng sau:<br/><br/>Một bình gas chứa 12 kg butane có thể đun sôi bao nhiêu ấm nước (Làm tròn kết quả đến hàng đơn vị)? Giả thiết mỗi ấm nước chứa 2 L nước ở 25<sup>0</sup>C, nhiệt dung của nước là 4,2 J/g.K, có 40% nhiệt đốt cháy butane bị thất thoát ra ngoài môi trường.",
        "images": [],
        "correctAnswer": "918",
        "explanation": "Đáp án: 918.<br/>C<sub>4</sub>H<sub>10</sub>(g)  +  O<sub>2</sub>(g)   4CO<sub>2</sub>(g)  +  5H<sub>2</sub>O(g)<br/>3.E<sub>C-C</sub> + 10.E<sub>C-H</sub> + 6,5.E<sub>O=O</sub> – 4.2.E<sub>C=O</sub> – 5.2.E<sub>O-H</sub><br/>= 3.346 + 10.418 + 6,5.495 – 8.799 – 10.467 = - 2626,5 (kJ).<br/>Nhiệt cần đun 1 ấm nước: 2.10<sup>3</sup>.4,2.(100 – 25) = 630 000 (J) = 630 (kJ).<br/>Số ấm nước:  (ấm nước).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de04_p3_q27",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Tiến hành quá trình ozone hoá 100 g oxygen theo phản ứng sau:<br/>3O<sub>2</sub>(g) (oxygen)  2O<sub>3</sub>(g) (ozone)<br/>Hỗn hợp thu được có chứa 24% ozone về khối lượng, tiêu tốn 71,2 kJ. Nhiệt tạo thành  của ozone (kJ/mol) có giá trị là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "142",
        "explanation": "Đáp án: 142.<br/>Số mol của O<sub>3</sub> = ⇒  (kJ)<br/>=  (kJ)<br/>=>  = 142,4 (kJ/mol).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de04_p3_q28",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Lactic acid hay acid sữa là hợp chất hoá học đóng vai trò quan trọng trong nhiều quá trình sinh hoá, lần đầu tiên được phân tách vào năm 1780 bởi nhà hoá học Thuỵ Điền Carl Wilhelm Scheele. Lactic acid có công thức phân tử C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>, công A thức câu tạo CH<sub>3</sub>-CH(OH)-COOH.<br/>Khi vận động mạnh cơ thề không đủ cung cấp oxygen, thì cơ thề sẽ chuyền hoá glucose thành lactic acid từ các tế bào đề cung cấp năng lượng cho cơ thề (lactic acid tạo thành từ quá trình này sẽ gây mỏi cơ) theo phương trình sau:<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(aq)  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>(aq)  = -150 kJ<br/>Biết rằng cơ thề chỉ cung cấp 98% năng lượng nhờ oxygen, năng lượng còn lại nhờ vào sự chuyền hoá glucose thành lactic acid.<br/>Giả sử một người chạy bộ trong một thời gian tiêu tốn 300 kcal. Khối lượng lactic acid tạo ra từ quá trình chuyền hoá đó là bao nhiêu gam (biết 1 cal = 4,184 J)? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_3)_image32.jpeg"
        ],
        "correctAnswer": "30",
        "explanation": "Đáp án: 30.<br/>Tính khối lượng lactic acid tạo ra từ quá trình chạy bộ. Năng lượng cùa sự chuyển hoá glucose thành lactic acid trong quá trình chạy bộ chiếm 2%300 kcal = 6 kcal = 6 000 cal  25 104 J = 25,104 kJ.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> ;  =  -150 kJ<br/>0,335 mol           -25,104 kJ<br/>Khối lượng lactic acid được tạo ra trong quá trình chuyển hoá: 0,335.90 = 30,1 g.<br/>------------------------- HẾT -------------------------<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_gk2_de05",
    "code": "H10-GK2-05",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de05_p1_q1",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biểu thức đúng tính của phản ứng theo năng lượng liên kết của các chất là :",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de05_p1_q2",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình hóa học nào dưới đây biểu thị enthalpy tạo thành chuẩn của CO(g)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2C ((graphite)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C ((graphite) + ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C ((graphite)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C ((graphite)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de05_p1_q3",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thu vào càng nhiều nhiệt, biến thiên enthalpy càng âm",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng tỏa ra càng nhiều nhiệt, biến thiên enthaply càng dương",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Năng lượng của hệ chất tham gia trong phản ứng tỏa nhiệt cao hơn năng lượng của hệ sản phẩm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Năng lượng của hệ chất tham gia trong phản ứng thu nhiệt cao hơn năng lượng của hệ sản phẩm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de05_p1_q4",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học sau: 4FeS(s) + 7O<sub>2</sub>(g) → 2Fe<sub>2</sub>O<sub>3</sub>(s) + 4SO<sub>2</sub>(g). Biết nhiệt tạo thành ∆<sub>f</sub>H<sup>0</sup><sub>298</sub> của các chất FeS(s), Fe<sub>2</sub>O<sub>3</sub>(s) và SO<sub>2</sub>(g) lần lượt là –100,0 kJ/mol, –825,5 kJ/mol và –296,8 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+3105,6 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–3105,6 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+2438,2 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–2438,2 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de05_p1_q5",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học sau: N<sub>2</sub>(g) + O<sub>2</sub>(g) → 2NO(g). Cho biết năng lượng liên kết trong các phân tử O<sub>2</sub>, N<sub>2</sub> và NO lần lượt là 494 kJ/mol; 945 kJ/mol và 607 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+298 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–298 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+225 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–225 kJ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de05_p1_q6",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau: NH<sub>4</sub>NO<sub>3</sub>(s) + H<sub>2</sub>O(l) NH<sub>4</sub>NO<sub>3</sub>(aq)<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Biết nhiệt dung riêng của H<sub>2</sub>O là 4,2 J/g.K. Sau khi muối tan hết, nước trong bình có nhiệt độ là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "31,2<sup>o</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "28,1<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "21,9<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "18,8<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đáp án:  m  =",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "V  = 1000 g Q = mcT = 1000.4,2. T = 26.1000  T = 6,2 <sup>o</sup>C Sau khi hòa tan nước trong bình có nhiệt độ giảm so với ban đầu  25 – 6,2 = 18,8<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de05_p1_q7",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để xác định được mức độ phản ứng nhanh hay chậm người ta sử dụng khái niệm nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cân bằng hoá học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng một chiều",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thuận nghịch",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de05_p1_q8",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tốc độ phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "độ biến thiên nồng độ của một chất phản ứng trong một đơn vị thời gian",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "độ biến thiên nồng độ của một sản phẩm phản ứng trong một đơn vị thời gian",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "độ biến thiên nồng độ của một chất phản ứng hoặc sản phẩm phản ứng trong một đơn vị thời gian",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "độ biến thiên nồng độ của các chất phản ứng trong một đơn vị thời gian",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de05_p1_q9",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng: X   Y. Tại thời điểm t<sub>1</sub> nồng độ của chất X bằng C<sub>1</sub>, tại thời điểm t<sub>2</sub> (với t<sub>2</sub>>t<sub>1</sub>) nồng độ của chất X bằng C<sub>2</sub>. Tốc độ trung bình của phản ứng trong khoảng thời gian trên được tính theo biểu thức nào sau đây ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1212CCvtt-=- ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2121CCvtt-=- ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1221CCvtt-=- ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1221CCvtt-=-- ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de05_p1_q10",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng đơn giản xảy ra trong bình kín: 2NO(g) + O<sub>2</sub>(g) → 2NO<sub>2</sub>(g). Biểu thức tốc độ tức thời của phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de05_p1_q11",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tốc độ phản ứng không phụ thuộc yếu tố nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thời gian xảy ra phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Bề mặt tiếp xúc giữa các chất phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ các chất tham gia phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất xúc tác",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de05_p1_q12",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đối với các phản ứng có chất khí tham gia, khi tăng áp suất, tốc độ phản ứng tăng là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nồng độ của các chất khí tăng lên",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nồng độ của các chất khí giảm xuống",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chuyển động của các chất khí tăng lên",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nồng độ của các chất khí không thay đổi",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de05_p1_q13",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dùng không khí nén thổi vào lò cao để đốt cháy than cốc (trong sản xuất gang), yếu tố nào đã được sử dụng để làm tăng tốc độ phản ứng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ, áp suất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Diện tích tiếp xúc",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất xúc tác",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de05_p1_q14",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện 2 thí nghiệm theo hình vẽ sau:<br/>Nhận định nào sau đây là đúng?",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_1)_image10.emf"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "TN<sub>1</sub> có kết tủa xuất hiện trước",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "TN<sub>2</sub> có kết tủa xuất hiện trước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kết tủa xuất hiện đồng thời",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không có kết tủa xuất hiện",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de05_p1_q15",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đồ thị biểu diễn đường cong động học của phản ứng giữa oxygen và hydrogen tạo thành nước, O<sub>2</sub>(g) + 2H<sub>2</sub>(g)  2H<sub>2</sub>O(g). Đường cong nào của oxygen?",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_1)_image12.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_1)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đường cong số (1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đường cong số (2)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đường cong số (3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đường cong số (2) hoặc (3) đều đúng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de05_p1_q16",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện phản ứng sau trong bình kín. H<sub>2</sub>(g) + Br<sub>2</sub>(g)  2HBr(g)<br/>Lúc đầu nồng độ hơi Br<sub>2</sub> là 0,072 mol/L. Sau 2 phút, nồng độ hơi Br<sub>2</sub> còn lại là 0,048 mol/L. Tốc độ trung bình của phản ứng tính theo Br<sub>2</sub> trong khoảng thời gian trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "8.10<sup>-4</sup> mol/(L.s)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "6.10<sup>-4</sup> mol/(L.s)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4.10<sup>-4</sup> mol/(L.s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2.10<sup>-4</sup> mol/(L.s)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de05_p1_q17",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất xúc tác là chất",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "làm tăng tốc độ phản ứng và không bị mất đi sau phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "làm tăng tốc độ phản ứng và bị mất đi sau phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "làm giảm tốc độ phản ứng và không bị mất đi sau phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "làm giảm tốc độ phản ứng và bị mất đi sau phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de05_p1_q18",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiên liệu cháy ở trên vùng cao nhanh hơn khi cháy ở vùng thấp",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thực phẩm được bảo quản ở nhiệt độ thấp hơn sẽ giữ được lâu hơn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dùng men làm chất xúc tác để chuyển hoá cơm nếp thành rượu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu không cho nước dưa chua khi muối dưa thì dưa vẫn sẽ chua nhưng chậm hơn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de05_p2_q19",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau về tốc độ phản ứng hóa học là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ của phản ứng hóa học chỉ có thể được xác định theo sự thay đổi nồng độ chất phản ứng theo thời gian.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ của phản ứng hóa học không thể xác định được từ sự thay đổi nồng độ chất sản phẩm tạo thành theo thời gian.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dấu “ – ” trong biểu thức tính tốc độ trung bình theo biến thiên nồng độ chất phản ứng là để đảm bảo cho giá trị của tốc độ phản ứng không âm.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ trung bình của một phản ứng trong một khoảng thời gian nhất định được biểu thị bằng biến thiên nồng độ một chất phản ứng hoặc sản phẩm tạo thành chia cho khoảng thời gian đó.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Ngoài nồng độ có thể đưa ra khái niệm tốc dộ phản ứng theo sự thay đổi khối lượng, thể tích, số mo theo thời gian.<br/>b. Sai. Tốc độ của phản ứng hóa học có thể xác định được từ sự thay đổi nồng độ chất sản phẩm tạo thành theo thời gian.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de05_p2_q20",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng đơn giản xảy ra trong bình kín: 2NO (g) + O<sub>2</sub> (g)  2NO<sub>2</sub> (g).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo thời gian, nồng độ NO<sub>2</sub> tăng dần nên tốc độ phản ứng tăng dần.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Biểu thức tốc độ phản ứng: .",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi nồng độ O<sub>2</sub> tăng 4 lần và nồng độ NO giảm 2 lần thì tốc độ phản ứng tăng lần.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để tốc độ phản ứng tăng lên 27 lần thì nồng độ NO và O<sub>2</sub> đều phải tăng 3 lần.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Tốc độ phản ứng giảm dần theo thời gian.<br/>b. Sai. .<br/>c. Sai.  (không đổi).<br/>d. Đúng. .",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de05_p2_q21",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho 5 gam zinc (kẽm) viên vào cốc đựng 50 ml dung dịch H<sub>2</sub>SO<sub>4</sub> 4M ở nhiệt độ thường (25<sup>o</sup>C). Tốc độ phản ứng thay đổi khi",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "thay 5 gam zinc viên bằng 5 gam zinc bột.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "thay dung dịch H<sub>2</sub>SO<sub>4</sub> 4M bằng dung dịch H<sub>2</sub>SO<sub>4</sub> 2M.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "giảm nhiệt độ phản ứng từ 25<sup>o</sup>C đến 10<sup>o</sup>C.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dùng dung dịch H<sub>2</sub>SO<sub>4</sub> gấp đôi so với ban đầu.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Thể tích không ảnh hưởng đến tốc độ phản ứng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de05_p2_q22",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện phản ứng sau: CaCO<sub>3</sub> + 2HCl  CaCl<sub>2</sub> + CO<sub>2</sub> ↑ + H<sub>2</sub>O. Theo dõi thể tích CO<sub>2</sub> thoát ra theo thời gian, thu được đồ thị như sau (thể tích khí được đo ở áp suất khí quyển và nhiệt độ phòng).",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_1)_image21.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở thời điểm 90 giây, tốc độ phản ứng bằng 0.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ phản ứng giảm dần theo thời gian.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ trung bình của phản ứng trong khoảng thời gian từ thời điểm đầu đến 75 giây là 0,33 ml/s.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ trung bình của phản ứng trong các khoảng thời gian 15 giây là như nhau.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Theo thời gian, nồng độ các chất tham gia giảm dần nên tốc độ phản ứng giảm dần. Tốc độ trung bình của phản ứng trong 15 giây đầu sẽ lớn hơn tốc độ phản ứng trong 15 giây sau.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de05_p3_q23",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Tiến hành quá trình ozone hoá 100 g oxygen theo phản ứng sau:<br/>3O<sub>2</sub>(g) (oxygen)  2O<sub>3</sub>(g) (ozone)<br/>Hỗn hợp thu được có chứa 24% ozone về khối lượng, tiêu tốn 71,2 kJ. Nhiệt tạo thành  của ozone (kJ/mol) có giá trị là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "142",
        "explanation": "Đáp án: 142.<br/>Số mol của O<sub>3</sub> = ⇒  (kJ)<br/>=  (kJ)<br/>=>  = 142,4 (kJ/mol).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de05_p3_q24",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Lactic acid hay acid sữa là hợp chất hoá học đóng vai trò quan trọng trong nhiều quá trình sinh hoá, lần đầu tiên được phân tách vào năm 1780 bởi nhà hoá học Thuỵ Điền Carl Wilhelm Scheele. Lactic acid có công thức phân tử C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>, công A thức câu tạo CH<sub>3</sub>-CH(OH)-COOH.<br/>Khi vận động mạnh cơ thề không đủ cung cấp oxygen, thì cơ thề sẽ chuyền hoá glucose thành lactic acid từ các tế bào đề cung cấp năng lượng cho cơ thề (lactic acid tạo thành từ quá trình này sẽ gây mỏi cơ) theo phương trình sau:<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(aq)  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>(aq)  = -150 kJ<br/>Biết rằng cơ thề chỉ cung cấp 98% năng lượng nhờ oxygen, năng lượng còn lại nhờ vào sự chuyền hoá glucose thành lactic acid.<br/>Giả sử một người chạy bộ trong một thời gian tiêu tốn 300 kcal. Khối lượng lactic acid tạo ra từ quá trình chuyền hoá đó là bao nhiêu gam (biết 1 cal = 4,184 J)? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_5_(Đề_số_3)_image32.jpeg"
        ],
        "correctAnswer": "30",
        "explanation": "Đáp án: 30.<br/>Tính khối lượng lactic acid tạo ra từ quá trình chạy bộ. Năng lượng cùa sự chuyển hoá glucose thành lactic acid trong quá trình chạy bộ chiếm 2%300 kcal = 6 kcal = 6 000 cal  25 104 J = 25,104 kJ.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> ;  =  -150 kJ<br/>0,335 mol           -25,104 kJ<br/>Khối lượng lactic acid được tạo ra trong quá trình chuyển hoá: 0,335.90 = 30,1 g.<br/>------------------------- HẾT -------------------------<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de05_p3_q25",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các yếu tố sau: (a) Nồng độ chất, (b) Áp suất, (c) Nhiệt độ, (d) Diện tích tiếp xúc, (e) Chất xúc tác. Có bao nhiêu yếu tố ảnh hưởng đến tốc độ phản ứng?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de05_p3_q26",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng hóa học sau:<br/>(a) Fe<sub>3</sub>O<sub>4</sub>(s)   +  4CO(g)  3Fe(s) + 4CO<sub>2</sub>(g)<br/>(b) 2NO<sub>2</sub>(g)  N<sub>2</sub>O<sub>4</sub>(g)<br/>(c) H<sub>2</sub>(g) + Cl<sub>2</sub>(g)  2HCl(g)<br/>(d) CaO(s) + SiO<sub>2</sub>(s) CaSiO<sub>3</sub>(s)<br/>Liệt kê cấc phản ứng thay đổi tốc độ khi áp suất thay đổi theo dãy số thứ tự tăng dần (Ví dụ: 1234, 24,…).",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de05_p3_q27",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng: 2CO(g)  CO<sub>2</sub>(g) + C(s). Để tốc độ phản ứng tăng lên 16 lần thì nồng độ của carbon monoxide (CO) phải tăng lên bao nhiêu lần?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>Ta có: v<sub>2</sub> = 4v<sub>1</sub>  ky<sup>2</sup> = 16kx<sup>2</sup>  y = 4x<br/>Vậy nồng độ của CO tăng lên 2 lần.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de05_p3_q28",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho chất xúc tác MnO<sub>2</sub> vào 100 mL dung dịch H<sub>2</sub>O<sub>2</sub>, sau 60 giây thu được 0,0015 mol khí O<sub>2</sub>. Tốc độ trung bình của phản ứng (tính theo H<sub>2</sub>O<sub>2</sub>) trong 60 giây là a.10<sup>–4</sup> M/s?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.<br/>H<sub>2</sub>O<sub>2</sub> → H<sub>2</sub>O + ½ O<sub>2</sub><br/>0,0015 mol<br/>Số mol H<sub>2</sub>O<sub>2</sub>  = 2 x 0,0015 = 0,003 mol.<br/>Nồng độ mol của H<sub>2</sub>O<sub>2</sub> phản ứng:<br/>Tốc độ trung bình của phản ứng (tính theo H<sub>2</sub>O<sub>2</sub>) trong 60 giây:  .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_gk2_de06",
    "code": "H10-GK2-06",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de06_p1_q1",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dùng không khí nén thổi vào lò cao để đốt cháy than cốc (trong sản xuất gang), yếu tố nào đã được sử dụng để làm tăng tốc độ phản ứng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ, áp suất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Diện tích tiếp xúc",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất xúc tác",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de06_p1_q2",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện 2 thí nghiệm theo hình vẽ sau:<br/>Nhận định nào sau đây là đúng?",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_1)_image10.emf"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "TN<sub>1</sub> có kết tủa xuất hiện trước",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "TN<sub>2</sub> có kết tủa xuất hiện trước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kết tủa xuất hiện đồng thời",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không có kết tủa xuất hiện",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de06_p1_q3",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đồ thị biểu diễn đường cong động học của phản ứng giữa oxygen và hydrogen tạo thành nước, O<sub>2</sub>(g) + 2H<sub>2</sub>(g)  2H<sub>2</sub>O(g). Đường cong nào của oxygen?",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_1)_image12.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_1)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đường cong số (1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đường cong số (2)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đường cong số (3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đường cong số (2) hoặc (3) đều đúng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de06_p1_q4",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện phản ứng sau trong bình kín. H<sub>2</sub>(g) + Br<sub>2</sub>(g)  2HBr(g)<br/>Lúc đầu nồng độ hơi Br<sub>2</sub> là 0,072 mol/L. Sau 2 phút, nồng độ hơi Br<sub>2</sub> còn lại là 0,048 mol/L. Tốc độ trung bình của phản ứng tính theo Br<sub>2</sub> trong khoảng thời gian trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "8.10<sup>-4</sup> mol/(L.s)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "6.10<sup>-4</sup> mol/(L.s)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4.10<sup>-4</sup> mol/(L.s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2.10<sup>-4</sup> mol/(L.s)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de06_p1_q5",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất xúc tác là chất",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "làm tăng tốc độ phản ứng và không bị mất đi sau phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "làm tăng tốc độ phản ứng và bị mất đi sau phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "làm giảm tốc độ phản ứng và không bị mất đi sau phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "làm giảm tốc độ phản ứng và bị mất đi sau phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de06_p1_q6",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiên liệu cháy ở trên vùng cao nhanh hơn khi cháy ở vùng thấp",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thực phẩm được bảo quản ở nhiệt độ thấp hơn sẽ giữ được lâu hơn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dùng men làm chất xúc tác để chuyển hoá cơm nếp thành rượu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu không cho nước dưa chua khi muối dưa thì dưa vẫn sẽ chua nhưng chậm hơn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de06_p1_q7",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho bột Fe vào dung dịch HCl loãng. Sau đó đun nóng hỗn hợp này. Phát biểu sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khí H<sub>2</sub> thoát ra nhanh hơn",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Bột Fe tan nhanh hơn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lượng muối thu được nhiều hơn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nồng độ HCl giảm nhanh hơn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de06_p1_q8",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi tăng nhiệt độ thêm 10 <sup>o</sup>C thì tốc độ của một phản ứng tăng 2 lần. Hệ số nhiệt độ Van’t Hoff của phản ứng đó là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "10",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de06_p1_q9",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình hoá học của phản ứng: CHCl<sub>3</sub>(g) + Cl<sub>2</sub>(g)  CCl<sub>3</sub>(g) + HCl(g). Khi nồng độ của CHCl<sub>3</sub> giảm 4 lần, nồng độ Cl<sub>2</sub> giữ nguyên thì tốc độ phản ứng sẽ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tăng gấp đôi",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "giảm một nửa",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tăng 4 lần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "giảm 4 lần",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de06_p1_q10",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho cùng một lượng aluminum (nhôm) vào cốc đựng dung dịch axit HCl 0,1M, tốc độ phản ứng sẽ lớn nhất khi dùng nhôm ở dạng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dạng viên nhỏ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dạng bột mịn, khuấy đều",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dạng tấm mỏng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dạng nhôm dây",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de06_p1_q11",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Yếu tố nào dưới đây được sử dụng để làm tăng tốc độ phản ứng khi rắc men vào tinh bột đã được nấu chín để ủ ancol (rượu)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất xúc tác",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "áp suất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhiệt độ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de06_p1_q12",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho ba mẫu đá vôi (100% CaCO<sub>3</sub>) có cùng khối lượng: mẫu 1 dạng khối, mẫu 2 dạng viên nhỏ, mẫu 3 dạng bột mịn vào ba cốc đựng cùng thể tích dung dịch HCl (dư, cùng nồng độ, ở điều kiện thường). Thời gian để đá vôi tan hết trong ba cốc tương ứng là t<sub>1</sub>, t<sub>2</sub>, t<sub>3</sub> giây. So sánh nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de06_p1_q13",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đại lượng đặc trưng cho độ biến thiên nồng độ của một trong các chất phản ứng hoặc sản phẩm phản ứng trong một đơn vị thời gian gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tốc độ phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cân bằng hoá học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tốc độ tức thời",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "quá trình hoá học",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de06_p1_q14",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng xảy ra trong pha khí như sau: H<sub>2</sub> + Cl<sub>2</sub>  2HCl. Biểu thức tốc độ trung bình của phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de06_p1_q15",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi đốt than trong lò, đậy nắp lò sẽ giữ than cháy được lâu hơn. Yếu tố ảnh hưởng đến tốc độ phản ứng được vận dụng trong ví dụ trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhiệt độ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nồng độ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chất xúc tác",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "diện tích bề mặt tiếp xúc",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de06_p1_q16",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có phương trình phản ứng: . Tốc độ phản ứng tại một thời điểm được tính bằng biểu thức: v = k[X]<sup>2</sup>.[Y]. Hằng số tốc độ k phụ thuộc vào yếu tố nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nồng độ của chất ban đầu",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nồng độ của chất sản phẩm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhiệt độ của phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thời gian xảy ra phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de06_p1_q17",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Yếu tố nào sau đây không ảnh hưởng đến tốc độ của phản ứng chỉ có chất rắn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Áp suất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Diện tích tiếp xúc",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất xúc tác",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de06_p1_q18",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Yếu tố nào sau đây làm giảm tốc độ phản ứng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sử dụng enzyme cho phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thêm chất ức chế vào hỗn hợp chất tham gia",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng nồng độ chất tham gia",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nghiền chất tham gia dạng khối thành bột",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de06_p2_q19",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện phản ứng sau: CaCO<sub>3</sub> + 2HCl  CaCl<sub>2</sub> + CO<sub>2</sub> ↑ + H<sub>2</sub>O. Theo dõi thể tích CO<sub>2</sub> thoát ra theo thời gian, thu được đồ thị như sau (thể tích khí được đo ở áp suất khí quyển và nhiệt độ phòng).",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_1)_image21.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở thời điểm 90 giây, tốc độ phản ứng bằng 0.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ phản ứng giảm dần theo thời gian.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ trung bình của phản ứng trong khoảng thời gian từ thời điểm đầu đến 75 giây là 0,33 ml/s.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ trung bình của phản ứng trong các khoảng thời gian 15 giây là như nhau.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Theo thời gian, nồng độ các chất tham gia giảm dần nên tốc độ phản ứng giảm dần. Tốc độ trung bình của phản ứng trong 15 giây đầu sẽ lớn hơn tốc độ phản ứng trong 15 giây sau.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de06_p2_q20",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau về tốc độ phản ứng là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ của phản ứng hóa học là đại lượng mô tả mức độ nhanh hay chậm của chất phản ứng hoặc sản phẩm tạo thành.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ của phản ứng hóa học là hiệu số nồng độ của một chất trong hỗn hợp phản ứng tại hai thời điểm khác nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ của phản ứng hóa học có thể có giá trị âm hoặc dương.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong cùng một phản ứng hóa học, tốc độ tạo thành của các chất sản phẩm khác nhau là khác nhau, tùy thuộc vào hệ số cân bằng của chúng trong phương trình hóa học.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Tốc độ phản ứng của một phản ứng hóa học là đại lượng đặc trưng cho sự thay đổi nồng độ của các chất phản ứng hoặc sản phẩm phản ứng trong một đơn vị thời gian.<br/>c. Sai. Tốc độ phản ứng có giá trị dương.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de06_p2_q21",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Trong quy trình sản xuất sulfuric acid, xảy ra phản ứng hoá học:<br/>2SO<sub>2</sub>(g) + O<sub>2</sub>(g)  2SO<sub>3</sub>(g)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Xúc tác V<sub>2</sub>O<sub>5</sub> giúp tăng hiệu suất phản ứng chuyển hoá SO<sub>2</sub> thành SO<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi tăng nhiệt độ của phản ứng thì tốc độ phản ứng giảm xuống.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong quá trình phản ứng thì nồng độ SO<sub>2</sub> tăng dần còn nồng độ SO<sub>3</sub> giảm dần.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi tăng áp suất khí SO<sub>2</sub> hoặc O<sub>2</sub>thì tốc độ phản ứng đều tăng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Xúc tác làm tăng tốc độ phản ứng, không làm dịch chuyển cân bằng, nên hiệu suất phản ứng không đổi.<br/>b. Sai. Tăng nhiệt độ thì tốc độ phản ứng tăng.<br/>c. Sai. Nồng độ SO<sub>2</sub> giảm, SO<sub>3</sub> tăng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de06_p2_q22",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Nghiên cứu ảnh hưởng của diện tích bề mặt đến tốc độ phản ứng:<br/>CaCO<sub>3</sub>(s) + 2HCl(aq)  CaCl<sub>2</sub>(aq) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l)<br/>Chuẩn bị: 2 bình tam giác, dung dịch HCl 0,5 M, đá vôi dạng viên, đá vôi đập nhỏ.<br/>Tiến hành:<br/>- Cho cùng một lượng (khoảng 2 g) đá vôi dạng viên vào bình tam giác (1) và đá vôi đập nhỏ vào bình tam giác (2).<br/>- Rót 20 mL dung dịch HCl 0,5 M vào mỗi bình.",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_2)_image17.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_2)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng trong bình tam giác (1) có tốc độ thoát khí nhanh hơn.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đá vôi dạng viên có tổng diện tích bề mặt nhỏ hơn đá vôi dạng đập nhỏ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu lấy cùng một lượng đá vôi thì đá vôi dạng đập viên tan nhanh hơn đá vôi dạng đập nhỏ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi tăng diện tích bề mặt tiếp xúc, số va chạm giữa các chất đầu tăng lên, số va chạm hiệu quả cũng tăng theo, dẫn đến tốc độ phản ứng tăng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Phản ứng trong bình tam giác (2) có tốc độ thoát khí nhanh hơn.<br/>b. Đúng.<br/>c. Sai. Dạng đập nhỏ tan nhanh hơn dạng viên.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de06_p3_q23",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng: 2CO(g)  CO<sub>2</sub>(g) + C(s). Để tốc độ phản ứng tăng lên 16 lần thì nồng độ của carbon monoxide (CO) phải tăng lên bao nhiêu lần?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>Ta có: v<sub>2</sub> = 4v<sub>1</sub>  ky<sup>2</sup> = 16kx<sup>2</sup>  y = 4x<br/>Vậy nồng độ của CO tăng lên 2 lần.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de06_p3_q24",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho chất xúc tác MnO<sub>2</sub> vào 100 mL dung dịch H<sub>2</sub>O<sub>2</sub>, sau 60 giây thu được 0,0015 mol khí O<sub>2</sub>. Tốc độ trung bình của phản ứng (tính theo H<sub>2</sub>O<sub>2</sub>) trong 60 giây là a.10<sup>–4</sup> M/s?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.<br/>H<sub>2</sub>O<sub>2</sub> → H<sub>2</sub>O + ½ O<sub>2</sub><br/>0,0015 mol<br/>Số mol H<sub>2</sub>O<sub>2</sub>  = 2 x 0,0015 = 0,003 mol.<br/>Nồng độ mol của H<sub>2</sub>O<sub>2</sub> phản ứng:<br/>Tốc độ trung bình của phản ứng (tính theo H<sub>2</sub>O<sub>2</sub>) trong 60 giây:  .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de06_p3_q25",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Phản ứng tạo NO từ NH<sub>3</sub> là một giai đoạn trung gian trong quá trình sản xuất nitric acid:<br/>4NH<sub>3</sub>(g)  +  5O<sub>2</sub>(g)  4NO(g) + 6H<sub>2</sub>O(g)<br/>Có các biện pháp sau: (1) Tăng áp suất, (2) Giảm nồng độ các chất tham gia phản ứng, (3) Tăng nhiệt độ, (4) Sử dụng chất xúc tác Pt.<br/>Có bao nhiêu biện pháp làm tăng tốc độ phản ứng trên?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de06_p3_q26",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Ở vùng đồng bằng (độ cao gần mực nước biển), nước sôi ở 100 <sup>o</sup>C. Trên đỉnh núi Fansipan (cao 3200m so với mực nước biển), nước sôi ở 90 <sup>o</sup>C. Khi luộc chín một miếng thịt trong nước sôi, ở vùng đồng bằng mất 3,2 phút (min), trong khi trên đỉnh núi Pansipan mất 3,8 phút. Nếu luộc miếng thịt trên đỉnh núi cao hơn, tại đó nước sôi ở 80 <sup>o</sup>C thì mất bao nhiêu phút để luộc chín miếng thịt (Làm tròn kết quả đến hàng phần mười)?",
        "images": [],
        "correctAnswer": "4,5",
        "explanation": "Đáp án: 4,5.<br/>Tốc độ phản ứng tỉ lệ nghịch với thời gian ⇒ Khi giảm từ 100<sup>o</sup>C xuống 90<sup>o</sup>C (10<sup>o</sup>) thì thời gian tăng từ 3,2 phút đến 3,8 phút ⇒ hệ số nhiệt độ:<br/>Nếu luộc miếng thịt ở 80<sup>o</sup>C thì thời gian cần là 3,8.1,1875 = 4,5 (min)<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de06_p3_q27",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Khi ninh (hầm) thịt cá, người ta sử dụng những cách sau: (1) dùng nồi áp suất, (2) chặt nhỏ thịt cá, (2) cho thêm muối vào, (4) nấu cùng nước lạnh.<br/>Liệt kê các cách làm cho thịt cá nhanh chín hơn theo dãy số thứ tự tăng dần (Ví dụ: 124, 23,…).",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de06_p3_q28",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng hoá học sau:<br/>(1) FeCl<sub>3</sub> + 3NaOH  Fe(OH)<sub>3</sub> + 3NaCl.<br/>(2) 3Fe + 2O<sub>2</sub> Fe<sub>3</sub>O<sub>4</sub>.<br/>(3) 4K + O<sub>2</sub> 2K<sub>2</sub>O.<br/>(4) CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH  CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O.<br/>Có bao nhiêu phản ứng xảy ra nhanh ở nhiệt độ thường?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_gk2_de07",
    "code": "H10-GK2-07",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de07_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đại lượng đặc trưng cho độ biến thiên nồng độ của một trong các chất phản ứng hoặc sản phẩm phản ứng trong một đơn vị thời gian gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tốc độ phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cân bằng hoá học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tốc độ tức thời",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "quá trình hoá học",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de07_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng xảy ra trong pha khí như sau: H<sub>2</sub> + Cl<sub>2</sub>  2HCl. Biểu thức tốc độ trung bình của phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de07_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi đốt than trong lò, đậy nắp lò sẽ giữ than cháy được lâu hơn. Yếu tố ảnh hưởng đến tốc độ phản ứng được vận dụng trong ví dụ trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhiệt độ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nồng độ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chất xúc tác",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "diện tích bề mặt tiếp xúc",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de07_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có phương trình phản ứng: . Tốc độ phản ứng tại một thời điểm được tính bằng biểu thức: v = k[X]<sup>2</sup>.[Y]. Hằng số tốc độ k phụ thuộc vào yếu tố nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nồng độ của chất ban đầu",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nồng độ của chất sản phẩm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhiệt độ của phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thời gian xảy ra phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Yếu tố nào sau đây không ảnh hưởng đến tốc độ của phản ứng chỉ có chất rắn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Áp suất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Diện tích tiếp xúc",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất xúc tác",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de07_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Yếu tố nào sau đây làm giảm tốc độ phản ứng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sử dụng enzyme cho phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thêm chất ức chế vào hỗn hợp chất tham gia",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng nồng độ chất tham gia",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nghiền chất tham gia dạng khối thành bột",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de07_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho một lượng xác định chất phản ứng vào bình để cho phản ứng hoá học xảy ra, tốc độ phản ứng sẽ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "không đổi cho đến khi kết thúc",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tăng dần cho đến khi kết thúc",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chậm dần cho đến khi kết thúc",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tuân theo định luật tác dụng khối lượng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de07_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biểu đồ nào sau đây không biểu diễn sự phụ thuộc nồng độ chất tham gia với thời gian?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de07_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đối với phản ứng có chất khí tham gia thì nhận định nào dưới đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi áp suất tăng thì tốc độ phản ứng giảm",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi áp suất tăng thì tốc độ phản ứng tăng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi áp suất giảm thì tốc độ phản ứng tăng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Áp suất không ảnh hưởng đến tốc độ phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de07_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cách nào sau đây sẽ làm củ khoai tây chín nhanh nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Luộc trong nước sôi",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hấp cách thuỷ trong nồi cơm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nướng ở 180°",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hấp trên nồi hơi",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de07_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng nào dưới đây thể hiện ảnh hưởng của nhiệt độ đến tốc độ phản ứng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thanh củi được chẻ nhỏ hơn thì sẽ cháy nhanh hơn",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Quạt gió vào bếp than để thanh cháy nhanh hơn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thức ăn lâu bị ôi thiu hơn khi để trong tủ lạnh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các enzyme làm thúc đẩy các phản ứng sinh hóa trong cơ thể",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de07_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho một viên đá vôi nặng 1 gam vào dung dịch HCl 2 M, ở nhiệt độ 25 ℃. Biến đổi nào sau đây không làm bọt khí thoát ra mạnh hơn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tăng thể tích dung dịch HCl lên gấp đôi",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thay viên đá vôi bằng 1 gam bột đá vôi",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thay dung dịch HCl 2 M bằng dung dịch HCl 4 M",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tăng nhiệt độ lên 50<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de07_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở cùng một nồng độ và khối lượng của Al là như nhau, hãy cho biết phản ứng nào dưới đây có tốc độ phản ứng xảy ra chậm nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Al(s) + NaOH(aq) ở 25<sup>o</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Al(s) + NaOH(aq) ở 30<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Al(s) + NaOH(aq) ở 40<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Al(s) + NaOH(aq) ở 50<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de07_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đối với phản ứng: A + 3B  2C, phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ tiêu hao chất B bằng 3/2 tốc độ tạo thành chất",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ tiêu hao chất B bằng 2/3 tốc độ tạo thành chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ tiêu hao chất B bằng 3 tốc độ tạo thành chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ tiêu hao chất B bằng 1/3 tốc độ tạo thành chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de07_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng thủy phân tinh bột có xúc tác là HCl. Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCl không tác dụng với tinh bột trong quá trình phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nếu nồng độ HCl tăng, tốc độ phản ứng tăng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi không có HCl, phản ứng thủy phân tinh bột vẫn xảy ra nhưng tốc độ chậm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nồng độ HCl không đổi sau phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de07_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một phản ứng có hệ số nhiệt độ Van’t Hoff là 2. Hỏi tốc độ của phản ứng đó tăng lên bao nhiêu lần khi nâng nhiệt độ lên từ 20<sup>o</sup>C đến 60<sup>o</sup>C?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2 lần",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "8 lần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "16 lần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "32 lần",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de07_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét phản ứng phân hủy N<sub>2</sub>O<sub>5</sub> trong dung môi CCl<sub>4</sub> ở 45<sup>o</sup>C:<br/>N<sub>2</sub>O<sub>5</sub>→ N<sub>2</sub>O<sub>4</sub> +  O<sub>2</sub><br/>Ban đầu nồng độ của N<sub>2</sub>O<sub>5</sub>là 2,33M, sau 184 giây nồng độ của N<sub>2</sub>O<sub>5</sub> là 2,08M. Tốc độ trung bình của phản ứng tính theo N<sub>2</sub>O<sub>5</sub>là",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_2)_image12.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2,72.10<sup>−3</sup> mol/(L.s)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1,36.10<sup>−3</sup> mol/(L.s)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "6,80.10<sup>−3</sup> mol/(L.s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "6,80.10<sup>−4</sup> mol/(L.s)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de07_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét phản ứng sau: 2ClO<sub>2</sub>  + 2NaOH  NaClO<sub>3</sub>  + NaClO<sub>2</sub> + H<sub>2</sub>O<br/>Tốc độ phản ứng được viết như sau: . Thực hiện phản ứng với những nồng độ chất đầu khác nhau và đo tốc độ phản ứng tương ứng thu được kết quả trong bảng sau:<br/><br/>Giá trị của x và y trong biểu thức tốc độ phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 và 2",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2 và 1",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2 và 3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3 và 2",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án: B.<br/>2.10<sup>-4</sup> = k.0,01<sup>x</sup>.0,01<sup>y</sup>  (1)<br/>8.10<sup>-4</sup> = k.0,02<sup>x</sup>.0,01<sup>y</sup>  (2)<br/>4.10<sup>-4</sup> = k.0,01<sup>x</sup>.0,02<sup>y</sup> (3)<br/>Lấy (2)/(1) ⟹ 4 = 2<sup>x</sup> ⟹ x = 2.<br/>Lấy (3)/(1) ⟹ 2 = 2<sup>y</sup> ⟹ y = 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de07_p2_q19",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Nghiên cứu ảnh hưởng của diện tích bề mặt đến tốc độ phản ứng:<br/>CaCO<sub>3</sub>(s) + 2HCl(aq)  CaCl<sub>2</sub>(aq) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l)<br/>Chuẩn bị: 2 bình tam giác, dung dịch HCl 0,5 M, đá vôi dạng viên, đá vôi đập nhỏ.<br/>Tiến hành:<br/>- Cho cùng một lượng (khoảng 2 g) đá vôi dạng viên vào bình tam giác (1) và đá vôi đập nhỏ vào bình tam giác (2).<br/>- Rót 20 mL dung dịch HCl 0,5 M vào mỗi bình.",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_2)_image17.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_2)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng trong bình tam giác (1) có tốc độ thoát khí nhanh hơn.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đá vôi dạng viên có tổng diện tích bề mặt nhỏ hơn đá vôi dạng đập nhỏ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu lấy cùng một lượng đá vôi thì đá vôi dạng đập viên tan nhanh hơn đá vôi dạng đập nhỏ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi tăng diện tích bề mặt tiếp xúc, số va chạm giữa các chất đầu tăng lên, số va chạm hiệu quả cũng tăng theo, dẫn đến tốc độ phản ứng tăng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Phản ứng trong bình tam giác (2) có tốc độ thoát khí nhanh hơn.<br/>b. Đúng.<br/>c. Sai. Dạng đập nhỏ tan nhanh hơn dạng viên.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de07_p2_q20",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng đơn giản: aA + bB  cD + dD. Tốc độ tức thời của phản ứng được tính theo biểu thức: v = k.C<sub>A</sub><sup>a</sup>.C<sub>B</sub><sup>b</sup> (trong đó C<sub>A</sub>, C<sub>B</sub> là nồng độ của A và B tại thời điểm đang xét; v là tốc độ phản ứng tại thời điểm đang xét).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hằng số tốc độ phản ứng k là tốc độ của phản ứng khi nồng độ của tất cả các chất A, B đều bằng nhau và bằng 1M.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hằng số tốc độ phản ứng k phụ thuộc vào nồng độ phản ứng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Giá trị v luôn không đổi trong thời gian phản ứng xảy ra.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở nhiệt độ không đổi, tốc độ phản ứng tỉ lệ thuận với tích số nồng độ các chất phản ứng hoặc sản phẩm với số mũ thích hợp.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Phụ thuộc vào nhiệt độ.<br/>c. Sai. Có thể thay đổi.<br/>d. Sai. Tính theo chất phản ứng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de07_p2_q21",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Xét phản ứng: H<sub>2</sub> + Cl<sub>2</sub> → 2HCl.<br/>Nghiên cứu sự thay đổi nồng độ một chất trong phản ứng theo thời gian, thu được đồ thị sau:",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image5.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto2.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đồ thị này mô tả sự thay đổi nồng độ theo thời gian của H<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tại thời điểm 1 phút nồng độ chất đó là 0,2 mol/L.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đơn vị tốc độ phản ứng trong trường hợp này là mol.(L.min)<sup>–1</sup>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Biểu thức tốc độ trung bình của phản ứng trên là .",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Nồng độ HCl.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de07_p2_q22",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng hóa học sau: H<sub>2</sub>O<sub>2</sub>  H<sub>2</sub>O  +  O<sub>2</sub><br/>Biết rằng tốc độ của phản ứng này tuân theo biểu thức của định luật tác dụng khối lượng.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo thời gian, nồng độ H<sub>2</sub>O<sub>2</sub> giảm dần nên tốc độ phản ứng giảm dần.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Biểu thức tốc độ phản ứng:",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ phản ứng tăng lên 2 lần khi nồng độ H<sub>2</sub>O<sub>2</sub> tăng lên 2 lần.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ phản ứng giảm xuống 3 lần khi nồng độ O<sub>2</sub> tăng lên 9 lần và giữ nguyên nồng độ của H<sub>2</sub>O.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Tốc độ tức thời không tính cho sản phẩm.<br/>c. Đúng.<br/>d. Sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de07_p3_q23",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Khi ninh (hầm) thịt cá, người ta sử dụng những cách sau: (1) dùng nồi áp suất, (2) chặt nhỏ thịt cá, (2) cho thêm muối vào, (4) nấu cùng nước lạnh.<br/>Liệt kê các cách làm cho thịt cá nhanh chín hơn theo dãy số thứ tự tăng dần (Ví dụ: 124, 23,…).",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de07_p3_q24",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng hoá học sau:<br/>(1) FeCl<sub>3</sub> + 3NaOH  Fe(OH)<sub>3</sub> + 3NaCl.<br/>(2) 3Fe + 2O<sub>2</sub> Fe<sub>3</sub>O<sub>4</sub>.<br/>(3) 4K + O<sub>2</sub> 2K<sub>2</sub>O.<br/>(4) CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH  CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O.<br/>Có bao nhiêu phản ứng xảy ra nhanh ở nhiệt độ thường?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de07_p3_q25",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng hóa học đơn giản: H<sub>2</sub>(g) + I<sub>2</sub>(g) → 2HI(g).<br/>Công thức tính tốc độ của phản ứng thuận trên là v = k.[H<sub>2</sub>].[I<sub>2</sub>]. Tốc độ của phản ứng thuận trên sẽ tăng bao nhiêu lần khi tăng áp suất chung của hệ lên 3 lần?",
        "images": [],
        "correctAnswer": "9",
        "explanation": "Đáp án: 9.<br/>Khi tăng áp suất chung của hệ lên 3 lần, đồng nghĩa với nồng độ chung của hệ tăng lên 3 lần.<br/>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de07_p3_q26",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Phương trình tổng hợp ammonia (NH<sub>3</sub>): N<sub>2</sub>(g) + 3H<sub>2</sub>(g) → 2NH<sub>3</sub>(g). Nếu tốc độ tạo thành NH<sub>3</sub> là 0,345 M/s thì tốc độ tiêu hao của chất phản ứng H<sub>2</sub> là bao nhiêu M/s (Làm tròn kết quả đến hàng phần trăm)?",
        "images": [],
        "correctAnswer": "0,52",
        "explanation": "Đáp án: 0,52.<br/>Ta có:    M/s.<br/>Dùng dữ kiện dưới đây trả lời cho câu hỏi 5 và 6.<br/>Khi nhiệt độ phòng là 25<sup>o</sup>C, cho 10g đá vôi (dạng viên) vào cốc đựng 100g dung dịch HCl loãng và nhanh chóng cho lên một cân điện tử. Đọc giá trị khối lượng cốc tại thời điểm ban đầu và sau 1 phút. Lặp lại thí nghiệm khi nhiệt độ phòng là 35<sup>0</sup>C. Kết quả thí nghiệm được ghi lại trong bảng sau:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de07_p3_q27",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Tính hệ số nhiệt độ của phản ứng. (Làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "2,1",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de07_p3_q28",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Giả sử ban đầu cốc chứa dung dịch HCl và đá vôi có khối lượng 235,40g. Thực hiện thí nghiệm ở 45<sup>0</sup>C. Hỏi sau 1 phút, khối lượng cốc là bao nhiêu? (Bỏ qua khối lượng nước bay hơi). (Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "234",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_gk2_de08",
    "code": "H10-GK2-08",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de08_p1_q1",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở cùng một nồng độ và khối lượng của Al là như nhau, hãy cho biết phản ứng nào dưới đây có tốc độ phản ứng xảy ra chậm nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Al(s) + NaOH(aq) ở 25<sup>o</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Al(s) + NaOH(aq) ở 30<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Al(s) + NaOH(aq) ở 40<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Al(s) + NaOH(aq) ở 50<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de08_p1_q2",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đối với phản ứng: A + 3B  2C, phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ tiêu hao chất B bằng 3/2 tốc độ tạo thành chất",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ tiêu hao chất B bằng 2/3 tốc độ tạo thành chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ tiêu hao chất B bằng 3 tốc độ tạo thành chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ tiêu hao chất B bằng 1/3 tốc độ tạo thành chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de08_p1_q3",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng thủy phân tinh bột có xúc tác là HCl. Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCl không tác dụng với tinh bột trong quá trình phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nếu nồng độ HCl tăng, tốc độ phản ứng tăng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi không có HCl, phản ứng thủy phân tinh bột vẫn xảy ra nhưng tốc độ chậm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nồng độ HCl không đổi sau phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de08_p1_q4",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một phản ứng có hệ số nhiệt độ Van’t Hoff là 2. Hỏi tốc độ của phản ứng đó tăng lên bao nhiêu lần khi nâng nhiệt độ lên từ 20<sup>o</sup>C đến 60<sup>o</sup>C?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2 lần",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "8 lần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "16 lần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "32 lần",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de08_p1_q5",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét phản ứng phân hủy N<sub>2</sub>O<sub>5</sub> trong dung môi CCl<sub>4</sub> ở 45<sup>o</sup>C:<br/>N<sub>2</sub>O<sub>5</sub>→ N<sub>2</sub>O<sub>4</sub> +  O<sub>2</sub><br/>Ban đầu nồng độ của N<sub>2</sub>O<sub>5</sub>là 2,33M, sau 184 giây nồng độ của N<sub>2</sub>O<sub>5</sub> là 2,08M. Tốc độ trung bình của phản ứng tính theo N<sub>2</sub>O<sub>5</sub>là",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_2)_image12.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2,72.10<sup>−3</sup> mol/(L.s)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1,36.10<sup>−3</sup> mol/(L.s)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "6,80.10<sup>−3</sup> mol/(L.s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "6,80.10<sup>−4</sup> mol/(L.s)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de08_p1_q6",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét phản ứng sau: 2ClO<sub>2</sub>  + 2NaOH  NaClO<sub>3</sub>  + NaClO<sub>2</sub> + H<sub>2</sub>O<br/>Tốc độ phản ứng được viết như sau: . Thực hiện phản ứng với những nồng độ chất đầu khác nhau và đo tốc độ phản ứng tương ứng thu được kết quả trong bảng sau:<br/><br/>Giá trị của x và y trong biểu thức tốc độ phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 và 2",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2 và 1",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2 và 3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3 và 2",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án: B.<br/>2.10<sup>-4</sup> = k.0,01<sup>x</sup>.0,01<sup>y</sup>  (1)<br/>8.10<sup>-4</sup> = k.0,02<sup>x</sup>.0,01<sup>y</sup>  (2)<br/>4.10<sup>-4</sup> = k.0,01<sup>x</sup>.0,02<sup>y</sup> (3)<br/>Lấy (2)/(1) ⟹ 4 = 2<sup>x</sup> ⟹ x = 2.<br/>Lấy (3)/(1) ⟹ 2 = 2<sup>y</sup> ⟹ y = 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de08_p1_q7",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để đánh giá mức độ xảy ra nhanh, chậm của các phản ứng hóa học, người ta đưa ra khái niệm",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tốc độ phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cân bằng hóa học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nồng độ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chất xúc tác",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de08_p1_q8",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hoàn thành phát biểu về tốc độ phản ứng sau: \"Tốc độ phản ứng được xác định bởi độ biến thiên ...(1)... của ...(2)... trong một đơn vị ...(3)...\". Cụm từ thích hợp điền vào chỗ “…” là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) nồng độ, (2) một chất phản ứng hoặc sản phẩm, (3) thể tích",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) nồng độ, (2) một chất phản ứng hoặc sản phẩm, (3) thời gian",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) thời gian, (2) một chất sản phẩm, (3) nồng độ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) thời gian, (2) các chất phản ứng, (3) thể tích",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de08_p1_q9",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận định nào dưới đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi nhiệt độ tăng thì tốc độ phản ứng tăng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi nhiệt độ tăng thì tốc độ phản ứng giảm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi nhiệt độ giảm thì tốc độ phản ứng tăng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự thay đổi nhiệt độ không ảnh hưởng đến tốc độ phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de08_p1_q10",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các phản ứng hóa học sau, phản ứng nào xảy ra nhanh nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trung hòa acid – base",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sắt bị gỉ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tinh bột lên men rượu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thức ăn bị ôi thiu",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de08_p1_q11",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Yếu tố nào sau đây không ảnh hưởng đến tốc độ phản ứng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ chất phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thể vật lí của chất phản ứng (rắn, lỏng, kích thước lớn, nhỏ....)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ chất phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tỉ trọng chất phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de08_p1_q12",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng đơn giản xảy ra trong bình kín: 2NO (g) + O<sub>2</sub> (g)  2NO<sub>2</sub> (g). Ở nhiệt độ không đổi, tốc độ phản ứng thay đổi thế nào khi nồng độ O<sub>2</sub> tăng 3 lần, nồng độ NO không đổi?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ phản ứng tăng lên 3 lần",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ phản ứng tăng lên 9 lần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ phản ứng giảm 3 lần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ phản ứng giảm 9 lần",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de08_p1_q13",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho cùng một lượng dung dịch axit sunfuric vào hai cốc đựng cùng một thể tích dung dịch Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> với nồng độ khác nhau, ở cốc đựng dung dịch Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> có nồng độ lớn hơn thấy kết tủa xuất hiện trước. Điều đó chứng tỏ ở cùng điều kiện về nhiệt độ, tốc độ phản ứng:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giảm khi nồng độ của chất phản ứng tăng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Không phụ thuộc vào nồng độ của chất phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tỉ lệ thuận với nồng độ của chất phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tỉ lệ nghịch với nồng độ của chất phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de08_p1_q14",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": ". Lấy một chai nước ngọt có ga rót vào cốc thật nhẹ tay, sau đó từ từ cho đường cát trắng vào trong cốc (hình minh họa dưới đây).<br/>Hiện tượng xảy ra là",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nước ngọt sủi bọt li ti",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nước ngọt sủi bọt rất nhiều và mạnh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nước ngọt mất bọt khí",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xuất hiện kết tủa đen",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de08_p1_q15",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho cùng một lượng Zn (Zinc) vào cốc đựng dung dịch HCl, tốc độ phản ứng sẽ lớn nhất khi dùng Zn ở dạng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "viên nhỏ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bột mịn, khuấy đều",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tấm mỏng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "thỏi lớn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de08_p1_q16",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là đúng về xúc tác?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Xúc tác giúp làm tăng năng lượng hoạt hóa của phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khối lượng xúc tác không thay đổi sau phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Xúc tác không tương tác với các chất trong quá trình phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xúc tác kết hợp với sản phẩm phản ứng tạo thành hợp chất bền",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de08_p1_q17",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sản phẩm của phản ứng được tạo ra qua các bước theo hình bên dưới:<br/>Vai trò chất X là",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image3.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chất xúc tác",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "làm tăng năng lượng hoạt hoá của chất tham gia phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "làm giảm năng lượng hoạt hoá của chất tham gia phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "làm tăng nồng độ của chất tham gia phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de08_p1_q18",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học xảy ra trong pha khí sau: N<sub>2</sub> + 3H<sub>2</sub>  2NH<sub>3</sub>.<br/>Phát biểu nào sau đây không đúng?<br/>Khi nhiệt độ phản ứng tăng lên,",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tốc độ chuyển động của phân tử chất đầu (N<sub>2</sub>, H<sub>2</sub>) tăng lên",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tốc độ va chạm giữa phân tử N<sub>2</sub> và H<sub>2</sub> tăng lên",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số va chạm hiệu quả tăng lên",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tốc độ chuyển động của phân tử chất sản phẩm (NH<sub>3</sub>) giảm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de08_p2_q19",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng hóa học sau: H<sub>2</sub>O<sub>2</sub>  H<sub>2</sub>O  +  O<sub>2</sub><br/>Biết rằng tốc độ của phản ứng này tuân theo biểu thức của định luật tác dụng khối lượng.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo thời gian, nồng độ H<sub>2</sub>O<sub>2</sub> giảm dần nên tốc độ phản ứng giảm dần.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Biểu thức tốc độ phản ứng:",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ phản ứng tăng lên 2 lần khi nồng độ H<sub>2</sub>O<sub>2</sub> tăng lên 2 lần.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ phản ứng giảm xuống 3 lần khi nồng độ O<sub>2</sub> tăng lên 9 lần và giữ nguyên nồng độ của H<sub>2</sub>O.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Tốc độ tức thời không tính cho sản phẩm.<br/>c. Đúng.<br/>d. Sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de08_p2_q20",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho các hình ảnh minh họa về ứng dụng thay đổi đổi tốc độ phản ứng sau:",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image9.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto3.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hình a cho biết yếu tố áp suất đã được áp dụng để làm thay đổi tốc độ của phản ứng.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hình b cho biết yếu tố nhiệt độ đã được áp dụng để làm thay đổi tốc độ của phản ứng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hình c cho biết yếu tố chất xúc tác đã được áp dụng để làm thay đổi tốc độ của phản ứng.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các yếu tố làm thay đổi tốc độ phản ứng là nhiệt độ, nồng độ, thể tích, áp suất và diện tích bề mặt tiếp xúc.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Yếu tố nồng độ.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Không có thể tích.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de08_p2_q21",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Nghiên cứu ảnh hưởng của chất xúc tác đến tốc độ phản ứng:<br/>2H<sub>2</sub>O<sub>2</sub>(aq) → 2H<sub>2</sub>O(l) + O<sub>2</sub>(g)<br/>Hóa chất: dung dịch hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>) 30%, bột MnO<sub>2</sub>.<br/>Dụng cụ: Ống nghiệm, tàn đóm đỏ.<br/>Tiến hành:<br/>Bước 1: Rót khoảng 2 mL dung dịch H<sub>2</sub>O<sub>2</sub> vào 2 ống nghiệm (1), (2).<br/>Bước 2: Thêm một ít bột MnO<sub>2</sub> vào ống nghiệm (2) và đưa nhanh tàn đóm đỏ vào miệng 2 ống nghiệm.",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image10.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto4.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tàn đóm ở ồng nghiệm (1) chỉ cháy nhẹ.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tàn đóm ở ống nghiệm (2) bùng cháy mãnh liệt hơn.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sau khi phản ứng kết thúc, chất xúc tác MnO<sub>2</sub> cũng bị tiêu hao hết.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi có xúc tác, phản ứng sẽ xảy ra qua nhiều giai đoạn, mỗi giai đoạn đều có năng lượng hoạt hoá thấp hơn so với phản ứng không xúc tác, do đó số hạt có đủ năng lượng hoạt hoá sẽ nhiều hơn, dẫn đến tốc độ phản ứng tăng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Chất xúc tác vẫn được bảo toàn về lượng và chất khi kết thúc phản ứng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de08_p2_q22",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành một thí nghiệm như sau: Cho vào ống nghiệm khô một vài tinh thể potassium permanganate, nhỏ tiếp vào ống nghiệm vài giọt dung dịch hydrochloric acid đậm đặc. Đậy kín ống nghiệm bằng nút cao su có đính một băng giấy màu ẩm như hình vẽ:",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_7_(Đề_số_1)_image4.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_7_(Đề_số_1)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong thí nghiệm trên, hydrochloric acid bị khử thành khí chlorine.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong ống nghiệm có xuất hiện khí màu vàng lục đó là khí chlorine.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Băng giấy màu ẩm bị mất màu dần do sinh ra khí chlorine sinh ra trong bình tác dụng với nước tạo ra HClO là chất oxi hóa mạnh, có tính tẩy màu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để hạn chế chlorine gây độc thoát ra trong quá trình thực hành thí nghiệm cần cho thêm lượng dư dung dịch H<sub>2</sub>SO<sub>4</sub> đặc.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>2KMnO<sub>4</sub> + 16HCl  2MnCl<sub>2</sub> + 2KCl + 5Cl<sub>2</sub> + 8H<sub>2</sub>O<br/>Cl<sub>2</sub> + H<sub>2</sub>O  HCl + HClO<br/>a. Sai. HCl (chất khử) bị oxi hóa thành Cl<sub>2</sub>.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Dung dịch NaOH đặc.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de08_p3_q23",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Tính hệ số nhiệt độ của phản ứng. (Làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "2,1",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de08_p3_q24",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Giả sử ban đầu cốc chứa dung dịch HCl và đá vôi có khối lượng 235,40g. Thực hiện thí nghiệm ở 45<sup>0</sup>C. Hỏi sau 1 phút, khối lượng cốc là bao nhiêu? (Bỏ qua khối lượng nước bay hơi). (Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "234",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de08_p3_q25",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "",
        "images": [],
        "correctAnswer": "2,1",
        "explanation": "Câu 5. Đáp án: 2,1.<br/>Tốc độ phản ứng ở 25<sup>0</sup>Clà 0,27 g/min<br/>Tốc độ phản ứng ở 35<sup>0</sup>Clà 0,57 g/min<br/>Hệ số nhiệt độ của phản ứng:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de08_p3_q26",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "",
        "images": [],
        "correctAnswer": "234",
        "explanation": "Câu 6. Đáp án: 234.<br/>Tốc độ phản ứng ở 45<sup>0</sup>C là:<br/>Khối lượng cốc sau 1 phút là: 235,40 – 1,20 = 234,20 (g).<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de08_p3_q27",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho đồ thị thể hiện sự thay đổi tốc độ phản ứng của một phản ứng hóa học.<br/>Đồ thị biểu diễn sự phụ thuộc thể tích khí theo thời gian<br/>Thời điểm phản ứng dừng lại là bao nhiêu giây?",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image11.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto5.wdp"
        ],
        "correctAnswer": "70",
        "explanation": "Đáp án: 70.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de08_p3_q28",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các quá trình xảy ra như sau:<br/>(a) Nung đá vôi ở nhiệt độ cao để sản xuất vôi sống.<br/>(b) Nghiền nguyên liệu trước khi đưa vào lò nung để sản xuất clanke (trong sản xuất xi măng).<br/>(c) Rắc men vào tinh bột đã được nấu chín (cơm, ngô, khoai, sắn, …) để ủ rượu.<br/>(d) Tạo những lỗ rỗng trong viên than tổ ong.<br/>Có tất cả bao nhiêu yếu tố ảnh hưởng đến tốc độ phản ứng trong các quá trình trên?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>(a) Nhiệt độ.<br/>(b) Diện tích tiếp xúc.<br/>(c) Xúc tác.<br/>(d) Diện tích tiếp xúc.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_gk2_de09",
    "code": "H10-GK2-09",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de09_p1_q1",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho cùng một lượng dung dịch axit sunfuric vào hai cốc đựng cùng một thể tích dung dịch Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> với nồng độ khác nhau, ở cốc đựng dung dịch Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> có nồng độ lớn hơn thấy kết tủa xuất hiện trước. Điều đó chứng tỏ ở cùng điều kiện về nhiệt độ, tốc độ phản ứng:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giảm khi nồng độ của chất phản ứng tăng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Không phụ thuộc vào nồng độ của chất phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tỉ lệ thuận với nồng độ của chất phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tỉ lệ nghịch với nồng độ của chất phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de09_p1_q2",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": ". Lấy một chai nước ngọt có ga rót vào cốc thật nhẹ tay, sau đó từ từ cho đường cát trắng vào trong cốc (hình minh họa dưới đây).<br/>Hiện tượng xảy ra là",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nước ngọt sủi bọt li ti",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nước ngọt sủi bọt rất nhiều và mạnh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nước ngọt mất bọt khí",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xuất hiện kết tủa đen",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de09_p1_q3",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho cùng một lượng Zn (Zinc) vào cốc đựng dung dịch HCl, tốc độ phản ứng sẽ lớn nhất khi dùng Zn ở dạng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "viên nhỏ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bột mịn, khuấy đều",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tấm mỏng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "thỏi lớn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de09_p1_q4",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là đúng về xúc tác?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Xúc tác giúp làm tăng năng lượng hoạt hóa của phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khối lượng xúc tác không thay đổi sau phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Xúc tác không tương tác với các chất trong quá trình phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xúc tác kết hợp với sản phẩm phản ứng tạo thành hợp chất bền",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de09_p1_q5",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sản phẩm của phản ứng được tạo ra qua các bước theo hình bên dưới:<br/>Vai trò chất X là",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image3.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chất xúc tác",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "làm tăng năng lượng hoạt hoá của chất tham gia phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "làm giảm năng lượng hoạt hoá của chất tham gia phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "làm tăng nồng độ của chất tham gia phản ứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de09_p1_q6",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học xảy ra trong pha khí sau: N<sub>2</sub> + 3H<sub>2</sub>  2NH<sub>3</sub>.<br/>Phát biểu nào sau đây không đúng?<br/>Khi nhiệt độ phản ứng tăng lên,",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tốc độ chuyển động của phân tử chất đầu (N<sub>2</sub>, H<sub>2</sub>) tăng lên",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tốc độ va chạm giữa phân tử N<sub>2</sub> và H<sub>2</sub> tăng lên",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số va chạm hiệu quả tăng lên",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tốc độ chuyển động của phân tử chất sản phẩm (NH<sub>3</sub>) giảm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de09_p1_q7",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biện pháp kĩ thuật nào sau đây không được sử dụng để tăng tốc độ phản ứng nung vôi?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đập nhỏ đá vôi đến kích thước thích hợp",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tăng nhiệt độ lên nhiệt độ thích hợp",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng nồng độ khí CO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thổi không khí vào lò nung vôi",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de09_p1_q8",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi nhiệt độ tăng lên 10<sup>o</sup> tốc độ của một phản ứng hóa học tăng lên 3 lần. Điều khẳng định nào dưới đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ phản ứng trên tăng 36 lần khi nhiệt độ tăng từ 20<sup>o</sup>C lên 50<sup>o</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ phản ứng trên tăng 54 lần khi nhiệt độ tăng từ 20<sup>o</sup>C lên 50<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ phản ứng trên tăng 27 lần khi nhiệt độ tăng từ 20<sup>o</sup>C lên 50<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tốc độ phản ứng trên tăng 81 lần khi nhiệt độ tăng từ 20<sup>o</sup>C lên 50<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de09_p1_q9",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi diện tích bề mặt tăng, tốc độ phản ứng tăng với phản ứng có chất nào tham gia?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất lỏng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất khí",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất rắn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất rắn, lỏng, khí",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de09_p1_q10",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi bắt đầu phản ứng, nồng độ một chất là 0,024 mol/L. Sau 10 giây xảy ra phản ứng, nồng độ của chất đó là 0,022 mol/L. Tốc độ của phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0,0003 mol/L. s",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "0,00025 mol/L.s",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "0,00015 mol/L.s",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0,0002 mol/L.s",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de09_p1_q11",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học sau: C(s)  +  O<sub>2</sub>(g) → CO<sub>2</sub>(g). Yếu tố nào sau đây không ảnh hưởng đến tốc độ phản ứng trên?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Áp suất O<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hàm lượng carbon",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Diện tích bề mặt carbon",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de09_p1_q12",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Phản ứng đơn giản là phản ứng xảy ra theo một bước.<br/>(b) Tốc độ của một phản ứng đơn giản tuân theo định luật tác dụng khối lượng.<br/>(c) Hằng số tốc độ phản ứng là tốc độ của phản ứng khi nồng độ của tất cả các chất trong hỗn hợp phản ứng đều bằng nhau và bằng 1.<br/>(d) Tốc độ của mọi phản ứng hóa học đều tuân theo định luật tác dụng khối lượng<br/>(e) Hằng số tốc độ của phản ứng phụ thuộc vào thời gian.<br/>Số phát biểu không đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "5",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de09_p1_q13",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình e lớp ngoài cùng của các nguyên tử các nguyên tố halogen là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ns<sup>2</sup>np<sup>4</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ns<sup>2</sup>p<sup>5</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ns<sup>2</sup>np<sup>3</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ns<sup>2</sup>np<sup>6</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de09_p1_q14",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết trong phân tử hydrogen halide (HX) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ion",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cho - nhận",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cộng hóa trị phân cực",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cộng hóa trị không cực",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de09_p1_q15",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên nhân dẫn tới nhiệt độ nóng chảy, nhiệt độ sôi của các đơn chất halogen tăng từ fluorine đến iodine là do từ fluorine đến iodine,",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "khối lượng phân tử và tương tác van der Waals đều tăng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tính phi kim giảm và tương tác van der Waals tăng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "khối lượng phân tử tăng và tương tác van der Waals giảm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "độ âm điện và tương tác van der Waals đều giảm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de09_p1_q16",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Halogen ở thể rắn (điều kiện thường), có tính thăng hoa là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "fluorine",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chlorine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "bromine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "iodine",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de09_p1_q17",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dich hydrohalic acid nào sau đây có tính acid yếu?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HF",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HBr",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HI",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de09_p1_q18",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây được ứng dụng dùng để tráng phim ảnh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaBr",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "AgCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "AgBr",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HBr",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de09_p2_q19",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành một thí nghiệm như sau: Cho vào ống nghiệm khô một vài tinh thể potassium permanganate, nhỏ tiếp vào ống nghiệm vài giọt dung dịch hydrochloric acid đậm đặc. Đậy kín ống nghiệm bằng nút cao su có đính một băng giấy màu ẩm như hình vẽ:",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_7_(Đề_số_1)_image4.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_7_(Đề_số_1)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong thí nghiệm trên, hydrochloric acid bị khử thành khí chlorine.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong ống nghiệm có xuất hiện khí màu vàng lục đó là khí chlorine.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Băng giấy màu ẩm bị mất màu dần do sinh ra khí chlorine sinh ra trong bình tác dụng với nước tạo ra HClO là chất oxi hóa mạnh, có tính tẩy màu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để hạn chế chlorine gây độc thoát ra trong quá trình thực hành thí nghiệm cần cho thêm lượng dư dung dịch H<sub>2</sub>SO<sub>4</sub> đặc.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>2KMnO<sub>4</sub> + 16HCl  2MnCl<sub>2</sub> + 2KCl + 5Cl<sub>2</sub> + 8H<sub>2</sub>O<br/>Cl<sub>2</sub> + H<sub>2</sub>O  HCl + HClO<br/>a. Sai. HCl (chất khử) bị oxi hóa thành Cl<sub>2</sub>.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Dung dịch NaOH đặc.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de09_p2_q20",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Nhiệt độ sôi của hydrogen halide (HX) được cho ở bảng sau:<br/>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở điều kiện thường, các hydrogen halide đều là chất khí.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử hydrogen halide gồm một liên kết cộng hóa trị.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhiệt độ sôi tăng từ HCl đến HI, phù hợp với xu hướng tăng tương tác van der Waals từ HCl đến HI.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhiệt độ sôi của HF lớn nhất trong dãy chủ yếu là do giữa các phân tử HF có phân tử khối nhỏ nhất.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Nhiệt độ sôi của HF lớn nhất trong dãy chủ yếu là do giữa các phân tử HF có khả năng tạo liên kết hydrogen.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de09_p2_q21",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng điện phân NaCl trong công nghiệp:<br/>NaCl (aq) + H<sub>2</sub>O (l)  A (aq) + X (g) + Y (g) (*)<br/>Biết Y tác dụng được với dung dịch A tạo hỗn hợp chất tẩy rửa phổ biến.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tên gọi của chất A là sodium hypochlorite.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X tác dụng với Y tạo hydrogen chloride.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu thực hiện phản ứng (*) không có màng ngăn sẽ thu được nước Javel (gồm muối NaCl, NaClO) có khả năng tẩy mầu và sát khuẩn.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để sản xuất được 15 tấn chất A cần dùng 28,6 tấn dung dịch NaCl 95%, biết hiệu suất của quá trình là 80%.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Cl<sub>2</sub>(aq) + 2NaOH(aq) → NaCl(aq) + NaClO(aq) + H<sub>2</sub>O(l)<br/>A là NaOH, X là H<sub>2</sub>, Y là Cl<sub>2</sub><br/>a. Sai. A là sodium hydroxide.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Cl<sub>2</sub>(aq) + 2NaOH(aq) → NaCl(aq) + NaClO(aq) + H<sub>2</sub>O(l)<br/>Khối lượng dung dịch NaCl là 27,56/0,95 = 29 tấn.",
        "explanationImages": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_7_(Đề_số_1)_image7.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_7_(Đề_số_1)_hdphoto2.wdp"
        ],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de09_p2_q22",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Một học sinh thực hiện thí nghiệm và cho kết quả như sau:<br/>Bước 1: Lấy 2ml dung dịch NaBr vào ống nghiệm, dung dịch không màu.<br/>Bước 2: Lấy tiếp 1ml hexane vào ống nghiệm, lắc mạnh để quan sát khả năng hoà tan của hai chất lỏng. Nhận thấy hai chất lỏng không tan vào nhau và phân tách lớp.<br/>Bước 3: Thêm 1ml nước Cl<sub>2</sub> vào ống nghiệm, lắc đều rồi để yên. Quan sát thấy lớp chất lỏng phía trên có màu da cam.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 2, hỗn hợp tách thành hai lớp trong đó NaBr nằm ở phần lớp trên.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sau bước 3, lớp chất lỏng phía trên có màu da cam là do Br<sub>2</sub>, Cl<sub>2</sub> tan trong hexane.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể thay dung dịch NaBr bằng dung dịch KBr nhưng vẫn không làm thay đổi hiện tượng của thí nghiệm.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thí nghiệm trên chứng minh tính oxi hóa của Cl<sub>2</sub> yếu hơn Br<sub>2</sub>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Phương trình hoá học của phản ứng: Cl<sub>2</sub> + 2NaBr  2NaCl + Br<sub>2</sub><br/>Bước 1: NaBr là hợp chất ion, phân tử phân cực mạnh nên tan tốt trong nước, dung dịch đồng nhất không màu.<br/>Bước 2:  Hexane  là chất hữu cơ không phân cực, hỗn hợp dung dịch muối  NaBr  và hexane không tan vào nhau, hexane nhẹ hơn nên phân lớp phía trên.<br/>Bước 3: Br<sub>2</sub>được tạo ra dễ tan tronghexane, lớp chất lỏng phía trên có màu da cam.<br/>Thí nghiệm chứng minh tính tan của đơn chất halogen trong hai loại dung môi và chứng minh tính oxi hoá của  Cl<sub>2</sub>mạnh hơnBr<sub>2 .</sub><br/>a. Sai. Lớp dung dịch NaBr ở phía dưới, lớp hexane ở phía trên.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Thí nghiệm trên chứng minh tính oxi hóa của Cl<sub>2</sub> mạnh hơn Br<sub>2</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de09_p3_q23",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho đồ thị thể hiện sự thay đổi tốc độ phản ứng của một phản ứng hóa học.<br/>Đồ thị biểu diễn sự phụ thuộc thể tích khí theo thời gian<br/>Thời điểm phản ứng dừng lại là bao nhiêu giây?",
        "images": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image11.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto5.wdp"
        ],
        "correctAnswer": "70",
        "explanation": "Đáp án: 70.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de09_p3_q24",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các quá trình xảy ra như sau:<br/>(a) Nung đá vôi ở nhiệt độ cao để sản xuất vôi sống.<br/>(b) Nghiền nguyên liệu trước khi đưa vào lò nung để sản xuất clanke (trong sản xuất xi măng).<br/>(c) Rắc men vào tinh bột đã được nấu chín (cơm, ngô, khoai, sắn, …) để ủ rượu.<br/>(d) Tạo những lỗ rỗng trong viên than tổ ong.<br/>Có tất cả bao nhiêu yếu tố ảnh hưởng đến tốc độ phản ứng trong các quá trình trên?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>(a) Nhiệt độ.<br/>(b) Diện tích tiếp xúc.<br/>(c) Xúc tác.<br/>(d) Diện tích tiếp xúc.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de09_p3_q25",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Dưới đây là một số hiện tượng xảy ra trong đời sống:<br/>(1) Phản ứng cháy của xăng, dầu.<br/>(2) Các thanh thép ở các công trường xây dựng bị oxi hoá bởi các tác nhân trong không khí.<br/>(3) Phản ứng lên men rượu từ trái cây.<br/>(4) Nướng bánh mì.<br/>Liệt kê đáp án thành một dãy số theo thứ tự tốc độ phản ứng giảm dần từ các hiện tượng trên.",
        "images": [],
        "correctAnswer": "1432",
        "explanation": "Đáp án: 1432.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de09_p3_q26",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Trong một thí nghiệm, người ta đo được tốc độ trung bình của phản ứng của zinc (dạng bột) với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng là 0,005 mol/s. Nếu ban đầu cho 0,4 mol zinc (dạng bột) với dung dịch H<sub>2</sub>SO<sub>4</sub> ở trên thì sau bao nhiêu giây còn lại 0,05 mol zinc.",
        "images": [],
        "correctAnswer": "70",
        "explanation": "Đáp án: 70.<br/>Lượng zinc đã tan là: 0,4 – 0,05 = 0,35 mol<br/>Thời gian để hòa tan 0,35 mol zinc là:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de09_p3_q27",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng của các chất ở thể khí: I<sub>2</sub> + H<sub>2</sub> →  2HI.<br/>Biết tốc độ phản ứng tỉ lệ thuận với nồng độ các chất tham gia và phản ứng với số mũ là hệ số tỉ lượng của chất đó trong phương trình hóa học. Ở một nhiệt độ xác định, hằng số tốc độ của phản ứng này là 2,5.10<sup>-4</sup>L/(mol.s). Nồng độ đầu của I<sub>2</sub> và H<sub>2</sub> lần lượt là 0,02 M và 0,03 M, tốc độ phản ứng tại thời điểm đã hết một nửa lượng I<sub>2</sub> là a.10<sup>–8</sup> mol/(L.s). Tính a.",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.<br/>Tại thời điểm lượng X đã hết một nửa: [I<sub>2</sub>] = 0,01M; [H<sub>2</sub>] = 0,02M<br/>Tốc độ phản ứng:  = 2,5.10<sup>-4</sup>. 0,01 . 0,02 = 5.10<sup>-8</sup> (mol/(L.s))",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de09_p3_q28",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Khi để ở nhiệt độ 30 <sup>o</sup>C, một quả táo bị hư sau 3 ngày. Khi được bảo quản ở 0 <sup>o</sup>C (trong tủ lạnh), quả táo bị hư sau 24 ngày. Nếu bảo quản ở 20 <sup>o</sup>C, quả táo bị hư sau bao nhiêu ngày?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image16.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto6.wdp",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image17.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto7.wdp"
        ],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_gk2_de10",
    "code": "H10-GK2-10",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 10 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 10 (Năng lượng hóa học & Tốc độ phản ứng)",
    "badge": "Giữa Kì 2",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk2_de10_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình e lớp ngoài cùng của các nguyên tử các nguyên tố halogen là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ns<sup>2</sup>np<sup>4</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ns<sup>2</sup>p<sup>5</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ns<sup>2</sup>np<sup>3</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ns<sup>2</sup>np<sup>6</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk2_de10_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết trong phân tử hydrogen halide (HX) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ion",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cho - nhận",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cộng hóa trị phân cực",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cộng hóa trị không cực",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk2_de10_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên nhân dẫn tới nhiệt độ nóng chảy, nhiệt độ sôi của các đơn chất halogen tăng từ fluorine đến iodine là do từ fluorine đến iodine,",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "khối lượng phân tử và tương tác van der Waals đều tăng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tính phi kim giảm và tương tác van der Waals tăng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "khối lượng phân tử tăng và tương tác van der Waals giảm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "độ âm điện và tương tác van der Waals đều giảm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk2_de10_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Halogen ở thể rắn (điều kiện thường), có tính thăng hoa là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "fluorine",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chlorine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "bromine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "iodine",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk2_de10_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dich hydrohalic acid nào sau đây có tính acid yếu?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HF",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HBr",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HI",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk2_de10_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây được ứng dụng dùng để tráng phim ảnh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaBr",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "AgCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "AgBr",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HBr",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk2_de10_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các halogen có tính chất hóa học gần giống nhau vì có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cấu hình e lớp ngoài cùng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tính oxi hóa mạnh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số electron độc thân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số lớp electron",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_gk2_de10_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây chỉ có tính oxi hoá, không có tính khử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "F<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Br<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "I<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_gk2_de10_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng hoá học giữa hydrogen và chlorine xảy ra trong điều kiện nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong bóng tối, nhiệt độ thường",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi có ánh sáng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở nhiệt độ thấp",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong bóng tối, nhiệt độ cao",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_gk2_de10_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây chứng tỏ HCl có tính khử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaOH + HCl → NaCl + H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "MnO<sub>2</sub> + HCl → MnCl<sub>2</sub> + Cl<sub>2</sub> + H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2Fe + 3Cl<sub>2</sub> → FeCl<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2HCl + Fe → FeCl<sub>2</sub> + H<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk2_de10_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử halogen nào sau đây thể hiện số oxi hoá -1 trong các hợp chất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "fluorine",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chlorine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Bromine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Iodine",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_gk2_de10_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho một lượng halogen X<sub>2</sub> tác dụng hết với kim loại zinc (Zn) thì thu được 22,5 gam muối. Cũng lượng X<sub>2</sub> đó đem tác dụng với potassium (K) thì thu được 23,8 gam muối. Công thức của X<sub>2</sub>là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "I<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "F<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Br<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cl<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án: C.<br/>PTHH: (1) Zn + X<sub>2</sub> → ZnX<sub>2</sub><br/>(2) 2K + X<sub>2</sub> → 2KX",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_gk2_de10_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất của halogen X được ứng dụng để tạo hợp chất chống dính trong xoong, chảo, nồi cơm điện, … X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fluorine",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Iodine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Bromine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chlorine",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk2_de10_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguồn nguyên liệu chủ yếu để điều chế iodine trong công công nghiệp là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "rong biển",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nước biển",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "muối ăn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "quặng cryolite",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk2_de10_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các dung dịch hydrofluoric, potassium iodide, sodium chloride, kí hiệu ngẫu nhiên là X, Y, Z. Khi dùng thuốc thử silicon dioxide và silver nitrate để nhận biết Y, Z thu được kết quả cho trong bảng sau:<br/><br/>Các dung dịch ban đầu được kí hiệu tương ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Z, Y, X",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Y, X, Z",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Y, Z, X",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X, Z, Y",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_gk2_de10_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào đúng khi nói về nhóm halogen?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tố đầu tiên trong nhóm halogen là chất khí ở nhiệt độ phòng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các halogen tồn tại ở dạng nguyên tử ở nhiệt độ phòng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các halogen không độc, không màu, không tan trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Halogen tồn tại ở dạng đơn chất trong tự nhiên",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk2_de10_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chọn phát biểu không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các hydrogen halide tan tốt trong nước tạo dung dịch acid",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ion F<sup>-</sup> và Cl<sup>-</sup> không bị oxi hóa bởi dung dịch H<sub>2</sub>SO<sub>4</sub> đặc",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các hydrogen halide làm quỳ tím hóa đỏ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tính acid của các hydrohalic acid tăng dần từ HF đến HI",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk2_de10_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "R là nguyên tố mà nguyên tử có phân lớp electron ngoài cùng là np<sup>2n+1</sup> (n là số thứ tự của lớp electron). Cho các nhận xét sau đây về nguyên tố R:<br/>(a) Tổng số hạt mang điện của nguyên tử R là 18.<br/>(b) Số electron độc thân trong nguyên tử R là 3.<br/>(c) Oxide cao nhất tạo ra từ R là R<sub>2</sub>O<sub>7</sub>.<br/>(d) NaR tác dụng với dung dịch AgNO<sub>3</sub> tạo kết tủa.<br/>(e) Hợp chất khí với hydrogen của R trong dung dịch nước có tính acid mạnh.<br/>Số nhận xét đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án: B.<br/>Với n = 2  2s<sup>2</sup>2p<sup>5</sup> : Fluorine (F)<br/>a) Đúng.<br/>b) Sai. Có 1 e độc thân.<br/>c) Sai. Hợp chất oxide cao nhất là F<sub>2</sub>O.<br/>d) Sai. AgNO<sub>3</sub> không tác dụng với NaF.<br/>e) Sai. HF là acid yếu.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk2_de10_p2_q19",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Một học sinh thực hiện thí nghiệm và cho kết quả như sau:<br/>Bước 1: Lấy 2ml dung dịch NaBr vào ống nghiệm, dung dịch không màu.<br/>Bước 2: Lấy tiếp 1ml hexane vào ống nghiệm, lắc mạnh để quan sát khả năng hoà tan của hai chất lỏng. Nhận thấy hai chất lỏng không tan vào nhau và phân tách lớp.<br/>Bước 3: Thêm 1ml nước Cl<sub>2</sub> vào ống nghiệm, lắc đều rồi để yên. Quan sát thấy lớp chất lỏng phía trên có màu da cam.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 2, hỗn hợp tách thành hai lớp trong đó NaBr nằm ở phần lớp trên.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sau bước 3, lớp chất lỏng phía trên có màu da cam là do Br<sub>2</sub>, Cl<sub>2</sub> tan trong hexane.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể thay dung dịch NaBr bằng dung dịch KBr nhưng vẫn không làm thay đổi hiện tượng của thí nghiệm.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thí nghiệm trên chứng minh tính oxi hóa của Cl<sub>2</sub> yếu hơn Br<sub>2</sub>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Phương trình hoá học của phản ứng: Cl<sub>2</sub> + 2NaBr  2NaCl + Br<sub>2</sub><br/>Bước 1: NaBr là hợp chất ion, phân tử phân cực mạnh nên tan tốt trong nước, dung dịch đồng nhất không màu.<br/>Bước 2:  Hexane  là chất hữu cơ không phân cực, hỗn hợp dung dịch muối  NaBr  và hexane không tan vào nhau, hexane nhẹ hơn nên phân lớp phía trên.<br/>Bước 3: Br<sub>2</sub>được tạo ra dễ tan tronghexane, lớp chất lỏng phía trên có màu da cam.<br/>Thí nghiệm chứng minh tính tan của đơn chất halogen trong hai loại dung môi và chứng minh tính oxi hoá của  Cl<sub>2</sub>mạnh hơnBr<sub>2 .</sub><br/>a. Sai. Lớp dung dịch NaBr ở phía dưới, lớp hexane ở phía trên.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Thí nghiệm trên chứng minh tính oxi hóa của Cl<sub>2</sub> mạnh hơn Br<sub>2</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_gk2_de10_p2_q20",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các halogen đều có 7 electron lớp ngoài cùng thuộc phân lớp s và p.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tương tác van der Waals của các đơn chất halogen tăng từ fluorine đến iodine đã góp phần làm tăng nhiệt độ sôi của chúng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thành phần của nước bromine gồm HBr và HBrO.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khí chlorine phản ứng với dung dịch sodium hydroxide tạo dung dịch nước Javel dùng để sát khuẩn trong công nghiệp và trong gia đình.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Thành phần của nước bromine gồm các chất Br<sub>2</sub>, H<sub>2</sub>O, HBr, HBrO.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_gk2_de10_p2_q21",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Xét các phản ứng hoá học: H<sub>2</sub>(g) + X<sub>2</sub>(g) → 2HX(g) (X là các halogen). Cho bảng số liệu năng lượng liên kết H – X:<br/>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mức độ phản ứng với hydrogen giảm từ fluorine đến iodine nên tính oxi hóa của fluorine đến iodine cũng giảm dần.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H – I có năng lượng liên kết thấp nhất nên là phản ứng giữa H<sub>2</sub> và I<sub>2</sub> dễ xảy ra nhất.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Giá trị năng lượng HX giảm dần nên độ bền nhiệt cũng giảm dần từ HF đến HI.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng giữa đơn chất hydrogen và đơn chất halogen đều là phản ứng một chiều.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Phản ứng giữa H<sub>2</sub> và I<sub>2</sub> khó xảy ra nhất.<br/>c. Đúng.<br/>d. Sai. Phản ứng giữa H<sub>2</sub> và I<sub>2</sub> là phản ứng thuận nghịch.",
        "explanationImages": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_7_(Đề_số_2)_image9.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_7_(Đề_số_2)_hdphoto2.wdp"
        ],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_gk2_de10_p2_q22",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Hydrohalic acid là những acid được tạo thành từ các hydrogen halide.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các hydrogen halide tan tốt trong nước tạo dung dịch hydrohalic acid tương ứng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính acid của các hydrohalic acid tăng dần từ hydroiodic acid đến hydrofuoric acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các hydrohalic acid có đầy đủ tính chất hóa học chung của acid như làm quỳ tím hóa đỏ, tác dụng với kim loại (đứng trước hydrogen trong dãy điện hóa), tác dụng với base, basic oxide và một số muối.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ngoài tính acid, hydrohalic acid còn có tính khử và tính oxi hóa.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Giảm dần.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_gk2_de10_p3_q23",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng của các chất ở thể khí: I<sub>2</sub> + H<sub>2</sub> →  2HI.<br/>Biết tốc độ phản ứng tỉ lệ thuận với nồng độ các chất tham gia và phản ứng với số mũ là hệ số tỉ lượng của chất đó trong phương trình hóa học. Ở một nhiệt độ xác định, hằng số tốc độ của phản ứng này là 2,5.10<sup>-4</sup>L/(mol.s). Nồng độ đầu của I<sub>2</sub> và H<sub>2</sub> lần lượt là 0,02 M và 0,03 M, tốc độ phản ứng tại thời điểm đã hết một nửa lượng I<sub>2</sub> là a.10<sup>–8</sup> mol/(L.s). Tính a.",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.<br/>Tại thời điểm lượng X đã hết một nửa: [I<sub>2</sub>] = 0,01M; [H<sub>2</sub>] = 0,02M<br/>Tốc độ phản ứng:  = 2,5.10<sup>-4</sup>. 0,01 . 0,02 = 5.10<sup>-8</sup> (mol/(L.s))",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_gk2_de10_p3_q24",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Khi để ở nhiệt độ 30 <sup>o</sup>C, một quả táo bị hư sau 3 ngày. Khi được bảo quản ở 0 <sup>o</sup>C (trong tủ lạnh), quả táo bị hư sau 24 ngày. Nếu bảo quản ở 20 <sup>o</sup>C, quả táo bị hư sau bao nhiêu ngày?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image16.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto6.wdp",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_image17.png",
          "/assets/hoa10/semester2/Lớp_10._Đề_KT_chương_6_(Đề_số_3)_hdphoto7.wdp"
        ],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_gk2_de10_p3_q25",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Trong các phản ứng hoá học, để chuyển thành anion, nguyên tử của các nguyên tố halogen đã nhận bao nhiêu electron?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_gk2_de10_p3_q26",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Hydrogen bromide bị phân hủy tạo thành hydrogen và bromine theo phương trình:<br/>2HBr(g) → H<sub>2</sub>(g) + Br<sub>2</sub>(g)<br/>Năng lượng liên kết của các liên kết được cho trong bảng sau. Biến thiên entahlpy của phản ứng là bao nhiêu kJ/mol<br/>",
        "images": [],
        "correctAnswer": "103",
        "explanation": "Đáp án: 103.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_gk2_de10_p3_q27",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu về đơn chất nhóm VIIA:<br/>(1) Tính chất đặc trưng là tính oxi hoá.<br/>(2) Màu sắc đậm dần từ fluorine đến iodine.<br/>(3) Từ fluorine đến bromine rồi iodine, trạng thái của các đơn chất chuyển từ khí đến lỏng rồi rắn.<br/>(4) Khả năng phản ứng với nước tăng từ fluorine đến iodine.<br/>Liệt kê các phát biểu đúng thành một dãy số theo thứ tự tăng dần (Ví dụ: 1234, 24,…).",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_gk2_de10_p3_q28",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 37,6 gam hỗn hợp các oxide gồm CaO, CuO và Fe<sub>2</sub>O<sub>3</sub> tác dụng vừa đủ với 0,6 L dung dịch hydrochloric acid 2 M, cô cạn dung dịch sau phản ứng thu được bao nhiêu gam muối?",
        "images": [],
        "correctAnswer": "70,6",
        "explanation": "Đáp án: 70,6.<br/>m<sub>oxide</sub> + m<sub>HCl</sub> = m<sub>muối</sub> + m<sub>nước</sub>  37,6 + 1,2.36,5  = m <sub>muối</sub> + 0,6.18  m<sub>muối</sub>= 70,6 (g)",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  }
];

export function getMidterm2ExamById(id: string): Chuong1Exam | undefined {
  return HOA10_MIDTERM2_EXAMS.find(e => e.id === id || e.code === id);
}

export function calculateMidterm2ExamScore(exam: Chuong1Exam, answers: Record<string, any>) {
  if (!exam || !exam.questions) {
    return { score: 0, part1Score: 0, part2Score: 0, part3Score: 0, part4Score: 0, correctCount: 0, totalQuestions: 0 };
  }

  let part1Score = 0;
  let part2Score = 0;
  let part3Score = 0;
  let part4Score = 0;
  let correctCount = 0;

  exam.questions.forEach((q) => {
    const userAns = answers[q.id];

    if (q.part === 1 || q.type === "multiple_choice") {
      const correctOpt = q.options?.find((o) => o.isCorrect)?.letter || q.correctAnswer;
      if (userAns && String(userAns).toUpperCase() === String(correctOpt).toUpperCase()) {
        part1Score += (q.points || 0.25);
        correctCount += 1;
      }
    } else if (q.part === 2 || q.type === "true_false") {
      if (userAns && typeof userAns === "object" && q.options) {
        let correctSub = 0;
        q.options.forEach((opt) => {
          const userSubVal = userAns[opt.id || opt.letter?.toLowerCase()];
          const isActuallyTrue = Boolean(opt.isCorrect);
          if (userSubVal === "true" && isActuallyTrue) correctSub++;
          else if (userSubVal === "false" && !isActuallyTrue) correctSub++;
        });

        if (correctSub === 1) part2Score += 0.1;
        else if (correctSub === 2) part2Score += 0.25;
        else if (correctSub === 3) part2Score += 0.5;
        else if (correctSub === 4) part2Score += 1.0;

        if (correctSub === 4) correctCount += 1;
      }
    } else if (q.part === 3 || q.type === "short_answer") {
      if (userAns !== undefined && userAns !== null && String(userAns).trim() !== "") {
        const rawUser = String(userAns).trim().toLowerCase().replace(",", ".");
        const rawCorrect = String(q.correctAnswer || "").trim().toLowerCase().replace(",", ".");
        const numUser = parseFloat(rawUser);
        const numCorrect = parseFloat(rawCorrect);

        let isMatch = false;
        if (!isNaN(numUser) && !isNaN(numCorrect)) {
          isMatch = Math.abs(numUser - numCorrect) < 0.01;
        } else {
          isMatch = (rawUser === rawCorrect);
        }

        if (!isMatch && q.acceptedAnswers && Array.isArray(q.acceptedAnswers)) {
          isMatch = q.acceptedAnswers.some(ans => {
            const aClean = String(ans).trim().toLowerCase().replace(",", ".");
            const aNum = parseFloat(aClean);
            return (!isNaN(numUser) && !isNaN(aNum)) ? Math.abs(numUser - aNum) < 0.01 : (rawUser === aClean);
          });
        }

        if (isMatch) {
          part3Score += (q.points || 0.25);
          correctCount += 1;
        }
      }
    } else if (q.part === 4 || q.type === "essay") {
      if (userAns && String(userAns).trim() !== "") {
        part4Score += (q.points || 1.0);
      }
    }
  });

  const totalScore = Math.round((part1Score + part2Score + part3Score + part4Score) * 100) / 100;
  return {
    score: totalScore,
    part1Score: Math.round(part1Score * 100) / 100,
    part2Score: Math.round(part2Score * 100) / 100,
    part3Score: Math.round(part3Score * 100) / 100,
    part4Score: Math.round(part4Score * 100) / 100,
    correctCount,
    totalQuestions: exam.questions.length
  };
}
