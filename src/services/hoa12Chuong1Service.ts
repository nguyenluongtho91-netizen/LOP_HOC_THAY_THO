// src/services/hoa12Chuong1Service.ts
// DỮ LIỆU CHUẨN HÓA TOÀN DIỆN CHƯƠNG 1 HÓA HỌC 12: ESTER - LIPID & CHẤT GIẶT RỬA
// (Bám sát 100% Chương trình GDPT 2018 mới nhất - Định dạng Đề thi Bộ GD&ĐT từ năm 2025)

export interface Chuong1Question {
  id: string;
  number: number;
  displayNumber?: number;
  part?: number; // 1: Trắc nghiệm 4 chọn 1 | 2: Đúng/Sai 4 ý | 3: Trả lời ngắn điền số
  type: 'multiple_choice' | 'true_false' | 'short_answer';
  text: string;
  options?: Array<{
    id?: string;
    letter: string;
    text: string;
    isCorrect?: boolean;
    explanation?: string;
  }>;
  correctAnswer?: string;
  solution?: string;
  explanation?: string;
}

export interface Chuong1Exam {
  id: string;
  code: string;
  title: string;
  chapter: string;
  topic: string;
  timeLimit: number;
  totalQuestions: number;
  questions: Chuong1Question[];
}

export interface Chuong1TopicLevel {
  level: number;
  title: string;
  target: string;
  questions: any[];
}

export interface Chuong1Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
  levels: Chuong1TopicLevel[];
}

