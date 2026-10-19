import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CalendarCheck } from 'lucide-react'

export default function Attendance() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const classId = searchParams.get('classId') || searchParams.get('class') || ''
    const target = classId 
      ? `/tuition?tab=session-attendance&classId=${classId}` 
      : `/tuition?tab=session-attendance`
    navigate(target, { replace: true })
  }, [navigate, searchParams])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-600 space-y-3">
      <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center animate-pulse">
        <CalendarCheck className="w-6 h-6" />
      </div>
      <p className="font-bold text-sm">
        Đang chuyển sang Bảng Điểm Danh Học Sinh & Quản Lý Học Phí...
      </p>
    </div>
  )
}
