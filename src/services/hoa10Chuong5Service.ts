// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU HÓA 10 - CHƯƠNG 5 (CTGDPT 2018 MỚI - CHUẨN BỘ GD&ĐT 2025)
 */

export interface Chuong5Question {
  id: string;
  number: number;
  part: number; // 1: Trắc nghiệm 4 lựa chọn, 2: Đúng/Sai, 3: Trả lời ngắn
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
  level?: string;
  topic?: string;
}

export interface Chuong5MathExample {
  number: number;
  text: string;
  images?: string[];
  solution?: string;
}

export interface Chuong5MathForm {
  id: string;
  title: string;
  method: string;
  examples: Chuong5MathExample[];
}

export interface Chuong5Exam {
  id: string;
  code: string;
  title: string;
  topic: string;
  badge: string;
  duration: number;
  totalQuestions: number;
  totalPoints: number;
  questions: Chuong5Question[];
}

export interface Chuong5Lesson {
  id: string;
  number: number;
  lessonNumber?: number;
  title: string;
  shortTitle?: string;
  badge: string;
  icon?: string;
  description: string;
  theory: string;
  mathForms: Chuong5MathForm[];
  practice: {
    part1: Chuong5Question[];
    part2: Chuong5Question[];
    part3: Chuong5Question[];
  };
  practiceBank?: any;
  practiceQuestions?: any;
  exams: Chuong5Exam[];
}

export const HOA10_CHUONG5_MASTER: Record<string, Chuong5Lesson> = {"bai17":{"id":"bai17","number":17,"lessonNumber":17,"title":"Bài 17. Biến thiên enthalpy trong phản ứng hóa học","shortTitle":"Biến thiên enthalpy trong phản ứng hóa học","badge":"Bài 17","icon":"🧪","description":"Phản ứng tỏa nhiệt, phản ứng thu nhiệt, enthalpy tạo thành chuẩn và phương pháp tính nhiệt phản ứng.","theory":"<h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>I. PHẢN ỨNG THU NHIỆT, PHẢN ỨNG TỎA NHIỆT:</h4><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Khi các phản ứng hoá học xảy ra thường có sự trao đổi nhiệt với môi trường, làm thay đổi nhiệt độ môi trường.</p><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'>Phản ứng thu nhiệt</td><td class='border border-slate-300 p-1.5'>Phản ứng tỏa nhiệt</td></tr><tr><td class='border border-slate-300 p-1.5'>Khái niệm</td><td class='border border-slate-300 p-1.5'>Phản ứng thu nhiệt  là phản ứng hóa học trong đó có sự hấp  th ụ   nhiệt năng từ môi trường.    Môi trường Môi trường Môi trường Môi   trường Phản ứng thu nhiệt</td><td class='border border-slate-300 p-1.5'>Phản ứng toả nhiệt  là phản ứng hóa học trong đó có sự giải phóng nhiệt năng ra môi trường. Môi trường Môi trường Môi trường Phản ứng tỏa nhiệt Môi trường</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ</td><td class='border border-slate-300 p-1.5'>Những lúc nóng nực, pha viên sủi vitamin C vào nước để giải khát, khi viên sủi tan, thấy nước trong cốc mát hơn, đó là do xảy ra phản ứng thu nhiệt.</td><td class='border border-slate-300 p-1.5'>Vào những ngày trời lạnh, nhiều người hay ngồi bên bếp lửa để sưởi. Khi than, củi cháy, không khí xung quanh ấm hơn do phản ứng toả nhiệt.</td></tr><tr><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'>Khi nung vôi, người ta sử dụng phản ứng đốt cháy than để cung cấp nhiệt cho phản ứng phân huỷ đá vôi. Phản ứng đốt than là phản ứng toả nhiệt, phản ứng phân huỷ đá vôi là phản ứng thu nhiệt.</td></tr><tr><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'>- Khi (thuốc tím), nhiệt của ngọn lửa làm cho KMnO 4  bị nhiệt phân, tạo hỗn hợp bột màu đen theo PTHH: 2KMnO 4  → K 2 MnO 4  + MnO 2  + O 2 Đây là phản ứng thu nhiệt. - Nhiệt phân potassium chlorate.</td><td class='border border-slate-300 p-1.5'>- Sự đốt cháy các loại nhiên liệu như xăng, dầu, cồn, khí gas,... xảy ra nhanh, tỏa nhiều nhiệt, dễ gây hoả hoạn, thậm chí gây nổ mạnh, rất khó kiểm soát. Vì vậy, khi sử dụng chúng cần tuân thủ nghiêm ngặt các nguyên tắc phòng cháy. - Sự thay đổi nhiệt độ khi cho vôi sống tác phản ứng với nước. </td></tr></table></h4><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>  Ví dụ 1.  Điền các từ hoặc cụm từ thích hợp vào chỗ trống:   Phản ứng tỏa nhiệt là phản ứng …..(1)……năng lượng dưới dạng nhiệt. Phản ứng thu nhiệt là phản ứng …..(2)……năng lượng dưới dạng nhiệt. A.   (1) cung cấp, (2) hấp th ụ . B.  (1) giải phóng, (2) hấp th ụ . C.   (1)  hấp thụ ,  (2)  giải phóng . D.   (1) tỏa ,  (2)  phân hủy .</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  2.   Theo dõi sự thay đổi nhiệt độ của phản ứng trung hòa : Chuẩn bị:  dung dịch HCl 0,5  M , dung dịch NaOH 0,5 M, 1 cốc 150 mL, giá treo nhiệt kế, nhiệt kế (có dải đo đến 100 0 C), que khuấy và 2 ống đong 100 m L . Tiến hành: - Dùng ống đong lấy 50 mL dung dịch HCl 0,5 M cho vào cốc phản ứng, lắp nhiệt kế lên giá sao cho đầu nhiệt kế nhúng vào dung dịch trong cốc (Hình 17.1). Đọc nhiệt độ dung dịch. - Dùng ống đong khác lấy 50 mL dung dịch NaOH 0,5M cho vào cốc phản ứng. Khuấy nhẹ.   Theo dõi sự thay đổi nhiệt độ của dung dịch và trả lời câu hỏi: 1.  Nhiệt độ trên nhiệt kế thay đổi như thế nào sau khi rót dung dịch NaOH vào cốc?   Phản ứng trung hòa là tỏa nhiệt hay thu nhiệt? 2.  Trong thí nghiệm trên, nếu thay các dung dịch HCl và NaOH bằng các dung dịch loãng hơn thì nhiệt độ thay đổi như thế nào so với thí nghiệm trên? Đáp án: 1. Sau khi rót dung dịch NaOH vào cốc thì nhiệt độ trên nhiệt kế tăng dần. ⇒  Phản ứng tỏa nhiệt. 2. Nếu thay các dung dịch HCl và NaOH bằng các dung dịch loãng hơn thì nhiệt độ tăng chậm hơn.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  3 .  Mỗi quá trình sau đây là thu nhiệt hay tỏa nhiệt? (1)   (lỏng, ở  )  (hơi, ở  ). (2)   (lỏng, ở  )  (rắn, ở  ). (3)   (Đá vôi)   (4) Khí methane   cháy trong oxygen. (5)  2KMnO 4    K 2 MnO 4  + MnO 2  + O 2 . Đáp án: Các phản ứng chuyển trạng thái rắn → lỏng → khí (nhiệt độ tăng) là các phản ứng thu nhiệt vì cần phải cung cấp năng lượng để nâng nhiệt độ còn chuyển từ khí → lỏng → rắn là phản ứng tỏa nhiệt. ⇒  (1) Thu nhiệt; (2) Tỏa nhiệt.  (3) , (5)  Thu nhiệt vì để phản ứng xảy ra cần phải  cung cấp nhiệt . (4) Tỏa nhiệt vì phản ứng methane cháy làm không khí xung quanh nóng, tỏa nhiệt và phát sáng.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  4 .  Các quá trình sau thu nhiệt hay tỏa nhiệt? Giải thích ngắn gọn? (a) Đốt một ngọn nến. (b) Nước đóng băng. (c)  Khi thả viên vitamin C sủi vào cốc nước. (d) Luộc chín quả trứng. (e) Hòa tan một ít bột giặt trong tay với nước, thấy tay ấm. (g) Muối kết tinh từ nước biển ở các ruộng muối. (h) Giọt nước đọng lại trên lá cây vào ban đêm. (i) Đổ mồ hôi sau khi chạy bộ. Đáp án: (a) Phản ứng tỏa nhiệt vì nến (parafin) bị đốt cháy đã giải phóng năng lượng, cung cấp cho việc phát sáng và tỏa nhiệt. (b) Phản ứng tỏa nhiệt vì nước hạ nhiệt độ (hay giải phóng nhiệt) để tạo khối băng. (c) Phản ứng thu nhiệt vì  nhiệt độ của nước trong cốc sẽ giảm đi (hay nước sẽ mát hơn). (d) Phản ứng thu nhiệt vì trứng hấp thu nhiệt khiến các phân tử protein kết dính với nhau làm trứng chín. (e) Phản ứng tỏa nhiệt. Vì khi hòa tan bột giặt trong tay với ít nước, bột giặt giải phóng nhiệt khi hòa tan, tạo phản ứng giúp loại bỏ nhanh các vết bẩn trên áo quần. (g) Phản ứng thu nhiệt. Nước biển dưới ánh nắng mặt trời sẽ hấp thụ nhiệt và bay hơi, tạo thành nước biển kết tinh. (h) Phản ứng tỏa nhiệt. Ban đêm, hơi nước trong không khí hạ nhiệt để ngưng tụ, tạo thành các giọt đọng lại trên lá cây. (i) Phản ứng thu nhiệt. Chạy bộ làm nhiệt độ cơ thể tăng. Khi đổ mồ hôi, một phần nước hấp thụ nhiệt và bay hơi. Sự bay hơi của mồ hôi giúp làm mát cơ thể và duy trì thân nhiệt ổn định.</td></tr></table></h4><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>II. BIẾN THIÊN ENTHALPY CỦA PHẢN ỨNG:</h4><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>1. Biến thiên enthalpy:</h4><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>Hầu hết các quá trình hoá học trong thực tế xảy ra ở điều kiện áp suất không đổi. Nhiệt lượng toả ra hay thu vào của phản ứng ở điều kiện này gọi là biến thiên enthalpy của phản ứng (nhiệt phản ứng), kí hiệu là . </h4><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Phương trình hoá học kèm theo trạng thái của các chất và giá trị  gọi là phương trình nhiệt hoá học.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Ví dụ 1: Phản ứng đốt cháy 2 mol khí hydrogen bằng 1 mol khí oxygen, tạo thành 2 mol nước ở trạng thái lỏng, toả ra nhiệt lượng 571,6 kJ. Phản ứng trên có biến thiên enthalpy  = -571,6 kJ, biểu diễn bằng phương trình nhiệt hoá học như sau: </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l)    = -571,6 kJ</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Ví dụ 2: Phản ứng nhiệt phân hoàn toàn 1 mol Cu(OH)<sub>2</sub>, tạo thành 1 mol CuO và 1 mol H<sub>2</sub>O, thu vào nhiệt lượng 9,0 kJ. Phản ứng trên có biến thiên enthalpy  = +9.0 kJ và biểu diễn bằng phương trình nhiệt hoá học như sau: </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Cu(OH)<sub>2</sub>(s)  CuO(s) + H<sub>2</sub>O(l); = +9,0 kJ.</p><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>2. Biến thiên enthalpy chuẩn:</h4><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Biến thiên enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của một phản ứng hóa học là nhiệt toả ra hay thu vào của phản ứng được xác định ở điều kiện chuẩn: áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 25°C (298<sup>o</sup>K), được kí hiệu là .</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Đơn vị thường dùng là kJ hoặc kcal. </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Ví dụ 3: Phản ứng đốt cháy hoàn toàn 1 mol carbon graphite trong khí oxygen dư (ở điều kiện chuẩn) tạo ra 1 mol CO<sub>2</sub>, nhiệt lượng toả ra là 393,5 kJ. Phương trình nhiệt hoá học của phản ứng được viết như sau:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>C(graphite) + O<sub>2</sub>(g)  CO<sub>2</sub>(g),   = -393,5 kJ.</p><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>3. Ý nghĩa của biến thiên enthalpy:</h4><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Dấu của biến thiên enthalpy cho biết phản ứng toả nhiệt hay thu nhiệt:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'><sub>r</sub>H > 0: phản ứng thu nhiệt.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'><sub>r</sub>H < 0: phản ứng toả nhiệt.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Giá trị tuyệt đối của biến thiên enthalpy càng lớn thì nhiệt lượng toả ra hay thu vào của phản ứng càng nhiều.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ví dụ 4: Phản ứng thu nhiệt (hệ nhận nhiệt của môi trường) thì  > 0</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>CH<sub>4</sub>(g) + H<sub>2</sub>O(l)  CO(g) + 3H<sub>2</sub>(g),  = 250kJ</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ví dụ 5: Phản ứng tỏa nhiệt (hệ tỏa nhiệt ra môi trường) thì  < 0</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l),  = -1366,89 kJ</p><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>  Ví dụ  1 .  Mỗi phát biểu sau đây là đúng hay sai? a.  Nhiệt tỏa ra hay thu vào của phản ứng gọi là biến thiên enthalpy của phản ứng, kí hiệu  r H. b.  Kí hiệu biến thiên enthalpy chuẩn  (áp suất 1 bar, 25 o C)  của phản ứng là  . c.  Nếu  biến thiên enthalpy của phản ứng có  r H > 0 thì phản ứng này là phản ứng thu nhiệt. d.  Nếu  biến thiên enthalpy của phản ứng có  r H < 0 thì phản ứng này là phản ứng tỏa nhiệt. Đáp án:  a. Đúng. b. Sai. Kí hiệu là  . c. Đúng. d. Đúng.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  2 .   Cho biết phương trình nào dưới đây là một phương trình nhiệt hóa học? A.  H 2  + O 2  → H 2 O ;  . B.  H 2 ( g ) + O 2 ( g ) → H 2 O( l ) . C.  H 2 ( g ) + O 2 ( g ) → H 2 O( l );  . D.  H 2  + O 2  → H 2 O .</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  3 .   Viết phương trình nhiệt hóa học ứng với sơ đồ biểu diễn biến thiên enthalpy của hai phản ứng sau: Đáp án: 2ClF 3 (g) + 2O 2 (g)    Cl 2 O(g) + 3F 2 O(g)              = +394,10 kJ 2CH 3 OH(l) + 3O 2 (g)    2CO 2 (g) + 4H 2 O(l)         = -1450 kJ</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  4 .   Cho các phương trình nhiệt hoá học  sau : (1) CaCO 3 (s)    CaO(s) + CO 2 (g) (2) C 2 H 4 (g)  +  H 2 (g)    C 2 H 6 (g) (3) Fe 2 O 3 (s)  +  2Al(s)   Al 2 O 3 (s)  +  2Fe(s) ( 4 )  C (s)  +  H 2 O(g)   CO(g) + H 2 (g)  a)  Trong các phản ứng trên, phản ứng nào toả nhiệt, phản ứng nào thu nhiệt? b)  Trong các phản ứng trên,  phản ứng nào tỏa nhiều nhiệt nhất? Đáp án:  a) Phản ứng nào toả nhiệt 2, 3. Phản ứng nào thu nhiệt 1,4. b) Phản ứng 3 tỏa nhiều nhiệt nhất vì có biến thiên enthalpy nhỏ nhất.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  5 .  Biết phản ứng đốt cháy khí carbon monoxide (CO) như sau:              Ở điều kiện chuẩn, nếu đốt cháy hoàn toàn 2,479 L khí CO thì nhiệt lượng toả ra là bao nhiêu? Đáp án:  Theo phương trình nhiệt hóa học ta có: Cứ đốt cháy 1 mol CO thì nhiệt lượng tỏa ra là 851,15 kJ. Ta có:    ⇒  Nhiệt lượng toả ra là: 0,1.851,5 = 85,15 kJ</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  6 .   Phản ứng phân hủy 1 mol   ở điều kiện chuẩn:     cần cung cấp một nhiệt lượng là 241,8 kJ.   Biến thiên enthalpy chuẩn của phản ứng :   là  bao nhiêu kJ? Đáp án:  Biến thiên enthalpy chuẩn của phản ứng   là –241,8.2 = –483,6 kJ.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ   7 .  Phản ứng tôi vôi toả ra nhiệt lượng rất lớn, có thể làm sôi nước. Hãy nêu các biện pháp để đảm bảo an toàn khi thực hiện quá trình tôi vôi. Đáp án:  - Các biện pháp đảm bảo an toàn khi thực hiện quá trình tôi vôi: + Tránh xa hố đang tôi vôi. + Làm rào chắn, biển báo để cảnh báo những người xung quanh.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  8 .   Cho biết:  2NaHCO 3 (s)     Na 2 CO 3 (s)  +  CO 2 (g)  +  H 2 O( l )      NaHCO 3  có trong thành phần bột nở dùng để làm bánh. Vì sao khi bảo quản, cần tránh để bột nở ở nơi có nhiệt độ cao? Đáp án:  Phản ứng này thu nhiệt ,   k hi gặp nhiệt độ cao bột nở NaHCO 3  dễ dàng bị phân hủy.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ   9 .   Phân tử hemoglobin(Hb) trong máu nhận O 2  ở phổi để chuyển thành HbO 2 . Chất này theo máu tới các bộ phận cơ thể, tại đó HbO 2  lại chuyển thành Hb và O 2   (để cung cấp O 2  cho các hoạt động sinh hóa cần thiết trong cơ thể). Nếu trong không khí có lẫn carbon monoxide   (CO), cơ thể nhanh chóng bị ngộ độc. Cho các số liệu thực nghiệm sau: Hb + O 2  → HbO 2                         = - 33,05kJ         (1) Hb + CO → HbCO                    = -47,28kJ         (2) HbO 2  + CO   → HbCO   + O 2        = -14,23kJ         (3) HbCO   + O 2  → HbO 2  + CO      =   14,23 kJ         (4) Liên hệ giữa các  mức độ thuận lợi các phản ứng ( qua  ) với những vấn đề thực nghiên nêu trên. Đáp án:  Vì các phản ứng (2) và (3) lần lượt có   âm hơn phản ứng (1) và (4) nên sự hình thành HbCO thuận lợi hơn sự tạo thành HbO 2 . Do vậy không có sự nhả O 2  và giải phóng Hb như trường hợp không có CO. Điều này giải thích sự ngộ độc CO trong máu.</td></tr></table></h4><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>III. TÍNH BIẾN THIÊN ENTHALPY CỦA PHẢN ỨNG THEO NHIỆT TẠO THÀNH:</h4><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>1. Khái niệm nhiệt tạo thành:</h4><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Enthalpy tạo thành (hay nhiệt tạo thành) của một chất là lượng nhiệt tỏa ra hay hấp thụ khi tạo thành 1 mol chất đó từ các đơn chất ở trạng thái bền vững nhất, kí hiệu là .</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Nhiệt tạo thành chuẩn  là nhiệt tạo thành ở điều kiện chuẩn. </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Đơn vị: kJ/mol hoặc kcal/mol. </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Nhiệt tạo thành chuẩn của các đơn chất ớ dạng bền vững nhất bằng không, ví dụ: (O<sub>2</sub>) (g) = 0 kJ/mol.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ví dụ 1: Nước lỏng đuơc tạo thành từ khí hydrogen và khí oxygen theo phản ứng:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>H<sub>2</sub>(g) + 4O<sub>2</sub>(g)  H<sub>2</sub>O(l)</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ở điêu kiện chuẩn, cứ 1 mol H<sub>2</sub>O(l) tạo thành từ 1 mol H<sub>2</sub>(g) và 1/2mol O<sub>2</sub>(g) giải phóng nhiệt lượng là 285,8 kJ.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Như vậy nhiệt tạo thành của nước lỏng:(H<sub>2</sub>O(l)) = -285,8 kJ/mol.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ví dụ 2: Phản ứng: 1/2N<sub>2</sub>(g) + 1/2O<sub>2</sub>(g)  NO(g)</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>có biến thiên enthalpy: (NO(g)) = +90,3 kJ/mol. Giá trị  > 0, tức phản ứng này là phản ứng thu nhiệt.</p><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>Bảng 17.1. Nhiệt tạo thành chuẩn của một số chất thường gặp<sup>(</sup>*)</h4><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>f H 298  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>f H 298  (kJ/mol)</td></tr><tr><td class='border border-slate-300 p-1.5'>AgC l (s)</td><td class='border border-slate-300 p-1.5'>-127,0</td><td class='border border-slate-300 p-1.5'>HC l (g)</td><td class='border border-slate-300 p-1.5'>-92,3</td></tr><tr><td class='border border-slate-300 p-1.5'>BaCI 2 (s)</td><td class='border border-slate-300 p-1.5'>-806,1</td><td class='border border-slate-300 p-1.5'>Hl(g)</td><td class='border border-slate-300 p-1.5'>+25,9</td></tr><tr><td class='border border-slate-300 p-1.5'>BaSO 4 (s)</td><td class='border border-slate-300 p-1.5'>-1 465,0</td><td class='border border-slate-300 p-1.5'>H 2 O( /)</td><td class='border border-slate-300 p-1.5'>-285,8</td></tr><tr><td class='border border-slate-300 p-1.5'>CaCI 2 (s)</td><td class='border border-slate-300 p-1.5'>-795,0</td><td class='border border-slate-300 p-1.5'>H 2 O(g)</td><td class='border border-slate-300 p-1.5'>-241,8</td></tr><tr><td class='border border-slate-300 p-1.5'>CaCO 3 (s)</td><td class='border border-slate-300 p-1.5'>-1 206,9</td><td class='border border-slate-300 p-1.5'>KCI(s)</td><td class='border border-slate-300 p-1.5'>-436,7</td></tr><tr><td class='border border-slate-300 p-1.5'>CaO(s)</td><td class='border border-slate-300 p-1.5'>-635,1</td><td class='border border-slate-300 p-1.5'>KOH(s)</td><td class='border border-slate-300 p-1.5'>-424,8</td></tr><tr><td class='border border-slate-300 p-1.5'>CH 4 (g)</td><td class='border border-slate-300 p-1.5'>-74,9</td><td class='border border-slate-300 p-1.5'>Fe 2 O 3 (s)</td><td class='border border-slate-300 p-1.5'>-825,5</td></tr><tr><td class='border border-slate-300 p-1.5'>C 2 H 6 (g)</td><td class='border border-slate-300 p-1.5'>-84,7</td><td class='border border-slate-300 p-1.5'>NaCI(s)</td><td class='border border-slate-300 p-1.5'>-411,1</td></tr><tr><td class='border border-slate-300 p-1.5'>C 2 H 2 (g)</td><td class='border border-slate-300 p-1.5'>+227,0</td><td class='border border-slate-300 p-1.5'>NaOH(s)</td><td class='border border-slate-300 p-1.5'>-425,6</td></tr><tr><td class='border border-slate-300 p-1.5'>CO(g)</td><td class='border border-slate-300 p-1.5'>-110,5</td><td class='border border-slate-300 p-1.5'>NH 3 (g)</td><td class='border border-slate-300 p-1.5'>-45,9</td></tr><tr><td class='border border-slate-300 p-1.5'>CO 2 (g)</td><td class='border border-slate-300 p-1.5'>-393,5</td><td class='border border-slate-300 p-1.5'>O 3 (g)</td><td class='border border-slate-300 p-1.5'>+143,0</td></tr><tr><td class='border border-slate-300 p-1.5'>Ca(OH) 2 (s)</td><td class='border border-slate-300 p-1.5'>-986,1</td><td class='border border-slate-300 p-1.5'>SO 2 (g)</td><td class='border border-slate-300 p-1.5'>-296,8</td></tr><tr><td class='border border-slate-300 p-1.5'>HBr(g)</td><td class='border border-slate-300 p-1.5'>-36,3</td><td class='border border-slate-300 p-1.5'>SO 3 (0</td><td class='border border-slate-300 p-1.5'>-441,0</td></tr></table></p><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>2. Tính biến thiên enthalpy của phản ứng theo nhiệt tạo thành:</h4><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Biến thiên enthalpy của phản ứng đuơc xác định bằng hiệu số giữa tổng nhiệt tạo thành các chất sản phẩm (sp) và tổng nhiệt tạo thành của các chất đầu (cđ).</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ở điều kiện tiêu chuẩn:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Trong tính toán cần lưu ý đến hệ số của các chất trong phương trình hoá học.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Cho phương trình hoá học tổng quát: aA + bB  mM + nN</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Có thể tính được biến thiên enthalpy chuẩn của một phản ứng hoá học (∆<sub>r</sub>H<sup>0</sup><sub>298</sub>) khi biết các giá trị ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> của tất cả các chất đầu và sản phẩm theo công thức sau:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>∆<sub>r</sub>H<sup>0</sup><sub>298</sub> = m× (M) + n× (N) – a×∆<sub>f</sub>H<sup>0</sup><sub>298</sub> (A) – b× (B) (2)</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ví dụ 1: Xác định biến thiên enthalpy của phản ứng sau ở điều kiện chuẩn:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Biết nhiệt tạo thành  của SO<sub>2</sub>(g) là -296,8 kJ/ mol, của SO<sub>3</sub>(l) là –441,0 kJ/mol.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Hướng dẫn giải</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ví dụ 2: Xác định biến thiên enthalpy của phản ứng sau ở điều kiện chuẩn:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>4FeS<sub>2</sub>(s) + 11O<sub>2</sub>(g)  2Fe<sub>2</sub>O<sub>3</sub>(s) + 8SO<sub>2</sub>(g)</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Biết nhiệt tạo thành ∆<sub>f</sub>H<sup>0</sup><sub>298</sub> của các chất FeS<sub>2</sub>(s), Fe<sub>2</sub>O<sub>3</sub>(s) và SO<sub>2</sub>(g) lần lượt là –177,9 kJ/mol, –825,5 kJ/mol và –296,8 kJ/mol.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Hướng dẫn giải</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Tổng nhiệt tạo thành các chất đầu là:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Tổng nhiệt tạo thành các chất sản phẩm là:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Vậy, biến thiên enthalpy của phản ứng:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>= (sp) - (cđ) =  –4025,4 – (–711,6)= -3313,8(kJ)</p><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>  Ví dụ  1 .  Mỗi phát biểu sau đây là đúng hay sai? a.  N hiệt kèm theo phản ứng  tạo thành 1 mol chất đó từ các đơn chất bền nhất gọi là enthalpy tạo thành của một chất. b.  Kí hiệu biến thiên enthalpy  tạo thành chuẩn  (áp suất 1 bar, 25 o C) là  . c.  Nhiệt tạo thành chuẩn của đơn chất bền nhất luôn lớn hơn 0. d.   Nếu   thì  chất bền hơn về mặt năng lượng so với các đơn chất bền tạo nên nó. Đáp án:  a. Đúng. b.  Đúng. c.  Sai.  Nhiệt tạo thành chuẩn của đơn chất bền nhất bằng 0. d.  Đúng.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  2 .   Phân biệt enthalpy tạo thành của một chất và biến thiên enthalpy của phản ứng. Lấy ví dụ minh họa. Đáp án:  Enthalpy tạo thành của một chất Enthalpy của phản ứng - Chỉ tạo thành 1 mol chất. - Các chất tham gia phải ở dạng đơn chất bền nhất. C(graphite, s) + O 2 (g)   CO 2 (g)                     - Sản phẩm có thể là 1 hay nhiều chất. - Các chất tham gia có thể ở dạng đơn chất hoặc hợp chất. C 2 H 4 (g)   +   H 2 (g)     C 2 H 6 (g)</td><td class='border border-slate-300 p-1.5'>Enthalpy tạo thành của một chất</td><td class='border border-slate-300 p-1.5'>Enthalpy của phản ứng</td><td class='border border-slate-300 p-1.5'>- Chỉ tạo thành 1 mol chất. - Các chất tham gia phải ở dạng đơn chất bền nhất. C(graphite, s) + O 2 (g)   CO 2 (g)                    </td><td class='border border-slate-300 p-1.5'>- Sản phẩm có thể là 1 hay nhiều chất. - Các chất tham gia có thể ở dạng đơn chất hoặc hợp chất. C 2 H 4 (g)   +   H 2 (g)     C 2 H 6 (g)</td></tr><tr><td class='border border-slate-300 p-1.5'>Enthalpy tạo thành của một chất</td><td class='border border-slate-300 p-1.5'>Enthalpy của phản ứng</td></tr><tr><td class='border border-slate-300 p-1.5'>- Chỉ tạo thành 1 mol chất. - Các chất tham gia phải ở dạng đơn chất bền nhất. C(graphite, s) + O 2 (g)   CO 2 (g)                    </td><td class='border border-slate-300 p-1.5'>- Sản phẩm có thể là 1 hay nhiều chất. - Các chất tham gia có thể ở dạng đơn chất hoặc hợp chất. C 2 H 4 (g)   +   H 2 (g)     C 2 H 6 (g)</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  3 .   Cho phản ứng:   C(kim cương)   C(graphite)           . a) Ở điều kiện chuẩn, kim cương hay graphite có mức năng lượng thấp hơn? b) Trong phản ứng xác định nhiệt tạo thành của CO 2 (g): C(s) + O 2 (g)   CO 2 (g). Carbon ở dạng kim cương hay graphite? Đáp án:  a) Mức năng lượng của graphite thấp hơn kim cương, graphite bền vững hơn. b) Trong phản ứng xác định nhiệt tạo thành của CO 2 , cacbon ở dạng graphite.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  4 .   Quan sát hình 13.5, mô tả sơ đồ biểu diễn biến thiên enthalpy của phản ứng. Nhận xét giá trị của  (sp) so với  (cđ). Đáp án:  (sp) <  (cđ) do   của phản ứng < 0.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  5 .   Hãy xác định biến thiên enthalpy chuẩn của phản ứng đốt cháy ethane: C 2 H 6 (g) +  O 2 (g)    2CO 2 (g) + 3H 2 O(l) Biết   enthalpy tạo thành chuẩn của một số chất: Chất CO 2 (g) C 2 H 6 (g) H 2 O(l) (kJ/mol) -393,50 -84,00 -285,84 Đáp án: </td><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>CO 2 (g)</td><td class='border border-slate-300 p-1.5'>C 2 H 6 (g)</td><td class='border border-slate-300 p-1.5'>H 2 O(l)</td><td class='border border-slate-300 p-1.5'>(kJ/mol)</td><td class='border border-slate-300 p-1.5'>-393,50</td><td class='border border-slate-300 p-1.5'>-84,00</td><td class='border border-slate-300 p-1.5'>-285,84</td></tr><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>CO 2 (g)</td><td class='border border-slate-300 p-1.5'>C 2 H 6 (g)</td><td class='border border-slate-300 p-1.5'>H 2 O(l)</td></tr><tr><td class='border border-slate-300 p-1.5'>(kJ/mol)</td><td class='border border-slate-300 p-1.5'>-393,50</td><td class='border border-slate-300 p-1.5'>-84,00</td><td class='border border-slate-300 p-1.5'>-285,84</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  6 .   Tính biến thiên enthalpy của phản ứng phân huỷ trinitroglycerin (C 3 H 5 O 3 (NO 2 ) 3 ) theo phương trình sau (biết nhiệt tạo thành của nitroglycerin , CO 2 (g), H 2 O(g) lần lượt là  là - 370,15 kJ/mol ;  -393,5 kJ/mol; -241,82 kJ/mol ):  4C 3 H 5 O 3 (NO 3 ) 2  (s)  6N 2 (g) + 12CO 2 (g) + 10H 2 O(g) + O 2 (g) Hãy giải thích vì sao trinitroglycerin được ứng dụng làm thành phần thuốc súng không khói. Đáp án:  = 12 .  (C O 2 ) + 10 . (H 2 0)  –  4 . (C 3 H 5 O 3 (NO 2 ) 3 )                     = 12 . (-393,50) + 10 . (-241,82)  –  4 . (-370,15) = -5 659,6  kJ Do giá trị  = -5 659,6  kJ  << 0, toả nhiệt mạnh   Phản ứng tạo ra các chất khí là CO 2 , H 2 O, N 2  và O 2  nên trinitroglỵcerin được sử dụng làm chất nổ.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  7 .  Phản ứng luyện gang trong lò cao có phương trình như sau: Fe 2 O 3 (s) + CO(g)    Fe (s) + CO 2 (g)            (1) a)  Cân bằng phương trình hóa học của phản ứng (1) và tính biến thiên enthalpy chuẩn của phản ứng với các hệ số cân bằng tương ứng  (biết nhiệt tạo thành chuẩn tính theo kJ/mol của Fe 2 O 3 , CO, CO 2  lần lượt là -824,4; -110,5; -393,5). b)   Cho  1   mol  Fe 2 O 3   phản ứng với  1 mol CO, giả sử chỉ xảy ra phản ứng (1) với hiệu suất 100% thì giả i  phóng một lượng nhiệt  bao nhiêu? Đáp án: a)  Fe 2 O 3 (s) + 3CO(g) → 2Fe(s) + 3CO 2 (g)         =  3 . (-393,5) – 2.0 – 3.(-110,5) – (-824,4)= -24,8kJ b) Khi cho 1 mol Fe 2 O 3  p hản ứng  với 1 mol CO thì CO hết  ⇒  nhiệt lượng giải phóng =  24,8/3 = 8,27 kJ.  </td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  8 .   Cho phản ứng:  Ở điều kiện chuẩn, cứ 1 mol   phản ứng hết sẽ tỏa ra 92,22 kJ. Tính enthalpy tạo thành chuẩn của  Đáp án: Cứ 1 mol   phản ứng hết tạo ra 2 mol   và tỏa ra 99,22 kJ Cần 0,5 mol   phản ứng hết tạo ra 1 mol   và tỏa ra x kJ  (enthalpy có giá trị âm vì đây là phản ứng tỏa nhiệt)</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  9 .  Cho các phương trình nhiệt hóa học sau:               (1) C(graphite) + O 2 (g) → CO 2 (g)         (1) = -393,5 kJ               (2) C(graphite) → C(kim cương)            (2) = 2,87 kJ               (3) C(kim cương) + O 2 (g) → CO 2 (g)      (3) = ? kJ Hãy tính  của phản ứng (3)? Đáp án: Ta có: (1) – (2) = (3)  ⇒    (3) =   (1) -   (2) = -393,5 – 2,87 = -396,37 kJ.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  10 .   Cho các phản ứng: CaCO 3 (s)    CaO(s) + CO 2 (g) = + 178,49 kJ C 2 H 5 OH(l) + 3O 2 (g)   2CO 2 (g) + 3H 2 O(l) = -1370,70 kJ C(graphite, s) + O 2 (g)    CO 2 (g)   = -393,51 kJ a)  Phản ứng nào có thề tự xảy ra (sau giai đoạn khơi mào ban đầu), phản ứng nào không thể tự xảy ra? b )  Khối lượng ethanol hay graphite cần dùng khi đốt cháy hoàn toàn đủ tạo lượng nhiệt cho quá trình nhiệt phân hoàn toàn  10g  CaCO 3 . Giả thiết hiệu suất các quá trình đều là 100%. Đáp án: a) Phản ứng nung vôi không tự xảy ra  do   > 0 nên cần nguồn nhiệt ngoài.  Hai phản ứng còn lại có thề tự xảy ra sau giai đoạn khơi mào  do   < 0. b) Lượng nhiệt cần để thu được 0,1 mol CaO là 0,1 . 178,49 = +17,849  kJ.  Vậy:   Lượng C 2 H 5 OH(l) cần dùng:   0,013 mol   khối lượng =  0,598 g.     Lượng C(graphite,s) cân dùng:   0,045 mol   khối lượng =   0,54 g.</td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  11 .   Nhiệt tạo thành chuẩn  tính theo kJ/mol  của C 2 H 5 OH (l), CO 2 (g) và H 2 O(l) lần lượt là -267, -393,5 và -285,8. Cần đốt cháy bao nhiêu gam cồn để đun 100 gam nước từ 25 o C đến 100 o C (biết nhiệt dung của nước là 4,2 J/g.K)? Giả thiết, cồn là C 2 H 5 OH nguyên chất và có 40% nhiệt lượng thất thoát ra môi trường. Đáp án: Phản ứng cháy: C 2 H 5 OH(l) + 3O 2 (g) → 2CO 2 (g) + 3H 2 O(l) Nhiệt lượng cần cung cấp để đun 100 gam nước từ 25 o C đến 100 o C là Q = 100.4,2.(100 - 25) = 31500 J = 31,5 kJ  Gọi khối lượng cồn cầ n  đốt là m (g)  ⇒  </td></tr><tr><td class='border border-slate-300 p-1.5'>Ví dụ  12.   Một hộ gia đình mua than đá làm nhiên liệu đun nấu và trung bình mỗi ngày dùng hết 1,8 kg than. Giả thiết loại than đá trên chứa 90% carbon và 1,2% sulfur về khối lượng, còn lại là các tạp chất trơ.  Cho các phản ứng:             Nhiệt lượng cung cấp cho hộ gia đình từ quá trình đốt than trong một ngày tương đương bao nhiêu số điện (1 số điện = 1 kWh = 3600 kJ)? Đáp án: Trong 1800 g than đá chứa 1620 gam (135 mol) carbon và 21,6 g (0,675 mol) sulfur. Nhiệt lượng giải phóng ra khi đốt cháy 1800 gam than đá:  Nhiệt lượng trên tương đương với số điện:   số.</td></tr></table></h4><h4 class='font-bold text-slate-900 mt-3 mb-1 text-sm'>IV. TÍNH BIẾN THIÊN ENTHALPY CỦA PHẢN ỨNG THEO NĂNG LƯỢNG LIÊN KẾT:</h4><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Phản ứng hóa học xảy ra khi có sự phá vỡ các liên kết hóa học của chất đầu và hình thành các liên kết hóa học của sản phẩm. </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Sự phá vỡ các liên kết cần cung cấp năng lượng, sự hình thành các liên kết giải phóng năng lượng.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Ví dụ khi H<sub>2</sub> phản ứng với O<sub>2</sub> tạo thành H<sub>2</sub>O (ở thể khí) liên kết H-H và O=O bị đứt ra, liên kết O-H được hình thành.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Tính biến thiên enthalpy của phản ứng dựa vào năng lượng liên kết phải viết được công thức cấu tạo của tất cả các chất trong phản ứng để xác định số lượng và loại liên kết.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ở điều kiện chuẩn: </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>∆<sub>r</sub>H<sup>0</sup><sub>298</sub> = ∑E<sub>b</sub>(cđ) – ∑E<sub>b</sub> (sp)</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Cho phản ứng tổng quát ở điều kiện chuẩn: aA(g) + bB(g)  mM(g) + nN(g)</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Tính ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> của phản ứng khi biết các giá trị năng lượng liên kết (E<sub>b</sub>) theo công thức:</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'> = a×E<sub>b</sub> (A) + b×E<sub>b</sub> (B) – m×E<sub>b</sub>(M) – n×E<sub>b</sub>(N) (1)</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>- Tính biến thiên enthalpy của phản ứng dựa vào năng lượng liên kết được áp dụng cho phản ứng trong đó các chất đều có liên kết cộng hoá trị ở thể khí khi biết giá trị năng lượng liên kết của tất cả các chất trong phản ứng.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ví dụ 1: Tính biến thiên enthalpy chuẩn của phản ứng: H<sub>2</sub>(g) + Cl<sub>2</sub>(g)  2HCl(g)</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Hướng dẫn giải</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Bước 1: Tính năng lượng cần thiết để phá vỡ 1 mol H – H và 1 mol Cl – Cl </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Tổng năng lượng thu vào để phá vỡ các liên kết: E<sub>b</sub> <sub>(H – H)</sub> + E<sub>b</sub> <sub>(Cl – Cl)</sub> = 432 + 243 = 675 kJ</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Bước 2: Tính năng lượng toả ra khi hình thành 2 mol H – Cl </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Tổng năng lượng toả ra để hình thành liên kết: 2 × E<sub>b</sub> <sub>(H – Cl)</sub> = 2 × 427 = 854 kJ </p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Bước 3: Tính biến thiên enthalpy của phản ứng theo công thức (1) ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> = 675 – 854 = –179 kJ. Do ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> < 0 nên phản ứng toả nhiệt.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>Ví dụ 2: Xác định biến thiên enthalpy chuẩn của phản ứng.</p><p class='text-slate-700 text-xs mb-1.5 leading-relaxed'>C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g)  C<sub>2</sub>H<sub>6</sub>(g)</p>","mathForms":[],"practice":{"part1":[{"id":"b17_p1_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Phản ứng tỏa nhiệt là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"giải phóng năng lượng dạng nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"hấp thụ năng lượng dạng nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"lấy nhiệt từ môi trường","isCorrect":false},{"id":"d","letter":"D","text":"làm nhiệt độ của môi trường giảm đi","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Phản ứng thu nhiệt là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"giải phóng năng lượng dạng nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"hấp thụ năng lượng dạng nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"các chất sản phẩm nhận nhiệt từ các chất phản ứng","isCorrect":false},{"id":"d","letter":"D","text":"các chất phản ứng truyền nhiệt cho môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Phản ứng nào trong các phản ứng dưới đây là phản ứng thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"Vôi sống tác dụng với nước","isCorrect":false},{"id":"b","letter":"B","text":"Đốt cháy than củi","isCorrect":false},{"id":"c","letter":"C","text":"Đốt cháy cồn","isCorrect":false},{"id":"d","letter":"D","text":"Nung đá vôi","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Đâu là phản ứng tỏa nhiệt trong các trường hợp sau?","images":[],"options":[{"id":"a","letter":"A","text":"Nước bay hơi","isCorrect":false},{"id":"b","letter":"B","text":"Nước đóng băng","isCorrect":false},{"id":"c","letter":"C","text":"Quá trình quang hợp cây xanh","isCorrect":false},{"id":"d","letter":"D","text":"Pha viên sủi vitamin C vào nước","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Phản ứng trong quá trình hòa tan vitamin C sủi vao nước sau đây ví dụ cho phản ứng gì?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng thủy phân","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng nhiệt phân","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Phản ứng nhiệt nhôm hàn đường ray là ví dụ cho phản ứng nào?","images":[],"options":[{"id":"a","letter":"A","text":"Không là phản ứng oxi khử","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng phân hủy","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Đồ thị nào say đây thể hiện đúng sự thay đổi nhiệt độ khi dung dịch hydrochloric acid được cho vào dung dịch sodium hydroxide tới dư?","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Điều kiện nào sau đây là điều kiện chuẩn?","images":[],"options":[{"id":"a","letter":"A","text":"Áp suất 1 bar và nhiệt độ 25<sup>o</sup>C hay 298K","isCorrect":false},{"id":"b","letter":"B","text":"Áp suất 1 bar và nhiệt độ 298K","isCorrect":false},{"id":"c","letter":"C","text":"Áp suất 1 bar và nhiệt độ 25<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"Áp suất 1 bar và nhiệt độ 25K","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Kí hiệu biến thiên enthalpy chuẩn của phản ứng hóa học là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>r.</sub>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>298</sub>","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Quy ước về dấu của nhiệt phản ứng () nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt có > 0","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt có < 0","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng tỏa nhiệt có < 0","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt có = 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Các phản ứng tỏa nhiệt thường diễn ra","images":[],"options":[{"id":"a","letter":"A","text":"thuận lợi hơn các phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"khó khăn hơn các phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"khó khăn hơn khi càng tỏa ra nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"thuận lợi hơn khi càng tỏa ít nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học là","images":[],"options":[{"id":"a","letter":"A","text":"phương trình phản ứng hóa học xảy ra trong điều kiện cung cấp nhiệt độ","isCorrect":false},{"id":"b","letter":"B","text":"phương trình phản ứng hóa học có kèm theo nhiệt phản ứng","isCorrect":false},{"id":"c","letter":"C","text":"phương trình phản ứng hóa học có kèm theo nhiệt phản ứng và trạng thái của các chất đầu và sản phẩm","isCorrect":false},{"id":"d","letter":"D","text":"phương trình phản ứng hóa học tỏa nhiệt ra môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hoá học nào sau đây ứng với sơ đồ biểu diễn biến thiên enthalpy của phản ứng sau:","images":[],"options":[{"id":"a","letter":"A","text":"CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g) → 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    = -394,10 kJ","isCorrect":false},{"id":"b","letter":"B","text":"CI<sub>2</sub>O (g) + 3F<sub>2</sub>O(g) → 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    = +394,10 kJ","isCorrect":false},{"id":"c","letter":"C","text":"2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    = +394,10 kJ","isCorrect":false},{"id":"d","letter":"D","text":"2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    = -394,10 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây có thể tự xảy ra ở điều kiện thường?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng nhiệt phân Cu(OH)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng giữa H<sub>2</sub> và O<sub>2</sub> trong hỗn hợp khí","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng giữa Zn và dung dịch H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng đốt cháy cồn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây là phản ứng toả nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng nhiệt phân muối KNO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng phân huỷ khí NH<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng oxi hoá glucose trong cơ thể","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng hoà tan NH<sub>4</sub>Cl trong nước","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Nhiệt kèm theo phản ứng trong điều kiện chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false},{"id":"b","letter":"B","text":"biến thiên enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false},{"id":"c","letter":"C","text":"biến thiên enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false},{"id":"d","letter":"D","text":"enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học giữa nitrogen và oxygen như sau:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g) <sub>r</sub>= +180kJ<br/>Kết luận nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen và oxygen phản ứng mạnh hơn khi ở nhiệt độ thấp","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng xảy ra thuận lợi ở điều kiện thường","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng hóa học xảy ra có sự hấp thụ nhiệt năng từ môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Cho các phản ứng dưới đây:<br/>(1) CO (g) + O<sub>2</sub> (g) ⟶ CO<sub>2</sub> (g) = − 283 kJ<br/>(2) C (s) + H<sub>2</sub>O (g)  CO (g) + H<sub>2</sub> (g) = + 131,25 kJ<br/>(3) H<sub>2</sub> (g) + F<sub>2</sub> (g) ⟶ 2HF (g) = − 546 kJ<br/>(4) H<sub>2</sub> (g) + Cl<sub>2</sub> (g) ⟶ 2HCl (g) = − 184,62 kJ<br/>Phản ứng xảy ra thuận lợi nhất là","images":[],"options":[{"id":"a","letter":"A","text":"(1)","isCorrect":false},{"id":"b","letter":"B","text":"(2)","isCorrect":false},{"id":"c","letter":"C","text":"(3)","isCorrect":false},{"id":"d","letter":"D","text":"(4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q19","number":19,"part":1,"type":"multiple_choice","text":"Biến thiên enthalpy của một phản ứng được ghi ở sơ đồ dưới đây:<br/>Kết luận nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Năng lượng chất tham gia phản ứng nhỏ hơn năng lượng sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng là a kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q20","number":20,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học của phản ứng:<br/>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l) <sub>r</sub>= -571,68kJ.<br/>Phản ứng trên là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"tỏa nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"không có sự thay đổi năng lượng","isCorrect":false},{"id":"d","letter":"D","text":"có sự hấp thụ nhiệt lượng từ môi trường xung quanh","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q21","number":21,"part":1,"type":"multiple_choice","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CS<sub>2</sub>(l) + 3O<sub>2</sub>(g) CO<sub>2</sub>(g) + 2SO<sub>2</sub>(g) (1)<br/>CO<sub>2</sub>(g) CO(g) + O<sub>2</sub>(g) (2)<br/>Na(s) + 2H<sub>2</sub>O NaOH(aq) + H<sub>2</sub>(g) (3)<br/>ZnSO<sub>4</sub>(s) ZnO(s) + SO<sub>3</sub>(g)  (4)<br/>Cặp phản ứng thu nhiệt là","images":[],"options":[{"id":"a","letter":"A","text":"(1) và (2)","isCorrect":false},{"id":"b","letter":"B","text":"(3) và (4)","isCorrect":false},{"id":"c","letter":"C","text":"(1) và (3)","isCorrect":false},{"id":"d","letter":"D","text":"(2) và (4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q22","number":22,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(1) C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g) = -393,5 kJ.<br/>(2) 2Al(s) +  O<sub>2</sub>(g) → Al<sub>2</sub>O<sub>3</sub>(s) = -1675,7 kJ.<br/>(3) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = -890,36 kJ.<br/>(4) C<sub>2</sub>H<sub>2</sub>(g) +  O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + H<sub>2</sub>O (l) = -1299,58 kJ.<br/>Trong các phản ứng trên, phản ứng nào tỏa nhiều nhiệt nhất?","images":[],"options":[{"id":"a","letter":"A","text":"(1)","isCorrect":false},{"id":"b","letter":"B","text":"(2)","isCorrect":false},{"id":"c","letter":"C","text":"(3)","isCorrect":false},{"id":"d","letter":"D","text":"(4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q23","number":23,"part":1,"type":"multiple_choice","text":"Cho phản ứng hoá học xảy ra ở điều kiện chuẩn sau:<br/>NO<sub>2</sub>(g) (đỏ nâu)  N<sub>2</sub>O<sub>4</sub>(g) (không màu)<br/>Biết NO<sub>2</sub> và N<sub>2</sub>O<sub>4</sub> có  tương ứng là 33,18 kJ/mol và 9,16 kJ/mol. Điều này chứng tỏ phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"toả nhiệt, NO<sub>2</sub> bền vững hơn N<sub>2</sub>O<sub>4</sub>","isCorrect":false},{"id":"b","letter":"B","text":"thu nhiệt, NO<sub>2</sub> bền vững hơn N<sub>2</sub>O<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"toả nhiệt, N<sub>2</sub>O<sub>4</sub> bền vững hơn NO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"thu nhiệt, N<sub>2</sub>O<sub>4</sub> bền vững hơn NO<sub>2</sub>","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q24","number":24,"part":1,"type":"multiple_choice","text":"Nung KNO<sub>3</sub> lên 550<sup>o</sup>C xảy ra phản ứng:<br/>KNO<sub>3</sub>(s)  KNO<sub>2</sub>(s) +<br/>Phản ứng nhiệt phân KNO<sub>3</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"toả nhiệt, có ∆H < 0","isCorrect":false},{"id":"b","letter":"B","text":"thu nhiệt, có ∆H > 0","isCorrect":false},{"id":"c","letter":"C","text":"toả nhiệt, có ∆H > 0","isCorrect":false},{"id":"d","letter":"D","text":"thu nhiệt, có ∆H < 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q25","number":25,"part":1,"type":"multiple_choice","text":"Nung nóng hai ống nghiệm chứa NaHCO<sub>3</sub> và P, xảy ra các phản ứng sau:<br/>2NaHCO<sub>3</sub>(s)  Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g) (1)<br/>4P(s) + 5O<sub>2</sub>(g)  2P<sub>2</sub>O<sub>5</sub>(s) (2)<br/>Khi ngừng đun nóng, phản ứng (1) dừng lại còn phản ứng (2) tiếp tục xảy ra, chứng tỏ  của ozone (kJ/mol) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"phản ứng (1) toả nhiệt, phản ứng (2) thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"phản ứng (1) thu nhiệt, phản ứng (2) toả nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"cả 2 phản ứng đều toả nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"cả 2 phản ứng đều thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q26","number":26,"part":1,"type":"multiple_choice","text":"Cho các quá trình sau:<br/>(1) H<sub>2</sub>O (lỏng, ở 25<sup>o</sup>C) → H<sub>2</sub>O (hơi, ở 100<sup>o</sup>C).<br/>(2) H<sub>2</sub>O (lỏng, ở 25<sup>o</sup>C) → H<sub>2</sub>O (rắn, ở 0<sup>o</sup>C).<br/>(3) CaCO<sub>3</sub> (Đá vôi)  CaO + CO<sub>2</sub>.<br/>(4) Khí methane (CH<sub>4</sub>) cháy trong oxygen.<br/>Cặp phản ứng tỏa nhiệt là","images":[],"options":[{"id":"a","letter":"A","text":"(1) và (2)","isCorrect":false},{"id":"b","letter":"B","text":"(3) và (4)","isCorrect":false},{"id":"c","letter":"C","text":"(1) và (3)","isCorrect":false},{"id":"d","letter":"D","text":"(2) và (4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q27","number":27,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Các phản ứng phân hủy thường là phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng càng tỏa ra nhiều nhiệt càng dễ tự xảy ra","isCorrect":false},{"id":"c","letter":"C","text":"Các phản ứng oxi hóa chất béo cung cấp nhiệt cho cơ thể","isCorrect":false},{"id":"d","letter":"D","text":"Các phản ứng khi đun nóng đều dễ xảy ra hơn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q28","number":28,"part":1,"type":"multiple_choice","text":"Enthalpy tạo thành của một chất (Δ<sub>f</sub>H) là nhiệt kèm theo phản ứng tạo thành","images":[],"options":[{"id":"a","letter":"A","text":"1 gam chất đó từ các đơn chất bền nhất","isCorrect":false},{"id":"b","letter":"B","text":"1 lít chất đó từ các đơn chất dạng bền nhất","isCorrect":false},{"id":"c","letter":"C","text":"1 mol chất đó từ các đơn chất bền nhất","isCorrect":false},{"id":"d","letter":"D","text":"1 mol chất đó từ các hợp chất bền nhất","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q29","number":29,"part":1,"type":"multiple_choice","text":"Kí hiệu của nhiệt tạo thành chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q30","number":30,"part":1,"type":"multiple_choice","text":"Đơn vị của nhiệt tạo thành chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"kJ","isCorrect":false},{"id":"b","letter":"B","text":"kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"mol/kJ","isCorrect":false},{"id":"d","letter":"D","text":"J","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q31","number":31,"part":1,"type":"multiple_choice","text":"Enthalpy tạo thành chuẩn của một đơn chất bền","images":[],"options":[{"id":"a","letter":"A","text":"là biến thiên enthalpy chuẩn của phản ứng giữa nguyên tố đó với hydrogen","isCorrect":false},{"id":"b","letter":"B","text":"là biến thiên enthalpy chuẩn của phản ứng giữa nguyên tố đó với oxygen","isCorrect":false},{"id":"c","letter":"C","text":"được xác định từ nhiệt độ nóng chảy của nguyên tố đó","isCorrect":false},{"id":"d","letter":"D","text":"bằng 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q32","number":32,"part":1,"type":"multiple_choice","text":"Chất nào sau đây có nhiệt tạo thành chuẩn bằng 0 ?","images":[],"options":[{"id":"a","letter":"A","text":"CO<sub>2</sub>(g)","isCorrect":false},{"id":"b","letter":"B","text":"Na<sub>2</sub>O(g)","isCorrect":false},{"id":"c","letter":"C","text":"O<sub>2</sub>(g)","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>2</sub>O(l)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q33","number":33,"part":1,"type":"multiple_choice","text":"Phương trình hóa học nào dưới đây biểu thị enthalpy tạo thành chuẩn của CO(g)?","images":[],"options":[{"id":"a","letter":"A","text":"2C ((graphite)","isCorrect":false},{"id":"b","letter":"B","text":"C ((graphite) +","isCorrect":false},{"id":"c","letter":"C","text":"C ((graphite)","isCorrect":false},{"id":"d","letter":"D","text":"C ((graphite)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q34","number":34,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Biến thiên enthalpy chuẩn của một phản ứng hóa học là lượng nhiệt kèm theo phản ứng đó ở áp suất 1 bar và 25 <sup>0</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt (tỏa ra hay thu vào) kèm theo một phản ứng được thực hiện ở 1 bar và 25 K là biến thiên enthalpy chuẩn của phản ứng đó","isCorrect":false},{"id":"c","letter":"C","text":"Một số phản ứng khi xảy ra làm môi trường xung quanh lạnh đi là do các phản ứng này thu nhiệt và lấy nhiệt từ môi trường","isCorrect":false},{"id":"d","letter":"D","text":"Một số phản ứng khi xảy ra làm môi trường xung quanh nóng lên là phản ứng tỏa nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q35","number":35,"part":1,"type":"multiple_choice","text":"Ở điều kiện chuẩn, công thức tính biến thiên enthalpy của phản ứng theo nhiệt tạo thành là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q36","number":36,"part":1,"type":"multiple_choice","text":"Cho phản ứng sau : KNO<sub>3</sub>(s)  KNO<sub>2</sub>(s) + O<sub>2</sub>(g) .<br/>Biểu thức đúng tính của phản ứng theo giá trị enthalpy tạo thành chuẩn của các chất là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q37","number":37,"part":1,"type":"multiple_choice","text":"Cho phản ứng nhiệt nhôm sau để hàn gắn đường ray sau : Fe<sub>2</sub>O<sub>3</sub>(s) + 2Al(s) → Al<sub>2</sub>O<sub>3</sub>(s) +2Fe(s)  . Biểu thức đúng tính của phản ứng theo giá trị nhiệt tạo thành chuẩn của các chất là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q38","number":38,"part":1,"type":"multiple_choice","text":"Cho phản ứng: N<sub>2</sub> (g) + 3H<sub>2</sub> (g) ⟶ 2NH<sub>3</sub> (g)<br/>Ở điều kiện chuẩn, cứ 1 mol N<sub>2</sub> phản ứng hết sẽ tỏa ra 91,8 kJ. Enthalpy tạo thành chuẩn () của NH<sub>3</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"− 91,8 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"91,8 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"− 45,9 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"45,9 kJ/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q39","number":39,"part":1,"type":"multiple_choice","text":"Methane là thành phần chính của khí thiên nhiên. Xét phản ứng đốt cháy methane:<br/>CH<sub>4</sub> (g) + 2O<sub>2</sub> (g)  CO<sub>2</sub> (g) + 2H<sub>2</sub>O (l)<br/>Biết nhiệt tạo thành chuẩn của CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tương ứng là –393,5 kJ/mol và –285,8 kJ/mol. Nhiệt tạo thành chuẩn của khí methane là","images":[],"options":[{"id":"a","letter":"A","text":"–74,8 kJ","isCorrect":false},{"id":"b","letter":"B","text":"74,8 kJ","isCorrect":false},{"id":"c","letter":"C","text":"–211,6 kJ","isCorrect":false},{"id":"d","letter":"D","text":"211,6 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q40","number":40,"part":1,"type":"multiple_choice","text":"Ở điều kiện chuẩn, phản ứng nào sau đây có biến thiên enthalpy của phản ứng bằng enthalpy tạo thành của chất sản phẩm?","images":[],"options":[{"id":"a","letter":"A","text":"HCl(aq) + NaOH(aq) → NaCl(aq) + H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub>(l) + 3F<sub>2</sub>(g) → 2NF<sub>3</sub>(g)","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>2</sub>(g) + O<sub>2</sub>(g) → H<sub>2</sub>O<sub>2</sub>(g)","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q41","number":41,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học sau: 2H<sub>2</sub> (g) + O<sub>2</sub> (g) ⟶ 2H<sub>2</sub>O (g)      = − 483,64 kJ<br/>So sánh đúng là","images":[],"options":[{"id":"a","letter":"A","text":"∑ (cđ) > ∑ (sp)","isCorrect":false},{"id":"b","letter":"B","text":"∑ (cđ) = ∑ (sp)","isCorrect":false},{"id":"c","letter":"C","text":"∑ (cđ) < ∑ (sp)","isCorrect":false},{"id":"d","letter":"D","text":"∑ (cđ) ≤ ∑ (sp)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q42","number":42,"part":1,"type":"multiple_choice","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CO<sub>2</sub>(g) → CO(g) + O<sub>2</sub>(g)        = +280 kJ<br/>Giá trị của phản ứng 2CO(g) + O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) là","images":[],"options":[{"id":"a","letter":"A","text":"+140 kJ","isCorrect":false},{"id":"b","letter":"B","text":"1120 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+560 kJ","isCorrect":false},{"id":"d","letter":"D","text":"560 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q43","number":43,"part":1,"type":"multiple_choice","text":"Cho phản ứng: NH<sub>3</sub> (g) + HCl (g) ⟶ NH<sub>4</sub>Cl (s). Biết (NH<sub>4</sub>Cl(s)) = −314,4 kJ/mol; (HCl(g)) = −92,31 kJ/mol;(NH<sub>3</sub>(g)) = −45,9 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng tính là","images":[],"options":[{"id":"a","letter":"A","text":"– 176,19 kJ","isCorrect":false},{"id":"b","letter":"B","text":"– 314,4 kJ","isCorrect":false},{"id":"c","letter":"C","text":"– 452,61 kJ","isCorrect":false},{"id":"d","letter":"D","text":"176,2 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q44","number":44,"part":1,"type":"multiple_choice","text":"Cho phản ứng hóa học sau: 4FeS(s) + 7O<sub>2</sub>(g) → 2Fe<sub>2</sub>O<sub>3</sub>(s) + 4SO<sub>2</sub>(g). Biết nhiệt tạo thành ∆<sub>f</sub>H<sup>0</sup><sub>298</sub> của các chất FeS(s), Fe<sub>2</sub>O<sub>3</sub>(s) và SO<sub>2</sub>(g) lần lượt là –100,0 kJ/mol, –825,5 kJ/mol và –296,8 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là","images":[],"options":[{"id":"a","letter":"A","text":"+3105,6 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–3105,6 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+2438,2 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–2438,2 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q45","number":45,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học: 3H<sub>2</sub>(g) + N<sub>2</sub>(g)  2NH<sub>3</sub>(g)     = -91,80kJ<br/>Lượng nhiệt tỏa ra khi dùng 9 g H<sub>2</sub>(g) để tạo thành NH<sub>3</sub>(g) là","images":[],"options":[{"id":"a","letter":"A","text":"-275,40 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-137,70 kJ","isCorrect":false},{"id":"c","letter":"C","text":"-45,90 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-183,60 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q46","number":46,"part":1,"type":"multiple_choice","text":"Cho phương trình phản ứng sau:<br/>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l) ∆H = -572 kJ<br/>Khi cho 2 g khí H<sub>2</sub> tác dụng hoàn toàn với 32 g khí O<sub>2</sub> thì phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"toả ra nhiệt lượng 286 kJ","isCorrect":false},{"id":"b","letter":"B","text":"thu vào nhiệt lượng 286 kJ","isCorrect":false},{"id":"c","letter":"C","text":"toả ra nhiệt lượng 572 kJ","isCorrect":false},{"id":"d","letter":"D","text":"thu vào nhiệt lượng 572 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q47","number":47,"part":1,"type":"multiple_choice","text":"Cho  (Fe<sub>2</sub>O<sub>3</sub>, s) = − 825,5 kJ/mol. Biết 1 J = 0,239 cal. Enthalpy tạo thành chuẩn theo đơn vị (kcal) của Fe<sub>2</sub>O<sub>3</sub>(s) là","images":[],"options":[{"id":"a","letter":"A","text":"197,2945 kcal/mol","isCorrect":false},{"id":"b","letter":"B","text":"−197,2945 kcal/mol","isCorrect":false},{"id":"c","letter":"C","text":"3454 kcal/mol","isCorrect":false},{"id":"d","letter":"D","text":"− 3454 kcal/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q48","number":48,"part":1,"type":"multiple_choice","text":"Cho phản ứng: Na (s) + Cl<sub>2</sub> (g) ⟶ NaCl (s) có  (NaCl, s) = − 411,1 kJ/mol. Nếu chỉ thu được 0,5 mol NaCl (s) ở điều kiện chuẩn thì lượng nhiệt tỏa ra là","images":[],"options":[{"id":"a","letter":"A","text":"411,1 kJ","isCorrect":false},{"id":"b","letter":"B","text":"25,55 kJ","isCorrect":false},{"id":"c","letter":"C","text":"250,55 kJ","isCorrect":false},{"id":"d","letter":"D","text":"205,55 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q49","number":49,"part":1,"type":"multiple_choice","text":"Để nhiệt phân 1 mol CaCO<sub>3</sub>(s) ở điều kiện chuẩn, thu được CaO(s) và CO<sub>2</sub>(g) cần cung cấp 179,2 kJ. Tính  của phản ứng nhiệt phân 1 kg CaCO<sub>3</sub>","images":[],"options":[{"id":"a","letter":"A","text":"179,2kJ","isCorrect":false},{"id":"b","letter":"B","text":"-179,2kJ","isCorrect":false},{"id":"c","letter":"C","text":"1792kJ","isCorrect":false},{"id":"d","letter":"D","text":"-1792kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q50","number":50,"part":1,"type":"multiple_choice","text":"Cho biết phản ứng tạo thành 2 mol HCl (g) ở điều kiện chuẩn tỏa ra 184,62 kJ:<br/>H<sub>2</sub> (g) + Cl<sub>2</sub> (g)⟶ 2HCl (g) (*)<br/>Cho các phát biểu sau:<br/>(1) Enthalpy tạo thành chuẩn của HCl (g) là −184,62 kJ/mol.<br/>(2) Biến thiên enthalpy chuẩn của phản ứng (*) là − 184,62 kJ.<br/>(3) Enthalpy tạo thành chuẩn của HCl (g) là –92,31 kJ/mol.<br/>(4) Biến thiên enthalpy chuẩn của phản ứng (*) là 184,62 kJ.<br/>Những phát biểu nào dưới đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"(1) và (2)","isCorrect":false},{"id":"b","letter":"B","text":"(2) và (3)","isCorrect":false},{"id":"c","letter":"C","text":"(3) và (4)","isCorrect":false},{"id":"d","letter":"D","text":"(1) và (4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q51","number":51,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học của phản ứng trung hòa sau:<br/>HCl (aq) + NaOH (aq)  NaCl (aq) + H<sub>2</sub>O (l)<br/>Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Cho 1 mol HCl tác dụng với 1 mol NaOH dư tỏa nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"b","letter":"B","text":"Cho HCl dư tác dụng với 1 mol NaOH thu nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"c","letter":"C","text":"Cho 1 mol HCl tác dụng với 1 mol NaOH tỏa nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q52","number":52,"part":1,"type":"multiple_choice","text":"Sự phá vỡ liên kết cần ….. năng lượng, sự hình thành liên kết …... năng lượng. Cụm từ tích hợp điền vào chỗ chấm trên lần lượt là","images":[],"options":[{"id":"a","letter":"A","text":"cung cấp, giải phóng","isCorrect":false},{"id":"b","letter":"B","text":"giải phóng, cung cấp","isCorrect":false},{"id":"c","letter":"C","text":"cung cấp, cung cấp","isCorrect":false},{"id":"d","letter":"D","text":"giải phóng, giải phóng","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q53","number":53,"part":1,"type":"multiple_choice","text":"Biểu thức tính biến thiên enthalpy của một phản ứng hóa học (∆<sub>r</sub>) theo năng lượng liên kết là","images":[],"options":[{"id":"a","letter":"A","text":"∆<sub>r</sub> =","isCorrect":false},{"id":"b","letter":"B","text":"∆<sub>r</sub> =","isCorrect":false},{"id":"c","letter":"C","text":"∆<sub>r</sub> =","isCorrect":false},{"id":"d","letter":"D","text":"∆<sub>r</sub> =","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q54","number":54,"part":1,"type":"multiple_choice","text":"Khí hydrogen và khí oxygen gây nổ theo tỉ lệ mol tương ứng là 2:1 khi xảy ra phản ứng như sau: 2H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2H<sub>2</sub>O(g) . Biểu thức tính  của phản ứng theo năng lượng liên kết là","images":[],"options":[{"id":"a","letter":"A","text":"= E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – 2E<sub>b</sub>(O-H)","isCorrect":false},{"id":"b","letter":"B","text":"= E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – E<sub>b</sub>(O-H)","isCorrect":false},{"id":"c","letter":"C","text":"= 2E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – 2E<sub>b</sub>(O-H)","isCorrect":false},{"id":"d","letter":"D","text":"= 2E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – 4E<sub>b</sub>(O-H)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q55","number":55,"part":1,"type":"multiple_choice","text":"Cho phản ứng hóa học sau: N<sub>2</sub>(g) + O<sub>2</sub>(g) → 2NO(g). Cho biết năng lượng liên kết trong các phân tử O<sub>2</sub>, N<sub>2</sub> và NO lần lượt là 494 kJ/mol; 945 kJ/mol và 607 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là","images":[],"options":[{"id":"a","letter":"A","text":"+298 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–298 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+225 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–225 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q56","number":56,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học sau:<br/>H<sub>2</sub> (g) + I<sub>2</sub> (g)  2HI (g)<br/>Phát biểu nào sau đây về sự trao đổi năng lượng của phản ứng trên là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng giải phóng nhiệt lượng 11,3 kJ khi 2 mol HI được tạo thành","isCorrect":false},{"id":"b","letter":"B","text":"Tổng nhiệt phá vỡ liên kết của chất phản ứng lớn hơn nhiệt tỏa ra khi tạo thành sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Năng lượng chứa trong H<sub>2</sub> và I<sub>2</sub> cao hơn trong HI","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng xảy ra với tốc độ chậm","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q57","number":57,"part":1,"type":"multiple_choice","text":"Tính cho phản ứng sau: H<sub>2</sub>(g) + F<sub>2</sub> (g) → HF(g). Biết E<sub>H</sub><sub></sub><sub>H</sub> = 436 kJ.mol<sup></sup><sup>1</sup>, E<sub>F</sub><sub></sub><sub>F</sub> = 159 kJ.mol<sup></sup><sup>1</sup>, E<sub>H</sub><sub></sub><sub>F</sub> = 565  kJ.mol<sup></sup><sup>1</sup>","images":[],"options":[{"id":"a","letter":"A","text":"267,5 kJ","isCorrect":false},{"id":"b","letter":"B","text":"267,5 kJ","isCorrect":false},{"id":"c","letter":"C","text":"30 kJ","isCorrect":false},{"id":"d","letter":"D","text":"30 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q58","number":58,"part":1,"type":"multiple_choice","text":"Phản ứng tổng hợp ammonia: N<sub>2</sub> (g) + 3H<sub>2</sub> (g)  2NH<sub>3</sub> (g)<br/>Biết năng lượng liên kết (kJ/mol) của  và  lần lượt là 946 và 436.<br/>Năng lượng liên kết của  trong ammonia là","images":[],"options":[{"id":"a","letter":"A","text":"391 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"361 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"245 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"490 kJ/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q59","number":59,"part":1,"type":"multiple_choice","text":"Cho phản ứng: 4HCl (g) + O<sub>2</sub> (g)  2Cl<sub>2</sub> (g) + 2H<sub>2</sub>O (g)<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>H-Cl</td><td class='border border-slate-300 p-1.5'>O=O</td><td class='border border-slate-300 p-1.5'>Cl<sup>-</sup>Cl</td><td class='border border-slate-300 p-1.5'>O-H</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>427</td><td class='border border-slate-300 p-1.5'>498</td><td class='border border-slate-300 p-1.5'>243</td><td class='border border-slate-300 p-1.5'>467</td></tr></table><br/>Biến thiên enthalpy chuẩn của phản ứng trên tính theo năng lượng liên kết là bao nhiêu? Phản ứng tỏa nhiệt hay thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"= − 148 kJ, phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"= − 148 kJ, phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"= 215 kJ, phản ứng tỏa nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"= 215 kJ, phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q60","number":60,"part":1,"type":"multiple_choice","text":"Cho phản ứng hydrogen hoá ethylene sau:<br/>H<sub>2</sub>C=CH<sub>2</sub>(g) + H<sub>2</sub>(g)  H<sub>3</sub>C–CH<sub>3</sub>(g)<br/>Biết năng lượng liên kết trong các chất cho trong bảng sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>Phân tử</td><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>Phân tử</td><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td></tr><tr><td class='border border-slate-300 p-1.5'>C = C</td><td class='border border-slate-300 p-1.5'>C 2 H 4</td><td class='border border-slate-300 p-1.5'>612</td><td class='border border-slate-300 p-1.5'>C – C</td><td class='border border-slate-300 p-1.5'>C 2 H 6</td><td class='border border-slate-300 p-1.5'>346</td></tr><tr><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C 2 H 4</td><td class='border border-slate-300 p-1.5'>418</td><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C 2 H 6</td><td class='border border-slate-300 p-1.5'>418</td></tr><tr><td class='border border-slate-300 p-1.5'>H – H</td><td class='border border-slate-300 p-1.5'>H 2</td><td class='border border-slate-300 p-1.5'>436</td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td></tr></table><br/>Biến thiên enthalpy (kJ) của phản ứng có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"134","isCorrect":false},{"id":"b","letter":"B","text":"-134","isCorrect":false},{"id":"c","letter":"C","text":"478","isCorrect":false},{"id":"d","letter":"D","text":"284","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q61","number":61,"part":1,"type":"multiple_choice","text":"Giá trị trung bình của các năng lượng liên kết ở điều kiện chuẩn:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>C-H</td><td class='border border-slate-300 p-1.5'>C-C</td><td class='border border-slate-300 p-1.5'>C=C</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>418</td><td class='border border-slate-300 p-1.5'>346</td><td class='border border-slate-300 p-1.5'>612</td></tr></table><br/>Biến thiên enthalpy của phản ứng C<sub>3</sub>H<sub>8</sub> (g)  CH<sub>4</sub> (g) + C<sub>2</sub>H<sub>4</sub> (g) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"+103 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-103 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+80 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-80 kJ. Đáp án:","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q62","number":62,"part":1,"type":"multiple_choice","text":"Cho phản ứng sau: CHCH(g) + 2H<sub>2</sub>(g) CH<sub>3</sub>-CH<sub>3</sub> (g).<br/>Năng lượng liên kết (kJ/mol) của H – H là 436, của C – C là 347, của C – H là 414 và của CC là 839. Biến thiên enthalpy của phản ứng là","images":[],"options":[{"id":"a","letter":"A","text":"-294 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-292 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+292 kJ","isCorrect":false},{"id":"d","letter":"D","text":"+294 kJ. Đáp án: ∆<sub>r</sub>H = 2E<sub>(C-H)</sub> + E<sub>(C≡C)</sub> + 2E<sub>(H-H)</sub> – 6E<sub>(C-H)</sub> – E<sub>(C-C)</sub> = (2.414) + 839 + (2.436) – (6.414) – 347 = -292 (kJ)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q63","number":63,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(1) C (s) + CO<sub>2</sub> (g)  2CO (g)<br/>(2) C (s) + H<sub>2</sub>O (g)  CO (g) + H<sub>2</sub> (g)<br/>(3) CO (g) + H<sub>2</sub>O (g)  CO<sub>2</sub> (g) + H<sub>2</sub> (g)<br/>Ở 500K, 1 atm, biến thiên enthalpy của phản ứng (3) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"-39,8 kJ","isCorrect":false},{"id":"b","letter":"B","text":"39,8 kJ","isCorrect":false},{"id":"c","letter":"C","text":"-47,00 kJ","isCorrect":false},{"id":"d","letter":"D","text":"106,7 kJ. Đáp án: Phản ứng (3) = (2) – (1) = -39,8 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q64","number":64,"part":1,"type":"multiple_choice","text":"Làm các thí nghiệm tương tự nhau: Cho 0,05 mol mỗi kim loại Mg, Zn, Fe vào 3 bình đựng 100 mL dung dịch CuSO<sub>4</sub> 0,5M. Nhiệt độ tăng lên cao nhất ở mỗi bình lần lượt là . Sự sắp xếp nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"Đáp án: Cả ba kim loại Mg, Zn, Fe đều tác dụng với CuSO<sub>4</sub> với cùng tỉ lệ mol 1 : 1, kim loại càng mạnh thì càng toả nhiều nhiệt. Do Mg > Zn > Fe nên nhiệt độ tăng cao nhất ở bình có Mg, rồi đến Zn, Fe","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q65","number":65,"part":1,"type":"multiple_choice","text":"Tính của phản ứng đốt cháy 1 mol C<sub>2</sub>H<sub>2</sub> (g) biết các sản phẩm thu được đều ở thể khí. Cho enthalpy tạo thành chuẩn của các chất tương ứng là<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>C 2 H 2  (g)</td><td class='border border-slate-300 p-1.5'>CO 2  (g)</td><td class='border border-slate-300 p-1.5'>H 2 O (g)</td></tr><tr><td class='border border-slate-300 p-1.5'> (kJ/mol)</td><td class='border border-slate-300 p-1.5'>+ 227</td><td class='border border-slate-300 p-1.5'>− 393,5</td><td class='border border-slate-300 p-1.5'>− 241,82</td></tr></table>","images":[],"options":[{"id":"a","letter":"A","text":"– 1270,6 kJ","isCorrect":false},{"id":"b","letter":"B","text":"− 1255,82 kJ","isCorrect":false},{"id":"c","letter":"C","text":"– 1218,82 kJ","isCorrect":false},{"id":"d","letter":"D","text":"– 1522,82 kJ. Đáp án:  Dùng công thức tính = −393,5.2 + (−241,82).1 – 227 = 1255,82 kJ Vậy = 0,75.(-283) = -212,25 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q66","number":66,"part":1,"type":"multiple_choice","text":"Phản ứng đốt cháy Ethanol: C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l)<br/>Đốt cháy hoàn toàn 5 g ethanol, nhiệt tỏa ra làm nóng chảy 447 g nước đá ở 0<sup>o</sup>C. Biết 1 g nước đá nóng chảy hấp thụ nhiệt lượng 333,5 J, biến thiên enthalpy của phản ứng đốt cháy ethanol là","images":[],"options":[{"id":"a","letter":"A","text":"-1371 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"-954 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"-149 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"+149 kJ/mol. Đáp án: 447g nước đá nóng chảy cần nhiệt lượng là: Q = 447.333,5 = 149 074,5 J ≈ 149 (kJ). ⇒ Đốt cháy hoàn toàn 5 g ethanol tỏa ra 149 kJ nhiệt lượng. ⇒ Biến thiên enthalpy của phản ứng đốt cháy 1 mol ethanol ~ 46 g ethanol à","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p1_p1_q67","number":67,"part":1,"type":"multiple_choice","text":"Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau: NH<sub>4</sub>NO<sub>3</sub>(s) + H<sub>2</sub>O(l) NH<sub>4</sub>NO<sub>3</sub>(aq)<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Biết nhiệt dung riêng của H<sub>2</sub>O là 4,2 J/g.K. Sau khi muối tan hết, nước trong bình có nhiệt độ là","images":[],"options":[{"id":"a","letter":"A","text":"31,2<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"b","letter":"B","text":"28,1<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"c","letter":"C","text":"21,9<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"18,8<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"Đáp án:  m  =","isCorrect":false},{"id":"d","letter":"D","text":"V  = 1000 g Q = mcT = 1000.4,2. T = 26.1000  T = 6,2 <sup>o</sup>C Sau khi hòa tan nước trong bình có nhiệt độ giảm so với ban đầu  25 – 6,2 = 18,8<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p1_p1_q68","number":68,"part":1,"type":"multiple_choice","text":"Dung dịch glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) 5%, có khối lượng riêng là 1,02 g/mL, phản ứng oxi hóa 1 mol glucose tạo thành CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tỏa ra nhiệt lượng là 2803,0 kJ.<br/>Một người bệnh được truyền một chai nước chứa 500 mL dung dịch glucose 5%. Năng lượng tối đa từ phản ứng oxi hóa hoàn toàn glucose mà bệnh nhân đó có thể nhận được là","images":[],"options":[{"id":"a","letter":"A","text":"+397,09 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-397,09 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+416,02 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-416,02 kJ. Đáp án: Phản ứng tỏa nhiệt nên  Số mol glucose:  Q = 2803,0.0,14167 = 397,1 (kJ)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VDC"}],"part2":[{"id":"b17_p2_p2_q1","number":1,"part":2,"type":"true_false","text":"Khi các phản ứng hóa học xảy ra thường có sự trao đổi nhiệt với môi trường, làm thay đổi nhiệt độ của môi trường","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Khi than, củi cháy không khí xung quanh ấm hơn do phản ứng tỏa nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Pha viên C sủi vitamin C vào nước, khi viên C sủi tan thấy cốc nước mát hơn là do phản ứng thu nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q2","number":2,"part":2,"type":"true_false","text":"Thực hiện hai thí nghiệm dưới đây:<br/>Thí nghiệm 1: Đặt một nhiệt kế vào trong cốc thủy tinh chứa khoảng 50 ml dung dịch hydrochloric acid (HCl) 1M (hình 14.1). Khi nhiệt độ trong cốc ổn định, ghi nhiệt độ ban đầu. Thêm vào cốc khoảng 1 gam magnesium oxide (MgO) rồi dùng đũa thủy tinh khuấy liên tục.<br/>Thí nghiệm 2: Lặp lại thí nghiệm với bộ dụng cụ và cách tiến hành như trên, nhưng thay dung dịch hydrochloric acid (HCl) 1M bằng khoảng 50 ml dung dịch ethanoic acid (CH<sub>3</sub>COOH) 5% (giấm ăn) và khoảng 5 gam baking soda (sodium hydrogen carbonate, NaHCO<sub>3</sub>)","images":[],"options":[{"id":"a","letter":"A","text":"Hiện tượng thí nghiệm 1: MgO tan trong dung dịch HCl tạo kết tủa trắng","isCorrect":false},{"id":"b","letter":"B","text":"Hiện tượng thí nghiệm 2: Bột baking soda (NaHCO<sub>3</sub>) tan trong dung dịch giấm ăn (CH<sub>3</sub>COOH), có khí không màu, không mùi thoát ra","isCorrect":true},{"id":"c","letter":"C","text":"Trong thí nghiệm 1, nhiệt độ của hỗn hợp phản ứng tăng lên","isCorrect":true},{"id":"d","letter":"D","text":"Trong thí nghiệm 2, nhiệt độ của hỗn hợp phản ứng giảm xuống","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. MgO tan trong HCl không tạo kết tủa.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q3","number":3,"part":2,"type":"true_false","text":"Mỗi phát biểu sau đây là đúng hay sai?","images":[],"options":[{"id":"a","letter":"A","text":"Nung NH<sub>4</sub>Cl(s) tạo ra HCl(g) và NH<sub>3</sub>(g) là phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Cồn cháy trong không khí là phản ứng tỏa nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Phản ứng thủy phân collagen thành gelatin (là một loại protein dễ tiêu hóa) diễn ra khi hầm xương động vật là phản ứng thu nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Phản ứng tạo gỉ sắt là phản ứng thu nhiệt","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Phản ứng thu nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Phản ứng tỏa nhiệt","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q4","number":4,"part":2,"type":"true_false","text":"Biến thiên enthalpy chuẩn là nhiệt lượng tỏa ra hay thu vào của phản ứng ở điều kiện chuẩn","images":[],"options":[{"id":"a","letter":"A","text":"Biến thiên enthalpy của phản ứng kí hiệu là Δ<sub>r</sub>H","isCorrect":true},{"id":"b","letter":"B","text":"Biến thiên enthalpy chuẩn của phản ứng kí hiệu là","isCorrect":false},{"id":"c","letter":"C","text":"Điều kiện chuẩn là điều kiện ứng với áp suất 1 bar, nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường chọn là 0<sup>o</sup>C","isCorrect":false},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn có đơn vị: kJ hoặc kcal (1 J = 0,239 cal)","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. Kí hiệu là .<br/>c. Sai. Nồng độ 1 mol/L.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q5","number":5,"part":2,"type":"true_false","text":"Enthalpy tạo thành hay nhiệt tạo thành (Δ<sub>f</sub>H) của một chất là biến thiên enthalpy của phản ứng tạo thành 1 mol chất đó từ các đơn chất ở trạng thái bền vững, ở một điều kiện chuẩn","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành kí hiệu là","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt tạo thành chuẩn kí hiệu là","isCorrect":true},{"id":"c","letter":"C","text":"Enthalpy tạo thành chuẩn của các đơn chất bền vững nhất đều bằng 0","isCorrect":true},{"id":"d","letter":"D","text":"Nếu  > 0, chất bền hơn về mặt năng lượng so với các đơn chất bền tạo nên nó","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Kí hiệu là .<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Nếu  > 0, chất kém bền hơn về mặt năng lượng so với các đơn chất bền tạo nên nó","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q6","number":6,"part":2,"type":"true_false","text":"Mỗi phát biểu sau đây là đúng hay sai?","images":[],"options":[{"id":"a","letter":"A","text":"Trong phản ứng tỏa nhiệt, dấu của ∆H dương vì năng lượng của hệ chất phản ứng nhỏ hơn năng lượng của hệ chất sản phẩm","isCorrect":false},{"id":"b","letter":"B","text":"Trong phản ứng thu nhiệt, dấu của ∆H âm vì năng lượng của hệ chất phản ứng lớn hơn năng lượng của hệ chất sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Giá trị tuyệt đối của biến thiên enthalpy càng lớn thì nhiệt lượng tỏa ra hay thu vào của phản ứng càng nhiều","isCorrect":true},{"id":"d","letter":"D","text":"Các phản ứng xảy ra ở nhiệt độ phòng thường là phản ứng tỏa nhiệt, các phản ứng thu nhiệt thường xảy ra khi đun nóng","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Trong phản ứng tỏa nhiệt, ∆H < 0.<br/>b. Sai. Trong phản ứng thu nhiệt, dấu của ∆H > 0.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q7","number":7,"part":2,"type":"true_false","text":"Cho phản ứng sau: S(s) + O<sub>2</sub>(g)  SO<sub>2</sub>(g)  và  (SO<sub>2</sub>, g) = – 296,8 kJ/mol","images":[],"options":[{"id":"a","letter":"A","text":"(SO<sub>2</sub>, g) = –296,8 kJ/mol là lượng nhiệt tỏa ra khi tạo ra 1 mol SO<sub>2</sub> (g) từ đơn chất S (s) và O<sub>2</sub> (g), đây là các đơn chất bền nhất ở điều kiện chuẩn","isCorrect":true},{"id":"b","letter":"B","text":"Ở điều kiện chuẩn,  (O<sub>2</sub>, g) = 0","isCorrect":true},{"id":"c","letter":"C","text":"Ở điều kiện chuẩn,  (S, s)  0","isCorrect":false},{"id":"d","letter":"D","text":"Hợp chất SO<sub>2</sub>(g) kém bền hơn về mặt năng lượng so với các đơn chất bền S (s) và O<sub>2</sub> (g)","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai.  (S, s) = 0.<br/>d. Sai. Vì  (SO<sub>2</sub>, g) < 0, chất này bền hơn các đơn chất tạo nên nó","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q8","number":8,"part":2,"type":"true_false","text":"Cho sơ đồ (a) và (b) biểu diển enthalpy của phản ứng:","images":[],"options":[{"id":"a","letter":"A","text":"Sơ đồ (a) mô tả phản ứng tỏa nhiệt, sơ đồ (b) mô tả phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Trong sơ đồ (a),  (cđ) nhỏ hơn  (sp)","isCorrect":true},{"id":"c","letter":"C","text":"Trong sơ đồ (b),  (cđ) lớn hơn  (sp)","isCorrect":true},{"id":"d","letter":"D","text":"Các phản ứng tỏa nhiệt thường diễn ra thuận lợi hơn phản ứng thu nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. (a): thu nhiệt, (b): tỏa nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q9","number":9,"part":2,"type":"true_false","text":"Cho phương trình nhiệt hóa sau:","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng trên là phản ứng thu nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Ở điều kiện chuẩn, cần phải cung cấp 26,5 kJ nhiệt lượng cho quá trình 1 mol H<sub>2</sub>(g) phản ứng với 1 mol I<sub>2</sub>(s) để thu được 1 mol HI","isCorrect":false},{"id":"c","letter":"C","text":"Nhiệt tạo thành chuẩn của HI(g) lớn hơn 26,5 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"Tổng enthalpy tạo thành của chất tham gia phản ứng trên nhỏ hơn tổng enthalpy của chất sản phẩm","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. Ở điều kiện chuẩn, cần phải cung cấp 26,5 kJ nhiệt lượng cho quá trình 0,5 mol H<sub>2</sub>(g) phản ứng với 0,5 mol I<sub>2</sub>(s) để thu được 1 mol HI.<br/>c. Sai. Nhiệt tạo thành chuẩn của HI(g) bằng 26,5 kJ/mol.<br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q10","number":10,"part":2,"type":"true_false","text":"Sulfur dioxide là một chất có nhiều ứng dụng trong công nghiệp (dùng để sản xuất sulfuric acid, tẩy trắng bột giấy trong công nghiệp giấy, tẩy trắng dung dịch đường trong sản xuất đường tinh luyện,…) và giúp ngăn cản sự phát triển của một số loại vi khuẩn và nấm gây hư hại cho thực phẩm. Ở áp suất 1 bar và nhiệt độ 25 <sup>0</sup>C, phản ứng giữa 1 mol sulfur với oxygen xảy ra theo phương trình:<br/>S(s) + O<sub>2</sub>(g)  SO<sub>2</sub>(g)” và tỏa một lượng nhiệt là 296,9 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của sulfur dioxide bằng –296,9 kJ/mol","isCorrect":true},{"id":"b","letter":"B","text":"Sulfur dioxide vừa có thể là chất khử vừa có thể là chất oxi hóa, tùy thuộc vào phản ứng mà nó tham gia","isCorrect":true},{"id":"c","letter":"C","text":"0,5 mol sulfur tác dụng hết với oxygen giải phóng 148,45 kJ năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn của phản ứng là 296,9 kJ","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Biến thiên enthalpy chuẩn của phản ứng là -196,9kJ","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q11","number":11,"part":2,"type":"true_false","text":"Cho phương trình phản ứng: Zn (s) + CuSO<sub>4</sub> (aq)  ZnSO<sub>4</sub> (aq) + Cu (s);","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của Zn(s) bằng 210 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng trên là phản ứng tỏa nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng tạo thành 3,84 g Cu là 12,6 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Trong quá trình phản ứng, nhiệt độ của hỗn hợp tăng lên","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Enthalpy tạo thành chuẩn của Zn(s) bằng 0.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy của phản ứng tạo thành 3,84g Cu là <br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q12","number":12,"part":2,"type":"true_false","text":"Cho sơ đồ sau:","images":[],"options":[{"id":"a","letter":"A","text":"Phương trình nhiệt hoá học của phản ứng là: 2CH<sub>3</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 4H<sub>2</sub>O(l)","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt lượng toả ra của phản ứng là 1450 kJ","isCorrect":true},{"id":"c","letter":"C","text":"Công thức tính biến thiên enthalpy của phản ứng dựa vào enthalpy tạo thành là:","isCorrect":false},{"id":"d","letter":"D","text":"Sau phản ứng, sản phẩm có mức năng lượng cao hơn chất ban đầu","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Thiếu biến thiên enthalpy của phản ứng.<br/>b. Đúng.<br/>c. Sai. Sản phẩm trừ chất đầu.<br/>d. Sai. Sản phẩm có mức năng lượng nhỏ hơn chất đầu","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q13","number":13,"part":2,"type":"true_false","text":"Cho hai phản ứng cùng xảy ra ở điều kiện chuẩn:","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của NO là","isCorrect":true},{"id":"b","letter":"B","text":"Enthalpy tạo thành chuẩn của NO<sub>2</sub> là","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol N<sub>2</sub> với 1 mol O<sub>2</sub> tạo thành 2 mol NO là","isCorrect":false},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol khí NO với 0,5 mol khí  tạo thành 1 mol khí NO<sub>2</sub> là","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đúng.<br/>b. Sai vì phản ứng (2) không phải tạo thành từ các đơn chất.<br/>c. Sai vì biến thiên enthalpy chuẩn của phản ứng giữa 1 mol  với 1 mol  tạo thành 2 mol NO là <br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q14","number":14,"part":2,"type":"true_false","text":"Cho phản ứng đốt cháy methane (CH<sub>4</sub>) và acetylene (C<sub>2</sub>H<sub>2</sub>) như sau:<br/>(1) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)<br/>(2) C<sub>2</sub>H<sub>2</sub>(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)","images":[],"options":[{"id":"a","letter":"A","text":"Cả hai phản ứng trên đều là phản ứng tỏa nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Khi đốt cháy cùng một lượng thể tích khí CH<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> thì lượng nhiệt sinh ra do CH<sub>4</sub> nhiều hơn lượng nhiệt sinh ra do C<sub>2</sub>H<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng (1), (2) tính theo nhiệt tạo thành:","isCorrect":true},{"id":"d","letter":"D","text":"Trong thực tế, để hàn, cắt kim loại người ta sử dụng CH<sub>4</sub> mà không dùng C<sub>2</sub>H<sub>2</sub>","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. C<sub>2</sub>H<sub>2</sub> cháy tỏa nhiều nhiệt hơn CH<sub>4</sub>.<br/>c. Đúng.<br/>d. Sai. Người ta dùng C<sub>2</sub>H<sub>2</sub> vì nhiệt lượng tỏa ra nhiều hơn CH<sub>4</sub>","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q15","number":15,"part":2,"type":"true_false","text":"Cho phản ứng quang hợp sau: 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l) → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) + 6nO<sub>2</sub>(g)","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng quang hợp là phản ứng thu năng lượng dưới dạng ánh sáng","isCorrect":true},{"id":"b","letter":"B","text":"180g glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) tạo thành cần phải cung cấp 2804,7 kJ nhiệt lượng dưới dạng ánh sáng cho phan ứng quang hợp","isCorrect":true},{"id":"c","letter":"C","text":"Năng lượng từ Mặt Trời được sử dụng trong quá trình quang hợp và được lưu trữ trong các liên kết của các phân tử glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s)","isCorrect":true},{"id":"d","letter":"D","text":"Cho nhiệt tạo thành chuẩn của CO<sub>2</sub>(g) là -393,5 kJ/mol; H<sub>2</sub>O(l) là -285,8 kJ/mol thì enthalpy tạo thành chuẩn của glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) là -1271,1 kJ mol<sup>-1</sup>","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng. <br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q16","number":16,"part":2,"type":"true_false","text":"Propene là nguyên liệu cho sản xuất nhựa polypropylene (PP). PP được sử dụng để sản xuất các sản phẩm ống, màng, dây cách điện, kéo sợi, đồ gia dụng và các sản phẩm tạo hình khác.<br/>Phản ứng tạo thành propene từ propyne: CH<sub>3</sub>-C≡CH(g) + H<sub>2</sub>(g)  CH<sub>3</sub>-CH=CH<sub>2</sub>(g) (*)<br/>Cho năng lượng liên kết đo ở điều kiện chuẩn của một số liên kết như sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>H – H</td><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C – C</td><td class='border border-slate-300 p-1.5'>C = C</td><td class='border border-slate-300 p-1.5'>C ≡ C</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>432</td><td class='border border-slate-300 p-1.5'>413</td><td class='border border-slate-300 p-1.5'>347</td><td class='border border-slate-300 p-1.5'>614</td><td class='border border-slate-300 p-1.5'>839</td></tr></table>","images":[],"options":[{"id":"a","letter":"A","text":"Trong hợp chất CH<sub>3</sub>-CCH có 4 liên kết C-H, 2 liên kết C-C, và 1 liên kết CC","isCorrect":false},{"id":"b","letter":"B","text":"Trong hợp chất CH<sub>3</sub>-CH=CH<sub>2</sub> có 5 liên kết C-H, 1 liên kết C-C, và 1 liên kết C=C","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng (*) là –184 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng (*) là phản ứng tỏa nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Có 1 liên kết C-C.<br/>b. Sai. Có 6 liên kết C-H.<br/>c. Sai. CH<sub>3</sub>-CCH(g) + H<sub>2</sub>(g) CH<sub>3</sub>-CH=CH<sub>2</sub>(g)<br/> = E<sub>b</sub>(CC) + E<sub>b</sub>(C-C) + 4E<sub>b</sub>(C-H) + E<sub>b</sub>(H-H) - E<sub>b</sub>(C=C) - E<sub>b</sub>(C-C) - 6E<sub>b</sub>(C-H)<br/>            = 839 + 347+ 4x413 + 432-614-347-6x413 = -169 kJ.<br/>d. Đúng","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q17","number":17,"part":2,"type":"true_false","text":"Cho hai phản ứng sau:<br/>N<sub>2</sub>(g)  +  3H<sub>2</sub>(g)  2NH<sub>3</sub>(g)(1)<br/>(2)<br/>Biết nhiệt tạo thành chuẩn của NH<sub>3</sub> bằng -46 kJ/mol","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng (1) là phản ứng tỏa nhiệt, phản ứng (2) là phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Biến thiên enthalpy của phản ứng (1) gấp 2 lần biến thiên enthalpy của phản ứng (2)","isCorrect":true},{"id":"c","letter":"C","text":"Phản ứng (1) thuận lợi về mặt năng lượng hơn so với phản ứng (2)","isCorrect":true},{"id":"d","letter":"D","text":"Khi tổng hợp từ 1 tấn NH<sub>3</sub>(g) thì nhiệt tỏa ra từ cả hai phản ứng là như nhau","isCorrect":true}],"explanation":"Đáp án: <br/>∆H(1) = 2.(-46) – 1.0 – 3.0 = -92 kJ<br/>∆H(2) = (-46) – .0 – .0 = -46 kJ<br/>Phản ứng toả nhiệt và ∆H(1) = 2.∆H(2)<br/>Khi tổng hợp 1 tấn NH<sub>3</sub> thì nhiệt lượng toả ra = <br/>Tính theo 2 phương trình trên thì  đều ra kết quả giống nhau.<br/>a. Sai.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q18","number":18,"part":2,"type":"true_false","text":"Biến thiên enthalpy chuẩn quá trình “ H<sub>2</sub>O(s) → H<sub>2</sub>O(l)” là 6,020kJ","images":[],"options":[{"id":"a","letter":"A","text":"Quá trình tan chảy của nước đá là quá trình tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Khi cho viên nước đá vào cốc nước lỏng ấm, viên đá lại tan chảy dần vì nó lấy nhiệt từ nước lỏng","isCorrect":true},{"id":"c","letter":"C","text":"Cốc nước lỏng bị lạnh dần trong quá trình viên nước đá tan chảy do sự mất nhiệt làm cho nước lỏng lạnh đi","isCorrect":true},{"id":"d","letter":"D","text":"Biết rằng để làm cho nhiệt độ của 1 mol nước lỏng thay đổi 1°C cần một nhiệt lượng là 75,4J. Giả sử mỗi viên nước đá tương ứng với 1 mol nước, thì cần tối thiểu 6 viên nước đá tan chảy để có thể làm lạnh 500 gam nước lỏng ở 20°C xuống 0°C","isCorrect":false}],"explanation":"Đáp án:<br/>a. Sai. Quá trình tan chảy của nước đá là quá trình thu nhiệt vì có biến thiên enthalpy dương.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Nhiệt lượng mà 500 gam nước lỏng từ ở 20°C xuống 0°C  tỏa ra là:<br/>= 41,8889(kJ)<br/>Mỗi viên đá tan chảy hấp thụ một nhiệt lượng là 6,020 kJ <br/>⇒ Số viên nước đá tối thiểu cần là  viên","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q19","number":19,"part":2,"type":"true_false","text":"Ở điều kiện chuẩn, 2 mol nhôm tác dụng vừa đủ với khí chlorine tạo muối aluminium chloride và giải phóng một lượng nhiệt 1390,81 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Phương trình nhiệt của phản ứng trên: 2Al(s) + 3Cl<sub>2</sub>(g) → 2AlCl<sub>3</sub>(s); = 1390,81 kJ","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là 1390,81 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"Lượng nhiệt được giải phóng khi 10 gam AlCl<sub>3</sub> được tạo thành là 52,2 kJ","isCorrect":true},{"id":"d","letter":"D","text":"Để tạo ra được 1,0 kJ nhiệt cần 0,043 gam Al phản ứng với khí chlorine","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. 2Al(s) + 3Cl<sub>2</sub>(g) → 2AlCl<sub>3</sub>(s); = -1390,81 kJ.<br/>b. Sai.  Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là -1390,81 kJ/mol.<br/>c. Đúng.<br/> <br/> Cứ 2 mol Al phản ứng tạo thành 2 mol AlCl<sub>3</sub> thì giải phóng nhiệt lượng là 1390,81 kJ<br/>                                                       0,075 mol ---------------------------- x = <br/>d. Sai.<br/>Cứ 2 mol Al phản ứng thì giải phóng nhiệt lượng là 1390,81 kJ<br/>         x = ← 1 kJ                         <br/>             ⇒ m<sub>Al</sub> = 0,0388 gam","explanationImages":[],"points":1,"level":"VDC"}],"part3":[{"id":"b17_p3_p3_q1","number":1,"part":3,"type":"short_answer","text":"Cho các quá trình sau:<br/>(1) Nung đá vôi ở nhiệt độ cao.<br/>(2) Nước hóa rắn.<br/>(3) Hòa tan muối ăn vào nước thấy cốc nước trở nên mát.<br/>(4) Luộc chín quả trứng.<br/>Liệt kê các phản ứng thu nhiệt theo số thứ tự tăng dần (ví dụ: 123, 24,...)","images":[],"correctAnswer":"134","explanation":"Đáp án: 134","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q2","number":2,"part":3,"type":"short_answer","text":"Các quá trình sau:<br/>(a) Đun nước sôi.<br/>(b) Sự tiêu hóa thức ăn trong dạ dày.<br/>(c) Quá trình chạy của con người.<br/>(d) Đốt than sưởi ấm.<br/>(e) Thả viên vitamin C sủi vào nước.<br/>(g) Sulfuric acid đặc khi hòa vào nước.<br/>Trong các quá trình trên, có bao nhiêu quá trình tỏa nhiệt?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q3","number":3,"part":3,"type":"short_answer","text":"Dựa vào phương trình nhiệt hóa học của các phản ứng sau :<br/>(1) CS<sub>2</sub>(l)  + 3O<sub>2</sub>(g) CO<sub>2</sub>(g)   +   2 SO<sub>2</sub>(g)        = –1110,21 kJ<br/>(2) CO<sub>2</sub>(g)  CO(g) +  O<sub>2</sub>(g)        = +280,00 kJ<br/>(3) 2Na(s) +2H<sub>2</sub>O(l) 2NaOH(aq) + H<sub>2</sub>(g) = –367,50 kJ<br/>(4) ZnSO<sub>4</sub>(s)  ZnO(s) +  SO<sub>2</sub>(g)                         = +235,21 kJ<br/>(5) 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) 2SO<sub>3</sub>(g)      = –197kJ<br/>Liệt kê các phản ứng thu nhiệt theo số thứ tự tăng dần (ví dụ: 123, 25,...)","images":[],"correctAnswer":"24","explanation":"Đáp án: 24","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q4","number":4,"part":3,"type":"short_answer","text":"Phân tử hemoglobin(Hb) trong máu nhận O<sub>2</sub> ở phổi để chuyển thành HbO<sub>2</sub>. Chất này theo máu tới các bộ phận cơ thể, tại đó HbO<sub>2</sub> lại chuyển thành Hb và O<sub>2</sub>( để cung cấp O<sub>2</sub> cho các hoạt động sinh hóa cần thiết trong cơ thể). Nếu trong không khí có lẫn carbon monoxide(CO), cơ thể nhanh chóng bị ngộ độc. Cho các số liệu thực nghiệm sau:<br/>Hb + O<sub>2</sub> → HbO<sub>2</sub>                      = -33,05kJ       (1)<br/>Hb + CO → HbCO                   = -47,28kJ       (2)<br/>HbO<sub>2</sub> + CO → HbCO + O<sub>2</sub>      = -14,23kJ       (3)<br/>HbCO + O<sub>2</sub> → HbO<sub>2</sub> + CO      = 14,23 kJ       (4)<br/>Liệt kê các phản ứng tỏa nhiệt theo số thứ tự tăng dần (ví dụ: 134, 24,...)","images":[],"correctAnswer":"123","explanation":"Đáp án: 123","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q5","number":5,"part":3,"type":"short_answer","text":"Cho các sau đây: C(graphite, s); CO(g); Br<sub>2</sub>(l); Na(s); SO<sub>2</sub>(g) Hg(l). Có bao nhiêu chất trong dãy chất trên có nhiệt tạo thành chuẩn bằng 0?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q6","number":6,"part":3,"type":"short_answer","text":"Cho các phương trình nhiệt hoá học:<br/>(1) CaCO<sub>3</sub>(s)  CaO(s) + CO<sub>2</sub>(g)<br/>(2) C<sub>2</sub>H<sub>4</sub>(g)  +  H<sub>2</sub>(g)  C<sub>2</sub>H<sub>6</sub>(g)<br/>(3) Fe<sub>2</sub>O<sub>3</sub>(s)  +  2Al(s) Al<sub>2</sub>O<sub>3</sub>(s)  +  2Fe(s)<br/>(4)<br/>(5) C(graphite, s) + O<sub>2</sub>(g)  CO<sub>2</sub>(g)<br/>Liệt kê các phương trình có enthalpy chuẩn của phản ứng bằng với enthalpy tạo thành chuẩn của chất sản phẩm theo số thứ tự tăng dần (ví dụ: 1245, 35,...)","images":[],"correctAnswer":"5","explanation":"Đáp án: 5","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q7","number":7,"part":3,"type":"short_answer","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CO<sub>2</sub>(g)  CO(g) + O<sub>2</sub>(g) = +280 kJ<br/>Giá trị của phản ứng: 2CO<sub>2</sub>(g)  2CO(g) + O<sub>2</sub>(g) là bao nhiêu kJ?","images":[],"correctAnswer":"560","explanation":"Đáp án: 560.<br/>= 280 .2 = 560 kJ","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q8","number":8,"part":3,"type":"short_answer","text":"Quá trinh hoà tan calcium chloride trong nước:<br/>CaCl<sub>2</sub>(s)  Ca<sup>2+</sup>(ag) + 2Cl<sup>-</sup> (ag) = ?<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>CaCl 2</td><td class='border border-slate-300 p-1.5'>Ca 2+</td><td class='border border-slate-300 p-1.5'>Cl -</td></tr><tr><td class='border border-slate-300 p-1.5'> (kJ/mol)</td><td class='border border-slate-300 p-1.5'>-795,0</td><td class='border border-slate-300 p-1.5'>-542,83</td><td class='border border-slate-300 p-1.5'>-167,16</td></tr></table><br/>Tính biến thiên enthalpy chuẩn của quá trình theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"-82","explanation":"Đáp án: -82.<br/>Enthalpy của quá trình:  =  -542,83 + 2.(-167,16) – (-795,0) = -82,15 kJ","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q9","number":9,"part":3,"type":"short_answer","text":"Biết rằng ở điều kiện chuẩn, 1 mol ethanol cháy tỏa ra một nhiệt lượng là kJ. Nếu đốt cháy hoàn toàn 15,11 gam ethanol, năng lượng được giải phóng ra dưới dạng nhiệt bởi phản ứng là  kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"450","explanation":"Đáp án: 450","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q10","number":10,"part":3,"type":"short_answer","text":"Cho phương trình phản ứng sau: 2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l) = -572 kJ<br/>Khi cho 2 g khí H<sub>2</sub> tác dụng hoàn toàn với 32 g khí O<sub>2</sub> thì phản ứng tỏa ra bao nhiêu kJ?","images":[],"correctAnswer":"-286","explanation":"Đáp án: -286.<br/> => H<sub>2</sub> phản ứng hết, O<sub>2</sub> còn dư.<br/>Theo phương trình ta có cứ 2 mol H<sub>2</sub> phản ứng tỏa ra nhiệt lượng 572 kJ<br/>⇒ 1 mol H<sub>2</sub> phản ứng tỏa ra nhiệt lượng =  = 286 kJ","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q11","number":11,"part":3,"type":"short_answer","text":"Cho enthalpy tạo thành chuẩn của một số chất như sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>C 6 H 6 (l)</td><td class='border border-slate-300 p-1.5'>C 3 H 8 (g)</td><td class='border border-slate-300 p-1.5'>CO 2 (g)</td><td class='border border-slate-300 p-1.5'>H 2 O(l)</td></tr><tr><td class='border border-slate-300 p-1.5'>(kJ/mol)</td><td class='border border-slate-300 p-1.5'>+49,00</td><td class='border border-slate-300 p-1.5'>-105,00</td><td class='border border-slate-300 p-1.5'>-393,50</td><td class='border border-slate-300 p-1.5'>-285,84</td></tr></table><br/>Lượng nhiệt sinh ra khi đốt cháy hoàn toàn 1,0 g propane C<sub>3</sub>H<sub>8</sub>(g) gấp k lần so với lượng nhiệt sinh ra khi đốt cháy hoàn toàn 1,0 g benzene C<sub>6</sub>H<sub>6</sub>(l). Giá trị của k là bao nhiêu? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"1,2","explanation":"Đáp án: 1,2.<br/>Phản ứng: C<sub>6</sub>H<sub>6</sub>(l) +  O<sub>2</sub>(g) 6CO<sub>2</sub>(g) + 3H<sub>2</sub>O (g)<br/> = 6  (-393,50) + 3  (-241,82) - 49 = -3037,46 kJ<br/>Phản ứng: C<sub>3</sub>H<sub>8</sub>(g) + 5O<sub>2</sub>(g)  3CO<sub>2</sub>(g) + 4H<sub>2</sub>O (g)<br/> = 3  (-393,50) + 4  (- 241,82) - 105 = -2042,78 kJ<br/>Số mol propane =   == -46,42 kJ<br/>Số mol benzene =   = = -38,94 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q12","number":12,"part":3,"type":"short_answer","text":"Cho các phương trình nhiệt hóa học sau:<br/>(1) C(graphite) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)        (1) = -393,5 kJ<br/>(2) C(graphite) → C(kim cương)           (2) = 2,87 kJ<br/>(3) C(kim cương) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)     (3) = ? kJ<br/>Hãy tính của phản ứng (3) theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"396","explanation":"Đáp án: 396.<br/>Ta có: (1) – (2) = (3) ⇒  (3) =  (1) -  (2) = -393,5 – 2,87 = -396,37 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q13","number":13,"part":3,"type":"short_answer","text":"Phosgene là chất khí không màu, mùi cỏ mục, dễ hoá lỏng; khối lượng riêng 1,420 g/cm<sup>3</sup>(ở 0 °C); t<sub>s</sub> = 8,2 °C. Phosgene ít tan trong nước; dễ tan trong các dung môi hữu cơ, bị thuỷ phân chậm bằng hơi nước; không cháy; là sản phẩm công nghiệp quan trọng; dùng trong tổng hợp hữu cơ để sản xuất sản phầm nhuộm, chất diệt cỏ, polyurethane,... Phosgene là một chất độc. Ở nồng độ 0,005 mg/L đã nguy hiểm đối với người; trong khoảng 0,1 -0,3 mg/L, gây tử vong sau khoảng 15 phút.<br/>Phosgene được điều chế bằng cách cho hỗn hợp CO và Cl<sub>2</sub> đi qua than hoạt tính. Biết: E<sub>b</sub>(Cl<sup>-</sup>Cl) = 243 kJ/mol; E<sub>b</sub>(C-Cl)= 339 kJ/mol; E<sub>b</sub>(C=O) = 745 kJ/mol; E<sub>b</sub>(C≡O) = 1075 kJ/mol.<br/>Hãy tính biến thiên enthalpy của phản ứng tạo thành00 phosgene từ CO và Cl<sub>2</sub>","images":[],"correctAnswer":"-105","explanation":"Đáp án: -105.<br/>Phản ứng hoá học:  CO(g) + Cl<sub>2</sub>(g)  COCl<sub>2</sub>(g) <br/>                         (Phosgene)<br/>⇒ =   = 1075 + 243 - 2x339 - 745 = -105 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q14","number":14,"part":3,"type":"short_answer","text":"Cho phản ứng phân huỷ hydrazine: N<sub>2</sub>H<sub>4</sub>(g)  N<sub>2</sub>(g) + 2H<sub>2</sub>(g). Tính theo năng lượng liên kết của phản ứng trên theo kJ. Biết: E<sub>b</sub>(N-N) = 160 kJ/mol; E<sub>b</sub>(N-H) = 391 kJ/mol; E<sub>b</sub>(N≡N) = 945 kJ/mol, E<sub>b</sub>(H-H) = 432 kJ/mol","images":[],"correctAnswer":"-105","explanation":"Đáp án: -105.<br/> = E<sub>b</sub>(N-N) + 4.E<sub>b</sub>(N-H) - E<sub>b</sub>(N=N) – 2.E<sub>b</sub>(H-H) = 160 + 4.391 – 945 - 2.432 = -85 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q15","number":15,"part":3,"type":"short_answer","text":"Tiến hành quá trình ozone hoá 100 g oxygen theo phản ứng sau:<br/>3O<sub>2</sub>(g) (oxygen)  2O<sub>3</sub>(g) (ozone)<br/>Hỗn hợp thu được có chứa 24% ozone về khối lượng, tiêu tốn 71,2 kJ. Nhiệt tạo thành  của ozone (kJ/mol) có giá trị là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"142","explanation":"Đáp án: 142.<br/>Số mol của O<sub>3</sub> = ⇒  (kJ)<br/> =  (kJ)<br/>=>  = 142,4 (kJ/mol)","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q16","number":16,"part":3,"type":"short_answer","text":"Methane là thành phần chính của khí thiên nhiên. Xét phản ứng đốt cháy methane:<br/>CH<sub>4</sub> (g) + 2O<sub>2</sub> (g)  CO<sub>2</sub> (g) + 2H<sub>2</sub>O (l)<br/>Biết nhiệt tạo thành chuẩn của CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tương ứng là -393,5 kJ/mol và -285,8 kJ/mol. Hãy tính nhiệt tạo thành chuẩn (kJ/mol) của khí methane. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"-75","explanation":"Đáp án: -75.<br/>Ta có:  = (CO<sub>2</sub>) + 2(H<sub>2</sub>O) - (CH<sub>4</sub>) - 2(O<sub>2</sub>)<br/>- 890,3 = (-393,5) + 2(-285,8) - (CH<sub>4</sub>)   <br/> (CH<sub>4</sub>) = 890,3 – 393,5 + 2(-285,8) = - 74,8 kJ/mol","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q17","number":17,"part":3,"type":"short_answer","text":"Nhiệt tỏa ra khi đốt cháy 1 gam một mẫu than là 23,0 kJ. Giả thiết rằng toàn bộ lượng nhiệt của quá trình đốt than tỏa ra đều dùng để làm nóng nước, không có sự thất thoát nhiệt, hãy tính khối lượng than (gam) cần phải đốt để làm nóng 500 gam nước từ  tới  Biết để làm nóng 1 mol nước thêm  cần một nhiệt lượng là 75,4 J. (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"6,4","explanation":"Đáp án: 6,4.<br/>Lượng nhiệt cần dùng để đun nóng 500 gam nước từ lên  là<br/>Vậy lượng than đá cần dùng là:","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q18","number":18,"part":3,"type":"short_answer","text":"Ở điều kiện chuẩn, cần phải đốt cháy hoàn toàn bao nhiêu gam  để cung cấp nhiệt cho phản ứng tạo 1 mol  bằng cách nung  Giả thiết hiệu suất các quá trình đều là 100%. Phương trình nhiệt của phản ứng nung vôi và đốt cháy CH<sub>4</sub> như sau:<br/>(1)<br/>(2)<br/>(Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"3,2","explanation":"Đáp án: 3,2.<br/>Ta có phản ứng nung vôi: <br/>Tức là để tạo 1 mol CaO cần cung cấp 178,29 kJphản ứng đốt cháy  cần tỏa ra 178,29 kJ<br/>Mà ta có phản ứng đốt cháy  <br/>Đốt cháy 1 mol  tỏa ra 890,36 kJ<br/>Đốt cháy x mol  tỏa ra 178,29 kJ<br/>khối lượng  cần dùng để đốt cháy là:","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q19","number":19,"part":3,"type":"short_answer","text":"Ở một lò nung vôi công nghiệp, cứ sản xuất được 1000 kg vôi sống cần dùng m kg than đá (chứa 80% carbon) làm nhiên liệu cung cấp nhiệt.<br/>Cho các phản ứng:<br/>Biết hiệu suất hấp thụ ở quá trình phân hủy đá vôi là 66%. Tính giá trị của m theo đơn vị kg. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"184","explanation":"Đáp án: 184.<br/>Để thu được 1000 kg CaO thì nhiệt lượng cần cung cấp (với hiệu suất là 60%) <br/>Ta có:","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q20","number":20,"part":3,"type":"short_answer","text":"Lactic acid hay acid sữa là hợp chất hoá học đóng vai trò quan trọng trong nhiều quá trình sinh hoá, lần đầu tiên được phân tách vào năm 1780 bởi nhà hoá học Thuỵ Điền Carl Wilhelm Scheele. Lactic acid có công thức phân tử C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>, công A thức câu tạo CH<sub>3</sub>-CH(OH)-COOH.<br/>Khi vận động mạnh cơ thề không đủ cung cấp oxygen, thì cơ thề sẽ chuyền hoá glucose thành lactic acid từ các tế bào đề cung cấp năng lượng cho cơ thề (lactic acid tạo thành từ quá trình này sẽ gây mỏi cơ) theo phương trình sau:<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(aq)  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>(aq)  = -150 kJ<br/>Biết rằng cơ thề chỉ cung cấp 98% năng lượng nhờ oxygen, năng lượng còn lại nhờ vào sự chuyền hoá glucose thành lactic acid.<br/>Giả sử một người chạy bộ trong một thời gian tiêu tốn 300 kcal. Khối lượng lactic acid tạo ra từ quá trình chuyền hoá đó là bao nhiêu gam (biết 1 cal = 4,184 J)? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"30","explanation":"Đáp án: 30.<br/>Tính khối lượng lactic acid tạo ra từ quá trình chạy bộ. Năng lượng cùa sự chuyển hoá glucose thành lactic acid trong quá trình chạy bộ chiếm 2%300 kcal = 6 kcal = 6 000 cal  25 104 J = 25,104 kJ.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> ;  =  -150 kJ<br/>0,335 mol           -25,104 kJ<br/>Khối lượng lactic acid được tạo ra trong quá trình chuyển hoá: 0,33590 = 30,1 g","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q21","number":21,"part":3,"type":"short_answer","text":"Một mẫu cồn X (thành phần chính là C<sub>2</sub>H<sub>5</sub>OH) có lẫn methanol (CH<sub>3</sub>OH). Đốt cháy 10g cồn X tỏa ra nhiệt lượng 291,9 kJ. Xác định phần trăm tạp chất methanol trong X biết rằng:<br/>CH<sub>3</sub>OH (l) + O<sub>2</sub> (g)  CO<sub>2</sub> (g)  + 2H<sub>2</sub>O<br/>C<sub>2</sub>H<sub>5</sub>OH (l) + 3O<sub>2</sub> (g)  2CO<sub>2</sub> (g)  + 3H<sub>2</sub>O","images":[],"correctAnswer":"8","explanation":"Đáp án: 8.<br/>Gọi số mol CH<sub>3</sub>OH và C<sub>2</sub>H<sub>5</sub>OH trong 10g X lần lượt là a và b<br/>Ta có:  32a  +  46b = 10          (1)<br/>           716a + 1370b = 291,9  (2)<br/>Giải (1) và (2), ta được: a = 0,025; b = 0,2<br/> Khối lượng CH<sub>3</sub>OH là 32.0,025 = 0,8 (g)<br/> Phần trăm tạp chất methanol trong X","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q22","number":22,"part":3,"type":"short_answer","text":"Một bình gas (khí hóa lỏng) chứa hỗn hợp propane và butane với tỉ lệ mol 1 : 2.<br/>Cho biết các phản ứng:<br/>C<sub>3</sub>H<sub>8</sub> (g) + 5O<sub>2</sub> (g)  3CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l)<br/>C<sub>4</sub>H<sub>10</sub> (g) + O<sub>2</sub> (g) 4CO<sub>2</sub> (g) + 5H<sub>2</sub>O (l)<br/>Trung bình mỗi ngày, một hộ gia đình cần đốt gas để cung cấp 10000 kJ nhiệt (hiệu suất hấp thụ nhiệt là 80%). Sau bao nhiêu ngày hộ gia đình trên sẽ sử dụng hết bình gas loại 12 kg? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"48","explanation":"Đáp án: 48.<br/>Gọi số mol C<sub>3</sub>H<sub>8</sub> và số mol C<sub>4</sub>H<sub>10</sub> là 2a, ta có: 44a  +  58.2a = 12.1000  a = 75 mol<br/>Nhiệt đốt cháy 12 kg gas là Q = 75.2220 + 150.2874 = 597600 (kJ)<br/>Số ngày sử dụng hết bình gas =  (ngày)","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q23","number":23,"part":3,"type":"short_answer","text":"Cho 16,5 gam Zn vào 500 g dung dịch HCl 1M, dung dịch thu được có nhiệt độ tăng thêm 5<sup>o</sup>C. Xác định nhiệt lượng của phản ứng giữa Zn và HCl trong dung dịch theo kJ (giả thuyết không có sự thất thoát nhiệt ra ngoài môi trường, nhiệt dung của dung dịch loãng bằng nhiệt dung của nước (4,2 J/g.K))","images":[],"correctAnswer":"42","explanation":"Đáp án: 42.<br/>Nhiệt lượng của dung dịch nhận là: 500.4,2.5 = 10500 (J) = 10,5 (kJ)<br/>Phản ứng hóa học xảy ra: Zn(s)  +  2HCl(aq)  ZnCl<sub>2</sub>(aq)  +  H<sub>2</sub>(g)<br/>Số mol HCl = 0,5 mol; số mol Zn = 0,254 mol<br/> HCl hết, Zn phản ứng 0,25 mol.<br/>Nhiệt phản ứng là: <sub>r</sub>H =","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q24","number":24,"part":3,"type":"short_answer","text":"Rót 100 mL dung dịch HCl 1M ở 27<sup>o</sup>C vào 100 mL dung dịch NaHCO<sub>3</sub>1M ở 28<sup>o</sup>C. Sau phản ứng, dung dịch thu được có nhiệt độ là bao nhiêu <sup>o</sup>C? (Kết quả làm tròn đến hàng đơn vị).<br/>Biết nhiệt tạo thành của các chất được cho trong bảng sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>HCl (aq)</td><td class='border border-slate-300 p-1.5'>NaHCO 3  (aq)</td><td class='border border-slate-300 p-1.5'>NaCl (aq)</td><td class='border border-slate-300 p-1.5'>H 2 O (l)</td><td class='border border-slate-300 p-1.5'>CO 2  (g)</td></tr><tr><td class='border border-slate-300 p-1.5'> </td><td class='border border-slate-300 p-1.5'>-168</td><td class='border border-slate-300 p-1.5'>-932</td><td class='border border-slate-300 p-1.5'>-407</td><td class='border border-slate-300 p-1.5'>-286</td><td class='border border-slate-300 p-1.5'>-392</td></tr></table>","images":[],"correctAnswer":"26","explanation":"Đáp án: 26.<br/>Phản ứng xảy ra:  HCl(aq)  +  NaHCO<sub>3</sub>(aq)  NaCl (aq)  +  H<sub>2</sub>O(l) + CO<sub>2</sub>(g)<br/>H = (-407) + (-286) + (-392) – (-168) – (-932) = 15 (kJ)<br/> Phản ứng thu nhiệt.<br/>Số mol HCl = số mol NaHCO<sub>3</sub> = 0,1 mol  Q = 0,1.15 = 1,5 (kJ)<br/>Nhiệt độ giảm đi: T = <br/>Nhiệt độ ban đầu khi trộn hai dung dịch: <br/> Nhiệt độ cuối cùng là: 27,5 – 1,8 = 25,7<sup>0</sup>C","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q25","number":25,"part":3,"type":"short_answer","text":"Một người thợ xây trong buổi sáng kéo được 500 kg vật liệu xây dựng lên tầng cao 10m. Để bù vào năng lượng đã tiêu hao, người đó cần uống cốc nước hòa tan m g glucose. Biết nhiệt tạo thành của glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), CO<sub>2</sub> và H<sub>2</sub>O lần lượt là -1271, -393,5 và -285,8 kJ/mol. Giá trị của m là bao nhiêu?","images":[],"correctAnswer":"3,15","explanation":"Đáp án: 3,15.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(l)  +6O<sub>2</sub>(g)    6CO<sub>2</sub>(g)  + 6H<sub>2</sub>O(l)<br/>= 6( CO<sub>2</sub>(g)) + 6( H<sub>2</sub>O(l))  -( C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(l)) - 6 ( O<sub>2</sub>(g))<br/>           = 6.(393,5) + 6(-285,8) – (-1271) – 6.0 = -2804,8 (kJ)<br/>Năng lượng người thợ tiêu hao = m.g.h = 500.9,8.10 = 49 000 (J) = 49 (kJ)<br/>Khối lượng glucose cần nạp = = 3,15 g.<br/>----------HẾT----------","explanationImages":[],"points":0.25,"level":"VDC"}]},"practiceBank":{"part1":[{"id":"b17_p1_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Phản ứng tỏa nhiệt là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"giải phóng năng lượng dạng nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"hấp thụ năng lượng dạng nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"lấy nhiệt từ môi trường","isCorrect":false},{"id":"d","letter":"D","text":"làm nhiệt độ của môi trường giảm đi","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Phản ứng thu nhiệt là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"giải phóng năng lượng dạng nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"hấp thụ năng lượng dạng nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"các chất sản phẩm nhận nhiệt từ các chất phản ứng","isCorrect":false},{"id":"d","letter":"D","text":"các chất phản ứng truyền nhiệt cho môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Phản ứng nào trong các phản ứng dưới đây là phản ứng thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"Vôi sống tác dụng với nước","isCorrect":false},{"id":"b","letter":"B","text":"Đốt cháy than củi","isCorrect":false},{"id":"c","letter":"C","text":"Đốt cháy cồn","isCorrect":false},{"id":"d","letter":"D","text":"Nung đá vôi","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Đâu là phản ứng tỏa nhiệt trong các trường hợp sau?","images":[],"options":[{"id":"a","letter":"A","text":"Nước bay hơi","isCorrect":false},{"id":"b","letter":"B","text":"Nước đóng băng","isCorrect":false},{"id":"c","letter":"C","text":"Quá trình quang hợp cây xanh","isCorrect":false},{"id":"d","letter":"D","text":"Pha viên sủi vitamin C vào nước","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Phản ứng trong quá trình hòa tan vitamin C sủi vao nước sau đây ví dụ cho phản ứng gì?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng thủy phân","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng nhiệt phân","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Phản ứng nhiệt nhôm hàn đường ray là ví dụ cho phản ứng nào?","images":[],"options":[{"id":"a","letter":"A","text":"Không là phản ứng oxi khử","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng phân hủy","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Đồ thị nào say đây thể hiện đúng sự thay đổi nhiệt độ khi dung dịch hydrochloric acid được cho vào dung dịch sodium hydroxide tới dư?","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Điều kiện nào sau đây là điều kiện chuẩn?","images":[],"options":[{"id":"a","letter":"A","text":"Áp suất 1 bar và nhiệt độ 25<sup>o</sup>C hay 298K","isCorrect":false},{"id":"b","letter":"B","text":"Áp suất 1 bar và nhiệt độ 298K","isCorrect":false},{"id":"c","letter":"C","text":"Áp suất 1 bar và nhiệt độ 25<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"Áp suất 1 bar và nhiệt độ 25K","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Kí hiệu biến thiên enthalpy chuẩn của phản ứng hóa học là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>r.</sub>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>298</sub>","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Quy ước về dấu của nhiệt phản ứng () nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt có > 0","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt có < 0","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng tỏa nhiệt có < 0","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt có = 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Các phản ứng tỏa nhiệt thường diễn ra","images":[],"options":[{"id":"a","letter":"A","text":"thuận lợi hơn các phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"khó khăn hơn các phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"khó khăn hơn khi càng tỏa ra nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"thuận lợi hơn khi càng tỏa ít nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học là","images":[],"options":[{"id":"a","letter":"A","text":"phương trình phản ứng hóa học xảy ra trong điều kiện cung cấp nhiệt độ","isCorrect":false},{"id":"b","letter":"B","text":"phương trình phản ứng hóa học có kèm theo nhiệt phản ứng","isCorrect":false},{"id":"c","letter":"C","text":"phương trình phản ứng hóa học có kèm theo nhiệt phản ứng và trạng thái của các chất đầu và sản phẩm","isCorrect":false},{"id":"d","letter":"D","text":"phương trình phản ứng hóa học tỏa nhiệt ra môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hoá học nào sau đây ứng với sơ đồ biểu diễn biến thiên enthalpy của phản ứng sau:","images":[],"options":[{"id":"a","letter":"A","text":"CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g) → 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    = -394,10 kJ","isCorrect":false},{"id":"b","letter":"B","text":"CI<sub>2</sub>O (g) + 3F<sub>2</sub>O(g) → 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    = +394,10 kJ","isCorrect":false},{"id":"c","letter":"C","text":"2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    = +394,10 kJ","isCorrect":false},{"id":"d","letter":"D","text":"2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    = -394,10 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây có thể tự xảy ra ở điều kiện thường?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng nhiệt phân Cu(OH)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng giữa H<sub>2</sub> và O<sub>2</sub> trong hỗn hợp khí","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng giữa Zn và dung dịch H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng đốt cháy cồn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây là phản ứng toả nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng nhiệt phân muối KNO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng phân huỷ khí NH<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng oxi hoá glucose trong cơ thể","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng hoà tan NH<sub>4</sub>Cl trong nước","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Nhiệt kèm theo phản ứng trong điều kiện chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false},{"id":"b","letter":"B","text":"biến thiên enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false},{"id":"c","letter":"C","text":"biến thiên enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false},{"id":"d","letter":"D","text":"enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học giữa nitrogen và oxygen như sau:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g) <sub>r</sub>= +180kJ<br/>Kết luận nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen và oxygen phản ứng mạnh hơn khi ở nhiệt độ thấp","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng xảy ra thuận lợi ở điều kiện thường","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng hóa học xảy ra có sự hấp thụ nhiệt năng từ môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Cho các phản ứng dưới đây:<br/>(1) CO (g) + O<sub>2</sub> (g) ⟶ CO<sub>2</sub> (g) = − 283 kJ<br/>(2) C (s) + H<sub>2</sub>O (g)  CO (g) + H<sub>2</sub> (g) = + 131,25 kJ<br/>(3) H<sub>2</sub> (g) + F<sub>2</sub> (g) ⟶ 2HF (g) = − 546 kJ<br/>(4) H<sub>2</sub> (g) + Cl<sub>2</sub> (g) ⟶ 2HCl (g) = − 184,62 kJ<br/>Phản ứng xảy ra thuận lợi nhất là","images":[],"options":[{"id":"a","letter":"A","text":"(1)","isCorrect":false},{"id":"b","letter":"B","text":"(2)","isCorrect":false},{"id":"c","letter":"C","text":"(3)","isCorrect":false},{"id":"d","letter":"D","text":"(4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q19","number":19,"part":1,"type":"multiple_choice","text":"Biến thiên enthalpy của một phản ứng được ghi ở sơ đồ dưới đây:<br/>Kết luận nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Năng lượng chất tham gia phản ứng nhỏ hơn năng lượng sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng là a kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q20","number":20,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học của phản ứng:<br/>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l) <sub>r</sub>= -571,68kJ.<br/>Phản ứng trên là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"tỏa nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"không có sự thay đổi năng lượng","isCorrect":false},{"id":"d","letter":"D","text":"có sự hấp thụ nhiệt lượng từ môi trường xung quanh","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q21","number":21,"part":1,"type":"multiple_choice","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CS<sub>2</sub>(l) + 3O<sub>2</sub>(g) CO<sub>2</sub>(g) + 2SO<sub>2</sub>(g) (1)<br/>CO<sub>2</sub>(g) CO(g) + O<sub>2</sub>(g) (2)<br/>Na(s) + 2H<sub>2</sub>O NaOH(aq) + H<sub>2</sub>(g) (3)<br/>ZnSO<sub>4</sub>(s) ZnO(s) + SO<sub>3</sub>(g)  (4)<br/>Cặp phản ứng thu nhiệt là","images":[],"options":[{"id":"a","letter":"A","text":"(1) và (2)","isCorrect":false},{"id":"b","letter":"B","text":"(3) và (4)","isCorrect":false},{"id":"c","letter":"C","text":"(1) và (3)","isCorrect":false},{"id":"d","letter":"D","text":"(2) và (4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q22","number":22,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(1) C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g) = -393,5 kJ.<br/>(2) 2Al(s) +  O<sub>2</sub>(g) → Al<sub>2</sub>O<sub>3</sub>(s) = -1675,7 kJ.<br/>(3) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = -890,36 kJ.<br/>(4) C<sub>2</sub>H<sub>2</sub>(g) +  O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + H<sub>2</sub>O (l) = -1299,58 kJ.<br/>Trong các phản ứng trên, phản ứng nào tỏa nhiều nhiệt nhất?","images":[],"options":[{"id":"a","letter":"A","text":"(1)","isCorrect":false},{"id":"b","letter":"B","text":"(2)","isCorrect":false},{"id":"c","letter":"C","text":"(3)","isCorrect":false},{"id":"d","letter":"D","text":"(4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q23","number":23,"part":1,"type":"multiple_choice","text":"Cho phản ứng hoá học xảy ra ở điều kiện chuẩn sau:<br/>NO<sub>2</sub>(g) (đỏ nâu)  N<sub>2</sub>O<sub>4</sub>(g) (không màu)<br/>Biết NO<sub>2</sub> và N<sub>2</sub>O<sub>4</sub> có  tương ứng là 33,18 kJ/mol và 9,16 kJ/mol. Điều này chứng tỏ phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"toả nhiệt, NO<sub>2</sub> bền vững hơn N<sub>2</sub>O<sub>4</sub>","isCorrect":false},{"id":"b","letter":"B","text":"thu nhiệt, NO<sub>2</sub> bền vững hơn N<sub>2</sub>O<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"toả nhiệt, N<sub>2</sub>O<sub>4</sub> bền vững hơn NO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"thu nhiệt, N<sub>2</sub>O<sub>4</sub> bền vững hơn NO<sub>2</sub>","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q24","number":24,"part":1,"type":"multiple_choice","text":"Nung KNO<sub>3</sub> lên 550<sup>o</sup>C xảy ra phản ứng:<br/>KNO<sub>3</sub>(s)  KNO<sub>2</sub>(s) +<br/>Phản ứng nhiệt phân KNO<sub>3</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"toả nhiệt, có ∆H < 0","isCorrect":false},{"id":"b","letter":"B","text":"thu nhiệt, có ∆H > 0","isCorrect":false},{"id":"c","letter":"C","text":"toả nhiệt, có ∆H > 0","isCorrect":false},{"id":"d","letter":"D","text":"thu nhiệt, có ∆H < 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q25","number":25,"part":1,"type":"multiple_choice","text":"Nung nóng hai ống nghiệm chứa NaHCO<sub>3</sub> và P, xảy ra các phản ứng sau:<br/>2NaHCO<sub>3</sub>(s)  Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g) (1)<br/>4P(s) + 5O<sub>2</sub>(g)  2P<sub>2</sub>O<sub>5</sub>(s) (2)<br/>Khi ngừng đun nóng, phản ứng (1) dừng lại còn phản ứng (2) tiếp tục xảy ra, chứng tỏ  của ozone (kJ/mol) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"phản ứng (1) toả nhiệt, phản ứng (2) thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"phản ứng (1) thu nhiệt, phản ứng (2) toả nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"cả 2 phản ứng đều toả nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"cả 2 phản ứng đều thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q26","number":26,"part":1,"type":"multiple_choice","text":"Cho các quá trình sau:<br/>(1) H<sub>2</sub>O (lỏng, ở 25<sup>o</sup>C) → H<sub>2</sub>O (hơi, ở 100<sup>o</sup>C).<br/>(2) H<sub>2</sub>O (lỏng, ở 25<sup>o</sup>C) → H<sub>2</sub>O (rắn, ở 0<sup>o</sup>C).<br/>(3) CaCO<sub>3</sub> (Đá vôi)  CaO + CO<sub>2</sub>.<br/>(4) Khí methane (CH<sub>4</sub>) cháy trong oxygen.<br/>Cặp phản ứng tỏa nhiệt là","images":[],"options":[{"id":"a","letter":"A","text":"(1) và (2)","isCorrect":false},{"id":"b","letter":"B","text":"(3) và (4)","isCorrect":false},{"id":"c","letter":"C","text":"(1) và (3)","isCorrect":false},{"id":"d","letter":"D","text":"(2) và (4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q27","number":27,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Các phản ứng phân hủy thường là phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng càng tỏa ra nhiều nhiệt càng dễ tự xảy ra","isCorrect":false},{"id":"c","letter":"C","text":"Các phản ứng oxi hóa chất béo cung cấp nhiệt cho cơ thể","isCorrect":false},{"id":"d","letter":"D","text":"Các phản ứng khi đun nóng đều dễ xảy ra hơn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q28","number":28,"part":1,"type":"multiple_choice","text":"Enthalpy tạo thành của một chất (Δ<sub>f</sub>H) là nhiệt kèm theo phản ứng tạo thành","images":[],"options":[{"id":"a","letter":"A","text":"1 gam chất đó từ các đơn chất bền nhất","isCorrect":false},{"id":"b","letter":"B","text":"1 lít chất đó từ các đơn chất dạng bền nhất","isCorrect":false},{"id":"c","letter":"C","text":"1 mol chất đó từ các đơn chất bền nhất","isCorrect":false},{"id":"d","letter":"D","text":"1 mol chất đó từ các hợp chất bền nhất","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q29","number":29,"part":1,"type":"multiple_choice","text":"Kí hiệu của nhiệt tạo thành chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q30","number":30,"part":1,"type":"multiple_choice","text":"Đơn vị của nhiệt tạo thành chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"kJ","isCorrect":false},{"id":"b","letter":"B","text":"kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"mol/kJ","isCorrect":false},{"id":"d","letter":"D","text":"J","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q31","number":31,"part":1,"type":"multiple_choice","text":"Enthalpy tạo thành chuẩn của một đơn chất bền","images":[],"options":[{"id":"a","letter":"A","text":"là biến thiên enthalpy chuẩn của phản ứng giữa nguyên tố đó với hydrogen","isCorrect":false},{"id":"b","letter":"B","text":"là biến thiên enthalpy chuẩn của phản ứng giữa nguyên tố đó với oxygen","isCorrect":false},{"id":"c","letter":"C","text":"được xác định từ nhiệt độ nóng chảy của nguyên tố đó","isCorrect":false},{"id":"d","letter":"D","text":"bằng 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q32","number":32,"part":1,"type":"multiple_choice","text":"Chất nào sau đây có nhiệt tạo thành chuẩn bằng 0 ?","images":[],"options":[{"id":"a","letter":"A","text":"CO<sub>2</sub>(g)","isCorrect":false},{"id":"b","letter":"B","text":"Na<sub>2</sub>O(g)","isCorrect":false},{"id":"c","letter":"C","text":"O<sub>2</sub>(g)","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>2</sub>O(l)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q33","number":33,"part":1,"type":"multiple_choice","text":"Phương trình hóa học nào dưới đây biểu thị enthalpy tạo thành chuẩn của CO(g)?","images":[],"options":[{"id":"a","letter":"A","text":"2C ((graphite)","isCorrect":false},{"id":"b","letter":"B","text":"C ((graphite) +","isCorrect":false},{"id":"c","letter":"C","text":"C ((graphite)","isCorrect":false},{"id":"d","letter":"D","text":"C ((graphite)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q34","number":34,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Biến thiên enthalpy chuẩn của một phản ứng hóa học là lượng nhiệt kèm theo phản ứng đó ở áp suất 1 bar và 25 <sup>0</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt (tỏa ra hay thu vào) kèm theo một phản ứng được thực hiện ở 1 bar và 25 K là biến thiên enthalpy chuẩn của phản ứng đó","isCorrect":false},{"id":"c","letter":"C","text":"Một số phản ứng khi xảy ra làm môi trường xung quanh lạnh đi là do các phản ứng này thu nhiệt và lấy nhiệt từ môi trường","isCorrect":false},{"id":"d","letter":"D","text":"Một số phản ứng khi xảy ra làm môi trường xung quanh nóng lên là phản ứng tỏa nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q35","number":35,"part":1,"type":"multiple_choice","text":"Ở điều kiện chuẩn, công thức tính biến thiên enthalpy của phản ứng theo nhiệt tạo thành là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q36","number":36,"part":1,"type":"multiple_choice","text":"Cho phản ứng sau : KNO<sub>3</sub>(s)  KNO<sub>2</sub>(s) + O<sub>2</sub>(g) .<br/>Biểu thức đúng tính của phản ứng theo giá trị enthalpy tạo thành chuẩn của các chất là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q37","number":37,"part":1,"type":"multiple_choice","text":"Cho phản ứng nhiệt nhôm sau để hàn gắn đường ray sau : Fe<sub>2</sub>O<sub>3</sub>(s) + 2Al(s) → Al<sub>2</sub>O<sub>3</sub>(s) +2Fe(s)  . Biểu thức đúng tính của phản ứng theo giá trị nhiệt tạo thành chuẩn của các chất là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q38","number":38,"part":1,"type":"multiple_choice","text":"Cho phản ứng: N<sub>2</sub> (g) + 3H<sub>2</sub> (g) ⟶ 2NH<sub>3</sub> (g)<br/>Ở điều kiện chuẩn, cứ 1 mol N<sub>2</sub> phản ứng hết sẽ tỏa ra 91,8 kJ. Enthalpy tạo thành chuẩn () của NH<sub>3</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"− 91,8 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"91,8 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"− 45,9 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"45,9 kJ/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q39","number":39,"part":1,"type":"multiple_choice","text":"Methane là thành phần chính của khí thiên nhiên. Xét phản ứng đốt cháy methane:<br/>CH<sub>4</sub> (g) + 2O<sub>2</sub> (g)  CO<sub>2</sub> (g) + 2H<sub>2</sub>O (l)<br/>Biết nhiệt tạo thành chuẩn của CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tương ứng là –393,5 kJ/mol và –285,8 kJ/mol. Nhiệt tạo thành chuẩn của khí methane là","images":[],"options":[{"id":"a","letter":"A","text":"–74,8 kJ","isCorrect":false},{"id":"b","letter":"B","text":"74,8 kJ","isCorrect":false},{"id":"c","letter":"C","text":"–211,6 kJ","isCorrect":false},{"id":"d","letter":"D","text":"211,6 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q40","number":40,"part":1,"type":"multiple_choice","text":"Ở điều kiện chuẩn, phản ứng nào sau đây có biến thiên enthalpy của phản ứng bằng enthalpy tạo thành của chất sản phẩm?","images":[],"options":[{"id":"a","letter":"A","text":"HCl(aq) + NaOH(aq) → NaCl(aq) + H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub>(l) + 3F<sub>2</sub>(g) → 2NF<sub>3</sub>(g)","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>2</sub>(g) + O<sub>2</sub>(g) → H<sub>2</sub>O<sub>2</sub>(g)","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q41","number":41,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học sau: 2H<sub>2</sub> (g) + O<sub>2</sub> (g) ⟶ 2H<sub>2</sub>O (g)      = − 483,64 kJ<br/>So sánh đúng là","images":[],"options":[{"id":"a","letter":"A","text":"∑ (cđ) > ∑ (sp)","isCorrect":false},{"id":"b","letter":"B","text":"∑ (cđ) = ∑ (sp)","isCorrect":false},{"id":"c","letter":"C","text":"∑ (cđ) < ∑ (sp)","isCorrect":false},{"id":"d","letter":"D","text":"∑ (cđ) ≤ ∑ (sp)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q42","number":42,"part":1,"type":"multiple_choice","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CO<sub>2</sub>(g) → CO(g) + O<sub>2</sub>(g)        = +280 kJ<br/>Giá trị của phản ứng 2CO(g) + O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) là","images":[],"options":[{"id":"a","letter":"A","text":"+140 kJ","isCorrect":false},{"id":"b","letter":"B","text":"1120 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+560 kJ","isCorrect":false},{"id":"d","letter":"D","text":"560 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q43","number":43,"part":1,"type":"multiple_choice","text":"Cho phản ứng: NH<sub>3</sub> (g) + HCl (g) ⟶ NH<sub>4</sub>Cl (s). Biết (NH<sub>4</sub>Cl(s)) = −314,4 kJ/mol; (HCl(g)) = −92,31 kJ/mol;(NH<sub>3</sub>(g)) = −45,9 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng tính là","images":[],"options":[{"id":"a","letter":"A","text":"– 176,19 kJ","isCorrect":false},{"id":"b","letter":"B","text":"– 314,4 kJ","isCorrect":false},{"id":"c","letter":"C","text":"– 452,61 kJ","isCorrect":false},{"id":"d","letter":"D","text":"176,2 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q44","number":44,"part":1,"type":"multiple_choice","text":"Cho phản ứng hóa học sau: 4FeS(s) + 7O<sub>2</sub>(g) → 2Fe<sub>2</sub>O<sub>3</sub>(s) + 4SO<sub>2</sub>(g). Biết nhiệt tạo thành ∆<sub>f</sub>H<sup>0</sup><sub>298</sub> của các chất FeS(s), Fe<sub>2</sub>O<sub>3</sub>(s) và SO<sub>2</sub>(g) lần lượt là –100,0 kJ/mol, –825,5 kJ/mol và –296,8 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là","images":[],"options":[{"id":"a","letter":"A","text":"+3105,6 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–3105,6 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+2438,2 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–2438,2 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q45","number":45,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học: 3H<sub>2</sub>(g) + N<sub>2</sub>(g)  2NH<sub>3</sub>(g)     = -91,80kJ<br/>Lượng nhiệt tỏa ra khi dùng 9 g H<sub>2</sub>(g) để tạo thành NH<sub>3</sub>(g) là","images":[],"options":[{"id":"a","letter":"A","text":"-275,40 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-137,70 kJ","isCorrect":false},{"id":"c","letter":"C","text":"-45,90 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-183,60 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q46","number":46,"part":1,"type":"multiple_choice","text":"Cho phương trình phản ứng sau:<br/>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l) ∆H = -572 kJ<br/>Khi cho 2 g khí H<sub>2</sub> tác dụng hoàn toàn với 32 g khí O<sub>2</sub> thì phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"toả ra nhiệt lượng 286 kJ","isCorrect":false},{"id":"b","letter":"B","text":"thu vào nhiệt lượng 286 kJ","isCorrect":false},{"id":"c","letter":"C","text":"toả ra nhiệt lượng 572 kJ","isCorrect":false},{"id":"d","letter":"D","text":"thu vào nhiệt lượng 572 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q47","number":47,"part":1,"type":"multiple_choice","text":"Cho  (Fe<sub>2</sub>O<sub>3</sub>, s) = − 825,5 kJ/mol. Biết 1 J = 0,239 cal. Enthalpy tạo thành chuẩn theo đơn vị (kcal) của Fe<sub>2</sub>O<sub>3</sub>(s) là","images":[],"options":[{"id":"a","letter":"A","text":"197,2945 kcal/mol","isCorrect":false},{"id":"b","letter":"B","text":"−197,2945 kcal/mol","isCorrect":false},{"id":"c","letter":"C","text":"3454 kcal/mol","isCorrect":false},{"id":"d","letter":"D","text":"− 3454 kcal/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q48","number":48,"part":1,"type":"multiple_choice","text":"Cho phản ứng: Na (s) + Cl<sub>2</sub> (g) ⟶ NaCl (s) có  (NaCl, s) = − 411,1 kJ/mol. Nếu chỉ thu được 0,5 mol NaCl (s) ở điều kiện chuẩn thì lượng nhiệt tỏa ra là","images":[],"options":[{"id":"a","letter":"A","text":"411,1 kJ","isCorrect":false},{"id":"b","letter":"B","text":"25,55 kJ","isCorrect":false},{"id":"c","letter":"C","text":"250,55 kJ","isCorrect":false},{"id":"d","letter":"D","text":"205,55 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q49","number":49,"part":1,"type":"multiple_choice","text":"Để nhiệt phân 1 mol CaCO<sub>3</sub>(s) ở điều kiện chuẩn, thu được CaO(s) và CO<sub>2</sub>(g) cần cung cấp 179,2 kJ. Tính  của phản ứng nhiệt phân 1 kg CaCO<sub>3</sub>","images":[],"options":[{"id":"a","letter":"A","text":"179,2kJ","isCorrect":false},{"id":"b","letter":"B","text":"-179,2kJ","isCorrect":false},{"id":"c","letter":"C","text":"1792kJ","isCorrect":false},{"id":"d","letter":"D","text":"-1792kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q50","number":50,"part":1,"type":"multiple_choice","text":"Cho biết phản ứng tạo thành 2 mol HCl (g) ở điều kiện chuẩn tỏa ra 184,62 kJ:<br/>H<sub>2</sub> (g) + Cl<sub>2</sub> (g)⟶ 2HCl (g) (*)<br/>Cho các phát biểu sau:<br/>(1) Enthalpy tạo thành chuẩn của HCl (g) là −184,62 kJ/mol.<br/>(2) Biến thiên enthalpy chuẩn của phản ứng (*) là − 184,62 kJ.<br/>(3) Enthalpy tạo thành chuẩn của HCl (g) là –92,31 kJ/mol.<br/>(4) Biến thiên enthalpy chuẩn của phản ứng (*) là 184,62 kJ.<br/>Những phát biểu nào dưới đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"(1) và (2)","isCorrect":false},{"id":"b","letter":"B","text":"(2) và (3)","isCorrect":false},{"id":"c","letter":"C","text":"(3) và (4)","isCorrect":false},{"id":"d","letter":"D","text":"(1) và (4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q51","number":51,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học của phản ứng trung hòa sau:<br/>HCl (aq) + NaOH (aq)  NaCl (aq) + H<sub>2</sub>O (l)<br/>Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Cho 1 mol HCl tác dụng với 1 mol NaOH dư tỏa nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"b","letter":"B","text":"Cho HCl dư tác dụng với 1 mol NaOH thu nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"c","letter":"C","text":"Cho 1 mol HCl tác dụng với 1 mol NaOH tỏa nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q52","number":52,"part":1,"type":"multiple_choice","text":"Sự phá vỡ liên kết cần ….. năng lượng, sự hình thành liên kết …... năng lượng. Cụm từ tích hợp điền vào chỗ chấm trên lần lượt là","images":[],"options":[{"id":"a","letter":"A","text":"cung cấp, giải phóng","isCorrect":false},{"id":"b","letter":"B","text":"giải phóng, cung cấp","isCorrect":false},{"id":"c","letter":"C","text":"cung cấp, cung cấp","isCorrect":false},{"id":"d","letter":"D","text":"giải phóng, giải phóng","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q53","number":53,"part":1,"type":"multiple_choice","text":"Biểu thức tính biến thiên enthalpy của một phản ứng hóa học (∆<sub>r</sub>) theo năng lượng liên kết là","images":[],"options":[{"id":"a","letter":"A","text":"∆<sub>r</sub> =","isCorrect":false},{"id":"b","letter":"B","text":"∆<sub>r</sub> =","isCorrect":false},{"id":"c","letter":"C","text":"∆<sub>r</sub> =","isCorrect":false},{"id":"d","letter":"D","text":"∆<sub>r</sub> =","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q54","number":54,"part":1,"type":"multiple_choice","text":"Khí hydrogen và khí oxygen gây nổ theo tỉ lệ mol tương ứng là 2:1 khi xảy ra phản ứng như sau: 2H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2H<sub>2</sub>O(g) . Biểu thức tính  của phản ứng theo năng lượng liên kết là","images":[],"options":[{"id":"a","letter":"A","text":"= E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – 2E<sub>b</sub>(O-H)","isCorrect":false},{"id":"b","letter":"B","text":"= E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – E<sub>b</sub>(O-H)","isCorrect":false},{"id":"c","letter":"C","text":"= 2E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – 2E<sub>b</sub>(O-H)","isCorrect":false},{"id":"d","letter":"D","text":"= 2E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – 4E<sub>b</sub>(O-H)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q55","number":55,"part":1,"type":"multiple_choice","text":"Cho phản ứng hóa học sau: N<sub>2</sub>(g) + O<sub>2</sub>(g) → 2NO(g). Cho biết năng lượng liên kết trong các phân tử O<sub>2</sub>, N<sub>2</sub> và NO lần lượt là 494 kJ/mol; 945 kJ/mol và 607 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là","images":[],"options":[{"id":"a","letter":"A","text":"+298 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–298 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+225 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–225 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q56","number":56,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học sau:<br/>H<sub>2</sub> (g) + I<sub>2</sub> (g)  2HI (g)<br/>Phát biểu nào sau đây về sự trao đổi năng lượng của phản ứng trên là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng giải phóng nhiệt lượng 11,3 kJ khi 2 mol HI được tạo thành","isCorrect":false},{"id":"b","letter":"B","text":"Tổng nhiệt phá vỡ liên kết của chất phản ứng lớn hơn nhiệt tỏa ra khi tạo thành sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Năng lượng chứa trong H<sub>2</sub> và I<sub>2</sub> cao hơn trong HI","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng xảy ra với tốc độ chậm","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q57","number":57,"part":1,"type":"multiple_choice","text":"Tính cho phản ứng sau: H<sub>2</sub>(g) + F<sub>2</sub> (g) → HF(g). Biết E<sub>H</sub><sub></sub><sub>H</sub> = 436 kJ.mol<sup></sup><sup>1</sup>, E<sub>F</sub><sub></sub><sub>F</sub> = 159 kJ.mol<sup></sup><sup>1</sup>, E<sub>H</sub><sub></sub><sub>F</sub> = 565  kJ.mol<sup></sup><sup>1</sup>","images":[],"options":[{"id":"a","letter":"A","text":"267,5 kJ","isCorrect":false},{"id":"b","letter":"B","text":"267,5 kJ","isCorrect":false},{"id":"c","letter":"C","text":"30 kJ","isCorrect":false},{"id":"d","letter":"D","text":"30 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q58","number":58,"part":1,"type":"multiple_choice","text":"Phản ứng tổng hợp ammonia: N<sub>2</sub> (g) + 3H<sub>2</sub> (g)  2NH<sub>3</sub> (g)<br/>Biết năng lượng liên kết (kJ/mol) của  và  lần lượt là 946 và 436.<br/>Năng lượng liên kết của  trong ammonia là","images":[],"options":[{"id":"a","letter":"A","text":"391 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"361 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"245 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"490 kJ/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q59","number":59,"part":1,"type":"multiple_choice","text":"Cho phản ứng: 4HCl (g) + O<sub>2</sub> (g)  2Cl<sub>2</sub> (g) + 2H<sub>2</sub>O (g)<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>H-Cl</td><td class='border border-slate-300 p-1.5'>O=O</td><td class='border border-slate-300 p-1.5'>Cl<sup>-</sup>Cl</td><td class='border border-slate-300 p-1.5'>O-H</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>427</td><td class='border border-slate-300 p-1.5'>498</td><td class='border border-slate-300 p-1.5'>243</td><td class='border border-slate-300 p-1.5'>467</td></tr></table><br/>Biến thiên enthalpy chuẩn của phản ứng trên tính theo năng lượng liên kết là bao nhiêu? Phản ứng tỏa nhiệt hay thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"= − 148 kJ, phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"= − 148 kJ, phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"= 215 kJ, phản ứng tỏa nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"= 215 kJ, phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q60","number":60,"part":1,"type":"multiple_choice","text":"Cho phản ứng hydrogen hoá ethylene sau:<br/>H<sub>2</sub>C=CH<sub>2</sub>(g) + H<sub>2</sub>(g)  H<sub>3</sub>C–CH<sub>3</sub>(g)<br/>Biết năng lượng liên kết trong các chất cho trong bảng sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>Phân tử</td><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>Phân tử</td><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td></tr><tr><td class='border border-slate-300 p-1.5'>C = C</td><td class='border border-slate-300 p-1.5'>C 2 H 4</td><td class='border border-slate-300 p-1.5'>612</td><td class='border border-slate-300 p-1.5'>C – C</td><td class='border border-slate-300 p-1.5'>C 2 H 6</td><td class='border border-slate-300 p-1.5'>346</td></tr><tr><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C 2 H 4</td><td class='border border-slate-300 p-1.5'>418</td><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C 2 H 6</td><td class='border border-slate-300 p-1.5'>418</td></tr><tr><td class='border border-slate-300 p-1.5'>H – H</td><td class='border border-slate-300 p-1.5'>H 2</td><td class='border border-slate-300 p-1.5'>436</td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td></tr></table><br/>Biến thiên enthalpy (kJ) của phản ứng có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"134","isCorrect":false},{"id":"b","letter":"B","text":"-134","isCorrect":false},{"id":"c","letter":"C","text":"478","isCorrect":false},{"id":"d","letter":"D","text":"284","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q61","number":61,"part":1,"type":"multiple_choice","text":"Giá trị trung bình của các năng lượng liên kết ở điều kiện chuẩn:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>C-H</td><td class='border border-slate-300 p-1.5'>C-C</td><td class='border border-slate-300 p-1.5'>C=C</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>418</td><td class='border border-slate-300 p-1.5'>346</td><td class='border border-slate-300 p-1.5'>612</td></tr></table><br/>Biến thiên enthalpy của phản ứng C<sub>3</sub>H<sub>8</sub> (g)  CH<sub>4</sub> (g) + C<sub>2</sub>H<sub>4</sub> (g) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"+103 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-103 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+80 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-80 kJ. Đáp án:","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q62","number":62,"part":1,"type":"multiple_choice","text":"Cho phản ứng sau: CHCH(g) + 2H<sub>2</sub>(g) CH<sub>3</sub>-CH<sub>3</sub> (g).<br/>Năng lượng liên kết (kJ/mol) của H – H là 436, của C – C là 347, của C – H là 414 và của CC là 839. Biến thiên enthalpy của phản ứng là","images":[],"options":[{"id":"a","letter":"A","text":"-294 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-292 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+292 kJ","isCorrect":false},{"id":"d","letter":"D","text":"+294 kJ. Đáp án: ∆<sub>r</sub>H = 2E<sub>(C-H)</sub> + E<sub>(C≡C)</sub> + 2E<sub>(H-H)</sub> – 6E<sub>(C-H)</sub> – E<sub>(C-C)</sub> = (2.414) + 839 + (2.436) – (6.414) – 347 = -292 (kJ)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q63","number":63,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(1) C (s) + CO<sub>2</sub> (g)  2CO (g)<br/>(2) C (s) + H<sub>2</sub>O (g)  CO (g) + H<sub>2</sub> (g)<br/>(3) CO (g) + H<sub>2</sub>O (g)  CO<sub>2</sub> (g) + H<sub>2</sub> (g)<br/>Ở 500K, 1 atm, biến thiên enthalpy của phản ứng (3) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"-39,8 kJ","isCorrect":false},{"id":"b","letter":"B","text":"39,8 kJ","isCorrect":false},{"id":"c","letter":"C","text":"-47,00 kJ","isCorrect":false},{"id":"d","letter":"D","text":"106,7 kJ. Đáp án: Phản ứng (3) = (2) – (1) = -39,8 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q64","number":64,"part":1,"type":"multiple_choice","text":"Làm các thí nghiệm tương tự nhau: Cho 0,05 mol mỗi kim loại Mg, Zn, Fe vào 3 bình đựng 100 mL dung dịch CuSO<sub>4</sub> 0,5M. Nhiệt độ tăng lên cao nhất ở mỗi bình lần lượt là . Sự sắp xếp nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"Đáp án: Cả ba kim loại Mg, Zn, Fe đều tác dụng với CuSO<sub>4</sub> với cùng tỉ lệ mol 1 : 1, kim loại càng mạnh thì càng toả nhiều nhiệt. Do Mg > Zn > Fe nên nhiệt độ tăng cao nhất ở bình có Mg, rồi đến Zn, Fe","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q65","number":65,"part":1,"type":"multiple_choice","text":"Tính của phản ứng đốt cháy 1 mol C<sub>2</sub>H<sub>2</sub> (g) biết các sản phẩm thu được đều ở thể khí. Cho enthalpy tạo thành chuẩn của các chất tương ứng là<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>C 2 H 2  (g)</td><td class='border border-slate-300 p-1.5'>CO 2  (g)</td><td class='border border-slate-300 p-1.5'>H 2 O (g)</td></tr><tr><td class='border border-slate-300 p-1.5'> (kJ/mol)</td><td class='border border-slate-300 p-1.5'>+ 227</td><td class='border border-slate-300 p-1.5'>− 393,5</td><td class='border border-slate-300 p-1.5'>− 241,82</td></tr></table>","images":[],"options":[{"id":"a","letter":"A","text":"– 1270,6 kJ","isCorrect":false},{"id":"b","letter":"B","text":"− 1255,82 kJ","isCorrect":false},{"id":"c","letter":"C","text":"– 1218,82 kJ","isCorrect":false},{"id":"d","letter":"D","text":"– 1522,82 kJ. Đáp án:  Dùng công thức tính = −393,5.2 + (−241,82).1 – 227 = 1255,82 kJ Vậy = 0,75.(-283) = -212,25 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q66","number":66,"part":1,"type":"multiple_choice","text":"Phản ứng đốt cháy Ethanol: C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l)<br/>Đốt cháy hoàn toàn 5 g ethanol, nhiệt tỏa ra làm nóng chảy 447 g nước đá ở 0<sup>o</sup>C. Biết 1 g nước đá nóng chảy hấp thụ nhiệt lượng 333,5 J, biến thiên enthalpy của phản ứng đốt cháy ethanol là","images":[],"options":[{"id":"a","letter":"A","text":"-1371 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"-954 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"-149 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"+149 kJ/mol. Đáp án: 447g nước đá nóng chảy cần nhiệt lượng là: Q = 447.333,5 = 149 074,5 J ≈ 149 (kJ). ⇒ Đốt cháy hoàn toàn 5 g ethanol tỏa ra 149 kJ nhiệt lượng. ⇒ Biến thiên enthalpy của phản ứng đốt cháy 1 mol ethanol ~ 46 g ethanol à","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p1_p1_q67","number":67,"part":1,"type":"multiple_choice","text":"Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau: NH<sub>4</sub>NO<sub>3</sub>(s) + H<sub>2</sub>O(l) NH<sub>4</sub>NO<sub>3</sub>(aq)<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Biết nhiệt dung riêng của H<sub>2</sub>O là 4,2 J/g.K. Sau khi muối tan hết, nước trong bình có nhiệt độ là","images":[],"options":[{"id":"a","letter":"A","text":"31,2<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"b","letter":"B","text":"28,1<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"c","letter":"C","text":"21,9<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"18,8<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"Đáp án:  m  =","isCorrect":false},{"id":"d","letter":"D","text":"V  = 1000 g Q = mcT = 1000.4,2. T = 26.1000  T = 6,2 <sup>o</sup>C Sau khi hòa tan nước trong bình có nhiệt độ giảm so với ban đầu  25 – 6,2 = 18,8<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p1_p1_q68","number":68,"part":1,"type":"multiple_choice","text":"Dung dịch glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) 5%, có khối lượng riêng là 1,02 g/mL, phản ứng oxi hóa 1 mol glucose tạo thành CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tỏa ra nhiệt lượng là 2803,0 kJ.<br/>Một người bệnh được truyền một chai nước chứa 500 mL dung dịch glucose 5%. Năng lượng tối đa từ phản ứng oxi hóa hoàn toàn glucose mà bệnh nhân đó có thể nhận được là","images":[],"options":[{"id":"a","letter":"A","text":"+397,09 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-397,09 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+416,02 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-416,02 kJ. Đáp án: Phản ứng tỏa nhiệt nên  Số mol glucose:  Q = 2803,0.0,14167 = 397,1 (kJ)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VDC"}],"part2":[{"id":"b17_p2_p2_q1","number":1,"part":2,"type":"true_false","text":"Khi các phản ứng hóa học xảy ra thường có sự trao đổi nhiệt với môi trường, làm thay đổi nhiệt độ của môi trường","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Khi than, củi cháy không khí xung quanh ấm hơn do phản ứng tỏa nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Pha viên C sủi vitamin C vào nước, khi viên C sủi tan thấy cốc nước mát hơn là do phản ứng thu nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q2","number":2,"part":2,"type":"true_false","text":"Thực hiện hai thí nghiệm dưới đây:<br/>Thí nghiệm 1: Đặt một nhiệt kế vào trong cốc thủy tinh chứa khoảng 50 ml dung dịch hydrochloric acid (HCl) 1M (hình 14.1). Khi nhiệt độ trong cốc ổn định, ghi nhiệt độ ban đầu. Thêm vào cốc khoảng 1 gam magnesium oxide (MgO) rồi dùng đũa thủy tinh khuấy liên tục.<br/>Thí nghiệm 2: Lặp lại thí nghiệm với bộ dụng cụ và cách tiến hành như trên, nhưng thay dung dịch hydrochloric acid (HCl) 1M bằng khoảng 50 ml dung dịch ethanoic acid (CH<sub>3</sub>COOH) 5% (giấm ăn) và khoảng 5 gam baking soda (sodium hydrogen carbonate, NaHCO<sub>3</sub>)","images":[],"options":[{"id":"a","letter":"A","text":"Hiện tượng thí nghiệm 1: MgO tan trong dung dịch HCl tạo kết tủa trắng","isCorrect":false},{"id":"b","letter":"B","text":"Hiện tượng thí nghiệm 2: Bột baking soda (NaHCO<sub>3</sub>) tan trong dung dịch giấm ăn (CH<sub>3</sub>COOH), có khí không màu, không mùi thoát ra","isCorrect":true},{"id":"c","letter":"C","text":"Trong thí nghiệm 1, nhiệt độ của hỗn hợp phản ứng tăng lên","isCorrect":true},{"id":"d","letter":"D","text":"Trong thí nghiệm 2, nhiệt độ của hỗn hợp phản ứng giảm xuống","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. MgO tan trong HCl không tạo kết tủa.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q3","number":3,"part":2,"type":"true_false","text":"Mỗi phát biểu sau đây là đúng hay sai?","images":[],"options":[{"id":"a","letter":"A","text":"Nung NH<sub>4</sub>Cl(s) tạo ra HCl(g) và NH<sub>3</sub>(g) là phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Cồn cháy trong không khí là phản ứng tỏa nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Phản ứng thủy phân collagen thành gelatin (là một loại protein dễ tiêu hóa) diễn ra khi hầm xương động vật là phản ứng thu nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Phản ứng tạo gỉ sắt là phản ứng thu nhiệt","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Phản ứng thu nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Phản ứng tỏa nhiệt","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q4","number":4,"part":2,"type":"true_false","text":"Biến thiên enthalpy chuẩn là nhiệt lượng tỏa ra hay thu vào của phản ứng ở điều kiện chuẩn","images":[],"options":[{"id":"a","letter":"A","text":"Biến thiên enthalpy của phản ứng kí hiệu là Δ<sub>r</sub>H","isCorrect":true},{"id":"b","letter":"B","text":"Biến thiên enthalpy chuẩn của phản ứng kí hiệu là","isCorrect":false},{"id":"c","letter":"C","text":"Điều kiện chuẩn là điều kiện ứng với áp suất 1 bar, nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường chọn là 0<sup>o</sup>C","isCorrect":false},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn có đơn vị: kJ hoặc kcal (1 J = 0,239 cal)","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. Kí hiệu là .<br/>c. Sai. Nồng độ 1 mol/L.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q5","number":5,"part":2,"type":"true_false","text":"Enthalpy tạo thành hay nhiệt tạo thành (Δ<sub>f</sub>H) của một chất là biến thiên enthalpy của phản ứng tạo thành 1 mol chất đó từ các đơn chất ở trạng thái bền vững, ở một điều kiện chuẩn","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành kí hiệu là","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt tạo thành chuẩn kí hiệu là","isCorrect":true},{"id":"c","letter":"C","text":"Enthalpy tạo thành chuẩn của các đơn chất bền vững nhất đều bằng 0","isCorrect":true},{"id":"d","letter":"D","text":"Nếu  > 0, chất bền hơn về mặt năng lượng so với các đơn chất bền tạo nên nó","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Kí hiệu là .<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Nếu  > 0, chất kém bền hơn về mặt năng lượng so với các đơn chất bền tạo nên nó","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q6","number":6,"part":2,"type":"true_false","text":"Mỗi phát biểu sau đây là đúng hay sai?","images":[],"options":[{"id":"a","letter":"A","text":"Trong phản ứng tỏa nhiệt, dấu của ∆H dương vì năng lượng của hệ chất phản ứng nhỏ hơn năng lượng của hệ chất sản phẩm","isCorrect":false},{"id":"b","letter":"B","text":"Trong phản ứng thu nhiệt, dấu của ∆H âm vì năng lượng của hệ chất phản ứng lớn hơn năng lượng của hệ chất sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Giá trị tuyệt đối của biến thiên enthalpy càng lớn thì nhiệt lượng tỏa ra hay thu vào của phản ứng càng nhiều","isCorrect":true},{"id":"d","letter":"D","text":"Các phản ứng xảy ra ở nhiệt độ phòng thường là phản ứng tỏa nhiệt, các phản ứng thu nhiệt thường xảy ra khi đun nóng","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Trong phản ứng tỏa nhiệt, ∆H < 0.<br/>b. Sai. Trong phản ứng thu nhiệt, dấu của ∆H > 0.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q7","number":7,"part":2,"type":"true_false","text":"Cho phản ứng sau: S(s) + O<sub>2</sub>(g)  SO<sub>2</sub>(g)  và  (SO<sub>2</sub>, g) = – 296,8 kJ/mol","images":[],"options":[{"id":"a","letter":"A","text":"(SO<sub>2</sub>, g) = –296,8 kJ/mol là lượng nhiệt tỏa ra khi tạo ra 1 mol SO<sub>2</sub> (g) từ đơn chất S (s) và O<sub>2</sub> (g), đây là các đơn chất bền nhất ở điều kiện chuẩn","isCorrect":true},{"id":"b","letter":"B","text":"Ở điều kiện chuẩn,  (O<sub>2</sub>, g) = 0","isCorrect":true},{"id":"c","letter":"C","text":"Ở điều kiện chuẩn,  (S, s)  0","isCorrect":false},{"id":"d","letter":"D","text":"Hợp chất SO<sub>2</sub>(g) kém bền hơn về mặt năng lượng so với các đơn chất bền S (s) và O<sub>2</sub> (g)","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai.  (S, s) = 0.<br/>d. Sai. Vì  (SO<sub>2</sub>, g) < 0, chất này bền hơn các đơn chất tạo nên nó","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q8","number":8,"part":2,"type":"true_false","text":"Cho sơ đồ (a) và (b) biểu diển enthalpy của phản ứng:","images":[],"options":[{"id":"a","letter":"A","text":"Sơ đồ (a) mô tả phản ứng tỏa nhiệt, sơ đồ (b) mô tả phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Trong sơ đồ (a),  (cđ) nhỏ hơn  (sp)","isCorrect":true},{"id":"c","letter":"C","text":"Trong sơ đồ (b),  (cđ) lớn hơn  (sp)","isCorrect":true},{"id":"d","letter":"D","text":"Các phản ứng tỏa nhiệt thường diễn ra thuận lợi hơn phản ứng thu nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. (a): thu nhiệt, (b): tỏa nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q9","number":9,"part":2,"type":"true_false","text":"Cho phương trình nhiệt hóa sau:","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng trên là phản ứng thu nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Ở điều kiện chuẩn, cần phải cung cấp 26,5 kJ nhiệt lượng cho quá trình 1 mol H<sub>2</sub>(g) phản ứng với 1 mol I<sub>2</sub>(s) để thu được 1 mol HI","isCorrect":false},{"id":"c","letter":"C","text":"Nhiệt tạo thành chuẩn của HI(g) lớn hơn 26,5 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"Tổng enthalpy tạo thành của chất tham gia phản ứng trên nhỏ hơn tổng enthalpy của chất sản phẩm","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. Ở điều kiện chuẩn, cần phải cung cấp 26,5 kJ nhiệt lượng cho quá trình 0,5 mol H<sub>2</sub>(g) phản ứng với 0,5 mol I<sub>2</sub>(s) để thu được 1 mol HI.<br/>c. Sai. Nhiệt tạo thành chuẩn của HI(g) bằng 26,5 kJ/mol.<br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q10","number":10,"part":2,"type":"true_false","text":"Sulfur dioxide là một chất có nhiều ứng dụng trong công nghiệp (dùng để sản xuất sulfuric acid, tẩy trắng bột giấy trong công nghiệp giấy, tẩy trắng dung dịch đường trong sản xuất đường tinh luyện,…) và giúp ngăn cản sự phát triển của một số loại vi khuẩn và nấm gây hư hại cho thực phẩm. Ở áp suất 1 bar và nhiệt độ 25 <sup>0</sup>C, phản ứng giữa 1 mol sulfur với oxygen xảy ra theo phương trình:<br/>S(s) + O<sub>2</sub>(g)  SO<sub>2</sub>(g)” và tỏa một lượng nhiệt là 296,9 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của sulfur dioxide bằng –296,9 kJ/mol","isCorrect":true},{"id":"b","letter":"B","text":"Sulfur dioxide vừa có thể là chất khử vừa có thể là chất oxi hóa, tùy thuộc vào phản ứng mà nó tham gia","isCorrect":true},{"id":"c","letter":"C","text":"0,5 mol sulfur tác dụng hết với oxygen giải phóng 148,45 kJ năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn của phản ứng là 296,9 kJ","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Biến thiên enthalpy chuẩn của phản ứng là -196,9kJ","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q11","number":11,"part":2,"type":"true_false","text":"Cho phương trình phản ứng: Zn (s) + CuSO<sub>4</sub> (aq)  ZnSO<sub>4</sub> (aq) + Cu (s);","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của Zn(s) bằng 210 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng trên là phản ứng tỏa nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng tạo thành 3,84 g Cu là 12,6 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Trong quá trình phản ứng, nhiệt độ của hỗn hợp tăng lên","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Enthalpy tạo thành chuẩn của Zn(s) bằng 0.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy của phản ứng tạo thành 3,84g Cu là <br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q12","number":12,"part":2,"type":"true_false","text":"Cho sơ đồ sau:","images":[],"options":[{"id":"a","letter":"A","text":"Phương trình nhiệt hoá học của phản ứng là: 2CH<sub>3</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 4H<sub>2</sub>O(l)","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt lượng toả ra của phản ứng là 1450 kJ","isCorrect":true},{"id":"c","letter":"C","text":"Công thức tính biến thiên enthalpy của phản ứng dựa vào enthalpy tạo thành là:","isCorrect":false},{"id":"d","letter":"D","text":"Sau phản ứng, sản phẩm có mức năng lượng cao hơn chất ban đầu","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Thiếu biến thiên enthalpy của phản ứng.<br/>b. Đúng.<br/>c. Sai. Sản phẩm trừ chất đầu.<br/>d. Sai. Sản phẩm có mức năng lượng nhỏ hơn chất đầu","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q13","number":13,"part":2,"type":"true_false","text":"Cho hai phản ứng cùng xảy ra ở điều kiện chuẩn:","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của NO là","isCorrect":true},{"id":"b","letter":"B","text":"Enthalpy tạo thành chuẩn của NO<sub>2</sub> là","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol N<sub>2</sub> với 1 mol O<sub>2</sub> tạo thành 2 mol NO là","isCorrect":false},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol khí NO với 0,5 mol khí  tạo thành 1 mol khí NO<sub>2</sub> là","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đúng.<br/>b. Sai vì phản ứng (2) không phải tạo thành từ các đơn chất.<br/>c. Sai vì biến thiên enthalpy chuẩn của phản ứng giữa 1 mol  với 1 mol  tạo thành 2 mol NO là <br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q14","number":14,"part":2,"type":"true_false","text":"Cho phản ứng đốt cháy methane (CH<sub>4</sub>) và acetylene (C<sub>2</sub>H<sub>2</sub>) như sau:<br/>(1) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)<br/>(2) C<sub>2</sub>H<sub>2</sub>(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)","images":[],"options":[{"id":"a","letter":"A","text":"Cả hai phản ứng trên đều là phản ứng tỏa nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Khi đốt cháy cùng một lượng thể tích khí CH<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> thì lượng nhiệt sinh ra do CH<sub>4</sub> nhiều hơn lượng nhiệt sinh ra do C<sub>2</sub>H<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng (1), (2) tính theo nhiệt tạo thành:","isCorrect":true},{"id":"d","letter":"D","text":"Trong thực tế, để hàn, cắt kim loại người ta sử dụng CH<sub>4</sub> mà không dùng C<sub>2</sub>H<sub>2</sub>","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. C<sub>2</sub>H<sub>2</sub> cháy tỏa nhiều nhiệt hơn CH<sub>4</sub>.<br/>c. Đúng.<br/>d. Sai. Người ta dùng C<sub>2</sub>H<sub>2</sub> vì nhiệt lượng tỏa ra nhiều hơn CH<sub>4</sub>","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q15","number":15,"part":2,"type":"true_false","text":"Cho phản ứng quang hợp sau: 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l) → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) + 6nO<sub>2</sub>(g)","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng quang hợp là phản ứng thu năng lượng dưới dạng ánh sáng","isCorrect":true},{"id":"b","letter":"B","text":"180g glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) tạo thành cần phải cung cấp 2804,7 kJ nhiệt lượng dưới dạng ánh sáng cho phan ứng quang hợp","isCorrect":true},{"id":"c","letter":"C","text":"Năng lượng từ Mặt Trời được sử dụng trong quá trình quang hợp và được lưu trữ trong các liên kết của các phân tử glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s)","isCorrect":true},{"id":"d","letter":"D","text":"Cho nhiệt tạo thành chuẩn của CO<sub>2</sub>(g) là -393,5 kJ/mol; H<sub>2</sub>O(l) là -285,8 kJ/mol thì enthalpy tạo thành chuẩn của glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) là -1271,1 kJ mol<sup>-1</sup>","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng. <br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q16","number":16,"part":2,"type":"true_false","text":"Propene là nguyên liệu cho sản xuất nhựa polypropylene (PP). PP được sử dụng để sản xuất các sản phẩm ống, màng, dây cách điện, kéo sợi, đồ gia dụng và các sản phẩm tạo hình khác.<br/>Phản ứng tạo thành propene từ propyne: CH<sub>3</sub>-C≡CH(g) + H<sub>2</sub>(g)  CH<sub>3</sub>-CH=CH<sub>2</sub>(g) (*)<br/>Cho năng lượng liên kết đo ở điều kiện chuẩn của một số liên kết như sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>H – H</td><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C – C</td><td class='border border-slate-300 p-1.5'>C = C</td><td class='border border-slate-300 p-1.5'>C ≡ C</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>432</td><td class='border border-slate-300 p-1.5'>413</td><td class='border border-slate-300 p-1.5'>347</td><td class='border border-slate-300 p-1.5'>614</td><td class='border border-slate-300 p-1.5'>839</td></tr></table>","images":[],"options":[{"id":"a","letter":"A","text":"Trong hợp chất CH<sub>3</sub>-CCH có 4 liên kết C-H, 2 liên kết C-C, và 1 liên kết CC","isCorrect":false},{"id":"b","letter":"B","text":"Trong hợp chất CH<sub>3</sub>-CH=CH<sub>2</sub> có 5 liên kết C-H, 1 liên kết C-C, và 1 liên kết C=C","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng (*) là –184 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng (*) là phản ứng tỏa nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Có 1 liên kết C-C.<br/>b. Sai. Có 6 liên kết C-H.<br/>c. Sai. CH<sub>3</sub>-CCH(g) + H<sub>2</sub>(g) CH<sub>3</sub>-CH=CH<sub>2</sub>(g)<br/> = E<sub>b</sub>(CC) + E<sub>b</sub>(C-C) + 4E<sub>b</sub>(C-H) + E<sub>b</sub>(H-H) - E<sub>b</sub>(C=C) - E<sub>b</sub>(C-C) - 6E<sub>b</sub>(C-H)<br/>            = 839 + 347+ 4x413 + 432-614-347-6x413 = -169 kJ.<br/>d. Đúng","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q17","number":17,"part":2,"type":"true_false","text":"Cho hai phản ứng sau:<br/>N<sub>2</sub>(g)  +  3H<sub>2</sub>(g)  2NH<sub>3</sub>(g)(1)<br/>(2)<br/>Biết nhiệt tạo thành chuẩn của NH<sub>3</sub> bằng -46 kJ/mol","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng (1) là phản ứng tỏa nhiệt, phản ứng (2) là phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Biến thiên enthalpy của phản ứng (1) gấp 2 lần biến thiên enthalpy của phản ứng (2)","isCorrect":true},{"id":"c","letter":"C","text":"Phản ứng (1) thuận lợi về mặt năng lượng hơn so với phản ứng (2)","isCorrect":true},{"id":"d","letter":"D","text":"Khi tổng hợp từ 1 tấn NH<sub>3</sub>(g) thì nhiệt tỏa ra từ cả hai phản ứng là như nhau","isCorrect":true}],"explanation":"Đáp án: <br/>∆H(1) = 2.(-46) – 1.0 – 3.0 = -92 kJ<br/>∆H(2) = (-46) – .0 – .0 = -46 kJ<br/>Phản ứng toả nhiệt và ∆H(1) = 2.∆H(2)<br/>Khi tổng hợp 1 tấn NH<sub>3</sub> thì nhiệt lượng toả ra = <br/>Tính theo 2 phương trình trên thì  đều ra kết quả giống nhau.<br/>a. Sai.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q18","number":18,"part":2,"type":"true_false","text":"Biến thiên enthalpy chuẩn quá trình “ H<sub>2</sub>O(s) → H<sub>2</sub>O(l)” là 6,020kJ","images":[],"options":[{"id":"a","letter":"A","text":"Quá trình tan chảy của nước đá là quá trình tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Khi cho viên nước đá vào cốc nước lỏng ấm, viên đá lại tan chảy dần vì nó lấy nhiệt từ nước lỏng","isCorrect":true},{"id":"c","letter":"C","text":"Cốc nước lỏng bị lạnh dần trong quá trình viên nước đá tan chảy do sự mất nhiệt làm cho nước lỏng lạnh đi","isCorrect":true},{"id":"d","letter":"D","text":"Biết rằng để làm cho nhiệt độ của 1 mol nước lỏng thay đổi 1°C cần một nhiệt lượng là 75,4J. Giả sử mỗi viên nước đá tương ứng với 1 mol nước, thì cần tối thiểu 6 viên nước đá tan chảy để có thể làm lạnh 500 gam nước lỏng ở 20°C xuống 0°C","isCorrect":false}],"explanation":"Đáp án:<br/>a. Sai. Quá trình tan chảy của nước đá là quá trình thu nhiệt vì có biến thiên enthalpy dương.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Nhiệt lượng mà 500 gam nước lỏng từ ở 20°C xuống 0°C  tỏa ra là:<br/>= 41,8889(kJ)<br/>Mỗi viên đá tan chảy hấp thụ một nhiệt lượng là 6,020 kJ <br/>⇒ Số viên nước đá tối thiểu cần là  viên","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q19","number":19,"part":2,"type":"true_false","text":"Ở điều kiện chuẩn, 2 mol nhôm tác dụng vừa đủ với khí chlorine tạo muối aluminium chloride và giải phóng một lượng nhiệt 1390,81 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Phương trình nhiệt của phản ứng trên: 2Al(s) + 3Cl<sub>2</sub>(g) → 2AlCl<sub>3</sub>(s); = 1390,81 kJ","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là 1390,81 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"Lượng nhiệt được giải phóng khi 10 gam AlCl<sub>3</sub> được tạo thành là 52,2 kJ","isCorrect":true},{"id":"d","letter":"D","text":"Để tạo ra được 1,0 kJ nhiệt cần 0,043 gam Al phản ứng với khí chlorine","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. 2Al(s) + 3Cl<sub>2</sub>(g) → 2AlCl<sub>3</sub>(s); = -1390,81 kJ.<br/>b. Sai.  Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là -1390,81 kJ/mol.<br/>c. Đúng.<br/> <br/> Cứ 2 mol Al phản ứng tạo thành 2 mol AlCl<sub>3</sub> thì giải phóng nhiệt lượng là 1390,81 kJ<br/>                                                       0,075 mol ---------------------------- x = <br/>d. Sai.<br/>Cứ 2 mol Al phản ứng thì giải phóng nhiệt lượng là 1390,81 kJ<br/>         x = ← 1 kJ                         <br/>             ⇒ m<sub>Al</sub> = 0,0388 gam","explanationImages":[],"points":1,"level":"VDC"}],"part3":[{"id":"b17_p3_p3_q1","number":1,"part":3,"type":"short_answer","text":"Cho các quá trình sau:<br/>(1) Nung đá vôi ở nhiệt độ cao.<br/>(2) Nước hóa rắn.<br/>(3) Hòa tan muối ăn vào nước thấy cốc nước trở nên mát.<br/>(4) Luộc chín quả trứng.<br/>Liệt kê các phản ứng thu nhiệt theo số thứ tự tăng dần (ví dụ: 123, 24,...)","images":[],"correctAnswer":"134","explanation":"Đáp án: 134","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q2","number":2,"part":3,"type":"short_answer","text":"Các quá trình sau:<br/>(a) Đun nước sôi.<br/>(b) Sự tiêu hóa thức ăn trong dạ dày.<br/>(c) Quá trình chạy của con người.<br/>(d) Đốt than sưởi ấm.<br/>(e) Thả viên vitamin C sủi vào nước.<br/>(g) Sulfuric acid đặc khi hòa vào nước.<br/>Trong các quá trình trên, có bao nhiêu quá trình tỏa nhiệt?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q3","number":3,"part":3,"type":"short_answer","text":"Dựa vào phương trình nhiệt hóa học của các phản ứng sau :<br/>(1) CS<sub>2</sub>(l)  + 3O<sub>2</sub>(g) CO<sub>2</sub>(g)   +   2 SO<sub>2</sub>(g)        = –1110,21 kJ<br/>(2) CO<sub>2</sub>(g)  CO(g) +  O<sub>2</sub>(g)        = +280,00 kJ<br/>(3) 2Na(s) +2H<sub>2</sub>O(l) 2NaOH(aq) + H<sub>2</sub>(g) = –367,50 kJ<br/>(4) ZnSO<sub>4</sub>(s)  ZnO(s) +  SO<sub>2</sub>(g)                         = +235,21 kJ<br/>(5) 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) 2SO<sub>3</sub>(g)      = –197kJ<br/>Liệt kê các phản ứng thu nhiệt theo số thứ tự tăng dần (ví dụ: 123, 25,...)","images":[],"correctAnswer":"24","explanation":"Đáp án: 24","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q4","number":4,"part":3,"type":"short_answer","text":"Phân tử hemoglobin(Hb) trong máu nhận O<sub>2</sub> ở phổi để chuyển thành HbO<sub>2</sub>. Chất này theo máu tới các bộ phận cơ thể, tại đó HbO<sub>2</sub> lại chuyển thành Hb và O<sub>2</sub>( để cung cấp O<sub>2</sub> cho các hoạt động sinh hóa cần thiết trong cơ thể). Nếu trong không khí có lẫn carbon monoxide(CO), cơ thể nhanh chóng bị ngộ độc. Cho các số liệu thực nghiệm sau:<br/>Hb + O<sub>2</sub> → HbO<sub>2</sub>                      = -33,05kJ       (1)<br/>Hb + CO → HbCO                   = -47,28kJ       (2)<br/>HbO<sub>2</sub> + CO → HbCO + O<sub>2</sub>      = -14,23kJ       (3)<br/>HbCO + O<sub>2</sub> → HbO<sub>2</sub> + CO      = 14,23 kJ       (4)<br/>Liệt kê các phản ứng tỏa nhiệt theo số thứ tự tăng dần (ví dụ: 134, 24,...)","images":[],"correctAnswer":"123","explanation":"Đáp án: 123","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q5","number":5,"part":3,"type":"short_answer","text":"Cho các sau đây: C(graphite, s); CO(g); Br<sub>2</sub>(l); Na(s); SO<sub>2</sub>(g) Hg(l). Có bao nhiêu chất trong dãy chất trên có nhiệt tạo thành chuẩn bằng 0?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q6","number":6,"part":3,"type":"short_answer","text":"Cho các phương trình nhiệt hoá học:<br/>(1) CaCO<sub>3</sub>(s)  CaO(s) + CO<sub>2</sub>(g)<br/>(2) C<sub>2</sub>H<sub>4</sub>(g)  +  H<sub>2</sub>(g)  C<sub>2</sub>H<sub>6</sub>(g)<br/>(3) Fe<sub>2</sub>O<sub>3</sub>(s)  +  2Al(s) Al<sub>2</sub>O<sub>3</sub>(s)  +  2Fe(s)<br/>(4)<br/>(5) C(graphite, s) + O<sub>2</sub>(g)  CO<sub>2</sub>(g)<br/>Liệt kê các phương trình có enthalpy chuẩn của phản ứng bằng với enthalpy tạo thành chuẩn của chất sản phẩm theo số thứ tự tăng dần (ví dụ: 1245, 35,...)","images":[],"correctAnswer":"5","explanation":"Đáp án: 5","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q7","number":7,"part":3,"type":"short_answer","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CO<sub>2</sub>(g)  CO(g) + O<sub>2</sub>(g) = +280 kJ<br/>Giá trị của phản ứng: 2CO<sub>2</sub>(g)  2CO(g) + O<sub>2</sub>(g) là bao nhiêu kJ?","images":[],"correctAnswer":"560","explanation":"Đáp án: 560.<br/>= 280 .2 = 560 kJ","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q8","number":8,"part":3,"type":"short_answer","text":"Quá trinh hoà tan calcium chloride trong nước:<br/>CaCl<sub>2</sub>(s)  Ca<sup>2+</sup>(ag) + 2Cl<sup>-</sup> (ag) = ?<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>CaCl 2</td><td class='border border-slate-300 p-1.5'>Ca 2+</td><td class='border border-slate-300 p-1.5'>Cl -</td></tr><tr><td class='border border-slate-300 p-1.5'> (kJ/mol)</td><td class='border border-slate-300 p-1.5'>-795,0</td><td class='border border-slate-300 p-1.5'>-542,83</td><td class='border border-slate-300 p-1.5'>-167,16</td></tr></table><br/>Tính biến thiên enthalpy chuẩn của quá trình theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"-82","explanation":"Đáp án: -82.<br/>Enthalpy của quá trình:  =  -542,83 + 2.(-167,16) – (-795,0) = -82,15 kJ","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q9","number":9,"part":3,"type":"short_answer","text":"Biết rằng ở điều kiện chuẩn, 1 mol ethanol cháy tỏa ra một nhiệt lượng là kJ. Nếu đốt cháy hoàn toàn 15,11 gam ethanol, năng lượng được giải phóng ra dưới dạng nhiệt bởi phản ứng là  kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"450","explanation":"Đáp án: 450","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q10","number":10,"part":3,"type":"short_answer","text":"Cho phương trình phản ứng sau: 2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l) = -572 kJ<br/>Khi cho 2 g khí H<sub>2</sub> tác dụng hoàn toàn với 32 g khí O<sub>2</sub> thì phản ứng tỏa ra bao nhiêu kJ?","images":[],"correctAnswer":"-286","explanation":"Đáp án: -286.<br/> => H<sub>2</sub> phản ứng hết, O<sub>2</sub> còn dư.<br/>Theo phương trình ta có cứ 2 mol H<sub>2</sub> phản ứng tỏa ra nhiệt lượng 572 kJ<br/>⇒ 1 mol H<sub>2</sub> phản ứng tỏa ra nhiệt lượng =  = 286 kJ","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q11","number":11,"part":3,"type":"short_answer","text":"Cho enthalpy tạo thành chuẩn của một số chất như sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>C 6 H 6 (l)</td><td class='border border-slate-300 p-1.5'>C 3 H 8 (g)</td><td class='border border-slate-300 p-1.5'>CO 2 (g)</td><td class='border border-slate-300 p-1.5'>H 2 O(l)</td></tr><tr><td class='border border-slate-300 p-1.5'>(kJ/mol)</td><td class='border border-slate-300 p-1.5'>+49,00</td><td class='border border-slate-300 p-1.5'>-105,00</td><td class='border border-slate-300 p-1.5'>-393,50</td><td class='border border-slate-300 p-1.5'>-285,84</td></tr></table><br/>Lượng nhiệt sinh ra khi đốt cháy hoàn toàn 1,0 g propane C<sub>3</sub>H<sub>8</sub>(g) gấp k lần so với lượng nhiệt sinh ra khi đốt cháy hoàn toàn 1,0 g benzene C<sub>6</sub>H<sub>6</sub>(l). Giá trị của k là bao nhiêu? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"1,2","explanation":"Đáp án: 1,2.<br/>Phản ứng: C<sub>6</sub>H<sub>6</sub>(l) +  O<sub>2</sub>(g) 6CO<sub>2</sub>(g) + 3H<sub>2</sub>O (g)<br/> = 6  (-393,50) + 3  (-241,82) - 49 = -3037,46 kJ<br/>Phản ứng: C<sub>3</sub>H<sub>8</sub>(g) + 5O<sub>2</sub>(g)  3CO<sub>2</sub>(g) + 4H<sub>2</sub>O (g)<br/> = 3  (-393,50) + 4  (- 241,82) - 105 = -2042,78 kJ<br/>Số mol propane =   == -46,42 kJ<br/>Số mol benzene =   = = -38,94 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q12","number":12,"part":3,"type":"short_answer","text":"Cho các phương trình nhiệt hóa học sau:<br/>(1) C(graphite) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)        (1) = -393,5 kJ<br/>(2) C(graphite) → C(kim cương)           (2) = 2,87 kJ<br/>(3) C(kim cương) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)     (3) = ? kJ<br/>Hãy tính của phản ứng (3) theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"396","explanation":"Đáp án: 396.<br/>Ta có: (1) – (2) = (3) ⇒  (3) =  (1) -  (2) = -393,5 – 2,87 = -396,37 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q13","number":13,"part":3,"type":"short_answer","text":"Phosgene là chất khí không màu, mùi cỏ mục, dễ hoá lỏng; khối lượng riêng 1,420 g/cm<sup>3</sup>(ở 0 °C); t<sub>s</sub> = 8,2 °C. Phosgene ít tan trong nước; dễ tan trong các dung môi hữu cơ, bị thuỷ phân chậm bằng hơi nước; không cháy; là sản phẩm công nghiệp quan trọng; dùng trong tổng hợp hữu cơ để sản xuất sản phầm nhuộm, chất diệt cỏ, polyurethane,... Phosgene là một chất độc. Ở nồng độ 0,005 mg/L đã nguy hiểm đối với người; trong khoảng 0,1 -0,3 mg/L, gây tử vong sau khoảng 15 phút.<br/>Phosgene được điều chế bằng cách cho hỗn hợp CO và Cl<sub>2</sub> đi qua than hoạt tính. Biết: E<sub>b</sub>(Cl<sup>-</sup>Cl) = 243 kJ/mol; E<sub>b</sub>(C-Cl)= 339 kJ/mol; E<sub>b</sub>(C=O) = 745 kJ/mol; E<sub>b</sub>(C≡O) = 1075 kJ/mol.<br/>Hãy tính biến thiên enthalpy của phản ứng tạo thành00 phosgene từ CO và Cl<sub>2</sub>","images":[],"correctAnswer":"-105","explanation":"Đáp án: -105.<br/>Phản ứng hoá học:  CO(g) + Cl<sub>2</sub>(g)  COCl<sub>2</sub>(g) <br/>                         (Phosgene)<br/>⇒ =   = 1075 + 243 - 2x339 - 745 = -105 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q14","number":14,"part":3,"type":"short_answer","text":"Cho phản ứng phân huỷ hydrazine: N<sub>2</sub>H<sub>4</sub>(g)  N<sub>2</sub>(g) + 2H<sub>2</sub>(g). Tính theo năng lượng liên kết của phản ứng trên theo kJ. Biết: E<sub>b</sub>(N-N) = 160 kJ/mol; E<sub>b</sub>(N-H) = 391 kJ/mol; E<sub>b</sub>(N≡N) = 945 kJ/mol, E<sub>b</sub>(H-H) = 432 kJ/mol","images":[],"correctAnswer":"-105","explanation":"Đáp án: -105.<br/> = E<sub>b</sub>(N-N) + 4.E<sub>b</sub>(N-H) - E<sub>b</sub>(N=N) – 2.E<sub>b</sub>(H-H) = 160 + 4.391 – 945 - 2.432 = -85 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q15","number":15,"part":3,"type":"short_answer","text":"Tiến hành quá trình ozone hoá 100 g oxygen theo phản ứng sau:<br/>3O<sub>2</sub>(g) (oxygen)  2O<sub>3</sub>(g) (ozone)<br/>Hỗn hợp thu được có chứa 24% ozone về khối lượng, tiêu tốn 71,2 kJ. Nhiệt tạo thành  của ozone (kJ/mol) có giá trị là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"142","explanation":"Đáp án: 142.<br/>Số mol của O<sub>3</sub> = ⇒  (kJ)<br/> =  (kJ)<br/>=>  = 142,4 (kJ/mol)","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q16","number":16,"part":3,"type":"short_answer","text":"Methane là thành phần chính của khí thiên nhiên. Xét phản ứng đốt cháy methane:<br/>CH<sub>4</sub> (g) + 2O<sub>2</sub> (g)  CO<sub>2</sub> (g) + 2H<sub>2</sub>O (l)<br/>Biết nhiệt tạo thành chuẩn của CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tương ứng là -393,5 kJ/mol và -285,8 kJ/mol. Hãy tính nhiệt tạo thành chuẩn (kJ/mol) của khí methane. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"-75","explanation":"Đáp án: -75.<br/>Ta có:  = (CO<sub>2</sub>) + 2(H<sub>2</sub>O) - (CH<sub>4</sub>) - 2(O<sub>2</sub>)<br/>- 890,3 = (-393,5) + 2(-285,8) - (CH<sub>4</sub>)   <br/> (CH<sub>4</sub>) = 890,3 – 393,5 + 2(-285,8) = - 74,8 kJ/mol","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q17","number":17,"part":3,"type":"short_answer","text":"Nhiệt tỏa ra khi đốt cháy 1 gam một mẫu than là 23,0 kJ. Giả thiết rằng toàn bộ lượng nhiệt của quá trình đốt than tỏa ra đều dùng để làm nóng nước, không có sự thất thoát nhiệt, hãy tính khối lượng than (gam) cần phải đốt để làm nóng 500 gam nước từ  tới  Biết để làm nóng 1 mol nước thêm  cần một nhiệt lượng là 75,4 J. (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"6,4","explanation":"Đáp án: 6,4.<br/>Lượng nhiệt cần dùng để đun nóng 500 gam nước từ lên  là<br/>Vậy lượng than đá cần dùng là:","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q18","number":18,"part":3,"type":"short_answer","text":"Ở điều kiện chuẩn, cần phải đốt cháy hoàn toàn bao nhiêu gam  để cung cấp nhiệt cho phản ứng tạo 1 mol  bằng cách nung  Giả thiết hiệu suất các quá trình đều là 100%. Phương trình nhiệt của phản ứng nung vôi và đốt cháy CH<sub>4</sub> như sau:<br/>(1)<br/>(2)<br/>(Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"3,2","explanation":"Đáp án: 3,2.<br/>Ta có phản ứng nung vôi: <br/>Tức là để tạo 1 mol CaO cần cung cấp 178,29 kJphản ứng đốt cháy  cần tỏa ra 178,29 kJ<br/>Mà ta có phản ứng đốt cháy  <br/>Đốt cháy 1 mol  tỏa ra 890,36 kJ<br/>Đốt cháy x mol  tỏa ra 178,29 kJ<br/>khối lượng  cần dùng để đốt cháy là:","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q19","number":19,"part":3,"type":"short_answer","text":"Ở một lò nung vôi công nghiệp, cứ sản xuất được 1000 kg vôi sống cần dùng m kg than đá (chứa 80% carbon) làm nhiên liệu cung cấp nhiệt.<br/>Cho các phản ứng:<br/>Biết hiệu suất hấp thụ ở quá trình phân hủy đá vôi là 66%. Tính giá trị của m theo đơn vị kg. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"184","explanation":"Đáp án: 184.<br/>Để thu được 1000 kg CaO thì nhiệt lượng cần cung cấp (với hiệu suất là 60%) <br/>Ta có:","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q20","number":20,"part":3,"type":"short_answer","text":"Lactic acid hay acid sữa là hợp chất hoá học đóng vai trò quan trọng trong nhiều quá trình sinh hoá, lần đầu tiên được phân tách vào năm 1780 bởi nhà hoá học Thuỵ Điền Carl Wilhelm Scheele. Lactic acid có công thức phân tử C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>, công A thức câu tạo CH<sub>3</sub>-CH(OH)-COOH.<br/>Khi vận động mạnh cơ thề không đủ cung cấp oxygen, thì cơ thề sẽ chuyền hoá glucose thành lactic acid từ các tế bào đề cung cấp năng lượng cho cơ thề (lactic acid tạo thành từ quá trình này sẽ gây mỏi cơ) theo phương trình sau:<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(aq)  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>(aq)  = -150 kJ<br/>Biết rằng cơ thề chỉ cung cấp 98% năng lượng nhờ oxygen, năng lượng còn lại nhờ vào sự chuyền hoá glucose thành lactic acid.<br/>Giả sử một người chạy bộ trong một thời gian tiêu tốn 300 kcal. Khối lượng lactic acid tạo ra từ quá trình chuyền hoá đó là bao nhiêu gam (biết 1 cal = 4,184 J)? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"30","explanation":"Đáp án: 30.<br/>Tính khối lượng lactic acid tạo ra từ quá trình chạy bộ. Năng lượng cùa sự chuyển hoá glucose thành lactic acid trong quá trình chạy bộ chiếm 2%300 kcal = 6 kcal = 6 000 cal  25 104 J = 25,104 kJ.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> ;  =  -150 kJ<br/>0,335 mol           -25,104 kJ<br/>Khối lượng lactic acid được tạo ra trong quá trình chuyển hoá: 0,33590 = 30,1 g","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q21","number":21,"part":3,"type":"short_answer","text":"Một mẫu cồn X (thành phần chính là C<sub>2</sub>H<sub>5</sub>OH) có lẫn methanol (CH<sub>3</sub>OH). Đốt cháy 10g cồn X tỏa ra nhiệt lượng 291,9 kJ. Xác định phần trăm tạp chất methanol trong X biết rằng:<br/>CH<sub>3</sub>OH (l) + O<sub>2</sub> (g)  CO<sub>2</sub> (g)  + 2H<sub>2</sub>O<br/>C<sub>2</sub>H<sub>5</sub>OH (l) + 3O<sub>2</sub> (g)  2CO<sub>2</sub> (g)  + 3H<sub>2</sub>O","images":[],"correctAnswer":"8","explanation":"Đáp án: 8.<br/>Gọi số mol CH<sub>3</sub>OH và C<sub>2</sub>H<sub>5</sub>OH trong 10g X lần lượt là a và b<br/>Ta có:  32a  +  46b = 10          (1)<br/>           716a + 1370b = 291,9  (2)<br/>Giải (1) và (2), ta được: a = 0,025; b = 0,2<br/> Khối lượng CH<sub>3</sub>OH là 32.0,025 = 0,8 (g)<br/> Phần trăm tạp chất methanol trong X","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q22","number":22,"part":3,"type":"short_answer","text":"Một bình gas (khí hóa lỏng) chứa hỗn hợp propane và butane với tỉ lệ mol 1 : 2.<br/>Cho biết các phản ứng:<br/>C<sub>3</sub>H<sub>8</sub> (g) + 5O<sub>2</sub> (g)  3CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l)<br/>C<sub>4</sub>H<sub>10</sub> (g) + O<sub>2</sub> (g) 4CO<sub>2</sub> (g) + 5H<sub>2</sub>O (l)<br/>Trung bình mỗi ngày, một hộ gia đình cần đốt gas để cung cấp 10000 kJ nhiệt (hiệu suất hấp thụ nhiệt là 80%). Sau bao nhiêu ngày hộ gia đình trên sẽ sử dụng hết bình gas loại 12 kg? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"48","explanation":"Đáp án: 48.<br/>Gọi số mol C<sub>3</sub>H<sub>8</sub> và số mol C<sub>4</sub>H<sub>10</sub> là 2a, ta có: 44a  +  58.2a = 12.1000  a = 75 mol<br/>Nhiệt đốt cháy 12 kg gas là Q = 75.2220 + 150.2874 = 597600 (kJ)<br/>Số ngày sử dụng hết bình gas =  (ngày)","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q23","number":23,"part":3,"type":"short_answer","text":"Cho 16,5 gam Zn vào 500 g dung dịch HCl 1M, dung dịch thu được có nhiệt độ tăng thêm 5<sup>o</sup>C. Xác định nhiệt lượng của phản ứng giữa Zn và HCl trong dung dịch theo kJ (giả thuyết không có sự thất thoát nhiệt ra ngoài môi trường, nhiệt dung của dung dịch loãng bằng nhiệt dung của nước (4,2 J/g.K))","images":[],"correctAnswer":"42","explanation":"Đáp án: 42.<br/>Nhiệt lượng của dung dịch nhận là: 500.4,2.5 = 10500 (J) = 10,5 (kJ)<br/>Phản ứng hóa học xảy ra: Zn(s)  +  2HCl(aq)  ZnCl<sub>2</sub>(aq)  +  H<sub>2</sub>(g)<br/>Số mol HCl = 0,5 mol; số mol Zn = 0,254 mol<br/> HCl hết, Zn phản ứng 0,25 mol.<br/>Nhiệt phản ứng là: <sub>r</sub>H =","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q24","number":24,"part":3,"type":"short_answer","text":"Rót 100 mL dung dịch HCl 1M ở 27<sup>o</sup>C vào 100 mL dung dịch NaHCO<sub>3</sub>1M ở 28<sup>o</sup>C. Sau phản ứng, dung dịch thu được có nhiệt độ là bao nhiêu <sup>o</sup>C? (Kết quả làm tròn đến hàng đơn vị).<br/>Biết nhiệt tạo thành của các chất được cho trong bảng sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>HCl (aq)</td><td class='border border-slate-300 p-1.5'>NaHCO 3  (aq)</td><td class='border border-slate-300 p-1.5'>NaCl (aq)</td><td class='border border-slate-300 p-1.5'>H 2 O (l)</td><td class='border border-slate-300 p-1.5'>CO 2  (g)</td></tr><tr><td class='border border-slate-300 p-1.5'> </td><td class='border border-slate-300 p-1.5'>-168</td><td class='border border-slate-300 p-1.5'>-932</td><td class='border border-slate-300 p-1.5'>-407</td><td class='border border-slate-300 p-1.5'>-286</td><td class='border border-slate-300 p-1.5'>-392</td></tr></table>","images":[],"correctAnswer":"26","explanation":"Đáp án: 26.<br/>Phản ứng xảy ra:  HCl(aq)  +  NaHCO<sub>3</sub>(aq)  NaCl (aq)  +  H<sub>2</sub>O(l) + CO<sub>2</sub>(g)<br/>H = (-407) + (-286) + (-392) – (-168) – (-932) = 15 (kJ)<br/> Phản ứng thu nhiệt.<br/>Số mol HCl = số mol NaHCO<sub>3</sub> = 0,1 mol  Q = 0,1.15 = 1,5 (kJ)<br/>Nhiệt độ giảm đi: T = <br/>Nhiệt độ ban đầu khi trộn hai dung dịch: <br/> Nhiệt độ cuối cùng là: 27,5 – 1,8 = 25,7<sup>0</sup>C","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q25","number":25,"part":3,"type":"short_answer","text":"Một người thợ xây trong buổi sáng kéo được 500 kg vật liệu xây dựng lên tầng cao 10m. Để bù vào năng lượng đã tiêu hao, người đó cần uống cốc nước hòa tan m g glucose. Biết nhiệt tạo thành của glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), CO<sub>2</sub> và H<sub>2</sub>O lần lượt là -1271, -393,5 và -285,8 kJ/mol. Giá trị của m là bao nhiêu?","images":[],"correctAnswer":"3,15","explanation":"Đáp án: 3,15.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(l)  +6O<sub>2</sub>(g)    6CO<sub>2</sub>(g)  + 6H<sub>2</sub>O(l)<br/>= 6( CO<sub>2</sub>(g)) + 6( H<sub>2</sub>O(l))  -( C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(l)) - 6 ( O<sub>2</sub>(g))<br/>           = 6.(393,5) + 6(-285,8) – (-1271) – 6.0 = -2804,8 (kJ)<br/>Năng lượng người thợ tiêu hao = m.g.h = 500.9,8.10 = 49 000 (J) = 49 (kJ)<br/>Khối lượng glucose cần nạp = = 3,15 g.<br/>----------HẾT----------","explanationImages":[],"points":0.25,"level":"VDC"}]},"practiceQuestions":{"part1":[{"id":"b17_p1_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Phản ứng tỏa nhiệt là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"giải phóng năng lượng dạng nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"hấp thụ năng lượng dạng nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"lấy nhiệt từ môi trường","isCorrect":false},{"id":"d","letter":"D","text":"làm nhiệt độ của môi trường giảm đi","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Phản ứng thu nhiệt là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"giải phóng năng lượng dạng nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"hấp thụ năng lượng dạng nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"các chất sản phẩm nhận nhiệt từ các chất phản ứng","isCorrect":false},{"id":"d","letter":"D","text":"các chất phản ứng truyền nhiệt cho môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Phản ứng nào trong các phản ứng dưới đây là phản ứng thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"Vôi sống tác dụng với nước","isCorrect":false},{"id":"b","letter":"B","text":"Đốt cháy than củi","isCorrect":false},{"id":"c","letter":"C","text":"Đốt cháy cồn","isCorrect":false},{"id":"d","letter":"D","text":"Nung đá vôi","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Đâu là phản ứng tỏa nhiệt trong các trường hợp sau?","images":[],"options":[{"id":"a","letter":"A","text":"Nước bay hơi","isCorrect":false},{"id":"b","letter":"B","text":"Nước đóng băng","isCorrect":false},{"id":"c","letter":"C","text":"Quá trình quang hợp cây xanh","isCorrect":false},{"id":"d","letter":"D","text":"Pha viên sủi vitamin C vào nước","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Phản ứng trong quá trình hòa tan vitamin C sủi vao nước sau đây ví dụ cho phản ứng gì?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng thủy phân","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng nhiệt phân","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Phản ứng nhiệt nhôm hàn đường ray là ví dụ cho phản ứng nào?","images":[],"options":[{"id":"a","letter":"A","text":"Không là phản ứng oxi khử","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng phân hủy","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Đồ thị nào say đây thể hiện đúng sự thay đổi nhiệt độ khi dung dịch hydrochloric acid được cho vào dung dịch sodium hydroxide tới dư?","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Điều kiện nào sau đây là điều kiện chuẩn?","images":[],"options":[{"id":"a","letter":"A","text":"Áp suất 1 bar và nhiệt độ 25<sup>o</sup>C hay 298K","isCorrect":false},{"id":"b","letter":"B","text":"Áp suất 1 bar và nhiệt độ 298K","isCorrect":false},{"id":"c","letter":"C","text":"Áp suất 1 bar và nhiệt độ 25<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"Áp suất 1 bar và nhiệt độ 25K","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Kí hiệu biến thiên enthalpy chuẩn của phản ứng hóa học là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>r.</sub>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>298</sub>","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Quy ước về dấu của nhiệt phản ứng () nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt có > 0","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt có < 0","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng tỏa nhiệt có < 0","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt có = 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Các phản ứng tỏa nhiệt thường diễn ra","images":[],"options":[{"id":"a","letter":"A","text":"thuận lợi hơn các phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"khó khăn hơn các phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"khó khăn hơn khi càng tỏa ra nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"thuận lợi hơn khi càng tỏa ít nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học là","images":[],"options":[{"id":"a","letter":"A","text":"phương trình phản ứng hóa học xảy ra trong điều kiện cung cấp nhiệt độ","isCorrect":false},{"id":"b","letter":"B","text":"phương trình phản ứng hóa học có kèm theo nhiệt phản ứng","isCorrect":false},{"id":"c","letter":"C","text":"phương trình phản ứng hóa học có kèm theo nhiệt phản ứng và trạng thái của các chất đầu và sản phẩm","isCorrect":false},{"id":"d","letter":"D","text":"phương trình phản ứng hóa học tỏa nhiệt ra môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hoá học nào sau đây ứng với sơ đồ biểu diễn biến thiên enthalpy của phản ứng sau:","images":[],"options":[{"id":"a","letter":"A","text":"CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g) → 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    = -394,10 kJ","isCorrect":false},{"id":"b","letter":"B","text":"CI<sub>2</sub>O (g) + 3F<sub>2</sub>O(g) → 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    = +394,10 kJ","isCorrect":false},{"id":"c","letter":"C","text":"2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    = +394,10 kJ","isCorrect":false},{"id":"d","letter":"D","text":"2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    = -394,10 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây có thể tự xảy ra ở điều kiện thường?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng nhiệt phân Cu(OH)<sub>2</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng giữa H<sub>2</sub> và O<sub>2</sub> trong hỗn hợp khí","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng giữa Zn và dung dịch H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng đốt cháy cồn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây là phản ứng toả nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng nhiệt phân muối KNO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng phân huỷ khí NH<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng oxi hoá glucose trong cơ thể","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng hoà tan NH<sub>4</sub>Cl trong nước","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Nhiệt kèm theo phản ứng trong điều kiện chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false},{"id":"b","letter":"B","text":"biến thiên enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false},{"id":"c","letter":"C","text":"biến thiên enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false},{"id":"d","letter":"D","text":"enthalpy chuẩn (hay nhiệt phản ứng chuẩn) của phản ứng đó, kí hiệu là","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học giữa nitrogen và oxygen như sau:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g) <sub>r</sub>= +180kJ<br/>Kết luận nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Nitrogen và oxygen phản ứng mạnh hơn khi ở nhiệt độ thấp","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng xảy ra thuận lợi ở điều kiện thường","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng hóa học xảy ra có sự hấp thụ nhiệt năng từ môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Cho các phản ứng dưới đây:<br/>(1) CO (g) + O<sub>2</sub> (g) ⟶ CO<sub>2</sub> (g) = − 283 kJ<br/>(2) C (s) + H<sub>2</sub>O (g)  CO (g) + H<sub>2</sub> (g) = + 131,25 kJ<br/>(3) H<sub>2</sub> (g) + F<sub>2</sub> (g) ⟶ 2HF (g) = − 546 kJ<br/>(4) H<sub>2</sub> (g) + Cl<sub>2</sub> (g) ⟶ 2HCl (g) = − 184,62 kJ<br/>Phản ứng xảy ra thuận lợi nhất là","images":[],"options":[{"id":"a","letter":"A","text":"(1)","isCorrect":false},{"id":"b","letter":"B","text":"(2)","isCorrect":false},{"id":"c","letter":"C","text":"(3)","isCorrect":false},{"id":"d","letter":"D","text":"(4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q19","number":19,"part":1,"type":"multiple_choice","text":"Biến thiên enthalpy của một phản ứng được ghi ở sơ đồ dưới đây:<br/>Kết luận nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Năng lượng chất tham gia phản ứng nhỏ hơn năng lượng sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng là a kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q20","number":20,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học của phản ứng:<br/>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l) <sub>r</sub>= -571,68kJ.<br/>Phản ứng trên là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"tỏa nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"không có sự thay đổi năng lượng","isCorrect":false},{"id":"d","letter":"D","text":"có sự hấp thụ nhiệt lượng từ môi trường xung quanh","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q21","number":21,"part":1,"type":"multiple_choice","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CS<sub>2</sub>(l) + 3O<sub>2</sub>(g) CO<sub>2</sub>(g) + 2SO<sub>2</sub>(g) (1)<br/>CO<sub>2</sub>(g) CO(g) + O<sub>2</sub>(g) (2)<br/>Na(s) + 2H<sub>2</sub>O NaOH(aq) + H<sub>2</sub>(g) (3)<br/>ZnSO<sub>4</sub>(s) ZnO(s) + SO<sub>3</sub>(g)  (4)<br/>Cặp phản ứng thu nhiệt là","images":[],"options":[{"id":"a","letter":"A","text":"(1) và (2)","isCorrect":false},{"id":"b","letter":"B","text":"(3) và (4)","isCorrect":false},{"id":"c","letter":"C","text":"(1) và (3)","isCorrect":false},{"id":"d","letter":"D","text":"(2) và (4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q22","number":22,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(1) C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g) = -393,5 kJ.<br/>(2) 2Al(s) +  O<sub>2</sub>(g) → Al<sub>2</sub>O<sub>3</sub>(s) = -1675,7 kJ.<br/>(3) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = -890,36 kJ.<br/>(4) C<sub>2</sub>H<sub>2</sub>(g) +  O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + H<sub>2</sub>O (l) = -1299,58 kJ.<br/>Trong các phản ứng trên, phản ứng nào tỏa nhiều nhiệt nhất?","images":[],"options":[{"id":"a","letter":"A","text":"(1)","isCorrect":false},{"id":"b","letter":"B","text":"(2)","isCorrect":false},{"id":"c","letter":"C","text":"(3)","isCorrect":false},{"id":"d","letter":"D","text":"(4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q23","number":23,"part":1,"type":"multiple_choice","text":"Cho phản ứng hoá học xảy ra ở điều kiện chuẩn sau:<br/>NO<sub>2</sub>(g) (đỏ nâu)  N<sub>2</sub>O<sub>4</sub>(g) (không màu)<br/>Biết NO<sub>2</sub> và N<sub>2</sub>O<sub>4</sub> có  tương ứng là 33,18 kJ/mol và 9,16 kJ/mol. Điều này chứng tỏ phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"toả nhiệt, NO<sub>2</sub> bền vững hơn N<sub>2</sub>O<sub>4</sub>","isCorrect":false},{"id":"b","letter":"B","text":"thu nhiệt, NO<sub>2</sub> bền vững hơn N<sub>2</sub>O<sub>4</sub>","isCorrect":false},{"id":"c","letter":"C","text":"toả nhiệt, N<sub>2</sub>O<sub>4</sub> bền vững hơn NO<sub>2</sub>","isCorrect":false},{"id":"d","letter":"D","text":"thu nhiệt, N<sub>2</sub>O<sub>4</sub> bền vững hơn NO<sub>2</sub>","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q24","number":24,"part":1,"type":"multiple_choice","text":"Nung KNO<sub>3</sub> lên 550<sup>o</sup>C xảy ra phản ứng:<br/>KNO<sub>3</sub>(s)  KNO<sub>2</sub>(s) +<br/>Phản ứng nhiệt phân KNO<sub>3</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"toả nhiệt, có ∆H < 0","isCorrect":false},{"id":"b","letter":"B","text":"thu nhiệt, có ∆H > 0","isCorrect":false},{"id":"c","letter":"C","text":"toả nhiệt, có ∆H > 0","isCorrect":false},{"id":"d","letter":"D","text":"thu nhiệt, có ∆H < 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"NB"},{"id":"b17_p1_p1_q25","number":25,"part":1,"type":"multiple_choice","text":"Nung nóng hai ống nghiệm chứa NaHCO<sub>3</sub> và P, xảy ra các phản ứng sau:<br/>2NaHCO<sub>3</sub>(s)  Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g) (1)<br/>4P(s) + 5O<sub>2</sub>(g)  2P<sub>2</sub>O<sub>5</sub>(s) (2)<br/>Khi ngừng đun nóng, phản ứng (1) dừng lại còn phản ứng (2) tiếp tục xảy ra, chứng tỏ  của ozone (kJ/mol) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"phản ứng (1) toả nhiệt, phản ứng (2) thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"phản ứng (1) thu nhiệt, phản ứng (2) toả nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"cả 2 phản ứng đều toả nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"cả 2 phản ứng đều thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q26","number":26,"part":1,"type":"multiple_choice","text":"Cho các quá trình sau:<br/>(1) H<sub>2</sub>O (lỏng, ở 25<sup>o</sup>C) → H<sub>2</sub>O (hơi, ở 100<sup>o</sup>C).<br/>(2) H<sub>2</sub>O (lỏng, ở 25<sup>o</sup>C) → H<sub>2</sub>O (rắn, ở 0<sup>o</sup>C).<br/>(3) CaCO<sub>3</sub> (Đá vôi)  CaO + CO<sub>2</sub>.<br/>(4) Khí methane (CH<sub>4</sub>) cháy trong oxygen.<br/>Cặp phản ứng tỏa nhiệt là","images":[],"options":[{"id":"a","letter":"A","text":"(1) và (2)","isCorrect":false},{"id":"b","letter":"B","text":"(3) và (4)","isCorrect":false},{"id":"c","letter":"C","text":"(1) và (3)","isCorrect":false},{"id":"d","letter":"D","text":"(2) và (4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q27","number":27,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Các phản ứng phân hủy thường là phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng càng tỏa ra nhiều nhiệt càng dễ tự xảy ra","isCorrect":false},{"id":"c","letter":"C","text":"Các phản ứng oxi hóa chất béo cung cấp nhiệt cho cơ thể","isCorrect":false},{"id":"d","letter":"D","text":"Các phản ứng khi đun nóng đều dễ xảy ra hơn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q28","number":28,"part":1,"type":"multiple_choice","text":"Enthalpy tạo thành của một chất (Δ<sub>f</sub>H) là nhiệt kèm theo phản ứng tạo thành","images":[],"options":[{"id":"a","letter":"A","text":"1 gam chất đó từ các đơn chất bền nhất","isCorrect":false},{"id":"b","letter":"B","text":"1 lít chất đó từ các đơn chất dạng bền nhất","isCorrect":false},{"id":"c","letter":"C","text":"1 mol chất đó từ các đơn chất bền nhất","isCorrect":false},{"id":"d","letter":"D","text":"1 mol chất đó từ các hợp chất bền nhất","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q29","number":29,"part":1,"type":"multiple_choice","text":"Kí hiệu của nhiệt tạo thành chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q30","number":30,"part":1,"type":"multiple_choice","text":"Đơn vị của nhiệt tạo thành chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"kJ","isCorrect":false},{"id":"b","letter":"B","text":"kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"mol/kJ","isCorrect":false},{"id":"d","letter":"D","text":"J","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q31","number":31,"part":1,"type":"multiple_choice","text":"Enthalpy tạo thành chuẩn của một đơn chất bền","images":[],"options":[{"id":"a","letter":"A","text":"là biến thiên enthalpy chuẩn của phản ứng giữa nguyên tố đó với hydrogen","isCorrect":false},{"id":"b","letter":"B","text":"là biến thiên enthalpy chuẩn của phản ứng giữa nguyên tố đó với oxygen","isCorrect":false},{"id":"c","letter":"C","text":"được xác định từ nhiệt độ nóng chảy của nguyên tố đó","isCorrect":false},{"id":"d","letter":"D","text":"bằng 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q32","number":32,"part":1,"type":"multiple_choice","text":"Chất nào sau đây có nhiệt tạo thành chuẩn bằng 0 ?","images":[],"options":[{"id":"a","letter":"A","text":"CO<sub>2</sub>(g)","isCorrect":false},{"id":"b","letter":"B","text":"Na<sub>2</sub>O(g)","isCorrect":false},{"id":"c","letter":"C","text":"O<sub>2</sub>(g)","isCorrect":false},{"id":"d","letter":"D","text":"H<sub>2</sub>O(l)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q33","number":33,"part":1,"type":"multiple_choice","text":"Phương trình hóa học nào dưới đây biểu thị enthalpy tạo thành chuẩn của CO(g)?","images":[],"options":[{"id":"a","letter":"A","text":"2C ((graphite)","isCorrect":false},{"id":"b","letter":"B","text":"C ((graphite) +","isCorrect":false},{"id":"c","letter":"C","text":"C ((graphite)","isCorrect":false},{"id":"d","letter":"D","text":"C ((graphite)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q34","number":34,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Biến thiên enthalpy chuẩn của một phản ứng hóa học là lượng nhiệt kèm theo phản ứng đó ở áp suất 1 bar và 25 <sup>0</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt (tỏa ra hay thu vào) kèm theo một phản ứng được thực hiện ở 1 bar và 25 K là biến thiên enthalpy chuẩn của phản ứng đó","isCorrect":false},{"id":"c","letter":"C","text":"Một số phản ứng khi xảy ra làm môi trường xung quanh lạnh đi là do các phản ứng này thu nhiệt và lấy nhiệt từ môi trường","isCorrect":false},{"id":"d","letter":"D","text":"Một số phản ứng khi xảy ra làm môi trường xung quanh nóng lên là phản ứng tỏa nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q35","number":35,"part":1,"type":"multiple_choice","text":"Ở điều kiện chuẩn, công thức tính biến thiên enthalpy của phản ứng theo nhiệt tạo thành là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q36","number":36,"part":1,"type":"multiple_choice","text":"Cho phản ứng sau : KNO<sub>3</sub>(s)  KNO<sub>2</sub>(s) + O<sub>2</sub>(g) .<br/>Biểu thức đúng tính của phản ứng theo giá trị enthalpy tạo thành chuẩn của các chất là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q37","number":37,"part":1,"type":"multiple_choice","text":"Cho phản ứng nhiệt nhôm sau để hàn gắn đường ray sau : Fe<sub>2</sub>O<sub>3</sub>(s) + 2Al(s) → Al<sub>2</sub>O<sub>3</sub>(s) +2Fe(s)  . Biểu thức đúng tính của phản ứng theo giá trị nhiệt tạo thành chuẩn của các chất là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q38","number":38,"part":1,"type":"multiple_choice","text":"Cho phản ứng: N<sub>2</sub> (g) + 3H<sub>2</sub> (g) ⟶ 2NH<sub>3</sub> (g)<br/>Ở điều kiện chuẩn, cứ 1 mol N<sub>2</sub> phản ứng hết sẽ tỏa ra 91,8 kJ. Enthalpy tạo thành chuẩn () của NH<sub>3</sub> là","images":[],"options":[{"id":"a","letter":"A","text":"− 91,8 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"91,8 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"− 45,9 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"45,9 kJ/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q39","number":39,"part":1,"type":"multiple_choice","text":"Methane là thành phần chính của khí thiên nhiên. Xét phản ứng đốt cháy methane:<br/>CH<sub>4</sub> (g) + 2O<sub>2</sub> (g)  CO<sub>2</sub> (g) + 2H<sub>2</sub>O (l)<br/>Biết nhiệt tạo thành chuẩn của CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tương ứng là –393,5 kJ/mol và –285,8 kJ/mol. Nhiệt tạo thành chuẩn của khí methane là","images":[],"options":[{"id":"a","letter":"A","text":"–74,8 kJ","isCorrect":false},{"id":"b","letter":"B","text":"74,8 kJ","isCorrect":false},{"id":"c","letter":"C","text":"–211,6 kJ","isCorrect":false},{"id":"d","letter":"D","text":"211,6 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q40","number":40,"part":1,"type":"multiple_choice","text":"Ở điều kiện chuẩn, phản ứng nào sau đây có biến thiên enthalpy của phản ứng bằng enthalpy tạo thành của chất sản phẩm?","images":[],"options":[{"id":"a","letter":"A","text":"HCl(aq) + NaOH(aq) → NaCl(aq) + H<sub>2</sub>O","isCorrect":false},{"id":"b","letter":"B","text":"N<sub>2</sub>(l) + 3F<sub>2</sub>(g) → 2NF<sub>3</sub>(g)","isCorrect":false},{"id":"c","letter":"C","text":"H<sub>2</sub>(g) + O<sub>2</sub>(g) → H<sub>2</sub>O<sub>2</sub>(g)","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q41","number":41,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học sau: 2H<sub>2</sub> (g) + O<sub>2</sub> (g) ⟶ 2H<sub>2</sub>O (g)      = − 483,64 kJ<br/>So sánh đúng là","images":[],"options":[{"id":"a","letter":"A","text":"∑ (cđ) > ∑ (sp)","isCorrect":false},{"id":"b","letter":"B","text":"∑ (cđ) = ∑ (sp)","isCorrect":false},{"id":"c","letter":"C","text":"∑ (cđ) < ∑ (sp)","isCorrect":false},{"id":"d","letter":"D","text":"∑ (cđ) ≤ ∑ (sp)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q42","number":42,"part":1,"type":"multiple_choice","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CO<sub>2</sub>(g) → CO(g) + O<sub>2</sub>(g)        = +280 kJ<br/>Giá trị của phản ứng 2CO(g) + O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) là","images":[],"options":[{"id":"a","letter":"A","text":"+140 kJ","isCorrect":false},{"id":"b","letter":"B","text":"1120 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+560 kJ","isCorrect":false},{"id":"d","letter":"D","text":"560 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q43","number":43,"part":1,"type":"multiple_choice","text":"Cho phản ứng: NH<sub>3</sub> (g) + HCl (g) ⟶ NH<sub>4</sub>Cl (s). Biết (NH<sub>4</sub>Cl(s)) = −314,4 kJ/mol; (HCl(g)) = −92,31 kJ/mol;(NH<sub>3</sub>(g)) = −45,9 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng tính là","images":[],"options":[{"id":"a","letter":"A","text":"– 176,19 kJ","isCorrect":false},{"id":"b","letter":"B","text":"– 314,4 kJ","isCorrect":false},{"id":"c","letter":"C","text":"– 452,61 kJ","isCorrect":false},{"id":"d","letter":"D","text":"176,2 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q44","number":44,"part":1,"type":"multiple_choice","text":"Cho phản ứng hóa học sau: 4FeS(s) + 7O<sub>2</sub>(g) → 2Fe<sub>2</sub>O<sub>3</sub>(s) + 4SO<sub>2</sub>(g). Biết nhiệt tạo thành ∆<sub>f</sub>H<sup>0</sup><sub>298</sub> của các chất FeS(s), Fe<sub>2</sub>O<sub>3</sub>(s) và SO<sub>2</sub>(g) lần lượt là –100,0 kJ/mol, –825,5 kJ/mol và –296,8 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là","images":[],"options":[{"id":"a","letter":"A","text":"+3105,6 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–3105,6 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+2438,2 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–2438,2 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q45","number":45,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học: 3H<sub>2</sub>(g) + N<sub>2</sub>(g)  2NH<sub>3</sub>(g)     = -91,80kJ<br/>Lượng nhiệt tỏa ra khi dùng 9 g H<sub>2</sub>(g) để tạo thành NH<sub>3</sub>(g) là","images":[],"options":[{"id":"a","letter":"A","text":"-275,40 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-137,70 kJ","isCorrect":false},{"id":"c","letter":"C","text":"-45,90 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-183,60 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q46","number":46,"part":1,"type":"multiple_choice","text":"Cho phương trình phản ứng sau:<br/>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l) ∆H = -572 kJ<br/>Khi cho 2 g khí H<sub>2</sub> tác dụng hoàn toàn với 32 g khí O<sub>2</sub> thì phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"toả ra nhiệt lượng 286 kJ","isCorrect":false},{"id":"b","letter":"B","text":"thu vào nhiệt lượng 286 kJ","isCorrect":false},{"id":"c","letter":"C","text":"toả ra nhiệt lượng 572 kJ","isCorrect":false},{"id":"d","letter":"D","text":"thu vào nhiệt lượng 572 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q47","number":47,"part":1,"type":"multiple_choice","text":"Cho  (Fe<sub>2</sub>O<sub>3</sub>, s) = − 825,5 kJ/mol. Biết 1 J = 0,239 cal. Enthalpy tạo thành chuẩn theo đơn vị (kcal) của Fe<sub>2</sub>O<sub>3</sub>(s) là","images":[],"options":[{"id":"a","letter":"A","text":"197,2945 kcal/mol","isCorrect":false},{"id":"b","letter":"B","text":"−197,2945 kcal/mol","isCorrect":false},{"id":"c","letter":"C","text":"3454 kcal/mol","isCorrect":false},{"id":"d","letter":"D","text":"− 3454 kcal/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q48","number":48,"part":1,"type":"multiple_choice","text":"Cho phản ứng: Na (s) + Cl<sub>2</sub> (g) ⟶ NaCl (s) có  (NaCl, s) = − 411,1 kJ/mol. Nếu chỉ thu được 0,5 mol NaCl (s) ở điều kiện chuẩn thì lượng nhiệt tỏa ra là","images":[],"options":[{"id":"a","letter":"A","text":"411,1 kJ","isCorrect":false},{"id":"b","letter":"B","text":"25,55 kJ","isCorrect":false},{"id":"c","letter":"C","text":"250,55 kJ","isCorrect":false},{"id":"d","letter":"D","text":"205,55 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q49","number":49,"part":1,"type":"multiple_choice","text":"Để nhiệt phân 1 mol CaCO<sub>3</sub>(s) ở điều kiện chuẩn, thu được CaO(s) và CO<sub>2</sub>(g) cần cung cấp 179,2 kJ. Tính  của phản ứng nhiệt phân 1 kg CaCO<sub>3</sub>","images":[],"options":[{"id":"a","letter":"A","text":"179,2kJ","isCorrect":false},{"id":"b","letter":"B","text":"-179,2kJ","isCorrect":false},{"id":"c","letter":"C","text":"1792kJ","isCorrect":false},{"id":"d","letter":"D","text":"-1792kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q50","number":50,"part":1,"type":"multiple_choice","text":"Cho biết phản ứng tạo thành 2 mol HCl (g) ở điều kiện chuẩn tỏa ra 184,62 kJ:<br/>H<sub>2</sub> (g) + Cl<sub>2</sub> (g)⟶ 2HCl (g) (*)<br/>Cho các phát biểu sau:<br/>(1) Enthalpy tạo thành chuẩn của HCl (g) là −184,62 kJ/mol.<br/>(2) Biến thiên enthalpy chuẩn của phản ứng (*) là − 184,62 kJ.<br/>(3) Enthalpy tạo thành chuẩn của HCl (g) là –92,31 kJ/mol.<br/>(4) Biến thiên enthalpy chuẩn của phản ứng (*) là 184,62 kJ.<br/>Những phát biểu nào dưới đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"(1) và (2)","isCorrect":false},{"id":"b","letter":"B","text":"(2) và (3)","isCorrect":false},{"id":"c","letter":"C","text":"(3) và (4)","isCorrect":false},{"id":"d","letter":"D","text":"(1) và (4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q51","number":51,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học của phản ứng trung hòa sau:<br/>HCl (aq) + NaOH (aq)  NaCl (aq) + H<sub>2</sub>O (l)<br/>Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Cho 1 mol HCl tác dụng với 1 mol NaOH dư tỏa nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"b","letter":"B","text":"Cho HCl dư tác dụng với 1 mol NaOH thu nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"c","letter":"C","text":"Cho 1 mol HCl tác dụng với 1 mol NaOH tỏa nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p1_p1_q52","number":52,"part":1,"type":"multiple_choice","text":"Sự phá vỡ liên kết cần ….. năng lượng, sự hình thành liên kết …... năng lượng. Cụm từ tích hợp điền vào chỗ chấm trên lần lượt là","images":[],"options":[{"id":"a","letter":"A","text":"cung cấp, giải phóng","isCorrect":false},{"id":"b","letter":"B","text":"giải phóng, cung cấp","isCorrect":false},{"id":"c","letter":"C","text":"cung cấp, cung cấp","isCorrect":false},{"id":"d","letter":"D","text":"giải phóng, giải phóng","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q53","number":53,"part":1,"type":"multiple_choice","text":"Biểu thức tính biến thiên enthalpy của một phản ứng hóa học (∆<sub>r</sub>) theo năng lượng liên kết là","images":[],"options":[{"id":"a","letter":"A","text":"∆<sub>r</sub> =","isCorrect":false},{"id":"b","letter":"B","text":"∆<sub>r</sub> =","isCorrect":false},{"id":"c","letter":"C","text":"∆<sub>r</sub> =","isCorrect":false},{"id":"d","letter":"D","text":"∆<sub>r</sub> =","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q54","number":54,"part":1,"type":"multiple_choice","text":"Khí hydrogen và khí oxygen gây nổ theo tỉ lệ mol tương ứng là 2:1 khi xảy ra phản ứng như sau: 2H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2H<sub>2</sub>O(g) . Biểu thức tính  của phản ứng theo năng lượng liên kết là","images":[],"options":[{"id":"a","letter":"A","text":"= E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – 2E<sub>b</sub>(O-H)","isCorrect":false},{"id":"b","letter":"B","text":"= E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – E<sub>b</sub>(O-H)","isCorrect":false},{"id":"c","letter":"C","text":"= 2E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – 2E<sub>b</sub>(O-H)","isCorrect":false},{"id":"d","letter":"D","text":"= 2E<sub>b</sub>(H-H) + E<sub>b</sub>(O=O) – 4E<sub>b</sub>(O-H)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q55","number":55,"part":1,"type":"multiple_choice","text":"Cho phản ứng hóa học sau: N<sub>2</sub>(g) + O<sub>2</sub>(g) → 2NO(g). Cho biết năng lượng liên kết trong các phân tử O<sub>2</sub>, N<sub>2</sub> và NO lần lượt là 494 kJ/mol; 945 kJ/mol và 607 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là","images":[],"options":[{"id":"a","letter":"A","text":"+298 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–298 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+225 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–225 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q56","number":56,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học sau:<br/>H<sub>2</sub> (g) + I<sub>2</sub> (g)  2HI (g)<br/>Phát biểu nào sau đây về sự trao đổi năng lượng của phản ứng trên là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng giải phóng nhiệt lượng 11,3 kJ khi 2 mol HI được tạo thành","isCorrect":false},{"id":"b","letter":"B","text":"Tổng nhiệt phá vỡ liên kết của chất phản ứng lớn hơn nhiệt tỏa ra khi tạo thành sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Năng lượng chứa trong H<sub>2</sub> và I<sub>2</sub> cao hơn trong HI","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng xảy ra với tốc độ chậm","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q57","number":57,"part":1,"type":"multiple_choice","text":"Tính cho phản ứng sau: H<sub>2</sub>(g) + F<sub>2</sub> (g) → HF(g). Biết E<sub>H</sub><sub></sub><sub>H</sub> = 436 kJ.mol<sup></sup><sup>1</sup>, E<sub>F</sub><sub></sub><sub>F</sub> = 159 kJ.mol<sup></sup><sup>1</sup>, E<sub>H</sub><sub></sub><sub>F</sub> = 565  kJ.mol<sup></sup><sup>1</sup>","images":[],"options":[{"id":"a","letter":"A","text":"267,5 kJ","isCorrect":false},{"id":"b","letter":"B","text":"267,5 kJ","isCorrect":false},{"id":"c","letter":"C","text":"30 kJ","isCorrect":false},{"id":"d","letter":"D","text":"30 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q58","number":58,"part":1,"type":"multiple_choice","text":"Phản ứng tổng hợp ammonia: N<sub>2</sub> (g) + 3H<sub>2</sub> (g)  2NH<sub>3</sub> (g)<br/>Biết năng lượng liên kết (kJ/mol) của  và  lần lượt là 946 và 436.<br/>Năng lượng liên kết của  trong ammonia là","images":[],"options":[{"id":"a","letter":"A","text":"391 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"361 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"245 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"490 kJ/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q59","number":59,"part":1,"type":"multiple_choice","text":"Cho phản ứng: 4HCl (g) + O<sub>2</sub> (g)  2Cl<sub>2</sub> (g) + 2H<sub>2</sub>O (g)<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>H-Cl</td><td class='border border-slate-300 p-1.5'>O=O</td><td class='border border-slate-300 p-1.5'>Cl<sup>-</sup>Cl</td><td class='border border-slate-300 p-1.5'>O-H</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>427</td><td class='border border-slate-300 p-1.5'>498</td><td class='border border-slate-300 p-1.5'>243</td><td class='border border-slate-300 p-1.5'>467</td></tr></table><br/>Biến thiên enthalpy chuẩn của phản ứng trên tính theo năng lượng liên kết là bao nhiêu? Phản ứng tỏa nhiệt hay thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"= − 148 kJ, phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"= − 148 kJ, phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"= 215 kJ, phản ứng tỏa nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"= 215 kJ, phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q60","number":60,"part":1,"type":"multiple_choice","text":"Cho phản ứng hydrogen hoá ethylene sau:<br/>H<sub>2</sub>C=CH<sub>2</sub>(g) + H<sub>2</sub>(g)  H<sub>3</sub>C–CH<sub>3</sub>(g)<br/>Biết năng lượng liên kết trong các chất cho trong bảng sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>Phân tử</td><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>Phân tử</td><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td></tr><tr><td class='border border-slate-300 p-1.5'>C = C</td><td class='border border-slate-300 p-1.5'>C 2 H 4</td><td class='border border-slate-300 p-1.5'>612</td><td class='border border-slate-300 p-1.5'>C – C</td><td class='border border-slate-300 p-1.5'>C 2 H 6</td><td class='border border-slate-300 p-1.5'>346</td></tr><tr><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C 2 H 4</td><td class='border border-slate-300 p-1.5'>418</td><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C 2 H 6</td><td class='border border-slate-300 p-1.5'>418</td></tr><tr><td class='border border-slate-300 p-1.5'>H – H</td><td class='border border-slate-300 p-1.5'>H 2</td><td class='border border-slate-300 p-1.5'>436</td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td></tr></table><br/>Biến thiên enthalpy (kJ) của phản ứng có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"134","isCorrect":false},{"id":"b","letter":"B","text":"-134","isCorrect":false},{"id":"c","letter":"C","text":"478","isCorrect":false},{"id":"d","letter":"D","text":"284","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q61","number":61,"part":1,"type":"multiple_choice","text":"Giá trị trung bình của các năng lượng liên kết ở điều kiện chuẩn:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>C-H</td><td class='border border-slate-300 p-1.5'>C-C</td><td class='border border-slate-300 p-1.5'>C=C</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>418</td><td class='border border-slate-300 p-1.5'>346</td><td class='border border-slate-300 p-1.5'>612</td></tr></table><br/>Biến thiên enthalpy của phản ứng C<sub>3</sub>H<sub>8</sub> (g)  CH<sub>4</sub> (g) + C<sub>2</sub>H<sub>4</sub> (g) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"+103 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-103 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+80 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-80 kJ. Đáp án:","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q62","number":62,"part":1,"type":"multiple_choice","text":"Cho phản ứng sau: CHCH(g) + 2H<sub>2</sub>(g) CH<sub>3</sub>-CH<sub>3</sub> (g).<br/>Năng lượng liên kết (kJ/mol) của H – H là 436, của C – C là 347, của C – H là 414 và của CC là 839. Biến thiên enthalpy của phản ứng là","images":[],"options":[{"id":"a","letter":"A","text":"-294 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-292 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+292 kJ","isCorrect":false},{"id":"d","letter":"D","text":"+294 kJ. Đáp án: ∆<sub>r</sub>H = 2E<sub>(C-H)</sub> + E<sub>(C≡C)</sub> + 2E<sub>(H-H)</sub> – 6E<sub>(C-H)</sub> – E<sub>(C-C)</sub> = (2.414) + 839 + (2.436) – (6.414) – 347 = -292 (kJ)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q63","number":63,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(1) C (s) + CO<sub>2</sub> (g)  2CO (g)<br/>(2) C (s) + H<sub>2</sub>O (g)  CO (g) + H<sub>2</sub> (g)<br/>(3) CO (g) + H<sub>2</sub>O (g)  CO<sub>2</sub> (g) + H<sub>2</sub> (g)<br/>Ở 500K, 1 atm, biến thiên enthalpy của phản ứng (3) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"-39,8 kJ","isCorrect":false},{"id":"b","letter":"B","text":"39,8 kJ","isCorrect":false},{"id":"c","letter":"C","text":"-47,00 kJ","isCorrect":false},{"id":"d","letter":"D","text":"106,7 kJ. Đáp án: Phản ứng (3) = (2) – (1) = -39,8 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q64","number":64,"part":1,"type":"multiple_choice","text":"Làm các thí nghiệm tương tự nhau: Cho 0,05 mol mỗi kim loại Mg, Zn, Fe vào 3 bình đựng 100 mL dung dịch CuSO<sub>4</sub> 0,5M. Nhiệt độ tăng lên cao nhất ở mỗi bình lần lượt là . Sự sắp xếp nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"Đáp án: Cả ba kim loại Mg, Zn, Fe đều tác dụng với CuSO<sub>4</sub> với cùng tỉ lệ mol 1 : 1, kim loại càng mạnh thì càng toả nhiều nhiệt. Do Mg > Zn > Fe nên nhiệt độ tăng cao nhất ở bình có Mg, rồi đến Zn, Fe","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q65","number":65,"part":1,"type":"multiple_choice","text":"Tính của phản ứng đốt cháy 1 mol C<sub>2</sub>H<sub>2</sub> (g) biết các sản phẩm thu được đều ở thể khí. Cho enthalpy tạo thành chuẩn của các chất tương ứng là<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>C 2 H 2  (g)</td><td class='border border-slate-300 p-1.5'>CO 2  (g)</td><td class='border border-slate-300 p-1.5'>H 2 O (g)</td></tr><tr><td class='border border-slate-300 p-1.5'> (kJ/mol)</td><td class='border border-slate-300 p-1.5'>+ 227</td><td class='border border-slate-300 p-1.5'>− 393,5</td><td class='border border-slate-300 p-1.5'>− 241,82</td></tr></table>","images":[],"options":[{"id":"a","letter":"A","text":"– 1270,6 kJ","isCorrect":false},{"id":"b","letter":"B","text":"− 1255,82 kJ","isCorrect":false},{"id":"c","letter":"C","text":"– 1218,82 kJ","isCorrect":false},{"id":"d","letter":"D","text":"– 1522,82 kJ. Đáp án:  Dùng công thức tính = −393,5.2 + (−241,82).1 – 227 = 1255,82 kJ Vậy = 0,75.(-283) = -212,25 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p1_p1_q66","number":66,"part":1,"type":"multiple_choice","text":"Phản ứng đốt cháy Ethanol: C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l)<br/>Đốt cháy hoàn toàn 5 g ethanol, nhiệt tỏa ra làm nóng chảy 447 g nước đá ở 0<sup>o</sup>C. Biết 1 g nước đá nóng chảy hấp thụ nhiệt lượng 333,5 J, biến thiên enthalpy của phản ứng đốt cháy ethanol là","images":[],"options":[{"id":"a","letter":"A","text":"-1371 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"-954 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"-149 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"+149 kJ/mol. Đáp án: 447g nước đá nóng chảy cần nhiệt lượng là: Q = 447.333,5 = 149 074,5 J ≈ 149 (kJ). ⇒ Đốt cháy hoàn toàn 5 g ethanol tỏa ra 149 kJ nhiệt lượng. ⇒ Biến thiên enthalpy của phản ứng đốt cháy 1 mol ethanol ~ 46 g ethanol à","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p1_p1_q67","number":67,"part":1,"type":"multiple_choice","text":"Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau: NH<sub>4</sub>NO<sub>3</sub>(s) + H<sub>2</sub>O(l) NH<sub>4</sub>NO<sub>3</sub>(aq)<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Biết nhiệt dung riêng của H<sub>2</sub>O là 4,2 J/g.K. Sau khi muối tan hết, nước trong bình có nhiệt độ là","images":[],"options":[{"id":"a","letter":"A","text":"31,2<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"b","letter":"B","text":"28,1<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"c","letter":"C","text":"21,9<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"18,8<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"Đáp án:  m  =","isCorrect":false},{"id":"d","letter":"D","text":"V  = 1000 g Q = mcT = 1000.4,2. T = 26.1000  T = 6,2 <sup>o</sup>C Sau khi hòa tan nước trong bình có nhiệt độ giảm so với ban đầu  25 – 6,2 = 18,8<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p1_p1_q68","number":68,"part":1,"type":"multiple_choice","text":"Dung dịch glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) 5%, có khối lượng riêng là 1,02 g/mL, phản ứng oxi hóa 1 mol glucose tạo thành CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tỏa ra nhiệt lượng là 2803,0 kJ.<br/>Một người bệnh được truyền một chai nước chứa 500 mL dung dịch glucose 5%. Năng lượng tối đa từ phản ứng oxi hóa hoàn toàn glucose mà bệnh nhân đó có thể nhận được là","images":[],"options":[{"id":"a","letter":"A","text":"+397,09 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-397,09 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+416,02 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-416,02 kJ. Đáp án: Phản ứng tỏa nhiệt nên  Số mol glucose:  Q = 2803,0.0,14167 = 397,1 (kJ)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"level":"VDC"}],"part2":[{"id":"b17_p2_p2_q1","number":1,"part":2,"type":"true_false","text":"Khi các phản ứng hóa học xảy ra thường có sự trao đổi nhiệt với môi trường, làm thay đổi nhiệt độ của môi trường","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Khi than, củi cháy không khí xung quanh ấm hơn do phản ứng tỏa nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Pha viên C sủi vitamin C vào nước, khi viên C sủi tan thấy cốc nước mát hơn là do phản ứng thu nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q2","number":2,"part":2,"type":"true_false","text":"Thực hiện hai thí nghiệm dưới đây:<br/>Thí nghiệm 1: Đặt một nhiệt kế vào trong cốc thủy tinh chứa khoảng 50 ml dung dịch hydrochloric acid (HCl) 1M (hình 14.1). Khi nhiệt độ trong cốc ổn định, ghi nhiệt độ ban đầu. Thêm vào cốc khoảng 1 gam magnesium oxide (MgO) rồi dùng đũa thủy tinh khuấy liên tục.<br/>Thí nghiệm 2: Lặp lại thí nghiệm với bộ dụng cụ và cách tiến hành như trên, nhưng thay dung dịch hydrochloric acid (HCl) 1M bằng khoảng 50 ml dung dịch ethanoic acid (CH<sub>3</sub>COOH) 5% (giấm ăn) và khoảng 5 gam baking soda (sodium hydrogen carbonate, NaHCO<sub>3</sub>)","images":[],"options":[{"id":"a","letter":"A","text":"Hiện tượng thí nghiệm 1: MgO tan trong dung dịch HCl tạo kết tủa trắng","isCorrect":false},{"id":"b","letter":"B","text":"Hiện tượng thí nghiệm 2: Bột baking soda (NaHCO<sub>3</sub>) tan trong dung dịch giấm ăn (CH<sub>3</sub>COOH), có khí không màu, không mùi thoát ra","isCorrect":true},{"id":"c","letter":"C","text":"Trong thí nghiệm 1, nhiệt độ của hỗn hợp phản ứng tăng lên","isCorrect":true},{"id":"d","letter":"D","text":"Trong thí nghiệm 2, nhiệt độ của hỗn hợp phản ứng giảm xuống","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. MgO tan trong HCl không tạo kết tủa.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q3","number":3,"part":2,"type":"true_false","text":"Mỗi phát biểu sau đây là đúng hay sai?","images":[],"options":[{"id":"a","letter":"A","text":"Nung NH<sub>4</sub>Cl(s) tạo ra HCl(g) và NH<sub>3</sub>(g) là phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Cồn cháy trong không khí là phản ứng tỏa nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Phản ứng thủy phân collagen thành gelatin (là một loại protein dễ tiêu hóa) diễn ra khi hầm xương động vật là phản ứng thu nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Phản ứng tạo gỉ sắt là phản ứng thu nhiệt","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Phản ứng thu nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Phản ứng tỏa nhiệt","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q4","number":4,"part":2,"type":"true_false","text":"Biến thiên enthalpy chuẩn là nhiệt lượng tỏa ra hay thu vào của phản ứng ở điều kiện chuẩn","images":[],"options":[{"id":"a","letter":"A","text":"Biến thiên enthalpy của phản ứng kí hiệu là Δ<sub>r</sub>H","isCorrect":true},{"id":"b","letter":"B","text":"Biến thiên enthalpy chuẩn của phản ứng kí hiệu là","isCorrect":false},{"id":"c","letter":"C","text":"Điều kiện chuẩn là điều kiện ứng với áp suất 1 bar, nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường chọn là 0<sup>o</sup>C","isCorrect":false},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn có đơn vị: kJ hoặc kcal (1 J = 0,239 cal)","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. Kí hiệu là .<br/>c. Sai. Nồng độ 1 mol/L.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q5","number":5,"part":2,"type":"true_false","text":"Enthalpy tạo thành hay nhiệt tạo thành (Δ<sub>f</sub>H) của một chất là biến thiên enthalpy của phản ứng tạo thành 1 mol chất đó từ các đơn chất ở trạng thái bền vững, ở một điều kiện chuẩn","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành kí hiệu là","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt tạo thành chuẩn kí hiệu là","isCorrect":true},{"id":"c","letter":"C","text":"Enthalpy tạo thành chuẩn của các đơn chất bền vững nhất đều bằng 0","isCorrect":true},{"id":"d","letter":"D","text":"Nếu  > 0, chất bền hơn về mặt năng lượng so với các đơn chất bền tạo nên nó","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Kí hiệu là .<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Nếu  > 0, chất kém bền hơn về mặt năng lượng so với các đơn chất bền tạo nên nó","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q6","number":6,"part":2,"type":"true_false","text":"Mỗi phát biểu sau đây là đúng hay sai?","images":[],"options":[{"id":"a","letter":"A","text":"Trong phản ứng tỏa nhiệt, dấu của ∆H dương vì năng lượng của hệ chất phản ứng nhỏ hơn năng lượng của hệ chất sản phẩm","isCorrect":false},{"id":"b","letter":"B","text":"Trong phản ứng thu nhiệt, dấu của ∆H âm vì năng lượng của hệ chất phản ứng lớn hơn năng lượng của hệ chất sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Giá trị tuyệt đối của biến thiên enthalpy càng lớn thì nhiệt lượng tỏa ra hay thu vào của phản ứng càng nhiều","isCorrect":true},{"id":"d","letter":"D","text":"Các phản ứng xảy ra ở nhiệt độ phòng thường là phản ứng tỏa nhiệt, các phản ứng thu nhiệt thường xảy ra khi đun nóng","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Trong phản ứng tỏa nhiệt, ∆H < 0.<br/>b. Sai. Trong phản ứng thu nhiệt, dấu của ∆H > 0.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"NB"},{"id":"b17_p2_p2_q7","number":7,"part":2,"type":"true_false","text":"Cho phản ứng sau: S(s) + O<sub>2</sub>(g)  SO<sub>2</sub>(g)  và  (SO<sub>2</sub>, g) = – 296,8 kJ/mol","images":[],"options":[{"id":"a","letter":"A","text":"(SO<sub>2</sub>, g) = –296,8 kJ/mol là lượng nhiệt tỏa ra khi tạo ra 1 mol SO<sub>2</sub> (g) từ đơn chất S (s) và O<sub>2</sub> (g), đây là các đơn chất bền nhất ở điều kiện chuẩn","isCorrect":true},{"id":"b","letter":"B","text":"Ở điều kiện chuẩn,  (O<sub>2</sub>, g) = 0","isCorrect":true},{"id":"c","letter":"C","text":"Ở điều kiện chuẩn,  (S, s)  0","isCorrect":false},{"id":"d","letter":"D","text":"Hợp chất SO<sub>2</sub>(g) kém bền hơn về mặt năng lượng so với các đơn chất bền S (s) và O<sub>2</sub> (g)","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai.  (S, s) = 0.<br/>d. Sai. Vì  (SO<sub>2</sub>, g) < 0, chất này bền hơn các đơn chất tạo nên nó","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q8","number":8,"part":2,"type":"true_false","text":"Cho sơ đồ (a) và (b) biểu diển enthalpy của phản ứng:","images":[],"options":[{"id":"a","letter":"A","text":"Sơ đồ (a) mô tả phản ứng tỏa nhiệt, sơ đồ (b) mô tả phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Trong sơ đồ (a),  (cđ) nhỏ hơn  (sp)","isCorrect":true},{"id":"c","letter":"C","text":"Trong sơ đồ (b),  (cđ) lớn hơn  (sp)","isCorrect":true},{"id":"d","letter":"D","text":"Các phản ứng tỏa nhiệt thường diễn ra thuận lợi hơn phản ứng thu nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. (a): thu nhiệt, (b): tỏa nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q9","number":9,"part":2,"type":"true_false","text":"Cho phương trình nhiệt hóa sau:","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng trên là phản ứng thu nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Ở điều kiện chuẩn, cần phải cung cấp 26,5 kJ nhiệt lượng cho quá trình 1 mol H<sub>2</sub>(g) phản ứng với 1 mol I<sub>2</sub>(s) để thu được 1 mol HI","isCorrect":false},{"id":"c","letter":"C","text":"Nhiệt tạo thành chuẩn của HI(g) lớn hơn 26,5 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"Tổng enthalpy tạo thành của chất tham gia phản ứng trên nhỏ hơn tổng enthalpy của chất sản phẩm","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. Ở điều kiện chuẩn, cần phải cung cấp 26,5 kJ nhiệt lượng cho quá trình 0,5 mol H<sub>2</sub>(g) phản ứng với 0,5 mol I<sub>2</sub>(s) để thu được 1 mol HI.<br/>c. Sai. Nhiệt tạo thành chuẩn của HI(g) bằng 26,5 kJ/mol.<br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q10","number":10,"part":2,"type":"true_false","text":"Sulfur dioxide là một chất có nhiều ứng dụng trong công nghiệp (dùng để sản xuất sulfuric acid, tẩy trắng bột giấy trong công nghiệp giấy, tẩy trắng dung dịch đường trong sản xuất đường tinh luyện,…) và giúp ngăn cản sự phát triển của một số loại vi khuẩn và nấm gây hư hại cho thực phẩm. Ở áp suất 1 bar và nhiệt độ 25 <sup>0</sup>C, phản ứng giữa 1 mol sulfur với oxygen xảy ra theo phương trình:<br/>S(s) + O<sub>2</sub>(g)  SO<sub>2</sub>(g)” và tỏa một lượng nhiệt là 296,9 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của sulfur dioxide bằng –296,9 kJ/mol","isCorrect":true},{"id":"b","letter":"B","text":"Sulfur dioxide vừa có thể là chất khử vừa có thể là chất oxi hóa, tùy thuộc vào phản ứng mà nó tham gia","isCorrect":true},{"id":"c","letter":"C","text":"0,5 mol sulfur tác dụng hết với oxygen giải phóng 148,45 kJ năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn của phản ứng là 296,9 kJ","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Biến thiên enthalpy chuẩn của phản ứng là -196,9kJ","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q11","number":11,"part":2,"type":"true_false","text":"Cho phương trình phản ứng: Zn (s) + CuSO<sub>4</sub> (aq)  ZnSO<sub>4</sub> (aq) + Cu (s);","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của Zn(s) bằng 210 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng trên là phản ứng tỏa nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng tạo thành 3,84 g Cu là 12,6 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Trong quá trình phản ứng, nhiệt độ của hỗn hợp tăng lên","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Enthalpy tạo thành chuẩn của Zn(s) bằng 0.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy của phản ứng tạo thành 3,84g Cu là <br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q12","number":12,"part":2,"type":"true_false","text":"Cho sơ đồ sau:","images":[],"options":[{"id":"a","letter":"A","text":"Phương trình nhiệt hoá học của phản ứng là: 2CH<sub>3</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 4H<sub>2</sub>O(l)","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt lượng toả ra của phản ứng là 1450 kJ","isCorrect":true},{"id":"c","letter":"C","text":"Công thức tính biến thiên enthalpy của phản ứng dựa vào enthalpy tạo thành là:","isCorrect":false},{"id":"d","letter":"D","text":"Sau phản ứng, sản phẩm có mức năng lượng cao hơn chất ban đầu","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Thiếu biến thiên enthalpy của phản ứng.<br/>b. Đúng.<br/>c. Sai. Sản phẩm trừ chất đầu.<br/>d. Sai. Sản phẩm có mức năng lượng nhỏ hơn chất đầu","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q13","number":13,"part":2,"type":"true_false","text":"Cho hai phản ứng cùng xảy ra ở điều kiện chuẩn:","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của NO là","isCorrect":true},{"id":"b","letter":"B","text":"Enthalpy tạo thành chuẩn của NO<sub>2</sub> là","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol N<sub>2</sub> với 1 mol O<sub>2</sub> tạo thành 2 mol NO là","isCorrect":false},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol khí NO với 0,5 mol khí  tạo thành 1 mol khí NO<sub>2</sub> là","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đúng.<br/>b. Sai vì phản ứng (2) không phải tạo thành từ các đơn chất.<br/>c. Sai vì biến thiên enthalpy chuẩn của phản ứng giữa 1 mol  với 1 mol  tạo thành 2 mol NO là <br/>d. Đúng","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q14","number":14,"part":2,"type":"true_false","text":"Cho phản ứng đốt cháy methane (CH<sub>4</sub>) và acetylene (C<sub>2</sub>H<sub>2</sub>) như sau:<br/>(1) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)<br/>(2) C<sub>2</sub>H<sub>2</sub>(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)","images":[],"options":[{"id":"a","letter":"A","text":"Cả hai phản ứng trên đều là phản ứng tỏa nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Khi đốt cháy cùng một lượng thể tích khí CH<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> thì lượng nhiệt sinh ra do CH<sub>4</sub> nhiều hơn lượng nhiệt sinh ra do C<sub>2</sub>H<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng (1), (2) tính theo nhiệt tạo thành:","isCorrect":true},{"id":"d","letter":"D","text":"Trong thực tế, để hàn, cắt kim loại người ta sử dụng CH<sub>4</sub> mà không dùng C<sub>2</sub>H<sub>2</sub>","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. C<sub>2</sub>H<sub>2</sub> cháy tỏa nhiều nhiệt hơn CH<sub>4</sub>.<br/>c. Đúng.<br/>d. Sai. Người ta dùng C<sub>2</sub>H<sub>2</sub> vì nhiệt lượng tỏa ra nhiều hơn CH<sub>4</sub>","explanationImages":[],"points":1,"level":"TH"},{"id":"b17_p2_p2_q15","number":15,"part":2,"type":"true_false","text":"Cho phản ứng quang hợp sau: 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l) → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) + 6nO<sub>2</sub>(g)","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng quang hợp là phản ứng thu năng lượng dưới dạng ánh sáng","isCorrect":true},{"id":"b","letter":"B","text":"180g glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) tạo thành cần phải cung cấp 2804,7 kJ nhiệt lượng dưới dạng ánh sáng cho phan ứng quang hợp","isCorrect":true},{"id":"c","letter":"C","text":"Năng lượng từ Mặt Trời được sử dụng trong quá trình quang hợp và được lưu trữ trong các liên kết của các phân tử glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s)","isCorrect":true},{"id":"d","letter":"D","text":"Cho nhiệt tạo thành chuẩn của CO<sub>2</sub>(g) là -393,5 kJ/mol; H<sub>2</sub>O(l) là -285,8 kJ/mol thì enthalpy tạo thành chuẩn của glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) là -1271,1 kJ mol<sup>-1</sup>","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng. <br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q16","number":16,"part":2,"type":"true_false","text":"Propene là nguyên liệu cho sản xuất nhựa polypropylene (PP). PP được sử dụng để sản xuất các sản phẩm ống, màng, dây cách điện, kéo sợi, đồ gia dụng và các sản phẩm tạo hình khác.<br/>Phản ứng tạo thành propene từ propyne: CH<sub>3</sub>-C≡CH(g) + H<sub>2</sub>(g)  CH<sub>3</sub>-CH=CH<sub>2</sub>(g) (*)<br/>Cho năng lượng liên kết đo ở điều kiện chuẩn của một số liên kết như sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>H – H</td><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C – C</td><td class='border border-slate-300 p-1.5'>C = C</td><td class='border border-slate-300 p-1.5'>C ≡ C</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>432</td><td class='border border-slate-300 p-1.5'>413</td><td class='border border-slate-300 p-1.5'>347</td><td class='border border-slate-300 p-1.5'>614</td><td class='border border-slate-300 p-1.5'>839</td></tr></table>","images":[],"options":[{"id":"a","letter":"A","text":"Trong hợp chất CH<sub>3</sub>-CCH có 4 liên kết C-H, 2 liên kết C-C, và 1 liên kết CC","isCorrect":false},{"id":"b","letter":"B","text":"Trong hợp chất CH<sub>3</sub>-CH=CH<sub>2</sub> có 5 liên kết C-H, 1 liên kết C-C, và 1 liên kết C=C","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng (*) là –184 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng (*) là phản ứng tỏa nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Có 1 liên kết C-C.<br/>b. Sai. Có 6 liên kết C-H.<br/>c. Sai. CH<sub>3</sub>-CCH(g) + H<sub>2</sub>(g) CH<sub>3</sub>-CH=CH<sub>2</sub>(g)<br/> = E<sub>b</sub>(CC) + E<sub>b</sub>(C-C) + 4E<sub>b</sub>(C-H) + E<sub>b</sub>(H-H) - E<sub>b</sub>(C=C) - E<sub>b</sub>(C-C) - 6E<sub>b</sub>(C-H)<br/>            = 839 + 347+ 4x413 + 432-614-347-6x413 = -169 kJ.<br/>d. Đúng","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q17","number":17,"part":2,"type":"true_false","text":"Cho hai phản ứng sau:<br/>N<sub>2</sub>(g)  +  3H<sub>2</sub>(g)  2NH<sub>3</sub>(g)(1)<br/>(2)<br/>Biết nhiệt tạo thành chuẩn của NH<sub>3</sub> bằng -46 kJ/mol","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng (1) là phản ứng tỏa nhiệt, phản ứng (2) là phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Biến thiên enthalpy của phản ứng (1) gấp 2 lần biến thiên enthalpy của phản ứng (2)","isCorrect":true},{"id":"c","letter":"C","text":"Phản ứng (1) thuận lợi về mặt năng lượng hơn so với phản ứng (2)","isCorrect":true},{"id":"d","letter":"D","text":"Khi tổng hợp từ 1 tấn NH<sub>3</sub>(g) thì nhiệt tỏa ra từ cả hai phản ứng là như nhau","isCorrect":true}],"explanation":"Đáp án: <br/>∆H(1) = 2.(-46) – 1.0 – 3.0 = -92 kJ<br/>∆H(2) = (-46) – .0 – .0 = -46 kJ<br/>Phản ứng toả nhiệt và ∆H(1) = 2.∆H(2)<br/>Khi tổng hợp 1 tấn NH<sub>3</sub> thì nhiệt lượng toả ra = <br/>Tính theo 2 phương trình trên thì  đều ra kết quả giống nhau.<br/>a. Sai.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q18","number":18,"part":2,"type":"true_false","text":"Biến thiên enthalpy chuẩn quá trình “ H<sub>2</sub>O(s) → H<sub>2</sub>O(l)” là 6,020kJ","images":[],"options":[{"id":"a","letter":"A","text":"Quá trình tan chảy của nước đá là quá trình tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Khi cho viên nước đá vào cốc nước lỏng ấm, viên đá lại tan chảy dần vì nó lấy nhiệt từ nước lỏng","isCorrect":true},{"id":"c","letter":"C","text":"Cốc nước lỏng bị lạnh dần trong quá trình viên nước đá tan chảy do sự mất nhiệt làm cho nước lỏng lạnh đi","isCorrect":true},{"id":"d","letter":"D","text":"Biết rằng để làm cho nhiệt độ của 1 mol nước lỏng thay đổi 1°C cần một nhiệt lượng là 75,4J. Giả sử mỗi viên nước đá tương ứng với 1 mol nước, thì cần tối thiểu 6 viên nước đá tan chảy để có thể làm lạnh 500 gam nước lỏng ở 20°C xuống 0°C","isCorrect":false}],"explanation":"Đáp án:<br/>a. Sai. Quá trình tan chảy của nước đá là quá trình thu nhiệt vì có biến thiên enthalpy dương.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Nhiệt lượng mà 500 gam nước lỏng từ ở 20°C xuống 0°C  tỏa ra là:<br/>= 41,8889(kJ)<br/>Mỗi viên đá tan chảy hấp thụ một nhiệt lượng là 6,020 kJ <br/>⇒ Số viên nước đá tối thiểu cần là  viên","explanationImages":[],"points":1,"level":"VD"},{"id":"b17_p2_p2_q19","number":19,"part":2,"type":"true_false","text":"Ở điều kiện chuẩn, 2 mol nhôm tác dụng vừa đủ với khí chlorine tạo muối aluminium chloride và giải phóng một lượng nhiệt 1390,81 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Phương trình nhiệt của phản ứng trên: 2Al(s) + 3Cl<sub>2</sub>(g) → 2AlCl<sub>3</sub>(s); = 1390,81 kJ","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là 1390,81 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"Lượng nhiệt được giải phóng khi 10 gam AlCl<sub>3</sub> được tạo thành là 52,2 kJ","isCorrect":true},{"id":"d","letter":"D","text":"Để tạo ra được 1,0 kJ nhiệt cần 0,043 gam Al phản ứng với khí chlorine","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. 2Al(s) + 3Cl<sub>2</sub>(g) → 2AlCl<sub>3</sub>(s); = -1390,81 kJ.<br/>b. Sai.  Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là -1390,81 kJ/mol.<br/>c. Đúng.<br/> <br/> Cứ 2 mol Al phản ứng tạo thành 2 mol AlCl<sub>3</sub> thì giải phóng nhiệt lượng là 1390,81 kJ<br/>                                                       0,075 mol ---------------------------- x = <br/>d. Sai.<br/>Cứ 2 mol Al phản ứng thì giải phóng nhiệt lượng là 1390,81 kJ<br/>         x = ← 1 kJ                         <br/>             ⇒ m<sub>Al</sub> = 0,0388 gam","explanationImages":[],"points":1,"level":"VDC"}],"part3":[{"id":"b17_p3_p3_q1","number":1,"part":3,"type":"short_answer","text":"Cho các quá trình sau:<br/>(1) Nung đá vôi ở nhiệt độ cao.<br/>(2) Nước hóa rắn.<br/>(3) Hòa tan muối ăn vào nước thấy cốc nước trở nên mát.<br/>(4) Luộc chín quả trứng.<br/>Liệt kê các phản ứng thu nhiệt theo số thứ tự tăng dần (ví dụ: 123, 24,...)","images":[],"correctAnswer":"134","explanation":"Đáp án: 134","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q2","number":2,"part":3,"type":"short_answer","text":"Các quá trình sau:<br/>(a) Đun nước sôi.<br/>(b) Sự tiêu hóa thức ăn trong dạ dày.<br/>(c) Quá trình chạy của con người.<br/>(d) Đốt than sưởi ấm.<br/>(e) Thả viên vitamin C sủi vào nước.<br/>(g) Sulfuric acid đặc khi hòa vào nước.<br/>Trong các quá trình trên, có bao nhiêu quá trình tỏa nhiệt?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q3","number":3,"part":3,"type":"short_answer","text":"Dựa vào phương trình nhiệt hóa học của các phản ứng sau :<br/>(1) CS<sub>2</sub>(l)  + 3O<sub>2</sub>(g) CO<sub>2</sub>(g)   +   2 SO<sub>2</sub>(g)        = –1110,21 kJ<br/>(2) CO<sub>2</sub>(g)  CO(g) +  O<sub>2</sub>(g)        = +280,00 kJ<br/>(3) 2Na(s) +2H<sub>2</sub>O(l) 2NaOH(aq) + H<sub>2</sub>(g) = –367,50 kJ<br/>(4) ZnSO<sub>4</sub>(s)  ZnO(s) +  SO<sub>2</sub>(g)                         = +235,21 kJ<br/>(5) 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) 2SO<sub>3</sub>(g)      = –197kJ<br/>Liệt kê các phản ứng thu nhiệt theo số thứ tự tăng dần (ví dụ: 123, 25,...)","images":[],"correctAnswer":"24","explanation":"Đáp án: 24","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q4","number":4,"part":3,"type":"short_answer","text":"Phân tử hemoglobin(Hb) trong máu nhận O<sub>2</sub> ở phổi để chuyển thành HbO<sub>2</sub>. Chất này theo máu tới các bộ phận cơ thể, tại đó HbO<sub>2</sub> lại chuyển thành Hb và O<sub>2</sub>( để cung cấp O<sub>2</sub> cho các hoạt động sinh hóa cần thiết trong cơ thể). Nếu trong không khí có lẫn carbon monoxide(CO), cơ thể nhanh chóng bị ngộ độc. Cho các số liệu thực nghiệm sau:<br/>Hb + O<sub>2</sub> → HbO<sub>2</sub>                      = -33,05kJ       (1)<br/>Hb + CO → HbCO                   = -47,28kJ       (2)<br/>HbO<sub>2</sub> + CO → HbCO + O<sub>2</sub>      = -14,23kJ       (3)<br/>HbCO + O<sub>2</sub> → HbO<sub>2</sub> + CO      = 14,23 kJ       (4)<br/>Liệt kê các phản ứng tỏa nhiệt theo số thứ tự tăng dần (ví dụ: 134, 24,...)","images":[],"correctAnswer":"123","explanation":"Đáp án: 123","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q5","number":5,"part":3,"type":"short_answer","text":"Cho các sau đây: C(graphite, s); CO(g); Br<sub>2</sub>(l); Na(s); SO<sub>2</sub>(g) Hg(l). Có bao nhiêu chất trong dãy chất trên có nhiệt tạo thành chuẩn bằng 0?","images":[],"correctAnswer":"4","explanation":"Đáp án: 4","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q6","number":6,"part":3,"type":"short_answer","text":"Cho các phương trình nhiệt hoá học:<br/>(1) CaCO<sub>3</sub>(s)  CaO(s) + CO<sub>2</sub>(g)<br/>(2) C<sub>2</sub>H<sub>4</sub>(g)  +  H<sub>2</sub>(g)  C<sub>2</sub>H<sub>6</sub>(g)<br/>(3) Fe<sub>2</sub>O<sub>3</sub>(s)  +  2Al(s) Al<sub>2</sub>O<sub>3</sub>(s)  +  2Fe(s)<br/>(4)<br/>(5) C(graphite, s) + O<sub>2</sub>(g)  CO<sub>2</sub>(g)<br/>Liệt kê các phương trình có enthalpy chuẩn của phản ứng bằng với enthalpy tạo thành chuẩn của chất sản phẩm theo số thứ tự tăng dần (ví dụ: 1245, 35,...)","images":[],"correctAnswer":"5","explanation":"Đáp án: 5","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q7","number":7,"part":3,"type":"short_answer","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CO<sub>2</sub>(g)  CO(g) + O<sub>2</sub>(g) = +280 kJ<br/>Giá trị của phản ứng: 2CO<sub>2</sub>(g)  2CO(g) + O<sub>2</sub>(g) là bao nhiêu kJ?","images":[],"correctAnswer":"560","explanation":"Đáp án: 560.<br/>= 280 .2 = 560 kJ","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q8","number":8,"part":3,"type":"short_answer","text":"Quá trinh hoà tan calcium chloride trong nước:<br/>CaCl<sub>2</sub>(s)  Ca<sup>2+</sup>(ag) + 2Cl<sup>-</sup> (ag) = ?<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>CaCl 2</td><td class='border border-slate-300 p-1.5'>Ca 2+</td><td class='border border-slate-300 p-1.5'>Cl -</td></tr><tr><td class='border border-slate-300 p-1.5'> (kJ/mol)</td><td class='border border-slate-300 p-1.5'>-795,0</td><td class='border border-slate-300 p-1.5'>-542,83</td><td class='border border-slate-300 p-1.5'>-167,16</td></tr></table><br/>Tính biến thiên enthalpy chuẩn của quá trình theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"-82","explanation":"Đáp án: -82.<br/>Enthalpy của quá trình:  =  -542,83 + 2.(-167,16) – (-795,0) = -82,15 kJ","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q9","number":9,"part":3,"type":"short_answer","text":"Biết rằng ở điều kiện chuẩn, 1 mol ethanol cháy tỏa ra một nhiệt lượng là kJ. Nếu đốt cháy hoàn toàn 15,11 gam ethanol, năng lượng được giải phóng ra dưới dạng nhiệt bởi phản ứng là  kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"450","explanation":"Đáp án: 450","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q10","number":10,"part":3,"type":"short_answer","text":"Cho phương trình phản ứng sau: 2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(l) = -572 kJ<br/>Khi cho 2 g khí H<sub>2</sub> tác dụng hoàn toàn với 32 g khí O<sub>2</sub> thì phản ứng tỏa ra bao nhiêu kJ?","images":[],"correctAnswer":"-286","explanation":"Đáp án: -286.<br/> => H<sub>2</sub> phản ứng hết, O<sub>2</sub> còn dư.<br/>Theo phương trình ta có cứ 2 mol H<sub>2</sub> phản ứng tỏa ra nhiệt lượng 572 kJ<br/>⇒ 1 mol H<sub>2</sub> phản ứng tỏa ra nhiệt lượng =  = 286 kJ","explanationImages":[],"points":0.25,"level":"TH"},{"id":"b17_p3_p3_q11","number":11,"part":3,"type":"short_answer","text":"Cho enthalpy tạo thành chuẩn của một số chất như sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>C 6 H 6 (l)</td><td class='border border-slate-300 p-1.5'>C 3 H 8 (g)</td><td class='border border-slate-300 p-1.5'>CO 2 (g)</td><td class='border border-slate-300 p-1.5'>H 2 O(l)</td></tr><tr><td class='border border-slate-300 p-1.5'>(kJ/mol)</td><td class='border border-slate-300 p-1.5'>+49,00</td><td class='border border-slate-300 p-1.5'>-105,00</td><td class='border border-slate-300 p-1.5'>-393,50</td><td class='border border-slate-300 p-1.5'>-285,84</td></tr></table><br/>Lượng nhiệt sinh ra khi đốt cháy hoàn toàn 1,0 g propane C<sub>3</sub>H<sub>8</sub>(g) gấp k lần so với lượng nhiệt sinh ra khi đốt cháy hoàn toàn 1,0 g benzene C<sub>6</sub>H<sub>6</sub>(l). Giá trị của k là bao nhiêu? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"1,2","explanation":"Đáp án: 1,2.<br/>Phản ứng: C<sub>6</sub>H<sub>6</sub>(l) +  O<sub>2</sub>(g) 6CO<sub>2</sub>(g) + 3H<sub>2</sub>O (g)<br/> = 6  (-393,50) + 3  (-241,82) - 49 = -3037,46 kJ<br/>Phản ứng: C<sub>3</sub>H<sub>8</sub>(g) + 5O<sub>2</sub>(g)  3CO<sub>2</sub>(g) + 4H<sub>2</sub>O (g)<br/> = 3  (-393,50) + 4  (- 241,82) - 105 = -2042,78 kJ<br/>Số mol propane =   == -46,42 kJ<br/>Số mol benzene =   = = -38,94 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q12","number":12,"part":3,"type":"short_answer","text":"Cho các phương trình nhiệt hóa học sau:<br/>(1) C(graphite) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)        (1) = -393,5 kJ<br/>(2) C(graphite) → C(kim cương)           (2) = 2,87 kJ<br/>(3) C(kim cương) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)     (3) = ? kJ<br/>Hãy tính của phản ứng (3) theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"396","explanation":"Đáp án: 396.<br/>Ta có: (1) – (2) = (3) ⇒  (3) =  (1) -  (2) = -393,5 – 2,87 = -396,37 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q13","number":13,"part":3,"type":"short_answer","text":"Phosgene là chất khí không màu, mùi cỏ mục, dễ hoá lỏng; khối lượng riêng 1,420 g/cm<sup>3</sup>(ở 0 °C); t<sub>s</sub> = 8,2 °C. Phosgene ít tan trong nước; dễ tan trong các dung môi hữu cơ, bị thuỷ phân chậm bằng hơi nước; không cháy; là sản phẩm công nghiệp quan trọng; dùng trong tổng hợp hữu cơ để sản xuất sản phầm nhuộm, chất diệt cỏ, polyurethane,... Phosgene là một chất độc. Ở nồng độ 0,005 mg/L đã nguy hiểm đối với người; trong khoảng 0,1 -0,3 mg/L, gây tử vong sau khoảng 15 phút.<br/>Phosgene được điều chế bằng cách cho hỗn hợp CO và Cl<sub>2</sub> đi qua than hoạt tính. Biết: E<sub>b</sub>(Cl<sup>-</sup>Cl) = 243 kJ/mol; E<sub>b</sub>(C-Cl)= 339 kJ/mol; E<sub>b</sub>(C=O) = 745 kJ/mol; E<sub>b</sub>(C≡O) = 1075 kJ/mol.<br/>Hãy tính biến thiên enthalpy của phản ứng tạo thành00 phosgene từ CO và Cl<sub>2</sub>","images":[],"correctAnswer":"-105","explanation":"Đáp án: -105.<br/>Phản ứng hoá học:  CO(g) + Cl<sub>2</sub>(g)  COCl<sub>2</sub>(g) <br/>                         (Phosgene)<br/>⇒ =   = 1075 + 243 - 2x339 - 745 = -105 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q14","number":14,"part":3,"type":"short_answer","text":"Cho phản ứng phân huỷ hydrazine: N<sub>2</sub>H<sub>4</sub>(g)  N<sub>2</sub>(g) + 2H<sub>2</sub>(g). Tính theo năng lượng liên kết của phản ứng trên theo kJ. Biết: E<sub>b</sub>(N-N) = 160 kJ/mol; E<sub>b</sub>(N-H) = 391 kJ/mol; E<sub>b</sub>(N≡N) = 945 kJ/mol, E<sub>b</sub>(H-H) = 432 kJ/mol","images":[],"correctAnswer":"-105","explanation":"Đáp án: -105.<br/> = E<sub>b</sub>(N-N) + 4.E<sub>b</sub>(N-H) - E<sub>b</sub>(N=N) – 2.E<sub>b</sub>(H-H) = 160 + 4.391 – 945 - 2.432 = -85 kJ","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q15","number":15,"part":3,"type":"short_answer","text":"Tiến hành quá trình ozone hoá 100 g oxygen theo phản ứng sau:<br/>3O<sub>2</sub>(g) (oxygen)  2O<sub>3</sub>(g) (ozone)<br/>Hỗn hợp thu được có chứa 24% ozone về khối lượng, tiêu tốn 71,2 kJ. Nhiệt tạo thành  của ozone (kJ/mol) có giá trị là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"142","explanation":"Đáp án: 142.<br/>Số mol của O<sub>3</sub> = ⇒  (kJ)<br/> =  (kJ)<br/>=>  = 142,4 (kJ/mol)","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q16","number":16,"part":3,"type":"short_answer","text":"Methane là thành phần chính của khí thiên nhiên. Xét phản ứng đốt cháy methane:<br/>CH<sub>4</sub> (g) + 2O<sub>2</sub> (g)  CO<sub>2</sub> (g) + 2H<sub>2</sub>O (l)<br/>Biết nhiệt tạo thành chuẩn của CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tương ứng là -393,5 kJ/mol và -285,8 kJ/mol. Hãy tính nhiệt tạo thành chuẩn (kJ/mol) của khí methane. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"-75","explanation":"Đáp án: -75.<br/>Ta có:  = (CO<sub>2</sub>) + 2(H<sub>2</sub>O) - (CH<sub>4</sub>) - 2(O<sub>2</sub>)<br/>- 890,3 = (-393,5) + 2(-285,8) - (CH<sub>4</sub>)   <br/> (CH<sub>4</sub>) = 890,3 – 393,5 + 2(-285,8) = - 74,8 kJ/mol","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q17","number":17,"part":3,"type":"short_answer","text":"Nhiệt tỏa ra khi đốt cháy 1 gam một mẫu than là 23,0 kJ. Giả thiết rằng toàn bộ lượng nhiệt của quá trình đốt than tỏa ra đều dùng để làm nóng nước, không có sự thất thoát nhiệt, hãy tính khối lượng than (gam) cần phải đốt để làm nóng 500 gam nước từ  tới  Biết để làm nóng 1 mol nước thêm  cần một nhiệt lượng là 75,4 J. (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"6,4","explanation":"Đáp án: 6,4.<br/>Lượng nhiệt cần dùng để đun nóng 500 gam nước từ lên  là<br/>Vậy lượng than đá cần dùng là:","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q18","number":18,"part":3,"type":"short_answer","text":"Ở điều kiện chuẩn, cần phải đốt cháy hoàn toàn bao nhiêu gam  để cung cấp nhiệt cho phản ứng tạo 1 mol  bằng cách nung  Giả thiết hiệu suất các quá trình đều là 100%. Phương trình nhiệt của phản ứng nung vôi và đốt cháy CH<sub>4</sub> như sau:<br/>(1)<br/>(2)<br/>(Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"3,2","explanation":"Đáp án: 3,2.<br/>Ta có phản ứng nung vôi: <br/>Tức là để tạo 1 mol CaO cần cung cấp 178,29 kJphản ứng đốt cháy  cần tỏa ra 178,29 kJ<br/>Mà ta có phản ứng đốt cháy  <br/>Đốt cháy 1 mol  tỏa ra 890,36 kJ<br/>Đốt cháy x mol  tỏa ra 178,29 kJ<br/>khối lượng  cần dùng để đốt cháy là:","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q19","number":19,"part":3,"type":"short_answer","text":"Ở một lò nung vôi công nghiệp, cứ sản xuất được 1000 kg vôi sống cần dùng m kg than đá (chứa 80% carbon) làm nhiên liệu cung cấp nhiệt.<br/>Cho các phản ứng:<br/>Biết hiệu suất hấp thụ ở quá trình phân hủy đá vôi là 66%. Tính giá trị của m theo đơn vị kg. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"184","explanation":"Đáp án: 184.<br/>Để thu được 1000 kg CaO thì nhiệt lượng cần cung cấp (với hiệu suất là 60%) <br/>Ta có:","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q20","number":20,"part":3,"type":"short_answer","text":"Lactic acid hay acid sữa là hợp chất hoá học đóng vai trò quan trọng trong nhiều quá trình sinh hoá, lần đầu tiên được phân tách vào năm 1780 bởi nhà hoá học Thuỵ Điền Carl Wilhelm Scheele. Lactic acid có công thức phân tử C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>, công A thức câu tạo CH<sub>3</sub>-CH(OH)-COOH.<br/>Khi vận động mạnh cơ thề không đủ cung cấp oxygen, thì cơ thề sẽ chuyền hoá glucose thành lactic acid từ các tế bào đề cung cấp năng lượng cho cơ thề (lactic acid tạo thành từ quá trình này sẽ gây mỏi cơ) theo phương trình sau:<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(aq)  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>(aq)  = -150 kJ<br/>Biết rằng cơ thề chỉ cung cấp 98% năng lượng nhờ oxygen, năng lượng còn lại nhờ vào sự chuyền hoá glucose thành lactic acid.<br/>Giả sử một người chạy bộ trong một thời gian tiêu tốn 300 kcal. Khối lượng lactic acid tạo ra từ quá trình chuyền hoá đó là bao nhiêu gam (biết 1 cal = 4,184 J)? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"30","explanation":"Đáp án: 30.<br/>Tính khối lượng lactic acid tạo ra từ quá trình chạy bộ. Năng lượng cùa sự chuyển hoá glucose thành lactic acid trong quá trình chạy bộ chiếm 2%300 kcal = 6 kcal = 6 000 cal  25 104 J = 25,104 kJ.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> ;  =  -150 kJ<br/>0,335 mol           -25,104 kJ<br/>Khối lượng lactic acid được tạo ra trong quá trình chuyển hoá: 0,33590 = 30,1 g","explanationImages":[],"points":0.25,"level":"VD"},{"id":"b17_p3_p3_q21","number":21,"part":3,"type":"short_answer","text":"Một mẫu cồn X (thành phần chính là C<sub>2</sub>H<sub>5</sub>OH) có lẫn methanol (CH<sub>3</sub>OH). Đốt cháy 10g cồn X tỏa ra nhiệt lượng 291,9 kJ. Xác định phần trăm tạp chất methanol trong X biết rằng:<br/>CH<sub>3</sub>OH (l) + O<sub>2</sub> (g)  CO<sub>2</sub> (g)  + 2H<sub>2</sub>O<br/>C<sub>2</sub>H<sub>5</sub>OH (l) + 3O<sub>2</sub> (g)  2CO<sub>2</sub> (g)  + 3H<sub>2</sub>O","images":[],"correctAnswer":"8","explanation":"Đáp án: 8.<br/>Gọi số mol CH<sub>3</sub>OH và C<sub>2</sub>H<sub>5</sub>OH trong 10g X lần lượt là a và b<br/>Ta có:  32a  +  46b = 10          (1)<br/>           716a + 1370b = 291,9  (2)<br/>Giải (1) và (2), ta được: a = 0,025; b = 0,2<br/> Khối lượng CH<sub>3</sub>OH là 32.0,025 = 0,8 (g)<br/> Phần trăm tạp chất methanol trong X","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q22","number":22,"part":3,"type":"short_answer","text":"Một bình gas (khí hóa lỏng) chứa hỗn hợp propane và butane với tỉ lệ mol 1 : 2.<br/>Cho biết các phản ứng:<br/>C<sub>3</sub>H<sub>8</sub> (g) + 5O<sub>2</sub> (g)  3CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l)<br/>C<sub>4</sub>H<sub>10</sub> (g) + O<sub>2</sub> (g) 4CO<sub>2</sub> (g) + 5H<sub>2</sub>O (l)<br/>Trung bình mỗi ngày, một hộ gia đình cần đốt gas để cung cấp 10000 kJ nhiệt (hiệu suất hấp thụ nhiệt là 80%). Sau bao nhiêu ngày hộ gia đình trên sẽ sử dụng hết bình gas loại 12 kg? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"48","explanation":"Đáp án: 48.<br/>Gọi số mol C<sub>3</sub>H<sub>8</sub> và số mol C<sub>4</sub>H<sub>10</sub> là 2a, ta có: 44a  +  58.2a = 12.1000  a = 75 mol<br/>Nhiệt đốt cháy 12 kg gas là Q = 75.2220 + 150.2874 = 597600 (kJ)<br/>Số ngày sử dụng hết bình gas =  (ngày)","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q23","number":23,"part":3,"type":"short_answer","text":"Cho 16,5 gam Zn vào 500 g dung dịch HCl 1M, dung dịch thu được có nhiệt độ tăng thêm 5<sup>o</sup>C. Xác định nhiệt lượng của phản ứng giữa Zn và HCl trong dung dịch theo kJ (giả thuyết không có sự thất thoát nhiệt ra ngoài môi trường, nhiệt dung của dung dịch loãng bằng nhiệt dung của nước (4,2 J/g.K))","images":[],"correctAnswer":"42","explanation":"Đáp án: 42.<br/>Nhiệt lượng của dung dịch nhận là: 500.4,2.5 = 10500 (J) = 10,5 (kJ)<br/>Phản ứng hóa học xảy ra: Zn(s)  +  2HCl(aq)  ZnCl<sub>2</sub>(aq)  +  H<sub>2</sub>(g)<br/>Số mol HCl = 0,5 mol; số mol Zn = 0,254 mol<br/> HCl hết, Zn phản ứng 0,25 mol.<br/>Nhiệt phản ứng là: <sub>r</sub>H =","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q24","number":24,"part":3,"type":"short_answer","text":"Rót 100 mL dung dịch HCl 1M ở 27<sup>o</sup>C vào 100 mL dung dịch NaHCO<sub>3</sub>1M ở 28<sup>o</sup>C. Sau phản ứng, dung dịch thu được có nhiệt độ là bao nhiêu <sup>o</sup>C? (Kết quả làm tròn đến hàng đơn vị).<br/>Biết nhiệt tạo thành của các chất được cho trong bảng sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>HCl (aq)</td><td class='border border-slate-300 p-1.5'>NaHCO 3  (aq)</td><td class='border border-slate-300 p-1.5'>NaCl (aq)</td><td class='border border-slate-300 p-1.5'>H 2 O (l)</td><td class='border border-slate-300 p-1.5'>CO 2  (g)</td></tr><tr><td class='border border-slate-300 p-1.5'> </td><td class='border border-slate-300 p-1.5'>-168</td><td class='border border-slate-300 p-1.5'>-932</td><td class='border border-slate-300 p-1.5'>-407</td><td class='border border-slate-300 p-1.5'>-286</td><td class='border border-slate-300 p-1.5'>-392</td></tr></table>","images":[],"correctAnswer":"26","explanation":"Đáp án: 26.<br/>Phản ứng xảy ra:  HCl(aq)  +  NaHCO<sub>3</sub>(aq)  NaCl (aq)  +  H<sub>2</sub>O(l) + CO<sub>2</sub>(g)<br/>H = (-407) + (-286) + (-392) – (-168) – (-932) = 15 (kJ)<br/> Phản ứng thu nhiệt.<br/>Số mol HCl = số mol NaHCO<sub>3</sub> = 0,1 mol  Q = 0,1.15 = 1,5 (kJ)<br/>Nhiệt độ giảm đi: T = <br/>Nhiệt độ ban đầu khi trộn hai dung dịch: <br/> Nhiệt độ cuối cùng là: 27,5 – 1,8 = 25,7<sup>0</sup>C","explanationImages":[],"points":0.25,"level":"VDC"},{"id":"b17_p3_p3_q25","number":25,"part":3,"type":"short_answer","text":"Một người thợ xây trong buổi sáng kéo được 500 kg vật liệu xây dựng lên tầng cao 10m. Để bù vào năng lượng đã tiêu hao, người đó cần uống cốc nước hòa tan m g glucose. Biết nhiệt tạo thành của glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), CO<sub>2</sub> và H<sub>2</sub>O lần lượt là -1271, -393,5 và -285,8 kJ/mol. Giá trị của m là bao nhiêu?","images":[],"correctAnswer":"3,15","explanation":"Đáp án: 3,15.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(l)  +6O<sub>2</sub>(g)    6CO<sub>2</sub>(g)  + 6H<sub>2</sub>O(l)<br/>= 6( CO<sub>2</sub>(g)) + 6( H<sub>2</sub>O(l))  -( C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(l)) - 6 ( O<sub>2</sub>(g))<br/>           = 6.(393,5) + 6(-285,8) – (-1271) – 6.0 = -2804,8 (kJ)<br/>Năng lượng người thợ tiêu hao = m.g.h = 500.9,8.10 = 49 000 (J) = 49 (kJ)<br/>Khối lượng glucose cần nạp = = 3,15 g.<br/>----------HẾT----------","explanationImages":[],"points":0.25,"level":"VDC"}]},"exams":[{"id":"hoa10_c5_de1","code":"ĐỀ 501","title":"Đề kiểm tra Chương 5: Năng lượng hóa học (Đề số 1)","topic":"Nhận biết phản ứng tỏa nhiệt và phản ứng thu nhiệt theo ∆rHo298","badge":"Chương 5 - Đề 1","duration":50,"totalQuestions":28,"totalPoints":10,"questions":[{"id":"hoa10_c5_de1_p1_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Quy ước về dấu của nhiệt phản ứng () nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng thu nhiệt có < 0","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt có > 0","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng tỏa nhiệt có > 0","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt có = 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":1},{"id":"hoa10_c5_de1_p1_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Điều kiện chuẩn đối với chất khí là","images":[],"options":[{"id":"a","letter":"A","text":"áp suất 1 bar và nhiệt độ 25 <sup>o</sup>C hay 298K","isCorrect":false},{"id":"b","letter":"B","text":"áp suất 1 bar và nhiệt độ 298K hay 25K","isCorrect":false},{"id":"c","letter":"C","text":"áp suất 1 bar và nhiệt độ 25 <sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"áp suất 1 bar và nhiệt độ 25K","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":2},{"id":"hoa10_c5_de1_p1_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Nhiệt tạo thành chuẩn của một chất là nhiệt lượng tạo thành x mol chất đó từ các đơn chất bền vững nhât ở điều kiện chuẩn. Giá trị của x là","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":false},{"id":"b","letter":"B","text":"1","isCorrect":false},{"id":"c","letter":"C","text":"3","isCorrect":false},{"id":"d","letter":"D","text":"0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":3},{"id":"hoa10_c5_de1_p1_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Kí hiệu enthalpy tạo thành (nhiệt tạo thành) của phản ứng ở điều kiện chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":4},{"id":"hoa10_c5_de1_p1_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Nhiệt lượng tỏa ra hay thu vào của một phản ứng ở một điều kiện xác định được gọi là","images":[],"options":[{"id":"a","letter":"A","text":"nhiệt lượng tỏa ra","isCorrect":false},{"id":"b","letter":"B","text":"nhiệt lượng thu vào","isCorrect":false},{"id":"c","letter":"C","text":"biến thiên enthalpy","isCorrect":false},{"id":"d","letter":"D","text":"biến thiên năng lượng","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":5},{"id":"hoa10_c5_de1_p1_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Năng lượng hóa học của một số phản ứng được ghi ở các sơ đồ dưới, sơ đồ nào biểu thị phản ứng H < 0?","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":6},{"id":"hoa10_c5_de1_p1_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Enthalpy tạo thành chuẩn của các đơn chất bền bằng","images":[],"options":[{"id":"a","letter":"A","text":"+1 kJ.mol<sup>-1</sup>","isCorrect":false},{"id":"b","letter":"B","text":"-1 kJ.mol<sup>-1</sup>","isCorrect":false},{"id":"c","letter":"C","text":"+2 kJ.mol<sup>-1</sup>","isCorrect":false},{"id":"d","letter":"D","text":"0 kJ.mol<sup>-1</sup>","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":7},{"id":"hoa10_c5_de1_p1_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Ở điều kiện chuẩn, phản ứng của 2 mol Na (thể rắn) với 1/2 mol O<sub>2</sub> (thể khí) thu được 1 mol Na<sub>2</sub>O (thể rắn) giải phóng 417,98 kJ mol<sup>-1</sup>. Phản ứng trên được biểu diễn như sau:","images":[],"options":[{"id":"a","letter":"A","text":"2Na<sub>(s)</sub> + O<sub>2(g)</sub> → Na<sub>2</sub>O<sub>(s)</sub> = 417,98 kJ.mol<sup>-1</sup>","isCorrect":false},{"id":"b","letter":"B","text":"2Na<sub>(s)</sub> + O<sub>2(g)</sub> → Na<sub>2</sub>O<sub>(s)</sub> = –417,98 kJ.mol<sup>-1</sup>","isCorrect":false},{"id":"c","letter":"C","text":"4Na<sub>(s)</sub> + O<sub>2(g)</sub> → 2Na<sub>2</sub>O<sub>(s)</sub> = –417,98 kJ.mol<sup>-1</sup>","isCorrect":false},{"id":"d","letter":"D","text":"4Na<sub>(s)</sub> + O<sub>2(g)</sub> → 2Na<sub>2</sub>O<sub>(s)</sub> = 417,98 kJ.mol<sup>-1</sup>","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":8},{"id":"hoa10_c5_de1_p1_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Nung nóng hai ống nghiệm chứa CaCO<sub>3</sub> và P, xảy ra các phản ứng sau:<br/>4P(s) + 5O<sub>2</sub>(g)  2P<sub>2</sub>O<sub>5</sub>(s)(1)<br/>CaCO<sub>3(s)</sub> → CaO<sub>(s)</sub> + CO<sub>2(s)</sub> (2)<br/>Khi ngừng đun nóng, phản ứng (2) dừng lại còn phản ứng (1) tiếp tục xảy ra, chứng tỏ","images":[],"options":[{"id":"a","letter":"A","text":"phản ứng (1) toả nhiệt, phản ứng (2) thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"phản ứng (1) thu nhiệt, phản ứng (2) toả nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"cả 2 phản ứng đều toả nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"cả 2 phản ứng đều thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":9},{"id":"hoa10_c5_de1_p1_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học sau: 2H<sub>2</sub> (g) + O<sub>2</sub> (g) ⟶ 2H<sub>2</sub>O (g)      = − 483,64 kJ<br/>So sánh đúng là","images":[],"options":[{"id":"a","letter":"A","text":"∑ (cđ) > ∑ (sp)","isCorrect":false},{"id":"b","letter":"B","text":"∑ (cđ) = ∑ (sp)","isCorrect":false},{"id":"c","letter":"C","text":"∑ (cđ) < ∑ (sp)","isCorrect":false},{"id":"d","letter":"D","text":"∑ (cđ) ≤ ∑ (sp)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":10},{"id":"hoa10_c5_de1_p1_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Cho phản ứng: . Biết enthalpy tạo thành chuẩn của NH<sub>3</sub> là –45,9 kJ.mol<sup>-1</sup>. Để thu được 2 mol NH<sub>3</sub> ở cùng điều kiện phản ứng thì lượng nhiệt","images":[],"options":[{"id":"a","letter":"A","text":"tỏa ra là –45,9 kJ","isCorrect":false},{"id":"b","letter":"B","text":"thu vào là 45,9 kJ","isCorrect":false},{"id":"c","letter":"C","text":"tỏa ra là 91,8 kJ","isCorrect":false},{"id":"d","letter":"D","text":"thu vào là 91,8 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":11},{"id":"hoa10_c5_de1_p1_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Trong các đêm trại Hè, thường có hoạt động đốt lửa trại kết hợp giao lưu văn nghệ. Càng lại gần đám lửa ta càng thấy nóng hơn vì","images":[],"options":[{"id":"a","letter":"A","text":"quá trình củi cháy là tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"quá trình củi cháy thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"đi lại nhiều nên thấy nóng","isCorrect":false},{"id":"d","letter":"D","text":"nhiệt độ cơ thể cao hơn nhiệt độ ngoài trời","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":12},{"id":"hoa10_c5_de1_p1_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Cho phản ứng: H<sub>2</sub>(g) + Cl<sub>2</sub>(g) → 2HCl(g). Ở điều kiện chuẩn, cứ 1 mol H<sub>2</sub> phản ứng hết sẽ tỏa ra -184,6 kJ. Enthalpy tạo thành chuẩn của HCl(g) là","images":[],"options":[{"id":"a","letter":"A","text":"92,3 kJ.mol<sup>-1</sup>","isCorrect":false},{"id":"b","letter":"B","text":"–92,3 kJ.mol<sup>-1</sup>","isCorrect":false},{"id":"c","letter":"C","text":"184,6 kJ.mol<sup>-1</sup>","isCorrect":false},{"id":"d","letter":"D","text":"–184,6 kJ.mol<sup>-1</sup>","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":13},{"id":"hoa10_c5_de1_p1_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Phản ứng đốt cháy methane (CH<sub>4</sub>) như sau:<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = -890,36 kJ<br/>Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa rất nhiều nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Ở điều kiện chuẩn, khi đốt cháy hoàn toàn 1 mol CH<sub>4</sub>, sản phẩm là CO<sub>2(g)</sub> và H<sub>2</sub>O<sub>(l)</sub> thì sẽ giải phóng một nhiệt lượng là 890,36 kJ","isCorrect":false},{"id":"c","letter":"C","text":"Cũng phản ứng này, nếu nước ở thể hơi thì giá trị  không thay đổi","isCorrect":false},{"id":"d","letter":"D","text":"chính là nhiệt tỏa ra kèm theo phản ứng đốt cháy methane ở điều kiện chuẩn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":14},{"id":"hoa10_c5_de1_p1_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Phản ứng giữa bột nhôm (aluminium) với oxygen có phương trình nhiệt hóa học như sau:<br/>4Al(s) + 3O<sub>2</sub>(g) → 2Al<sub>2</sub>O<sub>3</sub>(s) ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> = -3352 kJ<br/>Nhiệt lượng thoát ra khi đốt cháy 24,3 gam bột nhôm là","images":[],"options":[{"id":"a","letter":"A","text":"–3016,8 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–754,2 kJ","isCorrect":false},{"id":"c","letter":"C","text":"–1508,4 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–3724,4 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":15},{"id":"hoa10_c5_de1_p1_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học đốt cháy acetylene (C<sub>2</sub>H<sub>2</sub>), methane (CH<sub>4</sub>) và C(graphite, s):<br/>2C<sub>2</sub>H<sub>2</sub>(g) + 5O<sub>2</sub>(g) → 4CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g)       = - 668 kJ<br/>C(graphite, s) + O<sub>2</sub>(g)  CO<sub>2</sub>(g)  = -393,51 kJ<br/>Từ 3 phương trình trên ta nên chọn nhiên liệu nào để có thể ứng dụng hàn xì kim loại?","images":[],"options":[{"id":"a","letter":"A","text":"Acetylene (C<sub>2</sub>H<sub>2</sub>)","isCorrect":false},{"id":"b","letter":"B","text":"Methane (CH<sub>4</sub>)","isCorrect":false},{"id":"c","letter":"C","text":"C(graphite, s)","isCorrect":false},{"id":"d","letter":"D","text":"Cả ba phương trình","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":16},{"id":"hoa10_c5_de1_p1_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Cho phản ứng: 4HCl (g) + O<sub>2</sub> (g)  2Cl<sub>2</sub> (g) + 2H<sub>2</sub>O (g)<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>H-Cl</td><td class='border border-slate-300 p-1.5'>O=O</td><td class='border border-slate-300 p-1.5'>Cl<sup>-</sup>Cl</td><td class='border border-slate-300 p-1.5'>O-H</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>427</td><td class='border border-slate-300 p-1.5'>498</td><td class='border border-slate-300 p-1.5'>243</td><td class='border border-slate-300 p-1.5'>467</td></tr></table><br/>Biến thiên enthalpy chuẩn của phản ứng trên tính theo năng lượng liên kết là bao nhiêu? Phản ứng tỏa nhiệt hay thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"= −148 kJ, phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"= −148 kJ, phản ứng thu nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"= 215 kJ, phản ứng tỏa nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"= 215 kJ, phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":17},{"id":"hoa10_c5_de1_p1_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Nhiệt tạo thành chuẩn tính theo kJ/mol của C<sub>2</sub>H<sub>5</sub>OH(l), CO<sub>2</sub>(g) và H<sub>2</sub>O(l) lần lượt là –267, –393,5 và –285,8. Cần đốt cháy bao nhiêu gam cồn để đun 100 gam nước từ 25<sup>o</sup>C đến 100<sup>o</sup>C (biết nhiệt dung của nước là 4,2 J/g.K)? Giả thiết, cồn là C<sub>2</sub>H<sub>5</sub>OH nguyên chất và có 40% nhiệt lượng thất thoát ra môi trường","images":[],"options":[{"id":"a","letter":"A","text":"4,375","isCorrect":false},{"id":"b","letter":"B","text":"1,748","isCorrect":true},{"id":"c","letter":"C","text":"2,182","isCorrect":false},{"id":"d","letter":"D","text":"0,875","isCorrect":false}],"correctAnswer":"B","explanation":"Đáp án: B.<br/> <br/>QH<sub>2</sub>O thu = m.c.Δt = 100.4,2.(100−25) = 31500J = 31,5kJ<br/>Nhiệt lượng hấp thụ là 100% − 40% = 60%<br/>QC<sub>2</sub>H<sub>5</sub>OH toả = 31,5 : 60% = 52,5kJ <br/> <br/>","explanationImages":[],"points":0.25,"displayNumber":18},{"id":"hoa10_c5_de1_p2_p2_q1","number":19,"part":2,"type":"true_false","text":"Khi các phản ứng hóa học xảy ra thường có sự trao đổi nhiệt với môi trường, làm thay đổi nhiệt độ của môi trường","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Khi than, củi cháy không khí xung quanh ấm hơn do phản ứng tỏa nhiệt","isCorrect":true},{"id":"d","letter":"D","text":"Pha viên C sủi vitamin C vào nước, khi viên C sủi tan thấy cốc nước mát hơn là do phản ứng thu nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"displayNumber":19},{"id":"hoa10_c5_de1_p2_p2_q2","number":20,"part":2,"type":"true_false","text":"Phản ứng phân hủy 1 mol H<sub>2</sub>O (g) ở điều kiện chuẩn:<br/>H<sub>2</sub>O<sub>(</sub><sub>g</sub><sub>)</sub> → H<sub>2</sub><sub>(</sub><sub>g</sub><sub>)</sub>+ O<sub>2</sub><sub>(</sub><sub>g</sub><sub>)</sub>(1) cần cung cấp một nhiệt lượng là 241,8 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng (1) là phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt tạo thành chuẩn của H<sub>2</sub>O (g) là -241,8 kJ mol-1","isCorrect":true},{"id":"c","letter":"C","text":"Biến thiên enthalpy chuẩn của phản ứng 2H<sub>2(g)</sub> + O<sub>2(g)</sub> → 2H<sub>2</sub>O<sub>(g)</sub> là -483,6 kJ","isCorrect":true},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn của phản ứng (1) là 124,05 kJ","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Phản ứng thu nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Biến thiên enthalpy chuẩn của phản ứng (1) là -124,05 kJ","explanationImages":[],"points":1,"displayNumber":20},{"id":"hoa10_c5_de1_p2_p2_q3","number":21,"part":2,"type":"true_false","text":"Cho hai phản ứng cùng xảy ra ở điều kiện chuẩn:","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của NO là","isCorrect":true},{"id":"b","letter":"B","text":"Enthalpy tạo thành chuẩn của NO<sub>2</sub> là","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol N<sub>2</sub> với 1 mol O<sub>2</sub> tạo thành 2 mol NO là","isCorrect":false},{"id":"d","letter":"D","text":"Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol khí NO với 0,5 mol khí  tạo thành 1 mol khí NO<sub>2</sub> là","isCorrect":true}],"explanation":"Đáp án:<br/>a. Đúng.<br/>b. Sai vì phản ứng (2) không phải tạo thành từ các đơn chất.<br/>c. Sai vì biến thiên enthalpy chuẩn của phản ứng giữa 1 mol  với 1 mol  tạo thành 2 mol NO là <br/>d. Đúng","explanationImages":[],"points":1,"displayNumber":21},{"id":"hoa10_c5_de1_p2_p2_q4","number":22,"part":2,"type":"true_false","text":"Sulfur dioxide là một chất có nhiều ứng dụng trong công nghiệp (dùng để sản xuất sulfuric acid, tẩy trắng bột giấy trong công nghiệp giấy, tẩy trắng dung dịch đường trong sản xuất đường tinh luyện..) và giúp ngăn cản sự phát triển của một số vi khuẩn và nấm gây hại cho thực phẩm. Ở áp suất 1 bar và nhiệt độ 25°C, phản ứng giữa sulfur với oxygen xảy ra theo phương trình<br/>“ S (s) + O<sub>2</sub>(g) → SO<sub>2</sub>(g)” và tỏa ra một lượng nhiệt là 296,9kJ","images":[],"options":[{"id":"a","letter":"A","text":"Biến thiên enthalpy chuẩn của phản ứng là 296,9 kJ mol<sup>-1</sup>","isCorrect":false},{"id":"b","letter":"B","text":"Enthalpy tạo thành chuẩn của sulfur dioxide bằng -296,9 kJ","isCorrect":true},{"id":"c","letter":"C","text":"Sulfur dioxide vừa có thể là chất khử vừa có thể là chất oxi hóa, tùy thuộc vào phản ứng mà nó tham gia","isCorrect":true},{"id":"d","letter":"D","text":"0,5 mol sulfur tác dụng hết với oxygen giải phóng 148,45kJ năng lượng dưới dạng nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Biến thiên enthalpy chuẩn của phản ứng là -196,9kJ.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"displayNumber":22},{"id":"hoa10_c5_de1_p3_p3_q1","number":23,"part":3,"type":"short_answer","text":"Cho các quá trình sau:<br/>(a) Đốt một ngọn nến.<br/>(b) Nước đóng băng.<br/>(c) Hòa tan một ít bột giặt trong tay với nước thấy tay ấm.<br/>(d) Muối kết tinh từ nước biển ở các ruộng muối.<br/>(e) Đổ mồ hôi sau khi chạy bộ.<br/>Trong các quá trình trên, có bao nhiêu quá trình thu nhiệt?","images":[],"correctAnswer":"1","explanation":"Đáp án: 1","explanationImages":[],"points":0.5,"displayNumber":23},{"id":"hoa10_c5_de1_p3_p3_q2","number":24,"part":3,"type":"short_answer","text":"Cho phương trình nhiệt hóa học của phản ứng: CO<sub>2</sub>(g) → CO(g) + O<sub>2</sub>(g) . Giá trị  của phản ứng: 2CO<sub>2</sub>(g) → 2CO(g) + O<sub>2</sub>(g) là bao nhiêu kJ?","images":[],"correctAnswer":"560","explanation":"Đáp án: 560.<br/>= 2x280 = 560 kJ","explanationImages":[],"points":0.5,"displayNumber":24},{"id":"hoa10_c5_de1_p3_p3_q3","number":25,"part":3,"type":"short_answer","text":"Liệt kê các phản ứng có thể tự xảy ra (sau giai đoạn khơi mào ban đầu) theo dãy số thứ tự tăng dần (Ví dụ: 234, 14,...).<br/>(1) 3Fe(s) + 4H<sub>2</sub>O(l)  Fe<sub>3</sub>O<sub>4</sub>(s) + 4H<sub>2</sub>(g) = +26,32 kJ<br/>(2) N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g) = +179,20 kJ<br/>(3) C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l)= -1370,70 kJ<br/>(4) C(graphite, s) + O<sub>2</sub>(g)  CO<sub>2</sub>(g)  = -393,51 kJ","images":[],"correctAnswer":"34","explanation":"Đáp án: 34","explanationImages":[],"points":0.5,"displayNumber":25},{"id":"hoa10_c5_de1_p3_p3_q4","number":26,"part":3,"type":"short_answer","text":"Giá trị trung bình của các năng lượng liên kết ở điều kiện chuẩn:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>C-H</td><td class='border border-slate-300 p-1.5'>C-C</td><td class='border border-slate-300 p-1.5'>C=C</td></tr><tr><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>418</td><td class='border border-slate-300 p-1.5'>346</td><td class='border border-slate-300 p-1.5'>612</td></tr></table><br/>Biến thiên enthalpy của phản ứng C<sub>3</sub>H<sub>8</sub> (g)  CH<sub>4</sub> (g) + C<sub>2</sub>H<sub>4</sub> (g) có giá trị là bao nhiêu kJ?","images":[],"correctAnswer":"80","explanation":"Đáp án: 80","explanationImages":[],"points":0.5,"displayNumber":26},{"id":"hoa10_c5_de1_p3_p3_q5","number":27,"part":3,"type":"short_answer","text":"Nhiệt tỏa ra khi đốt cháy 1 gam một mẫu than là 23,0 kJ. Giả thiết rằng toàn bộ lượng nhiệt của quá trình đốt than tỏa ra đều dùng để làm nóng nước, không có sự thất thoát nhiệt, hãy tính khối lượng than (gam) cần phải đốt để làm nóng 500 gam nước từ  tới  Biết để làm nóng 1 mol nước thêm  cần một nhiệt lượng là 75,4 J. (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"6,4","explanation":"Đáp án: 6,4.<br/>Lượng nhiệt cần dùng để đun nóng 500 gam nước từ lên  là<br/>Vậy lượng than đá cần dùng là:","explanationImages":[],"points":0.5,"displayNumber":27},{"id":"hoa10_c5_de1_p3_p3_q6","number":28,"part":3,"type":"short_answer","text":"Cho các phản ứng sau xảy ra ở điều kiện chuẩn:<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = –890,36 kJ<br/>CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(s) = 178,29 kJ<br/>Ở điều kiện tiêu chuẩn, cần phải đốt cháy hoàn toàn bao nhiêu gam CH<sub>4</sub>(g) để cung cấp nhiệt cho phản ứng tạo 2 mol CaO bằng cách nung CaCO<sub>3</sub>. Giả thiết hiệu suất các quá trình đều là 100% (Làm tròn kết quả đến hàng phần mười)","images":[],"correctAnswer":"6,4","explanation":"Đáp án: 6,4.<br/>2 mol CaO tạo thành cần cung cấp một nhiệt lượng là 356,58 kJ<br/>Nhiệt lượng của phản ứng nung vôi bằng lượng nhiệt khi đốt x mol khí CH<sub>4</sub>(g)<br/>Theo đề 1 mol khí CH<sub>4</sub> khi đốt tỏa ra một nhiệt lượng 890,36 kJ<br/>x mol 356,58 kJ<br/> x = 0,4 mol  m = 6,4g.<br/>------------------------- HẾT -------------------------","explanationImages":[],"points":0.5,"displayNumber":28}]},{"id":"hoa10_c5_de2","code":"ĐỀ 502","title":"Đề kiểm tra Chương 5: Năng lượng hóa học (Đề số 2)","topic":"Tính biến thiên enthalpy phản ứng theo nhiệt tạo thành chuẩn ∆fHo298","badge":"Chương 5 - Đề 2","duration":50,"totalQuestions":28,"totalPoints":10,"questions":[{"id":"hoa10_c5_de2_p1_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Các phản ứng phân hủy thường là phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng càng tỏa ra nhiều nhiệt càng dễ tự xảy ra","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng oxi hóa chất béo cung cấp nhiệt cho cơ thể","isCorrect":false},{"id":"d","letter":"D","text":"Các phản ứng khi đun nóng đều dễ xảy ra hơn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":1},{"id":"hoa10_c5_de2_p1_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Nhiệt tạo thành chuẩn (∆<sub>f</sub>) của các đơn chất ở dạng bền vững nhất là","images":[],"options":[{"id":"a","letter":"A","text":"0 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"2 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"3 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"1 kJ/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":2},{"id":"hoa10_c5_de2_p1_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Quy ước về dấu của nhiệt phản ứng () nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng thu nhiệt có < 0","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng tỏa nhiệt có > 0","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng thu nhiệt có = 0","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng tỏa nhiệt có < 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":3},{"id":"hoa10_c5_de2_p1_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học của phản ứng trung hòa sau :<br/>HCl(aq)  + NaOH(aq)    NaCl(aq)  +  H<sub>2</sub>O(l)      = -57,3 kJ<br/>Phát biểu nào sau đây không đúng ?","images":[],"options":[{"id":"a","letter":"A","text":"Cho 1 mol HCl tác dụng với 1 mol NaOH tỏa nhiệt lượng là 57,3kJ","isCorrect":false},{"id":"b","letter":"B","text":"Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3kJ","isCorrect":false},{"id":"c","letter":"C","text":"Cho 1 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3kJ","isCorrect":false},{"id":"d","letter":"D","text":"Cho HCl dư tác dụng với 1 mol NaOH thu nhiệt lượng là 57,3kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":4},{"id":"hoa10_c5_de2_p1_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Cho phản ứng nhiệt phân CaCO<sub>3</sub>: CaCO<sub>3</sub>(s)  CaO(s) + CO<sub>2</sub>(g). Ở điều kiện chuẩn, để thu được 1 mol CaO(s) từ CaCO<sub>3</sub>(s) cần phải cung cấp 179,2 kJ nhiệt lượng. Phát biểu nào sau đây đúng khi nói về phản ứng trên?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt, ∆<sub>r</sub>= +179,2 kJ","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng thu nhiệt, ∆<sub>r</sub>= –179,2 kJ","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng tỏa nhiệt, ∆<sub>r</sub>= –179,2 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt, ∆<sub>r</sub>= +179,2 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":5},{"id":"hoa10_c5_de2_p1_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hoá học nào sau đây ứng với sơ đồ biểu diễn biến thiên enthalpy của phản ứng sau:","images":[],"options":[{"id":"a","letter":"A","text":"2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) → 2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) ∆<sub>r</sub> = +1450 kJ","isCorrect":false},{"id":"b","letter":"B","text":"2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) → 2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) ∆<sub>r</sub> = +1450 kJ","isCorrect":false},{"id":"c","letter":"C","text":"2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) → 2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) ∆<sub>r</sub> = -1450 kJ","isCorrect":false},{"id":"d","letter":"D","text":"2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) → 2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) ∆<sub>r</sub> = -1450 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":6},{"id":"hoa10_c5_de2_p1_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây là phản ứng thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"NaOH(aq) + HCl(aq)  NaCl(aq) + H<sub>2</sub>O(l)  ∆<sub>r</sub>= –57,9 kJ","isCorrect":false},{"id":"b","letter":"B","text":"H<sub>2</sub>(g) + I<sub>2</sub>(s)  2HI(g)    ∆<sub>r</sub>= +53,0 kJ","isCorrect":false},{"id":"c","letter":"C","text":"C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g)  C<sub>2</sub>H<sub>6</sub>(g)    ∆<sub>r</sub>= –137,0 kJ","isCorrect":false},{"id":"d","letter":"D","text":"2CO(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g)    ∆<sub>r</sub>= –566,0 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":7},{"id":"hoa10_c5_de2_p1_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Cho biết biến thiên enthalpy của phản ứng sau ở điều kiện chuẩn<br/>CO (g)  +  O<sub>2</sub> (g) CO<sub>2</sub>(g)     = -283,0 kJ<br/>Biết nhiệt tạo thành của CO<sub>2</sub>: (CO<sub>2</sub> (g))  = -393,5 kJ. Nhiệt tạo thành chuẩn của CO là","images":[],"options":[{"id":"a","letter":"A","text":"-141,5 kJ","isCorrect":false},{"id":"b","letter":"B","text":"+110,5 kJ","isCorrect":false},{"id":"c","letter":"C","text":"-221,0 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-110,5 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":8},{"id":"hoa10_c5_de2_p1_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Hình ảnh nào miêu tả quá trình đang diễn ra sự thu nhiệt?<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td></tr><tr><td class='border border-slate-300 p-1.5'>Hình 1. Cây nến đang cháy</td><td class='border border-slate-300 p-1.5'>Hình 2. Hòa tan đá vào nước</td><td class='border border-slate-300 p-1.5'>Hình 3. Đốt nhiên liệu trong tên lửa.</td><td class='border border-slate-300 p-1.5'>Hình 4.  Hòa tan sodium vào nước.</td></tr></table>","images":[],"options":[{"id":"a","letter":"A","text":"Hình 1","isCorrect":false},{"id":"b","letter":"B","text":"Hình 3","isCorrect":false},{"id":"c","letter":"C","text":"Hình 2","isCorrect":false},{"id":"d","letter":"D","text":"Hình 4","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":9},{"id":"hoa10_c5_de2_p1_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Phản ứng chuyển hoá giữa hai dạng đơn chất của phosphorus (P):<br/>P(s, đỏ) P (s, trắng)    = +17,6 kJ<br/>Điều này chứng tỏ phản ứng:","images":[],"options":[{"id":"a","letter":"A","text":"tỏa nhiệt, P trắng bền hơn P đỏ","isCorrect":false},{"id":"b","letter":"B","text":"tỏa nhiệt, P đỏ bền hơn P trắng","isCorrect":false},{"id":"c","letter":"C","text":"thu nhiệt, P trắng bền hơn P đỏ","isCorrect":false},{"id":"d","letter":"D","text":"thu nhiệt, P đỏ bền hơn P trắng","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":10},{"id":"hoa10_c5_de2_p1_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hóa học giữa nitrogen và oxygen như sau:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g) = +180kJ<br/>Kết luận nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng xảy ra thuận lợi ở điều kiện thường","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"Nitrogen và oxygen phản ứng mạnh hơn khi ở nhiệt độ thấp","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng hóa học xảy ra có sự hấp thụ nhiệt năng từ môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":11},{"id":"hoa10_c5_de2_p1_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Cho phương trình hoá học tổng quát: aA + bB  mM + nN. Hãy chọn các phương án tính đúng  của phản ứng theo nhiệt tạo thành chuẩn () của các chất A, B, C, D","images":[],"options":[{"id":"a","letter":"A","text":"= m . (M) + n . (N) – a. (A) – b . (B)","isCorrect":false},{"id":"b","letter":"B","text":"= a. (A) + b . (B)   V m . (M) – n . (N)","isCorrect":false},{"id":"c","letter":"C","text":"= a . E<sub>b</sub>(A) + b . E<sub>b</sub> (B) – m . E<sub>b</sub>(M) – n . E<sub>b</sub> (N)","isCorrect":false},{"id":"d","letter":"D","text":"= m . E<sub>b</sub>(M) + n . E<sub>b</sub> (N)  – a . E<sub>b</sub>(A) – b . E<sub>b</sub> (B)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":12},{"id":"hoa10_c5_de2_p1_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây có thể tự xảy ra ở điều kiện thường?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng giữa H<sub>2</sub> và O<sub>2</sub> trong hỗn hợp khí","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng nhiệt phân Cu(OH)<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng giữa Zn và dung dịch H<sub>2</sub>SO<sub>4</sub>","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng đốt cháy cồn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":13},{"id":"hoa10_c5_de2_p1_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Điều kiện nào sau đây được gọi là điều kiện chuẩn?","images":[],"options":[{"id":"a","letter":"A","text":"Áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 20<sup>o</sup>C (293K)","isCorrect":false},{"id":"b","letter":"B","text":"Áp suất 1,5 bar (đối với chất khí), nồng độ 1,5 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 25<sup>o</sup>C (298K)","isCorrect":false},{"id":"c","letter":"C","text":"Áp suất 1,5 bar (đối với chất khí), nồng độ 1,5 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 20<sup>o</sup>C (293K)","isCorrect":false},{"id":"d","letter":"D","text":"Áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 25<sup>o</sup>C (298K)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":14},{"id":"hoa10_c5_de2_p1_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Phản ứng đốt cháy ethanol: C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l)<br/>Đốt cháy hoàn toàn 5 g ethanol, nhiệt tỏa ra làm nóng chảy 447 g nước đá ở 0<sup>o</sup>C. Biết 1 g nước đá nóng chảy hấp thụ nhiệt lượng 333,5 J, biến thiên enthalpy của phản ứng đốt cháy ethanol là","images":[],"options":[{"id":"a","letter":"A","text":"-1371 kJ/mol","isCorrect":true},{"id":"b","letter":"B","text":"-954 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"-149 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"+149 kJ/mol","isCorrect":false}],"correctAnswer":"A","explanation":"Đáp án: A.<br/>Q = 447.333,5 = 149074,5 J  149 (kJ)  H =","explanationImages":[],"points":0.25,"displayNumber":15},{"id":"hoa10_c5_de2_p1_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Cho phản ứng sau: CHCH(g) + H<sub>2</sub>(g) CH<sub>3</sub>-CH<sub>3</sub> (g)<br/>Năng lượng liên kết (kJ/mol) của H – H là 436, của C – C là 347, của C – H là 414 và của CC là 839. Nhiệt () của phản ứng là","images":[],"options":[{"id":"a","letter":"A","text":"–294 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–292kJ","isCorrect":false},{"id":"c","letter":"C","text":"+292kJ","isCorrect":false},{"id":"d","letter":"D","text":"+294kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":16},{"id":"hoa10_c5_de2_p1_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Dung dịch glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) 5%, có khối lượng riêng là 1,02 g/mL, phản ứng oxi hóa 1 mol glucose tạo thành CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tỏa ra nhiệt lượng là 2803,0 kJ.<br/>Một người bệnh được truyền một chai nước chứa 500 mL dung dịch glucose 5%. Năng lượng tối đa từ phản ứng oxi hóa hoàn toàn glucose mà bệnh nhân đó có thể nhận được là","images":[],"options":[{"id":"a","letter":"A","text":"+397,09 kJ","isCorrect":true},{"id":"b","letter":"B","text":"–397,09 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+416,02 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–416,02 kJ","isCorrect":false}],"correctAnswer":"A","explanation":"Đáp án: A.<br/>Phản ứng tỏa nhiệt nên <br/>Số mol glucose: <br/>Q = 2803,0.0,14167 = 397,1 (kJ)","explanationImages":[],"points":0.25,"displayNumber":17},{"id":"hoa10_c5_de2_p1_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Cho các phát biểu:<br/>(a) Phản ứng tỏa nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt.<br/>(b) Tất cả các phản ứng mà chất tham gia có chứa nguyên tố oxygen đều tỏa nhiệt.<br/>(c) Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt.<br/>(d) Lượng nhiệt mà phản ứng hấp thụ hay giải phóng không phụ thuộc vào điều kiện thực hiện phản ứng và thể tồn tại của chất trong phản ứng.<br/>(e) Sự cháy của nhiên liệu (xăng, dầu, khí gas, than, gỗ,…) là những ví dụ về phản ứng thu nhiệt vì cần khơi mào.<br/>Số phát biểu đúng là","images":[],"options":[{"id":"a","letter":"A","text":"3","isCorrect":false},{"id":"b","letter":"B","text":"2","isCorrect":false},{"id":"c","letter":"C","text":"5","isCorrect":false},{"id":"d","letter":"D","text":"4","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":18},{"id":"hoa10_c5_de2_p2_p2_q1","number":19,"part":2,"type":"true_false","text":"Với các phản ứng có kèm theo trao đổi năng lượng dưới dạng nhiệt, có hai khả năng đó là phản ứng tỏa nhiệt và phản ứng thu nhiệt","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng thu nhiệt xảy ra thuận lợi hơn so với phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Biến thiên enthalpy của phản ứng tỏa nhiệt trái dấu với phản ứng thu nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Phản ứng thu nhiệt thường phải cung cấp nhiệt độ liên tục trong quá trình phản ứng","isCorrect":true},{"id":"d","letter":"D","text":"Khi cho vôi sống vào nước thấy nhiệt độ tăng so với ban đầu chứng tỏ đây là phản ứng tỏa nhiệt","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Phản ứng tỏa nhiệt thuận lợi hơn thu nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"displayNumber":19},{"id":"hoa10_c5_de2_p2_p2_q2","number":20,"part":2,"type":"true_false","text":"Cho phương trình nhiệt hoá học sau:<br/>H<sub>2</sub>(g) + I<sub>2</sub>(g) → 2HI(g)  = +11,3 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng giải phóng nhiệt lượng 11,3 kJ khi 2 mol HI được tạo thành","isCorrect":false},{"id":"b","letter":"B","text":"Tổng nhiệt phá vỡ liên kết của chất phản ứng lớn hơn nhiệt tỏa ra khi tạo thành sản phẩm","isCorrect":true},{"id":"c","letter":"C","text":"Năng lượng chứa trong H<sub>2</sub> và I<sub>2</sub> cao hơn trong HI","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng xảy ra với tốc độ chậm","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. ∆H = +11,3 kJ > 0 ⇒ phản ứng thu nhiệt.<br/>b. Đúng.<br/>c. Sai. Phân tử H<sub>2</sub> và I<sub>2</sub> có liên kết bền hơn HI, nghĩa là mức năng lượng thấp hơn.<br/>d. Sai. Không nói về sự trao đổi năng lượng của phản ứng","explanationImages":[],"points":1,"displayNumber":20},{"id":"hoa10_c5_de2_p2_p2_q3","number":21,"part":2,"type":"true_false","text":"Baking soda (NaHCO<sub>3</sub>) có trong thành phần bột nở dùng để làm bánh và cũng có trong thành phần của thuốc đau dạ dày Nabica, xét phản ứng nhiệt phân NaHCO<sub>3</sub> xảy ra như sau:<br/>2NaHCO<sub>3</sub>(s) → Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l)   = +91,6 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng trên có tổng nhiệt tạo thành của chất đầu lớn hơn tổng nhiệt tạo thành của các chất sản phẩm","isCorrect":false},{"id":"b","letter":"B","text":"Cần tránh để bột nở ở nơi có nhiệt độ cao","isCorrect":true},{"id":"c","letter":"C","text":"Phản ứng trên thu vào một nhiệt lượng bằng 91,6 kJ","isCorrect":true},{"id":"d","letter":"D","text":"Nếu thay đổi trạng thái của H<sub>2</sub>O(l) bằng H<sub>2</sub>O(g) thì giá trị biến thiên enthalpy chuẩn của phản ứng không đổi","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. Vì > 0 nên tổng nhiệt tạo thành của sản phẩm lớn hơn tổng nhiệt tạo thành của chất đầu.<br/>b. Đúng. Bột nở chứa NaHCO<sub>3</sub> dễ bị phân hủy bởi nhiệt theo phương trình hóa học trên.<br/>c. Đúng.<br/>d. Sai. Nếu thay đổi trạng thái của H<sub>2</sub>O(l) bằng H<sub>2</sub>O(g) thì giá trị biến thiên enthalpy của phản ứng sẽ thay đổi vì nhiệt tạo thành của H<sub>2</sub>O(l) khác H<sub>2</sub>O(g)","explanationImages":[],"points":1,"displayNumber":21},{"id":"hoa10_c5_de2_p2_p2_q4","number":22,"part":2,"type":"true_false","text":"Cho phản ứng đốt cháy methane (CH<sub>4</sub>) và acetylene (C<sub>2</sub>H<sub>2</sub>) như sau:<br/>(1) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)<br/>(2) C<sub>2</sub>H<sub>2</sub>(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)","images":[],"options":[{"id":"a","letter":"A","text":"Cả hai phản ứng trên đều là phản ứng tỏa nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Khi đốt cháy cùng một lượng thể tích khí CH<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> thì lượng nhiệt sinh ra do CH<sub>4</sub> nhiều hơn lượng nhiệt sinh ra do C<sub>2</sub>H<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng (1), (2) tính theo nhiệt tạo thành:","isCorrect":true},{"id":"d","letter":"D","text":"Trong thực tế, để hàn, cắt kim loại người ta sử dụng CH<sub>4</sub> mà không dùng C<sub>2</sub>H<sub>2</sub>","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. C<sub>2</sub>H<sub>2</sub> cháy tỏa nhiều nhiệt hơn CH<sub>4</sub>.<br/>c. Đúng.<br/>d. Sai. Người ta dùng C<sub>2</sub>H<sub>2</sub> vì nhiệt lượng tỏa ra nhiều hơn CH<sub>4</sub>","explanationImages":[],"points":1,"displayNumber":22},{"id":"hoa10_c5_de2_p3_p3_q1","number":23,"part":3,"type":"short_answer","text":"Phản ứng giữa sulfur dioxide và oxygen là tỏa nhiệt<br/>2SO<sub>2</sub>(g) + O<sub>2</sub>(g) 2SO<sub>3</sub>(g)      = –197 kJ<br/>Giá trị biến thiên enthalpy của phản ứng SO<sub>3</sub>(g) SO<sub>2</sub>  + O<sub>2</sub> (g) là bao nhiêu kJ?","images":[],"correctAnswer":"98,5","explanation":"Đáp án: 98,5","explanationImages":[],"points":0.5,"displayNumber":23},{"id":"hoa10_c5_de2_p3_p3_q2","number":24,"part":3,"type":"short_answer","text":"Cho phương trình nhiệt hóa học của các phản ứng như sau:<br/>CO<sub>2</sub>(g) CO(g) + O<sub>2</sub>(g)<br/>3H<sub>2</sub>(g) + N<sub>2</sub>(g) 2NH<sub>3</sub>(g)<br/>3Fe(s) + 4H<sub>2</sub>O(l)  Fe<sub>3</sub>O<sub>4</sub>(s) + 4H<sub>2</sub>(g)<br/>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  2H<sub>2</sub>O(g)<br/>H<sub>2</sub>(g) + F<sub>2</sub>(g)  2HF(g)<br/>Trong các phản ứng trên, có bao nhiêu phản ứng tỏa nhiệt?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.5,"displayNumber":24},{"id":"hoa10_c5_de2_p3_p3_q3","number":25,"part":3,"type":"short_answer","text":"Quá trình hoà tan calcium chloride trong nước:<br/>CaCl<sub>2</sub>(s)  Ca<sup>2+</sup>(ag) + 2Cl<sup>-</sup> (ag) = ?<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>CaCl 2</td><td class='border border-slate-300 p-1.5'>Ca 2+</td><td class='border border-slate-300 p-1.5'>Cl -</td></tr><tr><td class='border border-slate-300 p-1.5'> (kJ/mol)</td><td class='border border-slate-300 p-1.5'>-795,0</td><td class='border border-slate-300 p-1.5'>-542,83</td><td class='border border-slate-300 p-1.5'>-167,16</td></tr></table><br/>Tính biến thiên enthalpy chuẩn của quá trình theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"-82","explanation":"Đáp án: -82.<br/>Enthalpy của quá trình:  =  -542,83 + 2.(-167,16) – (-795,0) = -82,15 kJ","explanationImages":[],"points":0.5,"displayNumber":25},{"id":"hoa10_c5_de2_p3_p3_q4","number":26,"part":3,"type":"short_answer","text":"Cho các loại phản ứng sau:<br/>(1) Phản ứng tạo gỉ kim loại.<br/>(2) Phản ứng quang hợp.<br/>(3) Phản ứng nhiệt phân.<br/>(4) Phản ứng đốt cháy.<br/>Liệt kê các phản ứng cần cung cấp năng lượng trong suốt quá trình diễn ra phản ứng theo dãy số thứ tự tăng dần (Ví dụ: 1234, 24,…)","images":[],"correctAnswer":"23","explanation":"Đáp án: 23","explanationImages":[],"points":0.5,"displayNumber":26},{"id":"hoa10_c5_de2_p3_p3_q5","number":27,"part":3,"type":"short_answer","text":"Phản ứng tổng hợp ammonia : N<sub>2</sub>(g)  + 3H<sub>2</sub>(g)  2NH<sub>3</sub>(g)      = –92 kJ<br/>Biết năng lượng liên kết (kJ/mol) của NN  và H – H lần lượt là 946 và 436<br/>Năng lượng liên kết của N – H trong ammonia là bao nhiêu kJ/mol?","images":[],"correctAnswer":"391","explanation":"Đáp án: 391.<br/> = E<sub>b</sub>(NN ) + 3E<sub>b</sub>(H-H) - 6E<sub>b</sub>(N-H) = 946 + 3.436 - 6E<sub>b</sub>(N-H) = -92  E<sub>b</sub>(N-H) = 391 kJ/mol","explanationImages":[],"points":0.5,"displayNumber":27},{"id":"hoa10_c5_de2_p3_p3_q6","number":28,"part":3,"type":"short_answer","text":"Một hộ gia đình mua than đá làm nhiên liệu đun nấu và trung bình mỗi ngày dùng hết 1,8 kg than. Giả thiết loại than đá trên chứa 90% carbon và 1,2% sulfur về khối lượng, còn lại là các tạp chất trơ.<br/>Cho các phản ứng:<br/>Nhiệt lượng cung cấp cho hộ gia đình từ quá trình đốt than trong một ngày tương đương bao nhiêu số điện (1 số điện = 1 kWh = 3600 kJ, làm tròn kết quả đến hàng đơn vị)?","images":[],"correctAnswer":"15","explanation":"Đáp án: 15.<br/>Trong 1800 g than đá chứa 1620 gam (135 mol) carbon và 21,6 g (0,675 mol) sulfur.<br/>Nhiệt lượng giải phóng ra khi đốt cháy 1800 gam than đá: <br/>Nhiệt lượng trên tương đương với số điện:  số.<br/>------------------------- HẾT -------------------------","explanationImages":[],"points":0.5,"displayNumber":28}]},{"id":"hoa10_c5_de3","code":"ĐỀ 503","title":"Đề kiểm tra Chương 5: Năng lượng hóa học (Đề số 3)","topic":"Tính biến thiên enthalpy phản ứng theo năng lượng liên kết Eb","badge":"Chương 5 - Đề 3","duration":50,"totalQuestions":28,"totalPoints":10,"questions":[{"id":"hoa10_c5_de3_p1_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Phản ứng hóa học trong đó có sự truyền năng lượng từ hệ sang môi trường xung quanh nó được gọi là","images":[],"options":[{"id":"a","letter":"A","text":"phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"phản ứng trung hòa","isCorrect":false},{"id":"c","letter":"C","text":"phản ứng trao đổi","isCorrect":false},{"id":"d","letter":"D","text":"phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":1},{"id":"hoa10_c5_de3_p1_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Biến thiên enthalpy chuẩn của một phản ứng hóa học kí hiệu là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":2},{"id":"hoa10_c5_de3_p1_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Phản ứng nào dưới đây là phản ứng thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"Nung NH<sub>4</sub>Cl tạo ra HCl và NH<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Cồn cháy trong không khí","isCorrect":false},{"id":"c","letter":"C","text":"Đá vôi tác dụng với dung dịch HCl","isCorrect":false},{"id":"d","letter":"D","text":"Sự phân hạch hạt nhân","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":3},{"id":"hoa10_c5_de3_p1_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây là phản ứng thu nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":4},{"id":"hoa10_c5_de3_p1_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Điều kiện chuẩn là điều kiện ứng với áp suất 1 bar (với chất khí), nồng độ 1 mol L<sup>-1</sup> (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 298 K","isCorrect":false},{"id":"b","letter":"B","text":"Điều kiện chuẩn là điều kiện ứng với nhiệt độ 298 K","isCorrect":false},{"id":"c","letter":"C","text":"Áp suất 760 mmHg là áp suất ở điều kiện chuẩn","isCorrect":false},{"id":"d","letter":"D","text":"Điều kiện chuẩn là điều kiện ứng với áp suất 1 atm, nhiệt độ 0 °","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":5},{"id":"hoa10_c5_de3_p1_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây sai?","images":[],"options":[{"id":"a","letter":"A","text":"Hầu hết các phản ứng thu nhiệt cần giai đoạn khơi mào (đun, đốt nóng,…)","isCorrect":false},{"id":"b","letter":"B","text":"Hầu hết các phản ứng tỏa nhiệt cần phải tiếp tục đun hoặc đốt nóng ở giai đoạn tiếp diễn","isCorrect":false},{"id":"c","letter":"C","text":"Hầu hết các phản ứng tỏa nhiệt không cần phải tiếp tục đun hoặc đốt nóng ở giai đoạn tiếp diễn","isCorrect":false},{"id":"d","letter":"D","text":"Tùy phản ứng cụ thể mà các phản ứng tỏa nhiệt có thể cần hoặc không cần giai đoạn khơi mào","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":6},{"id":"hoa10_c5_de3_p1_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Enthalpy tạo thành của một chất (Δ<sub>f</sub>H) là nhiệt kèm theo phản ứng tạo thành","images":[],"options":[{"id":"a","letter":"A","text":"1 gam chất đó từ các đơn chất bền nhất","isCorrect":false},{"id":"b","letter":"B","text":"1 lít chất đó từ các đơn chất dạng bền nhất","isCorrect":false},{"id":"c","letter":"C","text":"1 mol chất đó từ các đơn chất bền nhất","isCorrect":false},{"id":"d","letter":"D","text":"1 mol chất đó từ các hợp chất bền nhất","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":7},{"id":"hoa10_c5_de3_p1_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây cần phải cung cấp năng lượng trong quá trình phản ứng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tạo gỉ kim loại","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng quang hợp","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng nhiệt phân","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng tạo oxit Na<sub>2</sub>O","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":8},{"id":"hoa10_c5_de3_p1_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Cho các giá trị năng lượng liên kết:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>O – H</td><td class='border border-slate-300 p-1.5'>C = O</td><td class='border border-slate-300 p-1.5'>O = O</td></tr><tr><td class='border border-slate-300 p-1.5'>E b (kJ/mol)</td><td class='border border-slate-300 p-1.5'>41 3</td><td class='border border-slate-300 p-1.5'>46 7</td><td class='border border-slate-300 p-1.5'>7 45</td><td class='border border-slate-300 p-1.5'>498</td></tr></table><br/>Phương trình đốt cháy khí methane: CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g) (*)<br/>Biến thiên enthalpy của phản ứng (*) dựa vào năng lượng liên kết là","images":[],"options":[{"id":"a","letter":"A","text":"–256 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–560 kJ","isCorrect":false},{"id":"c","letter":"C","text":"–816 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–710 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":9},{"id":"hoa10_c5_de3_p1_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Phản ứng nào sau đây là phản ứng toả nhiệt?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng nhiệt phân muối KNO<sub>3</sub>","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng phân huỷ khí NH<sub>3</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Phản ứng oxi hoá glucose trong cơ thể","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng hoà tan NH<sub>4</sub>Cl trong nước","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":10},{"id":"hoa10_c5_de3_p1_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Trong các chất dưới đây, chất nào có ?","images":[],"options":[{"id":"a","letter":"A","text":"N<sub>2</sub>(g)","isCorrect":false},{"id":"b","letter":"B","text":"S(s)","isCorrect":false},{"id":"c","letter":"C","text":"Na(s)","isCorrect":false},{"id":"d","letter":"D","text":"O<sub>3</sub>(g)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":11},{"id":"hoa10_c5_de3_p1_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Biến thiên enthalpy của một phản ứng được ghi ở sơ đồ dưới. Kết luận nào sau đây là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Năng lượng chất tham gia phản ứng nhỏ hơn năng lượng sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng là a kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":12},{"id":"hoa10_c5_de3_p1_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Biểu thức đúng tính của phản ứng theo năng lượng liên kết của các chất là :","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":13},{"id":"hoa10_c5_de3_p1_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Phương trình hóa học nào dưới đây biểu thị enthalpy tạo thành chuẩn của CO(g)?","images":[],"options":[{"id":"a","letter":"A","text":"2C ((graphite)","isCorrect":false},{"id":"b","letter":"B","text":"C ((graphite) +","isCorrect":false},{"id":"c","letter":"C","text":"C ((graphite)","isCorrect":false},{"id":"d","letter":"D","text":"C ((graphite)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":14},{"id":"hoa10_c5_de3_p1_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng thu vào càng nhiều nhiệt, biến thiên enthalpy càng âm","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng tỏa ra càng nhiều nhiệt, biến thiên enthaply càng dương","isCorrect":false},{"id":"c","letter":"C","text":"Năng lượng của hệ chất tham gia trong phản ứng tỏa nhiệt cao hơn năng lượng của hệ sản phẩm","isCorrect":false},{"id":"d","letter":"D","text":"Năng lượng của hệ chất tham gia trong phản ứng thu nhiệt cao hơn năng lượng của hệ sản phẩm","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":15},{"id":"hoa10_c5_de3_p1_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Cho phản ứng hóa học sau: 4FeS(s) + 7O<sub>2</sub>(g) → 2Fe<sub>2</sub>O<sub>3</sub>(s) + 4SO<sub>2</sub>(g). Biết nhiệt tạo thành ∆<sub>f</sub>H<sup>0</sup><sub>298</sub> của các chất FeS(s), Fe<sub>2</sub>O<sub>3</sub>(s) và SO<sub>2</sub>(g) lần lượt là –100,0 kJ/mol, –825,5 kJ/mol và –296,8 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là","images":[],"options":[{"id":"a","letter":"A","text":"+3105,6 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–3105,6 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+2438,2 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–2438,2 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":16},{"id":"hoa10_c5_de3_p1_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Cho phản ứng hóa học sau: N<sub>2</sub>(g) + O<sub>2</sub>(g) → 2NO(g). Cho biết năng lượng liên kết trong các phân tử O<sub>2</sub>, N<sub>2</sub> và NO lần lượt là 494 kJ/mol; 945 kJ/mol và 607 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là","images":[],"options":[{"id":"a","letter":"A","text":"+298 kJ","isCorrect":false},{"id":"b","letter":"B","text":"–298 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+225 kJ","isCorrect":false},{"id":"d","letter":"D","text":"–225 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":17},{"id":"hoa10_c5_de3_p1_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau: NH<sub>4</sub>NO<sub>3</sub>(s) + H<sub>2</sub>O(l) NH<sub>4</sub>NO<sub>3</sub>(aq)<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Biết nhiệt dung riêng của H<sub>2</sub>O là 4,2 J/g.K. Sau khi muối tan hết, nước trong bình có nhiệt độ là","images":[],"options":[{"id":"a","letter":"A","text":"31,2<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"b","letter":"B","text":"28,1<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"c","letter":"C","text":"21,9<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"18,8<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"Đáp án:  m  =","isCorrect":false},{"id":"d","letter":"D","text":"V  = 1000 g Q = mcT = 1000.4,2. T = 26.1000  T = 6,2 <sup>o</sup>C Sau khi hòa tan nước trong bình có nhiệt độ giảm so với ban đầu  25 – 6,2 = 18,8<sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":18},{"id":"hoa10_c5_de3_p2_p2_q1","number":19,"part":2,"type":"true_false","text":"Mỗi phát biểu sau đây là đúng hay sai?","images":[],"options":[{"id":"a","letter":"A","text":"Trong phản ứng tỏa nhiệt, dấu của ∆H dương vì năng lượng của hệ chất phản ứng nhỏ hơn năng lượng của hệ chất sản phẩm","isCorrect":false},{"id":"b","letter":"B","text":"Trong phản ứng thu nhiệt, dấu của ∆H âm vì năng lượng của hệ chất phản ứng lớn hơn năng lượng của hệ chất sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Giá trị tuyệt đối của biến thiên enthalpy càng lớn thì nhiệt lượng tỏa ra hay thu vào của phản ứng càng nhiều","isCorrect":true},{"id":"d","letter":"D","text":"Các phản ứng xảy ra ở nhiệt độ phòng thường là phản ứng tỏa nhiệt, các phản ứng thu nhiệt thường xảy ra khi đun nóng","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Trong phản ứng tỏa nhiệt, ∆H < 0.<br/>b. Sai. Trong phản ứng thu nhiệt, dấu của ∆H > 0.<br/>c. Đúng.<br/>d. Đúng","explanationImages":[],"points":1,"displayNumber":19},{"id":"hoa10_c5_de3_p2_p2_q2","number":20,"part":2,"type":"true_false","text":"Cho phương trình phản ứng: Zn (s) + CuSO<sub>4</sub> (aq)  ZnSO<sub>4</sub> (aq) + Cu (s);","images":[],"options":[{"id":"a","letter":"A","text":"Enthalpy tạo thành chuẩn của Zn(s) bằng 210 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng trên là phản ứng tỏa nhiệt","isCorrect":true},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng tạo thành 3,84 g Cu là 12,6 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Trong quá trình phản ứng, nhiệt độ của hỗn hợp tăng lên","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Enthalpy tạo thành chuẩn của Zn(s) bằng 0.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy của phản ứng tạo thành 3,84g Cu là <br/>d. Đúng","explanationImages":[],"points":1,"displayNumber":20},{"id":"hoa10_c5_de3_p2_p2_q3","number":21,"part":2,"type":"true_false","text":"Biến thiên enthalpy chuẩn quá trình “ H<sub>2</sub>O(s) → H<sub>2</sub>O(l)” là 6,020kJ","images":[],"options":[{"id":"a","letter":"A","text":"Quá trình tan chảy của nước đá là quá trình tỏa nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Khi cho viên nước đá vào cốc nước lỏng ấm, viên đá lại tan chảy dần vì nó lấy nhiệt từ nước lỏng","isCorrect":true},{"id":"c","letter":"C","text":"Cốc nước lỏng bị lạnh dần trong quá trình viên nước đá tan chảy do sự mất nhiệt làm cho nước lỏng lạnh đi","isCorrect":true},{"id":"d","letter":"D","text":"Biết rằng để làm cho nhiệt độ của 1 mol nước lỏng thay đổi 1°C cần một nhiệt lượng là 75,4J. Giả sử mỗi viên nước đá tương ứng với 1 mol nước, thì cần tối thiểu 6 viên nước đá tan chảy để có thể làm lạnh 500 gam nước lỏng ở 20°C xuống 0°C","isCorrect":false}],"explanation":"Đáp án:<br/>a. Sai. Quá trình tan chảy của nước đá là quá trình thu nhiệt vì có biến thiên enthalpy dương.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Nhiệt lượng mà 500 gam nước lỏng từ ở 20°C xuống 0°C  tỏa ra là:<br/>= 41,8889(kJ)<br/>Mỗi viên đá tan chảy hấp thụ một nhiệt lượng là 6,020 kJ <br/>⇒ Số viên nước đá tối thiểu cần là  viên","explanationImages":[],"points":1,"displayNumber":21},{"id":"hoa10_c5_de3_p2_p2_q4","number":22,"part":2,"type":"true_false","text":"Ở điều kiện chuẩn, 2 mol nhôm tác dụng vừa đủ với khí chlorine tạo muối aluminium chloride và giải phóng một lượng nhiệt 1390,81 kJ","images":[],"options":[{"id":"a","letter":"A","text":"Phương trình nhiệt của phản ứng trên: 2Al(s) + 3Cl<sub>2</sub>(g) → 2AlCl<sub>3</sub>(s); = 1390,81 kJ","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là 1390,81 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"Lượng nhiệt được giải phóng khi 10 gam AlCl<sub>3</sub> được tạo thành là 52,2 kJ","isCorrect":true},{"id":"d","letter":"D","text":"Để tạo ra được 1,0 kJ nhiệt cần 0,043 gam Al phản ứng với khí chlorine","isCorrect":false}],"explanation":"Đáp án: <br/>a. Sai. 2Al(s) + 3Cl<sub>2</sub>(g) → 2AlCl<sub>3</sub>(s); = -1390,81 kJ.<br/>b. Sai.  Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là -1390,81 kJ/mol.<br/>c. Đúng.<br/> <br/> Cứ 2 mol Al phản ứng tạo thành 2 mol AlCl<sub>3</sub> thì giải phóng nhiệt lượng là 1390,81 kJ<br/>                                                       0,075 mol ---------------------------- x = <br/>d. Sai.<br/>Cứ 2 mol Al phản ứng thì giải phóng nhiệt lượng là 1390,81 kJ<br/>         x = ← 1 kJ                         <br/>             ⇒ m<sub>Al</sub> = 0,0388 gam","explanationImages":[],"points":1,"displayNumber":22},{"id":"hoa10_c5_de3_p3_p3_q1","number":23,"part":3,"type":"short_answer","text":"Phân tử hemoglobin(Hb) trong máu nhận O<sub>2</sub> ở phổi để chuyển thành HbO<sub>2</sub>. Chất này theo máu tới các bộ phận cơ thể, tại đó HbO<sub>2</sub> lại chuyển thành Hb và O<sub>2</sub>( để cung cấp O<sub>2</sub> cho các hoạt động sinh hóa cần thiết trong cơ thể). Nếu trong không khí có lẫn carbon monoxide(CO), cơ thể nhanh chóng bị ngộ độc. Cho các số liệu thực nghiệm sau:<br/>Hb + O<sub>2</sub> → HbO<sub>2</sub>                      = -33,05kJ       (1)<br/>Hb + CO → HbCO                   = -47,28kJ       (2)<br/>HbO<sub>2</sub> + CO → HbCO + O<sub>2</sub>      = -14,23kJ       (3)<br/>HbCO + O<sub>2</sub> → HbO<sub>2</sub> + CO      = 14,23 kJ       (4)<br/>Liệt kê các phản ứng tỏa nhiệt theo số thứ tự tăng dần (ví dụ: 134, 24,...)","images":[],"correctAnswer":"123","explanation":"Đáp án: 123","explanationImages":[],"points":0.5,"displayNumber":23},{"id":"hoa10_c5_de3_p3_p3_q2","number":24,"part":3,"type":"short_answer","text":"Cho các trường hợp sau:<br/>(1) Nước bay hơi.<br/>(2) Nước đóng băng.<br/>(3) Cồn cháy trong không khí.<br/>(4) Pha viên sủi vitamin C vào nước.<br/>(5) Phản ứng tạo gỉ sắt.<br/>Có bao nhiêu quá trình thu nhiệt trong các trường hợp trên?","images":[],"correctAnswer":"2","explanation":"Đáp án: 2","explanationImages":[],"points":0.5,"displayNumber":24},{"id":"hoa10_c5_de3_p3_p3_q3","number":25,"part":3,"type":"short_answer","text":"Khi dẫn hơi nước qua than nóng đỏ thu được khí than, là hỗn hợp của carbonmonoxide và hydrogen:<br/>Tính sự biến đổi enthalpy chuẩn của phản ứng (1) theo đơn vị kJ từ những phương trình phản ứng hóa học và sự biến đổi enthalpy chuẩn:<br/>(Làm tròn kết quả đến hàng đơn vị)","images":[],"correctAnswer":"131","explanation":"Đáp án: 131","explanationImages":[],"points":0.5,"displayNumber":25},{"id":"hoa10_c5_de3_p3_p3_q4","number":26,"part":3,"type":"short_answer","text":"Cho phản ứng đốt cháy butane sau:<br/>C<sub>4</sub>H<sub>10</sub>(g)  +  O<sub>2</sub>(g)   CO<sub>2</sub>(g)  +  H<sub>2</sub>O(g)(1)<br/>Biết năng lượng liên kết trong các hợp chất cho trong bảng sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>Phân tử</td><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td><td class='border border-slate-300 p-1.5'>Liên kết</td><td class='border border-slate-300 p-1.5'>Phân tử</td><td class='border border-slate-300 p-1.5'>E b  (kJ/mol)</td></tr><tr><td class='border border-slate-300 p-1.5'>C – C</td><td class='border border-slate-300 p-1.5'>C 4 H 10</td><td class='border border-slate-300 p-1.5'>346</td><td class='border border-slate-300 p-1.5'>C = O</td><td class='border border-slate-300 p-1.5'>CO 2</td><td class='border border-slate-300 p-1.5'>799</td></tr><tr><td class='border border-slate-300 p-1.5'>C – H</td><td class='border border-slate-300 p-1.5'>C 4 H 10</td><td class='border border-slate-300 p-1.5'>418</td><td class='border border-slate-300 p-1.5'>O – H</td><td class='border border-slate-300 p-1.5'>H 2 O</td><td class='border border-slate-300 p-1.5'>467</td></tr><tr><td class='border border-slate-300 p-1.5'>O = O</td><td class='border border-slate-300 p-1.5'>O 2</td><td class='border border-slate-300 p-1.5'>495</td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td><td class='border border-slate-300 p-1.5'></td></tr></table><br/>Một bình gas chứa 12 kg butane có thể đun sôi bao nhiêu ấm nước (Làm tròn kết quả đến hàng đơn vị)? Giả thiết mỗi ấm nước chứa 2 L nước ở 25<sup>0</sup>C, nhiệt dung của nước là 4,2 J/g.K, có 40% nhiệt đốt cháy butane bị thất thoát ra ngoài môi trường","images":[],"correctAnswer":"918","explanation":"Đáp án: 918.<br/>C<sub>4</sub>H<sub>10</sub>(g)  +  O<sub>2</sub>(g)   4CO<sub>2</sub>(g)  +  5H<sub>2</sub>O(g)<br/>3.E<sub>C-C</sub> + 10.E<sub>C-H</sub> + 6,5.E<sub>O=O</sub> – 4.2.E<sub>C=O</sub> – 5.2.E<sub>O-H</sub><br/>               = 3.346 + 10.418 + 6,5.495 – 8.799 – 10.467 = - 2626,5 (kJ).<br/>Nhiệt cần đun 1 ấm nước: 2.10<sup>3</sup>.4,2.(100 – 25) = 630 000 (J) = 630 (kJ).<br/>Số ấm nước:  (ấm nước)","explanationImages":[],"points":0.5,"displayNumber":26},{"id":"hoa10_c5_de3_p3_p3_q5","number":27,"part":3,"type":"short_answer","text":"Tiến hành quá trình ozone hoá 100 g oxygen theo phản ứng sau:<br/>3O<sub>2</sub>(g) (oxygen)  2O<sub>3</sub>(g) (ozone)<br/>Hỗn hợp thu được có chứa 24% ozone về khối lượng, tiêu tốn 71,2 kJ. Nhiệt tạo thành  của ozone (kJ/mol) có giá trị là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"142","explanation":"Đáp án: 142.<br/>Số mol của O<sub>3</sub> = ⇒  (kJ)<br/> =  (kJ)<br/>=>  = 142,4 (kJ/mol)","explanationImages":[],"points":0.5,"displayNumber":27},{"id":"hoa10_c5_de3_p3_p3_q6","number":28,"part":3,"type":"short_answer","text":"Lactic acid hay acid sữa là hợp chất hoá học đóng vai trò quan trọng trong nhiều quá trình sinh hoá, lần đầu tiên được phân tách vào năm 1780 bởi nhà hoá học Thuỵ Điền Carl Wilhelm Scheele. Lactic acid có công thức phân tử C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>, công A thức câu tạo CH<sub>3</sub>-CH(OH)-COOH.<br/>Khi vận động mạnh cơ thề không đủ cung cấp oxygen, thì cơ thề sẽ chuyền hoá glucose thành lactic acid từ các tế bào đề cung cấp năng lượng cho cơ thề (lactic acid tạo thành từ quá trình này sẽ gây mỏi cơ) theo phương trình sau:<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(aq)  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>(aq)  = -150 kJ<br/>Biết rằng cơ thề chỉ cung cấp 98% năng lượng nhờ oxygen, năng lượng còn lại nhờ vào sự chuyền hoá glucose thành lactic acid.<br/>Giả sử một người chạy bộ trong một thời gian tiêu tốn 300 kcal. Khối lượng lactic acid tạo ra từ quá trình chuyền hoá đó là bao nhiêu gam (biết 1 cal = 4,184 J)? (Kết quả làm tròn đến hàng đơn vị)","images":[],"correctAnswer":"30","explanation":"Đáp án: 30.<br/>Tính khối lượng lactic acid tạo ra từ quá trình chạy bộ. Năng lượng cùa sự chuyển hoá glucose thành lactic acid trong quá trình chạy bộ chiếm 2%300 kcal = 6 kcal = 6 000 cal  25 104 J = 25,104 kJ.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> ;  =  -150 kJ<br/>0,335 mol           -25,104 kJ<br/>Khối lượng lactic acid được tạo ra trong quá trình chuyển hoá: 0,335.90 = 30,1 g.<br/>------------------------- HẾT -------------------------<br/>------------------------- HẾT -------------------------","explanationImages":[],"points":0.5,"displayNumber":28}]},{"id":"hoa10_c5_de4","code":"ĐỀ 504","title":"Đề kiểm tra Ôn tập Toàn diện Chương 5 (Đề số 4)","topic":"Đề thi chuẩn cấu trúc Bộ GD&ĐT 2025 bao quát toàn bộ Năng Lượng Hóa Học","badge":"Chương 5 - Đề 4","duration":50,"totalQuestions":28,"totalPoints":10,"questions":[{"id":"hoa10_c5_de4_p1_p1_q1","number":1,"part":1,"type":"multiple_choice","text":"Phản ứng tỏa nhiệt là phản ứng hóa học trong đó","images":[],"options":[{"id":"a","letter":"A","text":"có sự giải phóng nhiệt năng ra môi trường","isCorrect":false},{"id":"b","letter":"B","text":"có sự hấp thụ nhiệt năng từ môi trường","isCorrect":false},{"id":"c","letter":"C","text":"không có sự giải phóng nhiệt năng ra môi trường","isCorrect":false},{"id":"d","letter":"D","text":"có sự giải phóng quang năng ra môi trường","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":1},{"id":"hoa10_c5_de4_p1_p1_q2","number":2,"part":1,"type":"multiple_choice","text":"Kí hiệu enthalpy tạo thành (nhiệt tạo thành) của một phản ứng ở điều kiện chuẩn là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":2},{"id":"hoa10_c5_de4_p1_p1_q3","number":3,"part":1,"type":"multiple_choice","text":"Cho phản ứng đốt cháy các chất: C(s), CH<sub>3</sub>OH(l), CH<sub>4</sub>(g), C<sub>4</sub>H<sub>10</sub>(g) như sau:<br/>(1) C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)  = –393,5 kJ<br/>(2) CH<sub>3</sub>OH(l) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)  = –726 kJ<br/>(3) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  = –890,36 kJ<br/>(4) C<sub>2</sub>H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)  = –2877,04 kJ<br/>Đốt cháy lần lượt 1 mol các chất trên, phản ứng tỏa ra lượng nhiệt nhiều nhất là","images":[],"options":[{"id":"a","letter":"A","text":"(1)","isCorrect":false},{"id":"b","letter":"B","text":"(2)","isCorrect":false},{"id":"c","letter":"C","text":"(3)","isCorrect":false},{"id":"d","letter":"D","text":"(4)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":3},{"id":"hoa10_c5_de4_p1_p1_q4","number":4,"part":1,"type":"multiple_choice","text":"Điều kiện nào sau đây là điều kiện chuẩn đối với chất khí?","images":[],"options":[{"id":"a","letter":"A","text":"Áp suất 1 bar và nhiệt độ 25 <sup>o</sup>C hay 298K","isCorrect":false},{"id":"b","letter":"B","text":"Áp suất 1 bar và nhiệt độ 298K","isCorrect":false},{"id":"c","letter":"C","text":"Áp suất 1 bar và nhiệt độ 25 <sup>o</sup>","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"Áp suất 1 bar và nhiệt độ 25K","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":4},{"id":"hoa10_c5_de4_p1_p1_q5","number":5,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học sau:<br/>H<sub>2</sub> (g) + I<sub>2</sub> (g)  2HI (g)<br/>Phát biểu nào sau đây về sự trao đổi năng lượng của phản ứng trên là đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng giải phóng nhiệt lượng 11,3 kJ khi 2 mol HI được tạo thành","isCorrect":false},{"id":"b","letter":"B","text":"Tổng nhiệt phá vỡ liên kết của chất phản ứng lớn hơn nhiệt tỏa ra khi tạo thành sản phẩm","isCorrect":false},{"id":"c","letter":"C","text":"Năng lượng chứa trong H<sub>2</sub> và I<sub>2</sub> cao hơn trong HI","isCorrect":false},{"id":"d","letter":"D","text":"Phản ứng xảy ra với tốc độ chậm","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":5},{"id":"hoa10_c5_de4_p1_p1_q6","number":6,"part":1,"type":"multiple_choice","text":"Phản ứng chuyển hóa giữa hai dạng đơn chất của phosphorus (P):<br/>P (s, đỏ)  P (s, trắng)<br/>Điều này chứng tỏ phản ứng:","images":[],"options":[{"id":"a","letter":"A","text":"thu nhiệt, P đỏ bền hơn P trắng","isCorrect":false},{"id":"b","letter":"B","text":"thu nhiệt, P trắng bền hơn P đỏ","isCorrect":false},{"id":"c","letter":"C","text":"tỏa nhiệt, P đỏ bền hơn P trắng","isCorrect":false},{"id":"d","letter":"D","text":"tỏa nhiệt, P trắng bền hơn P đỏ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":6},{"id":"hoa10_c5_de4_p1_p1_q7","number":7,"part":1,"type":"multiple_choice","text":"Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Các phản ứng phân hủy thường là phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Phản ứng càng tỏa ra nhiều nhiệt càng dễ tự xảy ra","isCorrect":false},{"id":"c","letter":"C","text":"Các phản ứng oxi hóa chất béo cung cấp nhiệt cho cơ thể","isCorrect":false},{"id":"d","letter":"D","text":"Các phản ứng khi đun nóng đều dễ xảy ra hơn","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":7},{"id":"hoa10_c5_de4_p1_p1_q8","number":8,"part":1,"type":"multiple_choice","text":"Nung nóng hai ống nghiệm chứa NaHCO<sub>3</sub> và P, xảy ra các phản ứng sau:<br/>2NaHCO<sub>3</sub>(s)  Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g)  (1)<br/>4P(s) + 5O<sub>2</sub>(g)  2P<sub>2</sub>O<sub>5</sub>(s)  (2)<br/>Khi ngừng đun nóng, phản ứng (1) dừng lại còn phản ứng (2) tiếp tục xảy ra, chứng tỏ","images":[],"options":[{"id":"a","letter":"A","text":"phản ứng (1) toả nhiệt, phản ứng (2) thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"phản ứng (1) thu nhiệt, phản ứng (2) toả nhiệt","isCorrect":false},{"id":"c","letter":"C","text":"cả 2 phản ứng đều toả nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"cả 2 phản ứng đều thu nhiệt","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":8},{"id":"hoa10_c5_de4_p1_p1_q9","number":9,"part":1,"type":"multiple_choice","text":"Phương trình nhiệt hoá học nào sau đây ứng với sơ đồ biểu diễn biến thiên enthalpy của phản ứng sau:","images":[],"options":[{"id":"a","letter":"A","text":"CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g) → 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    = -394,1 kJ","isCorrect":false},{"id":"b","letter":"B","text":"CI<sub>2</sub>O (g) + 3F<sub>2</sub>O(g) → 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    = +394,1 kJ","isCorrect":false},{"id":"c","letter":"C","text":"2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    = +394,1 kJ","isCorrect":false},{"id":"d","letter":"D","text":"2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    = -394,1 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":9},{"id":"hoa10_c5_de4_p1_p1_q10","number":10,"part":1,"type":"multiple_choice","text":"Nung KNO<sub>3</sub> lên 550<sup>0</sup>C xảy ra phản ứng:<br/>KNO<sub>3</sub>(s)  KNO<sub>2</sub>(s) +<br/>Phản ứng nhiệt phân KNO<sub>3</sub> là phản ứng","images":[],"options":[{"id":"a","letter":"A","text":"toả nhiệt, có < 0","isCorrect":false},{"id":"b","letter":"B","text":"thu nhiệt, có > 0","isCorrect":false},{"id":"c","letter":"C","text":"toả nhiệt, có > 0","isCorrect":false},{"id":"d","letter":"D","text":"thu nhiệt, có < 0","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":10},{"id":"hoa10_c5_de4_p1_p1_q11","number":11,"part":1,"type":"multiple_choice","text":"Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CO<sub>2</sub>(g)  CO(g) + O<sub>2</sub>(g) = +280 kJ<br/>Giá trị của phản ứng: 2CO<sub>2</sub>(g)  2CO(g) + O<sub>2</sub>(g) là","images":[],"options":[{"id":"a","letter":"A","text":"+140 kJ","isCorrect":false},{"id":"b","letter":"B","text":"-1120 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+560 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-420 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":11},{"id":"hoa10_c5_de4_p1_p1_q12","number":12,"part":1,"type":"multiple_choice","text":"Cho phương trình nhiệt hóa học của phản ứng trung hòa sau:<br/>HCl (aq) + NaOH (aq)  NaCl (aq) + H<sub>2</sub>O (l)<br/>Phát biểu nào sau đây không đúng?","images":[],"options":[{"id":"a","letter":"A","text":"Cho 1 mol HCl tác dụng với 1 mol NaOH dư tỏa nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"b","letter":"B","text":"Cho HCl dư tác dụng với 1 mol NaOH thu nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"c","letter":"C","text":"Cho 1 mol HCl tác dụng với 1 mol NaOH tỏa nhiệt lượng là 57,3 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":12},{"id":"hoa10_c5_de4_p1_p1_q13","number":13,"part":1,"type":"multiple_choice","text":"Ở điều kiện chuẩn, công thức tính biến thiên enthalpy của phản ứng theo nhiệt tạo thành là","images":[],"options":[{"id":"a","letter":"A","text":"","isCorrect":false},{"id":"b","letter":"B","text":"","isCorrect":false},{"id":"c","letter":"C","text":"","isCorrect":false},{"id":"d","letter":"D","text":"","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":13},{"id":"hoa10_c5_de4_p1_p1_q14","number":14,"part":1,"type":"multiple_choice","text":"Phosphine (PH<sub>3</sub>) là một chất khí không màu, nhẹ hơn không khí, rất độc và dễ cháy. Khí này thường thoát ra từ xác động vật thối rữa, khi có mặt diphosphine (P<sub>2</sub>H<sub>4</sub>) thường tự bốc cháy trong không khí, đặc biệt ở thời tiết mưa phùn, tạo hiện tượng “ma trơi” ngoài nghĩa địa.<br/>Phản ứng cháy phosphine: 2PH<sub>3</sub>(g) + 4O<sub>2</sub>(g) → P<sub>2</sub>O<sub>5</sub>(s) + 3H<sub>2</sub>O(l)<br/>Biết nhiệt tạo thành chuẩn của các chất cho trong bảng sau:<br/><table class='border-collapse border border-slate-300 my-2 text-xs w-full'><tr><td class='border border-slate-300 p-1.5'>Chất</td><td class='border border-slate-300 p-1.5'>PH 3 (g)</td><td class='border border-slate-300 p-1.5'>P 2 O 5 (s)</td><td class='border border-slate-300 p-1.5'>H 2 O(l)</td></tr><tr><td class='border border-slate-300 p-1.5'>(kJ/mol)</td><td class='border border-slate-300 p-1.5'>5,4</td><td class='border border-slate-300 p-1.5'>-365,8</td><td class='border border-slate-300 p-1.5'>-285,8</td></tr></table><br/>Biến thiên enthalpy chuẩn của phản ứng trên là","images":[],"options":[{"id":"a","letter":"A","text":"-657 kJ","isCorrect":false},{"id":"b","letter":"B","text":"+657 kJ","isCorrect":false},{"id":"c","letter":"C","text":"+1234 kJ","isCorrect":false},{"id":"d","letter":"D","text":"-1234 kJ","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":14},{"id":"hoa10_c5_de4_p1_p1_q15","number":15,"part":1,"type":"multiple_choice","text":"Phản ứng tổng hợp ammonia:<br/>N<sub>2</sub>(g) + 3H<sub>2</sub>(g)  2NH<sub>3</sub>(g)  = -92 kJ<br/>Biết năng lượng liên kết (kJ/mol) của và H – H lần lượt là 946 và 436. Năng lượng liên kết của  trong ammonia là","images":[],"options":[{"id":"a","letter":"A","text":"391 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"361 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"245 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"490 kJ/mol","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":15},{"id":"hoa10_c5_de4_p1_p1_q16","number":16,"part":1,"type":"multiple_choice","text":"Cho các phản ứng sau:<br/>(1) C (s) + CO<sub>2</sub> (g)  2CO<sub>2</sub> (g)<br/>(2) C (s) + H<sub>2</sub>O (g)  CO (g) + H<sub>2</sub> (g)<br/>(3) CO (g) + H<sub>2</sub>O (g)  CO<sub>2</sub> (g) + H<sub>2</sub> (g)<br/>Ở 500K, 1 atm, biến thiên enthalpy của phản ứng (3) có giá trị là","images":[],"options":[{"id":"a","letter":"A","text":"-39,8 kJ","isCorrect":false},{"id":"b","letter":"B","text":"39,8 kJ","isCorrect":false},{"id":"c","letter":"C","text":"-47,00 kJ","isCorrect":false},{"id":"d","letter":"D","text":"106,7 kJ. Đáp án:  (1) C (s) + CO<sub>2</sub> (g)  2CO<sub>2</sub> (g)                           <sub>r</sub>H (1)  (2) C (s) + H<sub>2</sub>O (g)  CO (g) + H<sub>2</sub> (g)                <sub>r</sub>H (2) (3) CO (g) + H<sub>2</sub>O (g)  CO<sub>2</sub> (g) + H<sub>2</sub> (g)           <sub>r</sub>H (3) Lấy phương trình phản ứng (2) trừ phương trình phản ứng (1) được phương trình phản ứng (3) <sub>r</sub>H (3) = <sub>r</sub>H (2) - <sub>r</sub>H (1) = 133,8 – 173,6 = - 39,8 (kJ)","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":16},{"id":"hoa10_c5_de4_p1_p1_q17","number":17,"part":1,"type":"multiple_choice","text":"Cho các phát biểu sau:<br/>(a) Trong phòng thí nghiệm, có thể nhận biết một phản ứng thu nhiệt hoặc tỏa nhiệt bằng cách đo nhiệt độ của phản ứng bằng một nhiệt kế.<br/>(b) Nhiệt độ của hệ phản ứng sẽ tăng lên nếu phản ứng thu nhiệt.<br/>(c) Nhiệt độ của hệ phản ứng sẽ tăng lên nếu phản ứng tỏa nhiệt.<br/>(d) Nhiệt độ của hệ phản ứng sẽ giảm đi nếu phản ứng tỏa nhiệt.<br/>(e) Nhiệt độ của hệ phản ứng sẽ giảm đi nếu phản ứng thu nhiệt.<br/>Số phát biểu không đúng là","images":[],"options":[{"id":"a","letter":"A","text":"2","isCorrect":false},{"id":"b","letter":"B","text":"3","isCorrect":false},{"id":"c","letter":"C","text":"4","isCorrect":false},{"id":"d","letter":"D","text":"5","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":17},{"id":"hoa10_c5_de4_p1_p1_q18","number":18,"part":1,"type":"multiple_choice","text":"Phản ứng đốt cháy ethanol: C<sub>2</sub>H<sub>5</sub>OH (l) + 3O<sub>2</sub> (g)  2CO<sub>2</sub> (g) + 3H<sub>2</sub>O (l)<br/>Đốt cháy hoàn toàn 5 g ethanol, nhiệt tỏa ra làm nóng chảy 447 g nước đá ở 0<sup>o</sup>C. Biết 1 g nước đá nóng chảy hấp thụ nhiệt lượng 333,5 J, biến thiên enthalpy của phản ứng đốt cháy ethanol là","images":[],"options":[{"id":"a","letter":"A","text":"-1371 kJ/mol","isCorrect":false},{"id":"b","letter":"B","text":"-954 kJ/mol","isCorrect":false},{"id":"c","letter":"C","text":"-149 kJ/mol","isCorrect":false},{"id":"d","letter":"D","text":"+149 kJ/mol. Đáp án:  Q = 447.333,5 = 149074,5 J  149 (kJ)  H =","isCorrect":false}],"correctAnswer":"","explanation":"","explanationImages":[],"points":0.25,"displayNumber":18},{"id":"hoa10_c5_de4_p2_p2_q1","number":19,"part":2,"type":"true_false","text":"Mỗi phát biểu sau đây là đúng hay sai?","images":[],"options":[{"id":"a","letter":"A","text":"Biến thiên enthalpy chuẩn của một phản ứng hóa học là lượng nhiệt kèm theo phản ứng đó ở áp suất 1 bar và 27<sup>o</sup>C","isCorrect":false},{"id":"b","letter":"B","text":"Nhiệt (tỏa ra hay thu vào) kèm theo một phản ứng được thực hiện ở 1 bar và 298 K là biến thiên enthalpy chuẩn của phản ứng đó","isCorrect":true},{"id":"c","letter":"C","text":"Một số phản ứng khi xảy ra làm môi trường xung quanh nóng lên là phản ứng thu nhiệt","isCorrect":false},{"id":"d","letter":"D","text":"Một số phản ứng khi xảy ra làm môi trường xung quanh lạnh đi là do các phản ứng này thu nhiệt và lấy nhiệt từ môi trường","isCorrect":true}],"explanation":"Đáp án: <br/>a. Sai. Nhiệt độ là 25oC.<br/>b. Đúng.<br/>c. Sai. Phản ứng tỏa nhiệt.<br/>d. Đúng","explanationImages":[],"points":1,"displayNumber":19},{"id":"hoa10_c5_de4_p2_p2_q2","number":20,"part":2,"type":"true_false","text":"Cho phản ứng sau: S(s) + O<sub>2</sub>(g)  SO<sub>2</sub>(g)  và  (SO<sub>2</sub>, g) = – 296,8 kJ/mol","images":[],"options":[{"id":"a","letter":"A","text":"(SO<sub>2</sub>, g) = –296,8 kJ/mol là lượng nhiệt tỏa ra khi tạo ra 1 mol SO<sub>2</sub> (g) từ đơn chất S (s) và O<sub>2</sub> (g), đây là các đơn chất bền nhất ở điều kiện chuẩn","isCorrect":true},{"id":"b","letter":"B","text":"Ở điều kiện chuẩn,  (S, s) = 0","isCorrect":true},{"id":"c","letter":"C","text":"Biến thiên enthalpy chuẩn của phản ứng là 296,9 kJ","isCorrect":false},{"id":"d","letter":"D","text":"Hợp chất SO<sub>2</sub>(g) kém bền hơn về mặt năng lượng so với các đơn chất bền S (s) và O<sub>2</sub> (g)","isCorrect":false}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy của phản ứng là -296,8 kJ.<br/>d. Sai. Vì  (SO<sub>2</sub>, g) < 0, chất này bền hơn các đơn chất tạo nên nó","explanationImages":[],"points":1,"displayNumber":20},{"id":"hoa10_c5_de4_p2_p2_q3","number":21,"part":2,"type":"true_false","text":"Cho phản ứng đốt cháy methane (CH<sub>4</sub>) và acetylene (C<sub>2</sub>H<sub>2</sub>) như sau:<br/>(1) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)<br/>(2) C<sub>2</sub>H<sub>2</sub>(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)","images":[],"options":[{"id":"a","letter":"A","text":"Cả hai phản ứng trên đều là phản ứng tỏa nhiệt","isCorrect":true},{"id":"b","letter":"B","text":"Khi đốt cháy cùng một lượng thể tích khí CH<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> thì lượng nhiệt sinh ra do CH<sub>4</sub> nhiều hơn lượng nhiệt sinh ra do C<sub>2</sub>H<sub>2</sub>","isCorrect":false},{"id":"c","letter":"C","text":"Biến thiên enthalpy của phản ứng (1) tính theo năng lượng liên kết có công thức:","isCorrect":false},{"id":"d","letter":"D","text":"Trong thực tế, để hàn, cắt kim loại người ta sử dụng khí C<sub>2</sub>H<sub>2</sub> mà không dùng khí CH<sub>4</sub>","isCorrect":true}],"explanation":"Đáp án: <br/>a. Đúng.<br/>b. Sai. C<sub>2</sub>H<sub>2</sub> cháy tỏa nhiều nhiệt hơn CH<sub>4</sub>.<br/>c. Sai. Công thức trên là tính theo nhiệt tạo thành.<br/>d. Đúng","explanationImages":[],"points":1,"displayNumber":21},{"id":"hoa10_c5_de4_p2_p2_q4","number":22,"part":2,"type":"true_false","text":"Đường sucrose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) là một đường đôi. Trong môi trường acid ở dạ dày và nhiệt độ cơ thể, sucrose bị thủy phân thành đường glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) và fructose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), sau đó bị oxi hóa bởi oxygen tạo thành CO<sub>2</sub> và H<sub>2</sub>O. Sơ đồ thay đổi năng lượng hóa học của phản ứng được cho hình dưới đây:","images":[],"options":[{"id":"a","letter":"A","text":"Phản ứng trong sơ đồ trên là phản ứng thu nhiệt","isCorrect":false},{"id":"b","letter":"B","text":"Phương trình nhiệt hóa học trong sơ đồ trên là C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s)+ 6O<sub>2</sub>(g) → 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l)","isCorrect":false},{"id":"c","letter":"C","text":"Năng lượng các chất tham gia phản ứng nhỏ hơn năng lượng các chất sản phẩm","isCorrect":false},{"id":"d","letter":"D","text":"Khi 1 mol đường sucrose bị đốt cháy hoàn toàn với một lượng vừa đủ oxygen ở điều kiện chuẩn tỏa ra một lượng nhiệt là 5645kJ thì biến thiến enthalpy chuẩn của phản ứng oxi hóa 5 g sucrose là –82,5 kJ","isCorrect":true}],"explanation":"Đáp án:<br/>a. Sai. Phản ứng đó tỏa nhiệt vì có biến thiên enthalpy âm.<br/>b. Sai. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s)+ 6O<sub>2</sub>(g) → 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l); .<br/>c. Sai. Năng lượng các chất tham gia phản ứng lớn hơn năng lượng các chất sản phẩm.<br/>d. Đúng. C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>(s)+ 12O<sub>2</sub>(g) → 12CO<sub>2</sub>(g) + 11H<sub>2</sub>O(l)<br/>Biến thiên enthalpy chuẩn của phản ứng là -5645kJ.<br/>Biến thiên enthalpy của quá trình =","explanationImages":[],"points":1,"displayNumber":22},{"id":"hoa10_c5_de4_p3_p3_q1","number":23,"part":3,"type":"short_answer","text":"Dựa vào phương trình nhiệt hóa học của các phản ứng sau :<br/>(1) CS<sub>2</sub>(l)  + 3O<sub>2</sub>(g) CO<sub>2</sub>(g)   +   2 SO<sub>2</sub>(g)        = –1110,21 kJ<br/>(2) CO<sub>2</sub>(g)  CO(g) +  O<sub>2</sub>(g)        = +280,00 kJ<br/>(3) 2Na(s) +2H<sub>2</sub>O(l) 2NaOH(aq) + H<sub>2</sub>(g) = –367,50 kJ<br/>(4) ZnSO<sub>4</sub>(s)  ZnO(s) +  SO<sub>2</sub>(g)                         = +235,21 kJ<br/>(5) 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) 2SO<sub>3</sub>(g)      = –197kJ<br/>Liệt kê các phản ứng tỏa nhiệt theo số thứ tự tăng dần (ví dụ: 123, 25,...)","images":[],"correctAnswer":"135","explanation":"Đáp án: 135","explanationImages":[],"points":0.5,"displayNumber":23},{"id":"hoa10_c5_de4_p3_p3_q2","number":24,"part":3,"type":"short_answer","text":"Cho các quá trình sau:<br/>(a) Nước hóa rắn.<br/>(b) Sự tiêu hóa thức ăn.<br/>(c) Quá trình chạy của con người.<br/>(d) Khí CH<sub>4</sub> đốt ở trong lò.<br/>(e) Hòa tan KBr vào nước làm cho nước trở nên lạnh.<br/>(f) Sulfuric acid đặc khi thêm vào nước làm cho nước nóng lên.<br/>Có bao nhiêu quá trình thu nhiệt trong số các quá trình trên?","images":[],"correctAnswer":"2","explanation":"Đáp án: 2","explanationImages":[],"points":0.5,"displayNumber":24},{"id":"hoa10_c5_de4_p3_p3_q3","number":25,"part":3,"type":"short_answer","text":"Cho các sau đây: C(graphite, s); CO(g); O<sub>2</sub>(l); Fe(s); SO<sub>2</sub>(g), H<sub>2</sub>O(l). Có bao nhiêu chất trong dãy chất trên có nhiệt tạo thành chuẩn bằng 0?","images":[],"correctAnswer":"3","explanation":"Đáp án: 3","explanationImages":[],"points":0.5,"displayNumber":25},{"id":"hoa10_c5_de4_p3_p3_q4","number":26,"part":3,"type":"short_answer","text":"Cho phản ứng sau: CHCH(g) + H<sub>2</sub>(g) CH<sub>3</sub>-CH<sub>3</sub>(g).<br/>Năng lượng liên kết (kJ/mol) của H – H là 436, của C – C là 347, của C – H là 414 và của CC là 839. Biến thiên enthalpy của phản ứng là bao nhiêu kJ?","images":[],"correctAnswer":"-292","explanation":"Đáp án: -292.<br/>∆<sub>r</sub>H = 2E<sub>(C-H)</sub> + E<sub>(C≡C)</sub> + 2E<sub>(H-H)</sub> – 6E<sub>(C-H)</sub> – E<sub>(C-C)</sub> = (2.414) + 839 + (2.436) – (6.414) – 347 = -292 kJ","explanationImages":[],"points":0.5,"displayNumber":26},{"id":"hoa10_c5_de4_p3_p3_q5","number":27,"part":3,"type":"short_answer","text":"Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau:<br/>NH<sub>4</sub>NO<sub>3</sub> (s) + H<sub>2</sub>O (l) NH<sub>4</sub>NO<sub>3</sub> (aq)<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Sau khi muối tan hết, nước trong bình có nhiệt độ là bao nhiêu độ C? (Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"18,8","explanation":"Đáp án: 18,8.<br/>80g NH<sub>4</sub>NO<sub>3</sub>  1 mol  Q = 26 (kJ)<br/>H > 0, quá trình hòa tan thu nhiệt, nhiệt độ giảm đi một lượng là:<br/>T =   Nhiệt độ cuối cùng là 25 – 6,2 = 18,8<sup>0</sup>C","explanationImages":[],"points":0.5,"displayNumber":27},{"id":"hoa10_c5_de4_p3_p3_q6","number":28,"part":3,"type":"short_answer","text":"Ở điều kiện chuẩn, cần phải đốt cháy hoàn toàn bao nhiêu gam  để cung cấp nhiệt cho phản ứng tạo 1 mol  bằng cách nung  Giả thiết hiệu suất các quá trình đều là 100%. Phương trình nhiệt của phản ứng nung vôi và đốt cháy CH<sub>4</sub> như sau:<br/>(1)<br/>(2)<br/>(Kết quả làm tròn đến hàng phần mười)","images":[],"correctAnswer":"3,2","explanation":"Đáp án: 3,2.<br/>Ta có phản ứng nung vôi: <br/>Tức là để tạo 1 mol CaO cần cung cấp 178,29 kJphản ứng đốt cháy  cần tỏa ra 178,29 kJ<br/>Mà ta có phản ứng đốt cháy  <br/>Đốt cháy 1 mol  tỏa ra 890,36 kJ<br/>Đốt cháy x mol  tỏa ra 178,29 kJ<br/>khối lượng  cần dùng để đốt cháy là: <br/>------------------------- HẾT -------------------------","explanationImages":[],"points":0.5,"displayNumber":28}]}]}};

export const HOA10_CHUONG5_LESSONS: Chuong5Lesson[] = Object.values(HOA10_CHUONG5_MASTER);

export const HOA10_CHUONG5_EXAMS: Chuong5Exam[] = [
  {
    "id": "hoa10_c5_de1",
    "code": "10-C5-01",
    "title": "Đề Kiểm Tra Chương 5: Năng Lượng Hóa Học (Đề số 1)",
    "topic": "Phản ứng tỏa nhiệt, thu nhiệt, enthalpy chuẩn & biến thiên enthalpy",
    "badge": "Chương 5 • Đề 1",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10,
    "questions": [
      {
        "id": "hoa10_c5_de1_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quy ước về dấu của nhiệt phản ứng ( or298HD ) nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thu nhiệt có  or298HD < 0",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thu nhiệt có  or298HD > 0.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng tỏa nhiệt có  or298HD > 0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thu nhiệt có  or298HD = 0.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> Phản ứng thu nhiệt có  or298HD > 0..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_c5_de1_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điều kiện chuẩn đối với chất khí là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "áp suất 1 bar và nhiệt độ 25 °C hay 298 K",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "áp suất 1 bar và nhiệt độ 298 K hay 25 K.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "áp suất 1 bar và nhiệt độ 25 °C",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "áp suất 1 bar và nhiệt độ 25 K.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> áp suất 1 bar và nhiệt độ 25 <sup>o</sup>C hay 298K.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_c5_de1_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt tạo thành chuẩn của một chất là nhiệt lượng tạo thành x mol chất đó từ các đơn chất bền vững nhât ở điều kiện chuẩn. Giá trị của x là",
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
            "text": "0.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_c5_de1_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kí hiệu enthalpy tạo thành (nhiệt tạo thành) của phản ứng ở điều kiện chuẩn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "or298HD",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "of298HD",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "0r298SD",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "fHD .",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> of298HD.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_c5_de1_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt lượng tỏa ra hay thu vào của một phản ứng ở một điều kiện xác định được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "nhiệt lượng tỏa ra",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "nhiệt lượng thu vào.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "biến thiên enthalpy",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "biến thiên năng lượng.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> nhiệt lượng thu vào..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_c5_de1_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Năng lượng hóa học của một số phản ứng được ghi ở các sơ đồ dưới, sơ đồ nào biểu thị phản ứng H < 0?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Sơ đồ A",
            "image": "/assets/hoa10/c5/hoa10_c5_de1_image9.png",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Sơ đồ B",
            "image": "/assets/hoa10/c5/hoa10_c5_de1_image10.png",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sơ đồ C",
            "image": "/assets/hoa10/c5/hoa10_c5_de1_image11.png",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sơ đồ D",
            "image": "/assets/hoa10/c5/hoa10_c5_de1_image12.png",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng: D.</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_c5_de1_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Enthalpy tạo thành chuẩn của các đơn chất bền bằng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+1 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "-1 kJ.mol<sup>-1</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+2 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0 kJ.mol<sup>-1</sup>.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> -1 kJ.mol<sup>-1</sup>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_c5_de1_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện chuẩn, phản ứng của 2 mol Na (thể rắn) với 1/2 mol O<sub>2</sub> (thể khí) thu được 1 mol Na<sub>2</sub>O (thể rắn) giải phóng 417,98 kJ mol<sup>-1</sup>. Phản ứng trên được biểu diễn như sau:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2Na<sub>(s)</sub> +  12 O<sub>2(g)</sub> → Na<sub>2</sub>O<sub>(s)</sub>  or298HD = 417,98 kJ.mol<sup>-1</sup>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2Na<sub>(s)</sub> +  12 O<sub>2(g)</sub>→ Na<sub>2</sub>O<sub>(s)</sub>  or298HD = –417,98 kJ.mol<sup>-1</sup>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "4Na<sub>(s)</sub> + O<sub>2(g)</sub> → 2Na<sub>2</sub>O<sub>(s)</sub>  or298HD = –417,98 kJ.mol<sup>-1</sup>.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "4Na<sub>(s)</sub> + O<sub>2(g)</sub> → 2Na<sub>2</sub>O<sub>(s)</sub>  or298HD = 417,98 kJ.mol<sup>-1</sup>.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> 4Na<sub>(s)</sub> + O<sub>2(g)</sub> → 2Na<sub>2</sub>O<sub>(s)</sub>  or298HD = –417,98 kJ.mol<sup>-1</sup>..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_c5_de1_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nung nóng hai ống nghiệm chứa CaCO<sub>3</sub> và P, xảy ra các phản ứng sau:<br/>4P(s) + 5O<sub>2</sub>(g)  ¾¾®  2P<sub>2</sub>O<sub>5</sub>(s)(1)<br/>CaCO<sub>3(s)</sub> → CaO<sub>(s)</sub> + CO<sub>2(s)</sub> (2)<br/>Khi ngừng đun nóng, phản ứng (2) dừng lại còn phản ứng (1) tiếp tục xảy ra, chứng tỏ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phản ứng (1) toả nhiệt, phản ứng (2) thu nhiệt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng (1) thu nhiệt, phản ứng (2) toả nhiệt.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cả 2 phản ứng đều toả nhiệt.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cả 2 phản ứng đều thu nhiệt.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> phản ứng (1) toả nhiệt, phản ứng (2) thu nhiệt..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_c5_de1_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình nhiệt hóa học sau: 2H<sub>2</sub> (g) + O<sub>2</sub> (g) ⟶ 2H<sub>2</sub>O (g)      298DorH  = − 483,64 kJ<br/>So sánh đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "∑ of298HD  (cđ) > ∑ of298HD  (sp)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "∑ of298HD  (cđ) = ∑ of298HD  (sp).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "∑ of298HD  (cđ) < ∑ of298HD  (sp)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "∑ of298HD  (cđ) ≤ ∑ of298HD  (sp).",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> ∑ of298HD  (cđ) > ∑ of298HD  (sp).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_c5_de1_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng:  2(g)2(g)3(g)13NHNH22+® . Biết enthalpy tạo thành chuẩn của NH<sub>3</sub> là –45,9 kJ.mol<sup>-1</sup>. Để thu được 2 mol NH<sub>3</sub> ở cùng điều kiện phản ứng thì lượng nhiệt",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tỏa ra là –45,9 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "thu vào là 45,9 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tỏa ra là 91,8 kJ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "thu vào là 91,8 kJ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> tỏa ra là 91,8 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_c5_de1_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các đêm trại Hè, thường có hoạt động đốt lửa trại kết hợp giao lưu văn nghệ. Càng lại gần đám lửa ta càng thấy nóng hơn vì",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "quá trình củi cháy là tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "quá trình củi cháy thu nhiệt.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "đi lại nhiều nên thấy nóng",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "nhiệt độ cơ thể cao hơn nhiệt độ ngoài trời.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> quá trình củi cháy là tỏa nhiệt.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_c5_de1_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng: H<sub>2</sub>(g) + Cl<sub>2</sub>(g) → 2HCl(g). Ở điều kiện chuẩn, cứ 1 mol H<sub>2</sub> phản ứng hết sẽ tỏa ra -184,6 kJ. Enthalpy tạo thành chuẩn của HCl(g) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "92,3 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–92,3 kJ.mol<sup>-1</sup>",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "184,6 kJ.mol<sup>-1</sup>",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–184,6 kJ.mol<sup>-1</sup>.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> –92,3 kJ.mol<sup>-1</sup>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_c5_de1_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng đốt cháy methane (CH<sub>4</sub>) như sau:<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  ¾¾®  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  or298HD  = -890,36 kJ<br/>Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tỏa rất nhiều nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở điều kiện chuẩn, khi đốt cháy hoàn toàn 1 mol CH<sub>4</sub>, sản phẩm là CO<sub>2(g)</sub> và H<sub>2</sub>O<sub>(l)</sub> thì sẽ giải phóng một nhiệt lượng là 890,36 kJ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cũng phản ứng này, nếu nước ở thể hơi thì giá trị  or298HD  không thay đổi.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "or298HD  chính là nhiệt tỏa ra kèm theo phản ứng đốt cháy methane ở điều kiện chuẩn.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> Cũng phản ứng này, nếu nước ở thể hơi thì giá trị  or298HD  không thay đổi..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_c5_de1_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng giữa bột nhôm (aluminium) với oxygen có phương trình nhiệt hóa học như sau:<br/>4Al(s) + 3O<sub>2</sub>(g) → 2Al<sub>2</sub>O<sub>3</sub>(s) ∆<sub>r</sub>H<sup>0</sup><sub>298</sub> = -3352 kJ<br/>Nhiệt lượng thoát ra khi đốt cháy 24,3 gam bột nhôm là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "–3016,8 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–754,2 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "–1508,4 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–3724,4 kJ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> –3016,8 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_c5_de1_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình nhiệt hóa học đốt cháy acetylene (C<sub>2</sub>H<sub>2</sub>), methane (CH<sub>4</sub>) và C(graphite, s):<br/>2C<sub>2</sub>H<sub>2</sub>(g) + 5O<sub>2</sub>(g) → 4CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)    D=-or298H2243,6kJ<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g)        0r298ÄH = - 668 kJ<br/>C(graphite, s) + O<sub>2</sub>(g)  ¾¾®  CO<sub>2</sub>(g)  0r298ÄH  = -393,51 kJ<br/>Từ 3 phương trình trên ta nên chọn nhiên liệu nào để có thể ứng dụng hàn xì kim loại?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Acetylene (C<sub>2</sub>H<sub>2</sub>)",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Methane (CH<sub>4</sub>)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C(graphite, s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cả ba phương trình.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> Acetylene (C<sub>2</sub>H<sub>2</sub>).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_c5_de1_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng: 4HCl (g) + O<sub>2</sub> (g)  ot¾¾®  2Cl<sub>2</sub> (g) + 2H<sub>2</sub>O (g)<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Chất</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">H-Cl</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O=O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cl<sup>-</sup>Cl</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O-H</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Eb (kJ/mol)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">427</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">498</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">243</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">467</td></tr></table></div><br/>Biến thiên enthalpy chuẩn của phản ứng trên tính theo năng lượng liên kết là bao nhiêu? Phản ứng tỏa nhiệt hay thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "298DorH = −148 kJ, phản ứng tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "298DorH = −148 kJ, phản ứng thu nhiệt.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "298DorH = 215 kJ, phản ứng tỏa nhiệt",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "298DorH = 215 kJ, phản ứng thu nhiệt.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> 298DorH = −148 kJ, phản ứng tỏa nhiệt.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_c5_de1_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt tạo thành chuẩn tính theo kJ/mol của C<sub>2</sub>H<sub>5</sub>OH(l), CO<sub>2</sub>(g) và H<sub>2</sub>O(l) lần lượt là –267, –393,5 và –285,8. Cần đốt cháy bao nhiêu gam cồn để đun 100 gam nước từ 25<sup>o</sup>C đến 100<sup>o</sup>C (biết nhiệt dung của nước là 4,2 J/g.K)? Giả thiết, cồn là C<sub>2</sub>H<sub>5</sub>OH nguyên chất và có 40% nhiệt lượng thất thoát ra môi trường.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "4,375",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1,748",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2,182",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0,875.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án: B.<br/>QH<sub>2</sub>O thu = m.c.Δt = 100.4,2.(100−25) = 31500J = 31,5kJ<br/>Nhiệt lượng hấp thụ là 100% − 40% = 60%<br/>QC<sub>2</sub>H<sub>5</sub>OH toả = 31,5 : 60% = 52,5kJ",
        "explanationImages": [
          "/assets/hoa10/c5/hoa10_c5_de1_image41.png",
          "/assets/hoa10/c5/hoa10_c5_de1_image42.png",
          "/assets/hoa10/c5/hoa10_c5_de1_image43.png"
        ],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_c5_de1_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Khi các phản ứng hóa học xảy ra thường có sự trao đổi nhiệt với môi trường, làm thay đổi nhiệt độ của môi trường.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tỏa nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Khi than, củi cháy không khí xung quanh ấm hơn do phản ứng tỏa nhiệt.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Pha viên C sủi vitamin C vào nước, khi viên C sủi tan thấy cốc nước mát hơn là do phản ứng thu nhiệt.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_c5_de1_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Phản ứng phân hủy 1 mol H<sub>2</sub>O (g) ở điều kiện chuẩn:<br/>H<sub>2</sub>O<sub>(</sub><sub>g</sub><sub>)</sub>→ H<sub>2</sub><sub>(</sub><sub>g</sub><sub>)</sub>+  12 O<sub>2</sub><sub>(</sub><sub>g</sub><sub>)</sub>(1) cần cung cấp một nhiệt lượng là 241,8 kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng (1) là phản ứng tỏa nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt tạo thành chuẩn của H<sub>2</sub>O (g) là -241,8 kJ mol-1.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy chuẩn của phản ứng 2H<sub>2(g)</sub> + O<sub>2(g)</sub> → 2H<sub>2</sub>O<sub>(g)</sub> là -483,6 kJ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Biến thiên enthalpy chuẩn của phản ứng (1) là 124,05 kJ.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Phản ứng thu nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Sai. Biến thiên enthalpy chuẩn của phản ứng (1) là -124,05 kJ.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_c5_de1_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho hai phản ứng cùng xảy ra ở điều kiện chuẩn:<br/>o2(g)2(g)(g)r298(1)o(g)2(g)2(g)r298(2)(1)NO2NOH1(2)NOONOH2+®D+®D",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Enthalpy tạo thành chuẩn của NO là  o1r298(1)1HkJmol.2-D",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Enthalpy tạo thành chuẩn của NO<sub>2</sub> là  o1r298(2)HkJmol.-D",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol N<sub>2</sub> với 1 mol O<sub>2</sub> tạo thành 2 mol NO là  or298(1)1HkJ.2D",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Biến thiên enthalpy chuẩn của phản ứng giữa 1 mol khí NO với 0,5 mol khí  2O  tạo thành 1 mol khí NO<sub>2</sub> là  or298(2)HkJ.D",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai vì phản ứng (2) không phải tạo thành từ các đơn chất.<br/>c. Sai vì biến thiên enthalpy chuẩn của phản ứng giữa 1 mol  2N  với 1 mol  2O  tạo thành 2 mol NO là  or298(1)HkJ.D<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_c5_de1_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Sulfur dioxide là một chất có nhiều ứng dụng trong công nghiệp (dùng để sản xuất sulfuric acid, tẩy trắng bột giấy trong công nghiệp giấy, tẩy trắng dung dịch đường trong sản xuất đường tinh luyện..) và giúp ngăn cản sự phát triển của một số vi khuẩn và nấm gây hại cho thực phẩm. Ở áp suất 1 bar và nhiệt độ 25°C, phản ứng giữa sulfur với oxygen xảy ra theo phương trình<br/>“ S (s) + O<sub>2</sub>(g) → SO<sub>2</sub>(g)” và tỏa ra một lượng nhiệt là 296,9kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Biến thiên enthalpy chuẩn của phản ứng là 296,9 kJ mol<sup>-1</sup>.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Enthalpy tạo thành chuẩn của sulfur dioxide bằng -296,9 kJ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Sulfur dioxide vừa có thể là chất khử vừa có thể là chất oxi hóa, tùy thuộc vào phản ứng mà nó tham gia.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "0,5 mol sulfur tác dụng hết với oxygen giải phóng 148,45kJ năng lượng dưới dạng nhiệt.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Biến thiên enthalpy chuẩn của phản ứng là -196,9kJ.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_c5_de1_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các quá trình sau:<br/>(a) Đốt một ngọn nến.<br/>(b) Nước đóng băng.<br/>(c) Hòa tan một ít bột giặt trong tay với nước thấy tay ấm.<br/>(d) Muối kết tinh từ nước biển ở các ruộng muối.<br/>(e) Đổ mồ hôi sau khi chạy bộ.<br/>Trong các quá trình trên, có bao nhiêu quá trình thu nhiệt?",
        "images": [],
        "correctAnswer": "1",
        "explanation": "Đáp án: 1.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1,
        "acceptedAnswers": [
          "1",
          "1",
          "1"
        ]
      },
      {
        "id": "hoa10_c5_de1_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phương trình nhiệt hóa học của phản ứng: CO<sub>2</sub>(g) → CO(g) +  12 O<sub>2</sub>(g)  298280orHkJD= . Giá trị  298orHD  của phản ứng: 2CO<sub>2</sub>(g) → 2CO(g) + O<sub>2</sub>(g) là bao nhiêu kJ?",
        "images": [],
        "correctAnswer": "560",
        "explanation": "Đáp án: 560.<br/>298orHD = 2x280 = 560 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2,
        "acceptedAnswers": [
          "560",
          "560",
          "560"
        ]
      },
      {
        "id": "hoa10_c5_de1_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Liệt kê các phản ứng có thể tự xảy ra (sau giai đoạn khơi mào ban đầu) theo dãy số thứ tự tăng dần (Ví dụ: 234, 14,...).<br/>(1) 3Fe(s) + 4H<sub>2</sub>O(l)  Fe<sub>3</sub>O<sub>4</sub>(s) + 4H<sub>2</sub>(g)  or298HD = +26,32 kJ<br/>(2) N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g)  or298HD = +179,20 kJ<br/>(3) C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  ¾¾®  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l) 0r298ÄH = -1370,70 kJ<br/>(4) C(graphite, s) + O<sub>2</sub>(g)  ¾¾®  CO<sub>2</sub>(g)  0r298ÄH  = -393,51 kJ",
        "images": [],
        "correctAnswer": "34",
        "explanation": "Đáp án: 34.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3,
        "acceptedAnswers": [
          "34",
          "34",
          "34"
        ]
      },
      {
        "id": "hoa10_c5_de1_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Giá trị trung bình của các năng lượng liên kết ở điều kiện chuẩn:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C-H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C-C</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C=C</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Eb (kJ/mol)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">418</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">346</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">612</td></tr></table></div><br/>Biến thiên enthalpy của phản ứng C<sub>3</sub>H<sub>8</sub> (g)  ¾¾®  CH<sub>4</sub> (g) + C<sub>2</sub>H<sub>4</sub> (g) có giá trị là bao nhiêu kJ?",
        "images": [],
        "correctAnswer": "80",
        "explanation": "Đáp án: 80.",
        "explanationImages": [
          "/assets/hoa10/c5/hoa10_c5_de1_image48.png"
        ],
        "points": 0.25,
        "displayNumber": 4,
        "acceptedAnswers": [
          "80",
          "80",
          "80"
        ]
      },
      {
        "id": "hoa10_c5_de1_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Nhiệt tỏa ra khi đốt cháy 1 gam một mẫu than là 23,0 kJ. Giả thiết rằng toàn bộ lượng nhiệt của quá trình đốt than tỏa ra đều dùng để làm nóng nước, không có sự thất thoát nhiệt, hãy tính khối lượng than (gam) cần phải đốt để làm nóng 500 gam nước từ  o20C  tới  o90C.  Biết để làm nóng 1 mol nước thêm  o1C  cần một nhiệt lượng là 75,4 J. (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "6,4",
        "explanation": "Đáp án: 6,4.<br/>Lượng nhiệt cần dùng để đun nóng 500 gam nước từ  o20C lên  o90C  là<br/>500.75,4.(363293)146611,1(J)18-=<br/>Vậy lượng than đá cần dùng là:  3146611,16,37(g).23.10=",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5,
        "acceptedAnswers": [
          "6,4",
          "6.4",
          "6,4"
        ]
      },
      {
        "id": "hoa10_c5_de1_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các phản ứng sau xảy ra ở điều kiện chuẩn:<br/>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  or298HD  = –890,36 kJ<br/>CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(s)  or298HD = 178,29 kJ<br/>Ở điều kiện tiêu chuẩn, cần phải đốt cháy hoàn toàn bao nhiêu gam CH<sub>4</sub>(g) để cung cấp nhiệt cho phản ứng tạo 2 mol CaO bằng cách nung CaCO<sub>3</sub>. Giả thiết hiệu suất các quá trình đều là 100% (Làm tròn kết quả đến hàng phần mười).",
        "images": [],
        "correctAnswer": "6,4",
        "explanation": "Đáp án: 6,4.<br/>2 mol CaO tạo thành cần cung cấp một nhiệt lượng là 356,58 kJ<br/>Nhiệt lượng của phản ứng nung vôi bằng lượng nhiệt khi đốt x mol khí CH<sub>4</sub>(g)<br/>Theo đề 1 mol khí CH<sub>4</sub> khi đốt tỏa ra một nhiệt lượng 890,36 kJ<br/>x mol 356,58 kJ<br/>x = 0,4 mol  m = 6,4g.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6,
        "acceptedAnswers": [
          "6,4",
          "6.4",
          "6,4"
        ]
      }
    ]
  },
  {
    "id": "hoa10_c5_de2",
    "code": "10-C5-02",
    "title": "Đề Kiểm Tra Chương 5: Năng Lượng Hóa Học (Đề số 2)",
    "topic": "Tính biến thiên enthalpy phản ứng theo nhiệt tạo thành chuẩn",
    "badge": "Chương 5 • Đề 2",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10,
    "questions": [
      {
        "id": "hoa10_c5_de2_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các phản ứng phân hủy thường là phản ứng thu nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng càng tỏa ra nhiều nhiệt càng dễ tự xảy ra.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng oxi hóa chất béo cung cấp nhiệt cho cơ thể.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các phản ứng khi đun nóng đều dễ xảy ra hơn.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> Các phản ứng khi đun nóng đều dễ xảy ra hơn..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_c5_de2_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nhiệt tạo thành chuẩn (∆<sub>f</sub> 0298H ) của các đơn chất ở dạng bền vững nhất là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0 kJ/mol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "3 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 kJ/mol.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> 0 kJ/mol.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_c5_de2_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Quy ước về dấu của nhiệt phản ứng ( or298HD ) nào sau đây là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thu nhiệt có  or298HD < 0",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng tỏa nhiệt có  or298HD > 0.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng thu nhiệt có  or298HD = 0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng tỏa nhiệt có  or298HD < 0.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> Phản ứng tỏa nhiệt có  or298HD < 0..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_c5_de2_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình nhiệt hóa học của phản ứng trung hòa sau :<br/>HCl(aq)  + NaOH(aq)   ¾¾®   NaCl(aq)  +  H<sub>2</sub>O(l)      0r500HD  = -57,3 kJ<br/>Phát biểu nào sau đây không đúng ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho 1 mol HCl tác dụng với 1 mol NaOH tỏa nhiệt lượng là 57,3kJ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3kJ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cho 1 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho HCl dư tác dụng với 1 mol NaOH thu nhiệt lượng là 57,3kJ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3kJ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_c5_de2_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng nhiệt phân CaCO<sub>3</sub>: CaCO<sub>3</sub>(s)  CaO(s) + CO<sub>2</sub>(g). Ở điều kiện chuẩn, để thu được 1 mol CaO(s) từ CaCO<sub>3</sub>(s) cần phải cung cấp 179,2 kJ nhiệt lượng. Phát biểu nào sau đây đúng khi nói về phản ứng trên?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tỏa nhiệt, ∆<sub>r</sub> 0298H = +179,2 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng thu nhiệt, ∆<sub>r</sub> 0298H = –179,2 kJ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng tỏa nhiệt, ∆<sub>r</sub> 0298H = –179,2 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thu nhiệt, ∆<sub>r</sub> 0298H = +179,2 kJ.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> Phản ứng thu nhiệt, ∆<sub>r</sub> 0298H = +179,2 kJ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_c5_de2_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình nhiệt hoá học nào sau đây ứng với sơ đồ biểu diễn biến thiên enthalpy của phản ứng sau:",
        "images": [
          "/assets/hoa10/c5/hoa10_c5_de2_image40.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) → 2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) ∆<sub>r</sub> 0298H  = +1450 kJ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) → 2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) ∆<sub>r</sub> 0298H  = +1450 kJ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) → 2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) ∆<sub>r</sub> 0298H  = -1450 kJ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) → 2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) ∆<sub>r</sub> 0298H  = -1450 kJ.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> 2CH<sub>3</sub>OH (l) + 3O<sub>2</sub>(g) → 2CO<sub>2</sub> (g) + 4H<sub>2</sub>O (l) ∆<sub>r</sub> 0298H  = -1450 kJ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_c5_de2_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "NaOH(aq) + HCl(aq)  NaCl(aq) + H<sub>2</sub>O(l)  ∆<sub>r</sub> 0298H = –57,9 kJ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "H<sub>2</sub>(g) + I<sub>2</sub>(s)  2HI(g)    ∆<sub>r</sub> 0298H = +53,0 kJ.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g)  C<sub>2</sub>H<sub>6</sub>(g)    ∆<sub>r</sub> 0298H = –137,0 kJ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2CO(g) + O<sub>2</sub>(g)  2CO<sub>2</sub>(g)    ∆<sub>r</sub> 0298H = –566,0 kJ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> H<sub>2</sub>(g) + I<sub>2</sub>(s)  2HI(g)    ∆<sub>r</sub> 0298H = +53,0 kJ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_c5_de2_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho biết biến thiên enthalpy của phản ứng sau ở điều kiện chuẩn<br/>CO (g)  +  12  O<sub>2</sub> (g) ¾¾®  CO<sub>2</sub>(g)     0r298HD  = -283,0 kJ<br/>Biết nhiệt tạo thành của CO<sub>2</sub>:  0r298HD (CO<sub>2</sub> (g))  = -393,5 kJ. Nhiệt tạo thành chuẩn của CO là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-141,5 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "+110,5 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "-221,0 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "-110,5 kJ",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng: D.</b>",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_c5_de2_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Hình ảnh nào miêu tả quá trình đang diễn ra sự thu nhiệt?<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\"></th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hình 1. Cây nến đang cháy</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hình 2. Hòa tan đá vào nước</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hình 3. Đốt nhiên liệu trong tên lửa.</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Hình 4. Hòa tan sodium vào nước.</td></tr></table></div>",
        "images": [],
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
            "text": "Hình 3",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hình 2",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hình 4.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> Hình 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_c5_de2_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng chuyển hoá giữa hai dạng đơn chất của phosphorus (P):<br/>P(s, đỏ)  ¾¾® P (s, trắng)    0r298HD  = +17,6 kJ<br/>Điều này chứng tỏ phản ứng:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "tỏa nhiệt, P trắng bền hơn P đỏ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "tỏa nhiệt, P đỏ bền hơn P trắng.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "thu nhiệt, P trắng bền hơn P đỏ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "thu nhiệt, P đỏ bền hơn P trắng.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> thu nhiệt, P đỏ bền hơn P trắng..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_c5_de2_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình nhiệt hóa học giữa nitrogen và oxygen như sau:<br/>N<sub>2</sub>(g) + O<sub>2</sub>(g)  2NO(g)  Dor298H = +180kJ<br/>Kết luận nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng xảy ra thuận lợi ở điều kiện thường.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng tỏa nhiệt.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Nitrogen và oxygen phản ứng mạnh hơn khi ở nhiệt độ thấp.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng hóa học xảy ra có sự hấp thụ nhiệt năng từ môi trường.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> Phản ứng hóa học xảy ra có sự hấp thụ nhiệt năng từ môi trường..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_c5_de2_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình hoá học tổng quát: aA + bB  ¾¾®  mM + nN. Hãy chọn các phương án tính đúng  or298HD  của phản ứng theo nhiệt tạo thành chuẩn ( of298HD ) của các chất A, B, C, D.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "or298HD = m . of298HD  (M) + n . of298HD  (N) – a. of298HD  (A) – b . of298HD  (B).",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "or298HD = a. of298HD  (A) + b . of298HD  (B)   V m . of298HD  (M) – n . of298HD  (N).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "or298HD  = a . E<sub>b</sub>(A) + b . E<sub>b</sub> (B) – m . E<sub>b</sub>(M) – n . E<sub>b</sub> (N).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "or298HD  = m . E<sub>b</sub>(M) + n . E<sub>b</sub> (N)  – a . E<sub>b</sub>(A) – b . E<sub>b</sub> (B).",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> or298HD = m . of298HD  (M) + n . of298HD  (N) – a. of298HD  (A) – b . of298HD  (B)..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_c5_de2_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây có thể tự xảy ra ở điều kiện thường?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng giữa H<sub>2</sub> và O<sub>2</sub> trong hỗn hợp khí",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng nhiệt phân Cu(OH)<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng giữa Zn và dung dịch H<sub>2</sub>SO<sub>4</sub>",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng đốt cháy cồn.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> Phản ứng giữa Zn và dung dịch H<sub>2</sub>SO<sub>4</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_c5_de2_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điều kiện nào sau đây được gọi là điều kiện chuẩn?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 20<sup>o</sup>C (293K).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Áp suất 1,5 bar (đối với chất khí), nồng độ 1,5 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 25<sup>o</sup>C (298K).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Áp suất 1,5 bar (đối với chất khí), nồng độ 1,5 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 20<sup>o</sup>C (293K).",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 25<sup>o</sup>C (298K).",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> Áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 25<sup>o</sup>C (298K)..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_c5_de2_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng đốt cháy ethanol: C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g)  ¾¾®  2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l)<br/>Đốt cháy hoàn toàn 5 g ethanol, nhiệt tỏa ra làm nóng chảy 447 g nước đá ở 0<sup>o</sup>C. Biết 1 g nước đá nóng chảy hấp thụ nhiệt lượng 333,5 J, biến thiên enthalpy của phản ứng đốt cháy ethanol là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-1371 kJ/mol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "-954 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "-149 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "+149 kJ/mol.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án: A.<br/>Q = 447.333,5 = 149074,5 J  149 (kJ)  H =  149.461371()5kJ-=- .",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_c5_de2_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng sau: CH º CH(g) + H<sub>2</sub>(g)  ¾¾® CH<sub>3</sub>-CH<sub>3</sub> (g)<br/>Năng lượng liên kết (kJ/mol) của H – H là 436, của C – C là 347, của C – H là 414 và của C º C là 839. Nhiệt ( 0r298HD ) của phản ứng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "–294 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–292kJ",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+292kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "+294kJ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> –292kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_c5_de2_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dung dịch glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) 5%, có khối lượng riêng là 1,02 g/mL, phản ứng oxi hóa 1 mol glucose tạo thành CO<sub>2</sub> (g) và H<sub>2</sub>O (l) tỏa ra nhiệt lượng là 2803,0 kJ.<br/>Một người bệnh được truyền một chai nước chứa 500 mL dung dịch glucose 5%. Năng lượng tối đa từ phản ứng oxi hóa hoàn toàn glucose mà bệnh nhân đó có thể nhận được là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+397,09 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–397,09 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+416,02 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–416,02 kJ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án: A.<br/>Phản ứng tỏa nhiệt nên  or298H2803,0kJ/molD=-<br/>Số mol glucose:  500.1,02.5%0,14167()180mol=<br/>Q = 2803,0.0,14167 = 397,1 (kJ).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_c5_de2_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu:<br/>(a) Phản ứng tỏa nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt.<br/>(b) Tất cả các phản ứng mà chất tham gia có chứa nguyên tố oxygen đều tỏa nhiệt.<br/>(c) Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt.<br/>(d) Lượng nhiệt mà phản ứng hấp thụ hay giải phóng không phụ thuộc vào điều kiện thực hiện phản ứng và thể tồn tại của chất trong phản ứng.<br/>(e) Sự cháy của nhiên liệu (xăng, dầu, khí gas, than, gỗ,…) là những ví dụ về phản ứng thu nhiệt vì cần khơi mào.<br/>Số phát biểu đúng là",
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
        "explanation": "<b>Phương án đúng là B:</b> 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_c5_de2_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Với các phản ứng có kèm theo trao đổi năng lượng dưới dạng nhiệt, có hai khả năng đó là phản ứng tỏa nhiệt và phản ứng thu nhiệt.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thu nhiệt xảy ra thuận lợi hơn so với phản ứng tỏa nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Biến thiên enthalpy của phản ứng tỏa nhiệt trái dấu với phản ứng thu nhiệt.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng thu nhiệt thường phải cung cấp nhiệt độ liên tục trong quá trình phản ứng.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi cho vôi sống vào nước thấy nhiệt độ tăng so với ban đầu chứng tỏ đây là phản ứng tỏa nhiệt.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Phản ứng tỏa nhiệt thuận lợi hơn thu nhiệt.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_c5_de2_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho phương trình nhiệt hoá học sau:<br/>H<sub>2</sub>(g) + I<sub>2</sub>(g) → 2HI(g)  \\Delta_{\\mathrm{r}} \\mathrm{H}_{298}^0=-283,00 \\mathrm{ kJ}  = +11,3 kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng giải phóng nhiệt lượng 11,3 kJ khi 2 mol HI được tạo thành.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tổng nhiệt phá vỡ liên kết của chất phản ứng lớn hơn nhiệt tỏa ra khi tạo thành sản phẩm.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Năng lượng chứa trong H<sub>2</sub> và I<sub>2</sub> cao hơn trong HI.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng xảy ra với tốc độ chậm.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. ∆H = +11,3 kJ > 0 ⇒ phản ứng thu nhiệt.<br/>b. Đúng.<br/>c. Sai. Phân tử H<sub>2</sub> và I<sub>2</sub> có liên kết bền hơn HI, nghĩa là mức năng lượng thấp hơn.<br/>d. Sai. Không nói về sự trao đổi năng lượng của phản ứng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_c5_de2_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Baking soda (NaHCO<sub>3</sub>) có trong thành phần bột nở dùng để làm bánh và cũng có trong thành phần của thuốc đau dạ dày Nabica, xét phản ứng nhiệt phân NaHCO<sub>3</sub> xảy ra như sau:<br/>2NaHCO<sub>3</sub>(s) → Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l)    \\Delta_{\\mathrm{r}} \\mathrm{H}_{298}^0=-283,00 \\mathrm{ kJ} = +91,6 kJ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng trên có tổng nhiệt tạo thành của chất đầu lớn hơn tổng nhiệt tạo thành của các chất sản phẩm..",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cần tránh để bột nở ở nơi có nhiệt độ cao.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng trên thu vào một nhiệt lượng bằng 91,6 kJ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Nếu thay đổi trạng thái của H<sub>2</sub>O(l) bằng H<sub>2</sub>O(g) thì giá trị biến thiên enthalpy chuẩn của phản ứng không đổi.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Vì  \\Delta_{\\mathrm{r}} \\mathrm{H}_{298}^0=-283,00 \\mathrm{ kJ} > 0 nên tổng nhiệt tạo thành của sản phẩm lớn hơn tổng nhiệt tạo thành của chất đầu.<br/>b. Đúng. Bột nở chứa NaHCO<sub>3</sub> dễ bị phân hủy bởi nhiệt theo phương trình hóa học trên.<br/>c. Đúng.<br/>d. Sai. Nếu thay đổi trạng thái của H<sub>2</sub>O(l) bằng H<sub>2</sub>O(g) thì giá trị biến thiên enthalpy của phản ứng sẽ thay đổi vì nhiệt tạo thành của H<sub>2</sub>O(l) khác H<sub>2</sub>O(g).",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_c5_de2_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng đốt cháy methane (CH<sub>4</sub>) và acetylene (C<sub>2</sub>H<sub>2</sub>) như sau:<br/>(1) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  ¾¾®  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)     0r298H890,5kJD=-<br/>(2) C<sub>2</sub>H<sub>2</sub>(g) +  52 O<sub>2</sub>(g)  ¾¾®  2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)     0r298H1300,2kJD=-",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả hai phản ứng trên đều là phản ứng tỏa nhiệt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi đốt cháy cùng một lượng thể tích khí CH<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> thì lượng nhiệt sinh ra do CH<sub>4</sub> nhiều hơn lượng nhiệt sinh ra do C<sub>2</sub>H<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy của phản ứng (1), (2) tính theo nhiệt tạo thành:",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong thực tế, để hàn, cắt kim loại người ta sử dụng CH<sub>4</sub> mà không dùng C<sub>2</sub>H<sub>2</sub>.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. C<sub>2</sub>H<sub>2</sub> cháy tỏa nhiều nhiệt hơn CH<sub>4</sub>.<br/>c. Đúng.<br/>d. Sai. Người ta dùng C<sub>2</sub>H<sub>2</sub> vì nhiệt lượng tỏa ra nhiều hơn CH<sub>4</sub>.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_c5_de2_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Phản ứng giữa sulfur dioxide và oxygen là tỏa nhiệt<br/>2SO<sub>2</sub>(g) + O<sub>2</sub>(g)  ¾¾® 2SO<sub>3</sub>(g)       0r298HD = –197 kJ<br/>Giá trị biến thiên enthalpy của phản ứng SO<sub>3</sub>(g)  ¾¾® SO<sub>2</sub>  +  12 O<sub>2</sub> (g) là bao nhiêu kJ?",
        "images": [],
        "correctAnswer": "98,5",
        "explanation": "Đáp án: 98,5.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1,
        "acceptedAnswers": [
          "98,5",
          "98.5",
          "98,5"
        ]
      },
      {
        "id": "hoa10_c5_de2_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phương trình nhiệt hóa học của các phản ứng như sau:<br/>CO<sub>2</sub>(g)  ¾¾® CO(g) +  12 O<sub>2</sub>(g)                        298280orHkJD=+<br/>3H<sub>2</sub>(g) + N<sub>2</sub>(g)  ot¾¾® 2NH<sub>3</sub>(g)                        29891,8orHkJD=-<br/>3Fe(s) + 4H<sub>2</sub>O(l)  ¾¾®  Fe<sub>3</sub>O<sub>4</sub>(s) + 4H<sub>2</sub>(g)      29826,32orHkJD=+<br/>2H<sub>2</sub>(g) + O<sub>2</sub>(g)  ¾¾®  2H<sub>2</sub>O(g)                        298571,68orHkJD=-<br/>H<sub>2</sub>(g) + F<sub>2</sub>(g)  ¾¾®  2HF(g)                             298546orHkJD=-<br/>Trong các phản ứng trên, có bao nhiêu phản ứng tỏa nhiệt?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2,
        "acceptedAnswers": [
          "3",
          "3",
          "3"
        ]
      },
      {
        "id": "hoa10_c5_de2_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Quá trình hoà tan calcium chloride trong nước:<br/>CaCl<sub>2</sub>(s)  ¾¾®  Ca<sup>2+</sup>(ag) + 2Cl<sup>-</sup> (ag) 0r298ÄH  = ?<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Chất</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">CaCl<sub>2</sub></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Ca<sup>2+</sup></th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Cl<sup>-</sup></th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">(kJ/mol)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-795,0</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-542,83</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-167,16</td></tr></table></div><br/>Tính biến thiên enthalpy chuẩn của quá trình theo đơn vị kJ. (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "-82",
        "explanation": "Đáp án: -82.<br/>Enthalpy của quá trình:  0r298ÄH  =  -542,83 + 2.(-167,16) – (-795,0) = -82,15 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3,
        "acceptedAnswers": [
          "-82",
          "-82",
          "-82"
        ]
      },
      {
        "id": "hoa10_c5_de2_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các loại phản ứng sau:<br/>(1) Phản ứng tạo gỉ kim loại.<br/>(2) Phản ứng quang hợp.<br/>(3) Phản ứng nhiệt phân.<br/>(4) Phản ứng đốt cháy.<br/>Liệt kê các phản ứng cần cung cấp năng lượng trong suốt quá trình diễn ra phản ứng theo dãy số thứ tự tăng dần (Ví dụ: 1234, 24,…).",
        "images": [],
        "correctAnswer": "23",
        "explanation": "Đáp án: 23.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4,
        "acceptedAnswers": [
          "23",
          "23",
          "23"
        ]
      },
      {
        "id": "hoa10_c5_de2_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Phản ứng tổng hợp ammonia : N<sub>2</sub>(g)  + 3H<sub>2</sub>(g)  ¾¾®  2NH<sub>3</sub>(g)      0r298HD  = –92 kJ<br/>Biết năng lượng liên kết (kJ/mol) của N º N  và H – H lần lượt là 946 và 436<br/>Năng lượng liên kết của N – H trong ammonia là bao nhiêu kJ/mol?",
        "images": [],
        "correctAnswer": "391",
        "explanation": "Đáp án: 391.<br/>0r298HD  = E<sub>b</sub>(N º N ) + 3E<sub>b</sub>(H-H) - 6E<sub>b</sub>(N-H) = 946 + 3.436 - 6E<sub>b</sub>(N-H) = -92  E<sub>b</sub>(N-H) = 391 kJ/mol.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5,
        "acceptedAnswers": [
          "391",
          "391",
          "391"
        ]
      },
      {
        "id": "hoa10_c5_de2_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Một hộ gia đình mua than đá làm nhiên liệu đun nấu và trung bình mỗi ngày dùng hết 1,8 kg than. Giả thiết loại than đá trên chứa 90% carbon và 1,2% sulfur về khối lượng, còn lại là các tạp chất trơ.<br/>Cho các phản ứng:   0to22r298C(s)O(g)CO(g)H393,5kJ/mol+¾¾®D=-<br/>0to22r298S(s)O(g)SO(g)H296,8kJ/mol+¾¾®D=-<br/>Nhiệt lượng cung cấp cho hộ gia đình từ quá trình đốt than trong một ngày tương đương bao nhiêu số điện (1 số điện = 1 kWh = 3600 kJ, làm tròn kết quả đến hàng đơn vị)?",
        "images": [],
        "correctAnswer": "15",
        "explanation": "Đáp án: 15.<br/>Trong 1800 g than đá chứa 1620 gam (135 mol) carbon và 21,6 g (0,675 mol) sulfur.<br/>Nhiệt lượng giải phóng ra khi đốt cháy 1800 gam than đá:  393,5.135296,8.0,67553282,34kJ+=<br/>Nhiệt lượng trên tương đương với số điện:  53282,3414,83600»  số.<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6,
        "acceptedAnswers": [
          "15",
          "15",
          "15"
        ]
      }
    ]
  },
  {
    "id": "hoa10_c5_de3",
    "code": "10-C5-03",
    "title": "Đề Kiểm Tra Chương 5: Năng Lượng Hóa Học (Đề số 3)",
    "topic": "Tính biến thiên enthalpy phản ứng theo năng lượng liên kết",
    "badge": "Chương 5 • Đề 3",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10,
    "questions": [
      {
        "id": "hoa10_c5_de3_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng hóa học trong đó có sự truyền năng lượng từ hệ sang môi trường xung quanh nó được gọi là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phản ứng tỏa nhiệt",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng trung hòa.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "phản ứng trao đổi",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "phản ứng thu nhiệt.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> phản ứng tỏa nhiệt.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_c5_de3_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biến thiên enthalpy chuẩn của một phản ứng hóa học kí hiệu là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "of298HD",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "or298HD",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "og298HD",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "ot298HD .",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> or298HD.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_c5_de3_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào dưới đây là phản ứng thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Nung NH<sub>4</sub>Cl tạo ra HCl và NH<sub>3</sub>",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cồn cháy trong không khí.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Đá vôi tác dụng với dung dịch HCl",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Sự phân hạch hạt nhân.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> Nung NH<sub>4</sub>Cl tạo ra HCl và NH<sub>3</sub>.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_c5_de3_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng thu nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "038222r298CH(g)5O(g)3CO(g)4HO(l)H2220kJ+®+D=- .",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "o2r298NaOH(aq)HCl(aq)NaCl(aq)HO(l)H57,9kJ+¾¾®+D=- .",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "o4222r298CH(g)2O(g)CO(g)2HO(l)H890,36kJ+¾¾®+D=- .",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "o42r298ZnSO(s)ZnO(s)SO(g)H235,21kJ¾¾®+D=+ .",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> o42r298ZnSO(s)ZnO(s)SO(g)H235,21kJ¾¾®+D=+ ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_c5_de3_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Điều kiện chuẩn là điều kiện ứng với áp suất 1 bar (với chất khí), nồng độ 1 mol L⁻¹ (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 298 K.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Điều kiện chuẩn là điều kiện ứng với nhiệt độ 298 K.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Áp suất 760 mmHg là áp suất ở điều kiện chuẩn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Điều kiện chuẩn là điều kiện ứng với áp suất 1 atm, nhiệt độ 0 °C.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> Điều kiện chuẩn là điều kiện ứng với áp suất 1 bar (với chất khí), nồng độ 1 mol L<sup>-1</sup> (đối với chất tan trong dung dịch) và nhiệt độ thường được chọn là 298 K..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_c5_de3_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Hầu hết các phản ứng thu nhiệt cần giai đoạn khơi mào (đun, đốt nóng,…).",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Hầu hết các phản ứng tỏa nhiệt cần phải tiếp tục đun hoặc đốt nóng ở giai đoạn tiếp diễn.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Hầu hết các phản ứng tỏa nhiệt không cần phải tiếp tục đun hoặc đốt nóng ở giai đoạn tiếp diễn.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Tùy phản ứng cụ thể mà các phản ứng tỏa nhiệt có thể cần hoặc không cần giai đoạn khơi mào.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> Hầu hết các phản ứng tỏa nhiệt cần phải tiếp tục đun hoặc đốt nóng ở giai đoạn tiếp diễn..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_c5_de3_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Enthalpy tạo thành của một chất (Δ<sub>f</sub>H) là nhiệt kèm theo phản ứng tạo thành",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "1 gam chất đó từ các đơn chất bền nhất",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "1 lít chất đó từ các đơn chất dạng bền nhất.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "1 mol chất đó từ các đơn chất bền nhất",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "1 mol chất đó từ các hợp chất bền nhất.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> 1 mol chất đó từ các đơn chất bền nhất.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_c5_de3_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây cần phải cung cấp năng lượng trong quá trình phản ứng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tạo gỉ kim loại",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng quang hợp.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng nhiệt phân",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng tạo oxit Na<sub>2</sub>O.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> Phản ứng nhiệt phân.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_c5_de3_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các giá trị năng lượng liên kết:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C – H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O – H</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">O = O</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">Eb(kJ/mol)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">413</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">467</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">745</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">498</td></tr></table></div><br/>Phương trình đốt cháy khí methane: CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g) (*)<br/>Biến thiên enthalpy của phản ứng (*) dựa vào năng lượng liên kết là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "–256 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–560 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "–816 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–710 kJ.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> –710 kJ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_c5_de3_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng nào sau đây là phản ứng toả nhiệt?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng nhiệt phân muối KNO<sub>3</sub>",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng phân huỷ khí NH<sub>3</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Phản ứng oxi hoá glucose trong cơ thể",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng hoà tan NH<sub>4</sub>Cl trong nước.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> Phản ứng oxi hoá glucose trong cơ thể.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_c5_de3_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Trong các chất dưới đây, chất nào có  D¹of298H0 ?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "N<sub>2</sub>(g)",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "S(s)",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Na(s)",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "O<sub>3</sub>(g).",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> O<sub>3</sub>(g)..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_c5_de3_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biến thiên enthalpy của một phản ứng được ghi ở sơ đồ dưới. Kết luận nào sau đây là đúng?",
        "images": [
          "/assets/hoa10/c5/hoa10_c5_de3_image35.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng tỏa nhiệt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Năng lượng chất tham gia phản ứng nhỏ hơn năng lượng sản phẩm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy của phản ứng là a kJ/mol.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng thu nhiệt.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> Phản ứng tỏa nhiệt..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_c5_de3_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Biểu thức đúng tính 0.r298HD  của phản ứng theo năng lượng liên kết của các chất là :",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "0r298bbHE(c®)E(sp)D=+åå",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "0r298bbHE(sp)E(c®)D=-åå .",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "0r298bbHE(c®)E(sp)D=-åå",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "b0r298bE(c®)HE(sp)D=åå .",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> 0r298bbHE(c®)E(sp)D=-åå.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_c5_de3_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình hóa học nào dưới đây biểu thị enthalpy tạo thành chuẩn của CO(g)?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2C ((graphite) 2(g)(g)O2CO+®",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "C ((graphite) +  (g)(g)OCO® .",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "C ((graphite) 2(g)(g)1OCO2+®",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "C ((graphite) 2(g)(g)CO2CO+® .",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> C ((graphite) 2(g)(g)1OCO2+®.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_c5_de3_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng thu vào càng nhiều nhiệt, biến thiên enthalpy càng âm.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng tỏa ra càng nhiều nhiệt, biến thiên enthaply càng dương.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Năng lượng của hệ chất tham gia trong phản ứng tỏa nhiệt cao hơn năng lượng của hệ sản phẩm.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Năng lượng của hệ chất tham gia trong phản ứng thu nhiệt cao hơn năng lượng của hệ sản phẩm.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> Năng lượng của hệ chất tham gia trong phản ứng thu nhiệt cao hơn năng lượng của hệ sản phẩm..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_c5_de3_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học sau: 4FeS(s) + 7O<sub>2</sub>(g) → 2Fe<sub>2</sub>O<sub>3</sub>(s) + 4SO<sub>2</sub>(g). Biết nhiệt tạo thành ∆<sub>f</sub>H<sup>0</sup><sub>298</sub> của các chất FeS(s), Fe<sub>2</sub>O<sub>3</sub>(s) và SO<sub>2</sub>(g) lần lượt là –100,0 kJ/mol, –825,5 kJ/mol và –296,8 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+3105,6 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–3105,6 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+2438,2 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–2438,2 kJ.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> –2438,2 kJ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_c5_de3_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng hóa học sau: N<sub>2</sub>(g) + O<sub>2</sub>(g) → 2NO(g). Cho biết năng lượng liên kết trong các phân tử O<sub>2</sub>, N<sub>2</sub> và NO lần lượt là 494 kJ/mol; 945 kJ/mol và 607 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+298 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "–298 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+225 kJ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "–225 kJ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> +225 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_c5_de3_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau: NH<sub>4</sub>NO<sub>3</sub>(s) + H<sub>2</sub>O(l)  ¾¾® NH<sub>4</sub>NO<sub>3</sub>(aq)  26HkJD=+<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Biết nhiệt dung riêng của H<sub>2</sub>O là 4,2 J/g.K. Sau khi muối tan hết, nước trong bình có nhiệt độ là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "31,2 °C",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "28,1 °C",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "21,9 °C",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "18,8 °C",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "Nhiệt phản ứng thu vào: Q = 26 kJ = 26 000 J.<br/>Độ giảm nhiệt độ: ΔT = Q / (m.c) = 26000 / (1000 . 4,2) ≈ 6,2 °C.<br/>Nhiệt độ cuối cùng: 25 - 6,2 = 18,8 °C. Phương án đúng là D.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_c5_de3_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Trong phản ứng tỏa nhiệt, dấu của ∆H dương vì năng lượng của hệ chất phản ứng nhỏ hơn năng lượng của hệ chất sản phẩm.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Trong phản ứng thu nhiệt, dấu của ∆H âm vì năng lượng của hệ chất phản ứng lớn hơn năng lượng của hệ chất sản phẩm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Giá trị tuyệt đối của biến thiên enthalpy càng lớn thì nhiệt lượng tỏa ra hay thu vào của phản ứng càng nhiều.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các phản ứng xảy ra ở nhiệt độ phòng thường là phản ứng tỏa nhiệt, các phản ứng thu nhiệt thường xảy ra khi đun nóng.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Trong phản ứng tỏa nhiệt, ∆H < 0.<br/>b. Sai. Trong phản ứng thu nhiệt, dấu của ∆H > 0.<br/>c. Đúng.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_c5_de3_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho phương trình phản ứng: Zn (s) + CuSO<sub>4</sub> (aq)  ¾¾®  ZnSO<sub>4</sub> (aq) + Cu (s);  H210kJD=-",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Enthalpy tạo thành chuẩn của Zn(s) bằng 210 kJ/mol.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng trên là phản ứng tỏa nhiệt.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy của phản ứng tạo thành 3,84 g Cu là 12,6 kJ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong quá trình phản ứng, nhiệt độ của hỗn hợp tăng lên.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Enthalpy tạo thành chuẩn của Zn(s) bằng 0.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy của phản ứng tạo thành 3,84g Cu là  210.3,8412,6()64kJ-=-<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_c5_de3_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Biến thiên enthalpy chuẩn quá trình “ H<sub>2</sub>O(s) → H<sub>2</sub>O(l)” là 6,020kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Quá trình tan chảy của nước đá là quá trình tỏa nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi cho viên nước đá vào cốc nước lỏng ấm, viên đá lại tan chảy dần vì nó lấy nhiệt từ nước lỏng.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cốc nước lỏng bị lạnh dần trong quá trình viên nước đá tan chảy do sự mất nhiệt làm cho nước lỏng lạnh đi.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Biết rằng để làm cho nhiệt độ của 1 mol nước lỏng thay đổi 1°C cần một nhiệt lượng là 75,4J. Giả sử mỗi viên nước đá tương ứng với 1 mol nước, thì cần tối thiểu 6 viên nước đá tan chảy để có thể làm lạnh 500 gam nước lỏng ở 20°C xuống 0°C.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Quá trình tan chảy của nước đá là quá trình thu nhiệt vì có biến thiên enthalpy dương.<br/>b. Đúng.<br/>c. Đúng.<br/>d. Nhiệt lượng mà 500 gam nước lỏng từ ở 20°C xuống 0°C  tỏa ra là:<br/>500.75,4.(200)41888,9(J)18-= = 41,8889(kJ)<br/>Mỗi viên đá tan chảy hấp thụ một nhiệt lượng là 6,020 kJ<br/>⇒ Số viên nước đá tối thiểu cần là  41,88896,9676,02=»  viên.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_c5_de3_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Ở điều kiện chuẩn, 2 mol nhôm tác dụng vừa đủ với khí chlorine tạo muối aluminium chloride và giải phóng một lượng nhiệt 1390,81 kJ.",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phương trình nhiệt của phản ứng trên: 2Al(s) + 3Cl<sub>2</sub>(g)  → 2AlCl<sub>3</sub>(s);  or298HD = 1390,81 kJ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là 1390,81 kJ/mol.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Lượng nhiệt được giải phóng khi 10 gam AlCl<sub>3</sub> được tạo thành là 52,2 kJ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Để tạo ra được 1,0 kJ nhiệt cần 0,043 gam Al phản ứng với khí chlorine.",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. 2Al(s) + 3Cl<sub>2</sub>(g)  → 2AlCl<sub>3</sub>(s);  or298HD = -1390,81 kJ.<br/>b. Sai.  Nhiệt tạo thành của AlCl<sub>3</sub>(s) ở điều kiên chuẩn là -1390,81 kJ/mol.<br/>c. Đúng.<br/>3AlCl10n0,075mol133,5==<br/>Cứ 2 mol Al phản ứng tạo thành 2 mol AlCl<sub>3</sub> thì giải phóng nhiệt lượng là 1390,81 kJ<br/>0,075 mol ---------------------------- x =  0,075.1390,8152,2kJ.2=<br/>d. Sai.<br/>Cứ 2 mol Al phản ứng thì giải phóng nhiệt lượng là 1390,81 kJ<br/>x =   32.11,438.10mol.1390,81-=       ←                                  1 kJ<br/>⇒ m<sub>Al</sub> = 0,0388 gam",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_c5_de3_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Phân tử hemoglobin(Hb) trong máu nhận O<sub>2</sub> ở phổi để chuyển thành HbO<sub>2</sub>. Chất này theo máu tới các bộ phận cơ thể, tại đó HbO<sub>2</sub> lại chuyển thành Hb và O<sub>2</sub>( để cung cấp O<sub>2</sub> cho các hoạt động sinh hóa cần thiết trong cơ thể). Nếu trong không khí có lẫn carbon monoxide(CO), cơ thể nhanh chóng bị ngộ độc. Cho các số liệu thực nghiệm sau:<br/>Hb + O<sub>2</sub> → HbO<sub>2</sub>                       or298HD = -33,05kJ       (1)<br/>Hb + CO → HbCO                    or298HD = -47,28kJ       (2)<br/>HbO<sub>2</sub> + CO → HbCO + O<sub>2</sub>       or298HD = -14,23kJ       (3)<br/>HbCO + O<sub>2</sub> → HbO<sub>2</sub> + CO       or298HD = 14,23 kJ       (4)<br/>Liệt kê các phản ứng tỏa nhiệt theo số thứ tự tăng dần (ví dụ: 134, 24,...).",
        "images": [],
        "correctAnswer": "123",
        "explanation": "Đáp án: 123.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1,
        "acceptedAnswers": [
          "123",
          "123",
          "123"
        ]
      },
      {
        "id": "hoa10_c5_de3_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các trường hợp sau:<br/>(1) Nước bay hơi.<br/>(2) Nước đóng băng.<br/>(3) Cồn cháy trong không khí.<br/>(4) Pha viên sủi vitamin C vào nước.<br/>(5) Phản ứng tạo gỉ sắt.<br/>Có bao nhiêu quá trình thu nhiệt trong các trường hợp trên?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2,
        "acceptedAnswers": [
          "2",
          "2",
          "2"
        ]
      },
      {
        "id": "hoa10_c5_de3_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Khi dẫn hơi nước qua than nóng đỏ thu được khí than, là hỗn hợp của carbonmonoxide và hydrogen:  22C(s)HO(g)CO(g)H(g)(1)+¾¾®+<br/>Tính sự biến đổi enthalpy chuẩn của phản ứng (1) theo đơn vị kJ từ những phương trình phản ứng hóa học và sự biến đổi enthalpy chuẩn:<br/>22or298or292282C(s)O(g)2CO(g)(2)O(g)2H(g)2HO(g)(3H221,0kJH483,k)6JD=-D+¾¾-®=+¾¾®<br/>(Làm tròn kết quả đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "131",
        "explanation": "Đáp án: 131.<br/>ooor298r298r298H(2)H(3)H(1)131,3kJ2D-DD==",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3,
        "acceptedAnswers": [
          "131",
          "131",
          "131"
        ]
      },
      {
        "id": "hoa10_c5_de3_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng đốt cháy butane sau:<br/>C<sub>4</sub>H<sub>10</sub>(g)  +  O<sub>2</sub>(g)   ¾¾®  CO<sub>2</sub>(g)  +  H<sub>2</sub>O(g)(1)<br/>Biết năng lượng liên kết trong các hợp chất cho trong bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Phân tử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Eb (kJ/mol)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Liên kết</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Phân tử</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Eb (kJ/mol)</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C – C</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C4H10</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">346</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C = O</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">CO2</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">799</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C – H</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">C4H10</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">418</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">O – H</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">H<sub>2</sub>O</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">467</td></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">O = O</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">O<sub>2</sub></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">495</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td><td class=\"border border-slate-300 px-3 py-1.5 text-center\"></td></tr></table></div><br/>Một bình gas chứa 12 kg butane có thể đun sôi bao nhiêu ấm nước (Làm tròn kết quả đến hàng đơn vị)? Giả thiết mỗi ấm nước chứa 2 L nước ở 25<sup>0</sup>C, nhiệt dung của nước là 4,2 J/g.K, có 40% nhiệt đốt cháy butane bị thất thoát ra ngoài môi trường.",
        "images": [],
        "correctAnswer": "918",
        "explanation": "Đáp án: 918.<br/>C<sub>4</sub>H<sub>10</sub>(g)  +   132 O<sub>2</sub>(g)   ¾¾®  4CO<sub>2</sub>(g)  +  5H<sub>2</sub>O(g)<br/>or298HD= 3.E<sub>C-C</sub> + 10.E<sub>C-H</sub> + 6,5.E<sub>O=O</sub> – 4.2.E<sub>C=O</sub> – 5.2.E<sub>O-H</sub><br/>= 3.346 + 10.418 + 6,5.495 – 8.799 – 10.467 = - 2626,5 (kJ).<br/>312.10.2626,5Q964163,4(kJ)58==<br/>Nhiệt cần đun 1 ấm nước: 2.10<sup>3</sup>.4,2.(100 – 25) = 630 000 (J) = 630 (kJ).<br/>Số ấm nước:  964163,4.60%918630=  (ấm nước).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4,
        "acceptedAnswers": [
          "918",
          "918",
          "918"
        ]
      },
      {
        "id": "hoa10_c5_de3_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Tiến hành quá trình ozone hoá 100 g oxygen theo phản ứng sau:<br/>3O<sub>2</sub>(g) (oxygen)  ¾¾®  2O<sub>3</sub>(g) (ozone)<br/>Hỗn hợp thu được có chứa 24% ozone về khối lượng, tiêu tốn 71,2 kJ. Nhiệt tạo thành  of298HD  của ozone (kJ/mol) có giá trị là bao nhiêu? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [],
        "correctAnswer": "142",
        "explanation": "Đáp án: 142.<br/>Số mol của O<sub>3</sub> =  100.24%0,5(mol)48= ⇒  or29871,2.2H284,80,5D==  (kJ)<br/>ooor298f2983f2982H2H(O)3.H(O)D=D-D  =  of29832H(O)3.0284,8D-=  (kJ)<br/>=>  of2983H(O)D  = 142,4 (kJ/mol).",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5,
        "acceptedAnswers": [
          "142",
          "142",
          "142"
        ]
      },
      {
        "id": "hoa10_c5_de3_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Lactic acid hay acid sữa là hợp chất hoá học đóng vai trò quan trọng trong nhiều quá trình sinh hoá, lần đầu tiên được phân tách vào năm 1780 bởi nhà hoá học Thuỵ Điền Carl Wilhelm Scheele. Lactic acid có công thức phân tử C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>, công A thức câu tạo CH<sub>3</sub>-CH(OH)-COOH.<br/>Khi vận động mạnh cơ thề không đủ cung cấp oxygen, thì cơ thề sẽ chuyền hoá glucose thành lactic acid từ các tế bào đề cung cấp năng lượng cho cơ thề (lactic acid tạo thành từ quá trình này sẽ gây mỏi cơ) theo phương trình sau:<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(aq)  ¾¾®  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>(aq)   0r298ÄH = -150 kJ<br/>Biết rằng cơ thề chỉ cung cấp 98% năng lượng nhờ oxygen, năng lượng còn lại nhờ vào sự chuyền hoá glucose thành lactic acid.<br/>Giả sử một người chạy bộ trong một thời gian tiêu tốn 300 kcal. Khối lượng lactic acid tạo ra từ quá trình chuyền hoá đó là bao nhiêu gam (biết 1 cal = 4,184 J)? (Kết quả làm tròn đến hàng đơn vị).",
        "images": [
          "/assets/hoa10/c5/hoa10_c5_de3_image32.jpeg"
        ],
        "correctAnswer": "30",
        "explanation": "Đáp án: 30.<br/>Tính khối lượng lactic acid tạo ra từ quá trình chạy bộ. Năng lượng cùa sự chuyển hoá glucose thành lactic acid trong quá trình chạy bộ chiếm 2% ´ 300 kcal = 6 kcal = 6 000 cal  Û  25 104 J = 25,104 kJ.<br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>  ¾¾®  2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> ;  0r298ÄH  =  -150 kJ<br/>0,335 mol           -25,104 kJ<br/>Khối lượng lactic acid được tạo ra trong quá trình chuyển hoá: 0,335.90 = 30,1 g.<br/>------------------------- HẾT -------------------------<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6,
        "acceptedAnswers": [
          "30",
          "30",
          "30"
        ]
      }
    ]
  },
  {
    "id": "hoa10_c5_de4",
    "code": "10-C5-04",
    "title": "Đề Kiểm Tra Tổng Hợp Toàn Diện Chương 5 (Đề số 4)",
    "topic": "Đề ôn tập toàn diện Năng lượng hóa học chuẩn Bộ GD&ĐT 2025",
    "badge": "Chương 5 • Đề 4",
    "duration": 50,
    "totalQuestions": 28,
    "totalPoints": 10,
    "questions": [
      {
        "id": "hoa10_c5_de4_p1_q1",
        "number": 1,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng tỏa nhiệt là phản ứng hóa học trong đó",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "có sự giải phóng nhiệt năng ra môi trường.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "có sự hấp thụ nhiệt năng từ môi trường.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "không có sự giải phóng nhiệt năng ra môi trường.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "có sự giải phóng quang năng ra môi trường.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> có sự giải phóng nhiệt năng ra môi trường..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1
      },
      {
        "id": "hoa10_c5_de4_p1_q2",
        "number": 2,
        "part": 1,
        "type": "multiple_choice",
        "text": "Kí hiệu enthalpy tạo thành (nhiệt tạo thành) của một phản ứng ở điều kiện chuẩn là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "or298HD",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "of298HD",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "rHD",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "fHD .",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> of298HD.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2
      },
      {
        "id": "hoa10_c5_de4_p1_q3",
        "number": 3,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phản ứng đốt cháy các chất: C(s), CH<sub>3</sub>OH(l), CH<sub>4</sub>(g), C<sub>4</sub>H<sub>10</sub>(g) như sau:<br/>(1) C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)  or298HD  = –393,5 kJ<br/>(2) CH<sub>3</sub>OH(l) +  32 O<sub>2</sub>(g) → CO<sub>2</sub>(g)  or298HD  = –726 kJ<br/>(3) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)  or298HD  = –890,36 kJ<br/>(4) C<sub>2</sub>H<sub>2</sub>(g) +  52 O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)  or298HD  = –2877,04 kJ<br/>Đốt cháy lần lượt 1 mol các chất trên, phản ứng tỏa ra lượng nhiệt nhiều nhất là",
        "images": [],
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
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "(4).",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> (4)..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3
      },
      {
        "id": "hoa10_c5_de4_p1_q4",
        "number": 4,
        "part": 1,
        "type": "multiple_choice",
        "text": "Điều kiện nào sau đây là điều kiện chuẩn đối với chất khí?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Áp suất 1 bar và nhiệt độ 25 °C hay 298 K",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Áp suất 1 bar và nhiệt độ 298 K.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Áp suất 1 bar và nhiệt độ 25 °C",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Áp suất 1 bar và nhiệt độ 25 K.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> Áp suất 1 bar và nhiệt độ 25 <sup>o</sup>C hay 298K.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4
      },
      {
        "id": "hoa10_c5_de4_p1_q5",
        "number": 5,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình nhiệt hóa học sau:<br/>H<sub>2</sub> (g) + I<sub>2</sub> (g)  ¾¾®  2HI (g)  H11,3kJD=+<br/>Phát biểu nào sau đây về sự trao đổi năng lượng của phản ứng trên là đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng giải phóng nhiệt lượng 11,3 kJ khi 2 mol HI được tạo thành.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Tổng nhiệt phá vỡ liên kết của chất phản ứng lớn hơn nhiệt tỏa ra khi tạo thành sản phẩm.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Năng lượng chứa trong H<sub>2</sub> và I<sub>2</sub> cao hơn trong HI.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Phản ứng xảy ra với tốc độ chậm.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> Phản ứng giải phóng nhiệt lượng 11,3 kJ khi 2 mol HI được tạo thành..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5
      },
      {
        "id": "hoa10_c5_de4_p1_q6",
        "number": 6,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng chuyển hóa giữa hai dạng đơn chất của phosphorus (P):<br/>P (s, đỏ)  ¾¾®  P (s, trắng)    or298H17,6kJD=<br/>Điều này chứng tỏ phản ứng:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "thu nhiệt, P đỏ bền hơn P trắng",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "thu nhiệt, P trắng bền hơn P đỏ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "tỏa nhiệt, P đỏ bền hơn P trắng.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "tỏa nhiệt, P trắng bền hơn P đỏ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> tỏa nhiệt, P đỏ bền hơn P trắng..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6
      },
      {
        "id": "hoa10_c5_de4_p1_q7",
        "number": 7,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Các phản ứng phân hủy thường là phản ứng thu nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phản ứng càng tỏa ra nhiều nhiệt càng dễ tự xảy ra.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Các phản ứng oxi hóa chất béo cung cấp nhiệt cho cơ thể.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Các phản ứng khi đun nóng đều dễ xảy ra hơn.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> Các phản ứng khi đun nóng đều dễ xảy ra hơn..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 7
      },
      {
        "id": "hoa10_c5_de4_p1_q8",
        "number": 8,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nung nóng hai ống nghiệm chứa NaHCO<sub>3</sub> và P, xảy ra các phản ứng sau:<br/>2NaHCO<sub>3</sub>(s)  ¾¾®  Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g)  (1)<br/>4P(s) + 5O<sub>2</sub>(g)  ¾¾®  2P<sub>2</sub>O<sub>5</sub>(s)  (2)<br/>Khi ngừng đun nóng, phản ứng (1) dừng lại còn phản ứng (2) tiếp tục xảy ra, chứng tỏ",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "phản ứng (1) toả nhiệt, phản ứng (2) thu nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "phản ứng (1) thu nhiệt, phản ứng (2) toả nhiệt.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "cả 2 phản ứng đều toả nhiệt.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "cả 2 phản ứng đều thu nhiệt.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> phản ứng (1) thu nhiệt, phản ứng (2) toả nhiệt..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 8
      },
      {
        "id": "hoa10_c5_de4_p1_q9",
        "number": 9,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phương trình nhiệt hoá học nào sau đây ứng với sơ đồ biểu diễn biến thiên enthalpy của phản ứng sau:",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g) → 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    D0r298H  = -394,1 kJ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "CI<sub>2</sub>O (g) + 3F<sub>2</sub>O(g) →  2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g)    D0r298H  = +394,1 kJ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    D0r298H  = +394,1 kJ.",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    D0r298H  = -394,1 kJ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> 2CIF<sub>3</sub> (g) + 2O<sub>2</sub> (g) → CI<sub>2</sub>O (g) + 3F<sub>2</sub>O (g)    D0r298H  = +394,1 kJ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 9
      },
      {
        "id": "hoa10_c5_de4_p1_q10",
        "number": 10,
        "part": 1,
        "type": "multiple_choice",
        "text": "Nung KNO<sub>3</sub> lên 550<sup>0</sup>C xảy ra phản ứng:<br/>KNO<sub>3</sub>(s)  ¾¾®  KNO<sub>2</sub>(s) +  Do2r2981O(g)H?2<br/>Phản ứng nhiệt phân KNO<sub>3</sub> là phản ứng",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "toả nhiệt, có  or298HD < 0",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "thu nhiệt, có  or298HD > 0.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "toả nhiệt, có  or298HD > 0",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "thu nhiệt, có  or298HD < 0.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "B",
        "explanation": "<b>Phương án đúng là B:</b> thu nhiệt, có  or298HD > 0..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 10
      },
      {
        "id": "hoa10_c5_de4_p1_q11",
        "number": 11,
        "part": 1,
        "type": "multiple_choice",
        "text": "Dựa vào phương trình nhiệt hóa học của phản ứng sau:<br/>CO<sub>2</sub>(g)  CO(g) +  12 O<sub>2</sub>(g)  Dor298H = +280 kJ<br/>Giá trị  Dor298H của phản ứng: 2CO<sub>2</sub>(g)  2CO(g) + O<sub>2</sub>(g) là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "+140 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "-1120 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+560 kJ",
            "isCorrect": true
          },
          {
            "id": "d",
            "letter": "D",
            "text": "-420 kJ.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "C",
        "explanation": "<b>Phương án đúng là C:</b> +560 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 11
      },
      {
        "id": "hoa10_c5_de4_p1_q12",
        "number": 12,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho phương trình nhiệt hóa học của phản ứng trung hòa sau:<br/>HCl (aq) + NaOH (aq)  ¾¾®  NaCl (aq) + H<sub>2</sub>O (l) H57,3kJD=-<br/>Phát biểu nào sau đây không đúng?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cho 1 mol HCl tác dụng với 1 mol NaOH dư tỏa nhiệt lượng là 57,3 kJ.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Cho HCl dư tác dụng với 1 mol NaOH thu nhiệt lượng là 57,3 kJ.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Cho 1 mol HCl tác dụng với 1 mol NaOH tỏa nhiệt lượng là 57,3 kJ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3 kJ.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> Cho 2 mol HCl tác dụng với NaOH dư tỏa nhiệt lượng là 57,3 kJ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 12
      },
      {
        "id": "hoa10_c5_de4_p1_q13",
        "number": 13,
        "part": 1,
        "type": "multiple_choice",
        "text": "Ở điều kiện chuẩn, công thức tính biến thiên enthalpy của phản ứng theo nhiệt tạo thành là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "000r298f298f298HH(sp)H(cd).D=åD-åD",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "000r298f298f298HH(cd)H(sp).D=åD-åD",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "000f298r298r298HH(sp)H(cd).D=åD-åD",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "000f298r298r298HH(cd)H(sp).D=åD-åD",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> 000r298f298f298HH(sp)H(cd).D=åD-åD.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 13
      },
      {
        "id": "hoa10_c5_de4_p1_q14",
        "number": 14,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phosphine (PH<sub>3</sub>) là một chất khí không màu, nhẹ hơn không khí, rất độc và dễ cháy. Khí này thường thoát ra từ xác động vật thối rữa, khi có mặt diphosphine (P<sub>2</sub>H<sub>4</sub>) thường tự bốc cháy trong không khí, đặc biệt ở thời tiết mưa phùn, tạo hiện tượng “ma trơi” ngoài nghĩa địa.<br/>Phản ứng cháy phosphine: 2PH<sub>3</sub>(g) + 4O<sub>2</sub>(g) → P<sub>2</sub>O<sub>5</sub>(s) + 3H<sub>2</sub>O(l)<br/>Biết nhiệt tạo thành chuẩn của các chất cho trong bảng sau:<br/><div class=\"overflow-x-auto my-3\"><table class=\"min-w-full text-xs sm:text-sm border-collapse border border-slate-300 rounded-xl bg-white text-slate-800 shadow-sm\"><tr><th class=\"border border-slate-300 px-3 py-1.5 text-center\">Chất</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">PH3(g)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">P2O5(s)</th><th class=\"border border-slate-300 px-3 py-1.5 text-center\">H<sub>2</sub>O(l)</th></tr><tr><td class=\"border border-slate-300 px-3 py-1.5 text-center\">(kJ/mol)</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">5,4</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-365,8</td><td class=\"border border-slate-300 px-3 py-1.5 text-center\">-285,8</td></tr></table></div><br/>Biến thiên enthalpy chuẩn của phản ứng trên là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-657 kJ",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "+657 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "+1234 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "-1234 kJ.",
            "isCorrect": true
          }
        ],
        "correctAnswer": "D",
        "explanation": "<b>Phương án đúng là D:</b> -1234 kJ..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 14
      },
      {
        "id": "hoa10_c5_de4_p1_q15",
        "number": 15,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng tổng hợp ammonia:<br/>N<sub>2</sub>(g) + 3H<sub>2</sub>(g)  ¾¾®  2NH<sub>3</sub>(g)  or298ÄH  = -92 kJ<br/>Biết năng lượng liên kết (kJ/mol) của  NNº và H – H lần lượt là 946 và 436. Năng lượng liên kết của  NH-  trong ammonia là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "391 kJ/mol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "361 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "245 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "490 kJ/mol.",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> 391 kJ/mol.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 15
      },
      {
        "id": "hoa10_c5_de4_p1_q16",
        "number": 16,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phản ứng sau:<br/>(1) C (s) + CO<sub>2</sub> (g)  ¾¾®  2CO<sub>2</sub> (g) or500H173,6kJD=<br/>(2) C (s) + H<sub>2</sub>O (g)  ¾¾®  CO (g) + H<sub>2</sub> (g) or500H133,8kJD=<br/>(3) CO (g) + H<sub>2</sub>O (g)  ¾¾®  CO<sub>2</sub> (g) + H<sub>2</sub> (g)<br/>Ở 500K, 1 atm, biến thiên enthalpy của phản ứng (3) có giá trị là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-39,8 kJ",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "39,8 kJ",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "-47,00 kJ",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "106,7 kJ. Đáp án: (1) C (s) + CO<sub>2</sub> (g)  ¾¾®  2CO<sub>2</sub> (g)                           <sub>r</sub>H (1) (2) C (s) + H<sub>2</sub>O (g)  ¾¾®  CO (g) + H<sub>2</sub> (g)                <sub>r</sub>H (2) (3) CO (g) + H<sub>2</sub>O (g)  ¾¾®  CO<sub>2</sub> (g) + H<sub>2</sub> (g)           <sub>r</sub>H (3) Lấy phương trình phản ứng (2) trừ phương trình phản ứng (1) được phương trình phản ứng (3) <sub>r</sub>H (3) = <sub>r</sub>H (2) - <sub>r</sub>H (1) = 133,8 – 173,6 = - 39,8 (kJ)",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> -39,8 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 16
      },
      {
        "id": "hoa10_c5_de4_p1_q17",
        "number": 17,
        "part": 1,
        "type": "multiple_choice",
        "text": "Cho các phát biểu sau:<br/>(a) Trong phòng thí nghiệm, có thể nhận biết một phản ứng thu nhiệt hoặc tỏa nhiệt bằng cách đo nhiệt độ của phản ứng bằng một nhiệt kế.<br/>(b) Nhiệt độ của hệ phản ứng sẽ tăng lên nếu phản ứng thu nhiệt.<br/>(c) Nhiệt độ của hệ phản ứng sẽ tăng lên nếu phản ứng tỏa nhiệt.<br/>(d) Nhiệt độ của hệ phản ứng sẽ giảm đi nếu phản ứng tỏa nhiệt.<br/>(e) Nhiệt độ của hệ phản ứng sẽ giảm đi nếu phản ứng thu nhiệt.<br/>Số phát biểu không đúng là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "2.",
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
        "explanation": "<b>Phương án đúng là A:</b> 2..",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 17
      },
      {
        "id": "hoa10_c5_de4_p1_q18",
        "number": 18,
        "part": 1,
        "type": "multiple_choice",
        "text": "Phản ứng đốt cháy ethanol: C<sub>2</sub>H<sub>5</sub>OH (l) + 3O<sub>2</sub> (g)  ¾¾®  2CO<sub>2</sub> (g) + 3H<sub>2</sub>O (l)<br/>Đốt cháy hoàn toàn 5 g ethanol, nhiệt tỏa ra làm nóng chảy 447 g nước đá ở 0<sup>o</sup>C. Biết 1 g nước đá nóng chảy hấp thụ nhiệt lượng 333,5 J, biến thiên enthalpy của phản ứng đốt cháy ethanol là",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "-1371 kJ/mol",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "-954 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "-149 kJ/mol",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "+149 kJ/mol. Đáp án: Q = 447.333,5 = 149074,5 J  149 (kJ)  H =  149.461371()5kJ-=-",
            "isCorrect": false
          }
        ],
        "correctAnswer": "A",
        "explanation": "<b>Phương án đúng là A:</b> -1371 kJ/mol.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 18
      },
      {
        "id": "hoa10_c5_de4_p2_q1",
        "number": 1,
        "part": 2,
        "type": "true_false",
        "text": "Mỗi phát biểu sau đây là đúng hay sai?",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Biến thiên enthalpy chuẩn của một phản ứng hóa học là lượng nhiệt kèm theo phản ứng đó ở áp suất 1 bar và 27<sup>o</sup>C.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Nhiệt (tỏa ra hay thu vào) kèm theo một phản ứng được thực hiện ở 1 bar và 298 K là biến thiên enthalpy chuẩn của phản ứng đó.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Một số phản ứng khi xảy ra làm môi trường xung quanh nóng lên là phản ứng thu nhiệt.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Một số phản ứng khi xảy ra làm môi trường xung quanh lạnh đi là do các phản ứng này thu nhiệt và lấy nhiệt từ môi trường.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Nhiệt độ là 25oC.<br/>b. Đúng.<br/>c. Sai. Phản ứng tỏa nhiệt.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 1
      },
      {
        "id": "hoa10_c5_de4_p2_q2",
        "number": 2,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng sau: S(s) + O<sub>2</sub>(g)  ot¾¾®  SO<sub>2</sub>(g)  và  of298HD  (SO<sub>2</sub>, g) = – 296,8 kJ/mol",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "of298HD (SO<sub>2</sub>, g) = –296,8 kJ/mol là lượng nhiệt tỏa ra khi tạo ra 1 mol SO<sub>2</sub> (g) từ đơn chất S (s) và O<sub>2</sub> (g), đây là các đơn chất bền nhất ở điều kiện chuẩn.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Ở điều kiện chuẩn,  of298HD  (S, s) = 0.",
            "isCorrect": true
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy chuẩn của phản ứng là 296,9 kJ.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Hợp chất SO<sub>2</sub>(g) kém bền hơn về mặt năng lượng so với các đơn chất bền S (s) và O<sub>2</sub> (g).",
            "isCorrect": false
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Đúng.<br/>c. Sai. Biến thiên enthalpy của phản ứng là -296,8 kJ.<br/>d. Sai. Vì  of298HD  (SO<sub>2</sub>, g) < 0, chất này bền hơn các đơn chất tạo nên nó.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 2
      },
      {
        "id": "hoa10_c5_de4_p2_q3",
        "number": 3,
        "part": 2,
        "type": "true_false",
        "text": "Cho phản ứng đốt cháy methane (CH<sub>4</sub>) và acetylene (C<sub>2</sub>H<sub>2</sub>) như sau:<br/>(1) CH<sub>4</sub>(g) + 2O<sub>2</sub>(g)  ¾¾®  CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)     0r298H890,5kJD=-<br/>(2) C<sub>2</sub>H<sub>2</sub>(g) +  52 O<sub>2</sub>(g)  ¾¾®  2CO<sub>2</sub>(g) + H<sub>2</sub>O(l)     0r298H1300,2kJD=-",
        "images": [],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Cả hai phản ứng trên đều là phản ứng tỏa nhiệt.",
            "isCorrect": true
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Khi đốt cháy cùng một lượng thể tích khí CH<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> thì lượng nhiệt sinh ra do CH<sub>4</sub> nhiều hơn lượng nhiệt sinh ra do C<sub>2</sub>H<sub>2</sub>.",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Biến thiên enthalpy của phản ứng (1) tính theo năng lượng liên kết có công thức:",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Trong thực tế, để hàn, cắt kim loại người ta sử dụng khí C<sub>2</sub>H<sub>2</sub> mà không dùng khí CH<sub>4</sub>.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Đúng.<br/>b. Sai. C<sub>2</sub>H<sub>2</sub> cháy tỏa nhiều nhiệt hơn CH<sub>4</sub>.<br/>c. Sai. Công thức trên là tính theo nhiệt tạo thành.<br/>d. Đúng.",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 3
      },
      {
        "id": "hoa10_c5_de4_p2_q4",
        "number": 4,
        "part": 2,
        "type": "true_false",
        "text": "Đường sucrose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) là một đường đôi. Trong môi trường acid ở dạ dày và nhiệt độ cơ thể, sucrose bị thủy phân thành đường glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) và fructose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), sau đó bị oxi hóa bởi oxygen tạo thành CO<sub>2</sub> và H<sub>2</sub>O. Sơ đồ thay đổi năng lượng hóa học của phản ứng được cho hình dưới đây:",
        "images": [
          "/assets/hoa10/c5/hoa10_c5_de4_image77.png"
        ],
        "options": [
          {
            "id": "a",
            "letter": "A",
            "text": "Phản ứng trong sơ đồ trên là phản ứng thu nhiệt.",
            "isCorrect": false
          },
          {
            "id": "b",
            "letter": "B",
            "text": "Phương trình nhiệt hóa học trong sơ đồ trên là C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s)+ 6O<sub>2</sub>(g) → 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l).",
            "isCorrect": false
          },
          {
            "id": "c",
            "letter": "C",
            "text": "Năng lượng các chất tham gia phản ứng nhỏ hơn năng lượng các chất sản phẩm.",
            "isCorrect": false
          },
          {
            "id": "d",
            "letter": "D",
            "text": "Khi 1 mol đường sucrose bị đốt cháy hoàn toàn với một lượng vừa đủ oxygen ở điều kiện chuẩn tỏa ra một lượng nhiệt là 5645kJ thì biến thiến enthalpy chuẩn của phản ứng oxi hóa 5 g sucrose là –82,5 kJ.",
            "isCorrect": true
          }
        ],
        "explanation": "Đáp án:<br/>a. Sai. Phản ứng đó tỏa nhiệt vì có biến thiên enthalpy âm.<br/>b. Sai. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s)+ 6O<sub>2</sub>(g) → 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l);  0r298HD .<br/>c. Sai. Năng lượng các chất tham gia phản ứng lớn hơn năng lượng các chất sản phẩm.<br/>d. Đúng. C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>(s)+ 12O<sub>2</sub>(g) → 12CO<sub>2</sub>(g) + 11H<sub>2</sub>O(l)<br/>Biến thiên enthalpy chuẩn của phản ứng là -5645kJ.<br/>Biến thiên enthalpy của quá trình =  5.(5645)82,5kJ.342-=-",
        "explanationImages": [],
        "points": 1.0,
        "displayNumber": 4
      },
      {
        "id": "hoa10_c5_de4_p3_q1",
        "number": 1,
        "part": 3,
        "type": "short_answer",
        "text": "Dựa vào phương trình nhiệt hóa học của các phản ứng sau :<br/>(1) CS<sub>2</sub>(l)  + 3O<sub>2</sub>(g)  0t¾¾® CO<sub>2</sub>(g)   +   2 SO<sub>2</sub>(g)        0r298HD  = –1110,21 kJ<br/>(2) CO<sub>2</sub>(g)  ¾¾®  CO(g) +  12  O<sub>2</sub>(g)        0r298HD  = +280,00 kJ<br/>(3) 2Na(s) +2H<sub>2</sub>O(l) ¾¾®  2NaOH(aq) + H<sub>2</sub>(g) 0r298HD  = –367,50 kJ<br/>(4) ZnSO<sub>4</sub>(s)  ¾¾®  ZnO(s) +  SO<sub>2</sub>(g)                         0r298HD  = +235,21 kJ<br/>(5) 2SO<sub>2</sub>(g) + O<sub>2</sub>(g)  ¾¾® 2SO<sub>3</sub>(g)       0r298HD = –197kJ<br/>Liệt kê các phản ứng tỏa nhiệt theo số thứ tự tăng dần (ví dụ: 123, 25,...).",
        "images": [],
        "correctAnswer": "135",
        "explanation": "Đáp án: 135.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 1,
        "acceptedAnswers": [
          "135",
          "135",
          "135"
        ]
      },
      {
        "id": "hoa10_c5_de4_p3_q2",
        "number": 2,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các quá trình sau:<br/>(a) Nước hóa rắn.<br/>(b) Sự tiêu hóa thức ăn.<br/>(c) Quá trình chạy của con người.<br/>(d) Khí CH<sub>4</sub> đốt ở trong lò.<br/>(e) Hòa tan KBr vào nước làm cho nước trở nên lạnh.<br/>(f) Sulfuric acid đặc khi thêm vào nước làm cho nước nóng lên.<br/>Có bao nhiêu quá trình thu nhiệt trong số các quá trình trên?",
        "images": [],
        "correctAnswer": "2",
        "explanation": "Đáp án: 2.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 2,
        "acceptedAnswers": [
          "2",
          "2",
          "2"
        ]
      },
      {
        "id": "hoa10_c5_de4_p3_q3",
        "number": 3,
        "part": 3,
        "type": "short_answer",
        "text": "Cho các sau đây: C(graphite, s); CO(g); O<sub>2</sub>(l); Fe(s); SO<sub>2</sub>(g), H<sub>2</sub>O(l). Có bao nhiêu chất trong dãy chất trên có nhiệt tạo thành chuẩn bằng 0?",
        "images": [],
        "correctAnswer": "3",
        "explanation": "Đáp án: 3.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 3,
        "acceptedAnswers": [
          "3",
          "3",
          "3"
        ]
      },
      {
        "id": "hoa10_c5_de4_p3_q4",
        "number": 4,
        "part": 3,
        "type": "short_answer",
        "text": "Cho phản ứng sau: CH º CH(g) + H<sub>2</sub>(g)  ¾¾® CH<sub>3</sub>-CH<sub>3</sub>(g).<br/>Năng lượng liên kết (kJ/mol) của H – H là 436, của C – C là 347, của C – H là 414 và của C º C là 839. Biến thiên enthalpy của phản ứng là bao nhiêu kJ?",
        "images": [],
        "correctAnswer": "-292",
        "explanation": "Đáp án: -292.<br/>∆<sub>r</sub>H = 2E<sub>(C-H)</sub> + E<sub>(C≡C)</sub> + 2E<sub>(H-H)</sub> – 6E<sub>(C-H)</sub> – E<sub>(C-C)</sub> = (2.414) + 839 + (2.436) – (6.414) – 347 = -292 kJ.",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 4,
        "acceptedAnswers": [
          "-292",
          "-292",
          "-292"
        ]
      },
      {
        "id": "hoa10_c5_de4_p3_q5",
        "number": 5,
        "part": 3,
        "type": "short_answer",
        "text": "Cho sơ đồ hòa tan NH<sub>4</sub>NO<sub>3</sub> sau:<br/>NH<sub>4</sub>NO<sub>3</sub> (s) + H<sub>2</sub>O (l)  ¾¾® NH<sub>4</sub>NO<sub>3</sub> (aq)  H26kJD=+<br/>Hòa tan 80 gam NH<sub>4</sub>NO<sub>3</sub> khan vào bình chứa 1 L nước ở 25<sup>o</sup>C. Sau khi muối tan hết, nước trong bình có nhiệt độ là bao nhiêu độ C? (Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "18,8",
        "explanation": "Đáp án: 18,8.<br/>80g NH<sub>4</sub>NO<sub>3</sub>  1 mol  Q = 26 (kJ)<br/>H > 0, quá trình hòa tan thu nhiệt, nhiệt độ giảm đi một lượng là:<br/>T =  30326.106,24,2.10C=   Nhiệt độ cuối cùng là 25 – 6,2 = 18,8<sup>0</sup>C",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 5,
        "acceptedAnswers": [
          "18,8",
          "18.8",
          "18,8"
        ]
      },
      {
        "id": "hoa10_c5_de4_p3_q6",
        "number": 6,
        "part": 3,
        "type": "short_answer",
        "text": "Ở điều kiện chuẩn, cần phải đốt cháy hoàn toàn bao nhiêu gam  4CH()g  để cung cấp nhiệt cho phản ứng tạo 1 mol  CaO  bằng cách nung  3CaCO.  Giả thiết hiệu suất các quá trình đều là 100%. Phương trình nhiệt của phản ứng nung vôi và đốt cháy CH<sub>4</sub> như sau:<br/>(1)  032r298CaCO(s)CaO(s)CO(s)H178,29kJ®+D=<br/>(2)  04222r298CH(g)2O(g)CO(g)2HO(l)H890,36kJ+®+D=-<br/>(Kết quả làm tròn đến hàng phần mười).",
        "images": [],
        "correctAnswer": "3,2",
        "explanation": "Đáp án: 3,2.<br/>Ta có phản ứng nung vôi:  032r298CaCO(s)CaO(s)CO(s)H178,29kJ®+D=<br/>Tức là để tạo 1 mol CaO cần cung cấp 178,29 kJ ® phản ứng đốt cháy  4CH  cần tỏa ra 178,29 kJ<br/>Mà ta có phản ứng đốt cháy  4CH:   04222r298CH(g)2O(g)CO(g)2HO(l)H890,36kJ+®+D=-<br/>Đốt cháy 1 mol  4CH  tỏa ra 890,36 kJ<br/>Đốt cháy x mol  4CH  tỏa ra 178,29 kJ<br/>178,29.1x0,2mol890,36®=»  ® khối lượng  4CH  cần dùng để đốt cháy là:  0,2.163,2gam.=<br/>------------------------- HẾT -------------------------",
        "explanationImages": [],
        "points": 0.25,
        "displayNumber": 6,
        "acceptedAnswers": [
          "3,2",
          "3.2",
          "3,2"
        ]
      }
    ]
  }
];

export const HOA10_CHUONG5_7_EXAMS: Chuong5Exam[] = HOA10_CHUONG5_EXAMS;

export const HOA10_CHUONG5_HANDBOOK = [{"title":"1. Phản Ứng Tỏa Nhiệt & Thu Nhiệt","icon":"🌡️","content":["<b>Phản ứng tỏa nhiệt:</b> Giải phóng nhiệt năng ra môi trường xung quanh; <b>∆<sub>r</sub>H°<sub>298</sub> < 0</b>. Ví dụ: Đốt cháy than, củi, xăng dầu, phản ứng trung hòa acid - base.","<b>Phản ứng thu nhiệt:</b> Hấp thu nhiệt năng từ môi trường; <b>∆<sub>r</sub>H°<sub>298</sub> > 0</b>. Ví dụ: Nhiệt phân đá vôi CaCO<sub>3</sub>, hòa tan viên sủi C vào nước.","<b>Enthalpy tạo thành chuẩn (∆<sub>f</sub>H°<sub>298</sub>):</b> Nhiệt kèm theo phản ứng tạo thành 1 mol chất từ các đơn chất bền nhất. Quy ước: ∆<sub>f</sub>H°<sub>298</sub> của đơn chất bền = 0 kJ/mol."]},{"title":"2. Hai Công Thức Tính Biến Thiên Enthalpy Chuẩn","icon":"📐","content":["<b>1. Theo Enthalpy tạo thành chuẩn:</b><br/><div class=\"p-2.5 bg-indigo-50 border border-indigo-200 rounded-xl font-bold text-center text-indigo-700 my-1.5\">∆<sub>r</sub>H°<sub>298</sub> = ∑ ∆<sub>f</sub>H°<sub>298</sub> (Sản phẩm) – ∑ ∆<sub>f</sub>H°<sub>298</sub> (Chất đầu)</div>","<b>2. Theo Năng lượng liên kết (cho chất khí):</b><br/><div class=\"p-2.5 bg-teal-50 border border-teal-200 rounded-xl font-bold text-center text-teal-700 my-1.5\">∆<sub>r</sub>H°<sub>298</sub> = ∑ E<sub>b</sub> (Chất đầu) – ∑ E<sub>b</sub> (Sản phẩm)</div>"]}];

// ============================================================================
// HỆ THỐNG QUẢN LÝ TIẾN ĐỘ & GAMIFICATION LOCALSTORAGE
// ============================================================================
const STORAGE_PREFIX = 'hoa10_c5_';

export interface Chuong5ExamAttempt {
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
  autoSubmittedDueToViolation?: boolean;
  date: string;
  formattedDate: string;
  answers: Record<string | number, any>;
}

export interface Chuong5UserProgress {
  completedLessons: string[];
  examAttempts: Record<string, Chuong5ExamAttempt[]>;
  highestScores: Record<string, number>;
  totalTimeSpentSeconds: number;
  bookmarks: string[];
  streakDays: number;
  lastActiveDate: string;
  xpPoints: number;
}

export function getChuong5UserProgress(): Chuong5UserProgress {
  try {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}user_progress`);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Error loading Chuong 5 progress:', e);
  }
  return {
    completedLessons: [],
    examAttempts: {},
    highestScores: {},
    totalTimeSpentSeconds: 0,
    bookmarks: [],
    streakDays: 1,
    lastActiveDate: new Date().toISOString(),
    xpPoints: 0
  };
}

export function calculateChuong5ExamScore(questionsInput: any, userAnswers: Record<string | number, any>) {
  const questions: Chuong5Question[] = Array.isArray(questionsInput) 
    ? questionsInput 
    : (questionsInput?.questions || []);

  if (!questions || questions.length === 0) {
    return { totalScore: 0, part1Score: 0, part2Score: 0, part3Score: 0, correctCount: 0, totalQuestions: 0 };
  }

  let part1Score = 0;
  let part2Score = 0;
  let part3Score = 0;
  let correctCount = 0;

  questions.forEach(q => {
    const ans = userAnswers[q.id] || userAnswers[q.number] || userAnswers[q.displayNumber];
    if (ans === undefined || ans === null) return;

    if (q.part === 1) {
      const userLetter = typeof ans === 'string' ? ans.toUpperCase().trim() : '';
      const correctLetter = (q.correctAnswer || '').toUpperCase().trim();
      const matchedOpt = q.options?.find(o => o.isCorrect)?.letter?.toUpperCase()?.trim();
      if ((correctLetter && userLetter === correctLetter) || (matchedOpt && userLetter === matchedOpt)) {
        part1Score += 0.25;
        correctCount += 1;
      }
    } else if (q.part === 2) {
      if (typeof ans === 'object' && ans !== null) {
        let correctSubCount = 0;
        ['a', 'b', 'c', 'd'].forEach(subKey => {
          const userSubVal = ans[subKey];
          if (userSubVal === undefined || userSubVal === null) return;
          const opt = q.options?.find(o => o.letter?.toLowerCase() === subKey);
          if (opt && opt.isCorrect !== undefined) {
            const actualBool = Boolean(opt.isCorrect);
            const userBool = (userSubVal === true || userSubVal === 'true' || userSubVal === 'Đúng' || userSubVal === 'dung');
            if (actualBool === userBool) correctSubCount += 1;
          }
        });
        if (correctSubCount === 1) part2Score += 0.1;
        else if (correctSubCount === 2) part2Score += 0.25;
        else if (correctSubCount === 3) part2Score += 0.5;
        else if (correctSubCount === 4) {
          part2Score += 1.0;
          correctCount += 1;
        }
      }
    } else if (q.part === 3) {
      const userText = String(ans).trim().toLowerCase().replace(',', '.');
      const correctText = String(q.correctAnswer || '').trim().toLowerCase().replace(',', '.');
      if (correctText && userText === correctText) {
        part3Score += 0.5;
        correctCount += 1;
      }
    }
  });

  const totalScore = Math.min(10, Math.round((part1Score + part2Score + part3Score) * 100) / 100);
  return {
    totalScore,
    part1Score: Math.round(part1Score * 100) / 100,
    part2Score: Math.round(part2Score * 100) / 100,
    part3Score: Math.round(part3Score * 100) / 100,
    correctCount,
    totalQuestions: questions.length
  };
}

export function getChuong5ExamHistory(examId?: string): Chuong5ExamAttempt[] {
  try {
    const key = examId ? `${STORAGE_PREFIX}history_${examId}` : `${STORAGE_PREFIX}history_all`;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

export function saveChuong5ExamAttempt(attempt: Chuong5ExamAttempt) {
  try {
    const examKey = `${STORAGE_PREFIX}history_${attempt.examId}`;
    const examHist: Chuong5ExamAttempt[] = JSON.parse(localStorage.getItem(examKey) || '[]');
    examHist.unshift(attempt);
    localStorage.setItem(examKey, JSON.stringify(examHist.slice(0, 30)));

    const allKey = `${STORAGE_PREFIX}history_all`;
    const allHist: Chuong5ExamAttempt[] = JSON.parse(localStorage.getItem(allKey) || '[]');
    allHist.unshift(attempt);
    localStorage.setItem(allKey, JSON.stringify(allHist.slice(0, 50)));

    const prog = getChuong5UserProgress();
    const curHigh = prog.highestScores[attempt.examId] || 0;
    if (attempt.score > curHigh) {
      prog.highestScores[attempt.examId] = attempt.score;
    }
    prog.xpPoints += Math.round(attempt.score * 10);
    localStorage.setItem(`${STORAGE_PREFIX}user_progress`, JSON.stringify(prog));
  } catch (e) {
    console.error('Error saving exam attempt:', e);
  }
}

export function saveChuong5ExamResult(examId: string, score: number, durationSeconds: number = 0) {
  saveChuong5ExamAttempt({
    id: `att_${Date.now()}`,
    examId,
    examTitle: examId,
    score,
    part1Score: 0,
    part2Score: 0,
    part3Score: 0,
    correctCount: 0,
    totalQuestions: 28,
    durationSeconds,
    tabSwitchCount: 0,
    date: new Date().toISOString(),
    formattedDate: new Date().toLocaleDateString('vi-VN'),
    answers: {}
  });
}

export function shuffleChuong5Exam(exam: Chuong5Exam): Chuong5Exam {
  if (!exam || !exam.questions) return exam;
  const p1 = exam.questions.filter(q => q.part === 1);
  const p2 = exam.questions.filter(q => q.part === 2);
  const p3 = exam.questions.filter(q => q.part === 3);

  const shuffleArr = (arr: any[]) => {
    const res = [...arr];
    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [res[i], res[j]] = [res[j], res[i]];
    }
    return res;
  };

  const shuffledP1 = shuffleArr(p1);
  const shuffledP2 = shuffleArr(p2);
  const shuffledP3 = shuffleArr(p3);

  let num = 1;
  const renumbered: Chuong5Question[] = [];
  [shuffledP1, shuffledP2, shuffledP3].forEach(subList => {
    subList.forEach(q => {
      renumbered.push({
        ...q,
        number: num,
        displayNumber: num
      });
      num += 1;
    });
  });

  return {
    ...exam,
    questions: renumbered
  };
}

export function getChuong5RankTitle(xp: number): string {
  if (xp >= 500) return '🏅 Bậc Thầy Hóa Học 10';
  if (xp >= 300) return '🌟 Thủ Khoa Triển Vọng';
  if (xp >= 150) return '⚡ Dũng Sĩ Luyện Đề';
  if (xp >= 50)  return '🌱 Chiến Binh Tập Sự';
  return '📚 Tân Binh Khối 10';
}

export const getRankTitle = getChuong5RankTitle;

export class Hoa10Chuong5Service {
  static getLessons() { return HOA10_CHUONG5_LESSONS; }
  static getExams() { return HOA10_CHUONG5_EXAMS; }
  static getHandbook() { return HOA10_CHUONG5_HANDBOOK; }
}
