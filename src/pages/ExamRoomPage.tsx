// @ts-nocheck
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import ResultView from '@/components/ResultView' 
import PDFExamRoom from '@/components/PDFExamRoom'
import ExamRoom from '@/components/ExamRoom'
import { shuffleExamForStudent } from '@/services/mergeExamsService'
import { normalizeExamData } from '@/services/examNormalizer'
import toast from 'react-hot-toast'
import { fetchHoa12AccessConfig, isGradeLocked } from '@/services/hoa12AccessControlService'

// ─── Đồng hồ đếm ngược chờ đến giờ mở đề ──────────────────────────────────────
function WaitingScreen({ opensAt, onTimeReached, onExit }: { opensAt: string; onTimeReached: () => void; onExit: () => void }) {
  const targetMs = new Date(opensAt).getTime();
  const [secondsLeft, setSecondsLeft] = useState(() => Math.max(0, Math.floor((targetMs - Date.now()) / 1000)));

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = Math.max(0, Math.floor((targetMs - Date.now()) / 1000));
      setSecondsLeft(diff);
      if (diff <= 0) {
        clearInterval(timer);
        onTimeReached();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetMs, onTimeReached]);

  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-teal-100">
        <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">
          ⏳
        </div>
        <h2 className="text-xl font-black text-gray-800 mb-1">Phòng thi chưa mở</h2>
        <p className="text-xs text-gray-500 mb-6">
          Thời gian mở đề thi: <b className="text-teal-700">{new Date(opensAt).toLocaleString('vi-VN')}</b>
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Tự động vào thi sau</span>
          <div className="text-3xl font-mono font-black text-teal-600 tracking-wider">
            {h > 0 ? `${h}h ` : ''}{m.toString().padStart(2, '0')}:{s.toString().padStart(2, '0')}
          </div>
        </div>

        <button onClick={onExit} className="w-full py-3 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-2xl transition">
          Quay lại cổng thi
        </button>
      </div>
    </div>
  );
}


// ─── Màn hình phòng thi bị khóa bởi Thầy Thọ từ Trang Chủ ─────────────────────
function MasterLockedScreen({ onExit }: { onExit: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 font-sans">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-rose-100 space-y-4 animate-fade-in">
        <div className="w-16 h-16 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-sm">
          🔒
        </div>
        <h2 className="text-xl font-black text-gray-800 tracking-tight">HỆ THỐNG ĐANG TẠM KHÓA</h2>
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-left space-y-2">
          <div className="text-xs font-black text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
            <span>🛡️ CHƯA ĐƯỢC CẤP QUYỀN TỪ TRANG CHỦ</span>
          </div>
          <p className="text-xs text-rose-900 leading-relaxed font-medium">
            Phòng thi này đang ở chế độ bảo vệ. <strong>Chỉ Thầy Thọ mới có quyền cấp quyền truy cập từ Trang Chủ Quản Trị Hệ Thống</strong>.
          </p>
          <p className="text-xs text-slate-700 font-bold">
            👉 Em vui lòng liên hệ Thầy Thọ hoặc đợi Thầy kích hoạt cấp quyền từ Trang chủ nhé!
          </p>
        </div>
        <button onClick={onExit} className="w-full py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-2xl transition shadow-md cursor-pointer">
          Quay lại Cổng Thi
        </button>
      </div>
    </div>
  );
}

// ─── Màn hình phòng thi đã khóa / hết hạn ────────────────────────────────────
function ClosedScreen({ closesAt, onExit }: { closesAt: string; onExit: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-rose-100">
        <div className="w-16 h-16 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">
          🛑
        </div>
        <h2 className="text-xl font-black text-gray-800 mb-1">Phòng thi đã kết thúc</h2>
        <p className="text-xs text-gray-500 mb-6">
          Thời gian nhận bài đã kết thúc lúc: <b className="text-rose-700">{new Date(closesAt).toLocaleString('vi-VN')}</b>
        </p>
        <button onClick={onExit} className="w-full py-3 text-sm font-bold text-white bg-slate-800 hover:bg-slate-900 rounded-2xl transition">
          Về cổng thi
        </button>
      </div>
    </div>
  );
}

