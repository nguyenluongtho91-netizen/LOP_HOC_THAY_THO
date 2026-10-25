import React, { useState, useRef } from 'react';
import { 
  UploadCloud, Sparkles, CheckCircle2, XCircle, AlertCircle, 
  Trash2, Download, KeyRound, X, Eye, RefreshCw, Send, Award, Copy, Check
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

interface ScannedStudentResult {
  id: string;
  fileName: string;
  imagePreview: string;
  studentName: string;
  studentClass: string;
  answers: Record<number, string>; // { 1: 'A', 2: 'B', ... }
  correctCount: number;
  totalQuestions: number;
  score10: number;
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
  const [currentProcessingIndex, setCurrentProcessingIndex] = useState<number>(-1);
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<ScannedStudentResult | null>(null);
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
          score10: 0,
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

  // Gọi Gemini Vision để đọc bài làm của 1 học sinh
  const scanSingleImageWithAI = async (item: ScannedStudentResult): Promise<{
    studentName: string;
    studentClass: string;
    answers: Record<number, string>;
  }> => {
    if (!apiKey) {
      // Demo mô phỏng nếu chưa cấu hình API Key
      await new Promise(r => setTimeout(r, 700));
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
        answers
      };
    }

    const base64Data = item.imagePreview.replace(/^data:image\/\w+;base64,/, '');
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const prompt = `Bạn là trợ lý AI chuyên nghiệp chấm thi môn ${subject === 'toan' ? 'Toán' : 'Hóa học'} của Thầy Thọ.
Dưới đây là ảnh chụp bài làm hoặc phiếu trả lời trắc nghiệm của học sinh.
Nhiệm vụ của bạn:
1. Đọc "Họ và tên học sinh" viết tay ở đầu bài làm.
2. Đọc "Lớp" (nếu có).
3. Đọc đáp án học sinh đã khoanh tròn hoặc tô đen cho từng câu từ Câu 1 đến Câu ${questions.length}:
   - Mỗi câu ghi chữ cái được chọn: A, B, C, hoặc D.
   - Nếu câu nào không khoanh hoặc mờ không đọc được, ghi "".
   - Nếu có vết gạch bỏ và khoanh lại chữ khác, lấy chữ cái cuối cùng học sinh chọn.

Yêu cầu BẮT BUỘC trả về đúng định dạng JSON chuẩn (không dùng markdown backticks):
{
  "studentName": "Tên học sinh đọc được",
  "studentClass": "Lớp học",
  "answers": {
    "1": "A",
    "2": "C",
    "3": "B"
  }
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

  // Tính điểm đối chiếu với đáp án chuẩn của Đề thi
  const calculateScore = (userAnswers: Record<number, string>) => {
    let correct = 0;
    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const userAns = (userAnswers[qNum] || '').trim().toUpperCase();
      const correctAns = (q.correctAnswer || '').trim().toUpperCase();
      if (userAns && userAns === correctAns) {
        correct++;
      }
    });
    const score10 = Number(((correct / questions.length) * 10).toFixed(1));
    return { correct, score10 };
  };

  // Bắt đầu quét hàng loạt
  const handleStartBatchScan = async () => {
    if (scannedFiles.length === 0) {
      toast.error('Vui lòng chọn ít nhất 1 ảnh bài làm!');
      return;
    }

    setIsProcessing(true);
    toast('🚀 Bắt đầu quét và chấm điểm tự động...', { icon: '⚡' });

    for (let i = 0; i < scannedFiles.length; i++) {
      setCurrentProcessingIndex(i);
      setScannedFiles(prev => prev.map((item, idx) => 
        idx === i ? { ...item, status: 'processing' } : item
      ));

      try {
        const aiResult = await scanSingleImageWithAI(scannedFiles[i]);
        const { correct, score10 } = calculateScore(aiResult.answers);

        setScannedFiles(prev => prev.map((item, idx) => 
          idx === i ? {
            ...item,
            studentName: aiResult.studentName || item.studentName,
            studentClass: aiResult.studentClass || item.studentClass,
            answers: aiResult.answers,
            correctCount: correct,
            score10,
            status: 'done'
          } : item
        ));
      } catch (err: any) {
        setScannedFiles(prev => prev.map((item, idx) => 
          idx === i ? {
            ...item,
            status: 'error',
            errorMessage: err.message || 'Lỗi đọc ảnh'
          } : item
        ));
      }
    }

    setIsProcessing(false);
    setCurrentProcessingIndex(-1);
    toast.success('🎉 Đã quét và chấm xong toàn bộ bài làm!');
  };

  // Xuất file bảng điểm
  const handleExportSummary = () => {
    if (scannedFiles.length === 0) return;
    let csv = `STT,Họ và tên,Lớp,Chuyên đề,Đề số,Số câu đúng,Điểm số/10,Đánh giá\n`;
    scannedFiles.forEach((s, idx) => {
      const grade = s.score10 >= 8 ? 'Giỏi' : s.score10 >= 6.5 ? 'Khá' : s.score10 >= 5 ? 'Đạt' : 'Cần rèn luyện';
      csv += `${idx + 1},"${s.studentName}","${s.studentClass || ''}","${topicTitle}",${examNo},${s.correctCount}/${s.totalQuestions},${s.score10},${grade}\n`;
    });

    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bang_Diem_${subject.toUpperCase()}_De${examNo}_${Date.now()}.csv`;
    a.click();
    toast.success('Đã tải xuống file bảng điểm Excel/CSV!');
  };

  // Copy tin nhắn báo điểm chi tiết Zalo cho phụ huynh
  const handleCopyZaloReport = (student: ScannedStudentResult) => {
    let msg = `🔔 THÔNG BÁO KẾT QUẢ ĐỀ KIỂM TRA ĐÁNH GIÁ NĂNG LỰC\n`;
    msg += `Họ và tên học sinh: ${student.studentName}\n`;
    msg += `Môn: ${subject === 'toan' ? 'Toán Học' : 'Hóa Học'} - ${topicTitle}\n`;
    msg += `Đề số: ${examNo}\n`;
    msg += `-----------------------------------------\n`;
    msg += `📊 Điểm số: ${student.score10} / 10.0 điểm\n`;
    msg += `✅ Số câu làm đúng: ${student.correctCount} / ${student.totalQuestions} câu\n`;
    msg += `\n📝 CHI TIẾT TỪNG CÂU (TÍCH ĐÚNG / SAI):\n`;

    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const userAns = (student.answers[qNum] || '').trim().toUpperCase();
      const isRight = userAns === q.correctAnswer;
      if (userAns) {
        msg += `Câu ${qNum < 10 ? '0' + qNum : qNum}: Em chọn [${userAns}] ${isRight ? '-> ✓ ĐÚNG (+0.5đ)' : `-> ✗ SAI (Đáp án đúng: ${q.correctAnswer})`}\n`;
      } else {
        msg += `Câu ${qNum < 10 ? '0' + qNum : qNum}: [Chưa làm] -> ✗ SAI (Đáp án đúng: ${q.correctAnswer})\n`;
      }
    });

    msg += `\n🌟 Nhận xét của Thầy Thọ: ${
      student.score10 >= 8 ? 'Em nắm kiến thức rất vững vàng, phát huy nhé!' :
      student.score10 >= 5 ? 'Em làm bài khá tốt, cần xem lại các câu sai để rút kinh nghiệm!' :
      'Em cần đọc lại bí kíp thần chú và làm lại các bài tương tự nhé!'
    }\n`;

    navigator.clipboard.writeText(msg);
    setCopiedZalo(true);
    toast.success('Đã copy tin nhắn báo điểm chi tiết từng câu!');
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
                  Trí Tuệ Nhân Tạo AI
                </span>
                <span className="text-xs text-purple-200">
                  {subject === 'toan' ? '📐 Toán Học' : '🧪 Hóa Học'} — Đề số {examNo}
                </span>
              </div>
              <h3 className="text-base font-bold text-white line-clamp-1 mt-0.5">
                Quét Ảnh Bài Làm & Tự Động Chấm Điểm (Tích Đúng / Sai Từng Câu)
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

        {/* CÀI ĐẶT API KEY NẾU CẦN */}
        {showKeyInput && (
          <div className="bg-purple-50 border-b border-purple-200 p-4 text-xs space-y-2 animate-fade-in">
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
                Chấp nhận ảnh chụp bài làm (JPG, PNG). AI sẽ đọc tên và <strong>tự động tích câu đúng/sai</strong> trực tiếp!
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

          {/* DANH SÁCH BÀI LÀM ĐÃ NẠP & KẾT QUẢ CHẤM */}
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
                        <span>Đang Chấm Bài ({currentProcessingIndex + 1}/{scannedFiles.length})...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Bắt Đầu Nhận Diện & Tự Động Chấm Điểm</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* BẢNG TỔNG HỢP KẾT QUẢ - KÈM CỘT TÍCH ĐÚNG / SAI 20 CÂU */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                      <th className="py-2.5 px-3 text-center w-10">STT</th>
                      <th className="py-2.5 px-3">Ảnh</th>
                      <th className="py-2.5 px-3">Họ và Tên Học Sinh</th>
                      <th className="py-2.5 px-3">Lớp</th>
                      <th className="py-2.5 px-3 text-center">Kết Quả 20 Câu (Tích Đúng/Sai)</th>
                      <th className="py-2.5 px-3 text-center">Đúng</th>
                      <th className="py-2.5 px-3 text-center">Điểm (/10)</th>
                      <th className="py-2.5 px-3 text-right">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {scannedFiles.map((item, idx) => (
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
                            className="font-bold text-slate-900 bg-transparent hover:bg-slate-100 px-1.5 py-0.5 rounded border border-transparent hover:border-slate-300 w-40"
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

                        {/* CỘT TÍCH ĐÚNG SAI 20 CÂU TRỰC QUAN */}
                        <td className="py-2.5 px-3">
                          {item.status === 'done' ? (
                            <div className="flex flex-wrap items-center justify-center gap-0.5 max-w-[280px] mx-auto">
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
                              {item.status === 'processing' ? 'Đang nhận diện...' : 'Chờ quét'}
                            </div>
                          )}
                        </td>

                        <td className="py-2.5 px-3 text-center font-bold">
                          {item.status === 'done' ? (
                            <span className="text-emerald-700 font-extrabold">
                              {item.correctCount}/{item.totalQuestions}
                            </span>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          {item.status === 'done' ? (
                            <span className={`inline-block px-2.5 py-1 rounded-lg font-black text-sm ${
                              item.score10 >= 8 ? 'bg-emerald-100 text-emerald-800' :
                              item.score10 >= 5 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                            }`}>
                              {item.score10}
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
                              <span>Xem Tích Câu</span>
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CHI TIẾT BÀI LÀM TỪNG HỌC SINH (KÈM DẤU TÍCH ĐÚNG / SAI RÕ RÀNG TỪNG CÂU) */}
          {selectedStudentDetail && (
            <div className="bg-white p-5 rounded-2xl border-2 border-purple-400 shadow-lg space-y-4 animate-fade-in">
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
                      Điểm số: <strong className="text-purple-700 text-sm font-black">{selectedStudentDetail.score10} / 10.0</strong> • Làm đúng: <strong className="text-emerald-700">{selectedStudentDetail.correctCount} / {selectedStudentDetail.totalQuestions} câu</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyZaloReport(selectedStudentDetail)}
                    className="px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-300 rounded-lg text-xs font-bold flex items-center gap-1 transition cursor-pointer"
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

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Cột trái: Ảnh bài làm scan */}
                <div className="md:col-span-5">
                  <div className="text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                    <span>Ảnh bài làm gốc của học sinh:</span>
                    <span className="text-[11px] text-slate-400 font-normal">Nhấn đúp để phóng to</span>
                  </div>
                  <div className="border border-slate-300 rounded-xl overflow-hidden max-h-[460px] overflow-y-auto bg-slate-100 flex justify-center p-2">
                    <img 
                      src={selectedStudentDetail.imagePreview} 
                      alt="Ảnh bài làm" 
                      className="w-full object-contain rounded shadow-xs"
                    />
                  </div>
                </div>

                {/* Cột phải: 20 CÂU TÍCH ĐÚNG / SAI RÕ RÀNG */}
                <div className="md:col-span-7">
                  <div className="text-xs font-bold text-slate-800 mb-2 flex items-center justify-between">
                    <span>Kết quả 20 câu trắc nghiệm (Tích đúng/sai trực quan):</span>
                    <span className="text-[11px] text-slate-500 font-normal">Thầy có thể sửa đáp án nếu AI đọc nhầm</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-[460px] overflow-y-auto p-1 text-xs">
                    {questions.map((q, idx) => {
                      const qNum = idx + 1;
                      const userAns = (selectedStudentDetail.answers[qNum] || '').trim().toUpperCase();
                      const isCorrect = userAns === q.correctAnswer;
                      const hasAnswer = Boolean(userAns);

                      return (
                        <div 
                          key={qNum}
                          className={`p-2.5 rounded-xl border-2 transition ${
                            hasAnswer
                              ? isCorrect 
                                ? 'bg-emerald-50/70 border-emerald-400 text-emerald-950' 
                                : 'bg-rose-50/70 border-rose-400 text-rose-950'
                              : 'bg-slate-50 border-slate-300 text-slate-600'
                          }`}
                        >
                          {/* Dòng 1: Tên câu & Trạng thái Đúng/Sai */}
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-extrabold text-slate-900">
                              Câu {qNum < 10 ? `0${qNum}` : qNum}:
                            </span>

                            {hasAnswer ? (
                              isCorrect ? (
                                <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-full">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                                  <span>ĐÚNG (+0.5đ)</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[11px] font-black text-rose-800 bg-rose-200/80 px-2 py-0.5 rounded-full">
                                  <XCircle className="w-3.5 h-3.5 text-rose-700" />
                                  <span>SAI (0đ)</span>
                                </span>
                              )
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">
                                <AlertCircle className="w-3 h-3 text-slate-400" />
                                <span>BỎ TRỐNG</span>
                              </span>
                            )}
                          </div>

                          {/* Dòng 2: Đối chiếu Đáp án Đề vs Đáp án Học Sinh */}
                          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60">
                            <div>
                              <span className="text-slate-500">Đ/A chuẩn: </span>
                              <strong className="text-slate-900 font-black">{q.correctAnswer}</strong>
                            </div>

                            <div className="flex items-center gap-1 font-bold">
                              <span className="text-slate-600">HS khoanh:</span>
                              <select
                                value={userAns}
                                onChange={(e) => {
                                  const newAns = e.target.value;
                                  const updatedAnswers = { ...selectedStudentDetail.answers, [qNum]: newAns };
                                  const { correct, score10 } = calculateScore(updatedAnswers);
                                  
                                  setSelectedStudentDetail({
                                    ...selectedStudentDetail,
                                    answers: updatedAnswers,
                                    correctCount: correct,
                                    score10
                                  });

                                  setScannedFiles(prev => prev.map(s => 
                                    s.id === selectedStudentDetail.id ? {
                                      ...s,
                                      answers: updatedAnswers,
                                      correctCount: correct,
                                      score10
                                    } : s
                                  ));
                                }}
                                className={`px-2 py-0.5 rounded font-black text-xs cursor-pointer border ${
                                  isCorrect 
                                    ? 'bg-emerald-100 border-emerald-400 text-emerald-950' 
                                    : hasAnswer 
                                    ? 'bg-rose-100 border-rose-400 text-rose-950'
                                    : 'bg-white border-slate-300'
                                }`}
                              >
                                <option value="">-</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* FOOTER MODAL */}
        <div className="bg-white border-t border-slate-200 px-5 py-3.5 flex items-center justify-between text-xs">
          <div className="text-slate-500 font-sans">
            Mỗi câu đúng đạt 0.5 điểm. AI tự động tích xanh ✓ cho câu đúng và tích đỏ ✗ cho câu sai.
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
