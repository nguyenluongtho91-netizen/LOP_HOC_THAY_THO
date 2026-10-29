// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI CUỐI HỌC KÌ 1 HÓA HỌC 10 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi Cuối Học Kì 1 Hóa Học Lớp 10 Chuẩn Cấu Trúc 2025
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

export const HOA10_FINAL_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa10_ck1_de01",
    "code": "H10-CK1-01",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de01_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số đồng vị bền của nguyên tố neon (Ne) được suy ra từ phổ khối lượng ở hình bên là",
        "images": [
          "/assets/hoa10/final/h10_ck1_de1_image2.png"
        ],
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
            "text": "4 .",
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
        "id": "hoa10_ck1_de01_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dựa vào thứ tự mức năng lượng, sự sắp xếp các phân lớp nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s < 2s.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4s > 3s.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3d < 4s.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3p < 3d.",
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
        "id": "hoa10_ck1_de01_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bảng tuần hoàn hiện nay có số cột, số nhóm A và số nhóm B lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "16, 8, 8",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "18, 8, 8",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "18, 8, 10",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "18, 10, 8.",
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
        "id": "hoa10_ck1_de01_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của nguyên tố X có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup>. Công thức oxide cao nhất của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "XO<sub>2.</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X<sub>2</sub>O<sub>5</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X<sub>2</sub>O<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "XO<sub>3</sub>.",
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
        "id": "hoa10_ck1_de01_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sai khi nói về neutron?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có khối lượng lớn hơn khối lượng electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có khối lượng lượng bằng khối lượng proton.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Không mang điện",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tồn tại trong hạt nhân nguyên tử.",
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
        "id": "hoa10_ck1_de01_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biểu diễn sự tạo thành ion nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na1eNa++¾¾® .",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2Cl2Cl2e-¾¾®+ .",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "22O2e2O-+¾¾® .",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3AlAl3e+¾¾®+ .",
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
        "id": "hoa10_ck1_de01_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vì sao các nguyên tử lại liên kết với nhau thành phân tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Để mỗi nguyên tử trong phân tử đạt tới cấu electron ổn định, bền vững.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để lớp ngoài cùng của mỗi nguyên tử trong phân tử có nhiều electron độc thân nhất.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Để mỗi nguyên tử trong phân tử đều đạt 8 electron ở lớp ngoài cùng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để tổng số electron ngoài cùng của các nguyên tử trong phân tử là 8.",
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
        "id": "hoa10_ck1_de01_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hạt nhân nguyên tử nguyên tố X có 24 hạt, trong đó số hạt mang điện là 12. Số hạt không mang điện trong X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "12",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "6",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "24",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "13.",
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
        "id": "hoa10_ck1_de01_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điều nào dưới đây đúng khi nói về ion Cl<sup>–</sup> (Z<sub>Cl</sub> = 17)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Được tạo thành khi nguyên tử  chlorine (Cl) nhận vào 1 proton.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có chứa 18 proton.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có chứa 18 electron.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trung hoà về điện.",
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
        "id": "hoa10_ck1_de01_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng hệ thống tuần hoàn, theo chiều tăng dần của điện tích hạt nhân, quy luật biến đổi nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong một chu kỳ, độ âm điện của các nguyên tố giảm dần.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong một nhóm A, tính phi kim của các nguyên tố tăng dần.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong một nhóm A, bán kính nguyên tử của các nguyên tố giảm dần.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong một chu kỳ, bán kính của của các nguyên tố giảm dần.",
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
        "id": "hoa10_ck1_de01_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kí hiệu chung của mọi nguyên tử là  AZX , trong đó A, X và Z lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số khối, kí hiệu nguyên tố, số hiệu nguyên tử.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số khối, số hiệu nguyên tử, kí hiệu nguyên tố.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số hiệu nguyên tử, số khối, kí hiệu nguyên tố.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số hiệu nguyên tử, kí hiệu nguyên tố, số khối.",
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
        "id": "hoa10_ck1_de01_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quan sát hình dưới đây và cho biết phosphorus nằm ở ô số mấy trong bảng tuần hoàn hóa học?<br/>Hình . Ô nguyên tố Phosphorus",
        "images": [
          "/assets/hoa10/final/h10_ck1_de1_image8.jpeg"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "30",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "15",
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
            "text": "10.",
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
        "id": "hoa10_ck1_de01_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau về tương tác van der Waals:<br/>(a) Tương tác van der Waals là lực tương tác yếu giữa các phân tử.<br/>(b) Ảnh hưởng của liên kết hydrogen tới nhiệt độ sôi và nhiệt độ nóng chảy của chất là mạnh hơn ảnh hưởng của tương tác van der Waals.<br/>(c) Giữa các nguyên tử He có thể có tương tác van der Waals.<br/>(d) Lưỡng cực tạm thời được hình thành do sự phân bố đồng đều của các electron trong phân tử.<br/>Số phát biểu đúng là",
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
            "text": "1",
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
        "displayNumber": 13
      },
      {
        "id": "hoa10_ck1_de01_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron nguyên tử của nguyên tố nitrogen (Z= 7) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1s<sup>2</sup>2s<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>.",
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
        "id": "hoa10_ck1_de01_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nguyên tố M (Z = 11), X (Z = 17), Y (Z = 9) và R (Z = 19). Độ âm điện của các nguyên tố tăng dần theo thứ tự",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "M < X < Y < R",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "R < M < X < Y.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Y < M < X < R",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "M < X < R < Y.",
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
        "id": "hoa10_ck1_de01_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho công thức Lewis của các phân tử sau:<br/>Số phân tử mà nguyên tử trung tâm không thoả mãn quy tắc octet là",
        "images": [
          "/assets/hoa10/final/h10_ck1_de1_image9.png"
        ],
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
        "displayNumber": 16
      },
      {
        "id": "hoa10_ck1_de01_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phân tử N<sub>2</sub> có số liên kết σ và liên kết π lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2 và 2",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1 và 1",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2 và 1",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 và 2.",
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
        "id": "hoa10_ck1_de01_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biểu đồ nhiệt độ sôi của các hydrogen halide được biểu diễn như sau:<br/>Vì sao HF có nhiệt độ sôi cao hơn hẳn so với HCl, HBr, HI?",
        "images": [
          "/assets/hoa10/final/h10_ck1_de1_image10.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HF tạo được liên kết hydrogen giữa các phân tử với nhau.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fluoride có tính oxi hóa mạnh nhất.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fluoride chỉ có số oxi hóa âm trong hợp chất.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết H-F phân cực mạnh nhất.",
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
        "id": "hoa10_ck1_de01_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về cấu trúc lớp vỏ electron nguyên tử.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở trạng thái cơ bản, trong nguyên tử, electron chiểm các mức năng lượng lần lượt từ cao đến thấp.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lớp electron được đánh số bằng các số nguyên dương n =1 với tên gọi là các chữ cái in hoa là L.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các phân lớp trong mỗi lớp electron được ki hiệu bằng các chữ cái viết thường, theo thứ tự là s, p, d, f…",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Những electron ở lớp K có mức năng lượng thấp nhất.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Ở trạng thái cơ bản, trong nguyên tử, electron chiếm các mức năng lượng lần lượt từ thấp đến cao.<br/>b. Sai. Lớp electron được kí hiệu n = 1 ứng với chữ cái in hóa là K.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de01_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Phân tử NH<sub>3</sub> được tạo thành từ ba nguyên tử hydrogen kết hợp với một nguyên tử nitrogen. Cho độ âm điện của N và H tương ứng là 3,04 và 2,20.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết H-N trong phân tử NH<sub>3</sub> thuộc loại liên kết cộng hóa trị không phân cực.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở điều kiện thường, NH<sub>3</sub> tan tốt trong nước là do tạo được liên kết hydrogen với nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cặp electron dùng chung của liên kết H-N trong phân tử NH<sub>3</sub>bị lệch về phía nguyên tử N.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong phân tử NH<sub>3</sub>, có 3 liên kết pi (π).",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Liên kết H-N là liên kết cộng hóa trị phân cực.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Phân tử NH<sub>3</sub> có 1 liên kết sigma ().",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de01_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Một loại hợp kim nhẹ, bền đuợc sử dụng rộng rãi trong kĩ thuật hàng không chứa hai nguyên tố X, Y đứng kế tiếp nhau trong cùng một chu kì của bảng tuần hoàn và có tổng số đơn vị điện tích hạt nhân là 25 (Z<sub>X</sub> > Z<sub>Y</sub>).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X và Y đều thuộc cùng chu kì 3.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X là kim loại, Y là phi kim.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hydroxide cao nhất của X có tính base mạnh hơn hydroxide cao nhất của Y.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi phản ứng với O<sub>2</sub>, X và Y đều tạo thành hợp chất ion.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Cấu hình electron của X là 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup> và Y là 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>.<br/>X là Mg và Y là Al.<br/>a. Đúng.<br/>b. Sai. X, Y đều là kim loại.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de01_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Hợp chất ion potassium sulfide có công thức hóa học K<sub>2</sub>S. Cho số hiệu nguyên tử của K, S lần lượt là 19 và 16.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử K<sub>2</sub>S, các ion potassium K<sup>+</sup> và ion sulfide S<sup>2–</sup> đều đạt cấu hình electron bền vững của khí hiếm Ar (Z = 18).",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử K<sub>2</sub>S tạo bởi lực hút tĩnh điện giữa 1 ion K<sup>+</sup> và 2 ion S<sup>2–</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phân tử K<sub>2</sub>S tan tốt trong nước và dung môi không phân cực như hexane, benzene,…",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi hòa tan K<sub>2</sub>S vào nước thu được dung dịch có khả năng dẫn điện.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Phân tử K<sub>2</sub>S tạo bởi lực hút tĩnh điện giữa 2 ion K<sup>+</sup> và 1 ion S<sup>2–</sup>.<br/>c. Sai. Không tan trong môi không phân cực.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de01_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 6 nguyên tố có số hiệu nguyên tử lần lượt là 6, 9, 11, 17, 18 và 20. Trong số các nguyên tố trên có bao nhiêu nguyên tố phi kim?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de01_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu hợp chất tạo được liên kết hydrogen trong dãy các chất sau: NH<sub>3</sub>, HF, HCl, PH<sub>3</sub>, C<sub>2</sub>H<sub>5</sub>OH?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de01_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Một nguyên tố tạo hợp chất khí với hydrogen có công thức RH<sub>3</sub>, được sử dụng để trung hoà các thành phần acid của dầu thô, bảo vệ thiết bị không bị ăn mòn trong ngành công nghiệp dầu khí. Nguyên tố này chiếm 25,93% về khối lượng trong oxide cao nhất. Nguyên tử khối của của R là bao nhiêu?",
        "images": [],
        "correctAnswer": "14",
        "explanation": "Đáp án: 14.<br/>Hợp chất với hydrogen là RH<sub>3</sub> ⇒ Oxide cao nhất có công thức là: R<sub>2</sub>O<sub>5</sub>.<br/>Ta có:  RRR2M.100 = 25,93M14(N).2M16.5Þ=+",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de01_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho biết trong các phân tử sau H<sub>2</sub>O, AlCl<sub>3</sub>, HBr, CH<sub>4</sub>, CaO, O<sub>2</sub> và NH<sub>3</sub>. Dựa vào giá trị độ âm điện, cho biết có bao nhiêu phân tử có liên kết cộng hóa trị phân cực?<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nguyên tử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Mg</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Al</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">N</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cl</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Br</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Độ âm điện</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1,31</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1,61</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2,20</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3,04</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3,16</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2,96</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3,44</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2,55</td></tr></table></div>",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>+ Từ 0,4 đến < 1,7: Liên kết CHT phân cực.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de01_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho nguyên tử các nguyên tố sau: Na (Z=11), K (Z=19), Mg (Z=12), F (Z=9), Al (Z=13), S (Z=16). Có bao nhiêu nguyên tử có xu hướng hình thành lớp vỏ bền vững như khí hiếm Ne (Z = 10)?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de01_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Cho số hiệu của nguyên tố N và O lần lượt là 7 và 8. Biết rằng hóa trị của nguyên tố N trong phân tử HNO<sub>2</sub> bằng tổng số liên kết σ và liên kết π mà nguyên tử N tạo thành khi liên kết với các nguyên tử xung quanh. Trong phân tử HNO<sub>2</sub>, nguyên tử N không liên kết với nguyên tử H mà liên kết với 2 nguyên tử O. Từ đó viết được công thức Lewis phù hợp của phân tử HNO<sub>2</sub> với hóa trị của N là n. Giá trị của n là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Công thức cấu tạo của HNO<sub>2</sub>:  HONO--= .<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_ck1_de02",
    "code": "H10-CK1-02",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de02_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử gồm hạt nhân và vỏ nguyên tử. Vỏ nguyên tử chứa loại hạt nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Electron",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Proton và neutron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Neutron.",
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
        "id": "hoa10_ck1_de02_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tử của cùng một nguyên tố hoá học là đồng vị của nhau có sự khác nhau về",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số neutron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số proton",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "điện tích hạt nhân.",
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
        "id": "hoa10_ck1_de02_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kí hiệu phân lớp electron nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3s",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3p",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3d",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3f.",
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
        "id": "hoa10_ck1_de02_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình bên biểu diễn hình dạng orbital nguyên tử (AO) nào sau đây?",
        "images": [
          "/assets/hoa10/final/h10_ck1_de2_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "s",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "p<sub>x</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "p<sub>y</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "p<sub>z</sub>.",
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
        "id": "hoa10_ck1_de02_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron của nguyên tử Al (Z = 13) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "22631s2s2p3p",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "225221s2s2p3s3p",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "22631 s2 s2p2 d",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "226211s2s2p3s3p .",
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
        "id": "hoa10_ck1_de02_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử nào sau đây có liên kết cộng hóa trị không phân cực?",
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
            "text": "N<sub>2</sub>",
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
            "text": "HBr.",
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
        "id": "hoa10_ck1_de02_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biết số hiệu nguyên tử của hai nguyên tố X và Y lần lượt là 19 và 17 . Cho các phát biểu sau:<br/>(a) Độ âm điện của nguyên tử X nhỏ hơn độ âm điện của nguyên tử Y.<br/>(b) Số electron độc thân của nguyên tử X ít hơn số electron độc thân của nguyên tử Y.<br/>(c) Trong các phản ứng hóa học, nguyên tử X có xu hướng nhường 2 electron.<br/>(d) Khi hình thành liên kết với nguyên tử X, nguyên tử Y nhận 1 electron.<br/>Số phát biểu đúng là",
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
            "text": "1",
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
        "displayNumber": 7
      },
      {
        "id": "hoa10_ck1_de02_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không tạo được liên kết hydrogen giữa các phân tử?",
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
            "text": "CH<sub>4</sub>.",
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
        "id": "hoa10_ck1_de02_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Lưu huỳnh (sulfur, S) thuộc nhóm VIA trong bảng tuần hoàn các nguyên tố hóa học. Công thức của sulfuric acid (tương ứng với oxide cao nhất của S) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>S",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "SO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>SO<sub>3</sub>",
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
        "displayNumber": 9
      },
      {
        "id": "hoa10_ck1_de02_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho bảng số lượng electron, neutron và proton của các phần tử (nguyên tử hoặc ion) sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Phần tử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Số electron</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Số neutron</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Số proton</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">(a)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">8</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">8</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">8</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">(b)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">10</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">12</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">11</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">(c)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">19</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">20</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">19</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">(d)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">18</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">18</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">17</td></tr></table></div><br/>Những phần tử thuộc loại ion là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a) và (d)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(a) và (b)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(c) và (d)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(b) và (d).",
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
        "id": "hoa10_ck1_de02_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn các nguyên tố, số chu kì nhỏ và số chu kì lớn lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3 và 3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4 và 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3 và 4",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4 và 4.",
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
        "id": "hoa10_ck1_de02_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn các nguyên tố hóa học, các nguyên tố khí hiếm thuộc nhóm",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "IA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "IIA",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "VIIIA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "VIIA.",
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
        "id": "hoa10_ck1_de02_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phân tử carbon dioxide  ()OCO==  số liên kết  s  và liên kết  p  lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0 và 4",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2 và 2",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3 và 1",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4 và 0 .",
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
        "id": "hoa10_ck1_de02_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong một chu kì của bảng tuần hoàn các nguyên tố hóa học, theo chiều tăng dần điện tích hạt nhân, bán kính nguyên tử của các nguyên tố giảm dần do số lớp electron ...(I), lực hút giữa hạt nhân với electron lớp ngoài cùng ...(II). Cụm từ cần điền vào (I), (II) lần lượt là:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tăng dần, tăng dần",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "giảm dần, giảm dần.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "không đổi, tăng dần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "không đồi, giảm dần.",
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
        "id": "hoa10_ck1_de02_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các hình biểu diễn sự xen phủ orbital nguyên tử để tạo liên kết hóa học sau:<br/>(a) Xen phủ trục s-s  (b) Xen phủ trục s-p   (c) Xen phủ trục p-p   (d) Xen phủ bên p-p<br/>Biết số hiệu các nguyên tử của H, F và  S  lần lượt là 1,9 và 16. Sự tạo liên kết trong các phân tử H<sub>2</sub>S và F<sub>2</sub> theo kiểu xen phủ tương ứng là",
        "images": [
          "/assets/hoa10/final/h10_ck1_de2_image10.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a) và (c)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(b) và (c)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(b) và (d)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(c) và (d).",
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
        "id": "hoa10_ck1_de02_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho số hiệu nguyên tử của nguyên tố R là 7. Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức oxide cao nhất của  R  là  25RO .",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "R có tính phi kim mạnh hơn Si (Z = 14).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "R là nguyên tố p.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử R có 5 electron ở phân lớp ngoài cùng.",
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
        "id": "hoa10_ck1_de02_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố silicon Si thuộc chu kì 3, nhóm IVA trong bảng tuần hoàn các nguyên tố hoá học. Công thức oxide cao nhất của silicon là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2SiO",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "SiO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "23HSiO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4SiH .",
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
        "id": "hoa10_ck1_de02_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho bảng số liệu sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Chất</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nước (H<sub>2</sub>O)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Hydrogen sulfide (H2S)</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhiệt độ sôi (oC) ở</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">100,0</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td></tr></table></div><br/>Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Do có liên kết hydrogen giữa các phân tử nên nước có nhiệt độ sôi cao hơn hydrogen sulfide.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phân tử H<sub>2</sub>O và phân tử H<sub>2</sub>S chỉ có các liên kết cộng hóa trị.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số liên kết trong phân tử H<sub>2</sub>O bằng số liên kết trong phân tử H<sub>2</sub>S.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết O – H trong phân tử H<sub>2</sub>O kém phân cực hơn liên kết S – H trong phân tử H<sub>2</sub>S.",
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
        "id": "hoa10_ck1_de02_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Trong lịch sử các thuyết về mô hình nguyên tử có mô hình hành tinh nguyên tử (mô hình Rutherford - Bohr) và mô hình hiện đại của nguyên tử.",
        "images": [
          "/assets/hoa10/final/h10_ck1_de2_image20.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Với nguyên tử hydrogen, mô hình (1) là mô hình hiện đại, mô hình (2) là mô hình hành tinh nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khái niệm về xác suất tìm thấy electron xuất phát từ mô hình hành tinh nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Theo mô hình (1), electron chuyển động trên quỹ đạo xác định xung quanh hạt nhân.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khái niệm về orbital nguyên tử xuất phát từ mô hình hiện đại của nguyên tử.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Mô hình (1) là mô hình hành tinh nguyên tử, mô hình (2) là mô hình hiện đại.<br/>b. Sai. Khái niệm về xác suất tìm thấy electron xuất phát từ mô hình hiện đại của nguyên tử.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de02_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Natri (sodium, <sub>11</sub>Na) và magnesium (<sub>12</sub>Mg) thuộc chu kì 3 trong bảng tuần hoàn các nguyên tố hóa học.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo xu hướng biến đổi tính kim loại, Mg có tính kim loại yếu hơn Na.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dựa vào mức độ phản ứng của Na và Mg với nước ở điều kiện thường, có thể so sánh được độ hoạt động hóa học giữa Na và Mg.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính base của sodium hydroxide yếu hơn tính base của magnesium hydroxide.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi phản ứng với Cl<sub>2</sub>, Na và Mg đều tạo ra hợp chất ion.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Tính base của sodium hydroxide mạnh hơn tính base của magnesium hydroxide.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de02_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Khi đun nóng dung dịch sodium chloride bão hòa, thu được tinh thể sodium chloride khan. Sau đó, nung nóng đến khoảng 800<sup>o</sup>C thì tinh thể sodium chloride chảy lỏng.<br/>Cấu trúc tinh thể sodium chloride",
        "images": [
          "/assets/hoa10/final/h10_ck1_de2_image21.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Quá trình hình thành tinh thể sodium chloride ở trên được gọi là sự kết tinh.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Quá trình hình thành tinh thể sodium chloride ở trên là quá trình sắp xếp lại các ion Na<sup>+</sup>, Cl<sup>–</sup> từ chuyển động tự do thành cấu trúc có trật tự trong tinh thể.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong tinh thể sodium chloride, xung quanh 1 ion Na<sup>+</sup> có 6 ion Cl<sup>–</sup> gần nhất.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tinh thể sodium chloride nóng chảy ở khoảng 800<sup>o</sup>C, chứng tỏ lực liên kết giữa các ion trong tinh thể là yếu.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Tinh thể sodium chloride nóng chảy ở khoảng 8000C, chứng tỏ liên kết giữa các ion trong tinh thể là rất mạnh.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de02_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Các nguyên tố phổ biến thuộc nhóm halogen (VIIA) trong bảng tuần hoàn các nguyên tố hóa học gồm: F (Z = 9), Cl (Z = 17), Br (Z = 35) và I (Z = 53). Đơn chất halogen tồn tại dạng phân tử X<sub>2</sub>, giữa các phân tử X<sub>2</sub> thường có tương tác với nhau. Cho giá trị năng lượng liên kết X – X ở bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">F – F</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cl – Cl</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Br – Br</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">I – I</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Năng lượng liên kết (kJ.mol–1) ở 25oC và 1 bar</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">159</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">243</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">193</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">151</td></tr></table></div><br/>Năng lượng liên kết X – X càng lớn thì liên kết càng bền.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cấu hình electron lớp ngoài cùng của nguyên tử X có dạng ns<sup>2</sup>np<sup>5</sup>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết giữa các nguyên tử trong X<sub>2</sub> là liên kết cộng hoá trị không phân cực.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tương tác giữa các phân tử X<sub>2</sub> là tương tác van der Waals.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Năng lượng liên kết Cl – Cl lớn nhất trong dãy trên vì Cl có bán kính nguyên tử nhỏ nhất.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Hai nguyên tử halogen liên kết với nhau bằng 1 liên kết σ. Tuy nhiên trong các phân tử Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub> ngoài liên kết σ còn có thêm một phần liên kết π tạo nên bởi sự che phủ AO d trống của nguyên tử halogen này với AO p có cặp e của nguyên tử Halogen kia. Mà fluorine không có khả năng tạo thành liên kết π nên năng lượng liên kết của F<sup>-</sup>F < Cl<sup>-</sup>Cl. Từ Chlorine ⟶ Iodine năng lượng liên kết giảm dần do độ dài liên kết tăng dần.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de02_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 6 nguyên tố có số hiệu nguyên tử lần lượt là 10, 13, 16, 18, 19 và 20. Trong số các nguyên tố trên có bao nhiêu nguyên tố kim loại?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de02_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tố Y thuộc chu kì 3 trong bảng tuần hoàn các nguyên tố hóa học. Công thức oxide cao nhất của Y là Y<sub>2</sub>O<sub>5</sub>. Khi cho 1 mol Y<sub>2</sub>O<sub>5</sub> tác dụng với dung dịch NaOH dư thì số mol NaOH phản ứng là bao nhiêu?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.<br/>P<sub>2</sub>O<sub>5</sub> + 6NaOH ⟶ 2Na<sub>3</sub>PO<sub>4</sub> + 3H<sub>2</sub>O<br/>1 mol6 mol",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de02_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu hợp chất ion trong dãy các chất sau: NH<sub>3</sub>, CaO, KCl, CH<sub>4</sub>, NaOH?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de02_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho số hiệu của nguyên tố N và O lần lượt là 7 và 8 . Biết rằng hóa trị của nguyên tố N trong phân tử HNO<sub>3</sub> bằng tổng số liên kết  s  và liên kết  p  mà nguyên tử N tạo thành khi liên kết với các nguyên tử xung quanh. Trong phân tử HNO<sub>3</sub>, nguyên tử N không liên kết với nguyên tử H mà liên kết với 3 nguyên tử O. Từ đó viết được công thức Lewis phù hợp của phân tử HNO<sub>3</sub> với hóa trị của N là n. Giá trị của n là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [
          "/assets/hoa10/final/h10_ck1_de2_image26.png"
        ],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de02_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Tổng số cặp electron dùng chung giữa các nguyên tử trong phân tử acetylene (C<sub>2</sub>H<sub>2</sub>) là bao nhiêu?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.<br/>CTCT của C<sub>2</sub>H<sub>2</sub> là CH≡CH.<br/>⟹ Số cặp electron dùng chung là 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de02_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Từ phổ khối lượng (MS) của magnesium (Mg) ở hình dưới đây:<br/>Hãy cho biết giá trị nguyên tử khối trung bình của magnesium là bao nhiêu? Biết  z1= . (Làm tròn kết quả đến hàng phần mười).",
        "images": [
          "/assets/hoa10/final/h10_ck1_de2_image24.png"
        ],
        "correctAnswer": "24,3",
        "explanation": "Đáp án: 24,3.<br/>Nguyên tử khối trung bình của magnesium = (24.79 + 25.10 + 26.11)/100 = 24,32.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_ck1_de03",
    "code": "H10-CK1-03",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de03_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đặc điểm của electron là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "mang điện tích dương và có khối lượng.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "mang điện tích âm và có khối lượng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "không mang điện và có khối lượng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "mang điện tích âm và không có khối lượng.",
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
        "id": "hoa10_ck1_de03_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tố hoá học thuộc cùng một nhóm A có cùng số lượng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "electron hoá trị.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "proton và neutron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "proton và electron.",
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
        "id": "hoa10_ck1_de03_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp nguyên tử nào sau đây có cùng số neutron?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "115B và  126C",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "73Li  và  94Be",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2412Mg  và  2418Si",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "147N  và  168O .",
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
        "id": "hoa10_ck1_de03_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình ảnh mô hình nguyên tử các đồng vị của nguyên tử hydrogen được cho dưới đây:<br/>Các đồng vị này khác nhau về",
        "images": [
          "/assets/hoa10/final/h10_ck1_de3_image10.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số neutron",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số hiệu nguyên tử.",
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
        "id": "hoa10_ck1_de03_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Lớp electron thứ 3 có bao nhiêu phân lớp electron?",
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
        "displayNumber": 5
      },
      {
        "id": "hoa10_ck1_de03_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử N có 7 proton, nguyên tử H có 1 proton. Số lượng hạt proton và electron trong ion NH<sub>4</sub><sup>+</sup> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "11 proton và 10 electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "11 proton và 11 electron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "10 proton và 11 electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "10 proton và 10 electron.",
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
        "id": "hoa10_ck1_de03_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình vẽ nào sau đây mô tả phù hợp sự tạo thành liên kết từ sự xen phủ các orbital nguyên tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": ".",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": ".",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": ".",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": ".",
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
        "id": "hoa10_ck1_de03_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây về orbital nguyên tử là không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mỗi orbital nguyên tử có thể chứa tối đa hai electron.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Orbital 1s, 2s và 4s đều có dạng hình cầu.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể có các orbital khác ngoài orbital s, p.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số orbital có trong lớp M là 8.",
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
        "id": "hoa10_ck1_de03_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một nguyên tố R có cấu hình electron: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>, công thức oxide cao nhất và hợp chất khí với hydrogen và lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "R<sub>2</sub>O<sub>5</sub>, RH<sub>5</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "R<sub>2</sub>O<sub>3</sub>, RH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "R<sub>2</sub>O<sub>7</sub>, RH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "R<sub>2</sub>O<sub>5</sub>, RH<sub>3</sub>.",
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
        "id": "hoa10_ck1_de03_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong cùng một nhóm A, theo chiều tăng của điện tích hạt nhân, độ âm điện có xu hướng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "giảm xuống",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tăng lên.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "biến đổi không theo quy luật",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "không thay đổi.",
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
        "id": "hoa10_ck1_de03_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chromium được sử dụng nhiều trong luyện kim để chế tạo hợp kim chống  ăn mòn và đánh bóng bề mặt. Nguyên tử chromium có cấu hình electron viết gọn là [Ar]3dd<sup>5</sup>4s<sup>1</sup>. Vị trí chromium trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ố số 17, chu kì 4, nhóm IA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ố số 24, chu kì 4, nhóm VIB.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ố số 24, chu kì 3, nhóm VB.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ố số 27, chu kì 4, nhóm IB.",
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
        "id": "hoa10_ck1_de03_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết cộng hóa trị không phân cực thường là liên kết giữa",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hai kim loại giống nhau.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hai phi kim giống nhau.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "một kim loại mạnh và một phi kim mạnh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "một kim loại yếu và một phi kim yếu.",
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
        "id": "hoa10_ck1_de03_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cation X<sup>2+</sup>(ion dương) có cấu hình electron ở lớp vỏ ngoài cùng 2p<sup>6</sup>. Cấu hình electron của nguyên tử X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup>.",
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
        "id": "hoa10_ck1_de03_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét 3 nguyên tố có cấu hình electron lần lượt: X: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup>; Q: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>; Z: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup>. Tính base tăng dần của các hydroxide là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "XOH < Q(OH)<sub>2</sub> < Z(OH)<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Z(OH)<sub>3</sub> < XOH < Q(OH)<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Z(OH)<sub>3</sub> < Q(OH)<sub>2</sub> < XOH",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "XOH < Z(OH)<sub>3</sub> < Q(OH)<sub>2</sub>.",
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
        "id": "hoa10_ck1_de03_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 2 nguyên tố: X (Z = 19) và Y (Z = 17). Công thức phân tử và bản chất liên kết của hợp chất tạo bởi X và Y là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "XY, liên kết ion.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X<sub>2</sub>Y, liên kết ion.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "XY, liên kết cộng hóa trị có cực.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "XY<sub>2</sub>, liên kết cộng hóa trị có cực.",
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
        "id": "hoa10_ck1_de03_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, các khí hiếm tồn tại ở dạng khí đơn nguyên tử. Dựa vào nhiệt độ sôi của các khí hiếm từ He đến Rn theo số liệu trong bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Khí hiếm</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">He</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ne</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ar</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Kr</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Xn</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Rn</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Số hiệu nguyên tử</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">10</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">18</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">36</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">54</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">86</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhiệt  độ sôi (0C)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-269</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-246</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-186</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-152</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-108</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-62</td></tr></table></div><br/>Hãy cho biết tương tác Van der Waals của khí hiếm nào mạnh nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "He",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Rn",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ne.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xn.",
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
        "id": "hoa10_ck1_de03_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điều nào sau đây đúng khi nói về liên kết hydrogen liên phân tử ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lực hút tĩnh điện giữa nguyên tử H (thường trong các liên kết H – F; H – N , H – O ở phân tử này) với một trong các nguyên tử có độ âm điện mạnh (thường là N, O, F) ở một phân tử khác.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Là lực hút giữa các phân tử khác nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Là lực hút tĩnh điện giữa các ion trái dấu.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Là lực hút giữa các nguyên tử trong một hợp chất cộng hóa trị.",
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
        "id": "hoa10_ck1_de03_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho số hiệu nguyên tử của các nguyên tố H, C, N, O, Cl lần lượt là 1, 6, 7, 8, 17. Chất nào có chứa liên kết ba?",
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
            "text": "CH<sub>4</sub>.",
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
            "text": "N<sub>2</sub>.",
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
        "id": "hoa10_ck1_de03_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Sulfur dạng kem bôi được sử dụng để điều trị mụn trứng cá. Nguyên tử sulfur có phân lớp electron ngoài cùng là 3p<sup>4</sup>.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hạt nhân nguyên tử sulfur có 16 electron.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong bảng tuần hoàn, sulfur nằm ở chu kì 3, nhóm IVA.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Oxide cao nhất của sulfur là SO<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Độ âm điện của sulfur nhỏ hơn độ âm điện của phosphorus (Z = 15).",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Cấu hình của S là [Ne] 3s<sup>2</sup>3p<sup>4</sup><br/>a. Sai. Hạt nhân không có hạt electron.<br/>b. Sai. Nhóm VIA.<br/>c. Sai. Oxide cao nhất của sulfur là SO<sub>3</sub>.<br/>d. Sai. S có độ âm điện lớn hơn P trong cùng một chu kì.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de03_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho sơ đồ biểu diễn sự hình thành liên kết trong phân tử khí carbon dioxide (CO<sub>2</sub>) như sau:",
        "images": [
          "/assets/hoa10/final/h10_ck1_de3_image15.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết giữa nguyên tử O và C trong phân tử CO<sub>2</sub> là liên kết cộng hóa trị phân cực.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử CO<sub>2</sub> có 2 liên kết π và 2 liên kết σ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phân tử CO<sub>2</sub> là phân tử phân cực.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Giữa nguyên tử C với mỗi nguyên tử O có 2 cặp electron chung.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Công thức Lewis<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Phân tử CO<sub>2</sub> không phân cực do tổng momen lưỡng cực trong phân tử bằng không.<br/>d. Đúng.",
        "explanationImages": [
          "/assets/hoa10/final/h10_ck1_de3_image17.png"
        ],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de03_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau về tính chất chung của các hợp chất ion là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khó nóng chảy, dễ bay hơi.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tồn tại dạng tinh thể, tan nhiều trong nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong tinh thể chứa các ion, nếu hòa tan trong nước thì hỗn hợp dẫn được điện.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đều tồn tại ở thể rắn ở điều kiện thường.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Khó bay hơi.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de03_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Mô hình Rutherford – Bohr đã giải thích được rất nhiều các vấn đề trong khoa học nói chung và hóa học nói riêng, đặc biệt là sự chuyển động của electron xung quanh hạt nhân.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo mô hình nguyên tử Rutherford – Bohr, khối lượng nguyên tử tập trung chủ yếu ở hạt nhân.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Electron chuyển động rất nhanh xung quanh hạt nhân và không theo quỹ đạo xác định.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Năng lượng của electron phụ thuộc vào khoảng cách từ electron đó tới hạt nhân nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mô hình Rutherford – Bohr nói về hình dạng và sự định hướng trong không gian của các orbital.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai.<br/>c. Đúng.<br/>d. Sai. Mô hình hiện đại giải thích về hình dạng và sự định hướng trong không gian của các orbital.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de03_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Số hiệu nguyên tửcủa các nguyên tố X, A, M, Q, T lần lượt là 2, 7, 13, 19, 27. Trong số các nguyên tố trên, có bao nhiêu nguyên tố là kim loại?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de03_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử oxygen (Z = 8) có xu hướng nhận bao nhiêu electron để đạt lớp vỏ thoả mãn quy tắc octet?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de03_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Tổng số cặp electron dùng chung giữa các nguyên tử trong phân tử ethylene (C<sub>2</sub>H<sub>4</sub>) là bao nhiêu?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.",
        "explanationImages": [
          "/assets/hoa10/final/h10_ck1_de3_image18.png"
        ],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de03_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: NaCl, H<sub>2</sub>O, K<sub>2</sub>O, BaCl<sub>2</sub>, CaF<sub>2</sub>, HCl, NH<sub>4</sub>NO<sub>3</sub>. Trong các chất trên, có bao nhiêu chất có liên kết ion?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de03_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Dưới đây là biểu đồ tương tác của hai nguyên tử hydrogen ở thể khí so với khoảng cách hạt nhân giữa chúng:<br/>Cho biết độ dài liên kết H – H là bao nhiêu pm?",
        "images": [
          "/assets/hoa10/final/h10_ck1_de3_image16.png"
        ],
        "correctAnswer": "74",
        "explanation": "Đáp án: 74.<br/>Trên biểu đồ, năng lượng tối thiểu đại diện cho độ bền liên kết và khoảng cách r<sub>o</sub> tại mức năng lượng tối thiểu gọi là độ dài liên kết. Do đó phân tử H<sub>2</sub> có năng lượng liên kết là 432 kJ/mol và có độ dài liên kết H – H là 74 pm.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de03_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "M là một nguyên tố chu kì 3, nguyên tử có 3 electron lớp ngoài cùng. Khi cho 1,0 mol hydroxide cao nhất của M tác dụng vừa đủ với x mol HCI hoặc y mol NaOH. Tỉ lệ x : y bằng bao nhiêu? (Kết quả làm tròn tới hàng phần mười).",
        "images": [],
        "correctAnswer": "3,0",
        "explanation": "Đáp án: 3,0.<br/>M là Al  Hydroxdie của M là Al(OH)<sub>3</sub><br/>Al(OH)<sub>3</sub> + 3HCl  AlCl<sub>3</sub> + 3H<sub>2</sub>O<br/>13<br/>Al(OH)<sub>3</sub> + NaOH  NaAlO<sub>2</sub> + H<sub>2</sub>O<br/>11<br/>Tỉ lệ x : y = 3 : 1 = 3.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_ck1_de04",
    "code": "H10-CK1-04",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de04_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hạt mang điện trong hạt nhân nguyên tử là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "proton và electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "proton.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "neutron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "proton và neutron.",
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
        "id": "hoa10_ck1_de04_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy nào dưới đây gồm các đồng vị của cùng một nguyên tố hóa học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "141467X,Y",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1920910X,Y",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "28291414X,Y",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "40401819X,Y .",
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
        "id": "hoa10_ck1_de04_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tố trong cùng chu kì",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có cùng số lớp electron.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "có cùng số electron ở lớp vỏ ngoài cùng của chúng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có tính chất hóa học tương tự nhau.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "có cùng số điện tích hạt nhân.",
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
        "id": "hoa10_ck1_de04_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các nguyên tố nhóm A, đại lượng nào sau đây không biến đổi tuần hoàn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bán kính nguyên tử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính kim loại.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Độ âm điện",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khối lượng nguyên tử.",
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
        "id": "hoa10_ck1_de04_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ô nguyên tố trong bảng tuần hoàn không cho biết thông tin nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kí hiệu nguyên tố",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tên nguyên tố.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số hiệu nguyên tử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số khối của hạt nhân.",
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
        "id": "hoa10_ck1_de04_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bảng tuần hoàn hiện nay có số chu kì và số hàng ngang lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "7 và 9",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "7 và 8",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "7 và 7",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "6 và 7.",
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
        "id": "hoa10_ck1_de04_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong một nhóm A (trừ nhóm VIIIA), theo chiều tăng của điện tích hạt nhân nguyên tử thì",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tính kim loại tăng dần, độ âm điện tăng dần.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tính phi kim giảm dần, bán kính nguyên tử tăng dần.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "độ âm điện giảm dần, tính phi kim tăng dần.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tính kim loại tăng dần, bán kính nguyên tử giảm dần.",
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
        "id": "hoa10_ck1_de04_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo quy tắc bát tử thì nguyên tử có xu hướng đạt cấu trúc bền giống",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "kim loại kiềm gần kề",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "kim loại kiềm thổ gần kề.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nguyên tử halogen gần kề",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nguyên tử khí hiếm gần kề.",
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
        "id": "hoa10_ck1_de04_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nguyên tử, electron hóa trị là các electron",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "độc thân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ở phân lớp ngoài cùng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ở obital ngoài cùng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tham gia tạo liên kết hóa học.",
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
        "id": "hoa10_ck1_de04_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chọn phương án đúng để hoàn thành các câu sau:<br/>Khi tạo thành các hợp chất ion, … (1) … mất các electron hóa trị của chúng để tạo thành … (2) … mang điện tích dương và … (3) … nhận các electron hóa trị để tạo thành … (2) … mang điện tích âm.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) kim loại, (2) anion, (3) phi kim, (4) cation.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) phi kim, (2) cation, (3) kim loại, (4) anion.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) kim loại, (2) ion đa nguyên tử, (3) phi kim, (4) anion",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) kim loại, (2) cation, (3) phi kim, (4) anion.",
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
        "id": "hoa10_ck1_de04_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình vẽ dưới đây mô tả 3 dạng orbital:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">a)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">b)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">c)</th></tr></table></div><br/>Các orbital tương ứng với các hình a), b) và c) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "s, p<sub>x</sub>, p<sub>y</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "s, p<sub>y</sub>, p<sub>z</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "s, p<sub>x</sub>, p<sub>z</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>.",
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
        "id": "hoa10_ck1_de04_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết trong phân tử nào sau đây được hình thành nhờ sự xen phủ orbital p – p? Cho số hiệu nguyên tử H, N, O, F lần lượt là 1, 7, 8, 9.",
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
            "text": "HF",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "O<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>.",
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
        "id": "hoa10_ck1_de04_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của nguyên tố X có cấu hình electron 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>, nguyên tử của nguyên tố Y có cấu hình electron 1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup>. Liên kết hoá học giữa nguyên tử X và nguyên tử Y là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "liên kết kim loại",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "liên kết cộng hoá trị.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "liên kết ion",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "liên kết cho nhận.",
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
        "id": "hoa10_ck1_de04_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tương tác van der Waals xuất hiện là do sự hình thành các lưỡng cực tạm thời cũng như các lưỡng cực cảm ứng. Các lưỡng cực tạm thời xuất hiện là do sự chuyển động của",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "các nguyên tử trong phân tử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "các electron trong phân tử.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "các proton trong hạt nhân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "các neutron và proton trong hạt nhân.",
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
        "id": "hoa10_ck1_de04_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron hóa trị của nguyên tử R ở trạng thái cơ bản là ns<sup>2</sup>np<sup>1</sup>. Phát biểu nào sau đây là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "R thuộc khối nguyên tố p.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "R nằm ở nhóm IIIA trong bảng tuần hoàn.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Công thức oxide cao nhất của R có dạng R<sub>2</sub>O<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "R là một nguyên tố phi kim.",
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
        "id": "hoa10_ck1_de04_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "M là nguyên tố chu kì 3, có khả năng phản ứng mạnh với nước tạo thành dung dịch kiềm MOH. Cấu hình electron của M là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Ar]4s¹",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Ne]3s²3p<sup>5</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Ne]3s<sup>1</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Ne]3s²3p<sup>1</sup>.",
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
        "id": "hoa10_ck1_de04_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy các chất nào dưới đây mà tất cả các phân tử đều có liên kết cộng hóa trị không phân cực?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N<sub>2</sub>, CO<sub>2,</sub>Cl<sub>2</sub>, H<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "N<sub>2</sub>, Cl<sub>2</sub>, H<sub>2</sub>, HCl.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "N<sub>2</sub>, HI, Cl<sub>2</sub>, CH<sub>4</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cl<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, F<sub>2</sub>.",
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
        "id": "hoa10_ck1_de04_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất khí tạo bởi nguyên tố R với hydrogen là RH. Trong oxide cao nhất, R chiếm 58,86% về khối lượng. Nguyên tố R là (cho nguyên tử khối của Br = 80, F = 19, I = 127, Cl = 35,5)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Br",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "F",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "I",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cl.",
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
        "id": "hoa10_ck1_de04_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Aluminium (Al) là kim loại có nhiều ứng dụng trong thực tiễn, được dùng làm dây dẫn điện, chế tạo các thiết bị, máy móc trong công nghiệp và nhiều đồ dùng sinh hoạt. Trong bảng tuần hoàn các nguyên tố hoá học, nguyên tố Al thuộc chu kì 3 và nhóm IIIA.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điện tích hạt nhân của Al là +13.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở trạng thái cơ bản, nguyên tử Al có 3 electron độc thân.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử Al có 3 lớp electron và 3 electron ở lớp ngoài cùng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Theo xu hướng biến đổi tính kim loại, Mg (Z = 12) có tính kim loại yếu hơn Al.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Có 1 electron độc thân.<br/>c. Đúng.<br/>d. Sai. Tính kim loại của Mg mạnh hơn Al trong cùng một chu kì.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de04_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho 2 nguyên tố X và Y có số hiệu nguyên tử lần lượt là 11 và 8.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X là kim loại, Y là phi kim.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hợp chất tạo thành giữa nguyên tử X và nguyên tử Y là X<sub>2</sub>Y.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử X nhường electron để tạo thành cation X<sup>–</sup> ; nguyên tử Y nhận electron để trở thành ion Y<sup>2+</sup>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết trong hợp chất được tạo thành giữa nguyên tử X và Y là liên kết cộng hóa trị.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng. Hợp chất Na<sub>2</sub>O.<br/>c. Sai. X<sup>+</sup> và Y<sup>2–</sup>.<br/>d. Sai. Liên kết ion.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de04_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho sơ đồ của một nguyên tử X được biễu diễn như sau:",
        "images": [
          "/assets/hoa10/final/h10_ck1_de4_image9.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X là nguyên tử nguyên tố lithium (Z = 3).",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử X có bán kính lớn hơn bán kính của nguyên tử của carbon (Z = 6).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong nguyên tử X, số hạt mang điện nhiều hơn hạt mang điện là 2.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khối lượng của một nguyên tử X gần đúng bằng 7 (amu). Biết khối lượng của một hạt electron, proton, neutron lần lượt là 0,00055; 1 và 1 amu.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. m<sub>X</sub> xấp xỉ = 3 + 3 + 4 = 8 amu.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de04_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Để một chất có thể nóng chảy hoặc sôi, cần phải cung cấp năng lượng để phá vỡ liên kết giữa các phân tử và cung cấp động năng để phân tử chuyển động. Nhiệt độ nóng chảy và nhiệt độ sôi của chất phụ thuộc vào hai yếu tố:<br/>(1) Khối lượng phân tử: Khối lượng phân tử càng lớn thì càng cần nhiều động năng để chuyển động nên nhiệt độ nóng chảy, nhiệt độ sôi càng cao.<br/>(2) Liên kết giữa các phân tử: Số lượng liên kết giữa các phân tử càng nhiều, lực liên kết càng mạnh thì càng cần nhiều năng lượng để phá vỡ liên kết giữa chúng. Khi đó nhiệt độ nóng chảy và nhiệt độ sôi của chất đó càng cao.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ nóng chảy và nhiệt độ sôi của chất phụ thuộc vào hai yếu tố: khối lượng phân tử, liên kết giữa các phân tử.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ nóng chảy, nhiệt độ sôi của H<sub>2</sub>O cao hơn H<sub>2</sub>S là do giữa các phân tử H<sub>2</sub>O có liên kết hydrogen trong khi đó H<sub>2</sub>S không có.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhiệt độ sôi của HF cao hơn hẳn so với HCl, HBr, HI do giữa các phân tử hydrogen fluoride (HF) có liên kết hydrogen, còn giữa các phân tử HCl cũng như HBr và HI không có liên kết hydrogen.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong quá trình chưng cất rượu, C<sub>2</sub>H<sub>5</sub>OH bay hơi trước H<sub>2</sub>O mặc dù khối lượng phân tử C<sub>2</sub>H<sub>5</sub>OH lớn hơn khá nhiều khối lượng phân tử H<sub>2</sub>O là do liên kết hydrogen giữa các phân tử H<sub>2</sub>O bền hơn so với liên kết hydrogen giữa các phân tử C<sub>2</sub>H<sub>5</sub>OH.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de04_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 6 nguyên tố có số hiệu nguyên tử lần lượt là 7, 11, 13, 17 và 19. Trong số các nguyên tố trên, có bao nhiêu nguyên tố thuộc cùng một nhóm?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de04_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Tổng số cặp electron dùng chung giữa các nguyên tử trong phân tử acetylene (C<sub>2</sub>H<sub>2</sub>) là bao nhiêu?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [
          "/assets/hoa10/final/h10_ck1_de4_image11.png"
        ],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de04_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Trong dung dịch ethanol (C<sub>2</sub>H<sub>5</sub>OH) có bao nhiêu loại liên kết hydrogen được tạo thành?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [
          "/assets/hoa10/final/h10_ck1_de4_image12.png"
        ],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de04_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các hợp chất sau: NaCl, HCl, N<sub>2</sub>, CO<sub>2</sub>, NH<sub>3</sub>, H<sub>2</sub>O. Trong số các hợp chất trên, có bao nhiêu hợp chất chứa liên kết cộng hóa trị?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de04_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Hai nguyên tố X và Y ở hai nhóm A liên tiếp trong bảng tuần hoàn, X thuộc nhóm VA. Ở trạng thái đơn chất, X và Y không phản ứng với nhau. Tổng số proton trong hạt nhân nguyên tử của X và Y là 23. Xác định số proton trong nguyên tử X.",
        "images": [],
        "correctAnswer": "7",
        "explanation": "Đáp án: 7.<br/>Số proton của X là p thì của Y là p + 9<br/>Ta có: p + p + 9 = 23<br/>⇒ p = 7 ~ <sub>7</sub>N và p + 9 = 16 ~ <sub>16</sub>S (thỏa mãn đề bài vì ở trạng thái đơn chất chúng không phản ứng với nhau).<br/>Vậy cặp nguyên tố X, Y là N và S.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de04_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Từ phổ khối lượng các đồng vị của Cu trong tự nhiên ở dưới đây:<br/>Cho biết giá trị nguyên tử khối trung bình của Cu? (Làm tròn kết quả tới hàng phần mười).",
        "images": [
          "/assets/hoa10/final/h10_ck1_de4_image10.png"
        ],
        "correctAnswer": "63,6",
        "explanation": "Đáp án: 63,6.<br/>63.765.3A63,6.73+==+<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_ck1_de05",
    "code": "H10-CK1-05",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de05_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hạt nào sau đây mang điện tích âm và có khối lượng không đáng kể trong nguyên tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Proton",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Proton và neutron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Neutron.",
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
        "id": "hoa10_ck1_de05_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nguyên tử X, Y, Z, T có các đặc điểm như sau:<br/>(1) X có 17 proton và số khối bằng 35.(2) Y có 17 neutron và số khối bằng 33.<br/>(3) Z có 17 neutron và 15 proton.(4) T có 20 neutron và số khối bằng 37.<br/>Những nguyên tử là đồng vị của cùng một nguyên tố hóa học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X và Y",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X, Y và Z",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Y và Z",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X và T.",
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
        "id": "hoa10_ck1_de05_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Lớp N có bao nhiêu phân lớp electron?",
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
            "text": "4.",
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
        "id": "hoa10_ck1_de05_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Orbital nguyên tử là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "đám mây chứa electron có dạng hình cầu.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đám mây chứa electron có dạng hình số 8 nổi.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "khu vực không gian xung quanh hạt nhân mà tại đó xác suất có mặt electron 90%.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "quỹ đạo chuyển động của electron quay quanh hạt nhân có kích thước năng lượng xác định.",
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
        "id": "hoa10_ck1_de05_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron của nguyên tử Si (Z = 14) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "22641s2s2p3p",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "225221s2s2p3s3p",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "22641 s2 s2p2 d",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "226211s2s2p3s3p .",
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
        "id": "hoa10_ck1_de05_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử nào sau đây có liên kết cộng hóa trị không phân cực?",
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
            "text": "Cl<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "PH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>S.",
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
        "id": "hoa10_ck1_de05_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biết số hiệu nguyên tử của hai nguyên tố X và Y lần lượt là 12 và 8. Cho các phát biểu sau:<br/>(a) Độ âm điện của nguyên tử X nhỏ hơn độ âm điện của nguyên tử Y.<br/>(b) X là kim loại, Y là phi kim.<br/>(c) Trong các phản ứng hóa học, nguyên tử X có xu hướng nhường 2 electron.<br/>(d) Khi hình thành liên kết với nguyên tử X, nguyên tử Y nhận 1 electron.<br/>Số phát biểu đúng là",
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
            "text": "1",
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
        "displayNumber": 7
      },
      {
        "id": "hoa10_ck1_de05_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây tạo được liên kết hydrogen giữa các phân tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>S",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>O",
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
            "text": "CH<sub>4</sub>.",
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
        "id": "hoa10_ck1_de05_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sulfur (S) thuộc nhóm VIA trong bảng tuần hoàn các nguyên tố hóa học. Công thức oxide cao nhất của sulfur là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "SO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "SO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>SO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>SO<sub>4</sub>.",
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
        "id": "hoa10_ck1_de05_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Anion X<sup>–</sup> có cấu hình electron của phân lớp ngoài cùng là 2p<sup>6</sup>. Vị trí của X trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 2, nhóm VA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 3, nhóm IA.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 2, nhóm VIA.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 2, nhóm VIIA.",
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
        "id": "hoa10_ck1_de05_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn các nguyên tố, chu kì 1 và chu kì 3 có số nguyên tố lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2 và 6",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2 và 8",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1 và 6",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 và 8.",
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
        "id": "hoa10_ck1_de05_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số thứ tự của nhóm (trừ hai cột 9, 10 của nhóm VIIIB) bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số đơn vị điện tích hạt nhân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số lớp electron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số electron hóa trị",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số electron ở lớp ngoài cùng.",
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
        "id": "hoa10_ck1_de05_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số liên kết  s  và liên kết  p  trong một liên kết ba là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0 và 3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1 và 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1 và 2",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3 và 1 .",
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
        "id": "hoa10_ck1_de05_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong một nhóm của bảng tuần hoàn các nguyên tố hóa học, theo chiều tăng dần điện tích hạt nhân, bán kính nguyên tử của các nguyên tố giảm dần do số lớp electron ...(I), lực hút giữa hạt nhân với electron lớp ngoài cùng ...(II). Cụm từ cần điền vào (I), (II) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tăng dần, tăng dần",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "giảm dần, giảm dần.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "giảm dần, tăng dần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tăng dần, giảm dần.",
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
        "id": "hoa10_ck1_de05_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quá trình hình thành phân tử X có sự xen phủ orbital như sau:<br/>Chất X nào sau đây không thỏa mãn? (cho số hiệu nguyên tử H, F, Cl, Br lần lượt là 1, 9, 17, 35)",
        "images": [
          "/assets/hoa10/final/h10_ck1_de5_image8.png"
        ],
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
            "text": "HF",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HBr",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cl<sub>2</sub>.",
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
        "id": "hoa10_ck1_de05_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết ion được tạo thành giữa hai nguyên tử bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "một hay nhiều cặp electron dùng chung.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "một hay nhiều cặp electron dùng chung nhưng chỉ do một nguyên tử đóng góp.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "lực hút tĩnh điện giữa các ion mang điện tích trái dấu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "một hay nhiều cặp electron dùng chung và cặp electron dùng chung bị lệch về phía nguyên tử có độ âm điện lớn hơn.",
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
        "id": "hoa10_ck1_de05_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng khi nói về tính chất của hợp chất cộng hoá trị?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ nóng chảy và nhiệt độ sôi thấp hơn các hợp chất ion.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tồn tại trạng thái rắn, lỏng hoặc khí ở điều kiện thường.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các hợp chất cộng hóa trị đều dẫn điện tốt.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hợp chất cộng hoá trị không phân cực thường tan tốt trong dung môi không phân cực.",
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
        "id": "hoa10_ck1_de05_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nếu giữa phân tử chất tan và dung môi có thể tạo thành liên kết hydrogen hoặc có tương tác van der Waals càng mạnh với nhau thì càng tan tốt vào nhau. Lí do nào sau đây là phù hợp để giải thích dầu hoả (thành phần chính là hydrocarbon) không tan trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả nước và dầu đều là các phân tử có cực.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nước là phân tử phân cực và dầu là không/ít phân cực.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước là phân tử không phân cực và dầu là phân cực.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cả nước và dầu đều không các phân cực.",
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
        "id": "hoa10_ck1_de05_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây về mô hình nguyên tử hiện đại là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Electron chuyển động không theo những quỹ đạo xác định trong cả khu vực không gian xung quanh hạt nhân.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tất cả các AO nguyên tử đều có hình dạng giống nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mỗi AO nguyên tử chỉ có thể chứa được 1 electron.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các electron s chuyển động trong các AO có hình số tám nổi.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. AO s có dạng hình cầu, AO p có dạng hình số tám nổi.<br/>c. Sai. Mỗi AO chứa tối đa 2 electron.<br/>d. Sai. Các electron s chuyển động trong các AO có hình cầu.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de05_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tử nguyên tố R có cấu hình electron phân lớp cuối cùng là 3p<sup>3</sup>. Cho nguyên tử khối của R là 31.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức hydroxide cao nhất của R là HRO<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "R có tính phi kim mạnh hơn Si (Z = 14).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử R có 5 electron ở phân lớp ngoài cùng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phần trăm khối lượng của nguyên tố R trong hợp chất khí với hydrrogen là 92,37%.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai.<br/>b. Đúng.<br/>c. Sai. Có 3 electron.<br/>d. Sai. %R = 91,18%.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de05_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Sodium oxide (Na<sub>2</sub>O) có trong thành phần thủy tinh và các sản phẩm gốm sứ. Cho số hiệu nguyên tử của Na, O, Ne lần lượt là 11, 8 và 10.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử Na<sub>2</sub>O, các ion Na<sup>+</sup> và ion O<sup>2–</sup> đều đạt cấu hình electron bền vững của khí hiếm neon.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử Na<sub>2</sub>O được tạo ra bởi lực hút tĩnh điện giữa hai ion Na<sup>+</sup> và một ion O<sup>2–</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở điều kiện thường, Na<sub>2</sub>O là chất lỏng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na<sub>2</sub>O có nhiệt độ nóng chảy thấp hơn magnesium oxide (MgO).",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Na<sub>2</sub>O là chất rắn.<br/>d. Đúng. Bán kính Na<sup>+</sup> < bán kính Mg<sup>2+</sup>, đồng thời điện tích của Mg<sup>2+</sup> nhiều hơn Na<sup>+</sup> nên MgO có nhiệt độ nóng chảy cao hơn.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de05_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho biết năng lượng liên kết H-I, H-Br và H-Cl lần lượt là 299 kJ/mol, 366 kJ/mol, 432 kJ/mol.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi đun nóng, HI bị phân huỷ (thành H<sub>2</sub> và I<sub>2</sub>) ở nhiệt độ thấp hơn so với HBr (thành H<sub>2</sub> và Br<sub>2</sub>).",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng của Cl<sub>2</sub> với H<sub>2</sub> xảy ra dễ hơn so với phản ứng của Br<sub>2</sub> với H<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi đun nóng, HCl bị phân huỷ (thành H<sub>2</sub> và Cl<sub>2</sub>) ở nhiệt độ thấp hơn so với HBr (thành H<sub>2</sub> và Br<sub>2</sub>).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Độ bền liên kết tăng dần theo thứ tự là HCl, HBr, HI.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. HCl khó bị phân hủy hơn do năng lượng liên kết lớn hơn.<br/>d. Sai. Theo chiều giảm dần.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de05_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử nguyên tố nitrogen (hình dưới đây) chuyển thành ion mang điện tích là bao nhiêu khi nhận electron để thỏa mãn quy tắc octet?<br/>Mô hình cấu tạo nguyên tử nitrogen",
        "images": [
          "/assets/hoa10/final/h10_ck1_de5_image9.png"
        ],
        "correctAnswer": "-3",
        "explanation": "Đáp án: -3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de05_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 0,99 gam hỗn hợp gồm potassium (K) và một kim loại kiềm X vào nước dư. Để trung hòa dung dịch thu được cần 50 mL dung dịch HCl 1M. Nguyên tử khối của X là bao nhiêu? Cho nguyên tử khối của các nguyên tố Li = 7, Na = 23, K = 39, Rb = 85, Cs = 133.",
        "images": [],
        "correctAnswer": "7",
        "explanation": "Đáp án: 7.<br/>2R + 2H<sub>2</sub>O  2ROH + H<sub>2</sub><br/>ROH + HCl  RCl + H<sub>2</sub>O<br/>HClROHRR0,99nnn0,05molM19,80,05===Þ==<br/>M<sub>Li</sub> = 7 < 19,8 < M<sub>K</sub> = 39.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de05_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất với trị số nhiệt độ sôi sau: (1) H<sub>2</sub>O, (2) H<sub>2</sub>S, (3) CH<sub>4</sub> và –161,58<sup>o</sup>C; –60,75<sup>o</sup>C; 100<sup>o</sup>C. Ghép giá trị nhiệt độ sôi vào mỗi chất sao cho tạo thành dãy ba chữ số theo thứ tự tăng dần nhiệt độ sôi (ví dụ 123, 312,…)",
        "images": [],
        "correctAnswer": "321",
        "explanation": "Đáp án: 321.<br/>Giá trị nhiệt độ sôi của từng chất: H<sub>2</sub>O (100<sup>o</sup>C); H<sub>2</sub>S (–60,75<sup>o</sup>C); CH<sub>4</sub> (–161,58<sup>o</sup>C).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de05_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các ion: Li<sup>+</sup>, Ca<sup>2+</sup>, Al<sup>3+</sup>, F<sup>-</sup>, O<sup>2-</sup>, PO<sub>4</sub><sup>3-</sup>. Có bao nhiêu hợp chất ion (tạo nên từ một loại cation và một loại anion) có thể được tạo thành từ các ion đã cho?",
        "images": [],
        "correctAnswer": "9",
        "explanation": "Đáp án: 9.<br/>Công thức các hợp chất ion có thể tạo thành là: LiF, Li<sub>2</sub>O, Li<sub>3</sub>PO<sub>4</sub>, CaF<sub>2</sub>, CaO, Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>, AlF<sub>3</sub>, Al<sub>2</sub>O<sub>3</sub>, AlPO<sub>4</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de05_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho hợp chất hữu cơ X có công thức cấu tạo như sau:<br/>Tổng số cặp electron dùng chung giữa các nguyên tử trong phân tử X là bao nhiêu?",
        "images": [
          "/assets/hoa10/final/h10_ck1_de5_image10.png"
        ],
        "correctAnswer": "11",
        "explanation": "Đáp án: 11.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de05_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Trong tự nhiên, nguyên tố X có hai đồng vị là X<sub>1</sub> và X<sub>2</sub> (trong đó X<sub>2</sub> chiếm 81% số nguyên tử). Tổng số khối của hai đồng vị là 21. Số neutron trong nguyên tử X<sub>2</sub> nhiều hơn số neutron trong nguyên tử X<sub>1</sub> là 1 hạt. Tính nguyên tử khối trung bình của X. (Làm tròn kết quả đến hàng phần mười)",
        "images": [],
        "correctAnswer": "10,8",
        "explanation": "Đáp án: 10,8.<br/>A<sub>1</sub> + A<sub>2</sub> = 21 và N<sub>2</sub> – N<sub>1</sub> = 1  A<sub>2</sub> – A<sub>1</sub>= 1<br/>Giải tìm được A<sub>1</sub> = 10 và A<sub>2</sub> = 11<br/>10.1911.81A10,81100+==  .<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_ck1_de06",
    "code": "H10-CK1-06",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de06_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trường hợp nào sau đây có sự tương ứng giữa hạt cơ bản với khối lượng và điện tích của chúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Proton, m  0,00055 amu, q = +1",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Neutron, m  1 amu, q = 0.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron, m  1 amu, q = -1",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Proton, m  1 amu, q = -1.",
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
        "id": "hoa10_ck1_de06_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố hóa học là những nguyên tử có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số khối.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nguyên tử khối.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "điện tích hạt nhân.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số neutron.",
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
        "id": "hoa10_ck1_de06_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của một nguyên tố có 4 lớp electron, theo thứ tự từ phía gần hạt nhân là: K, L, M, N. Electron thuộc lớp nào có mức năng lượng trung bình cao nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lớp K",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lớp L",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lớp M",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lớp N.",
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
        "id": "hoa10_ck1_de06_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho vị trí của các nguyên tố E, T, Q, X, Y, Z trong bảng tuần hoàn rút gọn (chỉ biểu diễn các nguyên tố nhóm A) như sau:<br/>Có các nhận xét sau:<br/>(1) Thứ tự giảm dần tính kim loại Y, E, X.<br/>(2) Thứ tự tăng dần độ âm điện là Y, X, Z, T.<br/>(3) Thứ tự giảm dần tính phi kim là T, Z, Q.<br/>(4) Thứ tự giảm dần bán kính nguyên tử là Y, E, X, T.<br/>Số nhận xét đúng là",
        "images": [
          "/assets/hoa10/final/h10_ck1_de6_image2.png"
        ],
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
        "displayNumber": 4
      },
      {
        "id": "hoa10_ck1_de06_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo quy tắc octet, khi hình thành liên kết hóa học, các nguyên tử có xu hướng nhường,  nhận hoặc góp chung electron để đạt cấu hình electron bền vững giống với",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "kim loại kiềm gần kề",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "kim loại kiềm thổ gần kề.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nguyên tử halogen gần kề",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nguyên tử khí hiếm gần kề.",
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
        "id": "hoa10_ck1_de06_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhóm hợp chất nào sau đây đều là hợp chất ion?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>S, Na<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>4</sub>, CO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CaO, NaCl",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "SO<sub>2</sub>, KCl.",
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
        "id": "hoa10_ck1_de06_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử nào sau đây được tạo thành từ sự xen phủ p – p? (Cho số hiệu nguyên tử H, S, Cl lần lượt là 1, 16, 17).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cl<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>",
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
            "text": "H<sub>2</sub>S.",
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
        "id": "hoa10_ck1_de06_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không thể tạo được liên kết hydrogen?",
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
            "text": "H<sub>2</sub>S",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>3</sub>.",
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
        "id": "hoa10_ck1_de06_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biết giá trị năng lượng liên kết Cl<sup>-</sup>Cl; Br<sup>-</sup>Br, I<sup>-</sup>I lần lượt là 243; 193; 151 kJ/mol, hãy chọn phương án đúng khi so sánh độ bền liên kết giữa các phân tử Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "I<sub>2</sub> > Br<sub>2</sub> > Cl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Br<sub>2</sub> > Cl<sub>2</sub> > I<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cl<sub>2</sub>> Br<sub>2</sub>> I<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cl<sub>2</sub>> I<sub>2</sub>> Br<sub>2</sub>.",
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
        "id": "hoa10_ck1_de06_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử nào sau đây chỉ chứa ion đơn nguyên tử?",
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
            "text": "NH<sub>4</sub>Cl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ca(OH)<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "BaCl<sub>2</sub>.",
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
        "id": "hoa10_ck1_de06_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron của ion X<sup>2+</sup> là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>6</sup>. Vị trí của nguyên tố X trong bảng tuần hoàn các nguyên tố hóa học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 4, nhóm VIIIB.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 4, nhóm VIIIA.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 3, nhóm VIB",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 4, nhóm IIA.",
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
        "id": "hoa10_ck1_de06_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn các nguyên tố hóa học, nhóm kim loại kiềm nằm ở",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "đầu các chu kì",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cuối các chu kì.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đầu các nhóm nguyên tố",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cuối các nhóm nguyên tố.",
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
        "id": "hoa10_ck1_de06_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo quy ước kinh nghiệm dựa vào thang độ âm điện, liên kết cộng hóa trị không cực được tạo thành giữa hai nguyên tử có hiệu độ âm điện",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "từ 0,0 đến < 0,4",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "từ 0,4 đến < 1,7",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "³ 1,7",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "> 1,7.",
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
        "id": "hoa10_ck1_de06_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng hệ thống tuần hoàn, theo chiều tăng dần của điện tích hạt nhân, quy luật biến đổi nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong một chu kỳ, độ âm điện của các nguyên tố giảm dần.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong một nhóm A, tính phi kim của các nguyên tố tăng dần.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong một nhóm A, bán kính nguyên tử của các nguyên tố giảm dần.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong một chu kỳ, bán kính của của các nguyên tố giảm dần.",
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
        "id": "hoa10_ck1_de06_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết σ là liên kết được hình thành do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sự xen phủ bên của 2 orbital",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cặp electron chung.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "lực hút tĩnh điện giữa hai ion",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sự xen phủ trục của hai orbital.",
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
        "id": "hoa10_ck1_de06_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử nguyên tố X có phân lớp electron ngoài cùng là 3p<sup>4</sup>. Công thức oxide ứng với hoá trị cao nhất của X, hydroxide tương ứng và tính acid – base của chúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X<sub>2</sub>O<sub>3</sub>, X(OH)<sub>3</sub>, tính lưỡng tinh.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "XO<sub>3</sub>, H<sub>2</sub>XO<sub>4</sub>, tính acid.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "XO<sub>2</sub>, H<sub>2</sub>XO<sub>3</sub>, tỉnh acid.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "XO, X(OH)<sub>2</sub>, tỉnh base.",
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
        "id": "hoa10_ck1_de06_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây về Ca (Z = 20) không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có 2 electron hóa trị",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Là nguyên tố kim loại.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hóa trị cao nhất với oxygen là II",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Oxide cao nhất của calcium có tính acid.",
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
        "id": "hoa10_ck1_de06_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tương tác van der Waals tăng khi",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "khối lượng phân tử tăng, kích thước phân tử tăng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "khối lượng phân tử giảm, kích thước phân tử giảm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "khối lượng phân tử tăng, kích thước phân tử giảm.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "khối lượng phân tử giảm, kích thước phân tử tăng.",
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
        "id": "hoa10_ck1_de06_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho số hiệu các nguyên tử của H, F, Cl và N lần lượt là 1, 9, 17 và 7.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sự tạo liên kết trong các phân tử H<sub>2</sub>, Cl<sub>2</sub> và F<sub>2</sub> theo kiểu xen phủ của các orbital cùng loại.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử NH<sub>3</sub> và NF<sub>3</sub> đều chứa liên kết cộng hóa trị không phân cực.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phân tử N<sub>2</sub> có chứa 1 liên kết σ và 2 liên kết π.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhiệt độ sôi của HF (19,5<sup>o</sup>C) cao hơn nhiệt độ sôi của HCl (-81,5<sup>o</sup>C) là do giữa các phân tử HF có liên kết hydrogen.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Vì H<sub>2</sub> có sự xen phủ s-s còn Cl<sub>2</sub>, F<sub>2</sub> có sự xen phủ p-p.<br/>b. Sai. Chứa liên kết cộng hóa trị phân cực.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de06_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "\"Nước\" là tên trạng thái lỏng của H<sub>2</sub>O ở điều kiện tiêu chuẩn về nhiệt độ và áp suất. Nước bao phủ 71% bề mặt Trái đất, chủ yếu ở các biển và đại dương. Nước đóng một vai trò quan trọng trong nền kinh tế thế giới. Khoảng 70% lượng nước ngọt mà con người sử dụng được dùng cho nông nghiệp. Đánh bắt cá ở các vùng nước mặn và nước ngọt là nguồn cung cấp thực phẩm chính cho nhiều nơi trên thế giới. Cho số hiệu nguyên tử của H là 1 và O là 8; giá trị độ âm điện của H là 2,20 và O là 3,44.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết H – O là liên kết cộng hoá trị phân cực.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cặp electron dùng chung trong liên kết H – O phân bố đều giữa hai nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử O còn bốn cặp electron hoá trị riêng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nước là dung môi phân cực có thể hòa tan các chất phân cực.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Cặp e dùng chung bị lệch về phía nguyên tử O.<br/>c. Sai. Nguyên tử O góp chung 2e nên còn 4e ứng với 2 cặp e riêng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de06_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tố lithium (Li, Z = 3) được sử dụng để sản xuất pin lithium, loại pin sạc được dùng trong thiết bị điện tử (điện thoại, máy tính,…), phương tiện di chuyển dùng điện (xe đạp điện, xe máy điện,…) và kĩ thuật hàng không. Phổ khối lượng của lithium cho dưới đây:",
        "images": [
          "/assets/hoa10/final/h10_ck1_de6_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Li có hai đồng vị bền là  và .",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử khối trung bình của Li là 6,5.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong bảng tuần hoàn, nguyên tố Li thuộc chu kì 2, nhóm IA.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu coi mỗi nguyên tử Li là một quả cầu thì trong 4,155 gam Li có 3,6132.10<sup>22</sup> quả cầu (cho N<sub>A</sub> = 6,022.10<sup>23</sup>).",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Nguyên tử khối trung bình của Li là 6,925.<br/>c. Đúng.<br/>d. Đúng.  2323ANn.N.6,022.14,1503,6.10695,25=== .",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de06_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cation M<sup>+</sup> và anion Y<sup>2–</sup> có cấu hình electron phân lớp ngoài cùng là 3p<sup>6</sup>.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong bảng tuần hoàn, nguyên tố M nằm ở ô 15, chu kì 3, nhóm VIA.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các ion M<sup>+</sup> và Y<sup>2–</sup> có cùng cấu hình electron với khí hiếm Ar (Z = 18).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Công thức oxide cao nhất của Y có dạng YO<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hợp chất tạo bởi M và Y là chất rắn ở điều kiện thường và có công thức MY<sub>2</sub>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>X: [Ar] 4s<sup>1</sup> và Y [Ne] 3s<sup>2</sup>3p<sup>4</sup>.<br/>a. Sai. M thuộc chu kì 4, nhóm IA; Y thuộc chu kì 3, nhóm VIA.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Hợp chất ion M<sub>2</sub>Y tồn tại ở thể rắn (K<sub>2</sub>S).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de06_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử sulfủr có Z = 16, có bao nhiêu electron hóa trị?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de06_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho biết trong các phân tử sau MgO, AlCl<sub>3</sub>, CH<sub>4</sub>, CCl<sub>4</sub>, O<sub>2</sub>, H<sub>2</sub>O và NH<sub>3</sub>. Dựa vào giá trị độ âm điện, cho biết có bao nhiêu phân tử có chứa liên kết cộng hóa trị?<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nguyên tử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Mg</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Al</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">N</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cl</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Độ âm điện</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1,31</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1,61</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2,20</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3,04</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3,16</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3,44</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2,55</td></tr></table></div>",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de06_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử R có tổng số hạt mang điện và không mang điện là 33. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 10. Cho 0,1 mol hydroxide của R tác dụng với dung dịch HCl dư, số mol HCl đã tham gia phản ứng là bao nhiêu?",
        "images": [],
        "correctAnswer": "0,1",
        "explanation": "Đáp án: 0,1.<br/>Ta có: 2p + n = 33 và 2p – n = 11  p = 11 và n = 11<br/>Công thức hydroxide cao nhất của R là ROH (vì R thuộc nhóm IA)<br/>ROH + HCl  RCl + H<sub>2</sub>O<br/>Số mol HCl phản ứng bằng 0,1 mol.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de06_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho số hiệu của nguyên tố N và O lần lượt là 7 và 8 . Biết rằng hóa trị của nguyên tố N trong phân tử HNO<sub>2</sub> bằng tổng số liên kết  s  và liên kết  p  mà nguyên tử N tạo thành khi liên kết với các nguyên tử xung quanh. Trong phân tử HNO<sub>2</sub>, nguyên tử N không liên kết với nguyên tử H mà liên kết với 2 nguyên tử O. Từ đó viết được công thức Lewis phù hợp của phân tử HNO<sub>2</sub> với hóa trị của N là n. Giá trị của n là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Công thức cấu tạo của HNO<sub>2</sub>:  HONO--=<br/>Tổng số kết liên kết mà nguyên tử N tạo thành là 3 → hoá trị của N là 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de06_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Trong dung dịch NH<sub>3</sub> (hỗn hợp NH<sub>3</sub> và H₂O) tồn tại bao nhiêu loại liên kết hydrogen?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Kiểu 1</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Kiểu 2</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Kiểu 3</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Kiểu 4</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td></tr></table></div>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de06_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Theo nghiên cứu của Đại học Harvard vào năm 2013, trẻ em sinh sống tại những khu vực có nguồn nước bị nhiễm Fluorine có chỉ số IQ trung bình sẽ thấp hơn so với những trẻ em sống tại vùng khác. Anion F<sup>–</sup> (fluoride) có độc tính mạnh với hệ thần kinh. Với lượng tương đối thấp 0,2 gam ion F<sup>–</sup>trên cơ thể có trọng lượng 70 kg có thể gây tử vong. Tuy nhiên, sự có mặt của anion fluoride lại giúp men răng chắc khỏe và chống chọi các bệnh về sâu răng, vì vậy anion fluoride được thêm vào nước uống đóng chai với nồng độ với nồng độ 1mg ion F<sup>–</sup> trên 1 lít nước và bổ sung một lượng nhỏ dưới dạng muối sodium fluoride (NaF) trong kem đánh răng.<br/>Một bạn học sinh nặng khoảng 63kg sử dụng loại nước chứa ion F<sup>–</sup> với lượng 1mg/1L để giúp men răng chắc khỏe, chống sâu răng. Sau khi đọc thông tin về độc tính của ion F<sup>–</sup>, bạn học sinh rất lo lắng. Hãy tính xem với thể tích nước mà bạn học sinh này uống một ngày là bao nhiêu lít thì ion F<sup>–</sup> có trong nước đạt đến mức có thể gây độc tính?",
        "images": [],
        "correctAnswer": "180",
        "explanation": "Đáp án: 180.<br/>Khối lượng F<sup>-</sup> gây độc trên cơ thể 63kg  = 63.0,2/70 = 0,18 gam<br/>Thể tích nước mà bạn học sinh này uống một ngày thì ion F<sup>-</sup> có trong nước đạt đến mức có thể gây độc tính = 0,18.1000 = 180 lít.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_ck1_de07",
    "code": "H10-CK1-07",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de07_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các hạt cấu tạo nên hầu hết các nguyên tử là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "electron và proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "neutron và proton.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "electron và neutron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "electron, neutron và proton.",
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
        "id": "hoa10_ck1_de07_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố X có ba đồng vị bền, thông tin về phần trăm số lượng nguyên tử tương ứng của từng đồng vị được cho trong bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Số khối của đồng vị</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">24</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">25</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">26</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Phần trăm số lượng nguyên tử</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">79,0</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">10,0</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">11,0</td></tr></table></div><br/>Nguyên tử khối trung bình của nguyên tố X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "24,15",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "24,32",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "24,50",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "24,00.",
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
        "id": "hoa10_ck1_de07_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tổng số hạt neutron, proton, electron trong ion  3517 Cl<sup>–</sup> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "52",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "35",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "53",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "51.",
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
        "id": "hoa10_ck1_de07_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lớp K là lớp xa hạt nhân nhất.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các electron trong cùng một lớp có mức năng lượng bằng nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lớp N có 4 orbital.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các electron trên cùng phân lớp có mức năng lượng bằng nhau.",
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
        "id": "hoa10_ck1_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở trạng thái cơ bản, cấu hình electron nguyên tử nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Ne]3s<sup>1</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Ne]3s<sup>2</sup>3p<sup>6</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Ar]4s<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Ne]3s<sup>1</sup>3p<sup>5</sup>.",
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
        "id": "hoa10_ck1_de07_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất vừa có liên kết cộng hoá trị phân cực, vừa có liên kết cộng hoá trị không phân cực là",
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
            "text": "H<sub>2</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NH<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>2</sub>F<sub>6</sub>.",
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
        "id": "hoa10_ck1_de07_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biểu diễn sự tạo thành ion nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na + le  Na<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cl<sub>2</sub>  2Cl<sup>–</sup> + 2e",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "O<sub>2</sub> + 2e  2O<sup>2–</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ca  Ca<sup>2+</sup> + 2e.",
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
        "id": "hoa10_ck1_de07_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tương tác van der Waals xuất hiện là do sự hình thành các lưỡng cực tạm thời cũng như các lưỡng cực cảm ứng. Các lưỡng cực tạm thời xuất hiện là do sự chuyển động của",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "các nguyên tử trong phân tử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "các electron trong phân tử.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "các proton trong hạt nhân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "các neutron và proton trong hạt nhân.",
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
        "id": "hoa10_ck1_de07_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Năng lượng liên kết (E<sub>b</sub>) đặc trung cho điều gì?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Độ bền liên kết",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Độ dài liên kết",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính chất liên kết",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Loại liên kết.",
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
        "id": "hoa10_ck1_de07_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết ion được tạo thành giữa hai nguyên tử bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "một hay nhiều cặp electron dùng chung.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "một hay nhiều cặp electron dùng chung chỉ do một nguyên tử đóng góp.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "lực hút tĩnh điện giữa các ion mang điện tích trái dấu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "một hay nhiều cặp electron dùng chung.",
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
        "id": "hoa10_ck1_de07_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bảng tuần hoàn hiện nay có số chu kì và số hàng ngang lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "7 và 9",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "7 và 8",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "7 và 7",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "6 và 7.",
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
        "id": "hoa10_ck1_de07_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn, các nguyên tố hóa học được sắp xếp theo ba nguyên tắc, nguyên tắc nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tử khối tăng dần",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cùng số lớp electron cùng cột.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Điện tích hạt nhân tăng dần",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cùng số electron hóa trị xếp cùng hàng.",
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
        "id": "hoa10_ck1_de07_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phân tử ammonia (NH<sub>3</sub>), số cặp electron chung giữa nguyên tử nitrogen và các nguyên tử hydrogen là",
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
            "text": "1",
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
        "id": "hoa10_ck1_de07_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xu hướng biến đổi độ âm điện của các nguyên tố trong bảng tuần hoàn tương tự như xu hướng biến đổi của yếu tố nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính kim loại",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính phi kim.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Bán kính nguyên tử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khối lượng nguyên tử.",
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
        "id": "hoa10_ck1_de07_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Liên kết đôi được tạo nên từ 2 liên kết σ.<br/>(b) Liên kết ba được tạo nên từ 2 liên kết σ và 1 liên kết π.<br/>(c) Liên kết đôi được tạo nên từ 1 liên kết σ và 1 liên kết π.<br/>(d) Liên kết ba được tạo nên từ 1 liên kết σ và 2 liên kết π.<br/>Số phát biểu đúng là",
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
        "displayNumber": 15
      },
      {
        "id": "hoa10_ck1_de07_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của nguyên tố X có bán kính rất lớn. Phát biểu nào sau đây về X là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Độ âm điện của X rất lớn và X là phi kim",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Độ âm điện của X rất nhỏ và X là phi kim.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Độ âm điện của X rất lớn và X là kim loại",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Độ âm điện của X rất nhỏ và X là kim loại.",
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
        "id": "hoa10_ck1_de07_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử nguyên tố X có phân lớp electron ngoài cùng là 3p<sup>1</sup>. Công thức oxide ứng với hóa trị cao nhất của X, hydroxide tương ứng và tính acid – base của chúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X<sub>2</sub>O<sub>3</sub>, X(OH)<sub>3</sub>, tính lưỡng tính",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "XO<sub>3</sub>, H<sub>2</sub>XO<sub>4</sub>, tính acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "XO<sub>2</sub>, H<sub>2</sub>XO<sub>3</sub>, tính acid",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "XO, X(OH)<sub>2</sub>, tính base.",
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
        "id": "hoa10_ck1_de07_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết đôi được hình thành dựa trên sự dùng chung của 3 cặp electron.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức Lewis biểu diễn tất cả các electron dùng chung và riêng của mỗi nguyên tử theo quy tắc Octet.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Liên kết cho nhận được biểu diễn bằng mũi tên (→) từ nguyên tử cho sang nguyên tử nhận.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hợp chất chứa liên kết cộng hóa trị không phân phân cực khí có hiệu độ âm điện  Dc  ≥ 1,7.",
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
        "id": "hoa10_ck1_de07_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tố X nằm ở chu kì 3, nhóm IIA của bảng tuần hoàn.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cấu hình electron của X là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử X có 2 phân lớp electron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X là nguyên tố kim loại.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở trạng thái cơ bản, nguyên tử X có 5 orbital chứa electron.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Có các phân lớp 1s, 2s, 2p và 3s.<br/>c. Đúng.<br/>d. Sai. Nguyên tử X có 6 orbital chứa electron.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de07_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Sulfur (<sub>1</sub><sub>6</sub>S) và chlorine (<sub>1</sub><sub>7</sub>Cl) thuộc chu kì 3 trong bảng tuần hoàn các nguyên tố hóa học.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo xu hướng biến đổi tính phi kim, S có tính phi kim mạnh hơn Cl.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số electron hóa trị của nguyên tử S, Cl lần lượt là 4 và 5.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính acid của sulfuric acid (H<sub>2</sub>SO<sub>4</sub>) yếu hơn tính acid của perchloric acid (HClO<sub>4</sub>).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi phản ứng với K điều kiện thích hợp, đều tạo ra hợp chất cộng hóa trị.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Tính phi kim của S yếu hơn Cl.<br/>b. Sai. Lần lượt là 6 và 7.<br/>c. Đúng.<br/>d. Sai. Hợp chất ion.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de07_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai khi nói về hợp chất sodium oxide (Na<sub>2</sub>O)? Cho số hiệu nguyên tử của Na, O lần lượt là 11 và 8.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử Na<sub>2</sub>O tạo bởi lực hút tĩnh điện giữa hai ion Na<sup>+</sup> và một ion O<sup>2-</sup>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có nhiệt độ nóng chảy cao do liên kết ion tương đối bền vững.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Là chất rắn trong điều kiện thường.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không tan trong nước, chỉ tan trong dung môi không phân cực như benzene, carbon tetrachloride,...",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Tan trong nước nhưng không tan trong dung môi không phân cực.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de07_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho bảng số liệu sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Chất</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nước (H<sub>2</sub>O)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ammonia (NH3)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Methane (CH4)</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Khối lượng mol (g/mol)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">18</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">17</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">16</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhiệt độ sôi (oC) ở</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">100,0</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">–33,5</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">–161,58</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Methane có nhiệt độ sôi thấp trong dãy chất trên do khối lượng mol phân tử nhỏ nhất.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử H<sub>2</sub>O tạo được nhiều liên kết hydrogen hơn so với phân tử NH<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Liên kết C – H trong phân tử CH<sub>4</sub> kém phân cực hơn liên kết N – H trong phân tử NH<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết O – H trong phân tử H<sub>2</sub>O phân cực mạnh hơn liên kết N – H trong phân tử NH<sub>3</sub>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai, NH<sub>3</sub> có liên kết hydrogen liên phân tử.<br/>b. Đúng. Do nguyên tử O còn 2 cặp e riêng, N còn 1 cặp e riêng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de07_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các ion sau: Ca<sup>2+</sup>, F<sup>–</sup> , Al<sup>3+</sup> và N<sup>3-</sup>. Có bao nhiêu ion có cấu hình electron của khí hiếm neon? Cho số hiệu nguyên tử của N, F, Al, Ca lần lượt là 7, 9, 13, 20.",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de07_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Almelec là hợp kim của aluminium (Al) với một lượng nhỏ magnesium (Mg) và silicon (Si). Almelec được sử dụng làm dây điện cao thế do nhẹ, dẫn điện tốt và bền. Bán kính nguyên tử của ba nguyên tố nhận một số ba giá trị sau: 143 pm, 118 pm, 160 pm. Cho số hiệu nguyên tử của Mg, Al, Si lần lượt là 12, 13, 14. Bán kính nguyên tử của nguyên tố aluminium là bao nhiêu pm?",
        "images": [],
        "correctAnswer": "143",
        "explanation": "Đáp án: 143.<br/>Bán kính nguyên tử của 3 nguyên tố tăng theo thứ tự : Si < Al  < Mg .<br/>Bán kính nguyên tử của nguyên tố aluminium 143 pm.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de07_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho mô hình tinh thể NaCl như hình dưới:<br/>Có bao nhiêu ion chloride (Cl<sup>–</sup>) bao quanh gần nhất với ion sodium (Na<sup>+</sup>)?",
        "images": [
          "/assets/hoa10/final/h10_ck1_de7_image5.png"
        ],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de07_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Trong phân tử HCOOH có x liên kết  và y liên kết . Tổng giá trị của (x + y) bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [
          "/assets/hoa10/final/h10_ck1_de7_image6.png"
        ],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de07_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Bảng dưới đây cho thấy cấu trúc điện tử (sự phân bố electron trên các lớp vỏ) của bốn nguyên tử X, Y, Z, T.<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nguyên tử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Sự phân bố electron trên các lớp vỏ</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">X</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2, 8, 1</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Y</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2, 8, 4</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Z</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2, 8, 7</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">T</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2, 8, 8</td></tr></table></div><br/>Có bao nhiêu cặp nguyên tố khi kết hợp với nhau tạo thành hợp chất chứa liên kết cộng hoá trị?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.<br/>X: Na, Y: Si, Z: Cl, T: Ne.<br/>Cặp Y và Z.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de07_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Ba nguyên tố X, Y, Z thuộc cùng một chu kì và có tổng số hiệu nguyên tử là 40. Cho biết, X, Y thuộc hai nhóm liên tiếp và X phản ứng mạnh với nước ở điều kiện thường, thu được dung dịch làm xanh giấy quỳ tím. Nguyên tố Z đứng vị trí thứ mấy trong chu kì đó tính theo chiều tăng dần điện tích hạt nhân nguyên tử?",
        "images": [],
        "correctAnswer": "7",
        "explanation": "Đáp án: 7.<br/>Ba nguyên tố X, Y, Z thuộc cùng một chu kì và có tổng số hiệu nguyên tử là 40 →  40p13,333== .<br/>X, Y thuộc 2 nhóm liên tiếp và X phản ứng mạnh với nước ở điều kiện thường, thu được dung dịch làm xanh giấy quỳ tím nên X là Na → Y là Mg .<br/>Ba nguyên tố X, Y, Z thuộc cùng một chu kì và có tổng số hiệu nguyên tử là 40 → Z có số hiệu nguyên tử là 40 – 11 –12  = 17   Z là Cl.<br/>Vậy X, Y, Z đều thuộc chu kì 3 và Cl đứng ở vị trí thứ 7 trong chu kì 3 .<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_ck1_de08",
    "code": "H10-CK1-08",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de08_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình dưới đây là mô phỏng của AO nào sau đây?",
        "images": [
          "/assets/hoa10/final/h10_ck1_de8_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "s",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "p.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "d",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "f.",
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
        "id": "hoa10_ck1_de08_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên lí hay quy tắc nào bị vi phạm trong cấu hình theo ô orbital được cho dưới đây?",
        "images": [
          "/assets/hoa10/final/h10_ck1_de8_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Quy tắc của Hund",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Không vi phạm nguyên lí, quy tắc nào.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên lí Pauli",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Quy tắc Klechkovski.",
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
        "id": "hoa10_ck1_de08_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết ion được tạo thành giữa hai nguyên tử bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "một hay nhiều cặp electron dùng chung.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "một hay nhiều cặp electron dùng chung nhưng chỉ do một nguyên tử đóng góp.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "lực hút tĩnh điện giữa các ion mang điện tích trái dấu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "một hay nhiều cặp electron dùng chung và cặp electron dùng chung bị lệch về phía nguyên tử có độ âm điện lớn hơn.",
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
        "id": "hoa10_ck1_de08_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo quy tắc octet thì công thức cấu tạo của phân tử SO<sub>2</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "O = S → O",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "O – S – O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "O – S → O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "O = S = O",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Theo quy tắc octet, trong SO₂, nguyên tử S tạo 1 liên kết đôi với 1 nguyên tử O và 1 liên kết phối trí với nguyên tử O còn lại (O = S → O), xung quanh S có đủ 8 electron. Phương án đúng là A.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_ck1_de08_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Lớp M không có phân lớp nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3s",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3p",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3d",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3f.",
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
        "id": "hoa10_ck1_de08_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho công thức hợp chất A như sau: HC ≡ C – CH = CH<sub>2</sub>. Số liên kết 𝛔 trong hợp chất A là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "5",
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
            "text": "7.",
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
        "id": "hoa10_ck1_de08_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo quy tắc octet, xu hướng chung của các nguyên tử nguyên tố nhóm IIA là nhường",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2 electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3 electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1 electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4 electron.",
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
        "id": "hoa10_ck1_de08_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho sơ đồ liên kết giữa các phân tử NH<sub>3</sub>:<br/>Trong sơ đồ trên, đường nét đứt ( …) đại diện cho",
        "images": [
          "/assets/hoa10/final/h10_ck1_de8_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "liên kết cộng hóa trị",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "liên kết cho nhận.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "liên kết hydrogen",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "liên kết ion.",
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
        "id": "hoa10_ck1_de08_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử nguyên tố nhóm IA nào sau đây có bán kính nhỏ nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Li (Z = 3)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na (Z = 11)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K (Z = 19)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cs (Z = 55).",
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
        "id": "hoa10_ck1_de08_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử X có 20 neutron, 19 proton, 19 electron. Ký hiệu nguyên tử X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2019X",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3919X",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3920X",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "5819X .",
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
        "id": "hoa10_ck1_de08_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn, theo chiều tăng dần của điện tích hạt nhân, phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong một chu kì, tính phi kim của các nguyên tố tăng dần.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong một chu kì, độ âm điện của các nguyên tố tăng dần.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong một nhóm A, tính kim loại của các nguyên tố tăng dần.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong một nhóm A, độ âm điện của các nguyên tố tăng dần.",
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
        "id": "hoa10_ck1_de08_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hai ion X<sup>+</sup> và Y<sup>–</sup> đều có cấu hình electron của khí hiếm Ar (Z = 18). Cho các phát biểu sau:<br/>(1) Số hạt mang điện của X nhiều hơn số hạt mang điện của Y là 4.<br/>(2) X, Y nằm ở hai chu kì liên tiếp nhau.<br/>(3) Độ âm điện của X nhỏ hơn độ âm điện của Y.<br/>(4) Hợp chất được tạo bởi hai ion X<sup>+</sup> và Y<sup>–</sup> là hợp chất ion.<br/>Số phát biểu đúng là",
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
            "text": "4",
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
            "text": "2.",
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
        "id": "hoa10_ck1_de08_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nguyên tử với giá trị độ âm điện tương ứng sau: Cl (3,16), O (3,44), N (3,04), P (2,19), H (2,2). Trong các phân tử: Cl<sub>2</sub>O, NO, PH<sub>3</sub>, NH<sub>3</sub>, phân tử có liên kết phân cực nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cl<sub>2</sub>O",
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
            "text": "PH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>3</sub>.",
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
        "id": "hoa10_ck1_de08_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử không mang điện vì",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "được tạo nên bởi các hạt không mang điện.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "có tổng số hạt proton bằng tổng số hạt electron.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có tổng số hạt electron bằng tổng số hạt neutron.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tổng số hạt neutron bằng tổng số hạt proton.",
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
        "id": "hoa10_ck1_de08_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây về tính chất của hợp chất cộng hóa trị là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có nhiệt độ nóng chảy và nhiệt độ sôi thấp.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tồn tại ở thể rắn, lỏng hoặc khí trong điều kiện thường.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tất cả các hợp chất cộng hóa trị đều dẫn điện tốt.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hợp chất cộng hóa trị phân cực tan tốt trong dung môi phân cực.",
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
        "id": "hoa10_ck1_de08_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cấu hình electron của nguyên tử nitơ là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup>. Để hình thành phân tử N<sub>2</sub>, mỗi nguyên tử N góp chung n electron. Giá trị của n là",
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
            "text": "4",
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
            "text": "2.",
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
        "id": "hoa10_ck1_de08_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử nguyên tố X có tổng số electron trên phân lớp p là 11. Hãy cho biết cấu hình electron lớp ngoài cùng của nguyên tử X và kiểu xen phủ các orbital trong nguyên tử để tạo ra phân tử X<sub>2</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3s<sup>2</sup>3p<sup>3</sup>, kiểu xen phủ trục p-p.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3s<sup>2</sup>3p<sup>5</sup>, kiểu xen phủ bên p-p.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3s<sup>1</sup>, kiểu xen phủ s-s.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3s<sup>2</sup>3p<sup>5</sup>, kiểu xen phủ s-p.",
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
        "id": "hoa10_ck1_de08_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử nguyên tố X có phân lớp electron ngoài cùng là 3p<sup>2</sup>. Công thức oxide cao nhất của X, hydroxide tương ứng và tính chất của các hợp chất lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X<sub>2</sub>O<sub>3</sub>, X(OH)<sub>3</sub>, tính lưỡng tính.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "XO<sub>3</sub>, H<sub>2</sub>XO<sub>4</sub>, tính acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "XO<sub>2</sub>, H<sub>2</sub>XO<sub>3</sub>, tính acid.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "XO, X(OH)<sub>2</sub>, tính base.",
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
        "id": "hoa10_ck1_de08_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Kim cương là một trong các dạng thù hình quý hiếm được biết đến nhiều nhất của carbon (C). Kim cượng có độ cứng rất cao và khả năng khúc xạ cực tốt làm cho nó có rất nhiều ứng dụng trong cả công nghiệp và ngành kim hoàn. Trong bảng tuần hoàn, nguyên tố carbon thuộc chu kì 2, nhóm IVA.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điện tích hạt nhân của nguyên tử carbon là –6.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lớp ngoài cùng của nguyên tử carbon có 4 electron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Carbon là nguyên tố phi kim.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở trạng thái cơ bản, nguyên tử carbon có 2 electron độc thân thuộc AO 2p.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Điện tích hạt nhân là +6.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de08_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Xét hai nguyên tố X và Y. Nguyên tố X có độ âm điện lớn hơn nguyên tố Y.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có thể kết luận X là nguyên tố phi kim, Y là nguyên tố kim loại.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nếu giữa X và Y hình thành liên kết thì cặp electron liên kết sẽ bị lệch về phía nguyên tử X.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu X và Y ở cùng một chu kì của bảng tuần hoàn, nguyên tố X có bán kính nguyên tử lớn hơn nguyên tố Y.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu X và Y ở cùng một chu kì của bảng tuần hoàn, hydroxide cao nhất của X sẽ có tính acid yếu hơn hydroxide cao nhất của Y.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Chưa thể kết luận chính xác được.<br/>b. Đúng.<br/>c. Sai. Bán kính của X nhỏ hơn Y.<br/>d. Sai. Hydroxide cao nhất của X sẽ có tính acid mạnh hơn hydroxide cao nhất của Y.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de08_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Trong đời sống, muối ăn (NaCl) và các gia vị, phụ gia (C<sub>5</sub>H<sub>8</sub>NO<sub>4</sub>Na: bột ngọt; C<sub>7</sub>H<sub>5</sub>O<sub>2</sub>Na: chất bảo quản thực phẩm) đều có chứa ion sodium. Hiệp hội Tim mạch Hòa Kỳ khuyến cáo các cá nhân nên hạn chế lượng sodium xuống dưới 2300 mg mỗi ngày vì nếu tiêu thụ nhiều hơn sẽ ảnh hưởng đến tim mạch và thận. Nếu trung bình mỗi ngày, một người dùng tổng cộng 5,0 gam muối ăn; 0,5 gam bột ngọt và 0,05 gam chất bảo quản.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Muối ăn (NaCl) là hợp chất ion, có nhiệt độ nóng chảy khá cao (khoảng 800<sup>o</sup>C).",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở trạng thái rắn, muối ăn có khả năng dẫn điện tốt.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khối lượng sodium trong cơ thể do muối ăn cung cấp là nhiều nhất trong 3 nguồn trên.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hàm lượng sodium trong cơ thể khi dùng 5,0 gam muối ăn; 0,5 gam bột ngọt và 0,05 gam chất bảo quản vượt quá hàm lượng cho phép.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Ở trạng thái rắn, các ion không di chuyển tự do được nên hợp chất ion không dẫn điện.<br/>c. Đúng.<br/>d. Sai. 584752NaClCHNONaCHONaM58,5;M169;M144===<br/>Na5.230,5.230,05.23m2,024g2024mg58,5169144Þ=++==<br/>Vì 2024 mg < 2300 mg ⇒ lượng sodium (Na) chưa vượt quá mức giới hạn cho phép.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de08_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Các đơn chất halogen tồn tại dạng phân tử X<sub>2</sub>, giữa các phân tử thường có tương tác với nhau. Cho bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Halogen</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">F<sub>2</sub></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cl<sub>2</sub></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Br<sub>2</sub></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">I<sub>2</sub></th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">F – F</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Cl – Cl</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Br – Br</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">I – I</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Năng lượng liên kết (kJ.mol-1) ở 25oC và 1 bar</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">159</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">243</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">193</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">151</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhiệt độ sôi (oC)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-188,1</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-34,1</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">59,2</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">185,5</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Nhiệt độ nóng chảy (oC)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-219,6</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-101,0</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-7,3</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">113,6</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tương tác giữa các phân tử X<sub>2</sub>là tương tác van der Waals.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết Cl – Cl bền nhất trong khi liên kết I – I kém bền nhất trong các đơn chất halogen.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhiệt độ sôi và nhiệt độ nóng chảy của I<sub>2</sub> lớn nhất do năng lượng liên kết I – I nhỏ nhất.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết giữa các nguyên tử trong phân tử X<sub>2</sub> là liên kết cộng hóa trị không phân cực.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Do tương tác van der Waals lớn nhất.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de08_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu nguyên tố hóa học trong bảng tuần hoàn thuộc chu kì 4?",
        "images": [],
        "correctAnswer": "18",
        "explanation": "Đáp án: 18.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de08_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Trong các hợp chất sau: CaO, Ba(NO<sub>3</sub>)<sub>2</sub>, Na<sub>2</sub>O, KF, K<sub>2</sub>SO<sub>4</sub>, NH<sub>4</sub>Cl, số hợp chất chứa ion đa nguyên tử là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de08_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Oxygen có ba đồng vị với tỉ lệ % số nguyên tử tương ứng là <sup>16</sup>O (99,757%), <sup>17</sup>O (0,038%), <sup>18</sup>O (0,205%). Nguyên tử khối trung bình của oxygen là bao nhiêu? (Làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "16,0",
        "explanation": "Đáp án: 16,0.<br/>16.99,757  17.0,038  18.0,205AO   16,0100++==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de08_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất: NH<sub>4</sub>Cl (1), NaF (2), CHF<sub>3</sub> (3), KNO<sub>3</sub> (4), HClO (5). Trong các chất trên, có bao nhiêu chất mà phân tử vừa có liên kết ion vừa có liên kết cộng hóa trị?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de08_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho số hiệu của nguyên tố S và O lần lượt là 16 và 8. Biết rằng hóa trị của nguyên tố S trong phân tử H<sub>2</sub>SO<sub>4</sub> bằng tổng số liên kết σ và liên kết π mà nguyên tử S tạo thành khi liên kết với các nguyên tử xung quanh. Trong phân tử H<sub>2</sub>SO<sub>4</sub>, nguyên tử S không liên kết với nguyên tử H mà liên kết với 4 nguyên tử O. Từ đó viết được công thức Lewis phù hợp của phân tử H<sub>2</sub>SO<sub>4</sub> với hóa trị của S là n. Giá trị của n là bao nhiêu?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.",
        "explanationImages": [
          "/assets/hoa10/final/h10_ck1_de8_image14.png"
        ],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de08_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử X có cấu hình electron ở lớp ngoài cùng là ns<sup>2</sup>np<sup>3</sup>. Trong công thức oxide cao nhất của X, nguyên tố oxygen chiếm 56,34% về khối lượng. Hòa tan hết 0,1 mol oxide cao nhất của X vào 83,8 gam nước, thu được dung dịch Y. Nồng độ phần trăm chất tan có trong dung dịch Y là bao nhiêu phần trăm? (Cho nguyên tử khối của H = 1, O = 16)",
        "images": [],
        "correctAnswer": "20",
        "explanation": "Đáp án: 20.<br/>Công thức oxide cao nhất của X là X<sub>2</sub>O<sub>5</sub><br/>Từ  X16.5%O.10056,34M.216.5==+   M<sub>X</sub> = 31.<br/>Công thức oxide cao nhất của X là P<sub>2</sub>O<sub>5</sub><br/>P<sub>2</sub>O<sub>5</sub>  + 3H<sub>2</sub>O  →  2H<sub>3</sub>PO<sub>4</sub><br/>0,1                       0,2 mol<br/>34HPOm  =  0,2.98 = 19,6 gam.<br/>3419,6C%(HPO).10020%0,1.14283,8==+<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_ck1_de09",
    "code": "H10-CK1-09",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de09_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử nào dưới đây chứa liên kết cộng hóa trị không phân cực?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "O₂.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaCl.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "AlCl₃.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na₂O.",
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
        "id": "hoa10_ck1_de09_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân lớp nào sau đây đã bão hòa electron?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "p<sup>3</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "s<sup>1</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "d<sup>6</sup>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "f<sup>14</sup>.",
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
        "id": "hoa10_ck1_de09_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ion M³⁺ có cấu tạo lớp vỏ electron ngoài cùng là 2s²2p⁶. Vị trí của nó trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ô 8, chu kì 2, nhóm VIIIA.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ô 7, chu kì 2, nhóm VA.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ô 11, chu kì 3, nhóm IIIA.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ô 13, chu kì 3, nhóm IIIA.",
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
        "id": "hoa10_ck1_de09_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn, các nguyên tố được sắp xếp theo chiều",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tăng dần của nguyên tử khối",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "giảm dần của số neutron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tăng dần của số khối",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tăng dần của điện tích hạt nhân.",
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
        "id": "hoa10_ck1_de09_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nguyên tố thuộc chu kì 3 theo thứ tự tăng dần số hiệu nguyên tử: Si, P, S và Cl. Hydroxide có tính acid mạnh nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>SO<sub>4</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HClO<sub>4</sub>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>3</sub>PO<sub>4</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>SiO<sub>3</sub>.",
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
        "id": "hoa10_ck1_de09_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất ion thường có tính chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ nóng chảy thấp.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ít tan trong nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch không dẫn điện",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Rắn chắc nhưng khá giòn.",
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
        "id": "hoa10_ck1_de09_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất nào sau đây chỉ chứa ion đơn nguyên tử?",
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
            "text": "NH<sub>4</sub>Cl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "BaCl<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Zn(NO<sub>3</sub>)<sub>2</sub>.",
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
        "id": "hoa10_ck1_de09_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có liên kết ba trong phân tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "O<sub>2</sub>",
            "isCorrect": false
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
            "text": "N<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>3</sub>.",
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
        "id": "hoa10_ck1_de09_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phân tử ethanol (CH<sub>3</sub>CH<sub>2</sub>OH), số nguyên tử hydrogen tham gia vào liên kết hydrogen là",
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
            "text": "6",
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
        "id": "hoa10_ck1_de09_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn, nguyên tố X ở chu kì 2, nhóm IVA. Phát biểu nào sau đây đúng về X?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tử X có 8 proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lớp ngoài cùng có 2 electron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Là nguyên tố phi kim",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Oxide cao nhất có tính base.",
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
        "id": "hoa10_ck1_de09_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn, nguyên tố X ở nhóm IA. Công thức oxide ứng với hóa trị cao nhất của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "XO.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "XO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X<sub>2</sub>O<sub>3</sub>.",
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
        "id": "hoa10_ck1_de09_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau về liên kết hóa học:<br/>(a) Liên kết hydrogen bền hơn liên kết cộng hóa trị.<br/>(b) Các nguyên tử sau khi hình thành liên kết thì bền hơn trước khi hình thành liên kết.<br/>(c) Năng lượng liên kết càng cao thì liên kết đó càng khó phân hủy.<br/>(d) Sự xen phủ song song giữa hai orbital vuông góc với trục là liên kết .<br/>Số phát biểu đúng là",
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
        "id": "hoa10_ck1_de09_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để đạt cấu hình bền của khí hiếm tương ứng, nguyên tử của nguyên tố florine (Z = 9) cần phải",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhận thêm 2 electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhường 2 electron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhận thêm 1 electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhường 1 electron.",
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
        "id": "hoa10_ck1_de09_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết cho nhận là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cặp e chung do một nguyên tử đóng góp.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nguyên tử này nhường hẳn electron cho nguyên tử kia.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "góp chung một electron với nguyên tử khác.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dùng chung một cặp electron.",
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
        "id": "hoa10_ck1_de09_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khối lượng của proton lớn hơn rất nhiều so với khối lượng của neutron.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Proton và electron là các hạt mang điện, neutron là hạt không mang điện.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron tạo nên lớp vỏ nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số lượng proton và electron trong nguyên tử là bằng nhau.",
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
        "id": "hoa10_ck1_de09_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là đúng khi nói về mô hình Rutherford – Bohr?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Electron quay xung quanh hạt nhân theo những quỹ đạo giống như các hành tinh quay xung quanh Mặt Trời.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Electron không chuyển động theo quỹ đạo cố định mà trong cả khu vực không gian xung quanh hạt nhân.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron không bị rơi vào hạt nhân do chịu tác dụng của lực đẩy tĩnh điện với hạt nhân.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Electron ở càng xa hạt nhân thì có năng lượng càng thấp.",
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
        "id": "hoa10_ck1_de09_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chọn đáp án đúng nhất. Vì sao HF có nhiệt độ sôi cao hơn hẳn so với HCl, HBr, HI?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HF có phân tử khối lớn nhất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HF có liên kết hydrogen.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HF có tương tác van der Waals lớn nhất",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HF là hợp chất phân cực nhất.",
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
        "id": "hoa10_ck1_de09_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong một nhóm A (trừ nhóm VIIIA), theo chiều tăng dần của điện tích hạt nhân, nhìn chung các nguyên tố có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tính kim loại tăng dần, độ âm điện tăng dần.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tính phi kim giảm dần, bán kính nguyên tử tăng dần.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "độ âm điện giảm dần, tính phi kim tăng dần.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tính kim loại tăng dần, bán kính nguyên tử giảm dần.",
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
        "id": "hoa10_ck1_de09_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bất kì phân tử nào có chứa nguyên tử hydrogen cũng có thể tạo liên kết hydrogen với phân tử cùng loại.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết hydrogen là liên kết hình thành do sự góp chung cặp electron hóa trị giữa nguyên tử hydrogen và nguyên tử có độ âm điện lớn.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Liên kết hydrogen là loại liên kết yếu nhất giữa các phân tử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ảnh hưởng của liên kết hydrogen tới nhiệt độ sôi và nhiệt độ nóng chảy của chất là mạnh hơn ảnh hưởng của tương tác van der Waals.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. HCl không tạo được liên kết hydrogen với nhau.<br/>b. Sai. Liên kết hydrogen là một loại liên kết yếu được hình thành giữa nguyên tử H (đã liên kết với một nguyên tử có độ âm điện lớn) với một nguyên tử khác (có độ âm điện lớn) còn cặp electron riêng.<br/>c. Sai. Liên kết hydrogen chưa phải là loại liên kết yếu nhất giữa các phân tử.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de09_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho sơ đồ mô tả sự hình thành phân tử potassium chloride (KCl) từ nguyên tử các nguyên tố từ nguyên tử của các nguyên tố potassium (<sub>19</sub>K) và chlorine (<sub>17</sub>Cl):",
        "images": [
          "/assets/hoa10/final/h10_ck1_de9_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tử K nhường 1 electron ở lớp ngoài cùng tạo thành cation K<sup>+</sup>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử Cl nhận 1 electron ở lớp ngoài cùng tạo thành anion Cl<sup>–</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hai ion K<sup>+</sup> và Cl<sup>-</sup> được tạo thành đều có cấu hình electron của khí hiếm argon (<sub>18</sub>Ar).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết trong phân tử KCl là liên kết ion.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de09_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Dưới đây là biểu đồ tương tác của hai nguyên tử hydrogen ở thể khí so với khoảng cách hạt nhân giữa chúng:",
        "images": [
          "/assets/hoa10/final/h10_ck1_de9_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi hình thành liên kết thì độ dài liên kết đơn giữa hai nguyên tử hydrogen là 74 pm.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để phá vỡ liên kết của một phân tử hydrogen cần một năng lượng tối thiểu là 7,24.10<sup>–19</sup> J (cho N<sub>A</sub> = 6,022.10<sup>23</sup>).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hai nguyên tử hydrogen càng xa nhau thì càng thuận lợi về mặt năng lượng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tử hydrogen là một phân tử phân cực, cặp electron chung nằm giữa hai nguyên tử.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai.  1923432.10006,022.107,174.10= .<br/>c. Sai, Càng gần nhau càng thuận lợi về mặt năng lượng.<br/>d. Sai. Phân tử H<sub>2</sub> là phân tử không phân cực.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de09_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tử X có tổng số electron thuộc phân lớp p là 6, nguyên tử Y có 4 lớp electron và có 2 electron ở lớp ngoài cùng, electron cuối cùng điền vào phân lớp s. Biết rằng X và Y thuộc hai nhóm liên tiếp.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết trong phân tử oxide cao nhất của X là liên kết cộng hóa trị không phân cực.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hydroxide của X khi tan trong nước tạo dung dịch có tính base mạnh.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở trạng thái cơ bản, nguyên tử X có 3 lớp electron và có 2 electron độc thân.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Y là kim loại mạnh, còn X là phi kim mạnh.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Y có 4 lớp electron và có 2 electron ở lớp ngoài cùng, electron cuối cùng điền vào phân lớp s<br/>Cấu hình electron của Y là: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup> (Ca)<br/>X có tổng số electron thuộc phân lớp p là 6, X và Y thuộc hai nhóm liên tiếp<br/>Cấu hình electron của Y là: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup> (Na)<br/>a. Sai. Liên kết trong Na<sub>2</sub>O là liên kết ion.<br/>b. Đúng. Dung dịch NaOH là base mạnh.<br/>c. Sai. Ở trạng thái cơ bản, nguyên tử X có 3 lớp electron và có 1 electron độc thân.<br/>d. Sai. X và Y đều là kim loại mạnh.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de09_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Xét bốn nguyên tố với cấu hình electron hóa trị tương ứng là: (1) [Ne]3s²3p¹, (2) [Ne]3s²3p³, (3) [Ar]3d³4s² và (4) [Ar]3d¹⁰4s²4p³. Trong bốn nguyên tố này, nguyên tố nào thuộc nhóm B?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de09_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phân tử: NaCl, CO<sub>2</sub>, Cl<sub>2</sub>, H<sub>2</sub>O và C<sub>2</sub>H<sub>2</sub>. Có bao nhiêu phân tử không phân cực?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de09_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho biết tổng số electron trong anion 23AB- là 42. Trong các hạt nhân A cũng như B có số proton bằng số neutron. Tổng số khối của A và B là bao nhiêu?",
        "images": [],
        "correctAnswer": "48",
        "explanation": "Đáp án: 48.<br/>Coi x, y lần lượt là số proton (electron) tương ứng của nguyên tử A và B<br/>Ta có x + 3y = 42 – 2 = 40  y < 403 =13,33<br/>B thuộc chu kì 2 và là một phi kim (tạo anion) nên B chỉ có thể là O, F hoặc N<br/>*Nếu B là F thì y = 9, trong 23AF-  x = 40 - 3.9 = 13  A là Al (không hợp lí vì AlF<sub>3</sub> là phân tử)<br/>*Nếu B là O thì y = 8, trong  23AO-  x = 40 - 3.8 = 16  A là S (sulfur )  anion là  23SO-<br/>*Nếu B là N thì y = N, trong  23AN-  x = 40 - 3.7 = 19  A là K (không hợp lí KN<sub>3</sub><sup>2-</sup> không tồn tại).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de09_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu tính chất hoặc đại lượng vật lí nào sau đây, biến thiên tuần hoàn theo chiều tăng dần của điện tích hạt nhân nguyên tử? (1) bán kính nguyên tử; (2) tổng số electron; (3) tính kim loại, tính phi kim; (4) số electron lớp ngoài cùng; (5) độ âm điện; (6) nguyên tử khối; (7) tính acid, base của oxide và hydroxide; (8) hóa trị của các nguyên tố.",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de09_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Tổng số cặp electron dùng chung có trong phân tử CH<sub>2</sub>O là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [
          "/assets/hoa10/final/h10_ck1_de9_image12.png"
        ],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de09_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "X là hợp chất oxide có hóa trị cao nhất của nguyên tố R, là hợp chất trung gian điều chế ra acid quan trọng nhất trong ngành công nghiệp hóa chất. Y là hợp chất khí với hydrogen của nguyên tố R, có vai trò quan trọng trong hóa học phân tích trong phân tích vô cơ định tính các ion kim loại. Tỉ khối hơi của X so với Y là 2,353. Hóa trị của R trong X gấp 3 lần hóa trị của R trong Y. Xác định nguyên tử khối của R (Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "32",
        "explanation": "Đáp án: 32.<br/>3XXX2YXX:ROMM3.162,353M32(S)Y:RHMM2ì+Þ==Þ=í+î<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa10_ck1_de10",
    "code": "H10-CK1-10",
    "title": "Đề Thi Cuối Kì 1 Hóa 10 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 10",
    "badge": "Cuối Kì 1",
    "grade": "10",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_ck1_de10_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tố hoá học thuộc cùng một nhóm A có cùng số lượng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "electron hoá trị.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "proton và neutron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "proton và electron.",
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
        "id": "hoa10_ck1_de10_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vì sao các nguyên tử Ne (Z=10) và Ar (Z=18) hiếm khi tạo thành hợp chất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Vì chúng có lớp electron ngoài cùng đã bão hòa.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Vì chúng có phân lớp electron bên trong đã được điền đầy đủ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Vì bán kính nguyên tử của chúng rất nhỏ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Vì mỗi nguyên tử đã có đủ 8 electron.",
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
        "id": "hoa10_ck1_de10_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "6027Co được sử dụng nhiều trong điều trị ung thư. Phát biểu nào sau đây là đúng khi nói về nguyên tử  6027Co ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tử có 27 hạt neutron.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hạt nhân nguyên tử có điện tích là 27 Coulomb.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số hạt neutron của nguyên tử Co này khác với số hạt neutron của các nguyên tử đồng vị khác của Co.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử có 33 electron.",
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
        "id": "hoa10_ck1_de10_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong số bốn nguyên tố với các cấu hình electron nguyên tử tương ứng sau đây, cấu hình nào ứng với nguyên tố có độ âm điện lớn nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[He]2s<sup>2</sup>2p<sup>4</sup>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[He] 2s<sup>2</sup>2p<sup>5</sup>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Ne] 3s<sup>1</sup>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Ne]3s²3p<sup>5</sup>.",
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
        "id": "hoa10_ck1_de10_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử hoặc ion nào sau đây có chứa số lượng proton, neutron và electron khác nhau?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "199F-",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2311Na+",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3115P",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3216S .",
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
        "id": "hoa10_ck1_de10_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Copper (đồng) được sử dụng làm dây dẫn điện, huy chương, trống đồng… Nguyên tử khối trung bình của copper bằng 63,546. Copper tồn tại trong tự nhiên dưới hai dạng đồng vị  6329Cu và   6529Cu . Phần trăm số nguyên tử của đồng vị  6329Cu  tồn tại trong tự nhiên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "32,3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "67,6",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "72,7",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "27,3.",
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
        "id": "hoa10_ck1_de10_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "M là nguyên tố chu kì 4, có khả năng phản ứng mạnh với nước tạo thành dung dịch kiềm MOH. Cấu hình electron của M là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Ar]4s¹",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Ne]4s²4p<sup>5</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Ne]3s<sup>1</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Ne]3s²3p<sup>1</sup>.",
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
        "id": "hoa10_ck1_de10_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có bao nhiêu electron thuộc phân lớp p trong cấu hình electron của nguyên tử Al (Z = 13)?",
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
            "text": "6",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "7.",
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
        "id": "hoa10_ck1_de10_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự xen phủ giữa các AO nào sau đây theo phương nằm ngang có thể tạo thành liên kết .",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": ".",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": ".",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": ".",
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
        "id": "hoa10_ck1_de10_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron nguyên từ của sulfur và selenium lần lượt là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup> và 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>10</sup>4s<sup>2</sup>4p<sup>4</sup>. Phát biểu nào sau đây về hai nguyên tố này là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "S và Se nằm cùng một nhóm VIB.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số electron lớp ngoài cùng của Se nhiều hơn S.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "S và Se nằm ở hai chu kì kế tiếp nhau.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "S là nguyên tố nhóm A, Se là nguyên tố nhóm B.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "S có 3 lớp electron (chu kì 3), Se có 4 lớp electron (chu kì 4), cả hai đều có 6 electron lớp ngoài cùng (nhóm VIA). Vậy S và Se nằm ở 2 chu kì kế tiếp nhau. Phương án đúng là C.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_ck1_de10_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử nào sau đây chứa nguyên tử không tuân theo quy tắc octet? Biết (H (Z = 1), B (Z = 5), N (Z = 7), O (Z = 8).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "BH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CO<sub>2</sub>",
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
            "text": "H<sub>2</sub>O.",
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
        "id": "hoa10_ck1_de10_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các cặp nguyên tố sau, cặp nguyên tố nào có nhiều khả năng tạo thành liên kết ion nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen và oxygen",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Carbon và hydrogen.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sulfur và oxygen",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Potassium và oxygen.",
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
        "id": "hoa10_ck1_de10_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử NH<sub>3</sub> có công thức Lewis như Hình 3.3<br/>Số lượng cặp electron dùng chung và cặp electron hóa trị riêng của nguyên tử N là",
        "images": [
          "/assets/hoa10/final/h10_ck1_de10_image14.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 và 3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3 và 1.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2 và 2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3 và 2.",
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
        "id": "hoa10_ck1_de10_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình 3.2 mô tả cấu trúc của các chất rắn X và Y, các khối cầu trắng và đen thể hiện các nguyên tố khác nhau.<br/>Loại liên kết hóa học trong X và Y tương ứng là",
        "images": [
          "/assets/hoa10/final/h10_ck1_de10_image15.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "liên kết ion và liên kết ion",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "liên kết cộng hóa trị và liên kết cộng hóa trị.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "liên kết ion và liên kết cộng hóa trị",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "liên kết cộng hóa trị và liên kết ion.",
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
        "id": "hoa10_ck1_de10_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có chứa liên kết cho – nhận?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "I<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>O<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "O<sub>3</sub>",
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
        "displayNumber": 15
      },
      {
        "id": "hoa10_ck1_de10_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong một chu kì, theo chiều tăng của điện tích hạt nhân nguyên tử,",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tính base của oxide và hydroxide tương ứng tăng dần.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "độ âm điện giảm dần.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tính phi kim giảm dần.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tính acid của oxide và hydroxide tương ứng tăng dần.",
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
        "id": "hoa10_ck1_de10_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điều nào sau đây đúng khi nói về liên kết hydrogen liên phân tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lực hút tĩnh điện giữa nguyên tử H (thường trong các liên kết H – F; H – N , H – O ở phân tử này) với một trong các nguyên tử có độ âm điện mạnh (thường là N, O, F) ở một phân tử khác.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Là lực hút giữa các phân tử khác nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Là lực hút tĩnh điện giữa các ion trái dấu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Là lực hút giữa các nguyên tử trong một hợp chất cộng hóa trị.",
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
        "id": "hoa10_ck1_de10_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ethanol (C<sub>2</sub>H<sub>5</sub>OH) và dimethylether (CH<sub>3</sub>-O-CH<sub>3</sub>) có cùng công thức phân tử là C<sub>2</sub>H<sub>6</sub>O. Phát biểu nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ethanol có nhiệt độ sôi cao hơn dimethylether.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dimethylether có nhiệt độ sôi cao hơn athanol.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hai chất có nhiệt độ sôi bằng nhau.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hai chất có nhiệt độ sôi không xác định.",
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
        "id": "hoa10_ck1_de10_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho hai nguyên tố florine (<sub>9</sub>F) và chlorine (<sub>17</sub>Cl).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "F và Cl là các nguyên tố thuộc cùng một nhóm A.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "F và Cl nằm ở hai chu kì kế tiếp nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Công thức oxide cao nhất của F và Cl đều có dạng X<sub>2</sub>O<sub>7</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Độ âm điện của F cao hơn Cl.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Trong bảng tuần hoàn, F nằm ở chu kì 2 nhóm VIIA, Cl nằm ở chu kì 3 nhóm VIIA.<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Công thức oxide cao nhất của F là F<sub>2</sub>O.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa10_ck1_de10_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Chromium (Cr) và các hợp chất của nó được sử dụng nhiều trong các ngành công nghiệp. Nguyên tố Cr nằm ở ô thứ 24 của bảng tuần hoàn, là nguyên tố thuộc nhóm VIB.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cr là nguyên tố kim loại chuyển tiếp thuộc chu kì 4.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số electron lớp vỏ ngoài cùng của Cr là 6.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cr có hai phân lớp electron bán bão hoà.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử Cr có 4 lớp electron đã được điền đầy đủ.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Cấu hình của Cr là [Ar] 3d<sup>5</sup>4s<sup>1</sup><br/>a. Đúng.<br/>b. Sai. Lớp vỏ ngoài cùng là lớp 4 nên có 1e<br/>c. Đúng. Là 3d và 4s.<br/>d. Sai. Phân lớp 3d chưa điền đủ.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa10_ck1_de10_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Độ âm điện của O và H tương ứng là 3,44 và 2,2.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết H-O là liên kết cộng hóa trị không phân cực.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cặp electron dùng chung trong liên kết H-O lệch về phía nguyên tử O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phân tử H<sub>2</sub>O có 2 liên kết sigma () và 1 liên kết pi (π).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Một phân tử nước (H<sub>2</sub>O) có thể tạo liên kết hydrogen tối đa với 2 phân tử nước khác.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Cộng hóa trị phân cực.<br/>b. Đúng.<br/>c. Sai. Có 2 liên kết sigma.<br/>d. Sai. Một phân tử nước (H<sub>2</sub>O) có thể tạo liên kết hydrogen tối đa với 4 phân tử nước khác.",
        "explanationImages": [
          "/assets/hoa10/final/h10_ck1_de10_image16.png"
        ],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa10_ck1_de10_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Hợp chất X có nhiều trong thành phần của nước biển, là nguyên liệu quan trọng trong cuộc sống hang ngày. Hợp chất X được tạo ra từ nguyên tố Y có 11 electron và nguyên tố Z có 11 electron ở phân lớp p.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức hoá học của hợp chất X tạo bởi Y và Z là Y<sub>2</sub>Z.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hợp chất tạo bởi Y và Z có tính dẫn điện khi nóng chảy hoặc tan vào nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong thực tế cuộc sống, hợp chất X được dùng để bảo quản thực phẩm.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho 0,1 mol X trong dung dịch tác dụng với dung dịch AgNO<sub>3</sub> dư thu được 12,35 gam kết tủa. Cho nguyên tử khối của Ag = 108; Z = 35,5.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. S. Y là Na, Z là Cl nên hợp chất tạo ra là YZ.<br/>b. Đ. vì hợp chất tạo ra là hợp chất ion NaCl nên dẫn điện khi nóng chảy hoặc dung dịch.<br/>c. Đ.<br/>d. S. AgNO<sub>3</sub> + NaCl  AgCl + NaNO<sub>3</sub><br/>Khối lượng kết tủa AgCl = 0,1.143,5 = 14,35g.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa10_ck1_de10_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Trong nguyên tử, khối lượng một hạt electron và một hạt proton lần lượt là 9,11.10<sup>-28</sup> gam và 1,673.10<sup>-24</sup> gam. Khối lượng của một hạt proton gấp bao nhiêu lần khối lượng một hạt electron (Làm tròn kết quả đến hàng đơn vị)?",
        "images": [],
        "correctAnswer": "1836",
        "explanation": "Đáp án: 1836.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa10_ck1_de10_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Độ âm điện của một số nguyên tố được cho trong bảng:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Na</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ba</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cl</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">K</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">0,93</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">0,89</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3,16</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2,2</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">3,44</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">0,82</td></tr></table></div><br/>Có bao nhiêu hợp chất có chứa liên kết cộng hóa trị trong dãy các chất sau: HClO<sub>4</sub>, BaO, NaCl, C<sub>2</sub>H<sub>4</sub> và KOH?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa10_ck1_de10_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Carbon dioxide (CO<sub>2</sub>) được coi là tác nhân chính gây ra hiệu ứng nhà kính. Phân tử CO<sub>2</sub> rất bền, nguyên tử C liên kết với nguyên tử O bằng một liên kết đôi. Hãy cho biết số electron mà nguyên tử C đã đóng góp để tạo liên kết cộng hóa trị?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>O = C = O",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa10_ck1_de10_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "X là một nguyên tố chu kì 3, nguyên tử có 5 electron lớp ngoài cùng. Tổng số nguyên tử có trong một phân tử hydroxide cao nhất của X là bao nhiêu?",
        "images": [],
        "correctAnswer": "8",
        "explanation": "Đáp án: 8.<br/>X là P, công thức hydroxide cao nhất là H<sub>3</sub>PO<sub>4</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa10_ck1_de10_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tố oxygen (Z = 8) và nguyên tố phosphorus (Z = 15). Số electron có trong anion PO<sub>4</sub><sup>3-</sup>là bao nhiêu?",
        "images": [],
        "correctAnswer": "50",
        "explanation": "Đáp án: 50.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa10_ck1_de10_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Hydrogen sulfide (H<sub>2</sub>S) là một chất khí không màu, mùi trứng thối, độc. Theo tài liệu của Cơ quan Quản lí an toàn và sức khoẻ nghề nghiệp Hoa Kì, nồng độ H<sub>2</sub>S khoảng 100 ppm gây kích thích màng phổi. Nồng độ khoảng 400 – 700 ppm, H<sub>2</sub>S gây nguy hiểm đến tính mạng chỉ trong 30 phút. Nồng độ trên 800 ppm gây mất ý thức và làm tử vong ngay lập tức. Một gian phòng trống (25 °C; 1 bar) có kích thước 3 m x 4 m x 6m bị nhiễm 10 gam khí H<sub>2</sub>S. Tính nồng độ ppm của H<sub>2</sub>S trong gian phòng trên. Cho biết 1 mol khí ở 25 °C và 1 bar có thể tích 24,79 L; nồng độ ppm (parts per million – thành phần phần triệu). (Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "101",
        "explanation": "Đáp án: 101.<br/>Thể tích không khí = thể tích gian phòng = 3 x 4 x 6 = 72 m<sup>3</sup> = 72 000 L.<br/>Thể tích của 10 gam H<sub>2</sub>S = 24,79.107,3L34=<br/>Trong 72 000 L không khí có 7,3 L H<sub>2</sub>S ⇒ trong 1 000 000 L không khí có  21000000.7,3101,38LHS72000=<br/>------------------------- HẾT -------------------------<br/>- Thí sinh không sử dụng tài liệu.<br/>- Giám thị không giải thích gì thêm.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  }
];

export function getFinalExamById(id: string): Chuong1Exam | undefined {
  return HOA10_FINAL_EXAMS.find(e => e.id === id || e.code === id);
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
