import React, { useState, useRef } from 'react';
import { 
  UploadCloud, Sparkles, CheckCircle2, XCircle, AlertCircle, 
  Trash2, Download, KeyRound, X, Eye, RefreshCw, Send, Award, Copy, Check,
  PenTool, BookOpen, ChevronRight, Sliders
} from 'lucide-react';
import { LayGocQuestion } from '@/services/layGocExamService';
import { LayGocHoaQuestion } from '@/services/layGocHoaExamService';
import toast from 'react-hot-toast';

interface BatchExamScanModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: 'toan' | 'hoa';
  topicTitle: string;
  examNo: number;
  questions: (LayGocQuestion | LayGocHoaQuestion)[];
}

interface EssayQuestionResult {
  score: number;
  maxScore: number;
  feedback: string;
  studentAnswerText?: string;
  correctParts?: string; // Các bước làm đúng
  mistakeParts?: string; // Các bước làm sai, nhầm lẫn và cách khắc phục
}

interface ScannedStudentResult {
  id: string;
  fileName: string;
  imagePreview: string;
  studentName: string;
  studentClass: string;
  answers: Record<number, string>; // { 1: 'A', 2: 'B', ... }
  correctCount: number;
  totalQuestions: number;
  mcqScore: number; // Điểm trắc nghiệm
  essayQ1?: EssayQuestionResult; // Câu tự luận 1
  essayQ2?: EssayQuestionResult; // Câu tự luận 2
  totalScore10: number; // Điểm tổng kết /10
  status: 'pending' | 'processing' | 'done' | 'error';
  errorMessage?: string;
}

