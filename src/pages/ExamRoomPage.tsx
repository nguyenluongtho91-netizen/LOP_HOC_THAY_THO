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
        showCorrectAnswers: true, 
        showExplanations: true, 
        ...room.settings 
      } 
    };
    return (
      <div className="relative">
        <ResultView 
          submission={submittedResult} 
          room={mappedRoom} 
          exam={{...currentExamData, title: exam.title}} 
          onExit={() => { navigate('/thi'); }} 
          onRetry={handleRetry} 
        />
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
          <button onClick={handleRetry} className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-bold shadow-xl hover:bg-blue-50 hover:scale-105 transition flex items-center gap-1.5 whitespace-nowrap">
            🔄 Bắt đầu thi lại (Đảo câu hỏi)
          </button>
          <button onClick={() => navigate('/thi')} className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold shadow-xl hover:scale-105 transition flex items-center gap-1.5 whitespace-nowrap">
            🏠 Về màn hình chính
          </button>
        </div>
      </div>
    );
  }

  if (loading || !currentExamData) {
    return <div className="min-h-screen flex items-center justify-center text-teal-600 font-bold">♻️ Đang tải dữ liệu...</div>
  }

  // ✅ 2. KIỂM SOÁT THỜI GIAN MỞ / ĐÓNG ĐỀ THI
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