// ─── 1. BỘ 7 ĐỀ KIỂM TRA ĐỊNH KỲ CHƯƠNG 1 (CHUẨN 28 CÂU / 50 PHÚT) ───────────
export const HOA12_CHUONG1_7_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa12_c1_de_011",
    "code": "011",
    "title": "Đề Kiểm Tra Số 1 - Chuyên Đề Ester (Mã 011)",
    "chapter": "Chương 1: Ester - Lipid",
    "topic": "Ester",
    "timeLimit": 50,
    "totalQuestions": 28,
    "questions": [
      {
        "id": "c1_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên gọi của ester CH3COOCH3 là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ethyl formate",
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
            "text": "methyl acetate",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "methyl formate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây thuộc loại ester?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3OOCC2H5",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "HOOCCH3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H2NCH2COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3CHO",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:\n(a) Một số ester có mùi thơm nên được dùng làm chất tạo hương trong công nghiệp thực phẩm và mĩ phẩm.\n(b) Ester isoamyl acetate có mùi chuối chín.\n(c) Ethyl acetate là ester tan tốt trong nước.\n(d) Trong phân tử ester đơn chức, mạch hở luôn có một liên kết .\n(e) Phản ứng thuỷ phân ester trong môi trường acid luôn là phản ứng một chiều.\nSố phát biểu đúng là",
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
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số đồng phân ester có cùng công thức phân tử C3H6O2 là",
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
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trường hợp nào sau đây xảy ra phản ứng với ethyl acetate?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch NaOH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch C2H5OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch [Ag(NH3)2]OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch NaCl",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester nào sau đây tác dụng với dung dịch NaOH  thu được sodium propionate?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOCH3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOC2H5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C2H5COOCH3",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOC2H5",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy các chất nào sau đây được sắp xếp theo chiều tăng dần nhiệt độ sôi?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOCH3, CH3CH2OH, CH3COOH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOH, HCOOCH3, CH3CH2OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH3COOH, CH3CH2OH, HCOOCH3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3CH2OH, CH3COOH, HCOOCH3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester X mạch hở có công thức phân tử C3H4O2. Tên gọi của X là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "vinyl acetate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "methyl acetate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "methyl formate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "vinyl formate",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đặc điểm nào sau đây là của phản ứng ester hóa?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thuận nghịch, cần đun nóng và không cần xúc tác",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thuận nghịch, cần đun nóng và cần xúc tác",
            "isCorrect": true
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
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester có công thức phân tử là C2H4O2 được tạo thành từ methyl alcohol và carboxylic acid nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Propionic acid",
            "isCorrect": false
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
            "text": "Formic acid",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Oxalic acid",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là không đúng?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "So với các đồng phân là carboxylic acid, ester luôn có nhiệt độ sôi thấp hơn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng ester hoá là phản ứng thuận nghịch",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng xà phòng hoá là phản ứng thuận nghịch",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ester là những chất lỏng hoặc chất rắn ở nhiệt độ thường",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester X có mùi đặc trưng giống mùi táo và có công thức phân tử C5H10O2. Thuỷ phân X trong dung dịch NaOH, thu được sodium butanoate và một alcohol. Công thức của X là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOCH2CH2CH3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3CH2COOCH2CH3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH3CH2CH2COOCH3",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(CH3)2CHCOOCH2CH3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Propionic acid và methyl acetate là đồng phân cấu tạo của nhau",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Methyl acrylate không có phản ứng trùng hợp tạo polymer",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Methyl ethanoate có tham gia phản ứng thủy phân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ethyl formate có khả năng tham gia phản ứng tráng bạc",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện phản ứng ester hóa giữa HOCH2CH2OH với hỗn hợp CH3COOH và C2H5COOH thu được tối đa bao nhiêu ester hai chức?",
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
            "text": "4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một hợp chất hữu cơ X đơn chức có công thức phân tử là C3H6O2. X không tác dụng với kim loại Na nhưng tác dụng được với dung dịch NaOH khi đun nóng. Chất X thuộc dãy đồng đẳng của loại hợp chất nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Alcohol",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ester",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Aldehyde",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Carboxylic acid",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để xà phòng hoá hoàn toàn 2,64 gam một ester no, đơn chức, mạch hở X cần dùng 30,0 mL dung dịch NaOH 1,0M. Công thức phân tử của ester X là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C2H4O2",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C3H6O2",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C4H8O2",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C5H10O2",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phản ứng sau:\n(1) Thuỷ phân ester trong dung dịch H2SO4 loãng, đun nóng.\n(2) Thuỷ phân ester trong dung dịch NaOH, đun nóng.\n(3) Cho ester tác dụng với dung dịch KOH, đun nóng.\n(4) Thuỷ phân dẫn xuất halogen trong dung dịch NaOH, đun nóng.\n(5) Cho carboxylic acid tác dụng với dung dịch KOH.\nNhững phản ứng nào không được gọi là phản ứng xà phòng hoá?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1), (2), (3), (4)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1), (3), (4), (5)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1), (4), (5)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(3), (4), (5)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho sơ đồ chuyển hóa sau: X (C4H8O2)  alcohol Y  CH3COOH.\nCông thức của X là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOCH2CH2CH3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C2H5COOCH3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH3COOC2H5",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3CH2CH2COOH",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p2_q1",
        "number": 19,
        "displayNumber": 1,
        "part": 2,
        "type": "true_false",
        "text": "Khi thay thế nhóm -OH ở nhóm carboxyl (-COOH) của carboxylic acid bằng nhóm -OR’ thì được ester có dạng RCOOR’.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Ester là hợp chất hữu cơ trong phân tử có nhóm -COO-.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Trong cấu tạo ester dạng RCOOR’, các gốc R và R’ có thể là hydrogen hoặc gốc hydrocarbon.",
            "isCorrect": false,
            "explanation": "R’ không thể là hydrogen."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Methyl formate là ester có phân tử khối nhỏ nhất.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Ester no, đơn chức, mạch hở có công thức phân tử CnH2nO2 (n ≥ 2).",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. R’ không thể là hydrogen.\nc. Đ.\nd. Đ."
      },
      {
        "id": "c1_p2_q2",
        "number": 20,
        "displayNumber": 2,
        "part": 2,
        "type": "true_false",
        "text": "Ester methyl methacrylate là nguyên liệu của công nghiệp sản xuất polymer.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Methyl methacrylate thuộc loại ester không no, đơn chức, mạch hở.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Trong phân tử methyl methacrylate, nguyên tố oxygen chiếm chưa đến 36% về khối lượng.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Methyl methacrylate không làm mất màu dung dịch bromine.",
            "isCorrect": false,
            "explanation": "Có làm mất màu dung dịch Br2."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Thủy phân methyl methacrylate trong môi trường acid, thu được muối carboxylate và alcohol.",
            "isCorrect": false,
            "explanation": "Thủy phân ester trong môi trường acid thu được carboxylic acid và alcohol."
          }
        ],
        "solution": "Đáp án:\nEster methyl methacrylate: CH2=C(CH3)-COO-CH3\na. Đ.\nb. Đ.\nc. S. Có làm mất màu dung dịch Br2.\nd. S. Thủy phân ester trong môi trường acid thu được carboxylic acid và alcohol."
      },
      {
        "id": "c1_p2_q3",
        "number": 21,
        "displayNumber": 3,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm điều chế isoamyl acetate (chất có mùi chuối chín) theo thứ tự các bước sau đây:\nBuớc 1: Cho khoảng 3 mL CH3CH(CH3)CH2CH2OH, 3 mL CH3COOH và vài giọt H2SO4 đặc đặc vào ống nghiệm.\nBuớc 2: Lắc đều ống nghiệm rồi đun cách thuỷ (trong nồi nước nóng) khoảng 5 – 7 phút ở 65 – 70oC.\nBuớc 3: Làm lạnh, sau đó thêm khoảng  dung dịch NaCl bão hoà vào ống nghiệm.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "H2SO4 đặc có vai trò xúc tác cho phản ứng tạo isoamyl acetate.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Thêm dung dịch NaCl bão hoà vào để tránh phân huỷ sản phẩm.",
            "isCorrect": false,
            "explanation": "Tách lớp sản phẩm."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Sau bước 2, trong ống nghiệm vẫn còn CH3CH(CH3)CH2CH2OH và CH3COOH.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Sau bước 3, trong ống nghiệm thu được hỗn hợp chất lỏng đồng nhất.",
            "isCorrect": false,
            "explanation": "Tách lớp."
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. Tách lớp sản phẩm.\nc. Đ.\nd. S. Tách lớp."
      },
      {
        "id": "c1_p2_q4",
        "number": 22,
        "displayNumber": 4,
        "part": 2,
        "type": "true_false",
        "text": "Acetylsalicylic acid (thuốc Aspirin) có công thức cấu tạo như hình dưới đây:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Acetylsalicylic acid có vị chua.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Cho a mol acetylsalicylic acid phản ứng với dung dịch NaOH dư, số mol NaOH phản ứng là 3a mol.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Công thức phân tử của acetylsalicylic acid là C9H10O4.",
            "isCorrect": false,
            "explanation": "C9H8O4."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Trong phân tử acetylsalicylic acid có tất cả 5 liên kết .",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. Đ.\nc. S. C9H8O4.\nd. Đ."
      },
      {
        "id": "c1_p3_q1",
        "number": 23,
        "displayNumber": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Ester benzyl acetate có mùi thơm của hoa nhài. Trong phân tử benzyl acetate có bao nhiêu nguyên tử carbon?",
        "correctAnswer": "9",
        "solution": "Đáp án: 9.\nCH3COOCH2C6H5."
      },
      {
        "id": "c1_p3_q2",
        "number": 24,
        "displayNumber": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất có công thức sau: HCHO, C2H2, CH3COOH, CH3COOCH=CH2, HCOOC2H5, (COOCH3)2. Trong các chất trên, có bao nhiêu chất thuộc loại ester?",
        "correctAnswer": "3",
        "solution": "Đáp án: 3."
      },
      {
        "id": "c1_p3_q3",
        "number": 25,
        "displayNumber": 3,
        "part": 3,
        "type": "short_answer",
        "text": "X là ester no, đơn chức, mạch hở có công thức dạng C6HmO2. Giá trị của m là bao nhiêu?",
        "correctAnswer": "12",
        "solution": "Đáp án: 12.\nCnH2nO2 ứng với n = 6  m = 12."
      },
      {
        "id": "c1_p3_q4",
        "number": 26,
        "displayNumber": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dãy các chất: phenyl acetate, vinyl acetate, propyl acetate và ethyl formate. Có bao nhiêu chất trong dãy khi thủy phân trong dung dịch NaOH (dư), đun nóng sinh ra alcohol?",
        "correctAnswer": "2",
        "solution": "Đáp số: 2."
      },
      {
        "id": "c1_p3_q5",
        "number": 27,
        "displayNumber": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Ethyl acetate là chất lỏng, có mùi đặc trưng, được sản xuất ở quy mô lớn làm dung môi trong công nghiệp. Để một nhà máy sản xuất được 1000 lít ethyl acetate mỗi ngày thì khối lượng acetic acid cần tiêu thụ tối thiểu là m (kg). Biết rằng hao hụt trong quá trình sản xuất trên là 25%. Cho khối lượng riêng của ethyl acetate bằng 0,902 (g/cm³). Giá trị của m là bao nhiêu?",
        "correctAnswer": "820",
        "solution": "Đáp án: 820.\nCH3COOH + C2H5OH  CH3COOC2H5 + H2O\nmester = 1000.0,902 = 902 kg\nHao hụt 25% (tức là hiệu suất đạt được 75%) trong quá trình sản xuất"
      },
      {
        "id": "c1_p3_q6",
        "number": 28,
        "displayNumber": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Kết quả phân tích nguyên tố của ester đơn chức X cho thấy X có %C = 60%, %H = 8% (về khối lượng), còn lại là %O. Trên phổ MS của X thấy xuất hiện tín hiệu của ion phân tử [M+] có giá trị m/z = 100. Biết X được tạo bởi từ phản ứng ester hoá giữa alcohol với carboxylic acid. Có bao nhiêu công thức cấu tạo của X thỏa mãn điều kiện trên?",
        "correctAnswer": "9",
        "solution": "Đáp án: 9.\nCông thức tổng quát của X: CxHyOz\nCông thức đơn giản nhất của X là C5H8O2 và công thức phân tử của X có dạng (C5H8O2)n.\nTừ tín hiệu của ion phân tử [M+] trên phổ MS ⟹ MX = 100 (g/mol) ⟹ n = 1.\nCông thức phân tử của X là C5H8O2.\nHCOOCH2CH2CH=CH2, HCOOCH2CH=CHCH3, HCOOCH2C(CH3)=CH2, HCOOCH(CH3)CH=CH2,\nCH3COOCH2CH=CH2, CH2=CHCOOCH2CH3, CH2=CHCH2COOCH3, CH3CH=CHCOOCH3,\nCH2=C(CH3)COOCH3.\n------------------------- HẾT -------------------------\n- Thí sinh không sử dụng tài liệu.\n- Giám thị không giải thích gì thêm.\nBÀI 1. ESTER - LIPID\n(Đề có 4 trang)"
      }
    ]
  },
  {
    "id": "hoa12_c1_de_012",
    "code": "012",
    "title": "Đề Kiểm Tra Số 2 - Ester & Lipid Cơ Bản (Mã 012)",
    "chapter": "Chương 1: Ester - Lipid",
    "topic": "Ester - Lipid",
    "timeLimit": 50,
    "totalQuestions": 28,
    "questions": [
      {
        "id": "c1_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester đơn chức có công thức chung là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "RCOOR’",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "RCOOH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "RCOR’",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(RCOO)2R’",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số đồng phân ester có công thức phân tử C4H8O2 là",
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
            "text": "4",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "5",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester được dùng làm chất tạo hương trong công nghiệp mĩ phẩm, thực phẩm. Ester thường có mùi đặc trưng là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "mùi hoa, quả chín",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "mùi tinh dầu, sả, chanh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "mùi cồn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "mùi tanh của cá",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuỷ phân ester nào sau đây trong dung dịch NaOH dư thu được sodium formate?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOCH3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOC2H5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCOOC2H5",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C2H5COOC2H5",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester được tạo bởi methanol và acetic acid có công thức cấu tạo là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOCH3",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOC2H5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCOOC2H5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOCH3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không phải là chất béo?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(C17H35COO)3C3H5",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(CH3COO)3C3H5",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(C17H33COO)3C3H5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(Cì5H31COO)3C3H5",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các dầu dưới đây, dầu nào không chứa ester của acid béo và glycerol?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dầu lạc (đậu phộng)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dầu đậu nành",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dầu dừa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dầu mỏ",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tỉnh chất vật lí chung của chất béo là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ít tan trong nước và nhẹ hơn nước",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dễ tan trong nước và nhẹ hơn nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ít tan trong nước và nặng hơn nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dễ tan trong nước và nặng hơn nước",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuỷ phân hoàn toàn triglyceride X trong dung dịch NaOH, đun nóng, thư được C17H35COONa và C3H5(OH)3. Công thức của X là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(C17H35COO)3C3H5",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(C17H33COO)3C3H5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C17H35COOC3H5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(C15H31COO)3C3H5",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Acid nào sau đây thuộc loại acid béo chưa bão hòa?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Stearic acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Palmitic acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Oleic acid",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Oxalic acid",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Từ quả đào chín, người ta tách ra được chất A là một ester có công thức phân tử C3H6O2. Khi thuỷ phân A trong dung dịch NaOH dư, thu được sodium formate và một alcohol. Công thức của cấu tạo của A là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOCH3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOC2H5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCOOC2H5",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOCH3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dầu mỡ khi chiên rán nhiều lần thường có mùi khó chịu do nguyên nhân chính là dầu mỡ bị",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "thủy phân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hydrogen hóa",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "xà phòng hóa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "oxi hóa",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sáp ong do ong thợ tiết ra và xây dựng tạo thành tổ ong để lưu trữ mật ong và bảo vệ ấu trùng (nhộng). Trong sáp ong có chứa thành phần chính là triacontanyl palmitate (C15H31COOC30H61). Ester này thuộc loại",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "không no, đơn chức",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "không no, đa chức",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "no, đơn chức",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "no, đa chức",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện phản ứng ester hóa giữa HOOC-COOH với hỗn hợp CH3OH và C2H5OH thu được tối đa bao nhiêu ester hai chức?",
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
            "text": "4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây thuộc loại acid béo omega-3?",
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
            "text": "",
            "isCorrect": true
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
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện phản ứng ester hoá sau: cho 0,1 mol alcohol tác dụng với 0,1 mol carboxylic acid, có mặt H2SO4 đặc làm xúc tác. Đồ thị nào sau đây biểu diễn sự thay đổi số mol (n) alcohol theo thời gian (t)?",
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
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho vào ba ống nghiệm, mỗi ống 1 mL ethyl acetate, sau đó cho vào mỗi ống các chất sau:\n- Ống nghiệm (1): 2 mL nước cất.\n- Ống nghiệm (2): 2 mL dung dịch H2SO4 20%.\n- Ống nghiệm (3): 2 mL dung dịch NaOH 30%.\nLắc đều ba ống nghiệm rồi đặt ba ống trong nồi cách thuỷ ở nhiệt độ 60 - 70°C. Sau một thời gian, thể tích lớp ester còn lại trong ba ống theo thứ tự giảm dần là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(3) > (2) > (1)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(2) > (3) > (1)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) > (2) > (3)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) > (3) > (2)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 4 chất sau: butan-1-ol (1), butanoic acid (2), ethyl acetate (3) và pentan-2-ol (4). Chất có nhiệt độ sôi thấp nhất trong 4 chất nêu trên là",
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
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(3)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(4)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p2_q1",
        "number": 19,
        "displayNumber": 1,
        "part": 2,
        "type": "true_false",
        "text": "Methyl butanoate là ester có mùi táo, thu được khi cho butanoic acid tác dụng với methyl alcohol có mặt H2SO4 đặc làm xúc tác.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Phản ứng điều chế ester ở trên là phản ứng thuận nghịch.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Phản ứng trên có tên gọi là phản ứng xà phòng hoá.",
            "isCorrect": false,
            "explanation": "Phản ứng ester hóa."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Hiệu suất phản ứng có thể đạt tối đa là 100%.",
            "isCorrect": false,
            "explanation": "Hiệu luôn nhỏ hơn 100%>"
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Khi hệ đạt tới trạng thái cân bằng, nếu thêm nước thì lượng ester thu được sẽ tăng lên.",
            "isCorrect": false,
            "explanation": "Thêm nước vào cân bằng sẽ chuyển dịch theo chiều làm giảm nước là chiều nghịch."
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. Phản ứng ester hóa.\nc. S. Hiệu luôn nhỏ hơn 100%>\nd. S. Thêm nước vào cân bằng sẽ chuyển dịch theo chiều làm giảm nước là chiều nghịch."
      },
      {
        "id": "c1_p2_q2",
        "number": 20,
        "displayNumber": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về ester:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Ester thường ít tan trong nước và nhẹ hơn nước.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Phản ứng xà phòng hoá ethyl acetate là phản ứng thuận nghịch.",
            "isCorrect": false,
            "explanation": "Xà phòng hóa là phản ứng 1 chiều."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Trong phản ứng ester hoá giữa carboxylic acid và alcohol, nước tạo thành từ -OH trong nhóm -COOH của acid và H trong nhóm -OH của alcohol.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Một số ester có mùi thơm, không độc, được dùng làm hương liệu trong công nghiệp thực phẩm, mĩ phẩm,...",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. Xà phòng hóa là phản ứng 1 chiều.\nc. Đ.\nd. Đ."
      },
      {
        "id": "c1_p2_q3",
        "number": 21,
        "displayNumber": 3,
        "part": 2,
        "type": "true_false",
        "text": "Hình dưới đây mô tả hàm lượng % về khối lượng các gốc acid béo trong một số loại dầu thực vật và mỡ động vật:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Dầu thực vật thường có hàm lượng gốc acid béo no thấp hơn mỡ động vật.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Mỡ lợn có nhiệt độ nóng chảy thấp hơn mỡ bò.",
            "isCorrect": true,
            "explanation": "Chất béo có nhiều gốc no sẽ có nhiệt độ nóng chảy cao hơn."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Số liên kết đôi trong gốc acid béo của dầu oliu nhiều hơn dầu hướng dương.",
            "isCorrect": false,
            "explanation": "Ngược lại."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Khi thực hiện phản ứng hydrogen hoá dầu đậu nành và dầu oliu để tạo bơ thực vật, dầu oliu cần lượng hydrogen nhiều hơn.",
            "isCorrect": false,
            "explanation": "Ngược lại."
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. Đ. Chất béo có nhiều gốc no sẽ có nhiệt độ nóng chảy cao hơn.\nc. S. Ngược lại.\nd. S. Ngược lại."
      },
      {
        "id": "c1_p2_q4",
        "number": 22,
        "displayNumber": 4,
        "part": 2,
        "type": "true_false",
        "text": "Phổ khối lượng của ester E được cho ở hình dưới đây:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Ester E có khối lượng phân tử bằng 60.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "E là ester của methyl alcohol với acetic acid.",
            "isCorrect": false,
            "explanation": "Formic acid (HCOOH) và methanol (CH3OH)."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Nhiệt độ sôi của E cao hơn ethanol.",
            "isCorrect": false,
            "explanation": "Ester có nhiệt độ sôi thấp hơn alcohol."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Xà phòng hóa E bằng dung dịch NaOH thu được muối có công thức phân tử là CHO2Na.",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\nME = 60: HCOOCH3\na. Đ.\nb. S. Formic acid (HCOOH) và methanol (CH3OH).\nc. S. Ester có nhiệt độ sôi thấp hơn alcohol.\nd. Đ."
      },
      {
        "id": "c1_p3_q1",
        "number": 23,
        "displayNumber": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau:\n(1) CH2=CHCOCH2CH3(2) CH3COO[CH2]7CH3\n(3) (CH3[CH2]14COO)3C3H5(4)\nCó bao nhiêu chất thuộc loại ester thuần chức?",
        "correctAnswer": "2",
        "solution": "Đáp án: 2."
      },
      {
        "id": "c1_p3_q2",
        "number": 24,
        "displayNumber": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu hợp chất hữu cơ đơn chức khác nhau có cùng công thức phân tử C3H6O2?",
        "correctAnswer": "3",
        "solution": "Đáp án: 3.\nHCOOC2H5, CH3COOCH3 và C2H5COOH."
      },
      {
        "id": "c1_p3_q3",
        "number": 25,
        "displayNumber": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Dầu hạt hướng dương có thể được sử dụng đế làm bơ thực vật bằng phản ứng hydrogen hoá. Triacylglycerol trong dầu hạt hướng dương chứa hai gốc linoleate và một gốc oleate. Phân tử khối của triacylglycerol trong dầu hạt hướng dương trên là bao nhiêu?",
        "correctAnswer": "880",
        "solution": "Đáp án: 880.\n(C17H31COO)2(C17H33COO)C3H5"
      },
      {
        "id": "c1_p3_q4",
        "number": 26,
        "displayNumber": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: propyl formate, methyl propionate, triolein, methyl acrylate và phenyl acetate. Khi thủy phân các chất trên trong dung dịch NaOH (đun nóng nhẹ), có bao nhiêu alcohol khác nhau được tạo thành sau phản ứng?",
        "correctAnswer": "3",
        "solution": "Đáp số: 3.\nCác alcohol tạo thành từ phản ứng thủy phân là CH3OH, C3H7OH và C3H5(OH)3."
      },
      {
        "id": "c1_p3_q5",
        "number": 27,
        "displayNumber": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Xà phòng hoá hoàn toàn 4,4 g ethyl acetate bằng dung dịch KOH dư, thu được bao nhiêu gam muối potassium acetate?",
        "correctAnswer": "4,9",
        "solution": "Đáp án: 4,9.\nCH3COOC2H5 + KOH  CH3COOK + C2H5OH\n0,050,05\nm CH3COOK = 0,05.98 = 4,9g"
      },
      {
        "id": "c1_p3_q6",
        "number": 28,
        "displayNumber": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Để điều chế isoamyl acetate trong phòng thí nghiệm, một học sinh đã đun nóng 4,00 mL acetic acid (D = 1,05 g/mL) với 8,00 mL isoamyl alcohol (CH3)2CHCH2CH2OH (D = 0,81 g/mL), có dung dịch H2SO4 đặc làm xúc tác, thu được 6,00 mL isoamyl acetate (D = 0,88 g/mL). Tính hiệu suất của phản ứng trên. (Kết quả làm tròn đến hàng đơn vị).",
        "correctAnswer": "58",
        "solution": "Đáp án: 58.\n------------------------- HẾT -------------------------\n- Thí sinh không sử dụng tài liệu.\n- Giám thị không giải thích gì thêm.\nBÀI 1. ESTER - LIPID\n(Đề có 4 trang)"
      }
    ]
  },
  {
    "id": "hoa12_c1_de_013",
    "code": "013",
    "title": "Đề Kiểm Tra Số 3 - Ester & Lipid Nâng Cao (Mã 013)",
    "chapter": "Chương 1: Ester - Lipid",
    "topic": "Ester - Lipid",
    "timeLimit": 50,
    "totalQuestions": 28,
    "questions": [
      {
        "id": "c1_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây thuộc loại ester?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOCH3",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCOOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3COCH3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ethyl propanoate là ester tạo nên mùi thơm đặc trưng của quả dứa. Công thức của ethyl propanoate là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOC2H5",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C2H5COOCH2CH2CH3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH3COOCH2CH2CH3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C2H5COOC2H5",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây thường được dùng làm xúc tác cho phản ứng điều chế ester từ carboxylic acid và alcohol?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hydrochloric acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sulfuric acid",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sulfnrous acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nitric acid",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng hoá hoàn toàn ester có công thức hoá học CH3COOC2H5 trong dung dịch KOH dư đun nóng, thu được sản phẩm gồm",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOH và C2H5OH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOK và C2H5OH",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C2H5COOK và CH3OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOK và C3H7OH",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester được tạo bởi ethanol và formic acid có công thức cấu tạo là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOCH3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOC2H5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HCOOC2H5",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOCH3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Acid nào sau đây không thuộc loại acid béo?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Oleic acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Palmitic acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Stearic acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Acetic acid",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức cấu tạo của tripalmitin tạo bởi glycerol và palmitic acid là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(C17H33COO)3C3H5",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(C17H35COO)3C3H5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(C17H31COO)3C3H5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(C15H31COO)3C3H5",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất béo là triester của acid béo với",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "methyl alcohol",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ethylen glicol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ethyl alcohol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "glycerol",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng hoá chất béo nào sau đây thu được sodium stearate?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(C17H35COO)3C3H5",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(C17H33COO)3C3H5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C17H35COOC3H5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(C15H31COO)3C3H5",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester nào sau đây có mùi thơm của hòa nhài?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Isoamyl acetate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Propyl acetate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ethyl acetate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Benzyl acetate",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuỷ phân ester no trong dung dịch H2SO4 loãng thường tạo thành các sản phẩm nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Aldehyde và alcohol",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Alcohol và sodium carboxylate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Alcohol và carboxylic acid",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Carboxylic acid và phenol",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thủy phân hoàn toàn m gam chất béo bằng dung dịch NaOH, đun nóng thu được 9,2 gam glycerol và 91,8 gam muối. Giá trị của m là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "89",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "101",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "85",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "93",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính chất nào sau đây không phải là tính chất thích hợp giúp ethyl methanoate được sử dụng trong sản xuất một số loại nước hoa?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khả năng dễ cháy",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Không độc hại",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhiệt độ sôi thấp",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có mùi thơm dễ chịu",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất béo thuộc loại hợp chất ester",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong công nghiệp, chất béo chủ yếu được dùng để sản xuất xà phòng và glycerol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất béo lỏng là các triglyceride chứa chủ yếu các gốc acid béo không no",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dầu ăn và dầu mỡ bôi trơn máy có cùng thành phần nguyên tố",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây thuộc loại acid béo omega-6?",
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
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có 4 ester no, đơn chức, mạch hở được kí hiệu ngẫu nhiên lần lượt là X, Y, Z, T. Phân tử ester của mỗi chất nêu trên đều tạo bởi các carboxylic acid mạch không phân nhánh và ethyl alcohol. Độ tan của 4 ester được cho ở bảng sau:\nEster\nX\nY\nZ\nT\nĐộ tan (g/100 g nước)\n8,7\n10,5\n2,2\n4,9\nTrong số 4 ester trên, ester có nhiều nguyên tử carbon nhất trong phân tử là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Y",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "T",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Z",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester nào sau đây là đồng phân với methacrylic acid?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Methyl acrylate",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ethyl acrylate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Vinyl formate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ethyl acetate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng được biểu diễn thông qua phương trình hoá học sau:\nPhản ứng trên thuộc loại phản ứng nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng ester hoá",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng xà phòng hoá",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng trung hoà",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng oxi hoá",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p2_q1",
        "number": 19,
        "displayNumber": 1,
        "part": 2,
        "type": "true_false",
        "text": "Isopropyl formate là một ester có trong cà phê Arabica (còn gọi là cà phê chè).",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Công thức của isopropyl formate là HCOOCH(CH3)2.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Isopropyl formate là ester không no, đơn chức, mạch hở.",
            "isCorrect": false,
            "explanation": "Ester này là một ester no, đơn chức, mạch hở."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Phần trăm khối lượng oxygen trong isopropyl formate là 37,5%.",
            "isCorrect": false,
            "explanation": "."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Isopropyl formate được điều chế từ propyl alcohol và formic acid.",
            "isCorrect": false,
            "explanation": "HCOOH (fomic acid) và (CH3)2CHOH (isopropyl alcohol hoặc propan-2-ol)."
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. Ester này là một ester no, đơn chức, mạch hở.\nc. S. .\nd. S. HCOOH (fomic acid) và (CH3)2CHOH (isopropyl alcohol hoặc propan-2-ol)."
      },
      {
        "id": "c1_p2_q2",
        "number": 20,
        "displayNumber": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về acid béo và chất béo:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Các acid béo là acid hữu cơ, có công thức chung là RCOOH trong đó R là hydrogen hoặc gốc hydrocarbon.",
            "isCorrect": false,
            "explanation": "R không thể là H và gốc hydrocarbon mạch dài."
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Phản ứng thuỷ phân triglyceride trong môi trường acid là phản ứng thuận nghịch.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Bơ nhân tạo được điều chế bằng phản ứng hydrogen hoá chất béo có trong mỡ động vật.",
            "isCorrect": false,
            "explanation": "Chất béo trong mỡ động vật chứa phần lớn các gốc acid béo no nên không dùng để sản xuất bơ."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Các chất béo dạng rắn ở nhiệt độ phòng chứa chủ yếu các gốc acid béo no.",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. S. R không thể là H và gốc hydrocarbon mạch dài.\nb. Đ.\nc. S. Chất béo trong mỡ động vật chứa phần lớn các gốc acid béo no nên không dùng để sản xuất bơ.\nd. Đ."
      },
      {
        "id": "c1_p2_q3",
        "number": 21,
        "displayNumber": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về chất béo:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Các chất béo thường không tan trong nước và nhẹ hơn nước.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Chất béo là triester của glycerol với các acid đơn chức.",
            "isCorrect": false,
            "explanation": "Chất béo là triester của glycerol với các acid béo."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Cho dầu ăn vào nước, lắc đều, sau đó thu được dung dịch đồng nhất.",
            "isCorrect": false,
            "explanation": "Dầu ăn không tan trong nước và nhẹ hơn nước nên tách lớp."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Phản ứng hydrogen hoá chất béo dùng để chuyển gốc acid béo không no thành gốc acid béo no.",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. Chất béo là triester của glycerol với các acid béo.\nc. S. Dầu ăn không tan trong nước và nhẹ hơn nước nên tách lớp.\nd. Đ."
      },
      {
        "id": "c1_p2_q4",
        "number": 22,
        "displayNumber": 4,
        "part": 2,
        "type": "true_false",
        "text": "Quan sát hình sau:\nHình . Minh hoạ phương pháp điều chế isoamyl acetate trong phòng thí nghiệm",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Hỗn hợp chất lỏng trước phản ứng trong bình cầu có nhánh gồm isoamyl alcohol, acetic acid và sulfuric acid đặc.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Nước làm lạnh cho chảy vào ống sinh hàn ở vị trí (1) và chảy ra ở vị trí (2).",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Trong phễu chiết, lớp chất lỏng nặng hơn có thành phần chính là isoamyl acetate.",
            "isCorrect": false,
            "explanation": "Lớp chất lỏng nặng hơn là nước còn ester nhẹ hơn nước."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Nhiệt kế dùng để kiểm soát nhiệt độ trong bình cầu có nhánh.",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. Đ.\nc. S. Lớp chất lỏng nặng hơn là nước còn ester nhẹ hơn nước.\nd. Đ."
      },
      {
        "id": "c1_p3_q1",
        "number": 23,
        "displayNumber": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các tính chất sau: (1) tham gia phản ứng thủy phân, (2) tan nhiều trong nước, (3) nhiệt độ sôi cao hơn nhiều so với alcohol và carboxylic acid có phân tử khối tương đương, (4) có mùi thơm hoa quả chín. Có bao nhiêu tính chất của ester?",
        "correctAnswer": "2",
        "solution": "Đáp án: 2."
      },
      {
        "id": "c1_p3_q2",
        "number": 24,
        "displayNumber": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho glycerol phản ứng với hỗn hợp hai acid béo C17H35COOH và C15H31COOH. Có bao nhiêu loại triester được tạo ra tối đa?",
        "correctAnswer": "6",
        "solution": "Đáp án: 6."
      },
      {
        "id": "c1_p3_q3",
        "number": 25,
        "displayNumber": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Thuỷ phân ester E có công thức phân tử C4H8O2 với xúc tác acid vô cơ loãng, thu được hai sản phẩm hữu cơ X, Y (chỉ chứa các nguyên tử C, H, O). Từ X có thể điều chế trực tiếp ra Y bằng một phản ứng duy nhất. Khối lượng mol phân tử của chất X là bao nhiêu?",
        "correctAnswer": "46",
        "solution": "Đáp án: 46.\nE: CH3COOC2H5  X: C2H5OH và Y: CH3COOH."
      },
      {
        "id": "c1_p3_q4",
        "number": 26,
        "displayNumber": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Dầu hạt hướng dương có thể được sử dụng đế làm bơ thực vật bằng phản ứng hydrogen hoá. Triacylglycerol (X) trong dầu hạt hướng dương chứa hai gốc linoleate và một gốc oleate. Cho 0,1 mol (X) phản ứng hoàn toàn với khí hydrogen dư, số mol khí hydrogen tham gia phản ứng là bao nhiêu?",
        "correctAnswer": "0,5",
        "solution": "Đáp số: 0,5.\nCông thức của chất béo là: (C17H31COO)2(C17H33COO)C3H5 có 5 pi tạo gốc\n0,1 mol X phản ứng với 0,3 mol H2."
      },
      {
        "id": "c1_p3_q5",
        "number": 27,
        "displayNumber": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Methyl salicylate dùng làm thuốc xoa bóp giảm đau, được điều chế theo phản ứng sau:\nHOC6H4COOH + CH3OH  HOC6H4COOCH3 + H2O\nsalicylic acid      methanol                 methyl salicylate\nĐể sản xuất 1,9 triệu tuýp thuốc xoa bóp giảm đau cần tối thiểu m tấn salicylic acid. Biết mỗi tuýp thuốc chứa 2,7 gam methyl salicylate và hiệu suất phản ứng tính theo salicylic acid là 75%. Giá trị của m là bao nhiêu?",
        "correctAnswer": "6,21",
        "solution": "Đáp án: 6,21.\nmmethyl salicylate (3,8 triệu tuýp) = 2,7.1,9.106 = 5,13 tấn.\nHOC6H4COOH + CH3OH  HOC6H4COOCH3 + H2O\nmsalicylic acid = tấn"
      },
      {
        "id": "c1_p3_q6",
        "number": 28,
        "displayNumber": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu ester hai chức có công thức phân tử C4H6O4 là đồng phân cấu tạo của nhau?",
        "correctAnswer": "5",
        "solution": "Đáp án: 5.\nHCOO-CH2-CH2-OOCH, CH3-OOC-COO-CH3, HCOO-CH2-COO-CH3, HCOO-CH(CH3)-OOCH, HCOO-CH2-OOC-CH3.\n------------------------- HẾT -------------------------\n- Thí sinh không sử dụng tài liệu.\n- Giám thị không giải thích gì thêm.\nCHƯƠNG I. ESTER - LIPID\n(Đề có 4 trang)"
      }
    ]
  },
  {
    "id": "hoa12_c1_de_014",
    "code": "014",
    "title": "Đề Kiểm Tra Số 4 - Tổng Hợp Chương 1 (Mã 014)",
    "chapter": "Chương 1: Ester - Lipid",
    "topic": "Tổng hợp Chương 1",
    "timeLimit": 50,
    "totalQuestions": 28,
    "questions": [
      {
        "id": "c1_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi để lâu trong không khí, chất béo sẽ",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "bị bay hơi",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bị nóng chảy",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có mùi khó chịu",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "có mùi thơm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester CH3COOCH=CH2 có tên gọi là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "vinyl acetate",
            "isCorrect": true
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
            "text": "ethyl formate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "vinyl formate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng và chất giặt rửa có đặc điểm chung nào sau đây?",
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
            "text": "Là muối sodium hoặc potassium của acid béo",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Là muối sulfonate hoặc sulfate của acid béo",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thường có cấu tạo gồm hai phần là phần không phân cực (kị nước) và phần phân cực (ưa nước)",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuỷ phân methyl propanoate trong môi trường acid thu được carboxylic acid và alcohol nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOH vả C3H7OH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOH và C2H5OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C2H5COOH và C2H5OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C2H5COOH và CH3OH",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây được sử dụng làm xà phòng?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOK",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3[CH2]16OSO3Na",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C15H31COONa",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C15H31COOCH3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức nào sau đây có thể là công thức của chất béo?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOCH2C6H5",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C3H5(OOCC4H9)3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(C17H33COO)2C2H4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(C17H31COO)3C3H5",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ngoài sản phẩm phụ là nước, chất hữu cơ nào sau đây được hình thành từ phản ứng hoá học đã cho?",
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
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mỡ động vật, dầu thực vật đều không tan trong chất nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Benzene",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hexane",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chloroform",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức cấu tạo của tristearin tạo bởi glycerol và stearic acid lả",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(C17H35COO)3C3H5",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(C17H33COO)3C3H5",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C17H35COOC3H5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(C15H31COO)3C3H5",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch nào sau đây là chất giặt rửa tự nhiên?",
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
            "text": "Nước quả dâu",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là không đúng?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Benzyl acetate có công thức phân tử là C9H10O2",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng ester hóa có hiệu suất nhỏ hơn 100%",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ester CH3COOCH=CH2 được điều chế trực tiếp từ carboxylic acid và alcohol",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ester là những chất lỏng hoặc chất rắn ở nhiệt độ thường",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng hóa triglyceride X trong dung dịch NaOH, thu được glycerol và hai muối sodium oleate, sodium palmitate (có tỉ lệ mol tương ứng 1 : 2). Số công thức cấu tạo của X thỏa mãn là",
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
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất giặt rửa tổng hợp chủ yếu được sản xuất từ",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "mỡ động vật",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dầu thực vật",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "quả bồ kết, bồ hòn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dầu mỏ",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Margarin là một loại bơ nhân tạo được sản xuất chủ yếu từ dầu thực vật. Để có được bơ nhân tạo từ dầu thực vật người ta thực hiện quá trình",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "làm lạnh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "xà phòng hóa",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "oxi hóa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hydrogen hóa",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thủy phân ester no, hai chức, mạch hở G thu được muối X (mạch carbon không phân nhánh, phân tử không chứa hydrogen) và alcohol Y. Trong thực tế, Y được pha vào xăng để tạo thành xăng sinh học E5. Công thức phân tử của G là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C4H4O4",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C6H10O4",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C6H8O4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C4H6O4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "X, Y, Z là 3 chất hữu cơ được kí hiệu ngẫu nhiên trong số các chất HCOOCH3, CH3COOH và CH3CH2CH2OH. Nhiệt độ sôi của X, Y, Z được cho trong bảng sau:\nChất\nX\nY\nZ\nNhiệt độ sôi (°C)\n31,8\n97,0\n118,0\nCác chất X, Y lần lượt là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOCH3 và CH3COOH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOH và HCOOCH3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH3CH2CH2OH và CH3COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOCH3 và CH3CH2CH2OH",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 0,1 mol butanoic acid tác dụng với 0,1 mol methyl alcohol có mặt H2SO4 đặc lảm xúc tác. Khối lượng ester tạo thành là (giả thiết 70% alcohol chuyển hoá thành ester).",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "7,14",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "6,16",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "7,0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "8,12",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho vài giọt dầu ăn vào dung dịch xà phòng, lắc đều. Hiện tượng quan sát được là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dầu ăn không tan và nổi lên trên",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dầu ăn không tan và chìm xuống dưới",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dầu ăn tan vào dung dịch xà phòng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dầu ăn kết tủa lắng xuống dưới đáy",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p2_q1",
        "number": 19,
        "displayNumber": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về acid béo và chất béo:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Acid béo thường có gốc hydrocarbon mạch dài và có số nguyên tử carbon lẻ.",
            "isCorrect": false,
            "explanation": "Acid béo có số carbon chẵn."
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Khi xà phòng hoá chất béo, sản phẩm thu được là glycerol và các acid đơn chức.",
            "isCorrect": false,
            "explanation": "Sản phẩm thu được là muối của acid béo và glycerol."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Chất béo có nhiều gốc acid no thường ở dạng rắn, còn chất béo có nhiều gốc acid không no thường ở dạng lỏng.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Acid béo omega-3 là các acid béo không no có liên kết đôi đầu tiên ở vị trí số 3 nếu đánh số từ nhóm carboxyl (-COOH).",
            "isCorrect": false,
            "explanation": "Đánh từ vị trí nhóm methyl đến vị trí nối đôi đầu tiên."
          }
        ],
        "solution": "Đáp án:\na. S. Acid béo có số carbon chẵn.\nb. S. Sản phẩm thu được là muối của acid béo và glycerol.\nc. Đ.\nd. S. Đánh từ vị trí nhóm methyl đến vị trí nối đôi đầu tiên."
      },
      {
        "id": "c1_p2_q2",
        "number": 20,
        "displayNumber": 2,
        "part": 2,
        "type": "true_false",
        "text": "Ester là một loại hợp chất hữu cơ phổ biến và có vai trò quan trọng trong lĩnh vực hoá học và công nghiệp như làm dung môi, chất tạo hương, nguyên liệu tổng hợp polymer,... Các ester chủ yếu được điều chế từ phản ứng ester hoá.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Ester là sản phẩm của phản ứng giữa carboxylic acid và alcohol.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Ester là hợp chất hữu cơ trong phân tử có nhóm –COO–.",
            "isCorrect": false,
            "explanation": "Cách viết ở trên là gốc anion. Cách viết đúng là -COO-."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Ester ethyl acetate được dùng làm dung môi để tách, chiết chất hữu cơ.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Ester ethyl butyrate được dùng sản xuất chất dẻo.",
            "isCorrect": false,
            "explanation": "Ester methyl methacrylate dùng sản xuất chất dẻo."
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. Cách viết ở trên là gốc anion. Cách viết đúng là -COO-.\nc. Đ.\nd. S. Ester methyl methacrylate dùng sản xuất chất dẻo."
      },
      {
        "id": "c1_p2_q3",
        "number": 21,
        "displayNumber": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về xà phòng và chất giặt rửa tổng hợp:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Chất giặt rửa thường là muối sodium alkylsulfate hoặc alkylbenzene sulfonate.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Khi giặt rửa bằng nước cứng nên sử dụng xà phòng.",
            "isCorrect": false,
            "explanation": "Nước cứng tạo kết tủa với xà phòng."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Chất giặt rửa tổng hợp thường được điều chế từ chất béo.",
            "isCorrect": false,
            "explanation": "Chất giặt rửa tổng hợp thường được điều chế từ dầu mỏ."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Mỡ động vật, dầu thực vật là nguyên liệu để sản xuất xà phòng.",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. Nước cứng tạo kết tủa với xà phòng.\nc. S. Chất giặt rửa tổng hợp thường được điều chế từ dầu mỏ.\nd. Đ."
      },
      {
        "id": "c1_p2_q4",
        "number": 22,
        "displayNumber": 4,
        "part": 2,
        "type": "true_false",
        "text": "Diethyl phthalate (còn gọi là DEP) được sử dụng làm thuốc trị ghẻ ngứa, côn trùng đốt. Công thức cấu tạo của DEP được biểu diễn như sau:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "DEP là ester hai chức.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "DEP có chứa 10 nguyên tử carbon trong phân tử.",
            "isCorrect": false,
            "explanation": "Có 12 nguyên tử carbon."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Phần trăm khối lượng của nguyên tố oxygen trong phân tử DEP là 31,1%.",
            "isCorrect": false,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "DEP được tạo thành từ carboxylic acid đơn chức và alcohol hai chức.",
            "isCorrect": false,
            "explanation": "DEP được tạo thành từ acid hai chức C6H4(COOH)2 và alcohol đơn chức C2H5OH."
          }
        ],
        "solution": "Đáp án:\nC12H14O4\na. Đ.\nb. S. Có 12 nguyên tử carbon.\nc. S.\nd. S. DEP được tạo thành từ acid hai chức C6H4(COOH)2 và alcohol đơn chức C2H5OH."
      },
      {
        "id": "c1_p3_q1",
        "number": 23,
        "displayNumber": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu nguyên tử oxgyen có trong một phân tử triglyceride?",
        "correctAnswer": "6",
        "solution": "Đáp án: 6."
      },
      {
        "id": "c1_p3_q2",
        "number": 24,
        "displayNumber": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Acid béo là thành phần quan trọng của một chế độ ăn uống lành mạnh. Cho biết các acid béo là stearic acid, oleic acid và linoleic acid và nhiệt độ nóng chảy của các acid béo trên theo thứ tự ngẫu nhiên lần lượt là –5 °C, 13 °C và 69 °C. Cho biết giá trị nhiệt độ nóng chảy của linoleic acid là bao nhiêu độ C?",
        "correctAnswer": "–5",
        "solution": "Đáp án: –5.\nStearic acid (C17H35COOH) là acid béo no và có phân tử khối lớn nhất nên nhận giá trị 69oC.\nOleic acid (C17H33COOH) và linoleic acid (C17H31COOH) tương ứng với 13oC và -5oC."
      },
      {
        "id": "c1_p3_q3",
        "number": 25,
        "displayNumber": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: CH3[CH2]7CH=CH[CH2]7COONa, CH3[CH2]14COOK, CH3[CH2]10COOK và CH3COONa. Có bao nhiêu chất có thể là thành phần chính của xà phòng?",
        "correctAnswer": "3",
        "solution": "Đáp án: 3"
      },
      {
        "id": "c1_p3_q4",
        "number": 26,
        "displayNumber": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu chất hữu cơ đơn chức, mạch hở khác nhau ứng với công thức phân tử C4H8O2?",
        "correctAnswer": "6",
        "solution": "Đáp số: 6.\n- Ester (4 đồng phân): HCOOCH2CH2CH3; HCOOCH(CH3)CH3; CH3COOC2H5; C2H5COOCH3\n- Acid (2 đồng phân): CH3CH2CH2COOH; CH3CH(CH3)COOH."
      },
      {
        "id": "c1_p3_q5",
        "number": 27,
        "displayNumber": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Xà phòng hoá hoàn toàn 0,1 mol ester E đơn chức, mạch hở bằng dung dịch NaOH vừa đủ thu được muối F và alcohol G. Biết khối lượng muối F thu được lớn hơn khối lượng ester E đã tham gia xà phòng hoá. Khối lượng alcohol G thu được là bao nhiêu gam?",
        "correctAnswer": "3,2",
        "solution": "Đáp án: 3,2.\nRCOOR’ + NaOH  RCOONa + R’OH\n0,10,10,1\nmRCOONa > mRCOOR’  23 > R’  R’ là 15 (-CH3)\nVậy mCH3OH = 0,1.32 = 3,2g"
      },
      {
        "id": "c1_p3_q6",
        "number": 28,
        "displayNumber": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Một loại mỡ động vật có chứa 30% tristearin, 40% tripalmitin và 30% triolein (về khối lượng). Xà phòng hoá 1 tấn mỡ trên bằng dung dịch NaOH với hiệu suất 85%. Lượng muối thu được dùng để sản xuất xà phòng. Biết loại xà phòng này có 72% khối lượng là muối của acid béo. Tính khối lượng xà phòng thu được là bao nhiêu tấn? (Kết quả làm tròn đến hàng phần trăm).",
        "correctAnswer": "1,22",
        "solution": "Đáp án: 1,22.\nTrong 1 tấn mỡ có 0,3 tấn tristearin , 0,4 tấn tripalmitin và 0,3 tấn triolein\nMol của ba triglyceride trên là 1,1727.10-3\nTa có:\nBảo toàn khối lượng: 1 + 40.3,158.10-3 = mmuối + 92.1,1727.10-3  mmuối = 1,0328 tấn\nm xà phòng =  tấn.\n------------------------- HẾT -------------------------\n- Thí sinh không sử dụng tài liệu.\n- Giám thị không giải thích gì thêm.\nCHƯƠNG I. ESTER - LIPID\n(Đề có 4 trang)"
      }
    ]
  },
  {
    "id": "hoa12_c1_de_015",
    "code": "015",
    "title": "Đề Kiểm Tra Số 5 - Tổng Hợp Chương 1 (Mã 015)",
    "chapter": "Chương 1: Ester - Lipid",
    "topic": "Tổng hợp Chương 1",
    "timeLimit": 50,
    "totalQuestions": 28,
    "questions": [
      {
        "id": "c1_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số nhóm chức ester có trong một phân tử triglyceride là",
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
            "text": "2",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số nguyên tử carbon trong phân tử methyl formate là",
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
            "text": "4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mùi thơm trong nhiều loại hoa quả, tinh dầu thực vật, ... là mùi của ester. Để có ester dùng làm nguyên liệu - hương liệu, trước hết người ta thu hái, đem thái nhỏ và ngâm với nước. Phương pháp nào sau đây để tách riêng ester ra khỏi hỗn hợp?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chưng cất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chiết",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kết tinh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sắc kí cột",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester nào sau đây được sử dụng để điều chế thủy tinh hữu cơ?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Vinyl acetate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Methyl acrylate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Isopropyl acetate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methyl methacrylate",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, chất nào sau đây tồn tại ở trạng thái rắn?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tristearin",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Methyl acetate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Triolein",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ethanol",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên gọi của ester CH3COOCH2CH2CH3 là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ethyl ethanoate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Isopropyl ethanoate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Propyl ethanoate",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methyl propanoate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đun nóng triglyceride trong dung dịch NaOH dư đến phản ứng hoàn toàn luôn thu được chất nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ethanol",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ethylene glycol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Glycerol",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methanol",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có bao nhiêu đồng phân ester của fomic acid ứng với công thức phân tử C4H8O2?",
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
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuỷ phân methyl acetate trong dung dịch KOH, thu được alcohol nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C2H5OH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C3H7OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH3CHO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3OH",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mỡ lợn hoặc dầu dừa có thể dùng làm nguyên liệu để sản xuất xà phòng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sử dụng dầu, mỡ chiên lại nhiều lần rất có hại cho sức khỏe",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Một số ester có mùi thơm được dùng làm chất tạo hương cho thực phẩm và mỹ phẩm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ester tạo được liên kết hydrogen liên phân tử như nước",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình vẽ sau đây mô tả thí nghiệm điều chế chất hữu cơ Y:\nPhản ứng nào sau đây xảy ra trong thí nghiệm trên?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2C6H12O6 + Cu(OH)2  (C6H11O6)2Cu + H2O",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOH + C2H5OH  CH3COOC2H5 + H2O",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H2NCH2COOH + NaOH  H2NCH2COONa + H2O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3COOH + NaOH  CH3COONa + H2O",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong thực tế, người ta dùng phản ứng nào sau đây để điều chế xà phòng?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đun nóng acid béo với dung dịch kiềm",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đun nóng chất béo với dung dịch kiềm",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đun nóng glycerol với các acid béo",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đun nóng acid béo hoặc chất béo với dung dịch kiềm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để tẩy vết dầu, mỡ bám trên quần áo, sử dụng chất nào sau đây là phù hợp nhất?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước cất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch sodium hydroxide",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch nước Javel",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch xà phòng",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây được sử dụng làm xà phòng?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3[CH2]16OSO3Na",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C2H5COOK",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C17H35COONa",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C15H31COOH",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên nhân nào làm cho bồ kết có khả năng giặt rửa vì:",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "bồ kết có những chất có cấu tạo kiểu đầu phân cực gắn với đuôi không phân cực",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bồ kết có thành phần là ester của glycerine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "trong bồ kết có những chất oxi hóa mạnh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "trong bồ kết có chất khử mạnh",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thông thường, nếu mạch carbon của chất giặt rửa tổng hợp không phân nhánh thì chất tẩy rửa đó dễ phân huỷ sinh học hơn so với mạch carbon phân nhánh. Chất tẩy rửa nào sau đây thân thiện với môi trường nhất?",
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
            "text": "",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng hóa hoàn toàn 8,8 gam ester X có công thức phân tử C4H8O2 bằng một lượng dung dịch NaOH vừa đủ, cô cạn dung dịch sau phản ứng, thu được 8,2 gam muối khan. Tên gọi của X là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "propyl formate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "methyl propionate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ethyl acetate",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "isopropyl formate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho vài giọt dầu ăn vào nước, lắc đều. Hiện tượng quan sát được là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dầu ăn không tan và nổi lên trên",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dầu ăn không tan và chìm xuống dưới",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dầu ăn tan vào nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dầu ăn kết tủa lắng xuống dưới đáy",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p2_q1",
        "number": 19,
        "displayNumber": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho các nhận định sau về xà phòng:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Chất kị nước là những chất không tan trong dầu mỡ, hydrocarbon,..",
            "isCorrect": false,
            "explanation": "Chất kị nước là những chất không tan trong nước nhưng tan được trong dầu mỡ, hydrocarbon,.."
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Muối sodium hoặc potassium của carboxylic acid được dùng làm xà phòng.",
            "isCorrect": false,
            "explanation": "Muối sodium hoặc potassium của acid béo dùng làm xà phòng."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Xà phòng bị giảm hoặc mất tác dụng tẩy rửa khi dùng nước cứng vì gốc acid béo dễ kết tủa với cation Ca2+, Mg2+.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Xà phòng, chất giặt rửa tan vào nước tạo dung dịch có sức căng bề mặt nhỏ làm cho vật cần giặt rửa dễ thấm ướt.",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. S. Chất kị nước là những chất không tan trong nước nhưng tan được trong dầu mỡ, hydrocarbon,..\nb. S. Muối sodium hoặc potassium của acid béo dùng làm xà phòng.\nc. Đ.\nd. Đ."
      },
      {
        "id": "c1_p2_q2",
        "number": 20,
        "displayNumber": 2,
        "part": 2,
        "type": "true_false",
        "text": "Linoleic acid là một trong những acid béo có lợi cho sức khỏe tim mạch, ngăn ngừa các bệnh về tim, động mạch vành. Linoleic acid có cấu tạo như hình dưới đây:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Linoleic acid thuộc loại acid béo Omega-6.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Công thức của triglyceride được tạo thành bởi linoleic acid và glycerol là (C17H33COO)3C3H5.",
            "isCorrect": false,
            "explanation": "(C17H31COO)3C3H5."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Linoleic acid có mạch carbon không phân nhánh.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Trong phân tử linoleic acid có 2 liên kết .",
            "isCorrect": false,
            "explanation": "Trong phân tử linoleic acid có 3 liên kết ."
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. (C17H31COO)3C3H5.\nc. Đ.\nd. S. Trong phân tử linoleic acid có 3 liên kết ."
      },
      {
        "id": "c1_p2_q3",
        "number": 21,
        "displayNumber": 3,
        "part": 2,
        "type": "true_false",
        "text": "Ester X có mùi dứa chín. Xà phòng hóa X bằng dung dịch NaOH, thu được ethyl alcohol và sodium butyrate.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "X là ester no, đơn chức, mạch hở.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Công thức cấu tạo của X là CH3CH2COOCH2CH2CH2CH3.",
            "isCorrect": false,
            "explanation": "C3H7COOC2H5."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Phản ứng thủy phân ester X trong dung dịch NaOH là phản ứng một chiều.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Trong X, nguyên tố oxygen chiếm 24,62% về khối lượng.",
            "isCorrect": false,
            "explanation": "%O = 27,6%."
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. C3H7COOC2H5.\nc. Đ.\nd. S. %O = 27,6%."
      },
      {
        "id": "c1_p2_q4",
        "number": 22,
        "displayNumber": 4,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm để nghiên cứu phản ứng thuỷ phân ester theo các bước như sau:\nBước 1: Cho vào hai ống nghiệm (1) và (2) mỗi ống khoảng 1,0 mL ethyl acetate.\nBước 2: Thêm khoảng 2 mL dung dịch H2SO4 20% vào ống nghiệm (1) và khoảng 2 mL dung dịch NaOH 30% vào ống nghiệm (2).\nBước 3: Đun cách thuỷ ống nghiệm (1) và (2) trong cốc thuỷ tinh ở nhiệt độ 60 – 70 °C) Quan sát hiện tượng xảy ra ở hai ống nghiệm.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Sau bước 2, ống nghiệm (1) có sự tách lớp chất lỏng, ống nghiệm (2) thu được dung dịch đồng nhất.",
            "isCorrect": false,
            "explanation": "Cả hai ống nghiệm đều có hiện tượng phân tách lớp."
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Sau bước 3, ống nghiệm (2) tạo thành dung dịch đồng nhất.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Sau bước 3, thể tích lớp chất lỏng phía trên của ống nghiệm (1) giảm đi.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Trong ống nghiệm (1), hiệu suất của phản ứng có thể đạt được 100%.",
            "isCorrect": false,
            "explanation": "Phản ứng thủy phân ester trong môi trường acid là phản ứng thuận nghịch."
          }
        ],
        "solution": "Đáp án:\na. S. Cả hai ống nghiệm đều có hiện tượng phân tách lớp.\nb. Đ.\nc. Đ.\nd. S. Phản ứng thủy phân ester trong môi trường acid là phản ứng thuận nghịch."
      },
      {
        "id": "c1_p3_q1",
        "number": 23,
        "displayNumber": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Geranyl acetate là ester có mùi hoa hồng, có công thức cấu tạo như hình dưới đây:\nTrong phân tử geranyl acetate có bao nhiêu nguyên tử hydrogen?",
        "correctAnswer": "20",
        "solution": "Đáp án: 20.\nCH3COOC10H17"
      },
      {
        "id": "c1_p3_q2",
        "number": 24,
        "displayNumber": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho glyceryl trioleate (hay triolein) lần lượt vào mỗi ống nghiệm chứa riêng biệt: Na, Cu(OH)2, CH3OH, dung dịch Br2, dung dịch NaOH. Trong điều kiện thích hợp, có bao nhiêu phản ứng xảy ra?",
        "correctAnswer": "2",
        "solution": "Đáp án: 2."
      },
      {
        "id": "c1_p3_q3",
        "number": 25,
        "displayNumber": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Trong số các vật phẩm tiêu dùng sau: xà phòng bánh, dầu gội đầu, nước bồ kết và baking soda (NaHCO3), có bao nhiêu vật phẩm có thành phần chất giặt rửa tự nhiên và tổng hợp?",
        "correctAnswer": "2",
        "solution": "Đáp án: 2."
      },
      {
        "id": "c1_p3_q4",
        "number": 26,
        "displayNumber": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Khi xà phòng hoá triglycerid X bằng dung dịch NaOH dư, đun nóng, thu được xà phòng gồm hỗn hợp ba muối sodium oleate, sodium stearate vả sodium palmitate. Có bao nhiêu đồng phân cấu tạo có thể có của X?",
        "correctAnswer": "3",
        "solution": "Đáp số: 3."
      },
      {
        "id": "c1_p3_q5",
        "number": 27,
        "displayNumber": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Một carboxylic acid X có hàm lượng các nguyên tố carbon và hydrogen lần lượt là 40,7% và 5,1% về khối lượng. Phổ khối lượng của X có kết quả như hình bên dưới.\nĐun 0,1 mol X với lượng dư ethanol có xúc tác H2SO4 đặc thu được m gam chất hữu cơ Z chỉ chứa một loại nhóm chức. Giá trị của m là bao nhiêu? Biết hiệu suất của phản ứng trên là 50%.",
        "correctAnswer": "8,7",
        "solution": "Đáp án: 8,7.\nMX = 118  X là C4H6O4\nC2H4(COOH)2 + 2C2H5OH  C2H4(COOC2H5)2 + 2H2O\n0,10,1\nmester = 0,1.174.50% = 8,7g"
      },
      {
        "id": "c1_p3_q6",
        "number": 28,
        "displayNumber": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Số miligam KOH dùng để xà phòng hoá hết lượng triglyceride có trong 1 g chất béo được gọi là chi số ester hoá của loại chất béo đó. Tính chỉ số ester của một loại chất béo chứa 65% tristearin và 23% triolein. (Kết quả làm tròn đến hàng đơn vị)",
        "correctAnswer": "166",
        "solution": "Đáp án: 166.\n(RCOO)3C3H5 + 3KOH  3RCOOK + C3H5(OH)3\n------------------------- HẾT -------------------------\n- Thí sinh không sử dụng tài liệu.\n- Giám thị không giải thích gì thêm.\nCHƯƠNG I. ESTER - LIPID\n(Đề có 4 trang)"
      }
    ]
  },
  {
    "id": "hoa12_c1_de_016",
    "code": "016",
    "title": "Đề Kiểm Tra Số 6 - Tổng Hợp Chương 1 (Mã 016)",
    "chapter": "Chương 1: Ester - Lipid",
    "topic": "Tổng hợp Chương 1",
    "timeLimit": 50,
    "totalQuestions": 28,
    "questions": [
      {
        "id": "c1_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phần ưa nước (“đầu” ưa nước) trong xà phòng là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhóm carboxylate",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhóm sulfate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "gốc hydrocarbon có mạch dài",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhóm sulfonate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng hóa hoàn toàn chất béo, thu được muối và alcohol nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ethanol",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Benzyl alcohol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Glycerol",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Propan-2-ol",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có bao nhiêu triglyceride mà khi xà phòng hoá hoàn toàn thu được glycerol cùng hỗn hợp chỉ gồm muối của palmitic acid và stearic acid?",
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
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester nào sau đây là sản phẩm của phản ứng ester hóa giữa benzoic acid và methyl alcohol?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOCH2C6H5",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C6H5CH2COOCH3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C6H5COOCH3",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3COOC6H5",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là sai?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thuỷ phân ester trong môi trường acid thường là phản ứng thuận nghịch",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thuỷ phân ester trong môi trường kiềm là phản ứng một chiều",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Isoamyl acetate có mùi chuối chín, được dùng làm hương liệu cho bánh kẹo",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các ester lỏng thường nặng hơn nước",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp, để chuyển hóa chất béo lỏng thành chất béo rắn, người ta dùng phản ứng nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng ester hóa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng hydrogen",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng oxi hóa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng xà phòng hóa",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là không đúng?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử chất béo chứa nhiều gốc acid béo no thì chất béo đó thường ở thể rắn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các chất béo không tan trong nước và nhẹ hơn nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất béo bị thủy phân không hoàn toàn trong môi trường acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất béo là đồng đẳng với dầu, mỡ dùng để bôi trơn động cơ",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có thể là chất béo?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOC2H5",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C15H31COOCH3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(C17H33COO)2C2H4",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(C17H35COO)3C3H5",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng hóa ester X có công thức phân tử C4H8O2 bằng dung dịch NaOH dư, thu được muối Y và alcohol Z bậc hai. Tên của X là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Isopropyl formate",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ethyl acetate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Propyl formate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methyl propionate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất: propionic acid (X), acetic acid (Y), ethyl alcohol (Z) và methyl formate (T). Dãy nào sau đây gồm các chất được sắp xếp theo chiều tăng dần nhiệt độ sôi từ trái sang phải?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "T, Z, Y, X",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Z, T, Y, X",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "T, X, Y, Z",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Y, T, X, Z",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hydrogen hóa 1,0 tấn triolein cần bao nhiêu m3 khí H2 (điều kiện chuẩn), biết hiệu suất của phản ứng là 88,4%.",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "74370",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "24790",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "24,79",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "74,37",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester methyl methacrylate là nguyên liệu của công nghiệp sản xuất polymer. Phát biểu nào sau đây là đúng?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Methyl methacrylate thuộc loại ester no, đơn chức, mạch hở",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức phân tử của methyl methacrylate là C6H10O2",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng thủy phân methyl methacrylate trong môi trường acid là phản ứng một chiều",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methyl methacrylate không có đồng phân hình học",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là thành phần chính của chất giặt rửa tồng hợp?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C15H31COONa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(C17H35COO)2Ca",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C17H35COOK",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester butyl acetate được dùng để pha sơn tổng hợp có cấu tạo là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOCH2CH2CH3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOCH2CH3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH3COOCH2CH2CH2CH3",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3CH2CH2COOCH3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Không nên dùng xà phòng khi giặt rửa với nước cứng vì",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cần dùng lượng nước nhiều hơn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "gây ô nhiễm môi trường",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ion Ca2+, Mg2+ làm giảm độ bền sợi vải",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xuất hiện kết tủa làm giảm tác dụng giặt rửa của xà phòng",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:\n(a) Xà phòng được điều chế từ mỡ lợn là chất giặt rửa tự nhiên.\n(b) Xà phòng có thể được sản xuất từ nguồn hydrocarbon có trong dầu mỏ.\n(c) Nước Javel và baking soda là các chất giặt rửa có nguồn gốc vô cơ.\n(d) Sodium laurylsulfate (CH3[CH2]10CH2OSO3Na) là chất giặt rửa tổng hợp.\nSố phát biểu đúng là",
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
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi phân tích thành phần ester X (mạch hở) thu được phần trăm khối lượng các nguyên tố như sau: 40,00% carbon, 6,67% hydrogen, còn lại oxygen. X thuộc dãy đồng đẳng của ester nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ester no, hai chức",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ester no, ba chức",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ester có một nối đôi C=C, đơn chức",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ester no, đơn chức",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hoá chất chủ đạo trong ngành công nghiệp sản xuất xà phòng là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "K2SO4",
            "isCorrect": false
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
            "text": "Mg(NO3)2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaOH",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p2_q1",
        "number": 19,
        "displayNumber": 1,
        "part": 2,
        "type": "true_false",
        "text": "Acid béo là một trong những thành phần quan trọng đối với hoạt động của cơ thể, giúp cơ thể đủ năng lượng để hoạt động tốt, cân bằng việc hấp thu thức ăn,…",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Trong acid béo omega-3, liên kết C=C ở vị trí nguyên tử carbon thứ 3 tính từ nhóm methyl (-CH3).",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Trong acid béo omega-6, liên kết C=C ở vị trí nguyên tử carbon thứ 6 tính từ nhóm carboxyl (-COOH).",
            "isCorrect": false,
            "explanation": "Đánh từ nhóm methyl."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Khi thực phẩm tiếp xúc với không khí, các acid béo no dễ bị oxi hóa và gây ra hiện tượng ôi, thiu.",
            "isCorrect": false,
            "explanation": "Acid béo không no dễ bị oxi hóa."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Dầu mỡ sau khi sử dụng có thể được dùng để tái chế thành nhiên liệu như dầu diesel, sinh học,…",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. S. Đánh từ nhóm methyl.\nc. S. Acid béo không no dễ bị oxi hóa.\nd. Đ."
      },
      {
        "id": "c1_p2_q2",
        "number": 20,
        "displayNumber": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho các triglyceride X, Y với công thức cấu tạo:",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Triglyceride X có tên gọi là tripalmitin.",
            "isCorrect": false,
            "explanation": "X là tristearin."
          },
          {
            "id": "b",
            "letter": "b",
            "text": "X là chất béo no, Y là chất béo không no.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "X, Y đều tan tốt trong nước.",
            "isCorrect": false,
            "explanation": "Chất béo không tan trong nước."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Hydrogen hoá Y thu được X.",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\nX là (C17H35COO)3C3H5 và Y là (C17H33COO)3C3H5.\na. S. X là tristearin.\nb. Đ.\nc. S. Chất béo không tan trong nước.\nd. Đ."
      },
      {
        "id": "c1_p2_q3",
        "number": 21,
        "displayNumber": 3,
        "part": 2,
        "type": "true_false",
        "text": "Xét thí nghiệm về xà phòng và chất giặt rửa tổng hợp:\nCó 4 ống nghiệm: ống (1) chứa 3 mL nước cất; ống (2) chứa 3 mL nước xà phòng; ống (3) chứa 3 mL nước xà phòng và 3 giọt dung dịch CaCl2 bão hòa; ống (4) chứa 3 mL nước giặt rửa tổng hợp và 3 giọt dung dịch CaCl2 bão hòa. Cho vào mỗi ống nghiệm 3 giọt dầu ăn và lắc đều.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Trong ống nghiệm (1), dầu ăn không tan và chìm xuống dưới.",
            "isCorrect": false,
            "explanation": "vì dầu ăn nhẹ hơn nước nên nổi lên trên."
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Trong ống nghiệm (2), dầu ăn tan tạo hỗn hợp đồng nhất.",
            "isCorrect": true,
            "explanation": "vì gốc kị nước của xà phòng hòa tan được dầu ăn tạo tạo hỗn hợp đồng nhất."
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Trong ống nghiệm (3) có xuất hiện kết tủa.",
            "isCorrect": true,
            "explanation": "vì có phản ứng tạo kết tủa giữa gốc acid béo và ion Ca2+."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Trong ống nghiệm (4), dầu ăn tan tạo hỗn hợp đồng nhất.",
            "isCorrect": true,
            "explanation": "vì nước giặt rửa tổng hợp không tạo kết tủa với CaCl2 và hòa tan được CaCl2 tạo hỗn hợp đồng nhất."
          }
        ],
        "solution": "Đáp án:\na. Sai vì dầu ăn nhẹ hơn nước nên nổi lên trên.\nb. Đúng vì gốc kị nước của xà phòng hòa tan được dầu ăn tạo tạo hỗn hợp đồng nhất.\nc. Đúng vì có phản ứng tạo kết tủa giữa gốc acid béo và ion Ca2+.\nd. Đúng vì nước giặt rửa tổng hợp không tạo kết tủa với CaCl2 và hòa tan được CaCl2 tạo hỗn hợp đồng nhất."
      },
      {
        "id": "c1_p2_q4",
        "number": 22,
        "displayNumber": 4,
        "part": 2,
        "type": "true_false",
        "text": "Salicylic acid (2-hydroxybenzoic acid) phản ứng với alcohol X (có sulfuric acid làm xúc tác), thu được chất Y (công thức C8H8O3, phân tử có nhóm chức ester) dùng làm thuốc giảm đau.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "X là ethyl alcohol.",
            "isCorrect": false,
            "explanation": "X là methanol."
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Công thức cấu tạo của Y là",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "X là chất đơn chức, Y là chất đa chức.",
            "isCorrect": false,
            "explanation": "Y là hợp chất hữu cơ tạp chức (OH: phenol và COO: ester)."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "1 mol chất Y phản ứng tối đa với 2 mol NaOH (trong dung dịch).",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\no-HOC6H4COOH + CH3OH  o-HOC6H4COOCH3 + H2O\na. S. X là methanol.\nb. Đ.\nc. S. Y là hợp chất hữu cơ tạp chức (OH: phenol và COO: ester).\nd. Đ."
      },
      {
        "id": "c1_p3_q1",
        "number": 23,
        "displayNumber": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Sodium palmitate là một thành phần quan trọng trong sản xuất xà phòng. Sodium palmitate có công thức cấu tạo như sau:\nTổng số các nguyên tử trong một phân tử sodium palmitate là bao nhiêu?",
        "correctAnswer": "50",
        "solution": "Đáp án: 50.\nC15H31COONa."
      },
      {
        "id": "c1_p3_q2",
        "number": 24,
        "displayNumber": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các nguyên liệu sau: (1) dầu mỏ, (2) dung dịch từ quả bồ hòn, (3) sulfuric acid, (4) potassium stearate (5) phenol, (6) sodium 4-dodecylbenzenesulfonate (CH3[CH2]11C6H4SO3Na). Có bao nhiêu nguyên liệu có tính giặt rửa?",
        "correctAnswer": "3",
        "solution": "Đáp án: 3."
      },
      {
        "id": "c1_p3_q3",
        "number": 25,
        "displayNumber": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các ester sau: HCOOC2H5, HCOOC6H5 (-C6H5: phenyl), CH3COOCH=CH2, CH3COOCH2CH2CH(CH3)2, CH2=CH-COOCH3. Số ester được điều chế bằng cách đun hỗn hợp gồm carboxylic acid và alcohol, sử dụng sulfuric acid đặc làm xúc tác?",
        "correctAnswer": "3",
        "solution": "Đáp án: 3."
      },
      {
        "id": "c1_p3_q4",
        "number": 26,
        "displayNumber": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng sau:\n(1) Đun nóng hỗn hợp 3 mL isoamyl acetate và 5 mL dung dịch sulfuric acid 0,1M.\n(2) Đun nóng hỗn hợp 3 mL ethyl acetate và 5 mL dung dịch sodium hydroxide 0,1M.\n(3) Đun nóng 5 gam dầu thực vật trong nước.\n(4) Đun nóng 3 mL ethyl bromide và 5 mL dung dịch sodium hydroxide 0,2M.\n(5) Cho 3 mL dung dịch acetic acid 0,1M vào ống nghiệm chứa 3 mL dung dịch sodium hydroxide 0,2M.\n(6) Đun nóng 3 gam tristearin và 5 mL dung dịch sodium hydroxide 0,2M.\nTrong các thí nghiệm trên, thí nghiệm nào xảy ra phản ứng xà phòng hóa?",
        "correctAnswer": "2",
        "solution": "Đáp án: 2."
      },
      {
        "id": "c1_p3_q5",
        "number": 27,
        "displayNumber": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Xà phòng hóa hoàn toàn 132,9 kg chất béo bằng dung dịch NaOH vừa đủ, thu được muối dùng để làm xà phòng và 13,8 kg glycerol. Hỏi dùng toàn bộ lượng muối trên trộn với chất phụ gia thì thu được bao nhiêu bánh xà phòng? Cho biết, mỗi bánh xà phòng nặng 100 gam, trong đó lượng muối của acid béo chiếm 72% về khối lượng. (Kết quả làm tròn đến hàng đơn vị).",
        "correctAnswer": "1904",
        "solution": "Đáp án: 1904.\nTa có:\nBảo toàn khối lượng: 132,9 + 40.0,45 = mmuối + 13,8  mmuối = 137,1 kg\nm xà phòng =  kg\nVậy số bánh xà phòng là  : 100 = 1904."
      },
      {
        "id": "c1_p3_q6",
        "number": 28,
        "displayNumber": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Chất béo là nguồn cung cấp năng lượng đáng kể cho cơ thể người. Theo nhu cầu dinh dưỡng khuyến nghị cho người Việt Nam (Bộ Y tế, 2016): Trung bình 1 gam chất béo cung cấp 9 Kcal và năng lượng từ chất béo đóng góp khoảng 30% tổng năng lượng cần thiết trong ngày, cơ thể người nam 18 tuối cần năng lượng trung bình 2470 Kcal/ngày. Một học sinh nam 18 tuổi cần tiêu thụ khoảng bao nhiêu gam chất béo trong thực phẩm trong một ngày để cung cấp đủ năng lượng từ chất béo cho hoạt động của cơ thể? (Kết quả làm tròn đến hàng phần mười).",
        "correctAnswer": "82,3",
        "solution": "Đáp án: 82,3.\n1 g cung cấp 9 kcal\nm g cung cấp 2470.30% = 741 kcal\nm = 741/9 = 82,3g.\n------------------------- HẾT -------------------------\n- Thí sinh không sử dụng tài liệu.\n- Giám thị không giải thích gì thêm.\nCHƯƠNG I. ESTER - LIPID\n(Đề có 4 trang)"
      }
    ]
  },
  {
    "id": "hoa12_c1_de_017",
    "code": "017",
    "title": "Đề Kiểm Tra Số 7 - Tổng Hợp Chương 1 (Mã 017)",
    "chapter": "Chương 1: Ester - Lipid",
    "topic": "Tổng hợp Chương 1",
    "timeLimit": 50,
    "totalQuestions": 28,
    "questions": [
      {
        "id": "c1_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là thành phần chủ yếu của xà phòng?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COONa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3[CH2]16COONa",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH3CH2OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3[CH2]16COOH",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là chất béo?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Glycerol",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tripalmitin",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ethyl acetate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Glycogen",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester nào sau đây có công thức phân tử là C3H6O2?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ethyl ethanoate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Methyl methanoate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Propyl methanoate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methyl ethanoate",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở nhiệt độ thường, chất nào sau đây có độ tan trong nước thấp nhất?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C2H5OH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C3H5(OH)3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH3COOC2H5",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH3COOH",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất giặt rửa tổng hợp là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hợp muối sodium hoặc potassium của acid béo và các chất phụ gia",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "là các chất được tổng hợp hóa học và có tác dụng giặt rửa như xà phòng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "là hỗn hợp hai muối sodium chloride, sodium hypochlorite và các chất phụ gia",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "là các chất được tổng hợp hóa học và có tác dụng tẩy màu",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Benzyl acetate là ester có mùi thơm của hoa nhài. Benzyl acetate có công thức nào sau đây (-C6H5 là gốc phenyl)?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH3COOC6H5",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH3COOCH2C6H5",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C6H5COOCH3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C6H5CH2COOCH3",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Loại dầu, mỡ nào sau đây không thuộc lipid?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mỡ động vật",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dầu thực vật",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dầu cá",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dầu mazut",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thủy phân triglyceride (C17H35COO)3C3H5 trong dung dịch NaOH, thu được muối có tên gọi nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sodium stearate",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sodium palmitate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sodium oleate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sodium acetate",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có bao nhiêu ester của methyl alcohol có công thức phân tử là C5H10O2?",
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
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điều nào sau đây không đúng khi nói về methyl acrylate?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi hydrogen hóa methyl acrylate thu được methyl propionate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phân tử methyl acrylate có một liên kết pi ()",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể điều chế methyl acrylate bằng phản ứng ester hóa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methyl acrylate có công thức phân tử C4H6O2",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cơ chế giặt rửa của xà phòng là do muối acid béo trong xà phòng có đặc điểm nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có nhóm -COONa hoặc -COOK tan trong dầu mỡ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có phần gốc hydrocarbon R- tan được trong nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có tính chất hoạt động bề mặt gồm một phần kị nước và một phần ưa nước",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có phản ứng thủy phân trong nước",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính chất nào sau đây không phải của triolein?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Là chất lỏng ở điều kiện thường",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tác dụng với Cu(OH)2 ở điều kiện thường, tạo ra dung dịch màu xanh lam",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thủy phân hoàn toàn triolein trong dung dịch NaOH, thu được sodium oleate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tác dụng với H2 dư (xúc tác Ni, đun nóng) tạo tristearin",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester không no có một liên kết C=C, đơn chức, mạch hở có công thức chung là",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CnH2n – 2O2 (n ≥ 3)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CnH2n - 2O2 (n ≥ 2)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CnH2n + 2O2 (n ≥ 2)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CnH2nO2 (n ≥ 2)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dầu cá biển có chứa nhiều acid béo nào sau đây?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Stearic acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Palmitic acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Acid béo omega-3",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Acid béo omega-6",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "c1_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo nguồn gốc, chất giặt rửa được chia thành hai loại: chất giặt rửa tự nhiên và chất giặt rửa tổng hợp. Phát biểu nào sau đây không đúng?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử chất giặt rửa có cấu tạo gồm hai phần, một phần ưa nước và một phần kị nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phân tử chất giặt rửa tổng hợp có phần kị nước là gốc hydrocarbon mạch dài tương tự xà phòng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Từ nguồn nguyên liệu dầu mỏ, có thể sản xuất được cả xà phòng và chất giặt rửa tổng hợp",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất giặt rửa tổng hợp dễ bị phân hủy sinh học bởi các vi sinh vật hơn xà phòng",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "c1_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:\n(1) So với các đồng phân là carboxylic acid, ester luôn có nhiệt độ sôi cao hơn.\n(2) Chất béo là diester của glycerol với acid béo.\n(3) Chất béo nhẹ hơn nước và không tan trong nước.\n(4) Chất béo được tiêu hoá trong cơ thể qua phản ứng thuỷ phân với xúc tác enzyme lipase, tạo glycerol và acid béo tương ứng.\n(5) Đun nóng ethyl acetate với dung dịch H2SO4 loãng có xảy ra phản ứng thuận nghịch.\nSố phát biểu đúng là",
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
        "correctAnswer": "B"
      },
      {
        "id": "c1_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong số các vật phẩm tiêu dùng sau: xà phòng bánh, dầu gội đầu, nước bồ kết và nước Javel. Số vật phẩm có thành phần chất giặt rửa tự nhiên là",
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
        "correctAnswer": "A"
      },
      {
        "id": "c1_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đường ống thoạt nước của bồn rửa chén, bát sau khi sử dụng một thời gian có thể bị tắc do chất béo dạng rắn (như glyceryl tristearate (tristearin) có trong mỡ động vật) đọng ở trong đường ống. Để thông tắc, có thể cho một ít NaOH dạng rắn vào đường ống thoát. Nếu dùng 12 g NaOH rắn thì có thể xà phòng hóa tối đa được bao nhiêu gam tristearin?",
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "89,0",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "267,0",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "80,6",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "241,8",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "c1_p2_q1",
        "number": 19,
        "displayNumber": 1,
        "part": 2,
        "type": "true_false",
        "text": "Lipid gồm chất béo, sáp, stearoid, phospholipid,… Trong cơ thể động vật, lipid giúp điều hòa, duy trì sự ổn định của thân nhiệt và bảo vệ cơ thể tránh những hình ảnh bất lợi từ tác động ngoại cảnh.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Sản phẩm của phản ứng ester hóa giữa glycerol với acid béo đều tạo thành lipid.",
            "isCorrect": false,
            "explanation": "Sản phẩm của phản ứng trên là chất béo."
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Vai trò chính của lipid trong cơ thể là dự trữ năng lượng và hòa tan các chất tan được trong chất béo.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Chất béo là thành phần chính của dầu, mỡ động, thực vật.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Chất béo có thành phần chủ yếu gốc acid béo no thường là chất rắn ở nhiệt độ thường.",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. S. Sản phẩm của phản ứng trên là chất béo.\nb. Đ.\nc. Đ.\nd. Đ."
      },
      {
        "id": "c1_p2_q2",
        "number": 20,
        "displayNumber": 2,
        "part": 2,
        "type": "true_false",
        "text": "Hợp chất hữu cơ đơn chức X có mùi thơm của quả dứa chín và được sử dụng trong tổng hợp dược phẩm,… Kết quả phân tích nguyên tố cho thấy X có %C = 58,82%, %H = 9,80% (về khối lượng), còn lại là oxygen. Trên phổ MS của X thấy xuất hiện peak của ion phân tử có giá trị m/z = 102. Trên phổ IR của X thấy xuất hiện tín hiệu đặc trưng ở 1740 cm-1.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "X là carboxylic acid no, đơn chức, có công thức phân tử C5H10O2.",
            "isCorrect": false,
            "explanation": "X không phải là acid."
          },
          {
            "id": "b",
            "letter": "b",
            "text": "X là ester no, đơn chức có công thức phân tử C5H10O2.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Phân tử X có tỉ lệ số nguyên tử carbon và hydrogen tương ứng là 2 : 1.",
            "isCorrect": false,
            "explanation": "Tỉ lệ C : H = 5 : 10 = 1 : 2."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Ở điều kiện thường, X phản ứng với NaOH với tỉ lệ mol tương ứng là 1 : 1.",
            "isCorrect": false,
            "explanation": "Ở nhiệt độ thường không xảy ra phản ứng thủy phân ester."
          }
        ],
        "solution": "Đáp án:\nX có mùi thơm và có xuất hiện tín hiệu đặc trưng ở 1740 cm-1  X là ester.\nTừ %C, %H, %O và m/z = 102 ta tìm được công thức của X là C5H10O2\na. S. X không phải là acid.\nb. Đ.\nc. S. Tỉ lệ C : H = 5 : 10 = 1 : 2.\nd. S. Ở nhiệt độ thường không xảy ra phản ứng thủy phân ester."
      },
      {
        "id": "c1_p2_q3",
        "number": 21,
        "displayNumber": 3,
        "part": 2,
        "type": "true_false",
        "text": "Triglyceride đóng vai trò là nguồn cung cấp năng lượng và chuyên chở các chất béo trong quá trình trao đổi chất. Cho triglyceride X có công thức cấu tạo như hình sau:\nCác kí hiệu (1), (2), (3) lần lượt là các gốc hydrocarbon trong cấu tạo của triglyceride X",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Công thức phân tử của X là C55H98O6.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Acid béo có gốc kí hiệu (2) thuộc loại acid béo omega-9.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Các gốc của acid béo không no trong phân tử X đều có cấu hình cis-.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Hydrogen hóa hoàn toàn 427 kg X bằng hydrogen (dư) ở nhiệt độ cao và áp suất cao, Ni xúc tác thu được 432 kg chất béo rắn.",
            "isCorrect": false,
            "explanation": "X có 4 pi tại gốc nên X + 4H2  (C15H31COO)(C17H35COO)(C17H35COO)C3H5"
          }
        ],
        "solution": "Đáp án:\n(C15H31COO)(C17H33COO)(C17H29COO)C3H5\na. Đ.\nb. Đ.\nc. Đ.\nd. S. X có 4 pi tại gốc nên X + 4H2  (C15H31COO)(C17H35COO)(C17H35COO)C3H5\n0,50,5\nm chất béo no = 0,5.862 = 431 kg"
      },
      {
        "id": "c1_p2_q4",
        "number": 22,
        "displayNumber": 4,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm xà phòng hóa chất béo theo các bước sau:\nBước 1: Cho vào bát sứ nhỏ khoảng 2 mL dầu ăn và 5 mL dung dịch NaOH 40%.\nBước 2: Đun sôi nhẹ hỗn hợp, liên tục khuấy đều bằng đũa thủy tinh khoảng 10 phút và thỉnh thoảng thêm nước cất để giữ cho thể tích hỗn hợp không đổi rồi để nguội hỗn hợp.\nBước 3: Rót thêm vào hỗn hợp 10 mL dung dịch NaCl bão hòa, khuấy nhẹ rồi để nguội.",
        "options": [
          {
            "id": "a",
            "letter": "a",
            "text": "Sau bước 3, hỗn hợp tách thành hai lớp: phía trên là chất rắn màu trắng, phía dưới là chất lỏng.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "b",
            "letter": "b",
            "text": "Vai trò của dung dịch NaCl bão hòa ở bước 3 là để tách muối của acid béo ra khỏi hỗn hợp.",
            "isCorrect": true,
            "explanation": ""
          },
          {
            "id": "c",
            "letter": "c",
            "text": "Nếu thay dầu ăn bằng dầu bôi trơn máy thì sau bước 3 vẫn thu được xà phòng.",
            "isCorrect": false,
            "explanation": "Dầu bôi trơn máy không có thành phần chính là chất béo."
          },
          {
            "id": "d",
            "letter": "d",
            "text": "Chất rắn thu được sau thí nghiệm trên có tính giặt rửa và là nguyên liệu để chế biến xà phòng.",
            "isCorrect": true,
            "explanation": ""
          }
        ],
        "solution": "Đáp án:\na. Đ.\nb. Đ.\nc. S. Dầu bôi trơn máy không có thành phần chính là chất béo.\nd. Đ."
      },
      {
        "id": "c1_p3_q1",
        "number": 23,
        "displayNumber": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất có công thức cấu tạo sau: HCOOC2H5, CH3COOH, CH3COOC2H5, H2NCH2COOH, C2H5OH, CH3COONH4, C3H5(OOCC15H31)3, CH3OOC-COOC2H5 và HCOOH. Có bao nhiêu chất thuộc loại ester?",
        "correctAnswer": "4",
        "solution": "Đáp án: 4."
      },
      {
        "id": "c1_p3_q2",
        "number": 24,
        "displayNumber": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Linoleic acid là acid béo thiết yếu cần thiết nhất trong cơ thể người do có thể bị chuyển hóa tạo ra nhiều acid béo omega-6 khác như arachidonic acid, docosatetraenoic acid,… Arachidonic acid chiếm khoảng 10 – 20% hàm lượng acid béo phospholipid trong cơ xương và có cấu tạo như hình sau:\nTổng số các nguyên tử trong một phân tử arachidonic acid là bao nhiêu?",
        "correctAnswer": "50",
        "solution": "Đáp án: 50.\nC20H32O2"
      },
      {
        "id": "c1_p3_q3",
        "number": 25,
        "displayNumber": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu nguyên liệu, hóa chất dùng để điều chế, sản xuất xà phòng trong số các nguyên liệu và hóa chất sau: dầu thực vật (1),  dung dịch sodium hydroxide (2), mỡ động vật (3), dung dịch calcium chloride bão hòa (4), alkane (lấy từ dầu mỏ) (5),  dung dịch sodium chloride bão hòa (6)?",
        "correctAnswer": "5",
        "solution": "Đáp án: 5."
      },
      {
        "id": "c1_p3_q4",
        "number": 26,
        "displayNumber": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Isoamyl acetate có mùi thơm đặc trưng của chuối chín nên còn được gọi là dầu chuối. Để điều chế isoamyl acetate trong phòng thí nghiệm, người ta đun nóng 4,0 g acetic acid và 5,0 g isoamyl alcohol có H2SO4 đặc làm xúc tác, thu được 3,82 g dầu chuối với hiệu suất phản ứng là x%. Hãy xác định giá trị của x. (Kết quả làm tròn đến hàng phần mười).",
        "correctAnswer": "51,8",
        "solution": "Đáp án: 51,8."
      },
      {
        "id": "c1_p3_q5",
        "number": 27,
        "displayNumber": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Từ ngành chế biến thịt trâu, bò,… thu được sản phẩm phụ là tristearin. Chất hữu cơ Z được dùng để sản xuất chất hoạt động bề mặt, chất tẩy rửa, chất làm mềm trong mĩ phẩm,… Từ tristearin điều chế Z theo sơ đồ sau:\nTristearin  X Y  Z\nTheo sơ đồ trên, từ 50 kg tristearin thu được tối đa bao nhiêu kg chất Z (giả sử hiệu suất của toàn bộ quá trình trên là 60%)? (Kết quả làm tròn đến hàng phần mười).",
        "correctAnswer": "30,1",
        "solution": "Đáp án: 30,1."
      },
      {
        "id": "c1_p3_q6",
        "number": 28,
        "displayNumber": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Chỉ số xà phòng hóa là số miligam KOH cần để xà phòng hóa 1 g chất béo. Theo TCVN 6044:2013. CODEXSTAN 211-1999, chỉ số xà phòng hóa trung bình của chất béo trong mỡ bò là 195. Khi xà phòng hóa hoàn toàn 600 kg mỡ bò thu được trong quá trình chế biến thực phẩm để nấu xà phòng, lượng NaOH cần lấy ít nhất là bao nhiêu kg? Biết mỡ bò chứa 96% chất béo. (Kết quả làm tròn đến hàng phần mười).",
        "correctAnswer": "80,2",
        "solution": "Đáp án: 80,2.\n------------------------- HẾT -------------------------\n- Thí sinh không sử dụng tài liệu.\n- Giám thị không giải thích gì thêm."
      }
    ]
  }
];

