import urllib.request
import urllib.parse
import json

SUPABASE_URL = 'https://kbowwwbmyrwmxmjnopsm.supabase.co'
SUPABASE_ANON_KEY = 'sb_publishable_Q9nAR2kWvrOh7ySG7R4iDA_1QOKtB5T'

headers = {
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': f'Bearer {SUPABASE_ANON_KEY}',
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
}

exams_to_sync = [
    # ĐỀ 01 - TOÁN 9
    {
        "title": "Đề Kiểm Tra Định Kỳ Môn Toán 9 — Căn Bậc Hai & Hệ Phương Trình (Đề 01 - Học trên lớp)",
        "data": {
            "grade": 9,
            "title": "Đề Kiểm Tra Định Kỳ Môn Toán 9 — Căn Bậc Hai & Hệ Phương Trình (Đề 01 - Học trên lớp)",
            "chapter": "Căn Bậc Hai & Hệ Phương Trình",
            "duration": 60,
            "total_questions": 10,
            "questions": [
                {
                    "id": "t9_de01_q1",
                    "part": 1,
                    "number": 1,
                    "displayNumber": 1,
                    "type": "multiple_choice",
                    "text": "Điều kiện xác định của biểu thức $\\sqrt{2x - 6}$ là:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$x > 3$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$x \\le 3$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$x \\ge 3$", "isCorrect": True},
                        {"id": "d", "letter": "D", "text": "$x \\ge -3$", "isCorrect": False}
                    ],
                    "correctAnswer": "C",
                    "points": 0.5,
                    "explanation": "Căn thức $\\sqrt{A}$ có nghĩa khi và chỉ khi $A \\ge 0$. Do đó $2x - 6 \\ge 0 \\Leftrightarrow x \\ge 3$."
                },
                {
                    "id": "t9_de01_q2",
                    "part": 1,
                    "number": 2,
                    "displayNumber": 2,
                    "type": "multiple_choice",
                    "text": "Giá trị của biểu thức $M = \\sqrt{48} : \\sqrt{3} - \\sqrt{(-2)^2}$ bằng:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$2$", "isCorrect": True},
                        {"id": "b", "letter": "B", "text": "$-2$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$6$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$14$", "isCorrect": False}
                    ],
                    "correctAnswer": "A",
                    "points": 0.5,
                    "explanation": "$M = \\sqrt{48 : 3} - |-2| = \\sqrt{16} - 2 = 4 - 2 = 2$."
                },
                {
                    "id": "t9_de01_q3",
                    "part": 1,
                    "number": 3,
                    "displayNumber": 3,
                    "type": "multiple_choice",
                    "text": "Cặp số nào sau đây là nghiệm của phương trình bậc nhất hai ẩn $2x - y = 3$?",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$(1; 1)$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$(2; 1)$", "isCorrect": True},
                        {"id": "c", "letter": "C", "text": "$(0; 3)$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$(2; -1)$", "isCorrect": False}
                    ],
                    "correctAnswer": "B",
                    "points": 0.5,
                    "explanation": "Thay $(2; 1)$ vào vế trái: $2(2) - 1 = 3 = VP$ (thỏa mãn)."
                },
                {
                    "id": "t9_de01_q4",
                    "part": 1,
                    "number": 4,
                    "displayNumber": 4,
                    "type": "multiple_choice",
                    "text": "Cặp số $(x_0; y_0)$ là nghiệm của hệ phương trình $\\begin{cases} x + y = 5 \\\\ 2x - y = 1 \\end{cases}$. Giá trị của tích $x_0 \\cdot y_0$ bằng:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$5$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$6$", "isCorrect": True},
                        {"id": "c", "letter": "C", "text": "$4$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$7$", "isCorrect": False}
                    ],
                    "correctAnswer": "B",
                    "points": 0.5,
                    "explanation": "Cộng hai phương trình: $3x = 6 \\Rightarrow x = 2 \\Rightarrow y = 3$. Tích $x_0 \\cdot y_0 = 2 \\cdot 3 = 6$."
                },
                {
                    "id": "t9_de01_q5",
                    "part": 1,
                    "number": 5,
                    "displayNumber": 5,
                    "type": "multiple_choice",
                    "text": "Với số thực $a > 0$, rút gọn biểu thức $\\sqrt{\\dfrac{9a^2}{16}}$ ta được kết quả là:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$\\dfrac{9a}{16}$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$-\\dfrac{3a}{4}$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$\\dfrac{3a}{4}$", "isCorrect": True},
                        {"id": "d", "letter": "D", "text": "$\\dfrac{3|a|}{16}$", "isCorrect": False}
                    ],
                    "correctAnswer": "C",
                    "points": 0.5,
                    "explanation": "$\\sqrt{\\dfrac{9a^2}{16}} = \\dfrac{3|a|}{4} = \\dfrac{3a}{4}$ (do $a > 0$)."
                },
                {
                    "id": "t9_de01_q6",
                    "part": 1,
                    "number": 6,
                    "displayNumber": 6,
                    "type": "multiple_choice",
                    "text": "Một đội công nhân dự định làm xong đoạn đường trong $x$ ngày ($x > 0$). Biết năng suất mỗi ngày như nhau. Trong $3$ ngày, đội công nhân đó hoàn thành được bao nhiêu phần đoạn đường?",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$3x$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$\\dfrac{x}{3}$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$\\dfrac{3}{x}$", "isCorrect": True},
                        {"id": "d", "letter": "D", "text": "$x - 3$", "isCorrect": False}
                    ],
                    "correctAnswer": "C",
                    "points": 0.5,
                    "explanation": "Mỗi ngày làm $\\dfrac{1}{x}$ đoạn đường. Trong $3$ ngày làm được $3 \\cdot \\dfrac{1}{x} = \\dfrac{3}{x}$ đoạn đường."
                },
                {
                    "id": "t9_de01_q7",
                    "part": 2,
                    "number": 7,
                    "displayNumber": 7,
                    "type": "essay",
                    "text": "<b>Bài 1 (2,5 điểm).</b><br/>1. Thực hiện phép tính:<br/>a) $\\sqrt{12} \\cdot (\\sqrt{12} + \\sqrt{3})$<br/>b) $\\sqrt{8} \\cdot (\\sqrt{50} - \\sqrt{2})$<br/>c) $(\\sqrt{3} + \\sqrt{2})^2 - 2\\sqrt{6}$<br/>2. Rút gọn biểu thức: $P = \\sqrt{2(a^2 - b^2)} \\cdot \\sqrt{\\dfrac{3}{a + b}}$ (với $a \\ge b > 0$).",
                    "points": 2.5,
                    "correctAnswer": "Xem hướng dẫn chấm chi tiết",
                    "explanation": "<b>1. Thực hiện phép tính (1,5 điểm):</b><br/>a) $\\sqrt{12} \\cdot (\\sqrt{12} + \\sqrt{3}) = 12 + \\sqrt{36} = 12 + 6 = 18$. <i>(0,5 đ)</i><br/>b) $\\sqrt{8} \\cdot (\\sqrt{50} - \\sqrt{2}) = \\sqrt{400} - \\sqrt{16} = 20 - 4 = 16$. <i>(0,5 đ)</i><br/>c) $(\\sqrt{3} + \\sqrt{2})^2 - 2\\sqrt{6} = 3 + 2\\sqrt{6} + 2 - 2\\sqrt{6} = 5$. <i>(0,5 đ)</i><br/><br/><b>2. Rút gọn biểu thức (1,0 điểm):</b><br/>Với $a \\ge b > 0 \\Rightarrow a + b > 0$ và $a^2 - b^2 \\ge 0$.<br/>$P = \\sqrt{\\dfrac{6(a - b)(a + b)}{a + b}} = \\sqrt{6(a - b)}$."
                },
                {
                    "id": "t9_de01_q8",
                    "part": 2,
                    "number": 8,
                    "displayNumber": 8,
                    "type": "essay",
                    "text": "<b>Bài 2 (1,5 điểm).</b> Giải hệ phương trình:<br/>$$\\begin{cases} 3x - 2y = 7 \\\\ 2x + 3y = 9 \\end{cases}$$",
                    "points": 1.5,
                    "correctAnswer": "(x; y) = (3; 1)",
                    "explanation": "Nhân pt 1 với 3, pt 2 với 2: $\\begin{cases} 9x - 6y = 21 \\\\ 4x + 6y = 18 \\end{cases}$<br/>Cộng từng vế: $13x = 39 \\Leftrightarrow x = 3$.<br/>Thay $x = 3$ vào pt 2: $2(3) + 3y = 9 \\Rightarrow 3y = 3 \\Leftrightarrow y = 1$.<br/>Vậy nghiệm duy nhất: $(x; y) = (3; 1)$."
                },
                {
                    "id": "t9_de01_q9",
                    "part": 2,
                    "number": 9,
                    "displayNumber": 9,
                    "type": "essay",
                    "text": "<b>Bài 3 (1,5 điểm).</b> Giải phương trình:<br/>$$\\dfrac{x + 3}{x - 3} - \\dfrac{x - 3}{x + 3} = \\dfrac{24}{x^2 - 9}$$",
                    "points": 1.5,
                    "correctAnswer": "S = {2}",
                    "explanation": "ĐKXĐ: $x \\ne 3$ và $x \\ne -3$.<br/>MTC: $x^2 - 9 = (x - 3)(x + 3)$.<br/>Khử mẫu: $(x + 3)^2 - (x - 3)^2 = 24 \\Leftrightarrow 12x = 24 \\Leftrightarrow x = 2$ (thỏa mãn ĐKXĐ).<br/>Vậy tập nghiệm $S = \\{2\\}$."
                },
                {
                    "id": "t9_de01_q10",
                    "part": 2,
                    "number": 10,
                    "displayNumber": 10,
                    "type": "essay",
                    "text": "<b>Bài 4 (1,5 điểm).</b> Hai tổ công nhân cùng làm chung một công việc thì sau $12$ ngày sẽ hoàn thành. Nếu tổ thứ nhất làm một mình trong $8$ ngày rồi nghỉ, sau đó tổ thứ hai làm tiếp một mình trong $4$ ngày thì cả hai tổ hoàn thành được $\\dfrac{8}{15}$ khối lượng công việc. Hỏi nếu làm một mình thì mỗi tổ cần bao nhiêu ngày để hoàn thành toàn bộ công việc đó?",
                    "points": 1.5,
                    "correctAnswer": "Tổ I: 20 ngày, Tổ II: 30 ngày",
                    "explanation": "Gọi thời gian tổ I, tổ II làm một mình xong là $x, y$ (ngày; $x, y > 12$).<br/>Ta có hệ phương trình: $\\begin{cases} \\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{12} \\\\[2mm] \\dfrac{8}{x} + \\dfrac{4}{y} = \\dfrac{8}{15} \\end{cases}$<br/>Giải hệ ta được: $x = 20$ (TM), $y = 30$ (TM).<br/>Vậy tổ I cần 20 ngày, tổ II cần 30 ngày."
                }
            ]
        }
    },

    # ĐỀ 02 - TOÁN 9 (TỰ LUYỆN 1)
    {
        "title": "Đề Kiểm Tra Định Kỳ Môn Toán 9 — Căn Bậc Hai & Hệ Phương Trình (Đề 02 - Tự luyện 1)",
        "data": {
            "grade": 9,
            "title": "Đề Kiểm Tra Định Kỳ Môn Toán 9 — Căn Bậc Hai & Hệ Phương Trình (Đề 02 - Tự luyện 1)",
            "chapter": "Căn Bậc Hai & Hệ Phương Trình",
            "duration": 60,
            "total_questions": 10,
            "questions": [
                {
                    "id": "t9_de02_q1",
                    "part": 1,
                    "number": 1,
                    "displayNumber": 1,
                    "type": "multiple_choice",
                    "text": "Điều kiện xác định của biểu thức $\\sqrt{3x - 12}$ là:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$x > 4$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$x \\le 4$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$x \\ge 4$", "isCorrect": True},
                        {"id": "d", "letter": "D", "text": "$x \\ge -4$", "isCorrect": False}
                    ],
                    "correctAnswer": "C",
                    "points": 0.5,
                    "explanation": "$3x - 12 \\ge 0 \\Leftrightarrow x \\ge 4$."
                },
                {
                    "id": "t9_de02_q2",
                    "part": 1,
                    "number": 2,
                    "displayNumber": 2,
                    "type": "multiple_choice",
                    "text": "Giá trị của biểu thức $M = \\sqrt{75} : \\sqrt{3} - \\sqrt{(-3)^2}$ bằng:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$2$", "isCorrect": True},
                        {"id": "b", "letter": "B", "text": "$-2$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$8$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$22$", "isCorrect": False}
                    ],
                    "correctAnswer": "A",
                    "points": 0.5,
                    "explanation": "$M = \\sqrt{25} - 3 = 5 - 3 = 2$."
                },
                {
                    "id": "t9_de02_q3",
                    "part": 1,
                    "number": 3,
                    "displayNumber": 3,
                    "type": "multiple_choice",
                    "text": "Cặp số nào sau đây là nghiệm của phương trình bậc nhất hai ẩn $3x - y = 5$?",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$(1; -1)$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$(2; 1)$", "isCorrect": True},
                        {"id": "c", "letter": "C", "text": "$(0; 5)$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$(3; 2)$", "isCorrect": False}
                    ],
                    "correctAnswer": "B",
                    "points": 0.5,
                    "explanation": "$3(2) - 1 = 5$."
                },
                {
                    "id": "t9_de02_q4",
                    "part": 1,
                    "number": 4,
                    "displayNumber": 4,
                    "type": "multiple_choice",
                    "text": "Cặp số $(x_0; y_0)$ là nghiệm của hệ phương trình $\\begin{cases} x + y = 7 \\\\ 2x - y = 2 \\end{cases}$. Giá trị của tích $x_0 \\cdot y_0$ bằng:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$10$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$12$", "isCorrect": True},
                        {"id": "c", "letter": "C", "text": "$14$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$9$", "isCorrect": False}
                    ],
                    "correctAnswer": "B",
                    "points": 0.5,
                    "explanation": "$3x = 9 \\Rightarrow x = 3, y = 4 \\Rightarrow x_0 y_0 = 12$."
                },
                {
                    "id": "t9_de02_q5",
                    "part": 1,
                    "number": 5,
                    "displayNumber": 5,
                    "type": "multiple_choice",
                    "text": "Với số thực $b > 0$, rút gọn biểu thức $\\sqrt{\\dfrac{25b^2}{36}}$ ta được kết quả là:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$\\dfrac{25b}{36}$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$-\\dfrac{5b}{6}$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$\\dfrac{5b}{6}$", "isCorrect": True},
                        {"id": "d", "letter": "D", "text": "$\\dfrac{5|b|}{36}$", "isCorrect": False}
                    ],
                    "correctAnswer": "C",
                    "points": 0.5,
                    "explanation": "$\\sqrt{\\dfrac{25b^2}{36}} = \\dfrac{5b}{6}$."
                },
                {
                    "id": "t9_de02_q6",
                    "part": 1,
                    "number": 6,
                    "displayNumber": 6,
                    "type": "multiple_choice",
                    "text": "Một tổ công nhân dự định xây xong một bức tường trong $y$ ngày ($y > 0$). Biết năng suất làm việc mỗi ngày là như nhau. Trong $4$ ngày, tổ công nhân đó hoàn thành được bao nhiêu phần bức tường?",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$4y$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$\\dfrac{y}{4}$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$\\dfrac{4}{y}$", "isCorrect": True},
                        {"id": "d", "letter": "D", "text": "$y - 4$", "isCorrect": False}
                    ],
                    "correctAnswer": "C",
                    "points": 0.5,
                    "explanation": "Trong 4 ngày làm được $\\dfrac{4}{y}$ bức tường."
                },
                {
                    "id": "t9_de02_q7",
                    "part": 2,
                    "number": 7,
                    "displayNumber": 7,
                    "type": "essay",
                    "text": "<b>Bài 1 (2,5 điểm).</b><br/>1. Tính: a) $\\sqrt{18} \\cdot (\\sqrt{18} + \\sqrt{2})$; b) $\\sqrt{12} \\cdot (\\sqrt{75} - \\sqrt{3})$; c) $(\\sqrt{5} + \\sqrt{3})^2 - 2\\sqrt{15}$.<br/>2. Rút gọn: $\\sqrt{5(x^2 - y^2)} \\cdot \\sqrt{\\dfrac{2}{x + y}}$ ($x \\ge y > 0$).",
                    "points": 2.5,
                    "correctAnswer": "Xem hướng dẫn chấm chi tiết",
                    "explanation": "1. a) 24; b) 24; c) 8.<br/>2. $\\sqrt{10(x - y)}$."
                },
                {
                    "id": "t9_de02_q8",
                    "part": 2,
                    "number": 8,
                    "displayNumber": 8,
                    "type": "essay",
                    "text": "<b>Bài 2 (1,5 điểm).</b> Giải hệ phương trình: $\\begin{cases} 2x - 3y = 1 \\\\ 3x + 2y = 8 \\end{cases}$",
                    "points": 1.5,
                    "correctAnswer": "(x; y) = (2; 1)",
                    "explanation": "Nghiệm duy nhất $(x; y) = (2; 1)$."
                },
                {
                    "id": "t9_de02_q9",
                    "part": 2,
                    "number": 9,
                    "displayNumber": 9,
                    "type": "essay",
                    "text": "<b>Bài 3 (1,5 điểm).</b> Giải phương trình: $\\dfrac{x + 4}{x - 4} - \\dfrac{x - 4}{x + 4} = \\dfrac{48}{x^2 - 16}$",
                    "points": 1.5,
                    "correctAnswer": "S = {3}",
                    "explanation": "ĐKXĐ: $x \\ne \\pm 4$. Phương trình có nghiệm $x = 3$. Vậy $S = \\{3\\}$."
                },
                {
                    "id": "t9_de02_q10",
                    "part": 2,
                    "number": 10,
                    "displayNumber": 10,
                    "type": "essay",
                    "text": "<b>Bài 4 (1,5 điểm).</b> Hai đội công nhân cùng tham gia sửa một đoạn đường thì sau $15$ ngày sẽ hoàn thành. Nếu đội thứ nhất làm một mình trong $6$ ngày rồi nghỉ, sau đó đội thứ hai làm tiếp một mình trong $5$ ngày thì cả hai đội hoàn thành được $\\dfrac{7}{20}$ khối lượng công việc. Hỏi nếu làm một mình thì mỗi đội cần bao nhiêu ngày để hoàn thành toàn bộ công việc đó?",
                    "points": 1.5,
                    "correctAnswer": "Đội I: 60 ngày, Đội II: 20 ngày",
                    "explanation": "Đội I làm một mình mất 60 ngày, Đội II làm một mình mất 20 ngày."
                }
            ]
        }
    },

    # ĐỀ 01 - TOÁN 7 (CHO KHỐI 7 CỦA THẦY THỌ)
    {
        "title": "Đề Kiểm Tra Định Kỳ Môn Toán 7 — Số Hữu Tỉ & Hình Học Trực Quan (Đề số 01)",
        "data": {
            "grade": 7,
            "title": "Đề Kiểm Tra Định Kỳ Môn Toán 7 — Số Hữu Tỉ & Hình Học Trực Quan (Đề số 01)",
            "chapter": "Số Hữu Tỉ & Hình Học",
            "duration": 60,
            "total_questions": 6,
            "questions": [
                {
                    "id": "t7_de01_q1",
                    "part": 1,
                    "number": 1,
                    "displayNumber": 1,
                    "type": "multiple_choice",
                    "text": "Khẳng định nào sau đây là đúng về tập hợp số hữu tỉ $\\mathbb{Q}$?",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$-5 \\notin \\mathbb{Q}$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$\\dfrac{2}{0} \\in \\mathbb{Q}$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$\\dfrac{-3}{4} \\in \\mathbb{Q}$", "isCorrect": True},
                        {"id": "d", "letter": "D", "text": "$\\mathbb{N} \\not\\subset \\mathbb{Q}$", "isCorrect": False}
                    ],
                    "correctAnswer": "C",
                    "points": 0.5,
                    "explanation": "Số hữu tỉ là số viết được dưới dạng phân số $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\ne 0$. Do đó $\\dfrac{-3}{4} \\in \\mathbb{Q}$."
                },
                {
                    "id": "t7_de01_q2",
                    "part": 1,
                    "number": 2,
                    "displayNumber": 2,
                    "type": "multiple_choice",
                    "text": "Số đối của số hữu tỉ $-\\dfrac{5}{7}$ là:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$\\dfrac{5}{7}$", "isCorrect": True},
                        {"id": "b", "letter": "B", "text": "$-\\dfrac{7}{5}$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$\\dfrac{7}{5}$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$-\\dfrac{5}{7}$", "isCorrect": False}
                    ],
                    "correctAnswer": "A",
                    "points": 0.5,
                    "explanation": "Số đối của $-x$ là $x$. Do đó số đối của $-\\dfrac{5}{7}$ là $\\dfrac{5}{7}$."
                },
                {
                    "id": "t7_de01_q3",
                    "part": 1,
                    "number": 3,
                    "displayNumber": 3,
                    "type": "multiple_choice",
                    "text": "Kết quả của phép tính $\\left(-\\dfrac{1}{2}\\right)^3$ bằng:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$-\\dfrac{1}{6}$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$-\\dfrac{1}{8}$", "isCorrect": True},
                        {"id": "c", "letter": "C", "text": "$\\dfrac{1}{8}$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$\\dfrac{1}{6}$", "isCorrect": False}
                    ],
                    "correctAnswer": "B",
                    "points": 0.5,
                    "explanation": "$\\left(-\\dfrac{1}{2}\\right)^3 = \\dfrac{(-1)^3}{2^3} = -\\dfrac{1}{8}$."
                },
                {
                    "id": "t7_de01_q4",
                    "part": 1,
                    "number": 4,
                    "displayNumber": 4,
                    "type": "multiple_choice",
                    "text": "Hình hộp chữ nhật có bao nhiêu đỉnh, bao nhiêu cạnh và bao nhiêu mặt?",
                    "options": [
                        {"id": "a", "letter": "A", "text": "6 đỉnh, 12 cạnh, 8 mặt", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "8 đỉnh, 12 cạnh, 6 mặt", "isCorrect": True},
                        {"id": "c", "letter": "C", "text": "8 đỉnh, 6 cạnh, 12 mặt", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "12 đỉnh, 8 cạnh, 6 mặt", "isCorrect": False}
                    ],
                    "correctAnswer": "B",
                    "points": 0.5,
                    "explanation": "Hình hộp chữ nhật có 8 đỉnh, 12 cạnh và 6 mặt hình chữ nhật."
                },
                {
                    "id": "t7_de01_q5",
                    "part": 1,
                    "number": 5,
                    "displayNumber": 5,
                    "type": "multiple_choice",
                    "text": "Cho góc $\\widehat{xOy} = 70^\\circ$. Góc đối đỉnh với $\\widehat{xOy}$ có số đo bằng:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$110^\\circ$", "isCorrect": False},
                        {"id": "b", "letter": "B", "text": "$70^\\circ$", "isCorrect": True},
                        {"id": "c", "letter": "C", "text": "$35^\\circ$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$140^\\circ$", "isCorrect": False}
                    ],
                    "correctAnswer": "B",
                    "points": 0.5,
                    "explanation": "Hai góc đối đỉnh thì bằng nhau, do đó số đo góc đối đỉnh là $70^\\circ$."
                },
                {
                    "id": "t7_de01_q6",
                    "part": 1,
                    "number": 6,
                    "displayNumber": 6,
                    "type": "multiple_choice",
                    "text": "Một bể cá dạng hình hộp chữ nhật có chiều dài $60\\text{ cm}$, chiều rộng $40\\text{ cm}$ và chiều cao $50\\text{ cm}$. Thể tích của bể cá là:",
                    "options": [
                        {"id": "a", "letter": "A", "text": "$120\\,000\\text{ cm}^3$", "isCorrect": True},
                        {"id": "b", "letter": "B", "text": "$150\\text{ cm}^3$", "isCorrect": False},
                        {"id": "c", "letter": "C", "text": "$12\\,000\\text{ cm}^3$", "isCorrect": False},
                        {"id": "d", "letter": "D", "text": "$240\\,000\\text{ cm}^3$", "isCorrect": False}
                    ],
                    "correctAnswer": "A",
                    "points": 0.5,
                    "explanation": "$V = a \\cdot b \\cdot c = 60 \\cdot 40 \\cdot 50 = 120\\,000\\text{ cm}^3$."
                }
            ]
        }
    }
]

