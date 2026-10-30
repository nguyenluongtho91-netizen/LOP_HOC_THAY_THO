import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { ChevronLeft, BrainCircuit, Eye, AlertTriangle, FileSpreadsheet, Edit2 } from 'lucide-react'
import { exportExamRoomToExcel } from '@/services/examExportService'
import Modal from '@/components/Modal'
import EssayGraderPanel from '@/components/EssayGraderPanel'
import SubmissionDetailView from '@/components/SubmissionDetailView'
import toast from 'react-hot-toast'
import StudentScorecardModal from '@/components/StudentScorecardModal'
import { getExamCategory, getCategoryMeta } from '@/utils/practiceExamHelper'

export default function ExamResultsPage() {
  const { roomId } = useParams()
  const navigate = useNavigate()

  const [room, setRoom] = useState<any>(null)
  const [exam, setExam] = useState<any>(null)
  const [submissions, setSubmissions] = useState<any[]>([])
  const [notSubmittedStudents, setNotSubmittedStudents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const [selectedSub, setSelectedSub] = useState<any>(null)
  const [showEssayGrader, setShowEssayGrader] = useState(false)
  const [activeTab, setActiveTab] = useState<'submitted' | 'not_submitted'>('submitted')
  const [scorecardStudent, setScorecardStudent] = useState<any>(null)

  // ✅ Thầy điều chỉnh trực tiếp điểm của học sinh
  const [editingScoreSub, setEditingScoreSub] = useState<any>(null)
  const [newScoreVal, setNewScoreVal] = useState<string>('')
  const [savingScore, setSavingScore] = useState(false)

  useEffect(() => {
    loadAllData()
  }, [roomId])

  const loadAllData = async () => {
    setLoading(true)
    try {
      const { data: roomData } = await supabase
        .from('exam_rooms')
        .select('*, exams(title, data)')
        .eq('id', roomId)
        .single()

      setRoom(roomData)
      setExam(roomData.exams)

      const { data: subs } = await supabase
        .from('exam_submissions')
        .select('*, students(id, full_name, student_code)')
        .eq('room_id', roomId)
        .order('submitted_at', { ascending: false })

      const rawSubs = subs || []
      // Bài có điểm 0 (hoặc 0.0) sẽ được xem như chưa làm
      const activeSubs = rawSubs.filter((s: any) => s.score !== 0)
      setSubmissions(activeSubs)

      // Lấy danh sách học sinh thuộc các lớp được giao để tìm ai chưa nộp
      const assignedClassIds: string[] = Array.isArray(roomData?.settings?.assigned_class_ids) && roomData.settings.assigned_class_ids.length > 0
        ? roomData.settings.assigned_class_ids
        : roomData?.class_id ? [roomData.class_id] : []

      if (assignedClassIds.length > 0) {
        const { data: enrolledStudents } = await supabase
          .from('enrollments')
          .select('student_id, students(id, full_name, student_code)')
          .in('class_id', assignedClassIds)
          .eq('status', 'active')

        if (enrolledStudents) {
          const activeStudentIds = new Set(activeSubs.map((s: any) => s.student_id))
          const studentMap = new Map()
          enrolledStudents.forEach((e: any) => {
            if (e.students && !activeStudentIds.has(e.student_id)) {
              studentMap.set(e.student_id, e.students)
            }
          })
          setNotSubmittedStudents(Array.from(studentMap.values()))
        }
      }
    } catch (err) {
      toast.error('Không thể tải dữ liệu kết quả')
    } finally {
      setLoading(false)
    }
  }

  // ✅ Lưu điểm điều chỉnh trực tiếp
  const handleDirectScoreSave = async () => {
    const num = parseFloat(newScoreVal);
    if (isNaN(num) || num < 0 || num > 10) {
      toast.error('Vui lòng nhập điểm từ 0 đến 10');
      return;
    }
    setSavingScore(true);
    try {
      const rounded = parseFloat(num.toFixed(2));
      const currentSb = { ...(editingScoreSub.score_breakdown || {}) };
      currentSb.totalScore = rounded;
      currentSb.percentage = Math.round((rounded / 10) * 100);

      const { error } = await supabase
        .from('exam_submissions')
        .update({
          score: rounded,
          score_breakdown: currentSb
        })
        .eq('id', editingScoreSub.id);

      if (error) throw error;

      setSubmissions(prev => prev.map(s => s.id === editingScoreSub.id ? { ...s, score: rounded, score_breakdown: currentSb } : s));
      toast.success(`Đã cập nhật điểm thành công: ${rounded}đ`);
      setEditingScoreSub(null);
    } catch (err: any) {
      toast.error('Lỗi khi cập nhật điểm: ' + (err?.message || err));
    } finally {
      setSavingScore(false);
    }
  };

  const handleEssayScoreUpdate = async (submissionId: string, qNum: number, score: number, feedback: string) => {
    try {
      const sub = submissions.find(s => s.id === submissionId)
      if (!sub) return

      const currentSb = { ...(sub.score_breakdown || {}) }
      
      if (!currentSb.essay) {
        currentSb.essay = {
          total: 0,
          points: 0,
          details: {}
        }
      } else {
        currentSb.essay = {
          ...currentSb.essay,
          details: { ...(currentSb.essay.details || {}) }
        }
      }

      // Cập nhật chi tiết câu hỏi tự luận này
      currentSb.essay.details[String(qNum)] = {
        score,
        feedback
      }

      // Tính toán lại tổng điểm phần tự luận
      let totalEssayPoints = 0
      Object.values(currentSb.essay.details).forEach((detail: any) => {
        totalEssayPoints += detail?.score || 0
      })
      currentSb.essay.points = parseFloat(totalEssayPoints.toFixed(2))

      // Tính toán lại tổng điểm toàn bộ bài thi
      const mcPoints = currentSb.multipleChoice?.points || 0
      const tfPoints = currentSb.trueFalse?.points || 0
      const saPoints = currentSb.shortAnswer?.points || 0
      
      const newTotalScore = mcPoints + tfPoints + saPoints + totalEssayPoints
      const roundedScore = parseFloat(newTotalScore.toFixed(2))

      // Tính lại tỷ lệ phần trăm
      const maxScore = room?.exams?.data?.pointsConfig?.maxScore || 10
      const newPercentage = Math.min(100, Math.max(0, Math.round((roundedScore / maxScore) * 100)))

      currentSb.totalScore = roundedScore
      currentSb.percentage = newPercentage

      // Cập nhật lên Supabase
      const { error } = await supabase
        .from('exam_submissions')
        .update({
          score: roundedScore,
          score_breakdown: currentSb
        })
        .eq('id', submissionId)

      if (error) throw error

      // Cập nhật state local ngay lập tức để đồng bộ UI mượt mà
      setSubmissions(prev => prev.map(s => {
        if (s.id === submissionId) {
          return {
            ...s,
            score: roundedScore,
            score_breakdown: currentSb
          }
        }
        return s
      }))
      
      toast.success(`Đã lưu điểm tự luận câu ${qNum} cho học sinh`)
    } catch (err: any) {
      toast.error('Lỗi khi lưu điểm tự luận: ' + (err?.message || err))
    }
  }

  const totalEnrolled = submissions.length + notSubmittedStudents.length

  if (loading) return <div className="p-20 text-center text-teal-600 font-bold">Đang tải bảng điểm...</div>

  const category = getExamCategory(room)
  const catMeta = getCategoryMeta(category)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/exam-rooms')} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${catMeta.tagBg}`}>
                <span>{catMeta.icon}</span>
                <span>{catMeta.label}</span>
              </span>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                🛡️ Giám sát chuyển tab
              </span>
            </div>
            <h1 className="section-title text-2xl">Kết quả: {room?.exams?.title}</h1>
            <p className="text-gray-400 text-sm">
              Mã phòng: <span className="font-mono font-bold text-teal-600">{room?.code}</span> · {submissions.length}/{totalEnrolled} đã nộp
              {notSubmittedStudents.length > 0 && (
                <span className="text-red-500 font-semibold"> · {notSubmittedStudents.length} chưa nộp</span>
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={async () => {
              try {
                toast.loading('Đang xuất file Excel...', { id: 'export-results' })
                await exportExamRoomToExcel({
                  roomId: room.id,
                  room,
                  exam,
                  submissions,
                  notSubmittedStudents
                })
                toast.success('Xuất file Excel thành công!', { id: 'export-results' })
              } catch (err: any) {
                toast.error('Lỗi khi xuất file: ' + (err?.message || err), { id: 'export-results' })
              }
            }}
            className="btn-teal bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2 w-max shadow-sm"
          >
            <FileSpreadsheet className="w-4 h-4" /> Xuất file Excel
          </button>

          <button
            onClick={() => setShowEssayGrader(true)}
            className="btn-teal bg-violet-600 hover:bg-violet-700 flex items-center gap-2 w-max"
          >
            <BrainCircuit className="w-4 h-4" /> Khảo Thí Tự Luận
          </button>
        </div>
      </div>

      {/* Tab Selector */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('submitted')}
          className={`px-5 py-2.5 font-bold text-sm transition-all border-b-2 -mb-px flex items-center gap-1.5 ${
            activeTab === 'submitted'
              ? 'border-teal-600 text-teal-600'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          📝 Đã làm ({submissions.length})
        </button>
        <button
          onClick={() => setActiveTab('not_submitted')}
          className={`px-5 py-2.5 font-bold text-sm transition-all border-b-2 -mb-px flex items-center gap-1.5 ${
            activeTab === 'not_submitted'
              ? 'border-teal-600 text-teal-600'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          ⏳ Chưa làm ({notSubmittedStudents.length})
        </button>
      </div>

      {activeTab === 'submitted' ? (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-left font-bold text-gray-600">Học sinh</th>
                <th className="px-6 py-4 text-center font-bold text-gray-600">Trạng thái</th>
                <th className="px-6 py-4 text-center font-bold text-gray-600">Số lần thi</th>
                <th className="px-6 py-4 text-center font-bold text-gray-600">Cảnh báo vi phạm</th>
                <th className="px-6 py-4 text-center font-bold text-gray-600">Điểm</th>
                <th className="px-6 py-4 text-center font-bold text-gray-600">Số câu đúng</th>
                <th className="px-6 py-4 text-right font-bold text-gray-600">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {/* Học sinh đã nộp bài / đang làm */}
              {[...submissions]
                .sort((a, b) => {
                  const scoreA = a.score ?? -1
                  const scoreB = b.score ?? -1
                  return scoreB - scoreA
                })
                .map((sub) => {
                  const sb = sub.score_breakdown || {}
                  const historyTabSwitches = (sb.history || []).reduce((sum: number, att: any) => sum + (att.tab_switches || 0), 0)
                  const totalTabSwitches = (sub.tab_switches || 0) + historyTabSwitches

                  // ✅ FIX BUG 2+5: correctCount từ score_breakdown, không phải correct_count
                  const mcCorrect = sb.multipleChoice?.correct || 0
                  const tfCorrect = sb.trueFalse?.correct || 0
                  const saCorrect = sb.shortAnswer?.correct || 0
                  const computedCorrectCount = mcCorrect + tfCorrect + saCorrect

                  // ✅ FIX BUG 5: totalQuestions từ exam.questions.length (đầy đủ)
                  const examQuestions = exam?.data?.questions || []
                  const totalQCount = examQuestions.length ||
                    ((sb.multipleChoice?.total || 0) + (sb.trueFalse?.total || 0) + (sb.shortAnswer?.total || 0))

                  const formattedSub = {
                    ...sub,
                    student: {
                      name: sub.students?.full_name,
                      className: '',
                      studentCode: sub.students?.student_code
                    },
                    roomCode: room.code,
                    totalScore: sub.score || sb.totalScore || 0,
                    percentage: sb.percentage || 0,
                    // ✅ FIX: dùng correct_count từ DB nếu có, fallback sang compute
                    correctCount: sub.correct_count ?? computedCorrectCount,
                    totalQuestions: totalQCount,
                    duration: sub.duration || 0,
                    tabSwitchCount: totalTabSwitches,
                    scoreBreakdown: sb,           // ✅ FIX BUG 1: map đúng tên camelCase
                    answers: sub.answers          // ✅ đảm bảo answers luôn có
                  }

                  return (
                    <tr key={sub.id} className="hover:bg-teal-50/30 transition-colors">
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setScorecardStudent({
                            id: sub.student_id,
                            full_name: sub.students?.full_name,
                            student_code: sub.students?.student_code
                          })}
                          className="font-bold text-gray-800 hover:text-teal-600 hover:underline text-left"
                        >
                          {sub.students?.full_name}
                        </button>
                        <div className="text-xs text-gray-400 font-mono">{sub.students?.student_code}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          sub.status === 'submitted'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {sub.status === 'submitted' ? 'Đã nộp' : 'Đang làm'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-bold text-gray-700">
                        {sb.attempt_count || 1}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {totalTabSwitches > 0 ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-extrabold bg-red-50 text-red-700 border border-red-200 shadow-sm animate-pulse">
                            ⚠️ Chuyển tab {totalTabSwitches} lần
                          </span>
                        ) : (
                          <span className="text-gray-400 text-xs font-semibold">✅ Bình thường</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center font-bold text-teal-600 text-lg">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingScoreSub(sub);
                            setNewScoreVal(sub.score != null ? String(sub.score) : '');
                          }}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl hover:bg-teal-100/60 transition-all cursor-pointer group"
                          title="Bấm để điều chỉnh điểm của học sinh này"
                        >
                          <span className="text-teal-700 font-black">{sub.score != null ? sub.score.toFixed(2) : '—'}</span>
                          <span className="text-[11px] text-teal-400 opacity-60 group-hover:opacity-100 group-hover:text-teal-700 transition-all">✏️</span>
                        </button>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {sub.status === 'submitted'
                          ? <span className="font-semibold">{computedCorrectCount}<span className="text-gray-400 font-normal">/{totalQCount}</span></span>
                          : '—'}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingScoreSub(sub);
                              setNewScoreVal(sub.score != null ? String(sub.score) : '');
                            }}
                            className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-all"
                            title="Điều chỉnh điểm học sinh"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setSelectedSub(formattedSub)}
                            className="p-2 text-teal-600 hover:bg-teal-100 rounded-lg transition-all"
                            title="Xem chi tiết câu trả lời"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}

              {submissions.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center text-gray-400">
                    Chưa có học sinh nào nộp bài.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="card p-6 bg-slate-50/50">
          {notSubmittedStudents.length === 0 ? (
            <p className="text-center text-gray-400 font-bold py-12">🎉 Tất cả học sinh đã nộp bài!</p>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-red-600 font-bold text-lg md:text-xl p-4 bg-red-50 rounded-xl border border-red-100">
                <AlertTriangle className="w-6 h-6 flex-shrink-0 text-red-600 animate-pulse" />
                <span>Danh sách các bạn chưa hoàn thành bài tập về nhà, hãy nhanh chóng làm trước buổi học tiếp theo!!!!</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {notSubmittedStudents.map((student) => (
                  <button 
                    key={student.id} 
                    onClick={() => setScorecardStudent(student)}
                    className="bg-white border border-slate-200/80 rounded-xl p-4 font-bold text-gray-800 text-center shadow-sm hover:border-teal-500 hover:text-teal-600 hover:shadow-md cursor-pointer transition-all duration-200 flex items-center justify-center min-h-[60px]"
                  >
                    {student.full_name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <Modal open={showEssayGrader} onClose={() => setShowEssayGrader(false)} title="Khảo Thí & Chấm Bài Tự Luận Theo Đáp Án Chuẩn" size="3xl">
        <div className="p-2">
          <EssayGraderPanel
            submissions={submissions.map(s => ({ ...s, student: { name: s.students?.full_name } }))}
            questions={exam?.data?.questions || []}
            onScoreUpdate={handleEssayScoreUpdate}
          />
        </div>
      </Modal>

      {selectedSub && (() => {
        // ✅ FIX ROOT CAUSE: Dùng shuffled_exam của học sinh nếu có.
        // Khi shuffle bật, câu hỏi được đánh số lại 1,2,3...
        // Answers lưu theo số mới đó, không khớp với đề gốc (101,102...).
        // → Phải dùng đúng đề mà học sinh đã làm để xem bài.
        const studentExam = selectedSub.scoreBreakdown?.shuffled_exam
          || selectedSub.score_breakdown?.shuffled_exam
          || exam.data;
        return (
          <SubmissionDetailView
            submission={selectedSub}
            exam={{ ...studentExam, title: exam.title }}
            room={room}
            onClose={() => setSelectedSub(null)}
            onScoreUpdated={(updated) => {
              setSubmissions(prev => prev.map(s => s.id === updated.id ? updated : s));
              setSelectedSub(updated);
            }}
          />
        );
      })()}

      {/* MODAL ĐIỀU CHỈNH ĐIỂM HỌC SINH */}
      <Modal 
        open={!!editingScoreSub} 
        onClose={() => setEditingScoreSub(null)} 
        title={`Điều chỉnh điểm: ${editingScoreSub?.students?.full_name || 'Học sinh'}`} 
        size="md"
      >
        <div className="space-y-4 p-2">
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1">
            <p><strong>Học sinh:</strong> {editingScoreSub?.students?.full_name} ({editingScoreSub?.students?.student_code})</p>
            <p><strong>Điểm hiện tại:</strong> <span className="font-bold text-teal-700 text-sm">{editingScoreSub?.score != null ? editingScoreSub.score.toFixed(2) : '—'} điểm</span></p>
          </div>

          <div>
            <label className="text-xs font-black text-slate-800 block mb-1.5">
              Nhập Điểm Mới (Thang điểm 10) *
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="10"
              value={newScoreVal}
              onChange={(e) => setNewScoreVal(e.target.value)}
              placeholder="VD: 8.5"
              className="input text-base font-black text-teal-900 bg-white border-teal-300 w-full"
              autoFocus
            />
          </div>

          {/* Nút bấm cộng nhanh */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold text-slate-500">Cộng nhanh:</span>
            {[0.25, 0.5, 1.0].map(bonus => (
              <button
                key={bonus}
                type="button"
                onClick={() => {
                  const curr = parseFloat(newScoreVal) || editingScoreSub?.score || 0;
                  const next = Math.min(10, parseFloat((curr + bonus).toFixed(2)));
                  setNewScoreVal(String(next));
                }}
                className="px-2.5 py-1 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 rounded-lg text-xs font-bold transition-all cursor-pointer"
              >
                +{bonus}đ
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                const curr = parseFloat(newScoreVal) || editingScoreSub?.score || 0;
                setNewScoreVal(String(Math.round(curr)));
              }}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-lg text-xs font-bold transition-all cursor-pointer"
            >
              Làm tròn điểm
            </button>
          </div>

          <div className="flex justify-end gap-2.5 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setEditingScoreSub(null)}
              className="px-5 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 text-xs cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={handleDirectScoreSave}
              disabled={savingScore || newScoreVal === ''}
              className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 font-black text-white text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
            >
              {savingScore ? 'Đang lưu...' : '💾 Lưu điểm mới'}
            </button>
          </div>
        </div>
      </Modal>

      <StudentScorecardModal
        student={scorecardStudent}
        open={!!scorecardStudent}
        onClose={() => setScorecardStudent(null)}
      />
    </div>
  )
}
