// @ts-nocheck
import { supabase } from '@/lib/supabase';
import { getAllStandardExamsList, getExamByIdForAdmin } from './allExamsAdminService';

/**
 * Lấy danh sách đề chuẩn Bộ theo khối lớp (10, 11, 12)
 */
export function getStandardExamsForGrade(grade: number | string) {
  const all = getAllStandardExamsList();
  if (!grade || grade === 'all') return all;
  const gStr = String(grade);
  return all.filter(e => String(e.grade) === gStr);
}

/**
 * Đảm bảo đề thi chuẩn từ Ngân hàng đã có bản ghi trong bảng exams của Supabase
 * Trả về ID (UUID) của đề thi để liên kết với exam_rooms.exam_id
 */
export async function ensureStandardExamInDatabase(stdExam: any): Promise<string> {
  if (!stdExam) throw new Error('Không có dữ liệu đề thi');

  // 1. Kiểm tra xem đề đã tồn tại trong Supabase chưa (dựa theo tiêu đề chính xác)
  const { data: existing, error: searchErr } = await supabase
    .from('exams')
    .select('id, title')
    .eq('title', stdExam.title)
    .maybeSingle();

  if (existing?.id) {
    return existing.id;
  }

  // 2. Nếu chưa có, chèn vào bảng exams với đầy đủ câu hỏi và định dạng chuẩn
  const { data: { user } } = await supabase.auth.getUser();

  const examDataPayload = {
    title: stdExam.title,
    duration: stdExam.duration || 50,
    questions: stdExam.questions || [],
    standard_id: stdExam.id,
    grade: stdExam.grade,
    chapter: stdExam.chapter,
    total_questions: stdExam.questions?.length || 28
  };

  const { data: inserted, error: insertErr } = await supabase
    .from('exams')
    .insert([{
      title: stdExam.title,
      data: examDataPayload,
      created_by: user?.id || null
    }])
    .select('id')
    .single();

  if (insertErr || !inserted) {
    console.error('Lỗi khi lưu đề chuẩn vào Supabase:', insertErr);
    throw new Error(insertErr?.message || 'Không thể đồng bộ đề thi vào CSDL');
  }

  return inserted.id;
}