for item in exams_to_sync:
    title = item['title']
    # Kiểm tra xem đề đã có chưa
    encoded_title = urllib.parse.quote(title)
    check_url = f"{SUPABASE_URL}/rest/v1/exams?select=id,title&title=eq.{encoded_title}"
    req_check = urllib.request.Request(check_url, headers=headers)
    try:
        res = urllib.request.urlopen(req_check)
        existing = json.loads(res.read().decode())
        if existing:
            print(f"[-] Đề đã tồn tại, tiến hành cập nhật: {title}")
            exam_id = existing[0]['id']
            update_url = f"{SUPABASE_URL}/rest/v1/exams?id=eq.{exam_id}"
            req_update = urllib.request.Request(update_url, data=json.dumps(item).encode('utf-8'), headers=headers, method='PATCH')
            urllib.request.urlopen(req_update)
            print(f"    --> ĐÃ CẬP NHẬT THÀNH CÔNG: {title}")
        else:
            print(f"[+] Đang đồng bộ đề mới: {title}")
            insert_url = f"{SUPABASE_URL}/rest/v1/exams"
            req_insert = urllib.request.Request(insert_url, data=json.dumps(item).encode('utf-8'), headers=headers, method='POST')
            urllib.request.urlopen(req_insert)
            print(f"    --> ĐÃ ĐỒNG BỘ THÀNH CÔNG: {title}")
    except Exception as e:
        print(f"[!] Lỗi đồng bộ đề '{title}': {e}")

print("\n=== HOÀN TẤT ĐỒNG BỘ TOÀN BỘ ĐỀ THI LÊN SUPABASE ===")

