// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI CUỐI HỌC KÌ 1 HÓA HỌC 11 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi Cuối Học Kì 1 Hóa Học Lớp 11 Chuẩn Cấu Trúc 2025
 * Chuẩn hóa 100% trắc nghiệm theo đúng quy định Bộ Giáo Dục:
 * - Phần I: Câu trắc nghiệm nhiều phương án lựa chọn
 * - Phần II: Câu trắc nghiệm đúng / sai
 * - Phần III: Câu trắc nghiệm trả lời ngắn
 */

export interface Chuong1Question {
  id: string;
  number: number;
  part: number;
  type: 'multiple_choice' | 'true_false' | 'short_answer' | 'essay';
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

export const HOA11_FINAL_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa11_ck1_de01",
    "code": "H11-CK1-01",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de01_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các phát biểu sau đây, phát biểu nào đúng khi một hệ ở trạng thái cân bằng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thuận đã dừng.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng nghịch đã dừng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ chất tham gia và sản phẩm bằng nhau.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nồng độ của các chất trong hệ không đổi.",
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
        "id": "hoa11_ck1_de01_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mối quan hệ giữa tốc độ phản ứng thuận (v<sub>t</sub>) và tốc độ phản ứng nghịch (v<sub>n</sub>) ở trạng thái cân bằng được biểu diễn như thế nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "v<sub>t</sub>= 2v<sub>n</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "v<sub>t</sub>= v<sub>n</sub>  0",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "v<sub>t</sub>= 0,5v<sub>n</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "v<sub>t</sub>= v<sub>n</sub>= 0.",
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
        "id": "hoa11_ck1_de01_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo thuyết Brønsted-Lowry, base là chất",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phân li ra OH<sup>–</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "có khả năng nhận electron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có khả năng nhận proton H<sup>+</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "có khả năng cho proton H<sup>+</sup>.",
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
        "id": "hoa11_ck1_de01_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng sau: 2C(s) + O<sub>2</sub>(g)    2CO(g). Biểu thức hằng số cân bằng K<sub>C</sub> của phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "K<sub>C</sub> =  [][][]222.COCO",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "K<sub>C</sub> =  [][]22COO .",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K<sub>C</sub> =  [][][]222.COCO",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "K<sub>C</sub> =  [][]22OCO .",
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
        "id": "hoa11_ck1_de01_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận định nào sau đây về phân tử nitrogen là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có ba liên kết đơn bền vững.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chứa nguyên tử nitrogen có số oxi hoá là -3.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có liên kết cộng hoá trị có cực.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thể hiện cả tính oxi hoá và tính khử.",
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
        "id": "hoa11_ck1_de01_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có thể dùng để làm khô khí ammonia?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>SO<sub>4</sub> đặc",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CaO",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CuSO<sub>4</sub> khan",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "P<sub>2</sub>O<sub>5</sub>.",
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
        "id": "hoa11_ck1_de01_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hơi thủy ngân rất độc, do đó phải thu hồi thủy ngân (mercury) rơi vãi bằng cách",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhỏ nước bromide lên giọt thủy ngân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhỏ dung dịch nước muối lên giọt thủy ngân.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "rắc bột sulfur lên giọt thủy ngân",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "rắc bột phosphorus lên giọt thủy ngân.",
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
        "id": "hoa11_ck1_de01_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cách pha loãng sulfuric acid đặc nào sau đây là an toàn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Rót nhanh acid vào nước và khuấy đều",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Rót nhanh nước vào acid và khuấy đều.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Rót từ từ nước vào acid và khuấy đều",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Rót từ từ acid vào nước và khuấy đều.",
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
        "id": "hoa11_ck1_de01_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phú dưỡng là hiện tượng xảy ra do sự gia tăng hàm lượng của nguyên tố nào trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe, Mn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "N, P",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ca, Mg",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cl, F.",
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
        "id": "hoa11_ck1_de01_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng chuyển hóa hydrogen sulfide trong khí thiên nhiên thành sulfur được thực hiện theo sơ đồ phản ứng: H<sub>2</sub>S + SO<sub>2</sub>  ¾¾®  S + H<sub>2</sub>O.<br/>Khối lượng sulfur tối đa tạo ra khi chuyển hóa 5000 m<sup>3</sup> khí thiên nhiên (đkc) (chứa 5 mg H<sub>2</sub>S/m<sup>3</sup>) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "50,0 g",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "25,0 g",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "35,3 g",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "100,0 g.",
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
        "id": "hoa11_ck1_de01_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Muối X không tan trong nước và các dung môi hữu cơ. Trong y học, X thường được dùng làm chất cản quang xét nghiệm X-quang đường tiêu hóa. Công thức của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "BaSO<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "MgSO<sub>4</sub>.",
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
        "id": "hoa11_ck1_de01_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phản ứng:<br/>(a)  t22SOSO¾+¾®o (b)  26S3 FSF+®<br/>(c)  HgSHgS+® (d)  22H SHS+® .<br/>Số phản ứng trong đó sulfur đơn chất đóng vai trò chất khử là",
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
            "text": "2.",
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
            "text": "4 .",
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
        "id": "hoa11_ck1_de01_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết hoá học chủ yếu giữa các nguyên tử trong hợp chất hữu cơ là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "liên kết hydrogen",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tương tác Van der waals.",
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
            "text": "liên kết cộng hoá trị.",
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
        "id": "hoa11_ck1_de01_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong những dãy chất sau đây, dãy nào có các chất là đồng phân của nhau?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>5</sub>OH, CH<sub>3</sub>CHO.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>OCH<sub>3</sub>, C<sub>2</sub>H<sub>5</sub>OH.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>COOCH<sub>3</sub>, CH<sub>3</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>4</sub>H<sub>10</sub>, C<sub>6</sub>H<sub>6</sub>.",
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
        "id": "hoa11_ck1_de01_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số sóng hấp thụ đặc trưng trên phổ hồng ngoại của một số nhóm chức cơ bản được cho ở bảng (a). Hợp chất X có công thức phân tử C<sub>3</sub>H<sub>6</sub>O và phổ hồng ngoại như hình (b) dưới đây:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhóm chức</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Số sóng (cm-1)</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-OH (alcohol)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3500 - 3200</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-NH- (amine)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 - 3000</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-CHO (aldehyde)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2830 - 2695 (C-H)<br/>1740 - 1685 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-CO (ketone)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1715 - 1666 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-COOH (carboxylic)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 - 2500 (OH)<br/>1760 - 1690 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-COO (ester)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1750 - 1715 (C=O)</td></tr></table></div><br/>Bảng (a)                                                                     Hình (b)<br/>Công thức cấu tạo của X là",
        "images": [
          "/assets/hoa11/final/h11_ck1_de1_image12.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CHO.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>=CHCH<sub>2</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>COCH<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>CH<sub>2</sub>COOH.",
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
        "id": "hoa11_ck1_de01_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để tách các chất lỏng ra khỏi hỗn hợp các chất có nhiệt độ sôi khác nhau, nhằm thu được chất lỏng tinh khiết hơn dùng phương pháp nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phương pháp chưng cất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phương pháp chiết.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phương pháp kết tinh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sắc kí cột.",
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
        "id": "hoa11_ck1_de01_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phổ khối lượng (MS) của ethanol được cho ở hình dưới đây:<br/>Phân tử khối của ethanol là",
        "images": [
          "/assets/hoa11/final/h11_ck1_de1_image13.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "45",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "31",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "46",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "29.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_ck1_de01_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chọn phát biểu sai? Trong hợp chất hữu cơ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "các nguyên tử liên kết với nhau theo đúng hóa trị và trật tự nhất định.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "các nguyên tử carbon liên kết với nhau tạo thành mạch carbon dạng không phân nhánh, vòng và phân nhánh.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tính chất của các chất phụ thuộc vào thành phần phân tử và cấu tạo hóa học.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "carbon có hai hóa trị là II và IV.",
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
        "id": "hoa11_ck1_de01_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây về ammonia (NH<sub>3</sub>) là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử NH<sub>3</sub> có dạng hình chóp đáy tam giác.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cho giấy quỳ tím khô vào bình đựng khí NH<sub>3</sub> thì giấy quỳ tím chuyển sang màu xanh.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phân tử NH<sub>3</sub> có tính khử mạnh là do trên nguyên tử nitrogen còn cặp electron chưa liên kết.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ammonia tan tốt trong nước là do tạo được liên kết hydrogen với nước.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Quỳ tím ẩm khi tiếp xúc với NH<sub>3</sub> sẽ chuyển dần sang màu xanh.<br/>c. Sai. Tính khử của NH<sub>3</sub> là do nguyên tử N có số oxi hóa là -3.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de01_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Để tách và tinh chế các chất trong hỗn hợp người ta dùng các phương pháp tách và tinh chế hợp chất hữu cơ: chưng cất, chiết, kết tinh, sắc kí …",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ngâm hoa quả làm siro thuộc phương pháp chiết.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Làm đường từ mía thuộc phương pháp kết tinh..",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nấu rượu uống thuộc phương pháp kết tinh.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tích thổ nhưỡng thuộc phương pháp chiết lỏng - rắn.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Nấu rượu thuộc phương pháp chưng cất.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de01_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Dung dịch H<sub>2</sub>SO<sub>4</sub> loãng có tính chất chung của acid như làm quỳ hóa đỏ, tác dụng với kim loại, base, muối,… Ngoài tính acid mạnh, dung dịch H<sub>2</sub>SO<sub>4</sub> đặc còn có tính oxi hóa mạnh.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho thanh Fe (iron) vào dung dịch H<sub>2</sub>SO<sub>4</sub> loãng, iron tan ra và có sủi bọt khí.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cho dung dịch BaCl<sub>2</sub> vào dung dịch H<sub>2</sub>SO<sub>4,</sub>thấy xuất hiện kết tủa đen.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cho vụn đồng (copper) vào dung dịch sulfuric acid đặc và nóng thấy vụn đồng tan tạo dung dịch màu xanh đồng thời có khí màu nâu đỏ thoát ra.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho từng giọt sulfuric acidđặc vào đường saccharose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) màu trắng, đường chuyển màu nâu đen sau đó trào lên khỏi miệng cốc.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Kết tủa BaSO<sub>4</sub> màu trắng.<br/>c. Sai. Vụn đồng tan tạo dung dịch màu xanh đồng thời có khí mùi hắc thoát ra.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de01_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Quá trình đốt cháy nhiên liệu trong ô tô sinh ra nhiều khí như SO<sub>2</sub>, CO, NO. Từ năm 1975, người ta thiết kế “bộ chuyển đổi xúc tác” trong hệ thống xả khí của ô tô (và cả trong máy phát điện) nhằm tạo điều kiện thuận lợi cho phản ứng: 2CO(g) + 2NO(g) → 2CO<sub>2</sub>(g) + N<sub>2</sub>(g).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng trên chuyển các khí độc hai như CO, NO thành khí không hoặc ít độc hại hơn.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phản ứng trên, chất khử là NO và chất oxi hóa là CO.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biết enthalpy tạo thành chuẩn của CO(g), NO(g), CO<sub>2</sub>(g) lần lượt là -110,5; 91,3; -393,5 (kJ.mol<sup>-1</sup>). Giá trị tuyệt đối của biến thiên enthalpy của phản ứng trên là 748,6 kJ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Từ kết quả tính được ở câu c), phản ứng trên không thuận lợi về mặt năng lượng.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng. Phản ứng này có ý nghĩa quan trọng trong việc giảm thiểu ô nhiễm môi trường.<br/>b. Sai. Chất khử là CO và chất oxi hóa là NO.<br/>c. Đúng.  D=---+=-or298H2.(393,5)[2.(110,5)2.91,3]748,6kJ . Giá trị tuyệt đối thì ta lấy 748,6 kJ.<br/>d. Sai. Phản ứng trên có  Dor298H < 0 là phản ứng tỏa nhiệt nên thuận lợi về mặt năng lượng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de01_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Một dung dịch có nồng độ H<sup>+</sup> bằng 0,001 M thì nồng độ OH<sup>–</sup> của dung dịch đó là 1.10<sup>–a</sup>M. Giá trị của a là bao nhiêu?",
        "images": [],
        "correctAnswer": "11",
        "explanation": "Đáp án: 11.<br/>141110[OH]10M.0,001---==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de01_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: CCl<sub>4</sub>, HCN, CH<sub>2</sub>=CH<sub>2</sub>, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, Na<sub>2</sub>CO<sub>3</sub>, CH<sub>3</sub>COONa và Al<sub>4</sub>C<sub>3</sub>. Trong số các chất trên, có bao nhiêu chất hữu cơ?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de01_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu đồng phân cấu tạo mạch hở có cùng công thức phân tử C<sub>3</sub>H<sub>8</sub>O?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>CH<sub>3</sub> – CH<sub>2</sub> – CH<sub>2</sub> – OH ; CH<sub>3</sub> – CH(OH) – CH<sub>3</sub> ; CH<sub>3</sub> – O – CH<sub>2</sub> – CH<sub>3</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de01_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "L-serine đóng vai trò quan trọng trong quá trình tổng hợp protein. Công thức cấu tạo của L-serine được cho như sau:<br/>Phân tử khối của L-serine là bao nhiêu?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de1_image14.png"
        ],
        "correctAnswer": "105",
        "explanation": "Đáp án: 105.<br/>Công thức: C<sub>3</sub>H<sub>7</sub>NO<sub>3</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de01_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Phẩn lớn sulfuric acid được sản xuất từ lưu huỳnh (sulfur), oxygen và nước theo công nghệ tiếp xúc theo sơ đồ:<br/>2324SSOSOHSO¾¾®¾¾®¾¾®<br/>Để sản xuất được 100 tấn H<sub>2</sub>SO<sub>4</sub> 98% thì cần bao nhiêu tấn sulfur. Biết hiệu suất của cả quá trình điều chế đạt 96%. (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "33,3",
        "explanation": "Đáp án: 33,3.<br/>24SHSOS100.98%1nn1m1.32.33,39880%===Þ==  tấn.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de01_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Từ tinh dầu hồi, người ta tách được anetol - một chất thơm được dùng sản xuất kẹo cao su. Anetol có khối lượng mol phân tử bằng 148. Phân tích nguyên tố cho thấy anetol có %C = 81,08%; %H = 8,10%, còn lại là oxygen. Tổng hệ số của các nguyên tố trong anetol là bao nhiêu?",
        "images": [],
        "correctAnswer": "23",
        "explanation": "Đáp án: 23.<br/>%O = 10,82%<br/>Vậy CTĐGN của anetol là C<sub>10</sub>H<sub>12</sub>O ⟹ CTPT là (C<sub>10</sub>H<sub>12</sub>O)<sub>n</sub><br/>M<sub>anetol</sub> = 148 = 148n ⟹ n =1<br/>Vậy CTPT của anetol là C<sub>10</sub>H<sub>12</sub>O.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa11/final/h11_ck1_de1_image20.png"
        ],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck1_de02",
    "code": "H11-CK1-02",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de02_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự điện li là quá trình",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phân li các chất khi tan trong nước thành các phân tử nhỏ hơn.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hòa tan các chất trong nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phân li các chất khi tan trong nước thành các ion.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phân li các chất khi tan trong nước thành các chất đơn giản.",
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
        "id": "hoa11_ck1_de02_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng thuận nghịch là phản ứng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "xảy ra theo hai chiều ngược nhau trong cùng điều kiện..",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "xảy ra hoàn toàn.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "xảy ra chậm.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "luôn có nồng độ chất phản ứng bằng nồng độ sản phẩm.",
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
        "id": "hoa11_ck1_de02_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hóa học sau: N<sub>2</sub> (g) + 3H<sub>2</sub> (g)   2NH<sub>3</sub>(g)  or298HD < 0. Tổng số mol của hỗn hợp khí khi hệ đạt cân bằng ở nhiệt độ 400<sup>o</sup>C và 500<sup>o</sup>C là lượt là x và y. Mối quan hệ giữa x và y là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "x > y",
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
            "text": "x < y",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "5x = 4y.",
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
        "id": "hoa11_ck1_de02_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, sulfur tồn tại ở dạng tinh thể, được tạo nên từ các phân tử sulfur. Số nguyên tử trong mỗi phân tử sulfur là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "6",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "8.",
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
        "id": "hoa11_ck1_de02_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong khí quyển, tỉ lệ thể tích nitrogen chiếm khoảng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "78%",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "21%",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "80%",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "20%.",
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
        "id": "hoa11_ck1_de02_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nitric acid thường được sử dụng để phá mẫu quặng trong việc nghiên cứu, xác định hàm lượng các kim loại trong quặng do có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tính oxi hoá mạnh",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tính khử.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tính acid mạnh.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tính khử và tính axit mạnh.",
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
        "id": "hoa11_ck1_de02_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính base của ammonia được thể hiện qua phản ứng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NH<sub>3</sub> + HCl  → NH<sub>4</sub>Cl",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4NH<sub>3</sub> + 3O<sub>2</sub>  ot¾¾®  2N<sub>2</sub>+ 6H<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4NH<sub>3</sub> + 5O<sub>2</sub>  otPt¾¾®  4NO + 6H<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2NH<sub>3</sub> + 3CuO  ot¾¾®  3Cu + 2N<sub>2</sub>↑ + 3H<sub>2</sub>O.",
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
        "id": "hoa11_ck1_de02_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mưa acid là hiện tượng nước mưa có lẫn các hạt acid làm cho nước mưa có độ pH nhỏ hơn 5. Mưa acid gây ảnh hưởng nghiêm trọng đến môi trường, cây trồng và cả sức khỏe con người. Nguyên nhân chủ yếu gây ra hiện tượng mưa acid là do khí  2SO và khí X đã gây ô nhiễm không khí. Khí X là",
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
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NO<sub>2</sub>.",
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
        "id": "hoa11_ck1_de02_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi trộn dung dịch  24NaSO  với dung dịch  2BaCl , phản úng thực chất xảy ra trong dung dịch là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2244BaSOBaSO+-+®",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaClNaCl+-+® .",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2244BaNaSOBaSO2Na+++®+",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2244BaClSOBaSO2Cl--+®+ .",
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
        "id": "hoa11_ck1_de02_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không bay hơi ở điều kiện thường?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2HO",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3HNO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3NH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "24HSO .",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa11_ck1_de02_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong quá trình trồng trột, người nông dân được khuyến cáo không bón vôi sống (thành phần chính là CaO ) cùng với phân đạm ammonium. Nguyên nhân của khuyến cáo này là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "thất thoát đạm vì giải phóng ammonia",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tạo thành hỗn hợp gây cháy nổ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tạo acid làm ảnh hưởng tới cây trồng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "làm tăng độ chua của đất.",
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
        "id": "hoa11_ck1_de02_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất nào sau đây là dẫn xuất của hydrocarbon?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>OH",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>6</sub>H<sub>6</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>2</sub>H<sub>2</sub>.",
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
        "id": "hoa11_ck1_de02_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào dưới đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết hóa học chủ yếu trong phân tử hợp chất hữu cơ là liên kết cộng hóa trị.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các hợp chất hữu cơ thường khó bay hơi, bền với nhiệt và khó cháy.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phần lớn các hợp chất hữu cơ không tan trong nước, nhưng tan trong dung môi hữu cơ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng hóa học của hợp chất hữu cơ thường xảy ra chậm và theo nhiều hướng khác nhau.",
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
        "id": "hoa11_ck1_de02_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Việc tách các chất ra khỏi nhau bằng phương pháp sắc kí dựa trên đặc tính nào sau đây của chất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử khối",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ sôi.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khả năng hấp phụ và hoà tan",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhiệt độ nóng chảy.",
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
        "id": "hoa11_ck1_de02_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ngâm củ nghệ với ethanol nóng, sau đó lọc bỏ phần bã, lấy dung dịch đem cô để làm bay hơi bớt dung môi. Phần dung dịch còn lại sau khi cô được làm lạnh, để yên một thời gian rồi lọc lấy kết tủa curcumin màu vàng. Từ mô tả ở trên, hãy cho biết, người ta đã sử dụng các kĩ thuật tinh chế nào để lấy được curcumin từ củ nghệ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chiết, chưng cất và kết tinh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chiết và kết tinh.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chưng chất và kết tinh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chưng cất, kết tinh và sắc kí.",
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
        "id": "hoa11_ck1_de02_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất X có công thức đơn giản nhất là CH<sub>2</sub>O. Phân tử khối của X được xác định thông qua phổ khối lượng với peak ion phân tử có giá trị m/z lớn nhất bằng 60. Công thức phân tử của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>4</sub>O.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>.",
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
        "id": "hoa11_ck1_de02_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng các chất có cấu tạo và tính chất hoá học tương tự nhau, chúng chỉ hơn kém nhau một hay nhiều nhóm metylen (-CH<sub>2</sub>-) được gọi là hiện tượng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "đồng phân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đồng vị",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đồng đẳng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đồng khối.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_ck1_de02_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất sau: CH<sub>3</sub>-O-CH<sub>3</sub>(1); C<sub>2</sub>H<sub>5</sub>OH (2); CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH (3); CH<sub>3</sub>CH(OH)CH<sub>3</sub>(4); CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub>(5); CH<sub>3</sub>-OH (6). Cho biết các cặp chất là đồng phân của nhau?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) và (3); (2) và (5).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) và (2); (3) và (4).",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) và (4); (3) và (5).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) và (5); (2) và (4).",
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
        "id": "hoa11_ck1_de02_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng thuận nghịch: 2NO(g) + O<sub>2</sub>(g)    2NO<sub>2</sub>(g). Nghiên cứu phản ứng với thành phần ban đầu chỉ có NO và O<sub>2</sub>, đường cong biểu diễn sự thay đổi nồng độ các chất theo thời gian phản ứng như sau:",
        "images": [
          "/assets/hoa11/final/h11_ck1_de2_image18.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đường (1) là nồng độ NO, đường (2) là nồng độ O<sub>2</sub> và đường (3) là nồng độ NO<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hằng số cân bằng nồng độ của phản ứng là K<sub>C</sub> = 7,2.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng đạt đến trạng thái cân bằng tại thời điểm t<sub>1</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tỉ lệ nồng độ của NO và O<sub>2</sub> không thay đổi trong quá trình phản ứng.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.  2C21,5K7,20,5.1,25== .<br/>c. Sai. Thời điểm t<sub>1</sub> các chất vẫn còn thay đổi nồng độ.<br/>d. Sai. Nồng độ của NO và O<sub>2</sub> không đổi khi đạt đến trạng thái cân bằng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de02_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Sulfur dioxide là một trong các khí gây ô nhiễm môi trường và gây ra nhiều tác hại.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguồn phát sinh SO<sub>2</sub> do núi lửa phun trào, đốt cháy nhiên liệu hóa thạch và khí thải do các phương tiện giao thông.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khí SO<sub>2</sub> là nguyên nhân chính gây nên hiện tượng hiệu ứng nhà kính.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khí SO<sub>2</sub> là một trong những tác nhân gây ô nhiễm môi trường và viêm đường hô hấp ở người, …",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để giảm thải SO<sub>2</sub> vào khí quyển cần xử lí khí thải công nghiệp và sử dụng các nhiên liệu sinh học và năng lượng tái tạo thay cho nhiên liệu hóa thạch.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. SO<sub>2</sub> là nguyên nhân chính gây nên hiện tượng mưa acid.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de02_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Sulfuric acid là một trong những hoá chất quan trọng nhất được sử dụng trong công nghiệp; được sản xuất hàng trăm triệu tấn mỗi năm, chiếm nhiều nhất trong ngành công nghiệp hoá chất. Phương pháp sản xuất sulfuric acid phổ biến nhất là phương pháp tiếp xúc, theo đó acid có thể được điều chế qua các giai đoạn sau:<br/>(1) FeS<sub>2</sub>(s) + O<sub>2</sub>(g)  ot¾¾®  Fe<sub>2</sub>O<sub>3</sub>(s) + SO<sub>2</sub>(g)<br/>(2) SO<sub>2</sub>(g) + O<sub>2</sub>(s)  o25450 C, VO  SO<sub>3</sub>(g) ;  or298HD  = –196 kJ<br/>(3) H<sub>2</sub>SO<sub>4</sub>(aq) + SO<sub>3</sub>(g)  ¾¾®  H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l)<br/>(4)H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l) + H<sub>2</sub>O(l)  ¾¾®  H<sub>2</sub>SO<sub>4</sub>(aq)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có ba phản ứng oxi hóa – khử đã xảy ra trong các giai đoạn sản xuất sulfuric acid trên.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để làm tăng hiệu suất tổng hợp SO<sub>3</sub> ở phản ứng (2) cần tăng nhiệt độ của phản ứng trên 450<sup>o</sup>C.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở phản ứng (3), có thể dùng nước hấp thụ trực tiếp SO<sub>3</sub> để tạo thành H<sub>2</sub>SO<sub>4</sub> với nồng độ cao.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để sản xuất được 1 tấn dung dịch H<sub>2</sub>SO<sub>4</sub> 98% cần 1 tấn quặng pyrite chứa 75% FeS<sub>2</sub>. Biết hiệu suất của cả quá trình điều chế đạt 80% và các tạp chất trong quặng không chứa sulfur.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Có 2 phản ứng (1), (2).<br/>b. Sai. Giữ ở nhiệt độ 450 - 500<sup>o</sup>C để làm tăng hiệu suất tổng hợp SO<sub>3</sub>.<br/>c. Sai. Nếu dùng H<sub>2</sub>O hấp thụ sẽ tạo ra dạng mù sulfuric, dạng này khó tan trở lại để thành dung dịch.<br/>d. Đúng.  ==2FeSm1.75%0,75 tấn = 750 kg<br/>Ta có sơ đồ:  oo222O,tO,tHO22324(1)(2)(3)FeS2SO2SO2HSO+++¾¾¾®¾¾¾®¾¾¾®<br/>kmol: 750120   750120 .2.80% = 10<br/>24HSOm10.98980kg==    24ddHSO980m1000kg98%==",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de02_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Một học sinh tiến hành tổng hợp isoamyl acetate (thành phần chính của dầu chuối) từ acetic acid và isoamyl alcohol theo phương trình hóa học sau:<br/>Sau thí nghiệm, tiến hành phân tách sản phẩm. Ghi phổ hồng ngoại của acetic acid, isoamyl alcohol và isoamyl acetate. Cho biết số sóng hấp thụ đặc trưng của một số liên kết trên phổ hồng như sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">(alcohol)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">(carboxylic acid)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">(ester, carboxylic acid)</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Số sóng (cm–1)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td></tr></table></div>",
        "images": [
          "/assets/hoa11/final/h11_ck1_de2_image23.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có ba chất hữu cơ trong phản ứng hóa học trên.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phổ hồng ngoại có số sóng hấp thụ ở  11750 cm-  mà không có số sóng hấp thụ đặc trưng của liên kết  OH<sup>-</sup>  là phổ của isoamyl acetate.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phổ hồng ngoại có số sóng hấp thụ ở  13350 cm-  là phổ của isoamyl alcohol.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dựa vào phổ hồng ngoại, phân biệt được acetic acid, isoamyl alcohol và isoamyl acetate.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de02_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu hợp chất hữu cơ trong các chất sau đây có mạch carbon phân nhánh?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de2_image42.png"
        ],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.<br/>Chọn các chất 1, 3, 4, 5, 8.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de02_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "pH của dung dịch thu được sau khi trộn 40 mL dung dịch HCl 0,5 M với 60 mL dung dịch NaOH 0,5 M bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "13",
        "explanation": "Đáp án: 13.<br/>n<sub>HCl</sub> = 0,02 mol; n<sub>NaOH</sub> = 0,03 mol  Þ  n<sub>NaOH dư</sub> = 0,01 mol  Þ  [NaOH] = [OH<sup>-</sup>] = 0,1 M<br/>Þ  pOH = 1  Þ  pH = 13.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de02_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất: Cu, Fe(OH)<sub>2</sub>, S, Fe<sub>3</sub>O<sub>4</sub>, BaCl<sub>2</sub>, NaHCO<sub>3</sub> lầnlượt vào H<sub>2</sub>SO<sub>4</sub> đặc, nóng. Có bao nhiêu trường hợp xảy ra phản ứng oxi hóa - khử?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de02_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Phương pháp tách biệt và tinh chế nào sau đây đúng với cách làm?<br/>(1) Quá trình làm muối ăn từ nước biển hay làm đường phèn từ nước mía là phương pháp kết tinh.<br/>(2) Nấu rượu sau khi ủ men rượu từ nguyên liệu như tinh bột hay xenlulozơ là phương pháp chưng cất.<br/>(3) Tách lấy tinh dầu từ hỗn hợp gồm tinh dầu sả nổi trên lớp nước là phương pháp chiết.<br/>(4) Làm trứng muối (ngâm trứng trong dung dịch NaCl bão hòa) là phương pháp kết tinh.<br/>Liệt kê đáp án theo số thứ tự tăng dần (ví dụ: 124, 24,…).",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de02_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Camphor có trong cây long não là một chất rắn kết tinh màu trắng hay trong suốt giống như sáp với mùi thơm đặc trưng, thường dùng trong y học. Phần trăm khối lượng của các nguyên tố trong camphor lần lượt là 78,94% carbon, 10,53% hydrogen và 10,53% oxygen. Cho phổ khối lượng của camphor như hình dưới đây:<br/>Tổng số nguyên tử có trong phân tử camphor là bao nhiêu?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de2_image34.png"
        ],
        "correctAnswer": "27",
        "explanation": "Đáp án: 27.<br/>Đặt công thức đơn giản nhất của camphor là C<sub>x</sub>H<sub>y</sub>O<sub>z</sub><br/>Ta có: x : y : z =  78,9410,5310,53::6,58:10,53:0,65810:16:112116==<br/>Þ  CTĐGN của camphor là C<sub>10</sub>H<sub>16</sub>O<br/>Vì mảnh có giá trị m/z lớn nhất ứng tới giá trị phân tử khối nên phân tử khối của camphor là 152.<br/>Đặt CTPT của camphor là (C<sub>10</sub>H<sub>16</sub>O)<sub>n</sub><br/>M = 152n = 152  Þ  n = 1  Þ  CTPT của camphor là C<sub>10</sub>H<sub>16</sub>O.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de02_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Sulfur dioxide là một trong các tác nhân gây mưa acid, phát thải chủ yếu từ các quá trình đốt cháy nhiên liệu như than đá, xăng, dầu,…<br/>Một nhà máy nhiệt điện than sử dụng hết 1200 tấn than đá/ngày, có thành phần chứa 1% sulfur về khối lượng để làm nhiên liệu. Biết chỉ có 80% sulfur chuyển hóa thành sulfur dioxide. Thể tích khí SO<sub>2</sub> (đkc) tối đa tạo ra khuếch tán vào khí quyển là bao nhiêu m<sup>3</sup>?",
        "images": [],
        "correctAnswer": "7437",
        "explanation": "Đáp án: 7437.<br/>ot22SOSO+¾¾®<br/>Khối lượng sulfur là: 1200.1%.1000 = 12000 kg<br/>2SSO12000nn.80%300(kmol)32===  23SOV300.24,797437(m)Þ==<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck1_de03",
    "code": "H11-CK1-03",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de03_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dùng dung môi lỏng hòa tan chất hữu cơ để tách chúng ra khỏi hỗn hợp rắn là phương pháp",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phưng pháp ngâm chiết",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chiết lỏng – lỏng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phương pháp chưng cất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chiết lỏng – rắn.",
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
        "id": "hoa11_ck1_de03_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Muối ammonium X được sử dụng làm phân bón đồng thời cũng có thể được sử dụng để điều chế một lượng nhỏ khí dinitrogen oxide (N<sub>2</sub>O). Tên gọi của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ammonium chloride",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ammonium nitrate.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ammonium nitrite.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ammonium carbonate.",
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
        "id": "hoa11_ck1_de03_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo thuyết cấu tạo hóa học, trong phân tử các chất hữu cơ, các nguyên tử liên kết với nhau",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "theo đúng hóa trị và một thứ tự nhất định",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "theo một thứ tự nhất định.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "theo đúng số oxi hóa",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "theo đúng hóa trị.",
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
        "id": "hoa11_ck1_de03_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên nhóm chức có trong phân tử CH<sub>3</sub>-CH=O là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ketone",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ester",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "alcohol",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "aldehyde.",
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
        "id": "hoa11_ck1_de03_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây không phải là phản ứng thuận nghịch?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOH + CH<sub>3</sub>OH ⇌ HCOOCH<sub>3</sub> + H<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2SO<sub>3</sub> ⇌ 2SO<sub>2</sub> + O<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HbO<sub>2</sub> + CO ⇌ HbCO + O<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Zn + HCl  ZnCl<sub>2</sub> + H<sub>2</sub>.",
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
        "id": "hoa11_ck1_de03_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dãy các chất sau: C<sub>3</sub>H<sub>8</sub>, CHCH, CH<sub>3</sub>OH, C<sub>6</sub>H<sub>6</sub>, C<sub>2</sub>H<sub>5</sub>I, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, HCN, CH<sub>3</sub>OCH<sub>3</sub>. Số dẫn xuất hydrocarbon trong dãy trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "6",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4",
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
            "text": "5.",
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
        "id": "hoa11_ck1_de03_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các hợp chất hữu cơ thường có đặc điểm chung nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dễ cháy và bền với nhiệt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết hóa học chủ yếu trong hợp chất hữu cơ là liên kết ion.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng hóa học của các chất hữu cơ thường xảy ra chậm và theo nhiều hướng khác nhau.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phần lớn không trong nước và dung môi hữu cơ không phân cực.",
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
        "id": "hoa11_ck1_de03_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng phú dưỡng là một biểu hiện của môi trường ao, hồ bị ô nhiễm do dư thừa các chất dinh dưỡng. Sự dư thừa dinh dưỡng chủ yếu do hàm lượng các ion nào sau đây vượt quá mức cho phép?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Calcium, magnesium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nitrate, phosphate.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sodium, potassium",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chloride, sulfate.",
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
        "id": "hoa11_ck1_de03_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình sau đây là phổ khối lượng của phân tử acetic acid:<br/>Phân tử khối của acetic acid là",
        "images": [
          "/assets/hoa11/final/h11_ck1_de3_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "43.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "45.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "60.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "29.",
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
        "id": "hoa11_ck1_de03_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phương trình hoá học sau:<br/>(1) S + O<sub>2</sub>  ¾¾®ot  SO<sub>2</sub>(2) S + Fe  ¾¾®ot  FeS<br/>Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "S vừa thể hiện tính oxi hoá, vừa thể hiện tính khử.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "S chỉ thể hiện tính oxi hoá.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "S chỉ thể hiện tính khử.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "S không thể hiện tính khử và không thể hiện tính oxi hoá.",
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
        "id": "hoa11_ck1_de03_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong tự nhiên, nitrogen chỉ tồn tại dạng đơn chất.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thành phần chính của khoáng diêm tiêu Chile là KNO<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nitrogen trong tự nhiên là hỗn hợp của hai đồng vị:  147N  (99,63%) và  157N  (0,37%).",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở dạng đơn chất, nitrogen chiến khoảng 20% thể tích của không khí.",
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
        "id": "hoa11_ck1_de03_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hai chất CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> và CH<sub>3</sub>CH(NH<sub>2</sub>)CH<sub>3</sub> thuộc loại đồng phân",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "mạch carbon.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "loại nhóm chức.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "vị trí nhóm chức.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hình học.",
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
        "id": "hoa11_ck1_de03_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không bay hơi ở điều kiện thường do nhiệt độ sôi rất cao (337 <sup>o</sup>C)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>O",
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
            "text": "NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>SO<sub>4</sub>.",
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
        "id": "hoa11_ck1_de03_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quy trình sản xuất đường mía trong công nghiệp được mô tả ngắn gọn như sau:<br/>Sulfur dioxide được sử dụng trong sản xuất đường mía nhờ vào",
        "images": [
          "/assets/hoa11/final/h11_ck1_de3_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tính độc hại.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tính tẩy màu.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tính oxi hóa.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tính diệt khuẩn.",
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
        "id": "hoa11_ck1_de03_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp chất nào sau đây cùng dãy đồng đẳng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>4</sub> và C<sub>2</sub>H<sub>4</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>4</sub> và C<sub>2</sub>H<sub>6</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>4</sub> và C<sub>2</sub>H<sub>6</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>2</sub>H<sub>2</sub> và C<sub>4</sub>H<sub>4</sub>.",
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
        "id": "hoa11_ck1_de03_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất hữu cơ X có 82,76% khối lượng là carbon, còn lại là hydrogen. Công thức đơn giản nhất của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>5</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>5</sub>H",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>5</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>5</sub>H<sub>2</sub>.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa11_ck1_de03_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử ammonia có dạng hình học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "đường thẳng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tam giác đều",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tứ diện",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chóp tam giác.",
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
        "id": "hoa11_ck1_de03_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(1) Trong phân tử HNO<sub>3</sub>, nguyên tử nitrogen có hoá trị V và số oxi hoá +5.<br/>(2) Nitric acid có tính acid mạnh, đồng thời là chất oxi hóa mạnh.<br/>(3) Nitric acid bị phân hủy chậm, dưới tác dụng của nhiệt độ hoặc ánh sáng.<br/>(4) Silver không tan trong dung dịch nitric acid đặc nguội.<br/>(5) Trong phân tử HNO<sub>3</sub>, liên kết O – H phân cực mạnh về phía nguyên tử hydrogen.<br/>Số phát biểu không đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "5.",
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
        "id": "hoa11_ck1_de03_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Một số loại thực vật chỉ phát triển tốt ở môi trường có pH phù hợp, việc nghiên cứu pH của đất rất quan trọng trong nông nghiệp. Một số loại cây trồng phù hợp với đất có giá trị pH cho trong bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cây trồng</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">pH thích hợp</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cây trồng</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">pH thích hợp</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Bắp</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">5,7 – 7,5</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Cây chè</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">4,5 – 5,5</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Cà chua</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">6,0 – 7,0</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Thanh long</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">4,0 – 6,0</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Cải thảo</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">6,5 – 7,0</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Lúa</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">5,5 – 6,5</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hành tây</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">6,4 – 7,9</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Mía</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">5,0 – 8,0</td></tr></table></div><br/>Một học sinh làm thí nghiệm xác định độ pH của đất như sau: Lấy một lượng đất cho vào nước rồi lọc lấy phần dung dịch. Dùng máy pH đo được giá trị pH là 4,52.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Vùng đất trên phù hợp trồng cây chè và thanh long.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Loại đất trên bị nhiễm chua, để trồng hành tây, cà chua, mía phát triển tốt ta cần khử chua cho đất bằng cách rắc vôi bột (chứa chủ yếu CaO) hoặc bón tro thực vật (tro đốt rơm rạ).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Để cây cải thảo và hành tây phát triển tốt, ta cần bón nhiều đạm hai lá (NH<sub>4</sub>NO<sub>3</sub>) qua nhiều vụ liên tiếp để đất có giá trị pH phù hợp.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để cải tạo đất cằn cỗi thì một biện pháp hữu hiệu là sử dụng phân bón hữu cơ như phân chuồng, phân trùn quế.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. NH<sub>4</sub>NO<sub>3</sub> sẽ làm tăng độ chua của đất (pH giảm), không phù hợp với cải thảo và hành tây.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de03_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Khi nhỏ vài giọt sulfuric acid đặc vào một xấp giấy ăn khô (thành phần chính là cellulose (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>), giấy ăn sẽ hoá đen ở chỗ tiếp xúc, bốc cháy và tạo nhiều khói, khói này có thể làm đổi màu giấy quỳ tím ẩm.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giấy ăn hoá đen (than hoá) là do cellulose trong giấy bị khử thành carbon.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nếu thay giấy quỳ tím ẩm bằng giấy nhúng dung dịch KMnO<sub>4</sub>, giấy sẽ bị mất màu.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong khói sinh ra, có chứa sulfur trioxide là một acidic oxide.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Việc rò rỉ sulfuric acid trong quá trình lưu trữ không đúng cách có thể gây hoả hoạn.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Sulfuric acid đặc hút nước mạnh làm cellulose trong giấy bị than hoá khi tiếp xúc.<br/>b. Đúng. SO<sub>2</sub> làm mất màu tím của dung dịch KMnO<sub>4</sub>.<br/>c. Sai. Khí SO<sub>2</sub> (sulfur dioxide).<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de03_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu nào sau là đúng hay sai khi nói về muối sulfate?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiều muối sulfate tan tốt trong nước nhưng một số muối như CaSO<sub>4</sub>, BaSO<sub>4</sub> rất ít tan trong nước.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Magnesium sulfate được dùng làm thuốc điều trị bệnh liên quan đến hồng cầu, dùng làm chất hút mồ hôi tay cho các vận động viên, …",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Calcium sulfate là thành phần chính của các loại thạch cao. Phân tử chất này thường ngậm nước với số lượng các phân tử H<sub>2</sub>O khác nhau, tạo ra các loại thạch cao có ứng dụng khác nhau.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Barium sulfate là chất rắn màu trắng, hầu như không tan trong nước. Chất này được dùng tạo màu trắng cho các loại giấy chất lượng cao.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Magnesium sulfate được dùng làm thuốc cung cấp magnesium cho cơ thể, giúp giảm các cơn đau cơ, giảm hiện tượng chuột rút, dùng làm chất hút mồ hôi tay cho các vận động viên,...<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de03_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Hợp chất X có công thức phân tử C<sub>3</sub>H<sub>6</sub>O. Trên phổ hồng ngoại của X có các tín hiệu hấp thụ đặc trưng trong khoảng 1740 – 1670 cm<sup>-1</sup>. Cho biết số sóng hấp thụ đặc trưng của một số liên kết trên phổ hồng như sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhóm chức</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Số sóng (cm-1)</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-OH (alcohol)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3500 - 3200</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-NH- (amine)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 - 3000</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-CHO (aldehyde)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2830 - 2695 (C-H)<br/>1740 - 1685 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-CO (ketone)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1715 - 1666 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-COOH (carboxylic)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 - 2500 (OH)<br/>1760 - 1690 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-COO- (ester)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1750 - 1715 (C=O)</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X có thể là hợp chất alcohol.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X có mạch carbon không phân nhánh.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X thuộc loại hợp chất carbonyl, phân tử có chứa nhóm chức C=O.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phần trăm khối lượng của nguyên tố carbon trong phân tử X chưa đến 60%.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>X là aldehyde có công thức cấu tạo là CH<sub>3</sub>CH<sub>2</sub>CHO.<br/>a. Sai.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. %C = 62,07%.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de03_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Quá trình sản xuất sulfuric acid trong công nghiệp được thực hiện dựa trên các phản ứng sau:<br/>(1)  ot22S O SO+¾¾®<br/>(2)  ot222324FeS  11O 2FeO  8SO+¾¾®+<br/>(3)  25oVO223t2SO  O 2SO+<br/>(4)  243227HSO  SO HSO+¾¾®<br/>Liệt kê các phản ứng xảy ra đồng thời quá trình oxi hóa và quá trình khử theo chiều tăng dần số thứ tự (ví dụ: 1234, 234,…).",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de03_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Trong phân tử ammonia, số cặp electron dùng chung giữa nguyên tử nitrogen với các nguyên tử hydrogen là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de03_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Amphetamine (còn được gọi là hồng phiến) là một dạng chất ma túy có tác dụng gây kích thích thần kinh, tăng cường sức chịu đựng, tăng cảm giác hưng phấn, nếu sử dụng quá liều sẽ gây nghiện, dẫn đến lạm dụng; ảnh hưởng xấu tới đến hệ thần kinh; gây rối loạn nhịp tim, tăng hoặc giảm huyết áp; gây rối loạn nhịp thở, co giật; suy nhược cơ thể… Amphetamine có cấu tạo như sau:<br/>Amphetamine có bao nhiêu nguyên tử hydrogen?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de3_image11.png"
        ],
        "correctAnswer": "13",
        "explanation": "Đáp án: 13.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de03_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Trong các chất sau: HCl, NaOH, HF, Fe<sub>2</sub>O<sub>3</sub>, K<sub>2</sub>SO<sub>4</sub>, NH<sub>4</sub>Cl và Fe(OH)<sub>2</sub>. Có bao nhiêu chất là chất điện li mạnh trong dãy các chất trên?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de03_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Để nghiên cứu thành phần hóa học của một loại cây thuốc người ta làm như sau: Ngâm mẫu cây trong dung môi thích hợp (thường là ethanol) một thời gian, sau đó gạn lấy chất lỏng. Đun sôi hỗn hợp để thu hồi bớt dung môi, được hỗn hợp sệt sệt gọi là cao tổng. Cho cao tổng vào cột sắc kí, sau đó đổ dung môi thích hợp vào trên lớp cao tổng. Dùng các lọ nhỏ hứng lấy các phân đoạn chất lỏng chảy ra khỏi cột sắc kí, sau đó đem xác định chất có trong mỗi phân đoạn. Trong quá trình trên đã áp dụng mấy phương pháp để tách và tinh chế chất?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>- Ngâm mẫu cây trong dung môi thích hợp (thường là ethanol) ⟹ Phương pháp chiết lỏng – rắn.<br/>- Đun sôi hỗn hợp để thu hồi bớt dung môi, được hỗn hợp sệt sệt gọi là cao tổng  phương pháp chưng cất.<br/>- Cho cao tổng vào cột sắc kí, sau đó đổ dung môi thích hợp vào trên lớp cao tổng  phương pháp sắc kí cột.<br/>Quá trình trên gồm 3 phương pháp: chiết lỏng - rắn, chưng cất, sắc kí.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de03_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Một phương pháp được đề xuất để loại bỏ SO<sub>2</sub> khỏi khí thải của nhà máy điện bằng cách dẫn khí thải qua dung dịch H<sub>2</sub>S. Cần bao nhiêu m<sup>3</sup> H<sub>2</sub>S (ở đkc) để loại bỏ SO<sub>2</sub> sinh ra khi đốt cháy hoàn toàn 2,0 tấn than chứa sulfur chiếm 3,6% theo khối lượng? (Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "112",
        "explanation": "Đáp án: 112.<br/>m<sub>S</sub> = 2000.3,6% = 72 kg<br/>S + O<sub>2</sub>  SO<sub>2</sub><br/>2H<sub>2</sub>S + SO<sub>2</sub>  3S + 2H<sub>2</sub>O<br/>3HSSOSHS222n2n2n4,5kmolV111,6m===Þ=<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck1_de04",
    "code": "H11-CK1-04",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de04_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cân bằng hóa học là trạng thái của phản ứng thuận nghịch khi",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tốc độ phản ứng thuận lớn hơn tốc độ phản ứng nghịch.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "các phản ứng thuận và phản ứng nghịch đã kết thúc.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tốc độ phản ứng thuận nhỏ hơn tốc độ phản ứng nghịch.",
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
        "id": "hoa11_ck1_de04_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức tính nào sau đây là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "pH = –lg[H<sup>+</sup>].",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[H<sup>+</sup>]= 10<sup>a</sup> thì pH = a.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "pH + pOH = 14.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[H<sup>+</sup>].[OH<sup>–</sup>]= 10<sup>–</sup><sup>14</sup>.",
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
        "id": "hoa11_ck1_de04_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong không khí, nitrogen chiếm khoảng bao nhiêu phần trăm thể tích?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "21%.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "90%.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "78%.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "50%.",
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
        "id": "hoa11_ck1_de04_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thạch cao sống là một đạng tồn tại phổ biến của sulfur trong tự nhiên, được sử dụng làm nguyên liệu để sản xuất xi măng, phấn viết bảng,... Công thức của thạch cao sống là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "BaSO<sub>4</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CaSO<sub>4</sub>.2H<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "MgSO<sub>4</sub>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CaSO<sub>4</sub>.5H<sub>2</sub>O.",
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
        "id": "hoa11_ck1_de04_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bước sơ cứu đầu tiên cần làm ngay khi một người bị bỏng sulfuric acid là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "rửa với nước lạnh nhiều lần.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "trung hoà acid bằng dung dịch NaHCO<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "băng bó tạm thời vết bỏng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đưa đến cơ sở y tế gần nhất.",
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
        "id": "hoa11_ck1_de04_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hoá học hữu cơ là ngành hoá học chuyên nghiên cứu về các........... Cụm từ thích hợp điền vào chỗ trống trong định nghĩa trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hợp chất hữu cơ.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hợp chất vô cơ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hợp chất phức.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hợp chất thiên nhiên.",
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
        "id": "hoa11_ck1_de04_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chiết là phương pháp dùng một dung môi thích hợp hoà tan chất cần tách chuyển sang pha lỏng (gọi là dịch chiết) và chất này được tách ra khỏi hỗn hợp các chất còn lại. Tách lấy dịch chiết, giải phóng dung môi sẽ thu được",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chất cần tách.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "các chất còn lại.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hỗn hợp ban đầu.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hợp chất khí.",
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
        "id": "hoa11_ck1_de04_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức phân tử cho biết thông tin nào sau đây về phân tử hợp chất hữu cơ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thành phần nguyên tố và số lượng nguyên tử của mỗi nguyên tố.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thành phần nguyên tố và tỉ lệ số lượng nguyên tử của mỗi nguyên tố.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số lượng nguyên tử mỗi nguyên tố và trật tự liên kết giữa các nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tỉ lệ số lượng nguyên tử của mỗi nguyên tố và trật tự liên kết giữa các nguyên tử.",
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
        "id": "hoa11_ck1_de04_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quá trình đốt than sinh ra nhiều loại khí thải, trong đó có khí SO<sub>2</sub>. Khí SO<sub>2</sub>mùi xốc và có khả năng gây viêm đường hô hấp. Tên gọi của SO<sub>2</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sulfur trioxide.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sulfuric acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sulfur dioxide.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hydrogen sulfide.",
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
        "id": "hoa11_ck1_de04_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp chất nào dưới đây là đồng phân loại nhóm chức?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>COCH<sub>3</sub> và CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>COOH và HCOOCH<sub>3</sub>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>2</sub> = CH – CH<sub>3</sub> và CH<sub>2</sub> = C(CH<sub>3</sub>) – CH<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH và CH<sub>3</sub>CH(OH)CH<sub>3</sub>.",
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
        "id": "hoa11_ck1_de04_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các yếu tố: (a) thành phần nguyên tố; (b) số lượng nguyên tử mỗi nguyên tố và (c) thứ tự liên kết của các nguyên tử trong phân tử, thì tính chất của phân tử hợp chất hữu cơ phụ thuộc vào các yếu tố nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a) và (b).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(b) và (c).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(a) và (c).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(a), (b) và (c).",
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
        "id": "hoa11_ck1_de04_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất nào sau đây là dẫn xuất của hydrocarbon?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CCl<sub>4</sub>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "KCN.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>6</sub>H<sub>6</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CaC<sub>2</sub>.",
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
        "id": "hoa11_ck1_de04_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, đồng vị của sulfur chiếm thành phần nhiều nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "<sup>34</sup>S",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "<sup>32</sup>S",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "<sup>36</sup>S",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "<sup>33</sup>S.",
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
        "id": "hoa11_ck1_de04_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất khí nào sau đây dễ tan trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "S<sub>8</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>3</sub>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NO.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N<sub>2</sub>.",
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
        "id": "hoa11_ck1_de04_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện thí nghiệm ảnh hưởng của nhiệt độ đến sự chuyển dịch cân bằng:<br/>CH<sub>3</sub>COONa + H<sub>2</sub>O ⇌ CH<sub>3</sub>COOH + NaOH ;  or298HD  > 0<br/>- Cho khoảng 10 mL dung dịch CH<sub>3</sub>COONa 0,5 M vào cốc thuỷ tinh, thêm 1 - 2 giọt phenolphthalein, khuấy đều.<br/>- Chia dung dịch thu được vào 3 ống nghiệm, ống nghiệm (1) đề so sánh, ống nghiệm (2) ngâm vào cốc nước đá, ống nghiệm (3) ngâm vào cốc nước nóng.<br/>Hãy cho biết màu sắc ở ống nghiệm (1) và sự thay đổi màu sắc ở ống nghiệm (2) và ống nghiệm (3) theo thứ tự nào sau đây:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "màu hồng, màu hồng nhạt dần, màu hồng đậm dần.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "màu hồng, màu hồng đậm dần, màu hồng nhạt dần.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "màu xanh, màu xanh nhạt dần, màu xanh đậm dần.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "màu xanh, màu xanh đậm dần, màu xanh nhạt dần.",
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
        "id": "hoa11_ck1_de04_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các dung dịch (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>, NH<sub>4</sub>Cl và dung dịch Na<sub>2</sub>SO<sub>4</sub>. Chọn thuốc thử để nhận biết các dung dịch trên?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch NaOH.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch Ba(OH)<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch AlCl<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch H<sub>2</sub>SO<sub>4</sub>loãng.",
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
        "id": "hoa11_ck1_de04_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dựa vào phổ IR của hợp chất X có công thức CH<sub>3</sub>COCH<sub>3</sub> dưới đây:<br/>Chỉ ra số sóng hấp thụ đặc trưng của nhóm C=O trong chất X là",
        "images": [
          "/assets/hoa11/final/h11_ck1_de4_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2995 cm<sup>-</sup><sup>1</sup>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2918 cm<sup>-</sup><sup>1</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1715 cm<sup>-1</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1213 cm<sup>-</sup><sup>1</sup>.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_ck1_de04_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một hợp chất hữu cơ A chứa 32% C, 4% H và 64% O về khối lượng. Biết một phân tử A có 6 nguyên tử oxygen, công thức phân tử của A là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>3</sub>O<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>4</sub>H<sub>6</sub>O<sub>6</sub>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>4</sub>O<sub>6</sub>.",
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
        "id": "hoa11_ck1_de04_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Quá trình nấu rượu gạo thủ công được thực hiện như sau:<br/>- Gạo được nấu chín, để nguội, rắc men, ủ kín 3 – 5 ngày, thu được một hỗn hợp chủ yếu gồm nước, ethanol và bã rượu.<br/>- Đun nóng hỗn hợp trên đến nhiệt độ sôi, hơi bay ra đi vào đường ống dẫn. Hỗn hợp hơi trong đường ống được làm lạnh sẽ hoá lỏng và chảy vào bình hứng (Hình 11.1). Biết rằng ethanol có nhiệt độ sôi thấp hơn nước.<br/>Quá trình này gọi là chưng cất rượu.",
        "images": [
          "/assets/hoa11/final/h11_ck1_de4_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong quá trình chưng cất, tỉ lệ ethanol/nước tăng dần.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ethanol có nhiệt độ sôi thấp hơn nước sẽ bay hơi ra trước rồi được ngưng tụ và lấy ở bình hứng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Vại trò chính của thùng nước lạnh là để ngưng tụ hơi nước.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Men đóng vai trò làm chất xúc tác cho quá trình lên men.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Tỉ lệ ethanol/nước giảm dần do ethanol có nhiệt độ sôi thấp hơn nước sẽ bay hơi ra trước rồi được ngưng tụ và lấy ở bình hứng.<br/>b. Đúng.<br/>c. Sai. Vại trò của thùng nước lạnh là để ngưng tụ ethanol.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de04_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện thí nghiệm sulfur tác dụng với sắt (iron) theo các bước sau:<br/>- Trộn đều bột sulfur với bột iron theo tỉ lệ khối lượng khoảng 1 : 1,5.<br/>- Lấy khoảng 2 g hỗn hợp vào ống nghiệm khô chịu nhiệt, dùng bông nút miệng ống nghiệm.<br/>- Hơ nóng đều nửa dưới ống nghiệm trên ngọn lửa đèn cồn, sau đó đun tập trung vào phần chứa hỗn hợp.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi đốt nóng hỗn hợp, sulfur nóng chảy, hỗn hợp cháy sáng và chuyển thành hợp chất màu đen.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sản phẩm tạo thành của phản ứng là muối iron(II) sulfide FeS<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phản ứng trên, sulfur đóng vai trò là chất khử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Việc hơ nóng đều ống nghiệm giúp nhiệt toả đều, tránh làm nứt, vỡ ống nghiệm khi lửa tụ nhiệt tại một điểm.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Muối là FeS (màu đen).<br/>c. Sai. Sulfur là chất oxi hóa, sắt là chất khử.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de04_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Hợp chất hữu cơ X có công thức cấu tạo như sau:",
        "images": [
          "/assets/hoa11/final/h11_ck1_de4_image5.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử chất X có chứa nhóm chức ester.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức phân tử của X là C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Công thức đơn giản nhất của X là CH<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong một phân tử chất X có 1 liên kết  và 11 liên kết .",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. CTĐG nhất là C<sub>2</sub>H<sub>4</sub>O.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de04_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Khí SO<sub>2</sub> do các nhà máy thải ra là nguyên nhân chính trong việc gây ô nhiễm môi trường. Theo quy chuẩn kĩ thuật quốc gia về chất lượng không khí xung quanh (QCVN 05:2013/ BTNMT) thì nếu lượng SO<sub>2</sub> vượt quá 350  ì g/m<sup>3</sup> không khí đo trong 1 giờ ở thành phố thì coi như không khí bị ô nhiễm. Cho biết 1 ì g = 10<sup>–6</sup> g.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số oxi hóa của sulfur trong phân tử SO<sub>2</sub> là +6.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "SO<sub>2</sub> là nguyên nhân chính gây ra hiện tượng mưa acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi SO<sub>2</sub> tác dụng với NO<sub>2</sub> (ở điều kiện thích hợp) thì SO<sub>2</sub> đóng vai trò là chất khử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Người ta lấy 50 lít không khí trong 1 giờ ở một thành phố và phân tích thấy có 12  ì g SO<sub>2</sub>, cuối cùng kết luận không khí ở đó không bị ô nhiễm.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. S có số oxi hóa là +4.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng. Đổi 50 lít = 0,05 m³<br/>Lượng SO<sub>2</sub> trong không khí đó được trong 1 giờ ở thành phố đó là: 12/0,05 = 240 μg/m<sup>3</sup> < 350 μg/m<sup>3</sup><br/>⟹ Không khí ở đó không bị ô nhiễm.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de04_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Phố khối lượng của naphtalene được cho trong hình dưới đây:<br/>Phân tử khối của naphtalene có giá trị là bao nhiêu?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de4_image7.png"
        ],
        "correctAnswer": "128",
        "explanation": "Đáp án: 128.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de04_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho sơ đồ thu khí ammoni bằng cách đẩy không khí (1, 2, 3) và đẩy nước (4):<br/>Cách thu khí ammonia theo đúng nguyên tắc là cách số mấy?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de4_image8.png"
        ],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de04_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dung dịch sulfuric acid đặc tác dụng với từng chất rắn sau: NaCl, NaBr, NaI,NaHCO<sub>3</sub> ở nhiệt độ thường. Có bao nhiêu phản ứng mà trong đó sulfuric acid đóng vai trò chất oxi hoá?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de04_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các bước tiến hành của phương pháp sắc kí cột như sau:<br/>(1) Cho dung môi thích hợp chảy liên tục qua cột sắc kí.<br/>(2) Cho hỗn hợp cần tách lên cột sắc kí.<br/>(3) Loại bỏ dung môi để thu được chất cần tách.<br/>(4) Sử dụng các cột thủy tinh có chứa các chất hấp phụ dạng bột (pha tĩnh).<br/>Liệt kê đáp án thành dãy bốn chữ số theo đúng thứ tự các bước tiến hành của phương pháp sắc kí cột (ví dụ: 1234, 3214,...).",
        "images": [],
        "correctAnswer": "4213",
        "explanation": "Đáp án: 4213.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de04_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu đồng phân cấu tạo ứng với công thức phân tử C<sub>5</sub>H<sub>12</sub>?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub>; CH<sub>3</sub>-CH(CH<sub>3</sub>)-CH<sub>2</sub>-CH<sub>3</sub>; C(CH<sub>3</sub>)<sub>4</sub>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de04_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Tại một công ty superphosphate và hóa chất, superphosphate kép được sản xuất từ quặng phosphorite theo hai giai đoạn sau:<br/>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 3H<sub>2</sub>SO<sub>4</sub> → 2H<sub>3</sub>PO<sub>4</sub> + 3CaSO<sub>4</sub><br/>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 4H<sub>3</sub>PO<sub>4</sub> → 3Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub><br/>Trung bình mỗi ngày, công ty sản xuất được 1872 tấn Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>, giả thiết hiệu suất của mỗi giai đoạn đạt 100%. Tính thể tích dung dịch H<sub>2</sub>SO<sub>4</sub> 70% (D = 1,6 tấn/m<sup>3</sup>) mà công ty đã dùng trong một ngày.",
        "images": [],
        "correctAnswer": "1400",
        "explanation": "Đáp án: 1400.<br/>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 4H<sub>3</sub>PO<sub>4</sub> → 3Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub><br/>32/38<br/>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 3H<sub>2</sub>SO<sub>4</sub> → 2H<sub>3</sub>PO<sub>4</sub> + 3CaSO<sub>4</sub>.<br/>1632/3<br/>Khối lượng dung dịch H<sub>2</sub>SO<sub>4</sub> là  16.98224070%=  tấn<br/>3m2240V1400mD1,6===<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck1_de05",
    "code": "H11-CK1-05",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de05_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng thuận nghịch là phản ứng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phản ứng xảy ra theo hai chiều ngược nhau trong cùng điều kiện.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chỉ xảy ra theo một chiều nhất định.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có phương trình hoá học được biểu diễn bằng mũi tên một chiều.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xảy ra giữa hai chất khí.",
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
        "id": "hoa11_ck1_de05_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công thức cấu tạo của phân tử nitric acid (HNO<sub>3</sub>)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có hai liên kết pi (π).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "có một liên kết cộng hoá trị theo kiểu cho - nhận.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nguyên tố nitrogen hoá trị V.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nguyên tử nitrogen liên kết trực tiếp với nguyên tử hydrogen.",
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
        "id": "hoa11_ck1_de05_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hoá học: H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI (g);  or298HD > 0. Cân bằng không bị chuyển dịch khi",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tăng nhiệt độ của hệ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "giảm nồng độ HI.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tăng nồng độ H<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "giảm áp suất chung của hệ.",
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
        "id": "hoa11_ck1_de05_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây thuộc loại chất điện li mạnh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HF",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HNO<sub>3</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án: D.<br/>HNO<sub>3</sub> là acid mạnh, phân li hoàn toàn trong nước nên là chất điện li mạnh: HNO<sub>3</sub> &rarr; H<sup>+</sup> + NO<sub>3</sub><sup>-</sup>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa11_ck1_de05_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch chất nào sau đây có pH > 7?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaNO<sub>3</sub>",
            "isCorrect": false
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
            "text": "H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "KOH.",
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
        "id": "hoa11_ck1_de05_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bộ dụng cụ chiết (được mô tả như hình vẽ bên) dùng để",
        "images": [
          "/assets/hoa11/final/h11_ck1_de5_image3.jpeg"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tách hai chất rắn tan trong dung dịch",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tách hai chất lỏng tan tốt vào nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tách hai chất lỏng không tan vào nhau",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tách chất lỏng và chất rắn.",
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
        "id": "hoa11_ck1_de05_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, nitrogen tồn tại ở cả dạng đơn chất (chiếm khoảng 78% thể tích không khí) và dạng hợp chất tồn tại tập trung ở một số mỏ khoáng dưới dạng sodium nitrate. Công thức của sodium nitrate là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NaCl",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaNO<sub>3</sub>.",
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
        "id": "hoa11_ck1_de05_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi có sấm chớp, khí quyển sinh ra khí nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CO.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NO.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "SO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CO<sub>2</sub>.",
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
        "id": "hoa11_ck1_de05_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất có công thức cấu tạo sau: HOCH<sub>2</sub>CH(OH)CHO (1); CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub> (2); HOCH<sub>2</sub>CH=CHCH<sub>2</sub>OH (3); CH<sub>3</sub>COOCH=CH<sub>2</sub> (4); CH<sub>3</sub>CH=CHCOOH (5); HCOOCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub> (6); HOCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CH=O (7). Cặp chất nào sau đây không phải là đồng phân của nhau?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(2) và (6)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(3) và (7)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(4) và (5)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) và (2).",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa11_ck1_de05_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vai trò của NH<sub>3</sub> trong phản ứng  ot,Pt3224NH5O4NO6HO+¾¾¾®+  là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chất khử.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chất oxi hóa.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "base.",
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
        "id": "hoa11_ck1_de05_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cách xử lý thủy ngân khi nhiệt kế thủy ngân không may bị vỡ là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "rắc bột sulfur lên thủy ngân rồi gom lại",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "rắc muối ăn lên thủy ngân rồi gom lại.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "rắc đường lên thủy ngân rồi gom lại",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "rắc bột sắt lên thủy ngân rồi gom lại.",
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
        "id": "hoa11_ck1_de05_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nguồn phát thải sulfur dioxide:<br/>(1) Núi lửa phun trào.<br/>(2) Nhà máy điện sử dụng nguồn năng lượng hóa thạch.<br/>(3) Các phương tiện giao thông vận tải.<br/>(4) Quá trình quang hợp của cây xanh.<br/>Những nguồn phát thải sulfur dioxide vào môi trường là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1), (3)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1), (2), (3)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(2), (3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(2), (3), (4).",
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
        "id": "hoa11_ck1_de05_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phổ hồng ngoại là phương pháp vật lí rất quan trọng và phổ biến để nghiên cứu về",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "thành phần nguyên tố chất hữu cơ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "thành phần phân tử hợp chất hữu cơ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cấu tạo hợp chất hữu cơ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cấu trúc không gian hợp chất hữu cơ.",
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
        "id": "hoa11_ck1_de05_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ứng dụng quan trọng nhất của sulfuric acid trong công nghiệp là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sản xuất phân bón",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "luyện kim.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sản xuất sơn, phẩm màu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chế hoá dầu mỏ.",
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
        "id": "hoa11_ck1_de05_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp sản xuất sulfuric acid, sulfur trioxide được hấp thụ vào dung dịch sulfuric acid đặc tạo thành những hợp chất có công thức chung là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>SO<sub>3</sub>.nSO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "SO<sub>3</sub>.",
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
        "id": "hoa11_ck1_de05_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vanillin có thành phần chính là chiết xuất hạt vani và được tìm thấy trong tự nhiên ở vỏ quả vani Planifolia. Mùi thơm ngọt ngào của nó có thể giúp chúng ta cảm thấy bình tĩnh và thư giãn. Nó được dùng làm hương liệu trong thực phẩm. Kết quả phân tích nguyên tố trong phân từ vanillin cho thấy phần trăm khối lượng carbon, hydrogen lần lượt bằng 63,16% và 5,26%, còn lại là oxygen. Từ phổ khối lượng, xác định được phân từ khối của vanillin bằng 152. Công thức phân tử của vanillin là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>8</sub>H<sub>8</sub>O<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>8</sub>H<sub>8</sub>O<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>4</sub>H<sub>8</sub>O<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>10</sub>H<sub>8</sub>O<sub>2</sub>.",
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
        "id": "hoa11_ck1_de05_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tách muối ăn ra khỏi hỗn hợp nước muối bằng phương pháp nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lọc",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chiết.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kết tinh",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dùng nam châm hút.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_ck1_de05_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phổ khối lượng của hợp chất hữu cơ X thu được như hình vẽ:<br/>Phân tử khối của hợp chất hữu cơ X là",
        "images": [
          "/assets/hoa11/final/h11_ck1_de5_image5.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "80",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "78",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "76",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "50.",
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
        "id": "hoa11_ck1_de05_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau là đúng hay sai khi nói về chất hữu cơ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết hóa học trong phân tử các hợp chất hữu cơ chủ yếu là liên kết cộng hóa trị.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đa số các chất hữu cơ có nhiệt độ sôi và nhiệt độ nóng chảy thấp, ít tan trong nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Theo thành phần nguyên tố trong phân tử, các hợp chất hữu cơ được phân loại thành hydrocarbon và dẫn xuất của hydrocarbon.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các chất methane (CH<sub>4</sub>), glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), saccharose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>), glycine (C<sub>2</sub>H<sub>5</sub>NO<sub>2</sub>) và sodium hydrogencarbonate (NaHCO<sub>3</sub>) đều là chất hữu cơ.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. NaHCO<sub>3</sub> không phải là chất hữu cơ.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de05_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho hai phương trình hóa học:<br/>(1) NH<sub>3</sub> + H<sub>2</sub>O ⇋ NH<sub>4</sub>+ + OH<sup>–</sup><br/>(2) CH<sub>3</sub>COOH + H<sub>2</sub>O ⇋ H<sub>3</sub>O+ + CH<sub>3</sub>COO<sup>–</sup>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo thuyết brondsted-lowry, nước là chất lưỡng tính.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Theo thuyết brondsted-lowry, H<sub>3</sub>O<sup>+</sup> là acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>3</sub> là một base mạnh.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>COOH là một acid mạnh.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. NH<sub>3</sub> là base yếu.<br/>d. Sai. CH<sub>3</sub>COOH là acid yếu.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de05_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng sau:<br/>Cho biết số sóng hấp thụ đặc trưng của một số liên kết trên trong phổ hồng ngoại như sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O–H (alcohol)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O–H (carboxylic acid)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C=O (ester, carboxylic acid)</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Số sóng (cm–1)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3650 – 3200</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 – 2500</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1780 – 1650</td></tr></table></div>",
        "images": [
          "/assets/hoa11/final/h11_ck1_de5_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có ba hợp chất hữu cơ trong phản ứng trên.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phổ hồng ngoại có số sóng hấp thụ ở 3450 cm<sup>-1</sup> là phổ của CH<sub>3</sub>CH<sub>2</sub>OH.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phổ hồng ngoại có số sóng hấp thụ ở 1750 cm<sup>-1</sup> mà không hấp thụ đặc trưng của liên kết O–H là phổ của CH<sub>3</sub>COOH.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dựa vào phổ hồng ngoại, không thể phân biệt được các chất hữu cơ có trong phản ứng trên.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Đó là CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>.<br/>d. Sai. Có thể phân biệt được dựa vào phổ IR.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de05_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho dãy chuyển hóa dưới đây:<br/>FeS<sub>2</sub>  (1)¾¾®   SO<sub>2</sub>  (2)¾¾®  SO<sub>3</sub>  (3)¾¾®  H<sub>2</sub>SO<sub>4</sub>  (4)¾¾®  (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có ba phản ứng mà nguyên tố sulfur đóng vai trò là chất khử.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sản phẩm của phản ứng (4) có thể dùng làm phân bón.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể phân biệt SO<sub>2</sub> và SO<sub>3</sub> bằng dung dịch BaCl<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Với 1 tấn FeS<sub>2</sub> ban đầu thì khối lượng (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> thu được là 377,3 kg. Biết hiệu suất mỗi phản ứng (1), (2), (3) là 70% và của phản ứng (4) là 100%.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Có hai phản ứng 1, 2 là sulfur thể hiện tính khử.<br/>b. Đúng.<br/>c. Đúng. SO<sub>3</sub> tạo kết tủa trắng với dung dịch BaCl<sub>2</sub> còn SO<sub>2</sub> không phản ứng.<br/>d. Sai.  ()()HSONHSONHSO244444322FeS21000nn2nm.132.(0,7).2754,6kg120==Þ== .",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de05_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Dung dịch sulfuric acid đặc có thể dùng làm khô bao nhiêu khí trong số các khí sau: CO, H<sub>2</sub>, CO<sub>2</sub>, SO<sub>2</sub>, O<sub>2</sub> và NH<sub>3</sub>?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de05_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Trong nước thải chứa các chất tan: urea, saccharose, NaCl, Na<sub>2</sub>CO<sub>3</sub>, NaHCO<sub>3</sub>, NH<sub>4</sub>NO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>HPO<sub>4</sub>, Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>. Nếu nước thải trên chảy vào vùng nước tù thì có bao nhiêu chất có thể gây nên hiện tượng phú dưỡng?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de05_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất có công thức cấu tạo sau:<br/>Liệt kê các chất có đồng phân hình học theo dãy số thứ tự tăng dần (123, 24,…).",
        "images": [
          "/assets/hoa11/final/h11_ck1_de5_image11.png"
        ],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de05_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: C<sub>2</sub>H<sub>6</sub>O, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, C<sub>3</sub>H<sub>7</sub>Cl, C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>, C<sub>5</sub>H<sub>9</sub>NO<sub>4</sub> và C<sub>6</sub>H<sub>6</sub>. Có bao nhiêu chất trong số các chất trên có công thức phân tử trùng với công thức đơn giản nhất?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de05_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Để xác định nồng độ của một dung dịch HCl, người ta thực hiện phép chuẩn độ với dung dịch NaOH 0,10 M. Trong một thí nghiệm, để chuẩn độ 100,0 mL dung dịch HCl đạt đến điểm tương đương cần chính xác 10,0 mL dung dịch NaOH 0,10 M. Xác định pH của dung dịch HCl.",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>n<sub>NaOH</sub> = n<sub>HCl</sub> = 0,001 mol  [H<sup>+</sup>] = 0,001/0,1 = 0,01M  pH = 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de05_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Năm 2020, một vụ nổ tại Thủ đô Beirut, Lebanon đã cướp đi sinh mạng hàng trăm người. Nguyên nhân vụ nổ được cho là do sự phân hủy 2750 tấn ammonium nitrate trên một tàu hàng bỏ hoang theo phương trình hóa học sau:<br/>NH<sub>4</sub>NO<sub>3</sub>(s)  ®   N<sub>2</sub>O(g) + 2H<sub>2</sub>O(g)     0298rHD   = –36kJ<br/>Nhiệt của vụ nổ trên tương đương lượng nhiệt của bao nhiêu tấn thuốc nổ TNT (2,4,6 – trinitrotoluene), biết nhiệt tỏa ra khi 1 kg TNT phát nổ là 1,165 MJ. Biết 1 MJ = 1.10<sup>6</sup> J. (Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "1062",
        "explanation": "Đáp án: 1062.<br/>Nhiệt toả ra từ vụ nổ:  ()362750.10.361,2375.10MJ80=<br/>Số tấn TNT tương đương:  631,2375.10.1010621,165-=  tấn.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck1_de06",
    "code": "H11-CK1-06",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de06_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tại nhiệt độ không đổi, ở trạng thái cân bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tốc độ phản ứng hoá học xảy ra chậm dần.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng hoá học không xảy ra.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nồng độ của các chất trong hỗn hợp phản ứng vẫn liên tục thay đổi.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nồng độ của các chất trong hỗn hợp phản ứng không thay đổi.",
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
        "id": "hoa11_ck1_de06_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chuẩn độ dung dịch NaOH chưa biết nồng độ bằng dung dịch chuẩn HCl 0,1M với chất chỉ thị phenolphtalein. Tại điểm tương đương, HCl hết nên nếu thêm tiếp NaOH, dung dịch sẽ",
        "images": [],
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
            "text": "chuyển sang màu hồng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "không chuyển màu",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chuyển sang màu tím.",
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
        "id": "hoa11_ck1_de06_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch của một base ở 25<sup>o</sup>C có:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[H<sup>+</sup>].[OH<sup>-</sup>] > 1,0.10<sup>-14</sup>M.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[H<sup>+</sup>] = 1,0.10<sup>-7</sup>M.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[H<sup>+</sup>] < 1,0.10<sup>-7</sup>M.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[H<sup>+</sup>] > 1,0.10<sup>-7</sup>M.",
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
        "id": "hoa11_ck1_de06_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng với sulfur?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Không tan trong nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nóng chảy ở 113<sup>o</sup",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C. Có hai dạng thù hình",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không tan trong carbon disulfide (CS<sub>2</sub>).",
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
        "id": "hoa11_ck1_de06_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho năng lượng liên kết  NNº  bằng 945 kJ/mol. Dự đoán về độ bền phân tử và khả năng phản ứng của nitrogen (N<sub>2</sub>) ở nhiệt độ thường?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kém bền và trơ về mặt  hóa học ở nhiệt độ thường",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kém bền và hoạt động hóa học mạnh ở nhiệt độ thường.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Bền và trơ về mặt hóa học ở nhiệt độ thường.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Bền và hoạt động hóa học mạnh ở nhiệt độ thường.",
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
        "id": "hoa11_ck1_de06_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Citric acid có nhiều trong quả chanh, có công thức cấu tạo sau:<br/>Trong phân tử citric acid có chứa những nhóm chức nào sau đây?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de6_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Alcohol và aldehyde",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Carboxylic acid và ketone.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Alcohol và ketone",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Carboxylic acid và alcohol.",
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
        "id": "hoa11_ck1_de06_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phổ khối lượng của chất hữu cơ (X) dưới đây:<br/>Chất (X) có thể là chất nào sau đây?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de6_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>5</sub>N",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>3</sub>H<sub>6</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>3</sub>H<sub>8</sub>O",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>4</sub>H<sub>10</sub>.",
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
        "id": "hoa11_ck1_de06_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất khí: H<sub>2</sub>S, NO, NO<sub>2</sub>, SO<sub>2</sub>. Số khí gây ô nhiễm môi trường khi phát thải vào không khí là:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1.",
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
            "text": "2.",
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
        "id": "hoa11_ck1_de06_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phản ứng sau:<br/>(a) S + O<sub>2</sub>  ot¾¾® SO<sub>2</sub> (b) Hg + S  ¾¾® HgS<br/>(c) S + 6HNO<sub>3</sub>  ¾¾® H<sub>2</sub>SO<sub>4</sub>+ 6NO<sub>2</sub> + 2H<sub>2</sub>O (d) Fe + S  ot¾¾® FeS<br/>Có bao nhiêu phản ứng trong đó sulfur đóng vai trò là chất khử?",
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
            "text": "4.",
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
        "id": "hoa11_ck1_de06_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tiến hành thí nghiệm khi cho dung dịch sulfuric acid đặc tác dụng với đường mía theo các bước như sau:<br/>- Bước 1: Lấy khoảng 10 gam đường mía cho vào cốc.<br/>- Bước 2: Nhỏ đều trên bề mặt đường mía khoảng 2 mL dung dịch sulfuric acid đặc.<br/>Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thí nghiệm trên chứng tỏ H<sub>2</sub>SO<sub>4</sub> đặc có tính háo nước.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sản phẩm khí thu được trong phản ứng trên là SO<sub>2</sub> và CO<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong thí nghiệm này xảy ra các quá trình sau: C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>  24(d)HSO+¾¾¾¾®  C + H<sub>2</sub>O  24(d)HSO+¾¾¾¾®  CO<sub>2</sub> + SO<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong thí nghiệm trên chỉ xảy ra quá trình hút nước của sulfuric acid.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa11_ck1_de06_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuốc thử dùng để phân biệt dung dịch Na<sub>2</sub>SO<sub>4</sub> với dung dịch NaNO<sub>3</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaOH.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "BaCl<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "MgCl<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCl.",
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
        "id": "hoa11_ck1_de06_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất hữu cơ là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hợp chất của carbon trừ CO, CO<sub>2</sub>, muối carbonate, cyanide,…",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hợp chất khó tan trong nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hợp chất của carbon và một số nguyên tố khác trừ N, Cl, O.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hợp chất có nhiệt độ sôi cao.",
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
        "id": "hoa11_ck1_de06_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bộ dụng cụ chiết (được mô tả như hình vẽ bên) dùng để",
        "images": [
          "/assets/hoa11/final/h11_ck1_de6_image9.jpeg"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tách hai chất rắn tan trong dung dịch",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tách hai chất lỏng tan tốt vào nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tách hai chất lỏng không tan vào nhau",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tách chất lỏng và chất khí.",
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
        "id": "hoa11_ck1_de06_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức biểu thị số lượng nguyên tử của mỗi nguyên tố trong phân tử được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "công thức đơn giản nhất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "công thức phân tử.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "công thức cấu tạo",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "công thức tổng quát.",
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
        "id": "hoa11_ck1_de06_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sử dụng phương pháp kết tinh lại để tinh chế chất rắn. Hợp chất cần kết tinh lại cần có tính chất nào dưới đây để việc kết tinh lại được thuận lợi?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tan trong dung môi phân cực, không tan trong dung môi không phân cực.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tan tốt trong cả dung dịch nóng và lạnh.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ít tan trong cả dung dịch nóng và lạnh.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tan tốt trong dung dịch nóng, ít tan trong dung dịch lạnh.",
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
        "id": "hoa11_ck1_de06_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Glucose là hợp chất hữu cơ có nhiều trong các loại quả chín, đặc biệt là quả nho. Công thức phân tử của glucose là C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>. Công thức đơn giản nhất của glucose là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>1,5</sub>H<sub>3</sub>O<sub>1,5</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>3</sub>H<sub>4</sub>O<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CHO<sub>2</sub>.",
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
        "id": "hoa11_ck1_de06_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào dưới đây là đồng đẳng của CH<sub>2</sub>=CH<sub>2</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>=CH-CH=CH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>2</sub>=CH-CH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>-C≡CH.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_ck1_de06_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Cấu tạo hóa học là trật tự liên kết giữa các nguyên tử trong phân tử.<br/>(b) Trong phân tử hợp chất hữu cơ, nguyên tử carbon luôn có hóa trị bốn.<br/>(c) Trong phân tử hợp chất hữu cơ, các nguyên tử carbon chỉ liên kết với nguyên tử của nguyên tố khác.<br/>(d) Tính chất vật lí và tính chất hóa học của hợp chất hữu cơ phụ thuộc vào thành phần phân tử và cấu tạo hóa học.<br/>Số phát biểu đúng là",
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
            "text": "4.",
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
        "id": "hoa11_ck1_de06_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Xét cân bằng hóa học: 2NO<sub>2</sub>(g, màu nâu đỏ) ⇌ N<sub>2</sub>O<sub>4</sub>(g, không màu).<br/>Tiến hành thí nghiệm theo các bước sau:<br/>- Bước 1: Lấy một ống xi-lanh đựng hỗn hợp hai khí trên đã ở trạng thái cân bằng.<br/>- Bước 2: Đẩy pít-tông xuống để làm tăng áp suất trong ống cao hơn ở bước 1.<br/>- Bước 3: Kéo pít-tông lên để làm giảm áp suất trong ống thấp hơn ở bước 1.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở bước 1, ống xi-lanh có màu nâu đỏ.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở bước 2, màu hỗn hợp trong xi lanh không thay đổi so với bước 1.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở bước 3, màu hỗn hợp trong xi lanh nhạt hơn so với bước 1.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thí nghiệm trên chứng minh ảnh hưởng của áp suất tới sự chuyển dịch cân bằng hóa học.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Khi đẩy pít-tông, áp suất của hệ tăng, thể tích của hệ giảm, số mol khí của hệ giảm  cân bằng chuyển dịch sang chiều thuận (nhạt màu).<br/>Khi kéo pít-tông, áp suất của hệ giảm, thể tích của hệ tăng, số mol khí của hệ tăng  cân bằng chuyển dịch sang chiều nghịch (đậm màu).<br/>a. Đúng.<br/>b. Sai.<br/>c. Sai.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de06_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Sulfuric acid (H<sub>2</sub>SO<sub>4</sub>) là hoá chất quan trọng, được sản xuất trong công nghiệp bằng phương pháp tiếp xúc qua ba giai đoạn:<br/>(1) S(s) + O<sub>2</sub>(g) → SO<sub>2</sub>(g)<br/>(2) 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2SO<sub>3</sub>(g);  or298H197,6 kJD=<br/>(3) nSO<sub>3</sub>(g) + H<sub>2</sub>SO<sub>4</sub>(aq) → H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở giai đoạn (2), cần dùng xúc tác để cân bằng chuyển dịch sang phải, giảm lượng SO<sub>2</sub> trong khí thải.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ ở giai đoạn (2) không được quá thấp vì ảnh hưởng đến tốc độ phản ứng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sử dụng nhiên liệu hoá thạch để cung cấp năng lượng cho quá trình sản xuất H<sub>2</sub>SO<sub>4</sub> có thể gây ô nhiễm môi trường.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở giai đoạn (3), người ta dùng nước cất hấp thụ trực tiếp SO<sub>3</sub> để thu được dung dịch H<sub>2</sub>SO<sub>4</sub> loãng.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Xúc tác không làm chuyển dịch cân bằng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de06_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Sắc kí cột là phương pháp tách biệt và tinh chế hỗn hợp các chất dựa vào sự khác nhau của chúng giữa pha động và pha tĩnh.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phương pháp sắc kí cột thường dùng để tách các chất hữu cơ có hàm lượng nhỏ và khó tách ra khỏi nhau.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sắc ký là một phương pháp hóa học được sử dụng để tách và phân tích hỗn hợp phức tạp.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên lý cơ bản của cơ chế tách sắc ký dựa trên khả năng hấp thụ và hòa tan các chất phân tích.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sử dụng các cột thủy tinh có dung môi và dung dịch mẫu chất cần tách di chuyển qua cột trong sắc kí cột thuộc pha động.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Phương pháp vật lí.<br/>c. Sai. Khả năng hấp phụ và hòa tan.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de06_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Kết quả phân tích nguyên tố cho thấy trong hợp chất Y, carbon chiếm 85,7% còn hydrogen chiếm 14,3% về khối lượng.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hợp chất Y là hydrocarbon.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức đơn giản nhất của hợp chất Y là CH.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu phân tử khối của hợp chất Y bằng 56 thì công thức phân tử của Y là C<sub>4</sub>H<sub>8</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tỉ lệ khối lượng giữa nguyên tố carbon và hydrogen tương ứng là 1 : 2.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>%m<sub>O</sub> = 100% - %m<sub>C</sub> - %m<sub>H</sub> = 0%  Þ  Y không chứa oxygen trong phân tử nên Y là hydrocarbon<br/>Gọi công thức tổng quát của Y là C<sub>x</sub>H<sub>y</sub><br/>Ta có x : y  =  CH%m%m:121  =  85,714,3:121 = 7,142 : 14,3 = 1: 2  Þ  CTĐGN của Y là CH<sub>2</sub><br/>CTPT của Y có dạng: (CH<sub>2</sub>)<sub>n</sub><br/>M<sub>Y</sub> = 56  Þ  14n = 56  Þ  n = 4  Þ  CTPT của Y là C<sub>4</sub>H<sub>8</sub>.<br/>a. Đ.<br/>b. S.<br/>c. Đ.<br/>d. Sai.  CHm12.46.m8==",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de06_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất: C<sub>4</sub>H<sub>4</sub>, NaCN, CO<sub>2</sub>, CH<sub>3</sub>COOH, NaHCO<sub>3</sub>, HCHO, H<sub>2</sub>HCH<sub>2</sub>COOH và CCl<sub>4</sub>. Có bao nhiêu hợp chất là dẫn xuất của hydrocarbon trong dãy chất trên?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de06_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các tính chất sau: (1) chất khí mùi khai và xốc, (2) nhẹ hơn không khí, (3) tan nhiều trong nước, (4) làm quỳ tím khô hóa xanh, (5) vừa có tính khử vừa có tính oxi hóa. Có bao nhiêu tính chất của khí NH<sub>3</sub>?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de06_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Nabica là một loại thuốc dùng để trung hòa bớt lượng acid HCl dư trong dạ dày, có thành phần chính là NaHCO<sub>3</sub>. Khi bệnh nhân uống 0,588 g bột NaHCO<sub>3</sub> thì trung hòa được 200 mL dung dịch HCl có pH = a trong dạ dày. Tính a (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "1,46",
        "explanation": "Đáp án: 1,46.<br/>NaHCO<sub>3</sub> + HCl → NaCl + H<sub>2</sub>O + CO<sub>2</sub><br/>Số mol HCl có trong dạ dày là n<sub>HCl</sub> =  NaHCO3n  = 7.10<sup>-3</sup> mol.<br/>C<sub>M</sub> HCl = 0,035M  pH = 1,456.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de06_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho biện pháp dưới đây có thể áp dụng để giảm thiểu những tác nhân gây mưa acid:<br/>(1) Sử dụng xe đạp, phương tiện công cộng thay cho các phương tiện động cơ cá nhân như ô tô, xe máy…<br/>(2) Sử dụng các nguồn năng lượng mới, năng lượng sạch, năng lượng tái tạo.<br/>(3) Sử dụng tiết kiệm, hiệu quả nguồn tài nguyên thiên nhiên.<br/>(4) Cải tiến công nghệ sản xuất, có biện pháp xử lí khí thải và tái chế các sản phẩm phụ có chứa sulfur.<br/>Liệt kê các biện pháp đúng theo dãy số thứ tự tăng dần (ví dụ: 1234, 24,…)",
        "images": [],
        "correctAnswer": "1234",
        "explanation": "Đáp án: 1234.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de06_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Trong phổ hồng ngoại (IR), chất X (C<sub>4</sub>H<sub>10</sub>O, mạch hở) có số sóng hấp thụ đặc trưng trong khoảng 3500 – 3200 cm<sup>–1</sup>. Có bao nhiêu đồng phân cấu tạo của X thỏa mãn điều kiện trên?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>X là alcohol  có 4 đồng phân thỏa.<br/>3222CHCHCHCHOH---- ;  ()323CHCHCHOHCH---<br/>323CHCHCHOH|CH--- ;  333OH|CHCHCH|CH--",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de06_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Ammonium nitrate  được dùng làm phân đạm. Năm 2020, một vụ nổ tại thủ đô Beirut, Lebanon đã cướp đi sinh mạng của hàng trăm người. Nguyên nhân của vụ nổ được do sự phân hủy 2750 tấn ammonium nitrate trên một tàu hàng bỏ hoang theo phương trình hoá học sau:<br/>NH<sub>4</sub>NO<sub>3</sub>(s) → N<sub>2</sub>O(g) + 2H<sub>2</sub>O(g) ;  or298H36,0 kJD=<br/>Nhiệt của vụ nổ trên tương đương với nhiệt toả ra của m tấn thuốc nổ TNT (Làm tròn kết quả đến hàng đơn vị). Biết 1 kg thuốc nổ TNT phát nổ toả ra 1,165.10<sup>6</sup> J).",
        "images": [],
        "correctAnswer": "1062",
        "explanation": "Đáp án: 1062.<br/>Nhiệt vụ nổ trên phát ra là  662750.10.361237,5.10kJ80=<br/>Khối lượng thuốc nổ TNT là  ()661237,5.101,16:()105.1062,23=  tấn.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck1_de07",
    "code": "H11-CK1-07",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de07_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hằng số cân bằng của phản ứng N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "22C24[NO]K .[NO]=",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2C1224[NO]K .[NO]=",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2C24[NO]K .[NO]=",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "22C24[NO]K .[NO]=",
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
        "id": "hoa11_ck1_de07_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhóm chức là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhóm nguyên tử carbon trong đó có chứa liên kết đơn, đôi, ba.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "một nguyên tử trong phân tử gây ra những tính chất hóa học đặc trưng của hợp chất hữu cơ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhóm nguyên tử trong phân tử gây ra những tính chất hóa học đặc trưng của hợp chất hữu cơ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nguyên tử hoặc nhóm nguyên tử gây ra những tính chất hóa học đặc trưng của hợp chất hữu cơ.",
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
        "id": "hoa11_ck1_de07_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có thể dùng chất nào sau đây để làm khô khí ammonia (NH<sub>3</sub>)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>SO<sub>4</sub> đặc.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "P<sub>2</sub>O<sub>5</sub> khan",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CuSO<sub>4</sub> khan.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CaO khan.",
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
        "id": "hoa11_ck1_de07_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính chất vật lí nào sau đây được quan tâm khi tách hai chất lỏng tan vào nhau bằng phương pháp chưng cất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ sôi của chất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ nóng chảy của chất.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính tan của chất trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Màu sắc của chất.",
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
        "id": "hoa11_ck1_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất X được sử dụng làm muối tắm, làm giảm dịu cơ bắp khi sung tấy cho con người, bổ sung magnesium cho tôm, cá, động vật thủy sinh. Chất X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CaSO<sub>4</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "BaSO<sub>4</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "MgSO<sub>4</sub>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.",
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
        "id": "hoa11_ck1_de07_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các hợp chất dưới đây, hợp chất nào là hợp chất hữu cơ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sodium carbonate (Na<sub>2</sub>CO<sub>3</sub>).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Carbon dioxide (CO<sub>2</sub>).",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Methane (CH<sub>4</sub>).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Potassium cyanide (KCN).",
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
        "id": "hoa11_ck1_de07_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khí NO<sub>x</sub> là một trong các nguyên nhân gây nên hiện tượng mưa acid, mù quang hóa, hiện tượng phú dưỡng… làm ô nhiễm môi trường. Hoạt động nào sau đây là nguyên nhân tự nhiên làm phát sinh NO<sub>x</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hoạt động giao thông vận tải",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hoạt động của nhà máy nhiệt điện.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hoạt động của núi lửa",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hoạt động đốt nhiên liệu.",
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
        "id": "hoa11_ck1_de07_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không phải là chất điện li?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCl.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaOH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaCl.",
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
        "id": "hoa11_ck1_de07_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Loại công thức nào say đây cho biết thành phần nguyên tố và số lượng nguyên tử của mỗi nguyên tố trong phân tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức phân tử.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức tổng quát.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Công thức đơn giản nhất.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Công thức tổng quát hoặc công thức đơn giản nhất.",
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
        "id": "hoa11_ck1_de07_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen là nguyên tố phổ biến nhất trong vỏ trái đất.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hai nguyên tử N trong phân tử nitrogen liên kết với nhau bằng liên kết ba.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nitrogen lỏng được dùng để bảo quản mẫu vật phẩm trong y học.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở nhiệt độ thường, nitrogen khá trơ về mặt hóa học.",
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
        "id": "hoa11_ck1_de07_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi bị bỏng sulfuric acid cần rửa ngay với nước lạnh, sau đó trung hòa acid bám trên da bằng dung dịch nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaOH đặc.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaOH loãng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCl loãng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaHCO<sub>3</sub> loãng.",
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
        "id": "hoa11_ck1_de07_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong tự nhiên, sulfur chỉ tồn tại ở dạng hợp chất.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mỗi phân tử sulfur chỉ có một nguyên tử S.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Quặng pyryte có thành phần chính là FeS.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong tinh thể sulfur, các phân tử S<sub>8</sub> tương tác với nhau bằng tương tác Van der Waals.",
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
        "id": "hoa11_ck1_de07_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hầu hết các muối ammonium đều dễ tan trong nước.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch muối ammonium phân li hoàn toàn thành ion.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các muối ammonium đều kém bền với nhiệt, khi đun nóng bị phân huỷ thành ammonia và acid tương ứng.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Muối ammonium tác dụng với dung dịch kiềm nóng giải phóng ammonia.",
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
        "id": "hoa11_ck1_de07_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo thuyết Bronsted – Lowry, dãy gồm các chất và ion nào sau đây là acid?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe<sup>2+</sup>, HCl, PO<sub>4</sub><sup>3-</sup>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CO<sub>3</sub><sup>2-</sup>, SO<sub>3</sub><sup>2-</sup>, PO<sub>4</sub><sup>3-</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na<sup>+</sup>, H<sup>+</sup>, Al<sup>3+</sup>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe<sup>3+</sup>, Al<sup>3+</sup>, HNO<sub>3</sub>.",
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
        "id": "hoa11_ck1_de07_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các cặp chất sau: (a) CHCH và CH<sub>3</sub>-CCH; (b) (CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub> và CH<sub>3</sub>CH<sub>2</sub>CH=CH<sub>2</sub>; (c) CH<sub>3</sub>CH<sub>2</sub>CH=O và CH<sub>3</sub>COCH<sub>3</sub>; (d) CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH và CH<sub>3</sub>CH(OH)CH<sub>3</sub>; (e) CH<sub>2</sub>=CH–CH<sub>2</sub>CH<sub>3</sub> và CH<sub>2</sub>=CH-CH=CH<sub>2</sub>. Số cặp chất là đồng phân của nhau là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4.",
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
        "id": "hoa11_ck1_de07_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong điều kiện thích hợp, xảy ra các phản ứng sau:<br/>(a) 2H<sub>2</sub>SO<sub>4</sub> + C  ¾¾®  2SO<sub>2</sub> + CO<sub>2</sub> + 2H<sub>2</sub>O.<br/>(b) H<sub>2</sub>SO<sub>4</sub> + Fe(OH)<sub>2</sub>  ¾¾®  FeSO<sub>4</sub> + 2H<sub>2</sub>O.<br/>(c) 4H<sub>2</sub>SO<sub>4</sub> + 2FeO  ¾¾®  Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + SO<sub>2</sub> + 4H<sub>2</sub>O.<br/>(d) 6H<sub>2</sub>SO<sub>4</sub> + 2Fe  ¾¾®  Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3SO<sub>2</sub> + 6H<sub>2</sub>O.<br/>Trong các phản ứng trên, phản ứng xảy ra với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng là",
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
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(b).",
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
        "id": "hoa11_ck1_de07_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho sulfur lần lượt phản ứng với các chất sau ở điều kiện thích hợp: Fe, H<sub>2</sub>, Hg và KClO<sub>3</sub>. Số phản ứng mà sulfur là chất oxi hóa là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1",
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
        "id": "hoa11_ck1_de07_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số sóng hấp thụ đặc trưng trên phổ hồng ngoại của một số nhóm chức cơ bản được cho ở bảng (a). Chất X có công thức phân tử là C<sub>5</sub>H<sub>10</sub>O và có phổ hồng ngoại như hình (b) dưới đây:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhóm chức<br/>Số sóng (cm-1)<br/>-OH (alcohol)<br/>3500 - 3200<br/>-NH- (amine)<br/>3300 - 3000<br/>-CHO (aldehyde)<br/>2830 - 2695 (C-H)<br/>1740 - 1685 (C=O)<br/>-CO- (ketone)<br/>1715 - 1666 (C=O)<br/>-COOH (carboxylic acid)<br/>3300 - 2500 (OH)<br/>1760 - 1690 (C=O)<br/>-COO- (ester)<br/>1750 - 1715 (C=O)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhóm chức</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Số sóng (cm-1)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">-OH (alcohol)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">3500 - 3200</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">-NH- (amine)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 - 3000</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">-CHO (aldehyde)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">2830 - 2695 (C-H)<br/>1740 - 1685 (C=O)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">-CO- (ketone)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">1715 - 1666 (C=O)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">-COOH (carboxylic acid)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 - 2500 (OH)<br/>1760 - 1690 (C=O)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">-COO- (ester)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">1750 - 1715 (C=O)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhóm chức</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Số sóng (cm-1)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-OH (alcohol)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3500 - 3200</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-NH- (amine)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 - 3000</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-CHO (aldehyde)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2830 - 2695 (C-H)<br/>1740 - 1685 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-CO- (ketone)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1715 - 1666 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-COOH (carboxylic acid)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 - 2500 (OH)<br/>1760 - 1690 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-COO- (ester)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1750 - 1715 (C=O)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hình (a)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hình (b)</td></tr></table></div><br/>Nhóm chức có trong phân tử X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "aldehyde",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "alcohol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "carboxylic acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "amine.",
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
        "id": "hoa11_ck1_de07_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Khí sulfur dioxide (SO<sub>2</sub>) là một trong các chất chủ yếu gây ô nhiễm môi trường nhưng khi được sử dụng đúng mục đích sẽ có nhiều ứng dụng: dùng để sản xuất sulfuric acid, tẩy trắng giấy, bột giấy, chống nấm mốc cho lương thực, thực phẩm,...",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sulfur dioxide là chất trung gian trong quá trình sản xuất sulfuric acid.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sử dụng vôi sữa để xử lí khí thải SO<sub>2</sub> theo phản ứng hóa học: Ca(OH)<sub>2</sub> + SO<sub>2</sub>  CaSO<sub>4</sub> + H<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phản ứng: SO<sub>2</sub>(g) + NO<sub>2</sub>(g) → SO<sub>3</sub>(g) + NO(g), sulfur dioxide thể hiện tính khử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự phát thải khí SO<sub>2</sub> vào bầu khí quyển là một trong những nguyên nhân chính gây nên hiện tượng hiệu ứng nhà kính.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Ca(OH)<sub>2</sub> + SO<sub>2</sub>  CaSO<sub>3</sub> + H<sub>2</sub>O.<br/>c. Đúng.<br/>d. Sai. Hiện tượng mưa acid.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de07_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Phương trình hoá học của phản ứng tổng hợp ammonia từ nitrogen và hydrogen bằng quá trình Haber như sau: N<sub>2</sub>(g) + H<sub>2</sub>(g)     2NH<sub>3</sub>(g) ;   or29892kJH-D=  (1)",
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
            "text": "Do ammonia khó hoá lỏng nên khi làm lạnh hỗn hợp, nitrogen và hydrogen sẽ tách ra khỏi hỗn hợp.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu không sử dụng chất xúc tác thì phản ứng (1) không thể tạo thành ammonia.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thuận là phản ứng toả nhiệt. Vì vậy, để phản ứng chuyển dịch theo chiều thuận, cần phải giảm nhiệt độ. Tuy nhiên, nếu giảm nhiệt độ xuống thấp thì tốc độ phản ứng lại nhỏ.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Ammonia dễ hóa lỏng.<br/>c. Sai. Nếu không sử dụng xúc tác thì phản ứng vẫn xảy ra.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de07_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Quan sát hình mô phỏng thí nghiệm sau:",
        "images": [
          "/assets/hoa11/final/h11_ck1_de7_image13.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất bị hấp phụ mạnh nhất là chất c.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất bị hấp phụ kém nhất là chất a.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hình thí nghiệm mô phỏng về phương pháp chiết lỏng – lỏng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất c hòa tan trong dung môi tốt nhất.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Chất bị hấp phụ mạnh nhất là chất a.<br/>b. Sai. Chất bị hấp phụ kém nhất là chất c.<br/>c. Sai. Phương pháp sắc kí cột.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de07_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Hợp chất hữu cơ X có trong thành phần của giấm táo. Khi phân tích nguyên tố X thu được phần trăm các nguyên tố là: 40%C, 6,67%H và còn lại là O. Bằng phổ MS, người ta xác định được phân tử khối của X là 60.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X thuộc loại dẫn xuất của halogen.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức phân tử của X là CH<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cho biết phổ IR của X thấy có tín hiệu hấp thụ ở 1715 cm<sup>-1</sup> đồng thời thấy một số tín hiệu hấp thụ trong vùng 3400 – 2500 cm<sup>-1</sup>. Từ đó suy ra X có công thức cấu tạo thu gọn là CH<sub>3</sub> – COOH.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X thuộc dùng dãy đồng đẳng với hợp chất HCOOCH<sub>3</sub>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Dẫn xuất của hydrocarbon.<br/>b. Sai. Gọi công thức tổng quát của X là C<sub>x</sub>H<sub>y</sub>O<sub>z</sub><br/>Ta có: x : y : z =  406,6753,33::3,33:6,67:3,331:2:112116==   Þ  CTĐGN của X là CH<sub>2</sub>O<br/>CTPT của X có dạng (CH<sub>2</sub>O)<sub>n</sub>  Þ  M<sub>X</sub> = 30n = 60  Þ  n = 2  Þ  CTPT của X: C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>.<br/>c. Đúng. Phổ IR của X có tín hiệu hấp thụ ở 1715 cm<sup>-1</sup>  Þ  X chứa liên kết C = O; tín hiệu hấp thụ trong vùng 3400 – 2500 cm<sup>-1</sup>  Þ  X chứa liên kết O – H (trong COOH)  Þ  X chứa -COOH: CH<sub>3</sub>COOH.<br/>d. Sai. X và HCOOCH<sub>3</sub> là đồng phân của nhau.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de07_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Một loại dung dịch nước rửa bát có nồng độ ion  OH<sup>-</sup>  là  9,510-  mol/L. Giá trị pH của dung dịch nước rửa bát bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "4,5",
        "explanation": "Đáp án: 4,5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de07_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Có các thí nghiệm sau:<br/>(1) Cho KI tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, nóng.<br/>(2) Sục khí SO<sub>2</sub> vào nước bromine (Br<sub>2</sub>).<br/>(3) Cho dung dịch BaCl<sub>2</sub> tác dụng với dung dịch Na<sub>2</sub>SO<sub>4</sub>.<br/>(4) Nhúng lá nhôm (aluminium) vào dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, nguội.<br/>Liệt kê các thí nghiệm có xảy ra phản ứng hóa học theo chiều tăng dần số thứ tự (ví dụ: 1234, 24,…)",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de07_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Số đồng phân mạch hở có cùng công thức C<sub>3</sub>H<sub>6</sub>Br<sub>2</sub> là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>CH<sub>3</sub> – CH<sub>2</sub> – CHBr<sub>2</sub>, CH<sub>3</sub> – CBr<sub>2</sub> – CH<sub>3</sub>,  CH<sub>2</sub>Br – CHBr – CH<sub>3</sub>, CH<sub>2</sub>Br – CH<sub>2</sub> – CH<sub>2</sub>Br.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de07_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Để xác định công thức của oleum (H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>), người ta pha loãng 8,36 gam oleum vào nước thành 1 L dung dịch sulfuric acid, sau đó tiến hành chuẩn độ mỗi 10,0 mL dung dịch acid này bằng dung dịch NaOH 0,10 M. Thể tích NaOH trung bình cần sử dụng để chuẩn độ là 20,01 mL. Tìm n.",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l) + nH<sub>2</sub>O(l) → (n + 1)H<sub>2</sub>SO<sub>4</sub>(aq)<br/>x                                    (n + 1)x                 (mol)<br/>Số mol H<sub>2</sub>SO<sub>4</sub> trong dung dịch sau pha loãng là (n + 1)x mol<br/>0,1 = (n + 1). 8,369880n+  ⇒ n = 4. Vậy công thức của oleum là H<sub>2</sub>SO<sub>4</sub>.4SO<sub>3</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de07_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: (a) CH<sub>3</sub>CH<sub>2</sub>OH; (b) (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH<sub>2</sub>OH; (c) CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH; (d) (CH<sub>3</sub>)<sub>3</sub>COH;  (e) (CH<sub>3</sub>)<sub>2</sub>CHOH; (g) HOCH<sub>2</sub>CH<sub>2</sub>OH;  (h) (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH. Có bao nhiêu chất thuộc dãy đồng đẳng của CH<sub>3</sub>OH (methanol)?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.<br/>Bao gồm (a), (b), (c), (d), (e), (g).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de07_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Một mẫu hoa hòe được xác định có hàm lượng rutin là 26%. Người ta đun sôi hoa hòe với nước (100<sup>o</sup>C) để chiết lấy rutin. Biết độ tan của rutin là 5,2 gam trong 1 lít nước ở 100<sup>o</sup>C và là 0,125 gam trong 1 lít nước ở 25<sup>o</sup>C. Giả thiết rằng toàn bộ lượng rutin trong hoa hòe đã tan vào nước khi chiết. Làm nguội dung dịch chiết 100 gam hoa hòe trên từ 100 <sup>o</sup>C xuống 25<sup>o</sup>C thì thu được bao nhiêu gam rutin kết tinh? (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "25,4",
        "explanation": "Đáp án: 25,4.<br/>100 g hoa hòe chứa 26 g rutin.<br/>Thể tích nước cần dùng để hòa tan hết lượng rutin ở 100<sup>o</sup>C là: 26/52 = 5 lít.<br/>5 lít nước ở 25<sup>o</sup>C chứa 5.0,125 = 0,625 gam rutin.<br/>Lượng rutin thu được khi để kết tinh là 26 – 0,625 = 25,375 gam.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck1_de08",
    "code": "H11-CK1-08",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de08_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch chất nào sau đây là quỳ tím hóa xanh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
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
            "text": "HCl",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na<sub>2</sub>CO<sub>3</sub>.",
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
        "id": "hoa11_ck1_de08_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tại sao ammonia tan tốt trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Do cấu tạo phân tử hình chóp tam giác",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Do trên N còn 1 cặp electron chưa liên kết.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Do tạo được liên kết hydrogen với nước",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Do ammonia có tính base.",
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
        "id": "hoa11_ck1_de08_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho Ag tác dụng với dung dịch HNO<sub>3</sub> đặc, nóng, thu được khí X có màu nâu đỏ. Khí X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NO<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N<sub>2</sub>.",
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
        "id": "hoa11_ck1_de08_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Oleum có công thức tổng quát là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>SO<sub>4</sub>.nSO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>SO<sub>4</sub>.nH<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>SO<sub>4</sub>đặc.",
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
        "id": "hoa11_ck1_de08_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ứng dụng nào sau đây không phải của sulfur?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sản xuất diêm, thuốc nổ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lưu hóa cao su.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sản xuất phân bón",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sản xuất thuốc trừ sâu.",
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
        "id": "hoa11_ck1_de08_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hoá học sau: 2SO<sub>2</sub> (k) + O<sub>2</sub> (k) ⇌ 2SO<sub>3</sub> (k); ∆<sub>r</sub>H < 0. Cho các biện pháp: (1) tăng nhiệt độ, (2) tăng áp suất chung của hệ phản ứng, (3) hạ nhiệt độ, (4) dùng thêm chất xúc tác V<sub>2</sub>O<sub>5</sub>, (5) giảm nồng độ SO<sub>3</sub>, (6) giảm áp suất chung của hệ phản ứng. Những biện pháp nào làm cân bằng trên chuyển dịch theo chiều thuận?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1), (2), (4), (5).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(2), (3), (5)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(2), (3), (4), (6).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1), (2), (4).",
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
        "id": "hoa11_ck1_de08_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số oxi hóa cao nhất có thể có của sulfur trong các hợp chất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+6",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "+ 8",
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
            "text": "+5.",
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
        "id": "hoa11_ck1_de08_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khí X làm đục nước vôi trong và được dùng để làm chất tẩy trắng bột gỗ trong công nghiệp giấy. Chất X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "SO<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "O<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CO<sub>2</sub>.",
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
        "id": "hoa11_ck1_de08_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy các chất nào sau đây đều là hợp chất hữu cơ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>, CO<sub>2</sub>, CH<sub>4</sub>, C<sub>2</sub>H<sub>6</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>4</sub>, CH<sub>4</sub>, C<sub>2</sub>H<sub>6</sub>O, C<sub>3</sub>H<sub>9</sub>N.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CO<sub>2</sub>, K<sub>2</sub>CO<sub>3</sub>, NaHCO<sub>3</sub>, C<sub>2</sub>H<sub>5</sub>Cl.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>4</sub>HCO<sub>3</sub>, CH<sub>3</sub>OH, CH<sub>4</sub>, CCl<sub>4</sub>.",
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
        "id": "hoa11_ck1_de08_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phổ hồng ngoại (IR) của chất X ở hình dưới đây:<br/>Chọn phát biểu đúng?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de8_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Peak A là tín hiệu của nhóm OH.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Peak A và peak D cho thấy X là một carboxylic acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Peak B và peak D cho thấy X là một aldehyde.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Peak C là tín hiệu của nhóm chức C=O.",
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
        "id": "hoa11_ck1_de08_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dùng phương pháp sắc kí để tách X và Y, X ra khỏi cột trước, Y ra sau. Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X và Y không tan trong pha động",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Y bị hấp phụ kém hơn X.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X hoà tan tốt trong dung môi hơn Y",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X và Y có cùng khả năng hấp phụ và hoà tan.",
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
        "id": "hoa11_ck1_de08_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chọn phát biểu sai khi nói về phương pháp chưng cất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thành phần các chất khi bay hơi khác với thành phần của chúng trong dung dịch.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Quá trình chưng cất gồm 2 giai đoạn.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Là phương pháp tách và tinh chế đối với chất lỏng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất nào có nhiệt độ sôi thấp sẽ chuyển thành hơi muộn hơn và ít hơn.",
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
        "id": "hoa11_ck1_de08_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phổ khối lượng của một hợp chất hữu cơ A như hình vẽ:<br/>Hợp chất hữu cơ A có thể là",
        "images": [
          "/assets/hoa11/final/h11_ck1_de8_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>2</sub>Cl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>7</sub>H<sub>8</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>4</sub>H<sub>6</sub>O<sub>2</sub>.",
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
        "id": "hoa11_ck1_de08_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp chất nào dưới đây là đồng phân vị trí nhóm chức?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>5</sub>OH và CH<sub>3</sub>-O-C<sub>2</sub>H<sub>5</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>-O-CH<sub>3</sub> và CH<sub>3</sub>CHO.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-OH và CH<sub>3</sub>-CH(OH)-CH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub> và CH<sub>3</sub>-CH<sub>2</sub>-CH=CH<sub>2</sub>.",
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
        "id": "hoa11_ck1_de08_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất X có công thức cấu tạo thu gọn như sau:<br/>Công thức cấu tạo thu gọn của X là",
        "images": [
          "/assets/hoa11/final/h11_ck1_de8_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>2</sub>=CH−CH<sub>2</sub>−CH=CH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>=C=CH<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>2</sub>=CH−CH=CH<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>−CH=CH−CH<sub>3</sub>.",
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
        "id": "hoa11_ck1_de08_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho từng chất: Fe, NaF, NaBr , Fe(OH)<sub>2</sub>, KHCO<sub>3</sub> lần lượt phản ứng với H<sub>2</sub>SO<sub>4</sub> đặc, nóng. Số phản ứng thuộc loại phản ứng oxi hoá - khử là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3",
            "isCorrect": true
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
            "text": "4.",
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
        "id": "hoa11_ck1_de08_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kết quả phân tích thành phần một muối sulfate cho thấy nguyên tố kim loại M chiếm 28% về khối lượng, còn lại là oxygen và sulfur. Kim loại M là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mg",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ca.",
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
        "id": "hoa11_ck1_de08_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Nguyên tố carbon và hydrogen luôn có mặt trong hợp chất hữu cơ.<br/>(b) Phổ hồng ngoại cho phép xác định cả loại nhóm chức và số lượng nhóm chức đó có trong phân tử hợp chất hữu cơ.<br/>(c) Liên kết chủ yếu trong hợp chất hữu cơ là liên kết cộng hóa trị.<br/>(d) Một hydrocarbon và một hợp chất ion có khối lượng phân tử gần bằng nhau thì hydrocarbon tan trong nước ít hơn và có nhiệt độ sôi thấp hơn so với hợp chất ion.<br/>Có bao nhiêu phát biểu đúng trong các phát biểu trên?",
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
            "text": "4",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2.",
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
        "id": "hoa11_ck1_de08_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Chiết là phương pháp tách biệt và tinh chế hỗn hợp các chất dựa vào sự hoà tan khác nhau của chúng trong hai môi trường không trộn lẫn vào nhau.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phương pháp chiết lỏng – rắn thường được áp dụng để ngâm rượu thuốc, phân tích thổ nhưỡng…",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chiết lỏng – lỏng dùng để tách chất hữu cơ ở dạng nhũ tương hoặc huyền phù trong nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Để chiết xuất tinh dầu, người ta thường sử dụng phương pháp chiết và phương pháp kết tinh.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để phân tích dư lượng thuốc bảo vệ thực vật trong nông sản người ta không dùng phương pháp chiết vì nó không hiệu quả.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Để chiết xuất tinh dầu, người ta thường sử dụng phương pháp chiết và phương pháp chưng cất lôi cuốn hơi nước.<br/>d. Sai. Để phân tích dư lượng thuốc bảo vệ thực vật trong nông sản người ta dùng phương pháp chiết.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de08_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Học sinh T tiến hành thí nghiệm pha loãng 10 mL dung dịch H<sub>2</sub>SO<sub>4</sub> 98,0% (d = 1,84 g/mL) bằng 60 mL H<sub>2</sub>O (d = 1 g/mL) với các dụng cụ và hóa chất sau:",
        "images": [
          "/assets/hoa11/final/h11_ck1_de8_image5.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi pha loãng acid, học sinh T rót từ từ nước vào acid và dùng đũa thủy tinh khuấy đều.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Quá trình pha loãng acid tỏa nhiều nhiệt.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ phần trăm của dung dịch H₂SO₄ sau khi pha loãng là 25,6%.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sulfuric acid đặc dễ gây bỏng khi rơi vào da, nguyên nhân chủ yếu là do nó có tính acid mạnh.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Phải rót từ từ acid vào nước.<br/>b. Đúng. Pha loãng H₂SO₄ đặc tỏa rất nhiều nhiệt.<br/>c. Sai. m_dd = 10.1,84 + 60 = 78,4 g; m_H2SO4 = 18,032 g ⇒ C% = 23,0%.<br/>d. Sai. Nguyên nhân gây bỏng chủ yếu do tính háo nước mãnh liệt và tính oxi hóa mạnh.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de08_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Một học sinh nghiên cứu tính chất của hai loại phân bón potassium nitrate và ammonium chloride bằng cách tiến hành thí nghiệm sau:<br/>- Bước 1: Cho khoảng 1 g phân bón potassium nitrate vào ống nghiệm (1) và khoảng 1 g phân bón ammonium chloride vào ống nghiệm (2).<br/>- Bước 2: Thêm vào mỗi ống nghiệm khoảng 3 mL nước cất, lắc đều.<br/>- Bước 3: Nhỏ 1 mL dung dịch NaOH 20% vào mỗi ống nghiệm, đun nóng nhẹ trên đèn cồn.<br/>- Bước 4: Đưa hai mẩu giấy pH đã tẩm ướt vào miệng mỗi ống nghiệm.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kết thúc bước 2, học sinh kết luận potassium nitrate và ammonium chloride là các chất rắn tan tốt trong nước.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở bước 4, khi đưa quỳ tím ẩm lại gần miệng ống nghiệm (2), giấy quỳ tím chuyển sang màu xanh.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở bước 3, khi đun nóng ống nghiệm (1) có tạo sản phẩm khí N<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở bước 3, khi đun nóng ống nghiệm (2) có sinh ra khí mùi khai, xốc.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng. Khí NH<sub>3</sub> sinh ra làm quỳ ẩm hóa xanh.<br/>c. Sai. KNO<sub>3</sub> không tác dụng với NaOH.<br/>d. Đúng. NH<sub>4</sub>Cl + NaOH  NaCl + NH<sub>3</sub> + H<sub>2</sub>O.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de08_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Khói thuốc lá làm tăng khả năng bị ung thư phổi, hoạt chất có độc trong thuốc lá là nicotine. Kết quả phân tích nguyên tố của nicotine cho thành phần phần trăm khối lượng như sau: 74,07%C, 8,65%H, 17,28%N. Phân tử khối của nicotine được xác định thông qua phổ khối lượng thấy có phân tử khối là 162.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nicotine thuộc loại dẫn xuất hydrocarbon.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trên phổ khối lượng của nicotine xuất hiện peak ion phân tử [M<sup>+</sup>] tại giá trị m/z = 162.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Công thức đơn giản của nicotine là C<sub>5</sub>H<sub>7</sub>N.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Công thức phân tử của nicotine trùng với công thức đơn giản nhất.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng. Lập tỉ lệ x : y : z = 5 : 7 : 1  CTĐGN là C<sub>5</sub>H<sub>7</sub>N<br/>d. Sai. C<sub>10</sub>H<sub>14</sub>N<sub>2</sub>.<br/>Ta có: M = 160  CTPT là C<sub>10</sub>H<sub>14</sub>N<sub>2</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de08_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng:<br/>(a) S + O<sub>2</sub>  ot¾¾®  SO<sub>2</sub>;(b) S + 3F<sub>2</sub>  ¾¾®  SF<sub>6</sub>;<br/>(c) Hg + S  ¾¾®  HgS;(d) H<sub>2</sub> +  18 S<sub>8</sub>  ¾¾®  H<sub>2</sub>S.<br/>Có bao nhiêu phản ứng trong đó sulfur đơn chất đóng vai trò chất khử?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de08_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Có 4 loại cấu tạo mạch phân tử: (a) mạch hở không phân nhánh, (b) mạch hở phân nhánh; (c) mạch vòng không phân nhánh và (d) mạch vòng phân nhánh. Trong phân tử hợp chất hữu cơ, các nguyên tử carbon có thể liên kết với chính nó hình thành bao nhiêu loại mạch?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de08_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất khí sau: H<sub>2</sub>S, N<sub>2</sub>, NO, NO<sub>2</sub>, O<sub>2</sub>, SO<sub>2</sub>. Có bao nhiêu chất khí gây ô nhiễm môi trường khi phát thải vào không khí?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de08_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Hỗn hợp X gồm N<sub>2</sub> và H<sub>2</sub> có tỉ lệ mol tương ứng là 1 : 3. Nung nóng X trong bình kín (450℃, xúc tác Fe) một thời gian, thu được hỗn hợp khí có số mol giảm 5% so với ban đầu. Hiệu suất của phản ứng tổng hợp NH<sub>3</sub> là bao nhiêu phần trăm?",
        "images": [],
        "correctAnswer": "10",
        "explanation": "Đáp án: 10.<br/>32223N(g)       H(g)NH(g)Ban ñaàu:      1                   3(mol)Phaûn öùng:    x                   3x+2x            (mol)Caân baèng:  1-x                3-3x2x            (mol)<br/>Tổng số mol khí sau khi phản ứng là 1 – x + 3 – 3x + 2x = 4 – 2x (mol)<br/>Số mol khí giảm so với ban đầu là 2x  Þ  2x = 0,2  Þ  x = 0,1  Þ  H% =  0,1.100%10%.1=",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de08_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Hãy sắp xếp các nội dung sau cho hợp lí trong quá trình hình thành hiện tượng phú dưỡng:<br/>(1) Sự phân hủy xác động thực vật bởi vi khuẩn sử dụng nhiều oxygen trong nước gây nên tình trạng thiếu oxygen nghiêm trọng, làm chết cả hệ sinh thái.<br/>(2) Ảnh sáng mặt trời bị cản trở làm ảnh hưởng đến quá trình quang hợp, gây thiếu oxygen làm cho thực vật và động vật chết.<br/>(3) Chất dinh dưỡng giúp thực vật và tảo sống trong nước phát triển ồ ạt.<br/>(4) Phân bón và chất dinh dưỡng bị rửa trôi xuống sông, ao, hồ, …<br/>Liệt kê đáp án theo dãy bốn chữ số (ví dụ: 1234, 3421,...)",
        "images": [],
        "correctAnswer": "4321",
        "explanation": "Đáp án: 4321.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de08_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Khi cháy, sulfur cũng như hợp chất của sulfur tạo khí SO<sub>2</sub>. Khí SO<sub>2</sub> làm mất tím dung dịch thuốc tím theo sơ đồ phản ứng: SO<sub>2</sub> + KMnO<sub>4</sub> + H<sub>2</sub>O ⟶ H<sub>2</sub>SO<sub>4</sub> + MnSO<sub>4</sub> + K<sub>2</sub>SO<sub>4</sub>. Hàm lượng sulfur cho phép trong xăng là dưới 0,30%. Để kiểm tra hàm lượng lưu hùynh trong một loại xăng, người ta đốt cháy hoàn toàn 10,0 gam xăng này, tạo sản phẩm cháy coi như chỉ gồm CO<sub>2</sub>, SO<sub>2</sub> và H<sub>2</sub>O. Thấy lượng sản phẩm cháy này làm mất màu vừa đủ dung dịch có hòa tan 3,5.10<sup>-4</sup> mol KMnO<sub>4</sub>. Hàm lượng sulfur có trong mẫu xăng trên là bao nhiêu phần trăm?",
        "images": [],
        "correctAnswer": "0,28",
        "explanation": "Đáp án: 0,28.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa11/final/h11_ck1_de8_image16.png"
        ],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck1_de09",
    "code": "H11-CK1-09",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de09_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp chất nào sau đây là chất điện li mạnh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "KOH, H<sub>2</sub>CO<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HCl, CH<sub>3</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K<sub>2</sub>S, NaNO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>4</sub>Cl, C<sub>2</sub>H<sub>5</sub>OH.",
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
        "id": "hoa11_ck1_de09_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hóa học:  2SOO2(g)2(g)+   oxt,t,p   D<o3(g)r2982SOH0 . Chọn phát biểu đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cân bằng chuyển dịch theo chiều thuận khi tăng nhiệt độ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cân bằng chuyển dịch theo chiều nghịch khi giảm nồng độ O<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cân bằng chuyển dịch theo chiều thuận khi giảm áp suất hệ phản ứng.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cân bằng chuyển dịch theo chiều nghịch khi giảm nồng độ SO<sub>3</sub>.",
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
        "id": "hoa11_ck1_de09_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để xác định nồng độ của một dung dịch H<sub>2</sub>SO<sub>4</sub>, người ta đã tiến hành chuẩn độ bằng dung dịch KOH 0,2M. Để chuẩn độ 10 mL dung dịch H<sub>2</sub>SO<sub>4</sub> này cần 12 mL dung dịch KOH. Nồng độ của dung dịch H<sub>2</sub>SO<sub>4</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0,15",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "0,13.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "0,12.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0,14.",
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
        "id": "hoa11_ck1_de09_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi có tia lửa điện trong các cơn mưa, trong không khí nitrogen sẽ tác dụng được với oxygen tạo khí X. Khí X sẽ chuyển hóa thành nitrate, cung cấp một lượng phân đạm cho cây trồng. Khí X là hóa chất nào sau đây?",
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
            "text": "NO<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N<sub>2</sub>.",
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
        "id": "hoa11_ck1_de09_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thích hợp, SO<sub>2</sub>thể hiện tính oxi hóa khi tác dụng với chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>S",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaOH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "O<sub>2</sub>.",
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
        "id": "hoa11_ck1_de09_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Từ xa xưa người ta đã biết cách thu muối ăn từ nước biển bằng cách dẫn nước biển vào khu vực là những khoảnh đất thấp và phẳng được chuẩn bị sẵn gọi là ruộng muối, sử dụng sức nóng của mặt trời để làm nước bay hơi thu được muối rắn. Phương pháp này được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "lôi cuốn hơi nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chiết",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "kết tinh.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "lắng đọng.",
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
        "id": "hoa11_ck1_de09_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nhận định sau: Phân tử ammonia và ion ammonium đều<br/>(1) chứa liên kết cộng hóa trị;<br/>(2) là base Bronsted trong nước;<br/>(3) là acid Bronsted trong nước;<br/>(4) chứa nguyên tử N có số oxi hóa là -3.<br/>Số nhận định đúng là",
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
            "text": "3.",
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
        "id": "hoa11_ck1_de09_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng “dung nham xanh” là một trong những hiện tượng hùng vĩ đến đáng sợ xảy ra ở khu vực núi lửa. Chất X bị đốt nóng tạo ra nhiều ngọn lửa lớn có màu xanh, đồng thời giải phóng nhiều khí độc. Ở điều kiện thường, X là chất rắn màu vàng. Tên gọi của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sulfur",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sulfur dioxide",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sulfuric acid.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sodium sulfate.",
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
        "id": "hoa11_ck1_de09_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào dưới đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>SO<sub>4 đặc</sub> + FeO  ¾®¾  FeSO<sub>4</sub> + H<sub>2</sub>O.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>SO<sub>4 đặc</sub> + 2HI  ¾®¾  I<sub>2</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2H<sub>2</sub>SO<sub>4 đặc</sub> + C  ¾®¾  CO<sub>2</sub> + 2SO<sub>2</sub> + 2H<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "6H<sub>2</sub>SO<sub>4 đặc</sub> + 2Fe  ¾®¾  Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3SO<sub>2</sub> + 6H<sub>2</sub>O.",
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
        "id": "hoa11_ck1_de09_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Glucose là hợp chất hữu cơ có nhiều trong các loại quả chín, đặc biệt là quả nho. Công thức phân tử của glucose là C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>. Công thức đơn giản nhất của glucose là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>1,5</sub>H<sub>3</sub>O<sub>1,5</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>3</sub>H<sub>4</sub>O<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CHO<sub>2</sub>.",
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
        "id": "hoa11_ck1_de09_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để xác định nhóm chức của phân tử hợp chất hữu cơ, người ta dùng phương pháp",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phổ khối lượng MS",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phổ hồng ngoại IR",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phổ gamma",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phổ cực tím.",
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
        "id": "hoa11_ck1_de09_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để tách tinh dầu sả (có trong thân, lá, rễ ….cây sả) trong công nghiệp hương liệu, người ta dùng phương pháp nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chưng cất bằng hơi nước và chiết tinh dầu ra khỏi hỗn hợp sản phẩm.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chưng cất bằng hơi nước và chiết bằng nước lạnh.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chiết tinh dầu sả sau đó chưng cất bằng hơi nước.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Kết tinh dầu sả trong nước.",
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
        "id": "hoa11_ck1_de09_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp chất nào sau đây là đồng đẳng của nhau?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>CH=CH<sub>2</sub> và CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>=CHCH=CH<sub>2</sub> và CH<sub>3</sub>C≡CH.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub> và (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH<sub>3</sub> và CH<sub>3</sub>CH<sub>3</sub>.",
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
        "id": "hoa11_ck1_de09_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vitamin C giúp tăng khả năng miễn dịch của cơ thể. Để xác định công thức phân tử của các hợp chất X trong vitamin C này, người ta đã tiến hành phân tích nguyên tố và đo phổ khối lượng. Kết quả khảo sát được trình bày trong bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Hợp chất</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">%C</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">%H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">%O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Giá trị m/z của peak ion phân tử (M+)</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">X</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">40,90</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">4,55</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">54,55</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">176</td></tr></table></div><br/>Tổng số nguyên tử có trong phân tử X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "10",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "14",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "18",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "20.",
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
        "id": "hoa11_ck1_de09_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các hợp chất hữu cơ: CH<sub>4</sub>, CCl<sub>4</sub>, CH<sub>3</sub>OH, HCOOH, C<sub>2</sub>H<sub>2</sub>, C<sub>8</sub>H<sub>18</sub>, CH<sub>3</sub>NH<sub>2</sub>. Số hợp chất hữu cơ thuộc loại dẫn xuất của hydrocarbon là",
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
            "text": "4",
            "isCorrect": true
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
            "text": "6.",
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
        "id": "hoa11_ck1_de09_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các chất sau: C<sub>3</sub>H<sub>8</sub>, C<sub>7</sub>H<sub>16</sub>, C<sub>8</sub>H<sub>18</sub>, C<sub>10</sub>H<sub>22</sub>,chất có nhiệt độ sôi cao nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>3</sub>H<sub>8</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>7</sub>H<sub>16</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>8</sub>H<sub>18</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>10</sub>H<sub>22</sub>.",
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
        "id": "hoa11_ck1_de09_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện nay, nhiều nơi ở nông thôn đang sử dụng hầm biogas để xử lí chất thải trong chăn nuôi gia súc, cung cấp nhiên liệu cho việc đun nấu. Chất dễ cháy trong khí biogas là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N<sub>2</sub>.",
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
        "id": "hoa11_ck1_de09_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hydrocarbon Y có công thức cấu tạo:<br/>Danh pháp thay thế của Y là",
        "images": [
          "/assets/hoa11/final/h11_ck1_de9_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2,3,3-methylbutane",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2,2,3-dimethylbutane.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2,2,3-trimethylbutane",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2,3,3-trimethylbutane.",
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
        "id": "hoa11_ck1_de09_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Alkane X có tổng cộng 14 nguyên tử trong phân tử.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức phân tử của X là C<sub>6</sub>H<sub>8</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có 2 đồng phân cấu tạo của X.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở điều kiện thường, X là chất lỏng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng đốt cháy X là phản ứng tỏa nhiệt nên được ứng dụng làm nhiên liệu.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. CTPT alkane C<sub>n</sub>H<sub>2n</sub><sub>+</sub><sub>2</sub>  n + 2n + 2 = 14  n = 4 : C<sub>4</sub>H<sub>10</sub>.<br/>b. Đúng. C<sub>4</sub>H<sub>10</sub> có 2 đồng phân.<br/>c. Sai. Ở điều kiện thường, X là chất khí.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de09_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm cho một ít chất chỉ thị phenolphthalein vào dung dịch NH<sub>3</sub>loãng thu được dung dịch (A). Chia dung dịch (A) vào ba ống nghiệm.<br/>- Ống nghiệm thứ 1 đun nóng dung dịch một hồi lâu.<br/>- Ống nghiệm thứ 2 thêm dung dịch HCl với số mol HCl bằng số mol NH<sub>3</sub> có trong dung dịch (A).<br/>- Ống nghiệm thứ 3 thêm vài giọt dung dịch Na<sub>2</sub>CO<sub>3</sub>.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Màu hồng của dung dịch ở ống nghiệm 1, 2 nhạt dần sau đó dung dịch trở nên trong suốt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch ở ống nghiệm 3 có màu hồng đậm hơn.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch ở ống nghiệm 3 nhạt dần màu hồng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu thay dung dịch Na<sub>2</sub>CO<sub>3</sub> bằng dung dịch AlCl<sub>3</sub> thì màu của dung dịch ở ống nghiệm thứ 3 không thay đổi.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Ống 1: Khi đun nóng, màu hồng của dung dịch nhạt dần do khí NH<sub>3</sub> bay lên nên làm cân bằng hoá học chuyển dịch theo chiều nghịch, dẫn đến pH của dung dịch giảm xuống (tính base giảm).<br/>Ống 2: Khi cho HCl vào với số mol bằng số mol NH<sub>3</sub> thì dung dịch mất màu hồng vì tạo ra NH<sub>4</sub>Cl có pH < 7.<br/>Ống 3: Khi thêm một vài giọt dung dịch Na<sub>2</sub>CO<sub>3</sub>, dung dịch (A) có màu hồng đậm vì muối Na<sub>2</sub>CO<sub>3</sub> thuỷ phân cho môi trường base.<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai.<br/>d. Sai. AlCl<sub>3</sub> có môi trường acid nên làm nhạt màu hồng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de09_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Một ao nuôi thủy sản có diện tích bề mặt là 2000 m<sup>2</sup>, độ sâu trung bình của ao là 1,7 m đang có  hiện tượng phú dưỡng. Để xử lý tảo xanh có trong ao, người dân cho copper (II) sulfate pentahydrate (CuSO<sub>4</sub>. 5H<sub>2</sub>O) vào ao trong 3 ngày, mỗi ngày một lần, mỗi lần là 0,25 gam cho 1,0 m<sup>3</sup> nước trong ao.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hiện tượng phú dưỡng có thể quan sát được thông qua sự xuất hiện dày đặc của tảo xanh trong nước.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để hạn chế hiện tượng phú dưỡng cần tạo điều kiện để nước trong kênh rạch, ao, hồ được lưu thông.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên nhân chính gây ra hiện tượng phú dưỡng là sự gia tăng các chất dinh dưỡng như nitrate và phosphate từ phân bón.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tổng khối lượng copper (II) sulfate pentahydrate cần sử dụng cho ao trên trong 3 ngày là 2,550kg.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng. m = 0,25.2000.1,7.3 = 2550 g = 2,55 kg.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de09_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Menthol là hợp chất hữu cơ được tìm thấy trong cây bạc hà. Nó được sử dụng làm hương liệu trong nhiều chất như: kem đánh răng, kẹo cao su và xi-rô ho,…",
        "images": [
          "/assets/hoa11/final/h11_ck1_de9_image7.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Menthol thuộc loại hydrocarbon.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức phân tử của menthol là C<sub>10</sub>H<sub>20</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trên phổ IR của menthol có tín hiệu đặc trưng cho nhóm alcohol (-OH) ở vùng 3300 – 2500 cm<sup>-1</sup>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thành phần % khối lượng của oxygen trong phân tử menthol là 10,26%.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Dẫn xuất hydrocarbon.<br/>b. Đúng.<br/>c. Sai. Vùng phổ 3500 – 3200 cm<sup>-1</sup>.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de09_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Ammonia (NH<sub>3</sub>) được điều chế bằng phản ứng:  N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g). Ở t °C, nồng độ các chất ở trạng thái cân bằng là: [N<sub>2</sub>] = 0,02M; [H<sub>2</sub>] = 2,0  M; [NH<sub>3</sub>] = 0,6M. Tính hằng số cân bằng K<sub>C</sub> của phản ứng trên tại t °C.",
        "images": [],
        "correctAnswer": "2,25",
        "explanation": "Đáp án: 2,25.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de09_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho sơ đồ phản ứng sau (mỗi mũi tên là một phản ứng):<br/>Trong sơ đồ trên, có bao nhiêu phản ứng mà nitrogen đóng vai trò là chất khử?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de9_image8.png"
        ],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de09_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Trong quá trình tách 2 chất có độ hòa tan khác nhau trong các môi trường không tan vào nhau theo phương pháp chiết lỏng-lỏng, người ta tiến hành các công đoạn sau:<br/>(1) Làm bay hơi dung môi của dịch chiết để thu được chất cần tách.<br/>(2) Lắc đều phếu chiết rồi để yên, hỗn hợp trong phễu sẽ tách thành 2 lớp.<br/>(3) Cho hỗn hợp có chất cần chiết vào phễu chiết, thêm dung môi vào (dung môi phải có khả năng hòa tan tốt chất cần chiết và không trộn lẫn với hỗn hợp ban đầu).<br/>(4) Sau đó từ từ mở khóa phễu chiết để lần lượt thu từng lớp chất lỏng.<br/>Liệt kê đáp án thành một dãy bốn chữ số theo thứ tự tiến hành thí nghiệm (ví dụ: 1234, 3412,…).",
        "images": [],
        "correctAnswer": "3241",
        "explanation": "Đáp án: 3241.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de09_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Hydrocarbon Y có công thức cấu tạo như sau:<br/>Khi cho Y phản ứng với bromine có thể thu được bao nhiêu dẫn xuất monobromo là đồng phân cấu tạo của nhau?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de9_image9.png"
        ],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [
          "/assets/hoa11/final/h11_ck1_de9_image10.png"
        ],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de09_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Dùng 300 tấn quặng pyrite (thành phần chính FeS<sub>2</sub>, còn lại 20% tạp chất trơ) để sản xuất sulfuric acid (H<sub>2</sub>SO<sub>4</sub>) có nồng độ 98%. Biết rằng hiệu suất của cả quá trình điều chế là 90%. Khối lượng dung dịch H<sub>2</sub>SO<sub>4</sub> 98% thu được là bao nhiêu tấn?",
        "images": [],
        "correctAnswer": "360",
        "explanation": "Đáp án: 360.<br/>FeS<sub>2</sub>        →             2H<sub>2</sub>SO<sub>4</sub><br/>120                             2.98            gam<br/>300.0,8                         x               tấn<br/>Khối lượng H<sub>2</sub>SO<sub>4</sub>  thu được theo lý thuyết<br/>Khối lượng dung dịch H<sub>2</sub>SO<sub>4</sub> 98% thu được theo thực tế",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de09_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Ở các nước Mỹ, Úc và một số quốc gia khác, khí hoá lỏng (LPG – Liquefied Petroleum Gas) được sử dụng nhiều làm nhiên liệu là propane hoá lỏng. Em hãy tính xem một bình khí hoá lỏng chứa 12 kg propane có thể cung cấp bao nhiêu lít khí propane ở 25°C, 1 bar. (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "6761",
        "explanation": "Đáp án: 6761.<br/>Sô mol propane =  1200044 mol  Thể tích khí propane =  1200024,796761(L)44´=<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck1_de10",
    "code": "H11-CK1-10",
    "title": "Đề Thi Cuối Kì 1 Hóa 11 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 11",
    "badge": "Cuối Kì 1",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck1_de10_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở trạng thái tự nhiên, nitrogen",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có màu xanh nhạt",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tan rất tốt trong nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "là chất khí không màu",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "có mùi khai khó chịu.",
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
        "id": "hoa11_ck1_de10_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào dưới đây không đúng về ammonia?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong công nghiệp được sử dụng như chất làm lạnh (chất sinh hàn).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Do có hàm lượng nitrogen cao nên được bón trực tiếp cho cây.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phần lớn ammonia được dùng để sản xuất các loại phân đạm.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Theo phương pháp Ostwald, HNO<sub>3</sub> được sản xuất từ NH<sub>3</sub>.",
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
        "id": "hoa11_ck1_de10_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở trạng thái tự nhiên, sulfur",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tồn tại ở dạng đơn chất và hợp chất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chỉ tồn tại ở dạng đơn chất.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chỉ tồn tại ở dạng hợp chất",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "là nguyên tố phổ biến nhất trên vỏ Trái Đất.",
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
        "id": "hoa11_ck1_de10_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sulfuric acid có tính chất nào dưới đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất lỏng, sánh như dầu.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Màu vàng nhạt.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dễ bay hơi.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không tan trong nước.",
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
        "id": "hoa11_ck1_de10_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguồn nào sau đây không phát sinh oxide của nitrogen trong không khí?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đốt cháy các nhiên liệu hóa thạch",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Quá trình sản xuất và sử dụng nitric acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong khí quyển khi có sấm sét",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Quá trình quang hợp của cây xanh.",
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
        "id": "hoa11_ck1_de10_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch nào sau đây làm quỳ tím hóa xanh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước chanh có pH 4,5",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Bột giặt có pH 10,5.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước muối có pH 7,0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dịch vị có pH 1,0.",
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
        "id": "hoa11_ck1_de10_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình 9.6 mô phỏng thiết bị dùng để tách tinh dầu:<br/>Biết rằng tinh dầu có khối lượng riêng nhỏ hơn 1 g.mL<sup>-1</sup>. Phát biểu nào sau đây là đúng?",
        "images": [
          "/assets/hoa11/final/h11_ck1_de10_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đây là thiết bị dùng để chưng cất tinh dầu bằng phương pháp lôi cuốn hơi nước.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tinh dầu nằm ở phần B do tinh dầu nhẹ hơn nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phương pháp tách A và B ra khỏi nhau là phương pháp chưng cất.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tinh dầu nằm ở phần A do A tan hoàn toàn trong nước.",
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
        "id": "hoa11_ck1_de10_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phổ MS của chất Y cho thấy Y có phân tử khối bằng 60. Công thức phân tử nào dưới đây không phù hợp với Y?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>3</sub>H<sub>8</sub>O",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>3</sub>H<sub>7</sub>F",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>2</sub>H<sub>8</sub>N<sub>2</sub>.",
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
        "id": "hoa11_ck1_de10_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất hữu cơ nào dưới đây không có đồng phân hình học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CHCl=CHCl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH=C(CH<sub>3</sub>)CH<sub>3</sub>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>CH=CHCH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH=CHCH<sub>3</sub>",
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
        "id": "hoa11_ck1_de10_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào dưới đây thuộc dãy đồng đẳng alkane?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>3</sub>H<sub>8</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>3</sub>H<sub>6</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>3</sub>H<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>5</sub>H<sub>8</sub>.",
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
        "id": "hoa11_ck1_de10_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(1) Hỗn hợp nitric acid đặc và hydrochloric acid đặc có tỉ lệ thể tích 3 : 1 được gọi là dung dịch nước cường toan..<br/>(2) Hiện tượng phú dưỡng làm các loại thực vật sống dưới nước (như rong, tảo, lục bình, bèo…) phát triển mạnh mẽ, giúp tăng lượng oxygen trong nước, giúp cải thiện chất lượng nước.<br/>(3) Để pha loãng dung dịch sunfuric acid đặc, ta cho từ từ nước vào dung dịch sunfuric acid đặc và khuấy đều bằng đũa thủy tinh..<br/>(4) Trong y học, barium sulfate (CaSO<sub>4</sub>) thường được dùng làm chất cản quang trong kỹ thuật X-quang.<br/>Số phát biểu đúng là",
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
            "text": "4.",
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
        "id": "hoa11_ck1_de10_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho công thức cấu tạo của chất A như sau:<br/>Phát biểu đúng nhất về loại mạch carbon có trong A là",
        "images": [
          "/assets/hoa11/final/h11_ck1_de10_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "mạch hở, phân nhánh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "mạch vòng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "mạch hở, không phân nhánh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "mạch vòng, phân nhánh.",
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
        "id": "hoa11_ck1_de10_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho isobutane tác dụng với Cl<sub>2</sub> (chiếu sáng, tỉ lệ mol 1 : 1), số sản phẩm monochloro tối đa thu được là",
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
            "text": "4.",
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
        "id": "hoa11_ck1_de10_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hỗn hợp X gồm các chất: pentane (t<sub>s</sub> = 36,1 °C), heptane (t<sub>s</sub> = 98,4 °C), octane (t<sub>s</sub> = 125,7 °C) và nonane (t<sub>s</sub> = 150,8 °C). Có thể tách riêng các chất đó một cách thuận lợi bằng phương pháp nào dưới đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kết tinh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chưng cất",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sắc kí",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chiết.",
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
        "id": "hoa11_ck1_de10_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức phân tử không cho biết thông tin nào dưới đây về phân tử hợp chất hữu cơ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thành phần nguyên tố",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tỉ lệ số lượng nguyên tử của mỗi nguyên tố.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số lượng nguyên tử mỗi nguyên tố",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trật tự liên kết giữa các nguyên tử.",
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
        "id": "hoa11_ck1_de10_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Oxide X là chất khí, mùi hắc, độc (gây ho, viêm đường hô hấp). Trong công nghiệp, X được dùng làm chất tẩy trắng bột gỗ, sản xuất sulfuric acid. Công thức của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CO<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>S.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "SO<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "P<sub>2</sub>O<sub>5</sub>.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa11_ck1_de10_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Giá trị hằng số cân bằng (K<sub>C</sub>) phụ thuộc vào yếu tố nào sau đây?",
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
        "explanation": "Hằng số cân bằng KC của một phản ứng xác định chỉ phụ thuộc vào nhiệt độ. Phương án đúng là B.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_ck1_de10_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào dưới đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử alkane chỉ có liên kết đơn.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong công nghiệp, các alkane được điều chế từ dầu mỏ và khí mỏ dầu.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chỉ các alkane là chất khí ở điều kiện thường được dùng làm nhiên liệu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các alkane lỏng được dùng sản xuất xăng, dầu và làm dung môi.",
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
        "id": "hoa11_ck1_de10_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau là đúng hay sai khi nói về phản ứng reforming alkane?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chuyển alkane mạch không phân nhánh thành các alkane mạch phân nhánh.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chuyển alkane mạch không phân nhánh thành các hydrocarbon mạch vòng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số nguyên tử carbon của chất tham gia và của sản phẩm bằng nhau.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhiệt độ sôi của sản phẩm lớn hơn nhiều so với alkane tham gia phản ứng.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Nhiệt độ sôi của sản phẩm nhỏ hơn so với alkane tham gia phản ứng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck1_de10_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Kết quả phân tích nguyên tố của chất hữu cơ (E) có 66,67% carbon; 11,11% hydrogen, còn lại là oxygen. Biết trong (E) có một nguyên tử oxygen và phổ IR của (E) được mô tả qua hình dưới đây:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Hợp chất<br/>Liên kết<br/>Số sóng (cm-1)<br/>Alcohol<br/>O – H<br/>3500 – 3200<br/>Amine<br/>N – H<br/>3300 – 3000<br/>Aldehyde<br/>C – H<br/>2830 – 2695<br/>C = O<br/>1740 – 1685<br/>Ketone<br/>C = O<br/>1715 – 1666<br/>Carboxylic acid<br/>C = O<br/>1760 – 1690<br/>O – H<br/>3300 – 2500<br/>Ester<br/>C = O<br/>1750 – 1715<br/>C – O<br/>1300 – 1000<br/>Bảng tín hiệu phổ hồng ngoại của một số nhóm chức</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Hợp chất</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Số sóng (cm-1)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Alcohol</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O – H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">3500 – 3200</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Amine</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">N – H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 – 3000</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Aldehyde</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C – H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">2830 – 2695</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">1740 – 1685</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ketone</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">1715 – 1666</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Carboxylic acid</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">1760 – 1690</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O – H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 – 2500</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ester</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">1750 – 1715</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C – O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">1300 – 1000</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hợp chất</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Số sóng (cm-1)</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Alcohol</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">O – H</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3500 – 3200</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Amine</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">N – H</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 – 3000</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Aldehyde</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C – H</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2830 – 2695</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1740 – 1685</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Ketone</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1715 – 1666</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Carboxylic acid</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1760 – 1690</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">O – H</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3300 – 2500</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Ester</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1750 – 1715</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C – O</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1300 – 1000</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khối lượng mol phân tử X bằng 60 g.mol<sup>-1</sup>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tổng số nguyên tử có trong một phân tử chất X là 10.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dựa vào phổ IR có thể dự đoán được X có chứa nhóm chức aldehyde.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đốt cháy hoàn toàn X trong khí O<sub>2</sub> thu được sản phẩm gồm CO, CO<sub>2</sub> và H<sub>2</sub>O.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>%C%H%Ox:y:z::4:8:112116==   CTPT: C<sub>4</sub>H<sub>8</sub>O<br/>a. Sai. M = 72.<br/>b. Sai. Tổng số nguyên tử là 13.<br/>c. Đúng.<br/>d. Sai. Sản phẩm gồm CO<sub>2</sub> và H<sub>2</sub>O.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck1_de10_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Có 3 mẫu sau: dung dịch NH<sub>4</sub>NO<sub>3</sub>, dung dịch Na<sub>2</sub>SO<sub>4</sub>, dung dịch H<sub>2</sub>SO<sub>4</sub> được kí hiệu bằng các chữ cái: X, Y, Z (không theo trình tự trên). Kết quả của thí nghiệm nhận biết về những mẫu này được ghi trong bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Mẫu</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Quỳ tím</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Dung dịch BaCl<sub>2</sub></th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">X</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hóa đỏ</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Kết tủa trắng</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Y</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hóa đỏ</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Không hiện tượng</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Z</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Không đổi màu</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Kết tủa trắng</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các chất X, Y, Z đều tan tốt trong nước.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất Z được sử dụng làm phân bón cung cấp đạm cho cây trồng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cho dung dịch X tác với dung dịch Y thu được khí không màu, có mùi khai.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong thực phẩm, X được sử dụng làm bột nở.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>X là NH<sub>4</sub>NO<sub>3</sub>, Y là H<sub>2</sub>SO<sub>4</sub> và Z là Na<sub>2</sub>SO<sub>4</sub>.<br/>a. Đúng.<br/>b. Sai.<br/>c. Sai.<br/>d. Sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck1_de10_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Trong công nghiệp sản xuất sulfuric acid, người ta dùng dung dịch H<sub>2</sub>SO<sub>4</sub> 98% để hấp thụ hoàn toàn SO<sub>3</sub> tạo ra sản phẩm là oleum. Lấy 5,0 gam oleum sinh ra ở trên pha loãng với nước cất thu được 1000 mL dung dịch H<sub>2</sub>SO<sub>4</sub> loãng (dung dịch X). Để xác định nồng độ H<sub>2</sub>SO<sub>4</sub> trong X, người ta tiến hành chuẩn độ như sau:<br/>- Bước 1: Rửa sạch burette loại 25 mL bằng nước cất, tráng lại bằng dung dịch chuẩn NaOH 0,1M rồi lắp burette lên giá đỡ, cho dung dịch chuẩn NaOH 0,1M vào burette, điều chỉnh dung dịch trong burette đến vạch 0.<br/>- Bước 2: Hút chính xác 10,0 mL dung dịch X cho vào bình tam giác 250 mL. Thêm 3 – 4 giọt phenolphthalein, lắc đều.<br/>- Bước 3: Mở khóa burette để dung dịch NaOH được nhỏ từ từ xuống bình tam giác, lắc đều cho đến khi dung dịch chuyển từ không màu sang màu hồng bền trong khoảng 30 giây thì dừng lại, ghi thể tích dung dịch NaOH đã dùng. Kết quả của 3 lần chuẩn độ như sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Lần chuẩn độ</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">1</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">2</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">3</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Thể tích dung dịch  NaOH đã dùng (mL)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">11,7</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">11,8</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">11,7</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở bước 1, sau khi rửa sạch burette bằng nước cất cần phải tráng lại bằng dung dịch NaOH chuẩn.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở bước 1 có thể cho chỉ thị phenolphthalein vào burette thay vì cho vào bình tam giác ở bước 2.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phép chuẩn độ trên, cứ mỗi lần chuẩn độ đều cần thực hiện đúng ba bước như trên.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khối lượng dung dịch H<sub>2</sub>SO<sub>4</sub> 98% cần dùng để sản xuất được 10 tấn oleum ở trên là 3,07 tấn (làm tròn kết quả đến hàng phần trăm).",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Nếu cho phenolphthalein vào burette thì dung dịch chuẩn sẽ bị pha loãng.<br/>c. Sai. Chỉ lần đầu phải làm 3 bước, từ lần thứ 2 trở đi ta bỏ qua bước tráng, rửa burette ở đầu bước 1. Bước 2 bắt đầu bằng việc đổ thêm dung dịch NaOH chuẩn vào burret (đã bị vơi sau lần chuẩn độ đầu) tới vạch số 0.<br/>d. Đúng. Khi tới điểm tương đương:  HSONaOH241nn2=<br/>()()31000 mLHSO2411,7  11,8  11,7.10n 0,5.100.0,1.0,058667mol3-++==<br/>0,98x gam H<sub>2</sub>SO<sub>4</sub> + 0,02x gam H<sub>2</sub>O + y gam SO<sub>3</sub> tạo ra 5,0 gam oleum  x + y = 5<br/>Bảo toàn nguyên tố S:   0,98x y0,0586679880+=<br/>x = 1,5332; y = 3,4668<br/>Để có 5 gam oleum cần 1,5332 gam dung dịch H<sub>2</sub>SO<sub>4</sub> 98%<br/>Để có 10 tấn oleum cần 10.1,5332/5 = 3,0664 tấn dung dịch H<sub>2</sub>SO<sub>4</sub> 98%.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck1_de10_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất: NaCN, CO<sub>2</sub>, CHCH, CH<sub>3</sub>COOH, C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>, CH<sub>3</sub>Br, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>, CaC<sub>2</sub> và CH<sub>3</sub>COCH<sub>3</sub>. Có bao nhiêu hợp chất hữu cơ trong dãy các chất trên?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck1_de10_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Thêm nước vào 10 mL dung dịch HCl 1,0 mol/L để được 1 000 mL dung dịch A. Dung dịch mới thu được có pH tăng bao nhiêu đơn vị sao với ban đầu?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Pha loãng dung dịch 100 lần thì nồng độ giảm 100 lần ⇒ pH tăng 2 đơn vị.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck1_de10_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Một phương pháp được đề xuất để loại bỏ SO<sub>2</sub> khỏi khí thải của nhà máy điện bằng cách dẫn khí thải qua dung dịch H<sub>2</sub>S. Cần tối đa bao nhiêu m<sup>3</sup> H<sub>2</sub>S (ở đkc) để loại bỏ SO<sub>2</sub> sinh ra khi đốt cháy 2,0 tấn than chứa sulfur chiếm 3% theo khối lượng? (Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "31",
        "explanation": "Đáp án: 31.<br/>SO<sub>2</sub> + 2H<sub>2</sub>S  3S + 2H<sub>2</sub>O<br/>HS3S22000.3%n2.31,875kmoln1,875kmolV30,9875m32===ÞÞ=",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck1_de10_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu đồng phân alkane mạch phân nhánh ứng với công thức phân tử C<sub>6</sub>H<sub>14</sub>?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [
          "/assets/hoa11/final/h11_ck1_de10_image15.png",
          "/assets/hoa11/final/h11_ck1_de10_image16.png",
          "/assets/hoa11/final/h11_ck1_de10_image17.png",
          "/assets/hoa11/final/h11_ck1_de10_image18.png"
        ],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck1_de10_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các dung dịch BaCl<sub>2</sub>, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>, Mg(NO<sub>3</sub>)<sub>2</sub> lần lượt tác dụng với các dung dịch NaOH, H<sub>2</sub>SO<sub>4</sub>, NH<sub>3</sub>. Có bao nhiêu trường hợp tạo ra kết tủa?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>BaCl<sub>2</sub> với H<sub>2</sub>SO<sub>4</sub>; Mg(NO<sub>3</sub>)<sub>2</sub> với NaOH, NH<sub>3</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck1_de10_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Một bình gas (khí hóa lỏng) chứa hỗn hợp propane và butane với tỉ lệ mol 1 : 2. Xác định nhiệt lượng tỏa ra khi đốt cháy hoàn toàn 12 kg khí gas trên ở điều kiện chuẩn.<br/>Cho biết các phản ứng:<br/>C<sub>3</sub>H<sub>8</sub> (g) + 5O<sub>2</sub> (g)  ¾¾®  3CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) or298H2220kJD=-<br/>C<sub>4</sub>H<sub>10</sub> (g) +  132 O<sub>2</sub> (g)  ¾¾® 4CO<sub>2</sub> (g) + 5H<sub>2</sub>O (l) or298H2874kJD=-<br/>Trung bình mỗi ngày, một hộ gia đình cần đốt gas để cung cấp 10000 kJ nhiệt (hiệu suất hấp thụ nhiệt là 80%). Sau bao nhiêu ngày hộ gia đình trên sẽ sử dụng hết bình gas 12 kg? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "48",
        "explanation": "Đáp án: 48.<br/>Gọi số mol C<sub>3</sub>H<sub>8</sub> và số mol C<sub>4</sub>H<sub>10</sub> là 2a, ta có: 44a  +  58.2a = 12.1000  a = 75 mol<br/>Nhiệt đốt cháy 12 kg gas là Q = 75.2220 + 150.2874 = 597600 (kJ)<br/>Số ngày sử dụng hết bình gas =  59760047,8084810010000.80=»  (ngày)<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  }
];

export function getFinalExamById(id: string): Chuong1Exam | undefined {
  return HOA11_FINAL_EXAMS.find(e => e.id === id || e.code === id);
}

export function calculateFinalExamScore(exam: Chuong1Exam, answers: Record<string, any>) {
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

    if (q.part === 1 || q.type === 'multiple_choice') {
      const correctOpt = q.options?.find((o) => o.isCorrect)?.letter || q.correctAnswer;
      if (userAns && userAns.toUpperCase() === String(correctOpt).toUpperCase()) {
        part1Score += (q.points || 0.25);
        correctCount += 1;
      }
    } else if (q.part === 2 || q.type === 'true_false') {
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
    } else if (q.part === 3 || q.type === 'short_answer') {
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

        if (!isMatch && q.acceptedAnswers && Array.isArray(q.acceptedAnswers)) {
          isMatch = q.acceptedAnswers.some(ans => {
            const aClean = String(ans).trim().toLowerCase().replace(',', '.');
            const aNum = parseFloat(aClean);
            return (!isNaN(numUser) && !isNaN(aNum)) ? Math.abs(numUser - aNum) < 0.01 : (rawUser === aClean);
          });
        }

        if (isMatch) {
          part3Score += (q.points || 0.25);
          correctCount += 1;
        }
      }
    } else if (q.part === 4 || q.type === 'essay') {
      // Tự luận: học sinh đối chiếu thang điểm tự chấm hoặc giáo viên chấm
      if (userAns && String(userAns).trim() !== '') {
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