// ─── Màn hình nhập Passcode phòng thi ─────────────────────────────────────────
function PasscodePrompt({ requiredPasscode, onSuccess, onExit }: { requiredPasscode: string; onSuccess: () => void; onExit: () => void }) {
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass.trim() === requiredPasscode.trim()) {
      onSuccess();
    } else {
      setError(true);
      toast.error('Mật khẩu phòng thi không đúng!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-teal-100">
        <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">
          🔒
        </div>
        <h2 className="text-xl font-black text-gray-800 mb-1">Phòng thi có bảo mật</h2>
        <p className="text-xs text-gray-500 mb-6">Vui lòng nhập mật khẩu do Thầy Thọ cung cấp để vào làm bài</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={pass}
            onChange={(e) => { setPass(e.target.value); setError(false); }}
            placeholder="Nhập mật khẩu..."
            className={`w-full text-center text-lg font-mono font-bold tracking-widest px-4 py-3 border-2 rounded-2xl outline-none transition-all ${
              error ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-teal-500 focus:bg-teal-50/20'
            }`}
            autoFocus
          />

          <div className="flex gap-2">
            <button type="button" onClick={onExit} className="flex-1 py-3 text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-2xl transition">
              Quay lại
            </button>
            <button type="submit" className="flex-1 py-3 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-2xl shadow-lg shadow-teal-500/20 transition">
              Vào làm bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


// ─── GIAO DIỆN LÀM BÀI QUA LIÊN KẾT (LINK GOOGLE DRIVE/DOCS/FORM/PDF/WEB) ─────
function ExternalLinkExamRoom({
  room,
  exam,
  student,
  linkUrl,
  existingSubmissionId,
  onSubmitted,
  onExit
}: {
  room: any;
  exam: any;
  student: any;
  linkUrl: string;
  existingSubmissionId?: string;
  onSubmitted: (res: any) => void;
  onExit: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [studentNote, setStudentNote] = useState('');
  const [hasOpenedLink, setHasOpenedLink] = useState(false);
  const [timeLeft, setTimeLeft] = useState((room.time_limit || 45) * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async () => {
    if (!hasOpenedLink) {
      if (!confirm('Em chưa bấm mở liên kết làm bài tập. Em có chắc chắn muốn nộp bài luôn không?')) {
        return;
      }
    }
    setSubmitting(true);
    try {
      const payload = {
        status: 'submitted',
        score: 10,
        submitted_at: new Date().toISOString(),
        answers: { note: studentNote, completed_via_link: true, link_url: linkUrl },
        duration: Math.max(1, ((room.time_limit || 45) * 60 - timeLeft))
      };

      if (existingSubmissionId) {
        await supabase.from('exam_submissions').update(payload).eq('id', existingSubmissionId);
      } else {
        await supabase.from('exam_submissions').insert([{
          room_id: room.id,
          student_id: student.id,
          ...payload
        }]);
      }

      toast.success('🎉 Chúc mừng em đã hoàn thành và nộp bài tập thành công!');
      onSubmitted({
        totalScore: 10,
        score: 10,
        submitted_at: payload.submitted_at,
        examTitle: exam.title
      });
    } catch (err: any) {
      toast.error('Lỗi khi nộp bài: ' + (err?.message || err));
    } finally {
      setSubmitting(false);
    }
  };

  let embedUrl = linkUrl;
  if (linkUrl.includes('drive.google.com/file/d/')) {
    embedUrl = linkUrl.replace(/\/view.*$/, '/preview');
  } else if (linkUrl.includes('docs.google.com/document/d/')) {
    embedUrl = linkUrl.replace(/\/edit.*$/, '/preview');
  } else if (linkUrl.includes('docs.google.com/forms/d/')) {
    embedUrl = linkUrl.replace(/\/edit.*$/, '/viewform?embedded=true');
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <header className="h-16 px-4 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between sticky top-0 z-30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-bold text-slate-200 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>← Thoát</span>
          </button>
          <div>
            <h1 className="text-sm sm:text-base font-black text-white truncate max-w-xs sm:max-w-md">
              {exam.title || 'Bài Tập Qua Liên Kết'}
            </h1>
            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <span>Học sinh: <strong className="text-teal-400">{student.name}</strong></span>
              <span>•</span>
              <span>Lớp: <strong className="text-teal-400">{student.className || room.classes?.class_name || 'Hóa Học'}</strong></span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-slate-950/80 rounded-xl border border-slate-700 flex items-center gap-2">
            <span className="text-xs text-slate-400">⏱️ Thời gian:</span>
            <span className="font-mono text-sm sm:text-base font-black text-teal-400">
              {formatTimer(timeLeft)}
            </span>
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-50"
          >
            {submitting ? 'Đang nộp...' : '✅ Nộp Bài'}
          </button>
        </div>
      </header>

      <main className="flex-1 p-3 sm:p-5 max-w-6xl w-full mx-auto flex flex-col gap-4">
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-indigo-900/60 via-purple-900/50 to-slate-800 border-2 border-indigo-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-black uppercase tracking-wider border border-indigo-500/30">
              <span>🔗 BÀI TẬP QUA LIÊN KẾT TRỰC TUYẾN</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-white">
              {exam.title}
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl">
              Thầy Thọ đã giao bài tập này cho em qua liên kết dưới đây. Em hãy bấm nút để mở bài tập làm bài, sau khi hoàn thành quay lại đây bấm <strong>Nộp Bài</strong> nhé!
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={linkUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setHasOpenedLink(true)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black text-xs sm:text-sm shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>🚀 BẤM MỞ BÀI TẬP ĐỂ LÀM</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="flex-1 min-h-[480px] bg-slate-800/80 rounded-3xl border border-slate-700 overflow-hidden flex flex-col shadow-inner">
          <div className="h-10 px-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-bold">
              <span>📄 Xem trực tiếp bài tập:</span>
              <span className="font-mono text-slate-500 truncate max-w-md">{linkUrl}</span>
            </span>
            <a
              href={linkUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setHasOpenedLink(true)}
              className="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1"
            >
              <span>Mở toàn màn hình</span>
              <span>↗</span>
            </a>
          </div>

          <div className="flex-1 w-full relative">
            <iframe
              src={embedUrl}
              title="Khung bài tập liên kết"
              className="w-full h-full min-h-[500px] border-none bg-white rounded-b-3xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="w-full sm:flex-1">
            <input
              type="text"
              value={studentNote}
              onChange={(e) => setStudentNote(e.target.value)}
              placeholder="Ghi chú bài làm của em hoặc link bài nộp (nếu có)..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-50 shrink-0"
          >
            {submitting ? 'Đang nộp bài...' : '📤 Xác Nhận Đã Hoàn Thành & Nộp Bài'}
          </button>
        </div>
      </main>
    </div>
  );
}

export default function ExamRoomPage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  
  const [student, setStudent] = useState<any>(null)
  const [room, setRoom] = useState<any>(null)
  const [exam, setExam] = useState<any>(null)
  const [currentExamData, setCurrentExamData] = useState<any>(null) 
  
  const [answers, setAnswers] = useState<Record<number, any>>({}) 
  const [loading, setLoading] = useState(true)
  const [submissionId, setSubmissionId] = useState<string | undefined>()
  const [submittedResult, setSubmittedResult] = useState<any>(null)

  // Trạng thái kiểm soát Azota Pro
  const [passcodeVerified, setPasscodeVerified] = useState(false)
  const [timeStatus, setTimeStatus] = useState<'open' | 'waiting' | 'closed'>('open')
  const [gateOpensAt, setGateOpensAt] = useState<string>('')
  const [gateClosesAt, setGateClosesAt] = useState<string>('')

  const handleExit = async () => {
    navigate('/thi')
  }

  useEffect(() => {
    const sessionStr = localStorage.getItem('current_student')
    if (!sessionStr) {
      toast.error('Vui lòng đăng nhập qua cổng thi')
      navigate('/thi')
      return
    }
    const currentStudent = JSON.parse(sessionStr)
    setStudent(currentStudent)

    const loadExamData = async () => {
      try {
        const { data: roomData, error: roomErr } = await supabase.from('exam_rooms').select('*').eq('id', roomId).single()
        if (roomErr || !roomData) throw new Error('Không tìm thấy phòng thi')

        // 1. Kiểm tra quyền Thí sinh Tự Do (Thầy Thọ) -> Luôn được vào phòng thi
        const isFreeCandidate = currentStudent?.student_code?.toUpperCase() === 'THAYTHO' || 
                                currentStudent?.grade === 'Thí Sinh Tự Do' ||
                                currentStudent?.student_code?.toUpperCase() === 'TUDO';
        // 0. Kiểm tra Quyền Tổng Cấp từ Trang Chủ (Độc quyền Thầy Thọ)
        const accessConfig = await fetchHoa12AccessConfig();
        const isTeacher = isFreeCandidate || 
                          localStorage.getItem('is_teacher_mode') === 'true' || 
                          localStorage.getItem('hoa12_teacher_authenticated') === 'true' ||
                          localStorage.getItem('role') === 'teacher' ||
                          localStorage.getItem('role') === 'admin';
        
        const isGradeBlocked = isGradeLocked(currentStudent?.grade || roomData?.classes?.class_name || '', isTeacher, accessConfig);
        if ((accessConfig.is_locked || isGradeBlocked) && !isTeacher) {
          setTimeStatus('master_locked');
          setLoading(false);
          return;
        }


        if (isFreeCandidate) {
          setTimeStatus('open');
          setPasscodeVerified(true);
        } else {
          // Kiểm tra khung giờ làm bài (opens_at & closes_at)
          const opensAt = roomData.opens_at || roomData.settings?.opens_at;
          const closesAt = roomData.closes_at || roomData.settings?.closes_at;
          const now = new Date();

          if (opensAt && now < new Date(opensAt)) {
            setGateOpensAt(opensAt);
            setTimeStatus('waiting');
          } else if (closesAt && now > new Date(closesAt)) {
            setGateClosesAt(closesAt);
            setTimeStatus('closed');
          } else {
            setTimeStatus('open');
          }

          // Kiểm tra mật khẩu phòng thi
          const requiredPasscode = roomData.settings?.passcode;
          if (requiredPasscode && requiredPasscode.trim()) {
            const cachedPass = sessionStorage.getItem(`passcode_${roomId}`);
            if (cachedPass === requiredPasscode.trim()) {
              setPasscodeVerified(true);
            } else {
              setPasscodeVerified(false);
            }
          } else {
            setPasscodeVerified(true);
          }
        }

        setRoom(roomData)

        const { data: examData, error: examErr } = await supabase.from('exams').select('id, data, title').eq('id', roomData.exam_id).single()
        if (examErr || !examData) throw new Error('Không tìm thấy đề thi')
        setExam(examData)

        // ✅ Chuẩn hóa đề gốc ngay khi tải về (đảm bảo đầy đủ number, text, type, options letter)
        const normalizedBase = normalizeExamData(examData.data);

        const hasRealQuestions = normalizedBase.questions && normalizedBase.questions.length > 0 &&
          !normalizedBase.questions.every((q: any) => 
            /^(câu\s+\d+|câu\s+tự\s+luận\s+\d+):?$/i.test((q.text || '').trim())
          );
        const isPdf = !hasRealQuestions && (!!normalizedBase.pdfUrl || !!normalizedBase.pdfDriveUrl || !!normalizedBase.pdfBase64);
        
        const { data: submission } = await supabase
          .from('exam_submissions').select('*').eq('room_id', roomId).eq('student_id', currentStudent.id).maybeSingle()
        
        let finalExamData = normalizedBase;

        if (submission?.score_breakdown?.shuffled_exam?.questions && Array.isArray(submission.score_breakdown.shuffled_exam.questions) && submission.score_breakdown.shuffled_exam.questions.length > 0) {
          finalExamData = normalizeExamData(submission.score_breakdown.shuffled_exam);
        } else if (!isPdf && roomData.settings?.shuffle) {
          finalExamData = normalizeExamData(shuffleExamForStudent(normalizedBase));
        } else {
          finalExamData = normalizedBase;
        }

        // Đảm bảo tuyệt đối: finalExamData phải có mảng questions hợp lệ
        if (!finalExamData?.questions || !Array.isArray(finalExamData.questions) || finalExamData.questions.length === 0) {
          finalExamData = normalizedBase;
        }

        setCurrentExamData(finalExamData);

        if (submission) {
          setSubmissionId(submission.id)
          if (submission.status === 'submitted') {
            const b = submission.score_breakdown || {};
            const correct = (b.multipleChoice?.correct || 0) + (b.trueFalse?.correct || 0) + (b.shortAnswer?.correct || 0);
            const total = (b.multipleChoice?.total || 0) + (b.trueFalse?.total || 0) + (b.shortAnswer?.total || 0) || (finalExamData?.questions?.length || 0);
            
            setSubmittedResult({
              ...submission, student: currentStudent, percentage: b.percentage || 0,
              totalScore: submission.score || b.totalScore || 0, correctCount: correct,
              wrongCount: Math.max(0, total - correct), totalQuestions: total,
              scoreBreakdown: b,
              answers: submission.answers
            });
          } else {
            setAnswers(submission.answers || {})
          }
        } else {
          const { data: newSub } = await supabase.from('exam_submissions').upsert({
            room_id: roomId, student_id: currentStudent.id, status: 'in_progress', answers: {},
            score_breakdown: { shuffled_exam: finalExamData, attempt_count: 1 } 
          }, { onConflict: 'room_id, student_id' }).select().single()
          if (newSub) setSubmissionId(newSub.id)
        }

      } catch (err: any) {
        toast.error(err.message)
        navigate('/thi')
      } finally {
        setLoading(false)
      }
    }

    loadExamData()
  }, [roomId, navigate])

  const handleRetry = async () => {
    if (!confirm('Bạn có muốn thi lại? Kết quả cũ sẽ bị xóa hoàn toàn.')) return;
    try {
      const currentAttempt = submittedResult?.score_breakdown?.attempt_count || submittedResult?.scoreBreakDown?.attempt_count || 1;
      const currentHistory = submittedResult?.score_breakdown?.history || submittedResult?.scoreBreakDown?.history || [];
      
      const finishedAttemptData = {
        attempt: currentAttempt,
        score: submittedResult?.score ?? submittedResult?.totalScore,
        tab_switches: submittedResult?.tab_switches || 0,
        submitted_at: submittedResult?.submitted_at,
        duration: submittedResult?.duration || 0
      };
      
      const newHistory = [...currentHistory, finishedAttemptData];

      const normalizedBase = normalizeExamData(exam?.data);
      const hasRealQuestions = normalizedBase.questions && normalizedBase.questions.length > 0 &&
        !normalizedBase.questions.every((q: any) => 
          /^(câu\s+\d+|câu\s+tự\s+luận\s+\d+):?$/i.test((q.text || '').trim())
        );
      const isPdf = !hasRealQuestions && (!!normalizedBase.pdfUrl || !!normalizedBase.pdfDriveUrl || !!normalizedBase.pdfBase64);
      
      let nextExamData = normalizedBase;
      if (!isPdf) {
        // ✅ Luôn đảo và xáo trộn câu hỏi khi học sinh làm lại đề
        nextExamData = normalizeExamData(shuffleExamForStudent(normalizedBase));
      }

      await supabase.from('exam_submissions').update({
        status: 'in_progress',
        answers: {},
        score: null,
        score_breakdown: {
          shuffled_exam: nextExamData,
          attempt_count: currentAttempt + 1,
          history: newHistory
        },
        submitted_at: null,
        tab_switches: 0,
        tab_switch_warnings: [],
        duration: 0
      }).eq('id', submissionId);
      window.location.reload(); 
    } catch (e) {
      toast.error('Lỗi khi làm mới bài thi');
    }
  };

  // ✅ 1. HIỂN THỊ KẾT QUẢ SAU KHI NỘP BÀI
  if (submittedResult && currentExamData) {
    const mappedRoom = { 
      ...room, 
      examTitle: exam.title, 
      settings: { 
        ...room?.settings,
        showCorrectAnswers: true, 
        showExplanations: true, 
      } 
    };
    return (
      <ResultView 
        submission={submittedResult} 
        room={mappedRoom} 
        exam={{...currentExamData, title: exam.title}} 
        onExit={() => { navigate('/thi'); }} 
        onRetry={handleRetry} 
      />
    );
  }

  if (loading || !currentExamData) {
    return <div className="min-h-screen flex items-center justify-center text-teal-600 font-bold">♻️ Đang tải dữ liệu...</div>
  }

  // ✅ 2. KIỂM SOÁT THỜI GIAN MỞ / ĐÓNG ĐỀ THI
  if (timeStatus === 'master_locked') {
    return <MasterLockedScreen onExit={handleExit} />;
  }

  if (timeStatus === 'waiting' && gateOpensAt) {
    return <WaitingScreen opensAt={gateOpensAt} onTimeReached={() => setTimeStatus('open')} onExit={handleExit} />;
  }

  if (timeStatus === 'closed' && gateClosesAt) {
    return <ClosedScreen closesAt={gateClosesAt} onExit={handleExit} />;
  }

  // ✅ 3. KIỂM SOÁT MẬT KHẨU PHÒNG THI
  if (!passcodeVerified && room?.settings?.passcode) {
    return (
      <PasscodePrompt 
        requiredPasscode={room.settings.passcode} 
        onSuccess={() => {
          sessionStorage.setItem(`passcode_${roomId}`, room.settings.passcode);
          setPasscodeVerified(true);
          toast.success('Mở khóa phòng thi thành công!');
        }} 
        onExit={handleExit} 
      />
    );
  }

  // ✅ TÍNH TOÁN MÃ ĐỀ NGẪU NHIÊN CHUẨN AZOTA (101 -> 108)
  const studentSeed = (student?.id || '').split('').reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0);
  const roomSeed = (room?.code || '100').split('').reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0);
  const calculatedExamCode = 101 + ((studentSeed + roomSeed) % 8);

  const enrichedRoom = {
    ...room,
    examCode: calculatedExamCode,
    settings: {
      ...room.settings,
      examCode: calculatedExamCode
    }
  };

  const enrichedStudent = {
    ...student,
    name: student?.name || student?.full_name || 'Học sinh',
    full_name: student?.full_name || student?.name || 'Học sinh',
    className: student?.className || student?.classes?.class_name || student?.grade || ''
  };

  // ✅ 4. NẾU LÀ ĐỀ PDF -> MỞ GIAO DIỆN PDFExamRoom
  const questionsArr = currentExamData?.questions || [];
  const hasRealQuestions = questionsArr.length > 0 &&
    !questionsArr.every((q: any) => 
      /^(câu\s+\d+|câu\s+tự\s+luận\s+\d+):?$/i.test((q.text || '').trim())
    );
  // ✅ 3.5. NẾU LÀ ĐỀ THI / BÀI TẬP QUA LIÊN KẾT (LINK TÀI LIỆU) -> MỞ ExternalLinkExamRoom
  const assignmentLink = room?.settings?.assignment_link || currentExamData?.link_url;
  const isLinkExam = !!assignmentLink || !!currentExamData?.is_external_link;
  if (isLinkExam) {
    return (
      <ExternalLinkExamRoom
        room={enrichedRoom}
        exam={{ ...currentExamData, id: exam.id, title: exam.title }}
        student={enrichedStudent}
        linkUrl={assignmentLink || ''}
        existingSubmissionId={submissionId}
        onSubmitted={setSubmittedResult}
        onExit={handleExit}
      />
    );
  }

  const isPdfExam = !hasRealQuestions && (!!currentExamData?.pdfUrl || !!currentExamData?.pdfDriveUrl || !!currentExamData?.pdfBase64);
  if (isPdfExam) {
    return (
      <PDFExamRoom 
        room={enrichedRoom} 
        exam={{ ...currentExamData, id: exam.id, title: exam.title }} 
        student={enrichedStudent} 
        existingSubmissionId={submissionId} 
        onSubmitted={setSubmittedResult} 
        onExit={handleExit} 
      />
    );
  }

  // ✅ 5. NẾU LÀ ĐỀ WORD / LATEX -> MỞ GIAO DIỆN CHUNG ExamRoom
  return (
    <ExamRoom 
      room={enrichedRoom}
      exam={{ ...currentExamData, id: exam.id, title: exam.title }}
      student={enrichedStudent}
      existingSubmissionId={submissionId}
      initialAnswers={answers}
      onSubmitted={setSubmittedResult}
      onExit={handleExit}
    />
  );
}
