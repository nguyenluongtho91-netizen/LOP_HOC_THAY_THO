// ══════════════════════════════════════════════════════════════════════════════
// DỮ LIỆU KHÓA HỌC: LẤY GỐC HÓA HỌC NỀN TẢNG (9 ĐỀ TOÀN DIỆN - 360 CÂU HỎI)
// DÀNH CHO HỌC SINH MẤT GỐC LỚP 8, 9, 10, 11, 12 VÀ ÔN THI THPT QUỐC GIA / ĐẠI HỌC
// TÁC GIẢ: THẦY NGUYỄN LƯƠNG THỌ (1991 - TÂN MÙI)
// ══════════════════════════════════════════════════════════════════════════════

export interface KhoaHocHoaQuestion {
  id: number;
  question: string;
  mathExpression?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface KhoaHocHoaExam {
  id: string;
  examNo: number;
  title: string;
  shortTitle: string;
  icon: string;
  desc: string;
  questions: KhoaHocHoaQuestion[];
}

export const KHOA_HOC_HOA_META = {
  courseId: 'f925edc9-0a65-48a9-8f74-1793c75beff9',
  title: 'LẤY GỐC HÓA HỌC NỀN TẢNG (9 ĐỀ TOÀN DIỆN)',
  subTitle: 'Bộ 9 Đề Chuẩn Bộ GD&ĐT Bao Quát Trọn Vẹn Kiến Thức Hóa Học Vô Cơ 10, 11, 12 & Đại Học',
  author: 'Thầy Nguyễn Lương Thọ (Tân Mùi 1991)',
  badge: '9 CHUYÊN ĐỀ TOÀN DIỆN (360 CÂU HỎI)',
  totalExams: 9,
  totalQuestions: 360,
  durationMinutes: 40
};

export const KHOA_HOC_HOA_EXAMS: KhoaHocHoaExam[] = [
  {
    id: 'de_1',
    examNo: 1,
    title: 'Đề 1: Nhận Biết Tên Nguyên Tố Từ Kí Hiệu Hóa Học',
    shortTitle: 'Đề 1: Kí Hiệu ➔ Tên Nguyên Tố',
    icon: '🔤',
    desc: 'Bao quát trọn vẹn 40 nguyên tố hay thi trong đề thi 10, 11, 12 và THPT Quốc Gia (chuẩn tên mới SGK IUPAC & tên Việt quen thuộc).',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Kí hiệu hóa học \'H\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{H}',
        options: ['Boron / Bo', 'Hydrogen / Hiđro', 'Lithium / Liti', 'Beryllium / Beri'],
        correctAnswer: 'Hydrogen / Hiđro',
        explanation: '👉 Kí hiệu H là của nguyên tố Hydrogen / Hiđro. Nguyên tố nhẹ nhất trong bảng tuần hoàn.'
      },      {
        id: 2,
        question: 'Câu 2: Kí hiệu hóa học \'He\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{He}',
        options: ['Sodium / Natri', 'Carbon / Cacbon', 'Helium / Heli', 'Sulfur / Lưu huỳnh'],
        correctAnswer: 'Helium / Heli',
        explanation: '👉 Kí hiệu He là của nguyên tố Helium / Heli. Khí hiếm nhẹ thứ 2, ứng dụng bơm bóng thám không, khinh khí cầu.'
      },      {
        id: 3,
        question: 'Câu 3: Kí hiệu hóa học \'Li\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Li}',
        options: ['Fluorine / Flo', 'Zinc / Kẽm', 'Argon', 'Lithium / Liti'],
        correctAnswer: 'Lithium / Liti',
        explanation: '👉 Kí hiệu Li là của nguyên tố Lithium / Liti. Kim loại kiềm nhẹ nhất, nhóm IA, chế tạo pin Li-ion.'
      },      {
        id: 4,
        question: 'Câu 4: Kí hiệu hóa học \'Be\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Be}',
        options: ['Beryllium / Beri', 'Nickel / Niken', 'Tungsten / Vonfram', 'Magnesium / Magie'],
        correctAnswer: 'Beryllium / Beri',
        explanation: '👉 Kí hiệu Be là của nguyên tố Beryllium / Beri. Kim loại kiềm thổ nhóm IIA, không phản ứng với nước ở nhiệt độ thường.'
      },      {
        id: 5,
        question: 'Câu 5: Kí hiệu hóa học \'B\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{B}',
        options: ['Phosphorus / Photpho', 'Neon', 'Boron / Bo', 'Silver / Bạc'],
        correctAnswer: 'Boron / Bo',
        explanation: '👉 Kí hiệu B là của nguyên tố Boron / Bo. Phi kim nhóm IIIA, hợp chất quen thuộc: H3BO3, Na2B4O7 (hàn the).'
      },      {
        id: 6,
        question: 'Câu 6: Kí hiệu hóa học \'C\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{C}',
        options: ['Carbon / Cacbon', 'Argon', 'Platinum / Bạch kim', 'Chromium / Crom'],
        correctAnswer: 'Carbon / Cacbon',
        explanation: '👉 Kí hiệu C là của nguyên tố Carbon / Cacbon. Cốt lõi của Hóa hữu cơ; dạng thù hình: kim cương, than chì, fullerene.'
      },      {
        id: 7,
        question: 'Câu 7: Kí hiệu hóa học \'N\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{N}',
        options: ['Carbon / Cacbon', 'Silver / Bạc', 'Chromium / Crom', 'Nitrogen / Nitơ'],
        correctAnswer: 'Nitrogen / Nitơ',
        explanation: '👉 Kí hiệu N là của nguyên tố Nitrogen / Nitơ. Khí không màu, chiếm ~78% thể tích không khí.'
      },      {
        id: 8,
        question: 'Câu 8: Kí hiệu hóa học \'O\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{O}',
        options: ['Silicon / Silic', 'Lithium / Liti', 'Oxygen / Oxi', 'Cobalt / Coban'],
        correctAnswer: 'Oxygen / Oxi',
        explanation: '👉 Kí hiệu O là của nguyên tố Oxygen / Oxi. Nguyên tố phổ biến nhất vỏ Trái Đất, duy trì sự sống và sự cháy.'
      },      {
        id: 9,
        question: 'Câu 9: Kí hiệu hóa học \'F\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{F}',
        options: ['Zinc / Kẽm', 'Fluorine / Flo', 'Phosphorus / Photpho', 'Chromium / Crom'],
        correctAnswer: 'Fluorine / Flo',
        explanation: '👉 Kí hiệu F là của nguyên tố Fluorine / Flo. Phi kim có độ âm điện lớn nhất (3.98), tính oxi hóa mạnh nhất.'
      },      {
        id: 10,
        question: 'Câu 10: Kí hiệu hóa học \'Ne\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ne}',
        options: ['Neon', 'Bromine / Brom', 'Rubidium / Rubidi', 'Copper / Đồng'],
        correctAnswer: 'Neon',
        explanation: '👉 Kí hiệu Ne là của nguyên tố Neon. Khí hiếm chu kì 2, phát ánh sáng đỏ cam rực rỡ trong đèn quảng cáo.'
      },      {
        id: 11,
        question: 'Câu 11: Kí hiệu hóa học \'Na\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Na}',
        options: ['Tin / Thiếc', 'Xenon', 'Barium / Bari', 'Sodium / Natri'],
        correctAnswer: 'Sodium / Natri',
        explanation: '👉 Kí hiệu Na là của nguyên tố Sodium / Natri. Kim loại kiềm nhóm IA, cháy cho ngọn lửa màu vàng rực đặc trưng.'
      },      {
        id: 12,
        question: 'Câu 12: Kí hiệu hóa học \'Mg\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Mg}',
        options: ['Magnesium / Magie', 'Oxygen / Oxi', 'Helium / Heli', 'Caesium / Xesi'],
        correctAnswer: 'Magnesium / Magie',
        explanation: '👉 Kí hiệu Mg là của nguyên tố Magnesium / Magie. Kim loại nhóm IIA, cháy trong không khí phát ánh sáng trắng chói lòa.'
      },      {
        id: 13,
        question: 'Câu 13: Kí hiệu hóa học \'Al\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Al}',
        options: ['Calcium / Canxi', 'Aluminium / Nhôm', 'Platinum / Bạch kim', 'Fluorine / Flo'],
        correctAnswer: 'Aluminium / Nhôm',
        explanation: '👉 Kí hiệu Al là của nguyên tố Aluminium / Nhôm. Kim loại phổ biến nhất vỏ Trái Đất; oxide Al2O3 và hydroxide Al(OH)3 lưỡng tính.'
      },      {
        id: 14,
        question: 'Câu 14: Kí hiệu hóa học \'Si\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Si}',
        options: ['Chlorine / Clo', 'Helium / Heli', 'Silicon / Silic', 'Strontium / Stronti'],
        correctAnswer: 'Silicon / Silic',
        explanation: '👉 Kí hiệu Si là của nguyên tố Silicon / Silic. Phi kim bán dẫn then chốt trong ngành công nghiệp chip và vi mạch bán dẫn.'
      },      {
        id: 15,
        question: 'Câu 15: Kí hiệu hóa học \'P\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{P}',
        options: ['Boron / Bo', 'Helium / Heli', 'Cobalt / Coban', 'Phosphorus / Photpho'],
        correctAnswer: 'Phosphorus / Photpho',
        explanation: '👉 Kí hiệu P là của nguyên tố Phosphorus / Photpho. Dạng photpho trắng độc, tự bốc cháy; photpho đỏ bền hơn.'
      },      {
        id: 16,
        question: 'Câu 16: Kí hiệu hóa học \'S\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{S}',
        options: ['Sulfur / Lưu huỳnh', 'Strontium / Stronti', 'Aluminium / Nhôm', 'Oxygen / Oxi'],
        correctAnswer: 'Sulfur / Lưu huỳnh',
        explanation: '👉 Kí hiệu S là của nguyên tố Sulfur / Lưu huỳnh. Chất rắn màu vàng, dùng sản xuất H2SO4 và lưu hóa cao su.'
      },      {
        id: 17,
        question: 'Câu 17: Kí hiệu hóa học \'Cl\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Cl}',
        options: ['Sodium / Natri', 'Nickel / Niken', 'Chlorine / Clo', 'Tungsten / Vonfram'],
        correctAnswer: 'Chlorine / Clo',
        explanation: '👉 Kí hiệu Cl là của nguyên tố Chlorine / Clo. Khí màu vàng lục, mùi hắc độc, dùng khử trùng nước sinh hoạt.'
      },      {
        id: 18,
        question: 'Câu 18: Kí hiệu hóa học \'Ar\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ar}',
        options: ['Argon', 'Silicon / Silic', 'Boron / Bo', 'Caesium / Xesi'],
        correctAnswer: 'Argon',
        explanation: '👉 Kí hiệu Ar là của nguyên tố Argon. Khí hiếm chiếm gần 1% thể tích khí quyển, làm môi trường trơ khi luyện kim, hàn.'
      },      {
        id: 19,
        question: 'Câu 19: Kí hiệu hóa học \'K\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{K}',
        options: ['Magnesium / Magie', 'Nitrogen / Nitơ', 'Chlorine / Clo', 'Potassium / Kali'],
        correctAnswer: 'Potassium / Kali',
        explanation: '👉 Kí hiệu K là của nguyên tố Potassium / Kali. Kim loại kiềm nhóm IA, khi cháy cho ngọn lửa màu tím hoa cà.'
      },      {
        id: 20,
        question: 'Câu 20: Kí hiệu hóa học \'Ca\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ca}',
        options: ['Potassium / Kali', 'Argon', 'Calcium / Canxi', 'Chromium / Crom'],
        correctAnswer: 'Calcium / Canxi',
        explanation: '👉 Kí hiệu Ca là của nguyên tố Calcium / Canxi. Kim loại kiềm thổ nhóm IIA, thành phần chính trong xương, răng, đá vôi (CaCO3).'
      },      {
        id: 21,
        question: 'Câu 21: Kí hiệu hóa học \'Cr\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Cr}',
        options: ['Cobalt / Coban', 'Chromium / Crom', 'Rubidium / Rubidi', 'Zinc / Kẽm'],
        correctAnswer: 'Chromium / Crom',
        explanation: '👉 Kí hiệu Cr là của nguyên tố Chromium / Crom. Kim loại cứng nhất bảng tuần hoàn (độ cứng 8.5/10, rạch được thủy tinh).'
      },      {
        id: 22,
        question: 'Câu 22: Kí hiệu hóa học \'Mn\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Mn}',
        options: ['Manganese / Mangan', 'Iodine / Iot', 'Zinc / Kẽm', 'Hydrogen / Hiđro'],
        correctAnswer: 'Manganese / Mangan',
        explanation: '👉 Kí hiệu Mn là của nguyên tố Manganese / Mangan. Hợp chất quan trọng: KMnO4 (thuốc tím), MnO2 (xúc tác).'
      },      {
        id: 23,
        question: 'Câu 23: Kí hiệu hóa học \'Fe\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Fe}',
        options: ['Rubidium / Rubidi', 'Hydrogen / Hiđro', 'Magnesium / Magie', 'Iron / Sắt'],
        correctAnswer: 'Iron / Sắt',
        explanation: '👉 Kí hiệu Fe là của nguyên tố Iron / Sắt. Kim loại có tính nhiễm từ, sản lượng sử dụng lớn nhất trong luyện kim.'
      },      {
        id: 24,
        question: 'Câu 24: Kí hiệu hóa học \'Co\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Co}',
        options: ['Cobalt / Coban', 'Iron / Sắt', 'Oxygen / Oxi', 'Tin / Thiếc'],
        correctAnswer: 'Cobalt / Coban',
        explanation: '👉 Kí hiệu Co là của nguyên tố Cobalt / Coban. Kim loại chuyển tiếp, thành phần trong vitamin B12.'
      },      {
        id: 25,
        question: 'Câu 25: Kí hiệu hóa học \'Ni\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ni}',
        options: ['Xenon', 'Nickel / Niken', 'Caesium / Xesi', 'Phosphorus / Photpho'],
        correctAnswer: 'Nickel / Niken',
        explanation: '👉 Kí hiệu Ni là của nguyên tố Nickel / Niken. Kim loại dẻo, chống ăn mòn tốt, dùng mạ kim loại và luyện inox.'
      },      {
        id: 26,
        question: 'Câu 26: Kí hiệu hóa học \'Cu\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Cu}',
        options: ['Manganese / Mangan', 'Platinum / Bạch kim', 'Copper / Đồng', 'Carbon / Cacbon'],
        correctAnswer: 'Copper / Đồng',
        explanation: '👉 Kí hiệu Cu là của nguyên tố Copper / Đồng. Kim loại màu đỏ ánh kim, dẫn điện và nhiệt tốt thứ 2 sau Bạc.'
      },      {
        id: 27,
        question: 'Câu 27: Kí hiệu hóa học \'Zn\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Zn}',
        options: ['Helium / Heli', 'Chlorine / Clo', 'Rubidium / Rubidi', 'Zinc / Kẽm'],
        correctAnswer: 'Zinc / Kẽm',
        explanation: '👉 Kí hiệu Zn là của nguyên tố Zinc / Kẽm. Kim loại chuyển tiếp; oxide ZnO và hydroxide Zn(OH)2 lưỡng tính.'
      },      {
        id: 28,
        question: 'Câu 28: Kí hiệu hóa học \'Br\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Br}',
        options: ['Bromine / Brom', 'Barium / Bari', 'Krypton', 'Boron / Bo'],
        correctAnswer: 'Bromine / Brom',
        explanation: '👉 Kí hiệu Br là của nguyên tố Bromine / Brom. Phi kim duy nhất ở thể lỏng ở điều kiện thường, màu nâu đỏ bốc khói độc.'
      },      {
        id: 29,
        question: 'Câu 29: Kí hiệu hóa học \'Kr\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Kr}',
        options: ['Oxygen / Oxi', 'Gold / Vàng', 'Krypton', 'Beryllium / Beri'],
        correctAnswer: 'Krypton',
        explanation: '👉 Kí hiệu Kr là của nguyên tố Krypton. Khí hiếm chu kì 4, dùng trong đèn laser và chiếu sáng sân bay.'
      },      {
        id: 30,
        question: 'Câu 30: Kí hiệu hóa học \'Rb\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Rb}',
        options: ['Rubidium / Rubidi', 'Sodium / Natri', 'Sodium / Natri', 'Sodium / Natri'],
        correctAnswer: 'Rubidium / Rubidi',
        explanation: '👉 Kí hiệu Rb là của nguyên tố Rubidium / Rubidi. Kim loại kiềm nhóm IA, phản ứng bốc cháy mãnh liệt khi tiếp xúc với nước.'
      },      {
        id: 31,
        question: 'Câu 31: Kí hiệu hóa học \'Sr\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Sr}',
        options: ['Argon', 'Manganese / Mangan', 'Silicon / Silic', 'Strontium / Stronti'],
        correctAnswer: 'Strontium / Stronti',
        explanation: '👉 Kí hiệu Sr là của nguyên tố Strontium / Stronti. Kim loại kiềm thổ nhóm IIA, muối stronti cháy cho ngọn lửa màu đỏ tươi (pháo hoa).'
      },      {
        id: 32,
        question: 'Câu 32: Kí hiệu hóa học \'Ag\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ag}',
        options: ['Nickel / Niken', 'Iodine / Iot', 'Silver / Bạc', 'Chlorine / Clo'],
        correctAnswer: 'Silver / Bạc',
        explanation: '👉 Kí hiệu Ag là của nguyên tố Silver / Bạc. Kim loại có độ dẫn điện và dẫn nhiệt tốt nhất trong tất cả các kim loại.'
      },      {
        id: 33,
        question: 'Câu 33: Kí hiệu hóa học \'Sn\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Sn}',
        options: ['Calcium / Canxi', 'Tin / Thiếc', 'Boron / Bo', 'Silver / Bạc'],
        correctAnswer: 'Tin / Thiếc',
        explanation: '👉 Kí hiệu Sn là của nguyên tố Tin / Thiếc. Kim loại dẻo nhóm IVA, dùng mạ bảo vệ đồ hộp sắt tây, làm hợp kim hàn thiếc.'
      },      {
        id: 34,
        question: 'Câu 34: Kí hiệu hóa học \'I\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{I}',
        options: ['Iodine / Iot', 'Gold / Vàng', 'Iron / Sắt', 'Sulfur / Lưu huỳnh'],
        correctAnswer: 'Iodine / Iot',
        explanation: '👉 Kí hiệu I là của nguyên tố Iodine / Iot. Chất rắn màu tím đen, có hiện tượng thăng hoa; thử hồ tinh bột hóa xanh tím.'
      },      {
        id: 35,
        question: 'Câu 35: Kí hiệu hóa học \'Xe\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Xe}',
        options: ['Copper / Đồng', 'Nitrogen / Nitơ', 'Zinc / Kẽm', 'Xenon'],
        correctAnswer: 'Xenon',
        explanation: '👉 Kí hiệu Xe là của nguyên tố Xenon. Khí hiếm chu kì 5, dùng trong đèn flash chụp ảnh công suất lớn và máy X-quang.'
      },      {
        id: 36,
        question: 'Câu 36: Kí hiệu hóa học \'Cs\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Cs}',
        options: ['Caesium / Xesi', 'Platinum / Bạch kim', 'Silicon / Silic', 'Krypton'],
        correctAnswer: 'Caesium / Xesi',
        explanation: '👉 Kí hiệu Cs là của nguyên tố Caesium / Xesi. Kim loại mềm nhất trong tất cả kim loại, dễ bay hơi, dùng chế tạo tế bào quang điện.'
      },      {
        id: 37,
        question: 'Câu 37: Kí hiệu hóa học \'Ba\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Ba}',
        options: ['Neon', 'Barium / Bari', 'Silver / Bạc', 'Chromium / Crom'],
        correctAnswer: 'Barium / Bari',
        explanation: '👉 Kí hiệu Ba là của nguyên tố Barium / Bari. Kim loại kiềm thổ nhóm IIA, muối BaSO4 kết tủa trắng không tan trong acid mạnh.'
      },      {
        id: 38,
        question: 'Câu 38: Kí hiệu hóa học \'W\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{W}',
        options: ['Bromine / Brom', 'Xenon', 'Tungsten / Vonfram', 'Chromium / Crom'],
        correctAnswer: 'Tungsten / Vonfram',
        explanation: '👉 Kí hiệu W là của nguyên tố Tungsten / Vonfram. Kim loại có nhiệt độ nóng chảy cao nhất (~3422 °C), làm dây tóc bóng đèn.'
      },      {
        id: 39,
        question: 'Câu 39: Kí hiệu hóa học \'Pt\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Pt}',
        options: ['Tungsten / Vonfram', 'Silver / Bạc', 'Xenon', 'Platinum / Bạch kim'],
        correctAnswer: 'Platinum / Bạch kim',
        explanation: '👉 Kí hiệu Pt là của nguyên tố Platinum / Bạch kim. Kim loại quý trơ về mặt hóa học, làm đồ trang sức cao cấp và xúc tác tổng hợp.'
      },      {
        id: 40,
        question: 'Câu 40: Kí hiệu hóa học \'Au\' tương ứng với tên nguyên tố nào sau đây?',
        mathExpression: '\\mathbf{Au}',
        options: ['Gold / Vàng', 'Lithium / Liti', 'Beryllium / Beri', 'Helium / Heli'],
        correctAnswer: 'Gold / Vàng',
        explanation: '👉 Kí hiệu Au là của nguyên tố Gold / Vàng. Kim loại dẻo nhất (1 gam có thể dát mỏng thành 1 m²), dẫn điện tốt, trơ.'
      },    ]
  },
  {
    id: 'de_2',
    examNo: 2,
    title: 'Đề 2: Nhận Biết Kí Hiệu Hóa Học Từ Tên Nguyên Tố (Đề Ngược Lại)',
    shortTitle: 'Đề 2: Tên Nguyên Tố ➔ Kí Hiệu',
    icon: '🔄',
    desc: 'Luyện phản xạ ngược từ tên nguyên tố suy ra kí hiệu hóa học chuẩn xác, vượt qua các bẫy kí hiệu quen thuộc trong đề thi đại học.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Nguyên tố \'Hydrogen / Hiđro\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Hg', 'Hf', 'He', 'H'],
        correctAnswer: 'H',
        explanation: '👉 Nguyên tố Hydrogen / Hiđro có kí hiệu hóa học chuẩn là H. Nguyên tố nhẹ nhất trong bảng tuần hoàn.'
      },      {
        id: 2,
        question: 'Câu 2: Nguyên tố \'Helium / Heli\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Hg', 'H', 'He', 'Hf'],
        correctAnswer: 'He',
        explanation: '👉 Nguyên tố Helium / Heli có kí hiệu hóa học chuẩn là He. Khí hiếm nhẹ thứ 2, ứng dụng bơm bóng thám không, khinh khí cầu.'
      },      {
        id: 3,
        question: 'Câu 3: Nguyên tố \'Lithium / Liti\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['L', 'Li', 'Lu', 'La'],
        correctAnswer: 'Li',
        explanation: '👉 Nguyên tố Lithium / Liti có kí hiệu hóa học chuẩn là Li. Kim loại kiềm nhẹ nhất, nhóm IA, chế tạo pin Li-ion.'
      },      {
        id: 4,
        question: 'Câu 4: Nguyên tố \'Beryllium / Beri\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Be', 'Ba', 'Br', 'B'],
        correctAnswer: 'Be',
        explanation: '👉 Nguyên tố Beryllium / Beri có kí hiệu hóa học chuẩn là Be. Kim loại kiềm thổ nhóm IIA, không phản ứng với nước ở nhiệt độ thường.'
      },      {
        id: 5,
        question: 'Câu 5: Nguyên tố \'Boron / Bo\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Be', 'Ba', 'Br', 'B'],
        correctAnswer: 'B',
        explanation: '👉 Nguyên tố Boron / Bo có kí hiệu hóa học chuẩn là B. Phi kim nhóm IIIA, hợp chất quen thuộc: H3BO3, Na2B4O7 (hàn the).'
      },      {
        id: 6,
        question: 'Câu 6: Nguyên tố \'Carbon / Cacbon\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['C', 'Ca', 'Cl', 'Cr'],
        correctAnswer: 'C',
        explanation: '👉 Nguyên tố Carbon / Cacbon có kí hiệu hóa học chuẩn là C. Cốt lõi của Hóa hữu cơ; dạng thù hình: kim cương, than chì, fullerene.'
      },      {
        id: 7,
        question: 'Câu 7: Nguyên tố \'Nitrogen / Nitơ\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Ni', 'N', 'Na', 'Ne'],
        correctAnswer: 'N',
        explanation: '👉 Nguyên tố Nitrogen / Nitơ có kí hiệu hóa học chuẩn là N. Khí không màu, chiếm ~78% thể tích không khí.'
      },      {
        id: 8,
        question: 'Câu 8: Nguyên tố \'Oxygen / Oxi\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Og', 'Au', 'O', 'Os'],
        correctAnswer: 'O',
        explanation: '👉 Nguyên tố Oxygen / Oxi có kí hiệu hóa học chuẩn là O. Nguyên tố phổ biến nhất vỏ Trái Đất, duy trì sự sống và sự cháy.'
      },      {
        id: 9,
        question: 'Câu 9: Nguyên tố \'Fluorine / Flo\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Fe', 'Fl', 'Fr', 'F'],
        correctAnswer: 'F',
        explanation: '👉 Nguyên tố Fluorine / Flo có kí hiệu hóa học chuẩn là F. Phi kim có độ âm điện lớn nhất (3.98), tính oxi hóa mạnh nhất.'
      },      {
        id: 10,
        question: 'Câu 10: Nguyên tố \'Neon\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Ne', 'N', 'Na', 'Ni'],
        correctAnswer: 'Ne',
        explanation: '👉 Nguyên tố Neon có kí hiệu hóa học chuẩn là Ne. Khí hiếm chu kì 2, phát ánh sáng đỏ cam rực rỡ trong đèn quảng cáo.'
      },      {
        id: 11,
        question: 'Câu 11: Nguyên tố \'Sodium / Natri\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['N', 'S', 'Na', 'K'],
        correctAnswer: 'Na',
        explanation: '👉 Nguyên tố Sodium / Natri có kí hiệu hóa học chuẩn là Na. Kim loại kiềm nhóm IA, cháy cho ngọn lửa màu vàng rực đặc trưng.'
      },      {
        id: 12,
        question: 'Câu 12: Nguyên tố \'Magnesium / Magie\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Mg', 'Hg', 'Mo', 'Mn'],
        correctAnswer: 'Mg',
        explanation: '👉 Nguyên tố Magnesium / Magie có kí hiệu hóa học chuẩn là Mg. Kim loại nhóm IIA, cháy trong không khí phát ánh sáng trắng chói lòa.'
      },      {
        id: 13,
        question: 'Câu 13: Nguyên tố \'Aluminium / Nhôm\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Au', 'Ar', 'Ag', 'Al'],
        correctAnswer: 'Al',
        explanation: '👉 Nguyên tố Aluminium / Nhôm có kí hiệu hóa học chuẩn là Al. Kim loại phổ biến nhất vỏ Trái Đất; oxide Al2O3 và hydroxide Al(OH)3 lưỡng tính.'
      },      {
        id: 14,
        question: 'Câu 14: Nguyên tố \'Silicon / Silic\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Se', 'S', 'Si', 'Sc'],
        correctAnswer: 'Si',
        explanation: '👉 Nguyên tố Silicon / Silic có kí hiệu hóa học chuẩn là Si. Phi kim bán dẫn then chốt trong ngành công nghiệp chip và vi mạch bán dẫn.'
      },      {
        id: 15,
        question: 'Câu 15: Nguyên tố \'Phosphorus / Photpho\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['K', 'P', 'Pb', 'Pt'],
        correctAnswer: 'P',
        explanation: '👉 Nguyên tố Phosphorus / Photpho có kí hiệu hóa học chuẩn là P. Dạng photpho trắng độc, tự bốc cháy; photpho đỏ bền hơn.'
      },      {
        id: 16,
        question: 'Câu 16: Nguyên tố \'Sulfur / Lưu huỳnh\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['S', 'Se', 'Sc', 'Si'],
        correctAnswer: 'S',
        explanation: '👉 Nguyên tố Sulfur / Lưu huỳnh có kí hiệu hóa học chuẩn là S. Chất rắn màu vàng, dùng sản xuất H2SO4 và lưu hóa cao su.'
      },      {
        id: 17,
        question: 'Câu 17: Nguyên tố \'Chlorine / Clo\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['C', 'Ca', 'Cr', 'Cl'],
        correctAnswer: 'Cl',
        explanation: '👉 Nguyên tố Chlorine / Clo có kí hiệu hóa học chuẩn là Cl. Khí màu vàng lục, mùi hắc độc, dùng khử trùng nước sinh hoạt.'
      },      {
        id: 18,
        question: 'Câu 18: Nguyên tố \'Argon\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Ar', 'Al', 'Ag', 'Au'],
        correctAnswer: 'Ar',
        explanation: '👉 Nguyên tố Argon có kí hiệu hóa học chuẩn là Ar. Khí hiếm chiếm gần 1% thể tích khí quyển, làm môi trường trơ khi luyện kim, hàn.'
      },      {
        id: 19,
        question: 'Câu 19: Nguyên tố \'Potassium / Kali\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Kr', 'K', 'Ca', 'P'],
        correctAnswer: 'K',
        explanation: '👉 Nguyên tố Potassium / Kali có kí hiệu hóa học chuẩn là K. Kim loại kiềm nhóm IA, khi cháy cho ngọn lửa màu tím hoa cà.'
      },      {
        id: 20,
        question: 'Câu 20: Nguyên tố \'Calcium / Canxi\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Cl', 'Cr', 'Ca', 'C'],
        correctAnswer: 'Ca',
        explanation: '👉 Nguyên tố Calcium / Canxi có kí hiệu hóa học chuẩn là Ca. Kim loại kiềm thổ nhóm IIA, thành phần chính trong xương, răng, đá vôi (CaCO3).'
      },      {
        id: 21,
        question: 'Câu 21: Nguyên tố \'Chromium / Crom\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['C', 'Ca', 'Cl', 'Cr'],
        correctAnswer: 'Cr',
        explanation: '👉 Nguyên tố Chromium / Crom có kí hiệu hóa học chuẩn là Cr. Kim loại cứng nhất bảng tuần hoàn (độ cứng 8.5/10, rạch được thủy tinh).'
      },      {
        id: 22,
        question: 'Câu 22: Nguyên tố \'Manganese / Mangan\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Mn', 'Mo', 'Mg', 'Hg'],
        correctAnswer: 'Mn',
        explanation: '👉 Nguyên tố Manganese / Mangan có kí hiệu hóa học chuẩn là Mn. Hợp chất quan trọng: KMnO4 (thuốc tím), MnO2 (xúc tác).'
      },      {
        id: 23,
        question: 'Câu 23: Nguyên tố \'Iron / Sắt\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['S', 'Ir', 'Fe', 'St'],
        correctAnswer: 'Fe',
        explanation: '👉 Nguyên tố Iron / Sắt có kí hiệu hóa học chuẩn là Fe. Kim loại có tính nhiễm từ, sản lượng sử dụng lớn nhất trong luyện kim.'
      },      {
        id: 24,
        question: 'Câu 24: Nguyên tố \'Cobalt / Coban\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Co', 'Cd', 'Cr', 'Cu'],
        correctAnswer: 'Co',
        explanation: '👉 Nguyên tố Cobalt / Coban có kí hiệu hóa học chuẩn là Co. Kim loại chuyển tiếp, thành phần trong vitamin B12.'
      },      {
        id: 25,
        question: 'Câu 25: Nguyên tố \'Nickel / Niken\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Na', 'Ne', 'N', 'Ni'],
        correctAnswer: 'Ni',
        explanation: '👉 Nguyên tố Nickel / Niken có kí hiệu hóa học chuẩn là Ni. Kim loại dẻo, chống ăn mòn tốt, dùng mạ kim loại và luyện inox.'
      },      {
        id: 26,
        question: 'Câu 26: Nguyên tố \'Copper / Đồng\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Cr', 'Co', 'Cu', 'Cd'],
        correctAnswer: 'Cu',
        explanation: '👉 Nguyên tố Copper / Đồng có kí hiệu hóa học chuẩn là Cu. Kim loại màu đỏ ánh kim, dẫn điện và nhiệt tốt thứ 2 sau Bạc.'
      },      {
        id: 27,
        question: 'Câu 27: Nguyên tố \'Zinc / Kẽm\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Z', 'Zn', 'K', 'Ni'],
        correctAnswer: 'Zn',
        explanation: '👉 Nguyên tố Zinc / Kẽm có kí hiệu hóa học chuẩn là Zn. Kim loại chuyển tiếp; oxide ZnO và hydroxide Zn(OH)2 lưỡng tính.'
      },      {
        id: 28,
        question: 'Câu 28: Nguyên tố \'Bromine / Brom\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Br', 'Ba', 'Be', 'B'],
        correctAnswer: 'Br',
        explanation: '👉 Nguyên tố Bromine / Brom có kí hiệu hóa học chuẩn là Br. Phi kim duy nhất ở thể lỏng ở điều kiện thường, màu nâu đỏ bốc khói độc.'
      },      {
        id: 29,
        question: 'Câu 29: Nguyên tố \'Krypton\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['K', 'Ca', 'Cr', 'Kr'],
        correctAnswer: 'Kr',
        explanation: '👉 Nguyên tố Krypton có kí hiệu hóa học chuẩn là Kr. Khí hiếm chu kì 4, dùng trong đèn laser và chiếu sáng sân bay.'
      },      {
        id: 30,
        question: 'Câu 30: Nguyên tố \'Rubidium / Rubidi\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Rb', 'R', 'Re', 'Rh'],
        correctAnswer: 'Rb',
        explanation: '👉 Nguyên tố Rubidium / Rubidi có kí hiệu hóa học chuẩn là Rb. Kim loại kiềm nhóm IA, phản ứng bốc cháy mãnh liệt khi tiếp xúc với nước.'
      },      {
        id: 31,
        question: 'Câu 31: Nguyên tố \'Strontium / Stronti\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Sn', 'Sr', 'S', 'Si'],
        correctAnswer: 'Sr',
        explanation: '👉 Nguyên tố Strontium / Stronti có kí hiệu hóa học chuẩn là Sr. Kim loại kiềm thổ nhóm IIA, muối stronti cháy cho ngọn lửa màu đỏ tươi (pháo hoa).'
      },      {
        id: 32,
        question: 'Câu 32: Nguyên tố \'Silver / Bạc\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Al', 'Ar', 'Ag', 'Au'],
        correctAnswer: 'Ag',
        explanation: '👉 Nguyên tố Silver / Bạc có kí hiệu hóa học chuẩn là Ag. Kim loại có độ dẫn điện và dẫn nhiệt tốt nhất trong tất cả các kim loại.'
      },      {
        id: 33,
        question: 'Câu 33: Nguyên tố \'Tin / Thiếc\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Ti', 'Tc', 'Th', 'Sn'],
        correctAnswer: 'Sn',
        explanation: '👉 Nguyên tố Tin / Thiếc có kí hiệu hóa học chuẩn là Sn. Kim loại dẻo nhóm IVA, dùng mạ bảo vệ đồ hộp sắt tây, làm hợp kim hàn thiếc.'
      },      {
        id: 34,
        question: 'Câu 34: Nguyên tố \'Iodine / Iot\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['I', 'In', 'Ir', 'Io'],
        correctAnswer: 'I',
        explanation: '👉 Nguyên tố Iodine / Iot có kí hiệu hóa học chuẩn là I. Chất rắn màu tím đen, có hiện tượng thăng hoa; thử hồ tinh bột hóa xanh tím.'
      },      {
        id: 35,
        question: 'Câu 35: Nguyên tố \'Xenon\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['X', 'Ar', 'Xe', 'Ne'],
        correctAnswer: 'Xe',
        explanation: '👉 Nguyên tố Xenon có kí hiệu hóa học chuẩn là Xe. Khí hiếm chu kì 5, dùng trong đèn flash chụp ảnh công suất lớn và máy X-quang.'
      },      {
        id: 36,
        question: 'Câu 36: Nguyên tố \'Caesium / Xesi\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Cs', 'Cr', 'Ca', 'C'],
        correctAnswer: 'Cs',
        explanation: '👉 Nguyên tố Caesium / Xesi có kí hiệu hóa học chuẩn là Cs. Kim loại mềm nhất trong tất cả kim loại, dễ bay hơi, dùng chế tạo tế bào quang điện.'
      },      {
        id: 37,
        question: 'Câu 37: Nguyên tố \'Barium / Bari\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Br', 'Be', 'B', 'Ba'],
        correctAnswer: 'Ba',
        explanation: '👉 Nguyên tố Barium / Bari có kí hiệu hóa học chuẩn là Ba. Kim loại kiềm thổ nhóm IIA, muối BaSO4 kết tủa trắng không tan trong acid mạnh.'
      },      {
        id: 38,
        question: 'Câu 38: Nguyên tố \'Tungsten / Vonfram\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Mo', 'V', 'W', 'Ti'],
        correctAnswer: 'W',
        explanation: '👉 Nguyên tố Tungsten / Vonfram có kí hiệu hóa học chuẩn là W. Kim loại có nhiệt độ nóng chảy cao nhất (~3422 °C), làm dây tóc bóng đèn.'
      },      {
        id: 39,
        question: 'Câu 39: Nguyên tố \'Platinum / Bạch kim\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['P', 'Pt', 'Pd', 'Pb'],
        correctAnswer: 'Pt',
        explanation: '👉 Nguyên tố Platinum / Bạch kim có kí hiệu hóa học chuẩn là Pt. Kim loại quý trơ về mặt hóa học, làm đồ trang sức cao cấp và xúc tác tổng hợp.'
      },      {
        id: 40,
        question: 'Câu 40: Nguyên tố \'Gold / Vàng\' có kí hiệu hóa học chuẩn xác là gì?',
        options: ['Au', 'Al', 'Ar', 'Ag'],
        correctAnswer: 'Au',
        explanation: '👉 Nguyên tố Gold / Vàng có kí hiệu hóa học chuẩn là Au. Kim loại dẻo nhất (1 gam có thể dát mỏng thành 1 m²), dẫn điện tốt, trơ.'
      },    ]
  },
  {
    id: 'de_3',
    examNo: 3,
    title: 'Đề 3: Phân Loại Đơn Chất (Kim Loại - Phi Kim - Khí Hiếm & Tính Chất Đặc Trưng)',
    shortTitle: 'Đề 3: Kim Loại - Phi Kim - Khí Hiếm',
    icon: '⚡',
    desc: 'Nhận diện bản chất đơn chất; ghi nhớ trọn vẹn nhóm khí hiếm (He, Ne, Ar, Kr, Xe, Rn) và các kỉ lục kim loại hay thi đại học.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Khí hiếm He (Helium) thuộc nhóm nào trong bảng tuần hoàn?',
        options: ['Kim loại kiềm (Nhóm IA)', 'Phi kim halogen (Nhóm VIIA)', 'Kim loại chuyển tiếp', 'Khí hiếm (Nhóm VIIIA)'],
        correctAnswer: 'Khí hiếm (Nhóm VIIIA)',
        explanation: '👉 Heli là khí hiếm đứng đầu nhóm VIIIA, chu kì 1.'
      },      {
        id: 2,
        question: 'Câu 2: Khí hiếm Ne (Neon) có cấu hình electron lớp ngoài cùng là gì?',
        options: ['2s² 2p⁶ (bền vững)', '2s² 2p⁴', '2s² 2p⁵', '3s² 3p⁶'],
        correctAnswer: '2s² 2p⁶ (bền vững)',
        explanation: '👉 Neon (Z=10) có 8 electron lớp ngoài cùng bền vững (2s² 2p⁶).'
      },      {
        id: 3,
        question: 'Câu 3: Khí hiếm nào sau đây chiếm thể tích lớn nhất trong không khí quyển (~0.93%)?',
        options: ['Helium (He)', 'Argon (Ar)', 'Krypton (Kr)', 'Neon (Ne)'],
        correctAnswer: 'Argon (Ar)',
        explanation: '👉 Argon là khí hiếm phổ biến nhất trong không khí quyển Trái Đất.'
      },      {
        id: 4,
        question: 'Câu 4: Đơn chất nào sau đây là khí hiếm được dùng trong đèn laser và bóng đèn chụp ảnh tốc độ cao?',
        options: ['Calcium (Ca)', 'Chlorine (Cl)', 'Krypton (Kr)', 'Potassium (K)'],
        correctAnswer: 'Krypton (Kr)',
        explanation: '👉 Krypton (Kr, Z=36) là khí hiếm ở chu kì 4.'
      },      {
        id: 5,
        question: 'Câu 5: Khí hiếm nào sau đây có nguyên tử khối lớn, dùng trong đèn flash công suất lớn?',
        options: ['Neon (Ne)', 'Helium (He)', 'Argon (Ar)', 'Xenon (Xe)'],
        correctAnswer: 'Xenon (Xe)',
        explanation: '👉 Xenon (Xe, Z=54) là khí hiếm chu kì 5.'
      },      {
        id: 6,
        question: 'Câu 6: Khí hiếm phóng xạ tự nhiên xuất hiện trong chuỗi phân rã phóng xạ của urani là gì?',
        options: ['Radon (Rn)', 'Radium (Ra)', 'Polonium (Po)', 'Uranium (U)'],
        correctAnswer: 'Radon (Rn)',
        explanation: '👉 Radon (Rn, Z=86) là khí hiếm phóng xạ thuộc chu kì 6.'
      },      {
        id: 7,
        question: 'Câu 7: Dãy chất nào sau đây gồm toàn các nguyên tố khí hiếm?',
        options: ['H, He, Li, Be, B', 'Na, K, Rb, Cs, Fr', 'He, Ne, Ar, Kr, Xe', 'F, Cl, Br, I, At'],
        correctAnswer: 'He, Ne, Ar, Kr, Xe',
        explanation: '👉 Tất cả các nguyên tố nhóm VIIIA đều là khí hiếm (trơ về mặt hóa học).'
      },      {
        id: 8,
        question: 'Câu 8: Nguyên tố nào sau đây KHÔNG phải là khí hiếm?',
        options: ['Kali (K)', 'Neon (Ne)', 'Argon (Ar)', 'Heli (He)'],
        correctAnswer: 'Kali (K)',
        explanation: '👉 Kali (K) là kim loại kiềm nhóm IA, không phải khí hiếm.'
      },      {
        id: 9,
        question: 'Câu 9: Nguyên tố nào sau đây thuộc nhóm khí hiếm?',
        options: ['Nitơ (N)', 'Niken (Ni)', 'Natri (Na)', 'Neon (Ne)'],
        correctAnswer: 'Neon (Ne)',
        explanation: '👉 Neon (Ne) là khí hiếm nhóm VIIIA.'
      },      {
        id: 10,
        question: 'Câu 10: Đặc điểm chung nổi bật nhất của các nguyên tử khí hiếm ở điều kiện thường là gì?',
        options: ['Dễ tạo ion dương 1+', 'Dễ tạo ion âm 1-', 'Phân tử chỉ gồm 1 nguyên tử (đơn nguyên tử) và rất trơ về mặt hóa học', 'Dễ liên kết đôi với nhau tạo phân tử 2 nguyên tử'],
        correctAnswer: 'Phân tử chỉ gồm 1 nguyên tử (đơn nguyên tử) và rất trơ về mặt hóa học',
        explanation: '👉 Khí hiếm có lớp vỏ ngoài cùng bão hòa e nên tồn tại ở dạng đơn nguyên tử trơ.'
      },      {
        id: 11,
        question: 'Câu 11: Đơn chất nào sau đây là phi kim duy nhất ở thể lỏng ở điều kiện thường (25 °C)?',
        options: ['Mercury (Hg)', 'Bromine (Br₂)', 'Chlorine (Cl₂)', 'Iodine (I₂)'],
        correctAnswer: 'Bromine (Br₂)',
        explanation: '👉 Bromine (Br₂) là phi kim duy nhất ở thể lỏng ở nhiệt độ thường; Hg là kim loại thể lỏng.'
      },      {
        id: 12,
        question: 'Câu 12: Phi kim nào sau đây có độ âm điện lớn nhất và tính oxi hóa mạnh nhất bảng tuần hoàn?',
        options: ['Fluorine (F)', 'Nitrogen (N)', 'Oxygen (O)', 'Chlorine (Cl)'],
        correctAnswer: 'Fluorine (F)',
        explanation: '👉 Fluorine (F) có độ âm điện 3.98 (lớn nhất), oxi hóa được hầu hết mọi đơn chất.'
      },      {
        id: 13,
        question: 'Câu 13: Đơn chất phi kim nào sau đây thăng hoa trực tiếp từ chất rắn thành hơi màu tím khi đun nóng?',
        options: ['Sulfur (S)', 'Phosphorus (P)', 'Carbon (C)', 'Iodine (I₂)'],
        correctAnswer: 'Iodine (I₂)',
        explanation: '👉 Iodine (I₂) rắn có tính chất thăng hoa đặc trưng tạo hơi tím và làm xanh hồ tinh bột.'
      },      {
        id: 14,
        question: 'Câu 14: Nguyên tố nào sau đây là phi kim dẫn điện được ở dạng thù hình than chì?',
        options: ['Carbon (C)', 'Sulfur (S)', 'Silicon (Si)', 'Phosphorus (P)'],
        correctAnswer: 'Carbon (C)',
        explanation: '👉 Than chì là dạng thù hình của Carbon có cấu trúc lớp dẫn điện tốt.'
      },      {
        id: 15,
        question: 'Câu 15: Chất bán dẫn then chốt dùng sản xuất chip vi xử lý và pin mặt trời là đơn chất nào?',
        options: ['Carbon (C)', 'Silicon (Si)', 'Aluminium (Al)', 'Tin (Sn)'],
        correctAnswer: 'Silicon (Si)',
        explanation: '👉 Silicon (Si) là phi kim bán dẫn cốt lõi của công nghệ vi điện tử hiện đại.'
      },      {
        id: 16,
        question: 'Câu 16: Khí nào sau đây chiếm khoảng 78% thể tích không khí Trái Đất?',
        options: ['Carbon dioxide (CO₂)', 'Argon (Ar)', 'Nitrogen (N₂)', 'Oxygen (O₂)'],
        correctAnswer: 'Nitrogen (N₂)',
        explanation: '👉 Khí Nitrogen (N₂) chiếm 78% thể tích khí quyển, duy trì áp suất khí quyển an toàn.'
      },      {
        id: 17,
        question: 'Câu 17: Chất rắn màu vàng, không tan trong nước, dùng để lưu hóa cao su và sản xuất axit sunfuric là gì?',
        options: ['Carbon (C)', 'Silic / Silicon (Si)', 'Photpho / Phosphorus (P)', 'Lưu huỳnh / Sulfur (S)'],
        correctAnswer: 'Lưu huỳnh / Sulfur (S)',
        explanation: '👉 Lưu huỳnh (S) là chất rắn màu vàng quen thuộc.'
      },      {
        id: 18,
        question: 'Câu 18: Dạng thù hình nào của photpho có tính độc, kém bền và tự bốc cháy trong không khí ở 40 °C?',
        options: ['Photpho trắng', 'Photpho đỏ', 'Photpho đen', 'Photpho tím'],
        correctAnswer: 'Photpho trắng',
        explanation: '👉 Photpho trắng có cấu trúc tứ diện P4, tự bốc cháy nên phải ngâm trong nước.'
      },      {
        id: 19,
        question: 'Câu 19: Chất khí màu vàng lục, mùi xốc hắc độc, dùng để tẩy trắng và tiệt trùng nước máy là gì?',
        options: ['Fluorine (F₂)', 'Nitrogen (N₂)', 'Chlorine (Cl₂)', 'Oxygen (O₂)'],
        correctAnswer: 'Chlorine (Cl₂)',
        explanation: '👉 Khí clo (Cl₂) tan một phần trong nước tạo nước clo có tính tẩy màu và sát trùng.'
      },      {
        id: 20,
        question: 'Câu 20: Phi kim nào sau đây cần thiết cho sự hô hấp của sinh vật và duy trì sự cháy?',
        options: ['Oxygen (O₂)', 'Nitrogen (N₂)', 'Carbon dioxide (CO₂)', 'Hydrogen (H₂)'],
        correctAnswer: 'Oxygen (O₂)',
        explanation: '👉 Khí Oxygen (O₂) duy trì sự sống và phản ứng cháy tỏa nhiệt.'
      },      {
        id: 21,
        question: 'Câu 21: Nguyên tố nào sau đây là nguyên tố nhẹ nhất trong vũ trụ và bảng tuần hoàn?',
        options: ['Helium (He)', 'Carbon (C)', 'Lithium (Li)', 'Hydrogen (H)'],
        correctAnswer: 'Hydrogen (H)',
        explanation: '👉 Hydrogen (H) có Z=1, khối lượng nguyên tử xấp xỉ 1 amu.'
      },      {
        id: 22,
        question: 'Câu 22: Dãy chất nào sau đây chỉ gồm các đơn chất phi kim?',
        options: ['He, Ne, Ar, Kr, Xe', 'Na, Mg, Al, Fe, Cu', 'C, S, P, Cl₂, O₂', 'Al, Fe, C, S, O₂'],
        correctAnswer: 'C, S, P, Cl₂, O₂',
        explanation: '👉 C, S, P, Cl₂, O₂ đều là các phi kim điển hình.'
      },      {
        id: 23,
        question: 'Câu 23: Kim loại nào sau đây có độ dẫn điện và dẫn nhiệt tốt nhất trong tất cả các kim loại?',
        options: ['Nhôm (Al)', 'Bạc (Ag)', 'Đồng (Cu)', 'Vàng (Au)'],
        correctAnswer: 'Bạc (Ag)',
        explanation: '👉 Thứ tự dẫn điện giảm dần hay thi: Ag > Cu > Au > Al > Fe.'
      },      {
        id: 24,
        question: 'Câu 24: Kim loại nào sau đây có độ cứng lớn nhất (rạch được thủy tinh)?',
        options: ['Chromium (Cr)', 'Diamond (Kim cương)', 'Iron (Fe)', 'Tungsten (W)'],
        correctAnswer: 'Chromium (Cr)',
        explanation: '👉 Crom (Cr) là kim loại cứng nhất (độ cứng 8.5/10 Mohs).'
      },      {
        id: 25,
        question: 'Câu 25: Kim loại nào sau đây có nhiệt độ nóng chảy cao nhất (~3422 °C), dùng làm dây tóc bóng đèn?',
        options: ['Sắt / Iron (Fe)', 'Đồng / Copper (Cu)', 'Bạch kim / Platinum (Pt)', 'Vonfram / Tungsten (W)'],
        correctAnswer: 'Vonfram / Tungsten (W)',
        explanation: '👉 Vonfram (W) có nhiệt độ nóng chảy cao nhất trong các kim loại.'
      },      {
        id: 26,
        question: 'Câu 26: Kim loại duy nhất ở thể lỏng ở nhiệt độ thường (25 °C) là kim loại nào?',
        options: ['Thủy ngân (Hg)', 'Gali (Ga)', 'Brom (Br)', 'Xesi (Cs)'],
        correctAnswer: 'Thủy ngân (Hg)',
        explanation: '👉 Thủy ngân (Hg) có nhiệt độ nóng chảy thấp nhất (-39 °C), ở thể lỏng ở nhiệt độ thường.'
      },      {
        id: 27,
        question: 'Câu 27: Kim loại nào sau đây có tính dẻo cao nhất (1 gam có thể dát mỏng thành lá rộng 1 m²)?',
        options: ['Bạc (Ag)', 'Vàng (Au)', 'Đồng (Cu)', 'Nhôm (Al)'],
        correctAnswer: 'Vàng (Au)',
        explanation: '👉 Vàng (Au) là kim loại dẻo nhất bảng tuần hoàn.'
      },      {
        id: 28,
        question: 'Câu 28: Kim loại nào sau đây có khối lượng riêng nhỏ nhất (kim loại nhẹ nhất)?',
        options: ['Aluminium (Al)', 'Magnesium (Mg)', 'Lithium (Li)', 'Sodium (Na)'],
        correctAnswer: 'Lithium (Li)',
        explanation: '👉 Liti (Li) có khối lượng riêng nhỏ nhất: D = 0.53 g/cm³, nổi trên mặt dầu hỏa.'
      },      {
        id: 29,
        question: 'Câu 29: Kim loại nào sau đây có khối lượng riêng lớn nhất (kim loại nặng nhất)?',
        options: ['Vàng (Au)', 'Bạch kim (Pt)', 'Chì (Pb)', 'Osmi (Os)'],
        correctAnswer: 'Osmi (Os)',
        explanation: '👉 Osmi (Os) có D = 22.6 g/cm³, là kim loại nặng nhất.'
      },      {
        id: 30,
        question: 'Câu 30: Kim loại nào sau đây mềm nhất, có thể dùng dao cắt dễ dàng và dùng làm tế bào quang điện?',
        options: ['Xesi / Caesium (Cs)', 'Liti / Lithium (Li)', 'Natri / Sodium (Na)', 'Nhôm / Aluminium (Al)'],
        correctAnswer: 'Xesi / Caesium (Cs)',
        explanation: '👉 Xesi (Cs) có năng lượng ion hóa nhỏ nhất, mềm nhất và ứng dụng làm tế bào quang điện.'
      },      {
        id: 31,
        question: 'Câu 31: Kim loại nào sau đây là kim loại phổ biến nhất trong vỏ Trái Đất?',
        options: ['Sắt (Fe)', 'Đồng (Cu)', 'Nhôm (Al)', 'Canxi (Ca)'],
        correctAnswer: 'Nhôm (Al)',
        explanation: '👉 Nhôm (Al) là kim loại phổ biến nhất vỏ Trái Đất (đứng thứ 3 sau Oxi và Silic).'
      },      {
        id: 32,
        question: 'Câu 32: Kim loại nào sau đây có tính nhiễm từ và được sử dụng với sản lượng lớn nhất thế giới?',
        options: ['Sắt (Fe)', 'Nhôm (Al)', 'Kẽm (Zn)', 'Đồng (Cu)'],
        correctAnswer: 'Sắt (Fe)',
        explanation: '👉 Sắt (Fe) có tính nhiễm từ mạnh và chiếm hơn 90% tổng sản lượng kim loại nhân loại sử dụng.'
      },      {
        id: 33,
        question: 'Câu 33: Nguyên tố nào sau đây thuộc nhóm kim loại kiềm (Nhóm IA)?',
        options: ['Magie (Mg)', 'Sắt (Fe)', 'Nhôm (Al)', 'Natri (Na)'],
        correctAnswer: 'Natri (Na)',
        explanation: '👉 Kim loại kiềm nhóm IA gồm: Li, Na, K, Rb, Cs, Fr.'
      },      {
        id: 34,
        question: 'Câu 34: Nguyên tố nào sau đây thuộc nhóm kim loại kiềm thổ (Nhóm IIA)?',
        options: ['Kali (K)', 'Natri (Na)', 'Canxi (Ca)', 'Nhôm (Al)'],
        correctAnswer: 'Canxi (Ca)',
        explanation: '👉 Kim loại kiềm thổ nhóm IIA gồm: Be, Mg, Ca, Sr, Ba, Ra.'
      },      {
        id: 35,
        question: 'Câu 35: Khi đốt cháy trên ngọn lửa đèn khí, muối của kim loại nào cho ngọn lửa màu vàng tươi đặc trưng?',
        options: ['Canxi (Ca)', 'Natri (Na)', 'Kali (K)', 'Bari (Ba)'],
        correctAnswer: 'Natri (Na)',
        explanation: '👉 Muối Natri cháy ngọn lửa màu vàng rực; Kali màu tím; Canxi màu đỏ cam; Bari màu lục gà non.'
      },      {
        id: 36,
        question: 'Câu 36: Khi đốt cháy trên ngọn lửa đèn khí, muối của kim loại nào cho ngọn lửa màu tím hoa cà?',
        options: ['Kali (K)', 'Bari (Ba)', 'Canxi (Ca)', 'Natri (Na)'],
        correctAnswer: 'Kali (K)',
        explanation: '👉 Muối Kali cháy cho ngọn lửa màu tím hoa cà đặc trưng.'
      },      {
        id: 37,
        question: 'Câu 37: Kim loại nào sau đây có màu đỏ ánh kim, dẫn điện và nhiệt xuất sắc?',
        options: ['Sắt (Fe)', 'Kẽm (Zn)', 'Chì (Pb)', 'Đồng (Cu)'],
        correctAnswer: 'Đồng (Cu)',
        explanation: '👉 Đồng (Cu) có màu đỏ đặc trưng và độ dẫn điện đứng thứ 2 sau Bạc.'
      },      {
        id: 38,
        question: 'Câu 38: Dãy kim loại nào sau đây phản ứng mãnh liệt với nước ở nhiệt độ thường giải phóng H₂?',
        options: ['Na, K, Ca, Ba', 'Al, Zn, Cr, Fe', 'Fe, Cu, Ag, Au', 'Mg, Cu, Pb, Sn'],
        correctAnswer: 'Na, K, Ca, Ba',
        explanation: '👉 Các kim loại kiềm (Na, K, Li, Rb, Cs) và kiềm thổ (Ca, Sr, Ba) tan mạnh trong nước giải phóng H₂.'
      },
      {
        id: 39,
        question: 'Câu 39: Kim loại kiềm nào sau đây có nhiệt độ nóng chảy rất thấp (~28.4 °C), có thể nóng chảy ngay trong lòng bàn tay vào mùa hè?',
        options: ['Xesi / Caesium (Cs)', 'Liti / Lithium (Li)', 'Natri / Sodium (Na)', 'Nhôm / Aluminium (Al)'],
        correctAnswer: 'Xesi / Caesium (Cs)',
        explanation: '👉 Xesi (Cs) có nhiệt độ nóng chảy chỉ 28.4 °C, là kim loại kiềm mềm nhất và dễ nóng chảy nhất.'
      },
      {
        id: 40,
        question: 'Câu 40: Phi kim nào sau đây ở thể khí màu lục nhạt, có độ âm điện lớn nhất và tính oxi hóa mãnh liệt nhất?',
        options: ['Fluorine (F₂)', 'Chlorine (Cl₂)', 'Bromine (Br₂)', 'Iodine (I₂)'],
        correctAnswer: 'Fluorine (F₂)',
        explanation: '👉 Fluorine (F₂) là khí màu lục nhạt, độ âm điện cực đại 3.98, phản ứng nổ với H₂ ngay trong bóng tối.'
      }
    ]
  },
  {
    id: 'de_4',
    examNo: 4,
    title: 'Đề 4: Nguyên Tử Khối Chuẩn (amu) Của Các Nguyên Tố Thường Gặp',
    shortTitle: 'Đề 4: Nguyên Tử Khối Chuẩn',
    icon: '⚖️',
    desc: 'Luyện nhớ phản xạ nguyên tử khối (amu) của 40 nguyên tố then chốt, phục vụ giải nhanh mọi bài toán hóa học 10, 11, 12 và đại học.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Nguyên tử khối (amu) chuẩn của nguyên tố Hydrogen / Hiđro (H) là bao nhiêu?',
        mathExpression: 'M_{H} = ?',
        options: ['3 amu', '6 amu', '1 amu', '2 amu'],
        correctAnswer: '1 amu',
        explanation: '👉 Nguyên tử khối chuẩn của H (Hydrogen / Hiđro) là 1 amu. Nguyên tố nhẹ nhất trong bảng tuần hoàn.'
      },      {
        id: 2,
        question: 'Câu 2: Nguyên tử khối (amu) chuẩn của nguyên tố Helium / Heli (He) là bao nhiêu?',
        mathExpression: 'M_{He} = ?',
        options: ['4 amu', '8 amu', '6 amu', '9 amu'],
        correctAnswer: '4 amu',
        explanation: '👉 Nguyên tử khối chuẩn của He (Helium / Heli) là 4 amu. Khí hiếm nhẹ thứ 2, ứng dụng bơm bóng thám không, khinh khí cầu.'
      },      {
        id: 3,
        question: 'Câu 3: Nguyên tử khối (amu) chuẩn của nguyên tố Lithium / Liti (Li) là bao nhiêu?',
        mathExpression: 'M_{Li} = ?',
        options: ['9 amu', '3 amu', '14 amu', '7 amu'],
        correctAnswer: '7 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Li (Lithium / Liti) là 7 amu. Kim loại kiềm nhẹ nhất, nhóm IA, chế tạo pin Li-ion.'
      },      {
        id: 4,
        question: 'Câu 4: Nguyên tử khối (amu) chuẩn của nguyên tố Beryllium / Beri (Be) là bao nhiêu?',
        mathExpression: 'M_{Be} = ?',
        options: ['18 amu', '5 amu', '9 amu', '11 amu'],
        correctAnswer: '9 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Be (Beryllium / Beri) là 9 amu. Kim loại kiềm thổ nhóm IIA, không phản ứng với nước ở nhiệt độ thường.'
      },      {
        id: 5,
        question: 'Câu 5: Nguyên tử khối (amu) chuẩn của nguyên tố Boron / Bo (B) là bao nhiêu?',
        mathExpression: 'M_{B} = ?',
        options: ['7 amu', '11 amu', '13 amu', '22 amu'],
        correctAnswer: '11 amu',
        explanation: '👉 Nguyên tử khối chuẩn của B (Boron / Bo) là 11 amu. Phi kim nhóm IIIA, hợp chất quen thuộc: H3BO3, Na2B4O7 (hàn the).'
      },      {
        id: 6,
        question: 'Câu 6: Nguyên tử khối (amu) chuẩn của nguyên tố Carbon / Cacbon (C) là bao nhiêu?',
        mathExpression: 'M_{C} = ?',
        options: ['12 amu', '14 amu', '24 amu', '8 amu'],
        correctAnswer: '12 amu',
        explanation: '👉 Nguyên tử khối chuẩn của C (Carbon / Cacbon) là 12 amu. Cốt lõi của Hóa hữu cơ; dạng thù hình: kim cương, than chì, fullerene.'
      },      {
        id: 7,
        question: 'Câu 7: Nguyên tử khối (amu) chuẩn của nguyên tố Nitrogen / Nitơ (N) là bao nhiêu?',
        mathExpression: 'M_{N} = ?',
        options: ['16 amu', '28 amu', '10 amu', '14 amu'],
        correctAnswer: '14 amu',
        explanation: '👉 Nguyên tử khối chuẩn của N (Nitrogen / Nitơ) là 14 amu. Khí không màu, chiếm ~78% thể tích không khí.'
      },      {
        id: 8,
        question: 'Câu 8: Nguyên tử khối (amu) chuẩn của nguyên tố Oxygen / Oxi (O) là bao nhiêu?',
        mathExpression: 'M_{O} = ?',
        options: ['16 amu', '32 amu', '12 amu', '18 amu'],
        correctAnswer: '16 amu',
        explanation: '👉 Nguyên tử khối chuẩn của O (Oxygen / Oxi) là 16 amu. Nguyên tố phổ biến nhất vỏ Trái Đất, duy trì sự sống và sự cháy.'
      },      {
        id: 9,
        question: 'Câu 9: Nguyên tử khối (amu) chuẩn của nguyên tố Fluorine / Flo (F) là bao nhiêu?',
        mathExpression: 'M_{F} = ?',
        options: ['21 amu', '19 amu', '15 amu', '38 amu'],
        correctAnswer: '19 amu',
        explanation: '👉 Nguyên tử khối chuẩn của F (Fluorine / Flo) là 19 amu. Phi kim có độ âm điện lớn nhất (3.98), tính oxi hóa mạnh nhất.'
      },      {
        id: 10,
        question: 'Câu 10: Nguyên tử khối (amu) chuẩn của nguyên tố Neon (Ne) là bao nhiêu?',
        mathExpression: 'M_{Ne} = ?',
        options: ['40 amu', '22 amu', '20 amu', '16 amu'],
        correctAnswer: '20 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Ne (Neon) là 20 amu. Khí hiếm chu kì 2, phát ánh sáng đỏ cam rực rỡ trong đèn quảng cáo.'
      },      {
        id: 11,
        question: 'Câu 11: Nguyên tử khối (amu) chuẩn của nguyên tố Sodium / Natri (Na) là bao nhiêu?',
        mathExpression: 'M_{Na} = ?',
        options: ['46 amu', '19 amu', '25 amu', '23 amu'],
        correctAnswer: '23 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Na (Sodium / Natri) là 23 amu. Kim loại kiềm nhóm IA, cháy cho ngọn lửa màu vàng rực đặc trưng.'
      },      {
        id: 12,
        question: 'Câu 12: Nguyên tử khối (amu) chuẩn của nguyên tố Magnesium / Magie (Mg) là bao nhiêu?',
        mathExpression: 'M_{Mg} = ?',
        options: ['24 amu', '20 amu', '48 amu', '26 amu'],
        correctAnswer: '24 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Mg (Magnesium / Magie) là 24 amu. Kim loại nhóm IIA, cháy trong không khí phát ánh sáng trắng chói lòa.'
      },      {
        id: 13,
        question: 'Câu 13: Nguyên tử khối (amu) chuẩn của nguyên tố Aluminium / Nhôm (Al) là bao nhiêu?',
        mathExpression: 'M_{Al} = ?',
        options: ['29 amu', '23 amu', '27 amu', '54 amu'],
        correctAnswer: '27 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Al (Aluminium / Nhôm) là 27 amu. Kim loại phổ biến nhất vỏ Trái Đất; oxide Al2O3 và hydroxide Al(OH)3 lưỡng tính.'
      },      {
        id: 14,
        question: 'Câu 14: Nguyên tử khối (amu) chuẩn của nguyên tố Silicon / Silic (Si) là bao nhiêu?',
        mathExpression: 'M_{Si} = ?',
        options: ['28 amu', '56 amu', '30 amu', '24 amu'],
        correctAnswer: '28 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Si (Silicon / Silic) là 28 amu. Phi kim bán dẫn then chốt trong ngành công nghiệp chip và vi mạch bán dẫn.'
      },      {
        id: 15,
        question: 'Câu 15: Nguyên tử khối (amu) chuẩn của nguyên tố Phosphorus / Photpho (P) là bao nhiêu?',
        mathExpression: 'M_{P} = ?',
        options: ['33 amu', '27 amu', '62 amu', '31 amu'],
        correctAnswer: '31 amu',
        explanation: '👉 Nguyên tử khối chuẩn của P (Phosphorus / Photpho) là 31 amu. Dạng photpho trắng độc, tự bốc cháy; photpho đỏ bền hơn.'
      },      {
        id: 16,
        question: 'Câu 16: Nguyên tử khối (amu) chuẩn của nguyên tố Sulfur / Lưu huỳnh (S) là bao nhiêu?',
        mathExpression: 'M_{S} = ?',
        options: ['64 amu', '28 amu', '32 amu', '34 amu'],
        correctAnswer: '32 amu',
        explanation: '👉 Nguyên tử khối chuẩn của S (Sulfur / Lưu huỳnh) là 32 amu. Chất rắn màu vàng, dùng sản xuất H2SO4 và lưu hóa cao su.'
      },      {
        id: 17,
        question: 'Câu 17: Nguyên tử khối (amu) chuẩn của nguyên tố Chlorine / Clo (Cl) là bao nhiêu?',
        mathExpression: 'M_{Cl} = ?',
        options: ['37 amu', '35.5 amu', '35 amu', '36 amu'],
        correctAnswer: '35.5 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Cl (Chlorine / Clo) là 35.5 amu. Khí màu vàng lục, mùi hắc độc, dùng khử trùng nước sinh hoạt.'
      },      {
        id: 18,
        question: 'Câu 18: Nguyên tử khối (amu) chuẩn của nguyên tố Argon (Ar) là bao nhiêu?',
        mathExpression: 'M_{Ar} = ?',
        options: ['40 amu', '42 amu', '80 amu', '36 amu'],
        correctAnswer: '40 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Ar (Argon) là 40 amu. Khí hiếm chiếm gần 1% thể tích khí quyển, làm môi trường trơ khi luyện kim, hàn.'
      },      {
        id: 19,
        question: 'Câu 19: Nguyên tử khối (amu) chuẩn của nguyên tố Potassium / Kali (K) là bao nhiêu?',
        mathExpression: 'M_{K} = ?',
        options: ['41 amu', '78 amu', '35 amu', '39 amu'],
        correctAnswer: '39 amu',
        explanation: '👉 Nguyên tử khối chuẩn của K (Potassium / Kali) là 39 amu. Kim loại kiềm nhóm IA, khi cháy cho ngọn lửa màu tím hoa cà.'
      },      {
        id: 20,
        question: 'Câu 20: Nguyên tử khối (amu) chuẩn của nguyên tố Calcium / Canxi (Ca) là bao nhiêu?',
        mathExpression: 'M_{Ca} = ?',
        options: ['40 amu', '80 amu', '36 amu', '42 amu'],
        correctAnswer: '40 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Ca (Calcium / Canxi) là 40 amu. Kim loại kiềm thổ nhóm IIA, thành phần chính trong xương, răng, đá vôi (CaCO3).'
      },      {
        id: 21,
        question: 'Câu 21: Nguyên tử khối (amu) chuẩn của nguyên tố Chromium / Crom (Cr) là bao nhiêu?',
        mathExpression: 'M_{Cr} = ?',
        options: ['54 amu', '52 amu', '48 amu', '104 amu'],
        correctAnswer: '52 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Cr (Chromium / Crom) là 52 amu. Kim loại cứng nhất bảng tuần hoàn (độ cứng 8.5/10, rạch được thủy tinh).'
      },      {
        id: 22,
        question: 'Câu 22: Nguyên tử khối (amu) chuẩn của nguyên tố Manganese / Mangan (Mn) là bao nhiêu?',
        mathExpression: 'M_{Mn} = ?',
        options: ['110 amu', '57 amu', '55 amu', '51 amu'],
        correctAnswer: '55 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Mn (Manganese / Mangan) là 55 amu. Hợp chất quan trọng: KMnO4 (thuốc tím), MnO2 (xúc tác).'
      },      {
        id: 23,
        question: 'Câu 23: Nguyên tử khối (amu) chuẩn của nguyên tố Iron / Sắt (Fe) là bao nhiêu?',
        mathExpression: 'M_{Fe} = ?',
        options: ['112 amu', '52 amu', '58 amu', '56 amu'],
        correctAnswer: '56 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Fe (Iron / Sắt) là 56 amu. Kim loại có tính nhiễm từ, sản lượng sử dụng lớn nhất trong luyện kim.'
      },      {
        id: 24,
        question: 'Câu 24: Nguyên tử khối (amu) chuẩn của nguyên tố Cobalt / Coban (Co) là bao nhiêu?',
        mathExpression: 'M_{Co} = ?',
        options: ['59 amu', '55 amu', '118 amu', '61 amu'],
        correctAnswer: '59 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Co (Cobalt / Coban) là 59 amu. Kim loại chuyển tiếp, thành phần trong vitamin B12.'
      },      {
        id: 25,
        question: 'Câu 25: Nguyên tử khối (amu) chuẩn của nguyên tố Nickel / Niken (Ni) là bao nhiêu?',
        mathExpression: 'M_{Ni} = ?',
        options: ['61 amu', '55 amu', '59 amu', '118 amu'],
        correctAnswer: '59 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Ni (Nickel / Niken) là 59 amu. Kim loại dẻo, chống ăn mòn tốt, dùng mạ kim loại và luyện inox.'
      },      {
        id: 26,
        question: 'Câu 26: Nguyên tử khối (amu) chuẩn của nguyên tố Copper / Đồng (Cu) là bao nhiêu?',
        mathExpression: 'M_{Cu} = ?',
        options: ['64 amu', '56 amu', '66 amu', '60 amu'],
        correctAnswer: '64 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Cu (Copper / Đồng) là 64 amu. Kim loại màu đỏ ánh kim, dẫn điện và nhiệt tốt thứ 2 sau Bạc.'
      },      {
        id: 27,
        question: 'Câu 27: Nguyên tử khối (amu) chuẩn của nguyên tố Zinc / Kẽm (Zn) là bao nhiêu?',
        mathExpression: 'M_{Zn} = ?',
        options: ['67 amu', '61 amu', '57 amu', '65 amu'],
        correctAnswer: '65 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Zn (Zinc / Kẽm) là 65 amu. Kim loại chuyển tiếp; oxide ZnO và hydroxide Zn(OH)2 lưỡng tính.'
      },      {
        id: 28,
        question: 'Câu 28: Nguyên tử khối (amu) chuẩn của nguyên tố Bromine / Brom (Br) là bao nhiêu?',
        mathExpression: 'M_{Br} = ?',
        options: ['72 amu', '76 amu', '80 amu', '82 amu'],
        correctAnswer: '80 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Br (Bromine / Brom) là 80 amu. Phi kim duy nhất ở thể lỏng ở điều kiện thường, màu nâu đỏ bốc khói độc.'
      },      {
        id: 29,
        question: 'Câu 29: Nguyên tử khối (amu) chuẩn của nguyên tố Krypton (Kr) là bao nhiêu?',
        mathExpression: 'M_{Kr} = ?',
        options: ['80 amu', '84 amu', '86 amu', '76 amu'],
        correctAnswer: '84 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Kr (Krypton) là 84 amu. Khí hiếm chu kì 4, dùng trong đèn laser và chiếu sáng sân bay.'
      },      {
        id: 30,
        question: 'Câu 30: Nguyên tử khối (amu) chuẩn của nguyên tố Rubidium / Rubidi (Rb) là bao nhiêu?',
        mathExpression: 'M_{Rb} = ?',
        options: ['85.5 amu', '85 amu', '86 amu', '87 amu'],
        correctAnswer: '85.5 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Rb (Rubidium / Rubidi) là 85.5 amu. Kim loại kiềm nhóm IA, phản ứng bốc cháy mãnh liệt khi tiếp xúc với nước.'
      },      {
        id: 31,
        question: 'Câu 31: Nguyên tử khối (amu) chuẩn của nguyên tố Strontium / Stronti (Sr) là bao nhiêu?',
        mathExpression: 'M_{Sr} = ?',
        options: ['90 amu', '80 amu', '84 amu', '88 amu'],
        correctAnswer: '88 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Sr (Strontium / Stronti) là 88 amu. Kim loại kiềm thổ nhóm IIA, muối stronti cháy cho ngọn lửa màu đỏ tươi (pháo hoa).'
      },      {
        id: 32,
        question: 'Câu 32: Nguyên tử khối (amu) chuẩn của nguyên tố Silver / Bạc (Ag) là bao nhiêu?',
        mathExpression: 'M_{Ag} = ?',
        options: ['108 amu', '100 amu', '104 amu', '110 amu'],
        correctAnswer: '108 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Ag (Silver / Bạc) là 108 amu. Kim loại có độ dẫn điện và dẫn nhiệt tốt nhất trong tất cả các kim loại.'
      },      {
        id: 33,
        question: 'Câu 33: Nguyên tử khối (amu) chuẩn của nguyên tố Tin / Thiếc (Sn) là bao nhiêu?',
        mathExpression: 'M_{Sn} = ?',
        options: ['121 amu', '119 amu', '115 amu', '111 amu'],
        correctAnswer: '119 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Sn (Tin / Thiếc) là 119 amu. Kim loại dẻo nhóm IVA, dùng mạ bảo vệ đồ hộp sắt tây, làm hợp kim hàn thiếc.'
      },      {
        id: 34,
        question: 'Câu 34: Nguyên tử khối (amu) chuẩn của nguyên tố Iodine / Iot (I) là bao nhiêu?',
        mathExpression: 'M_{I} = ?',
        options: ['119 amu', '129 amu', '127 amu', '123 amu'],
        correctAnswer: '127 amu',
        explanation: '👉 Nguyên tử khối chuẩn của I (Iodine / Iot) là 127 amu. Chất rắn màu tím đen, có hiện tượng thăng hoa; thử hồ tinh bột hóa xanh tím.'
      },      {
        id: 35,
        question: 'Câu 35: Nguyên tử khối (amu) chuẩn của nguyên tố Xenon (Xe) là bao nhiêu?',
        mathExpression: 'M_{Xe} = ?',
        options: ['123 amu', '127 amu', '133 amu', '131 amu'],
        correctAnswer: '131 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Xe (Xenon) là 131 amu. Khí hiếm chu kì 5, dùng trong đèn flash chụp ảnh công suất lớn và máy X-quang.'
      },      {
        id: 36,
        question: 'Câu 36: Nguyên tử khối (amu) chuẩn của nguyên tố Caesium / Xesi (Cs) là bao nhiêu?',
        mathExpression: 'M_{Cs} = ?',
        options: ['133 amu', '129 amu', '125 amu', '135 amu'],
        correctAnswer: '133 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Cs (Caesium / Xesi) là 133 amu. Kim loại mềm nhất trong tất cả kim loại, dễ bay hơi, dùng chế tạo tế bào quang điện.'
      },      {
        id: 37,
        question: 'Câu 37: Nguyên tử khối (amu) chuẩn của nguyên tố Barium / Bari (Ba) là bao nhiêu?',
        mathExpression: 'M_{Ba} = ?',
        options: ['139 amu', '133 amu', '137 amu', '129 amu'],
        correctAnswer: '137 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Ba (Barium / Bari) là 137 amu. Kim loại kiềm thổ nhóm IIA, muối BaSO4 kết tủa trắng không tan trong acid mạnh.'
      },      {
        id: 38,
        question: 'Câu 38: Nguyên tử khối (amu) chuẩn của nguyên tố Tungsten / Vonfram (W) là bao nhiêu?',
        mathExpression: 'M_{W} = ?',
        options: ['184 amu', '176 amu', '186 amu', '180 amu'],
        correctAnswer: '184 amu',
        explanation: '👉 Nguyên tử khối chuẩn của W (Tungsten / Vonfram) là 184 amu. Kim loại có nhiệt độ nóng chảy cao nhất (~3422 °C), làm dây tóc bóng đèn.'
      },      {
        id: 39,
        question: 'Câu 39: Nguyên tử khối (amu) chuẩn của nguyên tố Platinum / Bạch kim (Pt) là bao nhiêu?',
        mathExpression: 'M_{Pt} = ?',
        options: ['197 amu', '191 amu', '187 amu', '195 amu'],
        correctAnswer: '195 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Pt (Platinum / Bạch kim) là 195 amu. Kim loại quý trơ về mặt hóa học, làm đồ trang sức cao cấp và xúc tác tổng hợp.'
      },      {
        id: 40,
        question: 'Câu 40: Nguyên tử khối (amu) chuẩn của nguyên tố Gold / Vàng (Au) là bao nhiêu?',
        mathExpression: 'M_{Au} = ?',
        options: ['189 amu', '193 amu', '197 amu', '199 amu'],
        correctAnswer: '197 amu',
        explanation: '👉 Nguyên tử khối chuẩn của Au (Gold / Vàng) là 197 amu. Kim loại dẻo nhất (1 gam có thể dát mỏng thành 1 m²), dẫn điện tốt, trơ.'
      },    ]
  },
  {
    id: 'de_5',
    examNo: 5,
    title: 'Đề 5: Tính Phân Tử Khối Của Hợp Chất Vô Cơ Hay Gặp',
    shortTitle: 'Đề 5: Tính Phân Tử Khối',
    icon: '🧮',
    desc: 'Rèn luyện phản xạ tính nhanh phân tử khối (amu) của 40 hợp chất vô cơ kinh điển hay xuất hiện trong các bài toán định lượng.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Phân tử khối của hợp chất Nước / Water (H2O) là bao nhiêu amu?',
        mathExpression: 'M_{H2O} = ?',
        options: ['20 amu', '18 amu', '34 amu', '46 amu'],
        correctAnswer: '18 amu',
        explanation: '👉 Cách tính PTK (H2O): 1*2 + 16 = 18 = 18 amu.'
      },      {
        id: 2,
        question: 'Câu 2: Phân tử khối của hợp chất Khí cacbonic / Carbon dioxide (CO2) là bao nhiêu amu?',
        mathExpression: 'M_{CO2} = ?',
        options: ['28 amu', '60 amu', '44 amu', '46 amu'],
        correctAnswer: '44 amu',
        explanation: '👉 Cách tính PTK (CO2): 12 + 16*2 = 44 = 44 amu.'
      },      {
        id: 3,
        question: 'Câu 3: Phân tử khối của hợp chất Amoniac / Ammonia (NH3) là bao nhiêu amu?',
        mathExpression: 'M_{NH3} = ?',
        options: ['33 amu', '19 amu', '45 amu', '17 amu'],
        correctAnswer: '17 amu',
        explanation: '👉 Cách tính PTK (NH3): 14 + 1*3 = 17 = 17 amu.'
      },      {
        id: 4,
        question: 'Câu 4: Phân tử khối của hợp chất Khí sunfurơ / Sulfur dioxide (SO2) là bao nhiêu amu?',
        mathExpression: 'M_{SO2} = ?',
        options: ['64 amu', '48 amu', '66 amu', '80 amu'],
        correctAnswer: '64 amu',
        explanation: '👉 Cách tính PTK (SO2): 32 + 16*2 = 64 = 64 amu.'
      },      {
        id: 5,
        question: 'Câu 5: Phân tử khối của hợp chất Lưu huỳnh trioxit / Sulfur trioxide (SO3) là bao nhiêu amu?',
        mathExpression: 'M_{SO3} = ?',
        options: ['96 amu', '82 amu', '80 amu', '64 amu'],
        correctAnswer: '80 amu',
        explanation: '👉 Cách tính PTK (SO3): 32 + 16*3 = 80 = 80 amu.'
      },      {
        id: 6,
        question: 'Câu 6: Phân tử khối của hợp chất Axit clohiđric / Hydrochloric acid (HCl) là bao nhiêu amu?',
        mathExpression: 'M_{HCl} = ?',
        options: ['36.5 amu', '35 amu', '36 amu', '37 amu'],
        correctAnswer: '36.5 amu',
        explanation: '👉 Cách tính PTK (HCl): 1 + 35.5 = 36.5 = 36.5 amu.'
      },      {
        id: 7,
        question: 'Câu 7: Phân tử khối của hợp chất Axit nitric / Nitric acid (HNO3) là bao nhiêu amu?',
        mathExpression: 'M_{HNO3} = ?',
        options: ['47 amu', '65 amu', '79 amu', '63 amu'],
        correctAnswer: '63 amu',
        explanation: '👉 Cách tính PTK (HNO3): 1 + 14 + 16*3 = 63 = 63 amu.'
      },      {
        id: 8,
        question: 'Câu 8: Phân tử khối của hợp chất Axit sunfuric / Sulfuric acid (H2SO4) là bao nhiêu amu?',
        mathExpression: 'M_{H2SO4} = ?',
        options: ['82 amu', '100 amu', '98 amu', '114 amu'],
        correctAnswer: '98 amu',
        explanation: '👉 Cách tính PTK (H2SO4): 1*2 + 32 + 16*4 = 98 = 98 amu.'
      },      {
        id: 9,
        question: 'Câu 9: Phân tử khối của hợp chất Axit photphoric / Phosphoric acid (H3PO4) là bao nhiêu amu?',
        mathExpression: 'M_{H3PO4} = ?',
        options: ['114 amu', '98 amu', '100 amu', '82 amu'],
        correctAnswer: '98 amu',
        explanation: '👉 Cách tính PTK (H3PO4): 1*3 + 31 + 16*4 = 98 = 98 amu.'
      },      {
        id: 10,
        question: 'Câu 10: Phân tử khối của hợp chất Natri hiđroxit / Xút ăn da (NaOH) là bao nhiêu amu?',
        mathExpression: 'M_{NaOH} = ?',
        options: ['40 amu', '24 amu', '56 amu', '42 amu'],
        correctAnswer: '40 amu',
        explanation: '👉 Cách tính PTK (NaOH): 23 + 16 + 1 = 40 = 40 amu.'
      },      {
        id: 11,
        question: 'Câu 11: Phân tử khối của hợp chất Kali hiđroxit / Potash (KOH) là bao nhiêu amu?',
        mathExpression: 'M_{KOH} = ?',
        options: ['72 amu', '40 amu', '58 amu', '56 amu'],
        correctAnswer: '56 amu',
        explanation: '👉 Cách tính PTK (KOH): 39 + 16 + 1 = 56 = 56 amu.'
      },      {
        id: 12,
        question: 'Câu 12: Phân tử khối của hợp chất Canxi hiđroxit / Nước vôi trong (Ca(OH)2) là bao nhiêu amu?',
        mathExpression: 'M_{Ca(OH)2} = ?',
        options: ['74 amu', '76 amu', '58 amu', '90 amu'],
        correctAnswer: '74 amu',
        explanation: '👉 Cách tính PTK (Ca(OH)2): 40 + (16+1)*2 = 74 = 74 amu.'
      },      {
        id: 13,
        question: 'Câu 13: Phân tử khối của hợp chất Bari hiđroxit (Ba(OH)2) là bao nhiêu amu?',
        mathExpression: 'M_{Ba(OH)2} = ?',
        options: ['173 amu', '171 amu', '187 amu', '155 amu'],
        correctAnswer: '171 amu',
        explanation: '👉 Cách tính PTK (Ba(OH)2): 137 + (16+1)*2 = 171 = 171 amu.'
      },      {
        id: 14,
        question: 'Câu 14: Phân tử khối của hợp chất Magie hiđroxit (Mg(OH)2) là bao nhiêu amu?',
        mathExpression: 'M_{Mg(OH)2} = ?',
        options: ['42 amu', '74 amu', '58 amu', '60 amu'],
        correctAnswer: '58 amu',
        explanation: '👉 Cách tính PTK (Mg(OH)2): 24 + (16+1)*2 = 58 = 58 amu.'
      },      {
        id: 15,
        question: 'Câu 15: Phân tử khối của hợp chất Nhôm hiđroxit (kết tủa keo trắng, lưỡng tính) (Al(OH)3) là bao nhiêu amu?',
        mathExpression: 'M_{Al(OH)3} = ?',
        options: ['94 amu', '80 amu', '62 amu', '78 amu'],
        correctAnswer: '78 amu',
        explanation: '👉 Cách tính PTK (Al(OH)3): 27 + (16+1)*3 = 78 = 78 amu.'
      },      {
        id: 16,
        question: 'Câu 16: Phân tử khối của hợp chất Kẽm hiđroxit (kết tủa trắng, lưỡng tính) (Zn(OH)2) là bao nhiêu amu?',
        mathExpression: 'M_{Zn(OH)2} = ?',
        options: ['99 amu', '83 amu', '101 amu', '115 amu'],
        correctAnswer: '99 amu',
        explanation: '👉 Cách tính PTK (Zn(OH)2): 65 + (16+1)*2 = 99 = 99 amu.'
      },      {
        id: 17,
        question: 'Câu 17: Phân tử khối của hợp chất Crom(III) hiđroxit (kết tủa xám xanh, lưỡng tính) (Cr(OH)3) là bao nhiêu amu?',
        mathExpression: 'M_{Cr(OH)3} = ?',
        options: ['119 amu', '105 amu', '103 amu', '87 amu'],
        correctAnswer: '103 amu',
        explanation: '👉 Cách tính PTK (Cr(OH)3): 52 + (16+1)*3 = 103 = 103 amu.'
      },      {
        id: 18,
        question: 'Câu 18: Phân tử khối của hợp chất Đồng(II) hiđroxit (kết tủa màu xanh lam) (Cu(OH)2) là bao nhiêu amu?',
        mathExpression: 'M_{Cu(OH)2} = ?',
        options: ['98 amu', '114 amu', '82 amu', '100 amu'],
        correctAnswer: '98 amu',
        explanation: '👉 Cách tính PTK (Cu(OH)2): 64 + (16+1)*2 = 98 = 98 amu.'
      },      {
        id: 19,
        question: 'Câu 19: Phân tử khối của hợp chất Sắt(II) hiđroxit (kết tủa trắng xanh) (Fe(OH)2) là bao nhiêu amu?',
        mathExpression: 'M_{Fe(OH)2} = ?',
        options: ['74 amu', '92 amu', '106 amu', '90 amu'],
        correctAnswer: '90 amu',
        explanation: '👉 Cách tính PTK (Fe(OH)2): 56 + (16+1)*2 = 90 = 90 amu.'
      },      {
        id: 20,
        question: 'Câu 20: Phân tử khối của hợp chất Sắt(III) hiđroxit (kết tủa màu nâu đỏ) (Fe(OH)3) là bao nhiêu amu?',
        mathExpression: 'M_{Fe(OH)3} = ?',
        options: ['91 amu', '109 amu', '107 amu', '123 amu'],
        correctAnswer: '107 amu',
        explanation: '👉 Cách tính PTK (Fe(OH)3): 56 + (16+1)*3 = 107 = 107 amu.'
      },      {
        id: 21,
        question: 'Câu 21: Phân tử khối của hợp chất Nhôm oxit / Alumina (oxit lưỡng tính) (Al2O3) là bao nhiêu amu?',
        mathExpression: 'M_{Al2O3} = ?',
        options: ['118 amu', '102 amu', '104 amu', '86 amu'],
        correctAnswer: '102 amu',
        explanation: '👉 Cách tính PTK (Al2O3): 27*2 + 16*3 = 102 = 102 amu.'
      },      {
        id: 22,
        question: 'Câu 22: Phân tử khối của hợp chất Kẽm oxit (oxit lưỡng tính) (ZnO) là bao nhiêu amu?',
        mathExpression: 'M_{ZnO} = ?',
        options: ['81 amu', '65 amu', '97 amu', '83 amu'],
        correctAnswer: '81 amu',
        explanation: '👉 Cách tính PTK (ZnO): 65 + 16 = 81 = 81 amu.'
      },      {
        id: 23,
        question: 'Câu 23: Phân tử khối của hợp chất Crom(III) oxit (oxit lưỡng tính, màu xanh thẫm) (Cr2O3) là bao nhiêu amu?',
        mathExpression: 'M_{Cr2O3} = ?',
        options: ['168 amu', '136 amu', '154 amu', '152 amu'],
        correctAnswer: '152 amu',
        explanation: '👉 Cách tính PTK (Cr2O3): 52*2 + 16*3 = 152 = 152 amu.'
      },      {
        id: 24,
        question: 'Câu 24: Phân tử khối của hợp chất Sắt(II) oxit (FeO) là bao nhiêu amu?',
        mathExpression: 'M_{FeO} = ?',
        options: ['72 amu', '74 amu', '56 amu', '88 amu'],
        correctAnswer: '72 amu',
        explanation: '👉 Cách tính PTK (FeO): 56 + 16 = 72 = 72 amu.'
      },      {
        id: 25,
        question: 'Câu 25: Phân tử khối của hợp chất Sắt(III) oxit / Quặng hemantit (Fe2O3) là bao nhiêu amu?',
        mathExpression: 'M_{Fe2O3} = ?',
        options: ['162 amu', '160 amu', '176 amu', '144 amu'],
        correctAnswer: '160 amu',
        explanation: '👉 Cách tính PTK (Fe2O3): 56*2 + 16*3 = 160 = 160 amu.'
      },      {
        id: 26,
        question: 'Câu 26: Phân tử khối của hợp chất Oxit sắt từ / Quặng manhetit (Fe3O4) là bao nhiêu amu?',
        mathExpression: 'M_{Fe3O4} = ?',
        options: ['216 amu', '248 amu', '232 amu', '234 amu'],
        correctAnswer: '232 amu',
        explanation: '👉 Cách tính PTK (Fe3O4): 56*3 + 16*4 = 232 = 232 amu.'
      },      {
        id: 27,
        question: 'Câu 27: Phân tử khối của hợp chất Đồng(II) oxit (chất rắn màu đen) (CuO) là bao nhiêu amu?',
        mathExpression: 'M_{CuO} = ?',
        options: ['96 amu', '82 amu', '64 amu', '80 amu'],
        correctAnswer: '80 amu',
        explanation: '👉 Cách tính PTK (CuO): 64 + 16 = 80 = 80 amu.'
      },      {
        id: 28,
        question: 'Câu 28: Phân tử khối của hợp chất Đồng(I) oxit (chất rắn màu đỏ gạch) (Cu2O) là bao nhiêu amu?',
        mathExpression: 'M_{Cu2O} = ?',
        options: ['144 amu', '128 amu', '146 amu', '160 amu'],
        correctAnswer: '144 amu',
        explanation: '👉 Cách tính PTK (Cu2O): 64*2 + 16 = 144 = 144 amu.'
      },      {
        id: 29,
        question: 'Câu 29: Phân tử khối của hợp chất Magie oxit (MgO) là bao nhiêu amu?',
        mathExpression: 'M_{MgO} = ?',
        options: ['56 amu', '42 amu', '40 amu', '24 amu'],
        correctAnswer: '40 amu',
        explanation: '👉 Cách tính PTK (MgO): 24 + 16 = 40 = 40 amu.'
      },      {
        id: 30,
        question: 'Câu 30: Phân tử khối của hợp chất Canxi oxit / Vôi sống (CaO) là bao nhiêu amu?',
        mathExpression: 'M_{CaO} = ?',
        options: ['56 amu', '72 amu', '40 amu', '58 amu'],
        correctAnswer: '56 amu',
        explanation: '👉 Cách tính PTK (CaO): 40 + 16 = 56 = 56 amu.'
      },      {
        id: 31,
        question: 'Câu 31: Phân tử khối của hợp chất Bari oxit (BaO) là bao nhiêu amu?',
        mathExpression: 'M_{BaO} = ?',
        options: ['137 amu', '155 amu', '169 amu', '153 amu'],
        correctAnswer: '153 amu',
        explanation: '👉 Cách tính PTK (BaO): 137 + 16 = 153 = 153 amu.'
      },      {
        id: 32,
        question: 'Câu 32: Phân tử khối của hợp chất Natri clorua / Muối ăn (NaCl) là bao nhiêu amu?',
        mathExpression: 'M_{NaCl} = ?',
        options: ['59 amu', '60 amu', '58.5 amu', '58 amu'],
        correctAnswer: '58.5 amu',
        explanation: '👉 Cách tính PTK (NaCl): 23 + 35.5 = 58.5 = 58.5 amu.'
      },      {
        id: 33,
        question: 'Câu 33: Phân tử khối của hợp chất Natri cacbonat / Soda (Na2CO3) là bao nhiêu amu?',
        mathExpression: 'M_{Na2CO3} = ?',
        options: ['122 amu', '106 amu', '108 amu', '90 amu'],
        correctAnswer: '106 amu',
        explanation: '👉 Cách tính PTK (Na2CO3): 23*2 + 12 + 16*3 = 106 = 106 amu.'
      },      {
        id: 34,
        question: 'Câu 34: Phân tử khối của hợp chất Natri hiđrocacbonat / Baking soda (NaHCO3) là bao nhiêu amu?',
        mathExpression: 'M_{NaHCO3} = ?',
        options: ['84 amu', '68 amu', '100 amu', '86 amu'],
        correctAnswer: '84 amu',
        explanation: '👉 Cách tính PTK (NaHCO3): 23 + 1 + 12 + 16*3 = 84 = 84 amu.'
      },      {
        id: 35,
        question: 'Câu 35: Phân tử khối của hợp chất Canxi cacbonat / Đá vôi (CaCO3) là bao nhiêu amu?',
        mathExpression: 'M_{CaCO3} = ?',
        options: ['116 amu', '84 amu', '102 amu', '100 amu'],
        correctAnswer: '100 amu',
        explanation: '👉 Cách tính PTK (CaCO3): 40 + 12 + 16*3 = 100 = 100 amu.'
      },      {
        id: 36,
        question: 'Câu 36: Phân tử khối của hợp chất Bari sunfat (kết tủa trắng không tan) (BaSO4) là bao nhiêu amu?',
        mathExpression: 'M_{BaSO4} = ?',
        options: ['233 amu', '235 amu', '217 amu', '249 amu'],
        correctAnswer: '233 amu',
        explanation: '👉 Cách tính PTK (BaSO4): 137 + 32 + 16*4 = 233 = 233 amu.'
      },      {
        id: 37,
        question: 'Câu 37: Phân tử khối của hợp chất Sắt(II) sunfat (FeSO4) là bao nhiêu amu?',
        mathExpression: 'M_{FeSO4} = ?',
        options: ['154 amu', '152 amu', '168 amu', '136 amu'],
        correctAnswer: '152 amu',
        explanation: '👉 Cách tính PTK (FeSO4): 56 + 32 + 16*4 = 152 = 152 amu.'
      },      {
        id: 38,
        question: 'Câu 38: Phân tử khối của hợp chất Sắt(III) sunfat (Fe2(SO4)3) là bao nhiêu amu?',
        mathExpression: 'M_{Fe2(SO4)3} = ?',
        options: ['384 amu', '416 amu', '400 amu', '402 amu'],
        correctAnswer: '400 amu',
        explanation: '👉 Cách tính PTK (Fe2(SO4)3): 56*2 + (32+16*4)*3 = 400 = 400 amu.'
      },      {
        id: 39,
        question: 'Câu 39: Phân tử khối của hợp chất Đồng(II) sunfat (CuSO4) là bao nhiêu amu?',
        mathExpression: 'M_{CuSO4} = ?',
        options: ['176 amu', '162 amu', '144 amu', '160 amu'],
        correctAnswer: '160 amu',
        explanation: '👉 Cách tính PTK (CuSO4): 64 + 32 + 16*4 = 160 = 160 amu.'
      },      {
        id: 40,
        question: 'Câu 40: Phân tử khối của hợp chất Kali pemanganat / Thuốc tím (KMnO4) là bao nhiêu amu?',
        mathExpression: 'M_{KMnO4} = ?',
        options: ['158 amu', '142 amu', '160 amu', '174 amu'],
        correctAnswer: '158 amu',
        explanation: '👉 Cách tính PTK (KMnO4): 39 + 55 + 16*4 = 158 = 158 amu.'
      },    ]
  },
  {
    id: 'de_6',
    examNo: 6,
    title: 'Đề 6: Xác Định Hóa Trị Của Nguyên Tố & Nhóm Nguyên Tử',
    shortTitle: 'Đề 6: Xác Định Hóa Trị',
    icon: '🧪',
    desc: 'Luyện khắc sâu hóa trị của các kim loại cố định, kim loại nhiều hóa trị (Fe, Cu, Cr, Mn...) và các nhóm nguyên tử/gốc axit cốt lõi.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Hóa trị của Natri (Na) trong hợp chất NaCl là bao nhiêu?',
        options: ['II', 'III', 'IV', 'I'],
        correctAnswer: 'I',
        explanation: '👉 Kim loại kiềm Na luôn có hóa trị I.'
      },      {
        id: 2,
        question: 'Câu 2: Hóa trị của Kali (K) trong hợp chất K₂O là bao nhiêu?',
        options: ['I', 'III', 'II', 'IV'],
        correctAnswer: 'I',
        explanation: '👉 Kim loại kiềm K luôn có hóa trị I.'
      },      {
        id: 3,
        question: 'Câu 3: Hóa trị của Bạc (Ag) trong hợp chất AgNO₃ là bao nhiêu?',
        options: ['II', 'I', 'IV', 'III'],
        correctAnswer: 'I',
        explanation: '👉 Kim loại Bạc (Ag) có hóa trị I.'
      },      {
        id: 4,
        question: 'Câu 4: Hóa trị của Hiđro (H) trong hợp chất H₂O là bao nhiêu?',
        options: ['III', 'IV', 'I', 'II'],
        correctAnswer: 'I',
        explanation: '👉 Hiđro (H) được quy ước làm đơn vị hóa trị I.'
      },      {
        id: 5,
        question: 'Câu 5: Hóa trị của Magie (Mg) trong hợp chất MgCl₂ là bao nhiêu?',
        options: ['III', 'IV', 'I', 'II'],
        correctAnswer: 'II',
        explanation: '👉 Kim loại kiềm thổ Mg luôn có hóa trị II.'
      },      {
        id: 6,
        question: 'Câu 6: Hóa trị của Canxi (Ca) trong hợp chất CaCO₃ là bao nhiêu?',
        options: ['II', 'I', 'III', 'IV'],
        correctAnswer: 'II',
        explanation: '👉 Canxi (Ca) luôn có hóa trị II.'
      },      {
        id: 7,
        question: 'Câu 7: Hóa trị của Bari (Ba) trong hợp chất BaSO₄ là bao nhiêu?',
        options: ['I', 'IV', 'II', 'III'],
        correctAnswer: 'II',
        explanation: '👉 Bari (Ba) luôn có hóa trị II.'
      },      {
        id: 8,
        question: 'Câu 8: Hóa trị của Kẽm (Zn) trong hợp chất ZnO là bao nhiêu?',
        options: ['II', 'III', 'IV', 'I'],
        correctAnswer: 'II',
        explanation: '👉 Kẽm (Zn) luôn có hóa trị II.'
      },      {
        id: 9,
        question: 'Câu 9: Hóa trị của Nhôm (Al) trong hợp chất Al₂O₃ là bao nhiêu?',
        options: ['I', 'IV', 'II', 'III'],
        correctAnswer: 'III',
        explanation: '👉 Nhôm (Al) có hóa trị III duy nhất trong mọi hợp chất vô cơ.'
      },      {
        id: 10,
        question: 'Câu 10: Hóa trị của Sắt (Fe) trong hợp chất FeO là bao nhiêu?',
        options: ['III', 'I', 'II', 'IV'],
        correctAnswer: 'II',
        explanation: '👉 Trong FeO: 1 nguyên tử Fe liên kết 1 nguyên tử O(II) -> Fe có hóa trị II.'
      },      {
        id: 11,
        question: 'Câu 11: Hóa trị của Sắt (Fe) trong hợp chất Fe₂O₃ là bao nhiêu?',
        options: ['IV', 'III', 'I', 'II'],
        correctAnswer: 'III',
        explanation: '👉 Theo quy tắc hóa trị: 2 * a = 3 * II -> a = III.'
      },      {
        id: 12,
        question: 'Câu 12: Hóa trị của Sắt (Fe) trong hợp chất FeCl₂ là bao nhiêu?',
        options: ['II', 'IV', 'III', 'I'],
        correctAnswer: 'II',
        explanation: '👉 Gốc Cl có hóa trị I, 1 Fe liên kết 2 Cl -> Fe có hóa trị II.'
      },      {
        id: 13,
        question: 'Câu 13: Hóa trị của Sắt (Fe) trong hợp chất FeCl₃ là bao nhiêu?',
        options: ['I', 'II', 'IV', 'III'],
        correctAnswer: 'III',
        explanation: '👉 Gốc Cl có hóa trị I, 1 Fe liên kết 3 Cl -> Fe có hóa trị III.'
      },      {
        id: 14,
        question: 'Câu 14: Hóa trị của Sắt (Fe) trong hợp chất FeSO₄ là bao nhiêu?',
        options: ['II', 'III', 'I', 'IV'],
        correctAnswer: 'II',
        explanation: '👉 Nhóm SO₄ có hóa trị II -> Fe có hóa trị II.'
      },      {
        id: 15,
        question: 'Câu 15: Hóa trị của Sắt (Fe) trong hợp chất Fe₂(SO₄)₃ là bao nhiêu?',
        options: ['I', 'III', 'IV', 'II'],
        correctAnswer: 'III',
        explanation: '👉 Nhóm SO₄ có hóa trị II: 2 * a = 3 * II -> Fe có hóa trị III.'
      },      {
        id: 16,
        question: 'Câu 16: Hóa trị của Đồng (Cu) trong hợp chất Cu₂O là bao nhiêu?',
        options: ['III', 'IV', 'I', 'II'],
        correctAnswer: 'I',
        explanation: '👉 2 * a = 1 * II -> a = I (Đồng hóa trị I).'
      },      {
        id: 17,
        question: 'Câu 17: Hóa trị của Đồng (Cu) trong hợp chất CuO là bao nhiêu?',
        options: ['III', 'IV', 'I', 'II'],
        correctAnswer: 'II',
        explanation: '👉 1 nguyên tử Cu liên kết 1 nguyên tử O(II) -> Cu có hóa trị II.'
      },      {
        id: 18,
        question: 'Câu 18: Hóa trị của Đồng (Cu) trong hợp chất CuSO₄ là bao nhiêu?',
        options: ['II', 'I', 'III', 'IV'],
        correctAnswer: 'II',
        explanation: '👉 Nhóm SO₄ hóa trị II -> Cu có hóa trị II.'
      },      {
        id: 19,
        question: 'Câu 19: Hóa trị của Crom (Cr) trong hợp chất CrO là bao nhiêu?',
        options: ['I', 'VI', 'II', 'III'],
        correctAnswer: 'II',
        explanation: '👉 Oxit bazơ CrO chứa Crom hóa trị II.'
      },      {
        id: 20,
        question: 'Câu 20: Hóa trị của Crom (Cr) trong hợp chất Cr₂O₃ (oxit lưỡng tính) là bao nhiêu?',
        options: ['III', 'IV', 'VI', 'II'],
        correctAnswer: 'III',
        explanation: '👉 Trong Cr₂O₃: Crom có hóa trị III.'
      },      {
        id: 21,
        question: 'Câu 21: Hóa trị của Crom (Cr) trong hợp chất CrO₃ (oxit axit) là bao nhiêu?',
        options: ['II', 'IV', 'III', 'VI'],
        correctAnswer: 'VI',
        explanation: '👉 1 * a = 3 * II -> Cr có hóa trị VI (hóa trị cao nhất của Crom).'
      },      {
        id: 22,
        question: 'Câu 22: Hóa trị của Mangan (Mn) trong hợp chất MnO là bao nhiêu?',
        options: ['VI', 'IV', 'II', 'VII'],
        correctAnswer: 'II',
        explanation: '👉 Trong MnO: Mangan có hóa trị II.'
      },      {
        id: 23,
        question: 'Câu 23: Hóa trị của Mangan (Mn) trong hợp chất MnO₂ là bao nhiêu?',
        options: ['VII', 'IV', 'II', 'VI'],
        correctAnswer: 'IV',
        explanation: '👉 1 * a = 2 * II -> Mn có hóa trị IV.'
      },      {
        id: 24,
        question: 'Câu 24: Hóa trị của Mangan (Mn) trong hợp chất KMnO₄ là bao nhiêu?',
        options: ['VII', 'VI', 'IV', 'II'],
        correctAnswer: 'VII',
        explanation: '👉 Trong KMnO₄: K(I), O(II) -> Mn có hóa trị VII (số oxi hóa +7).'
      },      {
        id: 25,
        question: 'Câu 25: Hóa trị của Cacbon (C) trong hợp chất CO là bao nhiêu?',
        options: ['I', 'III', 'IV', 'II'],
        correctAnswer: 'II',
        explanation: '👉 Trong CO: Cacbon có hóa trị II.'
      },      {
        id: 26,
        question: 'Câu 26: Hóa trị của Cacbon (C) trong hợp chất CO₂ là bao nhiêu?',
        options: ['IV', 'III', 'II', 'VI'],
        correctAnswer: 'IV',
        explanation: '👉 1 * a = 2 * II -> Cacbon có hóa trị IV.'
      },      {
        id: 27,
        question: 'Câu 27: Hóa trị của Silic (Si) trong hợp chất SiO₂ là bao nhiêu?',
        options: ['II', 'IV', 'VI', 'III'],
        correctAnswer: 'IV',
        explanation: '👉 1 * a = 2 * II -> Silic có hóa trị IV.'
      },      {
        id: 28,
        question: 'Câu 28: Hóa trị của Nitơ (N) trong hợp chất NH₃ là bao nhiêu?',
        options: ['II', 'V', 'III', 'I'],
        correctAnswer: 'III',
        explanation: '👉 1 * a = 3 * I -> Nitơ có hóa trị III.'
      },      {
        id: 29,
        question: 'Câu 29: Hóa trị của Nitơ (N) trong hợp chất NO là bao nhiêu?',
        options: ['III', 'IV', 'I', 'II'],
        correctAnswer: 'II',
        explanation: '👉 Trong NO: Nitơ có hóa trị II.'
      },      {
        id: 30,
        question: 'Câu 30: Hóa trị của Nitơ (N) trong hợp chất NO₂ là bao nhiêu?',
        options: ['IV', 'II', 'III', 'V'],
        correctAnswer: 'IV',
        explanation: '👉 1 * a = 2 * II -> Nitơ có hóa trị IV.'
      },      {
        id: 31,
        question: 'Câu 31: Hóa trị của Nitơ (N) trong hợp chất N₂O₅ / HNO₃ là bao nhiêu?',
        options: ['II', 'IV', 'V', 'III'],
        correctAnswer: 'V',
        explanation: '👉 2 * a = 5 * II -> a = V (hóa trị cao nhất của Nitơ).'
      },      {
        id: 32,
        question: 'Câu 32: Hóa trị của Photpho (P) trong hợp chất P₂O₅ / H₃PO₄ là bao nhiêu?',
        options: ['V', 'IV', 'VI', 'III'],
        correctAnswer: 'V',
        explanation: '👉 2 * a = 5 * II -> Photpho có hóa trị V.'
      },      {
        id: 33,
        question: 'Câu 33: Hóa trị của Lưu huỳnh (S) trong hợp chất H₂S là bao nhiêu?',
        options: ['I', 'VI', 'IV', 'II'],
        correctAnswer: 'II',
        explanation: '👉 Trong H₂S: Lưu huỳnh có hóa trị II.'
      },      {
        id: 34,
        question: 'Câu 34: Hóa trị của Lưu huỳnh (S) trong hợp chất SO₂ là bao nhiêu?',
        options: ['III', 'II', 'IV', 'VI'],
        correctAnswer: 'IV',
        explanation: '👉 1 * a = 2 * II -> Lưu huỳnh có hóa trị IV.'
      },      {
        id: 35,
        question: 'Câu 35: Hóa trị của Lưu huỳnh (S) trong hợp chất SO₃ / H₂SO₄ là bao nhiêu?',
        options: ['V', 'VI', 'II', 'IV'],
        correctAnswer: 'VI',
        explanation: '👉 1 * a = 3 * II -> Lưu huỳnh có hóa trị VI.'
      },      {
        id: 36,
        question: 'Câu 36: Hóa trị của Nhóm hiđroxit (-OH) trong phân tử bazơ là bao nhiêu?',
        options: ['I', 'IV', 'III', 'II'],
        correctAnswer: 'I',
        explanation: '👉 Gốc -OH luôn có hóa trị I (tạo ion OH⁻).'
      },      {
        id: 37,
        question: 'Câu 37: Hóa trị của Nhóm nitrat (-NO₃) trong phân tử axit nitric và muối nitrat là bao nhiêu?',
        options: ['II', 'III', 'IV', 'I'],
        correctAnswer: 'I',
        explanation: '👉 Gốc -NO₃ luôn có hóa trị I (tạo ion NO₃⁻).'
      },      {
        id: 38,
        question: 'Câu 38: Hóa trị của Nhóm sunfat (=SO₄) trong phân tử axit sunfuric và muối sunfat là bao nhiêu?',
        options: ['II', 'III', 'I', 'IV'],
        correctAnswer: 'II',
        explanation: '👉 Gốc =SO₄ luôn có hóa trị II (tạo ion SO₄²⁻).'
      },      {
        id: 39,
        question: 'Câu 39: Hóa trị của Nhóm cacbonat (=CO₃) trong phân tử muối cacbonat là bao nhiêu?',
        options: ['I', 'II', 'IV', 'III'],
        correctAnswer: 'II',
        explanation: '👉 Gốc =CO₃ luôn có hóa trị II (tạo ion CO₃²⁻).'
      },      {
        id: 40,
        question: 'Câu 40: Hóa trị của Nhóm photphat (≡PO₄) trong phân tử axit photphoric và muối photphat là bao nhiêu?',
        options: ['II', 'IV', 'III', 'I'],
        correctAnswer: 'III',
        explanation: '👉 Gốc photphat có hóa trị III (tạo ion PO₄³⁻).'
      },    ]
  },
  {
    id: 'de_7',
    examNo: 7,
    title: 'Đề 7: Xác Định Công Thức Hóa Học Vô Cơ Khi Biết Hóa Trị',
    shortTitle: 'Đề 7: Lập CTHH Theo Hóa Trị',
    icon: '📝',
    desc: 'Luyện kĩ năng lập CTHH theo quy tắc hóa trị chéo cho 40 hợp chất oxide, acid, base và muối vô cơ trọng tâm nhất.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Công thức hóa học đúng tạo bởi Al(III) và O(II) là gì?',
        options: ['AlO₂', 'Al₃O₂', 'AlO', 'Al₂O₃'],
        correctAnswer: 'Al₂O₃',
        explanation: '👉 Nhôm(III) và Oxi(II): tỉ lệ x:y = II:III = 2:3 -> Al₂O₃ (Nhôm oxit lưỡng tính).'
      },      {
        id: 2,
        question: 'Câu 2: Công thức hóa học đúng tạo bởi Fe(III) và nhóm SO₄(II) là gì?',
        options: ['Fe₃(SO₄)₂', 'FeSO₄', 'Fe₂(SO₄)₃', 'Fe(SO₄)₃'],
        correctAnswer: 'Fe₂(SO₄)₃',
        explanation: '👉 Fe(III) và SO₄(II): tỉ lệ 2:3 -> Fe₂(SO₄)₃ (Sắt(III) sunfat).'
      },      {
        id: 3,
        question: 'Câu 3: Công thức hóa học đúng tạo bởi Fe(II) và nhóm SO₄(II) là gì?',
        options: ['Fe₂(SO₄)₃', 'FeSO₄', 'Fe(SO₄)₂', 'Fe₂(SO₄)'],
        correctAnswer: 'FeSO₄',
        explanation: '👉 Fe(II) và SO₄(II): tỉ lệ 1:1 -> FeSO₄ (Sắt(II) sunfat).'
      },      {
        id: 4,
        question: 'Câu 4: Công thức hóa học đúng tạo bởi Ca(II) và nhóm PO₄(III) là gì?',
        options: ['Ca₃(PO₄)₂', 'Ca₂(PO₄)₃', 'Ca(PO₄)₂', 'CaPO₄'],
        correctAnswer: 'Ca₃(PO₄)₂',
        explanation: '👉 Ca(II) và PO₄(III): tỉ lệ 3:2 -> Ca₃(PO₄)₂ (thành phần chính của quặng photphorit).'
      },      {
        id: 5,
        question: 'Câu 5: Công thức hóa học đúng tạo bởi Na(I) và nhóm CO₃(II) là gì?',
        options: ['NaCO₃', 'Na(CO₃)₂', 'Na₃CO₃', 'Na₂CO₃'],
        correctAnswer: 'Na₂CO₃',
        explanation: '👉 Na(I) và CO₃(II): tỉ lệ 2:1 -> Na₂CO₃ (Soda).'
      },      {
        id: 6,
        question: 'Câu 6: Công thức hóa học đúng tạo bởi Ba(II) và nhóm NO₃(I) là gì?',
        options: ['Ba(NO₃)₂', 'BaNO₃', 'Ba₂(NO₃)', 'Ba(NO₃)₃'],
        correctAnswer: 'Ba(NO₃)₂',
        explanation: '👉 Ba(II) và NO₃(I): tỉ lệ 1:2 -> Ba(NO₃)₂.'
      },      {
        id: 7,
        question: 'Câu 7: Công thức hóa học đúng tạo bởi Cu(II) và nhóm OH(I) là gì?',
        options: ['Cu(OH)₃', 'Cu(OH)₂', 'CuOH', 'Cu₂(OH)'],
        correctAnswer: 'Cu(OH)₂',
        explanation: '👉 Cu(II) và OH(I): tỉ lệ 1:2 -> Cu(OH)₂ (kết tủa xanh lam).'
      },      {
        id: 8,
        question: 'Câu 8: Công thức hóa học đúng tạo bởi Cr(III) và O(II) là gì?',
        options: ['CrO₂', 'CrO₃', 'Cr₂O₃', 'CrO'],
        correctAnswer: 'Cr₂O₃',
        explanation: '👉 Cr(III) và O(II): tỉ lệ 2:3 -> Cr₂O₃ (Crom(III) oxit lưỡng tính).'
      },      {
        id: 9,
        question: 'Câu 9: Công thức hóa học đúng tạo bởi Cr(VI) và O(II) là gì?',
        options: ['Cr₂O₃', 'CrO₄', 'CrO', 'CrO₃'],
        correctAnswer: 'CrO₃',
        explanation: '👉 Cr(VI) và O(II): tỉ lệ 1:3 -> CrO₃ (Crom(VI) oxit axit).'
      },      {
        id: 10,
        question: 'Câu 10: Công thức hóa học đúng tạo bởi Zn(II) và nhóm OH(I) là gì?',
        options: ['Zn(OH)₂', 'Zn₂(OH)', 'ZnOH', 'Zn(OH)₃'],
        correctAnswer: 'Zn(OH)₂',
        explanation: '👉 Zn(II) và OH(I): tỉ lệ 1:2 -> Zn(OH)₂ (kết tủa trắng lưỡng tính).'
      },      {
        id: 11,
        question: 'Câu 11: Công thức hóa học đúng tạo bởi Al(III) và nhóm OH(I) là gì?',
        options: ['AlOH', 'Al₂(OH)₃', 'Al(OH)₃', 'Al(OH)₂'],
        correctAnswer: 'Al(OH)₃',
        explanation: '👉 Al(III) và OH(I): tỉ lệ 1:3 -> Al(OH)₃ (kết tủa keo trắng lưỡng tính).'
      },      {
        id: 12,
        question: 'Câu 12: Công thức hóa học đúng tạo bởi Mg(II) và Cl(I) là gì?',
        options: ['MgCl₂', 'MgCl₃', 'Mg₂Cl', 'MgCl'],
        correctAnswer: 'MgCl₂',
        explanation: '👉 Mg(II) và Cl(I): tỉ lệ 1:2 -> MgCl₂ (Magie clorua).'
      },      {
        id: 13,
        question: 'Câu 13: Công thức hóa học đúng tạo bởi P(V) và O(II) là gì?',
        options: ['P₂O₃', 'PO₅', 'PO₂', 'P₂O₅'],
        correctAnswer: 'P₂O₅',
        explanation: '👉 P(V) và O(II): tỉ lệ 2:5 -> P₂O₅ (Điphotpho pentaoxit).'
      },      {
        id: 14,
        question: 'Câu 14: Công thức hóa học đúng tạo bởi N(IV) và O(II) là gì?',
        options: ['NO', 'N₂O', 'NO₂', 'N₂O₅'],
        correctAnswer: 'NO₂',
        explanation: '👉 N(IV) và O(II): tỉ lệ 1:2 -> NO₂ (khí màu nâu đỏ độc).'
      },      {
        id: 15,
        question: 'Câu 15: Công thức hóa học đúng tạo bởi S(VI) và O(II) là gì?',
        options: ['SO₂', 'SO₃', 'SO', 'S₂O₃'],
        correctAnswer: 'SO₃',
        explanation: '👉 S(VI) và O(II): tỉ lệ 1:3 -> SO₃ (Lưu huỳnh trioxit).'
      },      {
        id: 16,
        question: 'Câu 16: Công thức hóa học đúng tạo bởi K(I) và nhóm MnO₄(I) là gì?',
        options: ['KMnO₄', 'K(MnO₄)₂', 'K₃MnO₄', 'K₂MnO₄'],
        correctAnswer: 'KMnO₄',
        explanation: '👉 K(I) và MnO₄(I): tỉ lệ 1:1 -> KMnO₄ (Thuốc tím).'
      },      {
        id: 17,
        question: 'Câu 17: Công thức hóa học đúng tạo bởi K(I) và nhóm Cr₂O₇(II) là gì?',
        options: ['KCr₂O₇', 'K(Cr₂O₇)₂', 'K₃Cr₂O₇', 'K₂Cr₂O₇'],
        correctAnswer: 'K₂Cr₂O₇',
        explanation: '👉 K(I) và Cr₂O₇(II): tỉ lệ 2:1 -> K₂Cr₂O₇ (Kali đicromat màu da cam).'
      },      {
        id: 18,
        question: 'Câu 18: Công thức hóa học đúng tạo bởi Mg(II) và N(III) là gì?',
        options: ['Mg₃N₂', 'MgN', 'Mg₂N₃', 'MgN₂'],
        correctAnswer: 'Mg₃N₂',
        explanation: '👉 Mg(II) và N(III): tỉ lệ 3:2 -> Mg₃N₂ (Magie nitrua).'
      },      {
        id: 19,
        question: 'Câu 19: Công thức hóa học đúng tạo bởi Al(III) và C(IV) là gì?',
        options: ['AlC₂', 'Al₄C₃', 'AlC', 'Al₃C₄'],
        correctAnswer: 'Al₄C₃',
        explanation: '👉 Al(III) và C(IV): tỉ lệ 4:3 -> Al₄C₃ (Nhôm cacbua, thủy phân tạo khí CH₄).'
      },      {
        id: 20,
        question: 'Câu 20: Công thức hóa học đúng tạo bởi Ca(II) và C (tạo canxi cacbua / đất đèn) là gì?',
        options: ['Ca₂C', 'Ca₂C₃', 'CaC₂', 'CaC'],
        correctAnswer: 'CaC₂',
        explanation: '👉 Ca(II) liên kết ion axetylua C₂²⁻ -> CaC₂ (thủy phân tạo khí axetilen C₂H₂).'
      },      {
        id: 21,
        question: 'Câu 21: Công thức hóa học đúng tạo bởi Zn(II) và S(II) là gì?',
        options: ['Zn₂S', 'Zn₂S₃', 'ZnS₂', 'ZnS'],
        correctAnswer: 'ZnS',
        explanation: '👉 Zn(II) và S(II): tỉ lệ 1:1 -> ZnS (Kẽm sunfua kết tủa trắng).'
      },      {
        id: 22,
        question: 'Câu 22: Công thức hóa học đúng tạo bởi Ag(I) và nhóm PO₄(III) là gì?',
        options: ['Ag₃PO₄', 'Ag₂PO₄', 'AgPO₄', 'Ag(PO₄)₂'],
        correctAnswer: 'Ag₃PO₄',
        explanation: '👉 Ag(I) và PO₄(III): tỉ lệ 3:1 -> Ag₃PO₄ (kết tủa vàng).'
      },      {
        id: 23,
        question: 'Câu 23: Công thức hóa học đúng tạo bởi Cu(I) và O(II) là gì?',
        options: ['CuO', 'Cu₂O₃', 'Cu₂O', 'CuO₂'],
        correctAnswer: 'Cu₂O',
        explanation: '👉 Cu(I) và O(II): tỉ lệ 2:1 -> Cu₂O (Đồng(I) oxit màu đỏ gạch).'
      },      {
        id: 24,
        question: 'Câu 24: Công thức hóa học đúng tạo bởi Oxit sắt từ chứa đồng thời Fe(II) và Fe(III) là gì?',
        options: ['Fe₃O₄', 'Fe₄O₃', 'Fe₂O₃', 'FeO'],
        correctAnswer: 'Fe₃O₄',
        explanation: '👉 Oxit sắt từ Fe₃O₄ là hỗn hợp tỉ lệ 1:1 của FeO và Fe₂O₃.'
      },      {
        id: 25,
        question: 'Câu 25: Công thức hóa học đúng tạo bởi Ba(II) và nhóm SO₄(II) là gì?',
        options: ['Ba(SO₄)₂', 'Ba₃(SO₄)₂', 'Ba₂(SO₄)', 'BaSO₄'],
        correctAnswer: 'BaSO₄',
        explanation: '👉 Ba(II) và SO₄(II): tỉ lệ 1:1 -> BaSO₄ (kết tủa trắng không tan trong acid).'
      },      {
        id: 26,
        question: 'Câu 26: Công thức hóa học đúng tạo bởi Pb(II) và nhóm NO₃(I) là gì?',
        options: ['Pb₂(NO₃)', 'PbNO₃', 'Pb(NO₃)₂', 'Pb(NO₃)₄'],
        correctAnswer: 'Pb(NO₃)₂',
        explanation: '👉 Pb(II) và NO₃(I): tỉ lệ 1:2 -> Pb(NO₃)₂.'
      },      {
        id: 27,
        question: 'Câu 27: Công thức hóa học đúng tạo bởi Ag(I) và Cl(I) là gì?',
        options: ['AgCl₂', 'AgCl', 'AgCl₃', 'Ag₂Cl'],
        correctAnswer: 'AgCl',
        explanation: '👉 Ag(I) và Cl(I): tỉ lệ 1:1 -> AgCl (kết tủa trắng không tan trong axit HNO₃).'
      },      {
        id: 28,
        question: 'Câu 28: Công thức hóa học đúng tạo bởi Fe(III) và nhóm OH(I) là gì?',
        options: ['Fe(OH)₃', 'FeOH', 'Fe₂(OH)₃', 'Fe(OH)₂'],
        correctAnswer: 'Fe(OH)₃',
        explanation: '👉 Fe(III) và OH(I): tỉ lệ 1:3 -> Fe(OH)₃ (kết tủa nâu đỏ).'
      },      {
        id: 29,
        question: 'Câu 29: Công thức hóa học đúng tạo bởi Fe(II) và nhóm OH(I) là gì?',
        options: ['Fe(OH)₃', 'FeOH', 'Fe₂(OH)', 'Fe(OH)₂'],
        correctAnswer: 'Fe(OH)₂',
        explanation: '👉 Fe(II) và OH(I): tỉ lệ 1:2 -> Fe(OH)₂ (kết tủa trắng xanh).'
      },      {
        id: 30,
        question: 'Câu 30: Công thức hóa học đúng tạo bởi Nhóm amoni NH₄(I) và nhóm SO₄(II) là gì?',
        options: ['(NH₄)₂SO₄', 'NH₄SO₄', '(NH₄)SO₄', '(NH₄)₃SO₄'],
        correctAnswer: '(NH₄)₂SO₄',
        explanation: '👉 NH₄(I) và SO₄(II): tỉ lệ 2:1 -> (NH₄)₂SO₄ (phân đạm SA).'
      },      {
        id: 31,
        question: 'Câu 31: Công thức hóa học đúng tạo bởi Ca(II) và nhóm hiđrocacbonat HCO₃(I) là gì?',
        options: ['Ca(HCO₃)₃', 'Ca(HCO₃)₂', 'CaHCO₃', 'Ca₂(HCO₃)'],
        correctAnswer: 'Ca(HCO₃)₂',
        explanation: '👉 Ca(II) và HCO₃(I): tỉ lệ 1:2 -> Ca(HCO₃)₂ (gây nước cứng tạm thời).'
      },      {
        id: 32,
        question: 'Câu 32: Công thức hóa học đúng tạo bởi Ba(II) và nhóm hiđrocacbonat HCO₃(I) là gì?',
        options: ['Ba₂(HCO₃)', 'Ba(HCO₃)₃', 'Ba(HCO₃)₂', 'BaHCO₃'],
        correctAnswer: 'Ba(HCO₃)₂',
        explanation: '👉 Ba(II) và HCO₃(I): tỉ lệ 1:2 -> Ba(HCO₃)₂.'
      },      {
        id: 33,
        question: 'Câu 33: Công thức hóa học đúng tạo bởi Na(I) và nhóm hiđrosunfat HSO₄(I) là gì?',
        options: ['Na₂HSO₄', 'NaHSO₃', 'Na(HSO₄)₂', 'NaHSO₄'],
        correctAnswer: 'NaHSO₄',
        explanation: '👉 Na(I) và HSO₄(I): tỉ lệ 1:1 -> NaHSO₄ (phân li như một axit mạnh).'
      },      {
        id: 34,
        question: 'Câu 34: Công thức hóa học đúng tạo bởi Na(I) và nhóm đihiđrophotphat H₂PO₄(I) là gì?',
        options: ['NaH₂PO₄', 'Na₃PO₄', 'Na₂HPO₄', 'Na(H₂PO₄)₂'],
        correctAnswer: 'NaH₂PO₄',
        explanation: '👉 Na(I) và H₂PO₄(I): tỉ lệ 1:1 -> NaH₂PO₄.'
      },      {
        id: 35,
        question: 'Câu 35: Công thức hóa học đúng tạo bởi K(I) và nhóm hiđrophotphat HPO₄(II) là gì?',
        options: ['KHPO₄', 'K₃PO₄', 'K₂HPO₄', 'KH₂PO₄'],
        correctAnswer: 'K₂HPO₄',
        explanation: '👉 K(I) và HPO₄(II): tỉ lệ 2:1 -> K₂HPO₄.'
      },      {
        id: 36,
        question: 'Câu 36: Công thức hóa học đúng tạo bởi Sn(II) và Cl(I) là gì?',
        options: ['SnCl₂', 'Sn₂Cl', 'SnCl₄', 'SnCl'],
        correctAnswer: 'SnCl₂',
        explanation: '👉 Sn(II) và Cl(I): tỉ lệ 1:2 -> SnCl₂ (Thiếc(II) clorua).'
      },      {
        id: 37,
        question: 'Câu 37: Công thức hóa học đúng tạo bởi Cr(II) và Cl(I) là gì?',
        options: ['CrCl₃', 'Cr₂Cl', 'CrCl', 'CrCl₂'],
        correctAnswer: 'CrCl₂',
        explanation: '👉 Cr(II) và Cl(I): tỉ lệ 1:2 -> CrCl₂ (Crom(II) clorua).'
      },      {
        id: 38,
        question: 'Câu 38: Công thức hóa học đúng tạo bởi Mn(IV) và O(II) là gì?',
        options: ['Mn₂O₃', 'MnO', 'MnO₂', 'Mn₂O₇'],
        correctAnswer: 'MnO₂',
        explanation: '👉 Mn(IV) và O(II): tỉ lệ 1:2 -> MnO₂ (chất bột màu đen).'
      },      {
        id: 39,
        question: 'Câu 39: Công thức hóa học đúng tạo bởi Ag(I) và S(II) là gì?',
        options: ['AgS', 'Ag₂S', 'Ag₂S₃', 'AgS₂'],
        correctAnswer: 'Ag₂S',
        explanation: '👉 Ag(I) và S(II): tỉ lệ 2:1 -> Ag₂S (kết tủa màu đen làm bạc bị xỉn màu).'
      },      {
        id: 40,
        question: 'Câu 40: Công thức hóa học đúng tạo bởi Li(I) và O(II) là gì?',
        options: ['Li₂O', 'LiO₂', 'Li₂O₂', 'LiO'],
        correctAnswer: 'Li₂O',
        explanation: '👉 Li(I) và O(II): tỉ lệ 2:1 -> Li₂O (Liti oxit).'
      },    ]
  },
  {
    id: 'de_8',
    examNo: 8,
    title: 'Đề 8: Phân Loại Hợp Chất Vô Cơ & Đặc Trị Chất Lưỡng Tính (Al₂O₃, ZnO, Cr₂O₃...)',
    shortTitle: 'Đề 8: Phân Loại Vô Cơ & Lưỡng Tính',
    icon: '🧬',
    desc: 'Phân loại oxide acid, oxide base, acid mạnh/yếu, base tan/không tan, muối; ĐẶC BIỆT oxide lưỡng tính (Al₂O₃, ZnO, Cr₂O₃) và hydroxide lưỡng tính (Al(OH)₃, Zn(OH)₂, Cr(OH)₃).',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Chất nào sau đây là oxide lưỡng tính điển hình vừa tác dụng với axit, vừa tác dụng với kiềm?',
        options: ['SO₂', 'Al₂O₃', 'Na₂O', 'CaO'],
        correctAnswer: 'Al₂O₃',
        explanation: '👉 Al₂O₃ là oxide lưỡng tính: phản ứng cả với axit mạnh và bazơ mạnh.'
      },      {
        id: 2,
        question: 'Câu 2: Oxide nào sau đây là oxide lưỡng tính?',
        options: ['K₂O', 'BaO', 'ZnO', 'CO₂'],
        correctAnswer: 'ZnO',
        explanation: '👉 ZnO là oxide lưỡng tính tiêu biểu của Kẽm.'
      },      {
        id: 3,
        question: 'Câu 3: Oxide của Crom có tính chất lưỡng tính là oxide nào sau đây?',
        options: ['CrO', 'CrO₂', 'CrO₃', 'Cr₂O₃'],
        correctAnswer: 'Cr₂O₃',
        explanation: '👉 CrO là oxit bazơ, Cr₂O₃ là oxit lưỡng tính, CrO₃ là oxit axit.'
      },      {
        id: 4,
        question: 'Câu 4: Tập hợp nào sau đây gồm toàn các oxide lưỡng tính?',
        options: ['Al₂O₃, ZnO, Cr₂O₃', 'CO₂, SO₂, P₂O₅', 'FeO, Fe₂O₃, CuO', 'Na₂O, BaO, CaO'],
        correctAnswer: 'Al₂O₃, ZnO, Cr₂O₃',
        explanation: '👉 Bộ 3 oxide lưỡng tính kinh điển trong chương trình THPT & Đại học là Al₂O₃, ZnO, Cr₂O₃.'
      },      {
        id: 5,
        question: 'Câu 5: Hydroxide nào sau đây có tính chất lưỡng tính (tan được trong cả axit và dung dịch kiềm dư)?',
        options: ['Mg(OH)₂', 'Ba(OH)₂', 'Al(OH)₃', 'Fe(OH)₃'],
        correctAnswer: 'Al(OH)₃',
        explanation: '👉 Al(OH)₃ là hydroxide lưỡng tính kết tủa keo trắng.'
      },      {
        id: 6,
        question: 'Câu 6: Hydroxide nào sau đây của kẽm có tính chất lưỡng tính?',
        options: ['Zn(OH)₂', 'Fe(OH)₂', 'Cu(OH)₂', 'Ca(OH)₂'],
        correctAnswer: 'Zn(OH)₂',
        explanation: '👉 Zn(OH)₂ là hydroxide lưỡng tính, tan trong kiềm tạo ion zincate [Zn(OH)₄]²⁻ hoặc muối Na₂ZnO₂.'
      },      {
        id: 7,
        question: 'Câu 7: Hydroxide lưỡng tính của Crom có công thức hóa học là gì?',
        options: ['H₂CrO₄', 'H₂Cr₂O₇', 'Cr(OH)₂', 'Cr(OH)₃'],
        correctAnswer: 'Cr(OH)₃',
        explanation: '👉 Cr(OH)₃ là hydroxide lưỡng tính màu xám xanh, tan trong dung dịch kiềm dư.'
      },      {
        id: 8,
        question: 'Câu 8: Tập hợp nào sau đây gồm toàn các hydroxide lưỡng tính thường gặp?',
        options: ['Cu(OH)₂, Fe(OH)₂, Fe(OH)₃', 'Mg(OH)₂, Ca(OH)₂, Ba(OH)₂', 'Al(OH)₃, Zn(OH)₂, Cr(OH)₃', 'NaOH, KOH, Ba(OH)₂'],
        correctAnswer: 'Al(OH)₃, Zn(OH)₂, Cr(OH)₃',
        explanation: '👉 Bộ 3 hydroxide lưỡng tính trọng tâm trong đề thi đại học: Al(OH)₃, Zn(OH)₂, Cr(OH)₃.'
      },      {
        id: 9,
        question: 'Câu 9: Muối nào sau đây là muối lưỡng tính (vừa tác dụng với dung dịch HCl, vừa tác dụng với dung dịch NaOH)?',
        options: ['Na₂SO₄', 'NaHCO₃', 'Na₂CO₃', 'NaCl'],
        correctAnswer: 'NaHCO₃',
        explanation: '👉 Ion HCO₃⁻ lưỡng tính: vừa nhận H⁺ tạo CO₂ + H₂O, vừa nhường H⁺ tạo CO₃²⁻.'
      },      {
        id: 10,
        question: 'Câu 10: Chất nào sau đây vừa tác dụng được với dung dịch axit mạnh (HCl), vừa tác dụng được với dung dịch kiềm mạnh (NaOH)?',
        options: ['Al₂O₃', 'CuO', 'Fe₂O₃', 'MgO'],
        correctAnswer: 'Al₂O₃',
        explanation: '👉 Al₂O₃ tan trong cả HCl và NaOH.'
      },      {
        id: 11,
        question: 'Câu 11: Chất nào sau đây là oxide axit (tác dụng với nước tạo thành dung dịch axit tương ứng)?',
        options: ['Na₂O', 'CaO', 'BaO', 'SO₃'],
        correctAnswer: 'SO₃',
        explanation: '👉 SO₃ là oxide axit của H₂SO₄ (SO₃ + H₂O -> H₂SO₄).'
      },      {
        id: 12,
        question: 'Câu 12: Oxide axit của axit nitric (HNO₃) là oxide nào sau đây?',
        options: ['N₂O₅', 'NO₂', 'N₂O', 'NO'],
        correctAnswer: 'N₂O₅',
        explanation: '👉 N₂O₅ là anhiđrit (oxit axit) của axit nitric HNO₃.'
      },      {
        id: 13,
        question: 'Câu 13: Khí nào sau đây là oxide axit gây ra hiệu ứng nhà kính chính trên Trái Đất?',
        options: ['N₂', 'CO₂', 'CO', 'CH₄'],
        correctAnswer: 'CO₂',
        explanation: '👉 CO₂ là oxide axit tác dụng với kiềm tạo muối cacbonat.'
      },      {
        id: 14,
        question: 'Câu 14: Oxide nào sau đây của Crom là oxide axit tác dụng mãnh liệt với nước tạo hỗn hợp axit?',
        options: ['Cr₂O₃', 'CrO', 'CrO₃', 'CrO₂'],
        correctAnswer: 'CrO₃',
        explanation: '👉 CrO₃ là oxit axit màu đỏ thẫm, hút ẩm mạnh, tác dụng với nước tạo H₂CrO₄ và H₂Cr₂O₇.'
      },      {
        id: 15,
        question: 'Câu 15: Oxide nào sau đây là oxit axit của axit photphoric (H₃PO₄)?',
        options: ['P₂O₃', 'PO', 'PO₂', 'P₂O₅'],
        correctAnswer: 'P₂O₅',
        explanation: '👉 P₂O₅ là oxit axit, tác dụng với nước tạo H₃PO₄.'
      },      {
        id: 16,
        question: 'Câu 16: Chất khí nào sau đây là oxit axit gây mưa axit và có mùi hắc đặc trưng?',
        options: ['SO₂', 'N₂', 'H₂', 'O₂'],
        correctAnswer: 'SO₂',
        explanation: '👉 SO₂ là oxit axit tan trong nước tạo axit sunfurơ H₂SO₃.'
      },      {
        id: 17,
        question: 'Câu 17: Oxide nào sau đây là oxide base tan trong nước tạo thành dung dịch kiềm mạnh?',
        options: ['CuO', 'Al₂O₃', 'BaO', 'FeO'],
        correctAnswer: 'BaO',
        explanation: '👉 BaO tan trong nước tạo Ba(OH)₂ là dung dịch kiềm mạnh.'
      },      {
        id: 18,
        question: 'Câu 18: Oxide nào sau đây là oxide base không tan trong nước?',
        options: ['CuO', 'Na₂O', 'K₂O', 'CaO'],
        correctAnswer: 'CuO',
        explanation: '👉 CuO là oxit bazơ không tan trong nước, tan trong dung dịch axit tạo muối Cu²⁺.'
      },      {
        id: 19,
        question: 'Câu 19: Vôi sống dùng trong xây dựng và xử lý môi trường có thành phần chính là oxide nào?',
        options: ['Ca(OH)₂', 'CaCl₂', 'CaCO₃', 'CaO'],
        correctAnswer: 'CaO',
        explanation: '👉 Vôi sống là Canxi oxit CaO, tác dụng mạnh với nước tỏa nhiều nhiệt.'
      },      {
        id: 20,
        question: 'Câu 20: Chất nào sau đây là oxide bazơ tác dụng với dung dịch HCl sinh ra muối sắt(II)?',
        options: ['Fe₃O₄', 'SO₂', 'FeO', 'Fe₂O₃'],
        correctAnswer: 'FeO',
        explanation: '👉 FeO + 2HCl -> FeCl₂ + H₂O.'
      },      {
        id: 21,
        question: 'Câu 21: Oxide nào sau đây của Crom là oxide bazơ tác dụng với HCl tạo muối crom(II)?',
        options: ['Cr₂O₃', 'CrO', 'CrO₂', 'CrO₃'],
        correctAnswer: 'CrO',
        explanation: '👉 CrO là oxit bazơ màu đen, tan trong HCl tạo dung dịch CrCl₂ màu xanh lam.'
      },      {
        id: 22,
        question: 'Câu 22: Tập hợp nào sau đây gồm toàn các oxide base tan được trong nước ở nhiệt độ thường?',
        options: ['Na₂O, K₂O, BaO, CaO', 'CO₂, SO₂, P₂O₅, N₂O₅', 'CuO, FeO, Al₂O₃, ZnO', 'MgO, Fe₂O₃, CrO, SnO'],
        correctAnswer: 'Na₂O, K₂O, BaO, CaO',
        explanation: '👉 Các oxit của kim loại kiềm và kiềm thổ (trừ Be, Mg) tan trong nước tạo kiềm.'
      },      {
        id: 23,
        question: 'Câu 23: Khí nào sau đây là oxide trung tính (không tác dụng với axit, không tác dụng với bazơ ở điều kiện thường)?',
        options: ['CO₂', 'SO₂', 'CaO', 'CO'],
        correctAnswer: 'CO',
        explanation: '👉 CO là oxit trung tính (oxit không tạo muối).'
      },      {
        id: 24,
        question: 'Câu 24: Oxide nào sau đây là oxide trung tính?',
        options: ['NO', 'SO₃', 'N₂O₅', 'NO₂'],
        correctAnswer: 'NO',
        explanation: '👉 NO và N₂O là các oxit trung tính tiêu biểu của nitơ.'
      },      {
        id: 25,
        question: 'Câu 25: Chất nào sau đây là oxit trung tính (khí cười)?',
        options: ['SO₂', 'N₂O', 'NO₂', 'N₂O₅'],
        correctAnswer: 'N₂O',
        explanation: '👉 N₂O (đinitơ oxit / khí cười) là oxit trung tính.'
      },      {
        id: 26,
        question: 'Câu 26: Axit nào sau đây là axit mạnh phân li hoàn toàn trong nước?',
        options: ['H₂CO₃', 'CH₃COOH', 'HCl', 'H₂S'],
        correctAnswer: 'HCl',
        explanation: '👉 HCl là axit mạnh điển hình.'
      },      {
        id: 27,
        question: 'Câu 27: Axit nào sau đây là axit yếu?',
        options: ['H₂SO₄', 'HCl', 'HNO₃', 'H₂S'],
        correctAnswer: 'H₂S',
        explanation: '👉 H₂S (khí mùi trứng thối tan trong nước) là axit rất yếu.'
      },      {
        id: 28,
        question: 'Câu 28: Axit nào sau đây có tính chất đặc biệt ăn mòn được thủy tinh (dùng khắc chữ lên thủy tinh)?',
        options: ['HF', 'HBr', 'HI', 'HCl'],
        correctAnswer: 'HF',
        explanation: '👉 HF tác dụng với SiO₂ trong thủy tinh: 4HF + SiO₂ -> SiF₄ + 2H₂O.'
      },      {
        id: 29,
        question: 'Câu 29: Axit nào sau đây là axit 2 nấc mạnh?',
        options: ['H₂SO₃', 'H₃PO₄', 'H₂SO₄', 'H₂CO₃'],
        correctAnswer: 'H₂SO₄',
        explanation: '👉 H₂SO₄ là axit mạnh 2 nấc, nấc 1 phân li hoàn toàn.'
      },      {
        id: 30,
        question: 'Câu 30: Axit nào sau đây là axit hữu cơ có trong giấm ăn (nồng độ 2% - 5%)?',
        options: ['CH₃COOH', 'HCOOH', 'HCl', 'H₂SO₄'],
        correctAnswer: 'CH₃COOH',
        explanation: '👉 Axit axetic CH₃COOH là axit yếu, thành phần chính của giấm ăn.'
      },      {
        id: 31,
        question: 'Câu 31: Chất nào sau đây là bazơ tan (kiềm) làm quỳ tím hóa xanh?',
        options: ['Fe(OH)₃', 'Al(OH)₃', 'Cu(OH)₂', 'NaOH'],
        correctAnswer: 'NaOH',
        explanation: '👉 NaOH tan hoàn toàn trong nước tạo dung dịch kiềm mạnh làm quỳ tím hóa xanh.'
      },      {
        id: 32,
        question: 'Câu 32: Dung dịch nào sau đây thường được gọi là \'nước vôi trong\' dùng để nhận biết khí CO₂?',
        options: ['CaO', 'CaCl₂', 'Ca(OH)₂', 'CaCO₃'],
        correctAnswer: 'Ca(OH)₂',
        explanation: '👉 Dung dịch Ca(OH)₂ trong suốt khi sục CO₂ vào sẽ bị vẩn đục do tạo CaCO₃ kết tủa trắng.'
      },      {
        id: 33,
        question: 'Câu 33: Bazơ nào sau đây là bazơ không tan có màu xanh lam đặc trưng?',
        options: ['Fe(OH)₂', 'Cu(OH)₂', 'NaOH', 'Al(OH)₃'],
        correctAnswer: 'Cu(OH)₂',
        explanation: '👉 Cu(OH)₂ là bazơ không tan kết tủa màu xanh lam tươi.'
      },      {
        id: 34,
        question: 'Câu 34: Bazơ nào sau đây là bazơ không tan có màu nâu đỏ?',
        options: ['Fe(OH)₃', 'Cu(OH)₂', 'Fe(OH)₂', 'Mg(OH)₂'],
        correctAnswer: 'Fe(OH)₃',
        explanation: '👉 Fe(OH)₃ là kết tủa màu nâu đỏ quen thuộc.'
      },      {
        id: 35,
        question: 'Câu 35: Muối nào sau đây là muối trung hòa?',
        options: ['NaHCO₃', 'NaHSO₄', 'Ca(HCO₃)₂', 'Na₂SO₄'],
        correctAnswer: 'Na₂SO₄',
        explanation: '👉 Na₂SO₄ không còn nguyên tử hiđro có khả năng phân li ra ion H⁺.'
      },      {
        id: 36,
        question: 'Câu 36: Muối nào sau đây là muối axit?',
        options: ['NaHCO₃', 'K₂SO₄', 'NaCl', 'Na₂CO₃'],
        correctAnswer: 'NaHCO₃',
        explanation: '👉 NaHCO₃ còn hiđro trong gốc axit (-HCO₃) có khả năng nhường H⁺.'
      },      {
        id: 37,
        question: 'Câu 37: Muối nào sau đây là muối axit nhưng dung dịch lại có môi trường axit mạnh như dung dịch HCl?',
        options: ['K₂HPO₄', 'NaHSO₄', 'NaHCO₃', 'Ca(HCO₃)₂'],
        correctAnswer: 'NaHSO₄',
        explanation: '👉 Ion HSO₄⁻ phân li hoàn toàn ra H⁺: HSO₄⁻ -> H⁺ + SO₄²⁻ như một axit mạnh.'
      },      {
        id: 38,
        question: 'Câu 38: Muối nào sau đây là muối trung hòa mặc dù trong công thức phân tử vẫn còn chứa nguyên tử hiđro?',
        options: ['Na₂HPO₄', 'NaH₂PO₄', 'Na₂HPO₃', 'NaHCO₃'],
        correctAnswer: 'Na₂HPO₃',
        explanation: '👉 Axit photphorơ H₃PO₃ là axit 2 nấc, nên muối Na₂HPO₃ là muối trung hòa (H liên kết trực tiếp với P).'
      },      {
        id: 39,
        question: 'Câu 39: Muối nào sau đây vừa tác dụng với axit mạnh sinh khí, vừa tác dụng với kiềm tạo kết tủa trắng?',
        options: ['CaCl₂', 'Ca(NO₃)₂', 'CaSO₄', 'Ca(HCO₃)₂'],
        correctAnswer: 'Ca(HCO₃)₂',
        explanation: '👉 Ca(HCO₃)₂ + 2HCl -> CaCl₂ + 2CO₂↑ + 2H₂O; Ca(HCO₃)₂ + 2NaOH -> CaCO₃↓ + Na₂CO₃ + 2H₂O.'
      },      {
        id: 40,
        question: 'Câu 40: Thành phần chính của quặng apatit dùng để sản xuất phân bón lân là muối vô cơ nào?',
        options: ['Ca₃(PO₄)₂', 'CaSO₄', 'CaCl₂', 'CaCO₃'],
        correctAnswer: 'Ca₃(PO₄)₂',
        explanation: '👉 Canxi photphat Ca₃(PO₄)₂ là thành phần chính của quặng photphorit và apatit.'
      },    ]
  },
  {
    id: 'de_9',
    examNo: 9,
    title: 'Đề 9: Tính Tan Của Hợp Chất Vô Cơ & Hiện Tượng Kết Tủa Đặc Trưng',
    shortTitle: 'Đề 9: Bảng Tính Tan & Kết Tủa',
    icon: '💧',
    desc: 'Hệ thống hóa toàn diện bảng tính tan, màu sắc kết tủa và hiện tượng nhận biết ion vô cơ xuất hiện trong 100% các đề thi hóa THPT.',
    questions: [
      {
        id: 1,
        question: 'Câu 1: Tất cả các muối chứa gốc axit nào sau đây đều tan tốt trong nước ở nhiệt độ thường?',
        options: ['Cacbonat (=CO₃)', 'Photphat (≡PO₄)', 'Sunfat (=SO₄)', 'Nitrat (-NO₃)'],
        correctAnswer: 'Nitrat (-NO₃)',
        explanation: '👉 Tất cả các muối nitrat (-NO₃) đều tan tốt trong nước, không có ngoại lệ kết tủa.'
      },      {
        id: 2,
        question: 'Câu 2: Tất cả các muối của kim loại kiềm nào sau đây đều tan tốt trong nước?',
        options: ['Canxi (Ca)', 'Bari (Ba)', 'Natri (Na) và Kali (K)', 'Bạc (Ag)'],
        correctAnswer: 'Natri (Na) và Kali (K)',
        explanation: '👉 Tất cả các muối của cation kim loại kiềm (Na⁺, K⁺, Li⁺) và amoni (NH₄⁺) đều tan tốt.'
      },      {
        id: 3,
        question: 'Câu 3: Muối sunfat nào sau đây kết tủa màu trắng bền vững, KHÔNG tan trong các dung dịch axit mạnh (HCl, HNO₃)?',
        options: ['MgSO₄', 'BaSO₄', 'Na₂SO₄', 'ZnSO₄'],
        correctAnswer: 'BaSO₄',
        explanation: '👉 BaSO₄ kết tủa trắng rất bền, dùng để nhận biết ion Ba²⁺ hoặc ion SO₄²⁻.'
      },      {
        id: 4,
        question: 'Câu 4: Chất nào sau đây là chất ít tan trong nước, dung dịch bão hòa được dùng làm nước vôi trong?',
        options: ['Ca(OH)₂', 'KOH', 'Ba(OH)₂', 'NaOH'],
        correctAnswer: 'Ca(OH)₂',
        explanation: '👉 Ca(OH)₂ ít tan trong nước; phần tan tạo dung dịch kiềm nước vôi trong.'
      },      {
        id: 5,
        question: 'Câu 5: Muối sunfat nào sau đây là chất ít tan (hơi tan) trong nước?',
        options: ['BaSO₄', 'CuSO₄', 'FeSO₄', 'CaSO₄'],
        correctAnswer: 'CaSO₄',
        explanation: '👉 CaSO₄ và Ag₂SO₄ là các muối sunfat ít tan.'
      },      {
        id: 6,
        question: 'Câu 6: Muối clorua nào sau đây kết tủa trắng, không tan trong dung dịch axit nitric (HNO₃)?',
        options: ['AgCl', 'NaCl', 'BaCl₂', 'CuCl₂'],
        correctAnswer: 'AgCl',
        explanation: '👉 AgCl kết tủa trắng đặc trưng khi nhỏ dung dịch AgNO₃ vào dung dịch chứa ion Cl⁻.'
      },      {
        id: 7,
        question: 'Câu 7: Khi nhỏ dung dịch AgNO₃ vào dung dịch NaBr, xuất hiện kết tủa có màu gì?',
        options: ['Màu đen', 'Màu vàng nhạt (AgBr)', 'Màu trắng', 'Màu vàng đậm'],
        correctAnswer: 'Màu vàng nhạt (AgBr)',
        explanation: '👉 AgBr kết tủa màu vàng nhạt, nhạy sáng.'
      },      {
        id: 8,
        question: 'Câu 8: Khi nhỏ dung dịch AgNO₃ vào dung dịch NaI, xuất hiện kết tủa có màu gì?',
        options: ['Màu vàng nhạt', 'Màu đen', 'Màu vàng đậm (AgI)', 'Màu trắng'],
        correctAnswer: 'Màu vàng đậm (AgI)',
        explanation: '👉 AgI kết tủa màu vàng đậm (vàng cam), không tan trong axit.'
      },      {
        id: 9,
        question: 'Câu 9: Chất kết tủa PbCl₂ có tính chất đặc biệt nào sau đây?',
        options: ['Không tan trong nước nóng', 'Có màu vàng đậm', 'Tan hoàn toàn trong nước lạnh', 'Ít tan trong nước lạnh nhưng tan nhiều trong nước nóng'],
        correctAnswer: 'Ít tan trong nước lạnh nhưng tan nhiều trong nước nóng',
        explanation: '👉 PbCl₂ kết tủa trắng trong nước lạnh, nhưng đun nóng sẽ tan dần.'
      },      {
        id: 10,
        question: 'Câu 10: Nhỏ dung dịch NaOH vào dung dịch CuSO₄, hiện tượng quan sát được là gì?',
        options: ['Xuất hiện kết tủa màu xanh lam (Cu(OH)₂)', 'Xuất hiện kết tủa màu trắng xanh', 'Xuất hiện kết tủa màu nâu đỏ', 'Dung dịch mất màu không có kết tủa'],
        correctAnswer: 'Xuất hiện kết tủa màu xanh lam (Cu(OH)₂)',
        explanation: '👉 Cu²⁺ + 2OH⁻ -> Cu(OH)₂↓ (xanh lam).'
      },      {
        id: 11,
        question: 'Câu 11: Nhỏ dung dịch NaOH vào dung dịch FeCl₂, xuất hiện kết tủa có màu gì ban đầu?',
        options: ['Kết tủa màu nâu đỏ', 'Kết tủa màu vàng', 'Kết tủa màu trắng xanh (Fe(OH)₂)', 'Kết tủa màu xanh lam'],
        correctAnswer: 'Kết tủa màu trắng xanh (Fe(OH)₂)',
        explanation: '👉 Fe²⁺ + 2OH⁻ -> Fe(OH)₂↓ (trắng xanh).'
      },      {
        id: 12,
        question: 'Câu 12: Nếu để kết tủa Fe(OH)₂ ngoài không khí một thời gian, kết tủa sẽ chuyển dần sang màu gì?',
        options: ['Màu nâu đỏ (Fe(OH)₃)', 'Màu trắng tinh', 'Màu đen', 'Màu xanh lam'],
        correctAnswer: 'Màu nâu đỏ (Fe(OH)₃)',
        explanation: '👉 4Fe(OH)₂ + O₂ + 2H₂O -> 4Fe(OH)₃↓ (màu nâu đỏ).'
      },      {
        id: 13,
        question: 'Câu 13: Nhỏ dung dịch NaOH vào dung dịch FeCl₃, xuất hiện ngay kết tủa có màu gì?',
        options: ['Màu xanh lam', 'Màu đen', 'Màu trắng xanh', 'Màu nâu đỏ (Fe(OH)₃)'],
        correctAnswer: 'Màu nâu đỏ (Fe(OH)₃)',
        explanation: '👉 Fe³⁺ + 3OH⁻ -> Fe(OH)₃↓ (nâu đỏ).'
      },      {
        id: 14,
        question: 'Câu 14: Khi nhỏ từ từ dung dịch NaOH đến dư vào dung dịch AlCl₃, hiện tượng xảy ra là gì?',
        options: ['Không có hiện tượng gì', 'Chỉ xuất hiện kết tủa keo trắng không tan', 'Xuất hiện kết tủa keo trắng, sau đó kết tủa tan dần tạo dung dịch trong suốt', 'Dung dịch chuyển sang màu nâu đỏ'],
        correctAnswer: 'Xuất hiện kết tủa keo trắng, sau đó kết tủa tan dần tạo dung dịch trong suốt',
        explanation: '👉 Al³⁺ + 3OH⁻ -> Al(OH)₃↓ (keo trắng); Al(OH)₃ + OH⁻ dư -> AlO₂⁻ + 2H₂O (tan hết).'
      },      {
        id: 15,
        question: 'Câu 15: Hiện tượng khi nhỏ từ từ dung dịch NaOH đến dư vào dung dịch ZnSO₄ là gì?',
        options: ['Chỉ có kết tủa trắng bền không tan', 'Xuất hiện kết tủa trắng, sau đó kết tủa tan hết trong NaOH dư', 'Xuất hiện kết tủa màu xanh lam', 'Có khí mùi hắc thoát ra'],
        correctAnswer: 'Xuất hiện kết tủa trắng, sau đó kết tủa tan hết trong NaOH dư',
        explanation: '👉 Zn(OH)₂ là hiđroxit lưỡng tính nên tan trong kiềm dư.'
      },      {
        id: 16,
        question: 'Câu 16: Hydroxide Cr(OH)₃ có màu sắc đặc trưng nào sau đây?',
        options: ['Màu xám xanh (hoặc lục xám)', 'Màu xanh lam', 'Màu trắng tinh', 'Màu nâu đỏ'],
        correctAnswer: 'Màu xám xanh (hoặc lục xám)',
        explanation: '👉 Cr(OH)₃ kết tủa màu lục xám, tan trong kiềm dư tạo dung dịch màu xanh lục.'
      },      {
        id: 17,
        question: 'Câu 17: Chất kết tủa Mg(OH)₂ có màu gì và có tan trong kiềm dư NaOH không?',
        options: ['Màu trắng, tan trong NaOH dư', 'Màu xanh lam, không tan', 'Màu nâu đỏ, tan trong kiềm', 'Màu trắng, KHÔNG tan trong dung dịch NaOH dư'],
        correctAnswer: 'Màu trắng, KHÔNG tan trong dung dịch NaOH dư',
        explanation: '👉 Mg(OH)₂ là bazơ không tan màu trắng, không có tính lưỡng tính nên không tan trong NaOH dư.'
      },      {
        id: 18,
        question: 'Câu 18: Khi cho dung dịch muối BaCl₂ vào dung dịch muối Na₂SO₄, hiện tượng quan sát được là gì?',
        options: ['Xuất hiện kết tủa trắng không tan trong axit (BaSO₄)', 'Dung dịch có màu vàng', 'Có bọt khí sủi lên', 'Không có hiện tượng gì'],
        correctAnswer: 'Xuất hiện kết tủa trắng không tan trong axit (BaSO₄)',
        explanation: '👉 Ba²⁺ + SO₄²⁻ -> BaSO₄↓ (kết tủa trắng).'
      },      {
        id: 19,
        question: 'Câu 19: Muối canxi cacbonat (CaCO₃) có tính tan như thế nào trong nước?',
        options: ['Dễ bay hơi', 'Không tan trong nước (kết tủa trắng)', 'Tan tốt trong nước', 'Ít tan trong nước'],
        correctAnswer: 'Không tan trong nước (kết tủa trắng)',
        explanation: '👉 CaCO₃ là chất rắn màu trắng không tan trong nước, thành phần chính của đá vôi.'
      },      {
        id: 20,
        question: 'Câu 20: Khi nhỏ dung dịch axit HCl vào ống nghiệm chứa kết tủa CaCO₃, hiện tượng quan sát được là gì?',
        options: ['Dung dịch chuyển sang màu xanh', 'Có bọt khí màu nâu đỏ bay lên', 'Kết tủa tan dần và có bọt khí không màu thoát ra', 'Kết tủa không tan'],
        correctAnswer: 'Kết tủa tan dần và có bọt khí không màu thoát ra',
        explanation: '👉 CaCO₃ + 2HCl -> CaCl₂ + CO₂↑ + H₂O.'
      },      {
        id: 21,
        question: 'Câu 21: Muối BaCO₃ có tan trong nước không và tan trong axit giải phóng khí gì?',
        options: ['Tan tốt trong nước', 'Tan trong nước tạo dung dịch kiềm', 'Không tan trong cả nước và axit', 'Không tan trong nước, tan trong HCl giải phóng khí CO₂'],
        correctAnswer: 'Không tan trong nước, tan trong HCl giải phóng khí CO₂',
        explanation: '👉 BaCO₃ kết tủa trắng, tan trong axit HCl giải phóng khí CO₂.'
      },      {
        id: 22,
        question: 'Câu 22: Kết tủa BaSO₃ có màu gì và có tan trong dung dịch axit HCl không?',
        options: ['Màu trắng, tan trong dung dịch HCl giải phóng khí SO₂ có mùi hắc', 'Màu vàng, tan trong axit', 'Màu trắng, không tan trong axit', 'Màu đen, không tan'],
        correctAnswer: 'Màu trắng, tan trong dung dịch HCl giải phóng khí SO₂ có mùi hắc',
        explanation: '👉 BaSO₃ + 2HCl -> BaCl₂ + SO₂↑ + H₂O.'
      },      {
        id: 23,
        question: 'Câu 23: Muối nào sau đây của Magie là chất kết tủa trắng?',
        options: ['MgCl₂', 'Mg(NO₃)₂', 'MgCO₃', 'MgSO₄'],
        correctAnswer: 'MgCO₃',
        explanation: '👉 Hầu hết muối cacbonat (trừ Na⁺, K⁺, NH₄⁺) đều không tan trong nước.'
      },      {
        id: 24,
        question: 'Câu 24: Muối Na₂CO₃ có tính tan như thế nào trong nước?',
        options: ['Tan tốt trong nước tạo dung dịch có tính bazơ', 'Bị thủy phân tạo kết tủa', 'Ít tan trong nước', 'Không tan trong nước'],
        correctAnswer: 'Tan tốt trong nước tạo dung dịch có tính bazơ',
        explanation: '👉 Muối của kim loại kiềm Na₂CO₃ tan rất tốt trong nước.'
      },      {
        id: 25,
        question: 'Câu 25: Muối sunfua nào sau đây kết tủa màu đen và KHÔNG tan trong dung dịch axit HCl loãng?',
        options: ['ZnS', 'Na₂S', 'FeS', 'CuS'],
        correctAnswer: 'CuS',
        explanation: '👉 CuS và PbS kết tủa màu đen cực bền, không tan trong dung dịch axit HCl/H₂SO₄ loãng.'
      },      {
        id: 26,
        question: 'Câu 26: Muối chì sunfua (PbS) có màu sắc gì và được dùng để nhận biết khí H₂S?',
        options: ['Màu vàng', 'Màu trắng', 'Màu đen', 'Màu xanh'],
        correctAnswer: 'Màu đen',
        explanation: '👉 Dùng giấy tẩm dung dịch muối chì Pb(NO₃)₂ nhận biết H₂S: giấy hóa đen do tạo PbS↓.'
      },      {
        id: 27,
        question: 'Câu 27: Muối FeS kết tủa màu đen nhưng khác CuS ở điểm nào?',
        options: ['FeS không tan trong axit', 'FeS tan trong dung dịch axit HCl giải phóng khí H₂S mùi trứng thối', 'FeS có màu vàng', 'FeS tan trong nước'],
        correctAnswer: 'FeS tan trong dung dịch axit HCl giải phóng khí H₂S mùi trứng thối',
        explanation: '👉 FeS + 2HCl -> FeCl₂ + H₂S↑.'
      },      {
        id: 28,
        question: 'Câu 28: Muối kẽm sunfua (ZnS) có màu sắc kết tủa đặc trưng là gì?',
        options: ['Màu trắng', 'Màu vàng', 'Màu nâu đỏ', 'Màu đen'],
        correctAnswer: 'Màu trắng',
        explanation: '👉 ZnS là muối sunfua hiếm hoi có kết tủa màu trắng, tan được trong dung dịch axit mạnh.'
      },      {
        id: 29,
        question: 'Câu 29: Muối catmi sunfua (CdS) có màu sắc kết tủa đặc trưng là gì?',
        options: ['Màu đen', 'Màu trắng', 'Màu xanh', 'Màu vàng'],
        correctAnswer: 'Màu vàng',
        explanation: '👉 CdS kết tủa màu vàng tươi, dùng làm phẩm màu vàng catmi.'
      },      {
        id: 30,
        question: 'Câu 30: Bạc để lâu trong không khí bị chuyển sang màu đen xám là do phản ứng tạo thành hợp chất nào?',
        options: ['Ag₂S', 'Ag₂O', 'AgCl', 'AgNO₃'],
        correctAnswer: 'Ag₂S',
        explanation: '👉 4Ag + 2H₂S + O₂ -> 2Ag₂S↓ (đen) + 2H₂O.'
      },      {
        id: 31,
        question: 'Câu 31: Thuốc thử đặc trưng dùng để nhận biết ion sunfat (SO₄²⁻) trong dung dịch là gì?',
        options: ['Dung dịch phenolphtalein', 'Dung dịch chứa ion Ba²⁺ (như BaCl₂ hoặc Ba(OH)₂)', 'Dung dịch AgNO₃', 'Dung dịch quỳ tím'],
        correctAnswer: 'Dung dịch chứa ion Ba²⁺ (như BaCl₂ hoặc Ba(OH)₂)',
        explanation: '👉 Tạo kết tủa trắng BaSO₄ không tan trong axit mạnh.'
      },      {
        id: 32,
        question: 'Câu 32: Thuốc thử đặc trưng dùng để nhận biết ion clorua (Cl⁻) trong dung dịch là gì?',
        options: ['Dung dịch NaOH', 'Dung dịch HCl', 'Dung dịch AgNO₃ (tạo kết tủa AgCl trắng không tan trong HNO₃)', 'Dung dịch BaCl₂'],
        correctAnswer: 'Dung dịch AgNO₃ (tạo kết tủa AgCl trắng không tan trong HNO₃)',
        explanation: '👉 Ag⁺ + Cl⁻ -> AgCl↓ (kết tủa trắng không tan trong axit).'
      },      {
        id: 33,
        question: 'Câu 33: Khi cho dung dịch AgNO₃ vào dung dịch Na₃PO₄, xuất hiện kết tủa có màu gì?',
        options: ['Màu trắng', 'Màu nâu', 'Màu xanh lam', 'Màu vàng (Ag₃PO₄)'],
        correctAnswer: 'Màu vàng (Ag₃PO₄)',
        explanation: '👉 3Ag⁺ + PO₄³⁻ -> Ag₃PO₄↓ (kết tủa màu vàng, tan trong axit HNO₃).'
      },      {
        id: 34,
        question: 'Câu 34: Để nhận biết ion amoni (NH₄⁺) trong dung dịch, người ta đun nhẹ với dung dịch kiềm (NaOH), hiện tượng là gì?',
        options: ['Có khí mùi khai bay ra làm xanh giấy quỳ tím ẩm (NH₃)', 'Có khí màu nâu đỏ bay ra', 'Có kết tủa màu trắng', 'Không có hiện tượng gì'],
        correctAnswer: 'Có khí mùi khai bay ra làm xanh giấy quỳ tím ẩm (NH₃)',
        explanation: '👉 NH₄⁺ + OH⁻ -> NH₃↑ (mùi khai) + H₂O.'
      },      {
        id: 35,
        question: 'Câu 35: Khí CO₂ và khí SO₂ có hiện tượng chung nào khi sục vào dung dịch nước vôi trong dư Ca(OH)₂?',
        options: ['Đều làm mất màu dung dịch nước brom', 'Đều làm dung dịch chuyển sang màu xanh', 'Đều làm vẩn đục nước vôi trong (tạo kết tủa trắng)', 'Đều có mùi hắc đặc trưng'],
        correctAnswer: 'Đều làm vẩn đục nước vôi trong (tạo kết tủa trắng)',
        explanation: '👉 Cả CO₂ và SO₂ đều tạo kết tủa trắng CaCO₃ hoặc CaSO₃ làm đục nước vôi.'
      },      {
        id: 36,
        question: 'Câu 36: Để phân biệt 2 khí không màu CO₂ và SO₂, người ta dùng thuốc thử nào sau đây?',
        options: ['Dung dịch nước brom hoặc dung dịch thuốc tím KMnO₄', 'Dung dịch BaCl₂', 'Dung dịch NaOH', 'Dung dịch nước vôi trong Ca(OH)₂'],
        correctAnswer: 'Dung dịch nước brom hoặc dung dịch thuốc tím KMnO₄',
        explanation: '👉 SO₂ làm mất màu nước brom hoặc dung dịch thuốc tím KMnO₄; còn CO₂ thì không.'
      },      {
        id: 37,
        question: 'Câu 37: Muối nào sau đây dễ bị nhiệt phân hủy khi đun nóng giải phóng khí CO₂?',
        options: ['Na₂SO₄', 'KNO₃', 'NaCl', 'NaHCO₃ và Ca(HCO₃)₂'],
        correctAnswer: 'NaHCO₃ và Ca(HCO₃)₂',
        explanation: '👉 2NaHCO₃ -> Na₂CO₃ + CO₂↑ + H₂O; Ca(HCO₃)₂ -> CaCO₃↓ + CO₂↑ + H₂O.'
      },      {
        id: 38,
        question: 'Câu 38: Hiện tượng tạo thành thạch nhũ trong các hang động đá vôi là do phản ứng kết tủa lại của chất nào?',
        options: ['BaSO₄', 'CaSO₄', 'CaCO₃', 'MgCO₃'],
        correctAnswer: 'CaCO₃',
        explanation: '👉 Ca(HCO₃)₂ phân hủy dần tạo lại CaCO₃ kết tủa rắn tạo nên thạch nhũ kỳ vĩ.'
      },      {
        id: 39,
        question: 'Câu 39: Chất kết tủa nào sau đây được dùng làm chất cản quang khi chụp X-quang đường tiêu hóa vì không độc và không tan trong axit dạ dày?',
        options: ['BaCl₂', 'BaSO₄', 'PbSO₄', 'BaCO₃'],
        correctAnswer: 'BaSO₄',
        explanation: '👉 BaSO₄ trơ tuyệt đối, không tan trong axit HCl của dạ dày nên không giải phóng ion Ba²⁺ độc hại.'
      },      {
        id: 40,
        question: 'Câu 40: Muối ăn (NaCl) khai thác từ nước biển có thể kết tinh nhờ phương pháp nào sau đây?',
        options: ['Làm bay hơi nước biển dưới ánh nắng mặt trời (kết tinh muối)', 'Chiết bằng dung môi', 'Lọc ly tâm', 'Chưng cất phân đoạn'],
        correctAnswer: 'Làm bay hơi nước biển dưới ánh nắng mặt trời (kết tinh muối)',
        explanation: '👉 Nước biển bay hơi làm nồng độ NaCl vượt quá độ tan và kết tinh thành muối hạt.'
      },    ]
  }
];

export function getKhoaHocHoaQuestions(examNo: number): KhoaHocHoaQuestion[] {
  const ex = KHOA_HOC_HOA_EXAMS.find(e => e.examNo === examNo);
  return ex ? ex.questions : [];
}

export function convertKhoaHocHoaToExamFormat(questions: KhoaHocHoaQuestion[]): any {
  return {
    questions: questions.map(q => ({
      id: q.id,
      text: q.question,
      mathExpression: q.mathExpression,
      options: q.options,
      correct: q.correctAnswer,
      solution: q.explanation
    }))
  };
}
