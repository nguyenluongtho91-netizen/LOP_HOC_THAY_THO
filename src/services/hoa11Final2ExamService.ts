// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI CUỐI HỌC KÌ 2 HÓA HỌC 11 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi CUỐI Học Kì 2 Hóa Học Lớp 11 Chuẩn Cấu Trúc 2025
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

export const HOA11_FINAL2_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa11_ck2_de01",
    "code": "H11-CK2-01",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de01_p1_q1",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức phân tử chung của alkene là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>n</sub>H<sub>2n</sub>( n ≥ 1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>n</sub>H<sub>2n</sub>( n ≥ 4)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>n</sub>H<sub>2n</sub>( n ≥ 3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>n</sub>H<sub>2n</sub> (n ≥ 2)",
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
        "id": "hoa11_ck2_de01_p1_q2",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các alkene X và Y có công thức như sau:<br/>Tên gọi của X và Y tương ứng là",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_3)_image2.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_3)_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cis-3-methylpent-2-ene và trans-3-methylpent-3-ene",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "trans-3-methylpent-2-ene và cis-3-methylpent-2-ene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "trans-3-methylpent-3-ene và cis-3-methylpent-3-ene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "trans-3-methylpent-3-ene và cis-3-methylpent-2-ene",
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
        "id": "hoa11_ck2_de01_p1_q3",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phân tử acetylene, liên kết đôi CC giữa hai nguyên tử carbon gồm",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 liên kết pi () và 2 liên kết xích ma ( )",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2 liên kết pi () và 1 liên kết xích ma ( )",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1 liên kết pi () và 1 liên kết xích ma ( )",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2 liên kết pi () và 2 liên kết xích ma ( )",
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
        "id": "hoa11_ck2_de01_p1_q4",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Alkyne là những hydrocarbon có đặc điểm",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "không no, mạch hở, có một liên kết ba C≡",
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
            "text": "không no, mạch vòng, có một liên kết đôi C=",
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
            "text": "không no, mạch hở, có một liên kết đôi C=",
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
            "text": "không no, mạch hở, có hai liên kết ba C≡",
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
        "displayNumber": 4
      },
      {
        "id": "hoa11_ck2_de01_p1_q5",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây không phải là phản ứng đặc trưng của hydrocarbon không no?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng cộng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng trùng hợp",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng oxi hóa – khử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thế",
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
        "id": "hoa11_ck2_de01_p1_q6",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sản phẩm chủ yếu trong hỗn hợp thu được khi cho toluene phản ứng với bromine theo tỉ lệ số mol 1 : 1 (có mặt FeBr<sub>3</sub>) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "p-bromotoluene và m-bromotoluene",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "benzylbromide",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "o-bromotoluene và p-bromotoluene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "o-bromotoluene và m-bromotoluene",
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
        "id": "hoa11_ck2_de01_p1_q7",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi được chiếu sáng, benzene có thể phản ứng với Cl<sub>2</sub> tạo thành sản phẩm có công thức phân tử nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>6</sub>H<sub>5</sub>Cl",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>6</sub>H<sub>11</sub>Cl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>6</sub>H<sub>6</sub>Cl<sub>6</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>12</sub>Cl<sub>6</sub>",
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
        "id": "hoa11_ck2_de01_p1_q8",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để phân biệt but-2-yne (CH<sub>3</sub>C≡CCH<sub>3</sub>) với but-l-yne (CH≡CCH<sub>2</sub>CH<sub>3</sub>) có thể dùng thuốc thử nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch HCl",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch AgNO<sub>3</sub>/NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước bromine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch KMnO<sub>4</sub>",
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
        "id": "hoa11_ck2_de01_p1_q9",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây thuộc dãy đồng đẳng của benzene? (Biết C<sub>6</sub>H<sub>5</sub>-: phenyl)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>6</sub>H<sub>5</sub>-CH<sub>2</sub>-CH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>6</sub>H<sub>5</sub>-C≡CH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>6</sub>H<sub>5</sub>-CH=CH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>5</sub>-Cl",
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
        "id": "hoa11_ck2_de01_p1_q10",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện thí nghiệm như hình vẽ bên. Kết thúc thí nghiệm, dung dịch Br<sub>2</sub> bị mất màu.<br/>Chất X là",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_3)_image4.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_3)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CaC<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Al<sub>4</sub>C<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CaO",
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
        "id": "hoa11_ck2_de01_p1_q11",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong số các alkene có đồng phân cấu tạo C<sub>5</sub>H<sub>10</sub>, số công thức cấu tạo có đồng phân hình học?",
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
        "displayNumber": 11
      },
      {
        "id": "hoa11_ck2_de01_p1_q12",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "X là nguyên liệu quan trọng để sản xuất các alkylbenzene sulfonate mạch không phân nhánh (linear alkylbenzenesulfonate, LAS) là thành phần chính của bột giặt; sản xuất styrene - nguyên liệu cho chế tạo nhựa PS (polystyrene) và một số polymer khác. X và một số hydrocarbon thơm khác là nguyên liệu đầu dùng để sản xuất thuốc trừ sâu, chất điều hòa sinh trưởng thực vật, phẩm nhuộm,... Chất X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "toluene",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "benzene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "styrene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "acetylene",
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
        "id": "hoa11_ck2_de01_p1_q13",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biểu đồ về nhiệt độ sôi của một số alkane sau:<br/>.<br/>Hãy cho biết nhận định nào sau đây không đúng?",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_3)_image5.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có 4 alkane tồn tại thể khí ở điều kiện thường: methane, ethane, propane, butane",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ sô tăng dần theo chiều tăng phân tử khối",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Pentane, hexane tồn tại thể lỏng ở điều kiện thường",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methane dễ hóa lỏng nhất trong số các alkane ở thể khí điều kiện thường",
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
        "id": "hoa11_ck2_de01_p1_q14",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhựa PE tên đầy đủ là polyethylene là một loại nhựa dẻo được sử dụng phổ biến trên thế giới, có màu trắng trong, có tính chất chống dẫn điện, chống dẫn điện, chống thấm nước,… Nếu trùng hợp m tấn ethylene thu được 1 tấn polyethylene (PE) với hiệu suất phản ứng bằng 80%. Giá trị của m là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1,20",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1,25",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "0,80",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2,00",
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
        "id": "hoa11_ck2_de01_p1_q15",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đốt ethanol toả nhiều nhiệt vì vậy ethanol được ứng dụng để sản xuất xăng sinh học E<sub>5</sub> (chứa 5% cồn ethanol). Công thức cấu tạo của ethanol là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>5</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>5</sub>OH",
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
        "id": "hoa11_ck2_de01_p1_q16",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho hợp chất CH<sub>2</sub>=CH-Cl. Tên gọi của hợp chất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "vinyl chloride",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "propyl chloride",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "allyl chlorie",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ethyl chloride",
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
        "id": "hoa11_ck2_de01_p1_q17",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không phải là alcohol?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Methanol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Etylenglycol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Glycerol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phenol",
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
        "id": "hoa11_ck2_de01_p1_q18",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các hợp chất hữu cơ sau: (1) C<sub>3</sub>H<sub>8</sub>; (2) CH<sub>3</sub>Cl; (3) C<sub>2</sub>H<sub>5</sub>OH; (4) CH<sub>3</sub>OH.<br/>Thứ tự giảm dần nhiệt độ sôi của các chất trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) > (2) > (3) > (4)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) > (4) > (2) > (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(3) > (4) > (2) > (1)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(4) > (2) > (1) > (3)",
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
        "id": "hoa11_ck2_de01_p2_q19",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Quy tắc Markovnikov áp dụng khi thực hiện phản ứng cộng một tác nhân không đối xứng HX (HBr, HCl, HI, HOH,..) vào liên kết bội, nguyên tử hydrogen sẽ ưu tiên cộng vào nguyên tử carbon có nhiều hydrogen hơn.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng cộng nước vào alkene tạo sản phẩm là alcohol.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi cộng HBr vào but-1-ene và but-2-ene đều thu được sản phẩm chính là 2-bromobutane.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng cộng giữa propyne với HBr theo tỉ lệ mol 1 : 1 thu được sản phẩm sau:",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng giữa propyne với nước (xúc tác HgSO<sub>4</sub>/H<sub>2</sub>SO<sub>4</sub>, t<sup>o</sup>) tạo sản phẩm chính là propanal (CH<sub>3</sub>-CH<sub>2</sub>-CH=O).",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Sản phẩm chính là CH<sub>3</sub>-CO-CH<sub>3</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de01_p2_q20",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Dẫn dòng khí gồm acetylene và ethylene lần lượt đi vào ống nghiệm (1) đựng dưng dịch AgNO<sub>3</sub>/NH<sub>3</sub> ở điều kiện thường, sau đó dẫn tiếp qua ống nghiệm (2) đựng nước bromine.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở ống nghiệm (1) có kết tủa màu vàng nhạt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở ống nghiệm (2) màu của nước bromine nhạt dần.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở ống nghiệm (2) chất lỏng chia thành hai lớp.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tại ống nghiệm (1) có xảy ra phản ứng cộng, ống nghiệm (2) có xảy ra phản ứng thế.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng. Do sản phẩm tạo thành (C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub>) không tan trong nước.<br/>d. Sai. Ống nghiệm (1) xảy ra phản ứng thế, ống nghiệm (2) xảy ra phản ứng cộng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de01_p2_q21",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho các arene có công thức cấu tạo thu gọn sau:<br/>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tên gọi của X và Y lần lượt là benzene và m-dimethylbenzene.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X và Y thuộc cùng một dãy đồng đẳng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở điều kiện thường, X và Y đều là chất lỏng, màu trắng, dễ cháy và có mùi đặc trưng.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi cho Y tác dụng với HNO<sub>3</sub> đặc/H<sub>2</sub>SO<sub>4</sub> đặc (tỉ lệ mol 1 : 1) tạo thành hỗn hợp hai sản phẩm hữu cơ chính.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Tên của Y là p-dimethylbenzene.<br/>b. Đúng.<br/>c. Sai. Không màu.<br/>d. Sai. Tạo một sản phẩm chính.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de01_p2_q22",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Trong phương pháp nấu rượu (alcohol) gạo truyền thống, gạo được nấu chín, để nguội, rắc men rồi trộn đều, ủ kín 3 – 5 ngày. Khi ngửi thấy mùi thơm, thêm nước và tủ kín 1 – 2 tuần, thu được hỗn hợp chủ yếu gồm: ethanol, nước và bã rượu.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức hóa học của ethanol là C<sub>2</sub>H<sub>5</sub>OH.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để nấu rượu gạo truyền thống thì người ta đi từ nguồn nguyên liệu là tinh bột.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Quá trình nấu rượu truyền thống từ gạo cần trải qua 3 giai đoạn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để tách rượu (hỗn hợp ethanol và nước) ra khỏi hỗn hợp trên, người ta sử dụng phương pháp chiết.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Hai giai đoạn:<br/>d. Sai. Phương pháp chưng cất.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image11.png"
        ],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de01_p3_q23",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho isopentane tác dụng với khí chlorine, điều kiện ánh sáng. Số sản phẩm monochloro tối đa thu được là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de01_p3_q24",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Dẫn 10,8 gam but-1-yne qua dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub> dư, sau phản ứng thu m gam kết tủa. Xác định giá trị của m.",
        "images": [],
        "correctAnswer": "32,2",
        "explanation": "Đáp án: 32,2.<br/>n<sub>alkyne</sub> = 0,2 mol; n↓ = 0,2 mol ⇒ M = 0,2 .161 = 32,2 g.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de01_p3_q25",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Xét phản ứng hóa học sau:<br/>CH<sub>3</sub>CH<sub>2</sub>=CH<sub>2</sub>+ H<sub>2</sub>O + KMnO<sub>4</sub>→ CH<sub>3</sub>-CH(OH)CH<sub>2</sub>(OH) + MnO<sub>2</sub>↓+KOH<br/>Tổng hệ số tỉ lượng tối giản của các chất trong phản ứng này bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "16",
        "explanation": "Đáp án: 16.<br/>3CH<sub>3</sub>CH<sub>2</sub>=CH<sub>2</sub>+ 4H<sub>2</sub>O + 2KMnO<sub>4</sub>→ 3CH<sub>3</sub>-CH(OH)CH<sub>2</sub>(OH) + 2MnO<sub>2</sub>↓+ 2KOH<br/>Tổng hệ số: 3 + 4 + 2 + 3+ 2 + 2 = 16.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de01_p3_q26",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cần bao nhiêu lít không khí ở đkc (20% thể tích là oxygen) để đốt cháy hoàn toàn một cây nến có công thức phân tử C<sub>25</sub>H<sub>52</sub>, biết cây nến có khối lượng nặng 35,2 g. (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "471",
        "explanation": "Đáp án: 471.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de01_p3_q27",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Khi đun nóng và có xúc tác Ni, 1 mol styrene có thể cộng được với tối đa bao nhiêu mol phân tử H<sub>2</sub>?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de01_p3_q28",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Tính khối lượng cumene (đơn vị tấn) tối đa phát thải từ một triệu xe ô tô chạy động cơ xăng (có bộ chuyển đổi xúc tác) trong một năm. Giả sử bình quân một tháng, mỗi xe ô tô chạy 3 000 km. Biết:<br/><br/>Đổi đơn vị: 1g = 10<sup>–6</sup>g.",
        "images": [],
        "correctAnswer": "32,4",
        "explanation": "Đáp án: 32,4.<br/>Bình quân một tháng, mỗi chiếc chạy 3 000 km, do đó trong một năm, mỗi chiếc chạy quãng đường là 36 000 km, phát thải tối đa: 0,0009.36000 = 32,4 (g) cumene.<br/>Vậy 1 triệu xe ô tô trong một năm phát thải tối đa: 1.32,4 = 32,4 (tấn).<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck2_de02",
    "code": "H11-CK2-02",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de02_p1_q1",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong số các alkene có đồng phân cấu tạo C<sub>5</sub>H<sub>10</sub>, số công thức cấu tạo có đồng phân hình học?",
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
        "displayNumber": 1
      },
      {
        "id": "hoa11_ck2_de02_p1_q2",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "X là nguyên liệu quan trọng để sản xuất các alkylbenzene sulfonate mạch không phân nhánh (linear alkylbenzenesulfonate, LAS) là thành phần chính của bột giặt; sản xuất styrene - nguyên liệu cho chế tạo nhựa PS (polystyrene) và một số polymer khác. X và một số hydrocarbon thơm khác là nguyên liệu đầu dùng để sản xuất thuốc trừ sâu, chất điều hòa sinh trưởng thực vật, phẩm nhuộm,... Chất X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "toluene",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "benzene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "styrene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "acetylene",
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
        "id": "hoa11_ck2_de02_p1_q3",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biểu đồ về nhiệt độ sôi của một số alkane sau:<br/>.<br/>Hãy cho biết nhận định nào sau đây không đúng?",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_3)_image5.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có 4 alkane tồn tại thể khí ở điều kiện thường: methane, ethane, propane, butane",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ sô tăng dần theo chiều tăng phân tử khối",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Pentane, hexane tồn tại thể lỏng ở điều kiện thường",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methane dễ hóa lỏng nhất trong số các alkane ở thể khí điều kiện thường",
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
        "id": "hoa11_ck2_de02_p1_q4",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhựa PE tên đầy đủ là polyethylene là một loại nhựa dẻo được sử dụng phổ biến trên thế giới, có màu trắng trong, có tính chất chống dẫn điện, chống dẫn điện, chống thấm nước,… Nếu trùng hợp m tấn ethylene thu được 1 tấn polyethylene (PE) với hiệu suất phản ứng bằng 80%. Giá trị của m là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1,20",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1,25",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "0,80",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2,00",
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
        "id": "hoa11_ck2_de02_p1_q5",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đốt ethanol toả nhiều nhiệt vì vậy ethanol được ứng dụng để sản xuất xăng sinh học E<sub>5</sub> (chứa 5% cồn ethanol). Công thức cấu tạo của ethanol là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>5</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>5</sub>OH",
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
        "id": "hoa11_ck2_de02_p1_q6",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho hợp chất CH<sub>2</sub>=CH-Cl. Tên gọi của hợp chất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "vinyl chloride",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "propyl chloride",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "allyl chlorie",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ethyl chloride",
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
        "id": "hoa11_ck2_de02_p1_q7",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không phải là alcohol?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Methanol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Etylenglycol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Glycerol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phenol",
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
        "id": "hoa11_ck2_de02_p1_q8",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các hợp chất hữu cơ sau: (1) C<sub>3</sub>H<sub>8</sub>; (2) CH<sub>3</sub>Cl; (3) C<sub>2</sub>H<sub>5</sub>OH; (4) CH<sub>3</sub>OH.<br/>Thứ tự giảm dần nhiệt độ sôi của các chất trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) > (2) > (3) > (4)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) > (4) > (2) > (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(3) > (4) > (2) > (1)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(4) > (2) > (1) > (3)",
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
        "id": "hoa11_ck2_de02_p1_q9",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Alcohol no, đơn chức, mạch hở có công thức chung là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>n</sub>H<sub>2n+1</sub>OH (n ≥ 1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>n</sub>H<sub>2n+2</sub>O (n ≥ 2)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>n</sub>H<sub>2n</sub>OH (n ≥ 1)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>n</sub>H<sub>2n</sub>OH (n ≥ 2)",
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
        "id": "hoa11_ck2_de02_p1_q10",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các dẫn xuất halogen hầu như đều không tan trong nước và nặng hơn nước. Cho vài giọt bromobenzene vào ống nghiệm đã chứa sẵn nước, lắc nhẹ rồi để yên trong vài phút. Phát biểu nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất lỏng trong ống nghiệm phân thành hai lớp",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất lỏng trong ông nghiệm thu được đồng nhất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Bromobenzene tan vào nước tạo ra chất lỏng màu vàng nâu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xảy ra phản ứng thế halide, tạo ra hợp chất có công thức là C<sub>6</sub>H<sub>5</sub>OH",
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
        "id": "hoa11_ck2_de02_p1_q11",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là alcohol bậc II?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "propan-l-ol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "propan-2-ol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2-methylpropan-1-ol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2-methylpropan-2-ol",
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
        "id": "hoa11_ck2_de02_p1_q12",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Methyl alcohol, ethyl alcohol tan vô hạn trong nước là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "khối lượng phân tử của các alcohol nhỏ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hình thành tương tác van der Waals với nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hình thành liên kết hydrogen với nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hình thành liên kết cộng hoá trị với nước",
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
        "id": "hoa11_ck2_de02_p1_q13",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các chất sau, chất nào thuộc loại phenol?",
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
        "id": "hoa11_ck2_de02_p1_q14",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp, phenol được điều chế chủ yếu từ chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Benzene",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cumene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chlorobenzene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Than đá",
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
        "id": "hoa11_ck2_de02_p1_q15",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ethanol là hoá chất phổ biến, có nhiều ứng dụng trong đời sống, y tế và công nghiệp. Bằng phân tích phổ hồng ngoại IR, người ta xác định được ethanol có nhóm chức hydroxy (OH). Dưới đây là sơ đồ phổ khối IR của ethanol, hãy cho biết tín hiệu (peak) nào chứng tỏ ethanol có nhóm chức hydroxi (OH)?",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image5.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3391 cm<sup>-1</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2981 cm<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1102 cm<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1066 cm<sup>-1</sup>",
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
        "id": "hoa11_ck2_de02_p1_q16",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một chai đựng ethyl alcohol có nhãn ghi 40<sup>o</sup> nghĩa là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cứ 100 ml nước thì có 40 ml alcohol nguyên chất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cứ 100 gam dung dịch thì có 40 ml alcohol nguyên chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cứ 100 gam dung dịch thì có 40 gam alcohol nguyên chất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cứ 100 ml dung dịch thì có 40 ml alcohol nguyên chất",
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
        "id": "hoa11_ck2_de02_p1_q17",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sản phẩm chính của phản ứng sau đây là chất nào?<br/>CH<sub>3</sub>–CH<sub>2</sub>–CHCl–CH<sub>3</sub>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>–CH<sub>2</sub>–CH=CH<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>–CH–CH(OH)CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>–CH=CH–CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>–CH=CH<sub>2</sub>",
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
        "id": "hoa11_ck2_de02_p1_q18",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất có công thức cấu tạo như sau: HOCH<sub>2</sub>-CH<sub>2</sub>OH (X); HOCH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>OH (Y); HOCH<sub>2</sub>-CHOH-CH<sub>2</sub>OH (Z); CH<sub>3</sub>-CH<sub>2</sub>-O-CH<sub>2</sub>-CH<sub>3</sub>(R); CH<sub>3</sub>-CHOH-CH<sub>2</sub>OH (T). Những chất tác dụng được với Cu(OH)<sub>2</sub>tạo thành dung dịch màu xanh lam là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Z, R, T",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X, Y, R, T",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X, Z, T",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X, Y, Z, T",
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
        "id": "hoa11_ck2_de02_p2_q19",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Trong phương pháp nấu rượu (alcohol) gạo truyền thống, gạo được nấu chín, để nguội, rắc men rồi trộn đều, ủ kín 3 – 5 ngày. Khi ngửi thấy mùi thơm, thêm nước và tủ kín 1 – 2 tuần, thu được hỗn hợp chủ yếu gồm: ethanol, nước và bã rượu.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức hóa học của ethanol là C<sub>2</sub>H<sub>5</sub>OH.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để nấu rượu gạo truyền thống thì người ta đi từ nguồn nguyên liệu là tinh bột.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Quá trình nấu rượu truyền thống từ gạo cần trải qua 3 giai đoạn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để tách rượu (hỗn hợp ethanol và nước) ra khỏi hỗn hợp trên, người ta sử dụng phương pháp chiết.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Hai giai đoạn:<br/>d. Sai. Phương pháp chưng cất.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image11.png"
        ],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de02_p2_q20",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Hàng nghìn các dẫn xuất halogen được tách ra từ nhiều loại sinh vật biển khác nhau như rong, tảo biển, san hô,... Chúng có các hoạt tính sinh học rất quý giá như khả năng điều trị bệnh hung thư và nhiều bệnh khác. Cho công thức khung phân tử của dẫn xuất halogen (X) như sau:<br/>Biết (X) tách ra từ tảo biển đỏ chi Laurencia có tác dụng chống ung thư vòm họng.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử chất (X) chứa 2 nguyên tố halogen khác nhau.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số liên kết pi (π) trong phân tử (X) trên bằng 1.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phần trăm khối lượng của nguyên tố bromine trong (X) bằng 43,84%.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(X) có tên là 1,1-dichloro-4,6-dibromo-3,7-dimethylocta-1,6-diene.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Có 2 liên kết .<br/>c. Đúng.<br/>d. Sai. Tên đúng là 3,5-dibromo-8,8-dichloro-2,6-dimethylocta-1,6-diene.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de02_p2_q21",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho các chất: methanol, ethylene glycol, glycerol, phenol, p-cresol, vinyl chloride.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có 3 chất hoà tan được Cu(OH)<sub>2</sub> ở nhiệt độ thường tạo dung dịch màu xanh lam.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có 4 chất tác dụng được với dung dịch NaOH trong điều kiện thích hợp.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có 5 chất tác dụng với kim loại Na giải phóng khí hydrogen.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có 2 chất phản ứng với dung dịch Br<sub>2</sub> ở nhiệt độ thường.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Có 2 chất thỏa mãn là etylen glycol, glycerol.<br/>b. Sai. Có 3 chất thỏa mãn là phenol, p-cresol, vinyl chloride.<br/>c. Đúng. Các chất thỏa mãn là methanol, ethylene glycol, glycerol, phenol, p-cresol.<br/>d. Sai. Có 3 chất phenol, p-cresol, vinyl chloride.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de02_p2_q22",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau về phenol là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phenol là chất rắn không màu hoặc màu hồng nhạt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phenol gây bỏng khi tiếp xúc với da, gây ngộ độc qua đường miệng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phenol không tan trong nước nhưng tan trong ethanol.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phenol có tính acid mạnh hơn ethanol.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Phenol tan ít trong nước lạnh và tan nhiều trong nước nóng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de02_p3_q23",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Khi đun nóng và có xúc tác Ni, 1 mol styrene có thể cộng được với tối đa bao nhiêu mol phân tử H<sub>2</sub>?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de02_p3_q24",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Tính khối lượng cumene (đơn vị tấn) tối đa phát thải từ một triệu xe ô tô chạy động cơ xăng (có bộ chuyển đổi xúc tác) trong một năm. Giả sử bình quân một tháng, mỗi xe ô tô chạy 3 000 km. Biết:<br/><br/>Đổi đơn vị: 1g = 10<sup>–6</sup>g.",
        "images": [],
        "correctAnswer": "32,4",
        "explanation": "Đáp án: 32,4.<br/>Bình quân một tháng, mỗi chiếc chạy 3 000 km, do đó trong một năm, mỗi chiếc chạy quãng đường là 36 000 km, phát thải tối đa: 0,0009.36000 = 32,4 (g) cumene.<br/>Vậy 1 triệu xe ô tô trong một năm phát thải tối đa: 1.32,4 = 32,4 (tấn).<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de02_p3_q25",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: CHI<sub>3</sub>, CH<sub>4</sub>, C<sub>6</sub>H<sub>5</sub>Cl, C<sub>2</sub>H<sub>5</sub>OH, CH<sub>2</sub>=CH-Cl, C<sub>2</sub>H<sub>5</sub>Br, C<sub>6</sub>H<sub>6</sub>. Trong số các chất trên, có bao nhiêu chất là dẫn xuất halogen của hydrocarbon?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de02_p3_q26",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dãy các dung dịch sau: NaOH, NaHCO<sub>3</sub>, HCl, NaNO<sub>3</sub>, Br<sub>2</sub>. Số dung dịch trong dãy phản ứng được với phenol là bao nhiê?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de02_p3_q27",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu alcohol có công thức phân tử C<sub>5</sub>H<sub>11</sub>OH tác dụng với CuO đun nóng tạo aldehyde?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image12.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_hdphoto1.wdp"
        ],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de02_p3_q28",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Đun sôi 15,7 gam C<sub>3</sub>H<sub>7</sub>Cl với hỗn hợp KOH/C<sub>2</sub>H<sub>5</sub>OH dư, sau khi loại tạp chất và dẫn khí sinh ra qua dung dịch brom dư thấy có m gam Br<sub>2</sub> tham gia phản ứng. Biết hiệu suất phản ứng là 80%. Tính m.",
        "images": [],
        "correctAnswer": "25,6",
        "explanation": "Đáp án: 25,6.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image13.png"
        ],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck2_de03",
    "code": "H11-CK2-03",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de03_p1_q1",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là alcohol bậc II?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "propan-l-ol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "propan-2-ol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2-methylpropan-1-ol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2-methylpropan-2-ol",
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
        "id": "hoa11_ck2_de03_p1_q2",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Methyl alcohol, ethyl alcohol tan vô hạn trong nước là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "khối lượng phân tử của các alcohol nhỏ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hình thành tương tác van der Waals với nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hình thành liên kết hydrogen với nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hình thành liên kết cộng hoá trị với nước",
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
        "id": "hoa11_ck2_de03_p1_q3",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các chất sau, chất nào thuộc loại phenol?",
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
        "displayNumber": 3
      },
      {
        "id": "hoa11_ck2_de03_p1_q4",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp, phenol được điều chế chủ yếu từ chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Benzene",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cumene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chlorobenzene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Than đá",
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
        "id": "hoa11_ck2_de03_p1_q5",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ethanol là hoá chất phổ biến, có nhiều ứng dụng trong đời sống, y tế và công nghiệp. Bằng phân tích phổ hồng ngoại IR, người ta xác định được ethanol có nhóm chức hydroxy (OH). Dưới đây là sơ đồ phổ khối IR của ethanol, hãy cho biết tín hiệu (peak) nào chứng tỏ ethanol có nhóm chức hydroxi (OH)?",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image5.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3391 cm<sup>-1</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2981 cm<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1102 cm<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1066 cm<sup>-1</sup>",
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
        "id": "hoa11_ck2_de03_p1_q6",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một chai đựng ethyl alcohol có nhãn ghi 40<sup>o</sup> nghĩa là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cứ 100 ml nước thì có 40 ml alcohol nguyên chất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cứ 100 gam dung dịch thì có 40 ml alcohol nguyên chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cứ 100 gam dung dịch thì có 40 gam alcohol nguyên chất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cứ 100 ml dung dịch thì có 40 ml alcohol nguyên chất",
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
        "id": "hoa11_ck2_de03_p1_q7",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sản phẩm chính của phản ứng sau đây là chất nào?<br/>CH<sub>3</sub>–CH<sub>2</sub>–CHCl–CH<sub>3</sub>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>–CH<sub>2</sub>–CH=CH<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>–CH–CH(OH)CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>–CH=CH–CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>–CH=CH<sub>2</sub>",
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
        "id": "hoa11_ck2_de03_p1_q8",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất có công thức cấu tạo như sau: HOCH<sub>2</sub>-CH<sub>2</sub>OH (X); HOCH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>OH (Y); HOCH<sub>2</sub>-CHOH-CH<sub>2</sub>OH (Z); CH<sub>3</sub>-CH<sub>2</sub>-O-CH<sub>2</sub>-CH<sub>3</sub>(R); CH<sub>3</sub>-CHOH-CH<sub>2</sub>OH (T). Những chất tác dụng được với Cu(OH)<sub>2</sub>tạo thành dung dịch màu xanh lam là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Z, R, T",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X, Y, R, T",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X, Z, T",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X, Y, Z, T",
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
        "id": "hoa11_ck2_de03_p1_q9",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 1,8 gam một alcohol đơn chức A tác dụng với Na dư thu được 0,37185 lít H<sub>2</sub> ở (đkc). Công thức cấu tạo của A là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>5</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>2</sub>=CH-CH<sub>2</sub>OH",
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
        "id": "hoa11_ck2_de03_p1_q10",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vào năm 1832, phenol (C<sub>6</sub>H<sub>5</sub>OH) lần đầu tiên được tách ra từ nhựa than đá. Phenol rất độc. Khi con người ăn phải thực phẩm có chứa phenol có thể bị ngộ độc cấp, tiêu chảy, rối loạn ý thức, thậm chí tử vong. Ở dạng lỏng, phenol có khả năng phản ứng với",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaCl",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "KOH",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NaHCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCl",
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
        "id": "hoa11_ck2_de03_p1_q11",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong thể thao, khi các vận động viên bị chấn thương do va chạm, không gây ra vết thương hở, gãy xương,... thường được nhân viên y tế dùng loại thuốc xịt, xịt vào chỗ bị thương để gây tê cục bộ và vận động viên có thể quay trở lại thi đấu. Hợp chất chính có trong thuốc xịt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "carbon dioxide",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hydrogen chloride",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chloromethane",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chloroethane",
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
        "id": "hoa11_ck2_de03_p1_q12",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử chất X có một nguyên tử oxygen và một vòng benzene. Trong X, phần trăm khối lượng các nguyên tố C, H và O lần lượt là 77,78%; 7,41% và 14,81%. Số đồng phân của A là",
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
        "explanation": "Đáp án: A.<br/>Đặt công thức của A là C<sub>x</sub>H<sub>y</sub>O.<br/>khối lượng mol của A là:<br/>Vậy công thức phân tử của A là C<sub>7</sub>H<sub>8</sub>O.<br/>",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image8.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image9.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image10.png"
        ],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa11_ck2_de03_p1_q13",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất thuộc loại dẫn xuất halogen của hydrocarbon là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>7</sub>N",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>6</sub>O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>5</sub>Br",
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
        "id": "hoa11_ck2_de03_p1_q14",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên gọi thông thường của dẫn xuất halogen có công thức CHCl<sub>3</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "methyl chloride",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "trichloromethane",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chloroform",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "propyl chloride",
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
        "id": "hoa11_ck2_de03_p1_q15",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các dẫn xuất halogen sau: (1) C<sub>2</sub>H<sub>5</sub>F; (2) C<sub>2</sub>H<sub>5</sub>Cl; (3) C<sub>2</sub>H<sub>5</sub>Br; (4) C<sub>2</sub>H<sub>5</sub>I. Thứ tự giảm dần của nhiệt độ sôi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) > (2) > (3) > (4)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) > (4) > (2) > (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(4) > (3) > (2) > (1)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(4) > (2) > (1) > (3)",
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
        "id": "hoa11_ck2_de03_p1_q16",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số đồng phân cấu tạo alcohol có công thức C<sub>4</sub>H<sub>9</sub>OH là",
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
            "text": "5",
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
        "id": "hoa11_ck2_de03_p1_q17",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Alcohol có phản ứng đặc trưng với Cu(OH)<sub>2</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "propane-1,2-diol, CH<sub>3</sub>CH(OH)CH<sub>2</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "propan-2-ol, CH<sub>3</sub>CH(OH)CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "propane-1,3-diol, HOCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ethanol, CH<sub>3</sub>CH<sub>2</sub>OH",
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
        "id": "hoa11_ck2_de03_p1_q18",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các chất sau đây, chất nào có nhiệt độ sôi lớn nhất?",
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
            "text": "CH<sub>3</sub>Cl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>6</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>OH",
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
        "id": "hoa11_ck2_de03_p2_q19",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau về phenol là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phenol là chất rắn không màu hoặc màu hồng nhạt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phenol gây bỏng khi tiếp xúc với da, gây ngộ độc qua đường miệng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phenol không tan trong nước nhưng tan trong ethanol.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phenol có tính acid mạnh hơn ethanol.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Phenol tan ít trong nước lạnh và tan nhiều trong nước nóng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de03_p2_q20",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Freon-22 (gas R22) có công thức CHF<sub>2</sub>Cl, được dùng rất phổ biến trong máy điều hoà nhiệt độ và các máy lạnh năng suất trung bình. Freon-22 có phân tử khối nhỏ nên ở thể khí trong điều kiện thường, năng suất làm lạnh cao nên được dùng rộng rãi. Hiện nay, chất này đã bị hạn chế sử dụng theo công ước bảo vệ môi trường và chống biến đổi khí hậu.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tên thay thế của CHF<sub>2</sub>Cl là difluorochloromethane.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Freon-22 thuộc nhóm hợp chất chlorofluorocarbon (viết tắt là CFC).",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "R22 bị hạn chế sử dụng do phá hủy tầng ozone và gây hiệu ứng nhà kính.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hiện nay, freon-22 được thay thế bởi các dẫn xuất halogen không có chứa chlorine như hydrofluorocarbon (HFC), hydrofluoroolefin (HFO).",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Tên gọi đúng là chlorodifluoromethane.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de03_p2_q21",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu về cấu tạo và tính chất vật lí của alcohol nào sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong các phân tử alcohol, liên kết O – H và C – O đều phân cực về phía O.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ sôi của các alcohol cao hơn hydrocarbon và dẫn xuất halogen có phân tử khối tương đương do giữa các phân tử alcohol có liên kết hydrogen.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các polyalcohol như C<sub>2</sub>H<sub>4</sub>(OH)<sub>2</sub>, C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub> là chất lỏng sánh, có vị ngọt.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các alcohol đều tan vô hạn trong nước do tạo được liên kết hydrogen với nước.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Các alcohol có số C lớn sẽ tan kém trong nước do phần gốc hydrocarbon kị nước tăng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de03_p2_q22",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Phân tích nguyên tố hợp chất hữu cơ X cho thấy phần trăm khối lượng ba nguyên tố C, H và O lần lượt là 64,86%; 13,51% và 21;63%. Phổ MS của X như hình dưới đây:",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Từ phổ MS suy ra khối lượng phân tử của X là 74 amu.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức phân tử của X là C<sub>4</sub>H<sub>10</sub>O.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu phổ hồng ngoại của X có tín hiệu hấp phụ trong vùng 3650 – 3200 cm<sup>-1</sup> thì X có 3 công thức cấu tạo thỏa mãn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Oxi hóa không hoàn toàn X bằng CuO, đun nóng thu được một aldehyde có mạch carbon phân nhánh. Tên gọi của X là 2 – methylbutan – 2 – ol.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. X có thể có 4 công thức cấu tạo thỏa mãn: CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-OH, CH<sub>3</sub>-CH(OH)-CH<sub>2</sub>-CH<sub>3</sub>, (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>-OH và (CH<sub>3</sub>)<sub>3</sub>C-OH.<br/>d. Sai. Để thỏa mãn thì X có công thức cấu tạo là (CH<sub>3</sub>)<sub>2</sub>CH–CHOH và tên gọi là 2-methylpropan-1-ol.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de03_p3_q23",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu alcohol có công thức phân tử C<sub>5</sub>H<sub>11</sub>OH tác dụng với CuO đun nóng tạo aldehyde?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image12.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_hdphoto1.wdp"
        ],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de03_p3_q24",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Đun sôi 15,7 gam C<sub>3</sub>H<sub>7</sub>Cl với hỗn hợp KOH/C<sub>2</sub>H<sub>5</sub>OH dư, sau khi loại tạp chất và dẫn khí sinh ra qua dung dịch brom dư thấy có m gam Br<sub>2</sub> tham gia phản ứng. Biết hiệu suất phản ứng là 80%. Tính m.",
        "images": [],
        "correctAnswer": "25,6",
        "explanation": "Đáp án: 25,6.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image13.png"
        ],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de03_p3_q25",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Picric acid được sử dụng trong sản xuất chất nổ, diêm, pin điện, dùng để điêu khắc vật liệu bằng đồng, sản xuất thuỷ tinh màu, dùng trong công nghiệp thuộc da và phẩm nhuộm. Picric acid rất dễ bắt nhiệt và có thể phát nổ nếu tiếp xúc với nguồn nhiệt, ngọn lửa, ma sát hoặc va chạm. Phần trăm theo khối lượng nguyên tử nitrogen trong phân tử picric acid là bao nhiêu (Làm tròn kết quả đến hàng phần mười)?",
        "images": [],
        "correctAnswer": "18,3",
        "explanation": "Đáp án: 18,3.<br/>C<sub>6</sub>H<sub>3</sub>N<sub>3</sub>O<sub>7</sub>  %N = 18,3.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image14.png"
        ],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de03_p3_q26",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Từ 1 tấn tinh bột ngô có thể sản xuất được bao nhiêu lít xăng E5 (chứa 5% ethanol về thể tích), biết tinh bột ngô chứa 75% tinh bột, hiệu suất chung của cả quá trình điều chế ethanol là 70%, khối lượng riêng của ethanol là 0,789 g/mL. (Làm tròn kết quả đến hàng đơn vị)",
        "images": [],
        "correctAnswer": "7558",
        "explanation": "Đáp án: 7558.<br/>m<sub>tinh bột</sub> = 1.75% = 0,75 tấn = 750 kg<br/>162 gam                        →                       92 gam<br/>750 kg<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de03_p3_q27",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu đồng phân cấu tạo ứng với công thức phân tử C<sub>3</sub>H<sub>7</sub>Cl?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Bao gồm: CH<sub>3</sub> – CH<sub>2</sub> – CH<sub>2</sub>Cl, CH<sub>3</sub> – CHCl – CH<sub>3</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de03_p3_q28",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Xylitol là một hợp chất hữu cơ được sử dụng như một chất tạo ngọt tự nhiên, có vị ngọt như đường nhưng có hàm lượng calo thấp nên được đưa thêm vào các sản phẩm chăm sóc răng miệng như kẹo cao su, kẹo bạc hà, thực phẩm ăn kiêng cho người bị bệnh tiểu đường. Xylitol có công thức cấu tạo như sau:<br/>Cho 30,4 gam xylitol phản ứng với Na dư, sau phản ứng thu được a mol khí H<sub>2</sub> ở điều kiện chuẩn. Tính a.",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image6.png"
        ],
        "correctAnswer": "0,5",
        "explanation": "Đáp án: 0,5.<br/>C<sub>5</sub>H<sub>12</sub>O<sub>5</sub> + 5Na  C<sub>5</sub>H<sub>7</sub>O<sub>5</sub>Na<sub>5</sub> + 5/2H<sub>2</sub><br/>0,2 mol 0,5 mol",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck2_de04",
    "code": "H11-CK2-04",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de04_p1_q1",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong thể thao, khi các vận động viên bị chấn thương do va chạm, không gây ra vết thương hở, gãy xương,... thường được nhân viên y tế dùng loại thuốc xịt, xịt vào chỗ bị thương để gây tê cục bộ và vận động viên có thể quay trở lại thi đấu. Hợp chất chính có trong thuốc xịt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "carbon dioxide",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hydrogen chloride",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chloromethane",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chloroethane",
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
        "id": "hoa11_ck2_de04_p1_q2",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử chất X có một nguyên tử oxygen và một vòng benzene. Trong X, phần trăm khối lượng các nguyên tố C, H và O lần lượt là 77,78%; 7,41% và 14,81%. Số đồng phân của A là",
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
        "explanation": "Đáp án: A.<br/>Đặt công thức của A là C<sub>x</sub>H<sub>y</sub>O.<br/>khối lượng mol của A là:<br/>Vậy công thức phân tử của A là C<sub>7</sub>H<sub>8</sub>O.<br/>",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image8.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image9.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_1)_image10.png"
        ],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa11_ck2_de04_p1_q3",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất thuộc loại dẫn xuất halogen của hydrocarbon là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>7</sub>N",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>6</sub>O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>5</sub>Br",
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
        "id": "hoa11_ck2_de04_p1_q4",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên gọi thông thường của dẫn xuất halogen có công thức CHCl<sub>3</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "methyl chloride",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "trichloromethane",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chloroform",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "propyl chloride",
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
        "id": "hoa11_ck2_de04_p1_q5",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các dẫn xuất halogen sau: (1) C<sub>2</sub>H<sub>5</sub>F; (2) C<sub>2</sub>H<sub>5</sub>Cl; (3) C<sub>2</sub>H<sub>5</sub>Br; (4) C<sub>2</sub>H<sub>5</sub>I. Thứ tự giảm dần của nhiệt độ sôi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) > (2) > (3) > (4)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) > (4) > (2) > (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(4) > (3) > (2) > (1)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(4) > (2) > (1) > (3)",
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
        "id": "hoa11_ck2_de04_p1_q6",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số đồng phân cấu tạo alcohol có công thức C<sub>4</sub>H<sub>9</sub>OH là",
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
            "text": "5",
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
        "id": "hoa11_ck2_de04_p1_q7",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Alcohol có phản ứng đặc trưng với Cu(OH)<sub>2</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "propane-1,2-diol, CH<sub>3</sub>CH(OH)CH<sub>2</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "propan-2-ol, CH<sub>3</sub>CH(OH)CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "propane-1,3-diol, HOCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ethanol, CH<sub>3</sub>CH<sub>2</sub>OH",
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
        "id": "hoa11_ck2_de04_p1_q8",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các chất sau đây, chất nào có nhiệt độ sôi lớn nhất?",
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
            "text": "CH<sub>3</sub>Cl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>6</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>OH",
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
        "id": "hoa11_ck2_de04_p1_q9",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một học sinh sau khi tiến hành thí nghiệm thì vẫn còn dư mẩu Na. Để tiêu hủy mẫu Na dư này một cách an toàn, học sinh đó nên cho mẩu Na vào",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nước",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cồn 96<sup>o</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "thùng rác",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dầu hỏa",
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
        "id": "hoa11_ck2_de04_p1_q10",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một chai rượu gạo có thể tích 750 mL và có độ rượu là 40<sup>o</sup>. Số mL ethanol nguyên chất (khan) có trong chai rượu đó là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "18,75 mL",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "300 mL",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "400 mL",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "750 mL",
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
        "id": "hoa11_ck2_de04_p1_q11",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phenol là hợp chất hữu cơ, trong phân tử có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhóm –OH và vòng benzene",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhóm –OH liên kết trực tiếp với nguyên tử carbon của vòng benzene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhóm –OH liên kết trực tiếp với nguyên tử carbon no",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhóm –OH liên kết trực tiếp với nguyên tử carbon no và có chứa vòng benzene",
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
        "id": "hoa11_ck2_de04_p1_q12",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để nhận biết hai chất lỏng phenol và ethanol, có thể dùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dung dịch bromine",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "quỳ tím",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "kim loại Na",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dung dịch NaOH",
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
        "id": "hoa11_ck2_de04_p1_q13",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi bị bỏng khi tiếp xúc với phenol, cách sơ cứu đúng là rửa vết thương bằng dung dịch nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giấm (dung dịch có acid acetic)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch NaCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước chanh (dung dịch có citric acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xà phòng có tính kiềm nhẹ",
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
        "id": "hoa11_ck2_de04_p1_q14",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Alcohol nào sau đây không có phản ứng tách nước tạo ra alkene?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>CH(OH)CH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>CH<sub>2</sub>OH",
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
        "id": "hoa11_ck2_de04_p1_q15",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ethyl chloride hóa lỏng được sử dụng làm thuốc xịt có tác dụng giảm đau tạm thời khi chơi thể thao. Cho phương trình nhiệt hóa học: C<sub>2</sub>H<sub>5</sub>Cl(l)  C<sub>2</sub>H<sub>5</sub>Cl(g) ; = 24,7 kJ  (1).<br/>(a) Tên gọi thay thế của C<sub>2</sub>H<sub>5</sub>Cl là chloroethane.<br/>(b) Phản ứng (1) là phản ứng thu nhiệt.<br/>(c) Ethyl chloride có thể được điều chế trực tiếp từ methane bằng một phản ứng.<br/>(d) Khi xịt thuộc ethyl chloride vào chỗ đau thì người ta sẽ cảm giác lạnh.<br/>Số phát biểu đúng là",
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
        "displayNumber": 15
      },
      {
        "id": "hoa11_ck2_de04_p1_q16",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không phù hợp với tính chất vật lí của dẫn xuất halogen?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong điều kiện thường, dẫn xuất halogen tồn tại ở 3 thể rắn, lỏng hoặc khí",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dẫn xuất halogen không tan trong nước và các dung môi hữu cơ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Một số dẫn xuất halogen có hoạt tính sinh học",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các dẫn xuất halogen có khối lượng phân tử nhỏ thường là chất khí ở điều kiện thường",
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
        "id": "hoa11_ck2_de04_p1_q17",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liều lượng được tính toán phù hợp của một số hợp chất phenol như: 4- hexylresorcinol được dùng trong thuốc giảm ho, chất trị nám, butyl paraben ( ), BHA, BHT,… được ứng dụng làm chất bảo quản trong chế biến thực phẩm, mĩ phẩm, dược phẩm. Vì đặc điểm của các hợp chất này là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có hoạt tính sinh học",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chi phí thấp",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dễ bảo quản",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "không gây ngộ độc nếu dùng dư liều lượng",
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
        "id": "hoa11_ck2_de04_p1_q18",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính axit của các chất sau: H<sub>2</sub>CO<sub>3</sub> (X); C<sub>6</sub>H<sub>5</sub>OH (Y) và C<sub>2</sub>H<sub>5</sub>OH (Z) biến đổi theo thứ tự nào dưới đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X > Y > Z",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Z > X > Y",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Z > Y > X",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X > Z > Y",
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
        "id": "hoa11_ck2_de04_p2_q19",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Phân tích nguyên tố hợp chất hữu cơ X cho thấy phần trăm khối lượng ba nguyên tố C, H và O lần lượt là 64,86%; 13,51% và 21;63%. Phổ MS của X như hình dưới đây:",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Từ phổ MS suy ra khối lượng phân tử của X là 74 amu.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức phân tử của X là C<sub>4</sub>H<sub>10</sub>O.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu phổ hồng ngoại của X có tín hiệu hấp phụ trong vùng 3650 – 3200 cm<sup>-1</sup> thì X có 3 công thức cấu tạo thỏa mãn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Oxi hóa không hoàn toàn X bằng CuO, đun nóng thu được một aldehyde có mạch carbon phân nhánh. Tên gọi của X là 2 – methylbutan – 2 – ol.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. X có thể có 4 công thức cấu tạo thỏa mãn: CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-OH, CH<sub>3</sub>-CH(OH)-CH<sub>2</sub>-CH<sub>3</sub>, (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>-OH và (CH<sub>3</sub>)<sub>3</sub>C-OH.<br/>d. Sai. Để thỏa mãn thì X có công thức cấu tạo là (CH<sub>3</sub>)<sub>2</sub>CH–CHOH và tên gọi là 2-methylpropan-1-ol.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de04_p2_q20",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Catechin là một chất kháng oxi hóa mạnh, ức chế hoạt động của các gốc tự do nên có khả năng phòng chống bệnh ung thư, nhồi máu cơ tim. Trong lá chè tươi, catechin chiếm khoảng 25 - 35% tổng trọng lượng khô. Ngoài ra, catechin còn có trong táo, lê, nho, ... Công thức cấu tạo catechin cho như hình bên:",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image5.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức phân tử của catechin là C<sub>15</sub>H<sub>14</sub>O<sub>6</sub>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử catechin có 5 nhóm -OH của phenol.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Catechin thuộc hợp chất thơm.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 mol catechin tác dụng tối đa với 5 mol NaOH trong dung dịch.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Catechin có 4 nhóm OH phenol.<br/>c. Đúng.<br/>d. Sai. Có 4 nhóm OH của phenol nên 1 mol catechin phản ứng tối đa với 4 mol NaOH.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de04_p2_q21",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Chất hữu cơ X có công thức cấu tạo là: CH<sub>3</sub> – CH<sub>2</sub> – CHCl – CH<sub>3</sub>.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tên gọi gốc - chức của X là 2 – chlorobutane.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở điều kiện thường, X là chất khí.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi đun nóng X với NaOH thu được sản phẩm hữu cơ có công thức: CH<sub>3</sub> – CH<sub>2</sub> – CH(OH) – CH<sub>3</sub>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi đun nóng X với KOH có mặt C<sub>2</sub>H<sub>5</sub>OH thì sản phẩm hữu cơ chính thu được là but – 1 – ene.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. 2 – chlorobutane là tên thay thế.<br/>b. Sai. Ở điều kiện thường X là chất lỏng, các dẫn xuất halogen có phân tử khối nhỏ như CH<sub>3</sub>F, CH<sub>3</sub>Cl, CH<sub>3</sub>Br, C<sub>2</sub>H<sub>5</sub>Cl, C<sub>3</sub>H<sub>7</sub>F mới ở thể khí điều kiện thường.<br/>c. Đúng.<br/>d. Sai. Sản phẩm chính là but – 2 – ene.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de04_p2_q22",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện thí nghiệm copper(II) hydroxide tác dụng với alcohol đa chức<br/>Bước 1: Cho vào 2 ống nghiệm, mỗi ống khoảng 1 mL dung dịch CuSO<sub>4</sub> 2% và 1 mL dung dịch NaOH 10%.<br/>Bước 2: Lắc nhẹ 2 ống nghiệm rồi nhỏ vào từng ống:<br/>+ Ống nghiệm (1): 5 giọt ethanol.<br/>+ Ống nghiệm (2): 5 giọt glycerol.<br/>Lắc đều cả hai ống nghiệm.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 1, có xuất hiện kết tủa màu trắng.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sau bước 2, ống nghiệm (1) kết tủa vẫn không tan còn ống nghiệm (2) kết tủa tan tạo dung dịch màu xanh lam.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thí nghiệm chứng tỏ glycerol có tính khử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không thể dùng Cu(OH)<sub>2</sub> để nhận biết methanol và ethylene glycol.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Hiện tượng:<br/>+ Ống nghiệm (1): không có hiện tượng gì xuất hiện.<br/>+ Ống nghiệm (2): Cu(OH)<sub>2</sub> tan dần tạo ra dung dịch màu xanh lam đậm.<br/>a. Sai. Kết tủa màu xanh lam Cu(OH)<sub>2</sub>.<br/>b. Đúng.<br/>c. Sai. Glycerol có các nhóm -OH liền kề nhau, có thể tác dụng với Cu(OH)<sub>2</sub> tạo phức màu xanh lam đậm.<br/>d. Sai. Có thể dùng được và kết quả tương tự thí nghiệm trên.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de04_p3_q23",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu đồng phân cấu tạo ứng với công thức phân tử C<sub>3</sub>H<sub>7</sub>Cl?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Bao gồm: CH<sub>3</sub> – CH<sub>2</sub> – CH<sub>2</sub>Cl, CH<sub>3</sub> – CHCl – CH<sub>3</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de04_p3_q24",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Xylitol là một hợp chất hữu cơ được sử dụng như một chất tạo ngọt tự nhiên, có vị ngọt như đường nhưng có hàm lượng calo thấp nên được đưa thêm vào các sản phẩm chăm sóc răng miệng như kẹo cao su, kẹo bạc hà, thực phẩm ăn kiêng cho người bị bệnh tiểu đường. Xylitol có công thức cấu tạo như sau:<br/>Cho 30,4 gam xylitol phản ứng với Na dư, sau phản ứng thu được a mol khí H<sub>2</sub> ở điều kiện chuẩn. Tính a.",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image6.png"
        ],
        "correctAnswer": "0,5",
        "explanation": "Đáp án: 0,5.<br/>C<sub>5</sub>H<sub>12</sub>O<sub>5</sub> + 5Na  C<sub>5</sub>H<sub>7</sub>O<sub>5</sub>Na<sub>5</sub> + 5/2H<sub>2</sub><br/>0,2 mol 0,5 mol",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de04_p3_q25",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu chất ứng với công thức phân tử C<sub>7</sub>H<sub>8</sub>O (là dẫn xuất của benzene) đều tác dụng được với dung dịch NaOH?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Bao gồm: CH<sub>3</sub> – C<sub>6</sub>H<sub>4</sub> – OH (o, m, p).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de04_p3_q26",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho đồ thị biểu diễn nhiệt độ sôi của một số dẫn xuất halogen:<br/>Có bao nhiêu dẫn xuất haogen trong các dẫn xuất đề cập ở trên ở thể khí điều kiện thường (25<sup>o</sup>C)?",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image7.png"
        ],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.<br/>Xác định điểm ở giữa nhiệt độ 0 °C và 50 °C, dùng bút chì vẽ đường thẳng song song với đường nằm ngang, biểu diễn đường nhiệt độ 25 °C.<br/>Bao gồm: CH<sub>3</sub>F, CH<sub>3</sub>Cl, CH<sub>3</sub>Br, C<sub>2</sub>H<sub>5</sub>F, C<sub>2</sub>H<sub>5</sub>Cl, C<sub>3</sub>H<sub>7</sub>F.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de04_p3_q27",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Một nhà máy sản xuất rượu vang sử dụng 500 kg nho cho một mẻ lên men. Khối lượng ethanol thu được là bao nhiêu kg? Giả thiết hiệu suất phản ứng lên men đạt 100%, trong mỗi kg nho chứa 200 g glucose (Làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "51,1",
        "explanation": "Đáp án: 51,1.<br/>PTHH:                     C<sub>6</sub> H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub><br/>180g  →   92 g<br/>100 kg →",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de04_p3_q28",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Phenol có thể được điều chế từ benzene theo sơ đồ sau:<br/>Khối lượng benzene cần thiết để điều chế được 9,4 kg phenol theo sơ đồ trên bằng bao nhiêu kg? Biết hiệu suất của cả quá trình là 42%. (Kết quả làm tròn đến hàng phần mười)",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image11.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_hdphoto1.wdp"
        ],
        "correctAnswer": "18,6",
        "explanation": "Đáp án: 18,6.<br/>Khối lượng benzene cần thiết là:<br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image12.png"
        ],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck2_de05",
    "code": "H11-CK2-05",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de05_p1_q1",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phenol là hợp chất hữu cơ, trong phân tử có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhóm –OH và vòng benzene",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhóm –OH liên kết trực tiếp với nguyên tử carbon của vòng benzene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhóm –OH liên kết trực tiếp với nguyên tử carbon no",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhóm –OH liên kết trực tiếp với nguyên tử carbon no và có chứa vòng benzene",
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
        "id": "hoa11_ck2_de05_p1_q2",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để nhận biết hai chất lỏng phenol và ethanol, có thể dùng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dung dịch bromine",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "quỳ tím",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "kim loại Na",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dung dịch NaOH",
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
        "id": "hoa11_ck2_de05_p1_q3",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi bị bỏng khi tiếp xúc với phenol, cách sơ cứu đúng là rửa vết thương bằng dung dịch nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giấm (dung dịch có acid acetic)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch NaCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước chanh (dung dịch có citric acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xà phòng có tính kiềm nhẹ",
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
        "id": "hoa11_ck2_de05_p1_q4",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Alcohol nào sau đây không có phản ứng tách nước tạo ra alkene?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>CH(OH)CH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>CH<sub>2</sub>OH",
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
        "id": "hoa11_ck2_de05_p1_q5",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ethyl chloride hóa lỏng được sử dụng làm thuốc xịt có tác dụng giảm đau tạm thời khi chơi thể thao. Cho phương trình nhiệt hóa học: C<sub>2</sub>H<sub>5</sub>Cl(l)  C<sub>2</sub>H<sub>5</sub>Cl(g) ; = 24,7 kJ  (1).<br/>(a) Tên gọi thay thế của C<sub>2</sub>H<sub>5</sub>Cl là chloroethane.<br/>(b) Phản ứng (1) là phản ứng thu nhiệt.<br/>(c) Ethyl chloride có thể được điều chế trực tiếp từ methane bằng một phản ứng.<br/>(d) Khi xịt thuộc ethyl chloride vào chỗ đau thì người ta sẽ cảm giác lạnh.<br/>Số phát biểu đúng là",
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
        "displayNumber": 5
      },
      {
        "id": "hoa11_ck2_de05_p1_q6",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không phù hợp với tính chất vật lí của dẫn xuất halogen?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong điều kiện thường, dẫn xuất halogen tồn tại ở 3 thể rắn, lỏng hoặc khí",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dẫn xuất halogen không tan trong nước và các dung môi hữu cơ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Một số dẫn xuất halogen có hoạt tính sinh học",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các dẫn xuất halogen có khối lượng phân tử nhỏ thường là chất khí ở điều kiện thường",
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
        "id": "hoa11_ck2_de05_p1_q7",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liều lượng được tính toán phù hợp của một số hợp chất phenol như: 4- hexylresorcinol được dùng trong thuốc giảm ho, chất trị nám, butyl paraben ( ), BHA, BHT,… được ứng dụng làm chất bảo quản trong chế biến thực phẩm, mĩ phẩm, dược phẩm. Vì đặc điểm của các hợp chất này là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có hoạt tính sinh học",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chi phí thấp",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dễ bảo quản",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "không gây ngộ độc nếu dùng dư liều lượng",
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
        "id": "hoa11_ck2_de05_p1_q8",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính axit của các chất sau: H<sub>2</sub>CO<sub>3</sub> (X); C<sub>6</sub>H<sub>5</sub>OH (Y) và C<sub>2</sub>H<sub>5</sub>OH (Z) biến đổi theo thứ tự nào dưới đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X > Y > Z",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Z > X > Y",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Z > Y > X",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X > Z > Y",
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
        "id": "hoa11_ck2_de05_p1_q9",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau về phenol (C<sub>6</sub>H<sub>5</sub>OH):<br/>(a) Phenol là hợp chất hữu cơ trong phân tử có vòng benzene và nhóm –OH.<br/>(b) Do có nhóm –OH nên phenol tan vô hạn trong nước ở điều kiện thường tương tự ethanol.<br/>(c) Dung dịch phenol không làm đổi màu giấy quỳ tím, do đó phenol có tính acid yếu.<br/>(d) Phenol phản ứng được với dung dịch NaOH.<br/>(e) Phenol phản ứng được với Na<sub>2</sub>CO<sub>3</sub> do có tính acid mạnh hơn nấc 2 của carbonic acid.<br/>(g) Phenol dễ tham gia phản ứng thế bromine và thế nitro hơn benzene do ảnh hưởng của nhóm –OH.<br/>Các phát biểu đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a), (b), (c), (d)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(a), (c), (d), (g)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(b), (c), (d), (e)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(c), (d), (e), (g)",
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
        "id": "hoa11_ck2_de05_p1_q10",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho m gam hỗn hợp X gồm phenol và ethanol phản ứng hoàn toàn với Na dư, thu được 1239,5 mL khí H<sub>2</sub> (đo ở điều kiện chuẩn 25 C, 1 bar). Mặt khác, m gam X phản ứng tối đa với 100 mL dung dịch NaOH 0,5 M. Giá trị của m là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "10,5",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "7,0",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "14,0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "21,0",
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
        "id": "hoa11_ck2_de05_p1_q11",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học sau: C<sub>2</sub>H<sub>5</sub>Br + NaOH → C<sub>2</sub>H<sub>5</sub>OH + NaBr. Phản ứng trên thuộc loại phản ứng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thế",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng cộng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng tách",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng oxi hóa – khử",
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
        "id": "hoa11_ck2_de05_p1_q12",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức tổng quát của dẫn xuất monobromine không no, mạch hở, trong phân tử chứa một liên kết C=C là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>n</sub>H<sub>2n-5</sub>Br",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>n</sub>H<sub>2n-3</sub>Br",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>n</sub>H<sub>2n-1</sub>Br",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>n</sub>H<sub>2n+1</sub>Br",
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
        "id": "hoa11_ck2_de05_p1_q13",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dẫn xuất halogen bậc II có tên và công thức cấu tạo phù hợp là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1,2–dichloroethane: Cl–CH<sub>2</sub>–CH<sub>2</sub>–Cl",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2–iodopropane: CH<sub>3</sub>–CHI–CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1–bromo–2–methylpropane: CH<sub>3</sub> – CH(CH<sub>3</sub>) – CH<sub>2</sub>Br",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2–fluoro–2–methylpropane: (CH<sub>3</sub>)<sub>3</sub>C – F",
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
        "id": "hoa11_ck2_de05_p1_q14",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bậc của alcohol là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "bậc carbon lớn nhất trong phân tử",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bậc của carbon liên kết với nhóm hydroxyl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số nhóm chức có trong phân tử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số carbon có trong phân tử alcohol",
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
        "id": "hoa11_ck2_de05_p1_q15",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất nào dưới đây không phải là phenol?",
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
        "displayNumber": 15
      },
      {
        "id": "hoa11_ck2_de05_p1_q16",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có độ tan kém nhất trong nước lạnh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phenol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ethanol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Methanol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Glyxerol",
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
        "id": "hoa11_ck2_de05_p1_q17",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiều vụ ngộ độc rượu do sử dụng rượu được pha chế từ cồn công nghiệp có lần methanol. Công thức phân tử của methanol là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>5</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>3</sub>H<sub>7</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>2</sub>H<sub>4</sub>(OH)<sub>2</sub>",
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
        "id": "hoa11_ck2_de05_p1_q18",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi đun nóng hỗn hợp gồm methanol và ethanol (xúc tác H<sub>2</sub>SO<sub>4</sub> đặc, ở 140<sup>o</sup>C) thì số ether thu được tối đa là",
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
            "text": "1",
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
        "displayNumber": 18
      },
      {
        "id": "hoa11_ck2_de05_p2_q19",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện thí nghiệm copper(II) hydroxide tác dụng với alcohol đa chức<br/>Bước 1: Cho vào 2 ống nghiệm, mỗi ống khoảng 1 mL dung dịch CuSO<sub>4</sub> 2% và 1 mL dung dịch NaOH 10%.<br/>Bước 2: Lắc nhẹ 2 ống nghiệm rồi nhỏ vào từng ống:<br/>+ Ống nghiệm (1): 5 giọt ethanol.<br/>+ Ống nghiệm (2): 5 giọt glycerol.<br/>Lắc đều cả hai ống nghiệm.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 1, có xuất hiện kết tủa màu trắng.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sau bước 2, ống nghiệm (1) kết tủa vẫn không tan còn ống nghiệm (2) kết tủa tan tạo dung dịch màu xanh lam.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thí nghiệm chứng tỏ glycerol có tính khử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không thể dùng Cu(OH)<sub>2</sub> để nhận biết methanol và ethylene glycol.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Hiện tượng:<br/>+ Ống nghiệm (1): không có hiện tượng gì xuất hiện.<br/>+ Ống nghiệm (2): Cu(OH)<sub>2</sub> tan dần tạo ra dung dịch màu xanh lam đậm.<br/>a. Sai. Kết tủa màu xanh lam Cu(OH)<sub>2</sub>.<br/>b. Đúng.<br/>c. Sai. Glycerol có các nhóm -OH liền kề nhau, có thể tác dụng với Cu(OH)<sub>2</sub> tạo phức màu xanh lam đậm.<br/>d. Sai. Có thể dùng được và kết quả tương tự thí nghiệm trên.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de05_p2_q20",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành hai thí nghiệm sau:<br/>Thí nghiệm 1: Cho vào ống nghiệm khoảng 1 mL dung dịch phenol dạng huyền phù. Nhỏ từ từ khoảng 2 mL dung dịch sodium carbonate 1 M vào ống nghiệm. Lắc đều ống nghiệm.<br/>Thí nghiệm 2: Cho 0,5 mL dung dịch phenol 5% vào ống nghiệm và thêm vài giọt nước bromine bão hòa. Lắc đều ống nghiệm.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở thí nghiệm 1, phenol tan trong dung dịch sodium carbonate và thấy có sủi bọt khí.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở thí nghiệm 2, thấy xuất hiện kết tủa trắng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thí nghiệm 1 dùng để chứng minh phenol có tính acid mạnh.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thí nghiệm 2 dùng để chứng minh phản ứng thế nguyên tử H ở vòng benzene của phenol dễ hơn benzene.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Thí nghiệm 1: Phenol phản ứng với Na<sub>2</sub>CO<sub>3</sub> thu được muối tan nên sau phản ứng dung dịch trở nên trong hơn.<br/>C<sub>6</sub>H<sub>5</sub>OH + Na<sub>2</sub>CO<sub>3</sub> ⇌ C<sub>6</sub>H<sub>5</sub>ONa + NaHCO<sub>3</sub>.<br/>Thí nghiệm 2: Nước bromine mất màu và xuất hiện kết tủa trắng do phenol phản ứng với nước bromine tạo thành sản phẩm thế 2,4,6 – tribromophenol ở dạng kết tủa màu trắng.<br/>a. Sai. Không có khí.<br/>b. Đúng.<br/>c. Sai. Phenol có tính acid yếu.<br/>d. Đúng.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_3)_image7.png"
        ],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de05_p2_q21",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Hợp chất X có tác dụng kháng khuẩn, chống vi sinh vật kí sinh trên da (chấy, rận,…). X có công thức phân tử C<sub>7</sub>H<sub>8</sub>O và có chứa vòng benzene, phổ IR của X có peak hấp thụ rộng ở vùng 3300 cm<sup>-1</sup>. Oxi hóa X bằng CuO nung nóng, thu được hợp chất Y có peak hấp thụ đặc trưng ở khoảng 1 700 cm<sup>-1</sup>.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X thuộc loại alcohol.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Y thuộc loại ketone.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X có 3 đồng phân cấu tạo thỏa mãn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Công thức cấu tạo của Y là C<sub>6</sub>H<sub>5</sub>CHO (C<sub>6</sub>H<sub>5</sub>-: phenyl).",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Phổ IR của X có peak hấp thụ rộng ở vùng 3 300 cm<sup>-1</sup>: có nhóm –OH.<br/>Phổ IR của Y có peak hấp thụ rộng ở vùng 1 700 cm<sup>-1</sup>: có nhóm C=O.<br/>Vậy X là benzyl alcohol, Y là aldehyde benzoic.<br/>a. Đúng.<br/>b. Sai.<br/>c. Sai.<br/>d. Đúng.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_3)_image8.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_3)_hdphoto1.wdp"
        ],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de05_p2_q22",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Carboxylic acid có nhiệt độ sôi cao hơn so với hydrocarbon, alcohol, hợp chất carbonyl có phân tử khối tương đương do tạo được liên kết hydrogen bền vứng hơn",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_image2.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hình (a) là liên kết hydrogen dạng liên phân tử và hình (b) là liên kết hydrogen dạng dimer.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử carboxylic acid chứa nhóm carboxyl phân cực mạnh nên tạo được liên kết hydrogen bền vừng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ngoài hai dạng liên kết hydrogen trên còn có liên kết giữa carboxylic acid và nước.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các hợp chất hydrocarbon, alcohol và hợp chất carbonyl không tạo được liên kết hydrogen liên phân tử.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Hình (b) là liên kết hydrogen dạng liên phân tử và hình (a) là liên kết hydrogen dạng dimer.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Alcohol có tạo liên kết hydrogen liên phân tử.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de05_p3_q23",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Một nhà máy sản xuất rượu vang sử dụng 500 kg nho cho một mẻ lên men. Khối lượng ethanol thu được là bao nhiêu kg? Giả thiết hiệu suất phản ứng lên men đạt 100%, trong mỗi kg nho chứa 200 g glucose (Làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "51,1",
        "explanation": "Đáp án: 51,1.<br/>PTHH:                     C<sub>6</sub> H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub><br/>180g  →   92 g<br/>100 kg →",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de05_p3_q24",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Phenol có thể được điều chế từ benzene theo sơ đồ sau:<br/>Khối lượng benzene cần thiết để điều chế được 9,4 kg phenol theo sơ đồ trên bằng bao nhiêu kg? Biết hiệu suất của cả quá trình là 42%. (Kết quả làm tròn đến hàng phần mười)",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image11.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_hdphoto1.wdp"
        ],
        "correctAnswer": "18,6",
        "explanation": "Đáp án: 18,6.<br/>Khối lượng benzene cần thiết là:<br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_2)_image12.png"
        ],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de05_p3_q25",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất có công thức: CH<sub>3</sub>F, CH<sub>3</sub>Cl, CH<sub>3</sub>Br, CH<sub>3</sub>I và nhiệt độ sôi của chúng (không theo thứ tự) là 42 °C, 4 °C, -24 °C, –78 °C. Nhiệt độ sôi của CH<sub>3</sub>F là bao nhiêu độ C?",
        "images": [],
        "correctAnswer": "–78",
        "explanation": "Đáp án: –78.<br/>Nhiệt độ sôi tăng dần theo thứ tự: CH<sub>3</sub>F, CH<sub>3</sub>Cl, CH<sub>3</sub>Br, CH<sub>3</sub>I tương ứng –78 <sup>o</sup>C, –24 <sup>o</sup>C, 4 <sup>o</sup>C, 42 <sup>o</sup>C.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de05_p3_q26",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Có ba ống nghiệm (1), (2), (3) chứa riêng biệt ba hoá chất sau: ethanol, glycerol, phenol (không theo thứ tự). Một học sinh tiến hành thí nghiệm để nhận biết các chất trên, thu được kết quả như ở bảng sau đây:<br/><br/>Sắp xếp thứ tự hoá chất trong các ống nghiệm lần lượt là ethanol, glycerol, phenol tạo thành dãy ba chữ số (Ví dụ: 123, 231,…).",
        "images": [],
        "correctAnswer": "312",
        "explanation": "Đáp án: 312.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de05_p3_q27",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Chất X có công thức đơn giản nhất là C<sub>2</sub>H<sub>5</sub>O, hòa tan được Cu(OH)<sub>2</sub> tạo thành dung dịch màu xanh đậm. Có bao nhiêu đồng phân cấu tạo thỏa mãn tính chất của X?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án:  3.<br/>CTPT của X có dạng C<sub>2n</sub>H<sub>5n</sub>O<sub>n</sub><br/>X hòa tan Cu(OH)<sub>2</sub>  2 nhóm OH gắn vào 2 C cạnh nhau:<br/>(1) CH<sub>2</sub>OH – CHOH – CH<sub>2</sub> – CH<sub>3</sub>; (2) CH<sub>3</sub> – CHOH – CHOH – CH<sub>3</sub>; (3) CH<sub>2</sub>OH – C(OH)(CH<sub>3</sub>)<sub>2</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de05_p3_q28",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các thí nghiệm:<br/>(1) Đun nóng C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl trong dung dịch NaOH.<br/>(2) Đung nóng hỗn hợp CH<sub>3</sub>CH<sub>2</sub>Cl, KOH và C<sub>2</sub>H<sub>5</sub>OH.<br/>(3) Đun nóng CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Cl trong dung dịch NaOH.<br/>(4) Đun nóng C<sub>6</sub>H<sub>5</sub>Cl trong dung dịch NaOH (với C<sub>6</sub>H<sub>5</sub>-: phenyl).<br/>Liệt kê các thí nghiệm có tạo sản phẩm chính là alcohol theo dãy số thứ tự tăng dần (Ví dụ: 1234, 24,…).",
        "images": [],
        "correctAnswer": "13",
        "explanation": "Đáp án: 13.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck2_de06",
    "code": "H11-CK2-06",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de06_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học sau: C<sub>2</sub>H<sub>5</sub>Br + NaOH → C<sub>2</sub>H<sub>5</sub>OH + NaBr. Phản ứng trên thuộc loại phản ứng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thế",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng cộng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng tách",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng oxi hóa – khử",
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
        "id": "hoa11_ck2_de06_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức tổng quát của dẫn xuất monobromine không no, mạch hở, trong phân tử chứa một liên kết C=C là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>n</sub>H<sub>2n-5</sub>Br",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>n</sub>H<sub>2n-3</sub>Br",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>n</sub>H<sub>2n-1</sub>Br",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>n</sub>H<sub>2n+1</sub>Br",
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
        "id": "hoa11_ck2_de06_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dẫn xuất halogen bậc II có tên và công thức cấu tạo phù hợp là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1,2–dichloroethane: Cl–CH<sub>2</sub>–CH<sub>2</sub>–Cl",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2–iodopropane: CH<sub>3</sub>–CHI–CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1–bromo–2–methylpropane: CH<sub>3</sub> – CH(CH<sub>3</sub>) – CH<sub>2</sub>Br",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2–fluoro–2–methylpropane: (CH<sub>3</sub>)<sub>3</sub>C – F",
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
        "id": "hoa11_ck2_de06_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bậc của alcohol là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "bậc carbon lớn nhất trong phân tử",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bậc của carbon liên kết với nhóm hydroxyl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số nhóm chức có trong phân tử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "số carbon có trong phân tử alcohol",
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
        "id": "hoa11_ck2_de06_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất nào dưới đây không phải là phenol?",
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
        "displayNumber": 5
      },
      {
        "id": "hoa11_ck2_de06_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có độ tan kém nhất trong nước lạnh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phenol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ethanol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Methanol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Glyxerol",
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
        "id": "hoa11_ck2_de06_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiều vụ ngộ độc rượu do sử dụng rượu được pha chế từ cồn công nghiệp có lần methanol. Công thức phân tử của methanol là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>2</sub>H<sub>5</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>3</sub>H<sub>7</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>2</sub>H<sub>4</sub>(OH)<sub>2</sub>",
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
        "id": "hoa11_ck2_de06_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi đun nóng hỗn hợp gồm methanol và ethanol (xúc tác H<sub>2</sub>SO<sub>4</sub> đặc, ở 140<sup>o</sup>C) thì số ether thu được tối đa là",
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
            "text": "1",
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
        "displayNumber": 8
      },
      {
        "id": "hoa11_ck2_de06_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên nhân phản ứng thế bromine vào vòng thơm của phenol xảy ra dễ dàng hơn so với benzene là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phenol tan một phần trong nước",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phenol có tính acid yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ảnh hưởng của nhóm –OH đến vòng benzene trong phân tử phenol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ảnh hưởng của vòng benzene đến nhóm –OH trong phân tử phenol",
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
        "id": "hoa11_ck2_de06_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phenol (C<sub>6</sub>H<sub>5</sub>OH) không phản ứng với chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaHCO<sub>3</sub>",
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
            "text": "NaOH",
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
        "id": "hoa11_ck2_de06_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất: C<sub>2</sub>H<sub>5</sub>OH, C<sub>2</sub>H<sub>5</sub>Br, C<sub>6</sub>H<sub>5</sub>OH, C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH, C<sub>6</sub>H<sub>5</sub>Cl. số chát tác dụng được với dung dịch NaOH loãng khi đun nóng là",
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
        "id": "hoa11_ck2_de06_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong số các phát biểu sau về phenol (C<sub>6</sub>H<sub>5</sub>OH):<br/>(1) Phenol tan ít trong nước nhưng tan nhiều trong dung dịch HCl.<br/>(2) Phenol có tính acid, dung dịch phenol không làm đổi màu quỳ tím.<br/>(3) Phenol dùng để sản xuất keo dán, chất diệt nấm mốc.<br/>(4) Phenol tham gia phản ứng thế bromine và thế nitro dễ hơn benzene.<br/>Các phát biểu đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1), (2), (4)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(2), (3), (4)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1), (2), (3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1), (3), (4)",
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
        "id": "hoa11_ck2_de06_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trước đây, Freon được dùng làm chất sinh hàn trong tủ lạnh và máy điều hòa nhiệt độ. Từ năm 1996, Freon đã bị cấm sử dụng, nguyên nhân chính là do khi thải vào khí quyển",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phá hủy tầng ozone",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "gây hiện tượng mưa acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "gây hiện tượng hiệu ứng nhà kính",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "gây ra hiện tượng El Nino",
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
        "id": "hoa11_ck2_de06_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận xét nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử dẫn xuất halogen, liên kết C-X phân cực về phía nguyên tử carbon",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đun nóng 2-chloropropane với KOH thu được sản phẩm chính là propene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đun nóng monohalogen no, mạch hở với dung dịch gồm KOH và C<sub>2</sub>H<sub>5</sub>OH thu được alkene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2,3-dichloroethane và 2,3-dibromobutane đều là dẫn xuất dihalogen",
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
        "id": "hoa11_ck2_de06_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi tách nước từ một chất X có công thức phân tử C<sub>4</sub>H<sub>10</sub>O tạo thành ba alkene là đồng phân của nhau (tính cả đồng phân hình học). Công thức cấu tạo của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>OCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(CH<sub>3</sub>)<sub>3</sub>COH",
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
        "id": "hoa11_ck2_de06_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương pháp nào sau đây dùng để sản xuất ethanol sinh học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho hỗn hợp khí ethylene và hơi nước đi qua tháp chứa H<sub>3</sub>PO<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cộng nước vào ethylene với xúc tác là H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lên men tinh bột",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thủy phân dẫn xuất C<sub>2</sub>H<sub>5</sub>Br trong môi trường kiềm",
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
        "id": "hoa11_ck2_de06_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một đơn vị cồn tương đương 10 mL ethanol nguyên chất. Theo khuyến cáo của ngành y tế, để đảm bảo sức khỏe mỗi người trưởng thành không nên uống quá 2 đơn vị cồn mỗi ngày. Vậy mỗi người trưởng thành không nên uống quá bao nhiêu mL rượu 40<sup>0</sup> một ngày? Biết",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "100",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "40",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "80",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "50",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án: D<br/>Hai đơn vị cồn tương đương 20 mL ethanol nguyên chất.<br/>Rượu 40° là 100 mL rượu có 40 mL ethanol nguyên chất.<br/>Vậy mỗi người trưởng thành không nên uống quá số mL rượu 40° một ngày là: 20 x 100 : 40 = 50 mL",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa11_ck2_de06_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Trong phân tử alcohol có nhóm -OH.<br/>(b) Ethyl alcohol dễ tan trong nước vì phân tử alcohol phân cực và alcohol có thể tạo liên kết hydrogen với phân tử nước.<br/>(c) Hợp chất C<sub>6</sub>H<sub>5</sub>OH là alcohol thơm, đơn chức.<br/>(d) Nhiệt độ sôi của CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>OH cao hơn của CH<sub>3</sub>-O-CH<sub>2</sub>CH<sub>3</sub>.<br/>(e) Có 5 alcohol đồng phân cấu tạo ứng với công thức phân tử C<sub>4</sub>H<sub>10</sub>O.<br/>Số phát biểu đúng là",
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
            "text": "5",
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
        "displayNumber": 18
      },
      {
        "id": "hoa11_ck2_de06_p2_q19",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Carboxylic acid có nhiệt độ sôi cao hơn so với hydrocarbon, alcohol, hợp chất carbonyl có phân tử khối tương đương do tạo được liên kết hydrogen bền vứng hơn",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_image2.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hình (a) là liên kết hydrogen dạng liên phân tử và hình (b) là liên kết hydrogen dạng dimer.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử carboxylic acid chứa nhóm carboxyl phân cực mạnh nên tạo được liên kết hydrogen bền vừng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ngoài hai dạng liên kết hydrogen trên còn có liên kết giữa carboxylic acid và nước.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các hợp chất hydrocarbon, alcohol và hợp chất carbonyl không tạo được liên kết hydrogen liên phân tử.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Hình (b) là liên kết hydrogen dạng liên phân tử và hình (a) là liên kết hydrogen dạng dimer.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Alcohol có tạo liên kết hydrogen liên phân tử.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de06_p2_q20",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm theo các bước sau:<br/>Bước 1: Cho 2 - 3 mL dung dịch AgNO<sub>3</sub> 2% vào ống nghiệm đã rửa sạch. Thêm từ từ dung dịch NH<sub>3</sub> 3% vào và lắc đều cho tới khi kết tủa tan vừa hết. Thêm khoảng 1 mL dung dịch acetaldehyde 10% vào ống nghiệm, lắc đều.<br/>Bước 2: Đặt ống nghiệm vào cốc nước nóng (khoảng 60℃) rồi để yên. Sau vài phút lấy ống nghiệm ra khỏi cốc.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 2, lớp bạc sinh ra sáng bám trên thành ống nghiệm.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có thể thay dung dịch acetaldehyde bằng dung dịch acetone thì kết quả thí nghiệm vẫn không thay đổi.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong thí nghiệm trên, acetaldehyde đóng vai trò là chất khử.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở bước 2, có thể đun sôi hỗn hợp chất phản ứng trong ống nghiệm để phản ứng xảy ra nhanh hơn.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Dung dịch acetone không phản ứng với thuốc thử Tollens.<br/>c. Đúng.<br/>d. Sai. Trong phản ứng tráng bạc, người ta không đun sôi hỗn hợp phản ứng để cho bạc bám đều lên thành ống nghiệm (hoặc vật cần tráng bạc).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de06_p2_q21",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho ba chất hữu cơ A, B, C có cùng công thức phân tử là C<sub>3</sub>H<sub>6</sub>O. Chất A có mạch carbon và có phản ứng tráng bạc; chất B không có phản ứng tráng bạc nhưng có phản ứng iodoform; chất C làm mất màu nước bromine. Khi hydrogen hóa C rồi oxi hóa sản phẩm thì được A. Xác định công thức cấu tạo và gọi tên A, B, C theo danh pháp thay thế.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất A có tên thay thế là propanal.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất B có tên thay thế là propanone.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất C có tên thay thế là propan – 2 – ol.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "A, B, C là ba chất đồng phân của nhau.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Chất C có tên thay thế là prop-2-en-1-ol.<br/>d. Đúng.<br/>- Chất A có mạch carbon và có phản ứng tráng bạc nên A là CH<sub>3</sub>CH<sub>2</sub>CHO (propanal).<br/>- Chất B không có phản ứng tráng bạc nhưng có phản ứng iodoform nên B là CH<sub>3</sub>COCH<sub>3</sub> (propanone).<br/>- Chất C làm mất màu nước bromine. Khi hydrogen hóa C rồi oxi hóa sản phẩm thì được A nên C là CH<sub>2</sub>=CH-CH<sub>2</sub><sup>-</sup>OH (prop-2-en-1-ol).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de06_p2_q22",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Chanh là một loài thực vật cho quả nhỏ, thuộc chi Cam chanh (Citrus), khi chín có màu xanh hoặc vàng, thịt quả có vị chua. Quả chanh được sử dụng làm thực phẩm trên khắp thế giới – chủ yếu dùng nước ép của nó, thế nhưng phần cơm (các múi của chanh) và vỏ cũng được sử dụng, chủ yếu là trong nấu ăn và nướng bánh. Nước ép chanh chứa khoảng 5% (khoảng 0,3 mol/lít) citric acid, điều này giúp chanh có vị chua, và độ pH của chanh từ 2-3. Citric acid có công thức cấu tạo là",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_image3.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_hdphoto2.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Citric acid tác dụng tối đa với NaHCO<sub>3</sub> theo tỉ lệ mol 1 : 3.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Citric acid thuộc loại hợp chất đa chức.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Công thức phân tử của citric acid là C<sub>6</sub>H<sub>6</sub>O<sub>7</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Citric acid tác dụng với NaOH theo tỉ lệ mol 1 : 4.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng. HOC<sub>3</sub>H<sub>4</sub>(COOH)<sub>3</sub> + 3NaHCO<sub>3</sub>  HO<sub>C</sub>3H<sub>4</sub>(COONa)<sub>3</sub> + 3CO<sub>2</sub> + 3H<sub>2</sub>O.<br/>b. Sai. Citric acid thuộc loại hợp chất tạp chức (chức carboxylic và chức alcohol).<br/>c. Sai. Citric acid là HOC<sub>3</sub>H<sub>4</sub>(COOH)<sub>3</sub> (C<sub>6</sub>H<sub>8</sub>O<sub>7</sub>).<br/>d. Sai. HOC<sub>3</sub>H<sub>4</sub>(COOH)<sub>3</sub> + 3NaOH  HOC<sub>3</sub>H<sub>4</sub>(COONa)<sub>3</sub> + 3H<sub>2</sub>O.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de06_p3_q23",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Chất X có công thức đơn giản nhất là C<sub>2</sub>H<sub>5</sub>O, hòa tan được Cu(OH)<sub>2</sub> tạo thành dung dịch màu xanh đậm. Có bao nhiêu đồng phân cấu tạo thỏa mãn tính chất của X?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án:  3.<br/>CTPT của X có dạng C<sub>2n</sub>H<sub>5n</sub>O<sub>n</sub><br/>X hòa tan Cu(OH)<sub>2</sub>  2 nhóm OH gắn vào 2 C cạnh nhau:<br/>(1) CH<sub>2</sub>OH – CHOH – CH<sub>2</sub> – CH<sub>3</sub>; (2) CH<sub>3</sub> – CHOH – CHOH – CH<sub>3</sub>; (3) CH<sub>2</sub>OH – C(OH)(CH<sub>3</sub>)<sub>2</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de06_p3_q24",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các thí nghiệm:<br/>(1) Đun nóng C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl trong dung dịch NaOH.<br/>(2) Đung nóng hỗn hợp CH<sub>3</sub>CH<sub>2</sub>Cl, KOH và C<sub>2</sub>H<sub>5</sub>OH.<br/>(3) Đun nóng CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Cl trong dung dịch NaOH.<br/>(4) Đun nóng C<sub>6</sub>H<sub>5</sub>Cl trong dung dịch NaOH (với C<sub>6</sub>H<sub>5</sub>-: phenyl).<br/>Liệt kê các thí nghiệm có tạo sản phẩm chính là alcohol theo dãy số thứ tự tăng dần (Ví dụ: 1234, 24,…).",
        "images": [],
        "correctAnswer": "13",
        "explanation": "Đáp án: 13.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de06_p3_q25",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Picric acid (2,4,6 - trinitrophenol) trước đây được sử dụng làm thuốc nổ. Để tổng hợp picric acid, người ta cho 47 g phenol phản ứng với hỗn hợp HNO<sub>3</sub> đặc/H<sub>2</sub>SO<sub>4</sub> đặc, dư. Khối lượng picric acid thu được bằng bao nhiêu gam? Biết hiệu suất phản ứng là 65% (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "74,4",
        "explanation": "Đáp án: 74,4.<br/>C<sub>6</sub>H<sub>5</sub>OH + 3HNO<sub>3</sub>  C<sub>6</sub>H<sub>2</sub>(NO<sub>2</sub>)<sub>3</sub>OH + 3H<sub>2</sub>O<br/>Số mol phenol:<br/>Số mol picric acid tạo thành:<br/>Khối lượng picric acid thu được:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de06_p3_q26",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Xăng E5 chứa 5% thể tích ethanol hiện đang được sử dụng phổ biến ở nước ta để thay thế một phần xăng thông thường. Một người đi xe máy mua 2 L xăng E5 để đổ vào bình chứa nhiên liệu. Giả thiết hiệu suất chuyển đổi năng lượng động cơ xăng là 40% và xe máy cần thực hiện công 200 kJ để di chuyển được 1 km. Biết nhiệt tỏa ra từ 1 L xăng E5 là 44922 kJ/kg. Lượng xăng đã mua giúp xe máy sẽ đi được tối đa bao nhiêu km? (Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "90",
        "explanation": "Đáp án: 90.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_3)_image15.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_5_(Đề_số_3)_hdphoto2.wdp"
        ],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de06_p3_q27",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Từ phổ khối lượng (MS) của acetic acid ở hình dưới đây:<br/>Phân tử khối của acetic acid bằng bao nhiêu?",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_image4.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_hdphoto3.wdp"
        ],
        "correctAnswer": "60",
        "explanation": "Đáp án: 60.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de06_p3_q28",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất: acetic aldehyde, acetylene, ethanol, propanal, acetone. Có bao nhiêu chất có khả năng phản ứng với dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub>?",
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
    "id": "hoa11_ck2_de07",
    "code": "H11-CK2-07",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de07_p1_q1",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất: C<sub>2</sub>H<sub>5</sub>OH, C<sub>2</sub>H<sub>5</sub>Br, C<sub>6</sub>H<sub>5</sub>OH, C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH, C<sub>6</sub>H<sub>5</sub>Cl. số chát tác dụng được với dung dịch NaOH loãng khi đun nóng là",
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
        "id": "hoa11_ck2_de07_p1_q2",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong số các phát biểu sau về phenol (C<sub>6</sub>H<sub>5</sub>OH):<br/>(1) Phenol tan ít trong nước nhưng tan nhiều trong dung dịch HCl.<br/>(2) Phenol có tính acid, dung dịch phenol không làm đổi màu quỳ tím.<br/>(3) Phenol dùng để sản xuất keo dán, chất diệt nấm mốc.<br/>(4) Phenol tham gia phản ứng thế bromine và thế nitro dễ hơn benzene.<br/>Các phát biểu đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1), (2), (4)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(2), (3), (4)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1), (2), (3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1), (3), (4)",
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
        "id": "hoa11_ck2_de07_p1_q3",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trước đây, Freon được dùng làm chất sinh hàn trong tủ lạnh và máy điều hòa nhiệt độ. Từ năm 1996, Freon đã bị cấm sử dụng, nguyên nhân chính là do khi thải vào khí quyển",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phá hủy tầng ozone",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "gây hiện tượng mưa acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "gây hiện tượng hiệu ứng nhà kính",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "gây ra hiện tượng El Nino",
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
        "id": "hoa11_ck2_de07_p1_q4",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận xét nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử dẫn xuất halogen, liên kết C-X phân cực về phía nguyên tử carbon",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đun nóng 2-chloropropane với KOH thu được sản phẩm chính là propene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đun nóng monohalogen no, mạch hở với dung dịch gồm KOH và C<sub>2</sub>H<sub>5</sub>OH thu được alkene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2,3-dichloroethane và 2,3-dibromobutane đều là dẫn xuất dihalogen",
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
        "id": "hoa11_ck2_de07_p1_q5",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi tách nước từ một chất X có công thức phân tử C<sub>4</sub>H<sub>10</sub>O tạo thành ba alkene là đồng phân của nhau (tính cả đồng phân hình học). Công thức cấu tạo của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>OH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>OCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(CH<sub>3</sub>)<sub>3</sub>COH",
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
        "id": "hoa11_ck2_de07_p1_q6",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương pháp nào sau đây dùng để sản xuất ethanol sinh học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho hỗn hợp khí ethylene và hơi nước đi qua tháp chứa H<sub>3</sub>PO<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cộng nước vào ethylene với xúc tác là H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lên men tinh bột",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thủy phân dẫn xuất C<sub>2</sub>H<sub>5</sub>Br trong môi trường kiềm",
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
        "id": "hoa11_ck2_de07_p1_q7",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một đơn vị cồn tương đương 10 mL ethanol nguyên chất. Theo khuyến cáo của ngành y tế, để đảm bảo sức khỏe mỗi người trưởng thành không nên uống quá 2 đơn vị cồn mỗi ngày. Vậy mỗi người trưởng thành không nên uống quá bao nhiêu mL rượu 40<sup>0</sup> một ngày? Biết",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "100",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "40",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "80",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "50",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án: D<br/>Hai đơn vị cồn tương đương 20 mL ethanol nguyên chất.<br/>Rượu 40° là 100 mL rượu có 40 mL ethanol nguyên chất.<br/>Vậy mỗi người trưởng thành không nên uống quá số mL rượu 40° một ngày là: 20 x 100 : 40 = 50 mL",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa11_ck2_de07_p1_q8",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Trong phân tử alcohol có nhóm -OH.<br/>(b) Ethyl alcohol dễ tan trong nước vì phân tử alcohol phân cực và alcohol có thể tạo liên kết hydrogen với phân tử nước.<br/>(c) Hợp chất C<sub>6</sub>H<sub>5</sub>OH là alcohol thơm, đơn chức.<br/>(d) Nhiệt độ sôi của CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>OH cao hơn của CH<sub>3</sub>-O-CH<sub>2</sub>CH<sub>3</sub>.<br/>(e) Có 5 alcohol đồng phân cấu tạo ứng với công thức phân tử C<sub>4</sub>H<sub>10</sub>O.<br/>Số phát biểu đúng là",
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
            "text": "5",
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
        "displayNumber": 8
      },
      {
        "id": "hoa11_ck2_de07_p1_q9",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ketone là hợp chất hữu cơ có",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhóm -CHO liên kết trực tiếp với nguyên tử carbon hoặc nguyên tử hydrogen",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhóm -CHO chỉ liên kết trực tiếp với nguyên tử carbon",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhóm -CO liên kết với hai gốc hydrocarbon",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhóm -CO chỉ liên kết với một gốc hydrocarbon",
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
        "id": "hoa11_ck2_de07_p1_q10",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở nhiệt độ thường, aldehyde nào sau đây ở trạng thái khí?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>6</sub>H<sub>13</sub>CHO",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>7</sub>H<sub>15</sub>CHO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCHO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>8</sub>H<sub>17</sub>CHO",
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
        "id": "hoa11_ck2_de07_p1_q11",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức tổng quát của aldehyde no, mạch hở, đơn chức là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>n</sub>H<sub>2n</sub>O (n ≥ 1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>n</sub>H<sub>2n-2</sub>O (n ≥ 2)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>n</sub>H<sub>2n-4</sub>O (n ≥ 2)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>n</sub>H<sub>2n+2</sub>O (n > 0)",
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
        "id": "hoa11_ck2_de07_p1_q12",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, các aldehyde nào sau đây tan tốt trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCHO, C<sub>6</sub>H<sub>13</sub>CHO",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>CHO, C<sub>7</sub>H<sub>15</sub>CHO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCHO, CH<sub>3</sub>CHO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>13</sub>CHO, C<sub>7</sub>H<sub>15</sub>CHO",
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
        "id": "hoa11_ck2_de07_p1_q13",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khử hợp chất hữu cơ X bằng LiAlH<sub>4</sub> thu được (CH<sub>3</sub>)<sub>2</sub>CH-CH<sub>2</sub>-CH<sub>2</sub>OH. Chất X có tên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3-methylbutanal",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2-methylbutan-3-al",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2-methylbutanal",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3-methylbutan-3-al",
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
        "id": "hoa11_ck2_de07_p1_q14",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có bao nhiêu aldehyde tương ứng với công thức phân tử C<sub>4</sub>H<sub>8</sub>O?",
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
        "displayNumber": 14
      },
      {
        "id": "hoa11_ck2_de07_p1_q15",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho ethanal phản ứng với Cu(OH)<sub>2</sub> trong môi trường kiềm ở nhiệt độ thích hợp, hiện tượng nào sau đây sẽ xảy ra?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cu(OH)<sub>2</sub> bị tan ra, tạo dung dịch màu xanh",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có mùi chua của giấm, do phản ứng sinh ra acetic acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tạo kết tủa đỏ gạch do phản ứng sinh ra Cu<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sinh ra CuO màu đen",
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
        "id": "hoa11_ck2_de07_p1_q16",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Benzoic acid được sử dụng như một chất bảo quản thực phẩm (kí hiệu là E-210) cho xúc xích, nước sốt cà chua, mù tạt, bơ thực vật … Nó ức chế sự phát triển của nấm mốc, nấm men và một số vi khuẩn. Công thức phân tử benzoic acid là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>COOH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HCOOH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>6</sub>H<sub>5</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(COOH)<sub>2</sub>",
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
        "id": "hoa11_ck2_de07_p1_q17",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Aldehyde bị khử tạo thành alcohol bậc I",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ketone bị khử tạo thành alcohol bậc II",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Aldehyde phản ứng với thuốc thử Tollens tạo lớp sáng bạc",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ketone phản ứng với Cu(OH)<sub>2</sub> đun nóng tạo kết tủa màu đỏ gạch",
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
        "id": "hoa11_ck2_de07_p1_q18",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có nhiệt độ sôi cao nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Formic acid",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ethyl alcohol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Acetic acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ethane",
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
        "id": "hoa11_ck2_de07_p2_q19",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Chanh là một loài thực vật cho quả nhỏ, thuộc chi Cam chanh (Citrus), khi chín có màu xanh hoặc vàng, thịt quả có vị chua. Quả chanh được sử dụng làm thực phẩm trên khắp thế giới – chủ yếu dùng nước ép của nó, thế nhưng phần cơm (các múi của chanh) và vỏ cũng được sử dụng, chủ yếu là trong nấu ăn và nướng bánh. Nước ép chanh chứa khoảng 5% (khoảng 0,3 mol/lít) citric acid, điều này giúp chanh có vị chua, và độ pH của chanh từ 2-3. Citric acid có công thức cấu tạo là",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_image3.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_hdphoto2.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Citric acid tác dụng tối đa với NaHCO<sub>3</sub> theo tỉ lệ mol 1 : 3.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Citric acid thuộc loại hợp chất đa chức.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Công thức phân tử của citric acid là C<sub>6</sub>H<sub>6</sub>O<sub>7</sub>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Citric acid tác dụng với NaOH theo tỉ lệ mol 1 : 4.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng. HOC<sub>3</sub>H<sub>4</sub>(COOH)<sub>3</sub> + 3NaHCO<sub>3</sub>  HO<sub>C</sub>3H<sub>4</sub>(COONa)<sub>3</sub> + 3CO<sub>2</sub> + 3H<sub>2</sub>O.<br/>b. Sai. Citric acid thuộc loại hợp chất tạp chức (chức carboxylic và chức alcohol).<br/>c. Sai. Citric acid là HOC<sub>3</sub>H<sub>4</sub>(COOH)<sub>3</sub> (C<sub>6</sub>H<sub>8</sub>O<sub>7</sub>).<br/>d. Sai. HOC<sub>3</sub>H<sub>4</sub>(COOH)<sub>3</sub> + 3NaOH  HOC<sub>3</sub>H<sub>4</sub>(COONa)<sub>3</sub> + 3H<sub>2</sub>O.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de07_p2_q20",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu nào sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Aldehyde phản ứng được với nước bromine",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ketone không phản ứng được với Cu(OH)<sub>2</sub>/OH<sup>-</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Aldehyde tác dụng với dung dịch AgNO<sub>3</sub>/NH<sub>3</sub> tạo ra bạc",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong các hợp chất carbonyl, chỉ aldehyde bị khử bởi NaBH<sub>4</sub>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. ldehyde và ketone đều bị khử bởi NaBH<sub>4</sub>.",
        "explanationImages": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_2)_image1.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_2)_hdphoto1.wdp"
        ],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de07_p2_q21",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Các carboxylic acid có khả năng tạo liên kết hydrogen với nước nên có khả năng tan tốt trong nước. Các carboxylic acid có phân tử khối thấp như formic acid, acetic acid, propionic acid, butyric acid tan vô hạn trong nước.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các carboxylic acid có phân tử khối thấp tan tốt trong nước nguyên nhân chính là do kích thước phân tử lớn hơn kích thước phân tử của nước.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi số nguyên tử carbon trong phân tử tăng thì độ tan giảm dần.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi carboxylic tan vào trong nước thì có liên kết hydrogen tạo từ O (của nhóm C=O) với H của nước.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phần R (R là gốc hydrocarbon) trong R-COOH là phần kị nước, phần này càng lớn thì độ tan trong nước càng lớn.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Do tạo được liên kết hydrogen.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Phần R càng lớn thì độ tan trong nước càng giảm.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de07_p2_q22",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "X là một hợp chất hữu cơ dùng để làm sạch dụng cụ trong phòng thí nghiệm, tẩy rửa sơn móng tay và là chất đầu của quá trình tổng hợp hữu cơ. Kết quả phân tích nguyên tố của X cho kết quả, trong X có: 62,07% C, 27,59% O về khối lượng, còn lại là hydrogen. Phân tử khối của X được xác định thông qua phổ khối lượng với peak ion phân tử có giá trị m/z lớn nhất.",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_2)_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử khối của X là 58.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức phân tử của X là C<sub>3</sub>H<sub>8</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X có phản ứng tạo iodoform.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong công nghiệp, X được điều chế từ phản ứng oxi hóa ethylene.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Gọi công thức tổng quát của X là C<sub>x</sub>H<sub>y</sub>O<sub>z</sub><br/>Dựa vào phổ khối lượng nguyên tử, có M<sub>X</sub> = 58<br/>%m<sub>H</sub> = 100 – 62,07 – 27,59 =  10,34 %.<br/>Ta có:  CTĐGN của X là C<sub>3</sub>H<sub>6</sub>O<br/>CTPT của X có dạng: (C<sub>3</sub>H<sub>6</sub>O)<sub>n</sub>  M<sub>x</sub> = 58n = 58  n = 1  CTPT của X là C<sub>3</sub>H<sub>6</sub>O<br/>CTCT của X là CH<sub>3</sub>COCH<sub>3</sub>.<br/>a. Đúng.<br/>b. Sai. CTPT là C<sub>3</sub>H<sub>6</sub>O.<br/>c. Đúng. CH<sub>3</sub>COCH<sub>3</sub> + 3I<sub>2</sub> + 4NaOH → CH<sub>3</sub>COONa + CHI<sub>3</sub>↓ + 3NaI + 3H<sub>2</sub>O<br/>d. Sai. X được sản xuất từ cumene.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de07_p3_q23",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Từ phổ khối lượng (MS) của acetic acid ở hình dưới đây:<br/>Phân tử khối của acetic acid bằng bao nhiêu?",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_image4.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_hdphoto3.wdp"
        ],
        "correctAnswer": "60",
        "explanation": "Đáp án: 60.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de07_p3_q24",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất: acetic aldehyde, acetylene, ethanol, propanal, acetone. Có bao nhiêu chất có khả năng phản ứng với dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub>?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de07_p3_q25",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Số đồng phân có cùng công thức phân tử C<sub>5</sub>H<sub>10</sub>Ocó khả năng tham gia phản ứng iodoform là bao nhiêu?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Bao gồm: CH<sub>3</sub> – CO – CH<sub>2</sub> – CH<sub>2</sub> – CH<sub>3</sub>, CH<sub>3</sub> – CO – CH(CH<sub>3</sub>)<sub>2</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de07_p3_q26",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Giấm được sử dụng khá phổ biến để chế biến thức ăn. Bạn Mai muốn xác định nồng độ acetic acid có trong giấm ăn bằng cách sử dụng dung dịch sodium hydroxyde 0,1M để chuẩn độ. Bạn lấy mẫu giấm ăn đó để làm thí nghiệm và kết quả chuẩn độ 3 lần như bảng sau:<br/><br/>Hãy giúp bạn Mai xác định nồng độ mol của acetic acid trong giấm.",
        "images": [],
        "correctAnswer": "0,5",
        "explanation": "Đáp án: 0,5.<br/>Thể tích trung bình của dung dịch NaOH cần dùng: .<br/>Nồng độ acetic acid có trong giấm ăn là:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de07_p3_q27",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng sau ở điều kiện thích hợp:<br/>(1) Lên men giấm ethyl alcohol.<br/>(2) Oxi hóa không hoàn toàn acetaldehyde.<br/>(3) Oxi hóa không hoàn toàn butane.<br/>(4) Cho methanol tác dụng với carbon monoxide.<br/>Có bao nhiêu phản ứng có sự tạo thành sản phẩm acetic acid?<br/>Hãy gán số thứ tự các phản ứng trên có thể tạo thành acetic acid theo số thứ tự tăng dần (ví dụ: 12, 234, …)<br/>Đáp số 1234.<br/>(1) C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub>  CH<sub>3</sub>COOH + H<sub>2</sub>O<br/>(2) CH<sub>3</sub>CHO + Br<sub>2</sub> + H<sub>2</sub>O → CH<sub>3</sub>COOH + 2HBr<br/>(3) CH<sub>3</sub> – CH<sub>2</sub> – CH<sub>2</sub> – CH<sub>3</sub> + 5/2O<sub>2</sub>  2CH<sub>3</sub>COOH + H<sub>2</sub>O<br/>(4) CH<sub>3</sub>OH + CO  CH<sub>3</sub>COOH",
        "images": [],
        "correctAnswer": "1234",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de07_p3_q28",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Bisphenol A là hợp chất được dùng nhiều trong công nghiệp để điều chế nhựa epoxy. Bisphenol A được điều chế từ phenol và acetone theo sơ đồ:<br/>Từ 145 kg acetone và 282 kg phenol hãy tính lượng bisphenol A thu được (theo kg), biết hiệu suất của phản ứng tổng hợp bisphenol A đạt 80% (Làm tròn kết quả đến hàng đơn vị).",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_image5.png"
        ],
        "correctAnswer": "274",
        "explanation": "Đáp án: 274.<br/>Số mol của CH<sub>3</sub>COCH<sub>3</sub> là 2,5 kmol và C<sub>6</sub>H<sub>5</sub>OH là 3 kmol  tính theo mol phenol<br/>Công thức Bisphenol A là C<sub>15</sub>H<sub>16</sub>O<sub>2</sub><br/>m<sub>bisphenol</sub><sub>A</sub> =  . 228..80% = 273,6 kg.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck2_de08",
    "code": "H11-CK2-08",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de08_p1_q1",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức tổng quát của aldehyde no, mạch hở, đơn chức là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>n</sub>H<sub>2n</sub>O (n ≥ 1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>n</sub>H<sub>2n-2</sub>O (n ≥ 2)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>n</sub>H<sub>2n-4</sub>O (n ≥ 2)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>n</sub>H<sub>2n+2</sub>O (n > 0)",
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
        "id": "hoa11_ck2_de08_p1_q2",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, các aldehyde nào sau đây tan tốt trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCHO, C<sub>6</sub>H<sub>13</sub>CHO",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>CHO, C<sub>7</sub>H<sub>15</sub>CHO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCHO, CH<sub>3</sub>CHO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>6</sub>H<sub>13</sub>CHO, C<sub>7</sub>H<sub>15</sub>CHO",
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
        "id": "hoa11_ck2_de08_p1_q3",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khử hợp chất hữu cơ X bằng LiAlH<sub>4</sub> thu được (CH<sub>3</sub>)<sub>2</sub>CH-CH<sub>2</sub>-CH<sub>2</sub>OH. Chất X có tên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "3-methylbutanal",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2-methylbutan-3-al",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2-methylbutanal",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3-methylbutan-3-al",
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
        "id": "hoa11_ck2_de08_p1_q4",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có bao nhiêu aldehyde tương ứng với công thức phân tử C<sub>4</sub>H<sub>8</sub>O?",
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
        "displayNumber": 4
      },
      {
        "id": "hoa11_ck2_de08_p1_q5",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho ethanal phản ứng với Cu(OH)<sub>2</sub> trong môi trường kiềm ở nhiệt độ thích hợp, hiện tượng nào sau đây sẽ xảy ra?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cu(OH)<sub>2</sub> bị tan ra, tạo dung dịch màu xanh",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có mùi chua của giấm, do phản ứng sinh ra acetic acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tạo kết tủa đỏ gạch do phản ứng sinh ra Cu<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sinh ra CuO màu đen",
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
        "id": "hoa11_ck2_de08_p1_q6",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Benzoic acid được sử dụng như một chất bảo quản thực phẩm (kí hiệu là E-210) cho xúc xích, nước sốt cà chua, mù tạt, bơ thực vật … Nó ức chế sự phát triển của nấm mốc, nấm men và một số vi khuẩn. Công thức phân tử benzoic acid là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>COOH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HCOOH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>6</sub>H<sub>5</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(COOH)<sub>2</sub>",
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
        "id": "hoa11_ck2_de08_p1_q7",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Aldehyde bị khử tạo thành alcohol bậc I",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ketone bị khử tạo thành alcohol bậc II",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Aldehyde phản ứng với thuốc thử Tollens tạo lớp sáng bạc",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ketone phản ứng với Cu(OH)<sub>2</sub> đun nóng tạo kết tủa màu đỏ gạch",
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
        "id": "hoa11_ck2_de08_p1_q8",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có nhiệt độ sôi cao nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Formic acid",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ethyl alcohol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Acetic acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ethane",
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
        "id": "hoa11_ck2_de08_p1_q9",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Aldehyde và ketone có nhiều ứng dụng trong cuộc sống.<br/>(a) Formaldehyde dùng để sản xuất vật liệu nhựa, keo dán, sơn.<br/>(b) Formaldehyde dùng để sản xuất chất nổ và bảo quản mẫu sinh vật.<br/>(c) Acetaldehyde dùng để sản xuất dung môi, bisphenol–A và chloroform.<br/>(d) Acetone dùng để sản xuất acetic acid, acetic anhydride và một số hóa chất khác.<br/>Số phát biểu đúng là",
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
        "displayNumber": 9
      },
      {
        "id": "hoa11_ck2_de08_p1_q10",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một thí nghiệm được mô tả như hình sau đây:<br/>Chất lỏng thu được ở ống nghiệm B có mùi táo. Công thức cấu tạo của chất lỏng đó là",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_image1.jpeg"
        ],
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
            "text": "C<sub>2</sub>H<sub>5</sub>COOCH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOC<sub>3</sub>H<sub>7</sub>",
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
        "id": "hoa11_ck2_de08_p1_q11",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 1,97 gam dung dịch formalin tác dụng với lượng dư dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub> thu được 10,8 gam Ag. Nồng độ % của formaldehyde trong fomalin là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "49,5%",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "40,0%",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "50,0%",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "38,1%",
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
        "id": "hoa11_ck2_de08_p1_q12",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch acetic acid phản ứng được với tất cả các chất trong dãy nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cu, NaOH, NaCl",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Zn, CuO, NaCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Zn, CuO, HCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Zn, NaOH, CaCO<sub>3</sub>",
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
        "id": "hoa11_ck2_de08_p1_q13",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để loại bỏ lớp cặn màu trắng trong ấm đun nước, người ta có thể dùng dung dịch nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giấm ăn",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Muối ăn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cồn 70<sup>o</sup>",
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
        "id": "hoa11_ck2_de08_p1_q14",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sữa chua được lên men từ sữa bột, sữa bò, sữa dê,... Sữa chua tốt cho hệ tiêu hoá. Vị chua trong sữa chua tạo bởi acid nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Formic acid",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Acetic acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lactic acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Benzoic acid",
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
        "id": "hoa11_ck2_de08_p1_q15",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thứ tự các thuốc thử để phân biệt 3 dung dịch riêng biệt: acetic acid, acrylic acid, formic acid là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "quỳ tím, dung dịch Br<sub>2</sub> trong CCl<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dung dịch Br<sub>2</sub>, dung dịch Na<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dung dịch Na<sub>2</sub>CO<sub>3</sub>, quỳ tím",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub> dư, dung dịch Br<sub>2</sub>",
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
        "id": "hoa11_ck2_de08_p1_q16",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để trung hòa 6,72 gam một carboxylic acid Y (no, đơn chức), cần dùng 200 gam dung dịch NaOH 2,24%. Công thức của Y là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>5</sub>COOH",
            "isCorrect": true
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
            "text": "C<sub>3</sub>H<sub>7</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOH",
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
        "id": "hoa11_ck2_de08_p1_q17",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức tổng quát của carboxylic acid no, đơn chức, mạch hở là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub> (n ≥ 1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>n</sub>H<sub>2n+2</sub>O<sub>2</sub> (n ≥ 1)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>n</sub>H<sub>2n-1</sub>COOH (n ≥ 1)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub> (n ≥ 2)",
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
        "id": "hoa11_ck2_de08_p1_q18",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số đồng phân carbonyl có công thức phân tử C<sub>4</sub>H<sub>8</sub>O là",
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
            "text": "5",
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
        "id": "hoa11_ck2_de08_p2_q19",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "X là một hợp chất hữu cơ dùng để làm sạch dụng cụ trong phòng thí nghiệm, tẩy rửa sơn móng tay và là chất đầu của quá trình tổng hợp hữu cơ. Kết quả phân tích nguyên tố của X cho kết quả, trong X có: 62,07% C, 27,59% O về khối lượng, còn lại là hydrogen. Phân tử khối của X được xác định thông qua phổ khối lượng với peak ion phân tử có giá trị m/z lớn nhất.",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_2)_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử khối của X là 58.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức phân tử của X là C<sub>3</sub>H<sub>8</sub>O.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X có phản ứng tạo iodoform.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong công nghiệp, X được điều chế từ phản ứng oxi hóa ethylene.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Gọi công thức tổng quát của X là C<sub>x</sub>H<sub>y</sub>O<sub>z</sub><br/>Dựa vào phổ khối lượng nguyên tử, có M<sub>X</sub> = 58<br/>%m<sub>H</sub> = 100 – 62,07 – 27,59 =  10,34 %.<br/>Ta có:  CTĐGN của X là C<sub>3</sub>H<sub>6</sub>O<br/>CTPT của X có dạng: (C<sub>3</sub>H<sub>6</sub>O)<sub>n</sub>  M<sub>x</sub> = 58n = 58  n = 1  CTPT của X là C<sub>3</sub>H<sub>6</sub>O<br/>CTCT của X là CH<sub>3</sub>COCH<sub>3</sub>.<br/>a. Đúng.<br/>b. Sai. CTPT là C<sub>3</sub>H<sub>6</sub>O.<br/>c. Đúng. CH<sub>3</sub>COCH<sub>3</sub> + 3I<sub>2</sub> + 4NaOH → CH<sub>3</sub>COONa + CHI<sub>3</sub>↓ + 3NaI + 3H<sub>2</sub>O<br/>d. Sai. X được sản xuất từ cumene.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de08_p2_q20",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho X, Y, Z, T là các chất khác nhau trong số 4 chất: CH<sub>3</sub>COOH, C<sub>2</sub>H<sub>5</sub>OH, CH<sub>3</sub>CHO, HCOOH và các tính chất được ghi trong bảng sau:<br/>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Từ chất X có thể điều chế trực tiếp được chất T.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong dung dịch nước, chất Z không tạo được liên kết hydrogen với nước.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chỉ dùng quỳ tím và thuốc thử Tollens phân biệt được bốn dung dịch của bốn chất trên.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lực acid của Y lớn hơn lực acid của T hay K<sub>a</sub>(Y) lớn hơn K<sub>a</sub>(T).",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng: C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub> (lên men giấm)  CH<sub>3</sub>COOH + H<sub>2</sub>O.<br/>b. Sai. CH<sub>3</sub>CHO chứa nguyên tử O có độ âm điện lớn nên có tạo được liên kết hydrogen với nước.<br/>c. Đúng.<br/>+ Quỳ không đổi màu, không tráng bạc: C<sub>2</sub>H<sub>5</sub>OH<br/>+ Quỳ không đổi màu, có tráng bạc: CH<sub>3</sub>CHO<br/>+ Quỳ đổi màu đỏ, không tráng bạc: CH<sub>3</sub>COOH<br/>+ Quỳ đổi màu đỏ, có tráng bạc: HCOOH<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de08_p2_q21",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho hợp chất hữu cơ X có công thức cấu tạo là CH<sub>3</sub>COOH.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X là carboxylic acid no, đơn chức, mạch hở.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tên thông thường của X là ethanoic acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Người ta thường dung dung dịch X để loại bỏ cặn màu trắng (thành phần chính là CaCO<sub>3</sub>) bám ở đáy ấm đun nước.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch chất X làm quỳ tím chuyển màu đỏ.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Tên thông thường là acetic acid.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de08_p2_q22",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Ở điều kiện thường, các carboxylic acid đều ở thể lỏng hoặc rắn. Nhiệt độ sôi của các carboxylic acid no, đơn chức, mạch hở đều tăng dần theo chiều tăng dần của phân tử khối. Nhiệt độ sôi của các carboxylic acid cao hơn của các alcohol có cùng số nguyên tử carbon. Nguyên nhân là do liên kết O-H trong nhóm carboxyl phân cực hơn liên kết O-H trong alcohol, dẫn đến liên kết hydrogen giữa các phân tử carboxylic acid bền vững hơn so với liên kết hydrogen hình thành giữa các phân tử alcohol. Liên kết hydrogen giữa các phân tử carboxylic tồn tại ở dạng polymer hoặc dimer vòng.",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_3)_image4.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_3)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Formic acid là chất lỏng ở điều kiện thường.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Acetic acid có nhiệt độ sôi thấp hơn ethyl alcohol.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Do có kích thước phân tử và khối lượng phân tử nhỏ hơn nên acetic acid có nhiệt độ sôi thấp hơn propionic acid.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhóm C=O hút electron làm cho liên kết O-H trong nhóm carboxyl kém phân cực hơn liên kết O-H trong alcohol.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. CH<sub>3</sub>COOH có nhiệt độ sôi cao hơn C<sub>2</sub>H<sub>5</sub>OH.<br/>c. Đúng.<br/>d. Sai. Liên kết OH của carboxylic acid phân cực hơn liên kết OH của alcohol.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de08_p3_q23",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng sau ở điều kiện thích hợp:<br/>(1) Lên men giấm ethyl alcohol.<br/>(2) Oxi hóa không hoàn toàn acetaldehyde.<br/>(3) Oxi hóa không hoàn toàn butane.<br/>(4) Cho methanol tác dụng với carbon monoxide.<br/>Có bao nhiêu phản ứng có sự tạo thành sản phẩm acetic acid?<br/>Hãy gán số thứ tự các phản ứng trên có thể tạo thành acetic acid theo số thứ tự tăng dần (ví dụ: 12, 234, …)<br/>Đáp số 1234.<br/>(1) C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub>  CH<sub>3</sub>COOH + H<sub>2</sub>O<br/>(2) CH<sub>3</sub>CHO + Br<sub>2</sub> + H<sub>2</sub>O → CH<sub>3</sub>COOH + 2HBr<br/>(3) CH<sub>3</sub> – CH<sub>2</sub> – CH<sub>2</sub> – CH<sub>3</sub> + 5/2O<sub>2</sub>  2CH<sub>3</sub>COOH + H<sub>2</sub>O<br/>(4) CH<sub>3</sub>OH + CO  CH<sub>3</sub>COOH",
        "images": [],
        "correctAnswer": "1234",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de08_p3_q24",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Bisphenol A là hợp chất được dùng nhiều trong công nghiệp để điều chế nhựa epoxy. Bisphenol A được điều chế từ phenol và acetone theo sơ đồ:<br/>Từ 145 kg acetone và 282 kg phenol hãy tính lượng bisphenol A thu được (theo kg), biết hiệu suất của phản ứng tổng hợp bisphenol A đạt 80% (Làm tròn kết quả đến hàng đơn vị).",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_1)_image5.png"
        ],
        "correctAnswer": "274",
        "explanation": "Đáp án: 274.<br/>Số mol của CH<sub>3</sub>COCH<sub>3</sub> là 2,5 kmol và C<sub>6</sub>H<sub>5</sub>OH là 3 kmol  tính theo mol phenol<br/>Công thức Bisphenol A là C<sub>15</sub>H<sub>16</sub>O<sub>2</sub><br/>m<sub>bisphenol</sub><sub>A</sub> =  . 228..80% = 273,6 kg.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de08_p3_q25",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Quế có vị cay, mùi thơm nồng, được sử dụng phổ biến làm gia vị, vị thuốc trong Đông y. Hợp chất hữu cơ cinnamaldehyde tạo mùi đặc trưng của quế. Trong phân tử cinnamaldehyde chứa vòng benzene có một nhóm thế. Cinnamaldehyde bị oxi hóa bởi thuốc thử Tollens và có đồng phân hình học dạng trans. Công thức cấu tạo của cinnamaldehyde là<br/>Phân tử khối của cinnamaldehyde là bao nhiêu?",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_2)_image3.jpeg"
        ],
        "correctAnswer": "132",
        "explanation": "Đáp án: 132.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de08_p3_q26",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng sau:<br/>(1) CH<sub>3</sub>CHO + H<sub>2</sub> CH<sub>3</sub>CH<sub>2</sub>OH.<br/>(2) 2CH<sub>3</sub>CHO + 5O<sub>2</sub>  4CO<sub>2</sub> + 4H<sub>2</sub>O.<br/>(3) CH<sub>3</sub>CHO + Br<sub>2</sub> + H<sub>2</sub>O  CH<sub>3</sub>COOH + 2HBr.<br/>(4) CH<sub>3</sub>CHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]OH  CH<sub>3</sub>COONH<sub>4</sub> + 3NH<sub>3</sub> + 2Ag + H<sub>2</sub>O.<br/>Liệt kê các phản ứng mà acetaldehyde thể hiện tính khử thành dãy số theo thứ tự tăng dần (Ví dụ: 1234, 24,…).",
        "images": [],
        "correctAnswer": "234",
        "explanation": "Đáp án: 234.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de08_p3_q27",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Số công thức cấu tạo chứa nhóm carboxylic acid có cùng công thức C<sub>5</sub>H<sub>10</sub>O<sub>2</sub>là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>CH<sub>3</sub> – CH<sub>2</sub> – CH<sub>2</sub> – CH<sub>2</sub> – COOH, (CH<sub>3</sub>)<sub>2</sub>CH – CH<sub>2</sub> – COOH<br/>CH<sub>3</sub> – CH<sub>2</sub> – CH(CH<sub>3</sub>) – COOH, (CH<sub>3</sub>)<sub>3</sub>C – COOH",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de08_p3_q28",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: H<sub>2</sub>O (1), C<sub>2</sub>H<sub>5</sub>OH (2), C<sub>6</sub>H<sub>5</sub>OH (3), CH<sub>3</sub>COOH (4). Hãy sắp xếp các chất trên theo độ linh động của nguyên tử hydrogen trong nhóm – OH tăng dần bằng cách gán số thứ tự theo bộ bốn chữ số (ví dụ: 1234, 2341, …)",
        "images": [],
        "correctAnswer": "2134",
        "explanation": "Đáp án: 2134.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck2_de09",
    "code": "H11-CK2-09",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de09_p1_q1",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 1,97 gam dung dịch formalin tác dụng với lượng dư dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub> thu được 10,8 gam Ag. Nồng độ % của formaldehyde trong fomalin là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "49,5%",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "40,0%",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "50,0%",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "38,1%",
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
        "id": "hoa11_ck2_de09_p1_q2",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch acetic acid phản ứng được với tất cả các chất trong dãy nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cu, NaOH, NaCl",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Zn, CuO, NaCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Zn, CuO, HCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Zn, NaOH, CaCO<sub>3</sub>",
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
        "id": "hoa11_ck2_de09_p1_q3",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để loại bỏ lớp cặn màu trắng trong ấm đun nước, người ta có thể dùng dung dịch nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giấm ăn",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Muối ăn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cồn 70<sup>o</sup>",
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
        "id": "hoa11_ck2_de09_p1_q4",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sữa chua được lên men từ sữa bột, sữa bò, sữa dê,... Sữa chua tốt cho hệ tiêu hoá. Vị chua trong sữa chua tạo bởi acid nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Formic acid",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Acetic acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lactic acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Benzoic acid",
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
        "id": "hoa11_ck2_de09_p1_q5",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thứ tự các thuốc thử để phân biệt 3 dung dịch riêng biệt: acetic acid, acrylic acid, formic acid là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "quỳ tím, dung dịch Br<sub>2</sub> trong CCl<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dung dịch Br<sub>2</sub>, dung dịch Na<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dung dịch Na<sub>2</sub>CO<sub>3</sub>, quỳ tím",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub> dư, dung dịch Br<sub>2</sub>",
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
        "id": "hoa11_ck2_de09_p1_q6",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để trung hòa 6,72 gam một carboxylic acid Y (no, đơn chức), cần dùng 200 gam dung dịch NaOH 2,24%. Công thức của Y là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>5</sub>COOH",
            "isCorrect": true
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
            "text": "C<sub>3</sub>H<sub>7</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOH",
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
        "id": "hoa11_ck2_de09_p1_q7",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức tổng quát của carboxylic acid no, đơn chức, mạch hở là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub> (n ≥ 1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>n</sub>H<sub>2n+2</sub>O<sub>2</sub> (n ≥ 1)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>n</sub>H<sub>2n-1</sub>COOH (n ≥ 1)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub> (n ≥ 2)",
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
        "id": "hoa11_ck2_de09_p1_q8",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số đồng phân carbonyl có công thức phân tử C<sub>4</sub>H<sub>8</sub>O là",
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
            "text": "5",
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
        "id": "hoa11_ck2_de09_p1_q9",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên thông thường của CH<sub>3</sub>-CH<sub>2</sub>-CHO là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "acetic aldehyde",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "acrylic aldehyde",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "benzoic aldehyde",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "propionic aldehyde",
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
        "id": "hoa11_ck2_de09_p1_q10",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Formalin có tác dụng diệt khuẩn nên được dùng để bảo quản mẫu sinh vật, tẩy uế, khử trùng, … Formalin là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dung dịch rất loãng của aldehyde formic",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dung dịch aldehyde fomic 37 - 40%",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "aldehyde fomic nguyên chất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tên gọi khác của aldehyde formic",
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
        "id": "hoa11_ck2_de09_p1_q11",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết O-H trong carboxylic acid phân cực hơn so với alcohol, phenol do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhóm -C=O là nhóm đẩy electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhóm -C=O là nhóm hút electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhóm -OH là nhóm hút electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhóm -OH là nhóm đẩy electron",
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
        "id": "hoa11_ck2_de09_p1_q12",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để phân biệt ba hợp chất HCHO, CH<sub>3</sub>CHO, CH<sub>3</sub>COCH<sub>3</sub>, một học sinh tiến hành thí nghiệm thu được kết quả sau:<br/><br/>Ghi chú: X: Không phản ứng; : Có phản ứng<br/>Ba chất (1), (2), (3) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCHO, CH<sub>3</sub>CHO, CH<sub>3</sub>COCH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>CHO, HCHO, CH<sub>3</sub>COCH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCHO,CH<sub>3</sub>COCH<sub>3</sub>, CH<sub>3</sub>CHO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>CHO, CH<sub>3</sub>COCH<sub>3</sub>, HCHO",
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
        "id": "hoa11_ck2_de09_p1_q13",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho ba hợp chất hữu cơ có phân tử khối tương đương: (1) C<sub>3</sub>H<sub>8</sub>; (2) C<sub>2</sub>H<sub>5</sub>OH; (3) CH<sub>3</sub>CHO. Thứ tự giảm dần nhiệt độ sôi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(2) > (3) > (1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) > (2) > (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(3) > (2) > (1)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(2) > (1) > (3)",
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
        "id": "hoa11_ck2_de09_p1_q14",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho lá zinc mỏng vào ống nghiệm đựng 2 mL dung dịch chất X, thấy lá kẽm tan dần và có khí thoát ra. Chất X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "glycerol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ethyl alcohol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "saccarozơ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "acetic acid",
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
        "id": "hoa11_ck2_de09_p1_q15",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Giấm ăn được dùng phổ biến trong chế biến thực phẩm, giấm ăn có chứa acetic acid với nồng độ từ 2% đến 5%. Một chai giấm thể tích 500 mL (D = 1,045 g/mL) có nồng độ acetic acid là 4%, số gam acetic acid có trong chai giấm đó là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "41,8 g",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "20,9 g",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4,18 g",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2,09 g",
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
        "id": "hoa11_ck2_de09_p1_q16",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có ba ống nghiệm chứa các dung dịch trong suốt: ống (1) chứa ethyl alcohol, ống (2) chứa acetic acid và ống (3) chứa acetaldehyde. Nếu cho Cu(OH)<sub>2</sub>/OH<sup>-</sup>lần lượt vào các dung dịch trên và đun nóng thì:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả ba ống đều có phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ống (1) và ống (3) có phản ứng, còn ống (2) thì không",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ống (2) và ống (3) có phản ứng, còn ống (1) thì không",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ống (1) có phản ứng, còn ống (2) và ống (3) thì không",
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
        "id": "hoa11_ck2_de09_p1_q17",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một số carboxylic acid như oxalic acid, tartaric acid,... gây ra vị chua cho quả sấu xanh. Trong quá trình làm sấu ngâm đường, người ta sử dụng dung dịch nào sau đây để làm giảm vị chua của quả sấu?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước vôi trong",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giấm ăn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phèn chua",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Muối ăn",
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
        "id": "hoa11_ck2_de09_p1_q18",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dãy các chất sau: HCHO, CH<sub>3</sub>COOH, CH<sub>3</sub>CHO, HCOOH, C<sub>2</sub>H<sub>5</sub>OH. Số chất trong dãy có thể tham gia phản ứng tráng bạc là",
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
            "text": "6",
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
            "text": "5",
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
        "id": "hoa11_ck2_de09_p2_q19",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Xét các phát biểu về cấu tạo của phân tử benzene.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử benzene có 6 nguyên tử carbon tạo thành hình lục giác đều.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tất cả nguyên tử carbon và hydrogen đều nằm trên một mặt phẳng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các góc liên kết đều bằng 109,5<sup>0</sup>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các độ dài liên kết carbon – carbon là khác nhau",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Góc liên kết trong phân tử benzene đều bằng 120<sup>o</sup>.<br/>d. Sai. Các độ dài liên kết carbon – carbon đều bằng nhau.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de09_p2_q20",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Các alkane có nhiều ứng dụng trong công nghiệp và đời sống hằng ngày:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Propane C<sub>3</sub>H<sub>8</sub> và butane C<sub>4</sub>H<sub>l0</sub> được sử dụng làm khí đốt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các alkane C<sub>6</sub>, C<sub>7</sub>, C<sub>8</sub> là nguyên liệu để sản xuất một số hydrocarbon thơm.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các alkane lỏng được sử dụng làm nhiên liệu như xăng hay dầu diesel.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các alkane từ C<sub>l1</sub> đến C<sub>20</sub> được dùng làm nến và sáp.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Alkane (C ≥ 20) ở thể rắn được dùng làm nến và sáp.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de09_p2_q21",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho hình vẽ bên mô tả thí nghiệm điều chế và thử tính chất của ethylene:",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_1)_image8.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_1)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bông tẩm dung dịch NaOH đặc có vai trò hấp thụ khí độc SO<sub>2</sub> được sinh ra.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thay dung dịch Br<sub>2</sub> bằng thuốc thử Tollens thì hiện tượng thí nghiệm vẫn không thay đổi.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khí ethylene sinh ra khi sục vào dung dịch Br<sub>2</sub> làm dung dịch mất màu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Vai trò của đá bọt là để điều hoà quá trình sôi, tránh hiện tượng quá sôi.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de09_p2_q22",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho các chất sau: methane, ethylene, acetylene, but-2-yne.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có 2 chất tạo kết tủa với thuốc thử Tollens.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có 3 chất có khả năng làm mất màu dung dịch KMnO<sub>4</sub> ở điều kiện thường.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cả 4 chất đều có khả năng làm mất màu dung dịch Br<sub>2</sub> ở điều kiện thường.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có 3 chất khí ở điều kiện thường.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Có một chất là acetylene,<br/>b. Đúng. Các chất ethylene, acetylene, but-2-yne.<br/>c. Sai. Các chất ethylene, acetylene, but-2-yne.<br/>d. Sai. Cả bốn chất là chất khí.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de09_p3_q23",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Số công thức cấu tạo chứa nhóm carboxylic acid có cùng công thức C<sub>5</sub>H<sub>10</sub>O<sub>2</sub>là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>CH<sub>3</sub> – CH<sub>2</sub> – CH<sub>2</sub> – CH<sub>2</sub> – COOH, (CH<sub>3</sub>)<sub>2</sub>CH – CH<sub>2</sub> – COOH<br/>CH<sub>3</sub> – CH<sub>2</sub> – CH(CH<sub>3</sub>) – COOH, (CH<sub>3</sub>)<sub>3</sub>C – COOH",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de09_p3_q24",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: H<sub>2</sub>O (1), C<sub>2</sub>H<sub>5</sub>OH (2), C<sub>6</sub>H<sub>5</sub>OH (3), CH<sub>3</sub>COOH (4). Hãy sắp xếp các chất trên theo độ linh động của nguyên tử hydrogen trong nhóm – OH tăng dần bằng cách gán số thứ tự theo bộ bốn chữ số (ví dụ: 1234, 2341, …)",
        "images": [],
        "correctAnswer": "2134",
        "explanation": "Đáp án: 2134.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de09_p3_q25",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Ethyl propionate có mùi thơm của dứa chín. Khi đun nóng hỗn hợp 18,5 g propionic acid và 13,8 g ethyl alcohol với xúc tác H<sub>2</sub>SO<sub>4</sub> đặc, thu được 15,3 g ethyl propionate. Tính hiệu suất của phản ứng điều chế ester?",
        "images": [],
        "correctAnswer": "60",
        "explanation": "Đáp án: 60.<br/>PTHH: C<sub>2</sub>H<sub>5</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH  C<sub>2</sub>H<sub>5</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O<br/>0,25           <    0,3             →                   0,25 mol<br/>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de09_p3_q26",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Tiến hành thí nghiệm phản ứng tráng bạc bằng cách lấy 50 mL dung dịch CH<sub>3</sub>CHO 1M phản ứng với thuốc thử Tollens dư. Sau khi kết thúc phản ứng, bình phản ứng có một lớp bạc sáng bóng bám vào thành bình. Loại bỏ hóa chất trong bình rồi tráng bằng nước cất, sấy khô, khối lượng bình tăng m gam so với ban đầu. Tính m biết hiệu suất tráng bạc là 75% vào chỉ 60% lượng bạc tạo thành bám vào thành bình, phần còn lại ở dạng kết tủa bột màu đen.",
        "images": [],
        "correctAnswer": "4,86",
        "explanation": "Đáp án: 4,86.<br/>CH<sub>3</sub>CHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]OH CH<sub>3</sub>COONH<sub>4</sub> +2Ag + 3NH<sub>3</sub> + H<sub>2</sub>O<br/>= 50 . 10<sup>-3</sup> = 0,05 mol<br/>= 0,05 . 2 = 0,1  = 108 . 0,1 = 10,8 (g)  m = 10,8 . 75% . 60% = 4,86 (g).<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de09_p3_q27",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: CH<sub>3</sub>-COOH, CH<sub>3</sub>-CO-CH<sub>3</sub>, HOOC-CH<sub>2</sub>-COOH, C<sub>6</sub>H<sub>5</sub>-COOH, CH<sub>3</sub>-CHO. Có bao nhiêu carboxylic acid trong số các chất?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de09_p3_q28",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "X là hợp chất no, mạch hở, chỉ chứa nhóm aldehyde và có công thức phân tử là C<sub>3</sub>H<sub>4</sub>O<sub>2</sub>. Cho 1 mol X phản ứng với thuốc thử Tollens thì thu được tối đa số mol Ag kim loại là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>Công thức cấu tạo của X là CH<sub>2</sub>(CHO)<sub>2</sub> ⇒ 2 nhóm CHO tạo 4 Ag.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "hoa11_ck2_de10",
    "code": "H11-CK2-10",
    "title": "Đề Thi Cuối Kì 2 Hóa 11 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 11 (Hydrocarbon, Alcohol, Phenol & Carbonyl - Carboxylic acid)",
    "badge": "Cuối Kì 2",
    "grade": "11",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa11_ck2_de10_p1_q1",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết O-H trong carboxylic acid phân cực hơn so với alcohol, phenol do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhóm -C=O là nhóm đẩy electron",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhóm -C=O là nhóm hút electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhóm -OH là nhóm hút electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhóm -OH là nhóm đẩy electron",
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
        "id": "hoa11_ck2_de10_p1_q2",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để phân biệt ba hợp chất HCHO, CH<sub>3</sub>CHO, CH<sub>3</sub>COCH<sub>3</sub>, một học sinh tiến hành thí nghiệm thu được kết quả sau:<br/><br/>Ghi chú: X: Không phản ứng; : Có phản ứng<br/>Ba chất (1), (2), (3) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCHO, CH<sub>3</sub>CHO, CH<sub>3</sub>COCH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>CHO, HCHO, CH<sub>3</sub>COCH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCHO,CH<sub>3</sub>COCH<sub>3</sub>, CH<sub>3</sub>CHO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>CHO, CH<sub>3</sub>COCH<sub>3</sub>, HCHO",
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
        "id": "hoa11_ck2_de10_p1_q3",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho ba hợp chất hữu cơ có phân tử khối tương đương: (1) C<sub>3</sub>H<sub>8</sub>; (2) C<sub>2</sub>H<sub>5</sub>OH; (3) CH<sub>3</sub>CHO. Thứ tự giảm dần nhiệt độ sôi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(2) > (3) > (1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) > (2) > (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(3) > (2) > (1)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(2) > (1) > (3)",
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
        "id": "hoa11_ck2_de10_p1_q4",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho lá zinc mỏng vào ống nghiệm đựng 2 mL dung dịch chất X, thấy lá kẽm tan dần và có khí thoát ra. Chất X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "glycerol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ethyl alcohol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "saccarozơ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "acetic acid",
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
        "id": "hoa11_ck2_de10_p1_q5",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Giấm ăn được dùng phổ biến trong chế biến thực phẩm, giấm ăn có chứa acetic acid với nồng độ từ 2% đến 5%. Một chai giấm thể tích 500 mL (D = 1,045 g/mL) có nồng độ acetic acid là 4%, số gam acetic acid có trong chai giấm đó là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "41,8 g",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "20,9 g",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4,18 g",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2,09 g",
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
        "id": "hoa11_ck2_de10_p1_q6",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có ba ống nghiệm chứa các dung dịch trong suốt: ống (1) chứa ethyl alcohol, ống (2) chứa acetic acid và ống (3) chứa acetaldehyde. Nếu cho Cu(OH)<sub>2</sub>/OH<sup>-</sup>lần lượt vào các dung dịch trên và đun nóng thì:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả ba ống đều có phản ứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ống (1) và ống (3) có phản ứng, còn ống (2) thì không",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ống (2) và ống (3) có phản ứng, còn ống (1) thì không",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ống (1) có phản ứng, còn ống (2) và ống (3) thì không",
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
        "id": "hoa11_ck2_de10_p1_q7",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một số carboxylic acid như oxalic acid, tartaric acid,... gây ra vị chua cho quả sấu xanh. Trong quá trình làm sấu ngâm đường, người ta sử dụng dung dịch nào sau đây để làm giảm vị chua của quả sấu?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước vôi trong",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giấm ăn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phèn chua",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Muối ăn",
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
        "id": "hoa11_ck2_de10_p1_q8",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dãy các chất sau: HCHO, CH<sub>3</sub>COOH, CH<sub>3</sub>CHO, HCOOH, C<sub>2</sub>H<sub>5</sub>OH. Số chất trong dãy có thể tham gia phản ứng tráng bạc là",
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
            "text": "6",
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
            "text": "5",
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
        "id": "hoa11_ck2_de10_p1_q9",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hai chất X và Y có cùng công thức phân tử C<sub>3</sub>H<sub>4</sub>O<sub>2</sub>. Cho X tác dụng với CaCO<sub>3</sub> thấy có bọt khí thoát ra, còn Y có thể tham gia phản ứng tráng bạc. Công thức của X và Y lần lượt là.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>2</sub>=CHCOOH, OHC-CH<sub>2</sub>-CHO",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>2</sub>=CH-COOH, CHC-O-CH<sub>2</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCOO-CH=CH<sub>2</sub>, OHC-CH<sub>2</sub>-CHO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOO-CH=CH<sub>2</sub>, CHC-O-CH<sub>2</sub>OH",
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
        "id": "hoa11_ck2_de10_p1_q10",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Oxi hóa alcohol đơn chức (X) bằng CuO (đun nóng), sinh ra một sản phẩm hữu cơ duy nhất là ketone (Y) (tỉ khối hơi của (Y) so với khí hydrogen bằng 29). Công thức cấu tạo của (X) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>-CH(OH)-CH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>-CH(OH)-CH<sub>2</sub>-CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>-CH<sub>2</sub>-OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-OH",
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
        "id": "hoa11_ck2_de10_p1_q11",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đặc điểm nào sau đây là của phản ứng ester hóa?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thuận nghịch, cần đun nóng và không cần xúc tác",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thuận nghịch, cần đun nóng và cần xúc tác",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng hoàn toàn, cần đun nóng và cần xúc tác",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng hoàn toàn, cần đun nóng và không cần xúc tác",
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
        "id": "hoa11_ck2_de10_p1_q12",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên gọi của CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>COOH là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2-methylpropanoic acid",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2-methylbutanoic acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3-methylbutanoic acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3-methylpropanoic acid",
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
        "id": "hoa11_ck2_de10_p1_q13",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Acetone được điều chế bằng cách oxi hóa cumene nhờ oxygen, sau đó thủy phân trong dung dịch H<sub>2</sub>SO<sub>4</sub> loãng. Để thu được 87 gam acetone thì lượng cumene cần dùng (giả sử hiệu suất quá trình điều chế đạt 80%) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "144 gam",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "180 gam",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "225 gam",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "216 gam",
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
        "id": "hoa11_ck2_de10_p1_q14",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Aldehyde acetic được sản xuất chủ yếu từ acetylene.<br/>(b) Acetone được sản xuất chủ yếu bằng cách oxi hóa propan-2-ol.<br/>(c) Fomaldehyde thường được bán dưới dạng khí hóa lỏng.<br/>(d) Người ta lau sạch sơn màu trên móng tay bằng acetone.<br/>Số phát biểu đúng là",
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
            "text": "4",
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
        "id": "hoa11_ck2_de10_p1_q15",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất chứa nhóm C=O liên kết với nguyên tử carbon hoặc nguyên tử hydrogen được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hợp chất alcohol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dẫn xuất halogen",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "các hợp chất phenol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hợp chất carbonyl",
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
        "id": "hoa11_ck2_de10_p1_q16",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho hợp chất carbonyl có công thức cấu tạo sau<br/>Tên theo danh pháp thay thế của hợp chất carbonyl đó là",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_3)_image1.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2-methylbutan -3-one",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3-methylbutan-2-one",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3-methylbutan-2-ol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1,1-dimethypropan-2-one",
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
        "id": "hoa11_ck2_de10_p1_q17",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các hợp chất sau, hợp chất nào tham gia phản ứng idoform?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCHO",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>CHO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>COCH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cả B và C",
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
        "id": "hoa11_ck2_de10_p1_q18",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trước đây người ta thường cho formol vào bánh phở, bún đề làm trắng và tạo độ dai, tuy nhiên do formol có tác hại với sức khỏe con người nên hiện nay đã bị cấm sử dụng trong thực phẩm. Formol là chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Methanol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phenol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Formaldehyde",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Acetone",
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
        "id": "hoa11_ck2_de10_p2_q19",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Xét các phát biểu về cấu tạo của phân tử benzene.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử benzene có 6 nguyên tử carbon tạo thành hình lục giác đều.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tất cả nguyên tử carbon và hydrogen đều nằm trên một mặt phẳng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các góc liên kết đều bằng 109,5<sup>0</sup>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các độ dài liên kết carbon – carbon là khác nhau",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Góc liên kết trong phân tử benzene đều bằng 120<sup>o</sup>.<br/>d. Sai. Các độ dài liên kết carbon – carbon đều bằng nhau.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa11_ck2_de10_p2_q20",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Các alkane có nhiều ứng dụng trong công nghiệp và đời sống hằng ngày:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Propane C<sub>3</sub>H<sub>8</sub> và butane C<sub>4</sub>H<sub>l0</sub> được sử dụng làm khí đốt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các alkane C<sub>6</sub>, C<sub>7</sub>, C<sub>8</sub> là nguyên liệu để sản xuất một số hydrocarbon thơm.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các alkane lỏng được sử dụng làm nhiên liệu như xăng hay dầu diesel.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các alkane từ C<sub>l1</sub> đến C<sub>20</sub> được dùng làm nến và sáp.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Alkane (C ≥ 20) ở thể rắn được dùng làm nến và sáp.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa11_ck2_de10_p2_q21",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho hình vẽ bên mô tả thí nghiệm điều chế và thử tính chất của ethylene:",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_1)_image8.png",
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_4_(Đề_số_1)_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bông tẩm dung dịch NaOH đặc có vai trò hấp thụ khí độc SO<sub>2</sub> được sinh ra.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thay dung dịch Br<sub>2</sub> bằng thuốc thử Tollens thì hiện tượng thí nghiệm vẫn không thay đổi.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khí ethylene sinh ra khi sục vào dung dịch Br<sub>2</sub> làm dung dịch mất màu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Vai trò của đá bọt là để điều hoà quá trình sôi, tránh hiện tượng quá sôi.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      },
      {
        "id": "hoa11_ck2_de10_p2_q22",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho các chất sau: methane, ethylene, acetylene, but-2-yne.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có 2 chất tạo kết tủa với thuốc thử Tollens.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có 3 chất có khả năng làm mất màu dung dịch KMnO<sub>4</sub> ở điều kiện thường.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cả 4 chất đều có khả năng làm mất màu dung dịch Br<sub>2</sub> ở điều kiện thường.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có 3 chất khí ở điều kiện thường.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Có một chất là acetylene,<br/>b. Đúng. Các chất ethylene, acetylene, but-2-yne.<br/>c. Sai. Các chất ethylene, acetylene, but-2-yne.<br/>d. Sai. Cả bốn chất là chất khí.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 22
      },
      {
        "id": "hoa11_ck2_de10_p3_q23",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: CH<sub>3</sub>-COOH, CH<sub>3</sub>-CO-CH<sub>3</sub>, HOOC-CH<sub>2</sub>-COOH, C<sub>6</sub>H<sub>5</sub>-COOH, CH<sub>3</sub>-CHO. Có bao nhiêu carboxylic acid trong số các chất?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "hoa11_ck2_de10_p3_q24",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "X là hợp chất no, mạch hở, chỉ chứa nhóm aldehyde và có công thức phân tử là C<sub>3</sub>H<sub>4</sub>O<sub>2</sub>. Cho 1 mol X phản ứng với thuốc thử Tollens thì thu được tối đa số mol Ag kim loại là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>Công thức cấu tạo của X là CH<sub>2</sub>(CHO)<sub>2</sub> ⇒ 2 nhóm CHO tạo 4 Ag.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "hoa11_ck2_de10_p3_q25",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng sau:<br/>(1) CH<sub>3</sub>CH<sub>2</sub>OH + CuO<br/>(2) (CH<sub>3</sub>)<sub>2</sub>CHOH + CuO<br/>(3) (CH<sub>3</sub>)<sub>3</sub>COH + CuO<br/>(4) HC≡CH + H<sub>2</sub>O<br/>Liệt kê các phản ứng có sự tạo thành aldehyde thành dãy số thứ tự tăng dần (Ví dụ: 1234, 24,…).",
        "images": [],
        "correctAnswer": "14",
        "explanation": "Đáp án: 14.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "hoa11_ck2_de10_p3_q26",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các hóa chất sau: dung dịch HCN, dung dịch Br<sub>2</sub>, dung dịch NaOH, dung dịch [Ag(NH<sub>3</sub>)<sub>2</sub>](OH), LiAlH<sub>4</sub>, Cu(OH)<sub>2</sub>/NaOH, I<sub>2</sub>/NaOH. Có bao nhiêu chất phản ứng được với acetone ở điều kiện nhiệt độ thích hợp?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "hoa11_ck2_de10_p3_q27",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Methyl salicylate là hợp chất thuộc loại ester dùng làm cao dán giảm đau, kháng viêm ngoài da. Methyl salicylate được tổng hợp từ salicylic acid và methanol. Phương trình hóa học của phản ứng tổng hợp methyl salicylate:<br/>Phần trăm khối lượng của nguyên tố oxygen trong phân tử methyl salicylate là bao nhiêu (Làm tròn kết quả đến hàng phần mười)?",
        "images": [
          "/assets/hoa11/semester2/Lớp_11._Đề_KT_chương_6_(Đề_số_3)_image8.emf"
        ],
        "correctAnswer": "31,6",
        "explanation": "Đáp án: 31,6.<br/>Công thức phân tử của methyl salicylate là C<sub>8</sub>H<sub>8</sub>O<sub>3</sub>  %O = 31,6%.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "hoa11_ck2_de10_p3_q28",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Giấm ăn được điều chế bằng cách lên men dung dịch ethanol loãng. Tính khối lượng giấm ăn 5% thu được (theo đơn vị kg) khi lên men 100 L ethanol 4°. Biết hiệu suất quá trình lên men là 80%, khối lượng riêng của ethanol nguyên chất là 0,79 g/mL. (Làm tròn kết quả đến hàng phần mười)",
        "images": [],
        "correctAnswer": "66,0",
        "explanation": "Đáp án: 66,0.<br/>Phản ứng lên men:<br/>Theo phản ứng:<br/>Với hiệu suất 80% thì khối lượng thực tế thu được:<br/>Khối lượng giấm ăn 5%:<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  }
];

export function getFinal2ExamById(id: string): Chuong1Exam | undefined {
  return HOA11_FINAL2_EXAMS.find(e => e.id === id || e.code === id);
}

export function calculateFinal2ExamScore(exam: Chuong1Exam, answers: Record<string, any>) {
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
