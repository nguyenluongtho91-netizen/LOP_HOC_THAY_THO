// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI GIỮA HỌC KÌ 1 HÓA HỌC 10 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi Giữa Học Kì 1 Hóa Học Lớp 10 Chuẩn Cấu Trúc 2025
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

export const HOA10_MIDTERM_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa10_gk1_de01",
    "code": "H10-GK1-01",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de01_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đối tượng nghiên cứu của hóa học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nghiên cứu về vật chất, năng lượng và sự vận động của chúng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "thế giới sinh vật gần gũi với đời sống hằng ngày của học sinh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chất và sự biến đổi của chất",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nghệ thuật ngôn từ",
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
        "id": "hoa10_gk1_de01_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hạt mang điện trong nguyên tử",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chỉ có proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "là proton và neutron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "là proton và electron",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "là electron và neutron",
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
        "id": "hoa10_gk1_de01_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân lớp nào dưới đây chưa bão hòa?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "s<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "f<sup>14</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "p<sup>6</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "d<sup>8</sup>",
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
        "id": "hoa10_gk1_de01_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số hiệu nguyên tử cho biết thông tin nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số proton",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số neutron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số khối",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử khối",
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
        "id": "hoa10_gk1_de01_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tố được sắp xếp trong bảng tuần hoàn theo nguyên tắc nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo chiều tăng dần của nguyên tử khối",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các nguyên tố có cùng số lớp electron được xếp vào một nhóm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Theo chiều tăng dần của điện tích hạt nhân",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các nguyên tố có cùng số electron hóa trị được xếp vào một chu kì",
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
        "id": "hoa10_gk1_de01_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhóm B của bảng tuần hoàn gồm các nguyên tố",
        "images": [],
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
            "text": "s và p",
            "isCorrect": false
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
            "text": "d và f",
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
        "id": "hoa10_gk1_de01_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Electron có khối lượng xấp xỉ 0,00055 amu",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hạt tạo thành tia âm cực là electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử có cấu trúc rỗng, gồm lớp vỏ và hạt nhân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khối lượng nguyên tử hầu như tập trung ở lớp vỏ nguyên tử",
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
        "id": "hoa10_gk1_de01_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho hình vẽ mô phỏng các nguyên tử với số liệu như sau:<br/>Nhận xét nào sau đây không đúng?",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de1_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 và 2 là các đồng vị của cùng một nguyên tố hóa học",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1 và 3 là các đồng vị của cùng một nguyên tố hóa học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1 và 2 là nguyên tử của hai nguyên tố hóa học khác nhau",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 và 3 có cùng số proton trong hạt nhân",
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
        "id": "hoa10_gk1_de01_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron nguyên tử nào sau đây là của nguyên tố khí hiếm?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup>",
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
        "id": "hoa10_gk1_de01_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số thứ tự của chu kì được xác định bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số lớp electron",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số electron hóa trị",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số electron lớp ngoài cùng",
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
        "id": "hoa10_gk1_de01_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số nguyên tố thuộc chu kì 3 của bảng tuần hoàn là",
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
            "text": "8",
            "isCorrect": true
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
            "text": "32",
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
        "id": "hoa10_gk1_de01_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron nguyên tử của oxygen là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>.Vị trí của oxygen trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 2, nhóm VIA",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 3, nhóm VIA",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 2, nhóm IVA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 3, nhóm IVA",
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
        "id": "hoa10_gk1_de01_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố Mg (Z = 12) có số electron hóa trị là",
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
            "text": "2",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1",
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
        "id": "hoa10_gk1_de01_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử X có 3 lớp electron và có 7 electron lớp ngoài cùng. Số đơn vị điện tích hạt nhân của X là",
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
            "text": "17",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "15",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "14",
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
        "id": "hoa10_gk1_de01_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lớp N có chứa tối đa 32 electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Những electron ở gần hạt nhân có mức năng lượng cao nhất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron ở orbital 3p có mức năng lượng thấp hơn electron ở orbital 3s",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các electron trong cùng một lớp có mức năng lượng bằng nhau",
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
        "id": "hoa10_gk1_de01_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nguyên tố Y<sub>1</sub>, Y<sub>2</sub>, Y<sub>3</sub>, Y<sub>4</sub> lần lượt có cấu hình electron là: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>, 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup>,1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>, 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>. Các nguyên tố cùng một chu kì là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Y<sub>1</sub> và Y<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Y<sub>2</sub> và Y<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Y<sub>1</sub> và Y<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Y<sub>2</sub> và Y<sub>3</sub>",
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
        "id": "hoa10_gk1_de01_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ion XY<sub>2</sub><sup>-</sup> có tổng số hạt mang điện âm là 30. Trong đó số hạt mang điện của X nhiều hơn của Y là 10. Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X thuộc nhóm IIIA và Y thuộc nhóm VA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X và Y đều thuộc chu kì 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X là kim loại, Y là phi kim",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tổng số proton của X và Y là 28",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Có Z<sub>X</sub> + 2Z<sub>Y</sub> + 1 = 30 và 2Z<sub>X</sub> – 2Z<sub>Y</sub> = 10 ⟹ Z<sub>X</sub> = 13, Z<sub>Y</sub> = 8.<br/>Cấu hình electron của X: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup> ⟹ X thuộc nhóm IIIA, chu kì 3, là kim loại.<br/>Cấu hình electron của Y: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup> ⟹ Y thuộc nhóm VIA, chu kì 2, là phi kim.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk1_de01_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sulfur dạng kem bôi được sử dụng để điều trị mụn trứng cá. Nguyên tử sulfur có phân lớp electron ngoài cùng là 3p<sup>4</sup>. Phát biểu nào sau đây không đúng về nguyên tử sulfur?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lớp ngoài cùng có 4 electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử có 16 electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thuộc chu kỳ 3 trong bảng tuần hoàn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thuộc nhóm VIA trong bảng tuần hoàn",
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
        "id": "hoa10_gk1_de01_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "X là nguyên tố phổ biến thứ 4 trong vỏ trái đất, X có trong hemoglobin của máu làm nhiệm vụ vận chuyển oxygen, duy trì sự sống. Nguyên tử X có 26 proton và 30 neutron trong hạt nhân.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X có 26 electron ở lớp vỏ nguyên tử.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Điện tích hạt nhân của nguyên tử X là +30.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số khối của nguyên tử X bằng 56.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Kí hiệu nguyên tử X là <sup>30</sup><sub>26</sub>X .",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Điện tích hạt nhân của X là +26.<br/>c. Đúng.<br/>d. Sai. Kí hiệu đúng là <sup>56</sup><sub>26</sub>X .",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de01_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho ba nguyên tử có kí hiệu sau: <sup>26</sup><sub>13</sub>X , <sup>55</sup><sub>26</sub>Y , <sup>26</sup><sub>12</sub>Z .",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X và Z có cùng số khối.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X và Z là 2 đồng vị của cùng một nguyên tố hoá học.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X và Y có cùng số neutron.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Y và Z thuộc cùng một nguyên tố hoá học.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. X, Z có số proton khác nhau.<br/>c. Sai. Số neutron của X là 13 và của Y là 29.<br/>d. Sai. Y, Z có số proton khác nhau.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de01_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về orbital nguyên tử (AO):",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Orbital nguyên tử là khu vực không gian xung quanh hạt nhân mà xác xuất có mặt electron khoảng 90%.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "AO s có dạng hình cầu, AO p có hình dạng nổi của số 8.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số AO trong phân lớp p và d lần lượt là 6, 10.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mỗi orbital chứa tối đa là 2 electron và có chiều tự quay ngược nhau.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. AO p là 3 và AO d là 5.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de01_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tắc sắp xếp các nguyên tố vào bảng tuần hoàn:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các nguyên tố được sắp xếp theo chiều tăng dần khối lượng nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp thành một hàng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các nguyên tố có cùng số electron hóa trị trong nguyên tử được xếp thành một cột.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các nguyên tố được xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Các nguyên tố được sắp xếp theo chiều tăng dần điện tích hạt nhân nguyên tử.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de01_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Bảng tuần hoàn hiện nay gồm 8 nhóm A và 8 nhóm B tương ứng với bao nhiêu cột?",
        "images": [],
        "correctAnswer": "18",
        "explanation": "Đáp án: 18.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de01_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các cấu hình electron của một số nguyên tử nguyên tố như sau:<br/>(1) 1s<sup>2</sup><br/>(2) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup><br/>(3) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup><br/>(4) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup><br/>(5) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>6</sup> 4s<sup>2</sup><br/>(6) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>5</sup><br/>Số lượng các nguyên tố kim loại trong số các nguyên tố ở trên là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de01_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử của nguyên tố X có 3 lớp electron và có 2 electron độc thân. Có bao nhiêu cấu hình electron nguyên tử có thể có của X?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>3p<sup>2</sup> và 1s<sup>2</sup>2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>3p<sup>4</sup>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de01_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Tỉ lệ phần trăm số nguyên tử các đồng vị của neon (Ne) được xác định theo phổ khối lượng ở hình dưới đây:<br/>Nguyên tử khối trung bình của Neon là bao nhiêu? (Kết quả làm tròn đến hàng phần mười).",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de1_image9.png"
        ],
        "correctAnswer": "20.2",
        "explanation": "Đáp án: 20,2.<br/>Từ phổ khối lượng ta có tỉ lệ phần trăm các đồng vị: <sup>20</sup>Ne (90%), <sup>21</sup>Ne (1%), <sup>22</sup>Ne (9%).<br/>Nguyên tử khối trung bình của Ne là:<br/>Ā<sub>Ne</sub> = \\frac{20 · 90 + 21 · 1 + 22 · 9}{100} = \\frac{2019}{100} = 20,19 ≈ 20,2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de01_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho nguyên tử của các nguyên tố sau: <sub>3</sub>X, <sub>9</sub>Y, <sub>12</sub>Z, <sub>13</sub>T, <sub>19</sub>G, <sub>20</sub>R,. Có bao nhiêu nguyên tố có 1 electron hóa trị?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de01_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Hai nguyên tố X và Y ở hai nhóm A liên tiếp trong bảng tuần hoàn (Z<sub>X</sub>< Z<sub>Y</sub>). Ở trạng thái đơn chất, X và Y không phản ứng với nhau. Tổng số proton trong hạt nhân X và Y bằng 23. Số proton của X là bao nhiêu?",
        "images": [],
        "correctAnswer": "7",
        "explanation": "Đáp án: 7 hoặc 11.<br/>- Trường hợp 1: Số thứ tự nhóm của Y nhỏ hơn so với X:<br/>Số proton của X là p thì của Y là p + 7<br/>Ta có: p + p + 7 = 23<br/>⇒ p = 8 ~ <sub>8</sub>O và p + 7 = 15 ~ <sub>15</sub>P (không thỏa mãn đề bài do phosphorus có phản ứng với oxygen).<br/>- Trường hợp 2: Số thứ tự nhóm của Y lớn hơn so với X:<br/>Số proton của X là p thì của Y là p + 9<br/>Ta có: p + p + 9 = 23<br/>⇒ p = 7 ~ <sub>7</sub>N và p + 9 = 16 ~ <sub>16</sub>S<br/>- Trường hợp 3: Số thứ tự nhóm của Y lớn hơn so với X:<br/>Số proton của X là p thì của Y là p + 1<br/>Ta có: p + p + 1 = 23<br/>⇒ p = 11 ~ <sub>11</sub>Na và p + 1 = 12 ~ <sub>12</sub>Mg<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa10_gk1_de02",
    "code": "H10-GK1-02",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de02_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự chuyển động của electron theo quan điểm hiện đại được mô tả là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "electron chuyển động rất nhanh xung quanh hạt nhân không theo một quỹ đạo xác định",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chuyển động của electron trong nguyên tử theo một quỹ đạo nhất định hình tròn hay hình bầu dục",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "electron chuyển động cạnh hạt nhân theo một quỹ đạo xác định tạo thành vỏ nguyên tử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "electron chuyển động rất chậm gần hạt nhân theo một quỹ đạo xác định tạo thành vỏ nguyên tử",
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
        "id": "hoa10_gk1_de02_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nguyên tử, hạt mang điện âm là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "proton và electron",
            "isCorrect": false
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
            "text": "electron và neutron",
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
        "id": "hoa10_gk1_de02_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số orbital trong các phân lớp s, p, d lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1, 3, 5",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2, 3, 5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1, 5, 7",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1, 3, 7",
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
        "id": "hoa10_gk1_de02_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố hóa học là tập hợp những nguyên tử có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số neutron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số proton",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số khối",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "khối lượng",
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
        "id": "hoa10_gk1_de02_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính đến năm 2016, số nguyên tố được xác định trong bảng tuần hoàn các nguyên tố hóa học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "118 nguyên tố",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "119 nguyên tố",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "120 nguyên tố",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "121 nguyên tố",
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
        "id": "hoa10_gk1_de02_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tổng số nhóm A và B trong bảng tuần hoàn các nguyên tố hóa học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "16",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "10",
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
            "text": "8",
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
        "id": "hoa10_gk1_de02_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khối lượng nguyên tử tập trung hầu hết ở hạt nhân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử có cấu tạo rỗng và trung hòa điện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kích thước lớp vỏ không đáng kể so với nguyên tử",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Điện tích hạt nhân là tổng điện tích các hạt proton",
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
        "id": "hoa10_gk1_de02_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp nguyên tử nào sau đây là đồng vị của cùng một nguyên tố hóa học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "<sup>40</sup><sub>18</sub>X , <sup>40</sup><sub>19</sub>Y",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "<sup>28</sup><sub>14</sub>X , <sup>29</sup><sub>14</sub>Y",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "<sup>14</sup><sub>6</sub>X , <sup>14</sup><sub>7</sub>Y",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "199X , <sup>20</sup><sub>10</sub>Y",
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
        "id": "hoa10_gk1_de02_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các nguyên tử của nguyên tố khí hiếm đều có 8 electron lớp ngoài cùng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các nguyên tố mà nguyên tử có 1, 2 hoặc 3 electron lớp ngoài cùng đều là kim loại",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chỉ các nguyên tố mà nguyên tử có 5, 6 hoặc 7 electron lớp ngoài cùng là phi kim",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tố mà nguyên tử có 4 electron lớp ngoài cùng có thể là kim loại hoặc phi kim",
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
        "id": "hoa10_gk1_de02_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của các nguyên tố trong một nhóm A của bảng tuần hoàn có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số neutron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số proton",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số electron lớp ngoài cùng",
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
        "id": "hoa10_gk1_de02_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim cương là một dạng thù hình được biết đến nhiều nhất của nguyên tố carbon. Kim cương có độ cứng rất cao, độ khúc xạ cực tốt nên được ứng dụng trong các ngành công nghiệp và đặc biệt làm đồ trang sức có giá trị kinh tế rất cao. Nguyên tử của nguyên tố carbon có số hiệu nguyên tử là 6 và số khối là 12. Tổng số hạt proton, electron và neutron trong nguyên tử carbon là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "38",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "28",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "18",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "8",
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
        "id": "hoa10_gk1_de02_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron nguyên tử của các nguyên tố X, Y, Z, T lần lượt là: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup>, 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>, 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup>, 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup>. Dãy gồm các nguyên tố thuộc cùng chu kì là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X, Y, Z, T",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X, Z",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X, Z, T",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Y, Z, T",
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
        "id": "hoa10_gk1_de02_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử phosphorus (Z = 15) có số electron lớp ngoài cùng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "7",
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
            "text": "5",
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
        "id": "hoa10_gk1_de02_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron của nguyên tử nguyên tố X là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>2</sup>. Vị trí của X trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 3, nhóm IA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 3, nhóm IIIA",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 4, nhóm IA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 4, nhóm IIIA",
            "isCorrect": false
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk1_de02_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các electron trên cùng một phân lớp có mức năng lượng gần bằng nhau",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lớp thứ ba có tối đa 18 electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lớp K liên kết với hạt nhân chặt chẽ nhất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lớp K có mức năng lượng thấp nhất",
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
        "id": "hoa10_gk1_de02_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi nghiên cứu thành phần hóa học và bước đầu ứng dụng tinh dầu tràm trà trong sản xuất nước súc miệng, các nhà nghiên cứu đã tiến hành: “Nghiên cứu thành phần hóa học, ứng dụng của tinh dầu tràm trà làm nước súc miệng qua các công trình khoa học trên các tạp chí đã được xuất bản”. Bước làm này ứng với bước nào trong phương pháp nghiên cứu hóa học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Xác định vấn đề nghiên cứu",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nêu giả thuyết khoa học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thực hiện nghiên cứu (lí thuyết, thực nghiệm, ứng dụng)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Viết báo cáo: thảo luận kết quả và kết luận vấn đề",
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
        "id": "hoa10_gk1_de02_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên copper có hai đồng vị <sup>63</sup>Cu và <sup>65</sup>Cu tương ứng với tỉ lệ số nguyên tử là 3 : 1. Khối lượng <sup>63</sup>Cu trong 67,25 gam dung dịch CuCl<sub>2</sub> 20% là bao nhiêu gam? Biết nguyên tử khối của Cl là 35,5.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "6,300",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1,575",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4,785",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4,725",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Nguyên tử khối trung bình của Cu: Ā = 63,5.<br/>Khối lượng CuCl<sub>2</sub> = 13,45 gam ⟹ n<sub>CuCl2</sub> = 0,1 mol.<br/>Số mol <sup>63</sup>Cu = 0,1 × 75% = 0,075 mol.<br/>Khối lượng <sup>63</sup>Cu = 0,075 × 63 = 4,725 gam.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk1_de02_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp kim chứa nguyên tố X nhẹ và bền, dùng chế tạo vỏ máy bay, tên lửa. Nguyên tố X còn được sử dụng trong xây dựng, ngành điện và đồ gia dụng. Trong nguyên tử X tổng số hạt proton, electron và neutron là 40. Trong đó tổng số hạt mang điện nhiều hơn tổng số hạt không mang điện là 12. Kí hiệu của nguyên tử X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "<sup>27</sup><sub>14</sub>X",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "<sup>27</sup><sub>13</sub>X",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "<sup>28</sup><sub>14</sub>X",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "<sup>28</sup><sub>15</sub>X",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lập hệ gồm 2 phương trình: 2Z + N = 40 và 2Z – N = 12 ⟹ Z = 13 và N = 14.<br/>Số khối A = 13 + 14 = 27 (Nguyên tố Al: <sup>27</sup><sub>13</sub>Al).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_gk1_de02_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho mô hình chuyển động của electron trong nguyên tử dưới đây:",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de2_image14.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mô hình nguyên tử trên cho rằng các electron chuyển động rất nhanh xung quanh hạt nhân và xác suất tìm thấy electron không giống nhau, tạo thành đám mây electron.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mô hình nguyên tử trên được gọi là mô hình hành tinh nguyên tử Rutherford – Bohr.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mô hình nguyên tử trên cho rằng các electron chuyển động rất nhanh xung quanh hạt nhân trên những quỹ đạo hình tròn hay bầu dục xác định xung quanh hạt nhân.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mô hình nguyên tử trên nói về hình dạng và sự định hướng trong không gian của các orbital.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Mô hình trên là là mô hình hành tinh nguyên tử Rutherford – Bohr. Các electron chuyển động xung quanh hạt nhân theo một quỹ đạo tròn hay bầu dục nhất định.<br/>a. Sai.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de02_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Silicon (Si) là nguyên tố được sử dụng để chế tạo vật liệu bán dẫn, có vai trò quan trọng trong sản xuất công nghiệp. Trong tự nhiên, nguyên tố này có 3 đồng vị với số khối lần lượt là 28, 29, 30. Biết nguyên tố silicon có số hiệu nguyên tử là 14.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kí hiệu các đồng vị của silicon: 282930141414Si;Si;Si.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các đồng vị của Si cùng số proton nhưng khác số khối.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các đồng vị của Si có tính chất vật lí giống nhau.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các đồng vị của Si có tính chất hóa học giống nhau.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Các đồng vị có tính chất hóa học tương tự nhau.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de02_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tố calcium (Ca) đóng vai trò quan trọng đối với cơ thể, đặc biệt là xương và răng. Trong bảng tuần hoàn Ca ở chu kì 4, nhóm IIA.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cấu hình electron của nguyên tử Ca là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>10</sup>4s<sup>2</sup>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lớp ngoài cùng của nguyên tử Ca có 4 electron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ca là nguyên tố kim loại.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi nguyên tử Ca nhường đi 2 electron thì tạo thành ion Ca<sup>2–</sup> có 18 electron.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Cấu hình electron của nguyên tử Ca là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>34s<sup>2</sup>.<br/>b. Sai. Lớp ngoài cùng có 2 electron.<br/>c. Đúng.<br/>d. Sai. Ion Ca<sup>2+</sup>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de02_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "J. J. Thomson, nhà vật lí người Anh, được trao Giải thưởng Nobel Vật lí vào năm 1906 vì phát hiện ra một loại hạt cơ bản tạo nên nguyên tử. Thomson đã chế tạo ống tia âm cực gồm một ống thuỷ tinh được hút phần lớn không khí ra khỏi ống, một hiệu điện thế cao được đặt vào hai điện cực gắn ở hai đầu ống (Hình 1). Năm 1897, ông phát hiện ra một dòng hạt đi ra từ điện cực tích điện âm sang điện cực tích điện dương. Tia này được gọi là tia âm cực.<br/>Hình 1. Ống tia âm cực",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de2_image16.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các hạt tạo nên tia âm cực khác nhau khi các vật liệu làm cực âm khác nhau.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các loại hạt tạo nên tia âm cực chuyển động theo đường thẳng trong ống (hình 1).",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi đặt điện trường giữa ống tia âm cực, các hạt tạo nên tia âm cực bị lệch phía bản cực tích điện âm.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hạt tạo nên tia âm cực là hạt proton.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Hoàn toàn giống nhau dù các vật liệu làm cực âm khác nhau.<br/>b. Đúng.<br/>c. Sai. Khi đặt điện trường giữa ống tia âm cực, các hạt tạo nên tia âm cực bị lệch phía bản cực tích điện dương.<br/>d. Sai. Hạt tạo nên tia âm cực là hạt electron.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de02_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các nguyên tố sau: <sub>3</sub>Li, <sub>8</sub>O, <sub>9</sub>F, <sub>11</sub>Na, <sub>15</sub>P, <sub>20</sub>Ca. Có bao nhiêu nguyên tố trong dãy các nguyên tố trên là nguyên tố s?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Electron cuối cùng điền vào phân lớp s.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de02_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các cách biểu diễn electron vào các orbital của phân lớp 2p ở trạng thái cơ bản như hình dưới đây:<br/>Có bao nhiêu cách biểu diễn electron vào các orbital đúng?",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de2_image17.png"
        ],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.<br/>Có (a).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de02_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tố bromine (Br) có số hiệu nguyên tử là 35. Nguyên tử nguyên tố X có số electron nhỏ hơn số electron của ion Br- là 6. X nằm ở ô số mấy trong bảng tuần hoàn các nguyên tố hóa học?",
        "images": [],
        "correctAnswer": "30",
        "explanation": "Đáp án: 30.<br/>Nguyên tử Br có số electron = 35 → Ion Br<sup>–</sup> có số electron = 36<br/>Nguyên tử X có số electron = 36 – 6 = 30<br/>Vậy X nằm ô số 30.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de02_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tố sulfur (S) nằm ở ô thứ 16 trong bảng hệ thống tuần hoàn. Số electron thuộc lớp L trong nguyên tử sulfur là bao nhiêu?",
        "images": [],
        "correctAnswer": "8",
        "explanation": "Đáp án: 8.<br/>Cấu hình 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>.<br/>Lớp L (lớp 2) có 8e.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de02_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tố Y có hai đồng vị bền với nguyên tử khối trung bình là 24,4. Đồng vị thứ nhất có số khối bằng 24 và chiếm 60% số nguyên tử. Xem nguyên tử khối có giá trị xấp xỉ số khối. Xác định số khối của đồng vị thứ hai. Số khối của đồng vị thứ hai là bao nhiêu?",
        "images": [],
        "correctAnswer": "25",
        "explanation": "Đáp án: 25.<br/>Gọi A<sub>2</sub> là số khối của đồng vị thứ 2.<br/>Đồng vị thứ 1 chiếm 60% số nguyên tử nên đồng vị còn lại chiếm 40%<br/>Ta có: 24,4 = → A<sub>2</sub> = 25<br/>Vậy số khối của đồng vị thứ 2 là 25.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de02_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các nguyên tử: X (Z = 2), Y (Z = 6), Z (Z = 8), T (Z = 10), R (Z = 11), G (Z = 17), M (Z = 26). Có bao nhiêu nguyên tố kim loại trong dãy các nguyên tử trên?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Các nguyên tố có 1, 2, 3 electron lớp ngoài cùng là kim loại (trừ H, He, B).<br/>Có 2 nguyên tố kim loại là R (Z = 11) và M (Z = 26).<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa10_gk1_de03",
    "code": "H10-GK1-03",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de03_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trường hợp nào sau đây có sự tương ứng giữa hạt cơ bản với khối lượng và điện tích của chúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Proton, m = 0,00055 amu, q = +1",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Neutron, m = 1 amu, q = 0",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron, m = 1 amu, q = -1",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Proton, m = 1 amu, q = -1",
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
        "id": "hoa10_gk1_de03_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử F có 9 proton, 9 electron và 10 neutron. Số khối của F là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "9",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "10",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "19",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "28",
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
        "id": "hoa10_gk1_de03_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Orbital nguyên tử là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "đám mây chứa electron có dạng hình cầu",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đám mây chứa electron có dạng hình số tám nổi",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "vùng không gian xung quanh hạt nhân mà ở đó xác suất có mặt electron là lớn nhất",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "quỹ đạo chuyển động của electron quanh hạt nhân có kích thước và năng lượng xác định",
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
        "id": "hoa10_gk1_de03_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hai đồng vị của nguyên tố carbon khác nhau về",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cấu hình electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số khối",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số hiệu nguyên tử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số proton",
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
        "id": "hoa10_gk1_de03_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số hiệu nguyên tử của nguyên tố hóa học bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số thứ tự của ô nguyên tố",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số thứ tự của chu kì",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số thứ tự của nhóm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số electron lớp ngoài cùng",
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
        "id": "hoa10_gk1_de03_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tố trong cùng một nhóm của bảng tuần hoàn có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cùng số lớp electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cùng số electron ở lớp vỏ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tính chất hóa học tương tự nhau",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cùng điện tích hạt nhân",
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
        "id": "hoa10_gk1_de03_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bảng tuần hoàn hiện nay có số nhóm A và nhóm B là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "8 và 8",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "8 và 10",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "7 và 8",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "7 và 9",
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
        "id": "hoa10_gk1_de03_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng về 73Li ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hạt nhân nguyên tử có 3 proton và 7 neutron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số khối của hạt nhân nguyên tử là 3, số hiệu nguyên tử là 7",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử có 3 electron, hạt nhân có 3 proton và 4 neutron",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử có 3 electron, hạt nhân có 4 proton và 3 neutron",
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
        "id": "hoa10_gk1_de03_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các nguyên tử có 2 electron lớp ngoài cùng đều là nguyên tử kim loại",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các electron lớp ngoài cùng quyết định tính chất hóa học của nguyên tố",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các nguyên tử có 8 electron lớp ngoài cùng đều là nguyên tử khí hiếm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đối với nguyên tử của tất cả các nguyên tố, lớp ngoài cùng có nhiều nhất 8 electron",
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
        "id": "hoa10_gk1_de03_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không phù hợp với nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các nguyên tố được xếp theo chiếu tăng của điện tích hạt nhân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các nguyên tố có cùng số lớp electron được xếp thành một hàng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các nguyên tố có cùng số electron hóa trị được xếp thành một cột",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các nguyên tố được xếp theo chiều tăng của nguyên tử khối",
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
        "id": "hoa10_gk1_de03_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử magnesium (Mg) có 12 electron. Biết điện tích của 1 electron là -1,602.10<sup>–19</sup>C. Điện tích của lớp vỏ nguyên tử Mg là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1,602.10<sup>-19</sup> C",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "-1,602.10<sup>-19</sup> C",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1,602.10<sup>-27</sup> C",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "-1,602.10<sup>-27</sup> C",
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
        "id": "hoa10_gk1_de03_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử nguyên tố K (Z = 19) có số lớp electron là",
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
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4",
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
        "id": "hoa10_gk1_de03_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron nguyên tử nào sau đây là của nguyên tố s?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>",
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
        "id": "hoa10_gk1_de03_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phổ khối lượng MS của silver (Ag) ở hình dưới đây:<br/>Nguyên tử khối trung bình của nguyên tố silver là",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de3_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "107,964",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "108,000",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "107,987",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "108,012",
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
        "id": "hoa10_gk1_de03_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào đúng khi nói về các orbital trong một phân lớp electron?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có cùng sự định hướng không gian",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có cùng mức năng lượng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khác nhau về mức năng lượng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có hình dạng không phụ thuộc vào đặc điểm mỗi phân lớp",
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
        "id": "hoa10_gk1_de03_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các quá trình biến đổi sau:<br/>(1) Nước sôi bay hơi.<br/>(2) Nhúng đinh sắt vào dung dịch chloric acid thấy sủi bọt khí và đinh sắt tan dần.<br/>Khẳng định nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) là quá trình biến đổi vật lí, (2) là quá trình biến đổi hóa học",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) là quá trình biến đổi hóa học, (2) là quá trình biến đổi vật lí",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cả (1) và (2) đều là quá trình biến đổi hóa học",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cả (1) và (2) đều là quá trình biến đổi vật lí",
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
        "id": "hoa10_gk1_de03_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hạt nhân nguyên tử của nguyên tố X có điện tích là 7+. Vị trí của X trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 2, nhóm IIIA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 2, nhóm IIIB",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 2, nhóm VA",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 2, nhóm VB",
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
        "id": "hoa10_gk1_de03_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử nguyên tố X có phân lớp electron ngoài cùng là 3p<sup>4</sup>. Phát biểu nào sau đây về X không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X có 16 proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X là kim loại",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X thuộc chu kì 3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X thuộc nhóm VIA",
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
        "id": "hoa10_gk1_de03_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Dựa vào mô hình nguyên tử Rutherford – Bohr, hãy cho biết mỗi phát biểu sau đây đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số lượng electron tối đa trên các lớp là như nhau.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Năng lượng của các electron trên các lớp khác nhau có thể bằng nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi quay quanh hạt nhân theo một quỹ đạo xác định, năng lượng của electron là không đổi.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Electron ở gần hạt nhân nhất có năng lượng cao nhất.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Trên các lớp khác nhau có số electron khác nhau.<br/>b. Sai. Năng lượng electron trên các lớp khác nhau thì khác nhau.<br/>c. Đúng.<br/>d. Sai. Electron ở gần hạt nhân nhất có năng lượng thấp nhất.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de03_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tử nguyên tố X có 3 lớp electron, lớp ngoài cùng có 4 electron.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tố X thuộc chu kì 3, nhóm IVA trong bảng tuần hoàn các nguyên tố hóa học.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số hiệu nguyên tử của X là 12.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở trạng thái cơ bản, các phân lớp electron của nguyên tử X đã bão hòa.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X là nguyên tố kim loại.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Cấu hình e [Ne] 3s<sup>2</sup>3p<sup>2</sup><br/>a. Đúng.<br/>b. Sai. Z = 14<br/>c. Sai. 3p<sup>6</sup> mới bão hòa<br/>d. Sai. X là nguyên tố phi kim",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de03_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chu kì 2, 3, 4 bắt đầu bằng một kim loại kiềm và kết thúc là một khí hiếm.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Bảng tuần hoàn của Men-đê-lê-ép sắp xếp theo chiều tăng dần điện tích hạt nhân nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các nguyên tố thuộc cùng một nhóm B trong bảng tuần hoàn sẽ có cùng số electron hóa trị.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong một chu kì, các nguyên tố được sắp xếp theo chiều khối lượng nguyên tử tăng dần.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Bảng tuần hoàn của Men-đê-lê-ép sắp xếp theo chiều tăng dần khối lượng nguyên tử.<br/>c. Đúng.<br/>d. Sai. Trong một chu kỳ, các nguyên tố được sắp xếp theo chiều điện tích hạt nhân tăng dần.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de03_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Tại một khu vực của Úc, gia súc không phát triển mạnh mặc dù có thức ăn thô xanh thích hợp. Một cuộc điều tra cho thấy nguyên nhân là do không có đủ cobalt trong đất. Cobalt (Z = 27) tạo thành cation ở hai dạng là Co<sup>2+</sup> và Co<sup>3+</sup>.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở trạng thái cơ bản, các phân lớp electron của cobalt đã bão hòa.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cobalt là nguyên tố phi kim.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong ion Co<sup>2+</sup> có 2 electron độc thân thuộc AO 3d.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cấu hình electron ở phân lớp ngoài cùng của Co<sup>2+</sup> và Co<sup>3+</sup> lần lượt là 3d<sup>7</sup> và 3d<sup>6</sup>.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Co có Z = 27 nên có cấu hình electron là: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>7</sup>4s<sup>2</sup>.<br/>Co<sup>2+</sup>: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>7</sup><br/>Co<sup>3+</sup>: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>6</sup><br/>Sơ đồ phân bố electron vào các ô orbital:<br/>Số electron độc thân trong Co<sup>2+</sup> và Co<sup>3+</sup> lần lượt là 3 và 4.<br/>a. Sai. Phân lớp 3d chưa bão hòa.<br/>b. Sai. Cobalt là nguyên tố kim loại.<br/>c. Sai. Có 3 electron độc thân.<br/>d. Đúng.",
        "explanationImages": [
          "/assets/hoa10/midterm/h10_gk1_de3_image14.png"
        ],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de03_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Oxygen có 3 đồng vị là 16O , 17O và 18O . Nitrogen có 2 đồng vị là <sup>14</sup>N, <sup>15</sup>N. Có bao nhiêu hợp chất NO khác nhau được tạo thành bởi các đồng vị trên?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de03_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Lớp thứ 3 có số electron tối đa là bao nhiêu?",
        "images": [],
        "correctAnswer": "18",
        "explanation": "Đáp án: 18.<br/>2n<sup>2</sup> = 2.3<sup>2</sup> = 18.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de03_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Trong tự nhiên có khoảng 25 nguyên tố cần thiết cho sự sống. Trong đó nguyên tố X (thuộc nhóm VIIA, chu kì 5 trong bảng tuần hoàn) là nguyên tố vi lượng mà hàng ngày con người cần khoảng 15 miligam cho hoạt động của tuyến giáp, nếu thiếu nguyên tố X có thể gây bướu cổ. Dựa vào bảng tuần hoàn, hãy cho biết nguyên tố X ở ô số bao nhiêu?",
        "images": [],
        "correctAnswer": "53",
        "explanation": "Đáp án: 53.<br/>Cấu hình Iodine (I): [Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>5</sup> (tổng số e = 36 + 10 + 2 + 5 = 53)",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de03_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các cách biểu diễn electron vào orbital của các phân lớp ở trạng thái cơ bản như sau:<br/>a) d)<br/>1s 3d<br/>b) e)<br/>2p 2p<br/>c) g)<br/>3p 3s<br/>Trong các cách biểu diễn trên, có bao nhiêu cách phân bố đúng với từng phân lớp electron?",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de3_image8.png",
          "/assets/hoa10/midterm/h10_gk1_de3_image9.png",
          "/assets/hoa10/midterm/h10_gk1_de3_image10.png",
          "/assets/hoa10/midterm/h10_gk1_de3_image11.png",
          "/assets/hoa10/midterm/h10_gk1_de3_image12.png",
          "/assets/hoa10/midterm/h10_gk1_de3_image13.png"
        ],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Có 3 cách phân bố đúng là a, d, e.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de03_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Các hợp chất của nguyên tố Y được sử dụng như là vật liệu chịu lửa trong các lò sản xuất sắt, thép, kim loại màu, thủy tinh và xi măng. Oxide của Y và các hợp chất khác cũng được sử dụng trong nông nghiệp, công nghiệp hóa chất và xây dựng. Nguyên tử Y có tổng số các hạt là 36. Số hạt không mang điện bằng một nửa hiệu số giữa tổng số hạt với số hạt mang điện tích âm. Nguyên tử Y có bao nhiêu hạt proton?",
        "images": [],
        "correctAnswer": "12",
        "explanation": "Đáp án: 12.<br/>",
        "explanationImages": [
          "/assets/hoa10/midterm/h10_gk1_de3_image15.png",
          "/assets/hoa10/midterm/h10_gk1_de3_image16.png"
        ],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de03_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "X, Y là hai nguyên tố thuộc cùng nhóm A ở hai chu kì liên tiếp nhau trong bảng tuần hoàn, có tổng số proton trong hai hạt nhân là 32 (Z<sub>X</sub> < Z<sub>Y</sub>). Số hiệu nguyên tử của Y là bao nhiêu?",
        "images": [],
        "correctAnswer": "20",
        "explanation": "Đáp án: 20.<br/>Ta có: Z<sub>X</sub> + Z<sub>Y</sub> = 32 (1)<br/>Vì X và Y thuộc cùng nhóm A ở hai chu kì kế tiếp nhau nên số proton của chúng khác nhau 8 hoặc 18 đơn vị Z<sub>Y</sub> – Z<sub>X</sub> = 8 (2) hoặc Z<sub>Y</sub> – Z<sub>X</sub> = 18 (3)<br/>Kết hợp (1) và (2) giải hệ phương trình ta được: Z<sub>X</sub> = 12; Z<sub>Y</sub> = 20 (thỏa)<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa10_gk1_de04",
    "code": "H10-GK1-04",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de04_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nội dung nào dưới đây không phải là đối tượng nghiên cứu của hóa học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thành phần, cấu trúc của chất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính chất và sự biến đổi của chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ứng dụng của chất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự lớn lên và sinh sản của tế bào",
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
        "id": "hoa10_gk1_de04_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nguyên tử, loại hạt có khối lượng không đáng kể so với các hạt còn lại là",
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
            "text": "electron",
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
            "text": "alpha",
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
        "id": "hoa10_gk1_de04_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử 6329 Cu có số neutron là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "34",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "63",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "92",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "87",
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
        "id": "hoa10_gk1_de04_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo thứ tự mức năng lượng, sự sắp xếp nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s < 2s",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4s > 3s",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4d < 5s",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3p < 3d",
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
        "id": "hoa10_gk1_de04_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo mô hình nguyên tử Rutherford – Bohr, vị trí nào trong số các vị trí A, B, C, D trong hình sau mà electron không xuất hiện?",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de4_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Vị trí A",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Vị trí B",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Vị trí C",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Vị trí D",
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
        "id": "hoa10_gk1_de04_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố nitrogen có hai đồng vị tự nhiên là <sup>14</sup><sub>7</sub>N và 157N. Số loại phân tử N<sub>2</sub> tồn tại bền trong khí quyển trái đất là",
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
        "correctAnswer": "A",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_gk1_de04_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự biểu diễn phân bố các electron vào orbital của nguyên tử phosphorus (P, Z= 15) như sau<br/>Số electron độc thân của nguyên tử phosphorus là",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de4_image6.png"
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
            "text": "4",
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
        "id": "hoa10_gk1_de04_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng về các đồng vị của cùng một nguyên tố hóa học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có số khối khác nhau",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có số neutron khác nhau",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có cùng điện tích hạt nhân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có số electron khác nhau",
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
        "id": "hoa10_gk1_de04_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây về bảng tuần hoàn không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các nguyên tố được sắp xếp theo chiều tăng dần điện tích hạt nhân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các nguyên tố có số electron hóa trị trong nguyên tử như nhau được xếp thành một cột",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các nguyên tố có cùng số electron lớp ngoài cùng được xếp thành một hàng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số thứ tự của ô nguyên tố đúng bằng số hiệu nguyên tử của nguyên tố đó",
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
        "id": "hoa10_gk1_de04_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chu kì là dãy các nguyên tố được sắp xếp theo chiều điện tích hạt nhân tăng dần, nguyên tử của chúng có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số lớp electron",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số electron hóa trị",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số electron ở lớp ngoài cùng",
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
        "id": "hoa10_gk1_de04_p1_q11",
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
            "text": "4 và 4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3 và 4",
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
        "id": "hoa10_gk1_de04_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ion X<sup>2-</sup> có cấu hình electron lớp ngoài cùng là 3s<sup>2</sup>3p<sup>6</sup>. Vị trí (chu kì, nhóm) của nguyên tố X trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 3, nhóm VIA",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 4, nhóm IIIA",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 3, nhóm IVA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 4, nhóm IIA",
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
        "id": "hoa10_gk1_de04_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Lớp L (n = 2) có số phân lớp electron bằng",
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
            "text": "3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2",
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
        "displayNumber": 13
      },
      {
        "id": "hoa10_gk1_de04_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố K (Z = 19) có số electron hóa trị là",
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
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk1_de04_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Những electron ở lớp K có mức năng lượng thấp nhất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Những electron ở gần hạt nhân có mức năng lượng cao nhất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron ở orbital 3p có mức năng lượng thấp hơn electron ở orbital 3s",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các electron trong cùng một lớp có năng lượng bằng nhau",
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
        "id": "hoa10_gk1_de04_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự phân bố electron trong nguyên tử của 4 nguyên tố như sau: X (2, 8, 1); Y (2, 7); Z (2, 8, 8, 1); T (2, 1). Những nguyên tố thuộc cùng nhóm là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X, Y",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X, Z",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Y,T",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X, Z, T",
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
        "id": "hoa10_gk1_de04_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron của Cu (Z = 29) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>10</sup>4s<sup>1</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>9</sup> 4s<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>9</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup>",
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
        "id": "hoa10_gk1_de04_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử nguyên tố X có phân lớp electron ngoài cùng trong nguyên tử là 3p<sup>5</sup>. Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X có 17 proton trong hạt nhân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lớp ngoài cùng của X có 5 electron",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X thuộc chu kì 3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X thuộc nhóm VIIA",
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
        "id": "hoa10_gk1_de04_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Proton mang điện tích dương, nằm trong hạt nhân, khối lượng gần bằng 1 amu.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Electron mang điện tích âm, nằm trong hạt nhân, khối lượng gần bằng 0 amu.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Neutron không mang điện, khối lượng gần bằng 1 amu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử trung hòa điện, có kích thước lớn hơn nhiều so với hạt nhân, nhưng có khối lượng gần bằng khối lượng hạt nhân.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. m<sub>e</sub> = 0,00055 amu.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de04_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho ô nguyên tố vanadium sau:",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de4_image7.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số hiệu nguyên tử nguyên tố vanadium là 23.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kí hiệu hóa học của nguyên tố vanadium là Va.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số khối của nguyên tố vanadium là 50,942.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Vị trí của nguyên tố vanadium trong bảng tuần hoàn là ô 23, chu kì 4, nhóm IIIB.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Kí hiệu là V.<br/>c. Sai. Nguyên tử khối trung bình 50,942.<br/>d. Sai. Chu kì 4, nhóm VB.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de04_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong mỗi phân lớp, electron được phân bố vào ô orbital sao cho số electron độc thân là lớn nhất.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở lớp vỏ nguyên tử, electron s chỉ chuyển động trên một mặt cầu.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kích thước hạt nhân lớn hơn kích thước của nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Theo mô hình hiện đại, orbital p có hình số tám nổi, với hai phần (còn gọi là hai thùy) giống hệt nhau. Xác suất tìm thấy electron ở mỗi thùy khoảng 90%.",
            "isCorrect": false
          }
        ],
        "explanation": "a) Đúng.<br/>b) Sai. Electron chuyển động trong vùng không gian xác suất 90%, không cố định trên mặt cầu.<br/>c) Sai. Kích thước nguyên tử lớn hơn rất nhiều so với kích thước hạt nhân (khoảng 10.000 lần).<br/>d) Sai. Xác suất tìm thấy electron ở cả 2 thùy là 90%, do đó ở mỗi thùy khoảng 45%.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de04_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tử của hai nguyên tố X, Y có phân mức năng lượng cao nhất lần lượt là 3p và 4s. Tổng số electron trên hai phân lớp trên là 7 và X không phải là khí hiếm.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X thuộc nhóm VIIA và Y thuộc nhóm IIA.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X là một phi kim và Y là một kim loại.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số lượng proton của Y và X hơn kém nhau 3 đơn vị.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số electron ở phân mức năng lượng cao nhất của X và Y lần lượt là 5 và 2.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Gọi x, y là số electron lần lượt trên phân lớp 3p và 4s<br/>Theo đề ta có: x + y = 7<br/>+ Nếu y = 1 → x = 6 (loại) vì theo đề X không phải khí hiếm<br/>+ Nếu y = 2 → x = 5<br/>X: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup>, Y: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>.<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de04_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Trong bảng tuần hoàn, có bao nhiêu nguyên tố thuộc chu kì 5?",
        "images": [],
        "correctAnswer": "18",
        "explanation": "Đáp án: 18.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de04_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Ở trạng thái cơ bản, nguyên tử M có phân lớp electron điền sau cùng là 3d<sup>6</sup>. Tổng số electron ở các phân lớp s của nguyên tử M là bao nhiêu?",
        "images": [],
        "correctAnswer": "8",
        "explanation": "Đáp án: 8.<br/>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>8</sup> Có 8 electron phân lớp s.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de04_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử của nguyên tố aluminium (Al) có 13 electron. Ở trạng thái cơ bản, Al có số orbital chứa electron là bao nhiêu?",
        "images": [],
        "correctAnswer": "7",
        "explanation": "Đáp án: 7.<br/>Cấu hình electron nguyên tử aluminium (Z = 13) theo ô orbital là<br/>",
        "explanationImages": [
          "/assets/hoa10/midterm/h10_gk1_de4_image11.png"
        ],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de04_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tố Y thuộc chu kì 4, nhóm IB. Tổng số hạt mang điện trong hợp chất Y<sub>2</sub>O là bao nhiêu? Biết số hiệu nguyên tử của oxygen (O) bằng 8.",
        "images": [],
        "correctAnswer": "132",
        "explanation": "Đáp án: 132.<br/>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>10</sup>4s<sup>1</sup> (Z = 29)<br/>Tổng số hạt là 29.2.2 + 8.2 = 132.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de04_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các nguyên tố sau: <sub>2</sub>X, <sub>6</sub>Y, <sub>9</sub>Z, <sub>11</sub>T, <sub>16</sub>E và <sub>20</sub>F. Có bao nhiêu nguyên tố phi kim trong dãy các nguyên tố trên?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de04_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Đồng vị phóng xạ cobalt (Co-60) phát ra tia γ có khả năng đâm xuyên mạnh, dùng điều trị các khối u ở sâu trong cơ thể. Cobalt có ba đồng vị: <sup>59</sup><sub>27</sub>Co (chiếm 98%), <sup>58</sup><sub>27</sub>Co và <sup>60</sup><sub>27</sub>Co; nguyên tử khối trung bình là 58,982. Xác định hàm lượng % của đồng vị phóng xạ Co-60.",
        "images": [],
        "correctAnswer": "0,1",
        "explanation": "Gọi % của Co-60 là x% ⟹ % của Co-58 là (2 - x)%.<br/>Nguyên tử khối trung bình: Ā = [59 × 98 + 60 × x + 58 × (2 - x)] / 100 = 58,982 ⟹ x = 0,1%.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa10_gk1_de05",
    "code": "H10-GK1-05",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de05_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nội dung nào dưới đây thuộc đối tượng nghiên cứu của Hóa học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sự vận chuyển của máu trong hệ tuần hoàn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sự tự quay của Trái Đất quanh trục riêng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sự chuyển thể của nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự phá hủy tầng ozone bởi freon – 12",
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
        "id": "hoa10_gk1_de05_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bảng tuần hoàn hiện nay được chia thành",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "8 nhóm A và 8 nhóm B",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "8 nhóm A và 10 nhóm B",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "10 nhóm A và 8 nhóm B",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "10 nhóm A và 10 nhóm B",
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
        "id": "hoa10_gk1_de05_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của nguyên tố X có 10 proton. Trong bảng tuần hoàn. Vị trí của nguyên tố X trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 2 và nhóm VA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 2 và nhóm VIIIA",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 3 và nhóm VIIA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 3 và nhóm VA",
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
        "id": "hoa10_gk1_de05_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy nào sau đây gồm các phân lớp electron bão hòa?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "s<sup>1</sup>, p<sup>3</sup>, d<sup>5</sup>, f<sup>7</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "s<sup>2</sup>, p<sup>6</sup>, d<sup>10</sup>, f<sup>14</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "s<sup>2</sup>, p<sup>6</sup>, d<sup>10</sup>, f <sup>11</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "s<sup>2</sup>, p<sup>4</sup>, d<sup>10</sup>, f <sup>11</sup>",
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
        "id": "hoa10_gk1_de05_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình vẽ nào sau đây mô tả đúng các đường đi của các hạt electron, neutron hoặc proton dưới tác dụng của điện trường trong chân không? (Hình 1, 2, 3 lần lượt tương ứng từ trái sang phải)",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de5_image2.png",
          "/assets/hoa10/midterm/h10_gk1_de5_image3.png",
          "/assets/hoa10/midterm/h10_gk1_de5_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hình 1 và 2",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hình 1 và 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hình 2 và 3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hình 1, 2 và 3",
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
        "id": "hoa10_gk1_de05_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số khối của một nguyên tử X gấp hai lần số hiệu nguyên tử của nó. X có 4 electron ở phân lớp 2p. Số neutron của X bằng với số neutron của nguyên tử nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "<sup>40</sup><sub>20</sub>Ca",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "<sup>14</sup><sub>7</sub>N",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "157N",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "178O",
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
        "id": "hoa10_gk1_de05_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số electron độc thân của nguyên tử S (Z= 16) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0",
            "isCorrect": false
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
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "6",
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
        "id": "hoa10_gk1_de05_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là đúng khi nói về nguyên tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong nguyên tử, số hạt proton luôn bằng số hạt neutron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Điện tích của một nguyên tử có thể có giá trị âm, dương hoặc bằng 0",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khối lượng của một nguyên tử (tính theo amu) luôn là số nguyên",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lớp vỏ nguyên tử tạo nên bởi các electron",
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
        "id": "hoa10_gk1_de05_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự phân bố electron theo ô orbital nào dưới đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de5_image9.png",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de5_image10.png",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de5_image11.png",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de5_image12.png",
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
        "id": "hoa10_gk1_de05_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây về bảng tuần hoàn không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các nguyên tố được sắp xếp theo chiều tăng dần điện tích hạt nhân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các nguyên tố có số electron hóa trị trong nguyên tử như nhau được xếp thành một cột",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các nguyên tố có cùng số electron lớp ngoài cùng được xếp thành một hàng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số thứ tự của ô nguyên tố đúng bằng số hiệu nguyên tử của nguyên tố đó",
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
        "id": "hoa10_gk1_de05_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các electron trên cùng một lớp có mức năng lượng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "gần bằng nhau",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bằng nhau",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có thể bằng hoặc không",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "không xác định được",
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
        "id": "hoa10_gk1_de05_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nguyên tử sau: 121414676X,Y,Z . Những nguyên tử nào thuộc cùng một nguyên tố hóa học?",
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
            "text": "Y và Z",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X và Z",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X, Y và Z",
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
        "id": "hoa10_gk1_de05_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sao đây là nội dung của qui tắc Hund?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong một obital chỉ chứa tối đa 2 electron có chiều tự quay ngược nhau",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong cùng 1 phân lớp các e sẽ phân bố trên các orbital sao cho số e độc thân là tối đa và có chiều tự quay giống nhau",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cấu hình e của nguyên tử biểu diễn sự phân bố e trên các phân lớp thuộc các lớp khác nhau",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các e trong nguyên tử ở trạng thái cơ bản lần lượt chiếm các obital có mức năng lượng từ thấp đến cao",
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
        "id": "hoa10_gk1_de05_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số electron lớp ngoài cùng của nguyên tử Helium (Z = 4) là",
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
        "displayNumber": 14
      },
      {
        "id": "hoa10_gk1_de05_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn các nguyên tố hoá học do Mendeleev đề xuất, các nguyên tố được sắp xếp theo chiều tăng dần của ...(1).... Trong bảng tuần hoàn các nguyên tố hoá học hiện đại, các nguyên tố được sắp xếp theo chiều tăng dần của ...(2).... Cụm từ thích hợp điền vào (1), (2) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) số electron hoá trị, (2) khối lượng nguyên tử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) số hiệu nguyên tử, (2) khối lượng nguyên tử",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) khối lượng nguyên tử, (2) số hiệu nguyên tử",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) số electron hóa trị, (2) số hiệu nguyên tử",
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
        "id": "hoa10_gk1_de05_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một nguyên tử X có tổng số electron ở các phân lớp s là 6 và tổng số electron lớp ngoài cùng là 7. Cho biết X thuộc về nguyên tố hoá học nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Oxygen (Z = 8)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sulfur (Z = 16)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fluorine (Z = 9)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chlorine (Z = 17)",
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
        "id": "hoa10_gk1_de05_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các cấu hình electron của nguyên tử sau đây:<br/>(a) 2262611s2s2p3s3p4s (b) 226261011s2s2p3s3p3d4s<br/>(c) 2262610251s2s2p3s3p3d4s4p (d) 2262610261s2s2p3s3p3d4s4p<br/>Có bao nhiêu cấu hình electron nguyên tử là kim loại?",
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
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk1_de05_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một cation M<sup>+</sup> và một anion X<sup>-</sup> có cùng cấu hình electron là 2261s2s2p . Phát biểu nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "M và X là hai đồng vị của cùng một nguyên tố",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "M là một kim loại và X là một phi kim",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "M là một phi kim và X là một kim loại",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số lượng proton của M và X hơn kém nhau 1 đơn vị",
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
        "id": "hoa10_gk1_de05_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tố hydrogen là một trong những nguyên tố phổ biến trong vũ trụ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hydrogen là nguyên tố duy nhất có đồng vị mà hạt nhân chỉ tạo nên bởi các hạt p.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hydrogen là nguyên tố có đồng vị nhẹ nhất.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hydrogen được xem là nguồn năng lượng xanh của tương lai.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nước chỉ tạo nên bởi các đồng vị 11H .",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. H<sub>2</sub>O được tạo nên bởi các đồng vị của hydrogen và các đồng vị của oxygen.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de05_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Khi điền electron vào các lớp và phân lớp trong nguyên tử, mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thứ tự điền electron theo đúng thứ tự các lớp electron trong nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Electron được điền đầy hết lớp bên trong rồi mới tới lớp bên ngoài.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số lượng electron tối đa có thể có thể điền vào mỗi phân lớp là 2.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mỗi orbital nguyên tử chỉ điền được tối đa 2 electron.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Điền electron vào các orbital theo thứ tự tăng dần mức năng lượng.<br/>b. Sai. Ví dụ 3d điền trước 4p.<br/>c. Sai. Phân lớp p, d, f có nhiều hơn 2e.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de05_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "X là một nguyên tố chu kì 2, phân lớp ngoài cùng của nguyên tử nguyên tố X có 3 electron độc thân.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điện tích hạt nhân của nguyên tử X là +7.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cấu hình electron của nguyên tử X là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>1</sup>.",
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
            "text": "X thuộc chu kì 2, nhóm IIIA trong bảng tuần hoàn hóa học.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Vì X có 3e độc thân và X nằm ở chu kì 2 nên cấu hình của X là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>.<br/>a. Đúng.<br/>b. Sai.<br/>c. Sai. X là phi kim.<br/>d. Sai. X thuộc nhóm VA.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de05_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "X và Y là hai nguyên tố thuộc nhóm A và thuộc cùng một chu kì của bảng tuần hoàn. X là một kim loại và Y là một phi kim. Tổng số electron hóa trị của X và Y là 8.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X và Y có thể là những nguyên tố thuộc nhóm IVA.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nếu X thuộc nhóm IA thì Y thuộc nhóm VIIA.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu X là Al (Z = 13) thì Y có thể là Cl (Z = 17).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu Y là Se (Z = 34) thì X có thể là Zn (Z = 30).",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>X thường có 1, 2, 3e ở lớp ngoài cùng, Y thường có 5, 6, 7e ở lớp ngoài cùng.<br/>a. Sai. X và Y cùng một chu kì nên không thể cùng nhóm.<br/>b. Đúng.<br/>c. Sai. Al có 3e hóa trị, Cl có 7e hóa trị (tổng là 11e).<br/>d. Sai. Zn là nguyên tố nhóm B.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de05_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Hình ảnh dưới đây là mô hình cấu tạo của nguyên tử nguyên tố X:<br/>Có bao nhiêu electron ở lớp ngoài cùng của nguyên tử nguyên tố X?",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de5_image20.png"
        ],
        "correctAnswer": "7",
        "explanation": "Đáp án: 7.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de05_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử Ar (Z = 18) có bao nhiêu electron trong các phân lớp p?",
        "images": [],
        "correctAnswer": "12",
        "explanation": "Đáp án: 12.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de05_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử có đường kính gấp khoảng 10.000 lần đường kính hạt nhân. Nếu ta phóng đại hạt nhân lên thành một quả bóng có đường kính 6 cm thì đường kính nguyên tử sẽ là bao nhiêu m?",
        "images": [],
        "correctAnswer": "600",
        "explanation": "Đáp án: 600.<br/>Đường kính nguyên tử: 6.10.000 = 60.000 cm = 600 m.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de05_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Trong các nguyên tố sau: Mg (Z = 12), Li (Z = 3), P (Z = 15), F (Z = 9) và Al (Z = 13), có bao nhiêu nguyên tố thuộc chu kì 3?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de05_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Từ phổ khối lượng các đồng vị của Cu trong tự nhiên ở hình dưới đây:<br/>Cho biết giá trị nguyên tử khối trung bình của Cu? (Kết quả làm tròn đến hàng phần mười).",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de5_image21.png"
        ],
        "correctAnswer": "63.6",
        "explanation": "Đáp án: 63,6.<br/>Từ phổ khối lượng ta có tỉ lệ số nguyên tử của <sup>63</sup>Cu là 7 và <sup>65</sup>Cu là 3.<br/>Nguyên tử khối trung bình của Cu là:<br/>Ā<sub>Cu</sub> = \\frac{63 · 7 + 65 · 3}{7 + 3} = \\frac{636}{10} = 63,6.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de05_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Hợp chất ion XY được sử dụng để bảo quản mẫu tế bào trong việc nghiên cứu dược phẩm và hóa sinh. Trong phân tử XY, số electron của cation bằng số electron của anion và tổng số electron trong XY là 20. Biết trong mọi hợp chất, Y chỉ có một mức oxi hóa duy nhất. Số hiệu nguyên tử của Y bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "9",
        "explanation": "Đáp án: 9.<br/>Số electron trong cation = Số electron trong anion = 20/2 = 10<br/>Có 3 trường hợp, Al<sup>3+</sup>và N<sup>3-</sup>; Mg<sup>2+</sup> và O<sup>2-</sup>; Na<sup>+</sup> và F<sup>-</sup><br/>N<sup>3-</sup> và O<sup>2-</sup> không thỏa mãn mức oxi hóa duy nhất<br/>X là Na ở ô số 11, chu kì 3, nhóm IA và Y là F ở ô số 9, chu kì 2, nhóm VIIA của bảng tuần hoàn.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa10_gk1_de06",
    "code": "H10-GK1-06",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de06_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện tượng nào sau đây là hiện tượng hóa học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thủy tinh nóng chảy được thổi thành bình cầu",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mở nút chai nước giải khát loại có gas thấy có bọt sủi lên",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hòa tan acetic acid (CH<sub>3</sub>COOH) vào nước đựng dung dịch acetic acid loãng dùng làm giấm ăn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khí methane (CH<sub>4</sub>) cháy tạo thành khí carbon dioxide và hơi nước",
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
        "id": "hoa10_gk1_de06_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Năm 1932, J. Chadwick cộng sự của Rutherford khi thực hiện bắn phá berylium bằng hạt α đã phát hiện ra hạt",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hạt nhân nguyên tử",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "proton",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "neutron",
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
        "id": "hoa10_gk1_de06_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biết khối lượng của hạt proton, electron lần lượt là 1,673.10<sup>-27</sup> kg và 9,109.10<sup>-31</sup> kg. Khối lượng hạt proton gấp khoảng bao nhiêu lần khối lượng hạt electron?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1837",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1868",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1818",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1368",
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
        "id": "hoa10_gk1_de06_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự phân bố electron trong một orbital dựa vào nguyên lí và quy tắc nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên lí vững bền",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Quy tắc Hund",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên lí Pauli",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Quy tắc Pauli",
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
        "id": "hoa10_gk1_de06_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số đơn vị điện tích hạt nhân của nguyên tử có kí hiệu <sup>23</sup><sub>11</sub>Na là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "23",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "+11",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "12",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "11",
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
        "id": "hoa10_gk1_de06_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố hóa học là tập hợp các nguyên tử có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số khối",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "điện tích hạt nhân",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số neutron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nguyên tử khối",
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
        "id": "hoa10_gk1_de06_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử M có cấu hình e của phân lớp ngoài cùng là 3s<sup>2</sup>. Điện tích hạt nhân của nguyên tử M là",
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
            "text": "12",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+12",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "+10",
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
        "id": "hoa10_gk1_de06_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của nguyên tố X có tổng số electron trên phân lớp p là 10. Cách biểu diễn cấu hình electron của nguyên tử X theo OA nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hình A",
            "image": "/assets/hoa10/midterm/h10_gk1_de6_image3.png",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hình B",
            "image": "/assets/hoa10/midterm/h10_gk1_de6_image4.png",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hình C",
            "image": "/assets/hoa10/midterm/h10_gk1_de6_image5.png",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hình D",
            "image": "/assets/hoa10/midterm/h10_gk1_de6_image6.png",
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
        "id": "hoa10_gk1_de06_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình dạng AO nào sau đây biểu diễn AO p<sub>x</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de6_image7.png",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de6_image8.png",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de6_image9.png",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de6_image10.png",
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
        "id": "hoa10_gk1_de06_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tử các nguyên tố có nhiều nhất 8 electron lớp ngoài cùng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các nguyên tố được xếp thành một hàng có số phân lớp electron bằng nhau",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lớp electron thứ nhất liên kết chặt chẽ với hạt nhân nhất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Từ cấu hình electron nguyên tử có thể dự đoán loại nguyên tố",
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
        "id": "hoa10_gk1_de06_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số thứ tự ô nguyên tố không cho biết",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số proton trong hạt nhân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số neutron trong hạt nhân",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số hiệu nguyên tử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số electron ở lớp vỏ",
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
        "id": "hoa10_gk1_de06_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của các nguyên tố trong cùng một nhóm A (trừ He) có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số lớp electron",
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
            "text": "số electron ở phân lớp ngoài cùng",
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
        "id": "hoa10_gk1_de06_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng khi nói về mô hình Rutherford – Bohr?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Electron trên lớp K có năng lượng cao hơn trên lớp L",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Electron trên lớp M có năng lượng cao hơn trên lớp K",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron ở lớp K gần hạt nhân hơn so với electron ở lớp L",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Electron ở lớp M xa hạt nhân hơn so với electron ở lớp L",
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
        "id": "hoa10_gk1_de06_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử F có 9 electron. Theo mô hình Rutherford – Bohr, tỉ lệ số lượng electron trên lớp thứ hai so với số lượng electron trên lớp thứ nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2 : 12",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "7 : 2",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "5 : 2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2 : 7",
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
        "id": "hoa10_gk1_de06_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn, các nguyên tố được sắp xếp không theo nguyên tắc nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Theo chiều tăng của điện tích hạt nhân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp thành một hàng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp thành một cột",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Theo chiều tăng khối lượng nguyên tử",
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
        "id": "hoa10_gk1_de06_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp nguyên tố nào sau đây có tính chất tương tự nhau?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "S (Z = 16) và Cl (Z = 17)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na (Z = 11) và K (Z = 19)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ca (Z = 20) và Al (Z = 13)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mg (Z = 12) và S (Z = 16)",
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
        "id": "hoa10_gk1_de06_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các cấu hình electron của nguyên tử sau đây:<br/>(a) 22621s2s2p3s (b) 226261s2s2p3s3p<br/>(c) 2262610251s2s2p3s3p3d4s4p (d) 2221s2s2p<br/>Có bao nhiêu cấu hình electron nguyên tử là phi kim?",
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
        "displayNumber": 17
      },
      {
        "id": "hoa10_gk1_de06_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu về nguyên tử <sup>52</sup><sub>24</sub>X :<br/>(1) X có tổng các hạt mang điện nhiều hơn số hạt không mang điện là 20.<br/>(2) X có số hạt neutron nhiều hơn proton là 4.<br/>(3) X có 4 lớp electron.<br/>(4) Cấu hình electron của X là [Ar]3d<sup>4</sup>4s<sup>2</sup>.<br/>(5) X là kim loại.<br/>Số phát biểu đúng là",
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
            "text": "1",
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
        "id": "hoa10_gk1_de06_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Trong lịch sử các thuyết về mô hình nguyên tử có mô hình hành tinh nguyên tử (mô hình Rutherford - Bohr) và mô hình hiện đại của nguyên tử.",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de6_image16.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong mô hình (1) electron chuyển động theo quỹ đạo hình tròn xung quanh hạt nhân.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong mô hình (2) electron chuyển động không theo quỹ đạo cố định xung quanh hạt nhân.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mô hình (1) thể hiện mô hình hiện đại của nguyên tử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mô hình (2) thể hiện mô hình hành tinh của nguyên tử.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Hình (1) thể hiện mô hình hành tinh nguyên tử. Trong mô hình này các electron chuyển động theo quỹ đạo giống như các hành tinh quay xung quanh mặt trời.<br/>Hình (2) thể hiện mô hình hiện đại của nguyên tử. Trong mô hình hiện đại của nguyên tử các electron chuyển động không theo quỹ đạo cố định.<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai.<br/>d. Sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de06_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cấu hình electron của nguyên tử nguyên tố X có dạng 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup>.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X ở ô số 15 trong bảng tuần hoàn.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X là một phi kim.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử của nguyên tố X có 9 electron p.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử của nguyên tố X có 3 phân lớp electron.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. 5 phân lớp e: 1s; 2s; 2p; 3s; 3p.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de06_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số lượng nguyên tố của một chu kì phụ thuộc vào số electron tối đa điền đầy vào các phân lớp trong cùng một lớp.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hai nguyên tố kế tiếp nhau trong cùng một chu kì có số đơn vị điện tích hạt nhân hơn kém 1 đơn vị.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong một chu kì, nguyên tố sẽ có cùng số phân lớp electron.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các nguyên tố có phân lớp 3d sẽ thuộc chu kì 3.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Lấy ví dụ chu kì 4 sẽ hoàn thiện các phân lớp 4s, 4p (tổng số electron tối đa trên các phân lớp này là 8 electron) và cả phân lớp 3d (tối đa 10 electron) nên chu kì 4 có 18 nguyên tố.<br/>b. Đúng.<br/>c. Sai. Trong một chu kì, các nguyên tố có cùng số lớp electron.<br/>d. Sai. Các nguyên tố có phân lớp 3d thì chu kì lớn hơn 3.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de06_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Chlorine trong tự nhiên gồm hai đồng vị: 75,76% 35Cl (khối lượng nguyên tử là 34,9688 amu) và 24,24% 37Cl (khối lượng nguyên tử là 36,9659 amu). Oxygen trong tự nhiên gồm 3 đồng vị: 99,757% 16O (khối lượng nguyên tử là 15,9949 amu), 0,0038% 17O (khối lượng nguyên tử là 16,9991 amu), 0,205% 18O (khối lượng nguyên tử là 17,9991 amu). Các hợp chất dichlorine monoxide Cl<sub>2</sub>O được tạo thành từ hai nguyên tử chlorine và một nguyên tử oxygen liên kết với nhau.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có 9 loại phân tử Cl<sub>2</sub>O có khối lượng khác nhau tồn tại trong tự nhiên.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử khối trung bình của Cl và O lần lượt là 36 và 16.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phân tử khối của loại Cl<sub>2</sub>O tồn tại ít nhất trong tự nhiên là 90,9309.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tử khối của loại Cl<sub>2</sub>O tồn tại nhiều nhất trong tự nhiên là 85,9325.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng. Có 3 cách chọn đồng vị Cl và 3 cách chọn đồng vị O 3.3 = 9 phân tử Cl<sub>2</sub>O.<br/>b. Sai. Giá trị nguyên tử khối trung bình không phải là số nguyên.<br/>c. Đúng. M = 36,9659.2 + 16,9991 = 90,9309.<br/>d. Đúng. M = 34,9688.2 + 15,9949 = 85,9325.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de06_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Trong bảng tuần hoàn hóa học, các nhóm B có bao nhiêu cột?",
        "images": [],
        "correctAnswer": "10",
        "explanation": "Đáp án: 10.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de06_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Phổ khối lượng của zirconium được biểu diễn như hình sau đây (điện tích z của các đồng vị zirconium đều bằng 1+).<br/>Số lượng đồng vị bền của zirconium là bao nhiêu?",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de6_image22.png"
        ],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de06_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Calcium (Ca) là nguyên tố kim loại chiếm khối lượng nhiều nhất trong cơ thể con người. Răng và xương là các bộ phận chứa nhiều calcium nhất. Số hiệu nguyên tử của Ca là 20. Nguyên tử Ca có bao nhiêu lớp electron?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de06_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Một ion M<sup>3+</sup> có tổng số hạt proton, neutron, electron là 80, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 20. Số hiệu nguyên tử của nguyên tử M là bao nhiêu?",
        "images": [],
        "correctAnswer": "26",
        "explanation": "Đáp án: 26.<br/>2ZN802Z262ZN202N30+=+=ììÞíí-=+=îî",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de06_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Một nguyên tố mà nguyên tử có 4 lớp electron, có phân lớp d, lớp ngoài cùng đã bão hòa electron. Tổng số electron s và electron p của nguyên tố này là bao nhiêu?",
        "images": [],
        "correctAnswer": "20",
        "explanation": "Đáp án: 20.<br/>Cấu hình electron của nguyên tố này có dạng: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>x</sup>4s<sup>2</sup>.<br/>Vậy tổng số electron s và electron p của nguyên tố là: 2 + 2 + 6 + 2 + 6 + 2 = 20.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de06_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử Fe ở 20<sup>o</sup>C có khối lượng riêng là 7,87 g/cm<sup>3</sup>. Với giả thiết này, tinh thể nguyên tử Fe là những hình cầu chiếm 75% thể tích tinh thể, phần còn lại là những khe rỗng giữa các quả cầu. Cho biết khối lượng nguyên tử của Fe là 55,847. Tính bán kính nguyên tử gần đúng của Fe theo đơn vị angstrom biết 10110Åm-= . (Kết quả làm tròn đến hàng phần trăm).",
        "images": [],
        "correctAnswer": "1.28",
        "explanation": "Đáp án: 1,28.<br/>Thể tích của 1 mol Fe là: 55,847 : 7,87 = 7,096 cm<sup>3</sup><br/>Thể tích của một nguyên tử Fe là:<br/><br/>Bán kính gần đúng của nguyên tử Fe là:<br/><br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa10/midterm/h10_gk1_de6_image25.png",
          "/assets/hoa10/midterm/h10_gk1_de6_image26.png"
        ],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa10_gk1_de07",
    "code": "H10-GK1-07",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de07_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương pháp nghiên cứu vấn đề dựa trên kết quả thí nghiệm, khảo sát, thu thập số liệu, phân tích, định lượng … được gọi là phương pháp",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nghiên cứu lí thuyết",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nghiên cứu thực nghiệm",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nghiên cứu ứng dụng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nghiên cứu lí luận",
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
        "id": "hoa10_gk1_de07_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào dưới đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hạt nhân của tất cả các nguyên tử đều có 2 loại hạt là proton và neutron",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thí nghiệm bắn phá lá vàng của Rutherford cho thấy nguyên tử có cấu tạo rỗng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử trung hòa về điện",
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
        "id": "hoa10_gk1_de07_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố magnesium có số hiệu nguyên tử là 12. Magnesium thuộc loại nguyên tố nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tố s",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tố p",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tố d",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tố f",
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
        "id": "hoa10_gk1_de07_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "X và Y là đồng vị của cùng một nguyên tố hóa học. Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X và Y có cùng số hạt neutron và khác số hạt proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X và Y có cùng số hạt neutron và khác số hạt electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X và Y có cùng số hạt proton và khác số hạt electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X và Y có cùng số hạt proton và khác số hạt neutron",
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
        "id": "hoa10_gk1_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bảng tuần hoàn hiện nay có bao nhiêu cột?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "8",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "16",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "9",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "18",
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
        "id": "hoa10_gk1_de07_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp thành một hàng, gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "bảng tuần hoàn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ô nguyên tố",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhóm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì",
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
        "id": "hoa10_gk1_de07_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho kí hiệu nguyên tử <sup>16</sup><sub>8</sub>O . Khẳng định nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kí hiệu hóa học của nguyên tố là O",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số hiệu nguyên tử là 16",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số proton trong một hạt nhân nguyên tử là 8",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số neutron trong một hạt nhân nguyên tử là 8",
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
        "id": "hoa10_gk1_de07_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Electron thuộc lớp nào sau đây liên kết chặt chẽ nhất với hạt nhân?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lớp N",
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
            "text": "Lớp K",
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
        "id": "hoa10_gk1_de07_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cấu hình electron nguyên tử của các nguyên tố sau:<br/>X: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>Y: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup><br/>Z: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup>T: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>7</sup>4s<sup>2</sup><br/>Các nguyên tử của nguyên tố kim loại là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X, Y, Z",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X, Y, T",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Y, Z, T",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X, Z, T",
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
        "id": "hoa10_gk1_de07_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tố thuộc cùng một nhóm A (trừ He) trong bảng tuần hoàn sẽ có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số electron hóa trị",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số hiệu nguyên tử",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số lớp electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số khối",
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
        "id": "hoa10_gk1_de07_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chu kì 4 của bảng tuần hoàn có số nguyên tố là",
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
            "text": "18",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "32",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "8",
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
        "id": "hoa10_gk1_de07_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một nguyên tố hóa học X ở chu kì 3, nhóm IVA. Cấu hình electron của nguyên tử X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>2</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup>",
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
        "id": "hoa10_gk1_de07_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một nguyên tử nitrogen có 7 proton, 7 electron và 8 neutron. Khối lượng nguyên tử này (theo đơn vị amu) có giá trị gần bằng với giá trị nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "14,00",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "15,00",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "25,00",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "16,00",
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
        "id": "hoa10_gk1_de07_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dựa vào mô hình nguyên tử Rutherford – Bohr, hãy cho biết phát biểu nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số lượng electron tối đa trên các lớp là như nhau",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Năng lượng của các electron trên các lớp khác nhau có thể bằng nhau",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi quay quanh hạt nhân theo một quỹ đạo xác định, năng lượng của electron là không đổi",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Electron ở gần hạt nhân nhất có năng lượng cao nhất",
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
        "id": "hoa10_gk1_de07_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các nguyên tử N (Z = 7), O (Z = 8), F (Z = 9) và Ne (Z = 10), nguyên tử có nhiều electron độc thân nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "F",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ne",
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
        "id": "hoa10_gk1_de07_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron của nguyên tử X là [Ar] 3d<sup>8</sup>4s<sup>2</sup>. Vị trí của X trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ô số 26, chu kì 3, nhóm VIIIB",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ô số 26, chu kì 3, nhóm VIIIA",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ô số 28, chu kì 4, nhóm VIIIA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ô số 28, chu kì 4, nhóm VIIIB",
            "isCorrect": true
          }
        ],
        "correctAnswer": "B",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_gk1_de07_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của nguyên tố X có electron ở mức năng lượng cao nhất là 2p. Nguyên tử của nguyên tố Y cũng có electron ở mức năng lượng 2p và có một electron ở lớp ngoài cùng. Nguyên tử X và Y có số electron hơn kém nhau là 2. Nguyên tố X, Y lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "kim loại và kim loại",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phi kim và kim loại",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "kim loại và khí hiếm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "khí hiếm và kim loại",
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
        "id": "hoa10_gk1_de07_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một nguyên tử R có tổng số hạt là 34. Trong đó số hạt mang điện gấp 1,8333 lần số hạt không mang điện. Phát biểu nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "R thuộc chu kì 3, nhóm IIIA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "R có tổng số hạt mang điện là 20",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "R là nguyên tố phi kim",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "R có 1 electron ở lớp ngoài cùng",
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
        "id": "hoa10_gk1_de07_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Hình 2.3 và 2.4 dưới đây mô tả thí nghiệm của nhà vật lí người New Zealand E.Rutherford khi khám phát hạt nhân nguyên tử.",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de7_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở hình 2.4, hầu hết các hạt alpha xuyên qua lá vàng chứng tỏ nguyên tử có cấu trúc rỗng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thí nghiệm trên đã phát hiện ra hạt proton và neutron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Va chạm khiến cho một phần nhỏ các hạt alpha bật ngược trở lại trước lá vàng là do tiếp cận gần, trực diện với hạt nhân nguyên tử vàng nên bị đẩy mạnh trở lại.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Một số ít các hạt alpha bị tán xạ với các góc lệch khác nhau chứng tỏ các hạt alpha này đã tương tác với các hạt nhân mang điện tích âm nằm trong nguyên tử vàng.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Chỉ phát hiện ra hạt proton.<br/>c. Đúng.<br/>d. Sai. Hạt nhân mang điện tích dương.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de07_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số lượng orbital trong các phân lớp 1s, 2s, 3s là bằng nhau.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số lượng electron tối đa trong một lớp là 2n<sup>2</sup> (n < 5).",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số lượng các orbital trong một phân lớp (s, p, d, f) luôn là một số lẻ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các electron trên các phân lớp 3s, 3p, 3d có năng lượng bằng nhau.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Các electron trên các phân lớp 3s, 3p, 3d có năng lượng gần bằng nhau.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de07_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tử nguyên tố X có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X là một phi kim.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X ở ô số 18, chu kì 3, nhóm VIA trong bảng tuần hoàn các nguyên tố hóa học.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử của nguyên tố X có 12 electron p.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử của nguyên tố X có 3 phân lớp electron.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. X là khí hiếm.<br/>b. Sai. X nằm ở nhóm VIIIA.<br/>c. Đúng.<br/>d. Sai. X có các phân lớp 1s, 2s, 2p, 3s, 3p.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de07_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Bromine (Br, Z = 35) là chất lỏng màu nâu đỏ, dễ bay hơi, mùi khó chịu và độc. Do nguyên tố này có tính ổn định thấp hơn khi tiếp xúc với ánh sáng. Do đó hóa chất hồ bơi này không thực sự phù hợp để xử lý nước bể bơi ngoài trời. Thay vào đó chỉ nên sử dụng cho những bể bơi trong nhà hay bể bơi có mái che. Dựa vào phổ khối lượng của Bromine trong tự nhiên (Hình 4).",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de7_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bromine có 2 đồng vị bền là 79813535Br vàBr .",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử khối của Bromine là 80,01.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số loại phân tử Br<sub>2</sub> khác nhau được tạo thành từ các đồng vị trên là 3.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu coi mỗi nguyên tử Bromine là một quả cầu thì trong 32,00 gam Br<sub>2</sub> có 1,204.10<sup>23</sup> quả cầu. Biết số Avogadro là 6,022.10<sup>23</sup>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. 79.50,6949,31.81A79,9862100+==<br/>c. Đúng.<br/>d. Sai. Br2n0,2mol=Þ Số nguyên tử Br = 0,2.2. 6,022.10<sup>23</sup> = 2,41.10<sup>23</sup>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de07_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Oxygen là nguyên tố chiếm tỉ lệ phần trăm khối lượng cao nhất trong cơ thể con người (khoảng 65%). Cho biết để hình thành ion O<sup>2–</sup>, nguyên tử O sẽ nhận thêm electron bao nhiêu electron?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de07_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Số phân lớp bão hòa trong các phân lớp sau đây: 1s<sup>2</sup>; 2s<sup>2</sup>; 2p<sup>3</sup>; 3d<sup>10</sup>; 3p<sup>4</sup>; 4f<sup>12</sup>?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de07_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cấu hình electron của một nguyên tử được biểu diễn dưới dạng các ô orbital như sau:<br/>Số electron hóa trị của nguyên tố này là bao nhiêu?",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de7_image6.png"
        ],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de07_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Copper (Cu) có hai đồng vị 6329 Cu và 6529 Cu. Nguyên tử khối trung bình của copper là 63,54. Phần trăm số nguyên tử của đồng vị 6329 Cu là a%. Giá trị của a là bao nhiêu %?",
        "images": [],
        "correctAnswer": "73",
        "explanation": "Đáp án: 73.<br/>63.a65.(100a)A63,54a73100+-==Þ=",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de07_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Ở trạng thái cơ bản, lớp N của nguyên tử nguyên tố X có 5 electron. Số thứ tự ô nguyên tố của X trong bảng tuần hoàn là bao nhiêu?",
        "images": [],
        "correctAnswer": "33",
        "explanation": "Đáp án: 33.<br/>Lớp N là lớp 4 cấu hình của X là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de07_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Ở trạng thái cơ bản, nguyên tử M có phân lớp electron điền sau cùng là 3d<sup>8</sup>. Tổng số electron ở các phân lớp s của nguyên tử M là bao nhiêu?",
        "images": [],
        "correctAnswer": "8",
        "explanation": "Đáp án: 8<br/>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>8</sup>4s<sup>2</sup>.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa10_gk1_de08",
    "code": "H10-GK1-08",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de08_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Lĩnh vực nào sau đây không phải là ứng dụng của hóa hoc?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tạo ra vật liệu xây dựng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thiết kế công trình xây dựng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nghiên cứu thuốc chữa bệnh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nghiên cứu phân bón cho cây trồng",
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
        "id": "hoa10_gk1_de08_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nguyên tử, loại hạt nào sau đây mang điện tích âm và có khối lượng xấp xỉ 0,00055 amu?",
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
            "text": "Neutron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Proton và neutron",
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
        "id": "hoa10_gk1_de08_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biết rằng tổng số hạt proton, neutron, electron của một nguyên tử X là 20. Tổng số phân lớp electron trong nguyên tử của nguyên tố X là",
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
            "text": "4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "5",
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
        "id": "hoa10_gk1_de08_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử A có 12 electron, 12 neutron. Kí hiệu của nguyên tử A là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "<sup>25</sup><sub>12</sub>A",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "<sup>25</sup><sub>12</sub>A",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "<sup>24</sup><sub>12</sub>A",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "<sup>24</sup><sub>12</sub>A",
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
        "id": "hoa10_gk1_de08_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự phân bố electron vào các lớp và phân lớp căn cứ vào",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nguyên tử khối tăng dần",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "điện tích hạt nhân tăng dần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số khối tăng dần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "mức năng lượng electron",
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
        "id": "hoa10_gk1_de08_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình dạng của orbital p là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hình bầu dục",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hình cầu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hình tròn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hình số 8 nổi",
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
        "id": "hoa10_gk1_de08_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số lượng nguyên tố thuộc chu kì 2 và 4 của bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "8 và 16",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "8 và 16",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "8 và 18",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "10 và 18",
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
        "id": "hoa10_gk1_de08_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào đúng khi nói về các orbital trong một phân lớp electron?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có sự định hướng không gian",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có cùng mức năng lượng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khác nhau về mức năng lượng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có hình dạng không phụ thuộc vào đặc điểm mỗi phân lớp",
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
        "id": "hoa10_gk1_de08_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 1 mol kim loại X. Phát biểu nào dưới đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 mol X chứa số lượng nguyên tử bằng số lượng nguyên tử trong 1 mol nguyên tử hydrogen",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1 mol X chứa số lượng nguyên tử bằng số lượng nguyên tử trong 112 mol nguyên tử carbon",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1 mol X có khối lượng bằng khối lượng 1 mol hydrogen",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 mol X có khối lượng bằng 12 khối lượng 1 mol carbon",
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
        "id": "hoa10_gk1_de08_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tử thuộc cùng một nguyên tố hóa học đều có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số neutron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số khối",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số proton",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "khối lượng nguyên tử",
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
        "id": "hoa10_gk1_de08_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nguyên tử chlorine (Z = 17), số electron ở phân mức năng lượng cao nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "7",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "5",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "9",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2",
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
        "id": "hoa10_gk1_de08_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhóm A gồm các nguyên tố kim loại, phi kim và khí hiếm",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tố có cấu hình electron 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup> là nguyên tố p",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong nguyên tử, electron hóa trị là những electron ở lớp ngoài cùng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhóm là tập hợp những nguyên tử có cùng số electron ở lớp ngoài cùng",
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
        "id": "hoa10_gk1_de08_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các cấu hình electron sau:<br/>(1) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup><br/>(2) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup><br/>(3) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup><br/>(4) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup><br/>(5) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>5</sup> 4s<sup>2</sup><br/>(6) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup><br/>Số cấu hình electron của nguyên tố phi kim là",
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
            "text": "5",
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
            "text": "2",
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
        "id": "hoa10_gk1_de08_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình dưới đây mô tả bảng tuần hoàn mô phỏng:<br/>Cho biết hàng ngang trong bảng tuần hoàn được gọi là gì?",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de8_image8.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chu kỳ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kim loại kiềm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ô nguyên tố",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhóm nguyên tố",
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
        "id": "hoa10_gk1_de08_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận xét nào đúng về sự sắp xếp electron trên các orbital của nguyên tử dưới đây?",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de8_image9.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả hai mũi tên trong ô 2p phải hướng lên trên",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sự sắp xếp các electron trên các orbital của nguyên tử trên là hoàn toàn chính xác",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong orbital 2p chỉ nên có 1 electron trong ô 2p đầu tiên và một electron trong ô 2p thứ hai",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cả hai mũi tên trong ô 1s phải hướng xuống dưới",
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
        "id": "hoa10_gk1_de08_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử Y có cấu hình electron [Ar] 3d<sup>10</sup>4s<sup>1</sup>. Nguyên tố Y thuộc",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 4, nhóm IA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 4, nhóm IB",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 4, nhóm VIIIA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 4, nhóm VIIIB",
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
        "id": "hoa10_gk1_de08_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đặc điểm nào sau đây là sự khác nhau giữa mô hình của Rutherford – Bohr với mô hình hiện đại mô tả sự chuyển động của electron trong nguyên tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Quỹ đạo chuyển động của electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Electron chuyển động xung quanh hạt nhân",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron tạo thành lớp vỏ nguyên tử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Electron mang điện tích âm",
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
        "id": "hoa10_gk1_de08_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của nguyên tố X có cấu hình [Ne]3s<sup>2</sup>3p<sup>5</sup>. Y là nguyên tố đứng kế tiếp nguyên tố X trong cùng một chu kì (Z<sub>Y</sub> > Z<sub>X</sub>). Phát biểu nào sau đây là không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X thuộc nhóm VIIA trong bảng tuần hoàn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X và Y đều là những nguyên tố phi kim",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Y thuộc nhóm VIIIA trong bảng tuần hoàn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các electron trên các phân lớp của nguyên tử Y đã bão hòa",
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
        "id": "hoa10_gk1_de08_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong nguyên tử, khối lượng tập trung chủ yếu ở hạt nhân.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kích thước hạt nhân rất nhỏ so với kích thước nguyên tử.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong nguyên tử, phần không gian rỗng chiếm chủ yếu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong thí nghiệm của Thomson, hạt tạo nên tia âm cực là hạt proton.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Trong thí nghiệm của Thomson, hạt tạo nên tia âm cực là hạt electron.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de08_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Ở trạng thái cơ bản, nguyên tử X có 3 lớp electron và có 3 electron ở phân lớp ngoài cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lớp ngoài cùng của nguyên tử X có 3 electron.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hạt nhân nguyên tử X có 16 proton.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong bảng tuần hoàn, X thuộc chu kì 3, nhóm IIIA.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X là nguyên tố kim loại.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Cấu hình electron: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup> (có 3 electron độc thân ở phân lớp 3p)<br/>a. Sai. Có 5 electron lớp ngoài cùng.<br/>b. Sai. Có 15 proton.<br/>c. Sai. Chu kì 3, nhóm VA.<br/>d. Sai. Nguyên tố phi kim.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de08_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Theo lí thuyết hiện đại về nguyên tử, lớp vỏ nguyên tử được tạo thành bởi các electron phân bố trong các orbital thuộc các lớp và các phân lớp.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các orbital 3p<sub>x</sub>, 3p<sub>y</sub> và 3p<sub>z</sub> có cùng hình dạng và có năng lượng bằng nhau.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các orbital 2s và orbital 3s có cùng hình dạng nhưng orbital 3s có bán kính lớn hơn.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các orbiatl 2p<sub>x</sub> và orbital 3p<sub>x</sub> đều có dạng hình quả tạ đôi và phân bố trên trục Ox với tâm là hạt nhân nguyên tử.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số electron tối đa phân bố trong orbital 2p<sub>x</sub> là 6 electron.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Phần lớp 2p có 3 AO px, py, pz. Trong mỗi AO 2px có 2e.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de08_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bảng tuần hoàn hóa học có 7 chu kì trong đó có 4 chu kì nhỏ và 3 chu kì lớn.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tất cả các nguyên tố nhóm A đều có số electron lớp ngoài cùng bằng số thứ tự của nhóm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mendeleev đã xây dựng bảng tuần hoàn bằng cách sắp xếp các nguyên tố theo chiều tăng dần điện tích hạt nhân.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các nguyên tố khối d và f còn được gọi là các nguyên tố kim loại chuyển tiếp.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Có 3 chu kì nhỏ và 4 chu kì lớn.<br/>b. Sai. Helium có 2e ở lớp ngoài cùng nhưng xếp vào nhóm VIIIA.<br/>c. Sai. Dựa trên khối lượng nguyên tử.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de08_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Hợp kim của nguyên tố Y được dùng làm vỏ máy bay do có đặc tính nhẹ, bền, Y cũng được sử dụng làm dây dẫn điện trên cao do có khả năng dẫn điện tốt. Nguyên tử Y có 7 electron ở phân lớp p. Số electron ở lớp ngoài cùng của nguyên tử Y là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Y có cấu hình: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de08_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Ở trạng thái cơ bản, số orbital tối đa trong lớp M là bao nhiêu?",
        "images": [],
        "correctAnswer": "9",
        "explanation": "Đáp án: 9.<br/>Lớp M (lớp 3) có 3s, 3p, 3d ứng với số AO là 1 + 3 + 5 = 9.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de08_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các hạt có thành phần như sau:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\"></th><th class=\"px-2 py-1 border border-slate-300\">Số electron</th><th class=\"px-2 py-1 border border-slate-300\">Số proton</th><th class=\"px-2 py-1 border border-slate-300\">Số neutron</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">A</td><td class=\"px-2 py-1 border border-slate-300\">7</td><td class=\"px-2 py-1 border border-slate-300\">7</td><td class=\"px-2 py-1 border border-slate-300\">7</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">B</td><td class=\"px-2 py-1 border border-slate-300\">10</td><td class=\"px-2 py-1 border border-slate-300\">11</td><td class=\"px-2 py-1 border border-slate-300\">12</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">C</td><td class=\"px-2 py-1 border border-slate-300\">18</td><td class=\"px-2 py-1 border border-slate-300\">17</td><td class=\"px-2 py-1 border border-slate-300\">18</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">D</td><td class=\"px-2 py-1 border border-slate-300\">20</td><td class=\"px-2 py-1 border border-slate-300\">18</td><td class=\"px-2 py-1 border border-slate-300\">20</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">E</td><td class=\"px-2 py-1 border border-slate-300\">13</td><td class=\"px-2 py-1 border border-slate-300\">13</td><td class=\"px-2 py-1 border border-slate-300\">14</td></tr></table></div><br/>Trong các hạt trên, có bao nhiêu hạt là ion?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Ion là các hạt được tạo ra từ nguyên tử nhường hoặc nhận electron nên có số hạt proton và electron khác nhau B, C, D là các hạt ion.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de08_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 6 nguyên tố có số hiệu nguyên tử lần lượt là 4, 9, 12, 16, 18, 20. Trong các nguyên tố trên. có bao nhiêu nguyên tố có cùng 2 electron hóa trị?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de08_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tố A dùng để chế tạo đèn có độ sáng cao. Nguyên tử A có electron ở phân lớp 3d chỉ bằng một nửa phân lớp 4s. Số hiệu nguyên tử của nguyên tố A là bao nhiêu?",
        "images": [],
        "correctAnswer": "21",
        "explanation": "Đáp án: 21.<br/>Số electron tối đa của phân lớp 4s là 4s<sup>2</sup> Số electron ở phân lớp 3d là 3d<sup>1</sup>.<br/>Cấu hình của nguyên tử A là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>1</sup>4s<sup>2</sup> có 21 e.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de08_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Trong tự nhiên chlorine (Cl) có hai đồng vị bền là <sup>35</sup>Cl và <sup>37</sup>Cl. Biết nguyên tử khối trung bình của Cl là 35,5 và thành phần phần trăm khối lương của đồng vị <sup>37</sup>Cl trong KClO<sub>x</sub> là 6,678%. Cho nguyên tử khối trung bình của K và O lần lượt là 39 và 16, xem nguyêntử khối mỗi đồng vị có giá trị bằng số khối. Tính giá trị của x.",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>Giả sử ta có <sup>n</sup>KClO<sub>x</sub> = 1 mol → <sup>n</sup>Cl = <sup>n</sup>KClO<sub>x</sub> = 1 mol<br/>Gọi phần trăm số nguyên tử của đồng vị <sup>37</sup>Cl là x<br/>→ phần trăm số nguyên tử của đồng vị <sup>35</sup>Cl là (100 – x)<br/>Ta có: 35,5 = x = 25%<br/>Số mol <sup>37</sup>Cl = 0,25 mol Khối lượng của <sup>37</sup>Cl = 0,25. 37 = 9,25 g<br/>Ta có: 6,678% = .100% x = 4.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa10_gk1_de09",
    "code": "H10-GK1-09",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de09_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ngành nghề nào sau đây không liên quan đến hóa học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mĩ phẩm",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công nghệ thông tin",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dược phẩm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Công nghệ thực phẩm",
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
        "id": "hoa10_gk1_de09_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nguyên tử, hạt mang điện là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "proton và electron",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "proton",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "electron và neutron",
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
        "id": "hoa10_gk1_de09_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự phân bố electron theo ô orbital nào dưới đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de9_image2.png",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de9_image3.png",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de9_image4.png",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de9_image5.png",
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
        "id": "hoa10_gk1_de09_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự phân bố electron vào các lớp và phân lớp căn cứ vào",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "mức năng lượng electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số khối tăng dần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "điện tích hạt nhân tăng dần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nguyên tử khối tăng dần",
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
        "id": "hoa10_gk1_de09_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Lớp vỏ của nguyên tử nguyên tố X có 11 electron. Biết điện tích electron là -1,609.10<sup>-19</sup> C. Điện tích hạt nhân nguyên tử X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "–1,77.10<sup>-18</sup> C",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–1,83.10<sup>-18</sup> C",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+1,83.10<sup>-18</sup> C",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "+1,77.10<sup>-18</sup> C",
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
        "id": "hoa10_gk1_de09_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tổng số nguyên tố có trong chu kì 1 và 3 là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "12",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "18",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "10",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "8",
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
        "id": "hoa10_gk1_de09_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận định nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tử có cấu tạo rỗng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử có kích thước vô cùng nhỏ và trung hòa về điện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khối lượng nguyên tử hầu hết tập trung ở vỏ nguyên tử",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lớp vỏ nguyên tử chứa electron mang điện tích âm",
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
        "id": "hoa10_gk1_de09_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mendeleev sắp xếp các nguyên tố vào bảng dựa trên",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "mối liên hệ giữa khối lượng nguyên tử và tính chất các nguyên tố tương ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tên gọi của các nguyên tố hóa học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "thời điểm khám phá ra nguyên tố hóa học",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cấu trúc của nguyên tử các nguyên tố hóa học",
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
        "id": "hoa10_gk1_de09_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Silicon là một nguyên tố phổ biến và có nhiều ứng dụng trong cuộc sống. Silicon siêu tinh khiết là chất bán dẫn, được dùng trong kĩ thuật vô tuyến và điện tử. Ngoài ra, nguyên tố này còn được sử dụng để chế tạo pin mặt trời nhằm mục đích chuyển đổi năng lượng ánh sáng thành năng lượng điện để cung cấp cho các thiết bị trên tàu vũ trụ. Vị trí của nguyên tố silicon (Z = 14) trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ô 14, chu kì 3, nhóm IVA",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ô 14, chu kì 4, nhóm IVA",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ô 14, chu kì 4, nhóm IIIA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ô 14, chu kì 3, nhóm IIIA",
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
        "id": "hoa10_gk1_de09_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của các nguyên tố trong cùng một nhóm A (trừ He) có cùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số electron hoá trị",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số electron ở phân lớp ngoài cùng",
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
        "displayNumber": 10
      },
      {
        "id": "hoa10_gk1_de09_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hạt nhân của nguyên tử nào có số hạt neutron là 17?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "P3215",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na2311",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K3919",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe5426",
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
        "id": "hoa10_gk1_de09_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các đồng vị của cùng một nguyên tố hóa học là những nguyên tử có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cùng tổng số proton và neutron nhưng khác nhau về số electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cùng số neutron nhưng khác nhau về số proton",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cùng số proton nhưng khác nhau về số khối",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cùng số electron nhưng khác nhau về tổng số proton và neutron",
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
        "id": "hoa10_gk1_de09_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở trạng thái cơ bản cấu hình electron của nguyên tử nguyên tố X là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>. Số electron ở lớp ngoài cùng của nguyên tử nguyên tố X là",
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
            "text": "6",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "5",
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
        "id": "hoa10_gk1_de09_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố calcium thuộc chu kì 4, nhóm IIA. Nhận định nào sau đây là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Calcium là nguyên tố s",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cấu hình electron của calcium là [He] 4s<sup>2</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Calcium có 4 lớp electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Calcium có 2 electron ở lớp ngoài cùng",
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
        "id": "hoa10_gk1_de09_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Oxide (Y) có công thức là X<sub>2</sub>O. Tổng số hạt cơ bản trong (Y) là 92, trong đó tổng số hạt mang điện nhiều hơn số hạt không mang điện là 28. Biết số hiệu nguyên tử của O là 8, nguyên tố X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "K (Z = 19)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na (Z = 11)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ca (Z = 20)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mg (Z = 12)",
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
        "id": "hoa10_gk1_de09_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Năm 1897, nhà vật lý người Anh Joseph John Thomson thực hiện thí nghiệm phóng điện trong ống thủy tinh gần như chân không với hiệu điện thế lớn (15 kV). Mô hình thí nghiệm như hình dưới đây:<br/>Nếu đặt một chong chóng nhẹ trên đường đi của tia âm cực thì chong chóng sẽ quay. Điều này chứng tỏ:",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de9_image10.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tia âm cực mang điện tích âm",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tia âm cực là một loại ánh sáng trắng như ánh sáng mặt trời",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tia âm cực có phương truyền thẳng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tia âm cực là chùm hạt vật chất chuyển động với vận tốc rất lớn",
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
        "id": "hoa10_gk1_de09_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong chu kỳ 2, X là nguyên tố đứng đầu chu kì còn Y là nguyên tố đứng cuối chu kì. Kết luận nào sau đây về X và Y là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X là kim loại, Y là phi kim",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X là phi kim, Y là kim loại",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X là kim loại, Y là khí hiếm",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X là phi kim, Y là khí hiếm",
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
        "id": "hoa10_gk1_de09_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Iron (Fe) là nguyên tố phổ biến thứ 4 trong vỏ trái đất và có trong hemoglobin của máu làm nhiệm vụ vận chuyển oxi, duy trì sự sống. Nguyên tử X có 26 proton trong hạt nhân. Cho các phát biểu sau về iron:<br/>(a) Iron có 26 neutron trong hạt nhân.<br/>(b) Iron thuộc chu kì 4, nhóm VIB.<br/>(c) Iron có điện tích hạt nhân là +26.<br/>(d) Iron hối lượng nguyên tử X là 26 amu.<br/>Trong các phát biểu trên, số phát biểu đúng là",
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
            "text": "2",
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
        "id": "hoa10_gk1_de09_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho mô hình nguyên tử của nguyên tố X như sau:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số khối của nguyên tử X bằng 10.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Điện tích hạt nhân của nguyên tử X là +4.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lớp vỏ nguyên tử X có 3 electron.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử X có thể nhường 1 electron để trở thành ion X<sup>–</sup>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Số của X là 3 + 4 = 7.<br/>b. Sai. Điện tích hạt nhân là +3.<br/>c. Đúng.<br/>d. Sai. X nhưởng e tạo ion dương.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de09_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Hình dưới mô tả orbital (a) và orbital (b) chứa electron trong nguyên tử sodium (Na) ở trạng thái cơ bản. Biết mức năng lượng của orbital (a) cao hơn orbital (b).",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de9_image11.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Orbital (a) và (b) khác nhau về hình dạng và định hướng trong không gian.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Electron trong các orbital (a) và (b) đều thuộc cùng một lớp electron.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Electron trên orbital (a) nằm xa hạt nhân hơn electron trên orbital (b).",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số lượng electron trong orbital (b) gấp ba lần số lượng electron trong orbital (a).",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Vì mức năng lượng khác nhau nên không thuộc cùng một lớp.<br/>c. Đúng.<br/>d. Sai. Phân lớp p<sub>y</sub> chỉ có 2 e nên có cùng số e với phân lớp s.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de09_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "X là một trong những thành phần điều chế nước Javel tẩy trắng quần áo, sợi vải. Y là một khoángchất có ý nghĩa quan trọng đối với sự phát triển của hệ xương khớp. Anion X<sup>–</sup> và cation Y<sup>2+</sup> đều có cấu hình e lớp ngoài cùng là 3s<sup>2</sup>3p<sup>6</sup>.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X và Y là hai nguyên tố thuộc hai chu kì liên tiếp nhau.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X là nguyên tố phi kim, Y là nguyên tố kim loại.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở trạng thái cơ bản, nguyên tử nguyên tố Y không có electron độc thân.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số thứ tự ô nguyên tố của X và Y trong bảng tuần hoàn lần lượt là 19 và 16.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Cấu hình của X 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup> và Y 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup>.<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de09_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên tố hydrogen là một trong những nguyên tố phổ biến trong vũ trụ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hydrogen là nguyên tố duy nhất có đồng vị mà hạt nhân chỉ tạo nên bởi các hạt neutron.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hydrogen là nguyên tố có đồng vị nhẹ nhất.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hydrogen được xem là nguồn năng lượng xanh của tương lai.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nước chỉ tạo nên bởi các đồng vị của 11H.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Chỉ được tạo ra bởi các hạt proton.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Có các đồng vị của H như 123111H,H,H.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de09_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tố carbon nằm ở ô thứ 6 trong bảng hệ thống tuần hoàn. Số electron thuộc lớp L trong nguyên tử nguyên tố carbon là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>Lớp L (n = 2) có 4 electron.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de09_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 6 nguyên tố có số hiệu nguyên tử lần lượt là 2, 8, 11, 13, 19. Trong số các nguyên tố trên, có bao nhiêu nguyên tố thuộc chu kì 3?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de09_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Khí carbon dioxide (CO<sub>2</sub>) là nguyên nhân chính gây nên hiệu ứng nhà kính. Carbon có 2 đồng vị <sup>12</sup><sub>6</sub>C , 136C ; oxygen có 3 đồng vị <sup>16</sup><sub>8</sub>O , 178O , 188O . Có bao nhiêu loại phân tử CO<sub>2</sub> khác nhau tạo thành?",
        "images": [],
        "correctAnswer": "12",
        "explanation": "Đáp án: 12.<br/><sup>12</sup>C <sup>16</sup>O<sup>16</sup>O ; <sup>12</sup>C <sup>17</sup>O<sup>17</sup>O; <sup>12</sup>C <sup>8</sup>O<sup>18</sup>O; <sup>12</sup>C <sup>16</sup>O<sup>17</sup>O; <sup>12</sup>C <sup>16</sup>O<sup>18</sup>O; <sup>12</sup>C <sup>17</sup>O<sup>18</sup>O<br/><sup>13</sup>C<sup>16</sup>O<sup>16</sup>O ; <sup>13</sup>C<sup>17</sup>O<sup>17</sup>O; <sup>13</sup>C<sup>18</sup>O<sup>18</sup>O; <sup>13</sup>C<sup>16</sup>O<sup>17</sup>O; <sup>13</sup>C<sup>16</sup>O<sup>18</sup>O; <sup>13</sup>C<sup>17</sup>O<sup>18</sup>O",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de09_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử của nguyên tố X có 4 lớp electron và có 9 electron hóa trị. Số hiệu nguyên tử của nguyên tố X là bao nhiêu?",
        "images": [],
        "correctAnswer": "27",
        "explanation": "Đáp án: 27.<br/>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>7</sup> 4s<sup>2</sup>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de09_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Hình sau đây là một phần phổ khối lượng của chlorine. Phổ này có hai tín hiệu, là hai đường thẳng xuất phát từ tọa độ 35 và 37 trên trục hoành. Nhờ đó, người ta biết được nguyên tố chlorine có hai đồng vị bền là <sup>35</sup>Cl và <sup>37</sup>Cl. Tỉ lệ số nguyên tử của hai đồng vị <sup>35</sup>Cl và <sup>37</sup>Cl cũng là tỉ lệ độ cao h<sub>1</sub> và h<sub>2</sub> (hay tỉ lệ cường độ tương đối) của hai tín hiệu:<br/>Biết nguyên tử khối trung bình của clorine là 35,46. Tính tỉ lệ \\frac{h_1}{h_2} bằng bao nhiêu? (Kết quả làm tròn đến hàng phần mười).",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de9_image18.png"
        ],
        "correctAnswer": "3.3",
        "explanation": "Đáp án: 3,3.<br/>Gọi phần trăm số nguyên tử của <sup>35</sup>Cl là x%, của <sup>37</sup>Cl là (100 - x)%.<br/>Ā<sub>Cl</sub> = \\frac{35x + 37(100 - x)}{100} = 35,46 ⇒ x = 77%.<br/>Tỉ lệ độ cao tín hiệu: \\frac{h_1}{h_2} = \\frac{x}{100 - x} = \\frac{77}{23} ≈ 3,3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de09_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu nguyên tố thuộc chu kì 4 mà nguyên tử có cấu hình electron ở lớp ngoài cùng là 4s<sup>2</sup>?",
        "images": [],
        "correctAnswer": "9",
        "explanation": "Đáp án: 9.<br/>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>x</sup> 4s<sup>2</sup>.<br/>Các giá trị của x thỏa mãn là 0, 1, 2, 3, 5, 6, 7, 8, 10.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa10_gk1_de10",
    "code": "H10-GK1-10",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
    "badge": "Giữa Kì 1",
    "grade": "10",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa10_gk1_de10_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hạt nhân nguyên tử được tìm ra năm 1911 bằng cách cho hạt α bắn phá một lá vàng mỏng. Thí nghiệm trên được đưa ra đầu tiên do nhà bác học nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "J.J. Thomson (Tôm-xơn)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "E. Rutherford (Rơ-dơ-pho)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "J. Chadwick (Chat-uých)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Newton (Niu-tơn)",
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
        "id": "hoa10_gk1_de10_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đường kính của nguyên tử có cỡ khoảng bao nhiêu?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "10<sup>–8</sup> cm",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "10<sup>–9</sup> cm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "10<sup>–8</sup> m",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "10<sup>–9</sup> m",
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
        "id": "hoa10_gk1_de10_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình vẽ dưới đây mô tả 3 dạng orbital.<br/>Các orbital tương ứng với các hình a), b) và c) là",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de10_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "s, px, py",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "s, py, pz",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "s, px, pz",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "px, py, pz",
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
        "id": "hoa10_gk1_de10_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy nào sau đây gồm các nguyên tử thuộc cùng một nguyên tố hoá học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "<sup>14</sup><sub>6</sub>X , <sup>14</sup><sub>7</sub>Y , <sup>16</sup><sub>8</sub>Z",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "<sup>16</sup><sub>8</sub>Z , 169M , 167G",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "178Q , 169M , 1910E",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "<sup>16</sup><sub>8</sub>Z , 178Q , 188L",
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
        "id": "hoa10_gk1_de10_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho mô hình cấu tạo nguyên tử dưới đây:<br/>Ô nguyên tố nào dưới đây phù hợp với thông tin trong hình trên là",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de10_image11.png",
          "/assets/hoa10/midterm/h10_gk1_de10_image12.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ô nguyên tố A",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ô nguyên tố B",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ô nguyên tố C",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ô nguyên tố D",
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
        "id": "hoa10_gk1_de10_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tố kim loại nhóm IA (trừ H) nằm ở vị trí nào trong bảng tuần hoàn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cột đầu tiên phía bên trái",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở hàng đầu tiên",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cột cuối cùng phía bên phải",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở hàng dưới cùng",
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
        "id": "hoa10_gk1_de10_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong chu kì, các nguyên tố được xếp theo chiều điện tích hạt nhân tăng dần",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong chu kì, các nguyên tố được xếp theo chiều số hiệu nguyên tử tăng dần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử của các nguyên tố cùng chu kì có số electron bằng nhau",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chu kì bao giờ cũng bắt đầu là một kim loại kiềm và kết thúc là một khí hiếm",
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
        "id": "hoa10_gk1_de10_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số khối của một nguyên tử X gấp hai lần số hiệu nguyên tử của nó. X có 4 electron ở phân lớp 2p. Số neutron của X bằng với số neutron của nguyên tử nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "<sup>40</sup><sub>20</sub>Ca",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "<sup>14</sup><sub>7</sub>N",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "157N",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "178O",
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
        "id": "hoa10_gk1_de10_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là không đúng khi nói về nguyên tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong nguyên tử, số hạt proton luôn bằng số hạt electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Điện tích của một nguyên tử có thể có giá trị âm, dương hoặc bằng 0",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khối lượng của một nguyên tử bằng tổng khối lượng của proton, neutron và electron có trong nguyên tử đó",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lớp vỏ nguyên tử tạo nên bởi các electron",
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
        "id": "hoa10_gk1_de10_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương pháp nào dưới đây không phải là phương pháp học tập hóa học nhằm phát triển năng lực hóa học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phương pháp giao tiếp",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phương pháp tìm hiểu lí thuyết",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phương pháp học tập thông qua thực hành thí nghiệm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phương pháp học tập trải nghiệm",
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
        "id": "hoa10_gk1_de10_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, bromine có hai đồng vị là <sup>79</sup><sub>35</sub>Br và <sup>81</sup><sub>35</sub>Br với nguyên tử khối trung bình là 79,92. Số nguyên tử <sup>81</sup><sub>35</sub>Br trong 0,1 mol Br<sub>2</sub> là (coi nguyêntử khối mỗi đồng vị có giá trị bằng số khối và số Avogadro có giá trị bằng 6,022.10<sup>23</sup>).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "5,54.10<sup>23</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "5,54.10<sup>22</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "6,50.10<sup>22</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "6,50.10<sup>23</sup>",
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
        "id": "hoa10_gk1_de10_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số lượng electron tối đa có thể chứa trong lớp electron thứ 2 là bao nhiêu?",
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
            "text": "6",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "8",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "18",
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
        "id": "hoa10_gk1_de10_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một nguyên tử X có tổng số electron ở 2 lớp M và N là 9. Vị trí của nguyên tố đó trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 3, nhóm IA",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 3, nhóm IIA",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 4, nhóm IIA",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 4, nhóm IA",
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
        "id": "hoa10_gk1_de10_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu về mô hình nguyên tử hiện đại:<br/>(a) Trong nguyên tử, electron chuyển động không theo những quỹ đạo xác định trong cả khu vực không gian xung quanh hạt nhân.<br/>(b) Tất cả các AO nguyên tử đều có hình dạng giống nhau.<br/>(c) Mỗi AO nguyên tử chỉ có thể chứa được 1 electron.<br/>(d) Các electron s chuyển động trong các AO có hình số tám nổi.<br/>Số phát biểu đúng là",
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
            "text": "1",
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
        "id": "hoa10_gk1_de10_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một nguyên tử có 8 electron trong lớp vỏ. Sơ đồ nào sau đây biểu diễn cấu hình electron theo ô orbital của nguyên tử nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de10_image19.png",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de10_image20.png",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de10_image21.png",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "image": "/assets/hoa10/midterm/h10_gk1_de10_image22.png",
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
        "id": "hoa10_gk1_de10_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "<sup>60</sup><sub>27</sub>Co được sử dụng nhiều trong điều trị ung thư. Phát biểu nào sau đây là đúng khi nói về nguyên tử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tử có 27 hạt neutron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hạt nhân nguyên tử có điện tích là 27 Coulomb",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số hạt neutron của nguyên tử Co này khác số hạt neutron của các nguyên tử đồng vị khác của Co",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử có 33 electron",
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
        "id": "hoa10_gk1_de10_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cấu hình electron nguyên tử của một số nguyên tố như sau: [Ne]3s<sup>2</sup>, [Ar]3d<sup>10</sup>4s<sup>1</sup>, [Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>5</sup>, [He]2s<sup>2</sup>2p<sup>6</sup>, [Ar]3d<sup>7</sup>4s<sup>2</sup>. Số nguyên tố thuộc nhóm A và nhóm B lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3, 2",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2, 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2, 2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4, 1",
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
        "id": "hoa10_gk1_de10_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một cation M<sup>+</sup> và một anion X<sup>–</sup> có cùng cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>. Phát biểu nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "M và X là hai đồng vị của cùng một nguyên tố",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "M và X có cùng số proton",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "M là một kim loại và X là một phi kim",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "M và X đều thuộc chu kì 2",
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
        "id": "hoa10_gk1_de10_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho bảng khối lượng, điện tích của các loại hạt cấu tạo nên nguyên tử như sau:",
        "images": [
          "/assets/hoa10/midterm/h10_gk1_de10_image24.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Proton mang điện tích dương, nằm trong hạt nhân, khối lượng gần bằng 1 amu.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khối lượng hạt neutron gấp 1839 lần khối lượng hạt electron.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong nguyên tử, hạt electron có khối lượng không đáng kể so với các hạt còn lại.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khối lượng lớp vỏ của nguyên tử 73Li bằng khoảng 0,024% khối lượng của cả nguyên tử 73Li .",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.<br/>Nguyên tử lithium (Li) tạo nên bởi 3p, 4n và 3e<br/>Khối lượng của một nguyên tử Li là: 3.1 + 4.1 = 7 amu<br/>Khối lượng lớp vỏ của Li là: 3.0,00055 = 1,65.10-3 amu<br/>Phần trăm khối lượng lớp vỏ: 1,65.10<sup>-3</sup>.100/7 = 0,024%.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de10_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Chromium (Cr) và các hợp chất của nó được sử dụng nhiều trong các ngành công nghiệp. Nguyên tố Cr nằm ở ô thứ 24 của bảng tuần hoàn, là nguyên tố thuộc nhóm VIB.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cr là nguyên tố chu kì 4.",
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
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử Cr có 6 electron độc thân.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Lớp ngoài cùng là 4s<sup>2</sup> có 2 electron.<br/>c. Đúng. [Ar] 3d<sup>5</sup>4s<sup>1</sup>.<br/>d. Đúng.",
        "explanationImages": [
          "/assets/hoa10/midterm/h10_gk1_de10_image27.png"
        ],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de10_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Một nguyên tử của một nguyên tố có 2 electron ở lớp thứ nhất, 8 electron ở lớp thứ 2 và 8 electron ở lớp thứ 3.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số hiệu nguyên tử của nguyên tố đó là 16.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tổng số electron trong các orbital p là 6.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Không thể xác định được số lượng neutron trong hạt nhân nguyên tử này.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X nằm ở chu kì 3, nhóm VIIIA trong bảng tuần hoàn.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup><br/>a. Sai. Z = 18.<br/>b. Sai. Tổng e trong các AO p là 12.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de10_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cấu hình electron nguyên tử của sulfur (S) và selenium (Se) lần lượt là [Ne]3s<sup>2</sup>3s<sup>4</sup> và [Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>4</sup>.",
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
        "explanation": "Đáp án:<br/>a. Sai. Nhóm VIA.<br/>b. Sai. Bằng nhau.<br/>c. Đúng.<br/>d. Sai. Cả hai đều là nhóm A.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de10_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Bảng tuần hoàn các nguyên tố hóa học có bao nhiêu chu kỳ nhỏ?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_gk1_de10_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Ion 3H+ là một trong số các ion phổ biến được tìm thấy trong vũ trụ. Tổng số hạt proton, neutron và electron của ion này là bao nhiêu?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.<br/>H có 1 proton và 1 electron Tổng số hạt là (1 + 1).3 – 1 = 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_gk1_de10_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "X là một nguyên tố chu kì 3, nguyên tử có 5 electron lớp ngoài cùng. Nguyên tử nguyên tố X có bao nhiêu electron độc thân?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_gk1_de10_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Một nguyên tố mà nguyên tử có 4 lớp electron, có phân lớp d, lớp ngoài cùng chưa bão hòa. Tổng số electron s và electron p của nguyên tố này là bao nhiêu?",
        "images": [],
        "correctAnswer": "19",
        "explanation": "Đáp án: 19.<br/>Cấu hình electron của nguyên tố này có dạng: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>x</sup>4s<sup>1</sup>.<br/>Vậy tổng số electron s và electron p của nguyên tố là: 2 + 2 + 6 + 2 + 6 + 1 = 19.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_gk1_de10_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Các hợp chất của nguyên tố Y được sử dụng như là vật liệu chịu lửa trong các lò sản xuất iron (Fe), thép, kim loại màu, thủy tinh và xi măng. Oxide của Y và các hợp chất khác cũng được sử dụng trong nông nghiệp, công nghiệp hóa chất và xây dựng. Nguyên tử Y có tổng số hạt cơ bản là 36. Số hạt không mang điện bằng một nửa hiệu số giữa tổng số hạt với số hạt mang điện tích âm. Nguyên tử nguyên tố Y có bao nhiêu hạt electron?",
        "images": [],
        "correctAnswer": "12",
        "explanation": "Đáp án: 12.<br/>",
        "explanationImages": [
          "/assets/hoa10/midterm/h10_gk1_de10_image28.png",
          "/assets/hoa10/midterm/h10_gk1_de10_image29.png"
        ],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_gk1_de10_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 6 nguyên tố có số hiệu nguyên tử lần lượt là 10, 13, 16, 18, 19 và 20. Trong số các nguyên tố trên có bao nhiêu nguyên tố kim loại?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      }
    ]
  }
];

export function getMidtermExamById(id: string): Chuong1Exam | undefined {
  return HOA10_MIDTERM_EXAMS.find(e => e.id === id || e.code === id);
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
