// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI GIỮA HỌC KÌ 2 HÓA HỌC 12 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi GIỮA Học Kì 2 Hóa Học Lớp 12 Chuẩn Cấu Trúc 2025
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

export const HOA12_MIDTERM2_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa12_gk2_de01",
    "code": "H12-GK2-01",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de01_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các tính chất vật lí chung của kim loại gây nên chủ yếu bởi",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "các electron hoá trị",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "các kim loại đều là chất rắn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "các electron tự do trong mạng tinh thể",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "các ion kim loại",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de01_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết trong mạng tinh thể kim loại là loại liên kết nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết ion",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết cộng hoá trị",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Liên kết van der Waals",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết kim loại",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de01_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điện phân dung dịch Na<sub>2</sub>SO<sub>4</sub> với điện cực trơ, ở cathode xảy ra phản ứng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>O + 2e  H<sub>2</sub> + 2OH<sup>-</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>O  4H<sup>+</sup>+O<sub>2</sub> + 4e",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>O  H<sub>2</sub> + O<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na<sup>+</sup> + 1e  Na",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de01_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Duralumin là hợp kim của nhôm có thành phần chính là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhôm và sắt",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhôm và thuỷ ngân",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhôm và carbon",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhôm và đồng",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de01_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sodium hydrogencarbonate hay baking soda (thành phần chính là sodium hydrogencarbonate) có nhiều ứng dụng trong đời sống. Tuy nhiên, chất này không được dùng trong trường hợp nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Làm xốp bánh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Làm thành phần trong thuốc trị chứng dư acid ở dạ dày",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Làm thành phần trong viên sủi vitamin",
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
            "text": "Làm chất tạo bọt cho xà phòng",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de01_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dãy các kim loại sau: Mg, Al, Zn, Fe, Cu, Au. Số kim loại trong dãy phản ứng với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng là",
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
            "text": "2",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de01_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hematite là một trong những nguồn sắt quan trọng nhất được sử dụng trong sản xuất thép và ứng dụng ở nhiều lĩnh vực ngành nghề khác nhau. Thành phần chính của quặng hematite là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "FeCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "FeS<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fe<sub>3</sub>O<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe<sub>2</sub>O<sub>3</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de01_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại nhóm IA có khối lượng riêng nhỏ là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "bán kính nguyên tử lớn và cấu trúc mạng tinh thể kém đặc khít",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "liên kết kim loại yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "liên kết kim loại mạnh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "bán kính nguyên tử nhỏ và cấu trúc mạng tinh thể đặc khít",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de01_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự phá huỷ kim loại do phản ứng oxi hóa - khử trực tiếp giữa kim loại với các chất oxi hoá trong môi trường gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sự ăn mòn hoá học",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sự tác dụng của kim loại với nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sự khử kim loại",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sự ăn mòn điện hoá",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de01_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vàng (Au) tồn tại trong tự nhiên ở dạng đơn chất. Tuy nhiên, hàm lượng Au trong quặng hoặc trong đất thường rất thấp, vì vậy rất khó tách Au bằng phương pháp cơ học. Trong công nghiệp, người ta tách vàng từ quặng theo sơ đồ sau:<br/>Quặng chứa vàng (Au)  K[Au(CN)<sub>2</sub>] (aq)  Au(s)<br/>Phương pháp điều chế kim loại nào đã được sử dụng trong quá trình sản xuất Au theo sơ đồ trên?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điện phân",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thuỷ luyện",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhiệt luyện",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chiết",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de01_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dãy các kim loại sau: K, Li, Ca, Fe, Mg. Số kim loại kiềm trong dãy kim loại trên là",
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
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de01_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để tái chế nhôm, người ta có thể sử dụng phế liệu kim loại như vỏ của các lon, hộp chứa nước giải khát hay thực phẩm. Phế liệu này còn lẫn các tạp chất là các hợp chất hữu cơ và vô cơ (có trong nhãn, mác in hoặc sơn trên vỏ lon, hộp). Phế liệu được cắt, băm nhỏ rồi cho vào lò nung đến khi chảy lỏng. Phần lớn các tạp chất biến thành xỉ lỏng, nổi lên trên, được vớt ra khỏi lò. Phần còn lại trong lò là nhôm tái chế ở trạng thái nóng chảy. Chọn đáp án đúng nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tái chế nhôm không gây ô nhiễm môi trường",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Xỉ lỏng được dùng để chế tạo các vật dụng như xoong, nồi,…",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Việc cắt, băm nhỏ phế liệu nhôm trước khi nung chảy để giảm hiệu suất nung",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhôm tái chế ảnh hưởng sức khỏe nếu chế tạo dụng cụ nhà bếp, y tế",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de01_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Kim loại X thuộc chu kì 3, nhóm IA trong bảng tuần hoàn. Muối của kim loại X khi cháy cho ngọn lửa màu vàng.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong các kim loại kiềm, X có nhiệt độ nóng chảy thấp nhất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để bảo quản kim loại X, người ta ngâm chìm chúng trong ethanol (C<sub>2</sub>H<sub>5</sub>OH)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cấu hình electron lớp ngoài cùng của nguyên tử X là 3s<sup>1</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X được điều chế bằng phương pháp điện phân nóng chảy",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>X là nguyên tố Na<br/>a) Sai. Từ Li đến Cs nhiệt độ nóng chảy giảm dần<br/>b) Sai. Bảo quản Na trong dầu hỏa.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de01_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm theo mô hình sau: Nhúng hai thanh kim loại Zn và Cu vào dung dịch NaCl 5% và sử dụng dây dẫn nối hai thanh với bóng đèn.",
        "images": [
          "/assets/hoa12/midterm2/h12_gk2_de1_image4.png",
          "/assets/hoa12/midterm2/h12_gk2_de1_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bóng đèn sáng do có dòng electron chuyển từ thanh Zn sang thanh Cu",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tại thanh Zn sẽ phủ một lớp Zn(OH)<sub>2</sub> do Zn bị oxi hóa",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tại thanh Cu có bọt khí thoát ra và khối lượng thanh Cu không đổi",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lượng muối ăn (NaCl) trong dung dịch không thay đổi không đáng kể trong quá trình pin hoạt động",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>Trong cặp kim loại Zn và Cu, Zn hoạt động hóa học mạnh hơn Cu.<br/>Do đó, Zn sẽ đóng vai trò là cực âm (anode), nơi xảy ra quá trình oxi hóa: Zn → Zn<sup>2+</sup> + 2e.<br/>Tại thanh Cu sẽ đóng vai trò là cực dương (cathode), nơi xảy ra quá trình khử: 2H<sub>2</sub>​O + 2e  H<sub>2</sub> ​+ 2OH<sup>−</sup>.<br/>a) Đúng.<br/>b) Đúng. Zn tan trong dung dịch và tạo ion Zn<sup>2+</sup> kết hợp với OH<sup>-</sup> tạo Zn(OH)<sub>2</sub>.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de01_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Calcium là một loại khoáng chất cực kỳ quan trọng đối với sự phát triển của cơ thể, chiếm khoảng 1 - 2% trọng lượng cơ thể ở một người trưởng thành. Số hiệu nguyên tử của Ca là 20, hãy cho biết số electron hóa trị của Ca là bao nhiêu?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de01_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Tiến hành các thí nghiệm sau:<br/>(a) Đốt dây Fe trong khí O<sub>2</sub> khô.<br/>(b) Cắt miếng sắt tây (Fe tráng Sn), để trong không khí ẩm.(c) Nhúng thanh Zn vào dung dịch H<sub>2</sub>SO<sub>4</sub> loãng có nhỏ vài giọt dung dịch CuSO<sub>4</sub>.(d) Quấn sợi dây Cu vào đinh Fe rồi nhúng vào cốc đựng dung dịch NaCl.<br/>(e) Zn nguyên chất tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub>.<br/>Trong các thí nghiệm trên, có bao nhiêu thí nghiệm xảy ra ăn mòn điện hoá?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de01_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Tại một nhà máy quặng bauxite được đun nóng với dung dịch NaOH 20% ở nhiệt độ 170<sup>o</sup>C đến 180<sup>o</sup>C để chuyển hóa Al<sub>2</sub>O<sub>3</sub> thành muối dễ tan theo phương trình hóa học:<br/>Al<sub>2</sub>O<sub>3</sub> + 2NaOH  2NaAlO<sub>2</sub> + H<sub>2</sub>O<br/>Để hòa tan 1 tấn Al<sub>2</sub>O<sub>3</sub> trong quặng bauxite. Cần dùng ít nhất bao nhiêu tấn dung dịch NaOH 20%. (Làm tròn kết quả đến hàng phần trăm).",
        "images": [],
        "correctAnswer": "3,92",
        "explanation": "Đáp án: 3,92.<br/>tấn",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de01_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho m gam hỗn hợp X gồm Mg và Zn vào dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, dư thu được 4,958 lít khí SO<sub>2</sub> (ở đkc). Khi cho m gam hỗn hợp X vào dung dịch CuSO<sub>4</sub> dư, sau phản ứng thu được bao nhiêu gam chất rắn?",
        "images": [],
        "correctAnswer": "12,8",
        "explanation": "Đáp án: 12,8.<br/>Cho X tác dụng với H<sub>2</sub>SO<sub>4</sub> đặc:<br/>Cho X tác dụng với CuSO<sub>4</sub> loãng:<br/>m<sub>Cu</sub> = 0,2.64 = 12,8 g.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de01_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Trong cầu chì có một đoạn dây kim loại, thường là kim loại chì, có tác dụng ngắt dòng điện khỏi thiết bị khi có sự cố gia tăng nhiệt. Ứng dụng trên dựa vào tính chất vật lí nào của kim loại chì?<br/>b) Kim loại kẽm được tách từ hợp chất zinc sulfide trong khoáng vật sphalerite. Trước tiên, đốt zinc sulfide trong khí oxygen dư để tạo zinc oxide và sulfur dioxide. Để thu được zinc, có thể khử zinc oxide bằng carbon. Viết các phương trình hoá học của phản ứng xảy ra.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Ứng dụng trên dựa vào tính dẫn điện và nhiệt độ nóng chảy của kim loại.<br/>b) 2ZnS(s) + 3O<sub>2</sub>(g)  2ZnO(s) + 2SO<sub>2</sub>(g)<br/>ZnO(s) + C(s)  Zn(g) + CO(g)",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de01_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Vì sao trong tự nhiên không tìm thấy đơn chất kim loại kiềm?<br/>b) Có ba ống nghiệm chứa riêng biệt: dung dịch soda (sodium carbonate), dung dịch lithium chloride, dung dịch potassium carbonate.<br/>Với mỗi dung dịch, nhúng đầu dây platinum vào rồi đem đốt trên ngọn lửa đèn khí. Dự đoán hiện tượng xảy ra khi đốt mỗi dung dịch.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Vì các kim loại kiềm có tính khử rất mạnh, có khả năng tác dụng với nhiều đơn chất, hợp chất trong môi trường ngay ở điều kiện thường để trở thành hợp chất.<br/>b) Khi đốt mỗi dung dịch ta thấy:<br/>- Dung dịch soda (Na<sub>2</sub>CO<sub>3</sub>): ngọn lửa màu vàng.<br/>- Dung dịch lithium chloride (LiCl): ngọn lửa màu đỏ tía.<br/>- Dung dịch potassium carbonate (K<sub>2</sub>CO<sub>3</sub>): ngọn lửa màu tím.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de01_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Điện phân 300 mL dung dịch CuSO<sub>4</sub> 1M với điện cực trơ (mô tả ở hình 2). Sau một thời gian điện phân thu được dung dịch Y có khối lượng chất tan là 38,7 gam.<br/>Hình 2. Điện phân dung dịch CuSO<sub>4</sub>.<br/>a) Viết các quá trình oxi hóa - khử xảy ra ở các điện cực.<br/>b) Tính khối lượng kim loại sinh ra.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Cathode: Cu<sup>2+</sup> + 2e  Cu<br/>Anode: 2H<sub>2</sub>O → O<sub>2</sub> + 4H<sup>+</sup> + 4e<br/>b) Dung dịch Y gồm CuSO<sub>4</sub> dư (0,3 – x mol) và H<sub>2</sub>SO<sub>4</sub> (x mol)<br/>160.(0,3 – x) + 98x = 38,7  x = 0,15<br/>Khối lượng Cu sinh ra là: (0,3 – 0,15).64 = 9,6 gam.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_gk2_de02",
    "code": "H12-GK2-02",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de02_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Với quá trình tách natri (sodium) bằng phương pháp điện phân sodium chloride nóng chảy, phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tại anode xảy ra quá trình khử ion Na<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tại cathode xảy ra quá trình khử ion Cl<sup>-</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tại cathode xảy ra quá trình khử ion Na<sup>+</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tại anode xảy ra quá trình khử ion Cl<sup>-</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de02_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số electron ở lớp ngoài cùng của nguyên tử kim loại thường 1 đến 4 electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số electron ở lớp ngoài cùng của nguyên tử phi kim thường có từ 5 đến 8 electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong cùng chu kì, nguyên tử kim loại có bán kính lớn hơn nguyên tử phi kim",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong cùng nhóm, số electron lớp ngoài cùng của các nguyên tử thường bằng nhau",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de02_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các kim loại ở trạng thái rắn đều có tính dẻo, dẫn điện, dẫn nhiệt và có ánh kim. Hình minh hoạ quá trình trượt của các cation kim loại khi bị tác động bởi lực là biểu hiện của tính chất vật lí nào của kim loại?",
        "images": [
          "/assets/hoa12/midterm2/h12_gk2_de2_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính dẻo",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính dẫn điện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính dẫn nhiệt",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tính cứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de02_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho thế điện cực chuẩn của một số cặp oxi hoá - khử:<br/>Ở điều kiện chuẩn, có bao nhiêu cation ở trên oxi hoá được Fe thành ?",
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
            "text": "2",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de02_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các kim loại Au, Ag có thể tồn tại được ở dạng đơn chất trong tự nhiên vì chúng là kim loại",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hoạt động hóa học mạnh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hoạt động hóa học trung bình",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có khối lượng riêng lớn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "rất kém hoạt động hóa học",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de02_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại cơ bản trong dural và thép 304 lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "aluminium và magnesium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "aluminium và iron",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "magnesium và iron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "zinc và iron",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de02_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thí nghiệm nào sau đây có xảy ra sự ăn mòn điện hoá của sắt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho lá sắt vào dung dịch sulfuric acid loãng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cho mẩu gang vào dung dịch hydrochloric acid",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đốt cháy dây sắt trong khí chlorine khô",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nung nóng hỗn hợp bột sắt và bột lưu huỳnh",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de02_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Không gặp các kim loại kiềm ở dạng tự do trong thiên nhiên vì",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "thành phần của chúng trong thiên nhiên rất nhỏ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đây là những kim loại hoạt động mạnh",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đây là những kim loại được điều chế bằng cách điện phân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đây là kim loại nhẹ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de02_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nước muối sinh lí là dung dịch của chất X với nồng độ , được dùng trong việc ngăn ngừa nguy cơ mất muối do đổ quá nhiều mồ hôi, sau phẫu thuật, mất muối do tiêu chảy hay các nguyên nhân khác. X là muối nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaCl ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaClO ",
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
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de02_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhôm (Al) là kim loại có nhiều ứng dụng trong đời sống và sản xuất. Trong công nghiệp, Al được sản xuất từ quặng bauxite theo sơ đồ sau:<br/>Quặng bauxite<br/>Phương pháp nào đã được sử dụng trong quá trình khử  thành Al?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thuỷ luyện",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt luyện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Điện phân nóng chảy",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Điện phân dung dịch",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de02_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điện phân dung dịch CuSO<sub>4</sub> với điện cực trơ, cường độ dòng điện không đổi.<br/>Sau thời gian 18 phút, dung dịch có màu xanh và ở anode thu được a mol khí.<br/>Sau thời gian 36 phút thì tổng số mol khí thu được ở cả hai điện cực là 3a mol.<br/>Cho: ; giả thiết hiệu suất điện phân là ; khí sinh ra không tan trong nước. Sau thời gian bao lâu thì có bọt khí thoát ra ở cathode?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "21 phút",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "27 phút",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "24 phút",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "30 phút",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de02_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bột nở baking powder có thành phần gồm baking soda kết hợp với tinh bột ngô và một số muối vô cơ khác, có tác dụng làm cho bánh nở xốp, bông mềm. Phản ứng hoá học nào sau đây của bột nở xảy ra làm cho bánh nở xốp?",
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
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de02_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu về nhóm kim loại thuộc nhóm IA.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tố nhóm IA là những nguyên tố p, chỉ có 1 electron hóa trị ở phần lớp np<sup>1</sup> và đứng đầu mỗi chu kì tương ứng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các kim loại: lithium (Li), sodium (N",
            "isCorrect": true
          },
          {
            "id": "a",
            "letter": "A",
            "text": ", potassium (K),.đều thuộc nhóm IA",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kim loại nhóm IA được gọi là kim loại kiềm thổ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhiệt độ sôi và nhiệt độ nóng của kim loại kiềm có xu hướng giảm từ lithium (Li) đến caseium (Cs)",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Cấu hình electron lớp ngoài cùng của các kim loại nhóm IA có dạng chung là ns<sup>1</sup>.<br/>b) Đúng.<br/>c) Sai. Kim loại nhóm IA gọi là kim loại kiềm.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de02_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Trong công nghiệp luyện kim, quặng blende (có thành phần chính là zinc sulfide, ZnS) được sử dụng làm nguyên liệu để sản xuất kẽm theo các phản ứng:<br/>(1)<br/>(2)<br/>Zn(s)  Zn(g)     (3)<br/>Cho biết:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Biến thiên enthalpy chuẩn của (1) là ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Làm nguội sản phẩm ở (2) thì các hat kẽm sẽ tách ra ở (3)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Theo lí thuyết, ở (2) cần cung cấp  nhiệt để sản xuất 1 kg kẽm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Quá trình luyện kẽm có nguy cơ phát thải bụi và khí độc hại",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Sai. , 1 tấn Zn = 10<sup>3</sup> g Zn cần 370,4.10<sup>3</sup> kJ nhiệt.<br/>d) Đúng. Các khí thải CO, SO<sub>2</sub> và bụi.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de02_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Ion Na<sup>+</sup> (Z = 11) là một loại ion thiết yếu trong máu và dung dịch ngoại bào, đóng vai trò quan trọng trong hoạt động enzyme, co cơ, cân bằng nước và truyền dẫn xung điện thần kinh. Tổng số hạt proton và electron của ion Na<sup>+</sup> là bao nhiêu?",
        "images": [],
        "correctAnswer": "21",
        "explanation": "Đáp án: 21.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de02_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho thế điện cực chuẩn của các cặp oxi hoá - khử của kim loại: ;  lần lượt là .<br/>Trong số các kim loại ở trên, có bao nhiêu kim loại có khả năng khử được  ở điều kiện chuẩn?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de02_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Xét phản ứng nhiệt phân NaHCO<sub>3</sub> thành Na<sub>2</sub>CO<sub>3</sub> trong quá trình Solvay:<br/>2NaHCO<sub>3</sub>(s)  Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g);<br/>Nhiệt lượng cần cung cấp để nhiệt phân 1 kg NaHCO<sub>3</sub> theo phản ứng trên là bao nhiêu? (Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "807",
        "explanation": "Đáp án: 807.<br/>Nhiệt lượng cần cung cấp để nhiệt phân 1kg NaHCO<sub>3</sub> theo phản ứng trên là .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de02_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Nung nóng 5,95 gam hỗn hợp Mg, Al và Fe trong không khí một thời gian, thu được 6,75 gam hỗn hợp X. Hoà tan vừa đủ X trong V mL dung dịch HCl 1M, thu được 0,15 mol khí H<sub>2</sub> và dung dịch chỉ chứa muối. Tính giá trị của V.",
        "images": [],
        "correctAnswer": "400",
        "explanation": "Đáp án: 400.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de02_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "Ăn mòn điện hóa các hợp kim của sắt (gang) để lâu ngày trong không khí ảnh hưởng lớn đến nền kinh tế của các quốc gia.<br/>a) Em hãy giải thích quá trình ăn mòn này?<br/>b) Hãy nêu một cách làm cần thiết để bảo vệ các hợp kim trên. Cách bảo vệ đó đã sử dụng phương pháp chống ăn mòn nào?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Khi để hợp kim của sắt (gang) ngoài không khí ẩm đã hình thành pin điện hóa trong đó Fe là cực âm (anode), C là cực dương (cathode)<br/>Ở anode: Fe  Fe<sup>2+</sup> +2e<br/>Ở cathode: O<sub>2</sub> + 2H<sub>2</sub>O + 4e  4OH<sup>-</sup><br/>Vậy sắt đã bị ăn mòn điện hóa.<br/>b) Dùng sơn phủ bên ngoài là phương pháp bảo vệ bề mặt, gắn kẽm là phương pháp bảo vệ điện hóa.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de02_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "Để tái chế nhôm, người ta có thể sử dụng phế liệu kim loại như vỏ của các lon, hộp chứa nước giải khát hay thực phẩm. Phế liệu này còn lẫn các tạp chất là các hợp chất hữu cơ và vô cơ (có trong nhãn, mác in hoặc sơn trên vỏ lon, hộp). Phế liệu được cắt, băm nhỏ rồi cho vào lò nung đến khi chảy lỏng. Phần lớn các tạp chất biến thành xỉ lỏng, nổi lên trên, được vớt ra khỏi lò. Phần còn lại trong lò là nhôm tái chế ở trạng thái nóng chảy.<br/>a) Nêu lợi ích của việc cắt, băm nhỏ phế liệu nhôm trước khi nung chảy.<br/>b) Theo em, có nên dùng nhôm tái chế theo mô tả trên để chế tạo dụng cụ nhà bếp (xoong, chảo, thau,...), dụng cụ y tế không? Vì sao?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Lợi ích của việc cắt, băm nhỏ phế liệu nhôm trước khi nung chảy: giúp giảm bớt thể tích và tiết kiệm nhiên liệu đốt nung nóng chảy.<br/>b) Không nên dùng nhôm tái chế theo mô tả trên để chế tạo dụng cụ nhà bếp (xoong, chảo, thau,...), dụng cụ y tế. Vì các vật dụng bằng nhôm này được sản xuất theo phương thức thủ công và không đảm bảo quy chuẩn chất lượng. Chúng còn lẫn nhiều tạp chất, và được rửa bằng các hóa chất độc hại có thể gây ảnh hưởng lớn đến sức khỏe con người khi sử dụng trực tiếp.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de02_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Tại nhà máy giấy Bãi Bằng có xưởng sản xuất xút – chlorine với công suất lớn nhất trong cả nước. Xút được dùng cho việc nấu bột giấy, chlorine dùng cho việc tẩy trắng bột giấy. Nước muối đi vào thùng điện phân có hàm lượng 316 g/L. Dung dịch thu được sau điện phân có chứa sodium hydroxide với hàm lượng 100 g/L. Giả sử muối ăn là tinh khiết, thể tích dung dịch điện phân không thay đổi.<br/>a) Viết phương trình hoá học của phản ứng điện phân.<br/>b) Tính hiệu suất chuyển hoá muối ăn trong thùng điện phân.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) 2NaCl + 2H<sub>2</sub>O  2NaOH + Cl<sub>2</sub> + H<sub>2</sub>.<br/>b) Giả sử lấy 1 lít nước muối đem điện phân.<br/>m<sub>NaCl</sub> = 316 g ⇒ n<sub>NaCl</sub> = 5,4 mol<br/>Bảo toàn nguyên tố Na: n<sub>NaOH</sub><sub>(LT)</sub> = n<sub>NaCl</sub> = 5,4 mol ⇒ m<sub>NaOH</sub><sub>(LT)</sub> = 5,4.40 = 216 g.<br/>Hiệu suất chuyển hoá muối trong thùng điện phân:<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_gk2_de03",
    "code": "H12-GK2-03",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de03_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi điện phân nóng chảy MgCl<sub>2</sub> nóng chảy (điện cực trơ), ở anode xảy ra",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sự khử ion Cl<sup>–</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sự khử ion Mg<sup>2</sup><sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sự oxi hóa ion Mg<sup>2</sup><sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sự oxi hóa ion Cl<sup>–</sup>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de03_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong định nghĩa về liên kết kim loại: “Liên kết kim loại là liên kết hình thành do lực hút tĩnh điện giữa các electron.(1). với các ion.(2). kim loại ở các nút mạng. Các từ cần điền vào vị trí (1), (2) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ngoài cùng, dương",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tự do, dương",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hóa trị, lưỡng cực",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hóa trị, âm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de03_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi lựa chọn kim loại để làm vỏ hộp kim loại nhẹ chứa nước ngọt hoặc bia, tính chất nào sau đây thường không được xét đến?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính độc",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khối lượng riêng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính dễ dát mỏng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhiệt độ nóng chảy",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de03_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biết giá trị thế điện cực chuần của các cặp oxi hoá - khử sau:<br/>Số kim loại trong dãy gồm Mg, Al, Zn và Ni có thể khử được ion Cr<sup>3+</sup>(aq) tạo ra Cr<sup>2+</sup>(aq) ở điều kiện chuẩn là",
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
            "text": "4",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de03_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp luyện kim, chalcopyrite là nguồn nguyên liệu quặng quan trọng để điều chế kim loại nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kẽm (Zinc)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đồng (Copper)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chì (Lead)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sắt (Iron)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de03_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp kim là vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại khác hoặc phi kim. Nhận định nào sau đây về hợp kim là không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hơp kim được sử dụng phổ biến của sắt là gang và thép",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính chất của hợp kim phụ thuộc vào thành phần các đơn chất tham gia cấu tạo mạng tinh thể hợp kim",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hợp kim có nhiều tính chất cơ học, tính chất vật lí vượt trội so với kim loại",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hợp kim có tính chất hóa học khác xa so với tính chất hóa học của các kim loại thành phần",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de03_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại kiềm nào sau đây được mệnh danh là nhẹ nhất với khối lượng riêng chỉ 0,53 g/cm³?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lithium (Li)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sodium (Na)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Potassium (K)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Caesium (Cs)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de03_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "NaHCO<sub>3</sub> được sử dụng làm chất phụ gia thực phẩm với tên gọi baking soda, có kí hiệu là E500(ii) dùng làm chất điều chỉnh độ chua trong sốt cà. Khi đó, NaHCO<sub>3</sub> sẽ tác dụng với ion H<sup>+</sup> để làm giảm độ chua của sốt cà theo phản ứng:  (*). Phản ứng (*) thể hiện tính chất gì của NaHCO<sub>3</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính khử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính oxi hoá",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tính base",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de03_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong kĩ thuật mạ điện, để phủ đồng lên chiếc thìa bằng sắt, người ta tiến hành điện phân dung dịch copper(II) sulfate với anode là kim loại nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đồng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thiếc",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Bạc",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sắt",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de03_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thực hiện thí nghiệm cho lần lượt các mẩu kim loại Li, Na và K cùng khối lượng vào ba cốc thủy tinh riêng biệt chứa nước. Kết quả thí nghiệm cho thấy:<br/>Khi tác dụng với nước, K tự bùng cháy, Li nổi trên mặt nước còn Na nóng chảy thành hạt hình cầu và chạy trên mặt nước.<br/>Dãy so sánh đúng mức độ phản ứng của ba kim loại trên khi tác dụng với nước là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "K > Li > Na",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Li > Na > K",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "K < Li < Na",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Li < Na < K. Sử dụng thông tin cho dưới đây để trả lời các câu 11 – 12: Vỏ tàu biển làm bằng thép (hợp kim của sắt và carbon) khi tiếp xúc với nước biển (môi trường chất điện li) rất dễ bị gỉ sét do hiện tượng ăn mòn điện hóa. Để bảo vệ vỏ tàu khỏi quá trình này, người ta thường áp dụng \"phương pháp vật hi sinh\" bằng cách gắn những tấm kẽm (zinc, Zn) hoặc hợp kim của kẽm vào phía ngoài vỏ tàu ở phần chìm dưới nước",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de03_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau về ăn mòn điện hóa và phương pháp bảo vệ đối với các công trình bằng thép nêu trên:<br/>(a) Các tấm kẽm bảo vệ vỏ tàu thép theo nguyên tắc bảo vệ bằng phương pháp điện hóa.<br/>(b) Khi áp dụng phương pháp này, tấm kẽm đóng vai trò là anode (cực âm) và bị oxi hóa.<br/>(c) Trong quá trình ăn mòn điện hóa bình thường của thép trong nước biển, sắt đóng vai trò là cathode (cực dương) và bị khử.<br/>(d) Thép bị ăn mòn điện hóa mà không cần tiếp xúc với dung dịch chất điện li.<br/>Số phát biểu đúng là",
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
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de03_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biết thế điện cực chuẩn của Cu<sup>2+</sup>/Cu và Fe²⁺/Fe lần lượt là +0,34 V và –0,440 V. Khi thảo luận về phương pháp bảo vệ vỏ tàu biển bằng thép, một học sinh đề xuất: \"Nên sử dụng các khối kim loại đồng (copper, Cu) thay thế cho các khối kẽm (Zn) vì đồng ít bị gỉ sét hơn kẽm\". Một số nhận định đồng tình và không đồng tình về đề xuất này được đưa ra như sau:<br/>(1) Có thể sử dụng khối đồng do kim loại này bền và ít bị ăn mòn bởi nước biển hơn kẽm.<br/>(2) Có thể sử dụng khối đồng do đồng không phản ứng mãnh liệt với nước như các kim loại kiềm.<br/>(3) Không thể sử dụng khối đồng do kim loại này có tính khử mạnh hơn sắt, sẽ làm hỏng vỏ tàu.<br/>(4) Không thể sử dụng khối đồng do đồng có tính khử yếu hơn sắt, khi đó sắt trong thép sẽ đóng vai trò là anode và bị ăn mòn nhanh hơn.<br/>Nhận định đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhận định (4)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhận định (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhận định (2)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhận định (1)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de03_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Trong vỏ trái đất, đa số kim loại tồn tại ở dạng hợp chất như oxide, muối, trong các khoáng vật, quặng. Trong hợp chất nguyên tố kim loại ở dưới dạng cation (M<sup>n+</sup>). Để tách kim loại khỏi hợp chất cần khử cation kim loại thành nguyên tử.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phương pháp nhiệt luyện thường được dùng để tách các kim loại hoạt động trung bình và yếu ra khỏi hydroxide tương ứng bằng các chất khử phù hợp như C, CO, Al… ở nhiệt độ cao",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tách các kim loại nhóm IA, IIA và nhôm (aluminium) thường dùng phương pháp điện phân dung dịch",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kim loại đồng có thể tách bằng cách điện phân dung dịch copper (II) sulfate với điện cực graphite",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để tách Ag khỏi các tạp chất Fe, Cu ta có thể cho hỗn hợp vào dung dịch AgNO<sub>3</sub> dư",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Phương pháp nhiệt luyện thường được dùng để tách các kim loại hoạt động trung bình và yếu ra khỏi oxide tương ứng bằng các chất khử phù hợp như C, CO, Al… ở nhiệt độ cao.<br/>b) Sai. Tách các kim loại nhóm IA, IIA và nhôm (aluminium) thường dùng phương pháp điện phân nóng chảy.<br/>c) Đúng.<br/>d) Đúng. Fe và Cu là các kim loại hoạt động hóa học mạnh hơn Ag, do đó chúng sẽ đẩy Ag ra khỏi dung dịch muối AgNO<sub>3</sub> và tự tan vào dung dịch. Phần rắn thu được cuối cùng chỉ còn lại bạc (Ag).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de03_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Một nhà máy sản xuất sodium hydroxide (NaOH) và chlorine (Cl<sub>2</sub>) bằng phương pháp điện phân dung dịch sodium chloride (NaCl) có màng ngăn với điện cực trơ theo phương trình hoá học sau:<br/>NaCl + H<sub>2</sub>O  H<sub>2</sub> + Cl<sub>2</sub> + NaOH<br/>Sodium hydroxide rắn thu được bằng cách cô đặc rồi hạ nhiệt độ dung dịch chứa NaOH sau điện phân.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong quá trình điện phân, dung dịch ở khu vực cathode có pH < 7",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Màng ngăn giúp ngăn phản ứng giữa sodium hydroxide và chlorine trong quá trình điện phân",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tại anode, khí chlorine thu được từ sự oxi hoá ion chloride",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sodium hydroxide rắn thu được từ dung dịch chứa NaOH bằng phương pháp chiết",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai, tại cathode: 2H<sub>2</sub>O + 2e  H<sub>2</sub> + 2OH<sup>–</sup><br/>Màng ngăn không cho phép OH<sup>-</sup> di chuyển sang khu vực anode, vì vậy khu vực cathode có môi trường kiềm và pH > 7.<br/>b) Đúng, màng ngăn giúp ngăn phản ứng giữa sodium hydroxide và chlorine trong quá trình điện phân bằng cách ngăn OH<sup>-</sup> di chuyển sang anode (điện cực thoát khí Cl<sub>2</sub>). Màng ngăn chỉ cho phép Na<sup>+</sup> di chuyển từ khu vực anode sang khu vực cathode để trung hòa điện.<br/>c) Đúng. Tại anode: 2Cl<sup>–</sup>  Cl<sub>2</sub> + 2e.<br/>d) Sai. Thu lấy NaOH rắn bằng phương pháp kết tinh.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de03_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phương trình hóa học của các phản ứng được đánh số thứ tự từ 1 đến 4 dưới đây:<br/>(1) 2NaCl  2Na + Cl<sub>2</sub><br/>(2) Fe<sub>2</sub>O<sub>3</sub> + 3CO  2Fe + 3CO<sub>2</sub><br/>(3) Fe + CuSO<sub>4</sub>  FeSO<sub>4</sub> + Cu<br/>(4) 4AgNO<sub>3</sub> + 2H<sub>2</sub>O  4Ag + O<sub>2</sub> + 4HNO<sub>3</sub><br/>Gán số thứ tự phương trình hóa học của các phản ứng theo phương pháp tách kim loại: nhiệt luyện, thủy luyện, điện phân nóng chảy, điện phân dung dịch và sắp xếp theo trình tự thành dãy bốn số (Câu 1234, 4321…).<br/>Đáp số: 2314.",
        "images": [],
        "correctAnswer": "2314",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de03_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Kim loại sắt (iron, Fe) có một số tính chất sau: màu trắng hơi xám (1), có tính nhiễm từ (2), tác dụng với khí chlorine sinh ra muối sắt(III) (3), là kim loại nặng (4), dễ bị gỉ sét trong không khí ẩm (5), dẫn điện, dẫn nhiệt tốt (6). Trong các tính chất trên, có bao nhiêu tính chất thuộc loại tính chất vật lí của sắt?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de03_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu nào sau về các nguyên tố nhóm IA:<br/>(a) Có cấu hình electron lớp ngoài cùng là ns<sup>1</sup> (n ≥ 1).<br/>(b) Có số oxi hoá là +1 hoặc +2 trong các hợp chất.<br/>(c) Có tính khử mạnh.<br/>(d) Có bán kính nguyên tử nhỏ.<br/>Có bao nhiêu phát biểu đúng trong các phát biểu trên?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de03_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Đồng thau là hợp kim của đồng và kẽm. Phản ứng sau đây có thể được sử dụng để xác định lượng đồng trong một mẫu đồng thau.<br/>Quy trình được thực hiện như sau:<br/>- Hoà tan 1,50 gam mẫu đồng thau trong sulfuric acid đặc, rồi pha loãng với nước được dung dịch X chứa Cu<sup>2+</sup>. Thêm dung dịch I<sup>-</sup> đến dư vào X.<br/>- I<sub>2</sub> tạo ra được chuẩn độ bằng dung dịch Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> 0,5M theo phản ứng sau:<br/>Thể tích dung dịch Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> cần để phản ứng trên xảy ra vừa đủ là 28,35mL.<br/>Tính % khối lượng của đồng trong mẫu đồng thau (làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "60,5",
        "explanation": "Đáp án: 60,5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de03_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Khi cắt mẩu sodium ở trong không khí, bề mặt vừa cắt có ánh kim lập tức mờ đi. Giải thích.<br/>b) Ống dẫn nước của bồn rửa bát thường có lớp dầu, mỡ bám vào. Tìm hiểu để giải thích vì sao nên dùng soda, không nên dùng baking soda để tẩy rửa lớp bám này.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Khi cắt mẩu sodium ở trong không khí, bề mặt vừa cắt có ánh kim lập tức mờ đi do lớp sodium ở bề mặt vết cắt ngay lập tức phản ứng với các tác nhân có trong không khí như oxygen, hơi nước …<br/>4Na + O<sub>2</sub> → 2Na<sub>2</sub>O<br/>2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub><br/>b) Vì chất béo trong dầu mỡ bị thủy phân trong môi trường kiềm. Mà dung dịch soda (Na<sub>2</sub>CO<sub>3</sub>) có tính kiềm cao hơn baking soda (NaHCO<sub>3</sub>) do đó khả năng tẩy rửa dầu mỡ của soda tốt hơn và tiết kiệm hơn. Do đó nên dùng soda, không nên dùng baking soda để tẩy rửa lớp bám này.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de03_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "Nhúng hai thanh kẽm giống nhau vào hai cốc (1) và (2) đều chứa 20 mL dung dịch HCl 1M. Sau đó nhỏ thêm vào cốc (2) vài giọt dung dịch CuSO<sub>4</sub> 1M. Hãy cho biết trong mỗi trường hợp trên xảy ra dạng ăn mòn nào? Giải thích.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>+ Cốc 1: thanh kẽm bị ăn mòn hóa học do phản ứng trực tiếp với dd HCl<br/>Zn  +  2HCl  ZnCl<sub>2</sub>  +   H<sub>2</sub><br/>+ Cốc 2: ban đầu thanh kẽm bị ăn mòn hóa học như cốc (1), sau khi nhỏ dd CuSO<sub>4</sub> vào thì thanh Zn bị ăn mòn điện hóa do có đủ các đk ăn mòn:<br/>- 2 kim loại khác bản chât: Zn và Cu, do có phản ứng<br/>Zn  +  CuSO<sub>4</sub>  ZnSO<sub>4</sub>  +  Cu<br/>- 2 kim loại tiếp xúc trực tiếp với nhau: Cu bám trên thanh Zn.<br/>- 2 kim loại cùng tiếp xúc trực tiếp với dd chất điện li là HCl.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de03_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Tái chế nhôm giúp tiết kiệm đến 95% năng lượng so với việc sản xuất nhôm từ quặng. Một nhà máy tái chế thu gom được 10 tấn phế liệu nhôm (chủ yếu là vỏ lon, khung cửa sổ cũ...). Qua phân tích, lượng phế liệu này chứa 81% nhôm nguyên chất về khối lượng, phần còn lại là các tạp chất không bị nóng chảy. Quá trình luyện kim (nung chảy và tinh luyện) có hiệu suất thu hồi nhôm đạt 92%.<br/>a) Tính khối lượng nhôm tinh khiết thu được sau quá trình tái chế lượng phế liệu trên.<br/>b) Để sản xuất ra chính xác lượng nhôm tinh khiết vừa tính được ở câu a) từ quặng bauxite (giả sử chứa quặng chứa 50% Al<sub>2</sub>O<sub>3</sub> về khối lượng) bằng phương pháp điện phân nóng chảy với hiệu suất 92%, người ta cần sử dụng bao nhiêu tấn quặng bauxite?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Khối lượng nhôm nguyên chất có trong 10 tấn phế liệu là: 10.81% = 8,1 tấn<br/>Khối lượng nhôm tinh khiết thực tế thu được là: 8,1.92% = 7,452 tấn<br/>b)<br/>m<sub>quặng</sub> =  tấn.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_gk2_de04",
    "code": "H12-GK2-04",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de04_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiều kim loại có khả năng phản ứng với lưu huỳnh (sulfur) để tạo thành muối sulfide. Tuy nhiên, hầu hết các phản ứng này đều cần điều kiện đun nóng. Kim loại nào sau đây là ngoại lệ, có thể phản ứng với bột lưu huỳnh ngay ở nhiệt độ thường?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Iron (Fe)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Zinc (Zn)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Copper (Cu)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mercury (Hg)",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de04_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại nào sau đây không tan trong nước và bền trong không khí, thường được tìm thấy dưới dạng đơn chất trong tự nhiên?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "K",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Pt",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fe",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Al",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de04_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để điều chế ra 4,05 tấn Al bằng cách điện phân nóng chảy Al<sub>2</sub>O<sub>3</sub> với hiệu suất phản ứng đạt 90% thì khối lượng Al<sub>2</sub>O<sub>3</sub> cần dùng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "6,885 tấn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4,080 tấn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "17,000 tấn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "8,500 tấn",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de04_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thép không gỉ (Inox) có khả năng chống ăn mòn cao là nhờ chứa hàm lượng lớn kim loại nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cr",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "W",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Si",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de04_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điện phân một dung dịch chứa hỗn hợp gồm CuSO<sub>4</sub> và NaCl. Tại các điện cực, chất nào hoặc ion nào sẽ phản ứng trước tiên?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở anode: SO<sub>4</sub><sup>2-</sup>bị oxi hoá; Ở cathode: Cu<sup>2+</sup> bị khử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở anode: Cl<sup>-</sup> bị oxi hoá; Ở cathode: Cu<sup>2+</sup> bị khử",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở anode: Cl<sup>-</sup> bị oxi hoá; Ở cathode Na<sup>+</sup> bị khử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở anode: H<sub>2</sub>O bị oxi hoá; Ở cathode: H<sub>2</sub>O bị khử",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de04_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, các kim loại kiềm chỉ tồn tại dạng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hợp chất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hợp kim",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đơn chất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tự do tinh khiết",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de04_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo chiều tăng dần của điện tích hạt nhân nguyên tử, sự biến đổi tính chất của các nguyên tố nhóm IA nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bán kính nguyên tử giảm dần",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ nóng chảy tăng dần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Độ cứng giảm dần",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khối lượng riêng của đơn chất giảm dần",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de04_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bản chất của liên kết kim loại có điểm giống với liên kết ion là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "đều có sự tham gia của các electron chuyển động tự do",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đều hình thành do lực hút tĩnh điện giữa các hạt mang điện tích trái dấu",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đều được hình thành do sự nhường và nhận electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đều là lực hút tĩnh điện giữa ion dương và ion âm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de04_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại tungsten (W) được dùng làm dây tóc bóng đèn sợi đốt. Ứng dụng này dựa trên tính chất nào của kim loại W?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ nóng chảy cao",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính dẻo cao",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khả năng dẫn điện tốt",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Độ cứng cao",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de04_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ứng dụng nào sau đây của sodium chloride (NaCl) thuộc lĩnh vực y học?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Làm gia vị, bảo quản thực phẩm",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sản xuất xút công nghiệp (NaOH)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Làm nước muối sinh lí, chất điện giải",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sản xuất nước Javel, soda",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de04_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để tái chế nhôm, người ta có thể sử dụng phế liệu kim loại như vỏ của các lon, hộp chứa nước giải khát hay thực phẩm. Phế liệu này còn lẫn các tạp chất là các hợp chất hữu cơ và vô cơ (có trong nhãn, mác in hoặc sơn trên vỏ lon, hộp). Phế liệu được cắt, băm nhỏ rồi cho vào lò nung đến khi chảy lỏng. Phần lớn các tạp chất biến thành xỉ lỏng, nổi lên trên, được vớt ra khỏi lò. Phần còn lại trong lò là nhôm tái chế ở trạng thái nóng chảy. Nhận định đúng nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Việc cắt, băm nhỏ phế liệu nhôm trước khi nung chảy để giảm hiệu suất nung",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Xỉ lỏng được dùng để chế tạo các vật dụng như xoong, nồi",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhôm tái chế ảnh hưởng sức khỏe nếu chế tạo dụng cụ nhà bếp, y tế",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tái chế nhôm không gây ô nhiễm môi trường",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de04_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có 3 ống nghiệm chứa riêng biệt: dung dịch baking sođa, dung dịch lithium chloride, dung dịch potassium carbonate. Với mỗi dung dịch, nhúng đầu dây platinum vào rồi đem đốt trên ngọn lửa đèn khí.<br/>Các phát biểu sau:<br/>(1) Ngọn lửa có màu đỏ tía là của dung dịch baking soda.<br/>(2) Ngọn lửa có màu vàng là của dung dịch baking soda.<br/>(3) Ngọn lửa có màu tím là của dung dịch potassium carbonate.<br/>(4) Ngọn lửa có màu đỏ tía là của dung dịch lithium chloride.<br/>Các phát biểu đúng là",
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
            "text": "(2), (3), (4)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1), (4)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(2), (3)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de04_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Tượng Nữ thần Tự do có lớp vỏ bằng đồng (Cu) ghép sát vào khung sườn bằng thép (hợp kim của sắt - Fe). Sau 100 năm, các kỹ sư phát hiện khung thép bên trong bị ăn mòn nghiêm trọng tại các điểm tiếp xúc với vỏ đồng, trong khi vỏ đồng vẫn còn khá tốt.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tại vị trí tiếp xúc giữa vỏ đồng và khung thép, khi có hơi ẩm (nước mưa hòa tan khí CO<sub>2</sub>, SO<sub>2</sub>...) sẽ hình thành một pin điện hóa",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong quá trình ăn mòn, các tinh thể sắt đóng vai trò là cathode và nhận electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Quá trình oxi hóa xảy ra chủ yếu trên bề mặt khung thép, tạo thành gỉ sắt có thành phần chính là Fe<sub>2</sub>O<sub>3</sub>.nH<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Màu xanh đặc trưng của tượng là do lớp đồng bị ăn mòn điện hóa tạo thành các hợp chất như CuCO<sub>3</sub>.Cu(OH)<sub>2</sub> (gỉ đồng)",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Fe là kim loại mạnh hơn Cu nên Fe phải là anode (cực âm) và bị nhường electron, không phải cathode.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de04_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Học sinh tiến hành thí nghiệm phản ứng của kim loại kiềm với nước theo quy trình sau:<br/>- Bước 1: Lấy cốc thủy tinh chứa sẵn 50 mL nước cất, nhỏ vào đó 2 giọt dung dịch phenolphthalein.<br/>- Bước 2: Lấy kim loại sodium (Na) ngâm trong dầu hỏa ra, dùng giấy lọc thấm khô rồi cắt một mẩu nhỏ bằng hạt đậu xanh.<br/>- Bước 3: Thả nhanh mẩu sodium vào cốc nước.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở bước 2, cần thấm khô dầu để sodium tiếp xúc trực tiếp với nước tốt hơn và tránh lẫn tạp chất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ngay khi thả vào nước, mẩu sodium chìm xuống đáy cốc rồi mới phản ứng sủi bọt khí",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch trong cốc chuyển dần sang màu xanh do tạo thành môi trường base",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu thay sodium bằng lithium (Li), phản ứng sẽ xảy ra mãnh liệt hơn, thậm chí có thể nổ nhẹ",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. Khi làm thí nghiệm, cần thấm khô lớp dầu bao quanh để loại bỏ tạp chất (dầu), giúp kim loại tiếp xúc trực tiếp ngay với nước và giúp việc quan sát thí nghiệm rõ ràng hơn (tránh váng dầu nổi trên mặt nước hoặc dầu bị cháy do nhiệt phản ứng).<br/>b) Sai. Sodium nổi trên mặt nước, vo tròn thành giọt lỏng (do nhiệt tỏa ra lớn làm nóng chảy Na) và chạy trên mặt nước, chứ không chìm.<br/>c) Sai. Trong môi trường kiềm, phenolphthalein chuyển sang màu hồng.<br/>d) Đúng. Lithium (Li) hoạt động hóa học kém hơn Sodium (Na), nên phản ứng với nước xảy ra chậm hơn.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de04_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho kim loại Cu lần lượt phản ứng với các dung dịch: FeCl<sub>3</sub>, AgNO<sub>3</sub>, Al(NO<sub>3</sub>)<sub>3</sub>, MgCl<sub>2</sub>. Số trường hợp có xảy ra phản ứng hoá học là bao nhiêu?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de04_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất lỏng sau: (1) Nước, (2) Ethanol, (3) Dầu hoả khan. Có bao nhiêu chất lỏng trong danh sách trên có thể được sử dụng để ngâm và bảo quản an toàn kim loại sodium (Na) và potassium (K)?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de04_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Tính chất của hợp kim phụ thuộc vào thành phần các đơn chất tham gia cấu tạo mạng tinh thể của hợp kim.<br/>(1) Tính dẫn điện và dẫn nhiệt của hợp kim tốt hơn kim loại cơ bản trong hợp kim.<br/>(2) Hợp kim có nhiều tính chất hoá học tương tự các kim loại thành phần.<br/>(3) Tính chất của hợp kim có thể được điều chỉnh bằng cách thay đổi thành phần và cấu tạo tinh thể của hợp kim.<br/>(4) Độ cứng của hợp kim thường nhỏ hơn độ cứng của kim loại thành phần.<br/>Liệt kê các phát biểu đúng theo dãy số thứ tự tăng dần (Ví dụ: 1234, 24,…)",
        "images": [],
        "correctAnswer": "23",
        "explanation": "Đáp án: 23.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de04_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Sắt có độ tinh khiết cao nhưng ít sử dụng trong đời sống so với các hợp kim của nó như gang, thép (là hợp kim của sắt với carbon và lượng rất nhỏ các nguyên tố khác xem như không đáng kể). sắt phế liệu gồm sắt, cacbon và iron(III) oxide.<br/>Cho phản ứng xảy ra trong lò luyện thép Martin là: .<br/>Tính khối lượng sắt (iron) phế liệu (chứa 40% Fe<sub>2</sub>O<sub>3</sub>, 1% C về khối lượng) cần dùng (theo đơn vị tấn) để khi luyện với 4 tấn gang (chứa 5% C về khối lượng) trong lò luyện thép Martin, nhằm thu được loại thép (chứa 98% sắt về khối lượng). Giả thuyết hiệu suất phản ưng là 100%. (Làm tròn kết quả đến hàng phần trăm).",
        "images": [],
        "correctAnswer": "2,32",
        "explanation": "Đáp án: 2,32.<br/>Khối lượng carbon trong gang là 4.5% = 0,2 tấn  m<sub>Fe</sub> (gang) = 4 – 0,2 = 3,8 tấn<br/>Khối lượng carbon trong phế liệu là m.1% tấn ; Fe<sub>2</sub>O<sub>3</sub> là m.40% tấn và Fe là 59%m tấn<br/>2Fe<sub>2</sub>O<sub>3</sub> + 3C  4Fe + 3CO<sub>2</sub><br/>Thép gồm Fe có khối lượng là  tấn và C là  tấn<br/>Mà m<sub>Fe</sub> (thép) = 98%m<sub>thép</sub>  tấn.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de04_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "(1,0 điểm). Hoàn thành các phương trình phản ứng hóa học (ghi rõ điều chế nếu có)<br/>a. Al + HCl  b. Na + Cl<sub>2</sub><br/>b. K + H<sub>2</sub>O   d. Fe + CuSO<sub>4</sub>",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)  2Al + 6HCl  2AlCl<sub>3</sub> + 3H<sub>2</sub><br/>b) 2Na + Cl<sub>2</sub> 2 NaCl<br/>c)  K + H<sub>2</sub>O<sub>dư</sub> KỌH + ½ H<sub>2</sub><br/>d)  Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de04_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "(1,0 điểm). Sơ đồ quá trình Solvay sản xuất NaHCO<sub>3</sub> và Na<sub>2</sub>CO<sub>3</sub> (Hình 2):<br/>a) Viết các phương trình hoá học xảy ra tại \"tháp carbonate hoá\" và giai đoạn nung sản phẩm NaHCO<sub>3</sub>.<br/>b) Dựa vào đường nét đứt trên sơ đồ, hãy cho biết những hoá chất nào được thu hồi và tái sử dụng (tuần hoàn) trong quy trình này? Nêu ý nghĩa của việc tái sử dụng đó.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) NaCl + NH<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O  NaHCO<sub>3</sub> + NH<sub>4</sub>Cl<br/>b) Các chất được tuần hoàn: Khí CO<sub>2</sub> và khí NH<sub>3</sub>. Ý nghĩa: việc thu hồi và tái sử dụng CO<sub>2</sub> và NH<sub>3</sub> giúp tiết kiệm chi phí nguyên liệu đầu vào, nâng cao hiệu quả kinh tế của quá trình sản xuất, đồng thời giảm thiểu lượng khí thải độc hại ra môi trường (đặc biệt là khí NH<sub>3</sub>).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de04_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "(1,0 điểm). Zinc sulfate (ZnSO<sub>4</sub>) được dùng làm phân vi lượng bổ sung kẽm cho cây trồng, mạ kẽm, sản xuất dược phẩm, nhuộm – in vải, xử lí nước thải công nghiệp. Trong công nghiệp, zinc sulfate được sản xuất từ zinc(II) sulfide theo sơ đồ sau: ZnS(s) → ZnO(s) → ZnSO<sub>4</sub>(aq)<br/>a) Viết phương trình phản ứng của sơ đồ trên.<br/>b) Từ 19,4 tấn quặng zinc blende (chứa 60% zinc sulfide về khối lượng, còn lại là các chất không chứa zinc), với hiệu suất của toàn bộ quá trình là 65,25% thu được x tấn dung dịch ZnSO<sub>4</sub> 5% (dùng làm thuốc sát trùng). Xác định giá trị của x.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)  ;<br/>b)  tấn<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_gk2_de05",
    "code": "H12-GK2-05",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de05_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron lớp ngoài cùng của nguyên tử kim loại kiềm là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ns<sup>2</sup>np<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ns<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ns<sup>1</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ns<sup>2</sup>np<sup>1</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de05_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong một bình điện phân, dưới tác dụng của dòng điện một chiều, các ion sẽ di chuyển về các điện cực trái dấu. Tại anode (cực dương), các anion sẽ nhường electron để thực hiện quá trình ...(1)...; ngược lại, tại cathode (cực âm), các cation sẽ nhận electron để thực hiện quá trình ...(2).... Thông tin phù hợp điền vào (1) và (2) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) khử và (2) oxi hoá",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) oxi hoá và (2) khử",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) phân huỷ và (2) tổng hợp",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) bay hơi và (2) ngưng tụ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de05_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong quá trình tái chế kim loại, ở công đoạn phân loại phế liệu, có thể dùng nam châm lớn để tách riêng phế liệu",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "kẽm (zinc)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đồng (copper)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "thép",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhôm (aluminium)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de05_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sodium chloride là gia vị quan trọng trong thức ăn của con người. Công thức của sodium chloride là",
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
            "text": "KCl",
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
            "text": "NaNO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de05_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong mạng tỉnh thể kim loại chứa các cation kim loại được sắp xếp theo một trật tự nhất định cùng với các electron chuyển động",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tự do trong toàn bộ mạng tinh thể",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "theo một quỹ đạo xác định",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "trong một khu vực không gian nhất định",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xung quanh một vị trí xác định",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de05_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cách nào sau đây không thu được NaOH sau phản ứng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho kim loại Na tác dụng với nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Điện phân dung dịch NaCl không có màng ngăn xốp",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cho dung dịch Ca(OH)<sub>2</sub> tác dụng với dung dịch Na<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Điện phân dung dịch NaCl có màng ngăn xốp, điện cực trơ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de05_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một loại pháo hoa có chứa một số thành phần như sodium nitrate, sodium oxalate và cryolite. Khi cháy, loại pháo hoa này sẽ tạo ra màu gì trên bầu trời đêm?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Vàng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Xanh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đỏ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tím",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de05_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây về hợp kim là không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính chất hóa học của hợp kim thường tương tự như tính chất của các đơn chất tạo nên chúng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hợp kim thường dẫn nhiệt và dẫn điện kém hơn kim loại nguyên chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Liên kết chủ yếu trong hợp kim là liên kết kim loại",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hợp kim luôn là một hỗn hợp đồng nhất của hai hay nhiều kim loại",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de05_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hai kim loại cơ bản trong dural và thép 304 lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "kẽm và sắt",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "magnesium và sắt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhôm và sắt",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhôm và magnesium",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de05_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là đúng khi nói về phương pháp tách kim loại ra khỏi hợp chất của chúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đồng có thể được tách từ copper (II) oxide bằng cách nung nóng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kim loại Mg được tách ra khỏi dung dịch MgCl<sub>2</sub> bằng phương pháp điện phân",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kim loại Al được tách ra khỏi A1<sub>2</sub>O<sub>3</sub> bởi CO bằng phương pháp nhiệt luyện",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Kim loại Zn được tách ra khỏi ZnO bằng phương pháp nhiệt luyện. Sử dụng thông tin cho dưới đây để trả lời các câu 11 – 12. Thực hiện thí nghiệm sau: Buớc 1: Cho dung dịch NaCl 5% vào ống thuỷ tinh hình chữ U như hình bên. Buớc 2: Nhúng một thanh copper và một thanh zinc đã làm sạch vào hai đầu của ống chữ  . Buớc 3: Nối hai thanh kim loại bằng dây dẫn",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de05_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(1) Sau bước 2, cả hai kim loại kẽm và đồng đều không bị ăn mòn.<br/>(2) Sau bước 3, kẽm bị oxi hoá và đóng vai trò là anode.<br/>(3) Sau bước 3, Cu<sup>2+</sup> bị khử thành Cu bám vào thanh đồng, làm khối lượng thanh đồng tăng dần.<br/>(4) Không kim loại nào bị ăn mòn, nếu thay dung dịch NaCl thành dung dịch HCl thì ăn mòn mới diễn ra.<br/>Số phát biểu đúng là",
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
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de05_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khoảng vài phút sau bước 3, nhỏ vài giọt phenolphthalein vào dung dịch gần thanh đồng và quan sát thấy dung dịch dần chuyển sang màu hồng là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dòng điện từ ăn mòn điện hoá đã điện phân NaCl thành dung dịch NaOH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sự khử oxygen hoà tan trong dung dịch tạo môi trường base",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sự thuỷ phân muối NaCl làm tăng  của dung dịch",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "do phản ứng giữa Cu và dung dịch NaCl tạo hợp chất có tính base",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de05_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về mối liên hệ giữa tính chất và ứng dụng của một số kim loại:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Vàng (Au) có thể được dát thành những lá rất mỏng để mạ lên các công trình kiến trúc nhờ có tính dẻo cao nhất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Vonfram (W) được sử dụng làm dây tóc bóng đèn sợi đốt vì nó là kim loại cứng nhất, chịu được áp lực cao",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhôm (Al) được dùng làm vật liệu chế tạo vỏ máy bay do nó là kim loại nhẹ và các hợp kim của nhôm có độ bền cơ học cao",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đồng (Cu) được sử dụng làm dây dẫn điện phổ biến do đây là kim loại có khả năng dẫn điện tốt nhất",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Vonfram được dùng làm dây tóc bóng đèn là do nó có nhiệt độ nóng chảy cao nhất, giúp dây tóc không bị nóng chảy khi phát sáng.<br/>c) Đúng.<br/>d) Sai. Đồng dẫn điện rất tốt và được dùng phổ biến nhưng kim loại dẫn điện tốt nhất là Bạc (Ag).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de05_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Để mạ kẽm cho một bu lông sắt hình trụ với độ dày và diện tích lớp mạ lần lượt là 0,02 mm và 15,95 cm², người ta tiến hành điện phân dung dịch ZnSO<sub>4</sub> (điện cực âm là chiếc bu lông sắt và điện cực dương là lá kẽm (zinc) thô, hiệu suất điện phân 100%) với cường độ dòng điện 2 A không đổi. Khi kết thúc điện phân (quá trình mạ hoàn thành) thì hết t giây. Cho biết:<br/>- Khối lượng riêng của kim loại Zn là 7,13 g/cm³ và giả thiết toàn bộ lượng kim loại Zn sinh ra đều bám hết vào bu lông sắt, nước không bị điện phân ở cả hai điện cực.<br/>- Điện lượng: q = I.t = n<sub>e</sub>.F, trong đó: q là điện lượng (C), ne là số mol electron đi qua dây dẫn, I là cường độ dòng điện (A), t là thời gian điện phân (giây).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chiếc bu lông sắt đóng vai trò là anode và tại điện cực này xảy ra quá trình khử ion Zn<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lá kẽm thô đóng vai trò là cathode và tại điện cực này xảy ra quá trình oxi hoá kim loại Zn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lượng ZnSO<sub>4</sub> trong dung dịch không đổi trong quá trình điện phân",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Giá trị của t là 675 giây",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Bu lông sắt là cathode, tại đây xảy ra quá trình khử ion Zn<sup>2+</sup>: Zn<sup>2+</sup> + 2e  Zn<br/>b) Sai. Lá kẽm thô là anode, tại đây xảy ra quá trình oxi hóa Zn: Zn  Zn<sup>2+</sup> + 2e<br/>c) Đúng. Các quá trình ở anode, cathode xảy ra ngược nhau nên Zn<sup>2+</sup>(aq) không đổi. Ion SO<sub>4</sub><sup>2-</sup>(aq) không bị điện phân nên cũng không đổi.<br/>d) Sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de05_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dãy các kim loại kiềm sau: Cs, Rb, K, Na, Li.<br/>(1) Các kim loại trên là kim loại kiềm.<br/>(2) Phương pháp chung để điều chế kim loại kiềm là điện phân dung dịch.<br/>(3) Để bảo quản kim loại Na cần ngâm Na trong cồn tinh khiết.<br/>(4) Thứ tự giảm dần tính kim loại của các kim loại trên là: Cs, Rb, K, Na, Li.<br/>Liệt kê các phát biểu đúng theo số thứ tự tăng dần.",
        "images": [],
        "correctAnswer": "14",
        "explanation": "Đáp án: 14.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de05_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Duralumin (hoặc Dural), là một loại hợp kim nhôm nổi tiếng với độ bền cao, thường được sử dụng trong ngành hàng không, ô tô, và các lĩnh vực yêu cầu kết cấu nhẹ mà bền. Thành phần chính của Duralumin bao gồm khoảng x%Al, y%Cu ngoài ra còn một lượng nhỏ các kim loại khác. Để tạo ra 1,38 tấn hợp kim có thành phần như trên thì cần lấy 0,0552 tấn đồng (Cu) nóng chảy để trộn. Xác định giá trị của y (làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de05_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các kim loại Ag, Al, Au, Cu, Cr, Fe, Mg, Pt, Zn. Có bao nhiêu kim loại phản ứng được với dung dịch sulfuric acid đặc, nguội?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de05_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu trường hợp xảy ra ăn mòn điện hoá trong các quá trình sau?<br/>(a) Vỏ tàu bằng thép có gắn các khối kẽm, neo đậu tại một cảng biển.<br/>(b) Vật dụng bằng bạc bị sẫm màu khi tiếp xúc với không khí có lẫn H<sub>2</sub>S.<br/>(c) Tấm tôn trầy xước trên mái nhà tiếp xúc với nước mưa.<br/>d). Sodium nóng đỏ, bốc cháy khi tiếp xúc với khí chlorine.<br/>(e) Một cổ vật làm bằng đồng thau (hợp kim Cu - Zn) chìm trong nước biển.<br/>(g) Dây chảy cầu chì làm bằng hợp kim Pb - Sn đứt khi cường độ dòng điện tăng đột ngột.",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de05_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "Viết phương trình hóa học của các phản ứng xảy ra trong mỗi thí nghiệm sau đây (ghi rõ điều kiện phản ứng):<br/>a) Đốt thanh sắt nóng rồi cho vào bình chứa khí chlorine.<br/>b) Kim loại kẽm nhúng trong dung dịch silver nitrate.<br/>c) Thả mẫu sodium nhỏ bằng hạt đậu xanh vào chậu nước.<br/>d) Đốt thanh magnesium cháy trong khí oxygen.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)<br/>b)<br/>c)<br/>d)",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de05_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "Giá trị biến thiên tạo thành chuẩn (kJ mol<sup>-1</sup>) của NaHCO<sub>3</sub>(s), Na<sub>2</sub>CO<sub>3</sub>(s), CO<sub>2</sub>(g) và H<sub>2</sub>O(g) lần lượt là -960,81; -1130,70; -393,51 và -241,8.<br/>a) Tính giá trị biến thiên enthalpy chuẩn của phản ứng sau:<br/>2NaHCO<sub>3</sub>(s) → Na<sub>2</sub>CO<sub>3</sub>(s) + H<sub>2</sub>O(g) + CO<sub>2</sub>(g)<br/>Cho biết phản ứng trên có thuận lợi về mặt năng lượng không?<br/>b) Theo em, vì sao baking soda không bị phân hủy theo phản ứng ở ý a) khi được bảo quản ở nơi thoáng mát.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)  >  0 (phản ứng thu nhiệt)<br/>Phản ứng trên không thuận lợi về mặt năng lượng.<br/>b) Do phản ứng trên là phản ứng thu nhiệt nên để phản ứng xảy ra cần phải cung cấp năng lượng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de05_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Quặng sắt là các khoáng vật chứa các hợp chất của sắt, chủ yếu tồn tại ở dạng các oxide. Trong đó, hematite là một loại quặng chứa hàm lượng sắt cao và được dùng để trực tiếp sản xuất gang bằng cách nạp thẳng vào lò cao.<br/>a) Nêu thành phần hợp chất chính của sắt có trong quặng hematite. Viết phương trình hóa học minh họa nguyên tắc luyện gang (khử oxide sắt) từ loại quặng này bằng khí CO.<br/>b) Trong quá trình sản xuất thực tế, giả thiết chỉ có 90% lượng sắt trong quặng được chuyển hóa thành công vào gang. Hỏi từ 1 tấn quặng hematite (có hàm lượng sắt chiếm 69,9%) thì có thể sản xuất được bao nhiêu tấn gang loại chứa 96% Fe?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Thành phần hợp chất chính của quặng hematite là Iron(III) oxide (Fe<sub>2</sub>O<sub>3</sub>).<br/>b) Khối lượng sắt trong 1 tấn quặng:  tấn<br/>- Khối lượng sắt chuyển vào gang là: tấn<br/>- Khối lượng gang sản xuất được:  tấn.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_gk2_de06",
    "code": "H12-GK2-06",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de06_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết kim loại là liên kết được hình thành do lực hút tính điện giữa các cation kim loại và các anion tại các nút mạng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết kim loại là liên kết được hình thành giữa các nguyên tử kim loại có sự dùng chung các electron hóa trị tự do giữa hai nguyên tử",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Liên kết kim loại là liên kết được hình thành do lực hút tĩnh điện giữa các electron hóa trị tự do và các ion dương kim loại ở các nút mạng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết kim loại là liên kết được hình thành do sự xen phủ các orbital chứa electron hóa trị tự do của các nguyên tử kim loại",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de06_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại có những tính chất vât lí chung nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính dẻo, tính dẫn điện, nhiệt độ nóng chảy cao",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính dẻo, tính dẫn điện, có khối lượng riêng lớn và có ánh kim",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính dẻo, tính dẫn điện, tính dẫn nhiệt và tính ánh kim",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tính dẻo, có ánh kim, rất cứng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de06_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một số kim loại như Au, Ag có thể tồn tại được ở dạng đơn chất trong tự nhiên vì chúng là kim loại",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có tính khử mạnh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "có tính oxi hóa yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có khối lượng riêng lớn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "rất kém hoạt động hóa học",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de06_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Gang là hợp kim có thành phần chính là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Al và Mg",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fe và",
            "isCorrect": true
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
            "text": "Cu và Zn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cu và Sn",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de06_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để bảo quản kim loại kiềm, người ta không thể đặt chúng trong",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dầu hỏa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "khí trơ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chân không",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nước",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de06_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng về ứng dụng của các hợp chất calcium?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Vôi tôi và vôi sống đều có thể dùng để khử chua đất trong nông nghiệp",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đá vôi và thạch cao đều được dùng trong sản xuất vật liệu xây dựng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đá vôi có thể được dùng để bó bột cố định xương, làm mềm nước cứng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thạch cao dùng để đúc tượng, làm phấn viết bảng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de06_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dãy các kim loại: Al, Cu, Fe, Ag. Số kim loại phản ứng được với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng là",
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
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de06_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để làm tinh khiết bột Cu có lẫn các kim loại Fe và Zn người ta có thể ngâm hỗn hợp trên vào lượng dư dung dịch nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cu(NO<sub>3</sub>)<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fe(NO<sub>3</sub>)<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ZnSO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe(NO<sub>3</sub>)<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de06_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại nhóm IA có khối lượng riêng nhỏ là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "bán kính nguyên tử lớn và cấu trúc mạng tinh thể kém đặc khít",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bán kính nguyên tử nhỏ và cấu trúc mạng tinh thể kém đặc khít",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "liên kết kim loại mạnh và bán kính nguyên tử nhỏ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "liên kết kim loại yếu và bán kính nguyên tử nhỏ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de06_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trường hợp nào sau đây không phù hợp giữa hợp chất được đốt nóng trong ngọn lửa không màu và màu ngọn lửa thu được tương ứng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ca<sup>2+</sup>màu đỏ cam",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sr<sup>2+</sup> màu xanh lam",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ba<sup>2+</sup> màu lục",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na<sup>+</sup> màu vàng",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de06_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương pháp nào sau đây không thể bảo vệ những thiết bị bằng thép không bị ăn mòn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Gắn thêm kẽm",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Gắn thêm magnesium",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Gắn thêm chì",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phủ sơn hoặc dầu mỡ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de06_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đun sôi nước cứng chỉ làm mềm được nước cứng tạm thời",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch Na<sub>2</sub>CO<sub>3</sub> làm mềm được nước cứng tạm thời, nước cứng vĩnh cửu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch NaOH làm mềm được nước cứng vĩnh cửu",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho dung dịch Ca(OH)<sub>2</sub> vừa đủ làm mềm nước cứng tạm thời",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de06_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Magnesium là kim loại được ứng dụng để tạo các hợp kim nhẹ, bền, đặc biệt là cho ngành công nghiệp sản xuất ô tô và hàng không vũ trụ. Magnesium được sản xuất trong công nghiệp theo quá trình Pidgeon với nguyên liệu ban đầu là quặng dolomite. Quá trình được thực hiện qua các giai đoạn sau:<br/>– Giai đoạn 1. Nung quặng dolomite: MgCO<sub>3</sub>.CaCO<sub>3</sub>(s)  MgO(s) + CaO(s) + 2CO<sub>2</sub>(g)<br/>– Giai đoạn 2. Dùng silicon trong ferrosilicon (Fe, Si) làm chất khử trong điều kiện chân không:<br/>2MgO(s) + 2CaO(s) + Si(s)  2Mg(g) + Ca<sub>2</sub>SiO<sub>4</sub>(s)<br/>Phản ứng chung của quá trình Pidgeon là:<br/>2MgCO<sub>3</sub>.CaCO<sub>3</sub>(s) + Si(s)  2Mg(s) + Ca<sub>2</sub>SiO<sub>4</sub>(s) + 2CO<sub>2</sub>(g)      = +183 kJ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Quặng dolomite dễ tan trong nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phản ứng ở giai đoạn 2, Si khử MgO thành kim loại Mg",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Quá trình Pidgeon là quá trình tỏa nhiệt",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Từ 1 tấn quặng dolomite (chứa 92% MgCO<sub>3</sub>.CaCO<sub>3</sub> về khối lượng) thu được 108 kg kim loại magnesium. Hiệu suất của toàn bộ quá trình là 80%",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Quặng dolomite không tan trong nước<br/>b) Đúng.<br/>c) Sai. Quá trình Pidgeon là quá trình thu nhiệt.<br/>d) Sai. m<sub>Mg</sub> .",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de06_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Trong công nghiệp, một lượng lớn NaHCO<sub>3</sub> và Na<sub>2</sub>CO<sub>3</sub> được sản xuất theo phương pháp Solvay bằng cách cho khí CO<sub>2</sub> (lấy từ nhiệt phân đá vôi) vào dung dịch chứa sodium chloride (NaCl) bão hoà và ammonia (NH<sub>3</sub>) bão hoà : CO<sub>2</sub>(aq) + H<sub>2</sub>O(l) + NH<sub>3</sub>(aq) + NaCl(aq)  NH<sub>4</sub>Cl(aq) + NaHCO<sub>3</sub>(s) (1)<br/>– NaHCO<sub>3</sub> tách ra đem nhiệt phân thu được soda: 2NaHCO<sub>3</sub>(s)  Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g) (2)<br/>– Để tái sử dụng NH<sub>3</sub>, người ta cho dung dịch NH<sub>4</sub>Cl phản ứng với CaO (thu được từ quá trình nhiệt phân đá vôi): CaO(s) + 2NH<sub>4</sub>Cl(aq)  2NH<sub>3</sub>(g) + CaCl<sub>2</sub>(aq) + H<sub>2</sub>O(l) (3)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng (1) xảy ra được là do NaHCO<sub>3</sub> có độ tan kém hơn nên bị kết tinh trước",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Soda là nguyên liệu quan trọng trong sản xuất thuỷ tinh, bột giặt, chất tẩy rửa",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Quá trình sản xuất soda, NH<sub>3</sub> được tái sử dụng giúp giảm chi phí sản xuất và giảm thiểu ô nhiễm trường",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong phản ứng (2) khối lượng chất rắn giảm 65% sau khi nung (giả sử hiệu suất nung là 100%)",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. %m<sub>giảm</sub>",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de06_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho kim loại Fe lần lượt phản ứng với các dung dịch: FeCl<sub>3</sub>, Cu(NO<sub>3</sub>)<sub>2</sub>, AgNO<sub>3</sub>, MgCl<sub>2</sub>. Số trường hợp xảy ra phản ứng hoá học là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de06_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Trong đời sống và sản xuất, hợp kim được sử dụng rộng rãi hơn nhiều so với kim loại nguyên chất. Cho các phát biểu sau:<br/>(a) Tính dẫn điện và dẫn nhiệt của hợp kim tốt hơn kim loại cơ bản trong hợp kim.<br/>(b) Hợp kim có nhiều tính chất hoá học tương tự các kim loại thành phần.<br/>(c) Độ cứng của hợp kim thường nhỏ hơn độ cứng của kim loại thành phần<br/>(d) Thép không gỉ (chứa ít nhất 10% chromium theo khối lượng) có khả năng chống ăn mòn cao hơn so với sắt nguyên chất, thường được sử dụng làm dụng cụ  y tế…<br/>(e) Duralumin nhẹ, cứng, bền, được sử dụng nhiều trong lĩnh vực hàng không vũ trụ, để chế tạo cánh máy bay.<br/>Có bao nhiêu phát biểu đúng trong các phát biểu trên?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de06_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Khi điện phân 500 mL dung dịch NaCl (dư) với điện cực trơ, có màng ngăn xốp đến khi thu được 0,025 mol khí Cl<sub>2</sub> ở anode thì ngừng điện phân, thu được dung dịch X. Coi thể tích dung dịch thay đổi không đáng kể. Tính giá trị pH của dung dịch X.",
        "images": [],
        "correctAnswer": "13",
        "explanation": "Đáp án: 13.<br/>n<sub>NaOH</sub> = 0,05 mol => [OH<sup>-</sup>] =  => pH = 13",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de06_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Để xác định công thức muối sulfate của kim loại M nhóm IIA, một bạn học sinh thực hiện thí nghiệm như sau: Cân chính xác 1,8 g muối trên hòa tan trong nước, rồi thêm nước cho đủ thu được 50 mL dung dịch, lấy 10 mL dung dịch ở trên cho tác dụng từ từ với dung dịch BaCl<sub>2</sub> 0,15 M cho đến khi lượng kết tủa không tăng thêm nữa thì vừa hết 20 mL. Tính nguyên tử khối của M.",
        "images": [],
        "correctAnswer": "24",
        "explanation": "Đáp án: 24.<br/>MSO<sub>4</sub> + BaCl<sub>2</sub>  BaSO<sub>4</sub>↓ + MCl<sub>2</sub><br/>Ta có: = 0,15.0,02 = 0,003 mol => = 0,003 mol<br/>=> = 0,003.50/10 = 0,015 mol<br/>Phân tử khối của muối:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de06_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Cho một mẩu Na vào cốc nước có pha sẵn vài giọt dung dịch phenolphthalein. Nêu hiện tượng và viết phương trình hóa học để giải thích.<br/>b) Một cây cầu thép bắc qua sông, sau một thời gian sử dụng, người ta nhận thấy xuất hiện các vết gỉ sét trên bề mặt thép, đặc biệt là ở những vị trí tiếp xúc với nước sông. Tại sao quá trình ăn mòn lại diễn ra nhanh hơn ở những vị trí tiếp xúc với nước sông? Đề xuất các biện pháp bảo vệ cây cầu thép khỏi bị ăn mòn, giải thích cơ chế bảo vệ của từng biện pháp.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Mẩu Na tan, sủi bọt khí không màu, dung dịch chuyển sang màu hồng do sản phẩm tạo thành NaOH có môi trường base.<br/>2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub><br/>b) Nước sông đóng vai trò là chất điện ly, tạo điều kiện thuận lợi cho quá trình ăn mòn điện hóa xảy ra.<br/>Các biện pháp bảo vệ:<br/>- Sơn phủ bề mặt: Ngăn cách kim loại với môi trường.<br/>- Mạ kim loại: Phủ lên bề mặt thép một lớp kim loại có tính chống ăn mòn cao hơn.<br/>- Sử dụng kim loại hi sinh: Gắn vào cấu trúc thép một kim loại hoạt động mạnh hơn (ví dụ: kẽm), kim loại này sẽ bị ăn mòn thay cho thép.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de06_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Trong tự nhiên, vì sao các nguyên tố nhóm IA chỉ tồn tại ở dạng hợp chất?<br/>b) Thành phần của dịch dạ dày gồm 95% là nước, enzyme và hydrochloric acid. Sự có mặt của hydrochloric acid làm cho pH của dịch vị trong khoảng 2 – 3. Khi nồng độ acid trong dịch vị dạ dày tăng thì dễ bị triệu chứng ợ chua, ợ hơi, ói mửa, buồn nôn, loét dạ dày, tá tràng. Để làm giảm bớt lượng acid dư trong dịch vị dạ dày, người ta thường uống “thuốc muối dạ dày” (bột NaHCO<sub>3</sub>) từng lượng nhỏ và cách quãng. Viết phương trình hóa học của phản ứng xảy ra để giải thích vai trò của NaHCO<sub>3</sub>.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Trong tự nhiên, các nguyên tố nhóm IA chỉ tồn tại ở dạng hợp chất vì chúng đều là những kim loại hoạt động hóa học mạnh nên không tồn tại dạng đơn chất.<br/>b) Phương trình hóa học: NaHCO<sub>3</sub> + HCl  NaCl + H<sub>2</sub>O + CO<sub>2</sub>↑<br/>Vai trò của NaHCO<sub>3</sub> uống từng lượng nhỏ, cách quãng có tác dụng làm pH của dịch vị tăng dần từ từ và khí carbon dioxide thoát ra chậm rãi.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de06_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Viết phương trình hóa học giải thích sự hình thành thạch nhũ trong các hang động.<br/>b) Một mẫu nước cứng có nồng độ các ion như sau: Ca<sup>2+</sup> x M, Mg<sup>2+</sup>y M, HCO<sub>3</sub><sup>−</sup>0,01 M, Cl<sup>−</sup> 0,008 M, SO<sub>4</sub><sup>2−</sup> 0,002 M. Cho biết mẫu nước trên thuộc loại nước cứng tạm thời, nước cứng vĩnh cửu hay nước cứng toàn phần? Để làm mềm 4 L nước này cần dùng tối thiểu bao nhiêu g Na<sub>2</sub>CO<sub>3</sub>?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Ca(HCO<sub>3</sub>)<sub>2</sub> CaCO<sub>3</sub>  + H<sub>2</sub>O + CO<sub>2.</sub><br/>b) Nước cứng toàn phần<br/>[Na<sub>2</sub>CO<sub>3</sub>] = [Ca<sup>2+</sup>] + [Mg<sup>2+</sup>] = x + y = (0,01 + 0,008 + 0,002.2) : 2 = 0,011 M.<br/>0,011.4.106 = 4,664 (g)<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_gk2_de07",
    "code": "H12-GK2-07",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de07_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong định nghĩa về liên kết kim loại: “Liên kết kim loại là liên kết hình thành do lực hút tĩnh điện giữa các electron...(1)... với các ion...(2)... kim loại ở các nút mạng. Các từ cần điền vào vị trí (1), (2) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ngoài cùng, dương",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tự do, dương",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hóa trị, lưỡng cực",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hóa trị, âm",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de07_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cầu chì là một thiết bị bảo vệ mạch điện bằng cách làm đứt mạch điện. Câu chì được sử dụng nhằm phòng tránh các hiện tượng quá tải trên đường dây. Dây cầu chì thường được làm bằng kim loại chì (Pb), thiếc trắng (Sn) hoặc cadmium (Cd). Ứng dụng này dựa trên tính chất nào của các kim loại trên?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có tính dẻo cao",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ nóng chảy tương đối thấp",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có độ dẫn điện cao",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có độ cứng tương đối thấp",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de07_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp, kim loại nào sau đây chỉ được điều chế bằng phương pháp điện phân nóng chảy?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mg",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ag",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de07_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đồng thau là hợp kim chứa khoảng 70% đồng và 30% kẽm. Ứng dụng nào sau đây không phải là ứng dụng của đồng thau?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Làm thiết bị dẫn điện",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Làm dụng cụ nấu ăn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Làm thân vỏ máy bay",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Làm nhạc cụ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các kim loại nhóm IA khử mạnh nước ở nhiệt độ thường",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kim loại sodium nóng chảy cháy trong khí chlorine tạo thành sodium chloride",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong hợp chất, nguyên tử kim loại nhóm IA chỉ thể hiện số oxi hóa +1",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Kim loại sodium khử ion Cu<sup>2+</sup> trong dung dịch CuSO<sub>4</sub> thu được kim loại Cu",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de07_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các muối nitrate của nguyên tố nhóm IIA là các chất tan",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Magnesium sulfate là chất tan, barium sulfate là chất không tan",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các muối carbonate của Mg, Ca, Sr, Ba là những chất không tan",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các hydroxide của nguyên tố nhóm IIA đều là chất tan",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de07_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Al, Fe, Cr đều tan tốt trong dung dịch HNO<sub>3</sub> đặc, nguội.<br/>(b) W là kim loại cứng nhất, Cr là kim loại có nhiệt độ nóng chảy cao nhất.<br/>(c) Al, Fe đều không tan trong dung dịch H<sub>2</sub>SO<sub>4</sub> loãng, nguội.<br/>(d)  nên Ag không tan trong dung dịch HCl 1 M dư.<br/>Số phát biểu đúng là",
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
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de07_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Tái chế là quá trình xử lý để tái sử dụng rác thải hoặc vật liệu không cần thiết (phế liệu) thành vật liệu mới mang lại lợi ích cho đời sống và sản xuất.<br/>(b) Kim loại là vật liệu có thể được tái chế nhiều lần mà thường không làm thay đổi tính chất cũng như làm giảm chất lượng của chúng.<br/>(c) Nhu cầu sử dụng kim loại đen (gang, thép với thành phần chính là sắt) trong đời sống và sản xuất là cao nhất.<br/>(d) Việc tái chế kim loại là một trong những giải pháp giúp bảo vệ môi trường, tiết kiệm tài nguyên và phục vụ sản xuất.<br/>Số phát biểu đúng là",
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
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de07_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đinh sắt không bị ăn mòn trong trường hợp nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ngâm đinh sắt trong ống nghiệm đựng nước muối",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Để đinh sắt trong không khí khô",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ngâm đinh sắt trong ống nghiệm đựng nước có nhỏ vài giọt acid HCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ngâm đinh sắt trong ống nghiệm đựng nước có hòa tan khí oxygen",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de07_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có thành phần chính là CaSO<sub>4</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thạch cao",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đá vôi",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Vôi sống",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phèn chua",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de07_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tiến hành thí nghiệm theo các bước sau:<br/>Bước 1: Cho 1 viên kẽm (zinc, Zn) vào ống nghiệm chứa 5 mL dung dịch H<sub>2</sub>SO<sub>4</sub>1 M. Để yên khoảng 2 phút<br/>Bước 2: Sau bước 1, nhỏ tiếp 5 giọt dung dịch CuSO<sub>4</sub> 1 M vào ống nghiệm trên.<br/>Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở bước 1, viên kẽm tan và có khí không màu thoát ra",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở bước 2, xuất hiện chất rắn màu đỏ bám trên viên Zn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở bước 2, tốc độ thoát khí tăng lên so với thời điểm cuối bước 1",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở bước 1, nếu thay dung dịch H<sub>2</sub>SO<sub>4</sub> 1 M bằng dung dịch HCl 1 M thì tốc độ hòa tan Zn vẫn không đổi",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de07_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để xác nhận thành phần chất rắn màu trắng Z, nhóm học sinh thực hiện các thí nghiệm sau:<br/>- Thí nghiệm 1: Nhúng que platinum sạch vào dung dịch Z bão hòa, sau đó đưa lên ngọn lửa đèn khí, đèn khí cháy với ngọn lửa màu vàng.<br/>- Thí nghiệm 2: Nhỏ dung dịch Z bão hòa vào dung dịch Ca(OH)<sub>2</sub> thu được kết tủa màu trắng.<br/>- Thí nghiệm 3: Nung chất rắn Z rồi cân lại thấy khối lượng chất rắn giảm sau khi nung.<br/>Dựa trên kết quả thí nghiệm, Z có thể là chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaHCO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na<sub>2</sub>CO<sub>3</sub>",
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
            "text": "NH<sub>4</sub>HCO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de07_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện thí nghiệm với các kim loại X, Y, Z, M sau đây:<br/>Biết Z là nguyên tố thuộc chu kì nhỏ, nhóm IIIA trong bảng tuần hoàn.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "M tác dụng H<sub>2</sub>O ở điều kiện thường",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chiều tăng dần tính khử của các kim loại: Y < X < Z < M",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hợp kim của X được sử dụng rộng rãi trong ngành công nghiệp chế tạo máy bay",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong công nghiệp, Z được điều chế bằng phương pháp nhiệt luyện",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Sai. Hợp kim được sử dụng rộng rãi trong chế tạo máy bay là Duralumin (thành phần chính là Nhôm). Nhôm là kim loại Z, không phải kim loại X.<br/>d) Sai. Z là Al được điều chế bằng phương pháp điện phân nóng chảy.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de07_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Soda là hóa chất được sử dụng rộng rãi trong ngành công nghiệp hóa chất, hiện nay ở Việt Nam trung bình cần 5.10<sup>5</sup> tấn/năm. Phương pháp Solvay với nguyên liệu đầu vào là đá vôi và muối ăn nên giá thành rẻ, phù hợp với sản xuất tại Việt Nam.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Soda được dùng để làm mềm nước cứng, sản xuất thủy tinh, giấy, hóa chất, …",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phương pháp Solvay giảm thiểu tác động tới môi trường do tuần hoàn tái sử dụng các sản phẩm trung gian như NH<sub>3</sub>, CO<sub>2</sub>, …",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phương pháp Solvay, NH<sub>3</sub> được tái chế qua phương trình hóa học sau: 2NH<sub>4</sub>Cl + CaO  2NH<sub>3</sub> + CaCl<sub>2</sub> + H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phương pháp Solvay chỉ xảy ra theo một giai đoạn sau: 2NaCl + 2NH<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O  2NH<sub>4</sub>Cl + Na<sub>2</sub>CO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. Solvay hóa xảy ra theo 2 giai đoạn chính : NaCl  NaHCO<sub>3</sub>  Na<sub>2</sub>CO<sub>3</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de07_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có các kim loại: Na, Zn, Cu, Fe và các dung dịch muối: NaCl, Cu(NO<sub>3</sub>)<sub>2</sub>, FeCl<sub>2</sub>, Zn(NO<sub>3</sub>)<sub>2</sub>. Cho từng kim loại phản ứng lần lượt với từng dung dịch muối, có bao nhiêu cặp phản ứng thu được sản phẩm là kim loại?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Zn đẩy được Cu, Fe ra khỏi dung dịch Cu(NO<sub>3</sub>)<sub>2</sub>, FeCl<sub>2</sub>;Fe đẩy được Cu ra khỏi dung dịch Cu(NO<sub>3</sub>)<sub>2</sub>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de07_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Hợp kim duralumin có thể bị phá hủy trong dung dịch kiềm do xảy ra phản ứng:<br/>2Al + 2NaOH + 2H<sub>2</sub>O  2NaAlO<sub>2</sub> + 3H<sub>2</sub><br/>Để xác định hàm lượng Al trong hợp kim duralumin, người ta ngâm 1 kg mẫu hợp kim trong dung dịch kiềm dư, sau khi phản ứng xảy ra hoàn toàn, lọc lấy chất rắn, làm khô cân lại thấy còn 90 g chất rắn không tan. Giả sử chỉ có Al tan trong kiềm. Trong hợp kim dualumin trên, Al chiếm bao nhiêu phần trăm về khối lượng?",
        "images": [],
        "correctAnswer": "91",
        "explanation": "Đáp án: 91.<br/>Khối lượng của Al có trong hợp kim duralumin là 1000 – 90 = 910 g<br/>→ %m<sub>Al</sub> = 910.100/1000 = 91%.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de07_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu sau:<br/>(1) Na, K thường được bảo quản bằng cách ngâm trong dầu hỏa khan.<br/>(2) Thành phần chính của quặng sylvinite là NaCl.KCl.<br/>(3) Điện phân dung dịch NaCl bão hòa không có màng ngăn để sản xuất nước Javel.<br/>(4) Na<sub>2</sub>CO<sub>3</sub> dùng làm tác nhân tẩy sạch vết dầu, mỡ trên chi tiết máy trước khi, sơn, hàn, mạ…<br/>Liệt kê các phát biểu đúng theo dãy số thứ tự tăng dần.",
        "images": [],
        "correctAnswer": "1234",
        "explanation": "Đáp án: 1234.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de07_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Lẩu tự sôi là trào lưu gây sốt với giới trẻ Việt trong vài năm trở lại đây. Chức năng làm nóng, chín thực phẩm là nhờ gói tạo nhiệt trong hộp thực phẩm. Các gói thường có thành phần là vôi sống (CaO) được FDA công nhận là an toàn. Cho bảng thông tin sau:<br/>Lượng nhiệt tỏa ra khi cho 1 mol CaO vào nước để làm chín thực phẩm có giá trị tuyệt đối là bao nhiêu kJ?",
        "images": [],
        "correctAnswer": "81,9",
        "explanation": "Đáp án: 81,9.<br/>Phương trình hóa học: CaO(s) + H<sub>2</sub>O(l)  Ca(OH)<sub>2</sub>(aq)<br/>Ta có:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de07_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Dựa vào những tính chất vật lí nào mà vàng được sử dụng làm đồ trang sức? Tại sao lõi dây điện thường được làm từ kim loại đồng?<br/>b) Trang sức bằng bạc có thể bị ăn mòn bởi oxygen không khí khi có mặt hydrogen sulfide, tạo thành silver sulfide có màu đen. Viết phương trình hóa học của phản ứng xảy ra. Trong trường hợp này, bạc bị ăn mòn theo dạng ăn mòn hóa học hay ăn mòn điện hóa? Cho biết vai trò của oxygen trong quá trình này.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Nhờ vào tính dẻo mà vàng có thể dát mỏng và tạo hình để làm đồ trang sức, nhờ vào tính ánh kim mà vàng có bề mặt lấp lánh để làm đồ trang sức.<br/>Lõi dây điện được làm bằng đồng vì dẫn điện tốt, độ dẻo cao, giá thành phù hợp.<br/>b) Phương trình hóa học: 4Ag + O<sub>2</sub> + 2H<sub>2</sub>S  2Ag<sub>2</sub>S + 2H<sub>2</sub>O<br/>Trong trường hợp này, bạc bị ăn mòn hóa học do bạc phản ứng trực tiếp với oxygen và hydrogen sulfide, trong đó oxygen đóng vai trò là chất oxi hóa.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de07_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Giải thích cơ sở các ứng dụng sau và viết phương trình hóa học tương ứng: Viên sủi chứa NaHCO<sub>3</sub>và các acid hữu cơ (viết gọn là HX) có khả năng tạo bọt khí khi hòa tan vào nước.<br/>b) Theo quy ước, một đơn vị độ cứng ứng với 0,5 mmol Ca<sup>2+</sup> hoặc Mg<sup>2+</sup> trong 1,0 L nước. Một loại nước cứng chứa đồng thời các ion Ca<sup>2+</sup>, HCO<sub>3</sub><sup>–</sup> và Cl<sup>–</sup>. Để làm mềm 10 L nước cứng trên cần dùng vừa đủ 100 mL dung dịch chứa NaOH 0,2 M và Na<sub>3</sub>PO<sub>4</sub> 0,2 M, thu được nước mềm (không chứa Ca<sup>2+</sup>). Số đơn vị độ cứng của nước là bao nhiêu?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) NaHCO<sub>3</sub> + HX  NaX + CO<sub>2</sub> + H<sub>2</sub>O<br/>Sản phẩm của phản ứng trên tạo bọt khí CO<sub>2</sub>, nên viên sủi chứa NaHCO<sub>3</sub> và acid hữu cơ (viết gọn là HX) có khả năng tạo bọt khí khi hòa tan vào nước.<br/>b) OH<sup>–</sup> +   + H<sub>2</sub>O<br/>Ca<sup>2+</sup> +  CaCO<sub>3</sub><br/>3Ca<sup>2+</sup> +    Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br/>Số đơn vị độ cứng của nước là 10.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de07_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Độ tan trong nước của các hydroxide nhóm IIA ở 20 °C cho trong bảng sau:<br/>Nêu xu hướng biến đổi độ tan của các hydroxide nhóm IIA. Trên cơ sở đó, dự đoán xu hướng phản ứng với nước của kim loại nhóm IIA từ Mg đến Ba.<br/>b) Muối carbonate của kim loại nhóm IIA tác dụng được với nhiều acid vô cơ và hữu cơ, giải phóng khí carbon dioxide.<br/>- Viết phương trình hóa học của phản ứng giữa CaCO<sub>3</sub> với dung dịch CH<sub>3</sub>COOH.<br/>- Đề xuất và giải thích cách làm sạch cặn đá vôi trong phích nước.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Từ Mg(OH)<sub>2</sub> đến Ba(OH)<sub>2</sub> độ tan trong nước của các hydroxide nhóm IIA tăng dần.<br/>Từ Mg đến Ba mức độ phản ứng với nước tăng dần.<br/>b) Phương trình hóa học:<br/>CaCO<sub>3</sub> + 2CH<sub>3</sub>COOH  (CH<sub>3</sub>COO)<sub>2</sub>Ca + CO<sub>2</sub> + H<sub>2</sub>O<br/>- Để làm sạch cặn đá vôi trong phích nước có thể dùng giấm ăn hoặc nước chanh để súc rửa. Do giấm ăn hoặc nước chanh có chứa acid có thể tác dụng với cặn đá vôi tạo thành muối tan dễ bị rửa trôi.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_gk2_de08",
    "code": "H12-GK2-08",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de08_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở trạng thái cơ bản, cấu hình electron của nguyên tử Mg (Z = 12) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1s<sup>2</sup>2s<sup>3</sup>2p<sup>6</sup>3s<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>7</sup>3s<sup>1</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de08_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính chất nào sau đây không  phải là tính chất vât lí chung của kim loại?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính dẻo",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính dẫn điện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính cứng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tính ánh kim",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de08_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong vỏ Trái Đất, những kim loại nào sau đây tồn tại chủ yếu dưới dạng đơn chất.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Pt, Au",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Zn, Fe",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mg, Al",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Na, Ba",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de08_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Duralumin là hợp kim của nhôm có thành phần chính là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhôm và đồng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhôm và sắt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhôm và carbon",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhôm và thuỷ ngân",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de08_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ngoài nước, nguyên liệu đầu để sản xuất soda (Na<sub>2</sub>CO<sub>3</sub>) theo phương pháp Solvay là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "đá vôi và sodium chloride",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sodium chloride, ammonia và carbon dioxide",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sodium hydroxide và carbon dioxide",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sodium chloride và carbonic acid",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de08_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây tan tốt trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "BaCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na<sub>2</sub>CO<sub>3</sub>",
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
            "text": "MgCO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de08_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dãy gồm các kim loại đều phản ứng với nước ở nhiệt độ thường tạo thành dung dịch kiềm là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na, Fe, K",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Na, Cr, K",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na, Ba, K",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mg, Na, Ca",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de08_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong quá trình tách sodium bằng phương pháp điện phân sodium chloride nóng chảy, phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tại anode xảy ra quá trình khử ion Na<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tại cathode xảy ra quá trình khử ion Cl<sup>–</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tại cathode xảy ra quá trình khử ion Na<sup>+</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tại anode xảy ra quá trình khử ion Cl<sup>–</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de08_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt độ nóng chảy của các đơn chất kim loại nhóm IA được cho ở hình bên.<br/>Nguyên nhân gây nên xu hướng biến đổi tính chất từ Li đến Cs trong biểu đồ là do",
        "images": [
          "/assets/hoa12/midterm2/h12_gk2_de8_image2.png",
          "/assets/hoa12/midterm2/h12_gk2_de8_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "độ bền liên kết kim loại giảm dần",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "điện tích của cation nút mạng giảm dần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số electron hoá trị giảm dần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "bán kính nguyên tử giảm dần",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de08_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Muối carbonate của kim loại nhóm IIA bị nhiệt phân tạo thành oxide và CO<sub>2</sub>.<br/>MCO<sub>3</sub>(s)  MO(s) + CO<sub>2</sub>(g)<br/>Biến thiên enthalpy chuẩn của quá trình trên được cho ở bảng sau:<br/>Nhiệt độ phân hủy thành oxide của các muối carbonate của kim loại nhóm IIA giảm dần theo dãy:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "MgCO<sub>3</sub>, CaCO<sub>3</sub>, SrCO<sub>3</sub>, BaCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "BaCO<sub>3</sub>, SrCO<sub>3</sub>, CaCO<sub>3</sub>, MgCO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "BaCO<sub>3</sub>, CaCO<sub>3</sub>, SrCO<sub>3</sub>, MgCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "MgCO<sub>3</sub>, BaCO<sub>3</sub>, SrCO<sub>3</sub>, CaCO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de08_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các trường hợp sau:<br/>(1) Sợi dây Ag nhúng trong dung dịch HNO<sub>3</sub>.<br/>(2) Đốt bột Al trong khí O<sub>2</sub>.<br/>(3) Cho thanh Fe tiếp xúc với thanh Cu rồi đồng thời nhúng vào dung dịch HCl.<br/>(4) Thanh kẽm nhúng trong dung dịch CuSO<sub>4</sub>.<br/>(5) Vỏ tàu bằng thép trong nước biển.<br/>Số trường hợp xuất hiện ăn mòn điện hoá là",
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
            "text": "2",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de08_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nhận định sau về tác hại của nước cứng: (a) làm giảm bọt khi giặt quần áo bằng xà phòng; (b) làm đường ống dẫn nước đóng cặn, giảm lưu lượng nước; (c) làm thức ăn lâu chín và giảm mùi vị; (d) làm nồi hơi phủ cặn, gây tốn nhiên liệu và có nguy cơ gây nổ. Số nhận định đúng là",
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
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de08_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Nhôm phế liệu thường lẫn các tạp chất là các chất hữu cơ và vô cơ (có trong nhãn, mác do in hoặc sơn). Khi tái chế, phế liệu được cắt, băm nhỏ rồi cho vào lò nung đến khi chảy lỏng. Phần lớn các tạp chất này biến thành xỉ lỏng, nổi lên và được vớt ra khỏi lò. Phần còn lại là nhôm tái chế ở trạng thái lỏng và được đưa vào đúc khuôn.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Việc tái chế nhôm giúp giảm giá thành sản phẩm",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Việc tái chế nhôm giúp giảm chất thải ra môi trường",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Không nên dùng nhôm tái chế để chế tạo dụng cụ nhà bếp và y tế",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đem cắt, băm nhỏ nhôm phế liệu để quá trình khử Al<sub>2</sub>O<sub>3</sub> xảy ra dễ hơn",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. Băm nhỏ nhôm phế liệu nhằm mục đích tăng diện tích tiếp xúc, giúp nhôm nung chảy nhanh hơn, tiết kiệm năng lượng và dễ tách tạp chất (xỉ) hơn.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de08_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Sodium hydrogencarbonate  được sử dụng phổ biến trong sản xuất công nghiệp, phụ gia thực phẩm và y học. Cho độ tan (gam/100 gam nước) của  ở các nhiệt độ như sau:<br/>(Nguồn: John A. Dean (1999), Hand book of Chemistry, Fifteenth Edition, McGraw-Hill, Inc)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi tăng nhiệt độ từ  lên , độ tan của  tăng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở 30<sup>o</sup>C, nồng độ  trong dung dịch bão hoà là 11,1%",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong quá trình Solvay,  được tách biệt bằng phương pháp kết tủa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "được sử dụng làm bột nở, bột chữa cháy, sản xuất viên sủi",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai.<br/>c) Sai. NaHCO<sub>3</sub> được thu bằng phương pháp kết tinh.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de08_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dãy các kim loại: Na, Mg, Fe, Au, Zn. Có bao nhiêu kim loại trong dãy phản ứng với oxygen ở điều kiện thích hợp?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de08_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu sau:<br/>(1) Duralumin là một loại hợp kim quan trọng của nhôm, có đặc điểm là nhẹ, cứng, bền.<br/>(2) Duralumin chứa trên 90% nhôm, khoảng 4% đồng và một số nguyên tố khác.<br/>(3) Duralumin ứng dụng để chế tạo máy bay.<br/>(4) Duralumin là hợp kim của sắt và carbon.<br/>Liệt kê các phát biểu đúng theo dãy số thứ tự tăng dần.",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de08_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các đặc điểm về tính chất vật lí: (a) Là kim loại dễ nóng chảy; (b) Thuộc loại kim loại mềm (dễ cắt bằng dao, kéo); (c) Có nhiệt nóng chảy và nhiệt độ sôi cao; (d) Thuộc loại kim loại nhẹ.<br/>Có bao nhiêu đặc điểm đúng với các kim loại kiềm (từ lithium đến caesium)?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de08_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Ion Ca<sup>2+</sup> cần thiết cho máu của người hoạt động bình thường. Nồng độ ion Ca<sup>2+</sup> không bình thường là dấu hiệu của bệnh. Để xác định nồng độ ion Ca<sup>2+</sup>, người ta lấy mẫu máu, sau đó kết tủa ion Ca<sup>2+</sup> dưới dạng calcium oxalate (CaC<sub>2</sub>O<sub>4</sub>) rồi cho calcium oxalate tác dụng với dung dịch KMnO<sub>4</sub> trong môi trường acid theo phản ứng sau: CaC<sub>2</sub>O<sub>4</sub> + KMnO<sub>4</sub> + H<sub>2</sub>SO<sub>4</sub>  CaSO<sub>4</sub> + K<sub>2</sub>SO<sub>4</sub> + MnSO<sub>4</sub> + CO<sub>2</sub>↑ + H<sub>2</sub>O. Giả sử CaC<sub>2</sub>O<sub>4</sub> kết tủa từ 1 mL máu một người tác dụng vừa hết với 2,00 mL dung dịch KMnO<sub>4</sub> 5.10<sup>–4</sup> M. Nồng độ ion Ca<sup>2+</sup> trong máu người đo bằng đơn vị mg Ca<sup>2+</sup>/100 mL máu là bao nhiêu (làm tròn đến hàng đơn vị)?",
        "images": [],
        "correctAnswer": "10",
        "explanation": "Đáp án: 10.<br/>100 mL máu cần 200 mL dung dịch KMnO<sub>4</sub> 5.10<sup>–4</sup>M<br/>Bảo toàn electron ⟹ Số mol CaC<sub>2</sub>O<sub>4</sub> =  2,5.10<sup>–4</sup>mol  ⟹ Ca<sup>2+</sup>= 2,5.10<sup>–4</sup> mol<br/>Nồng độ ion Ca<sup>2+</sup> máu người =  10 mg Ca<sup>2+</sup>/100 mL máu",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de08_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Viết phương trình hóa học khi cho Fe lần lượt phản ứng với khí Cl<sub>2</sub> và S trong điều kiện thích hợp.<br/>b) Hãy cho biết hiện tượng thép bị gỉ khi tiếp xúc với không khí ẩm thuộc loại ăn mòn hóa học hay ăn mòn điện hóa. Giải thích?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a)   2Fe + 3Cl<sub>2</sub>   2FeCl<sub>3</sub><br/>Fe + S   FeS<br/>b) Ăn mòn điện hóa.<br/>Vì thép là hợp kim Fe – C trong không khí ẩm là môi trường điện li, khi đó Fe đóng vai trò anode và bị oxi hóa: Fe  Fe<sup>2+</sup> + 2e.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de08_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Chỉ dùng quỳ tím, hãy phân biệt 3 dung dịch không màu Na<sub>2</sub>CO<sub>3</sub>, K<sub>2</sub>SO<sub>4</sub>, Ba(NO<sub>3</sub>)<sub>2</sub> bằng phương pháp hóa học.<br/>b) Trong thực tiễn, sodium carbonate được ứng dụng để làm mềm nước cứng. Viết phương trình hóa học để giải thích ứng dụng trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Chỉ có dung dịch Na<sub>2</sub>CO<sub>3</sub> làm quỳ tím hóa xanh<br/>Sau đó lấy dung dịch Na<sub>2</sub>CO<sub>3</sub> cho vào 2 mẩu còn lại, mẩu có kết tủa trắng là Ba(NO<sub>3</sub>)<sub>2</sub>.<br/>b) Ca<sup>2+</sup>  +  CO<sub>3</sub><sup>2–</sup>   CaCO<sub>3</sub><br/>Mg<sup>2+</sup>  +  CO<sub>3</sub><sup>2–</sup>   MgCO<sub>3</sub>",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de08_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Cho một lượng nhỏ giấm ăn (CH<sub>3</sub>COOH) vào phích nước để làm sạch cặn đá vôi. Hãy viết phương trình hóa học để giải thích việc làm trên?<br/>b) Ở nhiệt độ cao, magnesium nitrate bị phân hủy theo phản ứng:<br/>Mg(NO<sub>3</sub>)<sub>2</sub>(s)  MgO(s) + 2NO<sub>2</sub>(g) + O<sub>2</sub>(g) ∆<sub>r</sub>H<sup>0</sup><sub>298</sub><br/>Cho biết:<br/>Tính nhiệt lượng cần cung cấp để nhiệt phân 1 kg Mg(NO<sub>3</sub>)<sub>2</sub> theo phản ứng trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) 2CH<sub>3</sub>COOH + CaCO<sub>3</sub> (CH<sub>3</sub>COO)<sub>2</sub>Ca + CO<sub>2</sub>  + H<sub>2</sub>O<br/>b) ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> = –601,6 + 2.33,1 – (–790,6) = 255,2 kJ<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_gk2_de09",
    "code": "H12-GK2-09",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de09_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Lực liên kết kim loại gây ra bởi",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tương tác tĩnh điện giữa cation kim loại và electron hóa trị tự do trong tinh thể",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sự góp chung của các electron hóa trị giữa các nguyên tử kim loại trong tinh thể",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tương tác van der Waals giữa các nguyên tử kim loại trong tinh thể",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sự hình thành liên kết cho nhận giữa các nguyên tử kim loại trong tinh thể",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de09_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại X có khối lượng riêng nhỏ nhất, dùng chế tạo hợp kim siêu nhẹ. Kim loại X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Au",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Li",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hg",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de09_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trên thế giới, zinc (kẽm) được sản xuất chủ yếu từ quặng zinc blende có thành phần chính là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ZnS",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ZnSO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ZnO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ZnCO<sub>3</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de09_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thêm chromium vào thép thì tính chất nào sau đây được tăng cường?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chống ăn mòn",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính dẫn điện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính chất từ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tính dễ kéo sợi",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de09_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các kim loại nhóm IA từ Li đến Cs, nhiệt độ nóng chảy và độ cứng biến đổi như thế nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Không đổi",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giảm dần",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng dần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không có quy luật",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de09_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch nào sau đây hòa tan kết tủa CaCO<sub>3</sub>?",
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
            "text": "HCl",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "BaCl<sub>2</sub>",
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
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de09_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện chuẩn, khi nhúng đinh sắt vào dung dịch copper (II) sulfate thì xảy ra phản ứng sau:<br/>Phát biểu nào sau đây về phản ứng trên là không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe có tính khử mạnh hơn Cu",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cu<sup>2+</sup> có tính oxi hóa mạnh hơn Fe<sup>2+</sup>",
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
            "text": "Màu của dung dịch trước và sau phản ứng là khác nhau",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de09_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để tái chế nhôm, người ta sử dụng phế liệu kim loại như các lon, hộp đựng nước giải khát hay thực phẩm. Phế liệu còn lẫn các tạp chất là các chất vô cơ và hữu cơ (có trong nhãn, mác in hoặc sơn trên vỏ lon, hộp). Phế liệu được cắt, băm nhỏ rồi cho vào lò nung đến khi chảy lỏng. Phần xỉ lỏng, nổi lên trên được vớt ra khỏi lò. Phần còn lại trong lò là nhôm tái chế ở trạng thái nóng chảy. Cho các phát biểu sau: (a) Việc tái chế nhôm giúp giảm tác động tiêu cực của việc khai thác mỏ quặng, do tiết kiệm tài nguyên thiên nhiên.<br/>(b) Việc cắt, băm nhỏ phế liệu giúp giảm thể tích, tránh hao phí năng lượng khi nung.<br/>(c) Các loại thau, chậu, xô… làm bằng nhôm là vật đựng tốt nhất dùng để bảo quản vôi (Ca(OH)<sub>2</sub>).<br/>(d) Quá trình tái chế nhôm thủ công cho lợi nhuận cao nhưng gây ô nhiễm môi trường trầm trọng nếu không có biện pháp xử lý các chất thải.<br/>Số phát biểu đúng là",
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
            "text": "4",
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
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de09_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công đoạn chính của công nghiệp chlorine – kiềm là điện phân dung dịch sodium chloride bão hoà trong bể điện phân có màng ngăn xốp. Tại anode xảy ra quá trình/phản ứng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2Cl<sup>–</sup>  Cl<sub>2</sub> + 2e",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2H<sub>2</sub>O + 2e  H<sub>2</sub> + 2OH<sup>–</sup><sub>.</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cl<sub>2</sub> + NaOH  NaCl + NaClO + H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaOH + HCl  NaCl + H<sub>2</sub>O",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de09_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dựa vào độ tan trong nước của các hydroxide nhóm IIA ở 20°C cho trong bảng sau:<br/>Hãy cho biết kim loại kiềm thổ nào sau đây phản ứng mạnh nhất với nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mg",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ca",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sr",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ba",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de09_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Rót vào ống nghiệm 1 và 2, mỗi ống khoảng 3 mL dung dịch H<sub>2</sub>SO<sub>4</sub>loãng cùng nồng độ, rồi đồng thời cho vào mỗi ống một mẩu kẽm như nhau. Nhỏ thêm 2 – 3 giọt dung dịch CuSO<sub>4</sub> vào ống 2. Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tốc độ thoát khí của hai ống nghiệm như nhau",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ống nghiệm 2 khí thoát ra nhanh hơn do có CuSO<sub>4</sub> là chất xúc tác",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ống nghiệm 2 khí thoát ra nhanh hơn do xảy ra ăn mòn điện hóa học",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ống nghiệm 1 khí thoát ra nhanh hơn do xảy ra ăn mòn hóa học",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de09_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các muối carbonate của kim loại nhóm IIA đều bị phân hủy bởi nhiệt theo phản ứng sau:<br/>MCO<sub>3</sub>(s)  MO(s) + CO<sub>2</sub>(g)  ∆<sub>r</sub>H<sup>˚</sup><sub>298</sub><br/>Biến thiên enthalpy chuẩn của quá trình trên được cho trong bảng sau:<br/>Từ MgCO<sub>3</sub> đến BaCO<sub>3</sub>, quy luật biến đổi nhiệt độ phân hủy như thế nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Không đổi",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giảm dần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng dần",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không có quy luật",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de09_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Kim loại ở nhóm IA và IIA đều thuộc nguyên tố s, ở vị trí đứng đầu mỗi chu kì trong bảng tuần hoàn các nguyên tố hoá học và đều có màu trắng ánh kim. Về tính chất, chúng cũng có một số điểm tương đối giống nhau.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các kim loại nhóm IA và IIA đều có khối lượng riêng thấp và thuộc loại kim loại nặng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tính khử của kim loại nhóm IA mạnh hơn nhóm IIA ở cùng chu kì",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Một số kim loại nhóm IIA có tính chất vật lí biến đổi không theo xu hướng là do chúng không có cùng kiểu mạng tinh thể",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong tự nhiên, các nguyên tố nhóm IA và IIA chỉ tồn tại dưới dạng đơn chất",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Kim loại nhóm IA và IIA là kim loại nhẹ.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. Trong tự nhiên, các nguyên tố nhóm IA và IIA chỉ tồn tại dưới dạng hợp chất.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de09_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Aluminium oxide (Al<sub>2</sub>O<sub>3</sub>) trên bề mặt bảo vệ aluminium (Al) khỏi bị ăn mòn bởi các tác nhân oxi hóa. Người ta có thể tạo ra lớp oxide đó bằng phương pháp điện phân dung dịch sulfuric acid với một điện cực làm bằng vật dụng aluminum cần tạo lớp màng oxide và điện cực còn lại là điện cực trơ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phương pháp bảo vệ bằng cách tạo lớp aluminium oxide thuộc phương pháp điện hoá",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Vật dụng bằng aluminium được nối với cực dương của dòng điện một chiều",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tại điện cực trơ còn lại xảy ra quá trình khử ion H<sup>+</sup> tạo thành khí hydrogen",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Độ dày của lớp Al<sub>2</sub>O<sub>3</sub> bề mặt được xác định bởi công thức:  Biết rằng quá trình điện phân sử dụng mật độ dòng ρ = 0,02 A cm<sup>-2</sup>. Nếu thời gian điện phân là 20 phút và hiệu suất điện phân là 80% thì lớp Al<sub>2</sub>O<sub>3</sub> có độ dày lớn hơn 10 μm. (Biết 1 m = 1.10<sup>2</sup> cm = 1.10<sup>6</sup> μm)",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Phương pháp phủ bề mặt.<br/>b) Đúng. Vật dụng bằng nhôm (Al) đóng vai trò là anot (cực dương) của nguồn điện một chiều. Tại đây, nhôm bị oxi hóa thành Al³⁺, sau đó phản ứng với nước hoặc hydroxide để tạo thành lớp Al₂O₃ bảo vệ.<br/>c) Đúng. Điện cực trơ (thường làm bằng graphite hoặc platinum) đóng vai trò là cathode (cực âm). Tại đây, ion H⁺ trong dung dịch H₂SO₄ bị khử thành khí hydrogen (H₂) theo phản ứng: 2H<sup>+</sup> + 2e  H<sub>2</sub>.<br/>d) Sai. < 10 μm.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de09_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các tính chất của kim loại: tính dẻo, tính cứng, tính dẫn điện, ánh kim, khối lượng riêng, nhiệt độ nóng chảy. Có bao nhiêu tính chất thuộc tính chất vật lý chung của kim loại?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de09_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Tại một nhà máy, quá trình tinh chế đồng được thực hiện bằng phương pháp điện phân dung dịch với anode là đồng thô (có chứa  khối lượng tạp chất ), cathode là tấm đồng tinh khiết mỏng, dung dịch điện phân gồm  và . Kết thúc quá trình điện phân, đồng tinh khiết được thu hồi ở cathode, sau đó được nấu chảy ở nhiệt độ khoảng  rồi được đúc thành các tấm đồng thành phẩm, mỗi tấm nặng 30 kg. Biết hiệu suất toàn bộ quá trình tinh chế từ đồng thô đến đồng thành phẩm đạt . Trung bình, từ 1000 kg đồng thô thì tạo ra được m tấm đồng thành phẩm. Giá trị của m bằng bao nhiêu? (Làm tròn kết quả đến phần nguyên)",
        "images": [],
        "correctAnswer": "26",
        "explanation": "Đáp án: 26.<br/>Số tấm đồng .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de09_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các nguồn nguyên liệu: muối ăn (NaCl), đá vôi (CaCO<sub>3</sub>), thạch cao (CaSO<sub>4</sub>.2H<sub>2</sub>O), ammonia (NH<sub>3</sub>), diêm tiêu (NaNO<sub>3</sub>), carnallite (KCl.MgCl<sub>2</sub>.6H<sub>2</sub>O). Có bao nhiêu nguyên liệu dùng để sản xuất NaHCO<sub>3</sub> và Na<sub>2</sub>CO<sub>3</sub> trong công nghiệp bằng phương pháp Solvay?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de09_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: Ca(OH)<sub>2</sub>, NaCl, Na<sub>2</sub>CO<sub>3</sub>, CaCl<sub>2</sub>, K<sub>3</sub>PO<sub>4</sub>, HCl. Có bao nhiêu chất có thể dùng để làm mềm nước có tính cứng tạm thời?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de09_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Thuỷ ngân dễ bay hơi và rất độc. Khi nhiệt kế thuỷ ngân bị vỡ có thể dùng bột lưu huỳnh để xử lí thuỷ ngân. Giải thích và viết phương trình hóa học minh họa.<br/>b) Em hãy phân tích nguyên tắc bảo vệ vỏ tàu biển (thép) bằng cách gắn các tấm kẽm lên vỏ tàu (phần chìm dưới nước).",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Thuỷ ngân dễ bay hơi và rất độc. Khi nhiệt kế thuỷ ngân bị vỡ có thể dùng bột lưu huỳnh để xử lí thuỷ ngân. Do thuỷ ngân có thể tác dụng ngay với lưu huỳnh ở điều kiện thường tạo thành chất rắn khó bay hơi, dễ dàng thu gom, xử lí.<br/>Hg (l) + S (s) → HgS(s)<br/>b) Chống ăn mòn bằng phương pháp điện hóa. Khi đó, có sự tạo thành pin điện Zn – Fe; trong đó Zn là anode, Fe là cathode. Do đó, khối kẽm bị ăn mòn trước, vỏ tàu biển được bảo vệ.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de09_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "Viết phương trình hoá học của phản ứng xảy ra trong các thí nghiệm sau:<br/>a) Cho một mẩu kim loại sodium vào cốc nước.<br/>b) Sục khí CO<sub>2</sub> vào dung dịch KOH.<br/>c) Nhỏ dung dịch HCl vào ống nghiệm có chứa sẵn Na<sub>2</sub>CO<sub>3</sub>.<br/>e) Cho một lượng NaHCO<sub>3</sub> rắn vào ống nghiệm rồi đun nóng trên ngọn lửa đèn cồn.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) 2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>.<br/>b) CO<sub>2</sub> + 2KOH → K<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O.<br/>c) 2HCl + Na<sub>2</sub>CO<sub>3</sub> → 2NaCl + CO<sub>2</sub> + H<sub>2</sub>O.<br/>d) 2NaHCO<sub>3</sub>  Na<sub>2</sub>CO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de09_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Cho các thông tin về nguyên, vật liệu (cột A) và ứng dụng (cột B) của một số hợp chất của calcium.<br/>Nối các thông tin ở cột A và cột B sao cho phù hợp. (ví dụ 1A, 2B…)<br/>b) Một mẫu nước cứng có nồng độ các ion Na<sup>+</sup>, Ca<sup>2+</sup>, Mg<sup>2+</sup>, Cl<sup>–</sup>, SO<sub>4</sub><sup>2–</sup> và HCO<sub>3</sub><sup>–</sup> tương ứng là: 1,2 mM; 3,0 mM; 1,0 mM; 0,6 mM; 0,1 mM và x mM (1 mM = 1 mmol.L<sup>–1</sup>), ngoài ra không chứa ion nào khác. Tính tổng khối lượng (mg) chất tan còn lại sau khi đun sôi kĩ 2 L mẫu nước cứng này. Giả sử các muối MgCO<sub>3</sub>, CaCO<sub>3</sub> hầu như không tan trong nước.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) 1B, 2A, 3C.<br/>b) Từ nguyên tắc trung hòa điện tích trong dung dịch suy ra x = 8,4 mM<br/>Nhận thấy :<br/>[Ca<sup>2+</sup>, Mg<sup>2+</sup>] <   [HCO<sub>3</sub><sup>–</sup>] nên khi đun sôi sẽ có 3 phản ứng xảy ra hoàn toàn:<br/>Ca<sup>2+</sup> (aq) + 2HCO<sub>3</sub><sup>–</sup> (aq) CaCO<sub>3</sub> (s)+ CO<sub>2</sub>(g) + H<sub>2</sub>O (l)<br/>Mg<sup>2+</sup> (aq) + 2HCO<sub>3</sub><sup>–</sup> (aq) MgCO<sub>3</sub> (s)  + CO<sub>2</sub> (g) + H<sub>2</sub>O (l)<br/>2HCO<sub>3</sub><sup>–</sup> (aq) CO<sub>3</sub><sup>2–</sup> (aq) + CO<sub>2</sub>(g) + H<sub>2</sub>O (l)<br/>Khối lượng chất tan còn lại bằng tổng khối lượng ion Na<sup>+</sup>, Cl<sup>–</sup>, SO<sub>4</sub><sup>2–</sup> và CO<sub>3</sub><sup>2–</sup>:<br/>2.23 + 0,6.35,5 + 0,1.96 + (8,4 – 2.3 – 2.1).60) = 141 mg.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_gk2_de10",
    "code": "H12-GK2-10",
    "title": "Đề Kiểm Tra Giữa Kì 2 Hóa 12 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 2 Hóa học 12 (Pin điện hóa, Điện phân & Đại cương kim loại)",
    "badge": "Giữa Kì 2",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk2_de10_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron nào sau đây là của nguyên tử kim loại?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1s<sup>2</sup>s<sup>2</sup>2p<sup>6</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk2_de10_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các electron tự do trong mạng tỉnh thể kim loại đã phản xạ hầu hết các tia sáng nhìn thấy dược. Điều này tạo nên tính chất vật lí nào sau đây của kim loại?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính dẫn diễn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ánh kim",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính dẻo",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tính dẫn nhiệt ",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk2_de10_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi điều chế kim loại, các ion kim loại đóng vai trò là chất",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "khử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bị oxi hoá",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "bị khử",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cho electron",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk2_de10_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp kim là vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại hoặc phi kim khác. Hợp kim ngày càng được sử dụng phổ biến, do có nhiều tính chất vượt trội so với kim loại. Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính chất vật lí của hợp kim tương tự các đơn chất thành phần",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hợp kim có tính chất hóa học khác nhiều các kim loại thành phần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hợp kim thường có độ dẫn điện kém hơn kim loại",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hợp kim thường mềm hơn các đơn chất thành phần",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk2_de10_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính khử của các kim loại nhóm IA từ Li đến Cs biến đổi như thế nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tăng dần",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Không đổi",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Không có quy luật",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Giảm dần",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk2_de10_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét phản ứng phân huỷ muối nitrate của kim loại nhóm IIA:<br/>Từ Mg(NO<sub>3</sub>)<sub>2</sub> đến Ba(NO<sub>3</sub>)<sub>2</sub>, biến thiên enthalpy chuẩn của phản ứng biến đổi như thế nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Không đổi",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giảm dần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng dần",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không có quy luật",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa12_gk2_de10_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thả một đinh sắt nặng m<sub>1</sub> gam đã được đánh sạch bề mặt vào cốc chứa dung dịch copper (II) sulfate màu xanh. Sau một thời gian thấy toàn bộ lượng đồng sinh ra đã bám vào “đinh sắt” (thực chất là phần đinh sắt chưa phản ứng). Lấy “đinh sắt” ra khỏi cốc dung dịch, sấy khô, đem cân được m<sub>2</sub> gam. Phát biểu nào sau đây đúng ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Màu xanh của dung dịch copper (II) sulfate đậm dần",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng xảy ra là 2Fe(s) + 3Cu<sup>2+</sup>(aq) → 2Fe<sup>3+</sup>(aq) + 3Cu(s)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fe bị oxi hóa bởi ion Cu<sup>2+</sup> trong dung dịch",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "So sánh, thu được kết quả m<sub>2</sub> < m<sub>1</sub>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa12_gk2_de10_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trường hợp nào dưới đây sử dụng phương pháp điện hóa để chống ăn mòn kim loại?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tráng thiếc lên bề mặt thép",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Gắn thanh zinc vào mặt ngoài ống thép chôn dưới đất",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mạ vàng lên quai đồng hồ bằng thép",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phủ sơn lên lan can bằng thép",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_gk2_de10_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử của các nguyên tố nhóm IA khác nhau về",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số electron lớp ngoài cùng của nguyên tử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cấu hình electron nguyên tử",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "số oxi hóa của nguyên tử trong hợp chất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "kiểu mạng tinh thể của đơn chất",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk2_de10_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nhóm IIA, nguyên tố phổ biến trong vỏ Trái Đất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Rb và Sr",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mg và Ba",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mg và Ca",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Be và Ca",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk2_de10_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong quá trình tái chế kim loại, ở công đoạn phân loại phế liệu, có thể dùng nam châm lớn để tách riêng phế liệu",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "aluminium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "thép",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "copper",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "zinc",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_gk2_de10_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một loại nước cứng khi đun sôi thì chỉ giảm bớt một phần tính cứng. Trong loại nước này có hoà tan những hợp chất nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "MgCl<sub>2</sub> và CaCl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ca(HCO<sub>3</sub>)<sub>2</sub> và Mg(HCO<sub>3</sub>)<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CaSO<sub>4</sub> và MgCl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ca(HCO<sub>3</sub>)<sub>2</sub> và MgSO<sub>4</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng: <b>D</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa12_gk2_de10_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Trong công nghiệp, quá trình điện phân dung dịch NaCl thường được tiến hành trong thùng điện phân có anode bằng than chì và cathode bằng sắt (giữa hai điện cực có màng ngăn xốp) dùng để sản xuất NaOH, khí Cl<sub>2</sub>. Sơ đồ quá trình điện phân dung dịch NaCl trong công nghiệp như hình vẽ sau:<br/>Dung dịch NaCl bão hòa có nồng độ 300 g L<sup>-1</sup>bơm vào chỉ được điện phân một phần thành dung dịch NaCl có nồng độ 200 g L<sup>-1</sup>, dung dịch này sau đó được dẫn ra khỏi thùng điện phân, trong khi nước muối mới được bơm vào. Việc làm này giúp hạn chế sự tạo thành sản phẩm không mong muốn. Dung dịch NaOH thu được ở cathode có nồng độ 32% được chuyển sang thiết bị cô đặc để sản xuất dung dịch NaOH có nồng độ theo ý muốn.",
        "images": [
          "/assets/hoa12/midterm2/h12_gk2_de10_image3.png",
          "/assets/hoa12/midterm2/h12_gk2_de10_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khí Cl<sub>2</sub> thoát ra ở anode, khí H<sub>2</sub> thoát ra ở cathode",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giả sử NaOH không bị thất thoát trong quá trình cô đặc, thể tích dung dịch NaCl không thay đổi trong quá trình điện phân. Để sản xuất được một thùng 20 lít dung dịch NaOH 45% thương phẩm có khối lượng riêng 1,48 g mL<sup>-1</sup>, cần ít nhất 194,8 lít (làm tròn đến hàng phần mười) dung dịch NaCl bão hòa nồng độ 300 g L<sup>-1</sup>bơm vào thùng điện phân",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Màng ngăn xốp có tác dụng ngăn không cho khí Cl<sub>2</sub> chuyển sang cathode phản ứng với OH",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tại cathode xảy ra sự oxi hóa H<sub>2</sub>O thành khí H<sub>2</sub> và OH<sup>-</sup>, tại anode xảy ra sự khử ion Cl<sup>-</sup> thành khí Cl<sub>2</sub>",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Anode: 2Cl<sup>-</sup>  Cl<sub>2</sub> + 2e (quá trình oxi hoá)<br/>Cathode: 2H<sub>2</sub>O+ 2e  H<sub>2</sub> + 2OH<sup>-</sup>(quá trình khử)<br/>Phương trình: 2NaCl + 2H<sub>2</sub>OCl<sub>2</sub> + H<sub>2</sub> + 2NaOH<br/>a) Đúng.<br/>b) Đúng. Khối lượng NaOH cần pha chế af§:<br/>Thể tích dung dịch NaCl bão hòa nồng độ 300 g L<sup>-1</sup> bơm vào thùng điện phân là<br/>c) Đúng.<br/>d) Sai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_gk2_de10_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Một nhóm học sinh nghiên cứu sự ăn mòn kim loại của một sợi kẽm với giả thuyết: “trong cùng điều kiện, tốc độ ăn mòn điện hóa nhanh hơn tốc độ ăn mòn hóa học”. Để kiểm tra giả thuyết của mình, nhóm học sinh trên đã chuẩn bị 2 sợi kẽm đã làm sạch bề mặt, có kích thước, khối lượng như nhau và tiến hành các thí nghiệm như sau:<br/>- Thí nghiệm 1: Nhúng một sợi kẽm vào dung dịch H<sub>2</sub>SO<sub>4</sub> 0,5M (hình 1).<br/>- Thí nghiệm 2: Nhúng sợi kẽm còn lại vào dung dịch H<sub>2</sub>SO<sub>4</sub> 0,5M cùng với một sợi đồng và nối chúng lại qua vôn kế (hình 2).",
        "images": [
          "/assets/hoa12/midterm2/h12_gk2_de10_image4.png",
          "/assets/hoa12/midterm2/h12_gk2_de10_hdphoto2.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhóm học sinh trên quan sát thấy bọt khí thoát ra trên bề mặt sợi kẽm ở thí nghiệm 1 nhanh hơn bọt khí thoát ra trên bề mặt sợi kẽm ở thí nghiệm 2, chứng tỏ giả thuyết trên là sai",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nếu thế điện cực chuẩn , , thì vôn kế luôn chỉ giá trị cố định là 1,10 V",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở thí nghiệm 2, quan sát thấy có bọt khí thoát ra trên bề mặt sợi đồng, chứng tỏ sợi đồng bị ăn mòn điện hóa học",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sau 3 phút, nhóm học sinh lấy 2 sợi kẽm ra cân lại, thấy khối lượng sợi kẽm ở thí nghiệm 1 lớn hơn khối lượng sợi kẽm ở thí nghiệm 2, chứng tỏ giả thuyết trên là đúng",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. TN<sub>2</sub> khí thoát ra nhiều hơn do có ăn mòn điện hóa.<br/>b) Sai.trong điều kiện chuẩn.<br/>c) Sai. Sợi Cu không bị ăn mòn, mà chỉ làm điện cực dương; trên bề mặt sợi Cu.<br/>d) Đúng. TN<sub>2</sub> Zn bị ăn mòn điện hóa nên khối lượng sợi kẽm sẽ nhỏ hơn sơ với TN1 chỉ có ăn mòn hóa học.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_gk2_de10_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Trong phản ứng của kim loại Al với khí Cl<sub>2</sub>, mỗi nguyên tử Al nhường bao nhiêu electron?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_gk2_de10_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phương trình hóa học của các phản ứng được đánh số thứ tự từ 1 đến 4 dưới đây:<br/>(1) 2NaCl 2Na + Cl<sub>2</sub><br/>(2) Fe<sub>2</sub>O<sub>3</sub> + 3CO  2Fe + 3CO<sub>2</sub><br/>(3) Fe + CuSO<sub>4</sub>  FeSO<sub>4</sub> + Cu<br/>(4) 4AgNO<sub>3</sub> +2H<sub>2</sub>O 4Ag + O<sub>2</sub> +4HNO<sub>3</sub><br/>Gán số thứ tự phương trình hóa học của các phản ứng theo phương pháp tách kim loại: nhiệt luyện, thủy luyện, điện phân nóng chảy, điện phân dung dịch và sắp xếp theo trình tự thành dãy bốn số (Câu 1234, 4321…).",
        "images": [],
        "correctAnswer": "2314",
        "explanation": "Đáp án: 2314.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_gk2_de10_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Hầu hết vàng dùng làm đồ trang sức là hợp kim của vàng và các kim loại khác để thêm vào để cho cứng hơn. Vàng nguyên chất đã vàng 24 carat, vì vậy vàng 18 carat là hợp kim của vàng và các kim loại khác theo tỷ lệ tương ứng là 18 : 6 về khối lượng. Một thợ kim hoàn tạo ra một món đồ trang sức hợp kim vàng 18 carat bằng cách dùng 9 gam vàng nguyên chất thì món đồ trang sức đó nặng bao nhiêu gam?",
        "images": [],
        "correctAnswer": "12",
        "explanation": "Đáp án: 12.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_gk2_de10_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Phân tích một mẫu nước cứng thấy có chứa các ion: Ca<sup>2+</sup>, Mg<sup>2+</sup>, Cl<sup>–</sup>, HCO<sub>3</sub><sup>–</sup>; trong đó nồng độ Cl<sup>–</sup> là 0,006M và của HCO<sub>3</sub><sup>–</sup> là 0,01M. Cần lấy bao nhiêu mL dung dịch Na<sub>2</sub>CO<sub>3</sub> 0,2M để chuyển 1 lít nước cứng trên thành nước mềm? (Coi nước mềm là nước không chứa các ion Ca<sup>2+</sup>, Mg<sup>2+</sup>).<br/>Đáp án:<br/>Ta có: Ca<sup>2+</sup>, Mg<sup>2+</sup> + CO<sub>3</sub><sup>2–</sup> → CaCO<sub>3</sub>, MgCO<sub>3</sub>↓",
        "images": [],
        "correctAnswer": "40",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_gk2_de10_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Dựa vào tính chất vật lí, giải thích vì sao chromium (Cr) được dùng làm mũi khoan và vonfram (W) dùng làm dây tóc bóng đèn.<br/>b) Các thiết bị bằng thép (đường ống, bể chứa, giàn khoan dầu, tàu thuỷ, …) trong môi trường biển hoặc dưới lòng đất ẩm ướt thường được bảo vệ bằng phương pháp điện hoá. Kim loại được sử dụng để bảo vệ thép thường là kẽm. Hãy cho biết kim loại nào bị ăn mòn. Giải thích.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Chromium (Cr) được dung làm mũi khoan, mũi mài vì là kim loại rất cứng. Vonfram (W) dùng làm dây tóc bóng đèn vì có nhiệt độ nóng chảy cao.<br/>b) Kim loại kẽm bị ăn mòn, kim loại thép được bảo vệ.<br/>Do kẽm hoạt động hoá học mạnh hơn sắt nên đóng vai trò là anode và bị ăn mòn trước.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_gk2_de10_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Kim loại nhóm IA phản ứng dễ dàng với oxygen và nước, mức độ mãnh liệt của phản ứng tăng dần từ Li đến K. Giải thích.<br/>b) Giải thích vì sao NaHCO<sub>3</sub> dùng làm bột nở?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Từ Li đến K, bán kính nguyên tử tăng dần, tính khử của kim loại tăng dần. Do đó, mức độ mãnh liệt của phản ứng với oxygen và nước cũng tăng dần.<br/>b) NaHCO<sub>3</sub> dùng làm bột nở do ở nhiệt độ cao, NaHCO<sub>3</sub> phân huỷ sinh ra khí, khí thoát ra làm cho bánh phồng, xốp.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_gk2_de10_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Trình bày một số ứng dụng chính của sản phẩm nung vôi.<br/>b) Ở một lò nung vôi công nghiệp, sử dụng nguyên liệu là đá vôi (chỉ chứa CaCO<sub>3</sub> và tạp chất trơ); nhiên liệu là than đá (chỉ chứa carbon và tạp chất trơ). Biết các phản ứng xảy ra hoàn toàn và 50% lượng nhiệt tỏa ra từ nhiên liệu được hấp thụ để phân huỷ đá vôi. Biết nhiệt tạo thành chuẩn của các chất được cho trong bảng sau:<br/>Để thu được 11,2 tấn CaO thì quá trình nung vôi đã thải ra môi trường bao nhiêu m³ (đo ở 1 bar, 25°C) khí CO<sub>2</sub>?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Sản phẩm chính của quá trình nung vôi là CaO, được sử dụng làm vật liệu xây dựng, tẩy uế, sát trùng.<br/>b) C(s) + O<sub>2</sub>(g)  CO<sub>2</sub>(g)<br/>Biến thiên enthalpy chuẩn của phản ứng nung CaCO<sub>3</sub>:<br/>= (–635,1) + (–393,5) – (–1206,9) = +178,3 (kJ).<br/>Quá trình trao đổi nhiệt: Q<sub>thu</sub> = 50%.Q<sub>tỏa</sub>   n<sub>C</sub> = 0,181245 (triệu mol)<br/>tổng = 24,79.1000.(0,2 + 0,181245) = 9451 m³<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  }
];

export function getMidterm2ExamById(id: string): Chuong1Exam | undefined {
  return HOA12_MIDTERM2_EXAMS.find(e => e.id === id || e.code === id);
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