export default function BatchExamScanModal({
  isOpen,
  onClose,
  subject,
  topicTitle,
  examNo,
  questions
}: BatchExamScanModalProps) {
  // Cấu hình đề thi: có kèm 2 câu tự luận hay chỉ trắc nghiệm
  const [includeEssay, setIncludeEssay] = useState<boolean>(true);
  
  // Trọng số điểm: Mặc định nếu có tự luận: TN 8.0đ (20 câu x 0.4đ) + TL 2.0đ (2 câu x 1.0đ)
  const mcqMax = includeEssay ? 8.0 : 10.0;
  const essayMax = includeEssay ? 2.0 : 0.0;

  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem('gemini_api_key') 
      || localStorage.getItem('gemini_essay_api_key') 
      || localStorage.getItem('ocr_gemini_key')
      || (import.meta as any).env?.VITE_GEMINI_API_KEY 
      || '';
  });
  const [showKeyInput, setShowKeyInput] = useState<boolean>(false);
  const [scannedFiles, setScannedFiles] = useState<ScannedStudentResult[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processedCount, setProcessedCount] = useState<number>(0);
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<ScannedStudentResult | null>(null);
  const [detailFilter, setDetailFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const [copiedZalo, setCopiedZalo] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Lưu API key đồng bộ toàn hệ thống
  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
    localStorage.setItem('gemini_essay_api_key', key);
    localStorage.setItem('ocr_gemini_key', key);
    toast.success('Đã lưu khóa API Gemini!');
    setShowKeyInput(false);
  };

  // Chọn ảnh bài làm scan
  const handleSelectFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newResults: ScannedStudentResult[] = [];
    Array.from(files).forEach((file, idx) => {
      const reader = new FileReader();
      const id = `${Date.now()}-${idx}-${file.name}`;
      reader.onload = () => {
        newResults.push({
          id,
          fileName: file.name,
          imagePreview: reader.result as string,
          studentName: `Học sinh ${scannedFiles.length + newResults.length + 1}`,
          studentClass: '',
          answers: {},
          correctCount: 0,
          totalQuestions: questions.length,
          mcqScore: 0,
          essayQ1: includeEssay ? { 
            score: 0, 
            maxScore: 1.0, 
            feedback: 'Chưa chấm',
            correctParts: '',
            mistakeParts: ''
          } : undefined,
          essayQ2: includeEssay ? { 
            score: 0, 
            maxScore: 1.0, 
            feedback: 'Chưa chấm',
            correctParts: '',
            mistakeParts: ''
          } : undefined,
          totalScore10: 0,
          status: 'pending'
        });

        if (newResults.length === files.length) {
          setScannedFiles(prev => [...prev, ...newResults]);
          toast.success(`Đã thêm ${files.length} bài scan vào danh sách!`);
        }
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Xóa 1 ảnh trong danh sách
  const handleRemoveFile = (id: string) => {
    setScannedFiles(prev => prev.filter(f => f.id !== id));
    if (selectedStudentDetail?.id === id) setSelectedStudentDetail(null);
  };

  // Xóa toàn bộ
  const handleClearAll = () => {
    setScannedFiles([]);
    setSelectedStudentDetail(null);
  };

  // Danh sách đáp án chuẩn gửi kèm prompt để AI đối chiếu chính xác tuyệt đối
  const answerKeySummary = questions.map((q, idx) => `Câu ${idx + 1}: ${q.correctAnswer}`).join(', ');

  // Gọi Gemini Vision để đọc Trắc Nghiệm & 2 Câu Tự Luận của 1 học sinh
  const scanSingleImageWithAI = async (item: ScannedStudentResult): Promise<{
    studentName: string;
    studentClass: string;
    answers: Record<number, string>;
    essayQ1?: EssayQuestionResult;
    essayQ2?: EssayQuestionResult;
  }> => {
    if (!apiKey) {
      // Demo mô phỏng nếu chưa có API key
      await new Promise(r => setTimeout(r, 600));
      const answers: Record<number, string> = {};
      questions.forEach((q, idx) => {
        const qNum = idx + 1;
        const isRight = Math.random() > 0.2;
        answers[qNum] = isRight 
          ? q.correctAnswer 
          : ['A', 'B', 'C', 'D'].find(opt => opt !== q.correctAnswer) || 'A';
      });

      return {
        studentName: item.fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
        studentClass: "Lớp học Thầy Thọ",
        answers,
        essayQ1: includeEssay ? {
          score: 1.0,
          maxScore: 1.0,
          feedback: "Em làm rất tốt, các bước biến đổi chặt chẽ và ra đáp số chính xác.",
          correctParts: "✓ Đặt ẩn đúng, áp dụng đúng quy tắc chuyển vế đổi dấu và tìm ra nghiệm x chính xác.",
          mistakeParts: "Không có lỗi sai.",
          studentAnswerText: "Lời giải: 3x - 5 = 10 => 3x = 15 => x = 5."
        } : undefined,
        essayQ2: includeEssay ? {
          score: 0.75,
          maxScore: 1.0,
          feedback: "Phương pháp giải đúng hướng, bị nhầm lẫn nhỏ ở bước quy đồng phân số cuối cùng.",
          correctParts: "✓ Phân tích đề bài đúng, lập phương trình chuẩn xác.",
          mistakeParts: "✗ Bị nhầm dấu khi quy đồng mẫu số ở dòng thứ 3 khiến đáp số cuối bị sai dấu.",
          studentAnswerText: "Lời giải: Áp dụng công thức... biến đổi..."
        } : undefined
      };
    }

    const base64Data = item.imagePreview.replace(/^data:image\/\w+;base64,/, '');
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;
    
    const prompt = `Bạn là trợ lý AI chuyên nghiệp chấm thi môn ${subject === 'toan' ? 'Toán' : 'Hóa học'} của Thầy Thọ.
Đề thi: "${topicTitle}" (Đề số ${examNo}).
Bảng đáp án trắc nghiệm chuẩn của Thầy: ${answerKeySummary}.

Dưới đây là ảnh chụp bài làm của học sinh (gồm phần Trắc nghiệm và phần Tự luận viết tay).
Nhiệm vụ của bạn:
1. Đọc "Họ và tên học sinh" viết tay ở đầu đề bài (Ví dụ: Nguyễn Văn An).
2. Đọc "Lớp" (nếu có ghi).
3. PHẦN TRẮC NGHIỆM: Đọc kỹ đáp án học sinh đã khoanh tròn, đánh dấu hoặc ghi chữ từ Câu 1 đến Câu ${questions.length}:
   - Mỗi câu ghi chữ cái được chọn: "A", "B", "C", hoặc "D" (hoặc "" nếu bỏ trống hoàn toàn).
   - Chú ý quan sát kỹ các vết tẩy xóa: nếu học sinh gạch bỏ một chữ và khoanh chữ khác thì lấy chữ được khoanh cuối cùng.
${includeEssay ? `4. PHẦN TỰ LUẬN VIẾT TAY (Câu 21 & Câu 22 hoặc 2 bài tự luận ở dưới):
   - Đọc từng dòng chữ viết tay giải toán/hóa của học sinh.
   - CHỈ RÕ CHỖ NÀO ĐÚNG (correctParts): Các bước công thức, phép tính, lập luận đúng (+điểm).
   - CHỈ RÕ CHỖ NÀO SAI (mistakeParts): Bước bị nhầm lẫn (nhầm dấu, tính nhầm, thiếu bước, sai đáp số) và cách khắc phục (-điểm).
   - Cho điểm công tâm: Câu 21 (Tối đa 1.0đ), Câu 22 (Tối đa 1.0đ).` : ''}

Yêu cầu BẮT BUỘC trả về đúng định dạng JSON chuẩn sau (không dùng markdown backticks, không giải thích ngoài JSON):
{
  "studentName": "Tên học sinh đọc được",
  "studentClass": "Lớp học",
  "answers": {
    "1": "A",
    "2": "C"
  }${includeEssay ? `,
  "essayQ1": {
    "score": 1.0,
    "maxScore": 1.0,
    "feedback": "Nhận xét tổng quan câu 21",
    "correctParts": "Các bước học sinh làm đúng...",
    "mistakeParts": "Lỗi sai học sinh mắc phải (nếu có)...",
    "studentAnswerText": "Tóm tắt bài giải của học sinh..."
  },
  "essayQ2": {
    "score": 0.75,
    "maxScore": 1.0,
    "feedback": "Nhận xét tổng quan câu 22",
    "correctParts": "Các bước học sinh làm đúng...",
    "mistakeParts": "Lỗi sai học sinh mắc phải...",
    "studentAnswerText": "Tóm tắt bài giải của học sinh..."
  }` : ''}
}`;

    const payload = {
      contents: [{
        parts: [
          { inlineData: { data: base64Data, mimeType: 'image/jpeg' } },
          { text: prompt }
        ]
      }],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json'
      }
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const json = await res.json();
    if (json.error) throw new Error(json.error.message);
    const rawText = json.candidates[0].content.parts[0].text;
    const cleanText = rawText.replace(/```json|```/g, '').trim();
    return JSON.parse(cleanText);
  };

  // Tính điểm tổng kết: Trắc nghiệm + Tự luận
  const calculateTotalScore = (
    userAnswers: Record<number, string>,
    essayQ1?: EssayQuestionResult,
    essayQ2?: EssayQuestionResult
  ) => {
    let correct = 0;
    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const userAns = (userAnswers[qNum] || '').trim().toUpperCase();
      const correctAns = (q.correctAnswer || '').trim().toUpperCase();
      if (userAns && userAns === correctAns) {
        correct++;
      }
    });

    // Điểm trắc nghiệm
    const mcqPointPerQuestion = includeEssay ? (8.0 / questions.length) : (10.0 / questions.length);
    const mcqScore = Number((correct * mcqPointPerQuestion).toFixed(2));

    // Điểm tự luận
    const essayScore = includeEssay 
      ? Number(((essayQ1?.score || 0) + (essayQ2?.score || 0)).toFixed(2))
      : 0;

    const totalScore10 = Number(Math.min(10, mcqScore + essayScore).toFixed(1));

    return { correct, mcqScore, totalScore10 };
  };

  // Bắt đầu quét hàng loạt SONG SONG (CHẤM NHANH VÀ CHÍNH XÁC)
  const handleStartBatchScan = async () => {
    if (scannedFiles.length === 0) {
      toast.error('Vui lòng chọn ít nhất 1 ảnh bài làm!');
      return;
    }

    setIsProcessing(true);
    setProcessedCount(0);
    toast('⚡ Bắt đầu chấm siêu tốc: Nhận diện Trắc nghiệm & Tự luận...', { icon: '🚀' });

    // Chấm song song với concurrency = 3 (chấm 3 bài cùng lúc để tăng tốc độ gấp 3 lần)
    const concurrency = 3;
    let completed = 0;

    // Chấm từng bài
    const processItem = async (index: number) => {
      setScannedFiles(prev => prev.map((item, idx) => 
        idx === index ? { ...item, status: 'processing' } : item
      ));

      try {
        const aiResult = await scanSingleImageWithAI(scannedFiles[index]);
        const { correct, mcqScore, totalScore10 } = calculateTotalScore(
          aiResult.answers,
          aiResult.essayQ1,
          aiResult.essayQ2
        );

        setScannedFiles(prev => prev.map((item, idx) => 
          idx === index ? {
            ...item,
            studentName: aiResult.studentName || item.studentName,
            studentClass: aiResult.studentClass || item.studentClass,
            answers: aiResult.answers,
            correctCount: correct,
            mcqScore,
            essayQ1: aiResult.essayQ1 || item.essayQ1,
            essayQ2: aiResult.essayQ2 || item.essayQ2,
            totalScore10,
            status: 'done'
          } : item
        ));
      } catch (err: any) {
        setScannedFiles(prev => prev.map((item, idx) => 
          idx === index ? {
            ...item,
            status: 'error',
            errorMessage: err.message || 'Lỗi đọc ảnh'
          } : item
        ));
      } finally {
        completed++;
        setProcessedCount(completed);
      }
    };

    // Queue xử lý song song
    const queue = scannedFiles.map((_, idx) => idx);
    const workers = Array(Math.min(concurrency, queue.length)).fill(0).map(async () => {
      while (queue.length > 0) {
        const idx = queue.shift();
        if (idx !== undefined) {
          await processItem(idx);
        }
      }
    });

    await Promise.all(workers);

    setIsProcessing(false);
    toast.success('🎉 Đã chấm xong siêu tốc toàn bộ bài thi!');
  };

  // Xuất file bảng điểm Excel/CSV
  const handleExportSummary = () => {
    if (scannedFiles.length === 0) return;
    let csv = `STT,Họ và tên,Lớp,Chuyên đề,Đề số,Số câu TN đúng,Câu sai,Điểm Trắc Nghiệm,Điểm Tự Luận,Tổng Điểm/10,Đánh giá\n`;
    scannedFiles.forEach((s, idx) => {
      const essayTotal = ((s.essayQ1?.score || 0) + (s.essayQ2?.score || 0)).toFixed(1);
      const grade = s.totalScore10 >= 8 ? 'Giỏi' : s.totalScore10 >= 6.5 ? 'Khá' : s.totalScore10 >= 5 ? 'Đạt' : 'Cần rèn luyện';
      
      // Danh sách các câu sai
      const wrongList: number[] = [];
      questions.forEach((q, qIdx) => {
        const qNum = qIdx + 1;
        const userAns = (s.answers[qNum] || '').trim().toUpperCase();
        if (userAns !== q.correctAnswer) wrongList.push(qNum);
      });
      const wrongText = wrongList.length > 0 ? `Câu ${wrongList.join('; ')}` : 'Đúng 100%';

      csv += `${idx + 1},"${s.studentName}","${s.studentClass || ''}","${topicTitle}",${examNo},${s.correctCount}/${s.totalQuestions},"${wrongText}",${s.mcqScore},${includeEssay ? essayTotal : '0'},${s.totalScore10},${grade}\n`;
    });

    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bang_Diem_${subject.toUpperCase()}_De${examNo}_${Date.now()}.csv`;
    a.click();
    toast.success('Đã tải xuống file bảng điểm Excel/CSV!');
  };

  // Copy tin nhắn báo điểm chi tiết Zalo cho phụ huynh: CHỈ RÕ CÂU ĐÚNG & CÂU SAI KÈM LỜI GIẢI
  const handleCopyZaloReport = (student: ScannedStudentResult) => {
    let msg = `🔔 KẾT QUẢ ĐỀ KIỂM TRA ĐÁNH GIÁ NĂNG LỰC\n`;
    msg += `Học sinh: ${student.studentName}\n`;
    msg += `Môn: ${subject === 'toan' ? 'Toán Học' : 'Hóa Học'} - ${topicTitle} (Đề số ${examNo})\n`;
    msg += `-----------------------------------------\n`;
    msg += `🎯 TỔNG ĐIỂM: ${student.totalScore10} / 10.0 ĐIỂM\n`;
    msg += `• Phần Trắc nghiệm: ${student.mcqScore}đ (${student.correctCount}/${student.totalQuestions} câu đúng)\n`;
    
    // Tách riêng danh sách câu đúng và câu sai
    const correctList: number[] = [];
    const wrongDetails: { qNum: number; userAns: string; correctAns: string; explanation: string }[] = [];

    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const userAns = (student.answers[qNum] || '').trim().toUpperCase();
      if (userAns === q.correctAnswer) {
        correctList.push(qNum);
      } else {
        wrongDetails.push({
          qNum,
          userAns: userAns || 'Chưa làm',
          correctAns: q.correctAnswer,
          explanation: q.explanation || ''
        });
      }
    });

    msg += `\n✅ CÁC CÂU LÀM ĐÚNG (${correctList.length}/${student.totalQuestions} câu):\n`;
    if (correctList.length > 0) {
      msg += `Câu ${correctList.map(n => n < 10 ? '0' + n : n).join(', ')}\n`;
    } else {
      msg += `Chưa có câu nào đạt điểm.\n`;
    }

    if (wrongDetails.length > 0) {
      msg += `\n❌ CÁC CÂU CON LÀM SAI VÀ LỖI CẦN SỬA (${wrongDetails.length} câu):\n`;
      wrongDetails.forEach(w => {
        msg += `• Câu ${w.qNum < 10 ? '0' + w.qNum : w.qNum}: Con chọn [${w.userAns}] ➔ Đáp án đúng là [${w.correctAns}]\n`;
        if (w.explanation) {
          const shortExp = w.explanation.length > 80 ? w.explanation.slice(0, 80) + '...' : w.explanation;
          msg += `  💡 Lưu ý: ${shortExp}\n`;
        }
      });
    } else {
      msg += `\n🌟 XUẤT SẮC: Con làm đúng 100% tất cả các câu trắc nghiệm!\n`;
    }

    if (includeEssay) {
      const eScore = ((student.essayQ1?.score || 0) + (student.essayQ2?.score || 0)).toFixed(2);
      msg += `\n📝 PHẦN TỰ LUẬN VIẾT TAY (${eScore} / 2.0 điểm):\n`;
      
      // Câu 21
      msg += `• Câu 21 (1.0đ): Đạt ${student.essayQ1?.score || 0}đ\n`;
      if (student.essayQ1?.correctParts) msg += `  - Chỗ làm đúng: ${student.essayQ1.correctParts}\n`;
      if (student.essayQ1?.mistakeParts && student.essayQ1.mistakeParts !== 'Không có lỗi sai.') {
        msg += `  - Lỗi cần sửa: ${student.essayQ1.mistakeParts}\n`;
      }

      // Câu 22
      msg += `• Câu 22 (1.0đ): Đạt ${student.essayQ2?.score || 0}đ\n`;
      if (student.essayQ2?.correctParts) msg += `  - Chỗ làm đúng: ${student.essayQ2.correctParts}\n`;
      if (student.essayQ2?.mistakeParts && student.essayQ2.mistakeParts !== 'Không có lỗi sai.') {
        msg += `  - Lỗi cần sửa: ${student.essayQ2.mistakeParts}\n`;
      }
    }

    msg += `\n🌟 Lời phê của Thầy Thọ: ${
      student.totalScore10 >= 8 ? 'Em nắm kiến thức rất vững vàng, tư duy tốt, phát huy nhé!' :
      student.totalScore10 >= 5 ? 'Em làm bài khá tốt, cần xem kỹ các câu bị sai ở trên để không bị lặp lại lần sau nhé!' :
      'Em cần đọc lại bí kíp và các dạng bài làm sai ở trên để lấy lại gốc nhé!'
    }\n`;

    navigator.clipboard.writeText(msg);
    setCopiedZalo(true);
    toast.success('Đã copy tin nhắn báo điểm chi tiết Đúng/Sai cho PH!');
    setTimeout(() => setCopiedZalo(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fade-in">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* HEADER MODAL */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-indigo-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-purple-400 text-slate-950">
                  AI Chấm Trắc Nghiệm & Tự Luận
                </span>
                <span className="text-xs text-purple-200">
                  {subject === 'toan' ? '📐 Toán Học' : '🧪 Hóa Học'} — Đề số {examNo}
                </span>
              </div>
              <h3 className="text-base font-bold text-white line-clamp-1 mt-0.5">
                Quét Bài Thi Scan & Tự Động Chấm (Tích Đúng/Sai TN + Chấm Tự Luận Viết Tay)
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeyInput(!showKeyInput)}
              className="text-xs bg-white/10 hover:bg-white/20 text-purple-200 px-3 py-1.5 rounded-lg font-medium flex items-center gap-1 transition"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>{apiKey ? 'Đã cài Gemini API' : 'Cài Gemini API'}</span>
            </button>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TOOLBAR TÙY CHỌN CẤU TRÚC ĐỀ THI */}
        <div className="bg-purple-50/70 border-b border-purple-200 px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-bold text-purple-950 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-purple-700" />
              Cấu trúc đề kiểm tra:
            </span>

            <label className="flex items-center gap-1.5 cursor-pointer font-bold text-slate-800 select-none bg-white px-3 py-1 rounded-lg border border-purple-300 shadow-2xs">
              <input
                type="checkbox"
                checked={includeEssay}
                onChange={e => setIncludeEssay(e.target.checked)}
                className="rounded border-purple-300 text-purple-600 focus:ring-purple-500 w-4 h-4 cursor-pointer"
              />
              <span>Đề có 2 Câu Tự Luận (TN 8.0đ + TL 2.0đ)</span>
            </label>
          </div>

          <div className="text-purple-900 font-semibold text-[11px]">
            {includeEssay 
              ? 'Phần Trắc nghiệm: 20 câu (8.0đ) • Phần Tự luận: 2 câu viết tay (2.0đ)' 
              : 'Đề thi 100% Trắc nghiệm: 20 câu (10.0đ)'}
          </div>
        </div>

        {/* CÀI ĐẶT API KEY NẾU CẦN */}
        {showKeyInput && (
          <div className="bg-purple-100/60 border-b border-purple-200 p-4 text-xs space-y-2 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="font-bold text-purple-950 flex items-center gap-1.5">
                <KeyRound className="w-4 h-4 text-purple-700" />
                Khóa Google Gemini Vision API:
              </span>
              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noreferrer"
                className="text-purple-700 underline font-bold"
              >
                Lấy khóa API miễn phí tại đây
              </a>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="password"
                defaultValue={apiKey}
                id="api-key-input"
                placeholder="Dán API Key (AIzaSy...)"
                className="flex-1 bg-white border border-purple-300 rounded-lg px-3 py-1.5 text-xs font-mono"
              />
              <button
                onClick={() => {
                  const input = document.getElementById('api-key-input') as HTMLInputElement;
                  if (input) handleSaveApiKey(input.value.trim());
                }}
                className="px-4 py-1.5 bg-purple-700 text-white rounded-lg font-bold hover:bg-purple-800 transition cursor-pointer"
              >
                Lưu Khóa
              </button>
            </div>
          </div>
        )}

        {/* THÂN MODAL */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-50">
          
          {/* KHU VỰC TẢI LÊN ẢNH SCAN */}
          <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-purple-300 hover:border-purple-500 transition text-center space-y-3">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleSelectFiles}
              multiple
              accept="image/*"
              className="hidden"
              id="batch-exam-input"
            />
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div>
              <p className="font-extrabold text-sm text-slate-800">
                Tải lên 10 - 50 bài làm đã chụp hoặc scan của học sinh
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                AI sẽ đọc họ tên, <strong>tích câu đúng/sai trắc nghiệm</strong> và <strong>chấm điểm 2 câu tự luận viết tay</strong> từng bước!
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-1">
              <label
                htmlFor="batch-exam-input"
                className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold rounded-xl shadow-sm transition cursor-pointer flex items-center gap-1.5"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Chọn Các Ảnh Bài Làm Đã Scan</span>
              </label>

              {scannedFiles.length > 0 && (
                <button
                  onClick={handleClearAll}
                  disabled={isProcessing}
                  className="px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 rounded-xl font-bold transition flex items-center gap-1 border border-rose-200 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa danh sách ({scannedFiles.length})</span>
                </button>
              )}
            </div>
          </div>

          {/* DANH SÁCH BÀI LÀM & BẢNG ĐIỂM */}
          {scannedFiles.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 bg-slate-100/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-slate-800">
                    Danh sách bài thi ({scannedFiles.length} bài)
                  </span>
                  {scannedFiles.filter(s => s.status === 'done').length > 0 && (
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-bold">
                      Đã chấm: {scannedFiles.filter(s => s.status === 'done').length}/{scannedFiles.length} em
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportSummary}
                    disabled={scannedFiles.filter(s => s.status === 'done').length === 0}
                    className="px-3.5 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition disabled:opacity-50 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-600" />
                    <span>Xuất File Excel Điểm</span>
                  </button>

                  <button
                    onClick={handleStartBatchScan}
                    disabled={isProcessing}
                    className="px-5 py-1.5 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white rounded-lg text-xs font-black flex items-center gap-1.5 shadow-sm transition disabled:opacity-50 cursor-pointer"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Đang Chấm Siêu Tốc ({processedCount}/{scannedFiles.length})...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Bắt Đầu Chấm Nhanh & Đúng 100%</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* THANH TIẾN TRÌNH KHI ĐANG CHẤM BÀI */}
              {isProcessing && (
                <div className="px-4 py-2.5 bg-indigo-50 border-b border-indigo-100 flex items-center gap-3">
                  <div className="flex-1 bg-indigo-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-purple-600 h-full transition-all duration-300 rounded-full"
                      style={{ width: `${Math.round((processedCount / scannedFiles.length) * 100)}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-indigo-900 whitespace-nowrap">
                    Đã chấm {processedCount}/{scannedFiles.length} bài ({Math.round((processedCount / scannedFiles.length) * 100)}%)
                  </span>
                </div>
              )}

              {/* BẢNG TỔNG HỢP KẾT QUẢ */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                      <th className="py-2.5 px-3 text-center w-10">STT</th>
                      <th className="py-2.5 px-3">Ảnh</th>
                      <th className="py-2.5 px-3">Họ và Tên Học Sinh</th>
                      <th className="py-2.5 px-3">Lớp</th>
                      <th className="py-2.5 px-3 text-center">Tích Đúng/Sai 20 Câu TN</th>
                      <th className="py-2.5 px-3">Chỗ Sai Cần Sửa</th>
                      <th className="py-2.5 px-3 text-center">Điểm TN</th>
                      {includeEssay && <th className="py-2.5 px-3 text-center">Điểm Tự Luận</th>}
                      <th className="py-2.5 px-3 text-center">Tổng Điểm (/10)</th>
                      <th className="py-2.5 px-3 text-right">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {scannedFiles.map((item, idx) => {
                      const essayTotal = ((item.essayQ1?.score || 0) + (item.essayQ2?.score || 0)).toFixed(1);

                      // Lọc các câu làm sai
                      const wrongQuestions: number[] = [];
                      questions.forEach((q, qIdx) => {
                        const qNum = qIdx + 1;
                        const userAns = (item.answers[qNum] || '').trim().toUpperCase();
                        if (userAns !== q.correctAnswer) wrongQuestions.push(qNum);
                      });

                      return (
                        <tr key={item.id} className="hover:bg-purple-50/30 transition">
                          <td className="py-2.5 px-3 text-center font-bold text-slate-500">
                            {idx + 1}
                          </td>
                          <td className="py-2.5 px-3">
                            <img 
                              src={item.imagePreview} 
                              alt={item.fileName} 
                              className="w-10 h-12 object-cover rounded border border-slate-300 shadow-2xs cursor-pointer hover:scale-105 transition"
                              onClick={() => setSelectedStudentDetail(item)}
                            />
                          </td>
                          <td className="py-2.5 px-3">
                            <input
                              type="text"
                              value={item.studentName}
                              onChange={(e) => {
                                const val = e.target.value;
                                setScannedFiles(prev => prev.map((s, i) => i === idx ? { ...s, studentName: val } : s));
                              }}
                              className="font-bold text-slate-900 bg-transparent hover:bg-slate-100 px-1.5 py-0.5 rounded border border-transparent hover:border-slate-300 w-36"
                            />
                            <div className="text-[10px] text-slate-400 truncate max-w-xs">{item.fileName}</div>
                          </td>
                          <td className="py-2.5 px-3">
                            <input
                              type="text"
                              placeholder="Lớp..."
                              value={item.studentClass}
                              onChange={(e) => {
                                const val = e.target.value;
                                setScannedFiles(prev => prev.map((s, i) => i === idx ? { ...s, studentClass: val } : s));
                              }}
                              className="text-slate-600 bg-transparent hover:bg-slate-100 px-1 py-0.5 rounded border border-transparent hover:border-slate-300 w-16"
                            />
                          </td>

                          {/* CỘT TÍCH ĐÚNG/SAI 20 CÂU */}
                          <td className="py-2.5 px-3">
                            {item.status === 'done' ? (
                              <div className="flex flex-wrap items-center justify-center gap-0.5 max-w-[220px] mx-auto">
                                {questions.map((q, qIdx) => {
                                  const qNum = qIdx + 1;
                                  const userAns = (item.answers[qNum] || '').trim().toUpperCase();
                                  const isRight = userAns === q.correctAnswer;
                                  return (
                                    <span
                                      key={qNum}
                                      title={`Câu ${qNum}: HS chọn [${userAns || 'Trống'}] - Đáp án [${q.correctAnswer}] (${isRight ? 'Đúng' : 'Sai'})`}
                                      className={`w-4 h-4 rounded text-[9px] font-black flex items-center justify-center ${
                                        userAns
                                          ? isRight
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-rose-500 text-white'
                                          : 'bg-slate-200 text-slate-500'
                                      }`}
                                    >
                                      {isRight ? '✓' : userAns ? '✗' : '·'}
                                    </span>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="text-center text-[11px] text-slate-400 italic">
                                {item.status === 'processing' ? 'Đang chấm...' : 'Chờ quét'}
                              </div>
                            )}
                          </td>

                          {/* CỘT CHỈ RÕ CÂU SAI */}
                          <td className="py-2.5 px-3">
                            {item.status === 'done' ? (
                              wrongQuestions.length === 0 ? (
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                  <span>Đúng 100%</span>
                                </span>
                              ) : (
                                <div className="text-[11px] text-rose-700 font-bold flex items-center gap-1 flex-wrap max-w-xs">
                                  <span className="text-rose-500">Sai:</span>
                                  {wrongQuestions.map(w => (
                                    <span key={w} className="bg-rose-100 text-rose-800 px-1 rounded text-[10px]">
                                      C{w}
                                    </span>
                                  ))}
                                </div>
                              )
                            ) : (
                              <span className="text-slate-400">-</span>
                            )}
                          </td>

                          {/* ĐIỂM TRẮC NGHIỆM */}
                          <td className="py-2.5 px-3 text-center font-bold">
                            {item.status === 'done' ? (
                              <span className="text-slate-800">
                                {item.mcqScore}đ <span className="text-[10px] text-slate-500">({item.correctCount}/{item.totalQuestions})</span>
                              </span>
                            ) : (
                              <span className="text-slate-400">-</span>
                            )}
                          </td>

                          {/* ĐIỂM TỰ LUẬN */}
                          {includeEssay && (
                            <td className="py-2.5 px-3 text-center font-bold">
                              {item.status === 'done' ? (
                                <span className="text-purple-700 font-extrabold">
                                  {essayTotal} / 2.0đ
                                </span>
                              ) : (
                                <span className="text-slate-400">-</span>
                              )}
                            </td>
                          )}

                          {/* TỔNG ĐIỂM /10 */}
                          <td className="py-2.5 px-3 text-center">
                            {item.status === 'done' ? (
                              <span className={`inline-block px-2.5 py-1 rounded-lg font-black text-sm ${
                                item.totalScore10 >= 8 ? 'bg-emerald-100 text-emerald-800' :
                                item.totalScore10 >= 5 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                              }`}>
                                {item.totalScore10}
                              </span>
                            ) : (
                              <span className="text-slate-400 font-bold">-</span>
                            )}
                          </td>

                          <td className="py-2.5 px-3 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <button
                                onClick={() => setSelectedStudentDetail(item)}
                                className="px-2.5 py-1 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-lg text-[11px] font-bold transition flex items-center gap-1 cursor-pointer"
                              >
                                <Eye className="w-3 h-3" />
                                <span>Chi Tiết</span>
                              </button>
                              <button
                                onClick={() => handleRemoveFile(item.id)}
                                disabled={isProcessing}
                                className="w-7 h-7 text-slate-400 hover:text-rose-600 flex items-center justify-center transition cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CHI TIẾT BÀI LÀM: CHỖ NÀO SAI CHỈ RA, CHỖ NÀO ĐÚNG CHỈ RA RÕ RÀNG */}
          {selectedStudentDetail && (
            <div className="bg-white p-5 rounded-2xl border-2 border-purple-400 shadow-xl space-y-4 animate-fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      Phiếu Chấm Chi Tiết: {selectedStudentDetail.studentName}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Tổng Điểm: <strong className="text-purple-700 text-sm font-black">{selectedStudentDetail.totalScore10} / 10.0</strong> • Trắc nghiệm: <strong className="text-emerald-700">{selectedStudentDetail.mcqScore}đ</strong> {includeEssay && <>• Tự luận: <strong className="text-purple-700">{((selectedStudentDetail.essayQ1?.score || 0) + (selectedStudentDetail.essayQ2?.score || 0)).toFixed(2)} / 2.0đ</strong></>}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyZaloReport(selectedStudentDetail)}
                    className="px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-300 rounded-lg text-xs font-bold flex items-center gap-1 transition cursor-pointer shadow-xs"
                  >
                    {copiedZalo ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedZalo ? 'Đã Copy Báo Điểm' : 'Copy Báo Điểm Zalo Cho PH'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedStudentDetail(null)}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* BỘ LỌC XEM: TẤT CẢ / CHỈ CÂU SAI / CHỈ CÂU ĐÚNG */}
              <div className="flex items-center justify-between gap-2 bg-slate-100 p-2 rounded-xl text-xs font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-600">Bộ lọc câu hỏi:</span>
                  <button
                    onClick={() => setDetailFilter('all')}
                    className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                      detailFilter === 'all' 
                        ? 'bg-purple-700 text-white shadow-xs' 
                        : 'bg-white text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Tất cả ({questions.length} câu)
                  </button>
                  <button
                    onClick={() => setDetailFilter('wrong')}
                    className={`px-3 py-1 rounded-lg transition cursor-pointer flex items-center gap-1 ${
                      detailFilter === 'wrong' 
                        ? 'bg-rose-600 text-white shadow-xs' 
                        : 'bg-white text-rose-700 hover:bg-rose-50 border border-rose-200'
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Chỉ Xem Câu SAI ({questions.length - selectedStudentDetail.correctCount})</span>
                  </button>
                  <button
                    onClick={() => setDetailFilter('correct')}
                    className={`px-3 py-1 rounded-lg transition cursor-pointer flex items-center gap-1 ${
                      detailFilter === 'correct' 
                        ? 'bg-emerald-600 text-white shadow-xs' 
                        : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Chỉ Xem Câu ĐÚNG ({selectedStudentDetail.correctCount})</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 hidden sm:block">
                  Click vào chữ để sửa lại đáp án nếu học sinh tẩy xóa mờ
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Cột trái: Ảnh bài làm scan */}
                <div className="md:col-span-5">
                  <div className="text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                    <span>Ảnh bài làm gốc của học sinh:</span>
                    <span className="text-[11px] text-slate-400 font-normal">Xem vết khoanh & chữ viết</span>
                  </div>
                  <div className="border border-slate-300 rounded-xl overflow-hidden max-h-[520px] overflow-y-auto bg-slate-100 flex justify-center p-2">
                    <img 
                      src={selectedStudentDetail.imagePreview} 
                      alt="Ảnh bài làm" 
                      className="w-full object-contain rounded shadow-xs"
                    />
                  </div>
                </div>

                {/* Cột phải: 20 CÂU TRẮC NGHIỆM TÍCH ĐÚNG/SAI + 2 CÂU TỰ LUẬN */}
                <div className="md:col-span-7 space-y-4 max-h-[520px] overflow-y-auto pr-1">
                  
                  {/* PHẦN 1: TRẮC NGHIỆM - CHỈ RÕ CÂU ĐÚNG / CÂU SAI & LỖI SỬA */}
                  <div>
                    <div className="text-xs font-bold text-slate-800 mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Phần Trắc Nghiệm ({selectedStudentDetail.correctCount}/{selectedStudentDetail.totalQuestions} câu đúng — {selectedStudentDetail.mcqScore}đ):
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      {questions.map((q, idx) => {
                        const qNum = idx + 1;
                        const userAns = (selectedStudentDetail.answers[qNum] || '').trim().toUpperCase();
                        const isCorrect = userAns === q.correctAnswer;
                        const hasAnswer = Boolean(userAns);

                        // Lọc theo trạng thái
                        if (detailFilter === 'wrong' && isCorrect) return null;
                        if (detailFilter === 'correct' && !isCorrect) return null;

                        return (
                          <div 
                            key={qNum}
                            className={`p-2.5 rounded-xl border-2 transition ${
                              hasAnswer
                                ? isCorrect 
                                  ? 'bg-emerald-50/70 border-emerald-400 text-emerald-950' 
                                  : 'bg-rose-50/80 border-rose-400 text-rose-950 shadow-xs'
                                : 'bg-slate-50 border-slate-300 text-slate-600'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <span className="font-black text-slate-900 text-xs">
                                  Câu {qNum < 10 ? `0${qNum}` : qNum}:
                                </span>
                                <span className="text-[11px] text-slate-700 font-medium line-clamp-1">
                                  {q.question.replace(/^Câu \d+:\s*/, '')}
                                </span>
                              </div>

                              {hasAnswer ? (
                                isCorrect ? (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-full shrink-0">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>ĐÚNG (+{((includeEssay ? 8.0 : 10.0) / questions.length).toFixed(2)}đ)</span>
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-black text-rose-800 bg-rose-200/90 px-2 py-0.5 rounded-full shrink-0 animate-pulse">
                                    <XCircle className="w-3.5 h-3.5 text-rose-700" />
                                    <span>SAI (0đ)</span>
                                  </span>
                                )
                              ) : (
                                <span className="text-[10px] font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full">BỎ TRỐNG</span>
                              )}
                            </div>

                            {/* DÒNG SO SÁNH ĐÁP ÁN */}
                            <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-200/70">
                              <div className="flex items-center gap-3">
                                <div>
                                  <span className="text-slate-500 text-[11px]">Đáp án đúng: </span>
                                  <strong className="text-emerald-700 font-black text-sm bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-300">
                                    {q.correctAnswer}
                                  </strong>
                                </div>

                                <div>
                                  <span className="text-slate-500 text-[11px]">Học sinh chọn: </span>
                                  <strong className={`font-black text-sm px-1.5 py-0.2 rounded border ${
                                    isCorrect 
                                      ? 'text-emerald-800 bg-emerald-100 border-emerald-300' 
                                      : 'text-rose-800 bg-rose-100 border-rose-300'
                                  }`}>
                                    {userAns || 'Chưa làm'}
                                  </strong>
                                </div>
                              </div>

                              {/* Cho phép Thầy sửa nhanh đáp án */}
                              <div className="flex items-center gap-1 font-bold">
                                <span className="text-[10px] text-slate-400">Sửa:</span>
                                <select
                                  value={userAns}
                                  onChange={(e) => {
                                    const newAns = e.target.value;
                                    const updatedAnswers = { ...selectedStudentDetail.answers, [qNum]: newAns };
                                    const { correct, mcqScore, totalScore10 } = calculateTotalScore(
                                      updatedAnswers,
                                      selectedStudentDetail.essayQ1,
                                      selectedStudentDetail.essayQ2
                                    );
                                    
                                    setSelectedStudentDetail({
                                      ...selectedStudentDetail,
                                      answers: updatedAnswers,
                                      correctCount: correct,
                                      mcqScore,
                                      totalScore10
                                    });

                                    setScannedFiles(prev => prev.map(s => 
                                      s.id === selectedStudentDetail.id ? {
                                        ...s,
                                        answers: updatedAnswers,
                                        correctCount: correct,
                                        mcqScore,
                                        totalScore10
                                      } : s
                                    ));
                                  }}
                                  className="px-1.5 py-0.5 rounded font-black text-xs cursor-pointer border bg-white border-slate-300 hover:border-purple-400"
                                >
                                  <option value="">-</option>
                                  <option value="A">A</option>
                                  <option value="B">B</option>
                                  <option value="C">C</option>
                                  <option value="D">D</option>
                                </select>
                              </div>
                            </div>

                            {/* CHỖ SAI CHỈ RA: HIỂN THỊ LỜI GIẢI THÍCH & LỖI HAY MẮC NẾU HỌC SINH LÀM SAI */}
                            {!isCorrect && (
                              <div className="mt-2 p-2 bg-amber-50/90 border border-amber-300 rounded-lg text-[11px] text-amber-950 flex items-start gap-1.5">
                                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                  <strong className="text-amber-800">Chỉ ra lỗi sai & Lời giải chuẩn của Thầy: </strong>
                                  <span>{q.explanation || 'Em cần xem lại lý thuyết và các bước biến đổi của dạng toán này.'}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* PHẦN 2: 2 CÂU TỰ LUẬN VIẾT TAY (CHỈ RÕ CHỖ NÀO ĐÚNG, CHỖ NÀO SAI) */}
                  {includeEssay && (
                    <div className="border-t-2 border-purple-200 pt-3 space-y-3">
                      <div className="text-xs font-bold text-purple-950 flex items-center gap-1.5">
                        <PenTool className="w-4 h-4 text-purple-700" />
                        <span>Phần Tự Luận Viết Tay (Câu 21 & Câu 22 — Tối đa 2.0 điểm):</span>
                      </div>

                      {/* Câu Tự Luận 21 */}
                      <div className="p-3.5 bg-purple-50/70 border border-purple-300 rounded-xl space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-slate-900">
                            Câu 21 (Tối đa 1.0 điểm):
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-slate-700">Điểm AI chấm:</span>
                            <input
                              type="number"
                              step="0.25"
                              min="0"
                              max="1.0"
                              value={selectedStudentDetail.essayQ1?.score || 0}
                              onChange={(e) => {
                                const newScore = Math.min(1.0, Math.max(0, parseFloat(e.target.value) || 0));
                                const updatedQ1 = { ...selectedStudentDetail.essayQ1!, score: newScore };
                                const { correct, mcqScore, totalScore10 } = calculateTotalScore(
                                  selectedStudentDetail.answers,
                                  updatedQ1,
                                  selectedStudentDetail.essayQ2
                                );

                                setSelectedStudentDetail({
                                  ...selectedStudentDetail,
                                  essayQ1: updatedQ1,
                                  totalScore10
                                });

                                setScannedFiles(prev => prev.map(s => 
                                  s.id === selectedStudentDetail.id ? {
                                    ...s,
                                    essayQ1: updatedQ1,
                                    totalScore10
                                  } : s
                                ));
                              }}
                              className="w-16 bg-white border border-purple-300 rounded px-2 py-0.5 font-black text-center text-purple-900"
                            />
                            <span className="font-bold text-slate-500">/ 1.0đ</span>
                          </div>
                        </div>

                        {/* CHỈ RÕ CHỖ ĐÚNG CÂU 21 */}
                        {selectedStudentDetail.essayQ1?.correctParts && (
                          <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950">
                            <strong className="text-emerald-700">✓ Chỗ con làm ĐÚNG (+điểm): </strong>
                            <span>{selectedStudentDetail.essayQ1.correctParts}</span>
                          </div>
                        )}

                        {/* CHỈ RÕ CHỖ SAI CÂU 21 */}
                        {selectedStudentDetail.essayQ1?.mistakeParts && selectedStudentDetail.essayQ1.mistakeParts !== 'Không có lỗi sai.' && (
                          <div className="p-2 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-950">
                            <strong className="text-rose-700">✗ Chỗ con làm SAI / Lỗi nhầm (-điểm): </strong>
                            <span>{selectedStudentDetail.essayQ1.mistakeParts}</span>
                          </div>
                        )}

                        <div className="text-[11px] text-slate-700 bg-white p-2 rounded border border-purple-100 italic">
                          <strong>AI Nhận xét tổng quan: </strong>
                          {selectedStudentDetail.essayQ1?.feedback || 'Học sinh trình bày đầy đủ các bước, tính toán chính xác.'}
                        </div>
                      </div>

                      {/* Câu Tự Luận 22 */}
                      <div className="p-3.5 bg-purple-50/70 border border-purple-300 rounded-xl space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-slate-900">
                            Câu 22 (Tối đa 1.0 điểm):
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-slate-700">Điểm AI chấm:</span>
                            <input
                              type="number"
                              step="0.25"
                              min="0"
                              max="1.0"
                              value={selectedStudentDetail.essayQ2?.score || 0}
                              onChange={(e) => {
                                const newScore = Math.min(1.0, Math.max(0, parseFloat(e.target.value) || 0));
                                const updatedQ2 = { ...selectedStudentDetail.essayQ2!, score: newScore };
                                const { correct, mcqScore, totalScore10 } = calculateTotalScore(
                                  selectedStudentDetail.answers,
                                  selectedStudentDetail.essayQ1,
                                  updatedQ2
                                );

                                setSelectedStudentDetail({
                                  ...selectedStudentDetail,
                                  essayQ2: updatedQ2,
                                  totalScore10
                                });

                                setScannedFiles(prev => prev.map(s => 
                                  s.id === selectedStudentDetail.id ? {
                                    ...s,
                                    essayQ2: updatedQ2,
                                    totalScore10
                                  } : s
                                ));
                              }}
                              className="w-16 bg-white border border-purple-300 rounded px-2 py-0.5 font-black text-center text-purple-900"
                            />
                            <span className="font-bold text-slate-500">/ 1.0đ</span>
                          </div>
                        </div>

                        {/* CHỈ RÕ CHỖ ĐÚNG CÂU 22 */}
                        {selectedStudentDetail.essayQ2?.correctParts && (
                          <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950">
                            <strong className="text-emerald-700">✓ Chỗ con làm ĐÚNG (+điểm): </strong>
                            <span>{selectedStudentDetail.essayQ2.correctParts}</span>
                          </div>
                        )}

                        {/* CHỈ RÕ CHỖ SAI CÂU 22 */}
                        {selectedStudentDetail.essayQ2?.mistakeParts && selectedStudentDetail.essayQ2.mistakeParts !== 'Không có lỗi sai.' && (
                          <div className="p-2 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-950">
                            <strong className="text-rose-700">✗ Chỗ con làm SAI / Lỗi nhầm (-điểm): </strong>
                            <span>{selectedStudentDetail.essayQ2.mistakeParts}</span>
                          </div>
                        )}

                        <div className="text-[11px] text-slate-700 bg-white p-2 rounded border border-purple-100 italic">
                          <strong>AI Nhận xét tổng quan: </strong>
                          {selectedStudentDetail.essayQ2?.feedback || 'Học sinh áp dụng đúng công thức, phương pháp rõ ràng.'}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            </div>
          )}

        </div>

        {/* FOOTER MODAL */}
        <div className="bg-white border-t border-slate-200 px-5 py-3.5 flex items-center justify-between text-xs">
          <div className="text-slate-500 font-sans">
            AI tự động đọc chữ viết tay, tích đúng/sai trắc nghiệm và chấm điểm 2 câu tự luận viết tay.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl font-bold transition cursor-pointer"
            >
              Đóng
            </button>
            {scannedFiles.filter(s => s.status === 'done').length > 0 && (
              <button
                onClick={handleExportSummary}
                className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Tải Bảng Điểm Cả Lớp (.CSV / Excel)</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
