// @ts-nocheck
// src/services/allExamsAdminService.ts
// Dịch vụ tải nhanh dữ liệu toàn bộ đề thi để Quản trị viên / Giáo viên xem và duyệt đề tự do

import { HOA12_CHUONG1_7_EXAMS } from './hoa12Chuong1Service';
import { HOA12_CHUONG2_EXAMS } from './hoa12Chuong2Service';
import { HOA12_CHUONG3_EXAMS } from './hoa12Chuong3Service';
import { HOA12_CHUONG4_EXAMS } from './hoa12Chuong4Service';
import { HOA12_CHUONG5_EXAMS } from './hoa12Chuong5Service';
import { HOA11_CHUONG1_EXAMS } from './hoa11Chuong1Service';
import { HOA11_CHUONG2_EXAMS } from './hoa11Chuong2Service';
import { HOA10_CHUONG1_EXAMS } from './hoa10Chuong1Service';
import { HOA10_CHUONG2_EXAMS } from './hoa10Chuong2Service';

export function getAllStandardExamsList() {
  return [
    ...HOA12_CHUONG1_7_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 1: Ester - Lipid' })),
    ...HOA12_CHUONG2_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 2: Carbohydrate' })),
    ...HOA12_CHUONG3_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 3: Hợp Chất Chứa Nitrogen' })),
    ...HOA12_CHUONG4_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 4: Polymer' })),
    ...HOA12_CHUONG5_EXAMS.map(e => ({ ...e, grade: '12', chapter: 'Chương 5: Pin & Điện Phân' })),
    ...HOA11_CHUONG1_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Chương 1: Cân Bằng Hóa Học' })),
    ...HOA11_CHUONG2_EXAMS.map(e => ({ ...e, grade: '11', chapter: 'Chương 2: Nitrogen - Sulfur' })),
    ...HOA10_CHUONG1_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Chương 1: Cấu Tạo Nguyên Tử' })),
    ...HOA10_CHUONG2_EXAMS.map(e => ({ ...e, grade: '10', chapter: 'Chương 2: Bảng Tuần Hoàn NTHH' })),
  ];
}

export function getExamByIdForAdmin(examId: string) {
  const all = getAllStandardExamsList();
  return all.find(e => e.id === examId || e.code === examId) || null;
}