// ─── 2. BỘ 5 CHUYÊN ĐỀ RÈN LUYỆN THEO BẬC THANG (MỨC 1 -> 2 -> 3) ────────────
export const HOA12_CHUONG1_TOPICS: Chuong1Topic[] = [
  {
    "id": "c1_topic1_danh_phap",
    "title": "Chuyên đề 1: Danh Pháp IUPAC, Đồng Phân & Cấu Tạo Ester",
    "icon": "🏷️",
    "description": "Gọi tên ester theo chuẩn quốc tế mới 2024-2025, đếm đồng phân ester no đơn chức và đa chức.",
    "levels": [
      {
        "level": 1,
        "title": "Mức độ 1: Cơ bản - Lấy gốc",
        "target": "6 - 7 Điểm",
        "questions": [
          {
            "rawNum": 1,
            "text": "Hãy chọn định nghĩa đúng về ester?",
            "options": [
              {
                "letter": "A",
                "text": "Ester là những hợp chất hữu cơ trong phân tử có nhóm chức –COO–",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Ester là hợp chất sinh ra khi thay thế nhóm -OH trong nhóm carboxyl của carboxylic acid bằng nhóm OR’ (trong đó R’ là gốc hydrocarbon)",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Ester là sản phẩm thu được từ phản ứng giữa aldehyde và carboxylic acid",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Ester là hợp chất sinh ra khi thay thế -H trong nhóm hydroxy của alcohol bằng nhóm OR’ (trong đó R’ là gốc hydrocarbon)",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": "Đáp án: B."
          },
          {
            "rawNum": 3,
            "text": "Ester no, đơn chức, mạch hở có công thức tổng quát là",
            "options": [
              {
                "letter": "A",
                "text": "CnH2nO (n ≥ 2)",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CnH2n – 2O2 (n ≥ 2)",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CnH2n + 2O2 (n ≥ 2)",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CnH2nO2 (n ≥ 2)",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": "Đáp án: D.\n2. Danh pháp:\nTên của ester đơn chức: Tên gốc R’ + Tên gốc carboxylic acid (có đuôi ate)\nethanoatemethyl   methyl ethanoate hay methyl acetate\nhay acetate\nTên R’\nTên RCOO-\nCH3-: methyl\nCH3CH2-: ethyl\nCH3CH2CH2-: propyl\nCH2=CH-: vinyl\nC6H5CH2-:benzyl\nC6H5-: phenyl\nHCOO- : formate (methanoate)\nCH3COO-: acetate(ethanoate)\nCH3CH2COO-: propionate (propanoate)\nCH2=CH-COO-: acrylate (propenoate)\nCH2=C(CH3)-COO-: methacrylate\nC6H5COO-: benzoate\n(COO-)2: oxalate"
          },
          {
            "rawNum": 6,
            "text": "Ứng với công thức phân tử C4H6O2 có số đồng phân cấu tạo ester mạch hở là",
            "options": [
              {
                "letter": "A",
                "text": "3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "4",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "5",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "6",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": "Đáp án: C.\nHCOOCH2-CH=CH2, HCOO-CH=CH-CH2, HCOO-C(CH3)=CH2, CH3COOCH=CH2, CH2=CHCOOCH3."
          },
          {
            "rawNum": 7,
            "text": "Chất X có công thức phân tử C3H6O2, là ester của acetic acid. Công thức cấu tạo của X là",
            "options": [
              {
                "letter": "A",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": "Đáp án: B.\nX có dạng RCOOR’ là ester của CH3COOH nên R’ là -CH3  CTCT của X là CH3COOCH3.\n3. Tính chất vật lí:\nCác ester không tạo được liên kết hydrogen với nhau nên có nhiệt độ sôi thấp hơn so với alcohol và carboxylic có phân tử khối tương đương.\n(Dãy so sánh nhiệt độ sôi: Acid > Alcohol > Ester, Aldehyde > Hydrocarbon).\nCác ester có phân tử khối thấp và trung bình thường chất lỏng ở nhiệt độ phòng. Những ester có phân tử khối lớn thường ở dạng rắn. Ester thường nhẹ hơn nước và ít tan trong nước.\nMột số ester có mùi thơm của hoa, quả chín: isoamyl acetate (mùi chuối chín); benzyl acetate (mùi hoa nhài); ethyl butyrate (mùi dứa chín), …"
          },
          {
            "rawNum": 10,
            "text": "Nhận định nào sau đây là không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Các ester là chất lỏng hoặc chất rắn ở điều kiện thường",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Ester thường nhẹ hơn nước và tan tốt trong nước",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Một số ester có mùi thơm của hoa quả chín như isoamyl acetate (mùi chuối chín), benzyl acetate (mùi hoa nhài)…",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Ethyl alcohol có nhiệt độ sôi cao hơn methyl formate",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": "Đáp án: B.\nCác ester nhẹ hơn nước và tan ít trong nước."
          },
          {
            "rawNum": 15,
            "text": "Ester X có công thức phân tử C4H8O2. Thủy phân X trong dung dịch NaOH dư, thu được sản phẩm gồm sodium propionate và alcohol Y. Công thức của Y là",
            "options": [
              {
                "letter": "A",
                "text": "C3H5(OH)3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C2H5OH",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "C3H7OH",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3OH",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": "Đáp án: D.\nCH3CH2COOCH3 + NaOH  CH3CH2COONa + CH3OH (Y)"
          },
          {
            "rawNum": 16,
            "text": "Chất nào sau đây khi đun nóng với dung dịch H2SO4 loãng thu được sản phẩm có aldehyde?",
            "options": [
              {
                "letter": "A",
                "text": "CH3–COO–CH2–CH=CH2",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3–COO–C(CH3)=CH2",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH2=CH–COO–CH2–CH3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3–COO–CH=CH–CH3",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": "Đáp án: D.\nCH3COOCH=CH-CH3 + NaOH  CH3COONa + CH3-CH2-CHO"
          },
          {
            "rawNum": 17,
            "text": "Điều nào sau đây không đúng khi nói về methyl acrylate?",
            "options": [
              {
                "letter": "A",
                "text": "Khi hydrogen hoá methyl acrylate thu được methyl propionate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Trong phân tử methyl acrylate có một liên kết pi ",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Thủy phân methyl acrylate trong môi trường kiếm thu được muối và alcohol",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Methyl acrylate có công thức phân tử ",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": "Đáp án: B.\nMethyl acrylate : CH2=CHCOOCH3 có 2 liên kết ."
          },
          {
            "rawNum": 25,
            "text": "Nhận định nào sau đây sai?",
            "options": [
              {
                "letter": "A",
                "text": "Isoamyl acetate có mùi chuối chín, được dùng làm hương liệu cho bánh kẹo",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Ethyl acetate được sử dụng để tách caffeine khỏi cà phê",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Butyl acetate hòa tan cellulose nitrate tạo sơn mài",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Methyl methacrylate được dùng để sản xuất keo dán",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": "Đáp án: D.\nCÂU HỎI TỔNG HỢP KIẾN THỨC HỮU CƠ LỚP 11 VÀ 12CÂU HỎI TỔNG HỢP KIẾN THỨC HỮU CƠ LỚP 11 VÀ 12\nCÂU HỎI TỔNG HỢP KIẾN THỨC HỮU CƠ LỚP 11 VÀ 12\nCâu hỏi 1. Có bao nhiêu đồng phân đơn chức, mạch hở ứng với công thức phân tử C4H8O2?\nĐáp án: 6\nEster (4 đồng phân) : HCOOCH2CH2CH3; HCOOCH(CH3)CH3; CH3COOC2H5; C2H5COOCH3.\nCarboxylic acid (2 đồng phân): CH3CH2CH2COOH; CH3CH(CH3)COOH.\nCâu hỏi 2. Thực hiện phản ứng ester hóa giữa HOCH2CH2OH với hỗn hợp CH3COOH và C2H5COOH thu được tối đa bao nhiêu ester hai chức?\nA. 3B. 2C. 1D. 4.\nĐáp án: (CH3COO)2C2H4, (C2H5COO)2C2H4, CH3COOCH2CH2OOCC2H5.\nCâu hỏi 3. Cho phổ IR của ba chất hữu cơ như hình dưới đây:\n(a) (b)(c)\nHãy sắp xếp các chất HOCH2CH2OH (1); CH3CH2CHO (2); CH3COOCH3 (3). phù hợp với các hình (a), (b), (c) tạo thành một dãy ba chữ số (Ví dụ: 123, 231,…).\nĐáp án: 213.\na) Tín hiệu 2828 cm-1 và 2724 cm-1 là tín hiệu của liên kết C–H và tín hiệu 1733 là tín hiệu của nhóm C=O  Nhóm chức của hợp chất trên là aldehyde. Đây là phổ IR của hợp chất CH3CH2CHO (2).\nb) Tín hiệu 3350 cm-1 là tín hiệu của liên kết O–H. Đây là phổ IR của hợp chất HOCH2CH2OH (1).\nc) Tín hiệu 1748 cm-1 là tín hiệu của liên kết C=O và 1245 cm-1 là tín hiệu của liên kết C–O trong nhóm chức ester (-COO-). Đây là phổ IR của hợp chất CH3COOCH3 (3).\nCâu hỏi 4. Ester có mùi đặc trưng giống mùi táo và có công thức phân tử C5H10O2. Thủy phân X trong dung dịch NaOH, thu được muối sodium ethanoate và alcohol Y. Oxi hóa không hoàn Y thu được chất Z có phản ứng idoform. Công thức cấu tạo của X là\nA. CH3COOCH2CH2CH3.B. CH3CH2COOCH2CH3.\nC. CH3CH2CH2COOCH3.D. CH3COOCH(CH3)2.\nĐáp án:\nMuối thu được có là sodium ethanoate có công thức CH3COONa\nCH3COOCH2CH2CH3  CH3CH2CH2OH  CH3CH2CHO không có phản ứng idoform.\nCH3COOCH(CH3)2  CH3CH(OH)CH3  CH3COCH3 có phản ứng idoform (methyl cạnh carbonyl).\nCâu hỏi 5. Hai chất X và Y có cùng công thức phân tử C2H4O2. Chất X phản ứng được với dung dịch NaOH nhưng không phản ứng được với kim loại Na. Chất Y phản ứng được với kim loại Na, dung dịch NaOH và dung dịch Na2CO3. Công thức cấu tạo của X, Y lần lượt là\nA. HOCH2CHO, CH3COOH.B. HCOOCH3, HOCH2CHO.\nC. CH3COOH, HOCH2CHO. D. HCOOCH3, CH3COOH.\nĐáp án:\nX có chứa nhóm chức -COO- còn Y có nhóm chức -COOH.\nVậy CTCT của X và Y lần lượt là HCOOCH3 và CH3COOH.\nCâu hỏi 6. Thủy phân ester no, hai chức, mạch hở G thu được muối X (mạch carbon không phân nhánh, phân tử không chứa hydrogen) và alcohol Y. Trong thực tế, Y được pha vào xăng để tạo thành xăng sinh học E5. Công thức phân tử của G là\nA. C4H4O4.B. C6H10O4.C. C6H8O4.D. C4H6O4.\nĐáp án:\nMuối không chứa H là (COONa)2 và alcohol trong xăng E5 là C2H5OH\nCông thức cấu tạo của X là (COOC2H5)2: C6H10O4.\nCâu hỏi 7. Salicylic acid (2-hydroxybenzoic acid) phản ứng với alcohol X (có sulfuric acid làm xúc tác), thu được chất Y (công thức C8H8O3, phân tử có nhóm chức ester) dùng làm thuốc giảm đau. Mỗi phát biểu nào sau đây là đúng hay sai?\na) X là ethyl alcohol (C2H5OH).\nb) Công thức cấu tạo của Y là\nc) X là chất hữu cơ đơn chức còn Y là đa chức.\nd) 1 mol chất Y phản ứng tối đa với 2 mol NaOH (trong dung dịch).\nĐáp án:\nHOC6H4COOH + CH3OH ⇌ HOC6H4COOCH3 (methyl salicylate) + H2O\na) Sai. X là methyl alcohol.\nb) Đúng.\nc) Sai. X, Y đều là các hợp chất hữu cơ tạp chức.\nd) Đúng. HOC6H4COOCH3 + 2NaOH  NaOC6H4COONa + CH3OH + H2O.\nCâu hỏi 8. Cho sơ đồ chuyển hóa sau:\nX(C4H8O2)  Y  Z  X\nBiết X, Y, Z đều là các chất hữu cơ khác nhau. Mỗi phát biểu sau là đúng hay sai?\na) Tên gọi của X là ethyl ethanoate.\nb) Trên phổ IR của Y có một peak trong vùng 3500 – 3200 cm-1.\nc) Nhiệt độ sôi của Y cao hơn nhiệt độ sôi của Z.\nd) Dung dịch chất Z làm quỳ tím chuyển sang màu đỏ.\nĐáp án:\nX: CH3COOC2H5, Y: C2H5OH, Z: CH3COOH\na) Đúng.\nb) Đúng.\nc) Sai. Y có nhiệt độ sôi thấp hơn hơn Z.\nd) Đúng.\nCâu hỏi 9. Cho sơ đồ phản ứng sau:\nBiết rằng X, Y, Z, T, W là các hợp chất hữu cơ khác nhau; T chỉ chứa một loại nhóm chức. Mỗi phát biểu nào sau đây là đúng hay sai?\na) Y có trong nọc độc của kiến.\nb) Z có trong thành phần của nước rửa tay khô có tác dụng diệt khuẩn.\nc) Phần trăm khối của nguyên tố oxygen trong T là 36,36%.\nd) Công thức cấu tạo của W là HCOOCH3.\nĐáp án:\na) Sai. vì Y là CH3COOH có trong thành phần của giấm ăn.\nb) Đúng. vì Z là C2H5OH có trong thành phần của nước rửa tay khô có tác dụng diệt khuẩn.\nc) Sai. vì T: C9H14O6  %mO = .\nd) Sai. vì W là HCOOC2H5.\nCâu hỏi 10. Diethyl phthalate (còn gọi là DEP) được sử dụng làm thuốc trị ghẻ ngứa, côn trùng đốt. DEP có chứa vòng benzene và hai nhóm thế ở vị trí ortho. DEP được tổng hợp từ hydrocarbon thơm X có công thức phân tử C8H10 theo sơ đồ sau đây:\nMỗi phát biểu nào sau đây là đúng hay sai?\na) X có tên gọi là o-xylene.\nb) Trong phân tử chất Y không có liên kết hydrogen liên phân tử.\nc) Phần trăm khối lượng của carbon có trong phân tử chất Z là 64,86%.\nd) 1 mol chất Z tác dụng với 2 mol KOH trong dung dịch.\nĐáp án:\nDo DEP có hai nhóm thế ở vị trí ortho nên X sẽ có hai nhánh ở vị trí ortho. Vậy X là o-dimethylbenzene (o-xylene). Oxi hóa X sẽ tạo diacid Y (phtalic acid). Ester hóa Y sẽ tạo thành DEP.\na) Đúng.\nb) Sai. Y có chứa nhóm carboxyl nên Y có liên kết hydrogen liên phân tử.\nc) Đúng.\nd) Đúng.\n1. Khái niệm lipid, chất béo, acid béo:\nLipid là các hợp chất hữu cơ có trong tế bào sống, không tan trong nước nhưng tan trong dung môi hữu cơ không phân cực. Dựa trên cấu tạo, lipid được phân loại thành: chất béo, sáp, steroid, phospholipid,...\nChất béo là triester (ester ba chức) của glycerol với acid béo, gọi chung là triglyceride.\nCông thức cấu tạo chung của chất béo:\nAcid béo là carboxylic acid đơn chức. Hầu hết chúng có mạch carbon dài (thường từ 12 đến 24 nguyên tử carbon), không phân nhánh và có số nguyên tử carbon chẵn.\nGốc hydrocarbon trong phân tử acid béo có thể là gốc no (acid béo bão hòa) hoặc không no chứa một hay nhiều liên kết đôi C=C (acid béo không bão hòa).\nMột số acid béo và chất béo thường gặp:\nhay C15H31COOH\nhay C17H35COOH\nhay C17H33COOH\nhay C17H31COOH\nChất béo no\n(C15H31COO)3C3H5 glyceryl tripalmitate hay tripalmitin\n(C17H35COO)3C3H5 glyceryl tristearate hay tristearin\nChất béo không no\n(C17H33COO)3C3H5 glyceryl trioleate hay triolein\n(C17H31COO)3C3H5 glyceryl trilinoleate hay trilinolein"
          },
          {
            "rawNum": 2,
            "text": "Công thức nào sau đây có thể là công thức của chất béo?",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOCH2C6H5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C3H5(OOCC4H9)3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "(C17H33COO)2C2H4",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "(C17H35COO)3C3H5",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": "Đáp án: D."
          },
          {
            "rawNum": 3,
            "text": "Công thức cấu tạo của triolein tạo bởi glycerol và oleic acid là",
            "options": [
              {
                "letter": "A",
                "text": "(C17H33COO)3C3H5",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "(C17H31COO)3C3H5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "(C17H35COO)3C3H5",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "(C15H31COO)3C3H5",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": "Đáp án: A."
          },
          {
            "rawNum": 4,
            "text": "Linoleic acid là acid béo thiết yếu cần thiết nhất trong cơ thể người do có thể bị chuyển hoá tạo ra nhiều acid béo omega-6 khác như arachidonic acid, docosatetraenoic acid,... Arachidonic acid chiếm khoảng  hàm lượng acid béo phospholipid trong cơ xương và có cấu tạo như sau:\nPhát biểu nào sau đây không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Arachidonic acid có 19 nguyên tử carbon",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Khối lượng phân tử của linoleic acid là 304",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Trong arachidonic acid, nhóm nguyên tử ở carbon nối đôi ở vị trí cis với nhau",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Arachidonic acid có chứa 5 liên kết  trong phân tử",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": "Đáp án: A.\nCông thức phân tử của linoleic acid là C20H32O2."
          },
          {
            "rawNum": 5,
            "text": "Số đồng phân cấu tạo tối đa của triester được tạo nên từ palmitic acid và oleic acid với glycerol là",
            "options": [
              {
                "letter": "A",
                "text": "3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "6",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "4. Đáp án: R1-, R2- là các gốc acid béo palmitic, oleic. (R1COO)3C3H5 và (R2COO)3C3H5 2. Tính chất vật lí của chất béo: Ở nhiệt độ thường, chất béo ở trạng thái lỏng hoặc rắn. Khi trong phân tử chất béo chứa nhiều gốc acid béo no thì chất béo thường ở trạng thái rắn như mỡ lợn, mỡ bò, mỡ cừu,... Khi trong phân tử chất béo chứa nhiều gốc acid béo không no thì chúng thường ở trạng thái lỏng như dầu lạc, dầu vừng, dầu cá,... Chất béo nhẹ hơn nước và không tan trong nước, dễ tan trong các dung môi hữu cơ ít phân cực hoặc không phân cực",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 6,
            "text": "Phát biểu nào sau đây là đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Chất béo có chứa nhiều gốc acid béo không no là chất rắn ở điều kiện thường, gọi là mỡ động vật",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Chất béo nhẹ hơn nước và không tan trong nước nhưng tan nhiều trong dung môi hữu cơ không phân cực",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Dầu ăn và dầu mỡ bôi trơn máy có cùng thành phần nguyên tố",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Chất béo có chứa nhiều gốc acid béo no là chất lỏng ở điều kiện thường, gọi là dầu thực vật",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": "Đáp án: B.\nA, D. Sai. Chất béo chứa nhiều gốc acid béo no (không có liên kết đôi) thường là rắn (mỡ động vật), còn chất béo không no thường là lỏng (dầu thực vật).\nC. Sai. Dầu ăn là chất béo (chủ yếu gồm C, H, O), còn dầu mỡ bôi trơn máy là dầu khoáng hoặc dầu tổng hợp, có thể chứa các nguyên tố khác như N, S, P,... nên không cùng thành phần nguyên tố."
          },
          {
            "rawNum": 10,
            "text": "Chất béo là một ester ba chức nên chúng cũng bị thủy phân tương tự như ester. Phát biểu nào sau đây là đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Phản ứng thủy phân chất béo trong môi trường acid là phản ứng một chiều",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Phản ứng thủy phân chất béo trong môi trường base là phản ứng thuận nghịch",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Thủy phân chất béo trong môi trường acid hay base luôn thu được glycerol",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Thủy phân tristearin trong dung dịch H2SO4 loãng đun nóng, thu được sản phẩm hữu cơ gồm stearic acid và ethanol",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": "Đáp án: C.\nA. Sai. Phản ứng thủy phân chất béo trong môi trường acid là phản ứng thuận nghịch.\nB. Sai. Phản ứng thủy phân chất béo trong môi trường base (xà phòng hóa) là phản ứng một chiều.\nD. Sai. Thủy phân tristearin (C₃H₅(OOCC₁₇H₃₅)₃) trong H₂SO₄ loãng không tạo ra ethanol. Sản phẩm là glycerol và stearic acid."
          }
        ]
      },
      {
        "level": 2,
        "title": "Mức độ 2: Thông hiểu & Vận dụng",
        "target": "8 - 9 Điểm",
        "questions": [
          {
            "rawNum": 11,
            "text": "Thủy phân hoàn toàn triglyceride X trong dung dịch NaOH thu được C17H35COONa và C3H5(OH)3. Tên gọi của X là",
            "options": [
              {
                "letter": "A",
                "text": "triolein",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "tripalmitin",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "tristearin",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "trilinolein",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": "Đáp án: C."
          },
          {
            "rawNum": 13,
            "text": "Margarin là một loại bơ nhân tạo được sản xuất chủ yếu từ dầu thực vật. Để có được bơ nhân tạo từ dầu thực vật người ta thực hiện quá trình",
            "options": [
              {
                "letter": "A",
                "text": "làm lạnh",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "xà phòng hóa",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "oxi hóa bởi oxygen không khí",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "hydrogen hóa",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": "Đáp án: D."
          },
          {
            "rawNum": 14,
            "text": "Khi để lâu trong không khí, chất béo sẽ",
            "options": [
              {
                "letter": "A",
                "text": "bị bay hơi",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "bị nóng chảy",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "có mùi khó chịu",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "có mùi thơm",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": "Đáp án: C."
          },
          {
            "rawNum": 1,
            "text": "Chất nào sau đây là ester?",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOH",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3CH2CHO",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3COOCH3",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "CH3OH",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 2,
            "text": "Cho 4 chất có công thức cấu tạo như sau:\nChất nào thuộc loại ester?",
            "options": [
              {
                "letter": "A",
                "text": "(1)",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "(2)",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "(3)",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "(4)",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 3,
            "text": "Ester no, đơn chức, mạch hở có công thức tổng quát là",
            "options": [
              {
                "letter": "A",
                "text": "CnH2nO2 (n ≥ 2)",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "CnH2n-2O2 (n ≥ 2)",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CnH2n+2O2 (n ≥ 2)",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CnH2nO (n ≥ 2)",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 4,
            "text": "Số nguyên tử oxygen trong một phân tử ester đơn chức là",
            "options": [
              {
                "letter": "A",
                "text": "1",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "4",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "2",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 5,
            "text": "Số đồng phân ester có cùng công thức phân tử C3H6O2 là",
            "options": [
              {
                "letter": "A",
                "text": "2",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "4",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 6,
            "text": "Số đồng phân ester ứng với công thức phân tử C4H8O2 là",
            "options": [
              {
                "letter": "A",
                "text": "5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "2",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "4",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "6",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 7,
            "text": "Chất nào sau đây là đồng phân của HCOOC2H5?",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOH",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "HCOOCH3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3COOC2H5",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOCH3",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 8,
            "text": "Methyl formate có công thức cấu tạo là",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOCH3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "HCOOC2H5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "HCOOCH=CH2",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "HCOOCH3",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 9,
            "text": "Tên gọi của ester CH3COOC2H5 là",
            "options": [
              {
                "letter": "A",
                "text": "ethyl formate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "ethyl acetate",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "methyl acetate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "methyl formate",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 10,
            "text": "Tên gọi của ester HCOOC2H5 là",
            "options": [
              {
                "letter": "A",
                "text": "ethyl acetate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "methyl formate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "methyl ethanoate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "ethyl methanoate",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 11,
            "text": "Ethyl propionate là ester có mùi thơm của dứa. Công thức của ethyl propionate là",
            "options": [
              {
                "letter": "A",
                "text": "HCOOC2H5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C2H5COOC2H5",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "C2H5COOCH3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOCH3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 12,
            "text": "Propyl ethanoate là ester có mùi đặc trưng của quả lê. Công thức của propyl ethanoate là",
            "options": [
              {
                "letter": "A",
                "text": "CH3CH2COOCH2CH2CH3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3CH2COOCH2CH3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3COOCH2CH3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOCH2CH2CH3",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          }
        ]
      },
      {
        "level": 3,
        "title": "Mức độ 3: Vận dụng cao & Phân hóa",
        "target": "9 - 10 Điểm",
        "questions": [
          {
            "rawNum": 13,
            "text": "Butyl acetate phần lớn được dùng làm dung môi cho ngành sản xuất sơn. Số nguyên tử carbon có trong phân tử butyl acetate là",
            "options": [
              {
                "letter": "A",
                "text": "5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "7",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "4",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "6",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 14,
            "text": "Vinyl acetate có công thức là",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOCH3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C2H5COOCH3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "HCOOC2H5",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOCH=CH2",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 15,
            "text": "Benzyl acetate là ester có mùi thơm của hoa nhài. Công thức của benzyl acetate là",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOC6H5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3COOCH2C6H5",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "C2H5COOCH3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOCH3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 16,
            "text": "Hợp chất X có công thức cấu tạo . X có tên gọi nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Ethyl propionate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Methyl propionate",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Methyl acetate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Propyl acetate",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 17,
            "text": "Ester X có công thức cấu tạo như sau:\nTên gọi của X là",
            "options": [
              {
                "letter": "A",
                "text": "ethyl acetate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "methyl acrylate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "methyl butanoate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "methyl methacrylate",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 18,
            "text": "So với các carboxylic và alcohol có cùng số nguyên tử carbon thì ester có nhiệt độ sôi",
            "options": [
              {
                "letter": "A",
                "text": "thấp hơn do khối lượng phân tử của este nhỏ hơn",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "thấp hơn do giữa các phân tử ester không tồn tại liên kết hydrogen",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "cao hơn do giữa các phân tử ester có liên kết hydrogen bền vững hơn",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "cao hơn do khối lượng phân tử của ester lớn hơn",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 19,
            "text": "Tính chất vật lí nào sau đây của ester là không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Các ester có phân tử khối thấp và trung bình là chất lỏng ở nhiệt độ phòng",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Các ester có phân tử khối lớn đều là chất lỏng ở nhiệt độ phòng",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Ester thường nhẹ hơn nước và ít tan trong nước",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Một số ester có mùi thơm của hoa, quả chín",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 20,
            "text": "Cho độ tan của một số ester trong nước ở :\nEster\nEthyl acetate\nPropyl acetate\nButyl acetate\nĐộ tan (mol/100 gam nước\n0,0923\n0,0219\n0,0057",
            "options": [
              {
                "letter": "D",
                "text": "Richon,",
                "isCorrect": false
              },
              {
                "letter": "A",
                "text": "Viallard (1985). Water/ester systems. II. Solubility studies, Fluid Phase Equilibria.) Theo chiều từ trái sang phải, nồng độ phần trăm của dung dịch bão hoà các ester trên biến đổi như thế nào?",
                "isCorrect": false
              },
              {
                "letter": "A",
                "text": "Tăng dần",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Giảm dần",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Không có quy luật",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Không đổi",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 21,
            "text": "Trong các chất dưới đây, chất nào có độ tan trong nước nhỏ nhất do chỉ tạo được liên kết hydrogen yếu với nước?",
            "options": [
              {
                "letter": "A",
                "text": "Ethyl alcohol",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Ethylene glycol",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Ethyl acetate",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Acetic acid",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 22,
            "text": "Isoamyl acetate là ester có mùi thơm của chuối chín. Công thức của isoamyl acetate là",
            "options": [
              {
                "letter": "A",
                "text": "CH3CH2COOCH2CH3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3COOCH2CH2CH(CH3)2",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "CH3COOCH3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "HCOOCH2CH2CH(CH3)2",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 23,
            "text": "Phản ứng thủy phân ester trong môi trường base gọi là phản ứng",
            "options": [
              {
                "letter": "A",
                "text": "ester hóa",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "idoform",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "tráng gương",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "xà phòng hóa",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 24,
            "text": "Phát biểu nào sau đây là không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Ester luôn có nhiệt độ sôi thấp hơn carboxylic acid có cùng số nguyên tử carbon trong phân tử",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Phản ứng ester hoá giữa alcohol và carboxylic acid là phản ứng thuận nghịch",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Phản ứng xà phòng hoá là phản ứng thuận nghịch",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Ở điều kiện thường, các ester đều là chất lỏng hoặc rắn",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 25,
            "text": "Ester nào sau đây tác dụng với NaOH thu được ethyl alcohol?",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOC2H5",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "CH3COOC3H7",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "C2H5COOCH3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "HCOOCH3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 26,
            "text": "Cho ester X tác dụng với dung dịch NaOH đun nóng, thu được sodium propionate và methyl alcohol. Công thức cấu tạo của X là",
            "options": [
              {
                "letter": "A",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 27,
            "text": "Từ quả đào chín, người ta tách ra được chất A là một ester có công thức phân tử C3H6O2. Khi thuỷ phân A trong dung dịch NaOH dư, thu được sodium formate và một alcohol. Công thức của cấu tạo của A là",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOCH3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3COOC2H5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "HCOOC2H5",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "HCOOCH3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          }
        ]
      }
    ]
  },
  {
    "id": "c1_topic2_tinh_chat_vat_ly",
    "title": "Chuyên đề 2: Tính Chất Vật Lý, Mùi Hương & Thí Nghiệm",
    "icon": "🌸",
    "description": "Nhiệt độ sôi, độ tan, mùi hương hoa quả đặc trưng, thí nghiệm điều chế ester trong phòng thí nghiệm.",
    "levels": [
      {
        "level": 1,
        "title": "Mức độ 1: Nhận biết hiện tượng & Mùi hương",
        "target": "6 - 7 Điểm",
        "questions": [
          {
            "rawNum": 28,
            "text": "Ester X có công thức phân tử C4H8O2. Thủy phân X trong dung dịch NaOH dư, thu được sản phẩm gồm sodium propionate và alcohol Y. Công thức của Y là",
            "options": [
              {
                "letter": "A",
                "text": "C3H5(OH)3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C2H5OH",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "C3H7OH",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3OH",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 29,
            "text": "Ester X có công thức phân tử C4H8O2. Thủy phân X trong dung dịch H2SO4 loãng, đun nóng, thu được sản phẩm gồm ethyl alcohol và chất hữu cơ Y. Công thức của Y là",
            "options": [
              {
                "letter": "A",
                "text": "CH3OH",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3COOH",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "C2H5COOH",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "HCOOH",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 30,
            "text": "Ester X có mùi đặc trưng giống mùi táo và có công thức phân tử C5H10O2. Thuỷ phân X trong dung dịch NaOH, thu được sodium butanoate và một alcohol. Công thức của X là",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOCH2CH2CH3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3CH2COOCH2CH3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3CH2CH2COOCH3",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "(CH3)2CHCOOCH2CH3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 31,
            "text": "Chất X có công thức phân tử C4H8O2. Cho X tác dụng với dung dịch NaOH đun nóng, thu được chất Y có công thức phân tử C3H5O2Na. X có công thức cấu tạo là",
            "options": [
              {
                "letter": "A",
                "text": "HCOOCH2CH2CH3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "HCOOCH(CH3)2",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3COOC2H5",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "C2H5COOCH3",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 32,
            "text": "Chất nào sau đây khi đun nóng với dung dịch NaOH thu được sản phẩm có aldehyde?",
            "options": [
              {
                "letter": "A",
                "text": "CH3–COO–CH2–CH=CH2",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3–COO–C(CH3)=CH2",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH2=CH–COO–CH2–CH3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3–COO–CH=CH–CH3",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 33,
            "text": "Ester nào sau đây có tham gia phản ứng trùng hợp?",
            "options": [
              {
                "letter": "A",
                "text": "Propyl formate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Methyl butanoate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Isopropyl acetate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Methyl methacrylate",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 34,
            "text": "Trường hợp nào sau đây xảy ra phản ứng với ethyl acetate?",
            "options": [
              {
                "letter": "A",
                "text": "Dung dịch NaOH, to",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "C2H5OH",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Dung dịch [Ag(NH3)2]OH",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dung dịch NaCl",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 35,
            "text": "Phản ứng giữa carboxylic acid với alcohol khi có mặt xúc tác H2SO4 đặc, nóng là",
            "options": [
              {
                "letter": "A",
                "text": "phản ứng oxi hóa - khử",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "phản ứng xà phòng hóa",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "phản ứng trùng hợp",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "phản ứng ester hóa",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 36,
            "text": "Đun nóng carboxylic acid với alcohol khi có mặt xúc tác H2SO4 đặc, nóng tạo ra sản phẩm hữu cơ nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Ketone",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Aldehyde",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Ester",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Ether",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 37,
            "text": "Đặc điểm nào sau đây là của phản ứng ester hóa?",
            "options": [
              {
                "letter": "A",
                "text": "Phản ứng thuận nghịch, cần đun nóng và không cần xúc tác",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Phản ứng thuận nghịch, cần đun nóng và cần xúc tác",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Phản ứng hoàn toàn, cần đun nóng và cần xúc tác",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Phản ứng hoàn toàn, cần đun nóng và không cần xúc tác",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 38,
            "text": "Cho phản ứng: CH3COOH + HOC2H5 ⇌ CH3COOC2H5 + HOH Biểu thức tỉnh hằng số cân bằng của phản ứng trên là",
            "options": [
              {
                "letter": "A",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": ".D ",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 39,
            "text": "Đun nóng acetic acid với ethanol khi có mặt xúc tác H2SO4 đặc, nóng tạo thành ester có tên gọi là",
            "options": [
              {
                "letter": "A",
                "text": "ethyl formate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "ethyl acetate",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "methyl formate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "methyl acetate",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 40,
            "text": "Chất X có công thức phân tử , là ester của acetic acid. Công thức cấu tạo của X là",
            "options": [
              {
                "letter": "A",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 41,
            "text": "Dầu chuối là ester isoamyl acetate, được điều chế từ phản ứng ester hóa giữa carboxylic acid và alcohol nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "CH3OH, CH3COOH",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C2H5COOH, C2H5OH",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "(CH3)2CHCH2OH, CH3COOH",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOH, (CH3)2CHCH2CH2OH",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 42,
            "text": "Ester X mạch hở có công thức phân tử C3H4O2. Tên gọi của X là",
            "options": [
              {
                "letter": "A",
                "text": "vinyl acetate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "methyl acetate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "methyl formate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "vinyl formate",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          }
        ]
      },
      {
        "level": 2,
        "title": "Mức độ 2: Thí nghiệm điều chế & Câu hỏi Đúng/Sai",
        "target": "8 - 9 Điểm",
        "questions": [
          {
            "rawNum": 43,
            "text": "Ester có công thức phân tử là C2H4O2 được tạo thành từ methyl alcohol và carboxylic acid nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Propionic acid",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Acetic acid",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Formic acid",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Oxalic acid",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 44,
            "text": "Ứng dụng nào sau đây không phải của ester?",
            "options": [
              {
                "letter": "A",
                "text": "Một số ester có mùi thơm, không độc, được dùng làm chất tạo hương trong công nghiệp thực phẩm",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Aspirin, methyl salicylate là những hợp chất chứa chức ester được dùng làm dược phẩm",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Ethyl acetate được dùng làm dung môi để tách, chiết chất hữu cơ",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Poly(methyl methacrylate) được dùng làm hương liệu cho mĩ phẩm. 2. Mức độ thông hiểu:",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 45,
            "text": "Ester không no (chứa một liên kết C=C), đơn chức, mạch hở có công thức phân tử là",
            "options": [
              {
                "letter": "A",
                "text": "CnH2n – 2O4 (n ≥ 3)",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CnH2nO2 (n ≥ 2)",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CnH2n – 4O2 (n ≥ 3)",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CnH2n – 2O2 (n ≥ 3)",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 46,
            "text": "Số đồng phân ester ứng với công thức phân tử C5H10O2 có mạch carbon phân nhánh là",
            "options": [
              {
                "letter": "A",
                "text": "5",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "6",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "4",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 47,
            "text": "Số đồng phân ester mạch hở ứng với công thức phân tử C4H6O2 là",
            "options": [
              {
                "letter": "A",
                "text": "7",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "6",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "4",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 48,
            "text": "Số đồng phân đơn chức, mạch hở ứng với công thức phân tử C3H6O2 là",
            "options": [
              {
                "letter": "A",
                "text": "2",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "1",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "4",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "3",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 49,
            "text": "Ứng với công thức phân tử C8H8O2 có bao nhiêu đồng phân ester chứa vòng benzene?",
            "options": [
              {
                "letter": "A",
                "text": "3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "6",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "4",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 50,
            "text": "Cho các chất có công thức cấu tạo sau: ,  và HCOOH. Có bao nhiêu chất thuộc loại ester?",
            "options": [
              {
                "letter": "A",
                "text": "5 ",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "3 ",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "4 ",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "6 ",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 51,
            "text": "Khi phân tích thành phần ester X (mạch hở) thu được phần trăm khối lượng các nguyên tố như sau: 40,00% carbon, 6,67% hydrogen, còn lại là oxygen. X thuộc dãy đồng đẳng của ester nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Ester no, đơn chức",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Ester có một nối đôi C=C, đơn chức",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Ester no, hai chức",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Ester no, ba chức",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 52,
            "text": "Dãy các chất nào sau đây được sắp xếp theo chiều tăng dần nhiệt độ sôi?",
            "options": [
              {
                "letter": "A",
                "text": "HCOOCH3, CH3CH2OH, CH3COOH",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "CH3COOH, HCOOCH3, CH3CH2OH",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3COOH, CH3CH2OH, HCOOCH3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3CH2OH, CH3COOH, HCOOCH3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 53,
            "text": "Trong số các chất sau đây, chất nào có nhiệt độ sôi thấp nhất?",
            "options": [
              {
                "letter": "A",
                "text": "HOCH2CH2OH",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3CH2COOH",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3CH2CH2OH",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOCH3",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 54,
            "text": "Có 4 ester no, đơn chức, mạch hở được kí hiệu ngẫu nhiên lần lượt là X, Y, Z, T. Phân tử ester của mỗi chất nêu trên đều tạo bởi các carboxylic acid mạch không phân nhánh và ethyl alcohol. Độ tan của 4 ester được cho ở bảng sau:\nEster\nX\nY\nZ\nT\nĐộ tan (g/100 g nước)\n8,7\n10,5\n2,2\n4,9\nTrong số 4 ester trên, ester có nhiều nguyên tử carbon nhất trong phân tử là",
            "options": [
              {
                "letter": "A",
                "text": "Y",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "T",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "X",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Z",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 55,
            "text": "Trường hợp nào dưới đây tạo ra sản phẩm là alcohol và muối sodium của carboxylic acid?",
            "options": [
              {
                "letter": "A",
                "text": "HCOOCH=CHCH3 + NaOH",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3COOCH2CH=CH2 + NaOH",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "CH3COOCH=CH2 + NaOH",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOC6H5 (phenyl acetate) + NaOH",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 56,
            "text": "Xà phòng hóa ester X có công thức phân tử C4H8O2 bằng dung dịch NaOH dư thu được muối Y và alcohol Z (bậc II). Công thức cấu tạo thu gọn của X là",
            "options": [
              {
                "letter": "A",
                "text": "HCOOCH(CH3)2",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "CH3CH2COOCH3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3COOC2H5",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "HCOOCH2CH2CH3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 57,
            "text": "Hợp chất X có công thức phân tử là C9H10O2 (phân tử có chứa vòng benzene). Đung nóng X với dung dịch NaOH dư, thu được hỗn hợp hai muối. Công thức cấu tạo của X là",
            "options": [
              {
                "letter": "A",
                "text": "CH3-COO-CH2-C6H5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "HCOO-CH2-CH2-C6H5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3-CH2-COO-C6H5",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "HCOO-CH2-C6H4-CH3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          }
        ]
      }
    ]
  },
  {
    "id": "c1_topic3_thuy_phan",
    "title": "Chuyên đề 3: Phản Ứng Thủy Phân & Xà Phòng Hóa",
    "icon": "⚗️",
    "description": "Thủy phân trong môi trường acid và base, ester của phenol, bài toán bảo toàn khối lượng.",
    "levels": [
      {
        "level": 1,
        "title": "Mức độ 1: Thủy phân ester đơn chức cơ bản",
        "target": "6 - 7 Điểm",
        "questions": [
          {
            "rawNum": 58,
            "text": "Thủy phân hoàn toàn hỗn hợp methyl propionate và methyl formate trong dung dịch NaOH, thu được sản phẩm gồm",
            "options": [
              {
                "letter": "A",
                "text": "1 muối và 1 alcohol",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "2 muối và 2 alcohol",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "1 muối và 2 alcohol",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "2 muối và 1 alcohol",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 59,
            "text": "Cho các phản ứng sau:\n(1) Thuỷ phân ester trong dung dịch H2SO4 loãng, đun nóng.\n(2) Thuỷ phân ester trong dung dịch NaOH, đun nóng.\n(3) Cho ester tác dụng với dung dịch KOH, đun nóng.\n(4) Thuỷ phân dẫn xuất halogen trong dung dịch NaOH, đun nóng.\n(5) Cho carboxylic acid tác dụng với dung dịch KOH.\nNhững phản ứng nào không được gọi là phản ứng xà phòng hoá?",
            "options": [
              {
                "letter": "A",
                "text": "(1), (2), (3), (4)",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "(1), (3), (4), (5)",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "(1), (4), (5)",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "(3), (4), (5)",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 60,
            "text": "Phát biểu nào sau đây sai?",
            "options": [
              {
                "letter": "A",
                "text": "Ethyl acetate có công thức phân tử là C4H8O2",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Phân tử methyl methacrylate có một liên kết π trong phân tử",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Methyl acrylate có khả năng tham gia phản ứng cộng Br2 trong dung dịch",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Ethyl formate có khả năng tham gia phản ứng tráng bạc",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 61,
            "text": "Cho vào 2 ống nghiệm, mỗi ống nghiệm 2 mL ethyl acetate, sau đó thêm vào ống thứ nhất 1 mL dung dịch H2SO4 20% và ống thứ hai 1 mL dung dịch NaOH 30%. Sau đó lắc đều cả 2 ống nghiệm, lắp ống sinh hàn đồng thời đun cách thuỷ trong khoảng 5 phút. Hiện tượng quan sát được trong thí nghiệm trên là",
            "options": [
              {
                "letter": "A",
                "text": "chất lỏng trong cả hai ống nghiệm trở thành đống nhất",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "chất lỏng trong ống thứ hai trở thành đống nhất",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "chất lỏng trong ống thứ nhất trở thành đống nhất",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "chất lỏng trong cả hai ống nghiệm có sự phân tách lớp",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 62,
            "text": "Cho vào ba ống nghiệm, mỗi ống 1 mL ethyl acetate, sau đó cho vào mỗi ống các chất sau:\n- Ống nghiệm (1): 2 mL nước cất.\n- Ống nghiệm (2): 2 mL dung dịch H2SO4 20%.\n- Ống nghiệm (3): 2 mL dung dịch NaOH 30%.\nLắc đều ba ống nghiệm rồi đặt ba ống trong nồi cách thuỷ ở nhiệt độ 60 - 70°C. Sau một thời gian, thể tích lớp ester còn lại trong ba ống theo thứ tự giảm dần là",
            "options": [
              {
                "letter": "A",
                "text": "(3) > (2) > (1)",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "(2) > (3) > (1)",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "(1) > (2) > (3)",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "(1) > (3) > (2)",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 63,
            "text": "Đun nóng methanol với acetic acid (xúc tác sulfuric acid đậm đặc), thu được ester X. Nhận định nào sau đây về phân tử X là đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Có công thức phân tử là ",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Chứa 2 nguyên tử O đều của acid ban đầu",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Chỉ chứa các liên kết ",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Có chứa một nguyên tử H linh động",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 64,
            "text": "Số ester có công thức phân tử C4H8O2 mà khi thủy phân trong môi trường acid thì thu được formic acid là",
            "options": [
              {
                "letter": "A",
                "text": "1",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "2",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "4",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 65,
            "text": "Thực hiện phản ứng ester hóa giữa HOOC–COOH với hỗn hợp CH3OH và C2H5OH thu được tối đa bao nhiêu ester hai chức?",
            "options": [
              {
                "letter": "A",
                "text": "3",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "1",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "2",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "4",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 66,
            "text": "Một số ester được dùng trong hương liệu, mĩ phẩm, bột giặt là nhờ các ester",
            "options": [
              {
                "letter": "A",
                "text": "là chất lỏng dễ bay hơi",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "có mùi thơm, an toàn với người",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "có thể bay hơi nhanh sau khi sử dụng",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "đều có nguồn gốc từ thiên nhiên",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 67,
            "text": "Tính chất nào sau đây không phải là tính chất thích hợp giúp ethyl methanoate được sử dụng trong sản xuất một số loại nước hoa?",
            "options": [
              {
                "letter": "A",
                "text": "Khả năng dễ cháy",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Không độc hại",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Nhiệt độ sôi thấp",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Có mùi thơm dễ chịu",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 68,
            "text": "Nhận xét nào sau đây không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Methyl formate có nhiệt độ sôi thấp hơn acetic acid",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Phản ứng thủy phân ester trong môi trường acid thường là phản ứng thuận nghịch",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Ethyl ethanoate là đồng phân của propionic acid",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Các ester thường nhẹ hơn nước và ít tan trong nước",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 69,
            "text": "Yếu tố nào sau đây không làm tăng hiệu suất phản ứng ester hóa giữa acetic acid và ethanol?",
            "options": [
              {
                "letter": "A",
                "text": "Dùng dung dịch H2SO4 đặc làm xúc tác",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Chưng cất ester tạo ra",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Tăng nồng độ acetic acid hoặc alcohol",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Lấy số mol alcohol và acid bằng nhau",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 70,
            "text": "Một thí nghiệm được mô tả như hình sau đây:\nChất lỏng thu được ở ống nghiệm B có mùi táo, có tên là",
            "options": [
              {
                "letter": "A",
                "text": "ethyl formate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "methyl propionate",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "ethyl propionate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "propyl formate",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 71,
            "text": "Thực hiện phản ứng ester hoá sau: cho 0,1 mol alcohol tác dụng với 0,1 mol carboxylic acid, có mặt H2SO4 đặc làm xúc tác. Đồ thị nào sau đây biểu diễn sự thay đổi số mol (n) alcohol theo thời gian (t)?",
            "options": [
              {
                "letter": "A",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 72,
            "text": "Thuỷ phân ester có công thức phân tử C4H8O2 (với xúc tác acid), thu được 2 sản phẩm hữu cơ X và Y. Từ X có thể điều chế trực tiếp ra Y bằng một phản ứng. Tên gọi của X là",
            "options": [
              {
                "letter": "A",
                "text": "methyl alcohol",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "ethyl acetate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "formic acid",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "ethyl alcohol",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          }
        ]
      },
      {
        "level": 2,
        "title": "Mức độ 2: Este đa chức & Este của phenol",
        "target": "8 - 9 Điểm",
        "questions": [
          {
            "rawNum": 73,
            "text": "Aspirin là một trong những loại thuốc giảm đau, hạ sốt được sử dụng rộng rãi trên toàn thế giới. Aspirin có công thức cấu tạo như sau:\nTrong điều kiện ẩm ướt, aspirin có thể bị thuỷ phân để tạo thành salicylic acid và acetic acid. Công thức cấu tạo nào sau đây là của salicylic acid?",
            "options": [
              {
                "letter": "A",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 74,
            "text": "Hợp chất 2-methylbutyl ethanoate là một trong các pheromone \"báo động\" được ong tiết ra để cảnh báo các con ong khác trong đàn về mối nguy hiểm và kêu gọi tập trung tấn công kẻ xâm nhập. Hợp chất này có công thức cấu tạo như sau:\nNhận định nào sau đây về 2-methylbutyl ethanoate không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Thuộc loại ester no, đơn chức, có công thức phân tử là ",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Bị thuỷ phân trong môi trường acid và môi trường base",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Tạo được liên kết hydrogen mạnh với nước",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Tổng hợp được trong phòng thí nghiệm từ acetic acid và 2-methybutanol",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 75,
            "text": "Acetylsalicylic acid (thuốc Aspirin) có công thức cấu tạo như hình sau:\nPhát biểu nào sau đây là không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Acetylsalicylic acid có vị chua",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Cho a mol acetylsalicylic acid phản ứng với dung dịch NaOH dư, số mol NaOH phản ứng là 3a mol",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Công thức phân tử của acetylsalicylic acid là C9H10O4",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Trong phân tử acetylsalicylic acid, nguyên tố oxygen chiếm chưa đến 36% về khối lượng",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 76,
            "text": "Ester nào sau đây khi phản ứng với dung dịch NaOH dư, đun nóng không tạo ra hai muối?",
            "options": [
              {
                "letter": "A",
                "text": "C6H5COOC6H5 (phenyl benzoate)",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3COO−[CH2]2−OOCCH2CH3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3OOC−COOCH3",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "CH3COOC6H5 (phenyl acetate)",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 77,
            "text": "Xà phòng hóa hoàn toàn ester X mạch hở trong dung dịch NaOH, thu được hỗn hợp các chất hữu cơ gồm: (COONa)2, CH3CHO và C2H5OH. Công thức phân tử của X là",
            "options": [
              {
                "letter": "A",
                "text": "C6H10O4",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C6H10O2",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "C6H8O2",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "C6H8O4",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 78,
            "text": "Diethyl phthalate (DEP) là ester được dùng trong điều trị bệnh ngoài da (như ghẻ, nở, giảm sưng tấy do côn trùng cắn). DEP có công thức cấu tạo như hình bên.\nPhát biểu nào sau đây đúng?",
            "options": [
              {
                "letter": "A",
                "text": "DEP thuộc loại ester no, hai chức",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "DEP có chứa 10 nguyên tử carbon trong phân tử",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "DEP được tạo thành từ carboxylic hai chức và alcohol đơn chức",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "DEP là hợp chất hữu cơ tạp chức",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 79,
            "text": "Xà phòng hoá một hợp chất có công thức phân tử C10H14O6 trong dung dịch NaOH (dư), thu được glycerol và hỗn hợp gồm ba muối (không có đồng phân hình học). Công thức của ba muối đó là:",
            "options": [
              {
                "letter": "A",
                "text": "CH2=CH-COONa, CH3-CH2-COONa và HCOONa",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "HCOONa, CH≡C-COONa và CH3-CH2-COONa",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH2=CH-COONa, HCOONa và CH≡C-COONa",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3-COONa, HCOONa và CH3-CH=CH-COONa",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 80,
            "text": "Thuỷ phân hoàn toàn m gam methyl acetate bằng dung dịch NaOH đun nóng thu được 8,2 gam muối. Giá trị của m là",
            "options": [
              {
                "letter": "A",
                "text": "6,0",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "7,4",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "8,2",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "8,8",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 81,
            "text": "Xà phòng hóa 8,8 gam ethyl acetate bằng 200 mL dung dịch NaOH 0,2M. Sau khi phản ứng xảy ra hoàn toàn, cô cạn dung dịch thu được chất rắn khan có khối lượng là",
            "options": [
              {
                "letter": "A",
                "text": "8,56 gam",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "3,28 gam",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "10,4 gam",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "8,2 gam",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 82,
            "text": "Cho 8,8 gam ester X đơn chức phản ứng hoàn toàn với dung dịch NaOH, thu được 3,2 gam CH3OH. Tên của X là",
            "options": [
              {
                "letter": "A",
                "text": "propyl formate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "ethyl acetate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "methyl propionate",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "methyl acetate",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 83,
            "text": "Đun nóng 0,1 mol ester đơn chức X với 135 mL dung dịch NaOH 1M. Sau khi phản ứng xảy ra hoàn toàn, cô cạn dung dịch thu được ethyl alcohol và 9,6 gam chất rắn khan. Công thức cấu tạo của X:",
            "options": [
              {
                "letter": "A",
                "text": "C2H5COOC2H5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C2H5COOCH3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "C2H3COOC2H5",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOC2H5",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 84,
            "text": "Cho 27,2 gam phenyl acetate tác dụng với 400 mL dung dịch NaOH 1,5M đun nóng. Sau khi phản ứng xảy ra hoàn toàn thu được dung dịch X. Cô cạn X thu được a gam rắn khan. Giá trị của a là",
            "options": [
              {
                "letter": "A",
                "text": "24,4",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "32,4",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "39,6",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "47,6",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 85,
            "text": "Đun nóng 24 gam acetic acid với lượng dư ethyl alcohol (xúc tác H2SO4 đặc), thu được 26,4 gam ester. Hiệu suất của phản ứng ester hóa là",
            "options": [
              {
                "letter": "A",
                "text": "75%",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "44%",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "55%",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "60%",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 86,
            "text": "Đun nóng 6,0 gam CH3COOH với 6,0 gam C2H5OH (có H2SO4 làm xúc tác, hiệu suất phảnứng ester hoá bằng 50%). Khối lượng ester tạo thành là",
            "options": [
              {
                "letter": "A",
                "text": "6,0 gam",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "4,4 gam",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "8,8 gam",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "5,2 gam",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 87,
            "text": "Isoamyl acetate có mùi thơm đặc trưng của chuối chín nên còn được gọi là dầu chuối. Khi đun nóng hỗn hợp 16,2 g acetic acid và 14,96 g isoamyl alcohol ((CH3)2CHCH2CH2OH) với xúc tác H2SO4 đặc, thu được 15,6 g dầu chuối. Hiệu suất của phản ứng điều chế dầu chuối trên là",
            "options": [
              {
                "letter": "A",
                "text": "63,04%",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "58,55%",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "62,50%",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "70,59%",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          }
        ]
      },
      {
        "level": 3,
        "title": "Mức độ 3: Bài toán hỗn hợp ester vận dụng cao",
        "target": "9 - 10 Điểm",
        "questions": [
          {
            "rawNum": 88,
            "text": "Methyl butanoate là một ester có mùi táo. Khi đun nóng hỗn hợp 17,6 g butanoic acid và 4,8 g methyl alcohol với xúc tác H2SO4 đặc, thu được m g methyl butanoate. Biết hiệu suất phản ứng đạt 75%. Giá trị của m là",
            "options": [
              {
                "letter": "A",
                "text": "18,765",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "15,300",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "24,586",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "11,475",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 89,
            "text": "Hợp chất hữu cơ đơn chức X có mùi thơm của quả dứa chín và được sử dụng trong tổng hợp dược phẩm,... Kết quả phân tích nguyên tổ cho thấy X có %C = 58,82%, %H = 9,80% (về khối lượng), còn lại là oxygen. Trên phổ MS của X thấy xuất hiện peak của ion phân tử có giá trị m/z = 102. Trên phổ IR của X thấy xuất hiện tín hiệu đặc trưng ở 1740 cm-1. Phát biểu nào sau đây là đúng?",
            "options": [
              {
                "letter": "A",
                "text": "X là carboxylic acid no, đơn chức, có công thức phân tử C5H10O2",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "X là ester no, đơn chức có công thức phân tử C5H10O2",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Phân tử X có tỉ lệ số nguyên tử carbon và hydrogen là 2 : 1",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Ở điều kiện thường, X phản ứng với NaOH với tỉ lệ mol là 1 : 1",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": "Đáp án: B.\nĐặt công thức đơn giản của X là CxHyOz\nTừ giá trị m/z = 102  CTPT của X là C5H10O2\nTrên phổ IR của X thấy xuất hiện tín hiệu đặc trưng ở 1740 cm-1  liên kết C=O\nA. Sai. Peak đặc trưng của carboxylic acid là C=O (1725 – 1700 cm-1) và O-H (3300 – 2500 cm-1).\nB. Đúng.\nC. Sai. Phân tử X có tỉ lệ số nguyên tử carbon và hydrogen là 1 : 2.\nD. Sai. Phản ứng thủy phân ester trong môi trường base cần đun nóng.\nPHẦN II. Câu trắc nghiệm đúng sai. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.\n1. Mức độ thông hiểu:"
          },
          {
            "rawNum": 1,
            "text": "Điền vào chỗ trống nội dung phù hợp để hoàn thành câu dưới đây:\nLipid là những hợp chất …(1)… có trong tế bào sống, không hoà tan trong nước, nhưng hoà tan trong các dung môi hữu cơ ...(2)….",
            "options": [
              {
                "letter": "A",
                "text": "(1) vô cơ, (2) phân cực",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "(1) vô cơ, (2) không phân cực",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "(1) hữu cơ, (2) phân cực",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "(1) hữu cơ, (2) không phân cực",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 2,
            "text": "Chất béo là triester của acid béo với",
            "options": [
              {
                "letter": "A",
                "text": "methyl alcohol",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "ethylene glycol",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "ethyl alcohol",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "glycerol",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 3,
            "text": "Cho các chất hữu cơ có công thức cấu tạo như sau: CH3COOC2H5, C15H31COOCH3, (C17H33COO)2C2H4 và (C17H35COO)3C3H5(với các gốc hydrocarbon đều là mạch carbon không nhánh), công thức nào là của chất béo?",
            "options": [
              {
                "letter": "A",
                "text": "CH3COOC2H5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C15H31COOCH3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "(C17H33COO)2C2H4",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "(C17H35COO)3C3H5",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 4,
            "text": "Loại dầu, mỡ nào dưới đây không thuộc loại lipid?",
            "options": [
              {
                "letter": "A",
                "text": "Mỡ động vật",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Dầu thực vật",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Dầu cá",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dầu mazut",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 5,
            "text": "Acid nào sau đây không phải acid béo?",
            "options": [
              {
                "letter": "A",
                "text": "Acetic acid",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Stearic acid",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Oleic acid",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Palmitic acid",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 6,
            "text": "Palmitic acid là một acid béo có trong mỡ động vật và dầu cọ. Công thức của palmitic acid là",
            "options": [
              {
                "letter": "A",
                "text": "C3H5(OH)3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3COOH",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "C15H31COOH",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "C17H35COOH",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 7,
            "text": "Công thức của oleic acid là",
            "options": [
              {
                "letter": "A",
                "text": "C2H5COOH",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C17H33COOH",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "HCOOH",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3COOH",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 8,
            "text": "Chất nào sau đây thuộc loại acid béo omega-3?",
            "options": [
              {
                "letter": "A",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 9,
            "text": "Số nguyên tử carbon trong phân tử stearic acid là",
            "options": [
              {
                "letter": "A",
                "text": "16",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "15",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "18",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "19",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 10,
            "text": "Số nguyên tử oxygen có trong phân tử triglyceride là",
            "options": [
              {
                "letter": "A",
                "text": "6",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "2",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "4",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 11,
            "text": "Chất nào sau đây là chất béo?",
            "options": [
              {
                "letter": "A",
                "text": "Triolein",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Methyl acetate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Cellulose",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Glycerol",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 12,
            "text": "Hợp chất (CH3[CH2]14COO)3C3H5 có tên gọi là",
            "options": [
              {
                "letter": "A",
                "text": "tripalmitin",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "tristearin",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "triolein",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "trilinolein",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 13,
            "text": "Công thức cấu tạo của triglyceride tạo bởi glycerol và stearic acid là",
            "options": [
              {
                "letter": "A",
                "text": "(C17H33COO)3C3H5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "(C17H35COO)3C3H5",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "(C17H31COO)3C3H5",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "(C15H31COO)3C3H5",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          }
        ]
      }
    ]
  },
  {
    "id": "c1_topic4_lipid_chat_beo",
    "title": "Chuyên đề 4: Lipid, Chất Béo & Chỉ Số Axit - Xà Phòng Hóa",
    "icon": "🥑",
    "description": "Axit béo no và không no, phản ứng hydrogen hóa dầu thành mỡ, tính toán chỉ số acid và xà phòng hóa.",
    "levels": [
      {
        "level": 1,
        "title": "Mức độ 1: Lý thuyết axit béo & Tính chất chất béo",
        "target": "6 - 7 Điểm",
        "questions": [
          {
            "rawNum": 14,
            "text": "Tính chất vật lí nào sau đây là của chất béo?",
            "options": [
              {
                "letter": "A",
                "text": "Không tan trong nước, nhẹ hơn nước",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Tan nhiều trong nước, nhẹ hơn nước",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Không tan trong nước, nặng hơn nước",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Tan nhiều trong nước, nặng hơn nước",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 15,
            "text": "Mỡ động vật, dầu thực vật đều không tan trong chất nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Nước",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Benzene",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Hexane",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Chloroform",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 16,
            "text": "Chất béo động vật hầu hết ở thể rắn là do phân tử chứa",
            "options": [
              {
                "letter": "A",
                "text": "chủ yếu gốc acid béo không no",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "glycerol trong phân tử",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "chủ yếu gốc acid béo no",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "gốc acid béo",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 17,
            "text": "Trong các dầu dưới đây, dầu nào không chứa ester của acid béo và glycerol?",
            "options": [
              {
                "letter": "A",
                "text": "Dầu lạc (đậu phộng)",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Dầu đậu nành",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Dầu dừa",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dầu mỏ",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 18,
            "text": "Ở điều kiện thường, chất nào sau đây tồn tại ở trạng thái rắn?",
            "options": [
              {
                "letter": "A",
                "text": "Tristearin",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Methyl acetate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Triolein",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Ethanol",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 19,
            "text": "Chất béo là thành phần dinh dưỡng cơ bản của con người, đồng thời là dạng tích trữ năng lượng quan trọng và giúp duy trì nhiệt độ cho cơ thể. Nhận định nào sau đây về chất béo không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Có thành phần nguyên tố gồm ",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Tan nhiều trong nước",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Nhẹ hơn nước",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Là triester của glycerol với acid béo",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 20,
            "text": "Phát biểu nào sau đây sai?",
            "options": [
              {
                "letter": "A",
                "text": "Phản ứng thủy phân chất béo trong môi trường acid là phản ứng thuận nghịch",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Phản ứng thủy phân chất béo trong môi trường acid gọi là phản ứng xà phòng hóa",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Thủy phân chất béo trong môi trường base tạo ra glycerol và muối của acid béo",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Phản ứng thủy phân chất béo trong môi trường base là phản ứng một chiều",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 21,
            "text": "Khi đun nóng chất béo với dung dịch H2SO4 loãng thu được glycerol và",
            "options": [
              {
                "letter": "A",
                "text": "acid béo",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "muối sodium của acid béo",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "acid hữu cơ",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "muối potassium của acid béo",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 22,
            "text": "Khi thuỷ phân chất béo trong môi trường base thì thu được muối của acid béo và",
            "options": [
              {
                "letter": "A",
                "text": "phenol",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "glycerol",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "alcohol đơn chức",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "ester đơn chức",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 23,
            "text": "Thuỷ phân triglyceride (C17H35COO)3C3H5 trong dung dịch NaOH, thu được muối có tên gọi nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Sodium stearate",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Sodium palmitate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Sodium oleate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Sodium acetate",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 24,
            "text": "Thuỷ phân tripalmitin trong dung dịch NaOH, thu được muối có công thức",
            "options": [
              {
                "letter": "A",
                "text": "C17H35COONa",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "C2H5COONa",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3COONa",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "C15H31COONa",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 25,
            "text": "Chất nào sau đây phản ứng với dung dịch NaOH sinh ra glycerol?",
            "options": [
              {
                "letter": "A",
                "text": "Saccharose",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Glucose",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Methyl acetate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Tristearin",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 26,
            "text": "Thủy phân hoàn toàn 1 mol chất béo, thu được",
            "options": [
              {
                "letter": "A",
                "text": "1 mol ethylen glicol",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "3 mol glycerol",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "1 mol glycerol",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "3 mol ethylen glicol",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 27,
            "text": "Thủy phân hoàn toàn triglyceride X trong dung dịch NaOH thu được C17H33COONa và C3H5(OH)3. Công thức của X là",
            "options": [
              {
                "letter": "A",
                "text": "(C15H31COO)3C3H5",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "(C17H31COO)3C3H5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "(C17H35COO)3C3H5",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "(C17H33COO)3C3H5",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 28,
            "text": "Muốn chuyển hóa triolein thành tristearin cần cho triolein tác dụng với chất nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Dung dịch H2SO4 loãng",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Br2 khan",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "H2 có Ni làm xúc tác",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Dung dịch NaOH loãng",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          }
        ]
      },
      {
        "level": 2,
        "title": "Mức độ 2: Bài toán thủy phân chất béo (BTKL)",
        "target": "8 - 9 Điểm",
        "questions": [
          {
            "rawNum": 29,
            "text": "Để biến một số dầu thành mỡ rắn hoặc bơ nhân tạo người ta thực hiện quá trình này sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Cô cạn ở nhiệt độ cao",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Hydrogen hóa (xt, to, p)",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Làm lạnh",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Phản ứng xà phòng hóa",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 30,
            "text": "Dầu mỡ để lâu ngày thường có mùi hôi, khét. Hiện tượng này gọi là sự ôi mỡ. Phát biểu nào sau đây là không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Sự ôi mỡ là do gốc hydrocarbon không no trong phân tử chất béo cộng hợp với hydrogen thành chất béo no",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Sự ôi mỡ là do gốc hydrocarbon không no trong phân tử chất béo bị oxi hoá chậm bởi oxygen trong không khí",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Việc sử dụng lại dầu, mỡ chiên, rán nhiều lần cũng gây hại tới sức khoẻ",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dầu, mỡ tái sử dụng nhiều lần cũng có hiện tượng ôi mỡ",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 31,
            "text": "Phản ứng hóa học nào sau đây xảy ra thuận nghịch?",
            "options": [
              {
                "letter": "A",
                "text": "Đun nóng tristearin với dung dịch H2SO4 loãng",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Đun nóng trilinolein với dung dịch NaOH",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Hydrogen hóa triolein thành tristearin",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Cho triolein phản ứng với dung dịch Br2",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 32,
            "text": "Trong công nghiệp, chất béo chủ yếu được dùng để sản xuất",
            "options": [
              {
                "letter": "A",
                "text": "ethanol và acid béo",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "xà phòng và ethanol",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "glucose và glycerol",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "xà phòng và glycerol",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 33,
            "text": "Chất hữu cơ X được dùng phổ biến trong lĩnh vực mĩ phẩm và phụ gia thực phẩm. Khi thủy phân hoàn toàn bất kì chất béo nào cũng đều thu được X. Chất X là",
            "options": [
              {
                "letter": "A",
                "text": "ethanol",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "glycerol",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "formic acid",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "stearic acid",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 34,
            "text": "Trong cơ thể người, quá trình tiêu hoá và hấp thụ chất béo diễn ra chủ yếu ở",
            "options": [
              {
                "letter": "A",
                "text": "dạ dày",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "ruột già",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "ruột non",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "khoang miệng",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 35,
            "text": "Dầu cá biển có chứa nhiều acid béo nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Stearic acid",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Palmitic acid",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Acid béo omega-3",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Acid béo omega-6",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 36,
            "text": "Các loại dầu thực vật (dầu mè, dầu đậu nành,...) chứa nhiều acid béo nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Stearic acid",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Palmitic acid",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Acid béo omega-3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Acid béo omega-6. 2. Mức độ thông hiểu:",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 37,
            "text": "-linoleic acid (ALA) là một loại acid béo quan trọng đối với cơ thể, được cung cấp chủ yếu từ thức ăn có nguồn gốc thực vật như dầu đậu nành, dầu hạt cải, cải bó xôi,...\nCấu trúc mạch carbon của -linoleic acid như sau:\nCho các phát biểu sau:\n(1) ALA là acid béo thuộc loại Omega-3.\n(2) Trong ALA, nhóm nguyên tử ở carbon nối đôi ở vị trí trans với nhau.\n(3) Muối sodium của ALA có tác dụng giặt rửa.\n(4) Phân tử ALA có chứa 18 nguyên tử carbon.\nSố phát biểu đúng là",
            "options": [
              {
                "letter": "A",
                "text": "3",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "2",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "4",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "1",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 38,
            "text": "Cho glycerol phản ứng với hỗn hợp hai acid béo C17H35COOH và C15H31COOH, số loại triester được tạo ra tối đa là",
            "options": [
              {
                "letter": "A",
                "text": "6",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "3",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "4",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 39,
            "text": "Phát biểu nào sau đây sai?",
            "options": [
              {
                "letter": "A",
                "text": "Ở điều kiện thường, chất béo (C17H33COO)3C3H5 ở trạng thái rắn",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Chất béo có công thức chung là (RCOO)3C3H5",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Methyl acrylate, tripalmitin và tristearin đều là ester",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Sản phẩm của phản ứng xà phòng hoá chất béo là glycerol và xà phòng",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 40,
            "text": "Phản ứng hóa học nào sau đây xảy ra thuận nghịch?",
            "options": [
              {
                "letter": "A",
                "text": "Đun nóng tristearin với dung dịch H2SO4 loãng",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Đun nóng trilinolein với dung dịch NaOH",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Hydrogen hóa triolein thành tristearin",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Cho triolein phản ứng với dung dịch Br2",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 41,
            "text": "Nhận định nào sau đây sai?",
            "options": [
              {
                "letter": "A",
                "text": "Trong công nghiệp có thể chuyển hoá chất béo lỏng thành chất béo rắn",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Dầu ăn và mỡ bôi trơn máy có cùng thành phần nguyên tố",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Phản ứng thủy phân chất béo trong môi trường acid là phản ứng thuận nghịch",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Tristearin là chất rắn ở điều kiện thường",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 42,
            "text": "Phát biểu nào sau đây không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Triolein có khả năng tham gia phản ứng cộng hydrogen khi đun nóng có xúc tác, áp suất thích hợp",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Các chất béo thường không tan trong nước và nhẹ hơn nước",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Chất béo bị thủy phân khi đun nóng trong dung dịch kiềm",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Chất béo là triester của ethylene glycol với các acid béo",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 43,
            "text": "Triolein là loại chất béo có nhiều trong dầu thực vật như dầu oliu, dầu lạc, dầu vừng. Triolein giúp làm giảm cholesterol trong máu, giảm nguy cơ mắc các bệnh tim mạch, tăng cường hấp thụ vitamin (A, D, E và K), chống viêm, điều hoà hormone,... Nhận định nào sau đây về triolein không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Chủ yếu tồn tại ở dạng đồng phân trans",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Có nhiệt độ nóng chảy thấp hơn ",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Có 6 liên kết  trong phân tử",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dễ hoà tan các vitamin A, D, E và K",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          }
        ]
      },
      {
        "level": 3,
        "title": "Mức độ 3: Chỉ số acid, xà phòng hóa & Vận dụng cao",
        "target": "9 - 10 Điểm",
        "questions": [
          {
            "rawNum": 44,
            "text": "Cho các phát biểu sau:\n(a) Dầu cá biển chứa nhiều acid béo omega-6.\n(b) Các loại dầu thực vật (dầu mè, dầu đậu nành, dầu hướng dương,...) chứa nhiều acid béo omega-3.\n(c) Acid béo omega-3 và omega-6 đều có vai trò quan trọng đối với cơ thể, giúp phòng ngừa nhiều loại bệnh.\n(d) Acid béo omega-3 và omega-6 là các acid béo không no với liên kết đôi đầu tiên ở vị trí số 3 và 6 khi đánh số từ nhóm methyl.\nSố phát biểu đúng là",
            "options": [
              {
                "letter": "A",
                "text": "4",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "1",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "2",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "3",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 45,
            "text": "Cho các phát biểu sau:\n(a) Chất béo được gọi chung là triglyceride.\n(b) Chất béo nhẹ hơn nước, không tan trong nước nhưng tan nhiều trong dung môi hữu cơ.\n(c) Phản ứng thủy phân chất béo trong môi trường acid là phản ứng thuận nghịch.\n(d) Ở nhiệt độ thường, chất béo chứa nhiều gốc acid béo không no thường ở thể rắn.\nSố phát biểu đúng là",
            "options": [
              {
                "letter": "A",
                "text": "4",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "1",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "2",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "3",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 46,
            "text": "Xà phòng hóa chất béo X trong dung dịch NaOH, thu được glycerol và hai muối là sodium oleate, sodium palmitate có tỉ lệ mol tương ứng 1 : 2. Số công thức cấu tạo của X thỏa mãn là",
            "options": [
              {
                "letter": "A",
                "text": "3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "4",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "1",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "2",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 47,
            "text": "Cho glyceryl trioleate (hay triolein) lần lượt vào mỗi ống nghiệm chứa riêng biệt: Na, Cu(OH)2, CH3OH, dung dịch Br2, dung dịch NaOH. Trong điều kiện thích hợp, số phản ứng xảy ra là",
            "options": [
              {
                "letter": "A",
                "text": "2",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "3",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "5",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "4",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 48,
            "text": "Cho sơ đồ chuyển hoá: Triolein  X Y Z. Tên gọi của Z là",
            "options": [
              {
                "letter": "A",
                "text": "oleic acid",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "acid linoleic",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "stearic acid",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "palmitic acid",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 49,
            "text": "Cho 0,1 mol tristearin tác dụng hoàn toàn với dung dịch NaOH dư, đun nóng, thu được m gam glycerol. Giá trị của m là",
            "options": [
              {
                "letter": "A",
                "text": "27,6",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "4,6",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "14,4",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "9,2",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 50,
            "text": "Khối lượng của triolein cần dùng tối thiểu để sản xuất 8,9 tấn tristearin là",
            "options": [
              {
                "letter": "A",
                "text": "884 kg",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "88,4 kg",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "8840 kg",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "8,84 kg",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 51,
            "text": "Xà phòng hóa hoàn toàn 17,8 gam chất béo X cần vừa đủ dung dịch chứa 0,06 mol NaOH. Cô cạn dung dịch sau phản ứng thu được m gam muối khan. Giá trị của m là",
            "options": [
              {
                "letter": "A",
                "text": "19,12",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "18,36",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "19,04",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "14,68",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 52,
            "text": "Thủy phân hoàn toàn m gam chất béo bằng dung dịch NaOH, đun nóng thu được 9,2 gam glycerol và 91,8 gam muối. Giá trị của m là",
            "options": [
              {
                "letter": "A",
                "text": "89",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "101",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "85",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "93. PHẦN II. Câu trắc nghiệm đúng sai. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai. 1. Mức độ thông hiểu:",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 4,
            "text": "Nguyên liệu nào sau đây dùng để điều chế chất giặt rửa tự nhiên?",
            "options": [
              {
                "letter": "A",
                "text": "Dầu mỏ",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Mỡ động vật",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Gỗ",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Quả bồ kết",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": "Đáp án: D.\nKhi xà phòng, chất giặt rửa tan vào nước sẽ tạo dung dịch có sức căng bề mặt nhỏ làm cho vật cần giặt rửa dễ thấm ướt. Đuôi kị nước trong xà phòng và chất giặt rửa thâm nhập vào vết bẩn (Hình b), phân chia vết bản thành những hạt rất nhỏ có đầu ưa nước quay ra ngoài (Hình c), các hạt này phân tán vào nước và bị rửa trôi (Hình d)."
          },
          {
            "rawNum": 6,
            "text": "Để tẩy vết dầu, mỡ bám trên quần áo, sử dụng chất nào sau đây là phù hợp nhất?",
            "options": [
              {
                "letter": "A",
                "text": "Nước cất",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Dung dịch sodium hydroxide",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Dung dịch nước Javel",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dung dịch xà phòng",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": "Đáp án: D.\n1. Phương pháp sản xuất xà phòng:\nXà phòng được sản xuất bằng cách đun chất béo với dung dịch NaOH đặc hoặc KOH đặc.\nViết gọn lại:  C3H5(OCOC17H35)3  +3 NaOH   C3H5(OH)3  + 3C17H35COONa\nCác muối của acid béo tách ra được đem trộn với chất diệt khuẩn, chất tạo hương,… rồi ép thành bánh với nhiều hình dạng khác nhau.\nXà phòng còn được sản xuất từ dầu mỏ theo sơ đồ sau:\n2. Phương pháp sản xuất chất giặt rửa tổng hợp:\nChất giặt rửa tổng hợp được sản xuất từ dầu mỏ theo sơ đồ sau:\nMuối sulfonate hoặc muối sulfate được trộn với một số chất phụ gia khác nhau để tọa thành chất giặt rửa tổng hợp."
          },
          {
            "rawNum": 7,
            "text": "Chất giặt rửa tổng hợp được sản xuất từ nguồn nguyên liệu nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Tinh bột",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Quả bồ hòn",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Dầu mỏ",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Chất béo",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": "Đáp án: C."
          },
          {
            "rawNum": 8,
            "text": "Hợp chất hữu cơ X có công thức cấu tạo như sau:\nPhát biểu nào sau đây không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "X có công thức phân tử là ",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "X được sử dụng để sản xuất xà phòng",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "X là muối sodium alkylbenzene sulfonate",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "X có đầu ưa nước và đuôi kị nước",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": "Đáp án: B.\nB. Sai. X được dùng để sản xuất chất giặt rửa tổng hợp."
          },
          {
            "rawNum": 1,
            "text": "Hỗn hợp muối sodium hoặc potassium của acid béo và các chất phụ gia gọi là",
            "options": [
              {
                "letter": "A",
                "text": "chất giặt rửa tự nhiên",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "chất giặt rửa tổng hợp",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "xà phòng",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "bột giặt tổng hợp",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 2,
            "text": "Thành phần chính của xà phòng là",
            "options": [
              {
                "letter": "A",
                "text": "muối của acid béo",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "muối của acid vô cơ",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "muối sodium hoặc potassium của acid béo",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "muối sodium hoặc potassium của acid",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 3,
            "text": "Thành phần chủ yếu của xà phòng thường là",
            "options": [
              {
                "letter": "A",
                "text": "các acid béo",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "muối sodium alkylsulfate hoặc alkylbenzene sulfonate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "muối sodium stearate và sodium palmitate",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "các chất béo chứa gốc acid béo no",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 4,
            "text": "Chất nào sau đây là thành phần chủ yếu của xà phòng?",
            "options": [
              {
                "letter": "A",
                "text": "CH3COONa",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3[CH2]16COONa",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "CH3[CH2]4COONa",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "CH3[CH2]14OSO3Na",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 5,
            "text": "Chất giặt rửa tổng hợp là",
            "options": [
              {
                "letter": "A",
                "text": "hợp muối sodium hoặc potassium của acid béo và các chất phụ gia",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "là các chất được tổng hợp hóa học và có tác dụng giặt rửa như xà phòng",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "là hỗn hợp hai muối sodium chloride, sodium hypochlorite và các chất phụ gia",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "là các chất được tổng hợp hóa học và có tác dụng tẩy màu",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 6,
            "text": "Thành phần chính của chất giặt rửa tổng hợp thường là",
            "options": [
              {
                "letter": "A",
                "text": "muối sodium hoặc potassium của acid béo",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "muối potassium oleate hoặc potassium linoleate",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "muối sodium alkylsulfate hoặc sodium alkylbenzenesulfonate",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "muối sodium hoặc potassium của carboxylic acid",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          }
        ]
      }
    ]
  },
  {
    "id": "c1_topic5_xa_phong_chat_giat_rua",
    "title": "Chuyên đề 5: Xà Phòng & Chất Giặt Rửa Tổng Hợp",
    "icon": "🧼",
    "description": "Cơ chế tẩy rửa phân cực/không phân cực, hạt mixen, ứng xử trong nước cứng và bảo vệ môi trường.",
    "levels": [
      {
        "level": 1,
        "title": "Mức độ 1: Khái niệm & Cơ chế tẩy rửa",
        "target": "6 - 7 Điểm",
        "questions": [
          {
            "rawNum": 7,
            "text": "Chất nào sau đây là thành phần chính của chất giặt rửa tổng hợp?",
            "options": [
              {
                "letter": "A",
                "text": "C3H5(OH)3",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3[CH2]16COONa",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3[CH2]4COONa",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 8,
            "text": "Chất nào sau đây là thành phần chính của chất giặt rửa tổng hợp?",
            "options": [
              {
                "letter": "A",
                "text": "C2H5COONa",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "CH3[CH2]16COOK",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "CH3[CH2]10CH2OSO3Na",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "CH3[CH2]11CO3Na",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 9,
            "text": "Dung dịch nào sau đây là chất giặt rửa tự nhiên?",
            "options": [
              {
                "letter": "A",
                "text": "Nước quả cam",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Nước quả chanh",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Nước quả bồ kết",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Nước quả dâu",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 10,
            "text": "Sodium stearate là muối được ứng trong sản xuất xà phòng và có công thức cấu tạo sau:\nĐầu ưa nước trong phân tử sodium stearate là",
            "options": [
              {
                "letter": "A",
                "text": "-COO–Na+",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "CH3[CH2]14-",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Na+",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "-COO–",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 11,
            "text": "Liên kết hóa học trong phân tử xà phòng C17H35COONa là",
            "options": [
              {
                "letter": "A",
                "text": "chỉ có liên kết ion",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "chỉ có liên kết cộng hóa trị",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "liên kết cộng hóa trị và liên kết ion",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Liên kết cho – nhận và liên kết ion",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 12,
            "text": "Cơ chế giặt rửa của xà phòng là do muối acid béo trong xà phòng có đặc điểm nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Có nhóm –COONa hoặc COOK tan trong dầu, mỡ",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Có phần gốc hydrocarbon R– tan được trong nước",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Có tính chất hoạt động bề mặt gồm một phần kị nước và một phần ưa nước",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Có phản ứng thuỷ phân trong nước",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 13,
            "text": "Khi xà phòng hoặc chất giặt rửa tan vào nước, chúng tạo thành dung dịch có sức căng bề mặt nhỏ, giúp vật cần giặt rửa dễ thấm ướt. Phần nào trong xà phòng và chất giặt rửa thâm nhập vào vết bẩn và chia vết bẩn thành những hạt nhỏ phân tán vào nước?",
            "options": [
              {
                "letter": "A",
                "text": "Phần ưa nước",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Phần kị nước",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Gốc hydrocarbon",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Gốc carboxylate",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 14,
            "text": "Công dụng quan trọng nhất của xà phòng và chất giặt rửa là",
            "options": [
              {
                "letter": "A",
                "text": "làm nhiên liệu",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "tẩy rửa",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "làm đẹp",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "chất phụ gia",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 15,
            "text": "Xà phòng và chất giặt rửa có điểm chung là",
            "options": [
              {
                "letter": "A",
                "text": "chứa muối sodium có khả năng làm giảm sức căng bề mặt của các chất bẩn",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "các muối được lấy từ phản ứng xà phòng hoá chất béo",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "sản phẩm của công nghệ hoá dầu",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "có nguồn gốc từ động vật hoặc thực vật",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 16,
            "text": "Để tẩy vết dầu, mỡ bám trên quần áo, sử dụng chất nào sau đây là phù hợp nhất?",
            "options": [
              {
                "letter": "A",
                "text": "Nước cất",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Dung dịch sodium hydroxide",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Dung dịch nước Javel",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dung dịch xà phòng",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 17,
            "text": "Cấu trúc phân tử sodium palmitate (C15H31COONa) có thể được minh họa như sau:\nKhi hòa tan vào nước, các phân tử sodium palmitate sẽ hình thành nên cấu trúc nào dưới đây?",
            "options": [
              {
                "letter": "A",
                "text": "",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 18,
            "text": "Cho phản ứng được biểu diễn thông qua phương trình hoá học sau:\nPhản ứng trên thuộc loại phản ứng nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Phản ứng ester hoá",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Phản ứng xà phòng hoá",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Phản ứng trung hoà",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Phản ứng oxi hoá",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 19,
            "text": "Xà phòng được điều chế bằng cách nào trong các cách sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Thủy phân chất béo trong môi trường acid",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Thủy phân chất béo trong môi trường base",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Hòa tan chất béo trong dung môi hữu cơ",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Hydrogen hóa dầu thực vật",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 20,
            "text": "Hoá chất chủ đạo trong ngành công nghiệp sản xuất xà phòng là",
            "options": [
              {
                "letter": "A",
                "text": "K2SO4",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "NaCl",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Mg(NO3)2",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "NaOH",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 21,
            "text": "Có thể dùng chất nào thay thế cho sodium hydroxide trong phản ứng điều chế xà phòng?",
            "options": [
              {
                "letter": "A",
                "text": "Sodium chloride",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Potassium hydroxide",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Magnesium hydroxide",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Barium chloride",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          }
        ]
      },
      {
        "level": 2,
        "title": "Mức độ 2: Nước cứng, Sản xuất & Môi trường",
        "target": "8 - 9 Điểm",
        "questions": [
          {
            "rawNum": 22,
            "text": "Xà phòng có thể được điều chế từ nguồn nguyên liệu nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Glycerol và dầu mỏ",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Nước bồ hòn, bồ kết",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Dầu thực vật và củ cải đường",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dầu, mỡ động thực vật và dầu mỏ",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 23,
            "text": "Chất giặt rửa tổng hợp chủ yếu được sản xuất từ",
            "options": [
              {
                "letter": "A",
                "text": "mỡ động vật",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "dầu thực vật",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "quả bồ kết, bồ hòn",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "dầu mỏ",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 24,
            "text": "Trong quá trình điều chế xà phòng bằng phản ứng xà phòng hóa, nguyên liệu có thể thay thế mỡ động vật bằng hóa chất nào sau đây?",
            "options": [
              {
                "letter": "A",
                "text": "Tinh dầu chanh sả",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Dầu ăn",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Dầu bôi trơn máy",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dầu mỏ",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 25,
            "text": "Trong công nghiệp, nguyên liệu nào sau đây không dùng để sản xuất xà phòng?",
            "options": [
              {
                "letter": "A",
                "text": "Chất béo",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Potassium hydroxide",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Sodium hydroxide",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Sodium laurysulfate",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 26,
            "text": "Chọn phát biểu sai? Chất giặt rửa tổng hợp có được sử dụng phổ biến hơn so với xà phòng là do",
            "options": [
              {
                "letter": "A",
                "text": "dễ hòa tan trong nước",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "thân thiên với môi trường",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "có thể dùng để giặt rửa trong nước cứng",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "sử dụng được trong môi trường acid",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 27,
            "text": "Phát biểu nào sau đây đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Chất giặt rửa là những chất có tác dụng giống như xà phòng nhưng được tổng hợp từ dầu mỏ",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Chất giặt rửa là những chất có tác dụng làm sạch các vết bẩn trên bề mặt vật rắn",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Chất giặt rửa là những chất khi dùng cùng với nước thì có tác dụng làm sạch các vết bẩn bám trên các vật rắn",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Chất giặt rửa là những chất khi dùng cùng với nước thì có tác dụng làm sạch các vết bẩn bám trên các vật rắn mà không gây ra phản ứng hóa học với các chất đó",
                "isCorrect": true
              }
            ],
            "correctAnswer": "D",
            "explanation": ""
          },
          {
            "rawNum": 28,
            "text": "Trong thành phần của xà phòng và của chất giặt rửa thường có một số ester. Vai trò của các ester này là",
            "options": [
              {
                "letter": "A",
                "text": "làm tăng khả năng giặt rửa",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "tạo hương thơm mát, dễ chịu",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "tạo màu sắc hấp dẫn",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "làm giảm giá thành của xà phòng và chất giặt rửa",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 29,
            "text": "Nhận định nào sau đây đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Chất giặt rửa tổng hợp được sản xuất từ dầu mỏ",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Xà phòng là muối của các acid béo không no",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Mỡ động vật, dầu thực vật là nguyên liệu trong sản xuất chất giặt rửa tổng hợp",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Dung dịch xà phòng có môi trường acid",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 30,
            "text": "Phát biểu nào sau đây không đúng về xà phòng và chất giặt rửa tổng hợp?",
            "options": [
              {
                "letter": "A",
                "text": "Đều được sản xuất bằng cách đun nóng chất béo với dung dịch kiềm",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "Đều có khả năng hoạt động bề mặt cao, có tác dụng làm giảm sức căng bề mặt chất bẩn",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Xà phòng là hỗn hợp muối sodium (potassium) của acid béo, không nên dùng xà phòng trong nước cứng vì tạo ra muối kết tủa",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Chất tẩy rửa tổng hợp không phải là muối sodium của carboxylic acid nên không bị kết tủa trong nước cứng",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 31,
            "text": "Vai trò của dung dịch NaCl bão hòa có trong quy trình điều chế xà phòng có gia nhiệt là",
            "options": [
              {
                "letter": "A",
                "text": "để xà phòng tách ra khỏi hỗn hợp phản ứng",
                "isCorrect": true
              },
              {
                "letter": "B",
                "text": "để tạo môi trường pH phù hợp",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "để làm tăng tốc độ của phản ứng xà phòng hóa",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "để tránh nhiệt phân muối của các acid béo",
                "isCorrect": false
              }
            ],
            "correctAnswer": "A",
            "explanation": ""
          },
          {
            "rawNum": 32,
            "text": "Chất phụ gia nào sau đây không có sử dụng trong quá trình sản xuất xà phòng?",
            "options": [
              {
                "letter": "A",
                "text": "Chất độn",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Chất tạo màu",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Chất tạo hạt",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Chất tạo hương",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 33,
            "text": "Phát biểu nào sau đây đúng về nước bồ kết?",
            "options": [
              {
                "letter": "A",
                "text": "Nước bồ kết là xà phòng dạng lỏng",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Muối potassium của các acid béo không no là thành phần chính của nước bồ kết",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Nước bồ kết thuộc nhóm chất giặt rửa tự nhiên, không phải chất giặt rửa tổng hợp, cũng không phải là xà phòng",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "Nước bồ kết thuộc nhóm chất giặt rửa tự nhiên vì được điều chế từ các acid béo sẵn có trong tự nhiên",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          },
          {
            "rawNum": 34,
            "text": "Theo nguồn gốc, chất giặt rửa được chia thành hai loại: chất giặt rửa tự nhiên và chất giặt rửa tổng hợp. Phát biểu nào sau đây là không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Phân tử chất giặt rửa có cấu tạo gồm hai phần, một phần ưa nước và một phần kị nước",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Phân tử chất giặt rửa tổng hợp có phần kị nước là gốc hydrocarbon mạch dài tương tự như xà phòng",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "Chất giặt rửa tổng hợp dễ bị phân huỷ sinh học bởi các vi sinh vật hơn xà phòng",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Từ nguồn nguyên liệu dầu mỏ, có thể sản xuất được cả xà phòng và chất giặt rửa tổng hợp. 2. Mức độ thông hiểu:",
                "isCorrect": false
              }
            ],
            "correctAnswer": "",
            "explanation": ""
          },
          {
            "rawNum": 35,
            "text": "Cho hình vẽ mô tả cấu tạo của phân tử xà phòng như sau:\nNhận định nào sau đây về xà phòng không đúng?",
            "options": [
              {
                "letter": "A",
                "text": "Phân tử xà phòng có đầu ưa nước và đuôi kị nước",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "Khi giặt rửa, đầu ưa nước thâm nhập vào vết bẩn",
                "isCorrect": true
              },
              {
                "letter": "C",
                "text": "Xà phòng tan trong nước tạo thành dung dịch có sức căng bề mặt nhỏ hơn nước",
                "isCorrect": false
              },
              {
                "letter": "D",
                "text": "Phần kị nước là gốc hydrocarbon mạch không phân nhánh",
                "isCorrect": false
              }
            ],
            "correctAnswer": "B",
            "explanation": ""
          },
          {
            "rawNum": 36,
            "text": "Khi cho vài giọt dầu ăn vào dung dịch xà phòng, lắc đều. Hiện tượng quan sát được là",
            "options": [
              {
                "letter": "A",
                "text": "dầu ăn không tan và nổi lên trên",
                "isCorrect": false
              },
              {
                "letter": "B",
                "text": "dầu ăn không tan và chìm xuống dưới",
                "isCorrect": false
              },
              {
                "letter": "C",
                "text": "dầu ăn tan vào dung dịch xà phòng",
                "isCorrect": true
              },
              {
                "letter": "D",
                "text": "dầu ăn kết tủa lắng xuống dưới đáy",
                "isCorrect": false
              }
            ],
            "correctAnswer": "C",
            "explanation": ""
          }
        ]
      }
    ]
  }
];

// ─── 3. SỔ TAY KIẾN THỨC CỐT LÕI CHƯƠNG 1 (ESTER - LIPID) ───────────────────
export const HOA12_CHUONG1_HANDBOOK = {
  title: 'Sổ Tay Kiến Thức Trọng Tâm Chương 1: Ester – Lipid & Chất Giặt Rửa',
  sections: [
    {
      title: '1. Khái niệm, Cấu tạo & Danh pháp Quốc Tế (IUPAC)',
      icon: '🏷️',
      content: [
        'Khi thay thế nhóm -OH ở nhóm carboxyl (-COOH) của carboxylic acid bằng nhóm -OR\' thì được ester dạng RCOOR\'.',
        'Công thức ester no, đơn chức, mạch hở: CnH2nO2 (n >= 2).',
        'Quy tắc gọi tên IUPAC mới: [Tên gốc hydrocarbon R\'] + [Tên gốc carboxylate RCOO-].',
        'Ví dụ: CH3COOCH3 (methyl acetate / methyl ethanoate), HCOOC2H5 (ethyl formate), CH3COOCH2CH2CH(CH3)2 (isoamyl acetate).'
      ]
    },
    {
      title: '2. Tính chất vật lý & Mùi hương đặc trưng',
      icon: '🌸',
      content: [
        'Nhiệt độ sôi: Acid > Alcohol > Ester > Hydrocarbon (do este không có liên kết hydrogen liên phân tử).',
        'Độ tan: Nhẹ hơn nước, rất ít tan trong nước, tan tốt trong dung môi hữu cơ.',
        'Mùi thơm hoa quả tự nhiên: Isoamyl acetate (mùi chuối chín), Benzyl acetate (mùi hoa nhài), Ethyl butanoate & Ethyl isovalerate (mùi táo, dứa).'
      ]
    },
    {
      title: '3. Tính chất hóa học & Thí nghiệm điều chế',
      icon: '⚗️',
      content: [
        'Phản ứng thủy phân trong môi trường acid: RCOOR\' + H2O <=> RCOOH + R\'OH (Phản ứng thuận nghịch, xúc tác H2SO4 đặc, đun nóng).',
        'Phản ứng xà phòng hóa trong môi trường kiềm: RCOOR\' + NaOH -> RCOONa + R\'OH (Phản ứng một chiều).',
        'Este của phenol (RCOOC6H5): Phản ứng với 2 mol NaOH sinh ra 2 muối và H2O: RCOOC6H5 + 2NaOH -> RCOONa + C6H5ONa + H2O.',
        'Vai trò của NaCl bão hòa trong thí nghiệm: Làm tăng khối lượng riêng của dung dịch, giảm độ tan của este/xà phòng giúp tách lớp sản phẩm nổi lên trên.'
      ]
    },
    {
      title: '4. Lipid, Chất béo & Chỉ số chất béo',
      icon: '🥑',
      content: [
        'Chất béo (triglyceride): Triester của glycerol với các acid béo (mạch C dài không phân nhánh, số C chẵn từ 12 đến 24).',
        'Axit béo no: Palmitic acid (C15H31COOH, M=256), Stearic acid (C17H35COOH, M=284) -> Chất béo rắn (mỡ động vật).',
        'Axit béo không no: Oleic acid (C17H33COOH, 1 liên kết đôi cis), Linoleic acid (C17H31COOH, 2 liên kết đôi) -> Chất béo lỏng (dầu thực vật).',
        'Chỉ số acid: Số mg KOH cần để trung hòa lượng acid béo tự do có trong 1 gam chất béo.',
        'Chỉ số xà phòng hóa: Số mg KOH cần để xà phòng hóa hoàn toàn 1 gam chất béo (gồm cả triglixerit và acid béo tự do).'
      ]
    },
    {
      title: '5. Xà phòng & Chất giặt rửa tổng hợp',
      icon: '🧼',
      content: [
        'Thành phần xà phòng: Muối sodium hoặc potassium của acid béo (ví dụ: C17H35COONa, C15H31COOK).',
        'Cấu tạo phân tử chất tẩy rửa: Gồm đầu phân cực ưa nước (-COO-, -SO3-, -OSO3-) và đuôi kị nước (gốc hydrocarbon mạch dài).',
        'Cơ chế tẩy rửa: Đuôi kị nước cắm vào vết dầu bẩn, đầu ưa nước hướng ra ngoài tạo các hạt mixen lơ lửng trong nước và bị rửa trôi.',
        'Hiện tượng nước cứng (chứa Ca2+, Mg2+): Xà phòng tạo kết tủa mất tác dụng tẩy rửa; Chất giặt rửa tổng hợp không bị kết tủa, dùng tốt trong nước cứng.'
      ]
    }
  ]
};

// ─── 4. HÀM TÍNH ĐIỂM CHUẨN FORM BỘ GD&ĐT 2025 (THANG ĐIỂM 10) ───────────────
export function calculateChuong1ExamScore(
  questions: Chuong1Question[],
  answers: Record<string | number, any>
): {
  score10: number;
  part1Score: number;
  part2Score: number;
  part3Score: number;
  detail: Record<string | number, { isCorrect: boolean; score: number; maxScore: number }>;
} {
  let part1Score = 0;
  let part2Score = 0;
  let part3Score = 0;
  const detail: Record<string | number, { isCorrect: boolean; score: number; maxScore: number }> = {};

  questions.forEach(q => {
    const qKey = q.id || q.number;
    const userAns = answers[qKey] || answers[q.number];

    if (q.part === 1 || q.type === 'multiple_choice') {
      // Phần I: 0.25đ / câu đúng
      const correctOpt = q.options?.find(o => o.isCorrect)?.letter || q.correctAnswer || '';
      const isOk = String(userAns || '').trim().toUpperCase() === correctOpt.trim().toUpperCase();
      const s = isOk ? 0.25 : 0;
      part1Score += s;
      detail[qKey] = { isCorrect: isOk, score: s, maxScore: 0.25 };
    } else if (q.part === 2 || q.type === 'true_false') {
      // Phần II: Đúng/Sai 4 ý tính điểm lũy tiến (1 ý = 0.1đ, 2 ý = 0.25đ, 3 ý = 0.5đ, 4 ý = 1.0đ)
      let correctSubCount = 0;
      const subAns = (userAns && typeof userAns === 'object') ? userAns : {};

      q.options?.forEach(opt => {
        const userChoice = subAns[opt.letter]; // true | false
        if (typeof userChoice === 'boolean' && userChoice === opt.isCorrect) {
          correctSubCount++;
        }
      });

      let s = 0;
      if (correctSubCount === 1) s = 0.1;
      else if (correctSubCount === 2) s = 0.25;
      else if (correctSubCount === 3) s = 0.5;
      else if (correctSubCount === 4) s = 1.0;

      part2Score += s;
      detail[qKey] = { isCorrect: correctSubCount === 4, score: s, maxScore: 1.0 };
    } else if (q.part === 3 || q.type === 'short_answer') {
      // Phần III: 0.25đ / câu đúng đáp số (cho phép sai số format như dấu phẩy hoặc chấm)
      const cleanTarget = String(q.correctAnswer || '').trim().replace(/,/g, '.').replace(/–/g, '-');
      const cleanUser = String(userAns || '').trim().replace(/,/g, '.').replace(/–/g, '-');
      const isOk = Boolean(cleanUser && (cleanUser === cleanTarget || parseFloat(cleanUser) === parseFloat(cleanTarget)));
      const s = isOk ? 0.25 : 0;
      part3Score += s;
      detail[qKey] = { isCorrect: isOk, score: s, maxScore: 0.25 };
    }
  });

  const total = Math.round((part1Score + part2Score + part3Score) * 100) / 100;
  return {
    score10: Math.min(10, total),
    part1Score: Math.round(part1Score * 100) / 100,
    part2Score: Math.round(part2Score * 100) / 100,
    part3Score: Math.round(part3Score * 100) / 100,
    detail
  };
}

// ─── 5. QUẢN LÝ TIẾN ĐỘ HỌC TẬP (STREAK, XP, TIẾN TRÌNH MỞ KHÓA) ─────────────
const STORAGE_PREFIX = 'hoa12_c1_';

export function getChuong1UserProgress(): {
  streakDays: number;
  lastActiveDate: string;
  totalXP: number;
  rankTitle: string;
  unlockedLevels: Record<string, number>; // topicId -> highest unlocked level (1, 2, 3)
  examScores: Record<string, { score: number; timestamp: number; attempts: number }>;
} {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}progress`);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        streakDays: parsed.streakDays || 1,
        lastActiveDate: parsed.lastActiveDate || new Date().toISOString().split('T')[0],
        totalXP: parsed.totalXP || 150,
        rankTitle: getRankTitle(parsed.totalXP || 150),
        unlockedLevels: parsed.unlockedLevels || {
          c1_topic1_danh_phap: 1,
          c1_topic2_tinh_chat_vat_ly: 1,
          c1_topic3_thuy_phan: 1,
          c1_topic4_lipid_chat_beo: 1,
          c1_topic5_xa_phong_chat_giat_rua: 1
        },
        examScores: parsed.examScores || {}
      };
    }
  } catch (e) {
    // fallback
  }

  return {
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    totalXP: 150,
    rankTitle: 'Tân Binh Hóa Học',
    unlockedLevels: {
      c1_topic1_danh_phap: 1,
      c1_topic2_tinh_chat_vat_ly: 1,
      c1_topic3_thuy_phan: 1,
      c1_topic4_lipid_chat_beo: 1,
      c1_topic5_xa_phong_chat_giat_rua: 1
    },
    examScores: {}
  };
}

export function saveChuong1ExamResult(examId: string, score: number): void {
  const p = getChuong1UserProgress();
  const today = new Date().toISOString().split('T')[0];

  // Tính Streak
  if (p.lastActiveDate !== today) {
    p.streakDays = (p.streakDays || 0) + 1;
    p.lastActiveDate = today;
  }

  // Cộng XP
  const earnedXP = Math.round(score * 20); // 10đ = 200 XP
  p.totalXP += earnedXP;
  p.rankTitle = getRankTitle(p.totalXP);

  // Lưu điểm bài thi
  const current = p.examScores[examId] || { score: 0, timestamp: 0, attempts: 0 };
  p.examScores[examId] = {
    score: Math.max(current.score, score),
    timestamp: Date.now(),
    attempts: current.attempts + 1
  };

  localStorage.setItem(`${STORAGE_PREFIX}progress`, JSON.stringify(p));
}

export function saveChuong1TopicLevelSuccess(topicId: string, level: number): void {
  const p = getChuong1UserProgress();
  const currentUnlocked = p.unlockedLevels[topicId] || 1;
  if (level >= currentUnlocked) {
    p.unlockedLevels[topicId] = Math.min(3, level + 1);
  }
  p.totalXP += 100;
  p.rankTitle = getRankTitle(p.totalXP);
  localStorage.setItem(`${STORAGE_PREFIX}progress`, JSON.stringify(p));
}

export function getRankTitle(xp: number): string {
  if (xp >= 5000) return '👑 Thủ Khoa Hóa 12';
  if (xp >= 3000) return '💎 Bậc Thầy Ester - Lipid';
  if (xp >= 1500) return '🥇 Chuyên Gia Phản Ứng';
  if (xp >= 500) return '🥈 Nhà Thực Nghiệm';
  return '🥉 Tân Binh Hóa Học';
}
