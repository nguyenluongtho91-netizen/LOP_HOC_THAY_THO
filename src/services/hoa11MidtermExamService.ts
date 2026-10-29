// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI GIỮA HỌC KÌ 1 HÓA HỌC 11 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi Giữa Học Kì 1 Hóa Học Lớp 11 Chuẩn Cấu Trúc 2025
 * Chuẩn hóa 100% trắc nghiệm theo đúng quy định Bộ Giáo Dục:
 * - Phần I: Câu trắc nghiệm nhiều phương án lựa chọn
 * - Phần II: Câu trắc nghiệm đúng / sai
 * - Phần III: Câu trắc nghiệm trả lời ngắn
 */

export interface Chuong1Question {
  id: string;
  number: number;
  part: number;
  type: 'multiple_choice' | 'true_false' | 'short_answer';
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

export const HOA11_MIDTERM_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa11_gk1_de01",
    "code": "H11-GK1-01",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de01_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng thuận nghịch?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2KClO<sub>3</sub> ⎯⎯t°→ 2KCl + 3O<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "N<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2NO(g)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>4</sub> + 2O<sub>2</sub> ⎯⎯t°→ CO<sub>2</sub> + 2H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>",
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
        "id": "hoa11_gk1_de01_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất điện li mạnh là những chất khi tan vào nước thì",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "không phân li thành ion",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chỉ một phần các phân tử tan phân li thành ion",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phân li hoàn toàn thành ion",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phân huỷ thành các chất mới",
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
        "id": "hoa11_gk1_de01_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, nguyên tố nitrogen (N) tồn tại ở dạng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chỉ tồn tại ở dạng đơn chất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tồn tại ở cả dạng đơn chất và dạng hợp chất",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chỉ tồn tại ở dạng hợp chất hữu cơ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chỉ tồn tại ở dạng hợp chất vô cơ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de01_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo thuyết Bronsted-Lowry, chất nào sau đây có vai trò là một acid trong dung dịch?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Al<sup>3+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>COOH",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaOH",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de01_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu trúc không gian của phân tử NH<sub>3</sub> có dạng hình",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chóp tư giác",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chóp tam giác",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tứ diện đều",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tam giác đều",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de01_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Muối nào sau đây tan tốt trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "MgCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CaCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "FeCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa11_gk1_de01_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khí nitrogen trơ về mặt hoá học ở điều kiện thường là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử có liên kết ba, năng lượng liên kết nhỏ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử có liên kết ba, năng lượng liên kết lớn",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phân tử có liên kết đôi, năng lượng liên kết lớn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tử có liên kết đôi, năng lượng liên kết nhỏ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa11_gk1_de01_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cân bằng hoá học là cân bằng động, do khi ở trạng thái cân bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phản ứng thuận và phản ứng nghịch vẫn xảy ra với tốc độ bằng nhau",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng nghịch dừng lại nhưng phản ứng thuận vẫn xảy ra",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phản ứng thuận và phản ứng nghịch đều dừng lại",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phản ứng thuận dừng lại nhưng phản ứng nghịch vẫn xảy ra",
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
        "id": "hoa11_gk1_de01_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quá trình đốt cháy hỗn hợp hơi nhiên liệu và -không khí trong động cơ khi đánh tia lửa điện sinh ra khí NO, một tác nhân gây ô nhiễm không khí. Tên gọi của NO là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ammonia",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nitrogen dioxide",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nitrogen monoxide",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nitrogen",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa11_gk1_de01_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương pháp chuẩn độ là phương pháp",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "xác định nồng độ của một chất bằng một dung dịch chuẩn đã biết nồng độ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "xác định nồng độ của một chất bằng một dung dịch chuẩn chưa biết nồng độ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "xác định nồng độ của một chất bằng sự thay đổi màu sắc của dung dịch chuẩn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xác định nồng độ của một chất bằng sự thay đổi màu sắc của các chỉ thị thông thường",
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
        "id": "hoa11_gk1_de01_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch chất nào sau đây có môi trường trung tính?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "AlCl<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa11_gk1_de01_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng sau trong hệ kín:<br/>2NO<sub>2</sub> (g, nâu đỏ) ⇌ N<sub>2</sub>O<sub>4</sub> (g, không màu) 0r298H 58 kJD=-<br/>Thực hiện thí nghiệm:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\"></th><th class=\"px-2 py-1 border border-slate-300\">Ngâm chìm ống vào cốc nước lạnh (nước đá)</th><th class=\"px-2 py-1 border border-slate-300\">Ngâm chìm ống vào cốc nước nóng (khoảng 80 oC)</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Sự thay đổi màu nâu đỏ trong ống nghiệm</td><td class=\"px-2 py-1 border border-slate-300\">(1)</td><td class=\"px-2 py-1 border border-slate-300\">(2)</td></tr></table></div><br/>Các hiện tượng (1), (2) tương ứng là màu của chất trong ống nghiệm",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhạt đi, đậm lên",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đậm lên, nhạt đi",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "không thay đổi",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đều đậm lên",
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
        "id": "hoa11_gk1_de01_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Muối ammonium dễ tan trong nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Muối ammonium là chất điện li mạnh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Muối ammonium kém bền với nhiệt",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tất cả dung dịch muối ammonium đều có tính base",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa11_gk1_de01_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét cân bằng hóa học: NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup><sup>.</sup>Hằng số cân bằng (K<sub>C</sub>) của phản ứng được biểu diễn bằng biểu thức nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4C3[NH].[OH]K[NH]+-=",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4C32[NH].[OH]K[NH].[HO]+-=",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4C2[NH].[OH]K[HO]+-=",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4C3[NH]K[NH]+=",
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
        "id": "hoa11_gk1_de01_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các công thức cấu tạo sau:<br/>Công thức cấu tạo của nitric acid là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(2)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(4)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de01_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở nhiệt độ cao, khí nitrogen phản ứng với khí hydrogen và khí oxygen theo hai phương trình hoá học sau:<br/>N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub> (1)N<sub>2</sub> + O<sub>2</sub> ⇌ 2NO (2)<br/>Trong các phản ứng (1) và (2), vai trò của N<sub>2</sub> lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chất oxi hoá; chất khử",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chất khử; chất khử",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chất oxi hoá; chất oxi hoá",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chất khử; chất oxi hoá",
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
        "id": "hoa11_gk1_de01_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một dung dịch chứa 0,02 mol Cu<sup>2+</sup>, 0,03 mol K<sup>+</sup>, x mol Cl<sup>–</sup> và y mol SO<sub>4</sub><sup>2–</sup>. Tổng khối lượng các muối tan có trong dung dịch là 5,435 gam. Giá trị của x và y lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0,01 và 0,03",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "0,02 và 0,05",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "0,05 và 0,01",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0,03 và 0,02",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_gk1_de01_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo Brønsted–Lowry, trong phản ứng với OH<sup>-</sup>, ion NH<sub>4</sub><sup>+</sup> có vai trò là acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dùng kiềm (dung dịch NaOH) nhận biết được dung dịch NaCl và dung dịch NH<sub>4</sub>Cl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phân tử ammonia, nguyên tử nitrogen có hai cặp electron chưa liên kết",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ammonia dễ tan trong nước vì có khả năng tạo liên kết hydrogen với nước",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa11_gk1_de01_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Xét các hệ cân bằng sau trong một bình kín:<br/>CO(g) + H<sub>2</sub>O(g) ⇌ CO<sub>2</sub>(g) + H<sub>2</sub>(g) or298H41kJD=-",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều nghịch.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi thêm khí H<sub>2</sub> vào hệ, cân bằng chuyển dịch theo chiều thuận.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng áp suất chung bằng cách nén cho thể tích của hệ giảm xuống, cân bằng chuyển dịch theo chiều thuận.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nồng độ ở trạng thái cân bằng của: [CO<sub>2</sub>] = [H<sub>2</sub>] = 0,074 M và [CO] = [H<sub>2</sub>O] = 0,026 M thì hằng số cân bằng của phản ứng xấp xỉ bằng 8,1.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Khi thêm khí H<sub>2</sub> vào hệ, cân bằng chuyển dịch theo chiều nghịch.<br/>c. Sai. Tăng áp suất cân bằng không chuyển dịch (số mol khí trước = số mol khí sau).<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de01_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Đo pH của một cốc nước chanh được giá trị pH bằng 2,4.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước chanh có môi trường acid.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nồng độ ion [ H<sup>+</sup> ] của nước chanh là 0,24 mol/L.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ của ion [ OH<sup>-</sup> ] của nước chanh nhỏ hơn 10<sup>-7</sup> mol/L.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhúng mẫu giấy quỳ tím vào cốc nước chanh thấy màu của giấy quỳ tím chuyển sang màu đỏ.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. [ H<sup>+</sup> ] = 10<sup>-2,4</sup> M.<br/>c. Đúng. 14122,410OH2,51.10M10----éù==ëû .<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de01_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho các tính chất hóa học của ammonia sau đây:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính base của ammonia là do trên nguyên tử nitrogen còn cặp electron hóa trị riêng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch ammonia là một dung dịch base yếu nên không làm phenolphtalein chuyển màu.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử N trong phân tử ammonia có số oxi hóa -3 nên ammonia có cả tính khử và tính oxi hóa.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong phản ứng giữa ammonia và oxygen, ammonia đóng vai trò là chất khử.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Làm phenolphtalein chuyển màu hồng.<br/>c. Sai. Chỉ có tính khử.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de01_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Phú dưỡng là hiện tượng nguồn nước dư quá nhiều chất dinh dưỡng (nitrogen, phosphorus).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có thể quan sát được hiện tượng phú dưỡng thông qua sự xuất hiện dày đặc của tảo xanh trong nước.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguồn dinh dưỡng ở ao, hồ thường có nguồn gốc từ nước mưa đọng lại giữ lại ở ao, hồ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi hàm lượng nitrogen và phosphorus trong nước đều vượt quá 20 μg/L sẽ gây hiện tượng phú dưỡng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nước thải, hay các đầm nuôi trồng thủy sản, sự dư thừa thức ăn chăn nuôi, phân bón hóa học... gây hiện tượng phú dưỡng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Nguồn dinh dưỡng ở ao, hồ thường có nguồn gốc từ nước thải sinh hoạt, công nghiệp và nông nghiệp.<br/>c. Sai. Hàm lượng nitrogen trong nước đạt 300 μg/L và phosphorus đạt 20 μg/L.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de01_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu liên kết cộng hóa trị trong ion ammonium (NH<sub>4</sub><sup>+</sup>)?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de01_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Để xác định nồng độ của một dung dịch HCl, người ta tiến hành chuẩn độ bằng dung dịch NaOH 0,1 M. Để chuẩn độ 10 mL dung dịch HCl này cần 20 mL dung dịch NaOH. Nnồng độ của dung dịch HCl trên là bao nhiêu mol/L?",
        "images": [],
        "correctAnswer": "0.2",
        "explanation": "Đáp án: 0,2.<br/>NaOH + HCl → NaCl + H<sub>2</sub>O<br/>Ta có: V<sub>HCl</sub>. C<sub>HCl</sub> = V<sub>NaOH</sub>. C<sub>NaOH</sub> C<sub>HCl</sub> = 0,2M.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de01_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các cân bằng hóa học sau:<br/>(a) 2 \\mathrm{SO}_2(\\mathrm{ g})+\\mathrm{O}_2(\\mathrm{ g}) \\rightleftharpoons 2 \\mathrm{SO}_3(\\mathrm{ g}) .(b) \\mathrm{C}(\\mathrm{s})+\\mathrm{H}_2 \\mathrm{O}(\\mathrm{g}) \\rightleftharpoons \\mathrm{CO}(\\mathrm{g})+\\mathrm{H}_2(\\mathrm{ g}) .<br/>(c) \\mathrm{PCl}_3(\\mathrm{ g})+\\mathrm{Cl}_2(\\mathrm{ g}) \\rightleftharpoons \\mathrm{PCl}_5(\\mathrm{ g}) .(d) 3 \\mathrm{Fe}(\\mathrm{s})+4 \\mathrm{H}_2 \\mathrm{O}(\\mathrm{g}) \\rightleftharpoons \\mathrm{Fe}_3 \\mathrm{O}_4(\\mathrm{ s})+4 \\mathrm{H}_2(\\mathrm{ g}) .<br/>(e) 32CaCO( s)CaO( s)CO(g)+ .(g) 222HI( g)H( g)I(g)+<br/>Có bao nhiêu cân bằng hoá học không bị chuyển dịch khi thay đổi áp suất?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de01_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất khí: NO, NO<sub>2</sub>, N<sub>2</sub>O, SO<sub>2</sub> và N<sub>2</sub>. Có bao nhiêu chất khí là nguyên nhân góp phần gây ra hiện tượng mưa acid?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de01_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Hỗn hợp X gồm N<sub>2</sub> và H<sub>2</sub> có tỉ lệ mol tương ứng là 1 : 4. Nung nóng X trong bình kín ở nhiệt độ khoảng 450 <sup>o</sup>C có bột Fe xúc tác, thu được hỗn hợp khí Y có tỉ khối so với H<sub>2</sub> bằng 4. Hiệu suất của phản ứng tổng hợp NH<sub>3</sub> là bao nhiêu phần trăm?",
        "images": [],
        "correctAnswer": "25",
        "explanation": "Đáp án: 25.<br/>Phương trình hoá học: N<sub>2</sub> + 3H<sub>2</sub>⇌ 2NH<sub>3</sub><br/>Ban đầu: 1 4 0 mol<br/>Phản ứng: x 3x 2x mol<br/>Sau phản ứng: (1 – x) (4 – 3x) 2x mol<br/>Bảo toàn khối lượng: XYXYXXYYYYYXnM58mmn.Mn.Mn4,5molnn7,2M=Û=Þ=Û=Þ=<br/>Mà n<sub>Y</sub> = 5 – 2x = 4,5 x = 0,25<br/>Hiệu suất phản ứng tính theo N<sub>2</sub> (do 1/1 < 4/3)<br/>Ta có: 0,25H .100% 25%1== .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de01_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dung dịch HNO<sub>3</sub> loãng tác dụng với các chất sau: NH<sub>3</sub>, CaCO<sub>3</sub>, Ag, NaOH và Fe<sub>3</sub>O<sub>4</sub>. Có bao nhiêu phản ứng mà trong đó HNO<sub>3</sub> thể hiện tính oxi hóa?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa11_gk1_de02",
    "code": "H11-GK1-02",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de02_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi ở trạng thái cân bằng, mối quan hệ giữa tốc độ phản ứng thuận (v<sub>t</sub>) và tốc độ phản ứng nghịch (v<sub>n</sub>) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "v<sub>t</sub> > v<sub>n</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "v<sub>t</sub> < v<sub>n</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "v<sub>t</sub> = v<sub>n</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "v<sub>t</sub> = v<sub>n</sub> = 0",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de02_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không phải là chất điện li?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>5</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaCl",
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
            "text": "NaOH",
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
        "id": "hoa11_gk1_de02_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khí nào phổ biến nhất trong khí quyển Trái Đất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Oxygen",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nitrogen",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ozone",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Argon",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de02_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để xác định nồng độ dung dịch HCl bằng phương pháp chuẩn độ acid-base, cho dung dịch HCl (sử dụng chỉ thị phenolphthalein) phản ứng vừa đủ với",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dung dịch NaClO đã biết nồng độ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chất rắn Fe(OH)<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dung dịch NaOH đã biết nồng độ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chất rắn CaCO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de02_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số cặp electron liên kết trong phân tử NH<sub>3</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1",
            "isCorrect": false
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
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de02_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các phát biểu sau, phát biểu nào không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở điều kiện thường, NH<sub>3</sub> là chất khí không màu",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khí NH<sub>3</sub> nặng hơn không khí",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khí NH<sub>3</sub> dễ hoá lỏng, tan nhiều trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khí NH<sub>3</sub> có mùi khai, xốc",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa11_gk1_de02_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nhận định sau: Phân tử ammonia và ion ammonium đều<br/>(1) chứa liên kết cộng hóa trị; (2) là base Bronsted trong nước;<br/>(3) là acid Bronsted trong nước; (4) chứa nguyên tử N có số oxi hóa là -3.<br/>Số nhận định đúng là",
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
            "text": "4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3",
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
        "id": "hoa11_gk1_de02_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hằng số cân bằng K<sub>C</sub> của một phản ứng thuận nghịch phụ thuộc vào yếu tố nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nồng độ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Áp suất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất xúc tác",
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
        "id": "hoa11_gk1_de02_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng phú dưỡng là một biểu hiện của môi trường ao, hồ bị ô nhiễm do dư thừa các chất dinh dưỡng, Sự dư thừa dinh dưỡng chủ yếu do hàm lượng các ion nào sau đây vượt quá mức cho phép?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sodium, potassium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Calcium, magnesium",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nitrate, phosphate",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chloride, sulfate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa11_gk1_de02_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "“Đất chua” là một khái niệm dân gian để chỉ loại đất có môi trường acid, vậy pH của “đất chua” có giá trị",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhỏ hơn 7",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bằng 7",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "lớn hơn 7",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "bằng 0",
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
        "id": "hoa11_gk1_de02_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ammonia (NH<sub>3</sub>) không có ứng dụng nào sau đây trong công nghiệp?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Làm nguyên liệu để điều chế khí N<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên liệu sản xuất phân bón hoá học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Làm nguyên liệu sản xuất HNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất làm lạnh trong hệ thống làm lạnh",
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
        "id": "hoa11_gk1_de02_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hoá học sau: 4NH<sub>3</sub>(g) + 5O<sub>2</sub> ⇌ 4NO(g) + 6H<sub>2</sub>O(g) Δ<sub>r</sub>H°<sub>298</sub> = –905 kJ.<br/>Yếu tố nào sau đây cần tác động để cân bằng trên chuyển dịch sang phải?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giảm nhiệt độ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tăng áp suất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Giảm nồng độ của O<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thêm xúc tác Pt",
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
        "id": "hoa11_gk1_de02_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dựa vào công thức cấu tạo của nitric acid, phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen có số oxi hóa +5, là số oxi hóa cao nhất của nitrogen",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết O-H phân cực mạnh về phía nguyên tử hydrogen",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phân tử nitric acid có chứa một liên kết cho nhận",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tử nitric acid phân cực",
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
        "id": "hoa11_gk1_de02_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phòng thí nghiệm, người ta có thể phân biệt muối ammonium với một số muối khác bằng cách cho nó tác dụng với dung dịch base. Hiện tượng nào xảy ra?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thoát ra một chất khí màu lục nhạt, làm xanh giấy quỳ tím ẩm",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thoát ra một chất khí không màu, làm xanh giấy quỳ tím ẩm",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thoát ra một chất khí màu nâu đỏ, làm xanh giấy quỳ tím ẩm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thoát ra một chất khí không màu, làm hồng giấy quỳ tím ẩm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa11_gk1_de02_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng: N<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ (3000°C hoặc tia lửa điện) 2NO(g).<br/>Biết năng lượng liên kết được cho trong bảng sau:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">Liên kết</th><th class=\"px-2 py-1 border border-slate-300\">N≡N</th><th class=\"px-2 py-1 border border-slate-300\">O=O</th><th class=\"px-2 py-1 border border-slate-300\">N=O</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Năng lượng liên kết (kJ/mol)</td><td class=\"px-2 py-1 border border-slate-300\">945</td><td class=\"px-2 py-1 border border-slate-300\">498</td><td class=\"px-2 py-1 border border-slate-300\">631</td></tr></table></div><br/>Giá trị nhiệt tạo thành chuẩn của NO(g) theo năng lượng liên kết là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+181 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "-181 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+90,5 kJ/mol",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "-90,5 kJ/mol",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de02_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các loại bim bim (snack) là món yêu thích của nhiều người, nhất là các bạn trẻ. Lượng bim bim trong các gói thường chỉ chiếm một nửa thể tích, phần còn lại là khí nitrogen. Lí do khí nitrogen được bơm vào gói bim bim là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "diệt khuẩn để bảo quản bim bim lâu hơn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tăng tính thẩm mĩ của gói bim bim",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tăng khối lượng cho gói bim bim",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tạo môi trường trơ bảo quản bim bim",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa11_gk1_de02_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo thuyết Bronsted – Lowry, dãy gồm các ion và chất nào sau đây là acid?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe<sup>2+</sup>, HCl, PO<sub>4</sub><sup>3-</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CO<sub>3</sub><sup>2-</sup>, SO<sub>3</sub><sup>2-</sup>, PO<sub>4</sub><sup>3-</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na<sup>+</sup>, H<sup>+</sup>, Al<sup>3+</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe<sup>3+</sup>, Al<sup>3+</sup>, H<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_gk1_de02_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ammonium nitrate khi phân huỷ tạo ra các chất khí N<sub>2</sub>, O<sub>2</sub> và toả nhiệt nên được ứng dụng làm",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nguyên liệu điều chế các khí N<sub>2</sub>, O<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phân bón hoá học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chất bảo quản thực phẩm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chất nổ trong khai thác quặng",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa11_gk1_de02_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Hình vẽ bên mô tả sự biến thiên tốc độ phản ứng thuận và phản ứng nghịch theo thời gian của phản ứng: H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g) (*)",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de2_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng đạt trạng thái cân bằng sau thời điểm t.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hằng số cân bằng của phản ứng (*) là =C22[HI]K[H].[I] .",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tại thời điểm t, số mol của các chất H<sub>2</sub>, I<sub>2</sub> và HI đều bằng nhau.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu nồng độ các chất ở trạng thái cân bằng lần lượt là H<sub>2</sub>: 0,02 M; I<sub>2</sub>: 0,02 M và HI: 0,16 M thì hằng số cân bằng của phản ứng (*) là 64.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Phản ứng đạt trạng thái cân bằng tại thời điểm t.<br/>b. Sai. =2C22[HI]K[H].[I]<br/>c. Sai. Tại thời điểm t, số mol các chất không thay đổi.<br/>d. Đúng. ==2C22[HI]K64.[H].[I]",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de02_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Giá trị pH của một dung dịch (X) tăng từ 3 đến 5.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nồng độ ion H<sup>+</sup> của dung dịch giảm 20 lần.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch ban đầu là một acid có nồng độ H<sup>+</sup> là 0,001 M.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ OH<sup>-</sup> của dung dịch khi pH = 5 là 10<sup>-9</sup>M.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Giá trị pH tăng thì độ acid giảm.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Nồng độ H<sup>+</sup> giảm 10<sup>2</sup> = 100 lần.<br/>b. Đúng. [H<sup>+</sup>] = 10<sup>-3</sup> M.<br/>c. Đúng. Khi pH = 5 thì pOH = 9 [OH<sup>-</sup>] = 10<sup>-9</sup>M.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de02_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Nước mưa thông thường có pH khoảng 5,6 chủ yếu do có carbon dioxide hoà tan tạo môi trường acid yếu. Khi nước mưa có pH nhỏ hơn 5,6 thì gọi là hiện tượng mưa acid.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tác nhân chính gây mưa acid là hỗn hợp khí CO và CO<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các hoạt động của núi lửa, cháy rừng, sấm sét cũng góp phần gây ra hiện tượng mưa acid.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mưa acid tác động xấu đối với môi trường, con người và sinh vật, hủy hoại các công trình kiến trúc,…",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Con người tiêu thụ nhiều nguyên liệu tự nhiên như than đá, dầu mỏ,… là một trong những nguyên nhân gây ra hiện tượng mưa acid.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Tác nhân chính gây mưa acid là SO<sub>2</sub> và NO<sub>x</sub>.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de02_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Hình vẽ sau mô tả thí nghiệm điều chế khí X trong phòng thí nghiệm:",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de2_image8.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khí X có khả năng làm xanh giấy quỳ tím ẩm.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Bình tam giác thu khí úp ngược vì khí X nhẹ hơn không khí.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ống nghiệm trong hình bị lắp sai (phải hướng miệng lên trên).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Vai trò của quỳ ẩm là để phát hiện khí X đã đầy bình thu khí.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Ca(OH)<sub>2</sub> + NH<sub>4</sub>Cl CaCl<sub>2</sub> + NH<sub>3</sub> (X) + H<sub>2</sub>O<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Phải lắp miệng ống hướng xuống, việc lắp dốc xuống đề phòng hóa chất bị ẩm, có hơi nước thoát ra và ngưng tụ ở miệng ống không bị chảy ngược xuống đáy ống gây vỡ ống.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de02_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau đây: Ca(OH)<sub>2</sub>, HClO, HF, KH<sub>2</sub>PO<sub>4</sub>, NaCl, CuSO<sub>4</sub> và CH<sub>3</sub>COOH. Có bao nhiêu chất trong dãy thuộc loại chất điện li mạnh?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de02_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Một loại dung dịch nước rửa bát có nồng độ ion OH- là 9,510- mol/L. Giá trị pH của dung dịch bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "4.5",
        "explanation": "Đáp án: 4,5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de02_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các hợp chất và ion sau: NH<sub>3</sub>, NaNO<sub>3</sub>, NH<sub>4</sub><sup>+</sup>, N<sub>2</sub>O và AlN. Các bao nhiêu hợp chất và ion mà trong đó số oxi hóa của nguyên tử N là –3?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de02_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dung dịch HNO<sub>3</sub> tác dụng với các chất sau: NH<sub>3</sub>, CuO, CaCO<sub>3</sub>, Fe và NaOH. Có bao nhiêu phản ứng trong đó HNO<sub>3</sub> đóng vai trò acid Bronsted?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de02_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Hỗn hợp X gồm N<sub>2</sub> và H<sub>2</sub> có tỉ lệ mol tương ứng là 1 : 3. Nung nóng X trong bình kín (450℃, xúc tác Fe) một thời gian, thu được hỗn hợp khí có số mol giảm 5% so với ban đầu. Hiệu suất của phản ứng tổng hợp NH<sub>3</sub> là bao nhiêu phần trăm?",
        "images": [],
        "correctAnswer": "10",
        "explanation": "Đáp án: 10.<br/>Chọn 22NHn1moln3mol=Þ= Tổng số mol khí ban đầu là 4 mol Þ n<sub>khí giảm</sub> = 4.5% = 0,2 mol<br/>32223N(g) H(g)NH(g)Ban ñaàu: 1 3(mol)Phaûn öùng: x 3x+2x (mol)Caân baèng: 1-x 3-3x2x (mol)<br/>Tổng số mol khí sau khi phản ứng là 1 – x + 3 – 3x + 2x = 4 – 2x (mol)<br/>Số mol khí giảm so với ban đầu là 2x Þ 2x = 0,2 Þ x = 0,1 Þ H% = 0,1.100%10%.1=",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de02_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Nabica là một loại thuốc có thành phần chính là NaHCO<sub>3</sub>, được dùng để trung hòa bớt lượng acid HCl dư trong dạ dày. Giả thiết nồng độ dung dịch HCl trong dạ dày là 0,035 M, thể tích dung dịch HCl được trung hòa khi bệnh nhân uống 0,588 g bột NaHCO<sub>3</sub> là bao nhiêu mL?",
        "images": [],
        "correctAnswer": "200",
        "explanation": "Đáp án: 200.<br/>33058871084NaHCO,n.mol-==<br/>32233710710NaHCOHClNaClCOHO..mol--+®++®<br/>3710022000035ddHCl.V,LmL,-Þ===<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa11_gk1_de03",
    "code": "H11-GK1-03",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de03_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng thuận nghịch là phản ứng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "xảy ra theo hai chiều ngược nhau trong cùng điều kiện",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "có phương trình hoá học được biểu diễn bằng mũi tên một chiều",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chỉ xảy ra theo một chiều nhất định",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xảy ra giữa hai chất khí",
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
        "id": "hoa11_gk1_de03_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không phải chất điện li?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaOH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de03_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Oxide của nitrogen được tạo thành khi nitrogen trong không khí tác dụng với các gốc tự do được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NO<sub>x</sub> tức thời",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NO<sub>x</sub>nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NO<sub>x</sub> nhiên liệu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NO<sub>x</sub>tự nhiên",
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
        "id": "hoa11_gk1_de03_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo thuyết Bronsted-Lowry, chất nào sau đây có vai trò là một base trong dung dịch?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "KNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de03_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu trúc không gian của phân tử NH<sub>3</sub> có dạng hình",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chóp tư giác",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chóp tam giác",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tứ diện đều",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tam giác đều",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de03_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để nhận biết ion muối NH<sub>4</sub><sup>+</sup> trong dung dịch, thuốc thử cần dùng là dung dịch chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaOH",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NaNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "BaCl<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa11_gk1_de03_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quan sát hình bên dưới và từ dữ kiện năng lượng liên kết trong phân tử N<sub>2</sub>, dự đoán về độ bền phân tử và khả năng phản ứng của nitrogen ở nhiệt độ thường.<br/>.",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de3_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kém bền và hoạt động hóa học mạnh ở nhiệt độ thường",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Bền và trơ về mặt hóa học mạnh ở nhiệt độ thường",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Bền và hoạt động hóa học mạnh ở nhiệt độ thường",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Kém bền và trơ về mặt hóa học mạnh ở nhiệt độ thường",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa11_gk1_de03_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Yếu tố nào sau đây luôn luôn không làm dịch chuyển cân bằng của hệ phản ứng?",
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
            "text": "Áp suất",
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
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa11_gk1_de03_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây được sử dụng làm phân ammophos?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(NH<sub>4</sub>)<sub>2</sub>HPO<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>4</sub>NO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>4</sub>Cl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaH<sub>2</sub>PO<sub>4</sub>",
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
        "id": "hoa11_gk1_de03_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch acid HCl có nồng độ 0,01M có pH bằng bao nhiêu?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1,0",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2,0",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "11,0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "12,0",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa11_gk1_de03_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình hóa học của phản ứng nào sau đây chứng tỏ ammonia là một chất khử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>–</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2NH<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4NH<sub>3</sub> + 5O<sub>2</sub> ⎯⎯Pt, t°→ 4NO + 6H<sub>2</sub>O",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa11_gk1_de03_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hóa học sau: CaCO<sub>3</sub>(s) ⇌ CaO(s) + CO<sub>2</sub>(g) ; Δ<sub>r</sub>H°<sub>298</sub> = 176 kJ<br/>Yếu tố nào sau đây làm cho cân bằng dịch chuyển theo chiều thuận?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tăng nồng độ khí CO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tăng áp suất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Giảm nhiệt độ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tăng nhiệt độ",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa11_gk1_de03_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng phú dưỡng là một biểu hiện của môi trường ao, hồ bị ô nhiễm do dư thừa các chất dinh dưỡng, Sự dư thừa dinh dưỡng chủ yếu do hàm lượng các ion nào sau đây vượt quá mức cho phép?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sodium, potassium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Calcium, magnesium",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nitrate, phosphate",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chloride, sulfate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa11_gk1_de03_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp, ammoniac được tổng hợp theo quá trình Haber, theo phương trình hóa học sau: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⎯⎯(400 - 600°C, 200 bar, Fe)→ ⇌ 2NH<sub>3</sub>(g) Δ<sub>r</sub>H°<sub>298</sub> = –92 kJ<br/>Tại thời điểm cân bằng, khí thu được tại buồng phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NH<sub>3</sub> và N<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub> và NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>3</sub>, H<sub>2</sub> và N<sub>2</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa11_gk1_de03_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nitric acid (HNO<sub>3</sub>) thường được sử dụng để phá mẫu quặng trong việc nghiên cứu, xác định hàm lượng các kim loại trong quặng là do nitric acid có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tính acid mạnh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tính khử mạnh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tính oxi hóa mạnh",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tính base mạnh",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de03_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức hoá học của diêm tiêu Chile là NaNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nitrogen lỏng được sử dụng để đóng băng và kiểm soát dòng chảy trong các đường ống",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Diêm tiêu Chile được sử dụng để sản xuất phân bón",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sử dụng nitrogen lỏng để làm căng vỏ bao bì thực phẩm để tiết kiệm chi phí",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa11_gk1_de03_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cân bằng sau tồn tại trong dung dịch: CH<sub>3</sub>COOH + H<sub>2</sub>O ⇌ CH<sub>3</sub>COO<sup>–</sup> + H<sub>3</sub>O<sup>+</sup>. Cân bằng sẽ biến đổi như thế nào khi nhỏ vào vài giọt dung dịch CH<sub>3</sub>COONa?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chuyển dịch theo chiều thuận",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chuyển dịch theo chiều nghịch",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cân bằng không bị chuyển dịch",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "lúc đầu chuyển dịch theo chiều thuận sau đó theo chiều nghịch",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_gk1_de03_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử nào sau đây có liên kết cho – nhận?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "N<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HNO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa11_gk1_de03_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng thuận nghịch: H<sub>2</sub>(g) + I<sub>2</sub>(g)  2HI(g) (*).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ phản ứng thuận giảm dần và tốc độ phản ứng nghịch tăng dần đến khi phản ứng đạt trạng thái cân bằng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Theo thời gian, nồng độ của I<sub>2</sub> và H<sub>2</sub> của phản ứng (*) giảm dần cho đến khi bằng 0.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biểu thức hằng số cân bằng của phản ứng (*) là: 2C22[HI]K=[H][I]",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi phản ứng (*) đạt đến trạng thái cân bằng, phản ứng dừng lại.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Nồng độ H<sub>2</sub>, I<sub>2</sub> giảm dần theo thời gian cho đến khi đạt trạng thái cân bằng nồng độ của I<sub>2</sub>, H<sub>2</sub> không thay đổi nữa.<br/>c. Đúng.<br/>d. Sai. Phản ứng vẫn tiếp tục xảy ra ở trạng thái cân bằng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de03_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho các nhận định sau về phân tử ammonia và ion ammonium:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả hai đều chứa liên kết cộng hóa trị.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ammonia là base Bronsted trong nước còn ion ammonium là acid Bronsted trong nước.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cả hai đều có dạng hình học là chóp tam giác.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cả hai đều chứa nguyên tử nitrogen có số oxi hóa là –3.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Ion ammonium có dạng học học là tứ diện.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de03_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Tác hại của hiện tượng phú dưỡng:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cản trở sự hấp thụ ánh sáng mặt trời vào nước, giảm sự quang hợp của thực vật thủy sinh.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Rong, tảo phát triển mạnh làm tăng hàm lượng khí oxygen hòa tan trong nước, gây mất cân bằng sinh thái.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Xác rong tảo phân hủy gây ô nhiễm môi trường nước, không khí và tạo chất bùn lắng xuống lòng ao, hồ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguồn thuỷ sản trong ao hồ bị suy kiệt và xuất hiện mùi hôi thối khó chịu.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Rong, tảo phát triển mạnh làm tăng giảm lượng khí oxygen.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de03_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Một học sinh thực hiện thí nghiệm chuẩn độ để xác định nồng độ dung dịch hydrochloric acid (HCl) bằng dung dịch chuẩn sodium hydroxide (NaOH) 0,100 M với chất chỉ thị methyl orange (MO). Biết rằng MO sẽ có màu đỏ trong môi trường có pH < 3,2, màu vàng trong môi trường có pH > 4,4, và màu cam trong khoảng pH từ 3,2 đến 4,4. Để thực hiện chuẩn độ, học sinh này đã cho dung dịch NaOH 0,100 M (trên burette) nhỏ từ từ vào bình tam giác chứa sẵn 10,00 mL dung dịch HCl và 3 giọt dung dịch MO, đến khi dung dịch vừa chuyển sang màu cam thì dừng chuẩn độ. Biết rằng nếu dung dịch chỉ chứa sodium chloride (NaCl) thì có pH bằng 7.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có thể cho chất chỉ thị MO vào dung dịch NaOH trong burette thay vì cho vào bình tam giác.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nồng độ thực tế của dung dịch HCl sẽ lớn hơn nồng độ tính được từ kết quả thí nghiệm trên.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu sử dụng dung dịch phenolphthalein thay cho chỉ thị MO trong thí nghiệm trên thì học sinh cần chuẩn độ đến khi dung dịch trong bình tam giác vừa mới mất màu hồng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu thể tích dung dịch NaOH 0,100 M đã dùng trong 3 lần chuẩn độ lần lượt là 12,90 mL, 13,00 mL, 13,00 mL thì nồng độ dung dịch HCl xác định được trong thí nghiệm này là 0,389 M.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Chất chỉ thị phải nằm trong bình tam giác.<br/>b. Sai. Nồng độ HCl thực tế phải luôn nhỏ hơn khi tính từ kết quả thí nghiệm.<br/>c. Sai. Xuất hiện màu hồng.<br/>d. Sai.",
        "explanationImages": [
          "/assets/hoa11/midterm/h11_gk1_de3_image16.png"
        ],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de03_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các nguồn phát thải khí NO<sub>x</sub>: (a) Núi lửa phun trào; (b) Cháy rừng; (c) Phân hủy các hợp chất hữu cơ trong tự nhiên; (d) Hoạt động vận tải; (e) Sản xuất công nghiệp, nông nghiệp. Có bao nhiêu nguồn phát thải khí NO<sub>x</sub> nhân tạo?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de03_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Khi đốt than trong điều kiện thiếu oxygen (O<sub>2</sub>), khí carbon dioxide (CO<sub>2</sub>) sinh ra có thể phản ứng với carbon theo phản ứng thuận nghịch sau: CO<sub>2</sub>(g) + C(s) ⇌ 2CO(g).<br/>Khi phản ứng trên đạt trạng thái cân bằng, có bao nhiêu tác động trong các tác động dưới đây làm cân bằng chuyển dịch theo chiều thuận?<br/>(1) Tăng nồng độ khí CO<sub>2</sub>. (2) Tăng áp suất hệ bằng cách nén khí.<br/>(3) Cho thêm carbon. (4) Giảm nồng độ khí carbon monoxide (CO).",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>(1), (2) làm cân bằng chuyển dịch theo chiều thuận<br/>(2) Tăng áp suất cân bằng chuyển dịch theo chiều làm giảm số mol khí là chiều nghịch.<br/>(3) Carbon là chất rắn nên thêm carbon không làm ảnh hưởng cân bằng chuyển dịch.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de03_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "pH của dung dịch thu được sau khi trộn 40 mL dung dịch HCl 0,5 M với 60 mL dung dịch NaOH 0,5 M bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "13",
        "explanation": "Đáp án: 13.<br/>n<sub>HCl</sub> = 0,02 mol; n<sub>NaOH</sub> = 0,03 mol<br/>H<sup>+</sup> + OH<sup>–</sup> H<sub>2</sub>O<br/>Þ OHn <sub>dư</sub> = 0,01 mol Þ [OH<sup>-</sup>] = 0,1 M Þ pOH = 1 Þ pH = 13.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de03_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho cân bằng: N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g). Ban đầu có 0,02 mol N<sub>2</sub>O<sub>4</sub> trong bình kín có thể tích 500 mL, khi phản ứng đạt trạng thái cân bằng thì nồng độ của N<sub>2</sub>O<sub>4</sub> là 0,0055 M. Giá trị của hằng số cân bằng K<sub>C</sub> là bao nhiêu? (Kết quả làm tròn đến hàng phần trăm).",
        "images": [],
        "correctAnswer": "0.87",
        "explanation": "Đáp án: 0,87.<br/>Nồng độ N<sub>2</sub>O<sub>4</sub> ban đầu là 0,020,04M.0,5=<br/>PTHH: N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g)<br/>Ban đầu: 0,04<br/>Phản ứng: x → 2x<br/>Cân bằng: 0,04 – x 2x<br/>Ta có 0,04 – x = 0,0055 Þ x = 0,0345 M Þ [NO<sub>2</sub>] = 0,069 M<br/>Þ 222C24[NO]0,069K0,866[NO]0,0055==» .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de03_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng: Fe<sub>3</sub>O<sub>4</sub> + HNO<sub>3</sub> → Fe(NO<sub>3</sub>)<sub>3</sub> + NO + H<sub>2</sub>O. Sau khi cân bằng, hệ số tỉ lượng của HNO<sub>3</sub> trong phương trình hoá học trên là bao nhiêu?",
        "images": [],
        "correctAnswer": "28",
        "explanation": "Đáp án: 28.<br/>",
        "explanationImages": [
          "/assets/hoa11/midterm/h11_gk1_de3_image21.png"
        ],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de03_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Cho hỗn hợp khí (X) gồm N<sub>2</sub>, H<sub>2</sub>, NH<sub>3</sub> có tỉ khối so với khí hydrogen là 8. Dẫn hỗn hợp khí (X) đi qua dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, dư thì thể tích khí còn lại một nửa. Thành phần % theo thể tích của khí N<sub>2</sub> trong hỗn hợp (X) là bao nhiêu?",
        "images": [],
        "correctAnswer": "25",
        "explanation": "Đáp án: 25.<br/>2232NH2hhNH3N:x(mol)%V%V25%28x2y17(xy)H:y(mol)M16xy%V50%2x2yNH:xy(mol)ì==ì+++ïïÞ==Þ=Þíí=+ïïî+î<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa11_gk1_de04",
    "code": "H11-GK1-04",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de04_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cân bằng hoá học là một trạng thái của phản ứng thuận nghịch tại đó",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tốc độ phản ứng thuận bằng hai lần tốc độ phản ứng nghịch",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tốc độ phản ứng thuận bằng một nửa tốc độ phản ứng nghịch",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tốc độ phản ứng không thay đổi",
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
        "id": "hoa11_gk1_de04_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trường hợp nào sau đây dẫn điện được?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "KCl rắn, khan",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CaCl<sub>2</sub> rắn, khan",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Glucose tan trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCl hòa tan trong nước",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de04_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bậc liên kết và năng lượng liên kết trong phân tử nitrogen (N<sub>2</sub>) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2 và 418 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1 và 386 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3 và 367 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3 và 945 kJ/mol",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de04_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Giá trị pH của một dung dịch được tính theo biểu thức nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "pH = log[OH<sup>-</sup>]",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "pH = -log[H<sup>+</sup>]",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "pH = -log[OH<sup>-</sup>]",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "pH = log[H<sup>+</sup>]",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de04_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho công thức Lewis của phân tử NH<sub>3</sub> như sau:<br/>Trong phân tử NH<sub>3</sub>, nguyên tử nitrogen",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de4_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "còn một electron không liên kết",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "không còn electron liên kết",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "còn một cặp electron không liên kết",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "còn hai cặp elelctron không liên kết",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de04_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khí nào sau đây dễ tan trong nước do tạo được liên kết hydrogen với nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hydrogen",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ammonia",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Oxygen",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa11_gk1_de04_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nước, phân tử/ion nào sau đây thể hiện vai trò là acid Bronsted?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4NH+",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3NO-",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa11_gk1_de04_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận xét nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phản ứng một chiều, chất sản phẩm không phản ứng được với nhau tạo thành chất đầu",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phản ứng thuận nghịch, các chất sản phẩm có thể phản ứng với nhau để tạo thành chất đầu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng một chiều là phản ứng luôn xảy ra không hoàn toàn",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thuận nghịch là phản ứng xảy ra theo hai chiều trái ngược nhau trong cùng điều kiện",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa11_gk1_de04_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là chất điện li mạnh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HF",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaOH",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>S",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa11_gk1_de04_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thời điểm kết thúc chuẩn độ là khi nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Là thời điểm khi các phản ứng xảy ra hoàn toàn, ta không tiến hành chuẩn độ nữa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Là thời điểm khi chất chỉ thị có sự thay đổi đặc tính mà ta có thể quan sát được",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Là thời điểm mà phép chuẩn độ kết thúc tương ứng theo sự thay đổi các đặc trưng của chất chỉ thị",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Là thời điểm mà phép chuẩn độ kết thúc tương ứng theo sự thay đổi các đặc trưng của chất chuẩn độ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa11_gk1_de04_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để nhận biết dung dịch NH<sub>3</sub> đặc, người ta chuẩn bị hai đầu đũa thủy tinh quấn bong. Đũa 1 nhúng vào dung dịch HCl đặc, đũa 2 nhúng vào dung dịch NH<sub>3</sub> đặc, sau đó đưa lại gần nhau. Hiện tượng xảy ra là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "xuất hiện “khói” trắng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "xuất hiện “khói” tím",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "không có hiện tượng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xuất hiện “khói” vàng",
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
        "id": "hoa11_gk1_de04_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng sau trong bình kín: 2NO<sub>2</sub>(g) ⇌ N<sub>2</sub>O<sub>4</sub>(g).<br/>(màu nâu đỏ) (không màu)<br/>Biết khi hạ nhiệt độ của bình thì màu nâu đỏ nhạt dần. Phản ứng thuận có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Δ<sub>r</sub>H°<sub>298</sub> > 0, phản ứng tỏa nhiệt",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Δ<sub>r</sub>H°<sub>298</sub> < 0, phản ứng tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Δ<sub>r</sub>H°<sub>298</sub> > 0, phản ứng thu nhiệt",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Δ<sub>r</sub>H°<sub>298</sub> < 0, phản ứng thu nhiệt",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa11_gk1_de04_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nitrogen trong không khí có vai trò nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cung cấp đạm tự nhiên cho cây trồng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hình thành sấm sét",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tham gia quá trình quang hợp của cây",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Duy trì sự hô hấp của người và động vật",
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
        "id": "hoa11_gk1_de04_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là không đúng khi nói về ammonia?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong công nghiệp, ammonia thường được sử dụng với vai trò chất làm lạnh (chất sinh hàn)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Do có hàm lượng nitrogen cao (82,35% theo khối lượng) nên ammonia được sử dụng làm phân đạm rất hiệu quả",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phần lớn ammonia được dùng phản ứng với acid để sản xuất các loại phân đạm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Quá trình tổng hợp ammonia từ nitrogen và hydrogen là quá trình thuận nghịch nên không thể đạt hiệu suất 100%",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa11_gk1_de04_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mưa acid gây tác động xấu đối với môi trường, con người và sinh vật, rõ rệt nhất khi nước mưa có giá trị pH dưới 4,5. Tác động nào sau đây không phải của mưa acid?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ăn mòn các công trình xây dựng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ăn mòn vật liệu kim loại của các công trình ngoài trời",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Giảm pH của đất và nước, từ đó ảnh hưởng tiêu cực đến cây trồng, thủy sản,…",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Gây hiệu ứng nhà kính",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de04_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hoá học sau: 2CO<sub>2</sub>(g) ⇌ 2CO(g) + O<sub>2</sub>(g). Ở T <sup>o</sup>C, nồng độ các chất ở trạng thái cân bằng như sau: [CO<sub>2</sub>] = 1,2 M, [CO] = 0,35 M và [O<sub>2</sub>] = 0,15 M. Hằng số cân bằng của phản ứng tại T <sup>o</sup>C là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1,276.10<sup>-2</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4,375.10<sup>-2</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "78,36",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "22,85",
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
        "id": "hoa11_gk1_de04_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để giảm sốt hoặc giảm đau, người ta có thể dùng túi chườm lạnh chứa hóa chất. Muối thường được sử dụng trong túi chườm lạnh là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NH<sub>4</sub>Cl và NH<sub>4</sub>NO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "KCl và NaNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NaNO<sub>3</sub> và NaCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "KNO<sub>3</sub> và KCl",
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
        "id": "hoa11_gk1_de04_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dựa vào công thức cấu tạo của nitric acid, phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen có số oxi hóa +5, là số oxi hóa cao nhất của nitrogen",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết O-H phân cực mạnh về phía nguyên tử hydrogen",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phân tử nitric acid có chứa một liên kết cho nhận",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tử nitric acid phân cực",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa11_gk1_de04_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho hai phản ứng hóa học:<br/>(1) N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⎯⎯(xt, t°, p)→ ⇌ 2NH<sub>3</sub>(g) Δ<sub>r</sub>H°<sub>298</sub> = –92 kJ<br/>(2) N<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ (3000°C hoặc tia lửa điện) 2NO(g) Δ<sub>r</sub>H°<sub>298</sub> = 180 kJ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phản ứng (1), nitrogen đóng vai trò là chất oxi hóa.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phản ứng (2), nitrogen đóng vai trò là chất khử.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng (1) là quá trình đầu tiên trong quy trình sản xuất nitric acid của Ostwald.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng (2) xảy ra trong những cơn mưa dông kèm theo sấm sét.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. (1) gọi là quá trình Haber – Bosch.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de04_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho cốc (a) chứa dung dịch HCl 0,1M và cốc (b) chứa dung dịch CH<sub>3</sub>COOH 0,1M.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các phần tử có trong dung dịch cốc (a) gồm H<sup>+</sup>, Cl<sup>–</sup> và H<sub>2</sub>O.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các phần tử có trong dung dịch cốc (b) gồm H<sup>+</sup>, CH<sub>3</sub>COO<sup>–</sup> và H<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ mol/L của ion H<sup>+</sup> trong cốc (a) bằng nồng độ ion H<sup>+</sup> trong cốc (b).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch trong cốc (a) dẫn điện tốt hơn dung dịch trong cốc (b).",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>HCl H<sup>+</sup> + Cl<sup>-</sup> và CH<sub>3</sub>COOH  CH<sub>3</sub>COO<sup>-</sup> + H<sup>+</sup><br/>a. Đúng.<br/>b. Sai. Thiếu CH<sub>3</sub>COOH vì nó là chất điện li yếu.<br/>c. Sai. [H<sup>+</sup>] trong HCl > [H<sup>+</sup>] trong CH<sub>3</sub>COOH.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de04_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Trong cơ thể người, hemoglobin (Hb) kết hợp oxygen phản ứng của người được biểu diễn đơn giản như sau: 22HbOHbO+ ⇌ <br/>Ở phổi, nồng độ oxygen lớn nên cân bằng trên chuyển dịch sang phải, hemoglobin kết hợp với oxygen. Khi đến các mô, nồng độ oxygen thấp, cân bằng trên chuyển dịch sang trái, giải phóng oxygen. Nếu thiếu oxygen ở não, con người có thể bị đau đầu, chóng mặt.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cân bằng trên không tuân theo nguyên lí chuyển dịch cân bằng Le Chatelier.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để lượng oxygen lên não nhiều hơn thì cần tăng lượng oxygen hít vào phổi.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Để lượng oxygen lên não nhiều hơn cần giảm lượng oxygen hít vào phổi.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi lên núi cao, một số người gặp hiện tượng đau đầu, chóng mặt là do nồng độ oxygen trong không khí tăng làm giảm lượng oxygen đến các mô não.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Các cân bằng hóa học đều tuân theo nguyên lí chuyển dịch cân bằng Le Chatelier.<br/>b. Đúng. Khi hàm lượng oxygen hít vào phổi nhiều hơn, cân bằng chuyển dịch sang chiều thuận làm tăng nồng độ HbO<sub>2</sub> ở phổi và ở mô não thì chuyển dịch theo chiều nghịch làm tăng nồng độ oxygen Þ cần hít thở sâu, trồng nhiều cây xanh, bảo vệ không khí không bị ô nhiễm để không khí trong lành, nồng độ oxygen trong không khí ổn định.<br/>c. Sai.<br/>d. Sai. Do ở trên núi cao, hàm lượng oxygen loãng, dẫn đến khi ở phổi cân bằng: 22HbOHbO+ chuyển dịch theo chiều nghịch làm lượng HbO<sub>2</sub> tạo thành giảm nên tại các mô như não lượng O<sub>2</sub> giải phóng giảm Þ thiếu O<sub>2</sub> lên não nên bị đau đầu, chóng mặt.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de04_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Phú dưỡng là hiện tượng dư thừa quá nhiều các nguyên tố dinh dưỡng (N, P) trong các nguồn nước làm cho các sinh vật trong nước như vi khuẩn, tảo, rong, rêu,… phát triển nhanh.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên nhân gây ra hiện tượng phú dưỡng do nguồn nước thải nông nghiệp, công nghiệp, sinh hoạt, ... chưa xử lí triệt để thải vào ao hồ.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hiện tượng phú dưỡng làm giảm sự quang hợp của thực vật thủy sinh và làm tăng nguồn oxygen của tôm, cá, … gây mất cân bằng hệ sinh thái.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các loại tôm, cá, … ở ao hồ có hiện tượng phú dưỡng thường khỏe mạnh và béo tốt vì có nguồn chất dinh dưỡng phong phú.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để khắc phục hiện tượng phú dưỡng ta cần xử lí nước thải trước khi thải vào môi trường, sử dụng phân bón đúng liều lượng, khơi thông kênh rạch, ao hồ, lưu thông dòng nước.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai vì hiện tượng phú dưỡng làm giảm nguồn oxygen.<br/>c. Sai vì ao hồ có hiện tượng phú dưỡng thường thiếu oxygen nên sức sống kém.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de04_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Khi tăng nhiệt độ, có bao nhiêu phản ứng chuyển dịch theo chiều thuận?<br/>32CaCO()CaO() + CO()ssg ⇌ or298H>0V<br/>2232SO()O()2SO()ggg+ ⇌ or298H0<V<br/>222CO()HO()H()CO()gggg++ ⇌ or298H0>V<br/>523PCl(g)Cl(g)+PCl(g) ⇌ or298H>0V",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Có 3 phản ứng ( or298H>0V ).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de04_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các dung dịch muối sau: NaNO<sub>3</sub>, K<sub>2</sub>CO<sub>3</sub>, CuSO<sub>4</sub>, Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>, AlCl<sub>3</sub> và KCl. Trong các dung dịch muối trên, có bao nhiêu dung dịch muối có môi trường trung tính?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de04_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho sơ đồ phản ứng sau:<br/>0o22220+ O+ O+ HO + O+ Cu , tt323322xt,tNHNONOHNOCu(NO)NO¾ → ¾ → → → → → → <br/>Mỗi mũi tên là một phản ứng hóa học. Có bao nhiêu phản ứng mà nitrogen đóng vai trò chất khử?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de04_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Hòa tan hết 17,4 gam một hợp kim Cu-Zn bằng dung dịch HNO<sub>3</sub> 30% dư, thu được dung dịch X và 14,874 L khí NO<sub>2</sub> (ở đkc, giả thiết là sản phẩm khử duy nhất của HNO<sub>3</sub>). Thành phần % khối lượng của Cu trong hợp kim ban đầu là bao nhiêu? (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "55.2",
        "explanation": "Đáp án: 55,2.<br/>NO2Cu64x65y17,4Cu:xmolx0,15BTe:2x2yn0,6Zn:ymoly0,120,15.64%m.10055,2%17,4+=ì=ììïÞÞííí+===ïîîîÞ==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de04_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 100 mL dung dịch Ba(OH)<sub>2</sub> 0,15M tác dụng với V mL dung dịch HCl 0,0875M, sau phản ứng thu được dung dịch có pH = 2. Giá trị của V là bao nhiêu?",
        "images": [],
        "correctAnswer": "400",
        "explanation": "Đáp án: 400.<br/>mol OH<sup>-</sup>= 0,03 mol ; mol H<sup>+</sup> = 0,0875 V nol<br/>Dung dịch sau khi trộn pH = 2 → Môi trường axit.<br/>PTHH: H<sup>+</sup>+OH<sup>-</sup> H<sub>2</sub>O<br/>0,03 0,03<br/>mol H<sup>+</sup>dư = 0,0875V- 0,03<br/>Hay (0,0875V-0,03)/(0,1 + V) = 10<sup>-2</sup> → V = 0,4 L = 400 mL.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de04_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Trong bình kín có chứa 80 mol N<sub>2</sub> và 320 mol H<sub>2</sub>, áp suất của hỗn hợp khí ban đầu là 400 bar, nhiệt độ trong bình được giữ không đổi cho đến khi phản ứng đạt đến trạng thái cân bằng thì lượng N<sub>2</sub> đã phản ứng là 25%. Cho biết áp suất của hỗn hợp khí sau phản ứng là bao nhiêu bar?",
        "images": [],
        "correctAnswer": "360",
        "explanation": "Đáp án: 360.<br/>Phương trình hoá học: N<sub>2</sub> + 3H<sub>2</sub>⇌ 2NH<sub>3</sub><br/>Ban đầu: 80 320 0 mol<br/>Phản ứng:80.25% = 20 60 40 mol<br/>Sau phản ứng: 60 260 40 mol<br/>Ta có: 112222Pn40080320P360barPnP6026040+=Þ=Þ=++<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa11_gk1_de05",
    "code": "H11-GK1-05",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de05_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tại nhiệt độ không đổi, ở trạng thái cân bằng,",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nồng độ của các chất trong hỗn hợp phản ứng không thay đổi",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nồng độ của các chất trong hỗn hợp phản ứng vẫn liên tục thay đổi",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phản ứng hoá học không xảy ra",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tốc độ phản ứng hoá học xảy ra chậm dần",
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
        "id": "hoa11_gk1_de05_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đặc điểm nào sau đây là không đúng khi mô tả về acid mạnh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân li hoàn toàn trong nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch nước của chúng dẫn điện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có khả năng nhận H<sup>+</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có khả năng cho H<sup>+</sup>",
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
        "id": "hoa11_gk1_de05_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn các nguyên tố hóa học, nitrogen thuộc nhóm",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "VA",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "IIIA",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "IA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "VIIIA",
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
        "id": "hoa11_gk1_de05_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các dung dịch sau đây có cùng nồng độ 0,10 mol/L, dung dịch nào dẫn điện kém nhất?",
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
            "text": "HCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HI",
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
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de05_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ammonia có tính chất vật lí nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tan tốt trong nước ở nhiệt độ thường",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất khí có màu vàng nâu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nặng hơn không khí",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không màu và không mùi",
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
        "id": "hoa11_gk1_de05_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quá trình Haber – Bosch (Ha-bơ Bớt) là quá trình tổng hợp chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NO",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "N<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NO<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa11_gk1_de05_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp thực phẩm, nitrogen lỏng (D = 0,808 g/mL) được phun vào vỏ bao bì trước khi đóng nắp để làm căng vỏ bao bì. Thể tích khí nitrogen thu được (đkc) khi hóa hơi 1 ml nitrogen lỏng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "646,4 ml",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "808,8 ml",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "715,4 ml",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1095,7 ml",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa11_gk1_de05_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 5 mol H<sub>2</sub> và 5 mol I<sub>2</sub> vào bình kín dung tích 1 lít và nung nóng đến 227^{\\circ} \\mathrm{C} . Đồ thị biểu diễn sự thay đổi nồng độ các chất theo thời gian được cho trong hình sau:<br/>Nồng độ của HI ở trạng thái cân bằng là",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de5_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0,68 M",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "5,00 M",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3,38 M",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "8,64 M",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa11_gk1_de05_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch chất nào sau đây có môi trường base?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "AgNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaClO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "SnCl<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa11_gk1_de05_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình nào sau đây là phương trình ion rút gọn của phản ứng giữa NaOH với HCl trong dung dịch?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na<sup>+</sup> + Cl<sup>-</sup> → NaCl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaOH + H<sup>+</sup> → Na<sup>+</sup> + H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "OH<sup>-</sup> + H<sup>+</sup> → H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaOH + Cl<sup>-</sup> → NaCl + OH<sup>-</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa11_gk1_de05_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nitrogen monoxide được tạo thành khi mưa dông kèm theo sấm sét do phản ứng giữa nitrogen và oxygen trong không khí được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NO<sub>x</sub> tức thời",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NO<sub>x</sub> nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NO<sub>x</sub>nhiên liệu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NO<sub>x</sub> tự nhiên",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa11_gk1_de05_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các yếu tố có thể ảnh hưởng đến cân bằng hoá học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nồng độ, nhiệt độ và chất xúc tác",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nồng độ, áp suất và diện tích bề mặt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nồng độ, nhiệt độ và áp suất",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "áp suất, nhiệt độ và chất xúc tác",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa11_gk1_de05_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Nitrogen không duy trì sự hô hấp vì nitrogen là một khí độc.<br/>(b) Vì có liên kết ba nên phân tử nitrogen rất bền và ở nhiệt độ thường nitơ khá trơ về mặt hóa học.<br/>(c) Khi tác dụng với kim loại hoạt động, nitrogen thể hiện tính khử.<br/>(d) Số oxi hóa của nitrogen trong các hợp chất và ion AlN, NH<sub>4</sub><sup>+</sup>, NO<sub>3</sub><sup>-</sup>, NO<sub>2</sub> lần lượt là -3, -3, +5, +3.<br/>Số phát biểu đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4",
            "isCorrect": false
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
            "text": "2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa11_gk1_de05_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình hóa học nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ot4333NHNONHHNO. → +",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ot43NHClNHHCl. → +",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ot423322(NH)CO2NHCOHO. → ++",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ot43322NHHCONHCOHO. → ++",
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
        "id": "hoa11_gk1_de05_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hoạt động nào sau đây góp phần gây nên hiện tượng phú dưỡng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sự quang hợp của cây xanh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nước thải sinh hoạt thải trực tiếp vào nguồn nước chưa qua xử lí",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ao hồ thả quá nhiều tôm, cá",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khử trùng ao hồ sau khi tát cạn bằng vôi sống (CaO)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de05_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương pháp chuẩn độ là phương pháp",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "xác định nồng độ của một chất bằng một dung dịch chuẩn đã biết nồng độ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "xác định nồng độ của một chất bằng một dung dịch chuẩn chưa biết nồng độ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "xác định nồng độ của một chất bằng sự thay đổi màu sắc của dung dịch chuẩn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xác định nồng độ của một chất bằng sự thay đổi màu sắc của các chỉ thị thông thường",
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
        "id": "hoa11_gk1_de05_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho muối X vào dung dịch NaOH, đun nóng, thu được một chất khí làm xanh giấy quỳ ẩm. Chất nào sau đây thỏa mãn tính chất của X?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "K<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>4</sub>NO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CaCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "FeCl<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_gk1_de05_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nước cường toan là hỗn hợp của HNO<sub>3</sub> đặc và HCl đặc có tỉ lệ thể tích tương ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 : 3",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2 : 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3 : 1",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3 : 2",
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
        "id": "hoa11_gk1_de05_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện thí nghiệm ảnh hưởng của nhiệt độ đến sự chuyển dịch cân bằng:<br/>CH<sub>3</sub>COONa + H<sub>2</sub>O  CH<sub>3</sub>COOH + NaOH or298H 0D> (*)<br/>Tiến hành thí nghiệm theo các bước sau:<br/>Bước 1: Cho khoảng 10 mL dung dịch CH<sub>3</sub>COONa 0,5 M vào cốc thuỷ tinh, thêm 1 - 2 giọt phenolphthalein, khuấy đều.<br/>Bước 2: Chia dung dịch thu được vào 3 ống nghiệm, ống nghiệm (1) để so sánh, ống nghiệm (2) ngâm vào cốc nước đá, ống nghiệm (3) ngâm vào cốc nước nóng.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phản ứng (*), phản ứng thuận là phản ứng tỏa nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sau bước 1, dung dịch thu được trong cốc thủy tinh có màu xanh.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sau bước 2, màu của dung dịch trong ống nghiệm (2) đậm màu hơn trong ống nghiệm (1).",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sau bước 2, màu của dung dịch trong ống nghiệm (3) nhạt màu hơn trong ống nghiệm (1).",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai, Phản ứng thuận là phản ứng thu nhiệt.<br/>b. Sai. Dung dịch có màu hồng do CH<sub>3</sub>COONa có môi trường base.<br/>c. Đúng. Giảm nhiệt độ cân bằng chuyển dịch theo chiều của phản ứng tỏa nhiệt (chiều thuận) làm màu đậm lên.<br/>d. Đúng. Tăng nhiệt độ cân bằng chuyển dịch theo chiều của phản ứng thu nhiệt (chiều nghịch) làm màu nhạt đi.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de05_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho các tính chất hóa học của ammonia như sau:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ammonia phản ứng với acid mạnh tạo muối ammonium.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch ammonium làm quỳ tím chuyển màu xanh.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phân tử ammonia, nguyên tử nitrogen có số oxi hóa là -3 nên ammonia thể hiện tính oxi hóa.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi đốt cháy khí ammonia trong oxygen, ammonia bị oxi hóa thành khí nitrogen.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng. NH<sub>4</sub><sup>+</sup> + H<sup>+</sup> NH<sub>4</sub><sup>+</sup>.<br/>b. Đúng.<br/>c. Sai. NH<sub>3</sub> thể hiện tính khử.<br/>d. Đúng. NH<sub>3</sub> + O<sub>2</sub> ⎯⎯t°→ N<sub>2</sub> + H<sub>2</sub>O.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de05_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Nitric acid (HNO<sub>3</sub>) là nguyên liệu hóa học quan trọng, chủ yếu được sử dụng trong sản xuất phân đạm, thuốc súng, thuốc nhuộm, dược phẩm, nhựa và các sản phẩm khác.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch nitric acid đậm đặc thể hiện tính oxi hóa mạnh khi tác dụng với copper(II) oxide.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nitric acid kém bền trong điều kiện thường khi có ánh sáng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Do có tính acid mạnh nên nitric acid được sử dụng để phá mẫu quặng trong nghiên cứu, xác định hàm lượng của các kim loại trong quặng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nitric acid đậm đặc có nồng độ dung dịch tăng khi tiếp xúc với không khí ẩm.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Cu(OH)<sub>2</sub> + 2HNO<sub>3</sub> Cu(NO<sub>3</sub>)<sub>2</sub> + 2H<sub>2</sub>O (phản ứng chứng minh tính acid).<br/>b. Đúng.<br/>c. Sai. Do có tính oxi hóa mạnh.<br/>d. Sai. HNO<sub>3</sub> đậm đặc bị bốc khói mạnh trong không khí ẩm nên nồng độ dung dịch giảm.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de05_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Ở trạng thái bình thường, dịch vị dạ dày thường có nồng độ [H<sup>+</sup>] là 42.10- M. Khi tiến hành tiêu hóa thức ăn vào dạ dày làm giải phóng acid HCl và dịch vị dạ dày cũng vì vậy mà có giá trị thay đổi, khi này nồng độ ion [H<sup>+</sup>] là 24,6.10- M. “Ợ nóng” là cảm giác đau rát ở thực quản gây ra do sự gia tăng nồng độ acid HCl trong dạ dày.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giá trị pH của dạ dày ở trạng thái bình thường là 3,7.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giá trị pH của dạ dày khi tiêu hóa thức ăn là 2,3.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể điều trị chứng ợ nóng bằng cách sử dụng thuốc kháng sinh, chẳng hạn “sữa magie” có thành phần chủ yếu là Mg(OH)<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cách đơn giản nhất để điều trị chứng ợ nóng nhẹ là nuốt nước bọt nhiều lần do nước bọt có chứa ion OH<sup>–</sup>, ion này dùng để trung hòa một phần acid có trong thực quản.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. pH = 1,34.<br/>c. Đúng. Mg(OH)<sub>2</sub> trung hòa acid thực quản.<br/>d. Sai. Thành phần nước bọt gồm: nước (99%), chất hữu cơ (men amylase, men lysosome, men maltase, chất nhầy), chất vô cơ (K<sup>+</sup>, Na<sup>+</sup>, HCO<sub>3</sub><sup>-</sup>, Cl<sup>-</sup>). Ion HCO<sub>3</sub><sup>-</sup> trung hòa một phần acid trong thực quản.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de05_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các cân bằng sau:<br/>(1) 2HI (g) ⇌ H<sub>2</sub>(g) + I<sub>2</sub>(g); (2) CaCO<sub>3</sub>(s) ⇌ CaO (s) + CO<sub>2</sub>(g);<br/>(3) FeO (s) + CO (g) ⇌ Fe (s) + CO<sub>2</sub>(g); (4) 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2SO<sub>3</sub>(g).<br/>Khi giảm áp suất của hệ, có bao nhiêu cân bằng bị chuyển dịch theo chiều nghịch?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de05_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Trong số các chất sau: NaCl (nóng chảy), CH<sub>3</sub>COOH, KMnO<sub>4</sub>, KAl(SO<sub>4</sub>)<sub>2</sub>.12H<sub>2</sub>O, C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> (saccharose), CH<sub>3</sub>COONH<sub>4</sub>, CO<sub>2</sub> và C<sub>6</sub>H<sub>6</sub> (benzen). Có bao nhiêu chất điện li trong dãy các chất trên?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de05_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Hình vẽ dưới đây mô tả phương pháp thu khí trong phòng thí nghiệm bằng phương pháp đẩy nước:<br/>Trong các khí: N<sub>2</sub>, Cl<sub>2</sub>, O<sub>2</sub>, HCl, NH<sub>3</sub>, có bao nhiêu chất khí thỏa mãn phương pháp trên?",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de5_image14.png"
        ],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Chọn các khí không tan hoặc tan ít trong nước.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de05_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho Sulfur trioxide được tạo thành bằng cách oxi hóa sulfur dioxide bằng oxygen hoặc lượng dư không khí ở nhiệt độ 450<sup>0</sup>C – 500<sup>0</sup>C, chất xúc tác V<sub>2</sub>O<sub>5</sub> theo phương trình hóa học:<br/>0025VO,450C500C0223r2982SO(g)O(g)2SO(g)H198,4kJ- → → +=-¬ → V<br/>Nồng độ ban đầu của SO<sub>2</sub> và O<sub>2</sub> tương ứng là 4 M và 2 M. Tính hằng số cân bằng của phản ứng, biết rằng khi đạt trạng thái cân bằng đã có 80% SO<sub>2</sub> đã phản ứng.",
        "images": [],
        "correctAnswer": "40",
        "explanation": "Đáp án: 40.<br/>oo25VO, 450C - 500C2232SO(g) + O(g) 2SO(g) ⇌ <br/>Bđ: 42<br/>Pư: 3,2 1,6 3,2<br/>Cb 0,8 0,43,2<br/>2C23,2K=400,4.0,8= .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de05_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Quá trình hình thành đạm nitrate cho đất từ nước mưa được biểu diễn theo sơ đồ sau:<br/>Sơ đồ quá trình: N<sub>2</sub> ⎯⎯(+O<sub>2</sub>)→ NO ⎯⎯(+O<sub>2</sub>)→ NO<sub>2</sub> ⎯⎯(+O<sub>2</sub>, +H<sub>2</sub>O)→ HNO<sub>3</sub> → H<sup>+</sup> + NO<sub>3</sub><sup>-</sup><br/>Tính lượng nitrate (NO<sub>3</sub><sup>-</sup>) mà đất được cung cấp từ 1 lít không khí (đkc) nếu giả sử hiệu suất chung cho cả quá trình là 40% và nitrogen chiếm khoảng 80% thể tích không khí? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>Trong 1000 m³ không khí: V<sub>N2</sub> = 1000 · 80% = 800 m³.<br/>Số mol N<sub>2</sub>: n<sub>N2</sub> = \\frac{800}{24,79} ≈ 32,271 kmol.<br/>Bảo toàn nguyên tố N (với hiệu suất toàn quá trình 40%):<br/>n<sub>NO3-</sub> = 2 · n<sub>N2</sub> · 40% = 2 · 32,271 · 0,4 = 25,817 kmol.<br/>Khối lượng nitrate: m<sub>NO3-</sub> = 25,817 · 62 ≈ 1600,6 kg (tương ứng khoảng 4 kg/m³ quy đổi).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de05_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Một cái ao dùng để nuôi thủy sản chứa 5000 m<sup>3</sup> nước có pH = 4,2. Trước khi nuôi, người ta làm tăng độ pH trong ao lên 7,0 bằng cách hòa m kg vôi sống (chứa 80% CaO, còn lại là tạp chất trơ không tác dụng với nước) vào nước trong ao. Giá trị của m là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "11",
        "explanation": "Đáp án: 11.<br/>Ta có: [H<sup>+</sup>] = 10<sup>-4,2</sup> → n<sub>H</sub><sup>+</sup> = [H<sup>+</sup>] .V = 10<sup>-4,2</sup> . 5000 . 10<sup>3</sup> mol<br/>PTHH: CaO + 2H<sup>+</sup> → Ca<sup>2+</sup> + H<sub>2</sub>O<br/>Để pH = 7 thì toàn bộ H<sup>+</sup> phản ứng hết với CaO nên n<sub>CaO</sub> = 12 n<sub>H</sub><sup>+</sup> = 157,74 mol<br/>m<sub>CaO</sub> = 157,74 . 56 = 8833,4 g. Vậy m vôi sống = m<sub>CaO</sub>/80% = 11,04 kg.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa11_gk1_de06",
    "code": "H11-GK1-06",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de06_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biểu thức nào sau đây là biểu thức tính hằng số cân bằng (K<sub>c</sub>) của phản ứng:<br/>CO(g) + H<sub>2</sub>O(g) ⇌ CO<sub>2</sub>(g) + H<sub>2</sub>(g)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2C22[CO].[HO]K[CO].[H]=",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2C22[CO].[H]K[CO].[HO]=",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "22C2[CO].[H]K[CO].[HO]=",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "22C2[CO].[HO]K[CO].[H]=",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de06_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trường hợp nào sau đây không dẫn điện được?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch HCl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaCl nóng chảy",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch K<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaOH rắn khan",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de06_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thí nghiệm với dung dịch HNO<sub>3</sub> thường sinh ra khí độc NO<sub>2</sub>. Để hạn chế khí NO<sub>2</sub> thoát ra từ ống nghiệm, người ta nút ống nghiệm bằng:<br/>(a) bông khô. (b) bông có tẩm nước.<br/>(c) bông có tẩm nước vôi. (d) bông có tẩm giấm ăn.<br/>Trong 4 biện pháp trên, biện pháp có hiệu quả nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(d)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(a)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(c)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(b)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de06_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo thuyết của Bronsted – Lowry thì base là chất",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cho proton (H<sup>+</sup>)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tan trong nước phân li ra H<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhận proton (H<sup>+</sup>)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tan trong nước phân li ra OH<sup>-</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de06_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây không thể hiện tính khử của NH<sub>3</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4NH<sub>3</sub> + 5O<sub>2</sub> oxt,t¾ → 4NO + 6H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "8NH<sub>3</sub> + 3Cl<sub>2</sub> → 6NH<sub>4</sub>Cl + N<sub>2.</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2NH<sub>3</sub> + 3CuO ⎯⎯t°→ 3Cu + N<sub>2</sub> + 3H<sub>2</sub>O",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de06_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ammonium nitrate được ứng dụng làm phân bón. Công thức phân tử của ammonium nitrate là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NH<sub>4</sub>Cl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>4</sub>NO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>4</sub>H<sub>2</sub>PO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>4</sub>HCO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa11_gk1_de06_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, phản ứng giữa nitrogen và oxygen xảy ra trong những cơn mưa dông kèm sấm sét, khởi đầu cho quá trình chuyển hóa từ nitrogen thành nitric acid. Trong phản ứng trên, nitrogen đóng vai trò là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chất khử",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chất oxi hóa",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "base",
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
        "id": "hoa11_gk1_de06_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho hai phản ứng sau:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">Cặp phản ứng</th><th class=\"px-2 py-1 border border-slate-300\">Phản ứng thứ nhất</th><th class=\"px-2 py-1 border border-slate-300\">Phản ứng thứ hai</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">(1)</td><td class=\"px-2 py-1 border border-slate-300\">2H2(g) + O2(g) 2H2O(g)</td><td class=\"px-2 py-1 border border-slate-300\">2H2O(l) 2H2(g) + O2(g)</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">(2)</td><td class=\"px-2 py-1 border border-slate-300\">H2 + I2 ⟶ 2HI</td><td class=\"px-2 py-1 border border-slate-300\">2HI ⟶ H2 + I2</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">(3)</td><td class=\"px-2 py-1 border border-slate-300\">2Na + Cl2 2NaCl</td><td class=\"px-2 py-1 border border-slate-300\">2NaCl 2Na + Cl2</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">(4)</td><td class=\"px-2 py-1 border border-slate-300\">N2 + 3H2 ⟶ 2NH3</td><td class=\"px-2 py-1 border border-slate-300\">2NH3 ⟶ N2 + 3H2</td></tr></table></div><br/>Cặp phản ứng nào sau đây có thể tạo thành một phản ứng thuận nghịch?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chỉ có (2)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chỉ có (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) và (3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(2) và (4)",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa11_gk1_de06_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phân tử nitric acid (HNO<sub>3</sub>),nguyên tử N có số oxi hóa là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+5",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "+3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "+2",
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
        "id": "hoa11_gk1_de06_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dung dịch nước, cation kim loại mạnh, gốc acid mạnh không bị thuỷ phân, còn cation kim loại trung bình và yếu bị thuỷ phân tạo môi trường acid, gốc acid yếu bị thuỷ phân tạo môi trường base. Dung dịch muối nào sau đây có pH > 7?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "KNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "K<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na<sub>2</sub>S",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaCl",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa11_gk1_de06_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính chất nào sau đây đúng khi nói về ammonia?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tan vô hạn trong nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất khí, màu vàng lục",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mùi khai, xốc",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nặng hơn không khí",
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
        "id": "hoa11_gk1_de06_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hóa học sau: CaCO<sub>3</sub>(s)  CaO(s) + CO<sub>2</sub>(g) ; or298H176kJD= . Yếu tố nào sau đây làm cho cân bằng dịch chuyển theo chiều thuận?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tăng nồng độ khí CO<sub>2</sub>(g)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tăng áp suất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nghiền nhỏ CaCO<sub>3</sub>(s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tăng nhiệt độ",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa11_gk1_de06_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng phú dưỡng là một biểu hiện của môi trường ao, hồ bị ô nhiễm do dư thừa các chất dinh dưỡng, Sự dư thừa dinh dưỡng chủ yếu do hàm lượng các ion nào sau đây vượt quá mức cho phép?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sodium, potassium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Calcium, magnesium",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nitrate, phosphate",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chloride, sulfate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa11_gk1_de06_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ứng dụng nào không phải là ứng dụng của ammonia?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tác nhân làm lạnh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sản xuất phân đạm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sản xuất thực phẩm giàu đạm",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sản xuất nitric acid",
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
        "id": "hoa11_gk1_de06_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các oxide của nitrogen không được tạo thành trong trường hợp nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Núi lửa phun trào",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đốt cháy các nhiên liệu hóa thạch",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mưa dông, sấm sét",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xả thải nước thải công nghiệp chưa qua xử lí",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de06_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phòng thí nghiệm, để điều chế ammonia từ ammonium chloride (NH<sub>4</sub>Cl) và sodium hydroxide (NaOH), người ta thu khí ammonia bằng phương pháp nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thu qua không khí bằng cách quay ống nghiệm thu khí lên",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thu qua không khí bằng cách úp ống nghiệm thu khí xuống",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sục khí qua dung dịch sulfuric acid đặc",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thu qua nước",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa11_gk1_de06_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nước trong một hồ nước sau một thời gian bị mưa và bị đọng phèn chua từ đất có trị pH là 5. Sau khi cải tạo thì giá trị pH của nước trong hồ là 7. Cho các nhận định sau:<br/>(a) Nồng độ ion H<sup>+</sup> của nước hồ giảm 20 lần.<br/>(b) Nồng độ ion OH<sup>–</sup> của nước hồ khi pH = 7 là 10<sup>-7</sup>M.<br/>(c) Nồng độ ion H<sup>+</sup> của nước hồ khi pH = 5 là 10<sup>-5</sup>M.<br/>(d) Có thể thêm dung dịch HCl vào nước hồ để làm tăng pH của nước.<br/>Số nhận định không đúng là",
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
            "text": "2",
            "isCorrect": true
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
            "text": "1",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_gk1_de06_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "X là muối khi tác dụng với dung dịch NaOH dư sinh khí mùi khai, tác dụng với dung dịch BaCl<sub>2</sub> sinh kết tủa trắng không tan trong HNO<sub>3</sub>. X là muối nào trong số các muối sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(NH<sub>4</sub>)<sub>2</sub>SO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>4</sub>HSO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa11_gk1_de06_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về trạng thái cân bằng hóa học của một phản ứng thuận nghịch.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cân bằng không bị chuyển dịch khi thay đổi nhiệt độ, nồng độ và áp suất.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nếu K<sub>C</sub> của phản ứng thuận rất lớn so với 1 thì các chất ở trạng thái cân bằng chủ yếu là chất sản phẩm.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ phản ứng thuận thấp hơn tốc độ phản ứng nghịch.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nồng độ của chất phản ứng bằng nồng độ chất sản phẩm.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Cân bằng bị chuyển dịch khi thay đổi nhiệt độ, nồng độ và áp suất.<br/>b. Đúng.<br/>c. Sai. Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.<br/>d. Sai. Nồng độ của chất phản ứng và sản phẩm không thay đổi.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de06_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Chuẩn độ acid- base là phương pháp được sử dụng để xác định nồng độ acid hoặc base chưa biết nồng độ bằng dung dịch acid hoặc dung dịch base đã biết chính xác nồng độ. Khi đó dung dịch đã biết chính xác nồng độ gọi là dung dịch chuẩn.<br/>Khi chuẩn độ, người ta thêm từ từ dung dịch đựng trong burette vào dung dịch đựng trong bình tam giác (hình bên dưới). Tại điểm mà hai chất tác dụng vừa đủ với nhau gọi là điểm tương đồng.",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de6_image15.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chuẩn độ acid- base phải đợi đến khi giọt cuối cùng làm dung dịch sau chuẩn độ bền màu (lắc không mất màu) thì đó chính là điểm tương đương.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất chỉ thị màu thường dùng trong chuẩn độ acid - base là dung dịch phenolphthalein.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chuẩn độ acid - base thực hiện dựa trên phản ứng trung hòa.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nồng độ thực tế của dung dịch cần chuẩn độ sẽ lớn hơn nồng độ tính được từ kết quả thí nghiệm.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Nồng độ chất cần chuẩn độ thực tế phải luôn nhỏ hơn khi tính từ kết quả thí nghiệm.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de06_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Hãy cho biết các phát biếu sau về nitrogen là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen có tính trơ về mặt hóa học, nhiệt độ hóa lỏng cao nên nitrogen lỏng được dùng để bảo quản máu, tế bào, dịch cơ thể, tinh trùng,…",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dựa trên tính chất khí nitrogen không duy trì sự cháy nên được dùng trong phòng cháy, chữa cháy.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phản ứng giữa nitrogen và hydrogen tạo ra ammonia, nitrogen đóng vai trò là chất khử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu giả sử không khí gồm khí nitrogen (78% thể tích); oxygen (21% thể tích) và argon (1% thể tích) thì khối lượng của 24,79 L không khí ở đkc là 29,89 gam. Biết Ar = 39,95",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai, N<sub>2</sub> NH<sub>3</sub> số oxi hóa giảm nên N<sub>2</sub> đóng vai trò là chất khử.<br/>d. Sai. kkkkNOAr2224,79n1molmmmm78%.1.2821%.1.321%.4028,96g24,79==Þ=++=++=",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de06_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Mưa acid ảnh hưởng tới hệ thực vật, phá hủy các vật liệu bằng kim loại, các bức tượng bằng đá, gây bệnh cho con người và động vật.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tác nhân chủ yếu trong khí thải gây ra mưa acid là SO<sub>2</sub> và NO<sub>x</sub>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mưa acid là mưa có độ pH trong khoảng 5,6 – 6.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong đời sống hiện đại, công nghiệp hóa phát triển thì mưa acid không ảnh hưởng gì đến môi trường.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hiện tượng núi lửa phun trào hay cháy rừng không liên quan đến hiện tượng mưa acid.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. pH < 5,6.<br/>c. Sai. Có ảnh hưởng (tác hại ở câu dẫn).<br/>d. Sai. Có liên quan vì có sinh khí SO<sub>2</sub>, NO<sub>x</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de06_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Trong số các cân bằng sau, có bao nhiêu cân bằng sẽ chuyển dịch khi giảm dung tích của bình phản ứng xuống ở nhiệt độ không đổi:<br/>a) CH<sub>4</sub>(g) + H<sub>2</sub>O(g) ⇌ CO(g) + 3H<sub>2</sub>(g).<br/>b) 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2SO<sub>3</sub>(g).<br/>c) 2HI(g) ⇌ H<sub>2</sub>(g) + I<sub>2</sub>(g).<br/>d) N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g).",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Giảm thể tích của bình tăng áp suất, cân bằng chuyển dịch theo chiều làm giảm số mol khí.<br/>Chọn a), b), d).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de06_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các dung dịch sau: Na<sub>2</sub>CO<sub>3</sub>, KOH, HI, H<sub>2</sub>SO<sub>4</sub>, CH<sub>3</sub>COOH và Mg(OH)<sub>2</sub>. Có bao nhiêu chất điện li yếu trong dãy các chất trên?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de06_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Người ta dùng muối NH<sub>4</sub>HCO<sub>3</sub> làm bột nở vì khi có tác dụng nhiệt, bột nở phân hủy sinh ra khí NH<sub>3</sub>, CO<sub>2</sub> từ trong chiếc bánh làm chúng nở to ra, tạo các lỗ xốp nên bánh mềm hơn. Để làm ra một chiếc bánh người ta cần dùng hết 0,79 gam NH<sub>4</sub>HCO<sub>3</sub>. Biết phản ứng xảy ra hoàn toàn, khi nướng chiếc bánh trên thì tổng thể tích khí NH<sub>3</sub> và CO<sub>2</sub> ở đkc được tạo thành là bao nhiêu lít? (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "0.5",
        "explanation": "Đáp án: 0,5.<br/>NH<sub>4</sub>HCO<sub>3</sub> NH<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O<br/>0,010,010,01<br/>V = 0,02.24.79 = 0,4968 lít.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de06_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Vàng tan trong hỗn hợp gồm dung dịch nitric acid đặc và dung dịch hydrochloric acid đặc (tỉ lệ 1 : 3 về thể tích) tạo ra hợp chất tan của Au<sup>3+</sup> theo phản ứng sau:<br/>Au + HNO<sub>3</sub> + HCl HAuCl<sub>4</sub> + NO + H<sub>2</sub>O<br/>Tổng hệ số cân bằng (số nguyên tối giản) của các chất có trong phản ứng trên là bao nhiêu?",
        "images": [],
        "correctAnswer": "10",
        "explanation": "Đáp án: 10.<br/>Au + HNO<sub>3</sub> + 4HCl HAuCl<sub>4</sub> + NO + 2H<sub>2</sub>O",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de06_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho cân bằng ở 1650℃: ot22NO2NO+ ⇌ ; K<sub>C</sub> = 4.10<sup>-4</sup><br/>Thực hiện phản ứng trên trong một bình kín với một hỗn hợp nitrogen và oxygen có tỉ lệ mol tương ứng là 4 : 1. Tính hiệu suất của phản ứng khi hệ cân bằng ở 1650℃. (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Chọn số mol của N<sub>2</sub> và O<sub>2</sub> lần lượt là 4 mol và 1 mol, bình dung tích 1 lít<br/>Þ ))4122M(NM(OCM, CM==<br/>-+=ÞÞ → 422C222N(g) O(g)2NO(g) K4.10Ban ®Çu: 4 > 1OhÕt,Nd­TÝnhH%theoOPh¶n øng: x x2x (mol/L)C©nb»ng: 4-x 1-x2x (mol/L)<br/>-é»Þ==ê===Þê--=-êë2241C2220,02x0,02H.100%2%[NO](2x)K4.101[N].[O](4x)(1x)x0,02(lo¹i)",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de06_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Một mẫu nước thải của nhà máy sản xuất có pH = 4. Để thải ra ngoài môi trường thì cần tăng pH lên từ 5,8 đến 8,6 (theo đúng quy định), nhà máy phải dùng vôi sống (CaO) thả vào nước thải. Tính khối lượng vôi sống cần dùng (theo gam) cho 1m<sup>3</sup> nước thải để nâng pH từ 4 lên 7? Bỏ qua sự thủy phân của các muối, nếu có.",
        "images": [],
        "correctAnswer": "2.8",
        "explanation": "Đáp án: 2,8.<br/>Ban đầu pH = 4 nên [H<sup>+</sup>] = 10<sup>-4</sup> M<br/>Xét 1 m<sup>3</sup> nước (hay 1000 lít) thì n<sub>H</sub><sup>+</sup> = [H<sup>+</sup>].V = 10<sup>-4</sup> .1000 = 0,1 mol<br/>Để pH = 7 thì toàn bộ lượng H<sup>+</sup> phải phản ứng hết nên OH<sup>-</sup> + H<sup>+</sup> → H<sub>2</sub>O<br/>Để pH = 7 (môi trường trung hòa) thì n<sub>OH-</sub> = n<sub>H+</sub> = 0,1 mol.<br/>CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub> → Ca<sup>2+</sup> + 2OH<sup>-</sup>.<br/>Số mol CaO cần dùng: n<sub>CaO</sub> = \\frac{1}{2} n<sub>OH-</sub> = \\frac{0,1}{2} = 0,05 mol.<br/>Khối lượng CaO: m<sub>CaO</sub> = 0,05 · 56 = 2,8 gam.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa11_gk1_de07",
    "code": "H11-GK1-07",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de07_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Muối ammonium là tinh thể ion, dễ tan trong nước",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Muối ammonium bền với nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Urea ((NH<sub>2</sub>)<sub>2</sub>CO) cũng là muối ammonium",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số oxi hóa của N trong ion NH<sub>4</sub><sup>+</sup> là –4",
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
        "id": "hoa11_gk1_de07_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét cân bằng sau: Fe<sub>2</sub>O<sub>3</sub>(s) + 3CO(g)  2Fe(s) + 3CO<sub>2</sub>(g). Biểu thức hằng số cân bằng của hệ là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "K<sub>C</sub> = [][][][]232323FeCOFeOCO",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "K<sub>C</sub> = [][][][]323232FeOCOFeCO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K<sub>C</sub> = [][]332COCO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "K<sub>C</sub> = éùëûéùëû323COCO",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de07_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quá trình đốt cháy hỗn hợp hơi nhiên liệu và không khí trong động cơ khi đánh tia lửa điện sinh ra khí NO, một tác nhân gây ô nhiễm không khí. Tên gọi của NO là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nitrogen oxygen",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nitrogen dioxide",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nitrogen monoxide",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dinitrogen oxide",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de07_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch của một base ở 25<sup>o</sup>C có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[H<sup>+</sup>] = 1,0.10<sup>-7</sup>M",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[H<sup>+</sup>] < 1,0.10<sup>-7</sup>M",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[H<sup>+</sup>] > 1,0.10<sup>-7</sup>M",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[H<sup>+</sup>].[OH<sup>-</sup>] > 1,0.10<sup>-14</sup>M",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận định nào sau đây về phân tử ammonia không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân cực mạnh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có một cặp electron không liên kết",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có độ bền nhiệt rất cao",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có khả năng nhận proton",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de07_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình mô tả sự điện li của Na<sub>2</sub>CO<sub>3</sub> trong nước là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na<sub>2</sub>CO<sub>3</sub>(s) 2HO¾ → 2Na(aq) + C(aq) + 3O(aq)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na<sub>2</sub>CO<sub>3</sub>(s) 2HO¾ → 2Na<sup>+</sup>(aq) + C<sup>4+</sup>(aq) + 3O<sup>2-</sup>(aq)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na<sub>2</sub>CO<sub>3</sub>(s) 2HO¾ → 2Na<sup>+</sup>(aq) + 23CO- (aq)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na<sub>2</sub>CO<sub>3</sub>(s) 2HO¾ → 2Na(s) + 23CO- (g)",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa11_gk1_de07_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp, nitrogen được điều chế bằng cách nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đun nóng dung dịch NH<sub>4</sub>NO<sub>2</sub> bão hòa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chưng cất phân đoạn không khí lỏng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chu không khí qua Cu nung nóng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dùng P đốt cháy hết oxygen của không khí",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa11_gk1_de07_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây về phản ứng ở trạng thái cân bằng là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các phản ứng thuận và phản ứng nghịch diễn ra với tốc độ khác nhau",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nồng độ của chất phản ứng và chất sản phẩm luôn thay đổi",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ của các chất phản ứng bằng nồng độ của các chất sản phẩm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các phản ứng thuận và nghịch tiếp tục xảy ra",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa11_gk1_de07_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong thí nghiệm chuẩn độ, dụng cụ dùng để xác định chính xác thể tích dung dịch (hình dưới) khi chuẩn độ được gọi là",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de7_image9.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "pipette",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "burette",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "bình định mức",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ống đong",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa11_gk1_de07_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dung dịch nước, cation kim loại mạnh, gốc acid mạnh không bị thuỷ phân, còn cation kim loại trung bình và yếu bị thuỷ phân tạo môi trường acid, gốc acid yếu bị thuỷ phân tạo môi trường base. Dung dịch muối nào sau đây có pH < 7?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "FeCl<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "KCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na<sub>2</sub>SO<sub>4</sub>",
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
        "id": "hoa11_gk1_de07_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dung dịch NH<sub>3</sub> vào dung dịch chất nào sau đây thu được kết tủa trắng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Al(NO<sub>3</sub>)<sub>3</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa11_gk1_de07_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các giá trị hằng số cân bằng của các phản ứng sau<br/>(a) (a) N<sub>2</sub>O<sub>4</sub>(g) o10C ⇌ 2NO<sub>2</sub>(g); K<sub>c</sub>= 0,2<br/>(b) H<sub>2</sub>(g) + l<sub>2</sub>(g) o450C ⇌ 2HI(g) ; K<sub>c</sub>= 50<br/>(c) CO<sub>2</sub>(g) + H<sub>2</sub>(g) o827C ⇌ CO(g) + H<sub>2</sub>O(g) ; K<sub>c</sub> = 0,659<br/>(d) 450223()3()2()oNgHgNHg+ ⇌ ⇌ ; K<sub>c</sub> = 2,25<br/>Hãy cho biết phản ứng nào có hiệu suất cao nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(b)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(c)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(d)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa11_gk1_de07_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các tính chất của nitric acid: (1) tính oxi hóa mạnh, (2) tính khử mạnh, (3) tan tốt trong nước, (4) tính acid yếu. Số tính chất đúng với nitric acid là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2",
            "isCorrect": true
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
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa11_gk1_de07_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các tính chất của khí nitrogen: (a) hóa lỏng ở nhiệt độ rất thấp (-196<sup>o</sup>C), (b) cấu tạo phân tử nitrogen là NNº , (c) tan nhiều trong nước, (d) nặng hơn oxygen, (e) kém bền, dễ bị phân hủy thành nitrogen nguyên tử. Những tính chất không phù hợp với khí nitrogen là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a), (c), (d)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(a), (b)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(c), (d), (e)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(b), (c), (e)",
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
        "id": "hoa11_gk1_de07_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Với xúc tác của các ion kim loại trong khói bụi, các oxide của sulfur và nitrogen bị oxi hóa bởi oxygen, ozone, hydrogen peroxide, gốc tự do,… rồi hòa tan vào nước tạo thành các acid tương ứng. Hai aicd tạo thành từ quá trình trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>CO<sub>3</sub> và HNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>S và HNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>S và H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>SO<sub>4</sub> và HNO<sub>3</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de07_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy các muối ammonium nào sau đây khi nhiệt phân tạo thành khí NH<sub>3</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NH<sub>4</sub>Cl, NH<sub>4</sub>HCO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>4</sub>Cl, NH<sub>4</sub>NO<sub>3</sub>, NH<sub>4</sub>HCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>4</sub>NO<sub>2</sub>, NH<sub>4</sub>NO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>4</sub>NO<sub>3</sub>, NH<sub>4</sub>HCO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>",
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
        "id": "hoa11_gk1_de07_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phân tử HNO<sub>3</sub>,nguyên tử N có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hoá trị V, số oxi hoá +5",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hoá trị IV, số oxi hoá +5",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hoá trị V, số oxi hoá +4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hoá trị IV, số oxi hoá +3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_gk1_de07_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hóa học: 2SO<sub>2</sub> (g) + O<sub>2</sub> (g) ⇌ 2SO<sub>3</sub> (g); 0r298HD < 0. Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cân bằng chuyển dịch theo chiều thuận khi tăng nhiệt độ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cân bằng chuyển dịch theo chiều nghịch khi giảm nồng độ O<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cân bằng chuyển dịch theo chiều thuận khi giảm áp suất hệ phản ứng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cân bằng chuyển dịch theo chiều nghịch khi giảm nồng độ SO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa11_gk1_de07_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Khi cho dòng điện qua dung dịch nước của chất X, thấy dung dịch dẫn điện tốt.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất X là chất điện li.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong dung dịch X có các ion âm và ion dương.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất X ở trạng thái rắn khan cũng dẫn điện.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi thay nước cất bằng dung môi không phân cực, dung dịch thu được vẫn dẫn điện tốt.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Không dẫn điện được.<br/>d. Sai. X không tan trong dung môi không phân cực.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de07_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Khái niệm acid – base theo thuyết Bronsted – Lowry và theo thuyết Arhenius.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo thuyết Bronsted – Lowry, trong phân tử acid phải có nguyên tử hydrogen (H) còn trong phân tử base phải có nhóm hydroxyl (OH).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Theo thuyết Arhenius, acid là chất cho proton H<sup>+</sup> còn base là chất nhận proton H<sup>+</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Theo thuyết Arhenius, khái niệm acid – base chỉ đúng cho trường hợp dung môi là nước.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khái niệm acid – base theo thuyết Bronsted – Lowry tổng quát hơn thuyết Arhenius, phân tử không có nhóm OH như NH<sub>3</sub> là một base hoặc ion 23CO- là một base.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Theo thuyết Bronsted – Lowry, acid là chất cho proton H<sup>+</sup> còn base là chất nhận proton H<sup>+</sup>.<br/>Theo thuyết Arhenius, acid là chất khi tan trong nước phân li ra ion H<sup>+</sup> còn base là chất khi tan trong nước phân li ra ion OH<sup>–</sup>.<br/>a. Sai.<br/>b. Sai.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de07_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Phương trình hoá học của phản ứng tổng họp ammonia từ nitrogen và hydrogen bằng quá trình Haber như sau:<br/>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) o400600C, 200 bar, Fe- ⇌ 2NH<sub>3</sub>(g) 0r298HD =-92 kJ (1)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng (1) là quá trình thuận nghịch nên tại thời điểm cân bằng, hỗn hợp trong buồng phản ứng gồm ammonia, nitrogen và hydrogen.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Do ammonia dễ hoá lỏng hon nên khi làm lạnh hỗn hợp khí sau phả nứng sẽ tách được ammonia lỏng ra khỏi hỗn hợp khí.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Để làm tăng hiệu suất của phản ứng (1) cần phải tăng nhiệt độ và giảm áp suất.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để điều chế 6 L khí NH<sub>3</sub> từ hỗn hợp N<sub>2</sub> và H<sub>2</sub> với hiệu suất phản ứng 25% thì thể tích khí N<sub>2</sub> cần dùng là 12 L. Biết thể tích các khí đều đo ở đkc.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Tăng áp suất và giảm nhiệt độ.<br/>d. Đúng.<br/>NH3NN(LT)2(TT)2V63V3LV12L2225%===Þ== .",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de07_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Quá trình đốt cháy nhiên liệu trong ô tô sinh ra nhiều khí như SO<sub>2</sub>, CO<sub>2</sub>, NO. Từ năm 1975, người ta thiết kế “bộ chuyển đổi xúc tác” trong hệ thống xả khí của ô tô (và cả trong máy phát điện) nhằm tạo điều kiện thuận lợi cho phản ứng: 2CO(g) + 2NO(g) → 2CO<sub>2</sub>(g) + N<sub>2</sub>(g) (*)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phản ứng (*), NO đóng vai trò là chất khử.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng (*) có ý nghĩa đối với môi trường là giảm khí độc CO và giảm tác nhân gây mưa acid NO phát sinh trong quá trình đốt nhiên liệu.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy chuẩn của phản ứng (*) là –672,8 kJ. Biết giá trị enthalpy tạo thành chuẩn của CO(g), NO(g), CO<sub>2</sub>(g) lần lượt là –110,5; 91,3; –393,5 (kJ/mol).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dựa vào ý (c), phản ứng (*) là phản ứng tỏa nhiệt nên thuận lợi về mặt năng lượng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Số oxi hóa của N trong NO giảm nên NO là chất oxi hóa.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy chuẩn của phản ứng (*) = 2. (-393,5) + 0 – 2.(-110,5) – 2.91,3 = -748,6 (kJ).<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de07_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho cân bằng hóa học: CH<sub>3</sub>COONa(aq) + H<sub>2</sub>O(l)  CH<sub>3</sub>COOH(aq) + NaOH(aq) ; DrH > 0.<br/>Cho các tác động sau: (1) thêm CH<sub>3</sub>COONa, (2) thêm NaOH vào hệ, (3) tăng áp suất của hệ, (4) ngâm hệ vào nước nóng. Có bao nhiêu tác động làm cân bằng chuyển dịch sang chiều thuận?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.<br/>(1) Tăng nồng độ của CH<sub>3</sub>COONa cân bằng chuyển dịch theo chiều thuận.<br/>(2) Tăng nồng độ NaOH cân bằng sẽ chuyển dịch theo chiều nghịch.<br/>(3) Áp suất không ảnh hưởng đến cân bằng không có sự tham gia của chất khí.<br/>(4) ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> > 0 là phản ứng thu nhiệt nên tăng nhiệt cân bằng chuyển dịch theo chiều nghịch.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de07_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Tham khảo giá trị pH của một số sản phẩm cho bảng sau:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">Sản phẩm</th><th class=\"px-2 py-1 border border-slate-300\">pH</th><th class=\"px-2 py-1 border border-slate-300\">Sản phẩm</th><th class=\"px-2 py-1 border border-slate-300\">pH</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Baking soda</td><td class=\"px-2 py-1 border border-slate-300\">8,3</td><td class=\"px-2 py-1 border border-slate-300\">Giấm ăn</td><td class=\"px-2 py-1 border border-slate-300\">2,8</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Nước mưa</td><td class=\"px-2 py-1 border border-slate-300\">5,7</td><td class=\"px-2 py-1 border border-slate-300\">Cà chua</td><td class=\"px-2 py-1 border border-slate-300\">4,2</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Mật ong</td><td class=\"px-2 py-1 border border-slate-300\">3,9</td><td class=\"px-2 py-1 border border-slate-300\">Huyết tương</td><td class=\"px-2 py-1 border border-slate-300\">7,3</td></tr></table></div><br/>Có bao nhiêu dung dịch của các sản phẩm trên làm quỳ tím chuyển sang màu đỏ?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de07_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng sau:<br/>a) NH<sub>3</sub> + CuO ⎯⎯t°→ b) NH<sub>4</sub>Cl + Ca(OH)<sub>2</sub> ⎯⎯t°→ <br/>c) Cu + HNO<sub>3</sub> → d) (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> ⎯⎯t°→ <br/>e) CaCO<sub>3</sub> + HNO<sub>3</sub> → e) NH<sub>3</sub> + HNO<sub>3</sub> → <br/>Trong số các phản ứng trên, có bao nhiêu phản ứng tạo thành chất khí?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de07_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Dung dịch HCl có pH = 1 (dung dịch A), dung dịch NaOH có pH = 13 (dung dịch B). pH của dung dịch sau khi trộn 5 mL dung dịch A và 10 mL dung dịch B là bao nhiêu? (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "12.5",
        "explanation": "Đáp án: 12,5.<br/>Dung dịch A có [H<sup>+</sup>] = 0,1M, dung dịch B có [OH<sup>-</sup>] = 0,1M<br/>(a) 5 mL dung dịch A và 10 mL dung dịch B.<br/>n<sub>H</sub><sup>+</sup> = 5.10<sup>-3</sup>.0,1 = 5.10<sup>-4</sup> (mol), n<sub>OH</sub><sup>-</sup> = 0,01.0,1 = 10<sup>-3</sup> (mol)<br/>H<sup>+</sup> + OH<sup>-</sup> → H<sub>2</sub>O<br/>5.10<sup>-4</sup>→ 5.10<sup>-4</sup> (mol)<br/>4-0,0015.10[OH]=0,0333M0,015--= Þ pOH = 1,478 Þ pH = 14 – 1,478 = 12,522 » 12,5",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de07_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Trong công nghiệp hóa học, nitrogen monoxide là một sản phẩm trung gian quan trọng, tạo thành từ phản ứng oxi hóa ammonia bởi oxygen. Đây là giai đoạn đầu tiên trong quá trình Ostwald để sản xuất nitric acid. Trộn 100 kmol ammonia với không khí (dư 20% so với lượng cần để đốt cháy hoàn toàn) trong một bình kí ở 700K, áp suất 1 bar. Giả sử không khí chiếm 80% N<sub>2</sub>, 20% O<sub>2</sub> về thể tích. Tính số kmol nitrogen ban đầu có trong hệ?",
        "images": [],
        "correctAnswer": "600",
        "explanation": "Đáp án: 600.<br/>oxt,t3224NH5O4NO6HO+¾ → +<br/>2503 125<br/>Thể tích của N<sub>2</sub> gấp 4 lần thể tích của O<sub>2</sub> Số mol N<sub>2</sub> là 125.4 = 500 kmol.<br/>Mà không khí dùng dư 20% nên kết quả được tính là 500.120% = 600 kmol",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de07_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các cân bằng sau:<br/>X<sub>2</sub>(g) + 12 Y<sub>2</sub>(g)  X<sub>2</sub>Y(g)(1)<br/>2X<sub>2</sub>Y(g)  2X<sub>2</sub>(g) + Y<sub>2</sub>(g) (2)<br/>Hằng số K<sub>C</sub>của phản ứng (1) có giá trị là 2. Tại cùng nhiệt độ, giá trị của hằng số cân bằng K<sub>C</sub> của phản ứng (2) bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "0.25",
        "explanation": "Đáp án: 0,25.<br/>Từ phương trình (1): K<sub>c(1)</sub> = \\frac{[X_2Y]}{[X_2] · [Y_2]^{1/2}} = 2.<br/>Từ phương trình (2): K<sub>c(2)</sub> = \\frac{[X_2]^2 · [Y_2]}{[X_2Y]^2} = \\frac{1}{(K_{c(1)})^2} = \\frac{1}{2^2} = 0,25.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa11_gk1_de08",
    "code": "H11-GK1-08",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de08_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dạng hình học của phân tử ammonia là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hình tam giác đều",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hình tứ diện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đường thẳng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hình chóp tam giác",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de08_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dùng máy đo pH xác định được giá trị pH của một loại sữa rửa mặt là 5,45. Sữa rửa mặt đó có môi trường",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "base",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "acid",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "lưỡng tính",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "trung tính",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de08_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 0,1 mol NH<sub>4</sub>Cl tác dụng với lượng dư dung dịch NaOH đun nóng, thu được V lít khí NH<sub>3</sub> ở đkc. Giá trị của V là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2,240",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2,479",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4,480",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4,958",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de08_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo thuyết Brønsted – Lowry, acid là những chất có khả năng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cho electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cho H<sup>+</sup><sub>.</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cho OH<sup>-</sup><sub>.</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhận H<sup>+</sup><sub>.</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de08_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biện pháp nào sau đây không dùng để hạn chế hiện tượng phú dưỡng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tạo điều kiện để nước trong ao, hồ được lưu thông",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tăng cường cung cấp không khí cho nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sử dụng phân bón đúng liều lượng, đúng cách, đúng thời điểm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xả thải trực tiếp nước thải sinh hoạt vào các kênh, ao, hồ",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de08_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là chất không điện li trong dung dịch nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NaOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaCl",
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
        "id": "hoa11_gk1_de08_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số liên kết sigma (σ) và số liên kết pi (π) trong phân tử nitrogen lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2 và 1",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "0 và 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3 và 0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 và 2",
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
        "id": "hoa11_gk1_de08_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự chuyển dịch cân bằng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phản ứng trực tiếp theo chiều thuận",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng trực tiếp theo chiều nghịch",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chuyển từ trạng thái cân bằng này sang trạng thái cân bằng khác",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phản ứng tiếp tục xảy ra cả chiều thuận và nghịch",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa11_gk1_de08_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chuẩn độ dung dịch NaOH chưa biết nồng độ bằng dung dịch chuẩn HCl 0,1M với chất chỉ thị phenolphtalein như hình vẽ duới đây:<br/>Tại điểm tương đương, HCl hết nên nếu thêm tiếp NaOH, màu của dung dịch",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de8_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chuyển sang màu xanh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chuyển sang màu hồng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "không chuyển màu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chuyển sang màu tím",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa11_gk1_de08_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cẩm tú cầu là một loại cây cho hoa có màu sắc phụ thuộc vào môi trường của đất. Đất chua (môi trường acid) cây cho hoa có màu xanh dương nhạt; đất trung tính hoa có màu trắng còn trong đất kiềm (môi trường base) hoa có màu hồng đỏ. Một người trồng loại cây này trên đất trung tính, để thu được hoa có màu hồng đỏ thì cần bón thêm loại phân nào sau đây cho cây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "KCl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>4</sub>NO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa11_gk1_de08_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ứng dụng nào sau đây không phải của muối ammonium?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Làm phân bón hóa học",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Làm chất phụ gia thực phẩm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Làm thuốc long đờm, thuốc bổ sung chất điện giải",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Điều chế ammonia",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa11_gk1_de08_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phản ứng sau :<br/>(1) H<sub>2</sub>(g) + I<sub>2</sub>(g) 2HI(k) HD > 0<br/>(2) 2NO(g) + O<sub>2</sub>(g) 2NO<sub>2</sub>(g) HD < 0<br/>(3) CO(g) + Cl<sub>2</sub>(g) COCl<sub>2</sub>(g) HD < 0<br/>(4) CaCO<sub>3</sub>(s) CaO(s)+ CO<sub>2</sub>(g) HD > 0<br/>Khi giảm nhiệt độ các cân bằng nào trên đây đều chuyển dịch theo chiều thuận?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1), (2)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1), (3), (4)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(2), (3)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1), (4)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa11_gk1_de08_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây thể hiện tính oxi hoá mạnh khi tác dụng với chất khử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HNO<sub>3</sub>",
            "isCorrect": true
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
            "text": "NH<sub>3</sub>",
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
        "id": "hoa11_gk1_de08_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nitrogen trong không khí có vai trò nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cung cấp đạm tự nhiên cho cây trồng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hình thành sấm sét",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tham gia quá trình quang hợp của cây",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tham gia hình thành mây",
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
        "id": "hoa11_gk1_de08_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận xét nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phản ứng một chiều, chất sản phẩm không phản ứng được với nhau tạo thành chất đầu",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phản ứng thuận nghịch, các chất sản phẩm có thể phản ứng được với nhau để tạo thành chất đầu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng một chiều là phản ứng luôn xảy ra không hoàn toàn",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phương trình hóa học của phản ứng thuận nghịch được biểu diễn bằng hai nửa mũi tên ngược chiều nhau",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de08_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho sơ đồ phản ứng sau: XY424443(NH)SONHClNHNO → → . Các chất X, Y lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCl, HNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "BaCl<sub>2</sub>, AgNO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CaCl<sub>2</sub>, HNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCl, AgNO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa11_gk1_de08_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nitric acid dễ bị phân hủy bởi ánh sáng hoặc nhiệt độ tạo thành các sản phẩm là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NO<sub>2</sub>, H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NO<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "N<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N<sub>2</sub>. H<sub>2</sub>O",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_gk1_de08_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét cân bằng hóa học: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g) rH0D<<br/>Hiệu suất phản ứng khi hệ đạt cân bằng ở áp suất 200 bar và 300 bar lần lượt bằng x % và y %. Mối quan hệ giữa x và y là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "5x = 4y",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "x = y",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "x > y",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "x < y",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa11_gk1_de08_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho biết acid khi nhường H<sup>+</sup> sẽ tạo ra base tương ứng và base khi nhận H<sup>+</sup> sẽ tạo thành acid tương ứng thì cặp acid – base tương ứng đó được gọi là cặp acid – base liên hợp. Trong dung dịch nước của acetic acid (CH<sub>3</sub>COOH) tồn tại cân bằng sau:<br/>CH<sub>3</sub>COOH + H<sub>2</sub>O  CH<sub>3</sub>COO<sup>-</sup> + H<sub>3</sub>O<sup>+</sup>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng nghịch CH<sub>3</sub>COO<sup>–</sup> đóng vai trò là base.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi nồng độ ban đầu của CH<sub>3</sub>COOH là 1M thì tại trạng thái cân bằng [CH<sub>3</sub>COO<sup>-</sup>] = [H<sub>3</sub>O<sup>+</sup>] = 1M.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng thuận CH<sub>3</sub>COOH đóng vai trò là acid.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cặp CH<sub>3</sub>COOH/ CH<sub>3</sub>COO<sup>–</sup> và cặp H<sub>3</sub>O<sup>+</sup>/ H<sub>2</sub>O là các cặp acid/base liên hợp.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Nồng độ ion trong dung dịch bé hơn 0,1M.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de08_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai khi nói về nitrogen?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dù phân tử N<sub>2</sub> có tính kém hoạt động hóa học, nhưng vẫn hoạt động hóa học mạnh hơn chlorine, Cl<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đơn chất nitrogen không phản ứng với hydrogen, oxygen ở điều kiện thường.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Do có nhiệt độ rất thấp nên nitrogen lỏng được sử dụng bảo quản một số loại mẫu vật.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong bầu khí quyển, khi có sấm chớp, khí nitrogen tạo các nitrogen oxide, là một nguyên nhân làm cho nước mưa có tính acid.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai vì N<sub>2</sub> hoạt động hóa học kém hơn Cl<sub>2</sub>.<br/>b. Đúng. Vì ở điều kiện thường N<sub>2</sub> trơ về mặt hóa học.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de08_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về trạng thái cân bằng hóa học của một phản ứng thuận nghịch.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cân bằng không bị chuyển dịch khi thay đổi nhiệt độ, nồng độ, áp suất.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nếu K<sub>C</sub> của phản ứng thuận rất lớn so với 1 thì các chất ở trạng thái cân bằng chủ yếu là chất sản phẩm.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ phản ứng thuận thấp hơn tốc độ phản ứng nghịch.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nồng độ của chất phản ứng bằng nồng độ chất sản phẩm.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Cân bằng hóa học bị chuyển dịch khi thay đổi nhiệt độ, nồng độ, áp suất.<br/>b. Đúng.<br/>c. Sai. Tốc độ phản ứng thuận và nghịch bằng nhau.<br/>d. Sai. Nồng độ của chất phản ứng và nồng độ chất sản phẩm không đổi.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de08_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Sơ đồ quy trình dưới đây mô tả các bước trong quá trình sản xuất phân bón (Z).",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de8_image8.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong không khí, X chiếm phần trăm thể tích lớn nhất.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch acid Y có thể hòa tan được vàng (gold) và platinium.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tên gọi của Z là ammonium nitrate.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khí thải có chứa chất T góp phần gây ra mưa acid và hiện tượng phú dưỡng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Khí X là NO.<br/>b. Sai. HNO<sub>3</sub> không hòa tan được Au và Pt.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [
          "/assets/hoa11/midterm/h11_gk1_de8_image14.png"
        ],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de08_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng hóa học sau:<br/>(1) NH<sub>3</sub> + H<sub>2</sub>O  NH<sub>4</sub><sup>+</sup> + OH<sup>–</sup><br/>(2) 8NH<sub>3</sub> + 3Cl<sub>2</sub> → 6NH<sub>4</sub>Cl + N<sub>2</sub><br/>(3) 4NH<sub>3</sub> + 5O<sub>2</sub> ⎯⎯(Pt, t°)→ 4NO + 6H<sub>2</sub>O<br/>(4) 2NH<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub><br/>(5) 2NH<sub>3</sub> + 3CuO ⎯⎯t°→ N<sub>2</sub> + 3Cu + 3H<sub>2</sub>O<br/>Có bao nhiêu phản ứng chứng tỏ ammonia là một chất khử?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de08_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu chất là chất điện li mạnh trong dãy các chất sau: Cu(OH)<sub>2</sub>, NaCl, C<sub>2</sub>H<sub>5</sub>OH, KOH, CH<sub>3</sub>COONa, HBr và H<sub>3</sub>PO<sub>4</sub>?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de08_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng: aFe + bHNO<sub>3</sub> → cFe(NO<sub>3</sub>)<sub>3</sub> + dNO<sub>2</sub>↑ + eH<sub>2</sub>O. Hệ số tỉ lượng a, b, c, d, e là những số nguyên dương có tỉ lệ tối giản. Tổng (a + b + e) bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "10",
        "explanation": "Đáp án: 10.<br/>Fe + 6HNO<sub>3</sub> → Fe(NO<sub>3</sub>)<sub>3</sub> + 3NO<sub>2</sub> + 3H<sub>2</sub>O",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de08_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Trong công nghiệp, hydrogen được sản xuất từ phản ứng sau tại nhiệt độ thích hợp:<br/>CH<sub>4</sub>(g) + H<sub>2</sub>O(g)  3H<sub>2</sub>(g) + CO(g)<br/>Tính hằng số cân bằng K<sub>C</sub> của phản ứng nhiệt độ này, biết nồng độ mol của CH<sub>4</sub>, H<sub>2</sub>O, H<sub>2</sub> và CO ở trạng thái cân bằng lần lượt là 0,13 M; 0,24 M; 1,15 M và 0,13 M. (Kết quả làm tròn đến hàng phần trăm).",
        "images": [],
        "correctAnswer": "6.34",
        "explanation": "Đáp án: 6,34.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de08_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Một mẫu dung dịch H<sub>2</sub>SO<sub>4</sub> (gọi là mẫu A) được phân tích bằng cách thêm 50 mL dung dịch NaOH 0,4 M vào 100 mL dung dịch mẫu A rồi lắc đều. Sau khi phản ứng xảy ra, người ta thấy trong hỗn hợp dung dịch còn dư ion OH<sup>–</sup>. Phần ion dư này cần 10 mL HCl 0,2 M để trung hoà. Tính nồng độ mol.L<sup>–1</sup> của mẫu A.",
        "images": [],
        "correctAnswer": "0.09",
        "explanation": "Đáp án: 0,09.<br/>2NaOH + H<sub>2</sub>SO<sub>4</sub> ⟶ Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O<br/>HCl + NaOH ⟶ NaCl + H<sub>2</sub>O<br/>Số mol NaOH thêm vào 100 mL dung dịch H<sub>2</sub>SO<sub>4</sub> là: 0,05.0,4 = 0,02 mol.<br/>Số mol NaOH được trung hoà bởi HCl là: 0,01.0,2 = 0,002 mol.<br/>Số mol NaOH được trung hoà bởi 100 mL dung dịch H<sub>2</sub>SO<sub>4</sub> là: 0,02 – 0,002 = 0,018 mol.<br/>Vậy nồng độ H<sub>2</sub>SO<sub>4</sub> trong mẫu phân tích là: 0,0180,09M2.0,1= .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de08_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Sau mỗi trận mưa giông, một lượng nitrogen trong không khí được chuyển hóa thành ion nitrate và hòa tan vào nước mưa. Nguyên tố nitrogen có trong ion nitrate có vai trò thúc đẩy quá trình sinh trưởng và phát triển của cây trồng, làm cho cây trồng ra nhiều lá, cho nhiều củ, quả và hạt hơn. Hàm lượng ion nitrate trong một mẫu nước mưa là 62 mg/L nước mưa. Biết rằng, trong 1 giờ sẽ có 5 3m nước mưa rơi xuống một thửa ruộng. Hãy cho biết khối lượng nguyên tố nitrogen (theo gam) mà thửa ruộng đó nhận được khi cơn mưa kéo dài trong 3 giờ?",
        "images": [],
        "correctAnswer": "210",
        "explanation": "Đáp án: 210.<br/>Thể tích nước sau 3 giờ là 3.5 = 15 m<sup>3</sup> = 15.10<sup>3</sup> L<br/>Khối lượng ion nitrate (NO<sub>3</sub><sup>–</sup>) = 15.10<sup>3</sup>.62 = 930000 mg = 930 gam<br/>NNNO3930nn= 15m15.14210g62-==Þ== .<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa11_gk1_de09",
    "code": "H11-GK1-09",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de09_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đặc điểm cấu tạo của phân tử N<sub>2</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có 1 liên kết ba",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "có 1 liên kết đôi và 1 liên kết cho nhận",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có 3 liên kết đơn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "có 1 liên kết và 1 liên kết",
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
        "id": "hoa11_gk1_de09_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là chất điện li yếu?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>3</sub>PO<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>SO<sub>4</sub>",
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
        "id": "hoa11_gk1_de09_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự phá vỡ cân bằng cũ để chuyển sang một cân bằng mới do các yếu tố bên ngoài tác động được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sự chuyển đổi vận tốc phản ứng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sự dịch chuyển cân bằng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sự biến đổi chất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sự biến đổi hằng số cân bằng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de09_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở nhiệt độ cao, nitrogen thể hiện tính khử khi phản ứng với đơn chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "O<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Li",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mg",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de09_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy gồm các kim loại đều tác dụng được với dung dịch HCl nhưng không tác dụng với dung dịch HNO<sub>3</sub> đặc, nguội?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe, Al, Cr",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cu, Fe, Al",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fe, Mg, Al",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cu, Pb, Ag",
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
        "id": "hoa11_gk1_de09_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch sodium chloride (NaCl) dẫn được điện là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaCl điện li trong nước thành ion",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaCl là phân tử phân cực",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NaCl có vị mặn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaCl tan được trong nước",
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
        "id": "hoa11_gk1_de09_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng phú dưỡng là sự tích tụ lượng lớn các chất dinh dưỡng, bao gồm cả hợp chất nguyên tố X và hợp chất nguyên tố Y trong các nguồn nước, do các tác động từ con người. Hệ quả của hiện tượng này là làm cho các sinh vật trong nước như vi khuẩn, rong, rêu, tảo sinh sôi, nảy nở và phát triển mạnh. Hai nguyên tố X và Y lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "carbon và oxygen",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "carbon và sulfur",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "oxygen và nitrogen",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nitrogen và phosphorus",
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
        "id": "hoa11_gk1_de09_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ứng dụng nào dưới đây là của ammonia?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bảo quản mẫu vật phẩm trong y học",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tạo khí quyển trơ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Bảo quản thực phẩm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sản xuất nitric acid",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa11_gk1_de09_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để xác định nồng độ của dung dịch NaOH bằng dung dịch HCl đã biết trước nồng độ, người ta thực hiện phương pháp",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chuẩn độ tạo kết tủa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chuẩn độ acid - base",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chuẩn độ oxi hóa - khử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chuẩn độ tạo phức chất",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa11_gk1_de09_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức Lewis của phân tử ammonia là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H : N(..) : H (ở dưới có 1 nguyên tử H, nguyên tử N có 1 cặp electron tự do)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H : N : H (ở dưới có 1 nguyên tử H, nguyên tử N không có cặp electron tự do)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H : N(..) : H (ở dưới có 2 nguyên tử H)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H - N = H (nguyên tử N có 2 cặp electron tự do)",
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
        "id": "hoa11_gk1_de09_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng thuận nghịch?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mg + 2HCl → MgCl<sub>2</sub> + H<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH  CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2KClO<sub>3</sub> → 2KCl + 3O<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa11_gk1_de09_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, khí X không màu kết hợp ngay với oxygen của không khí, tạo ra khí nitrogen dioxide màu nâu đỏ. Khí X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N<sub>2</sub>O<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NO",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "N<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa11_gk1_de09_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Muối ammonium là các hợp chất có chứa ion NH<sub>4</sub><sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hầu hết các ammonium tan tốt và điện li hoàn toàn trong nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lượng lớn muối ammonium nitrate được sử dụng làm phân bón",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các phản ứng phân hủy muối ammonium đều giảm áp suất khí nên không có nguy cơ gây nổ",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa11_gk1_de09_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch X có chứa 0,07 mol Na<sup>+</sup>, 0,02 mol SO<sub>4</sub><sup>2–</sup>, và x mol OH<sup>-</sup>. Dung dịch Y có chứa ClO<sub>4</sub><sup>–</sup>, NO<sub>3</sub><sup>–</sup> và y mol H<sup>+</sup>; tổng số mol ClO<sub>4</sub><sup>–</sup>, NO<sub>3</sub><sup>–</sup> là 0,04 mol. Trộn X và T thu được 100 mL dung dịch Z. Dung dịch Z có pH (bỏ qua sự điện li của H<sub>2</sub>O) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "12",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "13",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2",
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
        "id": "hoa11_gk1_de09_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây về nitrogen là không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen được dùng để tổng hợp ammonia",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở nhiệt độ cao, nitrgoen trở nên hoạt động",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Không thể thu khí nitrogen trong phòng thí nghiệm bằng phương pháp đẩy nước",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nitrogen không duy trì sự cháy và sự hô hấp",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de09_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho bốn dung dịch cùng nồng độ mol: HCl (pH = x), H2SO4 (pH = y), NaCl (pH = z), NaOH (pH = t). Nhận định nào dưới đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "x < y < z < t",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "t < z < x < y",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "z < x < t < y",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "y < x < z < t",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa11_gk1_de09_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dung dịch muối AlCl<sub>3</sub> tồn tại các cân bằng hóa học sau:<br/>322Al + HOAl(OH) + H+++ (1)<br/>222Al(OH) + HO Al(OH) + H+++ (2)<br/>223Al(OH) + HOAl(OH) + H++ (3)<br/>Khi thêm hỗn hợp KIO<sub>3</sub> và KI vào dung dịch AlCl<sub>3</sub> thì xảy ra phản ứng:<br/>++ → 322KIO + 5KI + 6H 3I + 6K + 3HO (4)<br/>Sự xuất hiện kết tủa keo trắng trong thí nghiệm trên sau khi thêm hỗn hợp KIO<sub>3</sub> và KI vào dung dịch AlCl<sub>3</sub> sẽ thay đổi như thế nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lượng Al(OH)<sub>3</sub> giảm sau đó tăng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lượng Al(OH)<sub>3</sub> tăng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lượng Al(OH)<sub>3</sub> giảm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lượng Al(OH)<sub>3</sub> không đổi",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_gk1_de09_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "X là muối khi tác dụng với dung dịch NaOH dư sinh khí mùi khai, tác dụng với dung dịch BaCl<sub>2</sub> sinh kết tủa trắng không tan trong HNO<sub>3</sub>. X là muối nào trong số các muối sau?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(NH<sub>4</sub>)<sub>2</sub>SO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>4</sub>HSO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa11_gk1_de09_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Giấy tẩm chất quỳ tím là một chỉ thị thông dụng trong phòng thí nghiệm. Màu sắc của chỉ thị phụ thuộc vào pH của môi trường như sau:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">pH</th><th class=\"px-2 py-1 border border-slate-300\">< 6,0</th><th class=\"px-2 py-1 border border-slate-300\">6,0 - 8,0</th><th class=\"px-2 py-1 border border-slate-300\">> 8,0</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Màu giấy quỳ tím</td><td class=\"px-2 py-1 border border-slate-300\">đỏ</td><td class=\"px-2 py-1 border border-slate-300\">tím</td><td class=\"px-2 py-1 border border-slate-300\">xanh</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch chất không điện li đều không làm đổi màu quỳ tím.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch base luôn làm giấy quỳ tím chuyển sang màu xanh.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch acid luôn làm giấy quỳ tím chuyển sang màu đỏ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch muối không làm chuyển màu giấy quỳ tím.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng<br/>b. Sai. Một số base rất yếu không làm đổi màu quỳ tím.<br/>c. Sai. Một số acid rất yếu không làm đổi màu quỳ tím.<br/>d. Sai. Muối vẫn có thể làm đổi màu quỳ tím.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de09_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Polystyrene là một loại nhựa thông dụng được dùng để làm đường ống nước. Nguyên liệu để sản xuất polystyrene là styrene \\left(\\mathrm{C}_6 \\mathrm{H}_5 \\mathrm{CH}=\\mathrm{CH}_2\\right) . Styrene được điều chế từ phản ứng sau:<br/>C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CH<sub>3</sub>(g) ⇌ C<sub>6</sub>H<sub>5</sub>CH=CH<sub>2</sub>(g) + H<sub>2</sub>(g) , or298H 123 kJD=",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tăng áp suất của bình phản ứng, cân bằng chuyển dịch theo chiều nghịch.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tăng nhiệt độ của phản ứng cân bằng chuyển dịch theo chiều thuận.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng nồng độ của \\mathrm{C}_6 \\mathrm{H}_5 \\mathrm{CH}_2 \\mathrm{CH}_3 hoặc tách styrene ra khỏi bình phản ứng, cân bằng chuyển dịch theo chiều nghịch.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thêm chất xúc tác, cân bằng chuyển dịch theo chiều thuận.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng. Tăng áp suất của bình phản ứng: Cân bằng chuyển dịch theo chiều nghịch là chiều làm giảm số mol khí.<br/>b. Đúng. Tăng nhiệt độ của phản ứng: Cân bằng chuyển dịch theo chiều thuận tức chiều phản ứng thu nhiệt.<br/>c. Sai. Tăng nồng độ của C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CH<sub>3</sub>: Cân bằng chuyển dịch theo chiều thuận, là chiều làm giảm nồng độ của C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CH<sub>3.</sub><br/>d. Sai. Thêm chất xúc tác: Cân bằng không chuyển dịch.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de09_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm theo các bước sau:<br/>Bước 1: Nạp đầy khí ammonia vào bình thủy tinh trong suốt, đậy bình bằng nút cao su có ống thủy tinh vuốt nhọn xuyên qua.<br/>Bước 2: Nhúng đầu ống thủy tinh vào một chậu thủy tinh chứa nước có pha thêm dung dịch phenolphtalein. Một lát sau, nước trong chậu phun vào bình thành những tia màu hồng.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khí ammonia tan nhiều trong nước làm áp suất trong bình tăng dẫn đến nước bị hút vào bình.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch phenolphtalein có màu hồng chứng tỏ ammonia có tính acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu thay khí ammonia bằng khí hydrogen chloride thì hiện tượng thí nghiệm vẫn không thay đổi.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ammonia tan tốt trong nước là do ammonia tạo được liên kết hydrogen với nước.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Áp suất trong bình giảm.<br/>b. Sai. Dung dịch NH<sub>3</sub> có tính base.<br/>c. Sai. HCl tan trong nước tạo môi trường acid nên không làm phenolphtalein chuyển màu.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de09_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử nitric acid, nguyên tử N có hóa trị V.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở dạng đậm đặc, nitric acid dược dùng để sản xuất thuốc nổ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mưa acid làm tăng sự ăn mòn vật liệu kim loại của các công trình ngoài trời.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nước thải chăn nuôi là một trong những yếu tố gây nên hiện tượng phú dưỡng cho ao, hồ.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Nguyên tử N trong phân tử HNO<sub>3</sub> có hóa trị IV.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de09_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: HCl(g), O<sub>2</sub>(g), AlCl<sub>3</sub>(aq), NaOH(aq), và CuO(s). Có bao nhiêu chất trong dãy phản ứng được với NH<sub>3</sub>(g) (điều kiện phản ứng cần thiết có đầy đủ)?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de09_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất và ion sau: Fe<sup>3+</sup>, Ba(OH)<sub>2</sub>, NH<sub>3</sub>, NH<sub>4</sub><sup>+</sup>, SO<sub>3</sub><sup>2–</sup>, HCOONa, HSO<sub>4</sub><sup>–</sup> và Cl<sup>–</sup>. Theo thuyết Bronsted – Lowry, số chất và ion đóng vai trò base là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de09_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các thí nghiệm sau:<br/>(1) Cho dung dịch HNO<sub>3</sub> vào dung dịch NaOH.<br/>(2) Cho dung dịch BaCl<sub>2</sub> vào dung dịch Na<sub>2</sub>CO<sub>3</sub>.<br/>(3) Cho dung dịch NaCl vào dung dịch AgNO<sub>3</sub>.<br/>(4) Cho dung dịch HCl vào dung dịch NaF.<br/>(5) Cho FeS vào dung dịch H<sub>2</sub>SO<sub>4</sub> loãng.<br/>Có bao nhiêu thí nghiệm xảy ra phản ứng hóa học?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de09_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Từ V<sub>1</sub> mL dung dịch HCl có pH = 2, tiến hành pha loãng thành V<sub>2</sub> mL dung dịch HCl có pH = 4. Tỉ lệ V<sub>2</sub>/V<sub>1</sub> bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "100",
        "explanation": "Đáp án: 100.<br/>Trước khi pha loãng: pH = 2 ⇒ [H<sup>+</sup>]<sub>1</sub> = 10<sup>-2</sup> M.<br/>Sau khi pha loãng: pH = 4 ⇒ [H<sup>+</sup>]<sub>2</sub> = 10<sup>-4</sup> M.<br/>Vì số mol H<sup>+</sup> không đổi: n<sub>H+</sub> = V<sub>1</sub> · [H<sup>+</sup>]<sub>1</sub> = V<sub>2</sub> · [H<sup>+</sup>]<sub>2</sub>.<br/>Tỉ lệ thể tích cần pha loãng: \\frac{V_2}{V_1} = \\frac{10^{-2}}{10^{-4}} = 100 lần.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de09_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Xét cân bằng của dung dịch NH<sub>3</sub> 0,1M ở 25<sup>0</sup>C<br/>NH<sub>3</sub> + H<sub>2</sub>O 4NHOH+-+ ; K<sub>C</sub> = 1,74.10<sup>-5</sup><br/>Bỏ qua sự phân li của nước, giá trị pH của dung dịch trên là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "11",
        "explanation": "Đáp án: 11.<br/>NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup><br/>Ban đầu: 0,1<br/>Phản ứng: x → x → x<br/>Cân bằng: 0,1 - x x x<br/>K<sub>b</sub> = \\frac{x^2}{0,1 - x} ≈ \\frac{x^2}{0,1} = 1,74 · 10<sup>-5</sup> ⇒ x = [OH<sup>-</sup>] ≈ 1,32 · 10<sup>-3</sup> M.<br/>pOH = -log(1,32 · 10<sup>-3</sup>) ≈ 2,88 ⇒ pH = 14 - pOH ≈ 11,12 ≈ 11.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de09_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Quá trình hình thành đạm nitrate cho đất từ nước mưa được biểu diễn theo sơ đồ sau:<br/>+++++-¾ → ¾ → → → → +2222OOOHO2233NNONOHNOHNO<br/>Tính lượng ion nitrate (theo gam) mà đất được cung cấp từ 1 L không khí (ở đkc) nếu giả sử hiệu suất chung cho cả quá trình là 40% và nitrogen chiếm khoảng 78% thể tích không khí? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "1561",
        "explanation": "Đáp án: 1561.<br/>2KKN1000100078nmoln.mol24,7924,79100=Þ=<br/>Bảo toàn nguyên tố N: 23NNO2n n-= 3NO100078..224,7910m.62.40%156,6g00-==<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa11_gk1_de10",
    "code": "H11-GK1-10",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
    "badge": "Giữa Kì 1",
    "grade": "11",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_gk1_de10_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hằng số cân bằng K<sub>C</sub> của phản ứng phụ thuộc vào yếu tố nào dưới đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Áp suất của hệ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nồng độ các chất phản ứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhiệt độ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất xúc tác",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de10_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất điện li yếu là những chất khi tan vào nước thì",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "không phân li thành ion",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chỉ một phần các phân tử tan phân li thành ion",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phân li hoàn toàn thành ion",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phân huỷ thành các chất mới",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de10_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, nguyên tố nitrogen tồn tại trong hợp chất hữu cơ nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tinh bột",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cellulose",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Protein",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Glucose",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de10_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng phú dưỡng không gây ra ảnh hưởng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các sinh vật phù du sống dưới nước phát triển mạnh mẽ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tăng các chất lơ lửng, chất hữu cơ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Suy giảm lượng oxygen trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Làm chất lượng nước tốt hơn",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de10_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết N-H trong phân tử NH<sub>3</sub> là liên kết",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cộng hóa trị không phân cực",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "liên kết cho – nhận",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "liên kết ion",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cộng hóa trị phân cực",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de10_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây tan trong nước tạo môi trường acid?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "K<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CaCl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NaNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa11_gk1_de10_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở nhiệt độ thường, khí nitrogen khá trơ về mặt hóa học. Nguyên nhân là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nguyên tử nitrogen có độ âm điện lớn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nguyên tử nitrogen có bán kính lớn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phân tử nitrogen có liên kết ba bền vững",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "năng lượng liên kết ba trong phân tử nitrogen nhỏ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa11_gk1_de10_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cân bằng hoá học là cân bằng động, do khi ở trạng thái cân bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tốc độ phản ứng thuận và phản ứng nghịch bằng nhau",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng nghịch dừng lại nhưng phản ứng thuận vẫn xảy ra",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nồng độ của các chất sản phẩm và chất phản ứng bằng nhau",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phản ứng thuận dừng lại nhưng phản ứng nghịch vẫn xảy ra",
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
        "id": "hoa11_gk1_de10_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nitrogen monoxide được tạo thành khi mưa dông kèm theo sấm sét do phản ứng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NO(g) + O<sub>2</sub>(g) → NO<sub>2</sub>(g)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4NH<sub>3</sub>(g) + 5O<sub>2</sub>(g) 4NO(g) + 6H<sub>2</sub>O(g)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4NH<sub>3</sub>(g) + 3O<sub>2</sub>(g) 2N<sub>2</sub>(g) + 6H<sub>2</sub>O(g)",
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
        "id": "hoa11_gk1_de10_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất khí nào sau đây tan nhiều trong nước ở điều kiện thường?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "O<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NO",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa11_gk1_de10_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình điện li nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "KClO<sub>3</sub> → K<sup>+</sup> + ClO<sub>3</sub><sup>–</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ba(NO<sub>3</sub>)<sub>2</sub> → Ba<sup>2+</sup> + 2NO<sub>3</sub><sup>–</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>3</sub> + H<sub>2</sub>O  NH<sub>4</sub><sup>+</sup> + OH<sup>–</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe(OH)<sub>2</sub> → Fe<sup>2+</sup> + 2OH<sup>–</sup>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa11_gk1_de10_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng sau trong hệ kín:<br/>2NO<sub>2</sub> (g, nâu đỏ) ⇌ N<sub>2</sub>O<sub>4</sub> (g, không màu) 0r298H 58 kJD=-<br/>Thực hiện hệ phản ứng này trong xilanh kín có pit-tông ở nhiệt độ thường và không đổi.<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\"></th><th class=\"px-2 py-1 border border-slate-300\">Tăng áp suất của hệ bằng cách đẩy pit-tông để thể tích giảm</th><th class=\"px-2 py-1 border border-slate-300\">Giảm áp suất của hệ bằng cách kéo pit-tông để thể tích tăng</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Sự thay đổi màu nâu đỏ trong ống nghiệm</td><td class=\"px-2 py-1 border border-slate-300\">(1)</td><td class=\"px-2 py-1 border border-slate-300\">(2)</td></tr></table></div><br/>Các hiện tượng (1), (2) tương ứng là màu của chất trong ống nghiệm",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhạt đi, đậm lên",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đậm lên, nhạt đi",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "không thay đổi",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đều đậm lên",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa11_gk1_de10_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ammonia được sử dụng làm chất làm lạnh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các muối ammonium có tính chất lưỡng tính",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Muối ammonium là tinh thể ion, dễ tan trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các muối ammonium kém bền với nhiệt",
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
        "id": "hoa11_gk1_de10_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chuẩn bị hai đầu đũa thuỷ tinh quấn bông. Đũa 1 nhúng vào dung dịch X đặc, đũa 2 nhúng vào dung dịch NH<sub>3</sub> đặc, sau đó đưa lại gần nhau. Quan sát thấy có khói trắng xuất hiện. Dung dịch chất X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "FeCl<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NaCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCl",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa11_gk1_de10_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dung dịch NaHCO<sub>3</sub> xảy ra các cân bằng sau:<br/>HCO<sub>3</sub><sup>–</sup> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> + OH<sup>–</sup> (1)HCO<sub>3</sub><sup>–</sup> + H<sub>2</sub>O ⇌ CO<sub>3</sub><sup>2–</sup> + H<sub>3</sub>O<sup>+</sup> (2)<br/>Phát biểu nào dưới đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phản ứng thuận (1), H<sub>2</sub>O đóng vai trò base",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phản ứng thuận (2), ion HCO<sub>3</sub><sup>–</sup> đóng vai trò base",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phản ứng nghịch (2), CO<sub>3</sub><sup>2–</sup> đóng vai trò là acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cân bằng (1), (2) cho thấy ion HCO<sub>3</sub><sup>–</sup> có tính lưỡng tính",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa11_gk1_de10_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hoa cẩm tú cầu là loài hoa tượng trưng cho lòng biết ơn và sự chân thành, vẻ kì diệu của cẩm tú cầu là sự đổi màu ngoạn mục của nó. Màu của loài hoa này có thể thay đổi tùy thuộc vào pH của thổ nhưỡng nên có thề điểu chỉnh màu hoa thông qua việc điều chỉnh độ pH của đất trồng<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">pH đất trồng</th><th class=\"px-2 py-1 border border-slate-300\">< 7</th><th class=\"px-2 py-1 border border-slate-300\">= 7</th><th class=\"px-2 py-1 border border-slate-300\">> 7</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Hoa sẽ có màu</td><td class=\"px-2 py-1 border border-slate-300\">Lam</td><td class=\"px-2 py-1 border border-slate-300\">Trắng sữa</td><td class=\"px-2 py-1 border border-slate-300\">Hồng</td></tr></table></div><br/>Khi trồng loài hoa trên, nếu ta bón thêm 1 ít vôi (CaO) hoặc đạm 2 lá (NH<sub>4</sub>NO<sub>3</sub>) và chỉ tưới nước thì khi thu hoạch hoa sẽ có màu lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hồng - lam",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "lam – hồng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "trắng sữa – hồng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hồng – trắng sữa",
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
        "id": "hoa11_gk1_de10_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy gồm tất cả các chất khi tác dụng với HNO<sub>3</sub> thì HNO<sub>3</sub> chỉ thể hiện tính oxi hoá là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mg, H<sub>2</sub>, S, Fe<sub>3</sub>O<sub>4</sub>, Fe(OH)<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Al, FeCO<sub>3</sub>, HI, CaO, FeO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cu, C, Fe<sub>2</sub>O<sub>3</sub>, Fe(OH)<sub>2</sub>, SO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na<sub>2</sub>SO<sub>3</sub>, P, CuO, CaCO<sub>3</sub>, Ag",
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
        "id": "hoa11_gk1_de10_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sơ đồ thiết bị tổng hợp ammonia trong công nghiệp theo quá trình Haber (Haber – Bosch) sau:<br/>Phát biểu nào sau đây không đúng?",
        "images": [
          "/assets/hoa11/midterm/h11_gk1_de10_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau khi đã hóa lỏng ammonia, hydrogen và nitrogen sẽ đưa qua ống dẫn khí thải để loại bỏ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất xúc tác dùng trong phản ứng tổng hợp ammonia là bột sắt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng tổng hợp ammonia là phản ứng thuận nghịch",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Do ammonia dễ hoá lỏng hơn nên khi làm lạnh hỗn hợp sẽ tách được ammonia lỏng ra khỏi hỗn hợp khí",
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
        "id": "hoa11_gk1_de10_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Phosphorus pentachloride (PCl<sub>5</sub>) là một hợp chất được ứng dụng trong tổng hợp hóa học. Bên cạnh đó, phosphorus pentachloride kém bền với nhiệt và bị phân hủy khi nung nóng. Tại 300<sup>o</sup>C, phản ứng:<br/>PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g) có K<sub>C</sub> = 0,24.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Biểu thức hằng số cân bằng nồng độ của phản ứng là K<sub>C</sub> = 325[PCl][Cl][PCl] .",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tại 300<sup>o</sup>C, hiệu suất của phản ứng phân hủy luôn nhỏ hơn 50%.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thời điểm các giá trị nồng độ [PCl<sub>5</sub>] = 5,0 mol L<sup>-1</sup>, [PCl<sub>3</sub>] = 2,5 mol L<sup>-1</sup>, [Cl<sub>2</sub>] = 1,9 mol L<sup>-1</sup> là thời điểm phản ứng đã đạt đến trạng thái cân bằng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi giảm áp suất chung, hiệu suất phản ứng phân hủy PCl<sub>5</sub> tăng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Chưa khẳng định được.<br/>c. Ta có C2,5.1,9K0,950,245==¹ nên đây chưa phải là trạng thái cân bằng.<br/>d. Đúng. Giảm áp suất cân bằng chuyển dịch theo chiều làm tăng số mol khí là chiều thuận.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de10_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Dịch vị dạ dày của con người có chứa acid HCl với pH dao động khoảng 2 - 4. Đây là khoảng pH phù hợp đê các enzyme tiêu hoá (các chất xúc tác sinh học) hoạt động hiệu quả.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nồng độ H<sup>+</sup> trong dịch vị dạ dày của con người từ khoảng 10<sup>-4</sup> đến 10<sup>-2</sup> M.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Việc thiếu acid trong dạ dày là một nguyên nhân gây nên bệnh nhiễm khuẩn đường tiêu hoá.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể dùng thuốc muối NaHCO<sub>3</sub> khi điều trị bệnh thừa acid trong dạ dày.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sử dụng các loại đồ uống có gas có thể điều trị bệnh viêm loét dạ dày.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng. NaHCO<sub>3</sub> trung hòa được HCl.<br/>d. Sai. Không nên sử dụng đồ uống có gas do có CO<sub>2</sub> hòa tan vào trong nước tạo môi trường acid làm giảm pH. Khi sử dụng uống thường xuyên hàng ngày dễ gây ra tích tụ cặn trong thận.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de10_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau về nitric acid (HNO<sub>3</sub>) là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử HNO<sub>3</sub> chứa nguyên tử N có số oxi hóa cao nhất (+5) nên thể hiện tính oxi hóa mạnh.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết O – H trong phân tử HNO<sub>3</sub> phân cực về phía O.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phân tử HNO<sub>3</sub> có chứa hai liên kết cho nhận N → O.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tử HNO<sub>3</sub> có khả năng cho proton, thể hiện tính chất của một acid Bronsted-Lowry.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai Chỉ có 1 liên kết cho – nhận N → O.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de10_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm cho một ít chất chỉ thị phenolphthalein vào dung dịch ammonialoãng thu được dung dịch (A). Chia dung dịch (A) vào 4 ống nghiệm.<br/>- Ống nghiệm 1 đun nóng dung dịch một hồi lâu.<br/>- Ống nghiệm 2 thêm dung dịch HCl với số mol HCl bằng số mol NH<sub>3</sub> có trong dung dịch (A).<br/>- Ống nghiệm 3 thêm vài giọt dung dịch Na<sub>2</sub>CO<sub>3</sub>.<br/>- Ống nghiệm 4 thêm từ từ dung dịch AlCl<sub>3</sub> tới dư.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Màu hồng của dung dịch ở ống nghiệm 1 nhạt dần.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch ở ống nghiệm 2 có màu hồng đậm hơn.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Màu hồng của dung dịch ở ống nghiệm 3 nhạt dần, sau đó mất hẳn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch ở ống nghiệm 2 có màu hồng đậm hơn, đồng thời có xuất hiện kết tủa keo trắng.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Trong dung dịch ammonia tồn tại cân bằng hoá học sau: NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup><br/>a. Đúng. Khi đun nóng, màu hồng của dung dịch nhạt dần do khí NH<sub>3</sub> bay lên nên làm cân bằng hoá học chuyển dịch theo chiều nghịch.<br/>b. Sai. Khi cho HCl vào với số mol bằng số mol NH<sub>3</sub> thì dung dịch mất màu hồng vì tạo ra NH<sub>4</sub>Cl có pH < 7.<br/>c. Sai. Khi thêm một vài giọt dung dịch Na<sub>2</sub>CO<sub>3</sub>, dung dịch (A) có màu hồng đậm vì muối Na<sub>2</sub>CO<sub>3</sub> thuỷ phân cho môi trường base:<br/>Na<sub>2</sub>CO<sub>3</sub> → 2Na<sup>+</sup> + CO<sub>3</sub><sup>2-</sup><br/>CO<sub>3</sub><sup>2-</sup> + H<sub>2</sub>O ⇌ HCO<sub>3</sub><sup>-</sup> + OH<sup>-</sup>.<br/>d. Sau. Khi thêm AlCl<sub>3</sub> tới dư xảy ra phản ứng sau:<br/>AlCl<sub>3</sub> + 3NH<sub>3</sub> + 3H<sub>2</sub>O → Al(OH)<sub>3</sub>↓ + 3NH<sub>4</sub>Cl<br/>NH<sub>4</sub>Cl và AlCl<sub>3</sub> dư đều thuỷ phân cho môi trường acid ⇒ màu hồng của dung dịch (A) mất dần.<br/>NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O ⇌ NH<sub>3</sub> + H<sub>3</sub>O<sup>+</sup><br/>Al<sup>3+</sup> + 3H<sub>2</sub>O ⇌ Al(OH)<sub>3</sub>↓+ 3H<sup>+</sup>",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de10_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: HCl, Al<sub>2</sub>O<sub>3</sub>, C<sub>6</sub>H<sub>6</sub>, NH<sub>4</sub>NO<sub>3</sub>, C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>, ZnSO<sub>4</sub> và C<sub>2</sub>H<sub>5</sub>OH. Có bao nhiêu chất trong các chất trên là chất không điện li?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa11_gk1_de10_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Xét phản ứng xảy ra trong lò luyện gang:<br/>()()()()0232FeOs3COg2Fes3COg ; H0++D<<br/>Có bao nhiêu tác động làm cân bằng chuyển dịch theo chiều thuận trong số các tác động sau: (1) tăng áp suất; (2) giảm nồng độ CO<sub>2</sub>(g); (3) tăng nhiệt độ; (4) cho thêm Fe<sub>2</sub>O<sub>3</sub>(s); (5) tăng nồng độ CO(g).",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Lưu ý: Đối với hệ cân bằng có chất rắn thì việc thêm hay bớt lượng chất rắn không ảnh hưởng đến cân bằng.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_gk1_de10_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Ở 25<sup>o</sup>C, giá trị pH của dung dịch Ba(OH)<sub>2</sub> 0,005M là bao nhiêu? (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "11.4",
        "explanation": "Đáp án: 11,4.<br/>Ba(OH)<sub>2</sub> → Ba<sup>2+</sup> + 2OH<sup>-</sup>.<br/>[OH<sup>-</sup>] = 2 · C<sub>M Ba(OH)2</sub> = 2 · 0,00125 = 0,0025 M.<br/>pOH = -log(0,0025) ≈ 2,6 ⇒ pH = 14 - 2,6 = 11,4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa11_gk1_de10_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Bình kín dung tích không đổi chứa hỗn hợp khí X gồm N<sub>2</sub> và H<sub>2</sub> (tỉ lệ mol tương ứng là 3 : 7) có chất xúc tác thích hợp, áp suất trong bình là p atm. Nung nóng bình để thực hiện phản ứng tổng hợp NH<sub>3</sub> rồi làm nguội bình về nhiệt độ ban đầu, thu được hỗn hợp khí Y và áp suất trong bình là 0,902p atm. Tính hiệu suất phản ứng tổng hợp NH<sub>3</sub>.",
        "images": [],
        "correctAnswer": "21",
        "explanation": "Đáp án: 21.<br/>Phương trình hoá học: N<sub>2</sub> + 3H<sub>2</sub>⇌ 2NH<sub>3</sub><br/>Ban đầu: 3 7 0<br/>Phản ứng: x 3x 2x<br/>Sau phản ứng: (3 – x) (7 – 3x) 2x<br/>Tổng số mol hỗn hợp sau: n<sub>sau</sub> = (3 - x) + (7 - 3x) + 2x = 10 - 2x.<br/>Tỉ lệ áp suất: \\frac{p_2}{p_1} = \\frac{n_2}{n_1} = \\frac{10 - 2x}{10} = 0,902 ⇒ x ≈ 0,49 mol.<br/>Hiệu suất tổng hợp theo H<sub>2</sub>: H% = \\frac{3x}{7} · 100% = \\frac{3 · 0,49}{7} · 100% = 21%.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_gk1_de10_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dung dịch X (H<sup>+</sup>, Ba<sup>2+</sup>, Cl<sup>–</sup>) tác dụng với dung dịch Y (K<sup>+</sup>, SO<sub>3</sub><sup>2–</sup>, CH<sub>3</sub>COO<sup>–</sup>). Có bao nhiêu phản ứng xảy ra trong dung dịch?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>H<sup>+</sup> tác dụng với SO<sub>3</sub><sup>2–</sup>, CH<sub>3</sub>COO<sup>–</sup><br/>Ba<sup>2+</sup> tác dụng với SO<sub>3</sub><sup>2–</sup>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa11_gk1_de10_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Một cái ao dùng để nuôi tôm chứa 1000 m<sup>3</sup> nước có pH = 5. Trước khi nuôi, người ta làm tăng độ pH trong ao lên thành 8,0 bằng cách hòa tan m gam vôi sống (chứa 80% CaO, còn lại là tạp chất trơ không tan) vào nước trong ao. Tính giá trị m.",
        "images": [],
        "correctAnswer": "385",
        "explanation": "Đáp án: 385.<br/>Khi pH = 5 ta có: 35Hn1000.10.1010mol-+==<br/>Khi pH = 8 ta có: OHn- <sub>dư</sub> = OHn- <sub>(bđ)</sub> – OHn- <sub>(pư)</sub> 1000.10<sup>3</sup>.10<sup>-6</sup> = OHn- <sub>(bđ)</sub> – 10<br/>OHn- <sub>(bđ)</sub> = 11 mol<br/>Tổng số mol OH<sup>-</sup> cần trung hòa và nâng pH lên 8 là: n<sub>OH-</sub> = 11 mol.<br/>n<sub>CaO</sub> = \\frac{1}{2} n<sub>OH-</sub> = \\frac{11}{2} = 5,5 mol.<br/>Khối lượng CaO nguyên chất: m = 5,5 · 56 = 308 gam.<br/>Khối lượng vôi sống thực tế (độ tinh khiết 80%): m<sub>vôi sống</sub> = \\frac{308}{80%} = 385 gam.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  }
];

export function getMidtermExamById(id: string): Chuong1Exam | undefined {
  return HOA11_MIDTERM_EXAMS.find(e => e.id === id || e.code === id);
}

export function calculateMidtermExamScore(exam: Chuong1Exam, answers: Record<string, any>) {
  if (!exam || !exam.questions) {
    return { score: 0, part1Score: 0, part2Score: 0, part3Score: 0, correctCount: 0, totalQuestions: 0 };
  }

  let part1Score = 0;
  let part2Score = 0;
  let part3Score = 0;
  let correctCount = 0;

  exam.questions.forEach((q) => {
    const userAns = answers[q.id];

    if (q.part === 1) {
      const correctOpt = q.options?.find((o) => o.isCorrect)?.letter || q.correctAnswer;
      if (userAns && userAns === correctOpt) {
        part1Score += (q.points || 0.25);
        correctCount += 1;
      }
    } else if (q.part === 2) {
      if (userAns && typeof userAns === 'object' && q.options) {
        let correctSub = 0;
        q.options.forEach((opt) => {
          const userSubVal = userAns[opt.id || opt.letter?.toLowerCase()];
          const isActuallyTrue = Boolean(opt.isCorrect);
          if (userSubVal === 'true' && isActuallyTrue) correctSub++;
          else if (userSubVal === 'false' && !isActuallyTrue) correctSub++;
        });

        if (correctSub === 1) part2Score += 0.1;
        else if (correctSub === 2) part2Score += 0.25;
        else if (correctSub === 3) part2Score += 0.5;
        else if (correctSub === 4) part2Score += 1.0;

        if (correctSub === 4) correctCount += 1;
      }
    } else if (q.part === 3) {
      if (userAns !== undefined && userAns !== null && String(userAns).trim() !== '') {
        const rawUser = String(userAns).trim().toLowerCase().replace(',', '.');
        const rawCorrect = String(q.correctAnswer || '').trim().toLowerCase().replace(',', '.');
        const numUser = parseFloat(rawUser);
        const numCorrect = parseFloat(rawCorrect);

        let isMatch = false;
        if (!isNaN(numUser) && !isNaN(numCorrect)) {
          isMatch = Math.abs(numUser - numCorrect) < 0.01;
        } else {
          isMatch = (rawUser === rawCorrect);
        }

        if (isMatch) {
          part3Score += (q.points || 0.25);
          correctCount += 1;
        }
      }
    }
  });

  const totalScore = Math.round((part1Score + part2Score + part3Score) * 100) / 100;
  return {
    score: totalScore,
    part1Score: Math.round(part1Score * 100) / 100,
    part2Score: Math.round(part2Score * 100) / 100,
    part3Score: Math.round(part3Score * 100) / 100,
    correctCount,
    totalQuestions: exam.questions.length
  };
}
