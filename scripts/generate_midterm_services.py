import os, sys, glob, re, json
sys.path.append(".")
from scripts.parse_midterms import extract_media, parse_docx, chem_fmt
from scripts.test_parse_all import parse_part1, parse_part2, parse_part3, extract_tables
from scripts.test_grade12_conversion import p4_converted

base_public = "/Users/nguyenluongtho/Desktop/LOP_HOC_THAY_THO_CODE/public/assets"

def make_ts_service_file(var_name, exams, grade, title_desc):
    header = f"""// @ts-nocheck
/**
 * DỊCH VỤ DỮ LIỆU ĐỀ THI GIỮA HỌC KÌ 1 HÓA HỌC {grade} (CTGDPT 2018 - THI 2025)
 * {title_desc}
 * Chuẩn hóa 100% trắc nghiệm theo đúng quy định Bộ Giáo Dục:
 * - Phần I: Câu trắc nghiệm nhiều phương án lựa chọn
 * - Phần II: Câu trắc nghiệm đúng / sai
 * - Phần III: Câu trắc nghiệm trả lời ngắn
 */

export interface Chuong1Question {{
  id: string;
  number: number;
  part: number;
  type: 'multiple_choice' | 'true_false' | 'short_answer';
  text: string;
  images?: string[];
  image?: string;
  options?: Array<{{
    id: string;
    letter: string;
    text: string;
    image?: string;
    isCorrect?: boolean;
  }}>;
  correctAnswer?: string;
  explanation?: string;
  explanationImages?: string[];
  points?: number;
  displayNumber?: number;
}}

export interface Chuong1Exam {{
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
}}

export const {var_name}: Chuong1Exam[] = {json.dumps(exams, ensure_ascii=False, indent=2)};

export function getMidtermExamById(id: string): Chuong1Exam | undefined {{
  return {var_name}.find(e => e.id === id || e.code === id);
}}

export function calculateMidtermExamScore(exam: Chuong1Exam, answers: Record<string, any>) {{
  if (!exam || !exam.questions) {{
    return {{ score: 0, part1Score: 0, part2Score: 0, part3Score: 0, correctCount: 0, totalQuestions: 0 }};
  }}

  let part1Score = 0;
  let part2Score = 0;
  let part3Score = 0;
  let correctCount = 0;

  exam.questions.forEach((q) => {{
    const userAns = answers[q.id];

    if (q.part === 1) {{
      const correctOpt = q.options?.find((o) => o.isCorrect)?.letter || q.correctAnswer;
      if (userAns && userAns === correctOpt) {{
        part1Score += (q.points || 0.25);
        correctCount += 1;
      }}
    }} else if (q.part === 2) {{
      if (userAns && typeof userAns === 'object' && q.options) {{
        let correctSub = 0;
        q.options.forEach((opt) => {{
          const userSubVal = userAns[opt.id || opt.letter?.toLowerCase()];
          const isActuallyTrue = Boolean(opt.isCorrect);
          if (userSubVal === 'true' && isActuallyTrue) correctSub++;
          else if (userSubVal === 'false' && !isActuallyTrue) correctSub++;
        }});

        if (correctSub === 1) part2Score += 0.1;
        else if (correctSub === 2) part2Score += 0.25;
        else if (correctSub === 3) part2Score += 0.5;
        else if (correctSub === 4) part2Score += 1.0;

        if (correctSub === 4) correctCount += 1;
      }}
    }} else if (q.part === 3) {{
      if (userAns !== undefined && userAns !== null && String(userAns).trim() !== '') {{
        const rawUser = String(userAns).trim().toLowerCase().replace(',', '.');
        const rawCorrect = String(q.correctAnswer || '').trim().toLowerCase().replace(',', '.');
        const numUser = parseFloat(rawUser);
        const numCorrect = parseFloat(rawCorrect);

        let isMatch = false;
        if (!isNaN(numUser) && !isNaN(numCorrect)) {{
          isMatch = Math.abs(numUser - numCorrect) < 0.01;
        }} else {{
          isMatch = (rawUser === rawCorrect);
        }}

        if (isMatch) {{
          part3Score += (q.points || 0.25);
          correctCount += 1;
        }}
      }}
    }}
  }});

  const totalScore = Math.round((part1Score + part2Score + part3Score) * 100) / 100;
  return {{
    score: totalScore,
    part1Score: Math.round(part1Score * 100) / 100,
    part2Score: Math.round(part2Score * 100) / 100,
    part3Score: Math.round(part3Score * 100) / 100,
    correctCount,
    totalQuestions: exam.questions.length
  }};
}}
"""
    return header

