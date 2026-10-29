// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI CUỐI HỌC KÌ 2 HÓA HỌC 12 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi CUỐI Học Kì 2 Hóa Học Lớp 12 Chuẩn Cấu Trúc 2025
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

export const HOA12_FINAL2_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa12_ck2_de01",
    "code": "H12-CK2-01",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de01_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "\"Điện phân là quá trình...(1)... xảy ra trên bề mặt các điện cực dưới tác dụng của...(2)... đi qua dung dịch chất điện li hoặc chất điện li nóng chảy\". Nội dung phù hợp trong ô trống (1), (2) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "khử, dòng điện một chiều",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "oxi hóa, dòng điện xoay chiều",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "oxi hóa - khử, dòng điện một chiều",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "oxi hóa - khử, dòng điện xoay chiều",
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
        "id": "hoa12_ck2_de01_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong mạng tinh thể kim loại chứa các cation kim loại được sắp xếp theo một trật tự nhất định và các electron chuyển động",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "theo một quỹ đạo xác định",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "xung quanh một vị trí xác định",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tự do trong toàn bộ mạng tinh thể",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "trong một khu vực không gian nhất định",
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
        "id": "hoa12_ck2_de01_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình hóa học nào sau đây viết không đúng?",
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
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
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
        "id": "hoa12_ck2_de01_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại cơ bản trong thép 304 là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "magnesium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sắt (iron)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "zinc",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhôm (aluminium)",
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
        "id": "hoa12_ck2_de01_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại nào sau đây thuộc nhóm kim loại kiềm?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ag",
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
            "text": "Au",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ca",
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
        "id": "hoa12_ck2_de01_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nguyên tố nào sau đây thường được dùng để chế tạo nam châm điện?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cobalt và chromium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sắt và cobalt",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nickel và manganese",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sắt và chromium",
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
        "id": "hoa12_ck2_de01_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây không thuộc loại phức chất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Zn(OH)4]<sup>2–</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Ag(NH3)2]<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cu(NO<sub>3</sub>)<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Fe(CO)5]",
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
        "id": "hoa12_ck2_de01_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương pháp Solvay là phương pháp phổ biến nhất hiện nay để sản xuất Na<sub>2</sub>CO<sub>3</sub> như hình bên. Phản ứng hóa học nào sau đây không có trong phương pháp Solvay?",
        "images": [
          "/assets/hoa12/final2/h12_ck2_de1_image6.png",
          "/assets/hoa12/final2/h12_ck2_de1_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CaCO<sub>3</sub> → CaO + CO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NaCl + NH<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub> → NH<sub>4</sub>Cl + NaHCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CaO + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NaHCO<sub>3</sub> → Na<sub>2</sub>CO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O",
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
        "id": "hoa12_ck2_de01_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cầu chì là một thiết bị bảo vệ mạch điện bằng cách làm đứt mạch điện. Câu chì được sử dụng nhằm phòng tránh các hiện tượng quá tải trên đường dây. Dây cầu chì thường được làm bằng kim loại chì (Pb), thiếc trắng (Sn) hoặc cadmium (Cd). Ứng dụng này dựa trên tính chất vật lí nào của các kim loại?",
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
        "displayNumber": 9
      },
      {
        "id": "hoa12_ck2_de01_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "M là nguyên tố kim loại chuyển tiếp dãy thứ nhất, có một số đặc điểm sau:<br/>- Ở trạng thái cơ bản, nguyên tử M có 1 electron ở lớp ngoài cùng.<br/>- Trong hợp chất, số oxi hóa phổ biến của nguyên tố M là +2.<br/>M là nguyên tố nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ni",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cu",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mn",
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
        "displayNumber": 10
      },
      {
        "id": "hoa12_ck2_de01_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phức chất  tham gia phản ứng thế ba phối tử H<sub>2</sub>O bằng ba phối tử OH<sup>–</sup>, tạo thành phức chất có điện tích bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2+",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3+",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4-",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa12_ck2_de01_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hemoglobin là thành phần cấu tạo nên hồng cầu trong các mạch máu. Mỗi phân tử hemoglobin chứa 4 heme B. Mỗi heme B là phức chất với nguyên tử trung tâm là sắt (iron). Heme B kết hợp thêm một phân tử oxygen thông qua đường hô hấp để vận chuyển dưỡng khí đến mô. Mỗi lần đến mô, một phân tử hemoglobin có thể đem đến cho mô tối đa bao nhiêu nguyên tử oxygen?",
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
            "text": "8",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "16",
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
        "id": "hoa12_ck2_de01_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho sự phân loại tính tan các chất dựa vào độ tan (g/100 g nước) như sau:<br/>– Đặt 3 ống nghiệm vào giá. Thêm khoảng 2 mL dung dịch MgCl<sub>2</sub> vào ống nghiệm (1), 2 mL dung dịch CaCl<sub>2</sub> vào ống nghiệm (2), 2 mL dung dịch BaCl<sub>2</sub> vào ống nghiệm (3).<br/>– Nhỏ từ từ đồng thời từng giọt dung dịch CuSO<sub>4</sub> vào mỗi ống nghiệm tới dư.",
        "images": [
          "/assets/hoa12/final2/h12_ck2_de1_image8.png",
          "/assets/hoa12/final2/h12_ck2_de1_hdphoto2.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả ba ống nghiệm đều xuất hiện kết tủa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kết tủa ở ống nghiệm (2) xuất hiện nhanh hơn kết tủa ở ống nghiệm (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể dùng thí nghiệm trên để so sánh độ tan giữa calcium sulfate và barium sulfate",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong thí nghiệm, nếu thay dung dịch CuSO<sub>4</sub> bằng dung dịch Na<sub>2</sub>SO<sub>4</sub> thì kết quả thí nghiệm sẽ thay đổi",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Ống nghiệm (1) không có phản ứng<br/>Ống nghiệm (3) xuất hiện kết tủa trắng. Ống nghiệm (2) xuất hiện vẩn đục trắng.<br/>BaCl<sub>2</sub>(aq) + CuSO<sub>4</sub>(aq) ⟶ CuCl<sub>2</sub>(aq) + BaSO<sub>4</sub>(s)<br/>CaCl<sub>2</sub>(aq) + CuSO<sub>4</sub>(aq) ⟶ CuCl<sub>2</sub>(aq) + CaSO<sub>4</sub>(s)<br/>- Thời điểm xuất hiện kết tủa ở ống nghiệm (3): ngay sau khi cho dung dịch CuSO<sub>4</sub> vào. Thời điểm xuất hiện kết tủa ở ống nghiệm (2): sau khi cho dung dịch CuSO<sub>4</sub> vào một lúc.<br/>a) Sai.<br/>b) Sai.<br/>c) Đúng.<br/>d) Sai. Kết quả thí nghiệm không đổi.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de01_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Một em học sinh A quan sát thấy nước giếng khoan của nhà mình khi mới bơm lên cho vào chậu thì trong nhưng để ngoài không khí một thời gian trong chậu xuất hiện kết tủa màu nâu đỏ. Em học sinh A đưa ra giả thiết:“ Nước giếng khoan chứa hợp chất sắt dưới dạng hòa tan nên khi tiếp xúc với không khí hợp chất sắt dưới dạng hòa tan bị oxi hóa và tạo thành kết tủa”. Để kiểm chứng giả thiết trên học sinh A tiến hành thí nghiệm theo các bước sau:<br/>Bước 1: Cho nước giếng khoan mới bơm lên vào đầy hai cốc đã được đánh số (1) và (2).<br/>Bước 2: Bịt kín miệng cốc thứ (2) bằng màng bọc thực phẩm để không cho không khí tiếp xúc với nước trong cốc rồi cùng để cả hai cốc ngoài không khí một thời gian.<br/>Bước 3: Sau 24 giờ học sinh quan sát thấy cốc (1) xuất hiện kết tủa màu nâu đỏ, còn cốc (2) nước vẫn trong suốt.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Để loại bỏ bớt lượng ion sắt trong nước giếng khoan ở trên, người ta có thể dùng dàn phun mưa (phun nước ngầm thành các hạt nhỏ để tăng diện tích tiếp xúc với không khí)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kết quả thí nghiệm trên chứng minh giả thiết của em A là đúng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước giếng khoan có chứa ion Fe<sup>2+</sup>, khi tiếp xúc với không khí ion này bị oxi hóa thành ion Fe<sup>3+</sup> và tạo kết tủa màu nâu đỏ Fe(OH)<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cốc nước thứ 2 nước vẫn trong vì kim loại sắt phản ứng với nước trong môi trường không có không khí tạo ra hợp chất không màu",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. Dùng dàn phun mưa (phun nước ngầm thành các hạt nhỏ để tăng diện tích tiếp xúc với không khí) sẽ loại bỏ bớt lượng ion sắt trong nước dưới dạng Fe(OH)<sub>3</sub>.<br/>b) Đúng.<br/>Cốc (1) tiếp xúc với không khí nên có kết tủa.<br/>Cốc (2) không tiếp xúc với không khí nên nước trong cốc trong suốt.<br/>c) Đúng. 12Fe<sup>2+</sup> + 3O<sub>2</sub> + 6H<sub>2</sub>O  4Fe(OH)<sub>3</sub> + 8Fe<sup>3+</sup><br/>d) Sai. Trong nước giếng sắt tồn tại dưới dạng ion không phải kim loại. Cốc nước thứ 2 không được tiếp xúc với O<sub>2</sub> trong không khí nên không có phản ứng hóa học.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de01_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Một thanh Magnesium (Mg) nặng 293 gam được gắn vào một đường ống dẫn nước bằng thép chôn dưới đất ẩm để chống ăn mòn. Giả thiết khi đó sẽ xuất hiện một dòng điện chạy giữa thanh Mg và đường ống có cường độ không đổi là 0,025A. Biết rằng, khi lượng Mg còn lại 2% so với ban đầu thì cần phải thay thế để tiếp tục bảo vệ đường ống thép. Cho biết: Số mol electron mà nguyên tử hoặc ion đã cho hoặc nhận tính bằng công thức  I là cường độ dòng điện (ampe), t là thời gian (giây), F = 96500. Sau bao nhiêu ngày thì thanh Mg trên cần phải thay thế? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "1069",
        "explanation": "Đáp án: 1069.<br/>nMg bị ăn mòn = 293.98%/24 = 11,964167 mol<br/>ngày.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de01_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các ứng dụng: (1) nguyên liệu sản xuất thủy tinh; (2) sản xuất sodium; (3) tẩy vết dầu mỡ trước khi mạ điện, sơn, hàn; (4) tách ion Fe<sup>3+</sup> để xử lí nước phèn; (5) làm mềm nước cứng. Có bao nhiêu ứng dụng là của sodium carbonate?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de01_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Phức chất cisplatin có công thức cấu tạo là [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]. Tổng số liên kết xích ma () có trong phức chất cisplatin là bao nhiêu?",
        "images": [],
        "correctAnswer": "10",
        "explanation": "Đáp án: 10.<br/>1 phân tử NH<sub>3</sub> có 3 liên kết   Tổng số liên kết trong phức chất là 4 + 3.2 = 10.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de01_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Lẩu tự sôi là trào lưu gây sốt với giới trẻ Việt trong vài năm trở lại đây. Chức năng làm nóng, chín thực phẩm bên trong mà không cần sử dụng nguồn nhiệt như bếp gas hay bếp điện là nhờ gói tạo nhiệt trong hộp thực phẩm. Các gói thường có thành phần là vôi sống (CaO) được FDA công nhận là an toàn.  Tính lượng nhiệt toả ra khi cho 1 gam CaO vào nước để làm chín thực phẩm (kết quả làm tròn đến hàng phần trăm).<br/>Cho biết nhiệt tạo thành chuẩn của các chất:",
        "images": [],
        "correctAnswer": "1,46",
        "explanation": "Đáp án: 1,46.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de01_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "Để đáp ứng đơn hàng, một nhà máy luyện kim cần sản xuất 5,4 tấn nhôm (Al) nguyên chất. Cán bộ kỹ thuật đưa ra hai phương án cung cấp nguyên liệu như sau:<br/>- Phương án 1: Sử dụng m<sub>1</sub> tấn quặng bauxite (chứa 80% Al<sub>2</sub>O<sub>3</sub> về khối lượng, còn lại là tạp chất trơ) để điều chế nhôm. Biết hiệu suất của toàn bộ quá trình điện phân nóng chảy đạt 85%.<br/>- Phương án 2: Sử dụng m<sub>2</sub> tấn phế liệu nhôm (chứa 80% Al về khối lượng, còn lại là sơn, nhựa và hợp kim khác) để tái chế nhôm. Biết quá trình nung chảy và tinh chế phế liệu đạt hiệu suất thu hồi là 90%.<br/>a) Tính khối lượng nguyên liệu m<sub>1</sub> và m<sub>2</sub> cần chuẩn bị cho mỗi phương án.<br/>b) Dưới góc độ tiết kiệm năng lượng và bảo vệ môi trường, theo em nhà máy nên ưu tiên lựa chọn phương án nào? Vì sao?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Phương án 1:   tấn<br/>Phương án 2:  tấn.<br/>b) Chọn Phương án 2 (tái chế phế liệu). Vì tiết kiệm năng lượng, giảm thiểu rác thải và ô nhiễm môi trường.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de01_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Viết phương trình hoá học cùa phản ứng giải thích hiện tượng tắc ống dẫn nước khi sử dụng nước cứng có chứa Mg(HCO<sub>3</sub>)<sub>2</sub>.<br/>b) Vì sao giặt áo quần bằng nước cứng sẽ tốn xà phòng, nước xả vải hơn khi dùng nước mềm?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Mg(HCO<sub>3</sub>)<sub>2</sub>(aq) ⟶ Mg<sup>2+</sup>(aq) + 2HCO<sub>3</sub><sup>-</sup>(aq)<br/>Mg<sup>2+</sup>(aq) + HCO<sub>3</sub><sup>-</sup>(aq) + OH<sup>−</sup>(aq) ⟶ MgCO<sub>3</sub>(s) + H<sub>2</sub>O(l)<br/>b) Giặt áo quần bằng xà phòng (sodium stearate C<sub>17</sub>H<sub>35</sub>COONa) trong nước cứng sẽ tạo ra muối không tan là calcium stearate (C<sub>17</sub>H<sub>35</sub>COO)<sub>2</sub>Ca, chất này bám trên vải sợi, làm cho quần áo mau mục nát. Mặt khác, nước cứng làm cho xà phòng có ít bọt, giảm khả năng giặt rửa của xà phòng nên giặt áo quần bằng nước cứng sẽ tốn xà phòng, nước xả vải hơn khi dùng nước mềm.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck2_de01_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Muối cobalt(II) chloride có màu hồng. Hoà tan muối này vào nước thu được dung dịch màu xanh (dung dịch A) do ion Co<sup>2+</sup> tạo thành phức chất aqua có dạng hình học bát diện. Phức chất này kém bền đối với nhiệt. Khi nhúng một băng giấy lọc màu trắng vào dung dịch A rồi sấy ở khoảng 100°C cho đến khô thu được băng giấy có màu hồng. Người ta có thể dùng băng giấy này để phát hiện nước trong một số mẫu vật.<br/>Giải thích nguyên nhân của ứng dụng vừa nêu, viết phương trình hoá học minh hoạ.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>Nguyên nhân của ứng dụng trên là dựa vào phản ứng tạo phức của cation Co<sup>2+</sup> trong dung dịch:<br/>CoCl<sub>2</sub>(s) + 6H<sub>2</sub>O(l) → [Co(OH<sub>2</sub>)<sub>6</sub>]<sup>2+</sup>(aq) + 2Cl<sup>-</sup> (aq) (*)<br/>Khi sấy khô băng giấy xảy ra phản ứng hóa học ngược với phản ứng (*) tạo CoCl<sub>2</sub> có màu hồng.<br/>Khi băng giấy màu hồng tiếp xúc với mẫu vật có nước thì lại diễn ra quá trình (*) làm băng giấy chuyển sang màu xanh.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck2_de02",
    "code": "H12-CK2-02",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de02_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điện phân (với các điện cực trơ) dung dịch NaCl có màng ngăn giữa hai điện cực, sau điện phân thu được dung dịch chứa NaOH và NaCl, khí thoát ra từ bình điện phân là H<sub>2</sub> và Cl<sub>2</sub>. Bán phản ứng xảy ra ở anode là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4OH<sup>-</sup> → O<sub>2</sub> + 2H<sub>2</sub>O + 4e",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2H<sub>2</sub>O + 2e → H<sub>2</sub> + 2OH<sup>-</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2Na<sup>+</sup> + 2e → 2Na",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2Cl<sup>-</sup> → Cl<sub>2</sub> + 2e",
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
        "id": "hoa12_ck2_de02_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết kim loại là liên kết được hình thành giữa",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "các cation kim loại và các electron hóa trị tự do trong tinh thể kim loại",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "các cation và các anion trong tinh thể kim loại",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "các electron hoá trị trong tinh thể kim loại",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "các nguyên tử trong tinh thể kim loại",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_ck2_de02_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại tungsten (W) được sử dụng làm dây tóc bóng điện. Ứng dụng này được dựa trên cơ sở tính chất vật lí nào sau đây của tungsten?",
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
            "text": "Nhiệt độ nóng chảy cao",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tính ánh kim",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tính dẫn nhiệt",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_ck2_de02_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các kim loại sau, kim loại nào có thể được điều chế bằng phương pháp thủy luyện?",
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
            "text": "Cu",
            "isCorrect": true
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
            "text": "Ca",
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
        "id": "hoa12_ck2_de02_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây làm mềm được nước có tính cứng toàn phần?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na<sub>2</sub>CO<sub>3</sub>",
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
            "text": "NaCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "KNO<sub>3</sub>",
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
        "id": "hoa12_ck2_de02_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các electron hoá trị của nguyên tử nguyên tố kim loại chuyển tiếp dãy thứ nhất phân bố ở",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phân lớp 4s và phân lớp 3d",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phân lớp 4p",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "lớp 4s",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phân lớp 4p và phân lớp 3d",
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
        "id": "hoa12_ck2_de02_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số oxi hoá của nguyên tử trung tâm trong phức chất [Co(NH<sub>3</sub>)<sub>4</sub>(OH<sub>2</sub>)<sub>2</sub>]SO<sub>4</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "+6",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+2",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "+4",
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
        "id": "hoa12_ck2_de02_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi tham gia phản ứng hoá học, mỗi nguyên tử kim loại nhóm IA đều thể hiện khuynh hướng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhường 2 electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhận 2 electron",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nhận 1 electron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhường 1 electron",
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
        "id": "hoa12_ck2_de02_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho bảng giá trị thế điện cực chuẩn của các cặp oxi hóa – khử như sau:<br/>Trong các kim loại Cu, Ag, Fe và Ni. Số kim loại khử được ion H<sup>+</sup> trong dung dịch ở điều kiện chuẩn là",
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
            "text": "1",
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
        "id": "hoa12_ck2_de02_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tất cả các nguyên tố thuộc nhóm B đều là nguyên tố chuyển tiếp dãy thứ nhất",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các nguyên tố chuyển tiếp dãy thứ nhất thường có nhiệt độ nóng chảy cao hơn các kim loại nhóm IA và II",
            "isCorrect": false
          },
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Số oxi hóa của nguyên tử nguyên tố chromium trong hợp chất K<sub>2</sub>CrO<sub>4</sub> và K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> bằng nhau",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trạng thái oxi hóa thường gặp của Mn trong các hợp chất là +2, +4,+ 7",
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
        "id": "hoa12_ck2_de02_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phát biểu sau: “Phức chất đơn giản thường có một...(1)... liên kết với các phối tử bao quanh. Liên kết giữa nguyên tử trung tâm và phối tử trong phức chất là liên kết...(2)....”. Cụm từ cần điền vào (1) và (2) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cation kim loại, ion",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nguyên tử kim loại, cho - nhận",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nguyên tử trung tâm, cho - nhận",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phối tử, ion",
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
        "id": "hoa12_ck2_de02_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào không đúng khi nói về ứng dụng của phức chất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phức chất được dùng làm thuốc chữa bệnh ung thư với tên gọi thương phẩm là cisplatin có công thức hoá học là [PtCl<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub>]",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong công nghiệp hóa chất, nhiều chất hóa học được điều chế khi có mặt chất xúc tác là phức chất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong hóa học, phức chất được dùng để nhận biết và xác định hàm lượng các ion kim loại chuyển tiếp trong dung dịch",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phức chất [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> không phân biệt được aldehyde với ketone",
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
        "id": "hoa12_ck2_de02_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Độ tan trong nước của các hydroxide nhóm IIA ở 20°C được cho ở bảng sau:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Độ tan của các hydroxide nhóm IIA tăng dần từ Mg(OH)<sub>2</sub> tới Ba(OH)<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Độ tan của các hydroxide càng lớn thì mức độ phản ứng của các kim loại nhóm IIA với nước càng thuận lợi",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các kim loại nhóm IIA đều phản ứng mãnh liệt với nước ở 20°C và tạo thành dung dịch base",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở 20°C, cho 4,00 gam Ba(OH)<sub>2</sub> vào 100 gam nước và khuấy đều, thu được dung dịch bão hòa và một phần chất rắn không tan",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Sai. Mg phản ứng chậm với nước ở 20<sup>o</sup>C.<br/>d) Đúng. Độ tan của Ba(OH)<sub>2</sub> ở 20°C là 3,89 g/100 gam nước, nghĩa là 100 gam nước chỉ có thể hòa tan tối đa 3,89 gam Ba(OH)<sub>2</sub> để đạt trạng thái bão hòa. Vì lượng cho vào (4,00 gam) lớn hơn độ tan (3,89 gam), nên phần dư (0,11 gam) sẽ không tan hết và còn lại dưới dạng chất rắn lơ lửng hoặc chìm xuống đáy.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de02_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Để xác định hàm lượng Fe<sup>2+</sup> trong một lọ muối Mohr (có công thức (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.FeSO<sub>4</sub>.6H<sub>2</sub>O) người ta tiến hành thí nghiệm như sau: Cân chính xác 10,0 gam muối Mohr, pha thành 100 mL dung dịch X. Lấy chính xác 10 mL dung dịch X, thêm 5 mL dung dịch H<sub>2</sub>SO<sub>4</sub> loãng nồng độ 20%, được dung dịch Y. Chuẩn độ chính xác dung dịch Y bằng dung dịch chuẩn KMnO<sub>4</sub> 0,02 M. Thực hiện chuẩn độ 3 lần, kết quả thu được như sau:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch H<sub>2</sub>SO<sub>4</sub> loãng được thêm vào nhằm tạo môi trường acid, giúp phản ứng xảy ra theo hướng tạo thành Mn<sup>2+</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thời điểm kết thúc chuẩn độ là lúc dung dịch xuất hiện màu hồng ổn định khoảng 20 giây",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi để trong không khí lâu ngày thì hàm lượng FeSO<sub>4</sub> trong muối Mohr sẽ không thay đổi",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hàm lượng (% khối lượng) Fe<sup>2+</sup> trong mẫu muối Mohr đem phân tích ở trên là 11,2%",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. Phản ứng: 5Fe<sup>2+</sup> + MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> → 5Fe<sup>3+</sup> + Mn<sup>2+</sup> + 4H<sub>2</sub>O.<br/>b) Đúng.<br/>c) Sai. Vì để trong không khí lâu ngày thì Fe<sup>2+</sup> sẽ bị oxi hóa thành Fe<sup>3+</sup> nên hàm lượng FeSO<sub>4</sub> trong muối Mohr sẽ giảm.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de02_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Trong quá trình điện phân, 1 mol ion Al<sup>3+</sup> được điện phân cần tối đa bao nhiêu mol electron?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de02_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Nhúng que platinum sạch vào dung dịch chất Y, sau đó đưa lên ngọn lửa đèn khí, đèn khí cháy với ngọn lửa màu tím (khi nhìn qua kính lọc màu xanh cobalt). Mặt khác, thêm vài giọt dung dịch chất Y vào dung dịch silver nitrate thấy xuất hiện kết tủa trắng. Cho các chất Y sau: (1) Potassium iodide, (2) Sodium iodide, (3) Sodium chloride, (4) Potassium chloride. Chất Y thỏa mãn là chất số mấy?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de02_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Phức chất [MA<sub>x</sub>B<sub>y</sub>] có dạng hình học vuông phẳng. Trong đó M là nguyên tử trung tâm, x và y là số phối tử A và B. Giá trị của x + y là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de02_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Một gói làm nóng thức ăn (FRH) được sử dụng trong quân đội chứa 8 gam hỗn hợp (Mg 90%, Fe 4%, NaCl 6% về khối lượng), khi tiếp xúc với nước sẽ xảy ra phản ứng:<br/>Mg(s) + 2H<sub>2</sub>O(1) → Mg(OH)<sub>2</sub>(s) + 2H<sub>2</sub>(g)<br/>Phản ứng này tỏa ra nhiều nhiệt và làm nóng phần thức ăn đi kèm.<br/>Cho biết: Enthalpy tạo thành chuẩn (kJ mol<sup>-1</sup>) của Mg(OH)<sub>2</sub>(s) và H<sub>2</sub>O(l) lần lượt là -928,4 và -285,8. Nhiệt dung riêng của nước, C = 4,2 J g<sup>-1</sup>K<sup>-1</sup>; khối lượng riêng của nước là D = 1 g/mL. Phần nước được làm nóng chỉ nhận được tối đa 60% lượng nhiệt tỏa ra. Lượng nhiệt mà nước nhận được để thay đổi ∆t (°C) được tính theo công thức Q = m.C.∆t. Nếu sử dụng gói FRH trên để làm nóng nước từ 25°C lên 100°C thì lượng nước tối đa theo mL được làm nóng là bao nhiêu (làm tròn kết quả đến hàng đơn vị)?",
        "images": [],
        "correctAnswer": "204",
        "explanation": "Đáp án: 204.<br/>Q<sub>tỏa</sub> =<br/>Q<sub>tỏa</sub> = Q<sub>thu</sub>/60%",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de02_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "Một trong những phương pháp phổ biến nhất để bảo vệ vỏ tàu biển bằng thép (hợp kim chủ yếu của sắt và carbon) khỏi bị ăn mòn trong môi trường nước biển là gắn các khối kẽm (Zn) vào phần vỏ tàu chìm dưới nước. Hãy cho biết tên gọi của phương pháp bảo vệ kim loại này. Giải thích bản chất hóa học (cơ chế) của phương pháp đó khi tàu hoạt động trong nước biển.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>- Phương pháp bảo vệ điện hóa.<br/>- Cơ chế: Kẽm (Zn) có tính khử mạnh hơn Sắt (Fe) trong thép. Khi cả hai cùng tiếp xúc với môi trường dung dịch chất điện li là nước biển, chúng tạo thành một pin điện hóa. Trong đó, kim loại có tính khử mạnh hơn (Zn) sẽ bị oxi hóa và ăn mòn thay cho kim loại yếu hơn (Fe), qua đó bảo vệ được vỏ tàu.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de02_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Hiện tượng “nước chảy đá mòn” và hiện tượng “xâm thực” của nước mưa vào các phiến đá vôi là do trong nước có hoà tan khí Y. Xác định khí Y và viết phương trình hóa học xảy ra của hiện tượng trên.<br/>b) Ấm (siêu) đun nước lâu ngày thường có một lớp cặn bám dưới đáy. Hãy đề xuất một phương pháp đơn giản để loại lớp cặn đó.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Khí Y là CO<sub>2</sub><br/>CaCO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O  Ca(HCO<sub>3</sub>)<sub>2</sub><br/>b) Giấm ăn tác dụng với CaCO<sub>3</sub> thành phần chính của cặn bám ở đáy ấm (siêu) đun nước tạo thành muối tan. Vì thế khi có cặn màu trắng (thành phần chính là CaCO<sub>3</sub>) bám ở đáy ấm đun nước có thể dùng giấm ăn để loại bỏ các vết cặn này.<br/>CaCO<sub>3</sub> + 2CH<sub>3</sub>COOH → (CH<sub>3</sub>COO)<sub>2</sub>Ca + CO<sub>2</sub> + H<sub>2</sub>O.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck2_de02_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Nêu hiện tượng, giải thích và viết phương trình hóa học khi cho khoảng 2 mL dung dịch HCl đặc vào ống nghiệm chứa 1 mL dung dịch CuSO<sub>4</sub> 0,5%.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>Hiện tượng: Màu xanh của dung dịch chuyển sang màu vàng.<br/>Giải thích: Do ion Cl<sup>−</sup> thay thế phối tử H<sub>2</sub>O trong phức aqua của Cu<sup>2+</sup><br/>Phương trình hóa học:<br/>Cu<sup>2+</sup>(aq) + 6H<sub>2</sub>O(l) ⟶ [Cu(OH<sub>2</sub>)<sub>6</sub>]<sup>2+</sup>(aq)<br/>[Cu(OH<sub>2</sub>)<sub>6</sub>]<sup>2+</sup>(aq) + 4Cl<sup>−</sup>(aq) ⇌ [CuCl<sub>4</sub>]<sup>2−</sup>(aq) + 6H<sub>2</sub>O(l)<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck2_de03",
    "code": "H12-CK2-03",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de03_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào dưới đây là thành phần chính của quặng pyrite?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe<sub>2</sub>O<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Al<sub>2</sub>O<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "FeS<sub>2</sub>",
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
        "explanation": "Đáp án đúng: <b>C</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_ck2_de03_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sự ăn mòn kim loại gây ảnh hưởng, phá huỷ dần máy móc, thiết bị, các phương tiện giao thông vận tải, nhà cửa, cơ sở hạ tầng, … Trong quá trình ăn mòn kim loại, kim loại bị ăn mòn đóng vai trò là chất",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "cho proton",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhận proton",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cho electron",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhận electron",
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
        "id": "hoa12_ck2_de03_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng về kim loại nhóm IA?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Là kim loại mềm, nhẹ, có nhiệt độ nóng chảy và nhiệt độ sôi thấp",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có tính khử mạnh và tăng dần từ lithium đến caesium",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Được bảo quản bằng cách ngâm trong dầu hoả khan hoặc bình khí hiếm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dẫn điện và dẫn nhiệt kém",
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
        "id": "hoa12_ck2_de03_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thạch cao, vôi tôi, vôi sống, đá vôi, apatite…là các nguyên liệu có thành phần chính là các hợp chất của nguyên tố",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Na",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "K",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ca",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Mg",
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
        "id": "hoa12_ck2_de03_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong cốc nước chứa nhiều các ion sau: Ca<sup>2+</sup>, Mg<sup>2+</sup>, Cl<sup>-</sup>, SO<sub>4</sub><sup>2-</sup>. Nước trong cốc trên thuộc loại",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có tính cứng vĩnh cửu",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "không có tính cứng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "có tính cứng tạm thời",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "có tính cứng toàn phần",
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
        "id": "hoa12_ck2_de03_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nhận định sau về tác hại của nước cứng:<br/>(a) làm giảm bọt khi giặt quần áo bằng xà phòng;<br/>(b) làm đường ống dẫn nước đóng cặn, giảm lưu lượng nước;<br/>(c) làm thức ăn lâu chín và giảm mùi vị;<br/>(d) làm nồi hơi phủ cặn, gây tốn nhiên liệu và có nguy cơ gây nổ.<br/>Số nhận định đúng là",
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
        "displayNumber": 6
      },
      {
        "id": "hoa12_ck2_de03_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong bảng tuần hoàn các nguyên tố hoá học, nguyên tố chuyển tiếp dãy thứ nhất được xếp ở",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 4",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 3 và chu kì 4",
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
        "id": "hoa12_ck2_de03_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Từ cấu hình electron của nguyên tử Cu ở trạng thái cơ bản là [Ar]3d<sup>10</sup>4s<sup>1</sup>, xác định được cấu hình electron của ion Cu<sup>2+</sup> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Ar]3d<sup>9</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Ar]3d<sup>8</sup>4s<sup>1</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Ar]3d<sup>10</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Ar]3d<sup>8</sup>",
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
        "id": "hoa12_ck2_de03_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận xét nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sắt thuộc nhóm kim loại nặng và có nhiệt độ nóng chảy cao nhất trong dãy kim loại chuyển tiếp thứ nhất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong số các kim loại chuyển tiếp dãy thứ nhất, chromium có nhiệt độ nóng chảy cao nhất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chromium có độ cứng cao nên được dùng mạ lên các thiết bị để chống mài mòn",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các đơn chất kim loại có khối lượng riêng lớn sẽ có độ cứng cao",
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
        "id": "hoa12_ck2_de03_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phức chất [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>có dạng hình học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "vuông phẳng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tứ diện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "bát diện",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đường thẳng",
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
        "id": "hoa12_ck2_de03_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử trung tâm của các phức chất [PtCl<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub>] và [CuCl<sub>4</sub>]<sup>2-</sup> lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Pt<sup>4+</sup> và Cu<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Pt<sup>2+</sup> và Cu<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cl và NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Pt<sup>2+</sup> và Cu<sup>2+</sup>",
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
        "id": "hoa12_ck2_de03_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Vitamin B12 có vai trò quan trọng đối với cơ thể người là phức chất của cobalt.<br/>(b) Trong công nghiệp có nhiều phản ứng cần chất xúc tác là phức chất, như phức chất của platium, palladium.<br/>(c) Trong hóa học, phức chất được dùng để nhận biết và xác định hàm lượng các ion kim loại chuyển tiếp trong dung dịch.<br/>(d) Phức chất được dùng làm thuốc chữa bệnh ung thư với tên gọi thương phẩm là cisplatin có công thức hoá học là [PtCl<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub>].<br/>Số phát biểu đúng là",
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
        "id": "hoa12_ck2_de03_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Độ tan trong nước của các hydroxide nhóm IIA (g/100 g H<sub>2</sub>O, 20°C) được cho ở bảng sau:<br/>Cho các phát biểu sau về khả năng phản ứng với nước và độ tan của các hydroxide nhóm IIA:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Be không tác dụng với nước và hơi nước do có màng oxide bền bảo vệ bề mặt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mg phản ứng chậm với nước ở nhiệt độ thường và phản ứng nhanh hơn khi đun nóng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Độ tan của các hydroxide kim loại nhóm IIA tăng dần từ Be(OH)<sub>2</sub> đến Ba(OH)<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Độ tan của các hydroxide càng nhỏ thì mức độ phản ứng của các kim loại nhóm IIA với nước càng thuận lợi",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. Độ tan của các hydroxide càng cao thì mức độ phản ứng của các kim loại nhóm IIA với nước càng thuận lợi.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de03_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Khi nhỏ dung dịch HCl đặc vào dung dịch CuSO<sub>4</sub> 0,5% thấy dung dịch CuSO<sub>4</sub> chuyển từ màu xanh sang màu vàng là do xảy ra quá trình: [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup>  [CuCl<sub>4</sub>]<sup>2-</sup>+ 6H<sub>2</sub>O.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phức chất [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> có nguyên tử trung tâm là Cu<sup>2+</sup> và phối tử là H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phức chất [CuCl<sub>4</sub>]<sup>2-</sup>, liên kết giữa nguyên tử trung tâm và phối tử là liên kết ion",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dấu hiệu nhận biết sự tạo thành phức chất [CuCl<sub>4</sub>]<sup>2-</sup>là hoà tan kết tủa và đổi màu dung dịch",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng trên là phản ứng thay thế phối tử của phức chất trong dung dịch",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Trong phức chất [CuCl<sub>4</sub>]<sup>2-</sup>, liên kết giữa nguyên tử trung tâm và phối tử là liên kết cho nhận.<br/>c) Sai. Dấu hiệu nhận biết phức chất là sự chuyển đổi màu của dung dịch.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de03_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các tính chất của kim loại: tính dẻo, tính cứng, tính dẫn điện, ánh kim, khối lượng riêng, tính dẫn nhiệt. Có bao nhiêu tính chất vật lí chung của kim loại trong các tính chất trên?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de03_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Baking soda được điều chế trong phương pháp Solvay chủ yếu theo phương trình hoá học sau:<br/>NaCl(aq) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l) + NH<sub>3</sub>(aq) → NaHCO<sub>3</sub>(s) + NH<sub>4</sub>Cl(aq)<br/>Phương pháp Solvay thường cho hiệu suất khá cao (khoảng 80%). Từ nguyên liệu ban đầu là 30kg CaCO<sub>3</sub>; 7,437 m<sup>3</sup> NH<sub>3</sub> (đkc); 17,55 kg NaCl thu được bao nhiêu kg NaHCO<sub>3</sub> (làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "20,2",
        "explanation": "Đáp án: 20,2.<br/>CaCO<sub>3</sub>  CaO + CO<sub>2</sub><br/>NaCl(aq) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l) + NH<sub>3</sub>(aq) → NaHCO<sub>3</sub>(s) + NH<sub>4</sub>Cl(aq)<br/>0,30,30,3<br/>kg",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de03_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu sau về kim loại chuyển tiếp dãy thứ nhất:<br/>(1) Kim loại chuyển tiếp dãy thức nhất gồm các nguyên tố từ Sc (Z=21) đến Cu (Z=29), chúng là các kim loại nhóm B.<br/>(2) Độ dẫn điện, dẫn nhiệt của Ag cao nhất trong các kim loại chuyển tiếp dãy thứ nhất.<br/>(3) Sắt, manganese là các kim loại có thể tạo ra hợp kim với độ bền cơ học kém nên được dùng trong sản xuất thiết bị quốc phòng, công nghiệp, nông nghiệp, đời sống.<br/>(4) Tất cả các kim loại chuyển tiếp dãy thứ nhất đều là kim loại nặng.<br/>(5) Các kim loại chuyển tiếp dãy thứ nhất có nhiệt độ nóng chảy, khối lượng riêng, độ cứng cao hơn kim loại nhóm IA và nhóm IIA trong cùng chu kì.<br/>Liệt kê các phát biểu đúng theo một dãy số thứ tự tăng dần (ví dụ: 123, 24,…).",
        "images": [],
        "correctAnswer": "15",
        "explanation": "Đáp án: 15.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de03_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Để xác định hàm lượng của muối Fe(II), người ta có thể sử dụng phương pháp chuẩn độ permanganate. Chuẩn độ 10,00 mL dung dịch FeSO<sub>4</sub> và H<sub>2</sub>SO<sub>4</sub> loãng bằng dung dịch KMnO<sub>4</sub> 0,02M. Kết quả thu được như sau:<br/>Nồng độ mol phù hợp nhất của FeSO<sub>4</sub> trong dung dịch chuẩn độ là x.10<sup>-2</sup> mol/L. Giá trị của x là bao nhiêu?",
        "images": [],
        "correctAnswer": "5,14",
        "explanation": "Đáp án: 5,14.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de03_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Cho bảng sau về biến thiên enthalpy và nhiệt độ phân hủy của phản ứng nhiệt phân muối carbonate của kim loại nhóm IIA:<br/>Dựa vào bảng trên, nhận xét về xu hướng biến đổi độ bền nhiệt của muối carbonate từ MgCO<sub>3</sub> đến BaCO<sub>3</sub>. Trình bày phương trình hoá học sự phân huỷ nhiệt của muối carbonate nhóm IIA, lấy ví dụ cụ thể với CaCO<sub>3</sub>.<br/>b) Dựa vào tính khử của kim loại và độ tan của các hydroxide (Ca(OH)<sub>2</sub> là 0,173 g/100g H<sub>2</sub>O và Ba(OH)<sub>2</sub> là 3,89 g/100g H<sub>2</sub>O), dự đoán calcium hay barium phản ứng với nước mạnh hơn?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de03_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Phức chất aqua có dạng hình học bát diện được hình thành khi cho CrCl<sub>3</sub> vào nước. Viết phương trình hoá học của quá trình tạo phức chất trên.<br/>b) Khi cho một lượng dư NH<sub>3</sub> vào dung dịch muối CoCl<sub>2</sub>, thấy màu sắc của dung dịch bị thay đổi. Hiện tượng xảy ra là do toàn bộ các phối tử H<sub>2</sub>O trong phức chất qua đã bị thay thế bởi các phối tử NH<sub>3</sub>, tạo thành phức chất mới có dạng bát diện. Viết phương trình hóa học của phản ứng thế phối tử.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck2_de03_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Theo Quy chuẩn Việt Nam về nước sinh hoạt (QCVN 01-1-2018/BYT):<br/>- Tổng nồng độ ion iron (sắt) trong nước uống ≤ 0,3 mg/L.<br/>- Tổng nồng độ ion iron (sắt) trong nước sinh hoạt (tắm, giặt, rửa) ≤ 0,5 mg/L.<br/>Nước suối ở những vùng nằm trên nền địa chất có nhiều quặng sắt thường có nồng độ ion sắt rất cao.<br/>Chuẩn độ 20mL một mẫu nước suối bằng dung dịch KMnO<sub>4</sub> 0,01M trong môi trường H<sub>2</sub>SO<sub>4</sub> đến khi dung dịch chuyển sang màu hồng (bền trong 20 giây) thì thể tích dung dịch KMnO<sub>4</sub> đã dùng là 4 mL. Hỏi nồng độ Fe<sup>2+</sup> (mg/L) trong mẫu nước suối đã này vượt gấp bao nhiêu lần so với tổng nồng độ ion sắt tối đa cho phép đối với nước sinh hoạt theo quy chuẩn của Bộ Y tế Việt Nam?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/><br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck2_de04",
    "code": "H12-CK2-04",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de04_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Những tính chất vật lí chung của kim loại (dẫn điện, dẫn nhiệt, dẻo, ánh kim) gây nên bởi",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "các electron tự do trong mạng tinh thể kim loại",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "kiểu cấu tạo mạng tinh thể kim loại",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "khối lượng riêng của kim loại",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tính chất của kim loại",
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
        "id": "hoa12_ck2_de04_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào dưới đây là thành phần chính của quặng hematite?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Iron(II) oxide",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Iron(III) oxide",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Iron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Iron(II) sulfide",
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
        "id": "hoa12_ck2_de04_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho giá trị thế điện cực chuẩn của một số cặp oxi hóa – khử như sau:<br/>Ở bảng trên, từ trái qua phải tính khử của các kim loại giảm dần. Trong các giá trị sau đây, giá trị của x thỏa mãn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-1,676",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "0,340",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "-0,440",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "-3,040",
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
        "id": "hoa12_ck2_de04_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt độ nóng chảy của các kim loại nhóm IA từ Li đến Cs biến đổi như thế nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tăng dần",
            "isCorrect": false
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
        "id": "hoa12_ck2_de04_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước cứng là nước chứa nhiều cation Ca<sup>2+</sup>, Mg<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong công nghiệp, nhôm được điều chế bằng phương pháp thủy luyện",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sodium hydrogencarbonate (NaHCO<sub>3</sub>) còn được gọi là baking soda",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi đốt hợp chất của sodium trên ngọn lửa đèn khí sẽ thấy ngọn lửa màu vàng",
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
        "id": "hoa12_ck2_de04_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dãy kim loại chuyển tiếp thứ nhất, kim loại có độ cứng cao nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ti",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fe",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cr",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cu",
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
        "id": "hoa12_ck2_de04_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử trung tâm của các phức chất [PtCl<sub>4</sub>]<sup>2–</sup> và [Fe(CO)<sub>5</sub>] lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Pt<sup>4+</sup> và Fe<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Pt<sup>2+</sup> và Fe<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cl và CO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Pt<sup>2+</sup> và Fe",
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
        "id": "hoa12_ck2_de04_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phức chất nào sau đây có màu vàng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[CuCl<sub>4</sub>]<sup>2–</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Cu(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)<sub>2</sub>]",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Cu(OH)<sub>2</sub>(H<sub>2</sub>O)<sub>4</sub>]",
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
        "id": "hoa12_ck2_de04_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các kim loại nhóm IA có độ cứng thấp là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "độ bền liên kết kim loại yếu",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số electron hóa trị nhỏ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "khối lượng nguyên tử lớn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "bán kính nguyên tử nhỏ",
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
        "id": "hoa12_ck2_de04_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phức chất [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>có dạng hình học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "vuông phẳng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tứ diện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "bát diện",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đường thẳng",
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
        "id": "hoa12_ck2_de04_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tiến hành thí nghiệm theo các bước sau:<br/>– Bước 1: Chuẩn bị hai ống nghiệm, ống (1) chứa 2 mL dung dịch CaCl<sub>2</sub>1 M, ống (2) chứa 2 mL dung dịch BaCl<sub>2</sub> 1 M.<br/><sup>–</sup> Bước 2: Nhỏ đồng thời vào mỗi ống nghiệm 3 giọt dung dịch CuSO<sub>4</sub> 1 M, thấy ống (1) xuất hiện kết tủa chậm hơn và ít hơn so với ống (2).<br/>Nhận định nào sau đây đúng khi so sánh CaSO<sub>4</sub> với BaSO<sub>4</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khó nhiệt phân hơn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khó thuỷ phân hơn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dễ kết tủa hơn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dễ tan hơn",
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
        "id": "hoa12_ck2_de04_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tiến hành các thí nghiệm xác định hàm lượng iron (II) sulfate bằng phương pháp chuẩn độ thuốc tím trong môi trường sulfuric acid loãng, dư. Nhận định nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thuốc tím phải cho vào burette, không được cho vào bình tam giác",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cần sử dụng chất chỉ thị để nhận biết điểm kết thúc chuẩn độ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Iron(II) sulfate là chất oxi hoá, thuốc tím là chất khử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phải đun nóng dung dịch trong bình tam giác trước khi chuẩn độ",
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
        "id": "hoa12_ck2_de04_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Ăn mòn kim loại là sự phá hủy kim loại hoặc hợp kim dưới tác dụng của các chất trong môi trường, trong đó kim loại bị oxi hóa.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các thiết bị máy móc bằng sắt tiếp xúc với hơi nước ở nhiệt độ cao có khả năng bị ăn mòn hóa học",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ngâm một lá nhôm trong dung dịch NaOH, xảy ra hiện tượng ăn mòn hóa học",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong quá trình ăn mòn, kim loại bị oxi hoá thành cation của nó",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự ăn mòn vỏ tàu trong nước biển là ăn mòn hóa học",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. Vì sự ăn mòn vỏ tàu trong nước biển là ăn mòn điện hóa học",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de04_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Muối CrCl3 khan có màu tím. Hòa tan một lượng muối này vào nước, thu được dung dịch màu xanh lá cây (có chứa phức chất X có công thức [Cr(OH2)6]<sup>3+</sup>). Nhúng mảnh giấy lọc vào dung dịch này, sấy khô, thu được mảnh giấy có màu tím (giấy Y). Giấy Y được sử dụng làm giấy chỉ thị để phát hiện nước.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phối tử trong phức chất X là H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi nhỏ giọt nước lên giấy Y, giấy Y chuyển màu xanh lá cây",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phức chất X, liên kết giữa nguyên tử trung tâm và phối tử là liên kết ion",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CrCl3 là hợp chất của kim loại chuyển tiếp",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Sai. Liên kết giữa nguyên tử trung tâm và phối tử là liên kết cho nhận.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de04_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho nguyên tử Fe có Z = 26, cấu hình electron của Fe<sup>3</sup><sup>+</sup>có dạng:[Ar]3d<sup>x</sup>. Giá trị của x là bao nhiêu?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de04_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu sau:<br/>(a) Điện phân dung dịch NaCl (điện cực trơ), thu được Na tại cathode.<br/>(b) Có thể dùng Na<sub>2</sub>CO<sub>3</sub> làm mất tính cứng của nước cứng.<br/>(c) Baking soda có thành phần chủ yếu là NaHCO<sub>3</sub>.<br/>(d) Dung dịch Na<sub>2</sub>CO<sub>3</sub> có môi trường trung tính.<br/>(e) Điện phân dung dịch NaCl không có màng ngăn thu được NaOH.<br/>Có bao nhiêu phát biểu đúng trong các phát biểu trên?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de04_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phức chất: [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>, [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>, [Zn(CN)<sub>4</sub>]<sup>2–</sup>, [Cd(CN)<sub>4</sub>]<sup>2–</sup>, [Mo(CO)<sub>6</sub>]. Số phức chất có dạng hình học bát diện là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de04_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Kẽm (Zn) là kim loại thông thường được dùng phổ biến để mạ bảo vệ bề mặt sắt thép chống gỉ sét, sản xuất pin,. Trong công nghiệp, kẽm chủ yếu được sản xuất từ quặng zinc blende (thành phần chính là ZnS) theo sơ đồ phản ứng sau: .<br/>Từ 2,425 tấn zinc blende (chứa 80% ZnS, còn lại tạp chất không chứa kẽm), trải qua toàn bộ quá trình trên thì sản xuất được bao nhiêu tấn kẽm, biết hiệu suất chung của cả quá trình là 90%.",
        "images": [],
        "correctAnswer": "1,17",
        "explanation": "Đáp án: 1,17.<br/>tấn.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de04_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Hãy cho biết liên kết kim loại có đặc điểm gì giống và khác với liên kết ion.<br/>b) Khi để trong không khí, bề mặt của lá nhôm bị oxi hóa tạo lớp phủ oxide. Trong trường hợp này lá nhôm có trở thành hợp kim không? Giải thích.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Giống nhau: Đều hình thành do lực hút tĩnh điện.<br/>Khác nhau:<br/>+ Liên kết kim loại hình thành do lực hút tĩnh điện giữa các electron hóa trị tự do với các ion dương kim loại ở các nút mạng<br/>+ Liên kết ion loại hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu.<br/>b) Hợp kim là vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại khác hoặc phi kim. Như vậy, khi để trong không khí, bề mặt của lá nhôm bị oxi hoá tạo lớp phủ oxide. Trong trường hợp này lá nhôm không trở thành hợp kim.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de04_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Độ tan trong nước của các hydroxide nhóm IIA ở 20 °C cho trong bảng sau:<br/>Nêu xu hướng biến đổi độ tan của các hydroxide nhóm IIA. Trên cơ sở đó, dự đoán xu hướng phản ứng với nước của kim loại nhóm IIA từ Mg đến Ba.<br/>b) Một mẫu nước thải của nhà máy sản xuất có pH = 3. Để thải ra ngoài môi trường thì cần phải tăng pH lên từ 5,8 đến 8,6 (theo đúng qui định), nhà máy phải dùng vôi sống thải vào nước thải. Để nâng pH của 3 m³ nước thải từ 3 lên 7 cần dùng m gam vôi sống. Tính giá trị m. (Bỏ qua sự thủy phân của các muối)",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Từ Mg đến Ba: Độ tan của M(OH)<sub>2</sub>: tăng dần<br/>Khả năng phản ứng với nước của M: tăng dần<br/>b) pH = 3  [H<sup>+</sup>] = 0,001 M<br/>Để có pH = 7 thì cần cung cấp<br/>CaO + H<sub>2</sub>O  Ca(OH)<sub>2</sub>  Ca<sup>2+</sup> + 2OH<sup>-</sup>",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck2_de04_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Một mẫu chất có thành phần chính là muối Mohr. Muối Mohr có công thức hoá học là (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.FeSO<sub>4</sub>.6H<sub>2</sub>O. Hoà tan 0,2151 g mẫu chất trong dung dịch sulfuric acid loãng dư, thu được dung dịch có chứa cation Fe<sup>2+</sup>. Lượng Fe<sup>2+</sup>trong dung dịch này phản ứng vừa đủ với 5,40 mL dung dịch thuốc tím nồng độ 0,020 M (Các chất và ion khác trong dung dịch không phản ứng với thuốc tím).<br/>a) Tính số mg sắt có trong mẫu chất.<br/>b) Tính phần trăm khối lượng của (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.FeSO<sub>4</sub>.6H<sub>2</sub>O trong mẫu chất.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Phương trình hóa học:<br/>5Fe<sup>2+</sup>(aq) + MnO<sub>4</sub><sup>–</sup>(aq) + 8H<sup>+</sup>(aq)  5Fe<sup>3+</sup>(aq) + Mn<sup>2+</sup>(aq) + 4H₂O(1)<br/>Ta có:  = 0,02 5,4 10<sup>–3</sup> = 1,08.10<sup>–4</sup> (mol)<br/>Theo phương trình:  = 5 = 51,0810<sup>–4</sup> = 5,4.10<sup>–4</sup> (mol)<br/>Khối lượng sắt có trong mẫu chất là: 56 5,4.10<sup>–4</sup> = 0,03024 (g) = 30,24 (mg)<br/>b) Ta có:  5,4.10<sup>–4</sup> (mol)<br/>⇒  3925,4.10<sup>–4</sup> = 0,21168 (g)<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck2_de05",
    "code": "H12-CK2-05",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de05_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tinh thể kim loại, các ion dương kim loại nằm ở các nút mạng tinh thể và các electron hóa trị chuyển động",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "theo quỹ đạo xác định",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "xung quanh một vị trí xác định",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tự do xung quanh",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "trong một khu vực không gian nhất định",
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
        "id": "hoa12_ck2_de05_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại kẽm được sản xuất trong công nghiệp từ quặng sphalerite (có thành phần chính là ZnS) theo sơ đồ: ZnS  ZnO  Zn. Phương pháp điều chế kim loại được sử dụng trong quá trình sản xuất Zn theo sơ đồ trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "thủy luyện",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhiệt luyện",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "điện phân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "kết tinh",
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
        "id": "hoa12_ck2_de05_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Duralumin là vật liệu kim loại chứa nguyên tố kim loại cơ bản nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Aluminium",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Zinc",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Iron",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nickel",
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
        "id": "hoa12_ck2_de05_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nhiệt độ nóng chảy giảm dần từ Li đến Cs",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khả năng phản ứng với nước tăng dần từ Li đến Cs",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kim loại nhóm IA tác dụng với nước tạo thành dung dịch kiềm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Li được bảo quản bằng cách ngâm chìm trong dầu hỏa",
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
        "id": "hoa12_ck2_de05_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thí nghiệm nào sau đây không thu được kết tủa?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho dung dịch NaOH vào dung dịch MgCl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cho dung dịch K<sub>2</sub>SO<sub>4</sub>vào dung dịch BaCl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cho dung dịch K<sub>2</sub>CO<sub>3</sub>vào dung dịch CaCl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho dung dịch KNO<sub>3</sub>vào dung dịch SrCl<sub>2</sub>",
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
        "id": "hoa12_ck2_de05_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố kim loại có trong hemoglobin làm nhiệm vụ vận chuyển oxygen, duy trì sự sống là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sodium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "magnesium",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "aluminium",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "iron",
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
        "id": "hoa12_ck2_de05_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Số lượng phối tử trong phức chất [PtCl<sub>4</sub>(NH<sub>3</sub>)<sub>2</sub>] là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "6",
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
            "text": "7",
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
        "id": "hoa12_ck2_de05_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phức chất cisplatin được dùng làm thuốc chữa bệnh ung thư có cấu tạo như hình bên. Phát biểu nào sau đây về cisplatin là sai?",
        "images": [
          "/assets/hoa12/final2/h12_ck2_de5_image4.png",
          "/assets/hoa12/final2/h12_ck2_de5_hdphoto1.wdp"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điện tích của cisplatin là 0",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử trung tâm là Pt",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cisplatin có dạng hình học là vuông phẳng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cl<sup>–</sup> và NH<sub>3</sub> là các phối tử",
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
        "id": "hoa12_ck2_de05_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các nguyên tử kim loại kiềm có 1 electron lớp ngoài cùng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong tự nhiên, các kim loại kiềm tồn tại ở dạng đơn chất và hợp chất",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Từ Li đến Cs, bán kính nguyên tử tăng dần, độ âm điện giảm dần",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thế điện cực chuẩn của các kim loại kiềm đều nhỏ hơn 0",
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
        "id": "hoa12_ck2_de05_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phức chất X có nguyên tử trung tâm Zn<sup>2+</sup>, phối tử là NH<sub>3</sub>. Biết X có dạng hình học là tứ diện. Công thức của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Zn(NH<sub>3</sub>)<sub>6</sub>]",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2–</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Zn(NH<sub>3</sub>)<sub>2</sub>]<sup>2+</sup>",
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
        "id": "hoa12_ck2_de05_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tính khử của magnesium mạnh hơn của sodium",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dùng khí hydrogen khử MgO ở nhiệt độ cao để điều chế magnesium",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong tự nhiên, magnesium tồn tại cả dạng đơn chất và hợp chất",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở điều kiện thường, magnesium khử nước chậm tạo khí hydrogen",
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
        "id": "hoa12_ck2_de05_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chuẩn độ 10,00 mL dung dịch FeSO<sub>4</sub> và H<sub>2</sub>SO<sub>4</sub> loãng bằng dung dịch KMnO<sub>4</sub> 0,010 M. Kết quả thu được như sau:<br/>Nồng độ mol của FeSO<sub>4</sub> trong dung dịch chuẩn độ gần nhất với giá trị nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4,263.10<sup>–2</sup> M",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4,265.10<sup>–2</sup> M",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4,261.10<sup>–2</sup> M",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4,267.10<sup>–2</sup> M",
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
        "id": "hoa12_ck2_de05_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm theo các bước sau:- Bước 1: Lấy vào ống nghiệm thứ nhất 1 mL dung dịch H<sub>2</sub>SO<sub>4</sub> đặc (98%), ống nghiệm thứ hai và ba 1 mL dung dịch H<sub>2</sub>SO<sub>4</sub> 10%.- Bước 2: Cho vào mỗi ống nghiệm một đinh sắt sạch, đun nhẹ ống nghiệm thứ nhất.<br/>- Bước 3: Cho vào ống nghiệm thứ ba 1 mL dung dịch CuSO<sub>4</sub>1 M.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả 3 ống nghiệm đều có khí thoát ra, dung dịch chuyển màu xanh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở ống nghiệm thứ nhất, dung dịch chuyển sang màu vàng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở ống nghiệm thứ ba, sắt bị ăn mòn hóa học và ăn mòn điện hóa",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cần dùng bông tẩm dung dịch NaOH đậy miệng cả 3 ống nghiệm",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Khí thoát ra ở các ống khác nhau (SO<sub>2</sub> ở ống 1, H<sub>2</sub> ở ống 2 và 3). Dung dịch ở ống 1 chuyển màu vàng nâu (của Fe<sup>3+</sup>), ống 2 chuyển màu xanh nhạt (của Fe<sup>2+</sup>), ống 3 ban đầu có màu xanh của Cu<sup>2+</sup> nhưng sau đó nhạt dần.<br/>b) Đúng. Ở ống thứ nhất, Fe phản ứng với H<sub>2</sub>SO<sub>4</sub> đặc, nóng tạo ra muối sắt (III) sulfate Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>. Dung dịch muối Fe<sup>3+</sup> có màu vàng (hoặc vàng nâu).<br/>c) Đúng. Ở ống thứ ba, Fe vừa tác dụng trực tiếp với acid/muối (ăn mòn hóa học), vừa bị ăn mòn điện hóa do hình thành cặp điện cực Fe-Cu (Cu sinh ra bám vào đinh sắt) tiếp xúc với dung dịch điện li.<br/>d) Sai. Chỉ có ống nghiệm thứ nhất sinh ra khí SO<sub>2</sub> là khí độc, gây ô nhiễm nên mới bắt buộc dùng bông tẩm NaOH để hấp thụ (SO<sub>2</sub> + 2NaOH  Na<sub>2</sub>SO<sub>3</sub> + H<sub>2</sub>O). Ống 2 và 3 sinh ra khí H<sub>2</sub> không độc và NaOH cũng không hấp thụ H<sub>2</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de05_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong dung dịch, ion Co<sup>2+</sup> tạo thành phức chất aqua dạng hình học bát diện có công thức [Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi cho lượng dư NH<sub>3</sub> vào dung dịch muối CoCl<sub>2</sub>, thấy màu sắc của dung dịch bị thay đổi",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ion Co²⁺ có màu hồng, phức chất [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup> có màu vàng nâu",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Inox 18/10 có thành phần hóa học gồm 18% chromimum, 10% nickel, tối đa 0,08% carbon, còn lại là iron. Khối lượng iron (tính theo kg) tối đa trong 1,00 tấn inox 18/10 là 719,2 kg",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng. Dung dịch muối CoCl<sub>2</sub> ban đầu (chứa phức aqua) có màu hồng. Khi cho dư NH<sub>3</sub> vào, các phân tử NH<sub>3</sub> sẽ thế chỗ các phân tử H<sub>2</sub>O tạo thành phức mới [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>2</sup><sup>+</sup> có màu vàng nâu. Do đó màu sắc dung dịch bị thay đổi.<br/>c) Đúng.<br/>d) Sai. Khối lượng của Fe là 1000.(100 – 18 – 10 – 0,08)% = 719,2 kg (tối thiểu vì lượng C sử dụng tối đa nên khối lượng sắt có thể tăng lên).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de05_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Titanium (Ti) là kim loại chuyển tiếp dãy thứ nhất và có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>2</sup>4s<sup>2</sup>. Trong hợp chất, số oxi hóa cao nhất của Ti là +a. Giá trị của a là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de05_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu phát biểu đúng trong các phát biểu sau?<br/>(a) Trong hợp chất, các kim loại nhóm IIA đều có số oxi hóa +2.<br/>(b) Các kim loại nhóm IIA đều có mạng tinh thể lập phương tâm khối.<br/>(c) Các hydroxide của kim loại nhóm IIA đều dễ tan trong nước.<br/>(d) Trong nhóm IIA, tính khử của các kim loại giảm dần từ Be đến Ba.",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de05_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Phức chất X có công thức hóa học [Pt(NH<sub>3</sub>)<sub>4</sub>][PtCl<sub>4</sub>]. Phân tử X có bao nhiêu liên kết sigma?",
        "images": [],
        "correctAnswer": "20",
        "explanation": "Đáp án: 20.<br/>Mỗi phối tử NH<sub>3</sub> có 3 liên kết sigma. Liên kết giữa Pt với phối tử  NH<sub>3</sub>, Cl<sup>−</sup> chứa 1 liên kết sigma. Tổng là 4 + 3.4 + 4 = 20",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de05_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Một mẫu quặng bauxite có chứa 40% Al<sub>2</sub>O<sub>3</sub>. Để sản xuất 100 km một loại dây cáp nhôm hạ thế người ta sử dụng toàn bộ lượng nhôm điều chế được từ m tấn quặng bauxite bằng phương pháp điện phân nóng chảy Al<sub>2</sub>O<sub>3</sub>. Biết rằng khối lượng nhôm trong 1 km dây cáp là 1074 kg và hiệu suất của quá trình điều chế nhôm là 90%. Tính m theo đơn vị tấn (kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "564",
        "explanation": "Đáp án: 564.<br/>m<sub>Al (200 km cáp)</sub> = 100.1074 = 107400 kg = 107,4 tấn<br/>PTHH:             2Al<sub>2</sub>O<sub>3</sub>                 4Al     +    3O<sub>2</sub><br/>                        204 g  →                          108 g<br/>107,4 tấn<br/>→ m<sub>bauxite</sub> =",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de05_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Viết cấu hình electron nguyên tử và xác định số electron lớp ngoài cùng của nguyên tố Mg (Z = 12).<br/>b) Đồng thau là hợp kim của Cu và Zn (các tạp chất không đáng kể). Để xác định hàm lượng Cu trong một loại đồng thau, người ta cho 10 g mẫu đồng thau vào dung dịch H<sub>2</sub>SO<sub>4</sub> loãng, dư; sau khi các phản ứng xảy ra hoàn toàn, lọc lấy phần chất rắn làm khô, cân lại được 6,5 g chất rắn. Hàm lượng Cu trong loại đồng thau trên bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>: 2e lớp ngoài cùng<br/>b) Zn tác dụng với H<sub>2</sub>SO<sub>4</sub> loãng; 6,5 g chất rắn còn lại sau phản ứng là Cu<br/>→ %mCu = 6,5100/10 = 65%",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de05_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Vì sao khi có sự gia tăng nồng độ của carbon dioxide trong nước biển thì các rạn san hô và núi đá vôi có thể bị phá hủy, xói mòn?<br/>b) Dựa vào độ cứng của nước (được xác định bằng tổng hàm lượng Ca<sup>2+</sup> và Mg<sup>2+</sup> quy đổi về khối lượng CaCO<sub>3</sub>, có trong 1 L nước), nước được phân thành 4 mức:<br/>Một mẫu nước X có chứa các ion 0,001M, 0,003M, Cl<sup>–</sup> 0,002M, Mg<sup>2+</sup> và Ca<sup>2+</sup>. Tính độ cứng của X theo đơn vị mg CaCO<sub>3</sub>/L và cho biết mẫu nước X thuộc mức nào theo tiêu chuẩn trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Các rạn san hô và núi đá vôi có thành phần chính là CaCO<sub>3</sub>, CaCO<sub>3</sub> phản ứng được với nước có carbon dioxide hòa tan theo phương trình hóa học:<br/>CaCO<sub>3</sub>(s) + H<sub>2</sub>O(l) + CO<sub>2</sub>(aq)  Ca(HCO<sub>3</sub>)<sub>2</sub>(aq).<br/>Khi tăng nồng độ của carbon dioxide trong nước biển thì cân bằng trên chuyển dịch theo chiều làm giảm nồng độ của carbon dioxide, tức chiều của phản ứng thuận, nên lượng CaCO<sub>3</sub>bị giảm đi  các rạn san hô và núi đá vôi bị phá hủy, xói mòn.<br/>b) Bảo toàn điện tích:<br/>Độ cứng của nước (quy đổi về khối lượng CaCO<sub>3</sub>): (mg CaCO<sub>3</sub>/L): thuộc mức IV, nước rất cứng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck2_de05_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Có nên sử dụng các kim loại chuyển tiếp dãy thứ nhất làm dây chảy trong cầu chì không? Giải thích.<br/>b) Việc tăng nồng độ Cl<sup>−</sup>(aq) ảnh hưởng như thế nào đến sự đổi màu của dung dịch trong phản ứng sau:<br/>[Cu(OH<sub>2</sub>)<sub>6</sub>]<sup>2+</sup>(aq) + 4Cl<sup>−</sup>(aq)  [CuCl<sub>4</sub>]<sup>2−</sup>(aq) + 6H<sub>2</sub>O(l)<br/>Màu xanh           Màu vàng",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Không nên sử dụng các kim loại chuyển tiếp dãy thứ nhất làm dây chảy trong cầu chì. Vì các kim loại chuyển tiếp dãy thứ nhất có nhiệt độ nóng chảy cao, không thể kịp thời ngắt mạch khi chập cháy điện, gây hiện tượng nổ thiết bị.<br/>b) Khi tăng nồng độ Cl<sup>−</sup>(aq), cân bằng chuyển dịch theo chiều làm giảm nồng độ Cl<sup>−</sup>(aq), tức là chiều tạo phức [CuCl<sub>4</sub>]<sup>2−</sup>(aq) làm cho màu vàng của dung dịch đậm hơn.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck2_de06",
    "code": "H12-CK2-06",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de06_p1_q1",
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
        "id": "hoa12_ck2_de06_p1_q2",
        "number": 2,
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
        "displayNumber": 2
      },
      {
        "id": "hoa12_ck2_de06_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thép là hợp kim có thành phần chính là",
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
        "displayNumber": 3
      },
      {
        "id": "hoa12_ck2_de06_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để bảo quản Na, K, không thể đặt chúng trong",
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
            "text": "ethanol",
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
        "id": "hoa12_ck2_de06_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch của chất nào sau đây có thể hòa tan được kết tủa CaCO<sub>3</sub>?",
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
            "text": "CH<sub>3</sub>COOH",
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
        "displayNumber": 5
      },
      {
        "id": "hoa12_ck2_de06_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vanadium (V) có nhiều oxide có hoạt tính xúc tác như VO<sub>2</sub>, V<sub>2</sub>O<sub>3</sub>, V<sub>2</sub>O<sub>5</sub>, … Cấu hình electron của V là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup> 3s<sup>2</sup>3p<sup>6</sup>3d<sup>3</sup>4s<sup>2</sup>. Nhận xét nào sau đây đúng về vanadium?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tử có 3 lớp electron",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thuộc nhóm V",
            "isCorrect": true
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
            "text": "Nguyên tử có 2 electron hóa trị",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số oxi hóa lớn nhất là +4",
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
        "id": "hoa12_ck2_de06_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mô tả nào không đúng về phức chất [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có điện tích là +3",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nguyên tử trung tâm là Co",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phối tử là NH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số phối tử là 6",
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
        "id": "hoa12_ck2_de06_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hemoglobin trong máu gồm ion M<sup>2+</sup> liên kết với popyrin và một phân tử protein có tên globin tạo thành phức chất bát diện, phức này có nhiệm vụ vận chuyển oxygen từ phổi đến các mô và CO<sub>2</sub> từ các mô về phổi. M là kim loại nào sau đây?",
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
            "text": "Pb",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Co",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ni",
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
        "id": "hoa12_ck2_de06_p1_q9",
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
        "id": "hoa12_ck2_de06_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phức chất [Cr(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub>, ion phức có dạng hình học gì?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Vuông phẳng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lập phương",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Bát diện",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tứ diện",
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
        "id": "hoa12_ck2_de06_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đun sôi nước cứng chỉ làm mềm được nước có tính cứng tạm thời",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch Na<sub>2</sub>CO<sub>3</sub> làm mềm được nước có tính cứng tạm thời và nước có tính cứng vĩnh cửu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch NaOH làm mềm được nước có tính cứng vĩnh cửu",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho dung dịch Ca(OH)<sub>2</sub> vừa đủ làm mềm được nước có tính cứng tạm thời",
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
        "id": "hoa12_ck2_de06_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để kiểm tra sự có mặt của cation Cu<sup>2+</sup> hoặc Fe<sup>3+</sup> trong dung dịch người ta tiến hành các thí nghiệm sau:<br/>– Thí nghiệm 1: Cho khoảng 4 – 6 giọt dung dịch NaOH 1 M vào ống nghiệm chứa khoảng 1 mL dung dịch CuSO<sub>4</sub>1M.<br/>– Thí nghiệm 2: Cho khoảng 4 – 6 giọt dung dịch NaOH 1M vào ống nghiệm chứa khoảng 1 mL dung dịch FeCl<sub>3</sub>1 M.<br/>Nhận xét nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở cả 2 thí nghiệm đều xuất hiện kết tủa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở thí nghiệm thứ nhất xuất hiện kết tủa màu xanh lam",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở thí nghiệm thứ hai xuất hiện kết tủa màu trắng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có thể thay thế dung dịch NaOH bằng dung dịch KOH",
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
        "id": "hoa12_ck2_de06_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Kim loại được sử dụng phổ biến trong đời sống và sản xuất.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Osmium (Os) khối lượng riêng lớn nên thường dùng làm dây tóc bóng đèn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mercury (Hg) phản ứng với sulfur (S) ở nhiệt độ thường nên có thể dùng bột S để xử lí Hg rơi vãi",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Những kim loại có thế điện cực chuẩn nhỏ hơn –0,414 V có thể đẩy được H<sub>2</sub> ra khỏi nước",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhúng thanh Cu vào dung dịch FeCl<sub>3</sub> xảy ra hiện tượng ặn mòn điện hóa học",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Osmium (Os) là kim loại có khối lượng riêng lớn nhất, nhưng kim loại được dùng làm dây tóc bóng đèn là Wolfram (W) vì nó có nhiệt độ nóng chảy rất cao (khoảng 3422°C).<br/>b) Đúng. Thủy ngân (Hg) phản ứng với bột lưu huỳnh (S) ngay ở nhiệt độ thường tạo thành muối thủy ngân(II) sulfide (HgS) ở trạng thái rắn, không độc và dễ thu gom.<br/>c) Đúng. Theo kiến thức Hóa học chương trình mới, nước ở pH = 7 có thế điện cực khử là –0,414 V. Do đó, các kim loại có thế điện cực chuẩn nhỏ hơn giá trị này có thể khử được H<sub>2</sub>O giải phóng khí H<sub>2</sub>.<br/>d) Sai. Khi nhúng thanh Cu vào dung dịch FeCl<sub>3</sub>, chỉ xảy ra ăn mòn hóa học, không xảy ra ăn mòn điện hóa vì phản ứng (Cu + 2Fe<sup>3+</sup>  Cu<sup>2+</sup> + 2Fe<sup>2+</sup>) không sinh ra kim loại mới để tạo thành điện cực thứ hai.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de06_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cisplatin là một hợp chất hóa học có công thức [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]. Đây là một chất được sử dụng như một loại thuốc hóa trị liệu để điều trị một số bệnh ung thư.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nguyên tử trung tâm là Pt<sup>2+</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phức chất cisplatin không mang điện tích",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các phối tử của phức chất cisplatin là NH<sub>3</sub> và Cl<sup>–</sup>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cisplatin có dạng hình học bát diện",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. Các phối tử NH<sub>3</sub> không mang điện (0), ion Cl<sup>-</sup> mang điện tích (-1). Phức chất tổng thể trung hòa về điện (0). Vậy nguyên tử trung tâm là ion Pt<sup>2+</sup>.<br/>b) Đúng. Như đã chứng minh ở trên, tổng điện tích của phức chất là 0 nên phức chất này không mang điện tích.<br/>c) Đúng. Trong phức chất này, ion trung tâm Pt<sup>2+</sup> liên kết với các phối tử là phân tử NH<sub>3</sub> và ion Cl<sup>-</sup>.<br/>d) Sai. Phức chất của Pt2+ với số phối trí 4 thường có dạng hình học vuông phẳng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de06_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Copper là nguyên tố thứ 29 trong bảng tuần hoàn các nguyên tố hóa học. Copper là một kim loại có tính dẻo, khả năng dẫn nhiệt và dẫn điện tốt. Số electron lớp ngoài cùng của Cu bằng bao nhiêu?<br/>Đáp án:<br/>Cu: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>10</sup>4s<sup>1</sup>",
        "images": [],
        "correctAnswer": "1",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de06_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu sau:<br/>(a) Các nguyên tố nhóm IA là những kim loại hoạt động hóa học mạnh nên không tồn tại dạng đơn chất.<br/>(b) Các nguyên tố nhóm IA có độ âm điện lớn nên dễ dàng kết hợp với các nguyên tố khác.<br/>(c) Kim loại kiềm có tính khử mạnh nhất trong mỗi chu kì.<br/>(d) Trong nhóm IA, Cs có độ cứng nhỏ nhất.<br/>(e) Thứ tự giảm dần nhiệt độ nóng chảy của kim loại kiềm là Li, Na, K, Rb, Cs.<br/>Số phát biểu đúng là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de06_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phức chất sau: [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, [CoF<sub>6</sub>]<sup>3–</sup>, [Ni(CO)<sub>4</sub>], [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]. Số phức chất có dạng hình học bát diện là bao nhiêu?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de06_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu sau:<br/>(a) Việc cắt, băm nhỏ phế liệu nhôm trước khi nung chảy để giảm hiệu suất nung.<br/>(b) Nhôm tái chế ảnh hưởng sức khỏe nếu chế tạo dụng cụ nhà bếp, y tế.<br/>(c) Sắt là kim loại được tái chế phổ biến trên thế giới và có thể tái chế nhiều lần.<br/>(d) Tái chế đồng giúp tiết kiệm một lượng lớn năng lượng so với sản xuất kim loại từ quặng.<br/>(e) Xỉ lỏng trong tái chế nhôm được dùng để chế tạo các vật dụng như xoong, nồi,…<br/>Số phát biểu đúng là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de06_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Viết cấu hình electron của nguyên tử Cr (Z = 24). Cho biết số thứ tự chu kì và nhóm của Cr trong bảng tuần hoàn.<br/>b) So sánh tính dẫn điện, dẫn nhiệt và độ cứng của hợp kim Au – Cu (8% – 12% Cu) so với kim loại Au nguyên chất.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Cr: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>5</sup>4s<sup>1</sup><br/>Chu kì 4, nhóm VIB<br/>b) Tính dẫn điện, dẫn nhiệt của hợp kim Au – Cu (8% – 12% Cu) nhỏ hơn kim loại Au nguyên chất.<br/>– Độ cứng của hợp kim Au – Cu (8% – 12% Cu) lớn hơn kim loại Au nguyên chất.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de06_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Khi đốt nóng trong không khí, Ca, Ba phản ứng mạnh với oxygen cho ngọn lửa màu gì?<br/>b) Phân tích một mẫu nước cứng thấy có chứa các ion: Ca<sup>2+</sup>, Mg<sup>2+</sup>, Cl<sup>–</sup>, HCO<sub>3</sub><sup>–</sup>, trong đó nồng độ Cl<sup>–</sup> là 0,05 M và của HCO<sub>3</sub><sup>–</sup> là 0,03 M. Cần lấy bao nhiêu mL dung dịch Na<sub>2</sub>CO<sub>3</sub> 0,2 M để chuyển 1,00 L nước cứng trên thành nước mềm? (Coi nước mềm là nước không chứa các ion Ca<sup>2+</sup>, Mg<sup>2+</sup>).",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Khi đốt nóng trong không khí, Ca và Ba phản ứng mạnh với oxygen cho ngọn lửa màu lần lượt màu đỏ cam và màu lục<br/>b)",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck2_de06_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Tiến hành thí nghiệm sau: Cho khoảng 1 mL dung dịch CuSO<sub>4</sub> 5% vào ống nghiệm, thêm tiếp 3 giọt dung dịch NaOH 10%, lắc đều. Nhỏ từ từ dung dịch NH<sub>3</sub> 10% vào ống nghiệm, vừa nhỏ vừa lắc đều đến khi kết tủa tan hoàn toàn thu được dung dịch màu xanh lam. Viết phương trình hóa học của các phản ứng xảy ra.<br/>b) Để xác định hàm lượng của FeCO<sub>3</sub> trong quặng siderite, người ta làm như sau: Cân 0,300 g mẫu quặng, xử lí theo một quy trình thích hợp, thu được dung dịch FeSO<sub>4</sub> trong môi trường H<sub>2</sub>SO<sub>4</sub> loãng. Coi như dung dịch không chứa tạp chất tác dụng với KMnO<sub>4</sub>. Chuẩn độ dung dịch thu được bằng dung dịch KMnO<sub>4</sub> 0,02 M thì dùng hết 12,5 mL. Tính phần trăm theo khối lượng của FeCO<sub>3</sub> trong quặng trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup>  → [Cu(OH)<sub>2</sub>(H<sub>2</sub>O)<sub>4</sub>] + 2H<sub>2</sub>O<br/>[Cu(OH)<sub>2</sub>(H<sub>2</sub>O)<sub>4</sub>] + 4NH<sub>3</sub> → [Cu(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)<sub>2</sub>](OH)<sub>2</sub> + 2H<sub>2</sub>O<br/>b) = 0,020,0125 = 2,5.10<sup>–4</sup> (mol)<br/>= 5. = 1,25.10<sup>–3</sup> mol =<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck2_de07",
    "code": "H12-CK2-07",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de07_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết trong mạng tinh thể kim loại là loại nào sau đây?",
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
            "text": "Liên kết cộng hóa trị",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Liên kết hydrogen",
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
        "displayNumber": 1
      },
      {
        "id": "hoa12_ck2_de07_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhôm (Al) là nguyên tố phổ biến thứ ba (sau oxyen và silicon) và là kim loại phổ biến nhất trong vỏ Trái Đất. Nhôm chiếm khoảng  khối lớp rắn của Trái Đất. Trong tự nhiên, quặng chính chứa nhôm là bauxite và quặng này là nguyên liệu chính để sản xuất nhôm trong công nghiệp. Thành phần chính của quặng bauxite là",
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
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_ck2_de07_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp kim là vật liệu kim loại chứa một kim loại cơ bản với",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "một số kim loại khác hoặc phi kim",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "một số oxide của kim loại đó",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "một số oxide kim loại khác hoặc phi kim",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "một số phi kim và oxide của phi kim đó",
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
        "id": "hoa12_ck2_de07_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, sodium có nhiều trong quặng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Halite",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Bauxite",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dolomite",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phosphorite",
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
        "id": "hoa12_ck2_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại nào sau đây không phản ứng với nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Be",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ca ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sr ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ba",
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
        "id": "hoa12_ck2_de07_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dãy nguyên tử kim loại chuyển tiếp dãy thứ nhất từ  đến , số electron trên phân lớp 3d có xu hướng biến đổi như thế nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Bằng 2 không đổi",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tăng từ 1 đến 10",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tăng từ 2 đến 8",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Bằng 8 không đổi",
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
        "id": "hoa12_ck2_de07_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phối tử trong phức chất [PtCl<sub>4</sub>]<sup>2–</sup> và [Fe(CO)<sub>5</sub>] lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cl<sup>–</sup> và",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Pt và Fe",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cl<sup>–</sup>và CO",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cl và CO",
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
        "id": "hoa12_ck2_de07_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhỏ vài giọt dung dịch HCl đặc vào dung dịch CuSO<sub>4</sub> tạo thành phức chất [CuCl<sub>4</sub>]<sup>2–</sup>. Dấu hiệu nào sau đây chứng tỏ phức chất [CuCl<sub>4</sub>]<sup>2–</sup> tạo thành?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hòa tan kết tủa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đổi màu dung dịch từ màu xanh sang màu vàng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Xuất hiện kết tủa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đổi màu dung dịch từ màu cam sang màu vàng",
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
        "id": "hoa12_ck2_de07_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, các nguyên tố nhóm IA chỉ tồn tại ở dạng hợp chất là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "các nguyên tố nhóm IA chỉ có thể tìm được trong nước ngầm, nước biển",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "các nguyên tố nhóm IA đều là những kim loại hoạt động hóa học mạnh",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "các nguyên tố nhóm IA thường kết hợp với nhau để tạo thành các hợp kim bền",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "các nguyên tố nhóm IA có độ âm điện lớn nên dễ dàng kết hợp với các nguyên tố khác",
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
        "id": "hoa12_ck2_de07_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong dung dịch, các ion kim loại chuyển tiếp đều tạo phức chất aqua",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các phối tử H<sub>2</sub>O trong phức chất aqua không thể bị thế bởi các phối tử khác",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phức chất aqua của các ion kim loại chuyển tiếp hầu hết có dạng hình học bát diện",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các phối tử trong phức chất có thể bị thay thế bởi các phối tử khác",
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
        "id": "hoa12_ck2_de07_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong cốc nước chứa 0,01 mol Na<sup>+</sup>; 0,02 mol Ca<sup>2+</sup>; 0,01 mol Mg<sup>2+</sup>; 0,05 mol HCO<sub>3</sub><sup>–</sup> và 0,02 mol Cl<sup>–</sup>. Đun sôi cốc nước đến khi HCO<sub>3</sub><sup>–</sup> bị nhiệt phân hoàn toàn, nước thu được là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nước có tính cứng tạm thời",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nước mềm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nước có tính cứng vĩnh cửu",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nước có tính cứng toàn phần",
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
        "id": "hoa12_ck2_de07_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dung dịch, ion Ti<sup>3+</sup> tạo phức chất aqua với 6 phối tử nước, tạo thành phức chất aqua có màu tím. Nhận định nào sau đây về phức chất aqua của  không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phức chất aqua có dạng hình học bát diện",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết giữa Ti<sup>3+</sup>  và nước thuộc loại liên kết ion",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Điện tích và số lượng phối tử lần lượt là +3 và 6",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử trung tâm có 1 electron độc thân",
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
        "id": "hoa12_ck2_de07_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Xét các phát biểu về kim loại.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đồng là kim loại được tái chế nhiều lần mà ít bị tiêu hao và được sử dụng làm dây điện, nhạc cụ …",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kim loại Fe phản ứng với Cl<sub>2</sub>khi đun nóng thu được muối FeCl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cho đinh sắt vào dung dịch CuSO<sub>4</sub> có xảy ra quá trình ăn mòn điện hóa",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hòa tan mẩu Na vào nước được dung dịch làm phenolphthalein hóa hồng và khí không màu thoát ra",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Kim loại Fe phản ứng với Cl<sub>2</sub>khi đun nóng thu được muối FeCl<sub>3</sub>.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de07_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Trong dung dịch muối CoCl<sub>2</sub> (màu hồng) tồn tại cân bằng hoá học sau:<br/>[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>–</sup>  [CoCl<sub>4</sub>]<sup>2–</sup> + 6H<sub>2</sub>O           > 0<br/>màu hồng                    màu xanh",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số phối tử của [Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> là 6",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ngâm ống nghiệm vào cốc nước nóng dung dịch chuyển sang màu hồng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử Co (Z = 27) có 7 electron thuộc phân lớp 3d",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thêm từ từ đặc vào ống nghiệm thì dung dịch chuyển dần sang màu xanh",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai Ta thấy > 0 tức là phản ứng thuận (từ trái sang phải) là phản ứng thu nhiệt. Theo nguyên lí chuyển dịch cân bằng Le Chatelier, khi tăng nhiệt độ (ngâm vào nước nóng), cân bằng sẽ chuyển dịch theo chiều thu nhiệt để giảm bớt nhiệt độ, tức là chiều thuận, dung dịch chuyển sang màu xanh.<br/>c) Đúng. Cấu hình e: [Ar] 3d<sup>7</sup>4s<sup>2</sup><br/>d) Đúng. Khi thêm từ từ dung dịch HCl đặc vào, ta đang cung cấp thêm một lượng lớn ion Cl<sup>–</sup>vào hệ. Theo nguyên lí Le Chatelier, hệ sẽ chuyển dịch theo chiều làm giảm nồng độ Cl<sup>–</sup>đi, tức là chiều thuận (kết hợp với Cl<sup>–</sup> tạo phức mới). Chiều thuận tạo ra phức có màu xanh.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de07_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Nguyên tử chromium (Cr) có cấu hình electron [Ar]3d<sup>5</sup>4s<sup>1</sup>. Nguyên tử Cr có bao nhiêu electron hóa trị?",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de07_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu sau:<br/>(1) Các kim loại kiềm có bán kính nguyên tử lớn hơn so với các kim loại cùng chu kì.<br/>(2) Các kim loại kiềm có màu trắng bạc và có ánh kim.<br/>(3) Các kim loại kiềm có nhiệt độ nóng chảy tăng dần từ Li đến Cs.<br/>(4) Các kim loại kiềm đều là kim loại nhẹ.<br/>Có bao nhiêu phát biểu đúng?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de07_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Nguy cơ ngộ độc chì (Pb²⁺) có thể xảy ra khi tiếp xúc với mỹ phẩm, thực phẩm kém chất lượng hoặc làm việc trong môi trường có hàm lượng chì cao. Trong cơ thể, mức độ độc hại của chì có thể được giảm nhờ sử dụng phối tử EDTA<sup>4-</sup> để tạo phức [Pb(EDTA)]<sup>2-</sup> rất bền và được thận Câu tiết. Phối tử EDTA<sup>4-</sup> thường được đưa vào cơ thể bằng cách tiêm tĩnh mạch dung dịch Na<sub>2</sub>[Ca(EDTA)], khi đó trong mạch máu xảy ra quá trình:<br/>[Ca(EDTA)]<sup>2-</sup>+ Pb<sup>2+</sup>→[Pb(EDTA)]<sup>2−</sup>+ Ca<sup>2+</sup><br/>Biết phức [Ca(EDTA)]<sup>2-</sup>tương đối kém bền, sự trao đổi calcium với chì chủ yếu diễn ra trong mạch máu. Một bệnh nhân có hàm lượng chì trong máu là 4.10<sup>-6</sup>mol/L. Giả sử thể tích máu trong cơ thể bệnh nhân là 5 lít. Tính lượng calcium (mg) cần để phản ứng hết với lượng chì trong máu bệnh nhân trên.",
        "images": [],
        "correctAnswer": "0,8",
        "explanation": "Đáp án: 0,8.<br/>Lượng Ca (mg) cần để phản ứng hết với lượng chì trong máu bệnh nhân trên là:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de07_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Để tái chế nhôm, người ta có thể sử dụng phế liệu kim loại như vỏ của các lon, hộp chứa nước giải khát hay thực phẩm có lẫn tạp chất là các hợp chất hữu cơ và vô cơ. Tái chế 10 tấn nhôm phế liệu chứa 17% tạp chất thu được m tấn nhôm thành phẩm. Quá trình tái chế lượng nhôm bị hao hụt 11%, giá trị của m bằng bao nhiêu (kết quả làm tròn đến hàng phần mười)?",
        "images": [],
        "correctAnswer": "7,4",
        "explanation": "Đáp án: 7,4.<br/>tấn.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de07_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Hãy cho biết liên kết kim loại có đặc điểm gì giống và khác với liên kết ion.<br/>b) Một mẫu gang chứa 96% sắt, 3% carbon và một số nguyên tố khác. Tính khối lượng sắt và carbon có trong 90 g mẫu gang trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) – Giống: Đều là liên kết sinh ra do lực hút tĩnh điện.<br/>– Khác: Liên kết ion do lực hút tĩnh điện giữa hai ion trái dấu, liên kết kim loại do lực hút tĩnh điện giữa các electron tự do trong kim loại với ion dương kim loại trong tinh thể.<br/>b) m<sub>Fe</sub> = 90.96% = 86,4 g và m<sub>C</sub>= 90.3% = 2,7 g",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de07_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Đề xuất cách phân biệt ba dung dịch bão hòa sau: CaCl<sub>2</sub>, SrCl<sub>2</sub>, BaCl<sub>2</sub>.<br/>b) Ở nhiệt độ cao, magnesium nitrate bị phân huỷ theo phản ứng:<br/>Mg(NO<sub>3</sub>)<sub>2</sub>(s)  MgO(s) + 2NO<sub>2</sub>(g) + O<sub>2</sub>(g);<br/>Cho biết:<br/>Tính biến thiên enthalpy của phản ứng trên.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Đốt trên ngọn lửa đèn cồn: CaCl<sub>2</sub> cho màu đỏ cam, SrCl<sub>2</sub> cho màu đỏ son, BaCl<sub>2</sub> cho màu lục.<br/>b)",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck2_de07_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Cho một phức chất có công thức [Fe(OH<sub>2</sub>)<sub>6</sub>](NO<sub>3</sub>)<sub>3</sub>.3H<sub>2</sub>O. Chỉ ra nguyên tử trung tâm và phối tử của phức chất trên.<br/>b) Để xác định hàm lượng sắt trong mẫu quặng hematite (có thành phần chính Fe<sub>2</sub>O<sub>3</sub>), người ta hòa tan 0,30 g mẫu quặng bằng dung dịch acid dư, sau đó xử lý hóa học để chuyển toàn bộ lượng sắt trong quặng về trạng thái Fe<sup>2+</sup>. Thêm lượng dư dung dịch H<sub>2</sub>SO<sub>4</sub> loãng vào, sau đó đem chuẩn độ bằng dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,02 M, phản ứng kết thúc khi dùng hết 25 mL dung dịch chuẩn. Tính thành phần % theo khối lượng của Fe<sub>2</sub>O<sub>3</sub> trong mẫu quặng ban đầu.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Nguyên tử trung tâm là Fe<sup>3+</sup>, phối tử là H<sub>2</sub>O.<br/>b)<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck2_de08",
    "code": "H12-CK2-08",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de08_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong định nghĩa về liên kết kim loại: “Liên kết kim loại là liên kết hình thành do lực hút tĩnh điện giữa các electron...(1)... với các ion...(2)... kim loại ở các nút mạng”. Các từ cần điền vào vị trí (1), (2) là",
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
        "id": "hoa12_ck2_de08_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có thành phần chính là CaCO<sub>3</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thạch cao",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đá vôi",
            "isCorrect": true
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
        "correctAnswer": "B",
        "explanation": "Đáp án đúng: <b>B</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_ck2_de08_p1_q3",
        "number": 3,
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
        "displayNumber": 3
      },
      {
        "id": "hoa12_ck2_de08_p1_q4",
        "number": 4,
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
        "displayNumber": 4
      },
      {
        "id": "hoa12_ck2_de08_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một loại khoáng vật phổ biến có thành phần chính là CaCO<sub>3</sub>.MgCO<sub>3</sub>. Tên của khoáng vật này là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dolomite",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "calcite",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phosphorite",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "halite",
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
        "id": "hoa12_ck2_de08_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở trạng thái cơ bản, cấu hình electron của nguyên tử nguyên tố Cu (Z = 29) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Ar]3d<sup>9</sup>4s<sup>2</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Ar]3d<sup>10</sup>4s<sup>1</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Ar]3d<sup>5</sup>4s<sup>2</sup>4p<sup>4</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Ar]3d<sup>3</sup>4s<sup>2</sup>4p<sup>6</sup>",
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
        "id": "hoa12_ck2_de08_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử phức chất có cấu tạo như sau:<br/>Có bao nhiêu phối tử trong phân tử phức chất trên?",
        "images": [
          "/assets/hoa12/final2/h12_ck2_de8_image2.png",
          "/assets/hoa12/final2/h12_ck2_de8_hdphoto1.wdp"
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
        "displayNumber": 7
      },
      {
        "id": "hoa12_ck2_de08_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho khoảng 2 mL dung dịch NaOH vào ống nghiệm chứa khoảng 1 mL dung dịch CuSO<sub>4</sub>. Hiện tượng quan sát được là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dung dịch chuyển sang màu vàng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "xuất hiện kết tủa màu xanh lam",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "xuất hiện kết tủa màu nâu đỏ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dung dịch chuyển sang màu nâu đỏ",
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
        "id": "hoa12_ck2_de08_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại kiềm có khối lượng riêng nhỏ là do nguyên nhân nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết trong mạng tinh thể kim loại kiềm bền vững",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kim loại kiềm có bán kính nguyên tử lớn",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kim loại kiềm có thế điện cực chuẩn âm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nguyên tử chỉ có một electron hoá trị ở lớp ngoài cùng",
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
        "id": "hoa12_ck2_de08_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dung dịch, ion Co<sup>2+</sup> tạo thành phức chất aqua có dạng hình học bát diện. Công thức hóa học của phức chất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Co(H<sub>2</sub>O)<sub>4</sub>]<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Co(H<sub>2</sub>O)<sub>4</sub>]<sup>3+</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>",
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
        "id": "hoa12_ck2_de08_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các muối carbonate của kim loại nhóm IIA đều bị phân hủy bởi nhiệt theo phản ứng sau:<br/>MCO<sub>3</sub>(s)  MO(s) + CO<sub>2</sub>(g)       ∆<sub>r</sub>H<sup>˚</sup><sub>298</sub><br/>Biến thiên enthalpy chuẩn của quá trình trên được cho trong bảng sau:<br/>Từ MgCO<sub>3</sub> đến BaCO<sub>3</sub>, quy luật biến đổi nhiệt độ phân hủy như thế nào?",
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
        "displayNumber": 11
      },
      {
        "id": "hoa12_ck2_de08_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho lượng dư dung dịch NH<sub>3</sub> tác dụng với AgCl. Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kết tủa trắng tan dần, phức chất [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> không màu được tạo thành",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Không có hiện tượng gì xảy ra",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kết tủa trắng tan dần, phức chất [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> màu xanh được tạo thành",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Kết tủa trắng tan dần, phức chất [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>màu vàng được tạo thành",
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
        "id": "hoa12_ck2_de08_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện thí nghiệm sau:<br/>Bước 1: Rót vào cốc thuỷ tinh thứ nhất, cốc thuỷ tinh thứ hai và thứ ba khoảng 20 mL nước (khoảng 1/2 cốc), thêm vài giọt dung dịch phenolphtalein vào mỗi cốc và đặt lên giá đỡ.<br/>Bước 2: Bỏ vào cốc thuỷ tinh thứ nhất một mẫu sodium (Na) nhỏ bằng hạt gạo; cốc thuỷ tinh thứ hai một mẩu kim loại magnesium (Mg) và cốc thuỷ tinh thứ ba một mẩu kim loại aluminium (Al) vừa cạo sạch lớp vỏ oxide.<br/>Bước 3: Đun nóng nhẹ cốc thuỷ tinh thứ hai và thứ ba.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 2, các mẫu magnesium và aluminium trong các cốc thuỷ tinh thứ hai và ba đều nổi trên mặt nước và tan dần, dung dịch chuyển sang màu hồng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở bước 2, mẫu sodium trong cốc thuỷ tinh thứ nhất nổi trên mặt nước và tan dần, dung dịch chuyển sang màu hồng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sau bước 3, cốc thuỷ tinh thứ hai và thứ ba đều có màu hồng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các thí nghiệm trên chứng tỏ khả năng phản ứng của sodium, magnesium và aluminium là như nhau",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Mg và Al nặng hơn H<sub>2</sub>O và Al hầu như không tan ở nhiệt độ thường.<br/>b) Đúng.<br/>c)Sai. Cốc 3 không đổi màu.<br/>d)Sai. Khả năng phản ứng giảm từ Na về Al.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de08_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cisplatin là một phức chất có công thức [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>], được sử dụng trong điều trị ung thư. Khi vào cơ thể, một phối tử Cl⁻ của cisplatin bị thay thế bởi một phân tử nước, tạo thành ion phức hoạt động (R), có khả năng liên kết với guanine trong DNA, từ đó cản trở quá trình phân chia tế bào ung thư.<br/>Khi cisplatin được hấp thụ vào cơ thể con người, một phối tử chloride được thay thế bằng một phân tử nước tạo thành ion phức R.",
        "images": [
          "/assets/hoa12/final2/h12_ck2_de8_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phức chất cisplatin có dạng hình học tứ diện",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Số phối trí của nguyên tử trung tâm trong phức chất cisplatin là 4",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong phức chất cisplatin, số oxi hoá của nguyên tử trung tâm là +2",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ion phức R được tạo thành từ phản ứng thế phối tử xảy ra theo phương trình: [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] + H<sub>2</sub>O  [Pt(NH<sub>3</sub>)<sub>2</sub>(H<sub>2</sub>O)Cl]<sup>+</sup> + Cl<sup>−</sup>",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Phức vuông phẳng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de08_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Titanium (Ti) là kim loại chuyển tiếp dãy thứ nhất và có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>2</sup>4s<sup>2</sup>. Đa số ứng dụng của titanium liên quan đến vật liệu sản xuất động cơ và khung máy bay. Trong các hợp chất, số oxi hoá cao nhất của Ti là +a. Xác định giá trị của a.",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de08_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Phương pháp Solvay để sản xuất soda trong công nghiệp được minh họa ở sơ đồ sau:<br/>Cho các phát biểu sau:<br/>(1) Ở giai đoạn làm lạnh, NaHCO<sub>3</sub> được tách khỏi hệ phản ứng bằng phương pháp kết tinh.<br/>(2) Phản ứng chuyển hóa NaHCO<sub>3</sub> thành Na<sub>2</sub>CO<sub>3</sub> là phản ứng thu nhiệt.<br/>(3) Ammonia (NH<sub>3</sub>) và carbon dioxide (CO<sub>2</sub>) được sử dụng quay vòng trong quá trình sản xuất.<br/>(4) Ion carbonate (CO<sub>3</sub><sup>2-</sup>) được tạo thành tại tháp carbonate hóa.<br/>Liệt kê các phát biểu đúng theo số thứ tự tăng dần.",
        "images": [
          "/assets/hoa12/final2/h12_ck2_de8_image6.png"
        ],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de08_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Phức chất A có công thức [Fe(OH)<sub>3</sub>(H<sub>2</sub>O)<sub>n</sub>] và dạng bát diện. Giá trị của n là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de08_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Thực hiện tái chế nhôm từ 1,0 tấn phế liệu thu được 150 kg nhôm nguyên chất. Tính thành phần % về khối lượng của nhôm có trong phế liệu, biết hiệu suất tái chế là 30% (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "50",
        "explanation": "Đáp án: 50.<br/>Khối lượng nhôm trong phế liệu: 150 = 500 kg<br/>Phần trăm khối lượng nhôm trong phế liệu:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de08_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Để sản xuất nước Javel, người ta điện phân dung dịch NaCl có màng ngăn hay không có màng ngăn? Viết phương trình hóa học của phản ứng xảy ra.<br/>b) Duralumin là một hợp kim thông dụng của nhôm. Nêu ứng dụng của duralumin và ứng dụng đó dựa trên tính chất gì của duralumin?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Điện phân dung dịch NaCl không màng ngăn: NaCl + H<sub>2</sub>O  NaClO + H<sub>2</sub><br/>b) Ứng dụng: công nghiệp hàng không, ô tô, quân sự. Tính chất: nhẹ, cứng, bền.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de08_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Một mẫu nước giếng có chứa các ion Ca<sup>2+</sup>, Na<sup>+</sup>, Mg<sup>2+</sup>, Cl<sup>–</sup> và SO<sub>4</sub><sup>2–</sup>. Viết phương trình hóa học của các phản ứng tạo chất không tan khi cho dung dịch soda vào mẫu nước giếng trên.<br/>b) Độ tan của Ca(OH)<sub>2</sub> trong nước ở 25°C là 0,17 gam/100 gam nước. Dung dịch bão hòa Ca(OH)<sub>2</sub> có khối lượng riêng là 1,02 g/mL. Tính pH của dung dịch Ca(OH)<sub>2</sub> bão hòa.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Dung dịch soda gồm ion: Na<sup>+</sup> và CO<sub>3</sub><sup>2–</sup><br/>Khi cho vào mẫu nước giếng chứa các ion Ca<sup>2+</sup>, Na<sup>+</sup>, Mg<sup>2+</sup>, Cl<sup>–</sup> và SO<sub>4</sub><sup>2–</sup> sẽ tạo ra các chất không tan sau:<br/>Ca<sup>2+</sup> +  CO<sub>3</sub><sup>2–</sup> CaCO<sub>3</sub>↓Mg<sup>2+</sup> + CO<sub>3</sub><sup>2–</sup> MgCO<sub>3</sub>↓<br/>b) Dung dịch Ca(OH)<sub>2</sub> là 100,17 g",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck2_de08_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Một loại thực phẩm chức năng cung cấp nguyên tố sắt ở dạng viên. Một viên loại này có khối lượng 250 mg chứa nguyên tố sắt ở dạng muối Fe(II) cùng với một số chất khác không chứa sắt. Kết quả kiểm nghiệm cho thấy, lượng Fe(II) trong viên này phản ứng vừa đủ với 8,5 mL dung dịch KMnO<sub>4</sub> 0,04 M. Tính phần trăm khối lượng của nguyên tố sắt trong viên thực phẩm chức năng trên?<br/>b) Nêu hiện tượng và viết phương trình hóa học của phản ứng xảy ra khi nhỏ từ từ dung dịch NH<sub>3</sub> đến dư vào dung dịch CuSO<sub>4</sub>.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) 5Fe<sup>2+</sup> + MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup>  5Fe<sup>3+</sup> + Mn<sup>2+</sup> + 4H<sub>2</sub>O<br/>Số mol MnO<sub>4</sub><sup>-</sup>= 8,5.0,04 = 0,34 mmol ⟹ số mol Fe<sup>2+</sup> = 0,34.5=1,7 mmol<br/>b) Kết tủa trắng xanh, sau đó tan dần tạo dung dịch xanh lam<br/>CuSO<sub>4</sub> + 2NH<sub>3</sub> + 6H<sub>2</sub>O  [Cu(OH)<sub>2</sub>(H<sub>2</sub>O)<sub>4</sub>] + (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub><br/>[Cu(OH)<sub>2</sub>(H<sub>2</sub>O)<sub>4</sub>] + 4NH<sub>3</sub>  [Cu(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)<sub>2</sub>](OH)<sub>2</sub> + 2H<sub>2</sub>O<br/>HS có thể viết PT dạng ion rút gọn; có thể viết chất đầu là [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup><br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  },
  {
    "id": "hoa12_ck2_de09",
    "code": "H12-CK2-09",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 20,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de09_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Liên kết kim loại là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "liên kết hình thành bởi lực hút tĩnh điện giữa các ion dương kim loại và các electron tự do",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "liên kết hình thành bởi lực hút tĩnh điện giữa ion dương và các ion âm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "liên kết giữa các nguyên tử bằng cặp electron dùng chung",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "liên kết hình thành bởi lực hút tĩnh điện giữa nguyên tử hydorgen tích điện dương và nguyên tử oxygen tích điện âm",
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
        "id": "hoa12_ck2_de09_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, trong các kim loại sau kim loại nào thể hiện tính dẻo tốt nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ag",
            "isCorrect": false
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
            "text": "Al",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Au",
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
        "id": "hoa12_ck2_de09_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại kiềm có khả năng phản ứng hoá học dễ dàng với nhiều chất. Trong phòng thí nghiệm, để bảo quản kim loại kiềm, người ta",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ngâm kim loại kiềm trong dầu hoả",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "ngâm kim loại kiềm trong nước cất",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ngâm kim loại kiềm trong ethyl alcohol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "để kim loại kiềm trong lọ thủy tinh",
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
        "id": "hoa12_ck2_de09_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong vỏ Trái Đất, những kim loại nào sau đây tồn tại chủ yếu dưới dạng đơn chất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ag, Au",
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
        "displayNumber": 4
      },
      {
        "id": "hoa12_ck2_de09_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thí nghiệm nào sau đây không xảy ra ăn mòn điện hoá?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đốt cháy dây sắt trong không khí khô",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cho hợp kim Fe – Cu vào dung dịch CuSO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đặt mẫu gang lâu ngày trong không khí ẩm",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho kim loại Fe vào dung dịch AgNO<sub>3</sub>",
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
        "id": "hoa12_ck2_de09_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Bột chữa cháy trong các bình chữa cháy xách tay có chứa thành phần chính là sodium hydrogencarbonate. Khi phun bột này vào đám cháy, nhiệt độ cao của ngọn lửa sẽ làm chất này phân hủy, sinh ra một lượng lớn khí không duy trì sự cháy, giúp bao phủ và dập tắt ngọn lửa. Công thức hóa học của sodium hydrogencarbonate là",
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
            "text": "KHCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "NaHCO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "K<sub>2</sub>CO<sub>3</sub>",
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
        "id": "hoa12_ck2_de09_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét quá trình điện phân dung dịch NaCl bão hoà không có màng ngăn. Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Quá trình xảy ra tại cathode là Na<sup>+</sup> + 1e → Na",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Quá trình xảy ra tại anode là 2H<sub>2</sub>O + 2e → H<sub>2</sub> + 2OH<sup>-</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch thu được sau phản ứng là dung dịch NaOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho mẩu giấy màu vào dung dịch sau phản ứng thấy mẩu giấy mất màu",
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
        "id": "hoa12_ck2_de09_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình hóa học nào sau đây giải thích hiện tượng đá vôi bị hòa tan trong tư nhiên?",
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
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa12_ck2_de09_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nước cứng là nước chứa nhiều các ion nào sau đây vượt quá mức cho phép?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ca<sup>2+</sup>, Mg<sup>2+</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mg<sup>2+</sup>, Na<sup>+</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ca<sup>2+</sup>, Ba<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ca<sup>2+</sup>, K<sup>+</sup>",
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
        "id": "hoa12_ck2_de09_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để kiểm tra sự có mặt của cation Cu<sup>2+</sup> hoặc Fe<sup>3+</sup> trong dung dịch người ta tiến hành các thí nghiệm sau:<br/>- Thí nghiệm 1: Cho khoàng 2-3 giọt dung dịch NaOH vào ống nghiệm chứa khoảng 2 mL dung dịch CuSO<sub>4</sub> 1M.<br/>- Thí nghiệm 2: Cho khoảng 2-3 giọt dung dịch NaOH vào ống nghiệm chứa khoảng 2 mL dung dịch FeCl<sub>3</sub> 1M.<br/>Nhận xét nào sau đây là sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở thí nghiệm thứ hai xuất hiện kết tủa màu nâu đỏ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở cả 2 thí nghiệm đều xuất hiện kết tủa cùng màu",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở thí nghiệm thứ nhất xuất hiện kết tủa màu xanh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có thể thay thế dung dịch NaOH bằng dung dịch KOH ",
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
        "id": "hoa12_ck2_de09_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cấu hình electron nào sau đây là của kim loại chuyển tiếp dãy thứ nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>1</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Ar]3d<sup>6</sup>4s<sup>2</sup>",
            "isCorrect": true
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
            "text": "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>6</sup>",
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
        "id": "hoa12_ck2_de09_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chọ phát biểu đúng nhất về dạng hình học có thể có của phức chất có dạng tổng quát [ML<sub>4</sub>]?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tứ diện",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Bát diện",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Vuông phẳng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tứ diện hoặc vuông phẳng",
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
        "id": "hoa12_ck2_de09_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Trong quá trình làm thí nghiệm về nhận biết các cation của kim loại nhóm IIA, một học sinh làm các thí nghiệm ở 20<sup>o</sup>C, như sau:<br/>- Thí nghiệm 1: Cho 3 mL dung dịch  vào ống nghiệm, thêm tiếp 2 mL dung dịch<br/>- Thí nghiệm 2: Cho 3 mL dung dịch  vào ống nghiệm, thêm tiếp 2 mL dung dịch NaOH .<br/>Trong cả 2 thí nghiệm học sinh đều thu được kết tủa. Để giải thích cho hiện tượng thí nghiệm này, học sinh trên đã tra cứu độ tan của các chất ở 20<sup>o</sup>C như sau:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kết tủa thu được ở thí nghiệm 1 là ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Biết rằng ở 20<sup>o</sup>C trong dung dịch có .  thì xuất hiện kết tủa; khi thực hiện thí nghiệm: cho 20 mL dung dịch  tác dụng với 30 mL dung dịch M thì thu được 50 mL dung dịch và có kết tủa xuất hiện",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở 20<sup>o</sup>C, dung dịch bão hoà  có khối lượng riêng  thì có nồng độ  khoảng ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở 20<sup>o</sup>C,  ít tan trong nước hơn ",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng. [Ca<sup>2+</sup>] = 20.0,01/50 = 0,004M và [OH<sup>-</sup>] = 30.0,1/50 = 0,06M<br/>[Ca<sup>2+</sup>].[OH<sup>-</sup>]² = 1,44.10<sup>-5</sup> > 5,4.10<sup>-6</sup> nên có kết tủa Ca(OH)<sub>2</sub>.<br/>c) Đúng. Nồng độ không phụ thuộc lượng dung dịch nên:<br/>d) Sai. Ca(OH)<sub>2</sub> có độ tan lớn hơn Mg(OH)<sub>2</sub> (0,175 > 0,00125).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de09_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện thí nghiệm cho dung dịch NH<sub>3</sub> vào ống nghiệm đựng bột Ni(OH)<sub>2</sub>màu xanh lá cây đến dư, thu được phức chất bát diện X (chỉ chứa phối tử NH<sub>3</sub>) có màu xanh dương.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phức chất X có công thức là [Ni(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phức chất thu được có nguyên tử trung tâm là Ni",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dấu hiệu nhận biết phức chất tạo thành là kết tủa màu xanh lá cây bị tan ra",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết trong phức chất được hình thành là do ion trung tâm Ni<sup>2+</sup> cho các cặp electron chưa liên kết vào các phối tử NH<sub>3</sub> để hình thành liên kết cho – nhận",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Phức chất thu được có nguyên tử trung tâm là Ni<sup>2+</sup>.<br/>c) Đúng.<br/>d) Sai. Liên kết trong phức chất được hình thành là do phối tử NH<sub>3</sub> cho cặp electron chưa liên kết vào nguyên tử trung tâm Ni<sup>2+</sup>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de09_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các kim loại: Al, Cu, Fe, Zn. Có bao nhiêu kim loại trong dãy được điều chế bằng phương pháp nhiệt luyện?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/><br/>Đáp án 0,5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de09_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các hóa chất sau: NaOH, Na<sub>2</sub>CO<sub>3</sub>, Na<sub>3</sub>PO<sub>4</sub>, HCl, NaCl. Có bao nhiêu chất trong dãy được sử dụng để làm mềm nước có tính cứng tạm thời?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de09_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Phức chất có công thức hoá học là K<sub>4</sub>[Fe(CN)<sub>6</sub>]. Nguyên tử trung tâm iron có số oxi hoá là +a. Xác định giá trị của a.",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de09_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "Duralumin được sử dụng rộng rãi làm vật liệu cho ngành hàng không và công nghiệp nhờ vào sự kết hợp giữa độ bền và trọng lượng nhẹ. Một loại duralumin có thành phần khối lượng các nguyên tố như sau:<br/>a) Giải thích ngắn gọn tại sao người ta không dùng nhôm nguyên chất mà lại dùng duralumin để chế tạo vỏ máy bay?<br/>b) Để chế tạo được vỏ của một chiếc máy bay cần sử dụng 2,5 tấn hợp kim duralumin loại này. Tính khối lượng nhôm và đồng nguyên chất cần dùng. Biết rằng quá trình luyện hợp kim có hao hụt 5%.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Nhôm nguyên chất tuy nhẹ nhưng khá mềm. Khi hợp kim hóa nhôm với các nguyên tố như Cu, Mg, Mn... sẽ tạo ra duralumin có độ cứng và độ bền cơ học cao hơn nhôm nguyên chất rất nhiều, trong khi vẫn giữ được ưu điểm là trọng lượng nhẹ.<br/>b)",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de09_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "Cho các sơ đồ chuyển hóa sau:<br/>(1) (2)  hoặc Y<br/>Xác định các chất X, Y, Z, E và viết phương trình hóa học.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>X là NaHCO<sub>3</sub>, Y là Na<sub>2</sub>CO<sub>3</sub>, E là CO<sub>2</sub>.<br/>2NaHCO<sub>3</sub>  Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑<br/>CO<sub>2</sub> + NaOH → NaHCO<sub>3</sub><br/>CO<sub>2</sub> + NaOH → Na<sub>2</sub>CO<sub>3</sub> +H<sub>2</sub>O",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de09_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "Muối Mohr có công thức (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.FeSO<sub>4</sub>.6H<sub>2</sub>O. Để xác định độ tinh khiết của một loại muối Mohr (Cho rằng trong muối Mohr chỉ có muối kép ngậm nước nêu trên và tạp chất trơ), một học sinh tiến hành các thí nghiệm sau: Cân chính xác 9,81 gam muối Mohr, pha thành 200 mL dung dịch X. Lấy chính xác 10 mL dung dịch X, thêm 10 mL dung dịch H<sub>2</sub>SO<sub>4</sub> 10%, được dung dịch Y. Chuẩn độ dung dịch Y bằng dung dịch chuẩn KMnO<sub>4</sub> 0,02M. Thực hiện chuẩn độ 3 lần. Kết quả đạt được như sau:<br/>a) Viết phương trình của phản ứng chuẩn độ trên.<br/>b) Theo kết quả chuẩn độ ở trên, hãy tính độ tinh khiết của muối Mohr?",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) 5Fe<sup>2+</sup> + MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup>  5Fe<sup>3+</sup> + Mn<sup>2+</sup> + 4H<sub>2</sub>O<br/>b)<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      }
    ]
  },
  {
    "id": "hoa12_ck2_de10",
    "code": "H12-CK2-10",
    "title": "Đề Thi Cuối Kì 2 Hóa 12 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học 12 (Kim loại kiềm, kiềm thổ, nhôm, kim loại chuyển tiếp & phức chất)",
    "badge": "Cuối Kì 2",
    "grade": "12",
    "chapter": "Đề Cuối Học Kì 2",
    "duration": 50,
    "totalQuestions": 21,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_ck2_de10_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thành phần chính của quặng bauxite là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Al<sub>2</sub>O<sub>3</sub>.2H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Fe<sub>2</sub>O<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ZnS",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "FeS<sub>2</sub>",
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
        "id": "hoa12_ck2_de10_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dung dịch nước, ion Fe<sup>2+</sup> tạo thành phức chất aqua (X) có dạng hình học bát diện. Công thức của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Fe(H<sub>2</sub>O)<sub>4</sub>]<sup>3+</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Fe(H<sub>2</sub>O)<sub>4</sub>]<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng: <b>A</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_ck2_de10_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây dễ tan trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "BaSO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Mg(OH)<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ca(NO<sub>3</sub>)<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "SrCO<sub>3</sub>",
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
        "id": "hoa12_ck2_de10_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp kim X (chứa trên 90% nhôm, khoảng 4% đồng và một số nguyên tố khác) có đặc tính nhẹ, cứng, bền, được sử dụng rộng rãi trong ngành công nghiệp chế tạo máy bay. Tên gọi của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "duralumin",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "gang",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "thép",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "inox",
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
        "id": "hoa12_ck2_de10_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho định nghĩa: “Liên kết kim loại là liên kết được hình thành do lực hút tĩnh điện giữa các<br/>electron...(1)... với các ion...(2)... kim loại ở các nút mạng”. Các từ cần điền vào vị trí (1), (2) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tự do, dương",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "hóa trị, lưỡng cực",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "ngoài cùng, dương",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hóa trị, âm",
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
        "id": "hoa12_ck2_de10_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong dãy kim loại chuyển tiếp thứ nhất, kim loại X có độ cứng cao nhất, thường được ứng dụng để chế tạo hợp kim dùng làm dụng cụ y tế, vòng bi, mũi khoan,… X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ti",
            "isCorrect": false
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
            "text": "Cr",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Fe",
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
        "id": "hoa12_ck2_de10_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nhận định sau đây:<br/>(1) Các hợp chất KMnO<sub>4</sub>, K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, K<sub>2</sub>CrO<sub>4</sub> đều có tính oxi hóa mạnh.<br/>(2) Số oxi hoá lớn nhất của nguyên tố manganese là +6.<br/>(3) Trong tự nhiên, cation Fe<sup>2+</sup> thường phổ biến hơn cation Fe<sup>3+</sup>.<br/>(4) Cation Cr<sup>3+</sup> có cả tính oxi hoá và tính khử.<br/>Số nhận định không đúng là",
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
        "id": "hoa12_ck2_de10_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuốc thử Tollens thường dùng để phân biệt aldehyde với ketone. Phức chất nào sau đây có trong<br/>dung dịch thuốc thử Tollens?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "[PtCl<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub>]",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "[Al(OH)<sub>4</sub>]<sup>–</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>",
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
        "id": "hoa12_ck2_de10_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phối tử trong phức chất [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Co",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Co<sup>3+</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>3</sub><sup>+</sup>",
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
        "id": "hoa12_ck2_de10_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Muối magnesium carbonate dễ dàng bị phân hủy bởi nhiệt theo phản ứng xảy ra như sau:<br/>MgCO<sub>3</sub>(s) MgO(s) + CO<sub>2</sub>(g)<br/>Biết nhiệt tạo thành chuẩn (kJ.mol<sup>-1</sup>) của MgCO<sub>3</sub>(s), MgO(s) và CO<sub>2</sub>(s) lần lượt là -1096; -601,8 và -393,5. Biến thiên enthalpy của phản ứng trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "29,5 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "174,3 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "100,7 kJ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "85,6 kJ",
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
        "id": "hoa12_ck2_de10_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các kim loại nhóm IA có độ cứng thấp do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "khối lượng nguyên tử lớn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "số electron hóa trị lớn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "liên kết kim loại yếu",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "bán kính nguyên tử nhỏ",
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
        "id": "hoa12_ck2_de10_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch NaOH làm mềm được nước có tính cứng vĩnh cửu",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đun sôi nước cứng có thể làm mềm được nước có tính cứng toàn phần",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch Ca(OH)<sub>2</sub> vừa đủ làm mềm được nước có tính cứng vĩnh cửu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch Na<sub>2</sub>CO<sub>3</sub> làm mềm được nước có tính cứng tạm thời và nước có tính cứng vĩnh cửu",
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
        "id": "hoa12_ck2_de10_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Kim loại được sử dụng phổ biến trong cuộc sống.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sulfuric acid (H<sub>2</sub>SO<sub>4</sub>) đặc được chuyên chở trong những toa thùng bằng thép do Fe bị thụ động hóa trong H<sub>2</sub>SO<sub>4</sub> đặc, nguội",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các thiết bị bằng thép trong môi trường biển hoặc lòng đất ẩm ướt thường được bảo vệ bằng phương pháp điện hóa. Kim loại có thể sử dụng để bảo vệ thép là copper (Cu)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Mercury (Hg) phản ứng với sulfur (S) ở nhiệt độ thường nên có thể dùng bột S để xử lí Hg rơi vãi",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Vonfram (W) có nhiệt độ nóng chảy rất cao nên thường được dùng làm dây tóc bóng đèn",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Kim loại có thể sử dụng để bảo vệ thép là kẽm (Zn).<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 13
      },
      {
        "id": "hoa12_ck2_de10_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Khi hoà tan một lượng phèn nhôm - kali vào nước thì có các quá trình cơ bản sau diễn ra:<br/>Al<sup>3+</sup>(aq) + 6H<sub>2</sub>O(l) → [Al(OH<sub>2</sub>)<sub>6</sub>]<sup>3+</sup>(aq)(1)<br/>[Al(OH<sub>2</sub>)<sub>6</sub>]<sup>3+</sup>(aq) + 3H<sub>2</sub>O(l)  [Al(OH)<sub>3</sub>(H<sub>2</sub>O)<sub>3</sub>](s) + 3H<sub>3</sub>O<sup>+</sup>(aq) (2)",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Quá trình (1) là quá trình tạo phức chất aqua của cation Al<sup>3+</sup>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các quá trình (1) và (2) giúp giải thích vì sao cation Al<sup>3+</sup> là một base trong dung dịch nước theo Bronsted – Lowry",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Quá trình (2) là phản ứng thế phối tử, trong đó các phân tử H<sub>2</sub>O trong phức chất bị đứt liên kết với Al<sup>3+</sup> và bị thay thế bởi các ion OH<sup>-</sup> từ dung dịch",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu thêm một lượng nhỏ dung dịch HCl vào hệ đang ở trạng thái cân bằng (2), lượng kết tủa keo thu được sẽ tăng lên",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Al<sup>3+</sup> trong nước tạo môi trường acid.<br/>c) Sai. Trong quá trình này, liên kết phối trí giữa Al và nguyên tử O của nước không bị đứt ra. Thay vào đó, một liên kết O-H của phân tử nước (đang làm phối tử) bị phân cắt, giải phóng H<sup>+</sup> cho dung môi. Đây là quá trình điện li acid, không phải phản ứng thế phối tử thông thường.<br/>d) Sai. Theo nguyên lý chuyển dịch cân bằng Le Chatelier, khi thêm dung dịch HCl, nồng độ sản phẩm tăng lên. Cân bằng (2) sẽ chuyển dịch theo chiều nghịch để làm giảm nồng độ H<sub>3</sub>O<sup>+</sup>, dẫn đến việc kết tủa bị hòa tan một phần (lượng kết tủa giảm đi).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 14
      },
      {
        "id": "hoa12_ck2_de10_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Titanium (Z = 22) là kim loại nhẹ, cứng, chống ăn mòn tốt nên được ứng dụng để chế tạo vật liệu hàng không. Cấu hình electron nguyên tử của titanium có dạng [Ar]3d<sup>x</sup>4s<sup>y</sup>. Giá trị của (x + y) là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa12_ck2_de10_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phát biểu sau:<br/>(1) Các kim loại kiềm có thế điện cực chuẩn rất dương nên đều phản ứng với nước ở điều kiện thường.<br/>(2) Mức độ phản ứng với nước của kim loại kiềm tăng dần từ Li đến Cs.<br/>(3) Các kim loại kiềm chỉ tồn tại ở dạng hợp chất do khả năng hoạt động hóa học mạnh.<br/>(4) Các kim loại kiềm có khối lượng riêng lớn do bán kính nguyên tử lớn và cấu trúc mạng tinh thể kém đặc khít.<br/>Liệt kê các phát biểu đúng theo số thứ tự tăng dần.",
        "images": [],
        "correctAnswer": "23",
        "explanation": "Đáp án: 23.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa12_ck2_de10_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phức chất sau: [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>, [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>, [Zn(CN)<sub>4</sub>]<sup>2–</sup>, [CoF<sub>6</sub>]<sup>3–</sup>, [Ni(CO)<sub>4</sub>]. Số phức chất có dạng hình học bát diện là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa12_ck2_de10_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Một loại thép (chứa 98% Fe và 2% C theo khối lượng) được sản xuất với công nghệ lò luyện thép Martin từ nguyên liệu gồm m tấn sắt phế liệu (chứa 40% Fe<sub>3</sub>O<sub>4</sub>, 59% Fe, 1% C theo khối lượng) và 6 tấn gang (chứa 97% Fe và 3% C theo khối lượng). Phương trình hóa học của phản ứng xảy ra trong lò luyện thép là: Fe<sub>3</sub>O<sub>4</sub> + 2C  3Fe + 2CO<sub>2</sub>. Tính giá trị của m (làm tròn kết quả đến hàng phần trăm).",
        "images": [],
        "correctAnswer": "1,24",
        "explanation": "Đáp án: 1,24.<br/>Trong m tấn sắt phế liệu:<br/>Trong 6 tấn gang: m<sub>Fe</sub> = 97%.6 = 5,82 tấn; m<sub>C</sub> = 3%.6 = 0,18 tấn<br/>PTHH: Fe<sub>3</sub>O<sub>4</sub> + 2C → 3Fe + 2CO<sub>2</sub><br/>Trong thép:<br/>m<sub>Fe thép</sub> = m<sub>Fe gang</sub> + m<sub>Fe phế liệu</sub> =<br/>m<sub>C thép</sub> = m<sub>C gang</sub> + m<sub>C phế liệu</sub>– m<sub>C phản ứng</sub><sub>khử</sub> =<br/>Lập tỉ lệ m<sub>Fe thép</sub>: m<sub>C thép</sub> = 98 : 2  m = 1,24.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa12_ck2_de10_p4_q1",
        "number": 1,
        "part": 4,
        "type": "essay",
        "text": "a) Trong bảng tuần hoàn các nguyên tố hóa học, nhóm các nguyên tố kim loại thường thuộc những khối nguyên tố nào (s, p, d, f)?<br/>b) So sánh khả năng dẫn điện của hợp kim đồng và kim loại đồng nguyên chất. Giải thích.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) Trong bảng tuần hoàn các nguyên tố hóa học, kim loại thường thuộc khối nguyên tố s, d và f.<br/>b) Hợp kim đồng dẫn điện yếu hơn kim loại đồng nguyên chất. Giải thích: Trong hợp kim, các nguyên tử khác loại làm mạng tinh thể trở nên kém trật tự, gây cản trở sự chuyển động của các electron tự do nên hợp kim đồng dẫn điện yếu hơn đồng nguyên chất.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 19
      },
      {
        "id": "hoa12_ck2_de10_p4_q2",
        "number": 2,
        "part": 4,
        "type": "essay",
        "text": "a) Khi đốt nóng trong không khí, potassium (K) và barium (Ba) phản ứng mạnh với oxygen cho ngọn lửa màu gì?<br/>b) Một mẫu nước giếng khoan tại một hộ gia đình được mang đi xét nghiệm cho thấy tổng nồng độ các ion gây cứng (Ca<sup>2+</sup> và Mg<sup>2+</sup>) tương đương với lượng CaCO<sub>3</sub> là 450 mg/L.<br/>Để mẫu nước này đạt tiêu chuẩn tối đa cho phép về nước sinh hoạt theo QCVN 01-1:2018/BYT (độ cứng tối đa quy về CaCO<sub>3</sub> là 300 mg/L), hộ gia đình quyết định sử dụng hoá chất soda (Na<sub>2</sub>CO<sub>3</sub>) để kết tủa bớt các ion kim loại. Tính khối lượng Na<sub>2</sub>CO<sub>3</sub> tối thiểu cần dùng để xử lý 2 m<sup>3</sup> nước giếng khoan trên đạt chuẩn.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) K cho ngọn lửa màu tím, Ba cho ngọn lửa màu lục<br/>b) Lượng nước cứng cần loại bỏ là 450 – 300 = 150 mg/L<br/>Khối lượng CaCO<sub>3</sub> cần loại bỏ trong 2m<sup>3</sup> nước là 150.2 = 300 g",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 20
      },
      {
        "id": "hoa12_ck2_de10_p4_q3",
        "number": 3,
        "part": 4,
        "type": "essay",
        "text": "a) Cho một lượng dư NH<sub>3</sub> vào dung dịch muối CoCl<sub>2</sub> thì thấy màu sắc của dung dịch bị thay đổi. Hiện tượng này xảy ra là do toàn bộ các phối tử nước trong phức chất aqua bị thay thế bởi các phối tử NH<sub>3</sub> tạo thành phức chất mới có dạng bát diện. Viết phương trình hóa học của phản ứng thế phối tử đã xảy ra.<br/>b) Chuẩn độ hàm lượng ion Fe<sup>2+</sup> trong môi trường acid (chứa trong bình tam giác) bằng dung dịch KMnO<sub>4</sub>đã biết nồng độ (chứa trên burette). Trong quá trình chuẩn độ, nếu dung dịch trên burette được thêm vào bình tam giác quá nhanh thì trong bình sẽ xuất hiện kết tủa nâu MnO<sub>2</sub>theo phương trình hóa học dưới đây, dẫn đến sai lệch kết quả chuẩn độ:<br/>Giả sử một học sinh thao tác chuẩn độ sai, làm 55% lượng MnO<sub>4</sub><sup>-</sup> chuẩn độ chuyển thành MnO<sub>2</sub> (phần còn lại vẫn phản ứng tạo Mn<sup>2+</sup>), tổng lượng Fe<sup>2+</sup> bị oxi hóa là 2,4 mmol. Thể tích dung dịch KMnO<sub>4</sub> 0,02M đã dùng tăng bao nhiêu mL so với khi chuẩn độ với thao tác phù hợp.",
        "images": [],
        "correctAnswer": "Xem lời giải tự luận chi tiết",
        "explanation": "Đáp án:<br/>a) [Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 6NH<sub>3</sub>  [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup> + 6H<sub>2</sub>O<br/>b) Theo đề bài: kết quả chuẩn độ mol Fe<sup>2+</sup> trong dung dịch là 2,4 mmol.<br/>Trường hợp học sinh đó thực hiện đúng<br/>MnO<sub>4</sub><sup>-</sup>(aq) +8 H<sup>+</sup>(aq) + 5Fe<sup>2+</sup>(aq) → MnO<sub>2</sub>(s) + 5Fe<sup>3+</sup> + 8H<sub>2</sub>O(l)<br/>0,48←2,4<br/>Trường hợp học sinh đó thực hiện sai<br/>MnO<sub>4</sub><sup>-</sup>(aq) + 4H<sup>+</sup>(aq) + 3Fe<sup>2+</sup>(aq) → MnO<sub>2</sub>(s) + 3Fe<sup>3+</sup> + 2H<sub>2</sub>O(l)<br/>a → 3a<br/>MnO<sub>4</sub><sup>-</sup>(aq) + 8H<sup>+</sup>(aq) + 5Fe<sup>2+</sup>(aq) → MnO<sub>2</sub>(s) + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O(l)<br/>b →5b<br/>Ta có:  và 3a + 5b = 2,4<br/>Thể tích tăng thêm là  – 24 = 6,77 mL<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 21
      }
    ]
  }
];

export function getFinal2ExamById(id: string): Chuong1Exam | undefined {
  return HOA12_FINAL2_EXAMS.find(e => e.id === id || e.code === id);
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
