// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI GIỮA HỌC KÌ 1 HÓA HỌC 12 (CTGDPT 2018 - THI 2025)
 * Bộ 10 Đề Thi Giữa Học Kì 1 Hóa Học Lớp 12 Chuẩn Cấu Trúc 2025
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

export const HOA12_MIDTERM_EXAMS: Chuong1Exam[] = [
  {
    "id": "hoa12_gk1_de01",
    "code": "H12-GK1-01",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 1",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 20,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de01_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên gọi của ester HCOOCH<sub>3</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "methyl acetate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "methyl formate",
            "isCorrect": true
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
            "text": "ethyl acetate",
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
        "id": "hoa12_gk1_de01_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thành phần chính của xà phòng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "muối của acid béo",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "muối của acid vô cơ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "muối sodium hoặc potassium của acid béo",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "muối sodium hoặc potassium của acid",
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
        "id": "hoa12_gk1_de01_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Carbohydrate nào sau đây thuộc loại polysaccharide?",
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
            "text": "Fructose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Saccharose",
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
        "id": "hoa12_gk1_de01_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Maltose được tạo ra từ quá trình nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thuỷ phân saccharose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thuỷ phân tinh bột",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Kết hợp glucose và fructose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lên men ethanol",
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
        "id": "hoa12_gk1_de01_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đồ thị sau đây biểu diễn sự thay đổi về lượng glucose trong máu của một người sử dụng đồ uống có đường sau 8 giờ nhịn ăn:<br/>Khi sử dụng đồ uống có đường, nồng độ glucose trong máu tăng cao nhất sau khi",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de1_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sử dụng khoảng 20 phút",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sử dụng khoảng 2 giờ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sử dụng khoảng 50 phút",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sử dụng khoảng 3 giờ",
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
        "id": "hoa12_gk1_de01_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là amine bậc một?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>NHC<sub>2</sub>H<sub>5</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(CH<sub>3</sub>)<sub>2</sub>NH",
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
            "text": "C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>",
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
        "id": "hoa12_gk1_de01_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất H<sub>2</sub>NCH<sub>2</sub>COOH có tên gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "valine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "lysine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "alanine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "glycine",
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
        "id": "hoa12_gk1_de01_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho lòng trắng trứng vào nước, sau đó đun sôi. Hiện tượng xảy ra là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "xuất hiện kết tủa màu đỏ gạch",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "xuất hiện dung dịch màu tím",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "lòng trắng trứng sẽ đông tụ lại",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "xuất hiện dung dịch màu xanh lam",
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
        "id": "hoa12_gk1_de01_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng và chất giặt rửa tổng hợp không có đặc điểm chung nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Là muối dễ tan",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có tính chất giặt rửa",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tạo thành dung dịch dễ thấm ướt quần áo",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Là sản phẩm từ thiên nhiên",
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
        "id": "hoa12_gk1_de01_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Phân tử cellulose được cấu tạo từ các đơn vị - glucose.<br/>(b) Saccharose là chất rắn, vị ngọt, tan tốt trong nước ở điều kiện thường.<br/>(c) Maltose là đồng phân của saccharose.<br/>(d) Maltose có vị ngọt hơn glucose.<br/>(e) Saccharose và maltose đều có cấu tạo dạng mạch hở và mạch vòng.<br/>Số phát biểu đúng là",
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
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk1_de01_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thí nghiệm tạo phức của methylamine:<br/>- Bước 1: Cho khoảng 2 mL dung dịch CuSO<sub>4</sub> 0,1 M vào ống nghiệm.<br/>- Bước 2: Thêm từ từ dung dịch methylamine 0,1 M vào ống nghiệm, lắc đều.<br/>Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có thể thay dung dịch CuSO<sub>4</sub> bằng dung dịch CuCl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sau bước 2 thu được dung dịch trong suốt, không màu",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu thay methylamine bằng ethylamine thì hiện tượng quan sát được sau bước 2 không đổi",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng trên thể hiện tính base của methylamine",
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
        "id": "hoa12_gk1_de01_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Amino acid X chứa một nhóm -NH<sub>2</sub> và một nhóm -COOH trong phân tử. Y là ester của X với alcohol đơn chức, M<sub>Y</sub> = 89. Công thức của X, Y lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "H<sub>2</sub>N-CH<sub>2</sub>-COOH, H<sub>2</sub>N-CH<sub>2</sub>-COOCH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>N-[CH<sub>2</sub>]<sub>2</sub>-COOH, H<sub>2</sub>N-[CH<sub>2</sub>]<sub>2</sub>-COOC<sub>2</sub>H<sub>5</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>2</sub>N-[CH<sub>2</sub>]<sub>2</sub>-COOH, H<sub>2</sub>N-[CH<sub>2</sub>]<sub>2</sub>-COOCH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>N-CH<sub>2</sub>-COOH, H<sub>2</sub>N-CH<sub>2</sub>-COOC<sub>2</sub>H<sub>5</sub>",
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
        "id": "hoa12_gk1_de01_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Aspirin (acetylsalicylic acid) được sử dụng làm thuốc giảm đau, hạ sốt. Sau khi uống, aspirin bị thủy phân trong cơ thể tạo thành salicylic acid. Salicylic acid ức chế quá trình sinh tổng hợp prostaglandin (chất gây đau, sốt và viêm khi nồng độ trong máu cao hơn bình thường).",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de1_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong công thức phân tử của aspirin có 6 nguyên tử carbon.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Aspirin có nhóm chức ester và nhóm carboxyl trong công thức.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phần trăm khối lượng oxygen trong salicylic acid là 29,63%.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thủy phân aspirin trong cơ thể tạo môi trường acid.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Trong công thức phân tử của aspirin có 9 nguyên tử C.<br/>b) Đúng.<br/>c) Sai. Công thức của salicylic acid là C<sub>7</sub>H<sub>6</sub>O<sub>3</sub> nên:<br/>16.3%O.100%34,78%12.7616.3==++<br/>d) Đúng. Do sản phẩm thủy phân tạo 2 acid là salicylic acid và acetic acid.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de01_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Glutamic acid có vai trò quan trọng trong quá trình xây dựng cấu trúc tế bào của con người. Ngoài ra, muối monosodium glutamate còn được dùng chế biến gia vị thức ăn (bột ngọt hay mì chính). Glutamic acid có cấu trúc như hình vẽ bên dưới và có điểm đẳng điện pI = 3,2 (pI là giá trị pH mà khi đó amino acid có nồng độ ion lưỡng cực là cực đại. Khi pH < pI thì amino acid đó tồn tại chủ yếu ở dạng cation, còn khi pH > pI thì amino acid đó tồn tại chủ yếu ở dạng anion).",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Glutamic acid thuộc loại hợp chất hữu cơ tạp chức, trong phân tử chứa hai loại nhóm chức.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tên thay thế của glutamic acid là 2-aminopentane-1,5-oic acid.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong dung dịch pH = 3,2, glutamic acid tồn tại chủ yếu ở dạng HOOC–CH<sub>2</sub>–CH<sub>2</sub>–CH(NH<sub>2</sub>)–COO<sup>-</sup>.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong dung dịch pH = 6, có thể tách hỗn hợp gồm glutamic acid và lysine (pI = 9,7) bằng phương pháp điện di.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng, vì glutamic acid trong phân tử có 2 loại nhóm chức (amino –NH₂, carboxyl –COOH).<br/>b) Sai. Tên gọi đúng là 2-aminopentane-1,5-dioic acid.<br/>c) Sai. Tại pH = pI (= 3,2) glutamic acid tồn tại ion lưỡng cực<br/>HOOC – CH₂ – CH₂ – CH(NH₃⁺) – COO⁻<br/>d) Đúng. Tại pH = 6, glutamic acid tồn tại dạng anion, lysine tồn tại dạng cation. Đặt hai ion này trong điện trường, các amino acid sẽ di chuyển về cực khác nhau.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de01_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Số triglyceride thỏa mãn khi xà phòng hóa hoàn toàn thu được glycerol cùng hỗn hợp chỉ gồm muối của palmitic acid và stearic acid?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>Các triglyceride thỏa mãn là:",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de01_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Từ 1 tấn tinh bột ngô có thể sản xuất được bao nhiêu lít xăng E5 (chứa 5% ethanol về thể tích), biết tinh bột ngô chứa 75% tinh bột, hiệu suất chung của cả quá trình điều chế ethanol là 70%, khối lượng riêng của ethanol là 0,789 g/mL (làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "7558",
        "explanation": "Đáp án: 7558.<br/>m<sub>tinh bột</sub> = 1.75% = 0,75 tấn = 750 kg.<br/>2HOenzymeenzyme6105n612625(CHO)nCHO2nCHOH+¾ → ¾ → <br/>162 gam → 92 gam<br/>750 kg 25H70%CHOHKhối lượng C<sub>2</sub>H<sub>5</sub>OH thu được với H = 70%:<br/>m<sub>ethanol</sub> = \\frac{750 · 92}{162} · 70% ≈ 298,148 kg.<br/>Thể tích ethanol nguyên chất: V<sub>ethanol</sub> = \\frac{298,148}{0,789} ≈ 377,88 L.<br/>Thể tích xăng E5 pha chế được: V<sub>E5</sub> = \\frac{377,88}{5%} = 7557,6 L ≈ 7558 L.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de01_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho công thức cấu tạo của peptide sau:<br/>Có bao nhiêu liên kết peptide trong cấu tạo của peptide trên?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de1_image5.png"
        ],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de01_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Aniline có thể được tổng hợp từ benzene theo sơ đồ chuyển hoá sau:<br/>Theo sơ đồ trên, từ 1 tấn benzene sẽ điều chế được bao nhiêu kg aniline? Biết hiệu suất toàn bộ quá trình là 60%. (Làm tròn kết quả đến hàng đơn vị)",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de1_image6.png"
        ],
        "correctAnswer": "715",
        "explanation": "Đáp án: 715.<br/>Sơ đồ: Benzene → …. → Aniline<br/>78 93<br/>Khối lượng aniline thu được từ 1 tấn benzene với hiệu suất 60%:<br/>m<sub>aniline</sub> = \\frac{1 · 93}{78} · 60% ≈ 0,71538 tấn = 715 kg.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de01_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Số đồng phân cấu tạo ester có cùng công thức phân tử C<sub>4</sub>H<sub>8</sub>O<sub>2</sub> là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Có 4 đồng phân cấu tạo ester có CTPT C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>:<br/>1. HCOOCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub> (propyl formate)<br/>2. HCOOCH(CH<sub>3</sub>)<sub>2</sub> (isopropyl formate)<br/>3. CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub> (ethyl acetate)<br/>4. CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub> (methyl propionate)",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk1_de01_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Amine X gây ra mùi tanh của cá mè có thành phần khối lượng gồm: 61,02% C; 15,25% H; 23,73% N. Phân tử khối của X bằng 59 và phân tử có tính đối xứng cao. Số nguyên tử hydrogen trong một phân tử X là bao nhiêu?",
        "images": [],
        "correctAnswer": "9",
        "explanation": "Đặt CTPT của X là C<sub>x</sub>H<sub>y</sub>N<sub>z</sub>.<br/>Ta có x : y : z = (61,02/12) : (15,25/1) : (23,73/14) = 5,085 : 15,25 : 1,695 = 3 : 9 : 1.<br/>CTĐG là (C<sub>3</sub>H<sub>9</sub>N)<sub>n</sub> với M = 59 &rArr; n = 1 &rArr; CTPT là C<sub>3</sub>H<sub>9</sub>N.<br/>Do phân tử đối xứng cao nên X là trimethylamine (CH<sub>3</sub>)<sub>3</sub>N có 9 nguyên tử hydrogen.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa12_gk1_de02",
    "code": "H12-GK1-02",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 2",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 20,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de02_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để biến một số dầu thực vật thành mỡ rắn hoặc bơ nhân tạo người ta thực hiện quá trình này sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cô cạn ở nhiệt độ cao",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hydrogen hóa (xt, t<sup>o</sup>, p)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Làm lạnh",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng xà phòng hóa",
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
        "id": "hoa12_gk1_de02_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thành phần chính của chất giặt rửa tổng hợp thường là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "muối sodium, potassium của acid béo",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "muối sodium của acid vô cơ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "muối sodium alkylsulfate, sodium alkylbenzene sulfonate, …",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "glycerol và ethylene glycol",
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
        "id": "hoa12_gk1_de02_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi bị ốm, mất sức, nhiều người bệnh thường được truyền dịch đường để bổ sung nhanh năng lượng. Chất trong dịch truyền có tác dụng trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Glucose",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Saccharose",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fructose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Maltose",
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
        "id": "hoa12_gk1_de02_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biết cấu tạo của saccharose như sau:<br/>Cho các phát biểu sau:<br/>(a) Phân tử saccharose có 8 nhóm hydroxy (-OH).<br/>(b) Hai đơn vị glucose và fructose trong phân tử saccharose liên kết với nhau qua nguyên tử oxygen.<br/>(c) Saccharose không có nhóm aldehyde nên không có phản ứng tráng bạc.<br/>(d) Dung dịch saccharose hòa tan được Cu(OH)<sub>2</sub> ở nhiệt độ thường do có nhiều nhóm -OH kề nhau.<br/>Số phát biểu đúng là",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de2_image2.png"
        ],
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
            "text": "2",
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
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de02_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử cellulose cấu tạo từ các đơn vị nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "α-glucose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "β-glucose",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Fructose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Galactose",
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
        "id": "hoa12_gk1_de02_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất C<sub>2</sub>H<sub>5</sub>NHC<sub>2</sub>H<sub>5</sub> có tên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ethylmethylamine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dimethylamine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "propylamine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "diethylamine",
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
        "id": "hoa12_gk1_de02_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho ba dung dịch có cùng nồng độ mol sau: (1) CH<sub>3</sub>CH<sub>2</sub>COOH, (2) CH<sub>3</sub>CH(NH<sub>2</sub>)COOH, (3) CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub>. Dãy sắp xếp theo chiều giảm dần pH của các dung dịch trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(3), (2), (1)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(3), (1), (2)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1), (3), (2)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1), (2), (3)",
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
        "id": "hoa12_gk1_de02_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong môi trường kiềm, protein có phản ứng màu biuret với",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Mg(OH)<sub>2</sub>",
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
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cu(OH)<sub>2</sub>",
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
        "id": "hoa12_gk1_de02_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong số các chất sau đây, chất nào có nhiệt độ sôi lớn nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>5</sub>OH",
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
            "text": "CH<sub>3</sub>CHO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOCH<sub>3</sub>",
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
        "id": "hoa12_gk1_de02_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cơ chế giặt rửa của xà phòng là do muối acid béo trong xà phòng có đặc điểm nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có nhóm –COONa hoặc COOK tan trong dầu, mỡ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Có phần gốc hydrocarbon R– tan được trong nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có phản ứng thuỷ phân trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có tính chất hoạt động bề mặt gồm một phần kị nước và một phần ưa nước",
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
        "id": "hoa12_gk1_de02_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuốc thử để phân biện ethylamine và dimethylamine là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HNO<sub>2</sub>",
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
            "text": "quỳ tím",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "FeCl<sub>3</sub>",
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
        "id": "hoa12_gk1_de02_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai khi nói về enzyme?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phần lớn enzyme là những protein xúc tác cho các phản ứng hóa học và sinh hóa",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tốc độ phản ứng có xúc tác enzyme thường nhanh hơn nhiều lần so với với xúc tác hóa học",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tốc độ phản ứng có xúc tác enzyme thường chậm hơn nhiều lần so với với xúc tác hóa học",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Enzyme có tính chọn lọc cao, mỗi enzyme chỉ xúc tác cho một hoặc một số phản ứng nhất định",
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
        "id": "hoa12_gk1_de02_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Trong nhiều năm, một số nghiên cứu đã phát hiện ra rằng việc tiêu thụ acid béo Omega-3 như docosahexanoic acid (DHA) giúp giảm tử vong cho nhiều người mắc bệnh tim mạch. Công thức cấu tạo của DHA như sau:",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de2_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "DHA có công thức phân tử là 22322CHO .",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "DHA bị oxi hoá chậm bởi không khí khi sử dụng trong thời gian dài.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "DHA có chứa 6 liên kết p trong phân tử.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "DHA có mạch carbon dài nên không tan trong nước.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Sai. DHA có chứa 7 liên kết pi.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de02_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Thủy phân hoàn toàn 1 mol peptide X, thu được 1 mol glycine (Gly), 1 mol alanine (Ala), 2 mol valine (Val) và 1 mol phenylalanine (Phe, có cấu tạo như hình bên).<br/>Thủy phân không hoàn toàn X thu được dipeptide Phe-Val và tripeptide Val-Ala-Gly nhưng không thu được dipeptide Val-Val.",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de2_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X là pentapeptide.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khối lượng phân tử của peptide X là 491.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Peptide X có amino acid đầu C là Val.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Có 1 công thức cấu tạo duy nhất thỏa mãn tính chất của peptide X.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng. Khối lượng phân tử của X là 75 + 89 + 117.2 + 165 – 18.4 = 491.<br/>c) Đúng.<br/>d) Sai. Có 2 công thức cấu tạo thỏa mãn: Phe-Val-Ala-Gly-Val, Val-Ala-Gly-Phe-Val.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de02_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu đồng phân cấu tạo là amine bậc I ứng với công thức C<sub>4</sub>H<sub>11</sub>N?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub>, CH3CH2CHNH2CH3 , CH3CHCH3CH2NH2 , CH3CNH2CH3CH3 .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de02_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các amine: methylamine, ethylamine, propylamine, dimethylamine, diethylamine. Có bao nhiêu amine thể khí điều kiện thường trong các chất trên?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de02_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Một loại gương soi có diện tích bề mặt là 0,8 m<sup>2</sup>. Để tráng được 1080 chiếc gương trên với độ dày lớp bạc được tráng là 0,2 mm thì cần dùng m gam glucose tác dụng với lượng dư dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub>. Biết hiệu suất phản ứng tráng bạc là 75% và khối lượng riêng của bạc là 10,49 g/cm<sup>3</sup>. Giá trị của m bằng bao nhiêu? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "2014",
        "explanation": "Đáp án: 2014.<br/>m<sub>Ag (1 gương)</sub> = 0,8.10<sup>4</sup>.0,2.10<sup>-4</sup>.10,49 = 1,6784 gam<br/>m<sub>Ag (1080 gương)</sub> = 1,6784.1080 = 1812,672 gam<br/>Sơ đồ phản ứng:<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> 33AgNO/NH → → 2Ag<br/>n<sub>Ag</sub> = \\frac{1812,672}{108} = 16,784 mol.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2Ag.<br/>Khối lượng glucose cần dùng (H = 75%):<br/>m<sub>glucose</sub> = \\frac{16,784 · 180}{2 · 75%} = 2014,08 gam ≈ 2014 gam.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de02_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Xà phòng hóa hoàn toàn 300 gam chất béo A với lượng vừa đủ dung dịch chứa 1 mol KOH. Sản phẩm thu được sau phản ứng gồm muối carboxylate và 29,44 gam glycerol. Sau khi thêm các chất phụ gia cần thiết thì thu được xà phòng (các muối carboxylate trong xà phòng chiếm 60% khối lượng xà phòng). Biết mỗi bánh xà phòng có trọng lượng là 90g, số bánh xà phòng sản xuất được là bao nhiêu? (Lấy kết quả đến hàng phần nguyên)",
        "images": [],
        "correctAnswer": "6",
        "explanation": "Đáp án: 6.<br/>Ta có: n<sub>KOH</sub> = 1 mol và nglycerol = 0,32 mol<br/>Nhận thấy: n<sub>KOH</sub>> nglycerol nên chất béo A gồm các triglyceride có lẫn các acid béo.<br/>⇒ n<sub>acid béo</sub> = 1 – 3.0,32 = 0,04 mol 2HOacidnn0,04molÞ==<br/>Áp dụng định luật bảo toàn khối lượng ta có:<br/>m<sub>A</sub> + m<sub>KOH</sub> = m<sub>muối</sub> + m<sub>glycerol</sub> + m<sub>nước</sub><br/>⇒ m<sub>muối</sub> = 300 + 1.56 – 29,44 – 0,04.18 = 325,84 gam.<br/>Khối lượng bánh xà phòng (muối chiếm 60%): m<sub>xà phòng</sub> = \\frac{325,84}{60%} = 543,07 gam.<br/>Số bánh xà phòng (mỗi bánh 90 gam): n = \\frac{543,07}{90} ≈ 6,03 bánh ≈ 6 bánh.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de02_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Số amino acid có cùng công thức phân tử C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub> là bao nhiêu?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Có 2 amino acid có cùng CTPT C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub>:<br/>1. CH<sub>3</sub>-CH(NH<sub>2</sub>)-COOH (alanine hay &alpha;-alanine)<br/>2. H<sub>2</sub>N-CH<sub>2</sub>-CH<sub>2</sub>-COOH (&beta;-alanine)",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk1_de02_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Để sản xuất 15,4 triệu miếng cao dán giảm đau khi vận động thể thao, biết mỗi miếng chứa 105 mg methyl salicylate (C<sub>8</sub>H<sub>8</sub>O<sub>3</sub>) và phản ứng ester hóa từ salicylic acid (C<sub>7</sub>H<sub>6</sub>O<sub>3</sub>) đạt hiệu suất 70%, khối lượng salicylic acid tối thiểu cần dùng là bao nhiêu tấn? (Làm tròn đến một chữ số thập phân).",
        "images": [],
        "correctAnswer": "2.1",
        "explanation": "m(methyl salicylate) = 15,4 &times; 10<sup>6</sup> &times; 105 &times; 10<sup>-9</sup> = 1,617 tấn.<br/>n(methyl salicylate) = 1,617 / 152 &approx; 0,010638 kmol.<br/>Vì H = 70%, khối lượng salicylic acid cần dùng là: m = (0,010638 &times; 138) / 0,7 &approx; 2,1 tấn.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa12_gk1_de03",
    "code": "H12-GK1-03",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 3",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 19,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de03_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ester nào sau đây có mùi thơm của chuối chín?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Isoamyl acetate",
            "isCorrect": true
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
            "text": "Isopropyl acetate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Benzyl acetate",
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
        "id": "hoa12_gk1_de03_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phần kị nước trong xà phòng và chất giặt rửa là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhóm carboxylate",
            "isCorrect": false
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
            "text": "gốc hydrocarbon dài",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhóm sulfonate",
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
        "id": "hoa12_gk1_de03_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất X được sinh ra trong quá trình quang hợp của cây xanh. Ở nhiệt độ thường, X tạo với dung dịch iodine hợp chất có màu xanh tím. Chất X là",
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
            "text": "cellulose",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "glycogen",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tinh bột",
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
        "id": "hoa12_gk1_de03_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Xà phòng là sản phẩm của phản ứng xà phòng hóa.<br/>(b) Muối sodium hoặc potassium của acid hữu cơ là thành phần chính của xà phòng.<br/>(c) Khi đun nóng chất béo với dung dịch NaOH hoặc KOH, thu được xà phòng.<br/>(d) Có thể sản xuất được xà phòng từ các alkane mạch dài thu được từ chế biến dầu mỏ.<br/>Các phát biểu đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a), (b), (c)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(a), (c), (d)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(a), (c)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(a), (b), (d)",
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
        "id": "hoa12_gk1_de03_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các nghiên cứu về cấu tạo cho biết glucose có một dạng mạch hở và hai dạng mạch vòng (α-glucose và β-glucose) chuyển hóa qua lại lẫn nhau như hình sau:<br/>Phát biểu nào sau đây đúng?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de3_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở dạng mạch hở, phân tử glucose có 5 nhóm hydroxy và một nhóm chức ketone",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhóm –OH ở vị trí carbon số 6 trong glucose dạng mạch vòng gọi là –OH hemiacetal",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Glucose có phản ứng hòa tan Cu(OH)<sub>2</sub> ở điều kiện thường tạo dung dịch phức màu tím",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Glucose có phản ứng làm mất màu dung dịch nước bromine",
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
        "id": "hoa12_gk1_de03_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhỏ dung dịch của mỗi chất methylamine, ethylamine, ammonia, aniline vào các mẩu giấy quỳ tím riêng rẽ. Trường hợp nào mẩu giấy quỳ tím không bị chuyền thành màu xanh?",
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
            "text": "Ethylamine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ammoina",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Aniline",
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
        "id": "hoa12_gk1_de03_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "“Amino acid là hợp chất hữu cơ tạp chức, trong phân tử chứa đồng thời nhóm chức …(1)…và nhóm chức …(2)…”. Nội dung phù hợp trong ô trống (1), (2) lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "carboxyl (-COOH), amino (-NH<sub>2</sub>)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "carboxyl (-COOH), hydroxyl (-OH)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hydroxyl (-OH), amino (-NH<sub>2</sub>)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "carbonyl (-CO-), carboxyl (-COOH)",
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
        "id": "hoa12_gk1_de03_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất nào sau đây thuộc loại protein?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Saccharose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Triglyceride",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Albumin",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cellulose",
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
        "id": "hoa12_gk1_de03_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thủy phân triglyceride (C<sub>17</sub>H<sub>35</sub>COO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub> trong dung dịch NaOH, thu được muối có tên gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "sodium stearate",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sodium palmitate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "sodium oleate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "sodium acetate. <div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\"></th><th class=\"px-2 py-1 border border-slate-300\"></th><th class=\"px-2 py-1 border border-slate-300\"></th><th class=\"px-2 py-1 border border-slate-300\"></th></tr></table></div>",
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
        "id": "hoa12_gk1_de03_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi cho dung dịch saccharose vào ống nghiệm chứa Cu(OH)<sub>2</sub>/NaOH, lắc nhẹ ống nghiệm thì thấy có hiện tượng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Kim loại màu vàng sáng bám trên bề mặt ống nghiệm",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Kết tủa màu đỏ gạch xuất hiện trong ống nghiệm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dung dịch trở nên đồng nhất và có màu xanh lam",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất lỏng trong ống nghiệm tách thành hai lớp và xuất hiện kết tủa màu xanh nhạt lắng xuống đáy ống nghiệm",
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
        "id": "hoa12_gk1_de03_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kết quả phân tích nguyên tố của hợp chất amine thơm X có phần trăm khối lượng các nguyên tố như sau: %C = 78,51%; %H = 8,41%; %N = 13,08%. Từ phổ khối lượng (MS) xác định được phân tử khối của X bằng 107. Ứng với công thức phân tử của X, có bao nhiêu amine thơm bậc một, kể cả X?",
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
        "id": "hoa12_gk1_de03_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thủy phân hoàn toàn 1 mol pentapeptide X, thu được 2 mol glycine (Gly), 1 mol alanine (Ala), 1 mol valine (Val) và 1 mol phenylalanine (Phe). Thủy phân không hoàn toàn X thu được hỗn hợp dipeptide Val-Phe, tripeptide Gly-Ala-Val nhưng không thu được dipeptide Gly-Gly. Chất X có công thức là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Gly-Phe-Gly-Ala-Val",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Gly-Ala-Val-Val-Phe",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Gly-Ala-Val-Phe-Gly",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Val-Phe-Gly-Ala-Gly",
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
        "id": "hoa12_gk1_de03_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Glycine là α–amino acid đơn giản nhất",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Glycine còn có tên gọi khác là aminoethanoic acid.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Dung dịch glycine không làm đổi màu quỳ tím.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Glycine tác dụng với acid mạnh tạo muối ammonium.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ở trạng thái tinh khiết, glycine tồn tại ở dạng muối 22H NCHCOO- .",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. Ở trạng thái tinh khiết, glycine tồn tại ở dạng muối 23H NCHCOO+- .",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de03_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành điều chế ethyl acetate theo các bước như hình sau:<br/>Bước 1: Cho 10 mL C<sub>2</sub>H<sub>5</sub>OH (D = 0,78 g/cm<sup>3</sup>) cùng với 10 mL CH<sub>3</sub>COOH (D = 1,05 g/cm<sup>3</sup>), vài giọt dung dịch H<sub>2</sub>SO<sub>4</sub> đặc và lắc đều bình cầu.<br/>Bước 2: Đun nóng bình cầu đến 70<sup>o</sup>C trong khoảng từ 5 đến 6 phút.<br/>Bước 3: Các chất thu được ở bình nón được thêm tiếp vào 2 mL dung dịch NaCl bão hòa.",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de3_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 2, trong bình cầu có phản ứng ester hóa sau:",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở bước 3, dung dịch NaCl bão hòa có vai trò làm tăng hiệu suất phản ứng ester hóa.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sau bước 2, các chất C<sub>2</sub>H<sub>5</sub>OH và CH<sub>3</sub>COOH vẫn còn trong bình cầu.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Giả sử hiệu suất của phản ứng đạt 40%, khối lượng ester thu được là 5,97 gam (kết quả đã được làm tròn đến hàng phần trăm).",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. NaCl bão hòa có tác dụng tách lớp este.<br/>c) Đúng.<br/>d) Đúng. 253CHOHCHCOOH10.0,787,8g;m10.1,0510,5gm====<br/>CH<sub>3</sub>COOH + HOCH<sub>2</sub>CH<sub>3</sub> o24HSOd,t ⇌ ⇌ CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub> + H<sub>2</sub>O<br/>0,17539/23039/230<br/>m<sub>ester</sub> = 39.88.40%5,97g230=",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de03_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất: CH<sub>3</sub>[CH<sub>2</sub>]<sub>14</sub>COONa, CH<sub>3</sub>[CH<sub>2</sub>]<sub>10</sub>CH<sub>2</sub>OSO<sub>3</sub>Na, C<sub>2</sub>H<sub>5</sub>OSO<sub>3</sub>Na, CH<sub>3</sub>[CH<sub>2</sub>]<sub>16</sub>COOK, CH<sub>3</sub>[CH<sub>2</sub>]<sub>11</sub>C<sub>6</sub>H<sub>4</sub>CO<sub>3</sub>Na, CH<sub>3</sub>[CH<sub>2</sub>]<sub>16</sub>COONa. Có bao nhiêu chất là thành phần chính của chất giặt rửa tổng hợp?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de03_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho methylamine lần lượt tác dụng với dung dịch HCl, dung dịch FeCl<sub>3</sub>, dung dịch NaOH, dung dịch Br<sub>2</sub>, HNO<sub>2</sub>. Có bao nhiêu trường hợp xảy ra phản ứng?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de03_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cellulose trinitrate được điều chế từ nitric acid và cellulose (hiệu suất phản ứng 90% tính theo nitric acid). Để có 14,85 kg cellulose trinitrate cần V lít dung dịch nitric acid 96% (D = 1,5 g/mL). Giá trị của V là bao nhiêu? (Làm tròn kết quả đến hàng phần mười)",
        "images": [],
        "correctAnswer": "7.3",
        "explanation": "Đáp án: 7,3.<br/>[C<sub>6</sub>H<sub>7</sub>O<sub>2</sub>(OH)<sub>3</sub>]<sub>n</sub> + 3nHNO<sub>3</sub> → [C<sub>6</sub>H<sub>7</sub>O<sub>2</sub>(NO<sub>3</sub>)<sub>3</sub>]<sub>n</sub> + 3nH<sub>2</sub>O<br/>189n gam →297n gam<br/>X kg14,85 kg<br/>m<sub>HNO3 nguyên chất</sub> = \\frac{14,85 · 189n}{297n · 90%} = 10,5 kg.<br/>m<sub>dung dịch HNO3 96%</sub> = \\frac{10,5}{96%} = 10,9375 kg.<br/>V<sub>dung dịch HNO3 96%</sub> = \\frac{10,9375}{1,5} ≈ 7,29 L ≈ 7,3 L.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de03_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Hydrogen chất béo lỏng để chuyển thành chất béo rắn là quá trình phá vỡ các liên kết C=C để chuyển thành các liên kết C-C.<br/>Chất béo E có chứa X và các triglyceride no. Hydrogen hóa hoàn toàn 10 kg E thu được tối đa 10,05 kg chất béo no. Thành phần % theo khối lượng của X có trong E là bao nhiêu %? (Làm tròn kết quả đến hàng phần mười).",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de3_image6.jpg"
        ],
        "correctAnswer": "71.2",
        "explanation": "Đáp án: 71,2.<br/>(C<sub>15</sub>H<sub>31</sub>COO)(C<sub>17</sub>H<sub>33</sub>COO)(C<sub>17</sub>H<sub>29</sub>COO)C<sub>3</sub>H<sub>5</sub><br/>n<sub>chất béo</sub> = \\frac{n_{H2}}{3} = \\frac{0,075}{3} = 0,025 kmol.<br/>% khối lượng chất béo X trong mẫu dầu:<br/>%m<sub>X</sub> = \\frac{0,025 · 854}{30} · 100% ≈ 71,2%.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de03_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Naftifine là một hợp chất có hoạt tính chống nấm được sử dụng trong y tế. Trong cấu trúc phân tử của naftifine, nguyên tử nitrogen liên kết với 3 gốc hydrocarbon. Naftifine thuộc loại amine bậc mấy?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Trong phân tử naftifine, nguyên tử nitrogen liên kết trực tiếp với ba gốc hydrocarbon nên naftifine thuộc loại amine bậc ba.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 5
      }
    ]
  },
  {
    "id": "hoa12_gk1_de04",
    "code": "H12-GK1-04",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 4",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 19,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de04_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sáp ong do ong thợ tiết ra, xây dựng thành tổ ong để lưu trữ mật ong và bảo vệ ấu trùng. Sáp ong có thành phần chính là triacontanyl palmitate (C<sub>15</sub>H<sub>31</sub>COOC<sub>30</sub>H<sub>61</sub>). Ester này thuộc loại",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "không no, đa chức",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "không no, đơn chức",
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
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de04_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất giặt rửa tổng hợp thường là muối sodium alkylsulfate hoặc sodium alkylbenzene sulfonate, được tổng hợp hoá học và có tác dụng giặt rửa như xà phòng. Chất nào sau đây thuộc loại chất giặt rửa tổng hợp?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>[CH<sub>2</sub>]<sub>11</sub>OSO<sub>3</sub>Na",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>[CH<sub>2</sub>]<sub>14</sub>COONa",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>[CH<sub>2</sub>]<sub>16</sub>COONa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>[CH<sub>2</sub>]<sub>7</sub>CH=CH[CH<sub>2</sub>]<sub>7</sub>COONa",
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
        "id": "hoa12_gk1_de04_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tinh bột thuộc loại polysaccharide, là một trong những chất dinh dưỡng cơ bản của người và động vật. Phân tử tinh bột được tạo thành từ nhiều đơn vị",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "α-fructose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "α-glucose",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "β-fructose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "β-glucose",
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
        "id": "hoa12_gk1_de04_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Glucose quan trọng đối với cơ thể sống vì nó",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "là nguồn cung cấp nước và carbon dioxide",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cung cấp năng lượng cho quá trình sinh hoá tế bào",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "xúc tác cho các quá trình sinh hoá",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "làm giảm quá trình oxi hoá của gốc tự do",
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
        "id": "hoa12_gk1_de04_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất nào sau đây là amino acid?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>NHCH<sub>2</sub>CH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>NCH(CH<sub>3</sub>)COOH",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "HOCH<sub>2</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "H<sub>2</sub>NCH<sub>2</sub>COOCH<sub>3</sub>",
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
        "id": "hoa12_gk1_de04_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện thường, amine nào sau đây là chất khí, có mùi khai và tan nhiều trong nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Diethylamine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Propylamine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Aniline",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methylamine",
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
        "id": "hoa12_gk1_de04_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phản ứng với nước bromine, aniline thể hiện phản ứng nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng cộng halogen vào nhóm –NH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thế hydrogen của nhóm –NH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng cộng hợp halogen vào vòng benzene",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thế hydrogen trên vòng benzene",
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
        "id": "hoa12_gk1_de04_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây có phản ứng màu biuret?",
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
            "text": "Triolein",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Aniline",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Albumin",
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
        "id": "hoa12_gk1_de04_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất béo X là thành phần chính trong một loại dầu thực vật và có cấu tạo như sau:<br/>Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở điều kiện thường, X là chất lỏng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X có 6 liên kết trong phân tử",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thủy phân hoàn toàn X trong môi trường kiềm thu được ba muối",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Công thức phân tử của X là C<sub>55</sub>H<sub>98</sub>O<sub>6</sub>",
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
        "id": "hoa12_gk1_de04_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hằng ngày, cơ thể chúng ta cần cung cấp nhiều thực phẩm có nguồn gốc là carbohydrate như tinh bột, saccharose, glucose, fructose, cellulose….Cho các phát biểu về các carbohydrate như sau:<br/>(a) Glucose phản ứng với methanol khi có mặt HCl khan tạo thành methyl gluconate.<br/>(b) Cellulose và tinh bột đều là các polysaccharide có phân tử khối rất lớn, nhưng phân tử khối của cellulose lớn hơn nhiều so với tinh bột.<br/>(c) Amylopectin được cấu tạo từ nhiều đơn vị \\alpha -glucose liên kết với nhau qua liên kết \\alpha-1,4 -glycoside và \\alpha-1,6 -glycoside hình thành cấu tạo mạch phân nhánh.<br/>(d) Phân tử maltose tồn tại dạng mở vòng và dạng vòng, phân tử saccharose chỉ tồn tại ở dạng vòng.<br/>Số phát biểu đúng là",
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
            "text": "2",
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
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk1_de04_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Theo nguồn gốc, chất giặt rửa được chia thành hai loại: chất giặt rửa tự nhiên và chất giặt rửa tổng hợp. Phát biểu nào sau đây là không đúng?",
        "images": [],
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
            "text": "Phân tử chất giặt rửa tổng hợp có phần kị nước là gốc hydrocarbon mạch dài tương tự như xà phòng",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất giặt rửa tổng hợp dễ bị phân huỷ sinh học bởi các vi sinh vật hơn xà phòng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Từ nguồn nguyên liệu dầu mỏ, có thể sản xuất được cả xà phòng và chất giặt rửa tổng hợp",
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
        "id": "hoa12_gk1_de04_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tùy theo pH môi trường mà amino acid có thể tồn tại dưới dạng tích điện âm, tích điện dương hoặc trung hòa về điện (ion lưỡng cực). Giá trị pH mà tại đó amino acid tồn tại ở dạng ion lưỡng cực gọi là pH đẳng điện hay pI. Giá trị pI của glutamic acid, glycine, arginine được cho dưới đây:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">Chất</th><th class=\"px-2 py-1 border border-slate-300\">Glutamic acid</th><th class=\"px-2 py-1 border border-slate-300\">Glycine</th><th class=\"px-2 py-1 border border-slate-300\">Arginine</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">pI</td><td class=\"px-2 py-1 border border-slate-300\">3,08</td><td class=\"px-2 py-1 border border-slate-300\">5,97</td><td class=\"px-2 py-1 border border-slate-300\">10,76</td></tr></table></div><br/>Cho các phát biểu sau về quá trình điện di hỗn hợp X gồm glutamic acid, glycine và arginine:<br/>(a) Với môi trường \\mathrm{pH}=5,97 glycine hầu như không di chuyển trong điệ̣n trường.<br/>(b) Với môi trường \\mathrm{pH}=5,97 glutamic acid trở thành cation và di chuyển về cực âm.<br/>(c) Với môi trường \\mathrm{pH}=5,97 arginine trở thành dạng anion và di chuyển về cực dương.<br/>(d) Với môi trường \\mathrm{pH}=5,97 có thể tách riêng các amino acid trong hỗn hợp X.<br/>Các nhận định đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a), (d)",
            "isCorrect": true
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
            "text": "(c), (d)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(b), (c)",
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
        "id": "hoa12_gk1_de04_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Trong phòng thí nghiệm, ethyl acetate được điều chế từ acetic acid và ethanol, xúc tác H<sub>2</sub>SO<sub>4</sub> đặc, theo mô hình thí nghiệm sau:<br/>Biết nhiệt độ trong bình cầu (4) giữ ở mức 65-70°C, nhiệt độ trong ống sinh hàn (3) duy trì ở 25°C. Sau thí nghiệm, tiến hành phân tách sản phẩm. Ghi phổ hồng ngoại của acetic acid, ethanol và ethyl acetate. Cho biết số sóng hấp thụ đặc trưng của một số liên kết trên phổ hồng ngoại như sau:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">Liên kết</th><th class=\"px-2 py-1 border border-slate-300\">O-H (alcohol)</th><th class=\"px-2 py-1 border border-slate-300\">O-H (carboxylic acid)</th><th class=\"px-2 py-1 border border-slate-300\">C=O (ester, carboxylic acid)</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Số sóng (cm-1)</td><td class=\"px-2 py-1 border border-slate-300\">3650 - 3200</td><td class=\"px-2 py-1 border border-slate-300\">3300 - 2500</td><td class=\"px-2 py-1 border border-slate-300\">1780 - 1650</td></tr></table></div>",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de4_image10.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất lỏng trong bình hứng (5) có ethyl acetate.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Vai trò của ống sinh hàn (3) để ngưng tụ hơi; nước đi vào từ vị trí (1) và đi ra ở vị trí (2).",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nhiệt độ phản ứng ở bình cầu (4) càng cao thì phản ứng điều chế ethyl acetate xảy ra càng nhanh.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dựa vào phổ hồng ngoại, phân biệt được acetic acid, ethanol và ethyl acetate.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng<br/>b) Đúng, ống sinh hàn tạo nhiệt độ thấp để hơi ester ngưng tụ, H<sub>2</sub>O lạnh vào ở vị trí thấp, ra ở vị trí cao.<br/>c) Sai, nhiệt độ cao làm C<sub>2</sub>H<sub>5</sub>OH (có nhiệt độ sôi thấp hơn CH<sub>3</sub>COOH) thoát ra mạnh làm phản ứng thuận chậm lại. Nhiệt độ cao cũng thúc đẩy các phản ứng phụ do có H<sub>2</sub>SO<sub>4</sub> đặc trong bình.<br/>d) Đúng, do có nhóm chức khác nhau nên dựa vào phổ hồng ngoại, phân biệt được acetic acid, ethanol và ethyl acetate.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de04_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Peptide X có công thức cấu tạo như sau:",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de4_image11.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch X làm quỳ tím chuyển sang màu xanh.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thủy phân X có thể thu được tối đa 5 dipeptide.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thủy phân hoàn toàn X trong dung dịch NaOH dư đun nóng, thu được tối đa 4 muối.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X là hexapeptide.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>X là Lys-Ala-Gly-Ala-Gly-Glu<br/>(a) Sai. X có 2NH<sub>2</sub> và 2COOH nên dung dịch X không làm đổi màu quỳ tím.<br/>(b) Sai. Thủy phân X có thể thu được tối đa 4 dipeptide, gồm Lys-Ala; Ala-Gly; Gly-Ala; Gly-Glu.<br/>(c) Đúng. Thủy phân hoàn toàn X trong dung dịch NaOH dư đun nóng, thu được tối đa 4 muối, gồm LysNa, AlaNa, GlyNa, GluNa<sub>2</sub>.<br/>(d) Đúng. X có 6 mắt xích nên X là hexapeptide.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de04_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Docosahexaenoic acid (DHA) thuộc loại acid béo omega–n, là thành phần quan trọng của não người, vỏ não, da và võng mạc. Docosahexaenoic acid có công thức cấu tạo như sau:<br/>Giá trị của n là bao nhiêu?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de4_image12.png"
        ],
        "correctAnswer": "3",
        "explanation": "DHA là một acid béo không no omega-3 (vị trí liên kết đôi đầu tiên ở C-3 tính từ đầu methyl ω) ⟹ n = 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de04_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Tổng diện tích đất châu Á bao gồm rừng, đất nông nghiệp, đồng cỏ, sa mạc khoảng 45,0 triệu km<sup>2</sup>. Hằng năm, trung bình khối lượng 2CO được cố định là 440 tấn/km<sup>2</sup> bởi quá trình quang hợp ở cây xanh: ()as2261052chlorophylln6nCO5nHOCHO6nO → → ++<br/>Trong thị trường tín chỉ carbon (thị trường được tạo ra với mục đích đưa mức phát thải khí nhà kính về 0 (Net zero)) thì mỗi tấn 2CO bằng 1 tín chỉ carbon.<br/>Số tín chỉ carbon được tạo ra ở châu Á hằng năm từ quá trình quang hợp là x tỉ tín chỉ. Giá trị của x bằng bao nhiêu?",
        "images": [],
        "correctAnswer": "19.8",
        "explanation": "Đáp án: 19,8.<br/>Khối lượng CO<sub>2</sub> trong sa mạc là 45,0.10<sup>6</sup>.440 = 1,98.10<sup>10</sup>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de04_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Trong dung môi nước, methylamine thể hiện là một base Brønsted theo cân bằng:<br/>32233CHNHHOCHNHOH+-++ 4CK4,2.10-= (ở 25Co )<br/>Bỏ qua sự điện li của nước, giá trị pH của dung dịch 32CHNH 0,1M ở 25Co bằng bao nhiêu? (Làm tròn kết quả đến hàng phần mười.)",
        "images": [],
        "correctAnswer": "11.8",
        "explanation": "Đáp án: 11,8.<br/>32233CHNHHOCHNHOH+-++ 4CK4,2.10-=<br/>[]: 0,1 - x x x<br/>K<sub>b</sub> = \\frac{x^2}{0,1 - x} = 4,2 · 10<sup>-4</sup> ⇒ x = [OH<sup>-</sup>] ≈ 0,00627 M.<br/>pOH = -log(0,00627) ≈ 2,2 ⇒ pH = 14 - pOH = 14 - 2,2 = 11,8.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de04_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Chỉ số xà phòng hoá là số miligam KOH cần để xà phòng hoá 1 g chất béo. Theo TCVN 6044:2013. CODEX STAN 211-1999, chỉ số xà phòng hoá trung bình của chất béo trong mỡ bò là 195. Khi xà phòng hoàn toàn 600 kg mỡ bò thu được trong quá trình chế biến thực phẩm để nấu xà phòng, lượng NaOH cần lấy ít nhất là bao nhiêu kg? Biết mỡ bò chứa 96% chất béo. (Làm tròn kết quả đến hàng phần mười)",
        "images": [],
        "correctAnswer": "80.2",
        "explanation": "Đáp án: 80,2.<br/>Số mol KOH để xà phòng hoá hoàn toàn 1 gam chất béo 3195.1056-== số mol NaOH Trong 600 kg mỡ bò có ()600.96%576kg= chất béo .<br/>m<sub>NaOH</sub> = \\frac{195 · 10^{-3} · 40}{56} · 576 · 10^3 ≈ 80228,6 gam ≈ 80,2 kg.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de04_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Số đồng phân cấu tạo amine có cùng công thức phân tử C<sub>3</sub>H<sub>9</sub>N là bao nhiêu?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Có 4 đồng phân amine ứng với CTPT C<sub>3</sub>H<sub>9</sub>N:<br/>- Bậc 1 (2 chất): CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub>, CH<sub>3</sub>CH(NH<sub>2</sub>)CH<sub>3</sub><br/>- Bậc 2 (1 chất): CH<sub>3</sub>CH<sub>2</sub>NHCH<sub>3</sub><br/>- Bậc 3 (1 chất): (CH<sub>3</sub>)<sub>3</sub>N",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 5
      }
    ]
  },
  {
    "id": "hoa12_gk1_de05",
    "code": "H12-GK1-05",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 5",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 18,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de05_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho một số acid béo thường gặp dưới đây:<br/>Số acid béo thuộc nhóm omega-6 là",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de5_image2.png"
        ],
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
            "text": "1",
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
        "id": "hoa12_gk1_de05_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho 10 mL ethyl acetate cốc chứa 10 mL nước cất, thấy chất lỏng trong cốc thành hai lớp. Nhận xét nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lớp phía trên chỉ chứa ethyl acetate và lớp phía dưới chỉ chứa nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lớp phía trên chỉ chứa nước và lớp phía dưới chỉ chứa ethyl acetate",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lớp phía trên chỉ chứa ethyl acetate và lớp phía dưới chứa hỗn hợp ethyl acetate và nước",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Lớp phía trên chỉ chứa nước và lớp phía dưới chỉ chứa hỗn hợp ethyl acetate và nước",
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
        "id": "hoa12_gk1_de05_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các đường saccharose, maltose, glucose, fructose, đường không có tính khử là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "maltose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "fructose",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "saccharose",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "glucose",
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
        "id": "hoa12_gk1_de05_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi tiến hành thí nghiệm với nitric acid đặc, nếu không cẩn thận có thể bị dính nitric acid vào tay. Khi đó, tại chỗ bị dính nitric acid, da tay bị chuyển thành",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "màu vàng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "màu đen",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "màu hồng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "màu tím",
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
        "id": "hoa12_gk1_de05_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các enzyme đóng vai trò quan trọng đối với cơ thể sinh vật, như làm xúc tác cho các quá trình sinh hoá và hoá học. Cho các phát biểu sau về enzyme:<br/>(a) Tác dụng xúc tác của enzyme có tính chọn lọc cao.<br/>(b) Các enzyme có tác dụng làm tăng tốc độ của các quá trình sinh hoá.<br/>(c) Các enzyme có tác dụng xúc tác tố ở nhiệt độ cao hoặc môi trường acid mạnh.<br/>(d) Các enzyme chỉ hoạt động trong điều kiện nhiệt độ phù hợp.<br/>Số phát biểu đúng là",
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
            "text": "1",
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
        "id": "hoa12_gk1_de05_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện nay, thuốc kháng histamine được sử dụng khá phổ biến trong điều trị dị ứng. Công thức cấu tạo của histamine như hình vẽ. Bậc amine của nguyên tử nitrogen số 2 là",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de5_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "bậc một",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "bậc hai",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "bậc ba",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "bậc bốn",
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
        "id": "hoa12_gk1_de05_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mùi tanh của cá là hỗn hợp các amine và một số tạp chất khác. Để khử mùi tanh của cá trước khi chế biến, biện pháp nào sau đây là phù hợp nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ngâm cá thật lâu trong nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Rửa cá bằng giấm ăn",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Rửa cá bằng dung dịch baking soda (chứa 3NaHCO )",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Rửa cá bằng dung dịch thuốc tím",
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
        "id": "hoa12_gk1_de05_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đặt dung dịch hỗn hợp các amino acid gồm lysine, alanine, valine và glutamic acid ở pH6,0= vào trong một điện trường. Amino acid sẽ dịch chuyển về phía cực dương là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "lysine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "glutamic acid",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "valine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "alanine",
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
        "id": "hoa12_gk1_de05_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi xà phòng hoặc chất giặt rửa tan vào nước, chúng tạo thành dung dịch có sức căng bề mặt nhỏ, giúp vật cần giặt rửa dễ thấm ướt. Phần nào trong xà phòng và chất giặt rửa thâm nhập vào vết bẩn và chia vết bẩn thành những hạt nhỏ phân tán vào nước?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phần ưa nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phần kị nước",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Gốc hydrocarbon",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Gốc carboxylate",
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
        "id": "hoa12_gk1_de05_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tinh bột và cellulose là các polymer thiên nhiên. Con người có thể tiêu hóa tinh bột nhưng không thể tiêu hóa cellulose. Nguyên nhân của sự khác biệt này là do",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "số đơn vị mắt xích trong các phân tử tinh bột và cellulose là khác nhau",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phần trăm khối lượng carbon trong cellulose lớn hơn so với tinh bột",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cách liên kết giữa các đơn vị mắt xích ở mỗi loại phân tử",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phân tử cellulose không phân nhánh",
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
        "id": "hoa12_gk1_de05_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các amino acid có nhiệt độ nóng chảy cao và tan tốt trong nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở điều kiện thường, các amino acid là những chất rắn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hầu hết các amino acid thiên nhiên thuộc loại a -amino acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Gycine là b -amino acid",
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
        "id": "hoa12_gk1_de05_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ethyl alcohol được điều chế bằng cách lên men tinh bột theo sơ đồ:<br/>()enzyme enzyme6105612625nCHOCHOCHOH → → → → <br/>Để điều chế 100 lít ethyl alcohol 40<sup>o</sup> cần m kg nguyên liệu (chứa 50% tinh bột, còn lại là tạp chất trợ không bị thủy phân). Biết hiệu suất của cả quá trình là 46% và khối lượng riêng của ethyl alcohol nguyên chất là 0,8 g/mL. Giá trị của m gần nhất với giá trị nào dưới đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "980",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "123",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "490",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "245",
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
        "id": "hoa12_gk1_de05_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho khoảng 1 mL dầu thực vật (dầu dừa) vào ống nghiệm chứa 2 mL dung dịch H<sub>2</sub>SO<sub>4</sub> 1M (ống thứ nhất) và 5 mL dung dịch NaOH 20% (ống thứ hai, lượng kiềm đã được tính toán lấy dư so với lượng phản ứng), sau đó ngâm trong nồi nước nóng (khoảng 70 - 80<sup>o</sup>C) và khuấy đều.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Khi ngâm trong cốc nước nóng và khuấy đều, tại các ống nghiệm đều xảy ra phản ứng thủy phân.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong ống nghiệm thứ nhất, luôn xuất hiện váng mỡ khi ngừng khuấy.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong ống nghiệm thứ hai, nếu không xuất hiện váng mỡ chứng tỏ phản ứng thủy phân đã xảy ra hoàn toàn.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sau một thời gian thí nghiệm, lượng H<sub>2</sub>SO<sub>4</sub> và NaOH trong các ống nghiệm đều giảm đi.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. Phản ứng thủy phân chất béo trong môi trường acid và base.<br/>b) Đúng. Phản ứng thủy phân chất béo trong môi trường acid là phản ứng thuận nghịch nên luôn có một váng mỡ nổi lên trên bề mặt chất lỏng.<br/>c) Đúng. Phản ứng thủy phân chất béo trong môi trường base là phản ứng một chiều nên váng mỡ bị hòa tan hết trong dung dịch kiềm.<br/>d) Sai. Chất xúc tác H<sub>2</sub>SO<sub>4</sub> không bị mất đi trong quá trình phản ứng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de05_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Amine thơm X (C<sub>6</sub>H<sub>7</sub>N), ở điều kiện thường là chất lỏng, dễ bị oxi hóa khi để ngoài không khí.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X làm chuyển màu quỳ tím sang màu xanh.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X tác dụng với nước bromine tạo kết tủa trắng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X tác dụng với nitrous acid ở nhiệt độ thấp (0 – 5<sup>o</sup>C) tạo thành muối diazonium.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tên thay thế của X là phenylamine.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Aniline không làm đổi màu.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. Tên thay thế của X là benzenamine.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de05_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Thuỷ phân không hoàn toàn tetrapeptide Ala-Gly-Glu-Val thì có thể thu được tối đa bao nhiêu dipeptide?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de05_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Isoamyl acetate có mùi thơm đăc trưng của chuối chín nên còn được gọi là dầu chuối. Khi đun nóng hỗn hợp gồm 16,2 g acetic acid và 15,2g isoamyl alcohol (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH<sub>2</sub>OH với xúc tác H<sub>2</sub>SO<sub>4</sub> đặc, thu được 14,16 g dầu chuối. Hiệu suất của phản ứng điều chế dầu chuối là a %. Xác định giá trị của a. (Không làm tròn các phép tính trung gian, chỉ làm tròn kết quả cuối cùng đến hàng phần mười).",
        "images": [],
        "correctAnswer": "63.1",
        "explanation": "Đáp án: 63,1.<br/>aceticacidisoamylalcoholester19177n0,27mol;nmol;nmol1101625===<br/>PTHH: CH<sub>3</sub>COOH + (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH<sub>2</sub>OH o24HSO®Æc,t ⇌ CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>O<br/>Hiệu suất phản ứng tính theo alcohol:<br/>H% = \\frac{17,7 / 130}{19 / 88} · 100% = \\frac{0,136}{0,216} · 100% ≈ 63,1%.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de05_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Kết quả phân tích nguyên tố của một -amino acid X như sau: \\% \\mathrm{C}=46,60 \\% ; %H8,74%;= \\% \\mathrm{H}=8,74 \\% ; \\% \\mathrm{ N}=13,59 \\% (về khối lượng); còn lại là oxygen. Bằng phổ khối lượng (\\mathrm{MS}) , xác định được phân tử khối của X bằng 103. Có bao nhiêu đồng phần cấu tạo của X thỏa mãn?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Gọi công thức phân tử của X là C<sub>x</sub>H<sub>y</sub>O<sub>z</sub>N<sub>t</sub><br/>Ta có: 46,68,7431,0713,59x:y:z:t:::3,88:8,74:1,94:0,974:9:2:11211614===<br/>CTĐG: C<sub>4</sub>H<sub>9</sub>O<sub>2</sub>N<br/>Từ phổ khối lượng, X có phân tử khối bằng 103 (C<sub>4</sub>H<sub>9</sub>O<sub>2</sub>N)<sub>n</sub> = 103<br/>Mà 103n = 103 n = 1. CTPT: C<sub>4</sub>H<sub>9</sub>O<sub>2</sub>N<br/>",
        "explanationImages": [
          "/assets/hoa12/midterm/h12_gk1_de5_image19.png"
        ],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de05_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Trong máu người trưởng thành, khỏe mạnh vào lúc đói (8 giờ sau ăn) có lượng đường huyết trong khoảng 4,4 – 7,2 mmol/L (theo quyết định số 5481/QĐ-BYT ngày 30 tháng 12 năm 2020 của Bộ Y tế). Cho các nhận định sau:<br/>(1) Lượng đường huyết là lượng đường glucose trong máu.<br/>(2) Kết quả xét nghiệm đường huyết của anh A vào buổi sáng (lúc chưa ăn) là 152 mg/dL (biết rằng 1 L = 10 dL). Anh A có lượng đường huyết thấp hơn mức giới hạn bình thường.<br/>(3) Lúc đói nếu ăn thực phẩm chứa tinh bột thì lượng đường huyết sẽ tăng trong một khoảng thời gian nhất định.<br/>(4) Khi bị hạ đường huyết thì nên uống một cốc nước đường ấm.<br/>Liệt kê các phát biểu đúng theo dãy số thứ tự tăng dần.",
        "images": [],
        "correctAnswer": "134",
        "explanation": "Đáp án: 134.<br/>(2) Nồng độ glucose trong máu của anh A là: 111152mgdLdL108,4mmolLL180gammol---×´»×× cao hơn so với mức giới hạn.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      }
    ]
  },
  {
    "id": "hoa12_gk1_de06",
    "code": "H12-GK1-06",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 6",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 19,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de06_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Acid béo omega-3 và omega-6 có tác dụng giảm huyết áp, giảm chlolessterol trong máu và ngăn chặn sự hình thành các mảng triglyceride bám trên động mạch. Nguồn cung cấp acid béo omega-3 và omega-6 cho cơ thể chủ yếu từ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "protein",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chất béo",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tinh bột",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đường mía",
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
        "id": "hoa12_gk1_de06_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điểm chung về cấu tạo của xà phòng và chất giặt rửa tổng hợp là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phân tử gồm phần ưa nước (chức acid) và phần kị nước (gốc hydrocarbon mạch lớn)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phân tử gồm phần ưa nước (chức muối) và phần kị nước (gốc hydrocarbon mạch lớn)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đều dễ tan trong nước do tạo liên kết hydrogen với nước qua phần ưa nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "có kích thước nhỏ nên dễ xâm nhập vào giữa các phân tử nước làm giảm sức căng bề mặt của nước",
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
        "id": "hoa12_gk1_de06_p1_q3",
        "number": 3,
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
            "text": "Saccharose",
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
        "id": "hoa12_gk1_de06_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất X thường sử dụng để sản xuất bia và chủ yếu được tạo ra trong quá trình thủy phân tinh bột. Chất X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "maltose",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "fructose",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "glucose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "saccharose",
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
        "id": "hoa12_gk1_de06_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong quá trình lên men một carbohydrate, biểu đồ nào dưới đây thể hiện tốt nhất vai trò xúc tác của enzyme cho sự hình thành sản phẩm [P] theo thời gian?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "",
            "image": "/assets/hoa12/midterm/h12_gk1_de6_image2.png",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "",
            "image": "/assets/hoa12/midterm/h12_gk1_de6_image3.png",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "",
            "image": "/assets/hoa12/midterm/h12_gk1_de6_image4.png",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "",
            "image": "/assets/hoa12/midterm/h12_gk1_de6_image5.png",
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
        "id": "hoa12_gk1_de06_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tên gốc chứa của amine có công thức cấu tạo CH<sub>3</sub>-CH(NH<sub>2</sub>)-CH<sub>3</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "propyl amine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "propan-1-amine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "isopropylamine",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "propan-2-amine",
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
        "id": "hoa12_gk1_de06_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây về methylamine và methane là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong cùng điều kiện về áp suất, nhiệt độ sôi của methylamine cao hơn của methane",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giữa các phân tử methylamine không tạo được liên kết hydrogen",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở điều kiện thường, methylamine là chất lỏng và methane là chất khí",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Methylamine và methane đều tan kém trong nước",
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
        "id": "hoa12_gk1_de06_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các hợp chất có công thức cấu tạo dưới đây:<br/>Những hợp chất nào trong số các chất trên thuộc loại α-amino acid?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de6_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất (2), (3) và (4)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất (1) và (2)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chất (1) và (3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất (1), (2) và (4)",
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
        "id": "hoa12_gk1_de06_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi đun nóng protein trong dung dịch acid hoặc kiềm hoặc dưới tác dụng của các enzyme, protein bị thủy phân thành ..(1).., cuối cùng thành ..(2)..",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1) phân tử protein nhỏ hơn; (2) amino acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(1) chuỗi polypeptide; (2) hỗn hợp các α-amino acid",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(1) chuỗi polypeptide; (2) amino acid",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(1) amino acid; (2) chuỗi polypeptide",
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
        "id": "hoa12_gk1_de06_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng về nước bồ kết?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước bồ kết là xà phòng dạng lỏng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Muối potassium của các acid béo không no là thành phần chính của nước bồ kết",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước bồ kết thuộc nhóm chất giặt rửa tự nhiên, không phải chất giặt rửa tổng hợp, cũng không phải là xà phòng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nước bồ kết thuộc nhóm chất giặt rửa tự nhiên vì được điều chế từ các acid béo sẵn có trong tự nhiên. Sử dụng các dữ kiện cho các câu số 11 và 12. Thực hiện phản ứng ester hóa giữa acetic acid và ethanol (xúc tác H<sub>2</sub>SO<sub>4</sub> đặc) theo phản ứng sau : CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH o24HSOñaëc,t ⇌ CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O",
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
        "id": "hoa12_gk1_de06_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tử oxygen trong phân tử H<sub>2</sub>O có nguồn gốc từ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phân tử acetic acid",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phân tử acetic acid hoặc phân tử ethanol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phân tử ethanol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phân tử chất xúc tác H<sub>2</sub>SO<sub>4</sub>",
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
        "id": "hoa12_gk1_de06_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sau phản ứng người ta tách riêng rẽ được ba chất hữu cơ là CH<sub>3</sub>COOH, C<sub>2</sub>H<sub>5</sub>OH, CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> đều ở dạng lỏng. Có ba học sinh đề nghị phương pháp sử dụng để nhận biết các chất hữu cơ là<br/>(1) phương pháp đo phổ hồng ngoại (IR).<br/>(2) phương pháp đo nhiệt độ sôi.<br/>(3) phương pháp quan sát màu sắc các chất.<br/>Phương pháp nào sử dụng để nhận biết được các chất đó?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chỉ (1) và (2)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chỉ (1) và (3)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chỉ (2) và (3)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cả (1), (2) và (3)",
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
        "id": "hoa12_gk1_de06_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Tiến hành thí nghiệm theo các bước sau:<br/>- Bước 1: Cho một nhúm bông (khoảng 2 gam) vào cốc chứa 20 mL dung dịch H<sub>2</sub>SO<sub>4</sub> 70%, dùng đũa thủy tinh khuấy nhẹ cho đến khi bông tan hết, thu được dung dịch (1).<br/>- Bước 2: Thêm tiếp dung dịch NaOH 1M vào dung dịch (1) cho đến khi quỳ tím chuyển sang màu xanh. Thêm khoảng 1 mL dung dịch CuSO<sub>4</sub> 5% và 1 mL dung dịch NaOH 1M nữa, thu được dung dịch (2).<br/>- Bước 3: Ngâm cốc đựng dung dịch (2) trong nồi nước nóng trong khoảng thời gian 10 phút.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 2, dung dịch thu được có màu xanh lam.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thủy phân cellulose xảy ra ở bước 1.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sau bước 3, trong cốc xuất hiện kết tủa màu đỏ gạch.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tại bước 1, có thể thay dung dịch H<sub>2</sub>SO<sub>4</sub> 70% bằng dung dịch H<sub>2</sub>SO<sub>4</sub> 98% thì kết quả các bước sau tương tự.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>Bước 1: Thủy phân cellulose trong H<sub>2</sub>SO<sub>4</sub> đặc, sản phẩm là glucose.<br/>Bước 2: Trung hòa H<sub>2</sub>SO<sub>4</sub>, tạo môi trường kiềm cho phản ứng và thực hiện phản ứng glucose hòa tan Cu(OH)<sub>2</sub> tạo phức xanh lam.<br/>Bước 3: Thực hiện phản ứng glucose khử Cu(OH)<sub>2</sub>/OH<sup>–</sup> khi đun nóng tạo kết tủa đỏ gạch Cu<sub>2</sub>O.<br/>a) Đúng.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Sai. H<sub>2</sub>SO<sub>4</sub> 98% háo nước rất mạnh sẽ làm cellulose mất nước và hóa than (C), sau đó C bị H<sub>2</sub>SO<sub>4</sub> đặc oxi hóa, các sản phẩm là CO<sub>2</sub>, SO<sub>2</sub>, H<sub>2</sub>O khác với kết quả ở trên.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de06_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Insulin là hormone do tuyến tuỵ tiết ra, giúp điều hoà lượng đường trong máu bằng cách thức đẩy tế bào sử dụng glucose làm năng lượng. Sự thiếu hụt insulin hoặc giảm đáp ứng với insulin có nguy cơ gây ra bệnh tiểu đường.<br/>Thuỷ phân không hoàn toàn một đoạn phân tử insulin thu được tripeptide X mạch hở Glu-Arg-Gly. Cho công thức cấu tạo và kí hiệu một số nhóm chức của các amino acid:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\"></th><th class=\"px-2 py-1 border border-slate-300\"></th><th class=\"px-2 py-1 border border-slate-300\"></th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Arginine (Arg)</td><td class=\"px-2 py-1 border border-slate-300\">Glutamic acid (Glu)</td><td class=\"px-2 py-1 border border-slate-300\">Glycine (Gly)</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử X còn nhóm carboxyl số (2) của Glu.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phân tử X, nhóm 2NH- số (1) của Arg đã tham gia tạo liên kết peptide.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tách biệt được hỗn hợp Glu, Arg, Gly bằng phương pháp điện di.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "X có amino acid đầu N là Glu, amino acid đầu C là Gly.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Trong phân tử X còn nhóm carboxyl số (1) của Glu.<br/>b) Sai. Trong phân tử X, nhóm 2NH- số (2) của Arg đã tham gia tạo liên kết peptide.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de06_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các amine: methylamine, ethylamine, propylamine, dimethylamine, diethylamine. Có bao nhiêu amine thể khí điều kiện thường trong các chất trên?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de06_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Tripsin là enzyme đặc hiệu xúc tác cho phản ứng thuỷ phân liên kết peptide để tạo thành lysine (Lys) hoặc peptide ngắn hơn có đầu N là lysine. Thuỷ phân peptide ứng với công thức cấu tạo là Gly-Ala-Lys-Val-Lys-Val-Gly khi có mặt enzyme tripsin có thể thu được bao nhiêu dipeptide?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>Để tạo ra lysine thì các dipeptide tạo kèm theo là Gly-Ala, Val-Gly.<br/>Dipeptide có đầu N là lysine là Lys-Val.<br/>Có tối đa 3 dipeptide được tạo ra.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de06_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Xà phòng hoá hoàn toàn 4,42 g triglyceride X bằng dung dịch NaOH dư, sau phản ứng thu được m gam hỗn hợp các muối sodium linoleate, sodium oleate và sodium stearate. Giá trị của m là bao nhiêu?",
        "images": [],
        "correctAnswer": "4.56",
        "explanation": "Đáp án: 4,56.<br/>Chất béo là: (C<sub>17</sub>H<sub>31</sub>COO)(C<sub>17</sub>H<sub>33</sub>COO)(C<sub>17</sub>H<sub>35</sub>COO)C<sub>3</sub>H<sub>5</sub>.<br/>Xét phản ứng xà phòng hoá: n <sub>chất béo</sub> = 0,005 mol = n <sub>glycerol</sub> = 3.n <sub>NaOH</sub><br/>m <sub>muối</sub> = m <sub>chất béo</sub> + m <sub>NaOH</sub> – m <sub>glycerol</sub> = 4,42 + 0,015.40 – 0,005.92 = 4,56 g.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de06_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Trong y học, glucose làm thuốc tăng lực cho người bệnh, dễ hấp thu và cung cấp khá nhiều năng lượng. Phản ứng oxi hóa glucose tạo thành CO<sub>2</sub> và H<sub>2</sub>O cung cấp năng lượng cho cơ thể. Một người bệnh được truyền hai chai chứa 500 mL dung dịch glucose 5%. Tính năng lượng tối đa bệnh nhân nhận được từ hai chai truyền glucose đó (làm tròn kết quả đến hàng đơn vị). Biết nhiệt tạo thành của glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, CO<sub>2</sub> và H<sub>2</sub>O lần lượt là –1271 kJ/mol, –393,5 kJ/mol và –285,8 kJ/mol; dung dịch glucose 5% có khối lượng riêng là 1,019 g/ml.",
        "images": [],
        "correctAnswer": "795",
        "explanation": "Đáp án: 795.<br/>6126222CHOOCOHO+ → + ; or298H2804,8kJ/molD=-<br/>Số mol glucose trong 2 chai: n = \\frac{2 · 500 · 1,02 · 5%}{180} = \\frac{17}{60} mol.<br/>Năng lượng tối đa bệnh nhân nhận được:<br/>Q = \\frac{17}{60} · 2804,8 ≈ 795 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de06_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Kết quả phân tích nguyên tố của ester đơn chức X cho thấy %C = 60%, %H = 8% về khối lượng, còn lại là oxygen. Trên phổ khối lượng MS của X có tín hiệu ion phân tử [M<sup>+</sup>] tại m/z = 100. Số nguyên tử carbon trong một phân tử ester X là bao nhiêu?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "%O = 100 - 60 - 8 = 32%.<br/>x : y : z = (60/12) : (8/1) : (32/16) = 5 : 8 : 2.<br/>CTĐG là (C<sub>5</sub>H<sub>8</sub>O<sub>2</sub>)<sub>n</sub> với M = 100 &rArr; n = 1 &rArr; CTPT C<sub>5</sub>H<sub>8</sub>O<sub>2</sub>. Vậy phân tử X có 5 nguyên tử carbon.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 5
      }
    ]
  },
  {
    "id": "hoa12_gk1_de07",
    "code": "H12-GK1-07",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 7",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 19,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de07_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Methyl acetate có mùi ngọt nhẹ, giống mùi nước tẩy sơn móng tay. Công thức cấu tạo của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOC<sub>2</sub>H<sub>5</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>COOCH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOCH<sub>3</sub>",
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
        "id": "hoa12_gk1_de07_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Loại dầu nào sau đây không phải là chất béo?",
        "images": [],
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
            "text": "Dầu vừng (mè)",
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
            "text": "Dầu mazut",
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
        "id": "hoa12_gk1_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "X, Y, Z là 3 chất hữu cơ được kí hiệu ngẫu nhiên trong số các chất HCOOCH<sub>3</sub>, CH<sub>3</sub>COOH, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH. Nhiệt độ sôi của X, Y, Z được cho trong bảng sau:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">Chất</th><th class=\"px-2 py-1 border border-slate-300\">X</th><th class=\"px-2 py-1 border border-slate-300\">Y</th><th class=\"px-2 py-1 border border-slate-300\">Z</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Nhiệt độ sôi (oC)</td><td class=\"px-2 py-1 border border-slate-300\">31,8</td><td class=\"px-2 py-1 border border-slate-300\">97,0</td><td class=\"px-2 py-1 border border-slate-300\">118,0</td></tr></table></div><br/>Các chất X, Y lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HCOOCH<sub>3</sub> và CH<sub>3</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>COOH và HCOOCH<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH và CH<sub>3</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOCH<sub>3</sub> và CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
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
        "id": "hoa12_gk1_de07_p1_q4",
        "number": 4,
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
            "text": "C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>",
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
        "id": "hoa12_gk1_de07_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận xét nào sau đây là không đúng về glucose và fructose?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đều tạo được dung dịch màu xanh lam khi tác dụng với Cu(OH)<sub>2</sub> trong môi trường kiềm",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đều tạo được kết tủa đỏ gạch Cu<sub>2</sub>O khi tác dụng với Cu(OH)<sub>2</sub>, đun nóng trong môi trường kiềm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đều làm mất màu nước bromine",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đều xảy ra phản ứng tráng bạc khi tác dụng với thuốc thử Tollens",
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
        "id": "hoa12_gk1_de07_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các amine CH<sub>3</sub>NH<sub>2</sub>, CH<sub>3</sub>NHCH<sub>3</sub>, CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub> tan nhiều trong nước. Nguyên nhân là do các amine này",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tạo được liên kết hydrogen với nước",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tạo được liên kết hydrogen liên phân tử với nhau",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hình thành lực tương tác van der Waals lớn giữa các phân tử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "đều ở thể khí nên dễ phân tán vào nước",
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
        "id": "hoa12_gk1_de07_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong phân tử chất nào sau đây có 2 nhóm amino (-NH<sub>2</sub>) và 1 nhóm carboxyl (-COOH)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fomic acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Lysine",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Alanine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Glutamic acid",
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
        "id": "hoa12_gk1_de07_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thủy phân tripeptide Y mạch hở thu được glycine, alanine và valine. Bằng các thí nghiệm khác đã xác định được Y có amino acid đầu C là valine, amino acid đầu N là glycine. Công thức cấu tạo của Y là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ala-Gly-Val",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Gly-Ala-Val",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Val-Gly-Ala",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Val-Ala-Gly",
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
        "id": "hoa12_gk1_de07_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để tẩy vết dầu, mỡ bám trên quần áo, sử dụng chất nào sau đây là phù hợp nhất?",
        "images": [],
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
        "correctAnswer": "D",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk1_de07_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong quá trình sản xuất bia bằng phương pháp lên men sinh học, dưới tác dụng của enzyme sẽ xảy ra quá trình chuyển hoá: X maltose Y. Các chất X, Y tương ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tinh bột và fructose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "cellulose và glucose",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cellulose và fructose",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tinh bột và glucose",
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
        "id": "hoa12_gk1_de07_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mùi tanh của cá chủ yếu được gây nên bởi một số amine, nhiều nhất là trimethylamine. Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trimethylamine là một amine bậc III",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức phân tử của trimethylamine là C<sub>3</sub>H<sub>9</sub>N",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tên gọi khác của trimethylamine là propan-1-amine",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để khử mùi tanh của cá nên rửa cá với giấm ăn",
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
        "id": "hoa12_gk1_de07_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một thí nghiệm được mô tả như hình bên dưới:<br/>Giá trị pH mà khi đó amino acid có nồng độ ion lưỡng cực là cực đại được gọi là điểm đẳng điện (kí hiệu là pI). Mỗi amino acid có điểm đẳng điện khác nhau: Alanine ( \\mathrm{pI}=6,0 ), Lysine ( \\mathrm{pI}=9,74 ) và glutamic acid ( \\mathrm{pI}=3,08 ). Khi \\mathrm{pH}<\\mathrm{pI} thì amino acid đó tồn tại chủ yếu ở dạng cation, còn khi \\mathrm{pH}>\\mathrm{pI} thì amino acid đó tồn tại chủ yếu ở dạng anion.<br/>Cho các nhận định sau:<br/>(a) Thí nghiệm trên biểu diễn tính điện li của amino acid.<br/>(b) Ion tồn tại chủ yếu đối với Lys là cation, sẽ di chuyển về cực âm của nguồn điện nên vệt (1) là cation của Lys.<br/>(c) Ion tồn tại chủ yếu đối với Ala là ion lưỡng cực, không di chuyển nên vệt (2) là Ala.<br/>(d) Ion tồn tại chủ yếu đối với Glu là anion, sẽ di chuyển về cực dương của nguồn điện nên vệt (3) là anion của Glu.<br/>Các nhận định đúng là",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de7_image2.png",
          "/assets/hoa12/midterm/h12_gk1_de7_image3.png"
        ],
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
            "text": "(b), (c), (d)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(a), (c), (d)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(a), (b), (c)",
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
        "id": "hoa12_gk1_de07_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Sodium lauryl sulfate là thành phần chính của chất giặt rửa tổng hợp và có công thức cấu tạo như sau:",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de7_image9.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phần A là phần kị nước, phần B là phần ưa nước.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi hòa tan vào nước, phần B sẽ hướng về phía dầu mỡ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sodium lauryl sulfate có thể được điều chế từ dầu mỏ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Công thức phân tử của sodium lauryl sulfate là C<sub>12</sub>H<sub>25</sub>NaO<sub>4</sub>S.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Phần A hướng vào dầu mỡ.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de07_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Khi nghiên cứu về tính base của amine, học sinh Minh cho rằng amine có tính base trong trong dung môi là nước, học sinh Vy lại cho rằng amine có tính base ngay cả khi không có dung môi.<br/>- Để chứng minh amine có tính base trong môi trường nước, Minh đã làm thí nghiệm sau:<br/>+ Bước 1: Lấy 5 mL dung dịch CH<sub>3</sub>NH<sub>2</sub> vào ống nghiệm, thêm tiếp vào ống nghiệm 1 giọt dung dịch phenolphthalein.<br/>+ Bước 2: Thêm tiếp dung dịch HCl vào ống nghiệm đến khi dung dịch trong suốt.<br/>- Để chứng minh amine có tính base ngay cả khi không có dung môi, Vy đã làm thí nghiệm bằng cách cho 2 lọ đều mở nắp chứa dung dịch CH<sub>3</sub>NH<sub>2</sub> đặc và HCl đặc lại gần nhau, thì thấy có khói trắng xuất hiện.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở thí nghiệm của bạn Minh, sau bước 1 dung dịch chuyển sang màu xanh.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở thí nghiệm của bạn Minh, chỉ cần tới bước 1 cũng chứng minh được CH<sub>3</sub>NH<sub>2</sub> có tính base.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khói trắng xuất hiện trong thí nghiệm của bạn Vy có công thức là CH<sub>3</sub>NH<sub>3</sub>Cl.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thí nghiệm của bạn Vy chứng minh được ngay cả không có dung môi nước CH<sub>3</sub>NH<sub>2</sub>cũng có tính base.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Môi trường base làm phenolphthalein chuyển màu hồng<br/>b) Đúng. Phenolphthalein là chất chỉ thị acid – base nên dựa vào sự chuyển màu của phenolphthalein cũng chứng minh được CH<sub>3</sub>NH<sub>2</sub> có tính base.<br/>c) Đúng. Khói trăng là các hạt nhỏ CH<sub>3</sub>NH<sub>3</sub>Cl.<br/>d) Đúng. CH<sub>3</sub>NH<sub>2</sub> có thể nhận proton từ HCl ngay cả khi không có dung môi nước, khi đó CH<sub>3</sub>NH<sub>2</sub> thể hiện tính base.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de07_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "L-Dopa là chất có thể chuyển hóa thành dopamin là một chất dẫn truyền thần kinh quan trọng. Công thức cấu tạo của L-dopa như sau:<br/>Tổng số nguyên tử trong một phân tử L-dopa là bao nhiêu?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de7_image10.png"
        ],
        "correctAnswer": "25",
        "explanation": "Đáp án: 25.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de07_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Chất hữu cơ Z chủ yếu được ứng dụng trong sản xuất chất bôi trơn, làm bóng bề mặt, xà phòng, làm cao su,… Từ dầu oliu, người ta tách được triolein và điều chế chất Z theo sơ đồ sau:<br/>Triolein ⎯⎯(+H₂, Ni, t°)→ X ⎯⎯(+NaOH, t°)→ Y ⎯⎯(+HCl)→ Z <br/>Theo sơ đồ trên, từ 100 kg triolein thu được tối đa bao nhiêu kg chất Z (giả sử hiện suất toàn bộ quá trình là 70%)? (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "67.5",
        "explanation": "Đáp án: 67,5.<br/>(C<sub>17</sub>H<sub>33</sub>COO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub> (884) ⎯⎯(+H₂, Ni, t°)→ (C<sub>17</sub>H<sub>35</sub>COO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub> ⎯⎯(+NaOH, t°)→ 3C<sub>17</sub>H<sub>35</sub>COONa ⎯⎯(+HCl)→ 3C<sub>17</sub>H<sub>35</sub>COOH (284).<br/>m<sub>Z</sub> = 3 × (100 / 884) × 70% × 284 = 67,5 kg.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de07_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Có 4 ống nghiệm đựng Cu(OH)<sub>2</sub> trong môi trường kiềm. Nhỏ từ từ vào từng ống nghiệm và khuấy đều dung dịch đựng các chất riêng rẽ sau: lòng trắng trứng, methylamine, aniline, glycine. Có bao nhiêu ống nghiệm chứa chất hoà tan được Cu(OH)<sub>2</sub>?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de07_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Xăng sinh học (biogasoline) là hỗn hợp xăng thông thường và cồn sinh học (bioethanol). Bioethanol là ethanol được sản xuất bằng phương pháp sinh hoá thông qua sự lên men các sản phẩm hữu cơ như tinh bột, cellulose. Giả thiết quá trình sản xuất bioethanol từ cellulose gồm hai giai đoạn với hiệu suất như sau:<br/>Từ 1 tấn bã mía (chứa 46% cellulose) sản xuất được V m<sup>3</sup> xăng E5 (chứa 5% ethanol về thể tích). Giá trị của V bằng bao nhiêu? (Làm tròn kết quả đến hàng phần trăm).",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de7_image12.png"
        ],
        "correctAnswer": "2.51",
        "explanation": "Đáp án: 2,51.<br/>n<sub>ethanol</sub> = \\frac{1000 · 46%}{162} · 2 · 69% · 55% ≈ 2,155 kmol.<br/>V<sub>ethanol nguyên chất</sub> = \\frac{2,155 · 46}{0,79} ≈ 125,48 L.<br/>V<sub>cồn 5°</sub> = \\frac{125,48}{5%} ≈ 2509,8 L ≈ 2,51 m³.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de07_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Một tripeptide X mạch hở được tạo thành từ 3 amino acid: alanine, glutamic acid và glycine. Phân tử tripeptide X có bao nhiêu liên kết peptide?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Một tripeptide mạch hở được tạo từ 3 đơn vị amino acid thì có số liên kết peptide = 3 - 1 = 2 liên kết peptide (-CONH-).",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 5
      }
    ]
  },
  {
    "id": "hoa12_gk1_de08",
    "code": "H12-GK1-08",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 8",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 20,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de08_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho ester (X) có cấu trúc như sau:<br/>Số sóng (cm<sup>-1</sup>) của nhóm C=O trên phổ IR của X có giá trị nào sau đây?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de8_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1730 – 1715",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "3000 – 3100",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1610 – 1110",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "3000 – 2700",
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
        "id": "hoa12_gk1_de08_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây là thành phần chính của xà phòng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>6</sub>H<sub>5</sub>COOK",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>15</sub>H<sub>3</sub><sub>1</sub>COOK",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CH<sub>3</sub>[CH<sub>2</sub>]<sub>11</sub>OSO<sub>3</sub>K",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>[CH<sub>2</sub>]<sub>11</sub>SO<sub>3</sub>K",
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
        "id": "hoa12_gk1_de08_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất tẩy rửa nên dùng để thay thế cho xà phòng trong trường hợp nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước dùng để tẩy rửa chất bẩn là nước cứng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nước dùng để tẩy rửa chất bẩn là nước mềm",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi vết bẩn không phải là vết dầu hoặc mỡ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi vết bẩn là những chất lòng hoặc rắn",
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
        "id": "hoa12_gk1_de08_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Glucose và fructose thuộc loại carbohydrate nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Monosaccharide",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Disaccharide",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Polysaccharide",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Oligosaccharide",
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
        "id": "hoa12_gk1_de08_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Fructose phản ứng với thuốc thử Tollens sinh ra ammonium gluconate.<br/>(b) Glucose phản ứng với Cu(OH)<sub>2</sub> trong dung dịch NaOH nóng tạo sodium gluconate.<br/>(c) Glucose phản ứng với nước bromine tạo gluconic acid.<br/>(d) Lên men rượu glucose sinh ra methanol và carbon dioxide.<br/>Các phát biểu đúng là",
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
            "text": "(b), (c), (d)",
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
            "text": "(b), (c)",
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
        "id": "hoa12_gk1_de08_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Saccharose được cấu tạo từ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "hai đơn vị glucose qua liên kết α – 1,4 – glycoside",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "một đơn vị glucose và một đơn vị fructose qua liên kết α – 1,4 – glycoside",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "hai đơn vị fructose qua liên kết β – 1,4 – glycoside",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "một đơn vị glucose và một đơn vị galactose qua liên kết α – 1,4 – glycoside",
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
        "id": "hoa12_gk1_de08_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Amylopectin khác biệt cơ bản với amylose ở điểm nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có cấu tạo mạch phân nhánh",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chỉ chứa liên kết α – 1,4 – glycoside",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Không tan trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tạo màu xanh tím với iodine",
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
        "id": "hoa12_gk1_de08_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất: triolein, cellulose, saccharose, tinh bột. Số chất bị thuỷ phân trong môi trường acid là",
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
        "id": "hoa12_gk1_de08_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Aniline được sử dụng trong công nghiệp dược phẩm để sản xuất thuốc giảm đau paracetamol. Công thức của aniline là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CH<sub>3</sub>NH<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(CH<sub>3</sub>)<sub>2</sub>NH",
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
            "text": "C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>",
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
        "id": "hoa12_gk1_de08_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tùy thuộc vào pH của dung dịch, alanine tồn tại một số dạng như sau:<br/>Khi pH = 14 thì alanine sẽ tồn tại dạng nào?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de8_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(1)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(2)",
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
        "correctAnswer": "C",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa12_gk1_de08_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Mỗi chuỗi polypeptide gồm các đơn vị …(1)… liên kết với nhau qua …(2)… theo một trật tự nhất định. Các cụm từ phù hợp cho mỗi khoảng trống trong câu trên lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "α – amino acid và liên kết peptide",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "monosaccharide và liên kết glycoside",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "α – amino acid và liên kết glycoside",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "monoasaccharide và liên kết peptide",
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
        "id": "hoa12_gk1_de08_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận định nào sau đây không đúng khi nói về enzyme?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Enzyme có bản chất là protein",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Enzyme là chất xúc tác hóa học trong các quá trình chuyển hóa",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Enzyme có tính chọn lọc cao",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Enzyme có ứng dụng quan trọng trong các công nghệ sinh học",
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
        "id": "hoa12_gk1_de08_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Propyl ethanoate là ester có mùi đặc trưng của quả lê, thu được khi cho ethanoate acid tác dụng với propyl alcohol có mặt H<sub>2</sub>SO<sub>4</sub> đặc làm xúc tác.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng điều chế ester ở trên là phản ứng thuận nghịch.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Công thức cấu tạo của ester trên là CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hiệu suất phản ứng có thể đạt tối đa là 100%.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi hệ đạt tới trạng thái cân bằng, nếu thêm nước thì lượng ester thu được sẽ tăng lên.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Công thức cấu tạo là CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>.<br/>c) Sai. Hiệu suất phản ứng luôn nhỏ hơn 100%.<br/>d) Sai. Khi thêm nước cân bằng chuyển dịch theo chiều nghịch và làm giảm lượng ester thu được.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de08_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Trong cây thuốc lá có nicotine. Đây là một hợp chất gây nghiện. Công thức cấu tạo của nicotine được cho ở hình bên dưới. Ở điều kiện thường, nicotine là chất lỏng nhờn, không màu đến nâu vàng, hút ẩm, dễ hoà tan trong ethyl alcohol, ether hoặc dầu nhẹ.",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de8_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nicotine là amine hai chức.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Bậc amine của nguyên tử nitrogen số 1 là bậc hai.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Thành phần phần trăm theo khối lượng nitrogen trong nicotine là 17,3% .",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nicotine phản ứng được với HCl trong dung dịch theo tỉ lệ mol 1:2 .",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Sai. Bậc amine của N(1) là bậc III.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de08_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Thuốc giảm đau, hạ sốt aspirin (thành phần gồm acetylsalicylic acid và chất độn trơ). Nghiền nát một viên asiprin 4 gam rồi hòa tan vào nước được 40 ml dung dịch. Thể tích dung dịch NaOH 0,9 M cần dùng để trung hòa 20 ml dung dịch thu được là 10,1 ml. Hàm lượng acetylsalicylic acid (hình bên) trong viên thuốc aspirin đã cho là bao nhiêu (làm tròn kết quả đến hàng phần mười)?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de8_image7.png"
        ],
        "correctAnswer": "27.3",
        "explanation": "Đáp án: 27,3%.<br/>CH<sub>3</sub>COOC<sub>6</sub>H<sub>4</sub>COOH + 3NaOH CH<sub>3</sub>COONa + NaOC<sub>6</sub>H<sub>4</sub>COONa + 2H<sub>2</sub>O<br/>nNaOH = 0,00909 mol nCH<sub>3</sub>COOC<sub>6</sub>H<sub>4</sub>COOH = 0,00303 mol<br/>%mCH<sub>3</sub>COOC<sub>6</sub>H<sub>4</sub>COOH = 0,00303.1802 = 27,27%.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de08_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dung dịch của các chất sau: NaOH, C<sub>17</sub>H<sub>35</sub>COONa, CH<sub>3</sub>[CH<sub>2</sub>]<sub>11</sub>OSO<sub>3</sub>Na, CH<sub>3</sub>COOK, NaCl. Có bao nhiêu dung dịch có thể loại bỏ vết bẩn dầu nhớt trên quần áo?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de08_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Thủy phân 100 gam saccharose thu được 104,5 gam hỗn hợp gồm glucose, fructose và saccharose còn dư. Hiệu suất phản ứng thủy phân saccharose là x%. Giá trị của x là bao nhiêu?",
        "images": [],
        "correctAnswer": "85.5",
        "explanation": "Đáp án: 85,5.<br/>Bảo toàn khối lượng: m<sub>saccharose</sub> + 2HOm = m<sub>glucose</sub> + m<sub>fructose</sub> nH<sub>2</sub>O = 0,25 mol = n<sub>saccharose pư</sub><br/>0,25.342H.10085,5%.100==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de08_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Tetrapeptide X được cấu tạo từ một -amino acid (phân tử chứa một nhóm amino và một nhóm carboxyl). Khi phân tích nguyên tố của một tetrapeptide X thu được phần trăm khối lượng của nguyên tố nitrogen là 18,543%. Khối lượng phân tử của -amino acid cấu tạo nên peptide X là bao nhiêu g/mol?",
        "images": [],
        "correctAnswer": "89",
        "explanation": "Đáp án: 89.<br/>Ta có M<sub>peptide X</sub> = 4M<sub>a.a</sub> – 3.18<br/>a.aa.a14.4%N.10018,543M4M89:Ala3.18==Þ= .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de08_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Thực hiện phản ứng xà phòng hóa 100 kg chất béo chứa 80% tristearin về khối lượng (tạp chất còn lại không phản ứng) với dung dịch NaOH vừa đủ. Biết hiệu suất phản ứng đạt 90%, khối lượng sodium stearate (C<sub>17</sub>H<sub>35</sub>COONa) thu được là bao nhiêu kilogam? (Làm tròn đến hai chữ số thập phân).",
        "images": [],
        "correctAnswer": "74.26",
        "explanation": "m(tristearin) = 100 &times; 80% = 80 kg &rArr; n(tristearin) = 80 / 890 &approx; 0,089888 kmol.<br/>PTHH: (C<sub>17</sub>H<sub>35</sub>COO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub> + 3NaOH &rarr; 3C<sub>17</sub>H<sub>35</sub>COONa + C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub>.<br/>n(muối) lí thuyết = 3 &times; 0,089888 = 0,26966 kmol.<br/>Do H = 90%, m(muối) thực tế = 0,26966 &times; 306 &times; 0,9 = 74,26 kg.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk1_de08_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Tính khối lượng ethanol (theo đơn vị kg) thu được từ một tấn mùn cưa chứa 45% cellulose về khối lượng qua quá trình thủy phân và lên men, biết hiệu suất của toàn bộ quá trình đạt 70%. (Làm tròn đến một chữ số thập phân).",
        "images": [],
        "correctAnswer": "178.9",
        "explanation": "Khối lượng cellulose trong 1 tấn mùn cưa = 1000 &times; 45% = 450 kg.<br/>Sơ đồ: (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub> &rarr; n C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> &rarr; 2n C<sub>2</sub>H<sub>5</sub>OH.<br/>m(ethanol lí thuyết) = (450 / 162) &times; 2 &times; 46 = 255,56 kg.<br/>Với H = 70%, m(ethanol thực tế) = 255,56 &times; 70% &approx; 178,9 kg.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa12_gk1_de09",
    "code": "H12-GK1-09",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 9",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 20,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de09_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thủy phân ester X (C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>) trong dung dịch H<sub>2</sub>SO<sub>4</sub> loãng, đun nóng, thu được sản phẩm gồm ethyl alcohol và chất hữu cơ Y. Công thức của Y là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>5</sub>COOH",
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
            "text": "CH<sub>3</sub>OH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HCOOH",
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
        "id": "hoa12_gk1_de09_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong tự nhiên, có một số hợp chất thiên nhiên có tính giặt rữa như xà phòng (chất giặt rửa tự nhiên). Đó là các chất có thể chứa trong thành phần của",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "trái bồ kết, bồ hòn",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "mía, củ cải đường",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "trái cây chín như nho, táo",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "bông gòn",
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
        "id": "hoa12_gk1_de09_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nhận định sau:<br/>(a) Chất giặt rửa tổng hợp được sản xuất bằng cách trộn muối sodium sulfonate hoặc sulfate với các chất phụ gia.<br/>(b) Dung dịch xà phòng có sức căng bề mặt lớn, giúp xà phòng ngấm tốt vào sợi vải.<br/>(c) Xà phòng là hỗn hợp muối sodium hoặc potassium của acid vô cơ và các chất phụ gia.<br/>(d) Có thể sản xuất được xà phòng từ các alkane mạch dài có trong dầu mỏ.<br/>Các nhận định đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a), (c)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(a), (d)",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(a), (b)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(b), (d)",
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
        "id": "hoa12_gk1_de09_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất nào sau đây thuộc loại disaccharide?",
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
            "text": "Maltose",
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
            "text": "Fructose",
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
        "id": "hoa12_gk1_de09_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quan sát cấu trúc của hai phân tử sau:<br/>Phát biểu nào sau đây không đúng?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de9_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Glucose và fructose đều có khả năng mở vòng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhóm –OH ở vị trí số 1 trong fructose dạng mạch vòng gọi là nhóm –OH hemiketal",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Glucose và fructose đều không cho được phản ứng thuỷ phân",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong phân tử α-glucose, nhóm –OH hemiacetal và nhóm –CH<sub>2</sub>OH hướng ngược phía với vòng",
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
        "id": "hoa12_gk1_de09_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các nhận xét dưới đây, nhận xét nào đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tất cả các chất có công thức C<sub>n</sub>(H<sub>2</sub>O)<sub>m</sub> đều là carbohydrate",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tất cả các carbohydrate đều có công thức chung C<sub>n</sub>(H<sub>2</sub>O)<sub>m</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đa số các carbohydrate có công thức chung C<sub>n</sub>(H<sub>2</sub>O)<sub>m</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tử các carbohydrate đều có ít nhất 6 nguyên tử carbon",
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
        "id": "hoa12_gk1_de09_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Carbohydrate nào sau đây được dùng để điều chế thuốc súng không khói?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Saccharose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cellulose",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Tinh bột",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Glucose",
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
        "id": "hoa12_gk1_de09_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Polysaccharide X là chất rắn, ở dạng bột vô định hình, màu trắng và được tạo thành trong cây xanh nhờ quá trình quang hợp. Thủy phân X, thu được monosaccharide Y. Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử khối của Y là 162",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "X dễ tan trong nước lạnh",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "X có phản ứng tráng bạc",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Y hòa tan được Cu(OH)<sub>2</sub> trong môi trường kiềm",
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
        "id": "hoa12_gk1_de09_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhỏ dung dịch methylamine vào dung dịch 3FeCl , thấy xuất hiện kết tủa màu nâu đỏ. Điều này chứng tỏ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "methylamine có tính base",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "methylamine có tính acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "methylamine có tính khử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "methylamine có tính oxi hoá",
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
        "id": "hoa12_gk1_de09_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hợp chất amino acid có cấu tạo như hình bên có tên thay thế là",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de9_image4.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "glutamic acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "a -amino glutaric acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2-aminopentane-1,5-dioic acid",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4 -aminopentane-1,5-dioic acid",
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
        "id": "hoa12_gk1_de09_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho sơ đồ chuyển hoá sau:<br/>Tinh bột ⎯⎯(+H₂O)→ Maltose ⎯⎯(+H₂O)→ Glucose ⎯⎯(lên men)→ Ethanol ⎯⎯(+O₂)→ Acetic acid<br/>Số phản ứng có thể được xúc tác bởi các enzyme là",
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
            "text": "1",
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
        "id": "hoa12_gk1_de09_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có bao nhiêu tripeptide mạch hở khi thuỷ phân hoàn toàn thu được hỗn hợp chỉ gồm glycine và alanine?",
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
            "text": "6",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "7",
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
        "id": "hoa12_gk1_de09_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Triglyceride là thành phần đóng một vai trò là nguồn cung cấp năng lượng và chuyên chở các chất béo trong quá trình trao đổi chất. Cho một triglyceride X có công thức cấu tạo như hình bên",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de9_image10.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Công thức phân tử của X là C<sub>55</sub>H<sub>98</sub>O<sub>6</sub>.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Acid béo có gốc kí hiệu (2) thuộc loại acid béo omega-9.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các gốc của acid béo không no trong phân tử X đều có cấu hình trans-.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hydrogen hóa hoàn toàn 427 kg X bằng hydrogen (dư) ở nhiệt độ cao và áp suất cao, xúc tác Ni thu được 388 kg chất béo rắn. Biết hiệu suất của phản ứng đạt 90%.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng.<br/>b) Đúng.<br/>c) Sai. Có dạng hình cis-.<br/>d) Đúng. C<sub>55</sub>H<sub>98</sub>O<sub>6</sub> + 4H<sub>2</sub> C<sub>55</sub>H<sub>106</sub>O<sub>6</sub>.<br/>m = 427854 .862.90% = 388 kg.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de09_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Dung dịch aniline trong nước làm quỳ tím hoá xanh.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Theo số lượng gốc hydrocarbon liên kết với nguyên tử N trong nhóm chức amine, các amine có thể được phân loại thành amine bậc I, bậc II và bậc III.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Aniline thuộc loại arylamine.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các alkylamine đơn chức có công thức phân tử n2n3CHN+ , với n1³ .",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Aniline không làm đổi màu quỳ tím.<br/>b) Đúng.<br/>c) Đúng.<br/>d) Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de09_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các thí nghiệm sau:<br/>(1) Đun nóng tripalmitin với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng.<br/>(2) Đun nóng ethyl acetate với dung dịch NaOH.<br/>(3) Hydrogen hóa triolein có mặt xúc tác Ni.<br/>(4) Đun nóng dầu dừa với dung dịch NaOH đặc.<br/>(5) Cho stearic acid tác dụng với dung dịch KOH.<br/>Có bao nhiêu thí nghiệm xảy ra phản ứng xà phòng hóa?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de09_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu công thức cấu tạo là ester đơn chức mạch hở có chứa 3 nguyên tử carbon trong phân tử?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4.<br/>HCOOCH<sub>2</sub>CH<sub>3</sub>, HCOOCH=CH<sub>2</sub>, HCOOCCH, CH<sub>3</sub>COOCH<sub>3</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de09_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Theo Tiêu chuẩn Việt Nam TCVN 7624 : 2007, khi chế tạo gương, chiều dày lớp bạc phủ trên bề mặt tấm kính (quy ra tổng lượng bạc trên một đơn vị m<sup>2</sup> kính) phải đạt tối thiểu 0,7 g.m<sup>-2</sup>. Một công ty cần sản xuất 15000 m<sup>2</sup> gương có độ dày lớp bạc phủ ở mức 0,72 g.m<sup>-2</sup>. Để tạo ra bạc, người ta tiến hành theo sơ đồ phản ứng như sau:<br/>Saccharose +02+HO;xtH; t → → Dung dịch A trunghòaacid → → Dung dịch B 032+dd [Ag(NH)]OH;t → → Ag<br/>Biết hiệu suất cả quá trình là 80%. Để sản xuất lượng gương với độ phủ bạc như trên, công ty đó cần sử dụng lượng saccharose ít nhất là bao nhiêu kg? (Kết quả làm tròn đến chữ số phần chục, chỉ làm tròn ở phép tính cuối)",
        "images": [],
        "correctAnswer": "10.7",
        "explanation": "Đáp án: 10,7.<br/>m<sub>Ag</sub> = 0,72.15000 = 10800 g n<sub>Ag</sub> = 100 mol<br/>Saccharose Glu + Fruc 4Ag<br/>m<sub>saccharose</sub> = \\frac{25 · 342}{80%} = 10687,5 gam ≈ 10,7 kg.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de09_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Indigo dye (hình 1) là một loại thuốc nhuộm, cụ thể là một thuốc nhuộm màu xanh lam đậm có nguồn gốc tự nhiên từ một số loài thực vật, hoặc có thể được sản xuất tổng hợp.<br/>Hình 1. Indigo dye<br/>Phần trăm khối lượng của nguyên tố nitrogen trong phân tử Indigo dye là bao nhiêu phần trăm (làm tròn kết quả đến hàng phần mười)?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de9_image16.png"
        ],
        "correctAnswer": "10.7",
        "explanation": "Đáp án: 10,7.<br/>C<sub>16</sub>H<sub>10</sub>N<sub>2</sub>O<sub>2</sub> 14.2%N.10010,7%.262Þ==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de09_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Đun hồi lưu 11 mL isopentyl alcohol (D = 0,809 g/mL) và 9 mL acetic acid (D = 1,053 g/mL) với xúc tác H<sub>2</sub>SO<sub>4</sub> đặc. Khối lượng ester isopentyl acetate thu được sau khi làm sạch là 9,8 gam. Hiệu suất của phản ứng ester hóa trên là bao nhiêu phần trăm? (Làm tròn đến một chữ số thập phân).",
        "images": [],
        "correctAnswer": "75.4",
        "explanation": "m(isopentyl alcohol) = 11 &times; 0,809 = 8,899 g &rArr; n &approx; 0,101 mol.<br/>m(acetic acid) = 9 &times; 1,053 = 9,477 g &rArr; n &approx; 0,158 mol.<br/>Acid dùng dư, tính theo alcohol: n(ester lí thuyết) = 0,101 mol.<br/>m(ester lí thuyết) = 0,101 &times; 130 = 13,13 g.<br/>H = (9,8 / 13,0) &times; 100% = 75,4%.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk1_de09_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Tính khối lượng ngô chứa 70% tinh bột (theo đơn vị tấn) cần dùng để sản xuất được 50 m<sup>3</sup> ethanol 96° qua quá trình lên men với hiệu suất 90%, biết khối lượng riêng của ethanol là D = 0,789 g/mL. (Làm tròn đến hai chữ số thập phân).",
        "images": [],
        "correctAnswer": "105.85",
        "explanation": "V(ethanol nguyên chất) = 50 &times; 96% = 48 m<sup>3</sup>.<br/>m(ethanol) = 48 &times; 10<sup>6</sup> &times; 0,789 &times; 10<sup>-6</sup> = 37,872 tấn &rArr; n(ethanol) = 37,872 / 46 &approx; 0,8233 &times; 10<sup>3</sup> kmol.<br/>Sơ đồ: (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub> &rarr; 2n C<sub>2</sub>H<sub>5</sub>OH.<br/>m(tinh bột) = (0,8233 / 2 &times; 162) / 0,9 = 74,098 tấn.<br/>m(ngô) = 74,098 / 70% &approx; 105,85 tấn.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 6
      }
    ]
  },
  {
    "id": "hoa12_gk1_de10",
    "code": "H12-GK1-10",
    "title": "Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số 10",
    "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
    "badge": "Giữa Kì 1",
    "grade": "12",
    "chapter": "Đề Giữa Học Kì 1",
    "duration": 50,
    "totalQuestions": 20,
    "totalPoints": 10.0,
    "questions": [
      {
        "id": "hoa12_gk1_de10_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Để biến một số dầu thành mỡ rắn, hoặc bơ nhân tạo người ta thực hiện quá trình nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Làm lạnh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Xà phòng hóa",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hydrogen hóa (có xúc tác Ni)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cô cạn ở nhiệt độ cao",
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
        "id": "hoa12_gk1_de10_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xà phòng, chất giặt rửa tổng hợp là những chất có tác dụng giặt rửa, được sử dụng phổ biến trong đời sống. Cấu tạo của một xà phòng được cho ở hình dưới đây:<br/>Cho các phát biểu sau:<br/>(a) Khi thay thế ion Na<sup>+</sup> bằng ion K<sup>+</sup> ta vẫn thu được sản phẩm là xà phòng.<br/>(b) Khi hòa tan vào nước, phần (A) có xu hướng quay ra ngoài, thâm nhập vào nước, phần (B) hướng vào các chất bẩn, vết dầu mỡ để làm sạch các vết bẩn.<br/>(c) Tên gọi của xà phòng trên là sodium palmitate.<br/>(d) Nên dùng xà phòng để giặt rửa trong nước cứng (nước có chứa nhiều ion Ca<sup>2+</sup>, Mg<sup>2+</sup>) do muối của các kim loại này với các acid béo thường tan,... và không gây hại cho áo, quần sau khi giặt.<br/>Các phát biểu đúng là",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de10_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "(a), (b)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "(a), (b), (c)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "(a), (c)",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(a), (b), (c), (d)",
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
        "id": "hoa12_gk1_de10_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất giặt rửa tổng hợp được sản xuất từ nguồn nguyên liệu nào sau đây?",
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
            "text": "Quả bồ hòn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Dầu mỏ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Chất béo",
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
        "id": "hoa12_gk1_de10_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Maltose là một loại disaccharide mà phân tử có thể mở vòng do có nhóm -OH hemiacetal. Cho biết công thức cấu tạo dạng mạch vòng của maltose như sau:<br/>Nhóm -OH hemiacetal trong phân tử maltose liên kết với nguyên tử carbon có số thứ tự nào?",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de10_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C<sub>4</sub> và C<sub>6</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>1</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C<sub>1</sub> và C<sub>4</sub>",
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
        "id": "hoa12_gk1_de10_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một loại polymer là nguồn carbohydrate dự trữ có trong cơ thể thực vật và chỉ được tạo thành từ các đơn vị β-glucose là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "amylose",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "amylopectin",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cellulose",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "saccharose",
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
        "id": "hoa12_gk1_de10_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho sơ đồ chuyển hóa sau (mỗi mũi tên là một phương trình phản ứng):<br/>Tinh bột → X → Y → Z → methyl acetate.<br/>Các chất Y, Z trong sơ đồ trên lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "C<sub>2</sub>H<sub>5</sub>OH, CH<sub>3</sub>COOH",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CH<sub>3</sub>COOH, C<sub>2</sub>H<sub>5</sub>OH",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>4</sub>, CH<sub>3</sub>COOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CH<sub>3</sub>COOH, CH<sub>3</sub>OH",
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
        "id": "hoa12_gk1_de10_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hiện nay, xăng sinh học E5 (xăng chứa 5% ethanol về thể tích) đang được sử dụng ở nước ta để thay thế một phần xăng truyền thống.<br/>Tại một nhà máy, ethanol được sản xuất từ 20 tấn mùn cưa (chứa 50% cellulose, còn lại là các tạp chất trơ) theo sơ đồ sau với hiệu suất cả quá trình đạt 81% :<br/>oacidenzymetCellulose Glucose Ethanol(D0,8 kg/L). → ¾ → =<br/>Thể tích ethanol thu được là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "5750 lít",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4600 lít",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "6900 lít",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2300 lít",
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
        "id": "hoa12_gk1_de10_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất: glucose, saccharose, cellulose, fructose và tinh bột. Số chất đều có phản ứng tráng bạc và phản ứng khử 2Cu(OH)/OH- thành 2CuO là",
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
            "text": "5",
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
        "id": "hoa12_gk1_de10_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Amine X có công thức cấu tạo thu gọn: CH<sub>3</sub>-CH<sub>2</sub>-NH-CH<sub>3</sub>. Tên thay thế của X là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Methyl ethyl amine",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "N-ethylmethanamine",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "N-methylethanamine",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Ethyl methyl amine",
            "isCorrect": false
          }
        ],
        "correctAnswer": "",
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa12_gk1_de10_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho số liệu về nhiệt độ nóng chảy, nhiệt độ sôi và độ tan trong nước của ba amine như bảng sau:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">Chất</th><th class=\"px-2 py-1 border border-slate-300\">Nhiệt độ nóng chảy<br/>(oC)</th><th class=\"px-2 py-1 border border-slate-300\">Nhiệt độ sôi<br/>(oC)</th><th class=\"px-2 py-1 border border-slate-300\">Độ tan ở 25 oC<br/>(g/100g nước)</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">CH3CH2NH2</td><td class=\"px-2 py-1 border border-slate-300\">-81</td><td class=\"px-2 py-1 border border-slate-300\">16,6</td><td class=\"px-2 py-1 border border-slate-300\">∞</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">(CH3CH2)2NH</td><td class=\"px-2 py-1 border border-slate-300\">-50</td><td class=\"px-2 py-1 border border-slate-300\">55,5</td><td class=\"px-2 py-1 border border-slate-300\">13,4</td></tr><tr><td class=\"px-2 py-1 border border-slate-300\">C6H5NH2</td><td class=\"px-2 py-1 border border-slate-300\">-6,3</td><td class=\"px-2 py-1 border border-slate-300\">184,1</td><td class=\"px-2 py-1 border border-slate-300\">3,6</td></tr></table></div><br/>Phân tích số liệu ở bảng trên, một học sinh có các nhận định sau, hãy cho biết nhận định nào đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Aniline tan kém trong nước do không tạo được liên kết hydrogen với nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt độ sôi của ethylamine thấp nhất do giữa các phân tử không có liên kết hydrogen",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở điều kiện thường (25<sup>o</sup>C, 1 atm), ethylamine là chất khí, diethylamine và aniline là chất lỏng",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nhiệt độ sôi của các amine không phụ thuộc vào khối lượng phân tử amine",
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
        "id": "hoa12_gk1_de10_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các chất có công thức cấu tạo sau: H<sub>2</sub>N-CH<sub>2</sub>-COOH (1); HOOC-CH<sub>2</sub>CH(NH<sub>2</sub>)COOH (2); H<sub>2</sub>N-CH<sub>2</sub>CH(NH<sub>2</sub>)-COOH ; (4) C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> (aniline).Dung dịch chất nào sau đây làm quỳ tím chuyển màu xanh?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất (1)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chất (4)",
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
            "text": "Chất (3)",
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
        "id": "hoa12_gk1_de10_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các amino acid sau:<br/>Tiến hành phương pháp điện di dung dịch gồm ba amino acid trên tại giá trị pH thu được kết quả như hình dưới:<br/>Các kí hiệu X, Y, Z tương ứng với các amino acid là",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de10_image11.png",
          "/assets/hoa12/midterm/h12_gk1_de10_image12.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Lys, Gly, Glu",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Glu, Gly, Lys",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Gly, Glu, Lys",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Gly, Arg, Glu",
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
        "id": "hoa12_gk1_de10_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Phản ứng thủy phân ester trong môi trường kiềm được biểu diễn như sau:<br/>R-COO-R’ + NaOH → RCOONa + R’OH<br/>Một nhóm học sinh dự đoán “nồng độ NaOH càng lớn thì tốc độ phản ứng thủy phân càng lớn”. Từ đó, học sinh tiến hành thí nghiệm ở nhiệt độ không đổi (60°C) nhưng thay đổi nồng độ NaOH để kiểm tra dự đoán trên như sau:<br/>• Bước 1: Thêm 4 mL ethyl acetate (d = 0,9 g/mL) vào một ống nghiệm chứa 20 mL dung dịch NaOH nồng độ C (mol/L). Các giá trị nồng độ này không giống nhau giữa các thí nghiệm.<br/>• Bước 2: Ngâm ống nghiệm trong nồi nước nóng (nhiệt độ nước khoảng 60°C) và đo thời gian cho đến khi phần chất lỏng trong ống nghiệm trở lên đồng nhất.<br/>Kết quả thí nghiệm được cho ở bảng sau:<br/><div class=\"overflow-x-auto my-2\"><table class=\"border-collapse border border-slate-300\"><tr><th class=\"px-2 py-1 border border-slate-300\">Nồng độ NaOH (mol/L)</th><th class=\"px-2 py-1 border border-slate-300\">4,0</th><th class=\"px-2 py-1 border border-slate-300\">3,6</th><th class=\"px-2 py-1 border border-slate-300\">3,2</th><th class=\"px-2 py-1 border border-slate-300\">2,8</th><th class=\"px-2 py-1 border border-slate-300\">2,4</th><th class=\"px-2 py-1 border border-slate-300\">2,0</th></tr><tr><td class=\"px-2 py-1 border border-slate-300\">Thời gian (phút)</td><td class=\"px-2 py-1 border border-slate-300\">5,2</td><td class=\"px-2 py-1 border border-slate-300\">6,0</td><td class=\"px-2 py-1 border border-slate-300\">7,0</td><td class=\"px-2 py-1 border border-slate-300\">8,2</td><td class=\"px-2 py-1 border border-slate-300\">9,5</td><td class=\"px-2 py-1 border border-slate-300\">11,0</td></tr></table></div>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sau bước 1, phần chất lỏng trong các ống nghiệm tách thành hai lớp.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thủy phân ethyl acetate xảy ra ở bước 1 của các thí nghiệm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng thủy phân hoàn toàn ester tại thời điểm hỗn hợp trong ống nghiệm đồng nhất.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Kết quả thí nghiệm chứng tỏ dự đoán của học sinh ban đầu là chính xác.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Đúng. Nhiệt độ thường phản ứng xà phòng hóa có xảy ra nhưng không đáng kể, ethyl acetate không tan nên hỗn hợp phân lớp.<br/>b) Sai. Tại bước 1, khi chưa đun nóng phản ứng chưa xảy ra.<br/>c) Đúng.<br/>d) Đúng. Nồng độ NaOH càng lớn thì tốc độ phản ứng thủy phân càng lớn, thời gian phản ứng kết thúc càng ngắn.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de10_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi enzyme có một khoảng pH tối ưu. Môi trường pH quá cao hoặc quá thấp sẽ ảnh hưởng đến hoạt tính của enzyme. Giá trị pH mà tại đó enzyme hoạt động mạnh nhất được gọi là giá trị pH tối ưu.<br/>Biểu đồ hoạt động của một số enzyme tiêu hóa trong cơ thể người",
        "images": [
          "/assets/hoa12/midterm/h12_gk1_de10_image14.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Amylase hoạt động tốt nhất ở môi trường có pH = 8.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giá trị pH tối ưu của pepsin là 2.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trypsin là enzyme chính trong thành phần dịch vị dạ dày.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Xác định pH tối ưu của các enzyme có thể giúp cải thiện hiệu suất các phản ứng hóa học hoặc sinh hóa.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a) Sai. Amylase hoạt động rất là kém ở pH = 8.<br/>b) Đúng.<br/>c) Sai. Pepsin là enzyme tiêu hóa chính trong dịch vị dạ dày.<br/>d) Đúng",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de10_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Triolein có nhiều trong dầu thực vật như dầu oliu, dầu lạc, dầu vừng. Số liên kết C=C có trong một phân tử triolein là bao nhiêu?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa12_gk1_de10_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Một loại mỡ động vật chứ 20% tristearoylglycerol, 30% tripanmitoylglycerol và 50% trioleoylglycerol (về khối lượng). Tính khối lượng muối thu được theo đơn vị kg khi xà phòng hóa 1 tấn mỡ trên bằng dung dịch NaOH, giả sử hiệu suất của quá trình đạt 90% (làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "929",
        "explanation": "Đáp án: 929.<br/>Trong 1 tấn mỡ có:<br/>0,2 tấn (C<sub>17</sub>H<sub>35</sub>COO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub><br/>0,3 tấn (C<sub>15</sub>H<sub>31</sub>COO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub><br/>0,5 tấn (C<sub>17</sub>H<sub>33</sub>COO)3C<sub>3</sub>H<sub>5</sub><br/>Theo pt (1), (2), (3) khối lượng muối thu được là:<br/>= 1,03255 (tấn) = 1032,55(kg)<br/>Vì hiệu suất là 90% nên khối lượng muối thu được là 1032,55.90% = 929,3 kg.",
        "explanationImages": [
          "/assets/hoa12/midterm/h12_gk1_de10_image26.png"
        ],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa12_gk1_de10_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phương trình hóa học của các phản ứng được đánh số thứ tự từ 1 tới 4 dưới đây:<br/>(1) 6nCO<sub>2</sub> + 5nH<sub>2</sub>O ⎯⎯(ánh sáng, diệp lục)→ (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub> + 6nO<sub>2</sub><br/>(2) C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose) ⎯⎯(enzyme)→ 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub><br/>(3) C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O ⎯⎯(enzyme hoặc H<sup>+</sup>)→ C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose) + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (fructose)<br/>(4) CH<sub>2</sub>OH[CHOH]<sub>4</sub>CHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]OH ⎯⎯t°→ CH<sub>2</sub>OH[CHOH]<sub>4</sub>COONH<sub>4</sub> + 2Ag + 3NH<sub>3</sub> + H<sub>2</sub>O<br/>Gán số thứ tự phương trình hoá học của các phản ứng theo tên gọi: thủy phân, tráng bạc, lên men, quang hợp và sắp xếp theo trình tự thành dãy bốn số (ví dụ: 1234, 4321,..).",
        "images": [],
        "correctAnswer": "3421",
        "explanation": "Đáp án: 3421.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa12_gk1_de10_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Kết quả phân tích thành phần nguyên tố của amine X (no, đơn chức, mạch hở) thu được tỉ lệ khối lượng m<sub>C</sub> ​: m<sub>H</sub> ​= 4 : 1. Số đồng phân cấu tạo là amine bậc một của X là bao nhiêu?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.<br/>Tỉ lệ khối lượng: \\frac{m_C}{m_H} = \\frac{12n}{2n + 3} = \\frac{4}{1} ⇒ 12n = 8n + 12 ⇒ n = 3 (C<sub>3</sub>H<sub>9</sub>N).<br/>Có 2 đồng phân bậc I là CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> và CH<sub>3</sub>CH(NH<sub>2</sub>)CH<sub>3</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa12_gk1_de10_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Dipeptide X mạch hở có kết quả phân tích nguyên tố: %C = 41,10%; %H = 6,85%; %N = 19,18%; còn lại là oxygen. Phân tử khối của X bằng 146. Số công thức cấu tạo phù hợp của dipeptide X (được tạo bởi các &alpha;-amino acid) là bao nhiêu?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "%O = 100 - 41,10 - 6,85 - 19,18 = 32,87%.<br/>x : y : z : t = (41,10/12) : (6,85/1) : (32,87/16) : (19,18/14) = 3,425 : 6,85 : 2,054 : 1,37 = 5 : 10 : 3 : 2.<br/>CTPT của X là C<sub>5</sub>H<sub>10</sub>O<sub>3</sub>N<sub>2</sub>.<br/>Vì X là dipeptide tạo từ các &alpha;-amino acid nên X có 2 cấu tạo phù hợp: Gly-Ala và Ala-Gly.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 5
      },
      {
        "id": "hoa12_gk1_de10_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Quá trình oxi hóa hoàn toàn 1 mol glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) giải phóng 2802,5 kJ năng lượng. Một người bình thường mỗi ngày cần khoảng 2000 kJ năng lượng để duy trì các hoạt động. Khối lượng glucose (gam) tối thiểu cần tiêu thụ trong ngày để cung cấp đủ lượng năng lượng trên là bao nhiêu? (Giả thiết hiệu suất 100%, làm tròn đến hai chữ số thập phân).",
        "images": [],
        "correctAnswer": "128.46",
        "explanation": "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) + 6O<sub>2</sub>(g) &rarr; 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(g) có &Delta;<sub>r</sub>H = -2802,5 kJ.<br/>1 mol (180 g) glucose tỏa ra 2802,5 kJ.<br/>Khối lượng glucose cần tiêu thụ để cung cấp 2000 kJ là: m = (2000 &times; 180) / 2802,5 &approx; 128,46 g.",
        "explanationImages": [],
        "points": 0.5,
        "displayNumber": 6
      }
    ]
  }
];

export function getMidtermExamById(id: string): Chuong1Exam | undefined {
  return HOA12_MIDTERM_EXAMS.find(e => e.id === id || e.code === id);
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