print("Service file maker defined.")

def generate_all():
    # 1. GRADE 10
    print("=== ĐANG XỬ LÝ HÓA 10 (10 ĐỀ GIỮA KÌ 1) ===")
    files_10 = sorted(glob.glob("temp_de_giua_ki/hoa10/*.docx"), key=lambda f: int(re.search(r'Đề\s+(?:số\s+)?(\d+)', f).group(1)))
    exams_10 = []
    for f in files_10:
        num = int(re.search(r'Đề\s+(?:số\s+)?(\d+)', f).group(1))
        exam_id = f"hoa10_gk1_de{num:02d}"
        code = f"H10-GK1-{num:02d}"
        title = f"Đề Kiểm Tra Giữa Kì 1 Hóa 10 - Đề số {num}"
        prefix = f"h10_gk1_de{num}"
        out_dir = os.path.join(base_public, "hoa10", "midterm")
        media_map = extract_media(f, out_dir, prefix)
        web_dir = "/assets/hoa10/midterm"
        blocks = parse_docx(f, web_dir, prefix, media_map)
        p1_tbl, p2_tbl, p3_tbl = extract_tables(blocks)

        expl_start = -1
        for i, b in enumerate(blocks):
            txt = b.get("plain", "").upper()
            if "HƯỚNG DẪN GIẢI" in txt or "ĐÁP ÁN VÀ LỜI GIẢI" in txt:
                expl_start = i
                break
        source_blocks = blocks[expl_start:] if expl_start != -1 else blocks

        p1_idx = p2_idx = p3_idx = -1
        for i, b in enumerate(source_blocks):
            txt = b.get("plain", "").upper()
            if "PHẦN I." in txt and p1_idx == -1: p1_idx = i
            elif "PHẦN II." in txt and p2_idx == -1: p2_idx = i
            elif ("PHẦN III:" in txt or "PHẦN III." in txt) and p3_idx == -1: p3_idx = i

        q1 = parse_part1(source_blocks[p1_idx:p2_idx], exam_id, p1_tbl)
        q2 = parse_part2(source_blocks[p2_idx:p3_idx], exam_id, p2_tbl)
        q3 = parse_part3(source_blocks[p3_idx:], exam_id, p3_tbl)

        exam_q1 = q1[:18]
        exam_q2 = q2[:4]
        exam_q3 = q3[:6]

        all_qs = []
        disp = 1
        for q in exam_q1:
            q["displayNumber"] = disp
            disp += 1
            all_qs.append(q)
        for q in exam_q2:
            q["displayNumber"] = disp
            disp += 1
            all_qs.append(q)
        for q in exam_q3:
            q["displayNumber"] = disp
            disp += 1
            all_qs.append(q)

        exams_10.append({
            "id": exam_id,
            "code": code,
            "title": title,
            "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 10",
            "badge": "Giữa Kì 1",
            "grade": "10",
            "chapter": "Đề Giữa Học Kì 1",
            "duration": 50,
            "totalQuestions": len(all_qs),
            "totalPoints": 10.0,
            "questions": all_qs
        })
        print(f"  -> Đề {num:02d}: P1={len(exam_q1)}, P2={len(exam_q2)}, P3={len(exam_q3)} => {len(all_qs)} câu")

    out_file_10 = "src/services/hoa10MidtermExamService.ts"
    with open(out_file_10, "w", encoding="utf-8") as f:
        f.write(make_ts_service_file("HOA10_MIDTERM_EXAMS", exams_10, "10", "Bộ 10 Đề Thi Giữa Học Kì 1 Hóa Học Lớp 10 Chuẩn Cấu Trúc 2025"))
    print(f"✓ Đã lưu file: {out_file_10} ({len(exams_10)} đề)")

    # 2. GRADE 11
    print("\n=== ĐANG XỬ LÝ HÓA 11 (10 ĐỀ GIỮA KÌ 1) ===")
    files_11 = sorted(glob.glob("temp_de_giua_ki/hoa11/*.docx"), key=lambda f: int(re.search(r'Đề\s+(?:số\s+)?(\d+)', f).group(1)))
    exams_11 = []
    for f in files_11:
        num = int(re.search(r'Đề\s+(?:số\s+)?(\d+)', f).group(1))
        exam_id = f"hoa11_gk1_de{num:02d}"
        code = f"H11-GK1-{num:02d}"
        title = f"Đề Kiểm Tra Giữa Kì 1 Hóa 11 - Đề số {num}"
        prefix = f"h11_gk1_de{num}"
        out_dir = os.path.join(base_public, "hoa11", "midterm")
        media_map = extract_media(f, out_dir, prefix)
        web_dir = "/assets/hoa11/midterm"
        blocks = parse_docx(f, web_dir, prefix, media_map)
        p1_tbl, p2_tbl, p3_tbl = extract_tables(blocks)

        expl_start = -1
        for i, b in enumerate(blocks):
            txt = b.get("plain", "").upper()
            if "HƯỚNG DẪN GIẢI" in txt or "ĐÁP ÁN VÀ LỜI GIẢI" in txt:
                expl_start = i
                break
        source_blocks = blocks[expl_start:] if expl_start != -1 else blocks

        p1_idx = p2_idx = p3_idx = -1
        for i, b in enumerate(source_blocks):
            txt = b.get("plain", "").upper()
            if "PHẦN I." in txt and p1_idx == -1: p1_idx = i
            elif "PHẦN II." in txt and p2_idx == -1: p2_idx = i
            elif ("PHẦN III:" in txt or "PHẦN III." in txt) and p3_idx == -1: p3_idx = i

        q1 = parse_part1(source_blocks[p1_idx:p2_idx], exam_id, p1_tbl)
        q2 = parse_part2(source_blocks[p2_idx:p3_idx], exam_id, p2_tbl)
        q3 = parse_part3(source_blocks[p3_idx:], exam_id, p3_tbl)

        exam_q1 = q1[:18]
        exam_q2 = q2[:4]
        exam_q3 = q3[:6]

        all_qs = []
        disp = 1
        for q in exam_q1:
            q["displayNumber"] = disp
            disp += 1
            all_qs.append(q)
        for q in exam_q2:
            q["displayNumber"] = disp
            disp += 1
            all_qs.append(q)
        for q in exam_q3:
            q["displayNumber"] = disp
            disp += 1
            all_qs.append(q)

        exams_11.append({
            "id": exam_id,
            "code": code,
            "title": title,
            "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 11",
            "badge": "Giữa Kì 1",
            "grade": "11",
            "chapter": "Đề Giữa Học Kì 1",
            "duration": 50,
            "totalQuestions": len(all_qs),
            "totalPoints": 10.0,
            "questions": all_qs
        })
        print(f"  -> Đề {num:02d}: P1={len(exam_q1)}, P2={len(exam_q2)}, P3={len(exam_q3)} => {len(all_qs)} câu")

    out_file_11 = "src/services/hoa11MidtermExamService.ts"
    with open(out_file_11, "w", encoding="utf-8") as f:
        f.write(make_ts_service_file("HOA11_MIDTERM_EXAMS", exams_11, "11", "Bộ 10 Đề Thi Giữa Học Kì 1 Hóa Học Lớp 11 Chuẩn Cấu Trúc 2025"))
    print(f"✓ Đã lưu file: {out_file_11} ({len(exams_11)} đề)")

    # 3. GRADE 12
    print("\n=== ĐANG XỬ LÝ HÓA 12 (10 ĐỀ GIỮA KÌ 1) ===")
    files_12 = sorted(glob.glob("temp_de_giua_ki/hoa12/*.docx"), key=lambda f: int(re.search(r'Đề\s+(?:số\s+)?(\d+)', f).group(1)))
    exams_12 = []
    for f in files_12:
        num = int(re.search(r'Đề\s+(?:số\s+)?(\d+)', f).group(1))
        exam_id = f"hoa12_gk1_de{num:02d}"
        code = f"H12-GK1-{num:02d}"
        title = f"Đề Kiểm Tra Giữa Kì 1 Hóa 12 - Đề số {num}"
        prefix = f"h12_gk1_de{num}"
        out_dir = os.path.join(base_public, "hoa12", "midterm")
        media_map = extract_media(f, out_dir, prefix)
        web_dir = "/assets/hoa12/midterm"
        blocks = parse_docx(f, web_dir, prefix, media_map)
        p1_tbl, p2_tbl, p3_tbl = extract_tables(blocks)

        expl_start = -1
        for i, b in enumerate(blocks):
            txt = b.get("plain", "").upper()
            if "HƯỚNG DẪN GIẢI" in txt or "ĐÁP ÁN VÀ LỜI GIẢI" in txt:
                expl_start = i
                break
        source_blocks = blocks[expl_start:] if expl_start != -1 else blocks

        p1_idx = p2_idx = p3_idx = p4_idx = -1
        for i, b in enumerate(source_blocks):
            txt = b.get("plain", "").upper()
            if "PHẦN I." in txt and p1_idx == -1: p1_idx = i
            elif "PHẦN II." in txt and p2_idx == -1: p2_idx = i
            elif ("PHẦN III:" in txt or "PHẦN III." in txt) and p3_idx == -1: p3_idx = i
            elif "PHẦN IV." in txt and p4_idx == -1: p4_idx = i

        end_p3 = p4_idx if p4_idx != -1 else len(source_blocks)
        q1 = parse_part1(source_blocks[p1_idx:p2_idx], exam_id, p1_tbl)
        q2 = parse_part2(source_blocks[p2_idx:p3_idx], exam_id, p2_tbl)
        q3 = parse_part3(source_blocks[p3_idx:end_p3], exam_id, p3_tbl)

        exam_q1 = q1[:12]
        exam_q2 = q2[:2]
        exam_q3 = list(q3[:4])

        # Add converted questions from Part 4 for this exam
        if num in p4_converted:
            for extra in p4_converted[num]:
                q_id = f"{exam_id}_p3_q{extra['num']}"
                exam_q3.append({
                    "id": q_id,
                    "number": extra["num"],
                    "part": 3,
                    "type": "short_answer",
                    "text": extra["text"],
                    "images": [],
                    "correctAnswer": extra["correct"],
                    "explanation": extra["explanation"],
                    "explanationImages": [],
                    "points": 0.5
                })

        all_qs = []
        disp = 1
        for q in exam_q1:
            q["displayNumber"] = disp
            disp += 1
            all_qs.append(q)
        for q in exam_q2:
            q["displayNumber"] = disp
            disp += 1
            all_qs.append(q)
        for q in exam_q3:
            q["displayNumber"] = disp
            disp += 1
            all_qs.append(q)

        exams_12.append({
            "id": exam_id,
            "code": code,
            "title": title,
            "topic": "Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học 12",
            "badge": "Giữa Kì 1",
            "grade": "12",
            "chapter": "Đề Giữa Học Kì 1",
            "duration": 50,
            "totalQuestions": len(all_qs),
            "totalPoints": 10.0,
            "questions": all_qs
        })
        print(f"  -> Đề {num:02d}: P1={len(exam_q1)}, P2={len(exam_q2)}, P3={len(exam_q3)} => {len(all_qs)} câu")

    out_file_12 = "src/services/hoa12MidtermExamService.ts"
    with open(out_file_12, "w", encoding="utf-8") as f:
        f.write(make_ts_service_file("HOA12_MIDTERM_EXAMS", exams_12, "12", "Bộ 10 Đề Thi Giữa Học Kì 1 Hóa Học Lớp 12 Chuẩn Cấu Trúc 2025"))
    print(f"✓ Đã lưu file: {out_file_12} ({len(exams_12)} đề)")

if __name__ == "__main__":
    generate_all()
