import { HOA10_FINAL2_EXAMS } from "./hoa10Final2ExamService";
import { HOA11_FINAL2_EXAMS } from "./hoa11Final2ExamService";
import { HOA12_FINAL2_EXAMS } from "./hoa12Final2ExamService";
import { HOA10_MIDTERM2_EXAMS } from "./hoa10Midterm2ExamService";
import { HOA11_MIDTERM2_EXAMS } from "./hoa11Midterm2ExamService";
import { HOA12_MIDTERM2_EXAMS } from "./hoa12Midterm2ExamService";
import { HOA10_FINAL_EXAMS } from './hoa10FinalExamService';
import { HOA11_FINAL_EXAMS } from './hoa11FinalExamService';
import { HOA12_FINAL_EXAMS } from './hoa12FinalExamService';
// @ts-nocheck
// src/services/allExamsAdminService.ts
// Dịch vụ tải nhanh dữ liệu toàn bộ đề thi để Quản trị viên / Giáo viên xem và duyệt đề tự do

import { HOA12_CHUONG1_7_EXAMS } from './hoa12Chuong1Service';
import { HOA12_CHUONG2_EXAMS } from './hoa12Chuong2Service';
import { HOA12_CHUONG3_EXAMS } from './hoa12Chuong3Service';
import { HOA12_CHUONG4_EXAMS } from './hoa12Chuong4Service';
import { HOA12_CHUONG5_EXAMS } from './hoa12Chuong5Service';
import { HOA12_CHUONG6_EXAMS } from './hoa12Chuong6Service';
import { HOA12_CHUONG7_EXAMS } from './hoa12Chuong7Service';
import { HOA12_CHUONG8_EXAMS } from './hoa12Chuong8Service';
import { HOA12_MIDTERM_EXAMS } from './hoa12MidtermExamService';

import { HOA11_CHUONG1_EXAMS } from './hoa11Chuong1Service';
import { HOA11_CHUONG2_EXAMS } from './hoa11Chuong2Service';
import { HOA11_CHUONG3_EXAMS } from './hoa11Chuong3Service';
import { HOA11_CHUONG4_EXAMS } from './hoa11Chuong4Service';
import { HOA11_CHUONG5_EXAMS } from './hoa11Chuong5Service';
import { HOA11_CHUONG6_EXAMS } from './hoa11Chuong6Service';
import { HOA11_MIDTERM_EXAMS } from './hoa11MidtermExamService';

import { HOA10_CHUONG1_EXAMS } from './hoa10Chuong1Service';
import { HOA10_CHUONG2_EXAMS } from './hoa10Chuong2Service';
import { HOA10_CHUONG3_EXAMS } from './hoa10Chuong3Service';
import { HOA10_CHUONG4_EXAMS } from './hoa10Chuong4Service';
import { HOA10_CHUONG5_EXAMS } from './hoa10Chuong5Service';
import { HOA10_CHUONG6_EXAMS } from './hoa10Chuong6Service';
import { HOA10_CHUONG7_EXAMS } from './hoa10Chuong7Service';
import { HOA10_MIDTERM_EXAMS } from './hoa10MidtermExamService';

export function getAllStandardExamsList() {
  return [
    // ĐỀ CUỐI KÌ 2 CÁC KHỐI
    ...HOA12_FINAL2_EXAMS.map(e => ({ ...e, grade: "12", chapter: "Đề Cuối Kì 2 Hóa 12" })),
    ...HOA11_FINAL2_EXAMS.map(e => ({ ...e, grade: "11", chapter: "Đề Cuối Kì 2 Hóa 11" })),
    ...HOA10_FINAL2_EXAMS.map(e => ({ ...e, grade: "10", chapter: "Đề Cuối Kì 2 Hóa 10" })),

    // ĐỀ GIỮA KÌ 2 CÁC KHỐI
    ...HOA12_MIDTERM2_EXAMS.map(e => ({ ...e, grade: "12", chapter: "Đề Giữa Kì 2 Hóa 12" })),
    ...HOA11_MIDTERM2_EXAMS.map(e => ({ ...e, grade: "11", chapter: "Đề Giữa Kì 2 Hóa 11" })),
    ...HOA10_MIDTERM2_EXAMS.map(e => ({ ...e, grade: "10", chapter: "Đề Giữa Kì 2 Hóa 10" })),

    // ĐỀ CUỐI KÌ 1 CÁC KHỐI
    ...HOA12_FINAL_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Đề Cuối Kì 1 Hóa 12' })),
    ...HOA11_FINAL_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Đề Cuối Kì 1 Hóa 11' })),
    ...HOA10_FINAL_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Đề Cuối Kì 1 Hóa 10' })),

    // ĐỀ GIỮA KÌ 1 CÁC KHỐI
    ...HOA12_MIDTERM_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Đề Giữa Kì 1 Hóa 12' })),
    ...HOA11_MIDTERM_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Đề Giữa Kì 1 Hóa 11' })),
    ...HOA10_MIDTERM_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Đề Giữa Kì 1 Hóa 10' })),

    // CÁC CHƯƠNG LỚP 12
    ...HOA12_CHUONG1_7_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 1: Ester - Lipid' })),
    ...HOA12_CHUONG2_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 2: Carbohydrate' })),
    ...HOA12_CHUONG3_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 3: Hợp Chất Chứa Nitrogen' })),
    ...HOA12_CHUONG4_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 4: Polymer' })),
    ...HOA12_CHUONG5_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 5: Pin & Điện Phân' })),
    ...HOA12_CHUONG6_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 6: Đại Cương Về Kim Loại' })),
    ...HOA12_CHUONG7_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 7: Nhóm IA & IIA' })),
    ...HOA12_CHUONG8_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 8: Kim Loại Chuyển Tiếp & Phức Chất' })),

    // CÁC CHƯƠNG LỚP 11
    ...HOA11_CHUONG1_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Chương 1: Cân Bằng Hóa Học' })),
    ...HOA11_CHUONG2_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Chương 2: Nitrogen - Sulfur' })),
    ...HOA11_CHUONG3_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Chương 3: Đại Cương Hóa Hữu Cơ' })),
    ...HOA11_CHUONG4_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Chương 4: Hydrocarbon' })),
    ...HOA11_CHUONG5_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Chương 5: Halogen - Alcohol - Phenol' })),
    ...HOA11_CHUONG6_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Chương 6: Carbonyl - Acid' })),

    // CÁC CHƯƠNG LỚP 10
    ...HOA10_CHUONG1_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Chương 1: Cấu Tạo Nguyên Tử' })),
    ...HOA10_CHUONG2_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Chương 2: Bảng Tuần Hoàn NTHH' })),
    ...HOA10_CHUONG3_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Chương 3: Liên Kết Hóa Học' })),
    ...HOA10_CHUONG4_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Chương 4: Phản Ứng Oxi Hóa - Khử' })),
    ...HOA10_CHUONG5_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Chương 5: Năng Lượng Hóa Học' })),
    ...HOA10_CHUONG6_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Chương 6: Tốc Độ Phản Ứng' })),
    ...HOA10_CHUONG7_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Chương 7: Nhóm Halogen' })),
  ];
}

export function getExamByIdForAdmin(examId: string) {
  const all = getAllStandardExamsList();
  return all.find(e => e.id === examId || e.code === examId) || null;
}
