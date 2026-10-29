// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI CUỐI HỌC KÌ 1 HÓA HỌC 12 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi Cuối Học Kì 1 Hóa Học Lớp 12 Chuẩn Cấu Trúc 2025
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

export const HOA12_FINAL_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa12_ck1_de01",
    "code": "H12-CK1-01",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de01_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là thành phần chính của chất giặt rửa tổng hợp?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>(CH<sub>2</sub>]<sub>14</sub>COONa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>[CH<sub>2</sub>]<sub>11</sub>C<sub>6</sub>H<sub>4</sub>SOзNa",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>(CH<sub>2</sub>]<sub>16</sub>COOK.",
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
        "id": "hoa12_ck1_de01_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi thủy phân chất béo trong môi trường acid, thu được glycerol và",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "muối chloride.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "acid béo.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "xà phòng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "alcohol đơn chức.",
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
        "id": "hoa12_ck1_de01_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Carbohydrate nào dưới đây không có nhóm -OH hemiacetal (hoặc hemiketal)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Glucose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fructose",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Maltose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Saccharose.",
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
        "id": "hoa12_ck1_de01_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất X được tạo thành trong cây xanh nhờ quá trình quang hợp, điều kiện thường, X là chất rắn vô định hình. Thủy phân X nhờ xúc tác acid hoặc enzyme, thu được chất Y có ứng dụng làm thuốc tăng lực trong y học. Chất X và Y lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tinh bột và glucose",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tinh bột và saccharose.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cellulose và saccharose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "saccharose và glucose.",
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
        "id": "hoa12_ck1_de01_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên bán hệ thống của amino acid H<sub>2</sub>N-CH<sub>2</sub>-COOH là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2-aminoethanoic acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "aminoacetic acid.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "glycine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "aminoethanoic acid.",
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
        "id": "hoa12_ck1_de01_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một chất hữu cơ X có công thức phân tử C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>, trên phổ IR thấy có tín hiệu số sóng trong vùng  117501670(cm)-- . Cho X vào dung dịch NaOH (loãng, dư), thấy hỗn hợp tách thành 2 lớp riêng biệt; Sau đó đun nhẹ vài phút thấy tạo thành dung dịch không màu, đồng nhất. Vậy X có thể là chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "\\mathrm{HCOOCH}_3",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "\\mathrm{HOCH}_2 \\mathrm{CH}_2 \\mathrm{OH}",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "\\mathrm{HOCH}_2 \\mathrm{CHO}",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "\\mathrm{CH}_3 \\mathrm{COOH} .",
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
        "id": "hoa12_ck1_de01_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 1 số hiện tượng sau:<br/>(a) Sáp nến chảy ra bị đông lại khi nguội.<br/>(b) Sữa bị chua và vón cục khi để hở lâu trong không khí.<br/>(c) Mật ong để lâu ngày thấy có hiện tượng kết tinh.<br/>(d) Đậu phụ được làm từ sữa đậu nành.<br/>Số hiện tượng không có sự đông tụ protein là",
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
            "text": "1.",
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
        "id": "hoa12_ck1_de01_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "LDPE là một chất dẻo dễ tạo màng, có tính dai bền nên được sử dụng làm túi nylon, màng bọc, bao gói thực phẩm. LDPE thuộc nhóm nhựa PE (polyethylene) và thường được nhận biết qua ký hiệu đặc trưng in trên bao bì như hình bên. LDPE được tổng hợp từ monomer nào đây?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de1_image7.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>2</sub>=CH-Cl.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>=CH<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>2</sub>=CH-CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>2</sub>=CH-C<sub>6</sub>H<sub>5</sub>.",
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
        "id": "hoa12_ck1_de01_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau khi lưu hóa, tính đàn hồi của cao su giảm đi.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các polymer có tính dẻo đều được điều chế bằng phản ứng trùng hợp.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Vật liệu composite được tổng hợp từ hai hay nhiều vật liệu khác nhau tạo nên vật liệu mới có tính vượt trội so với các vật liệu thành phần.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Polyacrylonitrile được điều chế bằng phản ứng trùng ngưng.",
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
        "id": "hoa12_ck1_de01_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Polymer nào sau đây trong thành phần chứa nguyên tố nitrogen?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nylon-6,6",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Polybutadiene.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Polyethylene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Poly(vinyl chloride).",
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
        "id": "hoa12_ck1_de01_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các cặp oxi – khử sau trong dãy điện hoá: Mg<sup>2+</sup>/Mg, Al<sup>3+</sup>/Al, Fe<sup>2+</sup>/Fe. Tính khử của các nguyên tố được xếp theo chiều nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mg < Al < Fe",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mg < Fe < Al",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fe < Al < Mg",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Al < Mg < Fe.",
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
        "id": "hoa12_ck1_de01_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp oxi hoá – khử thường chứa hai chất (hoặc ion) có cùng một nguyên tố hoá học nhưng có số oxi hoá khác nhau; dạng oxi hoá chứa nguyên tử của nguyên tố với số oxi hoá ...(1)... và dạng khử chứa nguyên tử của nguyên tố đó với số oxi hoá ...(2)... Thông tin phù hợp điền vào (1) và (2) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cao hơn và thấp hơn.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dương và âm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "thấp hơn và cao hơn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "âm và dương.",
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
        "id": "hoa12_ck1_de01_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Thí nghiệm về phản ứng màu biuret của peptide.<br/>- Bước 1: Cho khoảng 1 mL dung dịch NaOH 30% vào ống nghiệm, nhỏ thêm 2 – 3 giọt dung dịch CuSO<sub>4</sub> 2%, lắc đều.<br/>- Bước 2: Cho khoảng 4 mL dung dịch lòng trắng trứng (polypeptide) vào ống nghiệm, lắc đều.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 1 thu được kết tủa màu xanh lam.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sau bước 2, kết tủa trong bị hoà tan và tạo thành dung dịch có màu vàng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kết quả thí nghiệm chứng tỏ lòng trắng trứng (polypeptide) có nhiều liên kết peptide.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng này có thể dùng để phân biệt lòng trắng trứng với các dipeptide.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Xảy ra phản ứng màu biuret tạo dung dịch màu tím.<br/>c) Đúng.<br/>d) Đúng. Lòng trắng trứng có phản ứng trên còn dipeptide thì không.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de01_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho pin Galvani Zn-Cu hoạt động với phương trình hóa học sau:<br/>2+2+Zn(s) + Cu(aq)Cu(s) + Zn(aq)¾¾®",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điện cực đồng là cực dương.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi pin hoạt động thì khối lượng điện cực đồng giảm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sức điện động chuẩn của pin được tính bằng công thức  2+2+ooopinCu/CuZn/ZnEEE.=-",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sức điện động chuẩn của pin là 1,34V. Sử dụng pin này để thắp sáng một bóng đèn nhỏ với cường độ dòng điện chạy qua là I = 0,02A. Cho biết  Q = n.F = I.t,  trong đó: Q là điện lượng, n là số mol electron đi qua dây dẫn,  I  là cường độ dòng điện (A), t là thời gian (giây), F là hằng số Faraday (F = 96500 C.mol<sup>-1</sup>). Nếu điện cực kẽm hao mòn 0,1 mol do pin phóng điện thì thời gian tối đa mà pin thắp sáng được bóng đèn là 268 giờ. (Kết quả làm tròn đến hàng đơn vị).",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. Trong pin điện, cathode là cực dương.<br/>b) Sai. Khi pin hoạt động, khối lượng điện cực đồng tăng do có đồng bám vào.<br/>c) Đúng.  2+2+ooooopinCathodeAnodeCu/CuZn/ZnEEEEE.=-=-<br/>d) Đúng.  nF0,1.2.96500t965000s268h.I0,02====",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de01_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu đồng phân cấu tạo của amine bậc một có cùng công thức phân tử C<sub>4</sub>H<sub>11</sub>N?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub>;  CH<sub>3</sub>CH<sub>2</sub>CH(NH<sub>2</sub>)CH<sub>3</sub>;<br/>3223CHCHCHNH;CH---  2333NHCHCCH.CH--",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "4"
        ]
      },
      {
        "id": "hoa12_ck1_de01_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Chất béo là nguồn cung cấp năng lượng đáng kể cho cơ thể. Trung bình 1 gam chất béo cung cấp 37,7 kJ. Mỗi ngày, một học sinh trung học phổ thông cần cung cấp 10000 kJ (trong đó năng lượng từ chất béo đóng góp 20%) thì học sinh đó phải ăn bao nhiêu gam chất béo cho phù hợp? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "53",
        "explanation": "Đáp án: 53.<br/>10.000.20% = m.37,7  m = 53 g.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "53"
        ]
      },
      {
        "id": "hoa12_ck1_de01_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phương trình của các phản ứng được đánh số thứ tự dưới đây:<br/>(1)  ()24HSO61052CHOn6nC5nHO¾¾¾®+<br/>Tinh bột<br/>(2) Cao su thiên nhiên  ¾¾®s  Cao su lưu hóa<br/>(3)  ()2CHCH-Na2n||5656CHCHnCHCH¾¾®=<br/>(4)  ()2CHCH-(Nan|3OCOCHnNaOH+¾¾®)2CHCH-3n|OHnCHCOONa+<br/>Xác định dãy bốn số (ví dụ:  1234,4321,¼ ) theo trình tự sắp xếp các phản ứng trên theo tên gọi: phản ứng tăng mạch; phản ứng cắt mạch; phản ứng giữ nguyên mạch; phản ứng phân huỷ.",
        "images": [],
        "correctAnswer": "2341",
        "explanation": "Đáp án: 2341.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "2341"
        ]
      },
      {
        "id": "hoa12_ck1_de01_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Tiến hành sản xuất 2 triệu chai rượu vang 13,8° dung tích 750 mL bằng phương pháp lên men rượu với nguyên liệu là m tấn quả nho tươi (chứa 15% glucose về khối lượng). Biết khối lượng riêng của ethyl alcohol là 0,8 g/mL. Giả thiết trong thành phần quả nho tươi chỉ có glucose bị lên men rượu; hiệu suất toàn bộ quá trình sản xuất là 60%. Tính m. (chỉ làm tròn ở phép tính cuối cùng, làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "3600",
        "explanation": "Đáp án: 3600.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub><br/>Số mol ethanol trong 2 triệu chai rượu vang  25CHOH13,8.750.0,82n3,646.100==  tấn mol<br/>6126CHOn = 1,8 tấn mol   6126CHOm  = 324 tấn  m<sub>nho</sub> =  324360015%.60%=  tấn.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "3600"
        ]
      },
      {
        "id": "hoa12_ck1_de01_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "Cho hai chất có công thức cấu tạo sau: CH<sub>3</sub> – CH<sub>2</sub> – NH<sub>2</sub> và H<sub>2</sub>N – CH<sub>2</sub> – COOH.<br/>a) So sánh nhiệt độ nóng chảy của hai chất trên.<br/>b) Bằng phương pháp hóa học hãy nhận biết hai chất trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Nhiệt độ sôi, nhiệt độ nóng chảy của glycine (H<sub>2</sub>N – CH<sub>2</sub> – COOH) cao hơn ethylamine (CH<sub>3</sub> – CH<sub>2</sub> – NH<sub>2</sub>) do phân tử glycine tồn tại ở dạng ion lưỡng cực.<br/>b) Dùng quỳ tím, ethylamine làm quỳ hóa xanh còn glycine không làm đổi màu quỳ tím.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de01_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "Chromium (Cr) thường được sử dụng để mạ lên kim loại do Cr tạo được lớp phủ sáng bóng. Hãy cho biết thiết bị kim loại được mạ Cr có bền trong môi trường là dung dịch Fe(NO<sub>3</sub>)<sub>2</sub> không. Giải thích. Cho biết thế điện cực chuẩn của cặp Cr<sup>2+</sup>/Cr là –0,910 V.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>22ooFe/FeCr/CrE 0,440V  E 0,910V++=->=- nên Fe<sup>2+</sup> có tính oxi hóa mạnh hơn Cr<sup>2+</sup>, Cr có tính khử mạnh hơn Fe. Vậy ở điều kiện chuẩn phản ứng dưới đây có thể xảy ra:<br/>Cr + Fe(NO<sub>3</sub>)<sub>2</sub> ⟶ Cr(NO<sub>3</sub>)<sub>2</sub> + Fe<br/>Vậy thiết bị kim loại được mạ Cr không bền trong môi trường là dung dịch Fe(NO<sub>3</sub>)<sub>2</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de01_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Để điều chế cao su buna người ta có thể thực hiện theo các sơ đồ biến hóa sau:<br/>H30%H80%H50%H80%26242522(1)(2)(3)(4)CHCHCHOHCHCHCHCHCaosuBuna====¾¾¾®¾¾¾®¾¾¾®=¾¾¾®<br/>a) Viết phương trình phản ứng (4) trong sơ đồ trên.<br/>b) Tính khối lượng ethane cần lấy để có thể điều chế được 5,4 kg cao su Buna theo sơ đồ trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)<br/>b) H<sub>quá trình</sub> = 0,3 × 0,8 × 0,5 × 0,8 × 100% = 9,6%.<br/>46nCH()5,40,1n (mol)54nn==<br/>Áp dụng bảo toàn nguyên tố C, ta có:<br/>2nC<sub>2</sub>H<sub>6</sub>      ⟶    (C<sub>4</sub>H<sub>6</sub>)<sub>n</sub><br/>0,12n0,2n´=       ⟵       0,1(kmol)n<br/>26CHm (thực tế) = 0,2 × 30 ×  1009,6  = 62,5 (kg).<br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa12/final/h12_ck1_de1_image19.png"
        ],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck1_de02",
    "code": "H12-CK1-02",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de02_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, chất tồn tại ở trạng thái khí là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "saccharose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ethyl acetate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "methylamine",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "aniline.",
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
        "id": "hoa12_ck1_de02_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuỷ phân triglyceride (C<sub>15</sub>H<sub>31</sub>COO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub> trong dung dịch NaOH, thu được muối có tên gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sodium palmitate",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sodium acetate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sodium stearate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sodium oleate.",
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
        "id": "hoa12_ck1_de02_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Maltose là một loại disaccharide có nhiều trong mạch nha. Công thức phân tử của maltose là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>.",
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
        "id": "hoa12_ck1_de02_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Fructose có công thức phân tử C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>. Tương tự glucose, fructose tồn tại đồng thời ở dạng mạch hở và dạng mạch vòng (α-fructose và β-fructose) chuyển hóa qua lại như hình sau đây:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th></tr></table></div><br/>Cho các phát biểu sau:<br/>(1) Ở dạng mạch hở, phân tử fructose có 5 nhóm hydroxy và 1 nhóm aldehyde.<br/>(2) Nhóm –OH ở vị trí số 2 trong fructose dạng mạch vòng gọi là –OH hemiketal.<br/>(3) Từ công thức cấu tạo ta thấy, fructose có tính chất của polyalcohol.<br/>(4) Fructose không có nhóm –CH=O, vì vậy fructose không bị oxi hóa bởi thuốc thử Tollens và Cu(OH)<sub>2</sub> trong môi trường kiềm.<br/>Số phát biểu đúng là",
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
            "text": "1.",
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
        "id": "hoa12_ck1_de02_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch của chất nào sau đây có môi trường base?",
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
            "text": ".",
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
            "text": ".",
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
        "id": "hoa12_ck1_de02_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đun nóng acid acetic với isoamyl alcohol (CH<sub>3</sub>)<sub>2</sub>CH-CH<sub>2</sub>CH<sub>2</sub>OH có H<sub>2</sub>SO<sub>4</sub> đặc xúc tác thu được isoamyl acetate (dầu chuối). Lượng dầu chuối thu được từ 132,35 gam acid acetic đun nóng với 200 gam isoamyl alcohol là bao nhiêu gam? (Biết hiệu suất phản ứng đạt 68%)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "97,50.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "195,0.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "292,5.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "159,0.",
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
        "id": "hoa12_ck1_de02_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có bao nhiêu tripeptide mạch hở khi thủy phân hoàn toàn thu được hỗn hợp chỉ gồm glycine, alanine và valine?",
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
            "text": "6",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "7",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "8.",
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
        "id": "hoa12_ck1_de02_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các động vật ăn cỏ như trâu, bò, dê, cừu,.. chuyển hóa cellulose trong thức ăn thành glucose bằng enzyme cellulase để cung cấp năng lượng cho cơ thể. Phản ứng chuyển hóa cellulose thành glucose thuộc loại phản ứng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cắt mạch polymer",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giữ nguyên mạch polymer.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng mạch polymer",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhân đôi mạch polymer.",
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
        "id": "hoa12_ck1_de02_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình sau đây là ký hiệu của 6 polymer nhiệt dẻo phổ biến có thể tái chế<br/>Ký hiệu này được in trên bao bì, vỏ hộp… để giúp nhận biết vật liệu polymer và thuận lợi cho việc thu gom, tái chế. Polymer có ký hiệu số 5 được điều chế bằng phản ứng trùng hợp monomer nào sau đây?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de2_image8.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>2</sub>=CH–Cl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>=CH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>2</sub>=CH–CH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>2</sub>=CH–C<sub>6</sub>H<sub>5</sub>.",
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
        "id": "hoa12_ck1_de02_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đồng trùng hợp buta-1,3-diene và acrylonitrile thu được polymer dùng để sản xuất cao su buna-N.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cao su lưu hóa có cấu trúc mạng không gian.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trùng ngưng buta-1,3-diene thu được polymer dùng để sản xuất cao su buna.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đồng trùng hợp buta-1,3-diene và styrene thu được polymer dùng để sản xuất cao su buna-S.",
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
        "id": "hoa12_ck1_de02_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kí hiệu nào sau đây biểu diễn đúng kí hiệu của cặp oxi hoá – khử?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na/Na<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Al<sup>3+</sup>/Al",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2Cl<sup>-</sup>/Cl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cr<sup>2+</sup>/Cr<sup>3+</sup>.",
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
        "id": "hoa12_ck1_de02_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một pin điện hóa được thiết lập từ hai điện cực tạo bởi hai cặp oxi hóa – khử là  2M/M+ và Ag/Ag<sup>+</sup> . Cho biết:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cặp oxi hóa – khử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Thế điện cực chuẩn E° (V)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">−0,76</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">−0,44</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">−0,257</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">+0,340</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">+0,8</td></tr></table></div><br/>Nếu M là một trong số các kim loại Zn, Fe, Ni, Cu thì sức điện động chuẩn lớn nhất của pin bằng bao nhiêu volt (V)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1,14",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1,24",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1,68",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1,56.",
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
        "id": "hoa12_ck1_de02_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi nấu canh cua hoặc riêu cua thì thấy các tảng \"gạch cua\" nổi lên.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi trộn thịt, cá tươi với muối thì thịt cá đang mềm bị đông cứng lại.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi nấu canh thịt, nếu thêm giấm ăn hoặc quả chua vào thì thịt sẽ nhanh nhừ hơn.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Vai trò xúc tác của enzyme trong các quá trình sinh hoá sẽ có hiệu quả tốt ở nhiệt độ cao.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. Ở nhiệt độ cao, các enzyme bị phân hủy nên mất tính xúc tác.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de02_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Một pin Galvani có cấu tạo như sau:<br/>Trong đó, màng bán thẩm chỉ cho nước và các anion đi qua. Biết rằng thể tích của các dung dịch đều là 0,50 L và nồng độ chất tan trong dung dịch là 1,00 M. Cho biết:  20/ZnZnE+  = -0,76 V;  20/CuCuE+ = +0,340V.",
        "images": [
          "/assets/hoa12/final/h12_ck1_de2_image15.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Suất điện động chuẩn của pin Zn-Cu là 1,1 V.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kim loại đồng đóng vai trò là cực dương (cathode) của pin. Kẽm đóng vai trò là cực âm (anode) của pin vì thế điện cực chuẩn của Zn nhỏ hơn.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Từ giá trị thế điện cực chuẩn của 2 điện cực đồng, kẽm rút ra được tính khử của kẽm yếu hơn đồng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Pin Gavalni gồm điện cực kẽm và điện cực đồng ngăn cách bằng màng bán thấm.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đứng. Eo pin = 0,34 – (–0,76) = 1,1 V.<br/>b) Đúng.<br/>c) Sai. Tính khử của Zn mạnh hơn Cu.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de02_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dãy các chất sau: albumine, ethylamine, methyl acetate, Gly-Val, glucose. Có bao nhiêu chất mà phân tử có chứa nitrogen?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "3"
        ]
      },
      {
        "id": "hoa12_ck1_de02_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất: CH<sub>3</sub>[CH<sub>2</sub>]<sub>14</sub>COONa, CH<sub>3</sub>COONa, (C<sub>15</sub>H<sub>31</sub>COO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub>, CH<sub>3</sub>[CH<sub>2</sub>]<sub>10</sub>CH<sub>2</sub>OSO<sub>3</sub>Na, CH<sub>3</sub>[CH<sub>2</sub>]<sub>16</sub>COOK, CH<sub>3</sub>[CH<sub>2</sub>]<sub>11</sub>C<sub>6</sub>H<sub>4</sub>SO<sub>3</sub>Na. Có bao nhiêu chất là thành phần chính của xà phòng?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "2"
        ]
      },
      {
        "id": "hoa12_ck1_de02_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Tơ cellulose acetate có thành phần chủ yếu là cellulose triacetate và cellulose diacetate được sản xuất theo các phương trình sau:<br/>[C<sub>6</sub>H<sub>7</sub>O<sub>2</sub>(OH)<sub>3</sub>]<sub>n</sub> + 2n(CH<sub>3</sub>CO)<sub>2</sub>O  ¾¾®  [C<sub>6</sub>H<sub>7</sub>O<sub>2</sub>(OCOCH<sub>3</sub>)<sub>2</sub>(OH)]<sub>n</sub> + 2nCH<sub>3</sub>COOH.<br/>[C<sub>6</sub>H<sub>7</sub>O<sub>2</sub>(OH)<sub>3</sub>]<sub>n</sub> + 3n(CH<sub>3</sub>CO)<sub>2</sub>O  ¾¾®  [C<sub>6</sub>H<sub>7</sub>O<sub>2</sub>(OCOCH<sub>3</sub>)<sub>3</sub>]<sub>n</sub> + 3nCH<sub>3</sub>COOH.<br/>Phân tích thành phần nguyên tố của một mẫu tơ cellulose acetate người ta thấy carbon chiếm 49,785% theo khối lượng. Tính số gốc acetate trung bình trong một mắt xích cellulose (kết quả làm tròn đến hàng phần mười)?",
        "images": [],
        "correctAnswer": "2,8",
        "explanation": "Đáp án: 2,8.<br/>()()6723nx3x12.(62x)%C.10049,785x2,8.7C(HO11159x13OCOCHOHx)-+éùÞ==Þ=ëû++-",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "2,8",
          "2.8"
        ]
      },
      {
        "id": "hoa12_ck1_de02_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Quá trình quang hợp tạo ra lương thực, cân bằng lượng khí CO<sub>2</sub> và O<sub>2</sub> trong khí quyển. Giả thuyết quá trình quang hợp tạo ra tinh bột trong hạt gạo xảy ra theo hai giai đoạn sau với hiệu suất cả quá trình đạt 100%:<br/>6CO<sub>2</sub> + 6H<sub>2</sub>O  ¾¾®  C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub><br/>nC<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  ¾¾®  (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>+ nH<sub>2</sub>O<br/>Trên một thửa ruộng có diện tích 720 m<sup>2</sup>, mỗi vụ tạo ra 324 kg gạo (chứa 80% tinh bột), đồng thời đã hấp thụ V m<sup>3</sup> khí CO<sub>2</sub> (25<sup>o</sup>C, 1 bar) để tạo ra lượng tinh bột trên. Giá trị của V là bao nhiêu (làm tròn kết quả đến hàng đơn vị)?",
        "images": [],
        "correctAnswer": "238",
        "explanation": "Đáp án: 238.<br/>()26105nC3OCHO324.80%n1,6kmolV1,6.6.24,79238m162==Þ==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "238"
        ]
      },
      {
        "id": "hoa12_ck1_de02_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "Cho thế điện cực chuẩn của các cặp oxi hóa – khử sau:  2oZn/ZnE0,762 V+=- ,  2oCu/CuE0,340 V+= ,  2o2H/HE 0 V+= ,  2oNi/NiE0,257 V+=- .<br/>a) So sánh tính khử của các kim loại Zn, Cu và Ni.<br/>b) Hãy viết phương trình hoá học của phản ứng xảy ra giữa các cặp oxi hoá - khử sau:<br/>(1) Ni<sup>2+</sup>/Ni và 2H<sup>+</sup>/H<sub>2</sub>.(2) Fe<sup>2+</sup>/Fe và Cu<sup>2+</sup>/Cu.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Zn > Ni > Cu.<br/>b) Ni + 2H<sup>+</sup> → Ni<sup>2+</sup> + H<sub>2</sub><br/>Fe + Cu<sup>2+</sup> → Fe<sup>2+</sup> + Cu",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de02_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Threonine (công thức cấu tạo cho ở hình dưới) là một amino acid thiết yếu, hỗ trợ nhiều cơ quan trong cơ thể như thần kinh trung ương, tim mạch, gan và hệ miễn dịch nhưng cơ thể không tự tổng hợp được mà phải lấy từ dược phẩm hoặc thực phẩm giàu protein.<br/>HOCH3NH2OHO<br/>Viết công thức phân tử của threonine.<br/>b) Thành phần tạo nên vị ngọt đặc trưng của nước mắm (được sản xuất từ cá) và nước tương (được sản xuất từ đậu nành) là các amino acid tạo thành từ sự thủy phân hoàn toàn của protein có trong cá hoặc đậu nành. Cho biết độ đạm của nước tương, nước mắm tương ứng với hàm lượng của nguyên tố nào trong nước tương, nước mắm. Độ đạm có tỉ lệ thuận với hàm lượng amino acid có trong nước tương, nước mắm không? Giải thích.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) CTPT Threonine: C<sub>4</sub>H<sub>9</sub>NO<sub>3</sub>.<br/>b) Nitrogen có trong thành phần của amino acid. Hàm lượng nitrogen càng lớn tương ứng với hàm lượng amino acid càng lớn thì độ đạm càng cao. Vậy độ đạm tỉ lệ thuận với hàm lượng amino acid có trong nước tương, nước mắm.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de02_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Trong công nghiệp, PVC được dùng làm chất dẻo được sản xuất từ ethylene với hiệu suất cho từng bước theo sơ đồ sau:<br/>Ethylene  1,2-dichloroethane  vinyl chloride  PVC<br/>a) Viết phản ứng trùng hợp PVC (ghi rõ các điều kiện phản ứng).<br/>b) Cần bao nhiêu tấn ethylene để sản xuất 1 tấn PVC?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)<br/>b)  2424PVCCHCH11111nnm....280,9862,562,579%68%85%==Þ==  tấn.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa12/final/h12_ck1_de2_image26.png"
        ],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck1_de03",
    "code": "H12-CK1-03",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de03_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số liên kết peptide trong phân tử peptide Gly-Ala-Val-Glu là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4.",
            "isCorrect": false
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
            "text": "3.",
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
        "displayNumber": 1
      },
      {
        "id": "hoa12_ck1_de03_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Carbohydrate nào sau đây kém tan trong nước lạnh nhưng tan được trong nước nóng tạo dung dịch keo, nhớt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Glucose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tinh bột",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cellulose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Saccharose.",
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
        "id": "hoa12_ck1_de03_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Geranyl acetate là hợp chất hữu cơ có trong tinh dầu hoa hồng và được sử dụng nhiều trong mĩ phẩm. Trong công nghiệp, geranyl acetate được điều chế theo sơ đồ sau:<br/>Công thức phân tử của geranyl acetate là",
        "images": [
          "/assets/hoa12/final/h12_ck1_de3_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "\\mathrm{C}_{12} \\mathrm{H}_{20} \\mathrm{O}_2",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "\\mathrm{C}_{12} \\mathrm{H}_{22} \\mathrm{O}_2",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "\\mathrm{C}_{12} \\mathrm{H}_{18} \\mathrm{O}_2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "\\mathrm{C}_{11} \\mathrm{H}_{18} \\mathrm{O}_2 . <div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th></tr></table></div>",
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
        "id": "hoa12_ck1_de03_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất béo là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hợp chất hữu cơ chứa C, H, N, O",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "triester của acid hữu cơ và glycerol.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "triester của glycerol với các acid béo",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "là ester của acid béo và alcohol đa chức.",
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
        "id": "hoa12_ck1_de03_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Giá trị thế điện cực chuẩn của cặp oxi hoá - khử nào được quy ước bằng 0?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cl<sub>2</sub>/2Cl<sup>-</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2H<sup>+</sup>/H<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Al<sup>3+</sup>/Al.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na<sup>+</sup>/Na.",
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
        "id": "hoa12_ck1_de03_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Carbohydrate X là một disacchride có nhiều trong củ cải đường. Thủy phân hoàn toàn X trong môi trường acid thu được Y có khả năng làm mất màu nước bromine. Tên gọi của X và Y lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Maltose, glucose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Saccharose, fructose.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Saccharose, glucose",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Maltose, fructose.",
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
        "id": "hoa12_ck1_de03_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các cặp oxi hoá - khử của các kim loại và thế điện cực chuẩn tương ứng:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cặp oxi hóa – khử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Al<sup>3+</sup>/Al</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ag<sup>+</sup>/Ag</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Mg<sup>2+</sup>/Mg</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Fe<sup>2+</sup>/Fe</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Thế điện cực chuẩn (V)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-1,676</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">+0,799</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-2,356</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-0,44</td></tr></table></div><br/>Kim loại có tính khử yếu nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ag.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fe.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mg.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Al.",
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
        "id": "hoa12_ck1_de03_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất CH<sub>3</sub>NHCH<sub>3</sub> có tên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "propylamine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ethylmethylamine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dimethylamine",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "diethylamine.",
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
        "id": "hoa12_ck1_de03_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là thành phần chính của chất giặt rửa tổng hợp?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(C<sub>17</sub>H<sub>35</sub>COO)<sub>2</sub>Ca.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>15</sub>H<sub>31</sub>COONa.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>17</sub>H<sub>35</sub>COOK.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>-[CH<sub>2</sub>]<sub>11</sub>-C<sub>6</sub>H<sub>4</sub>-SO<sub>3</sub>Na.",
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
        "id": "hoa12_ck1_de03_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Polymer thường tan nhiều trong nước.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Polymer có nhiệt độ nóng chảy xác định.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Polymer thường dễ bay hơi.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Polymer bị nóng chảy khi đun nóng gọi là polymer nhiệt dẻo.",
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
        "id": "hoa12_ck1_de03_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vật liệu composite là loại vật liệu được tổ hợp từ hai hay nhiều vật liệu khác nhau tạo nên vật liệu mới có các tính chất vượt trội so với các vật liệu ban đầu.Vật liệu composite thường bao gồm hai thành phần chính là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "vật liệu cốt và lớp sơn .",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "vật liệu nền và phụ gia.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "vật liệu cốt và chất độn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "vật liệu nền và vật liệu cốt.",
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
        "id": "hoa12_ck1_de03_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tơ nylon-6,6 dùng để dệt vải may mặc, vải lót săm lốp xe, dệt bít tất, bện làm dây cáp, dây dù, đan lưới,… Công thức cấu tạo của tơ nylon-6,6 được biểu diễn ở hình dưới đây:<br/>Cho các phát biểu sau về tơ nylon-6,6:<br/>(1) Thuộc loại tơ polyamide.<br/>(2) Có tên gọi khác là poly(hexamethylene adipamide).<br/>(3) Được điều chế từ hexamethylenediamine và adipic acid bằng phản ứng trùng hợp.<br/>(4) Bền với nhiệt, với acid và kiềm.<br/>Các phát biểu sai là",
        "images": [
          "/assets/hoa12/final/h12_ck1_de3_image7.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(2), (3)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(3), (4)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1), (3).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1), (3), (4).",
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
        "id": "hoa12_ck1_de03_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Lysine và cadaverine là hai hợp chất liên quan đến quá trình phân hủy e. Lysine là một amino acid thiết yếu, còn cadaverine được hình thành từ sự khử carboxyl của Lysine dưới tác động của enzyme trong môi trường. Về cấu tạo, từ phân tử lysine, thay thế nhóm chức carboxyl bằng một nguyên tử hydrogen thì thu được phân tử cadaverine.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức phân tử của cadaverine là C<sub>5</sub>H<sub>14</sub>N<sub>2</sub>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lysine và cadaverine đều có hai nhóm amine trong phân tử.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lysine thuộc loại α-amino acid, còn cadaverine không phải amino acid",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở pH = 6, cả hai chất đều có thể tồn tại ở dạng ion lưỡng cực.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Lysine: H₂N–(CH₂)₄–CH(NH₂)–COOH => cadaverine: H<sub>2</sub>N–(CH<sub>2</sub>)<sub>5</sub>–NH<sub>2</sub> (thay thế nhóm chức carboxyl bằng một nguyên tử hydrogen)<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. Cadaverine chỉ chứa nhóm -NH<sub>2</sub>không có dạng lưỡng cực.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de03_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Thế điện cực chuẩn của các cặp oxi hoá – khử của kim loại X<sup>+</sup>/X và Y<sup>2+</sup>/Y lần lượt là +0,799 V và +0,34 V.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính khử của kim loại X có tính khử mạnh hơn kim loại Y.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính oxi hóa của ion X<sup>+</sup> có tính oxi hoá yếu hơn ion Y<sup>2+</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kim loại X và Y đều khử được ion H<sup>+</sup> trong dung dịch thành khí H<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Kim loại X khử được ion Y<sup>2+</sup> trong dung dịch thành kim loại Y.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Tính khử của kim loại X có tính khử yếu hơn kim loại Y.<br/>b) Sai. Tính oxi hóa X<sup>+</sup> > Y<sup>2+</sup>.<br/>c) Sai. Để khử được ion H<sup>+</sup> thành H<sub>2</sub> thì các kim loại X, Y phải có thế điện cực chuẩn nhỏ hơn 0.<br/>d) Sai. X không khử được ion Y<sup>2+</sup>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de03_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho  oPin(Ni-Cu)E = 0,59 V và  ECu/ Cuo2+ = 0,34 V. Thế điện cực chuẩn của cặp oxi hóa - khử Ni<sup>2+</sup>/Ni ( ENi/ Nio2+ ) có giá trị là bao nhiêu volt (V)?",
        "images": [],
        "correctAnswer": "-0,25",
        "explanation": "Đáp án: -0,25.<br/>ENi/ Nio2+ = 0,34 – 0,59 = –0,25V.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "-0,25",
          "-0.25"
        ]
      },
      {
        "id": "hoa12_ck1_de03_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các polymer sau: poly(vinyl chloride), poly(methyl acrylate), poly(ethylene terephthalate), nylon-6,6. Có bao nhiêu polymer được điều chế bằng phản ứng trùng ngưng?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "2"
        ]
      },
      {
        "id": "hoa12_ck1_de03_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Enzyme tripsine chủ yếu xúc tác cho phản ứng thủy phân liên kết peptide tạo bởi nhóm carboxyl của amino acid mà có nhóm -NH<sub>2</sub> nhiều hơn nhóm -COOH.<br/>Thủy phân peptide Val-Lys-Ala-Gly-Lys-Gly-Val-Lys-Gly-Lys-Val với xúc tác là enzyme tripsine thì có thể thu được tối đa bao nhiêu tripeptide?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Lys là amino acid có 2-NH<sub>2</sub> và 1-COOH → Enzyme tripsine chỉ phân cắt liên kết peptide ngay sau Lys.<br/>→ Có thể thu được 3 tripeptide: Ala-Gly-Lys, Gly-Val-Lys, Gly-Lys-Val.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "3"
        ]
      },
      {
        "id": "hoa12_ck1_de03_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Một loại chất béo có chứa 65% triolein về khối lượng. Để sản xuất 4,6 triệu hộp kem dưỡng da (có chứa chất dưỡng ẩm glycerol) cần dùng tối thiểu x tấn loại chất béo trên cho phản ứng với dung dịch NaOH, đun nóng. Biết rằng trong mỗi hộp kem dưỡng da có chứa 5 gam glycerol. Giá trị của x là bao nhiêu?",
        "images": [],
        "correctAnswer": "340",
        "explanation": "Đáp án: 340.<br/>m<sub>glycerol</sub> = 4,6.10<sup>6</sup>.5 = 23.10<sup>6</sup> gam = 23 tấn.<br/>(C<sub>17</sub>H<sub>33</sub>COO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub> + 3NaOH  3C<sub>17</sub>H<sub>33</sub>COONa + C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub><br/>()353CHOH230,25.884n0,25x3409265%==Þ==  tấn.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "340"
        ]
      },
      {
        "id": "hoa12_ck1_de03_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm): Tiến hành thí nghiệm theo các bước sau:<br/>- Bước 1: Cho vào ống nghiệm 1 mL dung dịch CuSO<sub>4</sub> 2% và thêm 2 mL dung dịch NaOH 3%, lắc đều.<br/>- Bước 2: Thêm tiếp 3 mL dung dịch glucose 2% vào ống nghiệm, lắc đều.<br/>- Bước 3: Đun nóng hỗn hợp.<br/>Mô tả hiện tượng xảy ra và giải thích?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>Tạo kết tủa xanh lam sau khi cho glucose vào kết tủa tan có màu xanh thẩm khi đun nóng thì chuyển sang màu đỏ gạch.<br/>Ban đầu: CuSO<sub>4</sub> + 2NaOH ⟶ Cu(OH)<sub>2</sub>↓(xanh lam) + Na<sub>2</sub>SO<sub>4</sub><br/>(1) Sau đó: 2C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + Cu(OH)<sub>2</sub> ⟶ (C<sub>6</sub>H<sub>11</sub>O<sub>6</sub>)<sub>2</sub>Cu + 2H<sub>2</sub>O<br/>(2) hoặc 2C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + Cu(OH)<sub>2</sub> ⟶ (C<sub>12</sub>H<sub>21</sub>O<sub>11</sub>)<sub>2</sub>Cu + 2H<sub>2</sub>O<br/>Cuối cùng: C<sub>5</sub>H<sub>11</sub>O<sub>5</sub>CHO + 2Cu(OH)<sub>2</sub> + NaOH  C<sub>5</sub>H<sub>11</sub>O<sub>5</sub>COONa + Cu<sub>2</sub>O↓(đỏ gạch) + 2H<sub>2</sub>O (3)",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de03_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm): Cao su buna được dùng để điều chế cao su buna-S. Để điều chế cao su buna người ta có thể đi từ nguyên liệu khí ethylene thu được từ dầu mỏ theo sơ đồ sau:<br/>a) Tính số m<sup>3</sup> ethylene (ở 25<sup>o</sup>C và 1 bar) cần lấy để điều chế được 1 tấn cao su buna theo sơ đồ trên. Giả sử hiệu suất phản ứng của cả quá trình là 70%.<br/>b) Viết phản ứng điều chế cao su buna –S từ cao su buna và styrene.",
        "images": [
          "/assets/hoa12/final/h12_ck1_de3_image11.png"
        ],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)  2446n243CH(CH)CH10001n2n2..V1311,6m5470%==Þ=<br/>b)",
        "explanationImages": [
          "/assets/hoa12/final/h12_ck1_de3_image14.png"
        ],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de03_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm): Một pin Galvani có cấu tạo như sau:<br/>a) Xác định anode, cathode và viết các quá trình xảy ra ở anode, cathode. Viết phương trình hoá học của phản ứng xảy ra trong pin.<br/>b) Xác định chiều của dòng electron chạy qua dây dẫn. Tính sức điện động chuẩn của pin.",
        "images": [
          "/assets/hoa12/final/h12_ck1_de3_image12.png"
        ],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Điện cực âm, anode (-): Xảy ra quá trình oxi hóa Zn → Zn<sup>2+</sup> + 2e.<br/>Điện cực dương, cathode (+): Xảy ra quá trình khử Cu<sup>2+</sup> + 2e → Cu.<br/>Phương trình hoá học của phản ứng xảy ra trong pin: Zn + Cu<sup>2+</sup> → Cu + Zn<sup>2+</sup>.<br/>b) Chiều của dòng electron chạy qua dây dẫn: Electron được truyền từ chất khử sang chất oxi hoá qua dây dẫn hay chiều từ anode sang cathode.<br/>-Sức điện động chuẩn của pin: E<sup>o</sup>pin = E<sup>o</sup>(cathode) – E<sup>o</sup>(anode) = 0.34 – (–0,763) = 1,103V.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck1_de04",
    "code": "H12-CK1-04",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de04_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester ethyl propionate có mùi thơm của quả dứa chín. Công thức của ethyl propionate là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>5</sub>COOC<sub>6</sub>H<sub>5</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>2</sub>H<sub>5</sub>COOC<sub>2</sub>H<sub>5</sub>.",
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
        "id": "hoa12_ck1_de04_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các phản ứng sau, phản ứng nào làm tăng mạch polymer?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chlorine hoá cao su thiên nhiên.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thuỷ phân poly(vinyl acetate) trong môi trường kiềm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phân huỷ poly(styrene) ở 300<sup>0</sup",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "D. Lưu hoá cao su thiên nhiên.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_ck1_de04_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, amine X là chất lỏng, dễ bị oxi hóa khi để ngoài không khí. Dung dịch X không làm đổi màu quỳ tím nhưng tác dụng với nước bromine tạo kết tủa trắng. Amine nào sau đây thỏa mãn tính chất của X?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Methylamine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dimethylamine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Benzylamine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Aniline.",
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
        "id": "hoa12_ck1_de04_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng của acquy chì khi xả điện là:<br/>Pb(s) + PbO<sub>2</sub>(s) + 2H<sub>2</sub>SO<sub>4</sub>(aq) → 2PbSO<sub>4</sub>(s) + 2H<sub>2</sub>O(l)<br/>Khi đó, Pb sẽ bị oxi hoá và tạo thành PbSO<sub>4</sub> bám vào điện cực và PbO<sub>2</sub> bị khử thành PbSO<sub>4</sub> bám vào điện cực. Phát biểu nào sau đây đúng trong quá trình acquy xả điện?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khối lượng cực dương giảm dần",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nồng độ H<sub>2</sub>SO<sub>4</sub> trong dung dịch giảm dần.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khối lượng acquy giảm dần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khối lượng cực âm giảm dần.",
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
        "id": "hoa12_ck1_de04_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử chất béo chứa nhiều gốc acid béo no thì chất béo đó thường ở thể rắn.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thủy phân chất béo luôn thu được glycerol.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất béo bị thủy phân hoàn toàn trong môi trường acid.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các chất béo không tan trong nước và nhẹ hơn nước.",
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
        "id": "hoa12_ck1_de04_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi nấu món canh làm từ thịt cua, tôm, tép có nhiều mảng thịt đóng rắn lại. Hiện tượng trên gây ra bởi tính chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kết tủa carbonate của các chất khoáng có trong vỏ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sự đông tụ protein bởi nhiệt độ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sự thuỷ phân protein bởi nhiệt độ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự đông tụ protein bởi sự thay đổi pH.",
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
        "id": "hoa12_ck1_de04_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quan sát cấu trúc phân tử maltose:<br/>Phát biểu nào sau đây không đúng về maltose?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de4_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Với cấu trúc phân tử trên, thuỷ phân maltose chỉ thu được glucose.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phân tử maltose, đơn vị glucose có khả năng mở vòng là đơn vị còn nhóm -OH hemiacetal.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phân tử maltose, hai đơn vị glucose liên kết với nhau bằng liên kết α-1,4-glycoside,",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Maltose không có khả năng phản ứng với thuốc thử Tollens.",
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
        "id": "hoa12_ck1_de04_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi trùng hợp buta-1,3-diene với styrene thu được polymer có cấu tạo nhur sau:<br/>Polymer trên dùng để sản xuất loại cao su nào sau đây?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de4_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cao su buna",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cao su buna-S",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cao su chloroprene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cao su buna-N.",
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
        "id": "hoa12_ck1_de04_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ngoài dạng mạch hở, glucose tồn tại chủ yếu ở hai dạng mạch vòng là  a -glucose và  b -glucose. Trong vòng glucose, nguyên tử carbon số mấy nằm ngoài cấu trúc vòng sáu cạnh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Carbon số 1",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Carbon số 2",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Carbon số 6",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Carbon số 3.",
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
        "id": "hoa12_ck1_de04_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các amine sau: ethylamine, propylamine, dimethylamine và methylamine, chất có nhiệt độ sôi cao nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ethylamine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "propylamine",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dimethylamine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "methylamine.",
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
        "id": "hoa12_ck1_de04_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cao su là những polymer có tính đàn hồi.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Vật liệu composite có thành phần chính là polymer.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nylon-6,6 thuộc loại tơ tổng hợp.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tơ tằm thuộc loại tơ thiên nhiên.",
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
        "id": "hoa12_ck1_de04_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kí hiệu cặp oxi hoá − khử ứng với quá trình khử: 2H<sup>+</sup> + 2e     H<sub>2</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "OH<sup>–</sup>/H<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>/H<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2H<sup>+</sup>/H<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>O/H<sub>2</sub>.",
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
        "id": "hoa12_ck1_de04_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho bảng giá trị thế điện cực chuẩn của các cặp oxi hóa – khử như sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cặp oxi hóa – khử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Fe<sup>2+</sup>/Fe</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cu<sup>2+</sup>/Cu</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Zn<sup>2+</sup>/Zn</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ag<sup>+</sup>/Ag</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Pb<sup>2+</sup>/Pb</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">2H+/H<sub>2</sub></th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Thế điện cực chuẩn (V)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-0,44</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">+0,34</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-0,76</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">+0,80</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-0,13</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">0</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kim loại trong cặp oxi hoá - khử có thế điện cực chuẩn dương có thể khử được hydrogen ion (H<sup>+</sup>) trong dung dịch acid ở điều kiện chuẩn.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có 2 ion kim loại trong bảng trên ở điều kiện chuẩn có tính oxi hóa yếu hơn Ag<sup>+</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sức điện động chuẩn lớn nhất của pin Galvani thiết lập từ hai cặp oxi hóa – khử trong số các cặp trên là 1,56 V.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dựa vào bảng trên ta có thể dự đoán chiều hướng xảy ra phản ứng giữa hai cặp oxi hoá - khử",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai.<br/>b) Sai. Có 4 ion kim loại có tính oxi hóa yếu hơn Ag<sup>+</sup>.<br/>c) Đúng. Pin Zn-Ag có sức điện động lớn nhất là 1,56 V.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de04_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Giá trị pH mà khi đó amino acid có nồng độ ion lưỡng cực là cực đại được gọi là điểm đẳng điện (kí hiệu là pI). Khi pH < pI thì amino acid đó tồn tại chủ yếu ở dạng cation, còn khi pH > pI thì amino acid đó tồn tại chủ yếu ở dạng anion. Khi đặt trong một điện trường dạng anion sẽ di chuyển về cực (+) còn dạng cation sẽ di chuyển về cực (-). Tính chất này được gọi là tính điện di và được dùng để tách, tinh chế amino acid ra khỏi hỗn hợp của chúng.<br/>Cho bảng thông tin sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Amino acid</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Công thức cấu tạo</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">pI</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Glycine</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">H2NCH2COOH</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">6</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Aspartic acid</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">HOOCCH2CH(NH2)COOH</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2,77</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Lysine</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">H2NCH2(CH2)3CH(NH2)COOH</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">9,7</td></tr></table></div><br/>Dung dịch X gồm: glycine, aspartic acid và lysine. Đặt X vào nguồn điện một chiều, thấy hỗn hợp tách thành ba vết chất (trong đó có một vết chất không di chuyển) như hình sau:",
        "images": [
          "/assets/hoa12/final/h12_ck1_de4_image7.png",
          "/assets/hoa12/final/h12_ck1_de4_image8.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Vị trí (1) tương ứng với chất aspartic acid.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nếu dung dịch X có pH = 8 thì glycine và aspartic acid di chuyển về anode của điện trường.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Giá trị pH thích hợp để tách các chất trên ra khỏi hỗn hợp là 9,7.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Vị trí (3) tương ứng với chất lysine.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. pH > pI thì amino acid đó tồn tại chủ yếu ở dạng anion  di chuyển về cực dương.<br/>b) Đúng. pH > pI thì amino acid đó tồn tại chủ yếu ở dạng anion  di chuyển về cực dương.<br/>c) Sai. Giá trị pH thích hợp để tách các chất trên ra khỏi hỗn hợp là 6.<br/>d) Đúng. pH < pI thì amino acid đó tồn tại chủ yếu ở dạng cation  di chuyển về cực âm.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de04_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Peptide X có công thức như sau:<br/>Trong peptide X có bao nhiêu liên kết peptide?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "4"
        ]
      },
      {
        "id": "hoa12_ck1_de04_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Trong công nghiệp, saccharose được sử dụng làm nguyên liệu trong kĩ thuật tráng gương, tráng ruột phích theo sơ đồ:<br/>Disaccharide  acid, tHOo2¾¾¾®+  Monosaccharide  32oAg(NH)OH+¾¾¾¾¾¾®[]t  Bạc kim loại.<br/>Trong quá trình trên, từ 1 mol saccharose tạo được tối đa bao nhiêu gam bạc kim loại?",
        "images": [],
        "correctAnswer": "432",
        "explanation": "Đáp án: 432.<br/>Disaccharide  acid, tHOo2¾¾¾®+  2Monosaccharide  32oAg(NH)OH+¾¾¾¾¾¾®[]t  4Ag.<br/>Agm1.4.108432g.==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "432"
        ]
      },
      {
        "id": "hoa12_ck1_de04_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Nylon–7, còn được gọi là tơ enang, là một loại polymer tổng hợp được sản xuất thông qua quá trình trùng ngưng của ω–aminoenanthic acid (7–aminoheptanoic acid). Với những đặc tính vượt trội như độ bền cao, chịu nhiệt và hoá chất, không thấm nước nên có nhiều ứng dụng quan trọng trong các ngành công nghiệp và đời sống hàng ngày. Một đoạn mạch nylon–7 có khối lượng phân tử là 44450 amu. Số mắt xích có trong đoạn nylon–7 là bao nhiêu?",
        "images": [],
        "correctAnswer": "350",
        "explanation": "Đáp án: 350.<br/>1 mắt xích nylon-7: -HN(CH<sub>2</sub>)<sub>6</sub>CO-   44450n350.127==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "350"
        ]
      },
      {
        "id": "hoa12_ck1_de04_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Hiện nay, pin nhiên liệu sử dụng hydrogen được đặc biệt quan tâm do có nguồn cung nhiên liệu dồi dào, sản phẩm thân thiện với môi trường.<br/>Phản ứng xảy ra khi-một pin hydrogen - oxygen phóng điện ở  25Co  trong dung dịch chất điện li là potassium hydroxide nhu sau:<br/>()()()2222HgOg2HO+¾¾®l        r298ÄHo<br/>Để một pin nhiên liệu hydrogen - oxygen tạo ra điện năng  ()1kWh3600 kJ  cần tiêu thụ hết m gam hydrogen với hiệu suất quá trình oxi hoá hydrogen ở anode đạt 60%. Cho nhiệt tạo thành chuẩn của  ()2HOl  bằng  285,8 kJ/mol-  và chấp nhận gần đúng công sinh ra của pin bằng  r298ÄHo . Giá trị của m bằng bao nhiêu? (Làm tròn kết quả đến phần nguyên)",
        "images": [],
        "correctAnswer": "42",
        "explanation": "Đáp án: 42.<br/>r2982298Ä(2())571,6HÄH==-oofHOlkJ<br/>Với 2 mol H<sub>2</sub>   r298ÄHo =  571,6kJ<br/>22HH36001n.2.21molm42g571,660%==Þ=",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "42"
        ]
      },
      {
        "id": "hoa12_ck1_de04_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm). Chất dẻo là vật liệu polymer có tính dẻo, được dùng làm vật liệu trong sản xuất các loại vật dụng phục vụ cho đời sống hằng ngày, chẳng hạn như: ống dẫn điện, áo mưa,... cho đến những sản phẩm công nghiệp, gần gũi với đời sống hiện đại của con người. Tuy nhiên việc sử dụng chất dẻo không kiểm soát sẽ gây nhiều tác hại nghêm trọng. Nêu một số biện pháp để hạn chế sử dụng một số loại chất dẻo để giảm thiểu ô nhiễm môi trường, bảo vệ sức khoẻ con người.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>Tiết giảm: hạn chế thải chất dẻo ra môi trường. Sử dụng đồ bền và có thể dùng nhiều lần.<br/>Tái sử dụng: Sử dụng dồ dùng nhiều lần và thiết kế để tận dụng chúng phù hợp.<br/>Tái chế: Phân loại, thu thập và tái chế.<br/>Sử dụng chất dẻo có khả năng phân huỷ sinh học.<br/>Hạn chế tối đa việc đốt rác thải nhựa tại nhà.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de04_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm). Cho pin Galvani tạo bởi hai cặp oxi hoá - khử ở điều kiện chuẩn: Sn<sup>2+</sup>/Sn và Ag<sup>+</sup>/Ag  Biết  2oSn/SnE0,14 V+=-  và  oAg/AgE0,80 V+= .<br/>a) Xác định anode, cathode của pin Galvani và viết quá trình xảy ra ở mỗi điện cực.<br/>b) Viết phương trình hoá học của phản ứng xảy ra khi pin hoạt động và tính sức điện động chuẩn của pin.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Anode ( – ): cực Sn<br/>Sn → Sn<sup>2+</sup> + 2e<br/>Cathode ( +) : cực Ag<br/>Ag<sup>+</sup> + 1e → Ag<br/>Phương trình phản ứng: 2Ag<sup>+</sup> + Sn → Sn<sup>2+</sup> + 2Ag.<br/>b) E<sup>o</sup><sub>pin</sub> = 0,8 – (-0,14) = 0,94 V.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de04_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Viết công thức cấu tạo và gọi tên các ester no, đơn chức, mạch hở có số nguyên tử carbon ≤ 3.<br/>b) Một số gia đình thường có thói quen sử dụng rất nhiều bột giặt, nước rửa chén với mong muốn làm sạch chất bẩn nhanh hơn, nhưng thực tế việc lạm dụng xà phòng hoặc chất giặt rửa tổng hợp lại gây lãng phí và có thể ảnh hưởng xấu đến sức khỏe, môi trường. Hãy đề xuất cách sử dụng hợp lý, an toàn các chất giặt rửa này trong đời sống hằng ngày.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Công thức cấu tạo và tên gọi của các ester có số C ≤ 3<br/>HCOOCH₃ : methyl fomate<br/>CH₃COOCH₃ : methyl acetate<br/>HCOOC<sub>2</sub>H<sub>5</sub>: ethyl fomate<br/>b) Đề xuất sử dụng hợp lí:<br/>- Dùng vừa đủ theo hướng dẫn, không lạm dụng.<br/>- Xả sạch bằng nước nhiều lần.<br/>- Chọn sản phẩm thân thiện môi trường.<br/>- Kết hợp phơi nắng, vệ sinh hợp lí để giảm hóa chất.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck1_de05",
    "code": "H12-CK1-05",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de05_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng là hỗn hợp muối ...(1)... và các chất phụ gia. Nội dung phù hợp trong ô trống (1) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sodium alkylbenzenesulfonate.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sodium hoặc potassium của các acid béo.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sodium alkylsulfate.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sodium hoặc potassium của các acid hữu cơ.",
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
        "id": "hoa12_ck1_de05_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thành phần nào trong vật liệu composite có vai trò liên kết các thành phần khác, giúp vật liệu chịu lực cắt và bảo vệ các sợi cốt khỏi môi trường?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất cốt (Chất tăng cường).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lớp phủ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất nền (Matrix).",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất làm cứng.",
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
        "id": "hoa12_ck1_de05_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Polypropylene được sử dụng để sản xuất bao gói, hộp đựng, ống nước,... Polypropylene được tổng hợp từ monomer nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>2</sub>=CH-CH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>=CH-Cl.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>2</sub>=CH-CH=CH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCHO.",
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
        "id": "hoa12_ck1_de05_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thế điện cực chuẩn của các cặp oxi hoá - khử của kim loại Fe<sup>2+</sup>/Fe và Mg<sup>2+</sup>/Mg lần lượt là –0,44 V và –2,36 V. Nhận xét nào sau đây là đúng ở điều kiện chuẩn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe có tính khử mạnh hơn Mg",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fe<sup>2+</sup>có tính oxi hoá yếu hơn Mg<sup>2+</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fe có tính khử yếu hơn Mg",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe<sup>2+</sup>có tính khử yếu hơn Mg<sup>2+</sup>.",
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
        "id": "hoa12_ck1_de05_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Glucose là một loại monosaccharide có nhiều trong quả chín. Công thức phân tử của glucose là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>.",
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
        "id": "hoa12_ck1_de05_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở điều kiện thường, aniline là chất lỏng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ sôi của các amine cùng bậc có xu hướng tăng khi phân tử khối tăng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở điều kiện thường, CH<sub>3</sub>NH<sub>2</sub>, C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub> là những chất khí.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các amine có số nguyên tử carbon nhỏ thường tan nhiều trong nước.",
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
        "id": "hoa12_ck1_de05_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đối với điện cực hydrogen chuẩn, tại ranh giới giữa bề mặt Pt với dung dịch chất điện li tồn tại cân bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2H<sub>2</sub>O+ 2e    H<sub>2</sub> + 2OH<sup>–</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sup>+</sup>+ 1e    H.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2H<sup>+</sup>+ 2e     H<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H    H<sup>+</sup> + 1e.",
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
        "id": "hoa12_ck1_de05_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong quá trình điện phân, những ion dương (cation) di chuyển về",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "anode, ở đây chúng bị khử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "anode, ở đây chúng bị oxi hoá.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cathode, ở đây chúng bị khử",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cathode, ở đây chúng bị oxi hoá.",
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
        "id": "hoa12_ck1_de05_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nghiên cứu y học, dược phẩm thì vai trò nào sau đây của enzyme là không phù hợp?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sản xuất dược phẩm như protease làm thuốc hỗ trợ trị tắc nghẽn tim mạch, làm men tiêu hoá,...",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Xác định hàm lượng urea trong nước tiểu.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cung cấp năng lượng cho cơ thể.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xác định hàm lượng cholesterol trong máu.",
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
        "id": "hoa12_ck1_de05_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên liệu để điều chế ethyl acetate bằng phản ứng ester hóa là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "rượu trắng, giấm ăn, dung dịch H<sub>2</sub>SO<sub>4</sub> đặc.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ethanol tuyệt đối, acetic acid kết tinh, dung dịch H<sub>2</sub>SO<sub>4</sub>đặc.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cồn ethanol tuyệt đối, giấm ăn, dung dịch H<sub>2</sub>SO<sub>4</sub> đặc.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "rượu trắng, acetic acid kết tinh, dung dịch H<sub>2</sub>SO<sub>4</sub> loãng.",
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
        "id": "hoa12_ck1_de05_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi nhỏ acid HNO<sub>3</sub>đậm đặc vào ống nghiệm chứa lòng trắng trứng ta thấy …(1)…. Mặt khác,  nêu đun nóng ống nghiệm chứa lòng trắng trứng ta thấy lòng trắng trứng hóa rắn đó là hiện tượng …(2)… Nội dung phù hợp trong ô trống (1), (2) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) kết tủa vàng; (2) thủy phân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) kết tủa vàng; (2) đông tụ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) kết tủa xanh; (2) đông tụ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) kết tủa trắng; (2) kết tủa.",
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
        "id": "hoa12_ck1_de05_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp, saccharose là nguyên liệu để thủy phân thành glucose và fructose dùng trong kĩ thuật tráng gương, ruột phích. Để thu được 18 kg glucose cần thủy phân m kg saccharose với hiệu suất phản ứng là 60%. Giá trị của m là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "10,26",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "20,52",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "28,5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "57,00.",
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
        "id": "hoa12_ck1_de05_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cao su thiên nhiên có tính đàn hồi, không dẫn điện, không thấm khí và thấm nước…Thành phần chính của cao su thiên nhiên là polyisoprene được dùng trong ngành công nghiệp cao su. Đặc biệt cao su thiên nhiên có thể lưu hóa tạo cao su lưu hóa có tính đàn hồi, chịu nhiệt, lâu mòn hơn cao su không lưu hóa.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các mắc xích isoprene đều có cấu hình cis.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cao su thiên nhiên phản ứng với styrene tạo cao su lưu hóa.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Polyisoprene có thể phản ứng cộng với Cl<sub>2</sub>, HCl...",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cao su thiên nhiên lấy từ mủ cây cao su. Trong quá trình thu hoạch mủ cao su thường có lẫn 10% tạp chất. Để sản xuất được 100 chiếc đệm chứa cao su thiên nhiên (45 kg/chiếc đệm) cần 4,5 tấn mủ cao su.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Phản ứng lưu hóa cao su là phản ứng cho cao su tác dụng với lưu huỳnh.<br/>c) Đúng.<br/>d) Sai. m<sub>cao su</sub> = 4,5.90% = 4,05 tấn = 4050 kg  Số chiếc đệm = 4050/45 = 90.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de05_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Xét quá trình hoạt động của một pin điện hoá được thiết lập ở điều kiện chuẩn như hình bên.",
        "images": [
          "/assets/hoa12/final/h12_ck1_de5_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điện cực Zn là anode, điện cực Ni là cathode.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Điện cực Zn xảy ra quá trình khử, điện cực Ni xảy ra quá trình oxi hoá.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể thay điện cực Ni bằng điện cực trơ như graphite.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch  2ZnCl  phù hợp làm dung dịch điện li ở ngăn anode.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Anode: Zn  Zn<sup>2+</sup> + 2e<br/>Cathode: Ni<sup>2+</sup> + 2e  Ni<br/>a) Đúng.<br/>b) Sai. Điện cực Zn xảy ra quá trình oxi hóa, điện cực Ni xảy ra quá trình khử.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de05_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các dung dich: fructose, saccharose, glucose, albumin, amylose. Số dung dịch có khả năng hoà tan Cu(OH)<sub>2</sub> là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "4"
        ]
      },
      {
        "id": "hoa12_ck1_de05_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho biết giá trị thế điện cực chuẩn của các cặp oxi hoá – khử sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cặp oxi hoá – khử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cu<sup>2+</sup>/Cu</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Zn<sup>2+</sup>/Zn</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Fe<sup>2+</sup>/Fe</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ni<sup>2+</sup>/Ni</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">2H+/H<sub>2</sub></th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Thế điện cực chuẩn (V)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">0,340</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">–0,763</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">–0,440</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">–0,257</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">0</td></tr></table></div><br/>Có bao nhiêu kim loại trong dãy các kim loại Zn, Ni, Fe, Cu phản ứng được với dung dịch HCl ở điều kiện chuẩn?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "3"
        ]
      },
      {
        "id": "hoa12_ck1_de05_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Một nhóm học sinh đã tiến hành thí nghiệm điều chế “xà phòng handmade” từ nguyên liệu ban đầu là NaOH và mỡ lợn. Nhóm đã dùng 560 gam mỡ lợn và lấy một lượng NaOH cần dùng là m gam rồi tiến hành xà phòng hóa hoàn toàn lượng mỡ lợn trên. Giá trị của m là bao nhiêu? Biết lượng KOH cần để xà phòng hóa hoàn toàn 1 gam chất béo là 198 mg.",
        "images": [],
        "correctAnswer": "79,2",
        "explanation": "Đáp án: 79,2.<br/>n<sub>NaOH</sub> = n<sub>KOH</sub> =  560.1981980mmol1,98mol56==<br/>m<sub>NaOH</sub> = 1,98.40 = 79,2 g.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "79,2",
          "79.2"
        ]
      },
      {
        "id": "hoa12_ck1_de05_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Protein là một trong những nguồn thức ăn chính bổ sung các amino acid thiết yếu và năng lượng cho cơ thể con người.<br/>- Đối với người trưởng thành, sức khỏe bình thường, không thường xuyên tập thể dục thể thao thì mỗi ngày cần khoản 1,1 – 1,15 gam protein/kg trọng lượng cơ thể.<br/>- Đối với người trưởng thành có tập thể dục thể thao (3 đến 4 buổi/tuần) thì cần khoản 1,7 – 2,2 gam protein/kg trọng lượng cơ thể.<br/>- Đối với người thường xuyên tập gym hằng ngày:<br/>+ Nếu bạn là nữ thì nên bổ sung cho cơ thể từ  2,2 – 2,6g protein/kg trọng lượng cơ thể<br/>+ Nếu bạn là nam thì nên bổ sung cho cơ thể từ 2,2 – 3,3g protein/kg trọng lượng cơ thể<br/>Bạn có thể bổ sung protein qua các loại thực phẩm như: thịt, cá, trứng, sữa, rau, củ,… dưới đây là hàm lượng protein trong các loại thực phẩm.<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Tên thực phẩm</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Số gam protein cung cấp</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Ức gà (đã nấu chín)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">31g protein/ 100g ức gà</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Thịt cá ngừ (chưa chế biến)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">29g protein/ 100g thịt cá ngừ</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Trứng cỡ vừa (đã luộc chín)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">6,3g protein/ 50 gam trứng</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Thịt bò nạc (đã nấu chín)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">28,6g protein /100g thịt bò nạc</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Chuối</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">1,09g protein/100g chuối</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Bắp</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">2,23g protein/100g bắp</td></tr></table></div><br/>Một người có trọng lượng 60 kg, ít vận động, để đảm bảo lượng protein tối thiểu cho người này cần sử dụng bao nhiêu gam thịt bò nạc mỗi ngày (nguồn cung cấp protein chủ yếu từ thịt bò nạc đã nấu chín)? (đáp án lấy 3 kí tự, và được làm tròn theo qui tắc toán học)",
        "images": [],
        "correctAnswer": "231",
        "explanation": "Đáp án: 231.<br/>m = 1,1.60.100/28,6 = 230,8 g.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "231"
        ]
      },
      {
        "id": "hoa12_ck1_de05_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Viết phương trình điều chế tơ capron từ caprolactam.<br/>b) Vì sao không nên dùng xà phòng có độ kiềm cao để giặt quần áo làm bằng nylon, len, tơ tằm và không nên giặt bằng nước quá nóng hoặc là (ủi) quá nóng các đồ dùng trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)<br/>b) Nylon, len, tơ tằm đều có các nhóm CO-NH trong phân tử. Vì vậy, các loại tơ này dễ bị thuỷ phân trong môi trường kiềm và acid. Do đó, độ bền của quần áo làm bằng các loại tơ này sẽ bị giảm đi khi giặt bằng xà phòng có độ kiềm cao.<br/>Nylon, len, tơ tằm kém bền với nhiệt nên không được giặt chúng bằng nước quá nóng, không là (ủi) quá nóng.",
        "explanationImages": [
          "/assets/hoa12/final/h12_ck1_de5_image6.png"
        ],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de05_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm). Một loại quặng nhôm có chứa 40% khối lượng Al.<br/>a) Nhôm trong loại quặng trên ở dạng Al<sub>2</sub>O<sub>3</sub>, hỏi quặng trên chứa bao nhiêu phần trăm tạp chất.<br/>b) Để điện phân toàn bộ lượng Al<sub>2</sub>O<sub>3</sub> nóng chảy thu được từ 1000 kg loại quặng trên bởi dòng điện một chiều có cường độ 10000 A thì về lí thuyết cần bao nhiêu giờ điện phân liên tục? Cho biết số mol electron n đi qua dây dẫn được tính theo công thức  I.tn  .F=  Trong đó, I là cường độ dòng điện (A), t là thời gian (s), F là số Faraday (96500 C.mol<sup>-1</sup>).",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Xét m<sub>quặng</sub> = 1000 kg  23AlAlO400m1000.40%400kgm.102755,56kg.27.2Þ==Þ==<br/>Vậy phần trăm tạp chất trong loại quặng trên là  1000755,56.100%24,4%1000-=<br/>b) Số mol Al trong 1000kg quặng trên là  3310.10.40%14815mol27=<br/>Số mol electron cần cho quá trình điện phân là 3.14815 = 44445 mol vì  3Al3e3Al++®<br/>Áp dụng công thức tính được t = 119,14 giờ.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de05_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm). Y là hexapeptide mạch hở, tạo bởi Ala, Gly, Glu và Val, với amino acid đầu N và amino acid đầu C đều là Val. Thủy phân không hoàn toàn Y thu được hỗn hợp sản phẩm, trong đó có dipeptide Ala–Val và 2 tripeptide đều có amino acid đầu N là Val. Đề nghị công thức cấu tạo có thể có của Y.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>Y có thể có 4 công thức cấu tạo: Val–Gly–Glu–Val–Ala–Val; Val–Glu–Gly–Val–Ala–Val; Val–Glu–Ala–Val–Gly–Val và Val–Gly–Ala–Val–Glu–Val.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck1_de06",
    "code": "H12-CK1-06",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de06_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng và chất giặt rửa có khả năng tẩy rửa là do phân tử của chúng có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "một đầu phân cực và một đầu không phân cực.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "một đầu kị nước và một đầu ưa dầu.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hai đầu không phân cực.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hai đầu phân cực.",
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
        "id": "hoa12_ck1_de06_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ethyl formate có mùi thơm của đào và có thành phần trong hương vị của quả mâm xôi, đôi khi nó cũng được tìm thấy trong táo, ester này có công thức cấu tạo là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOC<sub>2</sub>H<sub>5</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>COOCH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCOOCH<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOCH=CH<sub>2</sub>.",
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
        "id": "hoa12_ck1_de06_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Glucose và fructose thuộc loại carbohydrate nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Disaccharide",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Monosaccharide",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Oligosaccharide",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Polysaccharide.",
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
        "id": "hoa12_ck1_de06_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dung dịch saccharide sau: fructose, glucose, saccharose. Để phân biệt saccharide này không thể chỉ dùng các thuốc thử nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước bromine và dung dịch acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thuốc thử Tollens và nước bromine.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước bromine và dung dịch kiềm",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nước bromine và Cu(OH)<sub>2</sub>/NaOH (t<sup>o</sup>).",
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
        "id": "hoa12_ck1_de06_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận xét nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tinh bột và cellulose được tạo thành từ quá trình quang hợp của cây xanh.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tinh bột và cellulose có phân tử khối bằng nhau.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tinh bột và cellulose đều có cùng số mắt xích trong phân tử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tinh bột và cellulose đều tan trong nước.",
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
        "id": "hoa12_ck1_de06_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là amine bậc một?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>-NH<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>-NH-CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(CH<sub>3</sub>)<sub>3</sub>N",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>2</sub>H<sub>5</sub>-NH-CH<sub>3</sub>.",
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
        "id": "hoa12_ck1_de06_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Leucine có công thức cấu tạo  \\mathrm{HOOCCH}\\left(\\mathrm{NH}_2\\right) \\mathrm{CH}_2 \\mathrm{CH}\\left(\\mathrm{CH}_3\\right)_2 , là  \\alpha -amino acid có khả năng điều hoà sự tổng hợp protein của cơ. Tên theo danh pháp thay thế của leucine là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2-aminoisohexanoic acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2-amino-4-methylpentanoic acid.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4-amino-2-methylpentanoic acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2-amino-isohexanoic acid.",
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
        "id": "hoa12_ck1_de06_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính chất vật lí chung của polymer là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chất lỏng, không màu, tan tốt trong nước.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chất rắn, không bay hơi, không tan trong nước.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chất lỏng, không màu, không tan trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chất rắn, không bay hơi, dễ tan trong nước.",
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
        "id": "hoa12_ck1_de06_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Keo dán epoxy còn gọi là keo dán hai thành phần. Thành phần thứ nhất là hợp chất chứa hai nhóm…(1)… ở hai đầu, thành phần thứ hai là chất đóng rắn, thường là các …(2)…., chẳng hạn NH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>NHCH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub>. Các từ ở khoảng trống (1) và (2) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) amino acid; (2) epoxy",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) amine; (2) epoxy.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) epoxy; (2) acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) epoxy; (2) amine.",
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
        "id": "hoa12_ck1_de06_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Qua nghiên cứu thực nghiệm cho thấy cao su thiên nhiên là polymer của monomer nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Buta-1,2-diene",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Buta-1,3-diene.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2-methylbuta-1,3-diene",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Buta-1,4-diene.",
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
        "id": "hoa12_ck1_de06_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dãy sắp xếp các kim loại theo chiều giảm dần tính khử: Na, Mg, Al, Fe. Trong số các cặp oxi hoá - khử sau, cặp nào có giá trị thế điện cực chuẩn nhỏ nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mg<sup>2+</sup>/Mg",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fe<sup>2+</sup>/Fe",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na<sup>+</sup>/Na",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "A1<sup>3+</sup>/A1.",
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
        "id": "hoa12_ck1_de06_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận xét nào sau đây đúng về quá trình điện phân ở hai điện cực?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cation nhường electron ở cathode",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Anion nhận electron ở anode.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sự oxi hóa xảy ra ở anode",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự oxi hóa xảy ra ở cathode.",
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
        "id": "hoa12_ck1_de06_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho peptide X có cấu tạo như sau: Gly-Ala-Gly.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X là một tripeptide.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phân tử X có chứa 3 liên kết peptide.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X có khả năng hòa tan Cu(OH)<sub>2</sub>/OH<sup>–</sup> tạo dung dịch màu xanh lam gọi là phản ứng màu biuret.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tử khối của X là 203.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. X có 2 liên kết peptide.<br/>c) Sai. Dung dịch có màu tím.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de06_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Trong công nghiệp, nhôm được sản xuất từ quặng bauxite theo hai giai đoạn chính<br/>Giai đoạn 1: Tinh chế quặng bauxite<br/>Quặng bauxite (thành phần chính là Al<sub>2</sub>O<sub>3</sub>.2H<sub>2</sub>O) thường lẫn tạp chất. Sau khi loại bỏ tạp chất bằng phương pháp hóa học thu được Al<sub>2</sub>O<sub>3</sub>.<br/>Giai đoạn 2: Điện phân Al<sub>2</sub>O<sub>3</sub>nóng chảy như mô hình sau:",
        "images": [
          "/assets/hoa12/final/h12_ck1_de6_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tại cathode xảy ra quá trình khử Al<sup>3+</sup> thành Al.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để tiết kiệm năng lượng đồng thời tạo ra chất lỏng vừa có tính dẫn điện tốt, vừa nổi lên trên Al lỏng để ngăn cách Al lỏng với không khí người ta trộn Al<sub>2</sub>O<sub>3</sub> với cryolite (Na<sub>3</sub>AlF<sub>6</sub>).",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong quá trình điện phân phải hạ thấp dần các điện cực anode làm bằng than chì vào thùng điện phân.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có thể điện phân nóng chảy AlCl<sub>3</sub> trong sản xuất nhôm.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng. Khí oxygen sinh ra ở cực dương đốt cháy dần dần than chì sinh ra CO<sub>2</sub>. Do vậy trong quá trình điện phân phải hạ thấp dần các cực dương (anode) vào thùng điện phân.<br/>d) Sai. AlCl<sub>3</sub> bị thăng hoa trong quá trình điện phân.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de06_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Khi cho một ít mỡ lợn (sau khi rán, giả sử là tristearin) vào bát sứ đựng dung dịch NaOH, sau đó đun nóng và khuấy đều hỗn hợp một thời gian.<br/>(1) Công thức phân tử của tristearin là C<sub>57</sub>H<sub>110</sub>O<sub>6</sub>.<br/>(2) Khi khuấy đều và đun sôi hỗn hợp một thời gian thì thu được hỗn hợp đồng nhất.<br/>(3) Sản phẩm thu được từ phản ứng trên là sodium stearate và ethanol.<br/>(4) Sau khi phản ứng kết thúc, thêm vào một ít muối ăn, khuấy cho tan hết thấy có lớp chất rắn màu trắng nhẹ nổi lên phía trên.<br/>Liệt kê các phát biểu đúng theo dãy số thứ tự tăng dần.",
        "images": [],
        "correctAnswer": "124",
        "explanation": "Đáp án: 124.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "124"
        ]
      },
      {
        "id": "hoa12_ck1_de06_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Để sản xuất ethyl alcohol, người ta dùng nguyên liệu là mùn cưa và vỏ bảo từ gỗ chứa 50% cellulose. Nếu muốn điều chế 100 kg ethyl alcohol, hiệu suất quá trình là 35%, thì khối lượng nguyên liệu mà nhà máy đó cần dùng là bao nhiêu kg? (Kết quả làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "1006",
        "explanation": "Đáp án: 1006.<br/>¾¾®¾¾®+6105n6126252(CHO)CHO2CHOH2CO<br/>10011..46235%   10046<br/>TB100111m...162.1006,2kg46235%50%Þ==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "1006"
        ]
      },
      {
        "id": "hoa12_ck1_de06_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng hóa học sau:<br/>Trong các phản ứng trên, có bao nhiêu phản ứng làm giảm mạch polymer?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de6_image5.png"
        ],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Có hai phản ứng c), d).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "2"
        ]
      },
      {
        "id": "hoa12_ck1_de06_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Điện phân V lít dung dịch CuCl<sub>2</sub> 0,4 M với điện cực trơ. Khi dừng điện phân thu được dung dịch X và 1,86 lít khí chlorine (ở điều kiện chuẩn) duy nhất ở anode. Toàn bộ dung dịch X tác dụng vừa đủ với 12,6 g Fe. Giá trị của V là bao nhiêu (làm tròn kết quả đến hàng phần trăm)?",
        "images": [],
        "correctAnswer": "0,75",
        "explanation": "Đáp án: 0,75.<br/>Cathode: Cu<sup>2+</sup> + 2e → Cu                                   Anode: 2Cl<sup>-</sup> → Cl<sub>2</sub> + 2e<br/>Số mol CuCl<sub>2</sub> đã điện phân là: 0,075 mol<br/>Dung dịch X có CuCl<sub>2</sub> dư, H<sub>2</sub>O.<br/>Fe   +  CuCl<sub>2</sub>→ FeCl<sub>2</sub> + Cu<br/>0,225  0,225<br/>0,075+0,225V =  = 0,75 lít0,4",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "0,75",
          "0.75"
        ]
      },
      {
        "id": "hoa12_ck1_de06_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm). Cho hai loại tơ sau: nylon-6,6 và tơ nitron.<br/>a) Hãy xác định tơ nào được tạo thành từ phản ứng trùng hợp, tơ nào được tạo thành từ phản ứng trùng ngưng.<br/>b) Hãy xác định các monomer cấu tạo nên các loại tơ trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Trùng hợp: nitron. Trùng ngưng: nylon-6,6.<br/>b) Monomer ứng với:<br/>+ Nylon-6,6: H<sub>2</sub>N[CH<sub>2</sub>]<sub>6</sub>NH<sub>2</sub> và HOOC-[CH<sub>2</sub>]<sub>4</sub>-COOH<br/>+ Nitron: CH<sub>2</sub>=CH-CN",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de06_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Không nên ăn, uống các loại thực phẩm chứa nhiều vitamin C lúc gần uống sữa.<br/>b) Tính thể tích dung dịch HCl 1 M cần thiết để trung hoà hoàn toàn 100 mL dung dịch methylamine 0,5M.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Các loại thực phẩm chứa nhiều vitamin C thường có pH thấp sẽ làm tăng nồng độ acid trong dạ dày, có thể xảy ra sự đông tụ protein trong sữa, gây chướng bụng, khó tiêu.<br/>b) CH<sub>3</sub>NH<sub>2</sub> + HCl  CH<sub>3</sub>NH<sub>3</sub>Cl<br/>nCH<sub>3</sub>NH<sub>2</sub> = n<sub>HCl</sub>= 0,05 mol<br/>V<sub>HCl</sub>= 0,05/1 = 0,05 lít = 50 mL",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de06_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm). Cho pin điện hoá tạo bởi hai cặp oxi hoá – khử ở điều kiện chuẩn: Pb<sup>2+</sup>/Pb và Zn<sup>2+</sup>/Zn với thể điện cực chuẩn tương ứng là –0,126 V và –0,762 V.<br/>a) Viết quá trình xảy ra ở mỗi điện cực và phương trình hoá học của phản ứng xảy ra khi pin hoạt động.<br/>b) Xác định sức điện động chuẩn của pin.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Tại anode: Zn  Zn<sup>2+</sup> + 2e<br/>Tại cathode: Pb<sup>2+</sup> + 2e  Pb<br/>Phản ứng hoá học xảy ra khi pin hoạt động: Zn + Pb<sup>2+</sup>  Zn<sup>2+</sup> + Pb<br/>b) E<sup>o</sup><sub>pin</sub> = –0,126 – (–0,762) = 0,636 V.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck1_de07",
    "code": "H12-CK1-07",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de07_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tơ nitron (hay olon) được tổng hợp từ phản ứng trùng hợp acrylonitrile. Tơ này có tính bền, chống thấm nước và được sử dụng trong các sản phẩm như vải, thảm và sợi tổng hợp. Monomer tham gia vào phản ứng trùng hợp để tạo thành tơ nitron là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>2</sub>=CH-CN",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>-CH=CH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cl<sup>-</sup>CH=CH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>2</sub>=CH<sub>2</sub>.",
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
        "id": "hoa12_ck1_de07_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Peptitde là các hợp chất hữu cơ được hình thành từ các đơn vị  a- amino acid liên kết với nhau qua liên kết peptite  ()CONH.---  Chất thuộc loại dipeptide là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>N-CH<sub>2</sub>-CH<sub>2</sub>-CO-NH-CH<sub>2</sub>-CO-NH-CH<sub>2</sub>-COOH.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>N-CH(CH<sub>3</sub>)-CO-NH-CH<sub>2</sub>-COOH.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>N-CH<sub>2</sub>-CO-NH-CH(CH<sub>3</sub>)-CH<sub>2</sub>-COOH.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>N-CH<sub>2</sub>-CH<sub>2</sub>-CO-NH-CH<sub>2</sub>-COOH.",
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
        "id": "hoa12_ck1_de07_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Carbohydrate nào sau đây thuộc loại polysaccharide?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cellulose",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Glucose",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Saccharose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fructose.",
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
        "id": "hoa12_ck1_de07_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phần không phân cực (\"đuôi\" kị nước) trong xà phòng và chất giặt rửa là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhóm sulfonate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhóm sulfate.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "gốc hydrocarbon dài.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhóm carboxylate.",
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
        "id": "hoa12_ck1_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phân tử chất nào sau đây có 1 nhóm amino (NH<sub>2</sub>) và 2 nhóm carboxyl (COOH)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Glutamic acid",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Alanine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lysine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Valine.",
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
        "id": "hoa12_ck1_de07_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng về ứng dụng của chất béo và các acid béo?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất béo là nguồn cung cấp và dự trữ năng lượng ở người và động vật.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong công nghiệp, chất béo dùng để chế biến thực phẩm, sản xuất xà phòng và glycerol, …",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Acid béo omega – 3 và omega – 6 là các acid béo không no với liên kết đôi đầu tiên ở vị trí số 3 và số 6 khi đánh số từ nhóm COOH.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Acid béo omega – 3 và omega – 6 đều có vai trò quan trọng đối với cơ thể, giúp phòng ngừa nhiều bệnh như bệnh về tim, động mạch vành, …",
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
        "id": "hoa12_ck1_de07_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dưới đáy chai hoặc các vật dụng bằng nhựa thường có các kí hiệu các con số đại diện cho loại nhựa được sử dụng như hình sau:<br/>Số 6 là kí hiệu của nhựa polystryrene (PS). Loại nhựa này đang được sử dụng để sản xuất đồ nhựa như cốc, chén dùng cho một lần hoặc hộp đựng thức ăn nguội mang về. Ở nhiệt độ cao, nhựa PS bị phân hủy sinh ra các chất có hại cho sức khỏe. Phát biểu sai khi nói về nhựa PS?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de7_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhựa PS được sử dụng để đựng bao gói thực phẩm hoặc đồ ăn ở nhiệt độ thường.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhựa PS được tổng hợp bằng phương pháp trùng hợp stryrene.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhựa PS được khuyến cao không nên sử dụng trong các lò vi sóng để quay nóng thức ăn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhựa PS thuộc loại polymer bán tổng hợp.",
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
        "id": "hoa12_ck1_de07_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cặp oxi hoá − khử nào sau đây có giá trị thế điện cực chuẩn lớn hơn 0?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ba<sup>2+</sup>/Ba",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fe<sup>3+</sup>/Fe<sup>2+</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K<sup>+</sup>/K.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Li<sup>+</sup>/Li.",
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
        "id": "hoa12_ck1_de07_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi điện phân dung dịch gồm Cu(NO<sub>3</sub>)<sub>2</sub> 1 M và AgNO<sub>3</sub> 1 M, thứ tự điện phân ở cathode là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cu<sup>2</sup><sup>+</sup>, Ag<sup>+</sup>, H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ag<sup>+</sup>, Cu<sup>2</sup><sup>+</sup>, H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>O, Cu<sup>2</sup><sup>+</sup>, Ag<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cu<sup>2</sup><sup>+</sup>, H<sub>2</sub>O, Ag<sup>+</sup>.",
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
        "id": "hoa12_ck1_de07_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho glucose phản ứng với Cu(OH)<sub>2</sub> trong môi trường kiềm đun nóng, hiện tượng nào sau đây sẽ xảy ra?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cu(OH)<sub>2</sub> bị tan ra, tạo dung dịch màu xanh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sinh ra chất rắn màu đen CuO.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tạo kết tủa đỏ gạch Cu<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cu(OH)<sub>2</sub> bị tan ra, tạo dung dịch màu tím.",
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
        "id": "hoa12_ck1_de07_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các amine có công thức cấu tạo dưới đây:<br/>Trong các hợp chất trên, hợp chất nào thuộc loại arylamine bậc I?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de7_image5.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất (1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất (2)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất (4).",
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
        "id": "hoa12_ck1_de07_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi nói về pin Galvani, phát biểu sau đây là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sức điện động chuẩn của pin Galvani có thể mang giá trị âm.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi pin Galvani hoạt động, có phản ứng hoá học diễn ra.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Pin Galvani cung cấp nguồn điện hoá học.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cầu muối cho phép dòng điện chạy qua.",
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
        "id": "hoa12_ck1_de07_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Tơ capron là loại tơ có tính dai, độ đàn hồi và độ bóng cao, ít thấm nước và được sử dụng để dệt vải may mặc. Tơ capron được tổng hợp từ caprolactam theo phương trình hoá học sau:",
        "images": [
          "/assets/hoa12/final/h12_ck1_de7_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phản ứng (1), các phân tử monomer bị mở vòng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tơ capron là tơ bán tổng hợp.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Do tơ capron và tơ nylon-6,6 đều có các nhóm -CO-NH- nên hai loại tơ này đều bền với dung dịch kiềm mạnh.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Do tơ capron có các nhóm -CO-NH- nên tơ capron là peptide.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. Monomer caprolactam bị mở vòng do liên kết giữa CO và NH bị đứt.<br/>b) Sai, Tơ capron là tơ tổng hợp do được điều chế từ caprolactam bằng phản ứng trùng hợp hoặc từ H<sub>2</sub>N[CH<sub>2</sub>]<sub>5</sub>COOH bằng phản ứng trùng ngưng.<br/>c) Sai. Nhóm -CO-NH- kém bền trong môi trường kiềm mạnh nên tơ capron và tơ nylon-6,6 đều kém bền trong môi trường kiềm mạnh.<br/>d) Sai. Liên kết -CO-NH- trong capron là nhóm amide, không phải nhóm peptide nên tơ capron là polyamide.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de07_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Một nhóm học sinh tìm hiểu quá trình thu hồi kim loại đồng (copper) bằng phương pháp điện phân từ một đồng xu làm bằng hợp kim Cu - Zn chứa khoảng 95%  đồng về khối lượng. Giả thuyết của nhóm học sinh là \"khi điện phân, chỉ có tạp chất trong đồng xu tan hết vào trong dung dịch, còn lại sẽ là đồng tinh khiết\". Để kiểm tra giả thuyết này, nhóm học sinh đã thực hiện thí nghiệm như sau:<br/>- Cân để xác định khối lượng ban đầu của đồng xu 2,23 gam và thanh đồng tinh khiết (2,55 gam).<br/>- Nối đồng xu với một điện cực và thanh đồng tinh khiết với điện cực còn lại của nguồn điện một chiều, rồi nhúng vào bình điện phân chứa dung dịch copper (II) sulfate.<br/>- Điện phân ở hiệu điện thế phù hợp.<br/>- Sau một thời gian điện phân, làm khô, rồi cân để xác định lại khối lượng của đồng xu và thanh đồng tinh khiết, thấy khối lượng đồng xu là 1,94 gam và khối lượng thanh đồng là m<sub>1</sub> gam.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong thí nghiệm trên, đồng xu được nối với cực âm, thanh đồng tinh khiết được nối với cực dương của nguồn điện.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giá trị của m<sub>1</sub> lớn hơn 2,55.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở cực dương xảy ra quá trình oxi hóa.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Do khối lượng của đồng xu giảm, nên giả thiết ban đầu của nhóm học sinh là đúng.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Do đồng xu có khối lượng giảm nên đây là quá trình điện phân xảy ra hiện tượng dương cực tan với đồng xu được nối với cực dương, thanh đồng tinh khiết được nối với cực âm của nguồn điện.<br/>b) Đúng.<br/>+ Tại anode (đồng xu): Cu → Cu<sup>2+</sup>+ 2e.<br/>+ Tại cathode (thanh đồng tinh khiết): Cu<sup>2+</sup> + 2e → Cu.<br/>Do có thêm Cu bám vào nên thanh đồng tinh khiết nặng hơn ban đầu (m > 2,55).<br/>c) Đúng.<br/>d) Sai. Khối lượng của đồng xu giảm là do Cu tan ra chứ không phải là do tạp chất tan ra, nên giả thuyết ban đầu của nhóm học sinh là sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de07_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Pin X - Y có sức điện động chuẩn là +0,322 V, pin Y - Z có sức điện động chuẩn là +0,183 V và 2oZ/ZE0,257V+=- . Thế điện cực của cặp oxi hoá - khử X<sup>2+</sup>/X bằng bao nhiêu volt (V)? (Làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "-0,8",
        "explanation": "Đáp án: -0,8.<br/>z – y = 0,183  y = -0,44<br/>y – x = 0,322  x = -0,762.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "-0,8",
          "-0.8"
        ]
      },
      {
        "id": "hoa12_ck1_de07_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Thực hiện phản ứng ester hoá 0,1 mol acetic acid và 0,1 mol isoamyl alcohol (có H<sub>2</sub>SO<sub>4</sub> đặc, xúc tác) để điều chế isoamyl acetate (còn gọi là dầu chuối) theo phản ứng hoá học sau:<br/>()()24HSO, t33223223222CHCOOHCHCHCHCHOHCHCOOCHCHCHCHHO¾¾¾¾®++¬¾¾¾¾o<br/>Trong các đồ thị được đánh số từ 1 đến 4 dưới đây, đồ thị nào biểu diễn sự thay đổi số mol (n) isoamyl acetate theo thời gian (t)?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de7_image9.png"
        ],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "1"
        ]
      },
      {
        "id": "hoa12_ck1_de07_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Thủy phân 259,52 gam saccharose thu được dung dịch X, sau đó cho X tác dụng với AgNO<sub>3</sub> trong NH<sub>3</sub> dư. Toàn bộ lượng bạc thu được đem tráng một loại gương soi có diện tích bề mặt là 10<sup>4</sup> cm<sup>2</sup> với độ dày lớp bạc được tráng lên là  10<sup>-5</sup> cm. Biết hiệu suất phản ứng thủy phân và tráng bạc đều là 80% và khối lượng riêng của bạc là 10,49 g/cm<sup>3</sup>. Số gương soi tối đa được tráng bạc là bao nhiêu? (làm tròn kết quả đến hàng đơn vị)",
        "images": [],
        "correctAnswer": "200",
        "explanation": "Đáp án: 200.<br/>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>  2C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  4Ag<br/>m<sub>Ag</sub> =  259,52.2.2.108.80%.80%209,8g342=<br/>m<sub>Ag (</sub><sub>tráng</sub><sub>1</sub><sub>chiếc</sub><sub>gương)</sub> = 10<sup>4</sup>.10<sup>-5</sup>.10,49 = 1,049 gam<br/>Số chiếc gương = 209,8/1,049 = 200.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "200"
        ]
      },
      {
        "id": "hoa12_ck1_de07_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Poly(methyl methacrylate) (PMMA) là một nhựa nhiệt dẻo trong suốt, thường được sử dụng ở dạng tấm, miếng như một vật liệu nhẹ, khó bể vỡ có thể được dùng để thay thế cho kính và thủy tinh. Monomer để tạo nên sản phẩm này chính là ester methyl methacrylate. Tiến hành tổng hợp 25 kg methyl methacrylate bằng cách cho lượng dư methyl alcohol tác dụng với 25,8 kg methacrylic acid. Hiệu suất của phản ứng ester hóa là bao nhiêu phần trăm (làm tròn kết quả đến hàng phần mười)?",
        "images": [],
        "correctAnswer": "83,3",
        "explanation": "Đáp án: 83,3.<br/>2332332CHC(CH)COOHCHOHCHC(CH)COOCHHO86100(kg)25,8m(kg)=-+=-+®®<br/>methyl methacrylate(lt)25,8100m30kg86´Þ==   25100H%83,3%30´Þ==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "83,3",
          "83.3"
        ]
      },
      {
        "id": "hoa12_ck1_de07_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Giải thích hiện tượng khi nấu canh cua thì thấy các mảng “ riêu cua” nổi lên.<br/>b) Người ta điều chế aniline theo sơ đồ sau: . o324+HNO, HSOFe + HCl, tBenzeneNitrobenzene Aniline¾¾¾¾¾®¾¾¾¾® . Biết hiệu suất giai đoạn tạo thành nitrobenzene đạt 65% và hiệu suất giai đoạn tạo thành aniline đạt 50%. Khối lượng benzene (kg) cần dùng để điều chế 3,1 kg aniline.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Khi nấu canh cua thì thấy các mảng “ riêu cua” nổi lên: sự đông tụ của protein do nhiệt độ.<br/>b)  65%50%66652652CHCHNOCHNH¾¾¾®¾¾¾®<br/>78                                                   93<br/>a                                                    3,1<br/>a  3,1.78100100..8 kg936550==",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de07_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Một loại vật liệu composite dùng để làm vỏ tàu thuyền được chế tạo từ sợi thuỷ tinh và nhựa polyester. Hãy xác định vật liệu cốt và vật liệu nền trong vật liệu composite trên.<br/>b) Thuật ngữ 3R bao gồm Reduce (tiết giảm), Reused (tái sử dụng) và Recycle (tái chế) nhằm hạn chế rác thải (trong đó chủ yếu là vật liệu polymer) đã xuất hiện và thực hiện từ lâu trên thế giới. Những năm gần đây, ở Việt Nam khẩu hiệu này cũng đã được tuyên truyền và áp dụng. Tuy nhiên, khâu tái chế rác vẫn còn rất hạn chế. Hãy nêu những hạn chế trong quá trình tái chế rác thải ở địa phương em.",
        "images": [
          "/assets/hoa12/final/h12_ck1_de7_image11.png"
        ],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) - Vật liệu cốt: sợi thuỷ tinh.<br/>- Vật liệu nền: nhựa polyester.<br/>b) Những hạn chế trong quá trình tái chế rác thải ở địa phương em:<br/>+ Người dân chưa có nhiều nhận thức về việc tái chế rác thải, khâu phân loại rác thải tại nguồn chưa được nhiều hộ gia đình phối hợp thực hiện.<br/>+ Chưa có nhiều công ty hay tổ chức thu gom và tái chế rác thải.<br/>+ Cơ sở thu gom rác thải tái chế mang tính cá nhân, có hiệu suất thu gom thấp, trong khi lượng rác thải có thể tái chế phát thải ngày càng nhiều…",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de07_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm). Cần mạ một lớp Ag lên một mặt của một chiếc đĩa tròn có bán kính 12 cm. Với độ dày lớp mạ là 0,01 mm, nếu được cung cấp nguồn điện một chiều có cường độ dòng điện I = 2 A trong thời gian t = 3 giờ thì có đủ để mạ theo yêu cầu trên không? Biết rằng khối lượng riêng của Ag là 10,5 g cm<sup>-3</sup>, hiệu suất điện phân là 100%.<br/>- Cho biết: q =  n.F = I.t, trong đó: q là điện lượng (C), n là số mol electron đi qua dây dẫn, I là cường độ dòng điện (A), t là thời gian (giây), F là hằng số Faraday (F = 96500 C.mol<sup>-1</sup>).",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>Ag<sup>+</sup> + 1e  Ag<br/>m<sub>Ag</sub> = D.V = 10,5.π.12<sup>2</sup>.(0,01/10) = 4,75 g<br/>eIt4,752.tnt2122s0,59F10896500=Þ=Þ== giờ < 3 giờ<br/>Vậy lượng điện cung cấp trong thời gian trên đủ để mạ điện chiếc đĩa nói trên.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck1_de08",
    "code": "H12-CK1-08",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de08_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khả năng giặt rửa của xà phòng là do muối của acid béo trong xà phòng có đặc điểm nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có nhóm -COONa hoặc -COOK tan trong dầu, mỡ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có phần gốc hydrocarbon R- tan được trong nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có tính chất hoạt động bề mặt gồm một phần kị nước và một phần ưa nước.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có phản ứng thuỷ phân trong nước.",
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
        "id": "hoa12_ck1_de08_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức nào sau đây mô tả đúng cấu tạo của fructose ở dạng mạch hở?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "muối chloride",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "alcohol đơn chức",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "xà phòng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "acid béo",
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
        "id": "hoa12_ck1_de08_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tinh bột và cellulose là polysaccharide (polymer thiên nhiên)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có công thức phân tử và và công thức cấu tạo giống nhau.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đều cho phản ứng màu với iodine.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đều dễ bị thủy phân trong môi trường acid.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "là hai chất đồng phân của nhau.",
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
        "id": "hoa12_ck1_de08_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên thay thế của amine CH<sub>3</sub>-NH-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "methylpropylamine.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "N-methylpropan-1-amine.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "N-methylpropan-3-amine.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N-propylmethanamine.",
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
        "id": "hoa12_ck1_de08_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vật liệu polymer nào sau đây chứa nguyên tố halogen?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "PE.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "PVC.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cao su buna.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tơ olon.",
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
        "id": "hoa12_ck1_de08_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vật liệu nào sau đây được cấu tạo từ polymer tổng hợp?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tơ visco.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tơ tằm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhựa PE",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cao su thiên nhiên.",
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
        "id": "hoa12_ck1_de08_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Poly(hexamethylen adipamide) (hay nylon-6,6) là một polymer được điều chế từ adipic acid và hexamethylendiamine. Nylon-6,6 được sử dụng để sản xuất tơ dệt vải may mặc, vải lót săm lốp xe, bện dây cáp, dây dù, đan lưới,…<br/>Cho các phát biểu sau:<br/>(a) Nylon-6,6 thuộc loại polyamide.<br/>(b) Tơ được chế tạo từ nylon-6,6 thuộc loại tơ tổng hợp.<br/>(c) Trong một mắt xích nylon-6,6, phần trăm khối lượng của nguyên tố carbon là 62,73%.<br/>(d) Để giữ độ bền cho quần, áo dệt bằng sợi nylon-6,6 thì nên sử dụng xà phòng có tính kiềm cao.<br/>Các phát biểu đúng là",
        "images": [
          "/assets/hoa12/final/h12_ck1_de8_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a), (b), (d).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(b), (d).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(b), (c), (d)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(a), (b).",
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
        "id": "hoa12_ck1_de08_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Pin nhiên liệu được nghiên cứu rộng rãi nhằm thay thế nguồn nhiên liệu hóa thạch ngày càng cạn kiệt. Trong pin nhiên liệu, dòng điện được tạo ra do phản ứng oxi hóa nhiên liệu (hydrogen, carbon monooxide, methanol, ethanol, propane,…) bằng oxygen không khí. Pin nhiên liệu phổ biến hiện nay là pin hydrogen. Nhược điểm của pin nhiên liệu là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "thời gian hoạt động của pin không bị hạn chế.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "không tạo ra các sản phẩm gây ô nhiễm môi trường.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhiên liệu được bổ sung liên tục.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "công nghệ chưa phổ biến và giá thành cao.",
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
        "id": "hoa12_ck1_de08_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thích hợp, hai chất phản ứng với nhau tạo thành methyl formate là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOH và NaOH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HCOOH và CH<sub>3</sub>OH.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCOOH và C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>COONa và CH<sub>3</sub>OH.",
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
        "id": "hoa12_ck1_de08_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dãy sắp xếp các kim loại theo chiều giảm dần tính khử: Na, Mg, Al, Fe. Trong số các cặp oxi hoá - khử sau, cặp nào có giá trị thế điện cực chuẩn nhỏ nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mg<sup>2+</sup>/Mg",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fe<sup>2+</sup>/Fe",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na<sup>+</sup>/Na",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Al<sup>3+</sup>/Al.",
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
        "id": "hoa12_ck1_de08_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thủy phân m g saccharose trong môi trường acid với hiệu suất 90%, thu được sản phẩm chứa 10,8 g glucose. Giá trị của m là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "22,8.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "17,1.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "18,5.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "20,5.",
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
        "id": "hoa12_ck1_de08_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Loại hợp chất nào sau đây chứa các thành phần \"phi protein\" như nucleic acid, lipid, carbohydrate?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Protein đơn giản",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Protein phức tạp",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất béo",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Polysaccharide.",
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
        "id": "hoa12_ck1_de08_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Peptide được phân loại theo số lượng đơn vị α–amino acid trong phân tử. Với số lượng các α–amino acid khác nhau cũng tạo ra một số phản ứng khác nhau của peptide.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử tripeptide Gly-Ala-Val có 6 nguyên tử oxygen.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ala-Gly và Gly-Ala là hai tên gọi của cùng một phân tử dipeptide.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tetrapeptide thường chứa 4 liên kết peptide trong phân tử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có thể điều chế 4 dipeptide mạch hở khác nhau từ Gly và Val.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Có 4 nguyên tử O.<br/>b) Sai. Tên của hai chất khác nhau.<br/>c) Sai. Có 3 liên kết peptide.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de08_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Điện phân dung dịch NaCl bão hòa (với điện cực trơ, màng ngăn xốp) đến khi nồng độ NaCl giảm đi một nửa thì dừng điện phân.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch sau điện phân làm phenolphthalein chuyển màu hồng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở cathode chỉ xảy ra quá trình khử ion Na<sup>+</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phương trình hóa học của phản ứng điện phân:  2222NaCl(aq) + 2HO(l)H(g) + Cl(g) + 2Na(s).®",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số mol khí Cl<sub>2</sub> thoát ra ở anode bằng số mol H<sub>2</sub> thoát ra ở cathode.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Tại anode:<br/>Tại cathode:<br/>2222NaCl(aq) + 2HO(l)H(g) + Cl(g) + 2NaOH(aq).®<br/>a) Đúng.<br/>b) Sai.<br/>c) Sai.<br/>d) Đúng.  2222ClHClHBTe:n.2n.2nn=Þ= .",
        "explanationImages": [
          "/assets/hoa12/final/h12_ck1_de8_image13.png",
          "/assets/hoa12/final/h12_ck1_de8_image14.png"
        ],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de08_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu sau:<br/>(1) Trong thực tế, PE được dùng để chế tạo chất dẻo, vật liệu cách điện, cách nhiệt.<br/>(2) Poly(methyl methacrylate) được dùng để chế tạo cao su.<br/>(3) Polymer có thể tham gia các phản ứng giữ nguyên mạch, phân cắt mạch hoặc tăng mạch polymer.<br/>(4) Polymer chỉ có thể được điều chế bằng phản ứng trùng hợp.<br/>Liệt kê các phát biểu đúng theo dãy số thứ tự tăng dần.",
        "images": [],
        "correctAnswer": "13",
        "explanation": "Đáp án: 13.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "13"
        ]
      },
      {
        "id": "hoa12_ck1_de08_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Xà phòng hóa hoàn toàn triglyceride X trong dung dịch NaOH (vừa đủ); thu được sodium oleate và sodium palmitate theo tỉ lệ mol tương ứng là 1 : 2. Phân tử khối của X là bao nhiêu?",
        "images": [],
        "correctAnswer": "832",
        "explanation": "Đáp án: 832.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "832"
        ]
      },
      {
        "id": "hoa12_ck1_de08_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho thế điện cực chuẩn của cặp Mg<sup>2+</sup>/Mg là  –2,356V; Fe<sup>2+</sup>/Fe là  –0,440. Tính sức điện động (V) của pin Mg – Fe. (Kết quả làm tròn đến hàng phần trăm).",
        "images": [],
        "correctAnswer": "1,92",
        "explanation": "Đáp án: 1,92.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "1,92",
          "1.92"
        ]
      },
      {
        "id": "hoa12_ck1_de08_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Ethanol được điều chế từ tinh bột bằng phương pháp lên men với hiệu suất toàn bộ quá trình là 90%. Hấp thụ toàn bộ lượng CO<sub>2</sub> sinh ra khi lên men m g tinh bột vào nước vôi trong, thu được 330 g kết tủa và dung dịch X. Biết khối lượng X giảm đi so với khối lượng nước vôi trong ban đầu là 132 g. Giá trị của m là bao nhiêu?",
        "images": [],
        "correctAnswer": "805",
        "explanation": "Đáp án: 405.<br/>C<sub>6</sub>H<sub>10</sub>O<sub>5</sub> → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub><br/>m <sub>dd giảm</sub>=  3CaCOm  –  2COm  →  2COm =  3CaCOm  – m<sub>dd giảm</sub> = 330 – 132 = 198 g<br/>2COn  = 198 : 44 = 4,5 mol → m = 4,5:2.162.100:90 = 405 g",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "805"
        ]
      },
      {
        "id": "hoa12_ck1_de08_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Giải thích vì sao khi chế biến một số loại thực phẩm từ thịt, cá, ... người ta thêm gia vị chua như giấm ăn, chanh hoặc vài lát dứa.<br/>b) Mùi tanh của cá chủ yếu do amine gây ra như trimethylamine. Làm thế nào để khử mùi tanh của cá?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Đồ ăn có vị chua như giấm ăn, chanh hoặc vài lát dứa (thơm),... có chứa các acid hữu cơ. Trong môi trường acid, protein ở thịt, cá bị thủy phân thành các chuỗi polypeptide nhỏ hơn giúp thịt, cá mềm nhanh hơn.<br/>b) Mùi tanh cá gây ra bởi các amine (các chất có tính base) như trimethylamine, ta có thể sử dụng chất có tính acid như giấm hoặc chanh. Giấm và chanh đều có chứa acd yếu sẽ tạo muối với amine và bị rửa trôi bằng nước, mà không ảnh hưởng nhiều đến chất lượng cá.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de08_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "Polymer A trong suốt, được dùng làm hộp dựng thực phẩm, để chơi trẻ em, vỏ đĩa CD, DVD,... Trong công nghiệp sản xuất chất dẻo, polymer A được điều chế theo sơ đồ:<br/>a) Xác định công thức cấu tạo của polymer A.<br/>b) Từ 1 tấn benzene với hiệu suất mỗi quá trình (1), (2), (3) lần lượt là 60%, 55% và 70%. Khối lượng polymer A thu được là bao nhiêu kg?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de8_image8.png"
        ],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)<br/>b)<br/>66CH1000n78=  kmol  m<sub>A</sub> =  100078 . 60%. 55%.70%.104  = 308 kg.",
        "explanationImages": [
          "/assets/hoa12/final/h12_ck1_de8_image9.png"
        ],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de08_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Cho các kim loại: K, Mg, Al, Ag. Hãy viết các cặp oxi hóa – khử tạo bởi các kim loại đó và dựa vào bảng giá trị thế điện cực chuẩn, sắp xếp theo thứ tự giảm dần tính oxi hoá của các ion kim loại tương ứng.<br/>b) Điện phân 500 mL dung dịch AgNO<sub>3</sub> với điện cực trơ cho đến khi cathode bắt đầu có khí thoát ra thì dừng lại. Để trung hòa dung dịch sau điện phân cần 80 mL dung dịch NaOH 0,1 M. Biết cường độ dòng điện là 0,2A và hằng số Faraday F = 96500 C/mol. Thời gian điện phân của quá trình trên là bao nhiêu giây?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Các cặp oxi hoá – khử tạo bởi các kim loại đó là: K<sup>+</sup>/K, Mg<sup>2+</sup>/Mg, Al<sup>3+</sup>/Al, Ag<sup>+</sup>/Ag.<br/>- Thứ tự giảm dần tính oxi hoá là: Ag<sup>+</sup>, Al<sup>3+</sup>, Mg<sup>2+</sup>, K<sup>+</sup>.<br/>b) Cathode: Ag<sup>+</sup> + e → Ag Anode: 2H<sub>2</sub>O → 4H<sup>+</sup>+ O<sub>2</sub> + 4e.<br/>Phản ứng trung hòa: H<sup>+</sup> + OH<sup>-</sup> → H<sub>2</sub>O<br/>n<sub>NaOH</sub> = n<sub>H<sup>+</sup></sub> = 0,08 . 0,1 = 0,008 (mol) → số eletron trao đổi là 0,008 mol<br/>số mol Ag tham gia phản ứng điện phân 0,008 mol<br/>AgAgAgAn.F10,008.96500m = . . I. t => t =  =  = 3860 sFnI0,2<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck1_de09",
    "code": "H12-CK1-09",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de09_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các chất sau đây, chất nào là thành phần chính của chất giặt rửa tổng hợp?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>[CH<sub>2</sub>]<sub>11</sub>-C<sub>6</sub>H<sub>4</sub>-SO<sub>3</sub>Na",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub> [CH<sub>2</sub>]<sub>14</sub>-COOK.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>[CH<sub>2</sub>]<sub>16</sub>-COONa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(CH<sub>3</sub>[CH<sub>2</sub>]<sub>16</sub>-COO)<sub>2</sub>Ca.",
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
        "id": "hoa12_ck1_de09_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuốc thử nào sau đây có thể phân biệt được dung dịch saccharose và glucose ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch H<sub>2</sub>SO<sub>4</sub> loãng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch NaOH.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch AgNO<sub>3</sub>/NH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na kim loại.",
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
        "id": "hoa12_ck1_de09_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tinh bột thuộc loại polysaccharide, có nhiều trong các loại ngũ cốc như hạt lúa, hạt ngô, củ khoai, củ sắn,... Công thức của tinh bột là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>.",
            "isCorrect": false
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
            "text": "C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>.",
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
        "id": "hoa12_ck1_de09_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, chất nào sau đây là chất lỏng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dimethylamine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Methylamine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Aniline",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ethylamine.",
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
        "id": "hoa12_ck1_de09_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để hạn chế tình trạng ô nhiễm môi trường khi sử dụng đồ nhựa, có thể thực hiện biện pháp như hình bên. Nội dung của biện pháp này là",
        "images": [
          "/assets/hoa12/final/h12_ck1_de9_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tái chế và tái sử dụng đồ nhựa đã dùng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hạn chế các loại bao bì nhựa, túi nylon.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mang theo túi đựng khi đi mua sắm.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sử dụng vật liệu phân hủy sinh học.",
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
        "id": "hoa12_ck1_de09_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Composite là vật liệu",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "được tổ hợp từ hai hay nhiều loại vật liệu thành phần khác nhau gồm vật liệu cốt và vật liệu nền.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "có cấu trúc hạt tinh thể có kích thước cỡ nm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có tính biến thiên có thể thay đổi liên tục các tính chất của vật liệu trong không gian.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "có thể ghi nhớ được hình dạng ban đầu của nó.",
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
        "id": "hoa12_ck1_de09_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cao su là loại cây công nghiệp có giá trị kinh tế cao. Chất lỏng thu được từ cây cao su giống như nhựa cây (gọi là mủ cao su) được dùng để sản xuất cao su tự nhiên. Polymer trong cao su tự nhiên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "polystyrene",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "polyisoprene.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "polyethylene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "poly(buta-1,3-diene).",
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
        "id": "hoa12_ck1_de09_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong quá trình điện phân, ở cực âm, chất nào có tính oxi hoá ...(1)... được ưu tiên điện phân trước. Ở cực dương, chất nào có tính khử ...(2)... được ưu tiên điện phân trước. Cụm từ thích hợp điền vào (1), (2) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) mạnh hơn, (2) yếu hơn.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) yếu hơn, (2) yếu hơn.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) mạnh hơn, (2) mạnh hơn.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) yếu hơn, (2) mạnh hơn.",
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
        "id": "hoa12_ck1_de09_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho dầu, mỡ (chất béo) vào nước sẽ có hiện tượng gì xảy ra?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dầu, mỡ tan trong nước.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dầu, mỡ tan trong nước và nổi lên trên mặt nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dầu, mỡ không tan trong nước và chìm xuống mặt nước.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dầu, mỡ không tan trong nước và nổi lên trên mặt nước.",
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
        "id": "hoa12_ck1_de09_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các thông tin sau:<br/>X(s) + YSO<sub>4</sub>(aq)  ¾¾®  không có phản ứng<br/>Z(s) + YSO<sub>4</sub>(aq)  ¾¾®  Y(s) + ZSO<sub>4</sub>(aq)<br/>Trong đó, X, Y, Z là các kim loại. Dãy nào sau đây sắp xếp đúng các kim loại theo mức độ hoạt động của chúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Z > Y > X",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X > Y > Z",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Y > X > Z",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Y > Z > X.",
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
        "id": "hoa12_ck1_de09_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong máu người trưởng thành, khỏe mạnh vào lúc đói (8 giờ sau ăn) có lượng đường huyết trong khoảng 4,4 – 7,2 mmol/L (theo quyết định số 5481/QĐ-BYT ngày 30 tháng 12 năm 2020 của Bộ Y tế). Cho các nhận định sau:<br/>(a) Lượng đường huyết là lượng đường glucose trong máu.<br/>(b) Kết quả xét nghiệm đường huyết của anh A vào buổi sáng (lúc chưa ăn) là 152 mg/dL (biết rằng 1 L = 10 dL). Anh A có lượng đường huyết thấp hơn mức giới hạn bình thường.<br/>(c) Lúc đói nếu ăn thực phẩm chứa tinh bột thì lượng đường huyết sẽ tăng trong một khoảng thời gian nhất định.<br/>(d) Khi bị hạ đường huyết thì nên uống một cốc nước đường ấm.<br/>Số nhận định đúng là",
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
        "displayNumber": 11
      },
      {
        "id": "hoa12_ck1_de09_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Arginine là hợp chất có tác dụng giãn mạch nên được sử dụng để điều trị cho những người bị suy tim mãn tính, người có nồng độ cholesterol cao…Với mỗi môi trường có giá trị pH bằng 3,0; 7,5; 11,0. Coi Arginine chỉ tồn tại dưới đây:<br/>H3NNNHHCOONH3+-3+      H2NNNHHCOONH3+-3     H2NNNHHCOONH2-3<br/>Dạng I (pH = 3,0)        Dạng II (pH = 7,5)                        Dạng III (pH = 11,0)<br/>Cho các nhận định:<br/>(a) Ở pH = 3,0, dạng I di chuyển về phía cực âm.<br/>(b) Ở pH = 7,5, dạng II hầu như không di chuyển.<br/>(c) Ở pH = 11,0, dạng III di chuyển về phía cực dương.<br/>(d) Ở pH = 7,5, dạng II di chuyển về phía cực âm.<br/>Các nhận định đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a), (b), (d)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(a), (c), (d)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(a), (b), (c)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(b), (c), (d).",
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
        "id": "hoa12_ck1_de09_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Papain là enzyme có tác dụng thuỷ phân protein, có nhiều trong quả đu đủ. Papain được tách từ nhựa đu đủ xanh, là một enzyme thực vật. Enzym papain rất tốt cho hệ tiêu hóa, giúp tiêu hóa các thức ăn giàu protein một cách dễ dàng hơn. Papain là enzyme có thể sản xuất thuốc điều trị các tác dụng phụ của xạ trị, hoặc nó có thể được sử dụng kết hợp với các liệu pháp khác để điều trị khối u,…Papain có cấu tạo như hình dưới đây:",
        "images": [
          "/assets/hoa12/final/h12_ck1_de9_image7.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Papain có một liên kết peptide.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Do papain có nhiều trong quả đu đủ có tác dụng phân giải protein có trong thịt nên khiến cho thịt khi nấu cùng đu đủ xanh sẽ nhanh mềm hơn.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Từ quả đu đủ xanh có thể chiết xuất được Papain.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Papain có công thức phân tử C<sub>9</sub>H<sub>15</sub>N<sub>3</sub>O<sub>3</sub>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai, papain có 1 nhóm -CONH- tạo bởi α-amino acid và β-amino acid nên không có liên kết peptide.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai, papain có công thức phân tử C<sub>9</sub>H<sub>15</sub>N<sub>4</sub>O<sub>3</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de09_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Hai nhóm học sinh tiến hành thí nghiệm điện phân dung dịch CuSO<sub>4</sub> với một điện cực than chì và một điện cực bằng đồng (bỏ qua sự thay đổi thể tích của dung dịch khi điện phân).<br/>Nhóm 1: Nối điện cực than chì với cực dương và điện cực đồng với cực âm của nguồn điện.<br/>Nhóm 2: Nối điện cực than chì với cực âm và điện cực đồng với cực dương của nguồn điện.<br/>Hai nhóm đều đưa ra giả thuyết sau: trong quá trình điện phân, nồng độ ion Cu<sup>2+</sup> giảm dần ứng với màu xanh của dung dịch nhạt dần.",
        "images": [
          "/assets/hoa12/final/h12_ck1_de9_image8.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở nhóm thứ hai, tại anode xảy ra quá trình oxi hoá đồng.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đối với cả hai nhóm đều có kim loại đồng bám vào cathode.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở nhóm thứ nhất, pH của dung dịch điện phân giảm dần.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Giả thuyết đúng với nhóm thứ nhất và sai với nhóm thứ hai.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. Nhóm hai thì anode (cực dương) là Cu xảy quá trình oxi hóa: Cu  Cu<sup>2+</sup> + 2e.<br/>b) Đúng. Dung dịch điện phân CuSO<sub>4</sub> nên tại cathode thì Cu<sup>2+</sup> + 2e  Cu.<br/>c) Đúng. Điện phân sinh ra môi trường acid (H<sub>2</sub>SO<sub>4</sub>) nên pH giảm.<br/>d) Đúng. Cực âm để đồng tan ra và bám vào cực dương nên chỉ có nhóm 1 đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de09_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các vật liệu polymer: PE, PVC, niylon-6,6 và cao su buna. Có bao nhiêu vật liệu là chất dẻo?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "2"
        ]
      },
      {
        "id": "hoa12_ck1_de09_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Ethyl propionate có mùi dứa chín được điều chế từ alcohol ethylic và propionic acid tương ứng. Cho các biện pháp để nâng cao hiệu suất của phản ứng điều chế ester như sau:<br/>(1) Tăng nồng độ các chất tham gia phản ứng.<br/>(2) Tách bớt ester ra khỏi hỗn hợp sản phẩm.<br/>(3) Hạ nhiệt độ xuống thấp.<br/>(4) Sử dụng xúc tác H<sub>2</sub>SO<sub>4</sub> đặc, đun nóng.<br/>Liệt kê các phát biểu đúng theo dãy số thứ tự tăng dần.",
        "images": [],
        "correctAnswer": "124",
        "explanation": "Đáp án: 124.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "124"
        ]
      },
      {
        "id": "hoa12_ck1_de09_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Một pin điện hoá được thiết lập từ hai điện cực tạo bởi hai cặp oxi hoá − khử là M<sup>2+</sup>/M và Ag<sup>+</sup>/Ag. Cho biết:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cặp oxi hoá – khử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Fe<sup>2+</sup>/Fe</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ni<sup>2+</sup>/Ni</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Sn<sup>2+</sup>/Sn</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cu<sup>2+</sup>/Cu</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ag<sup>+</sup>/Ag</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Thế điện cực chuẩn (V)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">–0,44</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">–0,257</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">–0,137</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">+0,340</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">+0,799</td></tr></table></div><br/>Nếu M là một trong số các kim loại: Fe, Ni, Sn, Cu thì sức điện động chuẩn lớn nhất của pin bằng bao nhiêu volt (V)? (Kết quả làm tròn kết quả đến phần trăm).",
        "images": [],
        "correctAnswer": "1,24",
        "explanation": "Đáp án: 1,24.<br/>Sức điện động chuẩn lớn nhất của pin M – Ag ứng với thế điện cực chuẩn M<sup>n+</sup>/M là nhỏ nhất. Vậy, M là Fe.<br/>2oooooPin(FeAg)CathodeAnodeAg/AgFe/FeEEEEE(0,799)(0,44)1,24 V++-=-=-=+--»",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "1,24",
          "1.24"
        ]
      },
      {
        "id": "hoa12_ck1_de09_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Sơ đồ sản xuất ethanol từ ngô của một nhà máy như sau:<br/>Ngô (chứa 40% tinh bột) → Glucose → Ethanol<br/>Ethanol thu được từ quá trình “chế biến” 4,05 tấn nguyên liệu ngô theo sơ đồ trên có thể pha V m<sup>3</sup> xăng sinh học E5 (chứa 5% ethanol về thể tích). Biết ethanol có khối lượng riêng là 0,8 g/mL. Giả sử các phản ứng xảy ra hoàn toàn. Tính V. (Kết quả làm tròn đến hàng phần mười)",
        "images": [],
        "correctAnswer": "23,0",
        "explanation": "Đáp án: 23,0.<br/>C<sub>6</sub>H<sub>10</sub>O<sub>5</sub> → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  → 2C<sub>2</sub>H<sub>5</sub>OH<br/>162                                            92<br/>4,05.40%                                  m<br/>0,92 tấn<br/>25CHOHV =    = 1,15 m<sup>3</sup>   V<sub>xăng</sub> =   = 23 m<sup>3</sup>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "23,0",
          "23.0"
        ]
      },
      {
        "id": "hoa12_ck1_de09_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Tại sao các amine đơn giản như methylamine, ethylamine,... tan tốt trong nước?<br/>b) Cho các dung dịch sau: (1) glycine; (2) lysine và (3) glutamic acid. Các dung dịch trên làm đổi màu quỳ tím như thế nào.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Các amine thấp tan tốt trong nước do nhóm chức amine tạo được liên kết hydrogen với nước và phần kị nước (gốc hydrocarbon) nhỏ.<br/>b) (1) Glycine có một nhóm amine (-NH<sub>2</sub>) và một nhóm carboxyl (-COOH), môỉ trường gần trung tính nên không làm đổi màu quỳ tím.<br/>(2) Lysine có hai nhóm amine (-NH<sub>2</sub>) và một nhóm carboxyl (-COOH), phản ứng với nước tạo môi trường kiềm nên làm đối màu quỳ tím sang màu xanh.<br/>(3) Glutamic acid có một nhóm amine (-NH<sub>2</sub>) và hai nhóm carboxyl (-COOH), phản ứng với nước tạo môi trường acid nên làm đổi màu quỳ tím sang màu đỏ.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de09_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Viết phương trình hoá học của phản ứng điều chế  PE, PS từ các monomer.<br/>b) Cao su lưu hoá có chứa 3,14% lưu huỳnh. Giả thiết rằng S đã thay thế cho H ở cầu methylen trong mạch cao su. Số mắt xích isoprene có một cầu disulfide -S-S- là bao nhiêu?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)<br/>polyethylene (PE)<br/>CH2CHC6H5nnCH2CHC6H5to,P,xt<br/>Polystyrene (PS)<br/>b) <sub>2</sub><br/>Cao su lưu hóa có dạng: C<sub>5n</sub>H<sub>8n -2</sub>S<sub>2</sub><br/>% S =  = 3,14<br/>Số mắt xích isoprene có một cầu disulfide -S-S-: n = 29.",
        "explanationImages": [
          "/assets/hoa12/final/h12_ck1_de9_image9.png"
        ],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de09_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Cho phản ứng trong một pin Galvani như sau: 2Cr(s) + 3Cu<sup>2+</sup>(aq) → 2Cr<sup>3+</sup>(aq) + 3Cu(s).<br/>Cho biết quá trình xảy ra ở anode và cathode khi pin hoạt động.<br/>b) Trong công nghiệp, sản xuất aluminium từ quặng bauxite. Để thu được 1 tấn Al tinh khiết thì cần bao nhiêu tấn quặng bauxite chứa 40% Al<sub>2</sub>O<sub>3</sub> về khối lượng? Biết hiệu suất cả quá trình là 80%.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)<br/>+ Anode (Cr): Cr nhường electron, chuyển thành Cr<sup>3+</sup> tan vào dung dịch.<br/>Cr → Cr<sup>3+</sup> +  3e<br/>+ Cathode (Cu): Ion Cu<sup>2+</sup> trong dung dịch nhận electron từ điện cực Cr qua dây dẫn, chuyển thành Cu bám lên điện cực Cu.<br/>Cu<sup>2</sup><sup>+</sup> +   2e  → Cu<br/>b) Tính toán theo PTHH:    dpnc2322AlO4Al + 3O¾¾¾®<br/>2.102 g                 4.27 g<br/>x tấn                    1 tấn<br/>204.100.1005,94.27.80.40quangm== tấn.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck1_de10",
    "code": "H12-CK1-10",
    "title": "Đề Thi Cuối Kì 1 Hóa 12 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 1 Hóa học 12",
    "badge": "Cuối Kì 1",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 1",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck1_de10_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho ester X tác dụng với dung dịch NaOH đun nóng, thu được sodium propionate và methyl alcohol. Công thức cấu tạo của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3HCOOCH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "253CHCOOCH",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "33CHCOOCH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2525CHCOOCH .",
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
        "id": "hoa12_ck1_de10_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phổ hồng ngoại của glucose được đo ở thể rắn cho ở hình dưới:<br/>Sự quy kết nhóm chức với pic phổ nào sau đây là đúng?",
        "images": [
          "/assets/hoa12/final/h12_ck1_de10_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-OH (pic A)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CO=  (pic C)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "-OH (pic B)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CO=  (pic D).",
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
        "id": "hoa12_ck1_de10_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các phát biểu sau đây, phát biểu nào là không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cellulose và tinh bột đều là các polysaccharide có trong tự nhiên.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tinh bột gồm amylose và amylopectin.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cellulose tan trong dung dịch chứa phức chất của Cu<sup>2+</sup> với ammonia.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Glucose phản ứng với methyl alcohol (có mặt khí HCl) tạo nhóm -OH hemiketal.",
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
        "id": "hoa12_ck1_de10_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số đồng phân amine bậc một ứng với công thức phân tử C<sub>3</sub>H<sub>9</sub>N là",
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
        "displayNumber": 4
      },
      {
        "id": "hoa12_ck1_de10_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quá trình lưu hóa cao su thuộc loại phản ứng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cắt mạch polymer",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tăng mạch polymer.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "giữ nguyên mạch polymer",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phân hủy polymer.",
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
        "id": "hoa12_ck1_de10_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử các polymer được dùng chế tạo cao su có liên kết đôi C",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "B. Các loại polymer PE, PS, PP,… được dùng làm chất dẻo.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Keo dán có tác dụng gắn bề mặt hai vật liệu rắn, nhưng không làm thay đổi tính chất của các vật liệu đó.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi tạo ra vật liệu composite từ các vật liệu ban đầu đã xảy ra phản ứng trùng hợp hoặc trùng ngưng.",
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
        "id": "hoa12_ck1_de10_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sản phẩm hữu cơ của phản ứng nào sau đây không dùng để chế tạo tơ tổng hợp?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trùng hợp vinyl cyanide.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trùng ngưng -aminocaproic acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trùng hợp methyl methacrylate.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trùng ngưng hexamethylenediamine với adipic acid.",
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
        "id": "hoa12_ck1_de10_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ứng dụng nào sau đây của hiện tượng điện phân được dùng để phủ một lớp kim loại mỏng lên bề mặt vật dụng nhằm chống gỉ và tăng tính thẩm mỹ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tinh chế kim loại",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mạ điện",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sản xuất pin.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sơn phủ.",
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
        "id": "hoa12_ck1_de10_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch nào sau đây là chất giặt rửa tự nhiên?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước quả cam",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nước quả chanh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước quả bồ kết",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nước quả dâu.",
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
        "id": "hoa12_ck1_de10_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đối với điện cực hydrogen chuẩn, áp suất khí hydrogen được hấp phụ trên lá Pt và nồng độ ion H<sup>+</sup> trong dung dịch chất điện li lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 atm và 1 M",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1 mmHg và 0,1 M",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1 N/m<sup>2</sup> và 0,1 M",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 bar và 1 M.",
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
        "id": "hoa12_ck1_de10_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Saccharose được sử dụng như một chất làm ngọt phổ biến trong sản xuất thực phẩm.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Maltose được hình thành trong quá trình thủy phân tinh bột.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Glucose được dùng trong công nghiệp sản xuất saccharose.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cellulose là nguyên liệu điều chế ethanol và cellulose trinitrate (chế tạo thuốc súng không khói).",
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
        "id": "hoa12_ck1_de10_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi chế biến một số loại thực phẩm từ thịt, cá, ... người ta có thể thêm gia vị chua như giấm ăn, chanh hoặc vài lát dứa (thơm),... Tại sao lại thêm gia vị chua vào thực phẩm?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong môi trường acid, protein ở thịt, cá bị thủy phân thành các chuỗi polypeptide nhỏ hơn giúp thịt, cá mềm nhanh hơn.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong môi trường base, protein ở thịt, cá bị thủy phân thành các chuỗi polypeptide nhỏ hơn giúp thịt, cá mềm nhanh hơn.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong môi trường acid, protein ở thịt, cá đông tụ thành các chuỗi polypeptide nhỏ hơn giúp thịt, cá mềm nhanh hơn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong môi trường base, protein ở thịt, cá bị đông tụ thành các chuỗi polypeptide nhỏ hơn giúp thịt, cá mềm nhanh hơn.",
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
        "id": "hoa12_ck1_de10_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "a -amino acid X đóng vai trò quan trọng trong cơ thể, góp phần cấu tạo nhiều protein. Cho biết:<br/>- X no, mạch hở, phân tử chứa một nhóm amino và một nhóm carboxyl.<br/>- Theo kết quả phân tích nguyên tố, X có 32% C, 6,67% H.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tên thay thế của X là 2-aminoethanoic acid.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch X không làm đổi màu quỳ tím.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X di chuyển về cực âm khi đặt dung dịch X ở pH = 6 trong điện trường.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở điều kiện thường, X tồn tại ở thể rắn và dễ tan trong nước.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Gọi công thức tổng quát của X là C<sub>n</sub>H<sub>2n + 1</sub>NO<sub>2</sub> (vì là α-amino acid: có 1 N, 2 O).’<br/>25212n%C.10032n2:CHNO12n2n11416.2==Þ=++++<br/>a) Đúng.<br/>b) Đúng.<br/>c) Sai. X tồn tại chủ yếu ở dạng ion lưỡng cực: ⁺H₃N–CH<sub>2</sub>–COO⁻. Điện tích tổng = 0<br/>→ Không bị hút về cực nào trong điện trường.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck1_de10_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Xét quá trình hoạt động của một pin điện hoá Cu – Ag. Cho thế điện cực chuẩn của các cặp Cu<sup>2+</sup>/Cu và Ag<sup>+</sup>/Ag lần lượt là +0,340 V và +0,799 V.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giá trị sức điện động chuẩn của pin điện hoá trên là 0,459 V.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở anode xảy ra quá trình oxi hoá Cu, ở cathode xảy ra quá trình khử Ag<sup>+</sup>.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Điện cực Cu tăng khối lượng, điện cực Ag giảm khối lượng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng hoá học xảy ra trong pin: Cu(s) + 2Ag<sup>+</sup>(aq)  ¾¾®  Cu<sup>2+</sup>(aq) + 2Ag(s).",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.  oPin(CuAg)E0,7990,3400,459 V-=-=<br/>b) Đúng.<br/>c) Sai. Điện cực Cu giảm, Ag tăng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck1_de10_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu polymer thiên nhiên trong các vật liệu sau: bông, len, tơ tằm, cellulose, nylon-6,6, polyethylene và poly(vinyl chloride).",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15,
        "acceptedAnswers": [
          "4"
        ]
      },
      {
        "id": "hoa12_ck1_de10_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Một nhà máy mía đường sử dụng 7000 tấn mía nguyên liệu mỗi ngày để sản xuất ra các loại đường thành phẩm. Biết:<br/>- Trung bình ép 1 tấn mía thu được 680 kg nước mía có nồng độ saccharose là 13%.<br/>- Hiệu suất chế biến đường saccharose thành phẩm từ nước mía đạt 90%.<br/>- Giá mía nguyên liệu là 1,3 triệu đồng/tấn và giá đường thành phẩm là 18 triệu đồng/tấn.<br/>Mỗi ngày, số tiền trị giá của đường thành phẩm nhiều hơn số tiền mua mía nguyên liệu là x triệu đồng. Giá trị của x bằng bao nhiêu? (Làm tròn kết quả đến phần nguyên)",
        "images": [],
        "correctAnswer": "925",
        "explanation": "Đáp án: 925.<br/>Khối lượng saccharose trong 7000 tấn mía là 680.13%.90%.7000 = 556920 kg = 556,92 tấn<br/>Số tiền trị giá của đường thành phẩm là 556,92.18 = 10024,56 triệu<br/>Số tiền mua mía nguyên liệu là 7000.1,3 = 9100 triệu<br/>Số tiền trị giá của đường thành phẩm nhiều hơn số tiền mua mía nguyên liệu là 10024,56 – 9100 = 924,56 triệu đồng.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16,
        "acceptedAnswers": [
          "925"
        ]
      },
      {
        "id": "hoa12_ck1_de10_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Có bốn dung dịch muối không màu (AgNO<sub>3</sub>, Pb(NO<sub>3</sub>)<sub>2</sub>, Zn(NO<sub>3</sub>)<sub>2</sub> và Ni(NO<sub>3</sub>)<sub>2</sub>) được đựng trong bốn ống nghiệm riêng biệt. Cho thêm vào 4 ống nghiệm này một sợi dây đồng (Cu). Sau một thời gian, số dung dịch chuyển màu xanh là bao nhiêu? (Các phản ứng đều được thực hiện ở điều kiện chuẩn).",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.<br/>Cu + 2Ag<sup>+</sup>   Cu<sup>2+</sup>(màu xanh) + 2Ag",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17,
        "acceptedAnswers": [
          "1"
        ]
      },
      {
        "id": "hoa12_ck1_de10_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Chỉ số acid là một chỉ số quan trọng trong phân tích chất lượng của chất béo, dầu thực vật,... Chỉ số acid của chất béo được định nghĩa là số miligam KOH cần thiết để trung hoà các acid béo tự do có trong 1 gam chất béo.<br/>Dầu thực vật sử dụng làm thực phẩm có chỉ số acid không quá 2. Nếu chỉ số acid trên 2 thì dầu có thể đã bị ôi hoặc bị phân huỷ đáng kể và không còn phù hợp để sử dụng trong thực phẩm.<br/>Trong phòng thí nghiệm, một học sinh tiến hành thí nghiệm xác định chỉ số acid của một loại dầu ăn đã qua sử dụng theo các bước sau:<br/>Bước 1: Hoà tan 2,00 gam dầu ăn vào 20 mL hỗn hợp dung môi ethanol - ether, thêm vài giọt chỉ thị phenolphthalein.<br/>Bước 2: Tiến hành chuẩn độ acid béo bằng dung dịch NaOH  0,05M  đến khi dung dịch có màu hồng bền thì dừng. Thể tích trung bình của dung dịch NaOH sau ba lần chuẩn độ là  4,50 mL .<br/>Chỉ số acid của dầu ăn trên bằng bao nhiêu? (Làm tròn kết quả đến hàng phần mười.)<br/>Đáp số: 6,3.<br/>n<sub>KOH</sub> = n<sub>NaOH</sub> = 4,5.0,05 = 0,225 mmol<br/>Chỉ số acid  KOHm(mg)56.0,2256,3.22===",
        "images": [],
        "correctAnswer": "6,3",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18,
        "acceptedAnswers": [
          "6,3",
          "6.3"
        ]
      },
      {
        "id": "hoa12_ck1_de10_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Bromelain và papain là những enzyme có tác dụng thủy phân protein. Bromelain có nhiều trong quả dứa (thơm) còn papain có nhiều trong quả đu đủ. Giải thích vì sao thịt được ướp với ép dứa hoặc đu đủ khi nấu sẽ nhanh mềm hơn.<br/>b) Nêu phương pháp hoá học phân biệt ethylamine và aniline.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Bromelain và papain có tác dụng thủy phân protein trong thịt nên khi thịt được ướp với nước ép dứa hoặc đu đủ thì khi nấu sẽ nhanh mềm hơn.<br/>b) Cho dung dịch Br<sub>2</sub>vào: mất màu và tạo kết tủa trắng là aniline, không hiện tượng là ethylamine.",
        "explanationImages": [
          "/assets/hoa12/final/h12_ck1_de10_image13.png"
        ],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck1_de10_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm).<br/>a) Polymer X là chất rắn trong suốt, có khả năng cho ánh sáng truyền qua tốt nên được dùng chế tạo thủy tinh hữu cơ plexiglass. Hãy viết phương trình điều chế X.<br/>b) Khi cho polyisoprene tham gia phản ứng cộng với HCl thu được một polymer có chứa 14,76% chlorine về khối lượng. Trung bình một phân tử HCl phản ứng với k mắt xích trong mạch polymer. Giá trị của k là bao nhiêu?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) X là poly(methyl methacrylate)<br/>b)  2CHCCH=2CHHCl5k8k5k8k13k|CHCHClCH++æö¬¾®¾¾¾®ç÷ç÷èø<br/>% Cl =  = 14,76  k = 3.",
        "explanationImages": [
          "/assets/hoa12/final/h12_ck1_de10_image14.png"
        ],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck1_de10_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "(1 điểm). Xét quá trình sản xuất nhôm được thực hiện theo phương pháp điện phân Al<sub>2</sub>O<sub>3</sub> nóng chảy với điện cực than chì.<br/>a) Giải thích vì sao thực tế thành phần thể tích khí bay ra ở cực dương gồm CO (30% - 50%) và CO<sub>2</sub> (70% - 50%) mà không phải là O<sub>2</sub>.<br/>b) Trung bình để sản xuất được 1,08 tấn Al thì lượng điện cực than chì bị tiêu hao do phản ứng oxi hoá là bao nhiêu? Giả thiết thành phần khí bay ra ở cực dương gồm 50% CO và 50% CO<sub>2</sub> về thể tích.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Trong quá trình điện phân, điện cực dương( làm bằng than chì) xảy ra phản ứng:<br/>22C(s)O(g)CO(g)+¾¾®   22C(s)O(g)2CO(g)+¾¾®<br/>b) Vì thành phần khí bay ra ở cực dương gồm 50% CO và 50% CO<sub>2</sub> về thể tích<br/>Þ  2COCOnnx==<br/>22C(s)O(g)CO(g)+¾¾® ;         22C(s)O(g)2CO(g)+¾¾®<br/>x        x                   x             x        x/2                 x<br/>2322AlO(s)3O(g)4Al(s)¾¾®+<br/>1,5x     2x<br/>Þ  m<sub>Al</sub> = 27. 2x = 1,08  Þ  x = 0,02  Þ  m<sub>C</sub>= 12.2x = 0,48 tấn.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  }
];

export function getFinalExamById(id: string): Chuong1Exam | undefined {
  return HOA12_FINAL_EXAMS.find(e => e.id === id || e.code === id);
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
