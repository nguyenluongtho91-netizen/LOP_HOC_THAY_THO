// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU TOÀN DIỆN CHƯƠNG 2 HÓA HỌC 11 (CTGDPT 2018 MỚI - THI 2025)
 * Đồng bộ 100% từ tài liệu chuẩn của Thầy Thọ (Đầy đủ lý thuyết, dạng toán, bài tập 3 phần & đề thi chuẩn)
 */

export interface Chuong2Question {
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

export interface Chuong2MathExample {
  number: number;
  text: string;
  images?: string[];
  solution?: string;
}

export interface Chuong2MathForm {
  id: string;
  title: string;
  method: string;
  examples: Chuong2MathExample[];
}

export interface Chuong2Exam {
  id: string;
  code: string;
  title: string;
  topic: string;
  badge: string;
  duration: number;
  totalQuestions: number;
  totalPoints: number;
  questions: Chuong2Question[];
}

export interface Chuong2Lesson {
  id: string;
  lessonNumber: number;
  title: string;
  shortTitle: string;
  badge: string;
  icon: string;
  description: string;
  theory?: string;
  mathForms?: Chuong2MathForm[];
  practice?: {
    part1: Chuong2Question[];
    part2: Chuong2Question[];
    part3: Chuong2Question[];
  };
  exams?: Chuong2Exam[];
}

export interface Chuong2ExamAttempt {
  id: string;
  examId: string;
  examTitle: string;
  score: number;
  part1Score: number;
  part2Score: number;
  part3Score: number;
  correctCount: number;
  totalQuestions: number;
  durationSeconds: number;
  tabSwitchCount: number;
  completedAt: string;
  answers: Record<string, any>;
}

export const HOA11_CHUONG2_MASTER: Record<string, Chuong2Lesson> = {"bai4":{"id":"bai4","lessonNumber":4,"title":"Bài 4. Đơn chất Nitrogen","shortTitle":"Đơn chất Nitrogen","badge":"Bài 4","icon":"🧪","description":"Cấu tạo liên kết ba bền vững, tính trơ ở nhiệt độ thường, tính oxi hóa và tính khử của đơn chất nitrogen.","theory":"I. TRẠNG THÁI TỰ NHIÊN- Trong khí quyển Trái Đất, nitrogen là nguyên tố phổ biến nhất, chiếm 75,5% khối lượng (hoặc 78,1% thể tích) và tập trung chủ yếu ở tầng đối lưu và trong vỏ Trái Đất thì nó tồn tại tập trung ở một số mỏ khoáng dưới dạng sodium nitrate (NaNO<sub>3</sub> thường gọi là diêm tiêu Chile).- Nguyên tố nitrogen còn có trong tất cả cơ thể người và động vật, là thành phần cấu tạo nên nucleic acid, protein, … Trong cơ thể người, nitrogen chiếm khoảng 3% khối lượng, đứng thứ tư sau oxygen, carbon và hydrogen.- Nguyên tố nitrogen tồn tại trong tự nhiên với hai đồng vị bền là <sup>14</sup>N (99,63%) và <sup>15</sup>N (0.37%).<div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Ví dụ 1. Phát biểu nào sau đây đúng?<br/>A. Nitrogen tự do chiếm khoảng 20% thể tích không khí.<br/>B. Trong tự nhiên, nitrogen có ba đồng vị bền.<br/>C. Trong vỏ Trái Đất, nitrogen tồn tại chủ yếu ở dạng đơn chất.<br/>D. Trong cơ thể người và động vật, nitrogen là thành phần cấu tạo nên nucleic acid, protein, …<br/>Ví dụ 2. Công thức hóa học của diêm tiêu Chile là<br/>A. Ca(NO3)2. B. NH4NO3. C. NH4Cl. D. NaNO3.</th></tr></table></div>II. CẤU TẠO NGUYÊN TỬ, PHÂN TỬ1. Cấu tạo nguyên tử:- Cấu hình của N (Z = 7): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>. Nguyên tố nitrogen ở ô số 7, chu kì 2, nhóm VA trong bảng tuần hoàn.- Nguyên tử nitrogen có độ âm điện lớn (3,04). Nitrogen là phi kim điển hình.- Số oxi hóa thường gặp của nitrogen:2. Cấu tạo phân tử:- Phân tử nitrogen gồm hai nguyên tử, liên kết với nhau bằng liên kết ba (1 liên kết Ϭ và 2 liên kết π). Phân tử nitrogen có năng lượng liên kết lớn (945 kJ/mol) và có liên kết cộng hóa trị không phân cực.","mathForms":[{"id":"bai4_mf1","title":"Dạng 1: Các phương pháp giải nhanh trọng tâm Bài 4. Đơn chất Nitrogen","method":"Hệ thống hóa các công thức trọng tâm, định luật và phương pháp bảo toàn thường dùng trong Bài 4. Đơn chất Nitrogen","examples":[{"number":1,"text":"Ví dụ minh họa dạng toán trọng tâm Bài 4. Đơn chất Nitrogen: Áp dụng công thức và định luật để giải bài toán định lượng","solution":"Áp dụng phương pháp phân tích đề bài, lập phương trình tương ứng và thế số để tính đáp án chính xác"}]}],"practice":{"part1":[{"id":"h11_b4_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Khí nào phổ biến nhất trong khí quyển Trái Đất?","images":[],"options":[{"id":"a","letter":"A","text":"Oxygen","isCorrect":false},{"id":"b","letter":"B","text":"Nitrogen","isCorrect":true},{"id":"c","letter":"C","text":"Ozone","isCorrect":false},{"id":"d","letter":"D","text":"Argon","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Trong không khí, chất nào sau đây chiếm phần trăm thể tích lớn nhất?","images":[],"options":[{"id":"a","letter":"A","text":"O<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NO","isCorrect":false},{"id":"c","letter":"C","text":"CO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"N<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Áp suất riêng toàn phân của nitrogen trong khí quyển là","images":[],"options":[{"id":"a","letter":"A","text":"0,025 bar","isCorrect":false},{"id":"b","letter":"B","text":"0,21 bar","isCorrect":false},{"id":"c","letter":"C","text":"0,78 bar","isCorrect":true},{"id":"d","letter":"D","text":"0,28 bar","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Ở dạng hợp chất, nitrogen tồn tại nhiều trong các mỏ khoáng dưới dạng hợp chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"NaNO<sub>3</sub>","isCorrect":true},{"id":"b","letter":"B","text":"KNO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"HNO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Ba(NO<sub>3</sub>)<sub>2</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Diêu tiêu Chile là tên gọi khác của hợp chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Sodium chloride","isCorrect":false},{"id":"b","letter":"B","text":"Potassium sulfate","isCorrect":false},{"id":"c","letter":"C","text":"Sodium nitrate","isCorrect":true},{"id":"d","letter":"D","text":"Potassium nitrate","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Công thức hóa học của diêm tiêu Chile là","images":[],"options":[{"id":"a","letter":"A","text":"Ca(NO<sub>3</sub>)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NH<sub>4</sub>NO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"NH<sub>4</sub>Cl","isCorrect":false},{"id":"d","letter":"D","text":"NaNO<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Trong tự nhiên, nguyên tố nitrogen tồn tại trong hợp chất hữu cơ nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Tinh bột","isCorrect":false},{"id":"b","letter":"B","text":"Cellulose","isCorrect":false},{"id":"c","letter":"C","text":"Protein","isCorrect":true},{"id":"d","letter":"D","text":"Glucose","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Trong tự nhiên, nguyên tố nitrogen tồn tại chủ yếu ở dạng đồng vị nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"<sup>14</sup>N","isCorrect":true},{"id":"b","letter":"B","text":"<sup>13</sup>N","isCorrect":false},{"id":"c","letter":"C","text":"<sup>15</sup>N","isCorrect":false},{"id":"d","letter":"D","text":"<sup>12</sup>N","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Ở trạng thái tự nhiên, nitrogen:","images":[],"options":[{"id":"a","letter":"A","text":"tồn tại ở dạng đơn chất và hợp chất","isCorrect":true},{"id":"b","letter":"B","text":"Chỉ tồn tại ở dạng đơn chất","isCorrect":false},{"id":"c","letter":"C","text":"Chỉ tồn tại ở dạng hợp chất","isCorrect":false},{"id":"d","letter":"D","text":"tự do chiếm khoảng 20% thể tích không khí","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Cấu hình electron nguyên tử của nitrogen là:","images":[],"options":[{"id":"a","letter":"A","text":"1s<sup>2</sup>2s<sup>2</sup>2p<sup>1</sup>","isCorrect":false},{"id":"b","letter":"B","text":"1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup>","isCorrect":false},{"id":"c","letter":"C","text":"1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>","isCorrect":false},{"id":"d","letter":"D","text":"1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Vị trí (chu kì, nhóm) của nguyên tố nitrogen trong bảng tuần hoàn là","images":[],"options":[{"id": "a", "letter": "A", "text": "Chu kì 2, nhóm V", "isCorrect": true}, {"id": "b", "letter": "B", "text": "chu kì 3, nhóm V", "isCorrect": false}, {"id": "c", "letter": "C", "text": "chu kì 2, nhóm VI", "isCorrect": false}, {"id": "d", "letter": "D", "text": "chu kì 3, nhóm IV", "isCorrect": false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Phân tử nitrogen có cấu tạo là","images":[],"options":[{"id":"a","letter":"A","text":"N = N","isCorrect":false},{"id":"b","letter":"B","text":"N  º N","isCorrect":true},{"id":"c","letter":"C","text":"N – N","isCorrect":false},{"id":"d","letter":"D","text":"N  ® N","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Đặc điểm cấu tạo của phân tử N<sub>2</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"có 1 liên kết ba","isCorrect":true},{"id":"b","letter":"B","text":"có 1 liên kết đôi","isCorrect":false},{"id":"c","letter":"C","text":"Có 2 liên kết đôi","isCorrect":false},{"id":"d","letter":"D","text":"có 2 liên kết ba","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Số liên kết sigma (σ) và số liên kết pi (π) trong phân tử nitrogen lần lượt là","images":[],"options":[{"id":"a","letter":"A","text":"2 và 1","isCorrect":false},{"id":"b","letter":"B","text":"0 và 3","isCorrect":false},{"id":"c","letter":"C","text":"3 và 0","isCorrect":false},{"id":"d","letter":"D","text":"1 và 2","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Bậc liên kết và năng lượng liên kết trong phân tử nitrogen lần lượt là","images":[],"options":[{"id":"a","letter":"A","text":"2 và 418 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"1 và 386 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"3 và 367 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"3 và 945 kJ/mol","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Trong hợp chất nitrogen có các mức oxi hóa nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"-3, +3, +5","isCorrect":false},{"id":"b","letter":"B","text":"-3, 0, +3, +5","isCorrect":false},{"id":"c","letter":"C","text":"-3, +1, +2, +3, +4, +5","isCorrect":true},{"id":"d","letter":"D","text":"-3, 0, +1, +2, +3, +4, +5","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây đúng về nguyên tố nitrogen (<sub>7</sub>N) là không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Nguyên tử nguyên tố nitrogen có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>","isCorrect":false},{"id":"b","letter":"B","text":"Nguyên tử nguyên tố nitrogen có 3 electron hóa trị","isCorrect":true},{"id":"c","letter":"C","text":"Nguyên tố nitrogen thuộc chu kì 2, nhóm VA trong bảng tuần","isCorrect":false},{"id":"d","letter":"D","text":"Trong một số hợp chất, nguyên tử nitrogen có thể dùng cặp electron hóa trị riêng để tạo một liên kết cho – nhận với nguyên tử khác","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Tính chất nào sau đây không phải tính chất vật lí của N<sub>2</sub>?","images":[],"options":[{"id":"a","letter":"A","text":"Chất khí","isCorrect":false},{"id":"b","letter":"B","text":"Không màu","isCorrect":false},{"id":"c","letter":"C","text":"Nặng hơn không khí","isCorrect":true},{"id":"d","letter":"D","text":"Tan ít trong nước","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q19","number":19,"part":1,"type":"multiple_choice","text":"Khí nitrogen ít tan trong nước là do","images":[],"options":[{"id":"a","letter":"A","text":"nitrogen có bán kính nguyên tử nhỏ","isCorrect":false},{"id":"b","letter":"B","text":"nitrogen có độ âm điện lớn","isCorrect":false},{"id":"c","letter":"C","text":"phân tử nitrogen có liên kết ba bền vững","isCorrect":false},{"id":"d","letter":"D","text":"phân tử nitrogen không phân cực","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q20","number":20,"part":1,"type":"multiple_choice","text":"Ở nhiệt độ thường, nitrogen khá trơ về mặt hoạt động hóa học là do","images":[],"options":[{"id":"a","letter":"A","text":"nitrogen có bán kính nguyên tử nhỏ","isCorrect":false},{"id":"b","letter":"B","text":"nitrogen có độ âm điện lớn","isCorrect":false},{"id":"c","letter":"C","text":"phân tử nitrogen có liên kết ba bền vững","isCorrect":true},{"id":"d","letter":"D","text":"phân tử nitrogen không phân cực","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q21","number":21,"part":1,"type":"multiple_choice","text":"Nhận định nào sau đây về phân tử nitrogen là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Có ba liên kết đơn bền vững","isCorrect":false},{"id":"b","letter":"B","text":"Chứa nguyên tử nitrogen có số oxi hóa là -3","isCorrect":false},{"id":"c","letter":"C","text":"Có liên kết cộng hóa trị có cực","isCorrect":false},{"id":"d","letter":"D","text":"Thể hiện cả tính oxi hóa và tính khử","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q22","number":22,"part":1,"type":"multiple_choice","text":"Nhận định nào sau đây về đơn chất nitrogen là sai?","images":[],"options":[{"id":"a","letter":"A","text":"Không màu và nhẹ hơn không khí","isCorrect":false},{"id":"b","letter":"B","text":"Hóa hợp với oxygen ở nhiệt độ cao hoặc tia lửa điện","isCorrect":false},{"id":"c","letter":"C","text":"Thể hiện tính oxi hóa mạnh ở điều kiện thường","isCorrect":true},{"id":"d","letter":"D","text":"Khó hóa lỏng và ít tan trong nước","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q23","number":23,"part":1,"type":"multiple_choice","text":"Số oxi hóa thấp nhất và cao nhất của nguyên tử nitrogen lần lượt là","images":[],"options":[{"id":"a","letter":"A","text":"0 và +5","isCorrect":false},{"id":"b","letter":"B","text":"-3 và 0","isCorrect":false},{"id":"c","letter":"C","text":"-3 và +5","isCorrect":true},{"id":"d","letter":"D","text":"-2 và +4","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q24","number":24,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây về đơn chất nitrogen (N<sub>2</sub>) là không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Dù phân tử N<sub>2</sub> có tính kém hoạt động hóa học, nhưng vẫn hoạt động hóa học mạnh hơn chlorine, Cl<sub>2</sub>","isCorrect":true},{"id":"b","letter":"B","text":"Đơn chất nitrogen không phản ứng với hydrogen, oxygen ở điều kiện thường","isCorrect":false},{"id":"c","letter":"C","text":"Do có nhiệt độ rất thấp nên nitrogen lỏng được sử dụng bảo quản một số loại mẫu vật","isCorrect":false},{"id":"d","letter":"D","text":"Trong bầu khí quyển, khi có sấm chớp, khí nitrogen tạo các nitrogen oxide, là một nguyên nhân làm cho nước mưa có tính acid","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q25","number":25,"part":1,"type":"multiple_choice","text":"Trong phản ứng: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ (xt, t°, p) 2NH<sub>3</sub>(g). N<sub>2</sub> thể hiện","images":[],"options":[{"id":"a","letter":"A","text":"tính khử","isCorrect":false},{"id":"b","letter":"B","text":"tính oxi hóa","isCorrect":true},{"id":"c","letter":"C","text":"tính base","isCorrect":false},{"id":"d","letter":"D","text":"tính acid","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q26","number":26,"part":1,"type":"multiple_choice","text":"Trong phản ứng: N<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ (3000°C)  2NO(g). N<sub>2</sub> thể hiện","images":[],"options":[{"id":"a","letter":"A","text":"tính khử","isCorrect":true},{"id":"b","letter":"B","text":"tính oxi hóa","isCorrect":false},{"id":"c","letter":"C","text":"tính base","isCorrect":false},{"id":"d","letter":"D","text":"tính acid","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q27","number":27,"part":1,"type":"multiple_choice","text":"Trong phản ứng tổng hợp ammonia từ nitrogen và hydrogen, nitrogen đóng vài trò là","images":[],"options":[{"id":"a","letter":"A","text":"chất khử","isCorrect":false},{"id":"b","letter":"B","text":"chất oxi hóa","isCorrect":true},{"id":"c","letter":"C","text":"acid","isCorrect":false},{"id":"d","letter":"D","text":"base","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q28","number":28,"part":1,"type":"multiple_choice","text":"Trong phản ứng hóa hợp với oxygen, nitrogen đóng vai trò là","images":[],"options":[{"id":"a","letter":"A","text":"chất oxi hóa","isCorrect":false},{"id":"b","letter":"B","text":"base","isCorrect":false},{"id":"c","letter":"C","text":"chất khử","isCorrect":true},{"id":"d","letter":"D","text":"acid","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q29","number":29,"part":1,"type":"multiple_choice","text":"Nitrogen thể hiện tính khử trong phản ứng nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"ot22NO2NO+ ⇌","isCorrect":true},{"id":"b","letter":"B","text":"oxt,t223N3H2NH+ ⇌","isCorrect":false},{"id":"c","letter":"C","text":"ot2323CaNCaN+ →","isCorrect":false},{"id":"d","letter":"D","text":"ot2323MgNMgN+ →","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q30","number":30,"part":1,"type":"multiple_choice","text":"Trong những cơn mưa dông kèm sấm sét, nitrogen kết hợp trực tiếp với oxygen tạo thành sản phẩm là","images":[],"options":[{"id":"a","letter":"A","text":"NO","isCorrect":true},{"id":"b","letter":"B","text":"N<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"NH<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>2</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q31","number":31,"part":1,"type":"multiple_choice","text":"Quá trình Haber – Bosch (Ha-bơ Bớt) là quá trình tổng hợp chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"NO","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"NH<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"NO<sub>2</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q32","number":32,"part":1,"type":"multiple_choice","text":"Cặp công thức lithium nitride và aluminium nitride là","images":[],"options":[{"id":"a","letter":"A","text":"LiN<sub>3</sub> và Al<sub>3</sub>N","isCorrect":false},{"id":"b","letter":"B","text":"Li<sub>3</sub>N và AlN","isCorrect":true},{"id":"c","letter":"C","text":"Li<sub>2</sub>N<sub>3</sub> và Al<sub>2</sub>N<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Li<sub>3</sub>N<sub>2</sub> và Al<sub>3</sub>N<sub>2</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q33","number":33,"part":1,"type":"multiple_choice","text":"Ở nhiệt độ thường, nitrogen tác dụng với kim loại nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Mg","isCorrect":false},{"id":"b","letter":"B","text":"Al","isCorrect":false},{"id":"c","letter":"C","text":"Fe","isCorrect":false},{"id":"d","letter":"D","text":"Li","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q34","number":34,"part":1,"type":"multiple_choice","text":"Trong tự nhiên, phản ứng giữa nitrogen và oxygen (trong cơn mưa dông kèm sấm sét) là khởi đầu cho quá trình tạo và cung cấp loại phân bón nào cho cây?","images":[],"options":[{"id":"a","letter":"A","text":"Phân kali","isCorrect":false},{"id":"b","letter":"B","text":"Phân đạm ammonium","isCorrect":false},{"id":"c","letter":"C","text":"Phân lân","isCorrect":false},{"id":"d","letter":"D","text":"Phân đạm nitrate","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q35","number":35,"part":1,"type":"multiple_choice","text":"Nitrogen trong không khí có vai trò nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Cung cấp đạm tự nhiên cho cây trồng","isCorrect":true},{"id":"b","letter":"B","text":"Hình thành sấm sét","isCorrect":false},{"id":"c","letter":"C","text":"Tham gia quá trình quang hợp của cây","isCorrect":false},{"id":"d","letter":"D","text":"Tham gia hình thành mây","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q36","number":36,"part":1,"type":"multiple_choice","text":"Ứng dụng nào sau đây không phải của nitrogen?","images":[],"options":[{"id":"a","letter":"A","text":"Tổng hợp ammonia","isCorrect":false},{"id":"b","letter":"B","text":"Bảo quản máu","isCorrect":false},{"id":"c","letter":"C","text":"Diệt khuẩn, khử trùng","isCorrect":true},{"id":"d","letter":"D","text":"Bảo quản thực phẩm","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q37","number":37,"part":1,"type":"multiple_choice","text":"Trong nghiên cứu, khí nitrogen thường được dùng để tạo bầu khí quyển trơ dựa trên cơ sở nào?","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen có tính oxi hóa mạnh","isCorrect":false},{"id":"b","letter":"B","text":"Nitrogen rất bền với nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Nitrogen khó hóa lỏng","isCorrect":false},{"id":"d","letter":"D","text":"Nitrogen không có cực","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q38","number":38,"part":1,"type":"multiple_choice","text":"Trong công nghiệp, nitrogen được điều chế bằng cách nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Nhiệt phân muối NH<sub>4</sub>NO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Chưng cất phân đoạn không khí lỏng","isCorrect":true},{"id":"c","letter":"C","text":"Đun nóng dung dịch NaNO<sub>2</sub> và dung dịch NH<sub>4</sub>Cl bão hòa","isCorrect":false},{"id":"d","letter":"D","text":"Nhiệt phân muối NH<sub>4</sub>Cl","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q39","number":39,"part":1,"type":"multiple_choice","text":"Trong phòng thí nghiệm, người ta thu khí nitrogen bằng phương pháp dời nước vì","images":[],"options":[{"id":"a","letter":"A","text":"N<sub>2</sub> nhẹ hơn không khí","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub> ít tan trong nước","isCorrect":true},{"id":"c","letter":"C","text":"N<sub>2</sub> không duy trì sự sống, sự cháy","isCorrect":false},{"id":"d","letter":"D","text":"N<sub>2</sub> hoá lỏng, hóa rắn ở nhiệt độ rất thấp","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q40","number":40,"part":1,"type":"multiple_choice","text":"Các chất khí điều chế trong phòng thí nghiệm thường theo phương pháp đẩy không khí (cách 1, cách 2) hoặc đẩy nước (cách 3) như các hình vẽ dưới đây:<br/>Có thể dùng cách nào trong ba cách trên để thu khí N<sub>2</sub>?","images":[],"options":[{"id":"a","letter":"A","text":"Cách 3","isCorrect":false},{"id":"b","letter":"B","text":"Cách l","isCorrect":false},{"id":"c","letter":"C","text":"Cách 2","isCorrect":false},{"id":"d","letter":"D","text":"Cách 1 hoặc cách 3","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q41","number":41,"part":1,"type":"multiple_choice","text":"Trong tự nhiên, nguyên tố nitrogen có hai đồng vị bền là <sup>14</sup>N (99,63%) và <sup>15</sup>N (0,37%). Nguyên tử khối trung bình của nitrogen là","images":[],"options":[{"id":"a","letter":"A","text":"14,000","isCorrect":false},{"id":"b","letter":"B","text":"14,004","isCorrect":true},{"id":"c","letter":"C","text":"14,037","isCorrect":false},{"id":"d","letter":"D","text":"14,063","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q42","number":42,"part":1,"type":"multiple_choice","text":"Cho sơ đồ chuyển hóa nitrogen trong khí quyển thành phân đạm:<br/>N<sub>2</sub> &rarr; NO &rarr; NO<sub>2</sub> &rarr; HNO<sub>3</sub> &rarr; NO<sub>3</sub><sup>-</sup><br/>Số phản ứng thuộc loại oxi hóa – khử trong sơ đồ là","images":[],"options":[{"id":"a","letter":"A","text":"3","isCorrect":true},{"id":"b","letter":"B","text":"1","isCorrect":false},{"id":"c","letter":"C","text":"4","isCorrect":false},{"id":"d","letter":"D","text":"2","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q43","number":43,"part":1,"type":"multiple_choice","text":"Cho các phát biểu sau:<br/>(a) Trong không khí, nitrogen chiếm khoảng 78% về khối lượng.<br/>(b) Phân tử N<sub>2</sub> có chứa liên kết ba bền vững nên N<sub>2</sub> trơ về mặt hóa học ngay cả khi đun nóng.<br/>(c) Nitrogen lỏng thường được sử dụng để bảo quản mẫu vật phẩm trong y học.<br/>(d) Phần lớn nitrogen được sử dụng để tổng hợp ammonia từ đó sản xuất nitric acid, phân bón,...<br/>Số phát biểu đúng là","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":true},{"id":"b","letter":"B","text":"3","isCorrect":false},{"id":"c","letter":"C","text":"4","isCorrect":false},{"id":"d","letter":"D","text":"1","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q44","number":44,"part":1,"type":"multiple_choice","text":"Vì sao nitrogen lỏng có thể được sử dụng để làm lạnh nhanh?","images":[],"options":[{"id":"a","letter":"A","text":"Vì nitrogen lỏng phá hủy cấu trúc vật chất, sinh ra chất làm lạnh","isCorrect":false},{"id":"b","letter":"B","text":"Vì nitrogen lỏng làm chết vi khuẩn phân hủy vật chất","isCorrect":false},{"id":"c","letter":"C","text":"Vì nitrogen hóa lỏng ở nhiệt độ rất thấp","isCorrect":true},{"id":"d","letter":"D","text":"Vì nitrogen có tính oxi hóa vô cùng mạnh","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b4_p1_q45","number":45,"part":1,"type":"multiple_choice","text":"Người ta vận dụng tính chất nào sau đây của khí nitrogen trong phòng cháy và chữa cháy?","images":[],"options":[{"id":"a","letter":"A","text":"Tính trơ","isCorrect":true},{"id":"b","letter":"B","text":"Tính khử","isCorrect":false},{"id":"c","letter":"C","text":"Tính oxi hóa","isCorrect":false},{"id":"d","letter":"D","text":"Hóa lỏng","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25}],"part2":[{"id":"h11_b4_p2_q1","number":1,"part":2,"type":"true_false","text":"Ở trạng thái tự nhiên, nitrogen tồn tại ở dạng đơn chất và hợp chất","images":[],"options":[{"id":"a","letter":"A","text":"Ở dạng đơn chất, nitrogen chiếm khoảng 78% khối lượng của không khí","isCorrect":false},{"id":"b","letter":"B","text":"Nitrogen trong tự nhiên là hỗn hợp của hai đồng vị:  <sup>14</sup><sub>7</sub>N  và  <sup>15</sup><sub>7</sub>N","isCorrect":true},{"id":"c","letter":"C","text":"Ở dạng hợp chất, nitrogen có nhiều trong khoáng vật potassium nitrate gọi là diêm tiêu Chile","isCorrect":false},{"id":"d","letter":"D","text":"Trong cơ thể người, động vật và thực vật, nitrogen là thành phần cấu tạo nên nucleic acid, protein,","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Nitrogen chiếm khoảng 78% thể tích của không khí.<br/>b. Đ.<br/>c. S. Sodium nitrate gọi là diêm tiêu Chile.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b4_p2_q2","number":2,"part":2,"type":"true_false","text":"Nguyên tố nitrogen ở ô số 7, nhóm VA, chu kì 2 trong bảng tuần hoàn","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen là nguyên tố phi kim điển hình","isCorrect":true},{"id":"b","letter":"B","text":"Nguyên tử nitrogen có 5 electron ở lớp ngoài cùng","isCorrect":true},{"id":"c","letter":"C","text":"Nguyên tử nitrogen có 3 electron độc thân","isCorrect":true},{"id":"d","letter":"D","text":"Nguyên tử nitrogen có khả năng tạo ra ba liên kết cộng hóa trị với nguyên tố khác","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b4_p2_q3","number":3,"part":2,"type":"true_false","text":"Mô hình phân tử nitrogen và năng lượng liên kết trong phân tử nitrogen:","images":["/assets/hoa12/c5/h11_b4_image43.png"],"options":[{"id":"a","letter":"A","text":"Phân tử nitrogen gồm hai nguyên tử liên kết với nhau bằng liên kết ba","isCorrect":true},{"id":"b","letter":"B","text":"Trong phân tử nitrogen có 2 liên kết σ và 1 liên kết π","isCorrect":false},{"id":"c","letter":"C","text":"Phân tử nitrogen có năng lượng liên kết lớn nên rất khó bị phá vỡ","isCorrect":true},{"id":"d","letter":"D","text":"Ở nhiệt độ cao, phân tử nitrogen rất bền, khá trơ về mặt hoá học","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Trong phân tử nitrogen có 1 liên kết σ và 2 liên kết π.<br/>c. Đ.<br/>d. Ở nhiệt độ thường, phân tử nitrogen rất bền, khá trơ về mặt hoá học","explanationImages":[],"points":1},{"id":"h11_b4_p2_q4","number":4,"part":2,"type":"true_false","text":"Nitrogen là nguyên tố phổ biến nhất trong khí quyển Trái Đất","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen chiếm khoảng 78% khí quyển Trái Đất và là thành phần của mọi cơ thể sống","isCorrect":true},{"id":"b","letter":"B","text":"Khí nitrogen duy trì sự cháy và sự hô hấp","isCorrect":false},{"id":"c","letter":"C","text":"Khí nitrogen tan tốt trong nước ở điều kiện thường","isCorrect":false},{"id":"d","letter":"D","text":"Ở điều kiện thường, nitrogen là chất khí không màu, không mùi, không vị và nhẹ hơn không khí","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Khí nitrogen không duy trì sự cháy và sự hô hấp.<br/>c. S. Khí nitrogen tan rất ít trong nước ở điều kiện thường.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b4_p2_q5","number":5,"part":2,"type":"true_false","text":"Nitrogen khá trơ ở nhiệt độ thường, ở nhiệt độ cao, nitrogen trở nên hoạt động hơn","images":[],"options":[{"id":"a","letter":"A","text":"Đơn chất nitrogen thể hiện cả tính khử và tính oxi hóa","isCorrect":true},{"id":"b","letter":"B","text":"Nitrogen hoạt động kém ở nhiệt độ thường là do có năng lượng liên kết rất lớn","isCorrect":true},{"id":"c","letter":"C","text":"Trong phản ứng giữa nitrogen và hydrogen, nitrogen đóng vai trò là chất khử","isCorrect":false},{"id":"d","letter":"D","text":"Trong phản ứng giữa nitrogen và oxygen, nitrogen đóng vai trò là chất oxi hóa","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Nitrogen đóng vai trò là chất oxi hóa.<br/>d. S. Nitrogen đóng vai trò là chất khử","explanationImages":[],"points":1},{"id":"h11_b4_p2_q6","number":6,"part":2,"type":"true_false","text":"Trong công nghiệp, ammonia được sản xuất dựa vào phản ứng thuận nghịch giữa nitrogen và hydrogen trong thiết bị kín:<br/>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ (xt, t°, p) 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -92 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng trên là phản ứng thu nhiệt vì  &Delta;<sub>r</sub>H<sup>0</sup><sub>298</sub> &lt; 0 (phản ứng tỏa nhiệt)","isCorrect":false},{"id":"b","letter":"B","text":"Quá trình tổng hợp ammonia trên thường được gọi là quá trình Haber – Bosch","isCorrect":true},{"id":"c","letter":"C","text":"Trong phản ứng trên, nitrogen đóng vai trò là chất khử","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng tổng hợp ammonia là quá trình trung gian quan trọng để sản xuất nitric acid","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Phản ứng tỏa nhiệt.<br/>b. Đ.<br/>c. S. nitrogen đóng vai trò là chất oxi hóa.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b4_p2_q7","number":7,"part":2,"type":"true_false","text":"Những nhận xét về nitrogen dưới đây là đúng hay sai","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen trong tự nhiên chỉ tồn tại ở dạng đơn chất","isCorrect":false},{"id":"b","letter":"B","text":"Để thu khí nitrogen trong phòng thí nghiệm, người ta dùng phương pháp đẩy nước","isCorrect":true},{"id":"c","letter":"C","text":"Khi tác dụng với kim loại hoạt động, nitrogen thể hiện tính khử","isCorrect":false},{"id":"d","letter":"D","text":"Số oxi hóa của nitrogen trong các hợp chất và ion AlN, N<sub>2</sub>O, NH<sub>4</sub><sup>+</sup>, NO<sub>3</sub><sup>–</sup> lần lượt là –3, +2, –3, +5","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Nitrogen trong tự nhiên có thể tồn tại ở dạng đơn chất và hợp chất.<br/>b. Đ.<br/>c. S. Nitrogen thể hiện tính oxi hóa khi tác dụng với kim loại.<br/>d. S. N<sub>2</sub>O số oxi hóa của nitrogen là +1","explanationImages":[],"points":1},{"id":"h11_b4_p2_q8","number":8,"part":2,"type":"true_false","text":"Quá trình tạo và cung cấp đạm nitrate cho đất từ nước mưa được biểu diễn theo sơ đồ sau:<br/>(1)(2)(3)(4)2233NNONOHNOHNO+- →  →  →  → +","images":[],"options":[{"id":"a","letter":"A","text":"Trong tự nhiên, phản ứng (1) xảy ra trong những cơn mưa giông kèm sấm sét","isCorrect":true},{"id":"b","letter":"B","text":"Các phản ứng trong sơ đồ trên đều xảy ra quá trình oxi hóa khử","isCorrect":false},{"id":"c","letter":"C","text":"Các hoạt động giao thông vận tải và sản xuất công nghiệp là nguyên nhân chính phát thải khí nitrogen","isCorrect":false},{"id":"d","letter":"D","text":"Ion nitrate (NO<sub>3</sub><sup>–</sup>) là một dạng phân đạm mà cây trồng hấp thụ được để sinh trưởng, phát triển","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S.<br/>c. S. Nitrogen có nhiều trong không khí còn các hoạt động giao thông vận tải và sản xuất công nghiệp là nguyên nhân chính phát thải khí các oxide của nitrogen.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b4_p2_q9","number":9,"part":2,"type":"true_false","text":"Mỗi năm có hàng triệu tấn nitrogen được sản xuất toàn cầu; trong đó nitrogen dạng khí chiếm khoảng hai phần ba, còn lại là nitrogen lỏng","images":[],"options":[{"id":"a","letter":"A","text":"Trong chữa cháy, nitrogen dùng để dập tắt các đám cháy do hóa chất, chập điện","isCorrect":true},{"id":"b","letter":"B","text":"Trong công nghiệp thực phẩm, nitrogen lỏng được sử dụng làm lạnh nhanh, bảo quản thực phẩm","isCorrect":true},{"id":"c","letter":"C","text":"Trong công nghệ đóng gói thực phẩm, khí nitrogen được bơm vào túi để loại bỏ khí oxygen và làm phồng bao","isCorrect":true},{"id":"d","letter":"D","text":"Trong lĩnh vực sinh học và y học, các mẫu vật sinh học được bảo quản trong bình nitrogen lỏng","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b4_p2_q10","number":10,"part":2,"type":"true_false","text":"Nitrogen là khí có hàm lượng lớn nhất trong không khí, có nhiều ứng dụng trong cuộc sống và sản xuất","images":[],"options":[{"id":"a","letter":"A","text":"Trong công nghiệp, để sản xuất nitrogen số lượng lớn người ta dùng phương pháp chưng cất phân đoạn không khí lỏng","isCorrect":true},{"id":"b","letter":"B","text":"Nitrogen hóa lỏng ở -196<sup>o</sup>C được dùng để bảo quản máu, tế bào, dịch cơ thể","isCorrect":true},{"id":"c","letter":"C","text":"Trong khai thác dầu khí, hỗn hợp khí N<sub>2</sub> và CO<sub>2</sub> được bơm vào bể chứa dầu mỏ để tạo áp suất đẩy dầu còn dư bị kẹt lại lên trên nhờ đặc tính nén cao","isCorrect":true},{"id":"d","letter":"D","text":"Trong công nghiệp, phần lớn lượng nitrogen sản xuất ra được dùng để tạo môi trường trơ trong thực phẩm, luyện kim, điện tử","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Phần lớn lượng nitrogen sản xuất ra được dùng để tổng hợp ammonia","explanationImages":[],"points":1}],"part3":[{"id":"h11_b4_p3_q1","number":1,"part":3,"type":"short_answer","text":"Trong vỏ Trái Đất, nitrogen tồn tại tập trung ở một số mỏ khoáng dưới dạng sodium nitrate (NaNO<sub>3</sub> thường gọi là diêm tiêu Chile). Số oxi hóa của nguyên tố nitrogen trong phân tử sodium nitrate là bao nhiêu?","images":[],"correctAnswer":"+5","explanation":"Đáp án: +5","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q2","number":2,"part":3,"type":"short_answer","text":"Ở dạng đơn chất, nitrogen chiếm khoảng bao nhiêu phần trăm thể tích của không khí)?<br/>Biểu đồ thể tích của không khí","images":["/assets/hoa12/c5/h11_b4_image46.png"],"correctAnswer":"78","explanation":"Đáp án: 78","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q3","number":3,"part":3,"type":"short_answer","text":"Trong tự nhiên, nitrogen có bao nhiêu đồng vị bền?","images":[],"correctAnswer":"2","explanation":"Đáp án: 2","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q4","number":4,"part":3,"type":"short_answer","text":"Cho các hợp chất sau: sodium nitrate, protein, nucleic acid, ammonia và sulfur dioxide. Có bao nhiêu hợp chất có chứa nguyên tố nitrogen trong phân tử?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q5","number":5,"part":3,"type":"short_answer","text":"Cho các phản ứng hóa học sau:<br/>(1)  ot22NO2NO+ ⇌ .(2)  oxt,t223N3H2NH+ ⇌ .<br/>(2)  ot22AlN2AlN+ → .(4)  ot2323MgNMgN+ → .<br/>Có bao nhiên phản ứng mà nitrogen đóng vai trò là chất oxi hóa?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q6","number":6,"part":3,"type":"short_answer","text":"Quá trình tạo và cung cấp đạm nitrate cho đất từ nước mưa được biểu diễn theo sơ đồ sau:<br/>N<sub>2</sub> <span class='inline-block mx-1 text-slate-800'>→<sup>+O<sub>2</sub></sup></span> NO <span class='inline-block mx-1 text-slate-800'>→<sup>+O<sub>2</sub></sup></span> NO<sub>2</sub> <span class='inline-block mx-1 text-slate-800'>→<sup>+O<sub>2</sub> + H<sub>2</sub>O</sup></span> HNO<sub>3</sub> <span class='inline-block mx-1 text-slate-800'>→</span> H<sup>+</sup> + NO<sub>3</sub><sup>–</sup><br/>Mỗi mũi tên là một phản ứng hóa học. Có bao nhiêu phản ứng mà nitrogen đóng vai trò là chất khử?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q7","number":7,"part":3,"type":"short_answer","text":"Giả thiết thành phần không khí gồm: 78% nitrogen, 21% oxygen và 1% argon (về thể tích).<br/>(a) Tính phân tử khối trung bình của không khí. (Kết quả làm tròn đến hàng đơn vị).<br/>(b) Tính khối lượng riêng (g/L) của không khí ở điều kiện chuẩn (25<sup>o</sup>C, 1 bar). (Kết quả làm tròn đến hàng phần trăm).","images":[],"correctAnswer":"29","acceptedAnswers":["29","28.97","28,97","1,17","1.17"],"explanation":"(a) Phân tử khối trung bình của không khí:<br/>M<sub>kk</sub> = 28,014 &times; 0,78 + 31,998 &times; 0,21 + 39,948 &times; 0,01 = 28,97 &approx; 29 (g/mol).<br/>(b) Khối lượng riêng ở điều kiện chuẩn (1 mol khí chiếm 24,79 L):<br/>D = M<sub>kk</sub> / V<sub>mol</sub> = 28,97 / 24,79 &approx; 1,17 (g/L).","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q8","number":8,"part":3,"type":"short_answer","text":"Trong những cơn mưa dông kèm theo sấm sét; giả thiết có 17,353 m<sup>3</sup> khí N<sub>2</sub> (đkc) trong khí quyển được chuyển hóa thành phân đạm theo sơ đồ sau:<br/>N<sub>2</sub> &rarr; NO &rarr; NO<sub>2</sub> &rarr; HNO<sub>3</sub> &rarr; H<sup>+</sup> + NO<sub>3</sub><sup>-</sup><br/>Tính số mol gốc NO<sub>3</sub><sup>–</sup> tạo thành trong cơn mưa là bao nhiêu?","images":[],"correctAnswer":"1400","explanation":"Đáp án: 1400.<br/>223NNNO17,353n700moln2n1400mol24,79-==Þ==","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q9","number":9,"part":3,"type":"short_answer","text":"Trong công nghiệp, ammonia được sản xuất theo phản ứng pha khí:<br/>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ (xt, t°) 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> <br/>Cho biết các giá trị năng lượng liên kết E<sub>b</sub>(kJ·mol<sup>-1</sup>):<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Liên kết</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">N ≡ N</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">H – H</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">N – H</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Eb</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">945</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">436</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">386</td></tr></table></div><br/>a) Tính nhiệt phản ứng &nbsp; Δ<sub>r</sub>H°<sub>298</sub>  (kJ) của phản ứng ở điều kiện chuẩn.<br/>b) Tính nhiệt tạo thành  of298HD  (kJ·mol<sup>-1</sup>) của NH<sub>3</sub>(g). (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"a) -63. b) -32","explanation":"Đáp án: a) -63. b) -32.<br/>a) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = 945 + 3.436 – 2.3.386 =  -63 kJ < 0  Þ  Phản ứng tỏa nhiệt<br/>b) Ta có:  3223ooooor298f298(NH)f298(N)f298(H)f298(NH)0063H2.HH3.H63kJH31,5kJ/mol.2-D=D-D-D=-ÞD==-E55555FE55555F","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q10","number":10,"part":3,"type":"short_answer","text":"Một bình kín có dung tích là 0,5 L chứa 1,0 mol H<sub>2</sub> và 0,5 mol N<sub>2</sub> ở nhiệt độ xác định. Ở trạng thái cân bằng có 0,3 mol NH<sub>3</sub> tạo thành. Hằng số K<sub>c</sub>của phản ứng xảy ra trong bình là bao nhiêu? (Kết quả làm tròn đến hàng phần trăm)","images":[],"correctAnswer":"0,39","explanation":"Đáp án: 0,39.<br/>PTHH:           N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ (xt, t°, p) 2NH<sub>3</sub>(g)<br/>Ban đầu:        1             2                           0             (M)<br/>Phản ứng:    0,3 ← 0,9 ← 0,6            (M)<br/>Cân bằng:    0,7          1,1                        0,6            (M)<br/>Þ   223C3322[NH]0,6K0,386[N].[H]0,7.1,1===","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q11","number":11,"part":3,"type":"short_answer","text":"Hình 5.11. Biểu diễn sự tạo thành NO từ N<sub>2</sub> và O<sub>2</sub>. Tính nhiệt tạo thành chuẩn của NO theo năng lượng liên kết.<br/>Biết năng lượng liên kết được cho trong bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Liên kết</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">N≡N</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">O=O</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">N=O</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Năng lượng liên kết (kJ/mol)</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">945</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">498</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">631</td></tr></table></div><br/>Giá trị nhiệt tạo thành chuẩn của NO(g) theo năng lượng liên kết là bao nhiêu kJ/mol?","images":["/assets/hoa12/c5/h11_b4_image59.png"],"correctAnswer":"90,5","explanation":"Đáp án: 90,5.<br/>Δ<sub>r</sub>H°<sub>298</sub>  = Eb(N<sub>2</sub>) + Eb(O<sub>2</sub>) – 2Eb(NO) = 181 kJ.<br/>Δ<sub>r</sub>H°<sub>298</sub> = 2 of298H(NO)D    of298H(NO)D = 90,5 kJ/mol","explanationImages":[],"points":0.25},{"id":"h11_b4_p3_q12","number":12,"part":3,"type":"short_answer","text":"Cho cân bằng ở 1650℃:  ot22NO2NO+ ⇌ ; K<sub>c</sub> = 4.10<sup>-4</sup><br/>Thực hiện phản ứng trên trong một bình kín với một hỗn hợp nitrogen và oxygen có tỉ lệ mol tương ứng là 4 : 1. Hiệu suất của phản ứng khi hệ cân bằng ở 1650℃ là bao nhiêu %?","images":[],"correctAnswer":"2","explanation":"Đáp án: 2.<br/>Chọn số mol của N<sub>2</sub> và O<sub>2</sub> lần lượt là 4 mol và 1 mol, bình dung tích 1 lít  Þ   ))4122M(NM(OCM, CM==<br/>2x              (mol/L)b»ng:  4-x                1-xC©n2x              (mol/L)Ph¶n øng:    x             xOhÕt,Nd­TÝnhH%theoOBan ®Çu:      4      >       12NO(g)    K4.10N(g)       O(g)22222C4 ⇌ ¬®ÞÞ+=-<br/>x0,02(lo¹i)[N].[O](4x)(1x)1K4.10[NO](2x)x0,02H.100%2%0,02222C1422ëê=---ê===Þê»Þ==é-<br/>","explanationImages":[],"points":0.25}]}},"bai5":{"id":"bai5","lessonNumber":5,"title":"Bài 5. Ammonia và muối ammonium","shortTitle":"Ammonia và muối ammonium","badge":"Bài 5","icon":"🧪","description":"Cấu tạo hình chóp tam giác, tính base yếu, tính khử của NH3; nhiệt phân muối ammonium và ứng dụng phân bón.","theory":"I. AMMONIA1. Cấu tạo phân tử:- Phân tử ammonia được tạo bởi một nguyên tử nitrogen liên kết với ba nguyên tử hydrogen và có dạng hình học là chóp tam giác:Đặc điểm cấu tạo của phân tử ammonia:- Nguyên tử nitrogen còn một cặp electron không liên kết, tạo ra vùng có mật độ điện tích âm trên nguyên tử nitrogen- Liên kết N-H phân cực, cặp electron dùng chung lệch về nguyên tử nitrogen làm cho nguyên tử hydrogen mang một phần điện tích dương.- Liên kết N-H tương đối bền với năng lượng liên kết là 386 kJ/mol.<div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Ví dụ 1. Trình bày các bước lập công thức Lewis của phân tử ammonia.<br/>Đáp án:<br/>Viết công thức electron:<br/>Từ công thức electron, thay 1 cặp electron dùng chung bằng 1 gạch nối giữa hai nguyên tử (liên kết cộng hóa trị phân cực) ta được công thức Lewis:<br/>Ví dụ 2. Dạng hình học của phân tử ammonia là<br/>A. hình tam giác đều.B. hình tứ diện.<br/>C. đường thẳng.D. hình chóp tam giác.<br/>Ví dụ 3. Từ đặc điểm cấu tạo của phân tử ammonia, hãy giải thích tại sao:<br/>a) Ammonia là một base.<br/>a) Các phân tử ammonia có khả năng tạo liên kết hydrogen mạnh với nhau.<br/>Đáp án:<br/>a) Do nguyên tử nitrogen trong phân tử ammonia còn một cặp electron chưa tham gia liên kết có thể nhận proton H<sup>+</sup>.<br/>b) Nguyên tử nitrogen còn một cặp electron không liên kết, tạo ra vùng có mật độ điện tích âm trên nguyên tử nitrogen.<br/>- Liên kết N – H phân cực, cặp electron dùng chung lệch về phía nguyên tử nitrogen làm cho nguyên tử hydrogen mang một phần điện tích dương.<br/>Do đó, các phân tử ammonia có khả năng tạo liên kết hydrogen mạnh với nhau.</th></tr></table></div>2. Tính chất vật lí:- Ammonia tồn tại ở cả trong môi trường đất, nước, không khí. Trong cơ thể người. ammonia được tạo ra trong quá trình chuyển hoá thức ăn chứa protein.- Ở điều kiện thường, ammonia tồn tại ở thể khí, không màu, nhẹ hơn không khí, mùi khai và xốc. Ammonia tan nhiều trong nước. Ở điều kiện thường, 1 lít nước hoà tan được khoảng 700 lít khí ammonia. Ammonia dễ hoá lỏng (hoá lỏng ở -33,3°C) và dễ hoá rắn (hóa rắn ở –77,7°C).<div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Ví dụ 1. Hãy giải thích tại sao ammonia tan tốt trong nước.<br/>Đáp án:<br/>Vì tạo được liên kết hydrogen với nước nên ammonia tan nhiều trong nước.<br/>Ví dụ 2. Cho thí nghiệm được thiết kế như hình dưới đây:<br/>a) Trong thí nghiệm này, nước pha phenolphtalein sẽ bị hút lên bình chứa khí ammonia và phun thành tia màu hồng. Hãy giải thích hiện tượng trên.<br/>b) Trong phòng thí nghiệm, có thể thu khí NH3 bằng phương pháp đẩy nước được không? Vì sao.<br/>Đáp án:<br/>a) Do NH3 tan tốt trong nước nên làm giảm áp suất đột ngột nên nước bị phun thành tia, khi NH3 tan trong nước tạo thành dung dịch base nên làm cho nước chứa phenolphtalein chuyển màu hồng.<br/>b) Vì NH3 tan tốt trong nước nên không thể thu được bằng phương pháp đẩy nước.<br/>Ví dụ 3. Trong các phát biểu sau, phát biểu nào không đúng?<br/>A. Ở điều kiện thường, ammonia là chất khí không màu, mùi xốc.<br/>B. Khí ammonia nặng hơn không khí và tan nhiều trong nước.<br/>C. Khí ammonia dễ hoá lỏng và hóa rắn.<br/>D. Phân tử ammonia chứa các liên kết cộng hoá trị phân cực.<br/>Ví dụ 4. Các chất khí điều chế trong phòng thí nghiệm thường được thu theo phương pháp đẩy không khí (cách 1, cách 2) hoặc đẩy nước (cách 3) như các hình vẽ dưới đây:<br/>Có thể dùng cách nào trong 3 cách trên để thu khí ammonia?<br/>A. Cách 3.                B. Cách 1.               C. Cách 2. D. Cách 2 hoặc cách 3.<br/>Đáp án:<br/>Ammonia là chất khí nhẹ hơn không khí và tan nhiều trong nước nên cách 1 là lựa chọn tốt nhất.</th></tr></table></div>3. Tính chất hóa học:","mathForms":[{"id":"bai5_mf1","title":"Dạng 1: Các phương pháp giải nhanh trọng tâm Bài 5. Ammonia và muối ammonium","method":"Hệ thống hóa các công thức trọng tâm, định luật và phương pháp bảo toàn thường dùng trong Bài 5. Ammonia và muối ammonium","examples":[{"number":1,"text":"Ví dụ minh họa dạng toán trọng tâm Bài 5. Ammonia và muối ammonium: Áp dụng công thức và định luật để giải bài toán định lượng","solution":"Áp dụng phương pháp phân tích đề bài, lập phương trình tương ứng và thế số để tính đáp án chính xác"}]}],"practice":{"part1":[{"id":"h11_b5_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Công thức phân tử của ammonia là","images":[],"options":[{"id":"a","letter":"A","text":"N<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"HNO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"NH<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"NH<sub>4</sub><sup>+</sup>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Trong phân tử ammonia, nguyên tử nitrogen có số oxi hóa là","images":[],"options":[{"id":"a","letter":"A","text":"+3","isCorrect":false},{"id":"b","letter":"B","text":"-3","isCorrect":true},{"id":"c","letter":"C","text":"+4","isCorrect":false},{"id":"d","letter":"D","text":"+5","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Phân tử ammonia có dạng hình học nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Chóp tam giác","isCorrect":true},{"id":"b","letter":"B","text":"Chữ T","isCorrect":false},{"id":"c","letter":"C","text":"Chóp tứ giác","isCorrect":false},{"id":"d","letter":"D","text":"Tam giác đều","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Liên kết hoá học trong phân tử NH<sub>3</sub> là liên kết","images":[],"options":[{"id":"a","letter":"A","text":"cộng hoá trị có cực","isCorrect":true},{"id":"b","letter":"B","text":"ion","isCorrect":false},{"id":"c","letter":"C","text":"cộng hoá trị không cực","isCorrect":false},{"id":"d","letter":"D","text":"kim loại","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Nhận định nào sau đây về phân tử ammonia không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phân cực mạnh","isCorrect":false},{"id":"b","letter":"B","text":"Có một cặp electron không liên kết","isCorrect":false},{"id":"c","letter":"C","text":"Có độ bền nhiệt rất cao","isCorrect":true},{"id":"d","letter":"D","text":"Có khả năng nhận proton","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Trong các phát biểu sau, phát biểu nào không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Ở điều kiện thường, NH<sub>3</sub> là chất khí không màu","isCorrect":false},{"id":"b","letter":"B","text":"Khí NH<sub>3</sub> nặng hơn không khí","isCorrect":true},{"id":"c","letter":"C","text":"Khí NH<sub>3</sub> dễ hoá lỏng, tan nhiều trong nước","isCorrect":false},{"id":"d","letter":"D","text":"Khí NH<sub>3</sub> có mùi khai, xốc","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Ở trạng thái lỏng nguyên chất, phân tử chất nào sau đây tạo được liên kết hydrogen với nhau?","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen","isCorrect":false},{"id":"b","letter":"B","text":"Ammonia","isCorrect":true},{"id":"c","letter":"C","text":"Oxygen","isCorrect":false},{"id":"d","letter":"D","text":"Hydrogen","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Khí nào sau đây dễ tan trong nước do tạo được liên kết hydrogen với nước?","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen","isCorrect":false},{"id":"b","letter":"B","text":"Hydrogen","isCorrect":false},{"id":"c","letter":"C","text":"Ammonia","isCorrect":true},{"id":"d","letter":"D","text":"Oxygen","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Tính chất hóa học của NH<sub>3</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"tính base, tính khử","isCorrect":true},{"id":"b","letter":"B","text":"tính base, tính oxi hóa","isCorrect":false},{"id":"c","letter":"C","text":"tính acid, tính base","isCorrect":false},{"id":"d","letter":"D","text":"tính acid, tính khử","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Khi tác dụng với nước, ammonia đóng vai trò là","images":[],"options":[{"id":"a","letter":"A","text":"acid","isCorrect":false},{"id":"b","letter":"B","text":"base","isCorrect":true},{"id":"c","letter":"C","text":"chất oxi hóa","isCorrect":false},{"id":"d","letter":"D","text":"chất khử","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Khi hoà tan khí  3NH vào nước ta được dung dịch base yếu, ngoài nước còn chứa:","images":[],"options":[{"id":"a","letter":"A","text":"4NHOH","isCorrect":false},{"id":"b","letter":"B","text":"3NH","isCorrect":false},{"id":"c","letter":"C","text":"4NH+  và  OH<sup>-</sup>","isCorrect":false},{"id":"d","letter":"D","text":"34NH,NH+  và  OH<sup>-</sup>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Trong dung dịch, ammonia thể hiện tính base yếu do","images":[],"options":[{"id":"a","letter":"A","text":"phân tử ammonia chứa liên kết cộng hoá trị phân cực và liên kết hydrogen","isCorrect":false},{"id":"b","letter":"B","text":"phân tử ammonia chứa liên kết cộng hoá trị phân cực và liên kết ion","isCorrect":false},{"id":"c","letter":"C","text":"phần lớn các phân tử ammonia kết hợp với nước tạo ra các ion  4NH+  và  OH<sup>-</sup>","isCorrect":false},{"id":"d","letter":"D","text":"một phần nhỏ các phân tử NH<sub>3</sub> kết hợp với ion H<sup>+</sup> của nước tạo  4NH+  và  OH<sup>-</sup>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Cho thí nghiệm như hình vẽ, bên trong bình có chứa khí ammonia, trong chậu thủy tinh chứa nước có nhỏ vài giọt phenolphthalein.<br/>Hiện tượng xảy ra trong thí nghiệm là","images":["/assets/hoa12/c5/h11_b5_image100.png"],"options":[{"id":"a","letter":"A","text":"nước phun vào bình và chuyển thành màu hồng","isCorrect":true},{"id":"b","letter":"B","text":"nước phun vào bình và chuyển thành màu tím","isCorrect":false},{"id":"c","letter":"C","text":"nước phun vào bình và không có màu","isCorrect":false},{"id":"d","letter":"D","text":"nước phun vào bình và chuyển thành màu xanh","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Xét cân bằng hóa học: NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup><br/>Hằng số cân bằng (K<sub>c</sub>) của phản ứng được biểu diễn bằng biểu thức nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"<span class=\"inline-flex items-center gap-1.5 align-middle font-medium\"><span>K<sub>c</sub> = </span><span class=\"inline-flex flex-col text-center align-middle mx-1 text-[0.95em] leading-tight\"><span class=\"border-b border-current px-1 pb-0.5\">[NH<sub>4</sub><sup>+</sup>] · [OH<sup>-</sup>]</span><span class=\"px-1 pt-0.5\">[NH<sub>3</sub>]</span></span></span>","isCorrect":true},{"id":"b","letter":"B","text":"<span class=\"inline-flex items-center gap-1.5 align-middle font-medium\"><span>K<sub>c</sub> = </span><span class=\"inline-flex flex-col text-center align-middle mx-1 text-[0.95em] leading-tight\"><span class=\"border-b border-current px-1 pb-0.5\">[NH<sub>4</sub><sup>+</sup>] · [OH<sup>-</sup>]</span><span class=\"px-1 pt-0.5\">[NH<sub>3</sub>] · [H<sub>2</sub>O]</span></span></span>","isCorrect":false},{"id":"c","letter":"C","text":"<span class=\"inline-flex items-center gap-1.5 align-middle font-medium\"><span>K<sub>c</sub> = </span><span class=\"inline-flex flex-col text-center align-middle mx-1 text-[0.95em] leading-tight\"><span class=\"border-b border-current px-1 pb-0.5\">[NH<sub>4</sub><sup>+</sup>] · [OH<sup>-</sup>]</span><span class=\"px-1 pt-0.5\">[H<sub>2</sub>O]</span></span></span>","isCorrect":false},{"id":"d","letter":"D","text":"<span class=\"inline-flex items-center gap-1.5 align-middle font-medium\"><span>K<sub>c</sub> = </span><span class=\"inline-flex flex-col text-center align-middle mx-1 text-[0.95em] leading-tight\"><span class=\"border-b border-current px-1 pb-0.5\">[NH<sub>4</sub><sup>+</sup>]</span><span class=\"px-1 pt-0.5\">[NH<sub>3</sub>]</span></span></span>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Cho vài giọt quỳ tím vào dung dịch NH<sub>3</sub> thì dung dịch chuyển thành","images":[],"options":[{"id":"a","letter":"A","text":"màu hồng","isCorrect":false},{"id":"b","letter":"B","text":"màu vàng","isCorrect":false},{"id":"c","letter":"C","text":"màu đỏ","isCorrect":false},{"id":"d","letter":"D","text":"màu xanh","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Cho vài giọt dung dịch phenolphthalein vào dung dịch NH<sub>3</sub>, phenolphthalein chuyển sang màu nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Hồng","isCorrect":true},{"id":"b","letter":"B","text":"Xanh","isCorrect":false},{"id":"c","letter":"C","text":"Không màu","isCorrect":false},{"id":"d","letter":"D","text":"Vàng","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Hiện tượng xảy ra khi cho giấy quỳ khô vào bình đựng khí ammonia là","images":[],"options":[{"id":"a","letter":"A","text":"giấy quỳ chuyển sang màu đỏ","isCorrect":false},{"id":"b","letter":"B","text":"giấy quỳ chuyển sang màu xanh","isCorrect":false},{"id":"c","letter":"C","text":"giấy quỳ mất màu","isCorrect":false},{"id":"d","letter":"D","text":"giấy quỳ không chuyển màu","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Nhúng 2 đũa thuỷ tinh vào 2 bình đựng dung dịch HCl đặc và NH<sub>3</sub> đặc. Sau đó đưa 2 đũa lại gần nhau thì thấy xuất hiện","images":[],"options":[{"id":"a","letter":"A","text":"khói màu trắng","isCorrect":true},{"id":"b","letter":"B","text":"khói màu tím","isCorrect":false},{"id":"c","letter":"C","text":"khói màu nâu","isCorrect":false},{"id":"d","letter":"D","text":"khói màu vàng","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q19","number":19,"part":1,"type":"multiple_choice","text":"Trong phản ứng giữa khí ammonia và khí hydrogen chloride thành ammonium chloride ở dạng khí trắng, ammonia đóng vai trò là:","images":[],"options":[{"id":"a","letter":"A","text":"acid","isCorrect":false},{"id":"b","letter":"B","text":"base","isCorrect":true},{"id":"c","letter":"C","text":"chất oxi hóa","isCorrect":false},{"id":"d","letter":"D","text":"chất khử","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q20","number":20,"part":1,"type":"multiple_choice","text":"Cho dung dịch NH<sub>3</sub>vào dung dịch chất nào sau đây thu được kết tủa trắng ?","images":[],"options":[{"id":"a","letter":"A","text":"HCl","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>3</sub>PO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"AlCl<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q21","number":21,"part":1,"type":"multiple_choice","text":"Cặp chất nào tác dụng với dung dịch NH<sub>3</sub> dư đều thu được kết tủa sau phản ứng?","images":[],"options":[{"id":"a","letter":"A","text":"Na<sub>2</sub>SO<sub>4</sub>, MgCl<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"CuSO<sub>4</sub>, FeSO<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"AlCl<sub>3</sub>, Fe(NO<sub>3</sub>)<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"AgNO<sub>3</sub>, Zn(NO<sub>3</sub>)<sub>2</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q22","number":22,"part":1,"type":"multiple_choice","text":"Ammonia đóng vai trò chất khử khi tác dụng với chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"HCl","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>3</sub>PO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"O<sub>2</sub> (Pt, t<sup>o</sup>)","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q23","number":23,"part":1,"type":"multiple_choice","text":"Cho phản ứng sau:  ot,322NHOXHO+ → + . Chất X là","images":[],"options":[{"id":"a","letter":"A","text":"NO","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub>","isCorrect":true},{"id":"c","letter":"C","text":"N<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>2</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q24","number":24,"part":1,"type":"multiple_choice","text":"Trong phương pháp Ostwald, ammoni bị oxi hóa bởi oxygen không khí (xúc tác Pt, t<sup>o</sup>) tạo thành sản phẩm chính là","images":[],"options":[{"id":"a","letter":"A","text":"NO","isCorrect":true},{"id":"b","letter":"B","text":"N<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"N<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>2</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q25","number":25,"part":1,"type":"multiple_choice","text":"Trong các phản ứng hóa học dưới đây, ở phản ứng nào amoniac không thể hiện tính khử?","images":[],"options":[{"id":"a","letter":"A","text":"t3222NH3CuON3HO3Cu°+ → ++","isCorrect":false},{"id":"b","letter":"B","text":"34NHHClNHCl+ →","isCorrect":true},{"id":"c","letter":"C","text":"32248NH3ClN6NHCl+ → +","isCorrect":false},{"id":"d","letter":"D","text":"t32224NH3O2N6HO°+ → +","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q26","number":26,"part":1,"type":"multiple_choice","text":"Phương trình hóa học nào sau đây sai?","images":[],"options":[{"id":"a","letter":"A","text":"3343NHHNONHNO.+ →","isCorrect":false},{"id":"b","letter":"B","text":"ot3224NH5O4NO6HO.+ → +","isCorrect":true},{"id":"c","letter":"C","text":"ot3222NH3CuON3Cu3HO.+ → ++","isCorrect":false},{"id":"d","letter":"D","text":"332343NHAlCl3HOAl(OH)3NHCl.++ → ¯+","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q27","number":27,"part":1,"type":"multiple_choice","text":"","images":[],"options":[{"id":"a","letter":"A","text":"HCl, O<sub>2</sub>, Cl<sub>2</sub>, CuO, AlCl<sub>3</sub>","isCorrect":true},{"id":"b","letter":"B","text":"H<sub>2</sub>SO<sub>4</sub>, PbO, FeO, NaOH","isCorrect":false},{"id":"c","letter":"C","text":"HCl, KOH, FeCl<sub>3</sub>, Cl<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"KOH, HNO<sub>3</sub>, CuO, CuCl<sub>2</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q28","number":28,"part":1,"type":"multiple_choice","text":"Chất nào sau đây được sử dụng là chất làm lạnh trong hệ thống làm lạnh công nghiệp?","images":[],"options":[{"id":"a","letter":"A","text":"N<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NH<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"SO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"S","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q29","number":29,"part":1,"type":"multiple_choice","text":"Trong công nhiệp, khí ammonia được điều chế bằng cách","images":[],"options":[{"id":"a","letter":"A","text":"cho khí N<sub>2</sub> tác dụng với khí H<sub>2</sub> (xúc tác Fe, t<sup>o</sup>, p cao)","isCorrect":true},{"id":"b","letter":"B","text":"nhiệt phân muối NH<sub>4</sub>NO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"cho dung dịch NH<sub>4</sub>Cl tác dụng với dụng dịch Ca(OH)<sub>2</sub> đun nóng","isCorrect":false},{"id":"d","letter":"D","text":"nhiệt phân muối NH<sub>4</sub>NO<sub>2</sub> bão hòa","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q30","number":30,"part":1,"type":"multiple_choice","text":"Trong phản ứng tổng hợp ammonia: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ (xt, t°, p) 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -92 kJ<br/>Để tăng hiệu suất phản ứng tổng hợp phải","images":[],"options":[{"id":"a","letter":"A","text":"giảm nhiệt độ và áp suất","isCorrect":false},{"id":"b","letter":"B","text":"tăng nhiệt độ và áp suất","isCorrect":false},{"id":"c","letter":"C","text":"tăng nhiệt độ và giảm áp suất","isCorrect":false},{"id":"d","letter":"D","text":"giảm nhiệt độ vừa phải và tăng áp suất","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q31","number":31,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây là không đúng khi nói về ammonia?","images":[],"options":[{"id":"a","letter":"A","text":"Trong công nghiệp, ammonia thường được sử dụng với vai trò chất làm lạnh (chất sinh hàn)","isCorrect":false},{"id":"b","letter":"B","text":"Do có hàm lượng nitrogen cao (82,35% theo khối lượng) nên ammonia được sử dụng làm phân đạm rất hiệu quả","isCorrect":true},{"id":"c","letter":"C","text":"Phần lớn ammonia được dùng phản ứng với acid để sản xuất các loại phân đạm","isCorrect":false},{"id":"d","letter":"D","text":"Quá trình tổng hợp ammonia từ nitrogen và hydrogen là quá trình thuận nghịch nên không thể đạt hiệu suất 100%","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q32","number":32,"part":1,"type":"multiple_choice","text":"Để tách riêng khí NH<sub>3</sub> ra khỏi hỗn hợp gồm N<sub>2</sub>, H<sub>2</sub>, NH<sub>3</sub> trong công nghiệp, người ta đã","images":[],"options":[{"id":"a","letter":"A","text":"cho hỗn hợp qua nước vôi trong dư","isCorrect":false},{"id":"b","letter":"B","text":"cho hỗn hợp qua bột CuO nung nóng","isCorrect":false},{"id":"c","letter":"C","text":"nén và làm lạnh hỗn hợp để hóa lỏng NH<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"cho hỗn hợp qua dung dịch H<sub>2</sub>SO<sub>4</sub> đặc","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q33","number":33,"part":1,"type":"multiple_choice","text":"Quá trình sản xuất ammonia trong công nghiệp dựa trên phản ứng thuận nghịch sau:<br/>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ (xt, t°, p) 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -92 kJ<br/>Khi phản ứng đạt tới trạng thái cân bằng, cho các tác động: (1) tăng nhiệt độ, (2) tăng áp suất, (3) thêm chất xúc tác, (4) giảm nhiệt độ, (5) lấy NH<sub>3</sub> ra khỏi hệ. Những tác động nào làm cho cân bằng chuyển dịch theo chiều thuận?","images":[],"options":[{"id":"a","letter":"A","text":"(2), (3), (4)","isCorrect":false},{"id":"b","letter":"B","text":"(1), (2), (3), (5)","isCorrect":false},{"id":"c","letter":"C","text":"(2), (4), (5)","isCorrect":true},{"id":"d","letter":"D","text":"(2), (3), (4), (5)","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q34","number":34,"part":1,"type":"multiple_choice","text":"Trong quá trình tổng hợp ammonia theo quy trình Haber (Haber – Bosch), sau khi đã hóa lỏng ammonia, hydrogen và nitrogen sẽ:","images":[],"options":[{"id":"a","letter":"A","text":"qua ống dẫn khí thải và được loại bỏ","isCorrect":false},{"id":"b","letter":"B","text":"đưa trở lại buồng phản ứng để tái sử dụng","isCorrect":true},{"id":"c","letter":"C","text":"tiếp tục qua lò phản ứng số 2 để tăng hiệu suất tổng hợp","isCorrect":false},{"id":"d","letter":"D","text":"hydrogen được tái sử dụng, còn nitrogen loại bỏ dựa vào tỉ trọng","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q35","number":35,"part":1,"type":"multiple_choice","text":"Các chất khí được thu vào bình theo đúng nguyên tắc bằng cách đẩy không khí (X, Y, Z) và đẩy nước (T) như sau:<br/>Nhận xét nào sau đây không đúng?","images":["/assets/hoa12/c5/h11_b5_image115.png"],"options":[{"id":"a","letter":"A","text":"X là chlorine","isCorrect":false},{"id":"b","letter":"B","text":"Y là hydrogen","isCorrect":false},{"id":"c","letter":"C","text":"Z là nitrogen dioxide","isCorrect":false},{"id":"d","letter":"D","text":"T là ammonia","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q36","number":36,"part":1,"type":"multiple_choice","text":"Tã lót trẻ em sau khi được giặt sạch vẫn còn mùi khai do vẫn lưu lại một lượng ammonia. Để khử hoàn toàn mùi của ammonia thì người ta cho vào nước xả cuối cùng một ít hoá chất có sẵn trong nhà. Hãy chọn hoá chất thích hợp:","images":[],"options":[{"id":"a","letter":"A","text":"Phèn chua","isCorrect":false},{"id":"b","letter":"B","text":"Giấm ăn","isCorrect":true},{"id":"c","letter":"C","text":"Muối ăn","isCorrect":false},{"id":"d","letter":"D","text":"Nước gừng tươi","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q37","number":37,"part":1,"type":"multiple_choice","text":"Trong khí thải của quy trình sản xuất thuốc trừ sâu, phân bón hoá học có lẫn khí NH<sub>3</sub>. Khí này rất độc đối với sức khoẻ của con người và gây ô nhiễm môi trường. Con người hít phải khí này với lượng lớn sẽ gây ngộ độc: ho, đau ngực (nặng), đau thắt ngực, khó thở, thở nhanh, thở khò khè; chảy nước mẳt và bỏng mắt, mù mắt, đau họng nặng, đau miệng; mạch nhanh, yếu, sốc; lẫn lộn, đi lại khó khăn, chóng mặt, thiếu sự phối hợp, bồn chồn, ngẩn ngơ (,). Để xử lí NH<sub>3</sub> lẫn trong khí thải, người ta có thể dẫn khí thải qua một bể lọc chứa hoá chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Dung dịch Ca(OH)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Dung dịch HCl","isCorrect":true},{"id":"c","letter":"C","text":"Dung dịch NaOH","isCorrect":false},{"id":"d","letter":"D","text":"Nước","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q38","number":38,"part":1,"type":"multiple_choice","text":"Có thể dùng chất nào sau đây để làm khô khí ammonia?","images":[],"options":[{"id":"a","letter":"A","text":"Dung dịch H<sub>2</sub>SO<sub>4</sub> đặc","isCorrect":false},{"id":"b","letter":"B","text":"P<sub>2</sub>O<sub>5</sub> khan","isCorrect":false},{"id":"c","letter":"C","text":"MgO khan","isCorrect":false},{"id":"d","letter":"D","text":"CaO khan","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q39","number":39,"part":1,"type":"multiple_choice","text":"Chất nào dưới đây là muối ammonium?","images":[],"options":[{"id":"a","letter":"A","text":"NaNO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NH<sub>4</sub>Cl","isCorrect":true},{"id":"c","letter":"C","text":"NH<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NO","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q40","number":40,"part":1,"type":"multiple_choice","text":"Trong nước, phân tử/ion nào sau đây thể hiện vai trò là acid Bronsted?","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"4NH+","isCorrect":true},{"id":"c","letter":"C","text":"3NO-","isCorrect":false},{"id":"d","letter":"D","text":"N<sub>2</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q41","number":41,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Ammonia là base Bronsted khi tác dụng với nước","isCorrect":false},{"id":"b","letter":"B","text":"Ammonia được sử dụng làm chất làm lạnh","isCorrect":false},{"id":"c","letter":"C","text":"Muối ammonium là tinh thể ion, dễ tan trong nước","isCorrect":false},{"id":"d","letter":"D","text":"Các muối ammonium đều rất bền với nhiệt","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q42","number":42,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Muối ammonium dễ tan trong nước","isCorrect":false},{"id":"b","letter":"B","text":"Muối ammonium là chất điện li mạnh","isCorrect":false},{"id":"c","letter":"C","text":"Muối ammonium kém bền với nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"Dung dịch muối ammonium có tính chất base","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q43","number":43,"part":1,"type":"multiple_choice","text":"Dung dịch chất nào sau đây được dùng để nhận biết các muối ammonium?","images":[],"options":[{"id":"a","letter":"A","text":"NaOH","isCorrect":true},{"id":"b","letter":"B","text":"HCl","isCorrect":false},{"id":"c","letter":"C","text":"BaCl<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q44","number":44,"part":1,"type":"multiple_choice","text":"Có thể nhận biết muối ammonium bằng cách cho muối tác dụng với dung dịch kiềm thấy thoát ra một chất khí. Chất khí đó là","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>3</sub>","isCorrect":true},{"id":"b","letter":"B","text":"H<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"NO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NO","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q45","number":45,"part":1,"type":"multiple_choice","text":"Ammonium chloride (NH<sub>4</sub>Cl) là chất rắn, màu trắng là nguyên liệu sản xuất phân bón (90% ) cung cấp nguyên tố nitrogen (đạm) cho cây trồng. Loại liên kết nào không có trong phân tử NH<sub>4</sub>Cl là","images":[],"options":[{"id":"a","letter":"A","text":"liên kết cộng hóa trị phân cực","isCorrect":false},{"id":"b","letter":"B","text":"liên kết ion","isCorrect":false},{"id":"c","letter":"C","text":"liên kết cho – nhận","isCorrect":false},{"id":"d","letter":"D","text":"liên kết cộng hóa trị không phân cực","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q46","number":46,"part":1,"type":"multiple_choice","text":"Trong phòng thí nghiệm, người ta có thể phân biệt muối ammonium với một số muối khác bằng cách cho nó tác dụng với dung dịch base. Hiện tượng nào xảy ra?","images":[],"options":[{"id":"a","letter":"A","text":"Thoát ra một chất khí màu lục nhạt, làm xanh giấy quỳ tím ẩm","isCorrect":false},{"id":"b","letter":"B","text":"Thoát ra một chất khí không màu, làm xanh giấy quỳ tím ẩm","isCorrect":true},{"id":"c","letter":"C","text":"Thoát ra một chất khí màu nâu đỏ, làm xanh giấy quỳ tím ẩm","isCorrect":false},{"id":"d","letter":"D","text":"Thoát ra một chất khí không màu, làm hồng giấy quỳ tím ẩm","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q47","number":47,"part":1,"type":"multiple_choice","text":"Phương trình hóa học nào sau đây sai?","images":[],"options":[{"id":"a","letter":"A","text":"ot4333NHNONHHNO. → +","isCorrect":true},{"id":"b","letter":"B","text":"ot43NHClNHHCl. → +","isCorrect":false},{"id":"c","letter":"C","text":"ot423322(NH)CO2NHCOHO. → ++","isCorrect":false},{"id":"d","letter":"D","text":"ot43322NHHCONHCOHO. → ++","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q48","number":48,"part":1,"type":"multiple_choice","text":"Nhiệt phân hoàn toàn muối nào sau đây thu được sản phẩm chỉ gồm khí và hơi?","images":[],"options":[{"id":"a","letter":"A","text":"NaCl","isCorrect":false},{"id":"b","letter":"B","text":"CaCO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"KClO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q49","number":49,"part":1,"type":"multiple_choice","text":"Để tạo độ xốp cho một số loại bánh, có thể dùng muối nào sau đây làm bột nở?","images":[],"options":[{"id":"a","letter":"A","text":"(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NH<sub>4</sub>HCO<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"CaCO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NH<sub>4</sub>NO<sub>2</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q50","number":50,"part":1,"type":"multiple_choice","text":"Có các loại phân bón như NH<sub>4</sub>Cl, NH<sub>4</sub>NO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>, các loại phân bón này không thích hợp bón cho đất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Đất chua","isCorrect":true},{"id":"b","letter":"B","text":"Đất phù sa","isCorrect":false},{"id":"c","letter":"C","text":"Đất bạc màu","isCorrect":false},{"id":"d","letter":"D","text":"Đất nghèo dinh dưỡng","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q51","number":51,"part":1,"type":"multiple_choice","text":"Khi so sánh phân tử ammonia với ion ammonium, nhận định nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Đều chứa liên kết ion","isCorrect":false},{"id":"b","letter":"B","text":"Đều có tính acid yếu trong nước","isCorrect":false},{"id":"c","letter":"C","text":"Đều có tính base yếu trong nước","isCorrect":false},{"id":"d","letter":"D","text":"Đều chứa nguyên tử N có số oxi hoá là -3","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q52","number":52,"part":1,"type":"multiple_choice","text":"Cho các phát biểu sau:<br/>(1) Ammonia lỏng được dùng làm chất làm lạnh trong thiết bị lạnh.<br/>(2) Để làm khô khí NH<sub>3</sub> có lẫn hơi nước, có thể dẫn khí NH<sub>3</sub> đi qua bình đựng dung dịch H<sub>2</sub>SO<sub>4</sub> đặc.<br/>(3) Khi cho quỳ tím ẩm vào lọ đựng khí NH<sub>3</sub>, quỳ tím chuyển thành màu đỏ.<br/>(4) Nitrogen lỏng được dùng để bảo quản máu và các mẫu vật sinh học.<br/>Có bao nhiêu phát biểu đúng?","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":true},{"id":"b","letter":"B","text":"3","isCorrect":false},{"id":"c","letter":"C","text":"1","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q53","number":53,"part":1,"type":"multiple_choice","text":"Cho một ít tinh thể muối X vào ống nghiệm và đun nóng trên ngọn lửa đèn cồn, sau một thời gian thấy không còn chất rắn nào ở đáy ống nghiệm. Muối X có thể là muối nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"NaCl","isCorrect":false},{"id":"b","letter":"B","text":"CaCO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"KClO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NH<sub>4</sub>Cl","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q54","number":54,"part":1,"type":"multiple_choice","text":"Phân biệt được dung dịch NH<sub>4</sub>Cl và NaCl bằng thuốc thử là dung dịch","images":[],"options":[{"id":"a","letter":"A","text":"KCl","isCorrect":false},{"id":"b","letter":"B","text":"KNO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"KOH","isCorrect":true},{"id":"d","letter":"D","text":"K<sub>2</sub>SO<sub>4</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q55","number":55,"part":1,"type":"multiple_choice","text":"Trong các nhận xét dưới đây về muối ammonium, nhận xét nào đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Muối ammonium tồn tại dưới dạng tinh thể ion, phân tử gồm cation ammonium và anion hydroxide","isCorrect":false},{"id":"b","letter":"B","text":"Tất cả muối ammonium đều dễ tan trong nước, khi tan điện li hoàn toàn thành cation ammonium và anion gốc acid","isCorrect":true},{"id":"c","letter":"C","text":"Dung dịch muối ammonium phản ứng với dung dịch base đặc, nóng thoát ra chất khí làm quỳ tím ẩm hoá đỏ","isCorrect":false},{"id":"d","letter":"D","text":"Khi nhiệt phân các muối ammonium luôn có khí NH<sub>3</sub> thoát ra","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q56","number":56,"part":1,"type":"multiple_choice","text":"Cho các nhận định sau: Phân tử ammonia và ion ammonium đều<br/>(1) chứa liên kết cộng hóa trị;<br/>(2) là base Bronsted trong nước;<br/>(3) là acid Bronsted trong nước;<br/>(4) chứa nguyên tử N có số oxi hóa là -3.<br/>Số nhận định đúng là","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":true},{"id":"b","letter":"B","text":"1","isCorrect":false},{"id":"c","letter":"C","text":"4","isCorrect":false},{"id":"d","letter":"D","text":"3","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q57","number":57,"part":1,"type":"multiple_choice","text":"Tiến hành thí nghiệm trộn từng cặp dung dịch sau: (a) NH<sub>3</sub> và AlCl<sub>3</sub>; (b) (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> và Ba(OH)<sub>2</sub>; (c) NH<sub>4</sub>Cl và AgNO<sub>3</sub>; (d) NH<sub>3</sub> và HCl. Sau khi phản ứng kết thúc, số thí nghiệm thu được kết tủa là","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":false},{"id":"b","letter":"B","text":"3","isCorrect":true},{"id":"c","letter":"C","text":"2","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q58","number":58,"part":1,"type":"multiple_choice","text":"Dãy các muối ammonium nào khi bị nhiệt phân tạo thành khí NH<sub>3</sub>?","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>4</sub>Cl, NH<sub>4</sub>HCO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>","isCorrect":true},{"id":"b","letter":"B","text":"NH<sub>4</sub>Cl, NH<sub>4</sub>NO<sub>3</sub>, NH<sub>4</sub>HCO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"NH<sub>4</sub>Cl, NH<sub>4</sub>NO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NH<sub>4</sub>NO<sub>3</sub>, NH<sub>4</sub>HCO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q59","number":59,"part":1,"type":"multiple_choice","text":"Xét cân bằng hóa học: NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup><br/>Cân bằng sẽ chuyển dịch theo chiều thuận khi cho thêm vài giọt dung dịch nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>4</sub>Cl","isCorrect":false},{"id":"b","letter":"B","text":"NaOH","isCorrect":false},{"id":"c","letter":"C","text":"HCl","isCorrect":true},{"id":"d","letter":"D","text":"NaCl","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q60","number":60,"part":1,"type":"multiple_choice","text":"Xét cân bằng hóa học: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g)  rH0D<<br/>Hiệu suất phản ứng khi hệ đạt cân bằng ở nhiệt độ 400 <sup>o</sup>C và 500 <sup>o</sup>C lần lượt bằng x % và y %. Mối quan hệ giữa x và y là","images":[],"options":[{"id":"a","letter":"A","text":"x < y","isCorrect":false},{"id":"b","letter":"B","text":"x = y","isCorrect":false},{"id":"c","letter":"C","text":"x > y","isCorrect":true},{"id":"d","letter":"D","text":"5x = 4y","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q61","number":61,"part":1,"type":"multiple_choice","text":"Xét cân bằng hóa học: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g)  rH0D<<br/>Hiệu suất phản ứng khi hệ đạt cân bằng ở áp suất 200 bar và 300 bar lần lượt bằng x % và y %. Mối quan hệ giữa x và y là","images":[],"options":[{"id":"a","letter":"A","text":"5x = 4y","isCorrect":false},{"id":"b","letter":"B","text":"x = y","isCorrect":false},{"id":"c","letter":"C","text":"x > y","isCorrect":false},{"id":"d","letter":"D","text":"x < y","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q62","number":62,"part":1,"type":"multiple_choice","text":"Thuốc thử duy nhất để nhận biết 4 dung dịch đựng trong 4 lọ mất nhãn là KOH, NH<sub>4</sub>Cl K<sub>2</sub>SO<sub>4</sub>, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"dung dịch AgNO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"dung dịch BaCl<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"dung dịch NaOH","isCorrect":false},{"id":"d","letter":"D","text":"dung dịch Ba(OH)<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q63","number":63,"part":1,"type":"multiple_choice","text":"Dùng 11,1555 lít khí hydrogen (ở đkc) với hiệu suất chuyển hoá thành ammonia là 33,33% thì có thể thu được:","images":[],"options":[{"id":"a","letter":"A","text":"17 gam NH<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"8,5 gam NH<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"5,1 gam NH<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"1,7 gam NH<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q64","number":64,"part":1,"type":"multiple_choice","text":"Cho dung dịch NaOH vào 100 ml dung dịch NH<sub>4</sub>NO<sub>3</sub> 1M, đun nóng thu được V lít khí ở đkc. Giá trị của V là","images":[],"options":[{"id":"a","letter":"A","text":"2,4790","isCorrect":true},{"id":"b","letter":"B","text":"4,9580","isCorrect":false},{"id":"c","letter":"C","text":"7,4370","isCorrect":false},{"id":"d","letter":"D","text":"1,2395","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q65","number":65,"part":1,"type":"multiple_choice","text":"Cho 9,916 lít khí NH<sub>3</sub> (ở đkc) đi qua ống sứ đựng CuO nung nóng (dư), sau khi phản ứng xảy ra hoàn toàn thu được m gam Cu. Giá trị của m là","images":[],"options":[{"id":"a","letter":"A","text":"51,2","isCorrect":false},{"id":"b","letter":"B","text":"25,6","isCorrect":false},{"id":"c","letter":"C","text":"38,4","isCorrect":true},{"id":"d","letter":"D","text":"12,8","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q66","number":66,"part":1,"type":"multiple_choice","text":"Thể tích khí O<sub>2</sub> ở đkc cần dùng để đốt cháy hoàn toàn 0,2 mol khí NH<sub>3</sub> tạo thành khí N<sub>2</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"2,4790","isCorrect":false},{"id":"b","letter":"B","text":"4,9580","isCorrect":false},{"id":"c","letter":"C","text":"3,7185","isCorrect":true},{"id":"d","letter":"D","text":"1,2395","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b5_p1_q67","number":67,"part":1,"type":"multiple_choice","text":"Ammonium bicarbonate (NH<sub>4</sub>HCO<sub>3</sub>) là một trong những chất được dùng làm bột nở trong sản xuất bánh bao. Nhiệt phân hoàn toàn m gam muối NH<sub>4</sub>HCO<sub>3</sub> thu được hỗn hợp khí và hơi trong đó có 4,958 lít khí ammonia ở đkc. Giá trị của m là","images":[],"options":[{"id":"a","letter":"A","text":"7,90","isCorrect":false},{"id":"b","letter":"B","text":"15,80","isCorrect":true},{"id":"c","letter":"C","text":"3,95","isCorrect":false},{"id":"d","letter":"D","text":"31,6","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25}],"part2":[{"id":"h11_b5_p2_q1","number":1,"part":2,"type":"true_false","text":"Hình 5.1 dưới đây mô tả công thức Lewis và dạng hình học của phân tử ammonia","images":["/assets/hoa12/c5/h11_b5_image123.png"],"options":[{"id":"a","letter":"A","text":"Dạng hình học của ammonia là tứ diện","isCorrect":false},{"id":"b","letter":"B","text":"Nguyên tử nitrogen còn một cặp electron không liên kết, tạo ra vùng có mật độ điện tích âm trên nguyên tử nitrogen","isCorrect":true},{"id":"c","letter":"C","text":"Liên kết N–H phân cực, cặp electron dùng chung bị lệch về phía nguyên tử hydrogen làm cho nguyên tử hydrogen mang một phần điện tích dương","isCorrect":false},{"id":"d","letter":"D","text":"Liên kết N–H tương đối bền với năng lượng liên kết 386 kJ/mol","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Dạng hình chóp tam giác.<br/>b. Đ.<br/>c. S. Cặp electron dùng chung bị lệch về phía nguyên tử nitrogen.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b5_p2_q2","number":2,"part":2,"type":"true_false","text":"Ammonia có những tính chất vật lí sau","images":[],"options":[{"id":"a","letter":"A","text":"Ở điều kiện thường, ammonia tồn tại ở thể khí, không màu, mùi khai và xốc","isCorrect":true},{"id":"b","letter":"B","text":"Ở điều kiện thường, 1 lít nước hòa tan được 700 lít khí ammonia","isCorrect":true},{"id":"c","letter":"C","text":"Ammonia khó hóa lỏng và khó hóa rắn","isCorrect":false},{"id":"d","letter":"D","text":"Trong cơ thể người, ammonia được tạo ra trong quá trình chuyển hóa thức ăn protein","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Ammonia dễ hóa lỏng và hóa rắn.<br/>d. Đ.<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Câu 3. Cho thí nghiệm được thiết kế như hình bên.<br/>Nạp đầy khí ammonia vào bình thuỷ tinh trong suốt, đậy bình bằng nút cao su có ống thuỷ tinh vuốt nhọn xuyên qua. Nhúng đầu ống thuỷ tinh vào một chậu thuỷ tinh chứa nước có pha thêm dung dịch phenolphtalein. Một lát sau, nước trong chậu phun vào bình thành những tia màu hồng.</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\"></th></tr></table></div><br/>a.Khí ammonia tan nhiều trong nước làm áp suất trong bình tăng dẫn đến nước bị hút vào bình.<br/>b. Dung dịch phenolphtalein có màu hồng chứng tỏ ammonia có tính acid.<br/>c. Nếu thay khí ammonia bằng khí hydrogen chloride thì hiện tượng thí nghiệm vẫn không thay đổi.<br/>d. Ammonia tan tốt trong nước là do ammonia tạo được liên kết hydrogen với nước.<br/>Đáp án:<br/>a. S. Áp suất trong bình giảm.<br/>b. S. Ammonia có tính base.<br/>c. S. Khí HCl không làm đổi màu dung dịch phenolphtalein.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b5_p2_q4","number":4,"part":2,"type":"true_false","text":"Ammonia có những tính chất hóa học sau","images":[],"options":[{"id":"a","letter":"A","text":"Ammonia phản ứng với acid mạnh tạo muối ammonium","isCorrect":true},{"id":"b","letter":"B","text":"Dung dịch ammonium làm quỳ tím chuyển màu xanh, phenolphtalein chuyển màu đỏ","isCorrect":false},{"id":"c","letter":"C","text":"Trong phân tử ammonia, nitrogen có số oxi hóa là -3 nên phân tử ammonia có tính oxi hóa","isCorrect":false},{"id":"d","letter":"D","text":"Khi đốt cháy trong khí oxygen, ammonia đóng vai trò chất khử","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Dung dịch ammonium làm phenolphtalein chuyển màu hồng.<br/>c. S. NH<sub>3</sub> thể hiện tính khử.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b5_p2_q5","number":5,"part":2,"type":"true_false","text":"Một nhóm học sinh thực hiện hai thí nghiệm sau:<br/>Thí nghiệm 1: Nhỏ từ từ dung dịch NH<sub>3</sub> cho đến dư vào ống nghiệm đựng dung dịch AlCl<sub>3</sub>.<br/>Thí nghiệm 2: Nhỏ từ từ dung dịch NH<sub>3</sub> cho đến dư vào ống nghiệm đựng dung dịch CuSO<sub>4</sub>","images":[],"options":[{"id":"a","letter":"A","text":"Ở thí nghiệm 1, sau khi phản ứng xảy ra hoàn toàn có xuất hiện kết tủa keo trắng","isCorrect":true},{"id":"b","letter":"B","text":"Ở thí nghiệm 2, sau khi phản ứng xảy ra hoàn toàn có xuất hiện kết tủa màu xanh lam","isCorrect":false},{"id":"c","letter":"C","text":"Ở thí nghiệm 1, nếu thay dung dịch AlCl<sub>3</sub> bằng dung dịch FeCl<sub>3</sub> thì vẫn có sự tạo thành kết tủa","isCorrect":true},{"id":"d","letter":"D","text":"Hai thí nghiệm trên chứng minh NH<sub>3</sub> không có khả năng tạo phức chất với các ion muối","isCorrect":false}],"explanation":"Đáp án:<br/>Thí nghiệm 1:  AlCl<sub>3</sub> + 3NH<sub>3</sub> + 3H<sub>2</sub>O &rarr; Al(OH)<sub>3</sub>&darr; + 3NH<sub>4</sub>Cl<br/>Hiện tượng: Xuất hiện kết tủa keo trắng không tan trong dung dịch NH<sub>3</sub> dư.<br/>Thí nghiệm 2: CuSO<sub>4</sub> + 2NH<sub>3</sub> + 2H<sub>2</sub>O → Cu(OH)<sub>2</sub>↓ + (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub><br/>Cu(OH)<sub>2</sub>↓ + 4NH<sub>3</sub> → [Cu(NH<sub>3</sub>)<sub>4</sub>](OH)<sub>2</sub><br/>Hiện tượng: Ban đầu xuất hiện kết tủa màu xanh lam, sau đó kết tủa tan tạo phức chất màu xanh lam.<br/>a. Đ.<br/>b. S.<br/>c. Đ.<br/>d. S","explanationImages":[],"points":1},{"id":"h11_b5_p2_q6","number":6,"part":2,"type":"true_false","text":"Xét phản ứng trong giai đoạn đầu của quá trình Ostwald:<br/>oPt,t3224NH(g)5O(g)4NO(g)6HO(g)+ → + ;  or298–906 kJHD=<br/>Biết năng lượng liên kết N – H, O = O, O – H  lần lượt là 386kJ/mol, 494 kJ/mol và 459kJ/mol","images":[],"options":[{"id":"a","letter":"A","text":"Trong công nghiệp, phản ứng trên cần thực hiện ở nhiệt độ khoảng 800 – 900<sup>o</sup>C","isCorrect":true},{"id":"b","letter":"B","text":"Năng lượng liên kết trong phân tử NO là 625 kJ/mol","isCorrect":true},{"id":"c","letter":"C","text":"Phản ứng trên là giai đoạn quan trọng trong quá trình sản xuất nitric acid","isCorrect":true},{"id":"d","letter":"D","text":"Trong phản ứng trên, NH<sub>3</sub> đóng vai trò là chất khử","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>=> -906 = 4. 3. 386 + 5.494 – 4. E<sub>NO</sub> – 6.2. 459<br/>=> E<sub>NO</sub> = 625 kJ/mol.<br/>c. Đ.<br/>d. Đ","explanationImages":["/assets/hoa12/c5/h11_b5_image126.png"],"points":1},{"id":"h11_b5_p2_q7","number":7,"part":2,"type":"true_false","text":"Ammonia có vai trò quan trọng đối với đời sống và sản xuất, công nghiệp cũng như nông nghệp","images":[],"options":[{"id":"a","letter":"A","text":"Trong công nghiệp, ammonia thường được sử dụng với vai trò chất làm lạnh (chất sinh hàn)","isCorrect":true},{"id":"b","letter":"B","text":"Do có hàm lượng nitrogen cao (82,35% theo khối lượng) nên ammonia được sử dụng làm phân đạm rất hiệu quả","isCorrect":false},{"id":"c","letter":"C","text":"Phần lớn ammonia được dùng phản ứng với acid để sản xuất các loại phân đạm","isCorrect":true},{"id":"d","letter":"D","text":"Ammonia lỏng được dùng làm môi trường đông lạnh để bảo quản máu và mẫu sinh vật học","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Ammonia được sử dụng cho sản xuất phân đạm chứa gốc ammonium, muối ammonium được sử dụng làm phân đạm rất hiệu quả.<br/>c. Đ.<br/>d. S. Ammonia không có ứng dụng này","explanationImages":[],"points":1},{"id":"h11_b5_p2_q8","number":8,"part":2,"type":"true_false","text":"Trong công nghiệp ammonia được tổng hợp theo quá trình Haber sau:<br/> ⇌ 0t,xt,p223N(g)+3H(g)2NH(g) ; &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -92 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Khi thêm H<sub>2</sub>, cân bằng chuyển dịch sang phải","isCorrect":true},{"id":"b","letter":"B","text":"Khi tăng thể tích của hệ thì cân bằng chuyển dịch sang trái","isCorrect":true},{"id":"c","letter":"C","text":"Khi giảm nhiệt độ của hệ phản ứng thì cân bằng chuyển dịch sang trái","isCorrect":false},{"id":"d","letter":"D","text":"Khi tăng áp suất của hệ thì cân bằng chuyển dịch sang phải","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ. Khi tăng thể tích của hệ (giảm áp suất của hệ), cân bằng chuyển dịch theo chiều làm tăng áp suất của hệ, tức là chiều làm tăng số mol khí của hệ (chiều nghịch).<br/>c. S. Cân bằng chuyển dịch sang phải.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b5_p2_q9","number":9,"part":2,"type":"true_false","text":"Phương trình hoá học của phản ứng tổng họp ammonia từ nitrogen và hydrogen bằng quá trình Haber như sau: N<sub>2</sub>(g) + 3H<sub>2</sub>(g)  o400600C, 200 bar, Fe- ⇌ 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -92 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Tại thời điểm cân bằng, hỗn hợp trong buồng phản ứng gồm ammonia, nitrogen và hydrogen","isCorrect":true},{"id":"b","letter":"B","text":"Ammonia dễ hoá lỏng hơn nên khi làm lạnh hỗn hợp sẽ tách được ammonia lỏng ra khỏi hỗn hợp khí","isCorrect":true},{"id":"c","letter":"C","text":"Nếu không sử dụng chất xúc tác thì không thể tạo thành ammonia","isCorrect":false},{"id":"d","letter":"D","text":"Nếu giảm áp suất của hệ thì cân bằng sẽ chuyển dịch theo chiều thuận","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Chất xúc tác làm tăng tốc độ phản ứng còn sản phẩm ammonia vẫn được tạo thành trong quá trình phản ứng kể cả không có xúc tác.<br/>d. S. Giảm áp suất làm cân bằng chuyển dịch theo chiều nghịch","explanationImages":[],"points":1},{"id":"h11_b5_p2_q10","number":10,"part":2,"type":"true_false","text":"Muối ammonium là các hợp chất có chứa ion ammonium (NH<sub>4</sub><sup>+</sup>)","images":[],"options":[{"id":"a","letter":"A","text":"Hầu hết muối ammonium tan trong nước tạo dung dịch chất điện li  yếu","isCorrect":false},{"id":"b","letter":"B","text":"Ion ammonium là một base theo thuyết Bronsted – Lowry","isCorrect":false},{"id":"c","letter":"C","text":"Muối ammonium tác dụng với dung dịch base mạnh sinh ra khí có mùi khai","isCorrect":true},{"id":"d","letter":"D","text":"Hầu hết muối ammonium bền nhiệt và khó bị phân hủy ở nhiệt độ cao","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Hầu hết muối ammonium tan trong nước tạo dung dịch chất điện li  mạnh.<br/>b. S. Ion ammonium là một acid theo thuyết Bronsted – Lowry.<br/>c. Đ.<br/>d. S. Hầu hết muối ammonium kém bền nhiệt và dễ bị phân hủy ở nhiệt độ cao","explanationImages":[],"points":1},{"id":"h11_b5_p2_q11","number":11,"part":2,"type":"true_false","text":"Muối ammonium là các hợp chất có chứa ion ammonium (NH<sub>4</sub><sup>+</sup>)","images":[],"options":[{"id":"a","letter":"A","text":"Hầu hết các muối ammonium đều dễ tan trong nước","isCorrect":true},{"id":"b","letter":"B","text":"Các muối ammonium khi tan trong nước đều phân li hoàn toàn thành ion","isCorrect":true},{"id":"c","letter":"C","text":"Ở nhiệt độ cao, các muối ammonium đều bị phân hủy tạo thành ammonia và acid tương ứng","isCorrect":false},{"id":"d","letter":"D","text":"Muối ammonium được dùng làm phân bón trong nông nghiệp","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Tùy vào muối ammonium mà sản phẩm tạo thành khác nhau.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b5_p2_q12","number":12,"part":2,"type":"true_false","text":"Cho các nhận định sau về phân tử ammonia và ion ammonium","images":[],"options":[{"id":"a","letter":"A","text":"Cả hai đều chứa liên kết cộng hóa trị","isCorrect":true},{"id":"b","letter":"B","text":"Ammonia là base Bronsted trong nước còn ion ammonium là acid Bronsted trong nước","isCorrect":true},{"id":"c","letter":"C","text":"Cả hai đều có dạng hình học là chóp tam giác","isCorrect":false},{"id":"d","letter":"D","text":"Cả hai đều chứa nguyên tử nitrogen có số oxi hóa là –3","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Ion ammonium có dạng học học là tứ diện.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b5_p2_q13","number":13,"part":2,"type":"true_false","text":"Thực hiện thí nghiệm theo các bước sau:<br/>Bước 1: Cho khoảng 1 gam phân bón potassium nitrate vào ống nghiệm (1) và khoảng 1 gam phân bón ammonium chloride vào ống nghiệm (2). Thêm vào mỗi ống nghiệm khoảng 3 mL nước cất, lắc đều cho tan hết.<br/>Bước 2: Nhỏ 1 mL dung dịch NaOH 20% vào mỗi ống nghiệm, đun nóng nhẹ trên đèn cồn.<br/>Bước 3: Đưa hai mẩu giấy quỳ tím đã tẩm ướt vào miệng mỗi ống nghiệm","images":[],"options":[{"id":"a","letter":"A","text":"Trong bước 2, có khí không màu, mùi khai và xốc thoát ra ở ống nghiệm (2)","isCorrect":true},{"id":"b","letter":"B","text":"Sau bước 2, có xuất hiện kết tủa màu trắng ở ống nghiệm (1)","isCorrect":false},{"id":"c","letter":"C","text":"Sau bước 3, mẫu giấy quỳ tím chuyển sang màu xanh ở ống nghiệm (2)","isCorrect":true},{"id":"d","letter":"D","text":"Sau bước 3, mẫu giấy quỳ tím chuyển sang màu đỏ ở ống nghiệm (1)","isCorrect":false}],"explanation":"Đáp án:<br/>(1) KNO<sub>3</sub> ; (2) NH<sub>4</sub>Cl<br/>Ống nghiệm (1) không có hiện tượng vì KNO<sub>3</sub> không phản ứng với NaOH.<br/>Ống nghiệm (2) có sự tạo thành khí NH<sub>3</sub> mùi khai, xốc và làm quỳ ẩm hóa xanh.<br/>a. Đ.<br/>b. S.<br/>c. Đ.<br/>d. S","explanationImages":[],"points":1},{"id":"h11_b5_p2_q14","number":14,"part":2,"type":"true_false","text":"Tiến hành thí nghiệm cho một ít chất chỉ thị phenolphthalein vào dung dịch ammonialoãng thu được dung dịch (A). Chia dung dịch (A) vào 4 ống nghiệm.<br/>- Ống nghiệm 1 đun nóng dung dịch một hồi lâu.<br/>- Ống nghiệm 2 thêm dung dịch HCl với số mol HCl bằng số mol NH<sub>3</sub> có trong dung dịch (A).<br/>- Ống nghiệm 3 thêm vài giọt dung dịch Na<sub>2</sub>CO<sub>3</sub>.<br/>- Ống nghiệm 4 thêm từ từ dung dịch AlCl<sub>3</sub> tới dư","images":[],"options":[{"id":"a","letter":"A","text":"Màu hồng của dung dịch ở ống nghiệm 1 nhạt dần","isCorrect":true},{"id":"b","letter":"B","text":"Dung dịch ở ống nghiệm 2 có màu hồng đậm hơn","isCorrect":false},{"id":"c","letter":"C","text":"Màu hồng của dung dịch ở ống nghiệm 3 nhạt dần, sau đó mất hẳn","isCorrect":false},{"id":"d","letter":"D","text":"Dung dịch ở ống nghiệm 2 có màu hồng đậm hơn, đồng thời có xuất hiện kết tủa keo trắng","isCorrect":false}],"explanation":"Đáp án:<br/>Trong dung dịch ammonia tồn tại cân bằng hoá học sau: NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup><br/>a. Đ. Khi đun nóng, màu hồng của dung dịch nhạt dần do khí NH<sub>3</sub> bay lên nên làm cân bằng hoá học chuyển dịch theo chiều nghịch.<br/>b. S. Khi cho HCl vào với số mol bằng số mol NH<sub>3</sub> thì dung dịch mất màu hồng vì tạo ra NH<sub>4</sub>Cl có pH < 7.<br/>c. S. Khi thêm một vài giọt dung dịch Na<sub>2</sub>CO<sub>3</sub>, dung dịch (A) có màu hồng đậm vì muối Na<sub>2</sub>CO<sub>3</sub> thuỷ phân cho môi trường base:<br/>Na<sub>2</sub>CO<sub>3</sub> → 2Na<sup>+</sup> + CO<sub>3</sub><sup>2-</sup><br/>CO<sub>3</sub><sup>2-</sup> + H<sub>2</sub>O ⇌ HCO<sub>3</sub><sup>-</sup> + OH<sup>-</sup>.<br/>d. S. Khi thêm AlCl<sub>3</sub> tới dư xảy ra phản ứng sau:<br/>AlCl<sub>3</sub> + 3NH<sub>3</sub> + 3H<sub>2</sub>O → Al(OH)<sub>3</sub>↓ + 3NH<sub>4</sub>Cl<br/>NH<sub>4</sub>Cl và AlCl<sub>3</sub> dư đều thuỷ phân cho môi trường acid ⇒ màu hồng của dung dịch (A) mất dần.<br/>NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O ⇌ NH<sub>3</sub> + H<sub>3</sub>O<sup>+</sup><br/>Al<sup>3+</sup> + 3H<sub>2</sub>O ⇌ Al(OH)<sub>3</sub>↓+ 3H<sup>+</sup>","explanationImages":[],"points":1}],"part3":[{"id":"h11_b5_p3_q1","number":1,"part":3,"type":"short_answer","text":"Có bao nhiêu electron không tham gia liên kết trong một phân tử ammonia?","images":[],"correctAnswer":"2","explanation":"Đáp án: 2","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q2","number":2,"part":3,"type":"short_answer","text":"Trong phân tử ammonia, có bao nhiêu cặp electron dùng chung giữa nguyên tử nitrogen với các nguyên tử hydrogen?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q3","number":3,"part":3,"type":"short_answer","text":"Số oxi hóa của nguyên tử nitrogen trong phân tử ammonia là bao nhiêu?","images":[],"correctAnswer":"-3","explanation":"Đáp án: -3","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q4","number":4,"part":3,"type":"short_answer","text":"Cho các phản ứng hóa học sau:<br/>(1). 8NH<sub>3</sub> + 3Cl<sub>2</sub> → 6NH<sub>4</sub>Cl + N<sub>2</sub><br/>(2). 4NH<sub>3</sub> + 5O<sub>2</sub> → 4NO + 6H<sub>2</sub>O<br/>(3). 2NH<sub>3</sub>  + H<sub>2</sub>SO<sub>4</sub> → (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub><br/>(4). 2NH<sub>3</sub>  + 3CuO → N<sub>2</sub> + 3Cu  + 3H<sub>2</sub>O<br/>(5) MgCl<sub>2</sub> + 2NH<sub>3</sub> + H<sub>2</sub>O → Mg(OH)<sub>2</sub> + 2NH<sub>4</sub>Cl<br/>Có bao nhiêu phản ứng chứng tỏ ammonia thể hiện tính khử?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q5","number":5,"part":3,"type":"short_answer","text":"Cho các chất sau: HCl, O<sub>2</sub>, Cl<sub>2</sub>, CuO, dung dịch Al(NO<sub>3</sub>)<sub>3</sub>. Ammonia phản ứng được với tất cả bao nhiêu chất trong dãy trên (các điều kiện coi như có đủ)?","images":[],"correctAnswer":"5","explanation":"Đáp án: 5","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q6","number":6,"part":3,"type":"short_answer","text":"Số oxi hóa của nguyên tử nitrogen trong phân tử ammonium chloride là bao nhiêu?","images":[],"correctAnswer":"-3","explanation":"Đáp án: -3","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q7","number":7,"part":3,"type":"short_answer","text":"Có bao nhiêu liên kết cộng hóa trị trong ion muối ammonium?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q8","number":8,"part":3,"type":"short_answer","text":"Cho các muối sau đây: NaNO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>, NH<sub>4</sub>H<sub>2</sub>PO<sub>4</sub>, NH<sub>4</sub>Cl, NH<sub>4</sub>HCO<sub>3</sub> và KNO<sub>2</sub>. Có bao nhiêu muối ammonium trong dãy muối trên?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q9","number":9,"part":3,"type":"short_answer","text":"Cho các muối ammonium sau: NH<sub>4</sub>Cl, NH<sub>4</sub>NO<sub>3</sub>, NH<sub>4</sub>HCO<sub>3</sub>, (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> và NH<sub>4</sub>NO<sub>2</sub>. Có bao nhiêu khi bị nhiệt phân hoàn toàn có tạo thành sản phẩm khí NH<sub>3</sub>?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q10","number":10,"part":3,"type":"short_answer","text":"Sự phụ thuộc của độ tan khí ammonia trong nước vào nhiệt độ được mô tả ở hình dưới đây:<br/>Nồng độ phần trăm của dung dịch ammonia bão hòa ở 30 <sup>o</sup>C là bao nhiêu %? (Kết quả làm tròn đến hàng phần mười)","images":["/assets/hoa12/c5/h11_b5_image130.png"],"correctAnswer":"28,6","explanation":"Đáp án: 28,6.<br/>Nồng độ phần trăm của ammonia bão hòa:  C% = [40 / (40 + 100)] &times; 100% = 28,57%","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q11","number":11,"part":3,"type":"short_answer","text":"Cho dung dịch (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> tác dụng lần lượt với các dung dịch NaOH, Ba(OH)<sub>2</sub>, KCl, Ba(NO<sub>3</sub>)<sub>2</sub> và NaNO<sub>3</sub>. Sau khi các phản ứng xảy trên ra hoàn toàn, có bao nhiêu phản ứng thu được kết tủa?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q12","number":12,"part":3,"type":"short_answer","text":"Cho dung dịch NaOH dư vào 200 mL dung dịch (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> 1M, đun nóng nhẹ. Thể tích khí thu được ở đkc là bao nhiêu lít? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"9,9","explanation":"Đáp án: 9,9.<br/>(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> + 2NaOH  Na<sub>2</sub>SO<sub>4</sub> + 2NH<sub>3</sub> + 2H<sub>2</sub>O<br/>3NHV0,4.24,799,916LÞ==","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q13","number":13,"part":3,"type":"short_answer","text":"Cho từ từ dung dịch NH<sub>3</sub> đến dư vào dung dịch hỗn hợp chứa 0,01 mol FeCl<sub>3</sub> và 0,2 mol CuCl<sub>2</sub>. Khi các phản ứng xảy ra hoàn toàn, khối lượng kết tủa thu được là bao nhiêu gam?","images":[],"correctAnswer":"18,8","explanation":"Đáp án: 18,8.<br/>Kết tủa chỉ có Fe(OH)<sub>3</sub> 0,01 mol → m↓ = 0,01. 107 = 1,07 gam","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q14","number":14,"part":3,"type":"short_answer","text":"Cho 4 Lkhí N<sub>2</sub> và 14 L khí H<sub>2</sub> vào bình kín rồi nung nóng với xúc tác thích hợp để phản ứng xảy ra, sau phản ứng thu được 16,4 L hỗn hợp khí (các khí đo ở cùng điều kiện nhiệt độ và áp suất). Thể tích khí ammonia thu được là bao nhiêu lít?","images":[],"correctAnswer":"1,6","explanation":"Đáp án: 1,6.<br/>Trong cùng điều kiện nhiệt độ và áp suất thì tỉ lệ thể tích bằng tỉ lệ số mol.<br/>Gọi thể tích khí N<sub>2</sub> đã phản ứng là x lít.<br/>Phương trình hóa học:<br/>Phương trình hoá học:  N<sub>2</sub>           +        3H<sub>2</sub> ⇌ 2NH<sub>3</sub><br/>Ban đầu:                   4                   14                     0<br/>Phản ứng:                    x                   3x                        2x<br/>Sau phản ứng:        (4 – x)    (14 – 3x)                2x<br/>Tổng thể tích sau phản ứng là 16,4 lít nên (4 – x) + (14 - 3x) + 2x = 16,4<br/> → x = 0,8 lít<br/> → V<sub>NH</sub><sub>3</sub> = 0,8 . 2 = 1,6 lít","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q15","number":15,"part":3,"type":"short_answer","text":"Hỗn hợp X gồm N<sub>2</sub> và H<sub>2</sub> có tỉ lệ mol tương ứng là 1 : 4. Nung nóng X trong bình kín ở nhiệt độ khoảng 450 <sup>o</sup>C có bột Fe xúc tác, thu được hỗn hợp khí Y có tỉ khối so với H<sub>2</sub> bằng 4. Hiệu suất của phản ứng tổng hợp NH<sub>3</sub> là bao nhiêu phần trăm?","images":[],"correctAnswer":"25","explanation":"Đáp án: 25.<br/>Phương trình hoá học:  N<sub>2</sub>           +        3H<sub>2</sub> ⇌ 2NH<sub>3</sub><br/>Ban đầu:                   1                   4                     0                   mol<br/>Phản ứng:                    x                   3x                        2x                 mol<br/>Sau phản ứng:        (1 – x)    (4 – 3x)                2x                 mol<br/>Bảo toàn khối lượng:  XYXYXXYYYYYXnM58mmn.Mn.Mn4,5molnn7,2M=Û=Þ=Û=Þ=<br/>Mà n<sub>Y</sub> = 5 – 2x = 4,5  x = 0,25<br/>Hiệu suất phản ứng tính theo N<sub>2</sub> (do 1/1 < 4/3)<br/>Ta có:  0,25H .100% 25%1==","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q16","number":16,"part":3,"type":"short_answer","text":"Hỗn hợp X gồm N<sub>2</sub> và H<sub>2</sub> có tỉ lệ mol tương ứng là 1 : 3. Nung nóng X trong bình kín (450℃, xúc tác Fe) một thời gian, thu được hỗn hợp khí có số mol giảm 5% so với ban đầu. Hiệu suất của phản ứng tổng hợp NH<sub>3</sub> là bao nhiêu phần trăm?","images":[],"correctAnswer":"10","explanation":"Đáp án: 10.<br/>Chọn  22NHn1moln3mol=Þ=   Tổng số mol khí ban đầu là 4 mol  Þ  n<sub>khí giảm</sub> = 4.5% = 0,2 mol<br/>32223N(g)       H(g)NH(g)Ban ñaàu:      1                   3(mol)Phaûn öùng:    x                   3x+ ⇌ 2x            (mol)Caân baèng:  1-x                3-3x2x            (mol)<br/>Tổng số mol khí sau khi phản ứng là 1 – x + 3 – 3x + 2x = 4 – 2x (mol)<br/>Số mol khí giảm so với ban đầu là 2x  Þ  2x = 0,2  Þ  x = 0,1  Þ  H% =  0,1.100%10%.1=","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q17","number":17,"part":3,"type":"short_answer","text":"Cho 0,4958 L khí NH<sub>3</sub> (ở đkc) đi qua ống sứ đựng 16 gam CuO nung nóng, sau khi phản ứng xảy ra hoàn toàn thu được chất rắn X. Phần trăm khối lượng của Cu trong X là bao nhiêu %? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"12,4","explanation":"Đáp án: 12,4.<br/>n<sub>CuO</sub> =  0,2 mol ; 3NHn   = 0,02 mol<br/>3CuO + 2NH<sub>3</sub> → (t°)  3Cu + N<sub>2</sub> + 3H<sub>2</sub>O<br/>n<sub>Cu</sub> = 0,03 mol  m<sub>Cu</sub> = 1,92 gam.<br/>m<sub>X</sub> = m<sub>Cu</sub>+ m<sub>CuO dư</sub> = 1,92 + (0,2 – 0,03).80 = 15,52 gam.<br/>=> %m<sub>Cu trong X</sub>= 12,37%","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q18","number":18,"part":3,"type":"short_answer","text":"Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau: NH<sub>4</sub>NO<sub>3</sub>(s) + H<sub>2</sub>O(l) → NH<sub>4</sub>NO<sub>3</sub>(aq)          ∆H = +26 kJ<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Sau khi muối tan hết, nước trong bình có nhiệt độ là bao nhiêu độ C? Biết nhiệt dung riêng của nước là 4,2 J/kgK. (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"18,8","explanation":"Đáp án: 18,8.<br/>80g NH<sub>4</sub>NO<sub>3</sub> ~ 1 mol ⇒ Q = 26 (kJ)<br/>∆H > 0, quá trình hòa tan thu nhiệt, nhiệt độ giảm đi một lượng là:<br/>(Với 4,2 (J/g.K) là nhiệt dung riêng của nước)<br/>⇒ Nhiệt độ cuối cùng là 25 – 6,2 = 18,8<sup>o</sup>C","explanationImages":["/assets/hoa12/c5/h11_b5_image138.png"],"points":0.25},{"id":"h11_b5_p3_q19","number":19,"part":3,"type":"short_answer","text":"Hòa tan 28,92 gam tinh thể hydration của muối kép có dạng Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.xH<sub>2</sub>O vào nước, rồi thêm một lượng kiềm dư vào dung dịch, đun nóng nhẹ. Sau phản ứng có 1,4874 L khí ở đkc thoát ra và một kết tủa màu nâu đỏ. Giá trị của x là bao nhiêu?","images":[],"correctAnswer":"24","explanation":"Đáp án: 24.<br/>NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup>  NH<sub>3</sub> + H<sub>2</sub>O<br/>0,060,06<br/>Số mol của tinh thể là 0,03 mol<br/>Phân tử khối của tinh thể là  28,92M96440013218xx240,03===++Þ=","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q20","number":20,"part":3,"type":"short_answer","text":"Trong công nghiệp hóa học, nitrogen monoxide là một sản phẩm trung gian quan trọng tạo thành từ phản ứng oxi hóa ammonia bởi oxygen. Đây là giai đoạn đầu tiên trong quá trình Ostwald để sản xuất nitric acid. Khối lượng tối đa (gam) nitrogen monoxide thu được là bao nhiêu khi trộn 10 gam ammonia và 20 gam oxygen?","images":[],"correctAnswer":"15","explanation":"Đáp án: 15.<br/>32NHOn 10/17 mol và n 0,625 mol==<br/>4NH<sub>3</sub> + 5O<sub>2</sub>  4NO + 6H<sub>2</sub>O<br/>Tính theo pt thì O<sub>2</sub> hết NH<sub>3</sub> dư nên số mol của NO tính theo O<sub>2</sub><br/>NONO0,625.4n0,5molm0,5.3015g5Þ==Þ==","explanationImages":[],"points":0.25},{"id":"h11_b5_p3_q21","number":21,"part":3,"type":"short_answer","text":"Hiện nay người ta sản xuất ammonia bằng cách chuyển hoá có xúc tác một hỗn hợp gồm không khí, hơi nước và khí methane (thành phần chính của khí thiên nhiên).<br/>Phản ứng điều chế H<sub>2</sub>: CH<sub>4</sub> + 2H<sub>2</sub>O ⇌ (xt, t°) CO<sub>2</sub> + 4H<sub>2</sub> (1)<br/>Phản ứng loại O<sub>2</sub> để thu N<sub>2</sub>: CH<sub>4</sub> + 2O<sub>2</sub>  0t → CO<sub>2</sub> + 2H<sub>2</sub>O(2)<br/>Phản ứng tổng hợp NH<sub>3</sub>: N<sub>2</sub> + 3H<sub>2</sub> ⇌ (xt, t°, p) 2NH<sub>3</sub> (3)<br/>Để sản xuất khí ammonia, nếu lấy 841,7 m<sup>3</sup> không khí (chứa 21,03% O<sub>2</sub>; 78,02% N<sub>2</sub>, còn lại là khí hiếm theo thể tích), thì cần phải lấy bao nhiêu m<sup>3</sup> khí methane và bao nhiêu m<sup>3</sup> hơi nước để có đủ lượng N<sub>2</sub> và H<sub>2</sub> theo tỉ lệ 1 : 3 về thể tích dùng cho phản ứng tổng hợp ammonia. Giả thiết các phản ứng (1), (2) đều xảy ra hoàn toàn và các thể tích khí đo ở cùng điều kiện. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"808","explanation":"Đáp án: 808.<br/>23O841,7 x 21,03V177(m)100==<br/>23N841,7 x 78,02V656,7(m)100==<br/>223HN(3) V = 3x V = 3 x 656,7 = 1 970 (m).Þ<br/>423CHOl117(2)V =  x V =  =88,5 (m).22Þ<br/>223HOOV = V = 177 m.<br/>423CHHl 1(1)V = x V = x1970 = 492,5 (m).44Þ<br/>223HOH11V =  x V=x1970 = 985 (m).22<br/>43CHV492,588,5581(m).Þ=+=<br/>23HOV985177808(m).=-=<br/>","explanationImages":[],"points":0.25}]}},"bai6":{"id":"bai6","lessonNumber":6,"title":"Bài 6. Một số hợp chất của nitrogen với oxygen","shortTitle":"Một số hợp chất của nitrogen với oxygen","badge":"Bài 6","icon":"🧪","description":"Nguồn gốc NOx trong khí quyển, hiện tượng mưa acid, tính acid mạnh và tính oxi hóa mãnh liệt của nitric acid HNO3.","theory":"I. CÁC OXIDE CỦA NITROGEN1. Công thức, tên gọi:- Oxide của nitrogen được kí hiệu chung là NO<sub>x</sub>, một loại hợp chất điển hình gây ô nhiễm không khí. Hợp chất NO<sub>x</sub> có trong không khí là NO<sub>2</sub>, NO, N<sub>2</sub>O<sub>4</sub>, N<sub>2</sub>O.<div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Công thức</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">NO</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">NO2</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">N2O</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">N2O4</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Tên gọi</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Nitrogen monoxide</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Nitrogen dioxide</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Dinitrogen oxide</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Dinitrogen tetroxide</td></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Tính chất</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Không màu hóa nâu trong không khí</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Khí màu nâu đỏ</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Khí không màu (khí cười)</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Khí không màu</td></tr></table></div>2. Nguồn gốc phát sinh NO<sub>x</sub> trong không khí:- Bên cạnh nguồn gốc tự nhiên như núi lửa phun trào, cháy rừng, mưa dông kèm theo sấm sét, sự phân hủy các hợp chất hữu cơ, thì sự phát sinh NO<sub>x</sub> chủ yếu là do hoạt động của con người. Các nguồn gây thải NO<sub>x</sub> nhân tạo từ hoạt động vận tải, sản xuất công nghiệp, nông nghiệp, nhà máy nhiệt điện và trong đời sống.- NO<sub>x</sub> là một trong các nguyên nhân gây mưa acid, sương mù quang hóa, hiệu ứng nhà kính, thủng tầng ozone và hiện tượng phú nhưỡng, làm ô nhiễm môi trường.3. Mưa acid:- Nước mưa thông thường có pH khoảng 5,6 chủ yếu do có carbon dioxide hoà tan tạo môi trường acid yếu. Khi nước mưa có pH nhỏ hơn 5,6 thì gọi là hiện tượng mưa acid.- Tác nhân chính gây mưa acid là SO<sub>2</sub> và NO<sub>x</sub>, phát thải chủ yếu do các hoạt động công nghiệp, nhiệt điện, giao thông, khai thác và chế biến dầu mỏ...- SO<sub>2</sub> và NO<sub>x</sub> bị oxi hóa với xúc tác là các ion kim loại trong khói, bụi, … rồi hòa tan vào nước tạo thành H<sub>2</sub>SO<sub>4</sub>, HNO<sub>3</sub>.2SO<sub>2</sub> + O<sub>2</sub> + 2H<sub>2</sub>O  xt→  2H<sub>2</sub>SO<sub>4</sub>4NO<sub>2</sub> + O<sub>2</sub> + 2H<sub>2</sub>O  xt→  4HNO<sub>3</sub>","mathForms":[{"id":"bai6_mf1","title":"Dạng 1: Các phương pháp giải nhanh trọng tâm Bài 6. Một số hợp chất của nitrogen với oxygen","method":"Hệ thống hóa các công thức trọng tâm, định luật và phương pháp bảo toàn thường dùng trong Bài 6. Một số hợp chất của nitrogen với oxygen","examples":[{"number":1,"text":"Ví dụ minh họa dạng toán trọng tâm Bài 6. Một số hợp chất của nitrogen với oxygen: Áp dụng công thức và định luật để giải bài toán định lượng","solution":"Áp dụng phương pháp phân tích đề bài, lập phương trình tương ứng và thế số để tính đáp án chính xác"}]}],"practice":{"part1":[{"id":"h11_b6_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Số oxi hóa thấp nhất của nitrogen trong hợp chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>3</sub>","isCorrect":true},{"id":"b","letter":"B","text":"NO","isCorrect":false},{"id":"c","letter":"C","text":"N<sub>2</sub>O<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>2</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Nitrogen dioxide là tên gọi của oxide nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"NO","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>2</sub>","isCorrect":true},{"id":"c","letter":"C","text":"N<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"N<sub>2</sub>O<sub>4</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Khí cười (có công thức hóa học là N<sub>2</sub>O) là nhóm chất gây nghiện, thuộc nhóm gây ảo giác có xu hướng tăng liều. Khí cười ảnh hưởng trực tiếp tới hệ tim mạch, hệ thần kinh mà hậu quả xấu nếu là lạm dụng sẽ dẫn tới trầm cảm hoặc thiệt mạng. Tên gọi của N<sub>2</sub>O là","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen dioxide","isCorrect":false},{"id":"b","letter":"B","text":"Dinitrogen oxide","isCorrect":true},{"id":"c","letter":"C","text":"Nitrogen monoxide","isCorrect":false},{"id":"d","letter":"D","text":"Dinitrogen tetroxide","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Quá trình đốt cháy hỗn hợp hơi nhiên liệu và không khí trong động cơ khi đánh tia lửa điện sinh ra khí NO, một tác nhân gây ô nhiễm không khí. Tên gọi của NO là","images":[],"options":[{"id":"a","letter":"A","text":"ammonia","isCorrect":false},{"id":"b","letter":"B","text":"nitrogen dioxide","isCorrect":false},{"id":"c","letter":"C","text":"nitrogen monoxide","isCorrect":true},{"id":"d","letter":"D","text":"nitrogen","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Nitrogen monoxide được tạo thành khi mưa dông kèm theo sấm sét do phản ứng giữa nitrogen và oxygen trong không khí được gọi là","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>x</sub> tức thời","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>x</sub> nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"NO<sub>x</sub>nhiên liệu","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>x</sub> tự nhiên","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Oxide của nitrogen được tạo thành khi nitrogen trong không khí tác dụng với các gốc tự do được gọi là","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>x</sub> tức thời","isCorrect":true},{"id":"b","letter":"B","text":"NO<sub>x</sub>nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"NO<sub>x</sub> nhiên liệu","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>x</sub>tự nhiên","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Oxide của nitrogen được tạo thành ở nhiệt độ cao, khi nitrogen có trong không khí bị oxi hóa được gọi là","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>x</sub> tức thời","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>x</sub> nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"NO<sub>x</sub>nhiên liệu","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>x</sub> tự nhiên","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Oxide của nitrogen được tạo thành khi nguyên tố nitrogen trong nhiên liệu hoặc sinh khối kết hợp với oxygen dư thừa trong không khí được gọi là","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>x</sub> tức thời","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>x</sub> nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"NO<sub>x</sub> nhiên liệu","isCorrect":true},{"id":"d","letter":"D","text":"NO<sub>x</sub> tự nhiên","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Một oxide của nitrogen có công thức NO<sub>x</sub> trong đó N chiếm 30,43% về khối lượng. Công thức của oxide đó là","images":[],"options":[{"id":"a","letter":"A","text":"NO","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>2</sub>","isCorrect":true},{"id":"c","letter":"C","text":"N<sub>2</sub>O<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"N<sub>2</sub>O<sub>5</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Các oxide của nitrogen không được tạo thành trong trường hợp nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Núi lửa phun trào","isCorrect":false},{"id":"b","letter":"B","text":"Đốt cháy các nhiên liệu hóa thạch","isCorrect":false},{"id":"c","letter":"C","text":"Mưa dông, sấm sét","isCorrect":false},{"id":"d","letter":"D","text":"Xả thải nước thải công nghiệp chưa qua xử lí","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Hiện tượng mưa acid","images":[],"options":[{"id":"a","letter":"A","text":"là hiện tượng sẵn có trong tự nhiên","isCorrect":false},{"id":"b","letter":"B","text":"xảy ra do sự bốc hơi của nước rồi ngưng tụ","isCorrect":false},{"id":"c","letter":"C","text":"xảy ra khi nước mưa có pH < 7","isCorrect":false},{"id":"d","letter":"D","text":"xảy ra khi nước mưa có pH < 5,6","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Mưa acid là hiện tượng nước mưa có pH thấp hơn 5,6 (giá trị pH của khí carbon dioxide bão hòa trong nước). Hai tác nhân chính gây mưa acid là","images":[],"options":[{"id":"a","letter":"A","text":"Cl<sub>2</sub>, HCl","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub>, NH<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>2</sub>, NO<sub>x</sub>","isCorrect":true},{"id":"d","letter":"D","text":"S, H<sub>2</sub>S","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Biện pháp nào sau đây làm giảm tác hại của mưa acid đối với đời sống của thực vật, vật nuôi và con người?","images":[],"options":[{"id":"a","letter":"A","text":"Sử dụng nước mưa trong sinh hoạt hằng ngày","isCorrect":false},{"id":"b","letter":"B","text":"Tăng cường khai thác và chế biến dầu mỏ","isCorrect":false},{"id":"c","letter":"C","text":"Sử dụng nhiều than đá, dầu mỏ để làm chất đốt","isCorrect":false},{"id":"d","letter":"D","text":"Xây dựng quy trình xử lí khí thải","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Xét cân bằng tạo ra nitrogen dioxide ở nhiệt độ 2000<sup>o</sup>C:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2NO(g);  K<sub>c</sub>= 4,10 &times; 10<sup>-4</sup><br/>Ở trạng thái cân bằng, biểu thức nào sau đây có giá trị bằng K<sub>c</sub>?","images":[],"options":[{"id":"a","letter":"A","text":"222NON.Oéùëûéùéùëûëû","isCorrect":true},{"id":"b","letter":"B","text":"22NON.Oéùëûéùéùëûëû","isCorrect":false},{"id":"c","letter":"C","text":"222N.ONOéùéùëûëûéùëû","isCorrect":false},{"id":"d","letter":"D","text":"2NONéùëûéùëû","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Công thức hóa học của nitric acid là","images":[],"options":[{"id":"a","letter":"A","text":"NaNO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NH<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"HNO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"HNO<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Trong phân tử HNO<sub>3</sub>,nguyên tử N có","images":[],"options":[{"id":"a","letter":"A","text":"hoá trị V, số oxi hoá +5","isCorrect":false},{"id":"b","letter":"B","text":"hoá trị IV, số oxi hoá +5","isCorrect":true},{"id":"c","letter":"C","text":"hoá trị V, số oxi hoá +4","isCorrect":false},{"id":"d","letter":"D","text":"hoá trị IV, số oxi hoá +3","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Phân tử nào sau đây có liên kết cho – nhận?","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"HNO<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"H<sub>2</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Dựa vào công thức cấu tạo của nitric acid:<br/>Cho biết phát biểu nào sau đây không đúng?","images":["/assets/hoa12/c5/h11_b6_image53.png"],"options":[{"id":"a","letter":"A","text":"Nitrogen có số oxi hóa +5, là số oxi hóa cao nhất của nitrogen","isCorrect":false},{"id":"b","letter":"B","text":"Liên kết O-H phân cực mạnh về phía nguyên tử hydrogen","isCorrect":true},{"id":"c","letter":"C","text":"Phân tử nitric acid có chứa một liên kết cho nhận","isCorrect":false},{"id":"d","letter":"D","text":"Phân tử nitric acid phân cực","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q19","number":19,"part":1,"type":"multiple_choice","text":"Cho các nhận định sau về cấu tạo phân tử nitric acid:<br/>(a) Liên kết O – H phân cực về oxygen.(b) Nguyên tử N có số oxi hóa là +5.<br/>(c) Nguyên tử N có hóa trị bằng IV.(d) Liên kết cho – nhận N → O kém bền.<br/>Số nhận định đúng là","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":false},{"id":"b","letter":"B","text":"2","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q20","number":20,"part":1,"type":"multiple_choice","text":"Nitric acid tinh khiết là chất lỏng không màu, nhưng dung dịch nitric acid để lâu thường chuyển sang màu vàng là do","images":[],"options":[{"id":"a","letter":"A","text":"nitric acid tan nhiều trong nước","isCorrect":false},{"id":"b","letter":"B","text":"khi để lâu thì nitric acid bị khử bởi các chất của môi trường","isCorrect":false},{"id":"c","letter":"C","text":"dung dịch nitric acid có tính oxi hóa mạnh","isCorrect":false},{"id":"d","letter":"D","text":"dung dịch nitric acid có hoà tan một lượng nhỏ NO<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q21","number":21,"part":1,"type":"multiple_choice","text":"Nitric acid dễ bị phân hủy bởi ánh sáng hoặc nhiệt độ tạo thành các sản phẩm là","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>2</sub>, H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>O","isCorrect":true},{"id":"c","letter":"C","text":"N<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"N<sub>2</sub>. H<sub>2</sub>O","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q22","number":22,"part":1,"type":"multiple_choice","text":"Các tính chất hoá học của HNO<sub>3</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"tính acid mạnh, tính oxi hóa mạnh và tính khử mạnh","isCorrect":false},{"id":"b","letter":"B","text":"tính acid acid mạnh, tính oxi hóa mạnh và bị phân huỷ","isCorrect":true},{"id":"c","letter":"C","text":"tính oxi hóa mạnh, tính acid mạnh và tính base mạnh","isCorrect":false},{"id":"d","letter":"D","text":"tính oxi hóa mạnh, tính acid yếu và bị phân huỷ","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q23","number":23,"part":1,"type":"multiple_choice","text":"Tính chất vật lí nào sau đây không phải của nitric acid tinh khiết?","images":[],"options":[{"id": "a", "letter": "A", "text": "Chất rắn, không màu", "isCorrect": true}, {"id": "b", "letter": "B", "text": "Tan vô hạn trong nước", "isCorrect": false}, {"id": "c", "letter": "C", "text": "Nóng chảy ở -42<sup>o</sup>C và sôi 83<sup>o</sup>", "isCorrect": false}, {"id": "d", "letter": "D", "text": "Bốc khói mạnh trong không khí ẩm", "isCorrect": false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q24","number":24,"part":1,"type":"multiple_choice","text":"Điều nào sau đây không đúng về tính chất hóa học của dung dịch HNO<sub>3</sub>?","images":[],"options":[{"id":"a","letter":"A","text":"Dung dịch HNO<sub>3</sub> có tính khử mạnh","isCorrect":true},{"id":"b","letter":"B","text":"Dung dịch HNO<sub>3</sub> có tính oxi hóa mạnh","isCorrect":false},{"id":"c","letter":"C","text":"Dung dịch HNO<sub>3</sub> đặc, nguội không phản ứng với Fe","isCorrect":false},{"id":"d","letter":"D","text":"Dung dịch HNO<sub>3</sub> có tính acid","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q25","number":25,"part":1,"type":"multiple_choice","text":"Ammonium nitrate (sản xuất làm phân bón) được thực hiện bằng phản ứng giữa dung dịch nitric acid với hợp nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>3</sub>","isCorrect":true},{"id":"b","letter":"B","text":"CaO","isCorrect":false},{"id":"c","letter":"C","text":"NaOH","isCorrect":false},{"id":"d","letter":"D","text":"P","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q26","number":26,"part":1,"type":"multiple_choice","text":"Trong công nghiệp, quá trình sản xuất Ca(NO<sub>3</sub>)<sub>2</sub> cùng làm phân bón được thực hiện bằng phản ứng giữa dung dịch HNO<sub>3</sub> với hợp chất phổ biến, giá rẻ nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"CaO","isCorrect":false},{"id":"b","letter":"B","text":"Ca(OH)<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"CaCO<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"CaSO<sub>4</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q27","number":27,"part":1,"type":"multiple_choice","text":"Cho iron (III) oxide tác dụng với nitric acid thì sản phẩm thu được là","images":[],"options":[{"id":"a","letter":"A","text":"Fe(NO<sub>3</sub>)<sub>3</sub>, NO và H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"Fe(NO<sub>3</sub>)<sub>3</sub>, NO<sub>2</sub> và H<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"Fe(NO<sub>3</sub>)<sub>3</sub>, N<sub>2</sub> và H<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"Fe(NO<sub>3</sub>)<sub>3</sub> và H<sub>2</sub>O","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q28","number":28,"part":1,"type":"multiple_choice","text":"Nitric acid chỉ thể hiện tính acid khi tác dụng với chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"FeO","isCorrect":false},{"id":"b","letter":"B","text":"Cu","isCorrect":false},{"id":"c","letter":"C","text":"P","isCorrect":false},{"id":"d","letter":"D","text":"NaOH","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q29","number":29,"part":1,"type":"multiple_choice","text":"Acid nào sau đây thể hiện tính oxi hóa mạnh khi tác dụng với chất khử?","images":[],"options":[{"id":"a","letter":"A","text":"HCl","isCorrect":false},{"id":"b","letter":"B","text":"HNO<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"HBr","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>3</sub>PO<sub>4</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q30","number":30,"part":1,"type":"multiple_choice","text":"Hợp chất nào của nitrogen không được tạo ra khi cho HNO<sub>3</sub> tác dụng với kim loại?","images":[],"options":[{"id":"a","letter":"A","text":"NO","isCorrect":false},{"id":"b","letter":"B","text":"NH<sub>4</sub>NO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"NO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"N<sub>2</sub>O<sub>5</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q31","number":31,"part":1,"type":"multiple_choice","text":"Cho Ag tác dụng với dung dịch HNO<sub>3</sub> đặc, nóng thu được khí X có màu nâu đỏ. Khí X là","images":[],"options":[{"id":"a","letter":"A","text":"N<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"NO","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q32","number":32,"part":1,"type":"multiple_choice","text":"Cho Cu phản ứng với dung dịch HNO<sub>3</sub> loãng, nóng thu được khí X không màu hóa nâu trong không khí. Khí X là","images":[],"options":[{"id":"a","letter":"A","text":"NO","isCorrect":true},{"id":"b","letter":"B","text":"N<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"N<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NH<sub>3</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q33","number":33,"part":1,"type":"multiple_choice","text":"Kim loại nào sau đây không tác dụng với nitric acid?","images":[],"options":[{"id":"a","letter":"A","text":"Zn","isCorrect":false},{"id":"b","letter":"B","text":"Cu","isCorrect":false},{"id":"c","letter":"C","text":"Ag","isCorrect":false},{"id":"d","letter":"D","text":"Au","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q34","number":34,"part":1,"type":"multiple_choice","text":"Dung dịch nào sau đây tác đụng được với kim loại Cu?","images":[],"options":[{"id":"a","letter":"A","text":"HCl","isCorrect":false},{"id":"b","letter":"B","text":"HNO<sub>3</sub> loãng","isCorrect":true},{"id":"c","letter":"C","text":"H<sub>2</sub>SO<sub>4</sub> loãng","isCorrect":false},{"id":"d","letter":"D","text":"KOH","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q35","number":35,"part":1,"type":"multiple_choice","text":"Kim loại iron (Fe) bị thụ động bởi dung dịch","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>SO<sub>4</sub> loãng","isCorrect":false},{"id":"b","letter":"B","text":"HCl đặc, nguội","isCorrect":false},{"id":"c","letter":"C","text":"HNO<sub>3</sub> đặc, nguội","isCorrect":true},{"id":"d","letter":"D","text":"HCl loãng","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q36","number":36,"part":1,"type":"multiple_choice","text":"Các kim loại đều tác dụng được với dung dịch HCl nhưng không tác dụng với dung dịch HNO<sub>3</sub> đặc, nguội","images":[],"options":[{"id":"a","letter":"A","text":"Fe, Al, Cr","isCorrect":true},{"id":"b","letter":"B","text":"Cu, Fe, Al","isCorrect":false},{"id":"c","letter":"C","text":"Fe, Mg, Al","isCorrect":false},{"id":"d","letter":"D","text":"Cu, Pb, Ag","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q37","number":37,"part":1,"type":"multiple_choice","text":"Để điều chế được silver nitrate từ một mẫu silver (bạc) tinh khiết, cần hòa tan mẫu silver vào dung dịch nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Cu(NO<sub>3</sub>)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"HNO<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"NaNO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"KNO<sub>3</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q38","number":38,"part":1,"type":"multiple_choice","text":"Nitric acid đặc, nóng phản ứng được với tất cả các chất trong nhóm nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Mg(OH)<sub>2</sub>, CuO, NH<sub>3</sub>, Ag","isCorrect":true},{"id":"b","letter":"B","text":"Mg(OH)<sub>2</sub>, CuO, NH<sub>3</sub>, Pt","isCorrect":false},{"id":"c","letter":"C","text":"Mg(OH)<sub>2</sub>, NH<sub>3</sub>, CO<sub>2</sub>, Au","isCorrect":false},{"id":"d","letter":"D","text":"CaO, NH<sub>3</sub>, Au, FeCl<sub>2</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q39","number":39,"part":1,"type":"multiple_choice","text":"Dãy gồm tất cả các chất khi tác dụng với HNO<sub>3</sub> thì HNO<sub>3</sub> chỉ thể hiện tính acid là","images":[],"options":[{"id":"a","letter":"A","text":"CaCO<sub>3</sub>, Cu(OH)<sub>2</sub>, Fe(OH)<sub>2</sub>, FeO","isCorrect":false},{"id":"b","letter":"B","text":"CuO, NaOH, FeCO<sub>3</sub>, Fe<sub>2</sub>O<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Fe(OH)<sub>3</sub>, Na<sub>2</sub>CO<sub>3</sub>, Fe<sub>2</sub>O<sub>3</sub>, NH<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"KOH, FeS, K<sub>2</sub>CO<sub>3</sub>, Cu(OH)<sub>2</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q40","number":40,"part":1,"type":"multiple_choice","text":"Dãy gồm tất cả các chất khi tác dụng với HNO<sub>3</sub> thì HNO<sub>3</sub> chỉ thể hiện tính oxi hoá là","images":[],"options":[{"id":"a","letter":"A","text":"Mg, H<sub>2</sub>S, S, Fe<sub>3</sub>O<sub>4</sub>, Fe(OH)<sub>2</sub>","isCorrect":true},{"id":"b","letter":"B","text":"Al, FeCO<sub>3</sub>, HI, CaO, FeO","isCorrect":false},{"id":"c","letter":"C","text":"Cu, C, Fe<sub>2</sub>O<sub>3</sub>, Fe(OH)<sub>2</sub>, SO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Na<sub>2</sub>SO<sub>3</sub>, P, CuO, CaCO<sub>3</sub>, Ag","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q41","number":41,"part":1,"type":"multiple_choice","text":"Nitric acid đặc, nguội có thể tác dụng được với dãy chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Al, Al<sub>2</sub>O<sub>3</sub>, Mg, Na<sub>2</sub>CO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Cu, Al<sub>2</sub>O<sub>3</sub>, Zn(OH)<sub>2</sub>, CaCO<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"Fe, CuO, Zn, Fe(OH)<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"S, ZnO, Mg, Au","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q42","number":42,"part":1,"type":"multiple_choice","text":"Một nhóm học sinh thực hiện thí nghiệm cho kim loại Cu tác dụng với dung dịch HNO<sub>3</sub> đặc, nóng. Hiện tượng quan sát nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Khí không màu thoát ra, dung dịch chuyển sang màu xanh","isCorrect":false},{"id":"b","letter":"B","text":"Khí màu nâu đỏ thoát ra, dung dịch không màu","isCorrect":false},{"id":"c","letter":"C","text":"Khí màu nâu đỏ thoát ra, dung dịch chuyển sang màu xanh","isCorrect":true},{"id":"d","letter":"D","text":"Khí không màu thoát ra, dung dịch không màu","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q43","number":43,"part":1,"type":"multiple_choice","text":"Nước cường toan là hỗn hợp của HNO<sub>3</sub> đặc và HCl đặc có tỉ lệ thể tích lần lượt là","images":[],"options":[{"id":"a","letter":"A","text":"1 : 3","isCorrect":true},{"id":"b","letter":"B","text":"2 : 3","isCorrect":false},{"id":"c","letter":"C","text":"3 : 1","isCorrect":false},{"id":"d","letter":"D","text":"3 : 2","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q44","number":44,"part":1,"type":"multiple_choice","text":"Để hòa tan được kim loại Au (Gold) người ta dùng","images":[],"options":[{"id":"a","letter":"A","text":"dung dịch muối ăn","isCorrect":false},{"id":"b","letter":"B","text":"nước cường toan","isCorrect":true},{"id":"c","letter":"C","text":"dung dịch nitric acid đặc","isCorrect":false},{"id":"d","letter":"D","text":"dung dịch hydrochloric acid đặc","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q45","number":45,"part":1,"type":"multiple_choice","text":"Nitric acid thể hiện tính oxi hóa khi tác dụng với chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Fe<sub>2</sub>O<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Cu(OH)<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"NaHCO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Fe<sub>3</sub>O<sub>4</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q46","number":46,"part":1,"type":"multiple_choice","text":"Nitric acid không thể hiện tính oxi hóa khi tác dụng với chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Fe<sub>2</sub>O<sub>3</sub>","isCorrect":true},{"id":"b","letter":"B","text":"FeSO<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Cu","isCorrect":false},{"id":"d","letter":"D","text":"P","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q47","number":47,"part":1,"type":"multiple_choice","text":"Cho phản ứng: aFe + bHNO<sub>3</sub> → cFe(NO<sub>3</sub>)<sub>2</sub> + dNO<sub>2</sub>↑ + 2H<sub>2</sub>O<br/>Hệ số tỉ lượng a, b, c, d, e là những số nguyên dương có tỉ lệ tối giản. Tổng (a + b) bằng","images":[],"options":[{"id":"a","letter":"A","text":"3","isCorrect":false},{"id":"b","letter":"B","text":"5","isCorrect":true},{"id":"c","letter":"C","text":"4","isCorrect":false},{"id":"d","letter":"D","text":"6","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q48","number":48,"part":1,"type":"multiple_choice","text":"Phần lớn nitric acid được dùng để làm gì?","images":[],"options":[{"id":"a","letter":"A","text":"Điều chế phân đạm","isCorrect":true},{"id":"b","letter":"B","text":"Sản xuất thuốc nổ","isCorrect":false},{"id":"c","letter":"C","text":"Điều chế dược phẩm","isCorrect":false},{"id":"d","letter":"D","text":"Sản xuất thuốc nhuộm","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q49","number":49,"part":1,"type":"multiple_choice","text":"Thí nghiệm với dung dịch HNO<sub>3</sub> thường sinh ra khí độc NO<sub>2</sub>. Để hạn chế khí NO<sub>2</sub> thoát ra từ ống nghiệm, người ta nút ống nghiệm bằng:<br/>(a) bông khô. (b) bông có tẩm nước.<br/>(c) bông có tẩm nước vôi. (d) bông có tẩm giấm ăn.<br/>Trong 4 biện pháp trên, biện pháp có hiệu quả nhất là","images":[],"options":[{"id":"a","letter":"A","text":"(d)","isCorrect":false},{"id":"b","letter":"B","text":"(a)","isCorrect":false},{"id":"c","letter":"C","text":"(c)","isCorrect":true},{"id":"d","letter":"D","text":"(b)","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q50","number":50,"part":1,"type":"multiple_choice","text":"Hiện tượng phú dưỡng là hiện tượng","images":[],"options":[{"id":"a","letter":"A","text":"nước mưa có pH < 5,6","isCorrect":false},{"id":"b","letter":"B","text":"không khí bị ô nhiễm do hỗn hợp khí NO<sub>x</sub> gây ra","isCorrect":false},{"id":"c","letter":"C","text":"thừa dinh dưỡng đã cung cấp nguồn thức ăn dồi dào cho sinh vật phù du phát triển mạnh","isCorrect":true},{"id":"d","letter":"D","text":"làm trái đất nóng lên","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q51","number":51,"part":1,"type":"multiple_choice","text":"Hiện tượng phú dưỡng là một biểu hiện của môi trường ao, hồ bị ô nhiễm do dư thừa các chất dinh dưỡng, Sự dư thừa dinh dưỡng chủ yếu do hàm lượng các ion nào sau đây vượt quá mức cho phép?","images":[],"options":[{"id":"a","letter":"A","text":"Sodium, potassium","isCorrect":false},{"id":"b","letter":"B","text":"Calcium, magnesium","isCorrect":false},{"id":"c","letter":"C","text":"Nitrate, phosphate","isCorrect":true},{"id":"d","letter":"D","text":"Chloride, sulfate","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q52","number":52,"part":1,"type":"multiple_choice","text":"Phú dưỡng là hiện tượng xảy ra do sự gia tăng hàm lượng của hai nguyên tố nào trong nước?","images":[],"options":[{"id":"a","letter":"A","text":"Fe, Mn","isCorrect":false},{"id":"b","letter":"B","text":"N, P","isCorrect":true},{"id":"c","letter":"C","text":"Ca, Mg","isCorrect":false},{"id":"d","letter":"D","text":"Cl, F","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q53","number":53,"part":1,"type":"multiple_choice","text":"Hoạt động nào sau đây góp phần gây nên hiện tượng phú dưỡng?","images":[],"options":[{"id":"a","letter":"A","text":"Sự quang hợp của cây xanh","isCorrect":false},{"id":"b","letter":"B","text":"Nước thải sinh hoạt thải trực tiếp vào nguồn nước chưa qua xử lí","isCorrect":true},{"id":"c","letter":"C","text":"Ao hồ thả quá nhiều tôm, cá","isCorrect":false},{"id":"d","letter":"D","text":"Khử trùng ao hồ sau khi tát cạn bằng vôi sống (CaO)","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q54","number":54,"part":1,"type":"multiple_choice","text":"Biện pháp nào trong chăn nuôi có thể áp dụng để ngăn chặn hiện tượng phú dưỡng?","images":[],"options":[{"id":"a","letter":"A","text":"Thải chất thải vật nuôi xuống cống thoát nước","isCorrect":false},{"id":"b","letter":"B","text":"Thường xuyên rữa chuồng trại","isCorrect":false},{"id":"c","letter":"C","text":"Xây dựng bể chứa biogas","isCorrect":true},{"id":"d","letter":"D","text":"Xây các hầm rút","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q55","number":55,"part":1,"type":"multiple_choice","text":"Hậu quả nào sau đây không phải do hiện tượng phú dưỡng gây nên?","images":[],"options":[{"id":"a","letter":"A","text":"Gây mùi hôi thối","isCorrect":false},{"id":"b","letter":"B","text":"Gây mất mỹ quan","isCorrect":false},{"id":"c","letter":"C","text":"Nguồn phát triển bệnh tật","isCorrect":false},{"id":"d","letter":"D","text":"Suy giảm chất lượng thịt của vật nuôi","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q56","number":56,"part":1,"type":"multiple_choice","text":"Xét phản ứng: 4NO<sub>2</sub>(g) + O<sub>2</sub>(g) + 2H<sub>2</sub>O(l) → 4HNO<sub>3</sub>(l).<br/>Giá trị  0298rDH  của phản ứng và cho biết phản ứng là tỏa nhiệt hay thu nhiệt (Biết nhiệt tạo thành của NO<sub>2</sub>(g), H<sub>2</sub>O(l) và HNO<sub>3</sub>(l) lần lượt là 33,2 kJ/mol, –285,8 kJ/mol và –174,1 kJ/mol.)","images":[],"options":[{"id":"a","letter":"A","text":"+257,6 kJ và phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"–257,6 kJ và phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"+257,6 kJ và phản ứng tỏa nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"–257,6 kJ và phản ứng tỏa nhiệt","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q57","number":57,"part":1,"type":"multiple_choice","text":"Nồng độ mol/L của dung dịch HNO<sub>3</sub> 60% là bao nhiêu? Biết khối lượng riêng của dung dịch HNO<sub>3</sub> là 1,41 g/mL","images":[],"options":[{"id":"a","letter":"A","text":"0,022","isCorrect":false},{"id":"b","letter":"B","text":"13,395","isCorrect":true},{"id":"c","letter":"C","text":"0,013","isCorrect":false},{"id":"d","letter":"D","text":"2,223","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b6_p1_q58","number":58,"part":1,"type":"multiple_choice","text":"Dùng 61,975 m<sup>3</sup>NH<sub>3</sub> (đkc) để điều chế HNO<sub>3</sub>. Biết rằng chỉ có 92% NH<sub>3</sub> chuyển hóa thành HNO<sub>3</sub>, khối lượng dung dịch HNO<sub>3</sub> 40% thu được là","images":[],"options":[{"id":"a","letter":"A","text":"36,225 kg","isCorrect":false},{"id":"b","letter":"B","text":"362,25 kg","isCorrect":true},{"id":"c","letter":"C","text":"36225 kg","isCorrect":false},{"id":"d","letter":"D","text":"144,9 kg","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25}],"part2":[{"id":"h11_b6_p2_q1","number":1,"part":2,"type":"true_false","text":"Khí NO<sub>x</sub> là một trong các nguyên nhân gây nên hiện tượng mưa acid, sương mù quang hóa, hiện tượng phú dưỡng,… làm ô nhiễm môi trường","images":[],"options":[{"id":"a","letter":"A","text":"Hoạt động giao thông vận tải làm phát sinh NO<sub>x</sub> tự nhiên","isCorrect":false},{"id":"b","letter":"B","text":"Hoạt động của nhà máy nhiệt điện làm phát sinh NO<sub>x</sub> nhân tạo","isCorrect":true},{"id":"c","letter":"C","text":"Hoạt động của núi lửa phun trào, cháy rừng làm phát sinh NO<sub>x</sub> tự nhiên","isCorrect":true},{"id":"d","letter":"D","text":"Hoạt động đốt nhiên liệu hóa thạch làm phát sinh NO<sub>x</sub> nhân tạo","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. NO<sub>x</sub> nhân tạo.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q2","number":2,"part":2,"type":"true_false","text":"Nguyên nhân hình thành NO<sub>x</sub> trong không khí:","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen monoxide được tạo thành khi mưa dông kèm theo sấm sét do phản ứng giữa nitrogen và oxygen trong không khí được gọi là NO<sub>x</sub> tức thời","isCorrect":false},{"id":"b","letter":"B","text":"Oxide của nitrogen được tạo thành khi nitrogen trong không khí tác dụng với các gốc tự do được gọi là NO<sub>x</sub>tự nhiên","isCorrect":false},{"id":"c","letter":"C","text":"Oxide của nitrogen được tạo thành ở nhiệt độ cao, khi nitrogen có trong không khí bị oxi hóa được gọi là NO<sub>x</sub> nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Oxide của nitrogen được tạo thành khi nguyên tố nitrogen trong nhiên liệu hoặc sinh khối kết hợp với oxygen dư thừa trong không khí được gọi là NO<sub>x</sub> nhiên liệu","isCorrect":true}],"explanation":"Đáp án:<br/>a. S.<br/>b. S.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q3","number":3,"part":2,"type":"true_false","text":"Hình ảnh dưới đây mô tả về quá trình hình thành mưa acid:","images":["/assets/hoa12/c5/h11_b6_image7.png"],"options":[{"id":"a","letter":"A","text":"Nước mưa có độ pH dưới 7,0 được gọi là hiện tượng mưa acid","isCorrect":false},{"id":"b","letter":"B","text":"Tác nhân chính gây mưa acid là hỗn hợp khí SO<sub>2</sub> và NO<sub>x</sub>","isCorrect":true},{"id":"c","letter":"C","text":"Hoạt động của núi lửa, cháy rừng, sấm sét hoặc do con người tiêu thụ các nhiên liệu như than đá, dầu mỏ … làm phát sinh ra nhiều khí SO<sub>2</sub>, NO<sub>x</sub>","isCorrect":true},{"id":"d","letter":"D","text":"Dưới xúc tác của của ánh sáng mặt trời SO<sub>2</sub>, NO<sub>x</sub> bị oxi hoá, sau đó hoà tan trong nước mưa rơi xuống mặt đất, ao hồ … tạo thành hiện tượng mưa acid","isCorrect":false}],"explanation":"Đáp án:<br/>a. S.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Dưới xúc tác của các ion kim loại trong khói bụi SO<sub>2</sub>, NO<sub>x</sub> bị oxi hoá","explanationImages":[],"points":1},{"id":"h11_b6_p2_q4","number":4,"part":2,"type":"true_false","text":"Cho các phát biểu sau về mưa acid:","images":[],"options":[{"id":"a","letter":"A","text":"Khi nước mưa có pH nhỏ hơn 5,6 thì gọi là hiện tượng mưa acid","isCorrect":true},{"id":"b","letter":"B","text":"Hai tác nhân chính gây mưa acid là khí NO<sub>x</sub> và hơi nước","isCorrect":false},{"id":"c","letter":"C","text":"Mưa acid gây tác động xấu đối với môi trường, con người và sinh vật","isCorrect":true},{"id":"d","letter":"D","text":"Mưa acid ảnh hưởng đến sinh vật, ăn mòn công trình xây dựng, kiến trúc bằng đá và kim loại","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Hai tác nhân chính gây mưa acid là khí NO<sub>x</sub> và SO<sub>2</sub>.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q5","number":5,"part":2,"type":"true_false","text":"Khí NO<sub>x</sub> được sinh ra từ hoạt động giao thông vận tải, nhà máy nhiệt điện, luyện kim, đốt nhiên liệu. Cho các biện pháp nhằm cắt giảm nguồn phát thải khí NO<sub>x</sub> sau đây:","images":[],"options":[{"id":"a","letter":"A","text":"Xử lí khí thải các nhà máy nhiệt điện, luyện kim, đốt nhiên liệu trước khi thải ra môi trường","isCorrect":true},{"id":"b","letter":"B","text":"Tăng cường sử dụng năng lượng tái tạo như thuỷ điện, địa nhiệt, năng lượng mặt trời,","isCorrect":true},{"id":"c","letter":"C","text":"Giảm sử dụng phương tiện cá nhân, tăng cường sử dụng các phương tiện công cộng","isCorrect":true},{"id":"d","letter":"D","text":"Trồng thêm nhiều cây xanh trong khu dân cư, khu đô thị và vùng nông thôn","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S","explanationImages":[],"points":1},{"id":"h11_b6_p2_q6","number":6,"part":2,"type":"true_false","text":"Nitric acid có công thức Lewis và công thức cấu tạo như hình dưới đây:","images":["/assets/hoa12/c5/h11_b6_image61.png","/assets/hoa12/c5/h11_b6_image62.png"],"options":[{"id":"a","letter":"A","text":"Trong phân tử nitric acid, nguyên tử N có hóa trị là V","isCorrect":false},{"id":"b","letter":"B","text":"Trong phân tử nitric acid, nguyên tử N có số oxi hóa là +4","isCorrect":false},{"id":"c","letter":"C","text":"Liên kết O – H phân cực mạnh về phía nguyên tử oxygen","isCorrect":true},{"id":"d","letter":"D","text":"Liên kết N  O là liên kết cho – nhận","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Nguyên tử N có hóa trị là IV.<br/>b. S. Nguyên tử N có số oxi hóa là +5.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q7","number":7,"part":2,"type":"true_false","text":"Tính chất vật lí của nitric acid:","images":[],"options":[{"id":"a","letter":"A","text":"Nitric acid tinh khiết là chất lỏng, không màu, nhẹ hơn nước","isCorrect":false},{"id":"b","letter":"B","text":"Nitric acid nóng chảy ở -42<sup>o</sup>C và sôi ở 83<sup>o</sup>C","isCorrect":true},{"id":"c","letter":"C","text":"Nitric acid tan trong nước theo bất kỳ tỉ lệ nào","isCorrect":true},{"id":"d","letter":"D","text":"Nitric acid tinh khiết kém bền, bị phân hủy khi chiếu sáng","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. HNO<sub>3</sub> có khối lượng riêng là 1,53 g/mL (nặng hơn nước).<br/>b. Đ.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q8","number":8,"part":2,"type":"true_false","text":"Tính chất hóa học của nitric acid:","images":[],"options":[{"id":"a","letter":"A","text":"Nitric acid có khả năng nhận proton, thể hiện tính chất một acid Brosted-Lowry","isCorrect":false},{"id":"b","letter":"B","text":"Nitric acid có khả năng nhận electron, thể hiện tính khử mạnh","isCorrect":false},{"id":"c","letter":"C","text":"Nitric acid thể hiện tính oxi hoá khi tác dụng với kim loại Cu","isCorrect":true},{"id":"d","letter":"D","text":"Nitric acid thể hiện tính acid khi tác dụng với NH<sub>3</sub>","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Acid là cho proton H<sup>+</sup>.<br/>b. S. HNO<sub>3</sub> có tính oxi mạnh.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q9","number":9,"part":2,"type":"true_false","text":"Cho các nhận định sau về nitric acid:","images":[],"options":[{"id":"a","letter":"A","text":"Nitric acid hòa tan được kim loại gold (vàng)","isCorrect":false},{"id":"b","letter":"B","text":"Nitric acid đặc nguội có thể được đựng trong các xitec bằng sắt (Iron) hoặc nhôm (Aluminium)","isCorrect":true},{"id":"c","letter":"C","text":"Nitric acid thường dùng để phá mẫu quặng để nghiên cứu, xác định hàm lượng kim loại","isCorrect":true},{"id":"d","letter":"D","text":"Nitric acid có tính acid yếu","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Nitric acid không hòa tan được kim loại gold (vàng).<br/>b. Đ.<br/>c. Đ.<br/>d. S. Nitric acid có tính acid mạnh","explanationImages":[],"points":1},{"id":"h11_b6_p2_q10","number":10,"part":2,"type":"true_false","text":"Nitric acid là nguyên liệu hóa học quan trọng, chủ yếu được sử dụng trong sản xuất phân đạm, thuốc súng, thuốc nhuộm, dược phẩm, nhựa và các sản phẩm khác","images":[],"options":[{"id":"a","letter":"A","text":"Nitric acid thể hiện tính oxi hóa mạnh khi tác dụng với base mạnh","isCorrect":false},{"id":"b","letter":"B","text":"Ở dạng đậm đặc, nitric acid dùng để sản xuất thuốc nổ trinitrotoluene (TNT)","isCorrect":true},{"id":"c","letter":"C","text":"Nitric acid đặc với sulfuric acid đặc hỗn hợp có tính oxi hóa mạnh (nước cường toan) có khả năng hòa tan vàng và platinum","isCorrect":false},{"id":"d","letter":"D","text":"Dung dịch nitric đặc, nguội bị thụ động hóa bởi các kim loại Al, Fe và Cu","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Khi tác dụng với base, nitric acid thể hiện tính acid.<br/>b. Đ.<br/>c. S. Nitric acid đặc với hydrochloric acid đặc hỗn hợp có tính oxi hóa mạnh (nước cường toan) có khả năng hòa tan vàng và platinum.<br/>d. S. HNO<sub>3</sub> đặc, nguội bị thụ động bởi kim loại Cr","explanationImages":[],"points":1},{"id":"h11_b6_p2_q11","number":11,"part":2,"type":"true_false","text":"Sơ đồ phản ứng sau đây cho thấy rõ vai trò của thiên nhiên và con người trong việc vận chuyển nitrogen từ khí quyển vào trong đất, cung cấp nguồn phân đạm cho cây cối:","images":["/assets/hoa12/c5/h11_b6_image63.png"],"options":[{"id":"a","letter":"A","text":"Trong không khí, chất X chiếm phần trăm thể tích lớn nhất","isCorrect":false},{"id":"b","letter":"B","text":"Chất Z thỏa mãn sơ đồ trên là CaO hoặc Ca(OH)<sub>2</sub>","isCorrect":true},{"id":"c","letter":"C","text":"Trong phòng thí nghiệm, chất Y được điều chế từ chất M","isCorrect":true},{"id":"d","letter":"D","text":"Trong công nghiệp, chất Y được sử dụng để sản xuất phân bón","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. X là O<sub>2</sub> chỉ chiếm khoảng 21% thể tích trong không khí.<br/>b. Đ.<br/>c. Đ. Trong công nghiệp, M là NH<sub>3</sub> được dùng để điều chế chất Y là HNO<sub>3</sub>.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q12","number":12,"part":2,"type":"true_false","text":"Hiện tượng phú dưỡng là hiện tượng nguồn nước dư quá nhiều chất dinh dưỡng (nitrogen, phosphorus)","images":[],"options":[{"id":"a","letter":"A","text":"Có thể quan sát được hiện tượng phú dưỡng thông qua sự xuất hiện dày đặc của tảo xanh trong nước","isCorrect":true},{"id":"b","letter":"B","text":"Nguồn dinh dưỡng ở ao, hồ thường có nguồn gốc từ nước mưa đọng lại giữ lại ở ao, hồ","isCorrect":false},{"id":"c","letter":"C","text":"Khi hàm lượng nitrogen và phosphorus trong nước đạt 20 μg/L sẽ gây hiện tượng phú dưỡng","isCorrect":false},{"id":"d","letter":"D","text":"Nước thải, hay các đầm nuôi trồng thủy sản, sự dư thừa thức ăn chăn nuôi, phân bón hóa học... gây hiện tượng phú dưỡng","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Nguồn dinh dưỡng ở ao, hồ thường có nguồn gốc từ nước thải sinh hoạt, công nghiệp và nông nghiệp.<br/>c. S. Hàm lượng nitrogen trong nước đạt 300 μg/L và phosphorus đạt 20 μg/L.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q13","number":13,"part":2,"type":"true_false","text":"Cho các phát biểu sau về hiện tượng phú dưỡng:","images":[],"options":[{"id":"a","letter":"A","text":"Hiện tượng phú dưỡng là sự tích tụ lớn chất dinh dưỡng (nitrogen, phosphorus) trong nguồn nước","isCorrect":true},{"id":"b","letter":"B","text":"Hiện tượng phú dưỡng làm giảm hàm lượng oxygen trong nước, gây ảnh hưởng xấu cho các loài sinh vật khác trong ao hồ","isCorrect":true},{"id":"c","letter":"C","text":"Hiện tượng phú dưỡng làm các sinh vật như rong, rêu, tảo sinh sôi, tạo nhiều oxygen cho các sinh vật trong ao, hồ phát triển","isCorrect":false},{"id":"d","letter":"D","text":"Hiện tượng phú dưỡng gây ra nhiều tác động xấu tới hệ sinh thái, môi trường của ao, hồ","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Các sinh vật như rong, rêu, tảo sinh sôi làm giảm lượng oxygen trong ao hồ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q14","number":14,"part":2,"type":"true_false","text":"Cho các tác hại của hiện tượng phú dưỡng sau:","images":[],"options":[{"id":"a","letter":"A","text":"Cản trở sự hấp thụ ánh sáng mặt trời vào nước, giảm sự quang hợp của thực vật thủy sinh","isCorrect":true},{"id":"b","letter":"B","text":"Rong, tảo phát triển mạnh làm tăng hàm lượng khí oxygen hòa tan trong nước, gây mất cân bằng sinh thái","isCorrect":false},{"id":"c","letter":"C","text":"Xác rong tảo phân hủy gây ô nhiễm môi trường nước, không khí và tạo chất bùn lắng xuống lòng ao, hồ","isCorrect":true},{"id":"d","letter":"D","text":"Nguồn thuỷ sản trong ao hồ bị suy kiệt và xuất hiện mùi hôi thối khó chịu","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Rong, tảo phát triển mạnh làm tăng giảm lượng khí oxygen.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q15","number":15,"part":2,"type":"true_false","text":"Có một số biện pháp hạn chế hiện tượng phú dưỡng sau:","images":[],"options":[{"id":"a","letter":"A","text":"Tạo điều kiện để nước trong kênh rạch, ao, hồ được lưu thông","isCorrect":true},{"id":"b","letter":"B","text":"Cho nước thải chảy trực tiếp vào các kênh rạch, ao, hồ","isCorrect":false},{"id":"c","letter":"C","text":"Sử dụng phân bón đúng liều lượng, đúng cách, đúng thời điểm trong năm để hạn chế sự rửa trôi ion Ca<sup>2+</sup>, K<sup>+</sup> từ nguồn phân bón dư thừa vào kênh rạch, ao, hồ","isCorrect":false},{"id":"d","letter":"D","text":"Trồng một số thực vật thuỷ sinh phù hợp với môi trường phú dưỡng: bèo tây, ngổ trâu, cải xoong","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Xử lí nước thải chảy trực tiếp vào các kênh rạch, ao, hồ.<br/>c. S. Hạn chế sự rửa trôi của các ion NO<sub>3</sub><sup>-</sup>, PO<sub>4</sub><sup>3-</sup>.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b6_p2_q16","number":16,"part":2,"type":"true_false","text":"Nhiều loài thủy hải sản được nuôi trong hồ, ao, “vuông” (cách gọi của miền Tây Nam bộ về khu vực ruộng được khoanh vùng, cải tạo để nuôi thủy hải sản),... Hạn chế nguy cơ xảy ra hiện tượng phú dưỡng trong hồ, ao, vuông,...làm việc làm hết sức cần thiết của người nuôi thủy hải sản","images":[],"options":[{"id":"a","letter":"A","text":"Thay nước thường xuyên để tránh sự tích tụ các dưỡng chất quá nhiều","isCorrect":true},{"id":"b","letter":"B","text":"Tạo điều kiện nước trong ao, hồ được lưu thông","isCorrect":true},{"id":"c","letter":"C","text":"Không xả nước thải trực tiếp chưa qua xử lý chảy vào ao, hồ","isCorrect":true},{"id":"d","letter":"D","text":"Sử dụng nguồn thức ăn cho cá vừa đủ để tránh lượng thức ăn dư thừa làm tăng khả năng phú dưỡng","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ<br/>b. Đ.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1}],"part3":[{"id":"h11_b6_p3_q1","number":1,"part":3,"type":"short_answer","text":"Cho các nguồn phát thải khí NO<sub>x</sub>: (a) Núi lửa phun trào; (b) Cháy rừng; (c) Phân hủy các hợp chất hữu cơ trong tự nhiên; (d) Hoạt động vận tải; (e) Sản xuất công nghiệp, nông nghiệp. Có bao nhiêu nguồn phát thải khí NO<sub>x</sub> nhân tạo?","images":[],"correctAnswer":"2","explanation":"Đáp án: 2","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q2","number":2,"part":3,"type":"short_answer","text":"Cho các chất khí: NO, NO<sub>2</sub>, SO<sub>2</sub>, N<sub>2</sub>O và N<sub>2</sub>. Có bao nhiêu chất khí là nguyên nhân góp phần gây ra hiện tượng mưa acid?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q3","number":3,"part":3,"type":"short_answer","text":"Trong phân tử nitric acid,nguyên tử nitrogen có số oxi hóa là bao nhiêu?","images":[],"correctAnswer":"+5","explanation":"Đáp án: +5","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q4","number":4,"part":3,"type":"short_answer","text":"Trong các công thức dưới đây:<br/>Có bao nhiêu công thức không thỏa mãn quy tắc octec?","images":["/assets/hoa12/c5/h11_b6_image64.png"],"correctAnswer":"2","explanation":"Đáp án: 2.<br/>Các chất không thỏa là (2), (4)","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q5","number":5,"part":3,"type":"short_answer","text":"Cho dung dịch HNO<sub>3</sub> tác dụng với các chất sau: NH<sub>3</sub>, CuO, CaCO<sub>3</sub>, Ag và NaOH. Có bao nhiêu phản ứng trong đó HNO<sub>3</sub> đóng vai trò acid Bronsted?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q6","number":6,"part":3,"type":"short_answer","text":"Cho dung dịch HNO<sub>3</sub> tác dụng với các chất sau: Cu, Al<sub>2</sub>O<sub>3</sub>, NaHCO<sub>3</sub>, FeS và Ca(OH)<sub>2</sub>. Có bao nhiêu phản ứng trong đó HNO<sub>3</sub> đóng vai trò là chất oxi hóa?","images":[],"correctAnswer":"2","explanation":"Đáp án: 2","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q7","number":7,"part":3,"type":"short_answer","text":"Cho dãy các kim loại sau: Fe, Al, Mg, Cu, Ag và Au. Có bao nhiêu kim loại phản ứng được với dung dịch HNO<sub>3</sub> đặc, nguội?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q8","number":8,"part":3,"type":"short_answer","text":"Cho dãy các chất: FeO, Fe(OH)<sub>2</sub>, FeSO<sub>4</sub>, Fe<sub>3</sub>O<sub>4</sub>, Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> và Fe<sub>2</sub>O<sub>3</sub>. Có bao nhiêu chất trong dãy bị oxi hóa bởi dung dịch HNO<sub>3</sub> đặc, nóng?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q9","number":9,"part":3,"type":"short_answer","text":"Nước cường toan là hỗn hợp của HNO<sub>3</sub> đặc và HCl đặc có tỉ lệ thể tích tương ứng là 1 : x. Giá trị của x là bao nhiêu?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q10","number":10,"part":3,"type":"short_answer","text":"Phản ứng giữa kim loại magie với nitric acid loãng giải phóng khí dinitrogen oxide. Tổng các hệ số của các chất có trong phương trình hóa học là bao nhiêu?","images":[],"correctAnswer":"24","explanation":"Đáp án: 24.<br/>4Mg + 10HNO<sub>3</sub>  4Mg(NO<sub>3</sub>)<sub>2</sub> + N<sub>2</sub>O + 5H<sub>2</sub>O<br/>Tổng hệ số cân bằng = 4 + 10 + 4 + 1 + 5 = 24","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q11","number":11,"part":3,"type":"short_answer","text":"Cho phản ứng: Fe<sub>3</sub>O<sub>4</sub> + HNO<sub>3</sub> → Fe(NO<sub>3</sub>)<sub>3</sub> + NO + H<sub>2</sub>O. Sau khi cân bằng, hệ số tỉ lượng của HNO<sub>3</sub> trong phương trình hoá học trên là bao nhiêu?","images":[],"correctAnswer":"28","explanation":"Đáp án: 28","explanationImages":["/assets/hoa12/c5/h11_b6_image66.png"],"points":0.25},{"id":"h11_b6_p3_q12","number":12,"part":3,"type":"short_answer","text":"Xét phản ứng trong quá trình tạo ra NO<sub>x</sub>nhiệt:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g) → 2NO(g)  02981806r,DH=  kJ<br/>Nhiệt tạo thành chuẩn của NO(g) là bao nhiêu kJ/mol?","images":[],"correctAnswer":"90,3","explanation":"Đáp án: 90,3","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q13","number":13,"part":3,"type":"short_answer","text":"Trong công nghiệp, nitric acid được tổng hợp từ ammonia thông qua mấy giai đoạn?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3.<br/>NH<sub>3</sub>NO  NO<sub>2</sub>HNO<sub>3</sub>","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q14","number":14,"part":3,"type":"short_answer","text":"Trong công nghiệp, người ta sản xuất nitric acid từ ammonia theo sơ đồ chuyển hóa sau:<br/>NH<sub>3</sub>  o2O,t,xt+¾ → NO  2O+ → NO<sub>2</sub>  22OHO++¾ → HNO<sub>3</sub><br/>Để điều chế 10 tấn dung dịch HNO<sub>3</sub> có nồng độ 68% theo sơ đồ trên thì cần dùng bao nhiêu tấn ammonia? Biết hiệu suất cả quá trình là 90%","images":[],"correctAnswer":"2,04","explanation":"Đáp án: 2,04.<br/>Khối lượng HNO<sub>3</sub>:   3HNO10.68m6,8100==  tấn<br/>Bảo toàn nguyên tố N:  33NHHNO6,8nn63==<br/>Khối lượng NH<sub>3</sub> cần dùng:  ==3NH6,8100m.17.2,046390 tấn","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q15","number":15,"part":3,"type":"short_answer","text":"Sau mỗi trận mưa giông, một lượng nitrogen trong không khí được chuyển hóa thành ion nitrate và hòa tan vào nước mưa. Nguyên tố nitrogen có trong ion nitrate có vai trò thúc đẩy quá trình sinh trưởng và phát triển của cây trồng, làm cho cây trồng ra nhiều lá, cho nhiều củ, quả và hạt hơn. Hàm lượng ion nitrate trong một mẫu nước mưa là 62 mg/L nước mưa. Biết rằng, trong 1 giờ sẽ có 5m<sup>3</sup> nước mưa rơi xuống một thửa ruộng. Hãy cho biết khối lượng nguyên tố nitrogen (gam) mà thửa ruộng đó nhận được khi cơn mưa kéo dài 12 giờ?","images":[],"correctAnswer":"840","explanation":"Đáp án: 840.<br/>Thể tích nước sau 12 giờ = 12.5 = 60 m<sup>3</sup> = 60.10<sup>3</sup>L<br/>Khối lượng ion nitrate (NO<sub>3</sub><sup>–</sup>) =  60.10<sup>3</sup>.62 = 3720000 mg = 3720 gam<br/>N3720m.14 840g62==","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q16","number":16,"part":3,"type":"short_answer","text":"Xét phản ứng tạo thành oxide của nitrogen:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g) → 2NO(g)                   (1)                02981806r,DH=  kJ<br/>2NO(g) + O<sub>2</sub>(g) → 2NO<sub>2</sub>(g)              (2)                02981142r,DH=-  kJ<br/>Hãy tính  0298rDH  (kJ) của phản ứng: N<sub>2</sub>(g) + 2O<sub>2</sub>(g) → 2NO<sub>2</sub>(g)","images":[],"correctAnswer":"66,4","explanation":"Đáp án: 66,4.<br/>Tổ hợp phản ứng (1) + (2) ta thu được phản ứng  N<sub>2</sub>(g) + 2O<sub>2</sub>(g) → 2NO<sub>2</sub>(g)<br/>0r298180,6114,2= 66,4 kJDH=-","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q17","number":17,"part":3,"type":"short_answer","text":"Cho m gam Al phản ứng hoàn toàn với dung dịch HNO<sub>3</sub> loãng (dư), thu được 3,7185 lít khí N<sub>2</sub> (đkc, sản phẩm khử duy nhất). Giá trị của m là bao nhiêu?","images":[],"correctAnswer":"13,5","explanation":"Đáp án: 13,5.<br/>Bảo toàn e: 3n<sub>Al</sub> =  2N10n   n<sub>Al</sub> = 0,5 mol  m<sub>Al</sub> = 13,5g","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q18","number":18,"part":3,"type":"short_answer","text":"Cho 11 gam hỗn hợp Al và Fe vào dung dịch HNO<sub>3</sub> loãng, dư thì có 7,437 lít khí NO bay ra (đkc). Phần trăm khối lượng của Al trong hỗn hợp ban đầu là bao nhiêu phần trăm? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"49,1","explanation":"Đáp án: 49,1.<br/>Gọi x, y lần lượt là số mol Al và Fe trong hỗn hợp<br/>Ta có: 27x + 56y = 11 (1)<br/>Bảo toàn e: 3x + 3y = 3n<sub>NO</sub> = 0,9 (2)<br/>Từ (1) và (2) suy ra x = 0,2 và y = 0,1.<br/>Al0,2.27%m.100%49,1%11==","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q19","number":19,"part":3,"type":"short_answer","text":"Cho m gam Cu phản ứng hết với dung dịch HNO<sub>3</sub> dư, thu được 9,916 lít (đkc) hỗn hợp khí NO và NO<sub>2</sub> có tỉ khối đối với H<sub>2</sub> là 19. Giá trị của m là bao nhiêu?","images":[],"correctAnswer":"25,6","explanation":"Đáp án: 25,6.<br/>Đặt NO là x mol và NO<sub>2</sub> là y mol<br/>Ta có: x + y = 0,4 và 30x + 46y = 15,2  x = y = 0,2 mol<br/>Bảo toàn e: 2n<sub>Cu</sub> = 3x + y  nCu = 0,4 mol  m<sub>Cu</sub> = 25,6 g","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q20","number":20,"part":3,"type":"short_answer","text":"Hoàn tan m gam một kim loại hoá trị II trong một lượng vừa đủ dung dịch HNO<sub>3</sub> 60% (d = 1,365 g/mL) thu được 9,916 L một chất khí duy nhất màu nâu đỏ (đkc). Thể tích dung dịch HNO<sub>3</sub> đã dùng là bao nhiêu mL? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"61,5","explanation":"Đáp án: 61,5.<br/>3233HNONOHNOddHNO50,4n2n0,8molm0,8.6350,4(g)m84(g)60%==Þ==Þ==<br/>Ta có: m = d.V   84V61,54ml1,365==","explanationImages":[],"points":0.25},{"id":"h11_b6_p3_q21","number":21,"part":3,"type":"short_answer","text":"Kết quả phân tích thành phần nguyên tố của một loại quặng như sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Nguyên tố</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Fe</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Cu</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">S</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">O</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Phần trăm khối lượng</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">24,138%</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">45,977%</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">27,586%</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">2,299%</td></tr></table></div><br/>Hòa tan hoàn toàn 69,6 gam quặng đó trong 680 gam dung dịch HNO<sub>3</sub> 63% đun nóng thu được dung dịch Y và khí NO<sub>2</sub> thoát ra (NO<sub>2</sub> là sản phẩm khử duy nhất của NO<sub>3</sub><sup>–</sup>). Thể tích dung dịch NaOH 2M cần lấy để kết tủa vừa hết Fe<sup>3+</sup> và Cu<sup>2+</sup> dưới dạng hiđroxit từ Y là bao nhiêu lít? (Kết quả làm tròn đến hàng phần trăm)","images":[],"correctAnswer":"1,35","explanation":"Đáp án: 1,35.<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Nguyên tố</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Fe</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Cu</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">S</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">O</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Khối lượng (g)</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">16,8</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">32</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">19,2</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">1,6</td></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Số mol</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">0,3</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">0,5</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">0,6</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">0,1</td></tr></table></div><br/>Bảo toàn e:  2FeCuSONO3n2n6n2nn++=+    2NOn  = 5,3 mol<br/>Bảo toàn N:  3HNOn  =  ()3YNOn-  +  2NOn    ()3YNOn-  = 1,5 mol<br/>Y chứa Fe<sup>3+</sup>, Cu<sup>2+</sup>, SO<sub>4</sub><sup>2–</sup>,  3NO- và H<sup>+</sup> dư<br/>Bảo toàn điện tích:  Hn+ <sub>dư</sub> = 0,6.2 + 1,5 – 0,3.3 – 0,5.2 = 0,8 mol<br/>n<sub>NaOH</sub> = 3n<sub>Fe</sub> + 2n<sub>Cu</sub> +  Hn+ <sub>dư</sub> = 2,7 mol  V = 1,35 lít.<br/>","explanationImages":[],"points":0.25}]}},"bai7":{"id":"bai7","lessonNumber":7,"title":"Bài 7. Sulfur và sulfur dioxide","shortTitle":"Sulfur và sulfur dioxide","badge":"Bài 7","icon":"🧪","description":"Các dạng thù hình của sulfur, tính chất của SO2, vai trò của SO2 trong tự nhiên và công nghiệp.","theory":"I. SULFUR1. Trạng thái tự nhiên:- Sulfur (lưu huỳnh) là nguyên tố phổ biến thứ 17 trên vỏ Trái Đất, chiếm khoảng 0,03 – 0,1% khối lượng, tồn tại ở bốn dạng đồng vị bền <sup>32</sup>S (94,98% ), <sup>33</sup>S (0,76% ), <sup>34</sup>S (4.22%) và <sup>38</sup>S (0,02%).- Trong tự nhiên, sulfur tồn tại ở cả ở dạng đơn chất và dạng hợp chất. Đơn chất sulfur được phân bố ở vùng lân cận núi lửa và suối nước nóng. Hợp chất sulfur gồm các khoáng vật sulfide, sulfate, protein,...<div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Sulfur đơn chất</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Pyrite (FeS2)</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Chu sa, thần sa<br/>(HgS)</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Thạch cao<br/>(CaSO<sub>4</sub>.2H2O)</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\"></td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\"></td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\"></td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\"></td></tr></table></div>- Trong cơ thể người (chiếm khoảng 0,2% khối lượng), sulfur có trong thành phần của nhiều protein và enzyme.<div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Ví dụ 1. Sulfur (lưu huỳnh) là nguyên tố phổ biến thứ 17 trên vỏ Trái Đất.<br/>a. Trong tự nhiên, sulfur chỉ tồn tại ở dạng hợp chất.<br/>b. Đơn chất sulfur được phân bố vùng cận núi lửa và suối nước nóng.<br/>c. Trong cơ thể người, sulfur có trong thành phần của protein và enzyme.<br/>d. Hợp chất sulfur gồm các khoáng vật sulfide, sulfate, protein,...<br/>Trong các ý a), b), c), d) chọn đúng hoặc sai<br/>Đáp án:<br/>a. S. Trong tự nhiên, sulfur chỉ tồn tại ở dạng hợp chất và đơn chất<br/>b. Đ.<br/>c. Đ.<br/>d. Đ.</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Ví dụ 2. Kể tên một số ứng dụng thực tiễn của quặng pyrite, thạch cao, sulfuric acid mà em biết.<br/>Đáp án:<br/>- Ứng dụng của quặng pyrite: nguyên liệu để sản xuất sulfuric acid.<br/>- Ứng dụng của thạch cao: thạch cao được dùng để nặn tượng, đúc khuôn và bó bột khi gãy xương.<br/>- Ứng dụng của sulfuric acid: sản xuất thuốc nhuộm, chất tẩy rửa, phân bón, chất dẻo, tơ sợi, giấy, thuốc nổ …</td></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Ví dụ 3. Khoáng vật có thành phần chính chứa muối FeS2 là<br/>A. thạch cao.B. quặng blend.C. quặng pyrite.D. chu sa.</td></tr></table></div>2. Cấu tạo nguyên tử, phân tử:a) Cấu tạo nguyên tử:- Nguyên tố sulfur ở ô số 16, nhóm VIA, chu kì 3 trong bảng tuần hoàn.- Nguyên tử sulfur có độ âm điện là 2,58.- Sulfur có tính phi kim và tạo ra nhiều hợp chất với các số oxi hoá khác nhau từ –2 đến +6 (chủ yếu -2, +4, +6).b) Cấu tạo phân tử:- Phân tử sulfur gồm 8 nguyên tử (S<sub>8</sub>) có dạng vòng khép kín. Mỗi nguyên tử sulfur liên kết với hai nguyên tử bên cạnh bằng hai liên kết cộng hóa trị không phân cực. Liên kết S-S có năng lượng liên kết bằng 226 kJ/mol và độ dài liên kết là 205 pm.","mathForms":[{"id":"bai7_mf1","title":"Dạng 1: Các phương pháp giải nhanh trọng tâm Bài 7. Sulfur và sulfur dioxide","method":"Hệ thống hóa các công thức trọng tâm, định luật và phương pháp bảo toàn thường dùng trong Bài 7. Sulfur và sulfur dioxide","examples":[{"number":1,"text":"Ví dụ minh họa dạng toán trọng tâm Bài 7. Sulfur và sulfur dioxide: Áp dụng công thức và định luật để giải bài toán định lượng","solution":"Áp dụng phương pháp phân tích đề bài, lập phương trình tương ứng và thế số để tính đáp án chính xác"}]}],"practice":{"part1":[{"id":"h11_b7_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Sulfur được dân gian sử dụng để pha chế vào thuốc trị các bệnh ngoài da. Tên gọi dân gian của sulfur là","images":[],"options":[{"id":"a","letter":"A","text":"diêm sinh","isCorrect":true},{"id":"b","letter":"B","text":"đá vôi","isCorrect":false},{"id":"c","letter":"C","text":"phèn chua","isCorrect":false},{"id":"d","letter":"D","text":"giấm ăn","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Khoáng vật nào sau đây không chứa hợp chất sulfur?","images":[],"options":[{"id":"a","letter":"A","text":"Pyrite","isCorrect":false},{"id":"b","letter":"B","text":"Chu sa, thần sa","isCorrect":false},{"id":"c","letter":"C","text":"Thạch cao","isCorrect":false},{"id":"d","letter":"D","text":"Đá vôi","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Nhận định nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Trong tự nhiên, sulfur chỉ tồn tại ở dạng hợp chất","isCorrect":false},{"id":"b","letter":"B","text":"Đơn chất sulfur được phân bố vùng cận núi lửa và suối nước nóng","isCorrect":true},{"id":"c","letter":"C","text":"Thành phần chính của diêm tiêu Chile là sulfur","isCorrect":false},{"id":"d","letter":"D","text":"Trong cơ thể người, sulfur có trong thành phần của chất béo","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Một trong những nguồn nguyên liệu sản xuất sulfuric acid hiện nay là quặng pyrite. Thành phần chính có trong quặng pyrite là","images":[],"options":[{"id":"a","letter":"A","text":"FeS<sub>2</sub>","isCorrect":true},{"id":"b","letter":"B","text":"CuFeS<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"CaSO<sub>4</sub>.H<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"HgS","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Thạch cao sống là một dạng tồn tại phổ biến của sulfur trong tự nhiên, được sử dụng làm nguyên liệu để sản xuất xi măng, phấn viết bảng, … Thành phần hóa học của thạch cao sống là","images":[],"options":[{"id":"a","letter":"A","text":"BaSO<sub>4</sub>","isCorrect":false},{"id":"b","letter":"B","text":"CaSO<sub>4</sub>.2H<sub>2</sub>O","isCorrect":true},{"id":"c","letter":"C","text":"MgSO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"CuSO<sub>4</sub>.5H<sub>2</sub>O","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Trong tự nhiên, đồng vị của sulfur chiếm thành phần nhiều nhất là","images":[],"options":[{"id":"a","letter":"A","text":"<sup>34</sup>S","isCorrect":false},{"id":"b","letter":"B","text":"<sup>32</sup>S","isCorrect":true},{"id":"c","letter":"C","text":"<sup>36</sup>S","isCorrect":false},{"id":"d","letter":"D","text":"<sup>33</sup>S","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Số hiệu nguyên tử của nguyên tố sulfur là","images":[],"options":[{"id":"a","letter":"A","text":"12","isCorrect":false},{"id":"b","letter":"B","text":"14","isCorrect":false},{"id":"c","letter":"C","text":"16","isCorrect":true},{"id":"d","letter":"D","text":"18","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Nguyên tố sulfur có số hiệu nguyên tử là 16. Vị trí của sulfur trong bảng tuần hoàn các nguyên tố hóa học là","images":[],"options":[{"id": "a", "letter": "A", "text": "chu kì 3, nhóm VI", "isCorrect": true}, {"id": "b", "letter": "B", "text": "chu kì 5, nhóm VI", "isCorrect": false}, {"id": "c", "letter": "C", "text": "chu kì 3, nhóm IV", "isCorrect": false}, {"id": "d", "letter": "D", "text": "chu kì 5, nhóm IV", "isCorrect": false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Ở điều kiện thường, sulfur tồn tại ở dạng tinh thể, được tạo nên từ các phân tử sulfur. Số nguyên tử trong mỗi phân tử sulfur là","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":false},{"id":"b","letter":"B","text":"4","isCorrect":false},{"id":"c","letter":"C","text":"6","isCorrect":false},{"id":"d","letter":"D","text":"8","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Các số oxi hoá đặc trưng của sulfur trong hợp chất là","images":[],"options":[{"id":"a","letter":"A","text":"-2; 0 ; +4","isCorrect":false},{"id":"b","letter":"B","text":"0 ; +2 ; +4 ;+6","isCorrect":false},{"id":"c","letter":"C","text":"0 ; +4 ; +6","isCorrect":false},{"id":"d","letter":"D","text":"-2 ; +4: +6","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Chất nào sau đây không tan trong nước?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>S","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"S<sub>8</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Phân tử nào sau đây không phân cực?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>S","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"S<sub>8</sub>","isCorrect":true},{"id":"d","letter":"D","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Tính chất nào sau đây không phải tính chất vật lí của sulfur?","images":[],"options":[{"id":"a","letter":"A","text":"Màu vàng ở điều kiện thường","isCorrect":false},{"id":"b","letter":"B","text":"Thể rắn ở điều kiện thường","isCorrect":false},{"id":"c","letter":"C","text":"Không tan trong benzene, CS<sub>2</sub>","isCorrect":true},{"id":"d","letter":"D","text":"Tan ít trong alcohol","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Sulfur là một nguyên tố phi kim, chỉ có tính oxi hoá","isCorrect":true},{"id":"b","letter":"B","text":"Khi tham gia phản ứng, sulfur thể hiện tính oxi hoá hoặc tính khử","isCorrect":false},{"id":"c","letter":"C","text":"Ở điều kiện thường, sulfur là chất rắn, màu vàng, không tan trong nước","isCorrect":false},{"id":"d","letter":"D","text":"Ở điều kiện thường, sulfur tồn tại dạng phân tử tám nguyên tử ( 8S )","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Sulfur có mấy dạng thù hình?","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":true},{"id":"b","letter":"B","text":"3","isCorrect":false},{"id":"c","letter":"C","text":"4","isCorrect":false},{"id":"d","letter":"D","text":"5","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Đun nóng hỗn hợp gồm iron và sulfur thu được hợp chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Fe<sub>2</sub>S<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"FeS<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"FeS<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"FeS","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Sulfur thể hiện tính khử khi tác dụng với chất nào dưới đây?","images":[],"options":[{"id":"a","letter":"A","text":"Fe","isCorrect":false},{"id":"b","letter":"B","text":"Al","isCorrect":false},{"id":"c","letter":"C","text":"Hg","isCorrect":false},{"id":"d","letter":"D","text":"O<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Sulfur thể hiện tính oxi hoá khi tác dụng với chất nào dưới đây?","images":[],"options":[{"id":"a","letter":"A","text":"O<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Al","isCorrect":true},{"id":"c","letter":"C","text":"H<sub>2</sub>SO<sub>4</sub> đặc","isCorrect":false},{"id":"d","letter":"D","text":"F<sub>2</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q19","number":19,"part":1,"type":"multiple_choice","text":"Kim loại nào sau đây phản ứng với sulfur ngay ở điều kiện thường?","images":[],"options":[{"id":"a","letter":"A","text":"Al","isCorrect":false},{"id":"b","letter":"B","text":"Fe","isCorrect":false},{"id":"c","letter":"C","text":"Hg","isCorrect":true},{"id":"d","letter":"D","text":"Zn","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q20","number":20,"part":1,"type":"multiple_choice","text":"Sulfur thể hiện tính oxi hóa trong phản ứng hóa học nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"S + O<sub>2</sub>  0t → SO<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"S + 3F<sub>2</sub> → SF<sub>6</sub>","isCorrect":false},{"id":"c","letter":"C","text":"S + 6HNO<sub>3</sub>  0t → H<sub>2</sub>SO<sub>4</sub> + 6NO<sub>2</sub> + 2H<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"S + H<sub>2</sub>  0t → H<sub>2</sub>S","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q21","number":21,"part":1,"type":"multiple_choice","text":"Khi nhiệt kế thủy ngân vỡ, rắc chất bột nào sau đây lên thủy ngân rơi vãi sẽ chuyển hóa chúng thành hợp chất bền, ít độc hại?","images":[],"options":[{"id":"a","letter":"A","text":"Than đá","isCorrect":false},{"id":"b","letter":"B","text":"Đá vôi","isCorrect":false},{"id":"c","letter":"C","text":"Muối ăn","isCorrect":false},{"id":"d","letter":"D","text":"Sulfur","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q22","number":22,"part":1,"type":"multiple_choice","text":"Trong công nghiệp, phần lớn sulfur đơn chất sau khi khai thác ở các mỏ được dùng làm nguyên liệu để","images":[],"options":[{"id":"a","letter":"A","text":"lưu hóa cao su tự nhiên","isCorrect":false},{"id":"b","letter":"B","text":"sản xuất sulfuric acid","isCorrect":true},{"id":"c","letter":"C","text":"điều chế thuốc bảo vệ thực vật","isCorrect":false},{"id":"d","letter":"D","text":"bào chế thuốc đông y","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q23","number":23,"part":1,"type":"multiple_choice","text":"Ứng dụng nào sau đây không phải của sulfur?","images":[],"options":[{"id":"a","letter":"A","text":"Làm nguyên liệu sản xuất sulfuric acid","isCorrect":false},{"id":"b","letter":"B","text":"Làm chất lưu hóa cao su","isCorrect":false},{"id":"c","letter":"C","text":"Khử chua đất","isCorrect":true},{"id":"d","letter":"D","text":"Sản xuất diêm, thuốc nổ","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q24","number":24,"part":1,"type":"multiple_choice","text":"Cho các phát biểu sau:<br/>(a) Trong tự nhiên, sulfur tồn tại chủ yếu ở dạng muối sulfide và muối sulfate của một số kim loại.<br/>(b) Là một phi kim khá hoạt động nên trong tự nhiên không tìm thấy sulfur đơn chất.<br/>(c) Trứng gà ung có mùi thối đặc trưng một phần là do các hợp chất của sulfur có trong trứng phân hủy gây ra.<br/>(d) Nguyên tố sulfur có mặt trong một số loại thực vật, đặc biệt là các loại rau quả có mùi mạnh như hành tây, sầu riêng, …<br/>(e) Thành phần chính của quặng pyrite là hợp chất của sulfur và chì (lead, Pb).<br/>Số phát biểu đúng là","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":false},{"id":"b","letter":"B","text":"3","isCorrect":true},{"id":"c","letter":"C","text":"4","isCorrect":false},{"id":"d","letter":"D","text":"5","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q25","number":25,"part":1,"type":"multiple_choice","text":"Số oxi hóa của sulfur trong SO<sub>2</sub> và SO<sub>3</sub> lần lượt là","images":[],"options":[{"id":"a","letter":"A","text":"+2; +3","isCorrect":false},{"id":"b","letter":"B","text":"+4; +6","isCorrect":true},{"id":"c","letter":"C","text":"+6; +4","isCorrect":false},{"id":"d","letter":"D","text":"+4; +4","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q26","number":26,"part":1,"type":"multiple_choice","text":"Hợp chất nào sau đây sulfur có số oxi hóa +4?","images":[],"options":[{"id":"a","letter":"A","text":"Na<sub>2</sub>S","isCorrect":false},{"id":"b","letter":"B","text":"Na<sub>2</sub>SO<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"Na<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"SO<sub>3</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q27","number":27,"part":1,"type":"multiple_choice","text":"Quá trình đốt than sinh ra nhiều loại khí thải, trong đó có khí SO<sub>2</sub>. Khí SO<sub>2</sub> mùi xốc và có khả năng gây viêm đường hô hấp. Tên gọi của SO<sub>2</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"sulfur trioxide","isCorrect":false},{"id":"b","letter":"B","text":"sulfuric acid","isCorrect":false},{"id":"c","letter":"C","text":"sulfur dioxide","isCorrect":true},{"id":"d","letter":"D","text":"hydrogen sulfide","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q28","number":28,"part":1,"type":"multiple_choice","text":"Sulfur dioxide là chất khí:","images":[],"options":[{"id":"a","letter":"A","text":"không độc","isCorrect":false},{"id":"b","letter":"B","text":"không màu, mùi hắc","isCorrect":true},{"id":"c","letter":"C","text":"tan ít trong nước","isCorrect":false},{"id":"d","letter":"D","text":"nhẹ hơn không khí","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q29","number":29,"part":1,"type":"multiple_choice","text":"Phát biểu nào diễn tả đúng tính chất hóa học của SO<sub>2</sub>?","images":[],"options":[{"id":"a","letter":"A","text":"SO<sub>2</sub> chỉ có tính khử","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>2</sub> chỉ có tính oxi hóa","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>2</sub> vừa có tính khử, vừa có tính oxi hóa","isCorrect":true},{"id":"d","letter":"D","text":"SO<sub>2</sub> không có tính khử và không có tính oxi hóa","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q30","number":30,"part":1,"type":"multiple_choice","text":"Trong số các chất khí: SO<sub>2</sub>, CO<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, khí tan tốt trong nước ở điều kiện thường là","images":[],"options":[{"id":"a","letter":"A","text":"O<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"CO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>2</sub>","isCorrect":true},{"id":"d","letter":"D","text":"N<sub>2</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q31","number":31,"part":1,"type":"multiple_choice","text":"Sulfur dioxide tan trong nước tạo thành dung dịch chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>S","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>SO<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>2</sub>CO<sub>3</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q32","number":32,"part":1,"type":"multiple_choice","text":"Sulfur dioxide thể hiện tính chất của một acidic oxide khi tác dụng với dung dịch nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"KCl","isCorrect":false},{"id":"b","letter":"B","text":"CH<sub>3</sub>OH","isCorrect":false},{"id":"c","letter":"C","text":"KOH","isCorrect":true},{"id":"d","letter":"D","text":"HCl","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q33","number":33,"part":1,"type":"multiple_choice","text":"Chất khí (X) tan trong nước tạo ra dung dịch làm quỳ tím hoá đỏ và khí (X) có thể được dùng làm chất tẩy màu. Khi (X) là","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"CO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>2</sub>","isCorrect":true},{"id":"d","letter":"D","text":"O<sub>3</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q34","number":34,"part":1,"type":"multiple_choice","text":"Trong các phản ứng dưới đây, SO<sub>2</sub> đóng vai trò là chất oxi hoá?","images":[],"options":[{"id":"a","letter":"A","text":"SO<sub>2</sub> + Na<sub>2</sub>O → Na<sub>2</sub>SO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>2</sub> + 2H<sub>2</sub>S → 3S + 2H<sub>2</sub>O","isCorrect":true},{"id":"c","letter":"C","text":"SO<sub>2</sub> + H<sub>2</sub>O + Br<sub>2</sub> → 2HBr + H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"5SO<sub>2</sub> + 2KMnO<sub>4</sub> + 2H<sub>2</sub>O → K<sub>2</sub>SO<sub>4</sub> + 2MnSO<sub>4</sub> + 2H<sub>2</sub>SO<sub>4</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q35","number":35,"part":1,"type":"multiple_choice","text":"Ở điều kiện thích hợp, sulfur dioxide đóng vai trò là chất oxi hóa khi tham gia phản ứng với chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>S","isCorrect":true},{"id":"c","letter":"C","text":"NaOH","isCorrect":false},{"id":"d","letter":"D","text":"Ca(OH)<sub>2</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q36","number":36,"part":1,"type":"multiple_choice","text":"Sulfur dioxide đóng vai trò chất khử khi tác dụng với chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>S","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>2</sub>","isCorrect":true},{"id":"c","letter":"C","text":"Mg","isCorrect":false},{"id":"d","letter":"D","text":"KOH","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q37","number":37,"part":1,"type":"multiple_choice","text":"Sulfur dioxide tác dụng với nitrogen dioxide (xúc tác NO) tạo sản phẩm gồm","images":[],"options":[{"id":"a","letter":"A","text":"N<sub>2</sub>, SO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NO, SO<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"S, NO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NO, S","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q38","number":38,"part":1,"type":"multiple_choice","text":"Cho các phương trình hoá học sau:<br/>(1) SO<sub>2</sub> + 2H<sub>2</sub>S &rarr; 3S + 2H<sub>2</sub>O<br/>(2) SO<sub>2</sub> + Br<sub>2</sub> + 2H<sub>2</sub>O &rarr; 2HBr + H<sub>2</sub>SO<sub>4</sub> <br/>Phát biểu nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"2SO chỉ thể hiện tính oxi hoá","isCorrect":false},{"id":"b","letter":"B","text":"2SO chỉ thể hiện tính khử","isCorrect":false},{"id":"c","letter":"C","text":"2SO vừa thể hiện tính oxi hoá, vừa thể hiện tính khử","isCorrect":true},{"id":"d","letter":"D","text":"2SO không thể hiện tính khử và không thể hiện tính oxi hoá","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q39","number":39,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(a) S + O<sub>2</sub> → (t°) SO<sub>2</sub> (b) Hg + S → HgS<br/>(c) H<sub>2</sub> +  18 S<sub>8</sub> → H<sub>2</sub>S.(d) Fe + S → (t°) FeS<br/>Có bao nhiêu phản ứng trong đó sulfur đóng vai trò là chất khử?","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":true},{"id":"b","letter":"B","text":"2","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q40","number":40,"part":1,"type":"multiple_choice","text":"Khi sục khí SO<sub>2</sub> vào dung dịch H<sub>2</sub>S thì có hiện tượng gì?","images":[],"options":[{"id":"a","letter":"A","text":"Dung dịch bị vẩn đục màu vàng","isCorrect":true},{"id":"b","letter":"B","text":"Không có hiện tượng gì","isCorrect":false},{"id":"c","letter":"C","text":"Dung dịch chuyển thành màu nâu đen","isCorrect":false},{"id":"d","letter":"D","text":"Tạo thành chất rắn màu đỏ","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q41","number":41,"part":1,"type":"multiple_choice","text":"Khí nào sau đây có khả năng làm mất màu nước bromine?","images":[],"options":[{"id":"a","letter":"A","text":"N<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"CO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"SO<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q42","number":42,"part":1,"type":"multiple_choice","text":"Một bạn học sinh thu khí SO<sub>2</sub> vào bình tam giác và đậy miệng bình bằng bông tẩm dung dịch E (để giữ không cho khí SO<sub>2</sub> bay ra) theo sơ đồ bên. Theo em, để hiệu quả nhất, bạn học sinh cần sử dụng dung dịch E là dung dịch nào sau đây?","images":["/assets/hoa12/c5/h11_b7_image77.png"],"options":[{"id":"a","letter":"A","text":"Giấm ăn","isCorrect":false},{"id":"b","letter":"B","text":"Muối ăn","isCorrect":false},{"id":"c","letter":"C","text":"Nước vôi","isCorrect":true},{"id":"d","letter":"D","text":"Nước máy","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q43","number":43,"part":1,"type":"multiple_choice","text":"Sau khi điều chế, khí SO<sub>2</sub> có lẫn hơi nước được dẫn qua bình làm khô chứa các hạt chất rắn T rồi thu vào bình chứa theo hình vẽ sau:<br/>Chất T có thể là","images":["/assets/hoa12/c5/h11_b7_image78.png"],"options":[{"id":"a","letter":"A","text":"KOH","isCorrect":false},{"id":"b","letter":"B","text":"NaOH","isCorrect":false},{"id":"c","letter":"C","text":"CaO","isCorrect":false},{"id":"d","letter":"D","text":"P<sub>2</sub>O<sub>5</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q44","number":44,"part":1,"type":"multiple_choice","text":"Cho cân bằng hóa học sau: 2SO<sub>2</sub> g) + O<sub>2</sub> (g) ⇌ 2SO<sub>3</sub>(g)  rHD < 0. Khi tăng nhiệt độ thì","images":[],"options":[{"id":"a","letter":"A","text":"tổng số mol khí trong hệ giảm","isCorrect":false},{"id":"b","letter":"B","text":"hiệu suất phản ứng tăng","isCorrect":false},{"id":"c","letter":"C","text":"cân bằng chuyển dịch theo chiều nghịch","isCorrect":true},{"id":"d","letter":"D","text":"nồng độ khí sản phẩm tăng","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q45","number":45,"part":1,"type":"multiple_choice","text":"Khi SO<sub>2</sub> sinh ra từ việc đốt các nhiên liệu hoá thạch, các quặng sulfide là một trong các chất gây ô nhiễm môi trường, do SO<sub>2</sub> góp phần gây ra","images":[],"options":[{"id":"a","letter":"A","text":"mưa acid","isCorrect":true},{"id":"b","letter":"B","text":"hiện tượng khí nhà kính","isCorrect":false},{"id":"c","letter":"C","text":"suy giảm tầng ozone","isCorrect":false},{"id":"d","letter":"D","text":"hiện tượng phú dưỡng","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q46","number":46,"part":1,"type":"multiple_choice","text":"Phản ứng hóa học nào sau đây đóng vai trò chính chuyển hóa sulfur dioxide trong không khí ô nhiễm gây mưa acid?","images":[],"options":[{"id":"a","letter":"A","text":"SO<sub>2</sub> + NaOH → NaHSO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>2</sub> + 2H<sub>2</sub>S → 3S + 2H<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>2</sub> + H<sub>2</sub>O + Br<sub>2</sub> → 2HBr + H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"SO<sub>2</sub> + NO<sub>2</sub> → SO<sub>3</sub> + NO","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q47","number":47,"part":1,"type":"multiple_choice","text":"Ứng dụng nào sau đây không phải của SO<sub>2</sub>?","images":[],"options":[{"id":"a","letter":"A","text":"Sản xuất sulfuric acid","isCorrect":false},{"id":"b","letter":"B","text":"Tẩy màu dung dịch đường","isCorrect":false},{"id":"c","letter":"C","text":"Khử mùi không khí","isCorrect":true},{"id":"d","letter":"D","text":"Tẩy trắng giấy, bột giấy","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q48","number":48,"part":1,"type":"multiple_choice","text":"Cho các ứng dụng sau:<br/>(1) sản xuất sulfuric acid;(2) tẩy trắng bột giấy;<br/>(3) diệt nấm mốc, thuốc đông y;(4) diệt trùng nước sinh hoạt.<br/>Số ứng dụng của khí sulfur dioxide trong đời sống, sản suất là","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":false},{"id":"b","letter":"B","text":"2","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":true},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q49","number":49,"part":1,"type":"multiple_choice","text":"Cho các phát biểu sau về sulfur dioxide (SO<sub>2</sub>):<br/>(a) Có độc tính đối với con người.<br/>(b) Phản ứng được với đá vôi.<br/>(c) Khí này được tạo thành từ hoạt động của núi lửa trong tự nhiên, từ quá tình đốt cháy nhiên liệu hóa thạch của con người, …<br/>(d) Là oxide lưỡng tính.<br/>Số phát biểu đúng là","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":false},{"id":"b","letter":"B","text":"2","isCorrect":true},{"id":"c","letter":"C","text":"3","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q50","number":50,"part":1,"type":"multiple_choice","text":"Xét phản ứng giữa sulfur và hydrogen ở điều kiện chuẩn:<br/>H<sub>2 (g)</sub> +  18 S<sub>8 (s)</sub> → H<sub>2</sub>S<sub>(g)</sub> 298orHD = -20,6 kJ<br/>Nhiệt tạo thành của H<sub>2</sub>S <sub>(s)</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"-20,6 kJ/mol","isCorrect":true},{"id":"b","letter":"B","text":"-41,2 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"41,2 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"20,6 kJ/mol","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q51","number":51,"part":1,"type":"multiple_choice","text":"Dẫn khí SO<sub>2</sub> vào 100 mL dung dịch KMnO<sub>4</sub> 0,02 M đến khi mất màu tím theo sơ đồ phản ứng:<br/>SO<sub>2</sub> + KMnO<sub>4</sub> + H<sub>2</sub>O → K<sub>2</sub>SO<sub>4</sub> + MnSO<sub>4</sub> + H<sub>2</sub>SO<sub>4</sub><br/>Thể tích khí SO<sub>2</sub> (đkc) đã phản ứng là","images":[],"options":[{"id":"a","letter":"A","text":"50 mL","isCorrect":false},{"id":"b","letter":"B","text":"248 mL","isCorrect":false},{"id":"c","letter":"C","text":"124 mL","isCorrect":true},{"id":"d","letter":"D","text":"100 mL","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q52","number":52,"part":1,"type":"multiple_choice","text":"Sulfur và quặng pyrite sắt là các nguyên liệu chính trong công nghiệp sản xuất sulfuric acid. Tại một nhà máy, cứ đốt cháy 1 tấn quặng pyrite sắt (chứa 84% khối lượng FeS<sub>2</sub>) bằng không khí, thu được tối đa V m<sup>3</sup> khí SO<sub>2</sub> (đkc). Giá trị của V là","images":[],"options":[{"id":"a","letter":"A","text":"173,5","isCorrect":false},{"id":"b","letter":"B","text":"347,0","isCorrect":true},{"id":"c","letter":"C","text":"86,8","isCorrect":false},{"id":"d","letter":"D","text":"477,2","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b7_p1_q53","number":53,"part":1,"type":"multiple_choice","text":"Phản ứng chuyển hóa hydrogen sulfide trong khí thiên nhiên thành sulfur được thực hiện theo sơ đồ phản ứng: H<sub>2</sub>S + SO<sub>2</sub> → S + H<sub>2</sub>O.<br/>Khối lượng sulfur tối đa tạo ra khi chuyển hóa 1 000 m<sup>3</sup> khí thiên nhiên (đkc) (chứa 5 mg H<sub>2</sub>S/m<sup>3</sup>) là","images":[],"options":[{"id":"a","letter":"A","text":"10,0 g","isCorrect":false},{"id":"b","letter":"B","text":"5,0 g","isCorrect":false},{"id":"c","letter":"C","text":"7,06 g","isCorrect":true},{"id":"d","letter":"D","text":"100,0 g","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25}],"part2":[{"id":"h11_b7_p2_q1","number":1,"part":2,"type":"true_false","text":"Trong tự nhiên sulfur tồn tại ở cả dạng đơn chất và hợp chất","images":[],"options":[{"id":"a","letter":"A","text":"Trong tự nhiên, sulfur tồn tại ở dạng hợp chất như: quặng pyrite, thạch cao, sphalerite,","isCorrect":true},{"id":"b","letter":"B","text":"Đơn chất sulfur được tìm thấy chủ yếu tại núi lửa","isCorrect":true},{"id":"c","letter":"C","text":"Sulfur có trong thành phần của thành phần của một số protein động vật, thực vật","isCorrect":true},{"id":"d","letter":"D","text":"Ở điều kiện thường, đơn chất sulfur là chất rắn, màu trắng","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Đơn chất sulfur là chất rắn, màu vàng","explanationImages":[],"points":1},{"id":"h11_b7_p2_q2","number":2,"part":2,"type":"true_false","text":"Sulfur còn được gọi là lưu hoàng, sinh diêm vàng, diêm sinh đã được biết đến từ thời cổ đại","images":[],"options":[{"id":"a","letter":"A","text":"Nuyên tố sulur ở ô số 16, chu kì 3, nhóm VIA trong bảng tuần hoàn","isCorrect":true},{"id":"b","letter":"B","text":"Ở dạng phân tử, sulfur gồm 6 nguyên tử liên kết với nhau tạo thành mạch vòng","isCorrect":false},{"id":"c","letter":"C","text":"Sulfur tan nhiều trong nước và các dung môi hữu cơ như: benzene, carbon disulfide (CS<sub>2</sub>),","isCorrect":false},{"id":"d","letter":"D","text":"Sulfur được dân gian sử dụng để pha chế vào thuốc trị các bệnh ngoài da","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Phân tử sulfru có 8 nguyên tử sulfur.<br/>c. S.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b7_p2_q3","number":3,"part":2,"type":"true_false","text":"Cho các phát biểu sau về sulfur:","images":[],"options":[{"id":"a","letter":"A","text":"Phần lớn sulfur trong tự nhiên tồn tại ở dạng đơn chất","isCorrect":false},{"id":"b","letter":"B","text":"Khi tham gia phản ứng hóa học, sulfur thể hiện tính oxi hóa và tính khử","isCorrect":true},{"id":"c","letter":"C","text":"Trong tự nhiên, đồng vị của sulfur chiếm thành phần nhiều nhất là <sup>32</sup>S","isCorrect":true},{"id":"d","letter":"D","text":"Số oxi hóa của nguyên tố sulfur trong hợp chất luôn là số oxi hóa dương","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Phần lớn sulfur trong tự nhiên tồn tại ở dạng hợp chất.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Số oxi hóa của S là -2 đến +6","explanationImages":[],"points":1},{"id":"h11_b7_p2_q4","number":4,"part":2,"type":"true_false","text":"Cho các nhận định sau về tính chất của sulfur:","images":[],"options":[{"id":"a","letter":"A","text":"Sulfur không tan trong nước nhưng tan tốt trong alcohol","isCorrect":false},{"id":"b","letter":"B","text":"Đơn chất sulfur có hai dạng thù hình là dạng tinh thể và dạng bột","isCorrect":false},{"id":"c","letter":"C","text":"Sulfur khử được nhiều kim loại (trừ Au, Ag, Pt) ở nhiệt độ cao tạo muối sulfide","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng của sulfur với thủy ngân (mercury) được sử dụng để xử lí thủy ngân bị rơi vãi","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Sulfur tan ít trong alcohol.<br/>b. S. Đơn chất sulfur có hai dạng thù hình là dạng tà phương và đơn tà.<br/>c. S. Sulfur oxi hóa được nhiều kim loại.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b7_p2_q5","number":5,"part":2,"type":"true_false","text":"Cho các nhận định sau về tính chất của sulfur:","images":[],"options":[{"id":"a","letter":"A","text":"Khi phản ứng với hydrogen, sulfur thể hiện tính oxi hóa","isCorrect":true},{"id":"b","letter":"B","text":"Khi phản ứng với kim loại, sulfur thể hiện tính khử","isCorrect":false},{"id":"c","letter":"C","text":"Trong tinh thể sulfur, các phân tử S<sub>8</sub> tương tác với nhau bằng lực van der Waals yếu nên nhiệt độ nóng chảy của đơn chất sulfur thấp","isCorrect":true},{"id":"d","letter":"D","text":"Ở nhiệt độ thường, sulfur phản ứng được với một số phi kim như O<sub>2</sub>, F<sub>2</sub>","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Khi phản ứng với kim loại, sulfur thể hiện tính oxi hóa.<br/>c. Đ.<br/>d. S. Phản ứng của sulfur với oxygen xảy ra khi có nhiệt độ","explanationImages":[],"points":1},{"id":"h11_b7_p2_q6","number":6,"part":2,"type":"true_false","text":"Sulfur đơn chất vừa có tính khử vừa có tính oxi hóa","images":[],"options":[{"id":"a","letter":"A","text":"Sulfur tác dụng với fluorine ở nhiệt độ thường tạo thành SF<sub>4</sub>(g)","isCorrect":false},{"id":"b","letter":"B","text":"Sulfur tác dụng với thủy ngân (mercury) ở nhiệt độ thường tạo muối HgS(s)","isCorrect":true},{"id":"c","letter":"C","text":"Ở nhiệt độ cao, sulfur tác dụng với oxygen tạo thành SO<sub>3</sub>(g)","isCorrect":false},{"id":"d","letter":"D","text":"Ở nhiệt độ cao, sulfur tác dụng với hydrogen tạo thành H<sub>2</sub>S(g)","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Hợp chất SF<sub>6</sub>.<br/>b. Đ.<br/>c. S. Hợp chất SO<sub>2</sub>.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b7_p2_q7","number":7,"part":2,"type":"true_false","text":"Sulfur là nguyên liệu quan trọng trong nhiều ngành công nghiệp","images":[],"options":[{"id":"a","letter":"A","text":"Sulfur được dùng sản xuất diêm, thuốc nổ","isCorrect":true},{"id":"b","letter":"B","text":"Khoảng 90% lượng sulfur sản xuất được dùng để lưu hóa cao su","isCorrect":false},{"id":"c","letter":"C","text":"Sulfur còn được đốt cháy, tạo sulfur dioxide có tác dụng diệt vi khuẩn và nấm mốc","isCorrect":true},{"id":"d","letter":"D","text":"Sulfur là nguyên liệu quan trọng để sản xuất sulfurous acid (H<sub>2</sub>SO<sub>3</sub>)","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Khoảng 90% lượng sulfur sản xuất được dùng điều chế H<sub>2</sub>SO<sub>4</sub>.<br/>c. Đ.<br/>d. S. Sulfur là nguyên liệu quan trọng để sản xuất sulfuric acid","explanationImages":[],"points":1},{"id":"h11_b7_p2_q8","number":8,"part":2,"type":"true_false","text":"Cho các tính chất của sulfur dioxide (SO<sub>2</sub>):","images":[],"options":[{"id":"a","letter":"A","text":"SO<sub>2</sub>là chất khí không màu, mùi hắc và tan nhiều trong nước","isCorrect":true},{"id":"b","letter":"B","text":"SO<sub>2</sub> là khí độc, hít thở không khí chứa SO<sub>2</sub> vượt ngưỡng cho phép gây viêm đường hô hấp","isCorrect":true},{"id":"c","letter":"C","text":"SO<sub>2</sub> phản ứng với nước tạo môi trường trung tính","isCorrect":false},{"id":"d","letter":"D","text":"SO<sub>2</sub> vừa có tính oxi hoá vừa có tính khử","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. SO<sub>2</sub> phản ứng với nước tạo môi trường acid.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b7_p2_q9","number":9,"part":2,"type":"true_false","text":"Tính chất hoá học của khí sulfur dioxide","images":[],"options":[{"id":"a","letter":"A","text":"Sulfur dioxide là một oxide lưỡng tính","isCorrect":false},{"id":"b","letter":"B","text":"Sulfur dioxide chỉ có tính oxi hóa mạnh","isCorrect":false},{"id":"c","letter":"C","text":"Sulfur dioxide đóng vai trò là chất oxi hoá khi tác dụng với H<sub>2</sub>S","isCorrect":true},{"id":"d","letter":"D","text":"Sulfur dioxide đóng vai trò là chất khử khi tác dụng với NO<sub>2</sub>","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Sulfur dioxide là acidic oxide.<br/>b. S. Sulfur dioxide có cả tính oxi hóa và tính khử.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b7_p2_q10","number":10,"part":2,"type":"true_false","text":"Cho các nhận định sau về sulfur dioxide:","images":[],"options":[{"id":"a","letter":"A","text":"Khí sulfur dioxide có thể làm mất màu dung dịch nước bromine hoặc thuốc tím (KMnO<sub>4</sub>)","isCorrect":true},{"id":"b","letter":"B","text":"Phản ứng giữa sulfur dioxide với oxygen được quan tâm nhiều do liên quan đến hiện tượng hiệu ứng nhà kính","isCorrect":false},{"id":"c","letter":"C","text":"Sulfur dioxide oxi hóa được hydrogen sulfide tạo bột sulfur màu đỏ","isCorrect":false},{"id":"d","letter":"D","text":"Sulfur dioxidephản ứng được với base hoặc basic oxide tạo muối","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Hiện tượng mưa acid.<br/>c. S. Sulfur là chất rắn màu vàng.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b7_p2_q11","number":11,"part":2,"type":"true_false","text":"Phản ứng oxi hóa SO<sub>2</sub> là giai đoạn then chốt trong quá trình sản xuất H<sub>2</sub>SO<sub>4</sub>:<br/>2SO<sub>2</sub> + O<sub>2</sub> ⇌ (V<sub>2</sub>O<sub>5</sub>, t°) 2SO<sub>3</sub>   Δ<sub>r</sub>H°<sub>298</sub> = -99,2 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng trên là phản ứng tỏa nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Phản ứng này được dùng để giải thích quá trình hình thành mưa acid","isCorrect":true},{"id":"c","letter":"C","text":"Trong phản ứng trên, SO<sub>2</sub> đóng vai trò chất khử","isCorrect":true},{"id":"d","letter":"D","text":"Trong thực tế, để tăng hiệu suất của phản ứng trên cần phải tăng nhiệt độ lên đến 600<sup>o</sup>C","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Ở 600<sup>o</sup>C, cân bằng chuyển dịch mạnh theo chiều nghịch, làm giảm hiệu suất","explanationImages":[],"points":1},{"id":"h11_b7_p2_q12","number":12,"part":2,"type":"true_false","text":"Cho các ứng dụng của sulfur dioxide sau:","images":[],"options":[{"id":"a","letter":"A","text":"Chất trung gian quan trọng trong quá trình sản xuất sulfuric acid","isCorrect":true},{"id":"b","letter":"B","text":"Dùng để lưu hoá cao su và chế tạo diêm","isCorrect":true},{"id":"c","letter":"C","text":"Tẩy trắng bột giấy, khử màu trong sản xuất đường","isCorrect":true},{"id":"d","letter":"D","text":"Có khả năng chống mốc và tẩy trắng sản phẩm mây tre đan","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b7_p2_q13","number":13,"part":2,"type":"true_false","text":"Sulfur dioxide cũng là một tác nhân gây ô nhiễm không khí","images":[],"options":[{"id":"a","letter":"A","text":"Khi núi lửa hoạt động có sinh ra khí sulfur dioxide","isCorrect":true},{"id":"b","letter":"B","text":"Khí thải của các nhà máy, xí nghiệp,… có chứa nhiều sulfur dioxide","isCorrect":true},{"id":"c","letter":"C","text":"Quá trình đốt cháy nhiên liệu có chứa tạp chất sulfur, đốt quặng sulfide trong luyện kim là nguồn phát thải sulfur dioxide tự nhiên","isCorrect":false},{"id":"d","letter":"D","text":"Sulfur dioxide không phải là tác nhân chủ yếu gây mưa acid","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Nguồn phát thải sulfur dioxide nhân tạo.<br/>d. S. Sulfur dioxide là tác nhân chủ yếu gây mưa acid","explanationImages":[],"points":1},{"id":"h11_b7_p2_q14","number":14,"part":2,"type":"true_false","text":"Tác hại và một số biện pháp làm giảm thiểu lượng sulfur dioxide trong không khí","images":[],"options":[{"id":"a","letter":"A","text":"Sự phát thải sulfur dioxide vào bầu khí quyển gây mưa acid và viêm đường hô hấp ở người","isCorrect":true},{"id":"b","letter":"B","text":"Có thể xả thải trực tiếp khí thải ra ngoài môi trường đối với những khu xa dân cư","isCorrect":false},{"id":"c","letter":"C","text":"Thay thế nguồn nhiên liệu tái tạo bằng nguồn nhiên liệu hóa thạch","isCorrect":false},{"id":"d","letter":"D","text":"Chuyển hóa sulfur dioxide thành các chất ít gây ô nhiễm bằng vôi sống hoặc đá vôi nghiền","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Không nên.<br/>c. S. Sử dụng dụng các nguồn năng lượng tái tạo, năng lượng mới và sạch thay thế cho nhiên liệu hóa thạch.<br/>d. Đ","explanationImages":[],"points":1}],"part3":[{"id":"h11_b7_p3_q1","number":1,"part":3,"type":"short_answer","text":"Trong tự nhiên, sulfur có bao nhiêu đồng vị bền?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q2","number":2,"part":3,"type":"short_answer","text":"Số oxi hóa của nguyên tố sulfur trong phân tử sulfur dioxide?","images":[],"correctAnswer":"+4","explanation":"Đáp án: +4","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q3","number":3,"part":3,"type":"short_answer","text":"Phân tử sulfur trong trạng thái rắn tồn tại ở dạng vòng gồm có bao nhiêu nguyên tử sulfur?","images":[],"correctAnswer":"8","explanation":"Đáp án: 8","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q4","number":4,"part":3,"type":"short_answer","text":"Tính nguyên tử khối trung bình của sulfur dựa theo thành phần các đồng vị cho trong bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Đồng vị</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">32S</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">33S</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">34S</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">36S</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Phần trăm số nguyên tử</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">94,98</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">0,76</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">4,22</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">0,02</td></tr></table></div><br/>Kết quả làm tròn đến hàng phần mười","images":[],"correctAnswer":"32,1","explanation":"Đáp án: 32,1","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q5","number":5,"part":3,"type":"short_answer","text":"Cho các loại khoáng vật sau: blend (ZnS), chalcopyrite (CuFeS<sub>2</sub>), thạch cao (CaSO<sub>4</sub>), pyrite (FeS<sub>2</sub>). Có bao nhiêu khoáng vật có thành phần chính chứa muối sulfide?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q6","number":6,"part":3,"type":"short_answer","text":"Phổ MS của đơn chất sulfur (S<sub>n</sub>) được cho ở hình dưới đây:<br/>Dựa vào phổ MS hãy xác định giá trị của n trong đơn chất sulfur?","images":["/assets/hoa12/c5/h11_b7_image88.png"],"correctAnswer":"8","explanation":"Đáp án: 8","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q7","number":7,"part":3,"type":"short_answer","text":"Cho các chất sau: Hg, O<sub>2</sub>, Al, F<sub>2</sub>, H<sub>2</sub>. Có bao nhiêu chất tác dụng với sulfur ở nhiệt độ thường?","images":[],"correctAnswer":"2","explanation":"Đáp án: 2","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q8","number":8,"part":3,"type":"short_answer","text":"Cho các phản ứng:<br/>(1) S + O<sub>2</sub> → (t°)  SO<sub>2</sub>.<br/>(2) S + 3F<sub>2</sub> → SF<sub>6</sub>.<br/>(3) Hg + S → HgS.<br/>(4) H<sub>2</sub> +  18 S<sub>8</sub> → H<sub>2</sub>S.<br/>(5) S + 6HNO<sub>3</sub> → H<sub>2</sub>SO<sub>4</sub>+ 6NO<sub>2</sub> + 2H<sub>2</sub>O.<br/>Có bao nhiêu phản ứng mà trong đó sulfur đơn chất đóng vai trò chất khử?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q9","number":9,"part":3,"type":"short_answer","text":"Cho các chất khí sau: H<sub>2</sub>S, NO, NO<sub>2</sub>, SO<sub>2</sub> và N<sub>2</sub>. Có bao nhiêu chất khí gây ô nhiễm môi trường khi phát thải vào không khí?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q10","number":10,"part":3,"type":"short_answer","text":"Sự phụ thuộc của độ tan khí sulfur dioxide trong nước vào nhiệt độ được mô tả ở đồ thị dưới đây:<br/>Biết rằng độ tan của sulfur dioxide ở 20 <sup>o</sup>C là 112g SO<sub>2</sub>/1 kg nước. Nồng độ phần trăm của dung dịch sulfur dioxide bão hòa ở 20 <sup>o</sup>C là bao nhiêu phần trăm? (Kết quả làm tròn đến hàng phần mười)","images":["/assets/hoa12/c5/h11_b7_image91.png"],"correctAnswer":"10,1","explanation":"Đáp án: 10,1.<br/>C% = [112 / (112 + 1000)] &times; 100% = 10,07% &approx; 10,1%","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q11","number":11,"part":3,"type":"short_answer","text":"Xét phản ứng giữa NO<sub>2</sub> và SO<sub>2</sub> trong không khí ô nhiễm sulfur dioxide:<br/>NO<sub>2</sub><sub>(g)</sub> + SO<sub>2</sub><sub>(g)</sub>   NO<sub>(g)</sub> + SO<sub>3</sub><sub>(g)</sub><br/>Tính biến thiên enthalpy của phản ứng và cho biết phản ứng trên là tỏa nhiệt hay thu nhiệt. (Biết nhiệt tạo thành của NO<sub>2</sub><sub>(g)</sub>, SO<sub>2</sub><sub>(g)</sub>, NO<sub>(g)</sub> và SO<sub>3</sub><sub>(g)</sub> lần lượt là 33,2 kJ/mol, -296,8 kJ/mol, 91,3 kJ/mol và -395,7 kJ/mol). (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"-41","explanation":"Đáp án: -41.<br/>298orHD = 91,3.1 - 395,7.1 - 33,2.1 - (-296,8.1) = -40,8 (kJ)","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q12","number":12,"part":3,"type":"short_answer","text":"Khí sulfur dioxide có khả năng tẩy trắng và sát trùng nên được dùng làm chất chống mốc cho các sản phẩm mây tre đan tại nhiều làng nghề. Trong 1 ngày, một làng nghề đốt cháy 12,8 kg sulfur để tạo thành V m<sup>3</sup> khí sulfur dioxide với hiệu suất là 80%. Vậy trong 30 ngày lượng thể tích khí sulfur dioxide tạo thành là bao nhiêu m<sup>3</sup>? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"238","explanation":"Đáp án: 238.<br/>S + O<sub>2</sub> → (t°)  SO<sub>2</sub><br/>0,4 kmol<br/>23SOV0,4.24,79.80%.30238m==","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q13","number":13,"part":3,"type":"short_answer","text":"Sulfur dioxide là một trong các tác nhân gây mưa acid, phát thải chủ yếu từ các quá trình đốt cháy nhiên liệu như than đá, xăng, dầu,…<br/>Một nhà máy nhiệt điện than sử dụng hết 1200 tấn than đá/ngày, có thành phần chứa 1% sulfur về khối lượng để làm nhiên liệu. Biết chỉ có 80% sulfur chuyển hóa thành sulfur dioxide. Thể tích khí SO<sub>2</sub> (đkc) tối đa tạo ra khuếch tán vào khí quyển là bao nhiêu m<sup>3</sup>?","images":[],"correctAnswer":"7437","explanation":"Đáp án: 7437.<br/>ot22SOSO+ → <br/>Khối lượng sulfur là: 1200.1%.1000 = 12000 kg<br/>2SSO12000nn.80%300(kmol)32===  23SOV300.24,797437(m)Þ==","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q14","number":14,"part":3,"type":"short_answer","text":"Một phương pháp được đề xuất để loại bỏ SO<sub>2</sub> khỏi khí thải của nhà máy điện bằng cách dẫn khí thải qua dung dịch H<sub>2</sub>S. Cần tối đa bao nhiêu m<sup>3</sup> H<sub>2</sub>S (ở đkc) để loại bỏ SO<sub>2</sub> sinh ra khi đốt cháy 2,0 tấn than chứa sulfur chiếm 3% theo khối lượng? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"93","explanation":"Đáp án: 93.<br/>2H<sub>2</sub>S + SO<sub>2</sub>  3S + 2H<sub>2</sub>O<br/>2SHS2000.3%n1,875kmoln1,875.23,75kmol32==Þ==<br/>V = 3,75.24,79 = 92,9625 m<sup>3</sup>","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q15","number":15,"part":3,"type":"short_answer","text":"Sulfur dioxide có thể làm mất màu da cam của dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> theo phương trình sau:<br/>SO<sub>2</sub> + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + H<sub>2</sub>SO<sub>4</sub>K<sub>2</sub>SO<sub>4</sub> + Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + H<sub>2</sub>O<br/>Tính thể tích (mL) của dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,1M phản ứng vừa đủ với 0,7437 lít khí SO<sub>2</sub> ở đkc?","images":[],"correctAnswer":"100","explanation":"Đáp án: 100.<br/>3SO<sub>2</sub> + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + H<sub>2</sub>SO<sub>4</sub>K<sub>2</sub>SO<sub>4</sub> + Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + H<sub>2</sub>O<br/>0,030,01<br/>V = 0,01/0,1 = 0,1 L = 100 mL","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q16","number":16,"part":3,"type":"short_answer","text":"Thổi SO<sub>2</sub> vào V mL dung dịch Br<sub>2</sub> 0,025M đến khi vừa mất màu hoàn toàn, thu được dung dịch X. Để trung hòa X cần 250 mL dung dịch NaOH 0,2M. Giá trị của V bằng bao nhiêu?c","images":[],"correctAnswer":"500","explanation":"Đáp án: 500.<br/>Ta có: 4x = 0,05  x = 0,0125<br/>V = 0,0125/0,025 = 0,5 L = 500 mL","explanationImages":["/assets/hoa12/c5/h11_b7_image98.png"],"points":0.25},{"id":"h11_b7_p3_q17","number":17,"part":3,"type":"short_answer","text":"Đun nóng m gam hỗn hợp bột Fe và S một thời gian thu được hỗn hợp X. Hòa tan X trong dung dịch HCl dư thu được 2,479 L khí Y ở đkc và 1,6 gam chất rắn không tan. Cho Y qua dung dịch CuCl<sub>2</sub> dư thu được 4,8 gam kết tủa. Giá trị của m là bao nhiêu?","images":[],"correctAnswer":"8,8","explanation":"Đáp án: 8,8.<br/>Fe + S → FeS<br/>FeS + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>S<br/>Vì có 1,6 gam rắn không tan đó là của S<br/>H<sub>2</sub>S + CuCl<sub>2</sub> → CuS + 2HCl<br/>0,05 &rarr; 0,05 mol<br/>n<sub>FeS</sub> = n<sub>Fe</sub><sub>phản</sub><sub>ứng</sub> =  2HSn  = n<sub>S</sub> <sub>phản ứng</sub> = 0,05 mol<br/>mà n<sub>khí Y</sub> = 0,1  Có khí H<sub>2</sub> thoát ra: 0,1 – 0,05 = 0,05 mol  Fe cũng còn dư sau phản ứng<br/>n<sub>Fe dư</sub> =  2Hn = 0,05 mol<br/>Vậy m = (0,05 + 0,05).56 + 0,05.32 + 1,6 = 8,8g","explanationImages":[],"points":0.25},{"id":"h11_b7_p3_q18","number":18,"part":3,"type":"short_answer","text":"Hỗn hợp X gồm SO<sub>2</sub> và O<sub>2</sub> có tỉ khối so với H<sub>2</sub> bằng 28. Cho 4,958 lít X (đkc) đi qua bình đựng V<sub>2</sub>O<sub>5</sub> nung nóng. Dẫn hỗn hợp khí thu được qua dung dịch Ba(OH)<sub>2</sub> dư, thu được 33,51 gam kết tủa. Hiệu suất phản ứng oxi hóa SO<sub>2</sub> thành SO<sub>3</sub> là bao nhiêu %?","images":[],"correctAnswer":"60","explanation":"Đáp án: 60.<br/>Sử dụng phương pháp đường chéo  X chứa SO<sub>2</sub>: 0,15 mol; O<sub>2</sub>: 0,05 mol<br/>Hỗn hợp sau phản ứng gồm SO<sub>2</sub>: (0,15 – 2x) mol; O<sub>2</sub>: (0,05 – x) mol; SO<sub>3</sub>: 2x (mol)<br/>Theo (2) và (3) kết tủa gồm BaSO<sub>3</sub>: (0,15 – 2x) mol và BaSO<sub>4</sub>: 2x mol.<br/>233.2x + 217.(0,15-2x) = 33,51  x = 0,03 mol<br/>Ta có:  2O2nnSO21>  nên hiệu suất phản ứng tính theo O<sub>2</sub>.<br/>Vậy  xH.100%60%0,05== .<br/>","explanationImages":["/assets/hoa12/c5/h11_b7_image101.png","/assets/hoa12/c5/h11_b7_image102.png"],"points":0.25}]}},"bai8":{"id":"bai8","lessonNumber":8,"title":"Bài 8. Sulfuric acid và muối sulfate","shortTitle":"Sulfuric acid và muối sulfate","badge":"Bài 8","icon":"🧪","description":"Tính chất của dung dịch H2SO4 loãng và H2SO4 đặc (tính oxi hóa mạnh, tính háo nước), nhận biết ion sulfate bằng Ba2+.","theory":"I. SULFURIC ACID1. Cấu tạo phân tử:- Phân tử H<sub>2</sub>SO<sub>4</sub> có công thức cấu tạo như hình bên:- Với cấu tạo gồm các nguyên tử hydrogen linh động và các nguyên tử oxygen có độ âm điện lớn, giữa các phân tử sulfuric acid hình thành nhiều liên kết hydrogen:2. Tinh chất vật lý:- Ở điều kiện thường, sulfuric acid là chất lỏng sánh như dầu, không màu, không bay hơi, có tính hút ẩm mạnh.- Dung dịch sulfuric acid 98% có khối lượng riêng 1,84 g/cm<sup>3</sup>, nặng gần gấp hai lần nước.- Sulfuric acidtan vô hạn trong nước và tỏa rất nhiều nhiệt nên khi pha loãng H<sub>2</sub>SO<sub>4</sub> đặc cần rót từ từ acid vào nước và khuấy nhẹ tránh làm ngược lại gây nguy hiểm.<div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Ví dụ 1.<br/>a) Hãy viết công thức Lewis của phân tử H<sub>2</sub>SO<sub>4</sub>.<br/>b) Dựa vào cấu tạo, cho biết phân tử sulfuric acid có khả năng cho bao nhiêu proton khi đóng vai trò là acid.<br/>c) Dựa vào tương tác giữa các phân tử, hãy dự đoán sulfuric acid là chất lỏng dễ bay hơi hay khó bay hơi.<br/>Đáp án:<br/>a)<br/>b)<br/>Như vậy, phân tử sulfuric acid có khả năng cho 2 proton khi đóng vai trò là acid.<br/>c) Với cấu tạo gồm các nguyên tử hydrogen linh động và các nguyên tử oxygen có độ âm điện lớn, giữa các phân tử sulfuric acid hình thành nhiều liên kết hydrogen:<br/>Dự đoán sulfuric acid là chất lỏng khó bay hơi.</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Ví dụ 2. Để pha loãng dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, người ta dùng cách nào sau đây?<br/>A. Rót nhanh dung dịch H<sub>2</sub>SO<sub>4</sub> đặc vào nước.<br/>B. Rót từ từ nước vào dung dịch H<sub>2</sub>SO<sub>4</sub> đặc.<br/>C. Rót từ từ dung dịch H<sub>2</sub>SO<sub>4</sub> đặc vào nước, khuấy đều.<br/>D. Rót nhanh nước vào H<sub>2</sub>SO<sub>4</sub> đặc, đun nóng.</td></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Ví dụ 3. Cho các phát biểu sau về sulfuric acid:<br/>a. Sulfuric acid là chất lỏng, sánh như dầu, không màu và không bay hơi.<br/>b. Sulfuric acid tan vô hạn trong nước và tỏa rất nhiều nhiệt.<br/>c. Sulfuric acid đặc không có tính hút ẩm.<br/>d. Sulfuric acid đặc có tính háo nước, da thịt tiếp xúc với nó sẽ gây bỏng nặng.<br/>Trong các ý a), b), c), d) chọn đúng hoặc sai<br/>Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Sulfuric acid đặc có tính hút ẩm.<br/>d. Đ.</td></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">Ví dụ 4. Dung dịch sulfuric acid đặc được dùng làm khô khí ẩm nào trong số các khí sau: CO, H<sub>2</sub>, CO2, SO2, O<sub>2</sub> và NH3? Giải thích?<br/>Đáp án:<br/>Khí được sulfuric acid đặc làm khô phải không tác dụng được với sulfuric acid đặc.<br/>⇒ Các khí có thể được làm khô bằng sulfuric acid đặc là: H<sub>2</sub>, CO2, SO2, O<sub>2</sub>.</td></tr></table></div>3. Quy tắc an toàn:a) Bảo quản:","mathForms":[{"id":"bai8_mf1","title":"Dạng 1: Các phương pháp giải nhanh trọng tâm Bài 8. Sulfuric acid và muối sulfate","method":"Hệ thống hóa các công thức trọng tâm, định luật và phương pháp bảo toàn thường dùng trong Bài 8. Sulfuric acid và muối sulfate","examples":[{"number":1,"text":"Ví dụ minh họa dạng toán trọng tâm Bài 8. Sulfuric acid và muối sulfate: Áp dụng công thức và định luật để giải bài toán định lượng","solution":"Áp dụng phương pháp phân tích đề bài, lập phương trình tương ứng và thế số để tính đáp án chính xác"}]}],"practice":{"part1":[{"id":"h11_b8_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Công thức hóa học của sulfuric acid là","images":[],"options":[{"id":"a","letter":"A","text":"SO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>S","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":true},{"id":"d","letter":"D","text":"H<sub>2</sub>SO<sub>3</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Số oxi hóa của S trong phân tử H<sub>2</sub>SO<sub>4</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"+2","isCorrect":false},{"id":"b","letter":"B","text":"+4","isCorrect":false},{"id":"c","letter":"C","text":"+6","isCorrect":true},{"id":"d","letter":"D","text":"-2","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Biểu diễn công thức cấu tạo của H<sub>2</sub>SO<sub>4</sub> nào sau đây tuân theo quy tắc octet?","images":[],"options":[{"id":"a","letter":"A","text":"Công thức A","image":"/assets/hoa12/c5/h11_b8_image1.png","isCorrect":true},{"id":"b","letter":"B","text":"Công thức B","image":"/assets/hoa12/c5/h11_b8_image2.png","isCorrect":false},{"id":"c","letter":"C","text":"Công thức C","image":"/assets/hoa12/c5/h11_b8_image3.png","isCorrect":false},{"id":"d","letter":"D","text":"Công thức D","image":"/assets/hoa12/c5/h11_b8_image4.png","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Ở thể lỏng, chất nào sau đây có dạng sách như dầu do tồn tại liên kết hydrogen rất mạnh giữa các phân tử?","images":[],"options":[{"id":"a","letter":"A","text":"HF","isCorrect":false},{"id":"b","letter":"B","text":"24HSO","isCorrect":true},{"id":"c","letter":"C","text":"H<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"CH<sub>3</sub>COOH","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Sulfuric acid đựng trong chai thủy tinh thường được bán trên thị trường có nồng độ là","images":[],"options":[{"id":"a","letter":"A","text":"98%","isCorrect":true},{"id":"b","letter":"B","text":"36%","isCorrect":false},{"id":"c","letter":"C","text":"63%","isCorrect":false},{"id":"d","letter":"D","text":"8%","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Khi thêm sulfuric acid đậm đặc vào nước, cốc nước nóng lên là do","images":[],"options":[{"id":"a","letter":"A","text":"quá trình toả nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"quá trình là thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"quá trình oxi hoá nước","isCorrect":false},{"id":"d","letter":"D","text":"quá trình khử nước","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Dung dịch acid nào sau đây có khả năng gây bỏng nếu rơi vào da ?","images":[],"options":[{"id":"a","letter":"A","text":"HCl 36%","isCorrect":false},{"id":"b","letter":"B","text":"3HNO  63%","isCorrect":false},{"id":"c","letter":"C","text":"24HSO  98%","isCorrect":true},{"id":"d","letter":"D","text":"34HPO 85%","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Chất nào sau đây không bay hơi ở điều kiện thường do nhiệt độ sôi rất cao (337 <sup>o</sup>C)?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"3HNO","isCorrect":false},{"id":"c","letter":"C","text":"NH<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"24HSO","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Quá trình pha loãng dung dịch đậm đặc của acid nào sau đây tỏa rất nhiều nhiệt nên không được tự ý pha loãng ?","images":[],"options":[{"id":"a","letter":"A","text":"HCl","isCorrect":false},{"id":"b","letter":"B","text":"24HSO","isCorrect":true},{"id":"c","letter":"C","text":"CH<sub>3</sub>COOH","isCorrect":false},{"id":"d","letter":"D","text":"3HNO","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây là sai?","images":[],"options":[{"id":"a","letter":"A","text":"Sulfuric acid là chất lỏng, sánh như dầu, không màu, không bay hơi","isCorrect":false},{"id":"b","letter":"B","text":"Sulfuric acid tan vô hạn trong nước, và tỏa rất nhiều nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"Sulfuric acid đặc không có tính hút ẩm","isCorrect":true},{"id":"d","letter":"D","text":"Sulfuric acid đặc có tính háo nước, da thịt tiếp xúc với nó sẽ gây bỏng nặng","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Cách pha loãng dung dịch sulfuric acid đặc nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Rót nhanh acid vào nước và khuấy đều","isCorrect":false},{"id":"b","letter":"B","text":"Rót nhanh nước vào acid và khuấy đều","isCorrect":false},{"id":"c","letter":"C","text":"Rót từ từ nước vào acid và khuấy đều","isCorrect":false},{"id":"d","letter":"D","text":"Rót từ từ acid vào nước và khuấy đều","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Cách bảo quản sulfuric acid đặc nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Đựng trong thùng làm bằng kim loại","isCorrect":false},{"id":"b","letter":"B","text":"Để chung với các lọ chứa các hóa chất dễ cháy nổ","isCorrect":false},{"id":"c","letter":"C","text":"Bảo quản trong chai, lọ có nút đậy chặt đặt ở vị trí chắc chắn","isCorrect":true},{"id":"d","letter":"D","text":"Lưu trữ trong các bình bằng nhựa và để hở nắp bình","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Cho các lưu ý khi sử dụng dung dịch sulfuric acid đặc sau:<br/>(a) Sử dụng găng tay, đeo kính bảo hộ, mặc áo thí nghiệm.<br/>(b) Cầm dụng cụ chắc chắn, thao tác cẩn thận.<br/>(c) Tì, đè chai đựng acid lên miệng cốc, ống đong khi rót acid.<br/>(d) Đổ trực tiếp nước vào dung dịch acid đặc.<br/>(e) Sử dụng lượng acid vừa phải, lượng acid còn thừa phải đổ xuống cống thoát nước.<br/>Những lưu ý đảm bảo an toàn thí nghiệm là","images":[],"options":[{"id":"a","letter":"A","text":"(a), (b), (e)","isCorrect":false},{"id":"b","letter":"B","text":"(a), (b), (c)","isCorrect":false},{"id":"c","letter":"C","text":"(a), (b), (d), (e)","isCorrect":false},{"id":"d","letter":"D","text":"(a), (b)","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Các hình ảnh dưới đây mô tả cách pha loãng H<sub>2</sub>SO<sub>4</sub> đặc:<br/>Hình ảnh mô tả đúng cách pha loãng acid đảm bảo an toàn là","images":["/assets/hoa12/c5/h11_b8_image86.png"],"options":[{"id":"a","letter":"A","text":"Hình 1","isCorrect":false},{"id":"b","letter":"B","text":"Hình 2","isCorrect":true},{"id":"c","letter":"C","text":"Hình 3","isCorrect":false},{"id":"d","letter":"D","text":"Hình 4","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Bước sơ cứu đầu tiên cần làm ngay khi một người bị bỏng sulfuric acid là","images":[],"options":[{"id":"a","letter":"A","text":"Rửa với nước lạnh nhiều lần","isCorrect":true},{"id":"b","letter":"B","text":"Trung hòa acid bằng NaHCO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Băng bó tạm thời vết bỏng","isCorrect":false},{"id":"d","letter":"D","text":"Đưa đến cơ sở y tế gần nhất","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Khi bị bỏng sulfuric acid đặc nên rửa vết bỏng bằng dung dịch nào sau đây là tốt nhất?","images":[],"options":[{"id":"a","letter":"A","text":"Ca(OH)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NaCl","isCorrect":false},{"id":"c","letter":"C","text":"NaHCO<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"NaOH","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Sulfuric acid đặc không được dùng để làm khô khí nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>3</sub>","isCorrect":true},{"id":"b","letter":"B","text":"O<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"CO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Cl<sub>2</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Nhỏ vài giọt dung dịch sulfuric acid loãng vào mảnh giấy quỳ tím thấy chuyển sang màu","images":[],"options":[{"id":"a","letter":"A","text":"tím","isCorrect":false},{"id":"b","letter":"B","text":"đỏ","isCorrect":true},{"id":"c","letter":"C","text":"xanh","isCorrect":false},{"id":"d","letter":"D","text":"hồng","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q19","number":19,"part":1,"type":"multiple_choice","text":"Kim loại nào sau đây không tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng?","images":[],"options":[{"id":"a","letter":"A","text":"Al","isCorrect":false},{"id":"b","letter":"B","text":"Zn","isCorrect":false},{"id":"c","letter":"C","text":"Na","isCorrect":false},{"id":"d","letter":"D","text":"Cu","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q20","number":20,"part":1,"type":"multiple_choice","text":"Sản phẩm tạo thành khi cho Fe tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng là","images":[],"options":[{"id":"a","letter":"A","text":"FeSO<sub>4</sub> và H<sub>2</sub>","isCorrect":true},{"id":"b","letter":"B","text":"FeSO<sub>4</sub>, SO<sub>2</sub> và H<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> và H<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>, SO<sub>2</sub> và H<sub>2</sub>O","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q21","number":21,"part":1,"type":"multiple_choice","text":"Dãy gồm các chất đều phản ứng được với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng?","images":[],"options":[{"id":"a","letter":"A","text":"Na<sub>2</sub>SO<sub>3</sub>, Cu, Ba(OH)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Al, NaHSO<sub>3</sub>, Al<sub>2</sub>O<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"Na<sub>2</sub>CO<sub>3</sub>, CO<sub>2</sub>, Al","isCorrect":false},{"id":"d","letter":"D","text":"BaCl<sub>2</sub>, Ag, Al<sub>2</sub>O<sub>3</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q22","number":22,"part":1,"type":"multiple_choice","text":"Trong công nghiệp, hydrogen fluoride được điều chế từ quặng fluorite theo phản ứng:<br/>o250C2244CaF  HSO CaSO  2HF+ → +<br/>Vai trò của sulfuric acid trong phản ứng là","images":[],"options":[{"id":"a","letter":"A","text":"base","isCorrect":false},{"id":"b","letter":"B","text":"chất oxi hóa","isCorrect":false},{"id":"c","letter":"C","text":"acid","isCorrect":true},{"id":"d","letter":"D","text":"chất khử","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q23","number":23,"part":1,"type":"multiple_choice","text":"Dung dịch sulfuric acid đặc khác dung dịch sulfuric acid loãng ở tính chất hóa học nào?","images":[],"options":[{"id":"a","letter":"A","text":"Tính base mạnh","isCorrect":false},{"id":"b","letter":"B","text":"Tính oxi hóa mạnh","isCorrect":true},{"id":"c","letter":"C","text":"Tính acid mạnh","isCorrect":false},{"id":"d","letter":"D","text":"Tính khử mạnh","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q24","number":24,"part":1,"type":"multiple_choice","text":"Tính chất nào sau đây không phải tính chất của dung dịch sulfuric acid đặc?","images":[],"options":[{"id":"a","letter":"A","text":"Tính háo nước","isCorrect":false},{"id":"b","letter":"B","text":"Tính oxi hóa","isCorrect":false},{"id":"c","letter":"C","text":"Tính acid","isCorrect":false},{"id":"d","letter":"D","text":"Tính khử","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q25","number":25,"part":1,"type":"multiple_choice","text":"Cho các acid ở dạng đậm đặc sau: HCl, HNO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>SO<sub>4</sub>. Số acid vừa có tính acid mạnh, vừa có tính oxi hóa mạnh là","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":false},{"id":"b","letter":"B","text":"4","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":false},{"id":"d","letter":"D","text":"2","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q26","number":26,"part":1,"type":"multiple_choice","text":"Trong phản ứng: Cu + 2H<sub>2</sub>SO<sub>4</sub> <sub>(đặc, nóng)</sub> → CuSO<sub>4</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O, acid H<sub>2</sub>SO<sub>4</sub> thể hiện tính","images":[],"options":[{"id":"a","letter":"A","text":"oxi hóa mạnh","isCorrect":true},{"id":"b","letter":"B","text":"khử mạnh","isCorrect":false},{"id":"c","letter":"C","text":"acid mạnh","isCorrect":false},{"id":"d","letter":"D","text":"háo nước","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q27","number":27,"part":1,"type":"multiple_choice","text":"Tiến hành thí nghiệm: Cho kim loại Cu vào ống nghiệm chứa dung dịch H<sub>2</sub>SO<sub>4</sub> (đặc), đun nhẹ, thấy kim loại Cu tan, có khí thoát ra và dung dịch thu được","images":[],"options":[{"id":"a","letter":"A","text":"có màu xanh","isCorrect":true},{"id":"b","letter":"B","text":"có màu vàng","isCorrect":false},{"id":"c","letter":"C","text":"không màu","isCorrect":false},{"id":"d","letter":"D","text":"có màu da cam","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q28","number":28,"part":1,"type":"multiple_choice","text":"Cho Fe tác dụng với H<sub>2</sub>SO<sub>4</sub> đặc, nóng thấy có khí X mùi hắc thoát ra. Khí X là","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>S","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>2</sub>","isCorrect":true},{"id":"c","letter":"C","text":"S","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>2</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q29","number":29,"part":1,"type":"multiple_choice","text":"Dãy kim loại nào trong các dãy sau đây gồm các kim loại không tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, nguội?","images":[],"options":[{"id":"a","letter":"A","text":"Al, Fe, Au, Pt","isCorrect":true},{"id":"b","letter":"B","text":"Zn, Pt, Au, Mg","isCorrect":false},{"id":"c","letter":"C","text":"Al, Fe, Zn, Mg","isCorrect":false},{"id":"d","letter":"D","text":"Al, Fe, Au, Mg","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q30","number":30,"part":1,"type":"multiple_choice","text":"Dãy chất nào sau đây phản ứng được với dung dịch sulfuric acid đặc nguội?","images":[],"options":[{"id":"a","letter":"A","text":"Au, C","isCorrect":false},{"id":"b","letter":"B","text":"Mg, Fe","isCorrect":false},{"id":"c","letter":"C","text":"Zn, NaOH","isCorrect":true},{"id":"d","letter":"D","text":"Al, S","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q31","number":31,"part":1,"type":"multiple_choice","text":"Kim loại tan trong sulfuric acid đặc, nguội nhưng không tan trong sulfuric acid loãng là","images":[],"options":[{"id":"a","letter":"A","text":"Ag","isCorrect":true},{"id":"b","letter":"B","text":"Al","isCorrect":false},{"id":"c","letter":"C","text":"Fe","isCorrect":false},{"id":"d","letter":"D","text":"Cr","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q32","number":32,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"2Fe + 3H<sub>2</sub>SO<sub>4</sub>(loãng)  Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3H<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Cu + H<sub>2</sub>SO<sub>4</sub> (đặc)  CuSO<sub>4</sub> + H<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"2Al + 3H<sub>2</sub>SO<sub>4</sub>(loãng)  Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3H<sub>2</sub>","isCorrect":true},{"id":"d","letter":"D","text":"Fe + H<sub>2</sub>SO<sub>4</sub>(đặc)  FeSO<sub>4</sub> + H<sub>2</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q33","number":33,"part":1,"type":"multiple_choice","text":"Trong điều kiện thích hợp, phản ứng nào sau đây xảy ra với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng?","images":[],"options":[{"id":"a","letter":"A","text":"2H<sub>2</sub>SO<sub>4</sub> + C → 2SO<sub>2</sub> + CO<sub>2</sub> + 2H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>SO<sub>4</sub> + Cu(OH)<sub>2</sub> → CuSO<sub>4</sub> + 2H<sub>2</sub>O","isCorrect":true},{"id":"c","letter":"C","text":"4H<sub>2</sub>SO<sub>4</sub> + 2FeO → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + SO<sub>2</sub> + 4H<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"2H<sub>2</sub>SO<sub>4</sub> + Cu → CuSO<sub>4</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q34","number":34,"part":1,"type":"multiple_choice","text":"Người ta thường dùng các bình bằng thép để đựng và chuyên chở dung dịch H<sub>2</sub>SO<sub>4</sub> đặc vì","images":[],"options":[{"id":"a","letter":"A","text":"dung dịch H<sub>2</sub>SO<sub>4</sub> đặc bị thụ động hóa trong thép","isCorrect":false},{"id":"b","letter":"B","text":"dung dịch H<sub>2</sub>SO<sub>4</sub> đặc không phản ứng với sắt ở nhiệt độ thường","isCorrect":true},{"id":"c","letter":"C","text":"dung dịch H<sub>2</sub>SO<sub>4</sub> đặc không phản ứng với kim loại ở nhiệt độ thường","isCorrect":false},{"id":"d","letter":"D","text":"thép có chứa các chất phụ trợ không phản ứng với dung dịch H<sub>2</sub>SO<sub>4</sub> đặc","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q35","number":35,"part":1,"type":"multiple_choice","text":"Cho chất rắn nào sau đây vào dung dịch H<sub>2</sub>SO<sub>4</sub> đặc thì xảy ra phản ứng oxi hoá khử?","images":[],"options":[{"id":"a","letter":"A","text":"KBr","isCorrect":true},{"id":"b","letter":"B","text":"NaCl","isCorrect":false},{"id":"c","letter":"C","text":"CaF<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"CaCO<sub>3</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q36","number":36,"part":1,"type":"multiple_choice","text":"Nhỏ 1 giọt dung dịch acid đặc nào sau đây lên tờ giấy trắng thì từ giấy bị hóa đen ở chỗ tiếp xúc với acid?","images":[],"options":[{"id":"a","letter":"A","text":"HBr","isCorrect":false},{"id":"b","letter":"B","text":"HCl","isCorrect":false},{"id":"c","letter":"C","text":"HNO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q37","number":37,"part":1,"type":"multiple_choice","text":"Sulfuric acid đặc thể hiện tính chất nào khi lấy nước từ hợp chất carbohydrate và khiến chúng hóa đen?","images":[],"options":[{"id":"a","letter":"A","text":"Tính acid","isCorrect":false},{"id":"b","letter":"B","text":"Tính base","isCorrect":false},{"id":"c","letter":"C","text":"Tính háo nước","isCorrect":true},{"id":"d","letter":"D","text":"Tính dễ tan","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q38","number":38,"part":1,"type":"multiple_choice","text":"Khi lần lượt tác dụng với mỗi chất dưới đây, trường hợp nào sulfuric acid đặc và sulfuric acid loãng hình thành sản phẩm giống nhau?","images":[],"options":[{"id":"a","letter":"A","text":"Mg","isCorrect":false},{"id":"b","letter":"B","text":"Fe(OH)<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Fe<sub>3</sub>O<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"CaCO<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q39","number":39,"part":1,"type":"multiple_choice","text":"Nhỏ dung dịch H<sub>2</sub>SO<sub>4</sub> 98% vào cốc đựng đường saccarose khiến đường hóa đen gọi là hiện tượng gì?","images":[],"options":[{"id":"a","letter":"A","text":"Hiện tượng bốc hơi","isCorrect":false},{"id":"b","letter":"B","text":"Hiện tượng than hóa","isCorrect":true},{"id":"c","letter":"C","text":"Hiện tượng đông tụ","isCorrect":false},{"id":"d","letter":"D","text":"Hiện tượng vón cục","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q40","number":40,"part":1,"type":"multiple_choice","text":"Cho phương trình: H<sub>2</sub>SO<sub>4 đặc, nóng</sub> + Fe<sub>x</sub>O<sub>y</sub>  Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + SO<sub>2</sub> + H<sub>2</sub>O. Fe<sub>x</sub>O<sub>y</sub> không thể là chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"FeO","isCorrect":false},{"id":"b","letter":"B","text":"Fe<sub>3</sub>O<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"FeO hoặc Fe<sub>3</sub>O<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Fe<sub>2</sub>O<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q41","number":41,"part":1,"type":"multiple_choice","text":"Cho phản ứng: aAl   + bH<sub>2</sub>SO<sub>4</sub>(đặc) → 0t   cAl<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>+ dSO<sub>2</sub>+  eH<sub>2</sub>O<br/>Với a, b, c, d, e là các số nguyên tối giản nhất. Tổng hệ số (a + b) là","images":[],"options":[{"id":"a","letter":"A","text":"11","isCorrect":false},{"id":"b","letter":"B","text":"10","isCorrect":false},{"id":"c","letter":"C","text":"8","isCorrect":true},{"id":"d","letter":"D","text":"9","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q42","number":42,"part":1,"type":"multiple_choice","text":"Các khí sinh ra trong thí nghiệm phản ứng của saccharose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) với dung dịch H<sub>2</sub>SO<sub>4</sub> đặc là","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>S và CO<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>S và SO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>3</sub> và CO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"SO<sub>2</sub> và CO<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q43","number":43,"part":1,"type":"multiple_choice","text":"Phương trình hóa học nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>SO<sub>4</sub> (loãng) + Fe → FeSO<sub>4</sub> + H<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"6H<sub>2</sub>SO<sub>4</sub> (đặc, nóng) + 2Fe → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3SO<sub>2</sub> + 6H<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>2</sub>SO<sub>4</sub> (đặc, nóng) + FeO → FeSO<sub>4</sub> + H<sub>2</sub>O","isCorrect":true},{"id":"d","letter":"D","text":"3H<sub>2</sub>SO<sub>4</sub> + Fe<sub>2</sub>O<sub>3</sub> → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3H<sub>2</sub>O","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q44","number":44,"part":1,"type":"multiple_choice","text":"Trong điều kiện thích hợp, xảy ra các phản ứng sau:<br/>(a) 2H<sub>2</sub>SO<sub>4</sub> + C → 2SO<sub>2</sub> + CO<sub>2</sub> + 2H<sub>2</sub>O.<br/>(b) H<sub>2</sub>SO<sub>4</sub> + Fe(OH)<sub>2</sub> → FeSO<sub>4</sub> + 2H<sub>2</sub>O.<br/>(c) 4H<sub>2</sub>SO<sub>4</sub> + 2FeO → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + SO<sub>2</sub> + 4H<sub>2</sub>O.<br/>(d) 6H<sub>2</sub>SO<sub>4</sub> + 2Fe → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3SO<sub>2</sub> + 6H<sub>2</sub>O.<br/>Trong các phản ứng trên, phản ứng xảy ra với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng là","images":[],"options":[{"id":"a","letter":"A","text":"(d)","isCorrect":false},{"id":"b","letter":"B","text":"(a)","isCorrect":false},{"id":"c","letter":"C","text":"(c)","isCorrect":false},{"id":"d","letter":"D","text":"(b)","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q45","number":45,"part":1,"type":"multiple_choice","text":"Dãy gồm tất cả các chất đều tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng là","images":[],"options":[{"id":"a","letter":"A","text":"Fe<sub>3</sub>O<sub>4</sub>, BaCl<sub>2</sub>, NaCl, Al, Cu(OH)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Fe(OH)<sub>2</sub>, Na<sub>2</sub>CO<sub>3</sub>, Fe, CuO, NH<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"CaCO<sub>3</sub>, Cu, Al(OH)<sub>3</sub>, MgO, Zn","isCorrect":false},{"id":"d","letter":"D","text":"Zn(OH)<sub>2</sub>, CaCO<sub>3</sub>, CuS, Al, Fe<sub>2</sub>O<sub>3</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q46","number":46,"part":1,"type":"multiple_choice","text":"Cho dung dịch sulfuric acid đặc tác dụng với từng chất rắn sau: NaCl, NaBr, NaI, NaHCO<sub>3</sub> ở nhiệt độ thường. Số phản ứng trong đó sulfuric acid đóng vai trò chất oxi hóa là","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":true},{"id":"b","letter":"B","text":"4","isCorrect":false},{"id":"c","letter":"C","text":"1","isCorrect":false},{"id":"d","letter":"D","text":"3","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q47","number":47,"part":1,"type":"multiple_choice","text":"Cho dãy các chất: FeO, Fe<sub>3</sub>O<sub>4</sub>, Al<sub>2</sub>O<sub>3</sub>, KI, HCl, H<sub>2</sub>S và C. Số chất trong dãy bị oxi hoá bởi dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, nóng là","images":[],"options":[{"id":"a","letter":"A","text":"6","isCorrect":false},{"id":"b","letter":"B","text":"3","isCorrect":false},{"id":"c","letter":"C","text":"4","isCorrect":false},{"id":"d","letter":"D","text":"5","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q48","number":48,"part":1,"type":"multiple_choice","text":"Khi làm thí nghiệm với H<sub>2</sub>SO<sub>4</sub> đặc, nóng thường sinh ra khí SO<sub>2</sub>. Để hạn chế tốt nhất khí SO<sub>2</sub> thoát ra gây ô nhiễm môi trường, người ta nút ống nghiệm bằng bông tẩm dung dịch nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Giấm ăn","isCorrect":false},{"id":"b","letter":"B","text":"Muối ăn","isCorrect":false},{"id":"c","letter":"C","text":"Cồn","isCorrect":false},{"id":"d","letter":"D","text":"Xút","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q49","number":49,"part":1,"type":"multiple_choice","text":"Acid X là hóa chất quan trọng trong nhiều ngành như sản xuất phân bón, luyện kim, chất dẻo, acquy, chất tẩy rửa…Trong phòng thí nghiệm acid X còn được dùng làm chất hút ẩm. Chất X là","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>3</sub>PO<sub>4</sub>","isCorrect":false},{"id":"b","letter":"B","text":"HNO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":true},{"id":"d","letter":"D","text":"HCl","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q50","number":50,"part":1,"type":"multiple_choice","text":"Sulfuric acid đặc thường được dùng để làm khô các chất khí ẩm. Khí nào sau đây có thể được làm khô nhờ sulfuric acid đặc?","images":[],"options":[{"id":"a","letter":"A","text":"Khí CO<sub>2</sub>","isCorrect":true},{"id":"b","letter":"B","text":"Khí H<sub>2</sub>S","isCorrect":false},{"id":"c","letter":"C","text":"Khí NH<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Khí SO<sub>3</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q51","number":51,"part":1,"type":"multiple_choice","text":"Trong công nghiệm sản xuất sulfuric acid, hai nguồn nguyên liệu được khai thác từ mỏ để cung cấp nguyên tố sulfur là","images":[],"options":[{"id":"a","letter":"A","text":"ZnS, PbS","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>S, SO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"CaSO<sub>4</sub>, BaSO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"S, FeS<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q52","number":52,"part":1,"type":"multiple_choice","text":"Trong công nghiệp quặng pyrite sắt (FeS<sub>2</sub>) được dùng làm nguyên liệu để:","images":[],"options":[{"id":"a","letter":"A","text":"luyện gang","isCorrect":false},{"id":"b","letter":"B","text":"sản xuất sulfuric acid","isCorrect":true},{"id":"c","letter":"C","text":"chế tạo nam châm điện","isCorrect":false},{"id":"d","letter":"D","text":"tổng hợp dược phẩm","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q53","number":53,"part":1,"type":"multiple_choice","text":"Sulfur trioxide có công thức là","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>S","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>3</sub>","isCorrect":true},{"id":"c","letter":"C","text":"SO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q54","number":54,"part":1,"type":"multiple_choice","text":"Hiện nay để sản xuất sulfuric acid trong công nghiệp, ta cần cho SO<sub>3</sub> hấp thụ vào","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>SO<sub>4</sub> loãng","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>2</sub>SO<sub>4</sub> đặc","isCorrect":true},{"id":"d","letter":"D","text":"C<sub>2</sub>H<sub>5</sub>OH","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q55","number":55,"part":1,"type":"multiple_choice","text":"Trong công nghiệp sản suất sulfuric acid, sulfur trioxide được hấp thụ vào dung dịch sulfuric acid đặc tạo thành những chất có công thức chung là","images":[],"options":[{"id":"a","letter":"A","text":"227HSO","isCorrect":false},{"id":"b","letter":"B","text":"24HSO","isCorrect":false},{"id":"c","letter":"C","text":"324.SOnSOH","isCorrect":true},{"id":"d","letter":"D","text":"(SO<sub>3</sub>)<sub>n</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q56","number":56,"part":1,"type":"multiple_choice","text":"Một loại oleum có công thức hóa học là H<sub>2</sub>S<sub>2</sub>O<sub>7</sub> (H<sub>2</sub>SO<sub>4</sub>.SO<sub>3</sub>). Số oxi hóa của sulfur trong hợp chất oleum là","images":[],"options":[{"id":"a","letter":"A","text":"+2","isCorrect":false},{"id":"b","letter":"B","text":"+4","isCorrect":false},{"id":"c","letter":"C","text":"+6","isCorrect":true},{"id":"d","letter":"D","text":"+8","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q57","number":57,"part":1,"type":"multiple_choice","text":"Sơ đồ phản ứng nào sau đây dùng để sản xuất sulfuric acid H<sub>2</sub>SO<sub>4</sub>trong công nghiệp?","images":[],"options":[{"id":"a","letter":"A","text":"3324CuSOSOHSO →  →  →","isCorrect":false},{"id":"b","letter":"B","text":"3324FeSOSOHSO →  →  →","isCorrect":false},{"id":"c","letter":"C","text":"3324FeOSOSOHSO →  →  →","isCorrect":false},{"id":"d","letter":"D","text":"23324FeSSOSOHSO →  →  →","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q58","number":58,"part":1,"type":"multiple_choice","text":"Chất nào sau đây không tan trong nước?","images":[],"options":[{"id":"a","letter":"A","text":"BaSO<sub>4</sub>","isCorrect":true},{"id":"b","letter":"B","text":"Na<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"FeSO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"CuSO<sub>4</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q59","number":59,"part":1,"type":"multiple_choice","text":"Cho vài giọt dung dịch BaCl<sub>2</sub> vào dung dịch nào sau đây sẽ tạo kết tủa trắng?","images":[],"options":[{"id":"a","letter":"A","text":"NaCl","isCorrect":false},{"id":"b","letter":"B","text":"Na<sub>2</sub>SO<sub>4</sub>","isCorrect":true},{"id":"c","letter":"C","text":"NaNO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NaOH","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q60","number":60,"part":1,"type":"multiple_choice","text":"Để nhận biết anion có trong dung dịch K<sub>2</sub>SO<sub>4</sub>, không thể dùng thuốc thử nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Ba(OH)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"BaCl<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Ba(NO<sub>3</sub>)<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"MgCl<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q61","number":61,"part":1,"type":"multiple_choice","text":"Chất nào sau đây nhận biết được muối sulfate ( 2-4SO )?","images":[],"options":[{"id":"a","letter":"A","text":"BaCl<sub>2</sub>","isCorrect":true},{"id":"b","letter":"B","text":"HCl","isCorrect":false},{"id":"c","letter":"C","text":"KNO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"HNO<sub>3</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q62","number":62,"part":1,"type":"multiple_choice","text":"Khi trộn dung dịch Na<sub>2</sub>SO<sub>4</sub> với dung dịch BaCl<sub>2</sub>, phản ứng thực chất xảy ra trong dung dịch là","images":[],"options":[{"id":"a","letter":"A","text":"2244Ba  SO BaSO+-+ →","isCorrect":true},{"id":"b","letter":"B","text":"Na  Cl NaCl+-+ →","isCorrect":false},{"id":"c","letter":"C","text":"2244Ba  NaSO BaSO  2Na+++ → +","isCorrect":false},{"id":"d","letter":"D","text":"2244BaCl  SO BaSO  2Cl--+ → +","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q63","number":63,"part":1,"type":"multiple_choice","text":"Phân biệt được dung dịch Na<sub>2</sub>SO<sub>4</sub> và NaCl bằng dung dịch nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"MgCl<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"FeCl<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"HCl","isCorrect":false},{"id":"d","letter":"D","text":"2BaCl","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q64","number":64,"part":1,"type":"multiple_choice","text":"Muối X không tan trong nước và các dung môi hữu cơ. Trong y học, X thường được dùng làm chất cản quang xét nghiệm X-quang đường tiêu hóa. Công thức của X là","images":[],"options":[{"id":"a","letter":"A","text":"BaSO<sub>4</sub>","isCorrect":true},{"id":"b","letter":"B","text":"Na<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"K<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"MgSO<sub>4</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q65","number":65,"part":1,"type":"multiple_choice","text":"Trong đời sống, muối Y thường được dùng làm vật liệu xây dựng. Trong y học dùng để bó bột khi gãy xương. Trong thực phẩm, làm phụ gia để làm đông các sản phẩm như đậu hủ, đậu non… Công thức của chất Y là","images":[],"options":[{"id":"a","letter":"A","text":"MgSO<sub>4</sub>","isCorrect":false},{"id":"b","letter":"B","text":"ZnSO<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"CuSO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"CaSO<sub>4</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q66","number":66,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Ammonium sulfate là một loại phân đạm","isCorrect":false},{"id":"b","letter":"B","text":"Calcium sulfate được ứng dụng làm thạch cao","isCorrect":false},{"id":"c","letter":"C","text":"Cho muối NaHSO<sub>3</sub> tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng sinh ra khí SO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Các muối sulfate đều dễ tan trong nước","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q67","number":67,"part":1,"type":"multiple_choice","text":"Nhận định nào sau đây là sai?","images":[],"options":[{"id":"a","letter":"A","text":"Các muối sulfate đều dễ tan trong nước","isCorrect":true},{"id":"b","letter":"B","text":"NaHSO<sub>4</sub> là muối acid","isCorrect":false},{"id":"c","letter":"C","text":"Để nhận biết ion SO<sub>4</sub><sup>2-</sup> có trong dung dịch ta dùng BaCl<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Sulfuric acid được sản xuất trong công nghiệp bằng phương pháp tiếp xúc","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q68","number":68,"part":1,"type":"multiple_choice","text":"Cho nhiệt tạo thành chuẩn của SO<sub>2</sub> (g) và SO<sub>3</sub> (g) lần lượt là -296,8 kJ/mol và -395,7 kJ/mol. Biến thiên anthalpy chuẩn của phản ứng:  25oVO223t2SO  O 2SO+ ⇌ là","images":[],"options":[{"id":"a","letter":"A","text":"-98,9kJ","isCorrect":false},{"id":"b","letter":"B","text":"-197,8 kJ","isCorrect":true},{"id":"c","letter":"C","text":"98,9 kJ","isCorrect":false},{"id":"d","letter":"D","text":"197,8 kJ","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q69","number":69,"part":1,"type":"multiple_choice","text":"Kết quả phân tích thành phần một muối sulfate cho thấy nguyên tố kim loại M chiếm 28% về khối lượng, còn lại là oxygen và sulfur. Kim loại M là","images":[],"options":[{"id":"a","letter":"A","text":"Fe","isCorrect":true},{"id":"b","letter":"B","text":"Cu","isCorrect":false},{"id":"c","letter":"C","text":"Mg","isCorrect":false},{"id":"d","letter":"D","text":"Ca","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q70","number":70,"part":1,"type":"multiple_choice","text":"Hòa tan 200 gam SO<sub>3</sub> vào m gam dung dịch H<sub>2</sub>SO<sub>4</sub> 49% thu được dung dịch H<sub>2</sub>SO<sub>4</sub> 78,4%. Giá trị của m là","images":[],"options":[{"id":"a","letter":"A","text":"400","isCorrect":false},{"id":"b","letter":"B","text":"300","isCorrect":true},{"id":"c","letter":"C","text":"450","isCorrect":false},{"id":"d","letter":"D","text":"500","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q71","number":71,"part":1,"type":"multiple_choice","text":"Hòa tan 11,2 gam Fe vào dung dịch H<sub>2</sub>SO<sub>4</sub> loãng dư thu được V L khí H<sub>2</sub> (đkc). Giá trị của V là","images":[],"options":[{"id":"a","letter":"A","text":"5,376","isCorrect":false},{"id":"b","letter":"B","text":"6,197","isCorrect":false},{"id":"c","letter":"C","text":"4,958","isCorrect":true},{"id":"d","letter":"D","text":"2,4790","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q72","number":72,"part":1,"type":"multiple_choice","text":"Cho 0,1 mol FeSO<sub>4</sub> tác dụng hết với dung dịch BaCl<sub>2</sub> dư, thu được m gam kết tủa. Giá trị của m là","images":[],"options":[{"id":"a","letter":"A","text":"23,30","isCorrect":true},{"id":"b","letter":"B","text":"11,65","isCorrect":false},{"id":"c","letter":"C","text":"46,60","isCorrect":false},{"id":"d","letter":"D","text":"34,95","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q73","number":73,"part":1,"type":"multiple_choice","text":"Hòa tan 35,1 gam kim loại M (hóa trị II) trong dung dịch H<sub>2</sub>SO<sub>4</sub> loãng dư, thu được 0,54 mol khí H<sub>2</sub>. Kim loại M là","images":[],"options":[{"id":"a","letter":"A","text":"Be","isCorrect":false},{"id":"b","letter":"B","text":"Mg","isCorrect":false},{"id":"c","letter":"C","text":"Zn","isCorrect":true},{"id":"d","letter":"D","text":"Ca","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q74","number":74,"part":1,"type":"multiple_choice","text":"Cho 10 gam hỗn hợp gồm Fe và Cu tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng dư. Sau phản ứng thu được 2,479 lít khí hydrogen (đktc), dung dịch X và m gam kim loại không tan. Giá trị của m là","images":[],"options":[{"id":"a","letter":"A","text":"6,4","isCorrect":false},{"id":"b","letter":"B","text":"3,4","isCorrect":false},{"id":"c","letter":"C","text":"4,4","isCorrect":true},{"id":"d","letter":"D","text":"5,6","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q75","number":75,"part":1,"type":"multiple_choice","text":"Hoà tan hoàn toàn 0,8125 gam một kim loại hoá trị II vào dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, nóng thu được 0,0125 mol khí SO<sub>2</sub>. Kim loại đó là","images":[],"options":[{"id":"a","letter":"A","text":"Mg","isCorrect":false},{"id":"b","letter":"B","text":"Cu","isCorrect":false},{"id":"c","letter":"C","text":"Fe","isCorrect":false},{"id":"d","letter":"D","text":"Zn","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q76","number":76,"part":1,"type":"multiple_choice","text":"Cho 200 mL dung dịch chứa H<sub>2</sub>SO<sub>4</sub> 1M. Thể tích dung dịch chứa đồng thời NaOH 5M lấy để trung hoà vừa đủ dung dịch acid đã cho là","images":[],"options":[{"id":"a","letter":"A","text":"100 mL","isCorrect":false},{"id":"b","letter":"B","text":"90 mL","isCorrect":false},{"id":"c","letter":"C","text":"120 mL","isCorrect":false},{"id":"d","letter":"D","text":"80 mL","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q77","number":77,"part":1,"type":"multiple_choice","text":"Cho 4,8 gam Mg tác dụng với lượng dư H<sub>2</sub>SO<sub>4</sub> đặc, nóng thu được V L SO<sub>2</sub> (đo ở đkc, là sản phẩm khử duy nhất). Giá trị của V là","images":[],"options":[{"id":"a","letter":"A","text":"1,2395","isCorrect":false},{"id":"b","letter":"B","text":"2,4790","isCorrect":false},{"id":"c","letter":"C","text":"3,7185","isCorrect":false},{"id":"d","letter":"D","text":"4,9580","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q78","number":78,"part":1,"type":"multiple_choice","text":"Cho 9,2 gam hỗn hợp Zn và Al (tỉ lệ mol 1 : 1) tác dụng với lượng dư H<sub>2</sub>SO<sub>4</sub> đặc, nóng thu được V lít SO<sub>2</sub> (đo ở đkc, là sản phẩm khử duy nhất). Giá trị của V là","images":[],"options":[{"id":"a","letter":"A","text":"6,1975","isCorrect":true},{"id":"b","letter":"B","text":"4,958","isCorrect":false},{"id":"c","letter":"C","text":"7,437","isCorrect":false},{"id":"d","letter":"D","text":"12,395","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q79","number":79,"part":1,"type":"multiple_choice","text":"Hòa tan hết m gam oxide của kim loại M (hóa trị II) vào dung dịch  24HSO loãng, thu được 3m gam muối sulfate. Công thức của oxide kim loại là","images":[],"options":[{"id":"a","letter":"A","text":"ZnO","isCorrect":false},{"id":"b","letter":"B","text":"CuO","isCorrect":false},{"id":"c","letter":"C","text":"CaO","isCorrect":false},{"id":"d","letter":"D","text":"MgO","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q80","number":80,"part":1,"type":"multiple_choice","text":"Sodium sulfate (còn gọi là muối Glauber) được sử dụng rộng rãi trong một số lĩnh vực như: chất chống tạo bọt khí trong sản xuất thủy tinh, chất độn trong sản xuất bột giặt, chất làm mịn khi nhuộm vải sợi… Trong tinh thể muối sodium sulfate, sulfur chiếm 9,94% về khối lượng. Muối Glauber có công thức là","images":[],"options":[{"id":"a","letter":"A","text":"Na<sub>2</sub>SO<sub>4</sub>.5H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"Na<sub>2</sub>SO<sub>4</sub>.7H<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"Na<sub>2</sub>SO<sub>4</sub>.10H<sub>2</sub>O","isCorrect":true},{"id":"d","letter":"D","text":"Na<sub>2</sub>SO<sub>4</sub>.3H<sub>2</sub>O","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q81","number":81,"part":1,"type":"multiple_choice","text":"Hòa tan 3,38 gam oleum (X) vào nước thu được dung dịch (Y). Để trung hòa (Y) cần dùng vừa đủ 800 mL dung dịch KOH 0,1M. Công thức của (x) là","images":[],"options":[{"id":"a","letter":"A","text":"h<sub>2</sub>so<sub>4</sub>.so<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"h<sub>2</sub>so<sub>4</sub>.2so<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"h<sub>2</sub>so<sub>4</sub>.3so<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"h<sub>2</sub>so<sub>4</sub>.4so<sub>3</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q82","number":82,"part":1,"type":"multiple_choice","text":"Có một loại quặng pyrite sắt chứa 96% FeS<sub>2</sub> nguyên chất. Mỗi ngày người ta cần sản xuất 100 tấn dung dịch H<sub>2</sub>SO<sub>4</sub> 98%. Biết hiệu suất của quá trình sản xuất là 90%. Khối lượng quặng pyrite sắt đã dùng là","images":[],"options":[{"id":"a","letter":"A","text":"69,44 tấn","isCorrect":true},{"id":"b","letter":"B","text":"68,44 tấn","isCorrect":false},{"id":"c","letter":"C","text":"67,44 tấn","isCorrect":false},{"id":"d","letter":"D","text":"70,44 tấn","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q83","number":83,"part":1,"type":"multiple_choice","text":"Khi hòa tan một oxide kim loại hóa trị II bằng một lượng vừa đủ dung dịch H<sub>2</sub>SO<sub>4</sub> 9,8% thì thu được dung dịch muối có nồng độ 14,815%. Công thức phân tử của oxit kim loại là","images":[],"options":[{"id":"a","letter":"A","text":"CaO","isCorrect":false},{"id":"b","letter":"B","text":"CuO","isCorrect":true},{"id":"c","letter":"C","text":"MgO","isCorrect":false},{"id":"d","letter":"D","text":"BaO","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25},{"id":"h11_b8_p1_q84","number":84,"part":1,"type":"multiple_choice","text":"Hoà tan hoàn toàn 12,1 gam hỗn hợp X gồm Fe và kim loại M hoá trị II trong dung dịch H<sub>2</sub>SO<sub>4</sub> loãng thì thu được 4,958 L khí H<sub>2</sub>(đkc). Cũng cho lượng hỗn hợp trên hoà tan hoàn toàn vào H<sub>2</sub>SO<sub>4</sub> đặc nóng, dư thì thu được 6,1975 L khí SO<sub>2</sub> (đkc). Kim loại M là","images":[],"options":[{"id":"a","letter":"A","text":"Ca","isCorrect":false},{"id":"b","letter":"B","text":"Mg","isCorrect":false},{"id":"c","letter":"C","text":"Cu","isCorrect":false},{"id":"d","letter":"D","text":"Zn","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25}],"part2":[{"id":"h11_b8_p2_q1","number":1,"part":2,"type":"true_false","text":"Mô hình cấu tạo phân tử và công thức cấu tạo của sulfuric acid được mô tả ở hình dưới đây:","images":["/assets/hoa12/c5/h11_b8_image107.png"],"options":[{"id":"a","letter":"A","text":"Liên kết trong phân tử H<sub>2</sub>SO<sub>4</sub> là liên kết cộng hoá trị","isCorrect":true},{"id":"b","letter":"B","text":"Trong phân tử H<sub>2</sub>SO<sub>4</sub>, sulfur có số oxi hóa là +6, đây là số oxi hóa cao nhất của sulfur do đó H<sub>2</sub>SO<sub>4</sub> không thể hiện tính khử","isCorrect":true},{"id":"c","letter":"C","text":"Phân tử sulfuric acid có 2 proton dễ cho H<sup>+</sup>, thể hiện tính acid mạnh","isCorrect":true},{"id":"d","letter":"D","text":"Phân tử H<sub>2</sub>SO<sub>4</sub> có 2 nguyên tử hydrogen linh động, nguyên tử sulfur tạo được 4 liên kết cộng hoá trị với các nguyên tử oxygen","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Nguyên tử sulfur tạo được 6 liên kết cộng hóa trị","explanationImages":[],"points":1},{"id":"h11_b8_p2_q2","number":2,"part":2,"type":"true_false","text":"Cho các phát biểu sau về tính chất vật lí của sulfuric acid:","images":[],"options":[{"id":"a","letter":"A","text":"Ở điều kiện thường, sulfuric acid là chất lỏng, không màu, dễ bay hơi","isCorrect":false},{"id":"b","letter":"B","text":"Khi pha loãng sulfuric acid đặc cần phải cho từ từ nước vào acid đặc","isCorrect":false},{"id":"c","letter":"C","text":"Sulfuric acid được sử dụng làm chất hút ẩm trong các bình hút ẩm để làm khô nhiều chất","isCorrect":true},{"id":"d","letter":"D","text":"Sulfuric acid tan vô hạn trong nước là do có khối lượng phân tử lớn hơn nước","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Sulfuric acid không bay hơi.<br/>b. S. Khi pha loãng sulfuric acid đặc cần phải cho từ từ acid đặc vào nước.<br/>c. Đ.<br/>d. S. Sulfuric acid tan vô hạn trong nước là do tạo được liên kết hydrogen với nước","explanationImages":[],"points":1},{"id":"h11_b8_p2_q3","number":3,"part":2,"type":"true_false","text":"Cho các nhận định sau về sulfuric acid đặc (H<sub>2</sub>SO<sub>4</sub> đặc):","images":[],"options":[{"id":"a","letter":"A","text":"Khi pha loãng H<sub>2</sub>SO<sub>4</sub> đặc cần rót từ từ acid đặc theo đũa thuỷ tinh vào nước, sau đó khuấy đều (mô tả ở dưới dưới)","isCorrect":true},{"id":"b","letter":"B","text":"Không pha loãng H<sub>2</sub>SO<sub>4</sub> đặc bằng cách đổ trực tiếp nước vào acid đặc vì phản ứng tỏa nhiệt mạnh, làm nước sôi đột ngột kéo theo những giọt acid bắn ra ngoài gây nguy hiểm (mô tả ở hình dưới)","isCorrect":true},{"id":"c","letter":"C","text":"Sulfuric acid đặc gây bỏng khi rơi vào da, do vậy cần tuân thủ các nguyên tắc trước khi thực hành thí nghiệm","isCorrect":true},{"id":"d","letter":"D","text":"Khi bị bỏng bởi H<sub>2</sub>SO<sub>4</sub> đặc cần nhanh chóng rửa sạch vị trí dính acid nhiều lần với dung dịch sodium hydroxide (NaOH), sau đó băng bó tạm thời bằng băng sạch rồi đến ngay cơ sở y tế gần nhất","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Rửa sạch vị trí dính acid nhiều lần với nước sạch. Không đổ NaOH vào vì phản ứng trung hòa giữa acid và base là phản ứng tỏa nhiệt gây nguy hiểm","explanationImages":[],"points":1},{"id":"h11_b8_p2_q4","number":4,"part":2,"type":"true_false","text":"Cho các phát biểu sau về tính chất hóa học của sulfuric acid:","images":[],"options":[{"id":"a","letter":"A","text":"Dung dịch sulfuric acid loãng có đầy đủ tính chất của một acid mạnh","isCorrect":true},{"id":"b","letter":"B","text":"Sulfuric acid đặc vừa có tính khử vừa có tính oxi hóa mạnh","isCorrect":false},{"id":"c","letter":"C","text":"Sulfuric acid đặc, nguội không thể hiện tính oxi hóa mạnh như sulfuric acid đặc, nóng","isCorrect":false},{"id":"d","letter":"D","text":"Sulfuric đặc không thể lấy nước của nhiều hợp chất hữu cơ (da, giấy, tinh bột,…)","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. H<sub>2</sub>SO<sub>4</sub> đặc không có tính khử.<br/>c. S. H<sub>2</sub>SO<sub>4</sub> đặc đều có tính oxi hóa mạnh.<br/>d. S. H<sub>2</sub>SO<sub>4</sub> đặc có thể lấy nước từ nhiều hợp chất hữu cơ","explanationImages":[],"points":1},{"id":"h11_b8_p2_q5","number":5,"part":2,"type":"true_false","text":"Cho các phát biểu sau về tính chất của sulfuric acid:","images":[],"options":[{"id":"a","letter":"A","text":"Sulfuric acid tan tốt trong nước, quá trình hoà tan toả nhiệt mạnh","isCorrect":true},{"id":"b","letter":"B","text":"Dung dịch sulfuric acid đặc hoà tan được tất cả các kim loại","isCorrect":false},{"id":"c","letter":"C","text":"Dung dịch sulfuric acid đặc có tính háo nước và tính oxi hoá mạnh","isCorrect":true},{"id":"d","letter":"D","text":"Dung dịch sulfuric acid loãng dễ bị phân huỷ bởi ánh sáng nên kém bền","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Dung dịch sulfuric acid đặc, nguội không hoà tan được Al, Fe, Cr, Au, Pt.<br/>c. Đ.<br/>d. S. Dung dịch sulfuric acid loãng bền","explanationImages":[],"points":1},{"id":"h11_b8_p2_q6","number":6,"part":2,"type":"true_false","text":"Cho các tính chất hóa học của sulfuric acid sau:","images":[],"options":[{"id":"a","letter":"A","text":"Cho mẫu giấy quỳ tím vào dung dịch sulfuric acid loãng, thấy giấy quỳ chuyển sang màu đỏ","isCorrect":true},{"id":"b","letter":"B","text":"Cho một đinh sắt (iron, đã cao sạch gỉ) vào dung dịch sulfuric acid đặc nóng, thấy miếng sắt tan đồng thời có bọt khí H<sub>2</sub> thoát ra","isCorrect":false},{"id":"c","letter":"C","text":"Cho NaHSO<sub>3</sub> vào dung dịch sulfuric acid loãng thấy xuất hiện kết tủa trắng","isCorrect":false},{"id":"d","letter":"D","text":"Cho vài giọt dung dịch sulfuric acidđặc vào đường saccharose, thấy đường nhanh chóng hóa đen, sau đó khối rắn tăng thể tích rất nhanh và có thoát khí mùi hắc (SO<sub>2</sub>)","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Fe phản ứng với H<sub>2</sub>SO<sub>4</sub> đặc nóng có sinh ra khí SO<sub>2</sub> mùi hắc.<br/>c. S. NaHSO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub>Na<sub>2</sub>SO<sub>4</sub> + SO<sub>2</sub> + H<sub>2</sub>O (có khí thoát ra).<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b8_p2_q7","number":7,"part":2,"type":"true_false","text":"Thí nghiệm về tính chất của dung dịch sulfuric acid loãng và dung dịch sulfuric acid đặc:<br/>- Chuẩn bị: Kim loại đồng (Cu, copper) dạng mảnh hoặc sợi, dung dịch sulfuric acid loãng và dung dịch sulfuric acid đặc, ống nghiệm, bông tầm kiềm, đèn cồn.<br/>- Tiến hành: Cho mảnh đồng nhỏ vào ống nghiệm thứ nhất, cho tiếp vào ống nghiệm khoảng 3 mL dung dịch sulfuric acid loãng, sau đó đun nóng nhẹ ống nghiệm trên ngọn lửa đèn cồn. Cho mảnh đồng nhỏ vào ống nghiệm thứ hai, cho tiếp vào ống nghiệm khoảng 3 mL dung dịch sulfuric acid đặc, rồi nút bông tẩm dung dịch NaOH đặc vào miệng ống nghiệm, sau đó đun nóng nhẹ ống nghiệm trên ngọn lửa đèn cồn","images":[],"options":[{"id":"a","letter":"A","text":"Hiện tượng quan sát được trong ống nghiệm thứ nhất: mảnh đồng tan dần và có khí không màu thoát ra","isCorrect":false},{"id":"b","letter":"B","text":"Hiện tượng quan sát được trong ống nghiệm thứ hai: mảnh đồng tan dần, có khí không màu thoát ra và dung dịch thu được có màu xanh","isCorrect":true},{"id":"c","letter":"C","text":"Bông tẩm dung dịch NaOH đặc ở ống nghiệm thứ hai hạn chế khí độc thoát ra ngoài môi trường","isCorrect":true},{"id":"d","letter":"D","text":"Dung dịch sulfuric acid loãng hoặc đặc đều có tính oxi hóa mạnh, có thể oxi hóa được các kim loại kém hoạt động như đồng","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Cu không tác dụng với H<sub>2</sub>SO<sub>4</sub> loãng nên không có hiện tượng.<br/>b. Đ.<br/>c. Đ. 2NaOH + SO<sub>2</sub> → Na<sub>2</sub>SO<sub>3</sub> + H<sub>2</sub>O, tránh khí độc thoát ra ngoài.<br/>d. S. Cu không tác dụng với H<sub>2</sub>SO<sub>4</sub> loãng","explanationImages":[],"points":1},{"id":"h11_b8_p2_q8","number":8,"part":2,"type":"true_false","text":"Thí nghiệm: Dung dịch sulfuric đặc tác dụng với đường kính.<br/>Chuẩn bị: Đường kính (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>), cốc thuỷ tinh chịu nhiệt, chậu thuỷ tinh rộng, ống nhỏ giọt, dung dịch sulfuric acid đặc.<br/>Tiến hành: Đặt cốc thuỷ tinh vào chậu thuỷ tinh. Cho một thìa nhỏ đường kính vào cốc. Nhỏ từ từ vài Ml dung dịch sulfuric acid đặc vào cốc","images":[],"options":[{"id":"a","letter":"A","text":"Hiện tượng quan sát được là đường kính hoá màu cánh dán, sau đó hoá đen, đồng thời có sủi bọt khí","isCorrect":true},{"id":"b","letter":"B","text":"Thí nghiệm trên chứng tỏ H<sub>2</sub>SO<sub>4</sub> đặc có tính háo nước","isCorrect":true},{"id":"c","letter":"C","text":"Các phản ứng xảy ra ở thí nghiệm trên là:","isCorrect":true},{"id":"d","letter":"D","text":"Dung dịch sulfuric acid đặc có khả năng lấy nước từ các hợp chất carbohydrate như cellulose (giấy, bông), tinh bột và khiến chúng hoá đen (gọi là hiện tượng than hoá)","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b8_p2_q9","number":9,"part":2,"type":"true_false","text":"Cho các phát biểu sau:","images":[],"options":[{"id":"a","letter":"A","text":"Sulfuric acid đặc có tính háo nước, gây bỏng nặng khi tiếp xúc với da tay","isCorrect":true},{"id":"b","letter":"B","text":"Khi bị bỏng sulfuric acid đặc, điều đầu tiên cần làm là xả nhanh chỗ bỏng với nước lạnh","isCorrect":true},{"id":"c","letter":"C","text":"Sulfuric acid loãng có tính oxi hóa mạnh, khi tác dụng với kim loại không sinh ra khí hydrogen","isCorrect":false},{"id":"d","letter":"D","text":"Thuốc thử nhận biết sulfuric acid và muối sulfate là ion Ba<sup>2+</sup> trong BaCl<sub>2</sub>, Ba(OH)<sub>2</sub>, Ba(NO<sub>3</sub>)<sub>2</sub>","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Sulfuric acid loãng có tính acid mạnh.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b8_p2_q10","number":10,"part":2,"type":"true_false","text":"Sulfuric acid là hóa chất hàng đầu được dùng trong nhiều ngành sản xuất","images":[],"options":[{"id":"a","letter":"A","text":"Sulfuric acid được sử dụng rộng rãi trong sản xuất phân bón hóa học","isCorrect":true},{"id":"b","letter":"B","text":"Sulfuric acid được sử dụng trong sản xuất chất tẩy rửa, sơn, phẩm màu, thuốc trừ sâu, giấy, chế biến dầu mỏ,","isCorrect":true},{"id":"c","letter":"C","text":"Nguyên liệu chính để sản xuất sulfuric acid trong công nghiệp là các muối sulfate","isCorrect":false},{"id":"d","letter":"D","text":"Trong công nghiệp, sulfuric acid chủ yếu được sản xuất bằng phương pháp sulfate","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Nguyên liệu chính để sản xuất sulfuric acid trong công nghiệp là S, FeS<sub>2</sub>.<br/>d. S. Sulfuric acid chủ yếu được sản xuất bằng phương pháp tiếp xúc","explanationImages":[],"points":1},{"id":"h11_b8_p2_q11","number":11,"part":2,"type":"true_false","text":"Cho các phát biểu sau về sulfuric acid:","images":[],"options":[{"id":"a","letter":"A","text":"Khi làm việc với sulfuric acid đặc không nhất thiết phải sử dụng các dụng cụ bảo hộ","isCorrect":false},{"id":"b","letter":"B","text":"Giữa các phân tử sulfuric acid hình thành nhiều liên kết hydrogen","isCorrect":true},{"id":"c","letter":"C","text":"Sulfuric acid đặc, nguội làm thụ động hóa một số kim loại như Al, Fe, Cr","isCorrect":true},{"id":"d","letter":"D","text":"Trong công nghiệp, sulfuric acid được sản xuất bằng phương pháp tiếp xúc","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Khi làm việc với sulfuric acid đặc cần phải sử dụng các dụng cụ bảo hộ.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b8_p2_q12","number":12,"part":2,"type":"true_false","text":"Sulfuric acid là một trong những hoá chất quan trọng nhất được sử dụng trong công nghiệp; được sản xuất hàng trăm triệu tấn mỗi năm, chiếm nhiều nhất trong ngành công nghiệp hoá chất. Phương pháp sản xuất sulfuric acid phổ biến nhất là phương pháp tiếp xúc, theo đó acid có thể được điều chế qua các giai đoạn sau:<br/>(1) FeS<sub>2</sub>(s) + O<sub>2</sub>(g) → (t°)  Fe<sub>2</sub>O<sub>3</sub>(s) + SO<sub>2</sub>(g)<br/>(2) SO<sub>2</sub>(g) + O<sub>2</sub>(s)  o25450 C, ⇌ (V<sub>2</sub>O<sub>5</sub>, t°) SO<sub>3</sub>(g) ; &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -196 kJ<br/>(3) H<sub>2</sub>SO<sub>4</sub>(aq) + SO<sub>3</sub>(g) → H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l)<br/>(4) H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l) + H<sub>2</sub>O(l) → H<sub>2</sub>SO<sub>4</sub>(aq)","images":[],"options":[{"id":"a","letter":"A","text":"Trong quá trình sản xuất H<sub>2</sub>SO<sub>4</sub>, giai đoạn (1) có nguy cơ cao gây ô nhiễm môi trường","isCorrect":true},{"id":"b","letter":"B","text":"Người ta dùng sulfuric acid 98% H<sub>2</sub>SO<sub>4</sub>(aq) hấp thụ SO<sub>3</sub>(g) trong phản ứng (3), quá trình này được thực hiện trong tháp tiếp xúc","isCorrect":true},{"id":"c","letter":"C","text":"Để làm tăng hiệu suất của phản ứng (2), người ta hạ nhiệt độ của phản ứng xuống thấp","isCorrect":false},{"id":"d","letter":"D","text":"Ở giai đoạn 3 (phản ứng 3) có thể dùng nước hấp thụ SO<sub>3</sub> để sản xuất sulfuric acid đặc có nồng độ cao và thuận tiện hơn cho việc vận chuyển","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Nếu hạ nhiệt độ xuống thấp thì sự chuyển động của các phân tử khí giảm dẫn đến giảm hiệu suất phản ứng.<br/>d. S. Dùng nước hấp thụ SO<sub>3</sub> sẽ tạo thành dạng mù sulfuric acid khó lắng xuống và khó chuyển lại thành dung dịch nên người ta dùng H<sub>2</sub>SO<sub>4</sub> đặc để hấp thụ SO<sub>3</sub>, oleum thành phẩm có khối lượng nhỏ hơn dung dịch H<sub>2</sub>SO<sub>4</sub> nên thuận tiện hơn cho việc vận chuyển","explanationImages":[],"points":1},{"id":"h11_b8_p2_q13","number":13,"part":2,"type":"true_false","text":"Sơ đồ quy trình dưới đây mô tả các bước trong quá trình sản xuất phân bón (Z):","images":["/assets/hoa12/c5/h11_b8_image116.png"],"options":[{"id":"a","letter":"A","text":"Phân bón (Z) có công thức hóa học là (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>","isCorrect":true},{"id":"b","letter":"B","text":"Hợp chất (Q) có tên gọi là oleum","isCorrect":true},{"id":"c","letter":"C","text":"Có 3 phản ứng oxi hóa khử trong sơ đồ trên","isCorrect":false},{"id":"d","letter":"D","text":"Hợp chất (X) được mệnh danh là “máu” của các nghành công nghiệp","isCorrect":true}],"explanation":"Đáp án:<br/>(1) SO<sub>3</sub> (A), (2) H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub> (Q), (3) H<sub>2</sub>SO<sub>4</sub> (X), (4) NH<sub>3</sub> (Y), (5) (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>  (Z)<br/>a. Đ.<br/>b. Đ.<br/>c. S. Trong 5 phản ứng trên có 2 phản ứng oxi hoá khử là (1) và (4).<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b8_p2_q14","number":14,"part":2,"type":"true_false","text":"Cho các phát biểu sau về muối sulfate:","images":[],"options":[{"id":"a","letter":"A","text":"Nhiều muối sulfate tan tốt trong nước nhưng một số muối như CaSO<sub>4</sub>, BaSO<sub>4</sub> rất ít tan trong nước","isCorrect":true},{"id":"b","letter":"B","text":"Magnesium sulfate được dùng làm thuốc điều trị bệnh liên quan đến hồng cầu, dùng làm chất hút mồ hôi tay cho các vận động viên,","isCorrect":false},{"id":"c","letter":"C","text":"Calcium sulfate là thành phần chính của các loại thạch cao. Phân tử chất này thường ngâm nước với số lượng các phân tử H<sub>2</sub>O khác nhau, tạo ra các loại thạch cao có ứng dụng khác nhau","isCorrect":true},{"id":"d","letter":"D","text":"Barium sulfate là chất rắn màu trắng, hầu như không tan trong nước, Chất này được dùng tạo mẫu trắng cho các loại giấy chất lượng cao","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Magnesium sulfate chủ yếu được sử dụng để làm phân bón, làm thuốc để giảm các cơn đau cơ, hiện tượng co cơ …<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1},{"id":"h11_b8_p2_q15","number":15,"part":2,"type":"true_false","text":"Cho các phát biểu sau về muối sulfate:","images":[],"options":[{"id":"a","letter":"A","text":"Không thể dùng nước phân biệt được hai muối MgSO<sub>4</sub> và BaSO<sub>4</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Hóa chất được dùng để nhận biết ion SO<sub>4</sub><sup>2-</sup> có trong dung dịch muối sulfate là ion Mg<sup>2+</sup>","isCorrect":false},{"id":"c","letter":"C","text":"Thạch cao nung (CaSO<sub>4</sub>.H<sub>2</sub>O) được sử dụng làm chất hút ẩm, chất hút mồ hôi tay của các vận động viên thể dục dụng cụ","isCorrect":false},{"id":"d","letter":"D","text":"Ammonium sulfate ((NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>) ở dạng tinh thể màu trắng, chủ yếu được dùng làm phân bón cung cấp đạm cho đất","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Dùng nước có thể phân biệt được vì MgSO<sub>4</sub> tan trong nước còn BaSO<sub>4</sub> không tan trong nước.<br/>b. S. Nhận biết ion SO<sub>4</sub><sup>2-</sup> bằng ion Ba<sup>2+</sup>.<br/>c. S. MgSO<sub>4</sub> được sử dụng làm chất hút ẩm, chất hút mồ hôi tay của các vận động viên thể dục dụng cụ.<br/>d. Đ","explanationImages":[],"points":1}],"part3":[{"id":"h11_b8_p3_q1","number":1,"part":3,"type":"short_answer","text":"Số oxi hóa của sulfur trong phân tử sulfuric acidlà bao nhiêu?","images":[],"correctAnswer":"+6","explanation":"Đáp án: +6","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q2","number":2,"part":3,"type":"short_answer","text":"Sulfuric acid đựng trong chai thuỷ tinh thường được bán trên thị trường có nồng độ là bao nhiêu phần trăm?","images":[],"correctAnswer":"98","explanation":"Đáp án: 98","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q3","number":3,"part":3,"type":"short_answer","text":"Cho các nguyên tắc đảm bảo an toàn khi sử dụng dung dịch sulfuric acid đặc trong phòng thí nghiệm:<br/>(1) Sử dụng găng tay, đeo kính bảo hộ, mặc áo thí nghiệm.<br/>(2) Cầm dụng cụ chắc chắn, thao tác cẩn thận.<br/>(3) Không để chai đựng acid lên miệng cốc, ông đong khi rót acid.<br/>(4) Sử dụng acid vừa phải, lượng acid còn thừa phải thu hồi vào lọ đựng.<br/>(5) Không được đổ nước vào dung dịch acid.<br/>Có bao nhiêu nguyên tắc đúng trong các nguyên tắc trên?","images":[],"correctAnswer":"5","explanation":"Đáp án: 5","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q4","number":4,"part":3,"type":"short_answer","text":"Cho các chất sau: H<sub>2</sub>SO<sub>4</sub>, SO<sub>2</sub>, N<sub>2</sub> và NH<sub>3</sub>. Có bao nhiêu chất tan tốt trong nước ở nhiệt độ thường?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q5","number":5,"part":3,"type":"short_answer","text":"Tiến hành các thí nghiệm cho các dung dịch H<sub>2</sub>SO<sub>4</sub> loãng lần lượt tác dụng với: Ag, Mg, NaHSO<sub>3</sub>, BaCl<sub>2</sub>, Ca(OH)<sub>2</sub>. Có bao nhiêu thí nghiệm có xảy ra phản ứng?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q6","number":6,"part":3,"type":"short_answer","text":"Cho các hợp chất carbohydrate sau: đường glucose, đường saccharose, bông, bột gỗ. Có bao nhiêu hợp chất có khả năng bị hóa đen khi tiếp xúc với sulfuric acid đặc?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q7","number":7,"part":3,"type":"short_answer","text":"Dung dịch sulfuric acid đặc có thể dùng để làm khô bao nhiêu khí ẩm trong số các khí sau: CO, H<sub>2</sub>, HCl, SO<sub>2</sub>, O<sub>2</sub> và NH<sub>3</sub>?","images":[],"correctAnswer":"5","explanation":"Đáp án: 5","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q8","number":8,"part":3,"type":"short_answer","text":"Cho phương trình hóa học: Fe + H<sub>2</sub>SO<sub>4</sub> → (t°)  Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>+ SO<sub>2</sub> ↑ + H<sub>2</sub>O. Có bao nhiêu phân tử sulfuric acid đóng vai trò chất bị khử trong phản ứng trên?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q9","number":9,"part":3,"type":"short_answer","text":"Cho các phản ứng sau:<br/>(1) 2KBr + 2H<sub>2</sub>SO<sub>4</sub> đặc → (t°)  K<sub>2</sub>SO<sub>4</sub> + Br<sub>2</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O<br/>(2) Mg + 2H<sub>2</sub>SO<sub>4</sub> → MgSO<sub>4</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O<br/>(3) FeO + H<sub>2</sub>SO<sub>4</sub> → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + SO<sub>2</sub> + H<sub>2</sub>O<br/>(4) 10FeSO<sub>4</sub> +2KMnO<sub>4</sub> + 8H<sub>2</sub>SO<sub>4</sub>  5Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + K<sub>2</sub>SO<sub>4</sub> + 2MnSO<sub>4</sub> + 8H<sub>2</sub>O<br/>(5) 2Cu + O<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub>  2CuSO<sub>4</sub> + 2H<sub>2</sub>O<br/>Có bao nhiêu phản ứng mà H<sub>2</sub>SO<sub>4</sub> đóng vai trò là chất oxi hoá?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q10","number":10,"part":3,"type":"short_answer","text":"Cho dãy các chất: Fe<sub>3</sub>O<sub>4</sub>, CaF<sub>2</sub>, Al<sub>2</sub>O<sub>3</sub>, CO<sub>2</sub>, S, P, FeCO<sub>3</sub> và NH<sub>3</sub>. Có bao nhiêu chất trong dãy bị oxi hoá bởi dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, nóng?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q11","number":11,"part":3,"type":"short_answer","text":"Phương pháp điều chế H<sub>2</sub>SO<sub>4</sub> từ quặng pyrite sắt (FeS<sub>2</sub>) trong công nghiệp trải qua mấy giai đoạn?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q12","number":12,"part":3,"type":"short_answer","text":"Quá trình sản xuất sulfuric acid trong công nghiệp được thực hiện dựa trên các phản ứng sau:<br/>(a)  ot22S O SO+ → <br/>(b)  ot222324FeS  11O 2FeO  8SO+ → +<br/>(c)  25oVO223t2SO  O 2SO+ ⇌ <br/>(d)  243227HSO  SO HSO+ → <br/>Có bao nhiêu phản ứng xảy ra đồng thời quá trình oxi hóa và quá trình khử?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3.<br/>Câu13 . Cho các nguyên liệu sau: sulfur, quặng pyrite (FeS<sub>2</sub>), không khí, nước, vanadium (V) oxide (V<sub>2</sub>O<sub>5</sub>). Có bao nhiêu nguyên liệu được sử dụng trong công nghiệp sản xuất sulfuric acid?<br/>Đáp án: 5","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q14","number":14,"part":3,"type":"short_answer","text":"Cho dãy các chất sau: Cu, Fe<sub>2</sub>O<sub>3</sub>, C, Na<sub>2</sub>SO<sub>3</sub>, NaBr và Fe(OH)<sub>2</sub>. Có bao nhiêu chất tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> đặc, nóng có sinh ra khí SO<sub>2</sub>?","images":[],"correctAnswer":"5","explanation":"Đáp án: 5","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q15","number":15,"part":3,"type":"short_answer","text":"Cần dùng bao nhiêu mL nước để pha loãng 100 mL dung dịch H<sub>2</sub>SO<sub>4</sub> 98% (D = 1,84 g/mL) thành dung dịch H<sub>2</sub>SO<sub>4</sub> 20%. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"718","explanation":"Đáp án: 718.<br/>Khối lượng của 100 mL dung dịch acid 98% là 100.1,84 = 184g<br/>Khối lượng H<sub>2</sub>SO<sub>4</sub> nguyên chất trong 100ml dung dịch trên là 184.98% = 180,32g<br/>Khối lượng nước cần bổ sung vào 100 ml dung dịch H<sub>2</sub>SO<sub>4</sub> 98% để có được dung dịch 20% là<br/>901,6 – 184g = 717,6 g","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q16","number":16,"part":3,"type":"short_answer","text":"Xét cân bằng chuyển hóa sulfur dioxide thành sulfur trioxide:<br/>25oVO223t2SO(g) O(g) 2SO(g)+ ⇌ ;  rH198kJD=-<br/>Tính biến thiên enthalpy (kJ) của phản ứng:  25oVO223t1SO(g) O(g) SO(g)2+ ⇌","images":[],"correctAnswer":"–99","explanation":"Đáp án: –99","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q17","number":17,"part":3,"type":"short_answer","text":"Hòa tan m gam Fe vào dung dịch H<sub>2</sub>SO<sub>4</sub> loãng, thoát ra 3,7185 L khí H<sub>2</sub> ở đkc. Nếu hòa tan m gam Fe vào dung dịch H<sub>2</sub>SO<sub>4</sub> đặc nóng, dư thoát ra m gam khí SO<sub>2</sub>. Giá trị của m là bao nhiêu?","images":[],"correctAnswer":"14,4","explanation":"Đáp án: 14,4.<br/>2HFenn0,15mol==<br/>Bảo toàn e:  222FeSOSOSO3n2nn0,225molm14,4g=Þ=Þ=","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q18","number":18,"part":3,"type":"short_answer","text":"Để diệt trừ nấm mốc gây hại cho thực vật, người ta dùng dung dịch CuSO<sub>4</sub> 0,8%. Khối lượng dung dịch CuSO<sub>4</sub> 0,8% pha chế được từ 60 gam CuSO<sub>4</sub>.5H<sub>2</sub>O là bao nhiêu gam?","images":[],"correctAnswer":"4800","explanation":"Đáp án: 4800.<br/>44424CuSOCuSOCuSO.5HOddCuSOm60nn0,24molm4800g2500,8%===Þ==","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q19","number":19,"part":3,"type":"short_answer","text":"Sulfuric acid có thể được điều chế từ quặng pyrite theo sơ đồ:<br/>FeS<sub>2</sub> <span class='inline-block mx-1 text-slate-800'>→<sup>+O<sub>2</sub>, t°</sup></span> SO<sub>2</sub> <span class='inline-block mx-1 text-slate-800'>→<sup>+O<sub>2</sub>, t°, V<sub>2</sub>O<sub>5</sub></sup></span> SO<sub>3</sub> <span class='inline-block mx-1 text-slate-800'>→<sup>+H<sub>2</sub>O</sup></span> H<sub>2</sub>SO<sub>4</sub><br/>Tính khối lượng dung dịch H<sub>2</sub>SO<sub>4</sub> 98% thu được từ 1 tấn quặng pyrite chứa 75% FeS<sub>2</sub>. Biết hiệu suất của cả quá trình là 80%, các tạp chất trong quặng không chứa sulfur","images":[],"correctAnswer":"1000","explanation":"Đáp án: 1000.<br/>==2FeSm1.75%0,75 tấn = 750 kg<br/>Ta có sơ đồ:  FeS<sub>2</sub> &rarr; 2SO<sub>2</sub> &rarr; 2SO<sub>3</sub> &rarr; 2H<sub>2</sub>SO<sub>4</sub> <br/>kmol: 750120   750120 .2.80% = 10<br/>24HSOm10.98980kg==    24ddHSO980m1000kg98%==","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q20","number":20,"part":3,"type":"short_answer","text":"Sulfuric acid có thể được điều chế từ sulfur theo sơ đồ:<br/>S <span class='inline-block mx-1 text-slate-800'>→<sup>H=95%</sup></span> SO<sub>2</sub> <span class='inline-block mx-1 text-slate-800'>→<sup>H=70%</sup></span> SO<sub>3</sub> <span class='inline-block mx-1 text-slate-800'>→<sup>H=100%</sup></span> H<sub>2</sub>SO<sub>4</sub><br/>Để thu được 100 tấn H<sub>2</sub>SO<sub>4</sub> 98% thì cần bao nhiêu tấn sulfur. Biết hiệu suất của từng giai đoạn được mô tả qua sơ đồ trên. (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"48,1","explanation":"Đáp án: 48,1.<br/>24SHSOS100.98%11nn1m1.32..48,129870%95%===Þ==  tấn","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q21","number":21,"part":3,"type":"short_answer","text":"Hòa tan 3,38g oleum (X) vào nước dư thu được dung dịch X. Để trung hòa hết acid có trong dung dịch X cần phải dùng 800 mL KOH 0,1M. Phần trăm khối lượng của nguyên tố oxygen có trong oleum (X) là bao nhiêu %? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"61,5","explanation":"Đáp án: 61,5.<br/>Gọi công thức oleum là H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub><br/>H<sub>2</sub>SO<sub>4</sub> + 2KOH → K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O<br/>0,040,08<br/>H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub> + nH<sub>2</sub>O → (n + 1)H<sub>2</sub>SO<sub>4</sub><br/>0,04/(n+1)0,04<br/>Ta có: 3,38 =  0,04.(9880n)n1++   n = 3  %O = 61,5%","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q22","number":22,"part":3,"type":"short_answer","text":"Để xác định công thức của oleum (H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>), người ta pha loãng 8,36 gam oleum vào nước thành 1,0 lít dung dịch sulfuric acid, sau đó tiến hành chuẩn độ mỗi 10,0 mL dung dịch acid này bằng dung dịch NaOH 0,10 M. Thể tích NaOH trung bình cần sử dụng để chuẩn độ là 20,01 mL. Giá trị của n là bao nhiêu?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4.<br/>H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l) + nH<sub>2</sub>O(l) → (n + 1)H<sub>2</sub>SO<sub>4</sub>(aq)<br/>x                                    (n + 1)x                 (mol)<br/>Số mol H<sub>2</sub>SO<sub>4</sub> trong dung dịch sau pha loãng là (n + 1)x mol<br/>0,1 = (n + 1). 8,369880n+  ⇒ n = 4. Vậy công thức của oleum là H<sub>2</sub>SO<sub>4</sub>.4SO<sub>3</sub>","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q23","number":23,"part":3,"type":"short_answer","text":"Tại nhiều làng nghề thủ công mĩ nghệ, sulfur dioxide được dùng là chất chống mốc cho các sản phẩm mây tre đan. Trong một ngày, một làng nghề đốt cháy 16 kg sulfur để tạo thành sulfur dioxide, hiệu suất phản ứng đạt 80%. Giả thiết có 20% lượng khí SO<sub>2</sub> trên bay vào khí quyền và chuyển hoá hết thành H<sub>2</sub>SO<sub>4</sub> trong nước mưa theo sơ đồ:  22OHO2324xtSO SO HSO++ →  → . Toàn bộ lượng acid trong nước mưa trên ăn mòn tối đa bao nhiêu kg CaCO<sub>3</sub> ở các công trình kiến trúc bằng đá?","images":[],"correctAnswer":"8","explanation":"Đáp án: 8.<br/>ot22SOSO+ → <br/>400400 (mol)<br/>224SOHSOnn400.20%80mol===<br/>CaCO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub>CaSO<sub>4</sub> + CO<sub>2</sub> + H<sub>2</sub>O<br/>mCaCO<sub>3</sub> = 100.80 = 8 kg","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q24","number":24,"part":3,"type":"short_answer","text":"Sulfur dioxide là một trong các tác nhân gây mưa acid, phát thải chủ yếu từ các quá trình đốt cháy nhiên liệu như than đá, xăng, dầu,… Một nhà máy nhiệt điện than sử dụng hết 4800 tấn than (có thành phần chứa 1% sulfur về khối lượng để làm nhiên liệu), chuyển hóa 80% sulfur trong than thành sulfur dioxide. Giả thiết có 1% lượng khí SO<sub>2</sub> tạo ra trong một ngày phát thải vào khí quyển rồi chuyển hóa hết thành H<sub>2</sub>SO<sub>4</sub> trong nước mưa; nồng độ sulfuric acid trong nước mưa là 2.10<sup>-5</sup> M. Nếu toàn bộ lượng nước mưa bị nhiễm acid rơi trên một vùng đất 60 km<sup>2</sup> thì tạo ra một cơn mưa với lượng mưa trung bình là bao nhiêu mm?","images":[],"correctAnswer":"10","explanation":"Đáp án: 10.<br/>ot22SOSO+ → <br/>ta có:  2246SOHSO4800.10n.1%.80%.1%12000(mol)n32===<br/>Thể tích nước mưa bị nhiễm acid là  853512000V6.10L6.10m2.10-===<br/>Lượng mưa trung bình là  526.100,01m10mm60.(1000)==","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q25","number":25,"part":3,"type":"short_answer","text":"Hỗn hợp (X) gồm Mg và Fe<sub>2</sub>O<sub>3</sub> có khối lượng 20 gam tan hết trong dung dịch H<sub>2</sub>SO<sub>4</sub> loãng thoát ra a L khí H<sub>2</sub> (đkc) và tạo thành dung dịch (Y). Thêm dung dịch NaOH dư vào dung dịch (Y) và lọc kết tủa, tách ra nung đến khối lượng không đổi thu được 28 gam chất rắn. Phần trăm khối lượng Mg trong hỗn hợp (X) là bao nhiêu %?","images":[],"correctAnswer":"60","explanation":"Đáp án: 60.<br/>E5555FE55555FFe(SO)Fe(OH)FeOFeOXddYr¾nMgMgOMgSOMg(OH)20gam28gam24332323NaOHtHSO42240îîîîíííí →  →  → ìììì++<br/>Vậy khối lượng ban đầu và kết thúc chênh lệch nhau ở khối lượng nguyên tố oxygen của Mg.<br/>BTKLO(MgO)OMgOMg824.0,5m28208gamnn0,5mol%m60%.1620 → =-=Þ===Þ==","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q26","number":26,"part":3,"type":"short_answer","text":"Trong sản xuất phân bón, supephosphate kép chứa thành phần dinh dưỡng là Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>, được sản xuất từ quặng phosphorite theo hai giai đoạn sau:<br/>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 3H<sub>2</sub>SO<sub>4</sub> &rarr; 2H<sub>3</sub>PO<sub>4</sub> + 3CaSO<sub>4</sub><br/>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 4H<sub>3</sub>PO<sub>4</sub> &rarr; 3Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub><br/>Để sản xuất được 1 tấn Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub> với hiệu suất của cả quá trình là 80% thì cần bao nhiêu tấn dung dịch H<sub>2</sub>SO<sub>4</sub> 70%? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"1,5","explanation":"Đáp án: 1,5.<br/>32243444(PO)8547,9    5698,0molCa 3HSO2HPO 3CaSO → ¬¾+¾+<br/>32342424(PO)(HPO)5698,9     4273,5molCa 4HPO3Ca → ¬+¾¾<br/>Khối lượng dung dịch H<sub>2</sub>SO<sub>4</sub> 70% cần dùng là<br/>24HSO100100m 8547.98..  1.495.725 (g)7080== ≈ 1,5 tấn","explanationImages":[],"points":0.25},{"id":"h11_b8_p3_q27","number":27,"part":3,"type":"short_answer","text":"Đặt hai cốc (A) và (B) có khối lượng bằng nhau lên đĩa cân thấy cân thăng bằng. Cho vào cốc (A) 102 gam AgNO<sub>3</sub> dạng rắn; cốc (B) 124,2 gam K<sub>2</sub>CO<sub>3</sub> dạng rắn. Thêm 100 gam dung dịch HCl 29,2% vào cốc (A); 100 gam dung dịch H<sub>2</sub>SO<sub>4</sub> 24,5% vào cốc (B). Phải thêm bao nhiêu gam nước vào cốc (A) (hay cốc (B)) để cân trở lại thăng bằng?","images":[],"correctAnswer":"11,2","explanation":"Đáp án: 11,2.<br/>Xét cốc (A): AgNO<sub>3</sub> + HCl → AgCl↓ + HNO<sub>3</sub><br/>0,6    <    0,8 → 0,6 → 0,6          mol<br/>Phản ứng không tạo khí  Þ  m<sub>A (sau pư)</sub> = 102 + 100 = 202 (g)<br/>Xét cốc (B): K<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → K<sub>2</sub>SO<sub>4</sub> + CO<sub>2</sub>↑ + H<sub>2</sub>O<br/>0,9   >   0,25 → 0,25 → 0,25 mol<br/>Dư: 0,65 mol<br/>Þ  m<sub>B (sau pư)</sub> = 124,2 + 100 – 0,25.44 = 213,2g<br/>m<sub>B</sub> > m<sub>A</sub>  Þ  Khối lượng H<sub>2</sub>O thêm vào cốc A = 213,2 – 202 = 11,2 g<br/>","explanationImages":[],"points":0.25}]}},"bai9":{"id":"bai9","lessonNumber":9,"title":"Bài 9. Tổng ôn tập & Bộ 4 Đề kiểm tra chuẩn Bộ 2025","shortTitle":"Ôn tập & Đề thi","badge":"Bộ 4 Đề Chuẩn","icon":"🏆","description":"Trọn bộ 4 đề thi định kỳ chuẩn cấu trúc ma trận 28 câu của Bộ GD&ĐT (50 phút)","exams":[{"id":"h11_c2_de1","code":"114","title":"Đề Kiểm Tra Số 1 - Đơn Chất Nitrogen & Ammonia (Mã 114)","topic":"Tính chất N2, NH3, muối ammonium & mưa acid","badge":"Mã 114","chapter":2,"duration":50,"totalQuestions":28,"totalPoints":10,"questions":[{"id":"h11_c2_de1_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Phân tử nitrogen có cấu tạo là","images":[],"options":[{"id":"a","letter":"A","text":"N = N","isCorrect":false},{"id":"b","letter":"B","text":"N  º N","isCorrect":true},{"id":"c","letter":"C","text":"N – N","isCorrect":false},{"id":"d","letter":"D","text":"N  ® N","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":1},{"id":"h11_c2_de1_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Trong những nhận xét dưới đây, nhận xét nào là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen không duy trì sự cháy, sự hô hấp và là một khí độc","isCorrect":false},{"id":"b","letter":"B","text":"Ở điều kiện thường, nitrogen trơ về mặt hóa học do phân tử có một liên kết ba bền vững","isCorrect":true},{"id":"c","letter":"C","text":"Trong các phản ứng hóa học, nitrogen chỉ thể hiện tính khử","isCorrect":false},{"id":"d","letter":"D","text":"Số oxi hóa của nitrogen trong các ion và hợp chất NH<sub>4</sub><sup>+</sup>, NO<sub>3</sub><sup>-</sup>, N<sub>2</sub>O lần lượt là -3,+5,+4","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":2},{"id":"h11_c2_de1_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Tã lót trẻ em sau khi giặt vẫn giữ lại một lượng nhỏ ammonia. Để khử sạch ammonia nên dùng chất gì sau đây cho vào nước xả cuối cùng để giặt?","images":[],"options":[{"id":"a","letter":"A","text":"Phèn chua","isCorrect":false},{"id":"b","letter":"B","text":"Giấm ăn","isCorrect":true},{"id":"c","letter":"C","text":"Muối ăn","isCorrect":false},{"id":"d","letter":"D","text":"Gừng tươi","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":3},{"id":"h11_c2_de1_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Công thức phân tử của ammonia là","images":[],"options":[{"id":"a","letter":"A","text":"HNO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"NH<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"N<sub>2</sub>H<sub>4</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":4},{"id":"h11_c2_de1_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Ammonia đóng vai trò chất khử khi tác dụng với chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"HCl","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>3</sub>PO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"O<sub>2</sub> (Pt, t<sup>o</sup>)","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":5},{"id":"h11_c2_de1_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Khi so sánh phân tử ammonia với ion ammonium, nhận định nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Đều chứa liên kết ion","isCorrect":false},{"id":"b","letter":"B","text":"Đều có tính acid yếu trong nước","isCorrect":false},{"id":"c","letter":"C","text":"Đều có tính base yếu trong nước","isCorrect":false},{"id":"d","letter":"D","text":"Đều chứa nguyên tử N có số oxi hoá là -3","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":6},{"id":"h11_c2_de1_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Có thể nhận biết muối ammonium bằng cách cho muối tác dụng với dung dịch kiềm thấy thoát ra một chất khí. Chất khí đó là","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>3</sub>","isCorrect":true},{"id":"b","letter":"B","text":"H<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"NO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NO","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":7},{"id":"h11_c2_de1_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Kim loại nào sau đây không tác dụng với HNO<sub>3</sub> đặc, nóng?","images":[],"options":[{"id":"a","letter":"A","text":"Fe","isCorrect":false},{"id":"b","letter":"B","text":"Cu","isCorrect":false},{"id":"c","letter":"C","text":"Ag","isCorrect":false},{"id":"d","letter":"D","text":"Pt","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":8},{"id":"h11_c2_de1_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Kim loại nào sau đây tác dụng với sulfur ở nhiệt độ thường?","images":[],"options":[{"id":"a","letter":"A","text":"Al","isCorrect":false},{"id":"b","letter":"B","text":"Fe","isCorrect":false},{"id":"c","letter":"C","text":"Hg","isCorrect":true},{"id":"d","letter":"D","text":"Cu","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":9},{"id":"h11_c2_de1_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Nhỏ dung dịch H<sub>2</sub>SO<sub>4</sub> 98% vào cốc đựng đường saccarose khiến đường hóa đen gọi là hiện tượng gì?","images":[],"options":[{"id":"a","letter":"A","text":"Hiện tượng bốc hơi","isCorrect":false},{"id":"b","letter":"B","text":"Hiện tượng than hóa","isCorrect":true},{"id":"c","letter":"C","text":"Hiện tượng đông tụ","isCorrect":false},{"id":"d","letter":"D","text":"Hiện tượng vón cục","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":10},{"id":"h11_c2_de1_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Cho các ứng dụng sau:<br/>(1) sản xuất sulfuric acid;(2) tẩy trắng bột giấy;<br/>(3) diệt nấm mốc, thuốc đông y;(4) diệt trùng nước sinh hoạt.<br/>Số ứng dụng của khí sulfur dioxide trong đời sống, sản suất là","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":false},{"id":"b","letter":"B","text":"2","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":true},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":11},{"id":"h11_c2_de1_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Oxide của nitrogen được tạo thành khi nguyên tố nitrogen trong nhiên liệu hoặc sinh khối kết hợp với oxygen dư thừa trong không khí được gọi là","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>x</sub> tức thời","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>x</sub> nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"NO<sub>x</sub> nhiên liệu","isCorrect":true},{"id":"d","letter":"D","text":"NO<sub>x</sub> tự nhiên","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":12},{"id":"h11_c2_de1_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Phú dưỡng là hiện tượng xảy ra do sự gia tăng hàm lượng của hai nguyên tố nào trong nước?","images":[],"options":[{"id":"a","letter":"A","text":"Fe, Mn","isCorrect":false},{"id":"b","letter":"B","text":"N, P","isCorrect":true},{"id":"c","letter":"C","text":"Ca, Mg","isCorrect":false},{"id":"d","letter":"D","text":"Cl, F","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":13},{"id":"h11_c2_de1_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Sulfur được dân gian sử dụng để pha chế vào thuốc trị các bệnh ngoài da. Tên gọi dân gian của sulfur là","images":[],"options":[{"id":"a","letter":"A","text":"diêm sinh","isCorrect":true},{"id":"b","letter":"B","text":"đá vôi","isCorrect":false},{"id":"c","letter":"C","text":"phèn chua","isCorrect":false},{"id":"d","letter":"D","text":"giấm ăn","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":14},{"id":"h11_c2_de1_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Một nhà máy luyện kim, ở giai đoạn đầu của quá trình sản xuất Zn từ quặng blend thu được sản phẩm phụ là SO<sub>2</sub> theo sơ đồ phản ứng: 2ZnS + 3O<sub>2</sub> &rarr; 2ZnO + 2SO<sub>2</sub><br/>Đốt cháy 1 tấn quặng blend (chứa 77,6% khối lượng ZnS) bằng không khí, thu được tối đa V m<sup>3</sup> khí SO<sub>2</sub> (đkc). Giá trị của V là","images":[],"options":[{"id":"a","letter":"A","text":"99,2","isCorrect":false},{"id":"b","letter":"B","text":"198,3","isCorrect":true},{"id":"c","letter":"C","text":"297,5","isCorrect":false},{"id":"d","letter":"D","text":"396,6","isCorrect":false}],"correctAnswer":"B","explanation":"Đáp án: B.<br/>2ZnS + 3O<sub>2</sub> &rarr; 2ZnO + 2SO<sub>2</sub><br/>m<sub>ZnS</sub> = 1000 &times; 77,6% = 776 kg.<br/>n<sub>ZnS</sub> = 776 / 97 = 8 kmol &rArr; n<sub>SO<sub>2</sub></sub> = 8 kmol.<br/>V<sub>SO<sub>2</sub></sub> = 8 &times; 24,79 = 198,32 m<sup>3</sup> (làm tròn 198,3 m<sup>3</sup>).","explanationImages":[],"points":0.25,"displayNumber":15},{"id":"h11_c2_de1_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Chất nào sau đây không bay hơi ở điều kiện thường do nhiệt độ sôi rất cao (337 <sup>o</sup>C)?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"3HNO","isCorrect":false},{"id":"c","letter":"C","text":"NH<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"24HSO","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":16},{"id":"h11_c2_de1_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Cho vài giọt dung dịch BaCl<sub>2</sub> vào dung dịch nào sau đây sẽ tạo kết tủa trắng?","images":[],"options":[{"id":"a","letter":"A","text":"NaCl","isCorrect":false},{"id":"b","letter":"B","text":"Na<sub>2</sub>SO<sub>4</sub>","isCorrect":true},{"id":"c","letter":"C","text":"NaNO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NaOH","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":17},{"id":"h11_c2_de1_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Sulfur dioxide và các oxide của nitrogen trong khí quyển hòa tan trong nước tạo thành mưa acid. Khẳng định nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Nước mưa có pH > 5,6 được xem là mưa acid","isCorrect":false},{"id":"b","letter":"B","text":"Thành phần chính của mưa acid là H<sub>2</sub>SO<sub>3</sub> và HNO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Công thức hóa học của NO<sub>x</sub> trong khí thải ô tô luôn là NO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Thu hồi sulfur từ các khí thải như H<sub>2</sub>S, SO<sub>2</sub>….có thể làm giảm sự hình thành mưa acid","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":18},{"id":"h11_c2_de1_p2_q1","number":1,"part":2,"type":"true_false","text":"Cho các phát biểu sau về tính chất vật lí của sulfuric acid:","images":[],"options":[{"id":"a","letter":"A","text":"Ở điều kiện thường, sulfuric acid là chất lỏng, không màu và dễ bay hơi","isCorrect":false},{"id":"b","letter":"B","text":"Khi pha loãng sulfuric acid đặc cần phải cho từ từ nước vào acid đặc","isCorrect":false},{"id":"c","letter":"C","text":"Sulfuric acid được sử dụng làm chất hút ẩm trong các bình hút ẩm để làm khô nhiều chất","isCorrect":true},{"id":"d","letter":"D","text":"Sulfuric acid tan vô hạn trong nước là do tạo được liên kết hydrogen với nước","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Sulfuric acid không bay hơi.<br/>b. S. Khi pha loãng sulfuric acid đặc cần phải cho từ từ acid đặc vào nước.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1,"displayNumber":19},{"id":"h11_c2_de1_p2_q2","number":2,"part":2,"type":"true_false","text":"Thực hiện thí nghiệm như hình vẽ sau:","images":["/assets/hoa12/c5/h11_c2_de1_image6.png"],"options":[{"id":"a","letter":"A","text":"Hiện tượng quan sát được là nước phun vào bình thành tia, dung dịch phenolphthalein chuyển sang màu hồng","isCorrect":true},{"id":"b","letter":"B","text":"Thí nghiệm trên chứng minh dung dịch NH<sub>3</sub> có tính acid","isCorrect":false},{"id":"c","letter":"C","text":"Nếu thay khí ammonia bằng khí hydrogen chloride thì hiện tượng thí nghiệm vẫn không thay đổi","isCorrect":false},{"id":"d","letter":"D","text":"Khí ammonia tan nhiều trong nước làm áp suất trong bình tăng dẫn đến nước bị hút vào bình","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. NH<sub>3</sub> có tính base.<br/>c. S. Khí HCl không làm đổi màu dung dịch phenolphtalein.<br/>d. S. Áp suất trong bình giảm","explanationImages":[],"points":1,"displayNumber":20},{"id":"h11_c2_de1_p2_q3","number":3,"part":2,"type":"true_false","text":"Thí nghiệm: Sulfur tác dụng với oxygen.<br/>Chuẩn bị: bột sulfur, bình khí oxygen; muôi sắt, đèn cồn, nút cao su.<br/>Tiến hành:<br/>- Lấy một ít bột sulfur vào muôi sắt (đã cắm xuyên qua nút cao su).<br/>- Hơ nóng muôi sắt trên ngọn lửa đèn cồn đến khi sulfur nóng chảy và cháy một phần trong không khí.<br/>- Đưa nhanh muôi sắt vào bình khí oxygen","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng chứng minh sulfur bị khử bởi oxygen","isCorrect":false},{"id":"b","letter":"B","text":"Sulfur tác dụng với oxygen tạo thành acidic oxide","isCorrect":true},{"id":"c","letter":"C","text":"Sulfur cháy trong không khí với ngọn lửa nhỏ, màu xanh nhạt","isCorrect":true},{"id":"d","letter":"D","text":"Nếu đốt cháy hoàn toàn 6,4 gam sulfur trong khí oxygen dư thì thể tích khí SO<sub>2</sub> ở đkc thu được là 4,958 L","isCorrect":true}],"explanation":"Đáp án:<br/>ot22SOSO+ → <br/>a. S. Sulfur thể hiện tính khử bị oxi hóa bởi oxygen.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ. V = 0,2.24,79 = 4,958 L","explanationImages":[],"points":1,"displayNumber":21},{"id":"h11_c2_de1_p2_q4","number":4,"part":2,"type":"true_false","text":"Trong những cơ mưa dông kèm sấm sét, sự chuyển hoá của nitrogen đơn chất xảy ra theo sơ đồ sau:<br/>N<sub>2</sub> &rarr; NO &rarr; NO<sub>2</sub> &rarr; HNO<sub>3</sub> &rarr; H<sup>+</sup> + NO<sub>3</sub><sup>-</sup>","images":[],"options":[{"id":"a","letter":"A","text":"Trong sơ đồ trên, có ba chất khí gây ô nhiễm môi trường","isCorrect":false},{"id":"b","letter":"B","text":"Các phản ứng trong sơ đồ trên đều xảy ra quá trình oxi hóa khử","isCorrect":false},{"id":"c","letter":"C","text":"Ion nitrate  3(NO)-  tạo thành ở quá trình (4) là một dạng đạm cây trồng hấp thụ được để sinh trưởng, phát triển","isCorrect":true},{"id":"d","letter":"D","text":"Sơ đồ cũng áp dụng để giải thích sự tạo thành HNO<sub>3</sub> từ hoạt động đốt cháy nhiên liệu bằng không khí của phương tiện giao thông vận tải","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Có 2 chất khí gây ô nhiễm môi trường là NO, NO<sub>2</sub>.<br/>b. S. (4) không phải là phản ứng oxi hóa khử.<br/>c. Đ.<br/>d. Đ. Quá trình đốt cháy nhiên liệu ở nhiệt độ cao bằng không khí cũng phát thải các oxide của nitrogen vào khí quyển","explanationImages":[],"points":1,"displayNumber":22},{"id":"h11_c2_de1_p3_q1","number":1,"part":3,"type":"short_answer","text":"Phương pháp điều chế H<sub>2</sub>SO<sub>4</sub> từ quặng pyrite sắt (FeS<sub>2</sub>) trong công nghiệp trải qua mấy giai đoạn?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25,"displayNumber":23},{"id":"h11_c2_de1_p3_q2","number":2,"part":3,"type":"short_answer","text":"Cho các chất khí sau: H<sub>2</sub>S, NO, NO<sub>2</sub>, SO<sub>2</sub> và N<sub>2</sub>. Có bao nhiêu chất khí gây ô nhiễm môi trường khi phát thải vào không khí?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25,"displayNumber":24},{"id":"h11_c2_de1_p3_q3","number":3,"part":3,"type":"short_answer","text":"Tiến hành thí nghiệm trộn từng cặp dung dịch sau: (a) NH<sub>3</sub> và AlCl<sub>3</sub>; (b) (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> và Ba(OH)<sub>2</sub>; (c) NH<sub>4</sub>Cl và AgNO<sub>3</sub>; (d) Na<sub>2</sub>SO<sub>4</sub> và MgCl<sub>2</sub>. Sau khi phản ứng kết thúc, có bao nhiêu thí nghiệm thu được kết tủa?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25,"displayNumber":25},{"id":"h11_c2_de1_p3_q4","number":4,"part":3,"type":"short_answer","text":"Trong điều kiện thích hợp, xảy ra các phản ứng sau:<br/>(a) 2H<sub>2</sub>SO<sub>4</sub> + C → 2SO<sub>2</sub> + CO<sub>2</sub> + 2H<sub>2</sub>O.<br/>(b) H<sub>2</sub>SO<sub>4</sub> + Fe(OH)<sub>2</sub> → FeSO<sub>4</sub> + 2H<sub>2</sub>O.<br/>(c) 4H<sub>2</sub>SO<sub>4</sub> + 2FeO → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + SO<sub>2</sub> + 4H<sub>2</sub>O.<br/>(d) 2H<sub>2</sub>SO<sub>4</sub> + Cu → CuSO<sub>4</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O.<br/>(e)  2244CaF  HSO CaSO  2HF+ → +<br/>Trong các phản ứng trên, có bao nhiêu phản ứng xảy ra với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng?","images":[],"correctAnswer":"1","explanation":"Đáp án: 1","explanationImages":[],"points":0.25,"displayNumber":26},{"id":"h11_c2_de1_p3_q5","number":5,"part":3,"type":"short_answer","text":"Một phương pháp được đề xuất để loại bỏ SO<sub>2</sub> khỏi khí thải của nhà máy điện bằng cách dẫn khí thải qua dung dịch H<sub>2</sub>S. Cần tối đa bao nhiêu m<sup>3</sup> H<sub>2</sub>S (ở đkc) để loại bỏ SO<sub>2</sub> sinh ra khi đốt cháy 2,0 tấn than chứa sulfur chiếm 3% theo khối lượng? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"93","explanation":"Đáp án: 93.<br/>S + O<sub>2</sub>SO<sub>2</sub><br/>2H<sub>2</sub>S + SO<sub>2</sub>  3S + 2H<sub>2</sub>O<br/>2SHS2000.3%n1,875kmoln1,875.2 = 3,75kmol32==Þ=<br/>V = 3,75.24,79 = 92,9625 m<sup>3</sup>","explanationImages":[],"points":0.25,"displayNumber":27},{"id":"h11_c2_de1_p3_q6","number":6,"part":3,"type":"short_answer","text":"Trong công nghiệp, người ta sản xuất nitric acid (HNO<sub>3</sub>) từ ammonia theo sơ đồ chuyển hoá sau:<br/>NH<sub>3</sub> &rarr; NO &rarr; NO<sub>2</sub> &rarr; HNO<sub>3</sub> <br/>Để điều chế 2000 tấn nitric acid có nồng độ 60% cần dùng bao nhiêu tấn ammonia? Biết rằng hiệu suất của quá trình sản xuất nitric acid theo sơ đồ trên là 92%. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"352","explanation":"Đáp án: 352.<br/>Khối lượng HNO<sub>3</sub> nguyên chất là: 2000.0,6 = 1200 tấn<br/>Sơ đồ phản ứng điều chế HNO<sub>3</sub> từ NH<sub>3</sub><br/>NH<sub>3</sub> → NO → NO<sub>2</sub> → HNO<sub>3</sub><br/>17g                                    63g<br/>x tấn                                  1200 tấn<br/>3NH1200.171m.3526392%== tấn<br/>","explanationImages":[],"points":0.25,"displayNumber":28}]},{"id":"h11_c2_de2","code":"115","title":"Đề Kiểm Tra Số 2 - Sulfur & SO2 (Mã 115)","topic":"Tính oxi hóa - khử của sulfur, sulfur dioxide & ô nhiễm khí thải","badge":"Mã 115","chapter":2,"duration":50,"totalQuestions":27,"totalPoints":10,"questions":[{"id":"h11_c2_de2_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Công thức hóa học của diêm tiêu Chile là","images":[],"options":[{"id":"a","letter":"A","text":"Ca(NO<sub>3</sub>)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NH<sub>4</sub>NO<sub>3.</sub>","isCorrect":false},{"id":"c","letter":"C","text":"NH<sub>4</sub>Cl","isCorrect":false},{"id":"d","letter":"D","text":"NaNO<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":1},{"id":"h11_c2_de2_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Nhận định nào sau đây về phân tử nitrogen là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Có ba liên kết đơn bền vững","isCorrect":false},{"id":"b","letter":"B","text":"Chứa nguyên tử nitrogen có số oxi hóa là -3","isCorrect":false},{"id":"c","letter":"C","text":"Có liên kết cộng hóa trị có cực","isCorrect":false},{"id":"d","letter":"D","text":"Thể hiện cả tính oxi hóa và tính khử","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":2},{"id":"h11_c2_de2_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Khi tác dụng với nước và hydrochloric acid, ammonia đóng vai trò là","images":[],"options":[{"id":"a","letter":"A","text":"acid","isCorrect":false},{"id":"b","letter":"B","text":"base","isCorrect":true},{"id":"c","letter":"C","text":"chất oxi hóa","isCorrect":false},{"id":"d","letter":"D","text":"chất khử","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":3},{"id":"h11_c2_de2_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Trong công nghiệp, phần lớn sulfur đơn chất sau khi khai thác ở các mỏ được dùng làm nguyên liệu để","images":[],"options":[{"id":"a","letter":"A","text":"lưu hóa cao su tự nhiên","isCorrect":false},{"id":"b","letter":"B","text":"sản xuất sulfuric acid","isCorrect":true},{"id":"c","letter":"C","text":"điều chế thuốc bảo vệ thực vật","isCorrect":false},{"id":"d","letter":"D","text":"bào chế thuốc đông y","isCorrect":false}],"correctAnswer":"B","explanation":"Khoảng 90% lượng sulfur sản xuất trên thế giới được dùng để sản xuất sulfuric acid.","explanationImages":[],"points":0.25,"displayNumber":4},{"id":"h11_c2_de2_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Nhiệt phân hoàn toàn muối nào sau đây thu được sản phẩm chỉ gồm khí và hơi?","images":[],"options":[{"id":"a","letter":"A","text":"NaCl","isCorrect":false},{"id":"b","letter":"B","text":"CaCO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"KClO<sub>3</sub>","isCorrect":false},{"id":"d","letter":"D","text":"NH<sub>4</sub>HCO<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"NH<sub>4</sub>HCO<sub>3</sub> (t<sup>o</sup>) &rarr; NH<sub>3</sub>(k) + CO<sub>2</sub>(k) + H<sub>2</sub>O(hơi). Sản phẩm 100% gồm khí và hơi.","explanationImages":[],"points":0.25,"displayNumber":5},{"id":"h11_c2_de2_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Nguyên tố sulfur có số hiệu nguyên tử là 16. Vị trí của sulfur trong bảng tuần hoàn các nguyên tố hóa học là","images":[],"options":[{"id": "a", "letter": "A", "text": "chu kì 3, nhóm VI", "isCorrect": true}, {"id": "b", "letter": "B", "text": "chu kì 5, nhóm VI", "isCorrect": false}, {"id": "c", "letter": "C", "text": "chu kì 3, nhóm IV", "isCorrect": false}, {"id": "d", "letter": "D", "text": "chu kì 5, nhóm IV", "isCorrect": false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":5},{"id":"h11_c2_de2_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Thuốc thử duy nhất để nhận biết 4 dung dịch đựng trong 4 lọ mất nhãn là KOH, NH<sub>4</sub>Cl K<sub>2</sub>SO<sub>4</sub>, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"dung dịch AgNO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"dung dịch BaCl<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"dung dịch NaOH","isCorrect":false},{"id":"d","letter":"D","text":"dung dịch Ba(OH)<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":6},{"id":"h11_c2_de2_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Hoạt động nào sau đây góp phần gây nên hiện tượng phú dưỡng?","images":[],"options":[{"id":"a","letter":"A","text":"Sự quang hợp của cây xanh","isCorrect":false},{"id":"b","letter":"B","text":"Nước thải sinh hoạt thải trực tiếp vào nguồn nước chưa qua xử lí","isCorrect":true},{"id":"c","letter":"C","text":"Ao hồ thả quá nhiều tôm, cá","isCorrect":false},{"id":"d","letter":"D","text":"Khử trùng ao hồ sau khi tát cạn bằng vôi sống (CaO)","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":7},{"id":"h11_c2_de2_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Nitric acid dễ bị phân hủy bởi ánh sáng hoặc nhiệt độ tạo thành các sản phẩm là","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>2</sub>, H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>O","isCorrect":true},{"id":"c","letter":"C","text":"N<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"N<sub>2</sub>. H<sub>2</sub>O","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":8},{"id":"h11_c2_de2_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Các chất khí được thu vào bình theo đúng nguyên tắc bằng cách đẩy không khí (X, Y, Z) và đẩy nước (T) như sau:<br/>Nhận xét nào sau đây không đúng?","images":["/assets/hoa12/c5/h11_c2_de2_image1.png"],"options":[{"id":"a","letter":"A","text":"X là sulfur dioxide","isCorrect":false},{"id":"b","letter":"B","text":"Y là ammonia","isCorrect":false},{"id":"c","letter":"C","text":"Z là hydrogen","isCorrect":true},{"id":"d","letter":"D","text":"T là nitrogen","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":9},{"id":"h11_c2_de2_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Ở điều kiện thường, sulfur tồn tại ở dạng tinh thể, được tạo nên từ các phân tử sulfur. Số nguyên tử trong mỗi phân tử sulfur là","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":false},{"id":"b","letter":"B","text":"4","isCorrect":false},{"id":"c","letter":"C","text":"6","isCorrect":false},{"id":"d","letter":"D","text":"8","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":10},{"id":"h11_c2_de2_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Chất khí (X) tan trong nước tạo ra dung dịch làm quỳ tím hoá đỏ và khí (X) có thể được dùng làm chất tẩy màu. Khi (X) là","images":[],"options":[{"id":"a","letter":"A","text":"NH<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"CO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>2</sub>","isCorrect":true},{"id":"d","letter":"D","text":"O<sub>3</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":11},{"id":"h11_c2_de2_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Thạch cao sống là một dạng tồn tại phổ biến của sulfur trong tự nhiên, được sử dụng làm nguyên liệu để sản xuất xi măng, phấn viết bảng, … Công thức của thạch cao sống là","images":[],"options":[{"id":"a","letter":"A","text":"BaSO<sub>4</sub>","isCorrect":false},{"id":"b","letter":"B","text":"CaSO<sub>4</sub>.2H<sub>2</sub>O","isCorrect":true},{"id":"c","letter":"C","text":"MgSO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"CuSO<sub>4</sub>.5H<sub>2</sub>O","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":12},{"id":"h11_c2_de2_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Tính chất nào sau đây không phải tính chất vật lí của sulfur?","images":[],"options":[{"id":"a","letter":"A","text":"Màu vàng ở điều kiện thường","isCorrect":false},{"id":"b","letter":"B","text":"Thể rắn ở điều kiện thường","isCorrect":false},{"id":"c","letter":"C","text":"Không tan trong benzene","isCorrect":true},{"id":"d","letter":"D","text":"Không tan trong nước","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":13},{"id":"h11_c2_de2_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Xét phản ứng tổng hợp ammonia theo phương trình hoá học:<br/>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ (xt, t°, p) 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -92 kJ<br/>Cho các yếu tố sau: (a) tăng nhiệt độ, (b) tách ammonia ra khỏi hỗn hợp phản ứng, (c) giảm thể tích của hệ phản ứng, (d) thêm H<sub>2</sub>. Có bao nhiêu yếu tố làm tăng hiệu suất tổng hợp NH<sub>3</sub>?","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":false},{"id":"b","letter":"B","text":"2","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":true},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":14},{"id":"h11_c2_de2_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Cho các phát biểu sau:<br/>(a) Sulfuric acid tan tốt trong nước, quá trình hòa tan tỏa nhiệt mạnh.<br/>(b) Dung dịch sulfuric acid đặc hòa tan được tất cả các kim loại.<br/>(c) Dung dịch sulfuric acid đặc có tính háo nước và tính oxi hóa mạnh.<br/>(d) Nhiều muối sulfate tan tốt trong nước nhưng một số muối như CaSO<sub>4</sub>, BaSO<sub>4</sub> rất ít tan trong nước.<br/>(e) Khi bị bỏng sulfuric acid đặc, điều đầu tiên cần làm là xả nhanh chỗ bỏng với nước lạnh.<br/>Số phát biểu đúng là","images":[],"options":[{"id":"a","letter":"A","text":"5","isCorrect":false},{"id":"b","letter":"B","text":"2","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":15},{"id":"h11_c2_de2_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(a) S + O<sub>2</sub> → (t°) SO<sub>2</sub> (b) Hg + S → HgS<br/>(c) S + 6HNO<sub>3</sub> → H<sub>2</sub>SO<sub>4</sub>+ 6NO<sub>2</sub> + 2H<sub>2</sub>O (d) Fe + S → (t°) FeS<br/>Có bao nhiêu phản ứng trong đó sulfur đóng vai trò là chất khử?","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":false},{"id":"b","letter":"B","text":"2","isCorrect":true},{"id":"c","letter":"C","text":"3","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":16},{"id":"h11_c2_de2_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Hòa tan hết m gam oxide của kim loại M (hóa trị II) vào dung dịch H<sub>2</sub>SO<sub>4</sub> loãng, thu được 3m gam muối sulfate. Công thức của oxide kim loại là","images":[],"options":[{"id":"a","letter":"A","text":"ZnO","isCorrect":false},{"id":"b","letter":"B","text":"CuO","isCorrect":false},{"id":"c","letter":"C","text":"CaO","isCorrect":false},{"id":"d","letter":"D","text":"MgO","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":17},{"id":"h11_c2_de2_p2_q1","number":1,"part":2,"type":"true_false","text":"Mỗi năm có hàng triệu tấn nitrogen được sản xuất toàn cầu; trong đó nitrogen dạng khí chiếm khoảng hai phần ba, còn lại là nitrogen lỏng","images":[],"options":[{"id":"a","letter":"A","text":"Trong chữa cháy, nitrogen dùng để dập tắt các đám cháy do hóa chất, chập điện","isCorrect":true},{"id":"b","letter":"B","text":"Trong công nghiệp thực phẩm, nitrogen lỏng được sử dụng làm lạnh nhanh, bảo quản thực phẩm","isCorrect":true},{"id":"c","letter":"C","text":"Trong công nghệ đóng gói thực phẩm, khí nitrogen được bơm vào túi để loại bỏ khí oxygen và làm phồng bao","isCorrect":true},{"id":"d","letter":"D","text":"Trong lĩnh vực sinh học và y học, các mẫu vật sinh học được bảo quản trong bình nitrogen lỏng","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1,"displayNumber":18},{"id":"h11_c2_de2_p2_q2","number":2,"part":2,"type":"true_false","text":"Cho các nhận định sau về cấu tạo phân tử ammonia:","images":[],"options":[{"id":"a","letter":"A","text":"Phân tử có dạng hình chóp tam giác","isCorrect":true},{"id":"c","letter":"C","text":"Xung quanh nguyên tử N có 3 cặp electron hoá trị","isCorrect":false},{"id":"d","letter":"D","text":"Phân tử ammonia là phân tử cực","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. S. Liên kết N-H tương đối bền.<br/>c. S. Xung quanh nguyên tử N có 1 cặp electron hoá trị.<br/>d. Đ","explanationImages":[],"points":1,"displayNumber":19},{"id":"h11_c2_de2_p2_q3","number":3,"part":2,"type":"true_false","text":"Hình ảnh dưới đây mô tả về quá trình hình thành mưa acid:","images":["/assets/hoa12/c5/h11_c2_de2_image6.png"],"options":[{"id":"a","letter":"A","text":"Nước mưa có độ pH nhỏ hơn 5,6 được gọi là hiện tượng mưa acid","isCorrect":true},{"id":"b","letter":"B","text":"Tác nhân chính gây mưa acid là hỗn hợp khí SO<sub>2</sub> và NO<sub>x</sub>","isCorrect":true},{"id":"c","letter":"C","text":"Hoạt động của núi lửa, cháy rừng, sấm sét hoặc do con người tiêu thụ các nhiên liệu như than đá, dầu mỏ … làm phát sinh ra nhiều khí SO<sub>2</sub>, NO<sub>x</sub>","isCorrect":true},{"id":"d","letter":"D","text":"Dưới xúc tác của của ánh sáng mặt trời SO<sub>2</sub>, NO<sub>x</sub> bị oxi hoá, sau đó hoà tan trong nước mưa rơi xuống mặt đất, ao hồ … tạo thành hiện tượng mưa acid","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Dưới xúc tác của các ion kim loại trong khói bụi SO<sub>2</sub>, NO<sub>x</sub> bị oxi hoá","explanationImages":[],"points":1,"displayNumber":20},{"id":"h11_c2_de2_p2_q4","number":4,"part":2,"type":"true_false","text":"Cho sơ đồ điều chế sulfuric acid từ quặng pyrite theo 3 giai đoạn như sau:<br/>(1)(2)(3)22324FeSSOSOHSO →  →  →","images":[],"options":[{"id":"a","letter":"A","text":"Có 3 phản úng oxi hoá khử trong sơ đồ điều chế trên","isCorrect":false},{"id":"b","letter":"B","text":"Sản xuất sulfuric acid theo quy trình trên gọi là phương pháp tiếp xúc","isCorrect":true},{"id":"c","letter":"C","text":"Ở giai đoạn 3 người ta dùng dung dịch H<sub>2</sub>SO<sub>4</sub> đặc 98% để hấp thụ SO<sub>3</sub>, sản phẩm thu được gọi là oleum","isCorrect":true},{"id":"d","letter":"D","text":"Một loại quặng pyrite chứa 96% FeS<sub>2</sub>. Nếu mỗi ngày nhà máy sản xuất 100 tấn sulfuric acid 98% thì cần 70,46 tấn quặng pyrite với hiệu suất của cả quá trình sản xuất là 90%","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Có 2 phản ứng oxi hóa khử gồm có giai đoạn 1, 2.<br/>b. Đ.<br/>c. Đ. nSO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub><br/>d. S. FeS<sub>2</sub>  2H<sub>2</sub>SO<sub>4</sub><br/>HSO24m100.98%98==  tấn   HSOFeSFeS24220,5.120n1n0,5m90%=Þ=Þ=<br/>Vậy mquặng =  FeS2m69,4496%=  tấn","explanationImages":[],"points":1,"displayNumber":21},{"id":"h11_c2_de2_p3_q1","number":1,"part":3,"type":"short_answer","text":"Có bao nhiêu liên kết cộng hóa trị trong ion muối ammonium?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25,"displayNumber":22},{"id":"h11_c2_de2_p3_q2","number":2,"part":3,"type":"short_answer","text":"Cho dung dịch HNO<sub>3</sub> tác dụng với các chất sau: NH<sub>3</sub>, Cu, CaCO<sub>3</sub>, Fe<sub>3</sub>O<sub>4</sub> và NaOH. Có bao nhiêu phản ứng trong đó HNO<sub>3</sub> đóng vai trò acid theo Bronsted?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25,"displayNumber":23},{"id":"h11_c2_de2_p3_q3","number":3,"part":3,"type":"short_answer","text":"Bột đá vôi cỏ thể được sử dụng để xử lí khí thải chứa sulfur dioxide từ các nhà máy điện đốt than và dầu mỏ. Phương trình hoá học của phản ứng là: CaCO<sub>3</sub>(s) + SO<sub>2</sub>(g) → CaSO<sub>3</sub>(s) + CO<sub>2</sub>(g)<br/>Tính giá trị biến thiên enthalpy chuẩn của phản ứng trên (đơn vị kJ) theo số liệu giá trị enthalpy tạo thành chuẩn của các hợp chất trong bảng sau đây.<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Hợp chất</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">CaCO3 (s)</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">SO<sub>2</sub> (g)</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">CaSO3 (s)</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">CO<sub>2</sub> (g)</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">(kJ/mol)</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">–1207,6</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">–296,8</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">–1634,9</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">–393,5</td></tr></table></div>","images":[],"correctAnswer":"−524","explanation":"Đáp án: −524.<br/>CaCO<sub>3</sub>(s) + SO<sub>2</sub>(g) → CaSO<sub>3</sub>(s) + CO<sub>2</sub>(g)<br/>= [−1634,9 + (−393,5)] – [−1207,6 + (−296,8)] = −524 kJ","explanationImages":[],"points":0.25,"displayNumber":24},{"id":"h11_c2_de2_p3_q4","number":4,"part":3,"type":"short_answer","text":"Cho các loại khoáng vật sau: blend (ZnS), chalcopyrite (CuFeS<sub>2</sub>), thạch cao (CaSO<sub>4</sub>), pyrite (FeS<sub>2</sub>). Có bao nhiêu khoáng vật có thành phần chính chứa muối sulfide?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25,"displayNumber":25},{"id":"h11_c2_de2_p3_q5","number":5,"part":3,"type":"short_answer","text":"Khí sulfur dioxide có khả năng tẩy trắng và sát trùng nên được dùng làm chất chống mốc cho các sản phẩm mây tre đan tại nhiều làng nghề. Trong 1 ngày, một làng nghề đốt cháy 12,8 kg sulfur để tạo thành V m<sup>3</sup> khí sulfur dioxide với hiệu suất là 80%. Vậy trong 30 ngày lượng thể tích khí sulfur dioxide tạo thành là bao nhiêu m<sup>3</sup>? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"238","explanation":"Đáp án: 238.<br/>S + O<sub>2</sub> → (t°)  SO<sub>2</sub><br/>0,4 kmol<br/>23SOV0,4.24,79.80%.30238m==","explanationImages":[],"points":0.25,"displayNumber":26},{"id":"h11_c2_de2_p3_q6","number":6,"part":3,"type":"short_answer","text":"Hỗn hợp X gồm N<sub>2</sub> và H<sub>2</sub> có tỉ lệ mol tương ứng là 1 : 3. Nung nóng X trong bình kín (450℃, xúc tác Fe) một thời gian, thu được hỗn hợp khí có số mol giảm 5% so với ban đầu. Hiệu suất của phản ứng tổng hợp NH<sub>3</sub> là bao nhiêu phần trăm?","images":[],"correctAnswer":"10","explanation":"Đáp án: 10.<br/>Chọn  22NHn1moln3mol=Þ=   Tổng số mol khí ban đầu là 4 mol  Þ  n<sub>khí giảm</sub> = 4.5% = 0,2 mol<br/>32223N(g)       H(g)NH(g)Ban ñaàu:      1                   3(mol)Phaûn öùng:    x                   3x+ ⇌ 2x            (mol)Caân baèng:  1-x                3-3x2x            (mol)<br/>Tổng số mol khí sau khi phản ứng là 1 – x + 3 – 3x + 2x = 4 – 2x (mol)<br/>Số mol khí giảm so với ban đầu là 2x  Þ  2x = 0,2  Þ  x = 0,1  Þ  H% =  0,1.100%10%.1=<br/>","explanationImages":[],"points":0.25,"displayNumber":27}]},{"id":"h11_c2_de3","code":"116","title":"Đề Kiểm Tra Số 3 - H2SO4 & Muối Sulfate (Mã 116)","topic":"Tính acid mạnh, tính oxi hóa mạnh của H2SO4 đặc & Nhận biết ion Ba2+","badge":"Mã 116","chapter":2,"duration":50,"totalQuestions":28,"totalPoints":10,"questions":[{"id":"h11_c2_de3_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Vị trí (chu kì, nhóm) của nguyên tố nitrogen trong bảng tuần hoàn là","images":[],"options":[{"id": "a", "letter": "A", "text": "Chu kì 2, nhóm V", "isCorrect": true}, {"id": "b", "letter": "B", "text": "chu kì 3, nhóm V", "isCorrect": false}, {"id": "c", "letter": "C", "text": "chu kì 2, nhóm VI", "isCorrect": false}, {"id": "d", "letter": "D", "text": "chu kì 3, nhóm IV", "isCorrect": false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":1},{"id":"h11_c2_de3_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Trong nghiên cứu, khí nitrogen thường được dùng để tạo bầu khí quyển trơ dựa trên cơ sở nào?","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen có tính oxi hóa mạnh","isCorrect":false},{"id":"b","letter":"B","text":"Nitrogen rất bền với nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Nitrogen khó hóa lỏng","isCorrect":false},{"id":"d","letter":"D","text":"Nitrogen không có cực","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":2},{"id":"h11_c2_de3_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Trong các phát biểu sau, phát biểu nào không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Ở điều kiện thường, NH<sub>3</sub> là chất khí không màu","isCorrect":false},{"id":"b","letter":"B","text":"Khí NH<sub>3</sub> nặng hơn không khí","isCorrect":true},{"id":"c","letter":"C","text":"Khí NH<sub>3</sub> dễ hoá lỏng, tan nhiều trong nước","isCorrect":false},{"id":"d","letter":"D","text":"Khí NH<sub>3</sub> có mùi khai, xốc","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":3},{"id":"h11_c2_de3_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Cho dung dịch NH<sub>3</sub>vào dung dịch chất nào sau đây thu được kết tủa trắng?","images":[],"options":[{"id":"a","letter":"A","text":"HCl","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>3</sub>PO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"AlCl<sub>3</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":4},{"id":"h11_c2_de3_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Trong quá trình tổng hợp ammonia theo quy trình Haber (Haber – Bosch), sau khi đã hóa lỏng ammonia, hydrogen và nitrogen sẽ:","images":[],"options":[{"id":"a","letter":"A","text":"qua ống dẫn khí thải và được loại bỏ","isCorrect":false},{"id":"b","letter":"B","text":"đưa trở lại buồng phản ứng để tái sử dụng","isCorrect":true},{"id":"c","letter":"C","text":"tiếp tục qua lò phản ứng số 2 để tăng hiệu suất tổng hợp","isCorrect":false},{"id":"d","letter":"D","text":"hydrogen được tái sử dụng, còn nitrogen loại bỏ dựa vào tỉ trọng","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":5},{"id":"h11_c2_de3_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Muối ammonium tan kém trong nước","isCorrect":false},{"id":"b","letter":"B","text":"Muối ammonium là chất điện li yếu","isCorrect":false},{"id":"c","letter":"C","text":"Muối ammonium kém bền với nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Dung dịch muối ammonium có tính chất base","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":6},{"id":"h11_c2_de3_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Một nhà máy phân bón tổng hợp ammonia với công suất 34 tấn/giờ. Trong một giờ, khối lượng nitrogen và hydrogen đã phản ứng lần lượt là","images":[],"options":[{"id":"a","letter":"A","text":"28 tấn và 2 tấn","isCorrect":false},{"id":"b","letter":"B","text":"14 tấn và 2 tấn","isCorrect":false},{"id":"c","letter":"C","text":"28 tấn và 6 tấn","isCorrect":true},{"id":"d","letter":"D","text":"28 tấn và 4 tấn","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":7},{"id":"h11_c2_de3_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Oxide của nitrogen được tạo thành ở nhiệt độ cao, khi nitrogen có trong không khí bị oxi hóa được gọi là","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>x</sub> tức thời","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>x</sub> nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"NO<sub>x</sub>nhiên liệu","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>x</sub> tự nhiên","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":8},{"id":"h11_c2_de3_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Xét phản ứng hóa học thường xảy ra cùng với quá trình đốt cháy nhiên liệu trong buồn đốt động cơ:  ()()()22rNg  Og2NOg,H180,6kJD=+ ⇌ <br/>Nhận xét nào sau đây về phản ứng là không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen là chất oxi hóa","isCorrect":true},{"id":"b","letter":"B","text":"Phản ứng thuận thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"Hiệu suất phản ứng rất thấp","isCorrect":false},{"id":"d","letter":"D","text":"Nitrogen là chất khử","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":9},{"id":"h11_c2_de3_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Đặc điểm nào sau đây là đúng để giải thích tính kém bền nhiệt của HNO<sub>3</sub>?","images":[],"options":[{"id":"a","letter":"A","text":"Liên kết O – H phân cực mạnh về phía O","isCorrect":false},{"id":"b","letter":"B","text":"Liên kết N  O là liên kết cho nhận kém bền","isCorrect":true},{"id":"c","letter":"C","text":"Nguyên tử N có số oxi hóa +5 là số oxi hóa cao nhất của N","isCorrect":false},{"id":"d","letter":"D","text":"HNO<sub>3</sub> có khả năng nhường proton cho nước","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":10},{"id":"h11_c2_de3_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Trong công nghiệp, quá trình sản xuất Ca(NO<sub>3</sub>)<sub>2</sub> cùng làm phân bón được thực hiện bằng phản ứng giữa dung dịch HNO<sub>3</sub> với hợp chất phổ biến, giá rẻ nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"CaO","isCorrect":false},{"id":"b","letter":"B","text":"Ca(OH)<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"CaCO<sub>3</sub>","isCorrect":true},{"id":"d","letter":"D","text":"CaSO<sub>4</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":11},{"id":"h11_c2_de3_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Các hình ảnh dưới đây mô tả cách pha loãng H<sub>2</sub>SO<sub>4</sub> đặc:<br/>Hình ảnh mô tả đúng cách pha loãng acid đảm bảo an toàn là","images":["/assets/hoa12/c5/h11_c2_de3_image2.png"],"options":[{"id":"a","letter":"A","text":"Hình 1","isCorrect":false},{"id":"b","letter":"B","text":"Hình 2","isCorrect":true},{"id":"c","letter":"C","text":"Hình 3","isCorrect":false},{"id":"d","letter":"D","text":"Hình 4","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":12},{"id":"h11_c2_de3_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Một trong những nguồn nguyên liệu sản xuất sulfuric acid hiện nay là quặng pyrite. Thành phần chính có trong quặng pyrite là","images":[],"options":[{"id":"a","letter":"A","text":"FeS<sub>2</sub>","isCorrect":true},{"id":"b","letter":"B","text":"CuFeS<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"CaSO<sub>4</sub>.H<sub>2</sub>O","isCorrect":false},{"id":"d","letter":"D","text":"HgS","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":13},{"id":"h11_c2_de3_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Phân tử nào sau đây không phân cực?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>S","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"S<sub>8</sub>","isCorrect":true},{"id":"d","letter":"D","text":"H<sub>2</sub>SO<sub>4</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":14},{"id":"h11_c2_de3_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Cho dung dịch NaOH vào 100 ml dung dịch NH<sub>4</sub>NO<sub>3</sub> 1M, đun nóng thu được V lít khí ở đkc. Giá trị của V là","images":[],"options":[{"id":"a","letter":"A","text":"2,4790","isCorrect":true},{"id":"b","letter":"B","text":"4,9580","isCorrect":false},{"id":"c","letter":"C","text":"7,4370","isCorrect":false},{"id":"d","letter":"D","text":"1,2395","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":15},{"id":"h11_c2_de3_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Một bạn học sinh thu khí SO<sub>2</sub> vào bình tam giác và đậy miệng bình bằng bông tẩm dung dịch E (để giữ không cho khí SO<sub>2</sub> bay ra) theo sơ đồ bên. Theo em, để hiệu quả nhất, bạn học sinh cần sử dụng dung dịch E là dung dịch nào sau đây?","images":["/assets/hoa12/c5/h11_c2_de3_image3.png"],"options":[{"id":"a","letter":"A","text":"Giấm ăn","isCorrect":false},{"id":"b","letter":"B","text":"Muối ăn","isCorrect":false},{"id":"c","letter":"C","text":"Nước vôi","isCorrect":true},{"id":"d","letter":"D","text":"Nước máy","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":16},{"id":"h11_c2_de3_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Phản ứng hóa học nào sau đây đóng vai trò chính chuyển hóa sulfur dioxide trong không khí ô nhiễm gây mưa acid?","images":[],"options":[{"id":"a","letter":"A","text":"SO<sub>2</sub> + NaOH → NaHSO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>2</sub> + 2H<sub>2</sub>S → 3S + 2H<sub>2</sub>O","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>2</sub> + H<sub>2</sub>O + Br<sub>2</sub> → 2HBr + H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"SO<sub>2</sub> + NO<sub>2</sub> → SO<sub>3</sub> + NO","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":17},{"id":"h11_c2_de3_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Muối X không tan trong nước và các dung môi hữu cơ. Trong y học, X thường được dùng làm chất cản quang xét nghiệm X-quang đường tiêu hóa. Công thức của X là","images":[],"options":[{"id":"a","letter":"A","text":"BaSO<sub>4</sub>","isCorrect":true},{"id":"b","letter":"B","text":"Na<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"K<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"MgSO<sub>4</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":18},{"id":"h11_c2_de3_p2_q1","number":1,"part":2,"type":"true_false","text":"Nitric acid có công thức Lewis và công thức cấu tạo như hình dưới đây:","images":["/assets/hoa12/c5/h11_c2_de3_image5.png","/assets/hoa12/c5/h11_c2_de3_image6.png"],"options":[{"id":"a","letter":"A","text":"Trong phân tử nitric acid, nguyên tử N có hóa trị là V","isCorrect":false},{"id":"b","letter":"B","text":"Trong phân tử nitric acid, nguyên tử N có số oxi hóa là +4","isCorrect":false},{"id":"c","letter":"C","text":"Liên kết O – H phân cực mạnh về phía nguyên tử oxygen","isCorrect":true},{"id":"d","letter":"D","text":"Liên kết N  O là liên kết cho – nhận","isCorrect":true}],"explanation":"Đáp án:<br/>a. S. Nguyên tử N có hóa trị là IV.<br/>b. S. Nguyên tử N có số oxi hóa là +5.<br/>c. Đ.<br/>d. Đ","explanationImages":[],"points":1,"displayNumber":19},{"id":"h11_c2_de3_p2_q2","number":2,"part":2,"type":"true_false","text":"Nguyên nhân của hiện tượng phú dưỡng là do sự dư thừa chất dinh dưỡng đã cung cấp nguồn thức ăn dồi dào cho sinh vật phù du phát triển mạnh","images":[],"options":[{"id":"a","letter":"A","text":"Thông thường, khi hàm lượng nitrogen trong nước đạt 300  g/Lm  và clorine đạt 20  g/Lm sẽ gây ra hiện tượng phú dưỡng","isCorrect":false},{"id":"b","letter":"B","text":"Hiện tượng phú dưỡng làm giảm hàm lượng oxygen trong nước, gây ảnh hưởng xấu cho các loài sinh vật khác trong ao hồ","isCorrect":true},{"id":"c","letter":"C","text":"Nguồn dinh dưỡng từ ao hồ thường có nguồn gốc từ nước thải nông nghiệp, công nghiệp và sinh hoạt thông qua các cống dẫn nước cố định","isCorrect":true},{"id":"d","letter":"D","text":"Khử trùng ao hồ sau khi tát cạn bằng vôi sống (CaO) cũng góp phần ra hiện tượng phú dưỡng","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Hàm lượng nitrogen và phosphorus.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Không ảnh hưởng","explanationImages":[],"points":1,"displayNumber":20},{"id":"h11_c2_de3_p2_q3","number":3,"part":2,"type":"true_false","text":"Sulfuric acid là hóa chất hàng đầu được dùng trong nhiều ngành sản xuất","images":[],"options":[{"id":"a","letter":"A","text":"Sulfuric acid được sử dụng rộng rãi trong sản xuất phân bón hóa học","isCorrect":true},{"id":"b","letter":"B","text":"Sulfuric acid được sử dụng trong sản xuất chất tẩy rửa, sơn, phẩm màu, thuốc trừ sâu, giấy, chế biến dầu mỏ,","isCorrect":true},{"id":"c","letter":"C","text":"Nguyên liệu chính để sản xuất sulfuric acid trong công nghiệp là các muối sulfate","isCorrect":false},{"id":"d","letter":"D","text":"Trong công nghiệp, sulfuric acid chủ yếu được sản xuất bằng phương pháp sulfate","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Nguyên liệu chính để sản xuất sulfuric acid trong công nghiệp là S, FeS<sub>2</sub>.<br/>d. S. Sulfuric acid chủ yếu được sản xuất bằng phương pháp tiếp xúc","explanationImages":[],"points":1,"displayNumber":21},{"id":"h11_c2_de3_p2_q4","number":4,"part":2,"type":"true_false","text":"Khí SO<sub>2</sub> do các nhà máy thải ra là nguyên nhân chính trong việc gây ô nhiễm môi trường. Theo quy chuẩn kĩ thuật quốc gia về chất lượng không khí xung quanh (QCVN 05:2013/BTNMT) thì nếu lượng SO<sub>2</sub> vượt quá 350  ì g/m<sup>3</sup> không khí đo trong 1 giờ ở thành phố thì coi như không khí bị ô nhiễm","images":[],"options":[{"id":"a","letter":"A","text":"Số oxi hóa của sulfur trong phân tử SO<sub>2</sub> là +2","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>2</sub> là nguyên nhân chính gây ra hiện tượng mưa acid","isCorrect":true},{"id":"c","letter":"C","text":"Nồng độ SO<sub>2</sub> cao gây viêm và kích ứng hệ hô hấp","isCorrect":true},{"id":"d","letter":"D","text":"Nếu lấy 50 lít không khí trong 1 giờ ở một thành phố và phân tích thấy có 0,012 mg SO<sub>2</sub> thì có thể kết luận rằng không khí ở thành phố đó bị ô nhiễm","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Số oxi hóa của S trong SO<sub>2</sub> là +4.<br/>b. Đ.<br/>c. Đ.<br/>d. S.<br/>50 lít = 0,05 m<sup>3</sup> không khí có 0,012 mg = 12  ì g SO<sub>2</sub><br/>1 m<sup>3</sup> không khí có 1.12/0,05 = 240 mg SO<sub>2</sub> < 350  ì g  không khí ở thành phố đó chưa bị ô nhiễm","explanationImages":[],"points":1,"displayNumber":22},{"id":"h11_c2_de3_p3_q1","number":1,"part":3,"type":"short_answer","text":"Cho các nguyên liệu sau: sulfur, quặng pyrite (FeS<sub>2</sub>), không khí, nước, vanadium (V) oxide (V<sub>2</sub>O<sub>5</sub>). Có bao nhiêu nguyên liệu được sử dụng trong công nghiệp sản xuất sulfuric acid?","images":[],"correctAnswer":"5","explanation":"Đáp án: 5","explanationImages":[],"points":0.25,"displayNumber":23},{"id":"h11_c2_de3_p3_q2","number":2,"part":3,"type":"short_answer","text":"Cho các chất sau: S<sub>8</sub>, H<sub>2</sub>S, N<sub>2</sub>, NH<sub>3</sub>, SO<sub>2</sub> và H<sub>2</sub>SO<sub>4</sub>, Có bao nhiêu chất trong dãy chất trên vừa có tính khử vừa có tính oxi hóa?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25,"displayNumber":24},{"id":"h11_c2_de3_p3_q3","number":3,"part":3,"type":"short_answer","text":"Sự phụ thuộc của độ tan khí ammonia trong nước vào nhiệt độ được mô tả ở hình dưới đây:<br/>Nồng độ phần trăm (%) của dung dịch ammonia bão hòa ở 30<sup>o</sup>C là bao nhiêu? (Kết quả làm tròn đến hàng phần mười)","images":["/assets/hoa12/c5/h11_c2_de3_image9.png"],"correctAnswer":"28,6","explanation":"Đáp án: 28,6.<br/>Nồng độ phần trăm của ammonia bão hòa:  C% = [40 / (40 + 100)] &times; 100% = 28,57%","explanationImages":[],"points":0.25,"displayNumber":25},{"id":"h11_c2_de3_p3_q4","number":4,"part":3,"type":"short_answer","text":"Cho 0,008 mol một loại hợp chất oleum (có công thức H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>) vào nước thu được dung dịch X. Để trung hoà dung dịch X cần dùng vừa đủ 48 gam dung dịch NaOH 4%. Tìm giá trị của n?","images":[],"correctAnswer":"2","explanation":"Đáp án: 2","explanationImages":["/assets/hoa12/c5/h11_c2_de3_image13.png"],"points":0.25,"displayNumber":26},{"id":"h11_c2_de3_p3_q5","number":5,"part":3,"type":"short_answer","text":"Phản ứng chuyển hóa hydrogen sulfide trong khí thiên nhiên thành sulfur được thực hiện theo sơ đồ phản ứng: H<sub>2</sub>S + SO<sub>2</sub> → S + H<sub>2</sub>O.<br/>Khối lượng sulfur tối đa tạo ra khi chuyển hóa 1 000 m<sup>3</sup> khí thiên nhiên (đkc) (chứa 5 mg H<sub>2</sub>S/m<sup>3</sup>) là bao nhiêu gam?","images":[],"correctAnswer":"7,06","explanation":"Đáp án: 7,06.<br/>2H<sub>2</sub>S + SO<sub>2</sub> &rarr; 3S + 2H<sub>2</sub>O<br/>m<sub>H<sub>2</sub>S</sub> = 1000 &times; 5 mg = 5000 mg = 5 g &rArr; n<sub>H<sub>2</sub>S</sub> = 5 / 34 mol.<br/>Theo PTHH: n<sub>S</sub> = 3/2 &times; n<sub>H<sub>2</sub>S</sub> = (3/2) &times; (5/34) &approx; 0,2206 mol.<br/>&rArr; m<sub>S</sub> = 0,2206 &times; 32 &approx; 7,06 g.","explanationImages":[],"points":0.25,"displayNumber":27},{"id":"h11_c2_de3_p3_q6","number":6,"part":3,"type":"short_answer","text":"Trong tự nhiên, phản ứng giữa nitrogen và oxygen xảy ra trong những cơn mưa dông sấm sét, khởi đầu cho quá trình chuyển hóa từ nitrogen thành nitric acid. Nitric acid tan trong nước mưa và phân li ra ion nitrate ( 3NO- ) là một dạng phân đạm mà cây trong hấp thụ được để sinh trưởng và phát triển. Quá trình chuyển hóa từ nitrogen thành nitric acid qua mấy giai đoạn?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3.<br/>N<sub>2</sub> &rarr; NO &rarr; NO<sub>2</sub> &rarr; HNO<sub>3</sub> <br/>","explanationImages":[],"points":0.25,"displayNumber":28}]},{"id":"h11_c2_de4","code":"117","title":"Đề Kiểm Tra Tổng Hợp Chương 2 (Mã 117)","topic":"Tổng hợp toàn diện kiến thức Nitrogen và Sulfur","badge":"Mã 117","chapter":2,"duration":50,"totalQuestions":28,"totalPoints":10,"questions":[{"id":"h11_c2_de4_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Trong không khí, chất nào sau đây chiếm phần trăm thể tích lớn nhất?","images":[],"options":[{"id":"a","letter":"A","text":"O<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"NO","isCorrect":false},{"id":"c","letter":"C","text":"CO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"N<sub>2</sub>","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":1},{"id":"h11_c2_de4_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Khí nitrogen trơ về mặt hoá học ở điều kiện thường là do","images":[],"options":[{"id":"a","letter":"A","text":"Phân tử có liên kết ba, năng lượng liên kết nhỏ","isCorrect":false},{"id":"b","letter":"B","text":"Phân tử có liên kết ba, năng lượng liên kết lớn","isCorrect":true},{"id":"c","letter":"C","text":"Phân tử có liên kết đôi, năng lượng liên kết lớn","isCorrect":false},{"id":"d","letter":"D","text":"Phân tử có liên kết đôi, năng lượng liên kết nhỏ","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":2},{"id":"h11_c2_de4_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Các loại bim bim (snack) là món yêu thích của nhiều người, nhất là các bạn trẻ. Lượng bim bim trong các gói thường chỉ chiếm một nửa thể tích, phần còn lại là khí nitrogen. Lí do khí nitrogen được bơm vào gói bim bim là","images":[],"options":[{"id":"a","letter":"A","text":"diệt khuẩn để bảo quản bim bim lâu hơn","isCorrect":false},{"id":"b","letter":"B","text":"tăng tính thẩm mĩ của gói bim bim","isCorrect":false},{"id":"c","letter":"C","text":"tăng khối lượng cho gói bim bim","isCorrect":false},{"id":"d","letter":"D","text":"tạo môi trường trơ bảo quản bim bim","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":3},{"id":"h11_c2_de4_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Phân tử ammonia có dạng hình học nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"Chóp tam giác","isCorrect":true},{"id":"b","letter":"B","text":"Chữ T","isCorrect":false},{"id":"c","letter":"C","text":"Chóp tứ giác","isCorrect":false},{"id":"d","letter":"D","text":"Tam giác đều","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":4},{"id":"h11_c2_de4_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Cho thí nghiệm như hình vẽ, bên trong bình có chứa khí ammonia, trong chậu thủy tinh chứa nước có nhỏ vài giọt phenolphthalein.<br/>Hiện tượng xảy ra trong thí nghiệm là","images":["/assets/hoa12/c5/h11_c2_de4_image8.png"],"options":[{"id":"a","letter":"A","text":"nước phun vào bình và chuyển thành màu hồng","isCorrect":true},{"id":"b","letter":"B","text":"nước phun vào bình và chuyển thành màu tím","isCorrect":false},{"id":"c","letter":"C","text":"nước phun vào bình và không có màu","isCorrect":false},{"id":"d","letter":"D","text":"nước phun vào bình và chuyển thành màu xanh","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":5},{"id":"h11_c2_de4_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Cho cân bằng hóa học sau: N<sub>2</sub> (g) + 3H<sub>2</sub> (g) ⇌ 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> < 0. Tổng số mol của hỗn hợp khí khi hệ đạt cân bằng ở nhiệt độ 400<sup>o</sup>C và 500<sup>o</sup>C là lượt là x và y. Mối quan hệ giữa x và y là","images":[],"options":[{"id":"a","letter":"A","text":"x > y","isCorrect":false},{"id":"b","letter":"B","text":"x = y","isCorrect":false},{"id":"c","letter":"C","text":"x < y","isCorrect":true},{"id":"d","letter":"D","text":"5x = 4y","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":6},{"id":"h11_c2_de4_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Phân biệt được dung dịch NH<sub>4</sub>Cl và NaCl bằng thuốc thử là dung dịch","images":[],"options":[{"id":"a","letter":"A","text":"KCl","isCorrect":false},{"id":"b","letter":"B","text":"KNO<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"KOH","isCorrect":true},{"id":"d","letter":"D","text":"K<sub>2</sub>SO<sub>4</sub>","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":7},{"id":"h11_c2_de4_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Khi so sánh phân tử ammonia với ion ammonium, nhận định nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Đều chứa liên kết ion","isCorrect":false},{"id":"b","letter":"B","text":"Đều có tính acid yếu trong nước","isCorrect":false},{"id":"c","letter":"C","text":"Đều có tính base yếu trong nước","isCorrect":false},{"id":"d","letter":"D","text":"Đều chứa nguyên tử N có số oxi hoá là -3","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":8},{"id":"h11_c2_de4_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(a) S + O<sub>2</sub> → (t°) SO<sub>2</sub> (b) Hg + S → HgS<br/>(c) H<sub>2</sub> +  18 S<sub>8</sub> → H<sub>2</sub>S.(d) Fe + S → (t°) FeS<br/>Có bao nhiêu phản ứng trong đó sulfur đóng vai trò là chất khử?","images":[],"options":[{"id":"a","letter":"A","text":"1","isCorrect":true},{"id":"b","letter":"B","text":"2","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":9},{"id":"h11_c2_de4_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Khi nhiệt kế thủy ngân vỡ, rắc chất bột nào sau đây lên thủy ngân rơi vãi sẽ chuyển hóa chúng thành hợp chất bền, ít độc hại?","images":[],"options":[{"id":"a","letter":"A","text":"Than đá","isCorrect":false},{"id":"b","letter":"B","text":"Đá vôi","isCorrect":false},{"id":"c","letter":"C","text":"Muối ăn","isCorrect":false},{"id":"d","letter":"D","text":"Sulfur","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":10},{"id":"h11_c2_de4_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Sulfur dioxide đóng vai trò chất khử khi tác dụng với chất nào sau đây?","images":[],"options":[{"id":"a","letter":"A","text":"H<sub>2</sub>S","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>2</sub>","isCorrect":true},{"id":"c","letter":"C","text":"Mg","isCorrect":false},{"id":"d","letter":"D","text":"KOH","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":11},{"id":"h11_c2_de4_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Nitrogen monoxide được tạo thành khi mưa dông kèm theo sấm sét do phản ứng giữa nitrogen và oxygen trong không khí được gọi là","images":[],"options":[{"id":"a","letter":"A","text":"NO<sub>x</sub> tức thời","isCorrect":false},{"id":"b","letter":"B","text":"NO<sub>x</sub> nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"NO<sub>x</sub>nhiên liệu","isCorrect":false},{"id":"d","letter":"D","text":"NO<sub>x</sub> tự nhiên","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":12},{"id":"h11_c2_de4_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Hiện tượng phú dưỡng là một biểu hiện của môi trường ao, hồ bị ô nhiễm do dư thừa các chất dinh dưỡng, Sự dư thừa dinh dưỡng chủ yếu do hàm lượng các ion nào sau đây vượt quá mức cho phép?","images":[],"options":[{"id":"a","letter":"A","text":"Sodium, potassium","isCorrect":false},{"id":"b","letter":"B","text":"Calcium, magnesium","isCorrect":false},{"id":"c","letter":"C","text":"Nitrate, phosphate","isCorrect":true},{"id":"d","letter":"D","text":"Chloride, sulfate","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":13},{"id":"h11_c2_de4_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Một phương pháp được đề xuất để loại bỏ SO<sub>2</sub> khỏi khí thải của nhà máy điện bằng cách dẫn khí thải qua dung dịch H<sub>2</sub>S. Cần tối đa bao nhiêu m<sup>3</sup> H<sub>2</sub>S (ở đkc) để loại bỏ SO<sub>2</sub> sinh ra khi đốt cháy 2,0 tấn than chứa sulfur chiếm 3% theo khối lượng?","images":[],"options":[{"id":"a","letter":"A","text":"23,24 m<sup>3</sup>","isCorrect":false},{"id":"b","letter":"B","text":"92,96 m<sup>3</sup>","isCorrect":true},{"id":"c","letter":"C","text":"46,48 m<sup>3</sup>","isCorrect":false},{"id":"d","letter":"D","text":"34,86 m<sup>3</sup>","isCorrect":false}],"correctAnswer":"B","explanation":"","explanationImages":[],"points":0.25,"displayNumber":14},{"id":"h11_c2_de4_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Cho các nhận định sau về cấu tạo phân tử nitric acid:<br/>(a) Liên kết O – H phân cực về oxygen.(b) Nguyên tử N có số oxi hóa là +5.<br/>(c) Nguyên tử N có hóa trị bằng IV.(d) Liên kết cho – nhận N → O kém bền.<br/>Số nhận định đúng là","images":["/assets/hoa12/c5/h11_c2_de4_image15.png"],"options":[{"id":"a","letter":"A","text":"1","isCorrect":false},{"id":"b","letter":"B","text":"2","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":15},{"id":"h11_c2_de4_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Cách pha loãng dung dịch sulfuric acid đặc nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Rót nhanh acid vào nước và khuấy đều","isCorrect":false},{"id":"b","letter":"B","text":"Rót nhanh nước vào acid và khuấy đều","isCorrect":false},{"id":"c","letter":"C","text":"Rót từ từ nước vào acid và khuấy đều","isCorrect":false},{"id":"d","letter":"D","text":"Rót từ từ acid vào nước và khuấy đều","isCorrect":true}],"correctAnswer":"D","explanation":"","explanationImages":[],"points":0.25,"displayNumber":16},{"id":"h11_c2_de4_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Muối X không tan trong nước và các dung môi hữu cơ. Trong y học, X thường được dùng làm chất cản quang xét nghiệm X-quang đường tiêu hóa. Công thức của X là","images":[],"options":[{"id":"a","letter":"A","text":"BaSO<sub>4</sub>","isCorrect":true},{"id":"b","letter":"B","text":"Na<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"K<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"MgSO<sub>4</sub>","isCorrect":false}],"correctAnswer":"A","explanation":"","explanationImages":[],"points":0.25,"displayNumber":17},{"id":"h11_c2_de4_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Sulfuric acid là một trong những hoá chất quan trọng nhất được sử dụng trong công nghiệp; được sản xuất hàng trăm triệu tấn mỗi năm, chiếm nhiều nhất trong ngành công nghiệp hoá chất. Phương pháp sản xuất sulfuric acid phổ biến nhất là phương pháp tiếp xúc, theo đó acid có thể được điều chế qua các giai đoạn sau:<br/>(1) FeS<sub>2</sub>(s) + O<sub>2</sub>(g) → (t°)  Fe<sub>2</sub>O<sub>3</sub>(s) + SO<sub>2</sub>(g)<br/>(2) SO<sub>2</sub>(g) + O<sub>2</sub>(s)  o25450 C, ⇌ (V<sub>2</sub>O<sub>5</sub>, t°) SO<sub>3</sub>(g) ; &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -196 kJ<br/>(3) H<sub>2</sub>SO<sub>4</sub>(aq) + SO<sub>3</sub>(g) → H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l)<br/>(4) H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l) + H<sub>2</sub>O(l) → H<sub>2</sub>SO<sub>4</sub>(aq)<br/>Người ta dùng sulfuric acid đặc H<sub>2</sub>SO<sub>4</sub>(aq) hấp thụ SO<sub>3</sub>(g) trong phản ứng (3), quá trình này được thực hiện trong tháp tiếp xúc. Cách thực hiện nào sau đây sẽ đạt hiệu quả tiếp xúc tốt nhất?","images":[],"options":[{"id":"a","letter":"A","text":"Cho SO<sub>3</sub>(g) lội qua dung dịch H<sub>2</sub>SO<sub>4</sub>(aq)","isCorrect":false},{"id":"b","letter":"B","text":"SO<sub>3</sub>(g) được phun vào từ phía trên tháp, H<sub>2</sub>SO<sub>4</sub>(aq) được bơm từ dưới lên","isCorrect":false},{"id":"c","letter":"C","text":"SO<sub>3</sub>(g) được xả vào từ phía dưới tháp, H<sub>2</sub>SO<sub>4</sub>(aq) được phun từ trên xuống","isCorrect":true},{"id":"d","letter":"D","text":"SO<sub>3</sub>(g) lội qua H<sub>2</sub>SO<sub>4</sub>(aq) được khuấy liên tục với tốc độ cao","isCorrect":false}],"correctAnswer":"C","explanation":"","explanationImages":[],"points":0.25,"displayNumber":18},{"id":"h11_c2_de4_p2_q1","number":1,"part":2,"type":"true_false","text":"Hiện tượng phú dưỡng là một biểu hiện của môi trường ao, hồ bị ô nhiễm do dư thừa các chất dinh dưỡng","images":[],"options":[{"id":"a","letter":"A","text":"Chất thải công nghiệp, chất thải sinh hoạt, … khi không được xử lí theo quy chuẩn, nếu thải vào sông, hồ cũng gây ra hiện tượng phú dưỡng","isCorrect":true},{"id":"b","letter":"B","text":"Hiện tượng phú dưỡng gây cản trở hấp thụ ánh sáng mặt trời vào nước, làm giảm sự quang hợp của thực vật thủy sinh","isCorrect":true},{"id":"c","letter":"C","text":"Có thể quan sát được hiện tượng phú dưỡng thông qua sự xuất hiện dày đặc của tảo xanh trong nước","isCorrect":true},{"id":"d","letter":"D","text":"Thông thường, khi hàm lượng calcium trong nước đạt 300 μg/L và hàm lượng magnesium đạt 20 μg/L sẽ gây hiện tượng phú dưỡng","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Dư thừa nitrogen và phosphorus trong nước","explanationImages":[],"points":1,"displayNumber":19},{"id":"h11_c2_de4_p2_q2","number":2,"part":2,"type":"true_false","text":"Phương trình hoá học của phản ứng tổng họp ammonia từ nitrogen và hydrogen bằng quá trình Haber như sau: N<sub>2</sub>(g) + 3H<sub>2</sub>(g)  o400600C, 200 bar, Fe- ⇌ 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -92 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Tại thời điểm cân bằng, hỗn hợp trong buồng phản ứng gồm ammonia, nitrogen và hydrogen","isCorrect":true},{"id":"b","letter":"B","text":"Ammonia dễ hoá lỏng hơn nên khi làm lạnh hỗn hợp sẽ tách được ammonia lỏng ra khỏi hỗn hợp khí","isCorrect":true},{"id":"c","letter":"C","text":"Nếu không sử dụng chất xúc tác thì không thể tạo thành ammonia","isCorrect":false},{"id":"d","letter":"D","text":"Nếu giảm áp suất của hệ thì cân bằng sẽ chuyển dịch theo chiều thuận","isCorrect":false}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Chất xúc tác làm tăng tốc độ phản ứng còn sản phẩm ammonia vẫn được tạo thành trong quá trình phản ứng kể cả không có xúc tác.<br/>d. S. Giảm áp suất làm cân bằng chuyển dịch theo chiều nghịch","explanationImages":[],"points":1,"displayNumber":20},{"id":"h11_c2_de4_p2_q3","number":3,"part":2,"type":"true_false","text":"Cho các phát biểu sau về sulfuric acid và muối sulfate:","images":[],"options":[{"id":"a","letter":"A","text":"Sulfuric acid đặc có tính háo nước, gây bỏng nặng khi tiếp xúc với da tay","isCorrect":true},{"id":"b","letter":"B","text":"Khi bị bỏng sulfuric acid đặc, điều đầu tiên cần làm là xả nhanh chỗ bỏng với nước lạnh","isCorrect":true},{"id":"c","letter":"C","text":"Sulfuric acid loãng có tính oxi hóa mạnh, khi tác dụng với kim loại không sinh ra khí hydrogen","isCorrect":false},{"id":"d","letter":"D","text":"Thuốc thử nhận biết sulfuric acid và muối sulfate là ion Ba<sup>2+</sup> trong các dung dịch BaCl<sub>2</sub>, Ba(OH)<sub>2</sub>, Ba(NO<sub>3</sub>)<sub>2</sub>","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Sulfuric acid loãng có tính acid mạnh.<br/>d. Đ","explanationImages":[],"points":1,"displayNumber":21},{"id":"h11_c2_de4_p2_q4","number":4,"part":2,"type":"true_false","text":"Sau mỗi trận mưa giông, một lượng nitrogen trong không khí được chuyển hóa thành ion nitrate và hòa tan vào nước mưa theo sơ đồ chuyển hóa dưới đây:<br/>(1)(2)(3)(4)2233NNONOHNOHNO+- →  →  →  → +","images":[],"options":[{"id":"a","letter":"A","text":"Cả bốn phản ứng mà nguyên tố nitrogen đóng vai trò là chất khử","isCorrect":false},{"id":"b","letter":"B","text":"Sản phẩm của phản ứng (4) có thể dùng làm phân bón","isCorrect":true},{"id":"c","letter":"C","text":"Trong thực tế, phản ứng (1) xảy ra ở nhiệt độ thường","isCorrect":false},{"id":"d","letter":"D","text":"Để tạo ra được 124 kg ion nitrate cần dùng ở điều kiện chuẩn là 991,6 m<sup>3</sup> khí N<sub>2</sub>. Biết hiệu suất của toàn bộ quá trình là 5%","isCorrect":false}],"explanation":"Đáp án:<br/>a. S. Phản ứng (4) không phải là phản ứng oxi hóa khử.<br/>b. Đ.<br/>c. S. Ở nhiệt độ cao trên 3000°C hoặc có tia lửa điện, nitrogen kết hợp với oxygen, tạo ra nitrogen monoxide (NO).<br/>d. S.  22233NNNNO1241n2nn.kmolV495,8m62.25%-=Þ=Þ=","explanationImages":[],"points":1,"displayNumber":22},{"id":"h11_c2_de4_p3_q1","number":1,"part":3,"type":"short_answer","text":"Phân tử sulfur trong trạng thái rắn tồn tại ở dạng vòng gồm có bao nhiêu nguyên tử sulfur?","images":[],"correctAnswer":"8","explanation":"Đáp án: 8","explanationImages":[],"points":0.25,"displayNumber":23},{"id":"h11_c2_de4_p3_q2","number":2,"part":3,"type":"short_answer","text":"Cho các chất khí: NO, NO<sub>2</sub>, SO<sub>2</sub>, N<sub>2</sub>O và N<sub>2</sub>. Có bao nhiêu chất khí là nguyên nhân góp phần gây ra hiện tượng mưa acid?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25,"displayNumber":24},{"id":"h11_c2_de4_p3_q3","number":3,"part":3,"type":"short_answer","text":"Cho dung dịch (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> tác dụng lần lượt với các dung dịch NaOH, Ba(OH)<sub>2</sub>, MgCl<sub>2</sub>, Ba(NO<sub>3</sub>)<sub>2</sub> và NaNO<sub>3</sub>. Sau khi các phản ứng xảy trên ra hoàn toàn, có bao nhiêu phản ứng thu được kết tủa?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25,"displayNumber":25},{"id":"h11_c2_de4_p3_q4","number":4,"part":3,"type":"short_answer","text":"Khi cho sulfuric acid đặc, nóng lần lượt tiếp xúc với các chất sau: đường saccharose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>), bột lưu huỳnh, thanh platinum, bột kẽm, thuốc tím (KMnO<sub>4</sub>), muối ăn (NaCl). Có bao nhiêu chất bị sulfuric acid đặc, nóng oxi hoá?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.25,"displayNumber":26},{"id":"h11_c2_de4_p3_q5","number":5,"part":3,"type":"short_answer","text":"Hỗn hợp X gồm N<sub>2</sub> và H<sub>2</sub> có tỉ khối đối với H<sub>2</sub> bằng 3,6. Nung nóng X trong bình kín ở nhiệt độ khoảng 450<sup>0</sup>C có bột Fe xúc tác, thu được hỗn hợp khí Y có số mol giảm 8% so với ban đầu. Hiệu suất của phản ứng tổng hợp NH<sub>3</sub> là bao nhiêu phần trăm?","images":[],"correctAnswer":"20","explanation":"Đáp án: 20.<br/>M<sub>X</sub> = 3,6.2 = 7,2<br/>Giả sử có 1 mol N<sub>2</sub> và 4 mol H<sub>2</sub>. Vậy số mol ban đầu là 5 mol.<br/>Phương trình hoá học:  N<sub>2</sub>           +        3H<sub>2</sub> ⇌ 2NH<sub>3</sub><br/>Ban đầu:                   1                   4                     0                   mol<br/>Phản ứng:                    x                   3x                        2x                 mol<br/>Sau phản ứng:        (1 – x)    (4 – 3x)                2x                 mol<br/>Tổng số mol khí sau phản ứng: n<sub>sau</sub> = (1 – x) + (4 – 3x) + 2x = 5 – 2x (mol)<br/>Số mol Y giảm 8% so với ban đầu  5 – 2x = (100% – 8%).5  x = 0,2<br/>Hiệu suất phản ứng tính theo N<sub>2</sub> (do 1/1 < 4/3)<br/>Ta có:  0,2H .100% 20%1==","explanationImages":["/assets/hoa12/c5/h11_c2_de4_image25.png"],"points":0.25,"displayNumber":27},{"id":"h11_c2_de4_p3_q6","number":6,"part":3,"type":"short_answer","text":"Sulfuric acid có thể được điều chế từ quặng pyrite theo sơ đồ:<br/>FeS<sub>2</sub> <span class='inline-block mx-1 text-slate-800'>→</span> SO<sub>2</sub> <span class='inline-block mx-1 text-slate-800'>→</span> SO<sub>3</sub> <span class='inline-block mx-1 text-slate-800'>→</span> H<sub>2</sub>SO<sub>4</sub><br/>Thể tích (L) của dung dịch H<sub>2</sub>SO<sub>4</sub> 98% (D = 1,82 g/mL) thu được từ 1 tấn quặng pyrite (chứa 80% FeS<sub>2</sub>). Biết hiệu suất của cả quá trình là 90%, các tạp chất trong quặng không chứa sulfur. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"659","explanation":"Đáp án: 659.<br/>2FeSm1.80%0,8== tấn = 800 kg<br/>Ta có sơ đồ:  FeS<sub>2</sub> &rarr; 2SO<sub>2</sub> &rarr; 2SO<sub>3</sub> &rarr; 2H<sub>2</sub>SO<sub>4</sub> <br/>kmol: 800120   800120 .2.90% = 12<br/>24HSOm12.981176kg==    24ddHSO1176mkg98%=  Þ  =»24ddHSO1176V659L.98%.1,82<br/>","explanationImages":[],"points":0.25,"displayNumber":28}]}]}};

export const HOA11_CHUONG2_LESSONS: Chuong2Lesson[] = Object.values(HOA11_CHUONG2_MASTER);

export const HOA11_CHUONG2_EXAMS: Chuong2Exam[] = [
  {
    "id": "h11_c2_de1",
    "code": "114",
    "title": "Đề Kiểm Tra Số 1 - Đơn Chất Nitrogen & Ammonia (Mã 114)",
    "topic": "Tính chất N2, NH3, muối ammonium & mưa acid",
    "badge": "Mã 114",
    "chapter": 2,
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10,
    "questions": [
      {
        "id": "h11_c2_de1_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử nitrogen có cấu tạo là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N = N",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "N  º N",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "N – N",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N  ® N",
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
        "id": "h11_c2_de1_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong những nhận xét dưới đây, nhận xét nào là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen không duy trì sự cháy, sự hô hấp và là một khí độc",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở điều kiện thường, nitrogen trơ về mặt hóa học do phân tử có một liên kết ba bền vững",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong các phản ứng hóa học, nitrogen chỉ thể hiện tính khử",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Số oxi hóa của nitrogen trong các ion và hợp chất NH<sub>4</sub><sup>+</sup>, NO<sub>3</sub><sup>-</sup>, N<sub>2</sub>O lần lượt là -3,+5,+4",
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
        "id": "h11_c2_de1_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tã lót trẻ em sau khi giặt vẫn giữ lại một lượng nhỏ ammonia. Để khử sạch ammonia nên dùng chất gì sau đây cho vào nước xả cuối cùng để giặt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phèn chua",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Giấm ăn",
            "isCorrect": true
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
            "text": "Gừng tươi",
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
        "id": "h11_c2_de1_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức phân tử của ammonia là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "HNO<sub>3</sub>",
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
            "text": "NH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "N<sub>2</sub>H<sub>4</sub>",
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
        "id": "h11_c2_de1_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ammonia đóng vai trò chất khử khi tác dụng với chất nào sau đây?",
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
            "text": "HCl",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>3</sub>PO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "O<sub>2</sub> (Pt, t<sup>o</sup>)",
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
        "id": "h11_c2_de1_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi so sánh phân tử ammonia với ion ammonium, nhận định nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đều chứa liên kết ion",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đều có tính acid yếu trong nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đều có tính base yếu trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đều chứa nguyên tử N có số oxi hoá là -3",
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
        "id": "h11_c2_de1_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Có thể nhận biết muối ammonium bằng cách cho muối tác dụng với dung dịch kiềm thấy thoát ra một chất khí. Chất khí đó là",
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
            "text": "H<sub>2</sub>",
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
            "text": "NO",
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
        "id": "h11_c2_de1_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại nào sau đây không tác dụng với HNO<sub>3</sub> đặc, nóng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Fe",
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
            "text": "Ag",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Pt",
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
        "id": "h11_c2_de1_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kim loại nào sau đây tác dụng với sulfur ở nhiệt độ thường?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Al",
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
            "text": "Hg",
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
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "h11_c2_de1_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhỏ dung dịch H<sub>2</sub>SO<sub>4</sub> 98% vào cốc đựng đường saccarose khiến đường hóa đen gọi là hiện tượng gì?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hiện tượng bốc hơi",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hiện tượng than hóa",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hiện tượng đông tụ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hiện tượng vón cục",
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
        "id": "h11_c2_de1_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các ứng dụng sau:<br/>(1) sản xuất sulfuric acid;(2) tẩy trắng bột giấy;<br/>(3) diệt nấm mốc, thuốc đông y;(4) diệt trùng nước sinh hoạt.<br/>Số ứng dụng của khí sulfur dioxide trong đời sống, sản suất là",
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
        "displayNumber": 11
      },
      {
        "id": "h11_c2_de1_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Oxide của nitrogen được tạo thành khi nguyên tố nitrogen trong nhiên liệu hoặc sinh khối kết hợp với oxygen dư thừa trong không khí được gọi là",
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
            "text": "NO<sub>x</sub> nhiên liệu",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NO<sub>x</sub> tự nhiên",
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
        "id": "h11_c2_de1_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phú dưỡng là hiện tượng xảy ra do sự gia tăng hàm lượng của hai nguyên tố nào trong nước?",
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
            "text": "Cl, F",
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
        "id": "h11_c2_de1_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sulfur được dân gian sử dụng để pha chế vào thuốc trị các bệnh ngoài da. Tên gọi dân gian của sulfur là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "diêm sinh",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đá vôi",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phèn chua",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "giấm ăn",
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
        "id": "h11_c2_de1_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một nhà máy luyện kim, ở giai đoạn đầu của quá trình sản xuất Zn từ quặng blend thu được sản phẩm phụ là SO<sub>2</sub> theo sơ đồ phản ứng: 2ZnS + 3O<sub>2</sub> &rarr; 2ZnO + 2SO<sub>2</sub><br/>Đốt cháy 1 tấn quặng blend (chứa 77,6% khối lượng ZnS) bằng không khí, thu được tối đa V m<sup>3</sup> khí SO<sub>2</sub> (đkc). Giá trị của V là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "99,2",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "198,3",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "297,5",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "396,6",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án: B.<br/>2ZnS + 3O<sub>2</sub> &rarr; 2ZnO + 2SO<sub>2</sub><br/>m<sub>ZnS</sub> = 1000 &times; 77,6% = 776 kg.<br/>n<sub>ZnS</sub> = 776 / 97 = 8 kmol &rArr; n<sub>SO<sub>2</sub></sub> = 8 kmol.<br/>V<sub>SO<sub>2</sub></sub> = 8 &times; 24,79 = 198,32 m<sup>3</sup> (làm tròn 198,3 m<sup>3</sup>).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "h11_c2_de1_p1_q16",
        "number": 16,
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
            "text": "3HNO",
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
            "text": "24HSO",
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
        "id": "h11_c2_de1_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho vài giọt dung dịch BaCl<sub>2</sub> vào dung dịch nào sau đây sẽ tạo kết tủa trắng?",
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
            "text": "Na<sub>2</sub>SO<sub>4</sub>",
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
            "text": "NaOH",
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
        "id": "h11_c2_de1_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sulfur dioxide và các oxide của nitrogen trong khí quyển hòa tan trong nước tạo thành mưa acid. Khẳng định nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước mưa có pH > 5,6 được xem là mưa acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thành phần chính của mưa acid là H<sub>2</sub>SO<sub>3</sub> và HNO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Công thức hóa học của NO<sub>x</sub> trong khí thải ô tô luôn là NO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thu hồi sulfur từ các khí thải như H<sub>2</sub>S, SO<sub>2</sub>….có thể làm giảm sự hình thành mưa acid",
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
        "id": "h11_c2_de1_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về tính chất vật lí của sulfuric acid:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ở điều kiện thường, sulfuric acid là chất lỏng, không màu và dễ bay hơi",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi pha loãng sulfuric acid đặc cần phải cho từ từ nước vào acid đặc",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sulfuric acid được sử dụng làm chất hút ẩm trong các bình hút ẩm để làm khô nhiều chất",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sulfuric acid tan vô hạn trong nước là do tạo được liên kết hydrogen với nước",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. S. Sulfuric acid không bay hơi.<br/>b. S. Khi pha loãng sulfuric acid đặc cần phải cho từ từ acid đặc vào nước.<br/>c. Đ.<br/>d. Đ",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 19
      },
      {
        "id": "h11_c2_de1_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Thực hiện thí nghiệm như hình vẽ sau:",
        "images": [
          "/assets/hoa12/c5/h11_c2_de1_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hiện tượng quan sát được là nước phun vào bình thành tia, dung dịch phenolphthalein chuyển sang màu hồng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thí nghiệm trên chứng minh dung dịch NH<sub>3</sub> có tính acid",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu thay khí ammonia bằng khí hydrogen chloride thì hiện tượng thí nghiệm vẫn không thay đổi",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khí ammonia tan nhiều trong nước làm áp suất trong bình tăng dẫn đến nước bị hút vào bình",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đ.<br/>b. S. NH<sub>3</sub> có tính base.<br/>c. S. Khí HCl không làm đổi màu dung dịch phenolphtalein.<br/>d. S. Áp suất trong bình giảm",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 20
      },
      {
        "id": "h11_c2_de1_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Thí nghiệm: Sulfur tác dụng với oxygen.<br/>Chuẩn bị: bột sulfur, bình khí oxygen; muôi sắt, đèn cồn, nút cao su.<br/>Tiến hành:<br/>- Lấy một ít bột sulfur vào muôi sắt (đã cắm xuyên qua nút cao su).<br/>- Hơ nóng muôi sắt trên ngọn lửa đèn cồn đến khi sulfur nóng chảy và cháy một phần trong không khí.<br/>- Đưa nhanh muôi sắt vào bình khí oxygen",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng chứng minh sulfur bị khử bởi oxygen",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sulfur tác dụng với oxygen tạo thành acidic oxide",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sulfur cháy trong không khí với ngọn lửa nhỏ, màu xanh nhạt",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu đốt cháy hoàn toàn 6,4 gam sulfur trong khí oxygen dư thì thể tích khí SO<sub>2</sub> ở đkc thu được là 4,958 L",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>ot22SOSO+ → <br/>a. S. Sulfur thể hiện tính khử bị oxi hóa bởi oxygen.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ. V = 0,2.24,79 = 4,958 L",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 21
      },
      {
        "id": "h11_c2_de1_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Trong những cơ mưa dông kèm sấm sét, sự chuyển hoá của nitrogen đơn chất xảy ra theo sơ đồ sau:<br/>N<sub>2</sub> &rarr; NO &rarr; NO<sub>2</sub> &rarr; HNO<sub>3</sub> &rarr; H<sup>+</sup> + NO<sub>3</sub><sup>-</sup>",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong sơ đồ trên, có ba chất khí gây ô nhiễm môi trường",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Các phản ứng trong sơ đồ trên đều xảy ra quá trình oxi hóa khử",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ion nitrate  3(NO)-  tạo thành ở quá trình (4) là một dạng đạm cây trồng hấp thụ được để sinh trưởng, phát triển",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sơ đồ cũng áp dụng để giải thích sự tạo thành HNO<sub>3</sub> từ hoạt động đốt cháy nhiên liệu bằng không khí của phương tiện giao thông vận tải",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. S. Có 2 chất khí gây ô nhiễm môi trường là NO, NO<sub>2</sub>.<br/>b. S. (4) không phải là phản ứng oxi hóa khử.<br/>c. Đ.<br/>d. Đ. Quá trình đốt cháy nhiên liệu ở nhiệt độ cao bằng không khí cũng phát thải các oxide của nitrogen vào khí quyển",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 22
      },
      {
        "id": "h11_c2_de1_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Phương pháp điều chế H<sub>2</sub>SO<sub>4</sub> từ quặng pyrite sắt (FeS<sub>2</sub>) trong công nghiệp trải qua mấy giai đoạn?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "h11_c2_de1_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất khí sau: H<sub>2</sub>S, NO, NO<sub>2</sub>, SO<sub>2</sub> và N<sub>2</sub>. Có bao nhiêu chất khí gây ô nhiễm môi trường khi phát thải vào không khí?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "h11_c2_de1_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Tiến hành thí nghiệm trộn từng cặp dung dịch sau: (a) NH<sub>3</sub> và AlCl<sub>3</sub>; (b) (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> và Ba(OH)<sub>2</sub>; (c) NH<sub>4</sub>Cl và AgNO<sub>3</sub>; (d) Na<sub>2</sub>SO<sub>4</sub> và MgCl<sub>2</sub>. Sau khi phản ứng kết thúc, có bao nhiêu thí nghiệm thu được kết tủa?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "h11_c2_de1_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Trong điều kiện thích hợp, xảy ra các phản ứng sau:<br/>(a) 2H<sub>2</sub>SO<sub>4</sub> + C → 2SO<sub>2</sub> + CO<sub>2</sub> + 2H<sub>2</sub>O.<br/>(b) H<sub>2</sub>SO<sub>4</sub> + Fe(OH)<sub>2</sub> → FeSO<sub>4</sub> + 2H<sub>2</sub>O.<br/>(c) 4H<sub>2</sub>SO<sub>4</sub> + 2FeO → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + SO<sub>2</sub> + 4H<sub>2</sub>O.<br/>(d) 2H<sub>2</sub>SO<sub>4</sub> + Cu → CuSO<sub>4</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O.<br/>(e)  2244CaF  HSO CaSO  2HF+ → +<br/>Trong các phản ứng trên, có bao nhiêu phản ứng xảy ra với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "h11_c2_de1_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Một phương pháp được đề xuất để loại bỏ SO<sub>2</sub> khỏi khí thải của nhà máy điện bằng cách dẫn khí thải qua dung dịch H<sub>2</sub>S. Cần tối đa bao nhiêu m<sup>3</sup> H<sub>2</sub>S (ở đkc) để loại bỏ SO<sub>2</sub> sinh ra khi đốt cháy 2,0 tấn than chứa sulfur chiếm 3% theo khối lượng? (Kết quả làm tròn đến hàng đơn vị)",
        "images": [],
        "correctAnswer": "93",
        "explanation": "Đáp án: 93.<br/>S + O<sub>2</sub>SO<sub>2</sub><br/>2H<sub>2</sub>S + SO<sub>2</sub>  3S + 2H<sub>2</sub>O<br/>2SHS2000.3%n1,875kmoln1,875.2 = 3,75kmol32==Þ=<br/>V = 3,75.24,79 = 92,9625 m<sup>3</sup>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "h11_c2_de1_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Trong công nghiệp, người ta sản xuất nitric acid (HNO<sub>3</sub>) từ ammonia theo sơ đồ chuyển hoá sau:<br/>NH<sub>3</sub> &rarr; NO &rarr; NO<sub>2</sub> &rarr; HNO<sub>3</sub> <br/>Để điều chế 2000 tấn nitric acid có nồng độ 60% cần dùng bao nhiêu tấn ammonia? Biết rằng hiệu suất của quá trình sản xuất nitric acid theo sơ đồ trên là 92%. (Kết quả làm tròn đến hàng đơn vị)",
        "images": [],
        "correctAnswer": "352",
        "explanation": "Đáp án: 352.<br/>Khối lượng HNO<sub>3</sub> nguyên chất là: 2000.0,6 = 1200 tấn<br/>Sơ đồ phản ứng điều chế HNO<sub>3</sub> từ NH<sub>3</sub><br/>NH<sub>3</sub> → NO → NO<sub>2</sub> → HNO<sub>3</sub><br/>17g                                    63g<br/>x tấn                                  1200 tấn<br/>3NH1200.171m.3526392%== tấn<br/>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "h11_c2_de2",
    "code": "115",
    "title": "Đề Kiểm Tra Số 2 - Sulfur & SO2 (Mã 115)",
    "topic": "Tính oxi hóa - khử của sulfur, sulfur dioxide & ô nhiễm khí thải",
    "badge": "Mã 115",
    "chapter": 2,
    "duration": 50,
    "totalQuestions": 27,
    "totalPoints": 10,
    "questions": [
      {
        "id": "h11_c2_de2_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Công thức hóa học của diêm tiêu Chile là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Ca(NO<sub>3</sub>)<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "NH<sub>4</sub>NO<sub>3.</sub>",
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
            "text": "NaNO<sub>3</sub>",
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
        "id": "h11_c2_de2_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhận định nào sau đây về phân tử nitrogen là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có ba liên kết đơn bền vững",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chứa nguyên tử nitrogen có số oxi hóa là -3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có liên kết cộng hóa trị có cực",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thể hiện cả tính oxi hóa và tính khử",
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
        "id": "h11_c2_de2_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi tác dụng với nước và hydrochloric acid, ammonia đóng vai trò là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "acid",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "base",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chất oxi hóa",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chất khử",
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
        "id": "h11_c2_de2_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp, phần lớn sulfur đơn chất sau khi khai thác ở các mỏ được dùng làm nguyên liệu để",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "lưu hóa cao su tự nhiên",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "sản xuất sulfuric acid",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "điều chế thuốc bảo vệ thực vật",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "bào chế thuốc đông y",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Khoảng 90% lượng sulfur sản xuất trên thế giới được dùng để sản xuất sulfuric acid.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "h11_c2_de2_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt phân hoàn toàn muối nào sau đây thu được sản phẩm chỉ gồm khí và hơi?",
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
            "text": "CaCO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "KClO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "NH<sub>4</sub>HCO<sub>3</sub>",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "NH<sub>4</sub>HCO<sub>3</sub> (t<sup>o</sup>) &rarr; NH<sub>3</sub>(k) + CO<sub>2</sub>(k) + H<sub>2</sub>O(hơi). Sản phẩm 100% gồm khí và hơi.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "h11_c2_de2_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nguyên tố sulfur có số hiệu nguyên tử là 16. Vị trí của sulfur trong bảng tuần hoàn các nguyên tố hóa học là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "chu kì 3, nhóm VI",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 5, nhóm VI",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 3, nhóm IV",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 5, nhóm IV",
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
        "id": "h11_c2_de2_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thuốc thử duy nhất để nhận biết 4 dung dịch đựng trong 4 lọ mất nhãn là KOH, NH<sub>4</sub>Cl K<sub>2</sub>SO<sub>4</sub>, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "dung dịch AgNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "dung dịch BaCl<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "dung dịch NaOH",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "dung dịch Ba(OH)<sub>2</sub>",
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
        "id": "h11_c2_de2_p1_q8",
        "number": 8,
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
        "displayNumber": 7
      },
      {
        "id": "h11_c2_de2_p1_q9",
        "number": 9,
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
        "displayNumber": 8
      },
      {
        "id": "h11_c2_de2_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các chất khí được thu vào bình theo đúng nguyên tắc bằng cách đẩy không khí (X, Y, Z) và đẩy nước (T) như sau:<br/>Nhận xét nào sau đây không đúng?",
        "images": [
          "/assets/hoa12/c5/h11_c2_de2_image1.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "X là sulfur dioxide",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Y là ammonia",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Z là hydrogen",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "T là nitrogen",
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
        "id": "h11_c2_de2_p1_q11",
        "number": 11,
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
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "8",
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
        "id": "h11_c2_de2_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Chất khí (X) tan trong nước tạo ra dung dịch làm quỳ tím hoá đỏ và khí (X) có thể được dùng làm chất tẩy màu. Khi (X) là",
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
            "text": "CO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "SO<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "O<sub>3</sub>",
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
        "id": "h11_c2_de2_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Thạch cao sống là một dạng tồn tại phổ biến của sulfur trong tự nhiên, được sử dụng làm nguyên liệu để sản xuất xi măng, phấn viết bảng, … Công thức của thạch cao sống là",
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
            "text": "CaSO<sub>4</sub>.2H<sub>2</sub>O",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "MgSO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CuSO<sub>4</sub>.5H<sub>2</sub>O",
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
        "id": "h11_c2_de2_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Tính chất nào sau đây không phải tính chất vật lí của sulfur?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Màu vàng ở điều kiện thường",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Thể rắn ở điều kiện thường",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Không tan trong benzene",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Không tan trong nước",
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
        "id": "h11_c2_de2_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét phản ứng tổng hợp ammonia theo phương trình hoá học:<br/>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ (xt, t°, p) 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -92 kJ<br/>Cho các yếu tố sau: (a) tăng nhiệt độ, (b) tách ammonia ra khỏi hỗn hợp phản ứng, (c) giảm thể tích của hệ phản ứng, (d) thêm H<sub>2</sub>. Có bao nhiêu yếu tố làm tăng hiệu suất tổng hợp NH<sub>3</sub>?",
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
        "displayNumber": 14
      },
      {
        "id": "h11_c2_de2_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Sulfuric acid tan tốt trong nước, quá trình hòa tan tỏa nhiệt mạnh.<br/>(b) Dung dịch sulfuric acid đặc hòa tan được tất cả các kim loại.<br/>(c) Dung dịch sulfuric acid đặc có tính háo nước và tính oxi hóa mạnh.<br/>(d) Nhiều muối sulfate tan tốt trong nước nhưng một số muối như CaSO<sub>4</sub>, BaSO<sub>4</sub> rất ít tan trong nước.<br/>(e) Khi bị bỏng sulfuric acid đặc, điều đầu tiên cần làm là xả nhanh chỗ bỏng với nước lạnh.<br/>Số phát biểu đúng là",
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
        "displayNumber": 15
      },
      {
        "id": "h11_c2_de2_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phản ứng sau:<br/>(a) S + O<sub>2</sub> → (t°) SO<sub>2</sub> (b) Hg + S → HgS<br/>(c) S + 6HNO<sub>3</sub> → H<sub>2</sub>SO<sub>4</sub>+ 6NO<sub>2</sub> + 2H<sub>2</sub>O (d) Fe + S → (t°) FeS<br/>Có bao nhiêu phản ứng trong đó sulfur đóng vai trò là chất khử?",
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
        "displayNumber": 16
      },
      {
        "id": "h11_c2_de2_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hòa tan hết m gam oxide của kim loại M (hóa trị II) vào dung dịch H<sub>2</sub>SO<sub>4</sub> loãng, thu được 3m gam muối sulfate. Công thức của oxide kim loại là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "ZnO",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CuO",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CaO",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "MgO",
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
        "id": "h11_c2_de2_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi năm có hàng triệu tấn nitrogen được sản xuất toàn cầu; trong đó nitrogen dạng khí chiếm khoảng hai phần ba, còn lại là nitrogen lỏng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong chữa cháy, nitrogen dùng để dập tắt các đám cháy do hóa chất, chập điện",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong công nghiệp thực phẩm, nitrogen lỏng được sử dụng làm lạnh nhanh, bảo quản thực phẩm",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong công nghệ đóng gói thực phẩm, khí nitrogen được bơm vào túi để loại bỏ khí oxygen và làm phồng bao",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong lĩnh vực sinh học và y học, các mẫu vật sinh học được bảo quản trong bình nitrogen lỏng",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. Đ",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 18
      },
      {
        "id": "h11_c2_de2_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho các nhận định sau về cấu tạo phân tử ammonia:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phân tử có dạng hình chóp tam giác",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết N-H trong phân tử kém bền",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Xung quanh nguyên tử N có 3 cặp electron hoá trị",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phân tử ammonia là phân tử phân cực",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. Liên kết N-H tương đối bền.<br/>c. Sai. Xung quanh nguyên tử N có 4 cặp electron (3 cặp liên kết và 1 cặp tự do).<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 19
      },
      {
        "id": "h11_c2_de2_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Hình ảnh dưới đây mô tả về quá trình hình thành mưa acid:",
        "images": [
          "/assets/hoa12/c5/h11_c2_de2_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nước mưa có độ pH nhỏ hơn 5,6 được gọi là hiện tượng mưa acid",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tác nhân chính gây mưa acid là hỗn hợp khí SO<sub>2</sub> và NO<sub>x</sub>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hoạt động của núi lửa, cháy rừng, sấm sét hoặc do con người tiêu thụ các nhiên liệu như than đá, dầu mỏ … làm phát sinh ra nhiều khí SO<sub>2</sub>, NO<sub>x</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dưới xúc tác của của ánh sáng mặt trời SO<sub>2</sub>, NO<sub>x</sub> bị oxi hoá, sau đó hoà tan trong nước mưa rơi xuống mặt đất, ao hồ … tạo thành hiện tượng mưa acid",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Dưới xúc tác của các ion kim loại trong khói bụi SO<sub>2</sub>, NO<sub>x</sub> bị oxi hoá",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 20
      },
      {
        "id": "h11_c2_de2_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho sơ đồ điều chế sulfuric acid từ quặng pyrite theo 3 giai đoạn như sau:<br/>(1)(2)(3)22324FeSSOSOHSO →  →  →",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Có 3 phản úng oxi hoá khử trong sơ đồ điều chế trên",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sản xuất sulfuric acid theo quy trình trên gọi là phương pháp tiếp xúc",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Ở giai đoạn 3 người ta dùng dung dịch H<sub>2</sub>SO<sub>4</sub> đặc 98% để hấp thụ SO<sub>3</sub>, sản phẩm thu được gọi là oleum",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Một loại quặng pyrite chứa 96% FeS<sub>2</sub>. Nếu mỗi ngày nhà máy sản xuất 100 tấn sulfuric acid 98% thì cần 70,46 tấn quặng pyrite với hiệu suất của cả quá trình sản xuất là 90%",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. S. Có 2 phản ứng oxi hóa khử gồm có giai đoạn 1, 2.<br/>b. Đ.<br/>c. Đ. nSO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub><br/>d. S. FeS<sub>2</sub>  2H<sub>2</sub>SO<sub>4</sub><br/>HSO24m100.98%98==  tấn   HSOFeSFeS24220,5.120n1n0,5m90%=Þ=Þ=<br/>Vậy mquặng =  FeS2m69,4496%=  tấn",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 21
      },
      {
        "id": "h11_c2_de2_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Có bao nhiêu liên kết cộng hóa trị trong ion muối ammonium?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 22
      },
      {
        "id": "h11_c2_de2_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dung dịch HNO<sub>3</sub> tác dụng với các chất sau: NH<sub>3</sub>, Cu, CaCO<sub>3</sub>, Fe<sub>3</sub>O<sub>4</sub> và NaOH. Có bao nhiêu phản ứng trong đó HNO<sub>3</sub> đóng vai trò acid theo Bronsted?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "h11_c2_de2_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Bột đá vôi cỏ thể được sử dụng để xử lí khí thải chứa sulfur dioxide từ các nhà máy điện đốt than và dầu mỏ. Phương trình hoá học của phản ứng là: CaCO<sub>3</sub>(s) + SO<sub>2</sub>(g) → CaSO<sub>3</sub>(s) + CO<sub>2</sub>(g)<br/>Tính giá trị biến thiên enthalpy chuẩn của phản ứng trên (đơn vị kJ) theo số liệu giá trị enthalpy tạo thành chuẩn của các hợp chất trong bảng sau đây.<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">Hợp chất</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">CaCO3 (s)</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">SO<sub>2</sub> (g)</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">CaSO3 (s)</th><th class=\"px-3 py-2 text-center font-bold bg-indigo-100/70 text-slate-800 border border-slate-300\">CO<sub>2</sub> (g)</th></tr><tr><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">(kJ/mol)</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">–1207,6</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">–296,8</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">–1634,9</td><td class=\"px-3 py-2 text-center border border-slate-300 font-medium text-slate-700\">–393,5</td></tr></table></div>",
        "images": [],
        "correctAnswer": "−524",
        "explanation": "Đáp án: −524.<br/>CaCO<sub>3</sub>(s) + SO<sub>2</sub>(g) → CaSO<sub>3</sub>(s) + CO<sub>2</sub>(g)<br/>= [−1634,9 + (−393,5)] – [−1207,6 + (−296,8)] = −524 kJ",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "h11_c2_de2_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các loại khoáng vật sau: blend (ZnS), chalcopyrite (CuFeS<sub>2</sub>), thạch cao (CaSO<sub>4</sub>), pyrite (FeS<sub>2</sub>). Có bao nhiêu khoáng vật có thành phần chính chứa muối sulfide?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "h11_c2_de2_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Khí sulfur dioxide có khả năng tẩy trắng và sát trùng nên được dùng làm chất chống mốc cho các sản phẩm mây tre đan tại nhiều làng nghề. Trong 1 ngày, một làng nghề đốt cháy 12,8 kg sulfur để tạo thành V m<sup>3</sup> khí sulfur dioxide với hiệu suất là 80%. Vậy trong 30 ngày lượng thể tích khí sulfur dioxide tạo thành là bao nhiêu m<sup>3</sup>? (Kết quả làm tròn đến hàng đơn vị)",
        "images": [],
        "correctAnswer": "238",
        "explanation": "Đáp án: 238.<br/>S + O<sub>2</sub> → (t°)  SO<sub>2</sub><br/>0,4 kmol<br/>23SOV0,4.24,79.80%.30238m==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "h11_c2_de2_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Hỗn hợp X gồm N<sub>2</sub> và H<sub>2</sub> có tỉ lệ mol tương ứng là 1 : 3. Nung nóng X trong bình kín (450℃, xúc tác Fe) một thời gian, thu được hỗn hợp khí có số mol giảm 5% so với ban đầu. Hiệu suất của phản ứng tổng hợp NH<sub>3</sub> là bao nhiêu phần trăm?",
        "images": [],
        "correctAnswer": "10",
        "explanation": "Đáp án: 10.<br/>Chọn  22NHn1moln3mol=Þ=   Tổng số mol khí ban đầu là 4 mol  Þ  n<sub>khí giảm</sub> = 4.5% = 0,2 mol<br/>32223N(g)       H(g)NH(g)Ban ñaàu:      1                   3(mol)Phaûn öùng:    x                   3x+ ⇌ 2x            (mol)Caân baèng:  1-x                3-3x2x            (mol)<br/>Tổng số mol khí sau khi phản ứng là 1 – x + 3 – 3x + 2x = 4 – 2x (mol)<br/>Số mol khí giảm so với ban đầu là 2x  Þ  2x = 0,2  Þ  x = 0,1  Þ  H% =  0,1.100%10%.1=<br/>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      }
    ]
  },
  {
    "id": "h11_c2_de3",
    "code": "116",
    "title": "Đề Kiểm Tra Số 3 - H2SO4 & Muối Sulfate (Mã 116)",
    "topic": "Tính acid mạnh, tính oxi hóa mạnh của H2SO4 đặc & Nhận biết ion Ba2+",
    "badge": "Mã 116",
    "chapter": 2,
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10,
    "questions": [
      {
        "id": "h11_c2_de3_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Vị trí (chu kì, nhóm) của nguyên tố nitrogen trong bảng tuần hoàn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chu kì 2, nhóm V",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "chu kì 3, nhóm V",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "chu kì 2, nhóm VI",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "chu kì 3, nhóm IV",
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
        "id": "h11_c2_de3_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong nghiên cứu, khí nitrogen thường được dùng để tạo bầu khí quyển trơ dựa trên cơ sở nào?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen có tính oxi hóa mạnh",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nitrogen rất bền với nhiệt",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nitrogen khó hóa lỏng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nitrogen không có cực",
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
        "id": "h11_c2_de3_p1_q3",
        "number": 3,
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
        "displayNumber": 3
      },
      {
        "id": "h11_c2_de3_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dung dịch NH<sub>3</sub>vào dung dịch chất nào sau đây thu được kết tủa trắng?",
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
            "text": "H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "H<sub>3</sub>PO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "AlCl<sub>3</sub>",
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
        "id": "h11_c2_de3_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong quá trình tổng hợp ammonia theo quy trình Haber (Haber – Bosch), sau khi đã hóa lỏng ammonia, hydrogen và nitrogen sẽ:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "qua ống dẫn khí thải và được loại bỏ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "đưa trở lại buồng phản ứng để tái sử dụng",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tiếp tục qua lò phản ứng số 2 để tăng hiệu suất tổng hợp",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "hydrogen được tái sử dụng, còn nitrogen loại bỏ dựa vào tỉ trọng",
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
        "id": "h11_c2_de3_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Muối ammonium tan kém trong nước",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Muối ammonium là chất điện li yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Muối ammonium kém bền với nhiệt",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Dung dịch muối ammonium có tính chất base",
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
        "id": "h11_c2_de3_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một nhà máy phân bón tổng hợp ammonia với công suất 34 tấn/giờ. Trong một giờ, khối lượng nitrogen và hydrogen đã phản ứng lần lượt là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "28 tấn và 2 tấn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "14 tấn và 2 tấn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "28 tấn và 6 tấn",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "28 tấn và 4 tấn",
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
        "id": "h11_c2_de3_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Oxide của nitrogen được tạo thành ở nhiệt độ cao, khi nitrogen có trong không khí bị oxi hóa được gọi là",
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
            "isCorrect": true
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
        "id": "h11_c2_de3_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Xét phản ứng hóa học thường xảy ra cùng với quá trình đốt cháy nhiên liệu trong buồn đốt động cơ:  ()()()22rNg  Og2NOg,H180,6kJD=+ ⇌ <br/>Nhận xét nào sau đây về phản ứng là không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nitrogen là chất oxi hóa",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thuận thu nhiệt",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hiệu suất phản ứng rất thấp",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nitrogen là chất khử",
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
        "id": "h11_c2_de3_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Đặc điểm nào sau đây là đúng để giải thích tính kém bền nhiệt của HNO<sub>3</sub>?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Liên kết O – H phân cực mạnh về phía O",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Liên kết N  O là liên kết cho nhận kém bền",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên tử N có số oxi hóa +5 là số oxi hóa cao nhất của N",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HNO<sub>3</sub> có khả năng nhường proton cho nước",
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
        "id": "h11_c2_de3_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong công nghiệp, quá trình sản xuất Ca(NO<sub>3</sub>)<sub>2</sub> cùng làm phân bón được thực hiện bằng phản ứng giữa dung dịch HNO<sub>3</sub> với hợp chất phổ biến, giá rẻ nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CaO",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ca(OH)<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CaCO<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "CaSO<sub>4</sub>",
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
        "id": "h11_c2_de3_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Các hình ảnh dưới đây mô tả cách pha loãng H<sub>2</sub>SO<sub>4</sub> đặc:<br/>Hình ảnh mô tả đúng cách pha loãng acid đảm bảo an toàn là",
        "images": [
          "/assets/hoa12/c5/h11_c2_de3_image2.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hình 1",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hình 2",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hình 3",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hình 4",
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
        "id": "h11_c2_de3_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một trong những nguồn nguyên liệu sản xuất sulfuric acid hiện nay là quặng pyrite. Thành phần chính có trong quặng pyrite là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "FeS<sub>2</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CuFeS<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "CaSO<sub>4</sub>.H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "HgS",
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
        "id": "h11_c2_de3_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử nào sau đây không phân cực?",
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
            "text": "SO<sub>2</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "S<sub>8</sub>",
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
        "displayNumber": 14
      },
      {
        "id": "h11_c2_de3_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho dung dịch NaOH vào 100 ml dung dịch NH<sub>4</sub>NO<sub>3</sub> 1M, đun nóng thu được V lít khí ở đkc. Giá trị của V là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2,4790",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "4,9580",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "7,4370",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1,2395",
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
        "id": "h11_c2_de3_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một bạn học sinh thu khí SO<sub>2</sub> vào bình tam giác và đậy miệng bình bằng bông tẩm dung dịch E (để giữ không cho khí SO<sub>2</sub> bay ra) theo sơ đồ bên. Theo em, để hiệu quả nhất, bạn học sinh cần sử dụng dung dịch E là dung dịch nào sau đây?",
        "images": [
          "/assets/hoa12/c5/h11_c2_de3_image3.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Giấm ăn",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Muối ăn",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nước vôi",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nước máy",
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
        "id": "h11_c2_de3_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng hóa học nào sau đây đóng vai trò chính chuyển hóa sulfur dioxide trong không khí ô nhiễm gây mưa acid?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "SO<sub>2</sub> + NaOH → NaHSO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "SO<sub>2</sub> + 2H<sub>2</sub>S → 3S + 2H<sub>2</sub>O",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "SO<sub>2</sub> + H<sub>2</sub>O + Br<sub>2</sub> → 2HBr + H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "SO<sub>2</sub> + NO<sub>2</sub> → SO<sub>3</sub> + NO",
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
        "id": "h11_c2_de3_p1_q18",
        "number": 18,
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
            "text": "MgSO<sub>4</sub>",
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
        "id": "h11_c2_de3_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Nitric acid có công thức Lewis và công thức cấu tạo như hình dưới đây:",
        "images": [
          "/assets/hoa12/c5/h11_c2_de3_image5.png",
          "/assets/hoa12/c5/h11_c2_de3_image6.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phân tử nitric acid, nguyên tử N có hóa trị là V",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phân tử nitric acid, nguyên tử N có số oxi hóa là +4",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Liên kết O – H phân cực mạnh về phía nguyên tử oxygen",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Liên kết N  O là liên kết cho – nhận",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. S. Nguyên tử N có hóa trị là IV.<br/>b. S. Nguyên tử N có số oxi hóa là +5.<br/>c. Đ.<br/>d. Đ",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 19
      },
      {
        "id": "h11_c2_de3_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Nguyên nhân của hiện tượng phú dưỡng là do sự dư thừa chất dinh dưỡng đã cung cấp nguồn thức ăn dồi dào cho sinh vật phù du phát triển mạnh",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Thông thường, khi hàm lượng nitrogen trong nước đạt 300  g/Lm  và clorine đạt 20  g/Lm sẽ gây ra hiện tượng phú dưỡng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hiện tượng phú dưỡng làm giảm hàm lượng oxygen trong nước, gây ảnh hưởng xấu cho các loài sinh vật khác trong ao hồ",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguồn dinh dưỡng từ ao hồ thường có nguồn gốc từ nước thải nông nghiệp, công nghiệp và sinh hoạt thông qua các cống dẫn nước cố định",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khử trùng ao hồ sau khi tát cạn bằng vôi sống (CaO) cũng góp phần ra hiện tượng phú dưỡng",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. S. Hàm lượng nitrogen và phosphorus.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Không ảnh hưởng",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 20
      },
      {
        "id": "h11_c2_de3_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Sulfuric acid là hóa chất hàng đầu được dùng trong nhiều ngành sản xuất",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sulfuric acid được sử dụng rộng rãi trong sản xuất phân bón hóa học",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sulfuric acid được sử dụng trong sản xuất chất tẩy rửa, sơn, phẩm màu, thuốc trừ sâu, giấy, chế biến dầu mỏ,",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nguyên liệu chính để sản xuất sulfuric acid trong công nghiệp là các muối sulfate",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong công nghiệp, sulfuric acid chủ yếu được sản xuất bằng phương pháp sulfate",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Nguyên liệu chính để sản xuất sulfuric acid trong công nghiệp là S, FeS<sub>2</sub>.<br/>d. S. Sulfuric acid chủ yếu được sản xuất bằng phương pháp tiếp xúc",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 21
      },
      {
        "id": "h11_c2_de3_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Khí SO<sub>2</sub> do các nhà máy thải ra là nguyên nhân chính trong việc gây ô nhiễm môi trường. Theo quy chuẩn kĩ thuật quốc gia về chất lượng không khí xung quanh (QCVN 05:2013/BTNMT) thì nếu lượng SO<sub>2</sub> vượt quá 350  ì g/m<sup>3</sup> không khí đo trong 1 giờ ở thành phố thì coi như không khí bị ô nhiễm",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Số oxi hóa của sulfur trong phân tử SO<sub>2</sub> là +2",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "SO<sub>2</sub> là nguyên nhân chính gây ra hiện tượng mưa acid",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nồng độ SO<sub>2</sub> cao gây viêm và kích ứng hệ hô hấp",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu lấy 50 lít không khí trong 1 giờ ở một thành phố và phân tích thấy có 0,012 mg SO<sub>2</sub> thì có thể kết luận rằng không khí ở thành phố đó bị ô nhiễm",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. S. Số oxi hóa của S trong SO<sub>2</sub> là +4.<br/>b. Đ.<br/>c. Đ.<br/>d. S.<br/>50 lít = 0,05 m<sup>3</sup> không khí có 0,012 mg = 12  ì g SO<sub>2</sub><br/>1 m<sup>3</sup> không khí có 1.12/0,05 = 240 mg SO<sub>2</sub> < 350  ì g  không khí ở thành phố đó chưa bị ô nhiễm",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 22
      },
      {
        "id": "h11_c2_de3_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các nguyên liệu sau: sulfur, quặng pyrite (FeS<sub>2</sub>), không khí, nước, vanadium (V) oxide (V<sub>2</sub>O<sub>5</sub>). Có bao nhiêu nguyên liệu được sử dụng trong công nghiệp sản xuất sulfuric acid?",
        "images": [],
        "correctAnswer": "5",
        "explanation": "Đáp án: 5",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "h11_c2_de3_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất sau: S<sub>8</sub>, H<sub>2</sub>S, N<sub>2</sub>, NH<sub>3</sub>, SO<sub>2</sub> và H<sub>2</sub>SO<sub>4</sub>, Có bao nhiêu chất trong dãy chất trên vừa có tính khử vừa có tính oxi hóa?",
        "images": [],
        "correctAnswer": "4",
        "explanation": "Đáp án: 4",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "h11_c2_de3_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Sự phụ thuộc của độ tan khí ammonia trong nước vào nhiệt độ được mô tả ở hình dưới đây:<br/>Nồng độ phần trăm (%) của dung dịch ammonia bão hòa ở 30<sup>o</sup>C là bao nhiêu? (Kết quả làm tròn đến hàng phần mười)",
        "images": [
          "/assets/hoa12/c5/h11_c2_de3_image9.png"
        ],
        "correctAnswer": "28,6",
        "explanation": "Đáp án: 28,6.<br/>Nồng độ phần trăm của ammonia bão hòa:  C% = [40 / (40 + 100)] &times; 100% = 28,57%",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "h11_c2_de3_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho 0,008 mol một loại hợp chất oleum (có công thức H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>) vào nước thu được dung dịch X. Để trung hoà dung dịch X cần dùng vừa đủ 48 gam dung dịch NaOH 4%. Tìm giá trị của n?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2",
        "explanationImages": [
          "/assets/hoa12/c5/h11_c2_de3_image13.png"
        ],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "h11_c2_de3_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Phản ứng chuyển hóa hydrogen sulfide trong khí thiên nhiên thành sulfur được thực hiện theo sơ đồ phản ứng: H<sub>2</sub>S + SO<sub>2</sub> → S + H<sub>2</sub>O.<br/>Khối lượng sulfur tối đa tạo ra khi chuyển hóa 1 000 m<sup>3</sup> khí thiên nhiên (đkc) (chứa 5 mg H<sub>2</sub>S/m<sup>3</sup>) là bao nhiêu gam?",
        "images": [],
        "correctAnswer": "7,06",
        "explanation": "Đáp án: 7,06.<br/>2H<sub>2</sub>S + SO<sub>2</sub> &rarr; 3S + 2H<sub>2</sub>O<br/>m<sub>H<sub>2</sub>S</sub> = 1000 &times; 5 mg = 5000 mg = 5 g &rArr; n<sub>H<sub>2</sub>S</sub> = 5 / 34 mol.<br/>Theo PTHH: n<sub>S</sub> = 3/2 &times; n<sub>H<sub>2</sub>S</sub> = (3/2) &times; (5/34) &approx; 0,2206 mol.<br/>&rArr; m<sub>S</sub> = 0,2206 &times; 32 &approx; 7,06 g.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "h11_c2_de3_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Trong tự nhiên, phản ứng giữa nitrogen và oxygen xảy ra trong những cơn mưa dông sấm sét, khởi đầu cho quá trình chuyển hóa từ nitrogen thành nitric acid. Nitric acid tan trong nước mưa và phân li ra ion nitrate ( 3NO- ) là một dạng phân đạm mà cây trong hấp thụ được để sinh trưởng và phát triển. Quá trình chuyển hóa từ nitrogen thành nitric acid qua mấy giai đoạn?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.<br/>N<sub>2</sub> &rarr; NO &rarr; NO<sub>2</sub> &rarr; HNO<sub>3</sub> <br/>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  },
  {
    "id": "h11_c2_de4",
    "code": "117",
    "title": "Đề Kiểm Tra Tổng Hợp Chương 2 (Mã 117)",
    "topic": "Tổng hợp toàn diện kiến thức Nitrogen và Sulfur",
    "badge": "Mã 117",
    "chapter": 2,
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10,
    "questions": [
      {
        "id": "h11_c2_de4_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong không khí, chất nào sau đây chiếm phần trăm thể tích lớn nhất?",
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
            "text": "NO",
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
            "text": "N<sub>2</sub>",
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
        "id": "h11_c2_de4_p1_q2",
        "number": 2,
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
        "displayNumber": 2
      },
      {
        "id": "h11_c2_de4_p1_q3",
        "number": 3,
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
        "displayNumber": 3
      },
      {
        "id": "h11_c2_de4_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân tử ammonia có dạng hình học nào sau đây?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chóp tam giác",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Chữ T",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Chóp tứ giác",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tam giác đều",
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
        "id": "h11_c2_de4_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho thí nghiệm như hình vẽ, bên trong bình có chứa khí ammonia, trong chậu thủy tinh chứa nước có nhỏ vài giọt phenolphthalein.<br/>Hiện tượng xảy ra trong thí nghiệm là",
        "images": [
          "/assets/hoa12/c5/h11_c2_de4_image8.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nước phun vào bình và chuyển thành màu hồng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nước phun vào bình và chuyển thành màu tím",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "nước phun vào bình và không có màu",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nước phun vào bình và chuyển thành màu xanh",
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
        "id": "h11_c2_de4_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho cân bằng hóa học sau: N<sub>2</sub> (g) + 3H<sub>2</sub> (g) ⇌ 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> < 0. Tổng số mol của hỗn hợp khí khi hệ đạt cân bằng ở nhiệt độ 400<sup>o</sup>C và 500<sup>o</sup>C là lượt là x và y. Mối quan hệ giữa x và y là",
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
            "text": "5x = 4y",
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
        "id": "h11_c2_de4_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phân biệt được dung dịch NH<sub>4</sub>Cl và NaCl bằng thuốc thử là dung dịch",
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
            "text": "KNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "KOH",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "K<sub>2</sub>SO<sub>4</sub>",
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
        "id": "h11_c2_de4_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi so sánh phân tử ammonia với ion ammonium, nhận định nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Đều chứa liên kết ion",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Đều có tính acid yếu trong nước",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đều có tính base yếu trong nước",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Đều chứa nguyên tử N có số oxi hoá là -3",
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
        "id": "h11_c2_de4_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phản ứng sau:<br/>(a) S + O<sub>2</sub> → (t°) SO<sub>2</sub> (b) Hg + S → HgS<br/>(c) H<sub>2</sub> +  18 S<sub>8</sub> → H<sub>2</sub>S.(d) Fe + S → (t°) FeS<br/>Có bao nhiêu phản ứng trong đó sulfur đóng vai trò là chất khử?",
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
        "id": "h11_c2_de4_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Khi nhiệt kế thủy ngân vỡ, rắc chất bột nào sau đây lên thủy ngân rơi vãi sẽ chuyển hóa chúng thành hợp chất bền, ít độc hại?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Than đá",
            "isCorrect": false
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
            "text": "Muối ăn",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sulfur",
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
        "id": "h11_c2_de4_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sulfur dioxide đóng vai trò chất khử khi tác dụng với chất nào sau đây?",
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
            "text": "NO<sub>2</sub>",
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
            "text": "KOH",
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
        "id": "h11_c2_de4_p1_q12",
        "number": 12,
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
        "displayNumber": 12
      },
      {
        "id": "h11_c2_de4_p1_q13",
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
        "id": "h11_c2_de4_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Một phương pháp được đề xuất để loại bỏ SO<sub>2</sub> khỏi khí thải của nhà máy điện bằng cách dẫn khí thải qua dung dịch H<sub>2</sub>S. Cần tối đa bao nhiêu m<sup>3</sup> H<sub>2</sub>S (ở đkc) để loại bỏ SO<sub>2</sub> sinh ra khi đốt cháy 2,0 tấn than chứa sulfur chiếm 3% theo khối lượng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "23,24 m<sup>3</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "92,96 m<sup>3</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "46,48 m<sup>3</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "34,86 m<sup>3</sup>",
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
        "id": "h11_c2_de4_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các nhận định sau về cấu tạo phân tử nitric acid:<br/>(a) Liên kết O – H phân cực về oxygen.(b) Nguyên tử N có số oxi hóa là +5.<br/>(c) Nguyên tử N có hóa trị bằng IV.(d) Liên kết cho – nhận N → O kém bền.<br/>Số nhận định đúng là",
        "images": [
          "/assets/hoa12/c5/h11_c2_de4_image15.png"
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
        "explanation": "",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "h11_c2_de4_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cách pha loãng dung dịch sulfuric acid đặc nào sau đây đúng?",
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
            "text": "Rót nhanh nước vào acid và khuấy đều",
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
            "text": "Rót từ từ acid vào nước và khuấy đều",
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
        "id": "h11_c2_de4_p1_q17",
        "number": 17,
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
            "text": "MgSO<sub>4</sub>",
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
        "id": "h11_c2_de4_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Sulfuric acid là một trong những hoá chất quan trọng nhất được sử dụng trong công nghiệp; được sản xuất hàng trăm triệu tấn mỗi năm, chiếm nhiều nhất trong ngành công nghiệp hoá chất. Phương pháp sản xuất sulfuric acid phổ biến nhất là phương pháp tiếp xúc, theo đó acid có thể được điều chế qua các giai đoạn sau:<br/>(1) FeS<sub>2</sub>(s) + O<sub>2</sub>(g) → (t°)  Fe<sub>2</sub>O<sub>3</sub>(s) + SO<sub>2</sub>(g)<br/>(2) SO<sub>2</sub>(g) + O<sub>2</sub>(s)  o25450 C, ⇌ (V<sub>2</sub>O<sub>5</sub>, t°) SO<sub>3</sub>(g) ; &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -196 kJ<br/>(3) H<sub>2</sub>SO<sub>4</sub>(aq) + SO<sub>3</sub>(g) → H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l)<br/>(4) H<sub>2</sub>SO<sub>4</sub>.nSO<sub>3</sub>(l) + H<sub>2</sub>O(l) → H<sub>2</sub>SO<sub>4</sub>(aq)<br/>Người ta dùng sulfuric acid đặc H<sub>2</sub>SO<sub>4</sub>(aq) hấp thụ SO<sub>3</sub>(g) trong phản ứng (3), quá trình này được thực hiện trong tháp tiếp xúc. Cách thực hiện nào sau đây sẽ đạt hiệu quả tiếp xúc tốt nhất?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho SO<sub>3</sub>(g) lội qua dung dịch H<sub>2</sub>SO<sub>4</sub>(aq)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "SO<sub>3</sub>(g) được phun vào từ phía trên tháp, H<sub>2</sub>SO<sub>4</sub>(aq) được bơm từ dưới lên",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "SO<sub>3</sub>(g) được xả vào từ phía dưới tháp, H<sub>2</sub>SO<sub>4</sub>(aq) được phun từ trên xuống",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "SO<sub>3</sub>(g) lội qua H<sub>2</sub>SO<sub>4</sub>(aq) được khuấy liên tục với tốc độ cao",
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
        "id": "h11_c2_de4_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Hiện tượng phú dưỡng là một biểu hiện của môi trường ao, hồ bị ô nhiễm do dư thừa các chất dinh dưỡng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Chất thải công nghiệp, chất thải sinh hoạt, … khi không được xử lí theo quy chuẩn, nếu thải vào sông, hồ cũng gây ra hiện tượng phú dưỡng",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hiện tượng phú dưỡng gây cản trở hấp thụ ánh sáng mặt trời vào nước, làm giảm sự quang hợp của thực vật thủy sinh",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Có thể quan sát được hiện tượng phú dưỡng thông qua sự xuất hiện dày đặc của tảo xanh trong nước",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thông thường, khi hàm lượng calcium trong nước đạt 300 μg/L và hàm lượng magnesium đạt 20 μg/L sẽ gây hiện tượng phú dưỡng",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. Đ.<br/>d. S. Dư thừa nitrogen và phosphorus trong nước",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 19
      },
      {
        "id": "h11_c2_de4_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Phương trình hoá học của phản ứng tổng họp ammonia từ nitrogen và hydrogen bằng quá trình Haber như sau: N<sub>2</sub>(g) + 3H<sub>2</sub>(g)  o400600C, 200 bar, Fe- ⇌ 2NH<sub>3</sub>(g) &nbsp; Δ<sub>r</sub>H°<sub>298</sub> = -92 kJ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Tại thời điểm cân bằng, hỗn hợp trong buồng phản ứng gồm ammonia, nitrogen và hydrogen",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ammonia dễ hoá lỏng hơn nên khi làm lạnh hỗn hợp sẽ tách được ammonia lỏng ra khỏi hỗn hợp khí",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nếu không sử dụng chất xúc tác thì không thể tạo thành ammonia",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu giảm áp suất của hệ thì cân bằng sẽ chuyển dịch theo chiều thuận",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Chất xúc tác làm tăng tốc độ phản ứng còn sản phẩm ammonia vẫn được tạo thành trong quá trình phản ứng kể cả không có xúc tác.<br/>d. S. Giảm áp suất làm cân bằng chuyển dịch theo chiều nghịch",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 20
      },
      {
        "id": "h11_c2_de4_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho các phát biểu sau về sulfuric acid và muối sulfate:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sulfuric acid đặc có tính háo nước, gây bỏng nặng khi tiếp xúc với da tay",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi bị bỏng sulfuric acid đặc, điều đầu tiên cần làm là xả nhanh chỗ bỏng với nước lạnh",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sulfuric acid loãng có tính oxi hóa mạnh, khi tác dụng với kim loại không sinh ra khí hydrogen",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Thuốc thử nhận biết sulfuric acid và muối sulfate là ion Ba<sup>2+</sup> trong các dung dịch BaCl<sub>2</sub>, Ba(OH)<sub>2</sub>, Ba(NO<sub>3</sub>)<sub>2</sub>",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đ.<br/>b. Đ.<br/>c. S. Sulfuric acid loãng có tính acid mạnh.<br/>d. Đ",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 21
      },
      {
        "id": "h11_c2_de4_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Sau mỗi trận mưa giông, một lượng nitrogen trong không khí được chuyển hóa thành ion nitrate và hòa tan vào nước mưa theo sơ đồ chuyển hóa dưới đây:<br/>(1)(2)(3)(4)2233NNONOHNOHNO+- →  →  →  → +",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả bốn phản ứng mà nguyên tố nitrogen đóng vai trò là chất khử",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sản phẩm của phản ứng (4) có thể dùng làm phân bón",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Trong thực tế, phản ứng (1) xảy ra ở nhiệt độ thường",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để tạo ra được 124 kg ion nitrate cần dùng ở điều kiện chuẩn là 991,6 m<sup>3</sup> khí N<sub>2</sub>. Biết hiệu suất của toàn bộ quá trình là 5%",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. S. Phản ứng (4) không phải là phản ứng oxi hóa khử.<br/>b. Đ.<br/>c. S. Ở nhiệt độ cao trên 3000°C hoặc có tia lửa điện, nitrogen kết hợp với oxygen, tạo ra nitrogen monoxide (NO).<br/>d. S.  22233NNNNO1241n2nn.kmolV495,8m62.25%-=Þ=Þ=",
        "explanationImages": [],
        "points": 1,
        "displayNumber": 22
      },
      {
        "id": "h11_c2_de4_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Phân tử sulfur trong trạng thái rắn tồn tại ở dạng vòng gồm có bao nhiêu nguyên tử sulfur?",
        "images": [],
        "correctAnswer": "8",
        "explanation": "Đáp án: 8",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 23
      },
      {
        "id": "h11_c2_de4_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các chất khí: NO, NO<sub>2</sub>, SO<sub>2</sub>, N<sub>2</sub>O và N<sub>2</sub>. Có bao nhiêu chất khí là nguyên nhân góp phần gây ra hiện tượng mưa acid?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 24
      },
      {
        "id": "h11_c2_de4_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho dung dịch (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> tác dụng lần lượt với các dung dịch NaOH, Ba(OH)<sub>2</sub>, MgCl<sub>2</sub>, Ba(NO<sub>3</sub>)<sub>2</sub> và NaNO<sub>3</sub>. Sau khi các phản ứng xảy trên ra hoàn toàn, có bao nhiêu phản ứng thu được kết tủa?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 25
      },
      {
        "id": "h11_c2_de4_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Khi cho sulfuric acid đặc, nóng lần lượt tiếp xúc với các chất sau: đường saccharose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>), bột lưu huỳnh, thanh platinum, bột kẽm, thuốc tím (KMnO<sub>4</sub>), muối ăn (NaCl). Có bao nhiêu chất bị sulfuric acid đặc, nóng oxi hoá?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 26
      },
      {
        "id": "h11_c2_de4_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Hỗn hợp X gồm N<sub>2</sub> và H<sub>2</sub> có tỉ khối đối với H<sub>2</sub> bằng 3,6. Nung nóng X trong bình kín ở nhiệt độ khoảng 450<sup>0</sup>C có bột Fe xúc tác, thu được hỗn hợp khí Y có số mol giảm 8% so với ban đầu. Hiệu suất của phản ứng tổng hợp NH<sub>3</sub> là bao nhiêu phần trăm?",
        "images": [],
        "correctAnswer": "20",
        "explanation": "Đáp án: 20.<br/>M<sub>X</sub> = 3,6.2 = 7,2<br/>Giả sử có 1 mol N<sub>2</sub> và 4 mol H<sub>2</sub>. Vậy số mol ban đầu là 5 mol.<br/>Phương trình hoá học:  N<sub>2</sub>           +        3H<sub>2</sub> ⇌ 2NH<sub>3</sub><br/>Ban đầu:                   1                   4                     0                   mol<br/>Phản ứng:                    x                   3x                        2x                 mol<br/>Sau phản ứng:        (1 – x)    (4 – 3x)                2x                 mol<br/>Tổng số mol khí sau phản ứng: n<sub>sau</sub> = (1 – x) + (4 – 3x) + 2x = 5 – 2x (mol)<br/>Số mol Y giảm 8% so với ban đầu  5 – 2x = (100% – 8%).5  x = 0,2<br/>Hiệu suất phản ứng tính theo N<sub>2</sub> (do 1/1 < 4/3)<br/>Ta có:  0,2H .100% 20%1==",
        "explanationImages": [
          "/assets/hoa12/c5/h11_c2_de4_image25.png"
        ],
        "points": 0.25,
        "displayNumber": 27
      },
      {
        "id": "h11_c2_de4_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Sulfuric acid có thể được điều chế từ quặng pyrite theo sơ đồ:<br/>FeS<sub>2</sub> <span class='inline-block mx-1 text-slate-800'>→</span> SO<sub>2</sub> <span class='inline-block mx-1 text-slate-800'>→</span> SO<sub>3</sub> <span class='inline-block mx-1 text-slate-800'>→</span> H<sub>2</sub>SO<sub>4</sub><br/>Thể tích (L) của dung dịch H<sub>2</sub>SO<sub>4</sub> 98% (D = 1,82 g/mL) thu được từ 1 tấn quặng pyrite (chứa 80% FeS<sub>2</sub>). Biết hiệu suất của cả quá trình là 90%, các tạp chất trong quặng không chứa sulfur. (Kết quả làm tròn đến hàng đơn vị)",
        "images": [],
        "correctAnswer": "659",
        "explanation": "Đáp án: 659.<br/>2FeSm1.80%0,8== tấn = 800 kg<br/>Ta có sơ đồ:  FeS<sub>2</sub> &rarr; 2SO<sub>2</sub> &rarr; 2SO<sub>3</sub> &rarr; 2H<sub>2</sub>SO<sub>4</sub> <br/>kmol: 800120   800120 .2.90% = 12<br/>24HSOm12.981176kg==    24ddHSO1176mkg98%=  Þ  =»24ddHSO1176V659L.98%.1,82<br/>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 28
      }
    ]
  }
];

export const HOA11_CHUONG2_7_EXAMS: Chuong2Exam[] = HOA11_CHUONG2_EXAMS;

export const HOA11_CHUONG2_HANDBOOK = [{"title":"1. Đơn Chất Nitrogen (N2) & Liên Kết Ba Bền Vững","icon":"💨","content":["Cấu hình electron nguyên tử N (Z = 7): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup> (có 3 electron độc thân).","Phân tử N<sub>2</sub> có liên kết ba N&equiv;N rất bền (năng lượng liên kết 945 kJ/mol), nên ở điều kiện thường N<sub>2</sub> trơ về mặt hóa học.","Ở nhiệt độ cao hoặc tia lửa điện, N<sub>2</sub> hoạt động: thể hiện tính khử (tác dụng với O<sub>2</sub> tạo NO) và tính oxi hóa (tác dụng với H<sub>2</sub> tạo NH<sub>3</sub>, tác dụng với kim loại hoạt động tạo muối nitride)."]},{"title":"2. Ammonia (NH3) & Muối Ammonium","icon":"🧪","content":["NH<sub>3</sub> tan rất nhiều trong nước nhờ tạo liên kết hydrogen với nước.","Dung dịch NH<sub>3</sub> có tính base yếu do cặp electron tự do trên nguyên tử N có khả năng nhận H<sup>+</sup>: NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup>.","Tính khử: Số oxi hóa của N trong NH<sub>3</sub> là -3 (thấp nhất) &rArr; NH<sub>3</sub> có tính khử mạnh (cháy trong O<sub>2</sub>, khử oxide kim loại như CuO).","Muối ammonium (NH<sub>4</sub><sup>+</sup>) dễ tan trong nước, kém bền nhiệt, bị nhiệt phân giải phóng NH<sub>3</sub> hoặc N<sub>2</sub>/N<sub>2</sub>O."]},{"title":"3. Một Số Hợp Chất Của Nitrogen Với Oxygen & Mưa Acid","icon":"🌧️","content":["Các oxide của nitrogen (NO<sub>x</sub>): NO (không màu, hóa nâu trong không khí tạo NO<sub>2</sub>), NO<sub>2</sub> (màu nâu đỏ, độc).","NO<sub>x</sub> phát thải từ khí thải động cơ, nhà máy nhiệt điện; trong khí quyển bị oxi hóa tạo HNO<sub>3</sub> gây ra hiện tượng <b>mưa acid</b> (pH < 5,6) ăn mòn công trình, phá hủy mùa màng.","Hiện tượng <b>phú dưỡng (eutrophication)</b> do dư thừa nitrate (NO<sub>3</sub><sup>-</sup>) và phosphate (PO<sub>4</sub><sup>3-</sup>) trong nguồn nước làm tảo phát triển bùng nổ, gây suy giảm oxy hòa tan."]},{"title":"4. Nitric Acid (HNO3) & Muối Nitrate","icon":"⚡","content":["HNO<sub>3</sub> là acid mạnh và có <b>tính oxi hóa cực mạnh</b> do N có số oxi hóa +5 (cao nhất).","Tác dụng với hầu hết kim loại (trừ Au, Pt) không giải phóng khí H<sub>2</sub> mà tạo ra các sản phẩm khử của N: NO<sub>2</sub> (HNO<sub>3</sub> đặc), NO (HNO<sub>3</sub> loãng), N<sub>2</sub>O, N<sub>2</sub>, NH<sub>4</sub>NO<sub>3</sub>.","Al, Fe, Cr bị <b>thụ động hóa</b> trong HNO<sub>3</sub> đặc nguội (và H<sub>2</sub>SO<sub>4</sub> đặc nguội).","Tất cả các muối nitrate đều tan tốt trong nước và kém bền nhiệt, bị nhiệt phân tạo oxide/kim loại + O<sub>2</sub>."]},{"title":"5. Sulfur, Sulfur Dioxide (SO2) & Sulfuric Acid (H2SO4)","icon":"🌋","content":["Sulfur (S) có số oxi hóa -2, 0, +4, +6 &rArr; S vừa có tính khử vừa có tính oxi hóa. SO<sub>2</sub> vừa có tính khử vừa có tính oxi hóa.","<b>H<sub>2</sub>SO<sub>4</sub> đặc:</b> Có tính oxi hóa mạnh (oxi hóa Cu, S, C...) và <b>tính háo nước cực mạnh</b> (làm than hóa đường saccharose: C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> → 12C + 11H<sub>2</sub>O).","<b>Nhận biết ion sulfate (SO<sub>4</sub><sup>2-</sup>):</b> Dùng dung dịch chứa ion Ba<sup>2+</sup> (BaCl<sub>2</sub> hoặc Ba(OH)<sub>2</sub>) tạo kết tủa trắng BaSO<sub>4</sub> không tan trong acid mạnh."]}];

const STORAGE_PREFIX = 'hoa11_c2_';

export function calculateChuong2ExamScore(exam: Chuong2Exam, answers: Record<string, any>): {
  score: number;
  part1Score: number;
  part2Score: number;
  part3Score: number;
  correctCount: number;
  totalQuestions: number;
} {
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
        else if (correctSub === 4) {
          part2Score += 1.0;
          correctCount += 1;
        }
      }
    } else if (q.part === 3) {
      if (userAns !== undefined && userAns !== null && String(userAns).trim() !== '') {
        const normUser = String(userAns).trim().toLowerCase().replace(',', '.');
        const normCorrect = String(q.correctAnswer || '').trim().toLowerCase().replace(',', '.');
        if (normUser === normCorrect) {
          part3Score += (q.points || 0.25);
          correctCount += 1;
        }
      }
    }
  });

  const rawTotal = part1Score + part2Score + part3Score;
  const score = Math.round(rawTotal * 100) / 100;

  return {
    score,
    part1Score: Math.round(part1Score * 100) / 100,
    part2Score: Math.round(part2Score * 100) / 100,
    part3Score: Math.round(part3Score * 100) / 100,
    correctCount,
    totalQuestions: exam.questions.length
  };
}

export function getChuong2UserProgress() {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}progress`);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {
    completedSets: {},
    starredQuestions: [],
    examScores: {},
    totalXP: 0,
    rankTitle: 'Tân Binh Hóa Học',
    lastActive: new Date().toISOString()
  };
}

export function getChuong2ExamHistory(): Chuong2ExamAttempt[] {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}exam_history`);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
}

export function saveChuong2ExamAttempt(attempt: Chuong2ExamAttempt) {
  try {
    const hist = getChuong2ExamHistory();
    hist.unshift(attempt);
    if (hist.length > 50) hist.pop();
    localStorage.setItem(`${STORAGE_PREFIX}exam_history`, JSON.stringify(hist));

    const p = getChuong2UserProgress();
    const prev = p.examScores[attempt.examId] || { score: 0, date: '', attempts: 0 };
    p.examScores[attempt.examId] = {
      score: Math.max(prev.score, attempt.score),
      date: attempt.completedAt,
      attempts: prev.attempts + 1
    };
    p.totalXP = (p.totalXP || 0) + Math.round(attempt.score * 20);
    p.rankTitle = getRankTitle(p.totalXP);
    localStorage.setItem(`${STORAGE_PREFIX}progress`, JSON.stringify(p));
  } catch (e) {}
}

export function saveChuong2ExamResult(examId: string, score: number, durationSeconds: number = 0) {
  try {
    const p = getChuong2UserProgress();
    const prev = p.examScores[examId] || { score: 0, date: '', attempts: 0 };
    p.examScores[examId] = {
      score: Math.max(prev.score, score),
      date: new Date().toISOString(),
      attempts: prev.attempts + 1
    };
    p.totalXP = (p.totalXP || 0) + Math.round(score * 20);
    p.rankTitle = getRankTitle(p.totalXP);
    localStorage.setItem(`${STORAGE_PREFIX}progress`, JSON.stringify(p));
  } catch (e) {}
}

export function shuffleChuong2Exam(exam: Chuong2Exam): Chuong2Exam {
  if (!exam || !exam.questions) return exam;
  const cloned: Chuong2Question[] = JSON.parse(JSON.stringify(exam.questions));
  const p1 = cloned.filter(q => q.part === 1);
  const p2 = cloned.filter(q => q.part === 2);
  const p3 = cloned.filter(q => q.part === 3);

  const shuffleArray = <T>(arr: T[]): T[] => {
    const res = [...arr];
    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [res[i], res[j]] = [res[j], res[i]];
    }
    return res;
  };

  const shuffledP1 = shuffleArray(p1).map(q => {
    if (q.options && q.options.length > 0) {
      const origCorrectOpt = q.options.find(o => o.isCorrect) || q.options.find(o => o.letter === q.correctAnswer);
      const origCorrectText = origCorrectOpt?.text;
      const shuffledOptions = shuffleArray(q.options);
      const letters = ['A', 'B', 'C', 'D'];
      shuffledOptions.forEach((opt, idx) => { opt.letter = letters[idx]; });
      const newCorrectOpt = shuffledOptions.find(o => (origCorrectText && o.text === origCorrectText) || o.isCorrect);
      const newCorrectLetter = newCorrectOpt?.letter || 'A';
      shuffledOptions.forEach(opt => { opt.isCorrect = (opt.letter === newCorrectLetter); });
      return { ...q, options: shuffledOptions, correctAnswer: newCorrectLetter };
    }
    return q;
  });

  const shuffledP2 = shuffleArray(p2).map(q => {
    if (q.options && q.options.length > 0) {
      const shuffledOptions = shuffleArray(q.options);
      const letters = ['a', 'b', 'c', 'd'];
      shuffledOptions.forEach((opt, idx) => { opt.letter = letters[idx]; });
      return { ...q, options: shuffledOptions };
    }
    return q;
  });

  const shuffledP3 = shuffleArray(p3);

  const finalQuestions = [...shuffledP1, ...shuffledP2, ...shuffledP3].map((q, idx) => ({
    ...q,
    displayNumber: idx + 1
  }));

  return { ...exam, questions: finalQuestions };
}

export function getRankTitle(xp: number): string {
  if (xp >= 5000) return '👑 Thủ Khoa Hóa 11';
  if (xp >= 3000) return '💎 Bậc Thầy Nitrogen & Sulfur';
  if (xp >= 1500) return '🥇 Chuyên Gia Hóa Học';
  if (xp >= 500) return '🥈 Nhà Thực Nghiệm';
  return '🥉 Tân Binh Hóa Học';
}

export const getChuong1RankTitle = getRankTitle;
export const getChuong2RankTitle = getRankTitle;
