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
export async function ensureStandardExamInDatabase(stdExam: any, selectedParts: number[] = [1, 2, 3]): Promise<string> {
  if (!stdExam) throw new Error('Không có dữ liệu đề thi');

  const allQuestions = stdExam.questions || [];
  const isPartial = selectedParts.length > 0 && selectedParts.length < 3;
  
  const filteredQuestions = isPartial
    ? allQuestions.filter((q: any) => {
        const p = q.part || (q.type === 'multiple_choice' ? 1 : q.type === 'true_false' ? 2 : 3);
        return selectedParts.includes(p);
      })
    : allQuestions;

  const partNames = selectedParts.map(p => p === 1 ? 'Phần I' : p === 2 ? 'Phần II' : 'Phần III').join(' + ');
  const finalTitle = isPartial ? `${stdExam.title} [${partNames}]` : stdExam.title;

  // 1. Kiểm tra xem đề đã tồn tại trong Supabase chưa (dựa theo tiêu đề chính xác)
  const { data: existing } = await supabase
    .from('exams')
    .select('id, title')
    .eq('title', finalTitle)
    .maybeSingle();

  if (existing?.id) {
    return existing.id;
  }

  // 2. Chèn vào bảng exams
  const { data: { user } } = await supabase.auth.getUser();

  let autoDuration = stdExam.duration || 50;
  if (isPartial) {
    if (selectedParts.length === 1) {
      autoDuration = selectedParts[0] === 1 ? 25 : 15;
    } else if (selectedParts.length === 2) {
      autoDuration = 40;
    }
  }

  const examDataPayload = {
    title: finalTitle,
    duration: autoDuration,
    questions: filteredQuestions,
    standard_id: stdExam.id,
    grade: stdExam.grade,
    chapter: stdExam.chapter,
    total_questions: filteredQuestions.length,
    selected_parts: selectedParts
  };

  const { data: inserted, error: insertErr } = await supabase
    .from('exams')
    .insert([{
      title: finalTitle,
      data: examDataPayload,
      created_by: user?.id || null
    }])
    .select('id')
    .single();

  if (insertErr || !inserted) {
    console.error('Lỗi khi lưu đề vào Supabase:', insertErr);
    throw new Error(insertErr?.message || 'Không thể đồng bộ đề thi vào CSDL');
  }

  return inserted.id;
}
